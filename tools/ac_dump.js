// แสดงข้อที่เฉลยยังไม่ครบ ทีละชุด เพื่อเขียนแพตช์ parts/explain/<slug>/pNN.json
//   DIR=data_subspe node tools/ac_dump.js [--set MDCU66] [--ro RoA] [--from 0] [--n 12]
const load=require(__dirname+'/load.js');
const T=x=>String(x||'').replace(/<[^>]+>/g,'').replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/&amp;/g,'&').trim();
const {problems}=(()=>{const m=require('module');return {problems:null}})();
const A=process.argv.slice(2),g=(k,d)=>{const i=A.indexOf(k);return i>=0?A[i+1]:d};
const SET=g('--set'),RO=g('--ro'),FROM=+g('--from',0),N=+g('--n',12),LT='ABCDEFGH';
const chk=require('child_process');
const bad=JSON.parse(chk.execFileSync('node',[__dirname+'/ac_full_check.js','--json'],{env:process.env}).toString());
const B=new Map(bad.map(x=>[x.k+'@'+x.page,x.b]));
const {QB}=load();const cnt={};QB.forEach(q=>{const k=q.set+'|'+(q.ro||'')+'|'+q.orig;cnt[k]=(cnt[k]||0)+1});
const L=QB.filter(q=>B.has(q.set+'|'+(q.ro||'')+'|'+q.orig+'@'+q.page)&&(!SET||q.set===SET)&&(!RO||q.ro===RO));
console.log(`# ${L.length} ข้อที่ยังขาด (แสดง ${FROM}–${Math.min(FROM+N,L.length)-1})`);
for(const q of L.slice(FROM,FROM+N)){
  const k=q.set+'|'+(q.ro||'')+'|'+q.orig,key=cnt[k]>1?k+'@p'+q.page:k;
  console.log('\n## '+key+'  ขาด: '+B.get(k+'@'+q.page).join(','));
  console.log('STEM: '+T(q.stem));
  (q.opts||[]).forEach((o,i)=>console.log(' '+LT[i]+(i===q.ans?'*':' ')+' '+T(o)));
  console.log('KEY: '+T(q.key)+(q.gray?'\nGRAY: '+T(q.gray):'')+(q.notes?'\nNOTES: '+T(q.notes):'')+(q.guide?'\nGUIDE: '+T(q.guide):''));
  console.log('OPINION: '+T(q.opinion).slice(0,400));
  console.log('NOW interp: '+T(q.interp)+'\nNOW why: '+T(q.why)+'\nNOW wrong: '+JSON.stringify(q.wrong)+'\nNOW trap: '+T(q.trap)+'\nNOW summary: '+JSON.stringify((q.summary||[]).map(T)));
}
