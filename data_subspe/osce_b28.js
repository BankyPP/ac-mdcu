(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "73D OSCE" → MDCU73 RoD (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO73DQ = 73D_OSCE_-AC_Sx_OSCESEQ_rotate_D.pdf (2 หน้า จดเป็นหัวข้อ) · OSCE 8 สถานี · SEQ 1 ข้อ → sec "Short Answers"
   ไม่มีไฟล์เฉลย — เฉลยโดย Claude ทั้งหมด · รูปในโจทย์ os73d_* */
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
const KF="ไม่มีไฟล์เฉลย: ";
const Co=o=>Object.assign({set:"MDCU73",ro:"RoD",file:"SO73DQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Sterile gloving and wet dressing",
 stem:`The examiner is observing.<br>1. Put on sterile gloves.<br>2. Perform a wet dressing of the wound on the model.`,
 gray:"1. ใส่ถุงมือ sterile + wet dressing",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Sterile gloving.",3,{tags:["proc"],ans:"ล้างมือ · มือเปล่าแตะได้เฉพาะด้านในของ cuff ข้างแรก · มือที่ใส่แล้วสอดใต้ cuff ข้างที่สอง · มืออยู่สูงกว่าเอว",rubric:"1/ประเด็น",pts:[P("Hand hygiene","hand","ล้างมือ"),CR(P("Touch only inside of first glove","inside","inner","ด้านใน")),P("Hands above waist","waist","เอว")]}),
  B("1.2 Wet dressing.",6,{tags:["proc"],ans:"แนะนำตัว อธิบาย · เตรียม set ทำแผล NSS gauze · ถอดผ้าปิดแผลเก่าด้วยถุงมือสะอาด/forceps · ประเมินแผล (ขนาด, slough, granulation, หนอง, กลิ่น) · <b>เช็ดผิวรอบแผลจากในออกนอก</b> ด้วย alcohol/povidone (ไม่ลงแผล) · ล้างแผลด้วย <b>NSS</b> · <b>ชุบ gauze ด้วย NSS บิดหมาด ๆ แล้ว pack ลงแผลหลวม ๆ</b> ให้สัมผัสพื้นแผล · ปิด dry gauze ทับ · ทิ้งขยะติดเชื้อ",rubric:"1/ประเด็น",pts:[P("Explain and prepare set","explain","set","อธิบาย"),P("Remove old dressing and assess wound","assess","remove","ประเมิน"),CR(P("Clean surrounding skin inside out","inside out","จากใน","surround")),P("Irrigate with NSS","nss","saline"),CR(P("Moist gauze, wrung, packed loosely","moist","wet","หมาด","pack")),P("Cover with dry gauze","dry gauze","cover","ปิด")]})
 ),
 interp:"Wet dressing",
 summary:["Clean skin inside to outside","Moist (not soaking) NSS gauze packed loosely","Cover with dry gauze"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"hx",sub:"Claudication/limb ischemia",ex:1,title:"History, examination and diagnosis — leg pain for 3 months",
 stem:`A simulated patient has leg pain for 3 months.<br>1. Take a history.<br>2. Perform the relevant physical examination.<br>3. Give the diagnosis.`,
 gray:"2. 2.1 ซักประวัติปวดขามา 3 เดือน 2.2 ตรวจร่างกาย 2.3 diagnosis",
 sp:"ชาย 65 ปี สูบบุหรี่ เบาหวาน ปวดน่องขวาเวลาเดินประมาณ 200 เมตร ต้องหยุดพัก 2–3 นาทีจึงหาย เป็นซ้ำแบบเดิมทุกครั้ง ไม่ปวดตอนพัก ไม่มีแผล",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์ไม่บอกคำวินิจฉัย → ตัวอย่าง SP = intermittent claudication (PAD) · ข้อคล้ายกับ Gen Sx 73B เลข 73",
 opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("2.1 History.",6,{tags:["hx"],ans:"ตำแหน่งปวด (buttock/thigh/calf) · <b>ปวดเวลาเดิน ระยะทางคงที่ (claudication distance)</b> หายเมื่อพัก · <b>rest pain</b> ตอนกลางคืน ห้อยขาแล้วดีขึ้น · แผล/เนื้อตาย · erectile dysfunction (Leriche) · <b>risk factors: บุหรี่, DM, HT, DLP, CAD/stroke</b> · แยก <b>neurogenic claudication</b> (spinal stenosis: ดีขึ้นเมื่อก้ม/นั่ง) และ venous",rubric:"1/ประเด็น",pts:[CR(P("Pain on walking, relieved by rest, distance","walk","distance","rest","เดิน","พัก")),CR(P("Rest pain or ulcer","rest pain","ulcer","แผล","กลางคืน")),P("Site of pain","calf","thigh","buttock","น่อง"),CR(P("Atherosclerotic risk factors","smok","diabet","บุหรี่","เบาหวาน","risk")),P("Exclude spinal stenosis","spinal","neurogenic","stenosis")]}),
  B("2.2 Examination.",6,{tags:["pe"],ans:"Inspection: ขนร่วง ผิวมัน เล็บหนา แผลที่ปลายนิ้ว/pressure point · <b>capillary refill</b>, อุณหภูมิ · <b>คลำชีพจร femoral, popliteal, posterior tibial, dorsalis pedis</b> ทั้งสองข้าง + ฟัง bruit · <b>Buerger test</b> (pallor on elevation, rubor on dependency) · <b>ABI</b>",rubric:"1/ประเด็น",pts:[P("Trophic skin changes","hair","shiny","trophic","ขน"),CR(P("Palpate all pulses bilaterally","pulse","femoral","popliteal","dorsalis","ชีพจร")),P("Capillary refill and temperature","capillary","temperature","อุณหภูมิ"),P("Buerger test","buerger"),CR(P("ABI","abi","ankle brachial"))]}),
  B("2.3 Diagnosis.",2,{tags:["hx"],ans:"<b>Peripheral arterial disease with intermittent claudication</b> (Fontaine IIb / Rutherford 2–3) ระดับ femoropopliteal",rubric:"ได้",pts:[CR(P("PAD with intermittent claudication","claudication","pad","peripheral arter"))]})
 ),
 interp:"Claudication",
 summary:["Claudication: reproducible exertional pain relieved by rest","ABI <0.9 diagnostic","Rx: stop smoking, exercise, antiplatelet, statin"]}),

/* ===== OSCE 3 ===== */
Co({page:1,orig:"3",topic:"spot",sub:"Local anesthesia",img:["os73d_3b"],title:"Lidocaine with adrenaline and Hemoclip",
 stem:`Object A is a vial of 1% lidocaine with adrenaline. Object B is shown in the figure.<br>1. What are A and B?<br>2. What is the maximum dose of A for a 50-kg patient?<br>3. What precautions apply to A?`,
 gray:"3. ให้ A ขวดยาชามา A (xylocaine with adrenaline) B (รูปข้างล่าง) — 1. A คืออะไร B คืออะไร 2.1 max dose ของ A ในคน 50 kg 2.2 ข้อควรระวังของ A",
 notes:"ไม่มีไฟล์เฉลย · รูป B ในไฟล์เป็นหน้าเว็บ Hemoclip metal ligation clips (ผู้จดแคปมาประกอบ) · ไฟล์ไม่ระบุความเข้มข้น → ใช้ 1% · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘ห้ามใช้ที่ end-artery … ยังเป็นคำตอบมาตรฐาน’ → แก้เป็น ระวัง/ตำราเดิมห้าม + ใช้ได้ที่นิ้ว/จมูก/หูถ้าไม่มี vascular compromise ตาม AAFP 2017 (Laceration Repair: A Practical Approach, Am Fam Physician 2017;95:628 — epinephrine ≤1:100,000 ปลอดภัยในนิ้วถ้าไม่มี vascular compromise; 1:200,000 ที่จมูกและหู; peripheral vascular compromise = ข้อห้าม)",
 opinion:"ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): Adrenaline ในนิ้ว/จมูก/หูไม่ใช่ข้อห้ามแล้ว (AAFP 2017) — ข้อห้ามจริงคือ peripheral vascular compromise; องคชาตยังนิยมเลี่ยง (ข้อมูลน้อย) · ถ้าข้อสอบถาม precaution ให้ตอบทั้งตำราเดิมและแนวทางปัจจุบัน · ความมั่นใจสูง",
 parts:S(
  B("3.1 Identify A and B.",2,{tags:["spot"],ans:"A = <b>Lidocaine (Xylocaine) with adrenaline (epinephrine 1:100,000–200,000)</b> — local anesthetic · B = <b>Hemoclip (metal ligation clips)</b> ใช้ผูก/หนีบหลอดเลือดหรือท่อขนาดเล็ก (เช่น cystic duct/artery)",rubric:"1/ข้อ",pts:[CR(P("Lidocaine with adrenaline","lidocaine","xylocaine")),CR(P("Metal ligation clips","clip","hemoclip","ligat"))]}),
  B("3.2 Maximum dose.",3,{tags:["spot"],ans:"Lidocaine with adrenaline <b>7 mg/kg</b> → 50 × 7 = <b>350 mg</b> = 1% (10 mg/mL) <b>35 mL</b> · (ไม่มี adrenaline 4.5 mg/kg = 225 mg)",rubric:"ได้",pts:[CR(P("7 mg/kg","7 mg")),CR(P("350 mg or 35 mL of 1%","350","35 ml","35"))]}),
  B("3.3 Precautions.",4,{tags:["spot"],ans:"<b>ระวังการใช้ที่ end-artery</b>: นิ้วมือ นิ้วเท้า องคชาต ปลายจมูก ใบหู — ตำราเดิมห้าม แต่ AAFP 2017: ใช้ที่นิ้ว (≤1:100,000) จมูก หู (1:200,000) ได้อย่างปลอดภัยถ้า<b>ไม่มี peripheral vascular compromise</b> (ข้อห้ามจริง = PVD/vascular compromise; องคชาตยังนิยมเลี่ยง) — ตอบทั้งสองแนวได้คะแนน · <b>aspirate ก่อนฉีด</b> กัน intravascular · ระวังใน <b>โรคหัวใจ/arrhythmia, HT, thyrotoxicosis</b>, pheochromocytoma · สังเกตอาการ <b>LAST</b>: ชารอบปาก ลิ้นชา หูอื้อ ชัก arrhythmia → หยุดยา ABC, <b>lipid emulsion 20%</b>",rubric:"1/ประเด็น",pts:[CR(P("Avoid end-artery sites","end artery","finger","penis","นิ้ว","องคชาต")),P("Aspirate before injecting","aspirat"),P("Caution in cardiac disease, hypertension","cardiac","heart","arrhythm","หัวใจ"),CR(P("Recognize LAST and give lipid emulsion","toxicity","last","lipid","perioral","ชัก"))]})
 ),
 interp:"Local anesthetic",
 summary:["Lidocaine 4.5 mg/kg plain · 7 mg/kg with adrenaline","1% = 10 mg/mL","Adrenaline at end-artery sites: old teaching avoid; AAFP 2017 OK in digits/nose/ears unless vascular compromise","LAST → intralipid 20%"]}),

/* ===== OSCE 4 ===== */
Co({page:2,orig:"4",topic:"suture",sub:"Suture material",img:["os73d_4"],title:"Suture selection — radial artery, vein ligation, subcutaneous tissue, skin",
 stem:`A patient with a forearm injury needs: repair of the radial artery, ligation of a vein, subcutaneous closure and skin closure. Only silk is labelled; the other packets (polypropylene, Vicryl, nylon) are unlabelled.<br>1. Choose the suture for each step.<br>2. Which of them is absorbable?`,
 gray:"4. ด้าย (ตรง ac) // Silk ให้มาแค่ไหม ไม่มีกล่อง นอกนั้นเป็นกล่องปิดชื่อ — 6. ผู้ป่วยได้รับอุบัติเหตุจำเป็นต้องเย็บ radial artery, ผูก vein, เย็บ subcu, เย็บ skin ต้องใช้ไหมแบบใดตามลำดับ และบอกด้วยว่าไหมที่ตอบมีชื่อการค้า เส้นใย การ absorb ด้วย // ให้ช้อย A–E เป็นไหมจริงปิดชื่อ (ตอบ prolene, silk, vicryl, nylon)",
 notes:"ไม่มีไฟล์เฉลย · ผู้จดให้คำตอบไว้: prolene, silk, vicryl, nylon · รูปในไฟล์เป็นภาพข้อความโจทย์ AC เดิม",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Suture for each step.",8,{tags:["suture"],ans:"<b>Radial artery</b>: <b>Prolene (polypropylene) 6-0/7-0</b> — non-absorbable monofilament · <b>Ligate vein</b>: <b>Silk 3-0</b> — non-absorbable braided natural · <b>Subcutaneous</b>: <b>Vicryl (polyglactin 910) 3-0</b> — absorbable braided synthetic · <b>Skin</b>: <b>Nylon (Ethilon/Dermalon) 4-0</b> — non-absorbable monofilament",rubric:"2/ข้อ",pts:[CR(P("Artery: Prolene","prolene","polypropylene")),CR(P("Vein ligation: silk","silk")),CR(P("Subcutaneous: Vicryl","vicryl","polyglactin")),CR(P("Skin: nylon","nylon"))]}),
  B("4.2 Absorbable.",2,{tags:["suture"],ans:"<b>Vicryl</b> เท่านั้นที่ absorbable (สลายใน ~56–70 วัน, คงแรงดึง 50% ที่ ~3 สัปดาห์) · silk ถือเป็น non-absorbable (สลายช้ามาก)",rubric:"ได้",pts:[CR(P("Vicryl","vicryl"))]})
 ),
 interp:"Suture selection",
 summary:["Vascular: polypropylene monofilament","Ligation: silk","Subcutaneous: Vicryl","Skin: nylon"]}),

