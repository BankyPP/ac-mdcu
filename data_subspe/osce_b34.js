(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU71 RoB (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   71 R2: OSCE 8 สถานี (SO22 หน้า 30–32 หัวไฟล์ AC OSCE Sx RotateD 2/61) + MEQ 8 ข้อ (SM21 หน้า 35–38 หัวไฟล์ AC MEQ Sx RotateD 1/61) · มีเฉลยตัวแดงบางข้อ */
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
const Co=o=>Object.assign({set:"MDCU71",ro:"RoB",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:31,orig:"1",topic:"proc",sub:"Anorectal exam",ex:1,proc:1,title:"Rectal bleeding for 1 year — DRE with proctoscope and advice",
 stem:`A 50-year-old patient has had bleeding per rectum for about 1 year.<br>1. Demonstrate the DRE (a proctoscope is provided).<br>2. All findings are negative — give advice after the examination.`,
 gray:"XX. ผู้ป่วย 50 ปี มาด้วยถ่ายเป็นเลือดมาประมาณปีนึงมั้ง X.1 ให้แสดงวิธี DRE แต่ให้ proctoscope ด้วยเว้ย! อย่าลืมส่องไฟฉาย เพราะรูตูดมันไม่เรืองแสง X.2 ให้ Advice ผู้ป่วยหลังจากตรวจเสร็จ (All neg) อย่าลืม Advice colonoscope นะ อย่าเอาแต่ไปบอกให้เขากินผักเยอะๆ",
 notes:"แนวคำตอบในไฟล์: ใช้ proctoscope + ส่องไฟฉาย · advice colonoscopy (ไม่ใช่แค่ให้กินผัก) · ไฟล์หัวข้อ AC OSCE Sx RotateD 2/61",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 DRE and proctoscopy.",6,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต chaperone · left lateral · inspection (ใช้ไฟฉาย) · lubricate · DRE 360° · <b>proctoscopy</b>: ใส่ obturator, หล่อลื่น, สอดชี้ไปทางสะดือแล้วหันหลัง, ถอด obturator, <b>ส่องไฟฉาย</b> ดู mucosa/hemorrhoid ขณะถอยกล้อง · ดูถุงมือ เช็ดก้น",rubric:"1/ประเด็น",pts:[P("Introduce, consent","consent","แนะนำ"),P("Left lateral","left lateral","sims"),CR(P("DRE 360","360","dre","palpat")),CR(P("Proctoscope with obturator","proctoscop","obturator")),CR(P("Use light source","light","ไฟ","torch")),P("Inspect on withdrawal","withdraw","ถอย")]}),
  BS("1.2 Advice.",3,{tags:["pe"],ans:"แม้ตรวจปกติ อายุ 50 + ถ่ายเป็นเลือด 1 ปี → <b>ต้องทำ colonoscopy</b> เพื่อหา colorectal cancer/polyp · ร่วมกับอาหารกากใยสูง ดื่มน้ำ ไม่เบ่ง",rubric:"1/ประเด็น",pts:[CR(P("Colonoscopy","colonoscop")),P("Diet advice","fiber","ผัก","กากใย")]})
 ),
 interp:"DRE + proctoscopy",
 summary:["Use proctoscope with a light","Age ≥45–50 + bleeding → colonoscopy","Don't stop at diet advice"]}),

/* ===== OSCE 2 ===== */
Co({page:31,orig:"2",topic:"img",sub:"Urolithiasis",title:"IVP series — describe, diagnose, treat",
 stem:`A full IVP series is given (examine the films on the light box).<br>1. Describe the abnormality.<br>2. Give the diagnosis.<br>3. Give the treatment.`,
 gray:"XX. ให้ film IVP มาเต็มโต๊ะเลย แต่ดูเห็นแค่สองใบที่แม่งเสียบอยู่บนเครื่องฉาย 1. จงบรรยายความผิดปกติ 2. จง Diagnosis 3. จงบอก Treatment",
 flag:NOIMG,imgAlt:"ฟิล์ม IVP หลาย phase",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่มีรูป — เฉลยหลักการอ่าน IVP (ตัวอย่างนิ่วอุดกั้น)",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("2.1 Answer.",6,{tags:["img"],ans:"อ่านตาม phase: <b>scout (KUB)</b> หา radio-opaque stone · nephrogram (ไตทำงาน, delayed) · pyelogram (<b>hydronephrosis, filling defect</b>, การไหลของ contrast) · ureter (ระดับที่อุด, hydroureter) · bladder · post-void · ตัวอย่าง Dx: <b>right ureteric stone with obstruction</b> · Rx: <5 มม. → medical expulsive therapy (tamsulosin) · ใหญ่/อุดกั้น/ติดเชื้อ → <b>URS</b>, ESWL, หรือ decompress (DJ/PCN) ก่อนถ้าติดเชื้อ",rubric:"1/ประเด็น",pts:[CR(P("Scout film stone","scout","kub","opaque")),P("Delayed nephrogram","delay","nephrogram"),CR(P("Hydronephrosis / level of obstruction","hydroneph","obstruct","hydroureter")),P("Filling defect (radiolucent stone/tumor)","filling defect"),CR(P("Diagnosis: stone","stone","calcul","นิ่ว")),P("Treatment: MET / URS / ESWL / drain","tamsulosin","urs","ureteroscop","eswl","stent","pcn")]})
 ),
 interp:"IVP",
 summary:["Read every phase: scout → post-void","Delayed nephrogram = obstruction","Infected obstruction → drain first"]}),

