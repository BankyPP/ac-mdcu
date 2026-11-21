(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC Surgery By MDCU 78" (ไฟล์ OSCE/MEQ 78C) → MDCU78 RoC (เพิ่ม 20 พ.ย. 2026)
   ไฟล์ SO78CQ = AC_78C_OSCE_Sx_OSCE_MEQ_by_MDCU78.pdf (6 หน้า, iOS) · หน้า 2–3 "MEQ 15 ข้อ ข้อละ 2-3 นาที" · หน้า 4–6 "OSCE 13 ข้อ ข้อละ 4 นาที"
   ไฟล์เฉลย SO78CK = Key_78C_OSCE_78_RoC_Sx.pdf (3 หน้า) — เขียน "NO MEQ ไม่มีโจทย์" · เฉลย OSCE มีเฉพาะข้อ 2, 4, 6, 7, 8, 9, 12 (ครอปเป็น os78c_k*)
   พาร์ท MEQ (ไฟล์เรียก MEQ แต่เป็นสไลด์รูปถามตอบสั้นแบบเดียวกับพาร์ท PowerPoint/MEQ ของปีอื่น) → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot)
     ผู้จดเขียน "เหมือน ac" แทบทุกข้อ = เหมือนข้อสอบ AC ที่มีอยู่ — ข้อที่ตรงกับสถานีใน AC 78A/78B เราใช้โจทย์แบบเดียวกันและใส่ seen · ข้อที่ไม่ตรงกับ AC ที่มี แต่งโจทย์ตามหัวข้อ
   พาร์ท OSCE ข้อ 1–12 · ข้อ 13 = \"ข้อพัก\" (ฐานพัก) → ข้าม
   รูปในไฟล์: OSCE 2 (รูปองคชาต) เท่านั้น · สถานีอื่นที่บอกว่ามีรูป/คลิป/ฟิล์ม → flag NOIMG + imgAlt */
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
const KF="ไฟล์ Key 78C: ";
const Co=o=>Object.assign({set:"MDCU78",ro:"RoC",file:"SO78CQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
const AC="ผู้จดเขียนแค่ชื่อเรื่อง + \"เหมือน ac\" (= เหมือนข้อสอบ AC) · ไฟล์ Key 78C เขียน \"NO MEQ ไม่มีโจทย์\" (ไม่มีเฉลยพาร์ทนี้)";
QB.push(

/* ===== MEQ 1 ===== */
SA({page:2,orig:"MEQ 1",num:"SA 1",sub:"Pediatric surgery",title:"Spot — newborn with a membrane-covered abdominal wall defect",
 stem:`A photograph shows a newborn with a midline defect at the umbilicus. Bowel and part of the liver are contained in a translucent sac to which the umbilical cord is attached.<br>1. What is the diagnosis?<br>2. Give two associated conditions you must look for.<br>3. Outline the initial management.`,
 gray:"Omphalocele เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ทั้งหมด Claude แต่งตามหัวข้อ (ไม่พบสถานี omphalocele ในไฟล์ AC ที่มี)",imgAlt:"ทารกแรกเกิดมีถุงใสที่สะดือ ภายในมีลำไส้และตับ สายสะดือติดที่ถุง",
 notes:AC+" · หัวข้อ: Omphalocele · ไม่มีรูปในไฟล์",
 opinion:"ไม่มีเฉลย — แต่งตามหัวข้อ ความมั่นใจสูงในเนื้อหา",
 parts:S(
  B("1.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Omphalocele</b> (exomphalos)",exp:"มี sac (amnion + peritoneum), สายสะดือติดที่ถุง, อยู่กลาง; ตับออกได้ → giant omphalocele ถ้า defect &gt;5 cm/มีตับ",rubric:"ได้ = omphalocele",pts:[CR(P("Omphalocele","omphalocele","exomphalos"))]}),
  B("1.2 Two associated conditions.",2,{tags:["spot"],ans:"<b>Chromosomal abnormalities</b> (trisomy 18, 13, 21) · <b>congenital heart disease</b> (30–50%) · <b>Beckwith–Wiedemann syndrome</b> (macroglossia, hypoglycemia, organomegaly) · pentalogy of Cantrell, OEIS · pulmonary hypoplasia (giant)",exp:"ต้องทำ echo, karyotype, ตรวจน้ำตาล",rubric:"1 คะแนนต่อภาวะ",
   pts:[G("Associations (≥2)",2,P("Chromosomal/trisomy","trisomy","chromosom","karyotype"),P("Cardiac anomaly","cardiac","heart","หัวใจ","echo"),P("Beckwith–Wiedemann/hypoglycemia","beckwith","hypoglyc","macroglossia"),P("Pentalogy of Cantrell","cantrell"))]}),
  B("1.3 Initial management.",3,{tags:["spot"],ans:"Keep warm · คลุมถุงด้วย <b>sterile moist dressing/plastic wrap</b> ประคองไม่ให้ถุงแตกหรือบิด · <b>OG/NG decompression</b> · IV fluid + glucose · ตรวจ associated anomalies · ปิดผนัง: small → primary closure; giant → <b>paint-and-wait</b> (silver sulfadiazine/povidone ให้ epithelialize) แล้วซ่อม ventral hernia ภายหลัง",exp:"Giant omphalocele เสี่ยง pulmonary hypoplasia → อาจต้องช่วยหายใจ; paint-and-wait ใช้เวลาหลายสัปดาห์–เดือน",rubric:"ได้ = cover + NG + IV fluid/glucose + plan closure",
   pts:[CR(P("Sterile moist cover, protect sac","cover","wrap","moist","คลุม")),P("NG/OG decompression","ng","og","decompress"),P("IV fluid + glucose","iv","fluid","glucose"),P("Primary closure or paint-and-wait","closure","paint","silver","ปิด")]})
 ),
 interp:"Omphalocele: dx, associations, initial care",
 summary:["Omphalocele: sac, midline, associations สูง","ตรวจ echo, karyotype, glucose","Initial: warm, cover, NG, IV fluid","Small → primary; giant → paint-and-wait"]}),

/* ===== MEQ 2 ===== */
SA({page:2,orig:"MEQ 2",num:"SA 2",sub:"Pediatric surgery",title:"Spot — infant with acholic stool",seen:"MDCU78 RoA MEQ 7",
 stem:`A photograph shows the pale, clay-coloured stool of a 7-week-old jaundiced infant.<br>1. Give the three most likely diagnoses.<br>2. If you are a doctor at a rural community hospital, what investigations would you send and what would you do next?`,
 gray:"Acholic stool เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ใช้แบบเดียวกับข้อสอบ AC 78A (เด็ก 2 เดือนอึซีด)",imgAlt:"อุจจาระทารกสีซีดขาวเหมือนดินเหนียว",
 notes:AC+" · หัวข้อ: Acholic stool — ตรงกับสถานี AC Subspe 78A (เด็กชาย 2 เดือนอึซีด) จึงใช้คำถามเดียวกัน",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("2.1 Three most likely diagnoses.",3,{tags:["spot"],ans:"<b>Biliary atresia</b> · <b>choledochal cyst</b> · <b>neonatal hepatitis</b>/Alagille syndrome (อื่น: TORCH, galactosemia, α1-AT deficiency)",exp:"Alagille: paucity of bile ducts, butterfly vertebrae, posterior embryotoxon, peripheral pulmonary stenosis",rubric:"ได้ = BA + อีก 2",
   pts:[CR(P("Biliary atresia","biliary atresia","\\bba\\b")),G("อื่น (≥2)",2,P("Choledochal cyst","choledochal"),P("Neonatal hepatitis","hepatitis"),P("Alagille","alagille"),P("Metabolic/infection","galactos","antitrypsin","torch","metabolic"))]}),
  B("2.2 Investigations and next step.",4,{tags:["spot"],ans:"Direct/total bilirubin, LFT, PT/INR, TSH · <b>ultrasound</b> (fasting) · <b>vitamin K</b> · <b>refer urgently</b> ให้ทำ Kasai ก่อนอายุ 60 วัน",exp:"Kasai ก่อน 60 วัน bile drainage สำเร็จ ~70%; ยิ่งช้ายิ่งแย่ → liver transplant",rubric:"ได้ = direct bilirubin + US + vit K + refer",
   pts:[CR(P("Direct bilirubin","direct","conjugated","bilirubin")),P("Ultrasound","ultrasound","\\bus\\b","usg"),P("Vitamin K","vitamin k","vit k"),CR(P("Urgent referral","refer","ส่งต่อ","kasai"))]})
 ),
 interp:"Acholic stool → biliary atresia → refer เร็ว",
 summary:["Pale stool + jaundice = cholestasis","BA ต้อง Kasai &lt;60 วัน","US, vitamin K, refer"]}),

/* ===== MEQ 3 ===== */
SA({page:2,orig:"MEQ 3",num:"SA 3",sub:"Plastic/Skin/Burn",title:"Spot — an infant's palate",
 stem:`A photograph shows the open mouth of a 2-month-old infant with a midline defect of the soft and hard palate; the lip is intact.<br>1. What is the diagnosis?<br>2. Give two problems this infant may have.<br>3. At what age should it be repaired, and why?`,
 gray:"Cleft palate เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ Claude แต่งตามหัวข้อ",imgAlt:"เพดานปากมีรอยแยกกลางตลอดเพดานอ่อนและเพดานแข็ง ริมฝีปากปกติ",
 notes:AC+" · หัวข้อ: Cleft palate · ข้อสอบ MCQ Subspe 78B/78D มีข้อ cleft palate (ภาวะแทรกซ้อน, อายุผ่าตัด)",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("3.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Isolated cleft palate</b> (complete cleft of the secondary palate)",exp:"Cleft palate แยก: isolated (มัก syndromic มากกว่า) vs cleft lip and palate",rubric:"ได้ = cleft palate",pts:[CR(P("Cleft palate","cleft palate","เพดานโหว่","cleft"))]}),
  B("3.2 Two problems.",2,{tags:["spot"],ans:"<b>Feeding difficulty</b> (สร้าง negative pressure ไม่ได้, nasal regurgitation) · <b>aspiration</b> · <b>otitis media with effusion</b>/hearing loss · <b>speech problem</b> (velopharyngeal insufficiency, hypernasality) · dental/maxillary growth · airway obstruction (Pierre Robin)",exp:"Pierre Robin sequence: micrognathia + glossoptosis + cleft palate → airway เป็นปัญหาแรก",rubric:"1 คะแนนต่อปัญหา",
   pts:[G("Problems (≥2)",2,P("Feeding","feed","ดูด","กิน"),P("Aspiration","aspirat","สำลัก"),P("Otitis media/hearing","otitis","hearing","หู"),P("Speech/VPI","speech","พูด","velopharyn"),P("Airway (Pierre Robin)","airway","robin"))]}),
  B("3.3 Age of repair and reason.",2,{tags:["spot"],ans:"Palatoplasty ที่อายุ <b>ประมาณ 9–12 เดือน (ไม่เกิน 18 เดือน)</b> — <b>ก่อนเริ่มพูด</b> เพื่อให้ velopharyngeal function พัฒนาการพูดปกติ แต่ไม่เร็วเกินจนรบกวนการเจริญของ maxilla",exp:"Lip repair ~3 เดือน (rule of 10s)",rubric:"ได้ = ~1 ปี + ก่อนพูด",
   pts:[CR(P("Around 9–12 months","9 เดือน","9-12","9–12","12 เดือน","1 ปี","1 year","one year")),P("Before speech development","speech","พูด")]})
 ),
 interp:"Cleft palate: ปัญหาและเวลาผ่าตัด",
 summary:["Cleft palate: feeding, OME, speech","Palatoplasty 9–12 เดือน ก่อนพูด","Lip 3 เดือน","Alveolar bone graft 8–10 ปี"]}),

