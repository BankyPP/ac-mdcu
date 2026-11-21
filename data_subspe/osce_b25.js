(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC OSCE Surgery MDCU 74 Rotation A" → MDCU74 RoA (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO74AQ = AC_74A_OSCE_Surgery_MDCU_74_Rotation_A.pdf (8 หน้า) · OSCE 14 สถานี (8, 14 = พัก ไม่นำเข้า) · Short Essay Questions (SEQ) → sec "Short Answers" (orig "SEQ n")
   ไม่มีไฟล์เฉลย — เฉลยโดย Claude ทั้งหมด · รูปในโจทย์ os74a_* */
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
const Co=o=>Object.assign({set:"MDCU74",ro:"RoA",file:"SO74AQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"hx",sub:"Breast",ex:1,title:"History taking — 3-month breast lump",
 stem:`A simulated patient presents with a breast lump for 3 months. The examiner is observing.<br>1. Take a history.`,
 gray:"1. ซักประวัติผู้ป่วยหญิงที่มาด้วยก้อนที่เต้านม 3 เดือน (มีผู้ป่วยจำลองและอาจารย์คุม)",
 sp:"หญิง 48 ปี คลำได้ก้อนเต้านมซ้าย 3 เดือน ไม่เจ็บ โตขึ้นเล็กน้อย ไม่มี nipple discharge ยังมีประจำเดือน menarche 12 ปี บุตร 1 คนอายุ 32 ปี ให้นม 2 เดือน น้าสาวเป็นมะเร็งเต้านม",
 notes:"ไม่มีไฟล์เฉลย · ข้อเดียวกับ 75C OSCE 3 (คนละปี)",
 opinion:"ไม่มีเฉลยในไฟล์ — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("1.1 Breast lump history.",10,{tags:["hx"],ans:"<b>ก้อน</b>: ตำแหน่ง ขนาด อัตราโต เจ็บ สัมพันธ์รอบเดือน · <b>อาการร่วม</b>: nipple discharge/retraction, ผิวเปลี่ยน, ก้อนรักแร้ · <b>metastasis</b>: ปวดกระดูก หอบ น้ำหนักลด · <b>Risk</b>: อายุ, family history (BRCA, ovarian), menarche เร็ว/menopause ช้า, nulliparity/บุตรคนแรกอายุมาก, ไม่ให้นม, OCP/HRT, alcohol, radiation, ประวัติก้อน/biopsy เดิม",rubric:"สัดส่วนตามหมวด",
   pts:[H("Lump",30),CR(P("Site, size, growth, pain","size","โต","pain","site")),P("Cyclical change","menstru","รอบเดือน"),H("Associated",25),P("Nipple discharge/retraction, skin","nipple","discharge","skin"),P("Axillary lump, metastatic symptoms","axill","bone","weight"),H("Risk",45),CR(P("Family history","family","ครอบครัว","brca")),P("Reproductive factors","menarche","menopause","parity","บุตร","breast ?feed"),P("Hormone use","hormone","ocp","hrt")]})
 ),
 interp:"Breast lump history",
 summary:["Triple assessment","Risk factors: estrogen exposure, family history","Red flags: hard fixed mass, skin change"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"inst",sub:"Surgical instrument",title:"Instruments and tubes — name and use",img:["os74a_2a","os74a_2b","os74a_2c","os74a_2d","os74a_2e"],
 stem:`Five items (A–E, shown in the pictures in order) are on the table.<br>1. Name each item.<br>2. Describe its use.`,
 gray:"2. (มีอุปกรณ์จริงวางบนโต๊ะ) A B C D E 2.1 ชื่อของอุปกรณ์ 2.2 การใช้งาน",
 notes:"ไม่มีไฟล์เฉลย · ชื่อตามรูปในไฟล์ (Claude ระบุ): A curved scissors, B NG tube, C Army-Navy retractor, D chest drain, E sponge-holding forceps",
 opinion:"ไม่มีเฉลย — Claude ระบุจากรูป ความมั่นใจปานกลาง (รูป B และ D อาจเป็นสายชนิดอื่น)",
 parts:S(
  B("2.1 Names.",5,{tags:["inst"],ans:"A <b>curved Mayo (Metzenbaum) scissors</b> · B <b>nasogastric tube</b> · C <b>Army-Navy (Parker) retractor</b> · D <b>chest drain (intercostal tube)</b> มีแถบทึบรังสีและขีดบอกระยะ · E <b>sponge-holding (ring) forceps</b>",rubric:"1/ชิ้น",pts:[P("Curved scissors","scissor","mayo","metzenbaum"),P("NG tube","ng","nasogastric"),P("Army-Navy retractor","army","navy","parker","retractor"),P("Chest drain","chest","icd","drain"),P("Sponge-holding forceps","sponge","ring","foerster")]}),
  B("2.2 Uses.",5,{tags:["inst"],ans:"A ตัด/เลาะเนื้อเยื่อ · B decompression, feeding, lavage · C รั้งขอบแผลตื้น (ผิวหนัง/ใต้ผิวหนัง) · D ระบายลม/เลือด/หนองในช่องเยื่อหุ้มปอด · E จับ gauze ทาน้ำยา prep ผิว/ซับเลือด, จับเนื้อเยื่ออ่อน",rubric:"1/ชิ้น",pts:[P("Scissors cut tissue","cut","dissect","ตัด"),P("NG decompression/feeding","decompress","feed"),P("Retract superficial wound","retract","รั้ง"),CR(P("Chest drain for pneumothorax/hemothorax","pneumothorax","hemothorax","pleural")),P("Sponge forceps for skin prep","prep","gauze","sponge")]})
 ),
 interp:"Instruments",
 summary:["Army-Navy: superficial retraction","Sponge forceps: skin prep","Chest drain: safe triangle"]}),

