(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU69 RoC (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   69 R3 (หัวไฟล์ Rotate 3/2559): OSCE 12 สถานี (SO22 หน้า 53–56) + MEQ 11 ข้อ (SM21 หน้า 66–71) · มีแนวคำตอบบางข้อ */
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
const KH="มีคีย์ลายมือในไฟล์ (ดูรูปเฉลย) · ขยายความโดย Claude";
const KS2="มีแนวคำตอบในไฟล์ (หน้า Suggestions/Review) · ขยายความโดย Claude";
const BS=(q,m,o)=>B(q,m,Object.assign({key:KS2},o));
const BK=(q,m,o)=>B(q,m,Object.assign({key:KH},o));
const Co=o=>Object.assign({set:"MDCU69",ro:"RoC",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:54,orig:"1",topic:"hx",sub:"Breast",ex:1,kimg:["mo54_1"],title:"History — nipple discharge",
 stem:`A woman has nipple discharge (age and side not stated). Take the important history. (Examiner present.)`,
 gray:"1. *ผู้ป่วยหญิงมีน้ำไหลออกจากเต้านม (ไม่บอกอายุ ไม่บอกข้าง) ให้ซักประวัติที่สำคัญ",
 notes:"ไฟล์แนบสไลด์ nipple discharge (galactorrhea vs pathologic: single duct, spontaneous, bloody → intraductal papilloma/DCIS) · หัวไฟล์ AC OSCE Surgery Rotate 3/2559 (12 ข้อ ข้อละ 4 นาที ไม่มีข้อพัก)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 History.",8,{tags:["hx"],ans:"อายุ ข้าง · <b>ลักษณะ discharge</b>: สี (น้ำนม, ใส, เขียว, <b>มีเลือด</b>) · <b>spontaneous หรือต้องบีบ</b> · <b>ท่อเดียวหรือหลายท่อ</b>, ข้างเดียว/สองข้าง · ก้อนที่เต้านม, nipple retraction, ผิวเปลี่ยน · <b>ประจำเดือน/ตั้งครรภ์/ให้นม</b> · <b>ยา</b>: antipsychotic, metoclopramide, OCP (hyperprolactinemia) · อาการ pituitary (ปวดหัว ตามัว) · hypothyroid · ประวัติครอบครัวมะเร็งเต้านม",rubric:"1/ประเด็น",pts:[CR(P("Color, bloody","bloody","blood","เลือด","color","สี")),CR(P("Spontaneous vs expressed","spontan","บีบ")),CR(P("Single vs multiple duct, uni/bilateral","single","multiple","duct","ข้าง")),P("Breast lump or skin change","lump","ก้อน","retract"),P("Pregnancy/lactation/menses","pregnan","lactat","ให้นม","lmp"),CR(P("Drugs causing hyperprolactinemia","drug","ยา","antipsych","metoclopramide")),P("Pituitary/thyroid symptoms","headache","visual","thyroid","pituitar"),P("Family history","family","ครอบครัว")]})
 ),
 interp:"Nipple discharge",
 summary:["Pathologic: spontaneous, single duct, unilateral, bloody","Most common cause: intraductal papilloma","Galactorrhea: drugs, prolactinoma, hypothyroid"]}),

/* ===== OSCE 2 ===== */
Co({page:54,orig:"2",topic:"pe",sub:"Acute abdomen",ex:1,title:"Examine severe right lower quadrant pain",
 stem:`Demonstrate the physical examination of a patient with severe right lower abdominal pain. (Examiner present.)`,
 gray:"2. *แสดงการตรวจร่างกายผู้ป่วยที่มาด้วยปวดท้องรุนแรงบริเวณท้องน้อยด้านขวา",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Examination.",8,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต · V/S · inspection, auscultation · palpation จากจุดไกล: <b>McBurney tenderness, guarding, rebound</b> · <b>Rovsing, psoas, obturator</b> · costovertebral angle tenderness (ureteric stone/pyelonephritis) · ตรวจ hernia · <b>PR/PV</b> (หญิง: cervical motion tenderness, adnexal mass)",rubric:"1/ประเด็น",pts:[P("Introduce, consent","consent","แนะนำ"),CR(P("McBurney, guarding, rebound","mcburney","guard","rebound")),P("Rovsing","rovsing"),P("Psoas, obturator","psoas","obturator"),P("CVA tenderness","cva","costovertebral"),P("Hernia orifices","hernia"),CR(P("PR / PV","pr","pv","rectal","pelvic"))]})
 ),
 interp:"RLQ pain exam",
 summary:["Appendicitis signs","CVA tenderness, hernia","PR/PV"]}),

