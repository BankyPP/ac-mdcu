// เช็กเฉลยข้อสอบเก่า (AC MCQ) ว่าครบทุกพาร์ทตามมาตรฐาน Gen Sx (ผู้ใช้สั่ง 23 พ.ย. 2026 ทวทว)
//   DIR=data_subspe node tools/ac_full_check.js [--list] [--set MDCU67] [--json]
// เกณฑ์ (ไม่นับแท็ก HTML):
//   interp ≥ 25 · why ≥ 150 · wrong ทุกช้อยผิด ≥ 40 และไม่ซ้ำกัน · trap ≥ 25 · summary ≥ 3 bullet รวม ≥ 90 (เท่าเกณฑ์ Unit — kit/กติกา-เฉลย-Unit-ครบทุกพาร์ท.md)
const load=require(__dirname+'/load.js');
const T=x=>String(x||'').replace(/<[^>]+>/g,'').replace(/&[a-z]+;/g,' ').trim();
const A=process.argv.slice(2),LIST=A.includes('--list'),JS=A.includes('--json'),si=A.indexOf('--set'),SET=si>=0?A[si+1]:null;
const LT='ABCDEFGH';
function problems(q){
  const b=[],n=(q.opts||[]).length;
  if(n>1){const w=q.wrong||{};const it=Array.isArray(w)?w:LT.slice(0,n).split('').filter((L,i)=>i!==q.ans).map(L=>w[L]);
    if(it.some(x=>T(x).length<40))b.push('wrong');else if(new Set(it.map(T)).size<it.length)b.push('wrong');}
  if(T(q.interp).length<25)b.push("interp");
  if(T(q.why).length<150)b.push('why');
  if(T(q.trap).length<25)b.push('trap');
  const s=q.summary||[];if(s.length<3||s.map(T).join("").length<90)b.push('summary');
  return b;
}
const {QB}=load();const bad=[],cnt={};
for(const q of QB){if(SET&&q.set!==SET)continue;if(!q.opts||!q.opts.length)continue;const b=problems(q);if(b.length){bad.push({k:q.set+'|'+(q.ro||'')+'|'+q.orig,page:q.page,b});b.forEach(x=>cnt[x]=(cnt[x]||0)+1);}}
if(JS){console.log(JSON.stringify(bad));process.exit(0);}
console.log(`${process.env.DIR||'data'}: ${QB.length} ข้อ · ขาด ${bad.length}`+(bad.length?' · แยกพาร์ท '+JSON.stringify(cnt):''));
if(LIST)bad.forEach(x=>console.log('  '+x.k+' p'+x.page+': '+x.b.join(',')));
module.exports={problems};
