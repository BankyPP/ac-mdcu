(function(){
/* Internal Medicine OSCE ข้อสอบเก่า AC — MDCU68 RoC (IMO68CQ) จากสมุด GoodNotes "MCQ Med For All" (รุ่นพี่ MDCU75) Part 2 หน้า PDF 34 คอลัมน์ขวาล่าง หัวข้อ "OSCE" (หัวไฟล์ 'Rotate 3/2558', หน้าคั่น 32 'MDCU68 R3')
   recall 1 สถานี ติดป้าย "XX." → orig "x1" · ข้อความถูกเจ้าของสมุดปิดทับด้วยกล่องสีขาว (มีแค่ขีดแดงเล็ก ๆ ที่หัวข้อ OSCE) → รูปเฉลย ok68c_1 render ใหม่แบบเอากล่องปิดออก · ไม่มีลายมือเฉลย
   ⚠ ข้อความ recall ตรงกับกล่อง "XX-Thyro" ในสมุด R01 OSCE Med for All หน้า 40 (osce_b17.js) ทุกคำ — น่าจะเป็นสถานีเดียวกัน (ปี 68) → ใช้ลายมือเฉลยของ R01 p40 เป็น key (Grave's, toxic adenoma, TMNG; ถ้าเป็น thyroiditis จะเป็นแค่ few weeks)
   ข้อ 2 (การตรวจเพื่อแยกโรค) Claude เติม เหมือน R01 · ไม่มีรูปโจทย์ (สถานีแปลผลจากข้อมูลที่ให้) */
const KN=p=>"เฉลยจากลายมือในสมุด R01 (OSCE Med for All) p"+p+" — สถานีข้อความเดียวกัน";
const NK="ไม่มีเฉลยในสมุด (เฉลยโดย Claude)";
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
const H=(label,w)=>({h:label,w});
const CR=x=>Object.assign(x,{crit:1});
function B(q,marks,o){const pts=[],kw=[],crit=[],secs=[];(o.pts||[]).forEach(p=>{if(p.h){secs.push([p.h,pts.length,p.w||0]);return;}
  if(p.crit)crit.push(pts.length);
  if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,key:NK},o);delete s.pts;s.points=pts;s.kw=kw;if(crit.length)s.crit=crit;if(secs.length)s.secs=secs;return s;}
const S=(...subs)=>[{subs}];
const Co=o=>Object.assign({set:"MDCU68",ro:"RoC",file:"IMO68CQ",kfile:"IMO68CQ",opinion:""},o,{page2:o.page});
QB.push(

Co({page:34,orig:"x1",topic:"lab",kimg:["ok68c_1"],seen:"สถานีเดียวกับ R01 XX-Thyro (OSCE Med for All p40) · คล้าย MDCU74 RoX ข้อ 5, MDCU76 RoC ข้อ 10 (thyrotoxicosis + diffuse goiter)",
 title:"Thyrotoxicosis for 2 months with a diffusely enlarged thyroid, low TSH and high FT3: 3 differential diagnoses",
 stem:`History, physical examination and laboratory results are summarized: <b>thyrotoxicosis for 2 months</b>, <b>diffusely enlarged thyroid gland</b>, <b>TSH low</b>, <b>FT3 high</b>.<br>1. Give 3 differential diagnoses.<br>2. Name the investigation(s) that best distinguish them.`,
 gray:"OSCE XX. ให้ประวัติตรวจร่างกายกับแลปมา สรุปว่าเป็น thyrotoxicosis 2 mo, diffusely enlarged thyroid gland, TSH ต่ำ, FT3 สูง ให้ Differential diagnosis มา 3 โรค",
 flag:"ข้อ 2 Claude เติม (R01 เขียน further investigation = RAIU) · ⚠ key ของ R01 (Graves, toxic adenoma, TMNG) ไม่เข้ากับ 'diffusely enlarged' ทั้งหมด — ตำราแยก diffuse goiter + thyrotoxicosis เป็น Graves vs thyroiditis (painless/subacute) ± hCG-mediated → ให้คะแนนทั้งสองชุด",
 notes:"ข้อความ recall ถูกกล่องขาวปิดในสมุด (อ่านจาก text layer) · ไม่มีลายมือเฉลยของเจ้าของสมุด MCQ Med For All",
 parts:S(
  B("1. Give 3 differential diagnoses.",6,{tags:["lab"],key:KN(40)+" — Grave's, Toxic adenoma, Toxic multinodular goiter (ลายมือ: ถ้าเป็น thyroiditis จะเป็นแค่ few weeks)",
   ans:"<b>Graves' disease</b> (เหมาะที่สุด: diffuse goiter + อาการ 2 เดือน) · ตาม R01: <b>toxic adenoma</b>, <b>toxic multinodular goiter</b> (R01 ตัด thyroiditis เพราะอาการ 2 เดือน — thyroiditis มัก few weeks) · ตามตำรา/ATA 2016 สำหรับ <b>diffuse</b> goiter: <b>painless (silent/postpartum) thyroiditis</b> — thyrotoxic phase นานได้ถึง 2–3 เดือน, <b>subacute (de Quervain) thyroiditis</b> — คอเจ็บ ไข้ ESR สูง หลัง viral URI, <b>hCG-mediated</b> (molar pregnancy, choriocarcinoma, hyperemesis gravidarum), iodine/amiodarone-induced · TSH ต่ำจึงตัด TSH-secreting adenoma ออก · exogenous thyroid hormone ต่อมไม่โต",
   exp:"Thyrotoxicosis + TSH ต่ำ = primary · ต่อมโตทั่ว ๆ (diffuse) → Graves, thyroiditis, hCG · ก้อนเดี่ยว → toxic adenoma · หลายก้อน → TMNG · ต่อมคลำไม่ได้ → exogenous, struma ovarii",
   rubric:"ได้ = Graves + อีก 2 โรคที่สมเหตุสมผล (thyroiditis ชนิดใดชนิดหนึ่ง, TMNG/toxic adenoma ตาม R01, hCG-mediated, exogenous) · บางส่วน = Graves อย่างเดียว",
   pts:[CR(P("Graves' disease","grave","basedow","เกรฟส์")),G("DDx อีก 2 โรค",2,P("Painless (silent/postpartum) thyroiditis","painless","silent","postpartum","lymphocytic"),P("Subacute (de Quervain) thyroiditis","subacute","de quervain","granulomatous","thyroiditis"),P("Toxic multinodular goiter (R01)","multinodular","\\btmng\\b","\\bmng\\b"),P("Toxic adenoma (R01)","toxic adenoma","plummer","adenoma"),P("hCG-mediated (molar pregnancy)","hcg","mole","molar","chorio","gestational"),P("Exogenous / iodine-induced","exogenous","factitia","levothyrox","iodine","amiodarone"))]}),
  B("2. Name the investigation(s) that best distinguish them.",4,{tags:["lab"],flag:"Claude เติม",
   ans:"<b>Radioactive iodine uptake (RAIU) ± thyroid scan</b> — Graves = uptake สูง กระจายทั่ว · toxic adenoma = hot nodule เดียว กดส่วนที่เหลือ · TMNG = หลายจุด patchy · thyroiditis/exogenous/iodine-induced = uptake ต่ำ · <b>TRAb (TSH receptor antibody)</b> ยืนยัน Graves (ATA 2016: เลือก TRAb, RAIU หรือ thyroid US with Doppler — Graves มี blood flow เพิ่ม, thyroiditis ลดลง) · ESR/CRP สูงใน subacute thyroiditis · thyroglobulin ต่ำใน exogenous · β-hCG ในหญิงวัยเจริญพันธุ์",
   rubric:"ได้ = RAIU/scan (crit) + TRAb หรือ Doppler US · บางส่วน = บอกแค่ thyroid function test ซ้ำ",
   pts:[CR(P("RAIU / thyroid scan","raiu","uptake","scan","scint","ไอโอดีนรังสี")),P("TRAb / TSI","trab","\\btsi\\b","receptor antibod","tsh receptor"),P("Thyroid ultrasound with Doppler / ESR / β-hCG","ultrasound","doppler","\\besr\\b","hcg"),P("T3/T4 ratio (T3-toxicosis เด่นใน Graves)","t3/t4","ratio"),P("ส่งตรวจซ้ำ TFT ติดตาม","repeat","follow","ติดตาม")]})),
 interp:"Thyrotoxicosis (TSH ต่ำ FT3 สูง) + diffuse goiter 2 เดือน → Graves มากที่สุด · แยก thyroiditis ด้วย RAIU (ต่ำ) และ TRAb",
 summary:["Diffuse goiter + thyrotoxicosis: Graves, painless/subacute thyroiditis, hCG-mediated · R01 key: Graves, toxic adenoma, TMNG","RAIU สูง = Graves/TA/TMNG · ต่ำ = thyroiditis/exogenous/iodine","TRAb ยืนยัน Graves (ATA 2016) · Doppler US: flow สูงใน Graves","Thyroiditis มักเป็นไม่กี่สัปดาห์ หายเอง แล้วอาจมี hypothyroid phase"]})

);})();
