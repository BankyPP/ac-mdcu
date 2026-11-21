(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "MEQ / OSCE SURGERY SUB SPEcialty rotate D MDCU76" (25 Oct 2023) → MDCU76 RoD (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO76DQ = 76D_OSCE_meq_subspe_MDCU76_rotate_D.pdf (2 หน้า จดแบบย่อ) · หน้า 1 MEQ ข้อ 1–14 (ดูโจทย์ในไอแพด ข้อละ 3–4 นาที) → sec "Short Answers" · หน้า 2 OSCE ข้อ 1–12 (ฐานละ 4 นาที, พัก 1 ฐาน — ไม่ได้นำเข้า)
   ไฟล์เฉลย SO76DK = Key_76D_OSCE_MEQ_76_rotate_D.pdf (6 หน้า ลายมือ, หน้า 6 ว่าง) — MEQ 1–5, 8–11, 13, 14 · OSCE 1, 2, 4, 5, 6, 7, 9, 11, 12 (ครอป os76d_km<n> / os76d_ko<n>)
   ไฟล์โจทย์มีรูปเดียว (OSCE 5 "คล้ายๆงี้") — ข้ออื่นใส่ imgAlt · MEQ 6, 7, 12 และ OSCE 3, 8, 10 ไม่มีเฉลยในไฟล์ */
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
const KF="ไฟล์ Key 76D: ";
const Co=o=>Object.assign({set:"MDCU76",ro:"RoD",file:"SO76DQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== MEQ 1 ===== */
SA({page:1,orig:"MEQ 1",num:"SA 1",sub:"Other spot",title:"Short answer — motor examination clips",kimg:["os76d_km1"],
 stem:`Short video clips of a motor examination are shown (each 4–6 seconds).<br>For each clip, name the muscle tested and its nerve root:<br>1. Plantar flexion of the ankle<br>2. Abduction of the little finger<br>3. Shoulder abduction`,
 gray:"MEQ 1. ให้คลิปตรวจร่างกาย neuro motor (คลิปละ 4-6 วินาที เปิดวนดูซ้ำเองได้ ให้เวลาแยกข้อย่อย ข้อย่อยละ 1 นาที) บอก muscle, nerve root innervation : plantar flex gastrocnemius?, abductor digiti minimi, deltoid",
 flag:NOIMG+" (คลิปวิดีโอ)",imgAlt:"คลิป 3 คลิป: (1) ผู้ป่วยกดปลายเท้าลงต้านมือผู้ตรวจ (2) กางนิ้วก้อยออกต้านแรง (3) กางไหล่ออกต้านแรง",
 notes:"ไฟล์ Key 76D: plantar flexion = gastrocnemius, S1 · abductor digiti minimi = abduct นิ้วก้อย, T1 · deltoid = arm abduction = C5 (ท่ากาง) — (main root)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("1.1 Ankle plantar flexion.",2,{tags:["spot"],key:KF+"gastrocnemius, S1",ans:"<b>Gastrocnemius–soleus</b> · <b>S1</b> (S1–S2, tibial nerve)",exp:"Ankle reflex = S1",rubric:"ได้",pts:[P("Gastrocnemius","gastrocnem","soleus","triceps surae"),CR(P("S1","s1"))]}),
  B("1.2 Little finger abduction.",2,{tags:["spot"],key:KF+"abductor digiti minimi, T1",ans:"<b>Abductor digiti minimi</b> · <b>T1</b> (C8–T1, ulnar nerve)",exp:"ASIA key muscle ของ T1",rubric:"ได้",pts:[P("Abductor digiti minimi","abductor digiti","adm"),CR(P("T1","t1"))]}),
  B("1.3 Shoulder abduction.",2,{tags:["spot"],key:KF+"deltoid, C5",ans:"<b>Deltoid</b> · <b>C5</b> (axillary nerve)",exp:"C5 ยังเป็น key muscle ของ elbow flexion (biceps) ใน ASIA",rubric:"ได้",pts:[P("Deltoid","deltoid"),CR(P("C5","c5"))]})
 ),
 interp:"Myotomes",
 summary:["C5 deltoid/elbow flexion · C6 wrist extension · T1 ADM","L5 EHL · S1 plantar flexion"]}),

/* ===== MEQ 2 ===== */
SA({page:1,orig:"MEQ 2",num:"SA 2",sub:"Breast",title:"Short answer — mammogram",kimg:["os76d_km2"],
 stem:`A mammogram with images A and B is shown.<br>1. What is this investigation?<br>2. Name views A and B.<br>3. Describe the abnormality.<br>4. Give a provisional diagnosis.<br>5. What further investigation would you send?`,
 gray:"MEQ 2. ให้ Mammogram มา ถามว่าคืออะไร, ให้บอก view ของ A และ B (พวก CC, MLO), อ่านผลความผิดปกติ, provisional diagnosis, ส่ง investigation อะไรอีก",
 flag:NOIMG+" · ผู้จดไม่ได้จดความผิดปกติ — Claude ใส่ตัวอย่างก้อน spiculated ใน imgAlt",imgAlt:"Mammogram สองข้าง: A = craniocaudal (CC) view, B = mediolateral oblique (MLO) view · มีก้อนขอบ spiculated ± microcalcification ที่เต้านมข้างหนึ่ง",
 notes:"ไฟล์ Key 76D: Mediolateral oblique, Craniocaudal (ไม่ได้เขียนสี?) · วาดแบ่ง outer/inner (CC), upper/lower (MLO) · Investigation: ultrasound breast & lymph node ± CNB if suspicious malignancy ± FNA axillary lymph node if suspect malignancy",
 opinion:"ความมั่นใจปานกลาง — ไม่รู้ความผิดปกติจริงในฟิล์ม",
 parts:S(
  B("2.1 Investigation and views.",3,{tags:["spot"],key:KF+"Mammogram · A craniocaudal (CC), B mediolateral oblique (MLO)",ans:"<b>Mammography</b> · A = <b>craniocaudal (CC)</b> view (แบ่ง outer/inner) · B = <b>mediolateral oblique (MLO)</b> view (แบ่ง upper/lower, เห็น pectoralis + axillary tail)",exp:"MLO เห็นเนื้อเต้านมมากที่สุด",rubric:"ได้",pts:[P("Mammogram","mammo"),CR(P("CC view","cc","craniocaud")),CR(P("MLO view","mlo","mediolateral"))]}),
  B("2.2 Abnormality and diagnosis.",3,{tags:["spot"],ans:"บรรยาย: ตำแหน่ง (ข้าง, quadrant, ระยะจาก nipple), <b>mass</b> (รูปร่าง irregular, ขอบ <b>spiculated</b>, density สูง), <b>microcalcification</b> (fine pleomorphic/linear branching), architectural distortion, skin thickening, axillary node · ให้ <b>BI-RADS</b> (เช่น 5) → provisional dx <b>breast carcinoma</b>",exp:"BI-RADS 4–5 ต้อง biopsy",rubric:"ได้",pts:[CR(P("Describe mass/calcification features","spicul","irregular","calcif","mass","ก้อน")),P("BI-RADS category","bi-?rads"),CR(P("Breast carcinoma","carcinoma","cancer","มะเร็ง","malignan"))]}),
  B("2.3 Further investigation.",2,{tags:["spot"],key:KF+"ultrasound breast & lymph node ± CNB ± FNA axillary node",ans:"<b>Ultrasound</b> เต้านมและรักแร้ · <b>core needle biopsy</b> (image-guided) + ER/PR/HER2 · FNA/core ต่อมน้ำเหลืองที่ผิดปกติ",exp:"Spiculated mass + pleomorphic calcification เข้าได้กับ BI-RADS 5 (≥95% malignancy)",rubric:"ได้",pts:[P("Ultrasound","u/?s","ultrasound"),CR(P("Core needle biopsy","core","cnb","biopsy"))]})
 ),
 interp:"Mammogram reading",
 summary:["CC + MLO views","Spiculated mass/pleomorphic calcification → BI-RADS 4–5","US + core biopsy"]}),

/* ===== MEQ 3 ===== */
SA({page:1,orig:"MEQ 3",num:"SA 3",sub:"Uro/Genital",title:"Short answer — man with lower urinary tract symptoms",kimg:["os76d_km3"],
 stem:`A man presents with lower urinary tract symptoms.<br>1. What history would you take?<br>2. How would you assess the severity of his symptoms?<br>3. How would you examine him?`,
 gray:"MEQ 3. ผู้ชายมาด้วยอาการ LUTS, ซักประวัติอะไร, ประเมินความรุนแรงของอาการยังไง, ตรวจร่างกายยังไง",
 notes:"ไฟล์ Key 76D: LUTS — storage symptoms: frequency, urgency, nocturia · voiding symptoms: weak stream, intermittency, straining, emptying incomplete · ประเมินด้วย IPSS · ประวัติอื่น เช่น medication, U/D, trauma, neurogenic condition, urine color: pyuria? hematuria?, associated symptoms e.g. pain · PE: abdomen ดู pain & bimanual palpation + คลำ bladder ดูว่ามี chronic urinary retention? + digital rectal exam ดู neuro (sphincter tone) & ดู prostatic volume/consistency",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("3.1 History.",3,{tags:["spot"],key:KF+"storage: frequency, urgency, nocturia · voiding: weak stream, intermittency, straining, incomplete emptying · medication, U/D, trauma, neurogenic, urine color (pyuria, hematuria), pain",ans:"<b>Storage</b>: frequency, urgency, nocturia, urge incontinence · <b>Voiding</b>: weak stream, hesitancy, intermittency, straining · <b>post-micturition</b>: incomplete emptying, dribbling · <b>red flags</b>: hematuria, dysuria/ไข้, retention, ปวดกระดูก น้ำหนักลด · ยา, DM, neurologic disease, trauma/instrumentation, STD",exp:"แยก storage (OAB) จาก voiding (BOO) ช่วยเลือกยา: antimuscarinic/β3 agonist vs alpha-blocker",rubric:"ได้",pts:[P("Storage symptoms","frequen","urgen","noctur"),P("Voiding symptoms","stream","intermit","strain","hesita"),CR(P("Red flags / hematuria","hematuria","blood","เลือด","red flag")),P("Drugs / comorbid / neuro","drug","ยา","dm","neuro","underlying")]}),
  B("3.2 Severity.",1,{tags:["spot"],key:KF+"IPSS",ans:"<b>International Prostate Symptom Score (IPSS)</b> 7 ข้อ 0–35 + QoL: mild 0–7, moderate 8–19, severe 20–35 · frequency-volume chart",exp:"IPSS ไม่ได้ใช้วินิจฉัย BPH แต่ใช้ประเมินความรุนแรงและติดตามผลการรักษา",rubric:"ได้",pts:[CR(P("IPSS","ipss","prostate symptom score"))]}),
  B("3.3 Examination.",3,{tags:["spot"],key:KF+"abdomen (pain, bimanual, palpable bladder — chronic retention) + DRE (sphincter tone, prostate volume/consistency) + neuro",ans:"<b>Abdomen</b>: คลำ bladder (chronic retention), ไต · <b>external genitalia</b> (meatal stenosis, phimosis) · <b>DRE</b>: prostate size, consistency, nodule, <b>anal tone</b> · <b>focused neuro</b>: perianal sensation, bulbocavernosus reflex",exp:"Bimanual/palpable bladder บ่งชี้ chronic retention → ตรวจ PVR และ creatinine",rubric:"ได้",pts:[P("Palpable bladder","bladder","กระเพาะปัสสาวะ"),CR(P("DRE","dre","rectal","pr")),P("Neuro / sphincter tone","tone","neuro","sensation")]})
 ),
 interp:"LUTS evaluation",
 summary:["Storage vs voiding","IPSS","DRE + bladder + neuro"]}),

/* ===== MEQ 4 ===== */
SA({page:1,orig:"MEQ 4",num:"SA 4",sub:"Imaging film",title:"Short answer — facial bone fracture film",kimg:["os76d_km4"],
 stem:`A radiograph after facial trauma is shown (it appears to show a mandibular fracture).<br>1. What is the diagnosis?<br>2. What is the definitive management?`,
 gray:"MEQ 4. Film skull fracture มา น่าจะ mandible fracture, dx อะไร, definitive management อะไร (ป่ะนะ)",
 flag:NOIMG+" · ผู้จดไม่แน่ใจโจทย์",imgAlt:"Panoramic/skull film: แนวกระดูกหักที่ body และ angle ของ mandible",
 notes:"ไฟล์ Key 76D: Fracture mandible (แปะรูปตำแหน่งหัก: condylar neck, coronoid, ramus, angle, body, parasymphyseal, symphyseal) · บอก location + ข้าง · Management: occlusion & bony reduction ให้ดี · ORIF & intermaxillary fixation within 2 weeks · IV antibiotics cover oral microbes",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): เห็นด้วยกับคีย์ 76D (mandible fracture บอกตำแหน่ง+ข้าง · restore occlusion + bony reduction, ORIF ± intermaxillary fixation ภายใน ~2 สัปดาห์, IV antibiotic คลุมเชื้อในช่องปาก) — สอดคล้องหลัก AO CMF และ Neligan Plastic Surgery 5e: ฟื้น occlusion ก่อน แล้ว ORIF miniplate; condylar fracture ส่วนใหญ่ closed treatment · ความมั่นใจปานกลาง (ผู้จดไม่แน่ใจโจทย์)",
 parts:S(
  B("4.1 Diagnosis.",2,{tags:["spot"],key:KF+"Fracture mandible — บอก location + ข้าง",ans:"<b>Mandibular fracture</b> ระบุ<b>ตำแหน่ง</b> (condyle, ramus, angle, body, parasymphysis, symphysis) และ<b>ข้าง</b> · มักหัก 2 ตำแหน่ง (ring structure) เช่น angle + contralateral body/parasymphysis",exp:"Condyle หักพบบ่อยสุด (ในหลายรายงาน) · ตรวจ malocclusion, numbness ริมฝีปากล่าง (inferior alveolar n.)",rubric:"ได้",pts:[CR(P("Mandible fracture","mandib","ขากรรไกรล่าง")),P("State site and side","angle","body","condyl","symphys","ramus","side","ข้าง")]}),
  B("4.2 Definitive management.",3,{tags:["spot"],key:KF+"occlusion & bony reduction · ORIF & intermaxillary fixation within 2 weeks · IV ATB cover oral microbes",ans:"ABC (airway — bilateral parasymphyseal fracture ลิ้นตกได้) · <b>restore occlusion</b> · <b>open reduction internal fixation (miniplates)</b> ± <b>intermaxillary (maxillomandibular) fixation</b> ภายใน 1–2 สัปดาห์ · <b>antibiotic</b> (penicillin/amoxicillin-clavulanate — open fracture ผ่านช่องปาก) · condylar fracture ส่วนใหญ่ closed treatment",exp:"ตรวจ inferior alveolar nerve (ชาริมฝีปากล่าง) และ malocclusion ทุกราย",rubric:"ได้",pts:[CR(P("Restore occlusion with ORIF/IMF","orif","internal fixation","imf","intermaxillary","maxillomandibular","occlusion")),P("Antibiotics","antibiot","atb","penicillin","amoxi")]})
 ),
 interp:"Mandible fracture",
 summary:["Ring bone → มักหัก 2 จุด","Occlusion คือเป้าหมาย","ORIF ± IMF + ATB"]}),

/* ===== MEQ 5 ===== */
SA({page:1,orig:"MEQ 5",num:"SA 5",sub:"Pediatric surgery",title:"Short answer — child passing red blood per rectum",kimg:["os76d_km5"],
 stem:`A photograph shows a young child's buttocks and diaper with red, jelly-like blood. The child has intermittent crying episodes.<br>1. What is the diagnosis?<br>2. How would you manage this child?`,
 gray:"MEQ 5. รูปก้นเด็กมีเลือดสดสีแดง, dx อะไร, management อะไร",
 flag:NOIMG+" · ผู้จดจดแค่รูปก้นเด็กมีเลือด — เติมอาการร้องเป็นพัก ๆ ใน stem ตามที่คีย์วินิจฉัย intussusception",imgAlt:"รูปก้นเด็กและผ้าอ้อม มีเลือดปนมูกสีแดงคล้ำคล้ายแยมลูกเกด",
 notes:"ไฟล์ Key 76D: ลายมือหน้า 1 วง 5 เขียน Meckel?, intussusception? · หน้า 2 แปะตาราง Differential diagnosis of lower GI bleed in children by age · เขียน ดูรูปแล้วเห็นว่าน่าจะ diag ได้ว่า intussusception · Management: IV hydration & electrolyte correction, NG decompression, Foley catheterization (monitor urine output), antibiotics (ceftriaxone + metronidazole), pneumatic/hydrostatic reduction under U/S/fluoroscopy guidance, surgery if indicated (peritonitis, perforation, non-operative fail, atypical & recurrent presentation)",
 opinion:"ตามเฉลยในไฟล์ (intussusception) ความมั่นใจปานกลาง — ถ้าเลือดสดปริมาณมากไม่ปวด ต้องคิดถึง Meckel diverticulum",
 parts:S(
  B("5.1 Diagnosis.",2,{tags:["spot"],key:KF+"intussusception (Meckel?)",ans:"<b>Intussusception</b> (ileocolic) — currant jelly stool + colicky pain + sausage-shaped mass · DDx: <b>Meckel diverticulum</b> (เลือดสด/คล้ำปริมาณมาก ไม่ปวด), juvenile polyp, anal fissure",exp:"Meckel scan (Tc-99m pertechnetate)",rubric:"ได้ = intussusception (Meckel ได้คะแนนบางส่วน)",pts:[CR(P("Intussusception","intussuscep","ลำไส้กลืน")),P("Meckel diverticulum as DDx","meckel")]}),
  B("5.2 Management.",4,{tags:["spot"],key:KF+"IV hydration & electrolytes, NG decompression, Foley, ATB (ceftriaxone + metronidazole), pneumatic/hydrostatic reduction under US/fluoroscopy, surgery if indicated",ans:"ยืนยันด้วย <b>ultrasound</b> (target/doughnut sign) · <b>IV fluid</b> แก้ electrolyte · NG decompression · ± ATB · ไม่มี peritonitis/perforation → <b>non-operative reduction</b> (pneumatic/hydrostatic enema ภายใต้ US/fluoroscopy) สำเร็จ ~80–90% · <b>ผ่าตัด</b> เมื่อ peritonitis, perforation, shock, reduction ล้มเหลว, สงสัย pathologic lead point",exp:"Air enema ห้ามเมื่อมี peritonitis, free air หรือ shock",rubric:"ได้",pts:[P("Ultrasound confirmation","u/?s","ultrasound","target","doughnut"),P("Resuscitation","fluid","hydrat","สารน้ำ"),CR(P("Air/hydrostatic enema reduction","pneumatic","hydrostatic","air enema","reduction","enema")),CR(P("Surgery if peritonitis/failure","surgery","ผ่าตัด","laparotomy","peritonit","fail"))]})
 ),
 interp:"Intussusception",
 summary:["6 เดือน–3 ปี: colicky pain, currant jelly, sausage mass","US target sign","Enema reduction → surgery ถ้าล้มเหลว/peritonitis"]}),

/* ===== MEQ 6 ===== */
SA({page:1,orig:"MEQ 6",num:"SA 6",sub:"Imaging film",title:"Short answer — supine and upright abdominal films",
 stem:`Supine and upright abdominal radiographs are shown.<br>1. What films are these and in what positions?<br>2. Describe the abnormality.<br>3. What is the diagnosis?<br>4. How would you manage this patient?`,
 gray:"MEQ 6. ให้ฟิล์ม abdomen supine upright มา ถามว่าฟิล์มอะไร ท่าอะไร อ่านผลความผิดปกติ dx management",
 flag:NOIMG+" · ⚠ ผู้จดไม่ได้จดความผิดปกติ และไฟล์ Key 76D เขียนแค่ ?? — Claude เลือกเป็น small bowel obstruction (ความมั่นใจต่ำ)",imgAlt:"AXR supine และ upright: ลำไส้เล็กโป่งตรงกลางท้อง เห็น valvulae conniventes · upright มี air-fluid levels หลายระดับ · ไม่มีลมใน colon",
 notes:"ไฟล์ Key 76D วงข้อนี้และเขียน ?? (ไม่มีเฉลย)",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ Key 76D ไม่มีเฉลย (เขียน ??) และผู้จดไม่ได้จดความผิดปกติ — ยืนยันจากแหล่งอ้างอิงไม่ได้ว่าฟิล์มจริงเป็นโรคใด จึงคงตัวอย่าง small bowel obstruction · การรักษา adhesive SBO (NPO, NG decompression, IV fluid, water-soluble contrast, ผ่าตัดเมื่อ strangulation/ไม่ดีขึ้น 72 ชม.) ตรงกับ Bologna/WSES ASBO Guidelines 2017 update (ten Broek 2018) · ความมั่นใจต่ำ",
 parts:S(
  B("6.1 Films and positions.",2,{tags:["spot"],ans:"<b>Plain abdominal radiographs</b>: <b>supine AP</b> (ดูการกระจายของลม ขนาดลำไส้) + <b>upright (erect) AP</b> (ดู air-fluid level, free air) — เป็นส่วนของ acute abdomen series (+ upright CXR)",exp:"ยืนไม่ได้ → left lateral decubitus",rubric:"ได้",pts:[CR(P("Supine and upright abdominal films","supine","upright","erect"))]}),
  B("6.2 Abnormality and diagnosis.",3,{tags:["spot"],ans:"ลำไส้เล็กโป่ง &gt;3 cm ตรงกลาง (valvulae conniventes) · <b>multiple air-fluid levels (step-ladder)</b> · ลมใน colon น้อย → <b>mechanical small bowel obstruction</b> (สาเหตุบ่อย: adhesion, hernia)",exp:"Large bowel obstruction: colon โป่งรอบนอก (haustra) · volvulus: coffee bean",rubric:"ได้",pts:[CR(P("Dilated small bowel with air-fluid levels","dilat","air.?fluid","step","ladder")),CR(P("Small bowel obstruction","obstruct","sbo","อุดตัน"))]}),
  B("6.3 Management.",3,{tags:["spot"],ans:"<b>NPO, NG decompression, IV fluid + electrolyte</b>, Foley · หาสาเหตุ (ตรวจ hernia, ประวัติผ่าตัด, CT) · adhesive SBO ไม่มี strangulation → conservative ± water-soluble contrast · <b>ผ่าตัด</b> เมื่อ strangulation/closed loop/hernia incarcerated/ไม่ดีขึ้น 48–72 ชม.",exp:"Closed-loop obstruction/strangulation: ไข้ HR เร็ว ปวดต่อเนื่อง lactate สูง leukocytosis",rubric:"ได้",pts:[CR(P("NPO, NG, IV fluid","npo","ng","fluid")),P("Find cause / CT","ct","hernia","cause"),CR(P("Surgery if strangulation/fails","surgery","ผ่าตัด","strangul","laparotomy"))]})
 ),
 interp:"Abdominal films",
 summary:["Supine + upright AXR","SBO: central dilated loops + step-ladder","NG decompression; surgery for strangulation"]}),

/* ===== MEQ 7 ===== */
SA({page:1,orig:"MEQ 7",num:"SA 7",sub:"Pediatric surgery",title:"Short answer — 3-week-old with bilious vomiting",
 stem:`A 3-week-old infant has bilious vomiting and abdominal distension. An abdominal radiograph is shown.<br>1. What is the diagnosis?<br>2. How would you manage this infant?`,
 gray:"MEQ 7. ฟิล์ม abdomen ของเด็กอายุ 3 สัปดาห์ อ้วกเป็น bile ท้องอืด ถาม dx, management",
 flag:NOIMG+" · ⚠ ไฟล์ Key 76D เขียนแค่ ?? — Claude ตอบ malrotation with midgut volvulus (ความมั่นใจปานกลาง)",imgAlt:"AXR ทารก: กระเพาะและ duodenum โป่ง ลมส่วนปลายน้อย (gasless/paucity of distal gas)",
 notes:"ไฟล์ Key 76D วงข้อนี้และเขียน ?? (ไม่มีเฉลย)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจปานกลาง (bilious vomiting ในทารกต้องนึกถึง malrotation with volvulus ก่อนเสมอ)",
 parts:S(
  B("7.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Malrotation with midgut volvulus</b> (จนกว่าจะพิสูจน์ได้ว่าไม่ใช่) · DDx: duodenal/jejunal atresia/stenosis, Hirschsprung, meconium ileus",exp:"Malrotation ส่วนใหญ่แสดงอาการในเดือนแรกของชีวิต",rubric:"ได้",pts:[CR(P("Malrotation / midgut volvulus","malrotat","volvulus"))]}),
  B("7.2 Management.",4,{tags:["spot"],ans:"<b>NPO, NG decompression, IV fluid resuscitation</b>, ATB · stable → <b>urgent upper GI contrast study</b> (DJ junction ผิดตำแหน่ง, corkscrew/bird-beak) หรือ Doppler US (whirlpool) · unstable/peritonitis → <b>emergency laparotomy</b> · ผ่าตัด <b>Ladd procedure</b>: detorsion (ทวนเข็ม), แบ่ง Ladd bands, กาง mesentery, appendectomy",exp:"ห้ามรอฟิล์ม/ผลตรวจถ้าเด็ก unstable หรือมี peritonitis — ไปผ่าตัดเลย",rubric:"ได้",pts:[CR(P("Resuscitate + NG decompression","ng","decompress","fluid","npo")),P("Upper GI contrast study","upper gi","ugi","contrast"),CR(P("Ladd procedure","ladd"))]})
 ),
 interp:"Malrotation with volvulus",
 summary:["Bilious vomiting = surgical emergency","UGI study gold standard","Ladd procedure"]}),

