(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC MDCU73 Rotate B Surgery" → MDCU73 RoB (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ S73BMO = 73B_MEQOSCE_SubSx_AC_MDCU73_Sx_ALL_R_B.pdf (15 หน้า: Gen Sx MCQ หน้า 2–8 · Subspe MCQ หน้า 9–13 · OSCE หน้า 14 · MEQ หน้า 15) · OSCE 12 สถานี · MEQ 9 ข้อ → sec "Short Answers"
   ไม่มีไฟล์เฉลย — เฉลยโดย Claude ทั้งหมด · ไม่มีรูปในส่วน OSCE/MEQ */
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
const Co=o=>Object.assign({set:"MDCU73",ro:"RoB",file:"S73BMO",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:14,orig:"1",topic:"proc",sub:"Sterile gloving/scrub",ex:1,proc:1,title:"Alcohol hand rub (WHO 7 steps) and sterile gloving",
 stem:`The examiner is observing.<br>1. Perform hand hygiene with alcohol-based hand rub using the WHO 7 steps.<br>2. Put on sterile gloves by the closed or open technique.`,
 gray:"1. ใส่ถุงมือ sterile + ล้างมือ WHO7 ด้วยเจลแอลกอฮอล์",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 WHO hand rub.",5,{tags:["proc"],ans:"ถอดเครื่องประดับ · เจลเต็มอุ้งมือ (~3 mL) · 7 ขั้น: <b>ฝ่ามือถูฝ่ามือ → ฝ่ามือถูหลังมือ สลับ → ถูซอกนิ้ว → หลังนิ้วถูฝ่ามือ (ล็อกนิ้ว) → ถูหัวแม่มือหมุน → ปลายนิ้วถูฝ่ามือ → ถูข้อมือ</b> · 20–30 วินาที · ปล่อยให้แห้งเอง",rubric:"1/ประเด็น",pts:[P("Enough rub to cover hands","3 ml","เต็ม","cover"),CR(P("All 7 steps in order","7","seven","ครบ")),P("Thumbs and fingertips","thumb","fingertip","นิ้วโป้ง","ปลายนิ้ว"),P("Wrists","wrist","ข้อมือ"),P("Air dry 20–30 s","dry","แห้ง","20")]}),
  B("1.2 Sterile gloving.",5,{tags:["proc"],ans:"เปิดซองโดยไม่แตะด้านใน · <b>มือเปล่าแตะได้เฉพาะด้านใน (cuff ที่พับ) ของถุงมือข้างแรก</b> · มือที่ใส่ถุงมือแล้วสอดใต้ cuff (ผิวด้านนอก) ของข้างที่สอง · ไม่ให้ด้านนอกโดนผิว · มือสูงกว่าเอว อยู่หน้าลำตัว · ถ้าปนเปื้อนเปลี่ยนใหม่",rubric:"1/ประเด็น",pts:[P("Open pack without touching inside","open","pack","ซอง"),CR(P("Bare hand touches only the inner cuff","inner","inside","cuff","ด้านใน")),CR(P("Gloved hand under the cuff of the second glove","under","second","ข้างที่สอง")),P("Hands above waist","waist","เอว"),P("Change if contaminated","contaminat","เปลี่ยน")]})
 ),
 interp:"Hand hygiene and gloving",
 summary:["WHO hand rub: 7 steps, 20–30 s","Bare hand touches only inside of glove","Keep hands above the waist"]}),

/* ===== OSCE 2 ===== */
Co({page:14,orig:"2",topic:"hx",sub:"Abdominal pain",ex:1,title:"History taking — acute abdominal pain in a woman",
 stem:`A woman presents with abdominal pain for 6 hours. Take a focused history and give your differential diagnosis.`,
 gray:"2. ซักประวัติปวดท้องผู้หญิง 6 hr PTA (อ.กมล)",
 sp:"หญิง 25 ปี ปวดรอบสะดือ 6 ชั่วโมง แล้วย้ายมาท้องน้อยขวา คลื่นไส้ เบื่ออาหาร ไข้ต่ำ ๆ ประจำเดือนครั้งสุดท้าย 2 สัปดาห์ก่อน มาปกติ ไม่มีตกขาวผิดปกติ ไม่มีถ่ายเหลว ไม่มีปัสสาวะแสบขัด",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์ไม่บอกตำแหน่งปวดหรือคำวินิจฉัย → ตัวอย่าง SP เป็น acute appendicitis",
 opinion:"ความมั่นใจปานกลาง (ไม่ทราบบทของผู้ป่วยจำลอง)",
 parts:S(
  B("2.1 History of pain.",6,{tags:["hx"],ans:"<b>OPQRST</b>: onset, ตำแหน่งเริ่มต้นและการย้าย (shifting pain), ลักษณะ, ร้าวไปที่ไหน, ความรุนแรง, อะไรทำให้ดี/แย่ลง · อาการร่วม: ไข้ คลื่นไส้อาเจียน <b>เบื่ออาหาร</b> ถ่าย ปัสสาวะ",rubric:"1/ประเด็น",pts:[P("Onset and duration","onset","เริ่ม"),CR(P("Site and migration","shift","migrat","ย้าย","ตำแหน่ง")),P("Character and severity","character","ลักษณะ","severity"),P("Radiation","radiat","ร้าว"),P("Anorexia, nausea, vomiting","anorexia","nausea","vomit","อาเจียน","เบื่ออาหาร"),P("Bowel and urinary symptoms","bowel","urin","ถ่าย","ปัสสาวะ")]}),
  B("2.2 Gynecologic history.",4,{tags:["hx"],ans:"<b>LMP</b>, รอบเดือนปกติไหม, <b>โอกาสตั้งครรภ์/การคุมกำเนิด</b>, เลือดออกทางช่องคลอด, ตกขาว, เพศสัมพันธ์ (PID) · ตรวจ <b>urine pregnancy test</b> ทุกราย",rubric:"1/ประเด็น",pts:[CR(P("Last menstrual period","lmp","ประจำเดือน","menstru")),CR(P("Pregnancy possibility or contraception","pregnan","contracep","ตั้งครรภ์","คุม")),P("Vaginal bleeding or discharge","discharge","bleeding","ตกขาว"),P("Sexual history","sexual","เพศสัมพันธ์")]}),
  B("2.3 Differential diagnosis.",4,{tags:["hx"],ans:"<b>Acute appendicitis</b> · <b>ruptured ectopic pregnancy</b> · <b>ovarian torsion</b>/ruptured ovarian cyst/corpus luteum · <b>PID/tubo-ovarian abscess</b> · UTI/ureteric stone · mesenteric adenitis",rubric:"1/โรค",pts:[CR(P("Acute appendicitis","appendic")),CR(P("Ectopic pregnancy","ectopic")),P("Ovarian torsion or cyst","torsion","ovarian","cyst"),P("PID","pid","pelvic inflam","tubo")]})
 ),
 interp:"Abdominal pain in a woman of reproductive age",
 summary:["Always ask LMP and do a pregnancy test","Migration to RLQ + anorexia → appendicitis","Ddx: ectopic, torsion, PID, stone"]}),

