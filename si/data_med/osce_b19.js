(function(){
/* SI Med OSCE — SI128 Rotate 409–412 — ไฟล์ 128_Medicine_OSCE 1 (s128o1.pdf, โค้ด SIOS128C) 10 หน้า
   ไฟล์บอก: หน้า 1 หัว "ข้อสอบลงกอง รายวิชา SIMD415 อายุรศาสตร์ OSCE 409-412 รอบที่ 1" แล้วเป็นตาราง 3 คอลัมน์ ข้อ | คำถาม | เฉลย (พิมพ์ ไม่มีลายมือ) · หน้า 1–5 = สถานี 1–30 · หน้า 6–10 = หน้าว่างทั้งหน้า (ตรวจด้วยภาพแล้ว ไม่มีเนื้อหา)
   ไม่บอกเวลา/จำนวนนาทีต่อสถานี ไม่มีฐานพัก ไม่มีส่วน LAB แยก
   คอลัมน์ "เฉลย" = คำตอบที่ผู้จดเขียน (ไม่ใช่คีย์ทางการ คีย์ไม่ 100%) → key = NK ทุกข้อย่อย และถอดคอลัมน์เฉลยลง gray/notes เป็นแนวทาง
   แถวที่ไม่มีเลขข้อ (หน้า 1 ต่อจากสถานี 4: "เป็นผู้หญิงคนหนึ่งนั่งอยู่จงซักประวัติ" | "เป็นเบาหวาน") → ลงเป็น orig "4+"
   สถานี 17 (CXR mass) คำตอบต่อไปหน้า 4 · รูปของสถานี 13 (ไข่เหาบนเส้นผม) อยู่หน้า 3 แถวบนสุดไม่มีเลข
   รูปในไฟล์มีแค่ 2 รูป: os128c_1 (สถานี 13) และ os128c_2 (สถานี 15) · สถานีที่ต้องดูรูป/ผลแต่ไฟล์ไม่มี → NOIMG หรือค่าแลปที่ Claude แต่ง (บอกใน flag)
   สถานีที่ไม่มีคำตอบในคอลัมน์เฉลย: 25, 27, 29 (29 คำตอบอยู่ในคอลัมน์คำถาม) */
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
const Co=o=>Object.assign({set:"SI128",ro:"Ro409–412",file:"SIOS128C",opinion:""},o);
QB.push(

/* ===== สถานี 1 ===== */
Co({page:1,orig:"1",topic:"micro",sub:"Gram stain",title:"Joint aspirate — Gram stain: name the likely organisms",imgNote:NOIMG,
 stem:`A patient with an acutely swollen, painful joint undergoes arthrocentesis. The Gram stain of the synovial fluid shows numerous Gram-positive cocci in pairs and chains.<br>Give two likely causative organisms.`,
 gray:"1. เจาะน้ำเจาะข้อ พบ Numerous gram positive cocci in pair and chain จง DDx. เชื้อที่เป็นไปได้มา 2 เชื้อ · เฉลย: Streptococcus agalactaae · Streptococcus pyogenas",
 flag:NOIMG+" · อาการข้อบวมปวดเฉียบพลันใน stem Claude เรียบเรียง (ไฟล์บอกแค่ \"เจาะน้ำเจาะข้อ\")",
 notes:"คำตอบผู้จด: Streptococcus agalactiae (สะกดในไฟล์ \"agalactaae\") และ Streptococcus pyogenes (สะกดในไฟล์ \"pyogenas\")",
 opinion:"เห็นด้วยกับไฟล์ — GPC in pairs and chains = Streptococcus · ตอบ S. pneumoniae หรือ Enterococcus ก็เป็นเชื้อที่เข้ากับรูปแบบนี้ได้",
 parts:S(
  B("1.1 Give two likely causative organisms.",4,{tags:["micro"],
   ans:"Gram-positive cocci in pairs and chains = <b>Streptococcus spp.</b> → <b>Streptococcus pyogenes</b> (group A) และ <b>Streptococcus agalactiae</b> (group B — พบบ่อยในผู้สูงอายุ เบาหวาน มะเร็ง) · ตอบได้อีก: <i>S. pneumoniae</i> (lancet-shaped diplococci), <i>Enterococcus</i>, viridans streptococci, group C/G streptococci",
   exp:"แยกจาก <i>Staphylococcus aureus</i> (GPC in clusters — สาเหตุอันดับ 1 ของ septic arthritis ผู้ใหญ่) และ <i>N. gonorrhoeae</i> (Gram-negative diplococci) · Septic arthritis: synovial WBC มัก> 50,000/µL, PMN > 90% → ส่ง culture (synovial fluid + hemoculture) ให้ IV antibiotic ตาม Gram stain และระบายหนองออกจากข้อ (needle aspiration ซ้ำ/arthroscopy) · Streptococcus ให้ penicillin G/ceftriaxone",
   rubric:"ได้เต็มเมื่อบอก Streptococcus 2 species · ตอบ S. aureus = ผิด (clusters)",
   pts:[CR(P("Streptococcus (GPC in chains)","streptococ","strep\\b","สเตร็ป")),G("Two species",2,P("Streptococcus pyogenes (group A)","pyogen","group a","\\bgas\\b"),P("Streptococcus agalactiae (group B)","agalact","group b","\\bgbs\\b"),P("Streptococcus pneumoniae","pneumoniae","pneumococ"),P("Enterococcus","enterococ"),P("Viridans / group C, G streptococci","viridans","group [cg]"))]})
 ),
 interp:"Microscope: Gram stain ของ synovial fluid — รูปแบบ GPC in pairs/chains = Streptococcus",
 summary:["GPC in pairs/chains = Streptococcus (S. pyogenes, S. agalactiae, S. pneumoniae, Enterococcus)","GPC in clusters = Staphylococcus aureus (septic arthritis อันดับ 1)","Septic arthritis: culture + IV antibiotic + ระบายหนองออกจากข้อ"]}),

/* ===== สถานี 2 ===== */
Co({page:1,orig:"2",topic:"hx",sub:"Chest pain",ex:1,title:"History taking — chest pain",
 stem:`A patient presents with chest pain. Take a focused history, then give your most likely diagnosis.`,
 gray:"2. จงซักประวัติคนที่มาด้วยอาการ Chest pain · เฉลย: เจ็บนานเท่าไหร่ เจ็บอย่างไร · เจ็บร้าวมั้ย · ทำอะไรแล้วดีขึ้น · ออกแรงแล้วแย่ลงมั้ย · มีอาการร่วม คลื่นไส้ อาเจียนเหงื่อออก ใจสั่น · risk factor ของ atherosclerosis · คำถาม R/O ระบบอื่นๆ",
 flag:"บทผู้ป่วย (sp) อายุ/เพศ/คำวินิจฉัย Claude แต่ง — ไฟล์ไม่บอกโรคปลายทาง (รายการคำถามเน้นหัวใจ จึงแต่งเป็น acute coronary syndrome) · ข้อย่อยวินิจฉัย Claude เติม",
 notes:"ผู้จดเขียนรายการคำถาม: ระยะเวลา, ลักษณะการเจ็บ, ร้าว, ปัจจัยทำให้ดีขึ้น/แย่ลง (ออกแรง), อาการร่วม (คลื่นไส้ อาเจียน เหงื่อออก ใจสั่น), risk factor ของ atherosclerosis, คำถาม R/O ระบบอื่น",
 sp:"ชาย 58 ปี เจ็บแน่นหน้าอกกลางอก 1 ชั่วโมงก่อนมา เริ่มขณะเดินขึ้นบันได เหมือนมีของหนักกดทับ ร้าวไปแขนซ้ายและกราม ไม่ดีขึ้นเมื่อนั่งพัก ยังเจ็บอยู่ (pain score 8/10) · เหงื่อออก ใจสั่น คลื่นไส้ ไม่อาเจียน เหนื่อยเล็กน้อย · ไม่สัมพันธ์กับการหายใจหรือการขยับตัว ไม่ปวดร้าวทะลุหลัง ไม่มีแสบร้อนยอดอก ไม่มีไข้ ไม่ไอ ไม่มีขาบวมข้างเดียว · 1 เดือนก่อนเคยแน่นเวลาเดินเร็ว พักแล้วหายใน 5 นาที · โรคประจำตัว: เบาหวาน ความดันสูง ไขมันสูง กินยาไม่สม่ำเสมอ · สูบบุหรี่ 1 ซอง/วัน 30 ปี · พ่อเป็นโรคหัวใจตายตอนอายุ 50",
 parts:S(
  B("2.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะการเจ็บ (OPQRST):</b> onset/เริ่มขณะทำอะไร, <b>ระยะเวลา</b>, <b>ลักษณะ</b> (แน่น/กดทับ vs แปลบ/ฉีก), ตำแหน่งและ<b>การร้าว</b> (แขนซ้าย กราม หลัง), <b>ปัจจัยทำให้แย่ลง</b> (ออกแรง หายใจ ขยับตัว กินอาหาร) และ<b>ทำให้ดีขึ้น</b> (พัก, NTG, นั่งโน้มตัวไปหน้า), ความรุนแรง, เคยเป็นมาก่อน · <b>อาการร่วม:</b> เหงื่อออก คลื่นไส้อาเจียน ใจสั่น เหนื่อย/นอนราบไม่ได้ เป็นลม · <b>R/O ระบบอื่น:</b> ปวดร้าวทะลุหลัง (aortic dissection), เจ็บสัมพันธ์การหายใจ+ไอ ไข้ (pleuritis/pneumonia), เหนื่อยเฉียบพลัน+ขาบวมข้างเดียว/นอนนาน (PE), แสบร้อนยอดอก เรอเปรี้ยว (GERD), เจ็บเวลากด/ขยับ (musculoskeletal), ผื่นตามแนวเส้นประสาท (zoster) · <b>Risk factors ของ atherosclerosis:</b> DM, HT, dyslipidemia, สูบบุหรี่, CKD, ประวัติครอบครัวเป็นโรคหัวใจก่อนวัย, อายุ/เพศ · ยาที่ใช้",
   exp:"สาเหตุ chest pain ที่ห้ามพลาด: ACS, aortic dissection, pulmonary embolism, tension pneumothorax, cardiac tamponade, esophageal rupture · Typical angina = เจ็บแน่นหลังกระดูกอก + เป็นเมื่อออกแรง/เครียด + ดีขึ้นเมื่อพัก/NTG (ครบ 3 ข้อ) · เจ็บขณะพัก > 20 นาที → คิด ACS ทำ EKG ภายใน 10 นาที",
   rubric:"ได้เต็มเมื่อซัก OPQRST ครบ + อาการร่วม + risk factor + R/O โรคอันตรายอื่น · ไม่ถามปัจจัยเสี่ยง atherosclerosis = ขาดข้อสำคัญ",
   pts:[H("ลักษณะการเจ็บ",40),P("Onset and duration","นาน","เมื่อไ","onset","duration","ระยะเวลา"),P("Character (pressing vs sharp)","ลักษณะ","เจ็บอย่างไร","แน่น","บีบ","character","pressing","แปลบ"),CR(P("Radiation","ร้าว","radiat")),P("Aggravating factors — exertion","ออกแรง","exert","แย่ลง","aggravat"),P("Relieving factors — rest","ดีขึ้น","พัก","reliev","\\bntg\\b","nitro"),
    H("อาการร่วม",20),P("Diaphoresis, nausea/vomiting, palpitation, dyspnea","เหงื่อ","sweat","diaphores","คลื่นไส้","อาเจียน","nausea","ใจสั่น","palpitat","เหนื่อย"),
    H("Risk factors",25),CR(P("Atherosclerosis risk factors (DM, HT, lipids, smoking, family history)","risk factor","ปัจจัยเสี่ยง","เบาหวาน","ความดัน","ไขมัน","บุหรี่","smok","ครอบครัว","family")),
    H("R/O ระบบอื่น",15),P("Rule out other causes (dissection, PE, pleuritic, GI, musculoskeletal)","ทะลุหลัง","ร้าวหลัง","ปวดหลัง","dissect","หายใจ","pleuri","ไอ","ขาบวม","\\bpe\\b","embol","แสบร้อน","gerd","กรด","กดเจ็บ","ขยับ")]}),
  B("2.2 What is your most likely diagnosis?",3,{tags:["hx"],flag:ADD,
   ans:"<b>Acute coronary syndrome</b> (typical chest pain ขณะพักนาน > 20 นาที ร้าวแขนซ้าย/กราม + เหงื่อออก + risk factors หลายข้อ) — แยก STEMI/NSTEMI/unstable angina ด้วย 12-lead EKG ภายใน 10 นาที และ high-sensitivity troponin · Ddx: aortic dissection, pulmonary embolism, pericarditis",
   exp:"ให้ aspirin 160–325 mg เคี้ยว (ถ้าไม่มีข้อห้าม), ประเมินให้ reperfusion ถ้าเป็น STEMI",
   rubric:"ตอบ stable angina = บางส่วน (ผู้ป่วยเจ็บขณะพักนาน)",
   pts:[CR(P("Acute coronary syndrome","acute coronary","\\bacs\\b","stemi","nstemi","unstable angina","myocardial infarct","\\bmi\\b","กล้ามเนื้อหัวใจขาดเลือด")),P("Next: 12-lead EKG and troponin","ekg","ecg","troponin")]})
 ),
 interp:"History taking: chest pain — OPQRST + อาการร่วม + risk factor ของ atherosclerosis + แยกโรคอันตรายอื่น",
 summary:["ซัก OPQRST: onset, ลักษณะ, ร้าว, ออกแรงแย่ลง/พักดีขึ้น, ระยะเวลา","อาการร่วม: เหงื่อออก คลื่นไส้ ใจสั่น เหนื่อย","Risk factors: DM, HT, ไขมัน, บุหรี่, ประวัติครอบครัว","R/O: aortic dissection, PE, pleuritic, GERD, musculoskeletal"]}),

/* ===== สถานี 3 ===== */
Co({page:1,orig:"3",topic:"pe",sub:"Neuro",ex:1,title:"Physical examination — cerebellar function",seen:"คล้าย SI127 Ro417–420 ข้อ 7 (ตรวจ cerebellar signs) — คนละชุด",
 stem:`Examine the cerebellar function of this patient. Explain to the examiner what you are examining as you go, and report the abnormal findings.`,
 gray:"3. จงตรวจ Cerebellar function พร้อมทั้งบรรยายว่ากำลังตรวจอะไรกับอาจารย์ และบอกความผิดปกติที่พบ · เฉลย: มองลงกลอกล่างซ้ายขวา · dysarthria · finger to nose to finger · heel to knee · dysdiadochokinesia · เดิน",
 flag:"ผลตรวจใน sp (cerebellar signs ด้านซ้าย) Claude แต่ง — ไฟล์ไม่บอกความผิดปกติที่พบ",
 notes:"รายการที่ผู้จดเขียน: ให้มองตามขึ้นลงซ้ายขวา (nystagmus) · dysarthria (พูด) · finger-to-nose-to-finger · heel-to-knee · dysdiadochokinesia · เดิน (gait)",
 sp:"ผู้ป่วยจำลอง · ผลตรวจ (ผู้คุมบอกเมื่อผู้สอบตรวจถูกวิธี): horizontal nystagmus เด่นเมื่อมองไปซ้าย · พูด scanning speech เล็กน้อย · finger-to-nose ซ้าย: dysmetria (past pointing) + intention tremor · rapid alternating movement มือซ้ายช้าไม่สม่ำเสมอ · heel-knee-shin ซ้ายเปะปะ · เดินถ่างขา (broad-based) เซไปซ้าย tandem gait ไม่ได้ · Romberg ไม่เปลี่ยนเมื่อหลับตา · กำลังกล้ามเนื้อและ sensation ปกติ",
 parts:S(
  B("3.1 Examine the cerebellar function, explaining each step.",8,{tags:["pe"],
   ans:"แนะนำตัว อธิบาย ขออนุญาต · <b>Eyes:</b> ให้มองตามนิ้วขึ้น-ลง-ซ้าย-ขวา ค้างไว้ปลายทาง ดู <b>nystagmus</b> · <b>Speech:</b> ให้พูดประโยค/\"ยี่สิบเอ็ด\" ดู <b>dysarthria</b> (scanning/slurred) · <b>Upper limbs:</b> ทดสอบ rebound/arm drift, <b>finger-to-nose-to-finger</b> (นิ้วผู้ตรวจอยู่สุดแขนผู้ป่วย เปลี่ยนตำแหน่ง) ดู dysmetria/intention tremor · <b>rapid alternating movement</b> (คว่ำ-หงายมือบนฝ่ามืออีกข้าง) ดู <b>dysdiadochokinesia</b> · <b>Lower limbs:</b> <b>heel-to-knee-to-shin</b> (นอนหงาย) · <b>Trunk/gait:</b> นั่ง/ยืน (truncal ataxia), <b>เดินปกติและ tandem gait</b> (broad-based, เซไปด้านรอยโรค) · Romberg test (ใช้แยก sensory ataxia) · ตรวจทั้งสองข้างเปรียบเทียบ",
   exp:"Cerebellar hemisphere lesion → อาการข้างเดียวกับรอยโรค (ipsilateral) · midline (vermis) lesion → truncal/gait ataxia เด่น แขนขาปกติ · Romberg positive = sensory (proprioceptive) ataxia ไม่ใช่ cerebellar · ช่วยจำ DANISH: Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Speech, Hypotonia",
   rubric:"ได้เต็มเมื่อตรวจครบ eye-speech-upper limb-lower limb-gait ทั้งสองข้างและอธิบายระหว่างตรวจ · ทำ finger-nose โดยไม่ให้ผู้ป่วยเหยียดแขนสุด = ตรวจ dysmetria ไม่ได้",
   pts:[H("Eye / speech",25),CR(P("Nystagmus — follow the finger","nystagmus","กลอกตา","มองตาม","eye movement")),P("Speech — dysarthria","dysarthria","speech","พูด"),
    H("Upper limbs",35),CR(P("Finger-to-nose-to-finger","finger.{0,10}nose","นิ้ว.{0,10}จมูก","dysmetria")),P("Rapid alternating movement / dysdiadochokinesia","dysdiadocho","rapid alternat","คว่ำ.{0,6}หงาย"),
    H("Lower limbs / gait",40),CR(P("Heel-to-knee-to-shin","heel.{0,10}(knee|shin)","ส้นเท้า","เข่า")),P("Gait including tandem gait","gait","เดิน","tandem"),P("Romberg test","romberg")]}),
  B("3.2 Report the abnormal findings and localise the lesion.",2,{tags:["pe"],
   ans:"Horizontal nystagmus เด่นเมื่อมองซ้าย, dysarthria (scanning speech), dysmetria + intention tremor, dysdiadochokinesia และ heel-knee-shin ผิดปกติ<b>ด้านซ้าย</b>, broad-based ataxic gait เซไปซ้าย → <b>left cerebellar hemisphere lesion</b>",
   exp:"สาเหตุที่พบบ่อย: stroke (infarct/hemorrhage ใน posterior circulation), tumor, MS, alcohol (vermis), drug toxicity (phenytoin)",
   pts:[CR(P("Left-sided cerebellar signs","ซ้าย","left")),P("Ipsilateral (left) cerebellar hemisphere lesion","hemisphere","ipsilat","cerebell")]})
 ),
 interp:"PE: cerebellar examination ครบลำดับ + อธิบายระหว่างตรวจ + รายงานผลและบอกตำแหน่งรอยโรค",
 summary:["ลำดับ: nystagmus → speech → finger-nose-finger → dysdiadochokinesia → heel-knee-shin → gait/tandem","Cerebellar hemisphere lesion = อาการข้างเดียวกัน","Romberg positive = sensory ataxia ไม่ใช่ cerebellar"]}),

/* ===== สถานี 4 ===== */
Co({page:1,orig:"4",topic:"proc",sub:"BLS/CPR",ex:1,proc:1,title:"Procedure — an unconscious person on the floor (manikin)",seen:"คล้าย SI130 Ro409–412 ข้อ 5 และ SI127 Ro401–404 ข้อ 7 (BLS) — คนละชุด",
 stem:`You walk into a room and find a person (manikin) lying unconscious on the floor. Demonstrate what you would do.`,
 gray:"4. CPR เข้าไปเจอหุ่น คนนอนหมดสติ · เฉลย: คลำหา carotid pulse 5-10 sec · รายงานว่าคลำไม่ได้ · ร้องขอ cardiac board · ที่เหลือคือท่าทาง",
 flag:"บทผู้คุม (sp) Claude แต่ง · ขั้นตอนที่ไฟล์ไม่ได้จดเติมตาม AHA BLS guideline",
 notes:"ผู้จดเน้น: คลำ carotid pulse 5–10 วินาที → รายงานว่าคลำไม่ได้ → ร้องขอ cardiac board · \"ที่เหลือคือท่าทาง\" = คะแนนส่วนที่เหลือมาจากท่ากดหน้าอกที่ถูกต้อง",
 sp:"หุ่น CPR นอนหงายบนพื้น · ผู้คุมตอบว่า: เรียกแล้วไม่ตอบสนอง · ไม่หายใจ/หายใจเฮือก · คลำ carotid pulse ไม่ได้ · ถ้าผู้สอบตะโกนขอความช่วยเหลือ: มีคนมาช่วยและไปตามทีม/นำ AED และ cardiac board มาให้ · ถ้าผู้สอบขอ AED: AED มาถึงหลัง CPR 2 นาที แจ้ง shockable rhythm",
 parts:S(
  B("4.1 Perform basic life support.",10,{tags:["proc"],
   ans:"<b>ประเมินความปลอดภัย</b>ของที่เกิดเหตุ · <b>ปลุกเรียก</b>: ตบไหล่ เรียกดัง ๆ · ไม่ตอบสนอง → <b>ตะโกนขอความช่วยเหลือ/แจ้งทีม (code/1669)</b> + <b>ขอ AED</b> + ขอ <b>cardiac board</b> (ถ้าผู้ป่วยอยู่บนเตียงนุ่ม) · <b>คลำ carotid pulse และดูการหายใจพร้อมกัน 5–10 วินาที</b> (ไม่เกิน 10 วินาที) → <b>รายงานว่าคลำชีพจรไม่ได้ ไม่หายใจ</b> → เริ่ม CPR ทันที<br><b>กดหน้าอก:</b> วางสันมือที่ครึ่งล่างของกระดูก sternum มือซ้อนกัน แขนเหยียดตรง ไหล่อยู่เหนือมือตั้งฉาก · ลึก <b>5–6 cm</b> · อัตรา <b>100–120 ครั้ง/นาที</b> · ปล่อยให้อกคืนตัวเต็มที่ · หยุดให้น้อยที่สุด (< 10 วินาที) · <b>30:2</b> เปิดทางเดินหายใจด้วย head tilt–chin lift ช่วยหายใจ 2 ครั้ง ครั้งละ ~1 วินาทีให้เห็นอกขยับ (ใช้ pocket mask/bag-valve-mask) · <b>AED มาถึงติดทันที</b> ทำตามเครื่อง shock แล้วกดต่อทันที · สลับคนกดทุก 2 นาที · ทำจนทีม ACLS มาหรือผู้ป่วยรู้สึกตัว",
   exp:"หลัก AHA: high-quality CPR (depth 5–6 cm, rate 100–120/min, full recoil, minimize interruption, avoid excessive ventilation) และ early defibrillation · ใส่ advanced airway แล้ว → ช่วยหายใจ 1 ครั้งทุก 6 วินาที (10/นาที) กดต่อเนื่องไม่ต้องหยุด",
   rubric:"ผู้จด: คะแนนหลักอยู่ที่คลำ carotid 5–10 วินาที + รายงานผล + ขอ cardiac board + ท่ากดที่ถูก · คลำชีพจรนานเกิน 10 วินาที หรือไม่เรียกขอความช่วยเหลือ = หักคะแนน",
   pts:[H("ประเมิน/เรียกขอความช่วยเหลือ",35),P("Scene safety and check responsiveness","ปลอดภัย","safe","ปลุก","ตบไหล่","respons","เรียก"),CR(P("Call for help / activate team and request AED","ขอความช่วยเหลือ","ช่วยด้วย","help","code","1669","\\baed\\b","defib")),P("Request a cardiac board","cardiac board","board","ไม้รอง"),CR(P("Check carotid pulse and breathing for 5–10 seconds, report no pulse","carotid","pulse","ชีพจร")),
    H("กดหน้าอก",50),P("Hand position — lower half of sternum","sternum","กระดูกหน้าอก","ครึ่งล่าง","กลางอก","lower half"),CR(P("Depth 5–6 cm","5.{0,3}6 ?(cm|ซม)","\\b5 ?(cm|ซม)","depth","ลึก")),CR(P("Rate 100–120 per minute","100.{0,3}120","rate","อัตรา")),P("Full chest recoil, arms straight, minimal interruption","recoil","คืนตัว","แขนตรง","เหยียด","interrupt"),
    H("ช่วยหายใจ/AED",15),P("30:2 with head tilt–chin lift","30 ?: ?2","head tilt","chin lift","ช่วยหายใจ","breath"),P("Attach AED as soon as available","\\baed\\b","defib","shock")]})
 ),
 interp:"Procedure: BLS — ปลุก เรียกขอความช่วยเหลือ/AED คลำ carotid ≤ 10 วินาที แล้ว high-quality CPR 30:2",
 summary:["ปลุก → ไม่ตอบสนอง → ขอความช่วยเหลือ + AED + cardiac board","คลำ carotid + ดูการหายใจ 5–10 วินาที รายงานผล","กด 5–6 cm, 100–120/min, full recoil, 30:2","AED มาถึงติดทันที shock แล้วกดต่อ"]}),

/* ===== แถวไม่มีเลข (ต่อจากสถานี 4) ===== */
Co({page:1,orig:"4+",topic:"hx",sub:"DM screening",ex:1,title:"History taking — a woman sitting in the clinic",seen:"คล้าย SI127 Ro401–404 ข้อ 17 (ผู้หญิงกังวลว่าเป็นเบาหวาน) — คนละชุด",
 stem:`A woman is sitting in the examination room. Take a history from her, then give your most likely diagnosis.`,
 gray:"(แถวไม่มีเลขข้อ ต่อจากข้อ 4) เป็นผู้หญิงคนหนึ่งนั่งอยู่จงซักประวัติ · เฉลย: เป็นเบาหวาน",
 flag:"แถวนี้ในไฟล์ไม่มีเลขข้อ → ตั้ง orig \"4+\" · ไฟล์บอกแค่ \"ผู้หญิงนั่งอยู่ จงซักประวัติ\" และคำตอบ \"เป็นเบาหวาน\" — อาการนำ อายุ และบทผู้ป่วย (sp) Claude แต่งทั้งหมด",
 notes:"คำตอบผู้จด: \"เป็นเบาหวาน\"",
 sp:"หญิง 45 ปี มาด้วยปัสสาวะบ่อย กระหายน้ำ 2 เดือน (ถ้าผู้สอบถามว่ามาด้วยอะไร) · ปัสสาวะกลางคืน 3–4 ครั้ง ดื่มน้ำมากกว่าเดิม · น้ำหนักลด 4 kg ใน 2 เดือนทั้งที่กินเท่าเดิม · อ่อนเพลีย · ตกขาวคันบ่อย · ชาปลายเท้าเล็กน้อย · ตามัวเล็กน้อย · ไม่มีปัสสาวะแสบขัด ไม่มีไข้ · ไม่เคยตรวจน้ำตาล · แม่และพี่สาวเป็นเบาหวาน · เคยคลอดลูกหนัก 4.2 kg และแพทย์บอกว่าน้ำตาลสูงตอนตั้งครรภ์ · ความดันสูง กินยา amlodipine · ไม่ได้กิน steroid · ทำงานนั่งโต๊ะ ไม่ออกกำลังกาย · BMI ประมาณ 29",
 parts:S(
  B("4+.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>อาการนำและอาการของน้ำตาลสูง:</b> ปัสสาวะบ่อย/กลางคืน (polyuria, nocturia), กระหายน้ำ (polydipsia), หิวบ่อย, <b>น้ำหนักลด</b>, อ่อนเพลีย, ตามัว, ติดเชื้อบ่อย (ตกขาว/เชื้อรา ฝี แผลหายช้า) · <b>แยกโรคอื่นที่ปัสสาวะบ่อย:</b> UTI (แสบขัด ไข้), diabetes insipidus, ดื่มน้ำมาก, ยาขับปัสสาวะ · <b>ภาวะแทรกซ้อน:</b> ชาปลายมือเท้า, ตามัว, ปัสสาวะเป็นฟอง/บวม, เจ็บหน้าอก/เดินแล้วปวดน่อง, แผลที่เท้า · <b>ภาวะฉุกเฉิน:</b> คลื่นไส้อาเจียน ปวดท้อง หอบ ซึม (DKA/HHS) · <b>ปัจจัยเสี่ยง:</b> <b>ประวัติครอบครัว</b>เป็นเบาหวาน, <b>เบาหวานขณะตั้งครรภ์/คลอดลูกหนัก > 4 kg</b>, อ้วน, ไม่ออกกำลังกาย, HT, dyslipidemia, PCOS · <b>ยา:</b> steroid, thiazide · ประวัติประจำเดือน",
   exp:"เกณฑ์วินิจฉัยเบาหวาน (ADA/สมาคมโรคเบาหวานแห่งประเทศไทย): FPG ≥ 126 mg/dL, 2-h OGTT ≥ 200 mg/dL, HbA1c ≥ 6.5% (ต้องยืนยันซ้ำถ้าไม่มีอาการ) หรือ <b>มีอาการน้ำตาลสูง + random plasma glucose ≥ 200 mg/dL</b> (วินิจฉัยได้เลย)",
   rubric:"ได้เต็มเมื่อซักอาการ polyuria/polydipsia/น้ำหนักลด + ภาวะแทรกซ้อน + ปัจจัยเสี่ยง (ครอบครัว, GDM/ลูกหนัก, อ้วน) + ยา",
   pts:[H("อาการ",40),CR(P("Polyuria / nocturia","ปัสสาวะบ่อย","ฉี่บ่อย","polyuria","nocturia","กลางคืน")),P("Polydipsia","กระหายน้ำ","คอแห้ง","ดื่มน้ำ","polydips"),CR(P("Weight loss","น้ำหนักลด","นน\\.? ?ลด","weight loss","ผอมลง")),P("Recurrent infections (vaginal candidiasis, boils)","ตกขาว","เชื้อรา","คัน","ติดเชื้อ","ฝี","แผลหายช้า","infection"),
    H("ภาวะแทรกซ้อน",25),P("Complications: numbness, blurred vision, foamy urine, foot ulcer","ชาปลาย","ชามือ","ชาเท้า","numb","ตามัว","blur","ฟอง","บวม","แผล","neuropath","retinopath"),
    H("ปัจจัยเสี่ยง/ยา",35),CR(P("Family history of diabetes","ครอบครัว","family","พ่อ","แม่","พี่","ญาติ")),P("Gestational diabetes / baby > 4 kg","ตั้งครรภ์","ครรภ์","pregnan","gdm","คลอด","ลูกหนัก","4 ?kg"),P("Obesity, inactivity, HT, lipids","อ้วน","obes","ออกกำลัง","ความดัน","ไขมัน","น้ำหนักตัว","bmi"),P("Drugs — steroids, thiazides","steroid","สเตียรอยด์","ยา(ที่|อะไร|ประจำ)","กินยา","thiazide")]}),
  B("4+.2 What is your most likely diagnosis?",3,{tags:["hx"],flag:ADD,
   ans:"<b>Type 2 diabetes mellitus</b> (ตามคำตอบผู้จด \"เป็นเบาหวาน\") — symptomatic hyperglycemia (polyuria, polydipsia, น้ำหนักลด) ในผู้หญิงอ้วนที่มีประวัติครอบครัวและเคยมี GDM · ยืนยันด้วย plasma glucose (random ≥ 200 mg/dL ร่วมกับอาการ, FPG ≥ 126 mg/dL หรือ HbA1c ≥ 6.5%)",
   exp:"ประเมินต่อ: HbA1c, lipid profile, creatinine/eGFR, urine albumin-creatinine ratio, ตรวจตา, ตรวจเท้า",
   pts:[CR(P("Diabetes mellitus (type 2)","เบาหวาน","diabet","\\bdm\\b","t2dm")),P("Confirm with plasma glucose / HbA1c","glucose","น้ำตาล","fpg","hba1c","a1c","ogtt")]})
 ),
 interp:"History taking: ผู้ป่วยหญิงที่สุดท้ายเป็นเบาหวาน — ซักอาการน้ำตาลสูง ภาวะแทรกซ้อน ปัจจัยเสี่ยง",
 summary:["อาการ: polyuria, polydipsia, น้ำหนักลด, ติดเชื้อบ่อย, ตามัว","ปัจจัยเสี่ยง: ครอบครัว, GDM/ลูก > 4 kg, อ้วน, HT, ยา steroid/thiazide","อาการ + RPG ≥ 200 mg/dL = วินิจฉัยเบาหวานได้"]}),

/* ===== สถานี 5 ===== */
Co({page:2,orig:"5",topic:"pe",sub:"Abdomen",ex:1,title:"Fever, dysuria and back pain — one key examination and diagnosis",
 stem:`A patient presents with fever, burning on urination and back pain.<br>1. If you could perform only one physical examination, what would you do? Demonstrate it.<br>2. Give your diagnosis.`,
 gray:"5. 1.ถ้าจะตรวจร่างกาย 1 อย่างจะทำอะไร 2.จงให้การวินิจฉัย · เฉลย: ปัสสาวะแสบขัด · ไข้ · เจ็บหลัง · CVA tenderness · acute pyelonephritis",
 flag:"\"ปัสสาวะแสบขัด ไข้ เจ็บหลัง\" อยู่ในคอลัมน์เฉลย — Claude ตีความว่าเป็นข้อมูลโจทย์ (อาการผู้ป่วย) จึงใส่ใน stem · ผลตรวจใน sp Claude แต่ง",
 notes:"คำตอบผู้จด: ตรวจ CVA tenderness → acute pyelonephritis",
 sp:"หญิง 28 ปี ไข้หนาวสั่น 2 วัน ปัสสาวะแสบขัด ปวดหลังเอวขวา · T 39.0 °C · ผลตรวจ: costovertebral angle tenderness ข้างขวาเป็นบวก (เจ็บมากเมื่อทุบ) ข้างซ้ายปกติ · กดเจ็บ suprapubic เล็กน้อย",
 parts:S(
  B("5.1 Which single examination would you perform? Demonstrate it.",5,{tags:["pe"],
   ans:"<b>Costovertebral angle (CVA) tenderness</b> — ให้ผู้ป่วยนั่งหันหลัง อธิบายและขออนุญาตก่อน วางฝ่ามือที่มุมระหว่างซี่โครงที่ 12 กับกระดูกสันหลัง (costovertebral angle) แล้วใช้กำปั้นอีกข้างทุบเบา ๆ บนหลังมือ (fist percussion) <b>เทียบทั้งสองข้าง</b> เริ่มข้างที่ไม่เจ็บก่อน ดูสีหน้าผู้ป่วย · อาจกดด้วยนิ้วโป้งก่อน (deep pressure)",
   exp:"CVA tenderness บ่งว่ามีการอักเสบของไต/รอบไต (pyelonephritis, perinephric abscess, นิ่วอุดกั้น) · ตรวจเพิ่ม: suprapubic tenderness, ไตโต (ballottement)",
   rubric:"ทุบแรงเกินหรือไม่เปรียบเทียบสองข้าง = หักคะแนน",
   pts:[CR(P("CVA tenderness","cva","costovertebral","ทุบหลัง","ทุบเอว","renal punch","fist percuss")),P("Correct site: angle between 12th rib and spine","\\brib","ซี่โครง","กระดูกสันหลัง","spine","12"),P("Gentle fist percussion over the other hand, compare both sides","สองข้าง","ทั้ง 2 ข้าง","ทั้งสองข้าง","both","เทียบ","compare","กำปั้น","fist")]}),
  B("5.2 What is your diagnosis?",3,{tags:["pe"],
   ans:"<b>Acute pyelonephritis</b> (ไข้ + ปัสสาวะแสบขัด + ปวดหลัง + CVA tenderness ข้างขวา) · ส่ง UA (pyuria, WBC cast), urine culture ก่อนให้ยา, hemoculture ถ้ารุนแรง · ให้ antibiotic (เช่น ceftriaxone IV ถ้าต้อง admit; oral fluoroquinolone ถ้าอาการไม่รุนแรงและเชื้อในพื้นที่ไม่ดื้อ) · ทำ imaging (U/S) ถ้าไม่ดีขึ้นใน 48–72 ชม. หรือสงสัยอุดกั้น",
   exp:"Ddx: perinephric/renal abscess, obstructive pyelonephritis จากนิ่ว (ต้อง decompress), cystitis (ไม่มีไข้/CVA tenderness)",
   pts:[CR(P("Acute pyelonephritis","pyelonephritis","กรวยไตอักเสบ","upper uti")),P("UA and urine culture","urinalysis","\\bua\\b","culture","เพาะเชื้อ")]})
 ),
 interp:"PE: เลือกการตรวจที่สำคัญที่สุด (CVA tenderness) ในผู้ป่วยไข้ + dysuria + ปวดหลัง → acute pyelonephritis",
 summary:["ไข้ + ปัสสาวะแสบขัด + ปวดหลัง → ตรวจ CVA tenderness","CVA: มุมซี่โครง 12 กับกระดูกสันหลัง ทุบเบาบนหลังมือ เทียบสองข้าง","Acute pyelonephritis: UA + urine culture ก่อนยา, ceftriaxone/fluoroquinolone"]}),

/* ===== สถานี 6 ===== */
Co({page:2,orig:"6",topic:"pe",sub:"Pulse/BP",ex:1,title:"Physical examination — hypertension in a young patient",seen:"คล้าย SI133 Ro405–406 ข้อ 3 และ SI132 Ro403–404 ข้อ 22 (HT in the young — ตรวจ CVS) — คนละชุด",
 stem:`A 25-year-old patient was recently found to have high blood pressure. Perform a cardiovascular examination focused on this problem.`,
 gray:"6. HT in the young จงตรวจร่างกายระบบ CVS · เฉลย: BP 4 extremities · CVS · Briut · Pulse · normal หมด",
 flag:"อายุ 25 ปีใน stem Claude แต่ง (ไฟล์บอก \"HT in the young\") · ไฟล์เขียน \"Briut\" = bruit",
 notes:"รายการผู้จด: วัด BP 4 extremities · ตรวจ CVS · ฟัง bruit · คลำ pulse · ผลตรวจปกติทั้งหมด",
 sp:"ผู้ป่วยจำลองอายุ 25 ปี · BP แขนขวา 156/96 แขนซ้าย 154/94 ขาขวา 170/100 ขาซ้าย 168/98 mmHg · ชีพจรทุกตำแหน่งปกติ เท่ากันสองข้าง ไม่มี radio-femoral delay · ไม่มี bruit ที่ carotid/abdomen/renal/femoral · หัวใจปกติ ไม่มี murmur · ทุกอย่างปกติ",
 parts:S(
  B("6.1 Perform a focused cardiovascular examination.",8,{tags:["pe"],
   ans:"แนะนำตัว ขออนุญาต · <b>General:</b> รูปร่าง/BMI, Cushingoid, ลักษณะ Turner/Marfan, neurofibromatosis (café-au-lait), ตาโปน/คอพอก · <b>วัด BP ทั้ง 4 extremities</b> (แขนสองข้าง + ขาสองข้าง) — แขนสองข้างต่าง > 10–15 mmHg หรือขาต่ำกว่าแขน = ผิดปกติ (ปกติ BP ขาสูงกว่าแขน) · <b>คลำ pulse ทุกตำแหน่ง</b> เทียบสองข้าง: radial, brachial, carotid, femoral, popliteal, dorsalis pedis, posterior tibial + <b>radio-femoral delay</b> · <b>ฟัง bruit</b>: carotid, subclavian, <b>abdominal/renal</b> (เหนือสะดือ 2 ข้าง และหลัง), femoral · <b>ตรวจหัวใจ</b>: apex (LVH), heave/thrill, ฟังเสียงหัวใจ murmur (coarctation: systolic murmur ที่หลังระหว่างสะบัก), S4 · คลำไต (polycystic kidney) · ตรวจ fundus (hypertensive retinopathy)",
   exp:"สาเหตุ secondary HT ในคนอายุน้อย: renal parenchymal disease, renovascular (fibromuscular dysplasia, Takayasu arteritis — pulse/BP ต่างกัน, bruit), coarctation of aorta (BP ขา < แขน, radio-femoral delay), primary aldosteronism, pheochromocytoma, Cushing, hyperthyroidism, OSA, ยา",
   rubric:"ได้เต็มเมื่อวัด BP 4 extremities + คลำ pulse เทียบสองข้าง/radio-femoral delay + ฟัง bruit (โดยเฉพาะ renal bruit) + ตรวจหัวใจ · ลืมวัด BP ขา = ขาดข้อสำคัญ",
   pts:[H("BP",30),CR(P("BP in all four extremities","4 extrem","four extrem","แขน.{0,15}ขา","ขา.{0,15}แขน","ทั้ง 4","ทั้งสี่","\\b4 ข้าง")),
    H("Pulse",25),P("Palpate all peripheral pulses, compare both sides","pulse","ชีพจร","radial","femoral","dorsalis"),CR(P("Radio-femoral delay","radio.?femoral","delay")),
    H("Bruit",25),CR(P("Auscultate for bruits (carotid, renal/abdominal, femoral)","bruit","renal","briut")),
    H("หัวใจ/อื่น ๆ",20),P("Precordium: apex, heave, murmur","apex","heave","murmur","หัวใจ","precord","ฟังเสียง"),P("Look for features of secondary causes (Cushingoid, thyroid, fundus)","cushing","thyroid","ไทรอยด์","fundus","จอประสาทตา","café","cafe","bmi")]}),
  B("6.2 Report your findings.",2,{tags:["pe"],
   ans:"ผลตรวจ<b>ปกติทั้งหมด</b> (ตามผู้จด): BP แขนสองข้างใกล้เคียงกัน BP ขาสูงกว่าแขน, pulse ปกติเท่ากัน ไม่มี radio-femoral delay, ไม่มี bruit, หัวใจปกติ → ไม่พบหลักฐานของ coarctation หรือ renovascular disease จากการตรวจร่างกาย · ส่งตรวจหา secondary cause ต่อ: creatinine, electrolyte (K ต่ำ → aldosteronism), UA, aldosterone/renin ratio, TSH ตามอาการ",
   exp:"ตรวจร่างกายปกติไม่ได้ตัด secondary HT ออก — primary aldosteronism และ renal parenchymal disease มักตรวจร่างกายปกติ ต้องอาศัยผลแลป",
   pts:[CR(P("All findings normal","ปกติ","normal")),P("Further investigation for secondary hypertension","secondary","aldosterone","renin","creatinine","electrolyte","potassium","\\bua\\b")]})
 ),
 interp:"PE: HT in the young — มองหา coarctation/renovascular/endocrine cause ด้วย BP 4 extremities, pulse, bruit, หัวใจ",
 summary:["HT ในคนอายุน้อย → คิด secondary HT","วัด BP 4 extremities (ปกติขาสูงกว่าแขน), radio-femoral delay → coarctation","ฟัง renal/abdominal bruit → renovascular (FMD, Takayasu)"]}),

/* ===== สถานี 7 ===== */
Co({page:2,orig:"7",topic:"lab",sub:"Ascites",title:"Ascitic fluid analysis — calculate and interpret",seen:"คล้าย SI133 Ro405–406 ข้อ 17 (ascitic fluid — คำนวณและแปลผล) — คนละชุด",
 stem:`A 40-year-old man has abdominal distension for 1 month. Diagnostic paracentesis is performed.<br><b>Serum:</b> albumin 3.6 g/dL<br><b>Ascitic fluid:</b> appearance clear yellow · albumin 2.8 g/dL · total protein 4.5 g/dL · WBC 1,200 cells/µL (lymphocytes 85%, neutrophils 15%) · glucose 70 mg/dL (serum 105 mg/dL) · LDH 320 U/L (serum 220 U/L)<br>1. Interpret the ascitic fluid, showing your calculation.<br>2. What are the most likely causes?`,
 gray:"7. ให้ค่าน้ำในท้อง SAAG low saag high protein, lymphocyte เด่น approach สาเหตุที่เป็นไปได้มากที่สุด · เฉลย: แสดงวิธีการคำนวณ · TB, malignancy",
 flag:"⚠ ไฟล์ไม่ให้ตัวเลข — ค่าแลปทั้งหมด (อายุ เพศ ระยะเวลา ค่าใน serum/ascites) Claude แต่งให้ได้ low SAAG + high protein + lymphocyte predominant ตามที่ผู้จดบอก",
 notes:"ผู้จด: ต้องแสดงวิธีการคำนวณ (SAAG) · สาเหตุ TB, malignancy",
 parts:S(
  B("7.1 Interpret the ascitic fluid, showing your calculation.",5,{tags:["lab"],
   ans:"<b>SAAG</b> = serum albumin − ascitic albumin = 3.6 − 2.8 = <b>0.8 g/dL (< 1.1) → low SAAG</b> = ไม่ใช่ portal hypertension · <b>Ascitic total protein 4.5 g/dL (≥ 2.5) → high protein</b> · WBC 1,200/µL <b>lymphocyte predominant</b> (PMN = 180/µL < 250 → ไม่ใช่ SBP) · LDH ascites/serum > 0.6 และ glucose ค่อนข้างต่ำ → exudative/inflammatory process",
   exp:"SAAG ≥ 1.1 = portal hypertension (cirrhosis, heart failure, Budd-Chiari) — ถ้า protein ≥ 2.5 คิด cardiac ascites/Budd-Chiari, ถ้า < 2.5 คิด cirrhosis · SAAG < 1.1 = peritoneal disease (TB peritonitis, peritoneal carcinomatosis), pancreatic ascites, nephrotic syndrome (protein ต่ำ), serositis · SBP: PMN ≥ 250/µL",
   rubric:"ต้องแสดงการคำนวณ SAAG (ผู้จดเน้น) — บอกแค่ low SAAG โดยไม่คำนวณได้คะแนนน้อยกว่า",
   pts:[CR(P("SAAG = 3.6 − 2.8 = 0.8 g/dL","0\\.8","saag")),CR(P("Low SAAG (< 1.1) — not portal hypertension","low saag","saag ?(ต่ำ|<)","< ?1\\.1","น้อยกว่า 1\\.1","non.?portal","ไม่ใช่ portal")),P("High protein (≥ 2.5 g/dL)","high protein","protein ?(สูง|>|≥)","4\\.5","โปรตีนสูง"),P("Lymphocyte predominant, PMN < 250 (not SBP)","lymphocyt","ลิมโฟ","pmn","not sbp","ไม่ใช่ sbp")]}),
  B("7.2 What are the most likely causes?",4,{tags:["lab"],
   ans:"<b>Tuberculous peritonitis</b> และ <b>peritoneal carcinomatosis (malignant ascites)</b> · ส่งต่อ: <b>ascitic ADA</b> (สูง เช่น > 39 U/L สนับสนุน TB), AFB smear/Xpert MTB/RIF/culture (sensitivity ต่ำ), <b>cytology</b> (malignancy), CT abdomen, CA-125/tumor marker ตามสงสัย, <b>laparoscopic peritoneal biopsy</b> (มาตรฐานยืนยัน)",
   exp:"TB peritonitis พบบ่อยในไทย: ไข้ต่ำ ๆ น้ำหนักลด ท้องโต doughy abdomen · ADA ต่ำปลอมได้ในผู้ป่วย cirrhosis · มะเร็งที่แพร่กระจายเยื่อบุช่องท้องบ่อย: ovary, stomach, colon, pancreas",
   pts:[CR(P("Tuberculous peritonitis","\\btb\\b","tubercul","วัณโรค")),CR(P("Malignancy (peritoneal carcinomatosis)","malignan","carcinomatosis","มะเร็ง","cancer","metasta")),P("Next tests: ADA, cytology, peritoneal biopsy","\\bada\\b","adenosine","cytolog","biopsy","laparoscop")]})
 ),
 interp:"Lab: ascitic fluid — คำนวณ SAAG, protein, cell count → low SAAG high protein lymphocyte = TB/malignancy",
 summary:["SAAG = serum albumin − ascitic albumin · ≥ 1.1 = portal HT, < 1.1 = peritoneal disease","Low SAAG + high protein + lymphocyte predominant → TB peritonitis, peritoneal carcinomatosis","ส่ง ADA, cytology, peritoneal biopsy"]}),

/* ===== สถานี 8 ===== */
Co({page:2,orig:"8",topic:"hx",sub:"Joint pain",ex:1,title:"History taking — left ankle pain for 4 days",seen:"SI127 Ro409–412 ข้อ 4 · SI127 Ro417–420 ข้อ 21 · SI133 Ro407–408 OSCE 4 (ปวดข้อเท้าซ้าย 4 วัน → acute gouty arthritis)",
 stem:`A 40-year-old man presents with left ankle pain for 4 days. Take a history, then give your most likely diagnosis.`,
 gray:"8. มีผู้ชายคนหนึ่งอายุ 40 ปีมา ปวดข้อข้างซ้ายมาสี่วัน จงซักประวัติ · เฉลย: บวมแดงร้อนมั้ย นานเท่าไหร่ ถี่แค่ไหน หายเลยเปล่า ก่อนหน้านี้ทำไรมา กินเหล้ามาป่าว gout กำเริบ นิ่วในไต ประวัติครอบครัว · Acute gouty arthritis at left ankle",
 flag:"ไฟล์เขียน \"ปวดข้อข้างซ้าย\" — คำตอบผู้จดระบุ left ankle จึงใช้ข้อเท้าซ้ายใน stem · บทผู้ป่วย (sp) Claude แต่ง",
 notes:"รายการคำถามของผู้จด: บวมแดงร้อนไหม, นานเท่าไหร่, เป็นถี่แค่ไหน, หายสนิทระหว่างครั้งไหม, ก่อนหน้านี้ทำอะไรมา (trigger), กินเหล้า, gout กำเริบ, นิ่วในไต, ประวัติครอบครัว → Acute gouty arthritis at left ankle",
 sp:"ชาย 40 ปี ปวดข้อเท้าซ้าย 4 วัน เริ่มปวดกลางดึกหลังไปงานเลี้ยงดื่มเบียร์และกินเครื่องในมาก ปวดมากจนเดินไม่ได้ ผ้าห่มโดนก็เจ็บ ข้อบวม แดง ร้อน · มีไข้ต่ำ ๆ · เคยปวดแบบนี้ที่โคนนิ้วโป้งเท้าขวา 2 ครั้งในปีที่แล้ว ครั้งละ 1 สัปดาห์ หายสนิทเอง ระหว่างครั้งไม่ปวดเลย · ไม่มีแผล/อุบัติเหตุ ไม่มีปัสสาวะแสบ ไม่มีตาแดง ท้องเสีย ไม่มีเพศสัมพันธ์เสี่ยง · เคยปวดเอวและปัสสาวะมีกรวด 3 ปีก่อน · ดื่มเบียร์ทุกสัปดาห์ · กินยาความดัน hydrochlorothiazide · พ่อเป็นเกาต์",
 parts:S(
  B("8.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะข้อ:</b> onset (ฉับพลันกลางดึก), ระยะเวลา, <b>บวม แดง ร้อน</b>, ความรุนแรง, จำนวนข้อ/ตำแหน่ง, ไข้ · <b>เคยเป็นมาก่อน:</b> ถี่แค่ไหน ข้อไหน <b>หายสนิทระหว่างครั้งหรือไม่</b> (intercritical period), tophi · <b>ปัจจัยกระตุ้น:</b> <b>ดื่มเหล้า/เบียร์</b>, อาหาร purine สูง (เครื่องใน สัตว์ปีก ยอดผัก), ขาดน้ำ, เจ็บป่วย/ผ่าตัด, ยา (<b>thiazide</b>, loop diuretic, low-dose aspirin, cyclosporine) · <b>แยกโรค:</b> อุบัติเหตุ/แผล (septic arthritis, cellulitis), อาการ reactive arthritis (ปัสสาวะแสบ ท้องเสีย ตาแดง), เพศสัมพันธ์เสี่ยง (gonococcal) · <b>โรคร่วม:</b> <b>นิ่วในไต</b>, CKD, HT, DM, ไขมัน · <b>ประวัติครอบครัว</b>เป็นเกาต์",
   exp:"Gout: monoarthritis เฉียบพลันรุนแรงถึงขีดสุดใน 24 ชม. ที่ 1st MTP (podagra), ข้อเท้า, เข่า · ยืนยันด้วยการเจาะข้อพบ <b>negatively birefringent needle-shaped MSU crystals</b> · serum uric acid ช่วง flare อาจปกติ",
   rubric:"ได้เต็มเมื่อถามลักษณะการอักเสบ + recurrence/intercritical + triggers (เหล้า อาหาร ยา) + นิ่วไต + ครอบครัว + แยก septic arthritis",
   pts:[H("ลักษณะข้อ",30),P("Onset, duration","นาน","onset","เริ่ม","duration"),CR(P("Swelling, redness, warmth","บวม","แดง","ร้อน","swell","\\bred\\b","warm")),P("Fever","ไข้","fever"),
    H("ประวัติเดิม",25),CR(P("Previous attacks, frequency, complete resolution between attacks","เคยเป็น","ถี่","ครั้ง","หายสนิท","หายเลย","recur","previous")),
    H("ปัจจัยกระตุ้น/แยกโรค",30),CR(P("Alcohol intake","เหล้า","เบียร์","alcohol","แอลกอฮอล์","สุรา")),P("Diet, drugs (thiazide, aspirin), preceding events","อาหาร","เครื่องใน","purine","thiazide","ยาขับปัสสาวะ","ยา(ที่|ประจำ|อะไร)","ทำอะไรมา","aspirin"),P("Trauma / infection / urethritis to exclude other causes","แผล","อุบัติเหตุ","trauma","ปัสสาวะแสบ","ท้องเสีย","ตาแดง","เพศสัมพันธ์"),
    H("โรคร่วม/ครอบครัว",15),P("Kidney stones","นิ่ว","stone","calcul"),P("Family history","ครอบครัว","family","พ่อ","แม่")]}),
  B("8.2 What is your most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>Acute gouty arthritis at left ankle</b> (recurrent acute monoarthritis หายสนิทระหว่างครั้ง + เหล้า/purine + thiazide + นิ่วไต + ครอบครัว) · Ddx: septic arthritis (ต้องเจาะข้อถ้าสงสัย), CPPD (pseudogout), reactive arthritis, cellulitis",
   exp:"รักษา flare: NSAIDs (naproxen/indomethacin) หรือ colchicine (เริ่มภายใน 36 ชม.; 1.2 mg แล้ว 0.6 mg อีก 1 ชม. ต่อมา) หรือ corticosteroid · พัก ยกขาสูง ประคบเย็น · ไม่เริ่ม/หยุด allopurinol ระหว่าง flare ถ้ากินอยู่แล้วให้กินต่อ · เปลี่ยน thiazide เป็น losartan ถ้าทำได้",
   pts:[CR(P("Acute gouty arthritis","gout","เกาต์")),P("Differential: septic arthritis","septic","ติดเชื้อ","cppd","pseudogout")]})
 ),
 interp:"History taking: acute monoarthritis — แยก gout จาก septic arthritis ด้วยประวัติ recurrence, trigger, ยา, นิ่ว, ครอบครัว",
 summary:["Gout: monoarthritis ฉับพลันกลางดึก บวมแดงร้อน หายสนิทระหว่างครั้ง","ถาม triggers: เหล้า, purine, thiazide/aspirin, ขาดน้ำ","ถามนิ่วไต ประวัติครอบครัว · แยก septic arthritis (เจาะข้อ)","ยืนยัน: negatively birefringent needle-shaped crystals"]}),