/* ===== OSCE 3 ===== */
Co({page:54,orig:"3",topic:"img",sub:"Urolithiasis",title:"IVP — right staghorn stone with hydronephrosis",
 stem:`Many IVP films are given (find the scout film quickly; the film name is in the lower-left corner).<br>1. Describe the abnormality.<br>2. Diagnosis.<br>3. Treatment.`,
 gray:"3. Film IVP (ฟิล์มมากมาย ต้องรีบหา Scout film ;มีชื่อฟิล์มที่มุมซ้ายล่าง) 3.1. บรรยายความผิดปกติที่พบ (Right staghorn stone with right hydronephrosis) 3.2. ให้การวินิจฉัย 3.3. การรักษา",
 flag:NOIMG,imgAlt:"ชุดฟิล์ม IVP หลายแผ่น (ชื่อฟิล์มที่มุมซ้ายล่าง) · scout film: เงาทึบรังสีใหญ่แตกกิ่งเต็ม renal pelvis และ calyces ไตขวา · หลังฉีดสาร ไตขวาขับสารช้า calyces ป้านโป่ง · ไตซ้ายปกติ",
 notes:"แนวคำตอบในไฟล์: right staghorn stone with right hydronephrosis · PCNL",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Answer.",5,{tags:["img"],ans:"<b>Right staghorn stone with right hydronephrosis</b> (delayed excretion ไตขวา) · Rx: <b>PCNL</b> (+ รักษาการติดเชื้อ)",rubric:"1/ประเด็น",pts:[CR(P("Staghorn stone","staghorn")),CR(P("Hydronephrosis","hydroneph")),CR(P("PCNL","pcnl","percutaneous"))]})
 ),
 interp:"Staghorn",
 summary:["Find the scout film first","Staghorn → PCNL"]}),

/* ===== OSCE 4 ===== */
Co({page:54,orig:"4",topic:"inst",sub:"Urinary catheter",img:["mo54_2"],title:"Three-way catheter",
 stem:`1. What is this device?<br>2. Indication.`,
 gray:"4. ให้ดูอุปกรณ์ดังรูป 4.1. อุปกรณ์นี้เรียกว่าอะไร : 3 way catheter 4.2. Indication : Continuous bladder irrigation",
 notes:"แนวคำตอบในไฟล์: 3 way catheter · continuous bladder irrigation",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 Answer.",4,{tags:["inst"],ans:"<b>Three-way Foley catheter</b> · <b>continuous bladder irrigation</b>",rubric:"1/ประเด็น",pts:[CR(P("Three-way","3-way","three-way","3 way","three way")),CR(P("Continuous bladder irrigation","irrigat"))]})
 ),
 interp:"3-way Foley",
 summary:["CBI"]}),

/* ===== OSCE 5 ===== */
Co({page:54,orig:"5",topic:"hx",sub:"Prostate",title:"LUTS for 6 months — assess severity",
 stem:`A patient has had LUTS for 6 months. How will you take the history to assess symptom severity?`,
 gray:"5. ผู้ป่วยมาด้วยอาการ LUTS มา 6 เดือน จะซักประวัติว่าอย่างไรเพื่อประเมินความรุนแรงของอาการของผู้ป่วย",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 IPSS.",8,{tags:["hx"],ans:"<b>IPSS</b> ในช่วง 1 เดือน: incomplete emptying, frequency, intermittency, urgency, weak stream, straining, nocturia (0–5) + <b>QoL</b> (0–6) · <b>0–7 mild, 8–19 moderate, 20–35 severe</b>",rubric:"1/ข้อ",pts:[P("Incomplete emptying","incomplete"),CR(P("Frequency","frequency")),P("Intermittency","intermitt"),P("Urgency","urgency"),CR(P("Weak stream","weak")),P("Straining","strain"),CR(P("Nocturia","nocturia")),P("QoL and score bands","quality","qol","severe")]})
 ),
 interp:"IPSS",
 summary:["7 symptoms + QoL","Severity bands 7/19/35"]}),

/* ===== OSCE 6 ===== */
Co({page:55,orig:"6",topic:"img",sub:"Bowel obstruction",title:"Acute abdomen series A, B, C",
 stem:`An acute abdomen series (3 films labelled A, B, C).<br>1. Positions of films A, B, C.<br>2. Describe the abnormalities.<br>3. Diagnosis.<br>4. Initial treatment.`,
 gray:"6. Film Acute abdomen series (3 ฟิล์ม ติดตัวอักษร ABC) 6.1. ท่าที่ถ่ายของฟิล์ม A,B,C คืออะไร 6.2. จงบรรยายความผิดปกติที่พบ 6.3. จงให้การวินิจฉัย(?) 6.4. จงบอกการให้การรักษาเบื้องต้น",
 flag:NOIMG,imgAlt:"ฟิล์ม A (CXR ท่ายืน) ไม่มีลมใต้กะบังลม · ฟิล์ม B (ช่องท้องท่ายืน) air-fluid level หลายระดับเป็นขั้นบันได · ฟิล์ม C (ช่องท้องท่านอน) ลำไส้เล็กโป่งหลายห่วงกลางท้อง เห็นรอยพับพาดเต็มความกว้าง ลำไส้ใหญ่และ rectum มีลมน้อยมาก",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่มีรูป — เฉลยตัวอย่าง SBO",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("6.1 Answer.",7,{tags:["img"],ans:"A <b>CXR upright</b> · B <b>abdomen upright</b> · C <b>abdomen supine</b> · dilated small bowel, step-ladder air-fluid levels, ลมน้อยใน colon · Dx: <b>small bowel obstruction</b> · Initial: <b>NPO, NG decompression, IV fluid + electrolyte correction</b>, Foley/I-O, analgesia · มี strangulation/peritonitis → ผ่าตัด; adhesive SBO ไม่มี sign → conservative ± water-soluble contrast",rubric:"1/ประเด็น",pts:[CR(P("CXR upright, abdomen upright and supine","upright","supine")),CR(P("Dilated small bowel, air-fluid levels","dilat","air-fluid","air fluid")),CR(P("SBO","small bowel obstruction","sbo")),CR(P("NPO, NG, IV fluid","npo","ng","fluid")),P("Surgery if strangulation","strangul","surg","peritonitis")]})
 ),
 interp:"SBO",
 summary:["Drip and suck","Watch for strangulation","Water-soluble contrast in adhesive SBO"]}),

