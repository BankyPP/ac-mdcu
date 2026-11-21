(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU72 RoC (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   72C: OSCE 12 สถานี (SO22 หน้า 8–24 มี Suggestions เป็นแนวคำตอบ) + MEQ 14 ข้อ (SM21 หน้า 10–27 ไม่มีคีย์) · รูป mm/mo */
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
const KF="ไม่มีไฟล์เฉลย: ";
const KH="มีคีย์ลายมือในไฟล์ (ดูรูปเฉลย) · ขยายความโดย Claude";
const KS2="มีแนวคำตอบในไฟล์ (หน้า Suggestions/Review) · ขยายความโดย Claude";
const BS=(q,m,o)=>B(q,m,Object.assign({key:KS2},o));
const BK=(q,m,o)=>B(q,m,Object.assign({key:KH},o));
const Co=o=>Object.assign({set:"MDCU72",ro:"RoC",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:11,orig:"1",topic:"proc",sub:"Anorectal exam",ex:1,proc:1,img:["mo11_i1"],title:"Rectal bleeding — perform PR and diagnose",
 stem:`A patient presents with bleeding per rectum.<br>Perform the physical examination on the model and give the diagnosis.<br>After the examination, the picture is shown: identify A and B and give the diagnosis.`,
 gray:"1. ผู้ป่วยมาด้วยอาการถ่ายเป็นเลือด จงแสดงการตรวจร่างกายและวินิจฉัย (ตอนแรกรูปคว่ำไว้ ตรวจหุ่น PR เสร็จอาจารย์เปิดรูปถาม A, B)",
 notes:"สรุปจากหน้า Suggestions ในไฟล์: แนะนำตัว ถามชื่อ บอกว่าจะตรวจอะไร เชิญขึ้นเตียง จัดท่า ใส่ถุงมือ ทา KY jelly ดูก่อนว่ามี lesion (บอกอาจารย์ว่าดูอยู่) บอกก่อนสอดนิ้ว คลำ ให้ขมิบ เช็ดก้น ใส่กางเกง รายงานผล · A external hemorrhoid, B internal hemorrhoid, Dx combined hemorrhoid",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Rectal examination.",6,{tags:["pe"],ans:"แนะนำตัว ถามชื่อ อธิบาย ขออนุญาต · <b>จัดท่า left lateral (Sims)</b> งอเข่าชิดอก · ใส่ถุงมือ · <b>inspection</b> ของ perianal (บอกอาจารย์ว่ากำลังดู): hemorrhoid, fissure, fistula opening, skin tag · ทา <b>lubricant</b> · บอกผู้ป่วยก่อนสอดนิ้ว · คลำรอบ 360° (mass, tenderness, prostate/cervix) · <b>ให้ขมิบ (anal tone)</b> · ดูถุงมือ (เลือด, mucus, สีอุจจาระ) · เช็ดก้นให้ผู้ป่วย ช่วยใส่กางเกง · รายงานผล",rubric:"1/ประเด็น",pts:[P("Introduce, explain, consent","consent","introduce","แนะนำ","อธิบาย"),CR(P("Left lateral position","left lateral","sims","ตะแคง")),CR(P("Inspect perianal area first","inspect","ดู")),P("Lubricate and warn before insertion","lubric","jelly","บอกก่อน"),CR(P("Palpate 360 degrees","360","palpat","รอบ")),P("Anal tone (squeeze)","tone","squeeze","ขมิบ"),P("Inspect glove","glove","ถุงมือ"),P("Clean patient and report","clean","เช็ด","report","รายงาน")]}),
  BS("1.2 Identify A and B and diagnosis.",3,{tags:["spot"],ans:"A = <b>external hemorrhoid</b> (ใต้ dentate line, คลุมด้วยผิวหนัง/anoderm) · B = <b>internal hemorrhoid</b> (เหนือ dentate line, คลุมด้วย mucosa) · Dx: <b>combined (mixed) hemorrhoid</b>",rubric:"1/ข้อ",pts:[CR(P("A external hemorrhoid","external")),CR(P("B internal hemorrhoid","internal")),P("Combined hemorrhoid","combined","mixed")]})
 ),
 interp:"Combined hemorrhoid",
 summary:["Left lateral, inspect before inserting finger","External below dentate line, internal above","Both = combined (mixed) hemorrhoid"]}),

/* ===== OSCE 2 ===== */
Co({page:12,orig:"2",topic:"img",sub:"Mammogram",title:"Annual check-up mammogram in a 60-year-old woman",
 stem:`A 60-year-old woman comes for an annual check-up. Four mammogram images are given (Rt MLO, Lt MLO, Rt CC, Lt CC).<br>1. Name each view.<br>2. What do you find?<br>3. Give the provisional diagnosis.<br>4. What further investigation will you send?`,
 gray:"2. ผู้ป่วยหญิงอายุ 60 ปี ตรวจเช็คสุขภาพประจำปี 2.1 บอกชื่อท่าการตรวจ 2.2 พบอะไรบ้างในผู้ป่วยรายนี้ 2.3 provisional diagnosis 2.4 ส่งตรวจอะไรเพิ่มเติม (โจทย์ให้รูป mammogram มาสี่รูป Rt MLO, Lt MLO, Rt CC, Rt CC)",
 flag:NOIMG,imgAlt:"Mammogram 4 รูป มีก้อน lobulated hyperdense มี coarse calcification ~1 ซม. ที่ right upper outer quadrant และต่อมน้ำเหลืองรักแร้สองข้าง",
 notes:"สรุปจาก Suggestions: 2.1 ตอบ MLO/CC และ Lt/Rt ของแต่ละรูป · 2.2 lobulated hyperdensity lesion, coarse calcification about 1×1 cm at right upper outer quadrant, right and left axillary lymphadenopathy · 2.3 ไม่แน่ใจว่าใช่ CA breast เพราะก้อนขอบชัดมาก · 2.4 Ultrasound",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("2.1 Views.",2,{tags:["img"],ans:"<b>Right MLO, Left MLO, Right CC, Left CC</b> — MLO เห็น pectoralis muscle เป็นสามเหลี่ยม · marker บอกข้าง",rubric:"1/ประเด็น",pts:[CR(P("MLO","mlo","mediolateral")),CR(P("CC","cc","craniocaudal"))]}),
  BS("2.2 Findings.",3,{tags:["img"],ans:"<b>Lobulated hyperdense lesion with coarse calcification ~1×1 cm at right upper outer quadrant</b> · <b>bilateral axillary lymphadenopathy</b>",rubric:"1/ประเด็น",pts:[CR(P("Lobulated hyperdense mass","lobulat","hyperdens","mass")),P("Coarse calcification","coarse","calcif"),P("Right upper outer quadrant","upper outer","uoq"),P("Axillary lymphadenopathy","axill","lymph")]}),
  BS("2.3 Provisional diagnosis.",2,{tags:["img"],ans:"ก้อนขอบชัด + coarse (popcorn) calcification → นึกถึง <b>involuting fibroadenoma</b> (benign) แต่มี axillary node → ต้องแยก <b>carcinoma of breast</b> · ผู้เขียนไฟล์ไม่แน่ใจคำตอบ",rubric:"1/ประเด็น",pts:[P("Fibroadenoma (benign)","fibroadenoma","benign"),CR(P("Rule out carcinoma","carcinoma","cancer","มะเร็ง"))]}),
  BS("2.4 Further investigation.",2,{tags:["img"],ans:"<b>Breast ultrasound</b> (+ axilla) → ถ้าสงสัย <b>core needle biopsy</b>",rubric:"1/ประเด็น",pts:[CR(P("Ultrasound","ultrasound","u/s","us")),P("Core biopsy if suspicious","biopsy","core")]})
 ),
 interp:"Screening mammogram",
 summary:["4 standard views: bilateral CC + MLO","Coarse popcorn calcification = involuting fibroadenoma","Next: ultrasound ± core biopsy"]}),

