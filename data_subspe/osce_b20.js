(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "OSCE MEQ Surgery rotate A MDCU76" → MDCU76 RoA (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO76AQ = 76A_OSCE_MEQ_surgery_rotate_A_MDCU76.pdf (3 หน้า) · หน้า 1 พาร์ท OSCE ข้อ 1–12 · หน้า 2–3 พาร์ท MEQs ข้อ 1–10 → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot)
   ไฟล์เฉลย SO76AK = Key_76A_OSCE_MEQ_76_rotate_A.pdf (3 หน้า ลายมือบนไฟล์โจทย์) — มีโน้ตเกือบทุกข้อ (ครอป os76a_ko<n> / os76a_km<n>)
   ไฟล์โจทย์เป็น recall ไม่มีรูป ยกเว้น MEQ 9 (รูปอ้างอิงที่ผู้จดหามา) — ข้อที่ไม่มีรูปใส่ imgAlt
   หลายข้อผู้จดเขียน "ตรงแอค" แต่ไม่ได้บอกปี และคลัง Subspe ยังไม่มีปีก่อน 76 ที่ตรงกัน */
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
const KF="ไฟล์ Key 76A: ";
const Co=o=>Object.assign({set:"MDCU76",ro:"RoA",file:"SO76AQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — simple interrupted and vertical mattress sutures",kimg:["os76a_ko1"],
 stem:`A skin model with a laceration, needle holder, toothed forceps, scissors and a nylon suture are provided. The examiner is observing.<br>1. Close the wound with one simple interrupted stitch and one vertical mattress stitch.`,
 gray:"OSCE 1. เย็บแผล simple/vertical mattress เย็บอย่างละ stitch",
 sp:"หุ่นแผล · needle holder · toothed forceps · กรรไกร · ไหม nylon 3-0/4-0 · ผู้คุมดู: จับ needle holder ถูก (thumb–ring), ใช้ forceps จับ dermis ไม่บีบขอบผิว, แทงเข็มตั้งฉาก 90°, ระยะห่างจากขอบเท่ากันสองข้าง, ผูกปมด้วย instrument tie ≥3 ปม (ปมแรก 2 รอบ), ปมอยู่ข้างแผล ไม่รัดแน่นเกิน, vertical mattress: far-far แล้ว near-near ขอบแผล evert, ตัดไหมเหลือ ~5 mm",
 notes:"ไฟล์ Key 76A วาดหน้ายิ้มไว้ (ไม่มีเฉลย)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Simple interrupted stitch.",4,{tags:["proc"],ans:"จับ needle holder ที่ ⅓ ท้ายของเข็ม · แทงเข็ม<b>ตั้งฉาก 90°</b> ห่างขอบแผล 3–5 mm ทั้งสองข้าง<b>เท่ากัน</b> · ลึกถึง dermis · <b>instrument tie</b> ปมแรก 2 รอบ (surgeon's knot) + ปมกลับทิศ ≥2 ครั้ง · ปมอยู่ด้านข้างแผล · ไม่รัดจนขอบซีด",exp:"ปมที่ดีต้อง square และขอบแผลชนกันพอดี",rubric:"ได้ = เทคนิคแทงเข็ม + ปมแน่นถูกต้อง",
   pts:[H("Needle and bite",50),P("Needle perpendicular to skin","90","perpendic","ตั้งฉาก"),P("Equal distance and depth both sides","equal","เท่ากัน","symmetr"),H("Knot",50),CR(P("Secure square knots (instrument tie)","square","knot","ปม","instrument tie")),P("Knot placed to one side, not strangulating","side","ข้างแผล","not too tight","ไม่แน่นเกิน")]}),
  B("1.2 Vertical mattress stitch.",4,{tags:["proc"],ans:"<b>Far–far</b> (ห่างขอบ ~5–8 mm ลึก) แล้วย้อนกลับ <b>near–near</b> (ห่างขอบ 1–2 mm ตื้น) ด้านเดียวกับที่แทงเข้า · ผูกปมด้านเดียว · ได้ <b>wound edge eversion</b> ดี",exp:"ใช้กับผิวหนาหรือขอบแผลที่มักม้วนเข้า (เช่น ข้อพับ)",rubric:"ได้ = ลำดับ far-far near-near + eversion",
   pts:[CR(P("Far-far then near-near","far","near","ไกล","ใกล้")),P("Edge eversion","evert","ขอบแผลยก")]})
 ),
 interp:"Basic suturing",
 summary:["Simple interrupted: มาตรฐาน ปรับแต่ละจุดได้","Vertical mattress: far-far near-near → eversion","ปมแรกพัน 2 รอบ แล้วกลับทิศ ≥2 ปม","ตัดไหมผิวหน้า 3–5 วัน, ลำตัว 7–10 วัน, แขนขา/ข้อ 10–14 วัน"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — suspected acute appendicitis",kimg:["os76a_ko2"],
 stem:`A 20-year-old man has periumbilical pain that has moved to the right lower quadrant over 1 day, with anorexia and low-grade fever. The examiner will give the findings.<br>1. Perform an abdominal examination relevant to acute appendicitis and name each sign you test.`,
 gray:"OSCE 2. ตรวจร่างกาย acute appendicitis (ตรงแอค)",
 sp:"ผู้ป่วยจำลองนอนหงาย · ผู้คุมบอกผลเมื่อทำถูก: กดเจ็บที่ McBurney point, rebound tenderness RLQ, Rovsing sign บวก, psoas sign บวก, obturator sign ลบ, guarding เล็กน้อย · ดู: แนะนำตัว ขออนุญาต จัดท่า เปิดหน้าท้อง เริ่มคลำจากจุดไม่เจ็บ (LLQ) ก่อน",
 notes:"ไฟล์ Key 76A ลายมือ PE for acute appendicitis: คลำ tenderness, ปกติคลำเริ่มจากจุดที่ไม่ปวด → ปวด · Rovsing · Psoas · Obturator · แปะสไลด์ Acute appendicitis (McBurney point, Rovsing sign, Psoas sign, Obturator sign) · ผู้จดเขียน \"ตรงแอค\" (ไม่บอกปี)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 Examination for acute appendicitis.",10,{tags:["pe"],key:KF+"PE for acute appendicitis — คลำ tenderness เริ่มจากจุดไม่ปวด → ปวด · Rovsing · Psoas · Obturator",
   ans:"แนะนำตัว ขออนุญาต ล้างมือ นอนหงายงอเข่าเล็กน้อย เปิดท้อง xiphoid–symphysis · <b>Inspect</b> (การหายใจ, distension) · <b>คลำเบาจากจุดไม่เจ็บ (LLQ) วนไปหา RLQ</b> · <b>McBurney point tenderness</b> (⅓ จาก ASIS ไปสะดือ) · <b>guarding / rebound tenderness</b> (หรือ percussion tenderness) · <b>Rovsing sign</b> (กด LLQ เจ็บ RLQ) · <b>Psoas sign</b> (นอนตะแคงซ้าย เหยียดสะโพกขวา — retrocecal) · <b>Obturator sign</b> (งอสะโพก-เข่า 90° แล้ว internal rotation — pelvic) · Dunphy sign (ไอแล้วเจ็บ) · เสนอตรวจ PR/PV ตามข้อบ่งชี้ · สรุปผล",
   exp:"ตรวจ rebound ด้วยการเคาะ (percussion tenderness) ทำให้ผู้ป่วยเจ็บน้อยกว่า · Alvarado score ช่วยประเมิน",rubric:"แบ่งคะแนนตามขั้น; ลืมเริ่มจากจุดไม่เจ็บหักคะแนน",
   pts:[H("Preparation",15),P("Introduce/consent/expose","introduce","แนะนำ","consent","ขออนุญาต","expos","เปิดท้อง"),H("Palpation",45),CR(P("Start palpation away from the painful area","start","จุดไม่เจ็บ","LLQ","away from")),CR(P("McBurney point tenderness","mcburney","แมค")),P("Guarding / rebound tenderness","rebound","guard","percussion tender"),H("Special signs",40),P("Rovsing sign","rovsing"),P("Psoas sign","psoas"),P("Obturator sign","obturator")]})
 ),
 interp:"PE acute appendicitis",
 summary:["McBurney point: ⅓ จาก ASIS ไปสะดือ","Rovsing (LLQ → RLQ pain), psoas (retrocecal), obturator (pelvic)","คลำจากจุดไม่เจ็บก่อนเสมอ","Alvarado: migration, anorexia, N/V, RLQ tenderness, rebound, fever, leukocytosis, left shift"]}),

