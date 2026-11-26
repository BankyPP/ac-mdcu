(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU68 RoB (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   68 R2: OSCE 12 สถานี (SO22 หน้า 57–59) + MEQ 10 ข้อ (SM21 หน้า 72–74 มีเฉลยบางข้อ) */
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
const Co=o=>Object.assign({set:"MDCU68",ro:"RoB",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:58,orig:"1",topic:"hx",sub:"Acute abdomen",ex:1,title:"History — 65-year-old with abdominal pain",
 stem:`Take a history from a 65-year-old man with abdominal pain. (Careful — the simulated patient may actually be a woman; don't ask about the wrong gender.)`,
 gray:"1.จงซักประวัติ ผู้ป่วยชายอายุ 65 ปีมาด้วยอาการปวดท้อง (ระวังนะ คนที่เราจะซักประวัติเขาเป็นผู้หญิง อย่าไปเผลอถามเรื่องอื่นผิดละ T^T)",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("1.1 History.",8,{tags:["hx"],ans:"<b>SOCRATES</b>: onset ตำแหน่ง ลักษณะ (colicky/constant) ร้าว ความรุนแรง ปัจจัย · อาการร่วม: <b>อาเจียน ท้องอืด ไม่ถ่าย ไม่ผายลม</b> (obstruction), ไข้, ดีซ่าน, ถ่ายดำ/เป็นเลือด, ปัสสาวะ · <b>ผู้สูงอายุ: น้ำหนักลด, เปลี่ยนนิสัยการขับถ่าย (CRC)</b>, AF/โรคหลอดเลือด (mesenteric ischemia), AAA · ยา NSAIDs, anticoagulant · ผ่าตัดเดิม hernia · PH FH SH",rubric:"1/ประเด็น",pts:[CR(P("Pain characteristics (SOCRATES)","onset","site","radiat","ร้าว","character")),CR(P("Obstructive symptoms","vomit","distens","flatus","ผายลม","อาเจียน")),P("Fever, jaundice","fever","jaundice"),P("GI bleeding","melena","bleed","เลือด"),CR(P("Weight loss, bowel habit change","weight","bowel habit","น้ำหนัก")),P("Vascular: AF, AAA","af","atrial","aneurysm","ischemi"),P("Drugs and previous surgery","nsaid","surgery","ผ่าตัด")]})
 ),
 interp:"Hx abdominal pain elderly",
 summary:["SOCRATES + associated symptoms","Elderly: CRC, mesenteric ischemia, AAA","Previous surgery, hernia"]}),

/* ===== OSCE 2 ===== */
Co({page:58,orig:"2",topic:"pe",sub:"Bowel obstruction",ex:1,title:"Examine a patient with gut obstruction",
 stem:`Examine a patient presenting with gut obstruction; mention PR and what you expect to find.`,
 gray:"2. จงตรวจร่างกาย ผู้ป่วยมาด้วยอาการ gut obstruction เวลาตรวจพูดไปด้วย ว่าจะทำอะไร ทำไม",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Examination.",7,{tags:["pe"],ans:"V/S, <b>dehydration</b> · <b>inspection: distension, surgical scar, visible peristalsis</b>, hernia · <b>auscultation: high-pitched/tinkling bowel sound</b> (late: absent) · percussion tympanic · palpation: tenderness, <b>peritonitis/strangulation signs</b>, mass · <b>ตรวจ hernia orifices ทุกตำแหน่ง</b> · <b>PR</b>: empty rectum, mass, blood",rubric:"1/ประเด็น",pts:[P("Vital signs, dehydration","dehydrat","vital"),CR(P("Distension, scar, visible peristalsis","distens","scar","peristal")),CR(P("High-pitched bowel sounds","high","tinkl","bowel sound")),P("Tympanic","tympan"),P("Tenderness / peritonitis","tender","peritonitis","guard"),CR(P("Hernia orifices","hernia")),CR(P("PR","pr","rectal"))]})
 ),
 interp:"PE gut obstruction",
 summary:["Scar + hernia orifices","High-pitched bowel sounds","PR"]}),

/* ===== OSCE 3 ===== */
Co({page:58,orig:"3",topic:"img",sub:"Mammogram",title:"Mammogram and ultrasound — describe and diagnose",
 stem:`A mammogram (followed by an ultrasound) is shown. Describe the lesion and give the diagnosis.`,
 gray:"3.Film mammogram(หลังจากนั้นมีultrasoundด้วยนะ) ให้บรรยายlesion เเละdx",
 flag:NOIMG,imgAlt:"Mammogram 2 ภาพ: ก้อนทึบขนาด ~2 cm ที่ส่วนบนด้านนอก ขอบไม่เรียบเป็นแฉก มีจุดหินปูนเล็ก · Ultrasound ก้อนเดียวกัน: เนื้อทึบเสียงดำ ขอบหยัก แนวตั้งสูงกว่ากว้าง มีเงามืดด้านหลังก้อน",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("3.1 Answer.",5,{tags:["img"],ans:"Mammogram: view (CC/MLO), ตำแหน่ง, <b>mass margin (spiculated/irregular), density, microcalcification</b> · US: hypoechoic, irregular, taller-than-wide, posterior shadowing · Dx: <b>suspicious breast carcinoma (BI-RADS 4–5)</b> → core needle biopsy",rubric:"1/ประเด็น",pts:[P("Views","cc","mlo"),CR(P("Mass features","spicul","irregular","margin")),P("US features","hypoecho","taller","shadow"),CR(P("Carcinoma / BI-RADS","carcinoma","cancer","bi-rads")),P("Core biopsy","biopsy")]})
 ),
 interp:"MMG + US",
 summary:["Describe margin, density, calcification","BI-RADS","Core biopsy"]}),

