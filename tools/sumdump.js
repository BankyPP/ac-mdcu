#!/usr/bin/env node
/* Dump the Service-round questions of one ward + exam type for writing the Phase 2 high-yield summary.
   node tools/sumdump.js <ward dir> <MCQ|MEQ|OSCE>                → list topic tags with counts (+ which already have a summary file)
   node tools/sumdump.js <ward dir> <MCQ|MEQ|OSCE> <tag> [--brief|--full] → (default skips the per-option 'wrong' notes; --full adds them, --brief trims long text) every item tagged <tag>: member key, rotation, stem, options/answer, explanation, flags */
const {load,items,topicNames,plain}=require('./sumlib');
const [dir,typeA,tag,...rest]=process.argv.slice(2);const type=String(typeA||'').toUpperCase();
if(!dir||!['MCQ','MEQ','OSCE'].includes(type)){console.log('usage: node tools/sumdump.js <ward dir> <MCQ|MEQ|OSCE> [tag] [--brief|--full]');process.exit(1);}
const brief=rest.includes('--brief'),full=rest.includes('--full');
const W=load(dir),its=items(W,type),names=Object.fromEntries(topicNames(dir,type));
const cut=(s,n)=>{s=plain(s);return n&&s.length>n?s.slice(0,n)+' …':s;};
if(!tag){const c={},r={};its.forEach(o=>(o.tags.length?o.tags:['(no tag)']).forEach(t=>{c[t]=(c[t]||0)+1;(r[t]=r[t]||new Set()).add(o.rot);}));
  const have=new Set(W.SUMM[type].map(s=>s.tag));
  console.log(`${dir} ${type}: ${its.length} items · ${new Set(its.map(o=>o.q)).size} questions · ${new Set(its.map(o=>o.rot)).size} rotations`);
  Object.keys(c).sort((a,b)=>c[b]-c[a]).forEach(t=>console.log(`  ${t}${names[t]?' ('+names[t]+')':''}: ${c[t]} items · ${r[t].size} rotations${have.has(t)?' · has summary':''}`));process.exit(0);}
const mine=its.filter(o=>tag==='(no tag)'?!o.tags.length:o.tags.includes(tag));
console.log(`# ${dir} ${type} tag "${tag}"${names[tag]?' = '+names[tag]:''} — ${mine.length} items from ${new Set(mine.map(o=>o.rot)).size} rotations: ${[...new Set(mine.map(o=>o.rot))].join(', ')}\n`);
const L='ABCDE';let lastQ=null;
mine.forEach(o=>{const q=o.q;
  if(type==='MCQ'){
    console.log(`[${o.key}]  rotation: ${o.rot} · tags: ${o.tags.join(', ')}${q.flag?' · ⚠FLAG':''}`);
    console.log('Q: '+cut(q.stem,brief?400:0));
    (q.opts||[]).forEach((x,i)=>console.log(`  ${L[i]}. ${cut(x)}${i===q.ans?'   ← ANSWER':''}`));
    if(!brief){if(q.interp)console.log('Interp: '+cut(q.interp));if(q.why)console.log('Why: '+cut(q.why));
      if(full&&q.wrong&&typeof q.wrong==='object')console.log('Wrong: '+Object.entries(q.wrong).map(([k,v])=>k+') '+cut(v,220)).join(' | '));
      if(q.trap)console.log('Trap: '+cut(q.trap));if(q.summary&&q.summary.length)console.log('Summary: '+[].concat(q.summary).map(x=>cut(x)).join(' · '));
      if(q.flag)console.log('Flag: '+cut(q.flag,400));}
    console.log('');return;}
  if(q!==lastQ){lastQ=q;console.log(`=== ${type==='OSCE'?'STATION':'CASE'} ${q.set} ${q.ro||''} ${q.orig}${q.title?' — '+plain(q.title):''}${q.sa?' (short answer)':''}${q.topic?' · topic '+q.topic:''}${q.ex?' · examiner':''}`);
    console.log('Stem: '+cut(q.stem,brief?500:0));}
  const p=(q.parts||[])[o.pi];if(p&&p.info&&o.s===p.subs[0])console.log('  New info: '+cut(p.info,brief?300:0));
  console.log(`  [${o.key}] tags: ${o.tags.join(', ')}${o.s.marks?' · '+o.s.marks+' marks':''}${o.s.flag?' · ⚠FLAG':''}`);
  console.log('  Q: '+cut(o.s.q));
  console.log('  Answer: '+cut(o.s.ans,brief?400:0));
  if(!brief){if(o.s.exp)console.log('  Exp: '+cut(o.s.exp));if(o.s.rubric)console.log('  Rubric: '+cut(o.s.rubric,500));if(o.s.flag)console.log('  Flag: '+cut(o.s.flag,400));}
  console.log('');});
