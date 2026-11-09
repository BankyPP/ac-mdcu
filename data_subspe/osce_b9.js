(function(){
/* Surgery OSCE ข้อสอบเก่า AC — MDCU65 RoA (Sx 1/55) · ไฟล์ GSUP4K (01_5_MCQs_Key_4.pdf) หน้า 267–268
   หน้า 266–267 ส่วนบน = MCQ/หัวข้อ MCQ ที่จำโจทย์ไม่ได้ (รายการ 1–17 "หน้านี้แบบเป็นหัวข้อที่ออกนะ") → ไม่ทำ (นอกขอบเขต OSCE)
   รูปแบบที่ไฟล์บอก (หน้า 267): OSCE แบ่งเป็น 2 ตอน แบ่งครึ่งสอบ · ตอนที่ 1 = ตอบคำถามใน powerpoint ข้อละ 4–5 (?) นาที → sec:"PowerPoint" orig "PPT n"
     · ตอนที่ 2 = ปฏิบัติ ข้อละ 3 นาที → sec:"OSCE" orig "n"
   แต่ละตอนแบ่ง "ข้อสอบเก่า" / "ข้อสอบใหม่" (ผู้จดหมายถึงสถานีที่เคยออกในปีก่อน vs สถานีใหม่) — ใส่ทุกสถานีเป็นของชุดนี้ (ต่างปี = ต่างข้อ)
   ไฟล์ใช้ bullet ไม่มีเลขข้อ → Claude ให้เลขตามลำดับในหน้า: PPT 1–9 = ข้อสอบเก่า, PPT 10 = ข้อสอบใหม่ (แผลแทงใบหน้า; บรรทัด "ทดสอบยังไง" ต้นหน้า 268 คือคำถามต่อของข้อนี้)
     OSCE 1–12 = ข้อสอบเก่า, OSCE 13–14 = ข้อสอบใหม่ · "Instrument 2 ข้อ" แยกเป็น OSCE 3 และ 4 (ไฟล์ไม่บอกชื่อเครื่องมือ — Claude เลือก)
   คำแนะนำทั่วไปของตอนที่ 2 (แนะนำตัวทุกครั้ง, ตรวจท้องเข้าทางขวา, ฟังก่อนคลำ, เตรียม stethoscope, ถอดนาฬิกา) ไม่ใช่สถานี → ใส่ใน notes ของสถานีที่เกี่ยวข้อง
   หน้าเป็นข้อความพิมพ์ (recall) ไม่มีรูป/ลายมือ/ไฮไลต์ในส่วน OSCE → ทุกสถานีที่อ้างรูปเป็น NOIMG, ไม่มี kimg · ไม่มีสถานีที่ข้าม */
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
const Co=o=>Object.assign({set:"MDCU65",ro:"RoA",file:"GSUP4K",opinion:""},o);
const OLD="ไฟล์จัดเป็น 'ข้อสอบเก่า' (เคยออกในปีก่อน)";
QB.push(

/* ===== PowerPoint 1 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 1",topic:"spot",sub:"Other spot",title:"Spot — progressive jaundice with liver tests: name the pattern and differential diagnoses",
 stem:`A 65-year-old man presents with progressive painless jaundice for 6 weeks.<br>Laboratory results: total bilirubin 14.2 mg/dL, direct bilirubin 11.8 mg/dL, ALP 620 U/L, GGT 540 U/L, AST 85 U/L, ALT 92 U/L, albumin 3.6 g/dL.<br>1. What term describes this laboratory pattern?<br>2. Give the differential diagnoses.`,
 gray:"ตอนที่ 1 ข้อสอบเก่า - Progressive painless jaundice ถาม Ddx กับ เรียกภาวะอะไรจากผลแลบที่ให้ >> direct hyperbilirubinemia",
 flag:"ค่าแลปและอายุทั้งหมด Claude แต่ง (ไฟล์ไม่ได้จดตัวเลข) · สไลด์นี้เป็นโจทย์ + ผลแลป ไม่มีรูป → sub Other spot",
 notes:OLD,
 parts:S(
  B("PPT 1.1 Name the laboratory pattern and give the differential diagnoses.",4,{tags:["spot"],key:"ไฟล์: direct hyperbilirubinemia (ไม่มีเฉลย Ddx)",
   ans:"<b>Direct (conjugated) hyperbilirubinemia</b> แบบ <b>cholestatic pattern</b> (ALP/GGT สูงเด่นกว่า AST/ALT) = <b>obstructive jaundice</b> · <b>DDx ของ painless progressive obstructive jaundice</b>: <b>periampullary tumors</b> — <b>carcinoma of head of pancreas</b>, <b>distal cholangiocarcinoma</b>, ampullary carcinoma, duodenal carcinoma · <b>hilar cholangiocarcinoma (Klatskin)</b> · metastatic LN ที่ porta hepatis · (benign: CBD stone ที่ไม่ปวด, benign stricture, chronic pancreatitis, PSC) · (intrahepatic cholestasis: drug-induced, PBC) · ขั้นต่อไป: <b>US</b> ดูท่อน้ำดีขยาย/ระดับอุดตัน → <b>CT (pancreas protocol)/MRCP</b>, CA 19-9",
   exp:"Direct bilirubin &gt;50% ของ total = conjugated hyperbilirubinemia · ตัวเหลืองไม่ปวด + น้ำหนักลด ในผู้สูงอายุ = มะเร็งจนกว่าจะพิสูจน์ได้ว่าไม่ใช่",
   rubric:"ได้ = direct/conjugated hyperbilirubinemia (cholestatic) + DDx มะเร็งอย่างน้อย 2 + รู้ว่าต้องทำ US/CT · บางส่วน = ตอบ hyperbilirubinemia ไม่ระบุชนิด",
   pts:[CR(P("Direct (conjugated) hyperbilirubinemia / cholestatic","direct","conjugat","cholesta","obstructive")),G("DDx (≥3)",3,P("CA head of pancreas","pancrea","ตับอ่อน"),P("Cholangiocarcinoma (distal/hilar)","cholangio","klatskin","ท่อน้ำดี"),P("Ampullary / duodenal CA","ampull","duoden","periampull"),P("CBD stone / stricture","stone","นิ่ว","stricture","choledocholith"),P("Drug-induced cholestasis / PBC / PSC","drug","\\bpbc\\b","\\bpsc\\b","primary biliary","sclerosing")),P("ตรวจต่อ: US → CT/MRCP","ultrasound","\\bus\\b","\\bct\\b","mrcp","ercp")]})
 ),
 interp:"แยก jaundice จากผลแลป (direct vs indirect, cholestatic vs hepatocellular) แล้วคิด DDx ของ painless obstructive jaundice",
 summary:["Direct bilirubin >50% + ALP/GGT สูง = cholestatic / obstructive","Painless progressive = periampullary CA / cholangiocarcinoma","Courvoisier: ถุงน้ำดีโตคลำได้ → อุดตันต่ำกว่า cystic duct","US → CT pancreas protocol / MRCP"]}),

/* ===== PowerPoint 2 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 2",topic:"spot",sub:"Imaging film",title:"Spot — abdominal ultrasound image: diagnosis and other uses",
 stem:`A transabdominal ultrasound image of the right upper quadrant of a 45-year-old woman with fever and right upper abdominal pain for 2 days is shown.<br>1. What is the diagnosis?<br>2. What other surgical conditions can this investigation help diagnose?`,
 gray:"- ให้ภาพ TAS ถามว่า Dx ? ใช้ Dx โรคอะไรได้อีก >> Acute cholecystitis",
 flag:NOIMG+" · อายุ/อาการ Claude เติม",imgAlt:"ภาพอัลตราซาวด์ช่องท้องด้านขวาบน เห็นถุงน้ำดี",
 notes:OLD+" · TAS = transabdominal sonography",
 parts:S(
  B("PPT 2.1 Diagnosis (with the ultrasound findings).",3,{tags:["spot"],key:"ไฟล์: Acute cholecystitis",
   ans:"<b>Acute calculous cholecystitis</b> · ลักษณะ US: <b>gallstones</b> (echogenic + posterior acoustic shadow, เคลื่อนตามท่า) หรือนิ่วติดที่คอถุงน้ำดี, <b>ผนังถุงน้ำดีหนา &gt;4 mm</b>, <b>pericholecystic fluid</b>, ถุงน้ำดีโตตึง, <b>sonographic Murphy's sign</b> บวก · (Tokyo Guidelines 2018: local sign + systemic inflammation + imaging = definite)",
   exp:"รักษา: NPO, IV fluid, antibiotics, analgesia → <b>early laparoscopic cholecystectomy</b> (ภายใน 72 ชม.–1 สัปดาห์) ในผู้ที่ทนผ่าตัดได้ · เสี่ยงสูง/รุนแรง → percutaneous cholecystostomy",
   rubric:"ได้ = acute cholecystitis + ลักษณะ US ≥2",
   pts:[CR(P("Acute (calculous) cholecystitis","cholecystitis","ถุงน้ำดีอักเสบ")),G("ลักษณะ US (≥2)",2,P("Gallstone + acoustic shadow","stone","นิ่ว","shadow"),P("GB wall thickening","wall","ผนัง","thicken","หนา"),P("Pericholecystic fluid","pericholecyst","fluid","น้ำรอบ"),P("Sonographic Murphy's sign","murphy"),P("GB distension","distend","distens","ถุงน้ำดีโต"))]}),
  B("PPT 2.2 Other surgical conditions this investigation can diagnose.",2,{tags:["spot"],key:"ไฟล์ถาม 'ใช้ Dx โรคอะไรได้อีก' (ไม่มีเฉลย)",
   ans:"<b>Hepatobiliary</b>: gallstone/choledocholithiasis (ท่อน้ำดีขยาย), obstructive jaundice (ระดับการอุดตัน), liver abscess, liver mass/HCC, hydatid · <b>Pancreas</b>: pancreatitis (หานิ่ว), pseudocyst · <b>อื่น ๆ</b>: <b>appendicitis</b> (โดยเฉพาะเด็ก/หญิงตั้งครรภ์), <b>FAST</b> ใน blunt trauma (free fluid, hemopericardium), <b>AAA</b>, <b>hydronephrosis</b>/นิ่วไต, intussusception (target sign), pyloric stenosis, ovarian torsion/ectopic pregnancy, abscess/collection, ascites",
   exp:"US เป็น first-line imaging ของ RUQ pain (ACR appropriateness) เพราะไม่มีรังสี ทำข้างเตียงได้ ไวต่อนิ่วถุงน้ำดี (~95%) แต่ไวต่ำต่อนิ่วใน distal CBD",
   rubric:"ได้ = ≥4 ภาวะครอบคลุมหลายระบบ (รวม FAST/appendicitis/AAA)",
   pts:[G("ภาวะอื่นที่ US วินิจฉัยได้ (≥4)",4,P("CBD stone / biliary dilatation","cbd","choledoch","ท่อน้ำดี","biliary dilat"),P("Liver abscess / mass","liver","ตับ","abscess","hcc"),P("Appendicitis","append","ไส้ติ่ง"),P("FAST in trauma","fast","trauma","free fluid","อุบัติเหตุ"),P("AAA","aaa","aneurysm","aorta"),P("Hydronephrosis / renal stone","hydroneph","kidney","ไต","renal"),P("Intussusception / pyloric stenosis","intussus","pyloric","target"),P("Pancreatitis / pseudocyst","pancrea","pseudocyst"),P("Ovarian / ectopic pregnancy","ovar","ectopic","รังไข่","ท้องนอกมดลูก"))]})
 ),
 interp:"อ่าน US ถุงน้ำดีอักเสบเฉียบพลัน และรู้ประโยชน์ของ US ในศัลยกรรม",
 summary:["Acute cholecystitis US: นิ่ว + ผนังหนา >4 mm + pericholecystic fluid + sonographic Murphy","รักษา: early lap chole · เสี่ยงสูง → cholecystostomy","US ใช้: ท่อน้ำดีขยาย, liver abscess, appendicitis, FAST, AAA, hydronephrosis, intussusception"]}),

/* ===== PowerPoint 3 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 3",topic:"spot",sub:"Imaging film",title:"Spot — intravenous pyelogram: describe the abnormality",seen:"คล้าย MDCU65 RoB PPT 6 (ภาพ IVP ถามความผิดปกติ)",
 stem:`An intravenous pyelogram (IVP) of a 40-year-old man with left colicky flank pain radiating to the groin is shown.<br>1. Describe the abnormality.<br>2. What is the diagnosis?`,
 gray:"- IVP อ่านถามความผิดปกติ",
 flag:"⚠ "+NOIMG+" · ไฟล์ไม่ได้บอกว่าความผิดปกติคืออะไร — Claude เลือกภาพนิ่วในท่อไตอุดตัน (พบบ่อยที่สุดใน IVP ของข้อสอบ) และแต่งอายุ/อาการ",imgAlt:"ฟิล์ม KUB และฟิล์ม IVP หลายช่วงเวลาของผู้ป่วยชาย",
 notes:OLD,
 parts:S(
  B("PPT 3.1 Describe the abnormality and give the diagnosis.",4,{tags:["spot"],
   ans:"<b>วิธีอ่าน IVP</b>: plain KUB (ก้อน radiopaque, กระดูก, เงา psoas/ไต) → nephrogram phase → pyelogram phase (calyces, pelvis, ureter) → bladder → post-void · <b>ภาพที่แต่ง</b>: KUB เห็นก้อน radiopaque เล็กตามแนวท่อไตซ้ายระดับ L3–4/ ใกล้ sacroiliac joint · IVP: <b>delayed nephrogram ฝั่งซ้าย</b> (dense/persistent nephrogram), <b>hydronephrosis + hydroureter ซ้ายเหนือตำแหน่งนิ่ว</b>, calyces ป้าน (blunting/clubbing), contrast หยุดที่ระดับนิ่ว · ฝั่งขวาปกติ · <b>Dx: Left obstructing ureteric calculus</b> with hydroureteronephrosis",
   exp:"ปัจจุบัน non-contrast CT KUB เป็นมาตรฐานวินิจฉัยนิ่วทางเดินปัสสาวะ (IVP ใช้น้อยลง) · นิ่ว &lt;5 mm มักหลุดเอง (medical expulsive therapy: tamsulosin) · ข้อบ่งชี้ด่วน: ติดเชื้อร่วม (obstructed infected kidney → PCN/DJ stent), ไตข้างเดียว, AKI, ปวดคุมไม่ได้",
   rubric:"ได้ = อ่านตามลำดับ + delayed nephrogram + hydroureteronephrosis เหนือระดับอุดตัน + ureteric stone · บางส่วน = บอก 'ไตบวมน้ำ' อย่างเดียว",
   pts:[P("อ่านเป็นลำดับ: KUB → nephrogram → pyelogram → bladder","kub","plain","nephrogram","pyelogram","ลำดับ"),CR(P("Delayed / persistent nephrogram ข้างที่อุดตัน","delay","persist","dense nephrogram")),CR(P("Hydronephrosis + hydroureter เหนือระดับอุดตัน","hydroneph","hydroureter","ไตบวม","blunt","club","dilat")),CR(P("Obstructing ureteric calculus","ureteric","ureteral","stone","calcul","นิ่ว"))]})
 ),
 interp:"อ่าน IVP อย่างเป็นระบบ และรู้ลักษณะของการอุดตันท่อไตเฉียบพลัน",
 summary:["อ่าน IVP: KUB → nephrogram → pyelogram → ureter → bladder → post-void","Acute obstruction: delayed dense nephrogram + hydroureteronephrosis เหนือจุดอุดตัน","มาตรฐานปัจจุบัน: NCCT KUB","Obstruction + infection → decompress ด่วน (PCN/DJ stent)"]}),

/* ===== PowerPoint 4 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 4",topic:"spot",sub:"Pediatric surgery",title:"Spot — newborn abdominal wall defect: management",
 stem:`A photograph of a newborn shows loops of bowel protruding through a small defect to the right of an intact umbilical cord, with no covering membrane.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"- Gastroschisis management?",
 flag:NOIMG+" · คำถาม 'diagnosis' Claude เติมเพื่อให้สไลด์สมบูรณ์",imgAlt:"รูปทารกแรกเกิดนอนหงาย เห็นบริเวณผนังหน้าท้อง",
 notes:OLD,
 parts:S(
  B("PPT 4.1 Diagnosis and management.",5,{tags:["spot"],key:"ไฟล์ระบุ: Gastroschisis (ไม่มีเฉลยการรักษา)",
   ans:"<b>Gastroschisis</b> (defect ด้านขวาของสายสะดือ ไม่มีถุงหุ้ม ลำไส้บวมหนามี peel) · <b>ทันทีหลังคลอด</b>: <b>คลุมลำไส้ด้วยถุงพลาสติก sterile (bowel bag)</b>/ห่อพลาสติกใส ไม่ใช้ผ้าชุบน้ำเกลือที่ทำให้ตัวเย็น · จัดท่า <b>นอนตะแคงขวา</b> ประคองลำไส้ไม่ให้หักพับ (กันขาดเลือด) · <b>ให้ความอบอุ่น</b> (เสียความร้อน/น้ำมาก) · <b>OG/NG decompression</b> · <b>IV fluid</b> ปริมาณมากกว่าปกติ + ติดตาม urine output · <b>IV antibiotics</b> · ดู perfusion ของลำไส้ · <b>ผ่าตัด</b>: <b>primary reduction + closure</b> ถ้าความดันในช่องท้องไม่สูงเกิน หรือ <b>staged reduction ด้วย preformed silo</b> แล้วปิดภายหลัง (sutureless/sutured closure) · ระวัง <b>abdominal compartment syndrome</b> · หลังผ่าตัด: <b>TPN</b> นาน (ลำไส้ทำงานช้า), ตรวจหา intestinal atresia (~10%)",
   exp:"Gastroschisis vs omphalocele: omphalocele อยู่ที่สะดือ มีถุงหุ้ม (amnion + peritoneum) สัมพันธ์กับความผิดปกติร่วม/โครโมโซม (trisomy 13/18, Beckwith-Wiedemann, หัวใจ) · gastroschisis ความผิดปกติร่วมน้อย ยกเว้น atresia; สัมพันธ์มารดาอายุน้อย",
   rubric:"ได้ = คลุมลำไส้ (bowel bag) + ท่าตะแคงขวา + อบอุ่น + NG + IV fluid + antibiotics + primary closure หรือ silo + TPN · บางส่วน = ไม่มีการดูแลก่อนผ่าตัด",
   pts:[CR(P("Gastroschisis","gastroschisis")),H("ดูแลทันทีหลังคลอด",50),CR(P("คลุมลำไส้ด้วยถุงพลาสติก sterile (bowel bag)","bag","ถุง","plastic","พลาสติก","wrap","คลุม")),P("ท่าตะแคงขวา ประคองลำไส้ไม่ให้พับ","ตะแคง","lateral","decubitus","kink","พับ"),P("ให้ความอบอุ่น + IV fluid มาก","warm","อบอุ่น","hypotherm","fluid","สารน้ำ"),P("NG/OG decompression + antibiotics","\\bng\\b","\\bog\\b","orogastric","nasogastric","antibiot"),
    H("ผ่าตัด + หลังผ่าตัด",50),CR(P("Primary closure หรือ staged silo","primary","silo","staged","ปิดผนัง")),P("ระวัง abdominal compartment syndrome","compartment","intra.?abdominal pressure"),P("TPN / หา atresia ร่วม","tpn","parenteral","atresia")]})
 ),
 interp:"Gastroschisis: ป้องกันการเสียความร้อน/น้ำและการขาดเลือดของลำไส้ก่อนผ่าตัด แล้วปิดผนังแบบ primary หรือ silo",
 summary:["Gastroschisis: ขวาของสายสะดือ ไม่มีถุง · atresia ~10%","Bowel bag + ตะแคงขวา + อบอุ่น + NG + IV fluid มาก + ATB","Primary closure หรือ preformed silo → ปิดภายหลัง","Omphalocele: มีถุง ความผิดปกติร่วมมาก"]}),

/* ===== PowerPoint 5 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 5",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — skin lesion: describe the lesion",
 stem:`A photograph of a chronic non-healing lesion on the lower leg of a 60-year-old farmer is shown. It developed on an old burn scar.<br>1. Describe the lesion.<br>2. What is the most likely diagnosis and how would you confirm it?`,
 gray:"- Squamous cell CA บรรยาย lesion",
 flag:NOIMG+" · ตำแหน่ง/ประวัติแผลเป็นจากไฟไหม้ Claude เติม · คำถามย่อยการวินิจฉัย/ยืนยันผล Claude เติม",imgAlt:"รูปรอยโรคเรื้อรังที่ผิวหนังบริเวณขาส่วนล่าง",
 notes:OLD,
 parts:S(
  B("PPT 5.1 Describe the lesion, then give the diagnosis and how to confirm it.",4,{tags:["spot"],key:"ไฟล์ระบุ: Squamous cell CA (ไม่มีเฉลยการบรรยาย)",
   ans:"<b>บรรยาย</b>: แผล (ulcer) เดี่ยว ขนาด ~4×3 cm ที่หน้าแข้ง บนผิวที่เป็นแผลเป็นเก่า · <b>ขอบนูนและม้วนออก (raised, everted edge)</b> แข็ง (indurated) ขอบไม่สม่ำเสมอ · <b>ฐานมีเนื้อยุ่ย (friable) เลือดออกง่าย</b> มี necrotic tissue/สะเก็ด keratin · ผิวรอบ ๆ ไม่มีสะเก็ดเงิน · (คลำต่อมน้ำเหลืองขาหนีบ) · <b>Dx: Squamous cell carcinoma ที่เกิดบนแผลเป็นเรื้อรัง (Marjolin's ulcer)</b> · <b>ยืนยัน</b>: <b>incisional/punch biopsy จากขอบแผล</b> (หลายตำแหน่ง) · ตรวจ inguinal LN (FNA ถ้าโต)",
   exp:"การบรรยาย ulcer: ตำแหน่ง ขนาด รูปร่าง ขอบ (sloping = venous/healing, punched-out = arterial/ischemic, undermined = TB, rolled/pearly = BCC, everted = SCC) ฐาน สิ่งที่หลั่ง ผิวรอบ LN · รักษา SCC: wide local excision margin 4–6 mm (high risk ≥6 mm/Mohs) ± LN dissection ถ้า node positive",
   rubric:"ได้ = บรรยายขอบ everted/indurated + ฐาน friable/เลือดออก + SCC (Marjolin) + biopsy จากขอบ · บางส่วน = บรรยายไม่ครบองค์ประกอบ",
   pts:[P("ตำแหน่ง ขนาด รูปร่าง","ตำแหน่ง","site","location","ขนาด","size","cm"),CR(P("ขอบนูนม้วนออก แข็ง (everted, indurated)","evert","ม้วนออก","raised","นูน","indurat","แข็ง")),P("ฐาน friable เลือดออกง่าย necrotic/keratin","friable","เลือดออก","bleed","necro","keratin","ยุ่ย"),CR(P("SCC / Marjolin's ulcer","squamous","\\bscc\\b","marjolin")),P("Biopsy จากขอบแผล + ตรวจ LN","biopsy","ตัดชิ้นเนื้อ","lymph","ต่อมน้ำเหลือง","\\bln\\b")]})
 ),
 interp:"บรรยาย ulcer อย่างเป็นระบบ (ขอบ ฐาน ผิวรอบ LN) และนึกถึง SCC บนแผลเป็นเรื้อรัง",
 summary:["บรรยาย ulcer: site, size, shape, edge, base, discharge, surrounding, LN","Edge: sloping (venous), punched-out (arterial), undermined (TB), rolled (BCC), everted (SCC)","Marjolin's ulcer = SCC บนแผลเป็นเรื้อรัง/แผลไฟไหม้","Biopsy จากขอบแผล · WLE margin 4–6 mm"]}),

/* ===== PowerPoint 6 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 6",topic:"spot",sub:"Pediatric surgery",title:"Spot — infant with prolonged jaundice: differential diagnosis and management",
 stem:`A photograph of a 7-week-old infant shows jaundice, a distended abdomen and a nappy with pale (acholic) stool. Direct bilirubin is 6.5 mg/dL.<br>1. Give the differential diagnoses.<br>2. Outline the investigations and management of the most likely diagnosis.`,
 gray:"- Biliary atresia DDx ? management?",
 flag:NOIMG+" · อายุ/ค่า direct bilirubin Claude แต่ง",imgAlt:"รูปทารกตัวเหลือง ท้องป่อง และผ้าอ้อมที่มีอุจจาระ",
 notes:OLD,
 parts:S(
  B("PPT 6.1 Differential diagnoses.",2,{tags:["spot"],key:"ไฟล์ระบุ: Biliary atresia (ไม่มีเฉลย DDx/management)",
   ans:"<b>Neonatal cholestasis</b> (direct bilirubin &gt;1 mg/dL หรือ &gt;20% ของ total) ร่วมกับอุจจาระซีด → <b>Biliary atresia</b> (ต้องคิดก่อนเสมอ) · <b>DDx</b>: <b>choledochal cyst</b>, <b>neonatal (idiopathic) hepatitis</b>, infection (TORCH, CMV, UTI/sepsis), <b>Alagille syndrome</b>, PFIC, <b>α1-antitrypsin deficiency</b>, galactosemia/metabolic, hypothyroidism, TPN-associated cholestasis, inspissated bile syndrome",
   exp:"ทารกที่ตัวเหลือง &gt;2 สัปดาห์ (ครบกำหนด) ต้องตรวจ direct bilirubin เสมอ · ใช้บัตรเทียบสีอุจจาระ (stool color card) คัดกรอง",
   rubric:"ได้ = biliary atresia + DDx ≥3 ที่เหมาะสม",
   pts:[CR(P("Biliary atresia","biliary atresia","ท่อน้ำดีตีบตัน","atresia")),G("DDx (≥3)",3,P("Choledochal cyst","choledochal","cyst"),P("Neonatal hepatitis","neonatal hepatitis","hepatitis","ตับอักเสบ"),P("Infection: TORCH / CMV / sepsis","torch","cmv","infect","sepsis"),P("Alagille syndrome","alagille"),P("α1-antitrypsin deficiency","antitrypsin","a1at","α1"),P("Metabolic: galactosemia / hypothyroid / PFIC","galactos","metabol","thyroid","pfic"))]}),
  B("PPT 6.2 Investigations and management.",4,{tags:["spot"],
   ans:"<b>Investigations</b>: LFT (direct bilirubin, GGT สูง) · <b>US</b> (fasting): ถุงน้ำดีเล็ก/ไม่เห็น/ไม่หดตัว, <b>triangular cord sign</b>, แยก choledochal cyst · <b>Hepatobiliary scintigraphy (HIDA)</b>: ตับจับสารดีแต่<b>ไม่ขับลงลำไส้</b> · <b>Liver biopsy</b>: bile duct proliferation, bile plug · <b>Intraoperative cholangiogram</b> = gold standard · <b>Management</b>: <b>Kasai portoenterostomy</b> ให้เร็วที่สุด — ผลดีที่สุดเมื่อทำ<b>ก่อนอายุ 60 วัน</b> · หลังผ่าตัด: ursodeoxycholic acid, vitamin A D E K, MCT formula, antibiotic prophylaxis ป้องกัน <b>cholangitis</b> (± steroid) · ติดตาม portal hypertension · Kasai ไม่สำเร็จ/ตับแข็ง → <b>liver transplantation</b> (biliary atresia = ข้อบ่งชี้ปลูกถ่ายตับที่พบบ่อยที่สุดในเด็ก)",
   exp:"Kasai: ตัด fibrous remnant ที่ porta hepatis แล้วต่อ Roux-en-Y jejunal limb กับ porta · ประมาณ 1/3 ไม่ต้องปลูกถ่ายตับในระยะยาว",
   rubric:"ได้ = US + HIDA/biopsy + cholangiogram + Kasai ก่อน 60 วัน + transplant ถ้าล้มเหลว · บางส่วน = ไม่บอกเวลา",
   pts:[P("US: GB เล็ก/ไม่เห็น, triangular cord sign","ultrasound","\\bus\\b","triangular","gallbladder","ถุงน้ำดี"),P("HIDA scan / liver biopsy","hida","scintig","biopsy","ชิ้นเนื้อ"),P("Intraoperative cholangiogram (gold standard)","cholangiogra","gold standard"),CR(P("Kasai portoenterostomy ก่อน 60 วัน","kasai","portoenterostomy","60 วัน","60 day")),P("ป้องกัน cholangitis + vitamin ADEK + ursodiol","cholangitis","adek","vitamin","urso"),P("Liver transplantation ถ้า Kasai ล้มเหลว","transplant","ปลูกถ่าย")]})
 ),
 interp:"ทารกตัวเหลืองนาน + อุจจาระซีด + direct hyperbilirubinemia = biliary atresia จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ → Kasai ก่อน 60 วัน",
 summary:["ตัวเหลือง >2 สัปดาห์ → ตรวจ direct bilirubin · อุจจาระซีด = red flag","DDx: choledochal cyst, neonatal hepatitis, TORCH, Alagille, α1AT","US (triangular cord) → HIDA → biopsy → IOC","Kasai <60 วัน · ล้มเหลว → liver transplant"]}),

/* ===== PowerPoint 7 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 7",topic:"spot",sub:"Breast",title:"Spot — red, tender breast: diagnosis and management",seen:"คล้าย MDCU66 RoD PPT 1 (รูป mastitis)",
 stem:`A photograph of the breast of a 30-year-old woman, 6 weeks postpartum, shows a red, swollen area in the upper outer quadrant. She has been treated with oral antibiotics for 5 days without improvement and now has a fluctuant, tender area.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"- Mastitis",
 flag:NOIMG+" · ไฟล์จดแค่คำว่า 'Mastitis' — ประวัติ/อาการ (ไม่ตอบสนองยา มีจุด fluctuant) และคำถาม Claude เติม เพื่อไม่ให้ซ้ำกับสไลด์ mastitis ของชุดอื่น",imgAlt:"รูปเต้านมข้างหนึ่งของหญิงหลังคลอด",
 notes:OLD,
 parts:S(
  B("PPT 7.1 Diagnosis and management.",4,{tags:["spot"],key:"ไฟล์ระบุหัวข้อ: Mastitis (ไม่มีเฉลย)",
   ans:"<b>Lactational mastitis ที่ลุกลามเป็น breast abscess</b> (ไม่ดีขึ้นหลังยาปฏิชีวนะ 48–72 ชม. + คลำได้ fluctuant) · <b>ยืนยัน</b>: <b>ultrasound</b> ดู collection · <b>รักษา</b>: <b>US-guided needle aspiration</b> (ซ้ำได้ทุก 2–3 วัน) เป็นทางเลือกแรก · abscess ใหญ่/หลายช่อง/ผิวหนังบางใกล้แตก/aspiration ไม่สำเร็จ → <b>incision & drainage</b> (กรีดตามแนวรัศมีหรือรอบ areola ห่างหัวนม) · ส่งหนองเพาะเชื้อ (MRSA) · ยาปฏิชีวนะต่อ (cloxacillin/cephalexin; MRSA → clindamycin/TMP-SMX) · <b>ให้นมต่อ</b>ได้ (ข้างที่เป็นถ้าแผลไม่อยู่ใกล้หัวนม; หรือปั๊มทิ้ง) · ยาแก้ปวด · ถ้าไม่ได้ให้นม/เป็นซ้ำ → แยก inflammatory breast cancer, periductal mastitis (สูบบุหรี่), granulomatous mastitis ด้วย biopsy",
   exp:"Lactational abscess มักอยู่ peripheral (S. aureus) · Non-lactational subareolar abscess สัมพันธ์กับการสูบบุหรี่ เป็นซ้ำ/เกิด mammary duct fistula ได้",
   rubric:"ได้ = mastitis → abscess + US + aspiration/I&D + antibiotic + ให้นมต่อ · บางส่วน = ให้ยาต่ออย่างเดียว",
   pts:[CR(P("Lactational mastitis → breast abscess","abscess","ฝี","mastitis")),P("Ultrasound ยืนยัน collection","ultrasound","\\bus\\b","อัลตราซาวด์"),CR(P("Needle aspiration / incision & drainage","aspirat","drain","i&d","incision","เจาะ","กรีด")),P("Antibiotic ต่อ + culture (MRSA)","antibiot","culture","mrsa","cloxacillin","cephalexin","clindamycin"),P("ให้นมต่อ/ปั๊มนม","ให้นม","breastfeed","ปั๊ม","pump")]})
 ),
 interp:"Mastitis ที่ไม่ดีขึ้นด้วยยา → คิด abscess → US + aspiration/I&D",
 summary:["Mastitis ไม่ดีขึ้น 48–72 ชม. / fluctuant → breast abscess","US → needle aspiration (ซ้ำได้) · ใหญ่/หลายช่อง → I&D","ยา anti-staph + เพาะเชื้อ · ให้นมต่อได้","ไม่ให้นม/ไม่หาย → biopsy แยกมะเร็ง"]}),

/* ===== PowerPoint 8 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 8",topic:"spot",sub:"Imaging film",title:"Spot — contrast study in an infant with bilious vomiting: diagnosis and management",seen:"คล้าย MDCU66 RoD PPT 9 และ MDCU65 RoB PPT 5 (ฟิล์ม midgut volvulus)",
 stem:`A 10-day-old neonate presents with sudden bile-stained vomiting. An upper gastrointestinal contrast study is shown.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"- Film midgut volvulus Dx? Management?",
 flag:NOIMG+" · อายุ/อาการ Claude เติม",imgAlt:"ฟิล์ม upper GI contrast study ของทารกแรกเกิด",
 notes:OLD,
 parts:S(
  B("PPT 8.1 Diagnosis (with the radiographic signs).",3,{tags:["spot"],key:"ไฟล์ระบุ: midgut volvulus (ไม่มีเฉลยการรักษา)",
   ans:"<b>Malrotation with midgut volvulus</b> · ลักษณะ UGI: <b>DJ junction อยู่ขวาต่อแนวกลาง/ต่ำกว่า duodenal bulb</b>, duodenum ไม่ข้ามแนวกลาง, <b>corkscrew appearance</b> ของ duodenum-jejunum ส่วนต้น หรือ <b>beak sign</b> (อุดตันสมบูรณ์) · plain film อาจเห็น double bubble + ลมปลายน้อย หรือปกติ · US: <b>whirlpool sign</b>, SMV อยู่ซ้ายของ SMA",
   exp:"UGI contrast study เป็น investigation of choice ในทารกอาเจียนน้ำดีที่อาการคงที่ · ถ้า peritonitis/shock → ผ่าตัดทันทีไม่ต้องรอภาพ",
   rubric:"ได้ = midgut volvulus (malrotation) + ลักษณะ DJ junction/corkscrew",
   pts:[CR(P("Malrotation with midgut volvulus","volvulus","malrotation")),P("DJ junction ผิดตำแหน่ง / corkscrew / beak / whirlpool","dj","duodenojejunal","corkscrew","beak","whirlpool","midline")]}),
  B("PPT 8.2 Outline the management.",4,{tags:["spot"],
   ans:"<b>Surgical emergency</b> · <b>Resuscitation</b>: NPO, <b>NG/OG decompression</b>, IV fluid bolus + แก้ electrolyte, <b>IV broad-spectrum antibiotics</b>, เตรียมเลือด · <b>Emergency laparotomy — Ladd's procedure</b>: (1) <b>detorsion ทวนเข็มนาฬิกา</b> (2) <b>ตัด Ladd's bands</b> ที่พาดผ่าน duodenum (3) <b>ขยายฐาน mesentery</b> (4) <b>appendectomy</b> (เพราะ appendix จะไปอยู่ซ้ายบน) (5) วาง <b>ลำไส้เล็กด้านขวา ลำไส้ใหญ่ด้านซ้าย</b> · ลำไส้ที่ขาดเลือดไม่ชัด → second-look ใน 24–48 ชม. แทนการตัดทิ้งมาก · ลำไส้ตายมาก → short bowel syndrome (TPN)",
   exp:"เวลาคือเนื้อลำไส้: volvulus ทำให้ SMA ถูกบิด ลำไส้เล็กทั้งหมดขาดเลือดได้ภายในไม่กี่ชั่วโมง",
   rubric:"ได้ = resuscitation + emergency Ladd's procedure ครบองค์ประกอบหลัก (detorsion ทวนเข็ม, ตัด bands, ขยาย mesentery, appendectomy)",
   pts:[P("Resuscitation: NG, IV fluid, antibiotics","\\bng\\b","\\bog\\b","fluid","สารน้ำ","antibiot","resusc"),CR(P("Emergency Ladd's procedure","ladd","emergen","ฉุกเฉิน","laparotom")),P("Detorsion ทวนเข็มนาฬิกา","counterclock","anticlock","ทวนเข็ม","detors"),P("ตัด Ladd's bands + ขยาย mesentery","band","mesenter","widen","ขยาย"),P("Appendectomy + วาง SB ขวา colon ซ้าย","appendectom","ตัดไส้ติ่ง","ลำไส้เล็กด้านขวา","small bowel on the right")]})
 ),
 interp:"Malrotation with midgut volvulus ต้องผ่าตัดฉุกเฉิน (Ladd's procedure) หลัง resuscitation อย่างรวดเร็ว",
 summary:["อาเจียนน้ำดีในทารก → UGI ด่วน","UGI: DJ junction ขวาต่อแนวกลาง, corkscrew, beak · US: whirlpool","Ladd's: detorsion ทวนเข็ม, ตัด bands, ขยาย mesentery, appendectomy, SB ขวา colon ซ้าย","ลำไส้ก้ำกึ่ง → second look"]}),

/* ===== PowerPoint 9 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 9",topic:"spot",sub:"Vascular/Ulcer",title:"Spot — leg pain on walking: diagnosis and physical examination",seen:"คล้าย MDCU66 RoD PPT 11 (รูป arterial occlusion: บรรยาย + PE ที่สำคัญ)",
 stem:`A 68-year-old man who smokes 40 pack-years complains of cramping pain in the right calf after walking about 100 metres, relieved by rest within a few minutes, for 6 months.<br>1. What is the diagnosis?<br>2. What physical examination would you perform?`,
 gray:"- ให้อาการ Dx >> Chronic artery occlusion PE?",
 flag:NOIMG+" · อาการในโจทย์ Claude แต่ง (ไฟล์จดแค่ 'ให้อาการ')",imgAlt:"สไลด์ข้อความประวัติผู้ป่วย",
 notes:OLD+" · 'PE?' = ถามการตรวจร่างกาย",
 parts:S(
  B("PPT 9.1 Diagnosis.",2,{tags:["spot"],key:"ไฟล์: Chronic artery occlusion",
   ans:"<b>Chronic lower limb arterial occlusive disease (peripheral arterial disease) — intermittent claudication</b> ของขาขวา จาก <b>atherosclerosis</b> · ปวดน่อง → รอยโรคระดับ <b>superficial femoral/popliteal artery</b> (ปวดก้น/ต้นขา → aortoiliac; Leriche syndrome = ปวดก้น + ชีพจร femoral หาย + impotence) · Fontaine IIa/IIb (Rutherford 1–3)",
   exp:"แยก neurogenic claudication (spinal stenosis): ปวดเมื่อยืนนาน ดีขึ้นเมื่อก้ม/นั่ง ไม่ใช่แค่หยุดเดิน · Critical limb-threatening ischemia = rest pain, แผล, gangrene",
   rubric:"ได้ = PAD/chronic arterial occlusion ที่ขาขวา + intermittent claudication + ระดับ femoropopliteal",
   pts:[CR(P("Chronic arterial occlusive disease / PAD (claudication)","peripheral arter","\\bpad\\b","claudica","arterial occlu","chronic limb","atheroscl")),P("ระดับรอยโรค femoropopliteal","femoral","poplit","\\bsfa\\b","femoropop")]}),
  B("PPT 9.2 Physical examination.",4,{tags:["spot"],key:"ไฟล์ถาม 'PE?' (ไม่มีเฉลย)",
   ans:"<b>Inspection</b> (เทียบสองข้าง): สีผิว, <b>ขนร่วง ผิวบางมัน เล็บหนา</b>, กล้ามเนื้อลีบ, <b>แผล</b> ที่ปลายนิ้ว/ส้นเท้า/ระหว่างนิ้ว, gangrene · <b>Palpation</b>: อุณหภูมิ (เย็นกว่า), <b>capillary refill</b>, <b>คลำชีพจร femoral, popliteal, dorsalis pedis, posterior tibial เทียบสองข้าง</b> · <b>Auscultation</b>: <b>bruit</b> ที่ femoral/abdominal aorta · <b>Buerger's test</b>: ยกขา 45° → ซีด (Buerger's angle &lt;20° = ischemia รุนแรง) → ห้อยขา → แดงคล้ำ (reactive hyperemia) · <b>Ankle-brachial index (ABI)</b>: &lt;0.9 = PAD, &lt;0.4 = critical · ตรวจระบบอื่น: BP แขนสองข้าง, หัวใจ (AF), AAA, carotid bruit",
   exp:"ABI &gt;1.3 = หลอดเลือดแข็งกดไม่ลง (เบาหวาน/CKD) → ใช้ toe-brachial index · การรักษาเบื้องต้น: หยุดบุหรี่, antiplatelet, statin, supervised exercise, cilostazol",
   rubric:"ได้ = ชีพจรทุกระดับเทียบสองข้าง + trophic changes + Buerger's test + ABI · บางส่วน = คลำชีพจรอย่างเดียว",
   pts:[P("Inspection: trophic changes, ulcer, gangrene","hair","ขนร่วง","shiny","trophic","ulcer","แผล","gangrene"),CR(P("คลำชีพจรทุกระดับเทียบสองข้าง","pulse","ชีพจร","femoral","poplit","dorsalis","tibial")),P("Temperature / capillary refill / bruit","อุณหภูมิ","temperat","capillary","bruit"),P("Buerger's test","buerger"),CR(P("Ankle-brachial index","\\babi\\b","ankle.?brachial"))]})
 ),
 interp:"Intermittent claudication = chronic arterial occlusion · ตรวจชีพจรทุกระดับ + Buerger's test + ABI",
 summary:["Claudication น่อง → femoropopliteal · ก้น/ต้นขา → aortoiliac","PE: trophic changes, ชีพจร 4 ระดับ, bruit, Buerger's test","ABI <0.9 = PAD · <0.4 = critical · >1.3 = non-compressible","รักษา: หยุดบุหรี่, antiplatelet, statin, exercise"]}),

/* ===== PowerPoint 10 ===== */
Co({page:267,sec:"PowerPoint",orig:"PPT 10",topic:"spot",sub:"Head & neck",title:"Spot — facial stab wound: expected deficits and how to test",seen:"คล้าย MDCU66 RoD PPT 6 (แผลแทงที่หน้าโดน buccal branch)",
 stem:`A photograph shows a stab wound on the side of the face, over the parotid region in front of the ear.<br>1. Which important structure may be injured, and what symptoms would the patient have?<br>2. How would you test for this injury?`,
 gray:"ข้อสอบใหม่ - Trauma stab wound ที่ใบหน้า ตรงแถวๆ facial nerve มีอาการอย่างไร / (หน้า 268) ทดสอบยังไง",
 flag:NOIMG,imgAlt:"รูปใบหน้าด้านข้างมีแผลถูกแทงบริเวณหน้าหู",
 notes:"ไฟล์จัดเป็น 'ข้อสอบใหม่' · บรรทัด 'ทดสอบยังไง' อยู่ต้นหน้า 268 ต่อจากข้อนี้",
 parts:S(
  B("PPT 10.1 Structure at risk and expected symptoms.",3,{tags:["spot"],key:"ไฟล์ระบุ: facial nerve (ไม่มีเฉลยอาการ)",
   ans:"<b>Facial nerve (CN VII)</b> ที่ผ่าน parotid gland แตก 5 แขนง (<b>temporal, zygomatic, buccal, marginal mandibular, cervical</b>) + <b>parotid (Stensen's) duct</b> · อาการตามแขนง: <b>temporal</b> — เลิกคิ้ว/ย่นหน้าผากไม่ได้ · <b>zygomatic</b> — หลับตาไม่สนิท (lagophthalmos, เสี่ยง exposure keratitis) · <b>buccal</b> — ยิ้ม/ยกริมฝีปากบนไม่ได้, nasolabial fold แบน, อาหารค้างกระพุ้งแก้ม · <b>marginal mandibular</b> — มุมปากล่างไม่ลง ยิ้มเบี้ยว ริมฝีปากล่างยื่นไม่ได้ · <b>cervical</b> — platysma อ่อนแรง (อาการน้อย) · บาดเจ็บที่ main trunk = อ่อนแรงทั้งซีกหน้า (lower motor neuron: รวมหน้าผาก) · parotid duct ขาด → น้ำลายรั่วจากแผล/sialocele",
   exp:"LMN facial palsy (บาดเจ็บส่วนปลาย) อ่อนแรงทั้งซีกรวมหน้าผาก ต่างจาก UMN (stroke) ที่หน้าผากยังย่นได้",
   rubric:"ได้ = facial nerve + อาการตามแขนง ≥3 + parotid duct · บางส่วน = บอกแค่ 'หน้าเบี้ยว'",
   pts:[CR(P("Facial nerve (CN VII)","facial nerve","cn ?vii","cn ?7","เส้นประสาทใบหน้า","เส้นประสาทสมองคู่ที่ 7")),G("อาการตามแขนง (≥3)",3,P("Temporal: เลิกคิ้วไม่ได้","temporal","คิ้ว","หน้าผาก","forehead"),P("Zygomatic: หลับตาไม่สนิท","zygomatic","หลับตา","eye clos","lagophthalm"),P("Buccal: ยิ้ม/เป่าแก้มไม่ได้","buccal","ยิ้ม","แก้ม","smile"),P("Marginal mandibular: มุมปากล่าง","marginal","mandibular","มุมปาก","ริมฝีปากล่าง"),P("Cervical: platysma","cervical","platysma")),P("Parotid duct injury","parotid","stensen","น้ำลาย","saliva")]}),
  B("PPT 10.2 How would you test for it?",3,{tags:["spot"],key:"ไฟล์ถาม 'ทดสอบยังไง' (ไม่มีเฉลย)",
   ans:"<b>ตรวจก่อนฉีดยาชา</b> และเทียบสองข้าง: <b>เลิกคิ้ว/ย่นหน้าผาก</b> (temporal) · <b>หลับตาแน่นสู้แรงผู้ตรวจ</b> (zygomatic) · <b>ยิ้มยิงฟัน, ย่นจมูก, เป่าแก้ม</b> (buccal) · <b>ยิ้มกว้าง/ทำปากเบะ/ยื่นริมฝีปากล่าง</b> (marginal mandibular) · <b>เกร็งคอแสยะปากลง</b> (platysma — cervical) · ถ้าผู้ป่วยไม่ร่วมมือ: ดูความสมมาตรของสีหน้าขณะร้อง/ยิ้ม · <b>Parotid duct</b>: ดูน้ำลายรั่วที่แผล, สอด probe/สาย (lacrimal probe/IV catheter) ผ่านรูเปิดตรงฟันกรามบนซี่ที่ 2 ดูว่าโผล่ที่แผลหรือไม่ หรือฉีด methylene blue/น้ำเกลือย้อนเข้าทางรูเปิด · <b>การรักษา</b>: แขนงที่ขาดด้านหลังแนวดิ่งผ่าน lateral canthus → explore + microsurgical repair ภายใน 72 ชม. (ยังใช้ nerve stimulator หาปลายส่วนปลายได้) · ปกป้องกระจกตาถ้าหลับตาไม่สนิท",
   exp:"หลัง 72 ชม. ปลายประสาทส่วนปลายจะกระตุ้นไม่ตอบสนอง (Wallerian degeneration) ทำให้หาปลายยาก",
   rubric:"ได้ = ทดสอบกล้ามเนื้อทุกแขนงเทียบสองข้าง + ตรวจก่อนฉีดยาชา + ตรวจ parotid duct · บางส่วน = ตรวจไม่ครบแขนง",
   pts:[CR(P("ทดสอบกล้ามเนื้อทุกแขนง (เลิกคิ้ว หลับตา ยิ้ม เป่าแก้ม เบะปาก)","เลิกคิ้ว","raise eyebrow","หลับตา","close eye","ยิ้ม","smile","เป่าแก้ม","puff","show teeth","ยิงฟัน")),P("เทียบสองข้าง / ตรวจก่อนฉีดยาชา","เทียบ","compare","symmetr","สมมาตร","ก่อนฉีดยาชา","before local"),P("ตรวจ parotid duct (probe/น้ำลายรั่ว)","parotid","stensen","probe","cannul","น้ำลาย","methylene"),P("Explore + repair ภายใน 72 ชม.","72","repair","explore","microsurg","ต่อเส้นประสาท")]})
 ),
 interp:"แผลบริเวณ parotid: ตรวจ facial nerve ทุกแขนงและ parotid duct ก่อนฉีดยาชา",
 summary:["CN VII 5 แขนง: temporal, zygomatic, buccal, marginal mandibular, cervical","ตรวจ: เลิกคิ้ว หลับตาแน่น ยิ้ม/เป่าแก้ม เบะปาก แสยะคอ — ก่อนฉีดยาชา","Parotid duct: น้ำลายรั่ว, probe ผ่านรูเปิดตรงฟันกรามบนซี่ที่ 2","Repair ภายใน 72 ชม. ถ้าอยู่หลัง lateral canthus"]}),

/* ===== OSCE 1 ===== */
Co({page:268,sec:"OSCE",orig:"1",topic:"hx",sub:"Other history",ex:1,title:"Counselling — the mother of a boy with a non-retractable foreskin",
 stem:`The mother of a 3-year-old boy is worried because her son's foreskin cannot be pulled back. The examiner is observing.<br>Counsel the mother about his condition and its management.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - Conselling แม่มีลูกเป็น Phimosis >>อย่าลืมให้แม่ถาม",
 sp:"(Claude แต่ง — ไฟล์จดแค่หัวข้อ) แม่ของเด็กชาย 3 ปี · รูดหนังหุ้มปลายลูกไม่ลง เวลาปัสสาวะหนังหุ้มปลายโป่งเป็นลูกโป่งแล้วค่อยไหลออก · ไม่เคยปัสสาวะแสบ ไม่เคยไข้/ติดเชื้อทางเดินปัสสาวะ ไม่เคยบวมแดงหรือมีหนอง · ปัสสาวะออกดีไม่ต้องเบ่ง · เพื่อนบ้านแนะนำให้พาไปขลิบ แม่กังวลเรื่องผ่าตัดและดมยา · ถ้าผู้สอบไม่เปิดโอกาส แม่จะไม่ถาม (ถ้าเปิด: 'ต้องรูดทำความสะอาดทุกวันไหม?', 'ต้องผ่าตัดไหม?')",
 flag:"บทผู้ป่วย Claude แต่ง (เลือกภาพ physiologic phimosis) · ใช้ topic hx/Other history เพราะเป็นสถานีสื่อสารกับผู้ปกครองที่มีอาจารย์คุม",
 notes:"ข้อแนะนำทั่วไปของตอนที่ 2 ที่ผู้จดเขียน: อ่านโจทย์ดี ๆ, แนะนำตัวทุกครั้ง · สำหรับข้อนี้ผู้จดเน้น 'อย่าลืมให้แม่ถาม'",
 parts:S(
  B("1.1 Counsel the mother.",10,{tags:["hx"],key:"ไฟล์: 'อย่าลืมให้แม่ถาม' (ไม่มีเฉลยเนื้อหา)",
   ans:"<b>เปิด</b>: แนะนำตัว ยืนยันชื่อแม่/เด็ก ถามว่าแม่รู้อะไรมาบ้างและกังวลเรื่องอะไร · <b>ประเมินสั้น ๆ</b>: ballooning, ปัสสาวะออกดีไหม, เคยติดเชื้อ (balanoposthitis, UTI), แผลเป็นขาว ๆ ที่ปลายหนัง · <b>อธิบาย</b> ด้วยภาษาง่าย: เป็น <b>physiologic phimosis</b> ซึ่ง<b>ปกติในเด็กเล็ก</b> — หนังหุ้มปลายยังติดกับหัว ค่อย ๆ แยกเองตามอายุ (ส่วนใหญ่รูดได้ภายในวัยเรียน–วัยรุ่น) · ballooning ไม่อันตรายถ้าปัสสาวะออกดี · <b>คำแนะนำ</b>: <b>ห้ามรูดแรง ๆ</b> (ทำให้แผล/พังผืด/paraphimosis) · ทำความสะอาดภายนอกตอนอาบน้ำ รูดเบา ๆ เท่าที่ไปได้แล้ว<b>รูดกลับเสมอ</b> · <b>ทางเลือกถ้าแม่ต้องการ/มีอาการ</b>: ทา <b>topical corticosteroid</b> (เช่น 0.05–0.1% betamethasone/triamcinolone) วันละ 2 ครั้ง 4–8 สัปดาห์ ร่วมกับรูดเบา ๆ ได้ผลสูง · <b>ข้อบ่งชี้ขลิบ (circumcision)</b>: pathologic phimosis (แผลเป็นขาวแข็ง/BXO), balanoposthitis ซ้ำ, UTI ซ้ำ/มีความผิดปกติทางเดินปัสสาวะ, ปัสสาวะไม่ออก, ยาทาไม่ได้ผล · <b>อาการที่ต้องมาก่อนนัด</b>: ปัสสาวะไม่ออก, บวมแดงมีหนอง, ไข้, หนังหุ้มรูดลงแล้วกลับไม่ได้ (paraphimosis — ฉุกเฉิน) · <b>เปิดโอกาสให้แม่ถาม</b> + ทวนความเข้าใจ (teach-back) + สรุป",
   exp:"Physiologic phimosis: ~90% รูดได้เมื่ออายุ 3 ปี และเกือบทั้งหมดเมื่อวัยรุ่น (ตัวเลขแตกต่างกันตามการศึกษา) · Pathologic phimosis = แผลเป็นวงขาวที่ปลายหนัง (lichen sclerosus/BXO) → ขลิบ",
   rubric:"ได้ = ประเมินอาการสั้น ๆ + อธิบายว่าเป็นภาวะปกติ + ห้ามรูดแรง + ทางเลือกยาทา steroid + ข้อบ่งชี้ผ่าตัด + อาการต้องกลับมา + <b>ให้แม่ถาม</b>และสรุป · ตก = ไม่เปิดโอกาสให้แม่ถาม/ให้ข้อมูลผิด (ต้องขลิบทุกราย)",
   pts:[H("เปิดการสนทนา",10),P("แนะนำตัว ถามความกังวล/ความรู้เดิมของแม่","แนะนำตัว","กังวล","concern","ทราบอะไร","รู้อะไร"),
    H("ประเมิน",15),P("ถาม ballooning, ปัสสาวะออกดี, ติดเชื้อ, แผลเป็นขาว","ballooning","โป่ง","ปัสสาวะ","ติดเชื้อ","infect","uti","บวมแดง"),
    H("อธิบาย + แนะนำ",55),CR(P("อธิบายว่าเป็น physiologic phimosis ปกติในเด็ก หายเองได้","physiologic","ปกติในเด็ก","เป็นปกติ","normal","หายเอง","ตามอายุ")),CR(P("ห้ามรูดแรง ทำความสะอาด รูดกลับเสมอ","ห้ามรูด","ไม่รูดแรง","force","รูดกลับ")),P("ทางเลือก: ยาทา steroid 4–8 สัปดาห์","steroid","สเตียรอยด์","betamethasone","triamcinolone","ยาทา"),P("ข้อบ่งชี้ขลิบ","circumcis","ขลิบ","ผ่าตัด","bxo","lichen"),P("อาการที่ต้องกลับมา (ปัสสาวะไม่ออก ติดเชื้อ paraphimosis)","ปัสสาวะไม่ออก","retention","หนอง","ไข้","paraphimosis","กลับมา"),
    H("ปิด",20),CR(P("เปิดโอกาสให้แม่ถาม + ทวนความเข้าใจ + สรุป","มีคำถาม","คำถาม","question","สงสัย","สรุป","ทวน"))]})
 ),
 interp:"สถานีให้คำปรึกษาผู้ปกครอง: อธิบายว่า phimosis ในเด็กเล็กเป็นเรื่องปกติ รู้ข้อบ่งชี้รักษา และต้องเปิดโอกาสให้ผู้ปกครองถาม",
 summary:["Physiologic phimosis = ปกติ · ballooning ไม่อันตรายถ้าปัสสาวะออกดี","ห้ามรูดแรง · รูดเบา ๆ แล้วรูดกลับเสมอ","ยาทา steroid 4–8 สัปดาห์ได้ผลดี","ขลิบเมื่อ: BXO, balanoposthitis/UTI ซ้ำ, ยาไม่ได้ผล","ปิดด้วย 'มีอะไรสงสัยไหมคะ' + สรุป"]}),

/* ===== OSCE 2 ===== */
Co({page:268,sec:"OSCE",orig:"2",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — abdomen in a patient with acute abdominal pain",
 stem:`A simulated patient presents with acute abdominal pain for 1 day. The examiner is observing.<br>1. Perform an abdominal examination relevant to this complaint (history taking is not required).<br>2. State your findings and provisional diagnosis.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - PE Acute abdomen >> PR ด้วย >> Ac appendicitis",
 sp:"(Claude แต่ง ผลตรวจให้เข้ากับไฟล์ 'Ac appendicitis') ชาย 22 ปี ปวดท้องเริ่มรอบสะดือแล้วย้ายมาท้องน้อยขวา 1 วัน · นอนนิ่ง · ผลที่อาจารย์บอกเมื่อตรวจถูกวิธี: T 38.0 °C · bowel sound ลดลงเล็กน้อย · tenderness + guarding ที่ McBurney's point · rebound tenderness บวก · Rovsing sign บวก · psoas sign บวก · obturator sign ลบ · hernial orifices ปกติ · PR (บนหุ่น/บอกผล): กดเจ็บด้านขวา ไม่มีก้อน",
 flag:"ผลตรวจทั้งหมด Claude แต่ง",
 notes:"ข้อแนะนำของผู้จดสำหรับตอนที่ 2: ถ้าโจทย์ให้ตรวจร่างกายก็ตรวจเลยไม่ต้องซักประวัติ · แนะนำตัวทุกครั้ง · <b>ตรวจร่างกายเข้าทางขวา</b> โดยเฉพาะ acute abdomen · <b>เตรียม stethoscope</b> ไปด้วย ตอนตรวจท้อง<b>ฟังก่อนคลำ</b> · ถอดนาฬิกา · ข้อนี้ผู้จดเน้น 'PR ด้วย'",
 parts:S(
  B("2.1 Perform the abdominal examination.",8,{tags:["pe"],key:"ไฟล์: PE Acute abdomen >> PR ด้วย",
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ล้างมือ ยืนทางขวาของผู้ป่วย นอนหงายหมอนใบเดียว แขนข้างลำตัว เปิดหน้าท้องตั้งแต่ใต้ราวนมถึงขาหนีบ (คลุมส่วนอื่น) ถามว่าเจ็บตรงไหน · <b>General</b>: ท่าทาง (นอนนิ่ง = peritonitis, ดิ้น = colic), vital signs/ไข้ · <b>Inspection</b>: distension, หายใจท้องเคลื่อนไหวไหม, แผลผ่าตัดเก่า, ก้อน, visible peristalsis · <b>Auscultation</b> (ก่อนคลำ): bowel sound · <b>Percussion</b>: percussion tenderness, liver dullness (หายใน free air), shifting dullness ถ้าท้องโต · <b>Palpation</b>: <b>เริ่มจากจุดที่ไกลจากตำแหน่งปวด</b> ดูหน้าผู้ป่วย · light → deep · หา tenderness, <b>guarding/rigidity</b>, <b>rebound tenderness</b> · ก้อน, ตับม้าม · <b>Special signs</b>: McBurney's point tenderness, <b>Rovsing</b>, <b>psoas</b>, <b>obturator</b>, Murphy (ถ้าสงสัย RUQ) · <b>Hernial orifices</b> และ external genitalia · <b>PR</b> (ขออนุญาต + chaperone): tenderness ด้านขวา/pelvic abscess, ก้อน, เลือด · ขอบคุณ คลุมผ้า",
   exp:"Peritonitis: guarding, rigidity, rebound, percussion tenderness (ใช้แทน rebound ได้และเจ็บน้อยกว่า) · Alvarado score: migratory pain, anorexia, N/V, RLQ tenderness (2), rebound, fever, leukocytosis (2), left shift",
   rubric:"ได้ = ยืนขวา + เปิดถูก + ดู → ฟัง → เคาะ → คลำ (เริ่มไกลจุดปวด) + peritoneal signs + special signs + hernia + PR · ตก = คลำก่อนฟัง/เริ่มคลำที่จุดปวดแรง ๆ",
   pts:[H("เตรียม",15),CR(P("แนะนำตัว ขออนุญาต ยืนขวา จัดท่า เปิดหน้าท้องเหมาะสม","แนะนำตัว","ขออนุญาต","consent","ด้านขวา","right side","expose","เปิดหน้าท้อง")),
    H("ดู ฟัง เคาะ",25),P("Inspection: distension, movement, scar","inspect","distens","ท้องอืด","scar","แผลผ่าตัด","movement"),CR(P("ฟัง bowel sound ก่อนคลำ","bowel sound","auscult","ฟัง","stethoscope")),P("เคาะ: percussion tenderness / liver dullness","percuss","เคาะ","dullness"),
    H("คลำ + special signs",45),CR(P("คลำเริ่มไกลจุดปวด light → deep ดูหน้าผู้ป่วย","ไกล","away","light","superficial","เริ่มคลำ")),CR(P("Guarding / rigidity / rebound tenderness","guard","rigid","rebound")),G("Special signs (≥2)",2,P("McBurney's point","mcburney"),P("Rovsing sign","rovsing"),P("Psoas sign","psoas"),P("Obturator sign","obturator")),P("Hernial orifices","hernia","ไส้เลื่อน","groin","ขาหนีบ"),
    H("PR",15),CR(P("PR exam (ขออนุญาต chaperone)","\\bpr\\b","per rectal","rectal","ทวารหนัก"))]}),
  B("2.2 State your findings and provisional diagnosis (examiner asks).",2,{tags:["pe"],
   ans:"Low-grade fever, localized tenderness with guarding and rebound at McBurney's point, Rovsing and psoas signs positive, PR tender on the right → <b>Acute appendicitis</b> with localized peritonitis · DDx: mesenteric adenitis, Meckel's diverticulitis, right ureteric colic, terminal ileitis (ผู้หญิง: ectopic pregnancy, ovarian torsion, PID)",
   exp:"Psoas sign บวก = retrocecal appendix · obturator sign บวก = pelvic appendix",
   rubric:"ได้ = สรุปสิ่งตรวจพบ + acute appendicitis + DDx ≥1",
   pts:[CR(P("Acute appendicitis","appendicitis","ไส้ติ่งอักเสบ")),P("DDx: mesenteric adenitis / ureteric colic / gynecologic","mesenteric","ureter","meckel","ectopic","ovar","\\bpid\\b","ileitis")]})
 ),
 interp:"ตรวจท้องใน acute abdomen ตามลำดับ (ดู ฟัง เคาะ คลำ) จากด้านขวา เริ่มคลำไกลจุดปวด และอย่าลืม hernia + PR",
 summary:["ยืนขวา · ดู → ฟัง → เคาะ → คลำ","คลำเริ่มไกลจุดปวด ดูสีหน้า · หา guarding/rigidity/rebound","Appendicitis: McBurney, Rovsing, psoas (retrocecal), obturator (pelvic)","ปิดท้าย: hernial orifices + genitalia + PR"]}),

/* ===== OSCE 3 ===== */
Co({page:268,sec:"OSCE",orig:"3",topic:"inst",sub:"Surgical instrument",title:"Instruments — two grasping forceps: name and compare their uses",
 stem:`Two ring-handled grasping instruments with locking ratchets are displayed. One has short interlocking teeth at its tips; the other has broad, rounded, fenestrated tips without teeth.<br>1. Name each instrument.<br>2. State the use of each and explain the difference.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - Instrument 2 ข้อ ตรงแอก",
 flag:"⚠ "+NOIMG+" · ไฟล์จดแค่ 'Instrument 2 ข้อ' ไม่บอกชื่อเครื่องมือ — สถานีนี้และ OSCE 4 Claude เลือกเครื่องมือที่ออกบ่อยเองทั้งหมด",imgAlt:"เครื่องมือผ่าตัดด้ามแบบห่วง 2 ชิ้น มีล็อก ปลายต่างกัน",
 notes:"ไฟล์เขียน 'Instrument 2 ข้อ ตรงแอก' — ตีความว่ามีสถานีเครื่องมือ 2 สถานี (คำว่า 'ตรงแอก' อ่านความหมายไม่ได้ชัด เก็บไว้ใน gray ตามต้นฉบับ)",
 parts:S(
  B("3.1 Name each instrument, state its use and the difference.",5,{tags:["inst"],
   ans:"<b>Allis forceps (Allis clamp)</b>: ปลายมีฟันเล็ก ๆ หลายซี่ขบกัน → จับ<b>เนื้อเยื่อที่แข็ง/จะตัดทิ้ง</b> ได้แน่น (fascia, ขอบ aponeurosis, เต้านม/ก้อนที่จะตัดออก, ขอบผิวหนัง) — <b>บาดเจ็บเนื้อเยื่อมากกว่า (traumatic)</b> · <b>Babcock forceps</b>: ปลายกว้างโค้งมนมีรูตรงกลาง ไม่มีฟัน → จับ<b>อวัยวะรูปท่อ/เนื้อเยื่อบอบบาง</b> โดยไม่ทำให้บาดเจ็บ (<b>atraumatic</b>): ลำไส้, appendix, ท่อนำไข่ (tubal ligation), ureter, หลอดอาหาร · <b>ต่าง</b>: Allis = ฟัน จับแน่นแต่ทำลายเนื้อเยื่อ · Babcock = ไม่มีฟัน โอบรอบโครงสร้างท่อ ไม่ทำลายเนื้อเยื่อ",
   exp:"หลักเลือกเครื่องมือจับ: เนื้อเยื่อที่จะเก็บไว้และบอบบาง → atraumatic (Babcock, DeBakey) · เนื้อเยื่อเหนียว/จะตัดทิ้ง → มีฟัน (Allis, Kocher)",
   rubric:"ได้ = ชื่อถูกทั้งสอง + การใช้ + บอกความต่าง traumatic vs atraumatic",
   pts:[CR(P("Allis forceps","allis")),P("Allis: ฟัน จับเนื้อเยื่อแข็ง/จะตัดทิ้ง (traumatic)","teeth","ฟัน","traumatic","fascia","ตัดทิ้ง","แน่น"),CR(P("Babcock forceps","babcock")),P("Babcock: atraumatic จับลำไส้/appendix/ท่อนำไข่","atraumatic","bowel","ลำไส้","append","ไส้ติ่ง","fallopian","ท่อนำไข่","tubular","ureter")]})
 ),
 interp:"แยกเครื่องมือจับเนื้อเยื่อแบบมีฟัน (traumatic) กับไม่มีฟัน (atraumatic) และเลือกใช้ให้เหมาะกับเนื้อเยื่อ",
 summary:["Allis: ฟันเล็กขบกัน — จับ fascia/เนื้อเยื่อที่จะตัดออก (traumatic)","Babcock: ปลายมนมีรู ไม่มีฟัน — จับลำไส้/appendix/ท่อนำไข่ (atraumatic)"]}),

/* ===== OSCE 4 ===== */
Co({page:268,sec:"OSCE",orig:"4",topic:"inst",sub:"Surgical instrument",title:"Instruments — two clamps: name and state their uses",
 stem:`Two ring-handled clamps with locking ratchets are displayed. Both have transverse serrations along the jaws; one is slightly longer and has a single tooth (1×2) at the tip.<br>1. Name each instrument.<br>2. State the use of each.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - Instrument 2 ข้อ ตรงแอก (สถานีที่สอง)",
 flag:"⚠ "+NOIMG+" · ไฟล์ไม่บอกชื่อเครื่องมือ — Claude เลือก Kelly clamp และ Kocher clamp",imgAlt:"เครื่องมือผ่าตัดด้ามแบบห่วง 2 ชิ้น มีล็อก ปากมีร่องขวาง",
 notes:"สถานีที่สองของ 'Instrument 2 ข้อ' · ดู OSCE 3",
 parts:S(
  B("4.1 Name each instrument and state its use.",4,{tags:["inst"],
   ans:"<b>Kelly (hemostatic) forceps</b>: ปากมีร่องขวาง (serration) ครึ่งปลาย ไม่มีฟัน ตรงหรือโค้ง → <b>หนีบหลอดเลือดห้ามเลือด</b> ก่อนผูก/จี้, จับไหม, เลาะเนื้อเยื่อทื่อ ๆ (ขนาดเล็กกว่า = mosquito สำหรับหลอดเลือดเล็ก) · <b>Kocher (Ochsner) clamp</b>: ร่องขวางตลอดปาก + <b>ฟันที่ปลาย (1×2)</b> → จับ<b>เนื้อเยื่อเหนียวแน่น</b> เช่น fascia, aponeurosis, หนีบ pedicle/ลำไส้ส่วนที่จะตัดทิ้ง, ดึงรั้งเนื้อเยื่อ — <b>ไม่ใช้กับเนื้อเยื่อที่จะเก็บไว้หรือหลอดเลือดที่ต้องรักษา</b> (ทำลายเนื้อเยื่อ)",
   exp:"ลำดับขนาด hemostat: mosquito (Halsted) &lt; Kelly/Crile &lt; Rochester-Pean · Kelly ร่องครึ่งปลาย vs Crile ร่องตลอดปาก",
   rubric:"ได้ = ชื่อถูกทั้งสอง + Kelly ห้ามเลือด + Kocher จับเนื้อเยื่อเหนียว (มีฟัน)",
   pts:[CR(P("Kelly (hemostatic) forceps / hemostat","kelly","hemostat","haemostat","crile","artery forcep")),P("Kelly: หนีบหลอดเลือดห้ามเลือด","ห้ามเลือด","hemosta","vessel","หลอดเลือด","clamp"),CR(P("Kocher (Ochsner) clamp","kocher","ochsner")),P("Kocher: มีฟัน จับเนื้อเยื่อเหนียว (fascia) / ส่วนที่จะตัดทิ้ง","fascia","ฟัน","teeth","tough","เหนียว","ตัดทิ้ง")]})
 ),
 interp:"แยก hemostat (ห้ามเลือด) กับ clamp ที่มีฟัน (จับเนื้อเยื่อเหนียว)",
 summary:["Kelly = hemostat ร่องขวาง ไม่มีฟัน — ห้ามเลือด","Kocher = ร่องขวาง + ฟันปลาย — fascia/เนื้อเยื่อเหนียว","Mosquito < Kelly < Rochester-Pean"]}),

/* ===== OSCE 5 ===== */
Co({page:268,sec:"OSCE",orig:"5",topic:"suture",sub:"Suture material",title:"Suture material — read the packet and describe the suture",
 stem:`A suture packet with its label is provided.<br>1. What is the generic name of this suture?<br>2. Describe its properties (structure and absorbability) and the information on the packet.<br>3. Give examples of its use.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - ไหมออก vicryl มีซองบอกชื่อให้",
 flag:NOIMG+" · ขนาดไหม/ชนิดเข็มบนซอง Claude เติมเป็นตัวอย่าง",imgAlt:"ซองไหมเย็บแผลสีม่วง มีฉลากชื่อและรูปเข็ม",
 notes:"ผู้จดบอกว่าซองไหมมีชื่อบอกให้ (Vicryl)",
 parts:S(
  B("5.1 Generic name, properties and uses.",5,{tags:["suture"],key:"ไฟล์ระบุ: Vicryl (มีซองบอกชื่อ)",
   ans:"<b>Vicryl = polyglactin 910</b> (copolymer ของ glycolide + lactide, เคลือบ) · <b>synthetic, braided multifilament, absorbable</b> (สลายด้วย hydrolysis) · คงแรงดึง ~75% ที่ 2 สัปดาห์, ~50% ที่ 3 สัปดาห์ · ดูดซึมหมด ~56–70 วัน · มีทั้งสีม่วง (dyed) และไม่ย้อมสี · <b>อ่านซอง</b>: ชื่อการค้า/วัสดุ, <b>ขนาดไหม</b> (เช่น 2-0 — ยิ่งเลข 0 มากยิ่งเล็ก), ความยาวไหม, <b>ชนิดเข็ม</b> (taper point = เนื้อเยื่ออ่อน/ลำไส้; cutting/reverse cutting = ผิวหนัง/เนื้อเยื่อแข็ง), ความโค้ง (1/2, 3/8 circle), ความยาวเข็ม, วันหมดอายุ, sterile · <b>ใช้</b>: เย็บชั้นใต้ผิวหนัง, กล้ามเนื้อ, fascia ที่ไม่รับแรงมาก, ผูกหลอดเลือด, bowel anastomosis, mucosa ในช่องปาก · <b>ไม่เหมาะ</b>: เนื้อเยื่อที่ต้องรับแรงนาน (abdominal fascia ที่ตึง, หลอดเลือด anastomosis, tendon)",
   exp:"Vicryl Rapide (irradiated) ละลายเร็ว ~42 วัน ใช้เย็บผิวหนัง/mucosa ที่ไม่อยากตัดไหม · ไหม absorbable ชนิด monofilament ที่อยู่นาน: PDS (polydioxanone)",
   rubric:"ได้ = polyglactin 910 + braided multifilament + absorbable + อ่านขนาด/เข็มได้ + ใช้ ≥2",
   pts:[CR(P("Polyglactin 910","polyglactin","910")),CR(P("Synthetic braided multifilament, absorbable","absorb","ละลาย","ดูดซึม")),P("Multifilament / braided","multi","braid","ถัก"),P("อ่านซอง: ขนาด (เช่น 2-0), ชนิด/ความโค้งเข็ม","2-0","3-0","size","ขนาด","taper","cutting","needle","เข็ม","circle"),G("การใช้ (≥2)",2,P("Subcutaneous","subcut","ใต้ผิว"),P("Muscle / fascia","muscle","กล้ามเนื้อ","fascia"),P("Vessel ligation","ligat","ผูกหลอดเลือด","tie"),P("Bowel anastomosis","bowel","anastomos","ลำไส้"),P("Mucosa","mucosa","เยื่อบุ","oral"))]})
 ),
 interp:"อ่านซองไหมให้ได้ชื่อวัสดุ ขนาด ชนิดเข็ม และรู้คุณสมบัติ/การใช้ Vicryl",
 summary:["Vicryl = polyglactin 910 · braided · absorbable","~50% แรงดึงที่ 3 สัปดาห์ · ดูดซึม 56–70 วัน","ซอง: ขนาด (0 มาก = เล็ก), เข็ม taper (เนื้อเยื่ออ่อน) vs cutting (ผิวหนัง)","ใช้: subcut, muscle, ligation, bowel"]}),

/* ===== OSCE 6 ===== */
Co({page:268,sec:"OSCE",orig:"6",topic:"img",sub:"Acute abdomen series",title:"Two abdominal radiographs — describe and diagnose each",
 stem:`Two radiographs from two different patients with acute abdominal pain are shown.<br>Film A: an upright chest radiograph.<br>Film B: supine and upright abdominal radiographs.<br>For each film: 1. Describe the findings. 2. Give the diagnosis.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - Films 2 อัน Dx กับบรรยาย >> free air >> small bowel obstruction",
 flag:NOIMG,imgAlt:"ฟิล์ม A: ฟิล์มทรวงอกท่ายืน · ฟิล์ม B: ฟิล์มช่องท้องท่านอนและท่ายืน",
 parts:S(
  B("6.1 Film A — describe and diagnose.",3,{tags:["img"],key:"ไฟล์: free air",
   ans:"Upright CXR: <b>แถบลมรูปจันทร์เสี้ยวใต้กระบังลม (subdiaphragmatic free air)</b> ด้านขวา (± ซ้าย) แยกจาก gastric bubble · <b>Dx: Pneumoperitoneum</b> → สาเหตุที่พบบ่อย = <b>perforated peptic ulcer</b> (ต้องแยกหลังผ่าตัดช่องท้อง) → resuscitation + ผ่าตัดด่วน",
   exp:"Free air ปริมาณเพียง 1–2 mL เห็นได้ใน upright CXR ถ้าให้ผู้ป่วยนั่ง/ยืน 10 นาทีก่อนถ่าย",
   rubric:"ได้ = บรรยายตำแหน่งลม + pneumoperitoneum (+ สาเหตุ hollow viscus perforation)",
   pts:[CR(P("Free air ใต้กระบังลม","free air","subdiaphrag","ใต้กระบังลม","crescent")),CR(P("Pneumoperitoneum / hollow viscus perforation","pneumoperiton","perforat","ทะลุ"))]}),
  B("6.2 Film B — describe and diagnose.",3,{tags:["img"],key:"ไฟล์: small bowel obstruction",
   ans:"<b>Dilated small bowel loops (&gt;3 cm) กลางท้อง</b> เห็น <b>valvulae conniventes</b> พาดเต็มความกว้าง · ท่ายืน: <b>multiple air-fluid levels แบบขั้นบันได</b> · ลมในลำไส้ใหญ่/rectum น้อย · <b>Dx: Small bowel obstruction</b> (สาเหตุบ่อย: adhesion, hernia)",
   exp:"ลำไส้เล็ก: valvulae conniventes พาดเต็มวง · ลำไส้ใหญ่: haustra พาดไม่เต็มวง อยู่รอบนอก · กฎ 3-6-9 (SB 3, colon 6, cecum 9 cm)",
   rubric:"ได้ = dilated SB + valvulae + air-fluid levels + colon ไม่มีลม + SBO",
   pts:[CR(P("Dilated small bowel loops + valvulae conniventes","dilat","ขยาย","valvulae","conniven","small bowel")),P("Multiple air-fluid levels (step-ladder)","air.?fluid","step","fluid level"),P("ลมใน colon น้อย","colon","ลำไส้ใหญ่","rectum","paucity"),CR(P("Small bowel obstruction","small bowel obstruct","\\bsbo\\b","ลำไส้เล็กอุดตัน"))]})
 ),
 interp:"แยกฟิล์ม pneumoperitoneum กับ small bowel obstruction และบรรยายลักษณะสำคัญ",
 summary:["Free air: upright CXR crescent ใต้กระบังลม → perforation","SBO: SB >3 cm, valvulae conniventes, step-ladder air-fluid, colon ไม่มีลม","กฎ 3-6-9: SB 3, colon 6, cecum 9 cm"]}),

/* ===== OSCE 7 ===== */
Co({page:268,sec:"OSCE",orig:"7",topic:"hx",sub:"Jaundice",ex:1,title:"History taking — abdominal pain with fever",seen:"คล้าย MDCU65 RoB OSCE 9 (ซักประวัติปวดท้อง → acute cholangitis)",
 stem:`A simulated patient presents with abdominal pain. The examiner is observing.<br>1. Take a focused history.<br>2. Give your provisional diagnosis.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - ซักประวัติมาด้วยปวดท้อง >>acute cholangitis เน้นซักตาเหลือง ตัวเหลือง ไม่เน้นอาการปวด",
 sp:"(Claude แต่งให้เข้ากับไฟล์) หญิง 58 ปี · ปวดท้องขวาบน 2 วัน ปวดบีบ ๆ ร้าวไปสะบักขวา · มีไข้หนาวสั่น 1 วัน · <b>ตาเหลืองตัวเหลือง</b> สังเกตเมื่อวาน ปัสสาวะสีเข้มเหมือนชา อุจจาระสีซีดลง คันเล็กน้อย · คลื่นไส้ อาเจียน 2 ครั้ง · เคยปวดท้องขวาบนหลังกินอาหารมัน ๆ หลายครั้ง แพทย์เคยบอกว่ามีนิ่วในถุงน้ำดีแต่ไม่ได้ผ่าตัด · ไม่ดื่มสุรา ไม่ใช้ยาสมุนไพร ไม่เคยเป็นตับอักเสบ · ไม่สับสน",
 flag:"บทผู้ป่วยจำลอง Claude แต่ง",
 notes:"ผู้จดเน้นว่าข้อนี้ต้อง<b>เน้นซักตาเหลืองตัวเหลือง ไม่เน้นอาการปวด</b> · เลือก sub Jaundice ตามจุดเน้น",
 parts:S(
  B("7.1 Take a focused history.",7,{tags:["hx"],key:"ไฟล์: acute cholangitis — เน้นซักตาเหลือง ตัวเหลือง ไม่เน้นอาการปวด",
   ans:"<b>แนะนำตัว</b> ขออนุญาต · <b>ปวดท้อง</b> (ซักพอสังเขป): ตำแหน่ง RUQ, ลักษณะ, ร้าว, ระยะเวลา · <b>ไข้หนาวสั่น</b> · <b>เน้นตัวเหลือง</b>: เริ่มเมื่อไร มากขึ้นเร็วไหม, <b>สีปัสสาวะ</b> (ชาเข้ม), <b>สีอุจจาระ</b> (ซีด), <b>คัน</b>, เคยเหลืองมาก่อนไหม · <b>อาการรุนแรง</b>: สับสน ซึม หน้ามืด (Reynolds pentad) · คลื่นไส้อาเจียน เบื่ออาหาร น้ำหนักลด · <b>ปัจจัยเสี่ยงสาเหตุ</b>: <b>ประวัตินิ่วถุงน้ำดี/biliary colic</b>, ผ่าตัด/ERCP/ใส่ stent ท่อน้ำดีมาก่อน, กินปลาดิบ (พยาธิใบไม้ตับ), มะเร็ง · <b>แยกสาเหตุ hepatic</b>: สุรา ยา/สมุนไพร ไวรัสตับอักเสบ · โรคประจำตัว ยา แพ้ยา · <b>สรุป</b>",
   exp:"Tokyo Guidelines 2018 (TG18) acute cholangitis: A systemic inflammation (ไข้/หนาวสั่น, WBC/CRP) + B cholestasis (jaundice, LFT ผิดปกติ) + C imaging (ท่อน้ำดีขยาย/เห็นสาเหตุ) → definite = A + B + C",
   rubric:"ได้ = ซักปวดพอสังเขป + ไข้ + ตัวเหลืองละเอียด (ปัสสาวะ อุจจาระ คัน) + อาการรุนแรง (สับสน/ช็อก) + ประวัตินิ่ว/ผ่าตัดทางเดินน้ำดี + แยก hepatic causes · บางส่วน = เน้นแต่อาการปวด",
   pts:[H("แนะนำตัว + ปวดท้อง",15),P("แนะนำตัว ขออนุญาต","แนะนำตัว","ขออนุญาต","introduc"),P("ปวดท้อง: ตำแหน่ง ลักษณะ ร้าว","ปวด","pain","ร้าว","ตำแหน่ง"),
    H("ไข้ + ตัวเหลือง (เน้น)",45),CR(P("ไข้ หนาวสั่น","ไข้","fever","หนาวสั่น","chill","rigor")),CR(P("ตาเหลือง ตัวเหลือง: onset/progression","ตาเหลือง","ตัวเหลือง","jaundice","icter")),CR(P("สีปัสสาวะ สีอุจจาระ คัน","ปัสสาวะ","urine","อุจจาระ","stool","คัน","prurit")),P("สับสน/ซึม/หน้ามืด (Reynolds)","สับสน","confus","ซึม","หน้ามืด","reynolds","shock"),
    H("สาเหตุ + อดีต",30),CR(P("ประวัตินิ่วถุงน้ำดี / ผ่าตัด-ERCP ทางเดินน้ำดี","นิ่ว","gallstone","stone","ercp","stent","ผ่าตัด")),P("แยก hepatic: สุรา ยา สมุนไพร ไวรัส","สุรา","alcohol","สมุนไพร","herb","ยาที่","ตับอักเสบ","hepatitis"),P("กินปลาดิบ / น้ำหนักลด (มะเร็ง)","ปลาดิบ","ก้อย","raw fish","น้ำหนัก","weight"),
    H("สรุป",10),P("สรุป","สรุป","summar")]}),
  B("7.2 Provisional diagnosis (examiner asks).",3,{tags:["hx"],key:"ไฟล์: acute cholangitis",
   ans:"<b>Acute cholangitis</b> (Charcot's triad: ไข้ + ปวด RUQ + jaundice) จาก <b>choledocholithiasis</b> (มีประวัตินิ่วถุงน้ำดี) · DDx: acute cholecystitis ที่มี Mirizzi syndrome, cholangiocarcinoma ที่ติดเชื้อ, liver abscess, viral hepatitis · แผน: blood culture, CBC, LFT, US → <b>IV antibiotics + fluid</b> → <b>biliary drainage (ERCP)</b> ภายใน 24–48 ชม. (moderate) หรือเร่งด่วน (severe)",
   exp:"TG18 severity: Grade III (severe) = organ dysfunction · Grade II (moderate) = WBC &gt;12k/&lt;4k, ไข้ ≥39, อายุ ≥75, bilirubin ≥5, albumin ต่ำ · Grade I = ไม่ครบเกณฑ์",
   rubric:"ได้ = acute cholangitis + สาเหตุ CBD stone + แผน drainage",
   pts:[CR(P("Acute cholangitis","cholangitis","ท่อน้ำดีอักเสบ")),P("สาเหตุ: CBD stone","cbd","choledocholith","stone","นิ่ว"),P("แผน: antibiotics + ERCP drainage","ercp","drain","antibiot","ระบาย")]})
 ),
 interp:"ซักประวัติปวดท้องที่มีไข้และตัวเหลือง → นึกถึง acute cholangitis และซักลักษณะ obstructive jaundice + ความรุนแรง + สาเหตุ",
 summary:["Charcot triad: ไข้ + RUQ pain + jaundice · Reynolds: + shock + สับสน","ซักตัวเหลือง: onset, ปัสสาวะเข้ม, อุจจาระซีด, คัน","สาเหตุบ่อย: CBD stone · ไทย: ระวัง cholangiocarcinoma","รักษา: ATB + fluid → ERCP drainage ตามความรุนแรง (TG18)"]}),

/* ===== OSCE 8 ===== */
Co({page:268,sec:"OSCE",orig:"8",topic:"pe",sub:"Thyroid/Neck",ex:1,title:"Physical examination — thyroid gland",
 stem:`A simulated patient has noticed a lump in the front of her neck. The examiner is observing.<br>1. Examine the thyroid gland and assess thyroid status.<br>2. Describe your findings.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - PE thyroid",
 sp:"(Claude แต่ง) หญิง 35 ปี · ผลตรวจที่อาจารย์บอกเมื่อตรวจถูกวิธี: ก้อนเดี่ยวที่ thyroid lobe ขวา ขนาด ~2.5 cm ผิวเรียบ แข็งปานกลาง ไม่เจ็บ <b>เคลื่อนขึ้นตามการกลืน</b> ไม่เคลื่อนตามการแลบลิ้น · trachea อยู่แนวกลาง · ไม่มีต่อมน้ำเหลืองที่คอโต · ไม่มี bruit · Pemberton sign ลบ · ชีพจร 76 สม่ำเสมอ ไม่มีมือสั่น ไม่มี lid lag/exophthalmos · reflex ปกติ",
 flag:"ผลตรวจ Claude แต่ง (ไฟล์จดแค่ 'PE thyroid')",
 parts:S(
  B("8.1 Examine the thyroid gland and assess thyroid status; describe the findings.",8,{tags:["pe"],key:"ไฟล์จดแค่หัวข้อ PE thyroid",
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ผู้ป่วยนั่ง เปิดคอถึงกระดูกไหปลาร้า เตรียมแก้วน้ำ · <b>Inspection (ด้านหน้า)</b>: ก้อน/คอโต, แผลเป็น, เส้นเลือดดำโป่ง · <b>ให้จิบน้ำแล้วกลืน</b> (ก้อน thyroid เลื่อนขึ้น) · <b>ให้แลบลิ้น</b> (thyroglossal cyst เลื่อนขึ้น) · <b>Palpation จากด้านหลัง</b> (ก้มคอเล็กน้อยให้กล้ามเนื้อหย่อน): คลำ isthmus แล้วแต่ละ lobe ขณะกลืน → ขนาด, ผิว, ความแข็ง, ก้อนเดี่ยว/หลายก้อน, กดเจ็บ, คลำขอบล่างได้หรือไม่ (retrosternal) · ตำแหน่ง <b>trachea</b> · <b>cervical lymph nodes</b> ทุกกลุ่ม · <b>Percussion</b> sternum (retrosternal extension) · <b>Auscultation</b> bruit (Graves) · <b>Pemberton sign</b> · <b>Thyroid status</b>: มือ (สั่น อุ่นชื้น), ชีพจร (rate, AF), ตา (lid retraction, lid lag, exophthalmos, ophthalmoplegia), reflex (brisk/delayed relaxation), proximal myopathy · <b>บรรยาย</b> (ตาม sp): solitary right thyroid nodule ~2.5 cm, smooth, firm, non-tender, moves with swallowing, no lymphadenopathy, clinically euthyroid → ส่ง <b>TSH</b> + <b>US neck</b> + <b>FNA</b> (ตาม TIRADS)",
   exp:"ก้อนที่คอเคลื่อนตามการกลืน = ติดกับ pretracheal fascia (thyroid) · ก้อนเดี่ยว: ส่วนใหญ่ benign แต่ต้อง FNA ตามลักษณะ US · ลักษณะสงสัยมะเร็ง: แข็ง ติดแน่น โตเร็ว เสียงแหบ LN โต",
   rubric:"ได้ = ดู + กลืน/แลบลิ้น + คลำจากด้านหลังขณะกลืน + trachea + LN + เคาะ/ฟัง + thyroid status (มือ ชีพจร ตา reflex) + บรรยายครบ · ตก = ไม่ให้กลืนขณะดู/คลำ",
   pts:[H("เตรียม + ดู",25),P("แนะนำตัว ขออนุญาต เปิดคอ เตรียมน้ำ","แนะนำตัว","ขออนุญาต","consent","แก้วน้ำ","water"),CR(P("ดูขณะกลืนน้ำ + แลบลิ้น","กลืน","swallow","แลบลิ้น","tongue","protru")),
    H("คลำ + เคาะ + ฟัง",40),CR(P("คลำจากด้านหลังขณะกลืน: ขนาด ผิว ความแข็ง ก้อน","ด้านหลัง","behind","posterior")),P("Trachea position","trachea","หลอดลม"),CR(P("Cervical lymph nodes","lymph","ต่อมน้ำเหลือง","\\bln\\b","node")),P("Percuss sternum / auscultate bruit / Pemberton","percuss","เคาะ","bruit","ฟัง","pemberton","retrosternal"),
    H("Thyroid status",25),P("มือ: สั่น อุ่นชื้น / ชีพจร","tremor","สั่น","pulse","ชีพจร","\\baf\\b"),P("ตา: lid lag, lid retraction, exophthalmos","lid lag","lid retract","exophthalm","proptosis","ตาโปน"),P("Reflex / proximal myopathy","reflex","myopathy","proximal"),
    H("บรรยาย + แผน",10),P("บรรยาย solitary nodule + euthyroid → TSH, US, FNA","solitary","nodule","ก้อนเดี่ยว","euthyroid","tsh","fna","ultrasound")]})
 ),
 interp:"ตรวจ thyroid ครบ: ดู/คลำขณะกลืน, แลบลิ้น, LN, trachea, retrosternal และประเมิน thyroid status",
 summary:["ดูขณะกลืน (thyroid เลื่อน) + แลบลิ้น (thyroglossal cyst เลื่อน)","คลำจากด้านหลังขณะกลืน · trachea · cervical LN","เคาะ sternum, ฟัง bruit, Pemberton","Thyroid status: มือ ชีพจร ตา reflex · solitary nodule → TSH + US + FNA"]}),

/* ===== OSCE 9 ===== */
Co({page:268,sec:"OSCE",orig:"9",topic:"pe",sub:"Breast",ex:1,title:"Physical examination — breast examination on a manikin",
 stem:`A breast examination manikin is provided. The examiner is observing.<br>1. Perform a complete breast examination.<br>2. Describe any abnormality you find.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - PE breast มันมีหุ่นอยู่ ไปฝึกดูก่อนได้",
 sp:"(Claude แต่ง) หุ่นเต้านม: ก้อนที่เต้านมซ้าย upper outer quadrant ตำแหน่ง 2 นาฬิกา ห่างหัวนม 4 cm ขนาด ~2 cm ขอบไม่เรียบ แข็ง เคลื่อนได้ ไม่ติดผิว · ไม่มี nipple discharge · ต่อมน้ำเหลืองรักแร้ไม่โต · ให้ผู้สอบพูดสิ่งที่จะดูในท่าต่าง ๆ (หุ่นไม่ขยับ) และบอกว่าจะขอ chaperone",
 flag:"ลักษณะก้อนที่หุ่น Claude แต่ง",
 notes:"ผู้จดแนะนำว่ามีหุ่นเต้านมให้ไปฝึกก่อนสอบได้",
 parts:S(
  B("9.1 Perform a complete breast examination and describe the abnormality.",8,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต <b>chaperone</b> ล้างมือ เปิดเผยถึงเอว · <b>Inspection (นั่ง)</b> ท่าแขนข้างลำตัว → ยกแขนเหนือศีรษะ → มือกดเอวเกร็ง pectoralis → ก้มตัว: ดูความสมมาตร ขนาด รูปร่าง, ผิวหนัง (dimpling, peau d'orange, แดง, แผล), หัวนม (retraction, deviation, discharge, Paget's) · <b>Palpation (นอน 45°/ราบ แขนข้างที่ตรวจไว้ใต้ศีรษะ)</b>: เริ่มข้างปกติ ใช้ฝ่านิ้ว 3 นิ้ว คลำเป็นวงเล็ก ๆ 3 ระดับแรง ตามแบบ <b>vertical strip</b> ครอบคลุมจากไหปลาร้าถึง inframammary fold และ midsternum ถึง midaxillary line รวม <b>axillary tail</b> · ใต้ areola + บีบดู discharge · <b>LN</b>: axillary (5 กลุ่ม: anterior, posterior, lateral, central, apical — พยุงแขนผู้ป่วย), supraclavicular, infraclavicular · <b>บรรยายก้อน</b>: ข้าง, quadrant/ตำแหน่งนาฬิกา, ระยะจากหัวนม, ขนาด, รูปร่าง, ขอบ, ผิว, ความแข็ง, mobility (ติดผิว/ติด pectoralis/ผนังอก), กดเจ็บ · <b>หลังตรวจ</b>: คลุมผ้า ขอบคุณ ล้างมือ · สรุป (ตาม sp): left breast mass at 2 o'clock, 4 cm from nipple, ~2 cm, irregular, hard, mobile, no skin involvement, no axillary LN → <b>triple assessment</b> (clinical + mammogram/US + core needle biopsy)",
   exp:"Triple assessment: clinical examination + imaging (mammogram ± US; อายุ &lt;30–35 ปีใช้ US) + pathology (core needle biopsy)",
   rubric:"ได้ = chaperone + inspection หลายท่า + คลำครบพื้นที่ (รวม axillary tail) อย่างเป็นระบบ + หัวนม + LN ครบ + บรรยายก้อนครบ + triple assessment · ตก = ไม่ขออนุญาต",
   pts:[H("เตรียม",10),CR(P("แนะนำตัว ขออนุญาต chaperone","ขออนุญาต","consent","chaperone","แนะนำตัว")),
    H("ดู",20),P("ดูหลายท่า","ยกแขน","raise","เท้าเอว","hip","ก้ม","lean","4 ท่า","หลายท่า"),P("ผิวหนังและหัวนม","dimpl","peau","retract","บุ๋ม","หัวนม","nipple","ผิวหนัง"),
    H("คลำ",40),CR(P("คลำครบพื้นที่อย่างเป็นระบบ (vertical strip) รวม axillary tail","strip","spiral","systematic","เป็นระบบ","axillary tail","tail","ทั้งเต้า")),P("ใต้ areola / nipple discharge","areola","discharge","หัวนม"),CR(P("LN: axillary ครบกลุ่ม + supra/infraclavicular","axill","รักแร้","supraclav","infraclav","ต่อมน้ำเหลือง")),
    H("บรรยาย + แผน",30),CR(P("บรรยายก้อน: ตำแหน่ง ขนาด ขอบ ความแข็ง mobility","นาฬิกา","o.?clock","quadrant","ขนาด","size","ขอบ","margin","แข็ง","mobil","เคลื่อน")),P("Triple assessment (mammogram/US + core biopsy)","triple","mammo","ultrasound","core","biopsy")]})
 ),
 interp:"ตรวจเต้านมบนหุ่นอย่างเป็นระบบ บรรยายก้อนให้ครบองค์ประกอบ และวางแผน triple assessment",
 summary:["Chaperone เสมอ · ดู 4 ท่า","คลำ vertical strip ทั่วเต้า + axillary tail + ใต้ areola","LN: axillary 5 กลุ่ม + supra/infraclavicular","บรรยาย: ข้าง ตำแหน่งนาฬิกา ระยะจากหัวนม ขนาด ขอบ แข็ง mobility","Triple assessment"]}),

/* ===== OSCE 10 ===== */
Co({page:268,sec:"OSCE",orig:"10",topic:"proc",sub:"Foley catheter",ex:1,proc:1,title:"Procedure — urethral catheterization in a male manikin",
 stem:`A male patient has acute urinary retention. Using the male catheterization manikin and equipment provided, insert a urethral (Foley) catheter. The examiner is observing.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - ใส่ foley's catheter",
 sp:"(Claude เติม) หุ่นใส่สายสวนปัสสาวะชาย · อุปกรณ์: Foley catheter 14–16 Fr, ถุงปัสสาวะ, ชุดสวนปัสสาวะ sterile (ถ้วย สำลี/gauze ผ้าเจาะกลาง ปากคีบ), น้ำยาทำความสะอาด (NSS/povidone-iodine), 2% lidocaine jelly, syringe 10 mL + sterile water, ถุงมือ sterile, เทปพลาสเตอร์ · อาจารย์ดูเฉย ๆ",
 flag:"รายละเอียดผู้ป่วย/อุปกรณ์ Claude เติม (ไฟล์จดแค่ 'ใส่ foley's catheter')",
 parts:S(
  B("10.1 Insert a Foley catheter.",10,{tags:["proc"],key:"ไฟล์จดแค่หัวข้อ ใส่ Foley's catheter",
   ans:"<b>เตรียม</b>: แนะนำตัว ยืนยันผู้ป่วย อธิบายข้อบ่งชี้ ขั้นตอน ขออนุญาต · ถามแพ้ยาชา/povidone/latex · เลือกสายขนาด 14–16 Fr · ตรวจอุปกรณ์ (ทดสอบ balloon ได้ตามแนวทางของสถาบัน) · จัดท่านอนหงาย · ล้างมือ เปิดชุด sterile สวม<b>ถุงมือ sterile</b> · <b>ทำ</b>: มือข้างไม่ถนัด (มือ non-sterile หลังจับองคชาต) รูดหนังหุ้มปลายลง ทำความสะอาด<b>จากรูเปิดท่อปัสสาวะวนออกด้านนอก</b> สำลี 1 ก้อนต่อ 1 รอบ · ปูผ้าเจาะกลาง · ใส่ <b>lidocaine jelly เข้าท่อปัสสาวะ</b> รอ 2–3 นาที · จับองคชาตตั้งฉาก 90° กับลำตัว ดึงตึงเล็กน้อย · สอดสายช้า ๆ ด้วยมือ sterile จน<b>ปัสสาวะไหล</b> แล้วสอดต่อ<b>จนสุดถึงโคนแยก (Y-junction)</b> · <b>ใส่ sterile water 10 mL</b> เข้า balloon (ห้ามใช้ลม/NSS; ถ้าผู้ป่วยเจ็บให้หยุดและดูด balloon ออก) · ดึงสายกลับเบา ๆ จนติด bladder neck · <b>รูดหนังหุ้มปลายกลับ</b> (ป้องกัน paraphimosis) · ต่อถุงปัสสาวะ <b>ยึดสายกับหน้าท้อง/ต้นขา</b> · ถุงต่ำกว่าระดับกระเพาะปัสสาวะ ไม่แตะพื้น · <b>หลังทำ</b>: บันทึกปริมาณปัสสาวะ ลักษณะ เวลา ขนาดสาย ปริมาณน้ำใน balloon · ทิ้งขยะ ล้างมือ",
   exp:"ข้อห้าม: สงสัย urethral injury (เลือดที่รูเปิด, ต่อมลูกหมากลอยสูง, perineal hematoma — pelvic fracture) → ทำ retrograde urethrogram / suprapubic cystostomy · ใส่ไม่เข้าใน BPH ลองสาย Coudé หรือปรึกษา urologist ไม่ฝืน",
   rubric:"ได้ = consent + aseptic technique + ทำความสะอาดถูกทิศ + lidocaine jelly + 90° + สอดจนสุดก่อน inflate + sterile water + รูดหนังหุ้มกลับ + ยึดสาย/ถุงต่ำ + บันทึก · ตก = inflate ก่อนปัสสาวะไหล หรือไม่รูดหนังกลับ",
   pts:[H("เตรียม",20),CR(P("แนะนำตัว ยืนยันผู้ป่วย อธิบาย ขออนุญาต","แนะนำตัว","ยืนยัน","identif","ขออนุญาต","consent","อธิบาย")),P("เลือกขนาดสาย / ตรวจอุปกรณ์","14 ?fr","16 ?fr","14-16","\\bfr\\b","french","ขนาดสาย","อุปกรณ์"),CR(P("ล้างมือ + ถุงมือ sterile + aseptic","sterile","aseptic","ปลอดเชื้อ","ถุงมือ","glove")),
    H("ทำ",60),P("รูดหนังหุ้มปลาย ทำความสะอาดจากรูเปิดวนออก","meatus","รูเปิด","วนออก","inside out","ทำความสะอาด","clean"),P("Lidocaine jelly เข้าท่อปัสสาวะ","lidocaine","jelly","xylocaine","หล่อลื่น","lubric"),P("จับองคชาต 90° สอดสายช้า ๆ","90","ตั้งฉาก","perpendic"),CR(P("สอดจนปัสสาวะไหลแล้วสอดต่อจนสุด (Y-junction) ก่อน inflate","y.?junction","จนสุด","hub","ปัสสาวะไหล","urine flow","bifurcat")),CR(P("Inflate balloon ด้วย sterile water 10 mL","sterile water","น้ำกลั่น","10 ml","balloon","inflate")),CR(P("รูดหนังหุ้มปลายกลับ (กัน paraphimosis)","รูดกลับ","reduce","foreskin","หนังหุ้ม","paraphimosis")),
    H("หลังทำ",20),P("ต่อถุง ยึดสาย ถุงต่ำกว่า bladder","ยึด","secure","tape","ต้นขา","หน้าท้อง","ต่ำกว่า","below"),P("บันทึกปริมาณปัสสาวะ/ขนาดสาย","บันทึก","record","document","ปริมาณ")]})
 ),
 interp:"ใส่ Foley ในชายด้วย aseptic technique: inflate balloon หลังสอดสุดและเห็นปัสสาวะ และรูดหนังหุ้มปลายกลับเสมอ",
 summary:["Consent → aseptic → ทำความสะอาดจากรูเปิดวนออก → lidocaine jelly","องคชาต 90° → ปัสสาวะไหล → สอดต่อจนสุด → sterile water 10 mL","รูดหนังหุ้มปลายกลับ · ยึดสาย · ถุงต่ำกว่า bladder","ข้อห้าม: สงสัย urethral injury (เลือดที่รูเปิด, pelvic fracture)"]}),

/* ===== OSCE 11 ===== */
Co({page:268,sec:"OSCE",orig:"11",topic:"proc",sub:"Sterile gloving/scrub",ex:1,proc:1,title:"Procedure — surgical hand scrub, drying and gloving before entering theatre",seen:"คล้าย MDCU65 RoB OSCE 13 (เช็ดผ้าใส่ถุงมือเข้า OR)",
 stem:`You are about to assist in an operation. Demonstrate surgical hand antisepsis (scrubbing), drying your hands, and putting on a sterile gown and gloves. The examiner is observing.`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - เช็ดมือกับล้างมือ เข้าห้องผ่าตัด >>อย่าลืมถอดนาฬิกา",
 sp:"(Claude เติม) อ่างล้างมือผ่าตัด (เปิดน้ำด้วยเท้า/เข่า/เซ็นเซอร์), แปรง/ฟองน้ำชุบ chlorhexidine 4% หรือ povidone-iodine 7.5%, ห่อผ้าเช็ดมือ sterile, เสื้อกาวน์ sterile, ถุงมือ sterile · ผู้สอบใส่หมวก mask ไว้แล้ว · อาจารย์สังเกตว่า<b>ถอดนาฬิกา/เครื่องประดับ</b>หรือไม่",
 flag:"รายละเอียดอุปกรณ์ Claude เติม",
 notes:"ผู้จดเน้น 'อย่าลืมถอดนาฬิกา' (ซ้ำกับข้อแนะนำทั่วไปของตอนที่ 2)",
 parts:S(
  B("11.1 Scrub, dry, gown and glove.",10,{tags:["proc"],key:"ไฟล์: อย่าลืมถอดนาฬิกา",
   ans:"<b>ก่อนล้าง</b>: <b>ถอดนาฬิกา แหวน กำไล</b> · เล็บสั้น ไม่ทาเล็บ · สวมหมวกคลุมผม + mask (ตรวจว่าแนบ) · ตรวจไม่มีแผลที่มือ · <b>Surgical scrub</b>: เปิดน้ำ ล้างมือถึงศอกก่อน (pre-wash) ทำความสะอาดใต้เล็บ · ใช้ chlorhexidine 4% หรือ povidone-iodine 7.5% ขัดตามลำดับ <b>ปลายนิ้ว → นิ้วทุกด้าน → ซอกนิ้ว → ฝ่ามือ หลังมือ → ข้อมือ → แขนถึงเหนือศอก ~5 cm</b> (ตามเวลา 2–5 นาทีตามผลิตภัณฑ์ หรือนับครั้ง) · <b>มือสูงกว่าศอกตลอด</b> ไม่แตะอะไร · ล้างน้ำจากปลายนิ้วไปศอกทางเดียว · (alcohol-based surgical hand rub เป็นทางเลือกที่ยอมรับ) · เดินเข้าห้องโดยใช้หลังเปิดประตู มือตั้งขึ้นห่างตัว · <b>เช็ดมือ</b>: หยิบผ้า sterile ไม่ให้น้ำหยดใส่ชุด · ใช้ผ้าคนละครึ่ง/คนละด้านต่อแขน เช็ดจาก<b>มือ → ข้อมือ → ศอก</b> ทางเดียว ห้ามย้อนกลับ ทิ้งผ้า · <b>ใส่เสื้อกาวน์</b>: จับด้านในคอเสื้อ ปล่อยคลี่ สอดแขน (มือไม่โผล่พ้นแขนเสื้อ — closed technique) ผู้ช่วยผูกด้านหลัง · <b>ใส่ถุงมือ closed technique</b> · ส่งสายผูกเอวผ่านผู้ช่วย sterile/ผู้ช่วย non-sterile ใช้ที่จับ แล้วหมุนตัว · หลังสวมเสร็จ: มืออยู่ระดับอก–เอว ด้านหน้า ไม่ห้อยหรือกอดอกใต้รักแร้",
   exp:"WHO guideline surgical hand preparation: ใช้ antimicrobial soap หรือ alcohol-based handrub; ไม่จำเป็นต้องใช้แปรงขัดผิว (ทำให้ผิวถลอก) ใช้แปรงเฉพาะใต้เล็บ · พื้นที่ sterile ของเสื้อกาวน์ = ด้านหน้าตั้งแต่อกถึงระดับโต๊ะ และแขนเสื้อถึงเหนือศอก",
   rubric:"ได้ = ถอดนาฬิกา/เครื่องประดับ + ลำดับการขัดถูกและครบเวลา + มือสูงกว่าศอก + เช็ดมือทางเดียว + closed gloving + ไม่ปนเปื้อน · ตก = ไม่ถอดนาฬิกา หรือ contaminate แล้วไม่เริ่มใหม่",
   pts:[H("ก่อนล้าง",20),CR(P("ถอดนาฬิกา แหวน เครื่องประดับ","นาฬิกา","watch","แหวน","ring","เครื่องประดับ","jewel")),P("หมวก mask เล็บสั้น","หมวก","surgical cap","mask","เล็บ","nail"),
    H("Scrub",40),CR(P("ขัดตามลำดับ ปลายนิ้ว → ศอก ครบเวลา","ปลายนิ้ว","fingertip","ซอกนิ้ว","ศอก","elbow","นาที","minute","chlorhexidine","povidone")),CR(P("มือสูงกว่าศอกตลอด ล้างจากปลายนิ้วไปศอก","สูงกว่าศอก","above.*elbow","hands up","มือสูง","ยกมือ")),
    H("เช็ดมือ",15),P("เช็ดมือทางเดียว มือ → ศอก ไม่ย้อน ใช้คนละด้านผ้า","เช็ด","dry","ทางเดียว","ไม่ย้อน","towel","ผ้า"),
    H("กาวน์ + ถุงมือ",25),P("ใส่กาวน์ ไม่ให้ด้านนอกปนเปื้อน","gown","กาวน์","เสื้อ"),CR(P("Closed gloving technique","closed","ถุงมือ","glov")),P("มืออยู่ระดับอก–เอว ด้านหน้า","ระดับอก","waist","เอว","chest level","ด้านหน้า")]})
 ),
 interp:"ทำ surgical scrub + gowning + gloving ครบขั้นตอนโดยไม่ปนเปื้อน (อย่าลืมถอดนาฬิกา)",
 summary:["ถอดนาฬิกา/แหวน · หมวก mask · เล็บสั้น","Scrub ปลายนิ้ว → ศอก 2–5 นาที · มือสูงกว่าศอก","เช็ดมือทางเดียว มือ → ศอก คนละด้านผ้า","Gown + closed gloving · มือระดับอก–เอว"]}),

/* ===== OSCE 12 ===== */
Co({page:268,sec:"OSCE",orig:"12",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — hand-tied knots and one vertical mattress stitch",seen:"คล้าย MDCU65 RoB OSCE 10–11 และ MDCU66 RoD OSCE 5",
 stem:`Two pieces of rubber are placed side by side on the board. The examiner is observing.<br>1. Tie a secure 3-throw knot to bring them together.<br>2. Place one vertical mattress stitch (the needle is already loaded on the needle holder).`,
 gray:"ตอนที่ 2 ข้อสอบเก่า - ผูก ยาง 2 อันมาติดกัน 3 throw กับ 1 stitch vertical mattress ร้อยเข็มให้",
 sp:"แผ่นยาง 2 ชิ้นวางชิดกัน (จำลองขอบแผล) · ไหมสำหรับผูกมือ · needle holder ที่จับเข็มพร้อมไหมไว้แล้ว (ไฟล์: 'ร้อยเข็มให้'), toothed forceps, กรรไกร · อาจารย์ดูความถูกต้องของปม (square ไม่เป็น granny) และเทคนิคการเย็บ",
 flag:"ไฟล์ไม่ได้ระบุว่าผูกด้วยมือแบบ one-hand หรือ two-hand — เฉลยรับได้ทั้งสองแบบ",
 parts:S(
  B("12.1 Tie a secure 3-throw knot.",4,{tags:["proc"],
   ans:"ผูก <b>square (reef) knot</b> 3 throws: throw แรกและสองต้อง<b>สลับทิศ</b> (ถ้าทิศเดียวกัน = granny knot หลวมง่าย) · <b>วางมือ/ดึงไหมในแนวราบขนานกับแผล ทิศตรงข้ามกันให้ปมลงถึงเนื้อเยื่อ</b> (ใช้นิ้วชี้ดันปมลง) ไม่ยกไหมขึ้น (จะดึงเนื้อเยื่อ) · <b>ความตึงพอดี</b> ขอบชิดกันไม่รัดแน่นจนเนื้อเยื่อขาดเลือด · throw ที่สามกันหลุด · ตัดไหมเหลือ ~3–5 mm (ไหม monofilament ยาวกว่าเล็กน้อย)",
   exp:"Knot security ขึ้นกับชนิดไหม: monofilament ลื่น (Prolene, nylon) ต้องผูกมากกว่า 3 throws · surgeon's knot (พันสองรอบใน throw แรก) ช่วยกันคลายเมื่อแผลตึง",
   rubric:"ได้ = square knot (สลับทิศ) 3 throws แน่น + ดันปมลงในแนวราบ + ตึงพอดี · บางส่วน = เป็น granny knot หรือปมลอย",
   pts:[CR(P("Square knot: throws สลับทิศ (ไม่เป็น granny)","square","reef","สลับ","ไม่.*granny","alternat")),P("3 throws","3 throw","สามครั้ง","3 ครั้ง","three"),P("ดันปมลงในแนวราบ ไม่ยกไหม","แนวราบ","flat","horizontal","ดันปม","push"),P("ความตึงพอดี ขอบชิด","ตึงพอดี","approximat","ชิด","tension")]}),
  B("12.2 Place one vertical mattress stitch.",4,{tags:["proc"],
   ans:"จับ needle holder แบบ thenar grip ที่ 1/3 ท้ายเข็ม · ใช้ toothed forceps จับขอบเบา ๆ · <b>Far–far</b>: แทงเข็มตั้งฉากห่างขอบ ~5–8 mm หมุนข้อมือตามความโค้งเข็ม ออกฝั่งตรงข้ามระยะเท่ากัน (ชั้นลึก) · <b>Near–near</b>: กลับเข็ม แทงจากฝั่งที่ออก ห่างขอบ ~1–2 mm ชั้นตื้น ข้ามไปออกฝั่งที่เริ่ม · ผูก instrument tie (square 3 throws) ปมอยู่ข้างแผล ไม่อยู่บนรอยต่อ · ได้ขอบ <b>eversion</b> · ตัดไหม",
   exp:"Vertical mattress: ดีสำหรับ eversion และลดแรงตึง (far bite รับแรง) · horizontal mattress: กระจายแรงตามแนวแผล ห้ามเลือดดี",
   rubric:"ได้ = far-far แล้ว near-near ถูกลำดับ ระยะเท่ากันสองฝั่ง + eversion + ปมข้างแผล",
   pts:[CR(P("Far-far then near-near","far","near","ไกล","ใกล้")),P("แทงตั้งฉาก หมุนตามความโค้งเข็ม ระยะเท่ากันสองฝั่ง","ตั้งฉาก","perpendic","90","curve","โค้ง","เท่ากัน","symmetr"),P("Eversion + ปมข้างแผล","evert","ปลิ้น","ข้างแผล")]})
 ),
 interp:"ทักษะพื้นฐาน: ผูก square knot ที่แน่นและถูกทิศ และเย็บ vertical mattress ได้ eversion",
 summary:["Square knot = throws สลับทิศ · ทิศเดียวกัน = granny (หลวม)","ดันปมลงในแนวราบ ทิศตรงข้าม · ตึงพอดี","Vertical mattress: far-far (5–8 mm ลึก) → near-near (1–2 mm ตื้น)","ปมอยู่ข้างแผล · ขอบแผลปลิ้นออก"]}),

/* ===== OSCE 13 ===== */
Co({page:268,sec:"OSCE",orig:"13",topic:"path",sub:"Breast cancer staging",title:"Pathology report — breast cancer: TNM stage",seen:"คล้าย MDCU65 RoB OSCE 15 (อ่านผลพาโธ TNM มะเร็งเต้านม)",
 stem:`Pathology report, modified radical mastectomy, right breast: invasive carcinoma of no special type (ductal), histologic grade 2; tumor size 3.2 cm; adjacent ductal carcinoma in situ with foci of microinvasion; all margins free; metastatic carcinoma in 2 of 14 axillary lymph nodes (largest deposit 6 mm, no extranodal extension). Chest X-ray and liver ultrasound: no metastasis.<br>1. Give the TNM classification.<br>2. What is the anatomic stage?`,
 gray:"ข้อสอบใหม่ - ให้ผล patho มา stage CA breast TNM น่าจะ T2N1 นะ M ไม่แน่ใจอ่ะ มันมี microinvasive",
 flag:"⚠ ค่าทั้งหมดในผลพยาธิ (ขนาด 3.2 cm, LN 2/14) Claude แต่งให้ตรงกับคำตอบที่ผู้จดจำได้ (T2N1) · ผู้จดไม่แน่ใจเรื่อง M และพูดถึง microinvasive",
 notes:"ไฟล์จัดเป็น 'ข้อสอบใหม่' · ผู้จดตอบ T2N1 ไม่แน่ใจ M และกล่าวถึง microinvasive",
 opinion:"ผู้จดสับสนเรื่อง microinvasion — microinvasion (≤1 mm, T1mi) มีผลต่อ T เฉพาะเมื่อไม่มี invasive component ขนาดใหญ่ ในรายงานที่มีก้อน invasive 3.2 cm แล้ว T ใช้ขนาดก้อนใหญ่สุด (T2) · M ใช้ cM0 เมื่อไม่มีหลักฐานทางคลินิก/ภาพ",
 parts:S(
  B("13.1 TNM classification and anatomic stage.",4,{tags:["path"],key:"ผู้จด: น่าจะ T2N1, M ไม่แน่ใจ (มี microinvasive)",
   ans:"<b>pT2</b> (invasive tumor &gt;2 ถึง ≤5 cm; ใช้ขนาดก้อน invasive ที่ใหญ่สุด — microinvasion ใน DCIS ไม่เปลี่ยน T เมื่อมีก้อน invasive ใหญ่แล้ว) · <b>pN1a</b> (axillary LN บวก 1–3 ต่อม, deposit &gt;2 mm) · <b>cM0</b> (ไม่มีหลักฐานแพร่กระจาย — <b>ไม่ใช้ MX</b> ในระบบ AJCC ปัจจุบัน) → <b>Anatomic stage IIB</b> (T2N1M0) · ต้องมี ER/PR/HER2 เพื่อจัด prognostic stage",
   exp:"T1mi = microinvasion ≤1 mm (ใช้เมื่อเป็นมะเร็งที่มีแค่ microinvasion) · N: micrometastasis 0.2–2 mm = pN1mi, isolated tumor cells ≤0.2 mm = pN0(i+) · AJCC 8th ยกเลิกการใช้ MX",
   rubric:"ได้ = pT2 + pN1a + cM0 (ไม่ใช่ MX) + IIB · บางส่วน = ใช้ T1mi เพราะมี microinvasion (ผิด)",
   pts:[CR(P("pT2","t2")),CR(P("pN1a","n1")),P("cM0 (ไม่ใช้ MX)","m0"),CR(P("Stage IIB","iib","2b")),P("Microinvasion ไม่เปลี่ยน T เมื่อมีก้อน invasive ใหญ่","microinvas","t1mi","ขนาดใหญ่สุด","largest")]})
 ),
 interp:"อ่านผลพยาธิมะเร็งเต้านม: ใช้ขนาดก้อน invasive ใหญ่สุดเป็น T, นับ LN เป็น N, M จากคลินิก/ภาพ (ไม่ใช้ MX)",
 summary:["T จากขนาดก้อน invasive ใหญ่สุด · T1mi เฉพาะ microinvasion ≤1 mm อย่างเดียว","N1a = 1–3 axillary LN (>2 mm) · N1mi = 0.2–2 mm","M0/M1 — ไม่ใช้ MX (AJCC 8)","T2N1M0 = IIB"]}),

/* ===== OSCE 14 ===== */
Co({page:268,sec:"OSCE",orig:"14",topic:"img",sub:"Mammogram",title:"Mammogram — describe and categorize the findings",seen:"คล้าย MDCU65 RoB OSCE 2 (บรรยาย mammogram)",
 stem:`Bilateral screening mammograms (craniocaudal and mediolateral oblique views) of a 52-year-old woman are shown.<br>1. Name the views.<br>2. Describe the abnormality.<br>3. Give the BI-RADS category and the next step.`,
 gray:"ข้อสอบใหม่ - ให้อ่าน mammogram คือ ไม่รู้เหมือนกันว่าตอบอะไรยังงัย >.<",
 flag:"⚠ "+NOIMG+" · ผู้จดจำไม่ได้ว่าภาพแสดงอะไร — ความผิดปกติ (กลุ่มหินปูน) และอายุผู้ป่วย Claude เลือกเอง",imgAlt:"ภาพ mammogram ของเต้านมทั้งสองข้าง ท่า CC และ MLO",
 notes:"ไฟล์จัดเป็น 'ข้อสอบใหม่' · ผู้จดเขียนว่าไม่รู้ว่าตอบอย่างไร",
 parts:S(
  B("14.1 Name the views, describe the abnormality, give the BI-RADS category and next step.",5,{tags:["img"],
   ans:"<b>Views</b>: <b>craniocaudal (CC)</b> และ <b>mediolateral oblique (MLO)</b> ของเต้านมทั้งสองข้าง (MLO ต้องเห็น pectoralis major ถึงระดับหัวนม) · <b>บรรยายเป็นลำดับ</b>: breast composition (density a–d) → mass/calcification/architectural distortion/asymmetry → ตำแหน่ง (ข้าง, quadrant, ความลึก) → ผิว หัวนม → axillary LN · <b>ภาพที่เลือก</b>: เต้านมซ้าย upper outer quadrant มี <b>กลุ่มหินปูนขนาดเล็ก รูปร่างหลากหลาย (fine pleomorphic) เรียงตัวเป็นเส้นแตกแขนง (fine-linear branching) กระจายแบบ segmental</b> ไม่มีก้อนชัด · ข้างขวาปกติ · <b>BI-RADS 4C</b> (หรือ 5 ถ้า fine-linear branching ชัด) — high suspicion for malignancy (DCIS) · <b>Next step</b>: <b>stereotactic (vacuum-assisted) core biopsy</b> + specimen radiograph ยืนยันว่าได้หินปูน · ตรวจร่างกายเต้านมและ LN",
   exp:"BI-RADS: 0 ต้องตรวจเพิ่ม · 1 ปกติ · 2 benign · 3 probably benign (ติดตาม 6 เดือน, มะเร็ง ≤2%) · 4 suspicious (4A 2–10%, 4B 10–50%, 4C 50–95%) → biopsy · 5 highly suggestive (≥95%) → biopsy · 6 พิสูจน์แล้วว่าเป็นมะเร็ง",
   rubric:"ได้ = CC + MLO + บรรยายชนิดและการกระจายของหินปูน/ก้อน + BI-RADS ที่สอดคล้อง + biopsy · บางส่วน = บรรยายไม่เป็นระบบ",
   pts:[CR(P("Views: CC + MLO","craniocaudal","\\bcc\\b","mediolateral","\\bmlo\\b")),P("Breast density / composition","density","composition","dense","ความหนาแน่น"),CR(P("Fine pleomorphic / fine-linear branching calcifications, segmental","calcif","หินปูน","pleomorph","linear","branching","segmental")),CR(P("BI-RADS 4C/5","bi.?rads ?4","bi.?rads ?5","4c")),P("Stereotactic core biopsy","stereotac","core","biopsy","vacuum")]})
 ),
 interp:"อ่าน mammogram อย่างเป็นระบบ (views → density → ความผิดปกติ → ตำแหน่ง → BI-RADS) และรู้การจัดการตาม BI-RADS",
 summary:["Views: CC + MLO (MLO เห็น pectoralis ถึงระดับหัวนม)","ลำดับ: density → mass/calcification/distortion/asymmetry → ตำแหน่ง → ผิว หัวนม LN","หินปูน fine pleomorphic / fine-linear branching segmental = suspicious (DCIS)","BI-RADS 3 ติดตาม 6 เดือน · 4–5 biopsy"]})

);
})();