/* ===== MEQ 8 ===== */
SA({page:1,orig:"MEQ 8",num:"SA 8",sub:"Imaging film",title:"Short answer — contrast urographic study",kimg:["os76d_km8"],
 stem:`A contrast study of the urinary tract is shown.<br>1. What does the abbreviation of this study stand for?<br>2. Describe the abnormality.<br>3. What is the diagnosis?`,
 gray:"MEQ 8. ให้รูป IVP มา ถามตัวย่อ และชื่อเต็ม อ่านผลความผิดปกติ กับ dx",
 flag:NOIMG+" · ผู้จดไม่ได้จดความผิดปกติ — Claude ใส่ตัวอย่างนิ่วในท่อไตใน imgAlt",imgAlt:"IVP: ไตซ้ายขับสารทึบรังสีช้า มี hydronephrosis และ hydroureter ลงมาจนถึงระดับเงานิ่วทึบรังสีในท่อไตส่วนล่าง ไตขวาปกติ",
 notes:"ไฟล์ Key 76D: IVP = Intravenous pyelogram/urography · ดู kidney size (~3 vertebral bodies), function (enhancement) · ดู filling defect, abnormal calcification ที่ kidney, ureter (upper/middle/lower), bladder · แปะภาพ KUB อธิบายแนว ureter",
 opinion:"ชื่อตามเฉลยในไฟล์ ความมั่นใจสูง · ความผิดปกติไม่รู้ (Claude ใช้ ureteric stone เป็นตัวอย่าง)",
 parts:S(
  B("8.1 Full name.",1,{tags:["spot"],key:KF+"Intravenous pyelogram/urography",ans:"<b>IVP = Intravenous pyelography (intravenous urography, IVU)</b>",exp:"ปัจจุบันถูกแทนด้วย CT urography",rubric:"ได้",pts:[CR(P("Intravenous pyelography/urography","intravenous pyelo","intravenous urogra"))]}),
  B("8.2 Systematic reading and diagnosis.",4,{tags:["spot"],key:KF+"kidney size (~3 vertebral bodies), function (enhancement), filling defect, abnormal calcification ที่ kidney / ureter (upper, middle, lower) / bladder",ans:"Scout film: หา calcification · ไต: <b>ขนาด</b> (~3–3.5 vertebral bodies), รูปร่าง, <b>การขับสาร (function)</b> สองข้าง · pelvicalyceal system: <b>hydronephrosis</b> (blunted calyces), <b>filling defect</b> · ureter: ระดับ obstruction, hydroureter · bladder: filling defect, รูปร่าง · ตัวอย่าง: delayed nephrogram + hydroureteronephrosis ถึงระดับเงานิ่ว → <b>ureteric calculus with obstruction</b> · filling defect ไม่ทึบรังสี → uric acid stone, urothelial tumor, clot",exp:"ห้ามฉีดสารทึบรังสีใน eGFR ต่ำ/แพ้สาร",rubric:"ได้ = อ่านเป็นระบบ + dx",pts:[P("Kidney size and function","size","ขนาด","function","excret"),CR(P("Hydronephrosis / filling defect / obstruction level","hydroneph","filling defect","obstruct","dilat")),CR(P("Diagnosis (e.g. ureteric stone)","stone","calcul","นิ่ว","tumor"))]})
 ),
 interp:"IVP reading",
 summary:["IVP: scout → nephrogram → pyelogram → ureter → bladder","Obstruction: delayed nephrogram + hydroureteronephrosis","CTU แทน IVP ในปัจจุบัน"]}),

