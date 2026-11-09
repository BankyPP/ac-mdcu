(function(){
/* SI Med OSCE — SI127 Rotate 409–412 — ไฟล์ OSCE_MED_409-412.pdf (โค้ด SIOS127C) 8 หน้า
   ไฟล์บอก: หน้า 1 = ปก "OSCE Rotate 409-412" · หน้า 2–8 = โน้ตลายมือดิจิทัลบนกระดาษตาราง สถานี 1–25 ครบ (หัวข้อสถานีไฮไลต์เขียว) · ไม่มีส่วน LAB แยก · ไม่บอกเวลา/จำนวนนาทีต่อสถานี
   ไม่มีรูปประกอบเลยทั้งไฟล์ (ไม่มี EKG/CXR/สเมียร์/film/ผื่น) → สถานีที่ต้องดูรูปใช้ NOIMG ทั้งหมด: 1, 3, 7, 8, 10, 11, 12, 14, 15, 16, 17, 23, 25
   ผู้ใช้บอก: OSCE ไม่มีเฉลย → key = NK ทุกข้อย่อย · ข้อความหลัง "#" และรายการที่ผู้จดเขียน = คำตอบ/แนวทางของผู้จด ถอดลง gray/notes ใช้เป็นแนวทาง (ไม่ใช่คีย์)
   ไฮไลต์เหลืองในไฟล์: "ยา!!!!" (สถานี 19) และ "mmHg" (สถานี 22) · ตัวเหลือง "AIDS" แก้ทับ "HIV" ที่ขีดฆ่า (สถานี 20)
   สถานีที่มีอาจารย์ (ex:1): 2, 4, 5, 6, 9, 13 (proc), 18 (proc), 19, 20, 21, 22, 24 — บทผู้ป่วย (sp) อายุ/เพศ Claude แต่งให้ตรงกับคำตอบผู้จด
   ไม่มีสถานีที่ข้าม ไม่มีฐานพักในไฟล์ */
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
const Co=o=>Object.assign({set:"SI127",ro:"Ro409–412",file:"SIOS127C",opinion:""},o);
QB.push(

/* ===== สถานี 1 ===== */
Co({page:2,orig:"1",topic:"micro",sub:"AFB",title:"Sputum smear — describe and identify the organism",
 stem:`A sputum smear is examined under oil immersion.<br>1. Describe what you see.<br>2. What is the most likely diagnosis?`,
 gray:"1. ส่อง Sputum · \"Acid fast bacilli\" เขียนตัวเต็ม! · # เอาแค่คำว่า Tuberculosis",
 flag:NOIMG+" · โจทย์ (stem) Claude เรียบเรียงจากหัวข้อ \"ส่อง Sputum\" — ไฟล์ไม่บอกประวัติและชนิดสีย้อม",
 notes:"คำตอบผู้จด: ต้องเขียน \"Acid fast bacilli\" เต็มคำ (ไม่ย่อ) และวินิจฉัยแค่ \"Tuberculosis\" ก็พอ",
 parts:S(
  B("1.1 Describe what you see.",3,{tags:["micro"],
   ans:"ย้อม <b>acid-fast stain</b> (Ziehl-Neelsen/Kinyoun): พบ<b>แท่งเรียวยาว โค้งเล็กน้อย เป็นปล้อง (beaded) ติดสีแดง/ชมพู</b> บนพื้นสีน้ำเงิน (methylene blue) = <b>acid-fast bacilli</b> (เขียนเต็มคำ) · รายงานปริมาณ (scanty, 1+, 2+, 3+)",
   exp:"การรายงานผล ZN (กำลังขยาย 1000x): 1–9 ตัว/100 fields = scanty (รายงานจำนวน) · 10–99/100 fields = 1+ · 1–10/field = 2+ · > 10/field = 3+",
   rubric:"ผู้จดย้ำ: เขียน \"Acid fast bacilli\" เต็มคำ — ตอบแค่ตัวย่อได้คะแนนน้อยกว่า",
   pts:[CR(P("Acid-fast bacilli (written in full)","acid.?fast bacill","acid.?fast","ทนกรด")),P("Red/pink slender beaded rods on a blue background","red","pink","แดง","ชมพู","beaded","rod","แท่ง"),P("Ziehl-Neelsen / Kinyoun stain","ziehl","neelsen","kinyoun","\\bzn\\b")]}),
  B("1.2 What is the most likely diagnosis?",2,{tags:["micro"],
   ans:"<b>Tuberculosis</b> (pulmonary TB) — ผู้จดแนะนำให้ตอบแค่คำว่า Tuberculosis · AFB บนสเมียร์แยก <i>M. tuberculosis</i> จาก NTM ไม่ได้ → ยืนยันด้วย <b>Xpert MTB/RIF</b> และ culture",
   exp:"แนวทางวัณโรคของไทย: ส่ง sputum AFB + molecular test (Xpert MTB/RIF) ในผู้ป่วยสงสัย TB · สูตรมาตรฐานผู้ป่วยใหม่ 2HRZE/4HR",
   pts:[CR(P("Tuberculosis","tubercul","\\btb\\b","วัณโรค")),P("Confirm with Xpert MTB/RIF or culture (NTM possible)","xpert","genexpert","culture","เพาะเชื้อ","\\bntm\\b","non.?tubercul")]})
 ),
 interp:"Microscope: sputum acid-fast stain — บรรยาย acid-fast bacilli และวินิจฉัย TB",
 summary:["AFB stain: แท่งเรียว beaded สีแดงบนพื้นน้ำเงิน — เขียน \"acid-fast bacilli\" เต็มคำ","สเมียร์บวกยังแยก TB กับ NTM ไม่ได้ → Xpert MTB/RIF + culture","TB รายใหม่: 2HRZE/4HR"]}),

/* ===== สถานี 2 ===== */
Co({page:2,orig:"2",topic:"hx",sub:"Jaundice",ex:1,title:"History taking — yellow skin and eyes for 1 month",
 stem:`A 65-year-old man presents with yellow discoloration of the skin and eyes for 1 month. Take a focused history, then give your most likely diagnosis.`,
 gray:"2. Hx taking · ตัวเหลือง, ตาเหลือง 1 mo. · - สีปัสสาวะ - สีอุจจาระ - คันตามตัว - ปวดท้อง - เบื่ออาหาร นน.ลด - ภูมิลำเนา - สุกๆดิบๆ - สมุนไพร, alcohol - ไวรัสตับอักเสบ · (คอลัมน์ขวา) - N/V - ท้องโต/ขาบวม - ไข้ · # Periampullary CA",
 flag:"⚠ ไฟล์ไม่บอกอายุ/เพศ — อายุ 65 ปี ชาย และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (Periampullary CA)",
 notes:"ผู้จดเขียนรายการคำถามที่ต้องซัก (ถอดครบใน gray) และคำวินิจฉัย # Periampullary CA",
 sp:"ชาย 65 ปี ตัวเหลืองตาเหลือง 1 เดือน ค่อย ๆ เหลืองมากขึ้นเรื่อย ๆ ไม่เคยเป็นมาก่อน · ปัสสาวะสีเข้มเหมือนชาแก่ · อุจจาระสีซีดขาวเหมือนดินน้ำมัน 2 สัปดาห์ · คันตามตัวมาก · ไม่ปวดท้อง (ถ้าถามละเอียด: แน่นใต้ลิ้นปี่เล็กน้อย) · ไม่มีไข้ ไม่หนาวสั่น · เบื่ออาหาร น้ำหนักลด 6 kg ใน 2 เดือน · คลื่นไส้เล็กน้อย ไม่อาเจียน · ท้องไม่โต ขาไม่บวม · ภูมิลำเนาขอนแก่น เคยกินก้อยปลา/ปลาร้าดิบตอนหนุ่ม · ไม่กินสมุนไพร ไม่ได้เริ่มยาใหม่ · ดื่มเหล้านาน ๆ ครั้ง · ไม่เคยเป็นตับอักเสบ ไม่เคยรับเลือด ไม่มีรอยสัก",
 parts:S(
  B("2.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะ jaundice:</b> onset/ระยะเวลา, ค่อย ๆ เป็นมากขึ้นหรือเป็น ๆ หาย ๆ, <b>สีปัสสาวะ</b> (เข้ม = conjugated), <b>สีอุจจาระ</b> (ซีด = obstructive), <b>คันตามตัว</b> · <b>อาการร่วม:</b> ปวดท้อง (biliary colic/ปวดร้าวหลัง), ไข้หนาวสั่น (cholangitis), คลื่นไส้อาเจียน, <b>เบื่ออาหาร น้ำหนักลด</b> (มะเร็ง), ท้องโต/ขาบวม (chronic liver disease), ซีด/ถ่ายดำ · <b>หาสาเหตุ/ปัจจัยเสี่ยง:</b> <b>ภูมิลำเนา + กินสุก ๆ ดิบ ๆ</b> (พยาธิใบไม้ตับ → cholangiocarcinoma), <b>สมุนไพร/ยา</b>, <b>alcohol</b>, <b>ไวรัสตับอักเสบ</b> (รับเลือด สัก เพศสัมพันธ์ ฉีดยา), เคยเหลือง/โรคเลือดมาก่อน, นิ่วถุงน้ำดี",
   exp:"Painless progressive obstructive jaundice + น้ำหนักลด ในผู้สูงอายุ = มะเร็งทางเดินน้ำดีส่วนปลาย/periampullary จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ · ปวดท้อง + ไข้ + เหลือง (Charcot triad) ชวนคิด CBD stone with cholangitis",
   rubric:"ได้เต็ม = ถามสีปัสสาวะ/อุจจาระ/คัน + อาการร่วม (ปวดท้อง ไข้ น้ำหนักลด) + ปัจจัยเสี่ยง (ภูมิลำเนา/ดิบ, ยา/สมุนไพร, alcohol, viral) · ไม่ถามสีอุจจาระหรือน้ำหนักลด = ขาดข้อสำคัญ",
   pts:[H("ลักษณะ jaundice",30),P("Onset, duration, progression","onset","นาน","ระยะเวลา","ค่อย","มากขึ้น","เป็น ?ๆ ?หาย","progress"),CR(P("Urine colour","ปัสสาวะ","urine")),CR(P("Stool colour (pale/acholic)","อุจจาระ","stool","acholic","ซีด")),P("Pruritus","คัน","prurit","itch"),
    H("อาการร่วม",35),P("Abdominal pain","ปวดท้อง","abdominal pain","ปวดใต้ชายโครง"),P("Fever / chills","ไข้","fever","หนาวสั่น"),CR(P("Anorexia, weight loss","น้ำหนักลด","นน\\.? ?ลด","weight loss","เบื่ออาหาร","anorexia")),P("Nausea/vomiting","คลื่นไส้","อาเจียน","nausea","vomit","n/v"),P("Abdominal distension / leg edema","ท้องโต","ขาบวม","ascites","edema","บวม"),
    H("สาเหตุ/ปัจจัยเสี่ยง",35),P("Domicile and raw/undercooked fish (liver fluke)","ภูมิลำเนา","สุก ?ๆ ?ดิบ","ดิบ","ปลาร้า","ก้อย","liver fluke","พยาธิ"),P("Herbal medicine and drugs","สมุนไพร","herb","ยา(แก้|สมุนไพร|ที่|อะไร|ประจำ|ใหม่|ขับ|ชุด|ลด|ต้ม)","(กิน|ใช้|ประวัติ|ซื้อ)ยา","drug"),P("Alcohol","alcohol","เหล้า","สุรา"),P("Viral hepatitis risk","ไวรัสตับ","hepatitis","รับเลือด","สัก","tattoo","เพศสัมพันธ์","ivdu")]}),
  B("2.2 What is your most likely diagnosis and differential diagnosis?",3,{tags:["hx"],
   ans:"<b>Periampullary carcinoma</b> (obstructive jaundice: painless progressive, ปัสสาวะเข้ม อุจจาระซีด คัน น้ำหนักลด) · Ddx: <b>carcinoma of the head of pancreas</b>, <b>distal cholangiocarcinoma</b> (ภูมิลำเนาอีสาน + กินปลาดิบ), ampullary/duodenal cancer, CBD stone",
   exp:"Periampullary CA รวม ampulla of Vater, distal CBD, head of pancreas, duodenum · ต่อ: LFT (direct bilirubin, ALP/GGT สูง), U/S (dilated CBD + IHD) → <b>CT pancreas protocol/MRCP</b>, CA 19-9, EUS ± biopsy · ตรวจพบ Courvoisier sign (ถุงน้ำดีโตคลำได้ไม่เจ็บ)",
   rubric:"ตอบ obstructive jaundice โดยไม่บอกสาเหตุ = บางส่วน · ตอบ CA head of pancreas หรือ cholangiocarcinoma = ได้บางส่วน (ใกล้เคียง)",
   pts:[CR(P("Periampullary carcinoma","periampull","ampull","ampulla")),P("Obstructive (post-hepatic) jaundice","obstruct","post.?hepatic","cholesta"),G("Differential diagnosis (≥ 1)",1,P("Carcinoma of the head of pancreas","pancrea"),P("Cholangiocarcinoma","cholangio","\\bcca\\b"),P("CBD stone","stone","นิ่ว","choledocho"))]})
 ),
 interp:"History taking: jaundice — แยก obstructive จาก hepatocellular/hemolytic ด้วยสีปัสสาวะ/อุจจาระ/คัน และหาสาเหตุมะเร็ง",
 summary:["ซัก jaundice: ระยะเวลา, สีปัสสาวะ, สีอุจจาระ, คัน → อาการร่วม (ปวดท้อง ไข้ น้ำหนักลด) → ปัจจัยเสี่ยง (ดิบ, ยา/สมุนไพร, alcohol, viral)","Painless progressive obstructive jaundice + น้ำหนักลด = periampullary CA","Ix: U/S → CT/MRCP, CA 19-9"]}),

/* ===== สถานี 3 ===== */
Co({page:2,orig:"3",topic:"micro",sub:"PBS",title:"Fatigue and gum bleeding for 3 weeks — blood smear",seen:"คล้าย SI133 Ro403–404 ข้อ 1 (เลือดออกขณะแปรงฟัน — สเมียร์ pancytopenia)",
 stem:`A patient presents with fatigue and gum bleeding for 3 weeks. There is no fever and no jaundice. A peripheral blood smear is shown.<br>1. Describe the blood smear.<br>2. What is the most likely diagnosis?<br>3. What investigations would you send?`,
 gray:"3. PBS · อ่อนเพลีย ⊖ไข้ ⊕เลือดออกตามไรฟัน 3 wk. ⊖เหลือง · - NCNC RBC - decreased WBC, L predominate - decreased plt · # Aplastic anemia · # ส่ง Lab : Bone marrow study, retic. count, LFT, Flow cytometry",
 flag:NOIMG+" · ไฟล์ไม่บอกอายุ/เพศ",
 notes:"คำตอบผู้จด: RBC NCNC, WBC ลดลง lymphocyte เด่น, platelet ลดลง → Aplastic anemia · ส่ง bone marrow study, reticulocyte count, LFT, flow cytometry · เทียบ OSCE_REF (Key PBS: Aplastic anemia) ตรงกัน",
 parts:S(
  B("3.1 Describe the blood smear.",5,{tags:["micro"],
   ans:"<b>RBC:</b> normochromic normocytic, <b>ไม่มี anisocytosis/poikilocytosis, ไม่มี polychromasia</b> · <b>WBC:</b> จำนวน<b>ลดลง</b>, <b>lymphocyte predominate</b> (relative lymphocytosis), ไม่พบ blast หรือเซลล์ผิดปกติ · <b>Platelet:</b> <b>ลดลง</b> (&lt; 5/OF), ติดสีปกติ",
   exp:"Key PBS (OSCE_REF): lymphocyte เด่นกว่า neutrophil แต่จำนวน lymphocyte รวมไม่เพิ่ม · ต้องมองหาเซลล์ผิดปกติเพื่อแยกโรคอื่น: blast, dysplastic myeloid cells, hairy lymphocytes · ไม่มี polychromasia = ไขกระดูกไม่ตอบสนอง",
   rubric:"ได้เต็ม = บรรยายครบ 3 lineage ตามลำดับ RBC → WBC → platelet",
   pts:[H("RBC",30),CR(P("Normochromic normocytic RBC","ncnc","normochrom","normocyt")),P("No anisopoikilocytosis, no polychromasia","no aniso","no poikilo","no polychrom","ไม่มี polychrom","ไม่มี aniso"),
    H("WBC",40),CR(P("Decreased WBC","decreas\\w* (wbc|white|in number)","leukopenia","wbc ?(ลด|ต่ำ)","เม็ดเลือดขาว(ลด|ต่ำ)")),P("Lymphocyte predominate (relative lymphocytosis)","lymphocyte predom","l predom","relative lymph","lymphocyte เด่น"),P("No blasts or abnormal cells","no blast","ไม่พบ blast","ไม่มี blast","abnormal cell"),
    H("Platelet",30),CR(P("Decreased platelets","decreas\\w* (plt|platelet)","thrombocytopenia","เกล็ดเลือด(ลด|ต่ำ)","plt ?(ลด|ต่ำ)"))]}),
  B("3.2 What is the most likely diagnosis?",2,{tags:["micro"],
   ans:"<b>Aplastic anemia</b> (pancytopenia, ไม่มี reticulocyte response, ไม่มี organomegaly/ไข้) · Ddx: hypoplastic MDS, aleukemic acute leukemia, PNH, megaloblastic anemia",
   exp:"สาเหตุ: idiopathic (immune-mediated, ส่วนใหญ่), ยา (chloramphenicol, carbamazepine ฯลฯ), สารเคมี (benzene), seronegative hepatitis, PNH, pregnancy",
   pts:[CR(P("Aplastic anemia","aplastic"))]}),
  B("3.3 What investigations would you send?",3,{tags:["micro"],
   ans:"<b>Bone marrow aspiration and biopsy</b> (hypocellular marrow &lt; 25%, ไม่มีเซลล์มะเร็ง/fibrosis) · <b>Reticulocyte count</b> (ต่ำ; ใช้จัดความรุนแรง) · <b>Flow cytometry</b> หา PNH clone (CD55/CD59, FLAER) · <b>LFT</b> + viral hepatitis serology (hepatitis-associated aplastic anemia) · B12/folate, anti-HIV, ประวัติยา/สารเคมี",
   exp:"Camitta criteria severe AA: marrow cellularity &lt; 25% + อย่างน้อย 2 ใน 3: ANC &lt; 0.5 × 10⁹/L, platelet &lt; 20 × 10⁹/L, absolute reticulocyte &lt; 20 × 10⁹/L (บางเกณฑ์ใช้ &lt; 60 × 10⁹/L) · very severe เมื่อ ANC &lt; 0.2 × 10⁹/L",
   rubric:"ไม่ส่ง bone marrow study = ขาดข้อสำคัญ",
   pts:[CR(P("Bone marrow aspiration and biopsy","bone marrow","\\bbm\\b","ไขกระดูก","marrow")),P("Reticulocyte count","retic"),P("Flow cytometry for PNH clone","flow","cd55","cd59","flaer","\\bpnh\\b"),P("LFT / viral hepatitis serology","\\blft\\b","liver function","hepatitis","ตับ")]})
 ),
 interp:"PBS: pancytopenia with relative lymphocytosis, no polychromasia → aplastic anemia → BM study",
 summary:["Aplastic anemia: NCNC RBC ไม่มี polychromasia + WBC ต่ำ lymphocyte เด่น + platelet ต่ำ","ต้องหา blast/dysplasia/hairy cell เพื่อแยกโรค","Ix: BM aspiration + biopsy, retic count, flow cytometry (PNH), LFT/viral hepatitis"]}),

/* ===== สถานี 4 ===== */
Co({page:3,orig:"4",topic:"hx",sub:"Joint pain",ex:1,title:"History taking — left ankle pain for 4 days",seen:"SI133 Ro407–408 OSCE 4 (ปวดข้อเท้าซ้าย 4 วัน → acute gouty arthritis)",
 stem:`A 40-year-old man presents with left ankle pain for 4 days. Take a focused history, then give your most likely diagnosis.`,
 gray:"4. Hx taking · 40 y. ปวดข้อเท้าซ้าย 4 d. · - บวมแดงร้อน - ปวดที่อื่น - ไข้ - เคยเป็นมาก่อน? - เป็นเท่าไร - ถี่แค่ไหน - ตอนหายหายเลยมั้ย? - ใช้ยาอะไรบ้าง · (คอลัมน์ขวา) - Precipitated factor - alcohol, เครื่องในสัตว์ - เรื่อง...(อ่านไม่ชัด) - U/D : HT, DM, DLP, Obesity, kidney - Fam.hx : Gout · # Acute gouty arthritis of Lt. ankle",
 flag:"⚠ บทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด · ไฟล์ให้อายุ 40 ปี แต่ไม่บอกเพศ (Claude ใส่ชาย)",
 notes:"ผู้จดเขียนรายการคำถาม (gray) · \"เป็นเท่าไร\" น่าจะหมายถึงแต่ละครั้งเป็นนานเท่าไร (?) · \"ตอนหายหายเลยมั้ย?\" = ระหว่างครั้งหายสนิทหรือไม่ · บรรทัดขีดเส้นใต้ในคอลัมน์ขวาใต้ precipitating factor อ่านไม่ชัด (อาจเป็น \"เรื่องยา\" (?)) · คำวินิจฉัยผู้จด: Acute gouty arthritis of Lt. ankle",
 sp:"ชาย 40 ปี ปวดข้อเท้าซ้าย 4 วัน เริ่มปวดทันทีตอนตีสาม ปวดมากจนผ้าห่มโดนไม่ได้ · ข้อเท้าบวม แดง ร้อน · ไม่ปวดข้ออื่น · ไข้ต่ำ ๆ ไม่หนาวสั่น · ไม่มีแผล ไม่ได้ล้ม ไม่มีอุบัติเหตุ · ก่อนปวด 1 วันไปงานเลี้ยง ดื่มเบียร์มาก กินเครื่องในหมู · เคยปวดบวมแดงที่โคนนิ้วโป้งเท้าซ้าย 2 ครั้งใน 1 ปี ครั้งละ 5–7 วัน หายเองสนิท ระหว่างครั้งไม่ปวดเลย · ซื้อยาแก้ปวดกินเอง (ไม่ทราบชื่อ) ดีขึ้นเล็กน้อย · โรคประจำตัว: ความดันสูง กินยาขับปัสสาวะ (hydrochlorothiazide) และไขมันสูง, อ้วน (BMI 31) · ไม่เป็นเบาหวาน ไม่เคยเป็นโรคไต/นิ่ว · พ่อเป็นเกาต์ · ไม่มีเพศสัมพันธ์เสี่ยง ไม่มีปัสสาวะแสบขัด/ตาแดง/ท้องเสียก่อนหน้า",
 parts:S(
  B("4.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>Characterize arthritis:</b> onset (เฉียบพลัน ปวดมากสุดใน 24 ชม.), <b>บวมแดงร้อน</b>, จำนวน/ตำแหน่งข้อ (<b>ปวดที่อื่น</b>), <b>ไข้</b> (แยก septic arthritis) · <b>ประวัติเดิม:</b> <b>เคยเป็นมาก่อน</b>ไหม แต่ละครั้งนานเท่าไร <b>ถี่แค่ไหน</b> <b>ระหว่างครั้งหายสนิท</b>ไหม (intercritical period), tophi · <b>Precipitating factors:</b> <b>alcohol</b> (เบียร์), <b>เครื่องในสัตว์</b>/อาหารทะเล, อดอาหาร, ผ่าตัด/เจ็บป่วยเฉียบพลัน, trauma · <b>ยา:</b> ยาที่ใช้รักษาเอง และยาที่เพิ่ม urate (<b>thiazide/loop diuretics</b>, low-dose aspirin, cyclosporine, pyrazinamide) · <b>Comorbidity:</b> <b>HT, DM, DLP, obesity, CKD</b>, นิ่วไต · <b>Family history of gout</b> · แยก septic/reactive: แผล, ฉีดยา, เพศสัมพันธ์เสี่ยง, ปัสสาวะแสบขัด/ท้องเสีย",
   exp:"Acute monoarthritis ต้องแยก <b>septic arthritis</b> เสมอ (ไข้ หนาวสั่น แผล ภูมิคุ้มกันต่ำ) — ยืนยันด้วย arthrocentesis: monosodium urate crystal (needle-shaped, strongly negative birefringence) + Gram stain/culture",
   rubric:"ได้เต็ม = ลักษณะข้ออักเสบ + ประวัติเป็นซ้ำ/intercritical + precipitating factor + ยา + โรคร่วม + family history · ไม่ถามไข้/แยก septic หักคะแนน",
   pts:[H("ลักษณะข้ออักเสบ",30),P("Onset and swelling, redness, warmth","บวม","แดง","ร้อน","swell","red","warm","onset","ทันที"),P("Other joints involved","ข้ออื่น","ที่อื่น","other joint","กี่ข้อ"),CR(P("Fever (exclude septic arthritis)","ไข้","fever","หนาวสั่น","septic")),
    H("ประวัติเป็นซ้ำ",25),P("Previous attacks, duration and frequency","เคยเป็น","previous","ถี่","กี่ครั้ง","frequen","นานเท่าไร"),P("Complete resolution between attacks","หายสนิท","หายเลย","intercritical","ระหว่างครั้ง"),
    H("ปัจจัยเสี่ยง",45),CR(P("Precipitating factors: alcohol, offal/purine-rich food","alcohol","เหล้า","เบียร์","beer","เครื่องใน","purine","อาหารทะเล","precipitat")),P("Drug history (diuretics, aspirin, self-medication)","ยา(แก้|สมุนไพร|ที่|อะไร|ประจำ|ใหม่|ขับ|ชุด|ลด|ต้ม)","(กิน|ใช้|ประวัติ|ซื้อ)ยา","drug","diuretic","ขับปัสสาวะ","thiazide","aspirin"),P("Comorbidity: HT, DM, DLP, obesity, kidney disease","\\bht\\b","ความดัน","\\bdm\\b","เบาหวาน","\\bdlp\\b","ไขมัน","obes","อ้วน","kidney","\\bckd\\b","ไต"),P("Family history of gout","family","fam\\.? ?hx","ครอบครัว","พ่อ","แม่")]}),
  B("4.2 What is your most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>Acute gouty arthritis of the left ankle</b> (recurrent acute monoarthritis, podagra เดิม, precipitated by alcohol/purine, ใช้ thiazide, metabolic syndrome, family history) · Ddx: <b>septic arthritis</b>, CPPD (pseudogout), reactive arthritis",
   exp:"ACR/EULAR 2015 gout classification: เคยปวดบวมข้อส่วนปลาย, ลักษณะ episode (ปวดสุด &lt; 24 ชม., หายใน ≤ 14 วัน, หายสนิทระหว่างครั้ง), serum urate สูง · ระยะเฉียบพลันรักษาด้วย colchicine/NSAID/corticosteroid ภายใน 24 ชม. แรก · ไม่หยุด/ไม่เริ่ม allopurinol ระหว่าง attack ตามแนวเดิม (ACR 2020 อนุญาตให้เริ่มระหว่าง attack ได้) · พิจารณาเปลี่ยน thiazide เป็น losartan",
   rubric:"ตอบ gout โดยไม่ระบุ acute/ข้อเท้าซ้าย ได้คะแนนเกือบเต็ม · ไม่เอ่ยถึง septic arthritis เป็น ddx หักเล็กน้อย",
   pts:[CR(P("Acute gouty arthritis","gout","เกาต์")),P("Left ankle (monoarthritis)","ankle","ข้อเท้า","mono"),P("Differential: septic arthritis / CPPD","septic","cppd","pseudogout")]})
 ),
 interp:"History taking: acute monoarthritis — ซักลักษณะ episode, precipitating factors, ยา, metabolic comorbidity, family history และแยก septic arthritis",
 summary:["Acute monoarthritis: ไข้/แผล → แยก septic arthritis ก่อนเสมอ","Gout: เป็นซ้ำ หายสนิทระหว่างครั้ง + alcohol/เครื่องใน + thiazide + HT/DLP/obesity/CKD + family history","ยืนยัน: arthrocentesis หา MSU crystal (needle, negative birefringence)"]}),