/* ===== OSCE 3 ===== */
Co({page:1,orig:"3",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Hand hygiene, non-sterile gloves and dry dressing",
 stem:`The examiner is observing.<br>1. Perform hand hygiene with alcohol gel while explaining each step aloud, then put on non-sterile gloves.<br>2. Perform a dry dressing on a sutured wound of the arm after excision of a mass. Saline, chlorhexidine, a tray, gauze, cotton balls, tape, and toothed and non-toothed forceps are provided.`,
 gray:"3. แสดงการล้างมืออย่างถูกต้องด้วยเจลแอลกอฮอล์พร้อมพูดอธิบายระหว่างล้างมือ จากนั้นใส่ถุงมือ non-sterile แล้วทำแผลด้วยวิธี dry dressing บนแขนผู้ป่วยที่ได้รับการผ่าตัด excision ก้อนที่แขนและเย็บปิดแผลอยู่ (มีอาจารย์คุม มีแขนจำลอง น้ำเกลือ chlorhexidine ถาดหลุม gauze หลายขนาด สำลี เทป forceps แบบ tooth และ non-tooth)",
 notes:"ไม่มีไฟล์เฉลย · ข้อคล้ายกับ 75D OSCE 5",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Hand rub and gloves.",3,{tags:["proc"],ans:"WHO 6 steps 20–30 วินาที อธิบายระหว่างทำ ปล่อยแห้ง · ใส่ถุงมือ non-sterile",rubric:"ได้",pts:[CR(P("WHO 6 steps","6","six","ฝ่ามือ","thumb","fingertip")),P("Explains aloud, gloves","อธิบาย","explain","glove")]}),
  B("3.2 Dry dressing.",7,{tags:["proc"],ans:"แนะนำตัว อธิบาย · ลอกแผ่นปิดเก่า ประเมินแผล · ใช้ forceps <b>non-tooth</b> จับสำลี/gauze (no-touch) · ใช้ <b>NSS</b> หรือ antiseptic เช็ด<b>จากแผลออกด้านนอก</b> ครั้งเดียวต่อก้อน · ซับแห้ง · ปิด gauze แห้ง ติดเทป · ทิ้งขยะติดเชื้อ ถอดถุงมือ ล้างมือ · นัด/แนะนำ",rubric:"ได้ตามขั้น",pts:[P("Remove old dressing, inspect","inspect","remove","ประเมิน"),CR(P("Clean inside-out, one swab per stroke","outward","inside","ด้านนอก","one","ครั้งเดียว")),P("No-touch with forceps","forcep","no-?touch"),P("Dry gauze, dispose, advise","gauze","dispose","advice","แนะนำ")]})
 ),
 interp:"Dry dressing",
 summary:["Clean to dirty","One swab one stroke","Non-tooth forceps for gauze"]}),

/* ===== OSCE 4 ===== */
Co({page:1,orig:"4",topic:"img",sub:"Clinical photograph",title:"Complication of a diverting loop colostomy",img:["os74a_4"],
 stem:`A patient with colon cancer received concurrent chemoradiotherapy and surgery with a diverting loop colostomy. Afterwards the event in the picture occurred.<br>1. What is the diagnosis?<br>2. What is the initial treatment?<br>3. What is the definitive treatment?`,
 gray:"4. ผู้ป่วยเป็นโรคมะเร็งลำไส้ใหญ่ ได้รับ concurrent chemoradiotherapy และผ่าตัดแล้ว โดยมีการทำ diverting loop colostomy หลังจากนั้นเกิดเหตุการณ์ในรูป 4.1 วินิจฉัย 4.2 การรักษาเบื้องต้น 4.3 การรักษาเฉพาะ",
 notes:"ไม่มีไฟล์เฉลย · รูป = stoma ยื่นยาวออกมามาก (prolapse)",
 opinion:"ไม่มีเฉลย — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("4.1 Diagnosis.",2,{tags:["img"],ans:"<b>Stoma (loop colostomy) prolapse</b>",rubric:"ได้",pts:[CR(P("Stoma prolapse","prolapse"))]}),
  B("4.2 Initial treatment.",3,{tags:["img"],ans:"ประเมินว่า<b>ลำไส้ยังมีชีวิต</b> (สี ชมพู) และไม่อุดตัน · <b>manual reduction</b> ในท่านอนราบ ใช้ cold compress/<b>sugar (osmotic) ลดบวม</b> แล้วดันกลับ · ปรับถุงให้ใหญ่พอ · ถ้า ischemia/incarcerated → ผ่าตัดด่วน",rubric:"ได้",pts:[P("Check viability","viab","สี","ischemi"),CR(P("Manual reduction ± sugar","reduc","sugar","ดันกลับ","น้ำตาล"))]}),
  B("4.3 Definitive treatment.",3,{tags:["img"],ans:"<b>Stoma closure/reversal</b> เมื่อ anastomosis หายดี (ตรวจด้วย contrast enema) — หรือ <b>revise/resite stoma</b> (resect prolapsed segment, fixation) ถ้ายังต้องมี stoma",rubric:"ได้",pts:[CR(P("Stoma reversal or revision","reversal","closure","revis","resite","ปิด"))]})
 ),
 interp:"Stoma prolapse",
 summary:["Loop transverse colostomy prolapse most common","Reduce with sugar, cold","Definitive: closure or revision"]}),

/* ===== OSCE 5 ===== */
Co({page:2,orig:"5",topic:"img",sub:"Acute abdomen series",title:"Plain abdominal film — distension with absent bowel sounds",img:["os74a_5"],
 stem:`A patient has abdominal pain. Examination shows abdominal distension, absent bowel sounds and tympany on percussion. A plain abdominal film is shown.<br>1. Describe the abnormality.<br>2. What is the diagnosis?<br>3. How would you treat it?`,
 gray:"5. ผู้ป่วยมาด้วยอาการปวดท้อง ตรวจร่างกายพบ abdominal distention, absent bowel sounds, tympanic on percussion ส่งตรวจ plain film abdomen ได้รูปตามนี้ 5.1 บรรยายความผิดปกติ 5.2 วินิจฉัย 5.3 ให้การรักษา",
 notes:"ไม่มีไฟล์เฉลย · รูป AXR: ลำไส้ใหญ่ส่วน sigmoid โป่งมากเป็นห่วงรูปตัว U กลับหัวขึ้นไปใต้กะบังลม (coffee bean)",
 opinion:"ไม่มีเฉลย — Claude อ่านภาพว่าเป็น sigmoid volvulus ความมั่นใจปานกลาง",
 parts:S(
  B("5.1 Describe.",3,{tags:["img"],ans:"Large bowel โป่งมาก — <b>inverted U-shaped/ \"coffee bean\" loop</b> จาก pelvis ขึ้นไปใต้กะบังลม (ไม่มี haustra) ลำไส้ส่วนต้นโป่งตาม · ไม่เห็นลมใน rectum ชัด",rubric:"ได้",pts:[CR(P("Massively dilated sigmoid loop, coffee bean","coffee","bean","inverted u","sigmoid")),P("Dilated proximal colon","proximal","colon")]}),
  B("5.2 Diagnosis.",2,{tags:["img"],ans:"<b>Sigmoid volvulus</b>",rubric:"ได้",pts:[CR(P("Sigmoid volvulus","volvulus"))]}),
  B("5.3 Treatment.",4,{tags:["img"],ans:"Resuscitation, NPO, NG, IV fluid, แก้ electrolyte · ไม่มี peritonitis/gangrene → <b>endoscopic (sigmoidoscopic) detorsion + rectal tube</b> · แล้ว <b>elective sigmoidectomy</b> ใน admission เดียวกัน (recurrence สูง) · peritonitis/gangrene/ detorsion ไม่สำเร็จ → <b>emergency Hartmann procedure</b>",rubric:"ได้",pts:[P("Resuscitation","resusc","fluid","npo"),CR(P("Endoscopic detorsion + rectal tube","detors","sigmoidoscop","colonoscop","rectal tube")),P("Elective sigmoidectomy","sigmoidectomy","resection"),P("Hartmann if gangrene/peritonitis","hartmann","gangren","peritonit")]})
 ),
 interp:"Sigmoid volvulus",
 summary:["Coffee bean sign","Endoscopic detorsion then elective resection","Gangrene → Hartmann"]}),

