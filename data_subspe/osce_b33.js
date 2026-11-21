(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU71 RoA (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   71 R1: OSCE 11 สถานี (SO22 หน้า 27–29 มีแนวคำตอบตัวแดง) + MEQ 13 ข้อ (SM21 หน้า 31–34) · รูป mm/mo */
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
const Co=o=>Object.assign({set:"MDCU71",ro:"RoA",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:28,orig:"1",topic:"pe",sub:"Acute abdomen",ex:1,title:"Physical examination — acute appendicitis",
 stem:`Examine the abdomen of a patient with suspected acute appendicitis.`,
 gray:"4. ตรวจร่างกาย acute appendicitis แนะนำตัว ดู ฟัง (hypoactive) กด RLQ ปวด guarding, Rovsing, rebound tenderness, psoas, obturator, PR positive หมด",
 notes:"แนวคำตอบในไฟล์: แนะนำตัว ดู ฟัง (hypoactive) กด RLQ ปวด guarding, Rovsing, rebound tenderness, psoas, obturator, PR positive หมด",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Examination.",8,{tags:["pe"],ans:"แนะนำตัว · inspection · <b>auscultation (bowel sound hypoactive)</b> · palpation <b>RLQ tenderness, guarding</b> · <b>Rovsing</b> · <b>rebound tenderness</b> · <b>psoas</b> · <b>obturator</b> · <b>PR</b> (tender ทางขวา) — ในสถานีนี้ positive ทุกข้อ",rubric:"1/ประเด็น",pts:[P("Introduce","introduc","แนะนำ"),P("Auscultation","ausculta","bowel sound","ฟัง"),CR(P("RLQ tenderness and guarding","rlq","mcburney","guard")),P("Rovsing","rovsing"),CR(P("Rebound","rebound")),P("Psoas","psoas"),P("Obturator","obturator"),CR(P("PR","pr","rectal"))]})
 ),
 interp:"PE appendicitis",
 summary:["RLQ tenderness, guarding, rebound","Rovsing, psoas, obturator","PR"]}),

/* ===== OSCE 2 ===== */
Co({page:28,orig:"2",topic:"hx",sub:"Hepatobiliary",ex:1,title:"History — acute cholecystitis and investigation",
 stem:`Take a history from a patient with suspected acute cholecystitis, then state the investigation of choice.`,
 gray:"OSCE ซักประวัติ Acute cholecystitis + ถาม Investigation",
 notes:"แนวคำตอบในไฟล์: Investigation = transabdominal ultrasound · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘GB wall >3–4 มม.’ → แก้เป็น ‘≥4 มม.’ (ข้อ 2.2) ตาม Tokyo Guidelines 2018 (TG18, Yokoe et al. JHBPS 2018 CQ5: GB wall thickening ≥4 mm; TG13 ใช้ ≥5 mm)",opinion:"ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): เกณฑ์ผนังถุงน้ำดีหนาใน US ใช้ ≥4 mm ตาม TG18 (TG13 ใช้ ≥5 mm) — ถ้าเขียนตัวเลขให้ระบุชื่อแนวทาง · ความมั่นใจสูง",
 parts:S(
  BS("2.1 History.",6,{tags:["hx"],ans:"<b>ปวด RUQ/ใต้ลิ้นปี่ ต่อเนื่อง >6 ชม.</b> ร้าวไปสะบักขวา · หลังกินอาหารมัน · <b>ไข้</b> · คลื่นไส้อาเจียน · <b>ตัวเหลือง ปัสสาวะเข้ม อุจจาระซีด</b> (CBD stone/cholangitis) · เคยปวดแบบนี้ (biliary colic) · risk: female, fat, forty, fertile, เบาหวาน, ลดน้ำหนักเร็ว, hemolysis · แยก peptic ulcer, pancreatitis (ปวดทะลุหลัง), hepatitis, MI, pneumonia",rubric:"1/ประเด็น",pts:[CR(P("RUQ pain, duration, radiation","ruq","right upper","ร้าว","shoulder","สะบัก")),P("Fatty meal","fatty","มัน"),CR(P("Fever","fever","ไข้")),P("Nausea/vomiting","nause","vomit"),CR(P("Jaundice, dark urine, pale stool","jaundice","เหลือง","pale")),P("Previous colic","previous","เคย"),P("Risk factors","risk","female","forty")]}),
  BS("2.2 Investigation.",2,{tags:["hx"],ans:"<b>Transabdominal ultrasound</b> — gallstone, <b>GB wall หนา ≥4 มม.</b> (TG18; TG13 ≥5 มม.), pericholecystic fluid, sonographic Murphy · (HIDA scan ถ้า US ไม่ชัด) · CBC, LFT, lipase",rubric:"ได้",pts:[CR(P("Ultrasound","ultrasound","us","usg"))]})
 ),
 interp:"Acute cholecystitis",
 summary:["RUQ pain >6 h + fever + Murphy","US: stones, thick wall, fluid","Tokyo guidelines"]}),

/* ===== OSCE 3 ===== */
Co({page:28,orig:"3",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Local anesthesia starting from gloving",
 stem:`Inject local anesthesia, starting from putting on gloves.`,
 gray:"OSCE ฉีดยาชา เริ่มตั้งแต่สวมถุงมือ",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Technique.",7,{tags:["proc"],ans:"ล้างมือ ใส่ <b>sterile gloves</b> ถูกวิธี · ทำความสะอาดผิวรอบแผล · ตรวจยา <b>1% lidocaine</b> (ชื่อ ความเข้มข้น หมดอายุ) ถามแพ้ยา · ดูดยาด้วยเข็มใหญ่ เปลี่ยนเป็นเข็มเล็ก · แทงผ่านขอบแผล · <b>aspirate</b> ก่อนฉีด · ฉีดช้าขณะถอยเข็ม · max 4.5 mg/kg · รอแล้วทดสอบความชา",rubric:"1/ประเด็น",pts:[CR(P("Sterile gloving","glove","ถุงมือ")),P("Skin preparation","clean","prep","povidone","ทำความสะอาด"),P("Check drug, allergy","check","allerg","แพ้"),P("Inject via wound edge","edge","ขอบ"),CR(P("Aspirate","aspirat")),P("Maximum dose","max","4.5"),P("Test before suturing","test","ทดสอบ")]})
 ),
 interp:"Local anesthesia",
 summary:["Aspirate before injecting","Lidocaine max 4.5 mg/kg (7 with adrenaline)","Inject through wound edge"]}),