/* ===== MEQ 4 ===== */
SA({page:2,orig:"MEQ 4",num:"SA 4",sub:"Imaging film",title:"Spot — abdominal radiograph of bowel obstruction",seen:"MDCU78 RoB MEQ 8",
 stem:`An abdominal radiograph of a man with colicky abdominal pain, vomiting and distension after a previous appendectomy shows dilated central bowel loops with valvulae conniventes and multiple air–fluid levels; the colon is collapsed.<br>1. Which view is this?<br>2. Describe the findings.<br>3. What is the diagnosis and its most likely cause?`,
 gray:"Small bowel obstruction เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ใช้แบบเดียวกับข้อสอบ AC 78B (film upright bowel obstruction) + เติมประวัติผ่าตัด",imgAlt:"ฟิล์มท้องท่ายืน ลำไส้เล็กขยายหลายห่วง air-fluid level หลายระดับ",
 notes:AC+" · หัวข้อ: Small bowel obstruction — ตรงกับสถานี AC Subspe 78B (film abdomen upright bowel obstruction)",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("4.1 Which view?",1,{tags:["spot"],ans:"<b>Upright (erect) abdominal radiograph</b>",exp:"Acute abdomen series = supine abdomen + upright abdomen + upright CXR",rubric:"ได้ = upright abdomen",pts:[CR(P("Upright abdomen","upright","erect","ท่ายืน"))]}),
  B("4.2 Findings.",2,{tags:["spot"],ans:"Small bowel ขยาย &gt;3 cm อยู่ตรงกลาง · valvulae conniventes · multiple air–fluid levels (step-ladder) · colon/rectum ไม่มีแก๊ส",exp:"SBO: valvulae conniventes ครอบเต็มความกว้าง; LBO: haustra ไม่เต็มความกว้าง",rubric:"ได้ = dilated SB + valvulae + air-fluid levels",
   pts:[CR(P("Dilated small bowel","dilat","ขยาย")),P("Valvulae conniventes","valvulae","conniven"),P("Air–fluid levels","air-fluid","air fluid","step")]}),
  B("4.3 Diagnosis and cause.",2,{tags:["spot"],ans:"<b>Small bowel obstruction</b> จาก <b>postoperative adhesions</b> (เคยผ่าตัดไส้ติ่ง)",exp:"Adhesive SBO ไม่มี strangulation → conservative (NPO, NG, IV fluid, water-soluble contrast challenge); strangulation/closed loop → ผ่าตัด",rubric:"ได้ = SBO + adhesion",
   pts:[CR(P("Small bowel obstruction","small bowel","sbo")),P("Adhesions","adhesion","พังผืด")]})
 ),
 interp:"SBO จาก adhesion",
 summary:["SBO: adhesion บ่อยสุดหลังผ่าตัด, hernia บ่อยสุดถ้าไม่เคยผ่าตัด","Strangulation signs: fever, tachycardia, continuous pain, peritonism, leukocytosis, lactate","Gastrografin challenge: ถึง colon ใน 24 ชม. = resolve"]}),

/* ===== MEQ 5 ===== */
SA({page:2,orig:"MEQ 5",num:"SA 5",sub:"Anorectal",title:"Spot — perianal warty lesions",
 stem:`A photograph shows multiple soft, cauliflower-like papillomatous growths around the anus of a 25-year-old man.<br>1. What is the diagnosis?<br>2. What is the causative organism?<br>3. How would you treat it?`,
 gray:"Condyloma acuminata เหมือน ac · 1.",
 flag:NOIMG+" · โจทย์ Claude แต่งตามหัวข้อ",imgAlt:"ติ่งเนื้อนุ่มลักษณะดอกกะหล่ำหลายก้อนรอบทวารหนัก",
 notes:AC+" · หัวข้อ: Condyloma acuminata",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("5.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Condyloma acuminata (anogenital warts)</b>",exp:"DDx: condyloma lata (secondary syphilis — แบน ชื้น), SCC, Buschke–Löwenstein tumor (giant condyloma)",rubric:"ได้ = condyloma acuminata",pts:[CR(P("Condyloma acuminata","condyloma","wart","หูด"))]}),
  B("5.2 Causative organism.",1,{tags:["spot"],ans:"<b>Human papillomavirus (HPV) types 6 and 11</b> (low risk) · HPV 16/18 → anal intraepithelial neoplasia/SCC",exp:"HPV 16/18 สัมพันธ์กับ anal SCC — ตรวจ anal cytology ในกลุ่มเสี่ยง (HIV, MSM)",rubric:"ได้ = HPV (6, 11)",pts:[CR(P("HPV 6/11","hpv","papilloma"))]}),
  B("5.3 Treatment.",3,{tags:["spot"],ans:"ก้อนเล็ก/น้อย: topical <b>podophyllotoxin</b>, <b>imiquimod</b>, <b>trichloroacetic acid</b>, <b>cryotherapy</b> · ก้อนมาก/ใหญ่/ภายในทวาร: <b>surgical excision/electrocautery</b> (ตรวจ anoscopy หาก้อนภายใน) · ตรวจ STI อื่น (HIV, syphilis) + partner · HPV vaccine ป้องกัน · ส่งชิ้นเนื้อถ้าสงสัย dysplasia",exp:"Recurrence สูง 20–50%",rubric:"ได้ = topical/ablative หรือ excision + STI screening",
   pts:[CR(P("Topical/ablative or surgical excision","podophyll","imiquimod","tca","trichloro","cryo","excision","cautery","จี้")),P("Anoscopy for internal lesions","anoscop","internal"),P("Screen other STIs/partner","hiv","syphilis","sti","partner","คู่")]})
 ),
 interp:"Condyloma acuminata: HPV 6/11",
 summary:["Anogenital warts: HPV 6/11","Topical (podophyllotoxin, imiquimod, TCA), cryotherapy, excision","Anoscopy + STI screening","HPV vaccine ป้องกัน"]}),

