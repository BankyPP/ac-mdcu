(function(){
/* SI Med OSCE — SI128 Ro401–404 — ไฟล์ "128_Medicine_OSCE 3" (s128o3, โค้ด SIOS128A) 3 หน้า
   หัวไฟล์ "ข้อสอบลงกอง รายวิชา SIMD415 อายุรศาสตร์ รอบที่ 3 (401-404) OSCE and CRQ" · ตาราง 3 คอลัมน์ ข้อที่ / โจทย์ / Impression (พิมพ์ทั้งหมด ไม่มีลายมือ ไฮไลต์ กรอบปิด หรือส่วน key แยก)
   OSCE เลข 1–17 (หน้า 1: 1–10 · หน้า 2: 11–17) แล้วแถวตัวแดง "เริ่ม CRQ อีก 8 ข้อ" (ข้อความรูปแบบการสอบ ไม่ใช่โจทย์) · CRQ เลข 1–8 (หน้า 2: CRQ 1–2 · หน้า 3: CRQ 3–8)
   CRQ 2 ข้ามหน้า: บรรทัด "หากผู้ป่วยยังต้องอยู่ในโรงพยาบาล" บนหัวหน้า 3 (แถวไม่มีเลข) เป็นส่วนท้ายของ CRQ 2 — รวมเป็นสถานีเดียว
   CRQ → sec:"CRQ", orig "CRQ 1"–"CRQ 8" · ไฟล์ไม่บอกคะแนน/เวลาต่อข้อ → marks Claude กำหนด
   วิธีอ่านเฉลย: ผู้ใช้บอกว่า OSCE 128 ไม่มีคีย์ → key = NK ทุกข้อย่อย · คอลัมน์ Impression = คำตอบที่ผู้จดเขียนไว้ ใส่ใน key ด้วย IMP() และใช้เป็นแนวทาง (ไม่ 100%) · OSCE 2 และ 5 ไม่มี Impression
   ไม่มีรูปในไฟล์เลย → สถานีที่ต้องดูรูปใช้ NOIMG: 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 15, 17
   ค่าแลปที่ Claude แต่ง (ไฟล์บอกแค่ \"มีค่า lab ให้\"): OSCE 6 (LFT), 14 (ABG + electrolytes), 16 (ascitic fluid) — ระบุใน flag
   สถานีมีผู้คุม (ex:1, บท sp Claude แต่ง): CRQ 1, 2, 3, 4, 8 · ไม่มีสถานีที่ข้าม ไม่มีฐานพัก */
const NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)";
const IMP=x=>NK+" — Impression ที่ผู้จดเขียน: "+x;
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
const NOTE0="ไฟล์พิมพ์ ไม่มีลายมือ/ไฮไลต์";
const Co=o=>Object.assign({set:"SI128",ro:"Ro401–404",file:"SIOS128A",notes:NOTE0,opinion:""},o);
const Cq=o=>Co(Object.assign({sec:"CRQ"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"micro",sub:"Gram stain",title:"Pleural pus — Gram stain",imgNote:NOIMG,
 stem:`A patient has decreased breath sounds and decreased vocal resonance over one side of the chest. Thoracentesis yields pus, and a Gram stain of the pleural fluid is shown.<br>1.1 Interpret the Gram stain.<br>1.2 What is the diagnosis?`,
 gray:"1. ผป. decreased breath sound + vocal resonance แปลผล Gram stain from pleural pus + Dx. — Impression: mixed infection, empyema thoracis",
 flag:NOIMG+" · stem Claude เรียบเรียงจาก recall (ไม่บอกอายุ/ข้าง)",
 parts:S(
  B("1.1 Interpret the Gram stain.",3,{tags:["micro"],key:IMP("mixed infection"),
   ans:"พบ <b>PMN จำนวนมาก</b> (pus cells) + <b>เชื้อหลายชนิดปนกัน</b>: gram-positive cocci (เป็นสาย/กลุ่ม), gram-negative bacilli ± gram-positive bacilli = <b>polymicrobial (mixed) infection</b> ชวนนึกถึงเชื้อ anaerobes ร่วมกับ aerobes",
   exp:"Empyema ส่วนใหญ่ตามหลัง pneumonia (aspiration) — เชื้อที่พบบ่อย: <i>S. anginosus</i> group, anaerobes (Fusobacterium, Prevotella, Bacteroides), <i>S. aureus</i>, gram-negative bacilli · ถ้าเห็นเชื้อหลายรูปแบบ = ต้องให้ยาครอบคลุม anaerobes",
   rubric:"ได้เต็ม = PMN มาก + เชื้อหลายชนิด (ระบุทั้ง gram-positive และ gram-negative) + สรุปว่า mixed infection",
   pts:[P("Numerous PMN / pus cells","pmn","neutrophil","pus cell","นิวโทรฟิล"),P("Gram-positive cocci and gram-negative bacilli together","gram.?pos","gram.?neg","\\bgpc\\b","\\bgnb\\b","บวก","ลบ"),CR(P("Mixed / polymicrobial infection","mixed","polymicrob","หลายชนิด","anaerob"))]}),
  B("1.2 What is the diagnosis?",2,{tags:["micro"],key:IMP("empyema thoracis"),
   ans:"<b>Empyema thoracis</b> (pleural space มีหนอง) จาก mixed aerobic–anaerobic infection",
   exp:"รักษา: <b>ใส่ chest drain (ICD)</b> ระบายหนอง + IV antibiotic ครอบคลุม anaerobes (เช่น ceftriaxone + metronidazole หรือ amoxicillin–clavulanate) นาน ≥ 2–6 สัปดาห์ · ถ้าระบายไม่หมด/มี loculation → intrapleural tPA + DNase หรือ VATS decortication (BTS 2023)",
   pts:[CR(P("Empyema thoracis","empyema","หนองในช่องเยื่อหุ้มปอด","pyothorax")),P("Management: chest drain + antibiotics covering anaerobes","icd","chest drain","intercostal","drain","metronidazole","anaerob")]})
 ),
 interp:"Microscope: Gram stain ของหนองในช่องเยื่อหุ้มปอด → mixed infection → empyema thoracis",
 summary:["หนองจาก pleural tap = empyema → ต้องระบายด้วย ICD","Gram stain เห็นเชื้อหลายชนิด = mixed aerobic–anaerobic → ยาต้องครอบคลุม anaerobes","Drain ไม่หมด/loculated → intrapleural tPA + DNase หรือ VATS"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"img",sub:"CXR",title:"Chest radiograph — describe and give differential diagnoses",imgNote:NOIMG,
 stem:`A chest radiograph is shown.<br>2.1 Describe the abnormality.<br>2.2 Give 2 differential diagnoses.`,
 gray:"2. อ่าน CXR มี Pleural effusion 1 ข้าง(ข้างซ้าย) + Dx. 2 โรค — (ไม่มี Impression)",
 flag:NOIMG+" · ไฟล์ไม่ให้ประวัติผู้ป่วย และไม่มี Impression",
 parts:S(
  B("2.1 Describe the abnormality.",3,{tags:["img"],
   ans:"<b>Left pleural effusion</b>: homogeneous opacity ที่ปอดซ้ายส่วนล่าง ขอบบนเว้า (<b>meniscus sign</b>) ยกสูงทางด้านข้าง · <b>costophrenic angle ซ้ายทึบ</b> · บดบังขอบกะบังลมซ้าย · ถ้าปริมาณมาก trachea/mediastinum ถูกดันไปขวา",
   exp:"ต้องมีน้ำ ~200 mL จึงเห็น blunting ใน PA film (~50 mL ใน lateral) · effusion ข้างเดียวขนาดมากแต่ mediastinum ไม่เลื่อน → นึกถึง bronchial obstruction (มะเร็ง) หรือ fixed mediastinum",
   pts:[CR(P("Left pleural effusion","effusion","น้ำในช่องเยื่อหุ้มปอด","pleural fluid")),P("Blunted left costophrenic angle / meniscus sign","costophrenic","\\bcp angle","meniscus","blunt"),P("Comment on mediastinal shift","mediastin","trachea","shift","เลื่อน")]}),
  B("2.2 Give 2 differential diagnoses.",2,{tags:["img"],
   ans:"<ul><li><b>Tuberculous pleuritis</b> (exudate lymphocyte-predominant พบบ่อยในไทย)</li><li><b>Malignant pleural effusion</b> (lung cancer, metastasis เช่น breast, lymphoma)</li><li><b>Parapneumonic effusion / empyema</b></li></ul>",
   exp:"ขั้นต่อไป: diagnostic thoracentesis → Light's criteria แยก exudate/transudate, cell count, ADA (TB), cytology, Gram stain/culture · effusion ข้างเดียวด้านซ้ายไม่ค่อยเป็น heart failure (HF มักสองข้างหรือขวา)",
   rubric:"ได้เต็ม = 2 โรคที่เป็น exudate ข้างเดียวสมเหตุผล · heart failure ได้น้อย",
   pts:[G("Differential diagnoses (2)",2,P("Tuberculous pleuritis","tubercul","\\btb\\b","วัณโรค"),P("Malignant pleural effusion","malignan","cancer","มะเร็ง","metasta","lymphoma"),P("Parapneumonic effusion / empyema","parapneum","pneumonia","empyema","ปอดอักเสบ"))]})
 ),
 interp:"Imaging: CXR left pleural effusion → ddx exudate ข้างเดียว (TB, malignancy, parapneumonic)",
 summary:["Pleural effusion: homogeneous opacity + meniscus sign + CP angle ทึบ","Effusion ข้างเดียวในไทย: TB pleuritis, malignancy, parapneumonic","ขั้นต่อไป thoracentesis + Light's criteria, ADA, cytology"]}),

/* ===== OSCE 3 ===== */
Co({page:1,orig:"3",topic:"ekg",sub:"Bradyarrhythmia/AV block",title:"Dyspnea — 12-lead EKG",imgNote:NOIMG,
 stem:`A patient presents with dyspnea. A 12-lead EKG is shown.<br>3.1 Interpret the EKG.`,
 gray:"3. อ่าน EKG มาด้วยเหนื่อย — Impression: 3rd degree AV block",
 flag:NOIMG,
 parts:S(
  B("3.1 Interpret the EKG.",4,{tags:["ekg"],key:IMP("3rd degree AV block"),
   ans:"<b>Third-degree (complete) AV block</b>: P waves สม่ำเสมอ (atrial rate เร็วกว่า) และ QRS สม่ำเสมอ (ventricular rate ช้า) แต่<b>ไม่สัมพันธ์กัน</b> (PR interval เปลี่ยนไปเรื่อย ๆ = AV dissociation) · escape rhythm: QRS แคบ 40–60/min (junctional) หรือ QRS กว้าง 20–40/min (ventricular)",
   exp:"หาสาเหตุที่แก้ได้: inferior MI, hyperkalemia, ยา (β-blocker, non-DHP CCB, digoxin), Lyme · รักษา (ACC/AHA/HRS 2018): มีอาการ/hemodynamic ไม่ดี → atropine (มักไม่ได้ผลถ้า block ต่ำกว่า AV node) → <b>transcutaneous pacing</b> หรือ dopamine/epinephrine → temporary transvenous pacing → <b>permanent pacemaker</b>",
   pts:[H("Description",60),CR(P("AV dissociation: P waves unrelated to QRS, varying PR","dissociat","ไม่สัมพันธ์","no relation","unrelated","vary","march")),P("Atrial rate faster than ventricular rate (regular P-P and R-R)","atrial rate","p.?p","r.?r","regular"),P("Escape rhythm: junctional (narrow) or ventricular (wide)","escape","junction","ventricular","narrow","wide"),
    H("Diagnosis",40),CR(P("Third-degree / complete AV block","third","3rd","complete","chb","สมบูรณ์"))]})
 ),
 interp:"EKG: AV dissociation + ventricular rate ช้า = complete heart block ในผู้ป่วยเหนื่อย",
 summary:["Complete AV block: P กับ QRS เดินอิสระต่อกัน PR ไม่คงที่","Escape แคบ = junctional · กว้าง = ventricular (อันตรายกว่า)","Unstable → transcutaneous pacing · สุดท้ายใส่ permanent pacemaker","หาสาเหตุที่แก้ได้: inferior MI, hyperkalemia, ยา"]}),

/* ===== OSCE 4 ===== */
Co({page:1,orig:"4",topic:"micro",sub:"PBS",title:"Fever — peripheral blood smear",imgNote:NOIMG,
 stem:`A patient presents with fever. A peripheral blood smear is shown.<br>4.1 Describe the blood smear.<br>4.2 What is the most likely diagnosis?`,
 gray:"4. ไข้ อ่าน PBS + Dx. — Impression: atypical lymph",
 flag:NOIMG+" · ไฟล์ให้ Impression แค่ \"atypical lymph\" — คำวินิจฉัย dengue Claude ตัดสินจากบริบทไข้ในไทยและเฉลยอ้างอิง Key PBS (Acute hemorrhagic fever)",
 parts:S(
  B("4.1 Describe the blood smear.",3,{tags:["micro"],key:IMP("atypical lymph"),
   ans:"<b>RBC</b>: normochromic normocytic, no anisocytosis, no poikilocytosis · <b>WBC</b>: ลดลง พบ <b>atypical lymphocytes</b> (เซลล์ใหญ่ cytoplasm มาก สีน้ำเงินเข้ม ขอบเว้าตามเม็ดเลือดแดงรอบข้าง คล้าย plasma cell) · <b>Platelet</b>: ลดลง (&lt; 5/oil field)",
   exp:"ตามเฉลยอ้างอิง Key PBS (Acute hemorrhagic fever): ลักษณะสนับสนุนการติดเชื้อไข้เลือดออกคือ atypical lymphocyte ร่วมกับเกล็ดเลือดต่ำ",
   pts:[H("RBC",20),P("Normochromic normocytic RBC","normochrom","normocyt"),H("WBC",50),CR(P("Atypical lymphocytes","atypical lymph","reactive lymph","plasmacytoid","ลิมโฟไซต์ผิดปกติ")),P("Leukopenia","leukopen","wbc.{0,10}(ลด|decreas|low)","ลดลง"),H("Platelet",30),P("Thrombocytopenia","thrombocytopen","platelet.{0,15}(ลด|decreas|low)","เกล็ดเลือดต่ำ")]}),
  B("4.2 What is the most likely diagnosis?",2,{tags:["micro"],
   ans:"<b>Dengue infection</b> (dengue hemorrhagic fever) — ddx ของ atypical lymphocytes: EBV (infectious mononucleosis), CMV, viral infection อื่น",
   exp:"Dengue: leukopenia + thrombocytopenia + atypical lymphocyte + Hct สูงขึ้น (plasma leakage) · ยืนยัน NS1 Ag (วันแรก ๆ) หรือ dengue IgM · tourniquet test",
   pts:[CR(P("Dengue / dengue hemorrhagic fever","dengue","dhf","ไข้เลือดออก","hemorrhagic fever")),P("Other causes of atypical lymphocytes: EBV, CMV","ebv","mononucle","\\bcmv\\b","viral")]})
 ),
 interp:"PBS ในผู้ป่วยไข้: atypical lymphocyte + WBC และเกล็ดเลือดต่ำ → dengue",
 summary:["Atypical lymphocyte: เซลล์ใหญ่ cytoplasm น้ำเงินมาก ขอบเว้าตาม RBC","ไข้ + leukopenia + thrombocytopenia + atypical lymph → dengue","Ddx atypical lymph: EBV, CMV, viral infection อื่น"]}),

/* ===== OSCE 5 ===== */
Co({page:1,orig:"5",topic:"micro",sub:"AFB",title:"Sputum smear with acid-fast staining — organisms",imgNote:NOIMG,
 stem:`A sputum smear stained with an acid-fast technique is shown (the type of acid-fast stain is not stated).<br>5.1 Describe the findings.<br>5.2 Give 3 organisms in the differential diagnosis.`,
 gray:"5. แปลผล sputum ที่ย้อม AFB or MAF (ไม่บอกว่าย้อมอะไร) + บอก ddx. เชื้อมา 3 ตัว — (ไม่มี Impression)",
 flag:NOIMG+" · ไม่มี Impression ในไฟล์",
 parts:S(
  B("5.1 Describe the findings.",2,{tags:["micro"],
   ans:"พบ<b>เชื้อติดสีแดง/ชมพู</b> บนพื้นสีน้ำเงิน = <b>acid-fast organisms</b> · บรรยายรูปร่าง: แท่งเรียวโค้ง beaded (mycobacteria) หรือ<b>เส้นสายแตกกิ่ง (branching filaments)</b> ติดสีบางส่วน (Nocardia — ต้องใช้ modified AFB)",
   exp:"AFB (Ziehl-Neelsen) ใช้กรด–แอลกอฮอล์เข้มข้น → mycobacteria ติดสี · Modified AFB (Kinyoun ใช้ H2SO4 1%) → Nocardia ซึ่ง partially acid-fast ติดสีด้วย",
   pts:[CR(P("Red/pink acid-fast organisms on a blue background","acid.?fast","red","pink","แดง","ชมพู","ทนกรด")),P("Describe shape: slender beaded rods vs branching filaments","rod","แท่ง","beaded","branch","แตกกิ่ง","filament")]}),
  B("5.2 Give 3 organisms in the differential diagnosis.",3,{tags:["micro"],
   ans:"<ul><li><b><i>Mycobacterium tuberculosis</i></b></li><li><b>Nontuberculous mycobacteria</b> (<i>M. avium</i> complex, <i>M. kansasii</i>, <i>M. abscessus</i>)</li><li><b><i>Nocardia</i> spp.</b> (branching, partially acid-fast)</li></ul>อื่น ๆ ที่ partially acid-fast: <i>Rhodococcus equi</i>, <i>Legionella micdadei</i>",
   exp:"สเมียร์แยก TB กับ NTM ไม่ได้ → Xpert MTB/RIF + culture · Nocardia: ปอด + ฝีสมอง/ผิวหนังในผู้ภูมิคุ้มกันต่ำ รักษาด้วย TMP-SMX",
   pts:[G("Organisms (3)",3,P("M. tuberculosis","tubercul","\\btb\\b","วัณโรค"),P("Nontuberculous mycobacteria","\\bntm\\b","non.?tubercul","avium","\\bmac\\b","kansasii","abscessus"),P("Nocardia","nocard"),P("Rhodococcus / Legionella micdadei","rhodococ","micdadei"))]})
 ),
 interp:"Microscope: acid-fast stain ของเสมหะ — แยก mycobacteria (TB, NTM) กับ Nocardia",
 summary:["AFB บวก แยก TB กับ NTM ไม่ได้ → Xpert MTB/RIF + culture","Modified AFB (Kinyoun อ่อน) ใช้หา Nocardia ซึ่ง partially acid-fast เป็นเส้นสายแตกกิ่ง","Ddx acid-fast: M. tuberculosis, NTM, Nocardia"]}),

/* ===== OSCE 6 ===== */
Co({page:1,orig:"6",topic:"lab",sub:"LFT",title:"Fever followed by jaundice — liver function tests",
 seen:"คล้าย SI131 Ro413–416 ข้อ 10 (LFT แบบ hepatocellular ในชายหนุ่ม)",
 stem:`A 25-year-old woman had fever followed by jaundice; total duration of illness is 2 weeks. Liver function tests:<br>Total bilirubin 7.8 mg/dL, direct bilirubin 5.9 mg/dL<br>AST 980 U/L, ALT 1,320 U/L<br>ALP 150 U/L<br>Albumin 4.0 g/dL, globulin 3.1 g/dL<br>6.1 Interpret the liver function tests.<br>6.2 What investigations would you send?`,
 gray:"6. หญิง 25 ปี ไข้ก่อนเหลือง 2 wk. แปลผล LFT + ส่ง investigation — Impression: -hepatocellular jaundice -acute viral hepatitis",
 flag:"⚠ ไฟล์ไม่ให้ค่า LFT — ค่าทั้งหมด Claude แต่งให้เข้ากับ Impression (hepatocellular jaundice, acute viral hepatitis)",
 parts:S(
  B("6.1 Interpret the liver function tests.",3,{tags:["lab"],key:IMP("hepatocellular jaundice · acute viral hepatitis"),
   ans:"<b>Hepatocellular pattern jaundice</b>: hyperbilirubinemia ส่วนใหญ่เป็น direct · <b>AST/ALT สูงมาก (&gt; 10–20 เท่า, ALT &gt; AST)</b> · ALP สูงเล็กน้อย (R ratio &gt; 5) · albumin ปกติ (เฉียบพลัน) → <b>acute hepatitis</b> น่าจะเป็น <b>acute viral hepatitis</b> (ไข้นำมาก่อนเหลือง)",
   exp:"R ratio = (ALT/ULN) ÷ (ALP/ULN): &gt; 5 hepatocellular, &lt; 2 cholestatic · transaminase &gt; 1,000 U/L: viral hepatitis, drug/toxin (paracetamol), ischemic hepatitis, ท่อน้ำดีอุดตันเฉียบพลัน (ระยะแรก) · ไข้และอาการนำ (prodrome) แล้วเหลืองเมื่อไข้ลด เป็นลักษณะของ hepatitis A",
   pts:[CR(P("Hepatocellular pattern (markedly raised AST/ALT, ALT > AST)","hepatocell","transaminase","alt.{0,6}ast","ast.{0,6}alt")),P("Conjugated (direct) hyperbilirubinemia","direct","conjugat"),P("ALP only mildly raised / albumin normal","alp","albumin"),CR(P("Acute viral hepatitis","viral hepatitis","acute hepatitis","ตับอักเสบ"))]}),
  B("6.2 What investigations would you send?",3,{tags:["lab"],
   ans:"<b>Viral hepatitis serology</b>: <b>anti-HAV IgM</b> (น่าจะเป็นมากที่สุด) · <b>HBsAg + anti-HBc IgM</b> · <b>anti-HCV</b> (± HCV RNA) · <b>anti-HEV IgM</b> · และ <b>PT/INR</b> ดูความรุนแรง (acute liver failure) · ultrasound ตับและทางเดินน้ำดีถ้าสงสัยอุดตัน",
   exp:"INR ≥ 1.5 + encephalopathy = acute liver failure → ส่งต่อศูนย์ปลูกถ่ายตับ · ซักประวัติยา/สมุนไพร/paracetamol, alcohol, กินอาหารดิบ/ไม่สะอาด (HAV, HEV)",
   pts:[CR(P("Anti-HAV IgM","hav","hepatitis a")),P("HBsAg and anti-HBc IgM","hbsag","hbc","hepatitis b"),P("Anti-HCV","hcv","hepatitis c"),P("Anti-HEV IgM","hev","hepatitis e"),P("PT/INR for severity","\\bpt\\b","inr","prothrombin")]})
 ),
 interp:"แปลผล LFT แบบ hepatocellular ในหญิงสาวที่มีไข้ก่อนเหลือง → acute viral hepatitis → ส่ง serology",
 summary:["AST/ALT สูงมาก + ALP สูงเล็กน้อย = hepatocellular pattern (R > 5)","ไข้นำก่อนเหลือง → acute viral hepatitis (HAV พบบ่อย)","ส่ง anti-HAV IgM, HBsAg, anti-HBc IgM, anti-HCV, anti-HEV IgM + PT/INR"]}),

/* ===== OSCE 7 ===== */
Co({page:1,orig:"7",topic:"micro",sub:"UA",title:"Elevated blood pressure — urine sediment",imgNote:NOIMG,
 stem:`A patient has a blood pressure of 150/80 mmHg. A urine sediment is shown.<br>7.1 Describe the urine sediment.<br>7.2 Give 3 differential diagnoses.`,
 gray:"7. BP 150/80 อ่าน Urine sediment + Dx. 3 โรค — Impression: dysmorphic RBC",
 flag:NOIMG,
 parts:S(
  B("7.1 Describe the urine sediment.",2,{tags:["micro"],key:IMP("dysmorphic RBC"),
   ans:"<b>Dysmorphic RBCs</b>: เม็ดเลือดแดงขนาดและรูปร่างหลากหลาย มีปุ่มยื่น/ขอบขรุขระ (<b>acanthocytes</b> รูปวงแหวนมีตุ่ม) ± <b>RBC casts</b> = <b>glomerular hematuria</b>",
   exp:"Acanthocytes &gt; 5% ของ RBC ในปัสสาวะ หรือพบ RBC cast = เลือดออกจาก glomerulus · isomorphic RBC = เลือดออกจากทางเดินปัสสาวะ (นิ่ว มะเร็ง ติดเชื้อ)",
   pts:[CR(P("Dysmorphic RBC / acanthocytes","dysmorph","acanthocyt")),P("RBC casts","rbc cast","cast"),P("Glomerular hematuria","glomerul")]}),
  B("7.2 Give 3 differential diagnoses.",3,{tags:["micro"],
   ans:"<b>Glomerulonephritis</b> (nephritic syndrome: hematuria + HT): <ul><li><b>IgA nephropathy</b></li><li><b>Post-streptococcal (post-infectious) GN</b></li><li><b>Lupus nephritis</b></li></ul>อื่น ๆ: ANCA-associated vasculitis, anti-GBM disease, MPGN",
   exp:"ส่งต่อ: UPCR, creatinine, C3/C4 (ต่ำใน PSGN, lupus, MPGN), ASO/anti-DNase B, ANA/anti-dsDNA, ANCA, anti-GBM · kidney biopsy ถ้าไตเสื่อมเร็วหรือ proteinuria มาก",
   pts:[G("Glomerular diseases (3)",3,P("IgA nephropathy","iga"),P("Post-streptococcal / post-infectious GN","post.?strep","psgn","post.?infect","apsgn"),P("Lupus nephritis","lupus","\\bsle\\b"),P("ANCA vasculitis / anti-GBM / RPGN","anca","anti.?gbm","goodpasture","rpgn","vasculitis"),P("MPGN","mpgn","membranoprolif"))]})
 ),
 interp:"Urine sediment: dysmorphic RBC = glomerular hematuria + HT → glomerulonephritis",
 summary:["Dysmorphic RBC (acanthocyte) และ RBC cast = เลือดออกจาก glomerulus","Hematuria + HT = nephritic → IgA nephropathy, PSGN, lupus nephritis","C3/C4 ต่ำ: PSGN, lupus, MPGN"]}),

/* ===== OSCE 8 ===== */
Co({page:1,orig:"8",topic:"micro",sub:"PBS",title:"Elderly patient with pallor and splenomegaly — peripheral blood smear",imgNote:NOIMG,
 stem:`An elderly patient presents with pallor and splenomegaly for 2 weeks. A peripheral blood smear is shown.<br>8.1 Describe the blood smear.<br>8.2 Give the complete diagnosis.`,
 gray:"8. ผป.สูงอายุ มีซีด ม้ามโต 2 wk. อ่าน PBS + Dx. ให้ครบ — Impression: Smudge cell, lymphoid series, CLL with AIHA",
 flag:NOIMG,
 parts:S(
  B("8.1 Describe the blood smear.",3,{tags:["micro"],key:IMP("Smudge cell · lymphoid series"),
   ans:"<b>RBC</b>: normochromic normocytic, anisocytosis, <b>spherocytes</b>, <b>polychromasia</b>, ± NRC (± autoagglutination) · <b>WBC</b>: เพิ่มขึ้น <b>small mature lymphocytes</b> เด่น + <b>smudge cells</b> (ประปรายอาจมี prolymphocyte) · <b>Platelet</b>: ปกติหรือลดลง",
   exp:"ตามเฉลยอ้างอิง Key PBS (CLL): เม็ดเลือดแดงอาจมี spherocyte, polychromasia ถ้ามี secondary AIHA · absolute lymphocytosis ≥ 5,000/µL · prolymphocyte มักน้อยกว่า 10% ของ lymphoid cells · และ \"ดูให้ครบ series\" ตามลายมือในเฉลย Key PBS",
   pts:[H("WBC",50),CR(P("Increased small mature lymphocytes (lymphocytosis)","lymphocyt","mature lymph","ลิมโฟ")),CR(P("Smudge cells","smudge","basket")),H("RBC",35),P("Spherocytes","spherocyt"),P("Polychromasia / NRC","polychrom","\\bnrc\\b","nucleated red"),H("Platelet",15),P("Platelet normal or decreased","platelet","เกล็ดเลือด")]}),
  B("8.2 Give the complete diagnosis.",2,{tags:["micro"],key:IMP("CLL with AIHA"),
   ans:"<b>Chronic lymphocytic leukemia (CLL) with secondary autoimmune hemolytic anemia (warm AIHA)</b>",
   exp:"ยืนยัน: <b>flow cytometry</b> (CD5+, CD19+, CD20 dim, <b>CD23+</b>, sIg dim, clonal κ/λ) · hemolysis: <b>DAT (Coombs) positive</b>, reticulocyte สูง, indirect bilirubin สูง, LDH สูง, haptoglobin ต่ำ · AIHA รักษาด้วย prednisolone 1 mg/kg/day ก่อน และ AIHA ที่ดื้อต่อยา = ข้อบ่งชี้เริ่มรักษา CLL (iwCLL 2018)",
   rubric:"ได้เต็มต้องบอกทั้ง CLL และ AIHA · ตอบแค่ CLL = ได้ครึ่ง",
   pts:[CR(P("Chronic lymphocytic leukemia","\\bcll\\b","chronic lymphocytic")),CR(P("Autoimmune hemolytic anemia","aiha","autoimmune hemoly","hemoly")),P("Confirm: flow cytometry and DAT","flow","cd5","cd23","\\bdat\\b","coombs")]})
 ),
 interp:"PBS: lymphocytosis + smudge cells (CLL) + spherocytes/polychromasia (AIHA) — ต้องอ่านครบทุก series",
 summary:["CLL: small mature lymphocytes + smudge cells, ยืนยัน flow cytometry CD5+/CD23+","CLL + spherocyte + polychromasia → secondary warm AIHA → DAT","อ่าน PBS ให้ครบทุก series (RBC, WBC, platelet)"]}),

/* ===== OSCE 9 ===== */
Co({page:1,orig:"9",topic:"micro",sub:"Stool exam",title:"Stool examination — identify and treat",imgNote:NOIMG,
 stem:`A stool examination is shown.<br>9.1 Identify the findings.<br>9.2 What treatment would you give?`,
 gray:"9. อ่าน Stool exam + ให้การรักษา — Impression: -ไข่ Ascaris + Hookworm -albendazole",
 flag:NOIMG,
 parts:S(
  B("9.1 Identify the findings.",3,{tags:["micro"],key:IMP("ไข่ Ascaris + Hookworm"),
   ans:"<b>Ascaris lumbricoides egg</b> (fertilized): รูปกลม–รี ~45–75 µm เปลือกหนา ผิวนอกเป็นปุ่ม (<b>mammillated</b>) สีน้ำตาลเหลือง (ติดสี bile) ภายในมีเซลล์เดียว<br><b>Hookworm egg</b>: รูปรี ~60–75 × 35–40 µm <b>เปลือกบางใส</b> ภายในมี embryo แบ่งตัว 4–8 cells มี<b>ช่องว่างใส</b>ระหว่าง embryo กับเปลือก",
   exp:"Unfertilized Ascaris egg ยาวรีกว่า เปลือกบาง ภายในเป็น granule · ไข่ hookworm แยกจาก Necator/Ancylostoma ไม่ได้ · hookworm ทำให้ iron deficiency anemia",
   pts:[CR(P("Ascaris lumbricoides egg (thick mammillated shell)","ascaris","พยาธิไส้เดือน","mammillat","roundworm")),CR(P("Hookworm egg (thin shell, segmented embryo)","hookworm","พยาธิปากขอ","necator","ancylostoma"))]}),
  B("9.2 What treatment would you give?",2,{tags:["micro"],key:IMP("albendazole"),
   ans:"<b>Albendazole 400 mg oral single dose</b> (ครอบคลุมทั้ง Ascaris และ hookworm; hookworm อาจให้ 400 mg วันละครั้ง 3 วันเพื่อ cure rate สูงขึ้น) · ทางเลือก: mebendazole 500 mg single dose หรือ 100 mg วันละ 2 ครั้ง 3 วัน · ให้ธาตุเหล็กถ้าซีดจากขาดเหล็ก",
   exp:"หลีกเลี่ยง benzimidazole ในไตรมาสแรกของการตั้งครรภ์ (pyrantel pamoate เป็นทางเลือก) · ป้องกัน: สวมรองเท้า (hookworm เข้าทางผิวหนัง) ล้างมือ ล้างผัก",
   pts:[CR(P("Albendazole","albendazole")),P("Dose 400 mg single (± 3 days for hookworm)","400"),P("Alternative: mebendazole / iron supplement","mebendazole","iron","เหล็ก")]})
 ),
 interp:"Stool exam: ไข่ Ascaris (เปลือกหนาเป็นปุ่ม) + ไข่ hookworm (เปลือกบาง embryo แบ่งตัว) → albendazole",
 summary:["Ascaris egg: เปลือกหนา mammillated สีน้ำตาล","Hookworm egg: เปลือกบางใส embryo 4–8 cells มีช่องว่างรอบ","Albendazole 400 mg single dose ครอบคลุมทั้งสอง · hookworm → ระวัง IDA"]}),

/* ===== OSCE 10 ===== */
Co({page:1,orig:"10",topic:"micro",sub:"PBS",title:"Anemia with jaundice after transfusion — peripheral blood smear",imgNote:NOIMG,
 stem:`A 35-year-old patient presents with pallor. The patient has received a blood transfusion in the past and developed jaundice. A peripheral blood smear is shown.<br>10.1 Describe the red blood cells only.<br>10.2 What is the most likely diagnosis?<br>10.3 Name one further investigation.`,
 gray:"10. ผป. 35 ปี ซีด เคยได้เลือดแล้วเหลือง อ่าน PBS เฉพาะ RBC + Dx. + ส่งตรวจเพิ่มเติม 1 อย่าง — Impression: HS",
 flag:NOIMG+" · \"เคยได้เลือดแล้วเหลือง\" Claude แปลตามตัว (ไม่บอกเพศ)",
 parts:S(
  B("10.1 Describe the red blood cells only.",3,{tags:["micro"],
   ans:"Normochromic normocytic RBC · anisocytosis 1–2+ (ขนาดใกล้เคียงกัน) · poikilocytosis 1–2+ · <b>spherocytes 3–4+</b> (เซลล์เล็ก ติดสีเข้ม ไม่มี central pallor) · <b>polychromasia</b> · ± NRC",
   exp:"ตามเฉลยอ้างอิง Key PBS (HS): spherocyte จำนวนมาก ขนาดสม่ำเสมอ (anisocytosis น้อย) ต่างจาก AIHA ที่ spherocyte ขนาดต่างกันมาก (anisocytosis 3–4+) และอาจมี autoagglutination",
   pts:[CR(P("Numerous spherocytes (no central pallor)","spherocyt")),P("Polychromasia / NRC","polychrom","\\bnrc\\b","nucleated"),P("Mild anisocytosis (uniform size), normochromic","anisocyt","normochrom","uniform")]}),
  B("10.2 What is the most likely diagnosis?",2,{tags:["micro"],key:IMP("HS"),
   ans:"<b>Hereditary spherocytosis</b> (chronic extravascular hemolysis)",
   exp:"HS: ความผิดปกติของ RBC membrane (ankyrin, spectrin, band 3) ส่วนใหญ่ autosomal dominant · ซีด เหลือง ม้ามโต นิ่วในถุงน้ำดี · aplastic crisis จาก parvovirus B19 · MCHC สูง · รักษา: folic acid, splenectomy ในรายรุนแรง",
   pts:[CR(P("Hereditary spherocytosis","hereditary sphero","\\bhs\\b"))]}),
  B("10.3 Name one further investigation.",1,{tags:["micro"],
   ans:"<b>Direct antiglobulin test (DAT)</b> เพื่อแยก AIHA (ต้องเป็นลบใน HS) — หรือยืนยัน HS ด้วย <b>EMA binding test</b> (flow cytometry) / <b>osmotic fragility test</b>",
   exp:"BSH guideline: ผู้ป่วยมีประวัติครอบครัว + spherocyte + reticulocyte สูง + DAT ลบ วินิจฉัยได้โดยไม่ต้องตรวจเพิ่ม · กรณีไม่ชัด ใช้ EMA binding test (sensitivity สูงกว่า osmotic fragility)",
   rubric:"ตอบอย่างใดอย่างหนึ่ง (DAT, EMA binding, osmotic fragility) ได้เต็ม",
   pts:[G("One appropriate test",1,P("DAT / Coombs","\\bdat\\b","coombs","antiglobulin"),P("EMA binding test","\\bema\\b","eosin.?5"),P("Osmotic fragility test","osmotic","\\bof\\b"))]})
 ),
 interp:"PBS เฉพาะ RBC: spherocytes ขนาดสม่ำเสมอ + polychromasia → hereditary spherocytosis",
 summary:["HS: spherocyte มาก ขนาดสม่ำเสมอ + polychromasia, MCHC สูง","แยก AIHA ด้วย DAT (HS = ลบ)","ยืนยัน HS: EMA binding test หรือ osmotic fragility"]}),

/* ===== OSCE 11 ===== */
Co({page:2,orig:"11",topic:"img",sub:"CXR",title:"Chest radiograph — lower lung field lesion",imgNote:NOIMG,
 stem:`A chest radiograph is shown.<br>11.1 Describe the abnormality.<br>11.2 Give 3 differential diagnoses.`,
 gray:"11. อ่าน CXR + Dx. 3 โรค — Impression: pulmonary mass at lower lung field",
 flag:NOIMG+" · ไฟล์ไม่ให้ประวัติผู้ป่วยและไม่บอกข้าง",
 parts:S(
  B("11.1 Describe the abnormality.",2,{tags:["img"],key:IMP("pulmonary mass at lower lung field"),
   ans:"<b>Pulmonary mass</b> (rounded opacity &gt; 3 cm) ที่ <b>lower lung field</b> — บรรยายข้าง ขนาด ขอบ (smooth/lobulated/spiculated) cavitation, calcification, air-fluid level, hilar/mediastinal node, effusion, กระดูกซี่โครงถูกกัดกร่อน",
   exp:"Nodule ≤ 3 cm · mass &gt; 3 cm (มะเร็งมากขึ้นเมื่อก้อนใหญ่ ขอบ spiculated อายุมาก สูบบุหรี่) · ก้อนมี cavity ผนังหนาไม่เรียบ: squamous cell carcinoma หรือ lung abscess",
   pts:[CR(P("Pulmonary mass / rounded opacity","mass","ก้อน","opacity","lesion")),P("Location: lower lung field","lower","ล่าง","\\bll"),P("Describe margin, cavity, calcification, node, effusion","margin","ขอบ","cavit","calcif","node","effusion","spicul")]}),
  B("11.2 Give 3 differential diagnoses.",3,{tags:["img"],
   ans:"<ul><li><b>Bronchogenic carcinoma</b> (primary lung cancer)</li><li><b>Pulmonary metastasis</b></li><li><b>Lung abscess</b> / round pneumonia</li><li><b>Tuberculoma</b> / fungal granuloma</li></ul>",
   exp:"ขั้นต่อไป: CT chest with contrast → tissue diagnosis (bronchoscopy, CT-guided biopsy) · sputum AFB/Xpert ในไทย",
   pts:[G("Differential diagnoses (3)",3,P("Bronchogenic carcinoma / lung cancer","bronchogenic","lung cancer","carcinoma","มะเร็งปอด"),P("Pulmonary metastasis","metasta","แพร่กระจาย"),P("Lung abscess / round pneumonia","abscess","pneumonia","ฝี"),P("Tuberculoma / TB","tubercul","\\btb\\b","วัณโรค"),P("Fungal granuloma / other","fung","granulom","aspergill","melioid"))]})
 ),
 interp:"CXR: ก้อนที่ lower lung field → ddx มะเร็งปอด, metastasis, infection (abscess, TB)",
 summary:["Mass > 3 cm · nodule ≤ 3 cm","Ddx lung mass: bronchogenic CA, metastasis, lung abscess, tuberculoma/fungal","ต่อด้วย CT chest และ tissue diagnosis"]}),

/* ===== OSCE 12 ===== */
Co({page:2,orig:"12",topic:"ekg",sub:"Tachyarrhythmia",title:"Palpitations for 30 minutes — 12-lead EKG",imgNote:NOIMG,
 stem:`A patient presents with palpitations for 30 minutes. Blood pressure is 120/80 mmHg and the patient is alert.<br>12.1 Interpret the EKG.<br>12.2 What is your management?`,
 gray:"12. ใจสั่น 30 นาที อ่าน EKG + บอกการรักษา — Impression: -SVT -adenosine",
 flag:NOIMG+" · BP 120/80 และรู้สึกตัวดี Claude เติม (ไฟล์ไม่บอก vital signs)",
 opinion:"เห็นด้วยกับ Impression (SVT, adenosine) แต่ตาม ACLS ควรเริ่ม vagal maneuver ก่อนให้ adenosine ในผู้ป่วยที่ stable",
 parts:S(
  B("12.1 Interpret the EKG.",3,{tags:["ekg"],key:IMP("SVT"),
   ans:"<b>Regular narrow-complex tachycardia</b> rate ~150–250/min ไม่เห็น P wave ชัด (หรือ retrograde P/pseudo r' ใน V1) = <b>paroxysmal supraventricular tachycardia</b> (AVNRT พบบ่อยสุด)",
   exp:"Regular narrow QRS tachycardia ddx: sinus tachycardia, PSVT (AVNRT, AVRT), atrial flutter 2:1 (rate ~150 มี flutter wave) · irregular → AF",
   pts:[P("Regular narrow-QRS tachycardia","regular","narrow","แคบ"),P("No visible P waves / retrograde P","p wave","retrograde","pseudo","no p"),CR(P("PSVT / SVT (AVNRT)","svt","supraventricular","avnrt","avrt"))]}),
  B("12.2 What is your management?",3,{tags:["ekg"],key:IMP("adenosine"),
   ans:"Stable: monitor, IV line, 12-lead EKG → <b>vagal maneuver</b> (modified Valsalva, carotid sinus massage ถ้าไม่มี bruit) → ไม่หาย: <b>adenosine 6 mg rapid IV push</b> ตามด้วย NSS flush 20 mL ทางเส้นใหญ่ใกล้หัวใจ → ไม่หายให้ <b>12 mg</b> → ยังไม่หาย: IV verapamil/diltiazem หรือ β-blocker · <b>Unstable</b> (hypotension, altered mental status, shock, ischemic chest pain, acute HF) → <b>synchronized cardioversion</b> · ระยะยาว: catheter ablation",
   exp:"Adenosine: บอกผู้ป่วยก่อนว่าจะแน่นอก หน้าแดงชั่วครู่ · ระวังใน asthma รุนแรง · ห้ามให้ใน pre-excited AF (WPW) · AHA ACLS 2020",
   pts:[P("Vagal maneuver first","vagal","valsalva","carotid"),CR(P("Adenosine 6 mg rapid IV push, then 12 mg","adenosine")),P("Rapid saline flush","flush","push"),P("Unstable → synchronized cardioversion","cardiover","synchron","shock")]})
 ),
 interp:"EKG: regular narrow QRS tachycardia ไม่มี P → PSVT → vagal maneuver แล้ว adenosine",
 summary:["PSVT: regular narrow QRS tachycardia ไม่เห็น P (AVNRT พบบ่อยสุด)","Stable: vagal maneuver → adenosine 6 → 12 mg rapid push + flush","Unstable: synchronized cardioversion","ระยะยาว: catheter ablation"]}),

/* ===== OSCE 13 ===== */
Co({page:2,orig:"13",topic:"skin",sub:"Skin infection",title:"Vesicular rash on the forehead — Tzanck smear",imgNote:NOIMG,
 stem:`A 60-year-old patient has a vesiculopapular rash on the right forehead. A photograph of the rash and a Tzanck smear are shown.<br>13.1 Describe the abnormality on the Tzanck smear.<br>13.2 What is the causative organism?<br>13.3 What is the diagnosis?`,
 gray:"13. 60 ปี versiculopapular rash at right forehead ให้ภาพ Tzanck อ่านความผิดปกติใน Tzanck + บอก organism + บอกชื่อโรค — Impression: herpes zoster opthamalcus",
 flag:NOIMG,
 parts:S(
  B("13.1 Describe the abnormality on the Tzanck smear.",2,{tags:["skin"],
   ans:"<b>Multinucleated giant cells</b>: นิวเคลียสหลายอันเบียดกัน (nuclear molding) chromatin ไปอยู่ขอบ (margination) นิวเคลียสใสแบบ ground glass ± <b>intranuclear inclusion</b> (Cowdry type A)",
   exp:"Tzanck smear: ขูดฐานตุ่มน้ำใหม่ ย้อม Giemsa/Wright · ให้ผลบวกทั้ง HSV และ VZV แยกกันไม่ได้ · ยืนยันด้วย PCR (ไวสุด) หรือ DFA",
   pts:[CR(P("Multinucleated giant cells","multinucleat","giant cell","หลายนิวเคลียส")),P("Nuclear molding / margination / intranuclear inclusion","molding","moulding","margina","inclusion","cowdry","ground.?glass")]}),
  B("13.2 What is the causative organism?",1,{tags:["skin"],
   ans:"<b>Varicella-zoster virus</b> (VZV, HHV-3) — Tzanck แยก HSV กับ VZV ไม่ได้ แต่การกระจายตาม dermatome V1 ข้างเดียวในผู้สูงอายุเข้ากับ VZV reactivation",
   exp:"VZV แฝงอยู่ใน sensory ganglion หลังเป็นอีสุกอีใส แล้ว reactivate เมื่ออายุมากหรือภูมิคุ้มกันต่ำ → ผื่นตุ่มน้ำบนฐานแดงตาม dermatome ข้างเดียว ไม่ข้ามเส้นกลาง · HSV มักเป็นกลุ่มตุ่มน้ำซ้ำที่เดิม (ริมฝีปาก อวัยวะเพศ)",
   pts:[CR(P("Varicella-zoster virus","varicella","zoster","\\bvzv\\b","hhv.?3"))]}),
  B("13.3 What is the diagnosis?",2,{tags:["skin"],key:IMP("herpes zoster opthamalcus"),
   ans:"<b>Herpes zoster ophthalmicus</b> (zoster ของ ophthalmic division ของ CN V1)",
   exp:"<b>Hutchinson sign</b> (ตุ่มที่ปลาย/ข้างจมูก — nasociliary branch) บอกความเสี่ยงตาอักเสบ → ส่งจักษุแพทย์ด่วน · รักษา: <b>acyclovir 800 mg วันละ 5 ครั้ง 7 วัน</b> หรือ valacyclovir 1 g วันละ 3 ครั้ง 7 วัน เริ่มภายใน 72 ชั่วโมง · ป้องกัน: recombinant zoster vaccine ในอายุ ≥ 50 ปี",
   pts:[CR(P("Herpes zoster ophthalmicus","ophthalmicus","opthalmicus","hzo","zoster.{0,15}(oph|opth|v1|ตา)")),P("Refer ophthalmology / antiviral (acyclovir, valacyclovir)","ophthalmolog","จักษุ","acyclovir","valacyclovir","hutchinson")]})
 ),
 interp:"ผื่นตุ่มน้ำตาม V1 + Tzanck เห็น multinucleated giant cells → VZV → herpes zoster ophthalmicus",
 summary:["Tzanck: multinucleated giant cells — HSV/VZV แยกไม่ได้ ยืนยัน PCR","ผื่นตาม dermatome V1 = herpes zoster ophthalmicus","Hutchinson sign → ส่งจักษุแพทย์","Acyclovir 800 mg 5 ครั้ง/วัน 7 วัน ภายใน 72 ชั่วโมง"]}),

/* ===== OSCE 14 ===== */
Co({page:2,orig:"14",topic:"lab",sub:"ABG",title:"Acute pyelonephritis with deep rapid breathing — ABG and electrolytes",
 stem:`A 20-year-old patient with acute pyelonephritis has Kussmaul breathing.<br>ABG (room air): pH 7.22, PaCO<sub>2</sub> 20 mmHg, HCO<sub>3</sub><sup>-</sup> 8 mmol/L, PaO<sub>2</sub> 102 mmHg<br>Serum electrolytes: Na 132, K 5.8, Cl 96, HCO<sub>3</sub><sup>-</sup> 8 mmol/L<br>BUN 28 mg/dL, creatinine 1.4 mg/dL, plasma glucose 480 mg/dL<br>14.1 Interpret the ABG and serum electrolytes.<br>14.2 What is the diagnosis?`,
 gray:"14. ผป. 20 ปี acute pyelonephritis with Kussmaul breathing ใน ABG + serum electrolyte แปลผลและ Dx. — Impression: Hyperglycemia HyperK Met. acido wide AG with compensated res. alkalo Dx. DKA",
 flag:"⚠ ไฟล์ไม่ให้ค่า ABG/electrolyte/glucose — ค่าทั้งหมด Claude แต่งให้เข้ากับ Impression (hyperglycemia, hyperK, wide AG metabolic acidosis with respiratory compensation, DKA)",
 opinion:"เห็นด้วยกับ Impression (DKA) · ผู้จดเขียน \"compensated res. alkalo\" — ที่ถูกคือ appropriate respiratory compensation (PaCO2 อยู่ในช่วง Winter's formula) ไม่ใช่ respiratory alkalosis แยกอีกภาวะ",
 parts:S(
  B("14.1 Interpret the ABG and serum electrolytes.",4,{tags:["lab"],key:IMP("Hyperglycemia HyperK Met. acido wide AG with compensated res. alkalo"),
   ans:"<b>Acidemia</b> (pH 7.22) + HCO<sub>3</sub><sup>-</sup> ต่ำ = <b>metabolic acidosis</b> · AG = 132 − (96 + 8) = <b>28 → high anion gap</b> · Winter's: expected PaCO<sub>2</sub> = 1.5 × 8 + 8 = 20 ± 2 → วัดได้ 20 = <b>appropriate respiratory compensation</b> · ΔAG/ΔHCO<sub>3</sub><sup>-</sup> = 16/16 = 1 → pure HAGMA · <b>hyperglycemia</b> 480 · <b>hyperkalemia</b> 5.8 · corrected Na = 132 + 1.6 × (480−100)/100 ≈ 138",
   exp:"Hyperkalemia ใน DKA เกิดจาก insulin deficiency + hyperosmolality ดึง K ออกนอกเซลล์ แต่ total body K พร่อง → K จะลดเร็วเมื่อให้ insulin",
   pts:[CR(P("High anion gap metabolic acidosis (AG 28)","anion gap","\\bag\\b","hagma","wide","high ag")),P("Appropriate respiratory compensation (Winter's formula)","winter","compensat","ชดเชย"),P("Hyperglycemia","hyperglyc","glucose","น้ำตาล"),P("Hyperkalemia","hyperkal","k.{0,3}5\\.8","โพแทสเซียมสูง"),P("Delta ratio ~1 / corrected sodium","delta","Δag","corrected")]}),
  B("14.2 What is the diagnosis?",2,{tags:["lab"],key:IMP("DKA"),
   ans:"<b>Diabetic ketoacidosis</b> (precipitated by acute pyelonephritis)",
   exp:"ยืนยัน ketone (serum β-hydroxybutyrate ≥ 3 mmol/L หรือ urine ketone) · รักษา (ADA consensus 2024): IV isotonic saline 1–1.5 L ในชั่วโมงแรก · <b>regular insulin IV 0.1 U/kg/h หลังยืนยัน K ≥ 3.5</b> · เติม K เมื่อ K &lt; 5.0–5.5 · เติม dextrose เมื่อ glucose &lt; 250 · รักษา pyelonephritis (urine culture + ceftriaxone) · ไม่ต้องให้ bicarbonate เว้น pH &lt; 7.0",
   pts:[CR(P("Diabetic ketoacidosis","\\bdka\\b","ketoacidosis","diabetic keto")),P("Precipitant: infection (pyelonephritis)","pyelo","infect","ติดเชื้อ")]})
 ),
 interp:"ABG + electrolytes: HAGMA with appropriate compensation + hyperglycemia + hyperK → DKA จากการติดเชื้อทางเดินปัสสาวะ",
 summary:["AG = Na − (Cl + HCO3) ปกติ ~12 · HAGMA + glucose สูง → DKA","Winter's formula: PaCO2 = 1.5 × HCO3 + 8 ± 2","DKA: K สูงจาก shift แต่ total body K พร่อง → ให้ insulin เมื่อ K ≥ 3.5","หา precipitant: infection พบบ่อยสุด"]}),

/* ===== OSCE 15 ===== */
Co({page:2,orig:"15",topic:"img",sub:"Bone/joint film",title:"Knee radiograph — describe and diagnose",imgNote:NOIMG,
 stem:`A knee radiograph is shown.<br>15.1 Describe the abnormalities.<br>15.2 What is the diagnosis?`,
 gray:"15. อ่าน film knee + Dx. — Impression: OA knee",
 flag:NOIMG+" · ไฟล์ไม่ให้ประวัติผู้ป่วย",
 parts:S(
  B("15.1 Describe the abnormalities.",3,{tags:["img"],
   ans:"<b>Asymmetric joint space narrowing</b> (มักที่ medial tibiofemoral compartment) · <b>marginal osteophytes</b> · <b>subchondral sclerosis</b> · <b>subchondral cysts</b> · ไม่มี erosion หรือ periarticular osteopenia",
   exp:"Kellgren–Lawrence grading 0–4 · ต่างจาก inflammatory arthritis (RA) ที่ joint space แคบสม่ำเสมอ periarticular osteopenia และ erosion",
   pts:[CR(P("Joint space narrowing (asymmetric, medial)","joint space","narrow","แคบ")),CR(P("Osteophytes","osteophyte","กระดูกงอก")),P("Subchondral sclerosis","sclerosis","subchondral"),P("Subchondral cysts","cyst")]}),
  B("15.2 What is the diagnosis?",2,{tags:["img"],key:IMP("OA knee"),
   ans:"<b>Osteoarthritis of the knee</b>",
   exp:"รักษา (ACR/AF 2019, OARSI 2019): ลดน้ำหนัก ออกกำลังกาย (quadriceps) · topical NSAIDs → oral NSAIDs ช่วงสั้น · intra-articular corticosteroid · total knee replacement ในรายรุนแรง",
   pts:[CR(P("Osteoarthritis of the knee","osteoarthrit","\\boa\\b","ข้อเข่าเสื่อม"))]})
 ),
 interp:"Film knee: joint space แคบไม่สมมาตร + osteophyte + subchondral sclerosis/cyst → OA knee",
 summary:["OA: asymmetric joint space narrowing, osteophyte, subchondral sclerosis, subchondral cyst","RA: uniform narrowing, periarticular osteopenia, erosion","OA knee: ลดน้ำหนัก ออกกำลังกาย topical NSAIDs ก่อน"]}),

/* ===== OSCE 16 ===== */
Co({page:2,orig:"16",topic:"lab",sub:"Ascites",title:"Cirrhosis with ascites — ascitic fluid analysis",
 stem:`A patient with cirrhosis has ascites. Diagnostic paracentesis is performed.<br>Ascitic fluid: turbid; WBC 8,000 cells/mm<sup>3</sup> (PMN 90%); total protein 2.4 g/dL; albumin 0.8 g/dL; glucose 20 mg/dL; LDH 650 U/L. Gram stain: mixed gram-positive and gram-negative organisms.<br>Serum: albumin 2.6 g/dL; LDH 220 U/L (upper limit of normal 250 U/L).<br>16.1 Describe your approach to interpreting the ascitic fluid.<br>16.2 What is this condition called?<br>16.3 What is the most likely cause?`,
 gray:"16. ตับแข็ง Ascites เจาะน้ำมาดู มีค่า lab ให้ + mixed infection เขียนวิธีการ Approach of ascites + เรียกภาวะนี้ว่าอะไร + เกิดจากสาเหตุใดได้มากที่สุด — Impression: SEcondary bacterial peritonitis",
 flag:"⚠ ไฟล์ไม่ให้ค่าแลป (บอกแค่ \"มีค่า lab ให้ + mixed infection\") — ค่าน้ำในท้องและ serum ทั้งหมด Claude แต่งให้เข้ากับ Impression",
 parts:S(
  B("16.1 Describe your approach to interpreting the ascitic fluid.",3,{tags:["lab"],
   ans:"<b>1) SAAG</b> = serum albumin − ascitic albumin = 2.6 − 0.8 = <b>1.8 g/dL (≥ 1.1) → portal hypertension</b> (เข้ากับ cirrhosis) · <b>2) Total protein</b> ช่วยแยก (cirrhosis มัก &lt; 2.5 · cardiac ascites ≥ 2.5) · <b>3) Cell count</b>: PMN = 8,000 × 0.9 = <b>7,200/mm<sup>3</sup> (≥ 250) → peritonitis</b> · <b>4) แยก SBP กับ secondary</b> ด้วย Runyon criteria (≥ 2 ใน 3): total protein &gt; 1 g/dL ✓, glucose &lt; 50 mg/dL ✓, LDH &gt; ULN ของ serum ✓ + Gram stain เชื้อหลายชนิด · <b>5) Gram stain/culture</b> (เพาะในขวด blood culture ข้างเตียง)",
   exp:"ตรวจอื่นตามข้อบ่งชี้: ascitic CEA &gt; 5 ng/mL หรือ ALP &gt; 240 U/L ชวนคิด perforation · cytology, ADA/AFB (TB), amylase (pancreatic), triglyceride (chylous)",
   pts:[CR(P("SAAG ≥ 1.1 = portal hypertension","saag","serum.?ascites albumin","1\\.8")),P("Total protein","total protein","protein"),CR(P("PMN ≥ 250/mm3 = peritonitis","pmn","neutrophil","250","7,?200")),P("Runyon criteria: protein > 1, glucose < 50, LDH > ULN","runyon","glucose","ldh"),P("Gram stain / culture","gram","culture","เพาะเชื้อ")]}),
  B("16.2 What is this condition called?",2,{tags:["lab"],key:IMP("SEcondary bacterial peritonitis"),
   ans:"<b>Secondary bacterial peritonitis</b> (ในผู้ป่วย cirrhosis with ascites)",
   exp:"SBP (spontaneous) = ติดเชื้อโดยไม่มีแหล่งในช่องท้อง มักเชื้อชนิดเดียว (E. coli, Klebsiella, streptococci) รักษาด้วย cefotaxime/ceftriaxone + albumin · secondary peritonitis = มีแหล่งติดเชื้อในช่องท้อง (ทะลุหรือฝี) เชื้อหลายชนิด ต้องผ่าตัด/ระบาย",
   pts:[CR(P("Secondary bacterial peritonitis","secondary","ทุติยภูมิ"))]}),
  B("16.3 What is the most likely cause?",2,{tags:["lab"],
   ans:"<b>Perforation of a hollow viscus</b> (เช่น perforated peptic ulcer, ลำไส้ทะลุ) — สาเหตุรองคือ intra-abdominal abscess/focus ที่ยังไม่ทะลุ",
   exp:"ต้องทำ <b>CT abdomen</b> ด่วน + <b>ปรึกษาศัลยแพทย์</b> + broad-spectrum antibiotic ครอบคลุม anaerobes (เช่น ceftriaxone + metronidazole หรือ piperacillin–tazobactam) · ถ้ารักษาเหมือน SBP อย่างเดียว อัตราตายสูงมาก (AASLD 2021 ascites guidance)",
   pts:[CR(P("Hollow viscus perforation","perforat","ทะลุ")),P("Next: CT abdomen + surgical consultation","\\bct\\b","surg","ศัลย")]})
 ),
 interp:"Ascitic fluid: SAAG สูง (portal HT) + PMN สูง + Runyon criteria ครบ + Gram stain mixed → secondary bacterial peritonitis จากอวัยวะกลวงทะลุ",
 summary:["SAAG ≥ 1.1 = portal hypertension","PMN ≥ 250/mm3 = peritonitis (SBP หรือ secondary)","Runyon: TP > 1, glucose < 50, LDH > ULN (≥ 2 ข้อ) + เชื้อหลายชนิด → secondary peritonitis","Secondary peritonitis: CT abdomen + ศัลยแพทย์ + ยาครอบคลุม anaerobes"]}),

/* ===== OSCE 17 ===== */
Co({page:2,orig:"17",topic:"lab",sub:"CSF",title:"Fever with neck stiffness — CSF cells and normal values",imgNote:NOIMG,
 stem:`A patient presents with fever and neck stiffness. A stained preparation of the CSF cells is shown.<br>17.1 Identify the cells in the CSF.<br>17.2 Give the normal adult values for CSF opening pressure, WBC, protein and glucose.<br>17.3 How would each of these values change in this patient (increase or decrease)?`,
 gray:"17. ไข้ + stiff neck positive อ่าน cell ใน CSF + บอกค่า normal ของ OP WBC protein sugar ใน CSF + แปลผล (increase/decrease) — Impression: -เจอแต่ neutrophils",
 flag:NOIMG,
 parts:S(
  B("17.1 Identify the cells in the CSF.",2,{tags:["lab"],key:IMP("เจอแต่ neutrophils"),
   ans:"พบแต่ <b>neutrophils</b> (polymorphonuclear cells นิวเคลียสหลายพู) → เข้าได้กับ <b>acute bacterial meningitis</b>",
   exp:"CSF ปกติไม่มี neutrophil · PMN เด่น = bacterial meningitis (ระยะแรกของ viral/TB อาจมี PMN ได้ชั่วคราว) · lymphocyte เด่น = viral, TB, fungal (cryptococcus) · ส่ง Gram stain, culture, latex/PCR ร่วมด้วย",
   pts:[CR(P("Neutrophils / PMN","neutrophil","pmn","polymorph","นิวโทรฟิล")),P("Suggests acute bacterial meningitis","bacterial","แบคทีเรีย")]}),
  B("17.2 Give the normal adult values for CSF opening pressure, WBC, protein and glucose.",2,{tags:["lab"],
   ans:"<b>Opening pressure</b> ~10–20 cmH<sub>2</sub>O (ท่านอนตะแคง; &gt; 25 ถือว่าสูง) · <b>WBC</b> 0–5 cells/µL เป็น mononuclear ไม่มี PMN · <b>Protein</b> 15–45 mg/dL · <b>Glucose</b> 45–80 mg/dL หรือ CSF/serum glucose ≥ 0.6",
   exp:"ค่าปกติอาจต่างกันเล็กน้อยตามตำรา/ห้องแลป · glucose ใน CSF ต้องเทียบกับ serum glucose ที่เจาะพร้อมกันเสมอ · LP ในท่านอนตะแคงงอตัว วัด opening pressure ก่อนเก็บน้ำ",
   pts:[P("Opening pressure ~10–20 cmH2O","opening","\\bop\\b","cmh2o"),P("WBC 0–5 cells/µL, mononuclear","wbc","0.?-.?5","mononuc","lymph"),P("Protein 15–45 mg/dL","protein","45"),P("Glucose 45–80 mg/dL or ratio ≥ 0.6","glucose","sugar","0\\.6","ratio")]}),
  B("17.3 How would each of these values change in this patient (increase or decrease)?",2,{tags:["lab"],
   ans:"Bacterial meningitis: <b>opening pressure ↑</b> (มัก 20–50) · <b>WBC ↑</b> (หลักร้อย–พัน, PMN เด่น) · <b>protein ↑</b> (มัก &gt; 100) · <b>glucose ↓</b> (&lt; 40 mg/dL, CSF/serum ≤ 0.4)",
   exp:"รักษาทันทีไม่รอผล: dexamethasone 0.15 mg/kg + <b>ceftriaxone 2 g IV q12h + vancomycin</b> (+ ampicillin ถ้าอายุ &gt; 50 ปีหรือภูมิคุ้มกันต่ำ) · ในไทยนึกถึง <i>S. suis</i> (กินหมูดิบ หูหนวก) · CT ก่อน LP ถ้ามี focal deficit, papilledema, ซึมมาก, ภูมิคุ้มกันต่ำ, ชักใหม่",
   pts:[P("Opening pressure increased","pressure.{0,20}(สูง|เพิ่ม|increas|↑)","op.{0,6}(สูง|เพิ่ม|increas|↑)"),P("WBC increased (PMN)","wbc.{0,20}(สูง|เพิ่ม|increas|↑)","pleocytosis"),P("Protein increased","protein.{0,20}(สูง|เพิ่ม|increas|↑)"),CR(P("Glucose decreased","(glucose|sugar).{0,20}(ต่ำ|ลด|decreas|↓|low)","hypoglycorrh"))]})
 ),
 interp:"CSF: neutrophils ล้วน + ไข้ + คอแข็ง → acute bacterial meningitis · ต้องจำค่าปกติและทิศทางที่เปลี่ยน",
 summary:["CSF ปกติ: OP 10–20 cmH2O, WBC 0–5 mononuclear, protein 15–45, glucose ≥ 0.6 ของ serum","Bacterial meningitis: OP ↑ WBC ↑ (PMN) protein ↑ glucose ↓","Empirical: dexamethasone + ceftriaxone + vancomycin (± ampicillin ถ้า > 50 ปี)"]}),

/* ===== CRQ 1 ===== */
Cq({page:2,orig:"CRQ 1",topic:"hx",sub:"Bleeding tendency",ex:1,title:"Prolonged menstrual bleeding with petechiae — history and laboratory plan",
 stem:`A 30-year-old woman has had menstrual periods lasting 10 days each cycle for 2 months. Petechiae are found on both legs.<br>1.1 Take further history.<br>1.2 What laboratory investigations would you send?`,
 gray:"CRQ 1. หญิง 30 ปี มีเมนส์ครั้งละ 10 วัน มา 2 เดือน ที่ขาสองข้างพบ petechiae ซักประวัติ ส่งแลปอะไรบ้าง — Impression: approach of hypermenorrhea, approach of bleeding disorder",
 flag:"ต้นฉบับเป็นข้อเขียน (CRQ) — จัด topic hx · บทผู้ป่วย (sp) Claude แต่ง (ไฟล์ไม่ให้คำตอบของผู้ป่วย) · sub \"Bleeding tendency\" Claude เพิ่มใหม่",
 sp:"(บทแต่งโดย Claude) หญิง 30 ปี พนักงานบริษัท · 2 เดือนนี้ประจำเดือนมานาน 10 วัน มามากกว่าเดิม ใช้ผ้าอนามัยวันละ 6–7 แผ่น มีลิ่มเลือด รอบเดือนยังมาทุก 28 วัน (เดิมมา 5 วัน) · ประจำเดือนครั้งล่าสุดเริ่ม 2 สัปดาห์ก่อน · มีแฟน ใช้ถุงยาง ไม่คิดว่าตั้งครรภ์ · 1 เดือนนี้มีจุดแดงที่ขาสองข้าง จ้ำเขียวง่าย เลือดออกตามไรฟันเวลาแปรงฟัน · ไม่มีเลือดกำเดา ไม่ถ่ายดำ ปัสสาวะไม่เป็นเลือด ไม่มีข้อบวม/ก้อนเลือดในกล้ามเนื้อ · เคยถอนฟันเมื่อ 3 ปีก่อน เลือดหยุดปกติ ไม่เคยผ่าตัด · ไม่มีไข้ น้ำหนักไม่ลด ไม่ปวดกระดูก · อ่อนเพลีย เหนื่อยง่ายขึ้นเล็กน้อย · ไม่มีผื่นแพ้แดด ไม่ปวดข้อ ไม่มีแผลในปาก ผมไม่ร่วง · ไม่ได้กินยาแก้ปวด/แอสไพริน/สมุนไพร/ยาละลายลิ่มเลือด · ไม่ดื่มเหล้า ไม่เคยรับเลือด ไม่มีรอยสัก · ครอบครัวไม่มีใครเลือดออกง่าย · ตรวจร่างกาย (ถ้าถาม): pale เล็กน้อย, petechiae ที่ขาสองข้าง, ไม่มีต่อมน้ำเหลืองโต ตับม้ามไม่โต",
 parts:S(
  B("1.1 Take further history.",6,{tags:["hx"],key:IMP("approach of hypermenorrhea · approach of bleeding disorder"),
   ans:"<b>Menstrual history</b>: รอบเดือน ระยะเวลา ปริมาณ (จำนวนผ้าอนามัย ลิ่มเลือด) เลือดออกนอกรอบ/หลังมีเพศสัมพันธ์ LMP <b>โอกาสตั้งครรภ์</b> การคุมกำเนิด<br><b>Bleeding pattern</b>: จ้ำเขียว เลือดออกไรฟัน กำเดา ถ่ายดำ ปัสสาวะเป็นเลือด (<b>mucocutaneous = platelet</b>) vs เลือดออกในข้อ/กล้ามเนื้อ (<b>deep = coagulation factor</b>) · เลือดออกผิดปกติหลังถอนฟัน/ผ่าตัด/คลอด · ประวัติครอบครัว<br><b>หาสาเหตุ</b>: ยา (aspirin, NSAIDs, anticoagulant, สมุนไพร) · อาการ SLE (ผื่น ปวดข้อ แผลในปาก ผมร่วง) · ไข้ น้ำหนักลด ปวดกระดูก ต่อมน้ำเหลืองโต (marrow infiltration/leukemia) · การติดเชื้อ (HIV, HCV ปัจจัยเสี่ยง) · โรคตับ alcohol · อาการไทรอยด์<br><b>ผลกระทบ</b>: อาการซีด เหนื่อย ใจสั่น",
   exp:"เลือดประจำเดือนออกมาก (heavy menstrual bleeding) ใช้ PALM-COEIN (FIGO 2018) — C = coagulopathy · petechiae ชี้ไปที่ <b>platelet disorder</b> (เกล็ดเลือดต่ำหรือทำงานผิดปกติ) ส่วน von Willebrand disease พบบ่อยสุดในกลุ่ม inherited bleeding disorder ที่มีประจำเดือนมาก",
   rubric:"ได้เต็ม = ประวัติประจำเดือน + แยก pattern เลือดออก platelet vs coagulation + หาสาเหตุ (ยา SLE marrow infection) + ประวัติครอบครัว",
   pts:[H("Menstrual history",25),P("Cycle, duration, amount (pads/clots), LMP","รอบเดือน","ผ้าอนามัย","pad","clot","ลิ่มเลือด","lmp","ประจำเดือนครั้งสุดท้าย"),P("Pregnancy possibility / contraception","ตั้งครรภ์","pregnan","คุมกำเนิด","contracept"),
    H("Bleeding pattern",35),CR(P("Other bleeding sites: gum, epistaxis, bruising, GI, urine","ไรฟัน","gum","กำเดา","epistaxis","จ้ำ","bruis","ถ่ายดำ","melena","ปัสสาวะเป็นเลือด")),P("Deep bleeding: hemarthrosis, muscle hematoma","เลือดออกในข้อ","ข้อบวม","hemarthro","กล้ามเนื้อ","hematoma"),P("Bleeding after dental extraction / surgery","ถอนฟัน","ผ่าตัด","dental","surgery"),P("Family history of bleeding","ครอบครัว","family"),
    H("Causes",30),CR(P("Drugs: aspirin, NSAIDs, anticoagulant, herbal","กินยา","ยาที่ใช้","aspirin","nsaid","warfarin","anticoag","สมุนไพร","herb")),P("SLE symptoms: rash, arthralgia, oral ulcer, hair loss","sle","ผื่น","ปวดข้อ","แผลในปาก","ผมร่วง","lupus"),P("B symptoms / bone pain / lymph nodes (marrow disease)","ไข้","น้ำหนักลด","weight loss","ปวดกระดูก","bone pain","ต่อมน้ำเหลือง","fever"),P("Infection risk (HIV, HCV), liver disease, alcohol","hiv","hcv","เพศสัมพันธ์","ตับ","alcohol","เหล้า"),
    H("Consequence",10),P("Anemia symptoms","ซีด","เหนื่อย","ใจสั่น","pale","fatigue","anemi")]}),
  B("1.2 What laboratory investigations would you send?",4,{tags:["hx"],
   ans:"<b>ขั้นแรก</b>: <b>CBC with platelet count + peripheral blood smear</b> · <b>PT/INR, aPTT</b> (± fibrinogen) · <b>urine pregnancy test</b> · iron studies/ferritin (ประเมินขาดเหล็ก)<br><b>ถ้าเกล็ดเลือดต่ำ (คิด ITP)</b>: HIV, HCV, HBsAg, ANA, H. pylori, TSH (± bone marrow ถ้า PBS ผิดปกติหรือมี B symptoms)<br><b>ถ้าเกล็ดเลือดและ PT/aPTT ปกติ</b>: von Willebrand panel (vWF:Ag, vWF activity, factor VIII), platelet function test<br><b>สาเหตุทางนรีเวช</b>: ultrasound อุ้งเชิงกราน (PALM)",
   exp:"Isolated thrombocytopenia + PBS ปกติ = ITP เป็น diagnosis of exclusion · ASH 2019 ITP guideline แนะนำตรวจ HIV, HCV ทุกราย · ITP: platelet &lt; 30,000 หรือมีเลือดออก → prednisolone 1 mg/kg หรือ dexamethasone 40 mg × 4 วัน",
   pts:[CR(P("CBC with platelet count and PBS","\\bcbc\\b","platelet","เกล็ดเลือด","\\bpbs\\b","smear")),P("PT/INR and aPTT","\\bpt\\b","inr","aptt","ptt","coag"),P("Pregnancy test","pregnan","\\bupt\\b","hcg","ตั้งครรภ์"),P("Secondary ITP work-up: HIV, HCV, ANA","hiv","hcv","\\bana\\b","h\\.? ?pylori","tsh"),P("von Willebrand panel / platelet function","von willebrand","vwf","vwd","platelet function","\\bpfa"),P("Iron studies / pelvic ultrasound","ferritin","iron","เหล็ก","ultrasound","อัลตรา")]})
 ),
 interp:"Approach heavy menstrual bleeding + petechiae: แยก platelet vs coagulation disorder, หาสาเหตุรอง แล้วส่ง CBC/PBS, PT/aPTT และตรวจตามผล",
 summary:["Petechiae + เลือดออกตามเยื่อบุ = platelet disorder · เลือดออกในข้อ/กล้ามเนื้อ = coagulation factor","ขั้นแรก: CBC + platelet + PBS, PT/INR, aPTT, pregnancy test","เกล็ดเลือดต่ำ: แยก secondary ITP (HIV, HCV, SLE, ยา, marrow)","เกล็ดเลือดปกติ + ประจำเดือนมาก → von Willebrand disease"]}),

/* ===== CRQ 2 ===== */
Cq({page:2,orig:"CRQ 2",topic:"hx",sub:"Dyspnea",ex:1,title:"Acute dyspnea and hypotension during an intravenous antibiotic infusion",
 stem:`A patient with a urinary tract infection receives intravenous ciprofloxacin. Ten minutes after the infusion starts, the patient develops dyspnea with expiratory wheezing. SpO<sub>2</sub> is 90% and the blood pressure drops.<br>2.1 What is the diagnosis? Give your reasons.<br>2.2 Describe the treatment.<br>2.3 If the patient still needs to stay in hospital, how would you prevent this condition from recurring?`,
 gray:"CRQ 2. UTI ได้ ciprofloxacin I.V. เกิดเหนื่อยใน 10 min. หลังได้ มี expiratory wheezing SpO2 90% BP drop ให้ Dx. + บอกเหตุผล + ให้การรักษา + บอกแนวทางการป้องกันไม่ให้เกิดภาวะนี้ หากผู้ป่วยยังต้องอยู่ในโรงพยาบาล (บรรทัดสุดท้ายอยู่บนหัวหน้า 3) — Impression: -anaphylaxis -epinephrine -drug allergy precaution",
 flag:"ต้นฉบับเป็นข้อเขียน (CRQ) เรื่องการวินิจฉัยและรักษา — ไม่มี topic ที่ตรง จึงจัด hx/Dyspnea · บท sp (ค่า vital signs, ผื่น) Claude แต่ง",
 sp:"(บทแต่งโดย Claude — ให้ผู้คุมบอกเมื่อผู้สอบถาม) หญิง 45 ปี admit ด้วย acute pyelonephritis ได้ ciprofloxacin IV เป็นครั้งแรก · 10 นาทีหลังเริ่มยา แน่นหน้าอก หายใจไม่อิ่ม คันตามตัว · ตรวจ: ซึมลงเล็กน้อย, BP 78/40 mmHg, HR 128/min, RR 30/min, SpO2 90% room air · มีผื่นลมพิษทั่วลำตัว ปากบวม · ฟังปอด expiratory wheeze ทั้งสองข้าง · ไม่เคยแพ้ยามาก่อน ไม่มีโรคหอบหืด ไม่ได้ใช้ β-blocker",
 parts:S(
  B("2.1 What is the diagnosis? Give your reasons.",3,{tags:["hx"],key:IMP("anaphylaxis"),
   ans:"<b>Anaphylaxis (anaphylactic shock) จากยา ciprofloxacin</b> · เหตุผล: อาการเกิด<b>เฉียบพลันภายในนาทีหลังได้สารที่น่าจะเป็นสิ่งก่อภูมิแพ้</b> + <b>ระบบหายใจ</b> (เหนื่อย wheeze SpO2 90%) + <b>ระบบไหลเวียน</b> (BP ตก) — เข้าเกณฑ์ WAO 2020 (ไม่จำเป็นต้องมีผื่น)",
   exp:"เกณฑ์ WAO 2020: (1) อาการผิวหนัง/เยื่อบุเฉียบพลัน + อย่างน้อย 1 ใน หายใจลำบาก, BP ต่ำ/อวัยวะขาดเลือด, อาการ GI รุนแรง หรือ (2) หลังสัมผัสสิ่งก่อภูมิแพ้ที่รู้จัก มี hypotension หรือ bronchospasm หรือ laryngeal involvement เฉียบพลัน · ddx: vasovagal, asthma attack, septic shock (ไม่เกิดภายใน 10 นาทีหลังยา)",
   pts:[CR(P("Anaphylaxis / anaphylactic shock","anaphyla","แพ้รุนแรง")),P("Acute onset minutes after drug exposure","10 min","นาที","onset","หลังได้ยา","exposure","เฉียบพลัน"),P("Respiratory involvement (wheeze, hypoxemia) + hypotension","wheez","หายใจ","spo2","hypotens","bp","ความดัน")]}),
  B("2.2 Describe the treatment.",4,{tags:["hx"],key:IMP("epinephrine"),
   ans:"<b>หยุดยา ciprofloxacin ทันที</b> + เรียกความช่วยเหลือ · ประเมิน ABC · <b>Epinephrine 1 mg/mL (1:1,000) 0.5 mg IM</b> ที่ต้นขาด้านข้าง (0.01 mg/kg สูงสุด 0.5 mg) ซ้ำได้ทุก 5–15 นาที · ให้นอนราบยกขา · <b>O2 high flow</b> · เปิดเส้นใหญ่ ให้ <b>IV NSS bolus 1–2 L</b> อย่างเร็ว · bronchospasm ไม่ดีขึ้น → nebulized salbutamol · adjunct: H1 antihistamine (chlorpheniramine 10 mg IV) ± H2 blocker, hydrocortisone 200 mg IV (ไม่ใช่ยาหลัก) · ไม่ตอบสนองหลัง IM 2 ครั้ง → epinephrine IV infusion · ใช้ β-blocker → glucagon · <b>monitor ≥ 6–12 ชั่วโมง</b> (biphasic reaction)",
   exp:"Epinephrine IM เป็นยาเดียวที่ลดอัตราตาย ให้ช้าเป็นปัจจัยเสี่ยงเสียชีวิต · antihistamine และ steroid ไม่แก้ airway obstruction หรือ shock (WAO 2020, Resuscitation Council UK 2021)",
   rubric:"ไม่ให้ epinephrine หรือให้ทาง IV bolus เป็นยาแรกนอกห้อง resuscitation = ขาดข้อสำคัญ",
   pts:[H("Immediate",20),P("Stop the drug, call for help, ABC","หยุดยา","stop","off","abc","airway"),H("Epinephrine",45),CR(P("IM epinephrine 0.5 mg (1:1,000) anterolateral thigh, repeat q5–15 min","epinephrine","adrenaline","อะดรีนาลีน")),P("Route IM, dose 0.5 mg","\\bim\\b","intramus","0\\.5","ต้นขา","thigh"),H("Supportive",35),P("High-flow O2","oxygen","\\bo2\\b","ออกซิเจน"),P("IV fluid bolus (NSS)","nss","fluid","สารน้ำ","saline","bolus"),P("Adjuncts: bronchodilator, antihistamine, steroid; observe for biphasic reaction","salbutamol","antihistamin","chlorphen","hydrocort","steroid","biphasic","observe","สังเกต")]}),
  B("2.3 If the patient still needs to stay in hospital, how would you prevent this condition from recurring?",3,{tags:["hx"],key:IMP("drug allergy precaution"),
   ans:"<b>Drug allergy precaution</b>: บันทึกการแพ้ยา (ชื่อยา อาการ ความรุนแรง) ในเวชระเบียน/ระบบคอมพิวเตอร์ ติดป้ายและสายรัดข้อมือแพ้ยา แจ้งพยาบาล/เภสัชกร · <b>หลีกเลี่ยง fluoroquinolone ทั้งกลุ่ม</b> · เปลี่ยนยารักษา UTI เป็นกลุ่มอื่นตามผลเพาะเชื้อ (เช่น ceftriaxone) · แจ้งผู้ป่วยและให้<b>บัตรแพ้ยา</b> · รายงาน ADR ต่อศูนย์เฝ้าระวัง · ถ้าจำเป็นต้องใช้ยานี้จริง → ปรึกษา allergist ทำ drug desensitization",
   exp:"ผู้ป่วยที่เคย anaphylaxis ต้องได้รับการให้ความรู้และแผนปฏิบัติ (± epinephrine auto-injector ถ้าสาเหตุเลี่ยงยาก) · fluoroquinolone มี cross-reactivity ภายในกลุ่มได้",
   pts:[CR(P("Record allergy in chart, allergy wristband/alert","บันทึก","record","เวชระเบียน","สายรัด","wristband","ป้าย","alert","label")),P("Avoid ciprofloxacin and other fluoroquinolones; switch antibiotic class","fluoroquinolone","quinolone","เลี่ยง","avoid","เปลี่ยนยา","ceftriaxone"),P("Patient education and drug allergy card","บัตรแพ้ยา","allergy card","แจ้งผู้ป่วย","educat"),P("Report ADR / desensitization if essential","\\badr\\b","รายงาน","desensit")]})
 ),
 interp:"เหนื่อย wheeze SpO2 ต่ำ BP ตก ภายใน 10 นาทีหลังยา IV = anaphylaxis → IM epinephrine แล้วป้องกันด้วยระบบบันทึกแพ้ยา",
 summary:["Anaphylaxis: อาการเฉียบพลันหลังสัมผัสสิ่งก่อภูมิแพ้ + ระบบหายใจหรือไหลเวียน (ผื่นไม่จำเป็น)","ยาแรก: epinephrine 1:1,000 0.5 mg IM ต้นขา ซ้ำทุก 5–15 นาที","ร่วมกับ O2, IV fluid bolus, นอนราบยกขา · antihistamine/steroid เป็นแค่ adjunct","ป้องกัน: บันทึกแพ้ยา สายรัดข้อมือ บัตรแพ้ยา เลี่ยงยาทั้งกลุ่ม"]}),

/* ===== CRQ 3 ===== */
Cq({page:3,orig:"CRQ 3",topic:"hx",sub:"Edema",ex:1,title:"Known ischemic cardiomyopathy with worsening dyspnea and swelling",
 stem:`A 65-year-old man with hypertension, diabetes, dyslipidemia and ischemic cardiomyopathy, status post coronary stenting, presents with dyspnea and swelling for 1 week. Physical examination shows pitting edema 3+ and fine crepitation in both lungs.<br>3.1 Name this condition.<br>3.2 Take a history to find the cause of this condition.`,
 gray:"CRQ 3. ชาย 65 ปี เป็น HT DM DLP ischemic cardiomiopathy ใส่ stent มาด้วยเหนื่อย บวม 1 wk. ตรวจร่างกายมี pitting edema 3+ fine crep. both lung ให้บอกชื่อภาวะ + ซักประวัติหาสาเหตุของภาวะนั้น — Impression: -acute decompensated biventricular HF -approach cause of HF",
 flag:"ต้นฉบับเป็นข้อเขียน (CRQ) — จัด topic hx · บทผู้ป่วย (sp) Claude แต่ง",
 sp:"(บทแต่งโดย Claude) ชาย 65 ปี · 1 สัปดาห์ก่อนเหนื่อยมากขึ้น เดินได้แค่ 20 เมตร นอนราบไม่ได้ต้องหนุนหมอน 3 ใบ ตื่นมาหอบกลางดึก ขาบวมสองข้าง น้ำหนักขึ้น 4 kg · ไม่เจ็บแน่นหน้าอก ไม่ใจสั่น ไม่มีไข้ ไม่ไอ ปัสสาวะไม่แสบขัด · 2 สัปดาห์ก่อนปวดเข่า ซื้อยาแก้ปวด diclofenac กินทุกวัน · ไปงานบุญกินอาหารเค็ม น้ำปลา ของหมักดอง · ยาขับปัสสาวะ (furosemide) หมดมา 5 วัน ยังไม่ได้ไปรับ · กินยาต้านเกล็ดเลือด (aspirin + clopidogrel) สม่ำเสมอ · ยาเบาหวานเพิ่ง\"หมอคลินิกให้ pioglitazone\" 1 เดือน · ไม่ดื่มเหล้า ไม่สูบบุหรี่ · ปัสสาวะออกลดลงเล็กน้อย · ไม่ได้ถ่ายดำ",
 parts:S(
  B("3.1 Name this condition.",2,{tags:["hx"],key:IMP("acute decompensated biventricular HF"),
   ans:"<b>Acute decompensated heart failure</b> (acute on chronic HF) แบบ <b>biventricular</b> — left-sided (dyspnea, fine crepitation = pulmonary congestion) + right-sided (pitting edema) · hemodynamic profile น่าจะเป็น <b>warm and wet</b>",
   exp:"ประเมิน profile: congestion (wet/dry) × perfusion (warm/cold) · warm-wet → IV loop diuretic (ขนาด IV ≥ ขนาดกินเดิม 1–2.5 เท่า) + vasodilator ถ้า BP สูง · ESC HF 2021/2023 update",
   pts:[CR(P("Acute decompensated heart failure","decompensat","adhf","acute.{0,15}heart failure","acute.{0,6}hf","หัวใจล้มเหลว")),P("Biventricular (left + right-sided)","biventric","both.?sided","left.{0,20}right","ซ้าย.{0,10}ขวา")]}),
  B("3.2 Take a history to find the cause of this condition.",6,{tags:["hx"],key:IMP("approach cause of HF"),
   ans:"<b>ความรุนแรงปัจจุบัน</b>: exercise tolerance (NYHA), orthopnea, PND, น้ำหนักขึ้น ปัสสาวะออก<br><b>Precipitating factors</b>: <ul><li><b>Ischemia/ACS</b>: เจ็บแน่นอก (stent thrombosis) — กินยาต้านเกล็ดเลือดสม่ำเสมอหรือไม่</li><li><b>Arrhythmia</b>: ใจสั่น (AF)</li><li><b>Non-adherence</b>: ขาดยา (diuretic, GDMT) · <b>อาหารเค็ม ดื่มน้ำมาก</b></li><li><b>ยา</b>: NSAIDs, pioglitazone (TZD), non-DHP CCB, steroid, สมุนไพร</li><li><b>Infection</b>: ไข้ ไอ ปัสสาวะแสบขัด</li><li><b>Uncontrolled HT</b></li><li>อื่น ๆ: ซีด/เลือดออก, ไทรอยด์, ไตเสื่อม (ปัสสาวะลด), alcohol, PE</li></ul>",
   exp:"สาเหตุกระตุ้นที่พบบ่อยของ ADHF: ACS, arrhythmia (AF), infection, uncontrolled HT, non-adherence ต่อยาและเกลือ, ยาที่คั่งเกลือ/กดหัวใจ · ต้องถามทุกข้อเพราะรักษาได้",
   rubric:"ได้เต็ม = ถามครบ ischemia, arrhythmia, adherence ยา + เกลือ/น้ำ, ยาที่ทำให้แย่ลง, infection, HT · ไม่ถามเจ็บหน้าอก (ACS) = ขาดข้อสำคัญ",
   pts:[H("Current severity",15),P("Exercise tolerance, orthopnea, PND, weight gain","เดินได้","exercise","orthopnea","นอนราบ","pnd","ตื่น","น้ำหนัก","weight"),
    H("Precipitating factors",85),CR(P("Chest pain (ACS / stent thrombosis), antiplatelet adherence","เจ็บ","แน่นหน้าอก","chest pain","acs","antiplatelet","clopidogrel","aspirin")),P("Palpitation (arrhythmia)","ใจสั่น","palpita","arrhythm","\\baf\\b"),CR(P("Medication non-adherence (diuretic, GDMT)","ขาดยา","กินยา","adheren","complian","furosemide","diuretic")),P("Salt and fluid intake","เค็ม","salt","เกลือ","ดื่มน้ำ","fluid"),P("Drugs: NSAIDs, TZD, CCB, steroid, herbal","nsaid","diclofenac","ยาแก้ปวด","pioglitazone","tzd","สมุนไพร","steroid"),P("Infection: fever, cough, dysuria","ไข้","fever","ไอ","cough","แสบขัด","infect"),P("Uncontrolled BP, anemia/bleeding, renal function, alcohol","ความดัน","bp","ซีด","ถ่ายดำ","ปัสสาวะออก","alcohol","เหล้า")]})
 ),
 interp:"ADHF ในผู้ป่วย ischemic cardiomyopathy: บอกภาวะ แล้วซักหา precipitating factors ที่แก้ได้",
 summary:["ADHF: congestion ทั้ง left (crepitation) และ right (edema) → warm-wet → IV loop diuretic","Precipitants: ACS, arrhythmia, infection, uncontrolled HT, ขาดยา, เกลือ/น้ำ, ยา NSAIDs/TZD/non-DHP CCB","ทุก ADHF ต้องหา ischemia (EKG + troponin)"]}),

/* ===== CRQ 4 ===== */
Cq({page:3,orig:"CRQ 4",topic:"hx",sub:"Chronic cough",ex:1,title:"Dry cough for 2 months with a normal chest radiograph",
 seen:"คล้าย SI127 Ro405–408 CRQ 2 (ไอแห้ง CXR ปกติ ซักประวัติ + ddx 4 โรค)",
 stem:`A 60-year-old man has had a dry cough for 2 months. There is no hemoptysis and no fever. He does not smoke. Sputum AFB is negative and the chest radiograph is normal.<br>4.1 Take further history.<br>4.2 Give 4 differential diagnoses.`,
 gray:"CRQ 4. ช 60 ปี ไอแห้ง 2 เดือน ไม่มีเลือด ไม่ไข้ ไม่สูบบุหรี่ sputum AFB neg CXR normal ซักประวัติ + Dx. 4 โรค — Impression: approach of chronic cough",
 flag:"ต้นฉบับเป็นข้อเขียน (CRQ) — จัด topic hx · บทผู้ป่วย (sp) Claude แต่ง",
 sp:"(บทแต่งโดย Claude) ชาย 60 ปี ข้าราชการเกษียณ · ไอแห้ง ๆ คันคอ มา 2 เดือน ไอทั้งวัน ไม่ได้มากเฉพาะกลางคืน · เป็นความดันสูง หมอเปลี่ยนยาเป็น enalapril เมื่อ 3 เดือนก่อน · ไม่มีเสียงหวีด ไม่แน่นหน้าอก ไม่เคยเป็นหอบหืด/ภูมิแพ้ · ไม่มีน้ำมูกไหลลงคอ ไม่คัดจมูก · ไม่มีแสบร้อนกลางอก ไม่เรอเปรี้ยว · ก่อนไอไม่ได้เป็นหวัด · เสียงไม่แหบ กลืนปกติ น้ำหนักไม่ลด ไม่มีเหงื่อออกกลางคืน · ไม่มีคนใกล้ชิดเป็นวัณโรค · ไม่มีสัตว์เลี้ยง ไม่เคยทำงานสัมผัสฝุ่น/สารเคมี · นอนราบได้ ไม่เหนื่อย ขาไม่บวม",
 parts:S(
  B("4.1 Take further history.",6,{tags:["hx"],key:IMP("approach of chronic cough"),
   ans:"<b>ลักษณะไอ</b>: เวลา (กลางคืน/เช้า) ตัวกระตุ้น (อากาศเย็น ฝุ่น ควัน ออกกำลังกาย) · <b>ยา</b>: <b>ACE inhibitor</b> (enalapril ฯลฯ) และเวลาที่เริ่มยา, β-blocker<br><b>Asthma</b>: wheeze แน่นหน้าอก atopy ประวัติครอบครัว<br><b>UACS</b>: น้ำมูก คัดจมูก น้ำมูกไหลลงคอ กระแอมบ่อย<br><b>GERD</b>: แสบร้อนกลางอก เรอเปรี้ยว อาการหลังกินอิ่ม/นอนราบ เสียงแหบตอนเช้า<br><b>Post-infectious</b>: หวัดนำมาก่อน<br><b>Red flags/อื่น ๆ</b>: น้ำหนักลด เหงื่อออกกลางคืน เสียงแหบ กลืนลำบาก/สำลัก · เหนื่อย orthopnea ขาบวม (HF) · contact TB · อาชีพ/สิ่งแวดล้อม สัตว์เลี้ยง ควันบุหรี่มือสอง",
   exp:"Chronic cough (&gt; 8 สัปดาห์) ในผู้ไม่สูบบุหรี่ CXR ปกติ: สาเหตุหลัก UACS, asthma, NAEB, GERD และ <b>ACEI</b> (ไอแห้งพบ 5–35% เกิดได้ตั้งแต่ไม่กี่ชั่วโมงถึงหลายเดือนหลังเริ่มยา หายภายใน 1–4 สัปดาห์หลังหยุด บางรายนานถึง 3 เดือน) · CHEST 2018",
   rubric:"ได้เต็ม = ถามยา ACEI + ครอบคลุม asthma, UACS, GERD, post-infectious + red flags · ไม่ถามประวัติยาในผู้ป่วยอายุ 60 = ขาดข้อสำคัญ",
   pts:[H("Medication",25),CR(P("ACE inhibitor use and timing","acei","ace inhib","enalapril","pril","ยาความดัน","ยาที่ใช้")),
    H("Asthma",15),P("Wheeze, chest tightness, triggers, atopy","wheez","หวีด","วี้ด","แน่นหน้าอก","atop","ภูมิแพ้","กระตุ้น","trigger","อากาศเย็น"),
    H("UACS",15),P("Rhinorrhea, post-nasal drip, throat clearing","น้ำมูก","ไหลลงคอ","post.?nasal","กระแอม","คัดจมูก","sinus"),
    H("GERD",15),P("Heartburn, acid regurgitation","แสบร้อน","heartburn","เรอเปรี้ยว","reflux","gerd"),
    H("Others / red flags",30),P("Preceding URI","หวัด","\\buri\\b","ติดเชื้อ"),P("Weight loss, night sweats, hoarseness, dysphagia","น้ำหนักลด","weight","เหงื่อ","เสียงแหบ","hoarse","กลืน","สำลัก"),P("HF symptoms: dyspnea, orthopnea, edema","เหนื่อย","orthopnea","นอนราบ","ขาบวม","edema"),P("Environment: occupation, pets, second-hand smoke, TB contact","อาชีพ","สัตว์เลี้ยง","pet","มือสอง","วัณโรค","\\btb\\b","ฝุ่น")]}),
  B("4.2 Give 4 differential diagnoses.",4,{tags:["hx"],
   ans:"<ul><li><b>ACE inhibitor–induced cough</b> (ถ้าใช้ยา)</li><li><b>Upper airway cough syndrome</b></li><li><b>Asthma</b> (cough-variant)</li><li><b>Gastroesophageal reflux disease</b></li><li><b>Non-asthmatic eosinophilic bronchitis</b></li></ul>",
   exp:"ถ้าใช้ ACEI → หยุดยา เปลี่ยนเป็น ARB · ถ้าไม่ใช่ ให้ empirical treatment ตามลำดับ (antihistamine/decongestant หรือ nasal steroid, ICS, PPI) และตรวจ spirometry ± methacholine, FeNO · ผู้ป่วยอายุ 60 ไอนาน → ถ้าไม่ดีขึ้นพิจารณา CT chest/bronchoscopy (มะเร็งในหลอดลมใหญ่ CXR อาจปกติ)",
   pts:[CR(G("Differential diagnoses (4)",4,P("ACEI-induced cough","acei","ace inhib","enalapril"),P("Upper airway cough syndrome / post-nasal drip","uacs","upper airway","post.?nasal","rhinitis","sinusitis"),P("Asthma / cough-variant asthma","asthma","หอบหืด","\\bcva\\b"),P("GERD","gerd","reflux","กรดไหลย้อน"),P("Non-asthmatic eosinophilic bronchitis","eosinophilic bronch","naeb"),P("Post-infectious cough","post.?infect","pertussis","หลังติดเชื้อ")))]})
 ),
 interp:"Approach chronic cough ผู้สูงอายุไม่สูบบุหรี่ CXR ปกติ: ACEI, UACS, asthma, GERD, NAEB",
 summary:["Chronic cough > 8 สัปดาห์ + ไม่สูบบุหรี่ + CXR ปกติ → UACS, asthma, NAEB, GERD","ถามยา ACEI ทุกราย — ไอเกิดได้หลายเดือนหลังเริ่มยา หยุดแล้วหายใน 1–4 สัปดาห์","Red flags: น้ำหนักลด เสียงแหบ กลืนลำบาก hemoptysis → CT chest/bronchoscopy"]}),

/* ===== CRQ 5 ===== */
Cq({page:3,orig:"CRQ 5",topic:"micro",sub:"UA",title:"Bloody, foamy urine with skin rashes — diagnosis and expected urinalysis",
 stem:`A 35-year-old woman has had bloody and foamy urine for 2 weeks. She has a malar rash and a discoid rash.<br>5.1 What is the most likely diagnosis?<br>5.2 What would you expect to find in the urine?`,
 gray:"CRQ 5. ญ อายุ 35 ปี ปัสสาวะเป็นเลือด + ฟอง 2 wk. มี malar rash + discoid rash ให้ Dx. + คิดว่าจะเจออะไรใน Urine — Impression: lupus nephritis",
 flag:"ต้นฉบับเป็นข้อเขียน (CRQ) ไม่มีรูป — จัด topic micro/UA เพราะถามสิ่งที่คาดว่าจะพบในปัสสาวะ",
 parts:S(
  B("5.1 What is the most likely diagnosis?",2,{tags:["micro"],key:IMP("lupus nephritis"),
   ans:"<b>Systemic lupus erythematosus with lupus nephritis</b>",
   exp:"Malar rash + discoid rash + hematuria/proteinuria (glomerular disease) ในหญิงวัยเจริญพันธุ์ = SLE (EULAR/ACR 2019: ANA ≥ 1:80 เป็น entry criterion) · ส่ง ANA, anti-dsDNA, C3/C4, UPCR, creatinine และ <b>kidney biopsy</b> แบ่ง ISN/RPS class (class III/IV ต้องให้ induction ด้วย steroid + mycophenolate หรือ cyclophosphamide — KDIGO 2024)",
   pts:[CR(P("Lupus nephritis / SLE","lupus","\\bsle\\b"))]}),
  B("5.2 What would you expect to find in the urine?",3,{tags:["micro"],
   ans:"<b>Proteinuria</b> (ฟอง; dipstick บวก, UPCR &gt; 0.5 g/g) · <b>hematuria with dysmorphic RBCs</b> (acanthocytes) · <b>RBC casts</b> · ± WBC/WBC casts (sterile pyuria) · ± granular casts · ถ้า nephrotic: lipiduria (oval fat bodies, fatty casts) — ภาพรวม active (\"telescoped\") urine sediment",
   exp:"RBC cast = glomerulonephritis แน่นอน · Proteinuria ≥ 0.5 g/วัน หรือ RBC cast = ข้อบ่งชี้ทำ kidney biopsy ในผู้ป่วย SLE",
   pts:[CR(P("Proteinuria","protein","โปรตีน","albumin")),CR(P("Dysmorphic RBC / glomerular hematuria","dysmorph","acanthocyt","glomerular","rbc")),P("RBC casts","rbc cast","cast"),P("WBC / sterile pyuria / lipiduria","wbc","pyuria","oval fat","fatty cast","lipid")]})
 ),
 interp:"หญิงสาว malar + discoid rash + ปัสสาวะเป็นเลือดและฟอง → lupus nephritis → UA: proteinuria, dysmorphic RBC, RBC cast",
 summary:["Malar + discoid rash + glomerular disease = SLE with lupus nephritis","UA: proteinuria + dysmorphic RBC + RBC cast (± WBC cast)","ส่ง ANA, anti-dsDNA, C3/C4, UPCR → kidney biopsy แบ่ง class"]}),

/* ===== CRQ 6 ===== */
Cq({page:3,orig:"CRQ 6",topic:"lab",sub:"Hb typing",title:"Thalassemia screening in a couple — Hb typing",
 stem:`A couple has the following Hb typing results.<br><b>Husband</b>: Hb A 95%, Hb A<sub>2</sub> 5%; not anemic.<br><b>Wife</b>: Hb A 96%, Hb A<sub>2</sub> 4%; not anemic.<br>6.1 What are the genotypes of the husband and the wife?<br>6.2 What is the chance that their child will inherit thalassemia?`,
 gray:"CRQ 6. ผัว HbA 95% HbA2 5% ไม่ซีด เมีย HbA 96% HbA2 4% ไม่ซีด บอก Genotype ผัว เมีย และโอกาสลูกได้พันธุกรรม Thalassemia — Impression: -beta thal trait and beta thal trait",
 flag:"ไฟล์ไม่ให้ CBC (MCV/MCH) — ตอบจาก Hb typing ตามที่โจทย์ให้",
 parts:S(
  B("6.1 What are the genotypes of the husband and the wife?",3,{tags:["lab"],key:IMP("beta thal trait and beta thal trait"),
   ans:"ทั้งคู่เป็น <b>β-thalassemia trait</b> (heterozygous): <b>β<sup>A</sup>/β<sup>thal</sup></b> (β<sup>0</sup> หรือ β<sup>+</sup> — แยกต้องตรวจ DNA) · เหตุผล: Hb A<sub>2</sub> &gt; 3.5% (5% และ 4%) ไม่มี Hb E หรือ Hb F สูง ไม่ซีด",
   exp:"Hb A<sub>2</sub> ปกติ ~2.5–3.5% · β-thal trait มัก 4–8% ร่วมกับ MCV/MCH ต่ำ · ขาดเหล็กร่วมอาจกด A<sub>2</sub> ลง · Hb typing ไม่บอก α-thal 1 trait ที่อาจมีร่วม → ส่ง PCR α-thal 1 (SEA deletion) ถ้า MCV/MCH ต่ำไม่สมสัดส่วน",
   pts:[CR(P("Husband: β-thalassemia trait","beta.?thal","β.?thal","b.?thal","เบต้า","เบตา")),P("Wife: β-thalassemia trait (both carriers)","ทั้งคู่","both","wife","ภรรยา","เมีย","trait"),P("Reason: Hb A2 > 3.5%","a2","3\\.5")]}),
  B("6.2 What is the chance that their child will inherit thalassemia?",3,{tags:["lab"],
   ans:"Autosomal recessive — แต่ละครรภ์: <b>25% ปกติ</b> · <b>50% β-thal trait</b> · <b>25% homozygous β-thalassemia</b> (β-thal major/intermedia ขึ้นกับ β<sup>0</sup>/β<sup>+</sup>) → <b>คู่เสี่ยง</b> → genetic counseling + prenatal diagnosis",
   exp:"Homozygous β<sup>0</sup>-thal (thalassemia major) เป็น 1 ใน 3 โรครุนแรงเป้าหมายของโครงการควบคุมธาลัสซีเมียไทย (ร่วมกับ Hb Bart's hydrops fetalis และ β<sup>0</sup>-thal/Hb E) · prenatal diagnosis: CVS, amniocentesis, cordocentesis",
   rubric:"ได้เต็ม = ครบ 25/50/25 + บอกว่าเป็นคู่เสี่ยงต่อ homozygous β-thal",
   pts:[P("Normal 25%","ปกติ","normal"),P("β-thal trait 50%","50","trait","พาหะ"),CR(P("Homozygous β-thalassemia (major) 25%","homozyg","major","intermedia","β.?thal.?/.?β.?thal")),P("At-risk couple → prenatal diagnosis","prenatal","\\bpnd\\b","คู่เสี่ยง","at.?risk","counsel","\\bcvs\\b","amnio")]})
 ),
 interp:"Hb A2 > 3.5% ทั้งสามีและภรรยา = β-thal trait ทั้งคู่ → ลูกเสี่ยง homozygous β-thal 25%",
 summary:["β-thal trait: Hb A2 > 3.5% (มัก 4–8%) + MCV/MCH ต่ำ ไม่ซีดหรือซีดเล็กน้อย","β-thal trait × β-thal trait → ปกติ 25% · trait 50% · homozygous β-thal 25%","คู่เสี่ยง → genetic counseling + prenatal diagnosis · ตรวจ α-thal 1 ร่วมเสมอ"]}),

/* ===== CRQ 7 ===== */
Cq({page:3,orig:"CRQ 7",topic:"lab",sub:"LFT",title:"Right upper quadrant pain with abnormal liver tests",
 seen:"คล้าย SI127 Ro405–408 CRQ 4 (ปวดท้องขวาบน + LFT ผิดปกติ)",
 stem:`A 30-year-old man has had right upper quadrant abdominal pain for 3 days. Physical examination is almost entirely normal.<br>LFT: TB 3.0 mg/dL, DB 2.5 mg/dL, AST 200 U/L, ALT 150 U/L, ALP 160 U/L.<br>7.1 What is the most likely diagnosis?<br>7.2 What is the most appropriate investigation?`,
 gray:"CRQ 7. ชาย 30 ปี ปวดท้อง ruq 3 วัน ตรวจทุกอย่างแทบ normal หมด TB 3.0 DB 2.5 AS 200 ALT 150 ALP 160 ถามว่าคิดถึงโรคอะไรมากที่สุด ควร work up อะไรมากที่สุด — Impression: -CBD stone",
 parts:S(
  B("7.1 What is the most likely diagnosis?",2,{tags:["lab"],key:IMP("CBD stone"),
   ans:"<b>Common bile duct stone (choledocholithiasis)</b> — ปวด RUQ เฉียบพลัน + direct hyperbilirubinemia + transaminase สูงขึ้นเร็ว (ทางเดินน้ำดีอุดตันเฉียบพลัน) + ALP สูงเล็กน้อย",
   exp:"ในการอุดตันเฉียบพลันจากนิ่ว AST/ALT ขึ้นสูงก่อนได้ (บางรายเกิน 500–1,000) แล้วลดลงเร็ว ส่วน ALP/GGT ตามขึ้นทีหลัง · ไม่มีไข้ → ยังไม่ใช่ cholangitis (Charcot triad: ไข้ ปวด RUQ เหลือง) · ddx: acute hepatitis, biliary pancreatitis (ส่ง lipase)",
   pts:[CR(P("Common bile duct stone / choledocholithiasis","cbd","common bile","choledocho","นิ่วในท่อน้ำดี")),P("Reason: obstructive pattern with acute transaminase rise","obstruct","อุดตัน","direct","conjugat","cholestat")]}),
  B("7.2 What is the most appropriate investigation?",2,{tags:["lab"],
   ans:"<b>Ultrasound of the upper abdomen (hepatobiliary system)</b> เป็นการตรวจแรก — ดูนิ่วในถุงน้ำดี ท่อน้ำดีขยาย นิ่วใน CBD · จากนั้นแบ่งความเสี่ยง: สูง (เห็นนิ่วใน CBD, cholangitis) → <b>ERCP</b> · ปานกลาง → <b>MRCP หรือ EUS</b> ก่อน",
   exp:"ASGE 2019 choledocholithiasis guideline: high risk = นิ่วใน CBD จาก US/ภาพถ่าย, ascending cholangitis, หรือ TB &gt; 4 mg/dL ร่วมกับ CBD ขยาย · intermediate = LFT ผิดปกติ, อายุ &gt; 55, CBD ขยาย → EUS/MRCP/IOC",
   pts:[CR(P("Ultrasound upper abdomen / hepatobiliary","ultraso","\\bus\\b","อัลตรา","\\busg\\b")),P("Then MRCP / EUS / ERCP by risk","mrcp","\\beus\\b","ercp")]})
 ),
 interp:"ปวด RUQ + direct hyperbilirubinemia + transaminase สูงเฉียบพลัน → CBD stone → ultrasound ก่อน แล้ว MRCP/EUS/ERCP ตามความเสี่ยง",
 summary:["CBD stone: ปวด RUQ + เหลือง (direct) ± transaminase ขึ้นเร็วช่วงแรก","ตรวจแรก: ultrasound hepatobiliary","High risk → ERCP · intermediate → MRCP/EUS","ไข้ + ปวด RUQ + เหลือง = cholangitis → ERCP ด่วน"]}),

/* ===== CRQ 8 ===== */
Cq({page:3,orig:"CRQ 8",topic:"hx",sub:"GI bleeding",ex:1,title:"Chronic alcohol use with massive upper GI bleeding — causes and management",
 stem:`A man who has been drinking alcohol for many years presents with massive upper gastrointestinal bleeding. Physical examination shows many signs of chronic liver disease.<br>8.1 List all possible causes of the upper GI bleeding in this patient.<br>8.2 Describe the management.`,
 gray:"CRQ 8. ดื่มเหล้ามาตลอด มาด้วย massive ugib ตรวจร่างกายมี signs of chronic liver diseases เต็มไปหมด ถามหา causes บอก cause of GI bleed ทั้งหมด และการรักษา — Impression: variceal bleeding, initial Mx. มหาศาล",
 flag:"ต้นฉบับเป็นข้อเขียน (CRQ) — จัด topic hx · บท sp (vital signs, ผลตรวจ) Claude แต่ง",
 sp:"(บทแต่งโดย Claude — ผู้คุมบอกเมื่อถาม) ชาย 55 ปี ดื่มเหล้าขาววันละครึ่งขวดมา 20 ปี · อาเจียนเป็นเลือดสด 3 ครั้ง ประมาณ 1 ลิตร ถ่ายดำ 1 ครั้ง ก่อนอาเจียนเลือดไม่ได้อาเจียนรุนแรงมาก่อน · ไม่ได้กินยาแก้ปวด · ตรวจ: ซึมเล็กน้อย BP 86/50 mmHg, HR 124/min · jaundice, spider nevi, palmar erythema, gynecomastia, ascites, splenomegaly, flapping tremor เล็กน้อย · Hb 7.2 g/dL, platelet 68,000/mm3, INR 1.8, albumin 2.4 g/dL",
 parts:S(
  B("8.1 List all possible causes of the upper GI bleeding in this patient.",3,{tags:["hx"],key:IMP("variceal bleeding"),
   ans:"<b>Portal hypertension–related</b>: <ul><li><b>Esophageal varices</b> (น่าจะเป็นมากที่สุด)</li><li>Gastric varices</li><li>Portal hypertensive gastropathy</li></ul><b>Non-variceal</b>: <ul><li><b>Peptic ulcer</b> (alcohol, NSAIDs, H. pylori)</li><li><b>Mallory–Weiss tear</b> (อาเจียนหลังดื่ม)</li><li>Erosive gastritis/esophagitis</li><li>Gastric antral vascular ectasia</li><li>มะเร็ง (HCC รุกท่อ, gastric cancer)</li></ul>",
   exp:"ในผู้ป่วย cirrhosis ที่มี UGIB ประมาณ 50–70% เป็น variceal bleeding แต่ต้องคิด non-variceal เสมอ — การส่องกล้องเป็นตัวแยก",
   pts:[CR(P("Esophageal / gastric varices","varic","หลอดเลือดขอด")),P("Portal hypertensive gastropathy","portal hypertensive gastro","\\bphg\\b","gastropathy"),P("Peptic ulcer","peptic","ulcer","แผลในกระเพาะ","\\bpud\\b"),P("Mallory–Weiss tear","mallory","weiss"),P("Erosive gastritis / GAVE / malignancy","gastritis","erosi","gave","ectasia","cancer","มะเร็ง","hcc")]}),
  B("8.2 Describe the management.",5,{tags:["hx"],key:IMP("initial Mx."),
   ans:"<b>Resuscitation</b>: ABC · <b>on large-bore IV 2 เส้น</b> · ใส่ท่อช่วยหายใจถ้าอาเจียนเลือดมาก/ซึม (ป้องกัน aspiration) · ให้สารน้ำอย่างระวัง · <b>restrictive transfusion: PRC เมื่อ Hb &lt; 7 เป้า 7–8 g/dL</b> (ให้มากเพิ่ม portal pressure) · ไม่ต้องแก้ INR ด้วย FFP เป็นประจำ<br><b>ยาเริ่มทันทีก่อนส่องกล้อง</b>: <b>vasoactive drug</b> — terlipressin หรือ <b>octreotide</b>/somatostatin ต่อ 2–5 วัน · <b>antibiotic prophylaxis</b> ceftriaxone 1 g/วัน สูงสุด 7 วัน · IV PPI จนกว่าจะส่องกล้อง<br><b>Endoscopy ภายใน 12 ชั่วโมง</b>: esophageal varices → <b>endoscopic variceal ligation (EVL)</b> · gastric varices → cyanoacrylate injection<br><b>ไม่หยุด</b>: balloon tamponade (Sengstaken–Blakemore) เป็น bridge → <b>TIPS</b> (pre-emptive TIPS ใน Child C 10–13 หรือ Child B &gt; 7 ที่ยังมีเลือดออกขณะส่องกล้อง)<br><b>อื่น ๆ</b>: lactulose ป้องกัน hepatic encephalopathy · thiamine · งดเหล้า<br><b>Secondary prophylaxis</b>: NSBB (propranolol/carvedilol) + EVL ซ้ำจน varices หาย",
   exp:"Baveno VII 2022 และ AASLD 2024 Guidance on risk stratification and management of portal hypertension and varices · antibiotic prophylaxis ลดการติดเชื้อ เลือดออกซ้ำ และอัตราตาย",
   rubric:"ได้เต็ม = resuscitation + restrictive transfusion + vasoactive + antibiotic prophylaxis + endoscopy/EVL + rescue (balloon/TIPS) · ขาด vasoactive หรือ antibiotic = ขาดข้อสำคัญ",
   pts:[H("Resuscitation",25),P("ABC, two large-bore IV lines, airway protection","large.?bore","iv line","เปิดเส้น","abc","intubat","ท่อช่วยหายใจ"),P("Restrictive transfusion (Hb target 7–8 g/dL)","transfus","prc","ให้เลือด","hb.{0,6}7"),
    H("Medications",35),CR(P("Vasoactive: terlipressin / octreotide / somatostatin","terlipressin","octreotide","somatostatin","vasoactive","vasopressin")),CR(P("Antibiotic prophylaxis (ceftriaxone)","ceftriaxone","antibiotic","ยาฆ่าเชื้อ","prophyla")),P("IV PPI until endoscopy","ppi","omeprazole","pantoprazole"),
    H("Endoscopy and rescue",30),CR(P("Endoscopy within 12 h with variceal band ligation","endoscop","egd","ส่องกล้อง","evl","band","ligation")),P("Rescue: balloon tamponade / TIPS","balloon","sengstaken","tamponade","tips"),
    H("Others",10),P("Lactulose, thiamine, NSBB secondary prophylaxis, stop alcohol","lactulose","thiamine","propranolol","carvedilol","nsbb","งดเหล้า","alcohol")]})
 ),
 interp:"Massive UGIB ใน alcoholic cirrhosis: causes ต้องคิด variceal และ non-variceal · การรักษาเริ่ม resuscitation + vasoactive + antibiotic + endoscopy ภายใน 12 ชั่วโมง",
 summary:["UGIB ใน cirrhosis: varices มากสุด แต่ต้องคิด PUD, Mallory–Weiss, PHG","Transfusion แบบ restrictive เป้า Hb 7–8 g/dL","ก่อนส่องกล้อง: terlipressin/octreotide + ceftriaxone prophylaxis + IV PPI","Endoscopy ≤ 12 ชั่วโมง → EVL · ไม่หยุด → balloon tamponade, TIPS","Secondary prophylaxis: NSBB + EVL"]}),
);
})();
