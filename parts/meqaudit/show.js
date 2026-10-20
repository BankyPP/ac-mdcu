#!/usr/bin/env node
/* node parts/meqaudit/show.js <own_N.txt | key ...> [--brief]
   Prints each OB-GYN MEQ question (case) that contains a listed sub, with all case fields and every sub (as stored + current
   meq_fixes.js). Subs you own are marked "◆ OWNED"; others are shown for context only. Case-level fields belong to the owner
   of that case's sub #1 (marked "case fields: OWNED"). */
const fs=require('fs'),{load,items}=require('../../tools/sumlib');
const args=process.argv.slice(2),brief=args.includes('--brief');let keys=[];
args.filter(a=>a!=='--brief').forEach(a=>{if(fs.existsSync(a))keys.push(...fs.readFileSync(a,'utf8').split('\n').filter(Boolean));else keys.push(a);});
const want=new Set(keys),W=load('data_obgyn'),its=items(W,'MEQ'),byQ=new Map();
its.forEach(o=>{if(!byQ.has(o.q))byQ.set(o.q,[]);byQ.get(o.q).push(o);});
const SKIP=['uid','kimg','page2','kfile','imgNote','seen','rep'];
for(const [q,subs] of byQ){if(!subs.some(o=>want.has(o.key)))continue;
  const base=subs[0].key.replace(/#\d+$/,''),ownCase=want.has(subs[0].key);
  console.log('\n################ CASE '+base+(ownCase?'   (case fields: OWNED)':'')+'  · style: '+subs[0].sty);
  const c={};Object.keys(q).forEach(k=>{if(k!=='parts'&&!SKIP.includes(k))c[k]=q[k];});
  if(brief){delete c.notes;}
  console.log(JSON.stringify(c,null,1));
  (q.parts||[]).forEach((p,pi)=>{if(p.info||p.igray)console.log('--- part '+(pi+1)+' new info: '+(p.info||'')+(p.igray?' | '+p.igray:''));});
  subs.forEach(o=>{const s=Object.assign({},o.s);delete s.kimg;if(brief&&!want.has(o.key))['key','exp','rubric','kw','points'].forEach(k=>delete s[k]);
    console.log('=== SUB '+o.key+(want.has(o.key)?'   ◆ OWNED':'   (context only)')+'  · part '+(o.pi+1)+' · tags: '+(o.tags||[]).join(', '));
    console.log(JSON.stringify(s,null,1));});}
