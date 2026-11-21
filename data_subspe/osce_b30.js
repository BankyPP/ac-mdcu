(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU72 RoB (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   72B: OSCE 12 สถานี (SO22 หน้า 5–7) + MEQ 13 ข้อ (SM21 หน้า 5–9 ไม่มีคีย์) · เฉลยโดย Claude · รูป mm/mo */
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
const Co=o=>Object.assign({set:"MDCU72",ro:"RoB",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:6,orig:"1",topic:"pe",sub:"Acute abdomen",ex:1,title:"Physical examination — acute appendicitis",
 stem:`Perform the physical examination for suspected acute appendicitis on the simulated patient.`,
 gray:"1. Physical examination acute appendicitis",
 notes:"ไม่มีไฟล์เฉลย · คอมเมนต์ในไฟล์: ตรงแอคเกือบหมด",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Examination.",8,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต ล้างมือ เปิดหน้าท้อง นอนหงายชันเข่า · V/S (ไข้) · <b>Inspection</b>: ท้องอืด การหายใจ · <b>Auscultation</b> bowel sound · <b>Palpation</b> เริ่มจากจุดไกลจากที่เจ็บ: <b>tenderness ที่ McBurney point</b>, <b>guarding</b>, <b>rebound tenderness</b> · <b>Rovsing sign</b> · <b>Psoas sign</b> (นอนตะแคงซ้าย เหยียดสะโพกขวา) · <b>Obturator sign</b> (งอสะโพก-เข่า หมุนสะโพกเข้าใน) · Dunphy sign (ไอแล้วเจ็บ) · percussion tenderness · บอกว่าจะทำ <b>PR</b> และตรวจ hernia/genitalia/pelvic (หญิง)",rubric:"1/ประเด็น",pts:[P("Introduce, consent, expose","consent","อนุญาต","expose"),P("Inspect and auscultate","inspect","ausculta","bowel sound"),CR(P("McBurney point tenderness","mcburney")),CR(P("Guarding and rebound","guard","rebound")),P("Rovsing sign","rovsing"),CR(P("Psoas sign","psoas")),CR(P("Obturator sign","obturator")),P("Cough sign or percussion tenderness","dunphy","cough","percuss"),P("PR / pelvic exam","pr","rectal","pelvic")]})
 ),
 interp:"PE appendicitis",
 summary:["McBurney tenderness, guarding, rebound","Rovsing, psoas, obturator","Mention PR and pelvic exam"]}),

/* ===== OSCE 2 ===== */
Co({page:6,orig:"2",topic:"hx",sub:"Breast mass",ex:1,title:"History taking — breast lump",
 stem:`A simulated patient has noticed a lump in her breast. Take a history.`,
 gray:"2. ซักประวัติ คลำก้อนได้ที่เต้านม",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 History.",10,{tags:["hx"],ans:"<b>ก้อน</b>: เมื่อไร ตำแหน่ง ขนาด โตเร็ว/ช้า เจ็บ เปลี่ยนตามรอบเดือน · <b>nipple discharge</b> (เลือด), nipple retraction, ผิวเปลี่ยน · ก้อนที่รักแร้, ปวดกระดูก ไอ ตัวเหลือง น้ำหนักลด (metastasis) · <b>ประจำเดือน</b>: menarche, menopause, LMP · <b>ประวัติการตั้งครรภ์/คลอดบุตรคนแรก/ให้นมบุตร</b> · <b>ยาคุม/hormone replacement</b> · <b>ประวัติครอบครัวมะเร็งเต้านม/รังไข่</b> (BRCA) · ประวัติก้อนเต้านม/biopsy เดิม, ฉายรังสีที่ทรวงอก · alcohol, obesity · โรคประจำตัว ยา แพ้ยา",rubric:"1/ประเด็น",pts:[CR(P("Onset, size, growth, pain of lump","onset","size","ขนาด","โต","pain")),P("Cyclical change","cycl","รอบเดือน"),CR(P("Nipple discharge or retraction","nipple","discharge")),P("Axillary lump","axill","รักแร้"),P("Metastatic symptoms","bone","weight","น้ำหนัก","metast"),CR(P("Menarche, menopause","menarche","menopause","ประจำเดือน")),P("Parity, first pregnancy, breastfeeding","parity","pregnan","บุตร","breastfeed"),P("Hormone or OCP use","hormone","ocp","ยาคุม"),CR(P("Family history breast/ovarian cancer","family","ครอบครัว","brca")),P("Previous breast disease or radiation","previous","biopsy","radiat"),P("Alcohol, obesity","alcohol","obes")]})
 ),
 interp:"Hx breast lump",
 summary:["Lump features + nipple/skin changes","Hormonal risk: menarche, menopause, nulliparity, HRT","Family history (BRCA)"]}),

/* ===== OSCE 3 ===== */
Co({page:6,orig:"3",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Local anesthetic injection",
 stem:`Inject local anesthesia around the wound on the model before suturing.`,
 gray:"3. ฉีดยาชา",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Technique.",7,{tags:["proc"],ans:"ตรวจสอบยา: <b>1–2% lidocaine</b> (± adrenaline ห้ามใช้ที่ปลายนิ้ว จมูก หู องคชาต) ดูชื่อ ความเข้มข้น วันหมดอายุ · ถามแพ้ยา · <b>max dose: 4.5 mg/kg (plain), 7 mg/kg (with adrenaline)</b> · ทำความสะอาดผิว · เข็มเล็ก 25–27G · แทงผ่าน <b>ขอบแผล</b> (ไม่ผ่านผิวที่ไม่บาดเจ็บถ้าแผลสะอาด) เข้าชั้น subcutaneous · <b>aspirate ก่อนฉีด</b> · ฉีดช้าๆ ขณะถอยเข็ม (fan) รอบแผล · รอ 3–5 นาที ทดสอบความชาก่อนเย็บ",rubric:"1/ประเด็น",pts:[P("Check drug, concentration, expiry","check","expir","concentra","ตรวจสอบ"),P("Ask allergy","allerg","แพ้"),CR(P("Max dose of lidocaine","max","4.5","7 mg","dose")),P("Avoid adrenaline in end-arterial sites","adrenaline","epineph","finger","นิ้ว"),P("Inject through wound edge into subcutaneous tissue","edge","subcut","ขอบ"),CR(P("Aspirate before injecting","aspirat","ดูด")),P("Inject slowly, wait and test","slow","wait","test","รอ")]})
 ),
 interp:"Local anesthesia",
 summary:["Lidocaine max 4.5 mg/kg plain, 7 mg/kg with adrenaline","Aspirate before inject","No adrenaline at fingers, toes, penis, nose, ear"]}),