/* ===== OSCE 5 ===== */
Co({page:2,orig:"5",topic:"pe",sub:"Head & neck",ex:1,title:"Neck mass — examination and investigations",
 stem:`A patient has a neck mass. Thyroid function is normal and no lymph nodes are palpable.<br>1. Examine the neck mass.<br>2. Name two investigations.`,
 gray:"5. ผู้ป่วยมีก้อนที่คอ thyroid function test ปกติ lymph node negative (ต้องตรวจอยู่ดี) 5.1 ตรวจร่างกาย neck mass 5.2 investigation 2 ข้อ",
 notes:"ไม่มีไฟล์เฉลย · ผู้จดย้ำว่าต้องตรวจต่อมน้ำเหลืองด้วยแม้โจทย์บอกว่าปกติ",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Examination.",7,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต นั่ง เปิดคอ · <b>Inspection ด้านหน้า</b>: ตำแหน่ง ขนาด · <b>ให้กลืนน้ำ</b> (ก้อนขยับขึ้น = thyroid) · <b>แลบลิ้น</b> (thyroglossal cyst) · <b>Palpation จากด้านหลัง</b>: ขนาด ผิว ความแข็ง ขอบ เคลื่อนได้ กดเจ็บ ขยับตามการกลืน · <b>ตรวจ cervical lymph nodes ทุกกลุ่ม</b> · หลอดลมอยู่กลางไหม · percussion retrosternal extension · ฟัง bruit · Pemberton sign · ตรวจอาการ thyroid (ตา มือสั่น ชีพจร)",rubric:"1/ประเด็น",pts:[P("Introduce, consent, expose","introduc","consent","แนะนำ"),CR(P("Swallowing test","swallow","กลืน")),P("Tongue protrusion","tongue","ลิ้น"),CR(P("Palpate from behind, describe the mass","behind","ด้านหลัง","consistency","size")),CR(P("Examine all lymph node groups","lymph","node","ต่อมน้ำเหลือง")),P("Trachea position","trachea","หลอดลม"),P("Retrosternal extension, bruit","retrosternal","bruit","pemberton")]}),
  B("5.2 Two investigations.",4,{tags:["pe"],ans:"<b>Ultrasound of the thyroid/neck</b> (TI-RADS, ลักษณะก้อน, nodes) · <b>Fine-needle aspiration (FNA)</b> → Bethesda classification · (TFT ปกติแล้ว ไม่จำเป็นต้องทำ thyroid scan)",rubric:"2/ข้อ",pts:[CR(P("Neck ultrasound","ultrasound","us","อัลตรา")),CR(P("FNA","fna","fine needle"))]})
 ),
 interp:"Euthyroid neck mass",
 summary:["Euthyroid nodule: US + FNA","Thyroid moves with swallowing; thyroglossal cyst with tongue protrusion","Always examine lymph nodes"]}),