/* ===== OSCE 3 ===== */
Co({page:14,orig:"3",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — right upper quadrant pain",
 stem:`A simulated patient has right upper quadrant pain.<br>1. Perform an abdominal examination focused on this complaint.<br>2. Give the most likely diagnosis.`,
 gray:"3. ตรวจร่างกาย ปวดท้องขวาบน (อ.เมธี) + diag",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์ไม่บอกคำวินิจฉัย → ใช้ acute cholecystitis",
 opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("3.1 Examination.",7,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต ล้างมือ เปิดหน้าท้องตั้งแต่ใต้นมถึงขาหนีบ · ดูตาเหลือง · <b>Inspection → auscultation → percussion (liver span) → palpation</b> เริ่มจากจุดที่ไม่เจ็บ light แล้ว deep · <b>Murphy sign</b>: กดใต้ชายโครงขวาให้ผู้ป่วยหายใจเข้าลึก แล้วหยุดหายใจเพราะเจ็บ · คลำตับ ถุงน้ำดี · ตรวจ guarding/rebound",rubric:"1/ประเด็น",pts:[P("Introduce, consent, hand hygiene","introduc","consent","แนะนำ","ล้างมือ"),P("Look for jaundice","jaundice","ตาเหลือง","icter"),P("Correct sequence","inspect","auscult","sequence"),P("Start palpation away from pain","away","จุดที่ไม่เจ็บ","farthest"),CR(P("Murphy sign","murphy")),P("Liver span and palpation","liver","ตับ"),P("Guarding, rebound","guard","rebound")]}),
  B("3.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Acute calculous cholecystitis</b> (Murphy sign positive)",rubric:"ได้",pts:[CR(P("Acute cholecystitis","cholecystitis"))]})
 ),
 interp:"RUQ pain + Murphy sign",
 summary:["Murphy sign: inspiratory arrest on RUQ palpation","Sonographic Murphy more specific","Tokyo guidelines grade severity"]}),

/* ===== OSCE 4 ===== */
Co({page:14,orig:"4",topic:"suture",sub:"Suture & knot",ex:1,proc:1,title:"Vertical mattress suture — two stitches",
 stem:`On a skin pad, place two vertical mattress sutures with instrument ties.`,
 gray:"4. เย็บ vertical mattress 2 stitch (อ.นนท์)",
 notes:"ไม่มีไฟล์เฉลย · ข้อเดียวกับ 73D OSCE 7",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Technique.",6,{tags:["suture"],ans:"จับ needle holder ที่ 1/3–2/3 จากปลายเข็ม · <b>far–far</b>: แทงห่างขอบแผล ~4–8 mm ลึกถึง dermis/subcutis ข้ามไปอีกฝั่งระยะเท่ากัน · <b>near–near</b>: ย้อนกลับแทงใกล้ขอบ ~1–2 mm ตื้นในชั้น dermis · ผูกฝั่งเดียวกับจุดเริ่ม · ขอบแผล<b>เผยอขึ้น (eversion)</b> · instrument tie: รอบแรก 2 รอบ แล้วกลับทิศ (square knot) 3 ปม · ไม่ผูกแน่นจนขาดเลือด · ตัดไหมเหลือ ~5 mm",rubric:"1/ประเด็น",pts:[CR(P("Far–far then near–near","far","near")),P("Bites perpendicular and symmetric","perpendic","symmetr","เท่ากัน"),CR(P("Wound edge eversion","evert","เผยอ")),P("Square knot by instrument tie","square","instrument","knot"),P("Not too tight","tight","แน่น"),P("Cut tails appropriately","tail","cut","ตัด")]})
 ),
 interp:"Vertical mattress",
 summary:["Far–far, near–near","Everts edges, good for lax or thick skin","Square knot with first double throw"]}),

