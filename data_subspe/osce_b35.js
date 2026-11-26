(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU70 RoA (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   70 R1 (ไฟล์: rotate 1): OSCE 11 สถานี (SO22 หน้า 33–35) + MEQ 5 ข้อ (SM21 หน้า 39–40 จดไม่ครบ) */
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
const Co=o=>Object.assign({set:"MDCU70",ro:"RoA",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:34,orig:"1",topic:"suture",sub:"Vertical mattress",ex:1,proc:1,title:"Vertical mattress — 2 stitches with surgical knot",
 stem:`Place 2 vertical mattress sutures and tie surgical knots.`,
 gray:"1. เย็บ vertical mattress 2 stiches ผูก surgical notch",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Technique.",5,{tags:["suture"],ans:"<b>Far-far → near-near</b> · <b>surgical knot</b>: throw แรกพัน 2 รอบ แล้ว single throw สลับทิศ · ขอบ evert · ปมข้างแผล",rubric:"1/ประเด็น",pts:[CR(P("Far-far","far")),CR(P("Near-near","near")),CR(P("Surgical knot double first throw","double","surgeon","surgical knot","2 รอบ")),P("Eversion","evert"),P("Knot to the side","side","ข้าง")]})
 ),
 interp:"Vertical mattress",
 summary:["Far-far, near-near","Surgeon's knot","Eversion"]}),

/* ===== OSCE 2 ===== */
Co({page:34,orig:"2",topic:"hx",sub:"Claudication/limb ischemia",ex:1,title:"History — calf pain in suspected peripheral arterial disease",
 stem:`A man presents with calf pain (6 hours before arriving at hospital). Take a history for peripheral arterial disease.`,
 gray:"2. ซักประวัติ Peripheral arterial disease (ชายปวดน่อง 6 ชั่วโมงก่อนมา รพ) · หน้าขาดสี่ข้อ: ซักประวัติคนไข้ที่มาด้วยปวดขา น่าจะเป็น claudication กับผู้ป่วยจำลองพร้อมอาจารย์คุม",
 notes:"ไฟล์แนบ flowchart claudication (แยก vascular vs neurogenic vs venous) · ประวัติ 6 ชม. → ต้องแยก acute limb ischemia ด้วย",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("2.1 History.",8,{tags:["hx"],ans:"<b>Acute vs chronic</b>: onset ทันที (6 ชม.) → ถาม <b>6 Ps</b> (pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia) · <b>แหล่ง emboli: AF, MI, valvular disease</b> · Chronic: <b>claudication</b> (เดินแล้วปวด ระยะทางคงที่ พักแล้วหาย), <b>rest pain</b>, แผล/เนื้อตาย · แยก <b>neurogenic claudication</b> (ดีขึ้นเมื่อนั่ง/ก้ม) และ venous claudication · <b>risk: บุหรี่, DM, HT, DLP, CAD/stroke</b>, ประวัติครอบครัว",rubric:"1/ประเด็น",pts:[CR(P("Onset and 6 Ps","6 p","pallor","paresthes","paralys","pulseless","ทันที","onset")),CR(P("Embolic source: AF, MI, valve","af","atrial","fibrillation","valv","mi")),CR(P("Claudication distance, relief by rest","claudicat","walk","เดิน","พัก")),P("Rest pain, ulcer","rest pain","ulcer","แผล"),P("Exclude neurogenic claudication","neurogenic","spinal","stenosis"),CR(P("Atherosclerotic risk factors","smok","บุหรี่","diabet","dm","hypertens"))]})
 ),
 interp:"PAD history",
 summary:["Acute: 6 Ps + embolic source (AF)","Chronic: claudication → rest pain → tissue loss","Exclude neurogenic claudication"]}),