/* ===== OSCE 4 ===== */
Co({page:28,orig:"4",topic:"suture",sub:"Simple and vertical mattress",ex:1,proc:1,title:"Simple interrupted and vertical mattress — 1 each",
 stem:`Place 1 simple interrupted suture and 1 vertical mattress suture.`,
 gray:"osce 6 เย็บ simple 1 ,vertical mat 1",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Technique.",6,{tags:["suture"],ans:"<b>Simple</b>: ตั้งฉาก ระยะเท่ากัน flask shape square knot ปมข้างแผล · <b>Vertical mattress</b>: <b>far-far แล้ว near-near</b> → eversion",rubric:"1/ประเด็น",pts:[CR(P("Perpendicular, equal bites","perpendic","equal")),P("Square knot at side","square","knot"),CR(P("Far-far","far")),CR(P("Near-near","near")),P("Eversion","evert")]})
 ),
 interp:"Suture",
 summary:["Simple: equal bites","VM: far-far, near-near","Knot to the side"]}),

/* ===== OSCE 5 ===== */
Co({page:28,orig:"5",topic:"inst",sub:"Suture materials",title:"Choose among 6 sutures for 5 uses",
 stem:`Six sutures are provided: catgut, silk, Vicryl, Prolene, nylon, PDS.<br>Which suture is used to: 1. ligate a vessel, 2. close peritoneum, 3. sew a vessel graft, 4. close subcutaneous tissue, 5. close skin? Give the full name and characteristics.`,
 gray:"OSCE มีไหมให้เลือก 6 อัน (catgut silk vicryl proline nylon pds) ตอบคำถาม 5 ข้อ ประมาณว่า ผูกเส้นเลือด เย็บ peritoneum เย็บ vessel graft เย็บ subcu เย็บ skin ใช้อะไร แล้วตอบชื่อเต็ม ลักษณะไหมด้วย",
 notes:"แนวคำตอบในไฟล์: ผูกเส้นเลือด = silk (bio, multi, non-ab) · เย็บ peritoneum = catgut (bio, multi, ab) · vessel graft = prolene = polypropylene (syn, mono, non-ab) · subcu = vicryl = polyglactin (syn, multi, ab) · skin = nylon = polyamide (syn, mono, non-ab)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Choices.",5,{tags:["inst"],ans:"1. ผูกเส้นเลือด = <b>silk</b> (natural, multifilament, non-absorbable) · 2. peritoneum = <b>catgut</b> (natural, multifilament, absorbable) · 3. vessel graft = <b>Prolene (polypropylene)</b> (synthetic, monofilament, non-absorbable) · 4. subcutaneous = <b>Vicryl (polyglactin 910)</b> (synthetic, multifilament, absorbable) · 5. skin = <b>nylon (polyamide)</b> (synthetic, monofilament, non-absorbable) · (PDS = polydioxanone, synthetic monofilament absorbable — ปิด fascia)",rubric:"1/ข้อ",pts:[CR(P("Ligate vessel: silk","silk")),P("Peritoneum: catgut","catgut"),CR(P("Vessel graft: Prolene","prolene","polypropylene")),P("Subcutaneous: Vicryl","vicryl","polyglactin"),CR(P("Skin: nylon","nylon","polyamide"))]})
 ),
 interp:"Suture choice",
 summary:["Vascular graft = Prolene","Skin = nylon","Subcutaneous = Vicryl"]}),