/* ===== OSCE 3 ===== */
Co({page:13,orig:"3",topic:"suture",sub:"Simple and vertical mattress",ex:1,proc:1,title:"Suture on a simulated patient — simple and vertical mattress",
 stem:`Place 1 simple interrupted suture and 1 vertical mattress suture, in order, as you would on a real patient (assume gloves are on and local anesthesia has been given).`,
 gray:"3. เย็บ simple suture, vertical mattress อย่างละ 1 ท่า ทำตามลำดับเหมือนกับคนไข้จริง (สมมติว่าใส่ถุงมือและฉีดยาชาเสร็จแล้ว)",
 notes:"สรุปจาก Suggestions: อาจารย์คุมสอบ — ต้องแนะนำตัวกับคนไข้ก่อน เอา forceps หนีบแผลถามว่าเจ็บไหมก่อน บอกว่าจะลงเข็ม ต้องขึ้นกลางแผล เย็บข้ามไปอีกฝั่งเลยไม่ได้",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Before suturing.",3,{tags:["suture"],ans:"แนะนำตัว อธิบาย · <b>ทดสอบชาด้วยการหนีบ forceps แล้วถามว่าเจ็บไหม</b> · บอกผู้ป่วยก่อนลงเข็ม",rubric:"1/ประเด็น",pts:[P("Introduce and explain","introduc","แนะนำ","explain"),CR(P("Test anesthesia with forceps","test","forceps","เจ็บ","pinch")),P("Warn before needle","warn","บอก")]}),
  BS("3.2 Technique.",5,{tags:["suture"],ans:"<b>Simple</b>: ลงเข็มตั้งฉาก <b>ขึ้นตรงกลางแผลก่อน</b> แล้วจึงแทงอีกฝั่ง (ไม่แทงข้ามสองฝั่งทีเดียว) ระยะเท่ากัน ผูก square knot ปมข้างแผล · <b>Vertical mattress</b>: far-far แล้ว near-near",rubric:"1/ประเด็น",pts:[CR(P("Bring needle out in the middle of the wound","middle","กลางแผล")),P("Equal bites","equal","เท่ากัน"),P("Square knot at side","knot","ปม"),CR(P("Vertical mattress far-far near-near","far","near"))]})
 ),
 interp:"Suture",
 summary:["Test anesthesia before suturing","Simple: bring needle out mid-wound","Vertical mattress: far-far, near-near"]}),

/* ===== OSCE 4 ===== */
Co({page:14,orig:"4",topic:"img",sub:"Bowel obstruction",img:["mo14_i2","mo14_i3","mo14_i1"],title:"Abdominal pain — CXR and plain abdomen",
 stem:`A 40-year-old man presents with abdominal pain. The results are shown.<br>1. What is each film and in what position was it taken (in order)?<br>2. Describe the abnormalities.<br>3. Give the diagnosis and the most common cause.`,
 gray:"4. ผู้ป่วยชาย อายุ 40 ปี มาด้วยอาการปวดท้อง มีผลการตรวจเป็นดังนี้ 4.1 ภาพแต่ละภาพคืออะไร ถ่ายท่าอะไร ตอบตามลำดับ 4.2 บรรยายความผิดปกติที่พบ 4.3 วินิจฉัยพร้อมบอกสาเหตุที่พบมากที่สุด",
 notes:"สรุปจาก Suggestions: ตอบ gut obstruction ตามสูตร · ฟิล์มสามแผ่นวางบนแท่น แผ่นสุดท้ายวางบนโต๊ะ บางคนมองไม่เห็น ได้ไม่ครบสามใบให้ดูหน่อย",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("4.1 Films and positions.",3,{tags:["img"],ans:"1. <b>CXR upright PA</b> (ไม่มี free air) · 2. <b>Plain abdomen upright</b> · 3. <b>Plain abdomen supine</b> = <b>acute abdomen series</b>",rubric:"1/ภาพ",pts:[CR(P("Upright CXR","chest","cxr")),CR(P("Upright abdomen","upright","erect","ยืน")),CR(P("Supine abdomen","supine","นอน"))]}),
  BS("4.2 Abnormalities.",3,{tags:["img"],ans:"<b>Dilated small bowel loops (>3 ซม.)</b> อยู่ตรงกลาง มี <b>valvulae conniventes</b> พาดเต็มความกว้าง · <b>multiple air-fluid levels (step-ladder)</b> ในท่ายืน · ลมในลำไส้ใหญ่น้อย/ไม่มี · ไม่มี free air ใต้กะบังลม",rubric:"1/ประเด็น",pts:[CR(P("Dilated small bowel with valvulae conniventes","dilat","valvulae","small bowel")),CR(P("Multiple air-fluid levels","air-fluid","air fluid","step")),P("Little colonic gas, no free air","colon","free air","collapse")]}),
  BS("4.3 Diagnosis and most common cause.",3,{tags:["img"],ans:"<b>Small bowel obstruction</b> · สาเหตุที่พบบ่อยที่สุด: <b>adhesion (postoperative band)</b> · รองลงมา hernia, tumor",rubric:"1/ประเด็น",pts:[CR(P("Small bowel obstruction","small bowel obstruction","sbo","gut obstruction")),CR(P("Adhesion","adhesion","band"))]})
 ),
 interp:"SBO",
 summary:["Acute abdomen series: CXR upright + abdomen upright + supine","SBO: central dilated loops, valvulae, step-ladder levels","Most common cause: adhesions"]}),

/* ===== OSCE 5 ===== */
Co({page:15,orig:"5",topic:"hx",sub:"Bowel obstruction",ex:1,title:"History — 6 hours of abdominal pain",
 stem:`A 40-year-old Thai woman has had abdominal pain for 6 hours before coming to hospital.<br>1. Take further history.<br>2. Name 1 further investigation.`,
 gray:"5. ผู้ป่วยหญิงไทยอายุ 40 ปี ปวดท้อง 6 ชั่วโมง ก่อนมาโรงพยาบาล 5.1 ซักประวัติผู้ป่วยรายนี้เพิ่มเติม 5.2 ควรส่งตรวจอะไรเพิ่มเติม 1 อย่าง",
 sp:"ปวดบิดเป็นพักๆ ทั่วท้อง อาเจียน ท้องอืด ไม่ถ่าย ไม่ผายลม เคยผ่าตัดช่องท้องมาก่อน",
 notes:"สรุปจาก Suggestions: เห็น check list (วางข้างหน้า) ต้องเริ่มแนะนำตัว ถามชื่อ อาชีพ ที่อยู่ ภูมิลำเนา + เป็นผู้หญิง ถาม gyne ด้วย PH FH SH · คนนี้เป็น gut obstruction ประวัติผ่าตัด ไม่ถ่าย ไม่ผายลม สำคัญมาก",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 History.",8,{tags:["hx"],ans:"แนะนำตัว ชื่อ อายุ <b>อาชีพ ภูมิลำเนา</b> · ปวด: onset ตำแหน่ง ลักษณะ (บิดเป็นพักๆ/colicky) ร้าว ความรุนแรง ปัจจัย · <b>อาเจียน</b> (ลักษณะ bile/feculent) · <b>ท้องอืด, ไม่ถ่าย ไม่ผายลม</b> · ไข้ · อุจจาระปัสสาวะ · <b>ประวัติผ่าตัดช่องท้อง</b> · ก้อนที่ขาหนีบ (hernia) · <b>ประวัติทางนรีเวช: LMP, ตั้งครรภ์, ตกขาว</b> · PH FH SH · ยา",rubric:"1/ประเด็น",pts:[P("Identity, occupation, domicile","occupation","อาชีพ","ภูมิลำเนา","address"),CR(P("Pain characteristics","colick","onset","ลักษณะ","ร้าว","location")),CR(P("Vomiting","vomit","อาเจียน")),CR(P("Obstipation: no stool or flatus","flatus","ผายลม","ไม่ถ่าย","obstip")),P("Distension","distens","อืด"),CR(P("Previous abdominal surgery","surgery","ผ่าตัด","operation")),P("Hernia","hernia","ขาหนีบ"),CR(P("Gynecologic history / LMP","lmp","ประจำเดือน","gyne","pregnan")),P("PH, FH, SH","family","social","past")]}),
  BS("5.2 One investigation.",2,{tags:["hx"],ans:"<b>Acute abdomen series</b> (CXR upright + plain abdomen supine/upright) · (หญิงวัยเจริญพันธุ์: <b>urine pregnancy test</b> ก่อนฉายรังสี)",rubric:"ได้",pts:[CR(P("Plain abdomen / acute abdomen series","plain","acute abdomen","film","x-ray","xray")),P("Urine pregnancy test","pregnancy","upt")]})
 ),
 interp:"Hx SBO",
 summary:["Colicky pain + vomiting + distension + obstipation","Ask previous surgery and hernia","Women: LMP/pregnancy"]}),