/* ===== สถานี 5 ===== */
Co({page:3,orig:"5",topic:"pe",sub:"Chest",ex:1,title:"Physical examination — respiratory system",
 stem:`Perform a complete examination of the respiratory system on this patient and report your findings.`,
 gray:"5. PE : RS · - ดู : ก.หายใจ, chest, Accessory muscle? · - คลำ : trachea, chest expansion, vocal fremitus · - เคาะ : Percussion · - ฟัง : · # normal",
 flag:"บทผู้ป่วย (sp) Claude แต่ง — ไฟล์ไม่บอกอาการนำ บอกเพียงผลตรวจปกติ (# normal)",
 notes:"ผู้จดเขียนลำดับ ดู-คลำ-เคาะ-ฟัง และผลตรวจ # normal · \"ก.หายใจ\" อ่านว่า \"การหายใจ\" (?)",
 sp:"อาสาสมัครสุขภาพดี ตรวจทุกอย่างปกติ: RR 16/min, หายใจไม่ใช้ accessory muscle, chest shape ปกติ ไม่มีแผลเป็น · trachea อยู่กลาง · chest expansion เท่ากันสองข้าง · vocal/tactile fremitus เท่ากัน · เคาะ resonance ทุกตำแหน่ง · ฟัง vesicular breath sound เท่ากัน ไม่มี adventitious sound · ผู้คุมดูว่าผู้สอบตรวจทั้งด้านหน้าและด้านหลัง เปรียบเทียบซ้าย-ขวา",
 parts:S(
  B("5.1 Perform the respiratory examination (type what you do, in order).",7,{tags:["pe"],
   ans:"<b>เตรียม:</b> แนะนำตัว ขออนุญาต ล้างมือ จัดท่านั่ง/45° เปิดเผยหน้าอก · <b>ดู:</b> <b>การหายใจ</b> (RR, pattern), <b>accessory muscle</b>, รูปร่าง<b>ทรวงอก</b> (barrel, deformity), แผลเป็น, การเคลื่อนไหวของทรวงอก, clubbing/cyanosis · <b>คลำ:</b> <b>trachea</b> (ตำแหน่ง), <b>chest expansion</b> (หน้า-หลัง), <b>vocal/tactile fremitus</b> · <b>เคาะ:</b> เปรียบเทียบซ้าย-ขวาทุกระดับ ทั้งหน้า ข้าง หลัง (รวม apex) · <b>ฟัง:</b> breath sound (vesicular/bronchial), adventitious sounds (crepitation, wheeze, rhonchi, pleural rub), <b>vocal resonance</b> · ตรวจทั้งด้านหน้าและหลัง เทียบซ้าย-ขวาเสมอ",
   exp:"ลำดับมาตรฐาน: inspection → palpation → percussion → auscultation · ผล: consolidation = fremitus ↑ dull bronchial BS · effusion = fremitus ↓ stony dull BS ↓ · pneumothorax = fremitus ↓ hyperresonance BS ↓",
   rubric:"ข้ามขั้นใดขั้นหนึ่งใน ดู-คลำ-เคาะ-ฟัง หรือไม่เทียบซ้าย-ขวา หักคะแนน",
   pts:[H("เตรียม",10),P("Introduce, consent, hand hygiene, positioning and exposure","แนะนำ","introduc","ขออนุญาต","ล้างมือ","expos","จัดท่า"),
    H("ดู",25),P("Respiratory rate and pattern","rr\\b","respiratory rate","อัตราการหายใจ","การหายใจ","pattern"),P("Accessory muscle use","accessory"),P("Chest shape, deformity, scars","chest","ทรวงอก","deformit","barrel","แผล","scar"),
    H("คลำ",25),CR(P("Trachea position","trachea","หลอดลม")),P("Chest expansion","expansion","การขยาย"),P("Vocal/tactile fremitus","fremitus"),
    H("เคาะ",15),CR(P("Percussion comparing both sides","percuss","เคาะ")),
    H("ฟัง",25),CR(P("Breath sounds and adventitious sounds","breath sound","auscult","ฟัง","crepitat","wheez","rhonchi","adventitious")),P("Vocal resonance","vocal resonance","resonance")]}),
  B("5.2 Report your findings.",2,{tags:["pe"],
   ans:"<b>Normal respiratory examination</b>: RR ปกติ ไม่ใช้ accessory muscle, trachea อยู่กลาง, chest expansion และ vocal fremitus เท่ากันสองข้าง, เคาะ resonance ทุกตำแหน่ง, vesicular breath sound เท่ากัน ไม่มี adventitious sound",
   exp:"รายงานให้ครบตามลำดับที่ตรวจ แม้ผลปกติ",
   pts:[CR(P("Normal respiratory examination","normal","ปกติ")),P("Report findings in order (trachea, expansion, percussion, breath sounds)","trachea","resonan","vesicular","expansion")]})
 ),
 interp:"PE station: ตรวจระบบหายใจครบ ดู-คลำ-เคาะ-ฟัง และรายงานผลปกติ",
 summary:["ดู: RR, accessory muscle, รูปทรวงอก · คลำ: trachea, chest expansion, vocal fremitus","เคาะ + ฟัง (breath sound, added sound, vocal resonance) เทียบซ้าย-ขวา หน้า-หลัง","รายงานตามลำดับ แม้ผลปกติ"]}),

