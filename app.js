import {STORAGE_KEY,emptyState,validState,mergeStates,esc,uid,statuses,statusOf,nodeScore,addAttempt,reviewItems,markdownNotes} from './core.js';
import {lectures as rawLectures,nodes as rawNodes,futureTopics as rawFutureTopics,sourcePolicy} from './content/index.js';
import {LANGUAGE_KEY,tr,translateDOM} from './i18n.js';
import {labHTML,updateLab} from './labs.js';

const $=s=>document.querySelector(s);
let lang='zh';try{lang=localStorage.getItem(LANGUAGE_KEY)==='en'?'en':'zh';}catch{}
let lectures,nodes,nodeById,questions,questionById,futureTopics;
const formatDate=at=>new Intl.DateTimeFormat(lang==='en'?'en-GB':'zh-CN',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}).format(at);
const confirm=message=>window.confirm(tr(message,lang));
function localizeContent(){
 lectures=rawLectures.map(l=>({...l,title:lang==='en'?l.en:l.title,en:lang==='en'?'':l.en,description:lang==='en'?l.descriptionEn:l.description}));
 nodes=rawNodes.map(n=>{const e=n.english;return {...n,...(lang==='en'?{...e,title:n.en,en:'',questions:n.questions.map(q=>({...q,...e.questions.find(x=>x.id===q.id)}))}:{}),lectureId:n.lectureId,lectureNumber:n.lectureNumber,source:n.source};});
 nodeById=new Map(nodes.map(n=>[n.id,n]));questions=nodes.flatMap(n=>n.questions.map(q=>({...q,nodeId:n.id})));questionById=new Map(questions.map(q=>[q.id,q]));
 futureTopics=rawFutureTopics.map(f=>({...f,title:lang==='en'?f.en:f.title,en:lang==='en'?'':f.en}));
}
localizeContent();
function localizeUI(){
 translateDOM(document.body,lang);document.documentElement.lang=lang==='en'?'en':'zh-CN';
 $('#language-toggle').textContent=lang==='en'?'中文':'English';
 $('#language-toggle').setAttribute('aria-label',lang==='en'?'切换到中文':'Switch to English');
}

