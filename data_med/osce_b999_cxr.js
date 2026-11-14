/* เกณฑ์ตรวจสถานี CXR แบบ ABCDEFGHI — Internal Medicine Y4 MDCU เท่านั้น (ผู้ใช้กำหนด 14 พ.ย. 2026)
   ไฟล์นี้ไม่เพิ่มข้อ — แก้เฉพาะ "เกณฑ์ให้คะแนน" ของข้อย่อยอ่านฟิล์ม (ข้อย่อยแรก) ของสถานี CXR ข้อสอบเก่าทุกข้อ · เฉลยในไฟล์ (key) และคำตอบ (ans) คงเดิม
   ตรวจตามเนื้อหา ไม่สนลำดับ · "must" = น้ำหนักมาก (ไม่ใช่ must-not-miss) · B/E/G/H = ควรพูด น้ำหนักน้อย · F = finding ผิดปกติของข้อนั้น (เดิม) ห้ามขาด
   keep = index ของ points เดิมที่เป็น finding เฉพาะข้อ (ที่เหลือเป็นหัวข้ออ่านทั่วไป แทนด้วย A–H ด้านล่าง) · crit เดิมที่อยู่ใน keep ยังเป็น critical ของ finding นั้น */
(function(){
const A=[
 ["A · Position: PA/AP, upright/supine",["\\bpa\\b","\\bap\\b","upright","erect","supine","ท่า"]],
 ["A · Exposure: good / under / over",["exposure","penetrat","under","over"]],
 ["A · Rotation: no / right / left",["rotat"]],
 ["A · Lung volume: normal / low / high (A6, P9–11)",["lung volume","inspirat","\\bribs?\\b","ซี่","hyperinfl","low volume","volume"]],
 ["A · Trachea midline (หรือบอกทิศที่ shift)",["trachea","midline","deviat","shift"]],
 ["B · Bones & soft tissue",["bone","fractur","lytic","sclerotic","soft tissue","subcutaneous","กระดูก"]],
 ["C · Heart size / CTR",["\\bctr\\b","heart size","cardiomeg","cardiothoracic","cardiac","หัวใจ"]],
 ["D · Diaphragm: Rt higher than Lt (หรือบอกความผิดปกติ)",["diaphragm","กระบังลม","กะบังลม"]],
 ["D · Costophrenic angles: sharp / blunted",["costophrenic","\\bcp ?a","cp angle","มุม"]],
 ["E · Pleura: effusion / pneumothorax / thickening",["effusion","pneumothorax","pleura"]]];
const T=[["G · Gastric bubble / great vessels",["gastric","stomach","aort","great vessel"]],["H · Hila",["hil"]]];
const W={A:25,B:3,C:12,D:20,E:3,F:33,G:2,H:2};
const FIX=[["MDCU78","RoA","4",[2,3,4,5]],["MDCU78","RoB","8",[1,2,3]],["MDCU79","RoA","2",[2,3,4]],["MDCU76","RoA","1",[2,3,4,5]],["MDCU76","RoC","5",[2,3,4]],
 ["MDCU75","RoA","3",[6]],["MDCU75","RoB","11",[1,2,3]],["MDCU75","RoD","15",[0,1,2]],["MDCU74","RoX","13",[0,1,2,3]],["MDCU78","RoD","5",[0,1]],
 ["MDCU77","RoA","7",[2,3,4]],["MDCU77","RoB","5",[1,2,3,4]],["MDCU77","RoC","1",[2,3,4]],["MDCU77","RoD","6",[0,1,2]]];
const RUB="เกณฑ์ ABCDEFGHI (Med Y4 MDCU, ผู้ใช้ 14 พ.ย. 2026) — ตรวจตามเนื้อหา ไม่ต้องเรียงหัวข้อ: A ครบ 4 (position, exposure, rotation, lung volume) + trachea · C อย่างน้อย heart size หรือ CTR · D ต้องมี diaphragm (Rt สูงกว่า Lt) + CP angles · F finding ผิดปกติของข้อนี้ห้ามขาด · B/E/G/H ควรพูด (น้ำหนักน้อย) · I ถ้ามีสาย/อุปกรณ์ต้องบอก";
FIX.forEach(([set,ro,orig,keep])=>{const q=QB.find(x=>x.set===set&&x.ro===ro&&String(x.orig)===orig&&x.topic==="img");if(!q)return;
  const s=(q.parts&&q.parts[0]?q.parts[0].subs:q.subs)[0];if(!s||!Array.isArray(s.points)||s._abc)return;
  const oc=new Set(s.crit||[]),pts=[],kw=[],crit=[],secs=[];
  const add=(t,re)=>{pts.push(t);kw.push(re);};
  secs.push(["A — Assessment & Airway",0,W.A]);A.slice(0,5).forEach(x=>add(...x));
  secs.push(["B — Bones & soft tissue",pts.length,W.B]);add(...A[5]);
  secs.push(["C — Cardiac",pts.length,W.C]);add(...A[6]);
  secs.push(["D — Diaphragm",pts.length,W.D]);add(...A[7]);add(...A[8]);
  secs.push(["E — Effusions",pts.length,W.E]);add(...A[9]);
  secs.push(["F — Fields of lungs / ความผิดปกติของข้อนี้",pts.length,W.F]);keep.forEach(i=>{if(oc.has(i))crit.push(pts.length);add(s.points[i],s.kw[i]);});
  secs.push(["G — Gastric bubble & great vessels",pts.length,W.G]);add(...T[0]);
  secs.push(["H — Hila",pts.length,W.H]);add(...T[1]);
  s.points=pts;s.kw=kw;s.secs=secs;if(crit.length)s.crit=crit;else delete s.crit;
  s.rubric=RUB+(s.rubric?" · เดิม: "+s.rubric:"");s._abc=1;});
})();
