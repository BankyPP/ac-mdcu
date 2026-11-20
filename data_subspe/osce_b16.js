(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC77 MEQ OSCE Sx Rotate A" → MDCU77 RoA (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO77AQ = AC_77A_Sx_OSCE_MEQ.pdf (22 หน้า) · หน้า 1–13 พาร์ท "MEQ" ข้อ 1–15 (สไลด์รูปถามตอบสั้น) → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot)
   หน้า 14–22 พาร์ท "OSCE" ข้อ 1–12 · ข้อ 13 = ข้อพัก ("มีโอเล่ให้กิน") → ข้าม
   ไฟล์เฉลย SO77AK = Key_OSCE_77_RoA_Sx.pdf (3 หน้า, by MDCU78) — มีเฉพาะพาร์ท OSCE: ข้อ 1, 3, 4, 6, 7, 8, 11, 12 (ครอปเป็น os77a_ko*) · ไม่มีเฉลย MEQ
   รูปโจทย์ os77a_m<n> (MEQ) / os77a_o<n> (OSCE) · ชุดเครื่องมือ/ไหมทำเป็นภาพรวมมีตัวอักษรตามไฟล์ */
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
const KF="ไฟล์ Key 77A: ";
const NM="ไฟล์ Key 77A ไม่มีเฉลยพาร์ท MEQ";
const Co=o=>Object.assign({set:"MDCU77",ro:"RoA",file:"SO77AQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== MEQ 1 ===== */
SA({page:1,orig:"MEQ 1",num:"SA 1",sub:"Imaging film",title:"Spot — head injury with deterioration after a lucid interval",img:["os77a_m1"],
 stem:`A 25-year-old man was hit by a motorcycle and lost consciousness for 5 minutes. He then woke up and talked normally, but later deteriorated to E2M2V1. The left pupil is 4 mm and non-reactive, the right pupil 3 mm and reactive, with right hemiparesis grade IV. A non-contrast CT brain is shown.<br>1. Describe the CT findings.<br>2. What is the diagnosis?`,
 gray:"1. ผู้ป่วยชาย 25 ปี ประสบอุบัติเหตุถูกรถจักรยานยนต์ชน หลังชนหมดสติ 5 นาที แล้วตื่นมาอาการดีขึ้น conscious ดี พูดคุยรู้เรื่อง จากนั้นอาการแย่ลง E2M2V1 PE: left pupil 4 mm NRTL, right pupil 3 mm RTL, right hemiparesis grade IV · a. CT brain non-contrast เป็นดังภาพ จงบรรยาย findings · b. จงให้การวินิจฉัย",
 notes:"รูป CT ในไฟล์: ก้อนเลือด hyperdense รูปเลนส์ใต้กะโหลกซีกซ้าย กดสมอง midline shift ไปขวา · "+NM,
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("1.1 Describe the CT findings.",3,{tags:["spot"],ans:"Hyperdense <b>biconvex (lentiform) extra-axial collection</b> at the left fronto-temporo-parietal convexity, not crossing suture lines, with <b>mass effect</b>: effacement of the left lateral ventricle and <b>midline shift to the right</b>",exp:"EDH ไม่ข้าม suture เพราะ dura ยึดแน่นที่ suture",rubric:"ได้ = hyperdense biconvex + ซ้าย + midline shift",pts:[CR(P("Hyperdense biconvex/lentiform collection","biconvex","lentiform","lens","เลนส์")),P("Left side","left","ซ้าย"),P("Midline shift / mass effect","midline","shift","mass effect","กด")]}),
  B("1.2 Diagnosis.",2,{tags:["spot"],ans:"<b>Acute left epidural hematoma</b> with uncal (transtentorial) herniation",exp:"Lucid interval + ipsilateral fixed pupil + contralateral hemiparesis",rubric:"ได้ = EDH ซ้าย",pts:[CR(P("Epidural hematoma","epidural","edh")),P("Uncal herniation","uncal","herniation","transtentorial")]})
 ),
 interp:"EDH + uncal herniation → emergency craniotomy",
 summary:["EDH: biconvex ไม่ข้าม suture, middle meningeal artery, lucid interval","Uncal herniation: pupil ข้างเดียวกันโต + อ่อนแรงข้ามข้าง","Craniotomy ด่วนเมื่อ &gt;30 mL หรือ GCS ≤8 + anisocoria"]}),

/* ===== MEQ 2 ===== */
SA({page:2,orig:"MEQ 2",num:"SA 2",sub:"Other spot",title:"Spot — reflex examination",img:["os77a_m2a","os77a_m2b","os77a_m2c"],
 stem:`Picture 1 shows a reflex being tested (the real examination showed a video). Picture 2 shows another reflex being tested, and the third picture shows the result.<br>1. Which reflex is being tested in picture 1?<br>2. What is its nerve root level?<br>3. Which reflex is being tested in picture 2?<br>4. Describe and interpret the result.`,
 gray:"2. จงตอบคำถาม · ภาพที่ 1 (ของจริงมีวิดีโอให้ดูจ้า) a. การตรวจในภาพที่ 1 เป็นการตรวจ reflex ใด b. Nerve ที่เลี้ยงอยู่ระดับใด · ภาพที่ 2 + ผลการตรวจ c. การตรวจในภาพที่ 2 เป็นการตรวจ reflex ใด d. จงบรรยายผลการตรวจและแปลผล",
 notes:"รูปในไฟล์: (1) ผู้ตรวจเคาะด้านข้างปลายแขนใกล้ข้อมือฝั่งนิ้วโป้ง (2) ขีดฝ่าเท้าด้านนอก (3) ผลการตรวจ: นิ้วโป้งกระดกขึ้น นิ้วอื่นกางออก (มีลูกศร) · "+NM,
 opinion:"ไม่มีเฉลยในไฟล์ — ภาพ 1 ตีความว่าเป็น brachioradialis reflex ความมั่นใจปานกลาง",
 parts:S(
  B("2.1 Reflex in picture 1.",1,{tags:["spot"],ans:"<b>Brachioradialis (supinator) reflex</b> — เคาะ distal radius ด้านข้าง",exp:"ถ้าเคาะ biceps tendon ที่ข้อพับศอก = biceps reflex (C5–6) · triceps (C7)",rubric:"ได้ = brachioradialis",pts:[CR(P("Brachioradialis reflex","brachioradialis","supinator"))]}),
  B("2.2 Nerve root level.",1,{tags:["spot"],ans:"<b>C5–C6</b> (radial nerve)",exp:"Biceps C5–6, triceps C7, knee L3–4, ankle S1",rubric:"ได้ = C5–6",pts:[CR(P("C5–C6","c5","c6"))]}),
  B("2.3 Reflex in picture 2.",1,{tags:["spot"],ans:"<b>Plantar reflex</b> (Babinski test) — ขีดฝ่าเท้าด้านนอกจากส้นไปโคนนิ้วก้อยแล้วโค้งไปทางนิ้วโป้ง",exp:"Babinski ทำโดยขีดด้วยของทื่อ ไม่ใช่ของแหลม; Chaddock (ขีดด้านข้างข้อเท้า) เป็นอีกวิธี",rubric:"ได้ = plantar/Babinski",pts:[CR(P("Plantar (Babinski) reflex","plantar","babinski"))]}),
  B("2.4 Describe and interpret.",2,{tags:["spot"],ans:"นิ้วโป้ง<b>กระดกขึ้น (dorsiflexion)</b> นิ้วอื่นกางออก (fanning) = <b>extensor plantar response (Babinski sign positive)</b> → <b>upper motor neuron lesion</b> (corticospinal tract) · ปกติในทารก &lt;1–2 ปี",exp:"Babinski เป็น UMN sign ที่สำคัญ ร่วมกับ hyperreflexia, clonus, spasticity",rubric:"ได้ = upgoing + UMN",pts:[CR(P("Upgoing toe / extensor response","upgoing","extensor","dorsiflex","กระดกขึ้น","positive")),CR(P("Upper motor neuron lesion","upper motor","umn","corticospinal","pyramidal"))]})
 ),
 interp:"Reflex testing",
 summary:["Biceps C5–6, brachioradialis C5–6, triceps C7, patellar L3–4, Achilles S1","Babinski positive = UMN lesion (ปกติในทารก)","Hyporeflexia = LMN"]}),

/* ===== MEQ 3 ===== */
SA({page:3,orig:"MEQ 3",num:"SA 3",sub:"Uro/Genital",title:"Spot — painless penile lesion for 3 months",img:["os77a_m3"],
 stem:`A man has had a painless penile lesion for 3 months, as shown.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"3. ชายมีแผลที่อวัยวะเพศมา 3 เดือน ไม่เจ็บ เป็นดังภาพ a. จงให้การวินิจฉัย b. จงบอก management",
 notes:"รูปในไฟล์: ก้อนแผลขรุขระคล้ายดอกกะหล่ำขนาดใหญ่ที่องคชาต · "+NM+" · AC Subspe 77C และ 78C OSCE มีสถานีเรื่องเดียวกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง (DDx giant condyloma/Buschke–Löwenstein ยืนยันด้วย biopsy)",
 parts:S(
  B("3.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Squamous cell carcinoma of the penis</b>",exp:"DDx: giant condyloma (Buschke–Löwenstein), verrucous carcinoma",rubric:"ได้ = penile SCC",pts:[CR(P("Penile SCC","squamous","scc","carcinoma","cancer","มะเร็ง"))]}),
  B("3.2 Management.",4,{tags:["spot"],ans:"<b>Biopsy</b> ยืนยัน · ประเมิน <b>inguinal nodes</b> (คลำ, US ± FNA) + staging · <b>Partial/total penectomy</b> (margin ปลอด; organ-sparing ในรอยโรคเล็ก) · <b>inguinal lymph node dissection</b> ใน cN+ หรือ DSNB/ILND ใน cN0 ความเสี่ยงสูง · chemotherapy ในระยะลุกลาม",exp:"Risk: ไม่ขลิบ phimosis, HPV, สูบบุหรี่",rubric:"ได้ = biopsy + penectomy + inguinal LN",pts:[CR(P("Biopsy","biopsy","ตัดชิ้นเนื้อ")),CR(P("Penectomy","penectomy","partial","total")),P("Inguinal lymph node management","inguinal","lymph","lnd")]})
 ),
 interp:"Penile SCC",
 summary:["Penile SCC: phimosis, HPV 16/18, smoking","Biopsy → penectomy/organ-sparing → inguinal nodes","Inguinal node status = ปัจจัยพยากรณ์สำคัญที่สุด"]}),

/* ===== MEQ 4 ===== */
SA({page:3,orig:"MEQ 4",num:"SA 4",sub:"Uro/Genital",title:"Short answer — a 66-year-old man with hematuria",
 stem:`A 66-year-old man has had blood in the urine for 2 weeks.<br>1. What additional history would you take?<br>2. What physical examination would you perform?`,
 gray:"4. ชาย 66 ปี มาด้วยปัสสาวะเป็นเลือด 2 สัปดาห์ a. จงซักประวัติเพิ่มเติม b. จงระบุการตรวจร่างกาย",
 notes:"ไม่มีรูปในไฟล์ (ข้อนี้เป็นคำถามข้อความ) · "+NM,
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("4.1 Additional history.",5,{tags:["spot"],ans:"ลักษณะ hematuria: <b>gross/painless</b>, initial/terminal/total, ลิ่มเลือด · อาการร่วม: ปวดสีข้าง (นิ่ว), LUTS/ปัสสาวะแสบขัด ไข้ (UTI), น้ำหนักลด · <b>ปัจจัยเสี่ยงมะเร็ง urothelial: สูบบุหรี่, สัมผัสสารเคมี (aromatic amines, ย้อม, ยาง)</b>, cyclophosphamide, ฉายแสง pelvis · ยา anticoagulant/antiplatelet · trauma, ออกกำลังหนัก · ประวัตินิ่ว, BPH · ครอบครัวเป็นมะเร็ง",exp:"Painless gross hematuria ในผู้สูงอายุ = มะเร็งกระเพาะปัสสาวะจนกว่าจะพิสูจน์ว่าไม่ใช่",rubric:"≥4 หัวข้อ รวมสูบบุหรี่",
   pts:[P("Painless vs painful, timing in stream, clots","painless","clot","ลิ่ม","terminal","initial","total"),CR(P("Smoking","smok","บุหรี่")),P("Occupational chemical exposure","chemical","dye","สาร","occupation","aniline"),P("Flank pain / stone history","flank","stone","นิ่ว","สีข้าง"),P("LUTS / dysuria / fever","luts","dysuria","แสบ","fever","ไข้"),P("Anticoagulant use","anticoag","warfarin","antiplatelet","ยาละลาย"),P("Weight loss","weight","น้ำหนัก")]}),
  B("4.2 Physical examination.",4,{tags:["spot"],ans:"Vital signs, <b>pallor</b> · ท้อง: <b>คลำไต (ballotable mass)</b>, กดเจ็บ CVA, <b>คลำ bladder</b> · <b>DRE</b> (ต่อมลูกหมาก, ก้อนที่ฐาน bladder) · อวัยวะเพศภายนอก/urethral meatus · ต่อมน้ำเหลือง, ขาบวม (มะเร็งลุกลาม), left varicocele (RCC)",exp:"Hematuria + คลำได้ก้อนไต = RCC/hydronephrosis; prostate แข็งขรุขระ = มะเร็งต่อมลูกหมาก",rubric:"ได้ = abdomen/kidney + DRE",
   pts:[P("Pallor / vital signs","pale","ซีด","vital","pallor"),CR(P("Abdominal exam: kidney/bladder palpation","kidney","ไต","bladder","ballot","abdomen")),CR(P("Digital rectal examination","dre","pr","rectal","prostate")),P("External genitalia / varicocele","genital","varicocele","meatus"),P("Lymph nodes","lymph","ต่อมน้ำเหลือง")]})
 ),
 interp:"Hematuria workup",
 summary:["Hematuria ≥35–40 ปี: CT urography + cystoscopy + urine cytology","Bladder cancer: painless gross hematuria, สูบบุหรี่","Upper tract: RCC, UTUC, นิ่ว"]}),

/* ===== MEQ 5 ===== */
SA({page:4,orig:"MEQ 5",num:"SA 5",sub:"Pediatric surgery",title:"Spot — newborn with a membrane-covered midline abdominal wall defect",img:["os77a_m5"],
 stem:`A photograph of a newborn is shown.<br>1. What is the diagnosis?<br>2. Name associated conditions.<br>3. Outline the initial and definitive management.`,
 gray:"5. จงตอบคำถาม a. Diagnosis b. Associated condition c. Initial and definite management",
 notes:"รูปในไฟล์: ทารกมีถุงใสขนาดใหญ่ที่สะดือ สายสะดือติดที่ถุง ภายในเห็นตับ/ลำไส้ · "+NM+" · AC 77C MEQ 10 ถามเรื่องเดียวกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("5.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Omphalocele</b> (exomphalos) — giant ถ้ามีตับ/defect &gt;5 cm",exp:"ต่างจาก gastroschisis: มีถุงหุ้ม สายสะดือติดที่ถุง",rubric:"ได้ = omphalocele",pts:[CR(P("Omphalocele","omphalocele","exomphalos"))]}),
  B("5.2 Associated conditions.",2,{tags:["spot"],ans:"<b>Chromosomal anomalies</b> (trisomy 13, 18, 21) · <b>congenital heart disease</b> · <b>Beckwith–Wiedemann syndrome</b> (macroglossia, hypoglycemia, organomegaly) · pentalogy of Cantrell · OEIS · pulmonary hypoplasia",exp:"Omphalocele มี associated anomalies ~50–70% → ทำ echo และ karyotype ทุกราย",rubric:"≥2",pts:[G("≥2 associations",2,P("Chromosomal/trisomy","trisomy","chromosom","13","18"),P("Cardiac anomaly","heart","cardiac","หัวใจ"),P("Beckwith–Wiedemann","beckwith","bws"),P("Pentalogy of Cantrell","cantrell"),P("Pulmonary hypoplasia","pulmonary hypoplasia"))]}),
  B("5.3 Initial and definitive management.",4,{tags:["spot"],ans:"<b>Initial</b>: ห่อถุงด้วย gauze ชุบ warm saline/ห่อพลาสติก ป้องกันถุงแตก, keep warm, <b>OG decompression</b>, NPO, <b>IV fluid</b>, ตรวจน้ำตาล (BWS), ยาฆ่าเชื้อถ้าถุงแตก, echocardiogram/karyotype · <b>Definitive</b>: <b>primary closure</b> (defect เล็ก) หรือ <b>staged closure/silo</b> หรือ <b>paint-and-wait</b> (silver sulfadiazine ให้ถุงกลายเป็น eschar แล้วปิดภายหลัง) ใน giant omphalocele",exp:"ห้ามดันอวัยวะกลับแรง ๆ ในวันแรก (abdominal compartment syndrome)",rubric:"ได้ = ป้องกันถุง + decompression + fluid + closure",
   pts:[H("Initial",50),CR(P("Protect sac / warm moist dressing","sac","ถุง","gauze","saline","wrap","ห่อ")),P("Gastric decompression","og","ng","decompress"),P("IV fluid / keep warm","iv","fluid","warm","อุ่น"),P("Check glucose / screen anomalies","glucose","น้ำตาล","echo","karyotype"),H("Definitive",50),CR(P("Primary or staged closure","closure","ปิด","silo","staged","paint","primary"))]})
 ),
 interp:"Omphalocele",
 summary:["Omphalocele: midline, มีถุง, ตับได้, anomaly มาก","Gastroschisis: ขวาของสะดือ ไม่มีถุง","Paint-and-wait สำหรับ giant omphalocele"]}),

/* ===== MEQ 6 ===== */
SA({page:5,orig:"MEQ 6",num:"SA 6",sub:"Pediatric surgery",title:"Spot — plain film and contrast enema of an infant",img:["os77a_m6a","os77a_m6b"],
 stem:`An infant with abdominal distension and constipation has the plain abdominal film and barium enema shown.<br>1. Describe the barium enema.<br>2. What is the diagnosis?<br>3. Outline the management.`,
 gray:"6. จงตอบคำถาม a. จงบรรยายภาพการตรวจ barium enema b. Diagnosis c. Management",
 flag:"ต้นฉบับไม่ให้ประวัติ — เราเติมว่าเป็นทารกท้องอืดท้องผูก",
 notes:"รูปในไฟล์: (1) plain film ลำไส้โป่งหลายห่วง (2) barium enema ลำไส้ส่วนต้นโป่ง ส่วนปลาย (rectum) แคบ มีลูกศรชี้รอยต่อ · "+NM,
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจปานกลาง-สูง",
 parts:S(
  B("6.1 Describe the barium enema.",2,{tags:["spot"],ans:"<b>Narrow (aganglionic) rectum/distal segment</b> with a cone-shaped <b>transition zone</b> to <b>dilated proximal colon</b> · rectosigmoid index &lt;1",exp:"Contrast enema ในทารกแรกเกิดอาจยังไม่เห็น transition zone ชัด และไม่ใช้วินิจฉัยยืนยัน",rubric:"ได้ = narrow distal + transition zone + dilated proximal",pts:[CR(P("Transition zone","transition","รอยต่อ","cone")),P("Narrow rectum","narrow","แคบ","small rectum"),P("Dilated proximal colon","dilat","โป่ง")]}),
  B("6.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Hirschsprung disease</b> (rectosigmoid)",exp:"ประมาณ 80% เป็น short segment (rectosigmoid); สัมพันธ์ Down syndrome",rubric:"ได้ = Hirschsprung",pts:[CR(P("Hirschsprung disease","hirschsprung","aganglion"))]}),
  B("6.3 Management.",3,{tags:["spot"],ans:"ยืนยันด้วย <b>rectal suction biopsy</b> (ไม่มี ganglion cells, calretinin negative) · ระหว่างรอ: rectal irrigation/washout ป้องกัน enterocolitis · <b>pull-through</b> (transanal Soave/Duhamel/Swenson) · colostomy ก่อนถ้า enterocolitis รุนแรงหรือ long segment",exp:"Hirschsprung-associated enterocolitis: ไข้ ท้องอืด ถ่ายเหลวเหม็น → irrigation + IV antibiotics",rubric:"ได้ = rectal biopsy + pull-through",pts:[CR(P("Rectal biopsy","biopsy")),P("Rectal irrigation","irrigat","washout","ล้าง"),CR(P("Pull-through operation","pull","soave","duhamel","swenson"))]})
 ),
 interp:"Hirschsprung",
 summary:["ไม่ถ่ายขี้เทา 48 ชม. + ท้องอืด","Contrast enema: transition zone · biopsy = gold standard","Enterocolitis = อันตราย"]}),

/* ===== MEQ 7 ===== */
SA({page:6,orig:"MEQ 7",num:"SA 7",sub:"Pediatric surgery",title:"Spot — a 1-month-old with pale stools and conjugated hyperbilirubinemia",img:["os77a_m7"],
 stem:`A 1-month-old girl is brought because she is less active, cries less and feeds poorly. Her stool is shown. Blood tests show raised direct bilirubin.<br>1. Give the differential diagnoses.<br>2. As a newly graduated doctor in a small community hospital, how would you manage this patient?`,
 gray:"7. เด็กหญิง 1 เดือน ผู้ปกครองพามาพบแพทย์เนื่องจากดูซึมลง ไม่ค่อยร้อง ไม่ค่อยกินนมแม่ อุจจาระเด็กเป็นดังภาพ ผลการตรวจเลือดพบ direct bilirubin เพิ่มสูงขึ้น a. จงบอก differential diagnosis b. หากท่านเป็นแพทย์จบใหม่ ประจำอยู่ในโรงพยาบาลชุมชนขนาดเล็กแห่งหนึ่ง จะให้ management อย่างไร",
 notes:"รูปในไฟล์: อุจจาระสีซีดเหลืองเทาในผ้าอ้อม · "+NM+" · AC 77C MEQ 13 ถามเรื่องเดียวกัน (คีย์ 77C ตอบ biliary atresia, choledochal cyst)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("7.1 Differential diagnoses.",3,{tags:["spot"],ans:"Surgical: <b>biliary atresia</b>, <b>choledochal cyst</b>, inspissated bile · Medical: <b>neonatal hepatitis</b> (TORCH, sepsis, UTI), metabolic (galactosemia, tyrosinemia, hypothyroidism), Alagille, PFIC, α1-antitrypsin deficiency",exp:"อาการซึม กินไม่ดี ต้องนึกถึง sepsis/galactosemia ร่วม",rubric:"≥3 รวม biliary atresia",pts:[CR(P("Biliary atresia","biliary atresia","ba")),P("Choledochal cyst","choledochal"),P("Neonatal hepatitis / infection","hepatitis","torch","sepsis","infection","ติดเชื้อ"),P("Metabolic: galactosemia/hypothyroid","galactos","metabolic","thyroid","tyrosin")]}),
  B("7.2 Management in a community hospital.",3,{tags:["spot"],ans:"Resuscitate/ประเมินอาการซึม (sepsis workup, ยาฆ่าเชื้อถ้าสงสัย, ตรวจน้ำตาล) · <b>vitamin K</b> IM (ป้องกันเลือดออกจาก malabsorption) · <b>refer ด่วนไปโรงพยาบาลที่มีกุมารศัลยแพทย์/กุมารแพทย์โรคตับ</b> เพื่อตรวจ US, HIDA/biopsy และ <b>Kasai portoenterostomy ให้ทันก่อนอายุ 60 วัน</b>",exp:"Kasai ก่อน 60 วัน ระบายน้ำดีได้ดีกว่ามาก; ล่าช้าทำให้ต้องปลูกถ่ายตับ",rubric:"ได้ = refer เร็ว + Kasai <60 วัน",pts:[CR(P("Urgent referral","refer","ส่งต่อ")),P("Vitamin K","vitamin k","vit k"),P("Treat sepsis / check glucose","sepsis","antibiotic","glucose","น้ำตาล"),CR(P("Kasai before 60 days","kasai","60"))]})
 ),
 interp:"Neonatal cholestasis",
 summary:["Jaundice &gt;2 สัปดาห์ → fractionated bilirubin","Biliary atresia: Kasai ก่อน 60 วัน","Stool color card คัดกรอง"]}),

/* ===== MEQ 8 ===== */
SA({page:7,orig:"MEQ 8",num:"SA 8",sub:"Plastic/Skin/Burn",title:"Spot — a black painless lesion on the sole",img:["os77a_m8"],
 stem:`A 45-year-old woman has had a painless black patch on the sole for 4 weeks, as shown.<br>1. What is the diagnosis?<br>2. What is the definitive treatment?`,
 gray:"8. หญิง 45 ปี มาด้วยผื่นสีดำบริเวณฝ่าเท้า 4 สัปดาห์ ไม่เจ็บ ลักษณะผื่นเป็นดังภาพ a. Diagnosis b. Definite treatment",
 notes:"รูปในไฟล์ (A, B): ผื่นดำขอบไม่เรียบหลายสีบนฝ่าเท้า · "+NM,
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("8.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Acral lentiginous melanoma</b> (malignant melanoma)",exp:"ชนิดที่พบบ่อยที่สุดในคนเอเชีย/ผิวเข้ม",rubric:"ได้ = melanoma",pts:[CR(P("Melanoma","melanoma"))]}),
  B("8.2 Definitive treatment.",3,{tags:["spot"],ans:"<b>Excisional biopsy</b> (margin 1–3 mm) ยืนยันและวัด Breslow → <b>wide local excision</b> margin ตาม Breslow (≤1 mm 1 cm, 1–2 mm 1–2 cm, &gt;2 mm 2 cm) + <b>sentinel lymph node biopsy</b> (&gt;0.8 mm หรือ ulceration) · ปิดแผลด้วย graft/flap",exp:"Lymph node บวก → adjuvant immunotherapy (anti-PD-1) หรือ BRAF/MEK inhibitor",rubric:"ได้ = biopsy + WLE ตาม Breslow + SLNB",pts:[P("Excisional biopsy","biopsy"),CR(P("Wide local excision with margin","wide","excision","margin")),P("Sentinel lymph node biopsy","sentinel","slnb")]})
 ),
 interp:"Acral melanoma",
 summary:["ABCDE · acral lentiginous พบบ่อยในคนไทย","Breslow → margin","SLNB เมื่อ &gt;0.8 mm"]}),

/* ===== MEQ 9 ===== */
SA({page:8,orig:"MEQ 9",num:"SA 9",sub:"Vascular/Ulcer",title:"Spot — a forefoot ulcer in a hypertensive man",img:["os77a_m9"],
 stem:`A 56-year-old man with hypertension has the foot lesion shown.<br>1. Describe the lesion.<br>2. What important physical examination would you perform?<br>3. What is the diagnosis?`,
 gray:"9. ชาย 56 ปี มีโรคประจำตัวเป็นโรคความดันโลหิตสูง พบดังภาพ a. Describe lesion b. จงบอกการตรวจร่างกายที่สำคัญ c. Diagnosis",
 flag:"⚠ ไม่มีเฉลย และต้นฉบับไม่ให้ประวัติอื่น — แยก ischemic กับ neuropathic ulcer จากรูปได้ไม่ชัด เราตอบแนว ischemic (ปัจจัยเสี่ยงหลอดเลือด) และให้คะแนน neuropathic ถ้าอธิบายเหตุผล ความมั่นใจต่ำ",
 notes:"รูปในไฟล์: แผลดำมีเนื้อตายที่ฝ่าเท้าส่วนหน้า ใต้หัวกระดูก metatarsal ผิวรอบเป็น callus · "+NM,
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจต่ำ",
 parts:S(
  B("9.1 Describe the lesion.",2,{tags:["spot"],ans:"แผลที่ฝ่าเท้าส่วนหน้าบริเวณหัวกระดูก metatarsal ขอบชัด ฐานมี<b>เนื้อตายสีดำ (necrosis/eschar)</b> รอบแผลหนาเป็น callus ไม่มีหนองชัด",exp:"Neuropathic ulcer มี callus หนารอบ ไม่เจ็บ; ischemic ulcer ปวด ขอบ punched-out สีซีด",rubric:"ได้ = ตำแหน่ง + necrosis",pts:[CR(P("Plantar forefoot ulcer","plantar","forefoot","metatarsal","ฝ่าเท้า")),P("Black necrotic base","necro","black","ดำ","eschar","gangrene")]}),
  B("9.2 Important physical examination.",3,{tags:["spot"],ans:"<b>คลำชีพจร</b> femoral, popliteal, posterior tibial, dorsalis pedis · <b>ABI</b>, capillary refill, Buerger test, อุณหภูมิ/สีผิว · ตรวจ<b>sensation (monofilament)</b> หา neuropathy · ดู probe-to-bone (osteomyelitis)",exp:"ABI &lt;0.9 = PAD; &lt;0.4 = critical ischemia; &gt;1.3 = หลอดเลือดแข็งกดไม่ยุบ (DM, CKD)",rubric:"ได้ = pulses/ABI + sensation",pts:[CR(P("Peripheral pulses","pulse","ชีพจร","dorsalis","tibial")),P("Ankle-brachial index","abi","ankle"),P("Monofilament sensation","monofilament","sensation","neuropath","ความรู้สึก"),P("Probe to bone","probe","bone")]}),
  B("9.3 Diagnosis.",2,{tags:["spot"],ans:"<b>Ischemic (arterial) ulcer with dry gangrene</b> of the forefoot — chronic limb-threatening ischemia จาก atherosclerosis · DDx neuropathic (diabetic) ulcer",exp:"WIfI classification ใช้ประเมิน threatened limb (Wound, Ischemia, foot Infection)",rubric:"ได้ = ischemic ulcer/gangrene (หรือ neuropathic พร้อมเหตุผล)",pts:[CR(P("Ischemic ulcer / gangrene / CLTI","ischem","arterial","gangrene","clti","ขาดเลือด","neuropath"))]})
 ),
 interp:"Foot ulcer",
 summary:["Arterial ulcer: ปลายนิ้ว ส้นเท้า ปวด ชีพจรเบา","Neuropathic: จุดรับน้ำหนัก ไม่เจ็บ callus","Venous: medial malleolus","ABI &lt;0.9 = PAD"]}),

/* ===== MEQ 10 ===== */
SA({page:9,orig:"MEQ 10",num:"SA 10",sub:"Plastic/Skin/Burn",title:"Spot — ulcer in a bedridden elderly woman",img:["os77a_m10"],
 stem:`An 86-year-old bedridden, fully dependent woman has the ulcer shown.<br>1. Give the detailed diagnosis.<br>2. In which position did this develop?<br>3. Which bony prominence lies beneath it and causes it?`,
 gray:"10. หญิง 86 ปี ติดเตียง ช่วยเหลือตนเองไม่ได้ พบแผลดังภาพ a. จงบอก diagnosis อย่างละเอียด b. เกิดจากการที่ผู้ป่วยอยู่ในท่าใด c. กระดูกใดที่อยู่ใต้ความผิดปกติในภาพ และเป็นสาเหตุของความผิดปกตินี้",
 flag:"ระดับความลึกของแผลประเมินจากรูป (เห็นชั้นใต้ผิวหนัง) ความมั่นใจปานกลาง",
 notes:"รูปในไฟล์: แผลลึกกลมด้านข้างสะโพก (lateral hip) ฐานเป็นเนื้อแดง · "+NM+" · AC 77C MEQ 9 ถามเรื่องเดียวกัน (แผลที่ sacrum)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 Detailed diagnosis.",2,{tags:["spot"],ans:"<b>Pressure injury (pressure ulcer) stage 3</b> at the <b>greater trochanter</b> — full-thickness skin loss เห็นไขมันใต้ผิวหนัง ไม่เห็นกระดูก/เอ็น",exp:"NPIAP: 1 erythema ไม่ blanch · 2 partial thickness · 3 full-thickness skin · 4 เห็นกระดูก/เอ็น · unstageable (slough/eschar) · deep tissue injury",rubric:"ได้ = pressure injury + stage + ตำแหน่ง",pts:[CR(P("Pressure injury/ulcer","pressure","bed ?sore","decubitus","กดทับ")),P("Stage 3","stage 3","stage iii","full.thickness"),P("Trochanteric location","trochant")]}),
  B("10.2 Position.",1,{tags:["spot"],ans:"<b>Lateral decubitus</b> (นอนตะแคง)",exp:"ท่านอนหงาย → sacrum, ส้นเท้า · นั่ง → ischial tuberosity",rubric:"ได้ = นอนตะแคง",pts:[CR(P("Lateral position","lateral","ตะแคง","side"))]}),
  B("10.3 Bony prominence.",1,{tags:["spot"],ans:"<b>Greater trochanter of the femur</b>",exp:"Ischial tuberosity เป็นจุดกดทับในท่านั่ง, sacrum/coccyx ในท่านอนหงาย",rubric:"ได้ = greater trochanter",pts:[CR(P("Greater trochanter","trochanter"))]})
 ),
 interp:"Pressure injury",
 summary:["NPIAP staging 1–4, unstageable, DTI","ตำแหน่ง: sacrum (พบมากสุด), ischium, trochanter, heel","ป้องกัน: พลิกตัวทุก 2 ชม., ที่นอนลม, โภชนาการ","Stage 3–4: debridement, NPWT, flap"]}),

/* ===== MEQ 11 ===== */
SA({page:9,orig:"MEQ 11",num:"SA 11",sub:"Head & neck",title:"Spot — recurrent infected lesion below the ear in a child",img:["os77a_m11"],
 stem:`A 7-year-old child has a red, crusted, pustular lesion on the face just below and in front of the ear lobe, as shown. It has been infected repeatedly.<br>1. What is the diagnosis?<br>2. If the pus is to be drained, which nerve must be protected?`,
 gray:"11. เด็ก 7 ขวบ มีตุ่มแดงบนใบหน้าตามภาพ a. Diagnosis (รูปจริงเป็นตุ่มหนองไม่เยอะเท่านี้ หารูปไม่เจอ) b. หากต้องการ drain หนองออก ต้องระวัง nerve ใด",
 flag:"⚠ ไม่มีเฉลย ต้นฉบับบอกว่ารูปไม่ตรงกับข้อสอบจริง — เราเติมว่าติดเชื้อซ้ำ และตีความเป็น infected first branchial cleft anomaly ใกล้ parotid ความมั่นใจต่ำ (DDx parotid abscess, infected preauricular sinus)",
 notes:"รูปในไฟล์: รอยแดงมีสะเก็ดหนองใต้และหน้าติ่งหู ผู้จดหมายเหตุว่ารูปจริงตุ่มหนองไม่เยอะเท่านี้ · "+NM,
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจต่ำสำหรับการวินิจฉัย แต่สูงสำหรับเส้นประสาท (facial nerve)",
 parts:S(
  B("11.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Infected first branchial cleft anomaly</b> (cyst/sinus, Work type II ใกล้มุมขากรรไกร/parotid) · DDx infected preauricular sinus, parotid abscess",exp:"First branchial cleft: ตั้งแต่ external auditory canal ถึงมุมขากรรไกร สัมพันธ์ parotid และ facial nerve",rubric:"ได้ = first branchial cleft anomaly ติดเชื้อ (หรือ DDx ที่สมเหตุผล)",pts:[CR(P("Infected first branchial cleft anomaly","branchial","first cleft","preauricular","parotid"))]}),
  B("11.2 Nerve at risk.",2,{tags:["spot"],ans:"<b>Facial nerve (CN VII)</b> — branches ใน parotid (marginal mandibular/cervical branch ใกล้มุมขากรรไกร) · กรีดตามแนวขนานกับแขนงประสาท ระบายแบบจำกัด แล้วผ่าตัดเอาออกทั้งหมดเมื่อสงบโดยระบุ facial nerve",exp:"ก่อนผ่าตัด first branchial cleft anomaly ต้อง identify facial nerve trunk ก่อนเสมอ (superficial parotidectomy approach)",rubric:"ได้ = facial nerve",pts:[CR(P("Facial nerve","facial","cn ?vii","marginal mandibular","คู่ที่ 7"))]})
 ),
 interp:"Branchial cleft anomaly",
 summary:["First cleft: preauricular/มุมขากรรไกร → facial nerve","Second cleft (พบบ่อยสุด): หน้า SCM","Infected → ยา + ระบาย แล้ว excise เมื่อสงบ"]}),

/* ===== MEQ 12 ===== */
SA({page:10,orig:"MEQ 12",num:"SA 12",sub:"Imaging film",title:"Spot — jaundice with a dilated bile duct",img:["os77a_m12a","os77a_m12b"],
 stem:`A 40-year-old woman has jaundice and right upper quadrant pain that worsens after meals. Imaging shows a dilated, thickened common bile duct with a filling defect. Murphy's sign is negative.<br>1. Which investigation is shown?<br>2. Give a detailed and complete diagnosis.<br>3. Outline the management.`,
 gray:"12. หญิง 40 ปี ตัวเหลือง ปวดท้อง RUQ เป็นมากขึ้นหลังทานอาหาร ตรวจพบ dilate and thicken CBD with filling defect และผลการตรวจ murphy sign เป็น negative a. การตรวจในภาพ ตรวจด้วยวิธีใด b. จงให้การวินิจฉัยโดยละเอียดและครบถ้วน c. จงบอก management",
 notes:"รูปในไฟล์ 2 ภาพ: ultrasound ท่อน้ำดีโป่งและก้อน echogenic ในท่อน้ำดี/ถุงน้ำดี · "+NM,
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจปานกลาง-สูง",
 parts:S(
  B("12.1 Investigation.",1,{tags:["spot"],ans:"<b>Ultrasonography of the upper abdomen</b> (hepatobiliary US)",exp:"US ไวในการเห็นนิ่วในถุงน้ำดี (&gt;95%) แต่ไวต่ำสำหรับนิ่วใน distal CBD (บังด้วยลมในลำไส้)",rubric:"ได้ = ultrasound",pts:[CR(P("Ultrasound","ultrasound","us","usg","อัลตร้า"))]}),
  B("12.2 Detailed diagnosis.",3,{tags:["spot"],ans:"<b>Choledocholithiasis with obstructive jaundice</b> (CBD stone with dilated CBD) ± <b>cholelithiasis</b> · Murphy sign ลบ + ไม่มีไข้ = ยังไม่มี acute cholecystitis/cholangitis",exp:"Mirizzi syndrome = นิ่วใน cystic duct/Hartmann pouch กดท่อน้ำดีร่วม — ต้องแยก",rubric:"ได้ = CBD stone + obstructive jaundice",pts:[CR(P("Choledocholithiasis / CBD stone","choledocholith","cbd stone","common bile duct stone","นิ่วในท่อน้ำดี")),P("Obstructive jaundice","obstructive","jaundice"),P("Cholelithiasis","cholelith","gallstone")]}),
  B("12.3 Management.",3,{tags:["spot"],ans:"NPO/IV fluid, ตรวจ LFT, coagulation (vitamin K) · <b>ERCP with sphincterotomy and stone extraction</b> (หรือ MRCP ก่อนถ้าความน่าจะเป็นปานกลาง) · ตามด้วย <b>laparoscopic cholecystectomy</b> ในการนอนครั้งเดียวกัน · ถ้ามี cholangitis → ยาฆ่าเชื้อ + biliary drainage ด่วน",exp:"ASGE 2019: high likelihood (CBD stone เห็นใน US, bilirubin &gt;4 + dilated CBD) → ERCP โดยตรง",rubric:"ได้ = ERCP + cholecystectomy",pts:[CR(P("ERCP stone extraction","ercp","sphincterotomy")),CR(P("Cholecystectomy","cholecystectomy","lc")),P("Vitamin K / supportive","vitamin k","fluid","npo")]})
 ),
 interp:"Choledocholithiasis",
 summary:["CBD stone: biliary colic + jaundice + dilated CBD","ASGE risk stratification → ERCP/MRCP/EUS","ERCP แล้ว LC ในการนอนเดียวกัน","Charcot triad = cholangitis"]}),

/* ===== MEQ 13 ===== */
SA({page:11,orig:"MEQ 13",num:"SA 13",sub:"Breast",title:"Spot — screening mammogram",img:["os77a_m13"],
 stem:`A 45-year-old woman comes for an annual check-up. The breast imaging is shown.<br>1. What examination is this and which views?<br>2. Describe the lesion.<br>3. What is the diagnosis?<br>4. Which risk factors should be asked?<br>5. What further investigation is needed?`,
 gray:"13. หญิง 45 ปี มาตรวจสุขภาพประจำปี ตรวจเต้านมเจอดังภาพ a. การตรวจในภาพเป็นการตรวจอะไร view อะไร b. จงบรรยาย lesion c. จงให้ diagnosis d. ต้องซักประวัติ risk factor ใดบ้าง e. จงบอก investigation เพิ่มเติม",
 notes:"รูปในไฟล์: mammogram 2 ภาพ (A, B) มีลูกศรชี้ก้อนกลม/รี ขอบค่อนข้างชัด · "+NM+" · AC 77C MEQ 5 และ 77D MEQ 9 ถามเรื่องเดียวกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ก้อนขอบชัดในภาพตีความว่าน่าจะ benign (BI-RADS 3–4a) ความมั่นใจปานกลาง",
 parts:S(
  B("13.1 Examination and views.",1,{tags:["spot"],ans:"<b>Mammography</b> — <b>mediolateral oblique (MLO)</b> และ <b>craniocaudal (CC)</b> views",exp:"Diagnostic mammogram เพิ่ม spot compression/magnification views ได้",rubric:"ได้ = mammogram + MLO + CC",pts:[CR(P("Mammogram","mammo")),P("MLO view","mlo","mediolateral"),P("CC view","cc","craniocaudal")]}),
  B("13.2 Describe the lesion.",2,{tags:["spot"],ans:"ก้อน <b>round/oval, circumscribed margin</b>, density ใกล้เคียง/สูงกว่าเนื้อเต้านมเล็กน้อย ไม่มี spiculation หรือ microcalcification ระบุตำแหน่ง quadrant ตามภาพ",exp:"ลักษณะร้าย: irregular, spiculated, pleomorphic microcalcification, architectural distortion",rubric:"ได้ = shape + margin",pts:[CR(P("Round/oval circumscribed mass","circumscrib","round","oval","well.defined","ขอบชัด")),P("No spiculation/calcification","spicul","calcif")]}),
  B("13.3 Diagnosis.",1,{tags:["spot"],ans:"<b>Probably benign breast mass</b> — fibroadenoma หรือ cyst (BI-RADS 3–4a) · ต้องตรวจเพิ่มเพื่อแยกมะเร็ง",exp:"BI-RADS 3 = probably benign (&lt;2% malignant) → follow up 6 เดือน; BI-RADS 4 → biopsy",rubric:"ได้ = benign mass (fibroadenoma/cyst) + ต้อง workup",pts:[CR(P("Fibroadenoma/cyst/benign mass","fibroadenoma","cyst","benign","bi.?rads"))]}),
  B("13.4 Risk factors to ask.",2,{tags:["spot"],ans:"อายุ, <b>ประวัติครอบครัว</b> (มะเร็งเต้านม/รังไข่, BRCA), ประวัติมะเร็ง/atypical hyperplasia เดิม, <b>early menarche, late menopause, nulliparity, first birth &gt;30</b>, ไม่ให้นมบุตร, <b>ฮอร์โมน (OCP, HRT)</b>, ฉายแสงหน้าอก, อ้วนหลังหมดประจำเดือน, สุรา",exp:"Gail model ใช้คำนวณความเสี่ยงมะเร็งเต้านม",rubric:"≥4",pts:[G("≥4 risk factors",4,P("Family history/BRCA","family","ครอบครัว","brca"),P("Early menarche/late menopause","menarche","menopause","ประจำเดือน"),P("Nulliparity/late first birth","nullipar","first birth","บุตร","pregnan"),P("Hormone use","hormone","ocp","hrt","ฮอร์โมน"),P("Chest radiation","radiat","ฉายแสง"),P("Prior breast disease","atypi","previous","เคยเป็น"),P("Obesity/alcohol","obes","alcohol","สุรา","อ้วน"))]}),
  B("13.5 Further investigation.",2,{tags:["spot"],ans:"<b>Breast ultrasonography</b> (solid vs cystic) → <b>core needle biopsy</b> ถ้า solid/BI-RADS ≥4 · triple assessment",exp:"Core needle biopsy ดีกว่า FNA เพราะได้ histology และ receptor status",rubric:"ได้ = US + core biopsy",pts:[CR(P("Breast ultrasound","ultrasound","us")),P("Core needle biopsy","core","biopsy")]})
 ),
 interp:"Mammogram",
 summary:["MLO + CC เป็น standard views","BI-RADS 0–6","Triple assessment: clinical + imaging + pathology","Fibroadenoma: หญิงอายุน้อย ก้อนเรียบเคลื่อนได้"]}),

/* ===== MEQ 14 ===== */
SA({page:12,orig:"MEQ 14",num:"SA 14",sub:"Imaging film",title:"Spot — abdominal radiograph in a man with obstipation",img:["os77a_m14"],
 stem:`A 49-year-old man has abdominal distension, abdominal pain and no passage of stool or flatus for 2 days. The plain abdominal film is shown.<br>1. Describe the film.<br>2. What is the diagnosis?<br>3. Give the 2 most common causes in order of likelihood, and the history that would distinguish them.`,
 gray:"14. ชาย 49 ปี มาด้วยท้องอืด ปวดท้อง ไม่ถ่ายไม่ผายลม 2 วัน ผลการตรวจ plain film เป็นดังภาพ a. จงบรรยาย film b. จงให้ diagnosis c. บอก 2 most common causes ตามความน่าจะเป็น และซักประวัติอะไรเพื่อแยก 2 causes ดังกล่าว",
 flag:"⚠ ไม่มีเฉลย — ภาพตีความว่าเป็น small bowel obstruction (ลำไส้เล็กโป่งหลายห่วง air-fluid levels ไม่เห็นลมในลำไส้ใหญ่ส่วนปลาย) ความมั่นใจปานกลาง; ถ้าเป็น large bowel obstruction สาเหตุ = colorectal cancer, volvulus",
 notes:"รูปในไฟล์: ภาพถ่ายท่ายืน ลำไส้โป่งหลายห่วงมี air-fluid levels ต่างระดับ · "+NM+" · คีย์ AC 77D MEQ 12 (SBO) ตอบสาเหตุ adhesion",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจปานกลาง",
 parts:S(
  B("14.1 Describe the film.",3,{tags:["spot"],ans:"Upright abdominal film: <b>multiple dilated small-bowel loops</b> (central, valvulae conniventes) with <b>multiple air-fluid levels at different heights (step-ladder)</b>, paucity of gas in the colon/rectum",exp:"SBO: ลำไส้เล็ก &gt;3 cm · LBO: ลำไส้ใหญ่ &gt;6 cm (cecum &gt;9)",rubric:"ได้ = dilated SB + air-fluid levels + no distal gas",pts:[CR(P("Dilated small bowel loops","dilat","small bowel","valvulae","โป่ง")),CR(P("Multiple air-fluid levels","air.fluid","step.?ladder","ระดับ")),P("Absent distal/colonic gas","no gas","absent","paucity","distal","colon")]}),
  B("14.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Mechanical small bowel obstruction</b> (complete)",exp:"Partial SBO มีลมผ่านไปลำไส้ใหญ่บ้าง ส่วนใหญ่รักษาด้วย NG + IV fluid ได้",rubric:"ได้ = SBO",pts:[CR(P("Small bowel obstruction","small bowel obstruction","sbo","bowel obstruction","ลำไส้อุดตัน"))]}),
  B("14.3 Two causes and distinguishing history.",4,{tags:["spot"],ans:"(1) <b>Adhesion</b> — ถามประวัติ<b>ผ่าตัดช่องท้อง</b>/แผลผ่าตัดเดิม, เคยเป็นแบบนี้ · (2) <b>Hernia (incarcerated)</b> — ถามประวัติ<b>ก้อนที่ขาหนีบ/สะดือ</b>ที่เคยดันกลับได้แล้วตอนนี้ดันไม่เข้า/เจ็บ · (ถ้าเป็น LBO: colorectal cancer — ถ่ายเปลี่ยนนิสัย ถ่ายเป็นเลือด น้ำหนักลด; volvulus — ท้องผูกเรื้อรัง ติดเตียง)",exp:"สาเหตุ SBO ในคนไม่เคยผ่าตัด: hernia, มะเร็ง, gallstone ileus, bezoar, Crohn's",rubric:"ได้ = adhesion + hernia พร้อมคำถามแยก",pts:[CR(P("Adhesion — previous surgery","adhesion","พังผืด","previous surgery","ผ่าตัด")),CR(P("Hernia — groin/umbilical lump","hernia","ไส้เลื่อน","groin","ขาหนีบ","lump")),P("Malignancy history (weight loss, bowel habit)","cancer","weight","มะเร็ง","bowel habit")]})
 ),
 interp:"Bowel obstruction",
 summary:["SBO: adhesion &gt; hernia &gt; malignancy","LBO: colorectal cancer &gt; volvulus &gt; diverticular","ไม่เคยผ่าตัด + SBO → หา hernia (รวม obturator/femoral)","Strangulation signs: ไข้, ชีพจรเร็ว, ปวดต่อเนื่อง, peritonitis, lactate สูง"]}),

/* ===== MEQ 15 ===== */
SA({page:13,orig:"MEQ 15",num:"SA 15",sub:"Imaging film",title:"Spot — an endoscopic examination of the colon",img:["os77a_m15a","os77a_m15b"],
 stem:`The pictures show an examination and its findings.<br>1. What is this examination?<br>2. Give 2 indications.<br>3. What is the diagnosis from the findings shown?<br>4. Give 2 complications of this condition.`,
 gray:"15. จงตอบคำถาม a. การตรวจนี้คือการตรวจอะไร b. จงบอก indication 2 ข้อ c. ผลการตรวจเป็นดังภาพ จงบอก diagnosis d. จงบอก complication ของข้อ c มา 2 อย่าง",
 notes:"รูปในไฟล์: (1) แผนภาพการส่องกล้อง colonoscopy (มีป้ายคำว่า Colonoscopy — เป็นคำตอบของข้อย่อยแรก) (2) ภาพส่องกล้องเห็นรูเปิดของถุงหลายรู (ลูกศร) · "+NM,
 flag:"รูปแผนภาพในไฟล์มีคำว่า \"Colonoscopy\" ซึ่งเป็นคำตอบข้อย่อยแรก — เราคงรูปไว้ตามไฟล์",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("15.1 Examination.",1,{tags:["spot"],ans:"<b>Colonoscopy</b>",exp:"Colonoscopy ต้องเตรียมลำไส้ (PEG split dose) และดูถึง cecum/terminal ileum",rubric:"ได้ = colonoscopy",pts:[CR(P("Colonoscopy","colonoscop"))]}),
  B("15.2 Two indications.",2,{tags:["spot"],ans:"<b>Colorectal cancer screening/surveillance</b>, <b>lower GI bleeding</b>/positive FIT, iron deficiency anemia, เปลี่ยนนิสัยการขับถ่าย/ท้องเสียเรื้อรัง, ตัด polyp, ติดตาม IBD",exp:"Screening ในประชากรทั่วไปเริ่มอายุ 45–50 ปี ทุก 10 ปี (ถ้าปกติ)",rubric:"≥2",pts:[G("≥2 indications",2,P("Screening/surveillance","screen","surveil","คัดกรอง"),P("Lower GI bleeding / FIT+","bleed","เลือด","fit","occult"),P("Iron deficiency anemia","anemia","ซีด"),P("Change in bowel habit","bowel habit","diarr","ท้องเสีย"),P("Polypectomy / IBD","polyp","ibd","colitis"))]}),
  B("15.3 Diagnosis.",1,{tags:["spot"],ans:"<b>Colonic diverticulosis</b>",exp:"ในคนเอเชีย diverticulosis เป็นข้างขวาบ่อยกว่าคนตะวันตก",rubric:"ได้ = diverticulosis",pts:[CR(P("Diverticulosis","diverticul"))]}),
  B("15.4 Two complications.",2,{tags:["spot"],ans:"<b>Diverticular bleeding</b> (painless massive LGIB), <b>diverticulitis</b> → abscess, perforation/peritonitis, fistula (colovesical), stricture/obstruction",exp:"Diverticular bleeding ส่วนใหญ่หยุดเอง; ไม่หยุด → endoscopic hemostasis หรือ angioembolization",rubric:"≥2",pts:[G("≥2 complications",2,P("Bleeding","bleed","เลือด"),P("Diverticulitis","diverticulitis","อักเสบ"),P("Perforation/abscess","perforat","abscess","ฝี","ทะลุ"),P("Fistula","fistula"),P("Stricture/obstruction","stricture","obstruct"))]})
 ),
 interp:"Diverticulosis",
 summary:["Diverticulosis: false diverticula ที่จุดหลอดเลือดแทง","Bleeding: painless massive","Diverticulitis: Hinchey I–IV","Colovesical fistula: pneumaturia"]}),

