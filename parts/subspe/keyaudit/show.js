#!/usr/bin/env node
/* print every field of the questions listed in a keys file (one "set|ro|orig" per line) — Subspe key audit (21 Nov 2026)
   node parts/subspe/keyaudit/show.js <MCQ|OSCE> parts/subspe/keyaudit/list_m1.txt */
const fs=require('fs'),path=require('path'),vm=require('vm');
const [type,lf]=process.argv.slice(2);const keys=fs.readFileSync(lf,'utf8').split('\n').map(s=>s.trim()).filter(Boolean);
const D='data_subspe',num=f=>+f.replace(/\D/g,'');const pre=type==='MCQ'?/^data_b\d+\.js$/:/^osce_b\d+\.js$/;
const all=[];fs.readdirSync(D).filter(f=>pre.test(f)).sort((a,b)=>num(a)-num(b)).forEach(f=>{const QB=[];vm.runInNewContext(fs.readFileSync(path.join(D,f),'utf8'),{QB,console});QB.forEach(q=>{q._file=f;all.push(q);});});
if(type==='MCQ'&&fs.existsSync(path.join(D,'fixes.js')))vm.runInNewContext(fs.readFileSync(path.join(D,'fixes.js'),'utf8'),{QB:all,console});
keys.forEach(k=>{const [kk,pg]=k.split('@p');const hits=all.filter(q=>q.set+'|'+q.ro+'|'+q.orig===kk&&(!pg||String(q.page)===pg));
  if(!hits.length){console.log('### NOT FOUND',k);return;}
  hits.forEach(q=>{const o=Object.assign({},q);console.log('### '+k+'  (file '+q._file+(q.page?' page '+q.page:'')+')');delete o._file;
    console.log(JSON.stringify(o,null,1).slice(0,type==='MCQ'?9000:20000));console.log('');});});
