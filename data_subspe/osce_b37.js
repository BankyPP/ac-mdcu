(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU70 RoC (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   70 R3 (หัวไฟล์ Rotate A MDCU70): ไม่มี OSCE · MEQ 14 ข้อ (SM21 หน้า 44–47) */
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
const Co=o=>Object.assign({set:"MDCU70",ro:"RoC",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

SA({page:45,orig:"MEQ 1",num:"SA 1",sub:"Others",img:["mm45_1"],title:"Short answer — measuring ABI",
 stem:`A picture of ABI measurement.<br>Explain how to measure it and how to interpret it.`,
 gray:"1. ภาพการวัด ABI - อธิบายวิธีการวัด - แปลผลอย่างไร",
 notes:"ไม่มีเฉลยในไฟล์ · หัวไฟล์ MEQ Surgery Rotate A MDCU70 (14 ข้อ ข้อละ 3 นาที)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Method.",3,{tags:["spot"],ans:"นอนราบพัก 5–10 นาที · พัน cuff ที่แขนและเหนือข้อเท้า · ใช้ <b>handheld Doppler</b> หา brachial, <b>dorsalis pedis และ posterior tibial</b> · บีบ cuff จนเสียงหาย แล้วปล่อย ค่าที่เสียงกลับมา = systolic pressure · <b>ABI = ankle SBP (สูงกว่าระหว่าง DP/PT) ÷ brachial SBP (สูงกว่าของสองแขน)</b>",rubric:"1/ประเด็น",pts:[P("Supine rest","supine","rest","นอน"),CR(P("Doppler systolic pressures","doppler")),CR(P("Ankle ÷ higher brachial","divide","÷","/","ratio","ankle"))]}),
  B("1.2 Interpretation.",3,{tags:["spot"],ans:"<b>1.0–1.4 ปกติ</b> · 0.91–0.99 borderline · <b>≤0.9 PAD</b> · 0.4–0.9 claudication · <b><0.4 critical limb ischemia</b> (rest pain/tissue loss) · <b>>1.4 non-compressible (calcified) เช่น DM, CKD</b> → ใช้ toe-brachial index",rubric:"1/ประเด็น",pts:[CR(P("≤0.9 = PAD","0.9")),P("<0.4 critical ischemia","0.4","critical"),CR(P(">1.4 non-compressible","1.4","calcif","non-compress"))]})
 ),
 interp:"ABI",
 summary:["ABI = ankle SBP / higher arm SBP","≤0.9 PAD, <0.4 critical","1.4 = calcified → TBI"]}),

SA({page:45,orig:"MEQ 2",num:"SA 2",sub:"Plastic",flag:NOIMG,imgAlt:"ไฝสีดำขอบไม่เรียบ",title:"Short answer — malignant melanoma",
 stem:`A picture of malignant melanoma. Give the diagnosis and treatment.`,
 gray:"2. ภาพ malignant melanoma - Diagnosis - Treatment",
 notes:"เฉลยในไฟล์: wide excision (margin 2–5 cm depends on depth of lesion) + sentinel LN dissection · ⚠ แนวทางปัจจุบันใช้ margin 0.5–2 ซม. ตาม Breslow · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘node positive → completion dissection/adjuvant immunotherapy’ → แก้เป็น SLN บวกไม่ทำ completion LND เป็น routine (ใช้ nodal US surveillance + adjuvant therapy) ตาม MSLT-II (Faries et al., NEJM 2017), DeCOG-SLT และ NCCN Melanoma: Cutaneous",opinion:"ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): SLN บวก → surveillance + adjuvant therapy ไม่ใช่ completion LND (MSLT-II) · ความมั่นใจสูง",
 parts:S(
  BS("2.1 Answer.",5,{tags:["spot"],ans:"<b>Malignant melanoma</b> · excisional biopsy → <b>wide local excision ตามความลึก (Breslow)</b> (คีย์ในไฟล์ 2–5 ซม.; แนวทางปัจจุบัน in situ 0.5–1, ≤1 มม. 1, 1–2 มม. 1–2, >2 มม. 2 ซม.) + <b>sentinel lymph node biopsy</b> (≥0.8 มม. หรือ ulcerated) · <b>SLN บวก → ไม่ทำ completion lymph node dissection เป็น routine</b> (MSLT-II 2017, DeCOG-SLT) → nodal ultrasound surveillance + <b>adjuvant systemic therapy</b> (anti-PD-1 หรือ dabrafenib + trametinib ถ้า BRAF V600) · clinically node positive (คลำได้/ภาพพบ) → therapeutic LND (± neoadjuvant immunotherapy)",rubric:"1/ประเด็น",pts:[CR(P("Melanoma","melanoma")),P("Excisional biopsy","excisional","biopsy"),CR(P("Wide excision by depth","wide","margin","breslow")),CR(P("Sentinel lymph node","sentinel"))]})
 ),
 interp:"Melanoma",
 summary:["Margin by Breslow depth","SLNB ≥0.8 mm","ABCDE"]}),

SA({page:45,orig:"MEQ 3",num:"SA 3",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"ถุงหุ้มลำไส้ที่สะดือ",kimg:["mm45_2"],title:"Short answer — omphalocele before referral",
 stem:`A picture of omphalocele.<br>1. Diagnosis.<br>2. Associated anomalies.<br>3. Management before referral.`,
 gray:"3. ภาพ Omphalocele - Diagnosis - Associated anomaly - Management ก่อนส่งต่อ",
 notes:"ไฟล์แนบสไลด์: 50–80% other malformations — cardiac, genitourinary, musculoskeletal, Beckwith-Wiedemann syndrome, neural tube malformation, pentalogy of Cantrell",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Diagnosis and anomalies.",3,{tags:["spot"],ans:"<b>Omphalocele</b> · พบ anomaly ร่วม <b>50–80%</b>: <b>cardiac</b>, genitourinary, musculoskeletal, <b>Beckwith-Wiedemann</b>, neural tube defect, <b>pentalogy of Cantrell</b>, chromosomal (trisomy 13, 18, 21)",rubric:"1/ประเด็น",pts:[CR(P("Omphalocele","omphalocele")),CR(P("Cardiac","cardiac")),P("Beckwith-Wiedemann","beckwith"),P("Chromosomal or Cantrell","trisomy","cantrell","chromosom")]}),
  BS("3.2 Before referral.",3,{tags:["spot"],ans:"<b>คลุมถุงด้วย sterile moist gauze + plastic wrap</b> ไม่ให้แตก · <b>keep warm</b> · <b>OG/NG decompression</b> · IV fluid + <b>glucose</b> (BWS hypoglycemia) · ส่งต่อศูนย์ที่มีกุมารศัลย์",rubric:"1/ประเด็น",pts:[CR(P("Cover sac","cover","wrap","gauze")),P("Keep warm","warm"),CR(P("NG/OG decompression","ng","og","decompress")),P("IV fluid and glucose","fluid","glucose")]})
 ),
 interp:"Omphalocele",
 summary:["50–80% associated anomalies","Cover sac, warm, NG, glucose","Refer"]}),

SA({page:45,orig:"MEQ 4",num:"SA 4",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"อุจจาระสีซีด",title:"Short answer — 2-month-old with pale stool",
 stem:`A 2-month-old with pale stool, pale appearance, dark urine; labs show direct hyperbilirubinemia.<br>1. Differential diagnosis.<br>2. As a doctor in a rural area, what will you do?`,
 gray:"4. ภาพ Pale stool ประวัติเด็ก 2 เดือน มาด้วยซีด อึขาว ปัสสาวะเข้ม เจาะ Lab มาหมดแล้ว ซีดนิดหน่อย เป็น direct hyperbilirubineamia - Differential diagnosis - เป็นหมอที่ rural area จะทำอย่างไร",
 notes:"เฉลยในไฟล์: biliary atresia, choledochal cyst · transabdominal ultrasound",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 DDx.",2,{tags:["spot"],ans:"<b>Biliary atresia</b> · <b>choledochal cyst</b> · (neonatal hepatitis)",rubric:"1/โรค",pts:[CR(P("Biliary atresia","biliary atresia")),CR(P("Choledochal cyst","choledochal"))]}),
  BS("4.2 Rural management.",3,{tags:["spot"],ans:"<b>Transabdominal ultrasound</b> (GB, triangular cord, cyst) · vitamin K · <b>ส่งต่อด่วนกุมารศัลยแพทย์</b> — Kasai ต้องทำก่อน 60 วัน (อายุ 2 เดือนแล้ว เร่งด่วน)",rubric:"1/ประเด็น",pts:[CR(P("Ultrasound","ultrasound","usg","us")),CR(P("Urgent referral (Kasai before 60 days)","refer","ส่งต่อ","kasai","60")),P("Vitamin K","vitamin k")]})
 ),
 interp:"Biliary atresia",
 summary:["Acholic stool + direct bili","US then urgent referral","Kasai before 60 days"]}),