/* ===== สถานี 6 ===== */
Co({page:3,orig:"6",topic:"pe",sub:"Pulse/BP",ex:1,title:"Physical examination — hypertension in a 35-year-old",seen:"SI133 Ro405–406 ข้อ 3 (HT 35 ปี — BP แขนสองข้าง, peripheral pulse, bruit) และคล้าย SI132 Ro403–404 ข้อ 22",
 stem:`A 35-year-old man has hypertension. Perform the relevant cardiovascular examination and report your findings.`,
 gray:"6. PE : CVS · 35 y.o. HT → วัด BP 4 extremities, Peripheral pulses, Vascular bruit : carotid, abdominal, Precordium",
 flag:"⚠ บทผู้ป่วย (sp) และผลตรวจ Claude แต่ง (coarctation of aorta) — ไฟล์ไม่บอกผลตรวจ/การวินิจฉัย · 6.2 "+ADD,
 notes:"ผู้จดเขียนสิ่งที่ต้องตรวจ 4 อย่าง: วัด BP 4 extremities, peripheral pulses, vascular bruit (carotid, abdominal), precordium · ไม่มีคำวินิจฉัยในไฟล์ (โจทย์ HT in the young → หา secondary HT)",
 sp:"ชาย 35 ปี พบความดันสูงตอนตรวจสุขภาพ · ผลเมื่อผู้สอบตรวจ (ผู้คุมบอก): BP แขนขวา 172/96, แขนซ้าย 168/94, ขาขวา 128/80, ขาซ้าย 126/78 mmHg · radial pulse แรงสม่ำเสมอ · femoral pulse เบา และมี <b>radio-femoral delay</b> · ไม่มี carotid bruit · ไม่มี abdominal/renal bruit · precordium: apex beat ตำแหน่งปกติ heaving เล็กน้อย, ejection systolic murmur grade 2/6 ที่ left infraclavicular และได้ยินที่หลังระหว่างสะบัก",
 parts:S(
  B("6.1 Perform the relevant cardiovascular examination (type what you do).",6,{tags:["pe"],
   ans:"แนะนำตัว ขออนุญาต · <b>วัด BP ทั้ง 4 extremities</b> (แขน 2 ข้าง + ขา 2 ข้าง) · <b>Peripheral pulses</b> ทุกตำแหน่ง: radial, brachial, carotid, femoral, popliteal, dorsalis pedis/posterior tibial เทียบซ้าย-ขวา + <b>radio-femoral delay</b> · <b>Vascular bruit</b>: <b>carotid</b>, <b>abdominal/renal</b> (เหนือสะดือ 2–3 cm ข้างละ) และ femoral · <b>Precordium</b>: apex beat (LVH), heave/thrill, ฟังเสียงหัวใจและ murmur (รวมที่หลัง) · เสริม: fundoscopy (hypertensive retinopathy), ลักษณะ Cushingoid/thyroid, คลำไต (polycystic kidney)",
   exp:"HT in the young (&lt; 40 ปี) ต้องหา secondary HT · ขา < แขน (ปกติ ขาสูงกว่าแขน 10–20 mmHg) + radio-femoral delay = coarctation · renal bruit = renovascular HT (FMD ในหญิงอายุน้อย)",
   rubric:"ได้เต็ม = ครบ 4 อย่างที่ผู้จดเขียน (BP 4 extremities, pulses, bruit, precordium) · ไม่วัด BP ขา/ไม่ดู radio-femoral delay = ขาดข้อสำคัญ",
   pts:[CR(P("BP in all 4 extremities","4 extrem","four (limbs|extrem)","แขนขา","ขา","\\bleg","4 ข้าง","ทั้งสี่")),CR(P("All peripheral pulses with radio-femoral delay","radio.?femoral","femoral","peripheral pulse","ชีพจร","pulse")),P("Bruits: carotid and abdominal/renal","bruit","carotid","renal","abdominal"),P("Precordium: apex, heave, murmur","precord","apex","murmur","heave","ฟังหัวใจ","หัวใจ"),P("Fundoscopy / features of endocrine causes","fundus","fundoscop","retinopath","cushing","thyroid")]}),
  B("6.2 Report your findings and give the most likely diagnosis and differential diagnosis.",4,{tags:["pe"],flag:ADD,
   ans:"BP แขน 2 ข้างสูงใกล้กัน แต่<b>ขาต่ำกว่าแขน</b> · femoral pulse เบา + <b>radio-femoral delay</b> · systolic murmur ที่ left infraclavicular/หลัง → <b>Coarctation of the aorta</b> · Ddx secondary HT: <b>renovascular HT</b> (fibromuscular dysplasia), renal parenchymal disease, primary aldosteronism, pheochromocytoma, Cushing syndrome, hyperthyroidism, OSA",
   exp:"Ix: echocardiography, CT/MR angiography of aorta · ทั่วไปใน HT in the young: Cr/UA, K⁺, aldosterone/renin ratio, TSH, renal artery imaging ตามข้อบ่งชี้",
   pts:[P("Leg BP lower than arm, radio-femoral delay","ขา(ต่ำ|น้อย)","lower","delay","femoral"),CR(P("Coarctation of the aorta","coarct")),G("Other causes of secondary HT (≥ 2)",2,P("Renovascular HT","renovasc","renal artery","fibromuscular","\\bfmd\\b"),P("Renal parenchymal disease","renal parenchym","\\bckd\\b","glomerul","polycystic"),P("Primary aldosteronism","aldosteron","conn"),P("Pheochromocytoma","pheochromo"),P("Cushing syndrome","cushing"),P("Hyperthyroidism","thyro"))]})
 ),
 interp:"PE station: HT in the young — ตรวจหา secondary HT (BP 4 extremities, pulses, bruit, precordium)",
 summary:["HT &lt; 40 ปี: หา secondary HT เสมอ","ตรวจ BP 4 extremities + pulses + radio-femoral delay + carotid/renal bruit + precordium","ขา < แขน + radio-femoral delay = coarctation; renal bruit = renovascular HT"]}),

/* ===== สถานี 7 ===== */
Co({page:3,orig:"7",topic:"img",sub:"CXR",title:"Chest radiograph — describe and diagnose",
 stem:`A chest radiograph (PA upright) is shown.<br>1. Describe the abnormal findings.<br>2. What is the diagnosis?`,
 gray:"7. CXR · visible visceral pleural line · absent peripheral lung marking · air fluid level · trachea shift · # Left",
 flag:NOIMG+" · คำวินิจฉัยในไฟล์เขียนแค่ \"# Left\" — Claude ตีความเป็น left hydropneumothorax (visceral pleural line + air-fluid level) · ทิศทาง trachea shift ไฟล์ไม่บอก",
 notes:"คำตอบผู้จด: visible visceral pleural line, absent peripheral lung marking, air fluid level, trachea shift · # Left (ไม่ได้เขียนชื่อโรคต่อ)",
 parts:S(
  B("7.1 Describe the abnormal findings.",4,{tags:["img"],
   ans:"Left hemithorax: <b>visible visceral pleural line</b> · <b>absent lung markings peripheral to the pleural line</b> (hyperlucent) · <b>air-fluid level</b> ในช่องเยื่อหุ้มปอด (เส้นระดับตรงแนวนอน) · <b>trachea/mediastinum shift</b> ไปทางขวา (ด้านตรงข้าม) · ปอดซ้ายแฟบเข้าหา hilum",
   exp:"Air-fluid level ในช่องเยื่อหุ้มปอดเห็นได้ในฟิล์มท่ายืน = มีทั้งลมและน้ำ (hydropneumothorax) · effusion อย่างเดียวจะเป็น meniscus ไม่ใช่เส้นตรง",
   rubric:"ได้เต็ม = pleural line + absent lung marking + air-fluid level + mediastinal shift + ระบุข้าง",
   pts:[CR(P("Visible visceral pleural line","pleural line","visceral")),CR(P("Absent peripheral lung markings","absent","lung marking","no lung marking","hyperlucen")),CR(P("Air-fluid level","air.?fluid","fluid level")),P("Tracheal/mediastinal shift","shift","trachea","mediastin"),P("Left side","\\bleft\\b","\\blt\\b","ซ้าย")]}),
  B("7.2 What is the diagnosis?",3,{tags:["img"],
   ans:"<b>Left hydropneumothorax</b> with mediastinal shift to the right (ประเมิน <b>tension physiology</b> ทางคลินิก: hypotension, hypoxemia, distended neck veins)",
   exp:"สาเหตุ: trauma (hemopneumothorax), bronchopleural fistula, ruptured lung abscess/empyema (pyopneumothorax), TB, หลัง thoracentesis · รักษา: <b>intercostal chest drain</b> (ใช้ tube ขนาดใหญ่ถ้ามีเลือด/หนอง) · tension → needle decompression ทันทีแล้วใส่ ICD (ATLS 10th: 4th–5th ICS anterior to mid-axillary line ในผู้ใหญ่)",
   rubric:"ตอบ pneumothorax อย่างเดียวไม่มีน้ำ = บางส่วน · ระบุข้างผิด = หักคะแนน",
   pts:[CR(P("Hydropneumothorax","hydropneumo","hydro.?pneumo","pneumothorax","hemopneumo","pyopneumo")),P("Left side","\\bleft\\b","\\blt\\b","ซ้าย"),P("Assess for tension / intercostal drainage","tension","\\bicd\\b","chest drain","intercostal","needle")]})
 ),
 interp:"CXR: pleural line + absent lung marking + air-fluid level + mediastinal shift → left hydropneumothorax",
 summary:["Pneumothorax: visceral pleural line + ไม่มี lung marking ด้านนอก","มี air-fluid level ตรงแนวนอน = hydropneumothorax","Mediastinal shift ไปด้านตรงข้าม → ประเมิน tension, ใส่ ICD"]}),

/* ===== สถานี 8 ===== */
Co({page:4,orig:"8",topic:"micro",sub:"UA",title:"Edema and high blood pressure — urine sediment",seen:"คล้าย SI133 Ro405–406 ข้อ 9 และ SI133 Ro403–404 ข้อ 8 (UA ในผู้ป่วยบวม/ความดันสูง) — คนละโจทย์",
 stem:`A patient presents with edema and high blood pressure. A urine sediment is examined under the microscope.<br>1. Describe the findings you expect to see.<br>2. What is the most likely diagnosis?`,
 gray:"8. ทบวม(?), BP↑ ดู UA",
 flag:NOIMG+" · ⚠ ไฟล์จดแค่โจทย์ ไม่มีคำตอบ — Claude เฉลยเป็น nephritic sediment (RBC cast, dysmorphic RBC) ซึ่งเข้ากับบวม + ความดันสูงที่สุด",
 notes:"ไฟล์จดเพียง \"ทบวม(?), BP↑ ดู UA\" — ไม่มีคำตอบของผู้จด · คำแรกลายมืออ่านคล้าย \"ทบวม\" น่าจะเป็น \"ตาบวม\" หรือ \"ขาบวม\" (?) จึงเขียนในโจทย์ว่า edema",
 parts:S(
  B("8.1 Describe the findings you expect to see.",4,{tags:["micro"],
   ans:"<b>RBC cast</b> (cast ที่มีเม็ดเลือดแดงฝังอยู่) · <b>dysmorphic RBC</b> (acanthocyte/G1 cell) จำนวนมาก · ± granular cast, WBC เล็กน้อย · (ถ้าเป็น nephrotic จะเห็น <b>oval fat body</b>, fatty cast, Maltese cross ใต้ polarized light)",
   exp:"RBC cast = เลือดมาจาก glomerulus (glomerulonephritis) · dysmorphic RBC > 40% หรือ acanthocyte > 5% บ่งชี้ glomerular hematuria",
   rubric:"ตอบตามรูปที่ได้จริง · ถ้าไม่มีรูป: RBC cast + dysmorphic RBC = เต็ม; ตอบ oval fat body/fatty cast (nephrotic) = บางส่วน",
   pts:[CR(P("RBC cast","rbc cast","red (blood )?cell cast")),P("Dysmorphic RBC / acanthocytes","dysmorph","acanthocyt"),P("Granular cast / oval fat body (alternative)","granular","oval fat","fatty cast","maltese")]}),
  B("8.2 What is the most likely diagnosis?",3,{tags:["micro"],
   ans:"<b>Acute glomerulonephritis (nephritic syndrome)</b> — ในผู้ป่วยอายุน้อยที่เจ็บคอ/ผิวหนังติดเชื้อนำมา 1–3 สัปดาห์ นึกถึง <b>post-streptococcal GN</b> · Ddx: IgA nephropathy, lupus nephritis, RPGN (ANCA, anti-GBM)",
   exp:"Nephritic: hematuria (RBC cast), HT, edema, oliguria, AKI, proteinuria &lt; 3.5 g/day · Ix: Cr, UPCR, C3/C4, ASO/anti-DNase B, ANA/anti-dsDNA, ANCA, ± renal biopsy",
   pts:[CR(P("Glomerulonephritis / nephritic syndrome","glomerulonephritis","\\bgn\\b","nephritic")),P("Post-streptococcal GN or other cause","psgn","post.?strep","iga","lupus","rpgn","anca")]})
 ),
 interp:"Microscope UA: edema + HT → nephritic sediment (RBC cast, dysmorphic RBC) → glomerulonephritis",
 summary:["RBC cast = glomerular bleeding → glomerulonephritis","Nephritic: hematuria + HT + edema + oliguria; nephrotic: proteinuria ≥ 3.5 g + oval fat body","Ix: C3/C4, ASO, ANA, ANCA, UPCR ± biopsy"]}),

/* ===== สถานี 9 ===== */
Co({page:4,orig:"9",topic:"pe",sub:"Neuro",ex:1,title:"Physical examination — leg weakness",seen:"SI131 Ro417–420 ข้อ 15 และ SI133 Ro403–404 ข้อ 6 (motor lower extremities → proximal muscle weakness)",
 stem:`A patient presents with weakness of both legs. Perform the motor examination of the lower extremities and report your findings.`,
 gray:"9. PE : weakness · ดู : ถลกขากางเกงขึ้น · muscle tone · Power - hip - knee - ankle - Toe · # Proximal muscle weakness",
 flag:"บทผู้ป่วย (sp) และเกรดกำลังกล้ามเนื้อ Claude แต่งให้ตรงกับคำตอบผู้จด · ส่วน ddx ใน 9.2 Claude เติม",
 notes:"ผู้จดเขียนขั้นตอน: ดู (ถลกขากางเกงขึ้น), muscle tone, power ทีละข้อ hip–knee–ankle–toe · ผล # Proximal muscle weakness · ไม่ได้เขียน reflex/plantar (Claude เติมใน checklist)",
 sp:"ผู้ป่วยจำลอง หญิง 40 ปี ลุกจากเก้าอี้และขึ้นบันไดลำบาก 2 เดือน · ผลเมื่อผู้สอบตรวจ (ผู้คุมบอก): ไม่มีกล้ามเนื้อลีบ ไม่มี fasciculation · tone ปกติ · power: hip flexion/extension/abduction/adduction 3/5 ทั้งสองข้าง, knee flexion/extension 4/5, ankle dorsiflexion/plantarflexion 5/5, toe 5/5 · DTR 2+ เท่ากัน · plantar response flexor · sensation ปกติ",
 parts:S(
  B("9.1 Perform the motor examination of the lower extremities (type what you do, in order).",7,{tags:["pe"],
   ans:"แนะนำตัว ขออนุญาต ล้างมือ · <b>เปิดขาให้เห็น</b> (ถลกขากางเกงขึ้น) · <b>Inspection</b>: muscle bulk/atrophy, fasciculation, deformity, เทียบสองข้าง · <b>Tone</b>: roll ขา, lift ใต้เข่า (hypotonia/spasticity/rigidity), ankle clonus · <b>Power</b> ทีละข้อ เทียบซ้าย-ขวาและ proximal vs distal: <b>hip</b> (flexion, extension, abduction, adduction) → <b>knee</b> (flexion, extension) → <b>ankle</b> (dorsiflexion, plantarflexion) → <b>toe</b> (extension/flexion) ให้เกรด MRC 0–5 · <b>Reflexes</b>: knee, ankle jerk · <b>Plantar response</b> (Babinski) · ± functional test (ลุกจากเก้าอี้, squat)",
   exp:"แยก UMN (spasticity, hyperreflexia, Babinski) vs LMN (atrophy, fasciculation, hyporeflexia) vs myopathy (proximal weakness, reflex ปกติ/ลดเล็กน้อย, ไม่มี fasciculation) vs NMJ (fatigability)",
   rubric:"ได้เต็ม = inspection + tone + power ทุกข้อ (hip/knee/ankle/toe) เทียบสองข้าง + reflex + plantar · ตรวจ power ไม่ครบ proximal–distal = ขาดข้อสำคัญ",
   pts:[H("เตรียม/ดู",20),P("Introduce, consent, expose the legs","แนะนำ","ขออนุญาต","expos","ถลก","เปิดขา"),P("Inspect bulk, atrophy, fasciculation","atroph","ลีบ","fascicul","bulk","inspect"),
    H("Tone",15),P("Muscle tone (roll, lift, clonus)","tone","clonus"),
    H("Power",45),CR(P("Power at hip (proximal)","hip","สะโพก")),P("Power at knee","knee","เข่า"),CR(P("Power at ankle and toe (distal)","ankle","ข้อเท้า","toe","นิ้วเท้า")),P("Grade MRC 0–5 and compare both sides","grade","เกรด","mrc","[0-5]/5","เทียบ","both side"),
    H("Reflex",20),P("Deep tendon reflexes (knee, ankle)","reflex","jerk","\\bdtr\\b"),P("Plantar response","plantar","babinski")]}),
  B("9.2 Report your findings and give your differential diagnosis.",3,{tags:["pe"],flag:ADD+" (ddx)",
   ans:"<b>Bilateral proximal muscle weakness</b> of the lower limbs (hip 3/5, knee 4/5, ankle/toe 5/5) with normal tone, reflexes and sensation, no atrophy/fasciculation → <b>myopathy</b> · Ddx: <b>inflammatory myopathy</b> (polymyositis/dermatomyositis), <b>endocrine</b> (hypo/hyperthyroidism, Cushing/steroid), <b>hypokalemia</b>, drug (statin), myasthenia gravis",
   exp:"Ix: CK, electrolytes (K⁺, Ca²⁺, Mg²⁺, PO₄), TSH, myositis antibody, EMG, muscle biopsy/MRI",
   pts:[CR(P("Proximal muscle weakness","proximal")),P("Bilateral, normal tone/reflex/sensation","bilateral","both","สองข้าง","normal reflex","reflex ปกติ"),G("Differential diagnosis (≥ 2)",2,P("Inflammatory myopathy","myositis","inflammatory myopath"),P("Thyroid disease","thyro"),P("Cushing / steroid myopathy","cushing","steroid"),P("Hypokalemia","hypokal","potassium","โพแทสเซียม"),P("Myasthenia gravis","myasthen"))]})
 ),
 interp:"PE station: motor exam of lower limbs — inspection, tone, power hip→toe, reflex → proximal muscle weakness",
 summary:["ลำดับ: เปิดขา → ดู bulk/fasciculation → tone → power hip/knee/ankle/toe → reflex → plantar","Proximal > distal, reflex ปกติ, ไม่มี fasciculation = myopathy","Ddx: inflammatory myopathy, thyroid, Cushing/steroid, hypokalemia, MG"]}),

