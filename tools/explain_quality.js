// มาตรฐานเฉลยกลาง (ผู้ใช้สั่ง 24 พ.ย. 2026: ทุกข้อสอบต้องคุณภาพเท่า Gen Sx) — ใช้ร่วมโดย
//   tools/ac_full_check.js (นับข้อที่ยังไม่ผ่าน) · tools/explain_gate.js (กันแพตช์ใหม่ไม่ให้ build ถ้าไม่ผ่าน)
// ตัวเลขตั้งจาก Gen Sx (DIR=data) ช่วง p10–p25 · กฎเนื้อหาทุกข้อเลือกเฉพาะที่ Gen Sx ผ่านเกือบทั้งหมด
// คู่มือเต็ม: project doc kit/มาตรฐานเฉลย.md
const T=x=>String(x||'').replace(/<[^>]+>/g,'').replace(/&gt;/g,'>').replace(/&lt;/g,'<').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const LT='ABCDEFGH';
const MINL={interp:100,why:350,wrong:100,trap:120,sumN:5,sum:600,bullet:15,opinion:80,varN:3,variants:250,variant:50};
// ผู้ใช้สั่ง 24 พ.ย. 2026 15:3x: "มีเกณฑ์มันไม่ใช่เรื่อง … ขอให้ทำแบบ Gen Sx" → gate (build) ไม่มีขั้นต่ำความยาวแล้ว
//   เช็คแค่ช่องไม่ว่าง + ทุกช้อยผิดมี "จะถูกถ้า/ไม่มีสถานการณ์" + ไม่ซ้ำ + บอกคีย์เดิมเมื่อ ans ≠ คีย์ · MIN ยังใช้แค่ ac_full_check (นับข้อเก่าที่บาง)
const GATE={interp:1,why:1,wrong:1,trap:1,sumN:1,sum:1,bullet:1,opinion:1,varN:1,variants:1,variant:1};
const txt=v=>T(typeof v==='string'?v:JSON.stringify(v));
// คืนรายการปัญหา [{f:ฟิลด์, m:เหตุผล}] · ว่าง = ผ่าน
function issues(q,opt){
  const MIN=opt&&opt.gate?GATE:MINL;
  const out=[],add=(f,m)=>out.push({f,m}),n=(q.opts||[]).length;
  const ansTxt=n?T(q.opts[q.ans]):'';
  // ตีความโจทย์
  const it=T(q.interp);
  if(it.length<MIN.interp)add('interp',`สั้น ${it.length}/${MIN.interp}`);
  else if(ansTxt&&it.replace(/[.\s]/g,'')===ansTxt.replace(/[.\s]/g,''))add('interp','แค่ทวนคำตอบ');
  // ทำไมถูก
  const wy=T(q.why);if(wy.length<MIN.why)add('why',`สั้น ${wy.length}/${MIN.why}`);
  // ทำไมข้ออื่นผิด
  if(n>1){const w=q.wrong||{};const ls=LT.slice(0,n).split('').filter((L,i)=>i!==q.ans);
    const vals=ls.map(L=>T(Array.isArray(w)?'':w[L]));
    ls.forEach((L,i)=>{const s=vals[i];
      if(!s)add('wrong',`ช้อย ${L} ว่าง`);
      else if(s.length<MIN.wrong)add('wrong',`ช้อย ${L} สั้น ${s.length}/${MIN.wrong}`);
      else if(!/จะถูก|จะเป็นคำตอบ|ไม่มีสถานการณ์/.test(s))add('wrong',`ช้อย ${L} ไม่มี "จะถูกถ้า…"`);});
    if(new Set(vals.filter(Boolean)).size<vals.filter(Boolean).length)add('wrong','มีช้อยที่คำอธิบายซ้ำกัน');}
  // กับดัก
  const tr=T(q.trap);if(tr.length<MIN.trap||/^same as/i.test(tr))add('trap',`สั้น ${tr.length}/${MIN.trap}`);
  // สรุป
  const sm=(q.summary||[]).map(T);const st=sm.join('').length;
  if(sm.length<MIN.sumN||st<MIN.sum)add('summary',`${sm.length} bullet รวม ${st} (ต้อง ≥${MIN.sumN} bullet รวม ≥${MIN.sum})`);
  else{const sh=sm.filter(b=>b.length<MIN.bullet).length;if(sh)add('summary',`${sh} bullet สั้นกว่า ${MIN.bullet}`);
    if(new Set(sm).size<sm.length)add('summary','bullet ซ้ำกัน');}
  // ความเห็น
  const op=T(q.opinion);if(op.length<MIN.opinion)add('opinion',`สั้น ${op.length}/${MIN.opinion}`);
  // โจทย์แบบใหม่
  const va=(q.variants||[]).map(txt);const vt=va.join('').length;
  if(va.length<MIN.varN||vt<MIN.variants)add('variants',`${va.length} ข้อ รวม ${vt} (ต้อง ≥${MIN.varN} ข้อ รวม ≥${MIN.variants})`);
  else{const sh=va.filter(v=>v.length<MIN.variant).length;if(sh)add('variants',`${sh} ข้อสั้นกว่า ${MIN.variant}`);}
  // ans ไม่ตรงคีย์ไฟล์ → ต้องบอกใน trap หรือ opinion
  const flag=T(q.key)+' '+T(q.notes);
  if(/ไม่ตรงกับคีย์|Claude ตอบ|คีย์ 2 ไฟล์ไม่ตรง/.test(flag)&&!/คีย์/.test(tr+' '+op))add('trap','ans ต่างจากคีย์ไฟล์ แต่ trap/opinion ไม่ได้บอกคีย์เดิม');
  return out;
}
const fields=q=>[...new Set(issues(q).map(x=>x.f))];
module.exports={issues,fields,MIN:MINL,GATE,T};
