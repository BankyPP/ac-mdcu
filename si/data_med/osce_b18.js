(function(){
/* SI Med OSCE — SI128 รอบที่ 4 Rotate 405–408 — ไฟล์ "128_Medicine_OSCE 4" (s128o4.pdf, โค้ด SIOS128B) 7 หน้า
   ไฟล์บอก: "ข้อสอบลงกอง รายวิชา SIMD415 อายุรศาสตร์ รอบที่ 4 (405-408) OSCE" · ข้อสอบ 30 ข้อ + ข้อพัก 9 ข้อ รวม 39 ข้อ ข้อละ 5 นาที (ข้อพักเข้าห้องน้ำได้)
   รูปแบบ: ตารางพิมพ์ 3 คอลัมน์ (ข้อ | คำถาม | คำตอบผู้จด) ไม่มีลายมือ/ไฮไลต์/รูป · หน้า 7 มีแค่ท้ายข้อ 39 ("tophaceous gout")
   key = "คำตอบผู้จด: ..." ตามตัว (ไม่ใช่เฉลยทางการ — Claude ตรวจกับ guideline/ตำราแล้ว จุดที่ต่างอยู่ใน opinion) · ข้อย่อยที่ผู้จดไม่ได้ตอบ = NK
   ฐานพัก (ไม่สร้าง): 3, 6, 12, 16, 20, 25, 30, 34, 38 → ลง 30 สถานี ครบตามหัวไฟล์
   ไม่มีรูปในไฟล์เลย → สถานีที่ต้องดูรูป/สไลด์ใช้ NOIMG: 1, 9, 11, 13, 15, 17, 18, 19, 22, 23, 26, 37, 39
   หลายข้อไฟล์มีแค่คำตอบ ไม่มีโจทย์ (17, 18, 19, 21, 22, 23, 24, 27) → โจทย์/บริบท Claude เรียบเรียงจากคำตอบผู้จด (บอกใน flag)
   ค่าแลปที่ Claude แต่ง (ไฟล์ไม่ให้): 14 (ascites), 21 (CSF), 24 (LFT), 27 (ABG), 33 (pleural fluid), 36 (ฉลากซอส)
   สถานีที่มีอาจารย์ (ex:1): 2, 4, 5 (proc), 7, 8, 10, 28, 29, 31, 32, 35 (proc), 36 — บทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด */
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
const ADD="ข้อย่อยนี้ Claude เติม";
const Co=o=>Object.assign({set:"SI128",ro:"Ro405–408",file:"SIOS128B",opinion:""},o);
QB.push(

/* ===== สถานี 1 ===== */
Co({page:1,orig:"1",topic:"micro",sub:"Gram stain",title:"Sputum Gram stain in a patient with HIV infection",seen:"คล้าย SI132 Ro403–404 ข้อ 4 (Gram stain branching GPB — ชุดนั้นเป็นผู้ป่วยกินยาชุด)",
 stem:`A patient with HIV infection has a sputum specimen sent for Gram stain. You may adjust the microscope.<br>1. Describe what you see.<br>2. Name the organism.<br>3. What drug is used to treat this organism?`,
 gray:"1. ผู้ป่วย HIV · เลื่อนกล้องได้ · 1. จงบรรยายสิ่งที่เห็น ตอบ adequate sputum, numerous PMN, gram-positive rod, branching filamentous · 2. จงบอกสิ่งมีชีวิตนี้ ตอบ Nocardia sp. · 3. ยาที่ใช้รักษาเชื้อนี้ ตอบ Co-trimoxazole",
 flag:NOIMG+" · \"เลื่อนกล้องได้\" = ข้อสอบใช้กล้องจุลทรรศน์จริง ปรับโฟกัส/เลื่อนสไลด์ได้",
 notes:"ผู้จดพิมพ์คำตอบครบทั้ง 3 ข้อย่อย (ดู gray) · ระบุเชื้อเป็น Nocardia sp. (ตัวเอียง)",
 parts:S(
  B("1.1 Describe what you see.",3,{tags:["micro"],key:"คำตอบผู้จด: adequate sputum, numerous PMN, gram-positive rod, branching filamentous",
   ans:"<b>Adequate sputum</b> (PMN &gt; 25/LPF, squamous epithelial cell &lt; 10/LPF) · <b>numerous PMN</b> · <b>gram-positive, thin, beaded, branching filamentous rods</b> (แท่งเรียวยาว แตกกิ่งเป็นมุมฉาก ติดสีม่วงเป็นจุด ๆ)",
   exp:"ต้องบอกคุณภาพเสมหะก่อนทุกครั้ง · branching filamentous GPB: <i>Nocardia</i> (aerobe, weakly acid-fast — modified AFB/Kinyoun บวก) vs <i>Actinomyces</i> (anaerobe, ไม่ติด acid-fast, sulfur granules)",
   rubric:"ตอบ gram-positive rod โดยไม่บอก branching filamentous = ได้บางส่วน · ไม่ประเมิน adequacy = หักคะแนน",
   pts:[P("Adequate sputum (PMN > 25, SEC < 10 per LPF)","adequate","เพียงพอ","good quality"),P("Numerous PMN","\\bpmn","neutrophil","polymorph"),CR(P("Gram-positive rods","gram.?positive","gram ?\\+","\\bgpb\\b","แกรมบวก")),CR(P("Branching, beaded filaments","branch","filament","beaded","แตกกิ่ง"))]}),
  B("1.2 Name the organism.",2,{tags:["micro"],key:"คำตอบผู้จด: Nocardia sp.",
   ans:"<b><i>Nocardia</i> spp.</b> (pulmonary nocardiosis ในผู้ป่วย HIV/ภูมิคุ้มกันบกพร่องชนิด cell-mediated)",
   exp:"ยืนยันด้วย <b>modified acid-fast stain</b> (weakly acid-fast) และ culture (โตช้า ต้องแจ้ง lab ให้เก็บนาน) · Nocardia กระจายไปสมองบ่อย → ควรทำ <b>CT/MRI brain</b> ในผู้ป่วยภูมิคุ้มกันต่ำแม้ไม่มีอาการ",
   pts:[CR(P("Nocardia","nocard"))]}),
  B("1.3 What drug is used to treat this organism?",2,{tags:["micro"],key:"คำตอบผู้จด: Co-trimoxazole",
   ans:"<b>Co-trimoxazole (TMP-SMX)</b> ขนาดสูง (TMP 5–15 mg/kg/day แบ่งให้) · โรครุนแรง/กระจาย/สมอง: ให้ร่วมกับ <b>imipenem ± amikacin</b> (หรือ ceftriaxone) · รักษานาน ≥ 6–12 เดือน",
   exp:"แพ้ sulfa: linezolid, imipenem, amikacin, minocycline ตามผลความไว · ผู้ป่วย HIV ต้องเริ่ม/ปรับ ART ด้วย",
   pts:[CR(P("Co-trimoxazole (TMP-SMX)","co.?trimoxazole","tmp.?smx","trimethoprim","sulfamethoxazole","bactrim")),P("Severe/CNS disease: add imipenem ± amikacin","imipenem","amikacin","carbapenem","linezolid")]})
 ),
 interp:"Microscope: sputum Gram stain — branching filamentous GPB ในผู้ป่วย HIV = Nocardia → TMP-SMX",
 summary:["บอกคุณภาพเสมหะก่อน: PMN > 25 และ SEC < 10 ต่อ LPF","Branching beaded GPB + weakly acid-fast = Nocardia (Actinomyces ไม่ acid-fast, anaerobe)","Rx: TMP-SMX ขนาดสูง ± imipenem/amikacin นาน 6–12 เดือน · ตรวจ CT/MRI สมอง"]}),

/* ===== สถานี 2 ===== */
Co({page:1,orig:"2",topic:"hx",sub:"Counseling",ex:1,title:"Counseling — thalassemia screening results of a couple planning pregnancy",seen:"คล้าย SI127 Ro405–408 CRQ 5 และ SI131 Ro413–416 ข้อ 2 (thalassemia counseling คู่สมรส — ชุดเหล่านั้นมี Hb typing)",
 stem:`A couple is planning to have a child. Their screening blood tests show:<br>Husband: Hb 13 g/dL, MCV 68 fL<br>Wife: Hb 12 g/dL, MCV 71 fL<br>Counsel the couple about thalassemia, with emphasis on family planning.`,
 gray:"2. Counseling thalassemia เน้นเรื่องการวางแผนมีบุตร (100 คะแนน) · สามี Hb 13, MCV 68 · ภรรยา Hb 12, MCV 71 · (คอลัมน์ขวา) อธิบายเรื่องตัวโรค",
 flag:"บทคู่สมรส (sp) Claude แต่ง · ไฟล์ไม่ได้ให้ DCIP/Hb typing — checklist ให้ผู้สอบแนะนำตรวจต่อเอง",
 notes:"ไฟล์ระบุว่าสถานีนี้ 100 คะแนน · ผู้จดเขียนแค่ \"อธิบายเรื่องตัวโรค\"",
 sp:"สามีภรรยาอายุ 30 และ 28 ปี แต่งงาน 1 ปี อยากมีลูก ยังไม่ตั้งครรภ์ · ตรวจสุขภาพก่อนแต่งงาน ได้ผลเลือดตามโจทย์ ไม่เคยมีอาการซีด ไม่เคยได้เลือด · ไม่ทราบว่าครอบครัวมีใครเป็นธาลัสซีเมีย (ญาติภรรยามีหลานตัวเหลืองท้องโตต้องได้เลือด — บอกถ้าถาม) · ไม่ได้กินธาตุเหล็ก · คำถามคู่สมรส: \"เราเป็นโรคเลือดจางไหม\" \"ลูกจะเป็นไหม ต้องทำอย่างไร\" \"ถ้าท้องแล้วรู้ได้ไหมว่าลูกเป็น\"",
 parts:S(
  B("2.1 Counsel the couple.",10,{tags:["hx"],key:"คำตอบผู้จด: อธิบายเรื่องตัวโรค",
   ans:"<b>เริ่ม:</b> แนะนำตัว ยืนยันตัวผู้ป่วย ถามความเข้าใจเดิม ซักประวัติครอบครัว/เคยซีด/ได้เลือด · <b>แปลผล:</b> ทั้งคู่ Hb ปกติแต่ <b>MCV &lt; 80 fL</b> = คัดกรองบวก → <b>อาจเป็นพาหะธาลัสซีเมีย</b> (α-thal 1 trait, β-thal trait) หรือขาดธาตุเหล็ก · <b>อธิบายตัวโรค:</b> โรคพันธุกรรมสร้าง globin ผิดปกติ ถ่ายทอดแบบ <b>autosomal recessive</b> · พาหะไม่มีอาการ ไม่ต้องรักษา ไม่ต้องกินธาตุเหล็กถ้าไม่ขาด · <b>โรครุนแรงที่ต้องป้องกัน 3 ชนิด:</b> Hb Bart's hydrops fetalis (ตายในครรภ์ แม่เสี่ยงครรภ์เป็นพิษ/ตกเลือด), β-thal major (homozygous β<sup>0</sup>), β<sup>0</sup>-thal/Hb E · <b>โอกาสลูก:</b> ถ้าพ่อแม่เป็นพาหะชนิดเดียวกัน แต่ละครรภ์ <b>ปกติ 25% พาหะ 50% เป็นโรค 25%</b> · <b>ตรวจต่อ:</b> <b>DCIP</b> (Hb E), <b>Hb typing</b> (Hb A<sub>2</sub> ≥ 3.5% = β-thal trait), <b>PCR α-thal 1 (SEA)</b> ± ferritin · ถ้าเป็นคู่เสี่ยง: <b>ตรวจวินิจฉัยทารกก่อนคลอด</b> (CVS 10–13 สัปดาห์, amniocentesis 16–20, cordocentesis 18–22) → ทางเลือกยุติการตั้งครรภ์/PGT · <b>ปิด:</b> สรุป ตอบคำถาม เปิดโอกาสให้ซัก นัดฟังผล",
   exp:"แนวทางป้องกันธาลัสซีเมียของไทย: คัดกรองด้วย MCV &lt; 80 fL (หรือ MCH &lt; 27 pg) + DCIP → ถ้าบวกทั้งคู่ ตรวจยืนยัน Hb typing + α-thal 1 PCR · ขาดธาตุเหล็กก็ทำ MCV ต่ำได้ แต่ไม่ตัดพาหะ · Hb E trait มักมี MCV ปกติ/ต่ำเล็กน้อย จึงต้องใช้ DCIP",
   rubric:"100 คะแนนตามไฟล์ — ได้เต็ม = แปลผลถูก (MCV ต่ำทั้งคู่ = อาจเป็นพาหะ) + อธิบายตัวโรค/การถ่ายทอด 25% + บอกชนิดรุนแรง + ตรวจต่อ (DCIP, Hb typing, α-thal PCR) + prenatal diagnosis · ใช้ศัพท์แพทย์ไม่อธิบาย/ไม่เปิดให้ถาม = หักการสื่อสาร",
   pts:[H("เริ่มสถานี",10),P("Introduce, check understanding and family history","แนะนำตัว","introduc","ประวัติครอบครัว","family","เข้าใจ"),
    H("แปลผลและตัวโรค",40),CR(P("Low MCV in both = possible thalassemia carriers","พาหะ","carrier","trait","mcv")),P("Carriers have no symptoms; no iron unless deficient","ไม่มีอาการ","asymptom","ไม่ต้องรักษา","ธาตุเหล็ก","iron"),CR(P("Autosomal recessive inheritance — 25% affected per pregnancy","25 ?%","1 ?(ใน|in) ?4","autosomal","recessive","ถ่ายทอด")),P("Severe types: Hb Bart's, β-thal major, β0-thal/Hb E","bart","hydrops","major","β0","hb ?e\\b"),
    H("ตรวจต่อ",30),CR(P("DCIP and Hb typing","dcip","hb typing","hb analysis","electrophoresis","hplc","a2")),P("α-thalassemia 1 PCR (SEA deletion)","pcr","alpha","α.?thal","\\bsea\\b"),P("Ferritin / iron study","ferritin","iron study"),
    H("วางแผนมีบุตร",20),CR(P("Prenatal diagnosis (CVS, amniocentesis, cordocentesis) and options","prenatal","cvs","chorionic","amnio","cordocent","เจาะน้ำคร่ำ","ก่อนคลอด","pgt","preimplant")),P("Summarise and invite questions","สรุป","question","คำถาม","สงสัย")]})
 ),
 interp:"Counseling: คู่สมรส MCV ต่ำทั้งคู่ — อธิบายพาหะธาลัสซีเมีย การถ่ายทอด ชนิดรุนแรง ตรวจยืนยัน และ prenatal diagnosis",
 summary:["MCV < 80 fL ทั้งคู่ = คัดกรองบวก → DCIP, Hb typing, α-thal 1 PCR (± ferritin)","Autosomal recessive: พาหะชนิดเดียวกันทั้งคู่ → ลูกเป็นโรค 25% ทุกครรภ์","โรครุนแรง 3 ชนิด: Hb Bart's hydrops, β-thal major, β0-thal/Hb E → prenatal diagnosis (CVS, amnio, cordocentesis)"]}),

/* ===== สถานี 4 ===== */
Co({page:1,orig:"4",topic:"pe",sub:"Neuro",ex:1,title:"Physical examination — Rinne and Weber tests",
 stem:`A patient complains of decreased hearing. Perform the Rinne and Weber tests and interpret your findings.`,
 gray:"4. ตรวจ rinne weber · (คอลัมน์ขวา) Left sensorineural hearing loss",
 flag:"ไฟล์ให้แค่หัวข้อและคำตอบ — อาการนำและผลตรวจ (sp) Claude แต่งให้ตรงกับคำตอบผู้จด",
 notes:"คำตอบผู้จด: Left sensorineural hearing loss",
 sp:"ผู้ป่วยชาย 50 ปี หูซ้ายได้ยินลดลง 2 สัปดาห์ · ผู้คุมบอกผลเมื่อตรวจถูกวิธีเท่านั้น: <b>Weber</b>: ได้ยินดังกว่าที่<b>หูขวา</b> · <b>Rinne</b>: ขวา AC &gt; BC (positive) · ซ้าย AC &gt; BC (positive) แต่ได้ยินสั้นกว่าขวา · ถ้าทดสอบ whisper/finger rub: หูซ้ายได้ยินลดลง · otoscope (ถ้าขอ): ช่องหู/แก้วหูปกติทั้งสองข้าง",
 parts:S(
  B("4.1 Perform the Rinne and Weber tests.",6,{tags:["pe"],
   ans:"<b>เตรียม:</b> แนะนำตัว อธิบาย ขออนุญาต · ตรวจหูด้วย otoscope/ดูช่องหูก่อน (ขี้หู แก้วหูทะลุ) · ทดสอบการได้ยินคร่าว ๆ (whisper/finger rub) ทีละข้าง ปิดหูอีกข้าง · ใช้ <b>tuning fork 512 Hz</b> เคาะที่ข้อศอก/เข่า (ไม่เคาะโต๊ะ) · <b>Weber:</b> วางฐานส้อมที่<b>กึ่งกลางศีรษะ/หน้าผาก</b> ถาม \"ได้ยินข้างไหนดังกว่า หรือเท่ากัน\" · <b>Rinne:</b> วางฐานที่ <b>mastoid process</b> (BC) จนไม่ได้ยิน → ย้ายปลายส้อมไปห่างช่องหู ~1–2 ซม. ขาส้อมขนานกับศีรษะ (AC) ถามว่ายังได้ยินไหม (หรือเทียบความดัง) · ทำทั้งสองข้าง · <b>รายงานผล</b>",
   exp:"Rinne positive (AC &gt; BC) = ปกติหรือ SNHL · Rinne negative (BC &gt; AC) = conductive loss ข้างนั้น · Weber ไปข้างที่ดี = SNHL ข้างตรงข้าม · Weber ไปข้างที่ไม่ดี = conductive loss ข้างนั้น",
   rubric:"ใช้ส้อม 512 Hz + ตำแหน่งวางถูก + ทำ Rinne ทั้งสองข้าง = ได้เต็ม · ใช้ส้อม 128 Hz หรือเคาะของแข็ง = หักคะแนน",
   pts:[H("เตรียม",15),P("Introduce, explain, otoscopy / gross hearing test","แนะนำตัว","introduc","otoscop","whisper","กระซิบ","finger rub","ถูนิ้ว"),
    H("Weber",30),CR(P("512 Hz tuning fork","512")),CR(P("Weber: fork on vertex/midline forehead, ask which side louder","weber","กึ่งกลาง","vertex","หน้าผาก","forehead","midline")),
    H("Rinne",40),CR(P("Rinne: base on mastoid (BC), then near ear canal (AC)","mastoid","กกหู","rinne")),P("Compare AC vs BC on both sides","ac ?[>&]","bc","air conduction","bone conduction","ทั้งสองข้าง","both")]}),
  B("4.2 Interpret your findings.",4,{tags:["pe"],key:"คำตอบผู้จด: Left sensorineural hearing loss",
   ans:"Weber lateralize ไป<b>ขวา</b> + Rinne positive ทั้งสองข้าง = <b>Left sensorineural hearing loss</b> → ยืนยันด้วย pure-tone audiometry ± MRI IAC",
   exp:"SNHL ข้างเดียว: ถ้าเกิดเฉียบพลัน (&lt; 72 ชม.) = <b>sudden SNHL</b> → audiometry ด่วน + corticosteroid ภายใน 2 สัปดาห์ · SNHL ข้างเดียวค่อยเป็น ต้องตัด <b>vestibular schwannoma</b> ด้วย <b>MRI IAC with gadolinium</b> · ยืนยันด้วย pure-tone audiometry",
   pts:[CR(P("Left sensorineural hearing loss","sensorineural","\\bsnhl","ประสาทหู")),P("Left side","left","ซ้าย"),P("Confirm with audiometry ± MRI IAC","audiometr","audiogram","\\bmri","schwannoma","acoustic")]})
 ),
 interp:"PE: Rinne/Weber — แยก conductive vs sensorineural loss",
 summary:["ใช้ส้อม 512 Hz · Weber วางกลางศีรษะ · Rinne: mastoid (BC) → ข้างช่องหู (AC)","Weber ไปข้างดี + Rinne positive = SNHL ข้างตรงข้าม","Weber ไปข้างแย่ + Rinne negative ข้างนั้น = conductive loss","Unilateral SNHL → audiometry + MRI IAC (vestibular schwannoma)"]}),

/* ===== สถานี 5 ===== */
Co({page:1,orig:"5",topic:"proc",sub:"BLS/CPR",ex:1,proc:1,title:"Procedure — cardiopulmonary resuscitation on a manikin",seen:"หัตถการเดียวกัน: SI130 Ro409–412 ข้อ 5 · SI127 Ro413–416 ข้อ 4",
 stem:`You find a patient on the ward who has collapsed. Demonstrate cardiopulmonary resuscitation on the manikin and say aloud what you are doing.`,
 gray:"5. CPR",
 flag:"ไฟล์มีแค่คำว่า \"CPR\" — โจทย์ บทผู้คุม (sp) และ checklist Claude แต่งตาม AHA adult BLS",
 sp:"หุ่น CPR นอนบนเตียง ไม่ตอบสนอง หายใจเฮือก คลำ carotid ไม่ได้ · ถ้าผู้สอบตะโกนขอความช่วยเหลือ → ผู้คุมบอกว่ามีพยาบาลมาช่วยและไปนำ AED/defibrillator · หลัง 2 นาที ผู้คุมนำ AED มา → 'shockable rhythm' · หลังช็อกและกดต่อ 2 นาที → ทีม code มาถึง",
 parts:S(
  B("5.1 Perform CPR (say each step aloud).",10,{tags:["proc"],
   ans:"<b>Scene safety</b> → <b>ตบไหล่ เรียกเสียงดัง</b> → <b>ขอความช่วยเหลือ เรียก code team + ขอ AED/defibrillator</b> → <b>ดูการหายใจ + คลำ carotid พร้อมกัน 5–10 วินาที</b> → ไม่มีชีพจร: วาง CPR board → <b>กดหน้าอกที่ครึ่งล่าง sternum</b> แขนตรง <b>ลึก 5–6 ซม. อัตรา 100–120/นาที</b> ปล่อยให้อกคืนตัวสุด ลดการหยุดกด (&lt; 10 วินาที) → <b>30:2</b> เปิด airway (head tilt–chin lift) ช่วยหายใจด้วย bag-valve-mask ครั้งละ 1 วินาที เห็นอกยก → <b>AED มา:</b> เปิดเครื่อง ติด pad วิเคราะห์ (ทุกคนถอย) → shock → <b>กดต่อทันที 2 นาที</b> → ประเมินจังหวะทุก 2 นาที เปลี่ยนคนกดทุก 2 นาที จนทีมมาถึง/ROSC",
   exp:"AHA adult BLS: high-quality CPR + early defibrillation เป็นสิ่งที่เพิ่มอัตรารอด · มี advanced airway: กดต่อเนื่อง + ช่วยหายใจ 1 ครั้งทุก 6 วินาที · ห้ามช่วยหายใจมากเกิน",
   rubric:"ไม่ประเมินการตอบสนอง/ไม่ขอความช่วยเหลือ/ไม่คลำชีพจร/กดผิดตำแหน่ง ความลึก หรืออัตรา = ข้อสำคัญขาด · ไม่ใช้ AED หรือหยุดกดนาน = หักมาก",
   pts:[H("ประเมินและขอความช่วยเหลือ",30),P("Scene safety","safe","ปลอดภัย"),CR(P("Check responsiveness","ตบไหล่","เรียก","responsive","tap","shout")),CR(P("Call for help / code team and AED","ขอความช่วยเหลือ","help","code","aed","defibrillat")),CR(P("Check breathing and carotid pulse 5–10 s","carotid","pulse","ชีพจร","breath","หายใจ")),
    H("High-quality CPR",45),CR(P("Lower half of sternum, heel of hand","sternum","สันมือ","heel","ครึ่งล่าง","กึ่งกลางอก")),CR(P("Depth 5–6 cm with full recoil","5[–-]?6 ?(cm|ซม)","5 ?(cm|ซม)","recoil","คืนตัว")),CR(P("Rate 100–120/min","100[–-]?120")),P("30:2 with head tilt–chin lift, bag-mask","30 ?: ?2","head tilt","chin lift","bag","ambu","ช่วยหายใจ"),
    H("Defibrillation",25),CR(P("AED: pads, analyse, stand clear, shock","aed","pad","shock","ช็อก","analy")),P("Resume compressions immediately; rhythm check and switch every 2 min","resume","กดต่อ","ทันที","2 ?(min|นาที)","switch","เปลี่ยนคน")]})
 ),
 interp:"Procedure: adult BLS — ประเมิน เรียกช่วย คลำชีพจร high-quality CPR 30:2 และ AED",
 summary:["ตบไหล่เรียก → ขอความช่วยเหลือ + AED → หายใจ/ชีพจร ≤ 10 วินาที","กดครึ่งล่าง sternum ลึก 5–6 ซม. 100–120/นาที full recoil 30:2","AED มาถึงใช้ทันที · ช็อกแล้วกดต่อทันที 2 นาที"]}),

/* ===== สถานี 7 ===== */
Co({page:2,orig:"7",topic:"hx",sub:"Palpitation",ex:1,title:"History taking — palpitations in a patient with diabetes",
 stem:`A patient with diabetes mellitus presents with episodes of palpitations. Take a focused history, then give your most likely diagnosis.`,
 gray:"7. คนไข้ DM มาด้วยเรื่องใจสั่น · (คอลัมน์ขวา) ต้องซักให้ได้ว่าเดิมได้ยา 1 ตัวตอนนี้เพิ่มเป็น 2 ตัว และกินข้าวไม่สม่ำเสมอ อาการมักเป็นถ้ากินข้าวช้า · Dx drug-induced mild hypoglycemia",
 flag:"อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (ยาตัวที่ 2 = sulfonylurea เป็นการแต่ง)",
 notes:"ผู้จดเน้น: ต้องซักให้ได้ว่า 1) เดิมได้ยา 1 ตัว ตอนนี้เพิ่มเป็น 2 ตัว 2) กินข้าวไม่สม่ำเสมอ 3) อาการมักเป็นถ้ากินข้าวช้า · Dx drug-induced mild hypoglycemia",
 sp:"หญิง 58 ปี เป็นเบาหวาน 5 ปี · ใจสั่น 3 สัปดาห์ เป็นครั้งละ 10–20 นาที ร่วมกับ<b>เหงื่อแตก มือสั่น หิว</b> บางครั้งมึนงง · ไม่เป็นลม ไม่ชัก · เป็นช่วงสาย ๆ หรือบ่าย<b>เมื่อกินข้าวช้า/งดมื้อ</b> (ทำงานค้าขาย กินข้าวไม่ตรงเวลา) · กินขนมหรือน้ำหวานแล้วดีขึ้นใน 10–15 นาที · <b>เดิมกิน metformin อย่างเดียว 1 เดือนก่อนหมอเพิ่มยาเม็ดอีก 1 ตัว</b> (glipizide กินก่อนอาหารเช้า) เพราะน้ำตาลสูง · ไม่มีเครื่องเจาะน้ำตาลที่บ้าน · ไม่ดื่มเหล้า ไม่ดื่มกาแฟมาก · ไม่มีน้ำหนักลด ไม่ขี้ร้อน ไม่มีเจ็บหน้าอก ไม่มีใจสั่นตอนอิ่ม/ตอนพัก · ไม่มีโรคไต/ตับ · ไม่มีโรคหัวใจ",
 parts:S(
  B("7.1 Take a focused history.",7,{tags:["hx"],key:"คำตอบผู้จด: ต้องซักให้ได้ว่าเดิมได้ยา 1 ตัวตอนนี้เพิ่มเป็น 2 ตัว และกินข้าวไม่สม่ำเสมอ อาการมักเป็นถ้ากินข้าวช้า",
   ans:"<b>ลักษณะใจสั่น:</b> onset, ระยะเวลาต่อครั้ง, ความถี่, เต้นเร็วสม่ำเสมอ/ไม่สม่ำเสมอ, เริ่มและหยุดทันทีหรือไม่ · <b>อาการร่วม hypoglycemia:</b> เหงื่อแตก มือสั่น หิว (adrenergic) · มึนงง สับสน ตาพร่า ชัก หมดสติ (neuroglycopenic) · <b>ความสัมพันธ์กับมื้ออาหาร</b>: เป็นตอน<b>กินข้าวช้า/งดมื้อ</b> หายเมื่อกินของหวาน · <b>ยา:</b> ชื่อ ขนาด เวลา <b>มีการเปลี่ยน/เพิ่มยาหรือไม่</b> (sulfonylurea, insulin), กินยาถูกเวลาไหม · ออกกำลังกาย, alcohol · โรคไต/ตับ (ยาค้าง) · DTX ขณะมีอาการ · <b>แยกสาเหตุอื่น:</b> hyperthyroid (ขี้ร้อน น้ำหนักลด), arrhythmia/โรคหัวใจ (เจ็บอก เป็นลม), anemia, caffeine/ยาอื่น, anxiety",
   exp:"ผู้ป่วย DM ใช้ sulfonylurea หรือ insulin + กินข้าวไม่สม่ำเสมอ = สาเหตุ hypoglycemia ที่พบบ่อยที่สุด · Whipple triad: อาการเข้าได้ + glucose ต่ำขณะมีอาการ + อาการหายเมื่อแก้ glucose",
   rubric:"ผู้จดเน้น 3 จุดที่ต้องซักให้ได้: ยาเพิ่มจาก 1 เป็น 2 ตัว · กินข้าวไม่สม่ำเสมอ · อาการเป็นเมื่อกินข้าวช้า — ขาดข้อใดข้อหนึ่ง = ขาดข้อสำคัญ",
   pts:[H("ลักษณะใจสั่น",20),P("Onset, duration, frequency, regular/irregular","onset","นาน","กี่ครั้ง","บ่อย","สม่ำเสมอ","regular","เร็ว"),
    H("อาการ hypoglycemia",25),P("Sweating, tremor, hunger","เหงื่อ","sweat","มือสั่น","tremor","หิว","hunger"),P("Confusion, dizziness, seizure, loss of consciousness","สับสน","confus","มึน","dizz","ชัก","seizure","หมดสติ","เป็นลม"),
    H("ยาและมื้ออาหาร",40),CR(P("Medication change — added a second drug","เพิ่มยา","ยาใหม่","เปลี่ยนยา","ยาเบาหวาน","sulfonyl","glipizide","insulin","ยา(กี่|อะไร)")),CR(P("Irregular meals","มื้อ","กินข้าว","meal","อาหาร","งด")),CR(P("Symptoms when meals are delayed, relieved by sugar","ข้าวช้า","delay","น้ำหวาน","ของหวาน","ดีขึ้น","relie")),P("Exercise, alcohol, renal/liver disease","ออกกำลัง","exercise","alcohol","เหล้า","ไต","kidney","renal"),
    H("แยกสาเหตุอื่น",15),P("Thyroid, cardiac, caffeine, anxiety","ไทรอยด์","thyroid","ขี้ร้อน","หัวใจ","cardiac","กาแฟ","caffeine","เครียด","anxiety")]}),
  B("7.2 What is your most likely diagnosis?",3,{tags:["hx"],key:"คำตอบผู้จด: Dx drug-induced mild hypoglycemia",
   ans:"<b>Drug-induced (sulfonylurea-induced) mild hypoglycemia</b> จากการเพิ่มยาตัวที่ 2 ร่วมกับกินอาหารไม่สม่ำเสมอ",
   exp:"ADA: level 1 glucose &lt; 70 mg/dL · level 2 &lt; 54 · level 3 = ต้องมีคนช่วย (severe) · แก้: <b>rule of 15</b> (กลูโคส 15–20 g → เจาะซ้ำ 15 นาที) · ป้องกัน: สอนอาการ/การแก้ พกของหวาน กินตรงเวลา ลดขนาด/เปลี่ยน sulfonylurea (glipizide/gliclazide ดีกว่า glibenclamide ในผู้สูงอายุ/CKD) หรือเปลี่ยนเป็นยากลุ่มที่ไม่ทำให้น้ำตาลต่ำ (DPP-4i, SGLT2i, GLP-1 RA)",
   pts:[CR(P("Hypoglycemia","hypoglyc","น้ำตาลต่ำ")),P("Drug-induced (sulfonylurea) with irregular meals","drug","ยา","sulfonyl","induced")]})
 ),
 interp:"History taking: ใจสั่นในผู้ป่วย DM — หาความสัมพันธ์กับมื้ออาหารและการเพิ่มยา → drug-induced hypoglycemia",
 summary:["ใจสั่น + เหงื่อแตก มือสั่น หิว ในผู้ป่วย DM = นึกถึง hypoglycemia ก่อน","ซักให้ได้: ยาเพิ่ม/เปลี่ยน (sulfonylurea, insulin) + มื้ออาหารไม่สม่ำเสมอ + เป็นเมื่อกินข้าวช้า","Rule of 15 · ลด/เปลี่ยน sulfonylurea · สอนผู้ป่วย"]}),

/* ===== สถานี 8 ===== */
Co({page:2,orig:"8",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — gastrointestinal system in a patient with cirrhosis",seen:"คล้าย SI131 Ro409–412 ข้อ 20 (ตรวจท้องและ signs of chronic liver disease)",
 stem:`A patient with liver cirrhosis is admitted. Perform a physical examination of the gastrointestinal system.`,
 gray:"8. คนไข้ตับแข็ง ตรวจร่างกายระบบ GI · (คอลัมน์ขวา) ตรวจให้หมด pitting edema, pallor, jaundice, signs of chronic liver disease, distension, surgical scar, superficial vein dilatation, bowel sounds, liver and splenic palpation, liver span, splenic dullness, fluid thrill, shifting dullness",
 flag:"ผลตรวจที่ผู้คุมบอก (sp) Claude แต่ง",
 notes:"ผู้จดเขียนว่า \"ตรวจให้หมด\" พร้อมรายการตรวจครบ (ถอดใน gray)",
 sp:"ชาย 55 ปี ตับแข็งจากสุรา · ผู้คุมบอกผลเมื่อตรวจถูกวิธีเท่านั้น: conjunctivae pale เล็กน้อย, sclera icteric · parotid gland enlargement · spider nevi ที่หน้าอก 4 จุด · palmar erythema · gynecomastia · ขนรักแร้บาง · ไม่มี flapping tremor · ท้องโป่ง สะดือจุ่น ไม่มีแผลผ่าตัด · superficial vein dilatation ทิศทางเลือดไหลออกจากสะดือ · bowel sound 6/min · ตับคลำไม่ได้ · liver span 8 cm · ม้ามคลำได้ 2 FB below LCM · Traube space dull · shifting dullness positive · fluid thrill negative · pitting edema 2+ ทั้งสองข้าง",
 parts:S(
  B("8.1 Perform a physical examination of the gastrointestinal system and report your findings.",10,{tags:["pe"],key:"คำตอบผู้จด: ตรวจให้หมด pitting edema, pallor, jaundice, signs of chronic liver disease, distension, surgical scar, superficial vein dilatation, bowel sounds, liver and splenic palpation, liver span, splenic dullness, fluid thrill, shifting dullness",
   ans:"<b>เตรียม:</b> แนะนำตัว ขออนุญาต ล้างมือ จัดท่านอนหงาย เปิดท้องจาก xiphoid ถึง symphysis pubis · <b>General:</b> <b>pallor, jaundice</b>, consciousness · <b>Signs of chronic liver disease:</b> มือ (palmar erythema, clubbing, leukonychia, Dupuytren), <b>flapping tremor</b>, parotid enlargement, <b>spider nevi</b>, gynecomastia, ขนรักแร้/อกบาง, testicular atrophy · <b>ดู:</b> <b>distension</b>, สะดือ, <b>surgical scar</b>, <b>superficial vein dilatation</b> (ทดสอบทิศทางการไหล) · <b>ฟัง:</b> <b>bowel sounds</b> ± bruit · <b>คลำ:</b> คลำตื้น-ลึก เริ่มจากจุดไกลที่เจ็บ · <b>liver และ spleen palpation</b> จาก RLQ ขึ้นมาตามจังหวะหายใจ · <b>เคาะ:</b> <b>liver span</b> (MCL), <b>splenic dullness</b> (Traube space/Castell sign) · <b>Ascites:</b> <b>shifting dullness</b>, <b>fluid thrill</b> (ascites มาก) · <b>pitting edema</b> ขา · สรุปผลตรวจ",
   exp:"ผลในบท = chronic liver disease with portal hypertension (splenomegaly, ascites, collateral vein) · collateral ที่เลือดไหลออกจากสะดือ (caput medusae) = portal hypertension · ไหลจากล่างขึ้นบน = IVC obstruction · shifting dullness ต้องมี ascites ~1,500 mL · fluid thrill เมื่อ ascites มาก",
   rubric:"ผู้จด: \"ตรวจให้หมด\" — ได้เต็มเมื่อครบทุกหมวดตามลำดับ ดู-ฟัง-คลำ-เคาะ + signs of chronic liver disease + ascites 2 วิธี + edema · ไม่ตรวจ ascites หรือ spleen = ขาดข้อสำคัญ",
   pts:[H("เตรียม/General",15),P("Introduce, consent, positioning, exposure","แนะนำตัว","ขออนุญาต","ล้างมือ","จัดท่า","expos","position"),P("Pallor and jaundice","pallor","ซีด","jaundice","icter","เหลือง"),
    H("Chronic liver signs",20),CR(P("Signs of chronic liver disease (palmar erythema, spider nevi, gynecomastia, flapping)","palmar","spider","gynecomast","flapping","asterixis","chronic liver","parotid")),
    H("Inspection/Auscultation",15),P("Distension, scar, dilated superficial veins","distens","โป่ง","scar","แผล","superficial vein","collateral","caput"),P("Bowel sounds","bowel sound","ฟัง"),
    H("Palpation/Percussion",30),CR(P("Liver and spleen palpation","คลำ(ตับ|ม้าม)","palpat","liver","spleen","ม้าม")),P("Liver span","liver span","ช่วงตับ"),P("Splenic dullness (Traube space)","traube","splenic dull","castell"),
    H("Ascites/Edema",20),CR(P("Shifting dullness","shifting")),P("Fluid thrill","fluid thrill","thrill"),P("Pitting edema","pitting","edema","บวม")]})
 ),
 interp:"PE: ระบบ GI ในผู้ป่วยตับแข็ง — signs of chronic liver disease, portal hypertension (ม้ามโต, ascites, collateral) ครบตามลำดับ",
 summary:["General: pallor, jaundice, flapping tremor + signs of chronic liver disease","ดู-ฟัง-คลำ-เคาะ: distension, scar, collateral vein, bowel sound, liver/spleen, liver span, Traube space","Ascites: shifting dullness + fluid thrill · ตรวจ pitting edema"]}),

/* ===== สถานี 9 ===== */
Co({page:2,orig:"9",topic:"micro",sub:"PBS",title:"Fatigue for 2 weeks in a 60-year-old man — blood smear",
 stem:`A 60-year-old man presents with fatigue for 2 weeks. His peripheral blood smear is shown.<br>1. Describe the blood smear.<br>2. What is your diagnosis?<br>3. List 3 laboratory investigations you would send.`,
 gray:"9. ชายอายุ 60 ปี เหนื่อยมา 2 สัปดาห์ · 1. บรรยาย PBS · 2. วินิจฉัย AIHA · 3. ส่งตรวจทางห้องปฏิบัติการมา 3 อย่าง ตอบ Direct Coomb's test, ANA, Cold agglutinin test",
 flag:NOIMG+" · ผู้จดไม่ได้เขียนคำบรรยายสเมียร์ — คำบรรยายจาก Key PBS (OSCE_REF: AIHA)",
 notes:"คำตอบผู้จด: Dx AIHA · ส่งตรวจ 3 อย่าง: Direct Coombs' test, ANA, cold agglutinin test",
 parts:S(
  B("9.1 Describe the blood smear.",4,{tags:["micro"],
   ans:"<b>RBC:</b> normochromic normocytic, <b>anisocytosis 3–4+</b>, poikilocytosis 1–2+, <b>spherocytes</b> (ขนาดต่างกัน), <b>polychromasia</b>, ± NRC, ± <b>autoagglutination</b> (เด่นใน cold type) · <b>WBC:</b> normal in number, neutrophil predominate · <b>Platelet:</b> normal in number",
   exp:"Key PBS (OSCE_REF): AIHA มี spherocytes ขนาดแตกต่างกัน (anisocytosis มาก) ต่างจาก HS ที่ spherocyte ขนาดใกล้กัน · polychromasia = reticulocytosis (marrow ตอบสนอง) · autoagglutination ชวนคิด cold agglutinin",
   rubric:"ต้องบรรยายครบ 3 series · ไม่บอก spherocytes หรือ polychromasia = ขาดข้อสำคัญ",
   pts:[H("RBC",60),CR(P("Spherocytes","sphero")),CR(P("Polychromasia","polychrom")),P("Marked anisocytosis","anisocyt"),P("Autoagglutination / NRC","agglutin","\\bnrc","nucleated"),H("WBC/Platelet",40),P("WBC normal, neutrophil predominate","wbc","neutrophil"),P("Platelet normal","platelet","เกล็ด")]}),
  B("9.2 What is your diagnosis?",2,{tags:["micro"],key:"คำตอบผู้จด: วินิจฉัย AIHA",
   ans:"<b>Autoimmune hemolytic anemia (AIHA)</b>",
   exp:"ชาย 60 ปี AIHA: หาสาเหตุทุติยภูมิ — <b>CLL/lymphoma</b> (พบบ่อยในวัยนี้), SLE/autoimmune, ยา, การติดเชื้อ (Mycoplasma, EBV, HIV, HBV/HCV) · warm AIHA (IgG, DAT IgG+) รักษาด้วย prednisolone 1 mg/kg/day · cold agglutinin disease (IgM, DAT C3d+) หลีกเลี่ยงความเย็น, rituximab",
   pts:[CR(P("Autoimmune hemolytic anemia","aiha","autoimmune hemoly","immune hemoly"))]}),
  B("9.3 List 3 laboratory investigations you would send.",3,{tags:["micro"],key:"คำตอบผู้จด: Direct Coomb's test, ANA, Cold agglutinin test",
   ans:"<b>Direct antiglobulin test (DAT, direct Coombs' test)</b> ± แยก IgG/C3d · <b>ANA</b> (หา SLE) · <b>Cold agglutinin titer</b> · อื่น ๆ ที่ได้คะแนน: reticulocyte count, LDH, indirect bilirubin, haptoglobin (ยืนยัน hemolysis), anti-HIV/HBsAg/anti-HCV, flow cytometry/CT หา lymphoproliferative disease",
   exp:"DAT เป็นการตรวจหลักที่ยืนยัน immune hemolysis · ถ้า DAT บวก IgG = warm type · C3d อย่างเดียว + cold agglutinin titer สูง = cold agglutinin disease",
   pts:[CR(P("Direct antiglobulin (Coombs') test","coomb","\\bdat\\b","antiglobulin")),P("ANA","\\bana\\b","antinuclear"),P("Cold agglutinin test","cold agglutinin","cold"),P("Hemolysis markers (retic, LDH, bilirubin, haptoglobin)","retic","\\bldh","haptoglobin","bilirubin")]})
 ),
 interp:"Microscope: PBS — spherocytes + polychromasia + autoagglutination = AIHA → DAT, ANA, cold agglutinin",
 summary:["AIHA: spherocytes ขนาดต่างกัน (anisocytosis มาก) + polychromasia ± autoagglutination","DAT ยืนยัน immune hemolysis · IgG = warm · C3d + cold agglutinin = cold type","หาสาเหตุ: CLL/lymphoma, SLE (ANA), ติดเชื้อ, ยา"]}),

/* ===== สถานี 10 ===== */
Co({page:2,orig:"10",topic:"hx",sub:"Weakness/Numbness",ex:1,title:"History taking — numbness of both legs for 1 week",
 stem:`A patient presents with numbness of both legs for 1 week. Take a focused history, then give the location of the lesion and your most likely diagnosis.`,
 gray:"10. คนไข้มาด้วยชาที่ขา 2 ข้างมา 1 สัปดาห์ · (คอลัมน์ขวา) Transverse myelitis · Spinal cord lesion",
 flag:"ไฟล์ไม่บอกว่าเป็นสถานีซักประวัติหรือตรวจร่างกาย (ลงเป็นซักประวัติ) · อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด",
 notes:"คำตอบผู้จด: Transverse myelitis · Spinal cord lesion (ตำแหน่งรอยโรค)",
 sp:"หญิง 28 ปี · ชาที่ขาทั้งสองข้าง 1 สัปดาห์ เริ่มที่ปลายเท้าแล้วลามขึ้นมาถึง<b>ระดับสะดือ</b>ภายใน 4–5 วัน รู้สึกเหมือนมีอะไรรัดรอบเอว · ขาอ่อนแรงทั้งสองข้าง เดินลำบากต้องจับผนัง 3 วัน · <b>ปัสสาวะไม่ค่อยออก ต้องเบ่ง</b> ท้องผูก 3 วัน · ปวดหลังกลางหลังเล็กน้อย · 2 สัปดาห์ก่อนเป็นหวัด ไข้ต่ำ ๆ หายเอง · แขนปกติ ไม่มีชาที่มือ ไม่มีหน้าเบี้ยว พูดปกติ กลืนปกติ หายใจปกติ · ไม่เคยตามัวหรือมองไม่เห็นข้างใดข้างหนึ่ง · ไม่มีอุบัติเหตุ ไม่ยกของหนัก · ไม่มีไข้ตอนนี้ ไม่มีน้ำหนักลด ไม่ไอเรื้อรัง ไม่เคยเป็นวัณโรค ไม่มีโรคมะเร็ง · ไม่มีผื่น ปวดข้อ ผมร่วง แผลในปาก · ไม่ได้ฉีดวัคซีนช่วงนี้ · ไม่ดื่มเหล้า กินอาหารปกติ",
 parts:S(
  B("10.1 Take a focused history.",6,{tags:["hx"],
   ans:"<b>ลักษณะอาการชา/อ่อนแรง:</b> onset (เฉียบพลัน/ค่อยเป็น), การดำเนินโรค, การกระจาย (ปลายเท้าลามขึ้น, ข้างเดียว/สองข้าง), <b>มีระดับการชา (sensory level) หรือรู้สึกรัดรอบตัว</b>, อ่อนแรงร่วม, แขนเป็นด้วยไหม · <b>Sphincter:</b> <b>ปัสสาวะ/อุจจาระ</b> (retention, incontinence) · ปวดหลัง · <b>หาสาเหตุ:</b> ติดเชื้อนำมาก่อน/วัคซีน (post-infectious), <b>อาการตามัว/optic neuritis</b> (MS, NMOSD), อุบัติเหตุ/ยกของ (compression), ไข้ น้ำหนักลด วัณโรค มะเร็ง (epidural abscess, TB spondylitis, metastasis), autoimmune (SLE, Sjögren), alcohol/ขาด B12 · <b>แยก GBS:</b> ลามขึ้นแขน หน้า กลืน หายใจ (ไม่มี sensory level ไม่มี sphincter ตั้งแต่แรก)",
   exp:"Sensory level + paraparesis + sphincter dysfunction = <b>spinal cord lesion (myelopathy)</b> · ต้องแยก compressive (ฉุกเฉินทางศัลยกรรม) ก่อนเสมอ",
   rubric:"ไม่ถาม sensory level หรือ sphincter = ขาดข้อสำคัญ (แยก spinal cord lesion ไม่ได้)",
   pts:[H("ลักษณะอาการ",35),P("Onset and progression","onset","เริ่ม","ลาม","ค่อย","เฉียบพลัน","progress"),CR(P("Sensory level / band-like sensation","sensory level","ระดับ","รัด","band","สะดือ")),P("Weakness and distribution (arms involved?)","อ่อนแรง","weak","แขน","เดิน"),
    H("Sphincter/ปวดหลัง",25),CR(P("Bladder and bowel function","ปัสสาวะ","อุจจาระ","bladder","bowel","sphincter","urin")),P("Back pain","ปวดหลัง","back pain"),
    H("หาสาเหตุ",40),P("Preceding infection or vaccination","หวัด","ติดเชื้อ","infection","วัคซีน","vaccin","ไข้"),P("Visual loss (optic neuritis — MS/NMOSD)","ตามัว","มองไม่เห็น","optic","vision","visual"),P("Trauma, TB, cancer, weight loss","อุบัติเหตุ","trauma","วัณโรค","\\btb\\b","มะเร็ง","cancer","น้ำหนักลด"),P("Ascending to arms, face, swallowing, breathing (GBS)","กลืน","หายใจ","หน้า","gbs","guillain")]}),
  B("10.2 Where is the lesion, and what is your most likely diagnosis?",4,{tags:["hx"],key:"คำตอบผู้จด: Transverse myelitis · Spinal cord lesion",
   ans:"ตำแหน่ง: <b>spinal cord lesion</b> (thoracic cord ประมาณ T10 ตาม sensory level) · Dx: <b>acute transverse myelitis</b> (post-infectious) · Ddx: <b>compressive myelopathy</b> (epidural abscess, TB spondylitis, tumor, disc), NMOSD/MS, spinal cord infarction, GBS",
   exp:"ส่ง <b>MRI whole spine with gadolinium ด่วน</b> (ตัด compression) + MRI brain + CSF (pleocytosis, IgG index, oligoclonal band) + <b>AQP4-IgG, MOG-IgG</b> + B12, HIV, syphilis, ANA · รักษา: high-dose IV methylprednisolone 1 g/day 3–5 วัน ± plasma exchange · ใส่สายสวนปัสสาวะ",
   rubric:"ตอบ spinal cord lesion อย่างเดียว = ได้บางส่วน · ตอบ transverse myelitis + ตำแหน่ง = เต็ม",
   pts:[CR(P("Spinal cord lesion (myelopathy)","spinal cord","myelopath","ไขสันหลัง","cord")),CR(P("Transverse myelitis","transverse","myelitis")),G("Differential diagnosis (≥ 1)",1,P("Compressive myelopathy","compress","abscess","tumou?r","spondyl"),P("NMOSD / MS","nmo","multiple sclerosis","\\bms\\b"),P("Guillain-Barré syndrome","guillain","\\bgbs"))]})
 ),
 interp:"History taking: ชาขาสองข้าง — sensory level + sphincter = spinal cord lesion → transverse myelitis",
 summary:["Sensory level + paraparesis + ปัสสาวะผิดปกติ = spinal cord lesion","ตัด compressive myelopathy ก่อนด้วย MRI spine with gadolinium ด่วน","Transverse myelitis: ซักติดเชื้อนำ, optic neuritis (NMOSD/MS) · Rx IV methylprednisolone"]}),

/* ===== สถานี 11 ===== */
Co({page:2,orig:"11",topic:"micro",sub:"Gram stain",title:"Joint aspirate under the microscope",
 stem:`Synovial fluid aspirated from a swollen joint is examined under the microscope after Gram staining.<br>1. Describe what you see.<br>2. What is your diagnosis?`,
 gray:"11. (กล้องจุลทรรศน์) ให้น้ำเจาะข้อ · 1. บรรยายสิ่งที่เห็น ตอบ Numerous PMN, numerous intracellular gram-negative diplococci, kidney shaped · 2. จงให้การวินิจฉัย ตอบ gonococcal arthritis หรือ disseminated gonococcal infection ก็ได้",
 flag:NOIMG+" · ข้อนี้ต่อจากหน้า 2 ไปหน้า 3 (ข้อย่อย 2 อยู่หน้า 3)",
 notes:"ผู้จดตอบ dx ได้ทั้ง gonococcal arthritis หรือ disseminated gonococcal infection",
 parts:S(
  B("11.1 Describe what you see.",3,{tags:["micro"],key:"คำตอบผู้จด: Numerous PMN, numerous intracellular gram-negative diplococci, kidney shaped",
   ans:"<b>Numerous PMN</b> · <b>numerous intracellular gram-negative diplococci</b> (สีชมพู-แดง เรียงเป็นคู่ <b>รูปไต/เมล็ดถั่ว</b> ด้านแบนชนกัน) อยู่ในเซลล์ neutrophil",
   exp:"Gram-negative diplococci: <i>Neisseria</i> (gonorrhoeae, meningitidis), <i>Moraxella</i> · Synovial fluid ใน gonococcal arthritis มักเห็นเชื้อใน Gram stain &lt; 50% และ culture ขึ้นน้อย → ส่ง NAAT จาก urethra/cervix/pharynx/rectum ร่วม",
   pts:[P("Numerous PMN","\\bpmn","neutrophil","polymorph"),CR(P("Gram-negative diplococci","gram.?negative","gram ?-","\\bgnd","แกรมลบ")),P("Intracellular, kidney/bean-shaped","intracell","ในเซลล์","kidney","bean","ไต")]}),
  B("11.2 What is your diagnosis?",2,{tags:["micro"],key:"คำตอบผู้จด: gonococcal arthritis หรือ disseminated gonococcal infection ก็ได้",
   ans:"<b>Gonococcal arthritis</b> / <b>disseminated gonococcal infection (DGI)</b> — <i>Neisseria gonorrhoeae</i>",
   exp:"DGI 2 รูปแบบ: (1) triad tenosynovitis + dermatitis (pustule) + migratory polyarthralgia (2) purulent monoarthritis (เข่า ข้อมือ ข้อเท้า) · รักษา: <b>ceftriaxone 1 g IV/IM q24h</b> จนดีขึ้น 24–48 ชม. แล้วต่อให้ครบ ≥ 7 วัน (CDC STI 2021) + รักษา chlamydia ถ้ายังไม่ได้ตัด (doxycycline) + ตรวจ HIV/syphilis + รักษาคู่นอน",
   pts:[CR(P("Gonococcal arthritis / DGI","gonococ","gonorr","neisseria","\\bdgi\\b","หนองใน"))]})
 ),
 interp:"Microscope: synovial Gram stain — intracellular GN diplococci = gonococcal arthritis/DGI",
 summary:["Intracellular gram-negative diplococci รูปไต ใน PMN = Neisseria gonorrhoeae","DGI: tenosynovitis + pustular dermatitis + polyarthralgia หรือ purulent monoarthritis","Rx: ceftriaxone 1 g q24h ≥ 7 วัน ± doxycycline · ตรวจ HIV/syphilis รักษาคู่นอน"]}),

/* ===== สถานี 13 ===== */
Co({page:3,orig:"13",topic:"micro",sub:"PBS",title:"Dyspnea and fatigue — blood smear",
 stem:`A patient presents with dyspnea and fatigue. A peripheral blood smear is given.<br>1. Describe the blood smear.<br>2. What is your diagnosis?`,
 gray:"13. ให้ PBS มาดู ผู้ป่วยมาด้วยอาการเหนื่อย · 1. บรรยาย PBS · 2. จงให้การวินิจฉัย ตอบ Acute leukemia",
 flag:NOIMG+" · ผู้จดไม่ได้เขียนคำบรรยายสเมียร์ ไม่บอกชนิด leukemia — คำบรรยายจาก Key PBS (OSCE_REF: AML/ALL)",
 notes:"คำตอบผู้จด: Acute leukemia (ไม่ระบุ AML/ALL)",
 parts:S(
  B("13.1 Describe the blood smear.",4,{tags:["micro"],
   ans:"<b>RBC:</b> normochromic normocytic, no anisocytosis/poikilocytosis (± NRC) — ลดจำนวน · <b>WBC:</b> <b>increased in number, blast predominate</b> — เซลล์ใหญ่ N:C ratio สูง chromatin ละเอียด มี nucleoli ชัด (myeloblast: cytoplasm basophilic ± granules/<b>Auer rods</b> · lymphoblast: เล็กกว่า cytoplasm น้อยมาก nucleoli ไม่ชัด ± smudge cells) · <b>Platelet:</b> <b>decreased</b> in number",
   exp:"Key PBS (OSCE_REF): AML = myeloblast predominate, platelet ลด (&lt; 5/OF) · ALL = lymphoblast predominate, smudge/basket cells · Auer rod = myeloid lineage แน่นอน · APL: abnormal promyelocytes, faggot cells, schistocytes (DIC)",
   rubric:"ต้องบอก blast predominate + platelet ลด · บอก Auer rod (ถ้ามี) ได้คะแนนเพิ่ม",
   pts:[H("WBC",60),CR(P("Increased WBC with blasts predominating","blast")),P("Blast morphology: high N:C, fine chromatin, nucleoli ± Auer rods","n ?: ?c","nucleol","auer","chromatin"),H("RBC/Platelet",40),P("Normochromic normocytic RBC (anemia)","normochrom","normocyt"),CR(P("Thrombocytopenia","thrombocytopen","platelet.{0,20}(decreas|ลด|low)","เกล็ดเลือดต่ำ"))]}),
  B("13.2 What is your diagnosis?",2,{tags:["micro"],key:"คำตอบผู้จด: Acute leukemia",
   ans:"<b>Acute leukemia</b> (บอกชนิดตามรูปเซลล์: AML ถ้ามี Auer rod/granules, ALL ถ้าเป็น lymphoblast)",
   exp:"ยืนยัน: <b>bone marrow aspiration/biopsy</b> (blast ≥ 20%) + <b>flow cytometry</b>, cytochemistry (MPO), cytogenetics/molecular · ตรวจ DIC (coagulogram, fibrinogen) โดยเฉพาะ APL และ tumor lysis (uric acid, K, PO4, Ca, Cr) · APL สงสัย → เริ่ม ATRA ทันที",
   pts:[CR(P("Acute leukemia","acute (myeloid |lymphoblastic |myeloblastic )?leuk","\\baml\\b","\\ball\\b","ลูคีเมีย"))]})
 ),
 interp:"Microscope: PBS — blast predominate + thrombocytopenia = acute leukemia",
 summary:["Acute leukemia: blasts จำนวนมาก (N:C สูง nucleoli ชัด) + anemia + thrombocytopenia","Auer rod = AML · smudge cells + lymphoblast = ALL","ยืนยัน BM + flow cytometry · ตรวจ DIC และ TLS"]}),

/* ===== สถานี 14 ===== */
Co({page:3,orig:"14",topic:"lab",sub:"Ascites",title:"Ascitic fluid analysis — calculate the SAAG and diagnose",
 stem:`A 55-year-old man with alcoholic cirrhosis presents with fever and diffuse abdominal pain for 2 days. Diagnostic paracentesis is performed.<br><br><b>Serum:</b> albumin 2.6 g/dL, total protein 6.0 g/dL<br><b>Ascitic fluid:</b> straw-coloured, slightly turbid · albumin 0.8 g/dL · total protein 1.2 g/dL · WBC 800 cells/mm³ (PMN 75%, lymphocyte 25%) · RBC 50 cells/mm³ · glucose 90 mg/dL · LDH 120 U/L (serum ULN 250) · Gram stain: no organisms seen<br><br>1. Calculate the SAAG and interpret the ascitic fluid.<br>2. What is your diagnosis?`,
 gray:"14. จงคำนวณ SAAG และให้การวินิจฉัย · 1. Wide SAAG, low protein · 2. SBP",
 flag:"⚠ ไฟล์ไม่ได้ให้ค่าแลป/ประวัติ — ค่าทั้งหมดและบริบทผู้ป่วย Claude แต่งให้ตรงกับคำตอบผู้จด (high SAAG, low protein, SBP)",
 notes:"คำตอบผู้จด: 1. Wide SAAG, low protein 2. SBP",
 parts:S(
  B("14.1 Calculate the SAAG and interpret the ascitic fluid.",4,{tags:["lab"],key:"คำตอบผู้จด: Wide SAAG, low protein",
   ans:"<b>SAAG = 2.6 − 0.8 = 1.8 g/dL (≥ 1.1) = high (wide) SAAG</b> → portal hypertension · <b>Ascitic total protein 1.2 g/dL (&lt; 2.5) = low protein</b> → cirrhosis (ไม่ใช่ cardiac ascites) · <b>Absolute PMN = 800 × 0.75 = 600 cells/mm³ (≥ 250)</b> → SBP",
   exp:"High SAAG + protein &lt; 2.5 = cirrhosis, late Budd-Chiari, massive liver metastasis · High SAAG + protein ≥ 2.5 = cardiac ascites, early Budd-Chiari · Low SAAG (&lt; 1.1) = peritoneal carcinomatosis, TB peritonitis, pancreatic, nephrotic · ascitic protein &lt; 1.5 g/dL = เสี่ยง SBP (ข้อบ่งชี้ primary prophylaxis ร่วมกับเกณฑ์อื่น)",
   rubric:"ต้องแสดงการคำนวณ SAAG + แปลผล protein · คำนวณ PMN ได้คะแนนเพิ่ม",
   pts:[CR(P("SAAG = 1.8 g/dL","1\\.8")),CR(P("High (wide) SAAG ≥ 1.1 → portal hypertension","high saag","wide saag","saag.{0,15}(high|wide|สูง|≥ ?1\\.1|> ?1\\.1)","portal hypertens")),P("Low ascitic protein < 2.5 g/dL","low protein","protein.{0,15}(low|ต่ำ|< ?2\\.5)"),P("Absolute PMN 600/mm³ (≥ 250)","600","pmn.{0,15}(≥|>) ?250")]}),
  B("14.2 What is your diagnosis?",3,{tags:["lab"],key:"คำตอบผู้จด: SBP",
   ans:"<b>Spontaneous bacterial peritonitis (SBP)</b> ในผู้ป่วย cirrhosis with portal hypertension (ascitic PMN ≥ 250/mm³ ไม่มีแหล่งติดเชื้อในช่องท้องที่ต้องผ่าตัด) → รักษาด้วย cefotaxime/ceftriaxone + IV albumin",
   exp:"รักษา: <b>cefotaxime/ceftriaxone</b> IV 5–7 วัน + <b>IV albumin 1.5 g/kg วันที่ 1 และ 1 g/kg วันที่ 3</b> (ลด hepatorenal syndrome/ตาย) · หลังหาย ให้ secondary prophylaxis (norfloxacin หรือ TMP-SMX) · คิด secondary bacterial peritonitis ถ้า protein &gt; 1 g/dL, glucose &lt; 50 mg/dL, LDH สูงกว่า ULN ของ serum หรือ polymicrobial",
   pts:[CR(P("Spontaneous bacterial peritonitis","\\bsbp\\b","spontaneous bacterial")),P("Treat: 3rd-gen cephalosporin + IV albumin","cefotaxime","ceftriaxone","albumin")]})
 ),
 interp:"Lab: ascitic fluid — SAAG ≥ 1.1 + protein < 2.5 = cirrhotic ascites · PMN ≥ 250 = SBP",
 summary:["SAAG = serum albumin − ascitic albumin · ≥ 1.1 g/dL = portal hypertension","High SAAG + protein < 2.5 = cirrhosis · protein ≥ 2.5 = cardiac","Ascitic PMN ≥ 250/mm³ = SBP → cefotaxime + albumin 1.5 g/kg D1, 1 g/kg D3"]}),

/* ===== สถานี 15 ===== */
Co({page:3,orig:"15",topic:"micro",sub:"Gram stain",title:"Ventilator-associated pneumonia — sputum Gram stain",seen:"คล้าย SI127 Ro413–416 ข้อ 1 · SI131 Ro413–416 ข้อ 1 · SI130 Ro409–412 ข้อ 22 (ผู้ป่วยใส่ท่อช่วยหายใจ sputum Gram stain → A. baumannii)",
 stem:`A patient on mechanical ventilation develops ventilator-associated pneumonia (VAP). A Gram stain of the tracheal aspirate is shown.<br>1. Describe what you see.<br>2. Name 1 organism (spell it correctly).`,
 gray:"15. เป็น VAP · 1. บรรยายสิ่งที่พบ Adequate sputum, Numerous PMN, Numerous gram-negative coccobacilli · 2. จงบอกชื่อเชื้อมา 1 ชนิด (สะกดให้ถูกต้อง) Acinetobacter baumannii",
 flag:NOIMG,
 notes:"ผู้จดย้ำ \"สะกดให้ถูกต้อง\" — Acinetobacter baumannii (ตัวเอียง)",
 parts:S(
  B("15.1 Describe what you see.",3,{tags:["micro"],key:"คำตอบผู้จด: Adequate sputum, Numerous PMN, Numerous gram-negative coccobacilli",
   ans:"<b>Adequate sputum</b> (PMN &gt; 25, SEC &lt; 10 ต่อ LPF) · <b>numerous PMN</b> · <b>numerous gram-negative coccobacilli</b> (ทรงป้อม มักเรียงเป็นคู่)",
   exp:"Gram-negative coccobacilli ใน VAP/ICU ในไทย = <i>Acinetobacter baumannii</i> พบบ่อยที่สุดและมักดื้อยา (carbapenem-resistant) · ddx: <i>Haemophilus influenzae</i> (community-acquired/early VAP)",
   pts:[P("Adequate sputum","adequate","เพียงพอ"),P("Numerous PMN","\\bpmn","neutrophil"),CR(P("Gram-negative coccobacilli","coccobacill","gram.?negative","แกรมลบ"))]}),
  B("15.2 Name 1 organism (spell it correctly).",2,{tags:["micro"],key:"คำตอบผู้จด: Acinetobacter baumannii",
   ans:"<b><i>Acinetobacter baumannii</i></b>",
   exp:"สะกด: <b>A-c-i-n-e-t-o-b-a-c-t-e-r b-a-u-m-a-n-n-i-i</b> · CRAB รักษาด้วย colistin/polymyxin B, ampicillin-sulbactam ขนาดสูง (sulbactam-based) ± ยาร่วม ตามผลความไว · ป้องกัน VAP: หัวสูง 30–45°, daily sedation interruption, hand hygiene",
   rubric:"สะกดผิด = หักคะแนนตามที่ไฟล์ย้ำ",
   pts:[CR(P("Acinetobacter baumannii","acinetobacter baumannii","acinetobacter","baumann"))]})
 ),
 interp:"Microscope: VAP sputum Gram stain — GN coccobacilli = A. baumannii",
 summary:["บอกคุณภาพเสมหะ + PMN + gram-negative coccobacilli","VAP ในไทย: Acinetobacter baumannii (สะกดให้ถูก) มักดื้อ carbapenem","Rx CRAB: colistin/polymyxin, high-dose sulbactam ตามความไว"]}),

/* ===== สถานี 17 ===== */
Co({page:3,orig:"17",topic:"skin",sub:"Fungal skin",title:"Skin lesion at the axilla — describe and investigate",seen:"คล้าย SI127 Ro417–420 ข้อ 19 · SI131 Ro409–412 ข้อ 12 (ผื่น + KOH)",
 stem:`A photograph of a skin lesion is shown.<br>1. Describe the lesion.<br>2. What bedside investigation would you perform, and what do you expect to find?`,
 gray:"17. (ช่องคำถามว่าง) · 1. Well-defined erythematous plaque with scaly on-top at left axilla area · 2. KOH exa",
 flag:NOIMG+" · ไฟล์ไม่มีโจทย์ (ช่องคำถามว่าง) — คำถามและข้อย่อยที่ 2 Claude เรียบเรียงจากคำตอบผู้จด (\"KOH exa\" ข้อความขาดที่ต้นหน้า 4 — น่าจะเป็น KOH examination)",
 notes:"คำตอบผู้จด: 1. Well-defined erythematous plaque with scaly on-top at left axilla area 2. KOH exa(mination) — ไม่ได้ระบุ dx",
 parts:S(
  B("17.1 Describe the lesion.",3,{tags:["skin"],key:"คำตอบผู้จด: Well-defined erythematous plaque with scaly on-top at left axilla area",
   ans:"<b>Well-defined erythematous plaque with scale</b> on top at the <b>left axilla</b> (บอก distribution, ขนาด, ขอบ — ถ้าขอบนูนมีขุยและตรงกลางจางลง = active border/central clearing)",
   exp:"บรรยายผื่นครบ: primary lesion (plaque) + สี + ขอบ (well-defined) + secondary change (scale) + ตำแหน่ง/การกระจาย",
   pts:[CR(P("Well-defined erythematous plaque","plaque","erythemat","well.?defined")),P("Scale","scal","ขุย"),P("Left axilla","axilla","รักแร้")]}),
  B("17.2 What bedside investigation would you perform, and what do you expect to find?",3,{tags:["skin"],key:"คำตอบผู้จด: KOH exa",
   ans:"<b>KOH examination</b> (ขูดขุยที่ขอบผื่น + 10–20% KOH): dermatophyte → <b>long branching septate hyphae</b> (± arthroconidia) = <b>tinea corporis</b> · ถ้าเป็น <i>Candida</i> intertrigo → <b>pseudohyphae + budding yeast</b> · อื่น ๆ: <b>Wood's lamp</b> (erythrasma เรืองแสงสีแดงอมส้ม coral-red)",
   exp:"Ddx ผื่นแดงมีขุยที่ซอกพับ: dermatophytosis, cutaneous candidiasis (มี satellite papule/pustule), erythrasma (<i>Corynebacterium minutissimum</i>), inverse psoriasis, seborrheic dermatitis · Tinea: topical azole/terbinafine 2–4 สัปดาห์ ห้ามใช้ steroid",
   pts:[CR(P("KOH examination","\\bkoh")),P("Septate branching hyphae (dermatophyte)","hyphae","septate","ไฮฟา","dermatophyt","tinea"),P("Candida: pseudohyphae/budding yeast; erythrasma: Wood's lamp","pseudohyph","budding","yeast","wood","candid")]})
 ),
 interp:"Skin: erythematous scaly plaque ที่ซอกรักแร้ — บรรยายผื่นและส่ง KOH",
 summary:["บรรยาย: well-defined erythematous plaque with scale ที่ left axilla","KOH: septate branching hyphae = dermatophyte · pseudohyphae + budding yeast = Candida","Wood's lamp coral-red = erythrasma"]}),

/* ===== สถานี 18 ===== */
Co({page:4,orig:"18",topic:"ekg",sub:"STEMI/ischemia",title:"12-lead EKG — interpret and diagnose",
 stem:`A 12-lead EKG is shown.<br>1. Interpret the EKG.<br>2. What is your diagnosis?`,
 gray:"18. (ช่องคำถามว่าง) · Sinus rhythm rate 90 bpm, ST elevation in lead II, III, aVF · Acute inferoposterior wall STEMI with 1st degree AV block",
 flag:NOIMG+" · ไฟล์ไม่มีโจทย์/ประวัติ — คำถาม Claude เรียบเรียงจากคำตอบผู้จด",
 notes:"คำตอบผู้จด: Sinus rhythm rate 90 bpm, ST elevation in lead II, III, aVF · Acute inferoposterior wall STEMI with 1st degree AV block",
 parts:S(
  B("18.1 Interpret the EKG.",4,{tags:["ekg"],key:"คำตอบผู้จด: Sinus rhythm rate 90 bpm, ST elevation in lead II, III, aVF",
   ans:"<b>Sinus rhythm, rate ~90 bpm</b> · <b>PR interval &gt; 200 ms (1st-degree AV block)</b> · <b>ST elevation in II, III, aVF</b> (reciprocal ST depression I, aVL) · <b>ST depression V1–V3 ± tall R</b> = posterior involvement",
   exp:"Posterior MI: ST depression + tall broad R ใน V1–V3 (ภาพกลับของ ST elevation) → ยืนยันด้วย V7–V9 (ST elevation ≥ 0.5 mm) · inferior STEMI ต้องทำ <b>V4R</b> หา RV infarction (หลีกเลี่ยง nitrate ให้ IV fluid ถ้า hypotension)",
   pts:[P("Sinus rhythm, rate ~90","sinus","90"),CR(P("ST elevation II, III, aVF","st elevation","ste\\b","st.?segment elevat")),P("ST depression V1–V3 (posterior)","v1","v2","v3","posterior","st depression"),P("Prolonged PR (1st-degree AV block)","\\bpr\\b","1st","first.?degree")]}),
  B("18.2 What is your diagnosis?",3,{tags:["ekg"],key:"คำตอบผู้จด: Acute inferoposterior wall STEMI with 1st degree AV block",
   ans:"<b>Acute inferoposterior wall STEMI with 1st-degree AV block</b> (culprit มักเป็น RCA หรือ LCx)",
   exp:"Inferior MI + AV block จาก AV nodal ischemia/vagal tone (RCA เลี้ยง AV node ~90%) มักชั่วคราว · Rx: aspirin + P2Y12 inhibitor, anticoagulant, <b>primary PCI ภายใน 120 นาที</b> (หรือ fibrinolysis ภายใน 30 นาทีถ้า PCI ไม่ทัน)",
   pts:[CR(P("Inferior wall STEMI","inferior","infero","\\bimi\\b")),P("Posterior involvement","posterior"),P("1st-degree AV block","1st","first.?degree","av block")]})
 ),
 interp:"EKG: ST elevation II, III, aVF + posterior + PR ยาว = acute inferoposterior STEMI with 1st-degree AV block",
 summary:["ST elevation II, III, aVF = inferior STEMI · ST depression V1–V3 + tall R = posterior → V7–V9","Inferior STEMI: ทำ V4R หา RV infarction","PR > 200 ms = 1st-degree AV block · Rx primary PCI ภายใน 120 นาที"]}),

/* ===== สถานี 19 ===== */
Co({page:4,orig:"19",topic:"img",sub:"Skull film",title:"Skull radiographs — describe, investigate and diagnose",seen:"คล้าย SI133 Ro403–404 LAB 4 (skull film punched-out lesions)",
 stem:`Skull radiographs of a patient are shown.<br>1. Describe the film.<br>2. List 5 further investigations to establish a definite diagnosis.<br>3. What is the most likely diagnosis?`,
 gray:"19. (ช่องคำถามว่าง) · 1. บรรยาย film ตอบ Film skull AP and lateral views, multiple osteolytic (punched-out) lesions without sclerotic rim · 2. ส่งตรวจเพิ่มเติมเพื่อ Definite diagnosis มา 5 อย่าง ตอบ bone marrow study, serum protein electrophoresis, serum light chain, Immunofixation, UA · 3. วินิจฉัยโรคที่นึกถึงมากที่สุด ตอบ Multiple myeloma",
 flag:NOIMG+" · ไฟล์ไม่มีประวัติผู้ป่วย",
 notes:"คำตอบผู้จดครบทั้ง 3 ข้อย่อย (ดู gray)",
 opinion:"ไฟล์ตอบ \"UA\" เป็น 1 ใน 5 การตรวจ — urine dipstick ตรวจ Bence Jones protein (light chain) ไม่ได้ · การตรวจปัสสาวะที่ช่วยวินิจฉัยคือ 24-hour urine protein electrophoresis/immunofixation (UPEP/UIFE) จึงเฉลยเป็น UPEP/UIFE (ตอบ UA ได้คะแนนบางส่วน)",
 parts:S(
  B("19.1 Describe the film.",3,{tags:["img"],key:"คำตอบผู้จด: Film skull AP and lateral views, multiple osteolytic (punched-out) lesions without sclerotic rim",
   ans:"Film skull <b>AP and lateral views</b>: <b>multiple well-defined osteolytic (punched-out) lesions</b> ขนาดต่าง ๆ กระจายทั่ว calvarium <b>without sclerotic rim</b>",
   exp:"Punched-out lytic lesion ไม่มี sclerotic rim (\"raindrop skull\") = multiple myeloma · ddx: lytic metastasis (ขนาดไม่เท่ากัน ขอบไม่ชัด), hyperparathyroidism (\"salt and pepper\" skull)",
   pts:[P("Skull AP and lateral views","\\bap\\b","lateral"),CR(P("Multiple punched-out osteolytic lesions","punched","osteolytic","lytic")),P("No sclerotic rim","sclerotic","rim")]}),
  B("19.2 List 5 further investigations to establish a definite diagnosis.",4,{tags:["img"],key:"คำตอบผู้จด: bone marrow study, serum protein electrophoresis, serum light chain, Immunofixation, UA",
   ans:"<b>Bone marrow aspiration/biopsy</b> (clonal plasma cells ≥ 10%) · <b>Serum protein electrophoresis (SPEP)</b> (M-spike) · <b>Serum free light chain assay</b> (κ/λ ratio) · <b>Serum immunofixation</b> · <b>24-hour urine protein electrophoresis/immunofixation (UPEP/UIFE)</b> · ร่วมกับประเมิน CRAB: CBC, Ca, Cr, skeletal survey/low-dose whole-body CT",
   exp:"IMWG: clonal BM plasma cells ≥ 10% หรือ plasmacytoma + myeloma-defining event (<b>CRAB</b>: hyperCalcemia, Renal insufficiency, Anemia, Bone lesions หรือ SLiM: BM plasma cells ≥ 60%, FLC ratio ≥ 100, &gt; 1 focal lesion บน MRI)",
   rubric:"ตอบ UA (ตามไฟล์) = ได้บางส่วน — urine dipstick ไม่เห็น light chain",
   pts:[CR(P("Bone marrow aspiration/biopsy","bone marrow","\\bbm\\b","ไขกระดูก")),CR(P("Serum protein electrophoresis","spep","electrophores")),P("Serum free light chain","light chain","\\bflc"),P("Immunofixation","immunofix","\\bife\\b"),P("Urine protein electrophoresis / Bence Jones","upep","bence","urine","\\bua\\b")]}),
  B("19.3 What is the most likely diagnosis?",2,{tags:["img"],key:"คำตอบผู้จด: Multiple myeloma",
   ans:"<b>Multiple myeloma</b>",
   exp:"PBS อาจเห็น rouleaux formation + blue-staining background (OSCE_REF) · Rx: induction (เช่น VRd/DVRd) ± autologous SCT ในผู้ที่เหมาะสม · bone: bisphosphonate/denosumab",
   pts:[CR(P("Multiple myeloma","myeloma","\\bmm\\b"))]})
 ),
 interp:"Imaging: skull film punched-out lytic lesions → multiple myeloma → BM, SPEP, FLC, immunofixation, UPEP",
 summary:["Punched-out lytic lesions ไม่มี sclerotic rim = multiple myeloma","ยืนยัน: BM (plasma cells ≥ 10%), SPEP, serum FLC, immunofixation, UPEP/UIFE","Myeloma-defining event: CRAB หรือ SLiM"]}),

/* ===== สถานี 21 ===== */
Co({page:4,orig:"21",topic:"lab",sub:"CSF",title:"Fever, headache and confusion — CSF analysis",
 stem:`A 30-year-old man presents with fever and headache for 3 days, followed by confusion and a generalized seizure today. Lumbar puncture is performed.<br><br><b>CSF:</b> opening pressure 22 cmH₂O · clear, colourless · WBC 150 cells/mm³ (lymphocyte 85%, PMN 15%) · RBC 20 cells/mm³ · protein 80 mg/dL · glucose 65 mg/dL (blood glucose 105 mg/dL) · Gram stain: no organisms · India ink: negative<br><br>1. Interpret the CSF findings.<br>2. What is your most likely diagnosis, and what is your initial treatment?`,
 gray:"21. (ช่องคำถามว่าง) · Acute viral meningoencephalitis",
 flag:"⚠ ไฟล์มีแค่คำตอบ \"Acute viral meningoencephalitis\" ไม่มีโจทย์ — ลงเป็นสถานีแปลผล CSF (ไม่แน่ใจว่าสถานีจริงเป็นแลปหรือซักประวัติ) · ประวัติและค่า CSF ทั้งหมด Claude แต่ง · ข้อย่อยการรักษา Claude เติม",
 notes:"คำตอบผู้จด: Acute viral meningoencephalitis",
 parts:S(
  B("21.1 Interpret the CSF findings.",3,{tags:["lab"],
   ans:"CSF ใส · <b>lymphocytic pleocytosis</b> (WBC 150, lymphocyte 85%) · <b>protein สูงเล็กน้อย</b> (80 mg/dL) · <b>glucose ปกติ</b> (CSF/blood = 0.62, &gt; 0.6) · Gram stain และ India ink ลบ · opening pressure สูงเล็กน้อย → เข้าได้กับ <b>aseptic (viral) pattern</b>",
   exp:"Bacterial: PMN เด่น, glucose ratio &lt; 0.4, protein สูงมาก · TB/fungal: lymphocyte เด่น + glucose ต่ำ + protein สูงมาก · Viral: lymphocyte เด่น + glucose ปกติ + protein สูงเล็กน้อย",
   pts:[CR(P("Lymphocytic pleocytosis","lymphocyt","pleocyt")),CR(P("Normal glucose (ratio > 0.6)","glucose.{0,20}(normal|ปกติ)","0\\.6","ratio")),P("Mildly raised protein","protein.{0,20}(สูง|high|rais|elevat|เพิ่ม)"),P("Viral / aseptic pattern","viral","aseptic","ไวรัส")]}),
  B("21.2 What is your most likely diagnosis, and what is your initial treatment?",3,{tags:["lab"],key:"คำตอบผู้จด: Acute viral meningoencephalitis",flag:ADD+" (ส่วนการรักษา)",
   ans:"<b>Acute viral meningoencephalitis</b> (มีไข้ ปวดหัว + สับสน/ชัก = encephalitis) — สาเหตุสำคัญที่ต้องรักษา: <b>HSV-1</b> · เริ่ม <b>IV acyclovir 10 mg/kg q8h</b> ทันที (ปรับตามไต) ระหว่างรอ CSF HSV PCR · ควบคุมชัก",
   exp:"ส่ง CSF HSV-1/2 PCR, enterovirus, VZV PCR ± JE serology · MRI brain (HSV: temporal lobe) · EEG · ถ้ายังไม่ตัด bacterial meningitis ให้ empirical ceftriaxone ± vancomycin ร่วม · acyclovir 14–21 วันถ้ายืนยัน HSV",
   pts:[CR(P("Acute viral meningoencephalitis","viral (meningo)?enceph","meningoenceph","encephalitis","สมองอักเสบ")),CR(P("Empirical IV acyclovir","acyclovir")),P("CSF HSV PCR / MRI brain","pcr","hsv","herpes","\\bmri")]})
 ),
 interp:"Lab: CSF lymphocytic pleocytosis + glucose ปกติ + มีสับสน/ชัก = viral meningoencephalitis → acyclovir",
 summary:["Viral: lymphocyte เด่น, glucose ปกติ (ratio > 0.6), protein สูงเล็กน้อย","ไข้ + สับสน/ชัก = encephalitis → IV acyclovir 10 mg/kg q8h ทันที","ส่ง CSF HSV PCR + MRI brain"]}),

/* ===== สถานี 22 ===== */
Co({page:4,orig:"22",topic:"ekg",sub:"Tachyarrhythmia",title:"12-lead EKG — describe and diagnose",
 stem:`A 12-lead EKG is shown.<br>1. Describe the EKG.<br>2. What is your diagnosis?`,
 gray:"22. (ช่องคำถามว่าง) · 1. บรรยาย EKG ตอบ Atrial fibrillation, irregular rate 130-140 bpm, no enlargement, · 2. จงวินิจฉัย ตอบ AF with RVR with lateral wall ischemia",
 flag:NOIMG+" · ไฟล์ไม่มีประวัติผู้ป่วย · ข้อนี้ต่อจากหน้า 4 ไปหน้า 5",
 notes:"คำตอบผู้จด: Atrial fibrillation, irregular rate 130–140 bpm, no enlargement · Dx AF with RVR with lateral wall ischemia",
 opinion:"ไฟล์วินิจฉัย \"lateral wall ischemia\" — ST depression ระหว่าง AF with RVR อาจเป็น rate-related (demand) ST depression ที่ไม่จำเพาะ ควรประเมินซ้ำหลังคุม rate และดูอาการ/troponin ร่วม จึงเฉลยตามไฟล์แต่ระบุข้อจำกัดนี้",
 parts:S(
  B("22.1 Describe the EKG.",4,{tags:["ekg"],key:"คำตอบผู้จด: Atrial fibrillation, irregular rate 130-140 bpm, no enlargement",
   ans:"<b>Irregularly irregular rhythm, no discernible P waves</b> (fibrillatory waves) = <b>atrial fibrillation</b> · <b>ventricular rate ~130–140 bpm</b> · narrow QRS · normal axis · <b>no chamber enlargement</b> · <b>ST depression in lateral leads</b> (I, aVL, V5–V6)",
   exp:"AF with RVR = ventricular rate &gt; 100 bpm · ประเมินด้วย: rhythm, rate, axis, intervals, chamber enlargement, ST-T",
   pts:[CR(P("Atrial fibrillation — irregularly irregular, no P waves","atrial fibrill","\\baf\\b","irregular","no p","f.?wave")),P("Rate 130–140 bpm","13\\d","14\\d"),P("No chamber enlargement","enlarge","\\blvh","hypertroph"),P("Lateral ST depression","st depression","lateral","v5","v6")]}),
  B("22.2 What is your diagnosis?",3,{tags:["ekg"],key:"คำตอบผู้จด: AF with RVR with lateral wall ischemia",
   ans:"<b>Atrial fibrillation with rapid ventricular response</b> with <b>lateral wall ischemia</b> (ST depression — อาจเป็น rate-related)",
   exp:"Unstable (hypotension, shock, ischemic chest pain, pulmonary edema) → <b>synchronized cardioversion</b> · Stable → rate control (beta-blocker/non-DHP CCB ถ้าไม่มี HFrEF; digoxin/amiodarone ใน HF) · ประเมิน <b>CHA₂DS₂-VA</b> สำหรับ anticoagulation และหาสาเหตุ (thyrotoxicosis, infection, valvular)",
   pts:[CR(P("AF with rapid ventricular response","rvr","rapid ventricular","fast ventricular","uncontrolled")),P("Lateral wall ischemia","ischemi","lateral")]})
 ),
 interp:"EKG: irregularly irregular ไม่มี P rate 130–140 = AF with RVR + lateral ST depression",
 summary:["AF: irregularly irregular, ไม่มี P wave · rate > 100 = RVR","ST depression ระหว่าง RVR อาจเป็น rate-related → ประเมินซ้ำหลังคุม rate","Unstable → synchronized cardioversion · stable → rate control + CHA₂DS₂-VA"]}),

/* ===== สถานี 23 ===== */
Co({page:5,orig:"23",topic:"img",sub:"CXR",title:"Acute dyspnea — chest radiograph",
 stem:`A chest radiograph of a patient with sudden severe dyspnea is shown.<br>1. Describe the chest radiograph.<br>2. What is your diagnosis?<br>3. What is your immediate management?`,
 gray:"23. (ช่องคำถามว่าง) · CXR · Tension pneumothorax",
 flag:NOIMG+" · ไฟล์มีแค่ \"CXR / Tension pneumothorax\" — อาการนำและคำถามทั้งหมด Claude เรียบเรียง · ข้อย่อย 23.1 และ 23.3 Claude เติม",
 notes:"คำตอบผู้จด: CXR — Tension pneumothorax",
 parts:S(
  B("23.1 Describe the chest radiograph.",3,{tags:["img"],flag:ADD,
   ans:"(ไม่มีรูป — สิ่งที่คาดว่าจะเห็น) <b>Hyperlucent hemithorax ไม่มี lung markings</b> + เห็น <b>visceral pleural line</b> และปอดยุบเข้าหา hilum · <b>mediastinum/trachea shift ไปด้านตรงข้าม</b> · <b>hemidiaphragm ข้างนั้นกดต่ำ/แบน</b> · intercostal space กว้าง · ± deep sulcus sign (ท่านอน)",
   exp:"Tension pneumothorax เป็น<b>การวินิจฉัยทางคลินิก</b> (เหนื่อยมาก, hypotension, หลอดลมเบี้ยว, เสียงหายใจหายข้างเดียว, JVP สูง) — ไม่ควรรอ CXR ก่อนเจาะระบาย",
   pts:[CR(P("Absent lung markings with visceral pleural line","lung marking","pleural line","hyperlucen","collapse","ยุบ")),CR(P("Mediastinal/tracheal shift to the opposite side","mediastin","trachea","shift")),P("Depressed hemidiaphragm, widened intercostal spaces","diaphragm","intercostal","deep sulcus")]}),
  B("23.2 What is your diagnosis?",2,{tags:["img"],key:"คำตอบผู้จด: Tension pneumothorax",
   ans:"<b>Tension pneumothorax</b>",
   exp:"ต่างจาก simple pneumothorax ตรงที่มี mediastinal shift + hemodynamic compromise",
   pts:[CR(P("Tension pneumothorax","tension"))]}),
  B("23.3 What is your immediate management?",2,{tags:["img"],flag:ADD,
   ans:"<b>Needle decompression ทันที</b> (ผู้ใหญ่: <b>4th–5th ICS anterior to mid-axillary line</b> ตาม ATLS 10th ed หรือ 2nd ICS mid-clavicular line) หรือ finger thoracostomy → ตามด้วย <b>intercostal chest drain</b> · O₂",
   exp:"ATLS 10th edition เปลี่ยนตำแหน่งเจาะในผู้ใหญ่เป็น 4th/5th ICS แนว anterior-mid axillary เพราะผนังอกที่ 2nd ICS MCL หนาเกินความยาวเข็มบ่อย",
   pts:[CR(P("Immediate needle decompression","needle","decompress","เจาะ")),P("Followed by chest tube","chest (tube|drain)","\\bicd\\b","intercostal drain","thoracostomy")]})
 ),
 interp:"Imaging: CXR tension pneumothorax — ไม่มี lung marking + mediastinal shift → needle decompression",
 summary:["ไม่มี lung marking + pleural line + mediastinum shift ไปฝั่งตรงข้าม + diaphragm กดต่ำ","Tension pneumothorax = clinical diagnosis ห้ามรอ CXR","Needle decompression (ผู้ใหญ่ 4th–5th ICS anterior-mid axillary) → chest drain"]}),

/* ===== สถานี 24 ===== */
Co({page:5,orig:"24",topic:"lab",sub:"LFT",title:"Progressive jaundice — liver function tests",
 stem:`A 62-year-old man presents with progressive jaundice and pruritus for 1 month.<br><br><b>LFT:</b> total bilirubin 12.5 mg/dL · direct bilirubin 10.2 mg/dL · AST 95 U/L · ALT 110 U/L · ALP 680 U/L (ULN 120) · GGT 520 U/L · albumin 3.8 g/dL · globulin 3.2 g/dL<br><br>1. What type of jaundice is this?<br>2. Give the 3 most likely causes.<br>3. What further investigation would you send?`,
 gray:"24. (ช่องคำถามว่าง) · 1. จงบอกชนิดของ jaundice ตอบ Obstructive jaundice · 2. จงวินิจฉัยสาเหตุที่เป็นไปได้มากที่สุดมา 3 โรค ตอบ CBD stone, CA ampulla, CA head of pancreas, CA duodenum · 3. ส่งตรวจเพิ่มเติม ตอบ CT scan, MRI, U/S upper abdomen (ได้คะแนนบ้าง)",
 flag:"⚠ ไฟล์ไม่มีประวัติและค่า LFT — ประวัติและค่าแลปทั้งหมด Claude แต่งให้ตรงกับคำตอบผู้จด (obstructive jaundice)",
 notes:"ผู้จดตอบสาเหตุ 4 โรค (ถามแค่ 3): CBD stone, CA ampulla, CA head of pancreas, CA duodenum · ส่งตรวจ CT scan, MRI, U/S upper abdomen — \"(ได้คะแนนบ้าง)\" น่าจะหมายถึง U/S ได้คะแนนบางส่วน",
 opinion:"ผู้จดระบุว่า U/S upper abdomen ได้คะแนนบางส่วน — ในทางปฏิบัติ U/S เป็น first-line imaging ของ jaundice (ดูท่อน้ำดีขยาย/นิ่ว) แต่เมื่อสงสัย periampullary malignancy, CT pancreas protocol/MRCP ให้ข้อมูลตำแหน่งและระยะโรคได้ดีกว่า จึงให้ CT/MRCP คะแนนเต็มตามไฟล์ และ U/S บางส่วน",
 parts:S(
  B("24.1 What type of jaundice is this?",2,{tags:["lab"],key:"คำตอบผู้จด: Obstructive jaundice",
   ans:"<b>Obstructive (cholestatic, post-hepatic) jaundice</b> — direct hyperbilirubinemia (DB/TB &gt; 50%) + ALP/GGT สูงเด่น (ALP &gt; 5 เท่า ULN) เทียบกับ AST/ALT สูงเล็กน้อย",
   exp:"Cholestatic pattern: R ratio = (ALT/ULN)/(ALP/ULN) &lt; 2 · Hepatocellular: R &gt; 5 · GGT สูงร่วมยืนยันว่า ALP มาจากตับ",
   pts:[CR(P("Obstructive / cholestatic jaundice","obstruct","cholesta","post.?hepatic")),P("Direct hyperbilirubinemia with ALP/GGT predominance","direct","conjugat","\\balp","\\bggt")]}),
  B("24.2 Give the 3 most likely causes.",3,{tags:["lab"],key:"คำตอบผู้จด: CBD stone, CA ampulla, CA head of pancreas, CA duodenum",
   ans:"<b>CBD stone (choledocholithiasis)</b> · <b>Carcinoma of the ampulla of Vater</b> · <b>Carcinoma of the head of pancreas</b> · (อื่น ๆ: distal cholangiocarcinoma, duodenal carcinoma)",
   exp:"Painless progressive jaundice + คัน ในผู้สูงอายุ = periampullary CA จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ · ปวดท้อง + ไข้ + เหลือง = CBD stone with cholangitis · ภาคอีสาน + กินปลาดิบ = cholangiocarcinoma",
   pts:[G("Causes (≥ 3)",3,P("CBD stone","stone","นิ่ว","choledocholith"),P("Carcinoma of the ampulla","ampull"),P("Carcinoma of the head of pancreas","pancrea"),P("Distal cholangiocarcinoma","cholangio","\\bcca\\b"),P("Duodenal carcinoma","duoden"))]}),
  B("24.3 What further investigation would you send?",2,{tags:["lab"],key:"คำตอบผู้จด: CT scan, MRI, U/S upper abdomen (ได้คะแนนบ้าง)",
   ans:"<b>Ultrasound upper abdomen</b> (first-line: ท่อน้ำดีขยาย, นิ่ว) → <b>CT abdomen (pancreas protocol)</b> และ/หรือ <b>MRI/MRCP</b> (ตำแหน่ง/สาเหตุการอุดตัน, staging) · ± EUS ± biopsy, ERCP (วินิจฉัย + ระบาย/เอานิ่ว), CA 19-9",
   exp:"ACG/ACR: U/S เป็น first-line ในผู้ป่วย cholestasis · CT/MRCP ใช้ยืนยันระดับและสาเหตุ · ERCP ใช้เพื่อรักษามากกว่าวินิจฉัย",
   rubric:"ตามไฟล์: CT scan, MRI ได้เต็ม · U/S upper abdomen ได้คะแนนบางส่วน",
   pts:[CR(P("CT abdomen / MRI-MRCP","\\bct\\b","\\bmri","mrcp","computed tomograph")),P("Ultrasound upper abdomen","\\bu/?s\\b","ultrasound","อัลตรา"),P("EUS/ERCP, CA 19-9","\\beus","ercp","ca ?19")]})
 ),
 interp:"Lab: LFT direct bilirubin + ALP/GGT สูงเด่น = obstructive jaundice → CBD stone vs periampullary CA → U/S, CT/MRCP",
 summary:["Obstructive jaundice: DB เด่น + ALP/GGT สูงมากกว่า AST/ALT","สาเหตุ: CBD stone, CA ampulla, CA head of pancreas, cholangiocarcinoma, CA duodenum","Ix: U/S (first-line) → CT pancreas protocol / MRCP ± EUS, ERCP"]}),

/* ===== สถานี 26 ===== */
Co({page:5,orig:"26",topic:"micro",sub:"UA",title:"Generalized edema in a 20-year-old man — urine sediment",
 stem:`A 20-year-old man presents with generalized edema. His urine sediment is examined under the microscope.<br>1. Describe what you see.<br>2. What is your most likely diagnosis?`,
 gray:"26. ชาย 20 ปี มาด้วยบวม ส่องฉี่ · (คอลัมน์ขวา) Oval fat body, oval fat cast, wbc 1-2, rbc 0-1 · Minimal change disease · FSGS, MN ได้คะแนนบ้าง",
 flag:NOIMG+" · คำถามย่อย Claude เรียบเรียง (ไฟล์มีแค่ \"ส่องฉี่\" และคำตอบ)",
 notes:"คำตอบผู้จด: Oval fat body, oval fat cast, wbc 1–2, rbc 0–1 · Minimal change disease · FSGS, MN ได้คะแนนบ้าง",
 parts:S(
  B("26.1 Describe what you see.",3,{tags:["micro"],key:"คำตอบผู้จด: Oval fat body, oval fat cast, wbc 1-2, rbc 0-1",
   ans:"<b>Oval fat bodies</b> (tubular cell ที่มีหยดไขมัน) · <b>fatty (oval fat) casts</b> · WBC 1–2/HPF · RBC 0–1/HPF (<b>bland sediment</b> ไม่มี RBC cast)",
   exp:"หยดไขมันใต้ polarized light เห็นเป็น <b>Maltese cross</b> (cholesterol ester) · lipiduria + บวม = nephrotic syndrome · ไม่มี dysmorphic RBC/RBC cast = ไม่ใช่ nephritic",
   pts:[CR(P("Oval fat bodies","oval fat bod","fat bod","\\bofb")),P("Fatty (oval fat) casts","fatty.{0,12}cast","fat cast","oval fat cast"),P("Few WBC and RBC — bland sediment","wbc","rbc","bland")]}),
  B("26.2 What is your most likely diagnosis?",3,{tags:["micro"],key:"คำตอบผู้จด: Minimal change disease · FSGS, MN ได้คะแนนบ้าง",
   ans:"<b>Nephrotic syndrome</b> — สาเหตุที่นึกถึงมากที่สุดในชายอายุ 20 ปี: <b>minimal change disease</b> · ddx: <b>FSGS</b>, membranous nephropathy (MN)",
   exp:"ยืนยัน nephrotic: UPCR/24-h urine protein ≥ 3.5 g/day, albumin &lt; 3 g/dL, hyperlipidemia · ผู้ใหญ่ต้องทำ <b>kidney biopsy</b> ก่อนรักษา (ต่างจากเด็ก) และหาสาเหตุทุติยภูมิ (SLE, HBV/HCV/HIV, ยา NSAIDs) · MCD ตอบสนองต่อ prednisolone ดี",
   rubric:"ตามไฟล์: minimal change disease ได้เต็ม · FSGS หรือ MN ได้คะแนนบางส่วน",
   pts:[P("Nephrotic syndrome","nephrotic"),CR(P("Minimal change disease","minimal change","\\bmcd\\b")),G("Differential diagnosis (≥ 1)",1,P("FSGS","fsgs","focal segmental"),P("Membranous nephropathy","membranous","\\bmn\\b"))]})
 ),
 interp:"Microscope: urine sediment oval fat body + fatty cast + bland = nephrotic syndrome → MCD ในผู้ใหญ่อายุน้อย",
 summary:["Oval fat body/fatty cast (Maltese cross) = lipiduria = nephrotic syndrome","ชายอายุน้อย: MCD > FSGS > MN","ผู้ใหญ่ต้องทำ kidney biopsy และหาสาเหตุทุติยภูมิ"]}),

/* ===== สถานี 27 ===== */
Co({page:5,orig:"27",topic:"lab",sub:"ABG",title:"Vomiting and rapid breathing in a young woman with diabetes — ABG",
 stem:`A 24-year-old woman with type 1 diabetes mellitus presents with nausea, vomiting and abdominal pain for 1 day. She is breathing deeply and rapidly.<br><br><b>ABG (room air):</b> pH 7.18 · PaCO₂ 22 mmHg · HCO₃⁻ 8 mEq/L · PaO₂ 100 mmHg<br><b>Electrolytes:</b> Na 135 · K 5.2 · Cl 100 mEq/L · glucose 480 mg/dL · serum ketone positive · albumin 4.0 g/dL<br><br>1. Interpret the acid–base status (show your calculations).<br>2. What is your diagnosis?`,
 gray:"27. (ช่องคำถามว่าง) · ABG",
 flag:"⚠ ไฟล์มีแค่คำว่า \"ABG\" — ประวัติ ค่า ABG/electrolyte และคำถามทั้งหมด Claude แต่ง (ไม่ทราบโจทย์จริง)",
 notes:"ผู้จดเขียนแค่หัวข้อ ABG ไม่มีค่าหรือคำตอบ",
 parts:S(
  B("27.1 Interpret the acid–base status (show your calculations).",5,{tags:["lab"],
   ans:"pH 7.18 = <b>acidemia</b> · HCO₃⁻ 8 ต่ำ = <b>metabolic acidosis</b> · <b>AG = 135 − (100 + 8) = 27</b> (albumin ปกติ) = <b>high anion gap</b> · Winter's formula: expected PaCO₂ = 1.5 × 8 + 8 ± 2 = <b>18–22</b> → PaCO₂ 22 = <b>appropriate respiratory compensation</b> · <b>Delta ratio</b> = (27 − 12)/(24 − 8) = 15/16 ≈ <b>0.94</b> (1–2 = pure HAGMA, &lt; 1 เล็กน้อย อาจมี NAGMA ร่วมเล็กน้อย) → <b>pure high anion gap metabolic acidosis with appropriate respiratory compensation</b>",
   exp:"Delta ratio &lt; 0.4 = NAGMA · 0.4–0.8 = HAGMA + NAGMA · 0.8–2 = pure HAGMA (DKA ช่วงแรกได้ 1 หรือต่ำกว่าเล็กน้อยเพราะ ketoacid ถูกขับทางปัสสาวะ) · &gt; 2 = HAGMA + metabolic alkalosis (เช่นอาเจียนมาก)",
   rubric:"ต้องแสดง AG และ Winter's formula · ไม่คำนวณ delta ratio = หักเล็กน้อย",
   pts:[P("Acidemia","acidemi","acidaemi"),CR(P("Metabolic acidosis","metabolic acidosis")),CR(P("Anion gap 27 — high anion gap","27","high anion","\\bhagma","anion gap")),CR(P("Winter's formula: expected PaCO₂ 18–22 — appropriate compensation","winter","18[–-]22","appropriate","compensat")),P("Delta ratio ≈ 1 (pure HAGMA)","delta","0\\.9")]}),
  B("27.2 What is your diagnosis?",2,{tags:["lab"],
   ans:"<b>Diabetic ketoacidosis (DKA)</b> (glucose สูง + ketone บวก + HAGMA) — ระดับความรุนแรงตาม ADA: pH 7.18 อยู่ช่วง moderate (7.00–7.24) แต่ HCO₃⁻ 8 (&lt; 10) เข้าเกณฑ์ severe → ดูแลแบบรุนแรง (ICU/HDU)",
   exp:"Rx DKA: IV fluid (NSS) → <b>K ≥ 3.5 ก่อนเริ่ม insulin</b> → regular insulin IV infusion 0.1 U/kg/h → เติม dextrose เมื่อ glucose &lt; 250 mg/dL · หาปัจจัยกระตุ้น (ติดเชื้อ ขาดยา) · K ในเลือดสูงช่วงแรกแต่ total body K ต่ำ",
   pts:[CR(P("Diabetic ketoacidosis","\\bdka\\b","ketoacidosis","diabetic keto"))]})
 ),
 interp:"Lab: ABG — HAGMA (AG 27) with appropriate compensation (Winter's) + glucose สูง ketone บวก = DKA",
 summary:["อ่าน ABG: pH → primary disorder → AG → compensation (Winter's) → delta ratio","AG = Na − (Cl + HCO₃⁻) · Winter's: PaCO₂ = 1.5 × HCO₃⁻ + 8 ± 2","DKA: IV fluid, K ≥ 3.5 ก่อน insulin, insulin 0.1 U/kg/h"]}),

/* ===== สถานี 28 ===== */
Co({page:6,orig:"28",topic:"hx",sub:"Dyspnea",ex:1,title:"History taking — dyspnea",
 stem:`A 66-year-old man presents with progressive dyspnea. Take a focused history, then give your most likely diagnosis.`,
 gray:"28. ซักประวัติเหนื่อย · (คอลัมน์ขวา) Congestive heart failure",
 flag:"อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (CHF)",
 notes:"คำตอบผู้จด: Congestive heart failure",
 sp:"ชาย 66 ปี · เหนื่อยง่ายขึ้นเรื่อย ๆ 2 เดือน เดิมเดินได้ไกล ตอนนี้เดินได้ไม่ถึง 1 ป้ายรถเมล์ต้องหยุดพัก · <b>นอนราบไม่ได้ ต้องหนุนหมอน 3 ใบ</b> 2 สัปดาห์ · <b>ตื่นกลางดึกเพราะหอบ ต้องลุกนั่ง</b> 3–4 ครั้ง · <b>ขาบวมทั้งสองข้าง</b> กดบุ๋ม · น้ำหนักขึ้น 4 kg ใน 1 เดือน · ปัสสาวะกลางคืน 3 ครั้ง · ไอแห้งตอนกลางคืน ไม่มีไข้ เสมหะไม่มี · ใจสั่นบางครั้ง · แน่นหน้าอกเวลาออกแรงบางครั้ง ไม่เคยเจ็บอกรุนแรง · เป็น<b>ความดันสูง 10 ปี เบาหวาน 8 ปี</b> กินยาไม่สม่ำเสมอ ชอบกินเค็ม · 1 เดือนก่อนซื้อยาแก้ปวดเข่า (NSAIDs) กินเอง · สูบบุหรี่ 30 pack-year เลิก 5 ปี · ไม่เคยเป็นหอบหืด/ถุงลมโป่งพอง · ไม่ซีด ไม่ถ่ายดำ · ดื่มเหล้าสังสรรค์",
 parts:S(
  B("28.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะเหนื่อย:</b> onset, ค่อยเป็น/เฉียบพลัน, <b>exercise tolerance (NYHA class)</b> · <b>อาการ HF:</b> <b>orthopnea</b> (กี่หมอน), <b>PND</b>, <b>ขาบวม</b>, น้ำหนักขึ้น, nocturia, ท้องอืด/แน่นชายโครงขวา · <b>สาเหตุ/ปัจจัยเสี่ยง:</b> เจ็บหน้าอก (CAD), ใจสั่น (AF), <b>HT, DM</b>, dyslipidemia, สูบบุหรี่, alcohol, โรคลิ้นหัวใจ/ไข้รูมาติก, โรคไทรอยด์ · <b>ปัจจัยกระตุ้น:</b> กินยาไม่สม่ำเสมอ, <b>กินเค็ม</b>, <b>ยา NSAIDs</b>, ติดเชื้อ · <b>แยกสาเหตุอื่น:</b> ไอ เสมหะ ไข้ (pneumonia), หอบหืด/COPD, ซีด/เลือดออก (anemia), ปัสสาวะน้อย/บวม (renal)",
   exp:"Orthopnea + PND + ขาบวม = volume overload จาก HF · Framingham major criteria: PND, orthopnea, JVP สูง, crepitation, S3, cardiomegaly, acute pulmonary edema",
   rubric:"ไม่ถาม orthopnea/PND/ขาบวม หรือไม่หาปัจจัยกระตุ้น = ขาดข้อสำคัญ",
   pts:[H("ลักษณะเหนื่อย",20),P("Onset, progression and exercise tolerance","onset","exercise","nyha","เดินได้","ออกแรง","กี่(ก้าว|เมตร|ชั้น)"),
    H("อาการ HF",35),CR(P("Orthopnea","orthopn","นอนราบ","หมอน")),CR(P("Paroxysmal nocturnal dyspnea","\\bpnd\\b","paroxysmal","ตื่นกลางดึก","กลางคืน")),CR(P("Leg edema, weight gain","บวม","edema","น้ำหนัก","weight")),
    H("สาเหตุ/ปัจจัยเสี่ยง",25),P("Chest pain, palpitation","เจ็บ(หน้า)?อก","chest pain","แน่นหน้าอก","ใจสั่น","palpitat"),P("HT, DM, smoking, alcohol, valvular disease","ความดัน","hypertens","\\bht\\b","เบาหวาน","\\bdm\\b","บุหรี่","smok","alcohol","เหล้า","ลิ้นหัวใจ","valv"),
    H("ปัจจัยกระตุ้น/ddx",20),P("Precipitants: adherence, salt, NSAIDs, infection","กินยา","adheren","เค็ม","salt","nsaid","ยาแก้ปวด","ติดเชื้อ"),P("Other causes: cough/fever, asthma/COPD, anemia","ไอ","cough","ไข้","หอบหืด","asthma","copd","ซีด","anemi")]}),
  B("28.2 What is your most likely diagnosis?",3,{tags:["hx"],key:"คำตอบผู้จด: Congestive heart failure",
   ans:"<b>Congestive heart failure</b> (chronic HF with acute decompensation — สาเหตุนึกถึง hypertensive/ischemic heart disease, precipitated by poor adherence, high-salt diet และ NSAIDs)",
   exp:"Ix: CXR, EKG, <b>NT-proBNP/BNP</b>, echocardiography (LVEF), CBC, Cr/electrolyte, troponin · Rx congestion: loop diuretic, จำกัดเกลือ หยุด NSAIDs · HFrEF: GDMT 4 กลุ่ม (ARNI/ACEI/ARB, beta-blocker, MRA, SGLT2i)",
   pts:[CR(P("Congestive heart failure","heart failure","\\bchf\\b","\\bhf\\b","หัวใจล้มเหลว")),P("Underlying cause and precipitants","hypertens","ischemi","\\bcad\\b","nsaid","เค็ม","salt","adheren")]})
 ),
 interp:"History taking: เหนื่อย — orthopnea, PND, ขาบวม + ปัจจัยเสี่ยง/ปัจจัยกระตุ้น = CHF",
 summary:["ซัก: exercise tolerance (NYHA), orthopnea, PND, ขาบวม/น้ำหนักขึ้น","หาสาเหตุ (HT, CAD, valve, AF) และปัจจัยกระตุ้น (ขาดยา เค็ม NSAIDs ติดเชื้อ)","Ix: NT-proBNP, CXR, EKG, echo"]}),

/* ===== สถานี 29 ===== */
Co({page:6,orig:"29",topic:"hx",sub:"Joint pain",ex:1,title:"History taking — joint pain for 1 day",seen:"คล้าย SI131 Ro417–420 ข้อ 4 · SI133 Ro405–406 ข้อ 4 (ซักประวัติปวดข้อเฉียบพลัน)",
 stem:`A 58-year-old man presents with joint pain for 1 day. Take a focused history, then give your most likely diagnosis and the 2 most likely causative organisms.`,
 gray:"29. ซักประวัติ ปวดข้อมา 1 วัน · (คอลัมน์ขวา) Septic arthritis · บอกเชื้อมา 2 ชนิด ตอบ Streptococcus sp. Staphylococcus sp.",
 flag:"อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (septic arthritis)",
 notes:"คำตอบผู้จด: Septic arthritis · เชื้อ 2 ชนิด: Streptococcus sp., Staphylococcus sp. (ตัวเอียง)",
 sp:"ชาย 58 ปี · <b>ปวดเข่าขวา 1 วัน</b> เริ่มเมื่อวานเช้า ปวดมากขึ้นเรื่อย ๆ <b>บวม แดง ร้อน</b> งอเข่าไม่ได้ ลงน้ำหนักไม่ได้ · <b>ไข้สูงหนาวสั่น</b> ตั้งแต่เมื่อคืน · ข้ออื่นไม่ปวด · ไม่เคยปวดข้อแบบนี้มาก่อน ไม่เคยเป็นเกาต์ · ไม่มีอุบัติเหตุ · 1 สัปดาห์ก่อนมี<b>แผลถลอกที่หน้าแข้งขวา</b> เป็นหนอง · ไม่เคยฉีดยาเข้าข้อ · เป็น<b>เบาหวาน</b> 10 ปี คุมไม่ดี · ไม่มีผื่น ไม่มีตาแดง ปัสสาวะแสบ หรือท้องเสียก่อนหน้า · ไม่มีคู่นอนใหม่ ไม่มีหนองในท่อปัสสาวะ · ไม่ดื่มเหล้า ไม่กินเครื่องในสัตว์มาก · ไม่ได้กินยาขับปัสสาวะ/aspirin · ไม่มีเลือดออกง่าย",
 parts:S(
  B("29.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะปวดข้อ:</b> onset (เฉียบพลัน), <b>จำนวนข้อ/ตำแหน่ง</b> (mono/oligo/poly), บวม แดง ร้อน, ขยับ/ลงน้ำหนักได้ไหม, ย้ายที่ (migratory) · <b>อาการ systemic:</b> <b>ไข้ หนาวสั่น</b> · <b>หาแหล่งติดเชื้อ/ปัจจัยเสี่ยง:</b> <b>แผลที่ผิวหนัง</b>, ฉีดยาเข้าข้อ/ผ่าตัด/ข้อเทียม, <b>DM</b>/ภูมิคุ้มกันต่ำ/steroid, IVDU, <b>sexual history</b> (gonococcal), ติดเชื้อที่อื่น · <b>แยก crystal:</b> เคยเป็นแบบนี้ (gout/CPPD), alcohol, อาหาร purine, ยาขับปัสสาวะ · <b>แยก reactive arthritis:</b> ตาแดง ปัสสาวะแสบ ท้องเสีย 2–4 สัปดาห์ก่อน · อุบัติเหตุ (hemarthrosis), ยา anticoagulant",
   exp:"Acute monoarthritis + ไข้ = <b>septic arthritis จนกว่าจะพิสูจน์ได้ว่าไม่ใช่</b> (ข้อพังได้ในไม่กี่วัน) — ต้อง arthrocentesis ก่อนให้ antibiotic",
   rubric:"ไม่ถามไข้ หรือแหล่งติดเชื้อ/ปัจจัยเสี่ยง หรือไม่แยก gout = ขาดข้อสำคัญ",
   pts:[H("ลักษณะปวดข้อ",30),P("Onset and number/location of joints","onset","กี่ข้อ","ข้อไหน","ข้ออื่น","mono","ตำแหน่ง"),P("Swelling, redness, warmth, function","บวม","แดง","ร้อน","swell","red","warm","ลงน้ำหนัก","ขยับ"),
    H("ไข้/แหล่งติดเชื้อ",40),CR(P("Fever, chills","ไข้","fever","หนาวสั่น","chill")),CR(P("Skin wound / source of infection","แผล","wound","skin","ติดเชื้อ","ฝี")),P("Joint injection, surgery, prosthesis","ฉีดยาเข้าข้อ","inject","ผ่าตัด","prosthe","ข้อเทียม"),P("DM, immunosuppression, IVDU","เบาหวาน","\\bdm\\b","diabet","steroid","ภูมิคุ้มกัน","immun","ivdu"),P("Sexual history (gonococcal)","เพศสัมพันธ์","sexual","คู่นอน","หนองใน","urethr"),
    H("แยกโรคอื่น",30),CR(P("Previous attacks / gout risk (alcohol, purine, diuretics)","เคยเป็น","gout","เกาต์","alcohol","เหล้า","เครื่องใน","purine","diuretic","ยาขับปัสสาวะ")),P("Reactive arthritis: conjunctivitis, dysuria, diarrhea","ตาแดง","conjunctiv","ปัสสาวะแสบ","dysuria","ท้องเสีย","diarrh"),P("Trauma, anticoagulant","อุบัติเหตุ","trauma","anticoag","warfarin")]}),
  B("29.2 What is your most likely diagnosis, and what are the 2 most likely causative organisms?",3,{tags:["hx"],key:"คำตอบผู้จด: Septic arthritis · Streptococcus sp. Staphylococcus sp.",
   ans:"<b>Acute septic (bacterial) arthritis</b> of the right knee · เชื้อ: <b><i>Staphylococcus aureus</i></b> (พบบ่อยที่สุด) และ <b><i>Streptococcus</i> spp.</b> (group A/B — group B พบในผู้ป่วยเบาหวาน)",
   exp:"Ix: <b>arthrocentesis</b> (WBC มักมากกว่า 50,000 PMN &gt; 90%, Gram stain, culture, crystal) + hemoculture ก่อน antibiotic · Rx: empirical IV antibiotic ตาม Gram stain (GPC: cloxacillin/cefazolin หรือ vancomycin ถ้าเสี่ยง MRSA) + ระบายหนองในข้อ (needle aspiration ซ้ำ/arthroscopic washout) · ddx: gout, pseudogout, gonococcal arthritis",
   pts:[CR(P("Septic arthritis","septic","bacterial arthritis","ข้ออักเสบติดเชื้อ")),CR(P("Staphylococcus (aureus)","staph","s\\. ?aureus")),CR(P("Streptococcus","strep"))]})
 ),
 interp:"History taking: ปวดข้อเฉียบพลัน 1 วัน + ไข้ + แผลที่ผิวหนัง + DM = septic arthritis (S. aureus, Streptococcus)",
 summary:["Acute monoarthritis + ไข้ = septic arthritis จนกว่าจะพิสูจน์ได้ว่าไม่ใช่","ซัก: ไข้, แหล่งติดเชื้อ (แผล ฉีดยาเข้าข้อ), DM/ภูมิต่ำ, sexual history, แยก gout/reactive","เชื้อ: S. aureus > Streptococcus · arthrocentesis + H/C ก่อนให้ยา + ระบายข้อ"]}),

/* ===== สถานี 31 ===== */
Co({page:6,orig:"31",topic:"hx",sub:"Dizziness/Vertigo",ex:1,title:"History taking — dizziness",
 stem:`A 68-year-old man presents with dizziness. Take a focused history, then give your most likely diagnosis and the location of the lesion.`,
 gray:"31. ซักประวัติเวียนศีรษะ · 1. ซักประวัติ · 2. ให้การวินิจฉัย ตอบ Cerebellar stroke · 3. บอกตำแหน่งพยาธิสภาพ",
 flag:"อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (cerebellar stroke) · ข้างของรอยโรค (ซ้าย) เป็นการแต่ง — ผู้จดไม่ได้ตอบตำแหน่ง",
 notes:"คำตอบผู้จด: Dx Cerebellar stroke · ข้อ 3 \"บอกตำแหน่งพยาธิสภาพ\" ผู้จดไม่ได้เขียนคำตอบ",
 sp:"ชาย 68 ปี · <b>เวียนศีรษะบ้านหมุนทันที</b>ขณะนั่งดูทีวี 6 ชั่วโมงก่อนมา หมุน<b>ตลอดเวลา</b> ไม่ขึ้นกับท่าทาง · คลื่นไส้อาเจียน 4 ครั้ง · <b>เดินเซล้มไปทางซ้าย</b> ยืนเองไม่ได้ · <b>มือซ้ายหยิบจับของไม่แม่น</b> · พูดไม่ค่อยชัด (ญาติสังเกต) · ปวดท้ายทอยเล็กน้อย · ไม่มีหูอื้อ ไม่มีเสียงดังในหู การได้ยินปกติ · ไม่มีเห็นภาพซ้อน ไม่มีหน้าชา/ชาแขนขา ไม่อ่อนแรง กลืนได้ · ไม่มีหมดสติ ไม่ชัก · ไม่เคยเป็นแบบนี้ · ไม่มีอุบัติเหตุ/บิดคอ · เป็น<b>ความดันสูง เบาหวาน ไขมันสูง</b> สูบบุหรี่ 40 pack-year · บางครั้งใจสั่นเต้นไม่สม่ำเสมอ ไม่เคยตรวจ · ไม่ได้กินยาละลายลิ่มเลือด",
 parts:S(
  B("31.1 Take a focused history.",6,{tags:["hx"],
   ans:"<b>แยกชนิดเวียนศีรษะ:</b> บ้านหมุน (vertigo) vs หน้ามืดจะเป็นลม (presyncope) vs เดินเซ (disequilibrium) · <b>onset</b> (ทันที), <b>ระยะเวลา</b> (วินาที/นาที/ต่อเนื่อง), <b>ตัวกระตุ้น</b> (เปลี่ยนท่าศีรษะ) · <b>อาการทางหู:</b> หูอื้อ เสียงในหู การได้ยินลดลง (peripheral/Ménière) · <b>อาการ brainstem/cerebellum:</b> <b>เดินเซ ล้มไปข้างไหน</b>, <b>มือไม่แม่น</b>, พูดไม่ชัด, เห็นภาพซ้อน, กลืนลำบาก, หน้าชา/แขนขาชาอ่อนแรง (5D: dizziness, diplopia, dysarthria, dysphagia, dystaxia) · ปวดศีรษะ/ปวดคอ (dissection, hemorrhage) · <b>ปัจจัยเสี่ยงหลอดเลือด:</b> HT, DM, DLP, สูบบุหรี่, <b>AF/ใจสั่น</b>, เคย stroke · ยา (antihypertensive, anticoagulant), หวัดนำมาก่อน (vestibular neuritis)",
   exp:"Acute continuous vertigo + ไม่สามารถยืน/เดินเองได้ + มีอาการ cerebellar/brainstem + vascular risk = posterior circulation stroke · HINTS (head impulse normal, direction-changing nystagmus, skew deviation) ไวกว่า CT/MRI ระยะแรกในการแยก central จาก peripheral",
   rubric:"ไม่แยกชนิด dizziness หรือไม่ถามอาการ cerebellar/brainstem หรือ vascular risk = ขาดข้อสำคัญ",
   pts:[H("ลักษณะเวียนศีรษะ",30),CR(P("Vertigo vs presyncope vs disequilibrium","บ้านหมุน","หมุน","vertigo","หน้ามืด","presyncope","เป็นลม")),P("Onset, duration, positional trigger","onset","ทันที","นาน","ตลอด","เปลี่ยนท่า","ท่าทาง","position","trigger"),
    H("หู/neuro",40),P("Hearing loss, tinnitus","หูอื้อ","tinnitus","ได้ยิน","hearing","เสียงในหู"),CR(P("Gait ataxia, limb incoordination","เดินเซ","ataxi","ไม่แม่น","clumsy","incoordinat")),P("Diplopia, dysarthria, dysphagia, numbness/weakness","ภาพซ้อน","diplopia","พูดไม่ชัด","dysarthri","กลืน","dysphag","ชา","อ่อนแรง","weak"),P("Headache / neck pain","ปวด(ศีรษะ|หัว|ท้ายทอย|คอ)","headache","neck pain"),
    H("ปัจจัยเสี่ยง",30),CR(P("Vascular risk factors (HT, DM, DLP, smoking)","ความดัน","hypertens","\\bht\\b","เบาหวาน","\\bdm\\b","ไขมัน","lipid","บุหรี่","smok")),P("Palpitation / AF, previous stroke","ใจสั่น","palpitat","\\baf\\b","atrial","stroke","อัมพาต")]}),
  B("31.2 What is your most likely diagnosis, and where is the lesion?",4,{tags:["hx"],key:"คำตอบผู้จด: Cerebellar stroke (ตำแหน่งพยาธิสภาพ ผู้จดไม่ได้ตอบ)",
   ans:"<b>Acute cerebellar stroke</b> (posterior circulation ischemic stroke) · ตำแหน่ง: <b>left cerebellar hemisphere</b> (อาการ ataxia/เซไปข้างเดียวกับรอยโรค) — หลอดเลือด left PICA/vertebral artery territory",
   exp:"Cerebellar hemisphere lesion → ipsilateral limb ataxia, ล้มไปข้างรอยโรค · vermis → truncal/gait ataxia · Ix: <b>CT brain ด่วน</b> (ตัด hemorrhage) → <b>MRI DWI</b> (CT ไวต่ำใน posterior fossa) + CTA/MRA · ภายใน 4.5 ชม. พิจารณา IV thrombolysis · เฝ้าระวัง cerebellar edema → brainstem compression/obstructive hydrocephalus (ปรึกษาประสาทศัลยแพทย์)",
   pts:[CR(P("Cerebellar stroke / posterior circulation stroke","cerebell","posterior circulation","stroke","infarct")),CR(P("Left cerebellar hemisphere","left","ซ้าย","hemisphere","pica","vertebr"))]})
 ),
 interp:"History taking: เวียนศีรษะ — acute continuous vertigo + ataxia ข้างเดียว + vascular risk = cerebellar stroke",
 summary:["แยก vertigo / presyncope / disequilibrium → onset, duration, trigger","Red flags central: เดินเองไม่ได้, limb ataxia, 5D, ปวดศีรษะ/คอ, vascular risk","Cerebellar hemisphere lesion → ataxia/ล้มข้างเดียวกัน · MRI DWI + เฝ้าระวัง edema/hydrocephalus"]}),

/* ===== สถานี 32 ===== */
Co({page:6,orig:"32",topic:"hx",sub:"Neck mass",ex:1,title:"History taking — enlarging right neck mass",seen:"คล้าย SI131 Ro409–412 ข้อ 22 (ซักประวัติก้อนที่คอด้านขวา)",
 stem:`A 48-year-old man presents with an enlarging mass on the right side of his neck. Take a focused history, then give your most likely diagnosis.`,
 gray:"32. มาด้วยก้อนที่คอโตด้านขวา · (คอลัมน์ขวา) CA nasopharynx",
 flag:"อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (CA nasopharynx) · ไฟล์ไม่บอกว่าเป็นสถานีซักประวัติ (ลงเป็นซักประวัติ)",
 notes:"คำตอบผู้จด: CA nasopharynx",
 sp:"ชาย 48 ปี · <b>คลำได้ก้อนที่คอด้านขวาใต้มุมขากรรไกร 3 เดือน</b> ค่อย ๆ โตขึ้น จากขนาดเม็ดลำไยเป็นไข่ไก่ <b>ไม่เจ็บ</b> แข็ง ขยับไม่ค่อยได้ · <b>หูขวาอื้อ ได้ยินลดลง</b> 2 เดือน · <b>คัดจมูกข้างขวา มีเลือดปนน้ำมูก/เสมหะตอนเช้า</b> บ่อย ๆ · ปวดศีรษะข้างขวาบางครั้ง · ไม่มีเห็นภาพซ้อน หน้าชา เสียงแหบ กลืนลำบาก · น้ำหนักลด 4 kg ใน 3 เดือน · ไม่มีไข้ ไม่มีเหงื่อออกกลางคืน · ไม่มีไอเรื้อรัง ไม่เคยเป็นวัณโรค ไม่มีคนในบ้านไอเรื้อรัง · ไม่มีแผลในช่องปาก ฟันปกติ · คอไม่โต ไม่ใจสั่น · สูบบุหรี่ 20 pack-year ดื่มเหล้าเป็นประจำ · ชอบกินปลาเค็ม · <b>ลุงเป็นมะเร็งโพรงหลังจมูก</b> · ไม่มีความเสี่ยง HIV",
 parts:S(
  B("32.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะก้อน:</b> ตำแหน่ง ระยะเวลา <b>อัตราการโต</b> เจ็บหรือไม่ ก้อนอื่น/ข้างตรงข้าม · <b>อาการ local (หาต้นตอ):</b> <b>หูอื้อ/ได้ยินลดลงข้างเดียว</b> (serous otitis media จาก Eustachian tube อุดตัน), <b>คัดจมูก เลือดกำเดา/เลือดปนน้ำมูก</b>, ปวดศีรษะ, <b>อาการเส้นประสาทสมอง</b> (เห็นภาพซ้อน CN VI, หน้าชา CN V) · ช่องปาก คอ: เจ็บคอ กลืนลำบาก เสียงแหบ แผลในปาก · ไทรอยด์ · <b>อาการ systemic:</b> <b>B symptoms</b> (ไข้ เหงื่อออกกลางคืน น้ำหนักลด) · <b>แยกติดเชื้อ:</b> ไอเรื้อรัง/สัมผัส TB, ฟันผุ, ความเสี่ยง HIV · <b>ปัจจัยเสี่ยง:</b> <b>สูบบุหรี่ ดื่มเหล้า</b>, ปลาเค็ม/อาหารหมักดอง, <b>ประวัติครอบครัวมะเร็งโพรงหลังจมูก</b>",
   exp:"ก้อนที่คอในผู้ใหญ่ &gt; 40 ปี โตเรื่อย ๆ ไม่เจ็บ &gt; 2–3 สัปดาห์ = มะเร็งจนกว่าจะพิสูจน์ได้ว่าไม่ใช่ (AAO-HNS) · NPC มักมาด้วย upper jugular node + หูอื้อข้างเดียว + เลือดปนน้ำมูก",
   rubric:"ไม่ถามอาการหู/จมูก หรือ B symptoms หรือปัจจัยเสี่ยงมะเร็ง = ขาดข้อสำคัญ",
   pts:[H("ลักษณะก้อน",25),P("Duration, growth rate, pain, other masses","นาน","โต","เจ็บ","ปวด","ก้อนอื่น","size","ขนาด","growth"),
    H("หาต้นตอ",40),CR(P("Ear fullness / hearing loss","หูอื้อ","ได้ยิน","hearing","ear")),CR(P("Nasal obstruction, epistaxis, blood-stained discharge","คัดจมูก","เลือดกำเดา","epistaxis","เลือดปน","น้ำมูก","nasal")),P("Cranial nerve symptoms (diplopia, facial numbness), headache","ภาพซ้อน","diplopia","หน้าชา","cranial","ปวดศีรษะ","ปวดหัว"),P("Throat/oral symptoms, hoarseness, dysphagia","กลืน","dysphag","เสียงแหบ","hoarse","แผลในปาก","เจ็บคอ"),
    H("Systemic/ปัจจัยเสี่ยง",35),CR(P("B symptoms: fever, night sweats, weight loss","ไข้","fever","เหงื่อ","night sweat","น้ำหนักลด","weight loss")),P("TB contact / HIV risk","วัณโรค","\\btb\\b","ไอเรื้อรัง","\\bhiv"),P("Smoking, alcohol, salted fish, family history of NPC","บุหรี่","smok","เหล้า","alcohol","ปลาเค็ม","ครอบครัว","family")]}),
  B("32.2 What is your most likely diagnosis?",3,{tags:["hx"],key:"คำตอบผู้จด: CA nasopharynx",
   ans:"<b>Nasopharyngeal carcinoma</b> with right cervical lymph node metastasis · ddx: lymphoma, metastatic SCC จาก head & neck primary อื่น, TB lymphadenitis",
   exp:"Ix: <b>nasopharyngoscopy + biopsy</b> (ห้ามตัดต่อมน้ำเหลืองที่คอก่อนหา primary) ± FNA ต่อมน้ำเหลือง, <b>plasma EBV DNA</b>, MRI nasopharynx/neck, staging (PET-CT หรือ CT chest/bone scan) · Rx: radiotherapy ± concurrent chemotherapy (cisplatin)",
   pts:[CR(P("Nasopharyngeal carcinoma","nasophar","\\bnpc\\b","โพรงหลังจมูก")),G("Differential diagnosis (≥ 1)",1,P("Lymphoma","lymphoma"),P("Metastatic head & neck SCC","\\bscc\\b","squamous","metasta"),P("TB lymphadenitis","\\btb\\b","tubercul"))]})
 ),
 interp:"History taking: ก้อนที่คอข้างเดียวโตเรื่อย ๆ ไม่เจ็บ + หูอื้อ + เลือดปนน้ำมูก = nasopharyngeal carcinoma",
 summary:["ก้อนคอผู้ใหญ่โตไม่เจ็บ > 2–3 สัปดาห์ = มะเร็งจนพิสูจน์ได้ว่าไม่ใช่","NPC: upper jugular node + หูอื้อข้างเดียว + เลือดปนน้ำมูก ± CN palsy","Ix: nasopharyngoscopy + biopsy, EBV DNA, MRI"]}),