/* ===== สถานี 9 ===== */
Co({page:2,orig:"9",topic:"micro",sub:"PBS",title:"Fatigue and pallor — peripheral blood smear",imgNote:NOIMG,
 stem:`A 35-year-old woman presents with fatigue and pallor. Describe the peripheral blood smear and give your diagnosis.`,
 gray:"9. PBS IDA · เฉลย: Macroovalocyte RBC aniso poikilo · tear drop · normal wbc neutrophil predominant",
 flag:NOIMG+" · ⚠ คอลัมน์คำถามเขียน \"IDA\" แต่คำบรรยายในคอลัมน์เฉลยเป็น macro-ovalocyte (ลักษณะ megaloblastic) — เฉลยยึด IDA ตามหัวข้อสถานี (ดู opinion) · อายุ/เพศ/อาการใน stem Claude แต่ง",
 notes:"ผู้จดเขียนหัวข้อ \"PBS IDA\" และคำบรรยาย: macro-ovalocyte, RBC anisocytosis, poikilocytosis, tear drop, WBC ปกติ neutrophil predominant",
 opinion:"ไฟล์ขัดกันเอง: หัวข้อบอก IDA แต่บรรยาย \"macroovalocyte\" ซึ่งเป็นลักษณะของ megaloblastic anemia (OSCE_REF ข้อ 10) ไม่ใช่ IDA · IDA ตาม OSCE_REF ข้อ 1 = hypochromic microcytic RBC, pencil cell (elliptocyte), target cell — เป็นไปได้ว่าผู้จดเห็น pencil cell/elliptocyte แล้วเขียนเป็น ovalocyte · เฉลยนี้จึงยึด IDA ตามหัวข้อ · ถ้าสไลด์จริงเป็นเซลล์ใหญ่กว่า nucleus ของ small lymphocyte + hypersegmented neutrophil ให้ตอบ megaloblastic anemia",
 parts:S(
  B("9.1 Describe the peripheral blood smear.",4,{tags:["micro"],
   ans:"<b>RBC:</b> <b>hypochromic microcytic</b> RBC (central pallor > 1/3 ของเซลล์ เล็กกว่า nucleus ของ small lymphocyte), anisocytosis 1–2+, poikilocytosis 1–2+ (<b>pencil cells/elliptocytes</b>, target cells, teardrop บ้าง), polychromasia น้อยหรือไม่มี · <b>WBC:</b> ปกติ neutrophil predominant · <b>Platelet:</b> ปกติหรือเพิ่ม (reactive thrombocytosis)",
   exp:"ตาม OSCE_REF (Key PBS ข้อ 1): ลักษณะที่ช่วยแยก IDA จาก thalassemia = poikilocytosis น้อยกว่า และ polychromasia น้อย/ไม่มี (thalassemia มี target cell, basophilic stippling, NRC, polychromasia มากกว่า) · Megaloblastic: macro-ovalocyte + hypersegmented neutrophil (≥ 5% มี 5 lobes หรือมี 6 lobes อย่างน้อย 1 ตัว)",
   rubric:"ตอบ macro-ovalocyte ตามไฟล์ได้คะแนนเมื่อสไลด์เป็น megaloblastic เท่านั้น",
   pts:[H("RBC",60),CR(P("Hypochromic microcytic RBC","hypochrom","microcyt","ติดสีจาง","ขนาดเล็ก")),P("Anisocytosis and poikilocytosis","aniso","poikilo"),P("Pencil cells / elliptocytes / target cells","pencil","ellipto","target","teardrop","tear drop"),
    H("WBC/Platelet",40),P("WBC normal, neutrophil predominant","neutrophil","wbc ?(ปกติ|normal)","normal wbc"),P("Platelets normal or increased","platelet","เกล็ดเลือด")]}),
  B("9.2 What is your diagnosis, and how would you confirm it?",3,{tags:["micro"],flag:"ส่วนการยืนยัน Claude เติม",
   ans:"<b>Iron deficiency anemia</b> · ยืนยันด้วย <b>serum ferritin ต่ำ</b> (< 30 ng/mL), transferrin saturation < 16–20%, TIBC สูง · หาสาเหตุเสมอ: เสียเลือดประจำเดือนมาก, GI blood loss (ผู้ชาย/หญิงหมดประจำเดือน → endoscopy), พยาธิปากขอ, กินไม่พอ · Ddx: thalassemia trait, anemia of chronic disease",
   exp:"รักษา: ferrous sulfate รับประทาน (เช่น วันละ 1 เม็ด หรือวันเว้นวัน เพื่อการดูดซึมที่ดีกว่า) ต่ออีก ~3 เดือนหลัง Hb ปกติเพื่อเติม iron store · reticulocyte เพิ่มใน 7–10 วัน",
   pts:[CR(P("Iron deficiency anemia","iron def","\\bida\\b","ขาดธาตุเหล็ก","ขาดเหล็ก")),P("Confirm with ferritin / iron studies","ferritin","iron stud","tibc","transferrin"),P("Look for the cause (menses, GI blood loss, hookworm)","ประจำเดือน","menorrh","\\bgi\\b","ทางเดินอาหาร","endoscop","พยาธิ","hookworm","เสียเลือด")]})
 ),
 interp:"Microscope: PBS — hypochromic microcytic anemia (IDA) และแยกจาก thalassemia/megaloblastic",
 summary:["IDA: hypochromic microcytic, pencil cell, polychromasia น้อย, platelet ปกติ/สูง","Thalassemia: target cell, basophilic stippling, NRC, polychromasia มากกว่า","Macro-ovalocyte + hypersegmented neutrophil = megaloblastic","ยืนยัน IDA ด้วย ferritin และหาสาเหตุการเสียเลือดเสมอ"]}),