/* ===== OSCE 6 ===== */
Co({page:2,orig:"6",topic:"pe",sub:"Anorectal",ex:1,title:"DRE for rectal bleeding and anoscopic picture",img:["os74a_6"],
 stem:`The examiner is observing.<br>1. Perform a digital rectal examination on a patient (model) with rectal bleeding after defecation, reporting your findings as you go. Explain to the simulated patient and tell him how to lie on the bed.<br>2. Look at the picture from the examination. Describe the abnormality and give the diagnosis.`,
 gray:"6. (มีอาจารย์คุม) 6.1 แสดงการตรวจ digital rectal examination ในผู้ป่วยที่มีเลือดออกทางทวารหนักหลังถ่ายอุจจาระและรายงานผลระหว่างการตรวจไปด้วย (มีผู้ป่วยจำลองสำหรับคุยตอนแรกและให้บอกวิธีนอนบนเตียงตรวจ มีหุ่นจำลองวางอยู่บนเตียง มีถุงมือ เจล ผ้าห่ม) 6.2 ดูรูปประกอบการตรวจ บรรยายความผิดปกติและวินิจฉัย",
 notes:"ไม่มีไฟล์เฉลย · รูป: ก้อนเยื่อบุสีม่วงชมพูหลายก้อนยื่นออกจากทวาร",
 opinion:"ไม่มีเฉลย — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("6.1 DRE.",6,{tags:["pe"],ans:"แนะนำตัว ขอ consent มี chaperone · ท่า <b>left lateral (Sims)</b> · inspection + ให้เบ่ง · หล่อลื่น สอดนิ้ว ประเมิน sphincter tone · คลำรอบ 360° · ดูถุงมือ · รายงานผลระหว่างตรวจ",rubric:"ได้ตามขั้น",pts:[P("Consent, chaperone","consent","chaperone"),CR(P("Left lateral position","left lateral","sims")),P("Inspection with straining","inspect","strain","เบ่ง"),P("Tone, 360° palpation, glove","tone","360","glove")]}),
  B("6.2 Picture.",3,{tags:["pe"],ans:"ก้อน mucosa-covered หลายก้อน (ตำแหน่ง 3, 7, 11 นาฬิกา) ยื่นออกนอกทวาร สีม่วงคล้ำ บวม → <b>prolapsed (grade III–IV) internal hemorrhoids</b> ± thrombosed",rubric:"ได้",pts:[CR(P("Prolapsed internal hemorrhoids","hemorrhoid","ริดสีดวง")),P("Grade III–IV / thrombosed","grade","thrombos","prolaps")]})
 ),
 interp:"Prolapsed hemorrhoids",
 summary:["Primary positions 3, 7, 11 o'clock (lithotomy)","Grade IV / thrombosed → hemorrhoidectomy","Strangulated → urgent surgery"]}),

/* ===== OSCE 7 ===== */
Co({page:3,orig:"7",topic:"suture",sub:"Suture material",title:"Suture materials in hernioplasty",img:["os74a_7a","os74a_7b","os74a_7c","os74a_7d","os74a_7e","os74a_7f1","os74a_7f2"],
 stem:`A patient with an inguinal hernia undergoes hernioplasty using (7.1) fixed to the inner abdominal wall. The abdominal wall is then closed as in the picture: the deep layer with (7.2) and the skin with (7.3), using technique (7.4). During closure a skin vessel bleeds and is ligated with (7.5). Items A–E are on the table: A Vicryl packet, B mesh, C Ethilon packet, D a coarse yellowish strand, E a black strand.<br>For 7.1, 7.2, 7.3 and 7.5 give the letter, generic name, trade name, number of filaments and absorbability; for 7.4 give the technique name.`,
 gray:"7. ผู้ป่วยมี inguinal hernia ได้รับการผ่าตัด hernioplasty โดยใช้ 7.1 ติดกับผนังหน้าท้องด้านใน จากนั้นจึงเย็บปิดผนังหน้าท้องดังรูป ชั้นล่างด้วย 7.2 และชั้นบนที่ผิวหนังด้วย 7.3 โดยการเย็บผิวหนังนั้นใช้เทคนิค 7.4 ดังรูป ในขณะที่กำลังเย็บปิดผนังหน้าท้องพบว่ามีเลือดออกจากหลอดเลือดบริเวณผิวหนัง จึงได้เย็บด้วย 7.5 (มีอุปกรณ์จริงวางบนโต๊ะ) (เส้นหยาบๆ) A B C D E · 7.1–7.3, 7.5 ตัวอักษรสิ่งของ ชื่อสามัญ ชื่อการค้า จำนวนเส้นใย การละลาย · 7.4 ชื่อเทคนิค",
 notes:"ไม่มีไฟล์เฉลย · ลำดับตัวอักษร A–E ในไฟล์ไม่ชัดว่าตรงกับรูปไหน — Claude กำหนดตามลำดับรูปในไฟล์ (Vicryl, mesh, Ethilon, เส้นสีเหลืองหยาบ = plain catgut, เส้นดำ = silk) · ข้อคล้ายกับ 75D OSCE 2",
 opinion:"ไม่มีเฉลย — Claude เฉลย ความมั่นใจปานกลาง (ตัวอักษรอาจไม่ตรงข้อสอบจริง)",
 parts:S(
  B("7.1 Mesh.",2,{tags:["suture"],ans:"<b>B</b> — polypropylene mesh (Prolene mesh) · monofilament · non-absorbable",rubric:"ได้",pts:[CR(P("Polypropylene mesh","polypropylene","prolene","mesh"))]}),
  B("7.2 Deep layer.",2,{tags:["suture"],ans:"<b>A</b> — polyglactin 910 (Vicryl) · multifilament braided · absorbable",rubric:"ได้",pts:[CR(P("Vicryl / polyglactin","vicryl","polyglactin")),P("Braided absorbable","braid","multi","absorb")]}),
  B("7.3 Skin.",2,{tags:["suture"],ans:"<b>C</b> — nylon (Ethilon) · monofilament · non-absorbable",rubric:"ได้",pts:[CR(P("Nylon / Ethilon","nylon","ethilon")),P("Monofilament non-absorbable","mono","non-?absorb")]}),
  B("7.4 Skin technique.",1,{tags:["suture"],ans:"<b>Simple interrupted suture</b>",rubric:"ได้",pts:[CR(P("Simple interrupted","simple","interrupt"))]}),
  B("7.5 Ligating a skin vessel.",2,{tags:["suture"],ans:"<b>D</b> — plain catgut (absorbable natural multifilament-like twisted collagen) หรือ <b>E</b> — silk (natural braided, non-absorbable) ใช้ผูก ligature ได้เช่นกัน",rubric:"ได้",pts:[CR(P("Catgut or silk tie","catgut","silk"))]})
 ),
 interp:"Hernioplasty sutures",
 summary:["Lichtenstein: polypropylene mesh","Vicryl: braided absorbable","Nylon/Prolene: monofilament non-absorbable","Catgut: natural absorbable · Silk: natural non-absorbable"]}),