/* ===== MEQ 9 ===== */
SA({page:1,orig:"MEQ 9",num:"SA 9",sub:"Other spot",title:"Short answer — inspiratory arrest on palpation, then ultrasound",kimg:["os76d_km9"],
 stem:`A patient has had abdominal pain for 3 days. While the examiner presses under the right costal margin, the patient takes a deep breath and stops inspiring abruptly (photograph).<br>1. What is this sign and its finding?<br>2. What is the anatomical location?<br>An ultrasound is then shown.<br>3. What imaging is this, and what abnormalities are seen?<br>4. What is the diagnosis and management?`,
 gray:"MEQ 9. คนไข้ปวดท้อง 3 วัน ให้คนไข้หายใจลึกๆกดที่ตรงนี้แล้วคนไข้หยุดหายใจ (ให้รูปมา) ถามว่าอาการแสดงนี้คืออะไร ถามว่า finding คืออะไร, anatomy location อะไร, ให้รูป u/s gallstone มา ถามว่าคือ imaging อะไร, เจอความผิดปกติอะไรบ้าง dx อะไร management ยังไง",
 flag:NOIMG,imgAlt:"รูป 1: ผู้ตรวจกดนิ้วใต้ชายโครงขวาขณะผู้ป่วยหายใจเข้า · รูป 2: ultrasound ถุงน้ำดีผนังหนา มีนิ่ว echogenic พร้อม acoustic shadow และน้ำรอบถุงน้ำดี",
 notes:"ไฟล์ Key 76D: Murphy sign — คนไข้หายใจเข้า ⇒ diaphragm ลง, gallbladder ลงมาโดนนิ้วที่กดอยู่ตรง Murphy point · U/S findings in acute cholecystitis: gallbladder distension, gallbladder wall thickening >3 mm, pericholecystic fluid collection, hyperechoic lesion within gallbladder with distal acoustic shadow · ตรวจคีย์ 22 พ.ย. 2026: เดิมคำตอบ ‘wall thickening >3 mm’ ตามคีย์ไฟล์ → แก้เป็น ‘≥4 mm’ (ข้อ 9.2) ตาม Tokyo Guidelines 2018 (TG18, Yokoe et al. JHBPS 2018 CQ5: GB wall thickening ≥4 mm; TG13 ใช้ ≥5 mm)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): เกณฑ์ผนังถุงน้ำดีหนาใน US ใช้ ≥4 mm ตาม TG18 (TG13 ใช้ ≥5 mm) — ถ้าเขียนตัวเลขให้ระบุชื่อแนวทาง · ความมั่นใจสูง",
 parts:S(
  B("9.1 Sign and location.",3,{tags:["spot"],key:KF+"Murphy sign — หายใจเข้า diaphragm ลง GB ลงมาโดนนิ้วที่ Murphy point",ans:"<b>Murphy sign positive</b> — หยุดหายใจเข้าทันทีเพราะเจ็บเมื่อถุงน้ำดีที่อักเสบเลื่อนลงมาชนนิ้วผู้ตรวจ · ตำแหน่ง: <b>Murphy point = จุดตัดของ right midclavicular line (ขอบนอก rectus) กับ right costal margin</b> (tip of 9th costal cartilage) = fundus of gallbladder",exp:"Murphy sign ไม่ควรเป็นบวกด้านซ้าย (ใช้เปรียบเทียบ)",rubric:"ได้",pts:[CR(P("Murphy sign","murphy")),CR(P("Right costal margin / midclavicular / 9th cartilage","costal","midclavicular","9th","rectus","ชายโครง"))]}),
  B("9.2 Ultrasound findings.",2,{tags:["spot"],key:KF+"GB distension, wall thickening >3 mm, pericholecystic fluid, hyperechoic lesion with acoustic shadow",ans:"<b>Ultrasound of the gallbladder</b>: <b>gallstone</b> (hyperechoic + posterior acoustic shadow), <b>wall thickening ≥4 mm</b> (TG18; คีย์ไฟล์เขียน &gt;3 mm), <b>pericholecystic fluid</b>, distended GB, sonographic Murphy sign",exp:"Gallstone: echogenic focus + posterior acoustic shadow + เคลื่อนตามท่า (ยกเว้น impacted)",rubric:"ได้ ≥2",pts:[G("US findings ≥2",2,P("Gallstone with shadow","stone","นิ่ว","shadow"),P("Wall thickening","thick","หนา"),P("Pericholecystic fluid","pericholecystic","fluid"),P("Distension","distend","โป่ง"))]}),
  B("9.3 Diagnosis and management.",3,{tags:["spot"],ans:"<b>Acute calculous cholecystitis</b> · NPO, IV fluid, analgesia, <b>IV antibiotics</b> · <b>early laparoscopic cholecystectomy</b> (ภายใน 72 ชม.–1 สัปดาห์) · เสี่ยงผ่าตัดสูง → percutaneous cholecystostomy",exp:"Tokyo Guidelines 2018 ใช้ local + systemic inflammation + imaging วินิจฉัย",rubric:"ได้",pts:[CR(P("Acute cholecystitis","cholecystitis")),CR(P("Laparoscopic cholecystectomy","cholecystectomy","lc")),P("Antibiotics / supportive","antibiot","npo","fluid")]})
 ),
 interp:"Murphy sign + acute cholecystitis",
 summary:["Murphy sign = inspiratory arrest","US: stone, wall ≥4 mm (TG18), pericholecystic fluid","Early LC"]}),

/* ===== MEQ 10 ===== */
SA({page:1,orig:"MEQ 10",num:"SA 10",sub:"Pediatric surgery",title:"Short answer — newborn abdominal wall defect with a sac",kimg:["os76d_km10"],
 stem:`A photograph of a newborn's abdominal wall defect covered by a sac at the umbilicus is shown.<br>1. What is the diagnosis?<br>2. How does it develop?<br>3. What associated anomalies should you look for?<br>4. What is the initial management?`,
 gray:"MEQ 10. ให้รูป omphalocele, dx, สาเหตุการเกิด, associated anomalies, initial management",
 flag:NOIMG,imgAlt:"ทารกแรกเกิด: ถุงใสคลุมลำไส้และตับยื่นออกจากสะดือ สายสะดือติดที่ถุง",
 notes:"ไฟล์ Key 76D: Omphalocele · failure of organ returning to abdominal cavity after physiological herniation in 1st trimester · associated with chromosomal abnormalities, cardiac and genitourinary abnormality, Beckwith-Wiedemann syndrome · Initial: IV fluid resuscitation, NG decompression, covered the sac with warm saline-soaked gauze and plastic wrap · Surgical: เล็ก → primary closure · ใหญ่ → staged closure (silo sac, daily reduction 7–10 d) → definitive closure",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("10.1 Diagnosis and embryology.",3,{tags:["spot"],key:KF+"Omphalocele · failure of organ returning to abdominal cavity after physiological herniation in 1st trimester",ans:"<b>Omphalocele</b> · เกิดจาก<b>ลำไส้ไม่กลับเข้าช่องท้องหลัง physiologic midgut herniation</b> (สัปดาห์ที่ 6–10) ร่วมกับ lateral body folds ปิดไม่สมบูรณ์ → defect ที่สะดือมีถุงคลุม",exp:"Gastroschisis ต่างจาก omphalocele: ไม่มีถุง อยู่ขวาของสะดือ anomaly น้อย",rubric:"ได้",pts:[CR(P("Omphalocele","omphalocele")),CR(P("Failure of return after physiologic herniation","physiolog","return","กลับ","herniation"))]}),
  B("10.2 Associated anomalies.",2,{tags:["spot"],key:KF+"chromosomal, cardiac, genitourinary, Beckwith-Wiedemann",ans:"<b>Chromosomal</b> (trisomy 13, 18, 21) · <b>cardiac</b> · <b>Beckwith-Wiedemann</b> · pentalogy of Cantrell · GU/cloacal exstrophy · neural tube",exp:"Trisomy 18 และ 13 พบมากในกลุ่ม omphalocele เล็กที่มีแต่ลำไส้",rubric:"ได้ ≥2",pts:[G("≥2 associations",2,P("Chromosomal/trisomy","trisomy","chromosom"),P("Cardiac","cardiac","heart","หัวใจ"),P("Beckwith-Wiedemann","beckwith","bws"),P("GU / Cantrell","genitourin","cantrell","cloaca"))]}),
  B("10.3 Initial management.",3,{tags:["spot"],key:KF+"IV fluid, NG decompression, cover sac with warm saline-soaked gauze + plastic wrap · small → primary closure, large → staged (silo)",ans:"รักษาอุณหภูมิ · <b>คลุมถุงด้วย warm saline gauze + plastic wrap</b> · <b>IV fluid</b> · <b>NG decompression</b> · glucose (BWS) · echo, karyotype · เล็ก → <b>primary closure</b> · ใหญ่ → <b>staged closure</b> (silo) หรือ paint-and-wait",exp:"Silo/staged closure ป้องกัน abdominal compartment syndrome",rubric:"ได้",pts:[CR(P("Cover sac","cover","wrap","คลุม","gauze")),P("IV fluid + NG","fluid","ng","decompress"),P("Primary vs staged closure","primary","staged","silo","paint")]})
 ),
 interp:"Omphalocele",
 summary:["Failure of return of physiologic hernia","Cardiac, chromosomal, BWS","Cover sac → primary or staged closure"]}),