/* ===== OSCE 3 ===== */
Co({page:31,orig:"3",topic:"proc",sub:"Scrub and gloving",ex:1,proc:1,title:"Gloving and surgical hand rub (WHO alcohol gel)",
 stem:`An examiner sits with a baby doll as a prop.<br>1. Choose the correct glove size from the options.<br>2. Perform surgical hand antisepsis to WHO standard using alcohol gel.`,
 gray:"XX. มีจารนั่งอยู่ กับตุ๊กตาเด็กที่เป็นของว่างของอาจารย์ 1. ให้ใส่ถุงมือสเตอไรล์ มีถุงมือสั้นกะยาวให้เลือก 2. ให้ล้างมือโดยมาตรฐานองค์การอนามัยโลก โดย demonstrate โดยใช้ Alcohol gel",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Hand antisepsis and gloving.",7,{tags:["proc"],ans:"ถอดเครื่องประดับ · <b>alcohol hand rub ตามขั้นตอน WHO</b>: ฝ่ามือ, หลังมือ, ง่ามนิ้ว, หลังนิ้ว, นิ้วโป้ง, ปลายนิ้ว/เล็บ, ข้อมือ จนถึงศอก (surgical rub ต่อเนื่องถึง forearm) ถูจนแห้ง ~3 นาที · <b>เลือกถุงมือผ่าตัดยาว (surgical gloves)</b> ไม่ใช่ถุงมือสั้นตรวจ · ใส่แบบ sterile: มือเปล่าแตะเฉพาะด้านในของ cuff",rubric:"1/ประเด็น",pts:[P("Remove jewelry","jewel","watch","นาฬิกา"),CR(P("WHO hand rub steps","palm","ฝ่ามือ","back","thumb","fingertip","who")),P("Up to forearm/elbow","forearm","elbow","ศอก"),P("Rub until dry","dry","แห้ง"),CR(P("Choose long surgical gloves","long","ยาว","surgical glove")),CR(P("Sterile gloving technique","inside","inner","cuff","ด้านใน"))]})
 ),
 interp:"Hand rub + gloving",
 summary:["WHO steps, include thumbs and fingertips","Surgical rub to forearm","Long surgical gloves, sterile technique"]}),