/* ===== OSCE 7 ===== */
Co({page:55,orig:"7",topic:"img",sub:"Mammogram",title:"Mammogram — arrange films and report",
 stem:`Mammogram films are given to arrange yourself.<br>1. What is this investigation, and which views are A and B?<br>2. Abnormality.<br>3. Further investigation for diagnosis.`,
 gray:"7. Mammogram มีฟิล์มให้เอามาเรียง/วางเอง 7.1. การส่งตรวจนี้เรียกว่าอะไร จงบอกว่า A,B คือถ่ายท่าอะไร 7.2. จงบอกความผิดปกติที่พบ 7.3. จะส่งตรวจอะไรเพิ่มเติมเพื่อการวินิจฉัย",
 flag:NOIMG,imgAlt:"ฟิล์ม mammogram 2 แผ่น (ยังไม่ได้วางเรียง): แผ่น A ถ่ายจากบนลงล่าง หัวนมอยู่ตรงกลาง · แผ่น B ถ่ายเฉียง เห็นกล้ามเนื้อ pectoralis เป็นสามเหลี่ยมมุมบน · ทั้งสองแผ่นเห็นก้อนทึบขนาด ~2 cm ส่วนบนด้านนอกของเต้านมซ้าย ขอบไม่เรียบมีเส้นแหลมแผ่ออก เนื้อเต้านมรอบก้อนดึงรั้งเข้าหา · ไม่มีหินปูน · หัวนมและผิวหนังปกติ",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("7.1 Answer.",5,{tags:["img"],ans:"<b>Mammography</b> · A/B = <b>CC และ MLO</b> · บรรยาย mass (ขอบ density), calcification, distortion, skin/nipple, axillary node → BI-RADS · <b>US ± core needle biopsy</b>",rubric:"1/ประเด็น",pts:[CR(P("Mammography","mammogra")),CR(P("CC and MLO","cc","mlo")),P("Describe abnormality","mass","calcif","spicul"),CR(P("US and core biopsy","ultrasound","biopsy"))]})
 ),
 interp:"Mammogram",
 summary:["CC + MLO","BI-RADS","Core biopsy"]}),

/* ===== OSCE 8 ===== */
Co({page:55,orig:"8",topic:"inst",sub:"Suture materials",title:"Six sutures — generic name, filament, absorbable, use",
 stem:`Six sutures (names hidden — identify by packet and thread colour): PDS, Prolene, nylon, silk, catgut, Vicryl.<br>1. Generic name and filament type of each.<br>2. Which are absorbable? (list all)<br>3. One procedure for each.`,
 gray:"8. ให้ด้ายมา 6 อัน PDS Prolene Nylon Silk Catgut Vicryl (ปิดชื่อ อาศัยจำสีซองสีด้าย) แล้วให้ตอบคำถามต่อไปนี้ 8.1. จงบอก generic name แต่ละตัว + ชนิด filament 8.2. ตัวไหนที่ละลายได้บ้าง (ตอบมาให้หมด) 8.3. จงบอกหัตถการที่ใช้ไหมดังกล่าวมาอย่างละ 1 หัตถการ",
 flag:NOIMG,imgAlt:"ไหม 6 ซองปิดชื่อ เห็นแต่สีซองและเส้นไหม: (1) ไหมสีม่วงเส้นเดี่ยวเรียบ (2) ไหมสีน้ำเงินเส้นเดี่ยวเรียบ (3) ไหมสีดำเส้นเดี่ยวเรียบแข็ง (4) ไหมสีดำถักเกลียว (5) ไหมสีน้ำตาลอ่อนบิดเกลียวแช่น้ำยา (6) ไหมสีม่วงถักเกลียว",
 notes:"แนวคำตอบในไฟล์: absorbable = catgut, PDS, vicryl · PDS เย็บ bowel · Prolene เย็บ vessel · Nylon เย็บ skin · Silk ผูก vessels · Catgut เย็บ perineum · Vicryl เย็บ subcutaneous tissue",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Generic and filament.",3,{tags:["inst"],ans:"PDS = <b>polydioxanone</b> mono · Prolene = <b>polypropylene</b> mono · Nylon = <b>polyamide</b> mono · Silk = natural multi (braided) · Catgut = natural (collagen) multi/twisted · Vicryl = <b>polyglactin 910</b> multi (braided)",rubric:"1/ประเด็น",pts:[P("Polydioxanone","polydioxanone"),P("Polypropylene","polypropylene"),P("Polyamide","polyamide"),CR(P("Polyglactin","polyglactin"))]}),
  BS("8.2 Absorbable.",2,{tags:["inst"],ans:"<b>Catgut, PDS, Vicryl</b>",rubric:"ครบได้คะแนน",pts:[CR(P("Catgut","catgut")),CR(P("PDS","pds")),CR(P("Vicryl","vicryl"))]}),
  BS("8.3 Uses.",3,{tags:["inst"],ans:"PDS — เย็บ bowel/fascia · Prolene — เย็บ vessel · Nylon — skin · Silk — ผูก vessels · Catgut — perineum · Vicryl — subcutaneous",rubric:"1/ประเด็น",pts:[P("PDS bowel/fascia","pds"),CR(P("Prolene vessel","prolene")),P("Nylon skin","nylon"),P("Silk ligation","silk"),P("Catgut perineum","catgut"),P("Vicryl subcutaneous","vicryl")]})
 ),
 interp:"Sutures",
 summary:["Absorbable: catgut, PDS, Vicryl","Prolene for vessels","Silk for ligation"]}),