/* ===== OSCE 4 ===== */
Co({page:6,orig:"4",topic:"suture",sub:"Simple and vertical mattress",ex:1,proc:1,title:"Simple interrupted and vertical mattress suture",
 stem:`Place 1 simple interrupted suture and 1 vertical mattress suture on the pad.`,
 gray:"4. เย็บ simple suture 1, Vertical mattress 1",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Simple interrupted.",4,{tags:["suture"],ans:"แทงเข็มตั้งฉากกับผิว ห่างขอบเท่ากันสองฝั่ง ลึกเท่ากัน (ทรง flask) · ผูก instrument tie 3 ปม (square knot) · ปมอยู่ข้างแผล ขอบชนกันพอดี evert เล็กน้อย",rubric:"1/ประเด็น",pts:[CR(P("Needle perpendicular, equal bite","perpendic","equal","ตั้งฉาก","เท่ากัน")),P("Flask shape / depth","flask","depth","ลึก"),CR(P("Square knot, at side","square","knot","ปม")),P("Edges apposed, slight eversion","evert","appos")]}),
  B("4.2 Vertical mattress.",4,{tags:["suture"],ans:"<b>Far-far</b> (ห่างขอบ 4–8 มม. ลึก) แล้ว <b>near-near</b> (1–2 มม. ตื้น) ด้านเดียวกัน ผูกปมข้างแผล ได้ <b>eversion</b> ดี",rubric:"1/ประเด็น",pts:[CR(P("Far-far","far")),CR(P("Near-near","near")),P("Eversion","evert")]})
 ),
 interp:"Suture",
 summary:["Simple: equal bites, flask shape","Vertical mattress: far-far, near-near","Knot to one side"]}),

/* ===== OSCE 5 ===== */
Co({page:6,orig:"5",topic:"inst",sub:"Urology device",img:["mo6_i1"],title:"Identify — double-J ureteric stent",
 stem:`What is this and what is it used for?`,
 gray:"5. นี่คืออะไร ใช้ทำอะไร (รูป DJ stent)",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Name and use.",4,{tags:["inst"],ans:"<b>Double-J (DJ) ureteric stent</b> — ปลายขดสองด้านอยู่ใน renal pelvis และ bladder · ใช้ <b>ระบาย obstruction ของ ureter</b> (นิ่ว, tumor, stricture), หลัง ureteroscopy/pyeloplasty, ป้องกัน/รักษา ureteric injury · ต้องนัด<b>ถอดหรือเปลี่ยนภายใน 3–6 เดือน</b> (forgotten stent)",rubric:"1/ประเด็น",pts:[CR(P("Double-J ureteric stent","double j","dj","double-j","ureteric stent","ureteral stent")),CR(P("Relieve ureteric obstruction","obstruct","drain","ระบาย")),P("After ureteric surgery or injury","ureteroscop","injury","post"),P("Remove/change in 3–6 months","remove","change","ถอด","เปลี่ยน")]})
 ),
 interp:"DJ stent",
 summary:["Coils in renal pelvis and bladder","Drain obstructed ureter / after URS","Remove within 3–6 months"]}),

/* ===== OSCE 6 ===== */
Co({page:6,orig:"6",topic:"inst",sub:"Surgical instruments",img:["mo6_i3","mo6_i5","mo6_i4","mo6_i2","mo6_i6"],title:"Identify instruments — retractor, scissors, clamp, mesh, drain",
 stem:`Name each item (pictures 1–5 in order) and state its use.`,
 gray:"6. นี่คืออะไร ใช้ทำอะไร (รูป retractor, กรรไกร, clamp, mesh, drain)",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Names and uses.",5,{tags:["inst"],ans:"1. <b>Army-Navy retractor</b> — ดึงรั้งชั้นผิว/subcutaneous ในแผลเล็ก · 2. <b>Curved Mayo scissors</b> — ตัดเนื้อเยื่อหนา fascia (straight Mayo ตัดไหม) · 3. <b>Allis tissue forceps</b> — จับเนื้อเยื่อ/fascia/ขอบ bowel ที่จะตัด (มีฟัน 4×5 จึงบาดเนื้อเยื่อ; Babcock สำหรับเนื้อเยื่อบอบบาง) · 4. <b>Polypropylene mesh</b> — เสริมความแข็งแรงในการซ่อม hernia (Lichtenstein, ventral hernia) · 5. <b>Closed suction drain (Jackson-Pratt, grenade/bulb)</b> — ระบายเลือด/น้ำเหลืองใต้แผล เช่น หลัง mastectomy, thyroidectomy",rubric:"1/ชิ้น",pts:[CR(P("Army-Navy retractor","army","navy")),P("Mayo scissors","mayo","scissor"),P("Allis forceps","allis"),CR(P("Mesh for hernia repair","mesh","hernia")),CR(P("Closed suction (Jackson-Pratt) drain","jackson","jp","closed suction","grenade","bulb"))]})
 ),
 interp:"Instruments",
 summary:["Allis has teeth; Babcock is atraumatic","Mesh = tension-free hernia repair","JP = closed suction drain"]}),

