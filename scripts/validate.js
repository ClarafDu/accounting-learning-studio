import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {lectures,nodes,nodeById,questions} from '../content/index.js';

assert.equal(lectures.length,7);
assert.equal(new Set(nodes.map(n=>n.id)).size,nodes.length,'Knowledge IDs must be unique');
assert.equal(new Set(questions.map(q=>q.id)).size,questions.length,'Question IDs must be unique');
for(const lecture of lectures){
  assert.ok(lecture.descriptionEn,`${lecture.id}: English lecture description`);
  for(const n of lecture.nodes){
    assert.ok(n.explanation.length>=3,`${n.id}: substantive explanation`);
    assert.ok(n.pages.length>0&&n.pages.every(p=>Number.isInteger(p)&&p>0&&p<=lecture.pages),`${n.id}: source pages`);
    assert.ok(n.example.scenario&&n.example.steps.length>=2&&n.example.conclusion,`${n.id}: worked example`);
    assert.ok(n.questions.length>=2,`${n.id}: independent checks`);
    assert.ok([null,'transaction','prepaid','revenue','inventory','interest'].includes(n.lab),`${n.id}: valid lab`);
    for(const id of [...n.prerequisites,...n.related])assert.ok(nodeById.has(id)&&id!==n.id,`${n.id}: broken relation ${id}`);
    const e=n.english;assert.ok(e,`${n.id}: English content`);
    for(const key of ['explanation','rules','pitfalls'])assert.equal(e[key].length,n[key].length,`${n.id}: translated ${key}`);
    assert.equal(e.example.steps.length,n.example.steps.length,`${n.id}: translated example`);
    assert.ok(e.summary&&e.example.scenario&&e.example.conclusion,`${n.id}: English text`);
    assert.equal(e.questions.length,n.questions.length,`${n.id}: translated questions`);
    for(const q of n.questions){
      assert.equal(q.options.length,4);assert.equal(q.explanations.length,4);
      assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4,`${q.id}: answer index`);
      assert.equal(new Set(q.options).size,4,`${q.id}: distinct choices`);
      const english=e.questions.find(x=>x.id===q.id);assert.ok(english,`${q.id}: English mapping`);
      assert.equal(english.explanations.length,4);assert.ok(english.hint);
      assert.ok(q.options.every(s=>typeof s==='string'&&s.length>0));
    }
  }
}
function checkAcyclic(id,stack=new Set(),done=new Set()){
  assert.ok(!stack.has(id),`Cyclic prerequisites at ${id}`);if(done.has(id))return;
  stack.add(id);for(const before of nodeById.get(id).prerequisites)checkAcyclic(before,stack,done);stack.delete(id);done.add(id);
}
for(const n of nodes)checkAcyclic(n.id);
const index=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
for(const match of index.matchAll(/(?:href|src)="\.\/([^"#]+)"/g))assert.ok(fs.existsSync(new URL('../'+match[1],import.meta.url)),`Missing entry asset: ${match[1]}`);
const root=path.resolve(new URL('..',import.meta.url).pathname);
function checkFiles(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(entry.name.startsWith('.')||['node_modules','test-results'].includes(entry.name))continue;const file=path.join(dir,entry.name);if(entry.isDirectory()){checkFiles(file);continue;}assert.ok(!/\.(pdf|pptx?|docx?|xlsx?|pem|env)$/i.test(entry.name),`Private/source asset in public directory: ${entry.name}`);if(/\.(js|html|css|md|json)$/.test(entry.name)){const s=fs.readFileSync(file,'utf8');assert.ok(!/sb_secret_[A-Za-z0-9_-]{20,}|SUPABASE_SERVICE_ROLE_KEY\s*=\s*[A-Za-z0-9]|-----BEGIN [A-Z ]+PRIVATE KEY-----/.test(s),`Secret pattern in ${entry.name}`);}}}
checkFiles(root);
console.log(`Validated ${lectures.length} lectures, ${nodes.length} bilingual concepts, ${questions.length} original questions, source pages, prerequisite graph and public assets.`);