/* ===== OSCE 5 ===== */
Co({page:14,orig:"5",topic:"inst",sub:"Surgical instrument",title:"Surgical instruments — Mayo scissors, Deaver retractor, trocar, Babcock",
 stem:`Several surgical instruments are shown. Name each instrument and state its use.`,
 gray:"5. Mayo scissor, deaver retractor, trocar, Babcock, ... ทำอะไร",
 flag:NOIMG,imgAlt:"Mayo scissors · Deaver retractor · laparoscopic trocar · Babcock forceps (และเครื่องมืออื่นที่ผู้จดจำไม่ได้)",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูปในไฟล์",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Name and use.",8,{tags:["inst"],ans:"<b>Mayo scissors</b>: กรรไกรหนัก ตัดเนื้อเยื่อหนา (fascia) ตรงใช้ตัดไหม · <b>Deaver retractor</b>: retractor ใหญ่โค้งรูปตัว C ดึงผนังหน้าท้อง/อวัยวะในช่องท้องลึก · <b>Trocar</b>: ท่อเจาะผนังหน้าท้องให้เครื่องมือ laparoscopic และกล้องผ่าน มี valve กันลมรั่ว · <b>Babcock forceps</b>: atraumatic forceps ปลายกลมมีช่อง จับลำไส้ ไส้ติ่ง ท่อนำไข่",rubric:"2/เครื่องมือ",pts:[CR(P("Mayo scissors — cut heavy tissue or sutures","mayo")),P("Deaver retractor — deep abdominal retraction","deaver"),P("Trocar — laparoscopic port","trocar","port"),CR(P("Babcock — atraumatic grasp of bowel, appendix","babcock","atraumatic"))]})
 ),
 interp:"Instruments",
 summary:["Mayo: heavy tissue","Metzenbaum: delicate tissue","Babcock: atraumatic · Allis: traumatic","Deaver, Richardson, Army-Navy retractors"]}),

/* ===== OSCE 6 ===== */
Co({page:14,orig:"6",topic:"inst",sub:"Tube/Catheter",title:"Nasogastric tube and chest drain",
 stem:`A nasogastric tube and an intercostal chest drain are shown. State the uses of each.`,
 gray:"6. NG tube, chest drain เอาไว้ทำอะไร",
 flag:NOIMG,imgAlt:"NG tube และ chest tube พร้อม underwater seal",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 NG tube.",4,{tags:["inst"],ans:"<b>Decompression</b> (bowel obstruction, ileus, gastric outlet) · <b>feeding</b>/ให้ยา · <b>gastric lavage</b>/ดูเลือด UGIB · ป้องกัน aspiration · ข้อห้าม: base of skull fracture (ใช้ OG แทน)",rubric:"1/ประเด็น",pts:[CR(P("Decompression","decompress","ระบาย")),P("Feeding or drug","feed","อาหาร","drug"),P("Lavage or UGIB","lavage","ugib","bleed"),P("Contraindication: skull base fracture","skull","basal")]}),
  B("6.2 Chest drain.",4,{tags:["inst"],ans:"ระบาย <b>pneumothorax, hemothorax, pleural effusion/empyema</b>, หลังผ่าตัดทรวงอก · ใส่ที่ <b>4th–5th ICS anterior to midaxillary line</b> (safe triangle) เหนือขอบบนซี่โครง · ต่อ <b>underwater seal</b>",rubric:"1/ประเด็น",pts:[CR(P("Pneumothorax","pneumothorax")),P("Hemothorax","hemothorax"),P("Effusion or empyema","effusion","empyema"),P("Safe triangle, upper rib border","triangle","5th","upper border")]})
 ),
 interp:"Tubes",
 summary:["NG: decompress, feed, lavage","Chest drain: air, blood, fluid, pus","Safe triangle, above the rib"]}),

/* ===== OSCE 7 ===== */
Co({page:14,orig:"7",topic:"inst",sub:"Tube/Catheter",title:"Three-way Foley catheter",
 stem:`A three-way urinary catheter is shown. What is it used for?`,
 gray:"7. 3 way Cath เอาไว้ทำอะไร",
 flag:NOIMG,imgAlt:"Three-way Foley catheter (balloon, drainage, irrigation channels)",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 Use.",4,{tags:["inst"],ans:"มี 3 ช่อง: <b>balloon</b>, <b>drainage</b>, <b>irrigation</b> · ใช้ <b>continuous bladder irrigation</b> ใน gross hematuria/clot retention, หลัง TURP/TURBT · ขนาดใหญ่ (20–24 Fr) ป้องกันลิ่มเลือดอุดตัน",rubric:"1/ประเด็น",pts:[CR(P("Three channels incl. irrigation","irrigat","3 channel","three")),CR(P("Continuous bladder irrigation for hematuria or clots","hematuria","clot","ลิ่มเลือด")),P("After TURP or TURBT","turp","turbt"),P("Large bore","20","22","24","large")]})
 ),
 interp:"3-way Foley",
 summary:["Balloon + drainage + irrigation","Clot retention, post-TURP"]}),

/* ===== OSCE 8 ===== */
Co({page:14,orig:"8",topic:"spot",sub:"Clinical photograph",title:"Slowly growing arm mass for 5 years",
 stem:`A photograph shows a soft mass on the arm that has grown slowly for 5 years.<br>1. What is the diagnosis?<br>2. How would you manage it?`,
 gray:"8. ก้อนที่แขน 5 ปีค่อย ๆ โต diag and management",
 flag:NOIMG,imgAlt:"ก้อนนุ่มใต้ผิวหนังที่แขน ขอบเขตชัด ผิวด้านบนปกติ",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูป → ใช้ lipoma ซึ่งพบบ่อยที่สุด",
 opinion:"ความมั่นใจปานกลาง (ไม่เห็นรูป)",
 parts:S(
  B("8.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Lipoma</b> — ก้อนนุ่ม lobulated ขอบชัด เคลื่อนได้ ไม่ติดผิว slipping sign · ddx sebaceous (epidermoid) cyst (มี punctum), liposarcoma (ก้อนใหญ่ &gt;5 cm, ลึกใต้ fascia, โตเร็ว)",rubric:"ได้",pts:[CR(P("Lipoma","lipoma"))]}),
  B("8.2 Management.",4,{tags:["spot"],ans:"ไม่มีอาการ → สังเกตได้ · ผ่าตัด <b>excision</b> เมื่อมีอาการ/ความสวยงาม/โต · <b>red flags</b> (&gt;5 cm, deep to fascia, โตเร็ว, เจ็บ, แข็ง) → <b>MRI + core biopsy</b> ก่อน เพื่อแยก sarcoma",rubric:"1/ประเด็น",pts:[P("Observe if asymptomatic","observ","สังเกต"),CR(P("Excision","excis","ตัด")),CR(P("Red flags → MRI and biopsy","mri","biopsy","sarcoma","5 cm"))]})
 ),
 interp:"Lipoma",
 summary:["Lipoma: soft, lobulated, slipping sign","Red flags: >5 cm, deep, growing, painful","Sarcoma workup: MRI + core biopsy"]}),