/* ===== OSCE 3 ===== */
Co({page:34,orig:"3",topic:"pe",sub:"Acute abdomen",ex:1,title:"Examine and diagnose — 21-year-old with abdominal pain",
 stem:`A 21-year-old man has abdominal pain for 6 hours, initially diffuse, with fever; normal stool once. PE: BT 37.7 °C, otherwise normal.<br>Examine the simulated patient (examiner observing) and give the diagnosis.`,
 gray:"3. ตรวจร่างกายและวินิจฉัยผู้ป่วยจำลอง มีอาจารย์นั่งคุม ชายอายุ 21 ปี มาด้วยปวดท้อง ตอนแรกเป็นปวดท้องทั่วๆ มา 6 ชั่วโมง มีไข้ ถ่ายปกติ 1 ครั้ง มีอีกแต่จำไม่ได้ PE: BT 37.7 c ที่เหลือปกติ",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Examination.",6,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต · inspection, auscultation · palpation เริ่มไกลจุดเจ็บ: <b>McBurney tenderness, guarding, rebound</b> · <b>Rovsing, psoas, obturator</b> · บอกว่าจะทำ <b>PR</b> และตรวจ hernia/testis",rubric:"1/ประเด็น",pts:[P("Introduce, consent","consent","แนะนำ"),CR(P("McBurney tenderness","mcburney","rlq")),CR(P("Guarding, rebound","guard","rebound")),P("Rovsing","rovsing"),P("Psoas, obturator","psoas","obturator"),P("PR, hernia, testis","pr","hernia","testis")]}),
  B("3.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Acute appendicitis</b> (ปวดรอบสะดือแล้วย้ายไป RLQ, ไข้ต่ำ)",rubric:"ได้",pts:[CR(P("Acute appendicitis","appendicitis"))]})
 ),
 interp:"Appendicitis",
 summary:["Migratory pain + low-grade fever","McBurney, Rovsing, psoas, obturator","PR"]}),

/* ===== OSCE 4 ===== */
Co({page:34,orig:"4",topic:"img",sub:"Bowel obstruction",title:"Small bowel obstruction films A, B, C",
 stem:`Films A, B and C are given.<br>1. What is this set of investigations called?<br>2. Name each film in order and describe the abnormalities.<br>3. Give the diagnosis and the most common cause.`,
 gray:"4. อ่านฟิล์ม Small bowel obstruct มีให้ฟิล์มมา A, B, C 4.1 การตรวจนี้เรียกว่าอะไร 4.2 เรียงลำดับ A, B, C เรียกว่าฟิล์มอะไรบ้าง และอ่านความผิดปกติที่เห็น 4.3 ให้ diagnosis และบอกว่าสาเหตุที่พบได้บ่อยสุดคืออะไร",
 flag:NOIMG,imgAlt:"ฟิล์ม 3 แผ่น A, B, C (CXR ท่ายืน, ช่องท้องท่ายืน, ช่องท้องท่านอน) · ท่านอน: ลำไส้เล็กโป่งขยาย >3 cm หลายห่วงเรียงกลางท้อง เห็นรอยพับเยื่อบุพาดขวางเต็มความกว้างลำไส้ ลมในลำไส้ใหญ่และ rectum แทบไม่มี · ท่ายืน: air-fluid level หลายระดับเรียงสูงต่ำเป็นขั้นบันได บางห่วงมี 2 ระดับในห่วงเดียวกัน · CXR: ไม่มีลมใต้กะบังลม",
 notes:"แนวคำตอบในไฟล์: acute abdomen series (plain x-ray) · chest PA upright, abdomen upright, abdomen supine",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 Name.",1,{tags:["img"],ans:"<b>Acute abdomen series</b> (plain X-ray)",rubric:"ได้",pts:[CR(P("Acute abdomen series","acute abdomen"))]}),
  BS("4.2 Films and findings.",4,{tags:["img"],ans:"A <b>CXR PA upright</b> · B <b>abdomen upright</b> · C <b>abdomen supine</b> · <b>dilated small bowel (valvulae conniventes)</b>, <b>multiple air-fluid levels (stepladder)</b>, ลมใน colon น้อย, ไม่มี free air",rubric:"1/ประเด็น",pts:[CR(P("Chest PA upright","chest","cxr")),P("Abdomen upright","upright","erect"),P("Abdomen supine","supine"),CR(P("Dilated small bowel with air-fluid levels","dilat","air-fluid","air fluid","step"))]}),
  BS("4.3 Diagnosis and cause.",2,{tags:["img"],ans:"<b>Small bowel obstruction</b> · สาเหตุบ่อยสุด <b>adhesion</b>",rubric:"1/ประเด็น",pts:[CR(P("SBO","small bowel obstruction","sbo")),CR(P("Adhesion","adhesion","band"))]})
 ),
 interp:"SBO",
 summary:["AAS = CXR upright + abdomen upright + supine","Stepladder levels","Adhesion"]}),

