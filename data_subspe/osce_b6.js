(function(){
/* Surgery Subspecialties OSCE ข้อสอบเก่า AC — MDCU66 RoB (ต่อจาก General Surgery Rotate 2/2556 หน้า 233–236 → ถือเป็น Rotate 2/2556)
   ไฟล์: GSUP4K (01_5_MCQs_Key_4.pdf) หน้า 237–239 = เธรด Facebook ที่หลายคนช่วยกันจด · OSCE + ส่วน PowerPoint อยู่หน้า 237 ทั้งหมด · หน้า 238–239 เป็น MEQ/MCQ ล้วน (ไม่ทำ)
   ไม่คัดลอกชื่อคน/เวลาโพสต์ (gray เก็บเฉพาะเนื้อหา recall)
   การรวม/แยก recall: OSCE 5 (mammogram), 6 (เครื่องมือ 3 อัน), 8 (acute abdomen series) มีผู้จด 2 คนจดเรื่องเดียวกันเสริมกัน → รวมเป็นสถานีเดียว
   ลำดับเลข: ผู้จดคนแรกจดข้อ 7 = ฟิล์ม acute abdomen, 8 = ผลพยาธิเต้านม, 9 = ไหม แล้วโพสต์ว่า "ลืมข้อปวดท้อง" · ผู้จดอีกคนจด 7 = ประวัติ appendicitis เขียน order, 8 = acute abdomen series
     → ใช้เลขที่แก้แล้ว: 7 order appendicitis, 8 acute abdomen series, 9 ผลพยาธิ TNM, 10 ไหม, 11 NG, 12 คลำเต้านม, 13 DRE (ครบ 13 สถานี)
   PowerPoint: ไม่มีเลขในไฟล์ → ไล่ตามลำดับ PPT 1 chronic anal fissure, PPT 2 imperforate anus, PPT 3 JP drain, PPT 4 acute anal fissure + internal hemorrhoid
     (PPT 1 กับ 4 อาจเป็นสไลด์เดียวกันที่จดต่างกัน แต่เนื้อหาต่างจริง (chronic vs acute + hemorrhoid) จึงแยกสถานีตามกติกา)
   รูป/เฉลยในไฟล์: screenshot ตาราง AJCC breast staging (T, N/M, stage grouping) ข้างข้อ 5–12 → kimg os66b_k9a, os66b_k9b ของ OSCE 9 · ตัวแดงข้าง NG (OSCE 11) · ลายมือชมพู VACTERAL/associate anomalies (PPT 2)
   ไม่มีรูปโจทย์ในไฟล์ → imgNote NOIMG + imgAlt */
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)";
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
const H=(label,w)=>({h:label,w});
const CR=x=>Object.assign(x,{crit:1});
function B(q,marks,o){const pts=[],kw=[],crit=[],secs=[];(o.pts||[]).forEach(p=>{if(p.h){secs.push([p.h,pts.length,p.w||0]);return;}
  if(p.crit)crit.push(pts.length);
  if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,key:NK},o);delete s.pts;s.points=pts;s.kw=kw;if(crit.length)s.crit=crit;if(secs.length)s.secs=secs;return s;}
const S=(...subs)=>[{subs}];
const NOIMG="ไม่มีรูปในไฟล์ — ข้อนี้ฝึกบรรยายสิ่งที่คาดว่าจะเห็น";
const Co=o=>Object.assign({set:"MDCU66",ro:"RoB",file:"GSUP4K",opinion:""},o);
QB.push(

/* ===== OSCE 1 ===== */
Co({page:237,sec:"OSCE",orig:"1",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — sterile gloving and skin suturing",
 stem:`1.1 Put on sterile gloves.<br>1.2 Close the wound on the skin pad with two vertical mattress sutures.`,
 gray:"[OSCE] ข้อ 1. ใส่ถุงมือ กับเย็บ vertical mattress 2 stitch",
 sp:"หุ่นผิวหนังมีแผลตรง · ถุงมือ sterile, needle holder, toothed forceps, scissors, ไหม non-absorbable 3-0 พร้อมเข็ม cutting · ผู้คุมดู: เทคนิคใส่ถุงมือไม่ปนเปื้อน, far-far near-near, ระยะห่างระหว่าง 2 stitch, ขอบแผล evert, ปม square ≥3 throws",
 flag:"ขนาดไหม/อุปกรณ์ในบทผู้คุม Claude แต่ง",
 parts:S(
  B("1.1 Put on sterile gloves.",4,{tags:["proc"],
   ans:"ล้างมือ → เลือกขนาด เช็คซอง/วันหมดอายุ → เปิดซองชั้นนอกจับด้านนอก → มือเปล่าจับ<b>ด้านในขอบพับ</b>ของถุงมือข้างแรก สวม → นิ้วที่สวมถุงมือแล้ว<b>สอดใต้ขอบพับ (ด้านนอก)</b>ของอีกข้าง สวม → คลี่ขอบพับไม่แตะผิว → มืออยู่เหนือเอว ไม่แตะสิ่งไม่ sterile · ปนเปื้อน = เปลี่ยน",
   exp:"มือเปล่าแตะได้เฉพาะด้านในของถุงมือ ถุงมือ sterile แตะได้เฉพาะด้านนอก",rubric:"ได้เต็ม = ไม่ปนเปื้อน · ปนเปื้อนไม่รู้ตัว = ไม่ผ่าน",
   pts:[H("เตรียม",20),P("ล้างมือ / เช็คซอง ขนาด","ล้างมือ","hand hygiene","ซอง","ขนาด","size"),H("ใส่",60),CR(P("ข้างแรก: จับด้านในขอบพับ","ด้านใน","inner","inside","ขอบพับ","cuff")),CR(P("ข้างที่สอง: สอดนิ้วใต้ขอบพับ","ใต้ขอบพับ","under.*cuff","สอดนิ้ว","outer surface")),P("คลี่ขอบพับไม่แตะผิว","คลี่","unfold"),H("หลังใส่",20),P("มือเหนือเอว / ปนเปื้อนเปลี่ยน","เหนือเอว","above.*waist","contaminat","ปนเปื้อน")]}),
  B("1.2 Place two vertical mattress sutures.",6,{tags:["proc"],
   ans:"จับ needle holder/เข็มที่ 1/3–1/2 จากโคน · แทงตั้งฉากตามความโค้งเข็ม · <b>far-far</b> (ห่างขอบ ~5–10 mm ลึก) → <b>near-near</b> (ห่างขอบ ~1–2 mm ตื้น) ในแนวเดียวกัน → ขอบแผล <b>evert</b> · ผูก instrument tie: surgeon's knot แล้วสลับทิศ ≥3 throws (square knot) ปมอยู่ข้างแผล ตึงพอดี · stitch ที่สองห่างจากแรก ~ 5–10 mm ระยะสม่ำเสมอ · ตัดไหม 3–5 mm · เก็บเข็มปลอดภัย",
   exp:"vertical mattress ใช้เมื่อขอบแผลมีแนวโน้มม้วนเข้า (inversion) หรือผิวหย่อน",rubric:"ได้เต็ม = far-far → near-near ทั้ง 2 stitch + evert + square knot + ระยะสม่ำเสมอ",
   pts:[H("เย็บ",60),CR(P("Far-far แล้ว near-near","far.?far","near.?near","ไกล.*ใกล้")),P("แทงตั้งฉาก ตามความโค้ง","ตั้งฉาก","perpendicular","ความโค้ง"),P("ขอบแผล evert","evert","ปลิ้น"),P("2 stitch ระยะสม่ำเสมอ","สม่ำเสมอ","ระยะ","spacing","even"),H("ผูกปม",40),CR(P("Square knot ≥3 throws สลับทิศ","square","สลับ","throw","surgeon.?s knot")),P("ปมข้างแผล ตึงพอดี ตัดไหม","ข้างแผล","ตึงพอดี","tension","ตัดไหม")]})
 ),
 interp:"sterile technique + เย็บ vertical mattress",summary:["ถุงมือ sterile: มือเปล่าแตะด้านใน, ถุงมือแตะด้านนอก","vertical mattress: far-far → near-near ในแนวเดียวกัน → ขอบ evert","square knot ≥3 throws ตึงพอดี ปมข้างแผล"]}),

/* ===== OSCE 2 ===== */
Co({page:237,sec:"OSCE",orig:"2",topic:"hx",sub:"Hematemesis/UGIB",ex:1,title:"History — vomiting blood",
 stem:`A patient presents with vomiting of blood. Take a history from this patient.`,
 gray:"ข้อ 2. ซักประวัติผู้ป่วย อาเจียนเป็นเลือด",
 sp:"ชาย 55 ปี · <b>อาเจียนเป็นเลือดสีดำคล้ำคล้ายกากกาแฟ 2 ครั้ง</b> วันนี้ ครั้งละ ~ครึ่งแก้ว ไม่มีอาเจียนรุนแรงนำมาก่อน · ถ่ายดำเหนียว 1 ครั้งเมื่อวาน · เวียนศีรษะเวลาลุกยืน ใจสั่น ไม่เป็นลม · ปวดจุกลิ้นปี่เป็น ๆ หาย ๆ 1 เดือน ดีขึ้นเมื่อกินอาหาร · <b>ปวดเข่า กิน NSAIDs (ยาแก้ปวดข้อจากร้านยา) วันละ 2–3 ครั้ง 2 เดือน</b> · ไม่กลืนลำบาก น้ำหนักไม่ลด · ไม่เคยมีตัวเหลือง ท้องโต ไม่เคยเป็นโรคตับ ไม่เคยเลือดออกทางเดินอาหาร · ดื่มเบียร์บางครั้ง ไม่สูบบุหรี่ · ไม่กินยาต้านเกล็ดเลือด/ยาละลายลิ่มเลือด · HT คุมด้วย amlodipine",
 flag:"บทผู้ป่วยจำลอง Claude แต่ง (ไฟล์บอกแค่หัวข้อ)",
 parts:S(
  B("2.1 Take a history from a patient with hematemesis.",10,{tags:["hx"],
   ans:"<b>แนะนำตัว</b> ยืนยันผู้ป่วย · <b>ลักษณะเลือด</b>: เริ่มเมื่อไร กี่ครั้ง ปริมาณ สี (แดงสด/ลิ่ม vs กากกาแฟ) อาเจียนรุนแรงนำมาก่อน (Mallory-Weiss) · ถ่ายดำ/ถ่ายเป็นเลือด · <b>อาการจากการเสียเลือด</b>: หน้ามืด เป็นลม ใจสั่น เหนื่อย ปัสสาวะน้อย · <b>หาสาเหตุ</b>: ปวดท้องลิ้นปี่/dyspepsia (peptic ulcer), <b>NSAIDs/aspirin/antiplatelet/anticoagulant/steroid</b>, alcohol, <b>โรคตับ</b> (ตับแข็ง ตัวเหลือง ท้องโต varices เดิม ไวรัสตับอักเสบ), กลืนลำบาก/น้ำหนักลด/อิ่มเร็ว (CA), เลือดออกง่ายที่อื่น · <b>PMH</b>: เคย GI bleed/H. pylori, โรคหัวใจ ไต ตับ · ยา · alcohol/บุหรี่ · <b>สรุป</b>: UGIB จาก NSAID-induced peptic ulcer มากที่สุด ddx varices, Mallory-Weiss, gastric CA",
   exp:"ประวัติต้องตอบ 3 คำถาม: เลือดออกมากแค่ไหน (hemodynamics), มาจากไหน (upper vs lower), สาเหตุอะไร (ulcer vs variceal — เปลี่ยนการรักษาเบื้องต้น)",
   rubric:"ได้เต็ม = ลักษณะเลือด + อาการเสียเลือด + ยา (NSAIDs/antithrombotic) + โรคตับ/alcohol + red flag มะเร็ง + สรุป ddx",
   pts:[H("เริ่มต้น",5),P("แนะนำตัว ยืนยันผู้ป่วย","แนะนำตัว","introduc","ชื่อ"),
    H("CC/PI",30),P("จำนวนครั้ง ปริมาณ","กี่ครั้ง","ปริมาณ","amount","volume","เท่าไร"),P("สี: แดงสด vs กากกาแฟ / ลิ่ม","สี","กากกาแฟ","coffee","แดงสด","ลิ่ม","clot"),P("อาเจียนรุนแรงนำมาก่อน","อาเจียนรุนแรง","retch","mallory"),P("ถ่ายดำ / ถ่ายเป็นเลือด","ถ่ายดำ","melena","ถ่ายเป็นเลือด","hematochez"),
    H("Hemodynamic",15),CR(P("หน้ามืด เป็นลม ใจสั่น","หน้ามืด","เป็นลม","syncope","dizz","ใจสั่น","palpit")),
    H("สาเหตุ/ปัจจัยเสี่ยง",35),P("ปวดลิ้นปี่ / dyspepsia","ลิ้นปี่","epigastr","dyspeps","จุก"),CR(P("NSAIDs / aspirin / antiplatelet / anticoagulant","nsaid","aspirin","แอสไพริน","antiplatelet","anticoag","warfarin","ยาแก้ปวด","steroid")),P("Alcohol / โรคตับ / varices","alcohol","เหล้า","ตับ","liver","cirrho","varic","เหลือง"),P("กลืนลำบาก น้ำหนักลด (มะเร็ง)","กลืน","dysphag","น้ำหนักลด","weight loss"),
    H("PMH/สรุป",15),P("เคยเลือดออกทางเดินอาหาร / โรคประจำตัว","เคย","previous","โรคประจำตัว","underlying"),P("สรุป ddx: PUD จาก NSAIDs, varices","peptic","ulcer","pud","แผลในกระเพาะ","สรุป")]})
 ),
 interp:"ซักประวัติ UGIB ให้ได้ความรุนแรง แหล่งเลือด และสาเหตุ (ulcer vs variceal)",summary:["ลักษณะเลือด: แดงสด/กากกาแฟ, ปริมาณ, ถ่ายดำ","อาการเสียเลือด: หน้ามืด เป็นลม ใจสั่น","สาเหตุ: NSAIDs/antithrombotic, alcohol/โรคตับ (varices), dyspepsia, red flag มะเร็ง"]}),

/* ===== OSCE 3 ===== */
Co({page:237,sec:"OSCE",orig:"3",topic:"pe",sub:"Neuro motor/reflex",ex:1,title:"Physical examination — deep tendon reflexes",
 stem:`Examine the deep tendon reflexes of this patient.`,
 gray:"ข้อ 3. ตรวจ deep tendon reflex",
 sp:"ผู้ป่วยจำลองปกติ · reflex 2+ เท่ากันทุกตำแหน่งทั้งสองข้าง · plantar response flexor ทั้งสองข้าง · ไม่มี clonus · ผู้คุมดู: การจับไม้เคาะ, จัดท่าผ่อนคลาย, ตำแหน่งเคาะ, เทียบซ้าย-ขวา, reinforcement, การรายงานผลเป็นเกรด",
 flag:"ผลตรวจในบทผู้คุม Claude แต่ง",
 parts:S(
  B("3.1 Examine the deep tendon reflexes.",8,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต จัดท่าให้ผ่อนคลาย เปิดบริเวณตรวจ · จับ reflex hammer ที่ปลายด้าม เหวี่ยงจากข้อมือ เคาะครั้งเดียวแม่น · <b>ตรวจเทียบซ้าย-ขวาทีละตำแหน่ง</b>: <b>Biceps (C5–6)</b> วางนิ้วโป้งบนเอ็นแล้วเคาะนิ้ว · <b>Brachioradialis (C5–6)</b> เหนือ radial styloid ~ 2–3 นิ้ว · <b>Triceps (C7–8)</b> เหนือ olecranon · <b>Knee (L3–4)</b> patellar tendon ขณะห้อยขา/รองใต้เข่า · <b>Ankle (S1)</b> Achilles ขณะดันปลายเท้าขึ้นเล็กน้อย · ไม่ได้ reflex → <b>reinforcement (Jendrassik maneuver)</b> · ตรวจ <b>plantar response (Babinski)</b> และ <b>clonus</b> · <b>รายงาน</b>: เกรด 0 (absent), 1+ (ลดลง), 2+ (ปกติ), 3+ (ไวขึ้น), 4+ (มี clonus) เช่น 'DTR 2+ ทุกตำแหน่ง symmetrical, plantar flexor, no clonus'",
   exp:"hyperreflexia = UMN lesion · hypo/areflexia = LMN, peripheral neuropathy, root lesion · ความไม่สมมาตรมีความหมายมากกว่าค่าสัมบูรณ์",
   rubric:"ได้เต็ม = 5 ตำแหน่งพร้อม root + เทียบสองข้าง + reinforcement + plantar/clonus + รายงานเกรด",
   pts:[H("เตรียม",15),P("แนะนำตัว จัดท่าผ่อนคลาย","แนะนำตัว","ผ่อนคลาย","relax","ขออนุญาต"),P("จับไม้เคาะถูก เหวี่ยงจากข้อมือ","hammer","ไม้เคาะ","ข้อมือ","wrist"),
    H("ตรวจ reflex",55),P("Biceps C5–6","biceps","c5"),P("Brachioradialis C5–6","brachioradialis","supinator"),P("Triceps C7–8","triceps","c7"),P("Knee L3–4","knee","patella","l3","l4","เข่า"),P("Ankle S1","ankle","achilles","s1","ข้อเท้า"),CR(P("เทียบซ้าย-ขวา","เทียบ","compare","symmetr","สองข้าง","ซ้าย.*ขวา")),P("Reinforcement (Jendrassik)","reinforce","jendrassik"),
    H("ตรวจเพิ่ม/รายงาน",30),P("Plantar response / clonus","babinski","plantar","clonus"),CR(P("รายงานเกรด 0–4+","2\\+","grade","เกรด","normoreflex"))]})
 ),
 interp:"เทคนิคตรวจ DTR ครบ 5 ตำแหน่ง เทียบสองข้าง และรายงานเป็นเกรด",summary:["biceps/brachioradialis C5–6, triceps C7–8, knee L3–4, ankle S1","เทียบซ้าย-ขวาทุกตำแหน่ง · ไม่ได้ reflex ใช้ Jendrassik","รายงานเกรด 0–4+ พร้อม plantar response และ clonus"]}),

/* ===== OSCE 4 ===== */
Co({page:237,sec:"OSCE",orig:"4",topic:"img",sub:"IVP/KUB",title:"Imaging — excretory urography",imgNote:NOIMG,imgAlt:"ภาพชุด intravenous pyelography (scout film และภาพหลังฉีดสารทึบรังสี)",seen:"คล้าย MDCU66 RoA OSCE 4 (ฟิล์ม IVP ครบชุด)",
 stem:`An intravenous pyelography (IVP) series is shown.<br>4.1 Describe the abnormal findings.<br>4.2 What is the most likely diagnosis?`,
 gray:"ข้อ 4. ดู IVP (uro)",
 flag:"NOIMG · ไฟล์จดแค่หัวข้อ — คำถาม 4.1–4.2 Claude แต่ง และเฉลยใช้ภาพที่พบบ่อยที่สุด (ureteric calculus with hydronephrosis) พร้อมกรอบการอ่าน",
 parts:S(
  B("4.1 Describe the abnormal findings.",4,{tags:["img"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"อ่านเป็นระบบ: <b>Scout KUB</b> (radio-opaque density ตามแนวไต-ท่อไต-กระเพาะปัสสาวะ, psoas, กระดูก) → <b>nephrogram</b> (ขนาดไต, delayed nephrogram ข้างที่อุดตัน) → <b>pyelogram</b> (calyceal blunting/clubbing, hydronephrosis) → <b>ureter</b> (hydroureter ถึงระดับใด, filling defect) → <b>bladder</b> (filling defect, trabeculation, post-void residual) · ตัวอย่าง: นิ่วทึบรังสีที่ distal ureter + delayed excretion + hydronephrosis/hydroureter เหนือก้อน",
   exp:"อ่าน scout ก่อนเสมอ เพราะสารทึบรังสีบดบังนิ่วได้",rubric:"ได้เต็ม = อ่านตามลำดับ + บอกระดับอุดตัน",
   pts:[P("Scout film / radio-opaque density","scout","kub","radio.?opaque","ทึบ"),P("Delayed nephrogram/excretion","delay","nephrogram","ช้า","excret"),CR(P("Hydronephrosis/hydroureter + ระดับ","hydroneph","hydroureter","calyc","dilat","ขยาย","obstruct")),P("Filling defect / bladder","filling defect","bladder","กระเพาะปัสสาวะ")]}),
  B("4.2 What is the most likely diagnosis?",2,{tags:["img"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"ตามภาพที่สมมติ: <b>ureteric calculus with obstructive uropathy (hydronephrosis)</b> ระบุข้างและระดับ · ddx ของ filling defect: radiolucent stone, urothelial carcinoma, blood clot",
   exp:"การรักษา: นิ่วเล็ก MET (tamsulosin) · ใหญ่ URS/ESWL · อุดตัน+ติดเชื้อ → DJ stent/PCN ด่วน",rubric:"ได้เต็ม = นิ่ว/การอุดตัน + ข้าง/ระดับ",
   pts:[CR(P("Ureteric stone / obstruction","stone","calcul","นิ่ว","obstruct")),P("ข้าง + ระดับ","left","right","ซ้าย","ขวา","distal","proximal")]})
 ),
 interp:"อ่าน IVP เป็นระบบ",summary:["IVP: scout → nephrogram → pyelogram → ureter → bladder","นิ่วท่อไต: delayed nephrogram + hydronephrosis/hydroureter เหนือระดับนิ่ว"]}),

/* ===== OSCE 5 ===== */
Co({page:237,sec:"OSCE",orig:"5",topic:"img",sub:"Mammogram",title:"Imaging — breast radiograph with a marked lesion",imgNote:NOIMG,imgAlt:"ภาพถ่ายรังสีเต้านม 2 มุมมอง มีเครื่องหมายดาวกำกับตำแหน่งหนึ่ง",seen:"คล้าย MDCU66 RoA OSCE 5 (mammogram: ชื่อการตรวจ ท่า อ่านรอยโรค)",
 stem:`A breast radiograph is shown. An area is marked with a star.<br>5.1 Name the views in which the images were taken.<br>5.2 Describe the abnormality at the marked area.`,
 gray:"ผู้จดคนที่ 1: ข้อ5 ฟิล์ม breast บรรยายความผิดปกติตรงดาว · ผู้จดคนที่ 2: 5 mammogram อ่าน lesion บอกวิวที่ถ่าย MLO CC",
 notes:"รวม recall 2 ฉบับ (สถานีเดียวกัน): ฉบับแรกให้บรรยายความผิดปกติตรงดาว · ฉบับที่สองให้อ่าน lesion และบอกวิวที่ถ่าย โดยผู้จดเขียนคำตอบ <b>MLO CC</b>",
 flag:"NOIMG · ไฟล์ไม่บอกลักษณะรอยโรค — 5.2 เฉลยเป็นกรอบ BI-RADS",
 parts:S(
  B("5.1 Name the views.",2,{tags:["img"],key:"MLO CC (ใน recall)",
   ans:"<b>Craniocaudal (CC)</b> และ <b>Mediolateral oblique (MLO)</b>",exp:"MLO เห็น pectoralis major และ axillary tail · CC ใช้แยก medial/lateral",rubric:"ได้เต็ม = CC + MLO",
   pts:[CR(P("CC","\\bcc\\b","craniocaudal","cranio.?caudal")),CR(P("MLO","mlo","mediolateral","oblique"))]}),
  B("5.2 Describe the abnormality at the marked area.",4,{tags:["img"],
   ans:"บรรยายตาม BI-RADS: <b>mass</b> (shape: oval/round/irregular · margin: circumscribed/obscured/microlobulated/indistinct/<b>spiculated</b> · density) · <b>calcification</b> (morphology: fine pleomorphic/fine linear branching = suspicious; distribution: clustered/segmental) · architectural distortion · asymmetry · associated features (skin thickening/retraction, nipple retraction, axillary node) · <b>ตำแหน่ง</b>: ข้าง + quadrant/นาฬิกา + ระยะจากหัวนม · สรุป BI-RADS + แผน (BI-RADS 4–5 → core needle biopsy)",
   exp:"spiculated irregular mass และ fine pleomorphic calcification = ลักษณะร้ายที่สำคัญ",rubric:"ได้เต็ม = บรรยาย shape/margin/density หรือ calcification + ตำแหน่ง + BI-RADS",
   pts:[CR(P("Shape / margin / density","spicul","irregular","margin","ขอบ","shape","density")),P("Calcification","calcif","หินปูน"),P("ตำแหน่ง","quadrant","นาฬิกา","o.?clock","ตำแหน่ง"),P("BI-RADS + แผน biopsy","bi.?rads","biopsy")]})
 ),
 interp:"บอก standard views และบรรยายรอยโรคใน mammogram ด้วย BI-RADS lexicon",summary:["Mammogram 2 มุม: CC + MLO","บรรยาย mass (shape, margin, density), calcification, distortion + ตำแหน่ง + BI-RADS"]}),

/* ===== OSCE 6 ===== */
Co({page:237,sec:"OSCE",orig:"6",topic:"inst",sub:"Surgical instrument",title:"Instruments — identify three surgical instruments and their uses",imgNote:NOIMG,imgAlt:"เครื่องมือผ่าตัด 3 ชิ้น: คีมล็อกได้ปลายมีร่องขวาง, คีมล็อกได้ปลายรูปห่วงโค้งไม่มีฟัน, retractor มือถือใบกว้างโค้งลึก",
 stem:`Three surgical instruments are shown.<br>6.1 Name each instrument.<br>6.2 State the use of each instrument.`,
 gray:"ผู้จดคนที่ 1: ข้อ6 อุปกรณ์ บอกชื่อ และการใช้งาน มี 3 อัน · ผู้จดคนที่ 2: 6 เครื่องมือ Kelly clamp Babcock clamp richardson retractor บอกใช้ทำไรด้วย",
 notes:"รวม recall 2 ฉบับ: ฉบับที่สองระบุชื่อเครื่องมือ Kelly clamp, Babcock clamp, Richardson retractor",flag:"NOIMG",
 parts:S(
  B("6.1 Name each instrument.",3,{tags:["inst"],key:"Kelly clamp, Babcock clamp, Richardson retractor (ใน recall)",
   ans:"<b>Kelly clamp</b> (hemostat) · <b>Babcock clamp</b> (Babcock tissue forceps) · <b>Richardson retractor</b>",
   exp:"Kelly: ร่องขวางที่ปลายเพียงครึ่งหน้าของปาก (ต่างจาก Crile ที่มีร่องตลอด) · Babcock: ปลายเป็นห่วงโค้ง ไม่มีฟัน (atraumatic) · Richardson: retractor มือถือใบรูปตัว L กว้าง สำหรับแผลลึก",rubric:"1 คะแนนต่อชื่อ",
   pts:[CR(P("Kelly clamp","kelly")),CR(P("Babcock","babcock")),CR(P("Richardson retractor","richardson"))]}),
  B("6.2 State the use of each instrument.",3,{tags:["inst"],
   ans:"Kelly: <b>หนีบหลอดเลือดเพื่อห้ามเลือด</b>ก่อนผูก, จับเนื้อเยื่อหนา, blunt dissection · Babcock: <b>จับอวัยวะท่อที่บอบบางโดยไม่บาดเจ็บ</b> เช่น ลำไส้, ไส้ติ่ง, ท่อนำไข่, ท่อไต · Richardson: <b>ถ่างผนังหน้าท้อง/แผลลึก</b> ใน laparotomy, appendectomy",
   exp:"Babcock (atraumatic) vs Allis (traumatic) — เลือกตามว่าจะเก็บเนื้อเยื่อไว้หรือไม่",rubric:"1 คะแนนต่อการใช้ที่ถูก",
   pts:[P("Kelly: hemostasis / หนีบหลอดเลือด","hemosta","ห้ามเลือด","หนีบหลอดเลือด","vessel"),P("Babcock: จับลำไส้/อวัยวะท่อแบบ atraumatic","atraumatic","ลำไส้","bowel","appendix","ไส้ติ่ง","ท่อนำไข่"),P("Richardson: ถ่างผนังหน้าท้อง/แผลลึก","ถ่าง","retract","ผนังหน้าท้อง","abdominal wall","laparotomy","แผลลึก")]})
 ),
 interp:"จำแนกเครื่องมือผ่าตัดพื้นฐานและหน้าที่",summary:["Kelly = hemostat หนีบหลอดเลือด","Babcock = จับลำไส้/ไส้ติ่งแบบ atraumatic","Richardson = retractor ใบกว้างสำหรับแผลลึก/ผนังหน้าท้อง"]}),

/* ===== OSCE 7 ===== */
Co({page:237,sec:"OSCE",orig:"7",topic:"path",sub:"Order writing",title:"Orders — young adult with acute right lower quadrant pain",seen:"คล้าย MDCU66 RoA OSCE 10 (ประวัติ acute appendicitis + เขียน order — ฉบับนั้นเป็น post-op order)",
 stem:`A 22-year-old man presents with periumbilical pain for 12 hours that has moved to the right lower quadrant, with anorexia and nausea. Temperature 37.8 °C. There is tenderness with guarding and rebound tenderness at the right lower quadrant; Rovsing sign is positive. WBC 14,000/mm³ with 85% neutrophils.<br>7.1 What is the most likely diagnosis?<br>7.2 Write the admission orders for this patient.`,
 gray:"ผู้จดคนที่ 2: 7. ประวัติตรวจร่างกาย คนไข้น่าจะเป็นappendicitis แล้วถามว่าจะเขียน order ไง",
 flag:"ประวัติ/ตรวจร่างกาย/อุณหภูมิ/WBC Claude แต่ง (recall บอกแค่ว่าน่าจะเป็น appendicitis) · sub ใหม่ 'Order writing' · อัตรา IV/ขนาดยาเป็นตัวอย่างมาตรฐาน",
 parts:S(
  B("7.1 What is the most likely diagnosis?",2,{tags:["path"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"<b>Acute appendicitis</b> (Alvarado score สูง: migration, anorexia, nausea, RLQ tenderness, rebound, fever, leukocytosis, left shift)",exp:"Alvarado ≥7 = likely appendicitis",rubric:"ได้เต็ม = acute appendicitis",
   pts:[CR(P("Acute appendicitis","appendicitis","ไส้ติ่งอักเสบ"))]}),
  B("7.2 Write the admission orders.",6,{tags:["path"],
   ans:"<b>Order for one day</b>: Admit ward ศัลยกรรม · <b>NPO</b> · <b>IV fluid</b> balanced crystalloid (เช่น LRS 1,000 ml IV rate 100 ml/hr) · Lab: CBC, BUN/Cr, electrolyte, UA (± urine pregnancy test ในหญิงวัยเจริญพันธุ์), ± coagulation ตามข้อบ่งชี้ · <b>ATB ก่อนผ่าตัด</b>: เช่น ceftriaxone 2 g IV + metronidazole 500 mg IV (หรือ cefoxitin) · <b>Analgesic</b>: morphine 3 mg IV prn for pain (ไม่บดบังการวินิจฉัย) · antiemetic prn · <b>Consent</b> สำหรับ appendectomy · <b>Set OR</b> for (laparoscopic/open) appendectomy · ให้ปัสสาวะก่อนเข้าห้องผ่าตัด<br><b>Continuous</b>: V/S q4h (หรือ q1–2h ถ้าไม่คงที่), record I/O, observe abdominal signs",
   exp:"การให้ยาแก้ปวดก่อนผ่าตัดไม่ทำให้วินิจฉัยพลาด (Cochrane) · ATB ก่อนลงมีดลดแผลติดเชื้อ",rubric:"ได้เต็ม = NPO + IV fluid ระบุชนิด/rate + lab + ATB + analgesic + consent/set OR + V/S, I/O",
   pts:[H("ทั่วไป",20),CR(P("NPO","npo","งดน้ำ")),P("IV fluid ระบุชนิด/rate","lrs","nss","acetar","ml/h","ml/hr","iv fluid"),H("Lab",15),P("CBC, BUN/Cr, electrolyte, UA (± UPT)","cbc","bun","creat","electrolyte","\\bua\\b","pregnan"),H("ยา",35),CR(P("ATB ก่อนผ่าตัด","ceftriaxone","metronidazole","cefoxitin","antibiotic","ยาฆ่าเชื้อ","atb")),P("Analgesic / antiemetic","morphine","แก้ปวด","analges","antiemetic","plasil","ondansetron"),H("เตรียมผ่าตัด/monitor",30),P("Consent + set OR appendectomy","consent","ยินยอม","set or","appendectomy"),P("V/S, I/O, observe abdomen","v/s","vital","สัญญาณชีพ","i/o","observe")]})
 ),
 interp:"วินิจฉัย acute appendicitis และเขียน admission/pre-op order",summary:["admission order: NPO, IV fluid, lab (CBC, BUN/Cr, UA, UPT ในหญิง), ATB ก่อนผ่าตัด, analgesic, consent, set OR","ยาแก้ปวดให้ได้ ไม่บดบังการวินิจฉัย"]}),

/* ===== OSCE 8 ===== */
Co({page:237,sec:"OSCE",orig:"8",topic:"img",sub:"Acute abdomen series",title:"Imaging — plain radiograph series for abdominal pain",imgNote:NOIMG,imgAlt:"ภาพถ่ายรังสีชุดของผู้ป่วยปวดท้อง (ทรวงอกท่ายืน และช่องท้องท่านอน/ท่ายืน)",seen:"คล้าย MDCU66 RoA OSCE 9 (acute abdomen series)",
 stem:`A series of plain radiographs of a patient with abdominal pain is shown.<br>8.1 What is this series called, and which views does it consist of?<br>8.2 Describe the findings.<br>8.3 What is the diagnosis?`,
 gray:"ผู้จดคนที่ 1 (จดเป็นข้อ 7): ข้อ7 ฟิล์ม acute abdomen · 7.1 บอกชื่อฟิล์ม ประกอบด้วยอะไรบ้าง · 7.2 เห็นอะไรบ้าง · 7.3 diagnosis (ไม่แน่ใจแฮะ) · ผู้จดคนที่ 2: 8. X ray ถามว่าเรียกว่าไร acute abdomen series ประกอบด้วยท่าไรบ้าง อ่านได้ไรบ้าง Dx ไร",
 notes:"รวม recall 2 ฉบับ (ผู้จดคนแรกจดเป็นลำดับที่ 7 เพราะลืมสถานีปวดท้อง) · ผู้จดไม่ได้บอกว่าฟิล์มพบอะไร",
 flag:"NOIMG · ไฟล์ไม่บอกสิ่งที่พบ — 8.2–8.3 เฉลยเป็นกรอบการอ่าน + ภาพที่พบบ่อย (pneumoperitoneum, small bowel obstruction)",
 parts:S(
  B("8.1 Name the series and its views.",3,{tags:["img"],key:"acute abdomen series (ใน recall)",
   ans:"<b>Acute abdomen series</b> = <b>CXR upright (PA)</b> + <b>plain abdomen supine</b> + <b>plain abdomen upright</b> (ยืนไม่ได้ → <b>left lateral decubitus</b>)",exp:"CXR upright ดู free air ใต้กระบังลม และโรคปอดที่เลียนแบบปวดท้อง",rubric:"ได้เต็ม = ชื่อชุด + 3 ท่า",
   pts:[P("Acute abdomen series","acute abdomen","abdominal series"),CR(P("CXR upright","cxr","chest","ทรวงอก")),P("Abdomen supine","supine","นอนหงาย"),P("Abdomen upright / left lateral decubitus","upright","erect","ท่ายืน","decubitus")]}),
  B("8.2 Describe the findings.",3,{tags:["img"],
   ans:"อ่านเป็นระบบ: <b>Gas</b> — free air ใต้กระบังลม (pneumoperitoneum), Rigler sign · bowel gas pattern: ขนาดลำไส้ (SB >3 cm, colon >6 cm, cecum >9 cm), valvulae conniventes vs haustra, <b>air-fluid levels (step-ladder)</b>, มีลมใน rectum หรือไม่ · <b>Mass/fluid</b> — soft tissue mass, ascites · <b>Stone/calcification</b> — นิ่วไต/ถุงน้ำดี/appendicolith, pancreatic calcification · <b>Bone</b> · <b>Lung base</b> — pneumonia, effusion",
   exp:"ระบบ 'Gas–Mass–Bone–Stone' ช่วยไม่ให้พลาด",rubric:"ได้เต็ม = อ่าน free air + bowel gas pattern + air-fluid level + ส่วนอื่น",
   pts:[CR(P("Free air ใต้กระบังลม","free air","pneumoperitoneum","ลมใต้กระบังลม","subdiaphragm")),P("Bowel gas pattern / ขนาดลำไส้","dilat","ขยาย","bowel gas","valvulae","haustra"),P("Air-fluid level","air.?fluid","step.?ladder","ระดับน้ำ"),P("Stone / mass / bone / lung base","stone","นิ่ว","calcif","mass","bone","กระดูก")]}),
  B("8.3 What is the diagnosis?",2,{tags:["img"],
   ans:"ขึ้นกับภาพ: free air ใต้กระบังลม → <b>hollow viscus perforation</b> (perforated peptic ulcer มากที่สุด) · ลำไส้เล็กขยาย + step-ladder air-fluid levels + ไม่มีลมใน colon → <b>small bowel obstruction</b> (adhesion มากที่สุดในผู้เคยผ่าตัด) · ลำไส้ใหญ่ขยายรูปเมล็ดกาแฟ → sigmoid volvulus",
   exp:"การวินิจฉัยต้องสอดคล้องกับสิ่งที่อ่านได้",rubric:"ให้คะแนนตามความสอดคล้องกับภาพ",
   pts:[CR(P("Perforation / bowel obstruction ตามภาพ","perforat","ทะลุ","obstruct","อุดตัน","volvulus"))]})
 ),
 interp:"รู้ส่วนประกอบของ acute abdomen series และอ่านเป็นระบบ",summary:["acute abdomen series = CXR upright + abdomen supine + upright/left lateral decubitus","อ่าน Gas–Mass–Bone–Stone","free air → perforation · step-ladder air-fluid levels → SBO"]}),

/* ===== OSCE 9 ===== */
Co({page:237,sec:"OSCE",orig:"9",topic:"path",sub:"Breast cancer staging",title:"Pathology — breast cancer report: TNM and stage",kimg:["os66b_k9a","os66b_k9b"],
 stem:`A pathology report of a mastectomy specimen is given:<br>Modified radical mastectomy, left breast: invasive ductal carcinoma, tumor size 3.5 cm in greatest dimension. Skin and pectoralis muscle are free of tumor. Axillary lymph nodes: metastatic carcinoma in 5 of 18 nodes. No distant metastasis was found on staging investigations.<br>9.1 State the TNM classification.<br>9.2 What is the stage?`,
 gray:"ผู้จดคนที่ 1 (จดเป็นข้อ 8): ข้อ8 ผลพาโถนม [sic] ให้บอก TMN and staging · [ไฟล์มี screenshot ตาราง AJCC Staging for Breast Cancer 2002 (T, N, M) และตาราง stage grouping ข้าง ๆ]",
 notes:"ผู้จดคนแรกจดสถานีนี้เป็นลำดับที่ 8 (เลขเลื่อน — ดูหัวไฟล์) · ข้างเธรดมี screenshot ตาราง AJCC 2002 ของ (p)T, (p)N, M และตาราง stage grouping/anatomic stage (ไฮไลต์เหลือง) → kimg os66b_k9a, os66b_k9b",
 flag:"ค่าในผลพยาธิ (ขนาด 3.5 cm, 5/18 nodes, ข้างซ้าย) Claude แต่ง — recall บอกแค่ให้ผลพยาธิเต้านมแล้วถาม TNM/stage",
 parts:S(
  B("9.1 State the TNM classification.",3,{tags:["path"],
   ans:"<b>pT2</b> (>2 แต่ ≤5 cm) · <b>pN2a</b> (metastasis 4–9 axillary nodes) · <b>M0</b> (cM0) → <b>pT2 N2a M0</b>",
   exp:"T1 ≤2 cm, T2 >2–5 cm, T3 >5 cm, T4 = ติดผนังทรวงอก/ผิวหนัง/inflammatory · pN1 = 1–3 nodes, pN2 = 4–9, pN3 = ≥10 หรือ infraclavicular/supraclavicular",
   rubric:"1 คะแนนต่อ T, N, M",
   pts:[CR(P("pT2","t2")),CR(P("pN2a","n2")),P("M0","m0")]}),
  B("9.2 What is the stage?",2,{tags:["path"],
   ans:"<b>Stage IIIA</b> (T0–3 N2 M0 = IIIA ตาม AJCC anatomic stage grouping)",
   exp:"AJCC 8th (2018) เพิ่ม prognostic stage ที่ใช้ grade, ER, PR, HER2 ร่วม — ข้อสอบระดับนิสิตใช้ anatomic stage · ตาราง screenshot ในไฟล์เป็น AJCC 2002/7th ซึ่ง anatomic grouping ส่วนนี้เหมือนกัน",
   rubric:"ได้เต็ม = IIIA",
   pts:[CR(P("Stage IIIA","iiia","3a","stage iii"))]})
 ),
 interp:"แปลงผลพยาธิเต้านมเป็น TNM และ anatomic stage",summary:["T: ≤2 cm T1, >2–5 T2, >5 T3, ผิวหนัง/ผนังอก T4","pN: 1–3 = N1, 4–9 = N2, ≥10 = N3","T0–3 N2 M0 = IIIA · T4 = IIIB · N3 = IIIC · M1 = IV"]}),

/* ===== OSCE 10 ===== */
Co({page:237,sec:"OSCE",orig:"10",topic:"suture",sub:"Suture material",title:"Suture materials — identify and classify three sutures",imgNote:NOIMG,imgAlt:"ไหมเย็บแผล 3 ชนิดในซองบรรจุ",
 stem:`Three suture materials are shown.<br>10.1 Name each suture.<br>10.2 For each, state whether it is absorbable, natural or synthetic, and monofilament or multifilament.<br>10.3 Give one use of each suture.`,
 gray:"ผู้จดคนที่ 1 (จดเป็นข้อ 9): ข้อ9 ไหมๆ 3 อัน : prolene? , silk ? ,catgut? · 9.1 ชื่อไหม · 9.2 absorbable? Natural vs synthetic? Filament? · 9.3 ใช้ทำอะไร",
 notes:"ผู้จดคนแรกจดสถานีนี้เป็นลำดับที่ 9 (เลขเลื่อน) · ผู้จดใส่เครื่องหมาย ? หลังชื่อไหมทั้ง 3 (ไม่แน่ใจว่าเป็น prolene, silk, catgut)",
 flag:"NOIMG · ชนิดไหมจาก recall ที่ผู้จดไม่แน่ใจ (prolene? silk? catgut?)",
 parts:S(
  B("10.1 Name each suture.",3,{tags:["suture"],key:"prolene? , silk ? , catgut? (ใน recall — ผู้จดไม่แน่ใจ)",
   ans:"<b>Polypropylene (Prolene)</b> · <b>Silk</b> · <b>Catgut</b> (plain หรือ chromic)",exp:"catgut ทำจาก collagen ของลำไส้แกะ/วัว (submucosa)",rubric:"1 คะแนนต่อชื่อ",
   pts:[CR(P("Polypropylene (Prolene)","polypropyl","prolene")),CR(P("Silk","silk")),CR(P("Catgut","catgut","cat gut","chromic","plain gut"))]}),
  B("10.2 Classify each suture.",3,{tags:["suture"],
   ans:"<b>Polypropylene</b>: non-absorbable, synthetic, <b>monofilament</b> · <b>Silk</b>: non-absorbable, natural, <b>braided multifilament</b> · <b>Catgut</b>: <b>absorbable</b> (ย่อยด้วย proteolytic enzyme; plain คงแรง ~7–10 วัน, chromic นานกว่า ~2–3 สัปดาห์), <b>natural</b>, monofilament (twisted)",
   exp:"natural absorbable ถูกย่อยด้วยเอนไซม์ → ปฏิกิริยาเนื้อเยื่อมาก · synthetic absorbable ถูก hydrolysis → ปฏิกิริยาน้อยกว่า",rubric:"1 คะแนนต่อไหมที่ตอบครบ 3 ลักษณะ",
   pts:[P("Polypropylene: non-absorbable synthetic monofilament","monofil","synthetic","สังเคราะห์"),P("Silk: non-absorbable natural braided","braid","multifil","ถัก","natural"),CR(P("Catgut: absorbable natural","absorbable","ละลาย","ดูดซึม"))]}),
  B("10.3 Give one use of each suture.",3,{tags:["suture"],
   ans:"Polypropylene: vascular anastomosis, เย็บผิวหนัง, ยึด mesh ใน hernia repair, ปิด fascia · Silk: ยึดสาย drain/tube กับผิวหนัง, ผูกหลอดเลือด, เย็บผิวหนัง · Catgut: ผูกหลอดเลือดเล็ก/ชั้น subcutaneous, เย็บ mucosa (ช่องปาก), ซ่อม episiotomy (chromic)",
   exp:"catgut ถูกเลิกใช้ในยุโรป แต่ยังพบในไทย",rubric:"1 คะแนนต่อการใช้ที่ถูก",
   pts:[P("Polypropylene: vascular / mesh / skin","vascular","หลอดเลือด","mesh","hernia","skin","ผิวหนัง"),P("Silk: ยึด drain/tube / ผูกหลอดเลือด","drain","tube","ligat","ผูก"),P("Catgut: subcutaneous / mucosa / episiotomy","subcut","ใต้ผิวหนัง","mucosa","episiotomy","ช่องปาก")]})
 ),
 interp:"จำแนกไหมตามการละลาย แหล่งวัสดุ และเส้นใย",summary:["Polypropylene = non-absorbable synthetic monofilament","Silk = non-absorbable natural braided","Catgut = absorbable natural (enzymatic) — plain สั้น chromic นานกว่า"]}),

/* ===== OSCE 11 ===== */
Co({page:237,sec:"OSCE",orig:"11",topic:"inst",sub:"Tube/Catheter",title:"Devices — identify a gastrointestinal tube, its indications and contraindication",imgNote:NOIMG,imgAlt:"สายยางพลาสติกยาว ปลายมีรูด้านข้างหลายรู มีขีดบอกระยะ",
 stem:`A device is shown.<br>11.1 Give its full name.<br>11.2 State its indications.<br>11.3 State a contraindication.`,
 gray:"ข้อ11 ให้ ng · 11.1 บอกชื่อเต็ม · 11.2 indication · 11.3 contraindication · [ตัวแดงในไฟล์: Feeding, irrigation, monitoring bleeding · Basal skull fracture]",
 notes:"ตัวพิมพ์สีแดงข้าง 11.2: <b>Feeding, irrigation, monitoring bleeding</b> · ข้าง 11.3: <b>Basal skull fracture</b>",flag:"NOIMG",
 parts:S(
  B("11.1 Give its full name.",1,{tags:["inst"],key:"ng (ใน recall)",
   ans:"<b>Nasogastric tube (NG tube)</b> — เช่น Levin tube (single lumen) หรือ Salem sump tube (double lumen)",exp:"Salem sump มี air vent ป้องกัน mucosa ถูกดูดติดรู",rubric:"ได้เต็ม = nasogastric tube",
   pts:[CR(P("Nasogastric tube","nasogastric","ng tube","levin","salem"))]}),
  B("11.2 State its indications.",3,{tags:["inst"],key:"Feeding, irrigation, monitoring bleeding (ตัวแดงในไฟล์)",
   ans:"<b>Decompression</b> (bowel obstruction, ileus, gastric outlet obstruction, หลังผ่าตัดช่องท้อง) · <b>Feeding</b> และให้ยา · <b>Gastric lavage/irrigation</b> (สารพิษบางชนิด, ล้างลิ่มเลือดก่อนส่องกล้อง) · <b>Monitoring/diagnosis ของ UGIB</b> · ป้องกันสำลักในผู้ป่วยหมดสติ/ก่อนผ่าตัดฉุกเฉิน · ตรวจ gastric content",
   exp:"ไฟล์ตอบ feeding, irrigation, monitoring bleeding — ถูกทั้งหมด เพิ่ม decompression ซึ่งเป็นข้อบ่งชี้หลักในศัลยกรรม",rubric:"ได้เต็ม ≥3 ข้อบ่งชี้ที่ถูก",
   pts:[G("ข้อบ่งชี้ ≥3",3,P("Decompression","decompress","obstruct","ileus","ระบาย"),P("Feeding / ให้ยา","feed","อาหาร","ให้ยา"),P("Lavage / irrigation","lavage","irrigat","ล้าง"),P("Monitor UGIB","bleed","เลือด","ugib"),P("ป้องกันสำลัก","aspirat","สำลัก"))]}),
  B("11.3 State a contraindication.",2,{tags:["inst"],key:"Basal skull fracture (ตัวแดงในไฟล์)",
   ans:"<b>Basal skull fracture / severe midface (facial) fracture</b> (เสี่ยงสายเข้ากะโหลก → ใส่ทางปาก (OG tube) แทน) · อื่น ๆ: esophageal obstruction/stricture, recent esophageal/gastric surgery, caustic ingestion · relative: esophageal varices, coagulopathy",
   exp:"สงสัย basal skull fracture: raccoon eyes, Battle sign, CSF rhinorrhea/otorrhea",rubric:"ได้เต็ม = basal skull/midface fracture",
   pts:[CR(P("Basal skull fracture / midface fracture","basal skull","skull base","ฐานกะโหลก","midface","facial fracture","กะโหลก"))]})
 ),
 interp:"รู้ข้อบ่งชี้และข้อห้ามของ NG tube",summary:["NG tube: decompression, feeding/ให้ยา, lavage, monitor UGIB, ป้องกันสำลัก","ข้อห้าม: basal skull/midface fracture → ใช้ OG tube · esophageal obstruction, caustic ingestion"]}),

/* ===== OSCE 12 ===== */
Co({page:237,sec:"OSCE",orig:"12",topic:"pe",sub:"Breast",ex:1,title:"Physical examination — palpation of a breast model",
 stem:`Examine the breast model provided. Describe the mass you find and outline the next steps in management.`,
 gray:"ข้อ 12 ให้นมมา บรรยายลักษณะก้อนที่พบ และ management ต่อไป",
 sp:"หุ่นเต้านม (สมมติเป็นหญิง 50 ปี คลำได้ก้อนเอง 1 เดือน) · ก้อนที่ <b>upper outer quadrant เต้านมซ้าย ตำแหน่ง 2 นาฬิกา ห่างหัวนม ~4 cm</b> ขนาด ~2.5 × 2 cm แข็ง ผิวขรุขระ ขอบไม่ชัด เคลื่อนได้น้อย ไม่ติดผิวหนัง ไม่ติดกล้ามเนื้อ ไม่กดเจ็บ · ผิวหนังและหัวนมปกติ · คลำได้ต่อมน้ำเหลืองรักแร้ซ้าย 1 ต่อม ~1 cm เคลื่อนได้",
 flag:"ตำแหน่ง/ขนาด/ลักษณะก้อนและอายุผู้ป่วย Claude แต่ง (recall ไม่บอก)",
 parts:S(
  B("12.1 Examine the breast and describe the mass.",6,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต chaperone เปิดเผยเท่าที่จำเป็น · <b>ดู</b>: ท่านั่งมือข้างลำตัว → ยกแขน → เท้าเอว (เกร็ง pectoralis): ความสมมาตร ผิวหนัง (dimpling, peau d'orange) หัวนม · <b>คลำ</b>: ท่านอนหงาย แขนข้างที่ตรวจไว้ใต้ศีรษะ ใช้ pulp ของ 3 นิ้วกลาง คลำเป็นวงกลมเล็ก ๆ 3 ระดับแรงกด แบบ vertical strip ครอบคลุมทั้งเต้ารวม axillary tail · ข้างปกติก่อน · หัวนม (discharge) · <b>คลำต่อมน้ำเหลือง</b> axilla, supraclavicular, infraclavicular<br><b>บรรยายก้อน</b>: ข้าง + ตำแหน่ง (quadrant/นาฬิกา, ระยะจากหัวนม) · ขนาด · รูปร่าง · ผิว · ขอบ · ความแข็ง · การเคลื่อนที่/ยึดติดผิวหนังและกล้ามเนื้อ (เกร็ง pectoralis) · กดเจ็บ · ต่อมน้ำเหลือง เช่น 'left breast mass at 2 o'clock, 4 cm from nipple, 2.5 × 2 cm, hard, irregular surface, ill-defined border, limited mobility, not fixed to skin or chest wall, non-tender; one mobile left axillary node 1 cm'",
   exp:"ก้อนแข็ง ขอบไม่ชัด เคลื่อนน้อย = ลักษณะสงสัยมะเร็ง",rubric:"ได้เต็ม = ดู 3 ท่า + คลำเทคนิคถูกครอบคลุม + ต่อมน้ำเหลือง + บรรยายก้อน ≥7 ลักษณะ",
   pts:[H("เตรียม/ดู",20),P("แนะนำตัว chaperone","แนะนำตัว","chaperone","ขออนุญาต"),P("ดูหลายท่า: ผิวหนัง หัวนม สมมาตร","ยกแขน","เท้าเอว","raise","inspect","ผิวหนัง","dimpl"),
    H("คลำ",30),P("ท่านอน แขนไว้ใต้ศีรษะ pulp 3 นิ้ว ครอบคลุม + axillary tail","pulp","3 นิ้ว","vertical strip","circular","axillary tail","ใต้ศีรษะ"),CR(P("คลำต่อมน้ำเหลือง axilla / supraclavicular","axill","รักแร้","supraclavic","ต่อมน้ำเหลือง","lymph")),
    H("บรรยายก้อน",50),CR(P("ตำแหน่ง: quadrant/นาฬิกา + ระยะจากหัวนม","quadrant","นาฬิกา","o.?clock","จากหัวนม","upper outer")),P("ขนาด","ขนาด","size","cm","ซม"),P("ความแข็ง ผิว ขอบ","แข็ง","hard","irregular","ขรุขระ","ขอบ","border"),P("การเคลื่อนที่ / ยึดติดผิวหนัง-กล้ามเนื้อ","mobil","เคลื่อน","fixed","ยึดติด","ติดผิว"),P("กดเจ็บ","tender","กดเจ็บ")]}),
  B("12.2 Outline the next steps in management.",4,{tags:["pe"],
   ans:"<b>Triple assessment</b>: (1) clinical (2) <b>imaging</b>: อายุ ≥30–35 ปี → <b>bilateral mammogram + US</b> (อายุน้อย → US ก่อน) (3) <b>tissue diagnosis: core needle biopsy</b> (US-guided) + ER, PR, HER2, Ki-67 · ต่อมน้ำเหลืองที่สงสัย → FNA/core · ยืนยันมะเร็ง → staging ตามระยะ (CXR, LFT, ALP; ระยะสูงหรือมีอาการ → CT/bone scan) → MDT วางแผน (ผ่าตัด breast-conserving + SLNB/ALND หรือ mastectomy, systemic therapy, radiotherapy)",
   exp:"triple assessment ร่วมกันมีความแม่นยำ >99% · FNA อย่างเดียวไม่แยก invasive จาก in situ และไม่ได้ receptor",rubric:"ได้เต็ม = imaging เหมาะกับอายุ + core needle biopsy + receptor + แผน staging/MDT",
   pts:[P("Triple assessment","triple"),P("Mammogram + US","mammo","ultraso","\\bus\\b","แมมโม"),CR(P("Core needle biopsy","core","biopsy","ชิ้นเนื้อ")),P("ER/PR/HER2 + staging/MDT","her2","\\ber\\b","receptor","staging","mdt")]})
 ),
 interp:"ตรวจเต้านมด้วยเทคนิคครบถ้วน บรรยายก้อน และส่ง triple assessment",summary:["ดู 3 ท่า → คลำท่านอนด้วย pulp 3 นิ้ว ครอบคลุมทั้งเต้า + axillary tail + ต่อมน้ำเหลือง","บรรยาย: ตำแหน่ง ขนาด ความแข็ง ผิว ขอบ การเคลื่อนที่/ยึดติด กดเจ็บ","triple assessment: clinical + mammogram/US + core needle biopsy"]}),

/* ===== OSCE 13 ===== */
Co({page:237,sec:"OSCE",orig:"13",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — digital rectal examination in an elderly man",seen:"คล้าย MDCU66 RoA OSCE 3 (DRE บนหุ่น + diagnosis)",
 stem:`A 72-year-old man presents with lower urinary tract symptoms.<br>13.1 Demonstrate a digital rectal examination on the model.<br>13.2 Describe what you palpate.<br>13.3 What is the diagnosis?`,
 gray:"ข้อ 13 DRE คุณผู้ชาย อายุ.... มีอาการ..... · 13.1 แสดงวิธี · 13.2 บรรยายว่าคลำเจออะไร · 13.3 diagnosis",
 sp:"ผู้ป่วยจำลองสำหรับจัดท่า + หุ่น DRE · ผลบนหุ่น: sphincter tone ปกติ · ต่อมลูกหมากโตเล็กน้อย ~2–3 FB · <b>คลำได้ nodule แข็งเหมือนหิน ~1.5 cm ที่ right lobe</b> ผิวขรุขระ median sulcus คลำไม่ชัดด้านขวา ไม่กดเจ็บ · ถุงมือไม่มีเลือด",
 flag:"อายุ/อาการ (recall เว้นว่าง '....') และผลตรวจบนหุ่น Claude แต่ง — เลือกหุ่นแบบ hard nodule",
 parts:S(
  B("13.1 Demonstrate the digital rectal examination.",5,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว อธิบาย ขออนุญาต chaperone · <b>จัดท่า left lateral (Sims) งอเข่าชิดอก</b> · ถุงมือ + หล่อลื่น<br><b>ตรวจ</b>: ดูรอบทวาร → บอกก่อนสอด ค่อย ๆ สอดนิ้วชี้ → <b>sphincter tone</b> → คลำผนัง rectum รอบทิศ → คลำต่อมลูกหมากทั้งสอง lobe + median sulcus<br><b>หลังตรวจ</b>: ดูถุงมือ (เลือด มูก) · ทำความสะอาด ขอบคุณ",
   exp:"สังเกตสีหน้าผู้ป่วยตลอด · ไม่ตรวจซ้ำแรงในรายสงสัย acute prostatitis",rubric:"ได้เต็ม = ท่าถูก + ลำดับครบ + ดูถุงมือ",
   pts:[H("เตรียม",25),P("แนะนำตัว ขออนุญาต chaperone","แนะนำตัว","ขออนุญาต","consent","chaperone"),CR(P("จัดท่า left lateral/Sims งอเข่า","left lateral","sims","ตะแคงซ้าย","knee.?chest","lithotomy","งอเข่า")),H("ตรวจ",55),P("ดูรอบทวาร","perianal","รอบทวาร","inspect"),P("Sphincter tone","sphincter","tone"),P("คลำ rectum รอบทิศ + ต่อมลูกหมาก","รอบทิศ","circumfer","prostate","ต่อมลูกหมาก"),H("หลังตรวจ",20),P("ดูถุงมือ","ถุงมือ","glove","เลือด","blood")]}),
  B("13.2 Describe what you palpate.",3,{tags:["pe"],
   ans:"Prostate โตเล็กน้อย ~2–3 FB · มี <b>hard (stony) nodule</b> ~1.5 cm ที่ right lobe · ผิว<b>ขรุขระ</b> · median sulcus คลำไม่ชัดด้านขวา · ไม่กดเจ็บ · ไม่ยึดติดผนัง rectum (บอกการยึดติด/ลามไป seminal vesicle) · sphincter tone ปกติ · ถุงมือไม่มีเลือด",
   exp:"บรรยายครบ: ขนาด ผิว ความแข็ง nodule (ตำแหน่ง/ขนาด) sulcus กดเจ็บ การยึดติด",rubric:"ได้เต็ม = hard nodule + ตำแหน่ง lobe + ผิว + sulcus + กดเจ็บ",
   pts:[P("ขนาดต่อม","fb","finger","ขนาด","size"),CR(P("Hard/stony nodule + ตำแหน่ง lobe","nodul","hard","stony","แข็ง","lobe")),P("ผิวขรุขระ / median sulcus","ขรุขระ","irregular","sulcus"),P("กดเจ็บ / การยึดติด","tender","กดเจ็บ","fixed","ยึดติด")]}),
  B("13.3 What is the diagnosis?",2,{tags:["pe"],
   ans:"<b>Suspected carcinoma of the prostate</b> (ร่วมกับ LUTS ซึ่งอาจมี BPH ร่วม) → ส่ง <b>PSA</b>, <b>MRI prostate (mpMRI)</b> และ <b>prostate biopsy</b> (TRUS/transperineal) เพื่อยืนยัน + Gleason/ISUP grade · ระยะลุกลาม → bone scan/CT",
   exp:"hard nodule บน DRE เป็นข้อบ่งชี้ biopsy แม้ PSA ปกติ",rubric:"ได้เต็ม = CA prostate + แผนยืนยัน (PSA, MRI, biopsy)",
   pts:[CR(P("Carcinoma of prostate","carcinoma","cancer","มะเร็ง","ca prostate","malignan")),P("PSA / MRI / biopsy","psa","mri","biopsy","ชิ้นเนื้อ")]})
 ),
 interp:"DRE ที่ถูกเทคนิค + แยก hard nodule (มะเร็ง) จาก BPH",summary:["DRE: left lateral งอเข่า → รอบทวาร → sphincter → rectum รอบทิศ → prostate → ดูถุงมือ","hard stony nodule = สงสัย CA prostate → PSA, mpMRI, biopsy","BPH = โตเรียบ rubbery ไม่มี nodule"]}),

/* ===== PowerPoint 1 ===== */
Co({page:237,sec:"PowerPoint",orig:"PPT 1",topic:"spot",sub:"Anorectal",title:"Spot — perianal lesion",imgNote:NOIMG,imgAlt:"ภาพบริเวณทวารหนักขณะแหวก anal verge",seen:"คล้าย MDCU66 RoA PPT 6 (ปวดขณะถ่าย + เลือดออก มีรูป)",
 stem:`A photograph of the anal region is shown.<br>1.1 What is the diagnosis?<br>1.2 How would you treat this condition?`,
 gray:"[Ppt] ให้รูป Chronic anal fissure · 1. Dx · 2. Tx.",
 notes:"ส่วน PowerPoint ของเธรด (ผู้จดโพสต์ว่า Ppt) — ไม่มีเลขข้อ ไล่ตามลำดับ",flag:"NOIMG · ไม่มีเลขในไฟล์ → PPT 1 ตามลำดับ",
 parts:S(
  B("1.1 What is the diagnosis?",2,{tags:["spot"],key:"Chronic anal fissure (ใน recall)",
   ans:"<b>Chronic anal fissure</b> — แผลรูปรีที่ <b>posterior midline</b> ของ anoderm ขอบแผลหนานูน เห็น<b>ใยกล้ามเนื้อ internal sphincter</b> ที่ก้นแผล มี <b>sentinel skin tag</b> ด้านนอก และ <b>hypertrophied anal papilla</b> ด้านใน (เป็น >6–8 สัปดาห์)",
   exp:"fissure ที่ไม่อยู่ midline/หลายแผล/ไม่เจ็บ → นึกถึง Crohn's, TB, HIV, syphilis, CA",rubric:"ได้เต็ม = chronic anal fissure + ลักษณะที่บอก chronic",
   pts:[CR(P("Anal fissure","fissure","แผลปริ")),P("Chronic: sentinel tag / hypertrophied papilla / เห็น sphincter","chronic","เรื้อรัง","sentinel","papilla","sphincter")]}),
  B("1.2 How would you treat this condition?",3,{tags:["spot"],
   ans:"เริ่ม <b>conservative</b>: fiber/psyllium, น้ำมาก, stool softener, <b>warm sitz bath</b> · <b>chemical sphincterotomy</b>: <b>2% diltiazem</b> หรือ <b>0.2–0.4% GTN</b> ทาวันละ 2 ครั้ง 6–8 สัปดาห์ หรือ <b>botulinum toxin</b> ฉีด · chronic ที่ไม่ตอบสนอง → <b>lateral internal sphincterotomy (LIS)</b> = มาตรฐาน (หายได้ >90%; เสี่ยง incontinence ต่อลมเล็กน้อย) ± ตัด sentinel tag/papilla",
   exp:"ASCRS 2023: chronic fissure ให้ topical/botox ก่อนได้ แต่ LIS มีอัตราหายสูงสุด",rubric:"ได้เต็ม = conservative + topical/botox + LIS",
   pts:[P("Fiber / sitz bath / softener","fiber","กากใย","sitz","นั่งแช่","softener"),P("Diltiazem / GTN / botox","diltiazem","gtn","nitroglycerin","botulinum","botox"),CR(P("Lateral internal sphincterotomy","sphincterotomy","\\blis\\b"))]})
 ),
 interp:"spot chronic anal fissure และขั้นการรักษา",summary:["chronic anal fissure: posterior midline + sentinel tag + hypertrophied papilla + เห็น internal sphincter","รักษา: fiber/sitz bath → diltiazem/GTN/botox → LIS"]}),

/* ===== PowerPoint 2 ===== */
Co({page:237,sec:"PowerPoint",orig:"PPT 2",topic:"spot",sub:"Pediatric surgery",title:"Spot — newborn perineum",imgNote:NOIMG,imgAlt:"ภาพบริเวณฝีเย็บและก้นของทารกแรกเกิด",
 stem:`A photograph of a newborn's perineum is shown.<br>2.1 What is the diagnosis?<br>2.2 Outline the management.<br>2.3 What other things must be considered in this patient?`,
 gray:"Imperforate anus · 1. Dx · 2. Mx. · 3. Things to considered · [ลายมือชมพู: VACTERAL, associate anomalies]",
 notes:"ลายมือสีชมพูในไฟล์ข้าง 'Things to considered': <b>VACTERAL</b> (สะกดตามไฟล์ = VACTERL) และ <b>associate anomalies</b>",
 flag:"NOIMG · ไม่มีเลขในไฟล์ → PPT 2 ตามลำดับ",
 parts:S(
  B("2.1 What is the diagnosis?",2,{tags:["spot"],key:"Imperforate anus (ใน recall)",
   ans:"<b>Imperforate anus (anorectal malformation)</b> — ไม่มีรูทวารที่ตำแหน่งปกติ · ระบุชนิดตามที่เห็น: มี perineal fistula (มี meconium ออกที่ฝีเย็บ/raphe) = low · ไม่มี fistula ที่ผิว = อาจเป็น high (rectourethral/rectovesical fistula ในชาย — meconium ในปัสสาวะ) · หญิง: vestibular fistula, cloaca",
   exp:"ชนิดของ fistula กำหนดว่าทำ anoplasty ได้เลยหรือต้อง colostomy ก่อน",rubric:"ได้เต็ม = imperforate anus/ARM",
   pts:[CR(P("Imperforate anus / anorectal malformation","imperforate","anorectal malform","\\barm\\b","ไม่มีรูทวาร"))]}),
  B("2.2 Outline the management.",3,{tags:["spot"],
   ans:"<b>เบื้องต้น</b>: NPO, OG tube decompression, IV fluid + glucose, IV ATB · <b>รอสังเกต 16–24 ชม.</b> ให้ meconium ออกมาทาง fistula (ตรวจฝีเย็บและปัสสาวะ) ± <b>cross-table lateral prone X-ray</b>/invertogram ดูระยะ rectal pouch กับผิว · <b>Perineal (cutaneous) fistula / pouch <1 cm</b> → <b>anoplasty (minimal PSARP)</b> ในช่วงแรกเกิด · <b>ไม่มี fistula ที่ผิว/rectourethral/ระยะ >1 cm/มีความพิการร่วมหนัก</b> → <b>diverting colostomy</b> ก่อน แล้วทำ <b>PSARP</b> ภายหลัง (~1–3 เดือน) แล้วปิด colostomy · หลังผ่าตัด anal dilatation",
   exp:"Peña: ตัดสินใจหลัง 24 ชม. เพราะลมต้องใช้เวลาไหลลงไปถึง distal rectum",rubric:"ได้เต็ม = การดูแลเบื้องต้น + รอ/ประเมิน fistula + low → anoplasty / high → colostomy + PSARP",
   pts:[P("NPO / OG decompression / IV fluid","npo","og","decompress","iv fluid","สารน้ำ"),P("รอ 16–24 ชม. ดู meconium / cross-table lateral","24","16","cross.?table","invertogram","meconium","ขี้เทา"),CR(P("Low/perineal fistula → anoplasty","anoplasty","perineal","psarp")),CR(P("High/no fistula → colostomy ก่อน แล้ว PSARP","colostomy","ทวารเทียม","stoma"))]}),
  B("2.3 What other things must be considered?",3,{tags:["spot"],key:"VACTERAL, associate anomalies (ลายมือในไฟล์)",
   ans:"<b>Associated anomalies — VACTERL association</b>: <b>V</b>ertebral (X-ray/US กระดูกสันหลัง, tethered cord), <b>A</b>norectal, <b>C</b>ardiac (<b>echocardiogram</b>), <b>T</b>racheo-<b>E</b>sophageal fistula/atresia (ใส่ OG tube ดูว่าผ่านลงกระเพาะหรือไม่), <b>R</b>enal (<b>US ไต</b>, VCUG ตามข้อบ่งชี้), <b>L</b>imb (radial ray) · อื่น ๆ: Down syndrome, sacral ratio (พยากรณ์การกลั้นอุจจาระ)",
   exp:"ความพิการร่วมพบ ~50–60% · cardiac และ urologic เป็นสาเหตุ morbidity สำคัญ",rubric:"ได้เต็ม = VACTERL + บอกการตรวจที่ใช้หา (echo, renal US, spine)",
   pts:[CR(P("VACTERL association","vacterl","vacteral","vater","associat")),P("Echo / renal US / spine imaging / OG tube","echo","renal","ไต","spine","กระดูกสันหลัง","og tube","esophag")]})
 ),
 interp:"spot imperforate anus: แยก low/high เพื่อเลือกผ่าตัด และหา VACTERL",summary:["imperforate anus: รอ 16–24 ชม. ดู fistula + cross-table lateral","low (perineal fistula) → anoplasty · high/no fistula → colostomy แล้ว PSARP","หา VACTERL: echo, US ไต, spine, ใส่ OG tube, แขนขา"]}),

/* ===== PowerPoint 3 ===== */
Co({page:237,sec:"PowerPoint",orig:"PPT 3",topic:"spot",sub:"Instrument/Device",title:"Spot — surgical drain with a bulb",imgNote:NOIMG,imgAlt:"ภาพสายระบายซิลิโคนต่อกับกระเปาะรูปไข่",
 stem:`A photograph of a surgical drain is shown.<br>3.1 Explain its mechanism of action.<br>3.2 In which operations is it used?`,
 gray:"ให้ภาพ jackson-pratt drainage · 1. Mechanism · 2. What s/p to use",
 notes:"ในไฟล์มีขีดเส้นใต้สีม่วงและไฮไลต์สีฟ้าที่ '1. Mechanism' (เน้น ไม่ใช่ขีดฆ่า)",flag:"NOIMG · ไม่มีเลขในไฟล์ → PPT 3 ตามลำดับ",
 parts:S(
  B("3.1 Explain its mechanism of action.",3,{tags:["spot"],key:"jackson-pratt drainage (ชื่อใน recall)",
   ans:"<b>Jackson-Pratt (JP) drain</b> = <b>closed, active suction drain</b>: บีบกระเปาะ (bulb) ไล่อากาศออกแล้วปิดจุก → กระเปาะพยายามคืนรูป เกิด<b>แรงดูดความดันลบต่ำ ๆ</b> ดึงของเหลวผ่านท่อซิลิโคนที่มีรูด้านข้างจำนวนมาก · ระบบปิดลดการติดเชื้อย้อนกลับ ต้องเทและบีบกระเปาะใหม่เมื่อเต็ม ~1/2–2/3 และบันทึกปริมาณ",
   exp:"เทียบ Penrose = passive open drain · Redivac/Hemovac = closed suction แรงดูดสูงกว่า",rubric:"ได้เต็ม = closed + active suction จากกระเปาะความดันลบ",
   pts:[P("Jackson-Pratt drain","jackson","\\bjp\\b"),CR(P("Closed active suction (negative pressure จากกระเปาะ)","suction","ดูด","negative pressure","ความดันลบ","active")),P("ระบบปิด / บีบกระเปาะ","closed","ระบบปิด","bulb","กระเปาะ","บีบ")]}),
  B("3.2 In which operations is it used?",2,{tags:["spot"],
   ans:"ระบายเลือด/น้ำเหลือง/สารคัดหลั่งใต้ flap หรือในโพรง: <b>mastectomy/axillary dissection</b> (กัน seroma), <b>thyroidectomy/neck dissection</b>, <b>ผ่าตัดช่องท้อง</b> เช่น hepatobiliary, pancreatic (ดู bile/pancreatic leak), colorectal, flap ใหญ่ทาง plastic, ผ่าตัดกระดูก",
   exp:"ถอดเมื่อปริมาณ <25–50 ml/วัน (ขึ้นกับตำแหน่ง)",rubric:"1 คะแนนต่อการผ่าตัดที่เหมาะสม (≥2)",
   pts:[G("การผ่าตัด ≥2",2,P("Mastectomy / axillary dissection","mastectomy","axill","เต้านม"),P("Thyroidectomy / neck dissection","thyroid","neck","คอ"),P("Abdominal / hepatobiliary / pancreatic","abdomin","ช่องท้อง","hepat","pancrea","biliary","whipple"),P("Flap / plastic / orthopedic","flap","plastic","ortho"))]})
 ),
 interp:"รู้กลไก closed suction drain และการใช้",summary:["JP drain = closed active suction: บีบกระเปาะ → ความดันลบดูดของเหลว","ใช้: mastectomy/axillary dissection, thyroid/neck, ผ่าตัดช่องท้อง (HPB), flap"]}),

/* ===== PowerPoint 4 ===== */
Co({page:237,sec:"PowerPoint",orig:"PPT 4",topic:"spot",sub:"Anorectal",title:"Spot — anal lesions: management",imgNote:NOIMG,imgAlt:"ภาพบริเวณทวารหนักขณะแหวก มีรอยโรคมากกว่าหนึ่งชนิด",
 stem:`A photograph of the anal region showing more than one lesion is shown. Outline the management.`,
 gray:"acute anal fissure at posterior midline กับ internal hemorrhoid รักษา / management",
 notes:"recall จากผู้จดอีกคนในเธรด · อาจเป็นสไลด์เดียวกับ PPT 1 ที่จดต่างกัน แต่เนื้อหาต่าง (acute + hemorrhoid vs chronic) จึงแยกสถานี",
 flag:"NOIMG · ไม่มีเลขในไฟล์ → PPT 4 ตามลำดับ · คำถามย่อยแยก dx/management Claude แต่ง (recall บอก 'รักษา / management')",
 parts:S(
  B("4.1 What are the diagnoses?",2,{tags:["spot"],flag:"ข้อย่อยนี้ Claude เติม",key:"acute anal fissure at posterior midline กับ internal hemorrhoid (ใน recall)",
   ans:"<b>Acute anal fissure at the posterior midline</b> (แผลตื้น ขอบเรียบ ไม่มี sentinel tag) ร่วมกับ <b>internal hemorrhoid</b> (ระบุ grade ตามการยื่น: I ไม่ยื่น, II ยื่นแล้วกลับเอง, III ต้องดันกลับ, IV ดันกลับไม่ได้)",
   exp:"ผู้ป่วยมักมีทั้งสองภาวะจากท้องผูก/เบ่งถ่าย",rubric:"ได้เต็ม = acute fissure + internal hemorrhoid",
   pts:[CR(P("Acute anal fissure","fissure","แผลปริ")),CR(P("Internal hemorrhoid","hemorrhoid","haemorrhoid","ริดสีดวง"))]}),
  B("4.2 Outline the management.",4,{tags:["spot"],
   ans:"<b>รักษาร่วมกันด้วย conservative ก่อน</b>: high-fiber diet/psyllium, น้ำ 1.5–2 ลิตร/วัน, stool softener, หลีกเลี่ยงเบ่งและนั่งถ่ายนาน, <b>warm sitz bath</b> · acute fissure: <b>topical diltiazem 2% / GTN 0.2–0.4%</b> ± ยาชาเฉพาะที่ 6–8 สัปดาห์ (ส่วนใหญ่หาย) · hemorrhoid: flavonoids (MPFF) ลดอาการ · <b>ไม่ทำ rubber band ligation/hemorrhoidectomy ขณะ fissure ยังเจ็บมาก</b> · ถ้า fissure เรื้อรังไม่หาย → LIS · hemorrhoid grade I–II ที่ไม่ดีขึ้น → rubber band ligation · grade III–IV/มีอาการมาก → hemorrhoidectomy (อาจทำพร้อม LIS โดยผู้เชี่ยวชาญ)",
   exp:"acute fissure ~50% หายด้วย conservative อย่างเดียว · ไม่ควรทำ anal stretch (incontinence)",rubric:"ได้เต็ม = conservative + topical sphincter relaxant + แผนสำหรับ hemorrhoid ตาม grade",
   pts:[CR(P("Fiber / น้ำ / softener / sitz bath","fiber","กากใย","sitz","นั่งแช่","softener")),P("Topical diltiazem / GTN","diltiazem","gtn","nitroglycerin"),P("Hemorrhoid: flavonoid / RBL ตาม grade","flavonoid","mpff","daflon","rubber band","rbl","grade"),P("Refractory: LIS / hemorrhoidectomy","sphincterotomy","\\blis\\b","hemorrhoidectomy","haemorrhoidectomy")]})
 ),
 interp:"การรักษาร่วม acute anal fissure + internal hemorrhoid",summary:["เริ่ม conservative: fiber, น้ำ, softener, sitz bath","acute fissure: diltiazem/GTN · hemorrhoid: flavonoid → RBL (I–II) → hemorrhoidectomy (III–IV)","ไม่รัดยาง/ผ่าตัดริดสีดวงขณะ fissure ยังเจ็บ"]}),

);
})();