/* ===== OSCE 9 ===== */
Co({page:14,orig:"9",topic:"img",sub:"Mammogram",title:"Mammogram — procedure, view, diagnosis, management",
 stem:`A mammogram is shown.<br>1. What is this investigation and which view is it?<br>2. What is the likely diagnosis?<br>3. What is the next management?`,
 gray:"9. mam, นี่ทำอะไร view อะไร, diag, manage",
 flag:NOIMG,imgAlt:"Mammogram MLO/CC view มีก้อนขอบ spiculated ± microcalcification",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูป → ใช้ภาพ spiculated mass (BI-RADS 5)",
 opinion:"ความมั่นใจปานกลาง (ไม่เห็นรูป)",
 parts:S(
  B("9.1 Investigation and view.",3,{tags:["img"],ans:"<b>Mammography</b> · 2 มุมมาตรฐาน: <b>craniocaudal (CC)</b> และ <b>mediolateral oblique (MLO)</b> — MLO เห็น pectoralis major และ axillary tail",rubric:"ได้",pts:[CR(P("Mammography","mammo")),P("CC view","cc","craniocaudal"),P("MLO view shows pectoralis","mlo","oblique","pectoral")]}),
  B("9.2 Diagnosis.",2,{tags:["img"],ans:"ก้อน <b>spiculated</b> ± pleomorphic microcalcification = <b>suspicious for breast cancer (BI-RADS 5)</b>",rubric:"ได้",pts:[CR(P("Breast cancer, BI-RADS 4–5","cancer","carcinoma","bi-rads 5","birads 5"))]}),
  B("9.3 Management.",3,{tags:["img"],ans:"<b>Core needle biopsy</b> (US/stereotactic guided) → ER, PR, HER2, Ki-67 · staging · MDT: surgery (BCS/mastectomy + SLNB) ± systemic therapy/RT",rubric:"1/ประเด็น",pts:[CR(P("Core needle biopsy","core","biopsy")),P("Receptor status","er","her2","receptor"),P("Surgery plan","mastectomy","bcs","conserv","slnb")]})
 ),
 interp:"Mammogram",
 summary:["Views: CC and MLO","Spiculated mass = BI-RADS 5","Triple assessment: clinical, imaging, core biopsy"]}),

/* ===== OSCE 10 ===== */
Co({page:14,orig:"10",topic:"hx",sub:"Other history",ex:1,title:"History taking and investigation — hematuria",
 stem:`A simulated patient presents with hematuria.<br>1. Take a history.<br>2. What investigations would you send?`,
 gray:"10. Hematuria จง Hx, ส่ง investigate",
 sp:"ชาย 65 ปี ปัสสาวะเป็นเลือดสด ไม่เจ็บ เป็นตลอดสาย 2 ครั้งในสัปดาห์นี้ สูบบุหรี่ 40 pack-year ทำงานโรงงานสีย้อม ไม่มีไข้ ไม่ปวดเอว",
 notes:"ไม่มีไฟล์เฉลย · ตัวอย่าง SP = painless gross hematuria (สงสัย bladder cancer)",
 opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 History.",6,{tags:["hx"],ans:"<b>Gross vs microscopic</b> · <b>painless vs painful</b> · <b>timing: initial (urethra), terminal (bladder neck/prostate), total (bladder/upper tract)</b> · clot และรูปร่างลิ่มเลือด · LUTS, ไข้, ปวดเอว (stone/infection) · <b>risk factors: สูบบุหรี่, สารเคมี (aniline dye)</b>, cyclophosphamide, pelvic RT · ยา anticoagulant · trauma, ออกกำลังกาย, ประจำเดือน, อาหาร/ยาที่ทำปัสสาวะแดง (rifampicin, beet)",rubric:"1/ประเด็น",pts:[CR(P("Painless or painful","painless","pain","เจ็บ")),CR(P("Timing in the stream","initial","terminal","total","ตลอดสาย","ช่วง")),P("Clots","clot","ลิ่มเลือด"),P("LUTS, fever, flank pain","luts","fever","flank","ไข้","เอว"),CR(P("Smoking and occupational exposure","smok","บุหรี่","dye","aniline","occupation")),P("Anticoagulants and drugs","anticoag","warfarin","drug","ยา")]}),
  B("10.2 Investigations.",5,{tags:["hx"],ans:"<b>UA + urine culture</b> (ยืนยัน RBC, แยก UTI) · CBC, BUN/Cr, coagulation · <b>urine cytology</b> · <b>CT urography</b> (upper tract) · <b>cystoscopy</b> (bladder — gold standard)",rubric:"1/ประเด็น",pts:[P("Urinalysis and culture","urinalysis","ua","culture"),P("CBC, creatinine, coagulation","cbc","creatin","coag"),P("Urine cytology","cytology"),CR(P("CT urography","ct urogra","ctu","ct")),CR(P("Cystoscopy","cystoscop"))]})
 ),
 interp:"Hematuria",
 summary:["Painless gross hematuria = urothelial cancer until proven otherwise","Workup: UA, cytology, CTU, cystoscopy","Timing localizes source"]}),