/* ===== OSCE 6 ===== */
Co({page:16,orig:"6",topic:"suture",sub:"Suture selection",img:["mo16_f"],title:"Choose sutures — bowel and episiotomy repair",
 stem:`The pictures show steps of bowel suturing and wound closure using suture (6.1) for bowel anastomosis. Then (6.2) is used, then the muscle layer, then (6.3) to join both sides, and finally the skin is closed with (6.4).<br>Fill in the table for each: letter of the packet (A–E), generic name, trade name, mono/multifilament, absorbable or not, and structure used for.`,
 gray:"6. ภาพต่อไปนี้แสดงขั้นตอนการเย็บลำไส้และการเย็บปิดบาดแผล โดยใช้ไหม __(6.1)__ ในการเย็บต่อลำไส้ หลังจากนั้น (จำไม่ได้ แต่ตอบ (6.2) catgut + perineum) ต่อไปจะเย็บชั้นกล้ามเนื้อ เมื่อเสร็จแล้วจะใช้ (ไหมสีแดง) __(6.3)__ เย็บเชื่อมสองข้าง สุดท้ายทำการเย็บปิดแผลที่ผิวหนังด้วย __(6.4)__ + ตาราง ตัวอักษร ชื่อสามัญ ชื่อการค้า Mono/multifilament Absorbable/non-absorbable โครงสร้างที่ใช้ (6.1 = Bowel)",
 notes:"สรุปจาก Suggestions: โจทย์งงๆ หลักคือเป็นเรียงความมีช่องว่าง บางข้อบอกมาเลยว่าจะเย็บอะไร บางข้อให้ดูรูปเอง + มีซองไหมปิดชื่อไว้ (มีอันหนึ่งเป็นเส้นเลย) ตอบในตาราง · ⚠ ตัวอักษรซองเป็นการอ่านของ Claude: A ซองมีน้ำยา = chromic catgut, C เส้นดำไม่มีซอง = silk",opinion:"ความมั่นใจต่ำ (ตัวอักษรซอง)",
 parts:S(
  BS("6.1 Bowel anastomosis.",2,{tags:["suture"],ans:"ชั้นใน: <b>Vicryl (polyglactin 910)</b> 3-0 — multifilament (braided), absorbable · ชั้นนอก seromuscular (Lembert): <b>silk</b> 3-0 (ซอง C) — multifilament, non-absorbable",rubric:"1/ประเด็น",pts:[CR(P("Vicryl or silk","vicryl","polyglactin","silk")),P("Correct mono/multi and absorbable","braided","multifilament","absorb")]}),
  BS("6.2 Vaginal mucosa / perineum.",2,{tags:["suture"],ans:"<b>Chromic catgut</b> (ซอง A — บรรจุในน้ำยา) — natural, multifilament (twisted), absorbable · เย็บ vaginal mucosa แบบ continuous locking",rubric:"1/ประเด็น",pts:[CR(P("Chromic catgut","catgut","chromic")),P("Absorbable natural","absorb","natural")]}),
  BS("6.3 Muscle layer joining both sides.",2,{tags:["suture"],ans:"<b>Vicryl 2-0</b> (polyglactin 910, ไหมสีม่วง/แดง) — multifilament, absorbable · interrupted",rubric:"1/ประเด็น",pts:[CR(P("Vicryl","vicryl","polyglactin")),P("Absorbable braided","absorb","braided","multifilament")]}),
  BS("6.4 Skin.",2,{tags:["suture"],ans:"<b>Subcuticular absorbable</b>: Vicryl Rapide/Monocryl 3-0–4-0 (ซอง E) — หรือ <b>nylon (Ethilon/Dafilon)</b> monofilament non-absorbable ถ้าเป็นผิวหนังทั่วไป",rubric:"1/ประเด็น",pts:[CR(P("Subcuticular absorbable or nylon","subcuticular","monocryl","rapide","nylon")),P("Monofilament","monofilament")]})
 ),
 interp:"Suture selection",
 summary:["Catgut: natural absorbable — perineum, mucosa","Vicryl: braided absorbable — muscle, bowel inner layer","Silk: Lembert seromuscular; nylon for skin"]}),

/* ===== OSCE 7 ===== */
Co({page:17,orig:"7",topic:"proc",sub:"Scrub and gloving",ex:1,proc:1,title:"Surgical hand washing and sterile gloving",
 stem:`Demonstrate surgical hand washing, describe each step, and put on sterile gloves.`,
 gray:"7. ให้แสดงวิธีการล้างมือ บรรยายขั้นตอนการทำ และใส่ถุงมือ sterile",
 notes:"สรุปจาก Suggestions: บอกด้วยว่าถอดนาฬิกา ตอนนั้นล้างกับแอลกอฮอล์ บรรยายว่ากำลังทำอะไร ถูฝ่ามือ หลังมือ ซอกเล็บ เสร็จแล้วใส่ถุงมือ (ถุงมือผ่าตัด แน่นมาก ใส่ยาก) ระวังคอนตามิเนตตอนขั้นตอนนี้",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("7.1 Surgical hand hygiene.",5,{tags:["proc"],ans:"<b>ถอดนาฬิกา แหวน</b> ตัดเล็บสั้น · ล้างด้วย antiseptic (chlorhexidine/povidone scrub หรือ <b>alcohol-based hand rub</b>) · ทำครบ: <b>ซอกเล็บ</b>, ฝ่ามือ, <b>หลังมือ</b>, ง่ามนิ้ว, นิ้วโป้ง, ข้อมือ จนถึง <b>ข้อศอก</b> · มือสูงกว่าข้อศอกตลอด (น้ำไหลจากมือลงศอก) · ระยะเวลาตามมาตรฐาน (scrub 3–5 นาที/rub จนแห้ง) · บรรยายแต่ละขั้น",rubric:"1/ประเด็น",pts:[CR(P("Remove watch and jewelry","watch","นาฬิกา","jewel","แหวน")),P("Nails","nail","เล็บ"),CR(P("All surfaces to elbow","elbow","ศอก","palm","back","ฝ่ามือ")),CR(P("Hands above elbows","above","สูงกว่า")),P("Adequate time","minute","นาที","dry")]}),
  BS("7.2 Sterile (closed or open) gloving.",4,{tags:["proc"],ans:"เปิดห่อถุงมือโดยไม่แตะด้านใน · มือเปล่าจับเฉพาะ <b>ด้านในของ cuff</b> ข้างแรก · มือที่ใส่ถุงมือแล้ว <b>สอดใต้ cuff</b> ข้างที่สอง · มืออยู่ระดับเอว-อก ไม่แตะสิ่งไม่ sterile · ถ้าปนเปื้อนต้องเปลี่ยน",rubric:"1/ประเด็น",pts:[CR(P("Bare hand touches only inner cuff","inner","inside","ด้านใน")),CR(P("Gloved hand under cuff of second glove","under","cuff","ใต้")),P("Hands above waist","waist","เอว"),P("Change if contaminated","contamin","เปลี่ยน")]})
 ),
 interp:"Scrub + gloving",
 summary:["Remove watch/rings","Hands above elbows","Bare hand touches only glove interior"]}),