SA({page:45,orig:"MEQ 5",num:"SA 5",sub:"Neuro",flag:NOIMG,imgAlt:"วิดีโอตรวจกล้ามเนื้อ",title:"Short answer — key muscles video",
 stem:`A video shows examination of key muscles. Name the muscle, nerve, and nerve roots for each (gastrocnemius, abductor digiti minimi, deltoid).`,
 gray:"5. วีดีโอตรวจ Key muscles ให้บอก muscle, innervation, nerve roots : Gastrocnemius, Abductor digiti minimi, Deltoid",
 notes:"แนวคำตอบในไฟล์: Gastrocnemius, Abductor digiti minimi, Deltoid",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Muscles.",6,{tags:["spot"],ans:"<b>Gastrocnemius</b> — tibial nerve, <b>S1</b>(–S2) (ankle plantarflexion) · <b>Abductor digiti minimi (hand)</b> — ulnar nerve, <b>T1</b> (C8–T1) (กางนิ้วก้อย) · <b>Deltoid</b> — axillary nerve, <b>C5</b>(–C6) (shoulder abduction)",rubric:"1/ประเด็น",pts:[CR(P("Gastrocnemius — tibial S1","tibial","s1")),CR(P("ADM — ulnar T1","ulnar","t1","c8")),CR(P("Deltoid — axillary C5","axillary","c5"))]})
 ),
 interp:"Key muscles",
 summary:["Deltoid C5 axillary","ADM T1 ulnar","Gastrocnemius S1 tibial"]}),

