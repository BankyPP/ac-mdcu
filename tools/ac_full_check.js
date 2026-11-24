// เช็กเฉลยข้อสอบเก่า (AC MCQ) ว่าครบทุกพาร์ทตามมาตรฐาน Gen Sx (ผู้ใช้สั่ง 23 พ.ย. 2026 ทวทว)
//   DIR=data_subspe node tools/ac_full_check.js [--list] [--set MDCU67] [--json]
// เกณฑ์ (ไม่นับแท็ก HTML):
//   (24 พ.ย. 2026) interp ≥ 100 · why ≥ 350 · wrong ทุกช้อยผิด ≥ 100 มี "จะถูกถ้า…" ไม่ซ้ำกัน · trap ≥ 120 · summary ≥ 5 bullet รวม ≥ 600 · opinion ≥ 80 · variants ≥ 3 ข้อ รวม ≥ 250 (เทียบ Gen Sx)
const load=require(__dirname+'/load.js');
const T=x=>String(x||'').replace(/<[^>]+>/g,'').replace(/&[a-z]+;/g,' ').trim();
const A=process.argv.slice(2),LIST=A.includes('--list'),JS=A.includes('--json'),si=A.indexOf('--set'),SET=si>=0?A[si+1]:null;
const LT='ABCDEFGH';
function problems(q){
  // เกณฑ์ใหม่ 24 พ.ย. 2026 (ผู้ใช้สั่ง: ต้องเท่า Gen Sx) — อิงความยาวจริงของ Gen Sx ช่วง p10–p25
  const b=[],n=(q.opts||[]).length;
  if(n>1){const w=q.wrong||{};const it=Array.isArray(w)?w:LT.slice(0,n).split('').filter((L,i)=>i!==q.ans).map(L=>w[L]);
    if(it.some(x=>T(x).length<100||!/จะถูก|จะเป็นคำตอบ|ไม่มีสถานการณ์/.test(T(x))))b.push('wrong');else if(new Set(it.map(T)).size<it.length)b.push('wrong');}
  if(T(q.interp).length<100)b.push("interp");
  if(T(q.why).length<350)b.push('why');
  if(T(q.trap).length<120)b.push('trap');
  const s=q.summary||[];if(s.length<5||s.map(T).join("").length<600)b.push('summary');
  if(T(q.opinion).length<80)b.push('opinion');
  const v=q.variants||[];if(v.length<3||v.map(x=>T(typeof x==='string'?x:JSON.stringify(x))).join('').length<250)b.push('variants');
  return b;
}
const {QB}=load();const bad=[],cnt={},oc={};
for(const q of QB){const kp=q.set+'|'+(q.ro||'')+'|'+q.orig+'@'+q.page,n=oc[kp]=(oc[kp]||0)+1;if(SET&&q.set!==SET)continue;if(!q.opts||!q.opts.length)continue;const b=problems(q);if(b.length){bad.push({k:q.set+'|'+(q.ro||'')+'|'+q.orig,page:q.page,n,b});b.forEach(x=>cnt[x]=(cnt[x]||0)+1);}}
if(JS)process.stdout.write(JSON.stringify(bad)+'\n');else{console.log(`${process.env.DIR||'data'}: ${QB.length} ข้อ · ขาด ${bad.length}`+(bad.length?' · แยกพาร์ท '+JSON.stringify(cnt):''));
if(LIST)bad.forEach(x=>console.log('  '+x.k+' p'+x.page+(x.n>1?'#'+x.n:'')+': '+x.b.join(',')));}
module.exports={problems};