/* ===== OSCE 8 ===== */
Co({page:18,orig:"8",topic:"inst",sub:"Surgical instruments",img:["mo18_i1","mo18_i2","mo18_i4","mo18_i3"],title:"Identify instruments A–D",
 stem:`Name each instrument (A–D) and state its use.`,
 gray:"8. จงบอกชื่อของเครื่องมือที่พบ และประโยชน์ (A กรรไกรโค้ง B forceps ปลายสามเหลี่ยม C retractor D ท่อโค้งปลายฟ้า)",
 notes:"Suggestions: ตามแอค · ไม่มีเฉลยรายชิ้น — เฉลยโดย Claude",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("8.1 Names and uses.",4,{tags:["inst"],ans:"A. <b>Curved Mayo (or Metzenbaum) scissors</b> — ตัดเนื้อเยื่อ (Metzenbaum สำหรับเนื้อเยื่อบอบบาง) · B. <b>Babcock forceps</b> — จับเนื้อเยื่อบอบบางแบบ atraumatic เช่น ลำไส้ ไส้ติ่ง ท่อนำไข่ · C. <b>Army-Navy retractor</b> — ดึงรั้งชั้นตื้น · D. <b>Chest drain (thoracic catheter) with trocar</b> — ระบาย pleural space ต่อ underwater seal",rubric:"1/ชิ้น",pts:[P("Scissors","scissor","mayo","metzenbaum"),CR(P("Babcock forceps","babcock")),CR(P("Army-Navy retractor","army","navy")),P("Chest drain","chest","thorac","icd")]})
 ),
 interp:"Instruments",
 summary:["Babcock = atraumatic, fenestrated triangular tip","Allis has teeth","Army-Navy = superficial retraction"]}),

/* ===== OSCE 9 ===== */
Co({page:19,orig:"9",topic:"inst",sub:"Tubes and dressing",img:["mo19_i1","mo19_i2"],title:"Identify — tube and gauze dressing",
 stem:`Name each item (A–B) and state its use.`,
 gray:"9. จงบอกชื่อของเครื่องมือที่พบ และประโยชน์ (A สายยางใสปลายแดง B แผ่นก๊อซสีเหลืองในซอง)",
 notes:"Suggestions: ตามแอค · เฉลยโดย Claude",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("9.1 Names and uses.",4,{tags:["inst"],ans:"A. <b>Nasogastric tube</b> (หรือ suction catheter) — decompression กระเพาะ, ให้อาหาร/ยา · B. <b>Paraffin (petrolatum) gauze / tulle gras</b> (เช่น Bactigras ที่มี chlorhexidine) — <b>non-adherent dressing</b> สำหรับแผลไฟไหม้, donor site ของ skin graft, แผลถลอก ช่วยไม่ให้ก๊อซติดแผล",rubric:"1/ประเด็น",pts:[CR(P("NG tube","ng","nasogastric","suction")),P("Use: decompression or feeding","decompress","feed"),CR(P("Paraffin/tulle gauze","paraffin","tulle","vaseline","bactigras","petrol")),P("Non-adherent dressing for burns/graft","non-adher","burn","graft","ไม่ติด")]})
 ),
 interp:"Tube + tulle",
 summary:["Tulle gras = non-adherent dressing","Used on burns and STSG donor sites","NG: decompression/feeding"]}),

/* ===== OSCE 10 ===== */
Co({page:20,orig:"10",topic:"img",sub:"Urolithiasis",img:["mo20_i1"],title:"IVP — describe, diagnose, treat",
 stem:`An IVP series of a patient is given (scout film shown).<br>1. Describe the abnormality.<br>2. Give the diagnosis.<br>3. How will you treat it?`,
 gray:"10. ให้ภาพ IVP ของผู้ป่วยรายหนึ่งมา 10.1 บรรยายความผิดปกติที่พบ 10.2 จงให้การวินิจฉัย 10.3 รักษายังไง (ไฟล์: รูปนี้ film scout คล้ายๆ ที่ได้ ของจริงให้รูปตั้งแต่ scout ถึง post void phase เยอะมาก แต่อาจารย์บอกว่าดูแค่รูปแรกก็ตอบได้แล้ว)",
 notes:"Suggestions: ตามแอค · เฉลยโดย Claude — อ่าน scout film เป็น radio-opaque calculus บริเวณไตขวา",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 Findings.",3,{tags:["img"],ans:"<b>Scout (KUB) film</b>: <b>radio-opaque density บริเวณเงาไตขวา</b> (renal stone) · phase contrast: <b>delayed nephrogram/excretion</b>, <b>hydronephrosis</b>/hydroureter ถึงระดับนิ่ว (ถ้ามีอุดกั้น) · post-void: residual",rubric:"1/ประเด็น",pts:[CR(P("Radio-opaque calculus in renal area","opaque","stone","calcul","นิ่ว")),P("Delayed excretion","delay"),P("Hydronephrosis","hydroneph","dilat")]}),
  B("10.2 Diagnosis.",2,{tags:["img"],ans:"<b>Right renal stone (nephrolithiasis)</b> ± obstruction",rubric:"ได้",pts:[CR(P("Renal stone","renal stone","nephrolith","kidney stone","urolith"))]}),
  B("10.3 Treatment.",3,{tags:["img"],ans:"ตามขนาด/ตำแหน่ง: <b><2 ซม. → ESWL</b> หรือ RIRS · <b>>2 ซม. หรือ staghorn → PCNL</b> · มี infection + obstruction → <b>drain ก่อน (PCN หรือ DJ stent)</b> + antibiotic · ดื่มน้ำมาก หาสาเหตุ metabolic",rubric:"1/ประเด็น",pts:[CR(P("ESWL for small stone","eswl","shock")),CR(P("PCNL for large/staghorn","pcnl","percutaneous")),P("Decompress if infected obstruction","pcn","nephrostomy","dj","stent"),P("Hydration and metabolic work-up","fluid","น้ำ","metabolic")]})
 ),
 interp:"Renal stone",
 summary:["Scout film first — radio-opaque stone","<2 cm ESWL/RIRS, >2 cm PCNL","Infected obstruction → drain first"]}),

/* ===== OSCE 11 ===== */
Co({page:21,orig:"11",topic:"hx",sub:"Hematuria",title:"Gross hematuria in a 70-year-old man — history and investigations",
 stem:`A 70-year-old man presents with bright red urine.<br>1. Write the additional history needed for differential diagnosis (written answer, no patient).<br>2. What investigations will you send?`,
 gray:"11. ผู้ป่วยชาย อายุ 70 ปี มาด้วยอาการปัสสาวะเป็นสีเลือดสด 11.1 ซักประวัติอะไรเพิ่มเติมเพื่อวินิจฉัยแยกโรค (เขียนตอบ ไม่มีคนไข้) 11.2 ส่งตรวจอะไรเพิ่มเติม",
 notes:"Suggestions: ตามแอค · เฉลยโดย Claude",opinion:"ความมั่นใจสูง",
 parts:S(
  B("11.1 Additional history.",6,{tags:["hx"],ans:"<b>Timing</b> ของเลือด (initial = urethra/prostate, terminal = bladder neck, total = bladder/upper tract) · <b>ปวดหรือไม่ปวด</b> (painless → tumor; colic → stone) · <b>clot</b> (รูปหนอน → upper tract) · LUTS: frequency, dysuria, weak stream (BPH, UTI) · ไข้ · น้ำหนักลด · <b>สูบบุหรี่, สัมผัสสารเคมี (aniline dye)</b> · ยาต้านเลือด/anticoagulant · trauma · ประวัตินิ่ว, ฉายรังสี, cyclophosphamide · ประวัติครอบครัว",rubric:"1/ประเด็น",pts:[CR(P("Timing: initial, terminal, total","initial","terminal","total","timing")),CR(P("Painful vs painless","pain","ปวด")),P("Clots","clot","ลิ่ม"),P("LUTS","luts","frequency","stream","dysuria"),CR(P("Smoking, chemical exposure","smok","บุหรี่","dye","chemical")),P("Anticoagulant","anticoag","warfarin","ยาต้าน"),P("Weight loss, fever, trauma","weight","fever","trauma")]}),
  B("11.2 Investigations.",4,{tags:["hx"],ans:"UA + microscopy, urine culture · CBC, BUN/Cr, coagulation · <b>urine cytology</b> · <b>CT urography</b> · <b>cystoscopy</b> · PSA (ในชายสูงอายุ ตามดุลยพินิจ)",rubric:"1/ประเด็น",pts:[P("Urinalysis and culture","ua","urinalysis","culture"),P("CBC, renal function, coagulation","cbc","creatinine","coag"),P("Urine cytology","cytology"),CR(P("CT urography","ct")),CR(P("Cystoscopy","cystoscop"))]})
 ),
 interp:"Hematuria hx",
 summary:["Timing localizes source","Painless gross hematuria + smoker = bladder cancer","CT urography + cystoscopy"]}),

