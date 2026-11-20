(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC Sx OSCE 77 D" (จดแอค) → MDCU77 RoD (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO77DQ = AC_77D_Sx_OSCE_MEQ.pdf (6 หน้า) · หน้า 1–4 พาร์ท MEQ ข้อ 1–15 → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot)
   หน้า 5–6 พาร์ท OSCE ข้อ 1–12 · ฐานพัก (ข้อพัก) ไม่ได้นำเข้า
   ไฟล์เฉลย SO77DK = Key_OSCE_77_RoD_Sx.pdf (by MDCU78) — MEQ 2, 4–15 · OSCE 3, 4, 6, 10, 11, 12 (ครอป os77d_km และ os77d_ko)
   ไฟล์นี้เป็นโจทย์ที่จดแบบย่อ มีรูปเพียง 7 รูป — ข้อที่ไม่มีรูปติด flag ไว้ */
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
const KF="ไฟล์ Key 77D: ";
const Co=o=>Object.assign({set:"MDCU77",ro:"RoD",file:"SO77DQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== MEQ 1 ===== */
SA({page:1,orig:"MEQ 1",num:"SA 1",sub:"Other spot",title:"Short answer — eye movement and pupillary reflex clip",
 stem:`A video clip shows examination of the patient's gaze and direct pupillary light reflex. The patient cannot look upward and the pupils do not react to light. (Accommodation was not shown.)<br>1. Describe the abnormalities.<br>2. What is the diagnosis?<br>3. Where is the lesion and what is a common surgical cause?`,
 gray:"MEQ 1) ให้คลิปมา ดู gaze, direct light reflex ให้บรรยายความผิดปกติ - Upward gaze palsy, no light reflex (ไม่ได้ให้ดู accommodation reflex), ถาม dx - Parinaud syndrome",
 flag:NOIMG+" (คลิปวิดีโอ) · ผู้จดให้คำตอบมา · ข้อย่อย 3 Claude เพิ่มเพื่อเชื่อมกับศัลยกรรมประสาท",
 imgAlt:"คลิป: ผู้ป่วยมองตามนิ้วผู้ตรวจ มองซ้าย-ขวา-ลงได้ แต่มองขึ้นไม่ได้ · ส่องไฟฉายทีละข้าง รูม่านตาไม่หด",
 notes:"ผู้จด: upward gaze palsy, no light reflex → Parinaud syndrome · ไฟล์ Key 77D ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("1.1 Abnormalities.",2,{tags:["spot"],key:"ผู้จด: Upward gaze palsy, no light reflex",ans:"<b>Vertical (upward) gaze palsy</b> · <b>pupils not reactive to light</b> (light-near dissociation ถ้าตรวจ accommodation จะยังหดได้)",exp:"Pupillary light reflex ใช้ pretectal nucleus ในสมองส่วนกลาง จึงเสียร่วมกับ vertical gaze center",rubric:"ได้ = upward gaze palsy + no light reflex",pts:[CR(P("Upward gaze palsy","upward","upgaze","vertical gaze","มองขึ้น")),CR(P("No light reflex","light reflex","non.?reactive","ไม่ตอบสนอง"))]}),
  B("1.2 Diagnosis.",2,{tags:["spot"],key:"ผู้จด: Parinaud syndrome",ans:"<b>Parinaud (dorsal midbrain) syndrome</b>",exp:"องค์ประกอบ: upgaze palsy, light-near dissociation, convergence-retraction nystagmus, lid retraction (Collier sign)",rubric:"ได้",pts:[CR(P("Parinaud syndrome","parinaud","dorsal midbrain"))]}),
  B("1.3 Lesion and cause.",2,{tags:["spot"],ans:"Lesion: <b>dorsal midbrain/pretectal area</b> (superior colliculus) · สาเหตุทางศัลย์: <b>pineal region tumor</b> (germinoma, pineoblastoma) กดทับ ± <b>obstructive hydrocephalus</b> (aqueduct)",exp:"Pineal tumor + hydrocephalus → CSF diversion (ETV/VP shunt), tumor markers (AFP, β-hCG) แล้ว biopsy/resection",rubric:"ได้ = dorsal midbrain + pineal tumor",pts:[CR(P("Dorsal midbrain / pretectal","midbrain","pretectal","tectal","colliculus")),CR(P("Pineal tumor","pineal","germinoma")),P("Hydrocephalus","hydroceph")]})
 ),
 interp:"Parinaud syndrome",
 summary:["Upgaze palsy + light-near dissociation","Pineal tumor","Hydrocephalus → ETV/shunt"]}),

/* ===== MEQ 2 ===== */
SA({page:1,orig:"MEQ 2",num:"SA 2",sub:"Other spot",title:"Short answer — muscle testing clips",kimg:["os77d_km2"],
 stem:`Video clips show examination of two muscles: (1) abduction of the little finger; (2) knee extension.<br>For each, name the muscle tested and its nerve root.`,
 gray:"MEQ 2) ให้คลิปตรวจ abductor digiti minimi, quadriceps m. ถามว่าตรวจกล้ามเนื้ออะไร, innervation nerve root อะไร",
 flag:NOIMG+" (คลิปวิดีโอ)",
 imgAlt:"คลิป 2 คลิป: (1) ผู้ตรวจต้านขณะผู้ป่วยกางนิ้วก้อยออก (2) ต้านขณะผู้ป่วยเหยียดเข่าในท่านั่ง",
 notes:"เฉลยในไฟล์ Key 77D: Abductor digiti minimi = T1 · Quadriceps = L3 · AC 77B MEQ 12 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("2.1 Muscle and root.",4,{tags:["spot"],key:KF+"Abductor digiti minimi = T1 · Quadriceps = L3",ans:"(1) <b>Abductor digiti minimi — T1</b> (C8–T1, ulnar nerve) · (2) <b>Quadriceps femoris — L3</b> (L3–4, femoral nerve)",exp:"ASIA key muscles: T1 = little finger abductors, L3 = knee extensors",rubric:"ชื่อ + root",pts:[P("Abductor digiti minimi","abductor digiti","adm"),P("T1","t1","c8"),P("Quadriceps","quadriceps"),P("L3","l3","l4")]})
 ),
 interp:"Myotomes",
 summary:["T1 ADM","L3 quadriceps","L4 ankle DF, L5 EHL, S1 plantarflexion"]}),

/* ===== MEQ 3 ===== */
SA({page:1,orig:"MEQ 3",num:"SA 3",sub:"Abdominal pain",title:"Short answer — right lower quadrant pain with fever in a woman",
 stem:`A woman has right lower quadrant pain with fever; other vital signs are normal.<br>1. Name 3 further history items you would ask.<br>2. Give 3 differential diagnoses based on those questions.<br>Later results: CBC WBC 11,000/mm<sup>3</sup>; urinalysis normal.<br>3. Name 2 further investigations.`,
 gray:"MEQ 3) ผญปวดท้อง RLQ มีไข้ v/s อื่น ๆ ปกติ 1. ถามจะซักประวัติอะไรเพิ่ม 3 ข้อ 2. diff dx 3 โรค จากคำถามที่ซักไปเมื่อกี้ หลังจากนั้นให้ผล CBC (white count 11,000), UA มาปกติ(?) 3. ถามว่าจะส่ง investigation อะไรเพิ่มอีก 2 อย่าง",
 flag:"ไม่มีรูปในไฟล์ · ไฟล์ Key 77D ช่องนี้ว่าง — Claude เฉลย",
 notes:"ไฟล์ Key 77D ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("3.1 Three history items.",3,{tags:["spot"],ans:"<b>LMP/ประจำเดือนขาด, โอกาสตั้งครรภ์</b>, เลือดออกทางช่องคลอด · <b>ลักษณะปวด: ย้ายจากรอบสะดือ</b>, เบื่ออาหาร คลื่นไส้ · <b>ตกขาว/เพศสัมพันธ์</b> (PID) · <b>อาการทางปัสสาวะ</b> (แสบขัด ปวดเอว) · ปวดเฉียบพลันสัมพันธ์การขยับ (torsion)",exp:"หญิงวัยเจริญพันธุ์ปวด RLQ ต้องคิด gynecologic causes และการตั้งครรภ์เสมอ",rubric:"≥3",pts:[G("≥3",3,P("LMP/pregnancy","lmp","ประจำเดือน","pregnan","ตั้งครรภ์"),P("Migration/anorexia","migrat","ย้าย","anorexia","เบื่ออาหาร"),P("Vaginal discharge/sexual history","discharge","ตกขาว","sexual","เพศสัมพันธ์"),P("Urinary symptoms","urin","dysuria","ปัสสาวะ","แสบขัด"),P("Vaginal bleeding","bleeding","เลือดออก"))]}),
  B("3.2 Three differential diagnoses.",3,{tags:["spot"],ans:"<b>Acute appendicitis</b> · <b>pelvic inflammatory disease / tubo-ovarian abscess</b> · <b>ruptured ectopic pregnancy</b> · ovarian torsion/ruptured cyst · right pyelonephritis/ureteric stone",exp:"Ectopic pregnancy แตกเป็นภาวะคุกคามชีวิตที่ต้องไม่พลาด",rubric:"≥3",pts:[CR(P("Acute appendicitis","appendicitis")),G("≥2 others",2,P("PID/TOA","pid","pelvic inflam","tubo","toa"),P("Ectopic pregnancy","ectopic"),P("Ovarian torsion/cyst","ovarian","torsion","cyst"),P("Pyelonephritis/stone","pyelo","stone","uti"))]}),
  B("3.3 Two further investigations.",2,{tags:["spot"],ans:"<b>Urine pregnancy test (β-hCG)</b> · <b>ultrasound</b> (transvaginal/pelvic + appendix) · ถ้ายังไม่ชัด CT abdomen with contrast (เมื่อไม่ตั้งครรภ์)",exp:"UPT ต้องทำก่อน CT (รังสี) และเปลี่ยนการวินิจฉัยแยกโรคทั้งหมด",rubric:"ได้ = UPT + US",pts:[CR(P("Urine pregnancy test","pregnancy test","upt","hcg")),CR(P("Ultrasound","ultrasound","us","tvs")),P("CT abdomen","ct")]})
 ),
 interp:"RLQ pain in a woman",
 summary:["UPT ทุกราย","US ก่อน CT","Appendicitis vs gynecologic"]}),

/* ===== MEQ 4 ===== */
SA({page:1,orig:"MEQ 4",num:"SA 4",sub:"Plastic/Skin/Burn",title:"Short answer — a 3-month-old with an oral cleft",kimg:["os77d_km4"],
 stem:`A 3-month-old infant has a cleft of the palate.<br>1. What is the diagnosis?<br>2. At what age should surgical repair be done?<br>3. Why at that age?`,
 gray:"MEQ 4) เด็ก 3 เดือน มี cleft palate ให้ dx แล้วให้บอกว่า sx ตอนอายุเท่าไหร่ เพราะอะไร",
 flag:NOIMG,
 imgAlt:"ทารกอ้าปาก เห็นรอยแยกกลางเพดานปากตลอดเพดานอ่อนถึงเพดานแข็ง",
 notes:"เฉลยในไฟล์ Key 77D: 1. Cleft palate 2. 9–12 mo 3. ถ้าเร็วไปจะรบกวน maxilla bone growth ถ้าช้าไปจะรบกวน speech development",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 Diagnosis.",1,{tags:["spot"],key:KF+"Cleft palate",ans:"<b>Cleft palate</b> (± cleft lip)",exp:"Cleft lip ± palate พบบ่อยกว่า isolated cleft palate; isolated cleft palate สัมพันธ์กับ syndrome มากกว่า (Pierre Robin)",rubric:"ได้",pts:[CR(P("Cleft palate","cleft palate","เพดานโหว่"))]}),
  B("4.2 Age at repair.",2,{tags:["spot"],key:KF+"9–12 mo",ans:"<b>Palatoplasty ที่อายุ 9–12 (ถึง 18) เดือน</b> ก่อนเริ่มพูด · (cleft lip: ~3 เดือน — rule of 10s)",exp:"Rule of 10s (cleft lip): อายุ 10 สัปดาห์, น้ำหนัก 10 lb, Hb 10 g/dL",rubric:"ได้ = 9–12 เดือน",pts:[CR(P("9–12 months","9.?12","9 เดือน","12 เดือน","1 ปี","9 month","12 month"))]}),
  B("4.3 Reason.",2,{tags:["spot"],key:KF+"ถ้าเร็วไปจะรบกวน maxilla bone growth ถ้าช้าไปจะรบกวน speech development",ans:"สมดุลระหว่าง <b>การพูด</b> (ซ่อมก่อนเริ่มพูด ป้องกัน velopharyngeal insufficiency, hypernasal speech) และ <b>การเจริญของ maxilla</b> (ผ่าเร็วไป scar ยับยั้ง midface growth)",exp:"Velopharyngeal insufficiency หลังซ่อมอาจต้องทำ pharyngeal flap",rubric:"ได้ = speech + maxillary growth",pts:[CR(P("Speech development","speech","พูด")),CR(P("Maxillary growth","maxill","midface","growth"))]})
 ),
 interp:"Cleft palate",
 summary:["Lip ~3 เดือน · palate 9–12 เดือน","Speech vs maxillary growth","Feeding: special bottle, ENT (otitis media with effusion)"]}),