/* ===== OSCE 6 ===== */
Co({page:28,orig:"6",topic:"inst",sub:"Urinary catheter",img:["mo28_foley"],title:"Three-way catheter — name and indication",
 stem:`Name this device and give its indication.`,
 gray:"OSCE ให้ 3 way catheter ถามชื่อ แล้วก็ indication",
 notes:"แนวคำตอบในไฟล์: 3-way foley catheter · continuous bladder irrigation",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Name and indication.",4,{tags:["inst"],ans:"<b>Three-way Foley catheter</b> · <b>continuous bladder irrigation</b> (clot retention, หลัง TURP)",rubric:"1/ประเด็น",pts:[CR(P("Three-way Foley","3-way","three-way","3 way","three way")),CR(P("Continuous bladder irrigation","irrigat","cbi"))]})
 ),
 interp:"3-way Foley",
 summary:["Irrigation port","Clot retention / post-TURP"]}),

/* ===== OSCE 7 ===== */
Co({page:28,orig:"7",topic:"img",sub:"Urolithiasis",img:["mo28_ivp"],title:"IVP — staghorn calculus",
 stem:`An IVP is shown. Describe it, give the diagnosis and treatment.`,
 gray:"OSCE IVP น่าจะเป็น staghorn calculi บรรยาย dx treatment",
 notes:"แนวคำตอบในไฟล์: staghorn calculi · treatment = PCNL",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("7.1 Answer.",5,{tags:["img"],ans:"<b>Radio-opaque branching calculus</b> เต็ม renal pelvis และ calyces ของไตขวา (รูปเขากวาง) ± delayed function/hydronephrosis · Dx: <b>staghorn calculus</b> (มักเป็น struvite จาก urease-producing bacteria เช่น Proteus) · Rx: <b>PCNL</b> (± combined RIRS), รักษาการติดเชื้อ, ถ้าไตไม่ทำงาน → nephrectomy",rubric:"1/ประเด็น",pts:[CR(P("Branching opaque calculus filling pelvicalyceal system","branch","pelvi","calyc","opaque")),CR(P("Staghorn calculus","staghorn")),P("Struvite / Proteus","struvite","proteus","urease"),CR(P("PCNL","pcnl","percutaneous"))]})
 ),
 interp:"Staghorn",
 summary:["Staghorn = struvite (urease-producing bacteria)","Rx: PCNL","Non-functioning kidney → nephrectomy"]}),

/* ===== OSCE 8 ===== */
Co({page:29,orig:"8",topic:"img",sub:"Mammogram",title:"Mammogram — views, findings, further investigation",
 stem:`A mammogram is shown.<br>Name the views (MLO, CC) and side, describe the abnormality, and state further investigations.`,
 gray:"OSCE ให้ mammogram มา บอกท่า (MLO CC) และข้าง บรรยายความผิดปกติ บอกการส่งตรวจเพิ่มเติม",
 flag:NOIMG,imgAlt:"Mammogram CC/MLO มีก้อนในเต้านม",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่มีรูป",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("8.1 Answer.",6,{tags:["img"],ans:"<b>CC และ MLO</b> view, บอกข้างจาก marker · บรรยาย: ตำแหน่ง ขนาด รูปร่าง <b>margin (spiculated vs circumscribed)</b>, density, <b>calcification</b>, skin/nipple, axillary node → BI-RADS · Ix: <b>breast ultrasound</b> → <b>core needle biopsy</b> ถ้า BI-RADS 4–5",rubric:"1/ประเด็น",pts:[CR(P("CC and MLO with side","cc","mlo")),CR(P("Mass margin and density","margin","spicul","circumscrib","density")),P("Calcification","calcif"),P("BI-RADS","bi-rads","birads"),P("Ultrasound","ultrasound"),CR(P("Core biopsy","biopsy","core"))]})
 ),
 interp:"Mammogram",
 summary:["CC + MLO","Describe margin, density, calcification","US → core biopsy"]}),

/* ===== OSCE 9 ===== */
Co({page:29,orig:"9",topic:"hx",sub:"Prostate",ex:1,title:"History — LUTS and investigations",
 stem:`Take a history from a man with lower urinary tract symptoms, then state further investigations.`,
 gray:"OSCE ซักประวัติ LUTS อย่างไร แล้วส่งตรวจอะไรเพิ่มเติม",
 notes:"แนวคำตอบในไฟล์: uroflow, transrectal ultrasound",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 History.",6,{tags:["hx"],ans:"<b>Storage</b>: frequency, nocturia, urgency, urge incontinence · <b>Voiding</b>: hesitancy, weak stream, intermittency, straining, terminal dribbling, incomplete emptying (<b>IPSS</b> + QoL) · complication: retention, hematuria, UTI, stone, ไตวาย · แยกสาเหตุ: DM, neurologic, ยา (anticholinergic, antihistamine), urethral stricture (STD, catheter, trauma), CA prostate (ปวดกระดูก น้ำหนักลด) · ดื่มน้ำ/กาแฟ",rubric:"1/ประเด็น",pts:[CR(P("Storage symptoms","frequency","nocturia","urgency")),CR(P("Voiding symptoms","hesitan","weak","straining","dribbl")),P("IPSS","ipss"),P("Complications: retention, hematuria, UTI","retention","hematuria","uti"),P("Other causes: DM, neuro, drugs, stricture","diabet","neuro","drug","stricture")]}),
  BS("9.2 Investigations.",4,{tags:["hx"],ans:"UA, Cr, <b>PSA</b> · <b>uroflowmetry</b> (Qmax <10 ml/s) · <b>post-void residual</b> (U/S) · <b>transrectal ultrasound</b> (prostate volume) · frequency-volume chart",rubric:"1/ประเด็น",pts:[P("UA and creatinine","ua","creat"),P("PSA","psa"),CR(P("Uroflowmetry","uroflow")),CR(P("TRUS / PVR ultrasound","transrectal","trus","pvr","residual"))]})
 ),
 interp:"LUTS",
 summary:["Storage vs voiding symptoms, IPSS","Uroflow, PVR, TRUS volume","PSA"]}),