/* ===== สถานี 33 ===== */
Co({page:6,orig:"33",topic:"lab",sub:"Pleural fluid",title:"Pleural fluid analysis — calculate and interpret",
 stem:`A 50-year-old man presents with fever, productive cough and right pleuritic chest pain for 5 days. Chest radiograph shows right lower lobe consolidation with a moderate right pleural effusion. Thoracentesis is performed.<br><br><b>Pleural fluid:</b> yellow, slightly turbid · protein 4.2 g/dL · LDH 450 U/L · glucose 75 mg/dL · pH 7.35 · WBC 5,000 cells/mm³ (PMN 85%, lymphocyte 15%) · Gram stain: no organisms<br><b>Serum:</b> protein 7.0 g/dL · LDH 200 U/L (ULN 250) · glucose 110 mg/dL<br><br>1. Classify the pleural effusion (show your calculations).<br>2. What is your diagnosis, and does it need chest drainage?`,
 gray:"33. คำนวณ pleural fluid · (คอลัมน์ขวา) Exudative neutrophilic parapneumonic effusion",
 flag:"⚠ ไฟล์ไม่ได้ให้ค่าแลป/ประวัติ — ค่าทั้งหมดและบริบทผู้ป่วย Claude แต่งให้ตรงกับคำตอบผู้จด · ส่วนการระบาย (drainage) Claude เติม",
 notes:"คำตอบผู้จด: Exudative neutrophilic parapneumonic effusion",
 parts:S(
  B("33.1 Classify the pleural effusion (show your calculations).",4,{tags:["lab"],
   ans:"<b>Light's criteria</b> (เข้าข้อใดข้อหนึ่ง = exudate): pleural/serum protein = 4.2/7.0 = <b>0.6 (&gt; 0.5)</b> · pleural/serum LDH = 450/200 = <b>2.25 (&gt; 0.6)</b> · pleural LDH 450 <b>&gt; 2/3 ULN of serum (167)</b> → <b>exudate</b> · cell: WBC 5,000 PMN 85% = <b>neutrophil predominant</b>",
   exp:"Exudate + neutrophil predominant = parapneumonic effusion, PE, pancreatitis, subphrenic abscess · lymphocyte predominant = TB, malignancy, chylothorax · Light's criteria อาจจัด transudate ที่ได้ diuretic เป็น exudate ได้ → ใช้ serum–pleural albumin gradient &gt; 1.2 ช่วย",
   pts:[CR(P("Protein ratio 0.6 (> 0.5)","0\\.6","protein ratio")),P("LDH ratio 2.25 (> 0.6)","2\\.2","ldh ratio"),P("Pleural LDH > 2/3 ULN","2/3","167"),CR(P("Exudate by Light's criteria","exudat","light")),CR(P("Neutrophil predominant","neutrophil","\\bpmn"))]}),
  B("33.2 What is your diagnosis, and does it need chest drainage?",3,{tags:["lab"],key:"คำตอบผู้จด: Exudative neutrophilic parapneumonic effusion",flag:ADD+" (ส่วนการระบาย)",
   ans:"<b>Exudative neutrophilic parapneumonic effusion</b> — <b>uncomplicated</b> (pH 7.35 ≥ 7.2, glucose 75 ≥ 60 mg/dL, Gram stain/culture ลบ, ไม่ใช่หนอง) → <b>รักษาด้วย antibiotic อย่างเดียว ไม่ต้องใส่สายระบาย</b> ติดตามอาการและภาพรังสี",
   exp:"Complicated parapneumonic effusion (pH &lt; 7.2, glucose &lt; 60, LDH &gt; 1,000, Gram stain/culture บวก) หรือ empyema (หนอง) → <b>chest tube drainage</b> ± intrapleural tPA/DNase · loculated effusion บน U/S/CT ก็ต้องระบาย",
   pts:[CR(P("Parapneumonic effusion","parapneumonic")),P("Uncomplicated: pH ≥ 7.2, glucose ≥ 60, Gram stain negative","uncomplicat","7\\.2","\\bph\\b"),P("Antibiotics only, no chest tube","antibiotic","ไม่ต้อง(ใส่|ระบาย)","no (chest )?(tube|drain)")]})
 ),
 interp:"Lab: pleural fluid — Light's criteria exudate + neutrophil = parapneumonic effusion; pH/glucose แยก uncomplicated vs complicated",
 summary:["Light's: protein ratio > 0.5 หรือ LDH ratio > 0.6 หรือ LDH > 2/3 ULN = exudate","Exudate + neutrophil = parapneumonic · lymphocyte = TB/malignancy","Complicated (pH < 7.2, glucose < 60, Gram/culture บวก) หรือ empyema → chest drain"]}),