/* ===== OSCE 9 ===== */
Co({page:55,orig:"9",topic:"inst",sub:"Surgical instruments",img:["mo55_2","mo55_1","mo55_4","mo55_3"],title:"Mosquito, Metzenbaum, Senn, Deaver",
 stem:`Name each instrument and give an example of its use.`,
 gray:"9. ให้อุปกรณ์มา 3 อย่าง 9.1. จงบอกชื่อ : Mosquito artery forcep , Curved metzenbaum , Senn retractor, Deaver retractor 9.2. ยกตัวอย่างการใช้งาน",
 notes:"แนวคำตอบในไฟล์: Mosquito artery forceps, curved Metzenbaum, Senn retractor, Deaver retractor",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Names and uses.",4,{tags:["inst"],ans:"<b>Mosquito artery forceps</b> — clamp หลอดเลือดเล็ก (เด็ก, ใบหน้า) · <b>Curved Metzenbaum</b> — ตัด/เลาะเนื้อเยื่อบอบบาง · <b>Senn retractor</b> — retractor เล็กสองปลาย (คราด/แผ่น) ดึงผิวหนังในแผลตื้น · <b>Deaver retractor</b> — ดึงรั้งอวัยวะในช่องท้องลึก",rubric:"1/ชิ้น",pts:[CR(P("Mosquito","mosquito")),P("Metzenbaum","metzenbaum"),CR(P("Senn retractor","senn")),CR(P("Deaver retractor","deaver"))]})
 ),
 interp:"Instruments",
 summary:["Mosquito = small vessels","Senn = small superficial retractor","Deaver = deep abdominal"]}),

/* ===== OSCE 10 ===== */
Co({page:56,orig:"10",topic:"inst",sub:"Tubes and drains",img:["mo56_2","mo56_1"],title:"Chest tube and Redivac drain",
 stem:`1. What are devices A and B?<br>2. Give 2 example conditions/procedures for each.`,
 gray:"10. ให้อุปกรณ์มา 2 อย่าง ดังรูป 10.1. จงบอกว่าอุปกรณ์ A,B คืออะไร : Chest tube , Redivac 10.2. จงยกตัวอย่าง ภาวะ/โรค – หัตถการ ที่ใช้อุปกรณ์แต่ละตัวมาอย่างละ 2 ตัวอย่าง",
 notes:"แนวคำตอบในไฟล์: Chest tube, Redivac",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("10.1 Answer.",4,{tags:["inst"],ans:"A <b>Chest tube</b> — pneumothorax, hemothorax, empyema, หลัง thoracotomy · B <b>Redivac (closed high-vacuum) drain</b> — หลัง <b>thyroidectomy, mastectomy/axillary dissection</b>, flap surgery",rubric:"1/ประเด็น",pts:[CR(P("Chest tube","chest tube","icd")),P("Pneumothorax/hemothorax","pneumothorax","hemothorax","empyema"),CR(P("Redivac drain","redivac")),P("Thyroidectomy/mastectomy","thyroidectomy","mastectomy","axill")]})
 ),
 interp:"Drains",
 summary:["Chest tube → underwater seal","Redivac after thyroid/breast surgery"]}),

/* ===== OSCE 11 ===== */
Co({page:56,orig:"11",topic:"proc",sub:"Scrub and gloving",ex:1,title:"WHO alcohol hand rub — steps",
 stem:`Explain the steps of hand rub with alcohol gel according to WHO and state how many steps there are. (Scene: a bottle of alcohol gel and an OR towel.)`,
 gray:"11. *จงอธิบายขั้นตอนการล้างมือด้วยแอลกอฮอล์เจลตาม WHO พร้อมทั้งสรุปว่ามีทั้งหมดกี่ขั้นตอน (scene มีการตั้งขวดแอลกอฮอล์เจล 1 ขวด + ผ้าเช็ดมือใน OR )",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("11.1 Steps.",6,{tags:["proc"],ans:"กดเจลเต็มฝ่ามือ · 1 <b>ฝ่ามือถูฝ่ามือ</b> · 2 <b>ฝ่ามือถูหลังมือ</b> นิ้วสอดประสาน (สลับข้าง) · 3 <b>ฝ่ามือถูฝ่ามือนิ้วสอดประสาน</b> · 4 <b>หลังนิ้วถูฝ่ามือ</b> (นิ้วล็อก) · 5 <b>ถูนิ้วหัวแม่มือ</b> หมุนในอุ้งมือ · 6 <b>ปลายนิ้ว/เล็บถูกลางฝ่ามือ</b> · (7 ข้อมือ) · <b>6 ขั้นตอนหลัก</b> 20–30 วินาที ถูจนแห้ง ไม่ต้องใช้ผ้าเช็ด · surgical rub ต่อถึง forearm",rubric:"1/ประเด็น",pts:[P("Palm to palm","palm"),P("Back of hands","back","หลังมือ"),P("Interlaced fingers","interlac","สอดประสาน"),P("Backs of fingers","backs of finger","interlock","ล็อก"),CR(P("Thumbs","thumb","หัวแม่มือ")),CR(P("Fingertips","fingertip","tip","ปลายนิ้ว")),CR(P("Six steps, rub until dry","6","six","dry","แห้ง"))]})
 ),
 interp:"WHO hand rub",
 summary:["6 steps","20–30 s, until dry","Don't forget thumbs and fingertips"]}),