/* ===== สถานี 10 ===== */
Co({page:2,orig:"10",topic:"micro",sub:"Stool exam",title:"Stool examination — describe, diagnose and treat",imgNote:NOIMG,
 stem:`A stool wet preparation is examined under the microscope.<br>1. Describe what you see.<br>2. Give the diagnosis.<br>3. How would you treat this patient?`,
 gray:"10. ส่องกล้องเจอ Strongyloid 1.จงบรรยาย 2.จงให้การวินิจฉัย 3.ให้การรักษา · เฉลย: Rhabditiform larva of strongyloides stercorales · Intestinal strongyloides · Ivermectin",
 flag:NOIMG+" · stem ไม่บอกชื่อเชื้อ (ไฟล์บอกว่าสไลด์เป็น Strongyloides)",
 notes:"คำตอบผู้จด: Rhabditiform larva of Strongyloides stercoralis → intestinal strongyloidiasis → ivermectin",
 parts:S(
  B("10.1 Describe what you see.",3,{tags:["micro"],
   ans:"พบ<b>ตัวอ่อนพยาธิ (larva)</b> ในอุจจาระ: <b>rhabditiform larva</b> ยาว ~250 µm, <b>buccal canal (ช่องปาก) สั้น</b>, หลอดอาหารแบบ rhabditiform (มี bulb), เห็น <b>genital primordium</b> ขนาดใหญ่ชัดตรงกลางลำตัว → <b>rhabditiform larva of <i>Strongyloides stercoralis</i></b>",
   exp:"แยกจาก rhabditiform larva ของพยาธิปากขอ (hookworm): buccal canal ยาว genital primordium เล็ก · ปกติอุจจาระสดจะพบไข่ hookworm ไม่ใช่ตัวอ่อน (ยกเว้นทิ้งอุจจาระไว้นาน) · Filariform larva ของ Strongyloides: ยาว ปลายหางแยกเป็นแฉก (notched tail)",
   pts:[CR(P("Rhabditiform larva","rhabditi","larva","ตัวอ่อน")),P("Short buccal canal, prominent genital primordium","buccal","genital primord","ช่องปากสั้น")]}),
  B("10.2 What is the diagnosis?",2,{tags:["micro"],
   ans:"<b>Intestinal strongyloidiasis</b> (<i>Strongyloides stercoralis</i>)",
   exp:"ติดทางผิวหนังจาก filariform larva ในดิน · <b>autoinfection</b> ทำให้ติดเชื้อได้นานหลายสิบปี · ผู้ได้ corticosteroid, HTLV-1, ภูมิคุ้มกันต่ำ → <b>hyperinfection/disseminated strongyloidiasis</b> (มักร่วมกับ Gram-negative sepsis/meningitis) → ควรตรวจ/รักษาก่อนให้ steroid ในคนจากพื้นที่ระบาด",
   pts:[CR(P("Strongyloidiasis (Strongyloides stercoralis)","strongyloid","stercoral"))]}),
  B("10.3 How would you treat this patient?",2,{tags:["micro"],
   ans:"<b>Ivermectin 200 µg/kg/day รับประทาน 1–2 วัน</b> (ยาเลือกแรก) · ทางเลือก: albendazole 400 mg วันละ 2 ครั้ง 7 วัน (ได้ผลน้อยกว่า) · hyperinfection: ivermectin ทุกวันจนตรวจไม่พบตัวอ่อน ≥ 2 สัปดาห์ + ลด steroid + รักษา sepsis",
   exp:"ตรวจอุจจาระติดตามหลังรักษา · ตรวจหา HTLV-1 ในรายที่เป็นซ้ำ/รุนแรง",
   pts:[CR(P("Ivermectin","ivermectin","ไอเวอร์")),P("Dose 200 µg/kg/day for 1–2 days","200","µg/kg","mcg/kg","ug/kg")]})
 ),
 interp:"Microscope: stool exam — rhabditiform larva ของ S. stercoralis, วินิจฉัย และรักษาด้วย ivermectin",
 summary:["Rhabditiform larva ในอุจจาระสด = Strongyloides (buccal canal สั้น genital primordium ใหญ่)","Hookworm: buccal canal ยาว (ปกติพบไข่มากกว่า)","Ivermectin 200 µg/kg/day 1–2 วัน","Steroid/HTLV-1 → hyperinfection syndrome"]}),

