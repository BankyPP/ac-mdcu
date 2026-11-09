#!/usr/bin/env node
/* ตรวจไฟล์ OSCE: node parts/subspe/check_osce.js data_subspe/osce_b<N>.js */
const fs=require('fs'),path=require('path');const f=process.argv[2],QB=[];new Function('QB',fs.readFileSync(f,'utf8'))(QB);
const TOP={img:0,inst:0,suture:0,path:0,pic:0,hx:1,pe:1,proc:2},bad=[],seen={};const imgDir=path.join(path.dirname(f),'..','img');
const E=(q,m)=>bad.push(`[${q.orig}] ${m}`);
QB.forEach(q=>{['set','ro','file','orig','topic','sub','title','stem','gray'].forEach(k=>{if(!q[k])E(q,'missing '+k);});if(typeof q.orig!=='string')E(q,'orig must be string');if(!q.page)E(q,'missing page');
 if(seen[q.orig])E(q,'duplicate orig');seen[q.orig]=1;
 if(!(q.topic in TOP))E(q,'topic '+q.topic);else{const t=TOP[q.topic];if(t>=1&&!q.ex)E(q,'needs ex:1');if(t===2&&!q.proc)E(q,'needs proc:1');if(t>=1&&!q.sp)E(q,'needs sp');if(t===0&&q.ex)E(q,'no ex');}
 [].concat(q.img||[],q.kimg||[]).forEach(n=>{if(!fs.existsSync(path.join(imgDir,n+'.jpg')))E(q,'no image '+n);});
 const subs=(q.parts||[]).flatMap(p=>p.subs||[]);if(!subs.length)E(q,'no subs');
 subs.forEach((s,i)=>{['q','marks','ans','exp','key'].forEach(k=>{if(!s[k])E(q,`sub${i} missing ${k}`);});if(!Array.isArray(s.tags)||!s.tags.length)E(q,`sub${i} tags`);
  const P=s.points||[],K=s.kw||[];if(!P.length)E(q,`sub${i} no points`);if(P.length!==K.length)E(q,`sub${i} kw≠points`);
  P.forEach((p,j)=>{const chk=a=>{(a||[]).forEach(r=>{try{new RegExp(r,'i');if(String(r).length<2)E(q,`sub${i} short regex ${r}`);}catch(e){E(q,`sub${i} bad regex ${r}`);}});};
   if(typeof p==='string'){if(!K[j]||!K[j].length)E(q,`sub${i} pt${j} no kw`);chk(K[j]);}else{if(!p.any||!p.need)E(q,`sub${i} pt${j} shape`);(K[j]||[]).forEach(chk);}});
  (s.secs||[]).forEach(x=>{if(!Array.isArray(x)||typeof x[1]!=='number')E(q,`sub${i} secs`);});(s.crit||[]).forEach(x=>{if(x>=P.length)E(q,`sub${i} crit`);});});
 const txt=JSON.stringify(q);if(/`/.test(q.gray||''))E(q,'backtick in gray');if(/\bHN\s*[:\d]/.test(txt))E(q,'HN?');});
const by={};QB.forEach(q=>{by[q.topic]=(by[q.topic]||0)+1;});console.log('stations',QB.length,JSON.stringify(by));bad.forEach(x=>console.log(x));console.log('bad',bad.length);process.exit(bad.length?1:0);