/* ===== OSCE 4 ===== */
Co({page:58,orig:"4",topic:"inst",sub:"Tubes and drains",title:"Redivac drain, colostomy bag, ICD",
 stem:`Three items: Redivac drain, colostomy bag, ICD. Give the name, use and the procedure in which each is used.`,
 gray:"4.อุปกรณ์3อย่าง redivac drain , colostomy bag, icd ถามชื่อ ประโยชน์ หัตถการที่ใช้",
 flag:NOIMG,imgAlt:"Redivac drain, colostomy bag, ICD",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Answer.",6,{tags:["inst"],ans:"<b>Redivac</b> — closed high-vacuum drain ระบายเลือด/น้ำเหลือง หลัง <b>thyroidectomy, mastectomy</b> · <b>Colostomy bag</b> — รองรับอุจจาระจาก stoma หลัง <b>Hartmann's procedure, APR</b> · <b>ICD</b> — ระบาย pleural space ใน pneumothorax/hemothorax/empyema, หลัง <b>thoracotomy</b>, ต่อ underwater seal",rubric:"1/ชิ้น",pts:[CR(P("Redivac: closed vacuum drain","redivac","vacuum")),P("After thyroidectomy/mastectomy","thyroidectomy","mastectomy"),CR(P("Colostomy bag: stoma output","colostomy","stoma")),P("Hartmann's or APR","hartmann","apr"),CR(P("ICD: pleural drainage","icd","pleura","pneumothorax")),P("Thoracotomy / underwater seal","thoracotomy","underwater")]})
 ),
 interp:"Drains",
 summary:["Redivac: thyroid/breast surgery","Colostomy: Hartmann/APR","ICD: underwater seal"]}),

/* ===== OSCE 5 ===== */
Co({page:58,orig:"5",topic:"img",sub:"Urolithiasis",title:"IVP with filling defect at the renal pelvis",
 stem:`An IVP shows a filling defect at the renal pelvis on one side (the bladder appeared normal on questioning the examiner). Describe, diagnose and plan.`,
 gray:"5.Film IVP มี filling defect ข้างหนึ่งเหมือนจะเป็นนิ่วตรงกรวยไต อีกข้างหนึ่ง เป็นก้อนต่อไตอะไรสักอย่างไม่แน่ใจ คิดว่าจะเป็น CA แต่ตรง bladder ดูเหมือนจะผิดปกติ (แต่เราไปถามอาจารย์หลังสอบเสร็จ เขาบอกว่าปกติอะ)",
 flag:NOIMG,imgAlt:"IVP มี filling defect ที่กรวยไต",
 notes:"ไม่มีเฉลยในไฟล์ · ผู้เขียนไม่แน่ใจ (นิ่ว vs ก้อน)",opinion:"ตรวจคีย์ (21 พ.ย. 2026): ไม่มีเฉลยในไฟล์ ผู้จดไม่แน่ใจ (นิ่ว vs ก้อน) — คง filling defect ที่ renal pelvis + DDx radiolucent stone vs urothelial carcinoma; work-up/การรักษาตรงกับ EAU Urolithiasis Guidelines 2025 (NCCT, RIRS/PCNL, alkalinization ใน uric acid stone) และ EAU UTUC Guidelines 2025 (CT urography, cytology, ureteroscopy + biopsy, RNU with bladder cuff ใน high-risk) · ความมั่นใจต่ำ (ไม่เห็นรูป)",
 parts:S(
  B("5.1 Answer.",5,{tags:["img"],ans:"<b>Filling defect ที่ renal pelvis</b> · ดู scout: ถ้าทึบ = radio-opaque stone; ถ้าไม่ทึบ → ddx <b>radiolucent (uric acid) stone</b>, <b>urothelial carcinoma of renal pelvis</b>, blood clot, sloughed papilla · Ix: <b>CT urography/non-contrast CT</b>, urine cytology, ureteroscopy + biopsy · Rx ตามสาเหตุ: นิ่ว → ESWL/RIRS/PCNL (uric acid → alkalinization); UTUC → <b>radical nephroureterectomy with bladder cuff</b>",rubric:"1/ประเด็น",pts:[CR(P("Filling defect in renal pelvis","filling defect")),P("Compare with scout film","scout","opaque"),CR(P("DDx: radiolucent stone vs urothelial carcinoma","lucent","uric","urothelial","transitional","tumor","carcinoma")),P("CT urography / cytology / URS biopsy","ct","cytology","ureteroscop"),P("Nephroureterectomy for UTUC","nephroureterectomy")]})
 ),
 interp:"Filling defect",
 summary:["Lucent filling defect: stone, tumor, clot, papilla","Non-contrast CT shows uric acid stones","UTUC → nephroureterectomy + bladder cuff"]}),