/* ===== สถานี 35 ===== */
Co({page:6,orig:"35",topic:"proc",sub:"Blood transfusion",ex:1,proc:1,title:"Procedure — administering a blood transfusion",seen:"หัตถการเดียวกัน: SI130 Ro409–412 ข้อ 17 · SI131 Ro409–412 ข้อ 13 · SI127 Ro409–412 ข้อ 18",
 stem:`A patient has an order for packed red cell transfusion. Demonstrate how you would check the blood and give it to the patient. Say aloud every step you check.`,
 gray:"35. ให้เลือด · (คอลัมน์ขวา) หลอก",
 flag:"ไฟล์จดแค่ \"ให้เลือด — หลอก\" (มีจุดหลอกในถุงเลือด) ไม่บอกว่าหลอกเรื่องอะไร — จุดหลอกใน sp (หมู่เลือดบนถุงไม่ตรงกับผู้ป่วย) Claude แต่ง · checklist อิง Key Blood transfusion (OSCE_REF)",
 notes:"ผู้จดเขียนว่า \"หลอก\" = สถานีนี้มีจุดผิดที่ผู้สอบต้องจับได้ (ข้อมูลบนถุง/ใบคล้องไม่ตรง) → ต้องไม่ให้เลือดและขอเปลี่ยนถุง",
 opinion:"แบบประเมิน (OSCE_REF) ให้วัด vital sign หลังเริ่ม 5–10 นาที ไม่มีขั้น baseline — guideline (BSH/AABB) วัด baseline ก่อนเริ่ม + ~15 นาทีหลังเริ่ม + เมื่อเสร็จ จึงใส่ทั้งสองอย่าง",
 sp:"ผู้คุมรับบทพยาบาล/อาจารย์: order PRC 1 unit, ใบคล้องถุงเลือดติดกับถุง, ชุดให้เลือด, ผู้ป่วยจำลองมีป้ายข้อมือ (หมู่เลือด B Rh+) · <b>จุดหลอก: ถุงเลือดและใบคล้องเขียนหมู่เลือด A Rh+</b> (ชื่อ HN unit no. วันหมดอายุตรงกันหมด) · ถ้าผู้สอบเรียกพยาบาลมาช่วยตรวจ: ผู้คุมมาช่วยดู · ถ้าผู้สอบบอกว่าไม่ให้และขอเปลี่ยนถุง: ผู้คุมยื่นถุงใหม่ที่ถูกต้องให้ทำต่อ · ผู้ป่วยถาม \"ให้เลือดทำไม มีผลข้างเคียงอะไรไหม\"",
 parts:S(
  B("35.1 Check the order and the blood bag.",6,{tags:["proc"],
   ans:"ตรวจ <b>informed consent</b> และ <b>order</b> (ข้อบ่งชี้ ชนิด จำนวน rate) + premedication · <b>สวมถุงมือ</b> · ตรวจ<b>คุณภาพเลือด</b>: สี, ไม่มี clot, ถุงไม่รั่ว/ฉีก · <b>วันหมดอายุ</b> · <b>เรียกพยาบาลช่วย double check</b>: ใบคล้องติดถุงเสมอ · <b>ชื่อ-นามสกุล/HN</b> ถุง = ใบคล้อง = order · <b>unit no.</b> ใบคล้อง = ถุง · <b>หมู่เลือด</b> ถุง = ใบคล้อง = <b>หมู่เลือดผู้ป่วย</b> (ถามผู้ป่วยถ้าทราบ) · <b>ไม่ตรงข้อใด → ห้ามให้ แจ้งธนาคารเลือด ขอเปลี่ยนถุง</b> · (ถุงที่ถูกต้อง) เปิดชุดให้เลือด ปิด roller clamp ต่อถุงแบบ aseptic แขวน ไล่อากาศ",
   exp:"สถานีนี้เป็น \"หลอก\": หมู่เลือด A ให้ผู้ป่วยหมู่ B = ABO incompatibility → <b>acute hemolytic transfusion reaction</b> (anti-A ของผู้รับทำลาย RBC ผู้ให้) — clerical error เป็นสาเหตุหลัก",
   rubric:"ไม่จับจุดหลอก (ยังให้เลือดที่หมู่ไม่ตรง) = สถานีนี้ได้ศูนย์ · ไม่ double check กับพยาบาล = ขาดข้อสำคัญ",
   pts:[H("Order",15),P("Informed consent and order (indication, premedication, rate)","consent","ยินยอม","order","premed"),
    H("ถุงเลือด",25),P("Gloves; blood quality — colour, clots, leaks","ถุงมือ","glove","clot","ก้อน","สีเลือด","สีของเลือด","รั่ว","leak"),P("Expiry date","expir","หมดอายุ"),
    H("Double check",60),CR(P("Call a nurse to double-check","พยาบาล","nurse","double ?check")),P("Name/HN and unit number: bag, tag and order","ชื่อ","name","\\bhn\\b","unit"),CR(P("Blood group of bag vs patient — detect mismatch","หมู่เลือด","blood group","group","\\babo\\b","ไม่ตรง","mismatch")),CR(P("Do not transfuse; request a new bag","ขอ(เปลี่ยน|ถุงใหม่)","ถุงใหม่","new bag","do not (give|transfus)","ไม่ให้","เปลี่ยนถุง"))]}),
  B("35.2 At the bedside — identification, counselling and monitoring.",4,{tags:["proc"],
   ans:"<b>แนะนำตัว</b> · <b>identify ผู้ป่วย</b> (ให้บอกชื่อ-นามสกุลเอง + ป้ายข้อมือ) ตรงกับถุง · บอก<b>ข้อบ่งชี้</b> และขออนุญาต · อธิบาย<b>ผลข้างเคียง</b> (ไข้ หนาวสั่น ผื่นคัน เหนื่อย แน่นหน้าอก ปวดหลัง ปัสสาวะสีเข้ม → แจ้งทันที) · ต่อชุดให้เลือดกับ IV แบบ aseptic ปรับ rate ตาม order (ช้าใน 15 นาทีแรก) · <b>vital sign ก่อนเริ่ม และหลังเริ่ม 5–15 นาที</b> สังเกตอาการ",
   exp:"ถ้าเกิด reaction: <b>หยุดให้เลือดทันที</b> keep vein ด้วย NSS ประเมิน ABC ตรวจ clerical error ข้างเตียง ส่งถุงเลือด + เลือดผู้ป่วยไปธนาคารเลือด (DAT, crossmatch ซ้ำ) · ไข้ = AHTR/sepsis/FNHTR · urticaria อย่างเดียว = antihistamine · เหนื่อย = TACO vs TRALI",
   pts:[P("Introduce self","แนะนำตัว","introduc"),CR(P("Identify the patient against the bag","identif","ป้ายข้อมือ","wristband","ชื่อ")),P("Explain indication and complications","indication","ข้อบ่งชี้","complication","ผลข้างเคียง","ภาวะแทรกซ้อน"),P("Vital signs before and 5–15 min after starting","vital","\\bvs\\b","สัญญาณชีพ","monitor")]})
 ),
 interp:"Procedure: ให้เลือดที่มีจุดหลอก — ต้อง double check ชื่อ/HN/unit no./หมู่เลือดกับพยาบาล เจอไม่ตรงต้องไม่ให้และขอเปลี่ยนถุง",
 summary:["ก่อนให้: consent, order, คุณภาพเลือด (สี clot รั่ว), วันหมดอายุ","Double check กับพยาบาล: ชื่อ/HN, unit no., หมู่เลือดถุง = ผู้ป่วย — ไม่ตรง = ห้ามให้ ขอเปลี่ยนถุง","ข้างเตียง: identify, indication, ผลข้างเคียง, VS ก่อน + หลังเริ่ม"]}),