/* ===== OSCE 4 ===== */
Co({page:31,orig:"4",topic:"hx",sub:"Acute abdomen",ex:1,kimg:["mo31_alv"],title:"History — 22-year-old with abdominal pain (Alvarado)",
 stem:`A 22-year-old has abdominal pain (the simulated patient is older than stated — beware).<br>1. Take a history (don't forget the Alvarado score items and menstrual history).<br>2. Give the diagnosis and differential diagnoses.`,
 gray:"XX. ให้ซักประวัติ คนไข้อายุ 22 ปี ปวดท้อง แต่คนไข้จำลองที่มาให้ประวัติอายุมากกว่าในโจทย์ ระวังสับสน 1. จงซักประวัติ อย่าลืมซักตาม Avorado score เพราะจริงๆคนนี้เป็นไส้ติ่ง ละก็อย่าลืมซักเรื่องประจำเดือน 2. จง Diag มาหนึ่งอย่าง แต่ดูตอนพูด diff diag ไปด้วย",
 notes:"แนวคำตอบในไฟล์: ซักตาม Alvarado score · คนนี้เป็นไส้ติ่ง · อย่าลืมประจำเดือน",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 History.",7,{tags:["hx"],ans:"ตาม <b>Alvarado (MANTRELS)</b>: <b>Migration ของปวดไป RLQ</b>, <b>Anorexia</b>, <b>Nausea/vomiting</b> (+ T, rebound, leukocytosis, shift จาก PE/lab) · onset ลักษณะ ความรุนแรง · ไข้ · อุจจาระ/ปัสสาวะ · <b>ประจำเดือน LMP, ตกขาว, เพศสัมพันธ์</b> (ectopic, PID, ovarian cyst torsion) · โรคประจำตัว ผ่าตัด",rubric:"1/ประเด็น",pts:[CR(P("Migration of pain to RLQ","migrat","ย้าย","rlq")),CR(P("Anorexia","anorexia","เบื่อ")),P("Nausea/vomiting","nause","vomit","อาเจียน"),P("Fever","fever","ไข้"),P("Bowel and urinary symptoms","bowel","urin","ปัสสาวะ"),CR(P("Menstrual / sexual history","lmp","ประจำเดือน","menstru","sexual","ตกขาว"))]}),
  BS("4.2 Diagnosis and differentials.",3,{tags:["hx"],ans:"<b>Acute appendicitis</b> · ddx: <b>ruptured ectopic pregnancy</b>, PID/tubo-ovarian abscess, <b>ovarian cyst torsion/rupture</b>, mesenteric adenitis, ureteric colic, gastroenteritis",rubric:"1/ประเด็น",pts:[CR(P("Acute appendicitis","appendicitis")),P("Ectopic pregnancy","ectopic"),P("PID or ovarian pathology","pid","ovarian","torsion")]})
 ),
 interp:"Alvarado",
 summary:["MANTRELS: migration, anorexia, nausea, tenderness, rebound, elevated T, leukocytosis, shift","Ask LMP in women","DDx: ectopic, PID, ovarian torsion"]}),

/* ===== OSCE 5 ===== */
Co({page:31,orig:"5",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Local anesthesia (choose needle) and vertical mattress",
 stem:`1. Demonstrate local anesthetic injection (needles 20G and 25G are provided).<br>2. Place 1 vertical mattress suture.`,
 gray:"XX. 1. ให้ Demonstrate ฉีดยาชา มีเข็ม 20 กับ 25 อย่าลืมถามว่าแพ้ยาชามั้ย อย่าลืมถามว่ายังเจ็บมั้ยก่อนจะเย็บ 2. ให้เย็บ vertical matress 1 stitch",
 notes:"แนวคำตอบในไฟล์: อย่าลืมถามแพ้ยาชา · ถามว่ายังเจ็บไหมก่อนเย็บ · อาจารย์เข้มมาก",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Local anesthesia.",5,{tags:["proc"],ans:"<b>ถามแพ้ยาชา</b> · ตรวจยา · <b>ดูดยาด้วยเข็ม 20G แล้วเปลี่ยนเป็น 25G</b> สำหรับฉีด (เจ็บน้อย) · แทงผ่านขอบแผล aspirate ก่อนฉีด · รอ แล้ว<b>ทดสอบว่ายังเจ็บไหมก่อนเย็บ</b>",rubric:"1/ประเด็น",pts:[CR(P("Ask allergy","allerg","แพ้")),CR(P("Draw with 20G, inject with 25G","25","20")),P("Aspirate","aspirat"),CR(P("Test anesthesia before suturing","test","เจ็บ"))]}),
  BS("5.2 Vertical mattress.",3,{tags:["suture"],ans:"Far-far แล้ว near-near · ปมข้างแผล · evert",rubric:"1/ประเด็น",pts:[CR(P("Far-far","far")),CR(P("Near-near","near")),P("Eversion","evert")]})
 ),
 interp:"LA + VM",
 summary:["Draw with large needle, inject with small","Ask allergy; test before suturing","VM: far-far, near-near"]}),