/* ===== OSCE 11 ===== */
Co({page:14,orig:"11",topic:"img",sub:"IVP/KUB",title:"Reading an intravenous pyelogram",
 stem:`An intravenous pyelogram (IVP) is shown. Describe your findings and give the diagnosis.`,
 gray:"11. อ่าน IVP",
 flag:NOIMG,imgAlt:"IVP: hydronephrosis ซ้าย ท่อไตส่วนต้นโป่ง ไม่เห็น contrast ลงถึงส่วนปลาย ร่วมกับเงาทึบในแนวท่อไต",
 notes:"ไม่มีไฟล์เฉลย · ไม่มีรูปและไม่บอกคำวินิจฉัย → ใช้ ureteric stone with hydronephrosis เป็นตัวอย่าง",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีไฟล์เฉลยและไม่มีรูป — ยืนยันจากแหล่งอ้างอิงไม่ได้ว่าฟิล์มจริงเป็นโรคใด คงกรอบการอ่าน IVP (scout → nephrogram → pyelocalyceal → ureter → bladder → post-void) + ตัวอย่าง ureteric stone with hydronephrosis; ปัจจุบัน NCCT/CT urography ใช้แทน IVP (EAU Urolithiasis Guidelines 2025) · ความมั่นใจต่ำ",
 parts:S(
  B("11.1 Systematic reading.",5,{tags:["img"],ans:"ระบุชื่อ วันที่ · <b>KUB/scout film</b> ดู radiopaque stone · ฟิล์มหลังฉีด: ดู <b>nephrogram</b> (ทั้งสองข้างเท่ากันไหม, delayed), <b>pyelocalyceal system</b> (blunting/clubbing = hydronephrosis), ureter (ระดับที่อุดตัน, dilatation เหนือจุดนั้น), bladder (filling defect), post-void",rubric:"1/ประเด็น",pts:[CR(P("Scout film first","scout","kub","plain")),P("Nephrogram symmetry or delay","nephrogram","delay"),CR(P("Calyceal blunting, hydronephrosis","blunt","club","hydroneph")),P("Level of obstruction","level","ureter"),P("Bladder filling defect","bladder","filling defect")]}),
  B("11.2 Diagnosis.",2,{tags:["img"],ans:"ตัวอย่าง: <b>Left ureteric stone with hydronephrosis</b> (delayed nephrogram, dilated system down to the stone)",rubric:"ได้",pts:[P("Ureteric stone with obstruction","stone","calcul","obstruct")]})
 ),
 interp:"IVP",
 summary:["Scout → nephrogram → collecting system → ureter → bladder","Delayed nephrogram = obstruction","CT KUB is now preferred for stones"]}),

/* ===== OSCE 12 ===== */
Co({page:14,orig:"12",topic:"suture",sub:"Suture material",title:"Choice of suture material — appendix, bowel, fascia, skin",
 stem:`Choose the suture material for each task:<br>1. Ligation of the appendiceal base<br>2. Bowel anastomosis<br>3. Fascial closure<br>4. Skin closure`,
 gray:"12. ไหม ออกเป็นตารางเหมือนเดิม: ผูกไส้ติ่ง เย็บไส้ เย็บ fascia เย็บ skin",
 notes:"ไม่มีไฟล์เฉลย · คำตอบยอมรับได้หลายแบบ",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("12.1 Suture table.",8,{tags:["suture"],ans:"1. <b>Appendix base</b>: absorbable — chromic catgut 2-0 หรือ Vicryl 2-0 · 2. <b>Bowel anastomosis</b>: absorbable — Vicryl/PDS 3-0 (± silk 3-0 seromuscular layer) · 3. <b>Fascia</b>: slowly absorbable หรือ non-absorbable monofilament แข็งแรง — <b>PDS loop 1/0</b> หรือ nylon/prolene 1 · 4. <b>Skin</b>: <b>nylon 3-0/4-0</b> (หรือ absorbable subcuticular Monocryl 4-0)",rubric:"2/ข้อ",pts:[CR(P("Appendix: absorbable chromic or Vicryl","chromic","vicryl","absorb")),P("Bowel: Vicryl or PDS 3-0","vicryl","pds","3-0"),CR(P("Fascia: PDS loop or nylon size 1","pds","loop","nylon","prolene")),CR(P("Skin: nylon","nylon","monocryl"))]})
 ),
 interp:"Suture choice",
 summary:["Appendix: absorbable 2-0","Bowel: Vicryl/PDS 3-0","Fascia: looped PDS 1","Skin: nylon 3-0/4-0"]}),

/* ===== MEQ ===== */
SA({page:15,orig:"MEQ 1",num:"SA 1",sub:"Uro/Genital",title:"Short answer — paraphimosis",
 stem:`A boy has a painful, swollen glans with a tight retracted foreskin.<br>1. What is the diagnosis?<br>2. How do you manage it?`,
 gray:"MEQ 1. paraphimosis, dx, manage",flag:NOIMG,imgAlt:"Glans บวม มีวงรัดของหนังหุ้มปลายที่ร่นอยู่หลัง corona",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Paraphimosis</b> — หนังหุ้มปลายที่ร่นไปหลัง glans แล้วดึงกลับไม่ได้ รัดจนบวม (urologic emergency)",rubric:"ได้",pts:[CR(P("Paraphimosis","paraphimosis"))]}),
  B("1.2 Management.",4,{tags:["spot"],ans:"ยาชา (penile block)/analgesia · ลดบวม: <b>บีบกด glans</b>, ice, granulated sugar, puncture technique · <b>manual reduction</b> (ดัน glans เข้า ดึงหนังกลับ) · ล้มเหลว → <b>dorsal slit</b> · ต่อมา <b>elective circumcision</b>",rubric:"1/ประเด็น",pts:[P("Analgesia or penile block","block","analges","ยาชา"),P("Reduce edema","compress","edema","บวม","sugar","ice"),CR(P("Manual reduction","manual","reduc","ดัน")),CR(P("Dorsal slit if failed","dorsal slit")),P("Later circumcision","circumcis")]})
 ),
 interp:"Paraphimosis",
 summary:["Emergency: risk of glans ischemia","Compress → manual reduction → dorsal slit","Circumcision later"]}),