/* ===== OSCE 3 ===== */
Co({page:1,orig:"3",topic:"hx",sub:"Other history",ex:1,title:"History taking — breast lump",kimg:["os76a_ko3"],
 stem:`A woman presents with a lump in her breast. Take a focused history from the simulated patient.`,
 gray:"OSCE 3. ซักประวัติก้อนที่เต้านม — a. ก้อนไม่เจ็บ กลมๆขนาดหัวแม่โป้ง b. ไม่ได้กินยาคุม ไม่มีประวัติมะเร็งในครอบครัว",
 sp:"ผู้ป่วยหญิง (อายุตามผู้คุมกำหนด เช่น 40 ปี) · คลำเจอก้อนเต้านม 1 เดือน ไม่เจ็บ กลม ขนาดประมาณหัวแม่โป้ง ไม่โตเร็ว ไม่สัมพันธ์รอบเดือน · ไม่มี nipple discharge ผิวหนังไม่เปลี่ยน ไม่มีก้อนรักแร้ · น้ำหนักไม่ลด ไม่ปวดกระดูก ไม่ไอ · ประจำเดือนปกติ (menarche/menopause ตามผู้คุม) · ไม่ได้กินยาคุม ไม่ใช้ฮอร์โมน · ไม่มีประวัติมะเร็งเต้านม/รังไข่ในครอบครัว · ไม่เคยฉายรังสีที่อก",
 notes:"ไฟล์ Key 76A ลายมือ: ก้อน → ตำแหน่ง, ขนาด, โตเร็วไหม, Tender?, discharge?, mobility, skin dimpling, texture (นิ่ม/แข็ง), ไข้มาไหม, progression · Hx: Gyne — menarche–menopause, full term preg, lactation period, ยาคุม/ฮอร์โมน, ผ่าตัด · Fam Hx: CA เต้านม/รังไข่ ญาติสายตรง",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 History of a breast lump.",10,{tags:["hx"],key:KF+"ลักษณะก้อน (ตำแหน่ง ขนาด โตเร็ว เจ็บ discharge mobility skin texture ไข้ progression) · Hx gyne: menarche, menopause, full term pregnancy, lactation, ยาคุม/ฮอร์โมน, ผ่าตัด · Fam Hx: CA เต้านม/รังไข่ในญาติสายตรง",
   ans:"แนะนำตัว ยืนยันตัวตน · <b>ก้อน</b>: เริ่มเมื่อไร ตำแหน่ง ขนาด โตเร็วไหม เจ็บไหม สัมพันธ์รอบเดือนไหม · <b>อาการร่วม</b>: nipple discharge (เลือด?), nipple retraction, ผิวหนังเปลี่ยน (peau d'orange, dimpling), ก้อนรักแร้/เหนือไหปลาร้า · <b>อาการแพร่กระจาย</b>: น้ำหนักลด ปวดกระดูก ไอ หอบ ตัวเหลือง ปวดหัว · <b>Risk factors</b>: อายุ, menarche เร็ว/menopause ช้า, nulliparity/บุตรคนแรกอายุมาก, ไม่ให้นมบุตร, <b>ฮอร์โมน/ยาคุม</b>, เคยมีก้อน/ผ่าตัดเต้านม (atypia), <b>ประวัติครอบครัว</b> มะเร็งเต้านม/รังไข่ (BRCA), radiation ที่อก, สุรา อ้วน · สรุปและบอก DDx (fibroadenoma, cyst, carcinoma)",
   exp:"หญิงก้อนกลมไม่เจ็บ — อายุน้อยนึกถึง fibroadenoma · อายุ >35–40 ต้อง R/O มะเร็งด้วย triple assessment",rubric:"แบ่งคะแนนตามหัวข้อ",
   pts:[H("Lump characteristics",35),CR(P("Onset, size, growth","onset","เมื่อไร","size","ขนาด","โต","grow")),P("Pain / cyclical change","pain","เจ็บ","cycl","ประจำเดือน"),P("Nipple discharge / skin change","discharge","nipple","skin","ผิว"),P("Axillary lump","axill","รักแร้"),H("Systemic / metastasis",15),P("Weight loss, bone pain, cough","weight","น้ำหนัก","bone","กระดูก","cough","ไอ"),H("Risk factors",50),P("Menarche/menopause/parity/lactation","menarche","menopause","ประจำเดือน","parity","บุตร","lactat","นมบุตร"),P("Hormone/OCP use","hormone","ฮอร์โมน","ยาคุม","pill","ocp"),CR(P("Family history of breast/ovarian cancer","family","ครอบครัว","brca")),P("Previous breast disease/radiation","previous","เคย","radiat","รังสี")]})
 ),
 interp:"Breast lump history",
 summary:["Triple assessment: clinical + imaging (USG <40 ปี, mammogram ≥40 ปี) + tissue (core biopsy)","Fibroadenoma: หญิงสาว ก้อนกลมเคลื่อนดี","Risk: BRCA, family Hx, estrogen exposure ยาว, atypical hyperplasia, chest radiation"]}),

/* ===== OSCE 4 ===== */
Co({page:1,orig:"4",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — perianal warty lesions",kimg:["os76a_ko4"],
 stem:`A photograph of multiple cauliflower-like perianal lesions is shown.<br>1. What is the diagnosis?<br>2. What investigations would you do?<br>3. How would you manage this patient?`,
 gray:"OSCE 4. Condyloma accuminta (ตรงแอค): Dx Ix Mx",
 flag:NOIMG,imgAlt:"รูปรอบทวารหนัก: ตุ่มเนื้อนูนหลายตุ่ม ผิวขรุขระคล้ายดอกกะหล่ำ สีชมพู-น้ำตาล",
 notes:"ไฟล์ Key 76A ลายมือซ้าย: cauliflower-like mass · ตรวจ perineal ทั่วถึง for warts · proctoscope ดู anal canal · Mo: ตรวจ HIV · E/C: excision & coagulation or electrocauterization · ผู้จดเขียน \"ตรงแอค\" (ไม่บอกปี)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("4.1 Diagnosis.",2,{tags:["img"],key:KF+"cauliflower-like mass",ans:"<b>Condyloma acuminata</b> (anogenital warts) จาก <b>HPV type 6, 11</b>",exp:"DDx: condyloma lata (secondary syphilis — แบนเรียบ ชื้น), verrucous carcinoma (Buschke-Löwenstein), anal SCC",rubric:"ได้",pts:[CR(P("Condyloma acuminata","condylom","wart","หูด","hpv"))]}),
  B("4.2 Investigations.",3,{tags:["img"],key:KF+"ตรวจ perineal ทั่วถึง · proctoscope ดู anal canal · ตรวจ HIV",ans:"ตรวจ perineum/genitalia ทั่ว · <b>proctoscopy/anoscopy</b> หา intra-anal warts · <b>ตรวจ STI ร่วม</b>: <b>anti-HIV</b>, VDRL/TPHA, HBsAg · หญิงตรวจภายใน + Pap smear · biopsy ถ้าแข็ง เป็นแผล โตเร็ว ไม่ตอบสนอง หรือภูมิต่ำ",exp:"Intra-anal warts ต้องรักษาด้วย ไม่งั้นเป็นซ้ำ",rubric:"ได้ = proctoscopy + STI/HIV",
   pts:[CR(P("Proctoscopy/anoscopy","proctoscop","anoscop","ส่องกล้อง")),CR(P("HIV and other STI tests","hiv","vdrl","syphilis","std","sti")),P("Biopsy if atypical","biopsy","ชิ้นเนื้อ")]}),
  B("4.3 Management.",3,{tags:["img"],key:KF+"excision & coagulation หรือ electrocauterization",ans:"ก้อนน้อย/เล็ก: topical <b>podophyllin/podophyllotoxin</b>, <b>imiquimod</b>, <b>TCA</b>, cryotherapy · ก้อนมาก/ใหญ่/intra-anal: <b>surgical excision + electrocauterization</b> · รักษาคู่นอน, ใช้ถุงยาง, HPV vaccine · ติดตามเพราะเป็นซ้ำบ่อย",exp:"Podophyllin ห้ามในหญิงตั้งครรภ์",rubric:"ได้ = topical หรือ excision/cautery + partner/safe sex",
   pts:[CR(P("Surgical excision / electrocautery","excision","cauter","ตัด","จี้")),P("Topical agents","podophyll","imiquimod","tca","cryo"),P("Treat partner / condom / follow-up","partner","คู่","condom","ถุงยาง","follow")]})
 ),
 interp:"Condyloma acuminata",
 summary:["HPV 6, 11 (low risk) · 16, 18 สัมพันธ์มะเร็ง","ตรวจ anal canal + STI/HIV","Tx: topical หรือ excision/cautery · podophyllin ห้ามตั้งครรภ์"]}),

/* ===== OSCE 5 ===== */
Co({page:1,orig:"5",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — DRE on a prostate model",kimg:["os76a_ko5"],
 stem:`A prostate examination model is provided.<br>1. Perform a digital rectal examination and describe the prostate.<br>2. What is the likely diagnosis and next investigation?`,
 gray:"OSCE 5. Prostate (ตรงแอค —> single nodule)",
 sp:"หุ่น DRE · ต่อมขนาดปกติ มี <b>nodule แข็งเดี่ยว</b> ที่ lobe ข้างหนึ่ง · ผู้คุมดู: ขออนุญาต มี chaperone, ท่า left lateral (Sims) งอเข่า, ใส่ถุงมือ หล่อลื่น, ดู perianal ก่อน, สอดนิ้วช้า ๆ, ตรวจ sphincter tone, คลำ prostate (ขนาด ผิว consistency median sulcus nodule ความเจ็บ), ดูถุงมือ (เลือด/มูก/สีอุจจาระ), เช็ดทำความสะอาด",
 notes:"ผู้จดเขียน \"ตรงแอค —> single nodule\" · ไฟล์ Key 76A ไม่มีโน้ตข้อนี้",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("5.1 DRE technique and description.",7,{tags:["pe"],ans:"ขออนุญาต + chaperone · ท่า <b>left lateral</b> งอสะโพกเข่า · ถุงมือ + เจลหล่อลื่น · <b>inspect perianal</b> · สอดนิ้ว ประเมิน <b>anal tone</b> · คลำ prostate: <b>size</b> (ปกติ ~2 นิ้วมือ/20–25 g), <b>surface</b>, <b>consistency</b> (ปกติ rubbery), <b>median sulcus</b>, <b>nodule</b>, tenderness · คลำผนัง rectum รอบ · ดูถุงมือ · ทำความสะอาด ขอบคุณ · บรรยาย: \"normal-sized prostate with a <b>single hard nodule</b> in the right lobe, median sulcus preserved\"",exp:"ต่อมโตเรียบ rubbery = BPH · แข็งเป็นหิน/ขรุขระ ลบ sulcus = CA · นุ่มกดเจ็บ = prostatitis",rubric:"แบ่งตามขั้นตอน",
   pts:[H("Preparation",25),P("Consent and chaperone","consent","ขออนุญาต","chaperone"),P("Left lateral position","left lateral","ตะแคงซ้าย","sims"),H("Examination",50),P("Inspect perianal area","inspect","ดู"),P("Anal sphincter tone","tone","sphincter"),CR(P("Describe size, consistency, sulcus, nodule","size","ขนาด","consisten","sulcus","nodule","ก้อน")),H("Finish",25),P("Inspect glove and clean patient","glove","ถุงมือ","clean","เช็ด")]}),
  B("5.2 Diagnosis and investigation.",3,{tags:["pe"],ans:"Hard single nodule → สงสัย <b>prostate cancer</b> · ส่ง <b>PSA</b> และ <b>mpMRI prostate</b> → <b>prostate biopsy</b> (TRUS/transperineal)",exp:"DRE ผิดปกติเป็นข้อบ่งชี้ biopsy แม้ PSA ปกติ",rubric:"ได้ = CA prostate + PSA/biopsy",pts:[CR(P("Suspect prostate cancer","cancer","ca","มะเร็ง","carcinoma")),P("PSA","psa"),CR(P("MRI and/or biopsy","biopsy","ชิ้นเนื้อ","mri","trus"))]})
 ),
 interp:"DRE — prostate nodule",
 summary:["Normal prostate: rubbery, median sulcus, ~walnut size","Hard nodule → CA prostate → PSA + MRI + biopsy","Boggy tender → prostatitis (ห้ามนวดถ้า acute)"]}),