/* ===== OSCE 7 ===== */
Co({page:6,orig:"7",topic:"inst",sub:"Tubes",img:["mo6_i8","mo6_i7"],title:"Identify — chest drain with trocar and nasogastric tube",
 stem:`Name each item (pictures 1–2) and state its use.`,
 gray:"7. นี่คืออะไร ใช้ทำอะไร (รูป chest drain มี trocar, สายยางใสปลายแดง)",
 notes:"ไม่มีไฟล์เฉลย · รูป 2 อ่านเป็น NG/feeding tube",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("7.1 Names and uses.",4,{tags:["inst"],ans:"1. <b>Chest drain (thoracic catheter) with trocar</b> — มีเส้นทึบรังสีและรูข้าง ใช้ระบาย pneumothorax/hemothorax/empyema ต่อกับ underwater seal (ปัจจุบันแนะนำใส่แบบ blunt dissection ไม่ใช้ trocar ดัน) · 2. <b>Nasogastric tube</b> — decompression ใน bowel obstruction/ileus, ให้อาหาร/ยา, ล้างท้อง",rubric:"1/ประเด็น",pts:[CR(P("Chest drain / thoracic catheter","chest","thorac","icd","intercostal")),P("Use: pneumothorax, hemothorax with underwater seal","pneumothorax","hemothorax","underwater","pleura"),CR(P("Nasogastric tube","ng","nasogastric","feeding")),P("Use: decompression or feeding","decompress","feed","อาหาร")]})
 ),
 interp:"Tubes",
 summary:["Chest drain → underwater seal","Avoid trocar insertion — blunt dissection","NG: decompression, feeding"]}),

/* ===== OSCE 8 ===== */
Co({page:6,orig:"8",topic:"spot",sub:"Uro/Genital",img:["mo6_i9"],title:"Diagnosis and management — swollen glans",
 stem:`Give the diagnosis and management.`,
 gray:"8. Dx + management (รูป glans บวมมีวงรัด)",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Paraphimosis</b>",rubric:"ได้",pts:[CR(P("Paraphimosis","paraphimosis"))]}),
  B("8.2 Management.",4,{tags:["spot"],ans:"Analgesia/penile block · ลดบวม (บีบกด glans, ice, sugar, puncture) · <b>manual reduction</b> · ไม่สำเร็จ → <b>dorsal slit</b> · ต่อมา <b>circumcision</b>",rubric:"1/ประเด็น",pts:[P("Analgesia","block","analges","ยาชา"),P("Reduce edema","compress","edema","บวม"),CR(P("Manual reduction","manual","reduc")),CR(P("Dorsal slit","dorsal slit")),P("Circumcision","circumcis")]})
 ),
 interp:"Paraphimosis",
 summary:["Urologic emergency","Manual reduction → dorsal slit","Elective circumcision"]}),

/* ===== OSCE 9 ===== */
Co({page:6,orig:"9",topic:"inst",sub:"Suture materials",title:"Suture materials",
 stem:`Suture packets are shown. Name each suture, its type, and a typical use.`,
 gray:"9. ออกเรื่องไหม ก็ตรงแอค ไปท่องซะ",flag:NOIMG,imgAlt:"ซองไหมหลายชนิด",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์บอกเพียงว่าออกเรื่องไหมตรงแอค",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("9.1 Sutures and uses.",6,{tags:["inst"],ans:"<b>Vicryl (polyglactin)</b> absorbable braided — ผูกเส้นเลือด, เย็บ subcutaneous, ลำไส้ชั้นใน · <b>PDS</b> absorbable monofilament — ปิด fascia, ลำไส้ · <b>Monocryl</b> absorbable monofilament — subcuticular · <b>Chromic catgut</b> — mucosa, ฝีเย็บ · <b>Silk</b> non-absorbable braided — ผูก, ยึดท่อระบาย · <b>Nylon</b> non-absorbable monofilament — เย็บผิวหนัง · <b>Prolene</b> non-absorbable monofilament — vascular anastomosis, hernia mesh, fascia",rubric:"1/ชนิด",pts:[CR(P("Vicryl: absorbable braided","vicryl","polyglactin")),P("PDS or Monocryl: absorbable monofilament","pds","monocryl"),P("Chromic catgut","catgut","chromic"),P("Silk: non-absorbable braided","silk"),CR(P("Nylon: skin","nylon")),CR(P("Prolene: vascular, hernia","prolene","polypropylene"))]})
 ),
 interp:"Sutures",
 summary:["Absorbable: Vicryl, PDS, Monocryl, catgut","Non-absorbable: silk, nylon, Prolene","Prolene for vascular anastomosis"]}),

/* ===== OSCE 10 ===== */
Co({page:6,orig:"10",topic:"img",sub:"Mammogram",title:"Read mammogram and breast ultrasound",
 stem:`A mammogram and a breast ultrasound are shown.<br>Describe the findings, give the BI-RADS category, and the next step.`,
 gray:"10. อ่านผล Mammogram+US",flag:NOIMG,imgAlt:"Mammogram CC/MLO มีก้อนขอบไม่เรียบ และ US ก้อน hypoechoic taller-than-wide",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูป — เฉลยตัวอย่างเป็นก้อนสงสัยมะเร็ง",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 Findings and next step.",6,{tags:["img"],ans:"<b>Mammogram</b>: view CC/MLO, ตำแหน่ง, mass ขอบ <b>spiculated/irregular</b>, high density, microcalcification · <b>US</b>: <b>hypoechoic, irregular, taller-than-wide, posterior acoustic shadowing</b>, angular margin (เทียบ benign: oval, circumscribed, wider-than-tall, posterior enhancement) · <b>BI-RADS 4–5</b> → <b>core needle biopsy</b> (US-guided) · BI-RADS 3 → follow-up 6 เดือน",rubric:"1/ประเด็น",pts:[P("Mammogram views CC and MLO","cc","mlo"),CR(P("Suspicious mass margin","spicul","irregular")),P("US: hypoechoic, taller than wide, shadowing","hypoecho","taller","shadow"),CR(P("BI-RADS category","bi-rads","birads")),CR(P("Core needle biopsy","core","biopsy"))]})
 ),
 interp:"MMG + US",
 summary:["Malignant US: irregular, taller-than-wide, shadowing","BI-RADS 4–5 → core biopsy","BI-RADS 3 → 6-month follow-up"]}),