SA({page:15,orig:"MEQ 2",num:"SA 2",sub:"Pediatric surgery",title:"Short answer — gastroschisis",
 stem:`A newborn has bowel protruding through a defect to the right of the umbilicus with no covering sac.<br>1. What is the diagnosis?<br>2. What anomaly is commonly associated?<br>3. How do you manage it?`,
 gray:"MEQ 2. Gastrochisis, dx, associated anomaly?, manage",flag:NOIMG,imgAlt:"ลำไส้ไม่มีถุงหุ้ม ออกทางขวาของสายสะดือ",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Gastroschisis</b> — defect ทางขวาของ umbilical cord ไม่มี sac",rubric:"ได้",pts:[CR(P("Gastroschisis","gastroschisis"))]}),
  B("2.2 Associated anomaly.",2,{tags:["spot"],ans:"<b>Intestinal atresia</b> (~10–15%) และ malrotation (nonrotation) · chromosomal/cardiac anomaly พบน้อย (ต่างจาก omphalocele)",rubric:"ได้",pts:[CR(P("Intestinal atresia","atresia")),P("Malrotation","malrotat")]}),
  B("2.3 Management.",5,{tags:["spot"],ans:"คลุมลำไส้ด้วย <b>sterile plastic bag/wrap</b> ให้ทารกนอนตะแคงขวา ป้องกัน mesentery บิด · <b>อุ่นร่างกาย</b> · <b>IV fluid</b> (เสียน้ำมาก) · <b>OG decompression</b> · ATB · ผ่าตัด <b>primary closure</b> หรือ <b>silo + staged reduction</b> · TPN จนลำไส้ทำงาน",rubric:"1/ประเด็น",pts:[CR(P("Cover bowel with sterile wrap","wrap","bag","cover","คลุม")),P("Warmth","warm","อุ่น","hypotherm"),CR(P("IV fluid","fluid","iv")),P("Gastric decompression","og","ng","decompress"),CR(P("Primary closure or silo","silo","primary closure","closure")),P("TPN","tpn","parenteral")]})
 ),
 interp:"Gastroschisis",
 summary:["Right of cord, no sac","Associated: intestinal atresia","Omphalocele: sac, chromosomal and cardiac anomalies","Silo or primary closure"]}),
SA({page:15,orig:"MEQ 3",num:"SA 3",sub:"Plastic/Skin/Burn",title:"Short answer — necrotizing fasciitis",
 stem:`A diabetic patient has rapidly spreading painful swelling of the leg with dusky skin, bullae, crepitus and pain out of proportion.<br>1. What is the diagnosis?<br>2. How do you manage it?`,
 gray:"MEQ 3. NF, dx, manage",flag:NOIMG,imgAlt:"ขาบวมแดงคล้ำ มี bullae และผิวหนังตาย",
 notes:"ไม่มีไฟล์เฉลย · ตีความ NF = necrotizing fasciitis",
 opinion:"ความมั่นใจปานกลาง (NF อาจหมายถึงโรคอื่น)",
 parts:S(
  B("3.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Necrotizing fasciitis</b> (ปวดมากเกินสิ่งที่เห็น, bullae, crepitus, skin necrosis, sepsis) · LRINEC score ช่วย แต่ <b>clinical diagnosis</b> สำคัญที่สุด",rubric:"ได้",pts:[CR(P("Necrotizing fasciitis","necrotiz"))]}),
  B("3.2 Management.",5,{tags:["spot"],ans:"<b>Resuscitation</b> (sepsis bundle) · <b>broad-spectrum IV ATB</b>: carbapenem/piperacillin-tazobactam + <b>clindamycin</b> (ลด toxin) + vancomycin (MRSA) · <b>emergency radical surgical debridement</b> จนถึงเนื้อดี · <b>second look ใน 24–48 h</b> · ควบคุมน้ำตาล · reconstruction ภายหลัง (skin graft) · อาจต้อง amputation",rubric:"1/ประเด็น",pts:[P("Resuscitation","resusc","fluid","sepsis"),CR(P("Broad-spectrum ATB with clindamycin","clindamycin","broad","antibiotic","atb")),CR(P("Emergency debridement","debride")),P("Second look","second look","re-look","24"),P("Reconstruction or amputation","graft","reconstruct","amputat")]})
 ),
 interp:"Necrotizing fasciitis",
 summary:["Pain out of proportion, bullae, crepitus","Early radical debridement is key","Clindamycin for toxin suppression","Relook within 24–48 h"]}),
SA({page:15,orig:"MEQ 4",num:"SA 4",sub:"Plastic/Skin/Burn",title:"Short answer — timing of cleft palate repair",
 stem:`A baby has a cleft palate.<br>1. When should the palate be repaired?<br>2. Why at that age?`,
 gray:"MEQ 4. cleft palate, รักษาตอนไหน, ทำไม",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Timing.",2,{tags:["spot"],ans:"<b>Palatoplasty อายุ 9–18 เดือน</b> (ราว 1 ขวบ) · cleft lip ซ่อมก่อนที่ ~3 เดือน (rule of 10)",rubric:"ได้",pts:[CR(P("9–18 months, about 1 year","9","12","18","1 ปี","1 year"))]}),
  B("4.2 Reason.",3,{tags:["spot"],ans:"ให้เสร็จ<b>ก่อนเด็กเริ่มพูด</b> เพื่อให้ velopharyngeal function พัฒนาปกติ ลด <b>VPI/hypernasal speech</b> และ compensatory articulation · ถ้าทำเร็วเกินไป → รบกวนการเจริญของ maxilla (midface hypoplasia) จึงชั่งน้ำหนักระหว่าง speech กับ facial growth",rubric:"1/ประเด็น",pts:[CR(P("Before speech development","speech","พูด")),P("Prevent VPI","vpi","velopharyn","hypernasal"),P("Too early impairs maxillary growth","maxill","growth","midface")]})
 ),
 interp:"Cleft palate timing",
 summary:["Lip ~3 months · palate 9–18 months","Speech vs maxillary growth","Alveolar bone graft 9–11 years"]}),