/* ===== OSCE 6 ===== */
Co({page:1,orig:"6",topic:"inst",sub:"Tube/Catheter",title:"Device — two-way Foley catheter",kimg:["os76a_ko6"],
 stem:`A device is shown.<br>1. What is it?<br>2. How is its size expressed?<br>3. Describe how to insert it.<br>4. Give indications for its use.`,
 gray:"OSCE 6. 2 way foley catheter (ตรงแอค): คืออะไร what size วิธีใส่ ใช้ในสถานการณ์ไหน",
 flag:NOIMG,imgAlt:"สายสวนปัสสาวะยางสีน้ำตาลอ่อน ปลายมีลูกโป่ง ท้ายมี 2 ช่อง (ช่องระบายและช่องเติมน้ำลูกโป่ง) ระบุขนาดเป็นตัวเลขที่ท้ายสาย",
 notes:"ไฟล์ Key 76A แปะสไลด์ Urethral catheterization: contraindication (traumatic urethral injury, high riding prostate, blood per meatus, history of urethral stricture, resistance to passage, acute prostatitis) · indication diagnostic (collect uncontaminated urine, study anatomy, measure residual urine, urine output monitoring) · therapeutic (decompression of bladder — acute urinary retention, chronic obstruction, urologic & pelvic surgery, intermittent bladder decompression for neurogenic bladder, chronically bedridden, avoid contamination of perineum, instillation of medication, irrigation)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("6.1 Name, size and insertion.",5,{tags:["inst"],key:KF+"(แปะสไลด์ข้อห้าม/ข้อบ่งชี้ — ไม่ได้เขียนชื่อ)",ans:"<b>Two-way Foley (indwelling urethral) catheter</b> — ช่องหนึ่งระบายปัสสาวะ อีกช่องเติมน้ำเข้า balloon · ขนาด <b>French (Fr/Ch)</b> = เส้นรอบวงเป็น mm (1 Fr = ⅓ mm เส้นผ่าศูนย์กลาง) ผู้ใหญ่ใช้ 14–16 Fr · balloon 10 mL · วิธีใส่: อธิบาย, sterile technique, ทำความสะอาด, <b>lidocaine jelly</b>, ชาย: ยก penis ตั้งฉาก สอดจน<b>สุดสาย</b>/มีปัสสาวะไหล แล้วจึงเติม <b>sterile water</b> 10 mL ใน balloon, ดึงกลับเบา ๆ, ต่อถุงระบบปิด, ติดสายที่ต้นขา/หน้าท้อง, ชายที่ขลิบหนังหุ้มไม่ได้ต้องดึงหนังกลับคืน (กัน paraphimosis)",exp:"ห้ามเติม balloon ก่อนมีปัสสาวะไหล — อาจพองใน urethra ทำให้บาดเจ็บ",rubric:"ได้ = ชื่อ + หน่วย Fr + ขั้นตอนสำคัญ",
   pts:[CR(P("Two-way Foley catheter","foley","2.?way","two.?way")),P("Size in French","french","fr","ch"),H("Insertion",50),P("Sterile technique + lubricant","sterile","aseptic","jelly","lubric"),CR(P("Inflate balloon only after urine flows","after urine","ปัสสาวะไหล","urine flow")),P("Sterile water 10 mL","sterile water","10 ml","น้ำกลั่น"),P("Reduce foreskin / closed drainage","foreskin","หนังหุ้ม","closed","ถุง")]}),
  B("6.2 Indications.",3,{tags:["inst"],key:KF+"diagnostic: collect uncontaminated urine, study anatomy, residual urine, urine output monitoring · therapeutic: acute urinary retention, chronic obstruction, urologic/pelvic surgery, bedridden, instillation, irrigation",ans:"<b>Acute/chronic urinary retention</b> · <b>monitor urine output</b> (shock, ผ่าตัดใหญ่, critical) · ระหว่าง/หลัง<b>ผ่าตัด urology/pelvic</b> · ผู้ป่วยติดเตียงที่มีแผลบริเวณ perineum · instillation ยา/irrigation · เก็บปัสสาวะ/ วัด residual (มักใช้สายสวนทิ้งมากกว่า)",exp:"ข้อห้าม: สงสัย urethral injury (blood at meatus, high-riding prostate, perineal hematoma) → RUG ก่อน",rubric:"ได้ ≥2 ข้อ",
   pts:[G("Indications ≥2",2,P("Urinary retention","retention","ปัสสาวะไม่ออก","คั่ง"),P("Urine output monitoring","output","monitor","ปริมาณ"),P("Peri-operative","surgery","ผ่าตัด","operat"),P("Immobile / perineal wound","bedridden","ติดเตียง","perine"),P("Irrigation / instillation","irrigat","instill","ล้าง"))]})
 ),
 interp:"Foley catheter",
 summary:["Two-way = drainage + balloon · three-way เพิ่มช่อง irrigation (clot retention หลัง TURP)","ขนาด French · ผู้ใหญ่ 14–16 Fr","เติม balloon หลังปัสสาวะไหล · ใช้ sterile water","ห้ามใส่เมื่อสงสัย urethral injury"]}),

/* ===== OSCE 7 ===== */
Co({page:1,orig:"7",topic:"suture",sub:"Suture material",title:"Suture materials — choose sutures for each tissue",kimg:["os76a_ko7"],
 stem:`Several suture packets are displayed. For each tissue, choose the suture and give its generic name, trade name and characteristics:<br>1. Muscle<br>2. Vein ligation<br>3. Brachial artery repair<br>4. Skin<br>5. Which technique would you use to close the skin?`,
 gray:"OSCE 7. ด้าย (vicryl = muscle, vein = silk, brachial artery = prolene, nylon = skin) ชื่อสามัญ การค้า ตรงแอค เย็บแบบ simple",
 flag:NOIMG,imgAlt:"ซองไหมหลายชนิดวางบนโต๊ะ (ซองสีม่วง, ซองสีดำ/silk, ซองสีน้ำเงิน, ซองสีเขียว/nylon)",
 notes:"ผู้จดให้คำตอบมา: vicryl = muscle, vein = silk, brachial artery = prolene, nylon = skin, เย็บแบบ simple · ไฟล์ Key 76A ลายมือแดง: vicryl = multifilament, absorbable, polyglactin, ละลายในร่างกาย muscle, fat, subcu · silk = natural, multifilament, nonabsorbable · prolene = polypropylene monofilament nonabsorbable vessel · nylon = monofilament nonabsorbable (dafilon) · absorb by hydrolysis inflammation",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("7.1 Muscle.",2,{tags:["suture"],key:KF+"Vicryl = polyglactin, multifilament, absorbable",ans:"<b>Vicryl</b> (polyglactin 910) — synthetic, <b>braided multifilament</b>, <b>absorbable</b> (สลายโดย hydrolysis, คงแรง ~3 สัปดาห์ หมด 56–70 วัน)",exp:"ใช้กับ muscle, fascia บางชั้น, subcutaneous",rubric:"ได้ = ชื่อ + absorbable multifilament",pts:[CR(P("Vicryl / polyglactin","vicryl","polyglactin")),P("Absorbable multifilament","absorb","multifil","braid")]}),
  B("7.2 Vein ligation.",2,{tags:["suture"],key:KF+"Silk = natural, multifilament, nonabsorbable",ans:"<b>Silk</b> — natural, braided multifilament, <b>non-absorbable</b> (เสื่อมช้ามาก) จับปมดี",exp:"ใช้ผูกหลอดเลือด",rubric:"ได้",pts:[CR(P("Silk","silk","ไหมดำ")),P("Natural non-absorbable","natural","non.?absorb")]}),
  B("7.3 Brachial artery repair.",2,{tags:["suture"],key:KF+"Prolene = polypropylene, monofilament, nonabsorbable, vessel",ans:"<b>Prolene</b> (polypropylene) — synthetic <b>monofilament non-absorbable</b> ลื่นผ่านผนังหลอดเลือด reaction น้อย ไม่ thrombogenic · ขนาด 6-0/7-0 สำหรับ brachial",exp:"Vascular anastomosis ใช้ polypropylene เสมอ",rubric:"ได้",pts:[CR(P("Prolene / polypropylene","prolene","polypropyl")),P("Monofilament non-absorbable","monofil","non.?absorb")]}),
  B("7.4 Skin and technique.",3,{tags:["suture"],key:KF+"Nylon = monofilament nonabsorbable (Dafilon) · เย็บแบบ simple",ans:"<b>Nylon</b> (Dafilon/Ethilon) — synthetic <b>monofilament non-absorbable</b> · เย็บ <b>simple interrupted</b> แล้วตัดไหมตามตำแหน่ง",exp:"Monofilament ติดเชื้อน้อยกว่า multifilament",rubric:"ได้",pts:[CR(P("Nylon","nylon","dafilon","ethilon")),P("Simple interrupted","simple","interrupt")]})
 ),
 interp:"Suture materials",
 summary:["Absorbable: catgut (natural), Vicryl, PDS, Monocryl","Non-absorbable: silk (natural), nylon, prolene","Multifilament: จับปมดี เสี่ยงติดเชื้อมากกว่า · monofilament: ลื่น reaction น้อย","Vascular = prolene · skin = nylon · ligation = silk/vicryl"]}),

/* ===== OSCE 8 ===== */
Co({page:1,orig:"8",topic:"inst",sub:"Tube/Catheter",title:"Devices — nasogastric tube, chest drain and colostomy appliance",kimg:["os76a_ko8"],
 stem:`Three devices are displayed: a nasogastric tube, a chest drain and a colostomy bag with its pouch.<br>For each device, give two indications.`,
 gray:"OSCE 8. เครื่องมือ ng tube/chest tube/colostomy bag + pouch สักอัน) ให้เขียน indication อย่างละ 2 ข้อ",
 flag:NOIMG,imgAlt:"สาย NG tube, สาย intercostal chest drain และถุง colostomy พร้อมแป้นติดผิวหนัง วางบนโต๊ะ",
 notes:"ไฟล์ Key 76A ลายมือซ้าย: NG tube indication — decompress ex. gut obstruction, enteral feeding, medication, diagnose for UGI bleeding, aspirate gastric content ex. toxic material ingestion · CI — alkaline/acid ingestion, base of skull injury, midface trauma, varices/stricture · chest tube: drain pleural fluid (hemothorax, pleural effusion, chylothorax, empyema thoracis exudative phase), drain pleural air (pneumothorax) · colostomy: anorectal malformation (ทำก่อน definitive repair เช่น PSARP), CA → APR (abdominoperineal resection) · แปะสไลด์ Nasogastric intubation indication/contraindication",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Nasogastric tube — 2 indications.",3,{tags:["inst"],key:KF+"decompress (gut obstruction), enteral feeding, medication, diagnose UGI bleeding, aspirate gastric content (toxic ingestion)",ans:"<b>Gastric decompression</b> (bowel obstruction, ileus, หลังผ่าตัด) · <b>enteral feeding/ให้ยา</b> · ประเมิน <b>UGI bleeding</b> · ดูด/ล้างสารพิษในกระเพาะ · ข้อห้าม: basal skull fracture/midface trauma, กินกรด-ด่าง, varices/stricture",exp:"ตรวจตำแหน่งด้วย aspirate pH ≤5.5 หรือ CXR ก่อนให้อาหาร",rubric:"ได้ ≥2",pts:[G("≥2 indications",2,P("Decompression","decompress","obstruct","ileus","ระบาย"),P("Feeding / medication","feed","อาหาร","medicat","ยา"),P("UGI bleeding","bleed","เลือด"),P("Toxic ingestion lavage","toxic","สารพิษ","lavage"))]}),
  B("8.2 Chest drain — 2 indications.",3,{tags:["inst"],key:KF+"drain pleural fluid: hemothorax, pleural effusion, chylothorax, empyema · drain pleural air: pneumothorax",ans:"<b>Pneumothorax</b> (โดยเฉพาะ tension หลัง needle decompression, ใหญ่, on ventilator) · <b>Hemothorax</b> · <b>Empyema</b>/parapneumonic effusion ที่ต้อง drain · <b>Chylothorax</b> · malignant effusion (ก่อน pleurodesis) · หลังผ่าตัดทรวงอก",exp:"ใส่ที่ 4th–5th ICS anterior ถึง mid-axillary line (safe triangle)",rubric:"ได้ ≥2",pts:[G("≥2 indications",2,P("Pneumothorax","pneumothorax","ลมรั่ว"),P("Hemothorax","hemothorax","haemothorax","เลือด"),P("Empyema","empyema","หนอง"),P("Effusion / chylothorax","effusion","chylo","น้ำ"),P("Post thoracic surgery","post.?op","ผ่าตัด"))]}),
  B("8.3 Colostomy appliance — 2 indications.",3,{tags:["inst"],key:KF+"anorectal malformation (ก่อน definitive repair เช่น PSARP) · CA → APR",ans:"Colostomy ถาวร: <b>abdominoperineal resection</b> (low rectal cancer) · ชั่วคราว: <b>high anorectal malformation</b> (ก่อน PSARP), <b>Hirschsprung</b>, <b>Hartmann procedure</b> (perforated diverticulitis, obstructing left colon cancer), <b>protect distal anastomosis</b>, complex perianal fistula/trauma (rectal injury)",exp:"เลือกถุง/แป้นตามขนาด stoma ตัดรูให้ใหญ่กว่า stoma 2–3 mm",rubric:"ได้ ≥2",pts:[G("≥2 indications",2,P("APR / low rectal cancer","apr","abdominoperineal","rectal cancer","มะเร็ง"),P("Anorectal malformation","anorectal malform","arm","psarp"),P("Hartmann / perforation / obstruction","hartmann","perforat","obstruct"),P("Hirschsprung","hirschsprung"),P("Rectal trauma / fistula","trauma","fistula"))]})
 ),
 interp:"NG tube, chest drain, colostomy",
 summary:["NG: decompression, feeding, UGIB, lavage · ห้าม basal skull fracture","Chest drain: PTX, hemothorax, empyema, effusion · safe triangle","Colostomy: APR (ถาวร), ARM/Hirschsprung/Hartmann (ชั่วคราว)"]}),