/* ===== สถานี 10 ===== */
Co({page:4,orig:"10",topic:"micro",sub:"Stool exam",title:"Stool examination — identify the parasite eggs",seen:"SI131 Ro417–420 ข้อ 1 (stool exam: Ascaris + hookworm → albendazole)",
 stem:`A stool specimen is examined under the microscope (wet preparation).<br>1. Identify the parasite(s).<br>2. What drug would you prescribe?`,
 gray:"10. ดู Stool exam · # Ascaris lumbricoides, Hookworm · # Albendazole",
 flag:NOIMG,
 notes:"คำตอบผู้จด: Ascaris lumbricoides, Hookworm · ยา Albendazole",
 parts:S(
  B("10.1 Identify the parasite(s).",4,{tags:["micro"],
   ans:"<b>Ascaris lumbricoides</b> egg: fertilized egg รูปไข่/กลม ~45–75 µm <b>เปลือกหนา ผิวขรุขระเป็นปุ่ม (mammillated)</b> สีน้ำตาลทอง · <b>Hookworm</b> egg: รูปไข่ ~60 × 40 µm <b>เปลือกบางใส เรียบ</b> ข้างในมี blastomere 4–8 เซลล์ มีช่องว่างใสระหว่างเปลือกกับเซลล์",
   exp:"Hookworm ในไทยส่วนใหญ่ <i>Necator americanus</i> (แยกชนิดจากไข่ไม่ได้) — ทำให้ iron deficiency anemia · Ascaris ทำให้ intestinal/biliary obstruction, Löffler syndrome",
   rubric:"บอกชื่อทั้งสองชนิด + ลักษณะไข่ = เต็ม",
   pts:[CR(P("Ascaris lumbricoides egg","ascaris","พยาธิไส้เดือน")),P("Thick mammillated shell","mammillat","ขรุขระ","ปุ่ม","thick"),CR(P("Hookworm egg","hookworm","necator","ancylostoma","พยาธิปากขอ")),P("Thin smooth shell with blastomeres","thin","บาง","blastomere","segment")]}),
  B("10.2 What drug would you prescribe?",2,{tags:["micro"],
   ans:"<b>Albendazole 400 mg รับประทานครั้งเดียว</b> (ครอบคลุมทั้ง Ascaris และ hookworm; hookworm อาจให้ 400 mg วันละครั้ง 3 วันเพื่อเพิ่ม cure rate) · ทางเลือก: mebendazole 100 mg วันละ 2 ครั้ง 3 วัน หรือ 500 mg ครั้งเดียว · ให้เหล็กถ้ามี IDA · ไม่ให้ในไตรมาสแรกของการตั้งครรภ์",
   exp:"สุขอนามัย: สวมรองเท้า (hookworm ไชผ่านผิวหนัง), ล้างมือ, ถ่ายในส้วม",
   pts:[CR(P("Albendazole","albendazole")),P("400 mg single dose","400")]})
 ),
 interp:"Microscope: stool — Ascaris (mammillated) + hookworm (thin shell, blastomeres) → albendazole",
 summary:["Ascaris: เปลือกหนาขรุขระสีน้ำตาล · Hookworm: เปลือกบางใสมี blastomere","Albendazole 400 mg ครั้งเดียว ครอบคลุมทั้งคู่","Hookworm → IDA: ให้เหล็กร่วม"]}),

/* ===== สถานี 11 ===== */
Co({page:4,orig:"11",topic:"micro",sub:"PBS",title:"Young man with fever and jaundice for 1 day — blood smear",
 stem:`A 22-year-old man presents with fever and jaundice for 1 day. There is no organomegaly. A peripheral blood smear is shown.<br>1. Describe the blood smear.<br>2. What is the most likely diagnosis?`,
 gray:"11. PBS 22 y. ♂ มีไข้ + เหลือง 1 d. ตรวจ ⊖ organomegaly · NCNC RBC · aniso, poikilo · Hb contracted cell · Ghost cell · Polychromasia · NRC · leukocytosis, N predominate · adequate plt. · # G6PD def + Acute hemolysis",
 flag:NOIMG,
 notes:"คำตอบผู้จดตรงกับ OSCE_REF (Key PBS: G6PD deficiency anemia) · OSCE_REF เพิ่ม Hb leakage cell, Howell-Jolly body, spherocyte, basophilic stippling",
 opinion:"ไฟล์ไม่ขัดกับ OSCE_REF · OSCE_REF เขียน \"Hb contracted cell (bite cell or eccentrocyte)\" แต่ตามตำรา bite cell กับ eccentrocyte (Hb contracted cell) เป็นคนละเซลล์ แม้พบร่วมกันใน oxidative hemolysis จึงแยกให้",
 parts:S(
  B("11.1 Describe the blood smear.",5,{tags:["micro"],
   ans:"<b>RBC:</b> normochromic normocytic, anisocytosis, poikilocytosis, <b>Hb contracted cell</b> (eccentrocyte: Hb รวมไปที่ขอบด้านหนึ่ง), <b>ghost cell</b> (Hb จางเห็นแต่ขอบ), Hb leakage cell, ± bite cell, <b>polychromasia</b>, <b>NRC</b> · <b>WBC:</b> <b>leukocytosis, neutrophil predominate</b> · <b>Platelet:</b> adequate",
   exp:"Hb contracted cell, ghost cell, Hb leakage cell = หลักฐาน oxidative intravascular hemolysis · leukocytosis จากการติดเชื้อที่กระตุ้น hemolysis",
   rubric:"ต้องมี Hb contracted cell และ/หรือ ghost cell จึงได้คะแนนส่วนหลัก",
   pts:[H("RBC",60),P("Normochromic normocytic, aniso-poikilocytosis","ncnc","normochrom","aniso","poikilo"),CR(P("Hb contracted cells (eccentrocytes)","contracted","eccentrocyt")),CR(P("Ghost cells","ghost")),P("Hb leakage cells / bite cells","leakage","bite"),P("Polychromasia and NRC","polychrom","\\bnrc\\b","nucleated red"),
    H("WBC",25),P("Leukocytosis, neutrophil predominate","leukocytosis","neutrophil predom","n predom","neutrophilia"),
    H("Platelet",15),P("Adequate platelets","adequate","normal (plt|platelet)","plt ?ปกติ","เกล็ดเลือดปกติ")]}),
  B("11.2 What is the most likely diagnosis?",3,{tags:["micro"],
   ans:"<b>G6PD deficiency with acute (oxidative) hemolysis</b> — กระตุ้นจาก<b>การติดเชื้อ</b> (มีไข้) หรือยา/สารออกซิไดซ์ (primaquine, dapsone, sulfonamide, nitrofurantoin, ถั่วปากอ้า)",
   exp:"X-linked → ชายเป็นมากกว่า · ตรวจ G6PD activity ระหว่าง acute hemolysis อาจได้ <b>false normal</b> (reticulocyte มี enzyme สูง) → ตรวจซ้ำหลัง 2–3 เดือน · รักษา: หยุดตัวกระตุ้น รักษาการติดเชื้อ ให้สารน้ำ (ป้องกัน AKI จาก hemoglobinuria) ให้เลือดถ้าซีดมาก",
   pts:[CR(P("G6PD deficiency","g6pd")),P("Acute (intravascular/oxidative) hemolysis","hemoly","haemoly","เม็ดเลือดแดงแตก"),P("Triggered by infection or oxidant drugs","infect","ติดเชื้อ","drug","ยา(แก้|สมุนไพร|ที่|อะไร|ประจำ|ใหม่|ขับ|ชุด|ลด|ต้ม)","(กิน|ใช้|ประวัติ|ซื้อ)ยา","fava","ถั่วปากอ้า")]})
 ),
 interp:"PBS: Hb contracted cell + ghost cell + polychromasia + NRC ในชายไข้+เหลือง → G6PD deficiency with acute hemolysis",
 summary:["G6PD: Hb contracted cell (eccentrocyte), ghost cell, Hb leakage cell, bite cell, polychromasia, NRC","WBC สูง neutrophil เด่นจากการติดเชื้อที่กระตุ้น","ตรวจ G6PD ช่วง hemolysis อาจ false normal — ตรวจซ้ำ 2–3 เดือน"]}),

/* ===== สถานี 12 ===== */
Co({page:5,orig:"12",topic:"img",sub:"CXR",title:"Chest radiograph — describe the findings and give the diagnosis",
 stem:`A chest radiograph is shown.<br>1. Describe the abnormal findings.<br>2. What is the most likely diagnosis?`,
 gray:"12. CXR · alveolar infiltration · ไม่เห็น Rt. dome of diaphragm · Blunt Rt. costophrenic angle · (ต้องมีคำว่า \"RLL\") · # Acute pneumonia ± Parapneumonic effusion",
 flag:NOIMG+" · ไฟล์ไม่บอกประวัติผู้ป่วย",
 notes:"คำตอบผู้จด: alveolar infiltration, ไม่เห็น Rt. dome of diaphragm, blunt Rt. costophrenic angle · ผู้จดย้ำว่าต้องมีคำว่า \"RLL\" · Dx acute pneumonia ± parapneumonic effusion",
 parts:S(
  B("12.1 Describe the abnormal findings.",4,{tags:["img"],
   ans:"<b>Alveolar infiltration</b> (ill-defined opacity ± air bronchogram) ที่ <b>right lower lobe (RLL)</b> · <b>ขอบ right hemidiaphragm หาย</b> (silhouette sign กับ diaphragm → lower lobe) · <b>Blunting of the right costophrenic angle</b> (pleural effusion) · ขอบหัวใจขวายังเห็นชัด (ไม่ใช่ RML)",
   exp:"Silhouette sign: right heart border หาย = RML · right hemidiaphragm หาย = RLL · ผู้จดย้ำต้องระบุ \"RLL\"",
   rubric:"ไม่ระบุตำแหน่ง RLL หักคะแนนมาก",
   pts:[CR(P("Alveolar infiltration","alveolar","infiltrat","consolidat","air bronchogram")),CR(P("Right lower lobe (RLL)","\\brll\\b","right lower lobe","rt\\.? lower lobe")),P("Loss of right hemidiaphragm silhouette","diaphragm","silhouette"),P("Blunted right costophrenic angle","costophrenic","\\bcpa\\b","blunt")]}),
  B("12.2 What is the most likely diagnosis?",3,{tags:["img"],
   ans:"<b>Right lower lobe pneumonia</b> (acute pneumonia) <b>± parapneumonic effusion</b>",
   exp:"Effusion ที่หนา ≥ 10 mm ในท่า lateral decubitus/ultrasound → thoracentesis (pH &lt; 7.2, glucose &lt; 60 mg/dL, pus หรือ Gram stain/culture บวก = complicated/empyema → ใส่ chest drain) · CAP: ประเมินความรุนแรงด้วย CURB-65",
   pts:[CR(P("Pneumonia","pneumonia","ปอดอักเสบ","ปอดบวม")),P("Right lower lobe","\\brll\\b","right lower","rt\\.? lower"),P("Parapneumonic effusion","parapneumonic","effusion","น้ำในช่องเยื่อหุ้มปอด")]})
 ),
 interp:"CXR: RLL alveolar infiltration + loss of right hemidiaphragm + blunted CPA → RLL pneumonia ± parapneumonic effusion",
 summary:["Right hemidiaphragm หาย = RLL; right heart border หาย = RML","Blunted CPA = pleural effusion → ตรวจขนาด/thoracentesis","ต้องระบุ lobe (RLL) ในคำตอบ"]}),

/* ===== สถานี 13 ===== */
Co({page:5,orig:"13",topic:"proc",sub:"Venipuncture",ex:1,proc:1,title:"Procedure — venipuncture",
 stem:`Demonstrate venous blood sampling (venipuncture) from the arm on the model. Say aloud each step you perform.`,
 gray:"13. Venipuncture · 1. ใส่ถุงมือ 2. Tourniquet 3. คลำ...(อ่านไม่ชัด) 4. Alcohol ชุบ+เช็ด 5. เข็ม...(สี?) เบอร์ 20→23 ได้หมด :) 6. Stabilize เส้น (มืออีกข้าง) 7. แทง+ดูด 8. ปลด tourniquet ก่อนปลดเข็ม 9. กด 10. ทิ้งเข็ม",
 flag:"บทผู้คุม (sp) Claude แต่ง · ขั้นตอนเตรียมก่อนทำ (identify ผู้ป่วย, อธิบาย, ล้างมือ) และหลังทำ (ใส่หลอด ติดฉลาก) Claude เติมตามมาตรฐาน",
 notes:"ผู้จดเขียน 10 ขั้น (ถอดใน gray) · ขั้น 3 อ่านคล้าย \"คลำนิดๆ\" น่าจะหมายถึงคลำหาเส้นเลือด (?) · ขั้น 5 คำหลัง \"เข็ม\" อ่านไม่ชัด (น่าจะเป็นสีของหัวเข็ม) — ใจความ: ใช้เข็มเบอร์ 20–23 ได้หมด",
 sp:"หุ่นแขนสำหรับเจาะเลือด + อุปกรณ์: ถุงมือ, tourniquet, สำลีชุบ alcohol 70%, เข็มเบอร์ 18/21/23 + syringe/vacutainer, หลอดเลือด, ก๊อซ, พลาสเตอร์, sharps box · ผู้คุมรับบทผู้ป่วยถ้าผู้สอบแนะนำตัว/ถามชื่อ · สังเกต: ปลด tourniquet ก่อนถอนเข็ม, ไม่สวมปลอกเข็มกลับ, ทิ้งเข็มลง sharps box",
 parts:S(
  B("13.1 Perform the venipuncture (say each step in order).",8,{tags:["proc"],
   ans:"<b>เตรียม:</b> แนะนำตัว <b>ยืนยันตัวผู้ป่วย</b> (ชื่อ-นามสกุล/HN) อธิบายและขออนุญาต · ล้างมือ เตรียมอุปกรณ์ · <b>สวมถุงมือ</b> · <b>รัด tourniquet</b> เหนือจุดเจาะ ~7–10 cm (ไม่เกิน 1 นาที) ให้ผู้ป่วยกำมือ · <b>คลำหาเส้น</b> (median cubital vein) · <b>เช็ดด้วย alcohol 70%</b> จากในออกนอก รอให้แห้ง ไม่จับซ้ำ · <b>เลือกเข็มเบอร์ 20–23 G</b> (นิยม 21 G) · <b>ตรึงเส้นด้วยมืออีกข้าง</b> (ดึงผิวลงด้านล่าง) · <b>แทงเข็มหงายปลายตัด มุม 15–30°</b> เมื่อเลือดย้อน<b>ดูดเลือด</b>ตามปริมาณ · <b>คลาย tourniquet ก่อนถอนเข็ม</b> · ถอนเข็ม วางก๊อซ<b>กด</b> 2–3 นาที (ไม่งอแขน) · <b>ทิ้งเข็มลง sharps box ทันที ไม่สวมปลอกกลับ</b> · ใส่เลือดลงหลอดตามลำดับ ผสมเบา ๆ <b>ติดฉลากข้างเตียง</b> · ถอดถุงมือ ล้างมือ",
   exp:"คลาย tourniquet ก่อนถอนเข็มเพื่อลด hematoma · รัดนานเกิน 1 นาทีทำให้ hemoconcentration (K⁺, protein สูงเท็จ) · ห้ามเจาะแขนข้างที่ให้น้ำเกลือ/มี AV fistula/ผ่าตัดเต้านมเลาะต่อมน้ำเหลือง",
   rubric:"ถอนเข็มก่อนคลาย tourniquet หรือสวมปลอกเข็มกลับ = ขาดข้อสำคัญ (ความปลอดภัย)",
   pts:[H("เตรียม",20),P("Introduce, identify the patient, explain and consent","แนะนำ","identif","ชื่อ","อธิบาย","ขออนุญาต","consent"),P("Hand hygiene and gloves","ถุงมือ","glove","ล้างมือ"),
    H("เจาะ",55),P("Apply tourniquet 7–10 cm above the site","tourniquet","รัด"),P("Palpate the vein","คลำ","palpat"),P("Clean with 70% alcohol and let dry","alcohol","แอลกอฮอล์","70"),P("Needle 20–23 G (21 G)","2[0-3] ?g","เบอร์ ?2[0-3]","เข็ม"),P("Stabilize the vein with the other hand","stabili","ตรึง","มืออีกข้าง","anchor"),P("Insert bevel up 15–30° and aspirate","แทง","ดูด","bevel","15[-–]30","insert","aspirat"),
    H("หลังเจาะ",25),CR(P("Release tourniquet before withdrawing the needle","(ปลด|คลาย|release).{0,15}(tourniquet|ก่อน)","tourniquet.{0,20}(ก่อน|before)")),P("Press the site","กด","press","pressure"),CR(P("Discard needle in sharps box, no recapping","ทิ้งเข็ม","sharp","ไม่สวมปลอก","no recap","recap")),P("Label tubes at the bedside","label","ฉลาก","ติดชื่อ")]})
 ),
 interp:"Procedure: venipuncture — identify, tourniquet, palpate, alcohol, needle 20–23 G, stabilize, aspirate, release tourniquet first, press, discard sharps",
 summary:["Tourniquet 7–10 cm เหนือจุดเจาะ ไม่เกิน 1 นาที · alcohol 70% รอแห้ง","เข็ม 20–23 G, ตรึงเส้นด้วยมืออีกข้าง, แทงมุม 15–30° หงายปลายตัด","คลาย tourniquet ก่อนถอนเข็ม → กด → ทิ้งเข็มลง sharps box ไม่สวมปลอก"]}),