/* ===== OSCE 9 ===== */
Co({page:3,orig:"9",topic:"hx",sub:"Other history",ex:1,title:"History and examination — hematuria for 3 weeks",
 stem:`A patient presents with hematuria for 3 weeks.<br>1. What history would you take?<br>2. How would you examine the patient?`,
 gray:"9. ผู้ป่วยมาด้วยอาการปัสสาวะเป็นเลือด 3 สัปดาห์ก่อนมาโรงพยาบาล 9.1 จะซักประวัติอะไรบ้าง 9.2 จะตรวจร่างกายอย่างไรบ้าง",
 notes:"ไม่มีไฟล์เฉลย · ข้อคล้ายกับ 75D MEQ 2",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("9.1 History.",5,{tags:["hx"],ans:"ยืนยันว่าเป็นเลือดจากทางเดินปัสสาวะ · gross/micro · timing (initial/terminal/total) · clots · painless/painful · LUTS, flank pain, ไข้ · <b>smoking</b>, สารเคมี, ยา anticoagulant/cyclophosphamide · นิ่ว UTI trauma exercise · น้ำหนักลด · family history · ประวัติเลือดออกง่าย",rubric:"ได้ตามหมวด",pts:[P("Timing, clots, pain","timing","clot","pain"),CR(P("Smoking / occupational","smok","chemical","บุหรี่")),P("Drugs, stones, infection","anticoag","stone","infect","uti"),P("Weight loss, family history","weight","family")]}),
  B("9.2 Examination.",4,{tags:["hx"],ans:"General: pallor, BP (glomerular disease), edema · abdomen: ballotable kidney, CVA tenderness, suprapubic mass · <b>external genitalia</b> · <b>DRE</b> (prostate) ในชาย / pelvic exam ในหญิง · lymph nodes",rubric:"ได้",pts:[P("BP, edema, pallor","bp","edema","pallor"),P("Kidney, bladder palpation","kidney","bladder","cva"),CR(P("DRE / pelvic exam","dre","rectal","prostate","pelvic","pv"))]})
 ),
 interp:"Hematuria evaluation",
 summary:["Painless gross hematuria → exclude urothelial cancer","CT urography + cystoscopy","Glomerular: dysmorphic RBC, proteinuria, hypertension"]}),

/* ===== OSCE 10 ===== */
Co({page:4,orig:"10",topic:"inst",sub:"Tube/Catheter",title:"Three-way Foley catheter",img:["os74a_10"],
 stem:`The device in the picture is on the table.<br>1. Name it and describe how to use it.<br>2. For which conditions is it used?`,
 gray:"10. (มีอุปกรณ์จริงวางบนโต๊ะ) 10.1 บอกชื่อและวิธีการใช้อุปกรณ์นี้ 10.2 อุปกรณ์นี้ใช้สำหรับภาวะหรือโรคอะไร",
 notes:"ไม่มีไฟล์เฉลย · รูป = สาย Foley สีส้มมี 3 ทาง",
 opinion:"ไม่มีเฉลย — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("10.1 Name and use.",4,{tags:["inst"],ans:"<b>Three-way Foley catheter</b> (มักขนาดใหญ่ 20–24 Fr) — ช่อง drain, ช่อง balloon, ช่อง <b>irrigation</b> · ใส่เหมือน Foley ปกติ (sterile, gel, รอ urine แล้วเป่า balloon 30 mL ได้) ต่อ <b>continuous bladder irrigation (NSS)</b> เข้าทางช่อง irrigation ปรับอัตราให้ปัสสาวะสีชมพูอ่อน",rubric:"ได้",pts:[CR(P("Three-way Foley","three","3-?way","3 ทาง")),CR(P("Continuous bladder irrigation","irrigat","cbi","ล้าง")),P("Sterile insertion, inflate balloon","sterile","balloon")]}),
  B("10.2 Indications.",3,{tags:["inst"],ans:"<b>Gross hematuria with clot retention</b> (bladder tumor, radiation cystitis) · <b>หลัง TURP/TURBT</b> ป้องกันลิ่มเลือด · hemorrhagic cystitis",rubric:"ได้",pts:[CR(P("Hematuria / clot retention","hematuria","clot")),P("After TURP/TURBT","turp","turbt","prostat")]})
 ),
 interp:"Three-way catheter",
 summary:["Large bore 20–24 Fr","Irrigation port","Clot retention, post-TURP"]}),

/* ===== OSCE 11 ===== */
Co({page:4,orig:"11",topic:"pe",sub:"DRE/Prostate",title:"Prostate model — describe and diagnose",
 stem:`A prostate examination model, gloves and gel are on the table. No examiner is present.<br>1. Describe the abnormality.<br>2. What is the diagnosis?`,
 gray:"11. (มีหุ่นตรวจ prostate gland จำลอง ถุงมือ เจล วางอยู่บนโต๊ะ ไม่มีอาจารย์คุม) 11.1 บรรยายความผิดปกติ 11.2 วินิจฉัย",
 flag:"ไฟล์ไม่ได้บอกลักษณะของหุ่น — เฉลยแบบกรอบการบรรยาย (หุ่นในข้อสอบปีอื่น 74D/75D เป็นต่อมแข็งขรุขระ = CA prostate)",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีไฟล์เฉลยและไม่ทราบลักษณะหุ่น — ยืนยันจากแหล่งอ้างอิงไม่ได้ว่าหุ่นเป็นโรคใด คงเฉลยแบบกรอบการบรรยาย (hard nodular + median sulcus หาย = CA prostate; smooth rubbery enlarged = BPH; boggy tender = prostatitis) ตาม Campbell-Walsh-Wein Urology 13e · ความมั่นใจต่ำ (การวินิจฉัย)",
 parts:S(
  B("11.1 Describe.",6,{tags:["pe"],ans:"บรรยายตามลำดับ: sphincter tone · <b>size</b> (ปกติ ~2.5–3 cm, เทียบความกว้างนิ้ว) · <b>consistency</b> (rubbery = BPH, hard = CA, boggy/tender = prostatitis) · <b>surface</b> (smooth/nodular) · <b>median sulcus</b> (มี/หาย) · symmetry · mucosal mobility · tenderness",rubric:"1/ประเด็น",pts:[P("Size","size","ขนาด"),CR(P("Consistency","consisten","hard","rubbery","แข็ง")),P("Surface / nodules","surface","nodul","smooth","ขรุขระ"),P("Median sulcus","sulcus"),P("Mobility, tenderness","mobil","tender")]}),
  B("11.2 Diagnosis.",2,{tags:["pe"],ans:"ตามที่คลำ: hard nodular, sulcus หาย → <b>carcinoma of the prostate</b> · smooth rubbery enlarged, sulcus ชัด → <b>BPH</b>",rubric:"ได้ = สอดคล้องกับที่บรรยาย",pts:[CR(P("Prostate cancer or BPH consistent with findings","cancer","carcinoma","bph","benign"))]})
 ),
 interp:"Prostate on DRE",
 summary:["BPH: smooth, rubbery, sulcus present","CA: hard, nodular, sulcus obliterated","Prostatitis: tender, boggy"]}),