/* ===== OSCE 6 ===== */
Co({page:31,orig:"6",topic:"suture",sub:"Suture selection",kimg:["mo31_sut"],title:"Inguinal hernia repair — sutures and technique",
 stem:`Pictures show an inguinal hernia repair, suture materials A–E and a table to fill in.<br>1. What is used for adult inguinal hernia repair (hernioplasty)?<br>2. What is used to suture the aponeurosis?<br>3. What is used to ligate the hernia sac?<br>4. What is the name of the suture technique shown?<br>5. What is used to close the skin?`,
 gray:"7.มีสามรูปข้างล่าง 7.1 ทำinguinal hernia repair(hernioplasty) ในผู้ใหญ่ใช้อะไร 7.2 เย็บaponeurosis (มั้งไม่แน่ใจ)ใช้อะไร 7.3 จำได้ว่าเป็นผูกคอไส้ติ่ง(ไม่แน่ใจ)ต้องใช้อะไร 7.4 หัตถการนี้ชื่อว่าอะไร(ตามรูป) 7.5 เย็บskinใช้อะไร(ไม่แน่ใจ) โจทย์ในข้อสอบยาวโครตเหมือนมีเวลาให้ครึ่งชั่วโมง",
 notes:"แนวคำตอบในไฟล์ (ตัวแดง): 7.1 vicryl mesh · 7.3 silk · 7.4 vertical mattress suture · 7.5 nylon · ป้ายในรูป: B plain catgut, C nylon, D Vicryl mesh, E silk · ⚠ hernioplasty ผู้ใหญ่ใช้ polypropylene (Prolene) mesh แบบถาวร — Vicryl mesh เป็นแบบสลายได้ ไม่ใช้ซ่อม hernia ถาวร",opinion:"ความมั่นใจปานกลาง (ข้อ 7.1 ขัดกับหลัก)",
 parts:S(
  BS("6.1 Answers.",6,{tags:["suture"],ans:"7.1 <b>Mesh</b> — ตามคีย์ในไฟล์ Vicryl mesh (D) แต่ตามหลัก Lichtenstein ใช้ <b>polypropylene (Prolene) mesh</b> ถาวร · 7.2 aponeurosis (external oblique) → <b>Vicryl</b> หรือ Prolene · 7.3 ผูก sac/ligation → <b>silk</b> (E) · 7.4 <b>vertical mattress suture</b> · 7.5 skin → <b>nylon</b> (C)",rubric:"1/ข้อ",pts:[CR(P("Mesh","mesh")),P("Aponeurosis: Vicryl/Prolene","vicryl","prolene"),CR(P("Ligation: silk","silk")),CR(P("Vertical mattress","vertical mattress")),CR(P("Skin: nylon","nylon"))]})
 ),
 interp:"Hernia sutures",
 summary:["Lichtenstein: permanent polypropylene mesh","Silk for ligation","Nylon for skin"]}),

/* ===== OSCE 7 ===== */
Co({page:32,orig:"7",topic:"inst",sub:"Surgical instruments",img:["mo32_inst"],title:"Instruments A–E — name and use",
 stem:`1. Name each instrument.<br>2. Give one use for each.`,
 gray:"1.จงบอกชื่อของอุปกรณ์แต่ละอย่าง 2.จงบอกวิธีใช้ของอุปกรณ์แต่ละชนิดมา1 ข้อ",
 notes:"แนวคำตอบในไฟล์: A curved mayo scissors · B crile arterial clamp · C allis tissue forceps · D deaver retractor · E surgical ? (ผู้เขียนไม่แน่ใจ) · Claude: E น่าจะเป็น oxidized cellulose (Surgicel) หรือ paraffin gauze"+" · ตรวจคีย์ 21 พ.ย. 2026: คำตอบ E เดิม Surgicel → paraffin gauze/tulle gras ตามลักษณะในรูป (ยังรับ Surgicel)",opinion:"ตรวจคีย์ (21 พ.ย. 2026): เห็นด้วยกับแนวคำตอบในไฟล์ A–D (curved Mayo scissors, Crile clamp, Allis forceps, Deaver retractor) · E ไฟล์เขียน surgical ? — ดูรูปเป็นแผ่นผ้าตาข่ายโปร่งสีเหลืองมันมีแผ่นพลาสติกคั่น = paraffin gauze/tulle gras (non-adherent dressing) มากกว่า Surgicel (ผ้าถักแน่นสีขาวนวลในซองฟอยล์) → เปลี่ยนคำตอบหลักของ E เป็น paraffin gauze และยังรับ Surgicel · ความมั่นใจปานกลาง (E)",
 parts:S(
  BS("7.1 Names and uses.",5,{tags:["inst"],ans:"A <b>Curved Mayo scissors</b> — ตัดเนื้อเยื่อหนา fascia · B <b>Crile (artery) clamp</b> — หนีบหลอดเลือดเล็ก ห้ามเลือด · C <b>Allis tissue forceps</b> — จับเนื้อเยื่อที่จะตัดออก/fascia · D <b>Deaver retractor</b> — ดึงรั้งอวัยวะในช่องท้องลึก · E <b>Paraffin gauze / tulle gras</b> (เช่น Bactigras, Sofra-tulle — ผ้าก๊อซตาข่ายโปร่งชุบ paraffin สีเหลือง มีแผ่นพลาสติกคั่น) — non-adherent dressing ชั้นแรกปิดแผลไม่ให้ติด เช่น แผลไฟไหม้ donor site แผลถลอก · (ถ้าผู้สอบตั้งใจเป็น Surgicel = oxidized regenerated cellulose ใช้ห้ามเลือดซึม)",rubric:"1/ชิ้น",pts:[P("Mayo scissors","mayo"),CR(P("Crile/artery clamp","crile","artery","hemostat","clamp")),P("Allis forceps","allis"),CR(P("Deaver retractor","deaver")),P("Paraffin gauze (tulle gras) / Surgicel","paraffin","tulle","bactigras","sofra","vaseline","วาสลีน","surgicel","oxidized")]})
 ),
 interp:"Instruments",
 summary:["Crile = small artery clamp","Deaver = deep retractor","Tulle gras (paraffin gauze) = non-adherent dressing · Surgicel = topical hemostat"]}),