/* ===== OSCE 11 ===== */
Co({page:7,orig:"11",topic:"img",sub:"Colorectal",img:["mo7_i1"],title:"Read this study — barium enema",
 stem:`Read this study.`,
 gray:"11. อ่านผลสิ่งนี้ (รูป barium enema)",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("11.1 Interpretation.",4,{tags:["img"],ans:"<b>Double-contrast barium enema</b> · มี <b>outpouchings หลายอันที่ยื่นออกนอกผนังลำไส้ใหญ่</b> (sigmoid/descending colon) → <b>colonic diverticulosis</b> · ไม่เห็น apple-core lesion · ข้อควรระวัง: ห้ามทำ barium enema ใน acute diverticulitis (ใช้ CT)",rubric:"1/ประเด็น",pts:[CR(P("Barium enema","barium","enema")),P("Multiple outpouchings","outpouch","sac","pouch"),CR(P("Diverticulosis","diverticul")),P("CT in acute diverticulitis","ct","acute")]})
 ),
 interp:"Diverticulosis",
 summary:["Barium-filled outpouchings = diverticula","Left colon in West, right in Asia","Acute diverticulitis → CT, not barium"]}),

/* ===== OSCE 12 ===== */
Co({page:7,orig:"12",topic:"pe",sub:"Prostate",ex:1,proc:1,title:"Digital rectal examination of the prostate on a model",
 stem:`Gloves and a DRE model are provided (no examiner observes the procedure).<br>Describe the prostate, give the diagnosis, and the next management.`,
 gray:"12. ให้ถุงมือกับหุ่น DRE มา แต่ไม่มีอาจารย์คุม PR บรรยายลักษณะ prostate (ถาม describe, diagnosis, next management)",
 notes:"ไม่มีไฟล์เฉลย · ไม่ทราบลักษณะหุ่น — เฉลยทั้งแบบ BPH และแบบสงสัยมะเร็ง",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("12.1 Describe the prostate.",4,{tags:["pe"],ans:"ขนาด (ปกติ ~2.5–3 ซม. ≈ walnut / ประมาณ g) · ผิว <b>smooth หรือ nodular</b> · consistency <b>rubbery (BPH) หรือ hard/stony (CA)</b> · <b>median sulcus</b> คลำได้หรือหาย · tenderness · mobility ของ rectal mucosa · ขอบเขต lateral lobe",rubric:"1/ประเด็น",pts:[CR(P("Size","size","ขนาด","enlarg","gram")),P("Surface smooth or nodular","smooth","nodul","surface"),CR(P("Consistency","rubbery","hard","firm","consist")),P("Median sulcus","sulcus"),P("Tenderness","tender")]}),
  B("12.2 Diagnosis and next management.",4,{tags:["pe"],ans:"โต สม่ำเสมอ rubbery sulcus ยังมี → <b>BPH</b>: IPSS, UA, Cr, PSA, U/S (PVR), uroflow → alpha-blocker ± 5-ARI · แข็ง เป็นปุ่ม sulcus หาย → <b>สงสัย carcinoma of prostate</b>: <b>PSA</b> + <b>MRI prostate → TRUS-guided biopsy</b>",rubric:"1/ประเด็น",pts:[CR(P("BPH or carcinoma of prostate","bph","benign","carcinoma","cancer")),P("PSA","psa"),CR(P("Biopsy if suspicious","biopsy","trus","mri")),P("BPH workup and treatment","ipss","alpha","uroflow","pvr")]})
 ),
 interp:"DRE prostate",
 summary:["BPH: smooth, rubbery, sulcus present","CA: hard, nodular, sulcus obliterated","Suspicious → PSA, MRI, biopsy"]}),

/* ===== MEQ ===== */
SA({page:6,orig:"MEQ 1",num:"SA 1",sub:"Hepatobiliary",img:["mm6_i1","mm6_i2"],title:"Short answer — laparoscopic cholecystectomy",
 stem:`1. What organ is shown in the picture?<br>2. What is inside it?<br>3. What operation was done, and what are the indications?`,
 gray:"MEQ 1 ในภาพคืออวัยวะอะไร ข้างในคืออะไร ผ่าตัดอะไร, อะไรคือ indication ในการทำ",
 notes:"ไม่มีเฉลยในไฟล์ (ส่วนนี้ไม่มีคีย์ลายมือ)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Organ and contents.",2,{tags:["spot"],ans:"<b>Gallbladder</b> (เปิดออก) มี <b>gallstones</b> หลายก้อน (pigment/mixed stones)",rubric:"1/ประเด็น",pts:[CR(P("Gallbladder","gallbladder","ถุงน้ำดี")),CR(P("Gallstones","stone","นิ่ว"))]}),
  B("1.2 Operation and indications.",4,{tags:["spot"],ans:"<b>Laparoscopic cholecystectomy</b> · indication: <b>symptomatic cholelithiasis</b> (biliary colic), <b>acute cholecystitis</b>, หลัง gallstone pancreatitis/CBD stone (หลังเคลียร์ CBD), GB polyp ≥1 ซม., porcelain GB · asymptomatic stone ผ่าในกลุ่มเสี่ยง (stone >3 ซม., sickle cell)",rubric:"1/ประเด็น",pts:[CR(P("Laparoscopic cholecystectomy","cholecystectomy","lap chole")),CR(P("Symptomatic gallstones / biliary colic","symptom","colic")),P("Acute cholecystitis","cholecystitis"),P("Gallstone pancreatitis or CBD stone","pancreatitis","cbd","choledocho"),P("Polyp or porcelain GB","polyp","porcelain")]})
 ),
 interp:"Lap chole",
 summary:["Symptomatic gallstones → lap chole","Also after gallstone pancreatitis","Polyp ≥1 cm, porcelain GB"]}),

