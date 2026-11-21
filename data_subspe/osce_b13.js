(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC XXX By MDCU 78" (ไฟล์ OSCE 78A) → MDCU78 RoA (เพิ่ม 20 พ.ย. 2026)
   ไฟล์ SO78AQ = AC_78A_OSCE_78A.pdf (6 หน้า, iOS) · ตาราง ข้อ / โจทย์รวม (อันนี้ meq) / คำถามย่อย · ไม่มีไฟล์เฉลย
   หัวตารางเขียน "(อันนี้ meq)" และแถว 16 มีป้าย "(OSCE)" → ข้อ 1–15 = พาร์ท meq → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot) · ข้อ 16–30 = พาร์ท OSCE
   แถวว่าง (ข้าม): 9, 10, 11, 12, 28, 29, 30
   แถว 13 (Parinaud คลิป), 14 (x-ray เหมือน lower gut ob), 15 (อึซีด ddx) = recall ซ้ำของแถว 6, 4, 7 ในชุดเดียวกัน (เรื่องเดียวกัน คำถามเดียวกัน) → รวมเป็นสถานีเดียว บอกใน notes
   รูปในไฟล์: MEQ 1 แผนภาพไส้เลื่อน (มีป้ายชื่อ = คำตอบ → ปิดป้ายเป็นตัวอักษร A–F ในรูปโจทย์ os78a_1, รูปต้นฉบับเป็นรูปเฉลย os78a_k1) · MEQ 4 AXR (ผู้จดหมายเหตุว่าไม่ใช่รูปในข้อสอบ) · OSCE 23 หุ่นต่อมลูกหมาก 4 แบบ (รูปต้นฉบับมีกรอบแดงรอบหุ่น 1 อัน → ลบกรอบในรูปโจทย์ os78a_23, รูปต้นฉบับเป็นรูปเฉลย os78a_k23) · OSCE 27 CXR · อีโมจิในแถว 6 ไม่ใช้
   สถานีที่ไฟล์บอกว่ามีรูป/คลิปแต่ไฟล์ไม่มี: MEQ 2, 5, 6, 8, OSCE 25 → flag NOIMG + imgAlt */
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
const Co=o=>Object.assign({set:"MDCU78",ro:"RoA",file:"SO78AQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== MEQ 1 ===== */
SA({page:2,orig:"MEQ 1",num:"SA 1",sub:"Hernia/Abdominal wall",title:"Spot — abdominal wall hernias at labelled sites",img:["os78a_1"],kimg:["os78a_k1"],
 stem:`The diagram shows hernias at six sites of the anterior abdominal wall, labelled A to F.<br>1. Name each hernia A–F.<br>2. Give two precipitating factors for abdominal wall hernias.`,
 gray:"(ให้รูป hernia ตำแหน่งต่าง ๆ มา) 1.1 ถามชื่อรอยโรค (A-F) 1.2 บอก 2 precipitating factors",
 notes:"รูปในไฟล์เป็นแผนภาพไส้เลื่อน 6 ตำแหน่งที่มีป้ายชื่อ (Epigastric, Umbilical, Incisional, Spigelian, Inguinal, Femoral) — เราปิดป้ายและใส่ตัวอักษร A–F แทน (A Epigastric, B Umbilical, C Incisional, D Spigelian, E Inguinal, F Femoral) · ไม่มีเฉลยในไฟล์",
 opinion:"ไม่มีเฉลยในไฟล์ — ชื่อตามป้ายในรูปต้นฉบับ ความมั่นใจสูง",
 parts:S(
  B("1.1 Name each hernia A–F.",6,{tags:["spot"],
   ans:"<b>A</b> Epigastric hernia (linea alba เหนือสะดือ) · <b>B</b> Umbilical/paraumbilical hernia · <b>C</b> Incisional hernia (ตามแผลผ่าตัดเดิม) · <b>D</b> Spigelian hernia (ขอบนอกของ rectus ตาม semilunar line ระดับ arcuate line) · <b>E</b> Inguinal hernia (เหนือและ medial ต่อ pubic tubercle) · <b>F</b> Femoral hernia (ใต้และ lateral ต่อ pubic tubercle)",
   exp:"Inguinal vs femoral: inguinal อยู่เหนือ inguinal ligament และ medial ต่อ pubic tubercle; femoral อยู่ใต้ ligament lateral ต่อ tubercle · femoral เสี่ยง strangulation สูงสุด (คอแคบ) พบบ่อยในหญิง",
   rubric:"1 คะแนนต่อชื่อที่ถูก",
   pts:[P("A Epigastric","epigastric"),P("B Umbilical","umbilic"),P("C Incisional","incision"),P("D Spigelian","spigel"),P("E Inguinal","inguinal"),P("F Femoral","femoral")]}),
  B("1.2 Two precipitating factors.",2,{tags:["spot"],
   ans:"ภาวะที่เพิ่มความดันในช่องท้อง: <b>chronic cough</b> (COPD, สูบบุหรี่), <b>chronic constipation/straining</b>, <b>BPH/เบ่งปัสสาวะ</b>, ยกของหนัก, ascites, obesity, pregnancy, peritoneal dialysis · ปัจจัยผนังอ่อน: อายุมาก, collagen disorder, แผลผ่าตัดติดเชื้อ (incisional)",
   exp:"ก่อนผ่าตัด hernia ควรหาและแก้ปัจจัยเพิ่ม IAP (เช่น ตรวจ BPH, หยุดบุหรี่) เพื่อลดการเป็นซ้ำ",
   rubric:"ได้ 1 คะแนนต่อปัจจัย สูงสุด 2",
   pts:[G("ปัจจัย (≥2)",2,P("Chronic cough","cough","ไอ"),P("Constipation/straining","constipat","ท้องผูก","strain","เบ่ง"),P("BPH/urinary obstruction","bph","prostat","ปัสสาวะ"),P("Heavy lifting","lift","ยกของ"),P("Ascites/obesity/pregnancy","ascites","obes","pregnan","อ้วน","ตั้งครรภ์"))]})
 ),
 interp:"Spot ไส้เลื่อนผนังหน้าท้องตามตำแหน่ง + ปัจจัยเสี่ยง",
 summary:["Epigastric: linea alba เหนือสะดือ · Umbilical: ที่สะดือ · Incisional: แผลผ่าตัดเดิม · Spigelian: semilunar line","Inguinal: เหนือ ligament, medial ต่อ pubic tubercle · Femoral: ใต้ ligament, lateral ต่อ tubercle","Femoral hernia เสี่ยง strangulation มากที่สุด → ผ่าตัดทุกราย","ปัจจัยเพิ่ม IAP: ไอเรื้อรัง ท้องผูก BPH ยกของหนัก ascites อ้วน ตั้งครรภ์"]}),

/* ===== MEQ 2 ===== */
SA({page:2,orig:"MEQ 2",num:"SA 2",sub:"Imaging film",title:"Spot — epigastric pain radiating to the back with a gallbladder ultrasound",
 stem:`A 50-year-old woman has sudden severe epigastric pain radiating to the back with vomiting. An ultrasound of the gallbladder is shown.<br>1. What is the provisional diagnosis?<br>2. List 2 laboratory tests to confirm the diagnosis and 4 laboratory tests to assess severity.<br>3. Name 1 imaging study to confirm the diagnosis.`,
 gray:"ปวดร้าวไปหลัง ให้ผล u/s gb มาด้วย · 1. provisional diagnosis 2. บอกผลทางห้องปฏิบัติการที่จะส่งเพิ่ม 2 อย่างเพื่อการวินิจฉัย และ 4 อย่างเพื่อบอกความรุนแรงของโรค 3. ส่งผลทางรังสี 1 อย่างเพื่อการวินิจฉัย",
 flag:NOIMG+" · อายุ/เพศและผล ultrasound (นิ่วในถุงน้ำดี) Claude แต่ง",imgAlt:"Ultrasound ถุงน้ำดีเห็นนิ่วหลายก้อนมี acoustic shadow",
 notes:"ต้นฉบับ: \"ปวดร้าวไปหลัง ให้ผล u/s gb มาด้วย\" คำถามย่อย 3 ข้อ · ไม่มีรูปในไฟล์ · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ตีความเป็น acute gallstone pancreatitis ความมั่นใจปานกลาง-สูง",
 parts:S(
  B("2.1 Provisional diagnosis.",2,{tags:["spot"],
   ans:"<b>Acute (gallstone/biliary) pancreatitis</b>",
   exp:"ปวดลิ้นปี่รุนแรงร้าวทะลุหลัง + นิ่วถุงน้ำดี = biliary pancreatitis (สาเหตุอันดับ 1 ร่วมกับแอลกอฮอล์)",
   rubric:"ได้ = acute pancreatitis (+biliary/gallstone)",
   pts:[CR(P("Acute pancreatitis","pancreatit","ตับอ่อนอักเสบ")),P("Gallstone/biliary cause","gallstone","biliary","นิ่ว")]}),
  B("2.2 Two tests to confirm and four tests for severity.",6,{tags:["spot"],
   ans:"<b>วินิจฉัย</b>: serum <b>lipase</b> และ <b>amylase</b> (&gt;3 เท่า upper limit) · <b>ความรุนแรง</b>: BUN/creatinine, hematocrit, WBC, glucose, LDH, AST, serum calcium, CRP (&gt;150 mg/L ที่ 48 ชม.), arterial blood gas (PaO2, base deficit) · ใช้ใน Ranson, BISAP, Glasgow, APACHE II · LFT (bilirubin, ALP) ช่วยบอกว่ามี biliary obstruction/cholangitis",
   exp:"Atlanta 2012: วินิจฉัยเมื่อมี ≥2 ใน 3: ปวดท้องเข้าได้, lipase/amylase &gt;3×ULN, imaging เข้าได้ · ความรุนแรง: mild (ไม่มี organ failure), moderately severe (transient OF &lt;48 ชม./local complication), severe (persistent OF &gt;48 ชม.)",
   rubric:"วินิจฉัย 2 อย่าง (1 คะแนน/อย่าง) + ความรุนแรง 4 อย่าง (1 คะแนน/อย่าง)",
   pts:[H("Diagnosis",34),P("Lipase","lipase"),P("Amylase","amylase"),H("Severity",66),G("Severity markers (≥4)",4,P("BUN/creatinine","bun","creatinine","urea"),P("Hematocrit","hct","hematocrit"),P("WBC","wbc","white"),P("Glucose","glucose","sugar"),P("LDH","ldh"),P("AST","ast","sgot"),P("Calcium","calcium","\\bca\\b"),P("CRP","crp"),P("ABG/PaO2","abg","pao2","base deficit"))]}),
  B("2.3 One imaging study to confirm.",2,{tags:["spot"],
   ans:"<b>Contrast-enhanced CT abdomen</b> (ดีที่สุดเมื่อทำหลัง 72 ชม. หรือเมื่อวินิจฉัยไม่ชัด/อาการแย่ลง) · ultrasound ใช้หานิ่วถุงน้ำดีและ CBD (ทำแล้วในโจทย์) · MRCP/EUS หา CBD stone",
   exp:"CECT ไม่จำเป็นในทุกรายที่วินิจฉัยได้จากอาการ+เอนไซม์; ใช้ประเมิน necrosis (CT severity index) หลัง 72 ชม.",
   rubric:"ได้ = CT abdomen with contrast",
   pts:[CR(P("CT abdomen with contrast","ct","computed tomograph"))]})
 ),
 interp:"เคสปวดท้องร้าวหลัง + นิ่วถุงน้ำดี → biliary pancreatitis: การวินิจฉัย ความรุนแรง และภาพรังสี",
 summary:["Biliary pancreatitis: lipase/amylase &gt;3×ULN","ความรุนแรง: BISAP (BUN &gt;25, impaired mental status, SIRS, age &gt;60, pleural effusion), Ranson, CRP &gt;150","CECT หลัง 72 ชม. ดู necrosis; US ทุกรายหานิ่ว","Treatment: aggressive แต่ goal-directed fluid (LR), analgesia, early enteral feeding; ERCP ภายใน 24 ชม. ถ้ามี cholangitis","Cholecystectomy ใน admission เดียวกันสำหรับ mild biliary pancreatitis"]}),

/* ===== MEQ 3 ===== */
SA({page:2,orig:"MEQ 3",num:"SA 3",sub:"Head & neck",title:"Spot — a midline mass under the chin",
 stem:`A 20-year-old man has a painless, slowly enlarging midline mass under the chin for 2 years. It is soft to rubbery, does not move with swallowing or tongue protrusion, and is not attached to the skin.<br>1. Give three differential diagnoses.<br>2. What is the most likely diagnosis and its treatment?`,
 gray:"ก้อนที่คางละซักประ ยากชิบ · 1. (ว่าง)",
 flag:"ต้นฉบับจดแค่ \"ก้อนที่คาง\" และว่าซักประวัติยาก ไม่บอกคำถาม — Claude แต่งเคสและคำถามทั้งหมด",
 notes:"ต้นฉบับ: \"ก้อนที่คางละซักประ ยากชิบ\" (ก้อนที่คาง แล้วซักประวัติยากมาก) ช่องคำถามย่อยมีแค่ \"1.\" · ไม่มีรูป ไม่มีเฉลย · อาจเป็นสถานีซักประวัติแต่อยู่ในพาร์ท meq จึงแต่งเป็นคำถามเขียนตอบ",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ไม่มีคีย์และไม่บอกคำถาม (จดแค่ ก้อนที่คาง) · เฉลยแต่งเป็น DDx ก้อนกลางใต้คาง: <b>dermoid cyst</b>, thyroglossal duct cyst (ขยับตามการกลืน/แลบลิ้น), submental LN, plunging ranula · dermoid → <b>surgical excision</b> (เลือกทางเข้าตามตำแหน่งเทียบ mylohyoid) — ถูกต้องตามตำรา · คงคำตอบเดิม · แหล่งตัดสิน: Cummings Otolaryngology 7e / Sabiston 21e (neck masses) · ความมั่นใจ: สูง (เนื้อหา) / ต่ำ (โจทย์จริงถามอะไร)",
 parts:S(
  B("3.1 Three differential diagnoses.",3,{tags:["spot"],
   ans:"ก้อนกลางใต้คาง (submental): <b>dermoid cyst</b> · <b>thyroglossal duct cyst</b> (สูง ใกล้ hyoid) · <b>submental lymphadenopathy</b> (reactive, TB, lymphoma, metastasis จากริมฝีปาก/พื้นปาก) · plunging ranula · lipoma · sebaceous/epidermoid cyst",
   exp:"Dermoid ไม่ขยับตามการแลบลิ้น (ต่างจาก TGDC) · lymph node submental ระบายจากปลายลิ้น ริมฝีปากล่างกลาง พื้นปากด้านหน้า",
   rubric:"1 คะแนนต่อโรคที่เหมาะสม",
   pts:[G("DDx (≥3)",3,P("Dermoid cyst","dermoid"),P("Thyroglossal duct cyst","thyroglossal","tgdc"),P("Submental lymph node","lymph","node","ต่อมน้ำเหลือง"),P("Ranula","ranula"),P("Lipoma","lipoma"),P("Epidermoid/sebaceous cyst","epidermoid","sebaceous"))]}),
  B("3.2 Most likely diagnosis and treatment.",3,{tags:["spot"],
   ans:"<b>Dermoid cyst</b> (กลางใต้คาง ไม่ขยับตามการกลืน/แลบลิ้น ไม่ติดผิว โตช้า) · รักษา: <b>surgical excision</b> ทั้ง cyst (US/CT ก่อนผ่าตัดดูความสัมพันธ์กับ mylohyoid — เหนือ mylohyoid ใช้ intraoral approach, ใต้ใช้ submental approach)",
   exp:"Dermoid cyst มี adnexal structures (ขน ต่อมไขมัน) ในผนัง ต่างจาก epidermoid",
   rubric:"ได้ = dermoid + excision",
   pts:[CR(P("Dermoid cyst","dermoid")),P("Surgical excision","excision","ผ่าตัด","ตัด")]})
 ),
 interp:"ก้อนใต้คางกลาง: แยก dermoid, TGDC, lymph node",
 summary:["Midline neck masses: TGDC (บ่อยสุดในเด็ก), dermoid, lymph node, thyroid","TGDC ขยับตามแลบลิ้น/กลืน · dermoid ไม่ขยับ","Submental nodes ระบายจากริมฝีปากล่างกลาง พื้นปากหน้า ปลายลิ้น","ก้อนคอโตในผู้ใหญ่ &gt;3 สัปดาห์ ต้องคิดถึงมะเร็ง → FNA","Dermoid: excision ทั้งก้อน"]}),

/* ===== MEQ 4 (+ แถว 14) ===== */
SA({page:2,orig:"MEQ 4",num:"SA 4",sub:"Pediatric surgery",title:"Spot — 3-day-old boy with vomiting and no meconium: abdominal radiograph",img:["os78a_4"],
 stem:`A 3-day-old boy presents with vomiting and has not passed meconium. Examination shows a distended abdomen and a normally positioned anus. The abdominal radiograph shows markedly dilated bowel loops with no gas in the rectum.<br>1. Give three diagnoses to consider.<br>2. What further investigations would you request?<br>3. Outline the appropriate management.`,
 gray:"เด็กชายอายุ 3 วัน มาด้วยอาเจียน ยังไม่ pass meconium ตรวจร่างกาย distended abdomen มีรูก้นปกติ ให้ film abdomen มามี bowel dilatation ใหญ่ ๆ no gas in rectum (รูปนี้ไม่ใช่รูปในข้อสอบ) · 1. นึกถึงโรคอะไร 3 โรค 2. จะส่งตรวจอะไรเพิ่มเติม 3. Appropriate management · แถว 14: x-ray เหมือน lower gut ob",
 notes:"ผู้จดหมายเหตุว่า \"รูปนี้ไม่ใช่รูปในข้อสอบ\" (รูป AXR ในไฟล์มีลูกศรและเครื่องหมาย * จากต้นทาง) · แถว 14 ในไฟล์ \"x-ray เหมือน lower gut ob\" เป็น recall ซ้ำของสถานีนี้ → รวมไว้ที่นี่ · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ภาพ distal (lower) bowel obstruction ในทารก ความมั่นใจสูงสำหรับ DDx และแนวทาง",
 parts:S(
  B("4.1 Three diagnoses.",3,{tags:["spot"],
   ans:"Distal (lower) intestinal obstruction ในทารก: <b>Hirschsprung disease</b> (สำคัญที่สุด) · <b>meconium ileus</b> (cystic fibrosis) · <b>ileal atresia</b> · colonic atresia · meconium plug syndrome/small left colon syndrome (แม่เบาหวาน)",
   exp:"Anus ปกติจึงตัด ARM ออก · ลำไส้ขยายหลายห่วง = distal obstruction",
   rubric:"1 คะแนนต่อโรค",
   pts:[CR(P("Hirschsprung disease","hirschsprung")),G("อื่น (≥2)",2,P("Meconium ileus","meconium ileus"),P("Ileal atresia","ileal atresia","atresia"),P("Meconium plug / small left colon","plug","small left colon"),P("Colonic atresia","colonic atresia"))]}),
  B("4.2 Further investigations.",3,{tags:["spot"],
   ans:"<b>Contrast enema</b> (water-soluble): transition zone/rectosigmoid index &lt;1 (Hirschsprung), microcolon + pellets (meconium ileus/ileal atresia), plug · <b>rectal suction biopsy</b> (gold standard Hirschsprung: ไม่มี ganglion cells, AChE ↑, calretinin −) · ± sweat test/CFTR (meconium ileus) · electrolytes, CBC",
   exp:"Gastrografin enema ในเคส uncomplicated meconium ileus เป็นทั้งการวินิจฉัยและรักษา",
   rubric:"ได้ = contrast enema + rectal biopsy",
   pts:[CR(P("Contrast enema","enema","contrast")),CR(P("Rectal suction biopsy","biopsy","ตัดชิ้นเนื้อ")),P("Labs/electrolytes","electrolyte","cbc","sweat","cftr")]}),
  B("4.3 Appropriate management.",4,{tags:["spot"],
   ans:"Initial: <b>NPO, NG/OG decompression, IV fluid + correct electrolytes</b>, broad-spectrum ATB ถ้าสงสัย enterocolitis/perforation · Hirschsprung: <b>rectal irrigation/washout</b> จนกว่าจะผ่าตัด → <b>definitive pull-through</b> (transanal endorectal Soave/Duhamel) หรือ <b>leveling colostomy</b> ถ้าเป็น long-segment/enterocolitis รุนแรง/ทารกไม่พร้อม · meconium ileus uncomplicated → gastrografin enema; complicated/atresia → laparotomy",
   exp:"Hirschsprung-associated enterocolitis เป็นสาเหตุตายหลัก — ไข้ ท้องอืด ถ่ายเหลวเหม็น → resuscitate, ATB (metronidazole), rectal washout",
   rubric:"ได้ = resuscitation (NPO NG IV) + definitive surgical plan",
   pts:[H("Initial",50),CR(P("NPO + NG decompression","npo","ng","งดน้ำ","decompress")),P("IV fluid/electrolytes","iv fluid","fluid","สารน้ำ"),H("Definitive",50),P("Rectal irrigation","irrigat","washout","สวน"),P("Pull-through or colostomy","pull","soave","duhamel","colostomy","stoma")]})
 ),
 interp:"Neonatal distal bowel obstruction: DDx, contrast enema + rectal biopsy, resuscitation และการผ่าตัด",
 summary:["Neonatal obstruction: proximal (bilious vomiting เร็ว, ท้องอืดน้อย) vs distal (ท้องอืดมาก, ไม่ถ่ายขี้เทา)","Distal DDx: Hirschsprung, meconium ileus, ileal/colonic atresia, meconium plug","Contrast enema + rectal suction biopsy","Hirschsprung: irrigation → pull-through","Meconium ileus: gastrografin enema (uncomplicated) หรือ laparotomy (complicated)"]}),

/* ===== MEQ 5 ===== */
SA({page:3,orig:"MEQ 5",num:"SA 5",sub:"Other spot",title:"Spot — plantar stimulation with dorsiflexion of the big toe",
 stem:`A picture shows the response of a patient's foot to firm stroking of the lateral sole: the big toe dorsiflexes and the other toes fan out.<br>1. Name the test and report the result.<br>2. What lesion does this finding indicate?`,
 gray:"ให้รูปเท้ามี dorsiflexion มา (1) จงรายงานผลการตรวจและบอกชื่อการตรวจ (2) ผลตรวจนี้แสดงถึง lesion อะไร",
 flag:NOIMG+" · การบรรยายภาพ (นิ้วโป้งกระดกขึ้น นิ้วอื่นกาง) Claude แต่งจาก recall \"เท้ามี dorsiflexion\"",imgAlt:"เท้าผู้ป่วยขณะขีดฝ่าเท้าด้านข้าง นิ้วโป้งกระดกขึ้น นิ้วอื่นกางออก",
 notes:"ต้นฉบับ: \"ให้รูปเท้ามี dorsiflexion มา\" คำถาม 2 ข้อ · ไม่มีรูปในไฟล์ · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ตีความเป็น Babinski sign ความมั่นใจสูง",
 parts:S(
  B("5.1 Name the test and report the result.",2,{tags:["spot"],
   ans:"<b>Plantar reflex (Babinski test)</b> — ผล <b>extensor plantar response (Babinski sign positive)</b>: นิ้วโป้งกระดกขึ้น (dorsiflexion) ± นิ้วอื่นกาง (fanning)",
   exp:"วิธีตรวจ: ขีดฝ่าเท้าด้านนอกจากส้นเท้าขึ้นไปแล้วโค้งเข้าหาฐานนิ้วโป้งด้วยของทู่ · ปกติ (ผู้ใหญ่) = flexor response (นิ้วงอลง) · ทารก &lt;1–2 ปี extensor เป็นปกติได้",
   rubric:"ได้ = ชื่อการตรวจ + ผลบวก (extensor)",
   pts:[CR(P("Plantar reflex / Babinski","babinski","plantar")),P("Positive/extensor response","positive","extensor","บวก","upgoing")]}),
  B("5.2 What lesion does this indicate?",2,{tags:["spot"],
   ans:"<b>Upper motor neuron lesion</b> — รอยโรคของ <b>corticospinal (pyramidal) tract</b> ที่ใดก็ได้ตั้งแต่ motor cortex, internal capsule, brainstem ถึง spinal cord",
   exp:"UMN signs อื่น: spasticity, hyperreflexia, clonus, weakness แบบ pyramidal (extensor แขน, flexor ขาอ่อนกว่า)",
   rubric:"ได้ = UMN/corticospinal tract",
   pts:[CR(P("UMN / corticospinal tract lesion","umn","upper motor","corticospinal","pyramidal"))]})
 ),
 interp:"Spot การตรวจ plantar reflex: Babinski sign = UMN lesion",
 summary:["Babinski sign = extensor plantar response = UMN (corticospinal) lesion","ทารก &lt;1–2 ปี extensor plantar เป็นปกติ","UMN: spasticity, hyperreflexia, clonus, Babinski · LMN: flaccid, hyporeflexia, atrophy, fasciculation","Babinski variants: Chaddock (ข้างเท้า), Oppenheim (หน้าแข้ง), Gordon (น่อง)"]}),

/* ===== MEQ 6 (+ แถว 13) ===== */
SA({page:3,orig:"MEQ 6",num:"SA 6",sub:"Other spot",title:"Spot — video: impaired upward gaze and pupils that react poorly to light",
 stem:`A video of an eye examination shows that the patient cannot look upward, and the pupils react poorly to light. (In the exam, the clip ended before the near-response test.)<br>1. What is the diagnosis?<br>2. Where is the lesion, and what is a common cause?`,
 gray:"ให้รูป impaired upward gaze, light-near dissociation (คลิปตัดก่อนตรวจ near) ถาม diagnosis · แถว 13: parinaud ให้คลิปตรวจร่างกายมา (ละชี มองบนไม่ได้)",
 flag:NOIMG+" · คำถามย่อยที่ 2 (ตำแหน่ง/สาเหตุ) Claude เติม",imgAlt:"คลิปตรวจตา: ผู้ป่วยมองขึ้นไม่ได้ ม่านตาหดตัวต่อแสงไม่ดี",
 notes:"ต้นฉบับแถว 6: \"ให้รูป impaired upward gaze, light-near dissociation (คลิปตัดก่อนตรวจ near ) ถาม diagnosis\" · แถว 13: \"parinaud ให้คลิปตรวจร่างกายมา (ละชี มองบนไม่ได้)\" — recall ซ้ำของสถานีเดียวกัน จึงรวมเป็นสถานีเดียว · ไม่มีคลิป/รูปในไฟล์ · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ผู้จดบอกเองว่าคือ Parinaud ความมั่นใจสูง",
 parts:S(
  B("6.1 Diagnosis.",2,{tags:["spot"],
   ans:"<b>Parinaud syndrome (dorsal midbrain syndrome)</b>",
   exp:"Upgaze palsy + light–near dissociation + convergence–retraction nystagmus + eyelid retraction (Collier sign)",
   rubric:"ได้ = Parinaud/dorsal midbrain syndrome",
   pts:[CR(P("Parinaud syndrome","parinaud","dorsal midbrain"))]}),
  B("6.2 Lesion site and a common cause.",2,{tags:["spot"],
   ans:"รอยโรคที่ <b>dorsal midbrain</b> (pretectal area, superior colliculus, posterior commissure) · สาเหตุบ่อย: <b>pineal region tumor</b> (germinoma ในวัยรุ่นชาย) · อื่น: obstructive hydrocephalus (aqueductal stenosis, shunt failure), midbrain stroke/hemorrhage, MS",
   exp:"Pineal tumor มักทำ obstructive hydrocephalus ร่วม (กด aqueduct)",
   rubric:"ได้ = dorsal midbrain + pineal tumor/hydrocephalus",
   pts:[P("Dorsal midbrain","midbrain","pretectal","tectal","colliculus"),CR(P("Pineal tumor / hydrocephalus","pineal","germinoma","hydroceph"))]})
 ),
 interp:"Spot ตรวจตา: Parinaud syndrome → pineal tumor",
 summary:["Parinaud: upgaze palsy, light–near dissociation, convergence–retraction nystagmus, Collier sign","Lesion: dorsal midbrain","Causes: pineal tumor (germinoma), hydrocephalus/shunt failure, stroke","Light–near dissociation อื่น: Argyll Robertson (neurosyphilis), Adie tonic pupil"]}),

/* ===== MEQ 7 (+ แถว 15) ===== */
SA({page:3,orig:"MEQ 7",num:"SA 7",sub:"Pediatric surgery",title:"Spot — 2-month-old boy with pale stools",
 stem:`A 2-month-old boy is brought in with pale stools and jaundice.<br>1. Give the three most likely diagnoses.<br>2. If you are a doctor at a rural community hospital, what investigations would you send and what would you do next?`,
 gray:"เด็กชาย 2 เดือน มาด้วยอึซีด · 1. วินิจฉัยโรคที่นึกถึงมากที่สุด 3 โรค 2. ถ้าเป็นหมอ รพช. (ชี บอก rural hospital) จะส่งตรวจอะไร แล้วทำยังไงต่อ · แถว 15: อึซีด 1. ddx",
 flag:"เติมคำว่า jaundice ใน stem",
 notes:"ต้นฉบับแถว 7 + แถว 15 (\"อึซีด ddx\") เป็น recall ซ้ำของสถานีเดียวกัน จึงรวม · ไม่มีรูป ไม่มีเฉลย · ข้อสอบ OSCE Subspe 79C มีสถานีเรื่องเดียวกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง; ประเด็นสำคัญคืออายุ 2 เดือน (~60 วัน) ต้องส่งต่อด่วน",
 parts:S(
  B("7.1 Three most likely diagnoses.",3,{tags:["spot"],
   ans:"Neonatal/infantile cholestasis: <b>1. Biliary atresia</b> · <b>2. Choledochal cyst</b> · <b>3. Neonatal (idiopathic) hepatitis</b> หรือ Alagille syndrome · อื่น: infection (TORCH, UTI), metabolic (galactosemia, α1-AT deficiency), PFIC",
   exp:"Pale/acholic stool บ่งว่าน้ำดีไม่ลงลำไส้ — biliary atresia ต้องแยกเร่งด่วน",
   rubric:"ได้ = BA + อีก 2",
   pts:[CR(P("Biliary atresia","biliary atresia","\\bba\\b")),G("อื่น (≥2)",2,P("Choledochal cyst","choledochal"),P("Neonatal hepatitis","hepatitis"),P("Alagille","alagille"),P("Metabolic/infection","galactos","antitrypsin","torch","infection","metabolic"))]}),
  B("7.2 Investigations and next step at a rural hospital.",4,{tags:["spot"],
   ans:"ส่ง: <b>total/direct bilirubin</b> (direct &gt;1 mg/dL), LFT, PT/INR, CBC, TSH, UA/urine culture · <b>Ultrasound</b> ตับและทางเดินน้ำดีหลังงดนม (GB เล็ก/ไม่มี, triangular cord sign; หรือ choledochal cyst) · ให้ <b>vitamin K</b> ฉีด · <b>ส่งต่อด่วน</b>ไปโรงพยาบาลที่มีกุมารศัลยแพทย์เพื่อ HIDA/intraoperative cholangiogram และ <b>Kasai ก่อนอายุ 60 วัน</b> (เด็กอายุ 2 เดือนอยู่ที่เส้นตายแล้ว)",
   exp:"Kasai &lt;60 วัน: bile drainage สำเร็จ ~70% · ช้าไป → cirrhosis → transplant",
   rubric:"ได้ = direct bilirubin + US + refer ด่วน (± vit K)",
   pts:[CR(P("Direct bilirubin","direct","conjugated","bilirubin")),P("Ultrasound","ultrasound","\\bus\\b","usg"),P("Vitamin K","vitamin k","vit k"),CR(P("Urgent referral for Kasai","refer","ส่งต่อ","kasai"))]})
 ),
 interp:"ทารกอุจจาระซีด → biliary atresia จนกว่าจะพิสูจน์ว่าไม่ใช่; บทบาทของ รพช.",
 summary:["Jaundice &gt;2 สัปดาห์ + pale stool → direct bilirubin ทันที","US: GB เล็ก, triangular cord → BA; cystic CBD → choledochal cyst","Vitamin K ป้องกันเลือดออก","Kasai &lt;60 วัน","Stool color card ช่วยคัดกรอง BA"]}),

/* ===== MEQ 8 ===== */
SA({page:3,orig:"MEQ 8",num:"SA 8",sub:"Head & neck",title:"Spot — a small pit in front of the ear",
 stem:`A photograph shows a small pit just in front of the helix of the ear of a 6-year-old child. The area has become red, swollen and painful twice in the past year.<br>1. What is the diagnosis?<br>2. How would you manage this child?`,
 gray:"periauricular sinus · 1. (ว่าง)",
 flag:NOIMG+" · ประวัติติดเชื้อซ้ำและคำถามย่อย Claude แต่ง (ต้นฉบับจดแค่ชื่อโรค)",imgAlt:"รูเล็ก ๆ หน้าต่อขอบใบหู (root of helix)",
 notes:"ต้นฉบับจดแค่ \"periauricular sinus\" (สะกดตามต้นฉบับ = preauricular sinus) · ไม่มีรูปในไฟล์ · ไม่มีเฉลย · ข้อสอบ MCQ Subspe 78B มีข้อเรื่องเดียวกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("8.1 Diagnosis.",1,{tags:["spot"],
   ans:"<b>Preauricular sinus</b> (congenital) ที่มีการติดเชื้อซ้ำ",
   exp:"เกิดจากการรวมกันไม่สมบูรณ์ของ auricular hillocks (1st/2nd branchial arch)",
   rubric:"ได้ = preauricular sinus/pit",
   pts:[CR(P("Preauricular sinus","preauricular","periauricular","pit","sinus"))]}),
  B("8.2 Management.",3,{tags:["spot"],
   ans:"ขณะติดเชื้อ: <b>oral/IV antibiotics</b> (คลุม Staph/Strep) ± aspiration/I&amp;D ถ้าเป็นฝี · เมื่อหายอักเสบ: <b>complete surgical excision of the sinus tract</b> (รวม cartilage ที่ติด tract; supra-auricular approach ลด recurrence) · ไม่มีอาการ → observe · bilateral/มีความผิดปกติร่วม → ตรวจการได้ยิน + renal US (BOR syndrome)",
   exp:"ผ่าตัดขณะอักเสบเพิ่ม recurrence",
   rubric:"ได้ = ATB ขณะอักเสบ + excision หลังหาย",
   pts:[P("Treat infection first","antibiotic","atb","ยาฆ่าเชื้อ","drain"),CR(P("Complete excision when quiescent","excision","excise","ผ่าตัด","ตัด"))]})
 ),
 interp:"Preauricular sinus ติดเชื้อซ้ำ → excision",
 summary:["Preauricular sinus: หน้าต่อ root of helix","Asymptomatic → observe","Recurrent infection → excision หลังหายอักเสบ","BOR syndrome: preauricular pits + hearing loss + renal anomalies"]}),