/* ===== OSCE 6 ===== */
Co({page:58,orig:"6",topic:"img",sub:"Bowel obstruction",title:"Gut obstruction — 3 films",
 stem:`Three films of gut obstruction.<br>1. Name and position of each film.<br>2. Describe.<br>3. Diagnosis.<br>4. Treatment.`,
 gray:"6. Film Gut obstruction 3 แผ่น ถาม1.ชื่อfilmอะไร+มีท่าอะไรบ้าง 2.บรรยายลักษณะ 3.วินิจฉัย 4.การรักษา",
 flag:NOIMG,imgAlt:"ฟิล์ม 3 แผ่น (CXR ท่ายืน, ช่องท้องท่ายืน, ช่องท้องท่านอน): ลำไส้เล็กโป่งหลายห่วงกลางท้อง เห็นรอยพับเต็มความกว้าง ท่ายืนมี air-fluid level หลายระดับเป็นขั้นบันได ลมในลำไส้ใหญ่น้อยมาก ไม่มีลมใต้กะบังลม",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Answer.",7,{tags:["img"],ans:"<b>Acute abdomen series</b>: CXR upright, abdomen upright, abdomen supine · dilated small bowel, valvulae, <b>air-fluid levels ต่างระดับใน loop เดียวกัน</b> · Dx: <b>small bowel obstruction</b> (adhesion) · Rx: <b>NPO, NG decompression, IV fluid/electrolyte</b>, monitor → strangulation/ไม่ดีขึ้น → <b>laparotomy (adhesiolysis)</b>",rubric:"1/ประเด็น",pts:[CR(P("Three films with positions","upright","supine")),CR(P("Dilated SB with air-fluid levels","dilat","air-fluid","air fluid")),CR(P("SBO","small bowel obstruction","sbo")),CR(P("NPO, NG, IV fluid","npo","ng","fluid")),P("Surgery if strangulation/failure","surg","laparotomy","adhesiolysis")]})
 ),
 interp:"SBO",
 summary:["Drip and suck","Surgery for strangulation","Adhesions most common"]}),

/* ===== OSCE 7 ===== */
Co({page:58,orig:"7",topic:"path",sub:"Breast cancer staging",title:"Pathology report — wide excision and SLNB: TNM",
 stem:`A 2-page pathology report (in English) of a wide excision of the breast and sentinel lymph node biopsy is given. Give the TNM stage.`,
 gray:"7.ผลpatho wide excision breast เเละ sentinel lymphnode biopsy ยาว2หน้าเป็นภาษาอังกฤษทั้งหมด เเล้วให้บอก TNM (อันนี้มีคำเยอะอะ รีบๆหาตรงที่เขารายงานผลจริงๆนะเดี๋ยวไม่ทัน)",
 flag:NOIMG,imgAlt:"รายงานพยาธิวิทยา 2 หน้า (สรุปส่วนสำคัญ): Left breast, wide excision: invasive ductal carcinoma, histologic grade 2 · largest tumor dimension 2.8 cm · margins free (closest 0.6 cm) · lymphovascular invasion present · ER positive 90%, PR positive 60%, HER2 negative (IHC 1+) · Sentinel lymph nodes, left axilla: metastatic carcinoma in 1 of 3 nodes, largest deposit 4 mm, no extranodal extension · ไม่มีข้อมูลการแพร่กระจายไปอวัยวะอื่น",
 notes:"ไม่มีเฉลยในไฟล์ · ไม่มีใบผลจริง — ข้อนี้ฝึกหลักการอ่าน · ตรวจคีย์ 22 พ.ย. 2026: เดิมไม่ได้บอก suffix (sn) ทั้งที่โจทย์เป็น wide excision + SLNB → เพิ่ม ‘pN…(sn) เมื่อจัด N จาก SLNB และ LN &lt;6 ต่อม’ และ ITC = pN0(i+) ตาม AJCC Cancer Staging Manual 8th ed. (Breast)",opinion:"ความมั่นใจปานกลาง · ตรวจคีย์ (22 พ.ย. 2026): รายงาน SLNB ต้องใส่ suffix (sn) ถ้า LN ที่ตัด &lt;6 ต่อม (AJCC 8th) · ความมั่นใจสูง (หลักการ) / ปานกลาง (ไม่มีใบผลจริง)",
 parts:S(
  B("7.1 How to stage.",6,{tags:["path"],ans:"อ่านส่วน <b>final diagnosis/synoptic</b>: ชนิด (IDC), grade, <b>ขนาดก้อนใหญ่สุด → T</b> (T1 ≤2 ซม., T2 >2–5, T3 >5, T4 chest wall/skin) · margin, LVI · <b>จำนวน node positive/total → N</b> (pN1 1–3, pN2 4–9, pN3 ≥10; micrometastasis &gt;0.2–2 mm = pN1mi; ITC ≤0.2 mm = pN0(i+)) · <b>suffix (sn)</b>: ใส่เมื่อจัด N จาก sentinel node biopsy และจำนวน LN ที่ตัดออกรวม (sentinel + non-sentinel) &lt;6 ต่อม เช่น <b>pN1a(sn)</b> — ถ้าได้ ≥6 ต่อมไม่ใส่ (AJCC 8th) · หลายก้อนใส่ (m) ที่ T · M จาก staging (ไม่มีข้อมูล = cM0) · ER/PR/HER2, Ki-67",rubric:"1/ประเด็น",pts:[CR(P("T from largest tumor size","size","t1","t2","ขนาด")),CR(P("N from number of positive nodes + (sn) suffix ถ้า SLNB และ LN &lt;6 ต่อม","node","pn1","n1","positive","\\(sn\\)","sentinel")),P("M from clinical staging","m0","metast"),P("Margin, grade, LVI","margin","grade","lvi"),P("Receptor status","er","her2")]})
 ),
 interp:"pTNM breast",
 summary:["T: ≤2 / 2–5 / >5 cm","pN1 1–3, pN2 4–9, pN3 ≥10","Read the synoptic summary"]}),