SA({page:6,orig:"MEQ 2",num:"SA 2",sub:"Pediatric surgery",img:["mm6_i3"],title:"Short answer — umbilical swelling in a child",
 stem:`Give the diagnosis and management.`,
 gray:"MEQ 2 Dx Mx (รูปก้อนที่สะดือเด็ก)",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Umbilical hernia</b>",rubric:"ได้",pts:[CR(P("Umbilical hernia","umbilical hernia"))]}),
  B("2.2 Management.",3,{tags:["spot"],ans:"ส่วนใหญ่<b>ปิดเองได้</b> → <b>observe ถึงอายุ 4–5 ปี</b> · ผ่าตัด (herniorrhaphy) ถ้า: ไม่ปิดเมื่อ 4–5 ปี, <b>defect >1.5–2 ซม.</b> หลังอายุ 2 ปี, incarceration/strangulation · ไม่ต้องใช้เหรียญ/ผ้ารัด",rubric:"1/ประเด็น",pts:[CR(P("Observe — most close spontaneously","observe","spontan","ปิดเอง")),CR(P("Surgery if persists after 4–5 years","4","5 ปี","persist")),P("Large defect or incarceration","incarcer","strangul","large","1.5","2 cm")]})
 ),
 interp:"Umbilical hernia",
 summary:["Most close by 4–5 years","Operate if persistent, large, or incarcerated","No strapping or coins"]}),

SA({page:6,orig:"MEQ 3",num:"SA 3",sub:"Burn",img:["mm6_i4"],title:"Short answer — burn of trunk and arm",
 stem:`Give the diagnosis and management.`,
 gray:"MEQ 3 Dx Mx (รูปแผลไหม้ลำตัวและแขน มีหนังลอก)",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่ทราบน้ำหนักผู้ป่วย — เฉลยหลักการ",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("3.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Partial-thickness (second-degree) burn</b> ที่ลำตัวและแขน (แดง ชื้น ผิวลอก/blister) ประเมิน <b>%TBSA</b> ด้วย rule of nines",rubric:"1/ประเด็น",pts:[CR(P("Partial thickness (second degree) burn","partial","second","2nd")),P("Estimate %TBSA","tbsa","rule of nine")]}),
  B("3.2 Management.",5,{tags:["spot"],ans:"<b>Primary survey ABCDE</b>, หยุดกระบวนการไหม้, ประเมิน inhalation injury · <b>Fluid resuscitation (Parkland) 4 ml × kg × %TBSA</b> ของ RLS ครึ่งแรกใน 8 ชม. นับจากเวลาเกิดเหตุ ถ้า TBSA >15–20% (ผู้ใหญ่) · urine output 0.5 ml/kg/h · analgesia, tetanus prophylaxis, keep warm · ทำแผล (silver sulfadiazine/ dressing) · ส่ง burn unit ตามเกณฑ์",rubric:"1/ประเด็น",pts:[CR(P("ABCDE and airway/inhalation","abc","airway","inhal")),CR(P("Parkland formula","parkland","4 ml","4ml")),P("Urine output target","urine","0.5"),P("Analgesia and tetanus","tetanus","analges","pain"),P("Wound care / topical","silver","dressing","ทำแผล"),P("Refer burn unit","burn unit","refer","ส่งต่อ")]})
 ),
 interp:"Burn",
 summary:["Parkland 4 ml/kg/%TBSA, half in 8 h","UO 0.5 ml/kg/h","Tetanus, analgesia, wound care"]}),

SA({page:6,orig:"MEQ 4",num:"SA 4",sub:"Hepatobiliary",img:["mm6_i5"],title:"Short answer — recurrent hypoglycemia with pancreatic lesion",
 stem:`An elderly patient, previously healthy, keeps collapsing. Examination is normal. DTX 40 mg/dL. A CT is shown (arrow).<br>1. What is the diagnosis?<br>2. Explain the pathophysiology.<br>3. What investigations will you send?`,
 gray:"MEQ 4 ผู้ป่วยสูงอายุสุขภาพดีจู่ๆ ก็วูบไป ตื่นมาตรวจร่างกายก็ปกติดี DTX 40 mg/dl (รูปจริงไม่มีลูกศรให้นะ) Dx อธิบาย pathophysio ด้วย Ix",
 notes:"ไม่มีเฉลยในไฟล์ · ในข้อสอบจริงไม่มีลูกศร",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Insulinoma</b> (enhancing lesion ที่ pancreas)",rubric:"ได้",pts:[CR(P("Insulinoma","insulinoma"))]}),
  B("4.2 Pathophysiology.",2,{tags:["spot"],ans:"Beta-cell tumor หลั่ง <b>insulin อย่างอิสระ ไม่ถูกกดเมื่อน้ำตาลต่ำ</b> → hypoglycemia ขณะอดอาหาร → neuroglycopenia (สับสน หมดสติ) + adrenergic symptoms · <b>Whipple triad</b>: อาการ hypoglycemia, glucose ต่ำ, หายเมื่อให้ glucose",rubric:"1/ประเด็น",pts:[CR(P("Autonomous insulin secretion","autonom","insulin","ไม่ถูกกด")),P("Whipple triad","whipple")]}),
  B("4.3 Investigations.",3,{tags:["spot"],ans:"<b>72-hour supervised fast</b>: ขณะ glucose <55 mg/dL วัด <b>insulin ≥3 µU/mL, C-peptide ≥0.6 ng/mL, proinsulin ≥5 pmol/L</b>, beta-hydroxybutyrate ต่ำ, <b>sulfonylurea screen</b> ลบ · Localize: CT/MRI, <b>endoscopic ultrasound</b>, (Ga-68 DOTA/exendin PET) · Rx: enucleation",rubric:"1/ประเด็น",pts:[CR(P("72-hour fast","72","fast")),CR(P("Insulin and C-peptide","c-peptide","insulin")),P("Proinsulin or sulfonylurea screen","proinsulin","sulfonylurea"),P("Localize: CT/MRI/EUS","eus","endoscopic","mri","ct")]})
 ),
 interp:"Insulinoma",
 summary:["Whipple triad","72-h fast: high insulin + C-peptide when hypoglycemic","EUS to localize; enucleation"]}),