/* ===== OSCE 8 ===== */
Co({page:32,orig:"8",topic:"img",sub:"Mammogram",title:"Mammogram — what and which view",
 stem:`A mammogram is shown.<br>1. What type of image and which view?<br>2. Describe the image.<br>3. What further investigation will you send?`,
 gray:"xx. ให้ภาพ mammogram มาถามว่า 1.เป็น ภาพอะไรและ view อะไร 2.บรรยายภาพ 3.จะส่งตรวจอะไรเพิ่มเติม",
 flag:NOIMG,imgAlt:"Mammogram",
 notes:"แนวคำตอบในไฟล์: mammography (MLO or CC view)",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("8.1 Answer.",5,{tags:["img"],ans:"<b>Mammography — MLO หรือ CC view</b> (MLO เห็น pectoralis) · บรรยาย mass/calcification/distortion, BI-RADS · ส่ง <b>ultrasound</b> ± <b>core needle biopsy</b>",rubric:"1/ประเด็น",pts:[CR(P("Mammography","mammogra")),CR(P("MLO or CC","mlo","cc")),P("Describe and BI-RADS","bi-rads","mass","calcif"),CR(P("Ultrasound / biopsy","ultrasound","biopsy"))]})
 ),
 interp:"Mammogram",
 summary:["MLO shows pectoralis","Describe + BI-RADS","US ± core biopsy"]}),

/* ===== MEQ ===== */
SA({page:36,orig:"MEQ 1",num:"SA 1",sub:"Others",img:["mm36_hand"],title:"Short answer — 30 pack-year smoker with finger ulcers",
 stem:`A man, a 30 pack-year smoker, has fingertip ulcers that did not heal with analgesics and antibiotics.<br>1. Give the diagnosis.<br>2. Give the treatment.`,
 gray:"XX. Pt. ชาย อายุ xx สูบบุหรี่ 30 pack-year มาด้วยมือเป็นแผล กินยาแก้ปวดยาฆ่าเชื้อละไม่หาย 1. Diagnosis 2. Treatment",
 notes:"เฉลยในไฟล์: Buerger disease (thromboangiitis obliterans) · the only treatment is stop smoking · หัวไฟล์ AC MEQ Sx RotateD 1/61",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Buerger disease (thromboangiitis obliterans)</b> — ชายอายุน้อย สูบบุหรี่ distal small/medium arteries ทั้งแขนและขา",rubric:"ได้",pts:[CR(P("Buerger disease","buerger","thromboangiitis"))]}),
  BS("1.2 Treatment.",2,{tags:["spot"],ans:"<b>หยุดบุหรี่ทุกรูปแบบเด็ดขาด</b> — การรักษาเดียวที่หยุดโรคได้ · ร่วม: wound care, analgesia, cilostazol/iloprost, amputation ส่วนที่ตาย",rubric:"1/ประเด็น",pts:[CR(P("Smoking cessation","smok","บุหรี่")),P("Wound care / amputation","wound","amput")]})
 ),
 interp:"Buerger",
 summary:["Young male smoker, distal ischemia","Stop smoking = only effective treatment","Corkscrew collaterals on angiogram"]}),