/* ===== สถานี 11 ===== */
Co({page:2,orig:"11",topic:"img",sub:"CXR",title:"Chest radiograph — describe and diagnose",imgNote:NOIMG,seen:"คล้าย SI130 Ro409–412 ข้อ 16 และ SI131 Ro417–420 ข้อ 16 (CXR ผู้ป่วยมะเร็งเต้านมเดิม — pleural effusion) — คนละชุด",
 stem:`A 55-year-old woman previously treated for breast cancer presents with progressive dyspnea. Describe the chest radiograph and give your diagnosis.`,
 gray:"11. film CXR จงบรรยายข้อสอบเก่า · เฉลย: pleural effusion · meniscus sign · opacity at left lower hemithorax · left malignant pleural effusion",
 flag:NOIMG+" · ⚠ ประวัติใน stem (หญิง 55 ปี มะเร็งเต้านมเดิม เหนื่อย) Claude เติมจากข้อสอบเก่าที่คล้ายกัน (SI130/SI131) เพื่อให้วินิจฉัย malignant effusion ได้ — ไฟล์บอกแค่ \"film CXR จงบรรยาย ข้อสอบเก่า\"",
 notes:"คำตอบผู้จด: pleural effusion, meniscus sign, opacity at left lower hemithorax → left malignant pleural effusion",
 parts:S(
  B("11.1 Describe the chest radiograph.",4,{tags:["img"],
   ans:"CXR PA upright, adequate film · <b>homogeneous opacity at left lower hemithorax</b> บดบัง left costophrenic angle และ left hemidiaphragm, ขอบบนโค้งเว้าสูงขึ้นทางด้านข้าง (<b>meniscus sign</b>) · (ถ้าน้ำมาก) mediastinum/trachea ถูกดันไปขวา · ปอดส่วนที่เหลือ หัวใจ กระดูก ตามที่เห็น — มองหา mass ในปอด, lymphangitic pattern, กระดูกถูกทำลาย, หลังผ่าตัดเต้านม (soft tissue ข้างนั้นจางลง)",
   exp:"Effusion ≥ ~200 mL เห็นใน PA (costophrenic angle ทื่อ) · ~50 mL ใน lateral view · Massive effusion + trachea ไม่ถูกดัน → คิด central airway obstruction/collapse ร่วม หรือ mediastinum ถูกตรึงจากมะเร็ง",
   pts:[CR(P("Left lower homogeneous opacity","left","ซ้าย","opacit","ทึบ")),CR(P("Meniscus sign / blunted costophrenic angle","meniscus","costophrenic","ทื่อ","blunt")),P("Comment on mediastinal shift / trachea","trachea","mediastin","shift","ดัน")]}),
  B("11.2 What is your diagnosis, and what would you do next?",3,{tags:["img"],
   ans:"<b>Left pleural effusion — likely malignant pleural effusion</b> (metastatic breast cancer) · ต่อ: <b>diagnostic thoracentesis</b> (protein, LDH ตาม Light's criteria → exudate, cell count, glucose, <b>cytology</b>, ส่ง ADA/AFB เพื่อแยก TB) · ถ้าเหนื่อยมาก → therapeutic thoracentesis · effusion กลับมาซ้ำ → pleurodesis หรือ indwelling pleural catheter",
   exp:"Light's criteria (exudate ถ้ามีข้อใดข้อหนึ่ง): pleural/serum protein > 0.5, pleural/serum LDH > 0.6, pleural LDH > 2/3 ของ upper limit ของ serum · Malignant effusion: cytology positive ~60% ครั้งแรก — ส่งซ้ำหรือทำ pleural biopsy/thoracoscopy",
   pts:[CR(P("Left pleural effusion","pleural effusion","น้ำในเยื่อหุ้มปอด","effusion")),P("Likely malignant (metastatic breast cancer)","malignan","มะเร็ง","metasta","cancer"),P("Thoracentesis with cytology","thoracent","เจาะ","\\btap\\b","cytolog")]})
 ),
 interp:"Imaging: CXR left pleural effusion (meniscus sign) ในผู้ป่วยมะเร็ง → malignant effusion",
 summary:["Pleural effusion: homogeneous opacity, costophrenic angle ทื่อ, meniscus sign","ประวัติมะเร็ง (เต้านม ปอด lymphoma) → malignant effusion","Thoracentesis: Light's criteria + cytology"]}),

/* ===== สถานี 12 ===== */
Co({page:2,orig:"12",topic:"micro",sub:"PBS",title:"Fever, fatigue and bruising — peripheral blood smear",imgNote:NOIMG,
 stem:`A 50-year-old man presents with fever, fatigue and easy bruising for 2 weeks. Describe the peripheral blood smear, state the investigations you would request, and give your diagnosis.`,
 gray:"12. PBS เจอ blast จงบรรยาย PBS บอกการส่งตรวจและวินิจฉัย · เฉลย: BM biopsy, flow cytometry · AML",
 flag:NOIMG+" · อายุ/อาการใน stem Claude แต่ง · stem ไม่บอกว่าเจอ blast (ไฟล์บอก)",
 notes:"คำตอบผู้จด: ส่ง BM biopsy, flow cytometry → AML",
 parts:S(
  B("12.1 Describe the peripheral blood smear.",4,{tags:["micro"],
   ans:"<b>RBC:</b> normochromic normocytic, ไม่มี anisopoikilocytosis มาก · <b>WBC:</b> จำนวนเพิ่ม <b>พบ blast จำนวนมาก (myeloblast predominate)</b> — เซลล์ใหญ่ 15–20 µm, N:C ratio สูง, basophilic cytoplasm, fine chromatin, <b>nucleoli ชัด</b>, อาจมี granules เล็กน้อยและ/หรือ <b>Auer rods</b> · neutrophil ที่โตเต็มที่ลดลง · <b>Platelet:</b> ลดลง (< 5/OF)",
   exp:"ตาม OSCE_REF (Key PBS ข้อ 22 AML) · แยก lymphoblast (ALL): เซลล์เล็กกว่า cytoplasm น้อยมาก ไม่มี granule/Auer rod · Auer rod = myeloid lineage แน่นอน · APL: promyelocyte มี granule มาก + Auer rod เป็นมัด (faggot cell) + DIC",
   pts:[H("WBC",60),CR(P("Increased blasts (myeloblasts)","blast","บลาสต์")),P("Blast features: large, high N:C, prominent nucleoli, Auer rods","nucleol","auer","n ?: ?c","granul"),
    H("RBC/Platelet",40),P("Normochromic normocytic RBC","normochrom","normocyt"),P("Thrombocytopenia","platelet","เกล็ดเลือด","thrombocytopen")]}),
  B("12.2 What investigations would you request?",3,{tags:["micro"],
   ans:"<b>Bone marrow aspiration และ biopsy</b> (blast ≥ 20% = acute leukemia) · <b>flow cytometry (immunophenotyping)</b> แยก myeloid (CD13, CD33, CD117, MPO) จาก lymphoid · <b>cytogenetics และ molecular</b> (เช่น t(15;17) PML-RARA, FLT3, NPM1) เพื่อแบ่งกลุ่มความเสี่ยง · ประกอบ: coagulation (PT, aPTT, fibrinogen, D-dimer — DIC/APL), uric acid, K, phosphate, Ca, LDH, creatinine (tumor lysis), hemoculture ถ้ามีไข้",
   exp:"สงสัย APL (DIC, promyelocyte) → ให้ ATRA ทันทีไม่ต้องรอผลยืนยัน · ไข้ + neutropenia = febrile neutropenia → empirical antibiotic",
   pts:[CR(P("Bone marrow aspiration/biopsy","bone marrow","\\bbm\\b","ไขกระดูก","marrow")),CR(P("Flow cytometry / immunophenotyping","flow","immunophenotyp","cd ?(13|33|117)")),P("Cytogenetics / molecular studies","cytogenet","karyotyp","molecular","fish","pml","flt3","npm1"),P("Coagulation and tumor lysis labs","coag","\\bpt\\b","fibrinogen","\\bdic\\b","uric","tumor lysis","tls")]}),
  B("12.3 What is your diagnosis?",2,{tags:["micro"],
   ans:"<b>Acute myeloid leukemia (AML)</b> — ยืนยันด้วย BM blast ≥ 20% และ immunophenotype เป็น myeloid · Ddx: ALL, APL (AML subtype ที่ต้องรักษาเร่งด่วน)",
   exp:"อาการจาก marrow failure: ซีด (anemia), ไข้/ติดเชื้อ (neutropenia), เลือดออก (thrombocytopenia ± DIC) · leukostasis ถ้า blast สูงมาก",
   pts:[CR(P("Acute myeloid leukemia","\\baml\\b","acute myeloid","myeloblastic","acute leuk"))]})
 ),
 interp:"Microscope: PBS พบ myeloblast → AML · ส่ง BM + flow cytometry + cytogenetics",
 summary:["Myeloblast: ใหญ่ N:C สูง nucleoli ชัด อาจมี Auer rod","Auer rod = myeloid · APL = faggot cell + DIC → ATRA ทันที","ส่ง BM aspiration/biopsy, flow cytometry, cytogenetics/molecular, coagulation, TLS labs"]}),

/* ===== สถานี 13 ===== */
Co({page:2,orig:"13",topic:"micro",sub:"Parasite",title:"Itchy scalp in a child — object attached to a hair shaft",img:["os128c_1"],imgNote:"ภาพจากกล้องจุลทรรศน์ของวัตถุที่ติดอยู่บนเส้นผม",
 stem:`A schoolchild presents with an itchy scalp. The image shows an object found attached to a hair shaft, viewed under the microscope.<br>1. Describe what you see.<br>2. Give the diagnosis and name the organism.<br>3. How is it transmitted?`,
 gray:"13. ให้รูปไข่ของเหาที่ปลายผมมาของเด็กที่คันหัวมา จงบรรยายสิ่งที่เห็น วินิจฉัยโรค บอกชื่อตัว บอกวิธีการติดต่อ · เฉลย: Louse nest · Pediculosis · Pediculus humanus · head to head contact หวี หมวก",
 flag:"รูปอยู่หน้า 3 (แถวบนสุดไม่มีเลข เป็นรูปของสถานี 13) · stem ไม่บอกว่าเป็นไข่เหา (ไฟล์บอก) · ข้อย่อยรักษาไม่ได้ใส่ (ไฟล์ไม่ถาม)",
 notes:"คำตอบผู้จด: \"Louse nest\" (Claude: ศัพท์ที่ถูกคือ nit = ไข่เหา) · Pediculosis · Pediculus humanus · ติดต่อทาง head-to-head contact, หวี, หมวก",
 opinion:"ผู้จดเขียน \"Louse nest\" — ศัพท์ที่ถูกคือ <b>nit</b> (ไข่เหา) · ชื่อเต็มของเหาที่หัวคือ <i>Pediculus humanus capitis</i> (ผู้จดเขียน Pediculus humanus — ตอบได้ แต่ระบุ capitis จะสมบูรณ์กว่า)",
 parts:S(
  B("13.1 Describe what you see.",3,{tags:["micro"],
   ans:"วัตถุรูปไข่ (oval) สีน้ำตาลใส <b>ยึดติดแน่นกับเส้นผมด้วยปลอกซีเมนต์</b> (cement sheath) หุ้มรอบ hair shaft ด้านหนึ่ง · ปลายอีกด้านมี<b>ฝาปิด (operculum)</b> ที่มีรูเล็ก ๆ · ภายในเห็นตัวอ่อน (nymph) กำลังเจริญ = <b>embryonated nit (ไข่เหา)</b>",
   exp:"Nit ติดแน่นกับเส้นผม ดึงหลุดยาก (ต่างจากรังแค/hair cast ที่เลื่อนไปตามเส้นผมได้) · nit ที่อยู่ห่างหนังศีรษะ > 1 cm มักฟักแล้วหรือตาย · ไข่ฟักใน ~7–10 วัน",
   pts:[CR(P("Nit (louse egg)","\\bnit","ไข่เหา","louse egg","egg of","ไข่")),P("Oval egg cemented to the hair shaft","hair shaft","เส้นผม","cement","ติดแน่น"),P("Operculum, developing nymph inside","operculum","ฝา","nymph","ตัวอ่อน","embryo")]}),
  B("13.2 Give the diagnosis and name the organism.",2,{tags:["micro"],
   ans:"<b>Pediculosis capitis (head lice infestation)</b> · เชื้อ: <b><i>Pediculus humanus capitis</i></b> (head louse)",
   exp:"รักษา: 1% permethrin lotion ทาผมทิ้งไว้ 10 นาทีแล้วล้างออก ซ้ำวันที่ 9–10 (ไข่ที่ฟักใหม่) · ทางเลือก: malathion 0.5%, ivermectin lotion, oral ivermectin · หวีเสนียด (fine-tooth comb) · ซักเครื่องนอน หมวก หวีด้วยน้ำร้อน · รักษาคนในบ้านที่มีเหาพร้อมกัน",
   pts:[CR(P("Pediculosis capitis","pediculosis","เหา","lice","louse")),CR(P("Pediculus humanus capitis","pediculus","humanus","capitis"))]}),
  B("13.3 How is it transmitted?",2,{tags:["micro"],
   ans:"<b>Head-to-head contact</b> (สัมผัสศีรษะโดยตรง — พบบ่อยที่สุด เช่น เด็กเล่นด้วยกัน นอนด้วยกัน) · ทางอ้อมผ่านของใช้ร่วมกัน: <b>หวี หมวก</b> ผ้าเช็ดตัว หมอน ที่คาดผม",
   exp:"เหาไม่กระโดด/บินไม่ได้ ทำได้แค่คลาน · เหาตัวเต็มวัยอยู่นอกหนังศีรษะได้ไม่เกิน 1–2 วัน",
   pts:[CR(P("Direct head-to-head contact","head.?to.?head","ศีรษะ","สัมผัส","direct contact")),P("Shared combs, hats, bedding","หวี","หมวก","comb","\\bhat","หมอน","ผ้า","fomite")]})
 ),
 interp:"Microscope: nit บนเส้นผม → pediculosis capitis, ชื่อเชื้อ และการติดต่อ",
 summary:["Nit = ไข่เหารูปไข่ ติดแน่นบนเส้นผมด้วยซีเมนต์ มี operculum","Pediculosis capitis — Pediculus humanus capitis","ติดต่อ head-to-head contact > หวี หมวก หมอน","รักษา 1% permethrin ซ้ำวันที่ 9–10 + หวีเสนียด"]}),

/* ===== สถานี 14 ===== */
Co({page:3,orig:"14",topic:"ekg",sub:"STEMI/ischemia",title:"Chest pain — 12-lead EKG: read and interpret",imgNote:NOIMG,
 stem:`A 60-year-old man presents with chest pain for 1 hour. Read and interpret his 12-lead EKG.`,
 gray:"14. ให้ EKG : ST evelation V2 3 4 · ST depression จงอ่านและแปลผล · เฉลย: acute anterior wall stemi · บลาๆๆๆ",
 flag:NOIMG+" · อายุ/อาการใน stem Claude แต่ง · stem ไม่บอกผล EKG (ไฟล์บอก ST elevation V2–4 + ST depression) · ไฟล์ไม่บอกว่า ST depression อยู่ lead ไหน — Claude ใส่เป็น reciprocal change ที่ inferior leads",
 notes:"ผู้จด: EKG มี ST elevation V2, V3, V4 และ ST depression → acute anterior wall STEMI · \"บลาๆๆๆ\" = ผู้จดไม่ได้เขียนรายละเอียดส่วนที่เหลือ",
 parts:S(
  B("14.1 Read the EKG systematically.",4,{tags:["ekg"],
   ans:"อ่านตามลำดับ: <b>rate</b> (เช่น ~90/min), <b>rhythm</b> (sinus), axis, intervals (PR, QRS, QT), chamber · <b>ST segment elevation ใน V2, V3, V4</b> (≥ 2 contiguous leads) ± Q wave/hyperacute T · <b>reciprocal ST depression</b> (เช่น II, III, aVF)",
   exp:"เกณฑ์ STEMI (4th Universal Definition): new ST elevation ที่ J point ≥ 2 contiguous leads — V2–V3 ≥ 2 mm ในชาย ≥ 40 ปี (≥ 2.5 mm ชาย < 40 ปี, ≥ 1.5 mm หญิง), leads อื่น ≥ 1 mm · Reciprocal ST depression ช่วยยืนยันว่าเป็น STEMI ไม่ใช่ pericarditis/early repolarization",
   pts:[P("Rate and rhythm","rate","rhythm","sinus","อัตรา"),CR(P("ST elevation in V2–V4","st ?elevat","st ?ยก","v2.{0,6}v4","v2","v3","v4")),P("Reciprocal ST depression","st ?depress","reciprocal","st ?กด")]}),
  B("14.2 What is your interpretation?",3,{tags:["ekg"],
   ans:"<b>Acute anterior wall ST-elevation myocardial infarction</b> (culprit มักเป็น LAD) · จัดการ: aspirin 160–325 mg เคี้ยว + P2Y12 inhibitor, anticoagulant, <b>reperfusion เร่งด่วน</b> — primary PCI (first medical contact-to-device ≤ 90–120 นาที) หรือ fibrinolysis (door-to-needle ≤ 30 นาที) ถ้า PCI ไม่ทันและอาการ < 12 ชม. · ตรวจ troponin แต่ไม่ต้องรอผลก่อนรักษา",
   exp:"แผนที่: V1–V2 septal, V3–V4 anterior, V5–V6 + I, aVL lateral, II, III, aVF inferior · anterior STEMI เสี่ยง cardiogenic shock, VT/VF, LV aneurysm/thrombus",
   rubric:"ตอบ anterior STEMI ได้เต็ม · ตอบแค่ \"MI\" โดยไม่บอกตำแหน่ง = บางส่วน",
   pts:[CR(P("Acute anterior wall STEMI","anterior","ผนังหน้า")),CR(P("ST-elevation myocardial infarction","stemi","st.?elevation myocard","\\bmi\\b","infarct")),P("Urgent reperfusion (primary PCI / fibrinolysis)","pci","reperfus","fibrinoly","streptokinase","tenecteplase","สวนหัวใจ")]})
 ),
 interp:"EKG: ST elevation V2–V4 + reciprocal ST depression → acute anterior STEMI",
 summary:["ST elevation ≥ 2 contiguous leads + reciprocal depression = STEMI","V2–V4 = anterior wall (LAD)","Reperfusion: primary PCI ≤ 90–120 นาที หรือ fibrinolysis ≤ 30 นาที"]}),