SA({page:7,orig:"MEQ 5",num:"SA 5",sub:"Uro/Genital",img:["mm7_i1"],title:"Short answer — mass at the urethral meatus in a girl",
 stem:`Give the diagnosis and management.`,
 gray:"MEQ 5 Dx Mx (รูปก้อนสีม่วงคล้ำยื่นที่ introitus มี catheter ในรูเปิด)",
 notes:"ไม่มีเฉลยในไฟล์ · Claude อ่านรูปเป็น prolapsed ectopic ureterocele (ddx urethral prolapse)",opinion:"ความมั่นใจต่ำ",
 parts:S(
  B("5.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Prolapsed (ectopic) ureterocele</b> — ก้อนกลมสีม่วงยื่นออกมา แยกจากรูเปิดท่อปัสสาวะที่ใส่ catheter ไว้ · ddx <b>urethral prolapse</b> (ก้อนรูปโดนัทรอบรูท่อปัสสาวะ), sarcoma botryoides",rubric:"1/ประเด็น",pts:[CR(P("Prolapsed ureterocele","ureterocele")),P("Urethral prolapse","urethral prolapse","prolapse")]}),
  B("5.2 Management.",3,{tags:["spot"],ans:"Ureterocele: U/S KUB (duplex kidney), VCUG, renal scan → <b>endoscopic incision/puncture</b> ± ต่อมา reconstruction (upper pole heminephrectomy/ ureteral reimplant) · Urethral prolapse: sitz bath + topical estrogen, ผ่าตัด excision ถ้า necrosis/ไม่ดีขึ้น",rubric:"1/ประเด็น",pts:[P("Imaging: U/S, VCUG","u/s","ultrasound","vcug"),CR(P("Endoscopic incision of ureterocele","endoscop","incision","puncture")),P("Urethral prolapse: estrogen, sitz bath","estrogen","sitz")]})
 ),
 interp:"Ureterocele",
 summary:["Prolapsing mass separate from catheterized urethra → ureterocele","Associated duplex kidney upper pole","Endoscopic incision"]}),

SA({page:7,orig:"MEQ 6",num:"SA 6",sub:"Plastic",img:["mm7_i2"],title:"Short answer — cleft palate",
 stem:`1. What is the diagnosis?<br>2. What is the management?<br>3. At what age is it treated, and why?`,
 gray:"MEQ 6 Dx MX Age for Mx and why?",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Cleft palate</b> (secondary palate, hard + soft)",rubric:"ได้",pts:[CR(P("Cleft palate","cleft palate","palate"))]}),
  B("6.2 Management.",3,{tags:["spot"],ans:"<b>Multidisciplinary cleft team</b> · feeding (special bottle, upright) · ตรวจหู (OME → tympanostomy tube) · <b>palatoplasty</b> · speech therapy · alveolar bone graft (7–11 ปี) · orthodontic",rubric:"1/ประเด็น",pts:[P("Cleft team","team"),P("Feeding","feed","นม"),CR(P("Palatoplasty","palatoplasty","repair")),P("Speech therapy and ear care","speech","ear","หู")]}),
  B("6.3 Age and reason.",2,{tags:["spot"],ans:"<b>9–12 เดือน (ก่อน 18 เดือน)</b> — ก่อนเริ่มพูด เพื่อพัฒนาการพูดปกติ (ลด velopharyngeal insufficiency) และไม่เร็วเกินจนกระทบการเจริญของ maxilla",rubric:"1/ประเด็น",pts:[CR(P("9–12 months","9","12","1 year","1 ปี")),CR(P("Before speech development","speech","พูด"))]})
 ),
 interp:"Cleft palate",
 summary:["Palatoplasty 9–12 months","Before speech, balance with maxillary growth","Watch for otitis media with effusion"]}),

SA({page:7,orig:"MEQ 7",num:"SA 7",sub:"Others",img:["mm7_i3"],title:"Short answer — barium swallow",
 stem:`1. What is this investigation?<br>2. Describe the lesion.<br>3. What is the diagnosis?`,
 gray:"MEQ 7 นี่คือ investigation อะไร บรรยาย lesion Dx",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("7.1 Investigation and description.",3,{tags:["spot"],ans:"<b>Barium swallow (esophagogram)</b> · หลอดอาหารขยาย ปลายล่างตีบเรียวเรียบ แบบ <b>bird's beak</b> ที่ gastroesophageal junction · ขอบเรียบ ไม่มี shouldering/mucosal destruction",rubric:"1/ประเด็น",pts:[CR(P("Barium swallow","barium","esophagogram","swallow")),CR(P("Smooth tapering distal esophagus (bird's beak)","bird","taper","beak")),P("Dilated esophagus","dilat")]}),
  B("7.2 Diagnosis.",2,{tags:["spot"],ans:"<b>Achalasia</b> (ddx pseudoachalasia จากมะเร็ง GE junction — ถ้าขอบไม่เรียบ/shouldering) · ยืนยันด้วย <b>esophageal manometry</b> และ EGD",rubric:"1/ประเด็น",pts:[CR(P("Achalasia","achalasia")),P("Manometry","manometr")]})
 ),
 interp:"Achalasia",
 summary:["Bird's beak on barium swallow","Confirm with manometry + EGD","Rx: Heller myotomy, POEM, pneumatic dilatation"]}),