SA({page:36,orig:"MEQ 2",num:"SA 2",sub:"Plastic",img:["mm36_palate"],title:"Short answer — cleft palate: repair age and reasons",
 stem:`1. Give the diagnosis.<br>2. At what age should it be repaired?<br>3. Reasons?`,
 gray:"XX. ให้รูปประมาณนี้ 1. Diagnosis 2. อายุที่ควร repair 3. เหตุผล",
 notes:"เฉลยในไฟล์: unilateral incomplete cleft palate · 6–12 months · เหตุผล: 1. ก่อน speech development 2. ไม่มีอันตรายเรื่องดมยา 3. working space เยอะ",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("2.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Unilateral incomplete cleft palate</b>",rubric:"ได้",pts:[CR(P("Cleft palate","cleft palate","palate"))]}),
  BS("2.2 Age.",1,{tags:["spot"],ans:"<b>6–12 เดือน</b> (ทั่วไป 9–12 เดือน)",rubric:"ได้",pts:[CR(P("6–12 months","6","9","12"))]}),
  BS("2.3 Reasons.",3,{tags:["spot"],ans:"1. <b>ก่อนพัฒนาการด้านการพูด</b> 2. <b>ปลอดภัยต่อการดมยา</b> 3. <b>working space ในปากกว้างพอ</b> (ไม่เร็วเกินจนกระทบการเจริญของ maxilla)",rubric:"1/ข้อ",pts:[CR(P("Before speech","speech","พูด")),P("Anesthetic safety","anesth","ดมยา"),P("Adequate working space","space","working")]})
 ),
 interp:"Cleft palate",
 summary:["Repair 6–12 months","Before speech development","Anesthesia safety + working space"]}),

SA({page:37,orig:"MEQ 3",num:"SA 3",sub:"Others",img:["mm37_foot"],kimg:["mm37_nfk"],title:"Short answer — foot infection",
 stem:`1. Give the diagnosis.<br>2. What investigations?`,
 gray:"XX. 1. Diagnosis 2. Investigation (ข้อนี้เฉลยเป็น Necrotizing fasciitis แต่ว่ารูปมันจะไม่ม่วงเยอะงี้ ละที่เหลืองๆก็มีมีมอล ละก็มี bleb นิดๆหน่อยๆ)",
 notes:"เฉลยในไฟล์: Necrotizing fasciitis (รูปจริงไม่ม่วงเท่านี้) + สไลด์ Diagnosis: high index of suspicion (clinical), labs (leukocytosis, acidosis, coagulopathy, abnormal renal function), plain film (soft tissue gas), CT/MRI, incisional exploration or biopsy (tissue culture)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Necrotizing fasciitis</b> — ผิวม่วงคล้ำ bullae/bleb, ปวดเกินสัดส่วน, crepitus, sepsis",rubric:"ได้",pts:[CR(P("Necrotizing fasciitis","necrotizing","nec fasc"))]}),
  BS("3.2 Investigations.",4,{tags:["spot"],ans:"เป็น <b>clinical diagnosis</b> — ไม่รอผลตรวจ · Lab: CBC (leukocytosis), electrolyte (Na ต่ำ), BUN/Cr, glucose, CRP, <b>LRINEC score</b>, lactate, coagulation, hemoculture · <b>Plain film: soft tissue gas</b> · CT/MRI (ถ้าไม่ล่าช้า) · <b>surgical exploration (finger test) + tissue culture/biopsy</b> = definitive → <b>radical debridement</b> + broad-spectrum antibiotic",rubric:"1/ประเด็น",pts:[P("Clinical diagnosis, do not delay","clinical","suspicion"),CR(P("Labs: CBC, electrolytes, Cr, LRINEC","cbc","lrinec","electrolyte","creat")),P("Plain film for gas","gas","x-ray","film"),P("CT/MRI","ct","mri"),CR(P("Surgical exploration with tissue culture","explor","biopsy","culture","finger test")),P("Debridement","debride"),]})
 ),
 interp:"Nec fasc",
 summary:["Pain out of proportion, bullae, crepitus","Clinical diagnosis; LRINEC supports","Emergency radical debridement"]}),