/* ===== OSCE 1 ===== */
Co({page:14,orig:"1",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and one use of each (a–e)",img:["os77a_o1"],kimg:["os77a_ko1"],
 stem:`Five instruments (a–e) are shown.<br>1. Name each instrument and give one use.`,
 gray:"OSCE 1. [รูปเครื่องมือ a–e] จงบอกชื่อเครื่องมือ และวิธีใช้เครื่องมือละ 1 ข้อ",
 notes:"รูปในไฟล์: a รีแทรกเตอร์ปลายงอสองด้าน b ท่อพลาสติกใสมีด้ามจับ c กรรไกรปลายโค้ง d ด้ามยาวปลายช้อนเล็ก e คีมจับปลายมีฟัน · เฉลยในไฟล์ Key 77A: a Army-navy retractor, b disposable proctoscope, c curved Mayo scissors, d Volkmann curette, e Kocher forceps",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("1.1 Name and one use of each instrument (a–e).",10,{tags:["inst"],key:KF+"a. Army navy retractor, retract skin in minor surgery · b. Disposable proctoscope, examine anal canal · c. Curved mayo scissor, cut thick fascia · d. Volkmann curette, scrape tissue out of bone · e. Kocher forceps, hold fascia",
   ans:"a <b>Army-navy retractor</b> — retract skin/superficial tissue · b <b>Disposable proctoscope</b> — examine the anal canal (hemorrhoids, fissure) · c <b>Curved Mayo scissors</b> — cut thick tissue/fascia · d <b>Volkmann (bone) curette</b> — scrape tissue/sequestrum from bone · e <b>Kocher forceps</b> — grasp fascia/tough tissue",exp:"Kocher ปลายมีฟัน ห้ามจับลำไส้",rubric:"แต่ละชิ้น: ชื่อ 1 + การใช้ 1",
   pts:[P("a Army-navy retractor","army","navy"),P("a Use: retract skin","retract"),P("b Proctoscope","proctoscope","anoscope"),P("b Use: examine anal canal","anal","hemorrhoid","ทวาร"),P("c Curved Mayo scissors","mayo"),P("c Use: cut fascia/thick tissue","fascia","thick","cut","ตัด"),P("d Volkmann curette","curette","volkmann"),P("d Use: scrape bone","scrape","bone","ขูด"),P("e Kocher forceps","kocher"),P("e Use: hold fascia","hold","grasp","fascia","จับ")]})
 ),
 interp:"Surgical instruments",
 summary:["Retractors: army-navy, Senn (เล็ก), Deaver/Richardson (ลึก)","Scissors: Mayo (หนา), Metzenbaum (บาง)","Kocher มีฟัน vs Babcock/Allis สำหรับเนื้อเยื่อ"]}),

