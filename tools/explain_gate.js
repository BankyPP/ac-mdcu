// ตัวกันคุณภาพเฉลย (ผู้ใช้สั่ง 24 พ.ย. 2026) — explain_build.py เรียกอัตโนมัติหลังสร้าง explain.js
// ตรวจทุกข้อที่อยู่ในแพตช์ชื่อขึ้นต้น "zq" (แพตช์รอบใหม่ทุกวอร์ด) ตามเกณฑ์กลาง tools/explain_quality.js
// ไม่ผ่านแม้ข้อเดียว → exit 1 (explain_build หยุด ห้าม build/push) · ผ่าน → พิมพ์ตารางเทียบ Gen Sx (รายงานให้ผู้ใช้)
//   DIR=data_subspe node tools/explain_gate.js data_subspe
const fs=require('fs'),path=require('path');
const R=path.join(__dirname,'..'),slug=process.argv[2];
const {issues,T}=require(__dirname+'/explain_quality.js');
const files=fs.readdirSync(path.join(R,'parts/explain',slug)).filter(f=>/^z[qz].*\.json$/.test(f)).sort();
if(!files.length){console.log(`gate ${slug}: ไม่มีแพตช์ zq* — ข้าม`);process.exit(0);}
const keys=new Set();for(const f of files)Object.keys(JSON.parse(fs.readFileSync(path.join(R,'parts/explain',slug,f),'utf8'))).forEach(k=>keys.add(k));
const exf=path.join(R,'parts/explain',slug,'_depth_exempt.txt');
const EXEMPT=fs.existsSync(exf)?fs.readFileSync(exf,'utf8').split('\n').map(x=>x.replace(/#.*/,'').trim()).filter(Boolean):[];
const {QB}=require(__dirname+'/load.js')();
const oc={},hit=new Map();
for(const q of QB){const b=q.set+'|'+(q.ro||'')+'|'+q.orig,bp=b+'@p'+q.page,n=oc[bp]=(oc[bp]||0)+1;
  for(const k of [bp+'#'+n,bp,b])if(keys.has(k)){if(!hit.has(k))hit.set(k,[]);hit.get(k).push(q);break;}}
const missing=[...keys].filter(k=>!hit.has(k));
const bad=[];for(const [k,qs] of hit)for(const q of qs){const is=issues(q,{gate:true,depth:!EXEMPT.some(e=>k.startsWith(e))});if(is.length)bad.push([k,is]);}
if(missing.length)console.log('❌ key ไม่ตรงข้อใด: '+missing.join(' · '));
if(bad.length){console.log(`❌ gate ${slug}: ${bad.length} ข้อในแพตช์ zq* ยังไม่ผ่านมาตรฐานระดับ 78 (kit/มาตรฐานเฉลย-แบบ78-GenSx.md · tools/explain_quality.js DEPTH78) — แก้ก่อน build/push`);
  bad.slice(0,40).forEach(([k,is])=>console.log('  '+k+' → '+is.map(x=>x.f+': '+x.m).join(' · ')));process.exit(1);}
if(missing.length)process.exit(1);
// รายงานเทียบ Gen Sx (มัธยฐาน ตัวอักษร) — แนบให้ผู้ใช้ทุกครั้งที่ push
const med=a=>{a=a.slice().sort((x,y)=>x-y);return a.length?a[a.length>>1]:0};
const M={interp:q=>T(q.interp).length,why:q=>T(q.why).length,'wrong/ช้อย':q=>{const v=Object.values(q.wrong||{}).map(T);return v.length?Math.round(v.join('').length/v.length):0},trap:q=>T(q.trap).length,summary:q=>(q.summary||[]).map(T).join('').length,opinion:q=>T(q.opinion).length,variants:q=>(q.variants||[]).map(x=>T(typeof x==='string'?x:JSON.stringify(x))).join('').length};
const GEN={interp:164,why:531,'wrong/ช้อย':210,trap:172,summary:926,opinion:241,variants:377};
const done=[...hit.values()].flat();
console.log(`✅ gate ${slug}: ${done.length} ข้อในแพตช์ zq* ผ่านทั้งหมด · มัธยฐานเทียบ Gen Sx:`);
console.log('  | ช่อง | ชุดนี้ | Gen Sx |');for(const k in M)console.log(`  | ${k} | ${med(done.map(M[k]))} | ${GEN[k]} |`);
const last=Object.keys(JSON.parse(fs.readFileSync(path.join(R,'parts/explain',slug,files[files.length-1]),'utf8')));
console.log('  ตัวอย่างให้ผู้ใช้เปิดดู (แพตช์ล่าสุด '+files[files.length-1]+'): '+last.slice(0,2).join(' · '));