/* ===== MEQ 5 ===== */
SA({page:1,orig:"MEQ 5",num:"SA 5",sub:"Pediatric surgery",title:"Spot — left scrotal swelling in a 6-month-old boy",img:["os77d_m5"],kimg:["os77d_km5"],
 stem:`A 6-month-old boy has the left scrotal swelling shown.<br>1. What physical examinations help the diagnosis?<br>2. What is the definitive treatment?<br>3. At what age?`,
 gray:"MEQ 5) เด็ก 6 เดือน มีถุงอัณฑะข้างซ้ายโต ดังรูป ถามว่าจะตรวจร่างกายอะไรเพื่อวินิจฉัย, definitive treatment, ทำตอนอายุเท่าไร",
 notes:"รูปในไฟล์: ถุงอัณฑะทารกโตข้างหนึ่ง · เฉลยในไฟล์ Key 77D: Diag hydrocele 1. Get above mass test, transillumination test 2. Tx = hydrocelectomy 3. 1–2 yrs · AC 77B MEQ 10 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — ในเด็กใช้ inguinal approach (high ligation of processus vaginalis)",
 parts:S(
  B("5.1 Examinations.",3,{tags:["spot"],key:KF+"Get above mass test, transillumination test",ans:"<b>Get above the mass</b> · <b>transillumination</b> · reducibility/impulse (แยก hernia) · คลำอัณฑะ",exp:"Hydrocele: get above ได้ + ส่องไฟผ่าน",rubric:"ได้",pts:[CR(P("Get above","get above","เหนือก้อน")),CR(P("Transillumination","transillum","ส่องไฟ")),P("Reducibility","reduc","impulse")]}),
  B("5.2 Definitive treatment.",2,{tags:["spot"],key:KF+"hydrocelectomy",ans:"<b>Inguinal herniotomy — high ligation of the patent processus vaginalis</b> (pediatric hydrocelectomy)",exp:"ผู้ใหญ่ใช้ scrotal approach (Jaboulay/Lord) เพราะ processus vaginalis ปิดแล้ว",rubric:"ได้",pts:[CR(P("Herniotomy/high ligation/hydrocelectomy","herniotomy","ligation","hydrocelectomy","processus"))]}),
  B("5.3 Age.",1,{tags:["spot"],key:KF+"1–2 yrs",ans:"ถ้ายังไม่หายเมื่ออายุ <b>1–2 ปี</b> (หรือเร็วกว่านี้ถ้าเป็น communicating hydrocele ที่ขนาดเปลี่ยน/สงสัย hernia)",exp:"Communicating hydrocele ที่ไม่หายหลัง 1–2 ปี ถือเป็น patent processus vaginalis เหมือน hernia",rubric:"ได้",pts:[CR(P("1–2 years","1.?2","2 ปี","year","ขวบ"))]})
 ),
 interp:"Pediatric hydrocele",
 summary:["หายเองส่วนใหญ่ภายใน 1–2 ปี","Inguinal approach","Hernia ในเด็ก → ผ่าตัดเร็ว"]}),

/* ===== MEQ 6 ===== */
SA({page:2,orig:"MEQ 6",num:"SA 6",sub:"Plastic/Skin/Burn",title:"Spot — a painful swelling on the back of the neck in a diabetic",img:["os77d_m6"],kimg:["os77d_km6"],
 stem:`An elderly man with diabetes on medication has fever. The lesion shown is on the back of his neck.<br>1. What is the diagnosis?<br>2. What is the most common pathogen?<br>3. Outline the management.`,
 gray:"MEQ 6) ประวัติคนแก่ dm กินยา มีไข้ ให้รูป carbuncle ถาม dx, most common pathogen, management",
 notes:"รูปในไฟล์: ก้อนแดงม่วงบวมที่ท้ายทอยมีหลายรูหนอง · เฉลยในไฟล์ Key 77D: 1. Carbuncle at posterior neck 2. Staphylococcus aureus 3. Excision, IV ATB",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("6.1 Diagnosis.",1,{tags:["spot"],key:KF+"Carbuncle at posterior neck",ans:"<b>Carbuncle of the posterior neck</b>",exp:"Carbuncle = furuncle หลายอันรวมกัน มีหลายรูหนอง ลามใน subcutaneous tissue",rubric:"ได้",pts:[CR(P("Carbuncle","carbuncle","ฝีฝักบัว"))]}),
  B("6.2 Pathogen.",1,{tags:["spot"],key:KF+"Staphylococcus aureus",ans:"<b>Staphylococcus aureus</b>",exp:"MRSA ต้องคิดในผู้ป่วยที่เคยนอนโรงพยาบาล",rubric:"ได้",pts:[CR(P("Staphylococcus aureus","staph","aureus"))]}),
  B("6.3 Management.",3,{tags:["spot"],key:KF+"Excision, IV ATB",ans:"<b>Surgical drainage — cruciate incision/excision of necrotic tissue (saucerization)</b>, packing แล้วทำแผลต่อเนื่อง · <b>IV antibiotics</b> คลุม S. aureus (cloxacillin/cefazolin; MRSA → vancomycin) · <b>ควบคุมระดับน้ำตาล</b> · ดู sepsis",exp:"Carbuncle ใหญ่/มีเนื้อตายต้องผ่าตัดเปิดระบาย ยาปฏิชีวนะอย่างเดียวไม่พอ",rubric:"ได้ = drainage/excision + IV antibiotics + glucose control",pts:[CR(P("Incision/excision drainage","excision","incision","drain","debride","cruciate")),CR(P("IV antibiotics","antibiotic","cloxacillin","cefazolin","atb")),P("Glycemic control","glucose","glycem","dm","น้ำตาล","insulin")]})
 ),
 interp:"Carbuncle",
 summary:["DM + ท้ายทอย/หลัง","Excision/drainage + antibiotics","คุมน้ำตาล"]}),

/* ===== MEQ 7 ===== */
SA({page:2,orig:"MEQ 7",num:"SA 7",sub:"Imaging film",title:"Short answer — air-fluid level above the diaphragm",kimg:["os77d_km7"],
 stem:`A chest radiograph shows an air-fluid level above the diaphragm (behind the heart).<br>1. Give 3 differential diagnoses.<br>2. Name 2 investigations.`,
 gray:"MEQ 7) ให้ฟิล์ม air-fluid level เหนือ diaphragm ถาม 3 diff diagnosis, 2 investigations (hiatal hernia)",
 flag:NOIMG+" · ตำแหน่งหลังหัวใจ Claude เติมตามคำตอบผู้จด (hiatal hernia)",
 imgAlt:"CXR PA: เงากลมมีลมและระดับน้ำ (air-fluid level) ซ้อนหลังเงาหัวใจ เหนือกะบังลม ปอดทั้งสองข้างใส",
 notes:"ผู้จดเขียนว่าคำตอบน่าจะเป็น hiatal hernia · เฉลยในไฟล์ Key 77D: 1. Ddx: hiatal hernia, lung abscess, pneumonia 2. Ix: CT chest, ไม่รู้อะ",
 opinion:"เห็นด้วยบางส่วนกับเฉลยในไฟล์ — pneumonia ธรรมดาไม่ให้ air-fluid level; DDx ที่ดีกว่าคือ esophageal (achalasia/epiphrenic diverticulum) และ Bochdalek hernia · ความมั่นใจปานกลาง-สูง",
 parts:S(
  B("7.1 Three differential diagnoses.",3,{tags:["spot"],key:KF+"hiatal hernia, lung abscess, pneumonia",ans:"<b>Hiatal hernia</b> (retrocardiac air-fluid level) · <b>lung abscess</b>/cavity · <b>dilated esophagus</b> (achalasia) หรือ epiphrenic diverticulum · <b>congenital diaphragmatic hernia</b> (Bochdalek/Morgagni) · hydropneumothorax/empyema with bronchopleural fistula",exp:"Retrocardiac air-fluid level บน CXR = hiatal hernia จนกว่าจะพิสูจน์ได้ว่าไม่ใช่",rubric:"≥3",pts:[CR(P("Hiatal hernia","hiatal","hiatus")),G("≥2 others",2,P("Lung abscess","abscess"),P("Esophageal (achalasia/diverticulum)","achalasia","diverticul","esophag"),P("Diaphragmatic hernia","bochdalek","morgagni","diaphragmatic"),P("Hydropneumothorax/empyema","hydropneumo","empyema"),P("Pneumonia","pneumonia"))]}),
  B("7.2 Two investigations.",2,{tags:["spot"],key:KF+"CT chest",ans:"<b>Barium swallow / upper GI contrast study</b> (ยืนยัน hiatal hernia/esophagus) · <b>CT chest</b> · <b>EGD</b> (esophagitis, Barrett, ชนิด hernia)",exp:"Paraesophageal (type II–IV) hernia → ผ่าตัด repair เพราะเสี่ยง volvulus/strangulation",rubric:"≥2",pts:[G("≥2",2,P("Barium swallow/UGI study","barium","ugi","contrast","esophagogram"),P("CT chest","ct"),P("EGD","egd","endoscop"))]})
 ),
 interp:"Retrocardiac air-fluid level",
 summary:["Hiatal hernia type I sliding (บ่อยสุด) – IV","Barium swallow + EGD","Paraesophageal → repair"]}),

/* ===== MEQ 8 ===== */
SA({page:2,orig:"MEQ 8",num:"SA 8",sub:"Acute abdomen series",title:"Short answer — free air in a rescue worker with abdominal pain",kimg:["os77d_km8"],
 stem:`A 50-year-old rescue worker has abdominal pain. Examination: guarding and generalized tenderness. The radiograph shows free air under the diaphragm.<br>1. Name the radiographic technique (position).<br>2. Describe the finding.<br>3. What is the diagnosis?<br>4. Give 2 causes of this disease.`,
 gray:"MEQ 8) ชายอายุ 50 ปี อาชีพกู้ภัย ปวดท้อง PE: guarding, generalized tenderness ให้ film มา เห็น free air under diaphragm ถามชื่อลักษณะการถ่ายฟิล์ม, ให้บรรยาย finding, จงวินิจฉัยโรคและบอกสาเหตุการเกิดโรคมา 2 ข้อ",
 flag:NOIMG,
 imgAlt:"ภาพรังสีท่ายืน: เงาลมรูปจันทร์เสี้ยวใต้โดมกะบังลมขวา",
 notes:"เฉลยในไฟล์ Key 77D: 1. Plain film abdomen upright 2. Free air under dome of right diaphragm 3. Peptic ulcer perforation 4. NSAIDs used, excessive acid production? · AC 77B OSCE 12 และ AC 77C OSCE 6 ถามคล้ายกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — สาเหตุหลักของ peptic ulcer คือ H. pylori และ NSAID",
 parts:S(
  B("8.1 Technique.",1,{tags:["spot"],key:KF+"Plain film abdomen upright",ans:"<b>Upright (erect) film</b> — upright chest/abdomen (ผู้ป่วยนั่ง/ยืนอย่างน้อย 5–10 นาทีก่อนถ่าย)",exp:"ถ้าลุกไม่ได้: left lateral decubitus",rubric:"ได้",pts:[CR(P("Upright/erect","upright","erect"))]}),
  B("8.2 Finding.",1,{tags:["spot"],key:KF+"Free air under dome of right diaphragm",ans:"<b>Free air (crescent lucency) under the right hemidiaphragm</b> — pneumoperitoneum",exp:"ลมใต้กะบังลมขวาเห็นง่ายกว่าซ้าย (ซ้ายสับสนกับ gastric bubble)",rubric:"ได้",pts:[CR(P("Free air under diaphragm","free air","pneumoperitoneum","ลมใต้"))]}),
  B("8.3 Diagnosis.",2,{tags:["spot"],key:KF+"Peptic ulcer perforation",ans:"<b>Perforated peptic ulcer</b> with peritonitis",exp:"Generalized peritonitis + free air → ผ่าตัดด่วน",rubric:"ได้",pts:[CR(P("Perforated peptic ulcer","perforat","ulcer"))]}),
  B("8.4 Two causes.",2,{tags:["spot"],key:KF+"NSAIDs used, excessive acid production?",ans:"<b>Helicobacter pylori infection</b> · <b>NSAID/aspirin/steroid</b> (รวมยาหม้อ) · อื่น ๆ: สูบบุหรี่, ความเครียดรุนแรง, Zollinger–Ellison (กรดมาก)",exp:"H. pylori พบใน duodenal ulcer ~90% และ gastric ulcer ~70%",rubric:"≥2",pts:[G("≥2",2,P("H. pylori","pylori"),P("NSAID","nsaid","aspirin","ยาแก้ปวด","steroid"),P("Smoking","smok","บุหรี่"),P("Acid hypersecretion","acid","zollinger","กรด"))]})
 ),
 interp:"Pneumoperitoneum",
 summary:["Upright film","PPU: Graham patch","H. pylori + NSAID"]}),