/* ===== OSCE 12 ===== */
Co({page:4,orig:"12",topic:"img",sub:"Clinical photograph",title:"Cystic subcutaneous mass of the arm",img:["os74a_12"],
 stem:`A patient has a subcutaneous mass on the arm as shown. On palpation it is cystic.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"12. ผู้ป่วยมาด้วย subcutaneous mass ที่แขนดังรูป ตรวจร่างกายคลำได้ลักษณะ cystic 12.1 วินิจฉัย 12.2 ให้การรักษา",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ไม่มีเฉลย — Claude ตอบ epidermoid cyst ความมั่นใจปานกลาง",
 parts:S(
  B("12.1 Diagnosis.",2,{tags:["img"],ans:"<b>Epidermoid (sebaceous) cyst</b> — ก้อนกลมใต้ผิวหนัง ติดผิวหนัง อาจมี punctum (ถ้านิ่มเป็นก้อนเนื้อไม่ใช่ cystic นึกถึง lipoma)",rubric:"ได้",pts:[CR(P("Epidermoid / sebaceous cyst","epiderm","sebaceous","inclusion"))]}),
  B("12.2 Treatment.",3,{tags:["img"],ans:"<b>Complete excision</b> ทั้ง cyst wall (elliptical incision รอบ punctum) ภายใต้ local anesthesia เมื่อไม่อักเสบ · ถ้าติดเชื้อ/ฝี → I&amp;D + ATB ก่อน แล้วตัดภายหลัง",rubric:"ได้",pts:[CR(P("Complete excision including wall","excis","wall","ตัด")),P("I&D if infected","i&amp;?d","incision and drain","infect")]})
 ),
 interp:"Epidermoid cyst",
 summary:["Punctum, attached to skin","Excise intact to prevent recurrence","Infected → drain first"]}),

/* ===== OSCE 13 ===== */
Co({page:4,orig:"13",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Sterile gloving and simple interrupted sutures",
 stem:`The examiner is observing.<br>1. Put on sterile gloves.<br>2. Close the wound with two simple interrupted stitches tied by instrument tie.`,
 gray:"13. (มีอาจารย์คุม) 13.1 ใส่ถุงมือ sterile 13.2 เย็บ simple interrupted suture 2 stitches ผูกด้วยวิธี instrument",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("13.1 Sterile gloving.",4,{tags:["proc"],ans:"Open gloving: ข้างแรกจับที่ cuff ด้านใน · ข้างที่สองสอดนิ้วใต้ cuff ด้านนอก · ไม่ให้ด้านนอกแตะผิวหนัง · มือเหนือเอว",rubric:"ได้",pts:[CR(P("No contamination","contamin","sterile")),P("Inner cuff then outer cuff","cuff","inner","outer")]}),
  B("13.2 Two simple interrupted stitches.",6,{tags:["proc"],ans:"แทงตั้งฉาก ระยะ/ความลึกเท่ากัน · instrument tie ปมแรก 2 รอบ + กลับทิศ ≥2 ปม · ปมข้างแผล ไม่แน่นเกิน · ตัดไหมเหลือ ~5 mm",rubric:"ได้",pts:[CR(P("Perpendicular equal bites","perpendic","90","equal")),CR(P("Square instrument knot","knot","square","ปม")),P("Edges apposed","appos","evert")]})
 ),
 interp:"Gloving + suturing",
 summary:["Open gloving technique","Simple interrupted basics"]}),

SA({page:5,orig:"SEQ 1",num:"SA 1",sub:"Clinical photograph",title:"Short answer — great toe lesion",img:["os74a_s1"],
 stem:`A photograph of the toes is shown.<br>1. Describe the abnormality.<br>2. What is the diagnosis?`,
 gray:"Short Essay Questions 1. (รูปนิ้วเท้า) 1.1 บรรยายความผิดปกติ 1.2 วินิจฉัย",
 notes:"ไม่มีไฟล์เฉลย",
 opinion:"ไม่มีเฉลย — Claude อ่านภาพ ความมั่นใจปานกลาง",
 parts:S(
  B("1.1 Describe.",2,{tags:["spot"],ans:"ขอบเล็บนิ้วโป้งเท้า (lateral/medial nail fold) <b>บวมแดง อักเสบ มี granulation tissue/หนอง</b> เล็บฝังเข้าไปในผิวหนังข้างเล็บ",rubric:"ได้",pts:[CR(P("Inflamed nail fold, granulation","nail fold","granulation","inflam","บวมแดง","pus"))]}),
  B("1.2 Diagnosis.",2,{tags:["spot"],ans:"<b>Ingrown toenail (onychocryptosis) with paronychia</b>",rubric:"ได้",pts:[CR(P("Ingrown toenail","ingrown","onychocryptosis")),P("Paronychia","paronych")]})
 ),
 interp:"Ingrown toenail",
 summary:["Cause: tight shoes, improper nail cutting","Mild: warm soak, cotton under nail edge","Recurrent: partial nail avulsion + phenol matricectomy (wedge resection)"]}),

SA({page:5,orig:"SEQ 3",num:"SA 3",sub:"Hernia/Abdominal wall",title:"Short answer — reducible inguinoscrotal mass",img:["os74a_s3"],
 stem:`A patient has had a groin mass extending into the scrotum for several months, which can be pushed back.<br>1. What is the diagnosis?<br>2. How is it treated?<br>3. What are the risk factors?`,
 gray:"3. ผู้ป่วยมาด้วยก้อนบริเวณขาหนีบลงมาที่ถุงอัณฑะดังรูปเป็นเวลาหลายเดือน โดยสามารถดันกลับเข้าไปได้ 3.1 วินิจฉัย 3.2 การรักษา 3.3 ปัจจัยเสี่ยงที่ทำให้เกิดภาวะนี้",
 notes:"ไม่มีไฟล์เฉลย · ไฟล์ไม่มีข้อ 2",
 opinion:"ไม่มีเฉลย — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("3.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Reducible indirect (complete/inguinoscrotal) inguinal hernia</b>",rubric:"ได้",pts:[CR(P("Indirect inguinal hernia","inguinal","indirect","hernia"))]}),
  B("3.2 Treatment.",2,{tags:["spot"],ans:"<b>Elective hernioplasty</b> — open tension-free mesh repair (Lichtenstein) หรือ laparoscopic TEP/TAPP",rubric:"ได้",pts:[CR(P("Mesh hernioplasty","mesh","lichtenstein","hernioplasty","tep","tapp"))]}),
  B("3.3 Risk factors.",3,{tags:["spot"],ans:"เพศชาย อายุมาก · <b>เพิ่ม intra-abdominal pressure</b>: chronic cough (COPD, สูบบุหรี่), constipation, BPH/เบ่งปัสสาวะ, ascites, ยกของหนัก, obesity · patent processus vaginalis · collagen disorder · family history · ผ่าตัดเดิม (appendectomy)",rubric:"1/ข้อ",pts:[CR(P("Raised intra-abdominal pressure: cough, constipation, BPH","cough","constipat","bph","strain","เบ่ง")),P("Smoking, collagen, heavy lifting","smok","collagen","lift"),P("Male, age, patent processus","male","age","processus")]})
 ),
 interp:"Indirect inguinal hernia",
 summary:["Indirect lateral to inferior epigastric vessels","Lichtenstein = standard open repair","Correct precipitating factors"]}),

SA({page:5,orig:"SEQ 4",num:"SA 4",sub:"Mammogram",title:"Short answer — breast imaging",img:["os74a_s4"],
 stem:`The images are shown.<br>1. Name the examination.<br>2. Describe the abnormality.<br>3. What is the diagnosis?<br>4. What investigation would you send next?`,
 gray:"4. 4.1 ชื่อการตรวจ 4.2 บรรยายความผิดปกติ 4.3 วินิจฉัย 4.4 จะส่งตรวจอะไรต่อไป",
 notes:"ไม่มีไฟล์เฉลย · รูป mammogram 2 view (A, B) มีลูกศรชี้ก้อนที่ upper part",
 opinion:"ไม่มีเฉลย — Claude อ่านภาพ ความมั่นใจปานกลาง",
 parts:S(
  B("4.1 Examination.",1,{tags:["spot"],ans:"<b>Mammography</b> — CC และ MLO views",rubric:"ได้",pts:[CR(P("Mammogram","mammo"))]}),
  B("4.2 Describe.",2,{tags:["spot"],ans:"Mass ขอบไม่เรียบ/ spiculated ที่ upper (outer) quadrant (ลูกศร) ± microcalcification · ระบุขนาด ตำแหน่ง ขอบ density",rubric:"ได้",pts:[CR(P("Irregular/spiculated mass with location","mass","spicul","irregular"))]}),
  B("4.3 Diagnosis.",1,{tags:["spot"],ans:"Suspicious for <b>breast carcinoma</b> (BI-RADS 4–5)",rubric:"ได้",pts:[CR(P("Breast cancer / BI-RADS 4–5","cancer","carcinoma","bi-?rads"))]}),
  B("4.4 Next investigation.",2,{tags:["spot"],ans:"<b>Ultrasound-guided core needle biopsy</b> (+ ER/PR/HER2, Ki-67) · US axilla",rubric:"ได้",pts:[CR(P("Core needle biopsy","core","biopsy"))]})
 ),
 interp:"Suspicious mammographic mass",
 summary:["BI-RADS 4–5 → core biopsy","Spiculated mass, pleomorphic microcalcification","US axilla for staging"]}),

SA({page:5,orig:"SEQ 5",num:"SA 5",sub:"Neuro motor/reflex",title:"Short answer — video: dorsal midbrain (Parinaud) syndrome",
 stem:`A video clip shows a patient's eye movements (clip: Ophthalmology — dorsal midbrain syndrome).<br>1. Describe the abnormality.<br>2. What is the diagnosis and its likely cause?`,
 gray:"5. (วิดีโอ https://youtu.be/u7D1-zj98l8?t=34 ตัดคำบรรยายด้านล่างออก) 5.1 บรรยายความผิดปกติ 5.2 วินิจฉัย",
 flag:"วิดีโอ YouTube ไม่อยู่ในไฟล์ — ชื่อคลิปจาก YouTube คือ Ophthalmology - Dorsal midbrain syndrome (ช่อง ophthalclass) · เฉลยเขียนจากชื่อคลิป ยังไม่ได้ดูภาพเคลื่อนไหวจริง",imgAlt:"คลิปวิดีโอ (https://youtu.be/u7D1-zj98l8?t=34): การกลอกตาขึ้นบนไม่ได้ ตาสั่นแบบ convergence-retraction เมื่อพยายามมองขึ้น",
 notes:"ไม่มีไฟล์เฉลย · ลิงก์วิดีโอในไฟล์: https://youtu.be/u7D1-zj98l8?t=34 · ชื่อคลิป Ophthalmology - Dorsal midbrain syndrome (ตรวจจาก YouTube oEmbed 21 พ.ย. 2026) · ข้อสอบ Subspe → เนื้อหาเชื่อมกับ pineal region tumor/hydrocephalus",
 opinion:"ความมั่นใจปานกลาง (เฉลยจากชื่อคลิป ไม่ได้ดูภาพ)",
 parts:S(
  B("5.1 Describe.",4,{tags:["spot"],ans:"<b>Upgaze palsy</b> (vertical gaze palsy) · พยายามมองขึ้น → <b>convergence-retraction nystagmus</b> (ลูกตาหดเข้าเบ้าและเข้าหากัน) · <b>light-near dissociation</b> (pupil ไม่ตอบสนองแสงแต่หดเมื่อมองใกล้) · ± eyelid retraction (Collier sign), setting-sun sign ในเด็ก",rubric:"1/ประเด็น",pts:[CR(P("Upgaze palsy","upgaze","upward gaze","vertical gaze","มองขึ้น")),CR(P("Convergence-retraction nystagmus","convergence","retraction")),P("Light-near dissociation","light-near","light near","dissociation"),P("Lid retraction or setting-sun sign","collier","lid retraction","setting sun")]}),
  B("5.2 Diagnosis and cause.",4,{tags:["spot"],ans:"<b>Dorsal midbrain (Parinaud) syndrome</b> — รอยโรคที่ pretectal area/posterior commissure · สาเหตุ: <b>pineal region tumor</b> (germinoma, pineoblastoma) ในเด็ก/วัยรุ่น, <b>obstructive hydrocephalus</b> (aqueductal stenosis, shunt failure), midbrain stroke/hemorrhage ในผู้สูงอายุ, MS",rubric:"1/ประเด็น",pts:[CR(P("Parinaud / dorsal midbrain syndrome","parinaud","dorsal midbrain")),CR(P("Pineal region tumor","pineal","germinoma")),P("Hydrocephalus","hydroceph","aqueduct","shunt"),P("Midbrain stroke","stroke","infarct","hemorrhage")]})
 ),
 interp:"Parinaud syndrome",
 summary:["Upgaze palsy + convergence-retraction nystagmus + light-near dissociation","Pineal tumor or hydrocephalus","Setting-sun sign in infants with hydrocephalus"]}),

