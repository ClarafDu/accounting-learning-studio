import {lectures12} from './lectures-1-2.js';
import {lectures34} from './lectures-3-4.js';
import {lectures56} from './lectures-5-6.js';
import {lectures7} from './lecture-7.js';

export const lectures=[...lectures12,...lectures34,...lectures56,...lectures7];
const foundations={
  'l2-equation-entity':['l1-business-events'],
  'l2-debits-credits':['l2-equation-entity'],
  'l3-statements':['l1-statement-geography','l2-equation-entity'],
  'l3-cash-profit':['l2-revenue-expense-transactions'],
  'l3-depreciation':['l2-asset-accounts','l2-debits-credits'],
  'l4-credit-sales':['l2-revenue-expense-transactions','l3-cash-profit'],
  'l4-step-contract':['l1-gaap'],
  'l5-inventory':['l3-sales-cost','l2-debits-credits'],
  'l5-payables':['l2-liability-equity-accounts'],
  'l5-ccc':['l4-receivable-days','l5-turnover','l5-payable-days'],
  'l6-operating-expenses':['l3-profit-ladder'],
  'l6-prepaid':['l2-asset-accounts','l2-debits-credits'],
  'l6-accruals':['l2-liability-equity-accounts'],
  'l7-interest-accrual':['l6-accruals','l1-bond-pricing']
};
for(const lecture of lectures)for(const node of lecture.nodes){
  node.prerequisites=[...new Set([...node.prerequisites,...(foundations[node.id]||[])])];
}
const all=lectures.flatMap(l=>l.nodes);
for(const n of all)for(const id of n.prerequisites){const before=all.find(x=>x.id===id);if(before&&!before.related.includes(n.id))before.related.push(n.id);}
export const nodes=lectures.flatMap(lecture=>lecture.nodes.map((node,index)=>({...node,lectureId:lecture.id,lectureNumber:lecture.number,source:lecture.source,index,revision:1})));
export const nodeById=new Map(nodes.map(n=>[n.id,n]));
export const questions=nodes.flatMap(n=>n.questions.map(q=>({...q,nodeId:n.id,revision:1})));
export const questionById=new Map(questions.map(q=>[q.id,q]));
export const futureTopics=[
  {title:'现金流量表与资产负债表的进一步联动',en:'Connecting cash flows and balance sheet changes'},
  {title:'财务比率分析',en:'Financial statement analysis'},
  {title:'真实企业年报阅读',en:'Reading annual reports'}
];
export const sourcePolicy='依据现有 Lecture 1–7 整理的原创教学解释与自编练习。课件页码按 PDF 页序标注。尚未收到的后续课件不计入已覆盖范围；这些练习不是教师原题或考试预测。';