/* ===== OSCE 12 ===== */
Co({page:56,orig:"12",topic:"suture",sub:"Vertical mattress",ex:1,proc:1,title:"Vertical mattress — 2 stitches (prepped, draped, anesthetized)",
 stem:`Suture the wound with 2 vertical mattress stitches (skin prep, draping and local anesthesia are already done). Examiner and an assistant are present.`,
 gray:"12. *(มีอาจารย์+พี่เด้นช่วย) จงเย็บแผล vertical mattress 2 stitches (ทายา ปูผ้า ฉีดยาชาเรียบร้อยแล้ว)",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("12.1 Technique.",5,{tags:["suture"],ans:"ทดสอบชาก่อน · <b>far-far → near-near</b> · ผูก square/surgeon's knot ปมข้างแผล · evert · ให้ผู้ช่วยตัดไหม (บอกความยาว)",rubric:"1/ประเด็น",pts:[P("Test anesthesia","test","ทดสอบ"),CR(P("Far-far","far")),CR(P("Near-near","near")),P("Knot to side","side","knot"),P("Eversion","evert")]})
 ),
 interp:"VM",
 summary:["Far-far, near-near","Instruct assistant to cut"]}),

/* ===== MEQ ===== */
SA({page:67,orig:"MEQ 1",num:"SA 1",sub:"Others",img:["mm67_1"],title:"Short answer — PICC line",
 stem:`1. What is this device?<br>2. Give 3 indications.<br>3. What is the most common infecting organism?`,
 gray:"1. จากรูปอุปกรณ์ดังกล่าว 1.1. อุปกรณ์นี้มีชื่อว่าอะไร (PICC line) 1.2. จงบอกข้อบ่งชี้ในการใช้อุปกรณ์นี้มา 3 ข้อ 1.3. การใช้อุปกรณ์นี้มีโอกาสติดเชื้ออะไรมากที่สุด",
 notes:"เฉลยในไฟล์: PICC line · chemotherapy, parenteral nutrition, frequent venous sampling, repeated blood products · coagulase-negative Staphylococcus · หัวไฟล์ AC MEQ Surgery Rotate 3/2559 (14 ข้อ จำได้ 11 ข้อ)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Answer.",5,{tags:["spot"],ans:"<b>PICC (peripherally inserted central catheter)</b> · ข้อบ่งชี้: <b>chemotherapy</b>, <b>parenteral nutrition</b>, <b>long-term IV antibiotics</b>, frequent venous sampling, repeated blood products · เชื้อบ่อยสุด <b>coagulase-negative Staphylococcus (S. epidermidis)</b>",rubric:"1/ประเด็น",pts:[CR(P("PICC line","picc","peripherally inserted")),P("Chemotherapy","chemo"),P("Parenteral nutrition","parenteral","tpn"),P("Long-term IV / sampling / blood","antibiot","sampl","blood"),CR(P("Coagulase-negative Staph","coagulase","epidermidis"))]})
 ),
 interp:"PICC",
 summary:["Chemo, TPN, long-term IV","CoNS most common CLABSI"]}),

SA({page:67,orig:"MEQ 2",num:"SA 2",sub:"Hepatobiliary",img:["mm67_2"],title:"Short answer — gallbladder operation",
 stem:`1. What organ is shown?<br>2. What is found inside when opened?<br>3. Name the operation.<br>4. Give 2 indications.`,
 gray:"2. จากรูปดังกล่าว 2.1. อวัยวะที่เห็นในภาพคืออะไร 2.2. เมื่อผ่าเปิดอวัยวะดังกล่าวออกมา พบอะไรอยู่ข้างใน 2.3. การผ่าตัดดังกล่าวเรียกว่าอะไร 2.4. จงบอกข้อบ่งชี้สำหรับการผ่าตัดมา 2 ข้อ",
 notes:"เฉลยในไฟล์: gallbladder · stone · laparoscopic cholecystectomy · acute cholecystitis, acute cholangitis",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("2.1 Answer.",5,{tags:["spot"],ans:"<b>Gallbladder</b> · <b>gallstones</b> · <b>laparoscopic cholecystectomy</b> · ข้อบ่งชี้: <b>symptomatic gallstone</b>, <b>acute cholecystitis</b>, หลัง <b>acute cholangitis</b>/gallstone pancreatitis (หลังเคลียร์ CBD), GB polyp ≥1 ซม.",rubric:"1/ประเด็น",pts:[CR(P("Gallbladder","gallbladder","galbladder")),P("Stone","stone"),CR(P("Laparoscopic cholecystectomy","cholecystectomy")),P("Acute cholecystitis","cholecystitis"),P("Cholangitis / symptomatic stones","cholangitis","symptom","pancreatitis")]})
 ),
 interp:"Lap chole",
 summary:["Symptomatic gallstones","After cholangitis/pancreatitis"]}),