SA({page:6,orig:"SEQ 6",num:"SA 6",sub:"CXR",title:"Short answer — intubated patient with worsening dyspnea",img:["os74a_s6"],
 stem:`An elderly woman admitted with pneumonia is intubated. She later becomes more dyspneic, and a chest radiograph is taken.<br>1. Describe the abnormality.<br>2. What is the diagnosis?<br>3. What is the treatment?`,
 gray:"6. ผู้ป่วยหญิงสูงอายุ นอนโรงพยาบาลเนื่องจากมี pneumonia ใส่ ET tube ต่อมามีอาการเหนื่อยมากขึ้น ได้ส่งตรวจ chest x-ray ได้ผลดังรูป 6.1 บรรยายความผิดปกติ 6.2 วินิจฉัย 6.3 ให้การรักษา",
 notes:"ไม่มีไฟล์เฉลย · รูป: ทึบทั้งปอดซ้าย หลอดลม/mediastinum ถูกดึงมาทางซ้าย",
 opinion:"ไม่มีเฉลย — Claude อ่านภาพ ความมั่นใจปานกลาง",
 parts:S(
  B("6.1 Describe.",3,{tags:["spot"],ans:"<b>Opacification ของ left hemithorax ทั้งหมด</b> · trachea/mediastinum <b>ถูกดึงไปทางซ้าย</b> (volume loss) · left hemidiaphragm ยก · ปอดขวา hyperinflated · ตรวจตำแหน่งปลาย ET tube (อาจลงไปใน right main bronchus)",rubric:"ได้",pts:[CR(P("Left hemithorax white-out","white","opacif","ทึบ")),CR(P("Mediastinal shift toward the left (volume loss)","shift","toward","ดึง","volume loss")),P("ET tube position","et tube","right main","tube position")]}),
  B("6.2 Diagnosis.",2,{tags:["spot"],ans:"<b>Total left lung collapse (atelectasis)</b> — จาก <b>mucus plug</b> หรือ <b>ET tube ลงไปใน right main bronchus</b>",rubric:"ได้",pts:[CR(P("Left lung collapse / atelectasis","collapse","atelecta")),P("Mucus plug or right mainstem intubation","mucus","plug","mainstem","right main")]}),
  B("6.3 Treatment.",3,{tags:["spot"],ans:"ตรวจตำแหน่ง ET tube → <b>ดึงท่อขึ้น</b>ถ้าลึกเกิน (ปลายท่อ 3–5 cm เหนือ carina) · <b>suction</b>, chest physiotherapy, เพิ่ม PEEP/recruitment · <b>bronchoscopy</b> เอา mucus plug ออกถ้าไม่ดีขึ้น · รักษา pneumonia",rubric:"ได้",pts:[CR(P("Reposition ET tube","withdraw","reposition","ดึง")),CR(P("Suction / bronchoscopy for plug","suction","bronchoscop")),P("Chest physiotherapy / PEEP","physio","peep","recruit")]})
 ),
 interp:"Lung collapse after intubation",
 summary:["Collapse: shift toward lesion · effusion: shift away","ET tip 3–5 cm above carina","Mucus plug → suction, bronchoscopy"]}),