SA({page:45,orig:"MEQ 6",num:"SA 6",sub:"Others",flag:NOIMG,imgAlt:"ขวดน้ำยาล้างห้องน้ำ",title:"Short answer — teenager drank toilet cleaner (Vixol)",
 stem:`A teenager drank a corrosive agent (Vixol) 30 minutes ago; relatives brought the bottle. Exam: mucosa swollen and red, vital signs good, no breathing problem, lungs clear, heart normal.<br>As the consulting doctor, write the orders.`,
 gray:"6. ภาพ Vixol ประวัติเด็กวัยรุ่นกลืน corrosive agent มา 30 นาทีก่อนมา รพ. ญาติเอาขวดมาด้วย มีตรวจร่างกายให้ mucosa บวมแดง, V/S ดี, หายใจไม่มีปัญหา, Lung clear, Heart ดี - ท่านเป็นแพทย์รับ consult จงสั่งการรักษาในผู้ป่วยรายนี้",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Orders.",6,{tags:["spot"],ans:"Vixol = <b>acid (HCl)</b> · <b>NPO</b> · <b>IV fluid</b> · monitor airway (บวมได้) · <b>ห้ามกระตุ้นอาเจียน ห้ามล้างท้อง ห้าม neutralize ห้ามใส่ NG แบบ blind</b> · IV PPI, analgesic · CBC, electrolyte, ABG (acidosis), Cr, LFT · CXR upright/AAS (free air) ± CT · <b>EGD ภายใน 12–24 ชม.</b> (Zargar grade) · ปรึกษาจิตเวช (ตั้งใจ?) · ติดตาม stricture",rubric:"1/ประเด็น",pts:[CR(P("NPO","npo")),CR(P("IV fluid","fluid")),P("Airway monitoring","airway"),CR(P("No emesis/lavage/neutralization","emesis","lavage","neutral","อาเจียน")),P("Imaging for perforation","cxr","ct","free air","x-ray"),CR(P("EGD 12–24 h","egd","endoscop")),P("Psychiatric consult","psych","จิตเวช")]})
 ),
 interp:"Corrosive",
 summary:["NPO, IV fluid, airway","No emesis/lavage/neutralization","EGD 12–24 h; psychiatry"]}),