/* ===== สถานี 36 ===== */
Co({page:6,orig:"36",topic:"hx",sub:"Counseling",ex:1,title:"Counseling — choosing a seasoning sauce for a patient with advanced CKD",
 stem:`A patient with chronic kidney disease stage 5 who has not received kidney replacement therapy asks you which seasoning sauce he should buy. The nutrition labels of 3 sauces (A, B and C, per 1 tablespoon / 15 mL) are shown:<br>Sauce A: sodium 1,350 mg · potassium 80 mg · phosphorus 25 mg<br>Sauce B: sodium 380 mg · potassium 40 mg · phosphorus 15 mg<br>Sauce C ("low-sodium, salt substitute"): sodium 420 mg · potassium 650 mg · phosphorus 20 mg<br>Choose the most suitable sauce, explain why, and give dietary advice.`,
 gray:"36. ซอสในคนไข้ CKD stage 5 ที่ยังไม่ได้รับการเปลี่ยนไต · (คอลัมน์ขวา) เลือก B เพราะมีปริมาณ Na ต่ำ K ต่ำ",
 flag:"⚠ ไฟล์ไม่ได้ให้ฉลากซอส — ค่าบนฉลาก A/B/C และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (B = Na ต่ำ K ต่ำ) · ไม่แน่ใจว่าสถานีจริงมีผู้ป่วยจำลองหรือเป็นสถานีอ่านฉลาก",
 notes:"คำตอบผู้จด: เลือก B เพราะมีปริมาณ Na ต่ำ K ต่ำ",
 sp:"ชาย 62 ปี CKD stage 5 (eGFR 12) จาก DM และ HT ยังไม่ได้ฟอกไต/ปลูกถ่ายไต · ผลเลือดล่าสุด K 5.6 mEq/L, phosphate 5.2 mg/dL · บวมขาเล็กน้อย · ชอบทำกับข้าวเอง ใช้น้ำปลา/ซีอิ๊วมาก · ถามว่า \"ซอสยี่ห้อ C เขียนว่าโซเดียมต่ำ ดีกว่าไหม\" · ถ้าผู้สอบถามปริมาณที่ใช้: ใช้ประมาณ 3–4 ช้อนโต๊ะต่อวัน",
 parts:S(
  B("36.1 Choose the most suitable sauce and explain why.",4,{tags:["hx"],key:"คำตอบผู้จด: เลือก B เพราะมีปริมาณ Na ต่ำ K ต่ำ",
   ans:"<b>เลือกซอส B</b> — <b>โซเดียมต่ำ และโพแทสเซียมต่ำ</b> (phosphorus ต่ำด้วย) · ไม่เลือก A เพราะ<b>โซเดียมสูงมาก</b> (บวม ความดันสูง น้ำเกิน) · ไม่เลือก C แม้โซเดียมต่ำ เพราะเป็น<b>เกลือทดแทนที่ใช้ KCl → โพแทสเซียมสูง</b> เสี่ยง <b>hyperkalemia</b> (หัวใจเต้นผิดจังหวะ) ในผู้ป่วย CKD ที่ขับ K ไม่ได้",
   exp:"ผลิตภัณฑ์ \"โซเดียมต่ำ/ลดเกลือ\" หลายชนิดใช้ potassium chloride แทน NaCl — อันตรายใน CKD ระยะท้าย, ผู้ที่ใช้ ACEI/ARB/MRA · ต้องอ่านฉลากทั้ง Na และ K (และฟอสเฟตจากสารเติมแต่ง)",
   rubric:"ตอบ B โดยไม่อธิบายว่า C มี K สูง = ได้บางส่วน",
   pts:[CR(P("Choose sauce B","\\bb\\b","ยี่ห้อ ?b","ซอส ?b","sauce b")),CR(P("Low sodium","sodium","โซเดียม","\\bna\\b","เค็ม")),CR(P("Low potassium — sauce C is a KCl salt substitute (hyperkalemia risk)","potassium","โพแทสเซียม","\\bk\\b","hyperkal","kcl","salt substitute","เกลือทดแทน"))]}),
  B("36.2 Give dietary advice for this patient.",3,{tags:["hx"],flag:ADD,
   ans:"<b>จำกัดโซเดียม &lt; 2 g/วัน</b> (เกลือ &lt; 5 g; น้ำปลา 1 ช้อนโต๊ะมีโซเดียม ~1,300–1,500 mg) ลดปริมาณซอสทุกชนิด ใช้สมุนไพร/มะนาว/กระเทียมแทน · <b>จำกัดโพแทสเซียม</b> (ผลไม้ K สูง เช่น กล้วย ส้ม ทุเรียน มะพร้าว; ลวกผักทิ้งน้ำ) · <b>จำกัดฟอสเฟต</b> (อาหารแปรรูป เครื่องดื่มน้ำอัดลม) · <b>โปรตีน 0.6–0.8 g/kg/วัน</b> (ไม่ได้ฟอกไต) เน้นโปรตีนคุณภาพดี · ควบคุมน้ำดื่มตามปัสสาวะ/บวม · พบนักกำหนดอาหาร",
   exp:"KDIGO 2024: CKD แนะนำ sodium &lt; 2 g/วัน · โปรตีน 0.8 g/kg/วัน (CKD G3–G5 ที่ไม่ฟอกไต; low-protein 0.55–0.6 g/kg ภายใต้การดูแลของนักกำหนดอาหาร)",
   pts:[CR(P("Sodium < 2 g/day","2 ?g","sodium","โซเดียม","เกลือ","เค็ม")),P("Limit potassium-rich foods","potassium","โพแทสเซียม","ผลไม้","กล้วย","ส้ม"),P("Limit phosphate, moderate protein 0.6–0.8 g/kg/day","phosph","ฟอสเฟต","protein","โปรตีน"),P("Refer to a dietitian","dietitian","นักกำหนดอาหาร","โภชนากร")]})
 ),
 interp:"Counseling: อ่านฉลากซอสใน CKD stage 5 — เลือก Na ต่ำ K ต่ำ หลีกเลี่ยงเกลือทดแทน KCl",
 summary:["CKD ระยะท้าย: เลือกซอส Na ต่ำ และ K ต่ำ","ระวังผลิตภัณฑ์ 'โซเดียมต่ำ' ที่ใช้ KCl → hyperkalemia","Na < 2 g/วัน, จำกัด K และฟอสเฟต, โปรตีน 0.6–0.8 g/kg/วัน"]}),