/* ===== สถานี 14 ===== */
Co({page:5,orig:"14",topic:"ekg",sub:"Tachyarrhythmia",title:"Palpitation — 12-lead EKG: interpret and treat",seen:"SI131 Ro417–420 ข้อ 18 (EKG + ยา 1 อย่าง)",
 stem:`A patient presents with sudden-onset palpitation. Blood pressure is 118/76 mmHg and the patient is alert. A 12-lead EKG is shown.<br>1. Interpret the EKG.<br>2. How would you treat this patient?`,
 gray:"14. EKG : SVT ให้อ่าน+ให้การรักษา · # Adenosine",
 flag:NOIMG+" · อาการนำ, BP และภาวะ stable Claude แต่ง (ไฟล์ไม่บอก) เพื่อให้เลือกการรักษาได้",
 notes:"คำตอบผู้จด: SVT · การรักษา # Adenosine",
 parts:S(
  B("14.1 Interpret the EKG.",4,{tags:["ekg"],
   ans:"<b>Regular narrow-complex tachycardia</b> rate ~150–250/min (เช่น ~180/min) · QRS แคบ &lt; 120 ms · <b>ไม่เห็น P wave ก่อน QRS</b> (ซ่อนใน QRS หรือเห็น retrograde P/pseudo-r′ ใน V1, pseudo-S ใน II, III, aVF) · → <b>Paroxysmal supraventricular tachycardia (PSVT)</b>, น่าจะเป็น AVNRT",
   exp:"แยกจาก sinus tachycardia (มี P นำทุก QRS), atrial flutter 2:1 (rate ~150, flutter wave ใน II, III, aVF), AF (irregularly irregular)",
   pts:[P("Regular rhythm","regular","สม่ำเสมอ"),P("Narrow QRS","narrow","แคบ"),P("Rate 150–250/min","1[5-9]0","2[0-5]0","rate","tachy"),P("No visible P waves","no p","p wave","ไม่เห็น p","retrograde"),CR(P("Supraventricular tachycardia (PSVT/AVNRT)","\\bsvt\\b","psvt","supraventricular","avnrt","avrt"))]}),
  B("14.2 How would you treat this patient?",4,{tags:["ekg"],
   ans:"Hemodynamically stable → <b>vagal maneuver</b> (<b>modified Valsalva</b>; carotid sinus massage ถ้าไม่มี carotid bruit) → ถ้าไม่หาย <b>Adenosine 6 mg rapid IV push</b> ทาง antecubital vein ตามด้วย <b>NSS 20 mL flush</b> + ยกแขน → ไม่หายให้ <b>12 mg</b> ซ้ำ · ถ้ายังไม่หาย: verapamil/diltiazem หรือ beta-blocker IV · <b>Unstable</b> (hypotension, shock, chest pain, AMS, heart failure) → <b>synchronized cardioversion</b> · ติด monitor + เตรียม defibrillator ระหว่างให้ adenosine",
   exp:"Adenosine half-life &lt; 10 วินาที จึงต้อง push เร็ว + flush · ผลข้างเคียง: flushing, แน่นหน้าอก, transient asystole, bronchospasm (ระวังใน asthma) · ลดขนาดถ้าให้ผ่าน central line/ได้ dipyridamole หรือ carbamazepine; ต้องเพิ่มขนาดถ้าได้ theophylline/caffeine",
   rubric:"ผู้จดตอบ adenosine — ได้คะแนนหลัก · บอก vagal maneuver ก่อน + ขนาดยาและวิธีให้ = เต็ม",
   pts:[P("Vagal maneuver (modified Valsalva) first","vagal","valsalva","carotid sinus"),CR(P("Adenosine 6 mg rapid IV push with saline flush","adenosine")),P("Repeat 12 mg if no response","12 ?mg"),P("Synchronized cardioversion if unstable","cardiover","synchron","unstable")]})
 ),
 interp:"EKG: regular narrow-complex tachycardia without P → PSVT → vagal maneuver → adenosine",
 summary:["PSVT: regular narrow QRS rate 150–250 ไม่เห็น P (หรือ retrograde P)","Stable: modified Valsalva → adenosine 6 mg rapid push + flush → 12 mg","Unstable: synchronized cardioversion"]}),

/* ===== สถานี 15 ===== */
Co({page:5,orig:"15",topic:"img",sub:"Acute abdomen film",title:"Acute abdomen series — describe, diagnose and manage",seen:"SI131 Ro417–420 ข้อ 20 (free air → PU perforation → consult surgery)",
 stem:`An acute abdomen series is shown.<br>1. Describe the abnormal findings.<br>2. What is the most likely diagnosis, and what is your management?`,
 gray:"15. X-ray · Acute abdomen film : free air under dome of diaphragm, Double wall signs. · # PUP · # Consult Sx",
 flag:NOIMG+" · ไฟล์ไม่บอกประวัติผู้ป่วย",
 notes:"คำตอบผู้จด: free air under dome of diaphragm, double wall sign · Dx # PUP (perforated peptic ulcer) · # Consult Sx",
 parts:S(
  B("15.1 Describe the abnormal findings.",3,{tags:["img"],
   ans:"<b>Free air under the dome of the diaphragm</b> (ขอบลมใต้กะบังลม เห็นชัดใต้ right hemidiaphragm ในท่ายืน/upright CXR) · <b>Double wall sign (Rigler sign)</b> — เห็นทั้งผนังด้านในและนอกของลำไส้ในท่านอน = pneumoperitoneum",
   exp:"สัญญาณ pneumoperitoneum อื่นในท่านอน: football sign, falciform ligament sign, triangle sign · ลมใต้กะบังลมซ้ายต้องแยกจาก gastric bubble",
   pts:[CR(P("Free air under the diaphragm (pneumoperitoneum)","free air","under (the )?(dome|diaphragm)","pneumoperitone","ลมใต้กะบังลม")),P("Double wall (Rigler) sign","double wall","rigler")]}),
  B("15.2 What is the most likely diagnosis, and what is your management?",4,{tags:["img"],
   ans:"<b>Perforated peptic ulcer (PUP)</b> — hollow viscus perforation · Management: <b>NPO</b>, <b>NG tube</b> decompression, IV fluid resuscitation, <b>IV PPI</b>, <b>broad-spectrum IV antibiotics</b>, analgesics, ส่งเลือดเตรียมผ่าตัด · <b>Consult surgery</b> → emergency surgical repair (omental/Graham patch, laparoscopic หรือ open)",
   exp:"ปัจจัยเสี่ยง: NSAIDs/ยาชุด, H. pylori, สูบบุหรี่ · หลังผ่าตัด: ตรวจและกำจัด H. pylori, หยุด NSAID",
   rubric:"ผู้จด: PUP + consult surgery — บอกครบทั้งสองอย่าง = ได้คะแนนหลัก",
   pts:[CR(P("Perforated peptic ulcer","perforat","\\bpup\\b","ulcer","ทะลุ")),CR(P("Consult surgery / emergency surgery","consult","surg","ศัลย","ผ่าตัด","laparotom","patch")),P("NPO, NG tube, IV fluid, IV PPI, IV antibiotics","npo","\\bng\\b","nasogastric","ppi","antibiotic","fluid","งดน้ำงดอาหาร")]})
 ),
 interp:"Acute abdomen film: free air + double wall sign → perforated peptic ulcer → consult surgery",
 summary:["Pneumoperitoneum: free air ใต้กะบังลม (upright), Rigler/double wall sign (supine)","สาเหตุพบบ่อย: perforated peptic ulcer (NSAIDs, H. pylori)","NPO, NG tube, IV fluid, IV PPI, IV ATB + consult surgery"]}),

/* ===== สถานี 16 ===== */
Co({page:6,orig:"16",topic:"micro",sub:"Gram stain",title:"CSF Gram stain — describe and identify the organism",
 stem:`A Gram-stained smear of cerebrospinal fluid is shown.<br>1. Describe what you see.<br>2. What is the most likely organism?`,
 gray:"16. CSF · numerous WBC · numerous Gram ⊕ diplococci + lancet shape + capsule · # Streptococcus pneumoniae",
 flag:NOIMG+" · ไฟล์ไม่บอกประวัติผู้ป่วย",
 notes:"คำตอบผู้จด: numerous WBC, numerous Gram-positive diplococci + lancet shape + capsule → Streptococcus pneumoniae",
 parts:S(
  B("16.1 Describe what you see.",4,{tags:["micro"],
   ans:"<b>Numerous WBC</b> (ส่วนใหญ่ PMN) · <b>Numerous Gram-positive diplococci</b> (ติดสีม่วง) <b>รูป lancet</b> (ปลายแหลม) มี <b>capsule</b> (halo ใส) รอบ ๆ",
   exp:"Gram-negative diplococci รูปเมล็ดถั่ว (kidney bean) = <i>Neisseria meningitidis</i> · Gram-positive rods = <i>Listeria</i> (ผู้สูงอายุ, ภูมิคุ้มกันต่ำ, ตั้งครรภ์)",
   pts:[P("Numerous WBC (PMN)","wbc","pmn","neutrophil","white"),CR(P("Gram-positive diplococci","gram.?(positive|pos|\\+|⊕).{0,10}diplococ","gram.?(positive|pos|\\+|⊕)","diplococ")),P("Lancet-shaped","lancet"),P("Capsule","capsul","halo")]}),
  B("16.2 What is the most likely organism?",3,{tags:["micro"],
   ans:"<b><i>Streptococcus pneumoniae</i></b> → <b>pneumococcal (acute bacterial) meningitis</b>",
   exp:"Empirical treatment ผู้ใหญ่: <b>dexamethasone 0.15 mg/kg IV q6h × 4 วัน</b> (ให้ก่อน/พร้อม antibiotic ครั้งแรก) + <b>ceftriaxone 2 g IV q12h</b> + <b>vancomycin</b> (กรณี penicillin/ceftriaxone-resistant pneumococcus) ± ampicillin ถ้าอายุ > 50 ปีหรือภูมิคุ้มกันต่ำ (Listeria) · ให้ antibiotic ภายใน 1 ชม. อย่ารอผลถ้าต้องทำ CT ก่อน LP",
   pts:[CR(P("Streptococcus pneumoniae","pneumoniae","pneumococ","s\\.? ?pneumo")),P("Bacterial meningitis","meningitis","เยื่อหุ้มสมองอักเสบ")]})
 ),
 interp:"Microscope: CSF Gram stain — numerous PMN + Gram-positive lancet-shaped encapsulated diplococci → S. pneumoniae meningitis",
 summary:["Gram + lancet-shaped diplococci with capsule = S. pneumoniae","Gram − kidney-bean diplococci = N. meningitidis; Gram + rods = Listeria","Pneumococcal meningitis: dexamethasone + ceftriaxone + vancomycin"]}),

/* ===== สถานี 17 ===== */
Co({page:6,orig:"17",topic:"img",sub:"CT brain",title:"Contrast-enhanced CT brain — describe and diagnose",
 stem:`A contrast-enhanced CT scan of the brain is shown.<br>1. Describe the abnormal findings.<br>2. What is the most likely diagnosis?`,
 gray:"17. CT brain · # Brain abscess · hypodensity lesion + thin wall at Lt. basal gg. · + rim enhancement · brain edema + pressure effect",
 flag:NOIMG+" · ไฟล์ไม่บอกประวัติผู้ป่วย",
 notes:"คำตอบผู้จด: hypodensity lesion + thin wall ที่ Lt. basal ganglia, rim enhancement, brain edema + pressure effect (= mass effect) → # Brain abscess",
 parts:S(
  B("17.1 Describe the abnormal findings.",4,{tags:["img"],
   ans:"<b>Hypodense lesion</b> ที่ <b>left basal ganglia</b> มี<b>ผนังบางเรียบ (thin wall)</b> และ <b>ring (rim) enhancement</b> หลังฉีด contrast · <b>perilesional vasogenic edema</b> (hypodensity รอบ ๆ) · <b>mass effect</b>: กด lateral ventricle ± midline shift",
   exp:"Ring-enhancing lesion ddx (MAGIC DR): metastasis, abscess, glioblastoma, infarct (subacute), contusion, demyelination, radiation necrosis · abscess = ผนังบางเรียบสม่ำเสมอ (ผนังด้าน ventricle บางกว่า) และ <b>DWI restriction</b> ตรงกลาง · tumor = ผนังหนาไม่สม่ำเสมอ",
   pts:[CR(P("Hypodense lesion at left basal ganglia","hypodens","basal g","low density")),CR(P("Thin smooth ring (rim) enhancement","rim","ring","enhanc")),P("Perilesional edema","edema","oedema"),P("Mass effect / midline shift","mass effect","pressure effect","midline","shift","compress")]}),
  B("17.2 What is the most likely diagnosis?",3,{tags:["img"],
   ans:"<b>Brain abscess</b> (left basal ganglia) · Ddx: necrotic glioblastoma, metastasis, <b>toxoplasmosis</b> (ในผู้ป่วย HIV — มักหลายก้อนที่ basal ganglia), tuberculoma",
   exp:"Ix: blood culture, MRI with DWI, หาแหล่งติดเชื้อ (หู ไซนัส ฟัน endocarditis) · รักษา: <b>neurosurgical aspiration/drainage</b> ส่ง Gram stain/culture + empirical IV antibiotic (ceftriaxone + metronidazole ± vancomycin) 6–8 สัปดาห์ · หลีกเลี่ยง LP เมื่อมี mass effect",
   pts:[CR(P("Brain abscess","abscess","ฝีในสมอง")),G("Differential diagnosis (≥ 1)",1,P("Necrotic tumor / glioblastoma","tumor","tumour","glioblastoma","\\bgbm\\b","glioma"),P("Metastasis","metasta"),P("Toxoplasmosis","toxoplasm"),P("Tuberculoma","tubercul"))]})
 ),
 interp:"CT brain: hypodense lesion + thin rim enhancement + edema + mass effect → brain abscess",
 summary:["Abscess: ring enhancement ผนังบางเรียบ + edema + mass effect + DWI restriction","Ddx ring-enhancing: tumor, metastasis, toxoplasmosis (HIV), tuberculoma","Rx: aspiration/drainage + IV ATB 6–8 สัปดาห์; ห้าม LP เมื่อมี mass effect"]}),