/* ===== OSCE 5 ===== */
Co({page:34,orig:"5",topic:"inst",sub:"Tubes and drains",title:"Trocar, NG tube, ICD, Redivac drain, colostomy base",
 stem:`Five items are labelled A–E (trocar, NG tube, ICD, Redivac drain, colostomy base).<br>1. Name each.<br>2. Give one use of each.`,
 gray:"5. มีของวางอยู่ 5 อย่าง แปะป้าย A,B,C,D,E (Trocar, NG tube, ICD , redivac drain, colostomy base) 5.1 ให้บอกชื่อของสิ่งนั้น 5.2 บอกการใช้ประโยชน์ของแต่ละอย่างมา 1 ข้อ",
 flag:NOIMG,imgAlt:"Trocar, NG tube, ICD, Redivac drain, colostomy baseplate",
 notes:"แนวคำตอบในไฟล์: Trocar เจาะเพื่อ drain หรือใส่กล้อง laparoscopic · NG tube: feed, decompress, gastric irrigation · ICD: treat pneumothorax · Redivac drain: drain fluid after surgery e.g. thyroidectomy · Colostomy base: Hartmann's procedure in left side colon cancer",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Names and uses.",5,{tags:["inst"],ans:"<b>Trocar</b> — เจาะเข้าช่องตัวเพื่อ drain หรือใส่ laparoscopic port · <b>NG tube</b> — feeding, decompression, gastric irrigation · <b>ICD</b> — pneumothorax/hemothorax · <b>Redivac drain</b> — closed high-vacuum drain หลังผ่าตัด เช่น thyroidectomy, mastectomy · <b>Colostomy baseplate</b> — ติดรอบ stoma เช่นหลัง Hartmann's procedure",rubric:"1/ชิ้น",pts:[P("Trocar","trocar"),P("NG tube","ng","nasogastric"),CR(P("ICD for pneumothorax","icd","chest","pneumothorax")),CR(P("Redivac closed suction drain","redivac","vacuum","closed")),P("Colostomy baseplate","colostomy","stoma","baseplate")]})
 ),
 interp:"Tubes and drains",
 summary:["Redivac = closed high-vacuum drain","ICD → underwater seal","Baseplate + pouch for stoma"]}),

/* ===== OSCE 6 ===== */
Co({page:34,orig:"6",topic:"img",sub:"Mammogram",title:"Mammogram A and B",
 stem:`Mammogram films A and B are given (one patient; MLO and CC).<br>Name the views in order, report the abnormality (mass with calcification, lymph node), give the diagnosis and further investigation.`,
 gray:"8. ให้ film mammogram มา จงบอกชื่อการตรวจ A และ B ตามลำดับ (A กับ B เป็นคนละ view MLO กับ CC อะ), รายงานความผิดปกติที่พบ (มี mass กับ calcification อยู่ แต่ LN ไม่ทันดูอะ เหอๆ), ให้การวินิจฉัย และจะส่งตรวจอะไรเพิ่มเติม",
 flag:NOIMG,imgAlt:"Mammogram 2 ภาพของผู้ป่วยคนเดียว (A ถ่ายเฉียงเห็นกล้ามเนื้อ pectoralis ที่มุมบน, B ถ่ายบน-ล่าง) · ส่วนบนด้านนอกมีก้อนทึบขนาด ~3 cm ขอบไม่เรียบเป็นแฉก ภายในและรอบก้อนมีจุดหินปูนเล็กละเอียดรูปร่างหลากหลายเรียงเป็นแนว · บริเวณรักแร้ในภาพ A มีต่อมน้ำเหลืองกลมทึบขนาด ~2 cm ไม่เห็นไขมันตรงกลางต่อม",
 notes:"ไม่มีเฉลยในไฟล์ · ผู้เขียน: มี mass + calcification, ไม่ทันดู LN",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("6.1 Answer.",6,{tags:["img"],ans:"A/B = <b>MLO และ CC</b> · <b>mass</b> (ตำแหน่ง ขนาด ขอบ density) + <b>microcalcification</b> · ดู <b>axillary lymph node</b> · Dx: <b>suspicious for breast carcinoma (BI-RADS 4–5)</b> · Ix: <b>US + core needle biopsy</b>",rubric:"1/ประเด็น",pts:[CR(P("MLO and CC","mlo","cc")),CR(P("Mass and calcification","mass","calcif")),P("Axillary node","axill","node"),CR(P("Breast carcinoma suspected","carcinoma","cancer","bi-rads")),CR(P("US and core biopsy","biopsy","ultrasound"))]})
 ),
 interp:"Mammogram",
 summary:["Always check axilla","Mass + microcalcification → BI-RADS 4–5","Core biopsy"]}),