SA({page:6,orig:"SEQ 7",num:"SA 7",sub:"Plastic/Skin/Burn",title:"Short answer — ulcerated nodule on the nose",img:["os74a_s7"],
 stem:`A photograph of a lesion on the nose is shown.<br>1. What is the diagnosis?<br>2. What is the treatment?`,
 gray:"7. 7.1 วินิจฉัย 7.2 ให้การรักษา (รูปก้อนที่ปลายจมูก)",
 notes:"ไม่มีไฟล์เฉลย · รูป: ก้อนนูนที่ปลายจมูก ขอบยก ตรงกลางเป็นสะเก็ด keratin/แผล",
 opinion:"ไม่มีเฉลย — Claude อ่านภาพ ความมั่นใจปานกลาง (keratoacanthoma ก็เข้าได้)",
 parts:S(
  B("7.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Squamous cell carcinoma</b> of the nose (keratoacanthoma-like: nodule ขอบยก ตรงกลางเป็น keratin crater) — DDx keratoacanthoma, ulcerated BCC",rubric:"ได้",pts:[CR(P("Squamous cell carcinoma","scc","squamous")),P("Keratoacanthoma / BCC as differential","keratoacanthoma","bcc","basal")]}),
  B("7.2 Treatment.",3,{tags:["spot"],ans:"<b>Biopsy</b> ยืนยัน → <b>wide excision margin 4–6 mm</b> (high-risk ≥6 mm) หรือ <b>Mohs micrographic surgery</b> (ใบหน้า) · ปิดด้วย local flap/FTSG · ตรวจ LN คอ/parotid · RT ถ้าผ่าตัดไม่ได้",rubric:"ได้",pts:[P("Biopsy","biopsy"),CR(P("Excision with margin or Mohs","excis","mohs","margin")),P("Reconstruction / nodes","flap","graft","lymph","node")]})
 ),
 interp:"Cutaneous SCC of the nose",
 summary:["SCC: sun-exposed, keratotic, ulcerated","Margin 4–6 mm; Mohs for face","Check regional nodes"]}),

SA({page:7,orig:"SEQ 8",num:"SA 8",sub:"Pediatric surgery",title:"Short answer — infant penile anomaly",img:["os74a_s8"],
 stem:`A photograph of an infant's penis is shown.<br>1. What is the diagnosis?<br>2. What treatment advice would you give?`,
 gray:"8. 8.1 วินิจฉัย 8.2 คำแนะนำในการรักษา (รูปอวัยวะเพศเด็ก)",
 notes:"ไม่มีไฟล์เฉลย · รูปเล็กไม่ชัด เห็นองคชาตเด็กและปากกาชี้ด้านใต้",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีไฟล์เฉลย · รูปเล็กไม่ชัด เห็นปากกาชี้ด้านใต้องคชาตและ prepuce ลักษณะ hooded → คง hypospadias · คำแนะนำตรงกับ EAU/ESPU Paediatric Urology Guidelines 2025 (ห้ามขลิบเพราะใช้ prepuce ซ่อม, ผ่าตัดราว 6–18 เดือน, ถ้ามี undescended testis/ambiguous genitalia ร่วม → แยก DSD) · ความมั่นใจต่ำ–ปานกลาง (รูปไม่ชัด)",
 parts:S(
  B("8.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Hypospadias</b> (urethral meatus อยู่ด้าน ventral, hooded prepuce ± chordee)",rubric:"ได้",pts:[CR(P("Hypospadias","hypospad"))]}),
  B("8.2 Advice.",3,{tags:["spot"],ans:"<b>ห้ามขลิบ</b> (เก็บ prepuce ไว้ซ่อม) · ผ่าตัดซ่อม (orthoplasty + urethroplasty) อายุ <b>6–18 เดือน</b> · ถ้ามี undescended testis ร่วม → ตรวจ DSD · ไม่ต้อง renal US/ATB ใน isolated distal",rubric:"ได้",pts:[CR(P("No circumcision","circumcis","ขลิบ")),CR(P("Repair at 6–18 months","6","18","month","เดือน")),P("Evaluate DSD if UDT","dsd","testis","karyotype")]})
 ),
 interp:"Hypospadias",
 summary:["Ventral meatus, chordee, dorsal hood","No circumcision","Repair 6–18 months"]}),