SA({page:68,orig:"MEQ 3",num:"SA 3",sub:"Breast",flag:NOIMG,imgAlt:"เต้านมซ้ายแดงบวม หัวนมบุ๋ม ผิวเปลือกส้ม",title:"Short answer — red swollen left breast with matted axillary node",
 stem:`Pictures of both breasts: the left breast is red and swollen. Left matted axillary nodes are found; supraclavicular nodes are negative. A close-up shows nipple retraction and peau d'orange.<br>1. All findings.<br>2. Clinical staging.<br>3. Investigation to confirm the diagnosis.`,
 gray:"3. ให้รูปเต้านมมา 2 ข้าง สังเกตเห็นเต้านมซ้ายแดงๆบวมๆ + มีการชี้บอกว่าตรวจพบ left matted axillary node , negative supraclavicular node (สไลด์1) เห็น nipple retraction + peau d'orange ชัดเจน (สไลด์2 ซูมนมซ้ายให้) 3.1. จงบอก findings ที่พบทั้งหมด 3.2. Clinical staging 3.3. ส่งตรวจอะไรเพิ่มเติม เพื่อยืนยันการวินิจฉัย",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("3.1 Findings.",3,{tags:["spot"],ans:"<b>Left breast erythema and swelling</b>, <b>nipple retraction</b>, <b>peau d'orange</b>, <b>left matted axillary lymph nodes</b>, no supraclavicular node",rubric:"1/ประเด็น",pts:[P("Erythema, swelling","erythema","red","swell"),CR(P("Nipple retraction","retraction")),CR(P("Peau d'orange","peau","orange")),P("Matted axillary nodes","matted","axill")]}),
  B("3.2 Clinical staging.",2,{tags:["spot"],ans:"<b>T4b (peau d'orange/edema) หรือ T4d ถ้า inflammatory (erythema ≥1/3) · N2a (matted/fixed axillary nodes) · M0 (ถ้าไม่พบ) → clinical stage IIIB</b>",rubric:"1/ประเด็น",pts:[CR(P("T4","t4")),CR(P("N2","n2")),P("Stage IIIB","iiib","3b")]}),
  B("3.3 Confirm diagnosis.",2,{tags:["spot"],ans:"<b>Core needle biopsy</b> (± skin punch biopsy) + ER/PR/HER2 · mammogram/US · staging CT/bone scan",rubric:"1/ประเด็น",pts:[CR(P("Core biopsy","core","biopsy")),P("Staging imaging","ct","bone","pet")]})
 ),
 interp:"LABC",
 summary:["Peau d'orange = T4b, inflammatory = T4d","Matted axillary = N2a","Stage IIIB → neoadjuvant"]}),

SA({page:68,orig:"MEQ 4",num:"SA 4",sub:"Others",img:["mm68_1"],title:"Short answer — leg pain worse in the evening",
 stem:`A patient has leg pain, worse in the evening; the legs look as shown (real case darker).<br>1. Diagnosis.<br>2. Important physical examination.<br>3. Further investigation.`,
 gray:"4. ผู้ป่วยมาด้วยประวัติปวดขา เป็นมากตอนเย็น มีลักษณะขาดังรูป (ของจริงขาดำกว่านี้) 4.1. จงให้การวินิจฉัย 4.2. จงบอกการตรวจร่างกายสำคัญ 4.3. จะส่งตรวจอะไรเพิ่มเติม",
 notes:"เฉลยในไฟล์: chronic venous insufficiency · Brodie-Trendelenburg test · Doppler and duplex ultrasound",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 Answer.",5,{tags:["spot"],ans:"<b>Chronic venous insufficiency</b> (pigmentation, varicose veins, ปวดหนักขาช่วงเย็น) · PE: <b>Brodie-Trendelenburg test</b>, tourniquet test, Perthes test, cough impulse ที่ SFJ · Ix: <b>Doppler / duplex ultrasound</b>",rubric:"1/ประเด็น",pts:[CR(P("Chronic venous insufficiency","venous")),CR(P("Trendelenburg test","trendelenburg","brodie")),P("Perthes / tourniquet","perthes","tourniquet"),CR(P("Duplex ultrasound","duplex","doppler"))]})
 ),
 interp:"CVI",
 summary:["Evening aching, pigmentation","Trendelenburg test","Duplex"]}),

SA({page:68,orig:"MEQ 5",num:"SA 5",sub:"Neuro",flag:NOIMG,imgAlt:"รูปการตรวจกำลังกล้ามเนื้อ 3 ท่า: (1) ผู้ป่วยงอปลายนิ้วมือข้อปลายสุดต้านมือผู้ตรวจที่จับข้อกลางนิ้วไว้ (2) ผู้ป่วยนอนหงายยกต้นขางอสะโพกขึ้นต้านมือที่กดเหนือเข่า (3) ผู้ป่วยกดปลายเท้าลงต้านมือที่ฝ่าเท้า",kimg:["mm68_2","mm69_1","mm69_2"],title:"Short answer — muscle and nerve root from examination pictures",
 stem:`From the following examinations, name the muscle and nerve root being tested in each.`,
 gray:"5. จากท่าการตรวจดังต่อไปนี้ จงบอก กล้ามเนื้อ Nerve root ที่กำลังถูกตรวจในแต่ละอัน (หาในเวปละเจอรูปเป๊ะๆพอดี เลยแคปมาใส่) 5.1 5.2 5.3",
 notes:"รูปจากไฟล์มีชื่อท่ากำกับ (C8 finger flexion, L1 & L2 hip flexion, ankle plantar flexion) จึงใส่เป็นรูปเฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Answer.",6,{tags:["spot"],ans:"1. <b>Finger flexion — flexor digitorum profundus, C8</b> · 2. <b>Hip flexion — iliopsoas, L1–L2</b> (femoral n./lumbar plexus) · 3. <b>Ankle plantar flexion — gastrocnemius/soleus, S1</b> (tibial n.)",rubric:"1/ประเด็น",pts:[CR(P("Finger flexion C8","c8","finger flex","fdp")),CR(P("Hip flexion L1–L2","l1","l2","iliopsoas","hip flex")),CR(P("Plantar flexion S1","s1","gastrocnem","plantar"))]})
 ),
 interp:"Myotomes",
 summary:["C8 finger flexion","L2 hip flexion","S1 plantarflexion"]}),