/* ===== สถานี 15 ===== */
Co({page:3,orig:"15",topic:"skin",sub:"Drug eruption",title:"Rash in a patient on long-term medication — describe, cause and initial management",img:["os128c_2"],imgNote:"ภาพผื่นผิวหนังบริเวณสะโพก/ต้นขา",
 stem:`A patient who has been taking anti-tuberculosis drugs for some time develops the rash shown.<br>1. Describe the skin lesions.<br>2. What is the cause?<br>3. What is your initial management?`,
 gray:"15. ให้รูป lesion มา พร้อมกับประวัติได้รับยา TB มาก่อนหน้านั้นยาวๆ จงบรรยาย และบอกสาเหตุของการเกิด และวิธีการรักษาเบื้องต้น · เฉลย: generalized · purpuric macule · target lesion · แพ้ anti TB drug · แก้โดยหยุดยา แล้วออกบัตรแพ้ยา · consult admit",
 flag:"ประวัติได้ยา TB อยู่ในโจทย์ต้นฉบับ (ไม่ใช่การใบ้)",
 notes:"คำตอบผู้จด: generalized, purpuric macule, target lesion → แพ้ยา anti-TB → หยุดยา ออกบัตรแพ้ยา consult admit",
 opinion:"ไฟล์บรรยาย \"purpuric macule\" — ในรูปเห็นเป็น erythematous macules/patches บางวงมีตรงกลางสีเข้มกว่า (targetoid) จากรูปบอกไม่ได้ว่ากดไม่จางหรือไม่ จึงบรรยายเป็น erythematous macules with atypical targetoid lesions และให้ตรวจ mucosa/skin detachment เพื่อแยก SJS/TEN",
 parts:S(
  B("15.1 Describe the skin lesions.",3,{tags:["skin"],
   ans:"<b>Multiple (generalized) erythematous to dusky-red macules and patches</b> ขนาดต่าง ๆ บางส่วนรวมกัน (coalescing) · หลายวงเป็น <b>targetoid lesions</b> (ตรงกลางสีเข้ม/คล้ำกว่าขอบ — atypical flat targets) · ในรูปไม่เห็นตุ่มน้ำหรือผิวหลุดลอก · ควรตรวจเพิ่ม: เยื่อบุ (ปาก ตา อวัยวะเพศ), Nikolsky sign, % BSA ที่ผิวหลุด",
   exp:"Typical target: 3 zones วงกลมชัด (erythema multiforme, มักที่ปลายแขนขา) · Atypical flat target/purpuric macules กระจายที่ลำตัว + mucosal involvement → SJS/TEN",
   pts:[CR(P("Generalized erythematous macules/patches","erythemat","macule","patch","ผื่นแดง","ปื้น")),CR(P("Target / targetoid lesions","target","เป้า")),P("Generalized / coalescing distribution","generali","กระจาย","ทั่วตัว","coalesc","รวมกัน"),P("Check mucosa / skin detachment","mucosa","เยื่อบุ","ปาก","nikolsky","หลุดลอก","detach","ตุ่มน้ำ","blister")]}),
  B("15.2 What is the cause?",2,{tags:["skin"],
   ans:"<b>Cutaneous adverse drug reaction (drug eruption) to anti-tuberculosis drugs</b> — ลักษณะ targetoid ต้องแยก <b>erythema multiforme-like eruption / early SJS–TEN</b> · ยาที่พบบ่อย: rifampicin, isoniazid, pyrazinamide, ethambutol (และ streptomycin)",
   exp:"SCAR (severe cutaneous adverse reactions) ต้องคิดถึงเมื่อมี: ไข้, เยื่อบุอักเสบ, ตุ่มน้ำ/ผิวหลุด, Nikolsky positive, ผื่นเจ็บ (SJS/TEN) · ผื่น + ไข้ + eosinophilia + ตับอักเสบ/ต่อมน้ำเหลืองโต → DRESS",
   pts:[CR(P("Drug eruption due to anti-TB drugs","แพ้ยา","drug","ยา ?(วัณโรค|tb)","anti.?tb","rifamp","isoniazid","pyrazinamide","ethambutol")),P("Consider EM / SJS–TEN","erythema multiforme","\\bem\\b","sjs","stevens","\\bten\\b","toxic epidermal")]}),
  B("15.3 What is your initial management?",3,{tags:["skin"],
   ans:"<b>หยุดยา anti-TB ทั้งหมด</b>ทันที · ประเมินความรุนแรง (vital signs, mucosa, % skin detachment, LFT, CBC eosinophil, creatinine) · <b>admit</b> และ <b>consult</b> แพทย์ผิวหนัง ถ้าสงสัย SCAR (SJS/TEN/DRESS) — supportive care: สารน้ำ ดูแลแผล ตา ปาก · ผื่นไม่รุนแรง: antihistamine, topical corticosteroid · <b>ออกบัตรแพ้ยา</b> · เมื่อผื่นหาย → ให้ยา TB กลับทีละตัว (sequential rechallenge) เพื่อหายาที่แพ้ <b>ห้าม rechallenge ถ้าเป็น SJS/TEN/DRESS</b> ใช้สูตรที่ไม่มียาต้นเหตุ",
   exp:"ถ้า TB รุนแรงและต้องหยุดยานาน อาจให้ยาที่มีโอกาสแพ้น้อย/สูตรสำรองระหว่างรอ ตามแนวทางวัณโรค · แจ้งผู้ป่วยชื่อยาที่แพ้และให้พกบัตรแพ้ยาทุกครั้ง",
   rubric:"ต้องมี: หยุดยา + บัตรแพ้ยา + ประเมินความรุนแรง/admit-consult (ผู้จด) · ให้ยา TB ต่อทั้งที่มีผื่น target = ผิด",
   pts:[CR(P("Stop all anti-TB drugs","หยุดยา","stop","discontinu","withdraw")),CR(P("Issue a drug allergy card","บัตรแพ้ยา","allergy card","แพ้ยา","บัตร")),P("Assess severity, admit and consult dermatology","admit","consult","ปรึกษา","นอนโรงพยาบาล","severity","ความรุนแรง"),P("Symptomatic treatment (antihistamine, topical steroid)","antihistamine","แก้แพ้","topical","steroid"),P("Sequential rechallenge once resolved (not after SJS/TEN)","rechallenge","ทีละตัว","re.?introduc","ให้ยาใหม่")]})
 ),
 interp:"Skin: targetoid drug eruption จากยา anti-TB — บรรยาย แยก SCAR และหยุดยา/บัตรแพ้ยา/admit",
 summary:["Targetoid erythematous macules กระจาย + ประวัติยา TB → drug eruption (EM-like/SJS)","ตรวจ mucosa, Nikolsky, % BSA, LFT, eosinophil (DRESS)","หยุดยาทั้งหมด → admit/consult → บัตรแพ้ยา","Rechallenge ทีละตัวเมื่อหาย ยกเว้น SJS/TEN/DRESS"]}),

/* ===== สถานี 16 ===== */
Co({page:3,orig:"16",topic:"micro",sub:"Malaria",title:"Febrile patient — thin blood film: describe and diagnose",imgNote:NOIMG,seen:"คล้าย SI131 Ro413–416 ข้อ 16 และ SI127 Ro401–404 ข้อ 22 (thin blood smear ผู้ป่วยไข้สูง) — คนละชุด",
 stem:`A patient with high fever for 3 days after returning from a forest area. Describe the thin blood film and give the diagnosis.`,
 gray:"16. Malaria จงบรรยาย และ วินิจฉัย · เฉลย: normal size infected RBC · thin ring form, multiple infection, double chromatin ring · Plasmodium falciparum",
 flag:NOIMG+" · ประวัติใน stem Claude แต่ง · stem ไม่บอกว่าเป็น malaria (ไฟล์บอก)",
 notes:"คำตอบผู้จด: infected RBC ขนาดปกติ, thin ring form, multiple infection, double chromatin ring → Plasmodium falciparum",
 parts:S(
  B("16.1 Describe the thin blood film.",4,{tags:["micro"],
   ans:"พบ<b>เชื้อ malaria ระยะ ring form</b> ภายในเม็ดเลือดแดง: <b>infected RBC ขนาดปกติ</b> (ไม่โต ไม่มี Schüffner's dots) · <b>ring บางเล็ก (delicate thin ring)</b> · <b>double chromatin dots</b> · <b>multiple infection</b> (หลายเชื้อในเซลล์เดียว) · อาจเห็น appliqué (accolé) form ที่ขอบเซลล์ · ไม่พบระยะ trophozoite โต/schizont ใน peripheral blood (ถ้าพบ banana-shaped gametocyte ช่วยยืนยัน)",
   exp:"P. vivax: RBC โต ซีด มี Schüffner's dots, amoeboid trophozoite, พบทุกระยะ · P. malariae: band form, RBC ขนาดปกติ/เล็ก · P. knowlesi: คล้าย falciparum ในระยะ ring และคล้าย malariae ในระยะโต",
   pts:[CR(P("Ring forms inside RBC","ring")),P("Infected RBC normal size","normal size","ขนาดปกติ","not enlarged","ไม่โต"),P("Double chromatin dots","double chromatin","2 chromatin","chromatin"),P("Multiple infection of a single RBC","multiple","หลายตัว","หลายเชื้อ")]}),
  B("16.2 What is the diagnosis?",3,{tags:["micro"],
   ans:"<b>Falciparum malaria (<i>Plasmodium falciparum</i>)</b> · ประเมิน severe malaria (ซึม/ชัก, parasitemia > 2–5%, Hb < 7, bilirubin สูง, AKI, hypoglycemia, acidosis, shock, pulmonary edema)",
   exp:"รักษา (แนวทางกรมควบคุมโรค/WHO): uncomplicated → artemisinin-based combination therapy (เช่น dihydroartemisinin-piperaquine) + primaquine single low dose · severe → <b>IV artesunate</b> แล้วต่อด้วย ACT ครบ",
   pts:[CR(P("Plasmodium falciparum","falciparum","\\bpf\\b"))]})
 ),
 interp:"Microscope: thin film — ring form บาง double chromatin multiple infection ใน RBC ขนาดปกติ = P. falciparum",
 summary:["P. falciparum: RBC ขนาดปกติ, ring บาง, double chromatin, multiple infection, appliqué, banana gametocyte","P. vivax: RBC โต Schüffner's dots ทุกระยะ","Severe malaria → IV artesunate"]}),

/* ===== สถานี 17 ===== */
Co({page:3,orig:"17",topic:"img",sub:"CXR",title:"Chest radiograph — describe and give differential diagnoses",imgNote:NOIMG,
 stem:`Describe this chest radiograph and give your differential diagnosis.`,
 gray:"17. Chest film มาจงบรรยาย ข้อสอบเก่ารูป mass และให้การวินิจฉัย · เฉลย: PA upright · soft tissue bony structure · trachea · mass well defined border no (ต่อหน้า 4) calcification · DDX. CA lung · TB · harmatoma · lung abscess",
 flag:NOIMG+" · stem ไม่บอกว่ามี mass (ไฟล์บอก) · คำตอบต่อจากหน้า 3 ไปหน้า 4 · ไฟล์ไม่บอกตำแหน่ง mass",
 notes:"ลำดับบรรยายของผู้จด: PA upright → soft tissue, bony structure → trachea → mass well-defined border, no calcification · DDx: CA lung, TB, hamartoma (ไฟล์สะกด harmatoma), lung abscess",
 parts:S(
  B("17.1 Describe the chest radiograph.",4,{tags:["img"],
   ans:"<b>Technique:</b> PA upright, adequate inspiration/penetration, no rotation · <b>Soft tissue และ bony structure:</b> ปกติ ไม่มีกระดูกถูกทำลาย · <b>Trachea:</b> อยู่กลาง · <b>Lung:</b> พบ <b>single well-defined round mass</b> (ระบุตำแหน่ง lobe/zone และขนาด > 3 cm = mass) <b>ไม่มี calcification</b> ไม่มี cavity (ระบุถ้ามี air-fluid level) · ดู hilum/mediastinal lymphadenopathy, effusion · หัวใจขนาดปกติ",
   exp:"ลักษณะชวนมะเร็ง: ขนาดใหญ่, spiculated/lobulated margin, โตเร็ว, ผนัง cavity หนา > 15 mm, ร่วมกับ hilar node/effusion/กระดูกถูกทำลาย · ชวนไม่ร้าย: calcification แบบ central/laminated/diffuse/popcorn (hamartoma), ไม่โตใน 2 ปี",
   pts:[P("Technique: PA upright film","\\bpa\\b","upright","technique"),P("Soft tissue and bony structures","soft tissue","bon[ey]","กระดูก"),P("Trachea position","trachea","หลอดลม"),CR(P("Well-defined (round) mass","mass","ก้อน","well.?defined","nodul")),P("No calcification / no cavity","calcif","cavit","หินปูน")]}),
  B("17.2 Give your differential diagnosis.",3,{tags:["img"],
   ans:"<b>Bronchogenic carcinoma (CA lung)</b> · <b>tuberculosis (tuberculoma)</b> · <b>hamartoma</b> · <b>lung abscess</b> (ถ้ามี cavity/air-fluid level) · อื่น ๆ: metastasis, fungal (cryptococcoma), carcinoid · ต่อ: เทียบฟิล์มเก่า, CT chest with contrast, sputum AFB/Xpert, bronchoscopy/CT-guided biopsy",
   exp:"ในไทยต้องคิด TB เสมอ · ผู้สูงอายุสูบบุหรี่ → มะเร็งปอดเป็นอันดับแรก",
   pts:[CR(P("Lung cancer","ca lung","lung cancer","bronchogenic","carcinoma","มะเร็ง")),P("Tuberculosis / tuberculoma","\\btb\\b","tubercul","วัณโรค"),P("Hamartoma","hamartoma","harmatoma"),P("Lung abscess","abscess","ฝี")]})
 ),
 interp:"Imaging: CXR single well-defined lung mass — อ่านเป็นระบบ + DDx (CA lung, TB, hamartoma, abscess)",
 summary:["อ่าน CXR: technique → soft tissue/bone → trachea → lung → หัวใจ/mediastinum","Mass > 3 cm · ดู margin, calcification, cavity, node, effusion","DDx: CA lung, TB, hamartoma (popcorn calcification), lung abscess, metastasis"]}),

/* ===== สถานี 18 ===== */
Co({page:4,orig:"18",topic:"lab",sub:"CSF",title:"Subacute headache and fever — CSF analysis",seen:"คล้าย SI127 Ro417–420 ข้อ 17 และ SI133 Ro405–406 ข้อ 20 (แปลผล CSF) — คนละชุด",
 stem:`A 35-year-old man has headache and low-grade fever for 3 weeks. Lumbar puncture results:<br>Opening pressure 28 cmH<sub>2</sub>O · appearance clear · WBC 150 cells/µL (lymphocytes 90%, neutrophils 10%) · RBC 0 · protein 160 mg/dL · glucose 25 mg/dL (blood glucose 110 mg/dL)<br>1. Interpret the CSF findings.<br>2. What are the most likely causes, and which tests would you send?`,
 gray:"18. Meningitis แปลผล CSF ที่ เจอ lymphocyte เด่นๆ · เฉลย: TB cryptococcus",
 flag:"⚠ ไฟล์ไม่ให้ตัวเลข — ประวัติและค่า CSF ทั้งหมด Claude แต่งให้เป็น lymphocytic meningitis + low glucose + high protein (เข้ากับ TB/cryptococcus ตามผู้จด) · ส่วนการส่งตรวจใน 18.2 Claude เติม",
 notes:"คำตอบผู้จด: TB, cryptococcus",
 parts:S(
  B("18.1 Interpret the CSF findings.",4,{tags:["lab"],
   ans:"<b>Lymphocytic pleocytosis</b> (WBC 150, lymphocyte 90%) + <b>protein สูง</b> (160 mg/dL) + <b>glucose ต่ำ</b> (CSF/blood ratio = 25/110 ≈ 0.23 < 0.5) + opening pressure สูง → <b>chronic (subacute) lymphocytic meningitis with hypoglycorrhachia</b> — เข้ากับ TB หรือ fungal meningitis",
   exp:"Bacterial: PMN เด่น glucose ต่ำมาก protein สูง · Viral: lymphocyte, glucose ปกติ, protein ปกติ/สูงเล็กน้อย · TB/fungal: lymphocyte, glucose ต่ำ, protein สูง (TB มัก > 100–500 mg/dL) · Partially treated bacterial meningitis ก็ทำให้ lymphocyte เด่นได้",
   pts:[CR(P("Lymphocytic pleocytosis","lymphocyt","ลิมโฟ","pleocytosis")),CR(P("Low CSF glucose (ratio < 0.5)","glucose ?(ต่ำ|low)","low glucose","hypoglycorrhach","น้ำตาลต่ำ","0\\.2","< ?0\\.5")),P("High protein","protein ?(สูง|high)","high protein","โปรตีนสูง"),P("Raised opening pressure","opening pressure","ความดันสูง","pressure")]}),
  B("18.2 What are the most likely causes, and which tests would you send?",4,{tags:["lab"],
   ans:"<b>Tuberculous meningitis</b> และ <b>cryptococcal meningitis</b> · ส่ง: <b>CSF India ink</b> และ <b>cryptococcal antigen (CrAg)</b> CSF/serum, fungal culture · <b>CSF AFB smear, Xpert MTB/RIF (Ultra), TB culture</b>, CSF ADA · <b>anti-HIV</b> · CXR · CT/MRI brain (hydrocephalus, basal enhancement, tuberculoma)",
   exp:"Cryptococcal meningitis: พบบ่อยใน HIV CD4 < 100, opening pressure สูงมาก → ต้องเจาะระบายซ้ำ · รักษา: amphotericin B + flucytosine (induction) แล้ว fluconazole · TB meningitis: 2HRZE/10HR + dexamethasone",
   pts:[CR(P("Tuberculous meningitis","\\btb\\b","tubercul","วัณโรค")),CR(P("Cryptococcal meningitis","cryptococ")),P("India ink / cryptococcal antigen","india ink","crag","cryptococcal antigen","antigen"),P("AFB / Xpert MTB/RIF / TB culture","\\bafb\\b","xpert","genexpert","culture","\\bada\\b"),P("Anti-HIV","hiv")]})
 ),
 interp:"Lab: CSF lymphocytic + glucose ต่ำ + protein สูง → TB/cryptococcal meningitis",
 summary:["Lymphocyte เด่น + glucose ต่ำ + protein สูง = TB หรือ fungal meningitis","Viral: glucose ปกติ · Bacterial: PMN เด่น","ส่ง India ink/CrAg, AFB/Xpert, anti-HIV, imaging"]}),

