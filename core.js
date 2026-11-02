export const STORAGE_KEY = 'xunzhang-accounting-v1';
export const DAY = 86400000;
export const statuses = {unstarted:'未开始',learning:'学习中',question:'仍有疑问',passed:'已通过自测'};
export const uid = () => globalThis.crypto.randomUUID();
export const emptyState = () => ({app:'xunzhang',version:1,attempts:[],notes:[],progress:{},lastNode:null,lastAt:0});
export const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const plain = value => value && typeof value === 'object' && !Array.isArray(value);
const safeId = id => typeof id === 'string' && /^[a-zA-Z0-9_-]{1,100}$/.test(id);
const stamp = at => Number.isFinite(at) && at >= 0;
export function validState(s){
  return plain(s) && s.app==='xunzhang' && s.version===1
    && Array.isArray(s.attempts) && s.attempts.length<=50000
    && s.attempts.every(a=>plain(a)&&safeId(a.id)&&safeId(a.questionId)&&safeId(a.nodeId)&&Number.isInteger(a.selected)&&a.selected>=0&&a.selected<4&&typeof a.correct==='boolean'&&typeof a.hinted==='boolean'&&stamp(a.at)&&typeof a.errorType==='string'&&a.errorType.length<100)
    && Array.isArray(s.notes) && s.notes.length<=5000
    && s.notes.every(n=>plain(n)&&safeId(n.id)&&(n.nodeId===null||safeId(n.nodeId))&&typeof n.body==='string'&&n.body.length<=30000&&['理解','疑问','课堂补充','随手记'].includes(n.kind)&&stamp(n.updatedAt)&&typeof n.deleted==='boolean')
    && plain(s.progress) && Object.keys(s.progress).length<=2000
    && Object.entries(s.progress).every(([id,p])=>safeId(id)&&plain(p)&&Object.hasOwn(statuses,p.status)&&stamp(p.updatedAt))
    && (s.lastNode===null||safeId(s.lastNode)) && stamp(s.lastAt);
}
function latestById(items, field){
  const result = new Map();
  for(const item of items){const old=result.get(item.id);if(!old||item[field]>=old[field]) result.set(item.id,item);}
  return [...result.values()];
}
export function mergeStates(a,b){
  if(!validState(a)||!validState(b)) throw new Error('这不是有效的会计备份，原有记录已保留。');
  const progress = Object.fromEntries([...new Set([...Object.keys(a.progress),...Object.keys(b.progress)])].map(id=>{
    const x=a.progress[id],y=b.progress[id];return [id,!x?y:!y?x:x.updatedAt>y.updatedAt?x:y];
  }));
  const last = a.lastAt>b.lastAt?a:b;
  return {app:'xunzhang',version:1,attempts:latestById([...a.attempts,...b.attempts],'at').sort((x,y)=>x.at-y.at),notes:latestById([...a.notes,...b.notes],'updatedAt'),progress,lastNode:last.lastNode,lastAt:last.lastAt};
}
export function latestAttempts(s){
  const result=new Map();for(const a of s.attempts){const old=result.get(a.questionId);if(!old||a.at>=old.at)result.set(a.questionId,a);}return result;
}
export function addAttempt(s,q,nodeId,selected,hinted,at=Date.now(),id=uid()){
  if(!Number.isInteger(selected)||selected<0||selected>=q.options.length) throw new Error('请先选择答案。');
  return {...s,attempts:[...s.attempts,{id,questionId:q.id,nodeId,selected,correct:selected===q.answer,hinted:Boolean(hinted),at,errorType:q.errorType||'概念混淆'}]};
}
export function reviewItems(s,questions,now=Date.now()){
  const latest=latestAttempts(s);
  return questions.flatMap(q=>{
    const a=latest.get(q.id);if(!a)return [];
    const history=s.attempts.filter(t=>t.questionId===q.id);
    const wasWeak=history.some(t=>!t.correct||t.hinted);
    if(!wasWeak)return [];
    let streak=0;for(let i=history.length-1;i>=0;i--){if(history[i].correct&&!history[i].hinted)streak++;else break;}
    const interval=!a.correct?1:a.hinted?1:Math.min(30,[1,3,7,14,30][Math.min(streak,4)]);
    return [{q,attempt:a,dueAt:a.at+interval*DAY,needsWork:!a.correct||a.hinted,due:now>=a.at+interval*DAY,streak}];
  }).sort((x,y)=>Number(y.due)-Number(x.due)||Number(y.needsWork)-Number(x.needsWork)||x.dueAt-y.dueAt);
}
export function nodeScore(s,node){
  const latest=latestAttempts(s);const qs=node.questions;
  return {total:qs.length,seen:qs.filter(q=>latest.has(q.id)).length,independent:qs.filter(q=>{const a=latest.get(q.id);return a?.correct&&!a.hinted;}).length};
}
export function statusOf(s,node){
  const explicit=s.progress[node.id];if(explicit?.status==='question') return 'question';
  const p=nodeScore(s,node);if(p.total&&p.independent===p.total)return 'passed';
  return explicit?.status==='learning'||p.seen?'learning':'unstarted';
}
export function formatDate(at){return new Intl.DateTimeFormat('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(at);}
export function markdownNotes(s,nodes,lang='zh'){
  const byId=new Map(nodes.map(n=>[n.id,n]));
  const en=lang==='en',kinds={'理解':'Understanding','疑问':'Question','课堂补充':'Class notes','随手记':'Quick note'};
  return [en?'# Accounting · My learning notes':'# 会计 · Accounting · 我的学习记录',`${en?'Exported':'导出时间'}：${new Date().toISOString()}`,'',en?'Use the JSON backup to restore and merge records across devices. This Markdown file is for reading.':'说明：JSON 备份用于恢复与跨设备合并；本文件用于阅读。','',...s.notes.filter(n=>!n.deleted).sort((a,b)=>b.updatedAt-a.updatedAt).flatMap(n=>[`## ${en?kinds[n.kind]:n.kind} · ${byId.get(n.nodeId)?.title||(en?'Quick note':'随手记')}`,`${byId.get(n.nodeId)?.en||''} · ${formatDate(n.updatedAt)}`,'',n.body,'']), en?'## Self-check records':'## 自测记录','',...nodes.filter(n=>nodeScore(s,n).seen).map(n=>{const p=nodeScore(s,n);return en?`- ${n.title}: latest independent correct ${p.independent}/${p.total}; attempted ${p.seen}/${p.total}.`:`- ${n.title}：最近一次无提示答对 ${p.independent}/${p.total}；练过 ${p.seen}/${p.total}。`;})].join('\n');
}
