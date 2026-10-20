#!/usr/bin/env node
/* Check the Phase 2 high-yield summary files of one ward + exam type.
   node tools/sumcheck.js <ward dir> <MCQ|MEQ|OSCE> [tag]
   - structure of every SUMM entry (tag, title, groups → sections with id/title/members)
   - every member key exists in the Service round · section ids unique within a topic
   - coverage: every item tagged <tag> appears in at least one section of that tag's summary (missing items are listed)
   - text rules: no "ข้อ"+digit (the site rewrites those) · no tables
   Ends with "bad N" — 0 = ok. Topics without a summary file are only reported (the site lists their items automatically). */
const {load,items}=require('./sumlib');
const [dir,typeA,only]=process.argv.slice(2);const type=String(typeA||'').toUpperCase();
if(!dir||!['MCQ','MEQ','OSCE'].includes(type)){console.log('usage: node tools/sumcheck.js <ward dir> <MCQ|MEQ|OSCE> [tag]');process.exit(1);}
const W=load(dir),its=items(W,type),byKey={};let bad=0;const err=m=>{bad++;console.log('  ✗ '+m);};
const dupK={};its.forEach(o=>{if(byKey[o.key])dupK[o.key]=1;byKey[o.key]=o;});
Object.keys(dupK).forEach(k=>err(`duplicate item key in the bank: ${k} (two questions share set|ro|orig — give one a distinct orig)`));
const S=W.SUMM[type].filter(s=>!only||s.tag===only),seenTag={};
S.forEach(s=>{console.log(`${s._file}: tag "${s.tag}"`);
  if(!s.tag||!s.title||!Array.isArray(s.groups))return err('needs tag, title and groups[]');
  if(seenTag[s.tag])err(`tag "${s.tag}" also in ${seenTag[s.tag]}`);seenTag[s.tag]=s._file;
  const ids=new Set(),cov=new Set();let nsec=0;
  s.groups.forEach((g,gi)=>{if(!g.title||!Array.isArray(g.sections)||!g.sections.length)err(`group ${gi+1} needs title and sections[]`);
    (g.sections||[]).forEach(x=>{nsec++;const where=`section "${x.title||x.id}"`;
      if(!x.id||!x.title)err(`${where} needs id and title`);if(ids.has(x.id))err(`${where}: id "${x.id}" repeated`);ids.add(x.id);
      if(!Array.isArray(x.members)||!x.members.length)err(`${where} has no members`);
      (x.members||[]).forEach(m=>{if(!byKey[m])err(`${where}: member "${m}" is not in the Service round`);else cov.add(m);});
      ['asked','pattern'].forEach(f=>{if(!Array.isArray(x[f])||!x[f].length)err(`${where} needs ${f}[]`);});
      const txt=[x.trend,...(x.asked||[]),...(x.pattern||[]),...(x.pearls||[])].join(' ');
      if(/ข้อ\s*\d/.test(txt))err(`${where}: has "ข้อ"+number — say เคส / ข้อย่อย / the rotation instead`);
      if(/<table/i.test(txt))err(`${where}: tables not allowed — use bullets`);});});
  const mine=its.filter(o=>o.tags.includes(s.tag)),miss=mine.filter(o=>!cov.has(o.key));
  console.log(`  ${s.groups.length} groups · ${nsec} sections · covers ${mine.length-miss.length}/${mine.length} tagged items`);
  if(miss.length)err(`${miss.length} tagged items not in any section: ${miss.map(o=>o.key).join(' , ')}`);});
if(!only){const have=new Set(S.map(s=>s.tag)),c={};its.forEach(o=>o.tags.forEach(t=>c[t]=(c[t]||0)+1));
  const todo=Object.keys(c).filter(t=>!have.has(t));if(todo.length)console.log(`no summary yet (site lists their items automatically): ${todo.map(t=>t+' ('+c[t]+')').join(', ')}`);}
console.log('bad '+bad);process.exit(bad?1:0);
