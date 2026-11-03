(function(){
/* SI Med OSCE — ชุด SIXX Rotate RoX (ไม่ทราบปี/rotation) — ไฟล์ sxx.pdf (โค้ด SIOSXX) 4 หน้า · ชื่อไฟล์เดิม "SIMD415 OSCE บรรยาย Example"
   ไฟล์เป็นภาพถ่ายกระดาษคำตอบ: โจทย์พิมพ์ + คำตอบลายมือสีน้ำเงิน + คะแนน/เฉลยที่อาจารย์เขียนสีแดง (ปากกาแดง/ไฮไลต์เหลือง) · 1 หน้า = 1 สถานี
   หน้า 1 = Gram stain เสมหะ + dx + tx (60/20/20, ได้ 90/100) · หน้า 2 = EKG (100, ได้ประมาณ 80) · หน้า 3 = PBS (A 70 / B 30) · หน้า 4 = CXR (70 / 30; หัวสไลด์ที่แปะ "Lobar pneumonia" ไม่ใช้เป็น title)
   ทั้ง 4 สถานี ไฟล์ไม่มีรูปโจทย์ (สไลด์/ฟิล์มไม่ได้แปะ) → NOIMG · ไม่คัดชื่อ/รหัสนักศึกษาและอาจารย์ · หน้า 1 และ 4 เป็นคนไข้ชุดเดียวกัน (หญิง 50 ปีไข้ ไอ หอบ) แต่เป็นคนละสถานี (คนละใบคำตอบ/คนละคะแนน)
   ไม่มีสถานี PBS/transfusion ที่ต้องเทียบ checklist transfusion · PBS เทียบ OSCE_REF.md ข้อ AML */
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
const Co=o=>Object.assign({set:"SIXX",ro:"RoX",file:"SIOSXX",opinion:""},o);
QB.push(

Co({page:1,orig:"1",topic:"micro",sub:"Gram stain",title:"Diabetic woman with fever, cough and dyspnea — sputum Gram stain",imgNote:NOIMG,
 stem:`A 50-year-old Thai woman with underlying diabetes mellitus presents with fever, cough and dyspnea for 2 days before admission. Vital signs: BT 39 °C, PR 120/min, RR 30/min, BP 120/80 mmHg. Lung examination reveals decreased breath sounds and fine crepitation at the right lung. A sputum Gram stain is shown.`,
 gray:"ผู้ป่วยหญิงไทยอายุ 50 ปี โรคประจำตัว DM มาด้วยอาการไข้ ไอ และหายใจหอบเหนื่อย 2 วันก่อนมาโรงพยาบาล · BT 39 C, PR 120/min, RR 30/min, BP 120/80 · Lung: decrease breath sound and fine crepitation at right lung · ส่งตรวจ sputum gram stain ดังแสดงในกล้องจุลทรรศน์ · คำถาม 1. จงอ่านสไลด์ sputum gram stain (60) · 2. จงให้การวินิจฉัย (20) · 3. จงให้การรักษา (20)",
 flag:"NOIMG — ไฟล์ไม่มีรูปสไลด์ (ใช้กล้องจริงในห้องสอบ) · ภาพที่คาดว่าจะเห็น: PMN จำนวนมาก, squamous epithelial cell น้อย, Gram-positive lancet-shaped diplococci เป็นคู่จำนวนมาก · ข้อย่อย 3 (ประเมินความเหมาะสมของเสมหะ) แยกเป็นคะแนนแรกตามที่อาจารย์เขียนไว้",
 notes:`ลายมือนักศึกษา (น้ำเงิน): "adequate sputum · squamous cell < 5 /HF · WBC (ขีดฆ่าตัวเลขเดิม) 2-3 /HF · gram positive diplococci numerous c̄ lancet shape" → อาจารย์วงรอบสามบรรทัดแรก ให้ ①adequate sputum = 10, ②ตัวเลข = 10, ③gram positive diplococci lancet shape = 30 · รวมข้อ 1 = 50/60
อาจารย์เขียนสีแดง: "② WBC > 25 /LPF, squamous epi < 10 /LPF" (ไฮไลต์เหลืองที่ criteria) และเขียน "LPF" ตัวใหญ่ข้างบรรทัด → หน่วยต้องเป็น LPF (low power field) ไม่ใช่ HF
วิเคราะห์ที่ขาด (ข้อ 1 ได้ 50/60 — ขาด 10): ตัวเลขของนักศึกษาไม่ตรง criteria (WBC เขียน 2-3 /HF ซึ่งน้อยเกินกว่า > 25 /LPF และ squamous < 5 ต่างจาก < 10 ซึ่งเป็นเกณฑ์) และใช้หน่วยผิด (HF แทน LPF) · การแบ่งว่าอีก 10 คะแนนหายจากจุดไหนอ่านจากลายมือไม่ชัด (?)
ข้อ 2 (วินิจฉัย): "acute bacterial pneumonia (S. pneumoniae pneumonia)" ได้ 20/20
ข้อ 3 (รักษา): ceftriaxone 1 g IV q 12 hr · paracetamol (500) 1 tab oral prn for fever q 4–6 hr · O2 cannula 3 LPM keep O2 sat ≥ 92% · observe respiration keep RR ≤ 30 (อาจารย์ขีดวงใต้บรรทัดสุดท้าย) → ได้ 20/20
คะแนนรวมที่อาจารย์วงไว้มุมขวาบน = 90/100`,
 parts:S(
  B("1.1 Describe the sputum Gram stain, including whether the specimen is adequate.",60,{tags:["micro"],
   key:"Adequate sputum: squamous epithelial cells < 5 /HF (นักศึกษา) — เฉลยอาจารย์ WBC > 25 /LPF และ squamous epithelial cells < 10 /LPF · Gram-positive diplococci numerous, lancet-shaped (ได้ 50/60)",
   ans:"<b>Adequate sputum</b> (WBC &gt; 25 และ squamous epithelial cells &lt; 10 ต่อ <b>LPF</b>) · พบ <b>Gram-positive diplococci รูปปลายแหลม (lancet-shaped) จำนวนมาก</b> อยู่ในหรือรอบ neutrophil → ตรงกับ <i>Streptococcus pneumoniae</i>",
   exp:"Murray–Washington / Bartlett: เสมหะที่เหมาะส่งย้อม/เพาะเชื้อ = squamous epithelial &lt; 10 (บางตำราใช้ &lt; 25) และ PMN &gt; 25 ต่อ LPF (×100) · ถ้ามี squamous มากแสดงว่าปนเปื้อนน้ำลาย<br>S. pneumoniae: Gram-positive cocci เป็นคู่ ปลายแหลมหันเข้าหากัน (lancet) อาจมี halo ของ capsule · Ddx: Staph aureus (cocci เป็นกลุ่ม), Klebsiella (Gram-negative rod มี capsule), H. influenzae (Gram-negative coccobacilli เล็ก)",
   rubric:"ได้ = บอก adequacy พร้อมเกณฑ์ WBC/squamous ต่อ LPF + GPDC lancet · บางส่วน = บอก adequate แต่ใช้หน่วยหรือตัวเลขผิด (ตามที่นักศึกษาทำ ได้ 50/60) · ถ้าตอบแค่ Gram-positive cocci โดยไม่บอกคู่/lancet ได้น้อยกว่า",
   pts:[H("ความเหมาะสมของเสมหะ (adequacy)",33),CR(P("Adequate sputum","adequate","เหมาะสม","ใช้ได้")),P("Squamous epithelial cells < 10 /LPF","squamous","epithel","\\bsec\\b"),P("WBC (PMN) > 25 /LPF","\\bwbc\\b","pmn","neutrophil","เม็ดเลือดขาว"),H("เชื้อ",67),CR(P("Gram-positive diplococci","gram.?pos","positive.*diplo","diplococ")),P("Lancet-shaped (ปลายแหลม) / numerous","lancet","ปลายแหลม","numerous","จำนวนมาก"),P("Suggests Streptococcus pneumoniae","pneumoniae","pneumococc","strep")]}),
  B("1.2 Give the diagnosis.",20,{tags:["micro"],
   key:"Acute bacterial pneumonia (S. pneumoniae pneumonia) — ได้ 20/20",
   ans:"<b>Community-acquired pneumonia</b> (acute bacterial pneumonia) จาก <i>Streptococcus pneumoniae</i> ที่ปอดขวา",
   exp:"ไข้สูง ไอ หอบ RR 30 + fine crepitation และ breath sound ลดลงด้านขวา + Gram stain พบ GPDC lancet จำนวนมากร่วมกับ PMN · เป็นเบาหวานเป็นปัจจัยเสี่ยง · ประเมินความรุนแรง (CURB-65 / ต้องดู BUN, mental status) ก่อนเลือกรักษาใน ward",
   rubric:"ได้ = pneumonia จากแบคทีเรีย / S. pneumoniae · บางส่วน = pneumonia เฉย ๆ ไม่ระบุเชื้อ",
   pts:[CR(P("Bacterial (community-acquired) pneumonia","pneumonia","ปอดอักเสบ","ปอดบวม")),P("Streptococcus pneumoniae","pneumoniae","pneumococc","strep")]}),
  B("1.3 Give the treatment.",20,{tags:["micro"],
   key:"Ceftriaxone 1 g IV q 12 hr · paracetamol 500 mg 1 tab oral prn fever q 4–6 hr · O2 cannula 3 LPM keep O2 sat ≥ 92% · observe respiration keep RR ≤ 30 (ได้ 20/20)",
   ans:"• <b>Ceftriaxone 1–2 g IV q 24 h</b> (± <b>azithromycin</b> 500 mg เพื่อคลุม atypical ตาม guideline ผู้ป่วยในที่ไม่ใช่ ICU)<br>• Paracetamol 500 mg 1 tab oral prn ไข้ q 4–6 h<br>• Oxygen cannula 3 LPM รักษา SpO<sub>2</sub> ≥ 92% (ผู้ป่วยทั่วไปเป้าประมาณ 94–98%)<br>• Monitor vital signs / RR (ควรลดจาก 30) · คุมน้ำตาล · พิจารณา hemoculture ก่อนให้ยา · ระยะรักษารวมอย่างน้อย 5 วัน และไม่มีไข้ 48 ชม.",
   exp:"ข้อนี้ ceftriaxone ครอบคลุม S. pneumoniae ได้ดี · RR 30 (ตรงเกณฑ์ CURB-65 = 1 คะแนนหากอายุ/ BUN/ความดันปกติ) ผู้ป่วย DM ที่มี hypoxia/หอบควรรับไว้รักษาในโรงพยาบาล",
   rubric:"ได้ = antibiotic ที่เหมาะสม + ลดไข้ + oxygen + monitor · ไม่ได้ให้ยา = ได้น้อย",
   pts:[CR(P("Ceftriaxone (หรือ beta-lactam IV ที่เหมาะสม)","ceftriaxone","ceftri","cefotaxime","amoxicillin","penicillin")),P("Atypical coverage (macrolide) ถ้า admit","azithro","macrolide","clarithro"),P("Paracetamol ลดไข้","paracetamol","acetaminophen","พาราเซตามอล"),P("Oxygen keep SpO2 ≥ 92%","oxygen","\\bo2\\b","cannula","ออกซิเจน"),P("Monitor RR / vital signs","monitor","observe","vital","\\brr\\b")]})
 ),
 interp:"อ่าน sputum Gram stain: ตัดสิน adequacy ก่อน แล้วอ่านเชื้อ → CAP จาก pneumococcus และให้การรักษาเบื้องต้น",
 summary:["Sputum adequate: squamous epithelial cells < 10 และ WBC > 25 ต่อ LPF — ตรวจ adequacy ก่อนอ่านเชื้อทุกครั้ง","S. pneumoniae = Gram-positive lancet-shaped diplococci ± capsule halo","CAP ผู้ป่วยใน: beta-lactam (ceftriaxone 1–2 g/day) ± macrolide + oxygen + paracetamol"],
 opinion:"ไฟล์ให้เต็มกับ ceftriaxone 1 g IV q 12 hr — ขนาดมาตรฐานของ CAP คือ 1–2 g IV ทุก 24 ชั่วโมง (q 12 h ใช้ใน meningitis / การติดเชื้อรุนแรงบางกรณี) และ guideline ผู้ป่วยในมักเพิ่ม macrolide คลุม atypical ซึ่งนักศึกษาไม่ได้เขียน — เฉลยจึงตอบตามขนาด q 24 h พร้อมแนะ azithromycin · เป้า SpO2 ≥ 92% ในไฟล์ใช้ได้ (ตำรา/BTS ใช้ 94–98%) · ตัวเลข criteria sputum ใช้ตามอาจารย์ (squamous < 10 /LPF, WBC > 25 /LPF)",
 }),

Co({page:2,orig:"2",topic:"ekg",sub:"Bradyarrhythmia/AV block",title:"Palpitation and chest tightness for 1 hour in an elderly man — EKG",imgNote:NOIMG,
 stem:`A 70-year-old man presents with palpitation and chest tightness for 1 hour. His 12-lead electrocardiogram is shown. Please interpret the ECG and give the diagnosis.`,
 gray:"โจทย์: ชายอายุ 70 ปี ใจสั่น แน่นหน้าอก เป็นมา 1 ชั่วโมง · คำสั่งปฏิบัติ: จงอ่าน ECG และให้การวินิจฉัย (100 คะแนน)",
 flag:"NOIMG — ไฟล์ไม่มีรูป EKG · ค่าที่คาดจากเฉลยอาจารย์: atrial rate ~70/min, ventricular rate ~30/min, P wave ปกติแต่ไม่สัมพันธ์กับ QRS (AV dissociation), QRS ปกติ, axis ปกติ, ST elevation II/III/aVF, T inverted V1–V4 และ aVL · ข้อสังเกต: ventricular rate ~30 กับ QRS แคบพบน้อย (ดู opinion)",
 notes:`ลายมือนักศึกษา (น้ำเงิน): "rate ~30 /min · rhythm no P-wave, irregular rhythm · axis LAD · no atrial, ventricular enlargement · ST elevation in lead II, aVF & III with depression ที่เป็น reciprocal ด้วย aVL, V1-4 (ไฮไลต์เหลือง) · DX: Inferior wall acute MI with bradycardia" · อาจารย์เติมแดงบรรทัดแรก "HR ช้ามาก heart block, bradycardia"
คะแนนเทาที่อาจารย์ให้ตามบรรทัด: 5 / 25 / 30 / 20 → รวม 80/100 (การแบ่งต่อบรรทัดไม่ตรงเฉลยละเอียดพอจะเทียบทีละข้อ (?))
เฉลยอาจารย์ (แดง): atrial rate 70 /min (2.5) · ventricular rate 30 /min (2.5) · irreg rhythm [อ่านได้ "irreg" (?) ตามต้นฉบับ] (2.5) · normal P wave (5) · normal QRS interval (5) · AV dissociation (10) · normal axis (5) · no chamber hypertrophy (2.5) · ST elevate in II, III, aVF (30) · inverted T wave in V1-4, aVL (5) · Dx: Inferior wall acute MI (20) with complete heart block 3rd degree (10)
ข้างขวาของกระดาษ (แผนผังอาจารย์): Sinus → no P wave: sinus arrest · AV node → 1st PR prolong · 2nd Mobitz I (PR ค่อยยาว) / Mobitz II (PR คงที่แล้ว drop) · 3rd = AV dissociation → ถ้ามี junctional escape = 40–60 /min QRS แคบ · ventricular escape < 40 /min QRS กว้าง · "* อ่าน escape ใน heart block ที่ HR ช้าด้วย"
โน้ตท้ายหน้า: "* EKG อ่านแล้ว normal ให้ดู QT prolong?" · "LCX: lead II ยกมากกว่า III ยกที่ lead I ด้วย · RCA: lead III ยกมากกว่า II" (แยก culprit artery ของ inferior MI)
วิเคราะห์ที่ขาด: (1) อ่านผิดว่า "no P-wave" ทั้งที่มี P wave ปกติแต่ไม่สัมพันธ์กับ QRS → พลาด AV dissociation (10) และ normal P wave (5) (2) axis อ่านเป็น LAD แต่เฉลย normal axis (5) (3) dx ไม่ระบุ complete (3rd degree) heart block (10) แม้จะบอก bradycardia (4) ไม่ได้บอก atrial rate 70 และ T inversion V1–4/aVL ตามเฉลย (5) ไม่ได้ระบุ escape rhythm`,
 parts:S(
  B("2.1 Interpret the ECG and give the diagnosis.",100,{tags:["ekg"],
   key:"Rate ~30/min · no P wave, irregular rhythm · LAD · no chamber enlargement · ST elevation II, III, aVF with reciprocal depression aVL, V1–4 · Dx: inferior wall acute MI with bradycardia (นักศึกษาได้ ~80/100) — เฉลยอาจารย์: atrial rate 70 / ventricular rate 30, P wave ปกติ, AV dissociation, ST elevation II, III, aVF, T inversion V1–4/aVL, Dx inferior wall acute MI with complete (3rd-degree) heart block",
   ans:"<b>Interpretation</b>: atrial rate ~70/min, ventricular rate ~30/min (bradycardia) · P wave ปกติแต่ <b>ไม่สัมพันธ์กับ QRS (AV dissociation)</b> · QRS interval ปกติ · normal axis · ไม่มี chamber hypertrophy · <b>ST elevation ใน II, III, aVF</b> · T inversion ใน V1–V4 และ aVL<br><b>Diagnosis</b>: <b>Acute inferior wall MI (STEMI) with complete (third-degree) AV block</b>",
   exp:"Inferior MI จาก RCA (ส่วนใหญ่) ทำให้ AV node ขาดเลือด → complete heart block ได้บ่อย · ST elevation III &gt; II สนับสนุน RCA, II &gt; III + เกี่ยวกับ lead I สนับสนุน LCx · reciprocal change ที่ aVL (± V1–3)<br>Complete AV block: atrial และ ventricular เต้นเป็นอิสระ (AV dissociation) escape rhythm: junctional 40–60/min QRS แคบ, ventricular &lt; 40/min QRS กว้าง · ต้อง อ่านให้ครบแม้ EKG ดูปกติ ให้เช็ก QT prolong ด้วย<br>การจัดการ: MONA (aspirin, nitrate ระวัง RV infarct), reperfusion (primary PCI/thrombolysis), atropine / transcutaneous pacing / temporary pacemaker ถ้า unstable",
   rubric:"ได้ = rate/rhythm ถูก + บอก AV dissociation + ST elevation inferior leads + dx inferior MI และ complete heart block · บางส่วน = ตอบ bradycardia/heart block โดยไม่บอกชนิด หรือบอก inferior MI อย่างเดียว (ตามนักศึกษา ได้ประมาณ 80)",
   pts:[H("Rate & rhythm",35),P("Atrial rate ~70/min","atrial","70","p wave rate","p rate"),P("Ventricular rate ~30/min (bradycardia)","ventricular","\\b30\\b","brady","ช้า"),P("Normal P wave","normal p","p wave ปกติ","p wave.*normal"),P("AV dissociation (P ไม่สัมพันธ์กับ QRS)","dissociat","av dissoc","ไม่สัมพันธ์","independent"),P("Normal QRS interval / narrow QRS","qrs.*normal","normal qrs","narrow","qrs แคบ","qrs ปกติ"),P("Normal axis และไม่มี chamber hypertrophy","normal axis","axis ปกติ","no.*hypertrophy","ไม่มี.*hypertrophy","no .*enlargement"),H("ST-T changes",35),CR(P("ST elevation ใน II, III, aVF","st.?elevat","st ยก","inferior")),P("T inversion ใน V1–V4 และ aVL (reciprocal)","t.?wave inver","inverted t","reciprocal","aVL"),H("Diagnosis",30),CR(P("Acute inferior wall MI","inferior.*(mi|infarct)","(mi|infarct).*inferior","inferior wall","stemi")),CR(P("Complete (3rd-degree) AV block","complete","3rd","third","heart block"))]})
 ),
 interp:"อ่าน EKG ครบเป็นระบบ (rate, rhythm, P-QRS relation, axis, ST-T) → สรุป inferior STEMI ร่วมกับ complete heart block",
 summary:["Inferior STEMI: ST elevation II, III, aVF + reciprocal aVL; III > II → RCA, II > III + ยกที่ I → LCx","Complete AV block = AV dissociation; junctional escape 40–60 QRS แคบ, ventricular escape < 40 QRS กว้าง","อ่าน EKG ให้ครบทุกข้อแม้ดูปกติ (เช็ก QT) แล้วให้ dx ที่เชื่อมอาการกับผล"],
 opinion:"ไฟล์ระบุ \"normal QRS interval\" ร่วมกับ ventricular rate 30/min — ตามหลักที่อาจารย์เขียนเอง junctional escape อยู่ที่ 40–60/min (QRS แคบ) และ < 40/min ต้องเป็น ventricular escape (QRS กว้าง) จึงมีความไม่สอดคล้องกันเล็กน้อย (เป็นไปได้ว่าเป็น junctional escape ที่ช้ามาก/ high-ventricular) · ไม่มีรูปให้ยืนยัน จึงเฉลยตามเฉลยอาจารย์ · ไฟล์ให้ T inversion V1–4/aVL ส่วนนักศึกษาตอบ ST depression reciprocal — reciprocal ที่ aVL ถูกหลัก ส่วน ST depression V1–4 เข้ากับ posterior involvement แต่ไม่ใช่ที่อาจารย์ต้องการ",
 }),

Co({page:3,orig:"3",topic:"micro",sub:"PBS",title:"Fever, fatigue and gum bleeding for 3 weeks — peripheral blood smear",imgNote:NOIMG,
 stem:`A 35-year-old woman presents with fever, fatigue and bleeding from the gums for 3 weeks. Her peripheral blood smear is shown (examine under 10x and 100x objectives). A. Describe the peripheral blood smear. B. Give the diagnosis.`,
 gray:"โจทย์: ผู้ป่วยหญิง อายุ 35 ปี ไข้ อ่อนเพลีย เลือดออกตามไรฟัน 3 สัปดาห์ · คำถาม A. จงบรรยาย peripheral blood smear (70) — ดูที่ 10x, 100x · B. จงให้การวินิจฉัย (30)",
 flag:"NOIMG — ไฟล์ไม่มีรูปสเมียร์ · ภาพที่คาดว่าจะเห็น: RBC NCNC มี teardrop และ schizocyte, WBC สูงเด่นด้วย myeloblast ที่มี Auer rod, เกล็ดเลือดน้อย ขนาดและการติดสีปกติ (0–2 ต่อ oil field) · ข้อ \"schizocyte\" ในไฟล์เขียนว่า \"no schizocyte (5)\" แต่อาจารย์เขียนสีเขียวแก้เป็น \"schizocyte\" และบอกให้ระบุ DIC → ใช้ \"มี schizocyte\"",
 notes:`ลายมือนักศึกษา: "RBC: normochromic normocytic RBC, no anisocytosis, no poikilocytosis · WBC: increase WBC, blast predominate, myeloblast · platelet: decrease" · อาจารย์ให้ 5 (RBC) / 10 (WBC) / 5 (platelet, เขียนเทา) / 10 (ขวา) (?) · ข้อ B: "acute myeloid leukemia" ได้ 30/30 (ขีดเส้นใต้เขียวทั้ง 3 คำ)
เฉลยอาจารย์ (แดง): RBC: NCNC RBC (5) · teardrop RBC (5) "พบใน BM disease" (ไฮไลต์เหลือง) · "no schizocyte (5)" แล้วอาจารย์แก้ด้วยเขียวเป็น "schizocyte" (ไฮไลต์เหลือง) พร้อมโน้ต "ต้องบอกว่ามี DIC ด้วยใน acute leukemia" (ไฮไลต์เหลือง) (ส่วนความหมายของประโยคก่อนหน้า "คนนี้มี… " อ่านไม่ออก (?))
WBC: leukocytosis (10) · mononuclear cell predominate (10) · numerous myeloblast (10 — อ่านได้ 10 หรือ 20 (?)) "ถ้า blast, lymphoblast (5)" (ตอบ blast/lymphoblast ได้ 5) · with Auer rod (10, ไฮไลต์เหลือง) · โน้ตแดงเหนือบรรทัด: "numerous myeloblast c̄ intracytoplasmic granule, nucleolus, Auer rod"
Plt: decrease (5) · 0–2 /OF (5) · normal size and stain (5, ไฮไลต์เหลือง + ดอกจันเขียว)
วิเคราะห์ที่ขาด: นักศึกษาตอบ RBC normocytic normochromic ไม่ระบุ teardrop/ schizocyte (ไม่โยง DIC) · WBC บอก blast predominate + myeloblast แต่ไม่บอก Auer rod, leukocytosis รูปแบบ mononuclear · Plt บอก decrease แต่ไม่ระบุจำนวน 0–2/OF และ morphology (size/stain) · ข้อ B ถูกต้อง 30/30
ตรวจเทียบ OSCE_REF (AML): WBC increase, myeloblast predominate; myeloblast ใหญ่ 15–20 µm N:C 7:1–5:1 basophilic cytoplasm finely reticulated chromatin distinct nucleoli อาจมี few granules/Auer rods`,
 parts:S(
  B("3.1 Describe the peripheral blood smear.",70,{tags:["micro"],
   key:"RBC normochromic normocytic, no anisocytosis, no poikilocytosis · WBC increase, blast predominate (myeloblast) · platelet decrease (นักศึกษาได้ประมาณ 20–30/70) — เฉลยอาจารย์: NCNC RBC, teardrop, schizocyte; leukocytosis, mononuclear predominate, numerous myeloblast with Auer rod; platelet decrease 0–2/OF normal size and stain",
   ans:"<b>RBC</b>: normochromic normocytic · พบ <b>teardrop RBC</b> (พบใน bone marrow disease) และ <b>schizocyte</b> (บ่งชี้ DIC ใน acute leukemia)<br><b>WBC</b>: leukocytosis, mononuclear cell เด่น, พบ <b>myeloblast จำนวนมาก</b> (ขนาดใหญ่ nucleoli ชัด cytoplasm basophilic มี granule) และ <b>Auer rod</b><br><b>Platelet</b>: ลดลง ~0–2 ต่อ oil field ขนาดและการติดสีปกติ",
   exp:"AML smear (OSCE_REF): WBC เพิ่ม, myeloblast predominate ขนาด 15–20 µm N:C 7:1–5:1, finely reticulated chromatin, distinct nucleoli, อาจพบ few granules / Auer rods · Auer rod = เฉพาะ myeloid lineage (ไม่พบใน ALL) · schizocyte + plt ต่ำ + เลือดออก = DIC ซึ่งพบได้ใน acute leukemia โดยเฉพาะ APL (hypergranular / faggot cell)<br>Teardrop (dacrocyte) พบใน myelofibrosis, marrow infiltration — ที่นี่สนับสนุนโรคของไขกระดูก",
   rubric:"ได้เต็ม = ระบุครบ RBC / WBC (myeloblast + Auer rod) / plt · บอกแค่ blast โดยไม่ระบุ myeloblast → ได้บางส่วน (ตอบ blast/lymphoblast ได้ 5 จากเฉลย) · ไม่บอก Auer rod เสียคะแนน (นักศึกษาตกส่วนนี้)",
   pts:[H("RBC",21),P("Normochromic normocytic RBC","normochromic","normocytic","nc.?nc"),P("Teardrop RBC (พบใน marrow disease)","tear.?drop","dacrocyt"),CR(P("Schizocyte → DIC","schizocyt","fragmented","dic","แตก")),H("WBC",50),P("Leukocytosis (WBC increased)","leukocytosis","increase.*wbc","wbc.*increase","เม็ดเลือดขาว.*(สูง|เพิ่ม)"),P("Mononuclear cell predominate","mononuclear","blast.*predominat","predominat.*blast"),CR(P("Numerous myeloblast","myeloblast","myelo.?blast")),P("Auer rod","auer"),H("Platelet",29),P("Platelet decrease (0–2 /OF)","platelet.*(decreas|low|ลด)","thrombocytopeni","0.?-?2","เกล็ดเลือด.*(ลด|น้อย)","plt.*decreas"),P("Normal size and stain ของ platelet","size","stain","ขนาด","ติดสี")]}),
  B("3.2 Give the diagnosis.",30,{tags:["micro"],
   key:"Acute myeloid leukemia (ได้ 30/30)",
   ans:"<b>Acute myeloid leukemia</b> (AML) — พิจารณา acute promyelocytic leukemia (APL) ร่วม เพราะมี DIC/เลือดออก ต้องยืนยันด้วย flow cytometry / cytogenetics (t(15;17))",
   exp:"ไข้ + อ่อนเพลีย + เลือดออก 3 สัปดาห์ = bone marrow failure (infection, anemia, bleeding) + smear พบ myeloblast + Auer rod · ยืนยัน ด้วย bone marrow ≥ 20% blasts (WHO) + immunophenotype · ถ้า APL (promyelocyte hypergranular, faggot cell) เป็น emergency ต้องให้ ATRA ทันที",
   rubric:"ได้ = acute myeloid leukemia · acute leukemia เฉย ๆ ได้บางส่วน · ตอบ ALL หรือ CML ได้ 0",
   pts:[CR(P("Acute myeloid leukemia (AML)","acute.*myel","\\baml\\b","myeloid leuk","myeloblastic")),P("พิจารณา APL / DIC","apl","promyelo","dic")]})
 ),
 interp:"อ่านสเมียร์ acute leukemia อย่างเป็นระบบ (RBC → WBC → platelet) พร้อมโยงเลือดออกกับ DIC (schizocyte, plt ต่ำ)",
 summary:["AML: myeloblast เด่น (nucleoli ชัด, granule) ± Auer rod — Auer rod ไม่พบใน ALL","Acute leukemia + schizocyte + plt ต่ำ + เลือดออก = ระวัง DIC โดยเฉพาะ APL","Teardrop RBC = marrow infiltration/fibrosis; อ่านสเมียร์เรียง RBC → WBC → Plt"],
 opinion:"ไม่ขัดกับไฟล์ — เกณฑ์ \"no schizocyte (5)\" ในเฉลยแดงอาจารย์แก้เขียวเป็น schizocyte และบอกให้พูดถึง DIC จึงตอบตามนั้น · ตัวเลขคะแนนของ \"numerous myeloblast\" อ่านเป็น 10 (ลายมืออาจเป็น 20) ผลรวมที่ตรง 70 คือ 10",
 }),

Co({page:4,orig:"4",topic:"img",sub:"CXR",title:"Febrile woman with cough and tachypnea — chest radiograph",imgNote:NOIMG,
 stem:`A 50-year-old woman presents with fever and cough with dyspnea for 2 days. Vital signs: temperature 39 °C, RR 30/min. 1. Describe the chest radiograph. 2. Give the diagnosis.`,
 gray:"โจทย์ ผู้ป่วยหญิง อายุ 50 ปี ไข้ ไอ หอบเหนื่อย 2 วัน · T 39 C, RR 30/min · 1. จงอ่านภาพถ่ายรังสี (70 คะแนน) · 2. จงวินิจฉัย (30 คะแนน) · หัวสไลด์ที่แปะบนหน้า: Lobar pneumonia",
 flag:"NOIMG — ไฟล์ไม่มีภาพ CXR (มีแต่ภาพวาดมือแดงของปอดขวาบนเป็นเงาทึบ ไม่ใช่ฟิล์ม) · ภาพที่คาดว่าจะเห็น: PA upright, density บริเวณ RUL พร้อม air bronchogram, ลบขอบ ascending aorta/ right mediastinum, trachea กลางลำ, ไม่มี effusion, หัวใจขนาดปกติ",
 notes:`ลายมือนักศึกษา: (เหนือโจทย์ — checklist ของ CXR) "exposure, rotation, adequate, bone, soft tissue, thoracic cavity, trachea, lungs, silhouette sign, opacity, infiltration, air bronchogram, CPA, perihilar mass, nodule, retrocardiac (?), heart, cardiomegaly (?), chamber enlargement, no subdiaphragmatic free air (?), flat diaphragm, hyperinflation (?)" · อาจารย์เขียนข้างโจทย์ "CXR: inside-out — heart · mediastinum, hilum · lung · thoracic wall · abdomen"
คำตอบ 1: "CXR PA upright film (ท่า?) · adequate, good exposure · no cardiomegaly · right upper lobe infiltration, sharp costophrenic angle both lung (แทรก: silhouette w right mediastinum) · no trachea deviation · no soft tissue swelling, no subcutaneous emphysema · normal bony thorax, no abnormal calcification · no hilar, no pleural line" · อาจารย์ให้ 2, 10, 2, 2, 2, 2 ตามบรรทัด (รวม ~20/70) · ติ๊ก "* ปรับ negative finding ที่สำคัญ *" (ใต้เขียว) และวาดรูปปอดแดงที่ขอบซ้าย
ข้อ 2: "Right lobar pneumonia (RUL pneumonia)" ได้ 30/30 (Lobar 10 + pneumonia 10 + at RUL 10)
เฉลยอาจารย์ (แดง, รวม 70): air bronchogram (20) · soft tissue density at RUL field [= infiltration] (15) · loss of ascending aorta shadow / silhouette (10) · trachea in midline (5) · no golden S sign (10) · no pleural effusion / no blunt costophrenic angle (2) · no mass (2) · normal bony structure (2) · normal soft tissue (2) · normal CT ratio [= cardiothoracic ratio] (2)
ท้ายหน้า: "Golden S sign ถ้ามี mass ที่ Rt hilum ทำให้ RUL atelectasis"
วิเคราะห์ที่ขาด (ข้อ 1 ได้ ~20/70): ไม่ได้บอก air bronchogram (20), ไม่ได้ระบุ silhouette sign ที่ขอบ ascending aorta ชัดเจน (นักศึกษาแทรก "silhouette w right mediastinum" แต่ได้คะแนนไม่เต็ม 10), ไม่ได้บอก golden S sign ว่าไม่มี (10) แม้จะเขียนใน checklist ด้านบน, ไม่ได้บอก trachea midline (เขียน no deviation ได้ 2 แทน 5) · เก่งเรื่อง negative findings แต่เสียคะแนน positive findings ซึ่งน้ำหนักมากสุด`,
 parts:S(
  B("4.1 Describe the chest radiograph.",70,{tags:["img"],
   key:"CXR PA upright, adequate good exposure · no cardiomegaly · right upper lobe infiltration with silhouette sign to right mediastinum, sharp costophrenic angles · no tracheal deviation · normal soft tissue and bony thorax (ได้ ~20/70) — เฉลยอาจารย์: air bronchogram (20), soft tissue density at RUL (15), loss of ascending aorta silhouette (10), trachea midline (5), no golden S sign (10), negative findings อื่น ๆ",
   ans:"<b>Technique</b>: PA upright, adequate<br><b>Positive</b>: ความทึบแบบ air-space (soft tissue density) ที่ <b>right upper zone</b> พร้อม <b>air bronchogram</b> · <b>ลบขอบ ascending aorta / right mediastinum (silhouette sign)</b><br><b>Negative</b>: trachea อยู่กลางลำ · <b>ไม่มี golden S sign</b> (ไม่มีก้อนที่ right hilum/ ไม่มี volume loss) · ไม่มี pleural effusion (costophrenic angle คม) · ไม่มี mass · หัวใจขนาดปกติ (CTR) · กระดูกและ soft tissue ปกติ",
   exp:"อ่านแบบ inside-out: heart → mediastinum/hilum → lungs → thoracic wall → abdomen · Air-space consolidation = ความทึบเป็นกลีบ ขอบเขตตามรอยแยก มี air bronchogram · RUL ชิดขอบ ascending aorta/ right mediastinum จึงเกิด silhouette sign ได้ · Golden S sign (reverse S ของ minor fissure) = RUL collapse จาก central mass ที่ right hilum → ใช้แยก pneumonia ออกจาก obstructing carcinoma (ไม่มี volume loss/ trachea ไม่เบี่ยงในข้อนี้)",
   rubric:"ได้เต็ม = บอก positive findings (air bronchogram, RUL consolidation, silhouette sign) และ negative findings สำคัญ (golden S, effusion, trachea midline) · ตอบเฉพาะ negative ปกติเป็นส่วนใหญ่ได้น้อย (นักศึกษา ~20/70)",
   pts:[H("Technique",3),P("Adequate film (PA upright, exposure)","adequate","pa ","upright","exposure"),H("Positive findings",50),CR(P("Air bronchogram","air.?bronch")),CR(P("Soft tissue density / infiltration at RUL (right upper zone)","right upper|rul|upper (lobe|zone)","infiltrat","consolidat","opacity","density")),P("Loss of ascending aorta / right mediastinal silhouette (silhouette sign)","silhouette","ascending aorta","right mediastin"),H("Negative findings",47),P("Trachea in midline","trachea.*(midline|ตรง|กลาง|deviat)","midline"),P("No golden S sign","golden","reverse s"),P("No pleural effusion / sharp costophrenic angle","effusion","costophrenic","cpa","น้ำในช่องเยื่อ"),P("No mass / normal heart size / CTR","cardiomegaly","\\bctr\\b","heart size","no mass","หัวใจ"),P("Normal bony thorax and soft tissue","bon","soft tissue","กระดูก")]}),
  B("4.2 Give the diagnosis.",30,{tags:["img"],
   key:"Right lobar pneumonia (RUL pneumonia) — ได้ 30/30 (lobar 10 + pneumonia 10 + RUL 10)",
   ans:"<b>Right upper lobe (lobar) pneumonia</b> — community-acquired, bacterial (มักเป็น <i>S. pneumoniae</i>)",
   exp:"ไข้สูง ไอ หอบ + air-space consolidation ที่ RUL พร้อม air bronchogram · Ddx: RUL atelectasis จาก central tumor (golden S sign, volume loss, trachea เบี่ยง), TB (apical/cavity), lung abscess",
   rubric:"ได้ = ระบุทั้งชนิด (lobar pneumonia) และตำแหน่ง (RUL) ข้อละ 10 · ตอบ pneumonia อย่างเดียวได้ 10",
   pts:[CR(P("Pneumonia","pneumonia","ปอดอักเสบ","ปอดบวม")),P("Lobar","lobar"),P("Right upper lobe","right upper|\\brul\\b","upper lobe","ปอดขวาบน")]})
 ),
 interp:"อ่าน CXR แบบ inside-out ให้ครบทั้ง positive/negative findings แล้วสรุป dx ที่ตำแหน่งชัดเจน",
 summary:["Lobar pneumonia: air-space consolidation + air bronchogram; ขอบหัวใจ/เส้นเลือดที่ชิดกลีบหายไป = silhouette sign (RUL → ascending aorta)","Golden S sign = RUL collapse จาก hilar mass — ต้องบอกว่ามี/ไม่มีเสมอ","อ่าน CXR: inside-out (heart, mediastinum/hilum, lung, thoracic wall, abdomen) และบอก negative findings ที่สำคัญ"],
 opinion:""}),
);
})();