/* ===== สถานี 37 ===== */
Co({page:6,orig:"37",topic:"img",sub:"CXR",title:"Fever and cough — chest radiograph",
 stem:`A patient presents with fever and productive cough. A chest radiograph is shown.<br>1. Describe the chest radiograph.<br>2. What is your diagnosis?`,
 gray:"37. Film CXR pneumonia right diaphragm · (คอลัมน์ขวาว่าง)",
 flag:NOIMG+" · ไฟล์จดแค่ \"Film CXR pneumonia right diaphragm\" — อาการนำและคำถาม Claude เรียบเรียง · Claude ตีความว่าเป็น pneumonia ที่ทำให้ขอบ right hemidiaphragm หายไป (right lower lobe)",
 notes:"ผู้จดเขียนในช่องคำถามว่า \"Film CXR pneumonia right diaphragm\" ช่องคำตอบว่าง",
 parts:S(
  B("37.1 Describe the chest radiograph.",3,{tags:["img"],
   ans:"(ไม่มีรูป — สิ่งที่คาดว่าจะเห็น) <b>Ill-defined alveolar opacity/consolidation with air bronchogram</b> ที่ <b>right lower zone</b> · <b>loss of the right hemidiaphragm silhouette</b> (silhouette sign) · right heart border ยังเห็นชัด · ± blunting of right costophrenic angle",
   exp:"Silhouette sign: ขอบ right hemidiaphragm หาย = RLL · ขอบ right heart border หาย = RML · lateral view ช่วยยืนยันตำแหน่ง (RLL อยู่หลัง major fissure ทับเงากระดูกสันหลัง — spine sign)",
   pts:[CR(P("Consolidation / alveolar opacity with air bronchogram","consolidat","air bronchogram","alveolar","opacit")),CR(P("Loss of right hemidiaphragm silhouette","diaphragm","silhouette")),P("Right heart border preserved","heart border","cardiac border")]}),
  B("37.2 What is your diagnosis?",2,{tags:["img"],key:"คำตอบผู้จด (ช่องคำถาม): pneumonia right diaphragm",
   ans:"<b>Right lower lobe pneumonia</b>",
   exp:"Community-acquired pneumonia: ประเมินความรุนแรง (CURB-65) · OPD: amoxicillin/macrolide/doxycycline ตามความเสี่ยง · admit non-ICU: β-lactam + macrolide หรือ respiratory fluoroquinolone",
   pts:[CR(P("Pneumonia","pneumonia","ปอดอักเสบ")),CR(P("Right lower lobe","right lower","\\brll\\b"))]})
 ),
 interp:"Imaging: CXR consolidation + loss of right hemidiaphragm silhouette = RLL pneumonia",
 summary:["Consolidation + air bronchogram = alveolar process","Silhouette: right hemidiaphragm = RLL · right heart border = RML · left heart border = lingula","CAP: CURB-65 → เลือก antibiotic ตามความรุนแรง"]}),