/* ===== OSCE 16 ===== */
Co({page:4,orig:"16",topic:"path",sub:"Order writing",title:"Orders — corrosive (toilet cleaner) ingestion 2 hours ago",
 stem:`A 30-year-old man drank a hydrochloric acid toilet cleaner 2 hours ago. He has epigastric pain and oral mucosal burns. He has no stridor, his vital signs are stable and he is fully conscious.<br>1. You are the emergency physician. Write your initial orders.`,
 gray:"เป็ดโปร กินมา 2 ชม. (หรือ 30 นาที วะอี) 30 ปะ · 1.",
 flag:"รายละเอียดอาการและสัญญาณชีพ Claude แต่ง · ผู้จดไม่แน่ใจเวลา (2 ชม. หรือ 30 นาที)",
 notes:"ต้นฉบับ: \"เป็ดโปร กินมา 2 ชม. (หรือ 30 นาที วะอี) 30 ปะ\" (เป็ดโปร = น้ำยาล้างห้องน้ำ HCl) ผู้จดไม่แน่ใจว่ากินมากี่นาที · ไม่มีเฉลย · ข้อสอบ OSCE 78C มีสถานีเดียวกัน (vixol) ซึ่งไฟล์เฉลย 78C ให้แนวคำตอบเป็น order",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ไม่มีคีย์ (กินน้ำยาล้างห้องน้ำ HCl) · เฉลยใช้แนวเดียวกับ OSCE 78C สถานี vixol: NPO, <b>ห้ามทำให้อาเจียน/ห้าม blind NG/ห้าม neutralize หรือ charcoal</b>, ดู airway, IV fluid, PPI, CXR + acute abdomen series หา perforation, <b>EGD ภายใน 12–24 ชม.</b> (Zargar grading) และ CT เมื่อสงสัย transmural necrosis/perforation → surgery · ถูกต้องตามแนวทาง · คงคำตอบเดิม · แหล่งตัดสิน: WSES–CoCaSS guidelines for caustic ingestion 2015 + ESGE Guideline on ingested foreign bodies and caustic ingestion · ความมั่นใจ: สูง",
 parts:S(
  B("16.1 Initial orders.",8,{tags:["path"],
   ans:"<b>Order for one day</b>: <b>NPO</b> · <b>ห้ามทำให้อาเจียน ห้ามใส่ NG tube แบบ blind ห้ามให้สารทำให้เป็นกลาง/activated charcoal</b> · IV fluid (เช่น Ringer's lactate/NSS) · <b>Monitor V/S, airway</b> (ถ้ามี stridor/hoarseness/drooling → แจ้งแพทย์/เตรียม intubation) · PPI IV (omeprazole), analgesic · Lab: CBC, electrolytes, BUN/Cr, ABG/lactate, G/M · Imaging: <b>CXR upright + acute abdomen series</b> หา free air (perforation) · <b>Plan EGD ภายใน 12–24 ชม.</b> เพื่อ grading (Zargar) · หากมี peritonitis/free air/unstable → CT + consult surgery (emergency laparotomy) · Retain Foley ถ้าจำเป็นติดตาม urine output",
   exp:"Acid → coagulation necrosis มักทำลาย<b>กระเพาะ</b> (antrum) มากกว่าหลอดอาหาร · Alkali → liquefactive necrosis ทำลาย<b>หลอดอาหาร</b>ลึก · EGD ระหว่าง 12–24 (ถึง 48) ชม. — หลังวันที่ 5 ถึง 2 สัปดาห์ เสี่ยง perforation จากเนื้อเยื่ออ่อนแอ · ภาวะแทรกซ้อนระยะยาว: stricture, gastric outlet obstruction, esophageal cancer",
   rubric:"ได้คะแนนตามหมวด: งดอาหาร/ห้ามกระตุ้นอาเจียน, IV fluid, monitor, investigation (CXR/AAS + lab), EGD 12–24 ชม., ระวัง airway",
   pts:[H("General",30),CR(P("NPO","npo","งดน้ำ","งดอาหาร")),CR(P("No induced vomiting / no blind NG / no neutralization","ห้ามอาเจียน","no emesis","ห้ามกระตุ้น","neutraliz","no ng","ห้ามใส่")),P("IV fluid","iv fluid","ringer","lactate","nss","fluid"),H("Monitoring",20),P("Monitor V/S and airway","v/s","vital","airway","stridor","monitor"),H("Investigation",30),P("CXR/acute abdomen series","cxr","acute abdomen","x-ray","film","free air"),P("Labs (CBC, electrolyte, ABG)","cbc","electrolyte","abg","lab"),H("Plan",20),CR(P("EGD within 12–24 h","egd","endoscop","ส่องกล้อง")),P("PPI/analgesic","ppi","omeprazole","analges","pain"),P("Surgical consult if perforation","surgery","laparotomy","ผ่าตัด","consult")]})
 ),
 interp:"เขียน order ผู้ป่วยกินกรด (น้ำยาล้างห้องน้ำ)",
 summary:["Corrosive ingestion: ห้าม induce vomiting, ห้าม neutralize, ห้าม charcoal, ห้าม blind NG","Airway ก่อน — stridor/hoarseness = intubate early","CXR/AAS หา perforation; CT ถ้าสงสัย","EGD 12–24 ชม. (ไม่ช้ากว่า 48 ชม.) grading Zargar","Acid ทำลายกระเพาะ · alkali ทำลายหลอดอาหาร · ระยะยาว stricture"]}),