/* ===== OSCE 6 ===== */
Co({page:2,orig:"6",topic:"inst",sub:"Surgical instrument",title:"Instruments — curved Metzenbaum, Allis, Army-Navy, trocar, ostomy bag",
 stem:`Name each item and state how it is used: A curved Metzenbaum scissors · B Allis forceps · C Army-Navy retractor · D trocar · E ostomy bag.`,
 gray:"6. บอกชื่ออุปกรณ์ และวิธีใช้ A : curved metzenbaum B : Allis C : army navy D : trocar E : ostomy bag",
 flag:NOIMG,imgAlt:"Curved Metzenbaum scissors · Allis forceps · Army-Navy retractor · trocar · ostomy bag",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูป ผู้จดให้ชื่อมาแล้ว",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Name and use.",10,{tags:["inst"],ans:"A <b>Curved Metzenbaum scissors</b>: กรรไกรยาวบาง ตัด/เลาะเนื้อเยื่อละเอียด (dissection) ห้ามตัดไหม · B <b>Allis forceps</b>: ปลายมีฟันเล็ก จับเนื้อเยื่อแน่น (traumatic) เช่น fascia, ขอบเนื้อที่จะตัดทิ้ง · C <b>Army-Navy retractor</b>: retractor สองปลาย ใช้ถ่างแผลตื้น (ผิวหนัง ชั้นใต้ผิวหนัง) · D <b>Trocar</b>: เจาะผนังหน้าท้องเป็น port ใน laparoscopy · E <b>Ostomy bag</b>: ตัดรูให้ใหญ่กว่า stoma 2–3 mm ติด baseplate รอบ stoma เก็บอุจจาระ/ปัสสาวะ เปลี่ยนเมื่อเต็ม 1/3–1/2",rubric:"2/ข้อ",pts:[CR(P("Metzenbaum — delicate dissection, not for sutures","metzenbaum","dissect")),P("Allis — grasp tough tissue","allis"),P("Army-Navy — superficial retraction","army","navy","superficial"),P("Trocar — laparoscopic port","trocar","port"),CR(P("Ostomy bag — cut 2–3 mm larger than stoma","ostomy","stoma","2-3","2–3"))]})
 ),
 interp:"Instruments",
 summary:["Metzenbaum: delicate · Mayo: heavy","Allis: traumatic grasp · Babcock: atraumatic","Stoma bag opening 2–3 mm larger than stoma"]}),