/* ===== OSCE 8 ===== */
Co({page:58,orig:"8",topic:"inst",sub:"Suture materials",title:"Chromic catgut, nylon, Prolene",
 stem:`Three sutures: A chromic catgut, B nylon, C Prolene.<br>1. Name.<br>2. Type (source, filament, absorbability).<br>3. Example of use.`,
 gray:"8.มีไหมมา 3 แบบ A. chromic catgut B. nylon C. prolene แต่ละแบบให้บอก 1. ชื่อ 2. ประเภท (ต้นกำเนิด/เส้นใย/การละลาย) 3. ยกตัวอย่างการใช้งาน",
 flag:NOIMG,imgAlt:"ไหม 3 ชนิด",
 notes:"แนวคำตอบในไฟล์: เย็บ perineum, เย็บ skin, เย็บ vessel",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Answer.",6,{tags:["inst"],ans:"A <b>Chromic catgut</b>: natural, multifilament (twisted), absorbable → <b>เย็บ perineum</b>/mucosa · B <b>Nylon (polyamide)</b>: synthetic, monofilament, non-absorbable → <b>เย็บ skin</b> · C <b>Prolene (polypropylene)</b>: synthetic, monofilament, non-absorbable → <b>เย็บ vessel</b>, hernia",rubric:"1/ประเด็น",pts:[CR(P("Catgut natural absorbable","catgut","natural")),P("Catgut use: perineum","perineum","mucosa"),CR(P("Nylon synthetic mono non-absorbable","nylon","polyamide")),P("Nylon use: skin","skin"),CR(P("Prolene synthetic mono non-absorbable","prolene","polypropylene")),P("Prolene use: vessel","vessel","vascular")]})
 ),
 interp:"Sutures",
 summary:["Catgut: perineum","Nylon: skin","Prolene: vessels"]}),

/* ===== OSCE 9 ===== */
Co({page:58,orig:"9",topic:"inst",sub:"Surgical instruments",title:"Senn retractor, Allis forceps, arterial clamp",
 stem:`Name each instrument and its function: Senn retractor, Allis forceps, arterial clamp.`,
 gray:"9.เครื่องมือ ให้บอกชื่อ กับหน้าที่ของอุปกรณ์ Senn retractor Allis forcep Arterial clamp",
 flag:NOIMG,imgAlt:"Senn retractor, Allis forceps, artery clamp",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("9.1 Answer.",3,{tags:["inst"],ans:"<b>Senn retractor</b> — ดึงผิวหนัง/ชั้นตื้นในแผลเล็ก · <b>Allis forceps</b> — จับเนื้อเยื่อ/fascia (มีฟัน) · <b>Arterial clamp (hemostat)</b> — หนีบหลอดเลือดห้ามเลือด",rubric:"1/ชิ้น",pts:[CR(P("Senn — superficial retraction","senn")),P("Allis — grasp tissue","allis"),CR(P("Arterial clamp — hemostasis","clamp","hemostat","artery"))]})
 ),
 interp:"Instruments",
 summary:["Senn small retractor","Allis grasps","Artery clamp hemostasis"]}),