/* ===== สถานี 19 ===== */
Co({page:4,orig:"19",topic:"micro",sub:"UA",title:"Generalized edema — urine sediment: describe and give two diagnoses",imgNote:NOIMG,
 stem:`A 30-year-old man presents with generalized edema for 2 weeks. Describe his urine sediment and give two possible diagnoses.`,
 gray:"19. ส่อง oval fat body fatty cast WBC 1-2 จงบรรยายให้การวินิจฉัยมา 2 โรค · เฉลย: MCD MN FSGS",
 flag:NOIMG+" · อายุ/อาการใน stem Claude แต่ง · stem ไม่บอกสิ่งที่พบในสไลด์ (ไฟล์บอก oval fat body, fatty cast, WBC 1–2)",
 notes:"สิ่งที่พบ (คอลัมน์คำถาม): oval fat body, fatty cast, WBC 1–2 · คำตอบผู้จด: MCD, MN, FSGS",
 parts:S(
  B("19.1 Describe the urine sediment.",3,{tags:["micro"],
   ans:"พบ <b>oval fat bodies</b> (renal tubular epithelial cell ที่มีหยดไขมันอยู่ภายใน — ใต้ polarized light เห็น <b>Maltese cross</b>) · <b>fatty casts</b> (cast ที่มีหยดไขมันฝังอยู่) · WBC 1–2/HPF (ปกติ) · ไม่พบ RBC cast/dysmorphic RBC มาก",
   exp:"Lipiduria (oval fat body, fatty cast, free fat droplet) เป็นลักษณะของ nephrotic syndrome · RBC cast/dysmorphic RBC = nephritic (glomerulonephritis) · muddy brown granular cast = ATN · WBC cast = pyelonephritis/interstitial nephritis",
   pts:[CR(P("Oval fat bodies","oval fat","fat bod","maltese")),CR(P("Fatty casts","fatty cast","fat cast")),P("WBC 1–2/HPF (not significant)","wbc","เม็ดเลือดขาว")]}),
  B("19.2 Give two possible diagnoses.",4,{tags:["micro"],
   ans:"<b>Nephrotic syndrome</b> (lipiduria) — สาเหตุ (primary glomerular disease) ในผู้ใหญ่: <b>minimal change disease (MCD)</b>, <b>membranous nephropathy (MN)</b>, <b>focal segmental glomerulosclerosis (FSGS)</b> · secondary: diabetic nephropathy, lupus nephritis class V, amyloidosis",
   exp:"Nephrotic syndrome: proteinuria > 3.5 g/day (UPCR > 3–3.5 g/g), albumin < 3 g/dL, edema, hyperlipidemia, lipiduria · ส่ง UPCR, albumin, lipid, creatinine, anti-PLA2R (MN), ANA/C3/C4, HBV/HCV/HIV, HbA1c → kidney biopsy ในผู้ใหญ่ · ภาวะแทรกซ้อน: thrombosis (renal vein thrombosis ใน MN), infection, AKI",
   rubric:"ตอบ 2 ใน 3 (MCD, MN, FSGS) ได้เต็ม · ตอบแค่ \"nephrotic syndrome\" = บางส่วน",
   pts:[CR(P("Nephrotic syndrome","nephrotic","เนโฟรติก")),G("Two causes",2,P("Minimal change disease","minimal change","\\bmcd\\b"),P("Membranous nephropathy","membranous","\\bmn\\b"),P("FSGS","fsgs","focal segmental"),P("Diabetic nephropathy / lupus nephritis / amyloidosis","diabetic","lupus","amyloid"))]})
 ),
 interp:"Microscope: urine sediment — lipiduria (oval fat body, fatty cast) → nephrotic syndrome และสาเหตุ",
 summary:["Oval fat body (Maltese cross) + fatty cast = lipiduria → nephrotic syndrome","สาเหตุ primary ผู้ใหญ่: MCD, MN, FSGS","Nephrotic: proteinuria > 3.5 g/d, albumin < 3, edema, hyperlipidemia"]}),

/* ===== สถานี 20 ===== */
Co({page:4,orig:"20",topic:"lab",sub:"LFT",title:"Fever followed by jaundice in a young woman — diagnosis and investigations",seen:"คล้าย SI127 Ro401–404 ข้อ 14 และ SI131 Ro417–420 ข้อ 13 (ไข้แล้วตัวเหลือง — LFT) — คนละชุด",
 stem:`A 35-year-old woman had fever for 5 days. She took some medicine and then became jaundiced.<br><b>LFT:</b> total bilirubin 6.8 mg/dL, direct bilirubin 4.9 mg/dL, AST 1,450 U/L, ALT 1,820 U/L, ALP 160 U/L (ref 40–120), albumin 4.0 g/dL<br>Give your diagnosis and the investigations you would send.`,
 gray:"20. หญิงอายุ 35 ปี เป็นไข้ 5 วัน กินยาแล้วตัวเหลือง LFT เป็น transminitis เข้ากับ hepatocelluar jaundice จงบอกการวินิจฉัยและสิ่งส่งตรวจ · เฉลย: acute hepatitis · acute viral hepatits A B E · Anti HAV IgM · HBs Ag · Anti HEV IgM",
 flag:"⚠ ค่า LFT ทั้งหมด Claude แต่งให้เป็น hepatocellular pattern (ไฟล์บอกแค่ transaminitis) · ไฟล์ไม่บอกว่ากินยาอะไร",
 notes:"คำตอบผู้จด: acute hepatitis → acute viral hepatitis A, B, E → ส่ง anti-HAV IgM, HBsAg, anti-HEV IgM",
 opinion:"เห็นด้วยกับผู้จด · เพิ่ม anti-HBc IgM (ช่วง window period HBsAg อาจลบ) และต้องคิด drug-induced liver injury (โดยเฉพาะ paracetamol เกินขนาด/สมุนไพร) เพราะโจทย์บอกว่ากินยาแล้วเหลือง",
 parts:S(
  B("20.1 What is your diagnosis?",3,{tags:["lab"],
   ans:"<b>Acute hepatitis (hepatocellular jaundice)</b> — AST/ALT สูงมาก (> 10 เท่า, ALT > AST) ร่วมกับ ALP สูงเล็กน้อย (R ratio = (ALT/ULN)/(ALP/ULN) > 5 → hepatocellular) · สาเหตุที่น่าจะเป็นที่สุด: <b>acute viral hepatitis (A, B, E)</b> · Ddx: <b>drug-induced liver injury</b> (paracetamol, สมุนไพร), ischemic hepatitis · ในบริบทไทยที่มีไข้นำ: leptospirosis, dengue, scrub typhus ก็ทำให้ transaminase/bilirubin สูงได้",
   exp:"ALT > 1,000 U/L: viral hepatitis, drug/toxin (paracetamol), ischemic hepatitis, (CBD stone ช่วงแรก) · ประเมินความรุนแรง: PT/INR (> 1.5 + encephalopathy = acute liver failure)",
   pts:[CR(P("Acute hepatitis / hepatocellular jaundice","acute hepatitis","hepatocell","ตับอักเสบ")),CR(P("Acute viral hepatitis A, B, E","viral","ไวรัส","hepatitis a","hepatitis b","hepatitis e","\\bhav\\b","\\bhbv\\b","\\bhev\\b")),P("Differential: drug-induced liver injury","drug.?induced","dili","paracetamol","acetaminophen","จากยา","สมุนไพร","herb")]}),
  B("20.2 What investigations would you send?",4,{tags:["lab"],
   ans:"<b>Anti-HAV IgM</b> · <b>HBsAg</b> + <b>anti-HBc IgM</b> · <b>anti-HEV IgM</b> · (anti-HCV/HCV RNA) · <b>PT/INR</b> (ความรุนแรง) · serum acetaminophen level ถ้าสงสัย · ประวัติ/ตรวจตามบริบทไข้: dengue NS1/IgM, leptospirosis serology, CBC · U/S upper abdomen แยก obstruction",
   exp:"การแปลผล: anti-HAV IgM บวก = acute HAV · HBsAg + anti-HBc IgM บวก = acute HBV · anti-HEV IgM บวก = acute HEV (ระวังในหญิงตั้งครรภ์ — fulminant)",
   rubric:"ผู้จดตอบ anti-HAV IgM, HBsAg, anti-HEV IgM — ใส่ครบ 3 ได้เต็ม · บวก anti-HBc IgM/PT-INR เป็นคำตอบที่สมบูรณ์กว่า",
   pts:[CR(P("Anti-HAV IgM","hav","hepatitis a")),CR(P("HBsAg (± anti-HBc IgM)","hbsag","hbs ?ag","anti.?hbc","hbc")),CR(P("Anti-HEV IgM","hev","hepatitis e")),P("PT/INR","\\bpt\\b","\\binr\\b","prothrombin"),P("Paracetamol level / other causes (dengue, leptospirosis)","paracetamol","acetaminophen","dengue","lepto","ultrasound","\\bu/?s\\b")]})
 ),
 interp:"Lab: hepatocellular jaundice หลังไข้ → acute viral hepatitis A/B/E (และ DILI) — ส่ง serology ให้ถูกตัว",
 summary:["AST/ALT > 10 เท่า, R ratio > 5 = hepatocellular","Acute viral hepatitis: anti-HAV IgM, HBsAg + anti-HBc IgM, anti-HEV IgM","อย่าลืม DILI (paracetamol, สมุนไพร) และ PT/INR"]}),

/* ===== สถานี 21 ===== */
Co({page:4,orig:"21",topic:"proc",sub:"ABG",ex:1,proc:1,title:"Procedure — arterial blood gas sampling",seen:"หัตถการเดียวกัน: SI127 Ro417–420 ข้อ 1 · SI130 Ro409–412 ข้อ 13 · SI133 Ro403–404 ข้อ 7 · SI133 Ro405–406 ข้อ 8 · SI133 Ro407–408 OSCE 8",
 stem:`Demonstrate arterial blood gas sampling on the manikin arm. Explain each step to the examiner as you perform it.`,
 gray:"21. ABG ทำหัตถการ · เฉลย: alcohol เช็ดฝาขวด Heparin",
 flag:"ผู้จดจดแค่ขั้นเช็ดฝาขวด heparin ด้วย alcohol — ขั้นตอนอื่นและ sp Claude เติม (ตามสถานี ABG ของชุดอื่น)",
 notes:"ผู้จดเน้น: ใช้ alcohol เช็ดฝาขวด heparin (ขั้นที่มักลืม)",
 sp:"หุ่นแขนสำหรับเจาะ ABG + ป้ายข้อมือ · ผู้ป่วยจำลองบอกชื่อ-นามสกุลเมื่อถูกถามแบบเปิด · อุปกรณ์: syringe 3 mL, เข็ม 20G และ 25G, ขวด heparin, สำลีแอลกอฮอล์, สำลีแห้ง, ถุงมือ, จุกปิด, สติกเกอร์ label, ถังน้ำแข็ง · ถ้าทำ modified Allen test: มือกลับมาแดงภายใน 5–10 วินาที (ผลปกติ)",
 parts:S(
  B("21.1 Perform arterial blood gas sampling and explain each step.",10,{tags:["proc"],
   ans:"<b>เตรียมผู้ป่วย:</b> แนะนำตัว · identify ด้วยคำถามปลายเปิด + ป้ายข้อมือ · อธิบายและขออนุญาต · ถามยาต้านการแข็งตัวของเลือด · <b>modified Allen test</b><br><b>เตรียม syringe:</b> ล้างมือ ใส่ถุงมือ · <b>เช็ดฝาขวด heparin ด้วย alcohol</b> · เข็ม 20G ดูด heparin เคลือบ syringe แล้ว<b>ไล่ส่วนเกินออกให้หมด</b> · เปลี่ยนเข็ม 25G<br><b>เจาะ:</b> dorsiflex ข้อมือเล็กน้อย คลำ radial pulse · เช็ดแอลกอฮอล์วนจากในออกนอก · bevel ขึ้น มุม 30–45° ทวนทิศเลือด · เลือดแดงดันเข้า syringe เอง เก็บ 1–3 mL · ถอนเข็ม<b>กดด้วยสำลีแห้ง ≥ 3–5 นาที</b><br><b>หลังเจาะ:</b> <b>ไล่ฟองอากาศทันที</b> ปิดจุก หมุนผสม · label (ชื่อ HN เวลา FiO2) · แช่น้ำแข็ง ส่งทันที · ทิ้งเข็มในกล่องของมีคม",
   exp:"Heparin มากเกิน → pCO2/HCO3 ต่ำปลอม · ฟองอากาศ → pO2 ผิด (เข้าใกล้ ~150 mmHg) · ส่งช้า → pO2 ลด pCO2 เพิ่ม",
   rubric:"ได้เต็มเมื่อ identify + Allen test + เช็ดฝาขวด heparin (ผู้จดเน้น) + เคลือบแล้วไล่ heparin + aseptic + กดแผล + ไล่อากาศ/label/ส่งทันที",
   pts:[H("เตรียมผู้ป่วย",25),CR(P("Introduce, identify the patient (open question / wristband)","identif","ชื่อ","ป้ายข้อมือ","wrist","แนะนำตัว")),CR(P("Modified Allen test","allen")),
    H("เตรียม syringe",30),CR(P("Wipe the heparin vial top with alcohol","เช็ดฝา","ฝาขวด","vial","alcohol","แอลกอฮอล์")),P("Coat syringe with heparin and expel the excess","heparin","เคลือบ","coat","ไล่"),P("Hand hygiene / gloves","ล้างมือ","hand","ถุงมือ","glove"),
    H("เจาะ",30),P("Palpate radial pulse, clean skin","radial","คลำ","palpat"),P("Bevel up at 30–45°","bevel","45","30","มุม"),CR(P("Compress the site 3–5 min","กด","press","compress","สำลี")),
    H("หลังเจาะ",15),P("Expel air, cap, label, send on ice immediately","อากาศ","\\bair\\b","bubble","label","สติ","น้ำแข็ง","\\bice\\b","ส่งทันที")]})
 ),
 interp:"หัตถการ ABG: identify + Allen test + เช็ดฝาขวด heparin + เคลือบ/ไล่ heparin + aseptic + กดแผล + ไล่อากาศส่งทันที",
 summary:["Identify + modified Allen test","เช็ดฝาขวด heparin ด้วย alcohol · เคลือบ syringe แล้วไล่ส่วนเกิน","Bevel up 30–45° · กดแผล ≥ 3–5 นาที","ไล่ฟองอากาศ label แช่น้ำแข็ง ส่งทันที"]}),

/* ===== สถานี 22 ===== */
Co({page:4,orig:"22",topic:"pe",sub:"Chest",ex:1,title:"Physical examination — respiratory system",seen:"คล้าย SI130 Ro409–412 ข้อ 18 และ SI127 Ro409–412 ข้อ 5 (ตรวจระบบหายใจ) — คนละชุด",
 stem:`Perform a complete examination of the respiratory system and report your findings.`,
 gray:"22. ตรวจร่างกายระบบหายใจ · เฉลย: ปกติ",
 flag:"บทผู้คุม (sp) Claude แต่ง — ผู้จดบอกแค่ว่าผลตรวจปกติ",
 notes:"คำตอบผู้จด: ผลตรวจปกติ",
 sp:"ผู้ป่วยจำลองสุขภาพดี · ผลตรวจทุกอย่างปกติ: RR 16/min ไม่หอบ ไม่ใช้กล้ามเนื้อช่วยหายใจ · ไม่มี clubbing ไม่ cyanosis · trachea อยู่กลาง · chest expansion เท่ากันสองข้าง · tactile fremitus ปกติเท่ากัน · percussion resonance ทั้งสองข้าง · breath sound vesicular เท่ากัน ไม่มี adventitious sound",
 parts:S(
  B("22.1 Examine the respiratory system.",8,{tags:["pe"],
   ans:"แนะนำตัว ขออนุญาต ล้างมือ จัดท่านั่ง/นอน 45° เปิดเผยหน้าอก · <b>General:</b> หอบ RR การใช้ accessory muscles, พูดเป็นประโยค, cyanosis · <b>มือ:</b> clubbing, nicotine stain, flapping tremor · <b>ใบหน้า/คอ:</b> central cyanosis, <b>ตำแหน่ง trachea</b>, cervical/supraclavicular lymph node, JVP · <b>Inspection</b> ทรวงอก: รูปร่าง (barrel chest), แผลเป็น, การเคลื่อนไหวเท่ากันหรือไม่ · <b>Palpation:</b> <b>chest expansion</b> (หน้าและหลัง), <b>tactile fremitus</b> · <b>Percussion:</b> เทียบซ้าย-ขวาเป็นขั้นบันได หน้า-ข้าง-หลัง ทั้ง apex · <b>Auscultation:</b> breath sound, adventitious sounds (crepitation, wheeze, rhonchi, pleural rub), vocal resonance · ตรวจ<b>ทั้งด้านหน้าและด้านหลัง</b> เปรียบเทียบสองข้างทุกขั้น",
   exp:"การแปลผลรวม: consolidation (dull, fremitus ↑, bronchial breath sound), effusion (stony dull, fremitus ↓, BS ↓, trachea ไปด้านตรงข้าม), pneumothorax (hyperresonance, BS ↓), collapse (dull, trachea ไปด้านเดียวกัน)",
   rubric:"ตรวจครบ inspection–palpation–percussion–auscultation ทั้งหน้าและหลังเทียบสองข้าง · ข้าม trachea/chest expansion/ด้านหลัง = หักคะแนน",
   pts:[H("General / hands / neck",20),P("General: respiratory distress, RR, cyanosis","\\brr\\b","respiratory rate","หอบ","cyanosis","accessory"),P("Hands: clubbing","clubbing","นิ้วปุ้ม"),CR(P("Trachea position","trachea","หลอดลม")),
    H("Inspection / palpation",30),P("Chest inspection","inspect","ดูลักษณะ","ดูการเคลื่อน","รูปร่าง","shape"),CR(P("Chest expansion","expansion","การขยาย")),P("Tactile fremitus","fremitus"),
    H("Percussion",20),CR(P("Percussion comparing both sides","percuss","เคาะ")),
    H("Auscultation",30),CR(P("Breath sounds and added sounds","breath sound","auscult","ฟัง","crepitation","wheeze","vesicular")),P("Examine both front and back","ด้านหลัง","back","posterior","ด้านหน้า","anterior")]}),
  B("22.2 Report your findings.",2,{tags:["pe"],
   ans:"<b>Normal respiratory examination:</b> ไม่หอบ, ไม่มี clubbing/cyanosis, trachea อยู่กลาง, chest expansion เท่ากันสองข้าง, tactile fremitus ปกติ, percussion resonance ทั้งสองข้าง, vesicular breath sound เท่ากัน ไม่มี adventitious sound",
   exp:"การรายงานผลปกติต้องบอกเป็นรายการ ไม่ใช่แค่ \"ปกติ\"",
   pts:[CR(P("Normal findings","ปกติ","normal")),P("Report each finding (trachea, expansion, percussion, breath sound)","resonan","vesicular","midline","กลาง","เท่ากัน","equal")]})
 ),
 interp:"PE: ตรวจระบบหายใจครบลำดับ หน้าและหลัง และรายงานผลปกติอย่างเป็นระบบ",
 summary:["ลำดับ: general → มือ → คอ/trachea → inspection → expansion/fremitus → percussion → auscultation","ตรวจหน้าและหลัง เทียบสองข้างทุกขั้น","รายงานผลปกติเป็นรายการ"]}),