/* ===== OSCE 9 ===== */
Co({page:1,orig:"9",topic:"inst",sub:"Surgical instrument",title:"Instruments — Kocher, Metzenbaum, Senn retractor and Radivac drain",kimg:["os76a_ko9"],
 stem:`Four items are displayed: A, B, C and D.<br>Name each item and give one use.`,
 gray:"OSCE 9. เครื่องมือ (kocher tooth / metzenbaum or mayo ??? Pls discuss with Farsai / senn retractor / radivac drain)",
 flag:NOIMG+" · ผู้จดไม่แน่ใจว่าอันที่สองเป็น Metzenbaum หรือ Mayo — ใส่ทั้งสองแบบในเฉลย",
 imgAlt:"A: forceps มีเขี้ยวที่ปลาย (ล็อกได้) · B: กรรไกรปลายโค้ง · C: retractor ขนาดเล็กสองปลาย (ปลายหนึ่งเป็นขอสามง่าม อีกปลายเป็นใบแบนงอ) · D: สายระบายพลาสติกมีรูข้าง ต่อกับขวดสุญญากาศ",
 notes:"ผู้จดตอบมา: kocher tooth / metzenbaum or mayo ??? / senn retractor / radivac drain · ไฟล์ Key 76A แปะรูป Senn retractor · ลายมือ Radivac = active + vacuum, collect drainage from อวัยวะ tissue น้อย ๆ ex. mastectomy, thyroidectomy",
 opinion:"ความมั่นใจปานกลาง (ไม่รู้ว่าอันที่สองเป็นกรรไกรชนิดไหน)",
 parts:S(
  B("9.1 Names and uses.",8,{tags:["inst"],key:KF+"Senn retractor (รูป) · Radivac = active + vacuum drain, collect drainage ex. mastectomy, thyroidectomy",
   ans:"A. <b>Kocher (Ochsner) clamp</b> — มีเขี้ยว ใช้จับเนื้อเยื่อแข็ง/fascia/ทับ bowel ที่จะตัดทิ้ง · B. <b>Metzenbaum scissors</b> — ด้ามยาว ใบบาง ตัด/เลาะเนื้อเยื่ออ่อน (dissection) · (ถ้าเป็น <b>Mayo scissors</b> — ใบหนา ตัด fascia/ไหม) · C. <b>Senn retractor</b> — retractor มือเล็ก สองปลาย ใช้แหวกผิวหนัง/ชั้นตื้นในแผลเล็ก · D. <b>Radivac drain</b> — <b>closed active suction (vacuum) drain</b> ระบายเลือด/น้ำเหลืองใต้ flap เช่น หลัง mastectomy, thyroidectomy, neck dissection",
   exp:"Active drain (Radivac, Jackson-Pratt) vs passive drain (Penrose, corrugated)",rubric:"2 คะแนนต่อชิ้น (ชื่อ + การใช้)",
   pts:[H("Kocher",25),CR(P("Kocher clamp","kocher","ochsner")),H("Scissors",25),CR(P("Metzenbaum or Mayo scissors","metzenbaum","mayo")),H("Senn",25),CR(P("Senn retractor","senn")),H("Drain",25),CR(P("Radivac / closed suction drain","radivac","vacuum","suction","closed"))]})
 ),
 interp:"Surgical instruments",
 summary:["Kocher: toothed clamp · Allis: เขี้ยวเล็กหลายซี่ · Babcock: ไม่มีเขี้ยว จับลำไส้/appendix","Metzenbaum: เนื้อเยื่ออ่อน · Mayo: fascia/ไหม","Senn, Army-Navy, Deaver, Richardson: retractors","Radivac/JP = active · Penrose = passive"]}),

/* ===== OSCE 10 ===== */
Co({page:1,orig:"10",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — painless jaundice with a palpable right upper quadrant mass",kimg:["os76a_ko10"],
 stem:`A patient presents with jaundice and a palpable abdominal mass (labelled A in the photograph). Laboratory results are provided (total bilirubin raised, predominantly direct; ALP and GGT markedly raised; AST/ALT mildly raised).<br>1. What anatomical structure is A, and what is this sign called?<br>2. What is the surface anatomy of this structure?<br>3. Interpret the laboratory results.<br>4. Give 4 differential diagnoses.<br>5. What further investigations would you request?`,
 gray:"OSCE 10. มาด้วยตาเหลือง + คลำได้ก้อนที่ท้อง — a. what anatomy is A (รูป A = ก้อนที่ท้อง) + เรียกว่า sign อะไร b. surface anatomy ตรงนั้นคืออะไร (???) c. ให้ค่าแลปมา -> interpret (Direct hyperbilirubinemia) d. DDx 4 diseases e. further Ix",
 flag:NOIMG+" · ค่าแลปในโจทย์ Claude เขียนเป็นคำบรรยาย (ผู้จดไม่ได้จดตัวเลข)",imgAlt:"รูปท้องผู้ป่วยตัวเหลือง มีก้อนนูนกลมใต้ชายโครงขวา (ป้าย A)",
 notes:"ไฟล์ Key 76A ลายมือ: Courvoisier law · right costal margin · obstructive (direct hyperbilirubinemia) · DDx: cholangiocarcinoma, periampullary tumor, CA head of pancreas, ampulla of Vater CA · further Ix: CT, MRI",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("10.1 Structure and sign.",2,{tags:["img"],key:KF+"Courvoisier law",ans:"A = <b>palpable, non-tender gallbladder</b> · sign = <b>Courvoisier sign (law)</b>: ตัวเหลือง + คลำได้ถุงน้ำดีโตไม่เจ็บ → ไม่น่าเป็นนิ่ว (ถุงน้ำดีจากนิ่วมัก fibrosis หดตัว) → นึกถึง<b>มะเร็งอุดท่อน้ำดีส่วนปลาย</b>",exp:"ข้อยกเว้น: นิ่วสองตำแหน่ง (Mirizzi, double impaction)",rubric:"ได้ = gallbladder + Courvoisier",pts:[CR(P("Gallbladder","gall ?bladder","ถุงน้ำดี")),CR(P("Courvoisier","courvoisier"))]}),
  B("10.2 Surface anatomy.",1,{tags:["img"],key:KF+"right costal margin",ans:"Fundus ของถุงน้ำดีอยู่ที่ <b>จุดตัดของ right costal margin กับขอบนอกของ right rectus abdominis (tip of 9th costal cartilage, transpyloric plane)</b>",exp:"ตำแหน่งเดียวกับที่ตรวจ Murphy sign",rubric:"ได้",pts:[CR(P("Right costal margin / 9th costal cartilage / lateral rectus","costal","9th","rectus","ชายโครง"))]}),
  B("10.3 Interpret labs.",2,{tags:["img"],key:KF+"obstructive (direct hyperbilirubinemia)",ans:"<b>Direct (conjugated) hyperbilirubinemia</b> + ALP/GGT สูงเด่น = <b>obstructive (cholestatic) jaundice</b>",exp:"Hepatocellular: AST/ALT สูงเด่น",rubric:"ได้",pts:[CR(P("Obstructive / cholestatic jaundice","obstruct","cholesta","direct"))]}),
  B("10.4 Four differential diagnoses.",3,{tags:["img"],key:KF+"cholangiocarcinoma, periampullary tumor, CA head of pancreas, ampulla of Vater CA",ans:"<b>Carcinoma head of pancreas</b> · <b>Ampulla of Vater carcinoma</b> · <b>Distal cholangiocarcinoma</b> · <b>Duodenal (periampullary) carcinoma</b>",exp:"กลุ่ม periampullary tumors",rubric:"1 ข้อ = 0.75",pts:[G("4 DDx",4,P("CA head of pancreas","pancrea","ตับอ่อน"),P("Ampulla of Vater CA","ampull","vater"),P("Distal cholangiocarcinoma","cholangio"),P("Duodenal CA","duoden"),P("Periampullary tumor","periampull"))]}),
  B("10.5 Further investigations.",2,{tags:["img"],key:KF+"CT, MRI",ans:"<b>Ultrasound</b> (ท่อน้ำดีขยาย) → <b>CT abdomen pancreatic protocol</b> (staging, resectability) · MRCP · CA 19-9, CEA · EUS ± FNA · ERCP + stent เมื่อมี cholangitis/ไม่ผ่าตัด · CXR/CT chest",exp:"ไม่ต้อง biopsy ก่อนผ่าตัด Whipple ถ้าภาพชัดและตัดได้",rubric:"ได้ = CT/MRCP + tumor marker",pts:[CR(P("CT / MRCP","ct","mrcp","mri")),P("CA 19-9","19.?9","tumor marker"),P("EUS / ERCP","eus","ercp")]})
 ),
 interp:"Courvoisier sign — periampullary cancer",
 summary:["Courvoisier: jaundice + palpable non-tender GB → ไม่ใช่นิ่ว","Periampullary: pancreas head, ampulla, distal CBD, duodenum","CT pancreatic protocol + CA 19-9 → Whipple ถ้าตัดได้"]}),