/* ===== MEQ 11 ===== */
SA({page:1,orig:"MEQ 11",num:"SA 11",sub:"Head & neck",title:"Short answer — laceration over the cheek near the zygoma",kimg:["os76d_km11"],
 stem:`A patient has a laceration over the cheek just below the zygomatic arch (the region of the parotid duct), as indicated in the photograph.<br>1. Which structures may be injured?<br>2. How would you examine for these injuries?`,
 gray:"MEQ 11. บาดเจ็บที่ตรงนี้ๆๆๆ วงแก้มแถวๆโหนกแก้ม (parotid duct) จะได้รับผลกระทบอะไรบ้าง ต้องตรวจยังไง",
 flag:NOIMG,imgAlt:"รูปใบหน้าวงตำแหน่งแผลที่แก้มใต้โหนกแก้ม ระหว่าง tragus กับมุมปาก",
 notes:"ไฟล์ Key 76D: Evaluate facial injury ให้ครบ(?) · Facial nerve branch: frontal — ยักคิ้ว · zygomatic — หลับตา · buccal — ยิ้ม ยกมุมปาก · mandibular — กดมุมปากล่าง · cervical · Parotid duct and gland: กดที่ parotid gland แล้วดูว่าน้ำลายออกมาจากที่ไหน (ถ้าปกติจะออกมาที่ buccal mucosa)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("11.1 Structures at risk.",3,{tags:["spot"],key:KF+"facial nerve branches (frontal, zygomatic, buccal, mandibular, cervical) · parotid duct and gland",ans:"<b>Parotid (Stensen) duct</b> — อยู่บนแนว<b>จาก tragus ถึงกลางริมฝีปากบน</b> (กลาง ⅓) · <b>buccal (และ zygomatic) branches of facial nerve</b> · parotid gland · transverse facial vessels",exp:"Duct เปิดที่ buccal mucosa ตรงข้ามฟันกรามบนซี่ที่ 2",rubric:"ได้",pts:[CR(P("Parotid duct","parotid duct","stensen","ท่อน้ำลาย")),CR(P("Facial nerve (buccal/zygomatic) branches","facial","buccal","zygomatic","cn ?7","cn ?vii"))]}),
  B("11.2 Examination.",3,{tags:["spot"],key:KF+"ทดสอบ facial nerve ทุก branch (ยักคิ้ว, หลับตา, ยิ้ม, กดมุมปาก) · กด parotid ดูน้ำลายออกที่ buccal mucosa",ans:"<b>Facial nerve</b> ทุกแขนงก่อนฉีดยาชา: ยักคิ้ว (frontal), หลับตาแน่น (zygomatic), ยิ้ม/ยกริมฝีปากบน/เป่าแก้ม (buccal), เบะปาก (marginal mandibular) · <b>Parotid duct</b>: <b>บีบ parotid gland ดูน้ำลายที่ papilla ใน buccal mucosa</b> (ถ้าออกที่แผล = duct ขาด) · สอด probe/cannula ทาง papilla ดูว่าโผล่ที่แผล · ฉีด methylene blue/saline ทางปากท่อ",exp:"Duct ขาดซ่อมด้วย stent (silastic) · facial nerve ขาดด้าน lateral ต่อ lateral canthus ซ่อม microsurgery ใน 72 ชม.",rubric:"ได้",pts:[CR(P("Test facial nerve branches","eyebrow","คิ้ว","close eye","หลับตา","smile","ยิ้ม","facial")),CR(P("Check saliva at buccal papilla / probe duct","saliva","น้ำลาย","papilla","buccal mucosa","probe","cannul","methylene"))]})
 ),
 interp:"Parotid duct injury",
 summary:["Parotid duct: แนว tragus → กลางริมฝีปากบน","ตรวจ facial nerve ก่อนฉีดยาชา","บีบต่อมดูน้ำลาย/สอด probe"]}),

/* ===== MEQ 12 ===== */
SA({page:1,orig:"MEQ 12",num:"SA 12",sub:"Plastic/Skin/Burn",title:"Short answer — pressure ulcer over the hip",
 stem:`A photograph shows a pressure ulcer over the lateral hip of a bedridden patient.<br>1. In which lying position does this pressure ulcer develop?<br>2. Over which bony prominence is it located?`,
 gray:"MEQ 12. Bedsore จากนอนท่าไหน (lateral), กระดูกอะไร (greater trochanter)",
 flag:NOIMG,imgAlt:"รูปแผลกดทับลึกที่ด้านข้างของสะโพก ผู้ป่วยติดเตียง",
 notes:"ผู้จดให้คำตอบมา: lateral, greater trochanter · ไฟล์ Key 76D วงข้อนี้ ไม่มีเฉลย",
 opinion:"ผู้จดให้คำตอบมา ความมั่นใจสูง",
 parts:S(
  B("12.1 Position and bony prominence.",3,{tags:["spot"],key:"ผู้จด: lateral, greater trochanter",ans:"นอน<b>ตะแคง (lateral decubitus)</b> · กดทับ <b>greater trochanter</b> · (ท่านอนหงาย → sacrum/coccyx, heel, occiput; ท่านั่ง → ischial tuberosity)",exp:"ตะแคง 30° (ไม่ใช่ 90°) ลดแรงกดที่ trochanter",rubric:"ได้",pts:[CR(P("Lateral position","lateral","ตะแคง")),CR(P("Greater trochanter","trochanter"))]}),
  B("12.2 Staging and prevention.",3,{tags:["spot"],flag:"ข้อย่อยนี้ Claude เติม",ans:"NPIAP staging: 1 ผิวแดงไม่ blanch · 2 partial thickness · 3 full thickness ถึง fat · 4 ถึงกล้ามเนื้อ/กระดูก · unstageable/deep tissue injury · ป้องกัน: <b>พลิกตัวทุก 2 ชม.</b>, ที่นอนลม, ดูแลผิวแห้งสะอาด, โภชนาการ · รักษา: debridement, dressing, offloading, flap (เช่น TFL flap สำหรับ trochanteric ulcer)",exp:"Pressure ulcer เกิดได้ภายใน 2 ชั่วโมงของแรงกดต่อเนื่อง",rubric:"ได้",pts:[P("Reposition every 2 hours","2 ?h","2 ชั่วโมง","turn","พลิก"),P("Pressure-relieving mattress / nutrition","mattress","ที่นอน","nutrition","อาหาร"),P("Debridement / flap","debride","flap")]})
 ),
 interp:"Pressure ulcer",
 summary:["Lateral → greater trochanter · supine → sacrum · sitting → ischial tuberosity","Turn q2h, pressure-relieving surface","Stage 3–4 → debridement ± flap"]}),

/* ===== MEQ 13 ===== */
SA({page:1,orig:"MEQ 13",num:"SA 13",sub:"Vascular/Ulcer",title:"Short answer — ankle-brachial index",kimg:["os76d_km13"],
 stem:`A picture showing blood pressure cuffs on both arms and ankles is shown.<br>1. What is this test?<br>2. How is it measured?<br>3. How is it interpreted?`,
 gray:"MEQ 13. จากรูปนี้คืออะไร (ABI) วัดยังไง แปลผลยังไง",
 flag:NOIMG,imgAlt:"ภาพคนมี cuff วัดความดันที่แขนสองข้างและข้อเท้าสองข้าง พร้อม Doppler probe ที่ dorsalis pedis/posterior tibial",
 notes:"ผู้จดให้คำตอบ ABI · ไฟล์ Key 76D: Right ABI = higher right-ankle pressure / higher arm pressure · Left ABI = higher left-ankle pressure / higher arm pressure · interpretation: >1.30 noncompressible (may be from abnormal calcification), 0.91–1.30 normal, 0.41–0.90 mild-to-moderate PAD, 0.00–0.40 severe PAD · ตรวจคีย์ 22 พ.ย. 2026: เดิมคำตอบ ‘&gt;1.30–1.40 non-compressible’ → แก้เป็น ‘&gt;1.40’ (คีย์ไฟล์เดิม &gt;1.30 ยังแสดงในช่องคีย์) ตาม 2016 AHA/ACC Lower Extremity PAD guideline (ยืนยันใน 2024 ACC/AHA PAD guideline): ABI ≤0.90 abnormal (PAD), 0.91–0.99 borderline, 1.00–1.40 normal, &gt;1.40 non-compressible",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): จุดตัด non-compressible ตามแนวทาง AHA/ACC ปัจจุบัน = &gt;1.40 (ไม่ใช่ 1.30) · ความมั่นใจสูง",
 parts:S(
  B("13.1 Test and measurement.",3,{tags:["spot"],key:KF+"ABI = higher ankle pressure / higher arm pressure (แต่ละข้าง)",ans:"<b>Ankle-brachial index (ABI)</b> · นอนพัก 5–10 นาที · ใช้ <b>handheld Doppler</b> วัด systolic pressure ที่ <b>brachial ทั้งสองข้าง</b> และ <b>dorsalis pedis + posterior tibial</b> ทั้งสองข้าง · ABI ข้างนั้น = <b>systolic สูงสุดของข้อเท้าข้างนั้น ÷ systolic สูงสุดของแขน (สองข้าง)</b>",exp:"ABI วัดหลังพัก ≥5–10 นาทีในท่านอนหงาย",rubric:"ได้",pts:[CR(P("ABI","abi","ankle.?brachial")),P("Doppler at brachial, DP, PT","doppler","dorsalis","tibial","brachial"),CR(P("Ankle ÷ higher arm pressure","higher","ankle.*arm","หาร","divid"))]}),
  B("13.2 Interpretation.",3,{tags:["spot"],key:KF+">1.30 noncompressible · 0.91–1.30 normal · 0.41–0.90 mild–moderate PAD · ≤0.40 severe PAD",ans:"<b>&gt;1.40</b> non-compressible (คีย์ไฟล์/ตำราเก่าใช้ &gt;1.30) (calcified vessels — DM, CKD → ใช้ toe-brachial index) · <b>1.00–1.40</b> normal (0.91–0.99 borderline) · <b>≤0.90</b> = <b>PAD</b> · 0.41–0.90 mild–moderate · <b>≤0.40</b> severe (CLTI)",exp:"ABI ≤0.9 ยังบ่งบอก cardiovascular risk สูง",rubric:"ได้",pts:[CR(P("≤0.9 = PAD","0\\.9","pad")),P("≤0.4 severe","0\\.4","severe"),P(">1.40 non-compressible","1\\.3","1\\.4","non.?compress","calcif")]})
 ),
 interp:"ABI",
 summary:["ABI = ankle SBP / higher arm SBP","≤0.9 PAD · ≤0.4 severe · >1.40 non-compressible"]}),