/* ===== OSCE 7 ===== */
Co({page:2,orig:"7",topic:"suture",sub:"Suture & knot",ex:1,proc:1,title:"Vertical mattress — two stitches with instrument surgical knot",
 stem:`The wound has been cleaned, draped and anesthetized. Place two vertical mattress sutures and tie each with an instrument surgical knot.`,
 gray:"7. เย็บ vertical matress 2 stitch และผูกแบบ surgical knot โดยใช้เครื่องมือ สมมุติว่าทำความสะอาดแผล ปูผ้า ฉีดยาชาเรียบร้อยแล้ว",
 notes:"ไม่มีไฟล์เฉลย · ข้อเดียวกับ 73B OSCE 4",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 Technique.",6,{tags:["suture"],ans:"<b>Far–far</b> (ห่างขอบ 4–8 mm ลึก) แล้ว <b>near–near</b> (1–2 mm ตื้น) · ขอบแผล evert · <b>surgical knot</b>: รอบแรกพัน <b>2 รอบ</b> (double throw) แล้วกลับทิศพัน 1 รอบ × 2 · ปมอยู่ข้างแผล ไม่แน่นเกิน",rubric:"1/ประเด็น",pts:[CR(P("Far–far then near–near","far","near")),P("Symmetric bites","symmetr","เท่ากัน"),CR(P("First throw doubled (surgical knot)","double","2 รอบ","surgeon","surgical")),P("Alternate direction","alternat","กลับทิศ","square"),P("Edges everted","evert"),P("Knot to one side, not too tight","side","tight","แน่น")]})
 ),
 interp:"Vertical mattress + surgical knot",
 summary:["Far–far, near–near","Surgical knot: double first throw","Everts edges"]}),