/* ===== MEQ 6 ===== */
SA({page:2,orig:"MEQ 6",num:"SA 6",sub:"Imaging film",title:"Spot — gallbladder ultrasound with right upper quadrant pain",
 stem:`A 45-year-old woman has right upper quadrant pain for 2 days with fever and a positive Murphy sign. Her ultrasound shows gallstones, a thickened gallbladder wall with pericholecystic fluid and a sonographic Murphy sign; the common bile duct is not dilated.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"Acute cholecystitis เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ Claude แต่งตามหัวข้อ",imgAlt:"Ultrasound ถุงน้ำดีผนังหนา มีนิ่ว มีน้ำรอบถุงน้ำดี",
 notes:AC+" · หัวข้อ: Acute cholecystitis",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("6.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Acute calculous cholecystitis</b> (TG18 grade I–II)",exp:"US: wall &gt;4 mm, pericholecystic fluid, sonographic Murphy, distended GB, impacted stone",rubric:"ได้ = acute cholecystitis",pts:[CR(P("Acute cholecystitis","cholecystitis"))]}),
  B("6.2 Management.",4,{tags:["spot"],ans:"NPO, IV fluid, analgesia (NSAID/opioid), <b>IV antibiotics</b> (เช่น ceftriaxone ± metronidazole) · <b>early laparoscopic cholecystectomy</b> (ภายใน 72 ชม.–7 วันจากเริ่มอาการ) ในผู้ป่วยที่ผ่าตัดได้ · ไม่พร้อมผ่าตัด/grade III ที่ไม่ตอบสนอง → <b>percutaneous cholecystostomy (PTGBD)</b> แล้วผ่าตัดภายหลัง",exp:"Tokyo Guidelines 2018",rubric:"ได้ = supportive + ATB + early lap chole (PTGBD ถ้าเสี่ยงสูง)",
   pts:[P("NPO, IV fluid, analgesia","npo","fluid","analges","pain"),CR(P("IV antibiotics","antibiotic","atb","ceftriaxone")),CR(P("Early laparoscopic cholecystectomy","cholecystectomy","lap chole")),P("PTGBD if high risk","ptgbd","cholecystostomy","percutaneous")]})
 ),
 interp:"Acute cholecystitis: TG18",
 summary:["TG18: Murphy/RUQ + fever/CRP/WBC + imaging","Grade I mild, II moderate (WBC &gt;18k, mass, &gt;72 ชม., gangrenous/emphysematous), III organ dysfunction","Early lap chole","PTGBD สำหรับเสี่ยงสูง"]}),

/* ===== MEQ 7 ===== */
SA({page:2,orig:"MEQ 7",num:"SA 7",sub:"Vascular/Ulcer",title:"Spot — a swollen leg after surgery",
 stem:`A photograph shows the left leg of a 60-year-old man on postoperative day 5 after hip surgery. The calf is swollen, warm and tender, with dilated superficial veins.<br>1. What is the most likely diagnosis?<br>2. Which investigation would confirm it?<br>3. How would you treat it?`,
 gray:"DVT เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ Claude แต่งตามหัวข้อ",imgAlt:"ขาซ้ายบวม แดง เส้นเลือดผิวโป่ง เทียบกับขาขวา",
 notes:AC+" · หัวข้อ: DVT",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("7.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Deep vein thrombosis (DVT)</b> ของขาซ้าย",exp:"Virchow triad: stasis, endothelial injury, hypercoagulability · Wells score",rubric:"ได้ = DVT",pts:[CR(P("Deep vein thrombosis","dvt","deep vein","thrombo"))]}),
  B("7.2 Confirmatory investigation.",1,{tags:["spot"],ans:"<b>Compression (duplex) ultrasonography</b> ของหลอดเลือดดำขา (ไม่ยุบเมื่อกด) · D-dimer ใช้ rule out เมื่อ pretest probability ต่ำ (หลังผ่าตัดมักสูงอยู่แล้ว)",exp:"Duplex US sensitivity ~95% สำหรับ proximal DVT; calf DVT ไวน้อยกว่า",rubric:"ได้ = compression/duplex US",pts:[CR(P("Compression/duplex ultrasound","ultrasound","duplex","doppler","compression"))]}),
  B("7.3 Treatment.",3,{tags:["spot"],ans:"<b>Anticoagulation</b>: LMWH (enoxaparin 1 mg/kg q12h) หรือ DOAC (rivaroxaban/apixaban) หรือ UFH → warfarin (INR 2–3) · provoked DVT (หลังผ่าตัด) รักษา <b>3 เดือน</b> · ห้ามใช้ anticoagulant → IVC filter · ขยับตัวเร็ว · ระวังอาการ PE",exp:"Prevention: early ambulation, mechanical (IPC), pharmacological prophylaxis ตาม Caprini",rubric:"ได้ = anticoagulant + duration",
   pts:[CR(P("Anticoagulation (LMWH/DOAC/warfarin)","anticoag","lmwh","enoxaparin","heparin","rivaroxaban","apixaban","warfarin","doac")),P("3 months for provoked DVT","3 เดือน","3 month","three month"),P("IVC filter if contraindicated","ivc","filter")]})
 ),
 interp:"Postoperative DVT: ultrasound + anticoagulation",
 summary:["DVT: Wells score → D-dimer/US","Compression US = test of choice","Treatment: LMWH/DOAC 3 เดือนถ้า provoked","IVC filter เมื่อห้าม anticoagulant","Prophylaxis ตาม risk (Caprini)"]}),

/* ===== MEQ 8 ===== */
SA({page:2,orig:"MEQ 8",num:"SA 8",sub:"Other spot",title:"Spot — video of a deep tendon reflex",seen:"MDCU78 RoB MEQ 11",
 stem:`A video shows the examiner tapping the distal radius about 5 cm above the wrist with the forearm semiprone, producing elbow flexion.<br>1. Which reflex is being tested?<br>2. Which nerve root does it test?`,
 gray:"Muscle reflex เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ใช้แบบเดียวกับข้อสอบ AC 78B (VDO brachioradialis reflex) — ไฟล์บอกแค่ \"muscle reflex\" ไม่ระบุว่าเป็น reflex ใด",imgAlt:"คลิปตรวจ reflex บริเวณปลายแขน",
 notes:AC+" · หัวข้อ: Muscle reflex — ตรงกับสถานี AC Subspe 78B (VDO brachioradialis reflex) จึงใช้คำถามเดียวกัน (ไม่แน่ว่าในข้อสอบจริงเป็น reflex เดียวกัน)",
 opinion:"ไม่มีเฉลย — ความมั่นใจปานกลางว่าเป็น reflex เดียวกับ AC 78B",
 parts:S(
  B("8.1 Reflex tested.",1,{tags:["spot"],ans:"<b>Brachioradialis (supinator) reflex</b>",exp:"Inverted supinator reflex บ่งรอยโรคระดับ C5–C6",rubric:"ได้ = brachioradialis",pts:[CR(P("Brachioradialis reflex","brachioradialis","supinator"))]}),
  B("8.2 Nerve root.",1,{tags:["spot"],ans:"<b>C5–C6</b> (radial nerve)",exp:"Biceps C5–6, triceps C7, knee L3–4, ankle S1",rubric:"ได้ = C5–C6",pts:[CR(P("C5–C6","c5","c6"))]})
 ),
 interp:"Deep tendon reflexes และ nerve roots",
 summary:["Biceps C5–6","Brachioradialis C5–6","Triceps C7","Knee L3–4","Ankle S1"]}),

/* ===== MEQ 9 ===== */
SA({page:2,orig:"MEQ 9",num:"SA 9",sub:"Other spot",title:"Spot — video: inability to look up and poorly reactive pupils",seen:"MDCU78 RoA MEQ 6",
 stem:`A video of an eye examination shows that the patient cannot look upward and the pupils do not constrict to light.<br>1. What is the diagnosis?<br>2. Where is the lesion, and what is a common cause?`,
 gray:"คลิปตรวจร่างกาย มองขึ้นบนไม่ได้ ส่องไฟม่านตาไม่หด เหมือน ac · A. dx parinaud",
 flag:NOIMG+" · คำถามย่อยที่ 2 Claude เติมตามสถานีเดียวกันใน AC 78A",imgAlt:"คลิปตรวจตา: มองขึ้นไม่ได้ ม่านตาไม่หดตัวต่อแสง",
 notes:AC+" · ผู้จดเขียนคำถามไว้ \"A. dx parinaud\" · ตรงกับสถานี AC Subspe 78A (Parinaud)",
 opinion:"ไม่มีเฉลยในไฟล์เฉลย แต่ผู้จดระบุว่าถาม dx = Parinaud ความมั่นใจสูง",
 parts:S(
  B("9.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Parinaud syndrome (dorsal midbrain syndrome)</b>",exp:"Light–near dissociation อื่น: Argyll Robertson pupil (neurosyphilis), Adie tonic pupil",rubric:"ได้ = Parinaud",pts:[CR(P("Parinaud syndrome","parinaud","dorsal midbrain"))]}),
  B("9.2 Lesion site and common cause.",2,{tags:["spot"],ans:"<b>Dorsal midbrain</b> (pretectum/superior colliculus) · สาเหตุบ่อย: <b>pineal region tumor</b> (germinoma), obstructive hydrocephalus",exp:"Pineal germinoma ไวต่อ RT มาก; ETV แก้ hydrocephalus",rubric:"ได้ = dorsal midbrain + pineal tumor",pts:[P("Dorsal midbrain","midbrain","pretectal","tectal"),CR(P("Pineal tumor/hydrocephalus","pineal","germinoma","hydroceph"))]})
 ),
 interp:"Parinaud syndrome",
 summary:["Upgaze palsy + light–near dissociation + convergence–retraction nystagmus","Dorsal midbrain lesion","Pineal tumor, hydrocephalus"]}),

/* ===== MEQ 10 ===== */
SA({page:2,orig:"MEQ 10",num:"SA 10",sub:"Imaging film",title:"Spot — plain KUB with flank pain",seen:"MDCU78 RoB MEQ 15",
 stem:`A KUB radiograph of a man with right colicky flank pain radiating to the groin shows a small radiopaque density along the course of the right ureter near the sacroiliac joint.<br>1. Describe the finding.<br>2. What is the diagnosis?<br>3. Give one confirmatory investigation.`,
 gray:"Ureteric stone เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ใช้แบบเดียวกับข้อสอบ AC 78B (film KUB ureter stone) + เติมคำถามย่อยที่ 3",imgAlt:"ฟิล์ม KUB เห็นเงาทึบเล็กตามแนวท่อไตขวา",
 notes:AC+" · หัวข้อ: Ureteric stone — ตรงกับสถานี AC Subspe 78B (film KUB ureter stone)",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("10.1 Describe the finding.",2,{tags:["spot"],ans:"Radiopaque density เล็กตามแนว ureter ขวา (ระดับ sacroiliac joint)",exp:"Radiopaque stone: calcium oxalate/phosphate, struvite, cystine (จาง); uric acid radiolucent",rubric:"ได้ = radiopaque density along ureter",pts:[CR(P("Radiopaque density along ureter","radiopaque","opaque","calcif","ทึบ","ureter"))]}),
  B("10.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Right ureteric stone</b>",exp:"นิ่ว ≤5 mm หลุดเอง ~70–90%",rubric:"ได้ = ureteric stone",pts:[CR(P("Ureteric stone","ureter","stone","นิ่ว"))]}),
  B("10.3 Confirmatory investigation.",1,{tags:["spot"],ans:"<b>Non-contrast CT KUB</b> (sensitivity/specificity &gt;95%) · หญิงตั้งครรภ์/เด็ก: ultrasound",exp:"US ใช้ในหญิงตั้งครรภ์และเด็ก; CT low-dose ลดรังสี",rubric:"ได้ = NCCT",pts:[CR(P("Non-contrast CT","ct","computed"))]})
 ),
 interp:"KUB: ureteric stone → NCCT",
 summary:["NCCT KUB = gold standard","KUB ใช้ติดตามนิ่วทึบรังสี","Phlebolith vs stone"]}),

/* ===== MEQ 11 ===== */
SA({page:3,orig:"MEQ 11",num:"SA 11",sub:"Plastic/Skin/Burn",title:"Spot — scald burn of the trunk and arm",
 stem:`A photograph shows a 60-kg man with blistered, pink, moist and very painful burns from hot water covering the whole anterior trunk and the whole right arm, sustained 1 hour ago.<br>1. What is the depth of the burn?<br>2. Estimate the %TBSA.<br>3. Calculate the fluid for the first 24 hours using the Parkland formula and how it is given.`,
 gray:"Burn เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ Claude แต่งตามหัวข้อ",imgAlt:"แผลไหม้ชมพูชื้นมีตุ่มน้ำที่ลำตัวด้านหน้าและแขนขวา",
 notes:AC+" · หัวข้อ: Burn · ข้อสอบ MCQ Subspe 78A/78B มีข้อคำนวณ Parkland",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("11.1 Depth.",1,{tags:["spot"],ans:"<b>Superficial partial-thickness (superficial second-degree) burn</b>",exp:"ประเมินความลึกด้วยสี การกดซีด ความเจ็บ และ capillary refill",rubric:"ได้ = superficial partial thickness",pts:[CR(P("Superficial partial thickness","partial","second","2nd"))]}),
  B("11.2 %TBSA.",1,{tags:["spot"],ans:"Anterior trunk 18% + right arm 9% = <b>27% TBSA</b>",exp:"Rule of 9",rubric:"ได้ = 27%",pts:[CR(P("27%","27"))]}),
  B("11.3 Parkland calculation.",3,{tags:["spot"],ans:"4 mL × 60 kg × 27 = <b>6,480 mL Ringer's lactate ใน 24 ชม.</b> · ครึ่งแรก <b>3,240 mL ใน 8 ชม.แรกนับจากเวลาไหม้</b> (ผ่านไป 1 ชม. → 3,240 mL ใน 7 ชม. ≈ 463 mL/hr) · ครึ่งหลัง 3,240 mL ใน 16 ชม. (≈ 203 mL/hr) · titrate ตาม urine output 0.5 mL/kg/hr (30 mL/hr)",exp:"ATLS 10th (2 mL/kg/%) จะได้ครึ่งหนึ่งของค่านี้",rubric:"ได้ = 6,480 mL + ครึ่งแรก 8 ชม. + UO target",
   pts:[CR(P("6,480 mL in 24 h","6480","6,480","6 480")),P("Half in first 8 h from burn time","3240","3,240","8 ชม","8 h","8 hr"),P("Titrate to urine output 0.5 mL/kg/h","urine","0.5","30 ml")]})
 ),
 interp:"Burn: depth, TBSA, Parkland",
 summary:["Rule of 9","Parkland 4 mL/kg/%, ครึ่งแรก 8 ชม.นับจากเวลาไหม้","UO 0.5 mL/kg/hr ผู้ใหญ่","ไม่นับ first-degree"]}),

/* ===== MEQ 12 ===== */
SA({page:3,orig:"MEQ 12",num:"SA 12",sub:"Plastic/Skin/Burn",title:"Spot — a pearly lesion on the face",
 stem:`A photograph shows a 1-cm pearly, translucent nodule with rolled edges, telangiectasia and central ulceration on the nasolabial area of a 70-year-old farmer.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"BCC เหมือน ac · A.",
 flag:NOIMG+" · โจทย์ Claude แต่งตามหัวข้อ",imgAlt:"ตุ่มนูนมันวาว ขอบม้วน มีเส้นเลือดฝอย ตรงกลางเป็นแผล ที่ข้างจมูก",
 notes:AC+" · หัวข้อ: BCC",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("12.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Basal cell carcinoma</b> (nodular, rodent ulcer)",exp:"มะเร็งผิวหนังที่พบบ่อยที่สุด แพร่กระจายน้อยมาก แต่ทำลายเนื้อเยื่อเฉพาะที่ · ในคนเอเชียมักเป็น pigmented BCC",rubric:"ได้ = BCC",pts:[CR(P("Basal cell carcinoma","basal cell","bcc","rodent"))]}),
  B("12.2 Treatment.",3,{tags:["spot"],ans:"<b>Surgical excision with 4-mm margin</b> (low-risk) ส่งตรวจ margin · high-risk (หน้า \"H-zone\" ขนาดใหญ่ ขอบไม่ชัด recurrent morpheaform) → <b>Mohs micrographic surgery</b> · ปิดแผลด้วย local flap/graft · ทางเลือกอื่นในผู้ที่ผ่าตัดไม่ได้: radiotherapy, topical imiquimod/5-FU (superficial), hedgehog inhibitor (advanced) · ป้องกันแดด ติดตามผิวหนัง",exp:"High-risk BCC: H-zone ของหน้า, ขนาดใหญ่, ขอบไม่ชัด, morpheaform/infiltrative, recurrent, immunosuppression",rubric:"ได้ = excision with margin หรือ Mohs + reconstruction",
   pts:[CR(P("Excision with ~4 mm margin or Mohs","excision","mohs","margin","ตัด")),P("Reconstruction","flap","graft","reconstruct"),P("Sun protection/follow-up","sun","แดด","follow")]})
 ),
 interp:"BCC: excision/Mohs",
 summary:["BCC: pearly, rolled edge, telangiectasia, ulcer","Excision 4 mm (low risk)","Mohs สำหรับ high-risk/H-zone","แพร่กระจายน้อยมาก"]}),