/* ===== MEQ 9 ===== */
SA({page:2,orig:"MEQ 9",num:"SA 9",sub:"Mammogram",title:"Short answer — mammogram with a left upper outer quadrant mass",kimg:["os77d_km9"],
 stem:`Mammograms (MLO and CC views) show a mass in the upper outer quadrant of the left breast.<br>1. Name the investigation and the views.<br>2. Describe the findings you would report.<br>3. What is the diagnosis?<br>4. What further investigation would you request?`,
 gray:"MEQ 9) ให้ mammogram MLO, CC มา มีก้อนที่ upper outer quadrant ของนมซ้าย ถาม 1. ชื่อการตรวจ, view 2. บรรยาย finding 3. Diagnosis 4. Further Ix",
 flag:NOIMG+" · ไฟล์ Key ข้อย่อย 2 ว่าง และข้อย่อย 3 เขียน \"Breast cancer ???\" — คำตอบขึ้นกับลักษณะก้อนในรูปจริง",
 imgAlt:"Mammogram เต้านมซ้าย 2 มุม (MLO, CC): ก้อนทึบที่ upper outer quadrant",
 notes:"เฉลยในไฟล์ Key 77D: 1. Mammogram, craniocaudal view, mediolateral oblique view 2. (ว่าง) 3. Breast cancer ??? 4. Breast U/S, core needle biopsy · AC 77A MEQ 13 และ AC 77C MEQ 5 เป็น mammogram เช่นกัน",
 opinion:"ความมั่นใจปานกลาง — ถ้าก้อนขอบไม่เรียบ/spiculated คิด carcinoma; ถ้าขอบเรียบคิด fibroadenoma",
 parts:S(
  B("9.1 Investigation and views.",2,{tags:["spot"],key:KF+"Mammogram, craniocaudal view, mediolateral oblique view",ans:"<b>Mammography</b> — <b>mediolateral oblique (MLO)</b> และ <b>craniocaudal (CC)</b> views",exp:"MLO เห็นเนื้อเต้านมได้มากที่สุดรวมถึง axillary tail",rubric:"ได้",pts:[P("Mammogram","mammogra"),CR(P("MLO","mlo","mediolateral")),CR(P("CC","cc","craniocaudal"))]}),
  B("9.2 Findings to report.",3,{tags:["spot"],key:"(ไฟล์ Key 77D ช่องนี้ว่าง)",ans:"Breast composition (density) · <b>mass at the left UOQ</b>: ขนาด, <b>shape</b> (round/oval/irregular), <b>margin</b> (circumscribed/spiculated), density · <b>microcalcifications</b> · architectural distortion · skin thickening/nipple retraction · axillary nodes · <b>BI-RADS category</b>",exp:"Spiculated irregular mass = BI-RADS 5",rubric:"≥4 elements",pts:[CR(P("Location left UOQ","left","upper outer","uoq")),G("≥3 descriptors",3,P("Shape","shape","irregular","round","oval"),P("Margin","margin","spicul","circumscrib"),P("Calcification","calcif"),P("Skin/nipple/axilla","skin","nipple","axill"),P("Density","density","dense")),P("BI-RADS","bi.?rads")]}),
  B("9.3 Diagnosis.",2,{tags:["spot"],key:KF+"Breast cancer ???",ans:"<b>Suspicious for carcinoma of the left breast</b> (ถ้า irregular/spiculated) — ต้องยืนยันด้วยชิ้นเนื้อ",exp:"BI-RADS 4–5 ต้อง biopsy",rubric:"ได้",pts:[CR(P("Breast cancer/suspicious","cancer","carcinoma","malignan","suspicious","มะเร็ง"))]}),
  B("9.4 Further investigation.",2,{tags:["spot"],key:KF+"Breast U/S, core needle biopsy",ans:"<b>Breast ultrasound</b> (+ axilla) · <b>core needle biopsy</b> (US-guided) พร้อม ER/PR/HER2",exp:"Core needle biopsy ให้ histology และ receptor status ดีกว่า FNA",rubric:"ได้",pts:[CR(P("Ultrasound","ultrasound","us")),CR(P("Core needle biopsy","core","biopsy"))]})
 ),
 interp:"Mammogram",
 summary:["MLO + CC","BI-RADS 4–5 → biopsy","Triple assessment"]}),

/* ===== MEQ 10 ===== */
SA({page:2,orig:"MEQ 10",num:"SA 10",sub:"Pediatric surgery",title:"Short answer — neonatal radiograph with two gas bubbles",kimg:["os77d_km10"],
 stem:`A neonatal abdominal radiograph shows two gas bubbles in the upper abdomen with no distal gas.<br>1. What is the diagnosis and what sign is seen?<br>2. Name 2 of the most common associated anomalies.<br>3. What is the definitive treatment?`,
 gray:"MEQ 10) film duodenal atresia - ถาม dx, sign ที่เห็น, 2 most common associated anomalies, definitive treatment อะไร",
 flag:NOIMG,
 imgAlt:"ภาพรังสีช่องท้องทารกท่าตั้ง: ฟองลมใหญ่ 2 ฟองที่ช่องท้องส่วนบน (กระเพาะและ duodenum) มีระดับน้ำ ไม่มีลมในลำไส้ส่วนปลาย",
 notes:"เฉลยในไฟล์ Key 77D: 1. Duodenal atresia, double bubble sign 2. Down syndrome 3. Diamond shape duodenoduodenostomy · AC 77B MEQ 4 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("10.1 Diagnosis and sign.",2,{tags:["spot"],key:KF+"Duodenal atresia, double bubble sign",ans:"<b>Duodenal atresia</b> — <b>double bubble sign</b> (stomach + proximal duodenum) without distal gas",exp:"ไม่มีลมส่วนปลาย = complete atresia; มีลมส่วนปลาย = stenosis/web หรือ malrotation",rubric:"ได้",pts:[CR(P("Duodenal atresia","duodenal atresia")),CR(P("Double bubble","double bubble"))]}),
  B("10.2 Two associated anomalies.",2,{tags:["spot"],key:KF+"Down syndrome",ans:"<b>Down syndrome (trisomy 21)</b> ~30% · <b>congenital heart disease</b> (AVSD) · annular pancreas, malrotation, VACTERL, esophageal atresia",exp:"ต้องตรวจ echocardiogram ก่อนผ่าตัดทุกราย",rubric:"≥2",pts:[CR(P("Down syndrome","down","trisomy 21")),G("≥1 other",1,P("Cardiac","cardiac","heart","หัวใจ","avsd"),P("Annular pancreas","annular"),P("Malrotation","malrotation"),P("VACTERL/EA","vacterl","esophageal atresia"))]}),
  B("10.3 Definitive treatment.",2,{tags:["spot"],key:KF+"Diamond shape duodenoduodenostomy",ans:"<b>Diamond-shaped (Kimura) duodenoduodenostomy</b>",exp:"แยก malrotation with midgut volvulus ก่อนเสมอเพราะเป็น surgical emergency",rubric:"ได้",pts:[CR(P("Duodenoduodenostomy","duodenoduodenostomy","duodeno.?duodenostomy","kimura"))]})
 ),
 interp:"Duodenal atresia",
 summary:["Double bubble","Down syndrome + cardiac","Duodenoduodenostomy"]}),

/* ===== MEQ 11 ===== */
SA({page:2,orig:"MEQ 11",num:"SA 11",sub:"Pediatric surgery",title:"Spot — a newborn boy who has not passed meconium",img:["os77d_m11"],kimg:["os77d_km11"],
 stem:`A newborn boy has not passed meconium; his urine is normal yellow without meconium. On inspection of the perineum there is no normal anal opening. A radiograph is shown (the rectal gas lies very close to the skin marker).<br>1. Name the radiograph.<br>2. What is the diagnosis?<br>3. What is the treatment?`,
 gray:"MEQ 11) เด็กผู้ชายไม่ถ่าย Meconium ปัสสาวะออกมาได้ปกติเป็นน้ำสีเหลืองปกติ ภาพก้นเด็กมี 1 รู, ภาพ film lateral cross table (Rectum อยู่ใกล้ skin มาก ประมาณรูปนี้เลย) ถามชื่อ film ข้างต้น, diagnosis, tx",
 flag:"ผู้จดเขียนว่า \"ภาพก้นเด็กมี 1 รู\" ไม่ชัดว่าหมายถึงอะไร (ไม่มีรูปฝีเย็บในไฟล์) — stem เราใช้ว่าไม่มีรูทวารปกติ",
 notes:"รูปในไฟล์: ภาพรังสีท่า lateral ทารกคว่ำ มีเครื่องหมายโลหะที่ผิวหนังบริเวณทวาร ลม rectum อยู่ใกล้ผิวหนัง · เฉลยในไฟล์ Key 77D: 1. Prone lateral cross table film 2. Anorectal malformation (anal stenosis?) 3. Primary PSARP · AC 77B MEQ 8 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง — rectum ห่างผิว &lt;1 cm (low) ทำ primary PSARP/anoplasty ได้โดยไม่ต้อง colostomy",
 parts:S(
  B("11.1 Radiograph.",1,{tags:["spot"],key:KF+"Prone lateral cross table film",ans:"<b>Prone cross-table lateral film</b> (ถ่ายหลังคลอด ≥24 ชม.)",exp:"รอ ≥24 ชม. ให้ลมลงไปถึง rectum ก่อนถ่ายภาพ",rubric:"ได้",pts:[CR(P("Prone cross-table lateral","prone","cross.?table","lateral"))]}),
  B("11.2 Diagnosis.",2,{tags:["spot"],key:KF+"Anorectal malformation (anal stenosis?)",ans:"<b>Anorectal malformation — low type</b> (rectum–skin distance &lt;1 cm), ไม่มี rectourinary fistula (ปัสสาวะไม่มี meconium)",exp:"Krickenbeck classification แบ่งตามชนิด fistula",rubric:"ได้ = ARM low",pts:[CR(P("Anorectal malformation","anorectal","imperforate","arm")),P("Low type / &lt;1 cm","low","&lt;1","1 cm","close")]}),
  B("11.3 Treatment.",2,{tags:["spot"],key:KF+"Primary PSARP (posterior sagittal anorectoplasty)",ans:"<b>Primary PSARP</b> (หรือ minimal PSARP/anoplasty) ในช่วงแรกเกิดโดยไม่ต้องทำ colostomy · ตามด้วย anal dilatation",exp:"Rectum–skin &gt;1 cm → colostomy ก่อน",rubric:"ได้",pts:[CR(P("Primary PSARP / anoplasty","psarp","posterior sagittal","anoplasty")),P("Anal dilatation","dilat")]})
 ),
 interp:"Low ARM",
 summary:["24-hour rule","&lt;1 cm → primary repair","Meconium in urine = rectourinary fistula"]}),