/* ===== OSCE 17 ===== */
Co({page:4,orig:"17",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and use five items",
 stem:`Five items are placed on the table: a chest drainage tube, Babcock forceps, an Army–Navy retractor, curved Mayo scissors and a polypropylene (Prolene) mesh.<br>1. For each item, give its name and one use.`,
 gray:"อุปกรณ์ 5 อย่าง (chest tube, babcock, army navy retractor, trocarปะลืม, curved mayo scissor(มีหรอ), prolene mesh)",
 flag:"ผู้จดไม่แน่ใจ trocar และ curved Mayo scissor — Claude เลือก 5 ชิ้นจากรายการ",
 notes:"ต้นฉบับจดรายการอุปกรณ์ 6 ชื่อโดยไม่แน่ใจ 2 ชื่อ (\"trocar ปะ ลืม\", \"curved mayo scissor (มีหรอ)\") แต่บอกว่ามี 5 อย่าง · Stem ในสถานีนี้บอกชื่ออุปกรณ์เพื่อให้เห็นว่ามีอะไร (ข้อสอบจริงให้ของจริงไม่มีชื่อ) · ไม่มีรูป ไม่มีเฉลย",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไฟล์ไม่มีคีย์ · ผู้จดจำอุปกรณ์ได้ 6 ชื่อ (ไม่แน่ใจ trocar, curved Mayo) จึงเลือก 5 ชิ้น · ชื่อและการใช้งาน: chest tube, <b>Babcock</b> (จับเนื้อเยื่อท่อ/บอบบาง atraumatic), <b>Army–Navy retractor</b>, <b>curved Mayo scissors</b> (ตัดเนื้อเยื่อหนา), <b>polypropylene mesh</b> (hernioplasty) — ถูกต้อง · คงคำตอบเดิม · แหล่งตัดสิน: Sabiston 21e / surgical instrument references · ความมั่นใจ: สูง (เนื้อหา) / ปานกลาง (ชุดเครื่องมือจริง)",
 imgAlt:"ของจริง 5 ชิ้นบนโต๊ะ",
 parts:S(
  B("17.1 Name and use of each item.",10,{tags:["inst"],
   ans:"<b>Chest tube (intercostal drainage tube)</b> — ระบายลม/เลือด/หนองในช่องเยื่อหุ้มปอด ต่อ underwater seal · <b>Babcock forceps</b> — จับอวัยวะท่อ/เนื้อเยื่อบอบบาง (ลำไส้, ไส้ติ่ง, ท่อนำไข่) ปลายกลมไม่มีฟัน atraumatic · <b>Army–Navy retractor</b> — แหวกแผลตื้น/เล็ก (hernia, superficial surgery) ใช้มือถือ สองปลาย · <b>Curved Mayo scissors</b> — ตัดเนื้อเยื่อหนา (fascia, กล้ามเนื้อ) · (straight Mayo = ตัดไหม) · <b>Prolene (polypropylene) mesh</b> — เสริมความแข็งแรงผนังหน้าท้องใน hernioplasty (Lichtenstein, ventral hernia)",
   exp:"Babcock vs Allis: Allis มีฟันเล็ก ๆ จับ fascia/เนื้อเยื่อที่จะตัดทิ้ง · Metzenbaum ตัดเนื้อเยื่อบาง/dissect",
   rubric:"1 คะแนนต่อชื่อ + 1 คะแนนต่อการใช้งาน",
   pts:[P("Chest tube: drain pleural air/fluid","chest tube","icd","intercostal","drain"),P("Babcock: hold bowel/delicate tube","babcock"),P("Army–Navy retractor: retract superficial wound","army","navy","retract"),P("Curved Mayo: cut thick tissue","mayo"),P("Prolene mesh: hernia repair","mesh","prolene","polypropylene","hernio")]})
 ),
 interp:"Spot เครื่องมือผ่าตัดและอุปกรณ์",
 summary:["Babcock: atraumatic จับลำไส้/ไส้ติ่ง/ท่อ","Allis: มีฟัน จับ fascia/เนื้อเยื่อที่จะตัด","Army–Navy: retractor แผลตื้น","Mayo scissors: curved ตัดเนื้อหนา, straight ตัดไหม; Metzenbaum: ตัดเนื้อบาง","Polypropylene mesh: hernioplasty (tension-free repair)"]}),