/* ===== OSCE 7 ===== */
Co({page:34,orig:"7",topic:"hx",sub:"Prostate",ex:1,title:"History — LUTS",
 stem:`Take a history from a man with lower urinary tract symptoms.`,
 gray:"10.ซักประวัติปัสสาวะลำบาก LUTS ตรงแอคจ้า",
 notes:"ไฟล์: ตรงแอค",opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 History.",6,{tags:["hx"],ans:"<b>Voiding</b>: hesitancy, weak stream, intermittency, straining, dribbling, incomplete emptying · <b>Storage</b>: frequency, nocturia, urgency, urge incontinence · <b>IPSS</b> · hematuria, retention, UTI, stone · DM, neurologic, ยา anticholinergic, urethral stricture · ปวดกระดูก น้ำหนักลด (CA prostate)",rubric:"1/ประเด็น",pts:[CR(P("Voiding symptoms","hesitan","weak","straining")),CR(P("Storage symptoms","frequency","nocturia","urgency")),P("IPSS","ipss"),P("Complications","retention","hematuria","uti"),P("Other causes","diabet","neuro","drug","stricture"),P("Red flags for cancer","bone","weight")]})
 ),
 interp:"LUTS",
 summary:["Voiding vs storage","IPSS","Exclude neurogenic, drugs, stricture, cancer"]}),

/* ===== OSCE 8 ===== */
Co({page:34,orig:"8",topic:"inst",sub:"Urinary catheter",title:"Three-way Foley catheter",
 stem:`1. What is this?<br>2. What is its specific use?`,
 gray:"11. ให้ 3-way foley catheter 11.1 สิ่งนี้คืออะไร 11.2 มีเพื่อใช้ทำอะไรโดยเฉพาะ",flag:NOIMG,imgAlt:"สายสวนยางสีเหลืองขนาดใหญ่ ปลายสายมีบอลลูน ท้ายสายแยกเป็น 3 ช่อง แต่ละช่องมีสีจุกต่างกัน",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Answer.",4,{tags:["inst"],ans:"<b>Three-way Foley catheter</b> · <b>continuous bladder irrigation</b> (clot retention, post-TURP)",rubric:"1/ประเด็น",pts:[CR(P("Three-way Foley","3-way","three-way","3 way","three way")),CR(P("Continuous bladder irrigation","irrigat","cbi"))]})
 ),
 interp:"3-way Foley",
 summary:["Irrigation port","CBI"]}),

/* ===== OSCE 9 ===== */
Co({page:35,orig:"9",topic:"inst",sub:"Suture materials",title:"Choose suture during appendectomy",
 stem:`Choose the suture for each step of an appendectomy (e.g. ligating the appendix before cutting) and state the properties of each suture.`,
 gray:"xx. เลือกไหม เย็บห้าขั้นตอนในระหว่างผ่าไส้ติ่ง เช่น ตอนเย็บผูกไส้ติ่งก่อนตัดใช้ไหม choice อะไร แล้วก็ตอบคุณสมบัติของไหมนั้นอีก",
 notes:"แนวคำตอบในไฟล์: silk = bio, multi, non-ab",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("9.1 Sutures by step.",5,{tags:["inst"],ans:"ผูก mesoappendix/appendiceal artery และ<b>ผูกโคนไส้ติ่ง</b> → <b>silk</b> (natural, multifilament, non-absorbable) ตามคีย์ (หรือ Vicryl/chromic catgut) · purse-string/peritoneum → catgut/Vicryl · fascia → Vicryl/PDS · subcutaneous → Vicryl · skin → <b>nylon</b> (synthetic monofilament non-absorbable)",rubric:"1/ประเด็น",pts:[CR(P("Ligate appendix base: silk","silk")),P("Silk properties: natural multifilament non-absorbable","natural","bio","multi","non-ab")
 ,P("Fascia: Vicryl/PDS","vicryl","pds"),P("Skin: nylon","nylon")]})
 ),
 interp:"Appendectomy sutures",
 summary:["Silk: natural, braided, non-absorbable","Fascia: Vicryl/PDS","Skin: nylon"]}),