SA({page:7,orig:"MEQ 8",num:"SA 8",sub:"Others",img:["mm7_i4"],title:"Short answer — dark fingertips",
 stem:`Give the diagnosis and management.`,
 gray:"MEQ 8 Dx Mx (รูปปลายนิ้วมือหลายนิ้วดำคล้ำ)",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่มีประวัติ — Claude ให้ digital ischemic gangrene และ ddx",opinion:"ความมั่นใจต่ำ",
 parts:S(
  B("8.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Digital (dry) gangrene/necrosis ของปลายนิ้วหลายนิ้วทั้งสองมือ</b> · สาเหตุที่คิด: <b>frostbite</b> (ถ้ามีประวัติสัมผัสความเย็น), <b>Raynaud phenomenon secondary to systemic sclerosis</b>, <b>Buerger disease</b> (ชายสูบบุหรี่), emboli/vasculitis",rubric:"1/ประเด็น",pts:[CR(P("Digital gangrene / necrosis","gangren","necros","ischem")),P("Frostbite, Raynaud/SSc, Buerger","frostbite","raynaud","buerger","scleroder")]}),
  B("8.2 Management.",3,{tags:["spot"],ans:"หาสาเหตุ (ANA, anti-Scl-70, echo, upper extremity Doppler) · <b>หยุดบุหรี่</b> หลีกเลี่ยงความเย็น · ยาขยายหลอดเลือด (CCB เช่น nifedipine, prostacyclin/iloprost) · frostbite: <b>rapid rewarming ใน 37–39 °C</b> · ดูแลแผล ป้องกันติดเชื้อ · รอ demarcation แล้วค่อย <b>amputation</b> ส่วนที่ตาย",rubric:"1/ประเด็น",pts:[P("Find the cause","ana","doppler","investig"),CR(P("Stop smoking, avoid cold","smok","บุหรี่","cold","เย็น")),P("Vasodilator","nifedipine","ccb","iloprost","vasodilat"),P("Rewarming for frostbite","rewarm"),CR(P("Await demarcation then amputate","demarcat","amput"))]})
 ),
 interp:"Digital gangrene",
 summary:["Dry gangrene: wait for demarcation","Stop smoking, vasodilator","Frostbite: rapid rewarming 37–39 °C"]}),

SA({page:8,orig:"MEQ 9",num:"SA 9",sub:"Anorectal",img:["mm8_i1"],title:"Short answer — anal operation",
 stem:`1. What is the left forceps holding?<br>2. What is the diagnosis?<br>3. What is the definitive management?`,
 gray:"MEQ 9 Forceps อันซ้ายคีบอะไรอยู่ Dx Definitive Mx",
 notes:"ไม่มีเฉลยในไฟล์ · Claude อ่านรูปเป็น fistula probe ผ่าน tract ของ fistula-in-ano",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("9.1 What is held.",2,{tags:["spot"],ans:"<b>Fistula probe</b> ที่สอดผ่าน tract จาก external opening ไป internal opening (± seton/ไหมที่ร้อยตาม probe)",rubric:"ได้",pts:[CR(P("Fistula probe / seton","probe","seton"))]}),
  B("9.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Fistula-in-ano</b> (anal fistula)",rubric:"ได้",pts:[CR(P("Anal fistula","fistula"))]}),
  B("9.3 Definitive management.",3,{tags:["spot"],ans:"<b>Low (simple) fistula → fistulotomy</b> (lay open) · <b>High/complex</b> (ผ่าน sphincter มาก) → <b>seton</b> (cutting/draining), LIFT, advancement flap · Goodsall rule หา internal opening",rubric:"1/ประเด็น",pts:[CR(P("Fistulotomy for low fistula","fistulotomy","lay open")),CR(P("Seton or LIFT for high fistula","seton","lift","flap")),P("Goodsall rule","goodsall")]})
 ),
 interp:"Fistula-in-ano",
 summary:["Low → fistulotomy","High/complex → seton, LIFT, flap","Goodsall rule"]}),

SA({page:8,orig:"MEQ 10",num:"SA 10",sub:"Colorectal",img:["mm8_i2","mm8_i3"],title:"Short answer — colonoscopy",
 stem:`1. What is this investigation?<br>2. Give the indications.<br>3. What bowel preparation is required before it (name 2 drugs)?`,
 gray:"MEQ 10 นี่คือ Investigation อะไร Indication ในการทำ ก่อนมาทำอันนี้ต้องเตรียมตัวด้วยการกินยาอะไร (บอกมาสองชื่อ)",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("10.1 Investigation and indications.",4,{tags:["spot"],ans:"<b>Colonoscopy</b> · indications: <b>lower GI bleeding</b>/positive FIT, <b>เปลี่ยนนิสัยการขับถ่าย</b>, iron deficiency anemia, chronic diarrhea, <b>CRC screening</b> (อายุ ≥45–50 ปี หรือประวัติครอบครัว), surveillance หลัง polypectomy/CRC, IBD · therapeutic: polypectomy, หยุดเลือด, decompress sigmoid volvulus",rubric:"1/ประเด็น",pts:[CR(P("Colonoscopy","colonoscop")),P("Lower GI bleeding","bleed","เลือด"),P("Change in bowel habit or anemia","bowel habit","anemia","ขับถ่าย"),CR(P("CRC screening/surveillance","screen","surveil")),P("Therapeutic polypectomy","polypectomy","therapeutic")]}),
  B("10.2 Bowel preparation drugs.",2,{tags:["spot"],ans:"<b>Polyethylene glycol (PEG) electrolyte solution</b> 2–4 L split dose · <b>Sodium phosphate</b> (ระวังไตวาย) / <b>sodium picosulfate + magnesium citrate</b> · bisacodyl · อาหาร low-residue 1–2 วันก่อน",rubric:"1/ชื่อ",pts:[CR(P("Polyethylene glycol","peg","polyethylene")),P("Sodium phosphate, picosulfate or bisacodyl","phosphate","picosulfate","bisacodyl","fleet"),]})
 ),
 interp:"Colonoscopy",
 summary:["Indications: bleeding, bowel habit change, screening","Prep: PEG split dose","Sodium phosphate — caution in CKD"]}),

