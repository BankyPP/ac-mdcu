// node kit78/dump.js <DIR> [OUT]  → JSON ทุกข้อของวอร์ด (key = set|ro|orig[@pPAGE[#n]] แบบเดียวกับแพตช์ parts/explain)
// ตัวอย่าง: node kit78/dump.js data_obgyn /tmp/all_obgyn.json
const path=require('path');const R=path.join(__dirname,'..');process.chdir(R);
process.env.DIR=process.argv[2]||'data_subspe';const OUT=process.argv[3]||'/tmp/all_'+process.env.DIR+'.json';
const {QB}=require(R+'/tools/load.js')();const cnt={},cp={},oc=new Map();
QB.forEach(q=>{const k=q.set+'|'+(q.ro||'')+'|'+q.orig;cnt[k]=(cnt[k]||0)+1;const kp=k+'@'+q.page;cp[kp]=(cp[kp]||0)+1;oc.set(q,cp[kp])});
const F=['ro','set','orig','stem','opts','ans','key','notes','img','imgNote','kimg','topic','interp','why','wrong','trap','summary','opinion','variants','mnemonic','guide','file','page','kfile','page2','src','gray'];
const out={};for(const q of QB){const k=q.set+'|'+(q.ro||'')+'|'+q.orig,n=oc.get(q),key=cnt[k]>1?k+'@p'+q.page+(cp[k+'@'+q.page]>1?'#'+n:''):k;
 const o={};F.forEach(f=>{if(q[f]!==undefined)o[f]=q[f]});out[key]=o;}
require('fs').writeFileSync(OUT,JSON.stringify(out));console.log(Object.keys(out).length,'ข้อ →',OUT);