SA({page:69,orig:"MEQ 6",num:"SA 6",sub:"Head & neck",img:["mm69_3"],title:"Short answer — pit in front of the ear",
 stem:`Give the diagnosis and treatment plan.`,
 gray:"6. จากรูป 6.1. จงบอก treatment plan",
 notes:"เฉลยในไฟล์: Dx infected preauricular sinus/pit · oral antibiotics and elective surgery (tract removal)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Answer.",4,{tags:["spot"],ans:"<b>Preauricular sinus/pit</b> (± infected) · อักเสบ: <b>oral antibiotics</b> ± drain abscess · หายอักเสบ → <b>elective complete excision of the sinus tract</b> (ป้องกันกลับเป็นซ้ำ) · ไม่มีอาการ → observe",rubric:"1/ประเด็น",pts:[CR(P("Preauricular sinus","preauricular")),CR(P("Antibiotics for infection","antibiot")),CR(P("Elective tract excision","excision","tract","surgery"))]})
 ),
 interp:"Preauricular sinus",
 summary:["Treat infection first","Then complete tract excision"]}),

SA({page:70,orig:"MEQ 7",num:"SA 7",sub:"Plastic",img:["mm70_1"],title:"Short answer — 4-month-old with cleft lip",
 stem:`A mother brings her 4-month-old baby as shown.<br>1. Diagnosis.<br>2. Appropriate age for treatment, with reasons.<br>3. Advice to the mother.`,
 gray:"7. มารดาพาบุตรอายุ 4 เดือนมา ดังรูป 7.1. จงให้การวินิจฉัย 7.2. จงบอกอายุที่เหมาะสำหรับการให้การรักษา พร้อมเหตุผลประกอบ 7.3. จงให้คำแนะนำสำหรับมารดาในการดูแลผู้ป่วย",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 Answer.",6,{tags:["spot"],ans:"<b>Unilateral incomplete cleft lip</b> · lip repair <b>~3 เดือน (rule of 10s)</b> — ทำได้แล้วตอนนี้ (4 เดือน) ถ้าเกณฑ์ครบ: น้ำหนัก ≥10 lb, Hb ≥10, อายุ ≥10 สัปดาห์ ปลอดภัยต่อการดมยา · advice: feeding ท่าตั้ง จุกพิเศษ เรอบ่อย, เพิ่มน้ำหนัก, ตรวจ palate/หู, ทีม cleft, genetic counseling",rubric:"1/ประเด็น",pts:[CR(P("Cleft lip","cleft lip")),CR(P("~3 months / rule of 10s","3 m","10","rule")),P("Reason: anesthesia safety","anesth","safe","ดมยา"),CR(P("Feeding advice","feed","นม")),P("Team, hearing, genetics","team","ear","genetic")]})
 ),
 interp:"Cleft lip",
 summary:["Rule of 10s","Feeding advice","Team care"]}),

SA({page:70,orig:"MEQ 8",num:"SA 8",sub:"Colorectal",img:["mm70_3","mm70_2"],title:"Short answer — sigmoidoscope and proctoscope",
 stem:`Devices A and B are shown.<br>1. Names.<br>2. Uses.`,
 gray:"8. จากรูปอุปกรณ์ดังกล่าว A,B 8.1. จงบอกชื่อ (Sigmoidoscope , Disposable proctoscope) 8.2. การใช้งาน",
 notes:"เฉลยในไฟล์: sigmoidoscope — sigmoid volvulus detorsion · proctoscope — examine intra-anal lesion",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Answer.",4,{tags:["spot"],ans:"A <b>Rigid sigmoidoscope</b> — ดู rectum/sigmoid, biopsy, <b>detorsion ของ sigmoid volvulus</b> (± rectal tube) · B <b>Disposable proctoscope</b> — ตรวจ <b>intra-anal lesion</b> เช่น internal hemorrhoid, ทำ RBL/sclerotherapy",rubric:"1/ประเด็น",pts:[CR(P("Sigmoidoscope","sigmoidoscop")),P("Sigmoid volvulus detorsion","volvulus","detorsion"),CR(P("Proctoscope","proctoscop")),P("Intra-anal lesions, hemorrhoid","hemorrhoid","intra-anal","anal")]})
 ),
 interp:"Scopes",
 summary:["Rigid sigmoidoscope: volvulus detorsion","Proctoscope: hemorrhoids, RBL"]}),