/* ===== OSCE 10 ===== */
Co({page:59,orig:"10",topic:"pe",sub:"Prostate",ex:1,proc:1,title:"Prostate model examination",
 stem:`Examine the prostate on the model (likely BPH) — describe and give the diagnosis.`,
 gray:"10.มีหุ่นทดลองมาให้ตรวจ prostate gland ( BPH มั้ง ไม่แน่ใจอะ)",
 notes:"ผู้เขียนคิดว่าเป็น BPH",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 Answer.",5,{tags:["pe"],ans:"ขนาดโต, ผิวเรียบ, <b>rubbery</b>, median sulcus ยังคลำได้, ไม่เจ็บ → <b>BPH</b> (แข็ง/nodular → CA prostate)",rubric:"1/ประเด็น",pts:[CR(P("Size","size","enlarg")),P("Smooth","smooth"),CR(P("Rubbery","rubbery","consist")),P("Sulcus","sulcus"),CR(P("BPH","bph"))]})
 ),
 interp:"BPH",
 summary:["Smooth rubbery, sulcus present"]}),

/* ===== OSCE 11 ===== */
Co({page:59,orig:"11",topic:"suture",sub:"Vertical mattress",ex:1,proc:1,title:"Vertical mattress — 2 stitches",
 stem:`Place 2 vertical mattress sutures.`,
 gray:"11.ให้เย็บ vertical mattress 2 stitch",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("11.1 Technique.",4,{tags:["suture"],ans:"Far-far → near-near · ปมข้างแผล · evert",rubric:"1/ประเด็น",pts:[CR(P("Far-far","far")),CR(P("Near-near","near")),P("Eversion","evert")]})
 ),
 interp:"VM",
 summary:["Far-far, near-near"]}),

/* ===== OSCE 12 ===== */
Co({page:59,orig:"12",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Dress a sutured wound 12 hours after repair",
 stem:`Demonstrate cleaning of a wound that was sutured 12 hours ago.`,
 gray:"12.จงแสดงวิธีการทำความสะอาดแผลที่เย็บมาแล้ว 12 ชั่วโมง",
 notes:"ไม่มีเฉลยในไฟล์ · ตรวจคีย์ 22 พ.ย. 2026: เดิม คำแนะนำ ‘นัดตัดไหม หน้า 5 วัน, ลำตัว 7–10, ขา 10–14’ → แก้เป็น ลำตัว 10–14 วัน (เขียนคู่กับตำราเดิม 7–10) ตาม AAFP 2017 (Laceration Repair, Am Fam Physician 2017;95:628 Table 5: หน้า 3–5, หนังศีรษะ 7–10, แขน 7–10, ลำตัว 10–14, ขา 10–14, มือ/เท้า 10–14, ฝ่ามือ/ฝ่าเท้า 14–21 วัน — expert opinion)",opinion:"ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): วันตัดไหมลำตัว: AAFP 2017 = 10–14 วัน (ตำราเดิม/ตำราไทยหลายเล่ม 7–10 วัน) — ในข้อสอบเขียนเป็นช่วงตามตำแหน่งและระบุแหล่งได้ทั้งสอง · ความมั่นใจสูง",
 parts:S(
  B("12.1 Technique.",6,{tags:["proc"],ans:"แนะนำตัว อธิบาย · ล้างมือ เตรียม set · ถอด dressing เก่า · ดูแผล (bleeding, hematoma, infection) · <b>ใช้ forceps คีบสำลี/gauze ชุบ NSS เช็ดตามแนวแผลจากบนลงล่างทีละครั้ง แล้วเช็ดรอบแผลจากในออกนอก</b> · antiseptic รอบแผล · ปิด dry gauze · แนะนำ: ไม่ให้แผลโดนน้ำ 24–48 ชม., นัดตัดไหม (หน้า 3–5 วัน, ลำตัว 10–14 วัน (AAFP 2017; ตำราเดิม 7–10), แขน 7–10, ขา 10–14)",rubric:"1/ประเด็น",pts:[P("Introduce and explain","introduc","แนะนำ"),P("Remove dressing and inspect","remove","inspect","ดูแผล"),CR(P("Clean along wound once per swab","along","one stroke","ทีละ","แนวแผล")),CR(P("Clean surrounding skin inside out","inside","outward","จากใน")),P("Dry gauze","dry gauze","ปิด"),P("Advise wound care and suture removal","advice","ตัดไหม","suture removal")]})
 ),
 interp:"Wound dressing",
 summary:["Clean along wound, one stroke per swab","Inside → outside","Advise suture-removal timing"]}),