SA({page:15,orig:"MEQ 5",num:"SA 5",sub:"Ultrasound",title:"Short answer — symptomatic gallstone on ultrasound",
 stem:`A patient with recurrent postprandial right upper quadrant pain has the ultrasound shown, with echogenic foci casting posterior acoustic shadows in the gallbladder.<br>1. What is the diagnosis?<br>2. What advice and treatment do you give?`,
 gray:"MEQ 5. Symptomatic gallstone ให้ USG, dx, advice",flag:NOIMG,imgAlt:"US: echogenic foci ใน gallbladder มี posterior acoustic shadow เลื่อนตามท่า",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Symptomatic cholelithiasis (biliary colic)</b> — echogenic foci + posterior acoustic shadow + เคลื่อนตามท่า",rubric:"ได้",pts:[CR(P("Symptomatic gallstones","gallstone","cholelith","biliary colic"))]}),
  B("5.2 Advice.",4,{tags:["spot"],ans:"แนะนำ <b>elective laparoscopic cholecystectomy</b> เพราะเสี่ยง complication (acute cholecystitis, CBD stone, cholangitis, pancreatitis) · ระหว่างรอ: ลดอาหารมัน · <b>อาการเตือนให้มาทันที</b>: ปวดนาน &gt;6 ชั่วโมง ไข้ ตัวตาเหลือง ปวดร้าวหลัง",rubric:"1/ประเด็น",pts:[CR(P("Elective laparoscopic cholecystectomy","cholecystectomy","lc")),P("Explain complications","complicat","cholangitis","pancreatitis"),P("Low-fat diet","fat","มัน"),CR(P("Warning signs: fever, jaundice, prolonged pain","fever","jaundice","ไข้","เหลือง"))]})
 ),
 interp:"Symptomatic gallstone",
 summary:["Symptomatic → LC","Asymptomatic → usually observe","Return if fever, jaundice, pain >6 h"]}),
SA({page:15,orig:"MEQ 6",num:"SA 6",sub:"Contrast GI study",title:"Short answer — colonic diverticulosis",
 stem:`A barium enema shows multiple outpouchings of the sigmoid colon.<br>1. What is the diagnosis?<br>2. Name two major complications.<br>3. What advice do you give?`,
 gray:"MEQ 6. Diverticulosis, Dx, 2 major complication, advice",flag:NOIMG,imgAlt:"Barium enema: หลาย outpouching ที่ sigmoid",
 notes:"ไม่มีไฟล์เฉลย",opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Sigmoid diverticulosis</b> (false diverticula — mucosa/submucosa ผ่าน muscle ตรงที่ vasa recta แทง)",rubric:"ได้",pts:[CR(P("Diverticulosis","diverticul"))]}),
  B("6.2 Two complications.",2,{tags:["spot"],ans:"<b>Diverticulitis</b> (abscess, perforation, fistula, stricture) และ <b>diverticular bleeding</b>",rubric:"1/ข้อ",pts:[CR(P("Diverticulitis","diverticulitis","perfor","abscess")),CR(P("Bleeding","bleed","เลือด"))]}),
  B("6.3 Advice.",3,{tags:["spot"],ans:"<b>High-fiber diet</b> + น้ำพอ · ออกกำลังกาย ลดน้ำหนัก เลิกบุหรี่ · หลีกเลี่ยง <b>NSAIDs</b>/opioid · ถั่ว เมล็ด ป๊อปคอร์นกินได้ · มาทันทีถ้าปวดท้องน้อยซ้าย ไข้ หรือถ่ายเป็นเลือด",rubric:"1/ประเด็น",pts:[CR(P("High-fiber diet","fiber","fibre","กากใย")),P("Avoid NSAIDs","nsaid"),P("Exercise, stop smoking","exercise","smok","ออกกำลัง"),P("Return if pain, fever, bleeding","fever","bleed","ไข้")]})
 ),
 interp:"Diverticulosis",
 summary:["False diverticula, sigmoid in the West","Complications: diverticulitis, bleeding","High fiber, avoid NSAIDs"]}),
SA({page:15,orig:"MEQ 7",num:"SA 7",sub:"Neuro motor/reflex",title:"Short answer — motor power testing: muscle and root",
 stem:`The examiner tests two movements of the lower limb:<br>1. Knee extension<br>2. Ankle plantar flexion<br>Identify the muscle and main nerve root for each.`,
 gray:"MEQ 7. Motor power test identify muscle and nerve root (ตาม slide อ.พีรพงศ์) • Quadriceps femoris m. L3 • Gastrocnemis m. S1",
 notes:"ไม่มีไฟล์เฉลย · ผู้จดให้คำตอบตาม slide: quadriceps L3, gastrocnemius S1",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 Knee extension.",2,{tags:["spot"],ans:"<b>Quadriceps femoris</b> — femoral nerve, root <b>L3</b> (L2–L4; ตาม slide L3)",rubric:"ได้",pts:[CR(P("Quadriceps femoris","quadriceps")),CR(P("L3","l3","l4"))]}),
  B("7.2 Ankle plantar flexion.",2,{tags:["spot"],ans:"<b>Gastrocnemius</b> (+ soleus) — tibial nerve, root <b>S1</b>",rubric:"ได้",pts:[CR(P("Gastrocnemius","gastrocnem","soleus")),CR(P("S1","s1"))]})
 ),
 interp:"Myotomes",
 summary:["Hip flexion L2 · knee extension L3 · ankle dorsiflexion L4","Big toe extension L5 · plantar flexion S1","Reflexes: knee L4 · ankle S1"]}),