SA({page:71,orig:"MEQ 9",num:"SA 9",sub:"Colorectal",img:["mm71_1"],title:"Short answer — colonoscopy indications",
 stem:`1. What is this procedure?<br>2. Give 4 indications.`,
 gray:"9. จากรูป 9.1. หัตถการดังกล่าวเรียกว่าอะไร 9.2. จงบอกข้อบ่งชี้ในการทำหัตถการมา 4 ข้อ",
 notes:"เฉลยในไฟล์: flexible colonoscopy · surveillance for CA colon, stool occult blood +ve, hematochezia, colonic polyp, IDA, follow up after Rx",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Answer.",5,{tags:["spot"],ans:"<b>Flexible colonoscopy</b> · <b>screening/surveillance CA colon</b>, <b>stool occult blood/FIT positive</b>, <b>hematochezia</b>, <b>colonic polyp</b> (polypectomy), <b>iron deficiency anemia</b>, follow up หลังรักษา CRC",rubric:"1/ประเด็น",pts:[CR(P("Colonoscopy","colonoscop")),P("Screening/surveillance","screen","surveil"),P("Occult blood / FIT","occult","fit"),P("Hematochezia","hematochezia","bleed"),P("Polyp or IDA","polyp","anemia","ida")]})
 ),
 interp:"Colonoscopy",
 summary:["FIT+, bleeding, IDA, polyp, surveillance"]}),

SA({page:71,orig:"MEQ 10",num:"SA 10",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"AXR ลำไส้ใหญ่ขยาย และ barium enema มี transition zone",title:"Short answer — neonate with distension and no meconium",
 stem:`A neonate has abdominal distension and has not passed meconium. X-ray shows dilated colon (slide 1).<br>1. Two differential diagnoses.<br>2. Investigation. (Slide 2: barium enema shows a transition zone.)<br>3. Diagnosis.<br>4. Initial and definitive treatment.`,
 gray:"10. เด็กมาด้วยประวัติท้องอืด ไม่ถ่าย meconium ให้รูป film X-rays มาเห็นเป็น dilated colon (สไลด์1) 10.1. จงบอก Differential diagnosis มา 2 โรค 10.2. จะส่งตรวจอะไรเพิ่มเติมเพื่อการวินิจฉัย (สไลด์2 เป็นรูป Barium enema เห็น transitional zone) 10.3. จงให้การวินิจฉัย 10.4. จงบอก initial & definitive treatment",
 notes:"เฉลยในไฟล์: Hirschsprung's disease, ileal atresia · barium enema · Hirschsprung's disease · NPO, IV fluid, electrolyte correction · transanal endorectal pull through",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("10.1 DDx.",2,{tags:["spot"],ans:"<b>Hirschsprung disease</b> · <b>ileal atresia</b> (meconium ileus, meconium plug)",rubric:"1/โรค",pts:[CR(P("Hirschsprung","hirschsprung","hirshsprung")),P("Ileal atresia / meconium ileus","atresia","meconium")]}),
  BS("10.2 Investigation and diagnosis.",3,{tags:["spot"],ans:"<b>Contrast (barium) enema</b> — <b>transition zone</b> → <b>Hirschsprung disease</b> · ยืนยันด้วย <b>rectal suction biopsy</b> (ไม่มี ganglion cells, AChE เพิ่ม)",rubric:"1/ประเด็น",pts:[CR(P("Barium enema","barium","contrast enema")),CR(P("Hirschsprung disease","hirschsprung")),P("Rectal suction biopsy","biopsy")]}),
  BS("10.3 Treatment.",3,{tags:["spot"],ans:"Initial: <b>NPO, IV fluid, electrolyte correction</b>, NG, <b>rectal irrigation/washout</b>, antibiotics ถ้า enterocolitis · Definitive: <b>transanal endorectal pull-through</b> (Soave/Swenson/Duhamel)",rubric:"1/ประเด็น",pts:[CR(P("NPO, IV fluid, electrolyte","npo","fluid","electrolyte")),P("Rectal washout","washout","irrigat"),CR(P("Pull-through","pull through","pull-through"))]})
 ),
 interp:"Hirschsprung",
 summary:["Delayed meconium + distension","Transition zone on contrast enema","Suction biopsy → pull-through"]}),

SA({page:71,orig:"MEQ 11",num:"SA 11",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"ถุงอัณฑะขวาของเด็กชายบวมโตตึงใส ไม่แดง ไม่เจ็บ ขนาดเปลี่ยนตามช่วงวัน",title:"Short answer — child with hydrocele",
 stem:`A picture of a child with hydrocele.<br>1. Important further examination and diagnosis.<br>2. Treatment and appropriate age.`,
 gray:"11. ให้รูปเด็กที่เป็น hydrocele 11.1. จงบอกการตรวจร่างกายเพิ่มเติมที่สำคัญเพื่อนำไปสู่การวินิจฉัย และ จงให้การวินิจฉัย 11.2. จงบอกวิธีการรักษาและอายุที่เหมาะสมสำหรับการให้การรักษา",
 notes:"เฉลยในไฟล์: transillumination test / hydrocele · hydrocelectomy at 2 years old (เด็ก: ผ่าทาง inguinal = herniotomy/high ligation of processus vaginalis)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 Answer.",4,{tags:["spot"],ans:"<b>Transillumination test</b> positive + get above swelling → <b>hydrocele</b> · รักษา: observe; ไม่หายเมื่อ <b>~2 ปี</b> (หรือ communicating) → ผ่าตัด (<b>inguinal herniotomy/high ligation of processus vaginalis</b>; คีย์ไฟล์เรียก hydrocelectomy)",rubric:"1/ประเด็น",pts:[CR(P("Transillumination","transillum")),CR(P("Hydrocele","hydrocele")),CR(P("Surgery at ~2 years","2 year","2 ปี")),P("Herniotomy / high ligation","herniotomy","high ligation","hydrocelectomy")]})
 ),
 interp:"Pediatric hydrocele",
 summary:["Transillumination","Observe to 1–2 years","Inguinal approach in children"]})

);
})();