/* ===== OSCE 10 ===== */
Co({page:35,orig:"10",topic:"proc",sub:"Scrub and gloving",ex:1,proc:1,title:"Hand washing and sterile gloving",
 stem:`Wash your hands and put on sterile gloves (examiner observing).`,
 gray:"xx. ล้างมือและใส่ถุงมือ sterile มีอาจารย์คุม",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("10.1 Technique.",6,{tags:["proc"],ans:"ถอดเครื่องประดับ · ล้างมือ/scrub ครบทุกด้าน ถึงศอก มือสูงกว่าศอก · เช็ดมือด้วยผ้า sterile · มือเปล่าแตะเฉพาะด้านในของ cuff · มือที่ใส่แล้วสอดใต้ cuff ข้างที่สอง",rubric:"1/ประเด็น",pts:[P("Remove jewelry","jewel","watch"),CR(P("All surfaces to elbow","elbow","ศอก")),CR(P("Hands above elbows","above","สูงกว่า")),CR(P("Inner cuff only with bare hand","inner","inside","ด้านใน")),P("Gloved hand under cuff","under","cuff")]})
 ),
 interp:"Scrub + gloving",
 summary:["Hands above elbows","Bare hand touches only inside","Gloved hand under cuff"]}),

/* ===== OSCE 11 ===== */
Co({page:35,orig:"11",topic:"img",sub:"Urolithiasis",title:"IVP series — staghorn",
 stem:`Several IVP films are given (time is short). Describe, diagnose and treat.`,
 gray:"xx. IVP หลายแผ่นมากดูเกือบไม่ทัน น่าจะมี Staghorn",flag:NOIMG,imgAlt:"ฟิล์ม IVP หลายแผ่น · scout film: เงาทึบรังสีก้อนใหญ่แตกเป็นกิ่งหลายแฉก รูปร่างเหมือนหล่อตามโพรง renal pelvis และ calyces ของไตขวา · หลังฉีดสาร ไตขวาขับสารช้าและน้อย calyces ที่เห็นป้านโป่ง · ไตซ้ายและท่อไตซ้ายปกติ",
 notes:"ผู้เขียนคิดว่าน่าจะมี staghorn",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("11.1 Answer.",5,{tags:["img"],ans:"Scout: <b>branching radio-opaque calculus</b> เต็ม pelvicalyceal system · contrast phase: ไตข้างนั้นทำงานลดลง/hydronephrosis · Dx: <b>staghorn calculus</b> · Rx: <b>PCNL</b>",rubric:"1/ประเด็น",pts:[CR(P("Branching opaque calculus","branch","opaque","calcul")),CR(P("Staghorn","staghorn")),CR(P("PCNL","pcnl","percutaneous"))]})
 ),
 interp:"Staghorn",
 summary:["Staghorn → PCNL","Struvite, Proteus"]}),

/* ===== MEQ ===== */
SA({page:40,orig:"MEQ 1",num:"SA 1",sub:"Others",flag:NOIMG,imgAlt:"ชายวัยหนุ่มสูบบุหรี่จัด: ปลายนิ้วมือ 2 นิ้วมีแผลเล็กลึกและเนื้อตายดำที่ปลายนิ้ว นิ้วอื่นซีดเย็น · มีรอยแดงเป็นทางตามหลอดเลือดดำผิวที่ปลายแขน",title:"Short answer — thromboangiitis obliterans",
 stem:`A picture of thromboangiitis obliterans is shown. Give the diagnosis and treatment.`,
 gray:"1. ให้รูป Thromboangiitis obliterans ถามวินิจฉัย+รักษา",
 notes:"เฉลยในไฟล์: smoking cessation",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Diagnosis and treatment.",4,{tags:["spot"],ans:"<b>Thromboangiitis obliterans (Buerger disease)</b> · <b>หยุดบุหรี่</b> (การรักษาหลัก) · wound care, analgesia, vasodilator (cilostazol/iloprost), amputation ส่วนที่ตาย",rubric:"1/ประเด็น",pts:[CR(P("Buerger disease","buerger","thromboangiitis")),CR(P("Smoking cessation","smok","บุหรี่")),P("Wound care / amputation","wound","amput")]})
 ),
 interp:"Buerger",
 summary:["Stop smoking","Young male smoker, distal limbs"]}),

SA({page:40,orig:"MEQ 5",num:"SA 2",sub:"Others",img:["mm40_par"],title:"Short answer — paronychia",
 stem:`Give the diagnosis, the most common organism, and the treatment.`,
 gray:"5. จงให้การวินิจฉัย บอกชื่อเชื้อก่อโรคที่พบบ่อยที่สุด และวิธีการรักษา",
 notes:"เฉลยในไฟล์: Dx paronychia · Cause S. aureus · Rx warm soak, ATB, incision and drainage, remove nail",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("2.1 Answer.",5,{tags:["spot"],ans:"<b>Acute paronychia</b> (มีหนอง) · <b>Staphylococcus aureus</b> · <b>warm soak, antibiotic (dicloxacillin), incision and drainage, remove nail</b> (ถ้าหนองใต้เล็บ)",rubric:"1/ประเด็น",pts:[CR(P("Paronychia","paronychia")),CR(P("S. aureus","aureus","staph")),P("Warm soak","soak","แช่"),P("Antibiotic","antibiot","dicloxa"),CR(P("Incision and drainage","incision","drain","i&d")),P("Remove nail","nail","เล็บ")]})
 ),
 interp:"Paronychia",
 summary:["S. aureus","Soak + ATB → I&D","Subungual pus → remove nail"]}),