/* ===== OSCE 2 ===== */
Co({page:14,orig:"2",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — one simple interrupted and one vertical mattress suture with surgical knots",
 stem:`A suturing pad and several needle holders are provided. The examiner is observing.<br>1. Place one simple interrupted suture and one vertical mattress suture, tied with surgical knots.`,
 gray:"OSCE 2. เย็บ 1 simple suture, 1 vertical mattress ด้วย surgical knot (มี needle holder มาให้จำนวนมาก แต่จารเฉลยว่าใช้อันไหนก็ถูก)",
 sp:"หุ่นผิวหนัง/แผ่นซิลิโคนมีแผล · needle holder หลายแบบ (อาจารย์เฉลยว่าใช้อันไหนก็ได้) · forceps, กรรไกร, ไหม · ผู้คุมดู: การจับ needle holder/forceps, แทงเข็มตั้งฉาก, eversion, surgical knot (ห่วงแรก 2 รอบ), ตัดไหมยาวเหมาะสม",
 notes:"ผู้จดเขียนว่ามี needle holder ให้เลือกหลายอัน แต่อาจารย์เฉลยว่าใช้อันไหนก็ถูก · ไฟล์ Key 77A ช่องนี้ว่าง · สถานีเดียวกันพบใน AC 77B, 77C",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("2.1 Simple interrupted and vertical mattress sutures.",10,{tags:["proc"],ans:"จับ needle holder แบบ thenar/ring grip จับเข็มที่ 1/3–1/2 จากโคน · ใช้ toothed forceps จับขอบแผลเบา ๆ · <b>Simple interrupted</b>: แทงตั้งฉาก 90° ห่างขอบเท่ากันทั้งสองข้าง ลึกเท่ากัน · <b>Vertical mattress</b>: <b>far–far</b> (ห่างขอบ ~5–8 mm ลึก) แล้ว<b>ย้อน near–near</b> (~1–2 mm ตื้น) ฝั่งเดียวกัน → eversion · ผูก <b>surgical knot</b> (ห่วงแรกพัน 2 รอบ แล้ว square ตาม) ปมไว้ด้านข้างแผล · ตัดไหมเหลือ ~5 mm · ทิ้งเข็มใน sharps",exp:"ทิ้งเข็มใน sharps container ทันที ห้ามจับเข็มด้วยมือ",rubric:"แบ่งตามขั้นตอน",
   pts:[H("Handling",20),P("Correct needle holder/forceps grip","grip","จับ","needle holder"),H("Simple interrupted",30),CR(P("Perpendicular entry, equal bites","perpendicular","90","ตั้งฉาก","equal","เท่ากัน")),H("Vertical mattress",30),CR(P("Far-far then near-near","far","near")),P("Edge eversion","evert"),H("Knot",20),CR(P("Surgical knot (double first throw)","surgical knot","double","2 รอบ","square")),P("Knot to one side / cut length","side","ข้าง","cut","ตัด")]})
 ),
 interp:"Suturing",
 summary:["Vertical mattress: far–far, near–near → eversion","Surgical knot: ห่วงแรก 2 รอบ กันลื่น","ทิ้งเข็มใน sharps container"]}),