/* ===== OSCE 12 ===== */
Co({page:22,orig:"12",topic:"inst",sub:"Urinary catheter",img:["mo22_i1"],title:"Three-way Foley catheter — specific indication",
 stem:`1. What is this device?<br>2. What is its specific indication?`,
 gray:"12. 12.1 อุปกรณ์ดังกล่าวคืออะไร 12.2 specific indication ของอุปกรณ์นี้คืออะไร",
 notes:"Suggestions: ตามแอค",opinion:"ความมั่นใจสูง",
 parts:S(
  B("12.1 Name.",2,{tags:["inst"],ans:"<b>Three-way Foley catheter</b>",rubric:"ได้",pts:[CR(P("Three-way Foley","3-way","three-way","3 way","three way"))]}),
  B("12.2 Specific indication.",2,{tags:["inst"],ans:"<b>Continuous bladder irrigation</b> — clot retention/gross hematuria, หลัง TURP",rubric:"ได้",pts:[CR(P("Continuous bladder irrigation","irrigat","cbi"))]})
 ),
 interp:"3-way Foley",
 summary:["Third port = irrigation","Clot retention, post-TURP"]}),

/* ===== MEQ ===== */
SA({page:13,orig:"MEQ 1",num:"SA 1",sub:"Hepatobiliary",img:["mm13_i1","mm13_i2","mm14_i1"],title:"Short answer — painless jaundice with palpable mass, ERCP",
 stem:`A Thai man presents with jaundice. PE: palpable, painless, non-tender cystic mass below the costal margin that moves with respiration.<br>1. Name the sign found.<br>2. Give the differential diagnosis (1 benign, 4 malignant).<br>3. Give the full name of this investigation.<br>4. Identify A and B.`,
 gray:"1. ผู้ป่วยชายไทยมาด้วยอาการตัวเหลืองตาเหลือง PE: palpable, painless, non-tender cystic mass below costal margin, move along with respiration 1.1 จงบอกชื่อ sign 1.2 differential diagnosis (benign 1 โรค, malignant 4 โรค) 1.3 จงตอบชื่อเต็มของการตรวจนี้ 1.4 identify A,B",
 notes:"ไม่มีคีย์ในไฟล์ · คอมเมนต์ไฟล์: ข้อสอบค่อนข้างตรงแอค (มีแค่ข้อแรกที่เห็นแล้วตกใจ)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Sign.",1,{tags:["spot"],ans:"<b>Courvoisier sign</b> — palpable non-tender gallbladder + jaundice → มักไม่ใช่นิ่ว (นึกถึง malignant obstruction)",rubric:"ได้",pts:[CR(P("Courvoisier sign","courvoisier"))]}),
  B("1.2 Differential diagnosis.",5,{tags:["spot"],ans:"<b>Malignant (periampullary)</b>: <b>carcinoma of head of pancreas</b>, <b>distal cholangiocarcinoma</b>, <b>ampullary carcinoma</b>, <b>duodenal carcinoma</b> · <b>Benign</b>: chronic pancreatitis (inflammatory mass) / choledochal cyst",rubric:"1/โรค",pts:[CR(P("CA head of pancreas","pancrea")),P("Distal cholangiocarcinoma","cholangio"),P("Ampullary carcinoma","ampull"),P("Duodenal carcinoma","duoden"),P("Benign: chronic pancreatitis or choledochal cyst","chronic pancreatitis","choledochal","benign")]}),
  B("1.3 Full name of investigation.",1,{tags:["spot"],ans:"<b>Endoscopic retrograde cholangiopancreatography (ERCP)</b>",rubric:"ได้",pts:[CR(P("Endoscopic retrograde cholangiopancreatography","retrograde","cholangiopancreat"))]}),
  B("1.4 Identify A and B.",2,{tags:["spot"],ans:"A = <b>common bile duct</b> (ตีบส่วนปลาย ส่วนบนขยาย) · B = <b>main pancreatic duct</b> → ตีบทั้งสองท่อ = <b>double duct sign</b> (CA head of pancreas)",rubric:"1/ข้อ",pts:[CR(P("A common bile duct","bile duct","cbd")),CR(P("B pancreatic duct","pancreatic duct"))]})
 ),
 interp:"Periampullary CA",
 summary:["Courvoisier: painless palpable GB + jaundice","Periampullary: pancreas head, distal CBD, ampulla, duodenum","Double duct sign on ERCP/MRCP"]}),

SA({page:15,orig:"MEQ 2",num:"SA 2",sub:"Others",img:["mm15_i1"],title:"Short answer — abdominal pain with plain film",
 stem:`A 40-year-old man presents with abdominal pain.<br>1. Describe the abnormalities.<br>2. Give the 2 most likely causes.`,
 gray:"2. ผู้ป่วยชายอายุ 40 ปี มาด้วยอาการปวดท้อง 2.1 บรรยายความผิดปกติที่พบในผู้ป่วยรายนี้ 2.2 ยกตัวอย่างสาเหตุที่น่าจะเกิดมากที่สุด 2 อย่าง",
 notes:"ไม่มีคีย์ในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Findings.",3,{tags:["spot"],ans:"Supine plain abdomen: <b>pneumoperitoneum</b> — <b>Rigler (double wall) sign</b> เห็นผนังลำไส้ทั้งสองด้าน, ลมขอบตับ/ใต้กะบังลม, <b>falciform ligament sign</b>, football sign (ลูกศรบนฟิล์ม)",rubric:"1/ประเด็น",pts:[CR(P("Pneumoperitoneum / free air","pneumoperitoneum","free air")),P("Rigler (double wall) sign","rigler","double wall"),P("Falciform ligament or football sign","falciform","football")]}),
  B("2.2 Two most likely causes.",2,{tags:["spot"],ans:"<b>Perforated peptic ulcer</b> (พบบ่อยที่สุด) · <b>perforated appendicitis</b> / perforated diverticulitis / colonic perforation",rubric:"1/ข้อ",pts:[CR(P("Perforated peptic ulcer","peptic","ulcer","ppu")),P("Other hollow viscus perforation","append","diverticul","colon")]})
 ),
 interp:"Pneumoperitoneum",
 summary:["Supine film: Rigler, falciform, football sign","Most common: perforated peptic ulcer","Emergency laparotomy/laparoscopy"]}),