/* ===== MEQ 13 ===== */
SA({page:3,orig:"MEQ 13",num:"SA 13",sub:"Breast",title:"Spot — mammogram without axillary nodes",seen:"MDCU78 RoB MEQ 6",
 stem:`Two mammographic views of the left breast of a 55-year-old woman show an irregular spiculated mass with fine pleomorphic microcalcifications. No enlarged axillary lymph nodes are seen.<br>1. What is this film?<br>2. What is the diagnosis? Give two reasons.<br>3. What is the next investigation?`,
 gray:"รูป MMG breast ไม่มี LN · A. Film ไร B. Dx เหตุผล2ข้อ C. Mx ส่งอะไรต่อ",
 flag:NOIMG+" · ลักษณะรอยโรค Claude แต่ง (ไฟล์บอกแค่ MMG ไม่มี LN)",imgAlt:"Mammogram 2 ท่า เห็นก้อนขอบหนาม และจุดหินปูน ไม่มีต่อมน้ำเหลืองรักแร้โต",
 notes:"ต้นฉบับ: \"รูป MMG breast ไม่มี LN\" คำถาม A–C · ไฟล์ Key 78C เขียน \"NO MEQ ไม่มีโจทย์\" · คล้ายสถานี AC Subspe 78B (mammogram 2 views)",
 opinion:"ไม่มีเฉลย — ความมั่นใจปานกลาง-สูง (ลักษณะรอยโรคแต่งเอง)",
 parts:S(
  B("13.1 What is this film?",1,{tags:["spot"],ans:"<b>Mammogram</b> (CC และ MLO views)",exp:"Screening mammogram มาตรฐานมี 2 views ต่อข้าง: CC และ MLO",rubric:"ได้ = mammogram",pts:[CR(P("Mammogram","mammo"))]}),
  B("13.2 Diagnosis with two reasons.",3,{tags:["spot"],ans:"<b>Carcinoma of the breast (BI-RADS 5)</b> · เหตุผล: (1) <b>irregular spiculated mass</b> (2) <b>fine pleomorphic/linear branching microcalcifications</b> · อื่น: architectural distortion, skin thickening/nipple retraction · ไม่มี axillary node ไม่ได้ตัดมะเร็งออก",exp:"Axillary node ปกติบน mammogram ไม่ได้ตัดการกระจาย ต้องประเมินด้วย US/SLNB",rubric:"ได้ = breast cancer + 2 เหตุผล",
   pts:[CR(P("Breast cancer","cancer","carcinoma","malignan","bi-rads 5","มะเร็ง")),P("Spiculated mass","spicul","irregular"),P("Microcalcifications","calcif","หินปูน")]}),
  B("13.3 Next investigation.",2,{tags:["spot"],ans:"<b>Core needle biopsy</b> (US-guided หรือ stereotactic) + ER/PR/HER2/Ki-67 · US breast + axilla",exp:"Receptor status (ER/PR/HER2) กำหนดการรักษา systemic",rubric:"ได้ = core needle biopsy",pts:[CR(P("Core needle biopsy","core","biopsy","ตัดชิ้นเนื้อ"))]})
 ),
 interp:"Mammogram BI-RADS 5 → core biopsy",
 summary:["Malignant: spiculated mass, pleomorphic calcification","BI-RADS 4–5 → core biopsy","Staging + receptor status"]}),

/* ===== MEQ 14 ===== */
SA({page:3,orig:"MEQ 14",num:"SA 14",sub:"Anorectal",title:"Spot — a tender perianal swelling",
 stem:`A photograph shows a red, hot, fluctuant swelling beside the anus of a 40-year-old man with throbbing pain for 3 days and low-grade fever.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"Perianal abscess เหมือน ac · A. dx B. Tx",
 flag:NOIMG+" · โจทย์ Claude แต่งตามหัวข้อ",imgAlt:"ก้อนบวมแดงข้างทวารหนัก",
 notes:AC+" · คำถาม A. dx B. Tx",
 opinion:"ไม่มีเฉลย — ความมั่นใจสูง",
 parts:S(
  B("14.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Perianal abscess</b>",exp:"Cryptoglandular origin (anal gland ที่ dentate line) · ชนิด: perianal (บ่อยสุด), ischiorectal, intersphincteric, supralevator",rubric:"ได้ = perianal abscess",pts:[CR(P("Perianal abscess","perianal abscess","abscess","ฝี"))]}),
  B("14.2 Treatment.",3,{tags:["spot"],ans:"<b>Incision and drainage</b> โดยเร็ว (ไม่รอให้ fluctuant ในรายที่ปวดมาก) — กรีดใกล้ anal verge ให้ระบายดี (เผื่อเป็น fistula จะได้สั้น) · ยาแก้ปวด sitz bath · <b>antibiotics เฉพาะ</b>ราย cellulitis มาก, DM/immunocompromised, valvular heart disease, sepsis · แจ้งว่า ~30–50% กลายเป็น fistula-in-ano",exp:"Abscess ลึก (ischiorectal/supralevator) อาจต้อง EUA ± CT/MRI",rubric:"ได้ = I&amp;D ± ATB ในรายเลือก",
   pts:[CR(P("Incision and drainage","incision","drain","i&d","i&amp;d","เจาะ","ระบาย")),P("Antibiotics only if indicated","antibiotic","atb","diabet","immuno","cellulitis"),P("Warn of fistula","fistula")]})
 ),
 interp:"Perianal abscess → I&amp;D",
 summary:["Anorectal abscess: I&amp;D เร็ว","ATB เฉพาะรายเสี่ยง","Fistula-in-ano ตามมา 30–50%","Goodsall's rule สำหรับ fistula"]}),

/* ===== MEQ 15 ===== */
SA({page:3,orig:"MEQ 15",num:"SA 15",sub:"Pediatric surgery",title:"Spot — newborn chest radiograph with respiratory distress",
 stem:`A term newborn develops respiratory distress shortly after birth. The abdomen is scaphoid. The chest radiograph shows multiple gas-filled bowel loops in the left hemithorax with mediastinal shift to the right.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"ไม่ Congenital diaphragmatic hernia ก็ Eventration of diaphragm · A. Dx B. Tx",
 flag:NOIMG+" · ผู้จดไม่แน่ใจว่า CDH หรือ eventration — Claude แต่งภาพเป็น CDH",imgAlt:"CXR ทารกแรกเกิด เห็นลำไส้มีแก๊สในทรวงอกซ้าย หัวใจถูกดันไปขวา",
 notes:"ต้นฉบับ: \"ไม่ Congenital diaphragmatic hernia ก็ Eventration of diaphragm\" (ผู้จดจำไม่แน่ว่าเป็นโรคไหน) คำถาม A. Dx B. Tx · ไม่มีรูปในไฟล์ · ไฟล์ Key 78C ไม่มีเฉลยพาร์ทนี้"+" · ตรวจคีย์ 21 พ.ย. 2026: ไม่มีคีย์เดิม — แก้ target preductal SpO2 ≥85% → 80–95% + เกณฑ์ stabilize ตาม CDH EURO Consensus 2015",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ Key 78C ไม่มีเฉลยข้อนี้ (ผู้จดลังเล CDH vs eventration) — คงคำตอบ CDH เพราะลำไส้ในทรวงอก + ท้องแฟบ + mediastinal shift + อาการตั้งแต่แรกเกิด เข้ากับ CDH (eventration มักอาการน้อย เห็นขอบกะบังลมต่อเนื่อง) · แก้เป้าหมาย preductal SpO2 จาก ≥85% เป็น 80–95% และเพิ่มเกณฑ์ stabilize ก่อนผ่าตัด ตาม CDH EURO Consortium Consensus 2015 update (Snoek et al., Neonatology 2016) · ความมั่นใจ: การรักษาสูง, การวินิจฉัยของข้อสอบจริงต่ำ",
 parts:S(
  B("15.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Congenital diaphragmatic hernia (left Bochdalek)</b>",exp:"Eventration: กะบังลมยกสูงแต่ต่อเนื่อง (เห็นขอบโค้งเรียบเหนือลำไส้) มักอาการน้อยกว่า · CDH: ลำไส้อยู่ในทรวงอก ไม่เห็นขอบกะบังลม ท้องแฟบ (scaphoid)",rubric:"ได้ = CDH",pts:[CR(P("Congenital diaphragmatic hernia","diaphragmatic hernia","cdh","bochdalek"))]}),
  B("15.2 Management.",4,{tags:["spot"],ans:"<b>Immediate endotracheal intubation</b> (<b>ห้าม bag-mask ventilation</b> — ลมเข้ากระเพาะ/ลำไส้ในทรวงอก) · <b>NG/OG decompression</b> · gentle ventilation (PIP ≤25 cmH2O, permissive hypercapnia PaCO2 50–70 mmHg, <b>preductal SpO2 80–95%</b>, postductal &gt;70%) · IV access, inotropes · รักษา pulmonary hypertension (iNO, ± ECMO) · <b>delayed surgical repair</b> หลัง stabilize (ไม่ใช่ emergency surgery; เกณฑ์: MAP ปกติตามอายุครรภ์, preductal SpO2 85–95% บน FiO2 &lt;50%, lactate &lt;3 mmol/L, urine &gt;1 mL/kg/h) — ปิดรู primary หรือ patch · Eventration ที่มีอาการ → plication",exp:"Mortality มาจาก pulmonary hypoplasia + pulmonary hypertension",rubric:"ได้ = intubate (no bag-mask) + NG + stabilize + delayed repair",
   pts:[CR(P("Intubate; avoid bag-mask","intubat","et tube","ใส่ท่อ","bag","mask")),CR(P("NG/OG decompression","ng","og","decompress")),P("Gentle ventilation/treat pulmonary hypertension","gentle","permissive","pulmonary hypertension","ino","ecmo"),P("Delayed surgical repair after stabilization","delayed","repair","ผ่าตัด","stabiliz")]})
 ),
 interp:"CDH: ห้าม bag-mask, stabilize ก่อนผ่าตัด",
 summary:["CDH: Bochdalek (posterolateral ซ้าย 80%) > Morgagni","Scaphoid abdomen + bowel in chest + shift","Intubate, NG, gentle ventilation","Delayed repair","Eventration: plication ถ้ามีอาการ"]}),