/* ===== OSCE 10 ===== */
Co({page:29,orig:"10",topic:"img",sub:"Bowel obstruction",img:["mo29_axr"],title:"Acute abdomen series — small bowel obstruction",
 stem:`An acute abdomen series film is shown. Describe the abnormality and give the diagnosis.`,
 gray:"OSCE ให้ film acute abdomen series มา ถามความผิดปกติ และ diag",
 notes:"แนวคำตอบในไฟล์: small bowel dilatation, stepladder pattern, double bowel wall sign · Dx small bowel obstruction",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("10.1 Findings and diagnosis.",5,{tags:["img"],ans:"<b>Dilated small bowel loops</b> (valvulae conniventes) ตรงกลางท้อง · <b>stepladder pattern</b> (ท่ายืน air-fluid levels) · ไม่ค่อยมีลมในลำไส้ใหญ่ · Dx: <b>small bowel obstruction</b> (สาเหตุบ่อยสุด adhesion)",rubric:"1/ประเด็น",pts:[CR(P("Dilated small bowel","dilat","small bowel")),CR(P("Stepladder pattern / air-fluid","step","air-fluid","air fluid")),P("Valvulae conniventes","valvulae"),CR(P("Small bowel obstruction","small bowel obstruction","sbo"))]})
 ),
 interp:"SBO",
 summary:["Central dilated loops with valvulae","Stepladder air-fluid levels","Most common cause: adhesion"]}),

/* ===== OSCE 11 ===== */
Co({page:29,orig:"11",topic:"inst",sub:"Surgical instruments",kimg:["mo29_inst"],title:"Trocar, Penrose, Metzenbaum, ostomy, Army-Navy",
 stem:`Name each item and how it is used: trocar, Penrose drain, Metzenbaum scissors, colostomy bag and baseplate, Army-Navy retractor.`,
 gray:"OSCE ให้อุปกรณ์ trocar, Penrose, metzenbaum, colostomy bag, colostomy baseplate, army navy ถามชื่อและวิธีใช้",
 flag:NOIMG,imgAlt:"Trocar, Penrose drain, กรรไกร Metzenbaum, ถุงและแป้น ostomy, Army-Navy retractor (รูปในไฟล์มีคำตอบเขียนทับ → อยู่ในรูปเฉลย)",
 notes:"แนวคำตอบในไฟล์: Trocar = surgical instrument with a three-sided cutting point enclosed in a tube, used for withdrawing fluid from a body cavity · Penrose = open system drain e.g. infected wound, appendiceal abscess · Curved Metzenbaum = cut delicate tissues · Army-Navy = retract in minor procedure · Ostomy baseplate and pouch = Hartmann's procedure in left side colon cancer",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 Names and uses.",5,{tags:["inst"],ans:"<b>Trocar</b> — ปลายแหลมสามเหลี่ยมอยู่ใน cannula ใช้เจาะผนังเข้าช่องตัว (ระบายของเหลว, laparoscopic port) · <b>Penrose drain</b> — open/passive drain เช่น แผลติดเชื้อ, appendiceal abscess · <b>Curved Metzenbaum scissors</b> — ตัด/เลาะเนื้อเยื่อบอบบาง · <b>Colostomy bag + baseplate</b> — ติดรอบ stoma รองรับอุจจาระ เช่นหลัง <b>Hartmann's procedure</b> · <b>Army-Navy retractor</b> — ดึงรั้งในหัตถการเล็ก/ชั้นตื้น",rubric:"1/ชิ้น",pts:[CR(P("Trocar","trocar")),CR(P("Penrose — open drain","penrose")),P("Metzenbaum — delicate tissue","metzenbaum"),P("Ostomy bag and baseplate","ostomy","colostomy","stoma"),P("Army-Navy retractor","army","navy")]})
 ),
 interp:"Instruments",
 summary:["Penrose = open passive drain","Metzenbaum = delicate dissection","Two-piece ostomy: baseplate + pouch"]}),