/* ===== MEQ 14 ===== */
SA({page:1,orig:"MEQ 14",num:"SA 14",sub:"Other spot",title:"Short answer — colonoscopy and a sessile polyp",kimg:["os76d_km14"],
 stem:`An endoscopic picture is shown.<br>1. What procedure is this?<br>2. Give 3 indications for it.<br>A picture of a sessile polyp that is removed to reduce cancer risk is then shown.<br>3. What is the likely pathology of this lesion?`,
 gray:"MEQ 14. รูปนี้คืออะไร (colonoscopy) บอก indication ในการทำมา 3 ข้อ ให้รูป sessile polyp มาบอกว่าตัดเพื่อลดโอกาสเป็นมะเร็งแล้วถามว่าไอ้ก้อนนี้มีแนวโน้มพยาธิสภาพเป็นอะไร",
 flag:NOIMG,imgAlt:"ภาพส่องกล้องลำไส้ใหญ่ เห็นติ่งเนื้อฐานกว้างไม่มีก้าน (sessile) บนผนังลำไส้",
 notes:"ผู้จดให้คำตอบ colonoscopy · ไฟล์ Key 76D: Indication of colonoscope — screening for colon cancer in patients >45 yr, family history of colon cancer, inflammatory bowel disease, symptomatic e.g. anemia, bowel habit change · surveillance after colon cancer surgery · (ไม่ได้ตอบพยาธิสภาพ)",
 opinion:"indication ตามเฉลยในไฟล์ ความมั่นใจสูง · พยาธิสภาพ Claude ตอบเอง ความมั่นใจปานกลาง",
 parts:S(
  B("14.1 Procedure and indications.",4,{tags:["spot"],key:KF+"Colonoscopy · screening >45 ปี, family history CRC, IBD, symptomatic (anemia, bowel habit change), surveillance after CRC surgery",ans:"<b>Colonoscopy</b> · ข้อบ่งชี้: <b>CRC screening</b> (อายุ ≥45 ปี, ประวัติครอบครัว, FIT บวก) · <b>อาการ</b>: lower GI bleeding, iron deficiency anemia, เปลี่ยนนิสัยการขับถ่าย, น้ำหนักลด · <b>surveillance</b> หลังตัด polyp/CRC, IBD นาน · <b>therapeutic</b>: polypectomy, หยุดเลือด, detorsion sigmoid volvulus, stent",exp:"USMSTF แนะนำเริ่ม screening อายุ 45 ปีในกลุ่มความเสี่ยงทั่วไป",rubric:"ได้ ≥3",pts:[CR(P("Colonoscopy","colonoscop")),G("≥3 indications",3,P("Screening","screen","คัดกรอง","fit"),P("Bleeding / anemia","bleed","เลือด","anemia"),P("Bowel habit change","habit","ขับถ่าย"),P("Surveillance after polyp/CRC","surveil","ติดตาม","follow"),P("IBD","ibd","ulcerative","crohn"),P("Therapeutic","polypectomy","therapeutic","volvulus"))]}),
  B("14.2 Likely pathology of the sessile polyp.",2,{tags:["spot"],flag:"ไฟล์ Key 76D ไม่ได้ตอบส่วนนี้",ans:"<b>Adenomatous polyp</b> — sessile ขนาดใหญ่มักเป็น <b>villous/tubulovillous adenoma</b> (เสี่ยงมะเร็งสูงสุด) หรือ <b>sessile serrated lesion</b> (มักอยู่ right colon) — เป็น precursor ของ adenocarcinoma (adenoma–carcinoma sequence)",exp:"ตัดออก (EMR/ESD) ลดอุบัติการณ์และการตายจาก CRC",rubric:"ได้",pts:[CR(P("Adenoma (villous/tubulovillous) or sessile serrated lesion","adenoma","villous","serrated"))]})
 ),
 interp:"Colonoscopy + adenoma",
 summary:["Screening ≥45 ปี","Villous adenoma เสี่ยงมะเร็งสูงสุด","SSL: right colon, flat"]}),

/* ===== OSCE 1 ===== */
Co({page:2,orig:"1",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — ingestion of a toilet-bowl cleaner",kimg:["os76d_ko1"],
 stem:`A patient ingested a toilet-bowl cleaner 30 minutes before arrival. A photograph of the product and its composition (hydrochloric acid) is shown. Symptoms are mild and vital signs and examination are stable.<br>1. What is the most appropriate management?`,
 gray:"OSCE 1. กิน Vixol 30 min PTA (ให้รูป + สารประกอบมาด้วย), อาการ และ ตรวจร่างกาย stable ทุกอย่าง, management อะไรดี",
 flag:NOIMG,imgAlt:"รูปขวดน้ำยาล้างห้องน้ำ ฉลากระบุส่วนประกอบ hydrochloric acid",
 notes:"ไฟล์ Key 76D: corrosive ingestion (กรด) → eschar @ esophagus + stomach necrosis ได้ (very early) · ABC primary survey: airway → ET ถ้าเสียงแหบ stridor น้ำลายไหล · NPO, no NG lavage? · endoscope (12–24 h) for severity grading · CXR/abd → sign of esophageal perforation or necrosis · IV fluid + ATB · stricture surveillance",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง (ATB ไม่ต้องให้ทุกราย — ให้เมื่อสงสัย perforation/ติดเชื้อ)",
 parts:S(
  B("1.1 Management of caustic (acid) ingestion.",8,{tags:["img"],key:KF+"ABC (airway → ET ถ้า stridor/hoarseness/drooling), NPO, no NG/lavage, endoscopy 12–24 h for grading, CXR/AXR for perforation, IV fluid ± ATB, stricture surveillance",
   ans:"<b>ABC</b> — ประเมิน airway (เสียงแหบ stridor น้ำลายไหล → intubate ด้วยการส่องตรง) · <b>NPO</b>, <b>IV fluid</b>, analgesia, PPI · <b>ห้าม</b>: ทำให้อาเจียน, ใส่ NG ล้างท้อง, ให้สารทำให้เป็นกลาง, activated charcoal · <b>CXR/upright AXR</b> (± CT) หา perforation (free air, mediastinitis) · <b>EGD ภายใน 12–24 ชม.</b> (ไม่เกิน 48 ชม.) แบ่ง Zargar grade → วางแผนให้อาหาร/ผ่าตัด · มีอาการ perforation/necrosis (grade 3b) → ผ่าตัด (esophagogastrectomy) · ติดตาม <b>stricture</b> (2–8 สัปดาห์) และความเสี่ยงมะเร็งระยะยาว",
   exp:"กรด → coagulation necrosis มักทำลาย stomach (antrum) มากกว่า; ด่าง → liquefaction necrosis ทำลาย esophagus ลึก",rubric:"แบ่งตามหัวข้อ",
   pts:[H("Resuscitation",30),CR(P("Airway assessment / ABC","airway","abc","intubat")),P("NPO + IV fluid","npo","งด","fluid"),H("Avoid",20),CR(P("No emesis, NG lavage, neutralization","no ng","ห้าม","emesis","อาเจียน","neutral","lavage")),H("Investigation",50),P("CXR/AXR for perforation","cxr","x-?ray","perforat","free air"),CR(P("Early endoscopy 12–24 h","endoscop","egd","12","24")),P("Stricture follow-up","stricture","ตีบ","follow")]})
 ),
 interp:"Caustic ingestion",
 summary:["ห้ามทำให้อาเจียน/ล้างท้อง/ทำให้เป็นกลาง","EGD 12–24 ชม. (Zargar)","Perforation → surgery · stricture ระยะยาว"]}),

/* ===== OSCE 2 ===== */
Co({page:2,orig:"2",topic:"hx",sub:"Abdominal pain",ex:1,title:"History taking — abdominal pain for 6 hours",kimg:["os76d_ko2"],
 stem:`A patient presents with abdominal pain that began 6 hours ago. The examiner is observing. Take a history and give your provisional diagnosis.`,
 gray:"OSCE 2. (อาจารย์คุม) ซักประวัติ วินิจฉัย คนไข้มาด้วยปวดท้อง 6 ชม.ก่อน acute appendicitis",
 sp:"ผู้ป่วยชาย 20 ปี · ปวดท้อง 6 ชม. เริ่มปวดตื้อ ๆ รอบสะดือ แล้วย้ายมาปวดท้องน้อยขวา ปวดตลอด ขยับ/ไอแล้วปวดมากขึ้น · เบื่ออาหาร คลื่นไส้ อาเจียน 1 ครั้งหลังเริ่มปวด · ไข้ต่ำ · ถ่ายปกติ ไม่มีถ่ายเหลว · ปัสสาวะปกติ ไม่แสบขัด ไม่มีเลือด · ไม่เคยเป็น · ไม่มีโรคประจำตัว ไม่แพ้ยา ไม่เคยผ่าตัด · (ถ้าผู้หญิง: ประจำเดือนปกติ ไม่มีตกขาว ไม่ได้ตั้งครรภ์)",
 notes:"ผู้จดให้คำตอบ acute appendicitis · ไฟล์ Key 76D: LODPCRAFT + specific signs: psoas, obturator, rovsing (แปะรูป rebound tenderness, Rovsing, psoas, obturator)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("2.1 History and diagnosis.",10,{tags:["hx"],key:KF+"LODPCRAFT + specific signs (psoas, obturator, Rovsing)",
   ans:"แนะนำตัว ยืนยันตัวตน · <b>ปวด: LODPCRAFT</b> — Location (เริ่มรอบสะดือ → <b>ย้ายมา RLQ</b>), Onset, Duration, Progression, Character, Radiation, Associated, Factors (ขยับ/ไอแล้วปวด), Timing · <b>อาการร่วม</b>: <b>anorexia</b>, คลื่นไส้อาเจียน (หลังปวด), ไข้ · แยกโรคอื่น: ถ่ายเหลว (gastroenteritis), ปัสสาวะแสบ/เลือด (UTI/นิ่ว), ปวดร้าวหลัง, <b>ผู้หญิง — ประจำเดือนล่าสุด ตกขาว ตั้งครรภ์ (ectopic, ovarian torsion, PID)</b> · PMH, ยา, แพ้ยา, ผ่าตัดเดิม · สรุป: <b>acute appendicitis</b> + บอกการตรวจร่างกายที่จะทำ (McBurney, Rovsing, psoas, obturator)",
   exp:"Alvarado score: migration, anorexia, nausea/vomiting, RLQ tenderness, rebound, fever, leukocytosis, shift to left",rubric:"แบ่งตามหัวข้อ",
   pts:[H("Pain characteristics",40),CR(P("Migration periumbilical to RLQ","migrat","ย้าย","periumbil","รอบสะดือ","rlq","ขวาล่าง")),P("Aggravating with movement/cough","movement","ขยับ","cough","ไอ"),H("Associated symptoms",25),CR(P("Anorexia, nausea/vomiting, fever","anorexia","เบื่ออาหาร","nausea","vomit","อาเจียน","fever","ไข้")),H("Differentials",25),P("Urinary / bowel symptoms","urin","ปัสสาวะ","diarr","ถ่าย"),P("LMP / pregnancy / gynecologic in females","lmp","ประจำเดือน","pregnan","ตั้งครรภ์","gyn"),H("Conclusion",10),CR(P("Provisional dx acute appendicitis","appendicitis","ไส้ติ่ง"))]})
 ),
 interp:"Acute appendicitis history",
 summary:["Migratory pain → RLQ + anorexia + N/V + fever","ผู้หญิงต้องถาม LMP/ตั้งครรภ์","Alvarado score"]}),

/* ===== OSCE 3 ===== */
Co({page:2,orig:"3",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Procedure — sterile gloving and local anesthetic injection",
 stem:`The examiner is observing.<br>1. Put on sterile gloves.<br>2. Demonstrate local anesthetic injection on the model.`,
 gray:"OSCE 3. (อาจารย์คุม) ใส่ถุงมือ sterile + แสดงการฉีดยาชา",
 sp:"หุ่นแผล · ถุงมือ sterile · syringe, เข็ม 18G/24G, 1% lidocaine (± adrenaline), toothed forceps · ผู้คุมดู: เปิดซองถุงมือไม่ปนเปื้อน, open-glove technique, ตรวจชื่อยา/ความเข้มข้น/วันหมดอายุ (ให้ผู้ช่วยถือขวด), ดูดยาเข็มใหญ่ เปลี่ยนเข็มเล็ก, ไล่อากาศ, แทงที่ขอบแผล/ผิวหนังปกติ, aspirate ก่อนฉีด, ฉีดช้า, ทดสอบชา, ทิ้งเข็มใน sharps box, บอก max dose",
 notes:"ไฟล์ Key 76D วงข้อนี้ ไม่มีเฉลย · ตรวจคีย์ 22 พ.ย. 2026: เดิม exp ‘ห้าม adrenaline ใน end-artery … ปัจจุบันใช้ได้อย่างระวังในนิ้ว’ → แก้เป็น ใช้ได้ที่นิ้ว/จมูก/หูถ้าไม่มี vascular compromise ตาม AAFP 2017 (Laceration Repair: A Practical Approach, Am Fam Physician 2017;95:628 — epinephrine ≤1:100,000 ปลอดภัยในนิ้วถ้าไม่มี vascular compromise; 1:200,000 ที่จมูกและหู; peripheral vascular compromise = ข้อห้าม)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): Adrenaline ในนิ้ว/จมูก/หูไม่ใช่ข้อห้ามแล้ว (AAFP 2017) — ข้อห้ามจริงคือ peripheral vascular compromise; องคชาตยังนิยมเลี่ยง (ข้อมูลน้อย) · ถ้าข้อสอบถาม precaution ให้ตอบทั้งตำราเดิมและแนวทางปัจจุบัน · ความมั่นใจสูง",
 parts:S(
  B("3.1 Sterile gloving.",3,{tags:["proc"],ans:"ล้างมือ · เปิดห่อถุงมือบนพื้นสะอาด · หยิบข้างแรกที่<b>ด้านในของขอบพับ</b> · มือที่ใส่ถุงมือ<b>สอดใต้ขอบพับ</b>ของอีกข้าง · พลิกขอบ · มืออยู่เหนือเอว ไม่แตะสิ่งไม่ sterile",exp:"ใส่ถุงมือแล้วถ้าแตะของไม่ sterile ต้องเปลี่ยนใหม่ทันที",rubric:"ได้",pts:[CR(P("Open-glove no-touch technique","cuff","ขอบพับ","inside","under","ใต้","ด้านใน")),P("Hands above waist","waist","เอว")]}),
  B("3.2 Local anesthetic injection.",7,{tags:["proc"],ans:"<b>ตรวจยา</b> (ชื่อ ความเข้มข้น วันหมดอายุ) · ดูดด้วยเข็ม 18G → <b>เปลี่ยนเป็น 24–27G</b> · <b>ไล่อากาศ</b> · antiseptic ผิว · แทงผ่าน<b>ขอบแผล/ผิวหนัง</b> · <b>aspirate ก่อนฉีด</b> ทุกครั้งที่ขยับเข็ม · ฉีดช้า ๆ ขณะถอยเข็ม (field block รอบแผล) · รอ 3–5 นาที <b>ทดสอบชา</b> · ทิ้งเข็ม · <b>max dose</b> lidocaine 4.5 mg/kg (7 mg/kg with adrenaline)",exp:"Adrenaline (1:100,000–1:200,000) ใช้ที่นิ้ว ใบหู จมูก ได้ถ้าไม่มี peripheral vascular compromise (AAFP 2017) — ตำราเดิมห้ามใน end-artery (นิ้ว ใบหู จมูก องคชาต); องคชาตยังนิยมเลี่ยง",rubric:"แบ่งตามขั้น",
   pts:[P("Check drug","check","ตรวจ","expir"),P("Change to small needle","change","เปลี่ยนเข็ม","24","25","27"),CR(P("Expel air","air","อากาศ","expel")),CR(P("Aspirate before injecting","aspirat","ดูดกลับ")),P("Test anesthesia","test","ทดสอบ","forceps"),P("Max dose","4.5","7 mg","max")]})
 ),
 interp:"Sterile gloving + local anesthesia",
 summary:["Open-glove technique","Aspirate ก่อนฉีด","Lidocaine 4.5 mg/kg (7 with adrenaline)"]}),