/* ===== OSCE 8 ===== */
Co({page:2,orig:"8",topic:"inst",sub:"Tube/Catheter",title:"Double-J ureteric stent",
 stem:`A double-J stent is shown.<br>1. What is it?<br>2. What is it used for?`,
 gray:"8. Double J stent ถามคืออะไร ใช้ทำอะไร",
 flag:NOIMG,imgAlt:"สาย silicone/polyurethane ยาว ปลายทั้งสองขดเป็นรูปตัว J",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Identify.",2,{tags:["inst"],ans:"<b>Double-J (JJ) ureteric stent</b> — ปลายบนขดอยู่ใน renal pelvis ปลายล่างขดใน bladder",rubric:"ได้",pts:[CR(P("Double-J ureteric stent","double j","jj","ureteric stent","ureteral stent"))]}),
  B("8.2 Uses.",4,{tags:["inst"],ans:"<b>ระบายปัสสาวะจากไตลง bladder</b> ผ่านการอุดตันของท่อไต: ureteric stone (obstructed/infected kidney), tumor/extrinsic compression, stricture · <b>หลังผ่าตัด</b> ureteroscopy, pyeloplasty, ureteric repair/anastomosis, kidney transplant · ป้องกันบาดเจ็บท่อไต · <b>ต้องนัดถอด/เปลี่ยน</b> (ภายใน 3–6 เดือน) กัน encrustation",rubric:"1/ประเด็น",pts:[CR(P("Relieve ureteric obstruction","obstruct","stone","drain","ระบาย")),CR(P("After ureteric surgery or repair","pyeloplasty","ureteroscop","repair","anastomo","transplant")),P("Must be removed or changed","remove","change","ถอด","forgotten","encrust")]})
 ),
 interp:"JJ stent",
 summary:["Kidney to bladder internal drainage","Uses: obstruction, after ureteric surgery","Forgotten stent → encrustation"]}),