/* ===== สถานี 18 ===== */
Co({page:6,orig:"18",topic:"proc",sub:"Blood transfusion",ex:1,proc:1,title:"Procedure — administering a blood transfusion",seen:"SI130 Ro409–412 ข้อ 17 และ SI131 Ro409–412 ข้อ 13 (ให้เลือด — unit no. ไม่ตรงต้องขอถุงใหม่)",
 stem:`A patient has an order for a blood transfusion. Demonstrate how you would check the blood and give it to the patient. Say aloud every step you check.`,
 gray:"18. ให้เลือด · - identify pt. ⟨ Group, ชื่อ · - unit No. → ไม่ตรง → ขอเปลี่ยน · - วันหมดอายุ · - ลักษณะเลือด · - หมู่เลือด pt. · - พยาบาลช่วย check · - แนะนำตัวเอง · - Identify pt · - indication · - complications · - ให้พยาบาลตรวจอีกที",
 flag:"บทผู้คุม (sp) Claude แต่ง · ขั้นตอนที่ไฟล์ไม่ได้จด (consent, premedication, ชุดให้เลือด, vital sign) Claude เติมตาม OSCE_REF (แบบประเมินการให้เลือดศิริราช)",
 notes:"ผู้จดเขียนรายการตรวจสอบ (gray) · \"identify pt. ⟨ Group, ชื่อ\" = ตรวจหมู่เลือดและชื่อ · ถ้า unit no. ไม่ตรง → ขอเปลี่ยนถุง · ส่วนที่ข้างเตียง: แนะนำตัว identify ผู้ป่วย บอก indication และ complications ให้พยาบาลตรวจซ้ำ",
 opinion:"ไฟล์ไม่ขัดกับ OSCE_REF · แบบประเมินใน OSCE_REF ให้วัด vital sign หลังเริ่มให้ 5–10 นาที แต่ไม่มีขั้น baseline vital sign ก่อนเริ่ม — guideline (BSH/AABB) วัด baseline + วัดซ้ำประมาณ 15 นาทีหลังเริ่ม และเมื่อให้เสร็จ จึงใส่ทั้งสองอย่าง",
 sp:"ผู้คุมรับบทพยาบาล/อาจารย์: มี order PRC 1 unit, ถุงเลือดจริงพร้อมใบคล้อง, ชุดให้เลือด, ผู้ป่วยจำลองมีป้ายข้อมือ · ถ้าผู้สอบเทียบเลข unit no. บนใบคล้องกับถุง: <b>เลขไม่ตรงกัน</b> (ต้องขอเปลี่ยนถุง ห้ามให้) · ถ้าผู้สอบเรียกพยาบาลมาช่วยเช็ค: ผู้คุมมาช่วยดู · ผู้ป่วยถามว่า \"ต้องให้เลือดเพราะอะไร มีผลข้างเคียงไหม\"",
 parts:S(
  B("18.1 Check the order and the blood bag.",6,{tags:["proc"],
   ans:"ตรวจ <b>informed consent</b> และ <b>order</b> (ข้อบ่งชี้ ชนิด จำนวน rate) + premedication · สวมถุงมือ · ตรวจ<b>ลักษณะเลือด/ถุง</b>: สี, ไม่มี clot, ไม่รั่ว/ฉีก · <b>วันหมดอายุ</b> · <b>เรียกพยาบาลช่วย double check</b>: ใบคล้องติดกับถุงเสมอ · <b>ชื่อ-นามสกุล/HN</b> ตรงกันระหว่างถุง ใบคล้อง order · <b>unit no.</b> ใบคล้อง = ถุง · <b>หมู่เลือด</b>ถุง = ใบคล้อง = หมู่เลือดผู้ป่วย · <b>ไม่ตรง → ห้ามให้ ขอเปลี่ยนถุง</b> · เปิดชุดให้เลือด ปิด roller clamp ต่อถุงแบบ aseptic แขวน ไล่อากาศ",
   exp:"Clerical error เป็นสาเหตุหลักของ ABO-incompatible transfusion → acute hemolytic transfusion reaction · ใบคล้องหลุดจากถุง = ห้ามให้ถุงนั้น",
   rubric:"ไม่ double check กับพยาบาล หรือยังให้ทั้งที่ unit no. ไม่ตรง = ข้อนี้ได้ศูนย์",
   pts:[H("Order",20),P("Informed consent and order (indication, premedication)","consent","ยินยอม","order","premed"),
    H("ถุงเลือด",30),P("Blood appearance: colour, clots, leaks","clot","ก้อน","ลักษณะ","สีเลือด","สีของเลือด","รั่ว","leak"),P("Expiry date","expir","หมดอายุ"),
    H("Double check",50),CR(P("Call a nurse to double-check","พยาบาล","nurse","double ?check")),P("Name and HN — bag, tag and order","ชื่อ","name","\\bhn\\b"),CR(P("Unit number tag vs bag","unit")),P("Blood group of bag and patient","หมู่เลือด","blood group","group","\\babo\\b"),CR(P("Mismatch → do not transfuse, request a new bag","ขอ(เปลี่ยน|ถุงใหม่)","ถุงใหม่","new bag","do not (give|transfus)","ไม่ให้","เปลี่ยนถุง"))]}),
  B("18.2 At the bedside — identification, counselling and monitoring.",5,{tags:["proc"],
   ans:"<b>แนะนำตัว</b> · <b>identify ผู้ป่วย</b>: ให้ผู้ป่วยบอกชื่อ-นามสกุลเอง + ตรวจป้ายข้อมือ ตรงกับถุง · บอก<b>ข้อบ่งชี้ (indication)</b> และขออนุญาต · อธิบาย<b>ภาวะแทรกซ้อน (complications)</b>: ไข้ หนาวสั่น ผื่นคัน/ลมพิษ เหนื่อย แน่นหน้าอก ปวดหลัง ปัสสาวะสีเข้ม → ให้แจ้งทันที · <b>ให้พยาบาลตรวจซ้ำ</b>ข้างเตียง · วัด <b>vital sign ก่อนเริ่ม</b> → ต่อกับ IV แบบ aseptic ปรับ rate ช้าใน 15 นาทีแรก · <b>วัด vital sign ซ้ำหลังเริ่ม 5–15 นาที</b> และสังเกตอาการ",
   exp:"ถ้าเกิด reaction: <b>หยุดให้เลือดทันที</b>, keep IV ด้วย NSS, ประเมิน ABC, ตรวจ clerical error ข้างเตียง · ไข้ > 38 °C และเพิ่ม > 1 °C → คิด AHTR/sepsis/FNHTR · urticaria อย่างเดียว = mild allergic → antihistamine · anaphylaxis → epinephrine IM · เหนื่อย + pulmonary edema: TACO (volume overload → diuretic) vs TRALI (ไม่มี volume overload)",
   rubric:"ไม่ identify ผู้ป่วยข้างเตียง = ขาดข้อสำคัญ",
   pts:[P("Introduce self","แนะนำตัว","introduc"),CR(P("Identify the patient (name, wristband) against the bag","identif","ป้ายข้อมือ","wristband","ชื่อ")),P("Explain the indication","indication","ข้อบ่งชี้"),CR(P("Explain complications and ask to report symptoms","complication","ภาวะแทรกซ้อน","ผลข้างเคียง","adverse","\\badr\\b","ไข้","ลมพิษ")),P("Nurse re-checks at the bedside","พยาบาล","nurse"),P("Vital signs before and 5–15 min after starting","vital","\\bvs\\b","สัญญาณชีพ","monitor","สังเกต")]})
 ),
 interp:"Procedure: ให้เลือด — order/consent, ลักษณะถุง/หมดอายุ, double check ชื่อ unit no. หมู่เลือดกับพยาบาล, ไม่ตรงขอเปลี่ยน, identify ผู้ป่วย, อธิบาย indication/complication, VS",
 summary:["ก่อนให้: consent, order, ลักษณะเลือด (สี clot รั่ว), วันหมดอายุ","Double check กับพยาบาล: ชื่อ/HN, unit no., หมู่เลือด — ไม่ตรง = ขอเปลี่ยนถุง ห้ามให้","ข้างเตียง: identify ผู้ป่วย, indication, complications, VS ก่อนและหลังเริ่ม 5–15 นาที"]}),

/* ===== สถานี 19 ===== */
Co({page:6,orig:"19",topic:"hx",sub:"GI bleeding",ex:1,title:"History taking — vomiting blood in an elderly man",seen:"คล้าย SI131 Ro409–412 ข้อ 4 และ SI133 Ro403–404 ข้อ 5 (hematemesis) — คนละโจทย์ (สถานีนี้เน้นยาและ drug interaction)",
 stem:`A 72-year-old man presents with vomiting of blood since this morning. Take a focused history, then give your most likely diagnosis.`,
 gray:"19. Hx taking · UGIB · - ปริมาณ จน.ครั้ง - อาการร่วม - อุจจาระ - เคยเป็น? · (คอลัมน์ขวา) - อาการทั่วไป - U/D - ยา!!!! (ไฮไลต์เหลือง) + ขอดูยา - ตรวจ ค.สม่ำเสมอของ ก.ใช้ยา? - มีคนช่วยดูแลเรื่องยา? · # UGIB - drug interaction : warfarin, ome, NSAIDS",
 flag:"⚠ อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (UGIB จาก drug interaction: warfarin + NSAIDs + omeprazole)",
 notes:"ผู้จดไฮไลต์เหลือง \"ยา!!!!\" = จุดสำคัญที่สุดของสถานีคือซักประวัติยา ขอดูยา ความสม่ำเสมอในการใช้ยา และผู้ดูแลเรื่องยา · Dx ผู้จด: UGIB - drug interaction: warfarin, ome (omeprazole), NSAIDs",
 opinion:"ผู้จดใส่ omeprazole ในกลุ่ม drug interaction — omeprazole ยับยั้ง CYP2C19 ทำให้ INR สูงขึ้นได้เล็กน้อยเท่านั้น และจริง ๆ แล้ว PPI เป็นยาป้องกันกระเพาะที่แนะนำให้ใช้เมื่อได้ warfarin ร่วมกับ NSAID · ตัวการหลักคือ <b>NSAID</b> (ทำให้เกิดแผลในกระเพาะ + ยับยั้งเกล็ดเลือด + บางตัวเพิ่ม INR) ร่วมกับ warfarin",
 sp:"ชาย 72 ปี อาเจียนเป็นเลือดสีน้ำตาลดำปนแดง 2 ครั้งตั้งแต่เช้า ครั้งละประมาณครึ่งแก้ว · ถ่ายดำเหนียว 2 ครั้ง · หน้ามืดเวลาลุกยืน ใจสั่น อ่อนเพลีย · ไม่เคยอาเจียนเป็นเลือดหรือถ่ายดำมาก่อน · โรคประจำตัว: หัวใจเต้นผิดจังหวะ (AF) กินยาละลายลิ่มเลือด warfarin มา 2 ปี · 1 สัปดาห์ก่อนปวดเข่า ไปคลินิกได้ยาแก้ปวด (diclofenac) และยาเคลือบกระเพาะ (omeprazole) มากินวันละ 3 ครั้ง · ถ้าผู้สอบขอดูยา: ผู้คุมยื่นถุงยา warfarin, diclofenac, omeprazole · กินยาไม่ค่อยตรงเวลา บางวันลืมแล้วกินเพิ่มเป็น 2 เม็ด · อยู่กับภรรยาสูงอายุ ไม่มีใครช่วยจัดยา · ไม่ดื่มเหล้า ไม่เคยเป็นโรคตับ · ไม่มีเลือดออกที่อื่น (ถ้าถาม: มีจ้ำเลือดที่แขนเล็กน้อย)",
 parts:S(
  B("19.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะเลือด:</b> <b>ปริมาณ จำนวนครั้ง</b> สี (แดงสด/coffee-ground) · <b>อุจจาระ</b> (ถ่ายดำ/เป็นเลือด) · <b>อาการร่วม/ความรุนแรง:</b> หน้ามืด เป็นลม ใจสั่น ปวดท้อง เลือดออกที่อื่น (จ้ำเลือด เหงือก ปัสสาวะ) · <b>เคยเป็นมาก่อน</b>ไหม, อาการทั่วไป (น้ำหนักลด เบื่ออาหาร) · <b>U/D</b> (AF, ลิ้นหัวใจเทียม, ตับ, ไต) · <b>ยา (สำคัญที่สุด):</b> anticoagulant (<b>warfarin</b>), antiplatelet, <b>NSAIDs</b>/ยาแก้ปวด, steroid, ยาใหม่/ยาสมุนไพร/antibiotic ที่เพิ่ม INR · <b>ขอดูยาจริง</b> · <b>ความสม่ำเสมอในการกินยา</b> (ลืม/กินเกิน) · <b>มีคนช่วยดูแลเรื่องยา</b>ไหม · ผล INR ครั้งล่าสุด · alcohol, โรคตับ",
   exp:"ผู้สูงอายุที่ได้ warfarin: drug interaction และการกินยาผิดเป็นสาเหตุ over-anticoagulation ที่พบบ่อย · ยาที่เพิ่ม INR: NSAIDs (บางตัว), metronidazole, cotrimoxazole, fluconazole, amiodarone, ฯลฯ",
   rubric:"ไฮไลต์ของผู้จด: ซักยา + ขอดูยา + compliance + ผู้ดูแลยา — ขาดเรื่องยา = ขาดข้อสำคัญ",
   pts:[H("ลักษณะเลือด/ความรุนแรง",30),P("Amount, frequency and colour","ปริมาณ","กี่ครั้ง","จำนวนครั้ง","สี(แดง|ดำ|น้ำตาล)","coffee","amount"),P("Stool: melena / hematochezia","อุจจาระ","ถ่ายดำ","melena","stool"),P("Associated symptoms: dizziness, syncope, other bleeding","หน้ามืด","เป็นลม","ใจสั่น","อาการร่วม","จ้ำ","bleeding","เลือดออกที่อื่น"),
    H("ประวัติเดิม",20),P("Previous episodes / general symptoms","เคยเป็น","previous","น้ำหนักลด","อาการทั่วไป"),P("Underlying disease","โรคประจำตัว","underlying","u/d","\\baf\\b","atrial"),
    H("ยา",50),CR(P("Anticoagulant (warfarin) and antiplatelet","warfarin","anticoag","ละลายลิ่ม","ต้านเกล็ด","antiplatelet","aspirin")),CR(P("NSAIDs / analgesics / new drugs","nsaid","ยาแก้ปวด","diclofenac","ibuprofen","ยาใหม่","new drug")),P("Ask to see the medications","ขอดูยา","ดูยา","see (the )?(drug|medic)","ถุงยา"),P("Adherence and who manages the medications","สม่ำเสมอ","complian","adheren","ลืม","คนช่วย","ผู้ดูแล","caregiver","จัดยา")]}),
  B("19.2 What is your most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>Upper GI bleeding</b> from <b>NSAID-induced peptic ulcer</b> in a patient on <b>warfarin</b> — <b>drug interaction (warfarin + NSAIDs)</b> ± over-anticoagulation จากการกินยาไม่สม่ำเสมอ",
   exp:"ต่อ: resuscitation, CBC, <b>PT/INR</b>, BUN/Cr, G/M · หยุด warfarin และ NSAID · ถ้าเลือดออกมาก + INR สูง → <b>vitamin K IV + 4-factor PCC</b> (หรือ FFP ถ้าไม่มี PCC) · IV PPI · EGD ภายใน 24 ชม. · ประเมิน Glasgow-Blatchford score",
   rubric:"ตอบ UGIB อย่างเดียวโดยไม่บอกสาเหตุจากยา = บางส่วน",
   pts:[CR(P("Upper GI bleeding","ugib","upper gi","gi bleed","ทางเดินอาหารส่วนบน","peptic ulcer","ulcer")),CR(P("Drug interaction: warfarin + NSAIDs","interaction","warfarin","nsaid")),P("Over-anticoagulation / poor adherence","over.?anticoag","inr","สม่ำเสมอ","complian","adheren")]})
 ),
 interp:"History taking: UGIB in elderly on warfarin — ซักยาเป็นหัวใจ (ขอดูยา, compliance, ผู้ดูแลยา) → warfarin–NSAID interaction",
 summary:["UGIB ในผู้สูงอายุ: ซักยาทุกตัว + ขอดูยาจริง + compliance + ใครดูแลยา","Warfarin + NSAID → แผลในกระเพาะ + เลือดออกง่าย (+ INR สูง)","Rx: หยุดยา, INR, vitamin K + PCC ถ้าเลือดออกมาก, IV PPI, EGD"]}),