/* ===== OSCE 4 ===== */
Co({page:2,orig:"4",topic:"inst",sub:"Tube/Catheter",title:"Device — three-way urinary catheter",kimg:["os76d_ko4"],
 stem:`A real catheter is shown.<br>1. What is it, and what is its size (read from the catheter)?<br>2. How is it used?<br>3. Give an example of when it is used.`,
 gray:"OSCE 4. ให้ดู 3 way catheter ของจริง ถามว่าคืออะไร + ถามขนาด (ดูที่สาย), จงบอกวิธีการใช้, ยกตัวอย่างว่าใช้กรณีไหน",
 flag:NOIMG,imgAlt:"สายสวนปัสสาวะขนาดใหญ่ มีช่อง 3 ช่องที่ท้ายสาย (drainage, balloon, irrigation) ระบุขนาดเป็น Fr ที่ท้ายสาย",
 notes:"ไฟล์ Key 76D: 3-way catheter · indication continuous bladder irrigation · ex. prevent urinary tract obstruction from blood clot in patient presenting with hematuria · not for stop bleed · ถ้าเอา clot ออกตอน first present ⇒ 2-way catheter",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 Name and size.",2,{tags:["inst"],key:KF+"3-way catheter",ans:"<b>Three-way Foley catheter</b> — 3 ช่อง: <b>drainage</b>, <b>balloon inflation</b>, <b>irrigation inflow</b> · ขนาดเป็น <b>French (Fr/Ch)</b> อ่านที่ท้ายสาย มักใหญ่ <b>20–24 Fr</b> และ balloon 30 mL",exp:"ใส่สายจนสุดก่อนเติม balloon เพื่อไม่ให้ balloon พองใน prostatic urethra",rubric:"ได้",pts:[CR(P("Three-way catheter","3.?way","three.?way")),P("Size in French","fr","french","ch")]}),
  B("4.2 How to use and indication.",5,{tags:["inst"],key:KF+"continuous bladder irrigation · prevent obstruction from clot in hematuria · not for stopping bleeding · ถ้าเอา clot ออกตอนแรกใช้ 2-way",ans:"ใส่เหมือน Foley (sterile, jelly, ใส่สุดสายก่อนเติม balloon) · ต่อ<b>ช่อง irrigation กับ NSS</b> ไหลเข้าต่อเนื่อง และช่อง drainage ลงถุง · ปรับอัตราให้ปัสสาวะสีชมพูอ่อน · <b>บันทึก input–output</b> (urine จริง = output − irrigation) · ข้อบ่งชี้: <b>continuous bladder irrigation</b> ป้องกัน<b>clot retention</b> ใน <b>gross hematuria</b> เช่น หลัง <b>TURP/TURBT</b>, hemorrhagic cystitis · ไม่ใช่การหยุดเลือด · clot retention ที่มีอยู่ → ใส่สายใหญ่ล้างดูด clot ก่อน",exp:"ถ้าสายอุดตัน ปวดท้องน้อย → ล้างด้วย syringe (manual irrigation)",rubric:"ได้",pts:[CR(P("Continuous bladder irrigation","irrigat","ล้าง","cbi")),P("Prevent clot retention in hematuria","clot","ลิ่มเลือด","hematuria","เลือด"),P("After TURP / TURBT","turp","turbt","prostat"),P("Monitor input–output","output","input","บันทึก")]})
 ),
 interp:"Three-way catheter",
 summary:["3 ช่อง: drainage, balloon, irrigation","CBI หลัง TURP/hematuria ป้องกัน clot retention","Urine output = drainage − irrigation"]}),

/* ===== OSCE 5 ===== */
Co({page:2,orig:"5",topic:"inst",sub:"Drain",title:"Devices — drain and retention sutures after abdominal wound dehiscence",img:["os76d_o5"],kimg:["os76d_ko5"],
 stem:`A photograph shows an abdomen after re-closure of a dehisced wound, with a drain (A) and retention sutures through red rubber tubing. Items A and B are also displayed.<br>1. What is A, how does it work, and give an example of its use?<br>2. What is this type of closure called?<br>3. What is B made of?`,
 gray:"OSCE 5. ให้รูปคนไข้ท้องปริ มี drain (A) + มี retention suture (ใช้ยางสีแดง) ปิดหน้าท้องไว้ และมี A, B ของจริงวางไว้ ถามว่า A คืออะไร, ทำงานยังไง, ยกตัวอย่างการใช้ B ทำมาจากอะไร A = Penrose drain, หลักการเป็นยังไง, ยกตัวอย่างสถานการณ์ที่ใช้, นี่คือการเย็บอะไร, B = one-way catheter [รูป คล้ายๆงี้]",
 flag:"รูปในไฟล์เป็นรูปที่ผู้จดหามา (\"คล้ายๆงี้\")",
 notes:"ผู้จดให้คำตอบ: A = Penrose drain, B = one-way catheter (ยางสีแดง) · ไฟล์ Key 76D: สิ่งที่ใช้บ่อยกว่าคือ Jackson-Pratt drain = closed active drain (ระบาย + suction) ใช้บ่อยใน post-op fluid collection drain, abdominal surgery, thoracic surgery · Penrose drain = open passive drain (no negative pressure) ใช้บ่อยสำหรับ drain ของเหลวออกจาก surgical site · แปะรูป JP drain, Penrose drain",
 opinion:"เห็นด้วยกับคำตอบของผู้จดและเฉลยในไฟล์ ความมั่นใจปานกลาง (ไม่เห็นของจริง)",
 parts:S(
  B("5.1 Drain A.",4,{tags:["inst"],key:KF+"Penrose drain = open passive drain (no negative pressure), drain fluid from surgical site · (JP = closed active drain)",ans:"<b>Penrose drain</b> — ท่อยางนิ่มแบน <b>open passive drain</b> ระบายด้วย <b>capillary action + gravity</b> (ไม่มีแรงดูด) ลงผ้าก๊อซ/ถุง · ใช้: ระบายหนอง/เลือด/สารคัดหลั่งจากแผลติดเชื้อ, ช่องฝี, superficial wound, ปัจจุบันใช้น้อยลงเพราะเชื้อเข้าได้ · เทียบ <b>Jackson-Pratt/Radivac</b> = closed active suction drain",exp:"ต้องเย็บ/กลัด safety pin กันหลุดเข้าแผล",rubric:"ได้",pts:[CR(P("Penrose drain","penrose")),CR(P("Passive drain by gravity/capillary action","passive","capillary","gravity","ไม่มีแรงดูด","no suction")),P("Example of use","abscess","ฝี","pus","wound","infect")]}),
  B("5.2 Closure technique.",2,{tags:["inst"],ans:"<b>Retention (tension) sutures</b> — เย็บ through-and-through ผนังหน้าท้องทุกชั้น ร้อยผ่านท่อยาง (bolster) กันไหมบาดผิว · ใช้ในการปิด <b>burst abdomen/fascial dehiscence</b> หรือแผลตึงสูง",exp:"ปัจจุบัน: เย็บ fascia ด้วย small-bite continuous ลด dehiscence · ถ้าปิดไม่ได้ → temporary abdominal closure (VAC)",rubric:"ได้",pts:[CR(P("Retention / tension sutures","retention","tension suture"))]}),
  B("5.3 Material of B.",2,{tags:["inst"],key:"ผู้จด: B = one-way catheter (ยางสีแดง)",ans:"B = <b>red rubber (Nelaton) catheter</b> — ทำจาก <b>latex rubber</b> ใช้ตัดเป็นท่อ bolster รองไหม retention suture (หรือสวนปัสสาวะครั้งเดียว)",exp:"ระวังผู้แพ้ latex",rubric:"ได้",pts:[CR(P("Red rubber latex (Nelaton) catheter","rubber","latex","nelaton","ยาง"))]})
 ),
 interp:"Drains and retention sutures",
 summary:["Penrose = open passive · JP/Radivac = closed active","Retention sutures สำหรับ burst abdomen","Red rubber = latex"]}),

/* ===== OSCE 6 ===== */
Co({page:2,orig:"6",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — painful red perianal lump",kimg:["os76d_ko6"],
 stem:`A photograph of the anus shows a tender, bluish-red perianal lump.<br>1. What is the diagnosis?<br>2. How would you manage it?`,
 gray:"OSCE 6. รูปรูก้น มีก้อนนูนแดงเจ็บอะไรบางอย่างอยู่ dx และ management",
 flag:NOIMG+" · ไฟล์เฉลยไม่แน่ใจ (Thrombosed? External? Hemorrhoid?) และไม่รู้ระยะเวลาที่เป็น",imgAlt:"รูปรอบทวาร: ก้อนกลมสีม่วงแดงตึงที่ขอบทวาร (anal verge)",
 notes:"ไฟล์ Key 76D: Thrombosed? External? Hemorrhoid? · excision of blood clot (very early) · hemorrhoidectomy, no RBL · + lifestyle modification (fiber, water, exercise, toilet habit) + stool softener & analgesics",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): เห็นด้วยกับคีย์ 76D (thrombosed external hemorrhoid · excision ในช่วงแรก · ไม่ทำ RBL · lifestyle + stool softener + analgesic) — ASCRS Hemorrhoid CPG 2024 และ Khan & Kanters (Clin Colon Rectal Surg 2024): มาภายใน ~72 ชม. ปวดมาก → excision (ดีกว่า incision เอาลิ่มเลือด); หลัง 72 ชม. conservative; RBL ใช้กับ internal hemorrhoid เท่านั้น · DDx perianal abscess · ความมั่นใจปานกลาง (ไม่เห็นรูปจริง/ไม่ทราบระยะเวลา)",
 parts:S(
  B("6.1 Diagnosis.",2,{tags:["img"],key:KF+"Thrombosed external hemorrhoid?",ans:"<b>Thrombosed external hemorrhoid</b> (perianal hematoma) — ก้อนสีม่วงคล้ำตึง เจ็บเฉียบพลันที่ขอบทวาร · DDx: perianal abscess (แดงร้อนนุ่ม ไข้), prolapsed/strangulated internal hemorrhoid",exp:"External hemorrhoid อยู่ใต้ dentate line ปกคลุมด้วย anoderm ที่มีประสาทรับความเจ็บ",rubric:"ได้",pts:[CR(P("Thrombosed external hemorrhoid","thrombos","external hemorrhoid","perianal hematoma","ริดสีดวง"))]}),
  B("6.2 Management.",4,{tags:["img"],key:KF+"excision of clot (very early), no RBL, lifestyle modification, stool softener & analgesics",ans:"<b>มาภายใน 72 ชม.</b> ปวดมาก → <b>excision ของ thrombosed hemorrhoid</b> (ดีกว่า incision เอาลิ่มเลือดออกเพราะ recurrence น้อยกว่า) ใต้ยาชา · <b>&gt;72 ชม.</b>/อาการดีขึ้น → <b>conservative</b>: sitz bath, analgesics, <b>stool softener, fiber, น้ำ</b>, topical · <b>ห้ามทำ rubber band ligation</b> กับ external hemorrhoid (มีเส้นประสาทรับความรู้สึก)",exp:"Excision ดีกว่า incision เอาลิ่มเลือดออก เพราะ recurrence น้อยกว่า",rubric:"ได้",pts:[CR(P("Excision within 72 h","excis","ตัด","72")),P("Conservative after 72 h","conservat","sitz","analges","softener","fiber"),P("No rubber band ligation","no rbl","ห้าม","rubber band")]})
 ),
 interp:"Thrombosed external hemorrhoid",
 summary:["<72 ชม. → excision","หลังนั้น → conservative","ไม่ RBL external hemorrhoid"]}),