/* ===== OSCE 11 ===== */
Co({page:1,orig:"11",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Procedure — WHO hand hygiene and dry dressing",kimg:["os76a_ko11"],
 stem:`The examiner is observing.<br>1. Perform hand hygiene according to the WHO technique.<br>2. Perform a dry dressing of a clean sutured wound on the model.`,
 gray:"OSCE 11. ล้างมือ WHO และทำแผล dry dressing",
 sp:"หุ่นแผลเย็บสะอาด · เจลแอลกอฮอล์/สบู่ · ชุดทำแผล (forceps 2 อัน, สำลี/gauze, ชามใส่ NSS/povidone, ถ้วย) · ถุงมือ · พลาสเตอร์ · ผู้คุมดู: ครบ 6–8 ขั้นของ WHO (20–30 วินาทีสำหรับเจล), เปิดชุดทำแผลไม่ปนเปื้อน, แยก forceps (หยิบของ sterile vs สัมผัสแผล), เช็ดจากแผล<b>ด้านในออกด้านนอก</b> ทีละครั้ง ทิ้งสำลีทุกครั้ง, ปิด gauze, ติดพลาสเตอร์, ทิ้งของ, ล้างมือหลังทำ",
 notes:"ไฟล์ Key 76A แปะ NHS Alcohol handrub hand hygiene technique (ขั้นตอน 1–11 วงตัวเลข)",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("11.1 WHO hand hygiene.",4,{tags:["proc"],key:KF+"แปะขั้นตอน alcohol handrub (NHS): apply → palm to palm → right palm over left dorsum and vice versa → palm to palm fingers interlaced → backs of fingers → rotational rubbing of thumbs → fingertips in palm → (wrists) → dry, 20–30 s",ans:"เจลเต็มอุ้งมือ · <b>palm to palm</b> · <b>หลังมือ (palm over dorsum) สลับ</b> · <b>palm to palm นิ้วสอดประสาน</b> · <b>หลังนิ้วล็อก</b> · <b>หมุนถูหัวแม่มือ</b> · <b>ปลายนิ้วถูกลางฝ่ามือ</b> · (ข้อมือ) · รอแห้ง 20–30 วินาที (ล้างน้ำ 40–60 วินาที)",exp:"5 moments: ก่อนสัมผัสผู้ป่วย, ก่อนหัตถการ aseptic, หลังสัมผัสสารคัดหลั่ง, หลังสัมผัสผู้ป่วย, หลังสัมผัสสิ่งแวดล้อมรอบผู้ป่วย",rubric:"ได้ = ครบทุกขั้น",
   pts:[CR(P("All WHO steps in order","palm","ฝ่ามือ","interlac","thumb","หัวแม่มือ","fingertip","ปลายนิ้ว","step")),P("Adequate duration","20","30","วินาที","second")]}),
  B("11.2 Dry dressing.",6,{tags:["proc"],ans:"แนะนำตัว อธิบาย · ล้างมือ · เปิดชุดทำแผล aseptic · ใส่ถุงมือ/ใช้ forceps · เปิดแผลดู (บวม แดง หนอง แยก) · <b>forceps หยิบ (ไม่แตะแผล) แยกจาก forceps เช็ด</b> · ชุบ NSS เช็ด<b>แนวแผลก่อน แล้ววนจากในออกนอก</b> ครั้งละ 1 ก้อนแล้วทิ้ง · antiseptic รอบแผล (ถ้าใช้) · ปิด <b>sterile dry gauze</b> คลุมเกินแผล · ติดพลาสเตอร์ · ทิ้งขยะติดเชื้อ ล้างมือ · บันทึก",exp:"แผลเย็บสะอาด ปิด dry dressing 24–48 ชม. แล้วอาบน้ำได้",rubric:"ปนเปื้อน = หักคะแนนมาก",
   pts:[H("Asepsis",40),CR(P("Open set aseptically, no contamination","aseptic","sterile","ไม่ปนเปื้อน")),P("Separate forceps roles","forceps","ปากคีบ"),H("Cleaning",40),CR(P("Clean from wound outward, one swab one stroke","inside out","ในออกนอก","from wound","one stroke","ทิ้ง")),H("Finish",20),P("Cover with dry gauze and tape","gauze","ผ้าก๊อซ","tape","พลาสเตอร์"),P("Dispose and hand hygiene","dispose","ทิ้ง","hand","ล้างมือ")]})
 ),
 interp:"Hand hygiene + dressing",
 summary:["WHO hand rub 20–30 s, hand wash 40–60 s","เช็ดแผลจากในออกนอก ก้อนเดียวต่อหนึ่งครั้ง","ปิด dry sterile gauze"]}),

/* ===== OSCE 12 ===== */
Co({page:1,orig:"12",topic:"img",sub:"Other imaging",title:"Imaging — endoscopic cholangiopancreatogram",kimg:["os76a_ko12"],
 stem:`A contrast image obtained through an endoscope is shown, with structures labelled A, B and C.<br>1. Give the full name of this procedure.<br>2. Identify A, B and C.<br>3. Give 2 indications for this procedure.`,
 gray:"OSCE 12. ERCP — a. full name of procedure b. A, B, C คืออะไร (ชี้ไปที่ gallbladder, cbd, pancreatic duct) c. 2 indications for ERCP",
 flag:NOIMG,imgAlt:"ภาพ fluoroscopy มีกล้อง endoscope อยู่ใน duodenum ฉีดสารทึบรังสีเห็นท่อน้ำดีและท่อตับอ่อน · A ชี้ถุงน้ำดี · B ชี้ท่อน้ำดีใหญ่ · C ชี้ท่อตับอ่อน",
 notes:"ผู้จดให้คำตอบ A, B, C = gallbladder, CBD, pancreatic duct · ไฟล์ Key 76A ลายมือ: Endoscopic retrograde cholangiopancreatography · indications: choledocholithiasis, bile duct malignancy, pancreatic tumor, chronic pancreatitis · แปะรูป ERCP 2 รูป",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("12.1 Full name.",2,{tags:["img"],key:KF+"Endoscopic retrograde cholangiopancreatography",ans:"<b>Endoscopic Retrograde CholangioPancreatography (ERCP)</b>",exp:"ใช้ side-viewing duodenoscope เข้า ampulla",rubric:"ได้",pts:[CR(P("Endoscopic retrograde cholangiopancreatography","endoscopic retrograde","cholangiopancreat"))]}),
  B("12.2 Identify A, B, C.",3,{tags:["img"],key:"ผู้จด: gallbladder, CBD, pancreatic duct",ans:"A = <b>gallbladder</b> · B = <b>common bile duct</b> · C = <b>main pancreatic duct</b>",exp:"CBD กับ pancreatic duct มาเปิดร่วมกันที่ ampulla of Vater (major papilla) ใน 2nd part of duodenum",rubric:"1 คะแนนต่อจุด",pts:[P("Gallbladder","gall ?bladder","ถุงน้ำดี"),P("Common bile duct","common bile","cbd"),P("Pancreatic duct","pancreatic duct","wirsung")]}),
  B("12.3 Two indications.",2,{tags:["img"],key:KF+"choledocholithiasis, bile duct malignancy, pancreatic tumor, chronic pancreatitis",ans:"<b>Choledocholithiasis</b> (stone extraction + sphincterotomy) · <b>Acute cholangitis</b> (biliary drainage) · <b>Malignant biliary obstruction</b> → stent · biliary leak หลังผ่าตัด · gallstone pancreatitis ที่มี cholangitis/CBD obstruction · ERCP ปัจจุบันเป็นหัตถการรักษา (การวินิจฉัยใช้ MRCP/EUS)",exp:"ภาวะแทรกซ้อน: post-ERCP pancreatitis (มากสุด), bleeding, perforation, cholangitis",rubric:"ได้ ≥2",pts:[G("≥2 indications",2,P("CBD stone","choledocholith","cbd stone","นิ่ว"),P("Cholangitis","cholangitis"),P("Malignant obstruction / stent","malign","stent","tumor","มะเร็ง"),P("Bile leak","leak","รั่ว"),P("Chronic pancreatitis","pancreatitis"))]})
 ),
 interp:"ERCP",
 summary:["ERCP: therapeutic (stone, cholangitis, stent)","Complication อันดับ 1: post-ERCP pancreatitis","Diagnostic biliary imaging: MRCP/EUS"]}),

/* ===== MEQ 1 ===== */
SA({page:2,orig:"MEQ 1",num:"SA 1",sub:"Pediatric surgery",title:"Short answer — infant with pale stools",kimg:["os76a_km1"],
 stem:`A photograph shows the pale (acholic) stool of a jaundiced 6-week-old infant.<br>1. Give 2 differential diagnoses.<br>2. If you work in a community hospital, how would you manage this infant?`,
 gray:"MEQ 1. (ซ้ำ ac) ให้รูปเด็กขี้สีซีด — a. ถามว่าจะ ddx 2 โรค b. ถ้าอยู่รพช จะ management ยังไง",
 flag:NOIMG,imgAlt:"รูปผ้าอ้อมเด็กที่มีอุจจาระสีซีดขาวเหมือนดินเหนียว",
 notes:"ผู้จดเขียน \"ซ้ำ ac\" (ไม่บอกปี) · ไฟล์ Key 76A ลายมือ: Biliary atresia → เด็กกว่า, choledochal cyst · รพช: U/S, refer รพ.ใหญ่",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("1.1 Two differential diagnoses.",2,{tags:["spot"],key:KF+"Biliary atresia, choledochal cyst",ans:"<b>Biliary atresia</b> (มากสุด) · <b>Choledochal cyst</b> · (อื่น: neonatal hepatitis, Alagille syndrome, inspissated bile)",exp:"อุจจาระซีดในทารก = cholestasis ต้องรีบหาสาเหตุ (Kasai ก่อน 60 วัน)",rubric:"1 คะแนน/โรค",pts:[CR(P("Biliary atresia","biliary atresia","ba")),P("Choledochal cyst","choledochal"),P("Neonatal hepatitis","hepatitis")]}),
  B("1.2 Management at a community hospital.",2,{tags:["spot"],key:KF+"U/S, refer รพ.ใหญ่",ans:"ส่ง <b>direct/total bilirubin</b>, LFT · <b>ultrasound</b> ถ้าทำได้ · ให้ <b>vitamin K</b> · <b>ส่งต่อด่วน</b>ไปศัลยแพทย์เด็ก/โรงพยาบาลศูนย์ (ภายในไม่กี่วัน) — อย่ารอ",exp:"ใช้ stool color card คัดกรอง",rubric:"ได้ = refer เร็ว",pts:[CR(P("Urgent referral","refer","ส่งต่อ")),P("Direct bilirubin / ultrasound","bilirubin","u/?s","ultrasound"),P("Vitamin K","vitamin k","vit k")]})
 ),
 interp:"Acholic stool",
 summary:["Pale stool + jaundice ทารก → BA จนกว่าจะพิสูจน์ได้","Kasai ก่อน 60 วัน","รพช: bilirubin, USG, vitamin K, refer ด่วน"]}),

