#!/usr/bin/env node
/* node parts/obaudit/show.js <own_N.txt | key ...>  → print every field of each OB-GYN MCQ (raw, as stored + current fixes) */
const fs=require('fs'),{load,items}=require('../../tools/sumlib');
const args=process.argv.slice(2);let keys=[];args.forEach(a=>{if(fs.existsSync(a))keys.push(...fs.readFileSync(a,'utf8').split('\n').filter(Boolean));else keys.push(a);});
const W=load('data_obgyn'),its=items(W,'MCQ'),by={};its.forEach(o=>by[o.key]=o);
const dupOf={};(W.DUP||[]).forEach(g=>g.forEach(k=>{dupOf[k]=g.filter(x=>x!==k);}));
keys.forEach(k=>{const o=by[k];if(!o){console.log('NOT FOUND',k);return;}const q=Object.assign({},o.q);delete q.uid;
  console.log('######## '+k+'  · tags: '+o.tags.join(', ')+(dupOf[k]?'  · same/similar question elsewhere: '+dupOf[k].join(' ; '):''));
  console.log(JSON.stringify(q,null,1));});