/* ===== OSCE 7 ===== */
Co({page:2,orig:"7",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — operative field with a Babcock clamp",kimg:["os76d_ko7"],
 stem:`An operative photograph shows a Babcock clamp holding an inflamed tubular structure delivered through a right lower quadrant incision.<br>1. What is the diagnosis?<br>2. What operation is this?<br>3. Write the post-operative orders.`,
 gray:"OSCE 7. ให้รูป ฟีลด์ผ่าตัดมา มี Babcock clamp คีบอะไรบางอย่างอยู่, วินิจฉัย, นี่คือการผ่าอะไร, post-op order (รูป appendix)",
 flag:NOIMG,imgAlt:"รูปผ่าตัดแผลท้องน้อยขวา Babcock clamp คีบไส้ติ่งบวมแดงที่ดึงออกมานอกแผล",
 notes:"ผู้จดบอกว่าเป็นรูป appendix · ไฟล์ Key 76D: open appendectomy? · Babcock = สำหรับคีบ viscera แบบ atraumatic · Post-op order: if uncomplicated → ไม่ต้องให้ต่อ or ให้แค่ pre-op 24 h · complicated: IV ceftriaxone 1–2 g q12–24h + IV metronidazole 500 mg q8h",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("7.1 Diagnosis and operation.",3,{tags:["img"],key:KF+"open appendectomy · Babcock = atraumatic clamp for viscera",ans:"<b>Acute appendicitis</b> · ผ่าตัด <b>open appendectomy</b> (แผล McBurney/Rocky-Davis) — Babcock clamp ใช้จับ appendix แบบ atraumatic",exp:"Babcock มีปลายเป็นวงกลมไม่มีเขี้ยว ใช้จับอวัยวะที่บอบบาง",rubric:"ได้",pts:[CR(P("Acute appendicitis","appendicitis","ไส้ติ่ง")),CR(P("Appendectomy","appendectomy","appendicectomy"))]}),
  B("7.2 Post-operative orders.",5,{tags:["img"],key:KF+"uncomplicated → ไม่ต้องให้ ATB ต่อ (หรือแค่ ≤24 h) · complicated → IV ceftriaxone 1–2 g q12–24h + metronidazole 500 mg q8h",ans:"<b>Order for one day</b>: V/S q 1–4 ชม., record I/O, observe wound · <b>diet</b>: เริ่มน้ำ/อาหารอ่อนเมื่อตื่นดี ไม่คลื่นไส้ (uncomplicated มักวันเดียวกัน) · <b>IV fluid</b> จนกินได้ · <b>analgesics</b> (paracetamol, NSAID ± opioid prn), antiemetic prn · ambulation เร็ว · <b>Antibiotics</b>: <b>uncomplicated</b> → ไม่ต้องให้ต่อหลังผ่าตัด · <b>complicated (perforated/gangrenous)</b> → <b>ceftriaxone 2 g OD + metronidazole 500 mg q8h</b> ต่อ ~4 วัน (STOP-IT) · <b>Continuous</b>: ทำแผล, ตัดไหม 7–10 วัน",exp:"STOP-IT trial: complicated intra-abdominal infection ที่ควบคุม source แล้ว ให้ ATB ~4 วันพอ",rubric:"แบ่งตามหัวข้อ",pts:[P("Vital signs / I/O","v/?s","vital","i/o","input"),P("Diet progression","diet","อาหาร","npo","liquid"),P("IV fluid","fluid","สารน้ำ"),P("Analgesia","analges","paracetamol","pain","ปวด"),CR(P("Antibiotic by complicated vs uncomplicated","ceftriax","metronid","antibiot","uncomplicated","complicated")),P("Early ambulation / wound care","ambul","เดิน","wound","แผล")]})
 ),
 interp:"Appendectomy + post-op orders",
 summary:["Uncomplicated: ไม่ต้อง ATB หลังผ่าตัด","Complicated: ceftriaxone + metronidazole ~4 วัน","Early feeding + ambulation"]}),

/* ===== OSCE 8 ===== */
Co({page:2,orig:"8",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — one-handed knot and two simple interrupted sutures",
 stem:`The examiner is observing.<br>Close the wound on the model with two simple interrupted stitches using a one-handed knot-tying technique.`,
 gray:"OSCE 8. (อาจารย์คุม) One handed technique + simple interrupted suture 2 เข็ม ถ้าผูกแล้วเชือกไม่ติดกันจะโดนให้ผูกใหม่",
 sp:"หุ่นแผล · needle holder, forceps, scissors, ไหม silk/nylon · ผู้คุมดู: แทงเข็มตั้งฉาก ระยะเท่ากัน, ผูกด้วยมือข้างเดียว (one-handed tie) สลับ throw ให้เป็น square knot ≥3 ปม, ปมแน่นไม่หลวม (ถ้าปมไม่ติดกัน/ลื่น ผู้คุมให้ผูกใหม่), ปมอยู่ข้างแผล, ตัดไหมเหลือพอดี",
 notes:"ผู้จดเขียนว่าถ้าผูกแล้วเชือกไม่ติดกันจะโดนให้ผูกใหม่ · ไฟล์ Key 76D วงข้อนี้ ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("8.1 Two simple interrupted stitches with one-handed ties.",10,{tags:["proc"],ans:"แทงเข็ม<b>ตั้งฉาก</b> ห่างขอบ 3–5 mm ทั้งสองข้าง<b>เท่ากัน</b> ลึกถึง dermis · <b>one-handed tie</b>: throw แรกด้วยนิ้วชี้ ถัดไปด้วยนิ้วกลาง (สลับทิศ) วางปมลงโดยดึงไหมสองเส้น<b>ขนานกับผิว/ทิศตรงข้ามกัน</b> → <b>square knot</b> ≥3 throws · ปมแน่น ไม่ลื่น (ไม่ใช่ granny/slip knot) · ปมอยู่ข้างแผล · ตัดไหมเหลือ 3–5 mm · ทำ 2 เข็ม",exp:"Square knot ต้องสลับทิศมือในแต่ละ throw · ดึงไหมไม่เท่ากันจะได้ slip knot",rubric:"ปมหลวม/ลื่น = ต้องทำใหม่",
   pts:[H("Needle",30),P("Perpendicular, equal bites","90","perpendic","ตั้งฉาก","equal","เท่ากัน"),H("One-handed knot",60),CR(P("One-handed tie with alternating throws","one.?hand","มือเดียว","alternat","สลับ")),CR(P("Secure square knot, not slipping","square","แน่น","secure","not slip","ไม่ลื่น")),H("Finish",10),P("Knot to one side, cut tails","side","ข้าง","cut","ตัด")]})
 ),
 interp:"One-handed knot",
 summary:["Square knot = สลับทิศแต่ละ throw","ดึงไหมขนานผิวทิศตรงข้าม","≥3 throws"]}),

/* ===== OSCE 9 ===== */
Co({page:2,orig:"9",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — necrotizing soft-tissue infection of the left foot",kimg:["os76d_ko9"],
 stem:`A photograph of the left foot with dusky, bullous, necrotic skin is shown. The patient is febrile and in severe pain.<br>1. What is the diagnosis?<br>2. How would you manage this patient?`,
 gray:"OSCE 9. NF เท้าซ้าย ให้ dx กับ management",
 flag:NOIMG,imgAlt:"รูปเท้าซ้าย: ผิวหนังสีม่วงคล้ำ มีตุ่มน้ำเลือด เนื้อตายสีดำ บวมลามขึ้นขา",
 notes:"ผู้จดให้คำตอบ NF · ไฟล์ Key 76D: Necrotizing fasciitis · wound debridement → wet dressing, waiting for granulation tissue → skin graft/flap · IV fluid, monitor I/O, ดู sign of sepsis · IV antibiotics covering anaerobes & gram positive & gram negative (mostly NF type I = polymicrobial) · ตัวอย่าง WHO: Pip-Tazo (IV) 4 g + 500 mg q6h & clindamycin 900 mg q8h + vancomycin (if suspected MRSA) 15–20 mg/kg q12h · tissue culture & gram stain",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("9.1 Diagnosis.",2,{tags:["img"],key:KF+"Necrotizing fasciitis",ans:"<b>Necrotizing fasciitis</b> (necrotizing soft-tissue infection) ของเท้าซ้าย · type I polymicrobial (DM, ภูมิต่ำ) พบบ่อยสุด · ในไทยระวัง <b>Vibrio vulnificus</b>/<b>Aeromonas</b> (สัมผัสน้ำ/อาหารทะเล, โรคตับ)",exp:"LRINEC score ช่วย แต่ไม่ควรรอผลถ้าสงสัยทางคลินิก",rubric:"ได้",pts:[CR(P("Necrotizing fasciitis","necrotizing","fasciitis","nf","เนื้อเน่า"))]}),
  B("9.2 Management.",6,{tags:["img"],key:KF+"IV fluid, monitor I/O, sepsis · IV ATB (pip-tazo + clindamycin ± vancomycin) · tissue culture & gram stain · debridement → wet dressing → skin graft/flap",ans:"<b>Resuscitation</b> (sepsis bundle, IV fluid, monitor I/O) · <b>broad-spectrum IV antibiotics</b>: piperacillin-tazobactam (หรือ carbapenem) + <b>clindamycin</b> (ลด toxin) ± vancomycin (MRSA) — ในไทยสงสัย Vibrio เพิ่ม ceftazidime + doxycycline · <b>emergency radical surgical debridement</b> ถึงเนื้อดี ± amputation · <b>second look</b> ทุก 24–48 ชม. · tissue culture/gram stain · หลังควบคุมได้ → wound care/NPWT → skin graft/flap",exp:"Clindamycin ยับยั้งการสร้าง toxin ของ Streptococcus/Clostridium",rubric:"ได้ = debridement ด่วน + ATB",pts:[CR(P("Emergency surgical debridement","debride","ตัดเนื้อตาย","ผ่าตัด","amputat")),CR(P("Broad-spectrum IV antibiotics incl. clindamycin","antibiot","atb","clinda","pip","tazo","carbapenem")),P("Resuscitation / sepsis care","fluid","resusc","sepsis","สารน้ำ"),P("Repeat debridement / reconstruction","second look","repeat","ซ้ำ","graft","flap")]})
 ),
 interp:"Necrotizing fasciitis",
 summary:["Pain out of proportion, bullae, crepitus, sepsis","Emergency debridement + broad ATB + clindamycin","Second look ซ้ำ"]}),