/* ===== MEQ 12 ===== */
SA({page:3,orig:"MEQ 12",num:"SA 12",sub:"Acute abdomen series",title:"Short answer — cardinal signs of obstruction with an abdominal series",kimg:["os77d_km12"],
 stem:`A patient has the cardinal signs of intestinal obstruction (colicky pain, vomiting, distension, obstipation). No history of previous surgery is given. Two abdominal radiographs are provided (no chest film).<br>1. Name the 2 films and the patient position for each (in order).<br>2. Read the films and give the diagnosis.<br>3. What is the most common cause?`,
 gray:"MEQ 12) ให้ Cardinal sign มา ไม่ได้ให้ประวัติการผ่าตัด ให้ Acute abdomen series ที่ไม่มี CXR มา 1) ถามว่าฟิล์ม 2 รูปนี้ชื่อฟิล์มอะไร ถ่ายผู้ป่วยท่าไหน (ตามลำดับ) 2) อ่านผลฟิล์ม, Dx 3) Most common Cause",
 flag:NOIMG,
 imgAlt:"ภาพรังสีช่องท้อง 2 ท่า: ลำไส้เล็กโป่งตรงกลางท้องเห็นรอยพับขวางเต็มความกว้าง หลาย air-fluid level ระดับต่างกันแบบขั้นบันได ไม่เห็นลมในลำไส้ใหญ่",
 notes:"เฉลยในไฟล์ Key 77D: 1. Plain film abdomen upright, plain film abdomen supine 2. Small bowel dilatation, valvulae conniventes are seen, difference in height of air-fluid levels in the same loop, step ladder pattern, absence of distal gas; small bowel obstruction 3. Adhesion band · AC 77C MEQ 3 ถามคล้ายกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — ถ้ายืนยันว่าไม่เคยผ่าตัด สาเหตุที่พบบ่อยเปลี่ยนเป็น hernia/มะเร็ง",
 parts:S(
  B("12.1 Films and positions.",2,{tags:["spot"],key:KF+"plain film abdomen upright, plain film abdomen supine",ans:"<b>Plain abdomen upright (erect)</b> และ <b>plain abdomen supine</b>",exp:"Upright เห็น air-fluid level · supine เห็นรูปแบบและขนาดของลำไส้",rubric:"ได้",pts:[CR(P("Upright","upright","erect")),CR(P("Supine","supine"))]}),
  B("12.2 Findings and diagnosis.",4,{tags:["spot"],key:KF+"Small bowel dilatation, valvulae conniventes, different air-fluid levels in the same loop, step ladder pattern, absence of distal gas; small bowel obstruction",ans:"<b>Dilated small bowel loops</b> (&gt;3 cm, central) with <b>valvulae conniventes</b> · <b>multiple air-fluid levels at different heights</b> (step-ladder) · <b>paucity/absence of colonic gas</b> → <b>small bowel obstruction</b>",exp:"Small bowel อยู่ตรงกลาง มี valvulae conniventes พาดเต็มความกว้าง · colon อยู่รอบนอก มี haustra ไม่เต็มความกว้าง",rubric:"≥2 findings + SBO",pts:[G("≥2 findings",2,P("Dilated small bowel","dilat","small bowel"),P("Valvulae conniventes","valvulae","conniventes","stack of coins"),P("Air-fluid levels / step ladder","air.?fluid","step.?ladder"),P("No distal/colonic gas","distal","colonic gas","absence")),CR(P("Small bowel obstruction","sbo","small bowel obstruction"))]}),
  B("12.3 Most common cause.",1,{tags:["spot"],key:KF+"Adhesion band",ans:"<b>Postoperative adhesions</b> (ทั่วไป) · ไม่มีประวัติผ่าตัด → <b>hernia</b>",exp:"ต้องตรวจหา hernia ทุกช่อง (inguinal, femoral, umbilical, incisional) ในผู้ป่วย SBO",rubric:"ได้",pts:[CR(P("Adhesion","adhesion","band")),P("Hernia if no surgery","hernia")]})
 ),
 interp:"Small bowel obstruction",
 summary:["Adhesion &gt; hernia &gt; tumor","Step-ladder + valvulae","Strangulation signs → OR"]}),

/* ===== MEQ 13 ===== */
SA({page:3,orig:"MEQ 13",num:"SA 13",sub:"Vascular/Ulcer",title:"Spot — a painful leg after a long-haul flight",img:["os77d_m13"],kimg:["os77d_km13"],
 stem:`A 25-year-old man (a tennis player) returned by plane from the USA and has severe leg pain. All pulses (femoral, popliteal, posterior tibial, dorsalis pedis) are 2+ bilaterally. The photograph is shown.<br>1. Describe the picture.<br>2. What is the diagnosis?<br>3. What further investigation would you request?<br>4. Give 3 causes (mechanisms) of this disease.`,
 gray:"MEQ 13) ชายวัย 25 ปี เป็นนักเทนนิส (?) นั่งเครื่องบินกลับมาจากอเมริกา ปวดขามากเลยมารพ. ตรวจ pulse Lt./Rt. femoral a, popliteal a, posterior tibial a, dorsalis pedis a. 2+ หมด 1. อธิบายภาพ 2. Diagnosis 3. Further investigation 4. บอกสาเหตุของโรคมา 3 สาเหตุ",
 notes:"รูปในไฟล์: ขาสองข้าง ข้างหนึ่งบวมแดงกว่า มีลูกศรชี้ · เฉลยในไฟล์ Key 77D: 1. Edema and erythematous of right leg 2. Provoked deep vein thrombosis 3. Duplex ultrasound 4. Venous stasis, hypercoagulable state, endothelial injury",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("13.1 Describe.",2,{tags:["spot"],key:KF+"Edema and erythematous of right leg",ans:"<b>Unilateral swelling (edema) and erythema of the right leg</b> (calf) เทียบกับอีกข้าง",exp:"DVT อาจเห็นแค่บวมข้างเดียว วัดเส้นรอบวงน่องต่างกัน &gt;3 cm เป็นเกณฑ์ใน Wells score",rubric:"ได้",pts:[CR(P("Unilateral leg swelling","swell","edema","บวม")),P("Erythema / right","erythem","red","แดง","right","ขวา")]}),
  B("13.2 Diagnosis.",2,{tags:["spot"],key:KF+"Provoked deep vein thrombosis",ans:"<b>Provoked deep vein thrombosis</b> of the right leg (long-haul flight)",exp:"Wells score ช่วยประเมิน pretest probability",rubric:"ได้",pts:[CR(P("DVT","dvt","deep vein thromb")),P("Provoked","provoked","flight","travel")]}),
  B("13.3 Investigation.",2,{tags:["spot"],key:KF+"Duplex ultrasound",ans:"<b>Compression duplex ultrasound</b> ของหลอดเลือดดำขา · D-dimer เมื่อ pretest probability ต่ำ",exp:"Duplex: เส้นเลือดดำกดไม่แฟบ (non-compressible) = DVT",rubric:"ได้",pts:[CR(P("Duplex/compression ultrasound","duplex","ultrasound","compression")),P("D-dimer","d.?dimer")]}),
  B("13.4 Three causes.",3,{tags:["spot"],key:KF+"Venous stasis, hypercoagulable state, endothelial injury",ans:"<b>Virchow's triad</b>: <b>venous stasis</b> (นั่งนาน) · <b>hypercoagulability</b> · <b>endothelial injury</b>",exp:"Long-haul flight &gt;4 ชม. เพิ่มความเสี่ยง VTE",rubric:"ครบ 3",pts:[CR(P("Stasis","stasis")),CR(P("Hypercoagulability","hypercoag","thrombophilia")),CR(P("Endothelial injury","endotheli","vessel wall","injury"))]})
 ),
 interp:"DVT",
 summary:["Virchow triad","Duplex US","Anticoagulate (DOAC) 3 เดือนใน provoked DVT"]}),

/* ===== MEQ 14 ===== */
SA({page:4,orig:"MEQ 14",num:"SA 14",sub:"Plastic/Skin/Burn",title:"Spot — a pink, painful burn with blisters",img:["os77d_m14"],kimg:["os77d_km14"],
 stem:`A burn patient has pink, painful skin with blisters, as shown.<br>1. Assess the burn depth and give your reasons.<br>2. Describe appropriate wound management.`,
 gray:"MEQ 14) คนไข้ burn ผิวชมพู ๆ และคนไข้บอกเจ็บ (ในรูปมีตุ่มน้ำด้วย) ถามว่า 1. ประเมินระดับ burn พร้อมบอกเหตุผลว่าทำไมถึงคิดว่าเป็นระดับนั้น 2. บอกวิธีการจัดการแผลอย่างเหมาะสม",
 notes:"รูปในไฟล์: ผู้ป่วยใส่ท่อช่วยหายใจ ผิวไหม้สีชมพูแดงบริเวณหน้าอก แขน มีผิวพองหลุดลอก · เฉลยในไฟล์ Key 77D: 1. Superficial second degree burn 2. Dressing with silver sulfadiazine, vaseline gauze",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("14.1 Depth with reasons.",3,{tags:["spot"],key:KF+"Superficial second degree burn",ans:"<b>Superficial partial-thickness (superficial second-degree) burn</b> — ผิวสีชมพูแดง ชื้น <b>มีตุ่มน้ำ</b>, <b>blanching ดี capillary refill เร็ว</b>, <b>เจ็บมาก</b> (ปลายประสาทยังอยู่)",exp:"Deep partial: ขาวด่าง blanch ช้า ปวดน้อยลง · Full thickness: ขาว/น้ำตาล แข็ง ไม่เจ็บ",rubric:"ได้ = superficial partial + 2 reasons",pts:[CR(P("Superficial partial thickness / superficial 2nd degree","superficial partial","superficial second","superficial 2","second degree")),G("≥2 reasons",2,P("Pink/red, moist","pink","ชมพู","moist"),P("Blisters","blister","ตุ่มน้ำ","พอง"),P("Painful","pain","เจ็บ"),P("Blanching/capillary refill","blanch","capillary"))]}),
  B("14.2 Wound management.",3,{tags:["spot"],key:KF+"Dressing with silver sulfadiazine, vaseline gauze",ans:"Analgesia, tetanus prophylaxis · ทำความสะอาดด้วย NSS/สบู่อ่อน · <b>deroof ตุ่มน้ำใหญ่/แตก</b> · <b>topical antimicrobial</b> (silver sulfadiazine — ไม่ใช้ที่หน้า, หรือ silver dressing) + <b>Vaseline/paraffin gauze</b> หรือ biologic/synthetic dressing · หายเองใน 10–14 วันไม่ต้อง graft · ประเมิน TBSA, fluid resuscitation ถ้า &gt;20% (Parkland), airway (ภาพมี intubation)",exp:"Superficial partial-thickness burn หายภายใน 2–3 สัปดาห์โดยไม่ต้อง graft",rubric:"ได้ = clean + topical/dressing (+systemic care)",pts:[P("Cleanse / deroof blisters","clean","nss","deroof","blister"),CR(P("Silver sulfadiazine / topical antimicrobial","silver","sulfadiazine","ssd","antimicrob")),P("Non-adherent (Vaseline) dressing","vaseline","paraffin","non.?adher","bactigras","tulle"),P("Analgesia/tetanus/fluid by TBSA","analges","tetanus","parkland","fluid","tbsa")]})
 ),
 interp:"Burn depth",
 summary:["Superficial partial: pink, blisters, painful, หาย &lt;2–3 สัปดาห์","Deep partial/full → excision + graft","Parkland 4 mL × kg × %TBSA"]}),