/* ===== OSCE 3 ===== */
Co({page:15,orig:"3",topic:"suture",sub:"Suture material",title:"Suture materials — choosing sutures for a bowel operation",img:["os77a_o3a","os77a_o3b","os77a_o3c"],kimg:["os77a_ko3"],
 stem:`A patient with abdominal pain and no passage of stool or flatus for 2 days undergoes the operation shown. The bowel is sutured with (1); a vessel cut during the operation is ligated with (2); after the operation the subcutaneous layer is closed with a multifilament suture (3) and the skin with (4). Suture packs a–f are shown.<br>1. Name the operation.<br>2. For (1)–(4), give the letter, trade name, generic name, filament type and absorbability.`,
 gray:"OSCE 3. ผู้ป่วยมาด้วยปวดท้อง ไม่ถ่ายไม่ผายลม 2 วัน ตัดสินใจผ่าตัดดังในภาพ เย็บ bowel ด้วย (1) จากนั้นตัดถูกเส้นเลือด จึงผูกเส้นเลือดด้วย (2) หลังผ่าตัดเสร็จสิ้น จึงเย็บชั้น subcutaneous ด้วยไหม multifilament นั่นคือ (3) และเย็บชั้น skin ด้วย (4) · [รูปไหม a–f] · การผ่าตัดในภาพคือ ___ · ตาราง Letter / Trade name / Generic name / Filament / Absorbability",
 notes:"รูปในไฟล์: ลำไส้สีคล้ำ (ขาดเลือด) และลำไส้ที่ต่อแล้ว (B) · ซองไหม a 5-0 สีฟ้า, b 0 เข็มกลม, c 4-0 ซองขาว (PDS), d 3-0 ซองม่วง (Vicryl), e 4-0 ซองเขียว, f เส้นไหมดำ (ชื่อยี่ห้อถูกปิดในไฟล์) · เฉลยในไฟล์ Key 77A: Explore laparotomy with bowel resection and primary anastomosis; (1) C PDS polydioxanone synthetic monofilament absorbable; (2) F silk biologic multifilament non-absorbable; (3) D Vicryl polyglactin synthetic multifilament absorbable; (4) E nylon polyamide synthetic monofilament non-absorbable",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง (การระบุตัวอักษรอิงสีซองตามคีย์)",
 parts:S(
  B("3.1 Name the operation.",2,{tags:["suture"],key:KF+"Explore laparotomy with bowel resection and primary anastomosis",ans:"<b>Exploratory laparotomy with small bowel resection and primary anastomosis</b> (ลำไส้ขาดเลือดจาก obstruction/strangulation)",exp:"ลำไส้ที่ขาดเลือดต้องประเมิน viability (สี, peristalsis, ชีพจร mesentery) ก่อนตัด",rubric:"ได้ = laparotomy + resection + anastomosis",pts:[CR(P("Bowel resection with anastomosis","resection","anastomos","ตัดต่อ")),P("Exploratory laparotomy","laparotomy","explor")]}),
  B("3.2 Suture table (1)–(4).",8,{tags:["suture"],key:KF+"(1) C PDS polydioxanone synthetic monofilament absorbable · (2) F silk silk biologic multifilament non-absorbable · (3) D Vicryl polyglactin synthetic multifilament absorbable · (4) E nylon polyamide synthetic monofilament non-absorbable",
   ans:"(1) bowel: <b>c — PDS (polydioxanone)</b>, monofilament, absorbable · (2) vessel ligation: <b>f — silk</b>, multifilament (braided), non-absorbable · (3) subcutaneous: <b>d — Vicryl (polyglactin 910)</b>, multifilament, absorbable · (4) skin: <b>e — nylon (polyamide, Ethilon/Dafilon)</b>, monofilament, non-absorbable",exp:"ลำไส้ใช้ absorbable synthetic ได้ทั้ง Vicryl/PDS 3-0 ถึง 4-0 · ligate หลอดเลือดใช้ silk หรือ Vicryl",rubric:"แถวละ 2 คะแนน",
   pts:[P("(1) PDS polydioxanone monofilament absorbable","pds","polydioxanone"),P("(2) Silk multifilament non-absorbable","silk"),P("(3) Vicryl polyglactin multifilament absorbable","vicryl","polyglactin"),P("(4) Nylon polyamide monofilament non-absorbable","nylon","polyamide","ethilon")]})
 ),
 interp:"Suture selection",
 summary:["Absorbable: Vicryl (braided, ~60–90 วัน), PDS (mono, ~180 วัน), Monocryl, chromic catgut","Non-absorbable: silk (braided, biologic), nylon (mono), Prolene (mono — vascular, mesh)","Skin: nylon/Prolene หรือ subcuticular Monocryl"]}),