/* ===== MEQ ===== */
SA({page:73,orig:"MEQ 1",num:"SA 1",sub:"Plastic",img:["mm73_3"],title:"Short answer — black lesion on the nose",
 stem:`A black lesion on the nose has grown a lot. Give the diagnosis and management.`,
 gray:"1.รูปไฝที่จมูกดำๆอันใหญ่มาก dx & management ( คิดว่าเป็น basal cell CA)",
 notes:"ผู้เขียนคิดว่าเป็น BCC · เฉลยในไฟล์ (หน้าเดียวกัน): malignant melanoma = Mohs microscopic surgery + sentinel LN dissection",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("1.1 Answer.",5,{tags:["spot"],ans:"ก้อนสีดำใหญ่ที่จมูก → ddx <b>nodular/pigmented BCC</b> กับ <b>malignant melanoma</b> (คีย์ในไฟล์) → <b>biopsy</b> · melanoma: wide excision/Mohs + <b>SLNB</b> · BCC: <b>Mohs micrographic surgery</b> หรือ excision margin 4 มม. · reconstruction (flap)",rubric:"1/ประเด็น",pts:[CR(P("Melanoma or BCC","melanoma","bcc","basal")),CR(P("Biopsy","biopsy")),CR(P("Mohs/excision","mohs","excision")),P("Sentinel node for melanoma","sentinel"),P("Reconstruction","flap","reconstruct")]})
 ),
 interp:"Nasal pigmented lesion",
 summary:["Biopsy first","Melanoma: WLE + SLNB","BCC on nose: Mohs"]}),

SA({page:73,orig:"MEQ 2",num:"SA 2",sub:"Plastic",kimg:["mm73_4"],flag:NOIMG,title:"Short answer — reconstructive ladder",
 stem:`Write the steps of reconstruction (plastic surgery reconstructive ladder).`,
 gray:"2. จงเขียนขั้นตอน reconstruction (sub.plastic)",
 notes:"ไฟล์แนบรูปสไลด์ reconstructive ladder",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("2.1 Ladder.",6,{tags:["spot"],ans:"จากง่ายไปยาก: <b>healing by secondary intention</b> → <b>primary closure</b> → <b>delayed primary closure</b> → <b>split-thickness skin graft</b> → <b>full-thickness skin graft</b> → <b>tissue expansion</b> → <b>local flap</b> → <b>regional (pedicled) flap</b> → <b>free flap</b> (microvascular) · (NPWT แทรกได้)",rubric:"1/ขั้น",pts:[P("Secondary intention","secondary"),CR(P("Primary closure","primary")),P("Delayed primary","delayed"),CR(P("Skin graft STSG/FTSG","graft","stsg","ftsg")),P("Tissue expansion","expan"),CR(P("Local/regional flap","local","regional","pedicle")),CR(P("Free flap","free flap","microvascular"))]})
 ),
 interp:"Reconstructive ladder",
 summary:["Secondary → primary → graft → flap → free flap","Choose simplest that achieves form and function"]}),

SA({page:73,orig:"MEQ 3",num:"SA 3",sub:"Plastic",flag:NOIMG,imgAlt:"นิ้วโป้งเท้าของผู้สูงอายุ: ปื้นสีดำสนิทปนน้ำตาลกินพื้นที่ใต้และรอบเล็บ สีลามออกไปถึงผิวหนังรอบเล็บ (หนังรอบเล็บมีสีดำด้วย) เล็บบางส่วนแตกหลุด · ตรงกลางเป็นแผลมีเลือดซึม ขอบไม่เรียบ · ผู้ป่วยไม่มีประวัติบาดเจ็บที่นิ้ว และบอกว่าค่อย ๆ โตใน 1 ปี",title:"Short answer — black lesion on a toe",
 stem:`A black lesion on a toe (likely melanoma). Give the diagnosis and treatment.`,
 gray:"3. รูปแผลดำๆที่นิ้วเท้า ( คิดว่าเป็น melanoma) จงบอกผลการวินิจฉัย และ การรักษา",
 notes:"ผู้เขียนคิดว่าเป็น melanoma · เฉลยในไฟล์: malignant melanoma, Mohs + sentinel LN",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("3.1 Answer.",4,{tags:["spot"],ans:"<b>Acral lentiginous / subungual melanoma</b> · <b>excisional biopsy</b> (หรือ nail matrix biopsy) → <b>amputation ของนิ้ว (ระดับ IP/MTP)</b> หรือ wide excision ตาม Breslow + <b>sentinel LN biopsy</b> (inguinal)",rubric:"1/ประเด็น",pts:[CR(P("Melanoma","melanoma")),P("Biopsy","biopsy"),CR(P("Wide excision/amputation","excision","amput")),CR(P("Sentinel node","sentinel"))]})
 ),
 interp:"Acral melanoma",
 summary:["Biopsy","Digit amputation/WLE","SLNB"]}),