/* ===== สถานี 20 ===== */
Co({page:7,orig:"20",topic:"hx",sub:"Weight loss",ex:1,title:"History taking — chronic diarrhea and weight loss in a young man",
 stem:`A 30-year-old man presents with chronic diarrhea, low-grade fever and weight loss of 10 kg over 3 months. Take a history focusing on the risk factors for the underlying condition, then give your most likely diagnosis.`,
 gray:"20. Hx taking · HIV · # unsafe sex, IVDU, รับเลือด, Tattoo, อาชีพหลัก, อาชีพเสริม, ค.เสี่ยง! · # STD : แผลอวัยวะ(?) · # HIV (ขีดฆ่า) → AIDS (เขียนแก้สีเหลือง)",
 flag:"⚠ ไฟล์จดแค่หัวข้อ \"HIV\" + ความเสี่ยงที่ต้องซัก — อาการนำ (ท้องเสียเรื้อรัง ไข้ น้ำหนักลด) อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบ AIDS · sub ใช้ Weight loss ตามอาการนำที่แต่ง",
 notes:"ผู้จดเขียนความเสี่ยงที่ต้องซัก (unsafe sex, IVDU, รับเลือด, tattoo, อาชีพหลัก/อาชีพเสริม — เน้น \"ค.เสี่ยง!\") + STD (แผลที่อวัยวะเพศ (?)) · คำวินิจฉัยเดิม \"HIV\" ถูกขีดฆ่าแล้วเขียนแก้เป็น \"AIDS\" ด้วยสีเหลือง",
 sp:"ชาย 30 ปี ท้องเสียเป็นน้ำวันละ 4–5 ครั้ง 2 เดือน ไข้ต่ำ ๆ ตอนเย็น น้ำหนักลดจาก 62 เหลือ 52 kg ใน 3 เดือน มีฝ้าขาวในปาก กลืนไม่เจ็บ · ไม่เคยตรวจเลือด HIV · ความเสี่ยง (ตอบเมื่อถูกถาม): มีเพศสัมพันธ์กับผู้ชายและผู้หญิงหลายคน ไม่ใช้ถุงยางสม่ำเสมอ · เคยมีแผลที่อวัยวะเพศไม่เจ็บเมื่อ 2 ปีก่อน หายเอง ไม่ได้รักษา · มีรอยสักที่แขน (สักที่ร้านทั่วไป) · ไม่เคยใช้ยาเสพติดชนิดฉีด · ไม่เคยรับเลือด · อาชีพหลักพนักงานร้านอาหาร อาชีพเสริมทำงานบาร์กลางคืน · ไม่เคยถูกเข็มตำ",
 parts:S(
  B("20.1 Take a history focusing on risk factors.",6,{tags:["hx"],
   ans:"<b>Sexual history:</b> <b>unsafe sex</b> (ไม่ใช้ถุงยาง), จำนวนคู่นอน, เพศของคู่นอน (MSM), คู่นอนที่ติดเชื้อ, เพศสัมพันธ์เชิงพาณิชย์ · <b>STD</b> เดิม: แผลที่อวัยวะเพศ หนองไหล (ซิฟิลิส/หนองใน) · <b>IVDU</b>/ใช้เข็มร่วม · <b>รับเลือด</b>/ส่วนประกอบเลือด · <b>Tattoo</b>/เจาะ · <b>อาชีพหลักและอาชีพเสริม</b> (sex worker, บุคลากรการแพทย์ถูกเข็มตำ) · คู่สมรส/บุตร · เคยตรวจ HIV · <b>อาการ AIDS-defining/OI</b>: ไข้เรื้อรัง ท้องเสีย น้ำหนักลด ฝ้าขาวในปาก กลืนเจ็บ ไอเรื้อรัง ปวดศีรษะ ผื่น",
   exp:"เข้าเกณฑ์ HIV wasting syndrome (AIDS-defining): น้ำหนักลด > 10% + ท้องเสียเรื้อรัง > 30 วัน หรือไข้เรื้อรัง > 30 วัน โดยไม่มีสาเหตุอื่น",
   rubric:"ผู้จดเน้น \"ความเสี่ยง!\" — ต้องครบ sex, IVDU, รับเลือด, tattoo, อาชีพ จึงได้เต็ม",
   pts:[H("Sexual / STD",40),CR(P("Unsafe sex, number and sex of partners","unsafe","ถุงยาง","condom","เพศสัมพันธ์","คู่นอน","\\bmsm\\b","sex")),P("Previous STD (genital ulcer, discharge)","\\bstd\\b","\\bsti\\b","แผลที่อวัยวะ","แผลอวัยวะ","อวัยวะเพศ","หนอง","syphilis","ซิฟิลิส"),
    H("Blood exposure",35),CR(P("IV drug use / shared needles","ivdu","ฉีดยา","เข็ม","needle","drug use","ยาเสพติด")),P("Blood transfusion","รับเลือด","transfus"),P("Tattoo / piercing","tattoo","สัก","เจาะ"),
    H("อื่น ๆ",25),P("Main and secondary occupation","อาชีพ","occupation"),P("Previous HIV testing / partner status","เคยตรวจ","anti.?hiv","partner","คู่สมรส","แฟน")]}),
  B("20.2 What is your most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>HIV infection with AIDS</b> (HIV wasting syndrome: น้ำหนักลด > 10% + ท้องเสียเรื้อรัง/ไข้ > 1 เดือน, oral candidiasis) · ยืนยันด้วย <b>anti-HIV</b> (ตามแนวทางไทย 3 วิธี) และ <b>CD4 count</b> (&lt; 200 cells/µL = AIDS)",
   exp:"ต่อ: CD4, viral load, ตรวจหา OI (stool exam หา Cryptosporidium/Isospora/Microsporidia, CXR/TB, cryptococcal antigen ถ้า CD4 &lt; 100), ซิฟิลิส HBV HCV · เริ่ม <b>ART</b> เร็ว (TLD: tenofovir + lamivudine + dolutegravir) · prophylaxis: cotrimoxazole ถ้า CD4 &lt; 200",
   rubric:"ผู้จดแก้คำตอบจาก HIV เป็น AIDS — ตอบ HIV infection โดยไม่ระบุ AIDS ได้คะแนนน้อยกว่า",
   pts:[CR(P("AIDS (advanced HIV)","\\baids\\b","wasting","advanced hiv","เอดส์")),P("HIV infection — confirm anti-HIV and CD4","hiv","cd4","เอชไอวี")]})
 ),
 interp:"History taking: HIV risk factors (sex, IVDU, blood, tattoo, occupation, STD) ในผู้ป่วยท้องเสีย/น้ำหนักลดเรื้อรัง → AIDS",
 summary:["ความเสี่ยง HIV: unsafe sex/MSM, STD, IVDU, รับเลือด, tattoo, อาชีพหลัก/เสริม","HIV wasting syndrome (น้ำหนักลด > 10% + ท้องเสีย/ไข้ > 30 วัน) = AIDS-defining","ยืนยัน anti-HIV + CD4 → ART (TLD) + cotrimoxazole ถ้า CD4 &lt; 200"]}),

/* ===== สถานี 21 ===== */
Co({page:7,orig:"21",topic:"hx",sub:"Seizure",ex:1,title:"History taking — loss of consciousness with whole-body jerking",seen:"คล้าย SI131 Ro417–420 ข้อ 8 (ซักประวัติ seizure) — คนละโจทย์",
 stem:`A 25-year-old man is brought in after an episode of loss of consciousness with stiffening and jerking of the whole body. Take a focused history, then give your most likely diagnosis.`,
 gray:"21. Hx taking · หมดสติ เกร็งกระตุกทั้งตัว · # epilepsy · - หมดนาน(?) - Prodrome - อาการขณะหมดสติ - หลังชัก(?) - สับสน - ชักแบบอื่น(?) - infection มาก่อน - Alcohol - เคยเป็นมาก่อน - สมาชิกในครอบครัว",
 flag:"⚠ อายุ/เพศ และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (epilepsy)",
 notes:"ผู้จดเขียนรายการคำถาม (gray) · คำที่อ่านไม่ชัด: \"หมดนาน\" (น่าจะหมายถึงหมดสตินานเท่าไร), \"หลังชัก\", \"ชักแบบอื่น\" (?) · Dx ผู้จด: epilepsy",
 sp:"ชาย 25 ปี เมื่อเช้าเพื่อนเห็นล้มลงหมดสติ ตัวเกร็งแล้วกระตุกทั้งตัว ประมาณ 2 นาที ตาเหลือกค้าง กัดลิ้น ปัสสาวะราด ปากเขียว · ก่อนเป็นไม่มีเตือน ไม่หน้ามืด ไม่ใจสั่น (ถ้าถาม: รู้สึกแปลก ๆ ในท้องแวบหนึ่ง) · หลังกระตุกหลับลึก ตื่นมาสับสน 20–30 นาที ปวดศีรษะ ปวดเมื่อยตัว · เคยเป็นแบบเดียวกัน 2 ครั้งในปีที่ผ่านมา ไม่ได้ไปหาหมอ · ไม่มีชักแบบอื่น · ไม่มีไข้ ไม่มีการติดเชื้อก่อนหน้า ไม่ปวดศีรษะเรื้อรัง · ไม่ดื่มเหล้า ไม่ใช้สารเสพติด · ไม่เคยหัวฟาดพื้น · นอนดึกช่วงสอบ · ไม่มีโรคประจำตัว ไม่ได้กินยา · ลูกพี่ลูกน้องเป็นโรคลมชัก · ตอนเด็กไม่มีชักจากไข้",
 parts:S(
  B("21.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ซักจากผู้เห็นเหตุการณ์ (eyewitness) ด้วย</b> · <b>ก่อนเกิด:</b> <b>prodrome/aura</b> (déjà vu, epigastric rising, กลิ่น, ชา), หน้ามืด ใจสั่น เหงื่อออก (แยก syncope), กิจกรรมขณะนั้น, ตัวกระตุ้น (อดนอน แสงกระพริบ) · <b>ขณะเกิด:</b> <b>หมดสตินานเท่าไร</b>, ลักษณะเกร็ง/กระตุก ทั้งตัวหรือเริ่มที่ส่วนใด, ตาเหลือก, กัดลิ้น (ด้านข้าง), ปัสสาวะราด, เขียว · <b>หลังเกิด:</b> <b>สับสน (postictal confusion)</b> นานเท่าไร, อ่อนแรงครึ่งซีก (Todd paralysis), ปวดศีรษะ · <b>เคยเป็นมาก่อน</b> ความถี่ · <b>ชักแบบอื่น</b> (myoclonic jerk ตอนเช้า, เหม่อ) · <b>หาสาเหตุ/provoking:</b> <b>infection</b>/ไข้ ปวดศีรษะ (CNS infection), <b>alcohol</b> (withdrawal), สารเสพติด ยา, หัวฟาดพื้น, โรคหลอดเลือดสมอง, เบาหวาน (hypoglycemia) · ประวัติชักจากไข้ตอนเด็ก พัฒนาการ · <b>ประวัติครอบครัว</b> · ผลกระทบ: ขับรถ อาชีพ",
   exp:"Syncope: มีอาการนำ (หน้ามืด เหงื่อ ตาลาย), หมดสติสั้น &lt; 1 นาที, ฟื้นเร็วไม่สับสน · Seizure: กัดลิ้นด้านข้าง, postictal confusion, กระตุกนาน · ILAE: epilepsy = unprovoked seizure ≥ 2 ครั้งห่างกัน > 24 ชม. หรือ 1 ครั้งที่เสี่ยงเกิดซ้ำ ≥ 60%",
   rubric:"ได้เต็ม = ก่อน-ขณะ-หลังชัก + เคยเป็น/ชักแบบอื่น + provoking factor (infection, alcohol, trauma) + family history",
   pts:[H("ก่อนเกิด",20),P("Prodrome / aura","prodrome","aura","อาการเตือน","อาการนำ"),P("Syncope features (dizziness, palpitation)","หน้ามืด","ใจสั่น","syncope","palpitat"),
    H("ขณะ/หลังเกิด",35),P("Duration of unconsciousness","นานเท่าไร","duration","กี่นาที","หมดสตินาน","หมดนาน"),P("Description during the event: tongue bite, incontinence, cyanosis","อาการขณะ","กัดลิ้น","tongue","ปัสสาวะราด","incontin","ตาเหลือก","เขียว"),CR(P("Postictal confusion","สับสน","confus","postictal","post.?ictal","หลังชัก")),
    H("ประวัติเดิม/สาเหตุ",45),CR(P("Previous episodes and other seizure types","เคยเป็น","previous","ชักแบบอื่น","other (seizure|type)","myoclon")),P("Preceding infection / fever","infection","ติดเชื้อ","ไข้","fever"),P("Alcohol / drugs","alcohol","เหล้า","สุรา","สารเสพติด","drug"),P("Head trauma","trauma","หัวฟาด","อุบัติเหตุ","head injury"),P("Family history","family","ครอบครัว","สมาชิก","ญาติ")]}),
  B("21.2 What is your most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>Epilepsy</b> — recurrent unprovoked <b>generalized tonic-clonic seizures</b> (focal to bilateral tonic-clonic ถ้ามี aura) · Ddx: provoked seizure (CNS infection, alcohol withdrawal, metabolic), convulsive syncope, PNES",
   exp:"Ix: EEG, MRI brain (epilepsy protocol), glucose/electrolytes · รักษา: เริ่ม antiseizure medication (เช่น valproate ในชายที่ generalized; levetiracetam/lamotrigine เป็นทางเลือก) · แนะนำ: นอนพอ งดเหล้า ห้ามขับรถจนกว่าไม่ชักตามระยะที่กำหนด หลีกเลี่ยงว่ายน้ำ/ที่สูงคนเดียว",
   rubric:"ตอบ seizure โดยไม่ระบุ epilepsy (เป็นซ้ำ unprovoked) = บางส่วน",
   pts:[CR(P("Epilepsy","epilep","ลมชัก")),P("Generalized tonic-clonic seizure","tonic.?clonic","\\bgtc","generalized"),P("Differential: provoked seizure / syncope / PNES","provoked","syncope","pnes","psychogenic")]})
 ),
 interp:"History taking: seizure — ก่อน/ขณะ/หลัง, เคยเป็น/ชักแบบอื่น, provoking factors, family history → epilepsy",
 summary:["ซักจาก eyewitness: prodrome → ขณะชัก (นาน กัดลิ้น ปัสสาวะราด) → postictal confusion","แยก syncope: อาการนำหน้ามืด หมดสติสั้น ฟื้นเร็วไม่สับสน","Epilepsy = unprovoked ≥ 2 ครั้งห่าง > 24 ชม. → EEG, MRI, ASM"]}),

/* ===== สถานี 22 ===== */
Co({page:7,orig:"22",topic:"pe",sub:"Pulse/BP",ex:1,title:"Blood pressure measurement — preparation, technique and reporting",seen:"SI131 Ro409–412 ข้อ 9 (วัดความดัน — เตรียมผู้ป่วย เทคนิค รายงานผล)",
 stem:`Demonstrate how to measure this patient's blood pressure, including checking the patient's readiness, and report the result.`,
 gray:"22. วัด BP · - ตรวจสอบว่าพร้อมมั้ย : นั่งพัก, ชา, กาแฟ, บุหรี่, กลั้นปสว.? · - ท่าวัด : ผ่อนคลาย หลังพิง เท้าวางพื้น · - แขนตรงกับ ♡ · - คลำชีพจรก่อนพัน cuff : cuff ~ brachial a. · - คลำก่อน → SBP · - ฟัง : เลยเส้นไป SBP ~ 20(?) mmHg · - รายงานผล __/__ mmHg (ไฮไลต์เหลือง)*",
 flag:"บทผู้ป่วย (sp) และค่าความดันที่ผู้คุมบอก Claude แต่ง · ตัวเลขในขั้น \"ฟัง\" อ่านไม่ชัด (น่าจะ 20 mmHg)",
 notes:"ผู้จดเขียนลำดับ: ตรวจความพร้อม (นั่งพัก, ชา, กาแฟ, บุหรี่, กลั้นปัสสาวะ) → ท่าวัด (ผ่อนคลาย หลังพิง เท้าวางพื้น) → แขนระดับหัวใจ → คลำชีพจรก่อนพัน cuff ให้ cuff ตรง brachial a. → คลำหา SBP ก่อน → ฟัง โดยบีบเลย SBP ไป ~20 mmHg → รายงานผล __/__ mmHg (ไฮไลต์เหลือง + ดาว = ต้องรายงานหน่วย mmHg)",
 sp:"ผู้ป่วยจำลองนั่งรอ มีเครื่องวัดความดันแบบฟังเสียง + หูฟัง + cuff หลายขนาด · ถ้าผู้สอบถาม: นั่งพักมาแล้ว 10 นาที ไม่ได้ดื่มชา/กาแฟ ไม่สูบบุหรี่ ไม่ปวดปัสสาวะ · ค่าที่วัดได้ให้ผู้สอบรายงานตามจริง (หรือผู้คุมบอก palpatory SBP 130 และค่าที่ฟังได้ 132/84 mmHg)",
 parts:S(
  B("22.1 Check readiness and position the patient.",3,{tags:["pe"],
   ans:"แนะนำตัว ขออนุญาต · <b>ตรวจความพร้อม</b>: <b>นั่งพัก ≥ 5 นาที</b>, งด<b>ชา กาแฟ บุหรี่</b> และการออกกำลังกาย ≥ 30 นาทีก่อนวัด, <b>ไม่กลั้นปัสสาวะ</b> · <b>ท่าวัด</b>: นั่งผ่อนคลาย <b>หลังพิงพนัก เท้าวางราบกับพื้น</b> ไม่ไขว่ห้าง ไม่พูดคุย · <b>แขนวางบนโต๊ะ cuff อยู่ระดับหัวใจ</b> · ถอดเสื้อแขนที่รัด",
   exp:"กลั้นปัสสาวะ พูดคุย ไขว่ห้าง หลังไม่พิง แขนต่ำกว่าระดับหัวใจ ทำให้ BP สูงเกินจริง",
   pts:[CR(P("Rest seated ≥ 5 min","นั่งพัก","พัก","rest","5 (min|นาที)")),P("No tea, coffee, smoking for 30 min; empty bladder","น้ำชา","ดื่มชา","ชา ?,","ชา ?กาแฟ","\\btea\\b","กาแฟ","coffee","caffeine","บุหรี่","smok","ปัสสาวะ","bladder"),P("Back supported, feet flat, relaxed","หลังพิง","พิง","เท้า","feet","ผ่อนคลาย","ไขว่ห้าง"),P("Arm at heart level","ระดับหัวใจ","ตรงกับหัวใจ","heart level")]}),
  B("22.2 Measure the blood pressure and report the result.",6,{tags:["pe"],
   ans:"<b>เลือก cuff ให้เหมาะ</b> (bladder ยาว ≥ 80% และกว้าง ~40% ของรอบแขน) · <b>คลำ brachial pulse ก่อนพัน cuff</b> ให้กึ่งกลาง bladder อยู่ตรง <b>brachial artery</b> ขอบล่างเหนือข้อพับศอก 2–3 cm · <b>คลำ radial pulse</b> บีบลมจนชีพจรหาย = <b>palpatory SBP</b> → ปล่อยลมหมด · วางหูฟังบน brachial a. <b>บีบสูงกว่า palpatory SBP 20–30 mmHg</b> ปล่อยลม 2–3 mmHg/วินาที · <b>Korotkoff phase I = SBP, phase V (เสียงหาย) = DBP</b> · วัดซ้ำ 2 ครั้งห่าง 1–2 นาทีแล้วเฉลี่ย · <b>รายงานผลเป็น __/__ mmHg</b> + แขนที่วัด + ท่า + แปลผล",
   exp:"การคลำหา palpatory SBP ก่อนช่วยป้องกันการอ่านผิดจาก <b>auscultatory gap</b> · เกณฑ์ office BP (Thai HT guideline 2019): HT ≥ 140/90 mmHg",
   rubric:"ผู้จดไฮไลต์: รายงานผลต้องมีหน่วย mmHg · ไม่คลำหา SBP ก่อนฟัง หักคะแนน",
   pts:[H("Cuff",25),P("Choose the correct cuff size","cuff size","ขนาด","เลือก cuff","รอบแขน"),CR(P("Palpate the brachial artery and place the cuff over it","brachial")),
    H("วัด",50),CR(P("Palpatory SBP first (radial pulse)","palpat","คลำ.{0,10}(sbp|ก่อน)","radial")),P("Inflate 20–30 mmHg above palpatory SBP","2[0-9] ?mmhg","20[-–]30","เกิน","เลย"),P("Deflate 2–3 mmHg/s; Korotkoff I = SBP, V = DBP","korotkoff","phase","2[-–]3 ?mmhg","ปล่อยลม"),P("Repeat and average","ซ้ำ","repeat","เฉลี่ย","average"),
    H("รายงาน",25),CR(P("Report the result in mmHg","mmhg","รายงาน","report"))]})
 ),
 interp:"Skill station: วัด BP แบบฟังเสียง — ตรวจความพร้อม ท่า แขนระดับหัวใจ คลำ brachial/palpatory SBP ก่อน ฟัง รายงานเป็น mmHg",
 summary:["ความพร้อม: นั่งพัก 5 นาที, งดชา/กาแฟ/บุหรี่ 30 นาที, ไม่กลั้นปัสสาวะ, หลังพิง เท้าราบ แขนระดับหัวใจ","คลำ brachial ก่อนพัน cuff; คลำ radial หา palpatory SBP แล้วบีบเกิน 20–30 mmHg","Korotkoff I = SBP, V = DBP · รายงาน __/__ mmHg"]}),

