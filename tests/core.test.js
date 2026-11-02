import test from 'node:test';
import assert from 'node:assert/strict';
import {emptyState,validState,mergeStates,addAttempt,reviewItems,statusOf,DAY} from '../core.js';
import {transactionResult,prepaidResult,inventoryResult} from '../labs.js';
const q={id:'test-question',options:['A','B','C','D'],answer:2,errorType:'概念混淆'};
const note=(id,body,updatedAt,deleted=false)=>({id,nodeId:null,body,kind:'随手记',updatedAt,deleted});
test('cross-device backup merge preserves distinct notes and attempts, retains newer deletion markers',()=>{
  const a=emptyState(),b=emptyState();a.notes=[note('note-a','Computer note',100),note('shared','Old version',100)];b.notes=[note('note-b','Tablet note',200),note('shared','Deleted text',300,true)];
  const aa=addAttempt(a,q,'test-node',0,false,100,'attempt-a'),bb=addAttempt(b,q,'test-node',2,false,200,'attempt-b');
  const merged=mergeStates(aa,bb);assert.ok(validState(merged));assert.equal(merged.notes.length,3);assert.equal(merged.notes.find(n=>n.id==='shared').deleted,true);assert.equal(merged.attempts.length,2);
  const again=mergeStates(merged,aa);assert.equal(again.notes.find(n=>n.id==='shared').deleted,true);assert.equal(again.attempts.length,2);
});
test('invalid or foreign backups are rejected without altering the original state',()=>{
  const original=emptyState(),before=JSON.stringify(original);assert.throws(()=>mergeStates(original,{version:1,notes:[]}));assert.equal(JSON.stringify(original),before);
  const bad=emptyState();bad.notes=[note('note-a',{},1)];assert.equal(validState(bad),false);
});
test('hinted answers cannot pass a lesson; independently corrected questions remain eligible for spaced review',()=>{
  const node={id:'test-node',questions:[q]};let s=addAttempt(emptyState(),q,node.id,2,true,100,'attempt-1');assert.notEqual(statusOf(s,node),'passed');assert.equal(reviewItems(s,[q],100)[0].needsWork,true);
  s=addAttempt(s,q,node.id,2,false,200,'attempt-2');assert.equal(statusOf(s,node),'passed');const item=reviewItems(s,[q],200)[0];assert.equal(item.needsWork,false);assert.equal(item.due,false);assert.equal(reviewItems(s,[q],200+4*DAY)[0].due,true);
  s.progress[node.id]={status:'question',updatedAt:300};assert.equal(statusOf(s,node),'question');
});
test('manual status merge follows edit time; older imports cannot overwrite newer questions',()=>{
  const a=emptyState(),b=emptyState();a.progress['node-a']={status:'question',updatedAt:500};b.progress['node-a']={status:'learning',updatedAt:300};b.progress['node-b']={status:'learning',updatedAt:600};const c=mergeStates(a,b);assert.equal(c.progress['node-a'].status,'question');assert.equal(c.progress['node-b'].status,'learning');
});
test('transaction experiments preserve the equation and distinguish collection from revenue',()=>{
  for(const type of ['capital','loan','service','collection','advance'])for(const amount of [100,1000,10000]){const r=transactionResult(type,amount);assert.equal(r.assets,r.liabilities+r.equity);}
  const r=transactionResult('collection',1000);assert.equal(r.profit,0);assert.equal(r.assets,0);assert.equal(r.cash,1000);
});
test('insurance timeline and inventory cost flows conserve the original cost',()=>{
  for(let month=0;month<=12;month++){const r=prepaidResult(1200,month);assert.equal(r.asset+r.expense,1200);}assert.deepEqual(prepaidResult(1200,3),{expense:300,asset:900});
  for(let sold=0;sold<=30;sold++){const r=inventoryResult(10,20,sold,50);assert.equal(r.ending+r.cogs,1500);assert.ok(r.ending>=0);}
});