SA({page:16,orig:"MEQ 3",num:"SA 3",sub:"Others",img:["mm16_i1"],title:"Short answer — diabetic foot",
 stem:`A diabetic patient has the wound shown.<br>1. Describe the abnormality.<br>2. What further examination will you do?<br>3. What is the most likely cause?`,
 gray:"3. ผู้ป่วยมีประวัติเป็น DM มีแผลดังรูป 3.1 บรรยายความผิดปกติที่พบ 3.2 จะตรวจร่างกายอะไรเพิ่มเติม 3.3 น่าจะเกิดจากอะไรมากที่สุด",
 notes:"ไม่มีคีย์ในไฟล์ · รูปเดียวกับ 72A MEQ 9",opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Describe.",2,{tags:["spot"],ans:"<b>Dry gangrene of the 2nd toe</b> ร่วมกับแผล/ผิวลอกที่ฝ่าเท้าส่วนหน้า",rubric:"1/ประเด็น",pts:[CR(P("Gangrene","gangren")),P("2nd toe","2nd","second","toe")]}),
  B("3.2 Further examination.",3,{tags:["spot"],ans:"<b>Peripheral pulses</b> · <b>ABI</b> (DM อาจ falsely high → toe pressure/TBI) · <b>monofilament</b>/vibration (neuropathy) · ตรวจการติดเชื้อ (probe-to-bone, cellulitis)",rubric:"1/ประเด็น",pts:[CR(P("Pulses","pulse","ชีพจร")),CR(P("ABI","abi","ankle")),P("Monofilament","monofilament","neuropath"),P("Probe to bone / infection","probe","infect")]}),
  B("3.3 Most likely cause.",2,{tags:["spot"],ans:"<b>Peripheral arterial disease (ischemia)</b> ใน DM ± neuropathy และ infection",rubric:"ได้",pts:[CR(P("PAD / ischemia","pad","ischem","arter"))]})
 ),
 interp:"Diabetic foot",
 summary:["Gangrene → vascular assessment","ABI may be falsely high in DM","Monofilament for neuropathy"]}),

SA({page:17,orig:"MEQ 4",num:"SA 4",sub:"Others",img:["mm17_i1"],title:"Short answer — painful toe nail fold",
 stem:`A patient has the toe lesion shown.<br>1. Give the diagnosis.<br>2. What are the 2 most common causes?<br>3. How will you treat it? (give drug names and doses)`,
 gray:"4. ผู้ป่วยมีแผลที่นิ้วเท้าดังรูป 4.1 จงให้การวินิจฉัย 4.2 เกิดจากอะไรมากที่สุด (2 อย่าง) 4.3 รักษายังไง (ถ้ามียา ให้ตอบชื่อ + dose ด้วย)",
 notes:"ไม่มีคีย์ในไฟล์ · หมายเหตุไฟล์: ถ้ามียาให้ตอบชื่อ + dose",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Acute paronychia with ingrown toenail</b> (great toe)",rubric:"ได้",pts:[CR(P("Paronychia","paronychia","ingrown"))]}),
  B("4.2 Two causes.",2,{tags:["spot"],ans:"<b>Ingrown toenail</b> (ตัดเล็บโค้ง/สั้น, รองเท้าคับ) · เชื้อ <b>Staphylococcus aureus</b> (และ Streptococcus)",rubric:"1/ข้อ",pts:[CR(P("Ingrown toenail","ingrown")),CR(P("Staphylococcus aureus","staph","aureus"))]}),
  B("4.3 Treatment with dose.",4,{tags:["spot"],ans:"<b>Warm soak</b> วันละ 3–4 ครั้ง · <b>Dicloxacillin 500 mg oral qid × 7 วัน</b> (หรือ cephalexin 500 mg qid) · มีหนอง → <b>incision and drainage</b> · ingrown → <b>wedge resection/partial nail avulsion</b> (± phenol matricectomy) · paracetamol 500 mg 1–2 tab prn q4–6h",rubric:"1/ประเด็น",pts:[P("Warm soak","soak","แช่"),CR(P("Antibiotic with dose","dicloxa","cephalexin","500")),CR(P("Incision and drainage","incision","drain","i&d")),P("Wedge resection / nail avulsion","wedge","avulsion","matricect")]})
 ),
 interp:"Paronychia",
 summary:["Ingrown toenail + S. aureus","Dicloxacillin 500 mg qid","Pus → I&D; recurrent → wedge resection"]}),

SA({page:18,orig:"MEQ 5",num:"SA 5",sub:"Others",img:["mm18_i1","mm18_i2"],title:"Short answer — endoscopy and rapid urease test",
 stem:`1. Name these investigations (2 answers).<br>2. Interpret the result.<br>3. How will you treat? (include drug doses)`,
 gray:"5. 5.1 จงบอกชื่อการตรวจนี้ 5.2 แปลผลว่าอะไร 5.3 จะทำการรักษายังไง (หมายเหตุไฟล์: 5.1 ต้องตอบสองคำตอบเลย 5.3 ให้ตอบ dose ยาด้วย)",
 notes:"ไม่มีคีย์ในไฟล์ · หมายเหตุ: 5.1 ต้องตอบสองคำตอบ, 5.3 ให้ dose ยา",opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Investigations.",2,{tags:["spot"],ans:"<b>Esophagogastroduodenoscopy (EGD)</b> กับ biopsy · <b>Rapid urease test (CLO test)</b> จากชิ้นเนื้อ gastric antrum",rubric:"1/ข้อ",pts:[CR(P("EGD / upper endoscopy","egd","endoscop","gastroscop")),CR(P("Rapid urease test (CLO)","urease","clo"))]}),
  B("5.2 Interpretation.",2,{tags:["spot"],ans:"สีเปลี่ยนจากเหลืองเป็น <b>ชมพู/แดง = positive</b> → <b>Helicobacter pylori infection</b>",rubric:"1/ประเด็น",pts:[CR(P("Positive — H. pylori","pylori","positive"))]}),
  B("5.3 Treatment with doses.",4,{tags:["spot"],ans:"<b>H. pylori eradication 14 วัน</b>: <b>omeprazole 20 mg bid + amoxicillin 1 g bid + clarithromycin 500 mg bid</b> (triple therapy) · หรือ bismuth quadruple (PPI bid + bismuth subsalicylate 524 mg qid + metronidazole 500 mg tid–qid + tetracycline 500 mg qid) ในพื้นที่ดื้อ clarithromycin · ตรวจยืนยันการกำจัดเชื้อด้วย <b>urea breath test</b> ≥4 สัปดาห์หลังหยุดยา",rubric:"1/ประเด็น",pts:[CR(P("PPI with dose","omeprazole","ppi","20 mg")),CR(P("Amoxicillin 1 g bid","amoxi","1 g")),CR(P("Clarithromycin 500 mg bid","clarithro","500")),P("14 days","14"),P("Confirm eradication (UBT)","breath","ubt","confirm")]})
 ),
 interp:"H. pylori",
 summary:["EGD + rapid urease (CLO) test","Pink/red = positive","Triple therapy 14 days, confirm with UBT"]}),

SA({page:19,orig:"MEQ 6",num:"SA 6",sub:"Neuro",img:["mm19_i1","mm19_i2","mm19_i3"],title:"Short answer — motor testing of 3 muscles",
 stem:`A video shows motor examination of 3 muscles (pictures 1–3).<br>Which muscle is being tested and which nerve root supplies it?`,
 gray:"6. เปิดวิดีโอแสดงการตรวจ motor function ของกล้ามเนื้อ 3 มัด ถามว่าเป็นการตรวจกล้ามเนื้อมัดไหน innervation ด้วย nerve root อะไร (วิดีโอเหมือนในสไลด์อาจารย์)",
 notes:"ไม่มีคีย์ในไฟล์ · ภาพนิ่งจากวิดีโอ — Claude ตีความ: ยกไหล่กาง, กระดกข้อเท้าขึ้น, กระดกข้อมือขึ้น",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("6.1 Muscles and roots.",6,{tags:["spot"],ans:"1. <b>Shoulder abduction — deltoid, C5</b> (axillary n.) · 2. <b>Ankle dorsiflexion — tibialis anterior, L4</b> (deep peroneal n.) [big toe extension = EHL L5] · 3. <b>Wrist extension — extensor carpi radialis, C6</b> (radial n.) [ถ้าเป็นงอข้อศอก = biceps C5–6]",rubric:"1/ประเด็น",pts:[CR(P("Deltoid C5","deltoid","c5")),CR(P("Tibialis anterior L4","tibialis","l4")),CR(P("Wrist extensors C6","wrist ext","extensor carpi","c6")),P("Nerve: axillary, deep peroneal, radial","axillary","peroneal","radial")]})
 ),
 interp:"Myotomes",
 summary:["C5 shoulder abduction, C6 wrist extension","C7 elbow extension, C8 finger flexion, T1 finger abduction","L4 dorsiflexion, L5 big toe, S1 plantarflexion"]}),