SA({page:46,orig:"MEQ 7",num:"SA 7",sub:"Hepatobiliary",flag:NOIMG,imgAlt:"US ถุงน้ำดี",title:"Short answer — ultrasound of acute cholecystitis",
 stem:`An ultrasound of acute cholecystitis.<br>Describe the image and give the treatment.`,
 gray:"7. Ultrasound: Acute cholecystitis - บรรยายภาพ - แนวทางการรักษา",
 notes:"เฉลยในไฟล์: hyperechoic lesion with posterior acoustic shadowing, distended gallbladder, pericholecystic fluid collection, thickened gallbladder wall · LC · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘thickened GB wall (>3–4 มม.)’ → แก้เป็น ‘≥4 มม.’ ตาม TG18 (Yokoe 2018 CQ5: GB wall ≥4 mm; TG13 ≥5 mm)",opinion:"ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): เกณฑ์ผนังถุงน้ำดีหนาใช้ ≥4 mm ตาม TG18 (TG13 ≥5 mm) · ความมั่นใจสูง",
 parts:S(
  BS("7.1 Answer.",5,{tags:["spot"],ans:"<b>Hyperechoic lesion with posterior acoustic shadowing</b> (stone) · <b>distended gallbladder</b> · <b>pericholecystic fluid</b> · <b>thickened GB wall</b> (≥4 มม. ตาม TG18; TG13 ≥5 มม.) · Rx: NPO, IV fluid, IV antibiotic, analgesic → <b>laparoscopic cholecystectomy (early, ภายใน 72 ชม.–7 วัน)</b> · high risk → percutaneous cholecystostomy",rubric:"1/ประเด็น",pts:[CR(P("Stone with posterior shadow","shadow","hyperecho","stone")),P("Distended GB","distend"),P("Pericholecystic fluid","pericholecystic","fluid"),CR(P("Thick wall","thick","wall")),CR(P("Laparoscopic cholecystectomy","cholecystectomy","lc"))]})
 ),
 interp:"Acute cholecystitis US",
 summary:["Stone + thick wall + fluid","Early LC","PTGBD if unfit"]}),

SA({page:46,orig:"MEQ 8",num:"SA 8",sub:"Others",img:["mm46_1"],title:"Short answer — necrotizing fasciitis orders",
 stem:`A picture of necrotizing fasciitis.<br>Give the diagnosis and write the treatment orders.`,
 gray:"8. ภาพ Necrotizing fasciitis - Diagnosis - จงสั่งการรักษา",
 notes:"เฉลยในไฟล์: debridement, vacuum dressing, IV ATB",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Answer.",5,{tags:["spot"],ans:"<b>Necrotizing fasciitis</b> · resuscitation (IV fluid, sepsis bundle) · <b>broad-spectrum IV antibiotics</b> (เช่น meropenem/piperacillin-tazobactam + vancomycin + <b>clindamycin</b>) · <b>emergency radical debridement</b> ซ้ำทุก 24–48 ชม. · <b>vacuum (NPWT) dressing</b> · ควบคุมน้ำตาล · ICU",rubric:"1/ประเด็น",pts:[CR(P("Necrotizing fasciitis","necrotizing")),P("Resuscitation","fluid","resusc","sepsis"),CR(P("IV broad-spectrum antibiotics incl. clindamycin","antibiot","atb","clindamycin")),CR(P("Emergency debridement","debride")),P("Vacuum dressing","vacuum","npwt")]})
 ),
 interp:"Nec fasc",
 summary:["Emergency debridement","Broad-spectrum + clindamycin","Re-look 24–48 h, NPWT"]}),

SA({page:46,orig:"MEQ 9",num:"SA 9",sub:"Plastic",img:["mm46_2"],title:"Short answer — lipoma",
 stem:`Give the diagnosis and name the treatment.`,
 gray:"9. ภาพ lipoma - Diagnosis - ชื่อการรักษา",
 notes:"แนวคำตอบในไฟล์: Lipoma excision",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Answer.",2,{tags:["spot"],ans:"<b>Lipoma</b> · <b>excision of lipoma</b>",rubric:"1/ประเด็น",pts:[CR(P("Lipoma","lipoma")),CR(P("Excision","excision"))]})
 ),
 interp:"Lipoma",
 summary:["Soft, lobulated, slip sign","Excision"]}),