/* ===== สถานี 39 ===== */
Co({page:6,orig:"39",topic:"img",sub:"Bone/joint film",title:"Radiographs of both feet — describe and diagnose",seen:"คล้าย SI127 Ro413–416 ข้อ 20 (film both feet → chronic tophaceous gout)",
 stem:`Radiographs of both feet are shown.<br>1. Describe the film.<br>2. What is your diagnosis?`,
 gray:"39. film both feet · 1. อธิบาย film ที่เห็น · 2. จงให้การวินิจฉัย ตอบ chronic tophaceous gout",
 flag:NOIMG+" · ข้อนี้ต่อจากหน้า 6 ไปหน้า 7 · ผู้จดไม่ได้ตอบข้อ 1 (บรรยาย film)",
 notes:"คำตอบผู้จด: 2. chronic tophaceous gout (คำว่า \"tophaceous gout\" อยู่หน้า 7) · ข้อ 1 ไม่มีคำตอบ",
 parts:S(
  B("39.1 Describe the film.",3,{tags:["img"],
   ans:"Film both feet (AP/dorsoplantar view): <b>well-defined punched-out juxta-articular erosions with sclerotic margins and overhanging edges</b> (\"rat-bite\") โดยเฉพาะที่ <b>1st MTP joint</b> · <b>soft-tissue masses (tophi)</b> รอบข้อ ± calcification · <b>joint space preserved</b> จนระยะท้าย · ไม่มี periarticular osteopenia · asymmetric",
   exp:"แยก RA: periarticular osteopenia, marginal erosion ไม่มี sclerotic rim, joint space แคบสมมาตร · OA: joint space แคบ osteophyte subchondral sclerosis",
   pts:[CR(P("Punched-out erosions with sclerotic margin and overhanging edge","punched","erosion","overhang","rat.?bite","sclerotic")),P("1st MTP joint","\\bmtp","1st","first metatars","หัวแม่เท้า"),CR(P("Soft-tissue masses (tophi)","tophi","tophus","soft.?tissue")),P("Joint space preserved, no osteopenia","joint space","osteopen")]}),
  B("39.2 What is your diagnosis?",2,{tags:["img"],key:"คำตอบผู้จด: chronic tophaceous gout",
   ans:"<b>Chronic tophaceous gout</b>",
   exp:"ACR 2020: tophus = ข้อบ่งชี้เริ่ม urate-lowering therapy (allopurinol เริ่มขนาดต่ำ ≤ 100 mg/วัน — ตรวจ HLA-B*5801 ในคนไทยก่อน) treat-to-target serum urate &lt; 6 mg/dL (&lt; 5 ถ้ามี tophi) + prophylaxis (colchicine) 3–6 เดือน",
   pts:[CR(P("Chronic tophaceous gout","tophaceous","gout","เกาต์"))]})
 ),
 interp:"Imaging: film both feet — punched-out erosions with overhanging edge + tophi = chronic tophaceous gout",
 summary:["Gout: punched-out erosion + sclerotic rim + overhanging edge, tophi, joint space คงอยู่","1st MTP พบบ่อยที่สุด","Tophi → urate-lowering therapy, target urate < 5–6 mg/dL, ตรวจ HLA-B*5801 ก่อน allopurinol"]}),
);
})();