/* ===== MEQ ===== */
SA({page:32,orig:"MEQ 1",num:"SA 1",sub:"Plastic",img:["mm32_sore"],title:"Short answer — bedsore",
 stem:`1. Give the diagnosis.<br>2. What position caused it?<br>3. Over which bone is the wound?`,
 gray:"MEQ ให้ภาพ bedsore จง Diag บอกท่าที่ทำให้เกิด ทอกระดูกที่ทำให้เกิดแผล",
 notes:"แนวคำตอบในไฟล์: bedsore grade III · supine · sacrum",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Diagnosis, position, bone.",4,{tags:["spot"],ans:"<b>Pressure ulcer (bedsore) stage III</b> (full-thickness skin loss เห็นไขมัน ไม่เห็นกระดูก/เอ็น) · ท่า <b>นอนหงาย (supine)</b> · กระดูก <b>sacrum</b>",rubric:"1/ประเด็น",pts:[CR(P("Pressure ulcer stage III","grade iii","stage iii","stage 3","grade 3","pressure","bedsore")),CR(P("Supine","supine","หงาย")),CR(P("Sacrum","sacr"))]})
 ),
 interp:"Bedsore",
 summary:["Stage III: full-thickness skin, fat visible","Supine → sacrum","Offload, debride, nutrition, flap for deep"]}),

SA({page:32,orig:"MEQ 2",num:"SA 2",sub:"Plastic",img:["mm32_eye"],title:"Short answer — pigmented eyelid lesion",
 stem:`A black, rough lesion is on the eyelid margin. What is the treatment?`,
 gray:"MEQ ลุงมีไฝสีดำผิวขรุขระที่เปลือกตา บอกวิธีรักษา",
 notes:"แนวคำตอบในไฟล์: Mohs micrographic surgery",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("2.1 Treatment.",3,{tags:["spot"],ans:"ก้อน pigmented ผิวขรุขระที่เปลือกตาผู้สูงอายุ → สงสัย <b>(pigmented) basal cell carcinoma</b> → biopsy · รักษา: <b>Mohs micrographic surgery</b> (เก็บเนื้อเยื่อปกติมากที่สุดในบริเวณสำคัญ เช่น เปลือกตา จมูก) แล้วซ่อมด้วย eyelid reconstruction",rubric:"1/ประเด็น",pts:[P("BCC suspected","bcc","basal cell"),CR(P("Mohs micrographic surgery","mohs")),P("Reconstruction","reconstruct")]})
 ),
 interp:"Eyelid BCC",
 summary:["Pigmented BCC on eyelid","Mohs surgery for H-zone","Tissue-sparing with margin control"]}),

SA({page:32,orig:"MEQ 3",num:"SA 3",sub:"Pediatric surgery",img:["mm32_tef"],kimg:["mm32_tefk"],title:"Short answer — esophageal atresia type",
 stem:`An X-ray of a newborn is shown.<br>1. Which type of esophageal atresia/TE fistula is this?<br>2. Which associated anomalies should you look for?`,
 gray:"MEQ ให้ภาพ TE fistula ถามว่าเป็น type ใด แล้วมี anomalies อะไรร่วมด้วย",
 notes:"แนวคำตอบในไฟล์: isolated EA without tracheoesophageal fistula เพราะไม่มี gas ใน abdomen · VACTERL association",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Type.",2,{tags:["spot"],ans:"<b>Isolated esophageal atresia without TEF</b> (Gross type A) — NG ขดใน upper pouch และ<b>ไม่มีลมในช่องท้อง (gasless abdomen)</b>",rubric:"1/ประเด็น",pts:[CR(P("Isolated EA without TEF","isolated","without","type a")),P("Gasless abdomen","gas","ลม")]}),
  BS("3.2 Associated anomalies.",3,{tags:["spot"],ans:"<b>VACTERL</b>: Vertebral, Anorectal malformation, Cardiac, TE fistula, Renal and radial, Limb",rubric:"1/ประเด็น",pts:[CR(P("VACTERL","vacterl","vater")),P("Cardiac","cardiac"),P("Anorectal","anorectal"),P("Renal or limb","renal","limb","radial")]})
 ),
 interp:"EA type A",
 summary:["Gasless abdomen = no distal TEF","Most common = EA with distal TEF (type C)","VACTERL"]}),

SA({page:33,orig:"MEQ 4",num:"SA 4",sub:"Head & neck",img:["mm33_goiter"],title:"Short answer — goiter",
 stem:`A picture of an enlarged neck is shown, with a statement about hyperthyroid symptoms. Give the diagnosis and treatment.`,
 gray:"MEQ ให้ภาพคอโต แล้วก็มีอาการแบบ hyperthyroid บอก Diag and treatment",
 notes:"แนวคำตอบในไฟล์: simple goiter · thyroidectomy · ⚠ โจทย์ในไฟล์เขียนว่า 'มีอาการแบบ hyperthyroid' แต่คีย์ตอบ simple goiter — อาจพิมพ์ตกคำว่า 'ไม่มี'",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("4.1 Diagnosis and treatment.",4,{tags:["spot"],ans:"<b>Simple (non-toxic) multinodular goiter</b> (euthyroid) — ตรวจ TFT, U/S, FNA ก้อนเด่น · ผ่าตัด <b>thyroidectomy</b> เมื่อมี compressive symptoms, retrosternal, cosmetic, สงสัยมะเร็ง · (ถ้า hyperthyroid จริง → toxic MNG/Graves: antithyroid drug → RAI หรือ thyroidectomy หลังทำให้ euthyroid)",rubric:"1/ประเด็น",pts:[CR(P("Simple / multinodular goiter","simple","goiter","multinodular")),P("TFT and ultrasound","tft","ultrasound","fna"),CR(P("Thyroidectomy","thyroidectomy")),P("Indications: compression, cosmetic, malignancy","compress","cosmetic","malign")]})
 ),
 interp:"Goiter",
 summary:["Euthyroid → simple goiter","Thyroidectomy for compression, cosmesis, suspicion","Toxic → make euthyroid first"]}),