/* ===== OSCE 18 ===== */
Co({page:4,orig:"18",topic:"inst",sub:"Tube/Catheter",title:"Device — a two-way Foley catheter, 16 Fr",
 stem:`A two-way Foley catheter (16 Fr) is provided.<br>1. Explain how this catheter is used.<br>2. Give one indication for its use.`,
 gray:"2-way foley french 16 - บอกวิธีใช้ - บอก 1 indication ในการใช้",
 notes:"ไม่มีรูปในไฟล์ ไม่มีเฉลย · Stem บอกชื่ออุปกรณ์ตามที่ผู้จดจำ (ข้อสอบให้ของจริง)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 imgAlt:"สาย Foley 2 ทาง ขนาด 16 Fr",
 parts:S(
  B("18.1 How the catheter is used.",4,{tags:["inst"],
   ans:"สาย 2 ทาง: <b>ทางระบายปัสสาวะ</b> + <b>ทางเติม balloon</b> · ขั้นตอน: อธิบายผู้ป่วย ล้างมือ sterile technique · ทำความสะอาด meatus · หล่อลื่น (lidocaine gel ในชาย) · ใส่สายจนสุด/ปัสสาวะไหล (ชาย: ดึงองคชาตตั้งฉาก ใส่จนถึงข้อต่อ Y) · <b>เติม sterile water 10 mL</b> ใน balloon หลังเห็นปัสสาวะ (ห้ามเติมขณะสายอยู่ใน urethra) · ดึงกลับเบา ๆ ให้ balloon ชนคอกระเพาะ · ต่อถุงระบายแบบปิด ติดสายที่ต้นขา/หน้าท้อง แขวนถุงต่ำกว่ากระเพาะ · ชาย: ดึง prepuce กลับที่เดิม (ป้องกัน paraphimosis)",
   exp:"16 Fr = เส้นผ่านศูนย์กลาง 16/3 ≈ 5.3 mm · 3-way ใช้สำหรับ continuous bladder irrigation (hematuria/clot)",
   rubric:"ได้ = sterile + เติม balloon หลังปัสสาวะไหล + ต่อ closed system + ดึง prepuce กลับ",
   pts:[P("Sterile technique + lubrication","sterile","aseptic","lubric","gel","ปราศจากเชื้อ"),CR(P("Inflate balloon with sterile water after urine flows","balloon","water","10 ml","ปัสสาวะไหล","urine flow")),P("Closed drainage bag below bladder","bag","closed","ถุง"),P("Replace foreskin","prepuce","foreskin","หนังหุ้ม","paraphimosis")]}),
  B("18.2 One indication.",2,{tags:["inst"],
   ans:"<b>Acute urinary retention</b> · monitor urine output ใน critically ill/shock/burn · perioperative (ผ่าตัดนาน, urologic/pelvic surgery) · หลังผ่าตัด urethra/bladder · bladder outlet obstruction ที่รอผ่าตัด · comfort care ระยะท้าย · ข้อห้าม: สงสัย urethral injury (blood at meatus, high-riding prostate)",
   exp:"Pelvic fracture + blood at meatus → retrograde urethrogram ก่อน หรือ suprapubic cystostomy",
   rubric:"ได้ 1 ข้อบ่งชี้ที่เหมาะสม",
   pts:[G("Indication (≥1)",1,P("Urinary retention","retention","ปัสสาวะไม่ออก"),P("Monitor urine output","urine output","monitor","shock","burn"),P("Perioperative","perioperative","surgery","ผ่าตัด"))]})
 ),
 interp:"อุปกรณ์ Foley catheter: วิธีใส่และข้อบ่งชี้",
 summary:["2-way: drain + balloon · 3-way: + irrigation","เติม sterile water 10 mL หลังปัสสาวะไหลเท่านั้น","ห้ามใส่เมื่อสงสัย urethral injury","ดึง prepuce กลับเสมอ","ถอดเร็วที่สุดเพื่อลด CAUTI"]}),