/* ===== MEQ 2 ===== */
SA({page:2,orig:"MEQ 2",num:"SA 2",sub:"Imaging film",title:"Short answer — abdominal radiographs with dilated small bowel",kimg:["os76a_km2"],
 stem:`A patient with a previous laparotomy has colicky abdominal pain, vomiting and distension. Abdominal radiographs are shown.<br>1. What films are these?<br>2. Describe the findings.<br>3. What is the most likely cause?<br>4. How would you treat this patient?`,
 gray:"MEQ 2. ให้ film x ray — a. Film อะไร (acute abdomen series: ap supine, pa upright) b. เห็นอะไร i. Step ladder pattern ii. Different height in the same loop c. เกิดจากอะไร (adhesion) d. รักษายังไง",
 flag:NOIMG+" · stem เติมประวัติผ่าตัดท้องให้เข้ากับคำตอบ adhesion",imgAlt:"AXR supine: ลำไส้เล็กโป่งตรงกลางท้อง เห็น valvulae conniventes ลำไส้ใหญ่ไม่มีลม · upright: air-fluid levels หลายระดับเป็นขั้นบันได",
 notes:"ผู้จดให้คำตอบ: acute abdomen series (AP supine, PA upright), step ladder pattern, different height in the same loop, adhesion · ไฟล์ Key 76A ลายมือ: + chest upright PA ด้วย · small bowel obstruction · conservative 80%: IV fluid + NPO + NG tube for decompression",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("2.1 Films.",1,{tags:["spot"],key:KF+"acute abdomen series + chest upright PA",ans:"<b>Acute abdomen series</b>: <b>supine AP abdomen</b> + <b>upright abdomen</b> + <b>upright PA chest</b>",exp:"CXR upright ดู free air ใต้ diaphragm",rubric:"ได้",pts:[CR(P("Acute abdomen series / supine and upright","acute abdomen","supine","upright"))]}),
  B("2.2 Findings.",3,{tags:["spot"],key:"ผู้จด: step ladder pattern, different height in the same loop",ans:"<b>Dilated small bowel loops</b> (&gt;3 cm) ตรงกลางท้อง เห็น valvulae conniventes · <b>multiple air-fluid levels</b> เป็น <b>step-ladder pattern</b> · <b>air-fluid levels ต่างระดับในห่วงเดียวกัน</b> · ลมใน colon/rectum น้อยหรือไม่มี",exp:"ไม่มี free air",rubric:"ได้",pts:[CR(P("Dilated small bowel","dilat","small bowel","ลำไส้เล็ก")),CR(P("Step-ladder air-fluid levels","step","ladder","air.?fluid","บันได")),P("Different heights in same loop / no colonic gas","differ","ต่างระดับ","colon")]}),
  B("2.3 Cause.",1,{tags:["spot"],key:"ผู้จด: adhesion",ans:"<b>Small bowel obstruction</b> จาก <b>postoperative adhesion</b> (สาเหตุอันดับ 1 ของ SBO)",exp:"อันดับรอง: hernia, tumor",rubric:"ได้",pts:[CR(P("Adhesive SBO","adhesi","พังผืด"))]}),
  B("2.4 Treatment.",3,{tags:["spot"],key:KF+"conservative 80%: IV fluid + NPO + NG tube for decompression",ans:"<b>Conservative</b> (สำเร็จ ~70–80%): <b>NPO, NG decompression, IV fluid + แก้ electrolyte</b>, Foley ดู urine output · <b>water-soluble contrast (Gastrografin) challenge</b> · <b>ผ่าตัด (adhesiolysis)</b> เมื่อมี strangulation (ไข้ ปวดต่อเนื่อง peritonitis lactate สูง), complete obstruction ไม่ดีขึ้น 48–72 ชม.",exp:"Strangulation ต้องผ่าตัดทันที",rubric:"ได้ = conservative + indication ผ่าตัด",pts:[CR(P("NPO, NG decompression, IV fluid","npo","ng","iv fluid","งดน้ำ")),P("Water-soluble contrast","gastrografin","contrast"),CR(P("Surgery if strangulation/fails","strangul","surgery","ผ่าตัด","adhesiolysis"))]})
 ),
 interp:"Adhesive SBO",
 summary:["Step-ladder air-fluid levels","Adhesion = สาเหตุ SBO อันดับ 1","Conservative 70–80% · ผ่าเมื่อ strangulation/ไม่ดีขึ้น"]}),

/* ===== MEQ 3 ===== */
SA({page:2,orig:"MEQ 3",num:"SA 3",sub:"Imaging film",title:"Short answer — contrast study of the esophagus",kimg:["os76a_km3"],
 stem:`A patient has progressive dysphagia to both solids and liquids with regurgitation of undigested food. A contrast study is shown.<br>1. What is this investigation called?<br>2. Describe the findings.<br>3. What is the diagnosis?`,
 gray:"MEQ 3. Barium swallowing achalasia (ตรงแอค) — a. what's this method called b. describe c. Dx",
 flag:NOIMG,imgAlt:"Barium swallow: หลอดอาหารส่วนต้นขยายกว้าง ปลายล่างเรียวแหลมเป็นจะงอยปากนก ที่ gastroesophageal junction",
 notes:"ผู้จดให้คำตอบ achalasia · ไฟล์ Key 76A ลายมือ: Barium swallow · bird beak sign, esophageal dilatation & tapering @ esophageal (GEJ) · Achalasia · แปะรูป barium swallow · ผู้จดเขียน \"ตรงแอค\" (ไม่บอกปี)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("3.1 Name of investigation.",1,{tags:["spot"],key:KF+"Barium swallow",ans:"<b>Barium swallow (esophagogram)</b>",exp:"ถ้าสงสัย perforation ใช้ water-soluble contrast แทน barium",rubric:"ได้",pts:[CR(P("Barium swallow","barium","esophagogram"))]}),
  B("3.2 Findings.",2,{tags:["spot"],key:KF+"bird beak sign, esophageal dilatation & tapering at GEJ",ans:"<b>Dilated esophagus</b> + <b>smooth tapering ที่ GEJ</b> = <b>bird's beak sign</b> ± air-fluid level ในหลอดอาหาร, ไม่มี gastric air bubble",exp:"ปลายเรียวเรียบ — ถ้าขรุขระ/ไหล่ (shouldering) นึกถึงมะเร็ง (pseudoachalasia)",rubric:"ได้",pts:[CR(P("Bird's beak","bird","beak","จะงอย")),P("Dilated esophagus","dilat","ขยาย")]}),
  B("3.3 Diagnosis.",2,{tags:["spot"],key:"ผู้จด: achalasia",ans:"<b>Achalasia</b> — LES คลายตัวไม่ได้ + aperistalsis · ยืนยัน <b>high-resolution manometry</b> และ <b>EGD</b> ตัดมะเร็ง · รักษา: <b>pneumatic dilatation</b>, <b>Heller myotomy + fundoplication</b>, POEM (Botox ในคนเสี่ยงสูง)",exp:"Chicago classification type I–III",rubric:"ได้",pts:[CR(P("Achalasia","achalasia"))]})
 ),
 interp:"Achalasia",
 summary:["Bird's beak on barium swallow","Manometry = gold standard","Tx: pneumatic dilatation, Heller + Dor, POEM"]}),

/* ===== MEQ 4 ===== */
SA({page:2,orig:"MEQ 4",num:"SA 4",sub:"Uro/Genital",title:"Short answer — evaluation of lower urinary tract symptoms",kimg:["os76a_km4"],
 stem:`A 65-year-old man presents with lower urinary tract symptoms.<br>1. What history would you take?<br>2. What would you examine?`,
 gray:"MEQ 4. LUTS — a. ซักประวัติ b. ตรวจร่างกายอะไร",
 notes:"ไฟล์ Key 76A ลายมือ: ซักประวัติ — urgency, frequency, nocturia, incomplete emptying, intermittency?, strain?, stream? · ตรวจ — palpable bladder, full PR (ต่อม, size), ตรวจ genitalia, CVA tenderness (R/O upper tract), neuro ex. bulbocavernosus reflex, perianal sensation",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 History.",4,{tags:["spot"],key:KF+"urgency, frequency, nocturia, incomplete emptying, intermittency, strain, stream",ans:"<b>Storage symptoms</b>: frequency, urgency, nocturia, urge incontinence · <b>Voiding</b>: hesitancy, weak stream, intermittency, straining, terminal dribbling · <b>Post-micturition</b>: incomplete emptying, post-void dribbling · ประเมินความรุนแรงด้วย <b>IPSS</b> + QoL · <b>Red flags</b>: hematuria, ปวด, ไข้, retention, น้ำหนักลด, ปวดกระดูก · ประวัติอื่น: DM, neurologic disease, ยา (anticholinergic, decongestant, diuretic), ผ่าตัด/บาดเจ็บ urethra, STD, ดื่มน้ำ/กาแฟ/สุรา, frequency-volume chart",exp:"แยก storage vs voiding ช่วยเลือกการรักษา",rubric:"แบ่งตามกลุ่มอาการ",pts:[P("Storage symptoms","frequen","urgen","nocturia","กลางคืน"),P("Voiding symptoms","stream","hesitan","intermit","strain","เบ่ง"),P("Incomplete emptying / IPSS","incomplete","ipss","score"),CR(P("Red flags (hematuria, retention)","hematuria","เลือด","retention")),P("Comorbidities / drugs","dm","เบาหวาน","drug","ยา","neuro")]}),
  B("4.2 Examination.",3,{tags:["spot"],key:KF+"palpable bladder, PR (prostate size), genitalia, CVA tenderness, neuro (bulbocavernosus reflex, perianal sensation)",ans:"<b>Abdomen</b>: palpable bladder, CVA/kidney · <b>external genitalia</b> (meatal stenosis, phimosis) · <b>DRE</b>: ขนาด consistency nodule ของ prostate, anal tone · <b>focused neuro</b>: perianal sensation, bulbocavernosus reflex, lower limb · ร่วมกับ urinalysis, PSA (ตามข้อบ่งชี้), Cr, uroflowmetry + PVR",exp:"DRE ช่วยประเมินขนาดต่อม ถ้า >40 mL ได้ประโยชน์จาก 5-ARI",rubric:"ได้",pts:[CR(P("DRE prostate","dre","pr","rectal","prostate")),P("Palpable bladder / abdomen","bladder","กระเพาะ","abdomen"),P("Genitalia","genital","อวัยวะเพศ","meatus"),P("Neuro exam","neuro","bulbocavernosus","sensation")]})
 ),
 interp:"LUTS evaluation",
 summary:["IPSS 0–7/8–19/20–35","DRE + palpable bladder + neuro","UA, PSA, PVR, uroflow"]}),