SA({page:37,orig:"MEQ 4",num:"SA 4",sub:"Others",flag:NOIMG,imgAlt:"ไม่มีรูป",title:"Short answer — drain cleaner ingestion in ER",
 stem:`You are the ER doctor. A patient drank drain-cleaning solution. Write the orders.`,
 gray:"XX. คุณเป็นแพทย์ที่ ER มีคนไข้มาด้วยกินน้ำยาเปิดล้างท่อน้ำเข้าไป ให้สั่งการรักษา",
 notes:"เฉลยในไฟล์: NPO, IV fluid, EGD after R/O perforation by upper GI study by water-soluble solution",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 Orders.",6,{tags:["spot"],ans:"ประเมิน <b>airway</b> · <b>NPO</b> · <b>IV fluid</b> · ห้ามกระตุ้นอาเจียน ห้ามล้างท้อง ห้าม neutralize/charcoal · IV PPI, analgesic · CXR/plain abdomen · <b>R/O perforation ด้วย upper GI study (water-soluble contrast) หรือ CT</b> → <b>EGD</b> (12–48 ชม.) grade injury · perforation → surgery",rubric:"1/ประเด็น",pts:[P("Airway","airway"),CR(P("NPO","npo")),CR(P("IV fluid","fluid")),P("No emesis/lavage/neutralization","emesis","lavage","neutral","อาเจียน"),CR(P("Rule out perforation (water-soluble study/CT)","perforat","water-soluble","gastrografin","ct")),CR(P("EGD","egd","endoscop"))]})
 ),
 interp:"Corrosive",
 summary:["NPO, IV fluid, airway","No emesis, no lavage","R/O perforation → EGD"]}),

SA({page:37,orig:"MEQ 5",num:"SA 5",sub:"Pediatric surgery",img:["mm37_stool"],title:"Short answer — 1-month-old with pale stool and jaundice",
 stem:`A 1-month-old infant has the stool shown and LFT shows raised bilirubin.<br>1. Give the differential diagnosis.<br>2. Give the proper management.`,
 gray:"XX. เด็กน้อยอายุ 1 เดือน มาด้วยอึเป็นอย่างในรูปเจี๊ยยย LFT แล้วค่าตับมันขึ้น ถามว่า 1. Differential diagnosis 2. Proper management",
 notes:"เฉลยในไฟล์: biliary atresia, choledochal cyst · USG",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Differential diagnosis.",2,{tags:["spot"],ans:"<b>Biliary atresia</b> · <b>choledochal cyst</b> · (neonatal hepatitis, Alagille)",rubric:"1/โรค",pts:[CR(P("Biliary atresia","biliary atresia")),CR(P("Choledochal cyst","choledochal"))]}),
  BS("5.2 Management.",4,{tags:["spot"],ans:"<b>Ultrasound</b> (triangular cord sign, GB เล็ก/ไม่มี, choledochal cyst) · direct bilirubin, GGT · hepatobiliary scan (DISIDA) · ยืนยัน <b>intraoperative cholangiogram</b> · biliary atresia → <b>Kasai portoenterostomy ก่อนอายุ 60 วัน</b> · choledochal cyst → excision + hepaticojejunostomy",rubric:"1/ประเด็น",pts:[CR(P("Ultrasound","usg","ultrasound","u/s")),P("HIDA scan or cholangiogram","hida","disida","scan","cholangiogra"),CR(P("Kasai before 60 days","kasai","60")),P("Cyst excision + hepaticojejunostomy","excision","hepaticojejun")]})
 ),
 interp:"Biliary atresia",
 summary:["Acholic stool + direct hyperbilirubinemia","US: triangular cord sign","Kasai before 60 days"]}),

SA({page:37,orig:"MEQ 6",num:"SA 6",sub:"Pediatric surgery",img:["mm37_axr"],title:"Short answer — 5-week-old with bilious vomiting",
 stem:`A 5-week-old infant has bilious vomiting; NG returns 10 ml bile. The abdominal film shows no air in the distal bowel.<br>1. Give the diagnosis.<br>2. Give the definitive treatment.`,
 gray:"XX. เด็กน้อย 5 wk มาด้วยอ้วกเป็น bile ดูด NG content ออกมาได้ bile 10 cc film abdomen ได้ดังรูป (รูปประมาณนี้แต่จะไม่เห็น air ใน distal bowel loop เลย) ถามว่า 1. Diagnosis 2. Definitive treatment",
 notes:"เฉลยในไฟล์: intestinal malrotation with midgut volvulus · Ladd's procedure",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Intestinal malrotation with midgut volvulus</b>",rubric:"ได้",pts:[CR(P("Midgut volvulus / malrotation","volvulus","malrotation"))]}),
  BS("6.2 Definitive treatment.",2,{tags:["spot"],ans:"<b>Emergency Ladd's procedure</b> (detorsion ทวนเข็ม, ตัด Ladd's bands, ขยาย mesentery, appendectomy)",rubric:"ได้",pts:[CR(P("Ladd's procedure","ladd"))]})
 ),
 interp:"Midgut volvulus",
 summary:["Bilious vomiting = surgical emergency","UGI: corkscrew","Ladd's procedure"]}),