/* ===== OSCE 4 ===== */
Co({page:17,orig:"4",topic:"inst",sub:"Drain",title:"Devices — name and two indications each (a–c)",img:["os77a_o4"],kimg:["os77a_ko4"],
 stem:`Three devices (a–c) are shown.<br>1. Name each device and give 2 indications for each.`,
 gray:"OSCE 4. จงบอกชื่ออุปกรณ์ และบอก indication อุปกรณ์ละ 2 ข้อ a. b. c.",
 notes:"รูปในไฟล์: a ขวดสุญญากาศมีสายระบาย b สายพลาสติกปลายมีรู c ถุงหน้าท้องและแป้น · เฉลยในไฟล์ Key 77A: a Redivac drain — drainage for mastectomy and thyroidectomy; b chest tube — pneumothorax and hemothorax; c ostomy bag and baseplate — permanent ostomy in Hartmann procedure and abdominoperineal resection",
 flag:"สาย b ในรูปดูเล็ก (คล้าย small-bore catheter) — ตอบตามคีย์ (chest tube)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง",
 parts:S(
  B("4.1 Name and two indications each.",9,{tags:["inst"],key:KF+"a. Redivac drain, drainage for mastectomy and thyroidectomy · b. Chest tube, drainage in pneumothorax and hemothorax · c. Ostomy bag and baseplate, permanent ostomy in hartmann procedure and abdominoperineal resection",
   ans:"a <b>Closed suction drain (Redivac)</b> — หลัง mastectomy/axillary dissection, thyroidectomy, flap/large dead space · b <b>Chest tube (intercostal drain)</b> — pneumothorax, hemothorax, empyema, หลังผ่าตัดช่องอก · c <b>Two-piece ostomy appliance (bag + baseplate)</b> — colostomy หลัง Hartmann/APR, ileostomy",exp:"Closed suction drain ลด seroma/hematoma ใต้ flap; ถอดเมื่อออกน้อยกว่า ~30–50 mL/วัน",rubric:"แต่ละชิ้น: ชื่อ 1 + ข้อบ่งชี้ 2",
   pts:[CR(P("a Redivac/closed suction drain","redivac","suction","vacuum")),P("a Indications: mastectomy/thyroidectomy","mastectomy","thyroid","flap"),CR(P("b Chest tube","chest tube","icd","intercostal")),P("b Indications: pneumothorax/hemothorax","pneumothorax","hemothorax","empyema"),CR(P("c Ostomy bag and baseplate","ostomy","colostomy","stoma")),P("c Indications: Hartmann/APR","hartmann","apr","abdominoperineal","ileostomy")]})
 ),
 interp:"Drains and devices",
 summary:["Closed suction: Redivac, JP · passive: Penrose, corrugated","Chest drain: safe triangle 5th ICS","Ostomy: one-piece/two-piece"]}),