/* ===== สถานี 23 ===== */
Co({page:4,orig:"23",topic:"hx",sub:"Jaundice",ex:1,title:"History taking — jaundice",seen:"คล้าย SI133 Ro405–406 ข้อ 5 (ซักประวัติ jaundice และซีด) — คนละชุด",
 stem:`A patient presents with yellow eyes. Take a history, then give your most likely diagnosis.`,
 gray:"23. ซักประวัติ jaundice ให้การวินิจฉัย · เฉลย: G6PD ไม่ได้ไม่มีซีดเหลืองเป็น Baseline · Thalassemia · HS",
 flag:"บทผู้ป่วย (sp) Claude แต่ง · Claude อ่านคอลัมน์เฉลยว่า \"G6PD ไม่ได้ (ไม่ใช่) · มีซีดเหลืองเป็น baseline (เป็นมาตลอด)\" → Thalassemia, HS — ข้อความในไฟล์ต่อกันเป็นบรรทัดเดียว อ่านได้กำกวม",
 notes:"ผู้จดเขียน: \"G6PD ไม่ได้ไม่มีซีดเหลืองเป็น Baseline\" (Claude ตีความ: ไม่ใช่ G6PD — ไม่มีตัวกระตุ้น — ผู้ป่วยมีซีดเหลืองเป็น baseline) → Thalassemia, HS",
 opinion:"ข้อความในไฟล์อ่านได้สองแบบ: (1) ไม่ใช่ G6PD และมีซีดเหลืองเป็น baseline → chronic hemolysis (thalassemia/HS) หรือ (2) \"ไม่มีซีดเหลืองเป็น baseline\" ซึ่งจะขัดกับ thalassemia/HS ที่เป็นมาตั้งแต่เด็ก — จึงเลือกแบบ (1) ให้สอดคล้องกับคำวินิจฉัยของผู้จด",
 sp:"หญิง 22 ปี ตาเหลืองมากขึ้น 3 วันหลังเป็นไข้หวัด · ซีดและตาเหลืองเล็กน้อยมาตั้งแต่เด็ก เป็น ๆ หาย ๆ เหลืองมากขึ้นเวลาไม่สบาย · ปัสสาวะสีเข้มเหมือนชาเวลาเหลืองมาก อุจจาระสีปกติ ไม่คัน · ไม่ปวดท้อง (เคยปวดใต้ชายโครงขวาเป็นพัก ๆ หลังกินอาหารมัน) · ไม่ได้กินยาใหม่ ไม่กินถั่วปากอ้า ไม่กินสมุนไพร · เคยได้รับเลือด 2 ครั้งตอนเด็ก · หมอเคยบอกว่าม้ามโต · แม่และน้าเป็นโรคเลือดจาง · ไม่ดื่มเหล้า ไม่มีปัจจัยเสี่ยงไวรัสตับอักเสบ",
 parts:S(
  B("23.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะ jaundice:</b> onset, ระยะเวลา, <b>เป็นมาตั้งแต่เด็ก/เป็น ๆ หาย ๆ (baseline)</b> หรือเพิ่งเป็น · <b>สีปัสสาวะ</b> (เข้มแบบชา/โคล่า), <b>สีอุจจาระ</b> (ซีด = obstructive), คัน · <b>อาการซีด</b> เหนื่อยง่าย · <b>ตัวกระตุ้น hemolysis:</b> ไข้/ติดเชื้อ, <b>ยา</b> (sulfa, primaquine, dapsone, nitrofurantoin), <b>ถั่วปากอ้า</b>, naphthalene (→ G6PD) · ปัสสาวะสีดำ/โคล่าเฉียบพลัน (intravascular hemolysis) · <b>ประวัติให้เลือด</b> · ม้ามโต/ท้องโต · <b>นิ่วถุงน้ำดี</b> (pigment stone) · หน้าตาเปลี่ยน (thalassemic facies) · <b>ประวัติครอบครัว</b> (ซีด เหลือง ตัดม้าม) · แยก hepatitis: ไข้ เบื่ออาหาร เหล้า ยา สมุนไพร ปัจจัยเสี่ยงไวรัส",
   exp:"Hemolytic jaundice: unconjugated hyperbilirubinemia, ปัสสาวะสีเข้มจาก urobilinogen (ไม่มี bilirubin ในปัสสาวะ), อุจจาระสีปกติ/เข้ม, ไม่คัน",
   rubric:"ได้เต็มเมื่อแยก hemolytic/hepatic/obstructive (ปัสสาวะ อุจจาระ คัน) + ถามซีด/เป็นมาตั้งแต่เด็ก + trigger ของ G6PD + ให้เลือด + ครอบครัว",
   pts:[H("ลักษณะ jaundice",30),P("Onset and duration","นาน","onset","เริ่ม","เมื่อไ"),CR(P("Since childhood / recurrent (baseline)","เด็ก","childhood","เป็น ?ๆ ?หาย","baseline","มาตลอด","ตั้งแต่")),P("Urine and stool colour, pruritus","ปัสสาวะ","urine","อุจจาระ","stool","คัน"),
    H("Hemolysis",40),CR(P("Pallor / fatigue","ซีด","pale","pallor","เหนื่อย","anemi")),CR(P("Triggers: infection, drugs, fava beans (G6PD)","ยา(ที่|อะไร|ใหม่|ประจำ)","กินยา","drug","ถั่วปากอ้า","fava","ไข้","infection","g6pd")),P("Previous blood transfusion","ให้เลือด","รับเลือด","transfus"),P("Splenomegaly / gallstones","ม้าม","splen","นิ่ว","gallstone"),
    H("ครอบครัว/แยก hepatitis",30),CR(P("Family history of anemia/jaundice","ครอบครัว","family","แม่","พ่อ","ญาติ")),P("Hepatitis risks: alcohol, herbs, viral exposure","เหล้า","alcohol","สมุนไพร","herb","ไวรัส","hepatitis")]}),
  B("23.2 What is your most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>Chronic hereditary hemolytic anemia with hemolytic crisis triggered by infection</b> — <b>thalassemia</b> (เช่น HbH disease, β-thal/HbE) หรือ <b>hereditary spherocytosis</b> · ไม่น่าเป็น G6PD deficiency เพราะไม่มีตัวกระตุ้นจากยา/อาหาร และมีซีดเหลืองเป็น baseline ตั้งแต่เด็ก (G6PD มักเป็นเฉียบพลันเป็นครั้งคราว ระหว่างครั้งปกติ) · ส่ง: CBC, reticulocyte, PBS, indirect bilirubin, LDH, haptoglobin, Hb typing, DAT, osmotic fragility/EMA binding test, G6PD",
   exp:"Thalassemia: microcytic hypochromic, target cell, Hb typing ผิดปกติ · HS: spherocyte, MCHC สูง, DAT ลบ, EMA binding ลด · ทั้งสองโรค: ม้ามโต นิ่วถุงน้ำดี aplastic crisis (parvovirus B19)",
   rubric:"ตอบ thalassemia หรือ HS ได้เต็ม · ตอบ G6PD deficiency = ผิดตามผู้จด",
   pts:[CR(P("Chronic hereditary hemolytic anemia","hemoly","ฮีโมไลติก","เม็ดเลือดแดงแตก")),G("Thalassemia or HS",1,P("Thalassemia","thal","ธาลัส"),P("Hereditary spherocytosis","spherocyt","\\bhs\\b"))]})
 ),
 interp:"History taking: jaundice — แยก hemolytic (ซีด เป็นมาตั้งแต่เด็ก ครอบครัว ให้เลือด) จาก hepatic/obstructive และแยก G6PD ด้วย trigger",
 summary:["Hemolytic jaundice: ซีด ปัสสาวะเข้ม อุจจาระปกติ ไม่คัน","เป็นมาตั้งแต่เด็ก + ครอบครัว + ให้เลือด + ม้ามโต → thalassemia/HS","G6PD: เฉียบพลันหลังยา/ถั่วปากอ้า/ติดเชื้อ ระหว่างครั้งปกติ"]}),

/* ===== สถานี 24 ===== */
Co({page:4,orig:"24",topic:"micro",sub:"PBS",title:"Patient with HIV — CBC and blood smear",imgNote:NOIMG,
 stem:`A 32-year-old man with HIV infection presents with petechiae and gum bleeding.<br><b>CBC:</b> Hb 13.2 g/dL, Hct 40%, MCV 88 fL, WBC 6,200/µL (N 62%, L 30%, M 6%, E 2%), platelets 12,000/µL<br>Describe the peripheral blood smear and give your diagnosis.`,
 gray:"24. มีประวัติ HIV ให้ CBC และดู PBS และบรรยาย · เฉลย: secondary ITP to HIV",
 flag:NOIMG+" · ⚠ ค่า CBC และอาการเลือดออก Claude แต่ง (ไฟล์บอกแค่ประวัติ HIV)",
 notes:"คำตอบผู้จด: secondary ITP to HIV",
 opinion:"เห็นด้วยกับผู้จด · OSCE_REF (Key PBS ข้อ 13 ITP) มีลายมือ \"ITP → HIV, HCV, anti H pylori\" = ต้องหาสาเหตุ secondary ITP",
 parts:S(
  B("24.1 Describe the peripheral blood smear.",3,{tags:["micro"],
   ans:"<b>RBC:</b> normochromic normocytic, ไม่มี anisopoikilocytosis, ไม่มี schistocyte · <b>WBC:</b> จำนวนปกติ neutrophil predominate · <b>Platelet: ลดลงมาก (< 5/OF)</b> อาจพบ large/giant platelets ติดสีปกติ · ไม่พบ blast หรือ platelet clumping = <b>isolated thrombocytopenia</b>",
   exp:"ตาม OSCE_REF (Key PBS ข้อ 13 ITP) · ต้องดูสเมียร์เพื่อตัด pseudothrombocytopenia (platelet clumping จาก EDTA), schistocyte (TTP/DIC), blast, dysplasia",
   pts:[CR(P("Thrombocytopenia (< 5/oil field)","thrombocytopen","platelet ?(ลด|ต่ำ|decrease|low)","เกล็ดเลือดต่ำ","< ?5")),P("Normal RBC (no schistocytes)","normochrom","normocyt","schistocyt","rbc ?ปกติ"),P("Normal WBC, no blasts","wbc","neutrophil","no blast","ไม่พบ blast"),P("Large platelets / no clumping","large platelet","giant","clump")]}),
  B("24.2 What is your diagnosis?",3,{tags:["micro"],
   ans:"<b>Secondary immune thrombocytopenia (ITP) associated with HIV infection</b> · ตัด: TTP (schistocyte, hemolysis), DIC, ยา (เช่น co-trimoxazole), hypersplenism, marrow infiltration (opportunistic infection/lymphoma) · ตรวจเพิ่ม: CD4, HIV viral load, anti-HCV, HBsAg, H. pylori",
   exp:"รักษา: <b>เริ่ม/ปรับ ART</b> (เพิ่ม platelet ได้) · platelet < 20–30 × 10³/µL หรือมีเลือดออก → corticosteroid ± IVIG (IVIG/anti-D เมื่อต้องการให้ขึ้นเร็ว)",
   pts:[CR(P("Immune thrombocytopenia (ITP)","\\bitp\\b","immune thrombocytopen")),CR(P("Secondary to HIV","hiv","secondary")),P("Treat with ART ± steroids/IVIG","\\bart\\b","antiretro","steroid","prednisol","ivig")]})
 ),
 interp:"Microscope: isolated thrombocytopenia ในผู้ป่วย HIV → secondary ITP",
 summary:["ITP: isolated thrombocytopenia, RBC/WBC ปกติ, platelet ใหญ่","Secondary ITP: HIV, HCV, H. pylori, SLE, CLL","HIV-ITP: ART เป็นหลัก ± steroid/IVIG"]}),

/* ===== สถานี 25 ===== */
Co({page:4,orig:"25",topic:"proc",sub:"Blood transfusion",ex:1,proc:1,title:"Procedure — administering a blood transfusion",seen:"หัตถการเดียวกัน: SI127 Ro409–412 ข้อ 18 · SI130 Ro409–412 ข้อ 17 · SI127 Ro401–404 ข้อ 9",
 stem:`A patient has an order for a packed red cell transfusion. Demonstrate how you would check the blood and give it to the patient. Say aloud every step you check.`,
 gray:"25. แสดงการให้เลือด · (คอลัมน์เฉลยว่าง)",
 flag:"ไฟล์ไม่มีคำตอบ — ขั้นตอนทั้งหมดเฉลยตาม OSCE_REF (แบบประเมินการให้เลือด/ส่วนประกอบของเลือด) · บทผู้คุม (sp) Claude แต่ง",
 notes:"ไม่มีโน้ตผู้จด (คอลัมน์เฉลยว่าง)",
 opinion:"แบบประเมินใน OSCE_REF ให้วัด vital sign หลังเริ่มให้ 5–10 นาที แต่ไม่มีขั้น baseline vital sign ก่อนเริ่ม — guideline (BSH/AABB) วัด baseline + วัดซ้ำประมาณ 15 นาทีหลังเริ่ม และเมื่อให้เสร็จ จึงใส่ทั้งสองอย่าง",
 sp:"ผู้คุมรับบทพยาบาล/อาจารย์: มี order PRC 1 unit พร้อม informed consent ที่ลงชื่อแล้ว, ถุงเลือดพร้อมใบคล้อง, ชุดให้เลือด, ผู้ป่วยจำลองมีป้ายข้อมือและ heparin lock · ข้อมูลบนถุง ใบคล้อง order และป้ายข้อมือตรงกันทั้งหมด เลือดไม่หมดอายุ ไม่มี clot · ถ้าผู้สอบเรียกพยาบาลมาช่วยเช็ค: ผู้คุมมาช่วยดู · ผู้ป่วยถามว่า \"ให้เลือดแล้วจะมีอาการอะไรไหม\"",
 parts:S(
  B("25.1 Check the order and the blood bag.",6,{tags:["proc"],
   ans:"ตรวจ <b>informed consent</b> · <b>order</b> (ข้อบ่งชี้ ชนิด จำนวน rate) และ premedication · <b>สวมถุงมือก่อนจับถุงเลือด</b> · ตรวจ<b>คุณภาพเลือด</b>: สี, clot, ถุงรั่ว/ฉีก · <b>วันหมดอายุ</b> · <b>เรียกพยาบาล/แพทย์อีกคน double check</b>: ใบคล้องติดกับถุงเสมอ (หลุด = ห้ามให้) · <b>ชื่อ-นามสกุล/HN</b> ถุง = order · <b>unit no.</b> ใบคล้อง = ถุง · <b>หมู่เลือด</b> ใบคล้อง = ถุง ± ถามผู้ป่วย · เปิดชุดให้เลือด <b>ปิด roller clamp</b> ต่อถุงแบบ aseptic แขวน ปล่อยเลือดเต็มชุด <b>ไล่อากาศ</b>",
   exp:"Clerical error (ผิดคน/ผิดถุง) เป็นสาเหตุหลักของ ABO-incompatible transfusion → acute hemolytic transfusion reaction · ข้อมูลใดไม่ตรง = ห้ามให้ ส่งคืนธนาคารเลือด",
   rubric:"ไม่ double check กับบุคลากรอีกคน หรือไม่ตรวจ unit no./หมู่เลือด = ข้อนี้ได้ศูนย์",
   pts:[H("Order",20),P("Informed consent and order (indication, premedication, rate)","consent","ยินยอม","order","premed"),
    H("ถุงเลือด",30),P("Gloves before handling the bag","ถุงมือ","glove"),P("Blood quality: colour, clots, leaks","clot","ก้อน","สีเลือด","สีของเลือด","รั่ว","leak","คุณภาพ"),P("Expiry date","expir","หมดอายุ"),
    H("Double check",50),CR(P("Double-check with a nurse/second person","พยาบาล","nurse","double ?check","อีกคน")),P("Name and HN — bag vs order","ชื่อ","name","\\bhn\\b"),CR(P("Unit number tag vs bag","unit")),CR(P("Blood group tag vs bag (± ask patient)","หมู่เลือด","blood group","group","\\babo\\b"))]}),
  B("25.2 At the bedside — identification, counselling and monitoring.",5,{tags:["proc"],
   ans:"<b>แนะนำตัว</b> · <b>identify ผู้ป่วย</b> ให้บอกชื่อ-นามสกุลเอง + ป้ายข้อมือ ตรงกับถุง · แจ้ง<b>ข้อบ่งชี้</b> และขออนุญาต · แจ้ง<b>ผลข้างเคียง</b>: ไข้ หนาวสั่น ผื่นคัน เหนื่อย แน่นหน้าอก ปวดหลัง → ให้แจ้งทันที · วัด <b>vital sign ก่อนเริ่ม</b> · ต่อชุดให้เลือดกับ heparin lock แบบ aseptic · ปรับหยดตาม order (ช้าใน 15 นาทีแรก) · <b>วัด vital sign หลังเริ่ม 5–15 นาที</b> และสังเกตอาการ",
   exp:"ถ้าเกิด reaction: <b>หยุดให้เลือดทันที</b> keep IV ด้วย NSS ประเมิน ABC ตรวจ clerical error · urticaria อย่างเดียว → antihistamine · anaphylaxis → epinephrine IM · ไข้ → แยก AHTR/sepsis/FNHTR · เหนื่อย: TACO (volume overload → diuretic) vs TRALI",
   rubric:"ไม่ identify ผู้ป่วยข้างเตียง = ขาดข้อสำคัญ · ลืมวัด VS หลังเริ่มให้ (OSCE_REF ★★) = หักคะแนน",
   pts:[P("Introduce self","แนะนำตัว","introduc"),CR(P("Identify the patient (name, wristband) against the bag","identif","ป้ายข้อมือ","wristband","ชื่อ")),P("Explain the indication","indication","ข้อบ่งชี้"),P("Explain adverse reactions","complication","ภาวะแทรกซ้อน","ผลข้างเคียง","adverse","\\badr\\b","แพ้"),P("Connect aseptically and set the rate","heparin lock","aseptic","ปรับหยด","rate"),CR(P("Vital signs before and 5–15 min after starting","vital","\\bvs\\b","สัญญาณชีพ"))]})
 ),
 interp:"Procedure: ให้เลือด — consent/order, คุณภาพถุง, double check ชื่อ unit no. หมู่เลือด, identify ผู้ป่วย, อธิบาย, VS ก่อนและหลังเริ่ม",
 summary:["ก่อนให้: consent, order, ถุงมือ, คุณภาพเลือด, วันหมดอายุ","Double check: ใบคล้องติดถุง, ชื่อ/HN, unit no., หมู่เลือด — ไม่ตรง = ห้ามให้","ข้างเตียง: identify ผู้ป่วย, indication, ADR, VS ก่อน + หลังเริ่ม 5–15 นาที","Reaction → หยุดเลือดทันที keep IV ด้วย NSS"]}),

/* ===== สถานี 26 ===== */
Co({page:4,orig:"26",topic:"pe",sub:"Diabetes complication",ex:1,title:"Physical examination — patient with diabetes",seen:"คล้าย SI131 Ro417–420 ข้อ 19 · SI127 Ro413–416 ข้อ 5 · SI133 Ro407–408 OSCE 14 (ตรวจร่างกายผู้ป่วยเบาหวาน) — คนละชุด",
 stem:`Perform a focused physical examination of a patient with diabetes mellitus, then summarise your findings.`,
 gray:"26. ตรวจร่างกายคนเบาหวาน · เฉลย: BP คำนวณ BMI ตรวจ CVS carotid briut · Acanthosis nigrigans · ดู eye ground ตรวจเท้า · mirofilament · ตรวจขา · T2DM with obesity",
 flag:"บทผู้ป่วย/ผลตรวจ (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (T2DM with obesity) · ไฟล์สะกด briut = bruit, nigrigans = nigricans, mirofilament = monofilament",
 notes:"รายการผู้จด: BP · คำนวณ BMI · ตรวจ CVS, carotid bruit · acanthosis nigricans · ดู eye ground · ตรวจเท้า, monofilament · ตรวจขา → T2DM with obesity",
 sp:"ผู้ป่วยจำลองอายุ 45 ปี · BP 138/86 mmHg · น้ำหนัก 92 kg สูง 165 cm (BMI 33.8 kg/m²) · รอบเอว 102 cm · acanthosis nigricans ที่คอด้านหลังและรักแร้ · ไม่มี carotid bruit · หัวใจปกติ · fundus: ไม่มี retinopathy (ผู้คุมบอกเมื่อผู้สอบบอกว่าจะส่องตา) · เท้า: ผิวปกติ ไม่มีแผล ไม่มี callus ชีพจร dorsalis pedis/posterior tibial ปกติ · monofilament รู้สึกครบทุกจุด · vibration และ ankle reflex ปกติ",
 parts:S(
  B("26.1 Perform a focused examination of a diabetic patient.",8,{tags:["pe"],
   ans:"<b>Vital signs:</b> <b>BP</b> (± postural BP — autonomic neuropathy), ชีพจร · <b>Anthropometry:</b> น้ำหนัก ส่วนสูง <b>คำนวณ BMI</b> รอบเอว · <b>ผิวหนัง:</b> <b>acanthosis nigricans</b> (คอ รักแร้ — insulin resistance), skin tag, การติดเชื้อ, จุดฉีดยา (lipohypertrophy) · <b>ตา:</b> visual acuity, <b>fundoscopy</b> (retinopathy) · <b>CVS:</b> หัวใจ, <b>carotid bruit</b>, femoral bruit, peripheral pulses · <b>ตรวจเท้าและขา:</b> ผิว แผล callus เล็บ รูปเท้าผิดรูป (Charcot), ขน/ผิวมัน (PAD), <b>ชีพจร dorsalis pedis และ posterior tibial</b>, <b>10-g monofilament</b>, vibration (128 Hz tuning fork), pinprick, ankle reflex · (ตามข้อบ่งชี้) ไทรอยด์, ลักษณะ Cushing",
   exp:"ตรวจเท้าอย่างละเอียดอย่างน้อยปีละครั้ง (monofilament + test อื่นอีก 1 อย่าง เช่น vibration/pinprick/ankle reflex) · ตรวจตาเมื่อวินิจฉัย T2DM และทุก 1–2 ปี · เป้าหมาย BP < 130/80 mmHg",
   rubric:"ได้เต็มเมื่อทำ BP + BMI + acanthosis + fundus + CVS/bruit/pulse + foot exam (monofilament) · ไม่ตรวจเท้า = ขาดข้อสำคัญ",
   pts:[H("Vital/anthropometry",25),P("Blood pressure","\\bbp\\b","blood pressure","ความดัน"),CR(P("Weight, height, BMI, waist","bmi","น้ำหนัก","weight","รอบเอว","waist")),
    H("ผิว/ตา/CVS",35),P("Acanthosis nigricans","acanthosis"),P("Fundoscopy / eye ground","fundus","fundoscop","eye ground","จอประสาทตา","retina"),P("Heart, carotid bruit, peripheral pulses","bruit","briut","carotid","หัวใจ","cvs","pulse","ชีพจร"),
    H("เท้า/ขา",40),CR(P("Foot inspection (ulcer, callus, deformity)","เท้า","foot","feet","แผล","callus","ulcer")),CR(P("10-g monofilament","monofilament","mirofilament","filament")),P("Vibration / pinprick / ankle reflex","vibration","tuning fork","pinprick","ankle reflex","reflex"),P("Foot pulses (DP, PT)","dorsalis","posterior tibial","\\bdp\\b","\\bpt\\b","ชีพจรเท้า")]}),
  B("26.2 Summarise your findings.",2,{tags:["pe"],
   ans:"<b>Type 2 diabetes mellitus with obesity</b> (BMI ≥ 25 kg/m² = obesity ตามเกณฑ์เอเชีย; BMI 33.8 = obesity class II) + acanthosis nigricans (insulin resistance) · ยังไม่พบ microvascular complication (retinopathy, neuropathy) หรือ PAD · BP ยังไม่ถึงเป้า < 130/80",
   exp:"แผน: lifestyle/ลดน้ำหนัก ≥ 5–10%, metformin; พิจารณา GLP-1 RA/SGLT2 inhibitor (ลดน้ำหนัก/ปกป้องหัวใจ-ไต) · ตรวจ HbA1c, lipid, UACR, eGFR",
   pts:[CR(P("Type 2 diabetes with obesity","obes","อ้วน","t2dm","type 2")),P("No microvascular complications found","no (retinopathy|neuropathy|complication)","ไม่มี ?(ภาวะแทรกซ้อน|retinopathy|neuropathy)","ไม่พบ")]})
 ),
 interp:"PE: ผู้ป่วยเบาหวาน — BP, BMI, acanthosis, fundus, CVS/bruit, foot exam + monofilament",
 summary:["BP + BMI/รอบเอว + acanthosis nigricans","Fundoscopy, carotid bruit, peripheral pulses","Foot exam: inspection, pulses, 10-g monofilament + vibration/reflex","BMI ≥ 25 = obesity (เกณฑ์เอเชีย)"]}),