/* ===== MEQ 15 ===== */
SA({page:4,orig:"MEQ 15",num:"SA 15",sub:"Plastic/Skin/Burn",title:"Spot — a slowly enlarging dark lesion on the cheek",img:["os77d_m15"],kimg:["os77d_km15"],
 stem:`An elderly man has had a black lesion on the left cheek that has slowly enlarged over 6 months, as shown.<br>1. What is the diagnosis?<br>2. What is the treatment?`,
 gray:"MEQ 15) คุณลุงมีก้อนสีดำที่แก้มซ้าย โตขึ้นเรื่อย ๆ เป็นมานาน 6 เดือน ไม่แน่ใจรูปนี้มั้ยนะ 1. Diagnosis (Basal cell carcinoma) 2. Treatment",
 notes:"รูปในไฟล์ (ผู้จดไม่แน่ใจว่าใช่รูปนี้): ชายสูงอายุมีรอยโรคสีดำนูน 2 จุดที่ขมับและโหนกแก้ม · ผู้จดให้คำตอบ BCC · เฉลยในไฟล์ Key 77D: 1. BCC 2. Moh's micrographic surgery",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง (ต้องแยก melanoma ด้วย biopsy)",
 parts:S(
  B("15.1 Diagnosis.",2,{tags:["spot"],key:KF+"BCC",ans:"<b>Pigmented basal cell carcinoma</b> (nodular) — DDx melanoma, seborrheic keratosis",exp:"BCC: pearly rolled border, telangiectasia, central ulcer (rodent ulcer), โตช้า ไม่ค่อย metastasize",rubric:"ได้",pts:[CR(P("Basal cell carcinoma","basal cell","bcc"))]}),
  B("15.2 Treatment.",3,{tags:["spot"],key:KF+"Moh's micrographic surgery",ans:"Biopsy ยืนยัน · <b>Mohs micrographic surgery</b> สำหรับ high-risk/ใบหน้า (H-zone) · หรือ <b>surgical excision with 4 mm margin</b> (low-risk) + reconstruct · ผู้ป่วยผ่าตัดไม่ได้: radiotherapy, topical imiquimod (superficial)",exp:"Mohs ตรวจขอบชิ้นเนื้อได้ 100% เก็บเนื้อเยื่อปกติได้มาก เหมาะกับใบหน้า",rubric:"ได้ = Mohs หรือ excision with margin",pts:[CR(P("Mohs or excision with margin","mohs","excision","4 mm","margin")),P("Biopsy","biopsy"),P("Alternatives (RT/imiquimod)","radiother","imiquimod")]})
 ),
 interp:"Basal cell carcinoma",
 summary:["มะเร็งผิวหนังที่พบบ่อยที่สุด","Mohs บนใบหน้า","Excision margin 4 mm (low risk)"]}),

/* ===== OSCE 1 ===== */
Co({page:5,orig:"1",topic:"hx",sub:"Hematemesis/UGIB",ex:1,title:"History and management — hematemesis for 2 hours",
 stem:`A woman vomited blood 2 hours before arrival. An examiner is present.<br>1. Take a history (about 2 minutes).<br>2. The examiner then gives vital signs: BP 110/70 mmHg (relative hypotension), HR 72/min. Outline the management.`,
 gray:"OSCE 1) (ฐานซักประวัติ มีอ.) ผู้ป่วยหญิง อาเจียนเป็นเลือด 2 ชม ก่อนมาโรงพยาบาล 1) ซักประวัติ (อาจารย์ให้ซัก 2 นาที หรือถ้าเสร็จไวน้อยกว่านั้นก็ได้) 2) อาจารย์ให้ค่า V/S และ Lab มา v/s: hypotension (BP เหมือนจำ 110/70) HR 72 bpm ถาม management (1 นาที หรือมากกว่านั้น ตามเวลาที่เหลือ)",
 sp:"(Claude แต่ง) หญิง 55 ปี อาเจียนเป็นเลือดสดปนลิ่ม 2 ครั้ง ~1 แก้ว ถ่ายดำ 1 ครั้ง · ปวดแสบลิ้นปี่มา 2 สัปดาห์ · ปวดเข่ากินยาแก้ปวด NSAID ทุกวัน 1 เดือน · ไม่ดื่มสุรา ไม่มีโรคตับ ไม่เคยอาเจียนรุนแรงก่อนอาเจียนเลือด · มีโรคความดันสูงกิน amlodipine (ปกติความดัน 150/90) ไม่ได้กินยาละลายลิ่มเลือด · เวียนหัวเมื่อลุกยืน",
 flag:"บทผู้ป่วยจำลอง Claude แต่ง · ผู้จดจำค่า BP ไม่แน่ใจ (\"hypotension\" ~110/70) — เราตีความว่าความดันต่ำกว่าปกติของผู้ป่วยที่มีโรคความดันสูง",
 notes:"ไฟล์ Key 77D ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง (HR 72 อาจถูกกดด้วยยา β-blocker — อย่าไว้ใจชีพจรอย่างเดียว)",
 parts:S(
  B("1.1 History.",6,{tags:["hx"],ans:"แนะนำตัว · <b>ปริมาณ/ลักษณะ</b>เลือด (สด/coffee-ground), จำนวนครั้ง · <b>melena</b>/hematochezia · <b>อาการเสียเลือด</b>: หน้ามืด เป็นลม ใจสั่น · สาเหตุ: <b>NSAID/aspirin/steroid/ยาหม้อ</b>, ปวดแสบลิ้นปี่ (PU) · <b>สุรา โรคตับ</b> (varices) · อาเจียนรุนแรงก่อน (Mallory–Weiss) · กลืนลำบาก น้ำหนักลด (มะเร็ง) · <b>anticoagulant/antiplatelet</b>, β-blocker · โรคประจำตัว (หัวใจ ไต) · เคยเลือดออกมาก่อน",exp:"Glasgow-Blatchford score ใช้ตัดสินความจำเป็นต้อง intervention",rubric:"แบ่งหมวด",
   pts:[H("Bleeding",30),CR(P("Amount/character/frequency","amount","ปริมาณ","fresh","coffee","สด","ครั้ง")),P("Melena","melena","ถ่ายดำ"),P("Symptoms of hypovolemia","dizzy","syncope","หน้ามืด","เป็นลม","ใจสั่น"),H("Causes",50),CR(P("NSAID/aspirin/steroid/herbal","nsaid","aspirin","ยาแก้ปวด","steroid","ยาหม้อ")),P("Dyspepsia/PU history","dyspeps","ulcer","แสบ","ลิ้นปี่"),CR(P("Alcohol/liver disease","alcohol","สุรา","เหล้า","liver","ตับ","cirrho")),P("Retching before (Mallory–Weiss)","retch","อาเจียนรุนแรง","mallory"),P("Dysphagia/weight loss","dysphagia","weight","กลืน","น้ำหนัก"),H("Background",20),P("Anticoagulant/antiplatelet/β-blocker","anticoag","warfarin","clopidogrel","beta","ละลายลิ่ม"),P("Comorbidities/previous bleeding","underlying","โรคประจำตัว","previous","เคย")]}),
  B("1.2 Management.",4,{tags:["hx"],ans:"<b>ABC</b>, O<sub>2</sub>, monitor · <b>2 large-bore IV</b> + <b>crystalloid</b> resuscitation · <b>CBC, G/M (PRC)</b>, coagulation, BUN/Cr, LFT · transfuse ถ้า Hb &lt;7 (&lt;8 ถ้ามีโรคหัวใจ) · <b>NPO</b> · <b>IV PPI</b> (omeprazole 80 mg bolus → 8 mg/h หรือ 40 mg q12h) · หยุด NSAID · ถ้าสงสัย varices: octreotide/terlipressin + ceftriaxone · <b>EGD ภายใน 24 ชม.</b> (เร็วกว่านั้นถ้า unstable) พร้อม endoscopic hemostasis · ประเมิน Glasgow-Blatchford/Rockall",exp:"Restrictive transfusion (Hb &lt;7) ลด rebleeding และ mortality ใน non-variceal UGIB",rubric:"ได้ = resuscitation + G/M + IV PPI + early EGD",pts:[CR(P("Large-bore IV + fluid resuscitation","large.?bore","iv","fluid","resuscit")),P("CBC, G/M, coagulation","g/?m","group","cross","cbc","coag"),P("NPO","npo","งดน้ำ"),CR(P("IV PPI","ppi","omeprazole","pantoprazole")),CR(P("Urgent EGD within 24 h","egd","endoscop","ส่องกล้อง","24"))]})
 ),
 interp:"Upper GI bleeding",
 summary:["Resuscitate ก่อน EGD","IV PPI pre-endoscopy","EGD ภายใน 24 ชม.","Varices: vasoactive drug + antibiotics"]}),

/* ===== OSCE 2 ===== */
Co({page:5,orig:"2",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Procedure — sterile gloving and dry dressing of a stapled midline wound",
 stem:`An examiner is present.<br>1. Put on sterile gloves.<br>2. Perform a dry dressing of a vertical midline abdominal wound closed with skin staples. A dressing tray (with compartments for saline and chlorhexidine) is provided, with bottles of irrigation saline, IV saline, chlorhexidine and povidone-iodine, cotton balls, 4×4 gauze and Transpore tape.`,
 gray:"OSCE 2) (ฐานหัตถการ มีอ.) 1) ให้สวมถุงมือแบบ sterile 2) ทำแผล dry dressing เป็นแผลเย็บด้วย Stapler อยู่กลางท้องแนว Vertical, อุปกรณ์มีให้คือถาดที่ใส่น้ำเกลือกับ chlorhex ไว้แล้ว, มีขวด Saline แบบ Irrigate กับแบบสำหรับ IV, มีขวด chlorhex แล้วก็มีขวด povidone iodine, แล้วก็มีสำลี, gauze 4*4, transpore ให้ (ปล. อย่าลืมเช็กรูปแผลว่ามี sign of infection มั้ย)",
 sp:"หุ่นท้องมีแผลแนวกลางเย็บด้วย staple · แผลแห้งดี ไม่บวมแดง ไม่มีหนอง (ผู้คุมอาจให้ดูรูปแผล) · ผู้คุมดู: ใส่ถุงมือ sterile ถูกหลัก, เลือก NSS แบบ irrigation, เช็ดจากแผลออกด้านนอก, ประเมิน sign of infection, ปิด gauze ติด Transpore",
 notes:"ผู้จดเตือนให้เช็ก sign of infection ของแผล · ไฟล์ Key 77D ช่องนี้ว่าง · AC 77B OSCE 9 มี dry dressing เช่นกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("2.1 Sterile gloving.",3,{tags:["proc"],ans:"ล้างมือ · เปิดซองบนพื้นผิวสะอาด ไม่แตะด้านใน · มือเปล่าจับ<b>ด้านในของ cuff</b> ใส่ข้างแรก · มือที่ใส่ถุงมือสอด<b>ใต้ cuff (ด้านนอก)</b> ของอีกข้าง · มืออยู่เหนือเอว ไม่แตะสิ่งไม่ sterile",exp:"หลักสำคัญ: ผิวหนังแตะได้เฉพาะด้านในถุงมือ ถุงมือแตะได้เฉพาะด้านนอก",rubric:"ได้ = skin→inside, glove→outside",pts:[P("Hand hygiene","hand","ล้างมือ","rub"),CR(P("Bare hand touches inside of cuff only","inside","ด้านใน","cuff")),CR(P("Gloved hand touches outside only","outside","ด้านนอก","under")),P("Keep hands above waist","waist","เอว")]}),
  B("2.2 Dry dressing.",7,{tags:["proc"],ans:"แนะนำตัว อธิบาย · ถอดแผลเก่า · <b>ประเมินแผล</b>: บวมแดง ร้อน หนอง แผลแยก กลิ่น (sign of infection) · <b>เลือก NSS แบบ irrigation</b> (ไม่ใช้ขวด IV) · ใช้ forceps 2 อัน (no-touch) · <b>เช็ดตามแนวแผล staple จากบนลงล่าง ครั้งเดียวต่อสำลี แล้วเช็ดจากแผลออกด้านข้าง</b> · ซับแห้ง · <b>ปิด gauze 4×4 แห้งคลุมทั้งแผล</b> ติด Transpore · ไม่จำเป็นต้องใช้ povidone/chlorhexidine บนแผลสะอาด (ถ้าใช้ chlorhexidine เช็ดผิวรอบแผล) · ทิ้งขยะ ล้างมือ บันทึก",exp:"แผลผ่าตัดสะอาดปิดสนิทแล้วใน 24–48 ชม. สามารถเปิดแผลอาบน้ำได้",rubric:"แบ่งตามขั้นตอน",pts:[P("Explain/remove old dressing","explain","อธิบาย","remove","ถอด"),CR(P("Assess signs of infection","infection","sign","ติดเชื้อ","แดง","หนอง")),P("Choose irrigation saline","irrigat","nss","saline","น้ำเกลือ"),CR(P("No-touch technique with forceps","no.?touch","forceps","ปากคีบ")),CR(P("Clean along wound then outward, one swab one stroke","outward","ออกด้านนอก","along","one stroke","ครั้งเดียว")),P("Dry gauze + Transpore","gauze","transpore","tape","ปิด"),P("Dispose/document","dispose","ทิ้ง","record","บันทึก")]})
 ),
 interp:"Sterile gloving and wound dressing",
 summary:["Assess infection ทุกครั้ง","NSS irrigation","Clean → dirty"]}),

