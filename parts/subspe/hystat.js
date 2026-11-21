#!/usr/bin/env node
/* rotation counts per group / section of one summary file — to order groups & sections by how often they were examined
   node parts/subspe/hystat.js <MCQ|OSCE> data_subspe/sum_mcq_uro.js */
const {load,items}=require('../../tools/sumlib');const path=require('path');
const [typeA,file]=process.argv.slice(2);const type=String(typeA).toUpperCase();const W=load('data_subspe');
const rot={};items(W,type).forEach(o=>{rot[o.key]=o.rot;});const f=path.basename(file);
W.SUMM[type].filter(s=>s._file===f).forEach(s=>{console.log(`TAG ${s.tag}`);
  const R=ms=>new Set(ms.map(m=>rot[m]).filter(Boolean));
  (s.groups||[]).forEach(g=>{const gm=[].concat(...(g.sections||[]).map(x=>x.members||[]));
    console.log(`  [${R(gm).size} rot · ${new Set(gm).size} items] ${g.title}`);
    (g.sections||[]).forEach(x=>console.log(`      ${String(R(x.members||[]).size).padStart(2)} rot · ${String((x.members||[]).length).padStart(3)} items  ${x.id} — ${x.title}`));});});