/* ===== OSCE 5 ===== */
Co({page:17,orig:"5",topic:"proc",sub:"Local anesthesia",ex:1,proc:1,title:"Procedure — sterile gloving and local anesthetic infiltration",
 stem:`Sterile gloves, 18G and 24G needles, local anesthetic and toothed forceps are provided. The examiner is observing.<br>1. Put on sterile gloves.<br>2. Draw up and infiltrate local anesthetic as if on a real patient.`,
 gray:"OSCE 5. ใส่ถุงมือ sterile ฉีดยาชา มีเข็ม 18, 24 มาให้ ฉีดยาชาดูดอากาศ (ไม่ได้ให้บอก dose แต่บอกได้เพื่อความเท่) มี tooth forceps มาให้ ให้ทำเหมือนอยู่กับคนไข้จริง",
 sp:"หุ่นแขน · ถุงมือ sterile · เข็ม 18G (ดูดยา) และ 24G (ฉีด) · syringe · 1% lidocaine · toothed forceps (ใช้ทดสอบชา) · ผู้คุมดู: ใส่ถุงมือไม่ปนเปื้อน, ตรวจยา, ใช้เข็ม 18G ดูด เปลี่ยน 24G ฉีด, ไล่อากาศ, aspirate, ฉีดช้า, ทดสอบชาด้วย forceps, ทิ้งเข็ม",
 notes:"ผู้จดเขียนว่าไม่ได้ให้บอก dose แต่บอกได้ · ไฟล์ Key 77A ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("5.1 Sterile gloving.",3,{tags:["proc"],ans:"ล้างมือ · เปิดซองไม่ปนเปื้อน · มือเปล่าจับ<b>ด้านในขอบพับ</b>ใส่ข้างแรก · มือที่ใส่แล้ว<b>สอดใต้ขอบพับ</b>ใส่ข้างที่สอง · มืออยู่เหนือเอว",exp:"ถ้าปนเปื้อนต้องเปลี่ยนถุงมือใหม่ทันที",rubric:"ได้ = ไม่ปนเปื้อน",pts:[CR(P("Aseptic open-glove technique","inside","ด้านใน","under the cuff","ใต้ขอบ","sterile"))]}),
  B("5.2 Local anesthetic infiltration.",7,{tags:["proc"],ans:"บอกผู้ป่วย/ขออนุญาต · ตรวจ<b>ชื่อยา ความเข้มข้น วันหมดอายุ</b> · ดูดด้วย<b>เข็ม 18G</b> → <b>เปลี่ยนเป็น 24G</b> · <b>ไล่อากาศ</b> · แทงตื้นทำ wheal · <b>aspirate ก่อนฉีด</b> · ฉีดช้า ๆ ขณะถอยเข็ม · รอ 2–5 นาที <b>ทดสอบชาด้วย toothed forceps</b> · max dose lidocaine 4.5 mg/kg (7 mg/kg with adrenaline) · ทิ้งเข็มใน sharps",exp:"ระวัง LAST: ชาริมฝีปาก หูอื้อ ชัก → หยุดฉีด, airway, lipid emulsion",rubric:"แบ่งตามขั้นตอน",
   pts:[P("Explain to patient","explain","อธิบาย","consent"),P("Check drug","check","ตรวจ","expir"),P("Large needle to draw, small to inject","18","24","เปลี่ยนเข็ม","change needle"),CR(P("Expel air","ไล่อากาศ","expel","air")),CR(P("Aspirate before injecting","aspirat","ดูดกลับ")),P("Test anesthesia with forceps","test","forceps","ทดสอบ"),P("Max dose 4.5 mg/kg","4.5","max dose"),P("Sharps disposal","sharps","ทิ้ง")]})
 ),
 interp:"Local anesthesia",
 summary:["Lidocaine 4.5 mg/kg (≤300 mg) · with adrenaline 7 mg/kg","Aspirate ก่อนฉีด ป้องกันเข้าหลอดเลือด","LAST → lipid emulsion 20%"]}),

/* ===== OSCE 6 ===== */
Co({page:18,orig:"6",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — painful swelling of a long-standing back lump",img:["os77a_o6"],kimg:["os77a_ko6"],
 stem:`A 32-year-old man has had a lump on his back for more than 1 year. For 2 days it has become painful and swollen, with fever. The photograph is shown.<br>1. Describe the treatment until he is cured.`,
 gray:"OSCE 6. ชาย 32 ปี มีตุ่มนูนบริเวณหลังมานานกว่า 1 ปี วันนี้มาด้วยปวดและบวมบริเวณตุ่ม มีไข้ 2 วัน จงบอกการรักษาจนกระทั่งผู้ป่วยหายขาด",
 notes:"รูปในไฟล์: ก้อนนูนแดงที่หลัง · เฉลยในไฟล์ Key 77A: Diag = infected epidermal inclusion cyst; Tx: Incision and drainage จนอาการดีขึ้นก่อน แล้วจึงนัดมา cyst excision โดยตัด skin ด้านบนออกไปด้วย",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("6.1 Diagnosis and treatment until cure.",6,{tags:["img"],key:KF+"Diag = infected epidermal inclusion cyst · Tx: Incision and drainage จนอาการดีขึ้นก่อน แล้วจึงนัดมา cyst excision โดยตัด skin ด้านบนออกไปด้วย",
   ans:"Diagnosis: <b>infected (inflamed) epidermal inclusion cyst</b> · ระยะเฉียบพลัน: <b>incision and drainage</b> ใต้ยาชา ขูด keratin/หนอง ล้าง ทำแผล ± ยาฆ่าเชื้อถ้ามี cellulitis/ไข้ · เมื่อสงบ (4–6 สัปดาห์): <b>elective complete excision</b> ทั้งถุง + <b>elliptical skin รวม punctum</b> เพื่อไม่ให้เป็นซ้ำ",exp:"ตัดถุงตอนอักเสบทำได้ยากและแผลแยก",rubric:"ได้ = Dx + I&amp;D + excision ภายหลังพร้อม punctum",
   pts:[CR(P("Infected epidermal cyst","epidermal","inclusion","sebaceous","cyst")),CR(P("Incision and drainage","incision","drain","i&d","i ?& ?d")),P("Antibiotics if cellulitis/fever","antibiotic","ยา"),CR(P("Delayed complete excision with overlying skin/punctum","excision","ตัด","punctum","ellip"))]})
 ),
 interp:"Infected epidermal cyst",
 summary:["Epidermal cyst: punctum, ติดผิว","อักเสบ → I&amp;D → excision ภายหลัง","ตัดหมดถุง + punctum ป้องกันเป็นซ้ำ"]}),