/* ===== OSCE 19 ===== */
Co({page:4,orig:"19",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — suspected distal ureteric colic",
 stem:`A 35-year-old man has sudden colicky right loin pain radiating to the groin. The examiner is observing.<br>1. Perform an abdominal examination relevant to this patient and explain your findings.`,
 gray:"(มีอาจารย์) distal ureteric colic (ตรวจร่างกายบริเวณท้อง)",
 sp:"(Claude แต่ง) ผู้ป่วยจำลองชาย 35 ปี ปวดเอวขวาร้าวลงขาหนีบ บิดตัวไปมา · ผลตรวจ: ท้องไม่อืด bowel sound ปกติ ไม่มี guarding/rebound · กดเจ็บเล็กน้อยที่ right lower quadrant ตามแนว ureter · CVA tenderness ขวา (+) · ไม่มีก้อน · ไม่มี hernia · อัณฑะปกติ · ผู้คุมดู: แนะนำตัว ขออนุญาต ล้างมือ จัดท่า เปิดหน้าท้องเหมาะสม ดู–ฟัง–เคาะ–คลำ คลำจากจุดที่ไม่เจ็บก่อน ตรวจ CVA tenderness ตรวจขาหนีบ/อัณฑะ แยกโรคอื่น (appendicitis, AAA)",
 flag:"อายุ/ประวัติและผลตรวจในบทผู้ป่วยจำลอง Claude แต่ง",
 notes:"ต้นฉบับ: \"(มีอาจารย์) distal ureteric colic (ตรวจร่างกายบริเวณท้อง)\" · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — checklist ตามมาตรฐานการตรวจท้อง ความมั่นใจสูง",
 parts:S(
  B("19.1 Abdominal examination for suspected ureteric colic.",10,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ล้างมือ ผู้ป่วยนอนหงาย เปิดหน้าท้องตั้งแต่ใต้ราวนมถึงขาหนีบ · <b>Inspection</b>: ท่าทาง (บิดตัวไปมาหาท่าที่สบาย = colic ต่างจาก peritonitis ที่นอนนิ่ง), distension, scar · <b>Auscultation</b>: bowel sounds, bruit (AAA) · <b>Percussion</b>: tenderness · <b>Palpation</b>: เริ่มจากจุดไม่เจ็บ light → deep · ตำแหน่งกดเจ็บตามแนว ureter, guarding/rebound (แยก appendicitis), ก้อน, pulsatile mass (AAA ในผู้สูงอายุ) · <b>CVA (costovertebral angle) tenderness</b> · ตรวจ <b>ขาหนีบและอัณฑะ</b> (แยก torsion, hernia; ปวดร้าวอัณฑะจาก ureteric stone) · สรุป: เข้าได้กับ right ureteric colic (distal) แยก appendicitis, AAA, testicular torsion · เสนอ UA (hematuria), NCCT KUB",
   exp:"Pain pattern ของนิ่ว: renal pelvis/upper ureter → ปวดเอว; mid ureter → ร้าวไปท้องด้านหน้า; distal/UVJ → ร้าวลงขาหนีบ อัณฑะ/labia + urgency/frequency",
   rubric:"ได้ตามหมวด: เตรียม, ดู, ฟัง, เคาะ, คลำ, CVA, ขาหนีบ/อัณฑะ, สรุป",
   pts:[H("Preparation",10),P("Introduce, consent, hand hygiene, exposure","แนะนำ","ขออนุญาต","ล้างมือ","consent","expose"),H("Inspection/auscultation",20),P("Observe restlessness vs lying still","บิดตัว","restless","writh","ดู","inspect"),P("Auscultate bowel sounds/bruit","bowel sound","ฟัง","ausculta","bruit"),H("Palpation",40),CR(P("Palpate starting away from pain, light then deep","คลำ","palpat","light","deep")),P("Guarding/rebound to exclude peritonitis","guarding","rebound","peritonit"),P("Pulsatile mass (AAA)","aaa","pulsatile","aneurysm"),CR(P("CVA tenderness","cva","costovertebral","renal punch","เคาะหลัง")),H("Others/summary",30),P("Examine groin and testes","อัณฑะ","testis","testes","scrot","ขาหนีบ","groin"),P("Summary + UA/NCCT","ua","urinalysis","ct","kub","สรุป")]})
 ),
 interp:"ตรวจร่างกายท้องในผู้ป่วยสงสัยนิ่วท่อไตส่วนปลาย",
 summary:["Colic: ผู้ป่วยกระสับกระส่าย เปลี่ยนท่าไปมา; peritonitis นอนนิ่ง","CVA tenderness ด้านที่เป็น","ต้องตรวจขาหนีบ/อัณฑะ และแยก AAA ในผู้สูงอายุ","Investigation: UA (hematuria), NCCT KUB","Distal stone ≤10 mm → medical expulsive therapy (tamsulosin)"]}),

