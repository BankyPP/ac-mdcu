(function(){
/* SI Med OSCE — SI127 Rotate 413–416 · ไฟล์ OSCE_MED_413-416.pdf (โค้ด SIOS127D) 6 หน้า — ทั้งไฟล์เป็น OSCE
   รูปแบบไฟล์: recall พิมพ์ล้วน 22 สถานี (เลข 1–22 ต่อเนื่อง ไม่มีฐานพัก ไม่แบ่งพาร์ท OSCE/LAB) · ไม่มีลายมือ ไม่มีไฮไลต์ ไม่มีเฉลย/คีย์ท้ายไฟล์
   ผู้ใช้บอก: OSCE ชุดนี้ไม่มีเฉลย → key:NK ทุกข้อย่อย Claude เฉลยเองตาม guideline/ตำรา
   สถานีที่มีอาจารย์ (ex:1): ซักประวัติ 2, 8, 16, 22 · ตรวจร่างกาย 5 · หัตถการ (proc:1) 4, 11, 14, 18 — ไฟล์ให้แค่หัวข้อ บทผู้ป่วย (sp) / อายุ เพศ Claude แต่ง
   รูป: os127d_<เลขสถานี> ครบทุกสถานีที่มีรูป (1, 3, 7, 9, 10, 12, 13, 15, 17, 19, 20, 21) · ไม่มีรูปเฉลย (kimg) */
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
const NOTE0="ไฟล์เป็น recall พิมพ์ ไม่มีลายมือ/คำตอบของผู้จด";
const Co=o=>Object.assign({set:"SI127",ro:"Ro413–416",file:"SIOS127D",notes:NOTE0,opinion:""},o);
QB.push(

/* ===== สถานี 1 ===== */
Co({page:1,orig:"1",topic:"micro",sub:"Gram stain",title:"Intubated 60-year-old man with fever and dyspnea — sputum Gram stain",img:["os127d_1"],imgNote:"Sputum Gram stain, oil immersion",
 seen:"คล้าย SI131 Ro413–416 ข้อ 1 · SI131 Ro401–404 ข้อ 1 (ผู้ป่วยใส่ท่อช่วยหายใจ/ICU sputum Gram stain → A. baumannii)",
 stem:`A 60-year-old man who is intubated and on mechanical ventilation develops fever and increasing dyspnea. A Gram stain of his sputum is shown.<br>1.1 Describe the findings.<br>1.2 Give the full name of the most likely causative organism.`,
 gray:"1. ชาย 60 ปี ใส่ท่อช่วยหายใจ มีไข้ขึ้น หอบเหนื่อย sputum examination เป็นดังนี้ (รูป) · จงบรรยาย · บอกชื่อเต็มเชื้อก่อโรค",
 flag:"รูปเห็นเชื้อ gram-negative ทรงกลมป้อมติดกันเป็นคู่ (coccobacilli/diplococci) — ไฟล์ไม่มีคีย์ Claude เฉลย <i>Acinetobacter baumannii</i> ตามบริบท ventilator-associated pneumonia (ตรงกับชุดอื่นที่โจทย์คล้ายกัน) · ถ้าอาจารย์ใช้รูปนี้เป็น <i>Moraxella catarrhalis</i> (gram-negative diplococci) คำตอบจะต่าง — ใส่ไว้เป็น Ddx",
 parts:S(
  B("1.1 Describe the findings.",4,{tags:["micro"],
   ans:"<b>Numerous gram-negative (สีชมพู-แดง) coccobacilli</b> ทรงกลมป้อม <b>เรียงเป็นคู่ (diplococcoid)</b> บางกลุ่มเป็นกระจุก/สายสั้น อยู่นอกเซลล์และใน mucus strand · inflammatory cell เห็นไม่ชัดในภาพนี้ · <b>คุณภาพเสมหะ</b> ต้องประเมินที่ low power: <b>PMN &gt; 25/LPF และ squamous epithelial cell &lt; 10/LPF = adequate specimen</b>",
   exp:"<i>Acinetobacter</i> ย้อมแล้วมักดูเป็น coccobacilli หรือ diplococci (อาจติดสีไม่สม่ำเสมอ/ดูเหมือน gram-positive บ้างเพราะ decolorize ยาก) — ต่างจาก Enterobacterales (Klebsiella, E. coli) ที่เป็น rod ชัด · gram-negative diplococci ทรงไต = <i>Moraxella</i>/<i>Neisseria</i>",
   rubric:"ได้เต็ม = gram-negative + coccobacilli/diplococci + พูดถึงเกณฑ์ adequate sputum · ตอบ gram-negative bacilli (ไม่ระบุ coccobacilli) ได้บางส่วน · ตอบ gram-positive = 0",
   pts:[H("Organism",70),CR(P("Gram-negative organisms","gram.?neg","แกรมลบ","\\bgn[cb]")),P("Coccobacilli / diplococci in pairs","coccobac","diplococ","คู่","pair"),P("Numerous, extracellular","numerous","จำนวนมาก","extracellular","นอกเซลล์"),
    H("Specimen quality",30),P("Adequacy criteria: PMN > 25/LPF, squamous epithelial cells &lt; 10/LPF","adequate","acceptable","pmn","epithelial","squamous","lpf")]}),
  B("1.2 Full name of the most likely organism",3,{tags:["micro"],
   ans:"<b><i>Acinetobacter baumannii</i></b> — ventilator-associated pneumonia (VAP)",
   exp:"VAP = ปอดอักเสบที่เกิดหลังใส่ท่อช่วยหายใจ ≥ 48 ชม. · ในไอซียูไทย <i>A. baumannii</i> มักเป็น <b>carbapenem-resistant (CRAB)</b> → ยาที่ใช้: colistin, high-dose ampicillin-sulbactam (± sulbactam-durlobactam ถ้ามี) ตามผลเพาะเชื้อ · Ddx gram-negative diplococci: <i>Moraxella catarrhalis</i> (มักเป็น community-acquired ในผู้ป่วย COPD)",
   rubric:"ต้องเขียนชื่อเต็ม genus + species สะกดถูก · เขียนย่อ A. baumannii ได้คะแนนน้อยกว่า · ตอบ Moraxella catarrhalis ได้บางส่วน (ถ้าอาจารย์ใช้รูปเป็น gram-negative diplococci)",
   pts:[CR(P("Acinetobacter baumannii","acinetobacter","baumann"))]})
 ),
 interp:"Gram stain เสมหะผู้ป่วยใส่ท่อช่วยหายใจ: บอก gram reaction + รูปร่าง + คุณภาพเสมหะ → เชื้อก่อ VAP",
 summary:["Adequate sputum: PMN &gt; 25/LPF และ squamous epithelial cell &lt; 10/LPF","<i>Acinetobacter baumannii</i> = gram-negative coccobacilli มักเรียงเป็นคู่ เชื้อเด่นของ VAP ในไทย มักดื้อ carbapenem","Gram-negative diplococci ทรงไต = Moraxella/Neisseria; Enterobacterales = rod"]}),

/* ===== สถานี 2 ===== */
Co({page:1,orig:"2",topic:"hx",sub:"Abdominal pain",ex:1,title:"History taking — epigastric pain for 2 days",
 seen:"คล้าย SI132 Ro405–406 A5 (ซักประวัติ epigastric pain) · SI132 Ro403–404 ข้อ 13 (chronic epigastric pain)",
 stem:`A 50-year-old man presents with epigastric pain for 2 days.<br>2.1 Take a focused history from the patient.<br>2.2 Give your differential diagnosis.`,
 gray:"2. ซักประวัติ เจ็บลิ้นปี่มา 2 วัน พร้อม Differential diagnosis",
 flag:"ไฟล์ให้แค่หัวข้อ — อายุ เพศ และบทผู้ป่วย (sp) Claude แต่ง",
 sp:"ชายไทย 50 ปี พนักงานขับรถ · <b>ปวดแสบลิ้นปี่ 2 วัน</b> ปวดตื้อ ๆ แสบร้อน ไม่ร้าว ความปวด 5/10 · <b>ปวดมากขึ้นหลังกินอาหาร</b> ทุเลาบ้างเมื่อกินยาลดกรด · คลื่นไส้เล็กน้อย ไม่อาเจียน · <b>1 สัปดาห์ก่อนปวดเข่า ซื้อยาแก้ปวด (ibuprofen 400 mg วันละ 3 ครั้ง) กินเอง</b> ยังกินอยู่ · ไม่อาเจียนเป็นเลือด อุจจาระสีปกติ ไม่ดำ · ไม่มีไข้ ไม่ตัวเหลือง ปัสสาวะสีปกติ · ไม่ปวดร้าวไปหลัง · ไม่เจ็บแน่นหน้าอก ไม่เหงื่อแตก ไม่เหนื่อย · น้ำหนักไม่ลด กลืนได้ปกติ ไม่อิ่มเร็ว · ดื่มเบียร์สัปดาห์ละ 2–3 วัน วันละ 2 กระป๋อง สูบบุหรี่ 10 มวน/วัน 20 ปี · โรคประจำตัว: HT กิน amlodipine · ไม่เคยส่องกล้อง ไม่เคยรู้ว่ามีนิ่ว · ครอบครัว: ไม่มีใครเป็นมะเร็งกระเพาะ",
 parts:S(
  B("2.1 Take a focused history.",10,{tags:["hx"],
   ans:"<b>ลักษณะปวด (OPQRST)</b>: เริ่มทันที/ค่อยเป็น ตำแหน่ง <b>ร้าว</b> (หลัง → pancreatitis/AAA; ใต้ชายโครงขวา/สะบักขวา → biliary; อก/แขน/กราม → ACS) ลักษณะ (แสบ/บีบ/แน่น) ความรุนแรง <b>สัมพันธ์กับอาหาร</b> สิ่งที่ทำให้ดีขึ้น/แย่ลง (ยาลดกรด, โน้มตัวไปข้างหน้า) · <b>อาการร่วม</b>: คลื่นไส้อาเจียน <b>อาเจียนเป็นเลือด/ถ่ายดำ</b> ไข้ <b>ตัวเหลือง ปัสสาวะเข้ม อุจจาระซีด</b> ท้องเสีย · <b>อาการหัวใจ</b>: เจ็บแน่นหน้าอก เหงื่อแตก เหนื่อย ใจสั่น · <b>Alarm features</b>: น้ำหนักลด กลืนลำบาก อิ่มเร็ว อาเจียนต่อเนื่อง ซีด · <b>ปัจจัยเสี่ยง/สาเหตุ</b>: <b>NSAIDs/aspirin</b>, steroid, anticoagulant, <b>แอลกอฮอล์</b>, บุหรี่, นิ่วถุงน้ำดี, ไขมันสูง, เคยเป็นแผลในกระเพาะ/H. pylori · โรคประจำตัว (CVD risk: HT DM DLP) · ครอบครัวมะเร็งกระเพาะ",
   exp:"Epigastric pain ต้องคิดถึง <b>ACS (inferior wall)</b> เสมอโดยเฉพาะผู้สูงอายุ/มีปัจจัยเสี่ยง · alarm features (อายุ ≥ 60 ปีตาม ACG, GI bleed, น้ำหนักลด, dysphagia, anemia, vomiting) → upper endoscopy",
   rubric:"ได้เต็ม = OPQRST + อาการร่วมทางเดินอาหาร + GI bleeding + ซักแยก ACS/pancreatitis/biliary + alarm features + ยา NSAIDs/แอลกอฮอล์ · ไม่ถาม GI bleeding หรือ NSAIDs = ข้อสำคัญขาด",
   pts:[H("แนะนำตัว",5),P("Introduce, identify patient, explain purpose","แนะนำตัว","สวัสดี","introduc","ขออนุญาต"),
    H("ลักษณะปวด",30),P("Onset, character, severity, timing","เริ่ม","onset","character","ลักษณะ","แสบ","บีบ","severity","คะแนน"),CR(P("Radiation (back, right shoulder, chest/arm/jaw)","ร้าว","radiat","ปวดหลัง","\\bback\\b")),P("Relation to meals; relieving/aggravating factors (antacid, leaning forward)","สัมพันธ์กับอาหาร","หลังอาหาร","ก่อนอาหาร","หลังกิน","ตอนหิว","meal","antacid","ยาลดกรด","โน้มตัว"),
    H("อาการร่วม / แยกโรค",40),CR(P("Hematemesis / melena","อาเจียนเป็นเลือด","ถ่ายดำ","melena","hematemesis","อุจจาระดำ")),P("Nausea, vomiting, fever, jaundice, dark urine, pale stool","คลื่นไส้","อาเจียน","ไข้","fever","เหลือง","jaundice","ปัสสาวะ","อุจจาระซีด"),CR(P("Cardiac symptoms: chest tightness, sweating, dyspnea","เจ็บหน้าอก","แน่นหน้าอก","chest","เหงื่อ","sweat","เหนื่อย","dyspn")),P("Alarm features: weight loss, dysphagia, early satiety, anemia","น้ำหนักลด","weight loss","กลืน","dysphag","อิ่มเร็ว","satiety","ซีด","alarm"),
    H("ปัจจัยเสี่ยง",25),CR(P("NSAIDs / aspirin / steroid / anticoagulant use","nsaid","ibuprofen","aspirin","ยาแก้ปวด","steroid","anticoag","ยาละลายลิ่มเลือด","ยาต้านเกล็ดเลือด")),P("Alcohol, smoking","เหล้า","alcohol","เบียร์","บุหรี่","smok"),P("History of PUD / H. pylori / gallstone / hypertriglyceridemia","แผลในกระเพาะ","pud","pylori","นิ่ว","gallstone","ไขมัน","triglycer"),P("Comorbidities (CVD risk) and family history of gastric cancer","โรคประจำตัว","underlying","ความดัน","เบาหวาน","ครอบครัว","family")]}),
  B("2.2 Differential diagnosis",4,{tags:["hx","ddx"],
   ans:"<b>Leading: NSAID-induced peptic ulcer disease / acute gastritis (erosive gastropathy)</b> — ปวดแสบลิ้นปี่สัมพันธ์กับอาหาร ทุเลาด้วยยาลดกรด หลังกิน ibuprofen ต่อเนื่อง + ดื่มเหล้า สูบบุหรี่ · Ddx: <b>functional dyspepsia/GERD</b> · <b>acute pancreatitis</b> (ปวดร้าวหลัง, เหล้า, นิ่ว) · <b>biliary colic/acute cholecystitis</b> · <b>acute coronary syndrome (inferior wall)</b> · early appendicitis · acute hepatitis · (gastric cancer ถ้ามี alarm features)",
   exp:"แนวทาง: หยุด NSAIDs, ให้ PPI, ตรวจ H. pylori (urea breath test/stool antigen; หยุด PPI 2 สัปดาห์ก่อนตรวจ) · ถ้ามี GI bleeding/alarm → EGD · ตรวจ EKG + troponin ถ้ามีปัจจัยเสี่ยงหัวใจ · lipase ถ้าสงสัย pancreatitis",
   rubric:"ได้เต็ม = PUD/gastritis จาก NSAIDs เป็นอันดับแรก + Ddx ≥ 3 ที่รวม ACS และ pancreatitis/biliary",
   pts:[CR(P("Peptic ulcer disease / gastritis (NSAID-induced)","peptic","\\bpud\\b","ulcer","gastritis","แผลในกระเพาะ","กระเพาะอักเสบ","nsaid")),G("Other differentials (≥ 3)",3,P("Acute coronary syndrome (inferior MI)","\\bacs\\b","coronary","\\bmi\\b","infarct","หัวใจขาดเลือด"),P("Acute pancreatitis","pancreatitis","ตับอ่อน"),P("Biliary colic / cholecystitis","biliary","cholecyst","gallstone","นิ่ว","ถุงน้ำดี"),P("GERD / functional dyspepsia","gerd","reflux","dyspepsia"),P("Appendicitis","appendic","ไส้ติ่ง"),P("Hepatitis","hepatitis","ตับอักเสบ"),P("Gastric cancer","gastric cancer","มะเร็ง"))]})
 ),
 interp:"ซักประวัติปวดลิ้นปี่: OPQRST → GI bleeding → แยก ACS/pancreatitis/biliary → alarm features → NSAIDs/แอลกอฮอล์",
 summary:["ปวดลิ้นปี่ต้องแยก ACS (inferior MI), pancreatitis (ร้าวหลัง), biliary (ร้าวใต้ชายโครงขวา) เสมอ","ถาม NSAIDs/aspirin, แอลกอฮอล์, บุหรี่, H. pylori และ GI bleeding (ถ่ายดำ/อาเจียนเลือด)","Alarm features (น้ำหนักลด กลืนลำบาก ซีด อาเจียนต่อเนื่อง เลือดออก) → EGD"]}),

/* ===== สถานี 3 ===== */
Co({page:1,orig:"3",topic:"micro",sub:"PBS",title:"Peripheral blood smear — describe and investigate",img:["os127d_3"],imgNote:"Peripheral blood smear (Wright stain); the arrow marks a cell of interest",
 seen:"คล้าย SI130 Ro409–412 ข้อ 24 · SI131 Ro401–404 ข้อ 2 (smear rouleaux → multiple myeloma — ชุดนั้นมีอาการเพลีย ท้องผูก)",
 stem:`A peripheral blood smear is shown. The arrow marks a cell of interest.<br>3.1 Describe this blood smear.<br>3.2 What further investigations would you request?`,
 gray:"3. (รูป PBS มีลูกศรชี้เซลล์) · จงบรรยาย PBS นี้ · จงส่งตรวจเพิ่มเติม",
 flag:"ไฟล์ไม่มีประวัติผู้ป่วย · มุมขวาล่างของรูปมีลายน้ำแหล่งที่มา (ภาพตำรา) — ไม่ได้บอกคำตอบ",
 parts:S(
  B("3.1 Describe this blood smear.",5,{tags:["micro"],
   ans:"<b>RBC</b>: normochromic normocytic RBC, no significant anisopoikilocytosis, <b>rouleaux formation</b> (RBC ≥ 4 ตัวเรียงซ้อนกันเหมือนเหรียญ ในบริเวณ thin area) · <b>WBC</b>: <b>plasma cell</b> (ลูกศร) — round <b>eccentric nucleus</b>, coarse 'clock-face' chromatin, abundant <b>deep basophilic cytoplasm</b> with <b>perinuclear clearing (hof)</b> · <b>Platelet</b>: adequate, normal staining · → เข้าได้กับ <b>plasma cell neoplasm (multiple myeloma)</b>",
   exp:"Key PBS (MM): normochromic normocytic, rouleaux formation, blue-staining background, อาจพบ plasma cell · rouleaux ใน thin area = paraproteinemia (polyclonal: infection/inflammation; monoclonal: MM, Waldenström) · plasma cell ในเลือด &gt; 20% หรือ &gt; 2,000/µL = plasma cell leukemia",
   rubric:"ได้เต็ม = rouleaux + บรรยาย plasma cell (eccentric nucleus, basophilic cytoplasm, perinuclear halo) + สรุป MM · บอกแค่ 'atypical lymphocyte' ได้น้อย",
   pts:[H("RBC",40),P("Normochromic normocytic RBC","normochrom","normocyt"),CR(P("Rouleaux formation","rouleaux","เหรียญ","stack")),H("WBC",50),CR(P("Plasma cell (arrow)","plasma ?cell","plasmacyt")),P("Eccentric nucleus, basophilic cytoplasm, perinuclear halo (hof)","eccentric","basophil","perinuclear","halo","hof","clock"),H("Platelet / conclusion",10),P("Platelets adequate; suggests multiple myeloma","platelet","เกล็ดเลือด","myeloma","\\bmm\\b","plasma cell neoplasm")]}),
  B("3.2 Further investigations",5,{tags:["micro","lab"],
   ans:"<b>ยืนยัน monoclonal protein</b>: <b>serum protein electrophoresis (SPEP) + serum immunofixation (IFE)</b>, <b>serum free light chain (κ/λ ratio)</b>, urine protein electrophoresis + urine IFE (24-h urine) · <b>Bone marrow aspiration &amp; biopsy</b> (clonal plasma cell ≥ 10%) + flow cytometry + <b>FISH cytogenetics</b> (del17p, t(4;14), t(14;16)) · <b>ประเมิน end-organ (CRAB)</b>: CBC, <b>serum calcium</b>, <b>BUN/creatinine</b>, total protein/albumin (globulin gap), <b>imaging กระดูก</b>: whole-body low-dose CT (หรือ PET-CT/MRI; skeletal survey ถ้าไม่มี) · <b>Staging</b>: β2-microglobulin, albumin, LDH (R-ISS) · uric acid, LFT",
   exp:"IMWG criteria: clonal BM plasma cell ≥ 10% (หรือ plasmacytoma) + ≥ 1 myeloma-defining event: CRAB (Ca &gt; 11 mg/dL, Cr &gt; 2 mg/dL หรือ CrCl &lt; 40, Hb &lt; 10 g/dL, lytic lesion) หรือ SLiM (BM plasma cell ≥ 60%, involved/uninvolved FLC ratio ≥ 100, &gt; 1 focal lesion บน MRI)",
   rubric:"ได้เต็ม = SPEP/IFE + free light chain + bone marrow + CRAB work-up (Ca, Cr, CBC, imaging) · ตอบแค่ bone marrow ได้บางส่วน",
   pts:[H("M protein",40),CR(P("Serum protein electrophoresis + immunofixation","spep","electrophoresis","immunofixation","\\bife\\b","m.?protein")),P("Serum free light chain ratio","free light","\\bflc\\b","light chain","kappa","lambda"),P("Urine protein electrophoresis / Bence Jones","upep","bence","urine protein","24.?h"),
    H("Bone marrow",25),CR(P("Bone marrow aspiration and biopsy (+ FISH)","bone marrow","ไขกระดูก","\\bbm\\b","fish","cytogenetic")),
    H("End-organ / staging",35),P("Calcium, creatinine, CBC","calcium","แคลเซียม","\\bca\\b","creatinine","\\bcr\\b","bun","cbc"),P("Bone imaging: whole-body low-dose CT / PET-CT / MRI / skeletal survey","low.?dose","whole.?body","\\bpet\\b","mri","skeletal","bone survey","x.?ray"),P("β2-microglobulin, albumin, LDH","microglobulin","b2m","β2","ldh","albumin")]})
 ),
 interp:"PBS: rouleaux + plasma cell → คิด MM → ส่ง SPEP/IFE, FLC, bone marrow, ประเมิน CRAB",
 summary:["Rouleaux = RBC ≥ 4 ตัวเรียงซ้อนแบบเหรียญใน thin area → paraproteinemia","Plasma cell: eccentric nucleus, clock-face chromatin, basophilic cytoplasm, perinuclear hof","Work-up MM: SPEP + IFE, serum FLC, BM biopsy + FISH, Ca/Cr/CBC, whole-body low-dose CT, β2M/albumin/LDH"]}),

/* ===== สถานี 4 ===== */
Co({page:1,orig:"4",topic:"proc",sub:"BLS/CPR",ex:1,proc:1,title:"Procedure — alone on the ward with an unresponsive patient",
 seen:"SI130 Ro409–412 ข้อ 5 (BLS — ชุดนั้นไม่ระบุว่าอยู่คนเดียว)",
 stem:`You are a medical student and you are alone on the ward when you find a patient who is unresponsive. Demonstrate basic life support (adult CPR) on the manikin and say aloud what you are doing.`,
 gray:"4. นศพ อยู่ในวอร์ดคนเดียว ผู้ป่วยหมดสติ จงแสดง Basic life support (CPR)",
 flag:"ไฟล์ให้แค่หัวข้อ — บทผู้คุม (sp) Claude แต่ง · checklist ตาม AHA adult BLS (in-hospital, single rescuer จนกว่าทีมมาถึง)",
 sp:"หุ่น CPR นอนหงายบนเตียงผู้ป่วย ไม่ตอบสนอง ไม่หายใจ/หายใจเฮือก (gasping) · คลำ carotid ไม่ได้ · ถ้าผู้สอบตะโกนเรียก/กดกริ่ง → ผู้คุมแจ้งว่า 'พยาบาลกำลังเรียกทีมและนำ defibrillator มา' · หลังกด 2 cycle ผู้คุมนำ AED/defibrillator มาให้ → จังหวะ 'shockable (VF)' · หลังช็อกและ CPR ต่ออีก 2 นาที → ผู้คุมบอกว่าทีม CPR มาถึง",
 parts:S(
  B("4.1 Perform basic life support (say each step aloud)",10,{tags:["proc"],
   ans:"<b>Scene safety</b> → <b>ตบไหล่เรียก</b> (check responsiveness) → <b>ตะโกนขอความช่วยเหลือ/เรียก code ทีม CPR และขอ defibrillator/AED + รถ emergency</b> (อยู่คนเดียว: ร้องเรียก/กดกริ่งฉุกเฉินก่อน แล้วเริ่ม CPR ทันที) → <b>ดูการหายใจพร้อมคลำ carotid pulse 5–10 วินาที</b> → ไม่มีชีพจร/หายใจเฮือก → วางแผ่นรองหลัง (CPR board) → <b>chest compression</b>: สันมือที่ครึ่งล่างของ sternum แขนตรง <b>ลึก 5–6 ซม. อัตรา 100–120/นาที full recoil</b> ลดการหยุดกด → <b>30:2</b>: เปิดทางเดินหายใจ head tilt–chin lift (jaw thrust ถ้าสงสัยบาดเจ็บคอ) ช่วยหายใจด้วย bag-valve-mask ครั้งละ 1 วินาที ให้อกยก → <b>AED/defibrillator มาถึง</b>: เปิดเครื่อง ติด pads วิเคราะห์จังหวะ (ทุกคนถอย) → shockable: <b>shock แล้วกดต่อทันที 2 นาที</b> → ประเมินจังหวะทุก 2 นาที เปลี่ยนคนกดทุก 2 นาที → ทำต่อจนทีม ALS มาถึง/ROSC",
   exp:"AHA adult BLS: เน้น high-quality CPR (rate 100–120, depth อย่างน้อย 5 ซม. ไม่เกิน 6 ซม., full recoil, หยุดกด &lt; 10 วินาที, ไม่ช่วยหายใจมากเกิน) และ defibrillation เร็วที่สุด · ไม่มี advanced airway: 30:2 · มี advanced airway: กดต่อเนื่อง + ช่วยหายใจ 1 ครั้งทุก 6 วินาที",
   rubric:"ได้เต็ม = ครบตามลำดับ · ไม่ประเมินการตอบสนอง/ไม่ขอความช่วยเหลือ/ไม่คลำชีพจรก่อนกด/กดผิดตำแหน่งหรือผิดอัตรา = ข้อสำคัญขาด · ไม่ใช้ AED = หักมาก",
   pts:[H("ประเมินและขอความช่วยเหลือ",30),P("Scene safety","safe","ปลอดภัย"),CR(P("Check responsiveness: tap shoulders and shout","ตบไหล่","เรียก","responsive","shake","tap")),CR(P("Shout for help / call code team, ask for defibrillator-AED","ขอความช่วยเหลือ","help","code","ทีม","aed","defibrillat","กริ่ง")),CR(P("Check breathing and carotid pulse 5–10 s","carotid","pulse","ชีพจร","หายใจ","breath")),
    H("High-quality CPR",45),CR(P("Hand position: lower half of sternum, heel of hand","sternum","สันมือ","heel","ครึ่งล่าง","nipple","กึ่งกลางอก")),CR(P("Depth 5–6 cm, full recoil","5[–-]?6 ?(cm|ซม)","5 ?(cm|ซม)","recoil","คืนตัว")),CR(P("Rate 100–120/min","100[–-]?120")),P("30:2 with head tilt–chin lift and bag-mask breaths","30 ?: ?2","head tilt","chin lift","jaw thrust","bag","ambu","ช่วยหายใจ"),P("CPR board, minimise interruptions","board","แผ่นรอง","interrupt","หยุดกด"),
    H("Defibrillation / ต่อเนื่อง",25),CR(P("Attach AED / defibrillator pads, analyse, shock if shockable","aed","defibrillat","pad","shock","ช็อก","analy")),P("Resume CPR immediately after shock, recheck rhythm every 2 min","resume","กดต่อ","ทันที","2 ?(min|นาที)"),P("Switch compressor every 2 min; continue until team/ROSC","switch","เปลี่ยนคน","rosc","ทีม")]})
 ),
 interp:"BLS in-hospital ผู้ช่วยเหลือคนเดียว: ประเมิน → เรียกทีม + ขอ defibrillator → คลำชีพจร → high-quality CPR 30:2 → AED เร็วที่สุด",
 summary:["ลำดับ: safety → ตบไหล่เรียก → ขอความช่วยเหลือ + AED → หายใจ/ชีพจร ≤ 10 วินาที → CPR","กด: ครึ่งล่าง sternum ลึก 5–6 ซม. 100–120/นาที full recoil หยุด &lt; 10 วินาที, 30:2","Shockable → shock แล้วกดต่อทันที 2 นาที; เปลี่ยนคนกดทุก 2 นาที"]}),

/* ===== สถานี 5 ===== */
Co({page:1,orig:"5",topic:"pe",sub:"Diabetes complication",ex:1,title:"Physical examination — follow-up visit for diabetes",
 seen:"SI133 Ro407–408 OSCE 14 · SI131 Ro417–420 ข้อ 19 (ตรวจร่างกายผู้ป่วยเบาหวาน)",
 stem:`A 60-year-old woman with type 2 diabetes mellitus comes for a follow-up visit. Perform a focused physical examination relevant to her diabetes.`,
 gray:"5. ผู้ป่วยหญิงอายุ 60 ปี มาตรวจติดตามเบาหวาน จงตรวจร่างกาย",
 flag:"ไฟล์ให้แค่หัวข้อ — ผลตรวจที่ผู้คุมบอก (sp) Claude แต่ง",
 sp:"ผู้ป่วยหญิง 60 ปี DM type 2 มา 10 ปี · ผู้คุมบอกผลเมื่อผู้สอบตรวจถูกวิธีเท่านั้น: BW 70 kg สูง 155 cm (BMI 29) รอบเอว 92 cm · BP 142/86 mmHg (นั่ง พัก 5 นาที) PR 80 regular · Visual acuity 20/30 ทั้งสองข้าง · fundoscopy: microaneurysms และ dot-blot hemorrhages เล็กน้อยทั้งสองข้าง · ผิวหนัง: acanthosis nigricans ที่คอ · บริเวณฉีดยา: ไม่มี lipohypertrophy · เท้า: ผิวแห้ง มี callus ที่ฝ่าเท้าใต้ 1st MTP ซ้าย ไม่มีแผล ไม่มีเชื้อราที่ซอกนิ้ว · ชีพจร dorsalis pedis/posterior tibial คลำได้ทั้งสองข้าง · 10-g monofilament: รู้สึกลดลงที่ฝ่าเท้าทั้งสองข้าง (รู้สึก 6/10 จุด) · vibration 128 Hz ลดลงที่ปลายนิ้วโป้งทั้งสองข้าง · ankle jerk ลดลงทั้งสองข้าง",
 parts:S(
  B("5.1 Perform a focused physical examination for diabetes",10,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ล้างมือ · <b>General</b>: น้ำหนัก ส่วนสูง <b>BMI</b> <b>รอบเอว</b> · <b>BP</b> (ท่านั่ง ± ท่ายืน หา orthostatic hypotension = autonomic neuropathy) ชีพจร · <b>ตา</b>: visual acuity + <b>fundoscopy</b> (diabetic retinopathy; ส่งตรวจจอตาขยายม่านตาปีละครั้ง) · <b>ช่องปาก/ฟัน</b> (periodontitis) · <b>ผิวหนัง</b>: acanthosis nigricans, ติดเชื้อรา/แบคทีเรีย, necrobiosis lipoidica, <b>ตำแหน่งฉีด insulin</b> (lipohypertrophy) · คอ: thyroid, carotid bruit · หัวใจ/ปอด (ประเมิน CVD/HF) · <b>Comprehensive foot exam</b>: ดู (ผิว เล็บ ซอกนิ้ว callus แผล deformity เช่น hammer toe, Charcot, รองเท้า) · <b>คลำชีพจร dorsalis pedis + posterior tibial</b> (± ABI ถ้าชีพจรเบา) · <b>Neuro</b>: <b>10-g monofilament</b> + อย่างน้อยอีก 1 อย่าง: <b>vibration 128 Hz</b>, pinprick, temperature, <b>ankle reflex</b> · <b>สรุปผลและให้คำแนะนำการดูแลเท้า</b>",
   exp:"ADA Standards of Care: ตรวจเท้าแบบละเอียดอย่างน้อยปีละครั้ง (ทุกครั้งที่มาถ้ามีความเสี่ยงสูง) — monofilament + vibration/pinprick/ankle reflex, ชีพจรเท้า · จอตา: ตรวจปีละครั้ง (1–2 ปีถ้าปกติต่อเนื่อง) · ผลในบทนี้ = diabetic peripheral neuropathy (loss of protective sensation) + mild NPDR → เท้ากลุ่มเสี่ยง ต้องดูแลเท้าและนัดถี่ขึ้น",
   rubric:"ได้เต็ม = BMI/รอบเอว/BP + fundoscopy + ผิวหนัง/ตำแหน่งฉีดยา + ตรวจเท้าครบ (ดู คลำชีพจร monofilament + อีก 1 test) + สรุปผล · ตรวจเท้าไม่ครบ = ข้อสำคัญขาด",
   pts:[H("เตรียม",5),P("Introduce, consent, hand hygiene","แนะนำตัว","ขออนุญาต","ล้างมือ","hand hygiene","consent"),
    H("General / vital signs",20),P("Weight, height, BMI, waist circumference","bmi","น้ำหนัก","รอบเอว","waist"),CR(P("Blood pressure (± postural BP)","\\bbp\\b","blood pressure","ความดัน","postural","orthostatic")),
    H("ตา / ผิวหนัง",25),CR(P("Visual acuity and fundoscopy (retinopathy)","fundoscop","ophthalmoscop","จอตา","retinopath","visual acuity")),P("Skin: acanthosis nigricans, infection, insulin injection sites (lipohypertrophy)","acanthosis","lipohypertroph","ตำแหน่งฉีด","injection site","ผิวหนัง","skin"),P("Oral / dental, carotid bruit, heart and lungs","ฟัน","dental","oral","carotid","bruit","หัวใจ","heart"),
    H("Foot examination",45),CR(P("Inspect feet: skin, nails, web spaces, callus, ulcer, deformity, footwear","callus","แผล","ulcer","deform","ซอกนิ้ว","เล็บ","รองเท้า","footwear","inspect")),CR(P("Palpate dorsalis pedis and posterior tibial pulses","dorsalis","posterior tibial","\\bdp\\b","\\bpt\\b","ชีพจร.*เท้า","pedal pulse","abi")),CR(P("10-g monofilament","monofilament","10 ?g")),P("Plus vibration 128 Hz / pinprick / ankle reflex","vibration","128","tuning fork","pinprick","ankle (jerk|reflex)","ส้อมเสียง"),
    H("สรุป",5),P("Summarise findings and give foot-care advice","สรุปผล","summar","foot care","ดูแลเท้า")]})
 ),
 interp:"ตรวจร่างกายผู้ป่วย DM ที่มาติดตาม: BMI/BP → ตา (fundus) → ผิวหนัง/ตำแหน่งฉีด → ตรวจเท้าครบชุด",
 summary:["Foot exam ทุกปี: ดู + ชีพจร DP/PT + 10-g monofilament + อีก 1 อย่าง (vibration 128 Hz, pinprick, ankle reflex)","Fundoscopy/ส่งตรวจจอตาปีละครั้ง; BP ± postural (autonomic neuropathy)","อย่าลืม BMI, รอบเอว, acanthosis nigricans, lipohypertrophy ที่ตำแหน่งฉีด insulin"]}),

/* ===== สถานี 6 ===== */
Co({page:1,orig:"6",topic:"lab",sub:"Ascites",title:"Heavy alcohol drinker undergoing paracentesis — liver tests and ascitic fluid",
 seen:"คล้าย SI130 Ro409–412 ข้อ 10 · SI133 Ro405–406 ข้อ 17 · SI132 Ro405–406 B8 (แปลผล ascitic fluid)",
 stem:`A 50-year-old man with long-standing heavy alcohol drinking undergoes abdominal paracentesis.<br>Liver function tests: total bilirubin 1.4 mg/dL, direct bilirubin 0.9 mg/dL, AST ~200 U/L, ALT ~100 U/L, ALP ~100 U/L, GGT ~300 U/L.<br>Ascitic fluid: total cell count 600 cells/µL (lymphocyte predominant), albumin 1.5 g/dL (serum albumin 2.8 g/dL), total protein 3 g/dL.<br>6.1 Interpret the results.<br>6.2 Give your differential diagnosis.`,
 gray:"6. ผู้ป่วยชาย อายุ 50 ปี heavy alcohol drinking มานาน มาเจาะ ascites · LFT: TB 1.4, DB 0.9, AST~200, ALT~100, ALP~100, GGT~300 · Ascitic fluid: Total cell 600 (Lymphocyte predominate), Alb 1.5 (Serum=2.8), Total protein 3 · จงแปลผล · Differential diagnosis",
 flag:"ไฟล์ไม่ระบุหน่วย — Claude ใส่หน่วยตามที่ใช้ทั่วไป (mg/dL, U/L, g/dL, cells/µL)",
 parts:S(
  B("6.1 Interpret the results.",6,{tags:["lab"],
   ans:"<b>LFT</b>: <b>AST:ALT ≈ 2:1</b> (AST &lt; 300) + <b>GGT สูงมาก</b> → <b>alcohol-related liver disease</b> · bilirubin สูงเล็กน้อย (direct เด่น) · ALP ปกติ · serum albumin ต่ำ 2.8 → chronic liver disease/synthetic function ลดลง · <b>Ascitic fluid</b>: <b>SAAG = 2.8 − 1.5 = 1.3 g/dL (≥ 1.1) → portal hypertension</b> · <b>total protein 3 g/dL (≥ 2.5) = high protein</b> → ไม่เข้ากับ cirrhotic ascites อย่างเดียว (มักโปรตีน &lt; 2.5) — high SAAG + high protein = <b>post-sinusoidal/cardiac</b> (heart failure, constrictive pericarditis, Budd–Chiari) หรือมีอย่างอื่นซ้อน · <b>Cell 600 lymphocyte predominant</b> → PMN &lt; 250/µL = <b>ไม่ใช่ SBP</b> · lymphocytic ascites → คิด <b>TB peritonitis</b> หรือ <b>malignancy</b> (HCC, peritoneal carcinomatosis)",
   exp:"SAAG ≥ 1.1 = portal hypertension (cirrhosis, alcoholic hepatitis, cardiac ascites, Budd–Chiari, massive liver metastasis, portal vein thrombosis) · SAAG &lt; 1.1 = peritoneal carcinomatosis, TB, pancreatitis, nephrotic syndrome · ascitic protein ≥ 2.5 + SAAG ≥ 1.1 → cardiac/Budd–Chiari · SBP = PMN ≥ 250/µL",
   rubric:"ได้เต็ม = AST:ALT 2:1 + GGT → alcohol · คำนวณ SAAG 1.3 → portal HT · high protein · lymphocyte-predominant ไม่ใช่ SBP → TB/malignancy · คำนวณ SAAG ผิด = ข้อสำคัญขาด",
   pts:[H("LFT",35),CR(P("AST:ALT ≈ 2:1 with high GGT → alcohol-related liver disease","2 ?: ?1","alcohol","แอลกอฮอล์","เหล้า","ald","ggt")),P("Mild direct hyperbilirubinemia, normal ALP","bilirubin","direct","\\bdb\\b","alp"),P("Low serum albumin → chronic liver disease","albumin ต่ำ","hypoalbumin","synthetic","chronic liver"),
    H("Ascitic fluid",65),CR(P("SAAG = 1.3 g/dL (≥ 1.1) → portal hypertension","saag","1\\.3","portal hypertension","portal ht")),P("Total protein 3 g/dL (≥ 2.5) = high protein → cardiac / post-sinusoidal or another cause","high protein","protein ≥ ?2\\.5","protein สูง","cardiac","post.?sinusoid","budd"),CR(P("Lymphocyte predominant, PMN &lt; 250 → not SBP; think TB / malignancy","lymphocyt","not sbp","ไม่ใช่ sbp","\\btb\\b","tuberc","malignan","มะเร็ง"))]}),
  B("6.2 Differential diagnosis",4,{tags:["lab","ddx"],
   ans:"(1) <b>Alcoholic cirrhosis with portal hypertension + tuberculous peritonitis</b> (lymphocytic ascites + โปรตีนสูง) · (2) <b>Alcoholic cirrhosis + hepatocellular carcinoma</b> (malignant ascites / portal vein tumor thrombus) หรือ peritoneal carcinomatosis ร่วม · (3) <b>Cardiac ascites — alcoholic (dilated) cardiomyopathy / heart failure</b> (high SAAG + high protein) · (4) <b>Budd–Chiari syndrome</b> · ส่งตรวจต่อ: ascitic <b>ADA</b>, AFB stain/culture/Xpert MTB, <b>cytology</b>, ascitic glucose/LDH, culture ในขวด hemoculture · <b>AFP + ultrasound/triphasic CT ตับ</b>, Doppler hepatic/portal vein · <b>echocardiogram, NT-proBNP</b>",
   exp:"TB peritonitis ในผู้ป่วย cirrhosis: SAAG อาจสูงจาก portal HT พื้นฐาน และ ADA อาจต่ำลง (sensitivity ลด) → ถ้าสงสัยมาก ทำ laparoscopic peritoneal biopsy · ascitic ADA &gt; 39 U/L สนับสนุน TB",
   rubric:"ได้เต็ม ≥ 3 Ddx ที่สอดคล้องกับ high SAAG + high protein + lymphocytic · ตอบแค่ 'alcoholic cirrhosis' ได้บางส่วน (ไม่อธิบายโปรตีนสูงและ lymphocytosis) · ตอบ SBP = ผิด",
   pts:[CR(P("Alcoholic cirrhosis / alcohol-related liver disease with portal hypertension","cirrhosis","ตับแข็ง","alcoholic liver","ald","alcohol")),G("Other differentials (≥ 2)",2,P("Tuberculous peritonitis","\\btb\\b","tuberc","วัณโรค"),P("HCC / peritoneal carcinomatosis","hcc","hepatocellular","carcinomatosis","malignan","มะเร็ง"),P("Cardiac ascites — alcoholic cardiomyopathy / heart failure","cardiac","cardiomyopath","heart failure","\\bhf\\b","หัวใจ"),P("Budd–Chiari syndrome / hepatic vein obstruction","budd","hepatic vein")),P("Next tests: ADA, AFB/Xpert, cytology, AFP + imaging, echo","\\bada\\b","afb","xpert","cytolog","afp","echo","ultrasound","\\bct\\b")]})
 ),
 interp:"แปลผล ascitic fluid: คำนวณ SAAG + ดู total protein + ดู cell type แล้วเชื่อมกับ LFT pattern ของ alcohol",
 summary:["SAAG = serum alb − ascitic alb; ≥ 1.1 = portal hypertension","High SAAG + protein ≥ 2.5 = cardiac ascites/Budd–Chiari; cirrhosis มักโปรตีน &lt; 2.5","Lymphocytic ascites → TB peritonitis/malignancy; SBP = PMN ≥ 250 · AST:ALT ≥ 2 + GGT สูง = alcohol"]}),

/* ===== สถานี 7 ===== */
Co({page:2,orig:"7",topic:"ekg",sub:"Tachyarrhythmia",title:"12-lead EKG — read and diagnose",img:["os127d_7"],imgNote:"12-lead EKG with lead II rhythm strip (25 mm/s, 10 mm/mV)",
 seen:"คล้าย SI130 Ro409–412 ข้อ 19 (EKG ใจสั่น เหนื่อยง่าย)",
 stem:`A 12-lead EKG is shown.<br>7.1 Read the EKG.<br>7.2 What is the diagnosis?`,
 gray:"7. (รูป EKG 12 lead + rhythm strip II) · จงอ่าน EKG · Diagnosis",
 flag:"ไฟล์ไม่มีประวัติผู้ป่วย · รูปเป็นภาพหน้าจอที่มีไอคอนปุ่มมุมบน (ไม่ใช่ส่วนของ EKG) · อัตราประมาณจาก rhythm strip (~18 QRS ใน 10 วินาที)",
 parts:S(
  B("7.1 Read the EKG.",6,{tags:["ekg"],
   ans:"<b>Rate</b> ≈ 100–120/min (ventricular rate, นับ QRS ใน rhythm strip 10 วินาที × 6) · <b>Rhythm: irregularly irregular</b> · <b>ไม่มี P wave ที่ชัดเจน</b> มี <b>fibrillatory (f) waves</b> เห็นชัดใน V1 · <b>QRS แคบ</b> · <b>Axis</b>: ประมาณ +90° (lead I QRS เล็กเกือบ isoelectric, aVF บวก) · ไม่มี ST elevation/Q wave ที่มีนัยสำคัญ · ไม่มี voltage criteria ของ chamber enlargement",
   exp:"AF: RR ไม่สม่ำเสมอแบบไม่มีรูปแบบ + ไม่มี P wave + f waves (อัตรา 350–600/นาที) — ต่างจาก atrial flutter (sawtooth F waves ~300/นาที, มัก 2:1 → HR ~150 สม่ำเสมอ) และ MAT (P wave ≥ 3 รูปแบบ)",
   rubric:"ได้เต็ม = rate + irregularly irregular + no P/f waves + narrow QRS + axis · ไม่บอก rhythm = ข้อสำคัญขาด",
   pts:[P("Ventricular rate ~100–120/min","1[01]\\d","\\brate\\b","/min"),CR(P("Irregularly irregular rhythm","irregularly irregular","irregular","ไม่สม่ำเสมอ")),CR(P("Absent P waves, fibrillatory waves (V1)","no p","absent p","ไม่มี p","f.?wave","fibrillatory")),P("Narrow QRS","narrow","แคบ"),P("Axis (~+90°, vertical/normal)","axis","\\+?90","vertical","normal axis")]}),
  B("7.2 Diagnosis",3,{tags:["ekg"],
   ans:"<b>Atrial fibrillation with rapid ventricular response</b>",
   exp:"Mx ต่อ: ประเมิน hemodynamic (unstable → synchronized cardioversion) · rate control (beta-blocker, non-DHP CCB; digoxin/amiodarone ถ้า HF) · หาสาเหตุ (thyroid, valvular heart disease, HT, alcohol, sepsis, electrolyte) · ประเมินความเสี่ยง stroke (CHA₂DS₂-VASc/CHA₂DS₂-VA) → anticoagulant (DOAC; warfarin ถ้า mechanical valve/moderate–severe mitral stenosis)",
   rubric:"ได้เต็ม = AF + rapid ventricular response · ตอบ AF อย่างเดียวได้บางส่วน · ตอบ atrial flutter/MAT = 0",
   pts:[CR(P("Atrial fibrillation","atrial fib","\\baf\\b","a\\.?fib")),P("With rapid ventricular response","rapid ventricular","\\brvr\\b","rapid","\\bfast\\b")]})
 ),
 interp:"อ่าน EKG ครบ rate/rhythm/axis/P/QRS/ST แล้วสรุป irregularly irregular ไม่มี P → AF",
 summary:["AF = irregularly irregular + ไม่มี P wave + f waves (ดูใน V1/II)","RVR = ventricular rate &gt; 100/min","ต่อ: unstable → cardioversion; stable → rate control + หาสาเหตุ + CHA₂DS₂-VASc → anticoagulant"]}),

/* ===== สถานี 8 ===== */
Co({page:2,orig:"8",topic:"hx",sub:"Dyspnea",ex:1,title:"History taking — dyspnea for 3 hours",
 seen:"คล้าย SI133 Ro403–404 ข้อ 10 (ซักประวัติ acute dyspnea 6 ชั่วโมง)",
 stem:`A 68-year-old man presents with dyspnea for 3 hours.<br>8.1 Take a focused history from the patient.<br>8.2 Give your differential diagnosis.`,
 gray:"8. ซักประวัติ หอบเหนื่อยมา 3 ชั่วโมง พร้อม Differential diagnosis",
 flag:"ไฟล์ให้แค่หัวข้อ — อายุ เพศ และบทผู้ป่วย (sp) Claude แต่ง",
 sp:"ชายไทย 68 ปี · <b>หอบเหนื่อยทันทีขณะนั่งดูทีวีเมื่อ 3 ชั่วโมงก่อน</b> เหนื่อยมากขึ้นเรื่อย ๆ <b>นอนราบไม่ได้ ต้องลุกนั่ง</b> พูดได้เป็นคำ ๆ · <b>ก่อนเหนื่อยราว 30 นาที แน่นกลางอกเหมือนมีอะไรกดทับ ร้าวไปแขนซ้าย เหงื่อแตก</b> ยังแน่นอยู่บ้าง · ไอมีเสมหะเป็นฟองสีชมพูเล็กน้อย · ไม่มีไข้ ไม่มีเสมหะเหลืองเขียว · ไม่มีเสียงหวีด ไม่เคยเป็นหอบหืด · ไม่ได้ผ่าตัด/นอนติดเตียง ขาไม่บวมข้างเดียว ไม่เจ็บหน้าอกเวลาหายใจเข้า ไม่ไอเป็นเลือดสด · ไม่ได้กินอาหาร/ยาใหม่ ไม่มีผื่น · 1 สัปดาห์ก่อน ขาบวมกดบุ๋มทั้งสองข้างเล็กน้อย เดินขึ้นบันไดแล้วเหนื่อยกว่าเดิม · โรคประจำตัว: <b>HT, DM, DLP</b> 10 ปี (กิน amlodipine, metformin, simvastatin กินบ้างไม่กินบ้าง) · <b>สูบบุหรี่ 1 ซอง/วัน 40 ปี</b> ดื่มเหล้าเป็นครั้งคราว · กินอาหารรสเค็ม · พ่อเสียชีวิตด้วยโรคหัวใจตอนอายุ 60 ปี",
 parts:S(
  B("8.1 Take a focused history.",10,{tags:["hx"],
   ans:"<b>ลักษณะเหนื่อย</b>: onset (ทันที vs ค่อยเป็น) ทำอะไรอยู่ ความรุนแรง (พูดเป็นประโยค/คำ) แย่ลงเรื่อย ๆ ไหม <b>orthopnea/PND</b> · <b>เจ็บหน้าอก</b>: ลักษณะแน่น/ร้าว/เหงื่อแตก (ACS) vs เจ็บแปลบตามการหายใจ (PE, pneumothorax, pleuritis) · <b>ใจสั่น/เป็นลม</b> (arrhythmia) · <b>ระบบหายใจ</b>: ไอ เสมหะ (เป็นฟองชมพู → pulmonary edema; เหลืองเขียว + ไข้ → pneumonia) <b>wheezing</b> (asthma/COPD exacerbation, ตัวกระตุ้น) hemoptysis · <b>ความเสี่ยง PE</b>: ขาบวมข้างเดียว นอนติดเตียง/ผ่าตัด/เดินทางไกล มะเร็ง ฮอร์โมน · <b>Anaphylaxis</b>: อาหาร/ยา/แมลง ผื่น ปากบวม · <b>ภาวะน้ำเกิน</b>: ขาบวม น้ำหนักขึ้น ปัสสาวะออกน้อย กินเค็ม ขาดยา · <b>Metabolic</b>: ไข้/ติดเชื้อ, DKA, ซีด · <b>ประวัติอดีต</b>: HT DM DLP CKD โรคหัวใจ/ลิ้นหัวใจ COPD/asthma, เคยเป็นแบบนี้, ยา (adherence, NSAIDs, beta-blocker) · บุหรี่ · ครอบครัว",
   exp:"Acute dyspnea ที่ต้องไม่พลาด: ACS/acute pulmonary edema, PE, tension pneumothorax, anaphylaxis/upper airway obstruction, severe asthma/COPD exacerbation, cardiac tamponade · ในสถานี ซักให้เร็วและมุ่งแยกโรคเหล่านี้",
   rubric:"ได้เต็ม = onset/ความรุนแรง + orthopnea/PND + chest pain characteristics + ระบบหายใจ (ไอ เสมหะ wheeze ไข้) + PE risk + anaphylaxis + fluid overload + ปัจจัยเสี่ยงหัวใจ · ไม่ถาม chest pain = ข้อสำคัญขาด",
   pts:[H("แนะนำตัว",5),P("Introduce, identify patient, explain purpose","แนะนำตัว","สวัสดี","introduc","ขออนุญาต"),
    H("ลักษณะเหนื่อย",25),P("Onset, activity at onset, severity, progression","ทันที","sudden","onset","เริ่ม","รุนแรง","severity","แย่ลง"),CR(P("Orthopnea / PND","นอนราบ","orthopn","pnd","paroxysmal","ตื่นกลางดึก")),
    H("อาการร่วม / แยกโรค",45),CR(P("Chest pain: character, radiation, sweating","เจ็บหน้าอก","แน่นหน้าอก","chest pain","ร้าว","เหงื่อ","sweat")),P("Palpitation / syncope","ใจสั่น","palpitat","เป็นลม","syncope"),P("Cough, sputum (pink frothy / purulent), fever, wheeze, hemoptysis","ไอ","cough","เสมหะ","sputum","ไข้","fever","หวีด","wheez","hemoptysis"),P("PE risk: unilateral leg swelling, immobilisation, surgery, cancer, hormones","ขาบวมข้างเดียว","immobil","นอนติดเตียง","ผ่าตัด","มะเร็ง","\\bdvt\\b","\\bpe\\b","embol"),P("Anaphylaxis: food/drug exposure, rash, lip swelling","แพ้","allerg","ผื่น","rash","anaphyla","ปากบวม"),P("Fluid overload: leg edema, weight gain, oliguria, salt, missed medication","ขาบวม","edema","น้ำหนัก","ปัสสาวะ","เค็ม","salt","ขาดยา"),
    H("ประวัติอดีต / ปัจจัยเสี่ยง",25),CR(P("Underlying disease: HT, DM, DLP, CKD, heart disease, asthma/COPD","โรคประจำตัว","underlying","ความดัน","เบาหวาน","ไขมัน","\\bht\\b","\\bdm\\b","copd","asthma","หอบหืด","โรคหัวใจ")),P("Medications and adherence","ยาประจำ","ขาดยา","medicat","adherence","กินยา"),P("Smoking, alcohol, family history of heart disease","บุหรี่","smok","เหล้า","ครอบครัว","family")]}),
  B("8.2 Differential diagnosis",4,{tags:["hx","ddx"],
   ans:"<b>Leading: Acute coronary syndrome (likely NSTEMI/STEMI) complicated by acute pulmonary edema (acute decompensated heart failure)</b> — แน่นหน้าอกร้าวแขนซ้าย เหงื่อแตก ตามด้วย orthopnea เสมหะฟองชมพู + ปัจจัยเสี่ยงหัวใจหลายอย่าง · Ddx: <b>acute pulmonary embolism</b> · <b>pneumothorax</b> · <b>COPD exacerbation/asthma</b> (สูบบุหรี่ 40 pack-year) · <b>pneumonia</b> · <b>arrhythmia (AF with RVR)</b> · anaphylaxis · cardiac tamponade/aortic dissection",
   exp:"ขั้นต่อไป: 12-lead EKG ภายใน 10 นาที, high-sensitivity troponin, CXR, O₂ ให้ SpO₂ ≥ 90%, NTG (ถ้า SBP ดี), IV furosemide, aspirin + P2Y12 inhibitor ตาม EKG, echo",
   rubric:"ได้เต็ม = ACS + pulmonary edema/ADHF เป็นอันดับแรก + Ddx ≥ 3 ที่รวม PE",
   pts:[CR(P("Acute coronary syndrome","\\bacs\\b","coronary","stemi","nstemi","\\bmi\\b","infarct","หัวใจขาดเลือด")),P("Acute pulmonary edema / acute decompensated heart failure","pulmonary edema","heart failure","\\bhf\\b","adhf","chf","น้ำท่วมปอด","หัวใจล้มเหลว"),G("Other differentials (≥ 3)",3,P("Pulmonary embolism","\\bpe\\b","embol","ลิ่มเลือด"),P("Pneumothorax","pneumothorax","ลมรั่ว"),P("COPD exacerbation / asthma","copd","asthma","หอบหืด","ถุงลม"),P("Pneumonia","pneumonia","ปอดอักเสบ","ปอดติดเชื้อ"),P("Arrhythmia","arrhythm","\\baf\\b","atrial fib","หัวใจเต้นผิดจังหวะ"),P("Anaphylaxis","anaphyla"),P("Cardiac tamponade / aortic dissection","tamponade","dissection"))]})
 ),
 interp:"ซักประวัติ acute dyspnea: ความรุนแรง/onset → orthopnea, chest pain → แยก ACS/ADHF, PE, pneumothorax, airway disease, pneumonia, anaphylaxis",
 summary:["เหนื่อยเฉียบพลัน: ต้องแยก ACS/ADHF, PE, pneumothorax, anaphylaxis, severe asthma/COPD","Orthopnea/PND + เสมหะฟองชมพู + ขาบวม = cardiogenic pulmonary edema","ถาม PE risk (immobilisation, surgery, cancer, unilateral leg swelling) และปัจจัยเสี่ยงหัวใจทุกครั้ง"]}),

/* ===== สถานี 9 ===== */
Co({page:2,orig:"9",topic:"ekg",sub:"Other EKG",title:"Hypertensive woman at a health check — 12-lead EKG",img:["os127d_9"],imgNote:"12-lead EKG with lead II rhythm strip (25 mm/s, 10 mm/mV)",
 stem:`A woman with hypertension comes for a health check. Her 12-lead EKG is shown.<br>9.1 Read the EKG.<br>9.2 What is the diagnosis?`,
 gray:"9. ผู้ป่วยหญิง มี HT มาตรวจสุขภาพ (รูป EKG) · จงอ่าน EKG · Diagnosis",
 flag:"ขอบขวาสุดของรูป (ข้อความเครื่องพิมพ์) ถูกตัดเล็กน้อย ไม่กระทบการอ่าน · ไม่มีคีย์ — คำตอบ LVH with strain + LAFB เป็นการอ่านของ Claude",
 parts:S(
  B("9.1 Read the EKG.",6,{tags:["ekg"],
   ans:"<b>Rate</b> ≈ 60–70/min · <b>Rhythm: normal sinus rhythm</b> · PR ปกติ · <b>QRS</b> แคบ/กว้างเล็กน้อย (&lt; 120 ms) · <b>Axis: left axis deviation (~ −45° ถึง −60°)</b> — I บวก, II/III/aVF เป็น rS ลบ, qR ใน aVL → <b>left anterior fascicular block (LAFB)</b> · <b>Voltage สูง</b>: S ลึกมากใน V1–V3, R สูงใน aVL (&gt; 11 mm) → เข้า <b>LVH voltage criteria</b> (Cornell: R aVL + S V3 &gt; 20 mm ในผู้หญิง) · <b>Repolarization abnormality</b>: ST depression + asymmetric T inversion ใน I, aVL (<b>strain pattern</b>) · ST elevation ใน V1–V3 เป็น <b>discordant/secondary</b> ตาม S wave ลึก (ไม่ใช่ STEMI)",
   exp:"LVH criteria: <b>Sokolow–Lyon</b> S V1 + R V5/V6 ≥ 35 mm หรือ R aVL ≥ 11 mm · <b>Cornell</b> R aVL + S V3 &gt; 28 mm (ชาย) / &gt; 20 mm (หญิง) · LAFB: LAD −45° ถึง −90°, qR ใน I/aVL, rS ใน II/III/aVF, QRS &lt; 120 ms · LAFB ทำให้ R aVL สูงขึ้นได้เอง จึงควรยืนยัน LVH ด้วยหลาย criteria/echo",
   rubric:"ได้เต็ม = sinus rhythm + LAD + LVH voltage (ระบุ criteria) + strain pattern · บอก LVH ไม่มี criteria ได้บางส่วน · อ่าน ST elevation V1–V3 เป็น STEMI = ผิด",
   pts:[P("Normal sinus rhythm, rate ~60–70/min","sinus","\\bnsr\\b"),CR(P("Left axis deviation","left axis","\\blad\\b","แกนเบี่ยงซ้าย","-\\s?[4-6]0","−\\s?[4-6]0")),CR(P("LVH voltage criteria (deep S V1–V3, tall R aVL; Sokolow–Lyon / Cornell)","lvh","voltage","sokolow","cornell","deep s","tall r","ravl","r avl")),P("Strain pattern: ST depression / T inversion in I, aVL","strain","st depress","t invers","repolariz","st-t"),P("ST elevation V1–V3 is secondary (discordant), not STEMI","discordant","secondary","not stemi","ไม่ใช่ stemi")]}),
  B("9.2 Diagnosis",3,{tags:["ekg"],
   ans:"<b>Left ventricular hypertrophy with repolarization abnormality (strain)</b> + <b>left anterior fascicular block</b> — เข้าได้กับ <b>hypertensive heart disease</b>",
   exp:"Mx: echocardiogram (ยืนยัน LVH/LV mass, EF, diastolic function) · คุม BP ตามเป้า (&lt; 130/80) — ACEI/ARB, CCB, thiazide-like · ประเมิน target organ damage อื่น (Cr, eGFR, urine albumin, fundus) และ CVD risk",
   rubric:"ได้เต็ม = LVH with strain + LAFB · LVH อย่างเดียวได้บางส่วน",
   pts:[CR(P("Left ventricular hypertrophy (with strain)","lvh","left ventricular hypertrophy","หัวใจห้องล่างซ้ายโต")),P("Left anterior fascicular block","lafb","left anterior fascicular","hemiblock","lahb"),P("Hypertensive heart disease","hypertensive heart","\\bhhd\\b","ความดัน")]})
 ),
 interp:"EKG ผู้ป่วย HT: หา LVH (voltage + strain) และ axis (LAFB) — อย่าอ่าน discordant ST elevation ใน V1–V3 เป็น STEMI",
 summary:["LVH: Sokolow–Lyon SV1+RV5/6 ≥ 35 mm หรือ R aVL ≥ 11 mm; Cornell RaVL+SV3 &gt; 20 (หญิง)/&gt; 28 (ชาย)","Strain = ST depression + asymmetric T inversion ใน lateral leads (I, aVL, V5–V6)","LAFB = LAD −45° ถึง −90° + qR ใน I/aVL + rS ใน II/III/aVF"]}),

/* ===== สถานี 10 ===== */
Co({page:3,orig:"10",topic:"micro",sub:"Gram stain",title:"Pus from a wound — Gram stain",img:["os127d_10"],imgNote:"Gram stain of pus from the patient's wound, oil immersion",
 seen:"คล้าย SI132 Ro405–406 B1 (Gram stain หนองจากฝี/carbuncle → S. aureus)",
 stem:`A Gram stain of pus from a patient's wound is shown.<br>10.1 Describe the findings.<br>10.2 Give the full name of the causative organism.`,
 gray:"10. Pus gram stain จากแผลของผู้ป่วย (รูป) · จงบรรยาย · บอกชื่อเต็มของเชื้อก่อโรค",
 parts:S(
  B("10.1 Describe the findings.",4,{tags:["micro"],
   ans:"<b>Gram-positive cocci in clusters</b> (สีม่วงเข้ม ทรงกลม เกาะกลุ่มคล้ายพวงองุ่น) จำนวนมาก อยู่ติด/ซ้อนกับ <b>polymorphonuclear leukocytes (PMN)</b> ซึ่งมีหลายตัวและบางตัวเสื่อมสภาพ (pus cells)",
   exp:"Gram-positive cocci: clusters = <i>Staphylococcus</i> · chains = <i>Streptococcus</i>/<i>Enterococcus</i> · pairs lancet-shaped = <i>S. pneumoniae</i>",
   rubric:"ได้เต็ม = gram-positive + cocci + clusters + PMN · ตอบ gram-positive cocci ไม่ระบุ cluster ได้บางส่วน",
   pts:[CR(P("Gram-positive cocci","gram.?pos","แกรมบวก","\\bgpc\\b")),CR(P("In clusters (grape-like)","cluster","กลุ่ม","พวง","grape")),P("Many PMNs / pus cells","pmn","neutrophil","polymorph","pus cell","wbc")]}),
  B("10.2 Full name of the organism",3,{tags:["micro"],
   ans:"<b><i>Staphylococcus aureus</i></b>",
   exp:"ยืนยัน: catalase +, coagulase + · ฝี/แผลติดเชื้อ: <b>incision &amp; drainage</b> เป็นหลัก ± ยาปฏิชีวนะ — MSSA: cloxacillin/dicloxacillin, cefazolin/cephalexin · สงสัย MRSA: vancomycin (IV), clindamycin หรือ co-trimoxazole (oral) · ส่ง culture และ sensitivity เสมอ",
   rubric:"ต้องเขียนชื่อเต็ม genus + species สะกดถูก · S. aureus/Staph ได้คะแนนน้อยกว่า · ตอบ Streptococcus = 0",
   pts:[CR(P("Staphylococcus aureus","staphylococcus aureus","staph.*aureus","\\bs\\.? ?aureus"))]})
 ),
 interp:"Gram stain หนอง: gram-positive cocci in clusters + PMN → S. aureus",
 summary:["GPC in clusters = Staphylococcus; chains = Streptococcus","ยืนยัน S. aureus: catalase + และ coagulase +","ฝี: I&amp;D เป็นหลัก ± cloxacillin/cefazolin; MRSA → vancomycin/clindamycin/co-trimoxazole"]}),

/* ===== สถานี 11 ===== */
Co({page:3,orig:"11",topic:"proc",sub:"Blood transfusion",ex:1,proc:1,title:"Procedure — administering a blood transfusion",
 seen:"SI130 Ro409–412 ข้อ 17 · SI131 Ro409–412 ข้อ 13 (สาธิตการให้เลือด)",
 stem:`A patient has been prescribed one unit of packed red cells. Demonstrate how you would administer the blood transfusion, saying aloud each step.`,
 gray:"11. จงแสดงวิธีให้เลือด",
 flag:"ไฟล์ให้แค่หัวข้อ — บทผู้คุม (sp) Claude แต่ง · checklist เรียงตามแบบประเมินการให้เลือดของศิริราช (Key Blood transfusion ใน OSCE_REF) + เพิ่ม baseline vital sign ตาม guideline",
 opinion:"แบบประเมิน (Key BT) ให้วัด vital sign หลังเริ่มให้เลือด 5–10 นาที และไม่มีขั้น baseline vital sign — guideline (BSH 2017, AABB) ให้วัด <b>baseline ก่อนเริ่ม</b> และวัดซ้ำ <b>ราว 15 นาทีหลังเริ่ม</b> และเมื่อให้เสร็จ → เฉลยรับทั้ง 5–10 และ 15 นาที และเพิ่ม baseline VS ในข้อย่อย",
 sp:"ผู้คุมเตรียมถุง PRC จำลองพร้อมใบคล้องถุงเลือด, ใบสั่งการรักษา, ชุดให้เลือด (blood set มี filter), NSS, ถุงมือ, เสาน้ำเกลือ และผู้ป่วยจำลองที่มี heparin lock/IV access · ผู้คุมเล่นเป็นพยาบาลเมื่อผู้สอบขอให้ตรวจสอบซ้ำ · ข้อมูลบนถุง/ใบคล้อง/ใบสั่ง ตรงกันทั้งหมด หมู่เลือด O Rh+ ตรงกับผู้ป่วย ยังไม่หมดอายุ ถุงไม่รั่ว สีปกติ · ผู้ป่วยเซ็น consent แล้ว · ถ้าผู้สอบวัด vital sign ก่อนเริ่ม: BT 37.0 °C, BP 120/70, PR 88, RR 18",
 parts:S(
  B("11.1 Demonstrate the blood transfusion procedure",10,{tags:["proc"],
   ans:"<b>ก่อนเตรียมเลือด</b>: ตรวจ <b>informed consent</b> · ตรวจข้อบ่งชี้ คำสั่งการรักษา premedication และ rate · ผู้ป่วยได้ premedication แล้ว (ถ้ามีสั่ง) · <b>สวมถุงมือ</b>ก่อนจับถุงเลือด · <b>ตรวจคุณภาพเลือด</b>: สี ก้อน ถุงรั่ว/ฉีก <b>วันหมดอายุ</b> · <b>ตรวจสอบกับพยาบาล/แพทย์อีกคน</b>: <b>ใบคล้องต้องติดกับถุงเสมอ</b> (หลุด = ห้ามให้) · ชื่อ-นามสกุล-HN ตรงกันระหว่างถุงเลือดและคำสั่ง · unit number บนป้ายตรงกับบนถุง · หมู่เลือดตรงกัน (± ถามผู้ป่วย) · <b>เตรียมชุด</b>: เปิด blood set (มี filter) ปิด roller clamp ต่อถุงแบบ aseptic แขวนเสา เปิด clamp ไล่เลือดให้เต็ม set <b>ไม่มีฟองอากาศ</b> · <b>ที่ข้างเตียง</b>: แนะนำตัว <b>ยืนยันตัวผู้ป่วย</b> (ถามชื่อ-นามสกุล ตรวจป้ายข้อมือ เทียบกับถุง) แจ้งข้อบ่งชี้และผลข้างเคียง · <b>วัด vital sign ก่อนเริ่ม</b> · ต่อ set เข้ากับ heparin lock แบบ aseptic/universal precaution · ปรับ rate ตามคำสั่ง (ช้าใน 15 นาทีแรก) · <b>เฝ้าดูอาการ</b>และ<b>วัด vital sign หลังเริ่ม 5–15 นาที</b> และเมื่อให้เสร็จ · ให้เสร็จภายใน 4 ชม. · บันทึก",
   exp:"สาเหตุสำคัญของ acute hemolytic transfusion reaction คือ <b>clerical error</b> (ผิดตัวผู้ป่วย/ผิดถุง) → การตรวจสอบตัวผู้ป่วยกับถุงเลือดเป็นข้อสำคัญที่สุด · ให้ร่วมกับ <b>NSS เท่านั้น</b> (dextrose ทำให้ RBC แตก, Ringer's lactate มี Ca ทำให้เลือดแข็งตัวใน line) ห้ามผสมยาใน line เลือด · ถ้ามีอาการผิดปกติ: <b>หยุดให้เลือดทันที</b> คง IV ด้วย NSS ประเมิน ABC ตรวจ clerical error ที่ข้างเตียง",
   rubric:"ได้เต็ม = ครบตามลำดับ · ไม่ตรวจใบคล้อง/ตัวตนผู้ป่วยกับถุงเลือด = 0 ในข้อนี้ · ไม่สวมถุงมือ ไม่ตรวจวันหมดอายุ ไม่วัด vital sign = หักคะแนน",
   pts:[H("ตรวจเอกสาร",15),P("Check informed consent","consent","ยินยอม","เซ็น"),P("Check indication, order, premedication, rate","ข้อบ่งชี้","indicat","order","คำสั่ง","premed","\\brate\\b"),
    H("ตรวจถุงเลือด",35),P("Wear gloves before handling the bag","ถุงมือ","glove"),P("Check blood quality: colour, clots, leaks; expiry date","สีของเลือด","colou?r","clot","ก้อนเลือด","รั่ว","leak","หมดอายุ","expir"),CR(P("Double-check with a second nurse/doctor; tag must stay attached to the bag","พยาบาล","อีกคน","second","double.?check","ใบคล้อง","ป้าย","\\btag\\b","label")),CR(P("Name, HN, unit number and blood group match between bag, tag and order","นามสกุล","\\bhn\\b","unit (no|number)","\\bunit\\b","หมู่เลือด","blood group","abo","ตรงกัน","match")),
    H("เตรียมชุดให้เลือด",15),P("Blood set with filter: clamp closed, aseptic spike, hang, prime, no air","blood set","filter","clamp","aseptic","แขวน","prime","ไล่","ฟองอากาศ","\\bair\\b"),
    H("ที่ข้างเตียง",35),CR(P("Introduce; confirm patient identity at bedside (ask name, wristband) against the bag","แนะนำตัว","ถามชื่อ","wristband","ป้ายข้อมือ","identif","ยืนยันตัว")),P("Explain indication and side effects","ผลข้างเคียง","side effect","adverse","ข้อบ่งชี้"),P("Baseline vital signs before starting","vital sign","\\bvs\\b","สัญญาณชีพ","baseline"),P("Connect aseptically to IV/heparin lock; set rate per order (slow first 15 min)","heparin lock","connect","ปรับหยด","อัตรา","\\brate\\b"),CR(P("Observe for reaction; repeat vital signs 5–15 min after starting and at the end","สังเกต","observe","monitor","15 ?(min|นาที)","10 ?(min|นาที)","reaction","อาการแพ้"))]})
 ),
 interp:"สถานีให้เลือด: consent/order → ตรวจถุง (คุณภาพ หมดอายุ) → ตรวจสอบ 2 คน (ใบคล้อง ชื่อ HN unit no. หมู่เลือด) → เตรียม set → ยืนยันตัวผู้ป่วยที่เตียง → VS → ต่อ ปรับ rate เฝ้าอาการ",
 summary:["ข้อสำคัญที่สุด: ตรวจตัวตนผู้ป่วยกับถุงเลือดที่ข้างเตียง + ใบคล้องต้องติดถุงเสมอ (ป้องกัน ABO-incompatible)","ใช้ blood set มี filter, ให้กับ NSS เท่านั้น, ห้ามผสมยา, ให้เสร็จใน 4 ชม.","VS ก่อนเริ่ม และ 5–15 นาทีหลังเริ่ม · มีอาการผิดปกติ → หยุดให้เลือด คง IV ด้วย NSS ประเมิน ABC ตรวจ clerical error"]}),

/* ===== สถานี 12 ===== */
Co({page:3,orig:"12",topic:"skin",sub:"Drug eruption",title:"Lip swelling and rash after local anaesthesia and oral medications",img:["os127d_12"],imgNote:"Left: face/lips · Right: forearm",
 seen:"SI131 Ro409–412 ข้อ 14 (ได้ยาชา + NSAID + ATB แล้วผื่น หน้าบวม — ชุดนั้นไม่มีรูป)",
 stem:`A patient received a local anaesthetic injection and then took ibuprofen and amoxicillin. Afterwards, the lesions shown developed. On examination, vital signs are normal and the rest of the examination is within normal limits.<br>12.1 What is the diagnosis?<br>12.2 What is the likely cause in this patient?<br>12.3 Outline the management and advice.`,
 gray:"12. ผู้ป่วยไปฉีดยาชา, กินยา ibuprofen, Amoxicillin แล้วเกิดอาการดังรูป (รูปปากบวม + ผื่นนูนที่แขน) · ตรวจร่างกาย V/S normal, All WNL · ให้การวินิจฉัย · สาเหตุในผู้ป่วยรายนี้ · การรักษาและให้การแนะนำ",
 parts:S(
  B("12.1 Diagnosis",3,{tags:["skin"],
   ans:"<b>Acute urticaria with angioedema</b> (drug-induced immediate hypersensitivity) — <b>ไม่มี anaphylaxis</b> (vital signs ปกติ ไม่มีอาการทางเดินหายใจ/ทางเดินอาหาร) · รูปซ้าย: ริมฝีปากบนและล่างบวมตึง ขอบไม่ชัด สีผิวปกติ-ชมพู (angioedema) · รูปขวา: <b>multiple erythematous edematous wheals/plaques</b> ขอบชัด รูปร่างไม่แน่นอน บางส่วนรวมกันเป็นแผ่น ที่แขน (urticaria)",
   exp:"Urticaria = wheal บวมชั้น superficial dermis คัน หายใน 24 ชม. ไม่ทิ้งรอย · angioedema = บวมชั้น deep dermis/subcutaneous มักไม่คัน รู้สึกตึง อยู่ได้ 24–72 ชม. · ถ้ามีหายใจลำบาก เสียงแหบ ความดันต่ำ ปวดท้อง/อาเจียน = anaphylaxis → epinephrine IM",
   rubric:"ได้เต็ม = urticaria + angioedema (+ บอกว่าไม่ใช่ anaphylaxis) · ตอบ drug allergy/drug eruption กว้าง ๆ ได้บางส่วน",
   pts:[CR(P("Urticaria","urticari","wheal","ลมพิษ")),CR(P("Angioedema","angioedema","ปากบวม","lip swelling")),P("No features of anaphylaxis","no anaphyla","ไม่ใช่ anaphyla","not anaphyla","ไม่มี anaphyla","stable")]}),
  B("12.2 Likely cause in this patient",3,{tags:["skin"],
   ans:"<b>Drug-induced</b> — ยาที่สงสัย: <b>ibuprofen (NSAID)</b> น่าจะเป็นมากที่สุดสำหรับ urticaria/angioedema (กลไก non-IgE: ยับยั้ง COX-1 → leukotriene เพิ่ม) · <b>amoxicillin (beta-lactam)</b> — IgE-mediated ก็เป็นไปได้ · <b>local anaesthetic</b> (amide) — แพ้จริงพบน้อยมาก (มักเป็น vasovagal/ผลของ epinephrine) · ระบุให้ชัดด้วย timeline การได้ยา ประวัติเคยได้ยาเดิม และ allergy testing ภายหลัง",
   exp:"NSAID-induced urticaria/angioedema มักแพ้ข้ามกับ NSAIDs ที่ยับยั้ง COX-1 ทุกตัว (cross-reactive) แต่ทนต่อ paracetamol (ขนาดปกติ) และ selective COX-2 inhibitor ได้เกือบทั้งหมด · amoxicillin rash แบบ maculopapular (delayed) ต่างจาก urticaria (immediate)",
   rubric:"ได้เต็ม = drug-induced + ระบุ NSAID (และ amoxicillin) เป็นตัวสงสัยหลัก · ตอบยาชาอย่างเดียว ได้น้อย",
   pts:[CR(P("Drug-induced hypersensitivity","drug","แพ้ยา","จากยา","hypersensitiv")),G("Suspected drugs (NSAID ± beta-lactam)",1,P("Ibuprofen / NSAID","nsaid","ibuprofen"),P("Amoxicillin / beta-lactam","amoxicillin","beta[- ]?lactam","penicillin","antibiotic"))]}),
  B("12.3 Management and advice",4,{tags:["skin"],
   ans:"<b>หยุดยาที่สงสัยทั้งหมด</b> · ให้ <b>second-generation H1 antihistamine</b> (cetirizine, loratadine, fexofenadine; เพิ่มขนาดได้ถึง 4 เท่าถ้าคุมไม่ได้) ± <b>prednisolone</b> ระยะสั้น 3–5 วัน ถ้าบวมมาก · สังเกตอาการทางเดินหายใจ · <b>ออกบัตรแพ้ยา</b> ระบุ ibuprofen (NSAIDs) และ amoxicillin (beta-lactam) เป็นยาที่สงสัย · <b>เลี่ยง NSAIDs ทุกตัว</b> (แก้ปวดใช้ paracetamol) · ยาปฏิชีวนะทางทันตกรรมทางเลือก: clindamycin หรือ macrolide · <b>สอนอาการเตือน anaphylaxis</b> (หายใจลำบาก เสียงแหบ คอบวม หน้ามืด ปวดท้อง/อาเจียน) → มาโรงพยาบาลทันที · ส่งพบ allergist เพื่อ skin test/drug provocation test ภายหลัง",
   exp:"Anaphylaxis: <b>epinephrine 0.5 mg IM</b> (1 mg/mL) ต้นขาด้านนอก ซ้ำได้ทุก 5–15 นาที + O₂, IV fluid, antihistamine/steroid เป็นยาเสริมเท่านั้น",
   rubric:"ได้เต็ม = หยุดยา + 2nd-gen antihistamine + บัตรแพ้ยา + เลี่ยง NSAIDs + อาการเตือน anaphylaxis · ให้ epinephrine ในผู้ป่วย VS ปกติไม่มีอาการระบบอื่น = ไม่จำเป็น",
   pts:[P("Stop the suspected drugs","หยุดยา","stop","discontinu"),CR(P("Second-generation H1 antihistamine","antihistamine","antih","cetirizine","loratadine","fexofenadine","levocetirizine")),P("± short course oral corticosteroid","prednisolone","steroid"),CR(P("Drug allergy card (NSAID, amoxicillin)","บัตรแพ้ยา","allergy card","บัตร")),P("Avoid all NSAIDs; use paracetamol; alternative antibiotic","paracetamol","เลี่ยง nsaid","avoid nsaid","clindamycin","macrolide","azithro"),P("Warning signs of anaphylaxis → return immediately","anaphyla","หายใจลำบาก","คอบวม","หน้ามืด","มาโรงพยาบาล")]})
 ),
 interp:"Drug eruption: วินิจฉัย urticaria + angioedema และแยก anaphylaxis → หายาที่สงสัย (NSAID, beta-lactam) → รักษาและให้คำแนะนำ",
 summary:["Urticaria = wheal หายใน 24 ชม.; angioedema = บวมลึก มักที่ปาก/หนังตา; VS ปกติ ไม่มีระบบอื่น = ไม่ใช่ anaphylaxis","NSAIDs เป็นสาเหตุ angioedema จากยาที่พบบ่อย (non-IgE, แพ้ข้ามกลุ่ม); แพ้ยาชาจริงพบน้อย","Tx: หยุดยา, 2nd-gen antihistamine ± steroid สั้น ๆ, บัตรแพ้ยา, สอนอาการ anaphylaxis (epinephrine IM)"]}),

/* ===== สถานี 13 ===== */
Co({page:4,orig:"13",topic:"img",sub:"CXR",title:"Chest radiograph — read the film",img:["os127d_13"],imgNote:"Chest radiograph (frontal view); the arrow is part of the original image",
 stem:`A chest radiograph is shown. The arrow is part of the original image.<br>13.1 Read the film.<br>13.2 Give your differential diagnosis.`,
 gray:"13. (รูป CXR มีลูกศรชี้ฐานปอดขวา) · จงอ่านฟิล์ม · Differential diagnosis",
 flag:"ไฟล์ไม่มีประวัติผู้ป่วยและไม่บอกว่าลูกศรชี้อะไร — Claude อ่านว่าลูกศรชี้ 'pseudodiaphragm' ด้านขวาที่จุดสูงสุดเลื่อนไปด้านข้าง (subpulmonic effusion) ⚠ ไม่แน่ใจ 100% เพราะภาพเล็กและไม่มีคีย์",
 parts:S(
  B("13.1 Read the film.",6,{tags:["img"],
   ans:"Chest radiograph PA upright (ประเมิน technique: ไม่หมุน หายใจเข้าเพียงพอ) · <b>Left</b>: homogeneous opacity ที่ครึ่งล่างของปอดซ้าย ขอบบนโค้งเว้า (<b>meniscus sign</b>) บดบัง left costophrenic angle และ left hemidiaphragm, ระยะระหว่างฐานปอดกับ gastric air bubble กว้างขึ้น → <b>left pleural effusion</b> (moderate) · <b>Right (ลูกศร)</b>: ขอบ 'hemidiaphragm' ขวาแบนและจุดสูงสุดเลื่อนไปทางด้านข้าง (lateral peaking) ลาดชันลงที่ costophrenic angle → <b>right subpulmonic pleural effusion</b> · trachea อยู่กลาง ไม่มี mediastinal shift · ขอบหัวใจซ้ายถูกบดบังบางส่วน ประเมิน cardiothoracic ratio ได้ไม่แม่นยำ · ปอดส่วนบนทั้งสองข้างไม่มี infiltrate ชัด",
   exp:"Subpulmonic effusion: น้ำสะสมใต้ปอดโดยไม่ขึ้นด้านข้าง → เห็นเป็น 'pseudodiaphragm' ที่จุดสูงสุดเลื่อนไปด้านข้าง, ด้านซ้ายมีระยะ lung base ถึง gastric bubble &gt; 2 cm · ยืนยันด้วย lateral decubitus film หรือ ultrasound (ใช้นำทาง thoracentesis)",
   rubric:"ได้เต็ม = left pleural effusion (meniscus, blunted CP angle) + พูดถึงด้านขวา (subpulmonic effusion/ลูกศร) + trachea/mediastinum · บอกแค่ left pleural effusion ได้บางส่วน",
   pts:[P("Film/technique (PA upright)","\\bpa\\b","upright","technique","rotation"),CR(P("Left pleural effusion: homogeneous opacity with meniscus, obliterated left CP angle","pleural effusion","meniscus","น้ำในเยื่อหุ้มปอด","cp angle","costophrenic","blunt")),P("Right subpulmonic effusion (lateral peaking of pseudodiaphragm) at the arrow","subpulmonic","pseudodiaphragm","lateral peak","bilateral","ทั้งสองข้าง","right.*effusion"),P("Trachea midline, no mediastinal shift","trachea","mediastin","shift")]}),
  B("13.2 Differential diagnosis",4,{tags:["img","ddx"],
   ans:"<b>Bilateral pleural effusion</b> — แบ่งตาม Light's criteria หลังเจาะ: <b>Transudate</b>: <b>congestive heart failure</b> (พบบ่อยที่สุด มักสองข้าง) · cirrhosis (hepatic hydrothorax) · nephrotic syndrome/CKD volume overload · hypoalbuminemia · <b>Exudate</b>: <b>malignancy</b> (metastatic/lung cancer, lymphoma) · <b>tuberculous pleuritis</b> · parapneumonic effusion · pulmonary embolism · SLE/RA serositis",
   exp:"ต่อ: ultrasound + <b>diagnostic thoracentesis</b> (protein, LDH, glucose, pH, cell count, Gram/AFB, culture, ADA, cytology) · Light's: exudate ถ้า pleural/serum protein &gt; 0.5 หรือ pleural/serum LDH &gt; 0.6 หรือ pleural LDH &gt; 2/3 ULN serum · bilateral effusion + CHF ชัดและไม่มีไข้/เจ็บอก → ลองให้ diuretic ก่อนเจาะได้",
   rubric:"ได้เต็ม = Ddx ≥ 4 แยก transudate/exudate โดยมี CHF และ malignancy/TB",
   pts:[G("Transudative causes (≥ 1)",1,P("Congestive heart failure","heart failure","\\bchf\\b","\\bhf\\b","หัวใจล้มเหลว"),P("Cirrhosis / hepatic hydrothorax","cirrhosis","hepatic hydrothorax","ตับแข็ง"),P("Nephrotic syndrome / renal failure","nephrotic","renal","ckd","โรคไต","ไตวาย"),P("Hypoalbuminemia","hypoalbumin","albumin")),G("Exudative causes (≥ 2)",2,P("Malignancy","malignan","cancer","มะเร็ง","metasta","lymphoma"),P("Tuberculous pleuritis","\\btb\\b","tuberc","วัณโรค"),P("Parapneumonic effusion / empyema","parapneumonic","empyema","pneumonia"),P("Pulmonary embolism","embol","\\bpe\\b"),P("SLE / RA","\\bsle\\b","lupus","rheumatoid","\\bra\\b"))]})
 ),
 interp:"อ่าน CXR: หา pleural effusion (meniscus, CP angle) ทั้งสองข้าง รวมรูปแบบ subpulmonic → Ddx transudate vs exudate",
 summary:["Pleural effusion: homogeneous opacity + meniscus + blunted CP angle; ปริมาณ ≥ 200 mL บน PA","Subpulmonic effusion: pseudodiaphragm จุดสูงสุดเลื่อนออกด้านข้าง; ซ้าย = ระยะถึง gastric bubble &gt; 2 cm","Bilateral effusion: CHF บ่อยที่สุด; exudate → malignancy, TB, parapneumonic — แยกด้วย Light's criteria"]}),

/* ===== สถานี 14 ===== */
Co({page:4,orig:"14",topic:"proc",sub:"Other procedure",ex:1,proc:1,title:"Procedure — hand hygiene with alcohol-based hand rub",
 seen:"คล้าย SI131 Ro409–412 ข้อ 17 (hand hygiene — ชุดนั้นล้างมือด้วยสบู่และน้ำ)",
 stem:`Demonstrate hand hygiene using an alcohol-based hand rub. State its indications, its limitations, and the organisms it can eliminate.`,
 gray:"14. แสดงวิธีล้างมือด้วย Alcohol gel และบอกข้อบ่งชี้ ข้อจำกัด เชื้อที่สามารถกำจัดได้",
 flag:"ไฟล์ให้แค่หัวข้อ — บทผู้คุม (sp) Claude แต่ง · แบ่งเป็น 2 ข้อย่อย (สาธิต / บอกข้อบ่งชี้-ข้อจำกัด-เชื้อ) ตามที่ไฟล์ถาม",
 sp:"ผู้คุมเตรียมขวดแอลกอฮอล์เจล/alcohol hand rub · ผู้สอบสวมแหวน/นาฬิกาจำลอง (ดูว่าถอดก่อนหรือไม่) · หลังสาธิต ผู้คุมถาม: 'ใช้เมื่อไหร่' 'เมื่อไหร่ใช้ไม่ได้ ต้องล้างด้วยสบู่และน้ำแทน' 'ฆ่าเชื้ออะไรได้บ้าง'",
 parts:S(
  B("14.1 Demonstrate hand rubbing with alcohol-based hand rub",5,{tags:["proc"],
   ans:"<b>ถอดแหวน/นาฬิกา</b> เล็บสั้น ตรวจว่ามือ<b>ไม่เปื้อนที่มองเห็น</b> · กด hand rub <b>เต็มอุ้งมือ (~3 mL)</b> ให้พอเปียกทั่วมือ · ถูตามขั้นตอน WHO: (1) <b>ฝ่ามือถูฝ่ามือ</b> (2) <b>ฝ่ามือถูหลังมือ</b> นิ้วสอดประสาน สลับข้าง (3) <b>ฝ่ามือถูฝ่ามือ นิ้วสอดประสาน</b> (ง่ามนิ้ว) (4) <b>หลังนิ้วถูฝ่ามืออีกข้าง</b> (นิ้วล็อกกัน) (5) <b>กำนิ้วโป้งหมุนถู</b> สลับข้าง (6) <b>ปลายนิ้วถูหมุนบนฝ่ามือ</b> สลับข้าง · ถูจน<b>มือแห้งเอง</b> ใช้เวลา <b>20–30 วินาที</b> ไม่ต้องล้างน้ำหรือเช็ด",
   exp:"WHO: alcohol-based hand rub เป็นวิธีมาตรฐานในการดูแลผู้ป่วยเมื่อมือไม่เปื้อน — เร็วกว่า ฆ่าเชื้อได้ดีกว่า และระคายเคืองน้อยกว่าสบู่และน้ำ · ความเข้มข้นที่ได้ผล ethanol/isopropanol 60–80%",
   rubric:"ได้เต็ม = ปริมาณพอ + ครบ 6 ขั้นตอน + ถูจนแห้ง 20–30 วินาที · ข้ามนิ้วโป้ง/ปลายนิ้ว หรือเช็ดออกก่อนแห้ง = หักคะแนน",
   pts:[P("Remove rings/watch; hands not visibly soiled","แหวน","นาฬิกา","\\brings?\\b","watch","เครื่องประดับ"),P("Palmful (~3 mL) covering all surfaces","3 ?ml","palmful","เต็มอุ้งมือ","ทั่วมือ"),CR(P("Six WHO steps: palm-palm, back of hands, interlaced fingers, backs of fingers, thumbs, fingertips","ฝ่ามือ","หลังมือ","ง่ามนิ้ว","นิ้วโป้ง","thumb","ปลายนิ้ว","fingertip","interlac","6 ขั้น","six step")),CR(P("Rub until dry, 20–30 s","20[–-]?30","แห้ง","dry"))]}),
  B("14.2 Indications, limitations and organisms eliminated",5,{tags:["proc"],
   ans:"<b>ข้อบ่งชี้ (WHO 5 Moments)</b>: (1) ก่อนสัมผัสผู้ป่วย (2) ก่อนทำหัตถการสะอาด/ปราศจากเชื้อ (3) หลังสัมผัสเลือด/สารคัดหลั่ง (หลังถอดถุงมือ) (4) หลังสัมผัสผู้ป่วย (5) หลังสัมผัสสิ่งแวดล้อมรอบตัวผู้ป่วย · <b>ข้อจำกัด (ต้องล้างด้วยสบู่และน้ำแทน)</b>: <b>มือเปื้อนที่มองเห็น</b>/เปื้อนเลือด-สารคัดหลั่ง · สัมผัสเชื้อที่สร้าง <b>spore</b> (<i>Clostridioides difficile</i>, <i>Bacillus anthracis</i>) · <b>non-enveloped virus</b> เช่น <b>norovirus</b> (ผลน้อย) · protozoa cysts (<i>Cryptosporidium</i>, <i>Giardia</i>) · หลังเข้าห้องน้ำ · ไม่ล้างคราบสกปรก/สารเคมีออก · ติดไฟได้ ผิวแห้งระคายเคือง · <b>เชื้อที่กำจัดได้</b>: <b>แบคทีเรีย gram-positive และ gram-negative</b> (รวม MRSA, VRE, MDR gram-negative), <i>Mycobacterium tuberculosis</i>, <b>เชื้อรา</b> (Candida), <b>enveloped viruses</b> (influenza, RSV, SARS-CoV-2, HIV, HBV, HCV, HSV)",
   exp:"แอลกอฮอล์ทำลายโปรตีนและเยื่อหุ้มไขมัน → ได้ผลดีกับ enveloped virus แต่ spore ทนแอลกอฮอล์ การกำจัด spore อาศัยการชะล้างทางกลด้วยสบู่และน้ำ",
   rubric:"ได้เต็ม = 5 Moments ≥ 4 ข้อ + ข้อจำกัด (เปื้อนที่มองเห็น, spore/C. difficile, norovirus) + เชื้อที่ฆ่าได้ (แบคทีเรีย, TB, เชื้อรา, enveloped virus)",
   pts:[H("Indications",35),CR(P("WHO 5 Moments (before patient, before aseptic task, after body fluid, after patient, after surroundings)","5 moment","ก่อนสัมผัสผู้ป่วย","หลังสัมผัสผู้ป่วย","aseptic","สารคัดหลั่ง","body fluid","สิ่งแวดล้อม","surrounding")),
    H("Limitations",35),CR(P("Visibly soiled hands → soap and water","เปื้อน","visibl","soiled","สบู่","soap")),CR(P("Spores (C. difficile, Bacillus)","spore","c\\.? ?diff","clostrid","bacillus")),P("Non-enveloped viruses (norovirus), protozoan cysts","noro","non.?envelop","cryptospor","giardia","cyst"),P("Flammable, skin irritation, does not remove dirt","ติดไฟ","flamm","ระคาย","irritat","ผิวแห้ง"),
    H("Organisms eliminated",30),P("Gram-positive and gram-negative bacteria incl. MRSA, MDR organisms","bacteria","แบคทีเรีย","mrsa","gram","vre","mdr"),P("Mycobacterium tuberculosis, fungi","tuberc","\\btb\\b","mycobact","fung","เชื้อรา","candida"),P("Enveloped viruses (influenza, SARS-CoV-2, HIV, HBV)","envelop","influenza","covid","sars","hiv","hbv","virus","ไวรัส")]})
 ),
 interp:"Hand rub: สาธิต 6 ขั้นตอน 20–30 วินาที + 5 Moments + รู้ว่าเมื่อไหร่ต้องใช้สบู่และน้ำแทน",
 summary:["Alcohol hand rub: ~3 mL, 6 ขั้นตอน WHO, ถูจนแห้ง 20–30 วินาที (สบู่และน้ำ 40–60 วินาที)","ต้องใช้สบู่และน้ำ: มือเปื้อนที่มองเห็น, C. difficile/spore, norovirus, หลังเข้าห้องน้ำ","ฆ่าได้: แบคทีเรีย (รวม MRSA), TB, เชื้อรา, enveloped virus"]}),

/* ===== สถานี 15 ===== */
Co({page:4,orig:"15",topic:"micro",sub:"PBS",title:"Peripheral blood smear — describe and request laboratory tests",img:["os127d_15"],imgNote:"Peripheral blood smear (Wright stain), high power",
 seen:"คล้าย SI130 Ro409–412 ข้อ 20 · SI131 Ro417–420 ข้อ 2 (smear acute leukemia)",
 stem:`A peripheral blood smear is shown.<br>15.1 Describe this blood smear.<br>15.2 What further laboratory investigations would you request?`,
 gray:"15. (รูป PBS) · จงบรรยาย PBS นี้ · จงส่งตรวจทางห้องปฏิบัติการเพิ่มเติม",
 flag:"ไฟล์ไม่มีประวัติผู้ป่วย · จากรูป: blast จำนวนมาก บางตัวมี azurophilic granules และ perinuclear clearing (Golgi zone) → Claude สรุป AML (ไม่เห็น Auer rod ชัด) — ต้องแยก APL เสมอ",
 parts:S(
  B("15.1 Describe this blood smear.",5,{tags:["micro"],
   ans:"<b>RBC</b>: normochromic normocytic RBC, no significant anisopoikilocytosis · <b>WBC</b>: <b>increased in number</b> with <b>numerous blasts</b> — large cells (15–20 µm), <b>high N:C ratio</b>, round to slightly indented nuclei, <b>fine (open) chromatin</b>, <b>visible nucleoli</b>, basophilic cytoplasm, บางตัวมี <b>fine azurophilic granules</b> และ <b>perinuclear clearing (Golgi zone)</b> · ไม่เห็น Auer rod ชัดในภาพนี้ · <b>Platelet</b>: decreased (ไม่พบในภาพ) · → <b>acute myeloid leukemia</b> (myeloblast predominate)",
   exp:"Key PBS (AML): WBC increase, myeloblast predominate, myeloblast 15–20 µm, N:C 7:1–5:1, basophilic cytoplasm, finely reticulated chromatin, distinct nucleoli, อาจมี few delicate granules และ/หรือ Auer rods, platelet decrease · ALL: lymphoblast เล็กกว่า cytoplasm น้อย ไม่มี granule/Auer rod · APL: abnormal promyelocyte granule หนาแน่น nucleus bilobed ไม่มี Golgi zone + DIC",
   rubric:"ได้เต็ม = บรรยาย RBC/WBC/platelet + ลักษณะ blast (ขนาด N:C chromatin nucleoli granule) + สรุป acute leukemia (AML) · ตอบ acute leukemia ไม่ระบุชนิดได้เกือบเต็ม",
   pts:[H("RBC",10),P("Normochromic normocytic RBC","normochrom","normocyt"),H("WBC",75),CR(P("Numerous blasts, WBC increased","blast","บลาสต์")),P("Blast features: large, high N:C, fine chromatin, nucleoli","n ?: ?c","n/c","nucleol","fine chromatin","open chromatin","high n"),P("Azurophilic granules / Golgi zone / Auer rod","granule","golgi","auer","azurophil"),CR(P("Acute myeloid leukemia","\\baml\\b","acute myeloid","myeloblast","acute leuk","มะเร็งเม็ดเลือดขาวเฉียบพลัน")),H("Platelet",15),P("Platelets decreased","thrombocytopen","platelet","เกล็ดเลือดต่ำ")]}),
  B("15.2 Further laboratory investigations",5,{tags:["micro","lab"],
   ans:"<b>Confirm/classify</b>: <b>CBC with differential</b> · <b>bone marrow aspiration &amp; biopsy</b> (blasts ≥ 20%; น้อยกว่าได้ถ้ามี defining genetic abnormality) · <b>flow cytometry immunophenotyping</b> (CD13, CD33, CD117, MPO, CD34, HLA-DR) · cytochemistry (MPO, Sudan black B) · <b>cytogenetics (karyotype) + FISH/RT-PCR</b>: <b>PML::RARA t(15;17)</b> ด่วน, RUNX1::RUNX1T1, CBFB::MYH11 · <b>molecular</b>: FLT3-ITD/TKD, NPM1, CEBPA, IDH1/2, TP53 · <b>Complications</b>: <b>coagulation (PT, aPTT, fibrinogen, D-dimer)</b> หา DIC · <b>tumor lysis labs</b>: uric acid, K, phosphate, Ca, creatinine, <b>LDH</b> · LFT · <b>Pre-treatment</b>: HBV/HCV/HIV serology, blood group &amp; crossmatch, HLA typing (ถ้าเหมาะกับ transplant), echocardiogram ก่อนให้ anthracycline, pregnancy test ในหญิงวัยเจริญพันธุ์, hemoculture ถ้ามีไข้",
   exp:"สงสัย APL (เลือดออก, DIC, promyelocyte ผิดปกติ) → เริ่ม ATRA ทันทีไม่ต้องรอผลยืนยัน และให้ cryoprecipitate/platelet แก้ coagulopathy · hyperleukocytosis (&gt; 100,000) → เสี่ยง leukostasis และ TLS",
   rubric:"ได้เต็ม = bone marrow + flow cytometry + cytogenetics/molecular (PML::RARA) + coagulation (DIC) + TLS labs · ตอบแค่ bone marrow ได้บางส่วน",
   pts:[H("Diagnosis / classification",60),CR(P("Bone marrow aspiration and biopsy","bone marrow","ไขกระดูก","\\bbm\\b")),CR(P("Flow cytometry immunophenotyping","flow","immunophenotyp","\\bcd\\d")),P("Cytogenetics / FISH / molecular (PML::RARA, FLT3, NPM1)","cytogenet","karyotyp","fish","pml","rara","t\\(15;17\\)","flt3","npm1","molecular","pcr"),P("Cytochemistry (MPO, Sudan black)","mpo","myeloperoxidase","sudan","cytochem"),
    H("Complications / pre-treatment",40),CR(P("Coagulation profile for DIC (PT, aPTT, fibrinogen, D-dimer)","\\bpt\\b","aptt","ptt","fibrinogen","d-?dimer","dic","coag")),P("Tumor lysis labs: uric acid, K, phosphate, Ca, Cr, LDH","uric","\\bk\\b","potassium","phosph","ldh","creatinine","\\bcr\\b","tls","tumor lysis"),P("Viral serology, blood group, HLA, echo","hbv","hiv","hcv","blood group","crossmatch","hla","echo")]})
 ),
 interp:"PBS blast จำนวนมาก: บรรยายลักษณะ blast → AML → ส่ง BM, flow, cytogenetics/molecular (PML::RARA) + coagulation และ TLS labs",
 summary:["Myeloblast: 15–20 µm, N:C สูง, chromatin ละเอียด, nucleoli ชัด, อาจมี granule/Auer rod","Work-up AML: BM aspiration/biopsy, flow cytometry, karyotype + FISH/PCR, FLT3/NPM1/CEBPA","ต้องตรวจ PT/aPTT/fibrinogen/D-dimer (DIC, APL) และ uric acid/K/PO₄/Ca/Cr/LDH (TLS) ทุกราย"]}),

/* ===== สถานี 16 ===== */
Co({page:4,orig:"16",topic:"hx",sub:"Fever",ex:1,title:"History taking — fever for 2 months",
 seen:"คล้าย SI132 Ro405–406 A4 (ซักประวัติไข้เรื้อรังร่วมกับไอ)",
 stem:`A 32-year-old man presents with fever for 2 months.<br>16.1 Take a focused history from the patient.<br>16.2 Give your differential diagnosis.`,
 gray:"16. จงซักประวัติ ไข้ 2 เดือน พร้อม Differential diagnosis",
 flag:"ไฟล์ให้แค่หัวข้อ — อายุ เพศ และบทผู้ป่วย (sp) Claude แต่ง",
 sp:"ชายไทย 32 ปี พนักงานขาย · <b>ไข้ต่ำ ๆ เป็น ๆ หาย ๆ 2 เดือน</b> มักเป็นตอนเย็น/กลางคืน ไม่หนาวสั่น · <b>เหงื่อออกกลางคืน</b> · <b>น้ำหนักลด 6 kg ใน 2 เดือน</b> เบื่ออาหาร · <b>คลำได้ก้อนที่คอข้างขวา 1 เดือน</b> ไม่เจ็บ ค่อย ๆ โตขึ้น · ไอแห้งเล็กน้อย ไม่มีเลือดปน ไม่เหนื่อย · ไม่มีผื่น ไม่มีแผลในปาก ไม่ปวดข้อ ผมไม่ร่วง · ไม่ปวดท้อง ไม่ท้องเสีย ไม่ปัสสาวะแสบขัด · ไม่ปวดศีรษะ · ไม่ได้ทำฟัน ไม่มีโรคหัวใจ · ไม่ได้เข้าป่า ไม่ทำนา · ไม่มีคนในบ้านไอเรื้อรัง · <b>มีเพศสัมพันธ์กับคู่หลายคน ใช้ถุงยางบ้างไม่ใช้บ้าง</b> ไม่เคยตรวจ HIV · ไม่ใช้สารเสพติด · ไม่มียาประจำ ไม่ได้กินยาใหม่ · สูบบุหรี่เป็นครั้งคราว ดื่มเหล้าสังสรรค์ · ครอบครัวไม่มีมะเร็ง",
 parts:S(
  B("16.1 Take a focused history.",10,{tags:["hx"],
   ans:"<b>ลักษณะไข้</b>: ระยะเวลา รูปแบบ (ต่อเนื่อง/เป็น ๆ หาย ๆ/ช่วงเวลา) สูงสุดกี่องศา หนาวสั่น · <b>อาการทั่วไป (B symptoms)</b>: <b>น้ำหนักลด เหงื่อออกกลางคืน</b> เบื่ออาหาร · <b>อาการเฉพาะที่ไล่ทุกระบบ</b>: ก้อนตามตัว/ต่อมน้ำเหลือง เจ็บคอ ฟัน · ไอ เสมหะ ไอเป็นเลือด · ใจสั่น เหนื่อย (IE) · ปวดท้อง ท้องเสีย ตัวเหลือง · ปัสสาวะ · ปวดข้อ ปวดหลัง · ผื่น/รอยโรคผิวหนัง · ปวดศีรษะ ซึม · <b>ออโตอิมมูน</b>: ผื่นแพ้แดด แผลในปาก ผมร่วง ปวดข้อ ตาแดง · <b>ปัจจัยเสี่ยง/การสัมผัส</b>: <b>สัมผัสผู้ป่วยวัณโรค</b> · <b>เพศสัมพันธ์/IVDU (HIV)</b> · เข้าป่า/เดินทาง (malaria, scrub typhus) · ทำนา/ดิน + DM (melioidosis) · สัตว์ อาหารดิบ · ทำฟัน/หัตถการ ลิ้นหัวใจผิดปกติ (IE) · <b>ยา</b> (drug fever) · โรคประจำตัว ภูมิคุ้มกันต่ำ steroid เคยเป็น TB · การตรวจ/รักษาที่ผ่านมา · ครอบครัว (มะเร็ง TB)",
   exp:"Prolonged fever/FUO: แบ่ง Ddx เป็น 4 กลุ่ม — infection, malignancy, non-infectious inflammatory disease, miscellaneous (drug fever, factitious) · ในไทย TB และ HIV-associated opportunistic infection (talaromycosis, cryptococcosis, MAC) ต้องคิดเสมอ",
   rubric:"ได้เต็ม = ลักษณะไข้ + B symptoms + ไล่อาการทุกระบบ + ออโตอิมมูน + ปัจจัยเสี่ยง (TB contact, HIV, travel/occupation) + ยา · ไม่ถามน้ำหนักลด/HIV risk = ข้อสำคัญขาด",
   pts:[H("แนะนำตัว",5),P("Introduce, identify patient, explain purpose","แนะนำตัว","สวัสดี","introduc","ขออนุญาต"),
    H("ลักษณะไข้",15),P("Fever pattern, timing, height, chills","รูปแบบ","pattern","กี่องศา","หนาวสั่น","chill","rigor","เป็น ๆ หาย ๆ","กลางคืน"),
    H("อาการร่วมทุกระบบ",40),CR(P("Weight loss, night sweats, anorexia (B symptoms)","น้ำหนักลด","weight loss","เหงื่อ","night sweat","เบื่ออาหาร","b symptom")),P("Lymph nodes / neck mass","ต่อมน้ำเหลือง","ก้อน","lymph","mass"),P("Respiratory: cough, sputum, hemoptysis","ไอ","cough","เสมหะ","hemoptysis"),P("Systemic review: GI, urinary, cardiac, joints, skin, neuro","ปวดท้อง","ท้องเสีย","ปัสสาวะ","ใจสั่น","ปวดข้อ","ผื่น","rash","ปวดศีรษะ","headache"),P("Autoimmune features: photosensitive rash, oral ulcer, alopecia, arthritis","แพ้แดด","แผลในปาก","ผมร่วง","sle","autoimmun","photosens"),
    H("ปัจจัยเสี่ยง",40),CR(P("TB contact / previous TB","วัณโรค","\\btb\\b","tuberc","ไอเรื้อรัง")),CR(P("HIV risk: sexual history, IVDU, previous HIV test","เพศสัมพันธ์","sexual","hiv","ถุงยาง","condom","ivdu","สารเสพติด")),P("Travel, forest, farming, animals (malaria, scrub typhus, melioidosis)","ป่า","forest","travel","เดินทาง","ทำนา","ทำสวน","สัมผัสดิน","โคลน","สัตว์","farm"),P("Drugs (drug fever), dental procedures, valvular disease","กินยา","ยาที่ใช้","drug","ทำฟัน","dental","ลิ้นหัวใจ"),P("Underlying disease / immunosuppression, family history","โรคประจำตัว","ภูมิคุ้มกัน","immun","steroid","ครอบครัว","family")]}),
  B("16.2 Differential diagnosis",4,{tags:["hx","ddx"],
   ans:"<b>Leading: Tuberculosis (TB lymphadenitis ± pulmonary TB)</b> โดยมีความเสี่ยง <b>HIV infection</b> ที่ต้องตรวจ · Ddx: <b>lymphoma</b> (Hodgkin/non-Hodgkin — B symptoms + painless LN) · <b>HIV-associated opportunistic infection</b> (talaromycosis, cryptococcosis, disseminated MAC) · infective endocarditis · melioidosis/deep abscess · <b>autoimmune</b>: SLE, adult-onset Still disease, vasculitis · Kikuchi disease · drug fever · metastatic cancer (nasopharyngeal carcinoma กับก้อนที่คอ)",
   exp:"Work-up: CBC, ESR/CRP, LFT, UA, <b>anti-HIV</b>, hemoculture, CXR, sputum AFB/Xpert, <b>excisional LN biopsy</b> (histology + AFB/culture) หรือ FNA, CT neck/chest/abdomen · HIV positive → CD4 + serum cryptococcal Ag",
   rubric:"ได้เต็ม = TB เป็นอันดับแรก + HIV + lymphoma + Ddx อื่น ≥ 1 กลุ่ม (infection/malignancy/autoimmune)",
   pts:[CR(P("Tuberculosis (lymphadenitis / pulmonary)","\\btb\\b","tuberc","วัณโรค")),P("HIV infection / opportunistic infection","hiv","talaromyc","penicillio","cryptococ","\\bmac\\b","opportunis"),CR(P("Lymphoma","lymphoma","hodgkin","มะเร็งต่อมน้ำเหลือง")),G("Other differentials (≥ 1)",1,P("Infective endocarditis","endocarditis","\\bie\\b"),P("Melioidosis / abscess","melioid","abscess","ฝี"),P("SLE / Still disease / vasculitis","\\bsle\\b","lupus","still","vasculitis","autoimmun"),P("Kikuchi disease","kikuchi"),P("Drug fever","drug fever","ไข้จากยา"),P("Metastatic cancer / NPC","metasta","nasopharyn","\\bnpc\\b","มะเร็ง"))]})
 ),
 interp:"ซักประวัติไข้เรื้อรัง: ลักษณะไข้ + B symptoms + ไล่ทุกระบบ + ปัจจัยเสี่ยง (TB, HIV, travel/occupation, ยา) → Ddx 4 กลุ่ม infection/malignancy/inflammatory/misc",
 summary:["Prolonged fever: infection (TB, HIV-OI, IE, abscess), malignancy (lymphoma), autoimmune (SLE, Still), drug fever","ต้องถาม B symptoms, ต่อมน้ำเหลือง, TB contact, HIV risk ทุกราย","Painless LN + B symptoms → excisional biopsy (histology + AFB/culture) + anti-HIV"]}),

/* ===== สถานี 17 ===== */
Co({page:4,orig:"17",topic:"skin",sub:"Skin infection",title:"Lip lesion with a Tzanck smear",img:["os127d_17"],imgNote:"Left: lip lesion · Right: Tzanck smear from the lesion",
 seen:"คล้าย SI133 Ro403–404 ข้อ 10 · SI133 Ro407–408 LAB 6 (รอยโรคตุ่มน้ำ + Tzanck smear)",
 stem:`A patient presents with the lesion shown. A Tzanck smear was performed.<br>17.1 Describe the findings on the Tzanck smear.<br>17.2 What is the diagnosis?`,
 gray:"17. ผู้ป่วยมาพบแพทย์ด้วย Lesion ดังรูป และได้ทำ Tzanck's smear (รูปริมฝีปาก + รูป smear) · จงบรรยายสิ่งที่พบใน Tzanck's smear · Diagnosis",
 parts:S(
  B("17.1 Describe the Tzanck smear.",4,{tags:["skin","micro"],
   ans:"<b>Multinucleated giant cell</b> (keratinocyte ขนาดใหญ่ที่มีหลายนิวเคลียส) แสดงลักษณะ <b>3M</b>: <b>Multinucleation</b>, <b>Molding</b> (นิวเคลียสเบียดจนรูปร่างตามกัน), <b>Margination</b> of chromatin (chromatin ไปเกาะขอบ นิวเคลียสใสแบบ ground-glass) · อาจเห็น intranuclear inclusion (Cowdry type A)",
   exp:"Tzanck smear: ขูดฐานตุ่มน้ำใหม่ ย้อม Giemsa/Wright · พบใน HSV และ VZV (แยกกันไม่ได้) · sensitivity ต่ำกว่า PCR (วิธียืนยันที่ดีที่สุด)",
   rubric:"ได้เต็ม = multinucleated giant cell + molding/margination · บอกแค่ giant cell ได้บางส่วน",
   pts:[CR(P("Multinucleated giant cells","multinucleat","giant cell","หลายนิวเคลียส")),P("Nuclear molding, chromatin margination (3M), intranuclear inclusion","molding","moulding","margination","3m","inclusion","cowdry","ground.?glass")]}),
  B("17.2 Diagnosis",3,{tags:["skin"],
   ans:"<b>Herpes labialis</b> (recurrent orolabial herpes simplex virus infection, ส่วนใหญ่ HSV-1) — รอยโรค: <b>grouped vesicles on an erythematous base</b> ที่ vermilion border ของริมฝีปากบน บางตุ่มเริ่มขุ่น/ตกสะเก็ด",
   exp:"Tx: เริ่มเร็วที่สุด (prodrome) — <b>valacyclovir 2 g bid × 1 วัน</b> หรือ famciclovir 1.5 g ครั้งเดียว; หรือ acyclovir 400 mg 5 ครั้ง/วัน × 5 วัน (ใช้กันในไทย); topical acyclovir/penciclovir ได้ผลน้อย · ยืนยันด้วย HSV PCR ถ้าไม่ชัด · Ddx: impetigo (honey-crusted), herpes zoster (ตาม dermatome), aphthous ulcer (ในปาก ไม่มีตุ่มน้ำ)",
   rubric:"ได้เต็ม = herpes labialis/HSV infection · ตอบ herpes zoster/varicella = ผิด (ตำแหน่งและรูปแบบไม่เข้า)",
   pts:[CR(P("Herpes labialis / HSV infection","herpes labialis","herpes simplex","\\bhsv","cold sore","เริม")),P("Grouped vesicles on erythematous base at the lip","grouped","vesic","ตุ่มน้ำ","erythematous base","ฐานแดง")]})
 ),
 interp:"รอยโรคตุ่มน้ำกลุ่มที่ริมฝีปาก + Tzanck smear (multinucleated giant cell) → herpes labialis",
 summary:["Tzanck: multinucleated giant cell ลักษณะ 3M — multinucleation, molding, margination","พบได้ทั้ง HSV และ VZV (แยกไม่ได้); PCR ไวและจำเพาะที่สุด","Herpes labialis: grouped vesicles บนฐานแดงที่ vermilion border; Tx valacyclovir 2 g bid × 1 วัน"]}),

/* ===== สถานี 18 ===== */
Co({page:4,orig:"18",topic:"proc",sub:"NG tube",ex:1,proc:1,title:"Procedure — nasogastric tube insertion",
 stem:`Demonstrate insertion of a nasogastric tube on the manikin, saying aloud each step, including how you would confirm its position.`,
 gray:"18. จงแสดงวิธีการใส่ NG tube",
 flag:"ไฟล์ให้แค่หัวข้อ — บทผู้คุม (sp) Claude แต่ง",
 sp:"หุ่นฝึกใส่ NG tube (ศีรษะ-ลำตัว) · ผู้ป่วยจำลองรู้สึกตัวดี ให้ความร่วมมือ ข้อบ่งชี้: bowel obstruction ต้อง decompression · ไม่มีประวัติกะโหลกศีรษะ/ใบหน้าแตก ไม่มี varices · ผู้คุมมีอุปกรณ์: NG tube 16 Fr, เจลหล่อลื่น, syringe 50 mL, กระดาษ pH, หูฟัง, แก้วน้ำ+หลอด, พลาสเตอร์, ถุงมือ, ชามรูปไต, ถุงรองรับ · ถ้าผู้สอบดูดได้ gastric content: ผู้คุมบอก pH 4",
 parts:S(
  B("18.1 Demonstrate NG tube insertion",10,{tags:["proc"],
   ans:"<b>เตรียม</b>: แนะนำตัว ยืนยันตัวผู้ป่วย อธิบายขั้นตอน/ขอความยินยอม ตกลงสัญญาณให้หยุด (ยกมือ) · ตรวจ<b>ข้อห้าม</b>: basal skull fracture/facial trauma, esophageal stricture/recent surgery, (varices/coagulopathy เป็นข้อควรระวัง) · เตรียมอุปกรณ์ · <b>ท่านั่ง Fowler 45–90°</b> · ตรวจรูจมูกข้างที่โล่งกว่า · ล้างมือ สวมถุงมือ · <b>วัดความยาว NEX</b> (ปลายจมูก → ติ่งหู → xiphoid) และทำเครื่องหมาย · หล่อลื่นปลายสาย · <b>สอดสายไปตามพื้นโพรงจมูก ขนานกับเพดาน</b> (ไปด้านหลัง ไม่ใช่ด้านบน) · ถึง nasopharynx (~10–15 cm) ให้ผู้ป่วย<b>ก้มคาง</b>และ<b>กลืน</b> (จิบน้ำ) แล้วดันสายตามจังหวะกลืนจนถึงเครื่องหมาย · ถ้าไอ สำลัก เสียงเปลี่ยน เขียว → <b>ดึงออก</b>ทันที · <b>ยืนยันตำแหน่ง</b>: <b>ดูด gastric content ตรวจ pH ≤ 5.5</b> · ถ้าไม่ได้/ไม่แน่ใจหรือใช้ให้อาหาร → <b>CXR</b> (มาตรฐาน) · การเป่าลมฟังเสียงที่ลิ้นปี่ (whoosh test) ไม่แนะนำให้ใช้เป็นวิธีเดียว · <b>ยึดสาย</b>ด้วยพลาสเตอร์ที่จมูก บันทึกความยาวที่ตำแหน่งรูจมูก ต่อถุงรองรับ/ปิด · ถอดถุงมือ ล้างมือ บันทึก · ตรวจตำแหน่งซ้ำก่อนให้อาหาร/ยาทุกครั้ง",
   exp:"NHS/NPSA: pH ≤ 5.5 ยืนยันว่าอยู่ในกระเพาะ (ยกเว้นได้ยาลดกรด) · CXR: สายลงตรงกลางผ่าน carina ลงใต้ diaphragm ปลายอยู่ในกระเพาะ · ข้อบ่งชี้: decompression (bowel obstruction, ileus), ให้อาหาร/ยา, gastric lavage บางกรณี",
   rubric:"ได้เต็ม = ครบตามลำดับ · ไม่วัดความยาว/ไม่ยืนยันตำแหน่ง หรือยืนยันด้วยเป่าลมฟังอย่างเดียว = ข้อสำคัญขาด · ดันต่อทั้งที่ผู้ป่วยไอ/เขียว = ผิดร้ายแรง",
   pts:[H("เตรียม",20),P("Introduce, identify, explain, consent, agree a stop signal","แนะนำตัว","ยืนยันตัว","อธิบาย","consent","ยินยอม","สัญญาณ"),P("Check contraindications (basal skull fracture, facial trauma, stricture)","ข้อห้าม","contraindic","skull","กะโหลก","facial","stricture","varice"),P("Position upright (Fowler 45–90°), check nostril patency","fowler","นั่ง","upright","45","รูจมูก","nostril"),P("Hand hygiene, gloves","ล้างมือ","hand hygiene","ถุงมือ","glove"),
    H("ใส่สาย",40),CR(P("Measure NEX length (nose–earlobe–xiphoid) and mark","nex","ติ่งหู","earlobe","xiphoid","วัดความยาว","measure")),P("Lubricate the tip","หล่อลื่น","lubric","เจล","gel"),P("Insert along nasal floor, parallel to palate (backwards)","พื้นโพรงจมูก","floor","ขนาน","parallel","backward","ด้านหลัง"),P("Chin down and swallow; advance with swallows","ก้ม","chin","กลืน","swallow","จิบน้ำ"),CR(P("Withdraw if coughing, choking, cyanosis, voice change","ไอ","cough","สำลัก","เขียว","cyanos","ดึงออก","withdraw")),
    H("ยืนยันตำแหน่ง / ยึดสาย",40),CR(P("Confirm: aspirate gastric content pH ≤ 5.5; CXR if unsure / for feeding","\\bph\\b","aspirat","ดูด","cxr","x-?ray","เอกซเรย์")),P("Do not rely on air insufflation (whoosh) alone","whoosh","เป่าลม","\\bair\\b","auscult","ฟังเสียง"),P("Secure with tape, document length mark, connect bag","พลาสเตอร์","tape","ยึด","secure","บันทึก","document","ถุงรองรับ","drainage bag"),P("Remove gloves, hand hygiene, recheck before every feed","ถอดถุงมือ","ล้างมือ","ก่อนให้อาหาร","recheck","ตรวจซ้ำ")]})
 ),
 interp:"ใส่ NG tube: ข้อห้าม → ท่านั่ง → วัด NEX → สอดตามพื้นจมูก ก้มคางกลืน → ยืนยันด้วย pH aspirate/CXR → ยึดและบันทึก",
 summary:["วัด NEX (nose–earlobe–xiphoid) ก่อนใส่; ใส่ท่านั่ง สอดขนานพื้นโพรงจมูก ก้มคางและกลืน","ยืนยัน: aspirate pH ≤ 5.5 หรือ CXR (มาตรฐาน); ห้ามใช้ whoosh test เป็นวิธีเดียว","ข้อห้าม: basal skull fracture/facial fracture, esophageal stricture; ไอ/เขียว/เสียงเปลี่ยน → ดึงออก"]}),

/* ===== สถานี 19 ===== */
Co({page:5,orig:"19",topic:"micro",sub:"Malaria",title:"26-year-old man with fever for 3 days — thin blood film",img:["os127d_19"],imgNote:"Thin blood film (Giemsa stain), oil immersion",
 seen:"คล้าย SI131 Ro413–416 ข้อ 16 · SI132 Ro405–406 B4 · SI133 Ro407–408 LAB 1 (thin film malaria)",
 stem:`A 26-year-old man presents with fever for 3 days. His thin blood film is shown.<br>19.1 Describe the findings.<br>19.2 What is the diagnosis?`,
 gray:"19. (รูป blood film) ผู้ป่วยชายอายุ 26 ปี มาด้วยไข้ 3 วัน · จงบรรยายสิ่งที่พบ · Diagnosis",
 flag:"ไม่มีคีย์ — Claude อ่านเป็น <i>P. vivax</i> (infected RBC โตเล็กน้อย, ring หนา/amoeboid trophozoite, มี stippling จาง ๆ) ⚠ ภาพมีความละเอียดจำกัด ถ้าอาจารย์ตั้งใจเป็น P. falciparum คำตอบจะต่าง — ใส่เป็น Ddx",
 parts:S(
  B("19.1 Describe the findings.",4,{tags:["micro"],
   ans:"Thin blood film: <b>intraerythrocytic malarial parasites</b> ในเม็ดเลือดแดงหลายตัว (ตัวละ 1 parasite) · parasite เป็น <b>ring form ที่หนา/early trophozoite รูปร่างไม่สม่ำเสมอ (amoeboid)</b> มี chromatin dot 1 จุด cytoplasm สีฟ้า · <b>infected RBC มีขนาดใหญ่กว่าปกติเล็กน้อย</b> และมี <b>fine pink stippling (Schüffner's dots)</b> จาง ๆ · ไม่เห็น multiple infection, appliqué form หรือ banana-shaped gametocyte · parasitemia ต่ำ · RBC อื่นปกติ",
   exp:"P. vivax: infected RBC โต (1.5–2 เท่า) ซีด มี Schüffner's dots, trophozoite amoeboid, เห็นได้ทุกระยะ · P. falciparum: RBC ขนาดปกติ ring บางเล็ก (headphone, double chromatin) multiple infection, appliqué, Maurer's clefts, gametocyte รูปกล้วย, ไม่ค่อยเห็น schizont ในเลือด · P. knowlesi: band form, schizont ≤ 16 merozoites (พบในภาคใต้/ชายแดน)",
   rubric:"ได้เต็ม = intraerythrocytic parasite + ring/amoeboid trophozoite + enlarged RBC/Schüffner's dots · บอกแค่ 'malaria parasite' ได้บางส่วน",
   pts:[CR(P("Intraerythrocytic malarial parasites","malaria","plasmodium","parasite","intraerythrocyt","มาลาเรีย")),P("Thick ring / amoeboid trophozoites with single chromatin dot","\\bring","trophozoite","amoeboid","chromatin"),P("Infected RBCs enlarged with Schüffner's dots","enlarg","ขนาดใหญ่","schuffner","schüffner","stippl")]}),
  B("19.2 Diagnosis",3,{tags:["micro"],
   ans:"<b><i>Plasmodium vivax</i> malaria</b> (uncomplicated — ต้องประเมิน severe features ทางคลินิก)",
   exp:"Tx ตามแนวทางไทย (vivax): <b>chloroquine</b> 3 วัน (รวม 25 mg base/kg) + <b>primaquine</b> 0.5 mg base/kg/วัน × 14 วัน (radical cure กำจัด hypnozoite) — <b>ตรวจ G6PD ก่อนให้ primaquine</b> · ยืนยันชนิดด้วย thick/thin film โดยผู้เชี่ยวชาญหรือ PCR · ประเมิน severe malaria (ซึม ชัก, Hb &lt; 7, Cr &gt; 3, jaundice, hypoglycemia, shock, ARDS, parasitemia สูง)",
   rubric:"ได้เต็ม = Plasmodium vivax malaria · ตอบ malaria ไม่ระบุ species ได้บางส่วน · ตอบ P. falciparum ได้บางส่วน (ภาพไม่ชัด)",
   pts:[CR(P("Plasmodium vivax malaria","vivax","p\\.? ?v\\b")),P("Malaria (species named)","malaria","มาลาเรีย","plasmodium")]})
 ),
 interp:"Thin film ไข้ 3 วัน: หา intraerythrocytic parasite → ใช้ขนาด RBC, รูปร่าง trophozoite, dots แยก species",
 summary:["P. vivax: RBC โต ซีด + Schüffner's dots + amoeboid trophozoite","P. falciparum: RBC ขนาดปกติ, ring บาง, multiple infection, appliqué, gametocyte รูปกล้วย","Vivax: chloroquine 3 วัน + primaquine 14 วัน (ตรวจ G6PD ก่อน)"]}),

/* ===== สถานี 20 ===== */
Co({page:5,orig:"20",topic:"img",sub:"Bone/joint film",title:"Radiographs of both feet — describe and diagnose",img:["os127d_20"],imgNote:"Dorsoplantar radiographs of both feet (R = right)",
 stem:`Dorsoplantar radiographs of both feet are shown.<br>20.1 Describe the findings.<br>20.2 What is the diagnosis?`,
 gray:"20. (รูป film เท้าทั้งสองข้าง) · จงบรรยาย · Diagnosis",
 flag:"ไฟล์ไม่มีประวัติผู้ป่วย",
 parts:S(
  B("20.1 Describe the findings.",5,{tags:["img"],
   ans:"Dorsoplantar view เท้าทั้งสองข้าง: <b>bilateral, asymmetric</b> · <b>well-defined punched-out juxta-articular/marginal erosions with sclerotic margins and overhanging edges</b> ('rat-bite') เด่นที่ <b>1st MTP joint ทั้งสองข้าง</b> และพบที่ IP/MTP อื่นบางข้อ · <b>soft tissue swelling/masses (tophi)</b> โดยเฉพาะด้าน medial ของ 1st MTP ขวา · <b>joint space ค่อนข้างคงอยู่</b>จนถึงระยะท้าย · <b>ไม่มี periarticular osteopenia</b> · มีการผิดรูปของนิ้ว (hallux valgus)",
   exp:"ลักษณะ gout บน film มักเห็นหลังเป็นมา &gt; 5–10 ปี · Overhanging edge = กระดูกงอกยื่นคลุมขอบ erosion จากการกดของ tophus · RA: erosion ที่ marginal ไม่มี overhanging edge, periarticular osteopenia, joint space แคบสม่ำเสมอ, สมมาตร",
   rubric:"ได้เต็ม = punched-out erosions with overhanging edges + soft tissue tophi + preserved joint space/no osteopenia + ตำแหน่ง 1st MTP · บอกแค่ 'erosion' ได้บางส่วน",
   pts:[CR(P("Punched-out erosions with sclerotic margins and overhanging edges","punched","overhang","rat.?bite","erosion","sclerotic")),CR(P("Soft tissue masses / tophi","tophi","tophus","soft tissue","ก้อน")),P("1st MTP joints, bilateral asymmetric","1st mtp","first mtp","\\bmtp\\b","metatarsophalangeal","bilateral","asymmetr"),P("Preserved joint space, no periarticular osteopenia","joint space","preserved","osteopenia")]}),
  B("20.2 Diagnosis",3,{tags:["img"],
   ans:"<b>Chronic tophaceous gout</b> (chronic gouty arthritis) ของเท้าทั้งสองข้าง",
   exp:"Mx: <b>urate-lowering therapy</b> (allopurinol เริ่ม ≤ 100 mg/วัน ค่อย ๆ เพิ่ม; ตรวจ <b>HLA-B*58:01</b> ก่อนในคนไทย/เอเชีย) เป้า serum urate <b>&lt; 6 mg/dL (&lt; 5 ถ้ามี tophi)</b> + prophylaxis (colchicine/NSAID ขนาดต่ำ) 3–6 เดือน · ยืนยันด้วย MSU crystal (needle-shaped, negatively birefringent) จาก joint/tophus · Ddx: RA, psoriatic arthritis, OA",
   rubric:"ได้เต็ม = chronic tophaceous gout · ตอบ gout ได้เกือบเต็ม · ตอบ RA = ผิด",
   pts:[CR(P("Chronic tophaceous gout","gout","เกาต์","tophaceous"))]})
 ),
 interp:"Film เท้า: punched-out erosion with overhanging edge + tophi + joint space คงอยู่ → chronic tophaceous gout (แยกจาก RA)",
 summary:["Gout: punched-out erosion, sclerotic margin, overhanging edge + soft tissue tophi, joint space คงอยู่, ไม่มี osteopenia","ตำแหน่งที่พบบ่อย: 1st MTP (podagra)","ULT เป้า urate &lt; 6 (&lt; 5 ถ้ามี tophi); allopurinol ตรวจ HLA-B*58:01 ก่อนในคนไทย"]}),

/* ===== สถานี 21 ===== */
Co({page:6,orig:"21",topic:"micro",sub:"PBS",title:"30-year-old woman with fatigue and pallor for 3 months — blood smear",img:["os127d_21"],imgNote:"Peripheral blood smear (Wright stain)",
 stem:`A 30-year-old woman presents with fatigue and pallor for 3 months. Her peripheral blood smear is shown.<br>21.1 Describe the blood smear.<br>21.2 What further laboratory investigations would you request?`,
 gray:"21. ผู้ป่วยหญิงอายุ 30 ปี มาด้วยอ่อนเพลีย ซีดมา 3 เดือน (รูป PBS) · จงบรรยาย · ส่งตรวจทางห้องปฏิบัติการเพิ่มเติม",
 flag:"ภาพเป็นกำลังขยายต่ำ เห็น WBC ไม่ชัด",
 parts:S(
  B("21.1 Describe the blood smear.",5,{tags:["micro"],
   ans:"<b>RBC</b>: <b>hypochromic microcytic RBC</b> (central pallor กว้างเกิน 1/3 ของเซลล์), anisocytosis 1–2+, poikilocytosis 1–2+ มี <b>pencil cells (elliptocytes)</b> และ target cells เล็กน้อย, <b>ไม่มี/มี polychromasia น้อย</b>, ไม่พบ NRC/basophilic stippling · <b>WBC</b>: ไม่เห็นในภาพ (คาดว่าปกติ) · <b>Platelet</b>: <b>increased</b> (&gt; 25/OF) normal staining · → เข้าได้กับ <b>iron deficiency anemia</b>",
   exp:"Key PBS (IDA): hypochromic microcytic RBC, anisocytosis 1–2+, poikilocytosis 1–2+, few or no polychromasia, pencil cells, target cells · platelet normal/increase · ต่างจาก thalassemia ที่ poikilocytosis มาก polychromasia มากและอาจพบ NRC",
   rubric:"ได้เต็ม = hypochromic microcytic + pencil cell + polychromasia น้อย + platelet เพิ่ม + สรุป IDA · บอก hypochromic microcytic ไม่สรุปได้บางส่วน",
   pts:[H("RBC",70),CR(P("Hypochromic microcytic RBC","hypochrom","microcyt")),P("Mild anisopoikilocytosis with pencil cells (elliptocytes), few target cells","pencil","ellipto","target","aniso","poikilo"),P("Few or no polychromasia, no NRC","polychromas","\\bnrc\\b","nucleated"),H("Platelet / conclusion",30),P("Platelets increased (reactive thrombocytosis)","platelet","thrombocytos","เกล็ดเลือด"),CR(P("Iron deficiency anemia","\\bida\\b","iron def","ขาดธาตุเหล็ก","ขาดเหล็ก"))]}),
  B("21.2 Further laboratory investigations",5,{tags:["micro","lab"],
   ans:"<b>CBC with RBC indices</b> (Hb, MCV, MCH ต่ำ, <b>RDW สูง</b>) + <b>reticulocyte count</b> (ต่ำ) · <b>Iron studies</b>: <b>serum ferritin</b> (&lt; 30 ng/mL; &lt; 15 ยืนยัน) · serum iron ต่ำ · <b>TIBC สูง</b> · <b>transferrin saturation &lt; 16–20%</b> · <b>Hb typing (Hb analysis)</b> แยก thalassemia trait/HbE ซึ่งพบบ่อยในไทย (แปลผล HbA₂ หลังแก้ภาวะขาดเหล็ก) · <b>หาสาเหตุ</b>: ประวัติประจำเดือนมาก, <b>stool occult blood</b>/stool exam (hookworm), urinalysis (hematuria), pregnancy test · ถ้าไม่มีสาเหตุชัด: anti-tTG (celiac), H. pylori, EGD/colonoscopy",
   exp:"สาเหตุ IDA ที่พบบ่อยในหญิงวัยเจริญพันธุ์: menorrhagia, ตั้งครรภ์, กินไม่พอ · Tx: ferrous sulfate (elemental iron ~60–65 mg) วันละครั้งหรือวันเว้นวัน กินตอนท้องว่าง/กับวิตามินซี ต่ออีก ~3 เดือนหลัง Hb ปกติเพื่อเติม store · reticulocyte เพิ่มใน 7–10 วัน",
   rubric:"ได้เต็ม = CBC indices + reticulocyte + iron studies (ferritin เป็นหลัก) + Hb typing + หาสาเหตุเลือดออก · ส่ง bone marrow เป็นอันดับแรก = ไม่เหมาะสม",
   pts:[P("CBC with indices (MCV, MCH, RDW), reticulocyte count","cbc","mcv","mch","rdw","indices","reticulocyte","retic"),CR(P("Iron studies: serum ferritin, serum iron, TIBC, transferrin saturation","ferritin","serum iron","tibc","transferrin","iron stud")),P("Hb typing / Hb analysis to exclude thalassemia","hb typing","hb analysis","electrophoresis","thalass","hplc"),P("Find the cause: menstrual history, stool occult blood / stool exam, UA, pregnancy test","occult","stool","อุจจาระ","ประจำเดือน","menstru","hookworm","\\bua\\b","urinalysis","pregnan")]})
 ),
 interp:"PBS hypochromic microcytic + pencil cell + polychromasia น้อย + platelet สูง → IDA → iron studies + Hb typing + หาสาเหตุเสียเลือด",
 summary:["IDA smear: hypochromic microcytic, pencil cells, polychromasia น้อย, platelet อาจสูง","Ferritin ต่ำ = ตรวจที่จำเพาะที่สุด (&lt; 15 ยืนยัน, &lt; 30 สนับสนุน); TIBC สูง, TSAT ต่ำ, RDW สูง","ในไทยส่ง Hb typing แยก thalassemia/HbE และหาสาเหตุเสียเลือด (ประจำเดือน, GI, พยาธิปากขอ)"]}),

/* ===== สถานี 22 ===== */
Co({page:6,orig:"22",topic:"hx",sub:"Hyperuricemia",ex:1,title:"History taking — raised serum uric acid at a health check",
 stem:`A 45-year-old man is found to have a serum uric acid level of 9 mg/dL at a health check.<br>22.1 Take a focused history from the patient.<br>22.2 What is your diagnosis?`,
 gray:"22. จงซักประวัติ ผู้ป่วยตรวจสุขภาพพบ Uric acid 9 และให้การวินิจฉัย",
 flag:"ไฟล์ให้แค่หัวข้อ — อายุ เพศ หน่วย (mg/dL) และบทผู้ป่วย (sp) Claude แต่ง",
 sp:"ชายไทย 45 ปี พนักงานบริษัท · ตรวจสุขภาพประจำปีพบ uric acid 9 mg/dL (ปีก่อน 8.2) · <b>ไม่เคยปวดบวมแดงร้อนตามข้อ</b> ไม่เคยมีก้อนตามข้อ/ใบหู · <b>ไม่เคยปวดเอวร้าวลงขาหนีบ ไม่เคยปัสสาวะเป็นเลือด/มีนิ่ว</b> · ปัสสาวะปกติ ไม่บวม · ไม่มีผื่นสะเก็ดเงิน ไม่มีโรคเลือด ไม่เคยได้เคมีบำบัด · <b>ดื่มเบียร์วันละ 2–3 กระป๋อง เกือบทุกวัน</b> · ชอบกินเครื่องในสัตว์ อาหารทะเล <b>ดื่มน้ำอัดลม/ชาเขียวหวานทุกวัน</b> · น้ำหนักขึ้น 8 kg ใน 2 ปี (BMI 29) · <b>เป็นความดันสูง 2 ปี กิน hydrochlorothiazide 25 mg</b> · ไม่กินแอสไพริน · ไม่ทราบระดับน้ำตาล/ไขมัน · ไม่มีอาการไทรอยด์ต่ำ · พ่อเป็นโรคเกาต์ · ไม่สูบบุหรี่",
 parts:S(
  B("22.1 Take a focused history.",10,{tags:["hx"],
   ans:"<b>ยืนยันผล</b>: ตรวจเมื่อไร งดอาหาร/ดื่มก่อนตรวจไหม เคยตรวจซ้ำ · <b>อาการของ gout</b>: ปวดบวมแดงร้อนข้อเฉียบพลัน (1st MTP, ข้อเท้า, เข่า) เป็นซ้ำ ก้อน tophi · <b>นิ่วไต</b>: ปวดเอวร้าวขาหนีบ ปัสสาวะเป็นเลือด/มีนิ่ว · <b>อาการไต</b>: บวม ปัสสาวะเป็นฟอง/ออกน้อย · <b>สาเหตุ overproduction</b>: อาหาร purine สูง (เครื่องใน อาหารทะเล เนื้อแดง), <b>แอลกอฮอล์ (เบียร์)</b>, <b>เครื่องดื่ม fructose</b>, อ้วน, โรค cell turnover สูง (myeloproliferative/lymphoproliferative, hemolysis, psoriasis, ได้เคมีบำบัด) · <b>สาเหตุ underexcretion</b>: <b>CKD</b>, <b>ยา</b> (<b>thiazide/loop diuretic</b>, low-dose aspirin, cyclosporine/tacrolimus, pyrazinamide/ethambutol), ภาวะขาดน้ำ, lead exposure, hypothyroidism · <b>Metabolic syndrome/CVD</b>: HT DM DLP อ้วน โรคหัวใจ · ประวัติครอบครัว gout/นิ่ว",
   exp:"Uric acid &gt; 6.8 mg/dL = เกินจุดอิ่มตัว (supersaturation) ของ monosodium urate · ส่วนใหญ่ของผู้มี hyperuricemia ไม่เกิด gout",
   rubric:"ได้เต็ม = ถาม gout + นิ่ว + CKD + สาเหตุทั้ง overproduction และ underexcretion (โดยเฉพาะยา/เหล้า/อาหาร) + metabolic syndrome · ไม่ถามอาการข้อ/นิ่ว หรือไม่ถามยา = ข้อสำคัญขาด",
   pts:[H("แนะนำตัว / ผลตรวจ",10),P("Introduce; clarify test timing, prior levels","แนะนำตัว","สวัสดี","ตรวจเมื่อ","ตรวจซ้ำ","ปีก่อน","fasting"),
    H("ภาวะแทรกซ้อน",30),CR(P("Gout: acute joint pain/swelling, recurrent attacks, tophi","ปวดข้อ","ข้อบวม","joint","gout","เกาต์","tophi","ก้อน","1st mtp","นิ้วโป้ง")),CR(P("Urolithiasis: renal colic, hematuria, stones","นิ่ว","stone","ปวดเอว","colic","ปัสสาวะเป็นเลือด","hematuria")),P("Kidney disease symptoms","โรคไต","ckd","ขาบวม","ตัวบวม","ปัสสาวะเป็นฟอง","kidney"),
    H("สาเหตุ",40),P("Diet: purine-rich foods (organ meat, seafood, red meat)","purine","เครื่องใน","อาหารทะเล","seafood","เนื้อแดง","organ meat"),P("Alcohol (beer), fructose/sugary drinks","เหล้า","เบียร์","alcohol","beer","น้ำอัดลม","น้ำหวาน","เครื่องดื่มหวาน","fructose","sugar"),CR(P("Drugs: thiazide/loop diuretics, low-dose aspirin, cyclosporine, TB drugs","กินยา","ยาประจำ","thiazide","diuretic","ขับปัสสาวะ","aspirin","cyclosporin","pyrazinamide","hctz")),P("High cell turnover: hematologic malignancy, hemolysis, psoriasis, chemotherapy","psoria","สะเก็ดเงิน","hemoly","leuk","lymphoma","chemo","เคมี","โรคเลือด"),P("Other: dehydration, hypothyroidism, lead","ขาดน้ำ","dehydra","thyroid","ไทรอยด์","\\blead\\b","ตะกั่ว"),
    H("โรคร่วม / ครอบครัว",20),P("Metabolic syndrome: HT, DM, dyslipidemia, obesity, CVD","ความดัน","เบาหวาน","ไขมัน","อ้วน","น้ำหนัก","\\bht\\b","\\bdm\\b","metabolic","หัวใจ"),P("Family history of gout / stones","ครอบครัว","family","พ่อ","แม่")]}),
  B("22.2 Diagnosis",3,{tags:["hx"],
   ans:"<b>Asymptomatic hyperuricemia</b> — ยังไม่เคยมี gout/นิ่ว/tophi · ปัจจัยที่ทำให้ uric acid สูง: <b>thiazide diuretic</b>, <b>ดื่มเบียร์ทุกวัน</b>, อาหาร purine สูง, <b>เครื่องดื่ม fructose</b>, <b>อ้วน (metabolic syndrome)</b>",
   exp:"ACR 2020: <b>ไม่แนะนำ urate-lowering therapy</b> ใน asymptomatic hyperuricemia (ไม่มี gout, tophi, นิ่ว) · แนะนำ: ลดน้ำหนัก งดเบียร์/ลดแอลกอฮอล์ ลดเครื่องดื่มหวาน/fructose ลดเครื่องในและอาหารทะเล ดื่มน้ำมาก ๆ · เปลี่ยน HCTZ เป็นยาความดันอื่นถ้าทำได้ (losartan มีฤทธิ์ uricosuric) · คัดกรอง FBS/HbA1c, lipid, creatinine/eGFR, UA · ความเห็นในแนวทางญี่ปุ่นต่างจาก ACR (พิจารณา ULT ถ้า urate ≥ 8 ร่วมกับโรคร่วม) — ในการสอบตอบตาม ACR/EULAR",
   rubric:"ได้เต็ม = asymptomatic hyperuricemia + ระบุสาเหตุ secondary (thiazide, alcohol, diet, obesity) · ตอบ gout = ผิด (ไม่เคยมีอาการข้อ)",
   pts:[CR(P("Asymptomatic hyperuricemia","asymptomatic hyperuric","hyperuric","กรดยูริกสูง")),G("Contributing causes (≥ 2)",2,P("Thiazide diuretic","thiazide","hctz","hydrochlorothiazide","ขับปัสสาวะ"),P("Alcohol (beer)","เบียร์","beer","alcohol","เหล้า"),P("Purine-rich diet / fructose drinks","purine","เครื่องใน","อาหารทะเล","fructose","น้ำหวาน","น้ำอัดลม"),P("Obesity / metabolic syndrome","อ้วน","obes","metabolic"))]})
 ),
 interp:"ซักประวัติ hyperuricemia: มีภาวะแทรกซ้อน (gout, นิ่ว, CKD) หรือไม่ → หาสาเหตุ overproduction/underexcretion (ยา เหล้า อาหาร) → metabolic syndrome",
 summary:["Asymptomatic hyperuricemia (ไม่มี gout/tophi/นิ่ว) → ไม่ให้ ULT (ACR 2020); ปรับพฤติกรรม","สาเหตุที่ต้องถาม: thiazide/loop diuretic, low-dose aspirin, เบียร์, fructose, purine สูง, CKD, cell turnover สูง","คัดกรองโรคร่วม: HT, DM, dyslipidemia, CKD, อ้วน"]}),

);
})();