SA({page:8,orig:"MEQ 11",num:"SA 11",sub:"Neuro",img:["mm8_i4","mm8_i5","mm8_i6"],title:"Short answer — motor testing and root level",
 stem:`For each picture, name the muscle tested and the spinal cord level that supplies it.`,
 gray:"MEQ 11 บอกชื่อ muscle ที่ตรวจ กับ ระดับ spinal cord ที่ส่ง nerve มาเลี้ยง (รูป 3 รูป)",
 notes:"ไม่มีเฉลยในไฟล์ · รูป 1 อ่านไม่ชัด — Claude ตีความเป็นการตรวจงอศอก",opinion:"ความมั่นใจต่ำ (รูป 1), ปานกลาง (รูป 2–3)",
 parts:S(
  B("11.1 Muscle and level.",6,{tags:["spot"],ans:"1. <b>Elbow flexion — biceps brachii, C5–C6</b> (musculocutaneous n.) · 2. <b>Knee extension — quadriceps femoris, L3–L4</b> (femoral n.) · 3. <b>Ankle dorsiflexion — tibialis anterior, L4</b> (deep peroneal n.) และ <b>plantarflexion — gastrocnemius/soleus, S1</b> (tibial n.) · (big toe extension = EHL, L5)",rubric:"1/ประเด็น",pts:[P("Biceps C5–6","biceps","c5","c6"),CR(P("Quadriceps L3–4","quadriceps","l3","l4")),CR(P("Tibialis anterior L4","tibialis","dorsiflex")),CR(P("Gastrocnemius S1","gastrocnem","s1","plantar")),P("EHL L5","ehl","l5","hallucis")]})
 ),
 interp:"Myotomes",
 summary:["Knee extension L3–4","Ankle dorsiflexion L4, big toe extension L5","Plantarflexion S1"]}),

SA({page:8,orig:"MEQ 12",num:"SA 12",sub:"Others",img:["mm8_i7"],title:"Short answer — plain abdominal film with small bowel obstruction",
 stem:`1. What study is this?<br>2. Describe the lesion (arrows).<br>3. What is the diagnosis?<br>4. What is the most common site/cause?`,
 gray:"MEQ 12 นี่คือภาพอะไร บรรยาย lesion Dx M/C cause",
 notes:"ไม่มีเฉลยในไฟล์ · Claude อ่าน: ลูกศรแดง = pneumobilia, ลูกศรขาว = gallstone ใน pelvis, ลูกศรดำ = air-fluid level",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("12.1 Study and description.",3,{tags:["spot"],ans:"<b>Plain abdominal X-ray supine and upright</b> · <b>dilated small bowel loops</b> + <b>multiple air-fluid levels</b> (upright) · <b>air in biliary tree (pneumobilia)</b> · <b>ectopic calcified stone</b> ใน right lower quadrant/pelvis → <b>Rigler triad</b>",rubric:"1/ประเด็น",pts:[CR(P("Dilated small bowel with air-fluid levels","dilat","air-fluid","air fluid","sbo")),CR(P("Pneumobilia","pneumobilia","biliary tree","air in")),P("Ectopic gallstone","stone","นิ่ว")]}),
  B("12.2 Diagnosis and most common.",3,{tags:["spot"],ans:"<b>Gallstone ileus</b> — นิ่วผ่าน <b>cholecystoduodenal fistula</b> ไปอุดที่ <b>terminal ileum (ตำแหน่งที่พบบ่อยที่สุด)</b> · พบบ่อยในหญิงสูงอายุ · (สาเหตุ SBO ที่พบบ่อยที่สุดโดยรวม = adhesion) · Rx: enterolithotomy",rubric:"1/ประเด็น",pts:[CR(P("Gallstone ileus","gallstone ileus")),CR(P("Terminal ileum","terminal ileum","ileum")),P("Cholecystoduodenal fistula","fistula"),P("Enterolithotomy","enterolithotomy")]})
 ),
 interp:"Gallstone ileus",
 summary:["Rigler triad: SBO + pneumobilia + ectopic stone","Impaction at terminal ileum","Rx: enterolithotomy"]}),

SA({page:9,orig:"MEQ 13",num:"SA 13",sub:"Pediatric surgery",img:["mm9_i1"],title:"Short answer — neonatal chest film",
 stem:`Give the diagnosis and management.`,
 gray:"MEQ 13 Dx Mx (CXR ทารก ลำไส้ในทรวงอกซ้าย)",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("13.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Congenital diaphragmatic hernia (left, Bochdalek)</b> — bowel loops ในทรวงอกซ้าย, mediastinum ถูกดันไปขวา, NG tube ขดในทรวงอก",rubric:"1/ประเด็น",pts:[CR(P("Congenital diaphragmatic hernia","diaphragm","cdh","bochdalek")),P("Mediastinal shift","shift","mediast")]}),
  B("13.2 Management.",4,{tags:["spot"],ans:"<b>ห้าม bag-mask ventilation</b> · <b>intubate ทันที</b> · <b>NG/OG decompression</b> · gentle ventilation (permissive hypercapnia) จัดการ <b>pulmonary hypertension</b> (iNO, ECMO) · <b>ผ่าตัดซ่อมแบบ delayed</b> เมื่อ stable",rubric:"1/ประเด็น",pts:[CR(P("Avoid bag-mask, intubate","bag","intubat","mask")),CR(P("NG decompression","ng","og","decompress")),P("Gentle ventilation, treat pulmonary hypertension","gentle","pulmonary hypertension","ino","ecmo"),CR(P("Delayed surgical repair","delay","repair"))]})
 ),
 interp:"CDH",
 summary:["No bag-mask; intubate","NG decompression","Stabilize PHT → delayed repair"]})

);
})();