/* ===== OSCE 3 ===== */
Co({page:5,orig:"3",topic:"inst",sub:"Instrument/Device",title:"Devices — NG tube, proctoscope and Jackson-Pratt drain",kimg:["os77d_ko3"],
 stem:`Three devices are placed at the station: a nasogastric tube, a proctoscope and a Jackson-Pratt drain.<br>1. Identify each and give 2 uses of each.`,
 gray:"OSCE 3) ให้ identify อุปกรณ์ และการใช้งานอย่างละ 2 ข้อ 1) NG tube 2) proctoscope 3) Jackson-pratt drain",
 flag:NOIMG+" (ของจริงวางไว้) — ผู้จดให้ชื่ออุปกรณ์มาแล้ว",
 notes:"เฉลยในไฟล์ Key 77D: 1. NG: feeding, evaluate UGIB 2. Proctoscope: examine anal canal, anal canal dilatation for surgery 3. Jackson-Pratt drain: drain in bowel anastomosis, drain for bile leakage",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("3.1 Two uses each.",6,{tags:["inst"],key:KF+"NG: feeding, evaluate UGIB · Proctoscope: examine anal canal, anal canal dilatation for surgery · JP drain: drain in bowel anastomosis, drain for bile leakage",
   ans:"<b>NG tube</b>: gastric decompression (bowel obstruction/ileus), feeding/ให้ยา, gastric lavage, ประเมิน UGIB · <b>Proctoscope</b>: ตรวจ anal canal/distal rectum (hemorrhoid, fissure), rubber band ligation/sclerotherapy, biopsy · <b>Jackson-Pratt drain</b> (closed suction): ระบายเลือด/น้ำเหลืองหลังผ่าตัด (mastectomy, thyroidectomy, cholecystectomy), เฝ้าระวัง anastomotic/bile leak",exp:"NG tube ตรวจตำแหน่งก่อนใช้ด้วย pH ของ aspirate หรือ CXR",rubric:"2 ต่อชิ้น",
   pts:[G("NG tube ×2",2,P("Decompression","decompress","obstruct","ileus"),P("Feeding/medication","feed","อาหาร","medic","ยา"),P("Lavage/UGIB evaluation","lavage","ugib","bleed")),G("Proctoscope ×2",2,P("Examine anal canal","examine","anal canal","hemorrhoid","fissure"),P("Rubber band ligation/sclerotherapy","band","ligation","scleroth"),P("Biopsy","biopsy")),G("JP drain ×2",2,P("Drain collections after surgery","blood","seroma","collection","post.?op"),P("Monitor leak (bile/anastomosis)","leak","bile","anastom"),P("Specific operations","mastectomy","thyroid","cholecyst"))]})
 ),
 interp:"Tubes and drains",
 summary:["NG: decompression/feeding","Proctoscope: anal canal","JP: closed suction drain"]}),

/* ===== OSCE 4 ===== */
Co({page:5,orig:"4",topic:"img",sub:"Anorectal",title:"Short answer — prolapsed hemorrhoids that no longer reduce",kimg:["os77d_ko4"],
 stem:`A patient has internal hemorrhoids that used to prolapse and could be pushed back, but now cannot be reduced and are dark, swollen and painful.<br>1. Give a detailed diagnosis.<br>2. What is the definitive treatment?<br>3. What advice would you give to prevent recurrence?`,
 gray:"OSCE 4) Thrombosed prolapsed internal hemorrhoid ตอนแรกดันกลับเข้าได้ตอนนี้ดันกลับเข้าไม่ได้ ให้ 1) dx อย่างละเอียด 2) definite treatment 3) ให้คำแนะนำป้องกันการเป็นซ้ำอย่างไร",
 flag:NOIMG+" · อาการบวมคล้ำเจ็บ Claude เติมให้ตรงกับคำตอบ (thrombosed)",
 notes:"เฉลยในไฟล์ Key 77D: 1. Prolapsed thrombosed internal hemorrhoid 2. urgent/emergent hemorrhoidectomy 3. กินน้ำ กิน fiber ให้เพียงพอ ออกกำลังกาย toilet training ไม่นั่งห้องน้ำนานเกินไป · AC 77B OSCE 3 วินิจฉัยเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 Detailed diagnosis.",2,{tags:["img"],key:KF+"Prolapsed thrombosed internal hemorrhoid",ans:"<b>Prolapsed thrombosed (strangulated) internal hemorrhoids, grade IV</b> (เดิม grade III)",exp:"Grade IV = prolapse ดันกลับไม่ได้",rubric:"ได้ = prolapsed thrombosed internal + grade IV",pts:[CR(P("Thrombosed/strangulated prolapsed internal hemorrhoid","thrombos","strangulat","prolaps")),P("Grade IV","grade iv","grade 4","iv")]}),
  B("4.2 Definitive treatment.",2,{tags:["img"],key:KF+"urgent/emergent hemorrhoidectomy",ans:"<b>Urgent excisional hemorrhoidectomy</b> (Milligan–Morgan/Ferguson) · ประคับประคองก่อนถ้ายังไม่พร้อม: sitz bath, analgesia, stool softener, ice",exp:"Rubber band ligation ไม่เหมาะกับ thrombosed/grade IV",rubric:"ได้",pts:[CR(P("Hemorrhoidectomy","hemorrhoidectomy"))]}),
  B("4.3 Prevention advice.",3,{tags:["img"],key:KF+"กินน้ำ กิน fiber ให้เพียงพอ ออกกำลังกาย toilet training ไม่นั่งห้องน้ำนานเกินไป",ans:"<b>Fiber 25–30 g/day</b> + <b>ดื่มน้ำเพียงพอ</b> · <b>ไม่เบ่งแรง ไม่นั่งถ่ายนาน</b> (ไม่เล่นมือถือในห้องน้ำ) · ถ่ายเมื่อปวด ไม่กลั้น · ออกกำลังกาย · รักษาท้องผูก/ท้องเสียเรื้อรัง",exp:"ท้องผูกและการเบ่งเพิ่มความดันใน anal cushion ทำให้ prolapse",rubric:"≥3",pts:[G("≥3",3,P("Fiber","fiber","ไฟเบอร์","กากใย","ผัก"),P("Water","water","น้ำ"),P("Avoid straining/prolonged sitting","strain","เบ่ง","นั่งนาน","prolonged"),P("Exercise","exercise","ออกกำลัง"),P("Toilet habit","toilet","habit","กลั้น"))]})
 ),
 interp:"Thrombosed hemorrhoids",
 summary:["Grade IV/thrombosed → hemorrhoidectomy","Fiber + water","Avoid straining"]}),

/* ===== OSCE 5 ===== */
Co({page:5,orig:"5",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — prostate palpation on a model",
 stem:`A rectal examination model is provided (no examiner at the station).<br>1. Perform a prostate examination.<br>2. What is the diagnosis?<br>3. Name 2 investigations.`,
 gray:"OSCE 5) คลำ prostate (ไม่มีอาจารย์คุม มีแต่ตู้กับอุปกรณ์ให้ แต่อาจารย์แบบชอบจ้อง) แล้ว dx กับ investigation 2 อย่าง (เป็นอันที่เป็น hard nodule Rt lower pole)",
 sp:"หุ่นต่อมลูกหมาก: คลำได้ <b>hard nodule ที่ right lower pole (apex ด้านขวา)</b> ขอบไม่เรียบ · ไม่มีผู้คุมแต่มีการสังเกตจากภายนอก",
 notes:"ผู้จด: hard nodule Rt lower pole · ไฟล์ Key 77D ช่องนี้ว่าง · AC 77A OSCE 7 มี DRE เช่นกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("5.1 Prostate examination.",4,{tags:["pe"],ans:"ใส่ถุงมือ หล่อลื่น · ท่า left lateral · inspection · สอดนิ้ว ประเมิน tone · คลำ prostate: <b>ขนาด, ผิว (เรียบ/ขรุขระ), consistency (rubbery/hard), median sulcus, nodule, กดเจ็บ</b>, mobility, seminal vesicle · ดูถุงมือ",exp:"ปกติ: ขนาดเท่าเกาลัด (~20 g) ผิวเรียบ ยืดหยุ่นเหมือนปลายจมูก มี median sulcus",rubric:"ได้ = ครบ size/surface/consistency/sulcus/nodule",pts:[P("Position/lubricant","left lateral","lubric","ท่า"),G("Describe ≥4",4,P("Size","size","ขนาด"),P("Surface","surface","ผิว","smooth","irregular"),P("Consistency","consisten","hard","rubbery","แข็ง"),P("Median sulcus","sulcus","median"),P("Nodule/tenderness","nodule","tender","ก้อน"))]}),
  B("5.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Hard nodule at the right lobe (lower pole/apex)</b> → <b>suspected carcinoma of the prostate</b>",exp:"Prostate cancer ~70% เกิดใน peripheral zone (คลำได้ทาง DRE)",rubric:"ได้",pts:[CR(P("Prostate cancer suspected","cancer","carcinoma","malignan","มะเร็ง")),P("Right lower pole nodule","right","nodule","ขวา")]}),
  B("5.3 Two investigations.",2,{tags:["pe"],ans:"<b>Serum PSA</b> · <b>multiparametric MRI prostate</b> → <b>TRUS/MRI-guided prostate biopsy</b>",exp:"PSA ปกติไม่ตัดมะเร็ง ถ้า DRE ผิดปกติต้อง biopsy",rubric:"ได้ = PSA + biopsy (± MRI)",pts:[CR(P("PSA","psa")),CR(P("Prostate biopsy (TRUS/MRI)","biopsy","trus","mri"))]})
 ),
 interp:"Abnormal DRE",
 summary:["Hard nodule → PSA + mpMRI + biopsy","Peripheral zone","Gleason/ISUP grading"]}),

/* ===== OSCE 6 ===== */
Co({page:5,orig:"6",topic:"inst",sub:"Tube/Catheter",title:"Device — three-way Foley catheter",kimg:["os77d_ko6"],
 stem:`A three-port urinary catheter is placed at the station.<br>1. Name it and its size.<br>2. How is it used?<br>3. Give an example of a patient who needs it.`,
 gray:"OSCE 6) Three way foley catheter บอก 1) ชื่อ ขนาด 2) วิธีการใช้งาน 3) ตัวอย่างคนไข้ที่ต้องใช้งาน",
 flag:NOIMG+" (ของจริงวางไว้)",
 notes:"เฉลยในไฟล์ Key 77D: 1. Three way foley catheter, 18 Fr มั้ง 2. Continuous bladder irrigation 3. Post TUR-P · AC 77B OSCE 5 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง (ขนาดดูจากตัวเลขบนข้อต่อของจริง)",
 parts:S(
  B("6.1 Name and size.",2,{tags:["inst"],key:KF+"Three way foley catheter, 18 Fr มั้ง",ans:"<b>Three-way Foley catheter</b> (ขนาดตามที่พิมพ์บนข้อต่อ เช่น 18–22 Fr)",exp:"3-way ใช้ CBI ได้เพราะมีช่อง inflow แยก",rubric:"ได้",pts:[CR(P("Three-way Foley","3.?way","three.?way")),P("Size in Fr","fr","french","18","20","22")]}),
  B("6.2 How to use.",3,{tags:["inst"],key:KF+"Continuous bladder irrigation",ans:"ใส่แบบ aseptic จนปัสสาวะไหล → balloon ใส่น้ำ ~30 mL · ช่อง <b>inflow</b> ต่อ NSS สำหรับ <b>continuous bladder irrigation</b> · ช่อง <b>outflow</b> ลงถุง · ปรับอัตราให้ปัสสาวะใส/ชมพูอ่อน · บันทึก I/O",exp:"Output จริง = ปริมาณที่ออก − ปริมาณน้ำล้างที่ให้เข้าไป",rubric:"ได้ = CBI inflow/outflow",pts:[CR(P("Continuous bladder irrigation","irrigat","cbi")),P("Inflow/outflow ports","inflow","outflow","port"),P("Balloon","balloon")]}),
  B("6.3 Example patient.",2,{tags:["inst"],key:KF+"Post TUR-P",ans:"<b>หลัง TURP</b>/TURBT · <b>gross hematuria with clot retention</b>",exp:"Clot retention ป้องกันได้ด้วย CBI หลังผ่าตัดต่อมลูกหมาก",rubric:"ได้",pts:[CR(P("Post-TURP / clot retention","turp","tur.?p","turbt","clot","hematuria"))]})
 ),
 interp:"Three-way Foley",
 summary:["CBI","Post-TURP","Clot retention"]}),