SA({page:20,orig:"MEQ 7",num:"SA 7",sub:"Plastic",img:["mm20_i1"],title:"Short answer — pressure ulcer",
 stem:`1. What position of the patient caused this wound?<br>2. Over which bone is it?`,
 gray:"7. 7.1 แผลที่พบเกิดจากผู้ป่วยทำท่าอะไร 7.2 โดนกระดูกอะไร",
 notes:"ไม่มีคีย์ในไฟล์ · Claude อ่านเป็นแผลกดทับบริเวณ sacrococcygeal",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("7.1 Position.",2,{tags:["spot"],ans:"<b>นอนหงาย (supine) นานๆ</b> ไม่พลิกตัว → <b>pressure ulcer (stage 1–2)</b> (ถ้านั่งนาน → ischial tuberosity, นอนตะแคง → greater trochanter)",rubric:"1/ประเด็น",pts:[CR(P("Supine / lying on back","supine","หงาย","lying")),P("Pressure ulcer","pressure","กดทับ","bedsore","decubitus")]}),
  B("7.2 Bone.",2,{tags:["spot"],ans:"<b>Sacrum / coccyx</b>",rubric:"ได้",pts:[CR(P("Sacrum or coccyx","sacr","coccy"))]})
 ),
 interp:"Pressure ulcer",
 summary:["Supine → sacrum, sitting → ischium, lateral → trochanter","Turn q2h, offload, nutrition","Stage 1: non-blanchable erythema"]}),

SA({page:21,orig:"MEQ 8",num:"SA 8",sub:"Plastic",img:["mm21_i1"],title:"Short answer — cleft lip timing",
 stem:`1. At what age should this child have surgery?<br>2. Why?`,
 gray:"8. 8.1 เด็กคนนี้ควรได้รับการผ่าตัดตอนอายุเท่าไหร่ 8.2 เพราะเหตุใด",
 notes:"ไม่มีคีย์ในไฟล์ · รูปเดียวกับ 72A MEQ 4 (คีย์ลายมือ 72A: 3 months / 10 weeks)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Age.",2,{tags:["spot"],ans:"<b>Cleft lip repair ~10 สัปดาห์–3 เดือน</b>",rubric:"ได้",pts:[CR(P("About 3 months / 10 weeks","3 m","10 w","3 เดือน","10 สัปดาห์","three","ten"))]}),
  B("8.2 Reason.",2,{tags:["spot"],ans:"<b>Rule of 10s</b>: อายุ ≥10 สัปดาห์, น้ำหนัก ≥10 lb, Hb ≥10 g/dL → ปลอดภัยต่อการดมยา, เนื้อเยื่อใหญ่พอให้ซ่อมได้ดี, ช่วยเรื่อง feeding และความผูกพันกับครอบครัว",rubric:"1/ประเด็น",pts:[CR(P("Rule of 10s","rule of 10","10 lb","hb","weight")),P("Anesthetic safety","anesth","ดมยา","safe")]})
 ),
 interp:"Cleft lip timing",
 summary:["Rule of 10s","Lip ~3 months, palate 9–12 months"]}),

SA({page:22,orig:"MEQ 9",num:"SA 9",sub:"Plastic",img:["mm22_i1"],title:"Short answer — facial laceration",
 stem:`1. What abnormalities may occur in this patient?<br>2. How can you examine for them?`,
 gray:"9. 9.1 บอกความผิดปกติที่น่าจะเกิดในผู้ป่วยรายนี้ 9.2 สามารถตรวจได้อย่างไร",
 notes:"ไม่มีคีย์ในไฟล์ · รูปเดียวกับ 72A MEQ 5 (คีย์ลายมือ 72A: buccal branch of facial n., Stensen duct)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("9.1 Possible injuries.",3,{tags:["spot"],ans:"<b>Buccal (± zygomatic) branch of facial nerve injury</b> · <b>Parotid (Stensen) duct injury</b> → salivary fistula/sialocele",rubric:"1/ประเด็น",pts:[CR(P("Facial nerve buccal branch","buccal","facial")),CR(P("Parotid duct","stensen","parotid"))]}),
  B("9.2 Examination.",3,{tags:["spot"],ans:"Facial nerve: ให้ <b>ยิ้ม ยิงฟัน ป่องแก้ม</b> · Stensen duct: <b>สอด cannula เข้ารูเปิดตรง upper 2nd molar แล้วฉีด saline/methylene blue ดูว่ารั่วออกแผล</b>",rubric:"1/ประเด็น",pts:[CR(P("Smile, puff cheek","smile","puff","ยิ้ม","ป่อง")),CR(P("Cannulate duct and inject saline","cannula","probe","saline","methylene"))]})
 ),
 interp:"Facial laceration",
 summary:["Buccal branch: smile, puff cheek","Stensen duct: cannulate at 2nd upper molar","Line from tragus to mid upper lip"]}),

SA({page:23,orig:"MEQ 10",num:"SA 10",sub:"Others",img:["mm23_i1"],title:"Short answer — dysphagia with barium swallow",
 stem:`A patient presents with dysphagia. The result is shown.<br>1. Name this investigation.<br>2. Describe the abnormality.<br>3. Give the diagnosis and the pathology of the disease.`,
 gray:"10. ผู้ป่วยมาด้วยอาการกลืนลำบาก มีผลการตรวจดังนี้ 10.1 จงบอกชื่อการตรวจดังกล่าว 10.2 บรรยายความผิดปกติที่พบ 10.3 วินิจฉัยและบอกพยาธิสภาพของโรค (ของจริงเป็นวิดีโออันนึงกับรูปสามรูป)",
 notes:"ไม่มีคีย์ในไฟล์ · หมายเหตุไฟล์: ของจริงมีวิดีโอ 1 อันกับรูป 3 รูป ไม่ค่อยชัด",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 Investigation and findings.",3,{tags:["spot"],ans:"<b>Barium swallow (esophagogram)</b> · <b>หลอดอาหารขยายใหญ่ คดเคี้ยว มี barium ค้าง</b> ปลายล่างตีบเรียวเรียบ (<b>bird's beak</b>) ไม่มี peristalsis",rubric:"1/ประเด็น",pts:[CR(P("Barium swallow","barium","esophagogram")),CR(P("Dilated esophagus with bird's beak","dilat","bird","taper"))]}),
  B("10.2 Diagnosis and pathology.",4,{tags:["spot"],ans:"<b>Achalasia</b> · พยาธิสภาพ: <b>เสื่อม/สูญเสีย inhibitory neurons (NO, VIP) ใน myenteric (Auerbach) plexus</b> → <b>LES คลายตัวไม่ได้</b> + <b>aperistalsis</b> ของ esophageal body → อาหารค้าง หลอดอาหารขยาย · เพิ่มความเสี่ยง squamous cell carcinoma",rubric:"1/ประเด็น",pts:[CR(P("Achalasia","achalasia")),CR(P("Loss of myenteric inhibitory neurons","myenteric","auerbach","ganglion","neuron")),CR(P("Failed LES relaxation","les","relax","sphincter")),P("Aperistalsis","peristal")]})
 ),
 interp:"Achalasia",
 summary:["Bird's beak, dilated esophagus","Loss of inhibitory neurons in Auerbach plexus","Failed LES relaxation + aperistalsis"]}),