/* ===== SEQ ===== */
SA({page:2,orig:"SEQ X",num:"SA 1",sub:"Uro/Genital",title:"Short answer — history for an elderly man with LUTS",
 stem:`A 70-year-old man presents with urinary frequency and a sensation of incomplete emptying. What further history would you take?`,
 gray:"SEQ // ค่อนข้างตรง ac — X. จงซักประวัติเพิ่มเติมในผู้ป่วยชายอายุ 70 ปีที่มาด้วยฉี่บ่อย ฉี่ไม่สุด",
 notes:"ไม่มีไฟล์เฉลย · ผู้จดบอกว่า SEQ ค่อนข้างตรงกับข้อสอบเก่า",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 History.",8,{tags:["hx"],ans:"<b>Voiding (obstructive)</b>: hesitancy, weak stream, intermittency, straining, terminal dribbling, incomplete emptying · <b>Storage (irritative)</b>: frequency, urgency, <b>nocturia</b>, urge incontinence · <b>IPSS + QoL</b> · ระยะเวลา ความรุนแรง · <b>complications</b>: urinary retention, hematuria, UTI, stone, renal failure symptoms · <b>red flags</b>: น้ำหนักลด ปวดกระดูก (CA prostate), hematuria (bladder ca) · neurologic (DM, stroke, spinal) · <b>ยา</b>: anticholinergic, antihistamine, decongestant, diuretic · น้ำ/คาเฟอีน/แอลกอฮอล์ · ประวัติผ่าตัด/ใส่สาย (stricture)",rubric:"1/ประเด็น",pts:[CR(P("Voiding symptoms","hesitan","weak","stream","straining","dribbl","เบ่ง")),CR(P("Storage symptoms incl. nocturia","nocturia","urgency","กลางคืน")),P("IPSS score","ipss"),CR(P("Complications: retention, hematuria, UTI","retention","hematuria","uti","ไข้")),P("Red flags for cancer","weight","bone","น้ำหนัก","กระดูก"),P("Neurological history","neuro","diabet","stroke","spinal"),P("Medications","drug","medicat","anticholin","ยา"),P("Fluid and caffeine intake","caffeine","fluid","กาแฟ"),P("Previous catheter or urethral surgery","stricture","catheter","สวน")]})
 ),
 interp:"LUTS in elderly man",
 summary:["Voiding vs storage symptoms","IPSS quantifies severity","Ask complications and drugs","Workup: DRE, UA, PSA, Cr, PVR, uroflow"]})

);
})();