/* ===== OSCE 7 ===== */
Co({page:18,orig:"7",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — LUTS: symptom score and DRE on a model",
 stem:`A 65-year-old man has had a poor stream, post-void dribbling, intermittency, straining and nocturia 2–3 times per night for 1 month.<br>1. How would you assess the severity of his symptoms?<br>2. Perform a digital rectal examination on the model and describe the prostate.<br>3. What is the diagnosis?`,
 gray:"OSCE 7. ชาย 65 ปี มี poor stream, post void dripping, intermittency, straining, nocturia 2-3 time/night มา 1 เดือน a. จะประเมินความรุนแรงของอาการด้วยอะไร b. จง PR (มีแต่หุ่น ไม่มีอาจารย์คุม) แล้วบรรยายลักษณะ prostate c. จงบอก diagnosis",
 sp:"หุ่น PR (ต่อมลูกหมากโตเรียบสมมาตร) · ไม่มีอาจารย์คุม — เขียนคำตอบ · สิ่งที่ควรเขียน/ทำ: ขออนุญาต, ท่า left lateral (Sims), สวมถุงมือ ทาเจลหล่อลื่น, ดูรอบทวาร, สอดนิ้ว, คลำต่อมลูกหมาก, ดูเลือดที่ถุงมือ",
 notes:"ผู้จดเขียนว่ามีแต่หุ่น ไม่มีอาจารย์คุม · เฉลยในไฟล์ Key 77A: a. IPS score; b. โพย: diffused enlarged prostate, symmetry, smooth surface, firm consistency, no nodularity; c. Benign prostatic hyperplasia",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("7.1 Assessment of symptom severity.",1,{tags:["pe"],key:KF+"IPS score",ans:"<b>International Prostate Symptom Score (IPSS)</b> — mild 0–7, moderate 8–19, severe 20–35 + quality of life score",exp:"IPSS ≥8 (moderate) ขึ้นไป พิจารณายา alpha-blocker",rubric:"ได้ = IPSS",pts:[CR(P("IPSS","ipss","ips","prostate symptom score"))]}),
  B("7.2 DRE technique and prostate description.",6,{tags:["pe"],key:KF+"diffused enlarged prostate, symmetry, smooth surface, firm consistency, no nodularity",ans:"ขออนุญาต มีผู้ช่วย · ท่า <b>left lateral (Sims)</b> เข่าชิดอก · ใส่ถุงมือ เจลหล่อลื่น · ดู perianal · สอดนิ้วช้า ๆ ประเมิน anal tone · คลำต่อม: <b>diffusely enlarged, symmetrical, smooth surface, firm/rubbery, median sulcus preserved, no nodule, non-tender</b> · ดูเลือด/มูกที่ถุงมือ · เช็ดทำความสะอาด",exp:"มะเร็ง: hard nodule, ขรุขระ, median sulcus หาย",rubric:"technique + description",
   pts:[H("Technique",40),P("Consent / chaperone","consent","ขออนุญาต","chaperone"),P("Left lateral position","left lateral","sims","ตะแคง"),P("Gloves and lubricant","lubric","เจล","glove"),H("Description",60),CR(P("Enlarged, symmetrical","enlarg","โต","symmetr")),CR(P("Smooth, firm/rubbery, no nodule","smooth","rubbery","firm","no nodul","เรียบ")),P("Median sulcus preserved","median sulcus","sulcus")]}),
  B("7.3 Diagnosis.",1,{tags:["pe"],key:KF+"Benign prostatic hyperplasia",ans:"<b>Benign prostatic hyperplasia</b> with LUTS",exp:"BPH เกิดที่ transition zone; มะเร็งส่วนใหญ่ที่ peripheral zone (คลำได้ทาง DRE)",rubric:"ได้ = BPH",pts:[CR(P("BPH","bph","benign prostatic"))]})
 ),
 interp:"BPH",
 summary:["IPSS: 0–7 mild, 8–19 moderate, 20–35 severe","DRE BPH: โตเรียบ rubbery · CA: hard nodule","Workup: UA, PSA (ถ้าเปลี่ยนการรักษา), PVR, uroflowmetry"]}),

/* ===== OSCE 8 ===== */
Co({page:19,orig:"8",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a right groin mass in an elderly man",img:["os77a_o8"],kimg:["os77a_ko8"],
 stem:`A 68-year-old man has a right groin mass, as shown.<br>1. Give a detailed provisional diagnosis.<br>2. Give 3 specific physical examinations and the expected findings.<br>3. Take a history for 3 risk factors.<br>4. Give 2 complications.`,
 gray:"OSCE 8. ชาย 68 ปี มาด้วยก้อนที่ขาหนีบด้านขวาดังรูป (รูปจริงใหญ่แต่ไม่ใหญ่เท่านี้ ผิวแดง ๆ) a. จง provisional diagnosis โดยละเอียด b. จงบอกการตรวจร่างกายจำเพาะ 3 อย่างพร้อมบอกผลที่คาดว่าจะเจอ c. จงซักประวัติเพื่อหา risk factor 3 อย่าง d. จงบอก complication 2 อย่าง",
 notes:"รูปในไฟล์: ก้อนใหญ่ที่ขาหนีบลงถุงอัณฑะขวา (ผู้จดบอกว่ารูปจริงเล็กกว่านี้ ผิวแดง ๆ) · เฉลยในไฟล์ Key 77A: a. Right indirect inguinal hernia; b. Get above mass test - cannot get above mass; Occlusion test - occlusion can prevent herniation; Invagination test - mass at tip of finger; c. Constipation, chronic cough, BPH, heavy lifting; d. Small bowel obstruction, bowel perforation",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — ถ้าผิวแดงเจ็บ ต้องนึกถึง incarcerated/strangulated hernia",
 parts:S(
  B("8.1 Provisional diagnosis.",2,{tags:["img"],key:KF+"Right indirect inguinal hernia",ans:"<b>Right indirect inguinoscrotal hernia</b> (ถ้าดันไม่เข้า/แดงเจ็บ = incarcerated/strangulated)",exp:"Hernia ที่ดันไม่เข้าแดงเจ็บ = incarcerated/strangulated → ผ่าตัดด่วน",rubric:"ได้ = right indirect inguinal hernia",pts:[CR(P("Inguinal hernia","inguinal","hernia","ไส้เลื่อน")),P("Indirect / inguinoscrotal","indirect","scrot"),P("Right side","right","ขวา")]}),
  B("8.2 Three specific examinations with expected findings.",3,{tags:["img"],key:KF+"Get above mass test - cannot get above mass · Occlusion test - occlusion can prevent herniation · Invagination test - mass at tip of finger",ans:"<b>Get above the mass</b>: คลำเหนือก้อนไม่ได้ (ต่างจาก hydrocele) · <b>Cough impulse</b>: มีแรงกระแทก · <b>Deep ring occlusion test</b>: กด deep ring แล้วไอ ก้อนไม่ออก (indirect) · <b>Invagination test</b>: impulse ที่ปลายนิ้ว (indirect) · transillumination negative · reducibility",exp:"Direct hernia: impulse ที่ pulp ของนิ้วระหว่าง invagination และออกแม้กด deep ring",rubric:"≥3",pts:[G("≥3 tests with findings",3,P("Cannot get above mass","get above","เหนือก้อน"),P("Cough impulse","cough"),P("Deep ring occlusion","occlusion","deep ring","ring"),P("Invagination test","invagination","fingertip","tip"),P("Transillumination negative","transillum"),P("Reducibility","reduc","ดันกลับ"))]}),
  B("8.3 Three risk factors to ask.",2,{tags:["img"],key:KF+"Constipation, chronic cough, BPH, heavy lifting",ans:"เพิ่มความดันในช่องท้อง: <b>chronic cough</b> (สูบบุหรี่, COPD), <b>constipation/straining</b>, <b>BPH/LUTS</b>, <b>heavy lifting</b>, ascites, obesity · connective tissue/อายุ",exp:"ต้องหา BPH/มะเร็งลำไส้ที่เป็นสาเหตุเบ่งในผู้สูงอายุก่อนผ่าตัด",rubric:"≥3",pts:[G("≥3 risk factors",3,P("Chronic cough","cough","ไอ"),P("Constipation","constip","ท้องผูก","strain"),P("BPH/LUTS","bph","prostat","ปัสสาวะ"),P("Heavy lifting","lift","ยก"),P("Ascites/obesity","ascites","obes"))]}),
  B("8.4 Two complications.",2,{tags:["img"],key:KF+"Small bowel obstruction, bowel perforation",ans:"<b>Incarceration</b>, <b>bowel obstruction</b>, <b>strangulation</b> → ischemia/perforation",exp:"Strangulation: ไข้ ปวดต่อเนื่อง ผิวแดง ชีพจรเร็ว",rubric:"≥2",pts:[G("≥2",2,P("Incarceration","incarcerat","ติด"),P("Obstruction","obstruct","อุดตัน"),P("Strangulation","strangulat","ขาดเลือด"),P("Perforation","perforat","ทะลุ"))]})
 ),
 interp:"Inguinal hernia",
 summary:["Indirect: lateral ต่อ inferior epigastric, ลงถุงอัณฑะ","Direct: Hesselbach triangle","รักษา: Lichtenstein mesh / laparoscopic TEP-TAPP","Strangulation = emergency"]}),

/* ===== OSCE 9 ===== */
Co({page:20,orig:"9",topic:"hx",sub:"Dysphagia",ex:1,title:"History taking — progressive dysphagia in a young woman",
 stem:`A 29-year-old woman presents with difficulty in swallowing.<br>1. Take a history from the simulated patient.<br>2. What is the diagnosis?`,
 gray:"OSCE 9. หญิง 29 ปี มาด้วยกลืนลำบาก a. จงซักประวัติผู้ป่วยจำลอง i. กลืนลำบากมา 6 เดือน เป็นมากขึ้นเรื่อย ๆ ไม่มีช่วงหาย กลืนติดของเหลวแต่ไม่ติดของแข็ง (จริง ๆ ไม่ได้พิมพ์ผิด) ตอนหลังติดทั้งของแข็งและของเหลว มีน้ำหนักลด 2 กก. ใน 2 เดือน ที่เหลือ PH, SH, FH neg all b. จงบอก diagnosis",
 sp:"ผู้ป่วยจำลองหญิง 29 ปี: กลืนลำบาก 6 เดือน เป็นมากขึ้นเรื่อย ๆ ไม่มีช่วงหาย ตอนแรกติดของเหลว (ไม่ติดของแข็ง) ต่อมาติดทั้งของแข็งและของเหลว · น้ำหนักลด 2 กก. ใน 2 เดือน · (Claude เติม) มีสำรอกอาหารที่ไม่ย่อยออกมาตอนกลางคืน ไม่เจ็บกลืน ไม่อาเจียนเป็นเลือด ไม่มีเสียงแหบ · โรคประจำตัว ยา ประวัติสังคม (บุหรี่ สุรา) ประวัติครอบครัว: ปฏิเสธทั้งหมด",
 flag:"อาการสำรอก/ไม่เจ็บกลืนใน SP Claude เติม",
 notes:"ผู้จดยืนยันว่าตอนแรก \"ติดของเหลวแต่ไม่ติดของแข็ง (จริง ๆ ไม่ได้พิมพ์ผิด)\" · ไฟล์ Key 77A ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง (dysphagia ต่อของเหลวก่อน/พร้อมของแข็ง = motility disorder)",
 parts:S(
  B("9.1 History taking.",8,{tags:["hx"],ans:"แนะนำตัว ยืนยันตัวตน · <b>Dysphagia</b>: onset/duration, <b>progressive vs intermittent</b>, <b>solid vs liquid</b> (ของเหลวก่อน = motility), oropharyngeal vs esophageal (สำลัก ไอขณะกลืน), ระดับที่ติด · อาการร่วม: <b>regurgitation</b> อาหารไม่ย่อย/กลางคืน, odynophagia, heartburn, chest pain, <b>น้ำหนักลด</b>, hematemesis, เสียงแหบ, ไอเรื้อรัง/ปอดอักเสบ (aspiration) · PMH (scleroderma, stroke), ยา (NSAID, doxycycline), สารกัดกร่อน, บุหรี่/สุรา, ครอบครัวเป็นมะเร็ง · สรุปและแจ้ง dx",exp:"Dysphagia ต่อของแข็งก่อน + progressive + น้ำหนักลด = mechanical obstruction (มะเร็ง, stricture)",rubric:"แบ่งหมวด",
   pts:[H("Opening",10),P("Introduce and confirm identity","แนะนำ","introduce","ชื่อ"),H("Dysphagia characteristics",45),CR(P("Solid vs liquid","solid","liquid","ของแข็ง","ของเหลว")),P("Progressive vs intermittent","progressive","intermittent","มากขึ้น","เป็น ๆ หาย ๆ"),P("Duration","duration","นาน","เดือน"),P("Oropharyngeal symptoms (choking/coughing)","choke","สำลัก","cough"),H("Associated symptoms",30),CR(P("Regurgitation","regurgit","สำรอก")),P("Weight loss","weight","น้ำหนัก"),P("Odynophagia / heartburn / chest pain","odynophag","heartburn","chest pain","เจ็บ"),P("Hematemesis / hoarseness","hematemesis","เลือด","hoarse","แหบ"),H("Background",15),P("Drugs / caustic / smoking / alcohol","drug","ยา","caustic","บุหรี่","สุรา","smok"),P("Family history","family","ครอบครัว")]}),
  B("9.2 Diagnosis.",2,{tags:["hx"],ans:"<b>Achalasia</b> (esophageal motility disorder) — dysphagia ต่อทั้งของแข็งและของเหลว โดยเริ่มจากของเหลว ในหญิงอายุน้อย",exp:"มะเร็งหลอดอาหาร: ผู้สูงอายุ ติดของแข็งก่อนแล้วลามไปของเหลว น้ำหนักลดมาก",rubric:"ได้ = achalasia",pts:[CR(P("Achalasia","achalasia","motility"))]})
 ),
 interp:"Achalasia",
 summary:["Achalasia: LES ไม่คลาย + peristalsis หาย","Barium: bird's beak · manometry = gold standard (Chicago 4.0)","EGD ตัด pseudoachalasia","Tx: pneumatic dilation, Heller myotomy + fundoplication, POEM"]}),