SA({page:24,orig:"MEQ 11",num:"SA 11",sub:"Anorectal",img:["mm24_i1"],title:"Short answer — perianal warty lesions",
 stem:`1. Give the diagnosis.<br>2. What further investigations and treatment will you give?`,
 gray:"11. 11.1 จงให้การวินิจฉัย 11.2 ควรตรวจอะไรเพิ่มเติม และจะให้การรักษาอย่างไร",
 notes:"ไม่มีคีย์ในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("11.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Condyloma acuminata (anogenital warts)</b> จาก HPV 6, 11",rubric:"ได้",pts:[CR(P("Condyloma acuminata","condyloma","wart","hpv"))]}),
  B("11.2 Investigations and treatment.",5,{tags:["spot"],ans:"<b>Anoscopy/proctoscopy</b> หา intra-anal lesion · <b>ตรวจ STD อื่น: anti-HIV, VDRL/syphilis</b>, HBV · biopsy ถ้าสงสัย (Buschke-Löwenstein, SCC) · ตรวจคู่นอน · Rx: เล็ก → <b>podophyllin 25%/podofilox, imiquimod, trichloroacetic acid, cryotherapy</b> · ใหญ่/มาก/intra-anal → <b>surgical excision/electrocautery</b> · ใช้ถุงยาง, HPV vaccine",rubric:"1/ประเด็น",pts:[CR(P("Anoscopy","anoscop","proctoscop")),CR(P("HIV and syphilis serology","hiv","vdrl","syphilis","std")),P("Biopsy if atypical","biopsy"),CR(P("Topical: podophyllin, imiquimod, TCA, cryo","podophyl","imiquimod","tca","trichloro","cryo")),P("Excision/electrocautery for extensive","excision","cauter","surgical"),P("Partner and prevention","partner","condom","vaccin")]})
 ),
 interp:"Condyloma",
 summary:["HPV 6/11","Anoscopy + HIV/syphilis screen","Topical/cryo for small; excision/cautery for extensive"]}),

SA({page:25,orig:"MEQ 12",num:"SA 12",sub:"Pediatric surgery",img:["mm25_i1"],title:"Short answer — scrotal swelling in a 6-month-old",
 stem:`A 6-month-old boy has scrotal swelling.<br>1. What important physical examinations should be done?<br>2. What operation and at what age?`,
 gray:"12. เด็กผู้ชาย 6 เดือน มาด้วย scrotal swelling 12.1 บอกการตรวจร่างกายที่สำคัญในผู้ป่วยรายนี้ 12.2 ผ่าตัดอะไร ตอนอายุเท่าไหร่",
 notes:"ไม่มีคีย์ในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("12.1 Physical examination.",3,{tags:["spot"],ans:"<b>Transillumination</b> (positive = hydrocele) · <b>get above the swelling</b> (คลำขอบบนได้ = hydrocele, ไม่ได้ = inguinal hernia) · <b>reducibility</b>/ขนาดเปลี่ยนตามวัน (communicating) · คลำ <b>testis</b> ทั้งสองข้าง · cough impulse/ร้องไห้",rubric:"1/ประเด็น",pts:[CR(P("Transillumination","transillum")),CR(P("Get above the swelling","above","ขอบบน")),P("Reducibility","reduc"),P("Palpate testes","testis","testes","อัณฑะ")]}),
  B("12.2 Operation and age.",3,{tags:["spot"],ans:"<b>Infantile hydrocele</b> ส่วนใหญ่หายเอง → <b>observe ถึงอายุ 1–2 ปี</b> · ไม่หาย หรือเป็น <b>communicating hydrocele</b> → <b>herniotomy (high ligation of patent processus vaginalis) ผ่านทาง inguinal</b> · (ถ้าเป็น inguinal hernia → herniotomy เร็ว ไม่ต้องรอ)",rubric:"1/ประเด็น",pts:[CR(P("Observe until 1–2 years","1","2 ปี","observe","รอ")),CR(P("Inguinal herniotomy / high ligation","herniotomy","high ligation","processus")),P("Hernia: operate early","hernia","early")]})
 ),
 interp:"Infantile hydrocele",
 summary:["Transilluminant, can get above","Observe to 1–2 years","Persistent/communicating → inguinal herniotomy"]}),

SA({page:26,orig:"MEQ 13",num:"SA 13",sub:"Pediatric surgery",img:["mm26_i1"],title:"Short answer — intermittent crying and bloody stool",
 stem:`A 6-month-old boy has intermittent crying and the stool shown.<br>1. Give the diagnosis.<br>2. Give the initial management and definite management.`,
 gray:"13. เด็กผู้ชาย 6 เดือน intermittent crying และมีอุจจาระดังรูป 13.1 จงให้การวินิจฉัย 13.2 จงบอก initial management และ definite management",
 notes:"ไม่มีคีย์ในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("13.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Intussusception</b> (ileocolic) — currant-jelly stool",rubric:"ได้",pts:[CR(P("Intussusception","intussuscep"))]}),
  B("13.2 Management.",5,{tags:["spot"],ans:"<b>Initial</b>: NPO, <b>IV fluid resuscitation</b>, <b>NG decompression</b>, ตรวจ electrolytes, <b>U/S ยืนยัน (target/doughnut sign)</b>, ± antibiotic · <b>Definite</b>: <b>non-operative reduction (pneumatic หรือ hydrostatic enema)</b> ภายใต้ fluoroscopy/U/S ถ้าไม่มี peritonitis/perforation/shock · ล้มเหลวหรือมีข้อห้าม → <b>operative (manual) reduction ± bowel resection</b>",rubric:"1/ประเด็น",pts:[P("NPO and NG","npo","ng"),CR(P("IV fluid resuscitation","fluid","iv","resusc")),P("Ultrasound target sign","ultrasound","u/s","target","doughnut"),CR(P("Pneumatic or hydrostatic reduction","pneumatic","hydrostatic","enema","air")),CR(P("Surgery if failed or peritonitis","surg","operat","laparotomy","resection"))]})
 ),
 interp:"Intussusception",
 summary:["Currant-jelly stool, colicky crying","U/S: target sign","Air/hydrostatic enema; surgery if peritonitis/failed"]}),

SA({page:27,orig:"MEQ 14",num:"SA 14",sub:"Pediatric surgery",img:["mm27_i1"],title:"Short answer — omphalocele",
 stem:`1. Give the diagnosis.<br>2. What other anomalies should you look for?<br>3. Give the initial management.`,
 gray:"14. 14.1 วินิจฉัย 14.2 ควรหาความผิดปกติอะไรเพิ่มเติม 14.3 จงบอก initial management",
 notes:"ไม่มีคีย์ในไฟล์ · รูปเดียวกับ 72A MEQ 7 (คีย์ลายมือ 72A: omphalocele, Beckwith-Wiedemann, Wilms tumor)",opinion:"ความมั่นใจสูง",
 parts:S(
  B("14.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Omphalocele</b>",rubric:"ได้",pts:[CR(P("Omphalocele","omphalocele","exomphalos"))]}),
  B("14.2 Anomalies to look for.",3,{tags:["spot"],ans:"<b>Cardiac</b> (echo) · <b>chromosomal (trisomy 13, 18, 21)</b> · <b>Beckwith-Wiedemann</b> (hypoglycemia, macroglossia) · Pentalogy of Cantrell, OEIS",rubric:"1/ประเด็น",pts:[CR(P("Cardiac","cardiac","heart")),P("Chromosomal","trisomy","chromosom"),CR(P("Beckwith-Wiedemann","beckwith"))]}),
  B("14.3 Initial management.",3,{tags:["spot"],ans:"Keep warm · <b>คลุมถุงด้วย sterile moist dressing/plastic wrap</b> · <b>NG decompression</b> · <b>IV fluid</b> + glucose monitoring · echo · ต่อมา primary/staged closure",rubric:"1/ประเด็น",pts:[CR(P("Cover sac","cover","wrap","dressing","คลุม")),P("Keep warm","warm"),CR(P("NG decompression","ng","orogastric","decompress")),P("IV fluid and glucose","fluid","glucose","sugar")]})
 ),
 interp:"Omphalocele",
 summary:["Cardiac + chromosomal + BWS","Cover sac, warm, NG, IV fluid","Check glucose"]})

);
})();