/* ===== MEQ 5 ===== */
SA({page:2,orig:"MEQ 5",num:"SA 5",sub:"Head & neck",title:"Short answer — infected-looking neck mass",kimg:["os76a_km5"],
 stem:`A photograph shows a red, swollen, tender neck mass with a central pustular area.<br>1. What history would you ask?<br>2. Give 3 differential diagnoses.<br>3. What further investigation would you request?`,
 gray:"MEQ 5. รูป neck mass ดู infected (น่าจะเป็น carbuncle แต่ถ้าชื่อโรคมันจะ TT) — a. ซักประวัติ b. DDx 3 diseases c. ตรวจอะไรเพิ่ม",
 flag:NOIMG,imgAlt:"รูปคอ: ก้อนบวมแดง ผิวตึง มีจุดหนองตรงกลาง",
 notes:"ผู้จดคิดว่าเป็น carbuncle · ไฟล์ Key 76A ลายมือ: ซักประวัติ infection Hx (ก้อนนี้เป็นมานานแค่ไหน, ปวด?, แดง?, acute?), pharyngitis, infection head & neck, Fam Hx of thyroid CA, Hx of neck Sx, hyper/hypothyroid · DDx: thyroid cyst, thyroglossal duct cyst infection, skin infection ex. furuncle, carbuncle · ตรวจ U/S",
 opinion:"ความมั่นใจปานกลาง (ไม่เห็นรูปจริง)",
 parts:S(
  B("5.1 History.",3,{tags:["spot"],key:KF+"ระยะเวลา ปวด แดง เฉียบพลัน · pharyngitis/infection head & neck · Fam Hx thyroid CA · Hx neck surgery · hyper/hypothyroid",ans:"ก้อนเป็นมานานเท่าไร มีก้อนเดิมมาก่อนไหม (cyst ที่ติดเชื้อ) · ปวด แดง ไข้ หนองไหล · <b>การติดเชื้อนำ</b> (เจ็บคอ ฟันผุ แผลที่หน้า/หนังศีรษะ) · อาการกลืนลำบาก/หายใจลำบาก (deep neck infection) · <b>DM</b>/ภูมิต่ำ · อาการต่อมไทรอยด์ · ประวัติผ่าตัด/ฉายรังสีที่คอ · TB contact · น้ำหนักลด",exp:"คนเบาหวานติดเชื้อผิวหนังรุนแรงกว่าและหายช้า",rubric:"ได้",pts:[P("Duration / pre-existing lump","นาน","duration","เดิม","before"),P("Pain, fever, discharge","pain","ปวด","fever","ไข้","pus","หนอง"),P("Preceding infection source","throat","คอ","dental","ฟัน","infection"),CR(P("Diabetes / immunocompromise","dm","diabet","เบาหวาน","immun")),P("Airway / swallowing symptoms","dyspha","กลืน","breath","หายใจ")]}),
  B("5.2 Three differential diagnoses.",3,{tags:["spot"],key:KF+"thyroid cyst, thyroglossal duct cyst infection, furuncle/carbuncle",ans:"<b>Carbuncle/furuncle</b> (skin abscess) · <b>Infected epidermoid cyst</b> · <b>Infected thyroglossal duct cyst/branchial cleft cyst</b> · suppurative lymphadenitis/deep neck abscess · infected thyroid cyst/acute suppurative thyroiditis",exp:"Carbuncle = กลุ่ม furuncle หลายหัวที่ต้นคอด้านหลังในคนเบาหวาน",rubric:"1 คะแนน/โรค",pts:[G("3 DDx",3,P("Carbuncle / furuncle","carbuncle","furuncle","ฝี"),P("Infected epidermoid cyst","epiderm","sebaceous"),P("Infected TGDC / branchial cyst","thyroglossal","tgdc","branchial"),P("Suppurative lymphadenitis / neck abscess","lymph","neck abscess"),P("Infected thyroid cyst / thyroiditis","thyroid"))]}),
  B("5.3 Further investigation.",2,{tags:["spot"],key:KF+"U/S",ans:"<b>Ultrasound neck</b> (fluid collection, ความสัมพันธ์กับ thyroid/hyoid) ± <b>CT neck with contrast</b> ถ้าสงสัย deep neck infection · CBC, <b>blood sugar/HbA1c</b>, pus gram stain + culture",exp:"อย่าเจาะ/ผ่าก้อนแนวกลางคอก่อนรู้ว่าเป็น TGDC/ectopic thyroid",rubric:"ได้",pts:[CR(P("Ultrasound","u/?s","ultrasound")),P("CT neck","ct"),P("Blood sugar / culture","sugar","glucose","fbs","hba1c","culture")]})
 ),
 interp:"Infected neck mass",
 summary:["Carbuncle: DM, ต้นคอด้านหลัง, S. aureus","Infected cyst → I&D/ATB แล้ว excision ภายหลัง","USG neck แยก collection/โครงสร้าง"]}),

/* ===== MEQ 6 ===== */
SA({page:2,orig:"MEQ 6",num:"SA 6",sub:"Pediatric surgery",title:"Short answer — cleft palate",kimg:["os76a_km6"],
 stem:`A photograph of an infant's open mouth shows a defect in the palate.<br>1. What is this?<br>2. When should it be repaired?<br>3. Why at that time?`,
 gray:"MEQ 6. cleft palate — a. คืออะไร b. ผ่าตอนไหน c. ทำไม",
 flag:NOIMG,imgAlt:"รูปช่องปากทารก: เพดานโหว่กลางเพดานแข็งและอ่อน",
 notes:"ไฟล์ Key 76A ลายมือ: เพดานโหว่, complete/incomplete? · 9–12 months · ก่อนเด็กพูด",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("6.1 Diagnosis.",1,{tags:["spot"],key:KF+"เพดานโหว่ (complete/incomplete)",ans:"<b>Cleft palate</b> (เพดานโหว่) — ระบุ complete/incomplete, ข้างเดียว/สองข้าง, ร่วม cleft lip หรือไม่",exp:"Isolated cleft palate สัมพันธ์ syndrome (Pierre Robin, 22q11) มากกว่า cleft lip",rubric:"ได้",pts:[CR(P("Cleft palate","cleft palate","เพดานโหว่"))]}),
  B("6.2 Timing.",1,{tags:["spot"],key:KF+"9–12 months",ans:"<b>อายุ 9–12 เดือน</b> (โดยทั่วไป 6–18 เดือน)",exp:"Cleft lip ซ่อมก่อนที่ ~3 เดือน (rule of 10s)",rubric:"ได้",pts:[CR(P("9-12 months","9.?-.?12","12 ?(m|เดือน)","9 ?(m|เดือน)","month","เดือน"))]}),
  B("6.3 Reason.",2,{tags:["spot"],key:KF+"ก่อนเด็กพูด",ans:"ซ่อม<b>ก่อนเริ่มพูด</b>เพื่อให้ velopharyngeal function ปกติ ลด <b>hypernasal speech/compensatory articulation</b> · ถ้าทำเร็วเกินไปอาจรบกวนการเจริญของ maxilla (midface hypoplasia) จึงชั่งน้ำหนักทั้งสองด้าน",exp:"ปัญหาอื่น: feeding (จุกพิเศษ), otitis media with effusion (ใส่ ventilation tube)",rubric:"ได้",pts:[CR(P("Before speech development","speech","พูด")),P("Balance with maxillary growth","growth","maxilla","การเจริญ")]})
 ),
 interp:"Cleft palate",
 summary:["Cleft lip ~3 เดือน · palate 9–18 เดือน (ก่อนพูด)","Feeding ด้วยจุกพิเศษ","OME บ่อย → ตรวจการได้ยิน"]}),