/* ===== OSCE 7 ===== */
Co({page:5,orig:"7",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — two simple sutures and a one-handed square knot",
 stem:`An examiner is present. A rubber skin pad (sutures already loaded), toothed and non-toothed forceps are provided.<br>1. Place 2 simple interrupted sutures.<br>2. Tie two silk strands together with a one-handed square knot on the practice board.`,
 gray:"OSCE 7) (ฐานหัตถการ มีอ.) เย็บ simple suture 2 เข็ม (ผิวเป็นแบบยาง ด้ายไม่ต้องใส่เอง) และ ผูก one-handed square knot ให้เชือก 2 เส้นติดกัน อาจารย์เน้นมากว่าให้ติดกัน (เอา silk ผูกกับที่ฝึกผูก) (มี forcep แบบ toothed, non-toothed ให้หยิบเอง)",
 sp:"แผ่นยางเย็บแผล · ไหมติดเข็มพร้อมใช้ · forceps มีเขี้ยวและไม่มีเขี้ยว (ต้องเลือก toothed สำหรับผิวหนัง) · ที่ฝึกผูกปมพร้อม silk 2 เส้น · ผู้คุมเน้นว่าปมต้องผูกเชือก 2 เส้นให้ติดกันแน่น",
 notes:"ผู้จดบอกว่าอาจารย์เน้นมากว่าเชือก 2 เส้นต้องติดกัน · ไฟล์ Key 77D ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("7.1 Two simple interrupted sutures.",5,{tags:["proc"],ans:"เลือก <b>toothed forceps</b> จับผิวหนัง · จับ needle holder ถูกวิธี เข็มที่ 1/3–1/2 จากโคน · แทง <b>ตั้งฉาก</b> ห่างขอบ ~3–5 mm ตามแนวโค้งเข็ม ออกอีกฝั่งระยะเท่ากัน · instrument tie square knot ปมไว้ด้านข้าง · ขอบ evert ไม่รัดแน่น · 2 เข็มห่างเท่ากัน · ตัดไหม ~5 mm",exp:"Toothed forceps จับผิวหนังได้ช้ำน้อยกว่าเพราะไม่ต้องบีบแรง",rubric:"แบ่งตามขั้นตอน",pts:[P("Toothed forceps for skin","toothed","มีเขี้ยว"),P("Correct needle loading/grip","grip","load","จับ"),CR(P("Perpendicular entry, equal bites","perpendicular","90","equal","เท่ากัน","ตั้งฉาก")),P("Square knot to the side","square","knot","ปม"),P("Even spacing/eversion","spacing","ห่าง","evert")]}),
  B("7.2 One-handed square knot joining two strands.",5,{tags:["proc"],ans:"ผูกปม <b>one-handed</b> (มือหนึ่งทำงาน อีกมือดึงตึง) · ปมแรกและปมที่สอง<b>สลับทิศ</b> (ไขว้มือ) ให้เป็น <b>square knot</b> ไม่ใช่ granny · ดึงเชือก<b>ในแนวราบ ตรงข้ามกัน</b>ด้วยแรงเท่ากัน (push knot down) · ผูก 3 throws · <b>เชือก 2 เส้นต้องติดกันแน่น</b> ไม่เลื่อน",exp:"Square knot = ทิศปมที่สองกลับกับปมแรก ถ้าซ้ำทิศเดิมจะเป็น granny knot เลื่อนหลุดง่าย",rubric:"ได้ = square (ไม่ granny), แน่น, 3 throws",pts:[P("One-handed technique","one.?hand","มือเดียว"),CR(P("Alternate throws = square knot","square","alternat","สลับ")),P("Equal opposite tension, flat","tension","flat","ตรงข้าม","ราบ"),CR(P("Two strands secured together","secure","ติดกัน","แน่น","tight")),P("At least 3 throws","3 throws","three","สามปม","3 ปม")]})
 ),
 interp:"Suturing and knot tying",
 summary:["Square vs granny knot","Toothed forceps for skin","Hands cross for each throw"]}),

/* ===== OSCE 8 ===== */
Co({page:6,orig:"8",topic:"hx",sub:"Other history",ex:1,title:"History — blood in the urine in a postmenopausal woman",
 stem:`A woman whose periods stopped several months ago reports blood in her urine.<br>1. What important history would you take?`,
 gray:"OSCE 8) ให้ประวัติผู้หญิงฉี่เป็นเลือด ประจำเดือนหมดมาหลายเดือนแล้ว ต้องซักประวัติสำคัญอะไรบ้าง",
 sp:"(Claude แต่ง) หญิง 58 ปี เห็นปัสสาวะสีแดงทั้งสาย ไม่เจ็บ 2 ครั้งใน 1 สัปดาห์ มีลิ่มเลือดเล็ก ๆ · ไม่แสบขัด ไม่ปวดเอว ไม่มีไข้ · ไม่มีเลือดออกทางช่องคลอด (เช็ดแล้วออกจากรูปัสสาวะ) · สูบบุหรี่ 30 pack-year · ทำงานโรงงานย้อมผ้า 20 ปี · ไม่ได้กินยาละลายลิ่มเลือด · น้ำหนักลด 3 kg",
 flag:"บทผู้ป่วยจำลอง Claude แต่ง · ผู้จดบันทึกโจทย์สั้นมาก (\"ฉี่เป็นเลือด ประจำเดือนหมดมาหลายเดือน\")",
 notes:"ไฟล์ Key 77D ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง ประเด็นสำคัญคือแยกเลือดจากทางเดินปัสสาวะกับช่องคลอด (postmenopausal bleeding) และหาปัจจัยเสี่ยงมะเร็ง urothelial",
 parts:S(
  B("8.1 History.",10,{tags:["hx"],ans:"แนะนำตัว · <b>ยืนยันแหล่งเลือด</b>: ออกจากรูปัสสาวะ vs <b>ช่องคลอด (postmenopausal bleeding)</b> vs ทวารหนัก · <b>ลักษณะ hematuria</b>: gross/microscopic, <b>ช่วงไหนของการปัสสาวะ</b> (initial/terminal/total), ลิ่มเลือด, <b>painless vs painful</b> · อาการร่วม: แสบขัด ถ่ายบ่อย (UTI/cystitis), <b>ปวดเอวร้าวลงขาหนีบ</b> (นิ่ว), ไข้ · <b>ปัจจัยเสี่ยงมะเร็ง</b>: <b>สูบบุหรี่</b>, สัมผัสสารเคมี (aromatic amines/สีย้อม), cyclophosphamide, ฉายแสงเชิงกราน · น้ำหนักลด ปวดกระดูก · ยา <b>anticoagulant</b>, ประวัติเลือดออกง่าย · trauma, ออกกำลังหนัก · โรคไต (บวม ความดัน ปัสสาวะเป็นฟอง) · ประวัติครอบครัว",exp:"Painless gross hematuria ในผู้สูงอายุ = มะเร็งกระเพาะปัสสาวะจนกว่าจะพิสูจน์ได้ว่าไม่ใช่",rubric:"แบ่งหมวด",
   pts:[H("Source and character",35),CR(P("Confirm source (urinary vs vaginal)","vaginal","ช่องคลอด","source","แหล่ง","postmenopausal")),P("Timing in stream (initial/terminal/total)","initial","terminal","total","ช่วง"),P("Clots / painless vs painful","clot","ลิ่ม","painless","เจ็บ"),H("Associated",25),P("LUTS / dysuria / fever","dysuria","แสบขัด","frequen","fever","ไข้"),P("Flank pain (stone)","flank","เอว","colic","stone"),H("Risk factors",40),CR(P("Smoking","smok","บุหรี่")),P("Occupational chemicals / cyclophosphamide / radiation","chemical","dye","สี","cyclophosph","radiat","อาชีพ"),P("Anticoagulants / bleeding tendency","anticoag","warfarin","bleed","ละลายลิ่ม"),P("Weight loss / bone pain","weight","น้ำหนัก","bone","กระดูก"),P("Renal disease / trauma","renal","ไต","trauma","edema")]})
 ),
 interp:"Hematuria history",
 summary:["แยก hematuria vs PMB","Smoking = ปัจจัยเสี่ยงหลักของ bladder cancer","Workup: CTU + cystoscopy + cytology"]}),