SA({page:40,orig:"MEQ 12",num:"SA 3",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"ทารกแรกเกิด: ลำไส้หลายห่วงหนาบวม สีคล้ำ ผิวมีคราบเหนียวเกาะติดกันเป็นก้อน โผล่ออกนอกผนังหน้าท้องผ่านรูขนาด ~3 cm ที่อยู่ทางขวาของสายสะดือ · ไม่มีถุงหรือเยื่อคลุมลำไส้ · สายสะดือเกาะปกติที่ผนังหน้าท้อง · ไม่เห็นตับออกมา",title:"Short answer — gastroschisis",
 stem:`Give the diagnosis and management of gastroschisis.`,
 gray:"12. gastroschisis dx , management",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Answer.",5,{tags:["spot"],ans:"<b>Gastroschisis</b> · bowel bag/sterile cover, นอนตะแคงขวา · keep warm · <b>IV fluid</b> (เสียน้ำมาก) · NG decompression · antibiotics · <b>primary closure หรือ silo แล้วปิดภายหลัง</b> · TPN",rubric:"1/ประเด็น",pts:[CR(P("Gastroschisis","gastroschisis")),CR(P("Cover bowel","cover","bag","wrap")),P("Keep warm","warm"),CR(P("IV fluid","fluid")),P("NG","ng","decompress"),P("Silo or primary closure","silo","closure")]})
 ),
 interp:"Gastroschisis",
 summary:["Bowel bag, warm, fluids","Silo or primary closure","TPN until bowel function"]}),

SA({page:40,orig:"MEQ 14",num:"SA 4",sub:"Pediatric surgery",img:["mm40_axr"],title:"Short answer — 6-month-old with sudden bilious vomiting",
 stem:`A 6-month-old has sudden bilious vomiting.<br>1. Diagnosis?<br>2. Management?`,
 gray:"14. 6 mo child with sudden bilious vomiting 1.) dx 2.) management",
 notes:"เฉลยในไฟล์: midgut volvulus",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Malrotation with midgut volvulus</b>",rubric:"ได้",pts:[CR(P("Midgut volvulus","volvulus","malrotation"))]}),
  BS("4.2 Management.",3,{tags:["spot"],ans:"NPO, NG decompression, IV fluid, antibiotic · UGI study ถ้า stable · <b>emergency Ladd's procedure</b>",rubric:"1/ประเด็น",pts:[P("Resuscitate, NG","ng","fluid","npo"),CR(P("Ladd's procedure","ladd"))]})
 ),
 interp:"Midgut volvulus",
 summary:["Bilious vomiting = emergency","Ladd's procedure"]}),

SA({page:40,orig:"MEQ xx",num:"SA 5",sub:"Plastic",flag:NOIMG,imgAlt:"แผลกดทับลึกขนาด ~6 cm กลางก้นเหนือร่องก้น พื้นแผลมีเนื้อตายสีเหลืองดำ ตรงกลางแผลเป็นแนวกระดูกใต้แผล",title:"Short answer — bedsore position",
 stem:`A picture of a bedsore is shown. Which position caused it?`,
 gray:"xx. มีรูป Bedsore ถามว่าท่าไหน",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่ทราบตำแหน่งแผลในรูป",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("5.1 Position.",3,{tags:["spot"],ans:"ขึ้นกับตำแหน่ง: <b>sacrum/coccyx → นอนหงาย</b> · <b>ischial tuberosity → นั่ง</b> · <b>greater trochanter → นอนตะแคง</b> · heel → นอนหงาย",rubric:"1/ประเด็น",pts:[CR(P("Sacrum — supine","sacr","supine","หงาย")),P("Ischium — sitting","ischi","sitting","นั่ง"),P("Trochanter — lateral","trochanter","lateral","ตะแคง")]})
 ),
 interp:"Bedsore",
 summary:["Sacrum = supine","Ischium = sitting","Trochanter = lateral"]})

);
})();