SA({page:73,orig:"MEQ 4",num:"SA 4",sub:"Others",flag:NOIMG,imgAlt:"ตารางความดัน systolic (mmHg): แขนขวา 130 · แขนซ้าย 140 · ขาขวา: dorsalis pedis 70, posterior tibial 84 · ขาซ้าย: dorsalis pedis 120, posterior tibial 126",title:"Short answer — calculate ABI",
 stem:`Calculate the ABI from a table of pressures (many values given).`,
 gray:"4. จงคำนวณค่า ABI เขาจะมีตารางค่าต่างๆมากให้อะ ต้องไปดูสูตรดีๆนะ",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Method.",4,{tags:["spot"],ans:"<b>ABI ของขาแต่ละข้าง = ความดัน systolic สูงสุดระหว่าง DP กับ PT ของขาข้างนั้น ÷ systolic สูงสุดของแขนสองข้าง</b> · แปลผล: 1.0–1.4 ปกติ, ≤0.9 PAD, <0.4 critical, >1.4 non-compressible",rubric:"1/ประเด็น",pts:[CR(P("Higher of DP/PT for each leg","higher","dp","pt","dorsalis")),CR(P("Divide by higher brachial","brachial","arm")),P("Interpretation","0.9","1.4","0.4")]})
 ),
 interp:"ABI",
 summary:["Leg: higher of DP/PT","÷ higher arm SBP","≤0.9 PAD"]}),

SA({page:73,orig:"MEQ 5",num:"SA 5",sub:"Pediatric surgery",img:["mm73_7"],title:"Short answer — Hirschsprung films",
 stem:`Two films (AP and lateral) of contrast enema are shown. Give the diagnosis.`,
 gray:"5. รูป Hirschprung disease ให้มา 2 film อันนึงเป็น AP อีกอันเป็น lateral รูปจริงมันค่อนข้างยาก ไม่ชัดเลยอะ ให้dx.",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 Answer.",3,{tags:["spot"],ans:"<b>Hirschsprung disease</b> — contrast enema: <b>narrow (aganglionic) rectum/rectosigmoid → transition zone → dilated proximal colon</b>, rectosigmoid index <1, retained contrast 24 ชม. · ยืนยัน rectal suction biopsy",rubric:"1/ประเด็น",pts:[CR(P("Hirschsprung","hirschsprung","hirschprung")),CR(P("Transition zone","transition")),P("Suction biopsy","biopsy")]})
 ),
 interp:"Hirschsprung",
 summary:["Lateral view best for transition zone","Rectosigmoid index <1","Suction biopsy"]}),

SA({page:73,orig:"MEQ 6",num:"SA 6",sub:"Uro/Genital",flag:NOIMG,title:"Short answer — explain ureteric colic",
 stem:`Explain ureteric colic.`,
 gray:"6. จงอธิบาย ureteric colic",
 notes:"เฉลยในไฟล์: severe sudden onset at affected area",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("6.1 Answer.",4,{tags:["spot"],ans:"ปวด <b>เฉียบพลัน รุนแรง เป็นพักๆ (colicky)</b> ที่ <b>สีข้าง/loin</b> ร้าว <b>ลงขาหนีบ/อัณฑะ/แคม</b> ตามตำแหน่งนิ่ว (loin to groin) · กระสับกระส่าย หาท่าไม่ได้ คลื่นไส้อาเจียน · hematuria · กลไก: นิ่วอุด ureter → แรงดันใน collecting system ↑ + ureteric spasm (prostaglandin) · Rx: NSAIDs, hydration, alpha-blocker",rubric:"1/ประเด็น",pts:[CR(P("Sudden severe colicky pain","sudden","severe","colick")),CR(P("Loin to groin radiation","groin","loin","ขาหนีบ","ร้าว")),P("Restless, nausea, hematuria","restless","nause","hematuria"),P("Mechanism: obstruction + spasm","obstruct","spasm","prostaglandin")]})
 ),
 interp:"Ureteric colic",
 summary:["Loin to groin colicky pain","Restless patient","NSAIDs first-line"]}),

SA({page:74,orig:"MEQ 7",num:"SA 7",sub:"Head & neck",kimg:["mm74_2"],flag:NOIMG,title:"Short answer — indications for thyroidectomy",
 stem:`Give the indications for thyroidectomy.`,
 gray:"7. indication for thyroidectomy",
 notes:"ไฟล์แนบสไลด์ indications: therapy for thyrotoxicosis, benign or malignant tumours, alleviate pressure (dysphagia, respiratory distress) from thyroid enlargement, cosmetic, establish definitive diagnosis of a mass (FNAC non-diagnostic/indeterminate)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("7.1 Indications.",5,{tags:["spot"],ans:"1 <b>Thyrotoxicosis</b> (Graves/toxic nodule ที่ไม่ตอบยา/ไม่เหมาะ RAI) · 2 <b>Benign or malignant tumour</b> · 3 <b>Pressure symptoms</b> (dysphagia, dyspnea, retrosternal) · 4 <b>Cosmetic</b> · 5 <b>Establish diagnosis</b> เมื่อ FNA non-diagnostic/indeterminate",rubric:"1/ข้อ",pts:[CR(P("Thyrotoxicosis","thyrotox","graves","hyperthyroid")),CR(P("Malignancy / tumour","malign","cancer","tumour","tumor")),CR(P("Pressure symptoms","pressure","compress","dysphag")),P("Cosmetic","cosmetic"),P("Indeterminate FNA","fna","indetermin","diagnos")]})
 ),
 interp:"Thyroidectomy indications",
 summary:["Toxic, tumour, pressure, cosmetic, diagnosis"]}),