/* ===== OSCE 9 ===== */
Co({page:6,orig:"9",topic:"pe",sub:"Breast",ex:1,title:"Physical examination — breast examination and advice",
 stem:`A 45-year-old woman, whose first child was born when she was 25, has no family history of breast cancer. An examiner is present. A seated breast model (wearing a top, including clavicles and axillae) is provided. The examination findings are normal (as stated in the instructions).<br>1. Examine the breasts.<br>2. Give advice.`,
 gray:"OSCE 9) (ฐานตรวจร่างกาย มีอ.) ญ 45 ปี มีลูกตอน 25 ให้ตรวจเต้านม ไม่มี family hx (ตรวจแล้วปกติ เค้าบอกมาเลยว่าปกติในใบคำสั่ง) และให้คำแนะนำ (ตอนแรกหุ่นผู้ป่วยตั้งเป็นท่านั่งอยู่ แล้วก็ใส่เสื้อผ้าอยู่ หุ่นมี Clavicle กับรักแร้ด้วย)",
 sp:"หุ่นเต้านมท่านั่ง ใส่เสื้อ มี clavicle และรักแร้ · ผลตรวจปกติ (บอกในใบคำสั่ง) · ผู้คุมดู: ขออนุญาต chaperone, ตรวจท่านั่งแล้วนอน, ดูในท่าต่าง ๆ, คลำครบทุก quadrant + nipple + axilla + supraclavicular, แนะนำการตรวจคัดกรอง",
 notes:"ไฟล์ Key 77D ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง (คำแนะนำ mammogram ขึ้นกับแนวทางที่ใช้: ไทยแนะนำ CBE + mammogram ตามความเสี่ยง)",
 parts:S(
  B("9.1 Breast examination.",6,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต <b>chaperone</b> เปิดเสื้อถึงเอว · <b>Inspection ท่านั่ง</b>: แขนข้างลำตัว, ยกแขนเหนือศีรษะ, เท้าสะเอวเกร็ง pectoralis, โน้มตัวไปข้างหน้า — ดู symmetry, ก้อน, ผิว (peau d'orange, dimpling), หัวนม (retraction, discharge, eczema) · <b>คลำต่อมน้ำเหลือง</b>: axilla (5 กลุ่ม, รองรับแขน), supra/infraclavicular · <b>Palpation ท่านอน</b> มือหนุนศีรษะ ใช้ pads ของนิ้ว 3 แรงกด (vertical strip/spiral) ครอบคลุม clavicle → inframammary, sternum → midaxillary รวม <b>axillary tail</b> · <b>nipple–areola</b> · ทำทั้ง 2 ข้าง (ข้างปกติก่อน)",exp:"ตรวจข้างปกติก่อนเพื่อเป็นเกณฑ์เทียบ",rubric:"แบ่งหมวด",pts:[H("Preparation",10),P("Consent/chaperone/exposure","consent","chaperone","ขออนุญาต","expos"),H("Inspection",30),CR(P("Inspection with arm positions","inspect","arm","raise","hands on hips","ยกแขน","เท้าสะเอว")),P("Skin and nipple changes","skin","nipple","dimpl","peau","retract","หัวนม"),H("Palpation",60),CR(P("Systematic palpation of all quadrants incl. axillary tail","quadrant","systemat","vertical","spiral","tail","ทุกส่วน")),P("Nipple–areola","areola","nipple"),CR(P("Axillary and supraclavicular nodes","axill","supraclav","รักแร้","ไหปลาร้า")),P("Both breasts, normal side first","both","สองข้าง","normal side")]}),
  B("9.2 Advice.",4,{tags:["pe"],ans:"แจ้งผลปกติ · <b>Breast self-awareness/BSE เดือนละครั้ง</b> หลังหมดประจำเดือน 7–10 วัน · <b>clinical breast exam</b> ทุกปี · <b>Screening mammogram</b> (อายุ 40/45–74 ทุก 1–2 ปีตามแนวทาง; ไทย: พิจารณาตามความเสี่ยง) · มาพบแพทย์ทันทีถ้าพบก้อน หัวนมมีเลือด ผิวเปลี่ยน · ลดปัจจัยเสี่ยง: ควบคุมน้ำหนัก ออกกำลังกาย ลดสุรา หลีกเลี่ยง HRT นาน",exp:"USPSTF 2024: mammogram ทุก 2 ปี อายุ 40–74",rubric:"ได้ = BSE + CBE + mammogram screening + warning signs",pts:[CR(P("Breast self-exam/awareness","self","bse","ตรวจเอง","awareness")),P("Annual clinical breast exam","clinical breast","cbe","ทุกปี"),CR(P("Screening mammogram","mammogra")),P("Warning signs to return","lump","ก้อน","discharge","return","มาพบ"),P("Lifestyle risk reduction","weight","exercise","alcohol","น้ำหนัก","สุรา")]})
 ),
 interp:"Clinical breast examination",
 summary:["Inspection 4 positions","Palpation supine, vertical strip","Axilla + supraclavicular","Screening mammogram"]}),

/* ===== OSCE 10 ===== */
Co({page:6,orig:"10",topic:"inst",sub:"Surgical instrument",title:"Instruments and supplies — name and use (1–5)",kimg:["os77d_ko10"],
 stem:`Five items are placed at the station: (1) a flat soft latex tube; (2) a broad, curved, S-shaped retractor; (3) adhesive skin closure strips; (4) curved, fine, long-handled scissors; (5) an adhesive pouch with a flange.<br>Name each and give its use.`,
 gray:"OSCE 10) สิ่งนี้คืออะไร ใช้ทำอะไร 1. Penrose Drain, 2. Deaver retractor, 3. Leukostrip, 4. Curved Metzenbaum, 5. Ostomy bag",
 flag:NOIMG+" (ของจริงวางไว้) — stem บรรยายลักษณะแทนชื่อที่ผู้จดให้มา",
 notes:"ผู้จดให้ชื่อมา: Penrose drain, Deaver retractor, Leukostrip, curved Metzenbaum, ostomy bag · เฉลยในไฟล์ Key 77D: 1. Penrose drain — drain abscess 2. Deaver retractor — retract deep visceral organ 3. Leukostrip — skin effacement (low tension) 4. Curved Metzenbaum — cut delicate tissue 5. Ostomy bag — drain feces in patient s/p abdominoperineal resection · AC 77C OSCE 11 คล้ายกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("10.1 Name and use (1–5).",10,{tags:["inst"],key:KF+"1 Penrose drain — drain abscess · 2 Deaver retractor — retract deep visceral organ · 3 Leukostrip — skin approximation (low tension) · 4 Curved Metzenbaum — cut delicate tissue · 5 Ostomy bag — collect feces after APR",
   ans:"(1) <b>Penrose drain</b> — passive drain (abscess cavity, superficial wound) · (2) <b>Deaver retractor</b> — retract deep abdominal organs (liver, bowel) · (3) <b>Leukostrip (adhesive skin closure strip, Steri-Strip type)</b> — approximate low-tension skin edges/reinforce after suture removal · (4) <b>Curved Metzenbaum scissors</b> — dissect/cut delicate tissue · (5) <b>Ostomy bag (pouch)</b> — collect stool from a colostomy/ileostomy (เช่น หลัง APR, Hartmann's)",exp:"Ostomy bag มีแบบ one-piece และ two-piece (flange + pouch)",rubric:"ชื่อ + การใช้",
   pts:[P("1 Penrose","penrose"),P("2 Deaver","deaver"),P("3 Skin closure strip","leukostrip","steri","strip","skin closure"),P("4 Metzenbaum","metzenbaum"),P("5 Ostomy bag","ostomy","stoma","colostomy","pouch"),G("Uses (≥4)",4,P("drain abscess","abscess","drain"),P("retract deep organs","retract","deep"),P("approximate skin","approximat","skin","low tension"),P("cut delicate tissue","delicate","dissect"),P("collect feces","feces","stool","อุจจาระ","collect"))]})
 ),
 interp:"Instruments and supplies",
 summary:["Metzenbaum = delicate; Mayo = dense","Penrose = passive drain","Leukostrip ไม่ใช้กับแผลตึง"]}),

/* ===== OSCE 11 ===== */
Co({page:6,orig:"11",topic:"img",sub:"CXR",title:"Radiograph — fever and dyspnea 1 week after discharge",img:["os77d_o11"],kimg:["os77d_ko11"],
 stem:`A man was recently discharged from hospital after an illness and returns 1 week later with fever and dyspnea. The chest radiograph is shown. Equipment at the station: chest tube, NG tube, one-way Foley catheter, 18-gauge needle.<br>1. What is the diagnosis?<br>2. Which equipment would you use (name it)?<br>3. How would you manage?`,
 gray:"OSCE 11) ผู้ชายเคยเป็นอะไรซักอย่างมาเพิ่งออกจากรพ. อีก 1 week กลับมา มีไข้ หายใจลำบาก ให้ film มา ถามว่าเป็นอะไร ใช้เครื่องมืออะไร (บอกด้วยว่าคืออะไร) (มีเครื่องมือมาให้ดู Chest tube, NG, one-way foley catheter, หัวเข็มเบอร์ 18) manage ยังไง",
 notes:"รูปในไฟล์: CXR PA เห็นทึบที่ปอดล่างข้างซ้ายมีขอบโค้ง (meniscus) · เฉลยในไฟล์ Key 77D: 1. Left pleural effusion 2. Chest tube 3. ICD placement to release pleural fluid, pleural fluid analysis for definitive diagnosis",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง — มีไข้หลังนอนโรงพยาบาลให้คิด parapneumonic effusion/empyema",
 parts:S(
  B("11.1 Diagnosis.",2,{tags:["img"],key:KF+"Left pleural effusion",ans:"<b>Left pleural effusion</b> (meniscus sign, blunted costophrenic angle) — มีไข้: <b>parapneumonic effusion/empyema</b>",exp:"Meniscus sign เห็นเมื่อน้ำ &gt;200–300 mL บน PA film",rubric:"ได้",pts:[CR(P("Left pleural effusion","effusion","น้ำในเยื่อหุ้มปอด")),P("Parapneumonic / empyema","parapneumonic","empyema","หนอง")]}),
  B("11.2 Equipment.",2,{tags:["img"],key:KF+"Chest tube",ans:"<b>Chest tube (intercostal drainage catheter)</b> ต่อกับ underwater-seal drainage · (เข็ม 18G ใช้ diagnostic thoracentesis)",exp:"ICD ใส่ที่ safe triangle: ขอบหน้า latissimus dorsi, ขอบข้าง pectoralis major, เหนือระดับหัวนม (ICS 5)",rubric:"ได้",pts:[CR(P("Chest tube","chest tube","icd","intercostal"))]}),
  B("11.3 Management.",3,{tags:["img"],key:KF+"ICD placement to release pleural fluid, pleural fluid analysis for definitive diagnosis",ans:"O<sub>2</sub> · <b>diagnostic thoracentesis</b>: pleural fluid pH, glucose, LDH, protein (Light's criteria), Gram stain/culture, cell count, AFB · pH &lt;7.2, glucose &lt;60, pus, organism → <b>ICD at the safe triangle</b> (5th ICS mid-axillary) · <b>IV antibiotics</b> · loculated → intrapleural fibrinolytics/VATS decortication",exp:"Light's criteria: exudate ถ้า protein ratio &gt;0.5, LDH ratio &gt;0.6, LDH &gt;2/3 ULN",rubric:"ได้ = fluid analysis + ICD + antibiotics",pts:[CR(P("Pleural fluid analysis","analysis","thoracentesis","light","ph","glucose","ldh")),CR(P("ICD drainage","icd","chest tube","drain")),P("Antibiotics","antibiotic"),P("VATS/fibrinolytics if loculated","vats","decortic","fibrinoly")]})
 ),
 interp:"Pleural effusion/empyema",
 summary:["Light's criteria","pH &lt;7.2 → drain","Empyema stages: exudative → fibrinopurulent → organizing"]}),

/* ===== OSCE 12 ===== */
Co({page:6,orig:"12",topic:"suture",sub:"Suture material",title:"Instruments and sutures for lipoma excision on the arm",kimg:["os77d_ko12"],
 stem:`A lipoma of the arm is to be excised. Instruments (a–d) and sutures (e–h) are laid out. Choose the letter for each step:<br>1. The retractor to use.<br>2. The instrument to grasp the mass while delivering it.<br>3. The suture to approximate muscle.<br>4. The suture for the subcutaneous layer.<br>5. The suture for skin closure.`,
 gray:"OSCE 12) โจทย์ยำ เลือกเครื่องมือ + ชนิดไหม (อ่านโจทย์ไม่รู้เรื่อง ใช้สติ 400%) ผ่า lipoma ที่แขน ถามว่าจะใช้ retractor อันไหน ตอนดึงก้อนออกมาใช้อะไรคีบ เย็บชั้นกล้ามเนื้อใช้ไหมอะไร เย็บ sub cu ใช้ไหมอะไร เย็บปิดใช้ไหมอะไร จะมีเครื่องมือวางเป็น abcd ไหม efgh ให้เลือกอักษรมาใส่ช่องว่าง",
 flag:NOIMG+" (ของจริงวางไว้ เป็นตัวอักษร a–h) — เราให้ตอบเป็นชื่อแทนตัวอักษร",
 notes:"เฉลยในไฟล์ Key 77D: 1. Senn retractor 2. Allis tissue forceps 3. Vicryl 4. ??? vicryl 5. nylon",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง (subcutaneous ใช้ absorbable เช่น Vicryl 3-0/4-0)",
 parts:S(
  B("12.1–12.5 Choices.",10,{tags:["suture"],key:KF+"1 Senn retractor · 2 Allis tissue forceps · 3 Vicryl · 4 ??? vicryl · 5 nylon",
   ans:"(1) <b>Senn (rake) retractor</b> — แผลตื้นขนาดเล็ก · (2) <b>Allis tissue forceps</b> — จับก้อนไขมัน/เนื้อเยื่อแน่นได้ไม่หลุด · (3) Muscle/fascia: <b>Vicryl (polyglactin)</b> absorbable braided · (4) Subcutaneous: <b>Vicryl 3-0/4-0</b> (absorbable) · (5) Skin: <b>Nylon</b> monofilament non-absorbable",exp:"Senn/Army-navy สำหรับแผลตื้น · Deaver/Richardson สำหรับช่องท้อง",rubric:"ข้อละ 2",
   pts:[CR(P("Senn retractor","senn","rake")),P("Allis forceps","allis"),P("Muscle: Vicryl","vicryl","polyglactin"),P("Subcutaneous: absorbable (Vicryl)","vicryl","absorb","monocryl"),CR(P("Skin: nylon","nylon","polyamide"))]})
 ),
 interp:"Lipoma excision set-up",
 summary:["Small superficial wound: Senn","Grasp lipoma: Allis","Layered closure: Vicryl → nylon"]})
);
})();