SA({page:46,orig:"MEQ 10",num:"SA 10",sub:"Others",flag:NOIMG,imgAlt:"ภาพแสดงตำแหน่ง hernia ต่างๆ",title:"Short answer — hernia sites",
 stem:`A picture shows hernia sites.<br>Name each site and give 2 risk factors.`,
 gray:"10. ภาพตำแหน่ง Hernia - ให้บอกชื่อแต่ละตำแหน่ง - ปัจจัยเสี่ยง 2 ข้อ",
 notes:"แนวคำตอบในไฟล์: chronic cough, BPH",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("10.1 Answer.",5,{tags:["spot"],ans:"ตำแหน่ง: <b>epigastric</b>, <b>umbilical/paraumbilical</b>, <b>incisional</b>, <b>Spigelian</b>, <b>inguinal (indirect/direct)</b> เหนือ inguinal ligament, <b>femoral</b> ใต้ ligament ด้านในของ femoral vein, obturator · risk ที่เพิ่ม intra-abdominal pressure: <b>chronic cough</b>, <b>BPH (เบ่งปัสสาวะ)</b>, chronic constipation, obesity, ascites, ยกของหนัก",rubric:"1/ประเด็น",pts:[P("Inguinal vs femoral by ligament","inguinal","femoral"),P("Umbilical, epigastric, incisional","umbilical","epigastric","incisional","spigel"),CR(P("Chronic cough","cough","ไอ")),CR(P("BPH / straining","bph","strain","เบ่ง"))]})
 ),
 interp:"Hernia sites",
 summary:["Inguinal above, femoral below the ligament","Raised pressure: cough, BPH, constipation"]}),

SA({page:46,orig:"MEQ 11",num:"SA 11",sub:"Plastic",img:["mm46_3"],title:"Short answer — face trauma with jaw films",
 stem:`A patient hit the face; 3 films are given.<br>Give the diagnosis and definitive treatment.`,
 gray:"11. ประวัติหน้ากระแทก fracture ให้ 3 films - Diagnosis: Mandibular fracture at?? - Definite treatment: Open reduction and internal fixation",
 notes:"เฉลยในไฟล์: mandibular fracture · open reduction with rigid fixation and intermaxillary fixation",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 Answer.",4,{tags:["spot"],ans:"<b>Mandibular fracture</b> (ตามลูกศร: body/angle และ parasymphysis — panorex + PA/Towne) · <b>open reduction with rigid internal fixation + intermaxillary fixation (IMF)</b> เพื่อคืน occlusion · antibiotic",rubric:"1/ประเด็น",pts:[CR(P("Mandibular fracture","mandib")),CR(P("ORIF","orif","open reduction","internal fixation")),P("IMF","imf","intermaxillary","mmf"),P("Restore occlusion","occlusion")]})
 ),
 interp:"Mandible fracture",
 summary:["Often 2 sites (ring)","ORIF + IMF","Occlusion is the goal"]}),

SA({page:47,orig:"MEQ 12",num:"SA 12",sub:"Hepatobiliary",flag:NOIMG,imgAlt:"ภาพมือกดใต้ชายโครงขวา",kimg:["mm47_1"],title:"Short answer — RUQ pain sign",
 stem:`A patient has RUQ pain. Pressing where the costal margin crosses the MCL during deep inspiration, the patient stops breathing in and guards.<br>1. What sign is this?<br>2. What is the landmark called?`,
 gray:"12. ประวัติปวด RUQ pain ให้ anatomical landmark มาที่ Costal margin ตัด MCL กดตอนหายใจเข้าแล้วหยุดหายใจ+guarding - Sign ในโจทย์คืออะไร - Landmark ชื่อ",
 notes:"เฉลยในไฟล์: Murphy's sign positive, involuntary guarding · Murphy's point",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("12.1 Answer.",3,{tags:["spot"],ans:"<b>Murphy's sign positive</b> + involuntary guarding → acute cholecystitis · landmark = <b>Murphy's point</b> (costal margin ตัด midclavicular line / ขอบนอก rectus)",rubric:"1/ประเด็น",pts:[CR(P("Murphy's sign","murphy")),P("Involuntary guarding","guard"),CR(P("Murphy's point","point","costal margin","midclavicular"))]})
 ),
 interp:"Murphy sign",
 summary:["Inspiratory arrest on palpation","Murphy's point = costal margin × MCL","Acute cholecystitis"]}),