SA({page:74,orig:"MEQ 8",num:"SA 8",sub:"Others",img:["mm74_4"],title:"Short answer — paronychia",
 stem:`Give the diagnosis, cause and management.`,
 gray:"8. จงบอกผลการวินิจฉัย สาเหตุและการดูแลรักษา (paronychia)",
 notes:"แนวคำตอบในไฟล์: paronychia",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Answer.",4,{tags:["spot"],ans:"<b>Acute paronychia</b> · <b>S. aureus</b> (บาดเจ็บรอบเล็บ, ingrown nail, กัดเล็บ) · warm soak + <b>dicloxacillin</b> · มีหนอง → <b>I&D</b>",rubric:"1/ประเด็น",pts:[CR(P("Paronychia","paronychia")),P("S. aureus","aureus","staph"),CR(P("Antibiotic and soak","antibiot","dicloxa","soak")),CR(P("I&D","incision","drain"))]})
 ),
 interp:"Paronychia",
 summary:["S. aureus","I&D if pus"]}),

SA({page:74,orig:"MEQ 9",num:"SA 9",sub:"Neuro",flag:NOIMG,title:"Short answer — myotomes C5–T1",
 stem:`Which muscle do you test for each root C5, C6, C7, C8, T1? (e.g. C5 → biceps)`,
 gray:"9. จงบอกการตรวจระบบประสาทตาม dermatome C5 C6 C7 C8 T1 …ว่าตรวจกล้ามเนื้อส่วนใด (ข้อนี้ทำตามแอคข้อก่อนๆเลย เช่น C5 ตรวจ biceps)",
 notes:"แนวคำตอบในไฟล์: Deltoid muscle (C5)",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("9.1 Answer.",5,{tags:["spot"],ans:"<b>C5</b> elbow flexion/shoulder abduction — <b>deltoid</b>, biceps · <b>C6</b> wrist extension — <b>extensor carpi radialis</b> · <b>C7</b> elbow extension — <b>triceps</b> · <b>C8</b> finger flexion — <b>FDP</b> (middle finger) · <b>T1</b> finger abduction — <b>abductor digiti minimi</b>/interossei",rubric:"1/ราก",pts:[CR(P("C5 deltoid/biceps","deltoid","biceps")),P("C6 wrist extensors","wrist ext","extensor carpi"),CR(P("C7 triceps","triceps")),P("C8 finger flexors","fdp","finger flex"),P("T1 finger abduction","abductor digiti","interosse","abduct"),]})
 ),
 interp:"Upper limb myotomes",
 summary:["C5 elbow flex, C6 wrist ext, C7 elbow ext","C8 finger flex, T1 finger abd"]}),

SA({page:74,orig:"MEQ 10",num:"SA 10",sub:"Pediatric surgery",flag:NOIMG,imgAlt:"ฟิล์มช่องท้องเด็กท่ายืน: กระเพาะอาหารโป่งมีระดับน้ำ ถัดไปทางขวามีกระเปาะลมกลมอีกก้อนที่ duodenum ส่วนต้น ลมในลำไส้ส่วนปลายมีน้อยมาก",title:"Short answer — double bubble sign",
 stem:`A child has vomiting and abdominal pain; the abdominal film shows a double bubble sign. Give the diagnosis and treatment.`,
 gray:"10. เด็กมีอาการคลื่นไส้และปวดท้องกระทันหัน ก่อนหน้านี้ปกติดี ให้ภาพ acute abdomen เห็น double bubble sign จงบอกผลการวินิจฉัย และรักษา",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("10.1 Answer.",5,{tags:["spot"],ans:"Double bubble = ลมในกระเพาะ + duodenum ส่วนต้น · ทารกแรกเกิด: <b>duodenal atresia</b> (ไม่มีลมส่วนปลาย; Down syndrome) → NG, IV fluid → <b>duodenoduodenostomy (diamond-shaped)</b> · เด็กเคยปกติ อาการเฉียบพลัน + มีลมส่วนปลาย → ต้องนึกถึง <b>malrotation with midgut volvulus</b> → UGI → <b>emergency Ladd's</b>",rubric:"1/ประเด็น",pts:[CR(P("Duodenal obstruction / atresia","duodenal","atresia")),CR(P("Midgut volvulus in acute presentation","volvulus","malrotation")),P("NG, IV fluid","ng","fluid"),CR(P("Duodenoduodenostomy or Ladd's","duodenoduodenostomy","ladd"))]})
 ),
 interp:"Double bubble",
 summary:["Neonate: duodenal atresia → duodenoduodenostomy","Acute in previously well child: rule out volvulus","Down syndrome association"]})

);
})();