/* ===== OSCE 20 ===== */
Co({page:4,orig:"20",topic:"pe",sub:"Breast",ex:1,title:"Physical examination — breast examination with advice",
 stem:`A 45-year-old woman attends for a breast check. She had her first child at age 25 and has never used oral contraceptives. The examiner is observing.<br>1. Perform a clinical breast examination on the model.<br>2. Give her appropriate advice.`,
 gray:"(มีอาจารย์) ตรวจเต้านม + advice คนไข้ (ในใบให้มาว่า ญ 45 ปี มีลูกคนแรกตอน 25 ไม่มีประวัติกินยาคุม ใด ๆ)",
 sp:"(Claude แต่ง) หุ่นเต้านม/ผู้ป่วยจำลองหญิง 45 ปี ไม่มีอาการ ไม่มีประวัติครอบครัวมะเร็งเต้านม · ผลตรวจ: เต้านมสองข้างสมมาตร ไม่มี skin change, nipple retraction หรือ discharge ไม่มีก้อน ต่อมน้ำเหลือง axilla/supraclavicular ไม่โต · ผู้คุมดู: ขออนุญาต มี chaperone ดู 3 ท่า คลำทั้งเต้านมเป็นระบบ (vertical strip/circular) ถึง tail of Spence คลำ nipple–areola ต่อมน้ำเหลือง และให้คำแนะนำคัดกรอง",
 flag:"ผลตรวจในบทผู้ป่วยจำลอง Claude แต่ง (ไฟล์บอกแค่ข้อมูลในใบโจทย์)",
 notes:"ต้นฉบับ: \"(มีอาจารย์) ตรวจเต้านม + advice คนไข้ (ในใบให้มาว่า ญ 45 ปี มีลูกคนแรกตอน 25 ไม่มีประวัติกินยาคุม ใด ๆ)\" · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง; คำแนะนำการคัดกรองอิงแนวทางไทย/สากล",
 parts:S(
  B("20.1 Clinical breast examination.",8,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต มี chaperone ล้างมือ เปิดเต้านมทั้งสองข้าง · <b>Inspection</b> 3 ท่า: แขนข้างลำตัว, ยกแขนเหนือศีรษะ, เท้าสะเอว (pectoralis contraction) — ดู symmetry, contour, skin dimpling/peau d'orange, nipple retraction/discharge/eczema · <b>Palpation</b>: นอนหงาย มือข้างนั้นไว้ใต้ศีรษะ คลำด้วย pads ของ 3 นิ้วกลาง 3 ระดับแรงกด แบบ vertical strip ครอบคลุม clavicle–inframammary fold–midline–mid-axillary line รวม <b>axillary tail</b> · nipple–areola (ไม่บีบแรง) · ตรวจอีกข้าง · <b>Lymph nodes</b>: axillary (5 กลุ่ม), supraclavicular, infraclavicular · รายงานผล",
   exp:"Vertical strip pattern ครอบคลุมเนื้อเต้านมได้ดีที่สุด",
   rubric:"ได้ตามหมวด",
   pts:[H("Preparation",10),P("Consent, chaperone, hand hygiene","ขออนุญาต","chaperone","consent","ล้างมือ"),H("Inspection",25),CR(P("Inspection in 3 positions","3 ท่า","three position","arms raised","ยกแขน","hands on hips","เท้าสะเอว")),P("Look for skin/nipple changes","dimpl","peau","retraction","nipple","หัวนม"),H("Palpation",45),CR(P("Systematic palpation of whole breast including axillary tail","vertical","strip","circular","systematic","tail","ทั้งเต้า")),P("Both breasts and nipple–areola","nipple","areola","both","สองข้าง"),H("Lymph nodes",20),CR(P("Axillary and supraclavicular nodes","axilla","supraclavic","lymph","ต่อมน้ำเหลือง"))]}),
  B("20.2 Advice.",4,{tags:["pe"],
   ans:"ผลตรวจปกติ · ความเสี่ยงเฉลี่ย (มีบุตรคนแรกอายุ 25 ไม่ได้เพิ่มความเสี่ยงมาก ไม่เคยใช้ฮอร์โมน) · <b>Breast awareness / BSE</b> เดือนละครั้งหลังหมดประจำเดือน 7–10 วัน · <b>CBE</b> โดยบุคลากรทุก 1 ปี (อายุ ≥40) · <b>Screening mammogram</b>: อายุ 40–74 ปีทุก 1–2 ปี (USPSTF 2024: ทุก 2 ปี เริ่ม 40; แนวทางไทยตามสิทธิ์ ≥40 ในกลุ่มเสี่ยง/ตามดุลยพินิจ) · ปรับวิถีชีวิต: ออกกำลังกาย ควบคุมน้ำหนัก ลดแอลกอฮอล์ · มาพบแพทย์ทันทีถ้าพบก้อน หัวนมบุ๋ม/มีเลือดออก ผิวเปลี่ยน",
   exp:"Risk factors: อายุ, ประวัติครอบครัว/BRCA, early menarche, late menopause, nulliparity/บุตรคนแรก &gt;30 ปี, HRT, obesity หลังหมดประจำเดือน, alcohol, chest radiation",
   rubric:"ได้ = แจ้งผล + BSE + mammogram screening + เมื่อไหร่ต้องมาก่อนนัด",
   pts:[P("Explain normal result","ปกติ","normal"),P("Breast self-examination monthly","bse","self","คลำเอง","ตรวจเอง"),CR(P("Screening mammogram","mammo")),P("Red flags/return","ก้อน","lump","มาพบ","return"),P("Lifestyle","exercise","alcohol","weight","น้ำหนัก","ออกกำลัง")]})
 ),
 interp:"ตรวจเต้านมอย่างเป็นระบบและให้คำแนะนำการคัดกรอง",
 summary:["Inspection 3 ท่า → palpation ทั้งเต้ารวม axillary tail → nipple → lymph nodes","คลำ 3 นิ้วกลาง 3 ระดับแรงกด vertical strip","Screening mammogram เริ่ม 40 ปี (USPSTF 2024 ทุก 2 ปี)","High risk (BRCA, radiation): MRI + mammogram เริ่มเร็วกว่า","ก้อนเต้านม → triple assessment (clinical, imaging, biopsy)"]}),

/* ===== OSCE 21 ===== */
Co({page:5,orig:"21",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — sterile gloving and two simple interrupted sutures",
 stem:`A skin-suturing pad, sterile gloves, suture material and instruments are provided. The examiner is observing.<br>1. Put on sterile gloves.<br>2. Close the wound with two simple interrupted sutures.`,
 gray:"(มีอาจารย์) ใส่ถุงมือ sterile + เย็บ 2 simple",
 sp:"(Claude แต่ง) หุ่นผิวหนังมีแผลตรง · ถุงมือ sterile, nylon 3-0/4-0, needle holder, toothed forceps, scissors · ผู้คุมดู: ใส่ถุงมือไม่ปนเปื้อน, จับเข็มด้วย needle holder ที่ 2/3 จากปลาย, แทงตั้งฉาก ระยะเท่ากัน ขอบแผล evert, instrument tie square knot, ตัดไหมยาว ~5 mm",
 flag:"รายละเอียดอุปกรณ์ Claude แต่ง",
 notes:"ต้นฉบับ: \"(มีอาจารย์) ใส่ถุงมือ sterile + เย็บ 2 simple\" · ไม่มีเฉลย · OSCE Subspe 79C มีสถานีคล้ายกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ขั้นตอนตามมาตรฐาน basic surgical skill ความมั่นใจสูง",
 parts:S(
  B("21.1 Put on sterile gloves.",3,{tags:["proc"],
   ans:"ล้างมือ · ตรวจซองไม่ขาด ไม่หมดอายุ ขนาดถูก · เปิดซองนอก วางซองในบนพื้นที่สะอาด · มือเปล่าจับ<b>ด้านในของขอบพับ</b>สวมข้างแรก · มือที่สวมแล้ว<b>สอดนิ้วใต้ขอบพับ (ด้านนอก)</b>ของอีกข้างแล้วสวม · คลี่ขอบพับโดยไม่แตะผิว · มือเหนือเอว ไม่แตะสิ่งไม่ sterile · ปนเปื้อน = เปลี่ยนใหม่",
   exp:"หลัก: ผิวหนังแตะได้เฉพาะด้านใน · ถุงมือ sterile แตะได้เฉพาะด้านนอก",
   rubric:"ได้ = ไม่ปนเปื้อนตลอดขั้นตอน",
   pts:[P("Hand hygiene + check package","ล้างมือ","hand","ซอง","expiry","หมดอายุ"),CR(P("Bare hand touches only inside of cuff; gloved hand only outside","ด้านใน","inside","ใต้ขอบ","under the cuff","outside")),P("Keep hands above waist","เหนือเอว","above waist")]}),
  B("21.2 Two simple interrupted sutures.",7,{tags:["proc"],
   ans:"จับ needle holder ถูกวิธี · <b>จับเข็มที่ 1/2–2/3 จากปลาย</b> ด้วยเครื่องมือ ไม่ใช้มือ · <b>แทงตั้งฉาก</b> ห่างขอบ ~3–5 mm ระยะ = ความลึก สองฝั่งเท่ากัน → ขอบแผล <b>evert</b> · ใช้ toothed forceps จับขอบเบา ๆ · <b>Instrument tie</b>: surgeon's knot แล้ว square knot ≥3 throws · ปมข้างแผล ไม่ตึงเกิน · ตัดไหม ~5 mm · stitch ที่ 2 ห่างพอดี · ทิ้งเข็มลง sharps",
   exp:"ตัดไหม: หน้า 5 วัน, หนังศีรษะ/ลำตัว 7–10, แขนขา 10–14 วัน",
   rubric:"ได้ = จับเข็มถูก + แทงตั้งฉาก ระยะเท่ากัน + evert + square knot",
   pts:[CR(P("Needle held with needle holder at 2/3","needle holder","2/3","จับเข็ม")),CR(P("Perpendicular entry, equal bites, edge eversion","ตั้งฉาก","perpendicular","เท่ากัน","evert")),CR(P("Square knot by instrument tie","square","surgeon","instrument tie","3 throw")),P("Cut suture ~5 mm, sharps disposal","5 mm","ตัดไหม","sharps")]})
 ),
 interp:"หัตถการพื้นฐาน: ใส่ถุงมือ sterile + simple interrupted suture",
 summary:["Sterile gloving: ผิวแตะด้านใน, ถุงมือแตะด้านนอก","จับเข็ม 2/3 จากปลายด้วย needle holder","แทงตั้งฉาก ระยะ = ความลึก ขอบ evert","Surgeon's knot + square knot ≥3 throws"]}),

/* ===== OSCE 22 ===== */
Co({page:5,orig:"22",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Procedure — WHO hand hygiene and dry dressing",
 stem:`A patient has a clean surgical wound requiring a dressing change. Dressing materials and clean (non-sterile) gloves are provided. The examiner is observing.<br>1. Perform hand washing according to the WHO technique.<br>2. Perform a dry dressing of the wound.`,
 gray:"(มีอาจารย์) ล้างมือตาม WHO + ทำแผล dry dressing (ใช้ถุงมือไม่ sterile)",
 sp:"(Claude แต่ง) หุ่น/ผู้ป่วยจำลองมีแผลผ่าตัดสะอาดเย็บแล้วที่หน้าท้อง แผลแห้ง ไม่มีหนอง · ชุดทำแผล (forceps 2 อัน, gauze, สำลี), NSS, povidone/alcohol, เทป, ถุงมือ non-sterile, ถุงขยะติดเชื้อ · ผู้คุมดู: 7 ขั้นตอนล้างมือ WHO, ใส่ถุงมือ, เปิดแผลเก่าทิ้ง, ใช้ forceps แบบ no-touch, เช็ดจากสะอาดไปสกปรก (แผล → รอบแผล) ทีละครั้ง, ปิด gauze เทปขวางแผล",
 flag:"รายละเอียดแผลและอุปกรณ์ Claude แต่ง",
 notes:"ต้นฉบับ: \"(มีอาจารย์) ล้างมือตาม WHO + ทำแผล dry dressing (ใช้ถุงมือไม่ sterile)\" · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("22.1 WHO hand washing.",4,{tags:["proc"],
   ans:"ถอดเครื่องประดับ · เปียกมือ ลงสบู่ · <b>7 ขั้นตอน</b>: 1) ฝ่ามือถูฝ่ามือ 2) ฝ่ามือถูหลังมือและซอกนิ้ว (สลับ) 3) ฝ่ามือถูฝ่ามือนิ้วประสาน 4) หลังนิ้วถูฝ่ามือ (นิ้วล็อก) 5) ถูรอบนิ้วโป้ง (สลับ) 6) ปลายนิ้วถูฝ่ามือ (สลับ) 7) ถูรอบข้อมือ · ล้างออก เช็ดด้วยกระดาษ ใช้กระดาษปิดก๊อก · ใช้เวลา 40–60 วินาที (alcohol rub 20–30 วินาที)",
   exp:"WHO 5 moments: ก่อนสัมผัสผู้ป่วย ก่อนทำหัตถการ aseptic หลังสัมผัสสารคัดหลั่ง หลังสัมผัสผู้ป่วย หลังสัมผัสสิ่งแวดล้อมรอบผู้ป่วย",
   rubric:"ได้ = ครบ 7 ขั้นตอน + เวลาเหมาะ + ปิดก๊อกด้วยกระดาษ",
   pts:[CR(P("All 7 steps","7 ขั้น","seven","7 step","ฝ่ามือ","palm","thumb","นิ้วโป้ง")),P("40–60 seconds","40","60 วินาที","seconds"),P("Dry and turn off tap with towel","กระดาษ","towel","ปิดก๊อก")]}),
  B("22.2 Dry dressing with non-sterile gloves.",6,{tags:["proc"],
   ans:"แนะนำตัว อธิบาย ขออนุญาต จัดท่า เปิดเฉพาะแผล · ใส่ถุงมือ non-sterile <b>ลอกแผลเก่าทิ้ง</b> ดูแผล (บวมแดง หนอง) · ถอดถุงมือ/ล้างมือ เปิดชุดทำแผลแบบ aseptic · ใช้ <b>forceps (no-touch technique)</b>: อันหนึ่งหยิบของสะอาด อีกอันสัมผัสแผล · เช็ดแผลด้วย NSS <b>จากในออกนอก/จากสะอาดไปสกปรก</b> สำลี 1 ก้อนต่อ 1 ครั้ง · antiseptic รอบแผล (ไม่จำเป็นบนแผลสะอาด) · ซับแห้ง · ปิด <b>gauze คลุมแผลเกินขอบ</b> ติดเทปขวางแผล · ทิ้งขยะติดเชื้อ ล้างมือ บันทึก",
   exp:"Dry dressing ใช้กับแผลสะอาดเย็บปิด · แผลมีหนอง/เปิด → wet dressing",
   rubric:"ได้ตามขั้นตอน aseptic",
   pts:[P("Introduce, consent, expose","แนะนำ","ขออนุญาต","consent"),P("Remove old dressing and inspect wound","แผลเก่า","old dressing","inspect","ดูแผล"),CR(P("No-touch technique with forceps","forceps","no-touch","ปากคีบ")),CR(P("Clean from clean to dirty, one swab per stroke","ในออกนอก","inside out","clean to dirty","ทีละครั้ง","one swab")),P("Cover with gauze beyond edges and tape","gauze","ก๊อซ","เทป","tape"),P("Dispose waste, hand hygiene, document","ขยะ","waste","ล้างมือ","บันทึก")]})
 ),
 interp:"ล้างมือ 7 ขั้นตอน WHO และทำแผลแห้ง",
 summary:["WHO handwash 7 steps 40–60 วินาที","Dressing: no-touch technique ด้วย forceps 2 อัน","เช็ดจากสะอาดไปสกปรก สำลี 1 ก้อน 1 ครั้ง","ปิด gauze เกินขอบแผล เทปขวางแผล"]}),