/* ===== OSCE 1 ===== */
Co({page:4,orig:"1",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — digital rectal examination on a model",
 stem:`A rectal examination model is provided.<br>1. Perform a digital rectal examination on the model and describe your findings.<br>2. What is the diagnosis?`,
 gray:"ให้หุ่น PR มา คลำ Prostate คลำแล้วแข็ง ๆ ทั่ว ๆ ใหญ่ ๆ · A. Describe DRE B. Dx",
 sp:"(จากไฟล์) หุ่นต่อมลูกหมาก: คลำแล้ว<b>แข็งทั่วทั้งต่อม และโต</b> · (Claude แต่งเพิ่ม) ผิวขรุขระเล็กน้อย median sulcus คลำไม่ได้ ไม่เจ็บ · ผู้คุมดู: อธิบาย ขออนุญาต chaperone ท่า left lateral ดู perianal ก่อน หล่อลื่น เข้านิ้วช้า ๆ ประเมิน sphincter tone คลำรอบ rectum และต่อมลูกหมาก ดูถุงมือ (เลือด/อุจจาระ)",
 flag:"ลักษณะหุ่นนอกจาก \"แข็ง ทั่ว ใหญ่\" Claude แต่ง",
 notes:"ต้นฉบับ: \"ให้หุ่น PR มา คลำ Prostate คลำแล้วแข็ง ๆ ทั่ว ๆ ใหญ่ ๆ\" · ไฟล์ Key 78C ช่องนี้ว่าง · OSCE 78A มีสถานี DRE บนหุ่นเช่นกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ต่อมแข็งทั่วทั้งต่อมและโต เข้าได้กับ carcinoma of prostate (locally advanced) ความมั่นใจปานกลาง",
 parts:S(
  B("1.1 Perform DRE and describe.",6,{tags:["pe"],ans:"<b>เตรียม</b>: อธิบาย ขออนุญาต chaperone ใส่ถุงมือ ท่า <b>left lateral (Sims)</b> เข่างอ · <b>Inspection</b> perianal (skin tag, fissure, hemorrhoid, fistula) · หล่อลื่น วางนิ้วที่ anal verge ให้ผู้ป่วยเบ่งเล็กน้อยแล้วสอดนิ้วช้า ๆ · <b>sphincter tone</b> · คลำผนัง rectum รอบทิศ (ก้อน) · <b>Prostate</b>: size, consistency, surface, median sulcus, nodule, tenderness · ถอนนิ้วดูถุงมือ (เลือด เมือก อุจจาระสี) · เช็ดทำความสะอาด · หุ่นนี้: <b>ต่อมโต แข็งทั่ว (hard) median sulcus หายไป</b>",exp:"Sims position: ผู้ป่วยนอนตะแคงซ้าย เข่างอชิดอก ช่วยให้ตรวจง่ายและผู้ป่วยสบาย",rubric:"ได้ตามขั้นตอน + บรรยายต่อม",
   pts:[H("Preparation",15),P("Consent, chaperone, left lateral position","chaperone","left lateral","sims","ขออนุญาต","ท่า"),H("Technique",40),P("Inspect perianal area","inspect","ดู","perianal"),P("Lubricate, gentle insertion, sphincter tone","lubric","หล่อลื่น","sphincter","tone"),P("Palpate rectal wall and check glove","glove","ถุงมือ","rectal wall"),H("Findings",45),CR(P("Enlarged, hard prostate; median sulcus lost","hard","แข็ง","enlarged","โต","sulcus"))]}),
  B("1.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Carcinoma of the prostate</b> (hard prostate) — ส่ง PSA, mpMRI, biopsy · DDx: BPH (โตแต่ rubbery เรียบ), chronic prostatitis, calculi",exp:"PSA &gt;4 ng/mL หรือ DRE ผิดปกติ → mpMRI → biopsy",rubric:"ได้ = prostate cancer",pts:[CR(P("Prostate cancer","carcinoma","cancer","มะเร็ง"))]})
 ),
 interp:"DRE บนหุ่น: ต่อมแข็งโต",
 summary:["DRE: left lateral, inspect, tone, prostate, glove","Hard = cancer; rubbery smooth = BPH","Abnormal DRE → PSA + MRI + biopsy"]}),