const main=$('#main');
let state=emptyState(),storageError='',invalidOriginal=null,noteTimer,noteContext=null,practice=null;
const drafts=new Map();
try {const raw=localStorage.getItem(STORAGE_KEY);if(raw){const parsed=JSON.parse(raw);if(!validState(parsed))throw new Error('备份格式异常');state=parsed;}}
catch{try{invalidOriginal=localStorage.getItem(STORAGE_KEY);}catch{}storageError='无法读取本机记录，请先导出恢复副本。';}
const icon={map:'知识地图',continue:'继续学习',review:'错题复习',notes:'我的记录'};
function notify(message){$('#toast').textContent=tr(message,lang);$('#toast').classList.add('visible');clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('#toast').classList.remove('visible'),4200);}
function persist(){
  try {
    if(invalidOriginal){localStorage.setItem(`${STORAGE_KEY}-recovery`,invalidOriginal);invalidOriginal=null;}
    const disk=localStorage.getItem(STORAGE_KEY);
    if(disk){try{const parsed=JSON.parse(disk);if(validState(parsed))state=mergeStates(parsed,state);}catch{}}
    const raw=JSON.stringify(state);if(!validState(state))throw new Error('记录容量或格式超过限制，请导出备份。');
    localStorage.setItem(STORAGE_KEY,raw);storageError='';
  }catch{storageError='本机保存失败，请立即导出备份。';notify(storageError);}
  updateCounts();
}
function updateCounts(){
  $('#notes-count').textContent=state.notes.filter(n=>!n.deleted).length||'';
  $('#review-count').textContent=reviewItems(state,questions).filter(r=>r.needsWork||r.due).length||'';
  $('#save-status').textContent=storageError||'已保存在本机 · 自动同步未开启';
  $('#save-status').classList.toggle('error',Boolean(storageError));
  translateDOM($('.sidebar'),lang);
}
const noteCount=id=>state.notes.filter(n=>!n.deleted&&n.nodeId===id).length;
const badges=n=>`<span class="status ${statusOf(state,n)}">${statuses[statusOf(state,n)]}</span>`;
const linkNode=id=>`#learn/${encodeURIComponent(id)}`;
function header(kicker,title,description,extra=''){return `<div class="page-heading"><div><div class="eyebrow">${kicker}</div><h1>${title}</h1><p>${description}</p></div>${extra}</div>`;}
function renderMap(){
  const seen=nodes.filter(n=>statusOf(state,n)!=='unstarted').length;
  const passed=nodes.filter(n=>statusOf(state,n)==='passed').length;
  main.innerHTML=header('YOUR KNOWLEDGE, CONNECTED','把会计，学成一张地图。','从一笔业务出发，理解账户如何变化，再把财务报表连接起来。',`<a class="primary" href="${linkNode(nodeById.has(state.lastNode)?state.lastNode:nodes[0].id)}">${state.lastNode?'继续上次学习':'从基础开始'} <span aria-hidden="true">↗</span></a>`)
    +`<section class="overview" aria-label="学习概览"><div><span class="overview-number">${String(lectures.length).padStart(2,'0')}</span><span>现有课件章节</span></div><div><span class="overview-number">${nodes.length}</span><span>可进入的知识点</span></div><div><span class="overview-number">${seen}<small> / ${nodes.length}</small></span><span>已经开始探索</span></div><div><span class="overview-number">${passed}</span><span>通过本节自测</span></div><div class="overview-aside">不赶进度。<br>每次弄懂一点，随时接着学。</div></section>`
    +`<div class="map-intro"><div><h2>课程全貌 <span class="muted small">THE BIG PICTURE</span></h2><p class="muted">按讲次展开，也可以直接搜索你正在困惑的概念。</p></div><a class="text-link" href="#connections">查看知识之间的联系 ↗</a></div>`
    +`<div class="route-strip" aria-label="课程主线">${lectures.map(l=>`<button data-action="jump-lecture" data-id="${l.id}"><span>0${l.number}</span>${esc(l.title)}</button>`).join('<i aria-hidden="true">→</i>')}</div>`
    +`<div class="map-tools"><label class="search-field"><span aria-hidden="true">⌕</span><input id="map-search" type="search" placeholder="搜索知识点、英文术语或缩写…" aria-label="搜索知识地图"></label><label class="sr-only" for="map-status">学习状态</label><select id="map-status"><option value="all">全部状态</option><option value="unstarted">未开始</option><option value="learning">学习中</option><option value="question">仍有疑问</option><option value="passed">已通过自测</option></select><button class="text-btn" data-action="expand-all">展开全部</button></div>`
    +`<div id="map-result-count" class="small muted" role="status">${nodes.length} 个知识点 · 每个节点都可打开学习</div><div class="lecture-list">${lectures.map((l,i)=>{
      const group=nodes.filter(n=>n.lectureId===l.id),done=group.filter(n=>statusOf(state,n)==='passed').length;
      return `<details class="lecture" id="${l.id}" ${i===0?'open':''}><summary><span class="lecture-index">0${l.number}</span><div class="lecture-summary"><h2>${esc(l.title)}</h2><span>${esc(l.en)}</span></div><span class="lecture-meta">${group.length} 个知识点 <small>${done} 个通过自测</small></span><span class="chevron" aria-hidden="true">＋</span></summary><p class="lecture-description">${esc(l.description)}</p><div class="node-list">${group.map(n=>`<a class="node-row" href="${linkNode(n.id)}" data-node="${n.id}"><span class="node-dot ${statusOf(state,n)}" aria-hidden="true"></span><div><h3>${esc(n.title)}</h3><span class="node-en">${esc(n.en)}</span><p>${esc(n.summary)}</p></div><div class="node-row-end">${badges(n)}${noteCount(n.id)?`<span class="small muted">${noteCount(n.id)} 条记录</span>`:''}<span aria-hidden="true">↗</span></div></a>`).join('')}</div></details>`;
    }).join('')}</div><p id="map-empty" class="empty hidden">没有找到匹配的知识点。试试英文全称、缩写或更短的关键词。</p>`
    +`<section class="future"><div class="eyebrow">ROOM TO GROW</div><h2>课程继续，地图也会生长。</h2><p>以下方向来自第1讲课程安排，等待后续课件后继续整理。</p><div>${futureTopics.map(f=>`<span><b>${esc(f.title)}</b><small>${esc(f.en)}</small><em>待补课件</em></span>`).join('')}</div></section><p class="source-policy">${esc(tr(sourcePolicy,lang))}</p>`;
  $('#map-search').addEventListener('input',filterMap);$('#map-status').addEventListener('change',filterMap);
}
function filterMap(){
  const term=$('#map-search').value.trim().toLowerCase(),status=$('#map-status').value;let count=0;
  for(const section of document.querySelectorAll('.lecture')){
    let visible=0;
    for(const row of section.querySelectorAll('[data-node]')){
      const n=nodeById.get(row.dataset.node);
      const search=[n.title,n.en,n.summary,...n.explanation,...n.rules].join(' ').toLowerCase();
      const show=(!term||search.includes(term))&&(status==='all'||statusOf(state,n)===status);
      row.hidden=!show;if(show)visible++;
    }
    section.hidden=!visible;if(term||status!=='all')section.open=visible>0;count+=visible;
  }
  $('#map-result-count').textContent=`${count} 个匹配知识点`;
  $('#map-empty').classList.toggle('hidden',count>0);
}
function relationLinks(ids){return ids.filter(id=>nodeById.has(id)).map(id=>`<a href="${linkNode(id)}">${esc(nodeById.get(id).title)} <span aria-hidden="true">↗</span></a>`).join('');}
function renderLesson(id){
  const n=nodeById.get(id);if(!n){main.innerHTML=header('NOT FOUND','这个知识点暂不存在','从知识地图重新选择一个节点。')+'<a href="#map">返回知识地图</a>';return;}
  state.lastNode=id;state.lastAt=Date.now();if(!state.progress[id])state.progress[id]={status:'learning',updatedAt:Date.now()};persist();
  const l=lectures.find(l=>l.id===n.lectureId),i=nodes.indexOf(n),score=nodeScore(state,n);
  main.innerHTML=`<a class="back-link" href="#map">← 返回完整知识地图</a>`
    +header(`LECTURE 0${l.number} / ${esc(l.title)}`,esc(n.title),esc(n.en),`<button class="secondary" data-action="node-note" data-id="${id}">＋ 记笔记</button>`)
    +`<div class="lesson-layout"><article class="lesson-content"><div class="lesson-lead"><p>${esc(n.summary)}</p><div>${badges(n)}<span class="small muted">课件 PDF 第 ${n.pages.join('、')} 页</span></div></div>`
    +`<section id="understand"><div class="section-kicker">01 · UNDERSTAND</div><h2>先把意思讲清楚</h2>${n.explanation.map(p=>`<p>${esc(p)}</p>`).join('')}${n.rules.length?`<div class="rule-box"><h3>记住逻辑与适用条件</h3><ul>${n.rules.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></div>`:''}</section>`
    +`<section id="example"><div class="section-kicker">02 · WORK IT THROUGH</div><h2>一起走通一个例子</h2><div class="example"><p class="scenario">${esc(n.example.scenario)}</p><ol>${n.example.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol><p class="conclusion">${esc(n.example.conclusion)}</p></div></section>`
    +labHTML(n.lab,lang)
    +`<section id="pitfalls"><div class="section-kicker">03 · NOTICE THE DIFFERENCE</div><h2>这些地方容易混淆</h2><ul class="pitfalls">${n.pitfalls.map(p=>`<li>${esc(p)}</li>`).join('')}</ul></section>`
    +`<section id="check"><div class="section-kicker">04 · CHECK YOUR UNDERSTANDING</div><h2>用英文，独立试一试</h2><p class="muted">自编练习 · ${n.questions.length} 题。先判断，再看解释；使用提示会单独记录。</p><div id="lesson-questions">${n.questions.map((q,j)=>questionHTML({...q,nodeId:id},j+1)).join('')}</div></section>`
    +`<div class="lesson-finish"><p>看过讲解，也可以保留疑问。</p><button class="secondary" data-action="mark-question" data-id="${id}">这里我还有疑问</button><button class="text-btn" data-action="mark-learning" data-id="${id}">标为学习中</button><span class="small muted" id="lesson-score">最近一次无提示答对 ${score.independent}/${score.total}</span></div>`
    +`<div class="lesson-pager">${i>0?`<a href="${linkNode(nodes[i-1].id)}"><small>← 上一个知识点</small>${esc(nodes[i-1].title)}</a>`:'<span></span>'}${i<nodes.length-1?`<a href="${linkNode(nodes[i+1].id)}"><small>下一个知识点 →</small>${esc(nodes[i+1].title)}</a>`:'<a href="#map">返回知识地图 →</a>'}</div><p class="source-policy">教学依据：${esc(n.source)} · PDF 第 ${n.pages.join('、')} 页。讲解与题目为学习辅助整理；如与老师最新说明不同，以最新课件和说明为准。</p></article>`
    +`<aside class="lesson-aside"><div class="aside-card"><h3>这一节</h3><a href="#understand" data-anchor="understand">概念与逻辑</a><a href="#example" data-anchor="example">分步例子</a><a href="#pitfalls" data-anchor="pitfalls">易混淆点</a><a href="#check" data-anchor="check">英文自测</a></div>${n.prerequisites.length?`<div class="aside-card"><h3>先补这些基础</h3>${relationLinks(n.prerequisites)}</div>`:''}${n.related.length?`<div class="aside-card"><h3>把知识连起来</h3>${relationLinks(n.related)}</div>`:''}<div class="aside-card note-aside"><h3>我的记录 <span id="lesson-note-count">${noteCount(id)}</span></h3><button class="text-btn" data-action="node-note" data-id="${id}">＋ 写下理解或疑问</button><div id="lesson-notes">${lessonNotes(id)}</div></div></aside></div>`;
}
function lessonNotes(id){const list=state.notes.filter(n=>!n.deleted&&n.nodeId===id).sort((a,b)=>b.updatedAt-a.updatedAt);return list.length?list.map(n=>`<button class="note-preview" data-action="edit-note" data-id="${n.id}"><span>${esc(n.kind)} · ${formatDate(n.updatedAt)}</span><p data-user-text>${esc(n.body.slice(0,180))}${n.body.length>180?'…':''}</p></button>`).join(''):'<p class="small muted">理解、问题、老师的补充，都可以留在这里。</p>';}
function questionHTML(q,number){
  const d=drafts.get(q.id),submitted=d?.submitted;
  return `<form class="question-card" data-question="${q.id}"><div class="question-top"><span>QUESTION ${String(number).padStart(2,'0')}</span><button type="button" class="text-btn" data-action="question-note" data-id="${q.id}">记疑问 ↗</button></div><h3 lang="en">${esc(q.prompt)}</h3><details class="translation"><summary>查看中文题意</summary><p>${esc(q.zh)}</p></details><fieldset ${submitted?'disabled':''}><legend class="sr-only">选择一个答案</legend>${q.options.map((o,i)=>`<label class="choice ${submitted?(i===q.answer?'correct':i===d.selected?'incorrect':''):''}"><input type="radio" name="answer" value="${i}" ${d?.selected===i?'checked':''}><span class="option-letter">${String.fromCharCode(65+i)}</span><span lang="en">${esc(o)}</span></label>`).join('')}</fieldset><div class="question-actions">${submitted?`<button type="button" class="secondary" data-action="retry-question" data-id="${q.id}">重新独立作答</button>`:`<button type="submit" class="primary">确认答案</button><button type="button" class="text-btn" data-action="hint" data-id="${q.id}">给我一点提示</button>`}</div>${d?.hinted?`<p class="hint">提示：${esc(q.hint)}</p>`:''}${submitted?`<div class="feedback ${d.selected===q.answer?'right':'wrong'}" role="status"><strong>${d.selected===q.answer?(d.hinted?'答对了 · 本次使用过提示':'答对了 · 无提示完成'):`这次选了 ${String.fromCharCode(65+d.selected)}，正确答案是 ${String.fromCharCode(65+q.answer)}`}</strong><ul>${q.explanations.map((e,i)=>`<li><b>${String.fromCharCode(65+i)}${i===q.answer?' ✓':''}</b> ${esc(e)}</li>`).join('')}</ul>${d.selected!==q.answer?`<label>这次主要卡在哪里？<select data-error-type="${d.attemptId}">${['概念混淆','英文理解','账户与借贷','确认时点','计算'].map(e=>`<option ${e===(state.attempts.find(a=>a.id===d.attemptId)?.errorType||q.errorType)?'selected':''}>${e}</option>`).join('')}</select></label>`:''}<p class="small">${d.selected!==q.answer||d.hinted?'已进入错题复习，可随时重做。':'已保存这次答题。原题答对不等同于陌生情境迁移。'}</p></div>`:''}</form>`;
}
function refreshQuestion(id){const el=document.querySelector(`[data-question="${id}"]`);if(!el)return;const number=[...document.querySelectorAll('[data-question]')].indexOf(el)+1;el.outerHTML=questionHTML(questionById.get(id),number);updateCounts();localizeUI();}
function renderContinue(){
  const n=nodeById.get(state.lastNode)||nodes[0],reviews=reviewItems(state,questions),due=reviews.filter(r=>r.due),doubts=nodes.filter(n=>statusOf(state,n)==='question');
  main.innerHTML=header('PICK UP WHERE YOU LEFT OFF','随时回来，接着理解。','不需要每天打卡。查一个概念、学完一节，或先记下一个问题。')
    +`<section class="continue-card"><div class="eyebrow">${state.lastNode?'LAST OPENED · 上次学到这里':'START HERE · 从基础开始'}</div><h2>${esc(n.title)}</h2><p>${esc(n.summary)}</p><a class="primary" href="${linkNode(n.id)}">${state.lastNode?'继续这一节':'打开第一节'} ↗</a><div class="continue-pattern" aria-hidden="true"><span>A</span><i>=</i><span>L</span><i>+</i><span>E</span></div></section>`
    +`<div class="two-cards"><section class="panel"><div class="eyebrow">REVISIT</div><h2>${due.length?`${due.length} 道题可以复测`:'按需要，回头巩固'}</h2><p class="muted">${reviews.length?'错过的概念可以重做，独立答对后仍会安排间隔复测。':'练习中答错或使用过提示的题，会在这里留下复习线索。'}</p><a class="text-link" href="#review">打开错题复习 →</a></section><section class="panel"><div class="eyebrow">CAPTURE</div><h2>先记下来，不必想完整。</h2><p class="muted">今天课堂上的补充、突然想通的地方，或一个还没想明白的问题。</p><button class="text-link" data-action="quick-note">写一条随手记 →</button></section></div>`
    +`${doubts.length?`<section class="panel"><h2>我还想弄清楚</h2><div class="relation-list">${relationLinks(doubts.map(n=>n.id))}</div></section>`:''}<section class="practice-invite"><h2>想检查知识是否连起来了？</h2><p class="muted">选择已学讲次，练一组英文混合题。范围由你决定。</p><button class="secondary" data-action="practice-setup">开始综合练习</button></section>`;
}
function renderReview(){
  const items=reviewItems(state,questions),due=items.filter(r=>r.due),weak=items.filter(r=>r.needsWork);
  main.innerHTML=header('RECALL, REASON, RECONNECT','把错题，变成理解。','先独立重做，再回到概念。复习安排只是建议，随时可以开始。',`<button class="secondary" data-action="practice-setup">综合练习 ↗</button>`)
    +`<div class="review-summary"><span><b>${weak.length}</b> 道需要巩固</span><span><b>${due.length}</b> 道到期复测</span><span><b>${items.length-weak.length}</b> 道最近独立答对</span></div>`
    +(items.length?`<div class="review-filters"><button class="chip active" data-action="filter-review" data-filter="all">全部</button><button class="chip" data-action="filter-review" data-filter="weak">待巩固</button><button class="chip" data-action="filter-review" data-filter="due">到期复测</button></div><div class="review-list">${items.map((r,i)=>`<article class="review-card" data-weak="${r.needsWork}" data-due="${r.due}"><div><span class="eyebrow">LECTURE ${nodeById.get(r.q.nodeId).lectureNumber} · ${esc(r.attempt.errorType)}</span><span class="status ${r.needsWork?'question':'passed'}">${r.needsWork?(r.attempt.correct?'提示后答对':'待巩固'):'最近独立答对'}</span></div><h3 lang="en">${esc(r.q.prompt)}</h3><p class="small muted">${r.due?'已到建议复测时间':`建议复测：${formatDate(r.dueAt)}`} · 上次 ${formatDate(r.attempt.at)}</p><div class="review-card-actions"><button class="secondary" data-action="review-question" data-id="${r.q.id}">独立重做</button><a class="text-link" href="${linkNode(r.q.nodeId)}">补概念：${esc(nodeById.get(r.q.nodeId).title)} →</a><button class="text-btn" data-action="review-variant" data-id="${r.q.id}">试一道同概念题</button></div></article>`).join('')}</div><p class="small muted">最近一次独立答对仍保留在复测清单。两道同概念题用于检查不同判断，不承诺都是严格等价的变式。</p>`:`<div class="empty-illustration" aria-hidden="true">↻</div><div class="empty"><h2>还没有需要复习的题。</h2><p>学习页中的错题和提示后答对的题，会自动进入这里。</p><a class="primary" href="#map">去知识地图</a></div>`);
}
function renderNotes(){
  const list=state.notes.filter(n=>!n.deleted).sort((a,b)=>b.updatedAt-a.updatedAt);
  main.innerHTML=header('MAKE IT YOUR OWN','把理解，留在这里。','记录不必完整。先写下来，再慢慢把它与知识连接。',`<button class="primary" data-action="quick-note">＋ 写一条记录</button>`)
    +`<div class="map-tools"><label class="search-field"><span aria-hidden="true">⌕</span><input id="notes-search" type="search" placeholder="搜索你的理解、疑问和课堂补充…" aria-label="搜索记录"></label><label class="sr-only" for="notes-kind">记录类型</label><select id="notes-kind"><option value="all">全部类型</option><option>理解</option><option>疑问</option><option>课堂补充</option><option>随手记</option></select><button class="text-btn" data-action="export-md">导出 Markdown</button></div><p class="small muted" id="notes-results" role="status">${list.length} 条个人记录 · 当前设备保存</p>`
    +(list.length?`<div class="notes-grid">${list.map(n=>`<article class="note-card" data-note="${n.id}"><div class="note-card-top"><span class="note-kind">${esc(n.kind)}</span><span class="small muted">${formatDate(n.updatedAt)}</span></div><p class="note-body" data-user-text>${esc(n.body)}</p>${nodeById.has(n.nodeId)?`<a class="note-context" href="${linkNode(n.nodeId)}">↗ ${esc(nodeById.get(n.nodeId).title)}</a>`:'<span class="small muted">未关联知识点</span>'}<div class="note-card-actions"><button class="text-btn" data-action="edit-note" data-id="${n.id}">编辑</button><button class="text-btn danger" data-action="delete-note" data-id="${n.id}">删除</button></div></article>`).join('')}</div><p id="notes-empty" class="empty hidden">没有匹配的记录。</p>`:'<div class="empty"><h2>第一条记录，从一个问题开始。</h2><p>学习页可以直接记笔记，这里也可以写未分类的随手记。</p></div>');
  $('#notes-search').addEventListener('input',filterNotes);$('#notes-kind').addEventListener('change',filterNotes);
}
function filterNotes(){let count=0;for(const card of document.querySelectorAll('[data-note]')){const n=state.notes.find(n=>n.id===card.dataset.note);const term=$('#notes-search').value.toLowerCase(),kind=$('#notes-kind').value;const show=[n.body,nodeById.get(n.nodeId)?.title||''].join(' ').toLowerCase().includes(term)&&(kind==='all'||n.kind===kind);card.hidden=!show;if(show)count++;}$('#notes-results').textContent=`${count} 条匹配记录`;$('#notes-empty')?.classList.toggle('hidden',count>0);}
function renderConnections(){
  const chains=lectures.map(l=>({lecture:l,items:nodes.filter(n=>n.lectureId===l.id)}));
  main.innerHTML=header('CONNECT THE DOTS','一笔业务，多张报表。','从商业活动到报表判断，概念之间有一条连续的线。')+`<div class="connection-banner"><span>商业活动</span><b>→</b><span>确认与计量</span><b>→</b><span>账户与分录</span><b>→</b><span>财务报表</span><b>→</b><span>分析与决策</span></div><p class="muted">下面按课程顺序展示知识链。进入任一节点，右侧可继续查看先修与关联概念。</p><div class="connection-chains">${chains.map(c=>`<section class="panel"><div class="eyebrow">LECTURE 0${c.lecture.number}</div><h2>${esc(c.lecture.title)}</h2><div class="relation-list">${relationLinks(c.items.map(n=>n.id))}</div></section>`).join('')}</div><a class="text-link" href="#map">← 回到完整知识地图</a>`;
}
function renderPracticeSetup(){
  main.innerHTML=header('CHOOSE YOUR SCOPE','用一组题，把知识连起来。','仅含本站自编题，依据现有课件整理。考试范围还会随老师进度增加。')+`<form id="practice-setup" class="panel setup-panel"><h2>选择练习范围</h2><div class="lecture-checkboxes">${lectures.map(l=>`<label><input type="checkbox" name="lecture" value="${l.id}" checked><span>Lecture ${l.number} · ${esc(l.title)}</span></label>`).join('')}</div><div class="two-fields"><label>题数<select name="count"><option value="10">10题</option><option value="20">20题</option><option value="30">30题</option></select></label><label>作答方式<select name="mode"><option value="learn">逐题反馈</option><option value="exam">全英文测验，交卷后解析</option></select></label></div><button type="submit" class="primary">开始这一组 →</button><p class="small muted">测验记录作答用时，不设置强制倒计时。中途离开会结束本组；已提交的单题记录仍保留。</p></form>`;
}
function shuffled(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function renderPracticeQuestion(){
  const p=practice,q=p.qs[p.index];
  if(p.mode==='learn'){
    main.innerHTML=header('MIXED PRACTICE',`第 ${p.index+1} / ${p.qs.length} 题`,nodeById.get(q.nodeId).title)+questionHTML(q,p.index+1)+`<div class="practice-next"><button class="secondary" data-action="practice-next">${p.index===p.qs.length-1?'完成本组':'下一题 →'}</button><button class="text-btn" data-action="end-practice">结束本组</button></div>`;
  }else{
    main.innerHTML=header('ENGLISH CHECK',`Question ${p.index+1} of ${p.qs.length}`,'Select one answer. Feedback is shown after submission of the whole set.')+`<form id="exam-answer" class="question-card"><h2 lang="en">${esc(q.prompt)}</h2><fieldset><legend class="sr-only">Choose an answer</legend>${q.options.map((o,i)=>`<label class="choice"><input type="radio" name="answer" value="${i}" ${p.answers[p.index]===i?'checked':''} required><span class="option-letter">${String.fromCharCode(65+i)}</span><span lang="en">${esc(o)}</span></label>`).join('')}</fieldset><button class="primary" type="submit">${p.index===p.qs.length-1?'Submit set':'Next question →'}</button>${p.index?'<button class="text-btn" type="button" data-action="exam-back">Previous question</button>':''}</form><button class="text-btn" data-action="end-practice">结束本组（不保存未交卷测验）</button>`;
  }
}
function finishPractice(){
  const p=practice;if(!p)return;
  if(p.mode==='exam'){
    for(let i=0;i<p.qs.length;i++){const q=p.qs[i],selected=p.answers[i];state=addAttempt(state,q,q.nodeId,selected,false);drafts.set(q.id,{selected,hinted:false,submitted:true,attemptId:state.attempts.at(-1).id});}persist();
  }
  const selected=p.qs.map(q=>({q,d:drafts.get(q.id)})).filter(x=>x.d?.submitted),correct=selected.filter(x=>x.d.selected===x.q.answer&&!x.d.hinted).length;
  main.innerHTML=header('A MOMENT TO REFLECT','这一组，留下了哪些线索？',`无提示答对 ${correct}/${p.qs.length} · 已提交 ${selected.length} 题 · 用时 ${Math.max(1,Math.round((Date.now()-p.started)/60000))} 分钟`)+`<div class="panel"><p>结果反映这组本站练习，不代表考试成绩预测。错误与提示后的完成会进入复习记录。</p><a href="#review" class="primary">去错题复习 →</a><a href="#map" class="text-link">返回知识地图</a></div><h2>逐题解析</h2>${selected.map(({q},i)=>questionHTML(q,i+1)).join('')}`;practice=null;
}
function openNote(nodeId=null,id=null,prefill=''){
  const note=id?state.notes.find(n=>n.id===id&&!n.deleted):null;
  noteContext={id:note?.id||uid(),nodeId:note?.nodeId||nodeId};
  const form=$('#note-form');form.elements.nodeId.innerHTML='<option value="">未分类 · 随手记</option>'+lectures.map(l=>`<optgroup label="Lecture ${l.number} · ${esc(l.title)}">${nodes.filter(n=>n.lectureId===l.id).map(n=>`<option value="${n.id}">${esc(n.title)}</option>`).join('')}</optgroup>`).join('');
  form.elements.id.value=noteContext.id;form.elements.nodeId.value=noteContext.nodeId||'';form.elements.kind.value=note?.kind||(nodeId?'理解':'随手记');form.elements.body.value=note?.body||prefill;
  $('#note-title').textContent=note?'编辑这条记录':nodeId?'记下你的理解':'记下这一刻';$('#note-context').textContent=nodeById.get(noteContext.nodeId)?.en||'先写下来，之后也可以再关联知识点。';$('#note-autosave').textContent='输入后自动保存在本机。';$('#note-dialog').showModal();localizeUI();form.elements.body.focus();
}
function saveNote(){
  clearTimeout(noteTimer);if(!noteContext)return true;
  const f=$('#note-form'),body=f.elements.body.value.trim();
  if(!body){$('#note-autosave').textContent='空白内容未保存；已有记录保持原样。';return false;}
  const old=state.notes.find(n=>n.id===noteContext.id),nodeId=f.elements.nodeId.value||null,kind=f.elements.kind.value;
  if(old&&old.body===body&&old.nodeId===nodeId&&old.kind===kind&&!old.deleted)return true;
  const note={id:noteContext.id,nodeId,body,kind,updatedAt:Date.now(),deleted:false};
  state.notes=old?state.notes.map(n=>n.id===note.id?note:n):[...state.notes,note];persist();
  $('#note-autosave').textContent=storageError?'未能保存到本机，请复制内容或导出备份。':`已自动保存 · ${formatDate(note.updatedAt)}`;refreshNoteAside();localizeUI();return !storageError;
}
function refreshNoteAside(){const n=currentNode();if(n&&$('#lesson-notes')){$('#lesson-notes').innerHTML=lessonNotes(n.id);$('#lesson-note-count').textContent=noteCount(n.id);}}
function currentNode(){return nodeById.get(decodeURIComponent(location.hash.split('/')[1]||''));}
function closeNote(){saveNote();$('#note-dialog').close();noteContext=null;if(location.hash==='#notes')renderNotes();}
function download(filename,text,type){const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function exportJSON(){download(`会计-学习备份-${new Date().toISOString().slice(0,10)}.json`,JSON.stringify(state,null,2),'application/json');notify('备份已导出，内含个人记录，请妥善保存。');}
function openSettings(){
  $('#settings-body').innerHTML=`<div class="storage-panel"><span class="status learning">当前设备保存</span><h3>你的记录，保存在这个浏览器。</h3><p>数据库暂未接入，电脑、平板、手机之间不会自动同步。跨设备时，先导出 JSON 备份，再在另一台设备导入。</p></div><div class="backup-actions"><button class="primary" data-action="export-json">导出完整 JSON 备份</button><button class="secondary" data-action="export-md">导出笔记 Markdown</button><label class="import-label">合并导入 JSON 备份<input type="file" id="import-backup" accept=".json,application/json"></label></div><p class="small muted">导入会合并不同记录。同一条笔记和手动学习状态以较新的编辑时间为准；删除记录也会保留删除标记。切换设备前先备份，请避免两台设备同时编辑同一条笔记。</p><p class="small muted">清理浏览器数据或使用无痕模式可能使本机记录丢失。更新网站不会主动清除记录。</p>${storageError?`<p class="error">${esc(storageError)}</p>`:''}${invalidOriginal?'<button class="secondary" data-action="export-recovery">导出原始恢复副本</button>':''}<hr><h3>课程依据与更新</h3><p class="small">${esc(tr(sourcePolicy,lang))}</p><p class="small">原始 PDF 与课堂笔记没有随网站公开。需要核对时，在自己的原课件中按页码定位。辅助阅读：财报阅读练习册与恒大收入确认阅读材料；课堂 AI 纪要仅作线索，不单独作为正确答案依据。</p><p class="small">考试日期暂记为 2026年11月23日（待确认），范围为考试前已讲内容；本站当前覆盖 Lecture 1–7。</p><p class="small muted">支持电脑、平板和手机浏览器。首次联网加载后会缓存课程页面；离线可用状态以浏览器缓存实际成功为准。个人记录不会发送给分析或广告服务。</p><a class="text-link" href="https://github.com/ClarafDu/accounting-learning-studio" target="_blank" rel="noopener noreferrer">查看项目与版本 ↗</a>`;
  $('#settings-dialog').showModal();localizeUI();
  $('#import-backup').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try{if(file.size>15*1024*1024)throw new Error('文件过大，请使用15 MB以内的会计 JSON 备份。');const data=JSON.parse(await file.text());const merged=mergeStates(state,data);if(!validState(merged))throw new Error('合并后超出记录容量，原记录已保留。');state=merged;persist();if(storageError)throw new Error(storageError);$('#settings-dialog').close();renderRoute(false);notify('备份已合并，原有不同记录已保留。');}catch(error){notify(error.message||'备份无法读取，原记录已保留。');}event.target.value='';
  });
}
function renderRoute(scroll=true){
  const hash=location.hash||'#map',route=hash.slice(1).split('/')[0];
  if(practice&&route!=='practice'){practice=null;}
  const active=route==='learn'?'map':route==='practice'?'review':route;
  for(const a of document.querySelectorAll('[data-nav]')){a.classList.toggle('active',a.dataset.nav===active);if(a.dataset.nav===active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');}
  $('#breadcrumb').textContent=`学习空间 / ${route==='learn'?'知识地图 / 进入学习':route==='connections'?'知识关联':route==='practice'?'综合练习':icon[route]||'知识地图'}`;
  document.title=`${route==='learn'?currentNode()?.title||'知识点':icon[route]||'会计'} · Accounting`;
  if(route==='learn')renderLesson(decodeURIComponent(hash.split('/')[1]||''));
  else if(route==='continue')renderContinue();else if(route==='review')renderReview();else if(route==='notes')renderNotes();else if(route==='connections')renderConnections();else if(route==='practice'){if(practice)renderPracticeQuestion();else renderPracticeSetup();}else renderMap();
  if(scroll){window.scrollTo(0,0);main.focus({preventScroll:true});}updateCounts();localizeUI();
  document.title=`${lang==='en'?'Accounting':'会计'} · ${tr(route==='learn'?currentNode()?.title||'知识地图':route==='practice'?'综合练习':route==='connections'?'知识关联':icon[route]||'知识地图',lang)}`;
}
document.addEventListener('click',event=>{
  const anchor=event.target.closest('[data-anchor]');if(anchor){event.preventDefault();document.getElementById(anchor.dataset.anchor)?.scrollIntoView({behavior:'smooth',block:'start'});return;}
  const b=event.target.closest('[data-action]');if(!b)return;const {action,id}=b.dataset;
  if(action==='language'){
    lang=lang==='en'?'zh':'en';try{localStorage.setItem(LANGUAGE_KEY,lang);}catch{}localizeContent();if(practice)practice.qs=practice.qs.map(q=>questionById.get(q.id));renderRoute(false);
  }
  else if(action==='settings')openSettings();
  else if(action==='close-settings')$('#settings-dialog').close();
  else if(action==='quick-note')openNote();
  else if(action==='node-note')openNote(id);
  else if(action==='edit-note')openNote(null,id);
  else if(action==='close-note')closeNote();
  else if(action==='question-note'){const q=questionById.get(id);openNote(q.nodeId,null,`关于这道题：${q.prompt}\n\n我的疑问：`);$('#note-form').elements.kind.value='疑问';}
  else if(action==='delete-note'){if(confirm('删除这条记录？导入较旧备份时，删除标记仍会保留。')){state.notes=state.notes.map(n=>n.id===id?{...n,deleted:true,updatedAt:Date.now()}:n);persist();renderNotes();}}
  else if(action==='expand-all'){const all=[...document.querySelectorAll('.lecture:not([hidden])')],expand=all.some(d=>!d.open);all.forEach(d=>d.open=expand);b.textContent=expand?'收起全部':'展开全部';}
  else if(action==='jump-lecture'){const section=document.getElementById(id);if(section){$('#map-search').value='';$('#map-status').value='all';filterMap();section.open=true;section.scrollIntoView({behavior:'smooth',block:'start'});}}
  else if(action==='mark-question'||action==='mark-learning'){state.progress[id]={status:action==='mark-question'?'question':'learning',updatedAt:Date.now()};persist();renderLesson(id);notify(action==='mark-question'?'已保留这个疑问标记。':'已更新学习状态。');}
  else if(action==='hint'){const d=drafts.get(id)||{};drafts.set(id,{...d,hinted:true});refreshQuestion(id);}
  else if(action==='retry-question'){drafts.delete(id);refreshQuestion(id);}
  else if(action==='reveal-lab')updateLab(b.closest('[data-lab]'),true);
  else if(action==='export-json')exportJSON();
  else if(action==='export-md')download('会计-我的笔记.md',markdownNotes(state,nodes,lang),'text/markdown;charset=utf-8');
  else if(action==='export-recovery')download('会计-原始恢复副本.txt',invalidOriginal||'','text/plain');
  else if(action==='filter-review'){document.querySelectorAll('[data-filter]').forEach(e=>e.classList.toggle('active',e===b));for(const card of document.querySelectorAll('.review-card'))card.hidden=b.dataset.filter==='weak'?card.dataset.weak!=='true':b.dataset.filter==='due'?card.dataset.due!=='true':false;}
  else if(action==='review-question'||action==='review-variant'){
    const q=questionById.get(id),target=action==='review-question'?q:shuffled(questions.filter(x=>x.nodeId===q.nodeId&&x.id!==id))[0];
    if(!target){notify('这个概念暂时没有另一道题，请回到讲解换个角度检查。');return;}
    drafts.delete(target.id);practice={qs:[target],index:0,mode:'learn',answers:[],started:Date.now()};if(location.hash==='#practice')renderPracticeQuestion();else location.hash='practice';
  }
  else if(action==='practice-setup'){practice=null;location.hash='practice';if(location.hash==='#practice')renderPracticeSetup();}
  else if(action==='practice-next'){
    const q=practice?.qs[practice.index];if(!q)return;if(!drafts.get(q.id)?.submitted){notify('先提交这一题，或选择结束本组。');return;}
    if(practice.index===practice.qs.length-1)finishPractice();else{practice.index++;renderPracticeQuestion();window.scrollTo(0,0);}
  }
  else if(action==='exam-back'){practice.index--;renderPracticeQuestion();}
  else if(action==='end-practice'){if(confirm('结束这一组？已提交的逐题练习会保留，未交卷测验不会保存。')){practice=null;location.hash='review';}}
  localizeUI();
});
document.addEventListener('change',event=>{
  const el=event.target,form=el.closest('[data-question]');
  if(form&&el.name==='answer'){const id=form.dataset.question;drafts.set(id,{...(drafts.get(id)||{}),selected:Number(el.value)});}
  if(el.dataset.errorType){state.attempts=state.attempts.map(a=>a.id===el.dataset.errorType?{...a,errorType:el.value}:a);persist();}
  if(el.closest('[data-lab]')&&el.matches('[data-lab-param]'))updateLab(el.closest('[data-lab]'));
});
document.addEventListener('input',event=>{if(event.target.closest('[data-lab]')&&event.target.matches('[data-lab-param]'))updateLab(event.target.closest('[data-lab]'));});
document.addEventListener('submit',event=>{
  const form=event.target;
  if(form.matches('[data-question]')){event.preventDefault();const q=questionById.get(form.dataset.question),d=drafts.get(q.id)||{};if(d.submitted)return;if(d.selected===undefined){notify('请先选择一个答案。');return;}state=addAttempt(state,q,q.nodeId,d.selected,d.hinted);const attemptId=state.attempts.at(-1).id;drafts.set(q.id,{...d,submitted:true,attemptId});persist();refreshQuestion(q.id);const n=currentNode();if(n&&$('#lesson-score')){const s=nodeScore(state,n);$('#lesson-score').textContent=`最近一次无提示答对 ${s.independent}/${s.total}`;$('.lesson-lead .status').outerHTML=badges(n);localizeUI();}return;}
  if(form.id==='note-form'){event.preventDefault();if(saveNote())closeNote();return;}
  if(form.id==='practice-setup'){event.preventDefault();const data=new FormData(form),selected=data.getAll('lecture'),pool=questions.filter(q=>selected.includes(nodeById.get(q.nodeId).lectureId));if(!pool.length){notify('至少选择一讲。');return;}const qs=shuffled(pool).slice(0,Number(data.get('count')));qs.forEach(q=>drafts.delete(q.id));practice={qs,index:0,answers:[],mode:data.get('mode'),started:Date.now()};renderPracticeQuestion();window.scrollTo(0,0);localizeUI();return;}
  if(form.id==='exam-answer'){event.preventDefault();practice.answers[practice.index]=Number(new FormData(form).get('answer'));if(practice.index===practice.qs.length-1)finishPractice();else{practice.index++;renderPracticeQuestion();window.scrollTo(0,0);}localizeUI();}
});
$('#note-form').addEventListener('input',()=>{clearTimeout(noteTimer);noteTimer=setTimeout(saveNote,400);$('#note-autosave').textContent='正在保存…';});
$('#note-dialog').addEventListener('cancel',()=>{saveNote();});
$('#note-dialog').addEventListener('close',()=>{saveNote();noteContext=null;if(location.hash==='#notes')renderNotes();});
window.addEventListener('pagehide',()=>{if(noteContext)saveNote();});
window.addEventListener('hashchange',()=>{if(noteContext)closeNote();renderRoute();});
window.addEventListener('storage',event=>{if(event.key!==STORAGE_KEY||!event.newValue)return;try{const remote=JSON.parse(event.newValue);if(validState(remote)){state=mergeStates(state,remote);updateCounts();if(!$('#note-dialog').open&&!practice)renderRoute(false);else notify('另一窗口有新记录，已合并到本机。');}}catch{}});
document.addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();if(!$('#note-dialog').open&&!$('#settings-dialog').open)openNote(currentNode()?.id||null);}});
renderRoute(false);
if('serviceWorker' in navigator){navigator.serviceWorker.register('./sw.js').catch(()=>{});}