/* ===== สถานี 23 ===== */
Co({page:8,orig:"23",topic:"skin",sub:"Drug eruption",title:"Skin lesions on the palms and soles — describe and diagnose",
 stem:`A photograph of the skin lesions is shown.<br>1. Describe the skin lesions.<br>2. What is the most likely diagnosis?`,
 gray:"Skin มีรูปมาให้ : ให้บรรยาย + diag · 23. multiple discrete round annular erythematous plaque + .... + .... at palms and soles · # Erythema multiforme",
 flag:NOIMG+" · ไฟล์ไม่บอกประวัติผู้ป่วย · ผู้จดเว้นคำบรรยายไว้ 2 ช่อง (\"+ .... + ....\") — Claude เติมลักษณะ target lesion",
 notes:"คำตอบผู้จด: multiple discrete round annular erythematous plaque + .... + .... at palms and soles (เว้นว่างไว้ 2 จุด) → # Erythema multiforme · หัวข้อ \"Skin มีรูปมาให้: ให้บรรยาย + diag\" เขียนไว้เหนือสถานีนี้",
 opinion:"sub \"Drug eruption\" ใช้เพราะ EM อยู่ในกลุ่ม reactive/cutaneous reaction ในรายการ sub — แต่ EM ส่วนใหญ่ (~90%) เกิดตามหลังการติดเชื้อ (HSV) ไม่ใช่ยา",
 parts:S(
  B("23.1 Describe the skin lesions.",4,{tags:["skin"],
   ans:"<b>Multiple discrete, well-defined, round erythematous papules/plaques</b> with <b>typical target (iris) lesions</b> — <b>3 concentric zones</b>: ตรงกลางสีคล้ำ (dusky) ± ตุ่มน้ำ/สะเก็ด, วงกลางบวมซีด (pale edematous ring), วงนอกแดง (erythematous rim) · กระจาย<b>สมมาตร</b>ที่ <b>palms and soles</b> (acral) ± extensor ของแขนขา · ดู mucosa (ปาก ตา อวัยวะเพศ)",
   exp:"Typical target = 3 zones ขอบชัด · atypical raised target (2 zones) พบใน EM ได้ · atypical flat target/purpuric macules กระจายที่ลำตัว + mucosa = SJS/TEN",
   rubric:"ได้เต็ม = บรรยายรูปร่าง/สี/จำนวน + target lesion 3 zones + ตำแหน่ง palms and soles",
   pts:[P("Multiple discrete round erythematous plaques","multiple","discrete","round","erythemat","plaque"),CR(P("Target (iris) lesions with 3 concentric zones","target","iris","concentric","3 zone","three zone","dusky")),P("Palms and soles (acral, symmetric)","palm","sole","acral","ฝ่ามือ","ฝ่าเท้า")]}),
  B("23.2 What is the most likely diagnosis?",3,{tags:["skin"],
   ans:"<b>Erythema multiforme</b> (EM minor ถ้าไม่มี/มี mucosa เล็กน้อย; EM major ถ้ามี mucosa ≥ 1 ตำแหน่งชัดเจน) · Ddx: SJS, urticaria (หายใน 24 ชม.), fixed drug eruption, secondary syphilis (palms/soles), annular urticarial lesions",
   exp:"สาเหตุ: <b>HSV</b> พบบ่อยที่สุด (~90% เป็นการติดเชื้อ), <i>Mycoplasma pneumoniae</i>, ยา (ส่วนน้อย) · รักษา: symptomatic (antihistamine, topical steroid), หยุดยาที่สงสัย · EM เกิดซ้ำจาก HSV → acyclovir/valacyclovir suppression",
   pts:[CR(P("Erythema multiforme","erythema multiforme","\\bem\\b")),P("Associated with HSV infection","hsv","herpes","mycoplasma")]})
 ),
 interp:"Skin: target lesions 3 zones ที่ palms/soles → erythema multiforme (HSV-associated)",
 summary:["Typical target lesion: dusky center + pale edematous ring + erythematous rim","EM: acral symmetric, สาเหตุหลัก HSV · SJS/TEN: atypical flat target + mucosa + ลำตัว","Ddx palms/soles: secondary syphilis, hand-foot-mouth"]}),

/* ===== สถานี 24 ===== */
Co({page:8,orig:"24",topic:"hx",sub:"Palpitation",ex:1,title:"History taking — palpitation",seen:"คล้าย SI133 Ro403–404 ข้อ 4 (ใจสั่น 6 เดือน → hyperthyroidism)",
 stem:`A 30-year-old woman presents with palpitation for 3 months. Take a focused history, then give your most likely diagnosis.`,
 gray:"24. Hx taking · ใจสั่น · - สั่นยังไง - เป็นแค่ไหน - ทำยังไงถึงหาย - เป็นตอนไหน(?) · Thyrotoxicosis · - หงุดหงิดง่าย, แขนอ่อนแรง(?) - ขี้ร้อน(?), ลด นน. - ชา, กาแฟ, ยาแก้หวัด - Fam.hx : Stroke(?) - (ว่าง) · (คอลัมน์ขวา) - ปจด. - ก.ตั้งครรภ์ · # Thyrotoxicosis",
 flag:"⚠ อายุ/เพศ ระยะเวลา และบทผู้ป่วย (sp) Claude แต่งให้ตรงกับคำตอบผู้จด (thyrotoxicosis)",
 notes:"ผู้จดเขียนรายการคำถามแบ่ง 2 ส่วน: ลักษณะใจสั่น และอาการ thyrotoxicosis + ปจด./การตั้งครรภ์ · คำที่อ่านไม่ชัด: \"แขนอ่อนแรง\", \"ขี้ร้อน\", \"Stroke\" (?) · Dx ผู้จด: Thyrotoxicosis",
 sp:"หญิง 30 ปี ใจสั่น 3 เดือน รู้สึกหัวใจเต้นเร็วแรงสม่ำเสมอ เป็นตลอดวัน เป็นมากขึ้นเวลาทำงาน ไม่ได้เริ่ม-หยุดทันที นั่งพักแล้วดีขึ้นเล็กน้อย · ไม่เคยเป็นลม ไม่เจ็บหน้าอก · หงุดหงิดง่าย นอนไม่ค่อยหลับ มือสั่น · ขี้ร้อน เหงื่อออกมาก · กินเยอะแต่น้ำหนักลด 5 kg ใน 3 เดือน · ถ่ายบ่อยขึ้นวันละ 2–3 ครั้ง · ขึ้นบันไดแล้วต้นขาล้า · ประจำเดือนมาน้อยลงและห่างขึ้น · ไม่ได้ตั้งครรภ์ (ประจำเดือนล่าสุด 3 สัปดาห์ก่อน) · ดื่มกาแฟวันละ 1 แก้วเหมือนเดิม ไม่ได้กินยาแก้หวัด/ยาลดน้ำหนัก · ตาไม่โปน · แม่เป็นไทรอยด์เป็นพิษ",
 parts:S(
  B("24.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>ลักษณะใจสั่น:</b> <b>สั่นยังไง</b> (เร็ว/ช้า, สม่ำเสมอ/ไม่สม่ำเสมอ — ให้เคาะจังหวะ), เริ่ม-หยุดทันทีหรือค่อยเป็น, <b>เป็นนานแค่ไหน</b> ถี่แค่ไหน, <b>เป็นตอนไหน</b>/ตัวกระตุ้น, <b>ทำยังไงถึงหาย</b> (vagal maneuver หาย = SVT) · <b>อาการเตือนอันตราย:</b> เป็นลม เจ็บหน้าอก เหนื่อย · <b>Thyrotoxicosis:</b> <b>หงุดหงิดง่าย</b> นอนไม่หลับ มือสั่น, <b>ขี้ร้อน</b> เหงื่อออก, <b>น้ำหนักลด</b>ทั้งที่กินเยอะ, ถ่ายบ่อย, <b>แขนขาอ่อนแรง</b> (proximal myopathy), คอโต ตาโปน · <b>ประจำเดือน</b> (oligomenorrhea), <b>การตั้งครรภ์</b> (hCG-mediated, ซีด) · <b>สาเหตุอื่น:</b> <b>ชา กาแฟ ยาแก้หวัด</b> (pseudoephedrine), ยาลดน้ำหนัก, alcohol, ซีด/เลือดออก, น้ำตาลต่ำ, วิตกกังวล · โรคหัวใจเดิม · <b>ประวัติครอบครัว</b> (โรคไทรอยด์, หัวใจเต้นผิดจังหวะ/เสียชีวิตกะทันหัน)",
   exp:"ใจสั่นเร็วสม่ำเสมอตลอดวันค่อย ๆ เป็น = sinus tachycardia → หาสาเหตุ (thyrotoxicosis, anemia, ยา/caffeine, anxiety) · เริ่ม-หยุดทันที = PSVT · ไม่สม่ำเสมอ = AF (thyrotoxicosis ในผู้สูงอายุ)",
   rubric:"ได้เต็ม = ลักษณะใจสั่น + อาการ thyrotoxicosis ≥ 3 อย่าง + ประจำเดือน/ตั้งครรภ์ + ชา/กาแฟ/ยา + family history",
   pts:[H("ลักษณะใจสั่น",35),P("Character: rate and regularity","ยังไง","เร็ว","สม่ำเสมอ","regular","rate","จังหวะ"),P("Duration, frequency, onset/offset","นาน","ถี่","แค่ไหน","duration","frequen","ทันที"),P("Timing and what relieves it","ตอนไหน","ทำยังไง","หาย","reliev","trigger"),P("Red flags: syncope, chest pain, dyspnea","เป็นลม","syncope","เจ็บหน้าอก","chest pain","เหนื่อย"),
    H("Thyrotoxicosis",35),CR(P("Heat intolerance / sweating","ขี้ร้อน","heat","เหงื่อ","sweat")),CR(P("Weight loss despite appetite","น้ำหนักลด","นน\\.? ?ลด","ลด ?นน","weight loss")),P("Irritability, tremor, insomnia","หงุดหงิด","irritab","มือสั่น","tremor","นอนไม่หลับ"),P("Proximal weakness, diarrhea, goiter, eye symptoms","อ่อนแรง","weak","ถ่ายบ่อย","คอโต","goiter","ตาโปน"),
    H("อื่น ๆ",30),P("Menstruation and pregnancy","ประจำเดือน","ปจด","menstru","ตั้งครรภ์","pregnan"),P("Tea, coffee, cold medicines, other drugs","น้ำชา","ดื่มชา","ชา ?,","ชา ?กาแฟ","\\btea\\b","กาแฟ","coffee","caffeine","ยาแก้หวัด","pseudoephedrine","ยา(แก้|สมุนไพร|ที่|อะไร|ประจำ|ใหม่|ขับ|ชุด|ลด|ต้ม)","(กิน|ใช้|ประวัติ|ซื้อ)ยา"),P("Family history","family","fam\\.? ?hx","ครอบครัว","แม่","พ่อ")]}),
  B("24.2 What is your most likely diagnosis?",3,{tags:["hx"],
   ans:"<b>Thyrotoxicosis</b> (น่าจะเป็น <b>Graves' disease</b> — หญิงอายุน้อย + ประวัติครอบครัว) ทำให้ sinus tachycardia · Ddx: toxic multinodular goiter/toxic adenoma, painless/subacute thyroiditis, ยา/caffeine, anxiety, PSVT",
   exp:"Ix: <b>TSH (ต่ำ), FT4/FT3 (สูง)</b>, TRAb, EKG · ควบคุมอาการ: propranolol · รักษา: methimazole (ไตรมาสแรกของการตั้งครรภ์ใช้ PTU), radioactive iodine, ผ่าตัด",
   pts:[CR(P("Thyrotoxicosis / hyperthyroidism","thyrotox","hyperthyro","ไทรอยด์เป็นพิษ")),P("Graves' disease","graves")]})
 ),
 interp:"History taking: palpitation — ลักษณะใจสั่น + red flags + อาการ thyrotoxicosis + ประจำเดือน/ตั้งครรภ์ + ยา/caffeine → thyrotoxicosis",
 summary:["ใจสั่น: เร็ว/ช้า สม่ำเสมอไหม เริ่ม-หยุดทันทีไหม นานเท่าไร หายด้วยอะไร + red flags","Thyrotoxicosis: ขี้ร้อน เหงื่อ น้ำหนักลดทั้งที่กินเยอะ หงุดหงิด มือสั่น proximal weakness ประจำเดือนน้อย","อย่าลืม: ตั้งครรภ์, ชา/กาแฟ/ยาแก้หวัด, family history → TSH, FT4"]}),

/* ===== สถานี 25 ===== */
Co({page:8,orig:"25",topic:"img",sub:"Bone/joint film",title:"Knee radiograph (AP view) — describe and diagnose",seen:"SI131 Ro417–420 ข้อ 23 (film เข่า → bilateral OA knees)",
 stem:`An AP radiograph of both knees is shown.<br>1. Describe the findings.<br>2. What is the most likely diagnosis?`,
 gray:"25. Film เข่า AP · - Joint sp. narrowing at medial side both knees · - subchondral bone sclerosis both knees · - Marginal osteophyte Tibia, Femur both side · - normal bone density · - Genu varum · # OA both knees.",
 flag:NOIMG+" · ไฟล์ไม่บอกประวัติผู้ป่วย",
 notes:"คำตอบผู้จด: joint space narrowing at medial side both knees, subchondral bone sclerosis both knees, marginal osteophyte tibia/femur both sides, normal bone density, genu varum → # OA both knees",
 parts:S(
  B("25.1 Describe the findings.",4,{tags:["img"],
   ans:"AP view ทั้งสองเข่า: <b>asymmetric joint space narrowing, medial compartment</b> ทั้งสองข้าง · <b>subchondral sclerosis</b> · <b>marginal osteophytes</b> ที่ tibia และ femur ทั้งสองข้าง · <b>normal bone density</b> (ไม่มี periarticular osteopenia) · <b>genu varum</b> · ไม่มี erosion, ไม่มี chondrocalcinosis",
   exp:"OA: JSN ไม่สมมาตร + osteophyte + subchondral sclerosis/cyst + bone density ปกติ · RA: JSN สมมาตรทั้งข้อ + periarticular osteopenia + erosion ไม่มี osteophyte · Kellgren-Lawrence grade 0–4 (grade 2 = definite osteophyte, 3 = moderate JSN + multiple osteophytes + sclerosis, 4 = marked JSN + deformity)",
   rubric:"ได้เต็ม = JSN medial + sclerosis + osteophyte + bone density + alignment (genu varum)",
   pts:[CR(P("Joint space narrowing, medial compartment","joint space","\\bjsn\\b","narrow","medial")),P("Subchondral sclerosis","subchondral","sclerosis"),CR(P("Marginal osteophytes","osteophyt")),P("Normal bone density","bone density","density","osteopenia"),P("Genu varum","varum","varus","ขาโก่ง")]}),
  B("25.2 What is the most likely diagnosis?",2,{tags:["img"],
   ans:"<b>Bilateral knee osteoarthritis</b> (primary OA, medial compartment predominant with genu varum)",
   exp:"รักษา: ลดน้ำหนัก, ออกกำลังกล้ามเนื้อ quadriceps, topical NSAID/paracetamol, oral NSAID ระยะสั้น, intra-articular steroid · รุนแรงหรือไม่ตอบสนอง → total knee arthroplasty",
   pts:[CR(P("Osteoarthritis","osteoarthrit","\\boa\\b","ข้อเข่าเสื่อม")),P("Both knees","both","bilateral","สองข้าง")]})
 ),
 interp:"Bone/joint film: medial JSN + sclerosis + osteophytes + normal density + genu varum → bilateral knee OA",
 summary:["OA: JSN ไม่สมมาตร (medial) + osteophyte + subchondral sclerosis + bone density ปกติ","RA: JSN สมมาตร + periarticular osteopenia + erosion","Medial compartment OA → genu varum"]})

);
})();