/* ===== OSCE 10 ===== */
Co({page:20,orig:"10",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — right lower abdominal pain with fever",
 stem:`A 40-year-old man has right lower abdominal pain with nausea and vomiting. BT 39 °C, PR 88/min, RR 20/min, BP 120/80 mmHg.<br>1. Perform an abdominal examination.<br>2. What is the diagnosis?`,
 gray:"OSCE 10. ชาย 40 ปี มาด้วยปวดท้องน้อยด้านขวา คลื่นไส้อาเจียน ให้ BT 39, PR 88 bpm, RR 20/min, BP 120/80 mmHg a. จงแสดงการตรวจร่างกาย (มี steth วางอยู่ คนไข้แกล้งเกร็งท้องตอนกดด้านขวาด้วย) b. จงให้การวินิจฉัย (acute appendicitis)",
 sp:"ผู้ป่วยจำลองชาย 40 ปี นอนหงาย · มี stethoscope วางไว้ · เมื่อกดท้องขวาล่าง ผู้ป่วยเกร็งหน้าท้อง (guarding) เจ็บที่ McBurney point · rebound tenderness บวก · (Claude เติม) Rovsing sign บวก, psoas/obturator sign บวกเล็กน้อย",
 flag:"Rovsing/psoas/obturator ใน SP Claude เติม",
 notes:"ผู้จดเขียนว่ามี stethoscope วางอยู่ และคนไข้แกล้งเกร็งท้องตอนกดด้านขวา และเขียนคำตอบ (acute appendicitis) · ไฟล์ Key 77A ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("10.1 Abdominal examination.",8,{tags:["pe"],ans:"ล้างมือ แนะนำตัว ขออนุญาต จัดท่านอนหงาย เปิดเผยหน้าท้อง (xiphoid–symphysis) · <b>Inspection</b>: distension, การเคลื่อนไหวตามการหายใจ, แผลผ่าตัด, hernia · <b>Auscultation</b> bowel sounds (ก่อนคลำ) · <b>Percussion</b>: percussion tenderness · <b>Palpation</b>: เริ่ม<b>จากจุดที่ไม่เจ็บ</b> superficial → deep · <b>tenderness/guarding ที่ McBurney point</b>, <b>rebound tenderness</b>, <b>Rovsing sign</b>, <b>psoas sign</b>, <b>obturator sign</b> · ตรวจ hernial orifices · ± DRE",exp:"Alvarado score ≥7 = likely appendicitis",rubric:"แบ่งหมวด",
   pts:[H("Preparation",10),P("Hand hygiene, consent, position, exposure","hand","ล้างมือ","consent","expose","ขออนุญาต"),H("Inspection/auscultation/percussion",25),P("Inspection","inspect","ดู"),P("Auscultation bowel sounds","auscult","bowel sound","ฟัง"),P("Percussion tenderness","percuss","เคาะ"),H("Palpation",50),CR(P("Start away from pain","away","ไกล","ห่าง","left","ซ้าย")),CR(P("McBurney tenderness / guarding","mcburney","guarding","เกร็ง")),P("Rebound tenderness","rebound"),P("Rovsing sign","rovsing"),P("Psoas / obturator signs","psoas","obturator"),H("Completion",15),P("Hernial orifices / DRE","hernia","dre","pr")]}),
  B("10.2 Diagnosis.",2,{tags:["pe"],ans:"<b>Acute appendicitis</b> (with localized peritonitis)",exp:"ใน 40 ปี ยังต้องคิด DDx: diverticulitis ด้านขวา, Crohn's, ureteric colic",rubric:"ได้ = acute appendicitis",pts:[CR(P("Acute appendicitis","appendicitis","ไส้ติ่ง"))]})
 ),
 interp:"Acute appendicitis",
 summary:["Alvarado: migration, anorexia, nausea, RLQ tenderness, rebound, fever, WBC, shift","Rovsing, psoas (retrocecal), obturator (pelvic)","รักษา: appendectomy + antibiotics"]}),

/* ===== OSCE 11 ===== */
Co({page:21,orig:"11",topic:"img",sub:"CXR",title:"Chest radiograph — chest pain in a young smoker",img:["os77a_o11"],kimg:["os77a_ko11"],
 stem:`A 25-year-old man who smokes 10 cigarettes a day for 5 years presents with chest pain. The PA upright chest radiograph is shown.<br>1. What is the diagnosis?<br>2. Give the initial and definitive treatment.`,
 gray:"OSCE 11. ชาย 25 ปี สูบบุหรี่วันละ 10 มวนมา 5 ปี มาด้วยเจ็บหน้าอก CXR PA upright เป็นดังภาพ (หารูปที่เป็นผู้ชายไม่เจออ่า) a. จงบอก diagnosis b. จงบอก initial และ definite treatment",
 notes:"รูปในไฟล์: CXR (ผู้จดบอกว่าหารูปผู้ชายไม่เจอ) เห็นปอดยุบ ไม่มีลายปอดด้านนอก · เฉลยในไฟล์ Key 77A: a. Right pneumothorax; b. Initial: needle aspiration; Definitive: ICD placement at 5th ICS, anterior to mid axillary line",
 opinion:"เห็นด้วยกับเฉลยในไฟล์บางส่วน ความมั่นใจปานกลาง — ตาม BTS 2023 ใน primary spontaneous PTX ที่มีอาการ needle aspiration หรือ chest drain เป็นการรักษาเริ่มต้น; การรักษาที่ป้องกันการเป็นซ้ำ (definitive) คือ VATS bullectomy + pleurodesis เมื่อเป็นซ้ำ/air leak นาน",
 parts:S(
  B("11.1 Diagnosis.",2,{tags:["img"],key:KF+"Right pneumothorax",ans:"<b>Right primary spontaneous pneumothorax</b> (visceral pleural line ไม่มีลายปอดด้านนอก)",exp:"Tension pneumothorax: hypotension, trachea เบี้ยว, JVD → needle decompression ทันที",rubric:"ได้ = pneumothorax ถูกข้าง",pts:[CR(P("Pneumothorax","pneumothorax","ptx","ลมรั่ว")),P("Right side / spontaneous","right","ขวา","spontaneous")]}),
  B("11.2 Initial and definitive treatment.",4,{tags:["img"],key:KF+"Initial: needle aspiration · Definitive: ICD placement at 5th ICS, anterior to mid axillary line",ans:"<b>Initial</b>: O<sub>2</sub>, <b>needle aspiration</b> (หรือ small-bore chest drain/ambulatory device) · <b>Chest drain (ICD)</b> ที่ 4th–5th ICS anterior ถึง mid-axillary line (safe triangle) ถ้า aspiration ล้มเหลว/ขนาดใหญ่มีอาการ · <b>ป้องกันเป็นซ้ำ</b>: เลิกบุหรี่, <b>VATS bullectomy + pleurodesis</b> เมื่อเป็นซ้ำ/air leak &gt;3–5 วัน/อาชีพเสี่ยง",exp:"ห้ามขึ้นเครื่องบิน/ดำน้ำจนกว่าปอดขยายเต็ม",rubric:"ได้ = aspiration/ICD + safe triangle (+ VATS)",
   pts:[CR(P("Needle aspiration","aspiration","needle")),CR(P("Chest drain in safe triangle","icd","chest drain","chest tube","5th","safe triangle")),P("VATS bullectomy/pleurodesis for recurrence","vats","pleurodesis","bullectomy"),P("Stop smoking","smok","บุหรี่")]})
 ),
 interp:"Spontaneous pneumothorax",
 summary:["PSP: ชายผอมสูง สูบบุหรี่","BTS 2023: ไม่มีอาการ → conservative; มีอาการ → NA/ambulatory device/drain","Recurrence → VATS"]}),

/* ===== OSCE 12 ===== */
Co({page:22,orig:"12",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — perianal lesion: diagnosis, diagram and treatment",img:["os77a_o12"],kimg:["os77a_ko12"],
 stem:`A photograph of the perianal region is shown.<br>1. What is the diagnosis?<br>2. Draw a diagram and label the structures.<br>3. Give the treatment.`,
 gray:"OSCE 12. จงตอบคำถาม a. จงบอก diagnosis b. จงวาดรูปแผนภาพและชี้โครงสร้าง c. จงให้การรักษา",
 notes:"รูปในไฟล์: ทวารหนักถูกถ่างด้วยเครื่องมือ เห็นแผลรอยแยกขอบนูนที่ขอบทวาร · เฉลยในไฟล์ Key 77A: a. Chronic anal fissure; b. (ว่าง); c. Lateral internal sphincterotomy",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง — LIS เมื่อยาทาไม่ได้ผล",
 parts:S(
  B("12.1 Diagnosis.",2,{tags:["img"],key:KF+"Chronic anal fissure",ans:"<b>Chronic anal fissure</b> (posterior midline)",exp:"Acute fissure มักหายด้วยการรักษาแบบประคับประคอง",rubric:"ได้ = chronic anal fissure",pts:[CR(P("Anal fissure","fissure"))]}),
  B("12.2 Diagram and structures.",3,{tags:["img"],key:"(ไฟล์ Key 77A ช่องนี้ว่าง)",ans:"วาดแผลรูปรีตามแนวยาวของ anal canal ใต้ dentate line ชี้: <b>sentinel pile (skin tag)</b> ที่ขอบนอก · <b>fissure ulcer</b> เห็นใยกล้าม <b>internal sphincter</b> ที่ฐาน · <b>hypertrophied anal papilla</b> ที่ปลายบนใกล้ <b>dentate line</b>",exp:"Chronic fissure triad: sentinel pile, fissure, hypertrophied papilla",rubric:"ได้ = triad",pts:[CR(P("Sentinel pile","sentinel","tag")),P("Hypertrophied papilla","papilla"),P("Exposed internal sphincter","internal sphincter","sphincter"),P("Dentate line","dentate","pectinate")]}),
  B("12.3 Treatment.",3,{tags:["img"],key:KF+"Lateral internal sphincterotomy",ans:"ใยอาหาร ยาระบาย sitz bath + <b>topical diltiazem/nifedipine หรือ NTG</b> 6–8 สัปดาห์ → Botox → <b>lateral internal sphincterotomy</b> (gold standard เมื่อยาไม่ได้ผล)",exp:"Botox ใช้เมื่อเสี่ยง incontinence; LIS หาย &gt;90%",rubric:"ได้ = topical ก่อน + LIS",pts:[P("Fiber/sitz bath/topical CCB or NTG","fiber","sitz","diltiazem","nifedipine","ntg","nitro"),CR(P("Lateral internal sphincterotomy","sphincterotomy","lis"))]})
 ),
 interp:"Chronic anal fissure",
 summary:["Chronic: &gt;6–8 สัปดาห์ + triad","Posterior midline 90%","Off-midline → Crohn's/TB/HIV/มะเร็ง"]})
);
})();