SA({page:33,orig:"MEQ 5",num:"SA 5",sub:"Anorectal",img:["mm33_fis"],kimg:["mm33_fisk"],title:"Short answer — acute anal fissure",
 stem:`A picture of an acute anal fissure is shown. Give the diagnosis and patient counseling.`,
 gray:"MEQ ให้ภาพ acute anal fissure มา ถาม Diag and patient counseling",
 notes:"ไฟล์แนบสไลด์ Treatment (acute fissure: conservative — high fiber, sitz bath, stool softener, topical)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Diagnosis and counseling.",5,{tags:["spot"],ans:"<b>Acute anal fissure</b> (มัก posterior midline) · Counseling: <b>อาหารกากใยสูง ดื่มน้ำมาก</b>, <b>stool softener/bulk laxative</b>, <b>warm sitz bath</b>, หลีกเลี่ยงเบ่ง · ยาทา: lidocaine, <b>topical nitrate (GTN)/diltiazem</b> 6–8 สัปดาห์ · ส่วนใหญ่หาย · ไม่หาย (chronic) → botulinum toxin หรือ <b>lateral internal sphincterotomy</b>",rubric:"1/ประเด็น",pts:[CR(P("Acute anal fissure","fissure")),CR(P("High fiber, fluids","fiber","กากใย","น้ำ")),P("Stool softener","softener","laxative"),CR(P("Sitz bath","sitz","แช่")),P("Topical GTN/diltiazem","gtn","nitrate","diltiazem","topical"),P("Surgery if chronic","sphincterotomy","botulinum","lis")]})
 ),
 interp:"Anal fissure",
 summary:["Posterior midline, painful defecation","Fiber, sitz bath, softener","Chronic → GTN/diltiazem → LIS"]}),

SA({page:33,orig:"MEQ 6",num:"SA 6",sub:"Others",flag:NOIMG,imgAlt:"ก้อนใต้ผิวหนังที่ขา บวมแดง",title:"Short answer — enlarging red leg lump",
 stem:`A lump on the leg for 3 months became enlarged and red 3 days ago. Give the diagnosis and management.`,
 gray:"MEQ มีก้อนที่ขามา3เดือน 3วันก่อนมาเพิ่งบวมแดง ถาม Dx + Management",
 notes:"แนวคำตอบในไฟล์: infected epidermal cyst · excision",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Diagnosis and management.",4,{tags:["spot"],ans:"<b>Infected epidermal (sebaceous) cyst</b> · ระยะอักเสบ: <b>incision and drainage</b> + antibiotic, warm compress · หลังหายอักเสบ 4–6 สัปดาห์ → <b>complete excision รวมผนัง cyst (punctum)</b> ป้องกันการกลับเป็นซ้ำ",rubric:"1/ประเด็น",pts:[CR(P("Infected epidermal cyst","epidermal","sebaceous","cyst")),P("I&D during infection","incision","drain","i&d"),CR(P("Excision with cyst wall","excision"))]})
 ),
 interp:"Infected cyst",
 summary:["Punctum = epidermal cyst","Infected → I&D + antibiotic","Later complete excision of wall"]}),

SA({page:33,orig:"MEQ 7",num:"SA 7",sub:"Others",flag:NOIMG,imgAlt:"ไม่มีรูป",title:"Short answer — orders for acute appendicitis",
 stem:`Write the orders for a patient with acute appendicitis.`,
 gray:"MEQ ถามคำสั่งการรักษา acute appendicitis",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 Orders.",6,{tags:["spot"],ans:"<b>One day</b>: <b>NPO</b> · <b>IV fluid</b> (เช่น 5%D/NSS/2 100 ml/h หรือ NSS ถ้าขาดน้ำ) · V/S, I/O · <b>Antibiotic</b> (ceftriaxone 2 g IV + metronidazole 500 mg IV q8h; prophylaxis ก่อนผ่า) · analgesic (morphine 3 mg IV prn) · CBC, UA, electrolyte, UPT (หญิง), G/M · <b>consent → appendectomy (open/laparoscopic)</b> · prep skin",rubric:"1/ประเด็น",pts:[CR(P("NPO","npo","งดน้ำ")),CR(P("IV fluid","fluid","iv")),CR(P("Antibiotic","ceftriax","metronid","antibiot","cefazolin")),P("Analgesic","morphine","analges"),P("Labs incl. UPT","cbc","upt","pregnan"),CR(P("Appendectomy with consent","appendectomy","consent"))]})
 ),
 interp:"Appendicitis orders",
 summary:["NPO, IV fluid, antibiotic, analgesia","Labs + UPT in women","Appendectomy"]}),