SA({page:47,orig:"MEQ 13",num:"SA 13",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"เด็กมีก้อนที่สะดือ และแคมขวาบวม",title:"Short answer — preterm girl with umbilical and labial swelling",
 stem:`A 2-month-old former preterm girl has umbilical hernia and right labial swelling.<br>1. Complete diagnosis.<br>2. Treatment.`,
 gray:"13. ภาพเด็ก umbilical hernia + อวัยวะเพศหญิงด้านขวาบวม ให้ประวัติว่า Preterm ตอนนี้อายุ 2 เดือนละ - Diagnosis มาให้ครบ: Umbilical hernia +- indirect inguinal hernia - Treatment observe til 3yr then umbilicoplasty and elective herniotomy for IIH",
 notes:"แนวคำตอบในไฟล์: umbilical hernia ± indirect inguinal hernia · observe until 3 yr then umbilicoplasty, elective herniotomy for IIH · ⚠ inguinal hernia ในเด็ก preterm ควรผ่าโดยเร็ว (ไม่รอถึง 3 ปี)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("13.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Umbilical hernia + right indirect inguinal hernia</b> (ในเด็กหญิง อาจมีรังไข่อยู่ใน sac)",rubric:"1/ประเด็น",pts:[CR(P("Umbilical hernia","umbilical")),CR(P("Indirect inguinal hernia","inguinal"))]}),
  BS("13.2 Treatment.",3,{tags:["spot"],ans:"Inguinal: <b>elective herniotomy โดยเร็ว</b> (preterm เสี่ยง incarceration สูง; รังไข่ติดอยู่ = ผ่าเร็ว) · Umbilical: <b>observe ถึง 3–5 ปี</b> แล้วค่อย umbilicoplasty ถ้าไม่ปิด",rubric:"1/ประเด็น",pts:[CR(P("Early herniotomy for inguinal","herniotomy")),CR(P("Observe umbilical hernia","observe","3")),P("Umbilicoplasty later","umbilicoplasty","repair")]})
 ),
 interp:"Pediatric hernias",
 summary:["Inguinal: herniotomy soon","Umbilical: observe","Girls: ovary may be in sac"]}),

SA({page:47,orig:"MEQ 14",num:"SA 14",sub:"Colorectal",flag:NOIMG,imgAlt:"stoma ที่หน้าท้องซ้ายล่าง",title:"Short answer — colostomy",
 stem:`A picture of a colostomy.<br>What is it, in which 2 diseases is it made, and what are the procedures called?`,
 gray:"14. ให้ภาพ colostomy ถามว่ารูปอะไร ทำในโรคอะไร (2โรค) และprocedure ชื่ออะไร",
 notes:"เฉลยในไฟล์: left side colon cancer → Hartmann's procedure · rectal cancer invade sphincter → APR",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("14.1 Answer.",4,{tags:["spot"],ans:"<b>End colostomy</b> (left lower quadrant) · <b>left-sided colon cancer (obstructed/perforated) → Hartmann's procedure</b> · <b>low rectal cancer invading sphincter → abdominoperineal resection (APR)</b> (permanent colostomy) · (อื่น: perforated diverticulitis → Hartmann's)",rubric:"1/ประเด็น",pts:[CR(P("End colostomy","colostomy")),CR(P("Hartmann's procedure","hartmann")),CR(P("APR","apr","abdominoperineal")),P("Indications: obstructed colon cancer / low rectal cancer","colon","rectal")]})
 ),
 interp:"Colostomy",
 summary:["Hartmann's: end colostomy + rectal stump","APR: permanent colostomy","Low rectal cancer invading sphincter → APR"]})

);
})();