/* ===== OSCE 2 ===== */
Co({page:4,orig:"2",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a lesion of the penis",img:["os78c_2"],kimg:["os78c_k2"],
 stem:`A photograph of the penis of a 65-year-old man is shown.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"รูปจู้ · A. Dx B. Mx · ช่องเฉลย: \"a. Squamous cell carcinoma of penis b. Incisional biopsy for definitive diagnosis, penectomy with margin 2 cm and inguinal lymph node dissection\"",
 flag:"อายุ Claude เติม",
 notes:"รูปในไฟล์: ก้อนแผลขรุขระคล้ายดอกกะหล่ำที่องคชาต · เฉลยในไฟล์ Key 78C: SCC of penis; incisional biopsy, penectomy with margin 2 cm and inguinal lymph node dissection · ตรวจคีย์ 22 พ.ย. 2026: เดิมคำตอบ ‘partial/total penectomy with ~2-cm margin’ และ checklist ‘clear (2 cm) margin’ (คีย์ไฟล์ 2 cm ยังแสดงในช่องคีย์) → แก้เป็น ‘margin ปลอดเนื้องอก ยืนยัน frozen section ไม่ยึด 2 cm’ ตาม EAU–ASCO Penile Cancer Guidelines 2023 (Brouwer et al., Eur Urol 2023)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — เพิ่มเติม: ปัจจุบันยอมรับ margin เล็กกว่า 2 cm ได้ถ้า frozen section ปลอด (organ-sparing) และ inguinal node management ขึ้นกับ clinical node status/risk (DSNB/modified ILND ใน cN0 risk สูง) · ตรวจคีย์ (22 พ.ย. 2026): margin penectomy: EAU–ASCO 2023 เน้น tumour-free margin ไม่ต้อง 2 cm (เขียน ‘2 cm ตามตำราเดิม’ กำกับได้) · ความมั่นใจสูง",
 parts:S(
  B("2.1 Diagnosis.",1,{tags:["img"],key:KF+"Squamous cell carcinoma of penis",ans:"<b>Squamous cell carcinoma of the penis</b>",exp:"Risk: phimosis/uncircumcised, HPV 16/18, smoking",rubric:"ได้ = SCC penis",pts:[CR(P("Penile SCC","squamous","scc","carcinoma","cancer"))]}),
  B("2.2 Management.",5,{tags:["img"],key:KF+"Incisional biopsy for definitive diagnosis, penectomy with margin 2 cm and inguinal lymph node dissection",ans:"<b>Incisional biopsy</b> ยืนยันการวินิจฉัย · ประเมิน inguinal nodes (คลำ, US ± FNA) · Primary: <b>organ-sparing surgery</b> (รอยโรคเล็ก Tis–T1/T2 ที่ glans) หรือ <b>partial/total penectomy</b> ให้ได้ <b>margin ปลอดเนื้องอก</b> (ยืนยันด้วย frozen section) — EAU–ASCO 2023 ไม่กำหนดระยะตายตัว (margin เพียงไม่กี่ mm ก็พอถ้าปลอด); ตำราเดิม/คีย์ไฟล์ใช้ 2 cm · <b>Inguinal lymph node dissection</b> (cN+) หรือ DSNB/modified ILND (cN0 risk สูง) · advanced → chemotherapy",exp:"Organ-sparing surgery เหมาะกับ Tis–T1 ที่ glans; ต้อง follow up ใกล้ชิด",rubric:"ได้ = biopsy + penectomy margin + inguinal LND",
   pts:[CR(P("Incisional biopsy","biopsy")),CR(P("Penectomy/organ-sparing with tumour-free margin (เดิม 2 cm)","penectomy","margin","organ-sparing","glansectomy")),CR(P("Inguinal lymph node dissection","inguinal","lymph","lnd"))]})
 ),
 interp:"Penile SCC",
 summary:["Penile SCC: biopsy → penectomy/organ-sparing → inguinal nodes","Nodal status = prognosis","Phimosis/HPV risk"]}),

/* ===== OSCE 3 ===== */
Co({page:4,orig:"3",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — man with abdominal pain and fever for 6 hours",
 stem:`A 25-year-old man has abdominal pain and fever for 6 hours. Vital signs: temperature 38.0 °C, pulse 104/min, blood pressure 124/78 mmHg, respiratory rate 20/min. The examiner is observing.<br>1. Perform an abdominal examination, explaining why you perform each step and reporting your findings.`,
 gray:"ตรวจร่างกายคนไข้ชายที่มาด้วยปวดท้อง มีไข้ 6 ชม. มี vital sign มาให้ · A. ให้ perform ตรวจร่างกายพร้อมอธิบายว่าตรวจทำไม พร้อมบอกผล",
 sp:"(Claude แต่ง) ผู้ป่วยจำลองชาย 25 ปี ปวดรอบสะดือย้ายมาท้องน้อยขวา · ท้องไม่อืด bowel sound ลดลง · tenderness + guarding ที่ RLQ, rebound (+), Rovsing (+), psoas (+), Murphy (−), CVA tenderness (−), hernia/อัณฑะปกติ · ผู้คุมดู: เตรียม, ดู ฟัง เคาะ คลำ, อธิบายเหตุผลแต่ละขั้น, sign เฉพาะ, ตรวจ hernia/อัณฑะ, สรุปผล",
 flag:"สัญญาณชีพและผลตรวจในบทผู้ป่วยจำลอง Claude แต่ง",
 notes:"ต้นฉบับ: \"ตรวจร่างกายคนไข้ชายที่มาด้วยปวดท้อง มีไข้ 6 ชม. มี vital sign มาให้\" · ไม่มีเฉลย · คล้ายสถานี AC Subspe 78B (ตรวจร่างกาย acute appendicitis)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("3.1 Abdominal examination with explanation.",10,{tags:["pe"],ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ล้างมือ นอนหงาย เปิดหน้าท้องถึงขาหนีบ · <b>Inspection</b>: นอนนิ่ง (peritonitis) vs บิดตัว (colic), distension, scar, hernia · <b>Auscultation</b>: bowel sound (ลด = ileus/peritonitis; เพิ่ม high-pitched = obstruction) · <b>Percussion</b>: tenderness (peritoneal irritation), liver dullness หาย (free air), shifting dullness · <b>Palpation</b> จากจุดไม่เจ็บ: tenderness ตำแหน่ง, <b>guarding/rigidity, rebound</b> (peritonitis), mass, organomegaly · Special signs: <b>McBurney, Rovsing, psoas, obturator</b> (appendicitis), <b>Murphy</b> (cholecystitis), <b>CVA tenderness</b> (pyelonephritis/stone) · ตรวจ <b>hernia orifices, external genitalia</b> · เสนอ DRE · <b>สรุปผล</b>: localized peritonitis RLQ → acute appendicitis",exp:"การอธิบายเหตุผลระหว่างตรวจแสดงความเข้าใจทางคลินิก",rubric:"ได้ตามหมวด + อธิบายเหตุผล + สรุป",
   pts:[H("Preparation",10),P("Introduce, consent, hand hygiene, exposure","แนะนำ","ขออนุญาต","ล้างมือ","expose"),H("Inspection/auscultation/percussion",25),P("Inspection","inspect","ดู"),P("Auscultation bowel sounds","bowel sound","ฟัง","ausculta"),P("Percussion tenderness/liver dullness","percuss","เคาะ","dullness"),H("Palpation",35),CR(P("Palpation from non-tender area; guarding, rebound","guarding","rebound","คลำ","palpat")),P("McBurney/Rovsing/psoas/obturator","mcburney","rovsing","psoas","obturator"),P("Murphy sign/CVA tenderness","murphy","cva","costovertebral"),H("Completion",30),P("Hernia orifices and genitalia","hernia","อัณฑะ","genital","testis"),P("Explain the purpose of each step","อธิบาย","explain","เพราะ","เพื่อ"),CR(P("Summary of findings and provisional diagnosis","สรุป","summary","appendicitis","peritonitis"))]})
 ),
 interp:"ตรวจท้องผู้ป่วยปวดท้องมีไข้ พร้อมอธิบาย",
 summary:["Peritonitis: นอนนิ่ง, guarding, rebound, rigidity","Appendicitis signs: McBurney, Rovsing, psoas, obturator","Murphy = cholecystitis; CVA = kidney","ตรวจ hernia และอัณฑะเสมอ"]}),

/* ===== OSCE 4 ===== */
Co({page:4,orig:"4",topic:"path",sub:"Order writing",title:"Orders — corrosive (Vixol) ingestion 30 minutes ago",kimg:["os78c_k4"],
 stem:`A 35-year-old woman drank a hydrochloric acid toilet cleaner (Vixol) 30 minutes ago. She has epigastric pain, and a photograph of her mouth shows red, inflamed oral mucosa. She has no stridor and her vital signs are stable.<br>1. You are the emergency physician. Write your orders.`,
 gray:"กิน vixol มา 30 นาที ให้รูปมา มี Epigastric pain, oral mucosa แดง · A. เราเป็นหมอใน ER จะสั่งอะไรบ้าง ให้เขียน · ช่องเฉลย: \"- NPO - Ringer lactate 1000 mL, IV rate 80 mL/hr - Continuous V/S monitoring - Retain foley catheter - Acute abdomen series - Plan EGD in 12-24 hr - If stridor, please notify\"",
 flag:NOIMG+" · อายุ เพศ สัญญาณชีพ Claude แต่ง",imgAlt:"เยื่อบุช่องปากแดงอักเสบ",
 notes:"เฉลยในไฟล์ Key 78C: NPO · Ringer lactate 1000 mL IV rate 80 mL/hr · Continuous V/S monitoring · Retain foley catheter · Acute abdomen series · Plan EGD in 12–24 hr · If stridor, please notify · ไม่มีรูปในไฟล์ · OSCE 78A มีสถานีเดียวกัน (เป็ดโปร)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — เพิ่ม: ห้ามกระตุ้นอาเจียน/ห้าม neutralize/ห้าม blind NG, PPI IV, lab (CBC, electrolytes, ABG/lactate) และ consult surgery ถ้ามี free air/peritonitis",
 parts:S(
  B("4.1 ER orders.",8,{tags:["path"],key:KF+"NPO · Ringer lactate 1000 mL, IV rate 80 mL/hr · Continuous V/S monitoring · Retain foley catheter · Acute abdomen series · Plan EGD in 12–24 hr · If stridor, please notify",ans:"<b>NPO</b> · <b>ห้ามกระตุ้นอาเจียน ห้าม neutralize ห้าม charcoal ห้ามใส่ NG แบบ blind</b> · <b>Ringer's lactate 1,000 mL IV rate 80 mL/hr</b> · <b>Continuous V/S monitoring</b> · <b>Retain Foley catheter</b> (record urine output) · <b>Acute abdomen series</b> (upright CXR — free air) · <b>Plan EGD in 12–24 hr</b> · <b>If stridor/hoarseness, please notify</b> (airway) · PPI IV, analgesic · lab: CBC, electrolytes, BUN/Cr, ABG/lactate, G/M · ถ้ามี peritonitis/free air → CT + consult surgery",exp:"Acid → coagulation necrosis ทำลายกระเพาะ; EGD 12–24 ชม. grading Zargar; หลีกเลี่ยงส่องวันที่ 5–15 (perforation)",rubric:"ได้ตามรายการในเฉลยไฟล์ + ข้อห้าม",
   pts:[H("General",30),CR(P("NPO","npo","งดน้ำ","งดอาหาร")),P("No induced vomiting / no neutralization / no blind NG","ห้ามอาเจียน","no emesis","neutraliz","ห้ามกระตุ้น","no ng"),P("IV Ringer's lactate","ringer","lactate","iv fluid","fluid"),H("Monitoring",25),P("Continuous V/S monitoring","v/s","vital","monitor"),P("Foley catheter / urine output","foley","urine output","catheter"),P("Notify if stridor","stridor","airway","notify"),H("Investigation/plan",45),P("Acute abdomen series","acute abdomen","cxr","x-ray","free air"),CR(P("Plan EGD in 12–24 hr","egd","endoscop","ส่องกล้อง")),P("PPI/labs","ppi","omeprazole","cbc","electrolyte","abg")]})
 ),
 interp:"Order ผู้ป่วยกินกรด",
 summary:["NPO, ห้าม induce vomiting/neutralize/blind NG","IV fluid, monitor, Foley","AAS หา perforation","EGD 12–24 ชม.","Stridor → secure airway"]}),

/* ===== OSCE 5 ===== */
Co({page:5,orig:"5",topic:"hx",sub:"Breast mass",ex:1,title:"History taking — breast lump for 3 months",
 stem:`A 48-year-old woman presents with a lump in her breast for 3 months. The examiner is observing.<br>1. Take a focused history and give your provisional diagnosis.`,
 gray:"ซักประวัติ Breast ก้อนที่เต้านม 3 months · A.",
 sp:"(Claude แต่ง) หญิง 48 ปี คลำพบก้อนเต้านมซ้าย 3 เดือน ไม่เจ็บ โตขึ้นเล็กน้อย ไม่สัมพันธ์กับรอบเดือน · ไม่มี nipple discharge, หัวนมไม่บุ๋ม, ผิวไม่เปลี่ยน, คลำได้ก้อนเล็กที่รักแร้ซ้าย · น้ำหนักไม่ลด ไม่ปวดกระดูก ไม่ไอ · menarche 11 ปี ยังมีประจำเดือน ไม่มีบุตร ใช้ยาคุม 5 ปี · พี่สาวเป็นมะเร็งเต้านมอายุ 45 · ดื่มสุราสัปดาห์ละ 3–4 ครั้ง · ผู้คุมดู: CC, ลักษณะก้อน, อาการเฉพาะที่, metastasis, risk factors, PMH, สรุป",
 flag:"บทผู้ป่วยจำลองทั้งหมด Claude แต่ง",
 notes:"ต้นฉบับ: \"ซักประวัติ Breast ก้อนที่เต้านม 3 months\" · ไฟล์ Key 78C ช่องนี้ว่าง · AC Subspe 78B มีสถานีซักประวัติก้อนเต้านมเช่นกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("5.1 Focused history and provisional diagnosis.",10,{tags:["hx"],ans:"<b>เริ่ม</b>: แนะนำตัว ยืนยันตัวตน ขออนุญาต · <b>ก้อน</b>: ระยะเวลา ตำแหน่ง ขนาด/การเปลี่ยนแปลง เจ็บ สัมพันธ์กับรอบเดือน · <b>อาการเฉพาะที่</b>: nipple discharge/retraction, ผิวเปลี่ยน, ก้อนรักแร้ · <b>Metastasis/constitutional</b>: น้ำหนักลด ปวดกระดูก ไอ เหนื่อย ปวดท้อง/ตัวเหลือง ปวดหัว · <b>Risk factors</b>: menarche, menopause, parity/อายุมีบุตรคนแรก, ให้นมบุตร, ยาคุม/HRT, ประวัติครอบครัว (breast/ovary/BRCA), radiation, ก้อนเต้านมเดิม, alcohol · <b>PMH, ยา, แพ้ยา</b> · <b>สรุป + DDx</b>: carcinoma of breast (± axillary node) vs fibroadenoma, fibrocystic, cyst",exp:"Male breast cancer และ breast cancer ในหญิงตั้งครรภ์ควรถามด้วยเมื่อเกี่ยวข้อง",rubric:"ได้ตามหมวด",
   pts:[H("Opening",5),P("Introduce, consent","แนะนำ","ขออนุญาต","consent"),H("Lump",25),CR(P("Duration, size change, pain, cyclical","ระยะเวลา","duration","ขนาด","size","pain","เจ็บ","รอบเดือน")),P("Nipple/skin change, axillary lump","nipple","หัวนม","skin","ผิว","รักแร้","axilla"),H("Metastasis",20),CR(P("Weight loss, bone pain, cough, jaundice","น้ำหนัก","weight","bone","กระดูก","cough","ไอ","jaundice")),H("Risk factors",35),CR(P("Family history","family","ครอบครัว","พี่","มารดา","brca")),P("Reproductive history","menarche","ประจำเดือน","บุตร","parity","ให้นม"),P("Hormones/alcohol/radiation","ยาคุม","ocp","hrt","alcohol","สุรา","radiation"),H("Summary",15),CR(P("Summary + provisional diagnosis","สรุป","summary","cancer","มะเร็ง"))]})
 ),
 interp:"ซักประวัติก้อนเต้านม",
 summary:["ก้อน + อาการเฉพาะที่ + metastasis + risk factors","Risk: family/BRCA, nulliparity, early menarche, HRT, alcohol","Triple assessment"]}),

/* ===== OSCE 6 ===== */
Co({page:5,orig:"6",topic:"suture",sub:"Suture material",title:"Operation and suture choice — bowel perforated by a foreign body",kimg:["os78c_k6"],
 stem:`A man with abdominal pain is found at operation to have a small-bowel perforation caused by a sharp foreign body. A picture of the operation shows the abdomen opened and the bowel being sutured. Vicryl, silk, PDS and nylon are provided.<br>1. Name the operation.<br>2. Which suture would you choose for the bowel anastomosis?`,
 gray:"คนไข้ปวดท้อง ให้รูป Operation เย็บไส้มา เพราะไส้แตกจากการโดนเสี้ยนตำ ให้ไหมมา เลือกใช้ · A. Operation อะไร B. vicryl silk PDS nylon · ช่องเฉลย: \"1. Exploration laparotomy with bowel anastomosis 2. PDS for bowel anastomosis\"",
 flag:NOIMG+" · ชนิดลำไส้ Claude เติม",imgAlt:"ภาพผ่าตัดเปิดหน้าท้อง เย็บซ่อม/ต่อลำไส้",
 notes:"ผู้จดเขียน \"ไส้แตกจากการโดนเสี้ยนตำ\" (ลำไส้ทะลุจากวัตถุแหลม) · เฉลยในไฟล์ Key 78C: 1. Exploration laparotomy with bowel anastomosis 2. PDS for bowel anastomosis · AC Subspe 78B มีสถานีคล้ายกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — Vicryl ก็เป็นไหม absorbable ที่ใช้ต่อลำไส้ได้เช่นกัน; silk ใช้เป็นชั้น seromuscular; nylon ไม่ใช้ต่อลำไส้",
 parts:S(
  B("6.1 Name the operation.",2,{tags:["suture"],key:KF+"Exploration laparotomy with bowel anastomosis",ans:"<b>Exploratory laparotomy with bowel repair/resection and anastomosis</b> (ถ้ารูทะลุเล็ก ขอบดี → primary repair; ถ้าเนื้อตาย/หลายรู → segmental resection + anastomosis) + เอาสิ่งแปลกปลอมออก + ล้างช่องท้อง",exp:"Primary repair เหมาะกับรูทะลุเล็กขอบดีที่ไม่เกินครึ่งเส้นรอบวง; มิฉะนั้น resection + anastomosis",rubric:"ได้ = exploratory laparotomy + bowel anastomosis",pts:[CR(P("Exploratory laparotomy with bowel anastomosis","laparotomy","explor","anastomosis"))]}),
  B("6.2 Suture for anastomosis.",2,{tags:["suture"],key:KF+"PDS for bowel anastomosis",ans:"<b>PDS (polydioxanone)</b> — absorbable monofilament คงความแข็งแรงนาน (~6 สัปดาห์) ติดเชื้อน้อย · Vicryl ใช้ได้เช่นกัน · ไม่เลือก nylon (non-absorbable, ทำให้เกิด stricture/focus) · silk ใช้เป็นชั้น seromuscular (Lembert) ใน two-layer anastomosis",exp:"Two-layer anastomosis: inner full-thickness absorbable + outer seromuscular (Lembert) silk",rubric:"ได้ = PDS (หรือ Vicryl)",pts:[CR(P("PDS (or Vicryl)","pds","polydioxanone","vicryl"))]})
 ),
 interp:"Bowel perforation → laparotomy + anastomosis ด้วยไหม absorbable",
 summary:["Bowel anastomosis: PDS/Vicryl","Silk: seromuscular layer","Nylon: skin","Fascia: loop PDS"]}),

/* ===== OSCE 7 ===== */
Co({page:5,orig:"7",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and use five items",kimg:["os78c_k7a","os78c_k7b"],
 stem:`Five items are provided: a towel clip, curved Metzenbaum scissors, an Army–Navy retractor, Allis tissue forceps and a hernia mesh.<br>1. Name each item.<br>2. State what each is used for.`,
 gray:"ให้เครื่องมือ (Towel clip, Curved metsenbaun, Army navy retractor, Allis tissue forceps, Hernia mesh) · A. ชื่อ B. ทำอะไร · ช่องเฉลย: \"1. Towel clip - clip sterile towel 2. Curved metzenbaum - cut delicate tissue 3. Army navy retractor - retract tissue in minor surgery 4. Allis tissue forceps - hold dense fascia 5. Hernia mesh - hernioplasty\"",
 notes:"เฉลยในไฟล์ Key 78C ครบ 5 ชิ้น (ข้ามหน้า 2–3) · Stem บอกชื่ออุปกรณ์ตามที่ผู้จดจำ (ข้อสอบให้ของจริง)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 imgAlt:"เครื่องมือ 5 ชิ้นบนโต๊ะ",
 parts:S(
  B("7.1 Name each item.",5,{tags:["inst"],key:KF+"Towel clip · Curved Metzenbaum · Army navy retractor · Allis tissue forceps · Hernia mesh",ans:"<b>Towel clip</b> (Backhaus) · <b>Curved Metzenbaum scissors</b> · <b>Army–Navy retractor</b> · <b>Allis tissue forceps</b> · <b>Hernia mesh</b> (polypropylene)",exp:"Backhaus towel clip มีปลายแหลมเกี่ยวผ้า; บางแบบ non-penetrating",rubric:"1 คะแนนต่อชื่อ",
   pts:[P("Towel clip","towel"),P("Metzenbaum scissors","metzenbaum","metz"),P("Army–Navy retractor","army","navy"),P("Allis forceps","allis"),P("Hernia mesh","mesh")]}),
  B("7.2 Use of each.",5,{tags:["inst"],key:KF+"clip sterile towel · cut delicate tissue · retract tissue in minor surgery · hold dense fascia · hernioplasty",ans:"Towel clip — <b>ยึดผ้าปูปราศจากเชื้อ</b> (และสายต่าง ๆ) · Metzenbaum — <b>ตัด/เลาะเนื้อเยื่อบาง</b> (delicate dissection) · Army–Navy — <b>แหวกแผลตื้น</b> (minor surgery, hernia) · Allis — <b>จับเนื้อเยื่อหนา/fascia</b> หรือเนื้อเยื่อที่จะตัดทิ้ง (มีฟันเล็ก ๆ — traumatic) · Hernia mesh — <b>hernioplasty</b> (tension-free repair)",exp:"Babcock (atraumatic) ใช้จับลำไส้แทน Allis",rubric:"1 คะแนนต่อการใช้",
   pts:[P("Towel clip: secure drapes","drape","ผ้า","towel"),P("Metzenbaum: cut delicate tissue","delicate","บาง","dissect"),P("Army–Navy: retract in minor surgery","retract","แหวก"),P("Allis: hold dense fascia","fascia","hold","จับ"),P("Mesh: hernioplasty","hernio","hernia","ไส้เลื่อน")]})
 ),
 interp:"Spot เครื่องมือผ่าตัด 5 ชิ้น",
 summary:["Towel clip: ยึดผ้า","Metzenbaum: เนื้อบาง; Mayo: เนื้อหนา","Army–Navy: แผลตื้น","Allis: fascia (มีฟัน); Babcock: ลำไส้ (ไม่มีฟัน)","Mesh: hernioplasty"]}),

/* ===== OSCE 8 ===== */
Co({page:5,orig:"8",topic:"img",sub:"CXR",title:"Chest radiograph — a trauma patient in respiratory distress",kimg:["os78c_k8"],
 stem:`A man is brought in after a car crash with injuries to the chest and abdomen only. He is in respiratory distress. Blood pressure is 80/50 mmHg and pulse 128/min. A chest radiograph is shown, with a large left pneumothorax.<br>1. What is the diagnosis?<br>2. How would you manage him?`,
 gray:"คนไข้อุบัติเหตุรถชน โดนอกกับท้องเท่านั้น ให้ Film pneumothorax มา คนไข้ distress ให้ vital sign80/50 หนักเหี้ย ๆ อ่าน film ให้แล้ว · A. Dx B. Mx · ช่องเฉลย: \"a. Pneumothorax b. Ringer lactate 2 L bolus IV for fluid resuscitation, ICD placement\"",
 flag:NOIMG+" · ข้างของ pneumothorax และชีพจร Claude เติม",imgAlt:"CXR เห็น pneumothorax ขนาดใหญ่ข้างซ้าย",
 notes:"ผู้จดเขียนว่า \"อ่าน film ให้แล้ว\" (โจทย์บอกว่าเป็น pneumothorax) · เฉลยในไฟล์ Key 78C: a. Pneumothorax b. Ringer lactate 2 L bolus IV for fluid resuscitation, ICD placement · ไม่มีรูปในไฟล์",
 opinion:"เห็นด้วยกับเฉลยในไฟล์บางส่วน ความมั่นใจปานกลาง-สูง — ผู้ป่วย distress + hypotension + pneumothorax = <b>tension pneumothorax</b> ต้อง<b>decompress ทันที</b> (needle/finger thoracostomy) ก่อนหรือพร้อม ICD; ATLS 10th ปัจจุบันให้ crystalloid เริ่มต้น 1 L (เด็ก 20 mL/kg) แล้วพิจารณาเลือด ไม่ใช่ 2 L; ต้องหาแหล่งเลือดออกในท้องด้วย (FAST)",
 parts:S(
  B("8.1 Diagnosis.",2,{tags:["img"],key:KF+"Pneumothorax",ans:"<b>(Tension) pneumothorax</b> ซ้าย จาก blunt chest trauma ± hemorrhagic shock จาก intra-abdominal injury",exp:"Tension: distress + hypotension + tracheal deviation + absent breath sounds + distended neck veins (อาจไม่เห็นถ้าเสียเลือด)",rubric:"ได้ = pneumothorax (tension)",pts:[CR(P("(Tension) pneumothorax","pneumothorax","tension"))]}),
  B("8.2 Management.",5,{tags:["img"],key:KF+"Ringer lactate 2 L bolus IV for fluid resuscitation, ICD placement",ans:"ATLS primary survey · <b>A</b>: airway + C-spine, O2 high flow · <b>B</b>: <b>immediate decompression</b> — needle decompression (4th–5th ICS anterior to mid-axillary line ในผู้ใหญ่ หรือ 2nd ICS MCL) หรือ finger thoracostomy → <b>ICD (chest tube) placement</b> · <b>C</b>: 2 large-bore IV, <b>crystalloid bolus (RL)</b> 1 L ผู้ใหญ่ (เฉลยไฟล์ 2 L ตาม ATLS ฉบับเก่า) → <b>early blood transfusion</b> ถ้าไม่ตอบสนอง · หาแหล่งเลือดออก: <b>FAST/eFAST</b>, pelvis · ไม่ตอบสนอง + FAST บวก → laparotomy",exp:"ATLS 10th: crystalloid 1 L ผู้ใหญ่ (20 mL/kg เด็ก) แล้วพิจารณา blood products; massive transfusion 1:1:1",rubric:"ได้ = decompression/ICD + fluid resuscitation + หาแหล่งเลือดออก",
   pts:[P("Airway + oxygen","oxygen","o2","airway"),CR(P("Immediate decompression then ICD","needle","decompress","finger","icd","chest tube","thoracostomy")),CR(P("IV fluid resuscitation (RL) ± blood","ringer","lactate","fluid","crystalloid","blood","เลือด")),P("FAST for abdominal bleeding","fast","ultrasound","abdomen")]})
 ),
 interp:"Chest trauma + shock + pneumothorax",
 summary:["Tension PTX = clinical → decompress ทันที ไม่รอ CXR","Needle site ATLS 10th: 4th–5th ICS anterior to MAL (ผู้ใหญ่)","ICD หลัง decompression","Shock ใน trauma ส่วนใหญ่ = hemorrhage → FAST, blood","Crystalloid 1 L แล้วพิจารณาเลือด"]}),

/* ===== OSCE 9 ===== */
Co({page:5,orig:"9",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — rapidly spreading infection of the leg",kimg:["os78c_k9"],
 stem:`A photograph shows the leg of a 55-year-old diabetic man with fever and severe pain out of proportion to the findings. The skin is dusky with bullae, and there is crepitus.<br>1. What is the diagnosis?<br>2. How would you manage it?`,
 gray:"ให้รูป NF มา · A. Dx B. Mx · ช่องเฉลย: \"a. Necrotizing fasciitis b. Serial and aggressive debridement\"",
 flag:NOIMG+" · ประวัติและการบรรยายภาพ Claude แต่ง",imgAlt:"ขามีผิวคล้ำ ตุ่มน้ำ บวมแดงลามกว้าง",
 notes:"ต้นฉบับ: \"ให้รูป NF มา\" · เฉลยในไฟล์ Key 78C: a. Necrotizing fasciitis b. Serial and aggressive debridement · ไม่มีรูปในไฟล์",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — เพิ่ม resuscitation และ broad-spectrum IV antibiotics ร่วมด้วยเสมอ",
 parts:S(
  B("9.1 Diagnosis.",1,{tags:["img"],key:KF+"Necrotizing fasciitis",ans:"<b>Necrotizing fasciitis</b>",exp:"Type I polymicrobial (DM), type II group A Strep, type III Vibrio vulnificus (น้ำทะเล/อาหารทะเล — พบในไทย), Clostridium",rubric:"ได้ = necrotizing fasciitis",pts:[CR(P("Necrotizing fasciitis","necrotizing","fasciitis","\\bnf\\b"))]}),
  B("9.2 Management.",4,{tags:["img"],key:KF+"Serial and aggressive debridement",ans:"<b>Resuscitation</b> + ICU · <b>broad-spectrum IV antibiotics</b> (carbapenem/piperacillin-tazobactam + <b>clindamycin</b> ± vancomycin; ถ้าสงสัย Vibrio + doxycycline/ceftazidime) · <b>emergency radical surgical debridement</b> ถึงเนื้อเยื่อปกติ + <b>second-look/serial debridement ทุก 24–48 ชม.</b> · amputation ถ้าจำเป็นเพื่อรักษาชีวิต · ส่ง tissue culture · ควบคุมน้ำตาล · reconstruction ภายหลัง",exp:"Finger test, LRINEC ช่วยวินิจฉัย แต่ห้ามรอ imaging",rubric:"ได้ = serial aggressive debridement + IV ATB + resuscitation",
   pts:[P("Resuscitation/ICU","resusc","icu","fluid"),CR(P("Broad-spectrum IV antibiotics incl. clindamycin","antibiotic","atb","clindamycin","carbapenem","piperacillin")),CR(P("Emergency, serial, aggressive debridement","debride","excision","ผ่าตัด")),P("Amputation if needed / reconstruction later","amputat","graft","flap")]})
 ),
 interp:"Necrotizing fasciitis: surgical emergency",
 summary:["Pain out of proportion, bullae, crepitus, rapid spread, systemic toxicity","Clinical diagnosis — ห้ามรอ imaging","Debridement เร็ว + serial","Clindamycin ยับยั้ง toxin","Vibrio vulnificus ในผู้ป่วยตับแข็ง/สัมผัสน้ำทะเล"]}),

/* ===== OSCE 10 ===== */
Co({page:5,orig:"10",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Procedure — sterile gloving, preparation, draping and local anesthetic injection",
 stem:`A simulated arm, sterile gloves, antiseptic, sterile drapes, a syringe, needles and 1% lidocaine are provided. The examiner is observing.<br>1. Put on sterile gloves.<br>2. Prepare the skin with antiseptic and drape the area.<br>3. Draw up the local anesthetic, expel air, and infiltrate the simulated arm.`,
 gray:"ใส่ถุงมือ sterile + ฉีดยาชา ปูผ้าทายาแล้ว ดูดอากาศฉีดแขนปลอม",
 sp:"(Claude แต่ง) แขนปลอมสำหรับฉีด · ถุงมือ sterile, povidone-iodine/chlorhexidine, ผ้าเจาะกลาง, syringe 5–10 mL, เข็มใหญ่สำหรับดูดยา + เข็มเล็ก (25–27G) สำหรับฉีด, 1% lidocaine · ผู้คุมดู: ใส่ถุงมือไม่ปนเปื้อน, ทาน้ำยาจากในออกนอก, ปูผ้าไม่ปนเปื้อน, ตรวจยา/ความเข้มข้น/วันหมดอายุ, ไล่อากาศ, เปลี่ยนเข็ม, aspirate ก่อนฉีด, ฉีดช้า ๆ, ไม่เกิน max dose",
 flag:"รายละเอียดอุปกรณ์ Claude แต่ง",
 notes:"ต้นฉบับ: \"ใส่ถุงมือ sterile + ฉีดยาชา ปูผ้าทายาแล้ว ดูดอากาศฉีดแขนปลอม\" · ไฟล์ Key 78C ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("10.1 Sterile gloving.",3,{tags:["proc"],ans:"ล้างมือ · ตรวจซอง · มือเปล่าแตะ<b>ด้านในของขอบพับ</b>ข้างแรก · มือที่ใส่แล้ว<b>สอดใต้ขอบพับ</b>ข้างที่สอง · มือเหนือเอว",exp:"ใช้ร่วมกับ chlorhexidine หรือ povidone ล้างมือแบบ surgical scrub ก่อนผ่าตัดใหญ่",rubric:"ได้ = ไม่ปนเปื้อน",pts:[CR(P("Aseptic gloving technique","ด้านใน","inside","ใต้ขอบ","under the cuff","sterile glove"))]}),
  B("10.2 Skin preparation and draping.",3,{tags:["proc"],ans:"ทา <b>antiseptic</b> (chlorhexidine-alcohol หรือ povidone-iodine) <b>จากจุดที่จะทำเป็นวงออกด้านนอก</b> (ไม่ย้อนกลับ) 2–3 รอบ รอแห้ง · <b>ปูผ้า sterile</b> (ผ้าเจาะกลาง) ให้จุดที่จะฉีดอยู่กลาง ไม่ให้มือแตะส่วนไม่ sterile",exp:"Povidone-iodine ต้องรอแห้ง ~2 นาทีจึงออกฤทธิ์",rubric:"ได้ = ทาจากในออกนอก + ปูผ้าถูก",
   pts:[CR(P("Antiseptic from center outward","ในออกนอก","center","outward","วงออก","circular")),P("Sterile drape","drape","ผ้า")]}),
  B("10.3 Draw up, expel air and infiltrate.",4,{tags:["proc"],ans:"ตรวจชื่อยา ความเข้มข้น (1% lidocaine = 10 mg/mL) วันหมดอายุ · ดูดยาด้วยเข็มใหญ่ · <b>ไล่อากาศออก</b> · <b>เปลี่ยนเป็นเข็มเล็ก (25–27G)</b> · แทงเข็มทำมุมตื้น ทำ skin wheal · <b>aspirate ก่อนฉีดทุกครั้ง</b> (ไม่ฉีดเข้าหลอดเลือด) · ฉีดช้า ๆ ขณะถอยเข็ม · คำนวณ <b>max dose: lidocaine 4.5 mg/kg (≤300 mg); with adrenaline 7 mg/kg (≤500 mg)</b> · รอ 2–5 นาทีแล้วทดสอบชา · ทิ้งเข็มลง sharps",exp:"LAST (local anesthetic systemic toxicity): ชารอบปาก หูอื้อ ชัก arrhythmia → lipid emulsion 20%",rubric:"ได้ = ไล่อากาศ + เปลี่ยนเข็มเล็ก + aspirate + max dose",
   pts:[P("Check drug/concentration","check","ตรวจ","concentration","1%"),CR(P("Expel air","ไล่อากาศ","expel","air")),P("Change to small needle","เข็มเล็ก","small needle","25","27"),CR(P("Aspirate before injecting","aspirat","ดูดกลับ")),P("Max dose lidocaine 4.5 mg/kg","4.5","max","300 mg"),P("Sharps disposal","sharps","ทิ้งเข็ม")]})
 ),
 interp:"ใส่ถุงมือ sterile, prep/drape, ฉีดยาชาเฉพาะที่",
 summary:["Antiseptic จากในออกนอก รอแห้ง","Lidocaine max 4.5 mg/kg (7 mg/kg กับ adrenaline)","Aspirate ก่อนฉีด","LAST → lipid emulsion"]}),

/* ===== OSCE 11 ===== */
Co({page:6,orig:"11",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — one simple interrupted and one vertical mattress suture",
 stem:`A skin-suturing pad and instruments are provided. The examiner is observing.<br>1. Place one simple interrupted suture and one vertical mattress suture.`,
 gray:"เย็บด้าย 1 simple suture 1 Vertical",
 sp:"(Claude แต่ง) หุ่นผิวหนังมีแผล · nylon 3-0, needle holder, toothed forceps, scissors · ผู้คุมดู: เทคนิค simple interrupted และ vertical mattress (far–far, near–near), eversion, square knot",
 flag:"รายละเอียดอุปกรณ์ Claude แต่ง",
 notes:"ต้นฉบับ: \"เย็บด้าย 1 simple suture 1 Vertical\" · ไฟล์ Key 78C ช่องนี้ว่าง · AC Subspe 78B มีสถานีเดียวกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("11.1 Simple interrupted and vertical mattress sutures.",10,{tags:["proc"],ans:"<b>Simple interrupted</b>: จับเข็ม 2/3 จากปลาย แทงตั้งฉาก ระยะ = ความลึก สองฝั่งเท่ากัน ขอบ evert · instrument tie square knot · ตัดไหม ~5 mm · <b>Vertical mattress</b>: <b>far–far</b> (ห่างขอบ 5–8 mm ลึก) แล้ว <b>near–near</b> (1–2 mm ตื้น) ย้อนกลับในระนาบเดียวกัน · ผูกปมด้านเดียว · eversion ดี",exp:"Vertical mattress ช่วยในบริเวณผิวบางที่ขอบแผลพับเข้า เช่น คอ หลังมือ",rubric:"ได้ = เทคนิคทั้งสองถูกต้อง",
   pts:[H("Simple interrupted",40),CR(P("Correct needle handling and equal perpendicular bites","2/3","needle holder","ตั้งฉาก","perpendicular","เท่ากัน")),P("Square knot","square","surgeon"),H("Vertical mattress",60),CR(P("Far–far then near–near","far","near","ไกล","ใกล้")),P("Edge eversion, knot on one side","evert","ปลิ้น","ด้านเดียว")]})
 ),
 interp:"เย็บ simple และ vertical mattress",
 summary:["Simple: ระยะ = ความลึก","Vertical mattress: far-far, near-near","Eversion ช่วยให้แผลหายเรียบ"]}),

/* ===== OSCE 12 ===== */
Co({page:6,orig:"12",topic:"inst",sub:"Tube/Catheter",title:"Devices — choose the device for each purpose after trauma",kimg:["os78c_k12"],
 stem:`A trauma patient is admitted after laparotomy. Seven devices labelled A–G are displayed: A nasogastric tube, B one-way Foley catheter, C two-way Foley catheter, D Jackson–Pratt drain, E Redivac drain, F chest drain, G colostomy bag.<br>For each purpose, give the letter and name of the device:<br>(a) drain air and fluid from the gastrointestinal tract<br>(b) monitor urine output<br>(c) collect stool after the operation`,
 gray:"คนไข้อุบัติเหตุ ถามว่าอุปกรณ์อะไรไว้ · A. เลือกตัวอักษร B. บอกชื่ออุปกรณ์ - ระบายอากาศกับ fluid ในทางเดินอาหาร - ดู urine output - เก็บอุจจาระหลังผ่าใน · A. NG B. One-way foley C. Two-way foley D. Jackson drainage E. Redivac drainage F. Chest drain G. Colostomy bag · ช่องเฉลย: \"a. ระบายอาหารกับ fluid - NG b. Urine output - two way foley catheter c. เก็บอุจจาระหลังผ่า - ostomy bag\"",
 flag:"บริบท \"หลังผ่าตัด laparotomy\" Claude เติม",
 notes:"ต้นฉบับให้รายการอุปกรณ์ A–G และงาน 3 อย่าง · เฉลยในไฟล์ Key 78C: a. NG b. two way foley catheter c. ostomy bag",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 imgAlt:"อุปกรณ์ 7 ชิ้นติดป้าย A–G",
 parts:S(
  B("12.1 Choose the device (letter and name).",6,{tags:["inst"],key:KF+"a. NG · b. two way foley catheter · c. ostomy bag",ans:"(a) <b>A — nasogastric tube</b> (gastric decompression) · (b) <b>C — two-way Foley catheter</b> (ต่อถุงวัด urine output ทุกชั่วโมง; one-way ไม่มี balloon ใช้สวนครั้งเดียว) · (c) <b>G — colostomy bag (ostomy pouch)</b>",exp:"Jackson–Pratt = closed suction drain (bulb) · Redivac = high-vacuum closed drain · chest drain = ICD",rubric:"2 คะแนนต่องาน (ตัวอักษร + ชื่อ)",
   pts:[CR(P("(a) A nasogastric tube","\\ba\\b","ng","nasogastric")),CR(P("(b) C two-way Foley","\\bc\\b","two-way","two way","2-way","foley")),CR(P("(c) G colostomy bag","\\bg\\b","colostomy","ostomy","bag"))]})
 ),
 interp:"เลือกอุปกรณ์ตามวัตถุประสงค์",
 summary:["NG: decompression ทางเดินอาหาร","Foley 2-way: urine output","One-way (straight) catheter: สวนครั้งเดียว","JP/Redivac: closed suction drains","Ostomy bag: เก็บอุจจาระจาก stoma"]})
);
})();