/* ===== OSCE 23 ===== */
Co({page:5,orig:"23",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — digital rectal examination on a model",img:["os78a_23"],kimg:["os78a_k23"],
 stem:`There is no examiner at this station; a rectal examination model is provided. A 70-year-old man with no underlying disease attends for an annual health check.<br>1. Perform a digital rectal examination on the model and describe the prostate.<br>2. What is your diagnosis?<br>3. Outline the management.`,
 gray:"(ไม่มีอาจารย์ มีแต่หุ่นก้น) Digital rectal examination ผู้ป่วยชายอายุ 70 ปี มาตรวจสุขภาพประจำปี ไม่มีโรคประจำตัว · 1. บอกสิ่งที่เจอ (ลักษณะ prostate) 2. บอกการวินิจฉัย 3. management",
 sp:"(Claude แต่ง) หุ่นที่ใช้ในข้อสอบ: ต่อมลูกหมากแข็ง ผิวขรุขระเป็นก้อน (nodular) ขอบไม่ชัด median sulcus คลำไม่ได้ · ผู้สอบตรวจเองแล้วเขียนคำตอบ (ไม่มีอาจารย์คุม)",
 flag:"ลักษณะหุ่นที่ใช้ในข้อสอบ Claude อนุมานจากรูปในไฟล์ (หุ่นที่ถูกตีกรอบแดงมีผิวขรุขระ) · สถานีนี้ไม่มีอาจารย์ แต่จัดเป็นหัวข้อ Physical examination",
 notes:"รูปในไฟล์: หุ่นต่อมลูกหมาก 4 แบบ ผู้จดตีกรอบสีแดงรอบหุ่นด้านซ้ายล่าง (ผิวขรุขระเป็นปุ่ม) — น่าจะเป็นหุ่นที่ใช้ในข้อสอบ · รูปโจทย์ลบกรอบแดงออก รูปต้นฉบับเป็นรูปเฉลย · ข้อสอบ OSCE 78C มีสถานีหุ่น PR \"คลำแล้วแข็ง ๆ ทั่ว ๆ ใหญ่ ๆ\" · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — คำตอบอิงหุ่นที่ถูกตีกรอบในรูป (แข็ง ขรุขระ) = สงสัย carcinoma ความมั่นใจปานกลาง",
 parts:S(
  B("23.1 Describe the prostate.",4,{tags:["pe"],
   ans:"บรรยายตามหลัก: <b>size</b> (ปกติ ~2.5×3 cm ≈ walnut, 20–25 g), <b>consistency</b> (ปกติ rubbery คล้ายปลายจมูก), <b>surface</b> (เรียบ/ขรุขระ), <b>median sulcus</b> (คลำได้/หายไป), <b>nodule</b>, tenderness, mobility ของ rectal mucosa · หุ่นนี้: <b>ต่อมแข็ง (hard/stony) ผิวขรุขระมี nodule ขอบไม่เรียบ median sulcus หายไป ไม่เจ็บ</b>",
   exp:"BPH: โตเรียบ consistency rubbery median sulcus ตื้น · Carcinoma: แข็ง nodular ไม่สมมาตร · Prostatitis: นุ่ม บวม กดเจ็บมาก (ห้ามนวด)",
   rubric:"ได้ = บรรยาย size, consistency, surface, median sulcus, nodule",
   pts:[P("Size","size","ขนาด","enlarged","โต"),CR(P("Hard consistency","hard","แข็ง","stony","firm")),CR(P("Irregular/nodular surface","nodul","irregular","ขรุขระ","ก้อน")),P("Median sulcus obliterated","median sulcus","sulcus")]}),
  B("23.2 Diagnosis.",2,{tags:["pe"],
   ans:"<b>Suspected carcinoma of the prostate</b> (ต่อมแข็งขรุขระ) · DDx: BPH, chronic prostatitis, prostatic calculi",
   exp:"DRE ผิดปกติเป็นข้อบ่งชี้ biopsy แม้ PSA ปกติ",
   rubric:"ได้ = prostate cancer",
   pts:[CR(P("Prostate cancer","carcinoma","cancer","มะเร็ง","ca prostate"))]}),
  B("23.3 Management.",4,{tags:["pe"],
   ans:"<b>Serum PSA</b> · <b>mpMRI prostate</b> → <b>biopsy</b> (MRI-targeted + systematic, transperineal/TRUS) · ยืนยันแล้ว: staging (Gleason/ISUP grade, PSA, clinical T) → bone scan/PSMA PET, CT ตามความเสี่ยง · รักษาตาม risk และ life expectancy: active surveillance, radical prostatectomy, radiotherapy ± ADT, หรือ ADT สำหรับ metastatic",
   exp:"PSA &gt;4 ng/mL หรือ DRE ผิดปกติ → MRI/biopsy",
   rubric:"ได้ = PSA + MRI/biopsy + แผนตาม stage",
   pts:[P("PSA","psa"),CR(P("Biopsy (± MRI first)","biopsy","ตัดชิ้นเนื้อ","mri")),P("Staging and risk-based treatment","staging","bone scan","psma","prostatectomy","radiotherapy","adt","gleason")]})
 ),
 interp:"DRE บนหุ่น: บรรยายต่อมลูกหมาก วินิจฉัย และสืบค้นต่อ",
 summary:["Prostate DRE: size, consistency, surface, median sulcus, nodule, tenderness","BPH = โตเรียบ rubbery · CA = แข็ง nodular · prostatitis = นุ่ม เจ็บ","Abnormal DRE → PSA + mpMRI + biopsy","ISUP grade group 1–5, staging ด้วย PSMA PET/bone scan","Low-risk → active surveillance"]}),

/* ===== OSCE 24 ===== */
Co({page:5,orig:"24",topic:"suture",sub:"Suture material",title:"Suture materials — choose for four tasks",
 stem:`Five suture materials are provided: polyglactin 910 (Vicryl), silk, catgut, polypropylene (Prolene) and nylon.<br>1. Which suture would you use for each of the following: (a) arterial anastomosis, (b) ligation of a vein, (c) repair of muscle, (d) skin closure?`,
 gray:"ถามเรื่องไหม ให้ไหมมา 5 อัน (vicryl, silk, catgut, prolene, nylon) ใช้อันไหนเย็บเชื่อมเส้นเลือดแดง/ผูกตัดเส้นเลือดดำ/เย็บซ่อมกล้ามเนื้อ/เย็บ skin · 1.",
 notes:"ไม่มีรูป ไม่มีเฉลย · ไหม 5 ชนิดแต่ถามงาน 4 อย่าง (เหลือ 1 ชนิดเป็นตัวลวง)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูงสำหรับ arterial anastomosis (Prolene) และ skin (nylon); ligation of vein ใช้ silk หรือ Vicryl ได้ทั้งคู่ในทางปฏิบัติ",
 imgAlt:"ซองไหม 5 ชนิด",
 parts:S(
  B("24.1 Choose a suture for each task.",8,{tags:["suture"],
   ans:"(a) <b>Arterial anastomosis → Prolene (polypropylene)</b>: non-absorbable monofilament เรียบ ลื่น thrombogenicity ต่ำ คงความแข็งแรงถาวร · (b) <b>Ligation of a vein → silk</b> (non-absorbable braided ผูกปมแน่นง่าย) หรือ Vicryl (absorbable braided) · (c) <b>Muscle repair → Vicryl (polyglactin 910)</b>: absorbable braided คงแรง ~3 สัปดาห์ · (d) <b>Skin → nylon</b>: non-absorbable monofilament ปฏิกิริยาเนื้อเยื่อน้อย ตัดออกภายหลัง · Catgut (absorbable natural) ปฏิกิริยาเนื้อเยื่อสูง ใช้ลดลง (ถูกห้ามในหลายประเทศ)",
   exp:"Absorbable: catgut (plain/chromic), Vicryl, PDS, Monocryl · Non-absorbable: silk, nylon, Prolene, steel · Monofilament: ติดเชื้อน้อยกว่า ผ่านเนื้อเยื่อเรียบ แต่ผูกปมยาก (ต้อง throw มากกว่า)",
   rubric:"2 คะแนนต่องาน",
   pts:[CR(P("Arterial anastomosis: Prolene","prolene","polypropylene")),P("Vein ligation: silk (or Vicryl)","silk","vicryl"),P("Muscle: Vicryl","vicryl","polyglactin"),P("Skin: nylon","nylon")]})
 ),
 interp:"เลือกไหมตามงาน",
 summary:["Vascular anastomosis: Prolene (monofilament non-absorbable)","Skin: nylon (หรือ subcuticular Monocryl)","Fascia/muscle: Vicryl/PDS (หรือ loop PDS สำหรับปิดหน้าท้อง)","Ligation: silk/Vicryl","Bowel anastomosis: Vicryl/PDS (absorbable)"]}),