SA({page:33,orig:"MEQ 8",num:"SA 8",sub:"Colorectal",flag:NOIMG,imgAlt:"ไม่มีรูป",title:"Short answer — colonoscopy indications and bowel prep",
 stem:`What are the indications for colonoscopy, and how should the bowel be prepared?`,
 gray:"MEQ ถามว่า Colonoscopy มีIndication อะไรบ้างสี่อย่าง + ต้อง Prep bowel ยังไง",
 notes:"ไม่มีเฉลยในไฟล์ (มีรูปโน้ตแนบ)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Indications.",4,{tags:["spot"],ans:"<b>Lower GI bleeding</b>/FIT positive · <b>เปลี่ยนนิสัยการขับถ่าย</b> · <b>iron deficiency anemia</b> · <b>CRC screening/surveillance</b> · chronic diarrhea/IBD · therapeutic: polypectomy, decompression sigmoid volvulus",rubric:"1/ข้อ",pts:[CR(P("LGIB","bleed","เลือด")),P("Change in bowel habit","bowel habit","ขับถ่าย"),P("Iron deficiency anemia","anemia","iron"),CR(P("Screening/surveillance","screen","surveil")),P("Therapeutic","polypectomy","volvulus","therapeutic")]}),
  B("8.2 Bowel prep.",3,{tags:["spot"],ans:"<b>Low-residue diet 1–3 วัน → clear liquid วันก่อน</b> · <b>PEG 4 L (split dose)</b> หรือ sodium phosphate/picosulfate · ± bisacodyl · หยุดธาตุเหล็ก · NPO 2–6 ชม. ก่อนทำ",rubric:"1/ประเด็น",pts:[CR(P("Low-residue then clear liquid diet","residue","clear","กากใยต่ำ")),CR(P("PEG split dose","peg","polyethylene")),P("Alternative purgative","phosphate","picosulfate","bisacodyl")]})
 ),
 interp:"Colonoscopy",
 summary:["Bleeding, bowel habit, anemia, screening","Low-residue → clear liquid","PEG split dose"]}),

SA({page:33,orig:"MEQ 9",num:"SA 9",sub:"Pediatric surgery",img:["mm33_gas"],kimg:["mm33_gask"],title:"Short answer — gastroschisis",
 stem:`Name the condition and give the initial management.`,
 gray:"MEQ ภาพ gastroschisis ถามชื่อและ initial management",
 notes:"ไฟล์แนบสไลด์ Treatment: early management — sterile protection, hypothermia prevention, adequate fluid resuscitation, antibiotic administration",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Name.",1,{tags:["spot"],ans:"<b>Gastroschisis</b> — ลำไส้ออกทาง defect ขวาของสายสะดือ ไม่มีถุงหุ้ม",rubric:"ได้",pts:[CR(P("Gastroschisis","gastroschisis"))]}),
  BS("9.2 Initial management.",5,{tags:["spot"],ans:"<b>Sterile protection</b> ของลำไส้ (bowel bag/plastic wrap, นอนตะแคงขวาไม่ให้ mesentery บิด) · <b>ป้องกัน hypothermia</b> · <b>fluid resuscitation</b> (เสียน้ำมาก) · <b>antibiotics</b> · NG/OG decompression · ต่อมา primary closure หรือ <b>silo</b> แล้วค่อยปิด",rubric:"1/ประเด็น",pts:[CR(P("Sterile protection / bowel bag","sterile","bag","wrap","cover")),CR(P("Prevent hypothermia","hypotherm","warm")),CR(P("Fluid resuscitation","fluid")),P("Antibiotics","antibiot"),P("NG decompression","ng","og","decompress"),P("Silo or primary closure","silo","closure")]})
 ),
 interp:"Gastroschisis",
 summary:["No sac, right of cord","Bowel bag, warm, fluids, antibiotics","Silo or primary closure"]}),

SA({page:33,orig:"MEQ 10",num:"SA 10",sub:"Neuro",flag:NOIMG,imgAlt:"วิดีโอการตรวจตา",title:"Short answer — Parinaud syndrome video",
 stem:`A video of a patient is shown. What do you see, and what is the diagnosis?`,
 gray:"MEQ วิดีโอ Parinaud's syndrome ถามว่าเห็นไรบ้างในวีดีโอ + ให้ Dx",
 notes:"แนวคำตอบในไฟล์: upward gaze palsy · near-light dissociation",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("10.1 Findings and diagnosis.",4,{tags:["spot"],ans:"<b>Upward gaze palsy</b> · <b>light-near dissociation</b> · convergence-retraction nystagmus · eyelid retraction (Collier sign) · Dx: <b>Parinaud (dorsal midbrain) syndrome</b> — เช่นจาก <b>pineal tumor</b>, hydrocephalus",rubric:"1/ประเด็น",pts:[CR(P("Upward gaze palsy","upward","gaze")),CR(P("Light-near dissociation","near","dissociat")),P("Convergence-retraction nystagmus","convergence","retraction"),CR(P("Parinaud syndrome","parinaud","dorsal midbrain")),P("Pineal tumor","pineal")]})
 ),
 interp:"Parinaud",
 summary:["Upgaze palsy + light-near dissociation","Dorsal midbrain compression","Pineal region tumor"]}),