SA({page:7,orig:"SEQ 10",num:"SA 10",sub:"Pediatric surgery",title:"Short answer — infant with acute bilious vomiting",
 stem:`An infant presents with acute bilious vomiting, abdominal distension and abdominal pain.<br>1. What are the possible diseases?<br>2. What investigation would you send to make the diagnosis?`,
 gray:"10. ผู้ป่วยเด็กทารกมาด้วยอาการอาเจียนสีเขียวเฉียบพลัน ท้องอืด ปวดท้อง 9.1 โรคที่เป็นไปได้ 9.2 จะส่งตรวจอะไรเพิ่มเติมเพื่อวินิจฉัย",
 notes:"ไม่มีไฟล์เฉลย · เลขข้อในไฟล์ไม่ตรง (ข้อ 10 แต่ข้อย่อยเป็น 9.x)",
 opinion:"ไม่มีเฉลย — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("10.1 Possible diseases.",3,{tags:["spot"],ans:"<b>Malrotation with midgut volvulus</b> (ต้องคิดก่อนเสมอ) · intestinal atresia (jejunoileal) · Hirschsprung disease/enterocolitis · meconium ileus · intussusception · incarcerated hernia",rubric:"1/โรค",pts:[CR(P("Malrotation with midgut volvulus","malrotation","volvulus")),P("Intestinal atresia","atresia"),P("Hirschsprung / intussusception / hernia","hirschsprung","intussus","hernia","meconium")]}),
  B("10.2 Investigation.",2,{tags:["spot"],ans:"<b>Upper GI contrast study</b> (gold standard — DJ flexure อยู่ขวาต่อ midline/ต่ำ, corkscrew sign) · plain AXR · ± US (whirlpool sign, SMA/SMV สลับข้าง) · ถ้า unstable/peritonitis → explore ทันที",rubric:"ได้",pts:[CR(P("Upper GI contrast study","upper gi","ugi","contrast")),P("AXR / US whirlpool","axr","x-?ray","whirlpool","ultrasound")]})
 ),
 interp:"Bilious vomiting in infant",
 summary:["Bilious vomiting = malrotation until proven otherwise","UGI: abnormal DJ flexure, corkscrew","Ladd procedure emergency"]}),

SA({page:7,orig:"SEQ 11",num:"SA 11",sub:"Contrast GI study",title:"Short answer — contrast study in the infant with bilious vomiting",img:["os74a_s11"],
 stem:`Following the previous question, a barium enema is performed (image shown).<br>1. What is the initial treatment?<br>2. What is the specific treatment?`,
 gray:"11. จากข้อที่ 10 ส่งตรวจ barium enema ได้ผลดังรูป 10.1 การรักษาเบื้องต้น 10.2 การรักษาเฉพาะ",
 notes:"ไม่มีไฟล์เฉลย · รูป: contrast ทาง rectum ขึ้นไปพบ cecum อยู่สูงที่ upper abdomen/ใต้ตับ (malposition) — เข้าได้กับ malrotation",
 opinion:"ไม่มีเฉลย — Claude อ่านภาพ ความมั่นใจปานกลาง",
 parts:S(
  B("11.1 Initial treatment.",3,{tags:["spot"],ans:"Resuscitation: <b>NPO, NG/OG decompression, IV fluid</b> แก้ electrolyte, <b>broad-spectrum IV antibiotics</b> · เตรียมผ่าตัดด่วน (ไม่รอ)",rubric:"ได้",pts:[CR(P("NPO, OG decompression, IV fluid","npo","og","ng","fluid")),P("IV antibiotics","antibio"),P("Urgent surgery preparation","urgent","emergency","ด่วน")]}),
  B("11.2 Specific treatment.",3,{tags:["spot"],ans:"<b>Emergency Ladd procedure</b>: detorsion (หมุนทวนเข็มนาฬิกา), แบ่ง <b>Ladd bands</b>, ขยาย mesentery, วาง small bowel ขวา / colon ซ้าย, <b>appendectomy</b> · ลำไส้ตาย → resect / second look",rubric:"ได้",pts:[CR(P("Ladd procedure","ladd")),P("Detorsion counterclockwise, divide bands, appendectomy","detors","counter","band","appendectomy")]})
 ),
 interp:"Malrotation",
 summary:["Cecum malpositioned (RUQ)","Volvulus = emergency","Ladd procedure"]}),

SA({page:8,orig:"SEQ ไม่มีเลข 1",num:"SA 12",sub:"Plastic/Skin/Burn",title:"Short answer — cleft palate: timing of repair",img:["os74a_sx1"],
 stem:`A child has the condition shown. At what age should it be corrected, and why?`,
 gray:"ผู้ป่วยเด็กมาด้วยลักษณะดังรูป ควรต้องได้รับการแก้ไขที่อายุเท่าใดและเพราะอะไร (รูป cleft palate)",
 notes:"ไม่มีไฟล์เฉลย · ข้อไม่มีเลขในไฟล์",
 opinion:"ไม่มีเฉลย — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("12.1 Age and reason.",3,{tags:["spot"],ans:"<b>Cleft palate</b> → <b>palatoplasty อายุ 9–18 เดือน (~1 ปี)</b> ก่อนเด็กเริ่มพูด เพื่อให้การพูดพัฒนาปกติ (ป้องกัน hypernasal speech/VPI) โดยไม่ผ่าเร็วเกินจนรบกวนการเจริญของ maxilla",rubric:"ได้",pts:[CR(P("Palatoplasty around 1 year (9–18 months)","9","12","18","1 ปี","year")),CR(P("Before speech development","speech","พูด"))]})
 ),
 interp:"Cleft palate",
 summary:["Palate repair before speech","Lip repair ~3 months","Hearing (OME) follow-up"]}),

SA({page:8,orig:"SEQ ไม่มีเลข 2",num:"SA 13",sub:"Plastic/Skin/Burn",title:"Short answer — facial slash wound",img:["os74a_sx2"],
 stem:`A patient was slashed on the face as shown. Which structures may be injured?`,
 gray:"ผู้ป่วยได้รับบาดเจ็บถูกฟันบริเวณใบหน้าดังรูป โครงสร้างใดจะได้รับบาดเจ็บบ้าง",
 notes:"ไม่มีไฟล์เฉลย · รูป: แผลยาวที่แก้มจากหน้าหูถึงมุมปาก · ข้อไม่มีเลขในไฟล์",
 opinion:"ไม่มีเฉลย — Claude เฉลย ความมั่นใจสูง",
 parts:S(
  B("13.1 Structures at risk.",4,{tags:["spot"],ans:"<b>Facial nerve branches</b> (buccal, zygomatic, ± marginal mandibular) · <b>parotid (Stensen) duct</b> (แนวจาก tragus → กลางริมฝีปากบน) · parotid gland · <b>masseter</b> · facial artery/vein · ± infraorbital nerve",rubric:"1/โครงสร้าง",pts:[CR(P("Facial nerve branches","facial nerve","buccal","zygomatic","marginal")),CR(P("Parotid (Stensen) duct","parotid","stensen")),P("Masseter, facial vessels","masseter","facial artery","vessel")]})
 ),
 interp:"Cheek laceration",
 summary:["Line tragus → mid upper lip = parotid duct","Explore facial nerve if lateral to lateral canthus","Repair duct over stent"]})
);
})();
