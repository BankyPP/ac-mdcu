#!/usr/bin/env node
/* Compact dump for writing the Subspe High-yield summary (Nov 2026) — like tools/sumdump.js but slimmer and it also prints
   the source key + "ความเห็นของผม" (opinion), so writers can see where the old key disagreed with the bank's answer.
   node parts/subspe/hydump.js <MCQ|OSCE> "<tag>" [--from N] [--to M]   (N/M = 1-based item index, for reading in chunks)
   Run from the repo root. */
const {load,items,plain}=require('../../tools/sumlib');
const a=process.argv.slice(2),type=String(a[0]||'').toUpperCase(),tag=a[1];
const gi=f=>{const i=a.indexOf(f);return i>=0?+a[i+1]:0;};const from=gi('--from')||1,to=gi('--to')||1e9;
if(!['MCQ','OSCE'].includes(type)||!tag){console.log('usage: node parts/subspe/hydump.js <MCQ|OSCE> "<tag>" [--from N] [--to M]');process.exit(1);}
const W=load('data_subspe');const mine=items(W,type).filter(o=>o.tags.includes(tag));
const cut=(s,n)=>{s=plain(s).replace(/\n/g,' ');return n&&s.length>n?s.slice(0,n)+' …':s;};
console.log(`# Subspe ${type} "${tag}" — ${mine.length} items · ${new Set(mine.map(o=>o.rot)).size} rotations · showing ${from}–${Math.min(to,mine.length)}\n`);
const L='ABCDE';let lastQ=null;
mine.forEach((o,i)=>{if(i+1<from||i+1>to)return;const q=o.q;
  if(type==='MCQ'){
    console.log(`#${i+1} [${o.key}] ${o.rot} · tags: ${o.tags.join(', ')}`);
    console.log('Q: '+cut(q.stem));
    (q.opts||[]).forEach((x,j)=>console.log(`  ${L[j]}. ${cut(x)}${j===q.ans?'  ← ANSWER':''}`));
    if(q.key)console.log('Key(file): '+cut(q.key,220));
    if(q.opinion)console.log('Opinion: '+cut(q.opinion,260));
    if(q.why)console.log('Why: '+cut(q.why,700));
    if(q.trap)console.log('Trap: '+cut(q.trap,200));
    if(q.flag)console.log('Flag: '+cut(q.flag,220));
    console.log('');return;}
  if(q!==lastQ){lastQ=q;console.log(`=== ${q.set} ${q.ro||''} ${q.orig}${q.title?' — '+cut(q.title):''}${q.sec?' · sec '+q.sec:''}${q.topic?' · topic '+q.topic:''}${q.sub?' · sub '+q.sub:''}${q.ex?' · examiner':''}`);
    console.log('Stem: '+cut(q.stem,900));if(q.imgAlt)console.log('ImgAlt: '+cut(q.imgAlt,300));
    if(q.opinion)console.log('Opinion: '+cut(q.opinion,260));}
  const p=(q.parts||[])[o.pi];if(p&&p.info&&o.s===p.subs[0])console.log('  New info: '+cut(p.info,300));
  console.log(`  #${i+1} [${o.key}] tags: ${o.tags.join(', ')}${o.s.marks?' · '+o.s.marks+' marks':''}`);
  console.log('  Q: '+cut(o.s.q));
  console.log('  Answer: '+cut(o.s.ans,900));
  if(o.s.key&&!/^ไม่มีเฉลยในไฟล์/.test(plain(o.s.key)))console.log('  Key(file): '+cut(o.s.key,200));
  if(o.s.exp)console.log('  Exp: '+cut(o.s.exp,500));
  if(o.s.flag)console.log('  Flag: '+cut(o.s.flag,220));
  console.log('');});