SA({page:15,orig:"MEQ 8",num:"SA 8",sub:"Pediatric surgery",title:"Short answer — acholic stool in an infant",
 stem:`A 6-week-old infant has persistent jaundice, dark urine and acholic (pale) stool.<br>1. Give the differential diagnosis.<br>2. What investigations would you do?<br>3. What is the management of the most important cause?`,
 gray:"MEQ 8. Acholic stool. Diff diag, investigation, management?",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์ไม่บอกอายุ → ตีความเป็นทารก (ข้อสอบ Ped Sx)",
 opinion:"ความมั่นใจปานกลาง (ไม่ทราบอายุผู้ป่วยในโจทย์)",
 parts:S(
  B("8.1 Differential diagnosis.",3,{tags:["spot"],ans:"<b>Biliary atresia</b> · <b>choledochal cyst</b> · neonatal hepatitis (infection: CMV, TORCH) · Alagille syndrome · inspissated bile · metabolic (galactosemia, α1-antitrypsin deficiency)",rubric:"1/โรค",pts:[CR(P("Biliary atresia","biliary atresia")),P("Choledochal cyst","choledochal"),P("Neonatal hepatitis","hepatitis","cmv"),P("Alagille or metabolic","alagille","galactos","antitrypsin")]}),
  B("8.2 Investigations.",4,{tags:["spot"],ans:"<b>Total/direct bilirubin</b> (direct &gt;1 mg/dL), LFT, GGT · <b>ultrasound</b> (triangular cord sign, ไม่เห็น/เล็ก gallbladder, choledochal cyst) · <b>hepatobiliary scintigraphy</b> (ไม่มีการขับลงลำไส้) · <b>intraoperative cholangiography</b> = gold standard ± liver biopsy",rubric:"1/ประเด็น",pts:[CR(P("Direct bilirubin","direct","conjugat")),CR(P("Ultrasound","ultrasound","us")),P("HIDA scan","hida","scintigra"),P("Intraoperative cholangiogram or biopsy","cholangio","biopsy")]}),
  B("8.3 Management.",3,{tags:["spot"],ans:"Biliary atresia → <b>Kasai portoenterostomy ก่อนอายุ 60 วัน</b> · หลังผ่าตัด: ATB ป้องกัน cholangitis, ursodeoxycholic acid, fat-soluble vitamins · ล้มเหลว → <b>liver transplantation</b>",rubric:"1/ประเด็น",pts:[CR(P("Kasai portoenterostomy","kasai","portoenter")),P("Before 60 days","60"),P("Liver transplantation if failure","transplant")]})
 ),
 interp:"Cholestatic jaundice in infancy",
 summary:["Jaundice >2 weeks → check direct bilirubin","Biliary atresia: Kasai before 60 days","Choledochal cyst: excision + hepaticojejunostomy"]}),
SA({page:15,orig:"MEQ 9",num:"SA 9",sub:"Vascular/Ulcer",title:"Short answer — red swollen left arm for 3 days",
 stem:`A patient has a red, warm, swollen and tender left arm for 3 days with fever.<br>1. What is the diagnosis?<br>2. Which body system is involved?<br>3. What are the causes?`,
 gray:"MEQ 9. แขนซ้ายบวมแดงมา 3 วัน: diag? เกิดจากระบบอะไร?, เกิดจากอะไรบ้าง?",
 notes:"ไม่มีไฟล์เฉลย · โจทย์กำกวม → ใช้ cellulitis และให้ ddx upper-extremity DVT และ lymphangitis",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีไฟล์เฉลย โจทย์จดไม่ครบ — คง cellulitis (skin and soft tissue infection; เชื้อหลัก β-hemolytic streptococci ± S. aureus) ตาม IDSA SSTI Guideline 2014 และ DDx upper-extremity DVT, lymphangitis, abscess · ความมั่นใจต่ำ",
 parts:S(
  B("9.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Cellulitis</b> ของแขนซ้าย · ddx: <b>upper-extremity DVT</b> (บวมทั้งแขน ไม่ค่อยแดงร้อน, มี central line/PICC), lymphangitis (เส้นแดงตามแนวน้ำเหลือง), abscess",rubric:"ได้",pts:[CR(P("Cellulitis","cellulitis")),P("Ddx DVT or lymphangitis","dvt","thromb","lymphangitis")]}),
  B("9.2 System involved.",2,{tags:["spot"],ans:"<b>Skin and soft tissue infection</b> (ชั้น dermis/subcutaneous) · ถ้าเป็น DVT = venous system · lymphangitis = lymphatic system",rubric:"ได้",pts:[CR(P("Skin and soft tissue","skin","soft tissue","ผิวหนัง","integument"))]}),
  B("9.3 Causes.",3,{tags:["spot"],ans:"เชื้อ <b>Streptococcus pyogenes (GAS)</b> และ <b>Staphylococcus aureus</b> · ปัจจัยเสี่ยง: แผล/รอยถลอก/แมลงกัด, IV cannula หรือฉีดยา, lymphedema (หลัง axillary dissection), DM, immunocompromised",rubric:"1/ประเด็น",pts:[CR(P("Streptococcus pyogenes","strep")),CR(P("Staphylococcus aureus","staph")),P("Break in skin, IV line","wound","cannula","iv","แผล"),P("Lymphedema, DM","lymphedema","diabet","dm")]})
 ),
 interp:"Red swollen arm",
 summary:["Cellulitis: GAS, S. aureus","Ddx: upper-extremity DVT, lymphangitis, abscess","Post-mastectomy lymphedema predisposes"]})

);
})();