/* ===== สถานี 27 ===== */
Co({page:5,orig:"27",topic:"lab",sub:"Glucose/HbA1c",title:"Glucose results in a young patient with high blood pressure — diagnosis",
 stem:`A 28-year-old man was found to have high blood pressure at a health check (BP 150/96 mmHg on repeated measurements). His laboratory results:<br>Fasting plasma glucose 112 mg/dL · HbA1c 6.1% · 2-hour plasma glucose after 75-g OGTT 165 mg/dL<br>Give your diagnoses.`,
 gray:"27. ผลแลปเบาหวานมา เป็น pre diabetics HT in the young จงให้การวินิจฉัย · (คอลัมน์เฉลยว่าง)",
 flag:"⚠ ไฟล์ไม่ให้ตัวเลขและไม่มีคำตอบ — อายุ BP และค่าน้ำตาลทั้งหมด Claude แต่งให้เป็น prediabetes + HT in the young ตามคอลัมน์คำถาม",
 notes:"คอลัมน์คำถามบอกว่าผลเป็น \"pre diabetics\" และ \"HT in the young\" · คอลัมน์เฉลยว่าง",
 parts:S(
  B("27.1 Interpret the glucose results.",4,{tags:["lab"],
   ans:"<b>Prediabetes</b> ทั้ง 3 เกณฑ์: <b>impaired fasting glucose</b> (FPG 100–125 mg/dL), <b>impaired glucose tolerance</b> (2-h OGTT 140–199 mg/dL), <b>HbA1c 5.7–6.4%</b> · ยังไม่ถึงเกณฑ์เบาหวาน (FPG ≥ 126, 2-h ≥ 200, HbA1c ≥ 6.5%)",
   exp:"Prediabetes เสี่ยงเป็นเบาหวานและโรคหัวใจหลอดเลือด · lifestyle intervention (ลดน้ำหนัก 7%, ออกกำลังกาย 150 นาที/สัปดาห์) ลดการเกิดเบาหวาน ~58% (DPP) · metformin พิจารณาใน BMI ≥ 35, อายุ < 60, เคยมี GDM · ตรวจซ้ำทุกปี",
   pts:[CR(P("Prediabetes","pre.?diabet","ภาวะก่อนเบาหวาน","เบาหวานแฝง")),P("Impaired fasting glucose (FPG 100–125)","impaired fasting","\\bifg\\b","100.{0,3}125"),P("Impaired glucose tolerance (2-h 140–199)","impaired glucose tol","\\bigt\\b","140.{0,3}199"),P("HbA1c 5.7–6.4%","5\\.7","6\\.4","hba1c","a1c")]}),
  B("27.2 What is your overall diagnosis and what would you look for next?",4,{tags:["lab"],
   ans:"<b>Prediabetes (IFG + IGT + HbA1c 5.7–6.4%) ร่วมกับ hypertension in the young</b> (อายุ < 30–40 ปี) → ต้อง<b>หา secondary hypertension</b>: <b>Cushing syndrome</b> และ <b>primary aldosteronism</b> (ทั้งคู่ทำให้ทั้งความดันสูงและน้ำตาลผิดปกติ), pheochromocytoma, renal parenchymal/renovascular disease, OSA, ยา · และประเมิน metabolic syndrome (อ้วนลงพุง ไขมัน) · ส่ง: electrolyte (K), creatinine, UA, aldosterone/renin ratio, overnight 1-mg dexamethasone suppression test ถ้ามีลักษณะ Cushing, plasma metanephrines ถ้ามีอาการ, lipid profile",
   exp:"Secondary HT ควรคิดในคนอายุ < 30 ปี, HT รุนแรง/ดื้อยา, เริ่มฉับพลัน, K ต่ำ · Metabolic syndrome (NCEP ATP III/IDF): รอบเอว + TG สูง + HDL ต่ำ + BP ≥ 130/85 + FPG ≥ 100 (≥ 3 ใน 5)",
   rubric:"คีย์ไม่มีในไฟล์ — ต้องบอก prediabetes + HT in the young ที่ต้องหา secondary cause · บอกชื่อสาเหตุ (Cushing/aldosteronism) ได้คะแนนเพิ่ม",
   pts:[CR(P("Hypertension in the young — look for secondary hypertension","secondary","ทุติยภูมิ","in the young","สาเหตุ")),P("Cushing syndrome","cushing"),P("Primary aldosteronism","aldosteron","conn"),P("Metabolic syndrome / obesity","metabolic","อ้วน","obes"),P("Screening tests (K, renin/aldosterone, dexamethasone suppression)","renin","dexamethasone","potassium","electrolyte","metanephrine","creatinine","\\bk\\b")]})
 ),
 interp:"Lab: แปลค่าน้ำตาล (IFG/IGT/HbA1c) = prediabetes + HT ในคนอายุน้อย → หา secondary cause (Cushing, aldosteronism)",
 summary:["Prediabetes: FPG 100–125, 2-h OGTT 140–199, HbA1c 5.7–6.4%","Diabetes: FPG ≥ 126, 2-h ≥ 200, HbA1c ≥ 6.5%","HT in the young + น้ำตาลผิดปกติ → คิด Cushing, primary aldosteronism"]}),

/* ===== สถานี 28 ===== */
Co({page:5,orig:"28",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — abdomen, then give the diagnosis",seen:"คล้าย SI127 Ro417–420 ข้อ 22 และ SI133 Ro405–406 ข้อ 13 (ตรวจท้องผู้ป่วยปวดท้อง) — คนละชุด",
 stem:`Examine the abdomen of this patient with abdominal pain, then give your diagnosis.`,
 gray:"28. ตรวจร่างกาย Abdomen และให้การวินิจฉัย · เฉลย: คลำม้าม ทั้งท่านอนและท่าตะแคง · fit test · Murphy positive · acute cholecystitis",
 flag:"\"มีอาการปวดท้อง\" ใน stem และบทผู้ป่วย (sp) Claude แต่ง · \"fit test\" Claude อ่านเป็น fist test (fist percussion ที่ชายโครงขวา) (?)",
 notes:"ผู้จด: คลำม้ามทั้งท่านอนหงายและท่าตะแคงขวา · \"fit test\" (?) (น่าจะเป็น fist percussion/fist test บริเวณตับ) · Murphy sign positive → acute cholecystitis",
 sp:"หญิง 45 ปี ปวดใต้ชายโครงขวา 1 วันหลังกินอาหารมัน มีไข้ · ผลตรวจ (ผู้คุมบอกเมื่อตรวจถูกวิธี): ท้องไม่อืด · กดเจ็บและมี guarding ที่ right upper quadrant · <b>Murphy sign positive</b> (หยุดหายใจเข้ากลางคันเมื่อกดใต้ชายโครงขวา) · fist percussion ที่ชายโครงขวาเจ็บ · ตับไม่โต ม้ามคลำไม่ได้ทั้งท่านอนหงายและตะแคงขวา · bowel sound ปกติ · ไม่มี shifting dullness · ไม่ตัวเหลือง",
 parts:S(
  B("28.1 Examine the abdomen.",8,{tags:["pe"],
   ans:"แนะนำตัว ขออนุญาต ล้างมือ นอนหงายราบ งอเข่า เปิดท้องตั้งแต่ใต้ราวนมถึงขาหนีบ · ถามจุดที่ปวดก่อน · <b>Inspection:</b> ท้องอืด แผลเป็น หลอดเลือดดำโป่ง การเคลื่อนไหวตามการหายใจ ดูตาเหลือง · <b>Auscultation:</b> bowel sound, bruit · <b>Percussion:</b> ทั่วท้อง, liver span, (shifting dullness) · <b>Palpation:</b> เบาก่อนแล้วลึก<b>เริ่มจากจุดที่ไม่ปวด</b> ดูสีหน้า หา tenderness/guarding/rebound · <b>คลำตับ</b> (เริ่มจาก RLQ ขึ้นไปตามจังหวะหายใจ) · <b>คลำม้าม</b> จาก RLQ ไปทาง LUQ <b>ทั้งท่านอนหงายและท่าตะแคงขวา</b> · คลำไต (ballottement) · <b>Murphy sign</b>: วางมือ/นิ้วใต้ชายโครงขวาที่ midclavicular line ให้หายใจเข้าลึก → หยุดหายใจกลางคันเพราะเจ็บ · <b>fist percussion</b> ที่ชายโครงขวา (เทียบซ้าย)",
   exp:"Murphy sign sensitivity ~65% ใน acute cholecystitis (ผู้สูงอายุอาจไม่ชัด) · ต้องเทียบว่าไม่เจ็บเมื่อทำด้านซ้าย",
   rubric:"ได้เต็มเมื่อตรวจครบ inspection–auscultation–percussion–palpation + คลำตับ/ม้าม (ม้ามทั้งสองท่า) + Murphy sign · กดจุดที่ปวดก่อน = หักคะแนน",
   pts:[H("Inspection/auscultation/percussion",25),P("Inspection","inspect","ดูท้อง","ท้องอืด","distens"),P("Auscultation — bowel sounds","bowel sound","auscult","ฟัง"),P("Percussion","percuss","เคาะ"),
    H("Palpation",45),P("Light then deep palpation starting away from the pain","light","deep","คลำเบา","คลำลึก","ไม่ปวด","tender","guarding"),P("Palpate the liver","ตับ","liver"),CR(P("Palpate the spleen supine and in right lateral decubitus","ม้าม","spleen","ตะแคง","lateral decub")),
    H("Special tests",30),CR(P("Murphy sign","murphy")),P("Fist percussion over the right costal margin","fist","ทุบ","ชายโครงขวา")]}),
  B("28.2 Report your findings and give the diagnosis.",3,{tags:["pe"],
   ans:"RUQ tenderness with guarding, <b>Murphy sign positive</b>, fist percussion ที่ชายโครงขวาเจ็บ, ตับม้ามคลำไม่ได้ → <b>acute calculous cholecystitis</b> · ยืนยันด้วย <b>ultrasound</b> (gallstone, ถุงน้ำดีผนังหนา > 4 mm, pericholecystic fluid, sonographic Murphy sign) + CBC, LFT, lipase",
   exp:"Tokyo Guidelines 2018: local inflammation (Murphy sign, RUQ mass/pain/tenderness) + systemic inflammation (ไข้, CRP/WBC สูง) + imaging → definite · รักษา: NPO, IV fluid, analgesia, antibiotic, early laparoscopic cholecystectomy",
   pts:[CR(P("Murphy sign positive","murphy")),CR(P("Acute cholecystitis","cholecystitis","ถุงน้ำดีอักเสบ")),P("Confirm with ultrasound","ultrasound","\\bu/?s\\b","อัลตรา","sono")]})
 ),
 interp:"PE: ตรวจท้องครบลำดับ คลำม้ามสองท่า + Murphy sign → acute cholecystitis",
 summary:["ตรวจท้อง: inspection → auscultation → percussion → palpation (เริ่มจากจุดไม่ปวด)","คลำม้ามทั้งท่านอนหงายและตะแคงขวา","Murphy sign positive + RUQ tenderness + ไข้ → acute cholecystitis → U/S"]}),

/* ===== สถานี 29 ===== */
Co({page:5,orig:"29",topic:"ekg",sub:"Electrolyte EKG",title:"12-lead EKG — interpret",imgNote:NOIMG,
 stem:`A 60-year-old man with chronic kidney disease presents with generalized weakness. Read and interpret his 12-lead EKG.`,
 gray:"29. EKG hyperkalemia · first degree av block · prolong pR interval · tall t wave · (คอลัมน์เฉลยว่าง — คำตอบอยู่ในคอลัมน์คำถาม)",
 flag:NOIMG+" · ประวัติ CKD/อ่อนแรงใน stem Claude แต่ง · stem ไม่บอกผล EKG (ไฟล์บอก hyperkalemia, 1st degree AV block, tall T)",
 notes:"ผู้จดเขียนในคอลัมน์คำถาม: EKG hyperkalemia — first degree AV block (prolonged PR interval), tall T wave",
 parts:S(
  B("29.1 Read the EKG systematically.",4,{tags:["ekg"],
   ans:"Rate, rhythm (sinus), axis · <b>PR interval prolonged > 200 ms (0.20 s)</b> ทุก beat และทุก P ตามด้วย QRS = <b>first-degree AV block</b> · <b>tall, narrow-based, peaked T waves</b> (เด่นใน precordial leads) · ดู P wave แบน/หาย, QRS กว้าง ถ้า K สูงมาก",
   exp:"ลำดับ EKG ใน hyperkalemia (ไม่ได้สัมพันธ์กับระดับ K เสมอ): peaked T → PR ยาว, P แบน/หาย → QRS กว้าง → sine wave → VF/asystole · bradyarrhythmia/AV block ได้",
   pts:[P("Rate, rhythm, axis","rate","rhythm","sinus","axis"),CR(P("Prolonged PR interval > 200 ms — first-degree AV block","pr ?interval","prolong","first.?degree","1st.?degree","av block","0\\.2","200")),CR(P("Tall peaked T waves","tall t","peak","t wave","t สูง"))]}),
  B("29.2 What is the most likely underlying abnormality?",3,{tags:["ekg"],
   ans:"<b>Hyperkalemia</b> (tall peaked T + PR prolonged/1st-degree AV block) — เป็นภาวะฉุกเฉิน · ส่ง serum K ซ้ำ (ตัด hemolysis), creatinine, glucose, ABG · รักษาทันทีเมื่อมี EKG change: <b>calcium gluconate 10% 10 mL IV</b> (stabilize membrane) → shift K: <b>regular insulin 10 units + glucose 25 g</b>, salbutamol nebulization, NaHCO3 ถ้า acidosis → เอา K ออก: loop diuretic, potassium binder, <b>hemodialysis</b> ถ้า CKD/ไม่ตอบสนอง · หยุดยาที่เพิ่ม K (ACEI/ARB, spironolactone, NSAIDs)",
   exp:"Calcium ไม่ลด K แต่ออกฤทธิ์ใน 1–3 นาที อยู่ได้ 30–60 นาที ทำซ้ำได้ถ้า EKG ยังผิดปกติ · insulin ออกฤทธิ์ใน 10–20 นาที เฝ้าระวัง hypoglycemia",
   pts:[CR(P("Hyperkalemia","hyperkal","โพแทสเซียมสูง","k ?สูง","high potassium")),P("Calcium gluconate IV","calcium","แคลเซียม"),P("Insulin + glucose, salbutamol","insulin","glucose","salbutamol"),P("Remove K: dialysis, binder, diuretic","dialysis","ฟอกไต","kayexalate","binder","furosemide","diuretic")]})
 ),
 interp:"EKG: peaked T + 1st-degree AV block → hyperkalemia และการรักษาฉุกเฉิน",
 summary:["Hyperkalemia EKG: peaked T → PR ยาว/P หาย → QRS กว้าง → sine wave","First-degree AV block: PR > 200 ms ทุก beat","รักษา: Ca gluconate → insulin + glucose/salbutamol → dialysis/binder/diuretic"]}),

/* ===== สถานี 30 ===== */
Co({page:5,orig:"30",topic:"img",sub:"Bone/joint film",title:"Radiographs of both knees — describe and diagnose",imgNote:NOIMG,seen:"คล้าย SI127 Ro417–420 ข้อ 12 · SI131 Ro413–416 ข้อ 22 · SI131 Ro417–420 ข้อ 23 (film เข่า) — คนละชุด",
 stem:`An elderly patient has chronic pain in both knees. Describe the radiographs of both knees and give your diagnosis.`,
 gray:"30. ให้ flim both knee แปลผล ข้อสอบเก่า · เฉลย: CPPD,OA · pesudo gout · subchondral bone sclerosis · wedge shape calcification at fibrocartilahinous of knee joint · joint space narrowing",
 flag:NOIMG+" · อายุ/อาการใน stem Claude แต่ง · ไฟล์สะกด flim = film, pesudo = pseudo, fibrocartilahinous = fibrocartilaginous",
 notes:"คำตอบผู้จด: CPPD, OA, pseudogout · subchondral bone sclerosis · wedge-shaped calcification at fibrocartilage ของข้อเข่า (meniscus = chondrocalcinosis) · joint space narrowing",
 parts:S(
  B("30.1 Describe the radiographs.",4,{tags:["img"],
   ans:"Plain film both knees (AP ± lateral) · <b>joint space narrowing</b> (เด่นที่ medial compartment หรือไม่สมมาตร) · <b>subchondral bone sclerosis</b> · osteophytes, subchondral cyst · <b>chondrocalcinosis</b>: เส้น/<b>แถบหินปูนรูปลิ่ม (wedge-shaped calcification) ใน fibrocartilage (meniscus)</b> และ/หรือเส้นบางขนานกับผิว hyaline cartilage · ไม่มี bone erosion",
   exp:"OA (Kellgren-Lawrence): joint space narrowing, osteophyte, subchondral sclerosis, subchondral cyst · CPPD arthropathy: ลักษณะคล้าย OA แต่มักเป็นข้อที่ OA ไม่ค่อยเป็น (patellofemoral แยกเดี่ยว, wrist/radiocarpal, MCP 2–3, shoulder) + chondrocalcinosis",
   pts:[CR(P("Chondrocalcinosis — wedge-shaped meniscal calcification","chondrocalcin","calcif","หินปูน","meniscus","fibrocartil")),P("Joint space narrowing","joint space","narrow","ช่องข้อแคบ"),P("Subchondral sclerosis","sclerosis","subchondral"),P("Osteophytes","osteophyte","กระดูกงอก")]}),
  B("30.2 What is your diagnosis?",3,{tags:["img"],
   ans:"<b>Calcium pyrophosphate deposition disease (CPPD) with osteoarthritis</b> ของข้อเข่าทั้งสองข้าง (chondrocalcinosis + OA changes) · อาการเฉียบพลัน = <b>pseudogout</b> (acute CPP crystal arthritis) — ยืนยันด้วยการเจาะข้อพบ <b>rhomboid-shaped, weakly positively birefringent crystals</b> · ผู้ป่วยอายุน้อย (< 60) หรือเป็นมาก → หาสาเหตุ: hyperparathyroidism, hemochromatosis, hypomagnesemia, hypophosphatasia",
   exp:"รักษา: acute flare — NSAIDs, colchicine, intra-articular/systemic steroid · chronic — ไม่มียาลด CPP crystal จำเพาะ รักษาแบบ OA (ลดน้ำหนัก กายภาพ ยาแก้ปวด)",
   pts:[CR(P("CPPD / pseudogout","cppd","pseudo.?gout","pesudo","calcium pyrophosphate","\\bcpp\\b")),CR(P("Osteoarthritis","\\boa\\b","osteoarth","ข้อเสื่อม")),P("Rhomboid weakly positively birefringent crystals","rhomb","positive","birefring")]})
 ),
 interp:"Imaging: knee film — chondrocalcinosis + OA changes → CPPD with OA",
 summary:["Chondrocalcinosis: หินปูนรูปลิ่มใน meniscus (fibrocartilage)","OA: joint space narrowing, osteophyte, subchondral sclerosis/cyst","CPPD crystal: rhomboid, weakly positive birefringence","CPPD อายุน้อย → hyperparathyroidism, hemochromatosis, hypoMg"]})
);
})();