/* ===== MEQ 7 ===== */
SA({page:2,orig:"MEQ 7",num:"SA 7",sub:"Pediatric surgery",title:"Short answer — newborn respiratory distress with bowel in the chest",kimg:["os76a_km7"],
 stem:`A newborn has respiratory distress and a scaphoid abdomen. The chest radiograph shows bowel loops in the left hemithorax with mediastinal shift to the right.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"MEQ 7. Congenital diaphragmatic hernia — a. Diag b. Management",
 flag:NOIMG,imgAlt:"CXR ทารก: ห่วงลำไส้มีลมอยู่ในทรวงอกซ้าย หัวใจและ mediastinum ถูกดันไปขวา",
 notes:"ผู้จดให้หัวข้อ CDH · ไฟล์ Key 76A ลายมือ: DDx กับ Lt eventration of diaphragm · Diag: film หรือคลอด bowel loop in thorax · Management: ใส่ ET tube on ventilator, so ไม่ stable, 2–3 วันหลังคลอด → ผ่าตัด",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("7.1 Diagnosis.",2,{tags:["spot"],key:KF+"film เห็น bowel loop in thorax · DDx Lt eventration of diaphragm",ans:"<b>Congenital diaphragmatic hernia (Bochdalek, left)</b> · DDx: eventration of diaphragm, congenital pulmonary airway malformation (CPAM)",exp:"OG tube ขดในอกช่วยยืนยัน",rubric:"ได้",pts:[CR(P("CDH","diaphragmatic hernia","cdh","bochdalek"))]}),
  B("7.2 Management.",4,{tags:["spot"],key:KF+"ใส่ ET tube on ventilator · ผ่าตัดเมื่อ stable (2–3 วันหลังคลอด)",ans:"<b>Intubate ทันที</b> (ห้าม bag-mask) · <b>OG/NG decompression</b> · gentle ventilation (permissive hypercapnia, preductal SpO₂ ≥85%) · IV access, รักษาอุณหภูมิ · ประเมิน/รักษา <b>pulmonary hypertension</b> (iNO, ECMO ในบางราย) · <b>ผ่าตัดซ่อม diaphragm เมื่อ stable</b> (ไม่ใช่ emergency)",exp:"ปัญหาหลักคือ pulmonary hypoplasia + PPHN",rubric:"ได้ = intubation + OG + delayed repair",pts:[CR(P("Intubate, avoid bag-mask","intubat","et tube","ใส่ท่อ","no mask","ห้าม")),P("OG/NG decompression","og","ng","decompress"),P("Gentle ventilation / PPHN treatment","gentle","pulmonary hypertension","pphn","ino","ecmo"),CR(P("Delayed surgical repair when stable","stable","delay","ผ่าตัด","repair"))]})
 ),
 interp:"CDH",
 summary:["Scaphoid abdomen + bowel in chest","Intubate, OG decompression, no mask","Repair after stabilization"]}),

/* ===== MEQ 8 ===== */
SA({page:2,orig:"MEQ 8",num:"SA 8",sub:"Plastic/Skin/Burn",title:"Short answer — painful pink burn wound",kimg:["os76a_km8"],
 stem:`A photograph shows a burn with peeled skin and a moist pink base. The patient complains of severe pain.<br>1. What is the depth of this burn?<br>2. How would you manage the wound?`,
 gray:"MEQ 8. Burn ให้รูปผิวลอกๆเป็นสีชมพู + บรรยายว่าเจ็บมาก — a. Burn ระดับไหน → น่าจะ second superficial b. การดูแล",
 flag:NOIMG,imgAlt:"รูปแผลไฟไหม้: หนังกำพร้าลอก พื้นแผลชมพูชื้น",
 notes:"ผู้จดตอบ second superficial · ไฟล์ Key 76A ลายมือ: Heal ได้เอง ∴ ทำให้แผล moist ex. Bactigras แล้วค่อยแปะ gauze ทับ · กัน infection: silver sulfadiazine · Pain control — IV morphine (ช่วงแรก), patient controlled analgesia",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("8.1 Depth.",2,{tags:["spot"],key:"ผู้จด: second degree superficial",ans:"<b>Superficial partial-thickness (superficial 2nd-degree) burn</b> — ชมพูชื้น blanch ได้ เจ็บมาก",exp:"หายใน 2–3 สัปดาห์ แผลเป็นน้อย",rubric:"ได้",pts:[CR(P("Superficial partial thickness","superficial","partial","2nd","second"))]}),
  B("8.2 Wound management.",4,{tags:["spot"],key:KF+"moist dressing (Bactigras + gauze) · SSD กัน infection · pain control IV morphine, PCA",ans:"ล้างทำความสะอาดด้วย NSS · debride bulla ที่แตก · <b>moist wound healing</b>: paraffin gauze (Bactigras), hydrocolloid/silver dressing หรือ <b>topical antimicrobial (SSD)</b> · <b>pain control</b> (opioid ช่วงแรก, ก่อนทำแผล) · tetanus prophylaxis · ยกแขนขาสูง · ติดตามว่าแผลลึกขึ้นหรือไม่",exp:"ไม่ต้อง skin graft ถ้าหายใน 2–3 สัปดาห์",rubric:"ได้",pts:[CR(P("Clean and moist/antimicrobial dressing","moist","bactigras","ssd","silver","dressing")),CR(P("Analgesia","pain","morphine","ปวด","analges")),P("Tetanus prophylaxis","tetanus","บาดทะยัก")]})
 ),
 interp:"Superficial partial thickness burn",
 summary:["ชมพูชื้น เจ็บ blanch = superficial partial","Moist dressing + analgesia + tetanus","หายเอง 2–3 สัปดาห์"]}),

/* ===== MEQ 9 ===== */
SA({page:3,orig:"MEQ 9",num:"SA 9",sub:"Vascular/Ulcer",title:"Short answer — black lesion of a toe",img:["os76a_m9"],kimg:["os76a_km9"],
 stem:`A photograph of the foot is shown. The lesion in the real examination was on the second toe, which appeared black.<br>1. Describe the lesion.<br>2. What is the diagnosis?<br>3. What additional physical examination would you perform?`,
 gray:"MEQ 9. รูปนิ้วชี้เท้าดำๆ [รูป] น่าจะประมาณนี้มั้ง แต่เป็นที่นิ้วชี้เท้า — a. อธิบายลักษณะแผล b. Diag c. การตรวจร่างกายเพิ่มเติม",
 flag:"⚠ รูปเป็นภาพอ้างอิงที่ผู้จดหามา (แผลดำที่ฝ่าเท้าใต้หัวแม่เท้า) — ของจริงเป็นนิ้วชี้เท้าดำ",
 notes:"ไฟล์ Key 76A ลายมือ: sharp irregular necrotic? base ulcer on hypopigmented skin @ plantar side of great toe · ไม่มี granulation, ดำ ๆ (necrotic/black) · Dx: Arterial ulcer (PAD) · ตรวจ Ankle brachial index, pulse 4 ตำแหน่ง: femoral, popliteal, post tibial, dorsalis pedis · แปะสไลด์ Arterial vs Venous lesions",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ (PAD) ความมั่นใจปานกลาง — ไม่เห็นรูปจริง",
 parts:S(
  B("9.1 Describe the lesion.",3,{tags:["spot"],key:KF+"sharp irregular necrotic base ulcer, ไม่มี granulation, ดำ (necrotic/black)",ans:"บรรยาย: ตำแหน่ง, ขนาด, ขอบ (<b>punched-out/sharp</b>), พื้นแผล (<b>ดำ necrotic ไม่มี granulation</b>), ผิวรอบ (ซีด มันวาว ขนร่วง), discharge · นิ้วชี้เท้าดำแห้งขอบชัด = <b>dry gangrene</b>",exp:"Wet gangrene: บวม แดง หนอง กลิ่น → ต้องผ่าด่วน",rubric:"ได้",pts:[P("Site and size","site","ตำแหน่ง","size","ขนาด"),CR(P("Black necrotic / no granulation","black","ดำ","necro","gangren")),P("Edge and surrounding skin","edge","ขอบ","punched","surround")]}),
  B("9.2 Diagnosis.",2,{tags:["spot"],key:KF+"Arterial ulcer (PAD)",ans:"<b>Dry gangrene / arterial (ischemic) ulcer</b> จาก <b>peripheral arterial disease — chronic limb-threatening ischemia</b> (atherosclerosis, เบาหวาน; คนหนุ่มสูบบุหรี่ → Buerger disease)",exp:"Dry gangrene ปล่อยให้ demarcate แล้วตัดหลัง revascularization",rubric:"ได้",pts:[CR(P("Arterial ulcer / PAD / CLTI","arterial","pad","ischemi","ขาดเลือด","gangren"))]}),
  B("9.3 Additional examination.",3,{tags:["spot"],key:KF+"ABI · pulse 4 ตำแหน่ง: femoral, popliteal, posterior tibial, dorsalis pedis",ans:"<b>คลำชีพจร</b> femoral, popliteal, posterior tibial, dorsalis pedis ทั้งสองข้าง · <b>ABI</b> · capillary refill, Buerger test, อุณหภูมิ, trophic changes · ตรวจ <b>monofilament</b> (neuropathy ในเบาหวาน) · ฟัง bruit",exp:"ABI <0.9 = PAD · >1.3 = non-compressible (DM, CKD) → toe pressure",rubric:"ได้",pts:[CR(P("Peripheral pulses","pulse","ชีพจร","dorsalis","tibial","popliteal","femoral")),CR(P("ABI","abi","ankle.?brachial")),P("Neuropathy / Buerger test","monofilament","neuro","buerger")]})
 ),
 interp:"Ischemic toe",
 summary:["Arterial ulcer: ปลายนิ้ว ขอบเรียบ ดำ ไม่มี granulation เจ็บ","Pulses + ABI","Dry gangrene → revascularization แล้ว amputation"]}),

/* ===== MEQ 10 ===== */
SA({page:3,orig:"MEQ 10",num:"SA 10",sub:"Imaging film",title:"Short answer — sudden chest pain in a young smoker",kimg:["os76a_km10"],
 stem:`A 20-year-old man who has smoked for 5 years has sudden chest pain. A chest radiograph is shown.<br>1. Describe the film.<br>2. What is the diagnosis?<br>3. How would you treat him?`,
 gray:"MEQ 10. ให้ประวัติผู้ชายอายุ 20 ปี สูบบุหรี่มา 5 ปี เจ็บหน้าอกกระทันหัน ให้ฟิล์ม (pneumothorax) ให้บรรยายฟิล์ม Dx treatment",
 flag:NOIMG,imgAlt:"CXR PA: เห็นเส้น visceral pleura แยกจากผนังทรวงอกด้านหนึ่ง ไม่มีลายปอดนอกเส้น",
 notes:"ไฟล์ Key 76A ลายมือ: 1° spontaneous pneumo · visceral pleural line, no lung marking distal to visceral pleural line · thoracocentesis if tension pneumo · ใส่ ICD เบอร์ 24, 28, 32 @ 4–5th intercostal space ant/mid axillary line",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง — guideline ปัจจุบัน (BTS 2023) ใช้สาย small-bore หรือ needle aspiration ได้ใน primary spontaneous pneumothorax",
 parts:S(
  B("10.1 Describe the film.",2,{tags:["spot"],key:KF+"visceral pleural line, no lung marking distal to visceral pleural line",ans:"<b>Visible visceral pleural line</b> + <b>ไม่มี lung markings</b> นอกเส้น · ระบุขนาด (rim ≥2 cm ที่ระดับ hilum = large ตาม BTS) · ดู tracheal/mediastinal shift (tension), ระดับน้ำ (hydropneumothorax)",exp:"Tension pneumothorax เป็น clinical diagnosis — ไม่ควรรอ film",rubric:"ได้",pts:[CR(P("Visceral pleural line","pleural line","visceral","เส้น")),CR(P("Absent lung markings beyond","no lung mark","absent","ไม่มีลายปอด")),P("Size / mediastinal shift","size","ขนาด","shift","tension")]}),
  B("10.2 Diagnosis.",1,{tags:["spot"],key:KF+"1° spontaneous pneumothorax",ans:"<b>Primary spontaneous pneumothorax</b> (ชายหนุ่มผอมสูงสูบบุหรี่ — apical bleb แตก)",exp:"Secondary spontaneous pneumothorax เกิดในโรคปอดเดิม เช่น COPD",rubric:"ได้",pts:[CR(P("Primary spontaneous pneumothorax","spontaneous","pneumothorax"))]}),
  B("10.3 Treatment.",3,{tags:["spot"],key:KF+"thoracocentesis (needle decompression) if tension · ICD 24/28/32 Fr @ 4–5th ICS ant/mid axillary line",ans:"<b>Tension</b> → needle decompression ทันที แล้ว chest drain · ไม่ tension: เล็ก/ไม่มีอาการ → observe + O₂ · ใหญ่/มีอาการ → <b>needle aspiration หรือ intercostal chest drain</b> ที่ <b>4th–5th ICS anterior ถึง mid-axillary line (safe triangle)</b> · <b>เลิกบุหรี่</b> · ผ่าตัด VATS เมื่อเป็นซ้ำ, air leak &gt;5–7 วัน, อาชีพเสี่ยง",exp:"ห้ามบิน/ดำน้ำจนหายสนิท",rubric:"ได้",pts:[P("Needle decompression if tension","needle","tension","thoracocentesis"),CR(P("Chest drain / aspiration in safe triangle","drain","icd","chest tube","aspiration","safe triangle","5th")),P("Stop smoking / surgery if recurrent","smok","บุหรี่","vats","recur")]})
 ),
 interp:"Primary spontaneous pneumothorax",
 summary:["Visceral pleural line, no markings","Large/symptomatic → aspiration or drain","Recurrence/persistent leak → VATS"]})
);
})();