SA({page:38,orig:"MEQ 7",num:"SA 7",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"เด็กนั่งในอุจจาระแดงเหลวคล้ายแยมสตรอเบอร์รี่",title:"Short answer — 5-week-old with red jelly stool",
 stem:`A previously well 5-week-old infant passes bright red, jelly-like stool.<br>1. Give the diagnosis.<br>2. Give the initial management.<br>3. Give the definite treatment.`,
 gray:"XX. เด็กน้อย 5 wk previously well มาด้วย bright red stool (รูปให้มาเป็นเด็กนั่งจมอยู่ในอึแดงๆเหลวๆ สีเหมือนแยมสตรอเบอรี่) 1. Diagnosis 2. Initial management 3. Definite treatment",
 notes:"เฉลยในไฟล์: intussusception · NPO, IV fluid, electrolyte correction, USG · pneumatic/barium reduction → Sx",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("7.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Intussusception</b>",rubric:"ได้",pts:[CR(P("Intussusception","intussuscep"))]}),
  BS("7.2 Initial management.",3,{tags:["spot"],ans:"<b>NPO, IV fluid, electrolyte correction</b>, NG · <b>USG</b> (target/doughnut sign)",rubric:"1/ประเด็น",pts:[CR(P("NPO and IV fluid","npo","fluid")),P("Electrolyte correction","electrolyte"),CR(P("Ultrasound","usg","ultrasound"))]}),
  BS("7.3 Definite treatment.",3,{tags:["spot"],ans:"<b>Pneumatic (air) หรือ hydrostatic/barium enema reduction</b> → ล้มเหลว/peritonitis/perforation → <b>surgery</b>",rubric:"1/ประเด็น",pts:[CR(P("Pneumatic or barium reduction","pneumatic","barium","hydrostatic","air")),CR(P("Surgery if failed","surg","operat"))]})
 ),
 interp:"Intussusception",
 summary:["Currant-jelly stool","US target sign","Enema reduction → surgery if failed"]}),

SA({page:38,orig:"MEQ 8",num:"SA 8",sub:"Neuro",flag:NOIMG,imgAlt:"ไม่มีรูป",title:"Short answer — GCS change and expected CT",
 stem:`A head injury scenario is given.<br>1. Assess the GCS at first and after deterioration (about E3M6V5 first, then about E1M4V1).<br>2. What would the CT show?`,
 gray:"XX. ผู้ป่วยมา ให้อาการบลาๆๆ ละก็อถาม 8.1 ให้ประเมิน GCS ตอนแรก และหลังจากนั้น ซึ่งผู้ป่วยเกิดอาการซึมๆ ตอนแรกก็ดี ประมาณ E3M6V5 ตอนหลังจะประมาณ E1M4V1 8.2 ถ้าส่ง CT น่าจะเจออะไร",
 notes:"เฉลยในไฟล์: lens-shaped hematoma",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 GCS.",2,{tags:["spot"],ans:"ตอนแรก <b>E3V5M6 = 14</b> → ต่อมา <b>E1V1M4 = 6</b> (ลดลง ≥2 = deterioration, ≤8 → intubate)",rubric:"1/ประเด็น",pts:[CR(P("First GCS 14","14")),CR(P("Later GCS 6","6"))]}),
  BS("8.2 CT.",2,{tags:["spot"],ans:"<b>Lens-shaped (biconvex) hyperdense hematoma = epidural hematoma</b> (lucid interval) · → emergency craniotomy",rubric:"1/ประเด็น",pts:[CR(P("Lens-shaped epidural hematoma","lens","biconvex","epidural","lentiform")),P("Craniotomy","craniotomy","evacuat")]})
 ),
 interp:"EDH",
 summary:["Lucid interval","Biconvex hyperdensity","GCS ≤8 → intubate; craniotomy"]})

);
})();