/* ===== OSCE 25 ===== */
Co({page:5,orig:"25",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a swollen glans with a constricting band",
 stem:`A photograph shows the penis of a 6-year-old boy whose foreskin has been retracted behind the glans and cannot be returned. The glans is swollen and painful, with a tight band behind it.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"ให้รูป paraphimosis · 1. การวินิจฉัย 2. วิธีรักษา (1) Diagnosis (2) Management",
 flag:NOIMG+" · อายุและคำบรรยายภาพ Claude แต่ง",imgAlt:"องคชาตที่หนังหุ้มปลายถูกรูดค้างหลัง glans glans บวมแดง มีวงรัด",
 notes:"ต้นฉบับ: \"ให้รูป paraphimosis\" ไม่มีรูปในไฟล์ ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("25.1 Diagnosis.",2,{tags:["img"],
   ans:"<b>Paraphimosis</b>",
   exp:"หนังหุ้มปลายที่ถูกรูดลงค้างหลัง corona → venous/lymphatic congestion → glans บวม → ถ้านานเกิด arterial compromise/necrosis — <b>urologic emergency</b>",
   rubric:"ได้ = paraphimosis",
   pts:[CR(P("Paraphimosis","paraphimosis"))]}),
  B("25.2 Treatment.",4,{tags:["img"],
   ans:"<b>Manual reduction</b> โดยเร็ว: analgesia (penile block/topical anesthetic, sedation ในเด็ก) · ลดบวมด้วยการบีบ glans ค้างไว้ (manual compression), ice/cold compress, granulated sugar หรือ puncture technique (เจาะเข็มเล็กหลายจุด) · ใช้นิ้วโป้งดัน glans เข้าขณะนิ้วชี้สองข้างดึง prepuce ไปข้างหน้า · ล้มเหลว → <b>dorsal slit</b> (emergency) · ภายหลัง: <b>elective circumcision</b> ป้องกันการเป็นซ้ำ · สอนไม่ให้รูดหนังทิ้งไว้ (หลังใส่ Foley/ทำความสะอาด)",
   exp:"Phimosis = รูดหนังลงไม่ได้ · Paraphimosis = รูดแล้วกลับขึ้นไม่ได้",
   rubric:"ได้ = manual reduction + dorsal slit ถ้าล้มเหลว + circumcision ภายหลัง",
   pts:[CR(P("Manual reduction with analgesia","manual","reduction","ดันกลับ","รูดกลับ")),P("Reduce edema (compression, ice, puncture)","compress","ice","puncture","sugar","บีบ"),P("Dorsal slit if fails","dorsal slit"),P("Elective circumcision later","circumcis","ขลิบ")]})
 ),
 interp:"Paraphimosis: urologic emergency → manual reduction",
 summary:["Paraphimosis = emergency (glans ischemia)","Manual reduction + ลดบวม","Dorsal slit ถ้าล้มเหลว","Circumcision ภายหลัง","สาเหตุบ่อย: ลืมรูดหนังกลับหลังใส่ Foley/ทำความสะอาด"]}),

/* ===== OSCE 26 ===== */
Co({page:5,orig:"26",topic:"inst",sub:"Ostomy appliance",title:"Stoma and appliance — after an operation for perforated large-bowel obstruction",
 stem:`A patient with large-bowel obstruction and perforation of the sigmoid colon underwent an operation: "______ with Hartmann's procedure".<br>1. Name the operation.<br>2. A model with a stoma on the left lower abdomen is shown. What is this stoma called?<br>3. A pouch is provided. What is it called?`,
 gray:"ผู้ป่วย gut obstruction มี perforation เลยทำ procedure ชื่อว่า ________ with Hartmann's procedure · 1. Procedure ชื่ออะไร 2. ให้หุ่นมี stoma แปะมา ถามว่าเรียกว่าอะไร (Colostoma) 3. ให้ pouch มาแล้วถามว่าเรียกว่าอะไร (Colostomy bag/pouch)",
 flag:"ตำแหน่ง sigmoid และ stoma ที่ left lower abdomen Claude เติม",
 notes:"ผู้จดใส่คำตอบไว้ในวงเล็บเอง: stoma = \"(Colostoma)\" [= colostomy], pouch = \"(Colostomy bag/pouch)\" · ไม่มีรูป ไม่มีไฟล์เฉลย",
 opinion:"เห็นด้วยกับคำตอบที่ผู้จดใส่ไว้ (end colostomy, colostomy bag) ความมั่นใจสูง; ชื่อการผ่าตัดคือ exploratory laparotomy with sigmoidectomy (Hartmann's procedure)",
 imgAlt:"หุ่นหน้าท้องมี stoma ที่ท้องน้อยซ้าย และถุงรองรับอุจจาระ",
 parts:S(
  B("26.1 Name the operation.",2,{tags:["inst"],
   ans:"<b>Exploratory laparotomy with (sigmoid) colectomy — Hartmann's procedure</b>: ตัดลำไส้ส่วนที่ทะลุ/อุดตัน <b>ปิดตอปลาย (rectal stump)</b> และนำตอต้นออกเป็น <b>end colostomy</b> โดยไม่ต่อลำไส้",
   exp:"ใช้ในภาวะฉุกเฉินที่ต่อลำไส้ไม่ปลอดภัย (fecal peritonitis, unprepared bowel, unstable) เช่น perforated diverticulitis (Hinchey III–IV), obstructing sigmoid cancer with perforation · ต่อกลับ (Hartmann reversal) หลัง 3–6 เดือน",
   rubric:"ได้ = exploratory laparotomy + sigmoidectomy/colectomy (Hartmann)",
   pts:[CR(P("Exploratory laparotomy with sigmoid colectomy","laparotomy","explor","sigmoidectomy","colectomy","resection"))]}),
  B("26.2 Name the stoma.",2,{tags:["inst"],
   ans:"<b>End colostomy</b> (sigmoid/descending) ที่ left iliac fossa · ลักษณะ: ราบ/ยื่นเล็กน้อย ~0.5–1 cm อุจจาระค่อนข้างเป็นก้อน",
   exp:"Ileostomy: ด้านขวา ยื่น 2–3 cm (spout) อุจจาระเหลว เสี่ยง dehydration",
   rubric:"ได้ = end colostomy",
   pts:[CR(P("End colostomy","colostom"))]}),
  B("26.3 Name the pouch.",1,{tags:["inst"],
   ans:"<b>Colostomy bag (ostomy pouch/appliance)</b> — ระบบชิ้นเดียวหรือสองชิ้น (baseplate/flange + pouch) · colostomy มักใช้ถุงปลายปิด (closed-end) · ตัดรูแป้นให้ใหญ่กว่า stoma ~2–3 mm",
   exp:"Ileostomy ใช้ถุงปลายเปิด (drainable)",
   rubric:"ได้ = colostomy bag/pouch",
   pts:[CR(P("Colostomy bag/pouch","bag","pouch","ถุง"))]})
 ),
 interp:"Hartmann's procedure, end colostomy และอุปกรณ์",
 summary:["Hartmann: resection + end colostomy + closed rectal stump","Indication: perforation/peritonitis/unprepared bowel/unstable","Colostomy: ซ้าย ราบ อุจจาระก้อน · Ileostomy: ขวา ยื่น อุจจาระเหลว","Reversal 3–6 เดือน","ตัดรูแป้นใหญ่กว่า stoma 2–3 mm"]}),

/* ===== OSCE 27 ===== */
Co({page:6,orig:"27",topic:"img",sub:"CXR",title:"Chest radiograph — an upright film",img:["os78a_27"],
 stem:`An upright chest radiograph of a patient with acute abdominal pain is shown.<br>1. Report the abnormal findings.<br>2. Give two differential diagnoses.<br>3. Give the cause of each disease in question 2.`,
 gray:"ไรว้าลืม ใช่ pneumoperitoneum · 1. รายงาน abnormal findings 2. Differential diagnosis 2 อย่าง 3. จงบอกสาเหตุของโรคในข้อ 2",
 flag:"ประวัติผู้ป่วยปวดท้องเฉียบพลัน Claude เติม",
 notes:"ต้นฉบับ: \"ไรว้าลืม ใช่ pneumoperitoneum\" (ผู้จดจำไม่แน่ แต่คิดว่าเป็น pneumoperitoneum) · รูป CXR ในไฟล์ · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ภาพ CXR ในไฟล์เห็นแถบอากาศใต้กะบังลม (ข้างขวาชัด) เข้ากับ pneumoperitoneum ความมั่นใจปานกลาง-สูง",
 parts:S(
  B("27.1 Abnormal findings.",3,{tags:["img"],
   ans:"Upright CXR: <b>free air under the diaphragm (subdiaphragmatic free gas)</b> — แถบอากาศรูปจันทร์เสี้ยวระหว่างกะบังลมกับตับ (ขวาเห็นชัด) = <b>pneumoperitoneum</b> · lung fields ไม่มี consolidation ชัด",
   exp:"แยก Chilaiditi sign (colon แทรกระหว่างตับกับกะบังลม — เห็น haustra) และกระเพาะใต้กะบังลมซ้าย · upright CXR ไวต่อ free air ≥1–2 mL (ให้ผู้ป่วยนั่ง 5–10 นาที) · ถ้ายืนไม่ได้ → left lateral decubitus",
   rubric:"ได้ = free air under diaphragm/pneumoperitoneum",
   pts:[CR(P("Free air under the diaphragm / pneumoperitoneum","free air","pneumoperitoneum","subdiaphragm","ใต้กะบังลม"))]}),
  B("27.2 Two differential diagnoses.",2,{tags:["img"],
   ans:"<b>Perforated peptic ulcer</b> (บ่อยที่สุด) · <b>perforated colon</b> (perforated diverticulitis, colonic cancer, perforation จาก obstruction/volvulus) · อื่น: perforated appendicitis (free air พบน้อย), traumatic hollow viscus injury · ไม่ผ่าตัด: post-laparotomy/laparoscopy, peritoneal dialysis",
   exp:"Free air + peritonitis = surgical emergency",
   rubric:"1 คะแนนต่อโรค",
   pts:[CR(P("Perforated peptic ulcer","peptic","ulcer","pu","duoden","gastric")),G("อื่น (≥1)",1,P("Perforated colon/diverticulitis","colon","diverticul","large bowel"),P("Perforated appendix","append"),P("Traumatic perforation","trauma"))]}),
  B("27.3 Cause of each.",2,{tags:["img"],
   ans:"Perforated PU: <b>H. pylori</b>, <b>NSAIDs/aspirin</b>, สูบบุหรี่, steroid ร่วม NSAIDs, stress · Perforated colon: <b>diverticulitis</b>, obstructing colorectal cancer (closed-loop → cecal perforation), volvulus, ischemic colitis, iatrogenic (colonoscopy)",
   exp:"PPU รักษา: resuscitation, NG, PPI IV, ATB → laparoscopic/open omental (Graham) patch + H. pylori eradication",
   rubric:"ได้ = สาเหตุของแต่ละโรค",
   pts:[P("PU: H. pylori/NSAIDs","pylori","nsaid","aspirin"),P("Colon: diverticulitis/cancer/obstruction","diverticul","cancer","obstruct","volvulus")]})
 ),
 interp:"Upright CXR: pneumoperitoneum → hollow viscus perforation",
 summary:["Free air under diaphragm = hollow viscus perforation จนกว่าจะพิสูจน์ว่าไม่ใช่","PPU บ่อยที่สุด — H. pylori, NSAIDs","Chilaiditi sign เป็น pseudo-pneumoperitoneum","Upright CXR นั่ง 5–10 นาทีก่อนถ่าย; ยืนไม่ได้ → left lateral decubitus","Management: resuscitate, NG, ATB, PPI → surgery"]})
);
})();