SA({page:34,orig:"MEQ 11",num:"SA 11",sub:"Plastic",img:["mm34_toe"],title:"Short answer — black lesion on a digit",
 stem:`A black lesion on a toe is shown. Describe it, state the examination, and give the cause.`,
 gray:"MEQ ตรงแอค ที่มีแผลสีดำๆ ที่นิ้วชี้เท้าซ้าย จงบรรยาย บอกการตรวจร่างกายและบอกสาเหตุ",
 notes:"ไม่มีเฉลยในไฟล์ · Claude อ่านรูปเป็นแถบสีดำใต้เล็บลามถึง nail fold (Hutchinson sign)",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("11.1 Description, examination, cause.",5,{tags:["spot"],ans:"<b>Irregular pigmented band ใต้เล็บ ลามไปผิวรอบเล็บ (Hutchinson sign)</b> → <b>subungual (acral lentiginous) melanoma</b> · ตรวจ: ABCDE ของรอยโรค, <b>คลำต่อมน้ำเหลือง popliteal/inguinal</b>, in-transit nodules · ddx subungual hematoma (ประวัติกระแทก, เลื่อนตามเล็บ) · Ix: <b>biopsy ของ nail matrix</b> → amputation ระดับ digit + SLNB",rubric:"1/ประเด็น",pts:[P("Pigmented subungual lesion with Hutchinson sign","hutchinson","subungual","pigment"),CR(P("Melanoma","melanoma")),CR(P("Examine regional lymph nodes","node","inguinal","popliteal","ต่อมน้ำเหลือง")),P("DDx subungual hematoma","hematoma"),P("Nail matrix biopsy","biopsy")]})
 ),
 interp:"Subungual melanoma",
 summary:["Hutchinson sign","Check inguinal/popliteal nodes","Nail matrix biopsy → digit amputation + SLNB"]}),

SA({page:34,orig:"MEQ 12",num:"SA 12",sub:"Pediatric surgery",img:["mm34_hern"],title:"Short answer — bilateral inguinal hernia in a child",
 stem:`A child has bilateral inguinal hernia (and an umbilical hernia). Give the diagnosis and when to operate.`,
 gray:"MEQ bilateral inguinal hernia ในเด็ก ถาม Diag แล้วก็ควรผ่าตอนไหน",
 notes:"แนวคำตอบในไฟล์: with umbilical hernia",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("12.1 Diagnosis and timing.",4,{tags:["spot"],ans:"<b>Bilateral indirect inguinal hernia ร่วมกับ umbilical hernia</b> · Inguinal: <b>herniotomy ทั้งสองข้างโดยเร็ว (elective) หลังวินิจฉัย</b> — ไม่ปิดเอง เสี่ยง incarceration (preterm อาจทำก่อนกลับบ้าน) · Umbilical: observe ถึง 4–5 ปี",rubric:"1/ประเด็น",pts:[CR(P("Bilateral inguinal hernia","inguinal")),P("Umbilical hernia","umbilical"),CR(P("Herniotomy soon after diagnosis","herniotomy","soon","early","เร็ว")),P("Umbilical: wait to 4–5 years","4","5")]})
 ),
 interp:"Pediatric hernia",
 summary:["Inguinal: operate soon","Umbilical: wait to 4–5 years","Herniotomy = high ligation of sac"]}),

SA({page:34,orig:"MEQ 13",num:"SA 13",sub:"Plastic",img:["mm34_cleft"],title:"Short answer — cleft lip: timing and advice",
 stem:`When should this be operated on, and what advice should be given to the parents?`,
 gray:"MEQ cleft lip ถามว่าควรผ่าตอนไหนและควรแนะนำพ่อแม่ก่อนผ่าอย่างไร",
 notes:"แนวคำตอบในไฟล์: cheiloplasty ตอน 10 wk",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("13.1 Timing.",2,{tags:["spot"],ans:"<b>Cheiloplasty ที่ ~10 สัปดาห์ (rule of 10s)</b>",rubric:"ได้",pts:[CR(P("Cheiloplasty at 10 weeks","10 w","10 สัปดาห์","3 m","rule of 10","cheiloplasty"))]}),
  BS("13.2 Advice.",3,{tags:["spot"],ans:"<b>Feeding</b> ท่าตั้งตรง จุกนมพิเศษ เรอบ่อย · เพิ่มน้ำหนักให้ถึงเกณฑ์ · ตรวจหู/palate · ทีม cleft · genetic counseling · อธิบายแผนผ่าตัดเป็นระยะ",rubric:"1/ประเด็น",pts:[CR(P("Feeding","feed","นม")),P("Weight gain","weight","น้ำหนัก"),P("Team and staged surgery","team","stage"),P("Genetic counseling","genetic")]})
 ),
 interp:"Cleft lip",
 summary:["Cheiloplasty ~10 weeks","Rule of 10s","Feeding advice + cleft team"]})

);
})();
