#!/usr/bin/env node
/* node parts/meqaudit/check.js <N> — validate parts/meqaudit/patch_<N>.json against own_<N>.txt and the allowed fields */
const fs=require('fs'),path=require('path'),{load,items}=require('../../tools/sumlib');
const N=process.argv[2],D=__dirname,p=JSON.parse(fs.readFileSync(path.join(D,`patch_${N}.json`),'utf8'));
const own=new Set(fs.readFileSync(path.join(D,`own_${N}.txt`),'utf8').split('\n').filter(Boolean));
const ownCase=new Set([...own].filter(k=>/#1$/.test(k)).map(k=>k.replace(/#1$/,'')));
const all=new Set(items(load('data_obgyn'),'MEQ').map(o=>o.key));
const CASE_OK=['interp','approach','trap','summary','opinion','mnemonic'],SUB_OK=['ans','exp','rubric','points','kw','flag'];
let bad=0;const B=m=>{console.log('BAD',m);bad++;};
for(const [k,v] of Object.entries(p)){const sub=k.includes('#');
  if(sub?!own.has(k):!ownCase.has(k))B('not owned: '+k);
  if(sub&&!all.has(k))B('no such sub: '+k);
  for(const f of Object.keys(v))if(!(sub?SUB_OK:CASE_OK).includes(f))B('field not allowed: '+k+' .'+f);
  if(v.kw){if(!Array.isArray(v.kw))B('kw not array: '+k);else v.kw.forEach(g=>(Array.isArray(g)?g:[g]).forEach(r=>{try{new RegExp(r,'i');}catch(e){B('kw regex '+k+': '+r);}}));}
  if(v.points&&!(Array.isArray(v.points)&&v.points.every(x=>x&&x.label&&Array.isArray(x.any))))B('points shape: '+k);
  if(/ข้อ\s?[0-9]/.test(JSON.stringify(v)))B('"ข้อ"+digit in '+k);}
console.log('group',N,Object.keys(p).length,'keys · bad',bad);