/* ===== OSCE 10 ===== */
Co({page:2,orig:"10",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — anorectal examination and a prolapsed hemorrhoid photograph",
 stem:`A simulated patient presents with anal pain and a lump. Take a brief history, then demonstrate a per-rectal examination on the model. A photograph of the anus is then shown.<br>1. Perform the examination.<br>2. What is the diagnosis from the photograph?`,
 gray:"OSCE 10. (อาจารย์คุม) แสดงวิธีการตรวจร่างกาย PR และดูรูปแล้วบอกว่า diag อะไร, คนไข้เป็น thrombosed prolapsed hemorrhoid?? Circumferential??? (มีคนไข้จำลองมาให้ซักก่อนด้วย)",
 flag:NOIMG+" · ผู้จดไม่แน่ใจคำตอบ (thrombosed prolapsed hemorrhoid? circumferential?)",imgAlt:"รูปรอบทวาร: ก้อนริดสีดวงหลายก้อนยื่นออกมารอบทวาร สีม่วงคล้ำ บวม",
 sp:"ผู้ป่วยจำลอง: มีก้อนยื่นออกจากทวารดันกลับไม่ได้ 2 วัน ปวดมาก มีเลือดออก เคยมีก้อนยื่นเวลาเบ่งและดันกลับได้มาหลายปี ท้องผูก · ผู้คุมดู: แนะนำตัว ขออนุญาต chaperone, ท่า left lateral (Sims), ใส่ถุงมือ เจล, ดู perianal (inspection ขณะพักและเบ่ง), คลำรอบทวาร, สอดนิ้ว ประเมิน tone, คลำรอบ rectum 360°, prostate/cervix, ดูถุงมือ, ทำความสะอาด, (ถ้าเจ็บมากบอกว่าจะส่องตรวจภายใต้ยาชา)",
 notes:"ไฟล์ Key 76D วงข้อนี้ ไม่มีเฉลย",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ Key 76D ไม่มีเฉลย — คง prolapsed thrombosed (strangulated) internal hemorrhoids ± circumferential ตามที่ผู้จดบรรยาย; strangulated/thrombosed internal hemorrhoid → urgent excisional hemorrhoidectomy หรือ conservative ถ้าอาการดีขึ้น, ไม่ทำ RBL ในภาวะ acute hemorrhoidal crisis (ASCRS Hemorrhoid CPG 2024; Khan & Kanters 2024) · ขั้นตอน PR ตามหลักการตรวจมาตรฐาน · ความมั่นใจปานกลาง (ไม่เห็นรูปจริง)",
 parts:S(
  B("10.1 Per-rectal examination.",6,{tags:["pe"],ans:"ขออนุญาต + chaperone · <b>left lateral</b> งอสะโพกเข่า · <b>inspect</b>: skin tag, fissure, ก้อน, prolapse (ให้เบ่ง), external opening · คลำรอบทวาร (กดเจ็บ ก้อน fluctuation) · สอดนิ้วหล่อลื่นช้า ๆ · <b>anal tone</b> + squeeze · คลำผนัง rectum <b>รอบ 360°</b>, prostate/cervix · <b>ดูถุงมือ</b> (เลือด มูก melena) · ทำความสะอาด · (ปวดมาก → ตรวจใต้ยาชา)",exp:"Internal hemorrhoid ที่ไม่ thrombose คลำไม่ได้ด้วย DRE",rubric:"แบ่งตามขั้น",pts:[P("Consent / chaperone","consent","ขออนุญาต","chaperone"),P("Left lateral","left lateral","ตะแคงซ้าย"),CR(P("Inspection incl. straining","inspect","ดู","strain","เบ่ง")),P("Tone and 360° palpation","tone","360","รอบ"),P("Check glove","glove","ถุงมือ")]}),
  B("10.2 Diagnosis.",4,{tags:["pe"],ans:"<b>Prolapsed thrombosed (strangulated) internal hemorrhoids</b> — grade IV, อาจเป็นรอบวง (circumferential) · รักษา: analgesia, sitz bath, stool softener · ส่วนใหญ่ทำ <b>urgent excisional hemorrhoidectomy</b> (หรือ conservative ถ้าอาการดีขึ้น) · ห้าม RBL ในก้อนที่ thrombose",exp:"Grade IV strangulated hemorrhoid: hemorrhoidectomy ฉุกเฉินทำได้ปลอดภัย",rubric:"ได้",pts:[CR(P("Prolapsed thrombosed internal hemorrhoids","prolaps","thrombos","strangul","hemorrhoid","ริดสีดวง")),P("Hemorrhoidectomy","hemorrhoidectomy","excision")]})
 ),
 interp:"Anorectal exam + prolapsed thrombosed hemorrhoids",
 summary:["Left lateral, inspect with straining, 360° palpation","Grade IV thrombosed → hemorrhoidectomy","ไม่ RBL ใน thrombosed"]}),

/* ===== OSCE 11 ===== */
Co({page:2,orig:"11",topic:"suture",sub:"Suture material",title:"Suture materials — layer-by-layer closure of a deep laceration",kimg:["os76d_ko11"],
 stem:`A sharp-object injury has cut into the muscle. Several suture packets (purple, grey, green and an unpackaged black suture) are displayed.<br>Choose the suture for each layer and give its trade name, generic name, number of filaments and absorbability:<br>1. Muscle<br>2. Fat (subcutaneous) layer<br>3. A bleeding vein<br>4. Skin — and which technique is shown in the picture (vertical mattress)?`,
 gray:"OSCE 11. อุบัติเหตุของมีคมบาดลงกล้ามเนื้อ เย็บกล้ามเนื้อใช้….. เย็บชั้นไขมันใช้…. เลือดซึมออกเลยเย็บเส้นเลือดดำใช้…. เย็บผิวหนังใช้….. เย็บแบบอะไร (ให้รูป vertical mattress suture) ไหมแต่ละชนิดบอกชื่อการค้า ชื่อสามัญ จำนวนเส้นใยและการละลายด้วย //มีซองสีม่วง ซองสีเทา ซองสีเขียว ซองสี… ไหมเปล่าๆสีดำ(ไม่มีซองให้ ต้องดูดีๆ บางคนวางกระดาษทับอันนี้ ฉันวางทับเอง หานานมากกว่าจะเจอ)",
 flag:NOIMG+" · ⚠ ไฟล์ Key 76D จับคู่ muscle = Ethilon (nylon) และ skin = Vicryl ซึ่งน่าจะสลับกัน — เฉลยใช้ตามหลักทั่วไป",imgAlt:"ซองไหมสีม่วง (Vicryl), ซองสีเทา, ซองสีเขียว (Ethilon), และไหมดำเปล่าไม่มีซอง (silk) · รูปแผลเย็บแบบ vertical mattress",
 notes:"ไฟล์ Key 76D ตาราง: เย็บกล้ามเนื้อ — Ethilon (nylon), non-absorbable, mono · ไขมัน — Vicryl (polyglactin), absorbable, multi · เส้นเลือดดำ ligate — silk, non-absorbable, multi · anastomosis — Prolene (polypropylene), non-absorbable, mono · ผิวหนัง — Vicryl (polyglactin), absorbable, multi"+" · ตรวจคีย์ 21 พ.ย. 2026: คีย์เดิมตอบกล้ามเนื้อ Ethilon / ผิวหนัง Vicryl → เฉลยใช้กล้ามเนื้อ Vicryl / ผิวหนัง Ethilon ตามหลักการเย็บแผล (Roberts & Hedges 7e)",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่เห็นด้วยกับคีย์ 76D 2 ช่อง — กล้ามเนื้อคีย์ตอบ Ethilon (nylon) → ควรเป็น absorbable (Vicryl) เย็บหลวม ๆ ผ่าน fascia/epimysium; ผิวหนังคีย์ตอบ Vicryl → ผิวหนังที่เย็บ vertical mattress ใช้ nylon (Ethilon) monofilament non-absorbable แล้วตัดไหมภายหลัง (หลักการเย็บแผล Roberts & Hedges Clinical Procedures in Emergency Medicine 7e; Sabiston 21e) · เห็นด้วยกับคีย์ชั้นไขมัน (Vicryl) และเส้นเลือดดำ (silk ligate / Prolene anastomosis) · ความมั่นใจปานกลาง (สีซองในห้องสอบอาจกำหนดคำตอบต่างไป)",
 parts:S(
  B("11.1 Muscle.",2,{tags:["suture"],key:KF+"Ethilon (nylon), non-absorbable, mono",ans:"<b>Vicryl</b> (polyglactin 910) — braided <b>multifilament</b>, <b>absorbable</b> (ซองสีม่วง) · ⚠ ไฟล์คีย์ตอบ Ethilon",exp:"กล้ามเนื้อเย็บหลวม ๆ ด้วย absorbable ไม่รัดจนขาดเลือด",rubric:"ได้ = absorbable เช่น Vicryl",pts:[CR(P("Vicryl / absorbable","vicryl","polyglactin","absorb"))]}),
  B("11.2 Fat layer.",2,{tags:["suture"],key:KF+"Vicryl (polyglactin), absorbable, multi",ans:"<b>Vicryl</b> (หรือ plain catgut) — absorbable, multifilament · เย็บ subcutaneous เพื่อลด dead space (ไม่จำเป็นทุกราย)",exp:"Fat layer เย็บได้ด้วย absorbable ขนาดเล็ก (3-0/4-0)",rubric:"ได้",pts:[CR(P("Vicryl / absorbable","vicryl","polyglactin","catgut","absorb"))]}),
  B("11.3 Bleeding vein.",2,{tags:["suture"],key:KF+"ligate — silk (non-absorbable, multi) · anastomosis — Prolene (polypropylene, non-absorbable, mono)",ans:"<b>ผูก (ligate)</b> → <b>silk</b> (natural, braided multifilament, non-absorbable — ไหมดำไม่มีซอง) หรือ Vicryl · <b>ซ่อม/anastomosis</b> → <b>Prolene</b> (polypropylene monofilament non-absorbable)",exp:"Vein ligation ใช้ silk หรือ absorbable · ซ่อมผนังหลอดเลือดใช้ polypropylene",rubric:"ได้",pts:[CR(P("Silk for ligation (or Prolene for repair)","silk","prolene","polypropyl"))]}),
  B("11.4 Skin and technique.",3,{tags:["suture"],key:KF+"Vicryl (polyglactin), absorbable, multi",ans:"<b>Ethilon (nylon)</b> — polyamide <b>monofilament non-absorbable</b> (ซองสีเขียว) · เทคนิคในรูป = <b>vertical mattress suture</b> (far-far near-near) ช่วย eversion · ⚠ ไฟล์คีย์ตอบ Vicryl",exp:"Vicryl ใช้ผิวหนังได้แบบ subcuticular แต่ vertical mattress ใช้ไหมที่ต้องตัดออก",rubric:"ได้",pts:[CR(P("Nylon / Ethilon","nylon","ethilon")),CR(P("Vertical mattress","vertical mattress","vertical"))]})
 ),
 interp:"Suture choice by layer",
 summary:["Muscle/fat: absorbable (Vicryl)","Vessel ligation: silk · repair: Prolene","Skin: nylon · vertical mattress = eversion"]}),

/* ===== OSCE 12 ===== */
Co({page:2,orig:"12",topic:"inst",sub:"Surgical instrument",title:"Instruments — five items laid out",kimg:["os76d_ko12"],
 stem:`Five items (A–E) are laid out.<br>Name each item and give one use.`,
 gray:"OSCE 12. อุปกรณ์วางเรียงกัน 5 อย่าง ให้บอกชื่อกับประโยชน์แต่ละอย่างมา 1 ข้อ A = army navy retractor, B = curved mayo scissors, NG tube, Babcock clamp, chest tube",
 flag:NOIMG,imgAlt:"A retractor โลหะสองปลายงอ · B กรรไกรปลายโค้งใบหนา · C สายยางใสยาวมีขีดบอกระยะ · D clamp ปลายกลมเป็นวงไม่มีเขี้ยว · E ท่อพลาสติกใหญ่มีรูข้างและแถบทึบรังสี",
 notes:"ผู้จดให้คำตอบ: A army navy retractor, B curved Mayo scissors, NG tube, Babcock clamp, chest tube · ไฟล์ Key 76D: A army navy retractor — ช่วยเปิด skin, retraction of skin for better visualization of operative field · B curved Mayo — ตัด tissue หนา ๆ เช่น muscle, breast · C NG tube — decompress, deliver nutrients/medication, diagnostic (ดู content, blood), lavage · D Babcock clamp — atraumatic clamp จับ tubular structure e.g. appendix, viscera, bowel, fallopian tube · E chest drain — drain pleural fluid",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("12.1 Names and uses.",10,{tags:["inst"],key:KF+"A army navy retractor · B curved Mayo scissors · C NG tube · D Babcock clamp · E chest drain",
   ans:"A <b>Army-Navy retractor</b> — แหวกผิวหนัง/ชั้นตื้นให้เห็น operative field · B <b>Curved Mayo scissors</b> — ตัดเนื้อเยื่อหนา (fascia, muscle) · C <b>Nasogastric tube</b> — decompression, feeding/ให้ยา, ดู content/เลือด, lavage · D <b>Babcock clamp</b> — จับ appendix/ลำไส้/fallopian tube แบบ atraumatic · E <b>Intercostal chest drain</b> — ระบายลม/ของเหลวจาก pleural space",
   exp:"Mayo ปลายโค้งใช้ตัดเนื้อเยื่อหนาใกล้ผิวลึก · Mayo ตรงใช้ตัดไหม",rubric:"2 คะแนนต่อชิ้น",
   pts:[H("A",20),CR(P("Army-Navy retractor","army","navy")),H("B",20),CR(P("Curved Mayo scissors","mayo")),H("C",20),CR(P("NG tube","ng","nasogastric")),H("D",20),CR(P("Babcock clamp","babcock")),H("E",20),CR(P("Chest drain","chest","icd","intercostal"))]})
 ),
 interp:"Surgical instruments",
 summary:["Army-Navy retractor, Mayo scissors, NG tube, Babcock, chest drain","Babcock = atraumatic"]})
);
})();
