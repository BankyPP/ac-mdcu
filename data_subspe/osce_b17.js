(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "OSCE Surgery MDCU 77 Rotate B" → MDCU77 RoB (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO77BQ = AC_77B_Sx_OSCE.pdf (23 หน้า) · หน้า 1 บอกรูปแบบ: OSCE (วนฐาน) 12 ข้อ + MEQ (ดูโจทย์ใน iPad ตามเวลาแล้วเขียนตอบในกระดาษ) 15 ข้อ ข้อละ 4 นาที
   หน้า 1–9 OSCE ข้อ 1–12 · หน้า 10–23 พาร์ท "MEQ" ข้อ 1–15 → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot)
   ไฟล์เฉลย SO77BK = Key_OSCE_77_RoB_Sx.pdf (5 หน้า, by MDCU78) — OSCE ข้อ 3, 4, 5, 6, 7, 8, 10, 11, 12 · MEQ ข้อ 1–10, 12–15 (ครอป os77b_ko และ os77b_km)
   ผู้จดเขียนหลายข้อว่า "คนละรูปกับที่สอบ" — ใส่ไว้ใน notes · OSCE 8, 11 และ MEQ 3, 11, 12 ไม่มีรูปในไฟล์ */
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
const KF="ไฟล์ Key 77B: ";
const Co=o=>Object.assign({set:"MDCU77",ro:"RoB",file:"SO77BQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"hx",sub:"Breast mass",ex:1,title:"History taking — a breast lump for 3 months",
 stem:`A middle-aged woman presents with a breast lump for 3 months.<br>1. Take a history from the simulated patient (a staff member plays the patient).`,
 gray:"OSCE 1) (ซักประวัติ: พี่เจ้าหน้าที่) ผู้หญิงมาด้วยก้อนที่เต้านม 3 เดือน + มีรูปผู้หญิงวัยกลางคนแปะไว้ในกระดาษ",
 sp:"(Claude แต่ง) หญิง 45 ปี คลำได้ก้อนเต้านมซ้าย 3 เดือน โตขึ้นเล็กน้อย ไม่เจ็บ ไม่มีน้ำออกจากหัวนม ไม่มีผิวเปลี่ยน · ประจำเดือนครั้งแรกอายุ 11 ปี ยังมีประจำเดือน มีบุตร 1 คนอายุ 32 ปี ให้นม 2 เดือน ใช้ยาคุมมา 10 ปี · แม่เป็นมะเร็งเต้านมอายุ 50 · ไม่มีปวดกระดูก ไอ น้ำหนักลด",
 flag:"บทผู้ป่วยจำลองทั้งหมด Claude แต่ง (ไฟล์บอกแค่ก้อนที่เต้านม 3 เดือน)",
 notes:"ผู้จดเขียนว่าผู้ป่วยจำลองเป็นพี่เจ้าหน้าที่ และมีรูปผู้หญิงวัยกลางคนแปะในกระดาษ · ไฟล์ Key 77B ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("1.1 Breast lump history.",10,{tags:["hx"],ans:"แนะนำตัว · <b>ก้อน</b>: เริ่มเมื่อไร ขนาด/โตเร็ว เจ็บ สัมพันธ์รอบเดือน · <b>อาการร่วม</b>: nipple discharge (เลือด), หัวนมบุ๋ม, ผิวเปลี่ยน/peau d'orange, ก้อนรักแร้ · <b>red flags metastasis</b>: ปวดกระดูก ไอ เหนื่อย ตัวเหลือง ปวดหัว น้ำหนักลด · <b>ปัจจัยเสี่ยง</b>: อายุ menarche/menopause, จำนวนบุตร อายุคลอดบุตรคนแรก ให้นมบุตร, ฮอร์โมน (OCP/HRT), ฉายแสงหน้าอก, เคยมีโรคเต้านม/biopsy, <b>ประวัติครอบครัวมะเร็งเต้านม/รังไข่</b> · สรุปและวางแผน triple assessment",exp:"Triple assessment: clinical + imaging (mammo/US) + biopsy (core)",rubric:"แบ่งหมวด",
   pts:[H("Opening",10),P("Introduce/consent","แนะนำ","introduce"),H("Lump",30),CR(P("Onset/duration/growth","นาน","growth","โต","duration")),P("Pain / cyclical change","pain","เจ็บ","cycl","รอบเดือน"),P("Nipple discharge / retraction","nipple","หัวนม","discharge"),P("Skin change / axillary lump","skin","ผิว","axill","รักแร้"),H("Metastatic symptoms",15),P("Bone pain / cough / weight loss","bone","กระดูก","cough","ไอ","weight","น้ำหนัก"),H("Risk factors",45),P("Menarche/menopause","menarche","menopause","ประจำเดือน"),P("Parity/first birth/breastfeeding","parity","บุตร","breastfeed","ให้นม"),P("Hormone use","hormone","ocp","hrt","ฮอร์โมน","ยาคุม"),CR(P("Family history","family","ครอบครัว")),P("Previous breast disease/radiation","previous","radiat","biopsy","ฉายแสง")]})
 ),
 interp:"Breast lump history",
 summary:["Risk: อายุ, ครอบครัว/BRCA, estrogen exposure, radiation","Triple assessment","อายุ &lt;30–35 → US ก่อน · ≥35–40 → mammogram + US"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — two vertical mattress sutures on a silicone pad",
 stem:`A silicone suturing pad is provided. Assume gloves are on and local anesthetic has been given. The examiner is observing.<br>1. Place 2 vertical mattress sutures.`,
 gray:"OSCE 2) (เย็บแผล) เย็บ Vertical mattress 2 stitch บนแผ่น Silicone (สมมติใส่ถุงมือ+ฉีดยาชาแล้ว)",
 sp:"แผ่นซิลิโคนมีแผล · needle holder, toothed forceps, กรรไกร, ไหม nylon · สมมติว่าใส่ถุงมือและฉีดยาชาแล้ว · ผู้คุมดู: far–far near–near, eversion, ระยะห่างเท่ากัน, ปมไม่อยู่บนแผล",
 notes:"ไฟล์ Key 77B ช่องนี้ว่าง · สถานีเดียวกันพบใน AC 77A, 77C",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("2.1 Two vertical mattress sutures.",10,{tags:["proc"],ans:"จับ needle holder/forceps ถูกวิธี · <b>Far bite</b>: แทงห่างขอบแผล ~5–8 mm ลึกถึง dermis ล่าง ทะลุอีกฝั่งระยะเท่ากัน · <b>Near bite</b>: ย้อนกลับห่างขอบ ~1–2 mm ตื้น ออกฝั่งแรก · ผูก square/surgical knot ปมไว้ด้านข้าง · ขอบแผล <b>evert</b> · 2 เข็มห่างกันเท่ากัน (~5–10 mm) · ตัดไหมเหลือพอดี · ทิ้งเข็มใน sharps",exp:"Vertical mattress ให้ eversion ดีที่สุด เหมาะผิวหย่อน/ขอบม้วนเข้า",rubric:"แบ่งตามขั้นตอน",
   pts:[H("Technique",70),P("Correct instrument grip","grip","จับ"),CR(P("Far–far bite","far")),CR(P("Near–near bite","near")),P("Equal depth/distance","equal","เท่ากัน","symmetr"),P("Edge eversion","evert"),H("Knot and finish",30),P("Square/surgical knot to the side","knot","square","ปม"),P("Even spacing / cut length / sharps","spacing","ห่าง","cut","sharps")]})
 ),
 interp:"Vertical mattress",
 summary:["Far–far, near–near","Eversion ดีที่สุด","ระวังรัดแน่นเกินจนขาดเลือด"]}),

/* ===== OSCE 3 ===== */
Co({page:2,orig:"3",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — rectal bleeding for 1 month",img:["os77b_o3"],kimg:["os77b_ko3"],
 stem:`A patient has had blood in the stool for 1 month. A simulated patient, a rectal examination model and a drape are provided, with an examiner.<br>1. Perform the physical examination to reach a provisional diagnosis.<br>2. State the additional examination you need (you may ask for equipment).<br>3. The examiner shows a picture of the finding. What is the diagnosis?`,
 gray:"OSCE 3) (ตรวจร่างกาย: มีอาจารย์ 1 คน+ผู้ป่วยจำลอง 1 คน+หุ่น PR+ผ้าคลุม) ผู้ป่วยอุจจาระเป็นเลือด 1 เดือนก่อนมาโรงพยาบาล 3.1 จงแสดงการตรวจร่างกาย เพื่อนำไปสู่การวินิจฉัยเบื้องต้น 3.2 ระบุการตรวจร่างกายเพิ่มเติม นิสิตสามารถบอกอุปกรณ์ที่ต้องการได้ (Proctoscope) 3.3 จงให้การวินิจฉัย (อ.ให้ดูรูปในกระดาษ)",
 sp:"ผู้ป่วยจำลอง + หุ่น PR + ผ้าคลุม · ถ้าตรวจ conjunctiva: ซีดเล็กน้อย · ท้องปกติ · DRE: ไม่มีก้อนในคลำได้ ถุงมือมีเลือดสด · เมื่อขอ <b>proctoscope</b> อาจารย์ให้ดูรูป: ริดสีดวงภายในหลายก้อนยื่นออกมา สีม่วงคล้ำ บวม",
 notes:"รูปในไฟล์: ก้อนริดสีดวงหลายก้อนสีม่วงคล้ำยื่นออกจากทวาร · เฉลยในไฟล์ Key 77B: 3.3 prolapsed thrombosed internal hemorrhoid · AC 77D OSCE 4 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("3.1 Physical examination.",6,{tags:["pe"],ans:"ล้างมือ แนะนำตัว ขออนุญาต มี chaperone · vital signs, <b>pallor</b> · ตรวจท้อง (ก้อน, ตับโต) · ต่อมน้ำเหลืองขาหนีบ · ท่า <b>left lateral</b> คลุมผ้า · <b>inspection perianal</b> (ริดสีดวงภายนอก, fissure, fistula, ให้เบ่งดู prolapse) · <b>DRE</b>: tone, ก้อน, กดเจ็บ, ดูสิ่งที่ติดถุงมือ",exp:"ตรวจครบ general → abdomen → perianal → DRE; อย่าลืม chaperone และให้ผู้ป่วยเบ่งดู prolapse",rubric:"ได้ = general + abdomen + perianal inspection + DRE",
   pts:[P("Consent/chaperone/hand hygiene","consent","chaperone","ล้างมือ","ขออนุญาต"),P("Pallor/vital signs","pallor","ซีด","vital"),P("Abdominal examination","abdomen","ท้อง"),P("Left lateral position","left lateral","sims","ตะแคง"),CR(P("Perianal inspection incl. straining","inspect","ดู","strain","เบ่ง")),CR(P("Digital rectal examination","dre","pr","rectal")),P("Check glove for blood/mucus","glove","ถุงมือ","blood")]}),
  B("3.2 Additional examination.",2,{tags:["pe"],ans:"<b>Proctoscopy (anoscopy)</b> ดู internal hemorrhoid/รอยโรคใน anal canal · ± rigid/flexible sigmoidoscopy; ผู้สูงอายุ/มี red flag → colonoscopy",exp:"Proctoscope ใช้ดู internal hemorrhoid ซึ่งคลำด้วย DRE ไม่ได้ (นุ่ม ยุบได้)",rubric:"ได้ = proctoscope",pts:[CR(P("Proctoscopy","proctoscop","anoscop"))]}),
  B("3.3 Diagnosis.",2,{tags:["pe"],key:KF+"3.3 prolapsed thrombosed internal hemorrhoid",ans:"<b>Prolapsed thrombosed (strangulated) internal hemorrhoids</b> (grade IV)",exp:"รักษา: ผ่าตัด excisional hemorrhoidectomy (หรือประคับประคองถ้าผู้ป่วยไม่พร้อม)",rubric:"ได้ = prolapsed thrombosed internal hemorrhoid",pts:[CR(P("Internal hemorrhoid","hemorrhoid","ริดสีดวง")),P("Prolapsed / thrombosed","prolaps","thrombos","strangulat")]})
 ),
 interp:"Hemorrhoids",
 summary:["Internal grade I–IV","Thrombosed prolapsed = acute → hemorrhoidectomy","อายุ &gt;45–50 + rectal bleeding → colonoscopy"]}),

/* ===== OSCE 4 ===== */
Co({page:3,orig:"4",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and one use of each (a–e)",img:["os77b_o4"],kimg:["os77b_ko4"],
 stem:`Five instruments (a–e) are shown.<br>1. Name each and give one use.`,
 gray:"OSCE 4) (อุปกรณ์) บอกชื่ออุปกรณ์ + การใช้งาน 1 ข้อ A. B. C. D. E.",
 notes:"รูปในไฟล์: a รีแทรกเตอร์สองปลาย b คีมปลายกลมแบน c คีมจับปลายโค้ง d สายพลาสติกมีขีดบอกระยะ (มีข้อความลักษณะสินค้า) e ท่อพลาสติกใสมีด้าม · เฉลยในไฟล์ Key 77B: a Army navy retractor; b Babcock clamp; c Crile forceps; d chest tube; e disposable proctoscope",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 Name and one use (a–e).",10,{tags:["inst"],key:KF+"a. Army navy retractor, retract skin in minor procedure · b. Babcock clamp, hold visceral organs · c. Crile forceps, clamp artery for stop bleeding · d. Chest tube, release pneumothorax · e. Disposable proctoscope, examine anal canal",
   ans:"a <b>Army-navy retractor</b> — retract skin/superficial tissue · b <b>Babcock forceps</b> — atraumatic grasping of bowel/appendix/fallopian tube · c <b>Crile (curved hemostatic) forceps</b> — clamp bleeding vessels · d <b>Chest tube (intercostal drain)</b> — drain pneumothorax/hemothorax · e <b>Disposable proctoscope</b> — examine the anal canal",exp:"Babcock ไม่มีฟัน จับลำไส้ได้; Allis มีฟันเล็ก จับเนื้อเยื่อแข็ง",rubric:"ชื่อ 1 + การใช้ 1 ต่อชิ้น",
   pts:[P("a Army-navy retractor","army","navy"),P("b Babcock","babcock"),P("c Crile/hemostat","crile","hemostat","mosquito","kelly"),P("d Chest tube","chest tube","icd","intercostal"),P("e Proctoscope","proctoscope","anoscope"),G("Uses (≥4)",4,P("retract","retract"),P("hold bowel","bowel","viscera","hold"),P("clamp vessel","clamp","bleed","vessel"),P("drain pneumothorax","pneumothorax","hemothorax"),P("examine anal canal","anal","examine"))]})
 ),
 interp:"Instruments",
 summary:["Atraumatic: Babcock · traumatic: Kocher, Allis","Hemostats: mosquito, Crile, Kelly","Chest tube safe triangle"]}),

/* ===== OSCE 5 ===== */
Co({page:4,orig:"5",topic:"inst",sub:"Tube/Catheter",title:"Device — a red catheter placed at the station",img:["os77b_o5"],kimg:["os77b_ko5"],
 stem:`A red urinary catheter with three ports is placed at the station.<br>1. Name the device and its size. (20 points)<br>2. Explain how it is used. (40 points)<br>3. Give 2 indications. (40 points)`,
 gray:"OSCE 5) มี 3 way Foley catheter สีแดงขนาด 18 Fr. วางไว้ 5.1 บอกชื่อ + ขนาดอุปกรณ์ (20 คะแนน) 5.2 บอกวิธีการใช้งานอุปกรณ์ (40 คะแนน) 5.3 จะระบุข้อบ่งชี้ที่ควรใช้สิ่งนี้ 2 ข้อ (40 คะแนน)",
 notes:"รูปในไฟล์: สายสวนปัสสาวะ 3 ทาง · เฉลยในไฟล์ Key 77B: 1. 3 way foley catheter, 18 French · 2. (ว่าง) · 3. Continuous bladder irrigation, remove clot and debris after urological surgery · AC 77D OSCE 6 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("5.1 Name and size.",2,{tags:["inst"],key:KF+"3 way foley catheter, 18 French",ans:"<b>Three-way Foley catheter, 18 Fr</b>",exp:"Fr = เส้นรอบวงเป็น mm (3 Fr ≈ 1 mm เส้นผ่านศูนย์กลาง)",rubric:"ได้ = 3-way Foley + 18 Fr",pts:[CR(P("Three-way Foley","3.?way","three.?way","foley")),P("18 Fr","18")]}),
  B("5.2 How it is used.",4,{tags:["inst"],key:"(ไฟล์ Key 77B ช่องนี้ว่าง)",ans:"Aseptic urethral catheterization (sterile, lubricant/lidocaine gel) จนปัสสาวะไหล · ใส่น้ำ ~30 mL เข้า balloon port · ต่อ<b>ช่อง inflow</b>กับ normal saline สำหรับ irrigation และ<b>ช่อง outflow</b>ลงถุง · ปรับอัตราให้ปัสสาวะสีชมพูอ่อน ไม่มีลิ่มเลือด · บันทึก input–output (output จริง = ออก − เข้า)",exp:"3 ช่อง: drainage, balloon, irrigation inflow",rubric:"ได้ = 3 ports + continuous irrigation + I/O",pts:[P("Aseptic insertion","aseptic","sterile","lubric"),P("Inflate balloon","balloon","inflate"),CR(P("Irrigation inflow + drainage outflow","irrigat","inflow","outflow","saline")),P("Titrate to clear/light pink, record I/O","titrat","pink","input","output","บันทึก")]}),
  B("5.3 Two indications.",4,{tags:["inst"],key:KF+"Continuous bladder irrigation, remove clot and debris after urological surgery",ans:"<b>Continuous bladder irrigation</b> หลัง <b>TURP/TURBT</b> · <b>gross hematuria with clot retention</b> (ล้างลิ่มเลือด) · radiation/hemorrhagic cystitis",exp:"2-way Foley ใช้ทำ CBI ไม่ได้ เพราะไม่มีช่อง inflow แยก",rubric:"≥2",pts:[G("≥2 indications",2,P("Post-TURP/TURBT","turp","turbt","prostat","post.?op"),P("Clot retention/hematuria","clot","hematuria","ลิ่ม"),P("Continuous bladder irrigation","irrigat"),P("Hemorrhagic cystitis","cystitis"))]})
 ),
 interp:"Three-way Foley",
 summary:["3-way Foley 20–24 Fr สำหรับ CBI","2-way สำหรับระบายปัสสาวะทั่วไป","Clot retention: ล้างด้วย syringe/CBI"]}),

/* ===== OSCE 6 ===== */
Co({page:5,orig:"6",topic:"img",sub:"CT",title:"Head injury — GCS and CT interpretation",img:["os77b_o6"],kimg:["os77b_ko6","os77b_ko6x"],
 stem:`A 30-year-old man had an accident. He opens his eyes only to pressure on the chest (sternal pressure), makes incomprehensible sounds, and shows extension of all limbs with internal rotation of the arms to pain. A radiological study is shown.<br>1. What is the GCS score?<br>2. Name the radiological investigation and give the diagnosis.`,
 gray:"OSCE 6) ผู้ป่วยชาย 30 ปีประสบอุบัติเหตุ ซึมลงต้องพยาบาลใช้มือกดหน้าอกถึงลืมตา พูดไม่รู้เรื่องส่งเสียง อืออา + อาการ ….? ผู้ป่วยมีท่าทางดังรูป จึงได้ส่งตรวจทางรังสีวิทยาได้ผลดังรูป 6.1 จงระบุ GCS score 6.2 จงระบุชื่อการส่งตรวจทางรังสีวิทยา + จงให้การวินิจฉัย",
 flag:"ไฟล์มีรูปแผนภาพ \"Decorticate vs Decerebrate\" แทนรูปท่าทางผู้ป่วย (มีป้ายชื่อ) — เราบรรยายท่าทางเป็น extension ใน stem ตามคีย์ (M2) และเก็บแผนภาพไว้เป็นรูปเฉลย",
 notes:"รูปในไฟล์: (1) แผนภาพ decorticate vs decerebrate (2) CT brain เห็นก้อนเลือดรูปเลนส์ใต้กะโหลก · เฉลยในไฟล์ Key 77B: 1. E2M2V2 · 2. non contrast CT brain, epidural hematoma",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง (ค่า M ขึ้นกับท่าทางในรูปจริง)",
 parts:S(
  B("6.1 GCS.",3,{tags:["img"],key:KF+"E2M2V2",ans:"<b>E2 V2 M2 = 6</b> (E2 ลืมตาต่อความเจ็บ/กด · V2 ส่งเสียงไม่เป็นคำ · M2 extension/decerebrate)",exp:"M3 = abnormal flexion (decorticate)",rubric:"ได้ = E2V2M2",pts:[CR(P("E2","e2")),CR(P("V2","v2")),CR(P("M2","m2")),P("Total 6","= ?6","total 6","6 คะแนน")]}),
  B("6.2 Investigation and diagnosis.",3,{tags:["img"],key:KF+"non contrast CT brain, epidural hematoma",ans:"<b>Non-contrast CT brain</b> · <b>Acute epidural hematoma</b> (biconvex hyperdense) with mass effect",exp:"GCS ≤8 → intubate; EDH + GCS ≤8 + anisocoria → craniotomy ด่วน",rubric:"ได้ = NCCT + EDH",pts:[CR(P("Non-contrast CT brain","ct","non.?contrast")),CR(P("Epidural hematoma","epidural","edh"))]})
 ),
 interp:"GCS + EDH",
 summary:["GCS E4 V5 M6","M: 6 obey, 5 localize, 4 withdraw, 3 decorticate, 2 decerebrate, 1 none","GCS ≤8 = severe TBI → airway"]}),

/* ===== OSCE 7 ===== */
Co({page:6,orig:"7",topic:"img",sub:"Ultrasound",title:"Imaging — epigastric pain after a heavy meal",img:["os77b_o7"],kimg:["os77b_ko7"],
 stem:`A man has had epigastric discomfort for 1 month. One week ago, after eating a grilled-pork buffet, the pain recurred. The investigation is shown.<br>1. Name the investigation.<br>2. Describe the abnormality.<br>3. What is the diagnosis?<br>4. Outline the management.`,
 gray:"OSCE 7) ผู้ป่วยชายปวดจุกแน่นลิ้นปี่ก่อนมา รพ. 1 เดือน แล้ว 1 สัปดาห์ที่แล้วผู้ป่วยไปกินหมูกระทะเลยปวดท้องอีกรอบ เลยมา รพ. ในวันนี้ ได้ส่งการส่งตรวจได้ผลดังภาพ 7.1 ชื่อการส่งตรวจในภาพเรียกว่าอะไร 7.2 บรรยายความผิดปกติที่พบในภาพ 7.3 จงให้การวินิจฉัย 7.4 จงระบุแนวทางการดูแลรักษา",
 notes:"รูปในไฟล์: ultrasound ถุงน้ำดีมีก้อน echogenic มี acoustic shadow · เฉลยในไฟล์ Key 77B: 1. Upper abdominal ultrasound 2. Gallbladder distension, 1 hyperechoic foci with posterior acoustic shadow in gallbladder lumen 3. Symptomatic gallstone 4. Pain control, elective laparoscopic cholecystectomy",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("7.1 Investigation.",1,{tags:["img"],key:KF+"Upper abdominal ultrasound",ans:"<b>Upper abdominal (hepatobiliary) ultrasonography</b>",exp:"US เป็น first-line สำหรับนิ่วถุงน้ำดี (sensitivity ~95%)",rubric:"ได้ = US",pts:[CR(P("Ultrasound","ultrasound","us","usg"))]}),
  B("7.2 Abnormality.",2,{tags:["img"],key:KF+"Gallbladder distension, 1 hyperechoic foci with posterior acoustic shadow in gallbladder lumen",ans:"<b>Hyperechoic focus with posterior acoustic shadowing</b> in the gallbladder lumen (gallstone) · no wall thickening/pericholecystic fluid",exp:"Acoustic shadow ช่วยแยกนิ่วจาก polyp (polyp ไม่มี shadow และไม่ขยับตามท่า)",rubric:"ได้ = hyperechoic + shadow",pts:[CR(P("Hyperechoic focus","hyperecho","echogenic")),CR(P("Posterior acoustic shadow","shadow"))]}),
  B("7.3 Diagnosis.",1,{tags:["img"],key:KF+"Symptomatic gallstone",ans:"<b>Symptomatic cholelithiasis</b> (biliary colic)",exp:"Biliary colic = ปวดใต้ลิ้นปี่/ชายโครงขวาหลังอาหารมัน ไม่มีไข้ ไม่มี Murphy sign ชัด",rubric:"ได้ = symptomatic gallstone",pts:[CR(P("Symptomatic gallstone","gallstone","cholelith","biliary colic","นิ่วในถุงน้ำดี"))]}),
  B("7.4 Management.",2,{tags:["img"],key:KF+"Pain control, elective laparoscopic cholecystectomy",ans:"Analgesia (NSAID) · หลีกเลี่ยงอาหารไขมันสูง · <b>elective laparoscopic cholecystectomy</b>",exp:"Tokyo Guidelines: acute cholecystitis grade I–II → early LC ภายใน 72 ชม.",rubric:"ได้ = elective LC",pts:[P("Analgesia","analges","nsaid","pain control","ยาแก้ปวด"),CR(P("Elective laparoscopic cholecystectomy","cholecystectomy","lc"))]})
 ),
 interp:"Symptomatic gallstones",
 summary:["Asymptomatic gallstone ส่วนใหญ่ไม่ผ่า","Symptomatic → LC","Complications: cholecystitis, CBD stone, pancreatitis"]}),

/* ===== OSCE 8 ===== */
Co({page:7,orig:"8",topic:"suture",sub:"Suture material",title:"Suture materials — repairing a deep knife wound of the arm",kimg:["os77b_ko8"],
 stem:`A patient was slashed on the arm with a knife and is taken to the operating room. Sutures a–f are placed at the station. Fill in the table (letter, trade name, generic name, filament, absorbability):<br>1. Suture for muscle.<br>2. Suture to repair a cut brachial artery.<br>3. Suture to ligate a bleeding vessel.<br>4. Suture for skin closure.`,
 gray:"OSCE 8) (อุปกรณ์) ผู้ป่วยโดนมีดฟันที่แขนมา ให้รูปในกระดาษ + เอาอุปกรณ์ A B C D E F มาวาง กระดาษคำตอบเป็นตารางมี 5 ข้อ (หัวข้อของตารางตาม AC ข้อชนิดไหมเลย) 8.1) เย็บกล้ามเนื้อ ใช้อะไรเย็บ 8.2) Brachial artery ขาดระหว่างการผ่าตัดใช้อะไรเย็บ 8.3) มี Bleeding น่าจะถาม Vessel ligation ใช้อะไรเย็บ 8.4) เย็บปิด Skin ใช้อะไรเย็บ 8.5) …?",
 flag:NOIMG+" (ไหม a–f วางเป็นของจริง ไม่มีรูปในไฟล์) · ข้อย่อย 8.5 ผู้จดจำไม่ได้ — ข้าม",
 notes:"เฉลยในไฟล์ Key 77B: 1 vicryl polyglactin synthetic multifilament absorbable · 2 prolene polypropylene synthetic monofilament non-absorbable · 3 silk silk biologic multifilament non-absorbable · 4 nylon polyamide synthetic monofilament non-absorbable",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("8.1–8.4 Suture table.",8,{tags:["suture"],key:KF+"1 vicryl/polyglactin/synthetic/multifilament/absorbable · 2 prolene/polypropylene/synthetic/monofilament/non-absorbable · 3 silk/silk/biologic/multifilament/non-absorbable · 4 nylon/polyamide/synthetic/monofilament/non-absorbable",
   ans:"(1) Muscle: <b>Vicryl — polyglactin 910</b>, multifilament (braided), absorbable · (2) Brachial artery: <b>Prolene — polypropylene</b>, monofilament, non-absorbable (6-0/7-0) · (3) Vessel ligation: <b>Silk</b>, multifilament, non-absorbable (หรือ Vicryl) · (4) Skin: <b>Nylon — polyamide</b>, monofilament, non-absorbable",exp:"Vascular anastomosis ต้อง monofilament non-absorbable (Prolene) ไม่ก่อ thrombosis และแรงคงที่",rubric:"แถวละ 2",
   pts:[CR(P("Muscle: Vicryl polyglactin","vicryl","polyglactin")),CR(P("Artery: Prolene polypropylene","prolene","polypropylene")),P("Ligation: silk","silk"),P("Skin: nylon","nylon","polyamide","ethilon")]})
 ),
 interp:"Suture selection",
 summary:["Vascular: Prolene","Ligation: silk/Vicryl","Skin: nylon/Prolene","Fascia: PDS/Prolene loop"]}),

/* ===== OSCE 9 ===== */
Co({page:7,orig:"9",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Procedure — WHO alcohol hand rub and dry dressing",
 stem:`The examiner is observing.<br>1. Demonstrate hand hygiene with alcohol-based hand rub according to WHO.<br>2. Perform a dry dressing of the wound on the simulated arm (the dressing set is already opened).`,
 gray:"OSCE 9) (หัตถการ) 9.1 จงแสดงการล้างมือด้วย Alcohol gel ด้วยวิธีที่เหมาะสมตาม WHO 9.2 จงแสดงการทำ Dry dressing จากรูปแผลที่แปะบนแขนจำลอง (เปิด set ทำแผลแล้ว)",
 sp:"แขนจำลองมีรูปแผลเย็บแปะไว้ · set ทำแผลเปิดไว้แล้ว (forceps 2 อัน, สำลี, gauze, ถ้วย) · NSS/povidone · tape · ผู้คุมดู: 6 ขั้นตอน WHO 20–30 วินาที, no-touch technique, ไม่ข้าม sterile field, เช็ดจากในออกนอก, ประเมินแผล",
 notes:"ไฟล์ Key 77B ช่องนี้ว่าง · AC 77D OSCE 2 มี dry dressing เช่นกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("9.1 WHO alcohol hand rub.",4,{tags:["proc"],ans:"กดเจลให้พอเต็มอุ้งมือ · 6 ขั้น: ฝ่ามือถูฝ่ามือ · ฝ่ามือถูหลังมือนิ้วสอด (สลับ) · ฝ่ามือถูฝ่ามือนิ้วสอด · หลังนิ้วถูฝ่ามือ (นิ้วล็อก) · ถูรอบนิ้วโป้ง · ปลายนิ้วถูฝ่ามือหมุน (สลับ) · รวม <b>20–30 วินาที</b> จนแห้ง",exp:"Soap and water 40–60 วินาที เมื่อมือเปื้อนชัด/C. difficile",rubric:"ครบ 6 ขั้น + เวลา",pts:[CR(P("All 6 WHO steps","six","6 ขั้น","ขั้นตอน","step")),P("20–30 seconds until dry","20.?30","second","วินาที","dry","แห้ง")]}),
  B("9.2 Dry dressing.",6,{tags:["proc"],ans:"แนะนำตัว อธิบาย · ถอดแผลเก่า (ถุงมือสะอาด) ดูแผล: บวมแดง หนอง แผลแยก · ทำความสะอาดมือ · <b>no-touch technique</b> ใช้ forceps 2 อัน (หยิบของ sterile 1 อัน แตะแผล 1 อัน) · เช็ดด้วย NSS <b>จากแนวแผลออกด้านนอก</b> ครั้งเดียวต่อสำลี · ซับแห้ง · ปิด gauze แห้ง ติดเทป · ทิ้งขยะติดเชื้อ ล้างมือ บันทึก",exp:"แผลเย็บสะอาดไม่จำเป็นต้องใช้ antiseptic ทุกวัน — NSS พอ",rubric:"แบ่งตามขั้นตอน",pts:[P("Explain and remove old dressing","explain","อธิบาย","remove","ถอด"),P("Assess wound","assess","infection","ประเมิน","แดง"),CR(P("No-touch technique with two forceps","no.?touch","forceps","ปากคีบ")),CR(P("Clean from wound outward, one swab one stroke","outward","ในออกนอก","one stroke","ครั้งเดียว")),P("Dry gauze and tape","gauze","tape","ปิด"),P("Dispose and document","dispose","ทิ้ง","record","บันทึก")]})
 ),
 interp:"Hand hygiene and dressing",
 summary:["WHO 5 moments + 6 steps","Aseptic no-touch technique","เช็ดจากสะอาดไปสกปรก"]}),

/* ===== OSCE 10 ===== */
Co({page:8,orig:"10",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a painful leg with dark bullae",img:["os77b_o10"],kimg:["os77b_ko10"],
 stem:`A man presents with severe leg pain. The photograph is shown.<br>1. What is the provisional diagnosis?<br>2. Outline the management.`,
 gray:"OSCE 10) (Spot Diag) ผู้ป่วยชายปวดขา มาเป็นเวลา…?? ก่อนมาโรงพยาบาล (คล้าย ๆ รูปนี้แต่ไม่มีเลือดแดง ๆ และมี bleb ดำ ๆ เล็กกว่าในรูปนี้) 10.1 จงให้การวินิจฉัยเบื้องต้น 10.2 จงบอกแนวทางการรักษา",
 notes:"รูปในไฟล์: มือและเท้ามีตุ่มน้ำสีดำม่วง ผิวคล้ำ (ผู้จดบอกว่ารูปจริงไม่มีเลือดแดง และ bleb ดำเล็กกว่า) · เฉลยในไฟล์ Key 77B: 1. Necrotizing fasciitis 2. Serial aggressive debridement",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("10.1 Provisional diagnosis.",2,{tags:["img"],key:KF+"Necrotizing fasciitis",ans:"<b>Necrotizing fasciitis</b> (necrotizing soft tissue infection)",exp:"ไทย: Vibrio vulnificus (กินอาหารทะเล, ตับแข็ง), Aeromonas, group A strep, polymicrobial",rubric:"ได้ = NF",pts:[CR(P("Necrotizing fasciitis","necrotizing","nf","เนื้อเน่า"))]}),
  B("10.2 Management.",4,{tags:["img"],key:KF+"Serial aggressive debridement",ans:"Resuscitation (sepsis bundle) · <b>broad-spectrum IV antibiotics</b> (carbapenem/pip-tazo + clindamycin ± vancomycin; ไทยเพิ่ม doxycycline/ceftazidime สำหรับ Vibrio) · <b>emergency radical surgical debridement</b> และ <b>second-look/serial debridement</b> ทุก 24–48 ชม. · ICU · อาจ amputation · ปิดแผลภายหลัง (graft/flap)",exp:"LRINEC ช่วยคัดกรองแต่ไม่ควรรอผล — clinical suspicion → OR",rubric:"ได้ = antibiotics + urgent serial debridement",pts:[P("Resuscitation","resuscit","fluid","sepsis"),CR(P("Broad-spectrum IV antibiotics incl. clindamycin","antibiotic","clindamycin","carbapenem","meropenem")),CR(P("Urgent aggressive serial debridement","debride")),P("Amputation if needed","amputat")]})
 ),
 interp:"Necrotizing fasciitis",
 summary:["Pain out of proportion, crepitus, bullae, skin necrosis, systemic toxicity","Emergency debridement","Finger test: dishwater fluid, ไม่มีเลือดออก"]}),

/* ===== OSCE 11 ===== */
Co({page:8,orig:"11",topic:"inst",sub:"Drain",title:"Fill-in table — operation names and choice of drain",kimg:["os77b_ko11"],
 stem:`Two pictures are shown: (1) an infected inclusion cyst; (2) an open cholecystectomy. For each, give the name of the treatment/operation and choose the drain to be used afterwards from the devices at the station.`,
 gray:"OSCE 11) (เติมคำในตาราง) 11.1 ให้รูป infected inclusion cyst มา - จงบอกชื่อการรักษา - ให้เลือกอุปกรณ์ที่ใช้ drain หลังรักษา มั้ง?? 11.2 ให้รูป Open cholecystectomy มา - ให้บอกชื่อการรักษาในรูปที่ให้มา - ให้เลือกอุปกรณ์ที่ใช้ drain หลังการรักษา 11.3 …??",
 flag:NOIMG+" · ข้อย่อย 11.3 ผู้จดจำไม่ได้ — ข้าม",
 imgAlt:"(1) ก้อนใต้ผิวหนังบวมแดงมีหนองคลั่ง ตรงกลางมีรูเปิดเล็ก (2) ภาพการผ่าตัดเปิดหน้าท้องใต้ชายโครงขวา กำลังเลาะถุงน้ำดีออกจากตับ",
 notes:"เฉลยในไฟล์ Key 77B: 1. Incision and drainage แล้ว excision, penrose drain 2. Open cholecystectomy, Jackson-Pratt drain",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง (open cholecystectomy ส่วนใหญ่ไม่จำเป็นต้องใส่ drain แต่ถ้าใส่ใช้ closed suction)",
 parts:S(
  B("11.1 Infected inclusion cyst.",3,{tags:["inst"],key:KF+"Incision and drainage แล้ว excision, penrose drain",ans:"<b>Incision and drainage</b> (แล้วนัด excision เมื่อสงบ) · drain: <b>Penrose drain</b> (passive) หรือ packing ด้วย gauze",exp:"Infected cyst: ระบายหนองก่อน แล้วตัด cyst wall ออกทั้งหมดเมื่อการอักเสบสงบเพื่อป้องกันการเป็นซ้ำ",rubric:"ได้ = I&amp;D + Penrose",pts:[CR(P("Incision and drainage","incision","i&d","i ?& ?d","drainage")),CR(P("Penrose drain","penrose","corrugated","packing"))]}),
  B("11.2 Open cholecystectomy.",3,{tags:["inst"],key:KF+"Open cholecystectomy, Jackson-Pratt drain",ans:"<b>Open cholecystectomy</b> · drain (ถ้าใส่): <b>closed suction drain — Jackson-Pratt</b> ที่ subhepatic space",exp:"Drain หลัง cholecystectomy ไม่จำเป็นเป็น routine (ใส่เมื่อสงสัย bile leak/เลือดออก)",rubric:"ได้ = open cholecystectomy + JP",pts:[CR(P("Open cholecystectomy","cholecystectomy")),CR(P("Jackson-Pratt drain","jackson","jp","closed suction"))]})
 ),
 interp:"Drains",
 summary:["Passive: Penrose, corrugated","Active closed suction: JP, Redivac, Blake","Drain ไม่แทนการผ่าตัดที่ดี"]}),

/* ===== OSCE 12 ===== */
Co({page:9,orig:"12",topic:"img",sub:"CXR",title:"Radiograph — abdominal pain for 4 hours",img:["os77b_o12"],kimg:["os77b_ko12"],
 stem:`A patient has had abdominal pain for 4 hours. The radiograph is shown.<br>1. What is the diagnosis?<br>2. Give 2 common causes.<br>3. What important history would distinguish these 2 causes?`,
 gray:"OSCE 12) ผู้ป่วยปวดท้องมา 4 ชั่วโมงก่อนมาโรงพยาบาล ทำ Xray ได้ผลดังภาพ (คนละรูปกับที่สอบแต่ใกล้เคียง) 12.1 จงให้การวินิจฉัย 12.2 จงระบุสาเหตุที่พบได้บ่อย 2 สาเหตุ 12.3 จงระบุการซักประวัติที่สำคัญ เพื่อวินิจฉัยแยกโรคใน 2 สาเหตุที่ระบุมา",
 notes:"รูปในไฟล์: CXR PA + lateral (ผู้จดบอกว่าคนละรูปแต่ใกล้เคียง) เห็นลมใต้กะบังลม · เฉลยในไฟล์ Key 77B: 1. Pneumoperitoneum 2. Gastric perforation, bowel perforation 3. กินยาแก้ปวด ยาหม้อ ยาต้มอยู่ไหม, เคยปวดแสบกลางท้องเป็น ๆ หาย ๆ ตอนหลังอาหารไหม",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("12.1 Diagnosis.",2,{tags:["img"],key:KF+"Pneumoperitoneum",ans:"<b>Pneumoperitoneum</b> (free air under the diaphragm) — hollow viscus perforation",exp:"ท่าที่ดีที่สุดคือ upright CXR; ถ้านั่งไม่ได้ใช้ left lateral decubitus",rubric:"ได้ = pneumoperitoneum",pts:[CR(P("Pneumoperitoneum / free air","pneumoperitoneum","free air","ลมใต้"))]}),
  B("12.2 Two common causes.",2,{tags:["img"],key:KF+"Gastric perforation, bowel perforation",ans:"<b>Perforated peptic ulcer</b> (gastric/duodenal — พบบ่อยที่สุด) · <b>colonic perforation</b> (diverticulitis, มะเร็ง) · perforated appendicitis พบลมน้อย",exp:"Perforated peptic ulcer เป็นสาเหตุที่พบบ่อยที่สุดของ pneumoperitoneum ที่ไม่ได้เกิดจากการผ่าตัด",rubric:"≥2",pts:[G("≥2 causes",2,P("Peptic ulcer perforation","peptic","ulcer","gastric","duodenal","กระเพาะ"),P("Colonic/bowel perforation","colon","bowel","diverticul","ลำไส้"),P("Malignancy perforation","cancer","มะเร็ง","malignan"))]}),
  B("12.3 Distinguishing history.",2,{tags:["img"],key:KF+"กินยาแก้ปวด ยาหม้อ ยาต้มอยู่ไหม, เคยปวดแสบกลางท้องเป็น ๆ หาย ๆ ตอนหลังอาหารไหม",ans:"PU: <b>NSAID/steroid/ยาหม้อ ยาลูกกลอน</b>, ปวดแสบลิ้นปี่สัมพันธ์มื้ออาหาร (dyspepsia เดิม), H. pylori, สุรา บุหรี่ · Colonic: ท้องผูก ถ่ายเปลี่ยนนิสัย ถ่ายเป็นเลือด น้ำหนักลด (มะเร็ง), ปวดท้องซ้ายล่างเดิม (diverticulitis), ส่องกล้องเมื่อเร็ว ๆ นี้",exp:"NSAID เป็นปัจจัยเสี่ยงหลักของ PU perforation ร่วมกับ H. pylori",rubric:"ได้ = NSAID/dyspepsia + bowel symptoms",pts:[CR(P("NSAID/herbal medicine use","nsaid","ยาแก้ปวด","ยาหม้อ","ยาต้ม","steroid","ลูกกลอน")),P("Previous dyspepsia/epigastric pain","dyspeps","ลิ้นปี่","แสบ","epigastr"),P("Bowel habit change / LLQ pain","bowel habit","ท้องผูก","ถ่าย","diverticul","llq")]})
 ),
 interp:"Pneumoperitoneum",
 summary:["Upright CXR เห็นลม ~1–2 mL","PPU: resuscitate, NG, PPI, antibiotics, Graham patch","Free air ไม่จำเป็นในทุกการทะลุ"]}),

/* ===== MEQ 1 ===== */
SA({page:10,orig:"MEQ 1",num:"SA 1",sub:"Other spot",title:"Short answer — periumbilical pain with fever and leukocytosis",img:["os77b_m1"],kimg:["os77b_km1"],
 stem:`A patient has periumbilical pain for several hours that has moved, as marked on the diagram. BT 38 °C, HR 80/min, BP normal. WBC 15,000/mm<sup>3</sup> (N 80%, L 16%).<br>1. What is the diagnosis?<br>2. Give all the reasons supporting the diagnosis.<br>3. Outline the management.`,
 gray:"MEQ 1) ให้ว่าปวดท้องกลางสะดือ … ชั่วโมง แล้วมาโรงพยาบาล ตรวจร่างกายดังรูป (ตรง McBurney point มีสัญลักษณ์ XXX มาให้) ให้ Vital signs มา BT 38 C, HR 80 bpm, BP ปกติ ให้ CBC มา WBC 15000 cell/mm3 (N 80%, L 16%) 1.1 จงให้การวินิจฉัย 1.2 ระบุเหตุผลที่ประกอบการวินิจฉัยทั้งหมด 1.3 จงระบุแนวทางการดูแลรักษา",
 notes:"รูปในไฟล์: แผนภาพหน้าท้องมีจุดแดงที่ McBurney point (มีป้ายชื่อ) · เฉลยในไฟล์ Key 77B: 1. Acute appendicitis 2. ปวดท้องย้ายที่จาก periumbilical เป็น RLQ (McBurney point), มีไข้, WBC &gt; 15000, neutrophil สูง ซึ่งเข้ากับ alvarado score 3. NPO, 5% DN/2 1000 mL IV rate 80 mL/hr, set OR open appendectomy, เตรียม ceftriaxone 2 g IV, metronidazole 500 mg IV ไป OR",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("1.1 Diagnosis.",1,{tags:["spot"],key:KF+"Acute appendicitis",ans:"<b>Acute appendicitis</b>",exp:"อาการเริ่มปวดรอบสะดือ (visceral pain, T10) แล้วย้ายไป RLQ เมื่อ parietal peritoneum อักเสบ",rubric:"ได้ = acute appendicitis",pts:[CR(P("Acute appendicitis","appendicitis","ไส้ติ่ง"))]}),
  B("1.2 Supporting reasons.",3,{tags:["spot"],key:KF+"ปวดท้องย้ายที่จาก periumbilical เป็น RLQ (McBurney point), มีไข้, WBC &gt; 15000, neutrophil สูง ซึ่งเข้ากับ alvarado score",ans:"<b>Migration</b> of pain periumbilical → RLQ · <b>tenderness at McBurney point</b> · <b>fever</b> 38 °C · <b>leukocytosis</b> 15,000 with <b>neutrophilia</b> 80% → Alvarado score สูง",exp:"Alvarado (MANTRELS): Migration 1, Anorexia 1, Nausea 1, Tenderness RLQ 2, Rebound 1, Elevated temp 1, Leukocytosis 2, Shift 1",rubric:"≥3",pts:[G("≥3 reasons",3,P("Migratory pain","migrat","ย้าย"),P("McBurney tenderness","mcburney","rlq"),P("Fever","fever","ไข้","38"),P("Leukocytosis","leukocyt","wbc","15"),P("Neutrophilia","neutrophil","shift"))]}),
  B("1.3 Management.",3,{tags:["spot"],key:KF+"NPO, 5% DN/2 1000 mL IV rate 80 mL/hr, set OR open appendectomy, เตรียม ceftriaxone 2 g IV, metronidazole 500 mg IV ไป OR",ans:"<b>NPO</b>, IV fluid, analgesia · <b>prophylactic IV antibiotics</b> (ceftriaxone + metronidazole หรือ cefoxitin) · <b>appendectomy</b> (laparoscopic หรือ open)",exp:"Non-operative (antibiotics) เป็นทางเลือกใน uncomplicated appendicitis บางราย (CODA)",rubric:"ได้ = NPO/IV + antibiotics + appendectomy",pts:[P("NPO and IV fluid","npo","iv","fluid","งดน้ำ"),P("IV antibiotics","antibiotic","ceftriaxone","metronidazole","cefoxitin"),CR(P("Appendectomy","appendectomy"))]})
 ),
 interp:"Acute appendicitis",
 summary:["Alvarado ≥7 likely","US ในเด็ก/หญิงตั้งครรภ์, CT ในผู้ใหญ่ที่ไม่ชัด","Appendectomy ± antibiotics"]}),

/* ===== MEQ 2 ===== */
SA({page:11,orig:"MEQ 2",num:"SA 2",sub:"Imaging film",title:"Spot — a contrast study in a patient with dysphagia",img:["os77b_m2"],kimg:["os77b_km2"],
 stem:`A patient with dysphagia has the radiological study shown.<br>1. What is the provisional diagnosis?<br>2. Name the investigation and describe the findings.<br>3. Explain the pathogenesis.`,
 gray:"MEQ 2) ผู้ป่วยกลืนลำบาก ให้รูป Radiologic finding มา 2.1 ระบุการวินิจฉัยเบื้องต้น 2.2 จงบอกชื่อการส่งตรวจ + บรรยายผลการตรวจนี้ 2.3 จงบอกพยาธิกำเนิดของโรค",
 notes:"รูปในไฟล์: barium swallow หลอดอาหารโป่ง ปลายเรียวแคบ · เฉลยในไฟล์ Key 77B: 1. Achalasia 2. Barium swallowing, distal esophagus dilatation with bird beak appearance under dome diaphragm 3. Loss of inhibitor neuron in myenteric plexus, failure of LES to relax, impaired peristalsis",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("2.1 Diagnosis.",1,{tags:["spot"],key:KF+"Achalasia",ans:"<b>Achalasia</b>",exp:"อาการกลืนลำบากทั้งของเหลวและของแข็งตั้งแต่แรก ต่างจาก mechanical obstruction ที่ลำบากกับของแข็งก่อน",rubric:"ได้ = achalasia",pts:[CR(P("Achalasia","achalasia"))]}),
  B("2.2 Investigation and findings.",2,{tags:["spot"],key:KF+"Barium swallowing, distal esophagus dilatation with bird beak appearance under dome diaphragm",ans:"<b>Barium swallow (esophagogram)</b>: dilated esophagus with smooth tapering at the GE junction — <b>bird's beak appearance</b>, air-fluid level, delayed emptying",exp:"Pseudoachalasia (มะเร็ง cardia) ต้อง EGD แยก",rubric:"ได้ = barium swallow + bird's beak",pts:[CR(P("Barium swallow","barium","esophagogram")),CR(P("Bird's beak / dilated esophagus","bird","beak","dilat","โป่ง"))]}),
  B("2.3 Pathogenesis.",2,{tags:["spot"],key:KF+"Loss of inhibitor neuron in myenteric plexus, failure of LES to relax, impaired peristalsis",ans:"<b>Loss of inhibitory (NO/VIP) neurons in the myenteric (Auerbach) plexus</b> → <b>failure of LES relaxation</b> + <b>aperistalsis</b> ของหลอดอาหาร",exp:"Chagas disease (T. cruzi) ทำให้ secondary achalasia",rubric:"ได้ = myenteric plexus + LES ไม่คลาย",pts:[CR(P("Loss of inhibitory neurons in myenteric plexus","myenteric","auerbach","inhibitory","ganglion")),CR(P("Failure of LES relaxation","les","relax","sphincter")),P("Aperistalsis","peristal")]})
 ),
 interp:"Achalasia",
 summary:["Manometry = gold standard","Tx: POEM, Heller myotomy + Dor, pneumatic dilation, Botox","เสี่ยง SCC หลอดอาหาร"]}),

/* ===== MEQ 3 ===== */
SA({page:12,orig:"MEQ 3",num:"SA 3",sub:"Vascular/Ulcer",title:"Short answer — an acutely ischemic left leg",kimg:["os77b_km3"],
 stem:`A patient presents with an acutely painful, pale left leg for several hours (a photograph of the leg is provided). Pulse examination:<br>Left: femoral 2+, popliteal 0, posterior tibial 0, dorsalis pedis 0.<br>Right: all pulses 2+.<br>1. What is the provisional diagnosis?<br>2. What additional examinations and investigations would you request?<br>3. Outline the management.`,
 gray:"MEQ 3) ให้รูปขามา … ชั่วโมง + ให้ตารางการตรวจร่างกายมา: - Left: Femoral pulse 2+ ที่เหลือ 0 - Right: 2+ All 3.1 การวินิจฉัยเบื้องต้น 3.2 จงระบุการตรวจร่างกายและการส่งตรวจเพิ่มเติม 3.3 จงระบุแนวทางการดูแลรักษา",
 flag:NOIMG+" · อาการเฉียบพลัน ปวด ซีด Claude เติมตามแนวคำตอบในคีย์ (embolectomy)",
 imgAlt:"ขาซ้ายซีดขาว เย็น ปลายเท้าเริ่มม่วงลาย ขาขวาสีปกติ",
 notes:"เฉลยในไฟล์ Key 77B: 1. arterial occlusion at left superficial femoral artery 2. PE: Doppler ultrasound, ankle brachial index; Investigation: CT angiogram 3. Embolectomy with Fogarty catheter",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง — ตำแหน่งอุดตันน่าจะอยู่ระดับ femoral bifurcation/SFA (femoral คลำได้ popliteal หาย)",
 parts:S(
  B("3.1 Provisional diagnosis.",2,{tags:["spot"],key:KF+"arterial occlusion at left superficial femoral artery",ans:"<b>Acute limb ischemia of the left leg</b> from <b>arterial occlusion at the left femoral bifurcation/superficial femoral artery</b> (embolus หรือ thrombosis)",exp:"6P: pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia",rubric:"ได้ = acute arterial occlusion + level",pts:[CR(P("Acute arterial occlusion / limb ischemia","occlusion","ischemi","embol","thromb","ขาดเลือด")),P("Superficial femoral / femoral bifurcation level","superficial femoral","sfa","femoral bifurcation")]}),
  B("3.2 Examination and investigations.",3,{tags:["spot"],key:KF+"PE: Doppler ultrasound, ankle brachial index · Investigation: CT angiogram",ans:"PE: <b>handheld Doppler</b> (arterial/venous signal), <b>sensation & motor</b> (Rutherford classification), capillary refill, ABI · หา<b>แหล่ง emboli</b>: ชีพจรไม่สม่ำเสมอ (AF), murmur, AAA · Ix: <b>CT angiography</b> (ถ้าไม่เสียเวลา), ECG (AF), echocardiogram, CBC, coagulation, CK, creatinine",exp:"Rutherford I viable, IIa marginally threatened, IIb immediately threatened, III irreversible",rubric:"ได้ = Doppler/neuro + CTA + ECG",pts:[P("Doppler / ABI","doppler","abi"),P("Sensory and motor assessment","sensation","motor","rutherford","ความรู้สึก"),P("Look for embolic source (AF)","af","atrial","ecg","embol","irregular"),CR(P("CT angiography","cta","ct angio","angiogra"))]}),
  B("3.3 Management.",3,{tags:["spot"],key:KF+"Embolectomy with Fogarty catheter",ans:"<b>Unfractionated heparin IV bolus</b> ทันที · analgesia · <b>urgent revascularization</b>: <b>Fogarty balloon embolectomy</b> (embolus) หรือ catheter-directed thrombolysis/bypass (thrombosis) · ดู fasciotomy (compartment syndrome หลัง reperfusion) · แก้ต้นเหตุ (anticoagulate AF)",exp:"Irreversible ischemia (Rutherford III) → amputation",rubric:"ได้ = heparin + embolectomy",pts:[CR(P("IV heparin","heparin","anticoag")),CR(P("Fogarty embolectomy / revascularization","fogarty","embolectomy","revascular","thrombolysis")),P("Fasciotomy / reperfusion monitoring","fasciotomy","compartment","reperfusion")]})
 ),
 interp:"Acute limb ischemia",
 summary:["Embolus: AF, onset ทันที, อีกข้างปกติ","Thrombosis: มี PAD เดิม, claudication","Heparin → embolectomy","Reperfusion: compartment syndrome, hyperkalemia, myoglobinuria"]}),

/* ===== MEQ 4 ===== */
SA({page:13,orig:"MEQ 4",num:"SA 4",sub:"Pediatric surgery",title:"Spot — newborn with bilious vomiting after the first feed",img:["os77b_m4"],kimg:["os77b_km4"],
 stem:`A newborn's mother had polyhydramnios. After the first feed the baby has bilious vomiting. The radiograph is shown.<br>1. What is the diagnosis?<br>2. Give the supporting reasons.<br>3. What is the definitive treatment?<br>4. What is the most accepted pathogenesis?`,
 gray:"MEQ 4) ให้ภาพนี้มากับประวัติมารดามี Polyhydramnios ระหว่างตั้งครรภ์ + หลังคลอดทารกมี Billous vomitting หลัง feed นมมื้อแรก 4.1 จงให้การวินิจฉัย 4.2 บอกเหตุผลประกอบการวินิจฉัย 4.3 Definite treatment คืออะไร 4.4 พยาธิกำเนิดของโรคที่ได้รับการเชื่อถือมากที่สุดคืออะไร",
 notes:"รูปในไฟล์: ภาพรังสีทารกมีกระเพาะโป่งและฟองลม duodenum (double bubble) ไม่มีลมส่วนปลาย · เฉลยในไฟล์ Key 77B: 1. Duodenal atresia 2. Double bubble sign on CXR 3. Diamond shape duodeno-duodenostomy 4. Failure to recanalization · AC 77D MEQ 10 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 Diagnosis.",1,{tags:["spot"],key:KF+"Duodenal atresia",ans:"<b>Duodenal atresia</b>",exp:"สัมพันธ์กับ Down syndrome, annular pancreas, malrotation",rubric:"ได้",pts:[CR(P("Duodenal atresia","duodenal atresia"))]}),
  B("4.2 Reasons.",2,{tags:["spot"],key:KF+"Double bubble sign on CXR",ans:"<b>Double bubble</b> without distal gas · maternal <b>polyhydramnios</b> · <b>bilious vomiting</b> after the first feed (obstruction distal to the ampulla)",exp:"Atresia อยู่ distal ต่อ ampulla ~85% จึงอาเจียนเป็นน้ำดี",rubric:"≥2",pts:[CR(P("Double bubble, no distal gas","double bubble","no distal","bubble")),P("Polyhydramnios","polyhydramnios","น้ำคร่ำ"),P("Early bilious vomiting","bilious","น้ำดี")]}),
  B("4.3 Definitive treatment.",2,{tags:["spot"],key:KF+"Diamond shape duodeno-duodenostomy",ans:"<b>Diamond-shaped (Kimura) duodenoduodenostomy</b> หลัง NG decompression, IV fluid, ตรวจหัวใจ/Down syndrome · ต้องแยก malrotation with volvulus ก่อน",exp:"Kimura diamond-shaped anastomosis ช่วยให้ anastomosis เปิดกว้างและอาหารผ่านได้เร็ว",rubric:"ได้",pts:[CR(P("Duodenoduodenostomy","duodenoduodenostomy","duodeno.?duodenostomy","kimura"))]}),
  B("4.4 Pathogenesis.",1,{tags:["spot"],key:KF+"Failure to recanalization",ans:"<b>Failure of recanalization</b> of the duodenal lumen (solid-cord stage, สัปดาห์ที่ 8–10)",exp:"Jejunoileal atresia = vascular accident ในครรภ์",rubric:"ได้",pts:[CR(P("Failure of recanalization","recanaliz"))]})
 ),
 interp:"Duodenal atresia",
 summary:["Double bubble · Down syndrome ~30%","Duodenoduodenostomy","ต่างจาก jejunal atresia (vascular accident)"]}),

/* ===== MEQ 5 ===== */
SA({page:14,orig:"MEQ 5",num:"SA 5",sub:"Plastic/Skin/Burn",title:"Short answer — reconstructive ladder after debridement",img:["os77b_m5"],kimg:["os77b_km5"],
 stem:`1. List the steps of the reconstructive ladder.<br>2. A patient with necrotizing fasciitis of the leg and sole has undergone debridement, as shown. According to the reconstructive ladder, how should the wound be reconstructed?`,
 gray:"MEQ 5) 5.1 Stepladder of reconstruction มีอะไรบ้าง 5.2 ผู้ป่วยเป็น Necrotizing fasciitis ที่ขาและฝ่าเท้า ได้ทำ debridement ดังรูป ควรจะทำยังไงตาม Stepladder of renconstruction (คนละรูปกับข้อสอบนะะ)",
 notes:"รูปในไฟล์: ขาและเท้าหลัง debridement เห็นแผลกว้างฐานเป็น granulation สีแดง (ผู้จดบอกว่าคนละรูปกับข้อสอบ) · เฉลยในไฟล์ Key 77B: 1. Healing by secondary intention, primary closure, skin graft, local flap, regional flap, free flap 2. Split thickness skin graft · AC 77C MEQ 4 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("5.1 Reconstructive ladder.",3,{tags:["spot"],key:KF+"Healing by secondary intention, primary closure, skin graft, local flap, regional flap, free flap",ans:"Secondary intention → primary closure (± delayed primary) → <b>skin graft</b> (split/full thickness) → tissue expansion → <b>local flap</b> → <b>regional/distant flap</b> → <b>free flap</b>",exp:"Reconstructive elevator: เลือกขั้นที่ดีที่สุดได้เลยไม่ต้องไล่ทีละขั้น",rubric:"ครบลำดับหลัก",pts:[P("Secondary intention","secondary","ปล่อยหายเอง"),P("Primary closure","primary"),CR(P("Skin graft","graft")),P("Local flap","local flap","local"),P("Regional flap","regional","distant"),P("Free flap","free flap","free")]}),
  B("5.2 Reconstruction for this wound.",2,{tags:["spot"],key:KF+"Split thickness skin graft",ans:"แผลกว้างฐาน granulation ดี ไม่เห็นกระดูก/เอ็นเปลือย → <b>split-thickness skin graft</b> (± NPWT เตรียมแผล)",exp:"เห็นกระดูก/เอ็น/ข้อ → flap",rubric:"ได้ = STSG",pts:[CR(P("Split-thickness skin graft","split","stsg"))]})
 ),
 interp:"Reconstructive ladder",
 summary:["Graft ต้องการ vascular bed (granulation)","Exposed bone without periosteum/tendon without paratenon → flap","NPWT ช่วยเตรียมแผล"]}),

/* ===== MEQ 6 ===== */
SA({page:15,orig:"MEQ 6",num:"SA 6",sub:"Imaging film",title:"Spot — endoscopic cholangiopancreatography image",img:["os77b_m6"],kimg:["os77b_km6"],
 stem:`The image of a biliary procedure is shown (in the real exam, arrows A–D pointed to structures).<br>1. Give the full name of this investigation.<br>2. Identify the cystic duct, common hepatic duct, pancreatic duct and common bile duct on the image.<br>3. Give 2 indications.`,
 gray:"MEQ 6) 6.1 การส่งตรวจในภาพมีชื่อเต็มว่าอะไร 6.2 ระบุชื่อโครงสร้าง A B C D ที่ชี้ดังรูป (โจทย์จริงมีลูกศรนะ) A = Cystic duct B = Common hepatic duct C = Pancreatic duct D = Common bile duct 6.3 ข้อบ่งชี้ของการส่งตรวจ 2 ข้อ",
 flag:"รูปในไฟล์ไม่มีลูกศร A–D — เราปรับข้อย่อย 2 เป็นการชี้ตำแหน่งโครงสร้างทั้ง 4 (ผู้จดให้คำตอบ A–D มา)",
 notes:"รูปในไฟล์: ภาพ ERCP เห็นกล้อง duodenoscope และท่อน้ำดี/ท่อตับอ่อนมีสารทึบรังสี · ผู้จดบอกคำตอบ A cystic duct, B common hepatic duct, C pancreatic duct, D common bile duct · เฉลยในไฟล์ Key 77B: 1. Endoscopic retrograde cholangiopancreatography 2. (ว่าง) 3. Diagnosis and treatment of cholangitis, stent placement",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("6.1 Full name.",1,{tags:["spot"],key:KF+"Endoscopic retrograde cholangiopancreatography",ans:"<b>Endoscopic retrograde cholangiopancreatography (ERCP)</b>",exp:"Retrograde = ฉีดสารทึบรังสีย้อนจาก ampulla ผ่าน duodenoscope (side-viewing)",rubric:"ได้",pts:[CR(P("Endoscopic retrograde cholangiopancreatography","endoscopic retrograde","ercp"))]}),
  B("6.2 Identify structures.",4,{tags:["spot"],key:"ผู้จด: A = Cystic duct · B = Common hepatic duct · C = Pancreatic duct · D = Common bile duct",ans:"<b>Cystic duct</b>: ท่อเล็กคดเคี้ยวไปถุงน้ำดี · <b>Common hepatic duct</b>: เหนือจุดรวม cystic duct · <b>Common bile duct</b>: ใต้จุดรวม ลงสู่ ampulla · <b>Pancreatic duct</b>: วิ่งในแนวขวางไปทางตับอ่อน (ซ้าย)",exp:"Cystic duct รวมกับ CHD เป็น CBD; pancreatic duct รวมกับ CBD ที่ ampulla of Vater",rubric:"ชิ้นละ 1",pts:[P("Cystic duct","cystic"),P("Common hepatic duct","common hepatic","chd"),P("Common bile duct","common bile","cbd"),P("Pancreatic duct","pancreatic","wirsung")]}),
  B("6.3 Two indications.",2,{tags:["spot"],key:KF+"Diagnosis and treatment of cholangitis, stent placement",ans:"Therapeutic: <b>CBD stone extraction</b>, <b>acute cholangitis drainage</b>, <b>stent for malignant biliary obstruction</b>, bile leak · (diagnostic ERCP ถูกแทนด้วย MRCP/EUS)",exp:"ภาวะแทรกซ้อน: post-ERCP pancreatitis (~3–5%), bleeding, perforation, cholangitis",rubric:"≥2",pts:[G("≥2",2,P("CBD stone","stone","นิ่ว"),P("Cholangitis","cholangitis"),P("Stent for obstruction/malignancy","stent","malignan","obstruct"),P("Bile leak","leak"))]})
 ),
 interp:"ERCP",
 summary:["ERCP ปัจจุบันเป็น therapeutic","Post-ERCP pancreatitis: rectal indomethacin ป้องกัน","MRCP สำหรับวินิจฉัย"]}),

/* ===== MEQ 7 ===== */
SA({page:16,orig:"MEQ 7",num:"SA 7",sub:"Imaging film",title:"Spot — chest pain in a smoker",img:["os77b_m7"],kimg:["os77b_km7"],
 stem:`A man who smokes 20 pack-years has chest pain. The chest radiograph is shown.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"MEQ 7) ชายสูบบุหรี่ 20 pack year เจ็บหน้าอก ทำ Xray ได้ผลดังรูป 7.1 จงให้การวินิจฉัย 7.2 จงระบุแนวทางการดูแลรักษา",
 notes:"รูปในไฟล์: CXR เห็นปอดยุบ ขอบ visceral pleura ไม่มีลายปอดด้านนอก · เฉลยในไฟล์ Key 77B: 1. Right pneumothorax 2. Needle aspiration, ICD placement",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง (ข้างของรอยโรคยึดตามคีย์)",
 parts:S(
  B("7.1 Diagnosis.",2,{tags:["spot"],key:KF+"Right pneumothorax",ans:"<b>Spontaneous pneumothorax</b> (right ตามคีย์) — ผู้สูบบุหรี่ 20 pack-year อาจเป็น secondary (emphysema/bulla)",exp:"Primary spontaneous PTX พบในชายผอมสูง; ผู้สูบบุหรี่หรือมีโรคปอดเป็น secondary",rubric:"ได้ = pneumothorax",pts:[CR(P("Pneumothorax","pneumothorax","ptx"))]}),
  B("7.2 Management.",3,{tags:["spot"],key:KF+"Needle aspiration, ICD placement",ans:"O<sub>2</sub> · <b>needle aspiration</b> (primary ที่มีอาการ) หรือ <b>chest drain (ICD)</b> ที่ safe triangle (secondary/ใหญ่/aspiration ล้มเหลว) · เลิกบุหรี่ · VATS bullectomy + pleurodesis เมื่อเป็นซ้ำ/air leak นาน",exp:"BTS: primary + มีอาการ → needle aspiration ก่อน; secondary → chest drain",rubric:"ได้ = aspiration/ICD",pts:[P("Needle aspiration","aspiration"),CR(P("Chest drain","icd","chest drain","chest tube")),P("Stop smoking / VATS for recurrence","smok","vats","pleurodesis")]})
 ),
 interp:"Pneumothorax",
 summary:["Secondary PTX → chest drain + admit","Tension → needle decompression","Recurrence → VATS"]}),

/* ===== MEQ 8 ===== */
SA({page:17,orig:"MEQ 8",num:"SA 8",sub:"Pediatric surgery",title:"Spot — newborn without an anal opening",img:["os77b_m8a","os77b_m8b"],kimg:["os77b_km8"],
 stem:`A newborn has no anal opening. The perineum and a radiograph are shown.<br>1. What is the diagnosis?<br>2. What is the name of this radiographic view?<br>3. What is the definitive treatment?`,
 gray:"MEQ 8) เด็กไม่มีรูก้น เลยทำ X-ray 8.1 จงให้การวินิจฉัย 8.2 ชื่อการถ่าย film มีชื่อว่าอะไร 8.3 จงบอก Definite treatment",
 notes:"รูปในไฟล์: (1) ภาพรังสีท่า lateral ทารกคว่ำ มีเครื่องหมายโลหะที่ผิวหนังบริเวณทวาร (2) ฝีเย็บทารกไม่มีรูทวาร · เฉลยในไฟล์ Key 77B: 1. Anorectal malformation (no fistula type) 2. Prone lateral cross table film 3. Posterior sagittal anorectoplasty · AC 77D MEQ 11 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง (การผ่าตัดขั้นตอนขึ้นกับระยะ rectum–skin: &lt;1 cm primary PSARP, &gt;1 cm colostomy ก่อน)",
 parts:S(
  B("8.1 Diagnosis.",1,{tags:["spot"],key:KF+"Anorectal malformation (no fistula type)",ans:"<b>Anorectal malformation (imperforate anus) without fistula</b>",exp:"ไม่มี fistula พบบ่อยใน Down syndrome",rubric:"ได้ = ARM",pts:[CR(P("Anorectal malformation / imperforate anus","anorectal","imperforate","arm"))]}),
  B("8.2 Radiographic view.",1,{tags:["spot"],key:KF+"Prone lateral cross table film",ans:"<b>Prone cross-table lateral film</b> (ถ่ายหลังคลอด ~24 ชม. วัดระยะ rectal gas–skin marker)",exp:"Invertogram (Wangensteen–Rice) แบบเก่าถือคว่ำหัว — เลิกใช้",rubric:"ได้",pts:[CR(P("Prone cross-table lateral","prone","cross.?table","lateral"))]}),
  B("8.3 Definitive treatment.",2,{tags:["spot"],key:KF+"Posterior sagittal anorectoplasty",ans:"<b>Posterior sagittal anorectoplasty (PSARP)</b> — primary ถ้า rectal gas ห่างผิวหนัง &lt;1 cm, ถ้า &gt;1 cm ทำ <b>diverting colostomy</b> ก่อนแล้ว PSARP ภายหลัง",exp:"PSARP (Peña) แบ่ง sphincter complex ตามแนวกลางเพื่อวาง rectum ตรงกลางกล้ามเนื้อ",rubric:"ได้ = PSARP",pts:[CR(P("PSARP","psarp","posterior sagittal","anorectoplasty")),P("Colostomy first if high","colostomy")]})
 ),
 interp:"ARM",
 summary:["รอ 24 ชม. ก่อนตัดสินใจ","VACTERL screening","Rectal–skin &lt;1 cm → primary PSARP"]}),

/* ===== MEQ 9 ===== */
SA({page:18,orig:"MEQ 9",num:"SA 9",sub:"Imaging film",title:"Spot — mandible radiographs",img:["os77b_m9a","os77b_m9b"],kimg:["os77b_km9"],
 stem:`Radiographs of the mandible are shown.<br>1. What is the diagnosis?<br>2. What is the definitive treatment?`,
 gray:"MEQ 9) Fracture ให้มา Film มา 3 รูป (คนละรูปกับที่สอบนะ) 9.1 จงให้การวินิจฉัย 9.2 จงระบุ definite treatment",
 notes:"รูปในไฟล์ 2 ภาพ (ผู้จดบอกว่ามี 3 รูปและคนละรูปกับที่สอบ): lateral oblique mandible และ panoramic เห็นรอยแตก · เฉลยในไฟล์ Key 77B: 1. Right and left angle of mandible fracture 2. Open reduction with internal fixation with maxillomandibular fixation",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง (ตำแหน่งยึดตามคีย์ เพราะรูปไม่ตรงกับข้อสอบ)",
 parts:S(
  B("9.1 Diagnosis.",2,{tags:["spot"],key:KF+"Right and left angle of mandible fracture",ans:"<b>Bilateral mandibular angle fractures</b>",exp:"Mandible เป็นวงแหวนจึงมักหักมากกว่า 1 ตำแหน่ง (ตำแหน่งบ่อย: condyle, angle, body, symphysis)",rubric:"ได้ = mandible fracture + ตำแหน่ง",pts:[CR(P("Mandibular fracture","mandib")),P("Angle, bilateral","angle","bilateral","both")]}),
  B("9.2 Definitive treatment.",2,{tags:["spot"],key:KF+"Open reduction with internal fixation with maxillomandibular fixation",ans:"<b>ORIF</b> (miniplates) ± <b>maxillomandibular fixation</b> ให้ได้ occlusion เดิม · antibiotics (open fracture ผ่านเบ้าฟัน)",exp:"MMF ช่วยคง occlusion ระหว่างการ fixation; angle fracture มักใช้ Champy miniplate",rubric:"ได้ = ORIF ± MMF",pts:[CR(P("ORIF","orif","open reduction","internal fixation")),P("MMF","mmf","maxillomandibular")]})
 ),
 interp:"Mandible fracture",
 summary:["Malocclusion = sign สำคัญ","Ring bone → แตก 2 จุด","ORIF/MMF"]}),

/* ===== MEQ 10 ===== */
SA({page:19,orig:"MEQ 10",num:"SA 10",sub:"Pediatric surgery",title:"Spot — scrotal swelling in a 6-month-old boy",img:["os77b_m10"],kimg:["os77b_km10"],
 stem:`A 6-month-old boy has the scrotal swelling shown.<br>1. Which physical examinations help the diagnosis?<br>2. What is the definitive treatment and at what age?`,
 gray:"MEQ 10) เด็กชายอายุ 6 เดือน 10.1 จงระบุการตรวจร่างกายที่ช่วยในการวินิจฉัย 10.2 จงระบุ definitive treatment และอายุที่จะทำการรักษานี้",
 notes:"รูปในไฟล์: ถุงอัณฑะโตตึง · เฉลยในไฟล์ Key 77B: 1. Get above mass test, transillumination test 2. Hydrocelectomy, at age 2 years · AC 77D MEQ 5 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง — ในเด็กผ่าตัดแบบ high ligation of patent processus vaginalis ผ่าน inguinal incision",
 parts:S(
  B("10.1 Examinations.",3,{tags:["spot"],key:KF+"Get above mass test, transillumination test",ans:"<b>Get above the mass</b> (คลำได้ — hydrocele) · <b>transillumination positive</b> · cough/cry impulse และ reducibility (แยก hernia) · คลำอัณฑะ",exp:"Hydrocele: get above ได้ + ส่องไฟผ่าน · Inguinal hernia: get above ไม่ได้ + ไม่ส่องไฟผ่าน (ยกเว้นลำไส้เด็ก)",rubric:"ได้ = get above + transillumination",pts:[CR(P("Get above mass","get above","เหนือก้อน")),CR(P("Transillumination","transillum","ส่องไฟ")),P("Reducibility / impulse","reduc","impulse")]}),
  B("10.2 Definitive treatment and age.",2,{tags:["spot"],key:KF+"Hydrocelectomy, at age 2 years",ans:"Infant hydrocele ส่วนใหญ่หายเองภายใน 1–2 ปี → ถ้ายังอยู่หลังอายุ <b>1–2 ปี</b> (หรือ communicating ขนาดเปลี่ยน) → <b>inguinal herniotomy/high ligation of patent processus vaginalis</b>",exp:"ผู้ใหญ่: Jaboulay/Lord hydrocelectomy ทาง scrotal",rubric:"ได้ = operation + age 1–2 yr",pts:[CR(P("Herniotomy/high ligation/hydrocelectomy","herniotomy","ligation","hydrocelectomy","processus")),CR(P("Age 1–2 years","1.?2","2 ปี","2 year","1 year"))]})
 ),
 interp:"Pediatric hydrocele",
 summary:["Communicating hydrocele = patent processus vaginalis","Observe ถึง 1–2 ปี","Inguinal approach ในเด็ก"]}),

/* ===== MEQ 11 ===== */
SA({page:20,orig:"MEQ 11",num:"SA 11",sub:"Uro/Genital",title:"Short answer — sensation of incomplete bladder emptying",
 stem:`A man presents with a sensation of incomplete bladder emptying.<br>1. What history would you take?<br>2. What physical examination would you perform?`,
 gray:"MEQ 11) ผู้ป่วยมาด้วยอาการปัสสาวะไม่สุด 11.1 จงระบุการซักประวัติ 11.2 จงระบุการตรวจร่างกาย",
 notes:"ไม่มีรูปในไฟล์ · ไฟล์ Key 77B ช่องนี้ว่าง",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("11.1 History.",5,{tags:["spot"],ans:"<b>LUTS</b>: voiding (hesitancy, weak stream, intermittency, straining, dribbling) และ storage (frequency, urgency, nocturia, incontinence) — ใช้ IPSS · hematuria, dysuria, ไข้ (UTI), retention เคยเกิด · ยาที่ทำให้ปัสสาวะไม่ออก (anticholinergic, antihistamine, decongestant) · โรคระบบประสาท/DM/spinal (neurogenic bladder), ผ่าตัด/trauma (stricture), STD · ดื่มน้ำ คาเฟอีน สุรา · bone pain/weight loss (มะเร็ง)",exp:"แยก BPH, urethral stricture, neurogenic bladder, ยา, มะเร็งต่อมลูกหมาก",rubric:"≥5",pts:[CR(P("Voiding symptoms","stream","hesitan","straining","intermitt","dribbl","เบ่ง")),P("Storage symptoms","frequen","urgen","nocturia","กลางคืน"),P("IPSS","ipss","score"),P("Hematuria/UTI symptoms","hematuria","dysuria","fever","เลือด","แสบ"),P("Drugs","drug","ยา","anticholin","antihist"),P("Neurological/DM","neuro","diabet","spinal","เบาหวาน"),P("Stricture risk (trauma/STD/instrumentation)","stricture","trauma","std","gonorr"),P("Red flags of malignancy","bone","weight","น้ำหนัก")]}),
  B("11.2 Physical examination.",4,{tags:["spot"],ans:"Abdomen: <b>palpable/percussible bladder</b>, ไต · external genitalia: meatal stenosis, phimosis · <b>DRE</b>: ขนาด/ลักษณะต่อมลูกหมาก, anal tone · <b>focused neurological exam</b>: perineal sensation (S2–4), lower limb reflexes, bulbocavernosus",exp:"ตรวจ post-void residual ด้วย bladder scan/US ร่วมด้วย",rubric:"ได้ = bladder + DRE + neuro",pts:[CR(P("Palpable bladder","bladder","กระเพาะปัสสาวะ")),CR(P("DRE","dre","pr","prostate")),P("Genital exam","meatus","phimosis","genital"),P("Neuro exam incl. perineal sensation","neuro","perineal","saddle","reflex")]})
 ),
 interp:"LUTS",
 summary:["IPSS","PVR &gt;200–300 mL = significant retention","DRE + neuro exam ทุกราย"]}),

/* ===== MEQ 12 ===== */
SA({page:20,orig:"MEQ 12",num:"SA 12",sub:"Other spot",title:"Short answer — muscle testing clips",kimg:["os77b_km12"],
 stem:`Four video clips show a patient being examined. For each, name the muscle being tested and its nerve root.<br>1. Great toe dorsiflexion.<br>2. Elbow (forearm) extension.<br>3. Knee extension.<br>4. Little finger abduction.`,
 gray:"MEQ 12) ให้คลิปมา 4 คลิป มีคนไข้และคนตรวจ - ถามว่ากำลังทดสอบกล้ามเนื้อชื่ออะไร? - Nerve root อะไรเลี้ยง? 12.1 นิ้วโป้งกระดกขึ้น 12.2 Forearm เหยียดออก 12.3 เตะเข่าออก 12.4 กางนิ้วก้อยออก",
 flag:NOIMG+" (คลิปวิดีโอ)",
 imgAlt:"คลิป 4 คลิป: (1) ผู้ตรวจต้านขณะผู้ป่วยกระดกนิ้วหัวแม่เท้าขึ้น (2) ต้านขณะเหยียดข้อศอก (3) ต้านขณะเหยียดเข่า (4) ต้านขณะกางนิ้วก้อยออก",
 notes:"เฉลยในไฟล์ Key 77B: 1. Extensor hallucis longus, L5 2. Triceps, C7 3. Quadriceps, L3 4. Abductor digiti minimi, T1 · AC 77D MEQ 2 ถามเรื่องเดียวกัน",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง (quadriceps = L3–L4; ADM ตามตำรา myotome เป็น T1/C8–T1)",
 parts:S(
  B("12.1–12.4 Muscle and root.",8,{tags:["spot"],key:KF+"1. Extensor hallucis longus, L5 · 2. Triceps, C7 · 3. Quadriceps, L3 · 4. Abductor digiti minimi, T1",ans:"(1) <b>Extensor hallucis longus — L5</b> · (2) <b>Triceps — C7</b> · (3) <b>Quadriceps femoris — L3 (L3–4)</b> · (4) <b>Abductor digiti minimi — T1 (C8–T1)</b>",exp:"ASIA key muscles: C5 elbow flexors, C6 wrist extensors, C7 elbow extensors, C8 finger flexors, T1 little finger abductors, L2 hip flexors, L3 knee extensors, L4 ankle dorsiflexors, L5 EHL, S1 ankle plantarflexors",rubric:"ชื่อ + root ต่อข้อ",
   pts:[P("EHL","extensor hallucis","ehl"),P("L5","l5"),P("Triceps","triceps"),P("C7","c7"),P("Quadriceps","quadriceps"),P("L3/L4","l3","l4"),P("Abductor digiti minimi","abductor digiti","adm"),P("T1","t1","c8")]})
 ),
 interp:"Myotomes",
 summary:["ASIA key muscles C5–T1, L2–S1","EHL = L5 (ช่วยแยก L5 radiculopathy)","ADM = T1"]}),

/* ===== MEQ 13 ===== */
SA({page:21,orig:"MEQ 13",num:"SA 13",sub:"Plastic/Skin/Burn",title:"Spot — an enlarging pigmented lesion on the face",img:["os77b_m13"],kimg:["os77b_km13"],
 stem:`A patient has a pigmented lesion on the face that has enlarged over the past month, as shown.<br>1. What is the diagnosis?<br>2. What is the definitive treatment?`,
 gray:"MEQ 13) ผู้ป่วยมาด้วยไฝที่หน้า สังเกตว่าไฝมีการโตขึ้นในช่วง 1 เดือนที่ผ่านมา (คนละรูปกับที่สอบนะ) 13.1 จงให้การวินิจฉัย 13.2 จงบอก definitive treatment",
 notes:"รูปในไฟล์ (คนละรูปกับที่สอบ): รอยดำขอบไม่เรียบหลายสีที่แก้มผู้สูงอายุ · เฉลยในไฟล์ Key 77B: 1. Malignant melanoma 2. Moh's micrographic surgery",
 opinion:"เห็นด้วยกับการวินิจฉัยในไฟล์ ความมั่นใจสูง · การรักษา: มาตรฐานคือ wide local excision ตาม Breslow ± SLNB; Mohs/staged excision เป็นทางเลือกใน lentigo maligna บนใบหน้า",
 parts:S(
  B("13.1 Diagnosis.",2,{tags:["spot"],key:KF+"Malignant melanoma",ans:"<b>Malignant melanoma</b> (lentigo maligna melanoma บนใบหน้าผู้สูงอายุ)",exp:"ABCDE: Asymmetry, Border, Color, Diameter &gt;6 mm, Evolving — โตเร็ว = Evolving",rubric:"ได้ = melanoma",pts:[CR(P("Melanoma","melanoma"))]}),
  B("13.2 Definitive treatment.",3,{tags:["spot"],key:KF+"Moh's micrographic surgery",ans:"<b>Excisional biopsy</b> (หรือ incisional ในรอยโรคใหญ่บนหน้า) → <b>wide local excision</b> margin ตาม Breslow ± <b>SLNB</b> · บนใบหน้า/lentigo maligna: <b>Mohs หรือ staged excision</b> เพื่อเก็บเนื้อเยื่อ",exp:"Margin WLE: in situ 0.5–1 cm, ≤1 mm 1 cm, 1–2 mm 1–2 cm, &gt;2 mm 2 cm",rubric:"ได้ = WLE ตาม Breslow (หรือ Mohs) ± SLNB",pts:[P("Biopsy first","biopsy"),CR(P("Wide local excision or Mohs","wide","excision","mohs")),P("SLNB","sentinel","slnb")]})
 ),
 interp:"Facial melanoma",
 summary:["Lentigo maligna: ใบหน้าผู้สูงอายุ โตช้า","Mohs/staged excision ในใบหน้า","Breslow → margin"]}),

/* ===== MEQ 14 ===== */
SA({page:22,orig:"MEQ 14",num:"SA 14",sub:"Imaging film",title:"Spot — colonoscopic finding in a patient with rectal bleeding",img:["os77b_m14"],kimg:["os77b_km14"],
 stem:`A patient with blood in the stool has the investigation shown.<br>1. Give 3 indications for this investigation.<br>2. What is the diagnosis?<br>3. What histopathology is most likely after removal of this lesion?`,
 gray:"MEQ 14) ผู้ป่วยมาด้วยอุจจาระมีเลือด + ให้รูปนี้มา (คนละรูปกับที่สอบนะ) 14.1 ให้ระบุข้อบ่งชี้ของการส่งตรวจดังภาพ 3 ข้อ 14.2 จงให้การวินิจฉัย 14.3 แนวโน้มพยาธิสภาพที่น่าจะพบหลังตัด polyp นี้?? (จำคำถามได้ไม่เป๊ะนะ)",
 notes:"รูปในไฟล์ (A, B — คนละรูปกับที่สอบ): ส่องกล้องลำไส้ใหญ่เห็น polyp แบนนูน และภาพหลังย้อมสี · เฉลยในไฟล์ Key 77B: 1. Colorectal cancer screening, surveillance in colorectal cancer patient, colonic polyp excision 2. Sessile colonic polyp 3. Adenomatous polyp",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง-สูง",
 parts:S(
  B("14.1 Three indications.",3,{tags:["spot"],key:KF+"Colorectal cancer screening, surveillance in colorectal cancer patient, colonic polyp excision",ans:"CRC <b>screening</b> · <b>surveillance</b> หลังผ่าตัด CRC/หลังตัด polyp · <b>lower GI bleeding</b>/positive FIT · iron deficiency anemia · <b>polypectomy</b> · IBD",exp:"Colonoscopy ทั้งวินิจฉัยและรักษา (polypectomy) ได้ในการตรวจเดียว",rubric:"≥3",pts:[G("≥3",3,P("Screening","screen","คัดกรอง"),P("Surveillance","surveil","ติดตาม"),P("LGIB/FIT positive","bleed","เลือด","fit"),P("Anemia","anemia","ซีด"),P("Polypectomy","polyp"),P("IBD","ibd","colitis"))]}),
  B("14.2 Diagnosis.",1,{tags:["spot"],key:KF+"Sessile colonic polyp",ans:"<b>Sessile colonic polyp</b>",exp:"Sessile = ฐานกว้างไม่มีก้าน · Pedunculated = มีก้าน",rubric:"ได้",pts:[CR(P("Sessile polyp","sessile","polyp"))]}),
  B("14.3 Likely histopathology.",2,{tags:["spot"],key:KF+"Adenomatous polyp",ans:"<b>Adenoma (tubular/tubulovillous)</b> — ชนิดที่พบบ่อยและเป็น precursor ของมะเร็ง · DDx sessile serrated lesion",exp:"ความเสี่ยงมะเร็งสูงขึ้นตามขนาด &gt;1 cm, villous, high-grade dysplasia",rubric:"ได้ = adenoma",pts:[CR(P("Adenomatous polyp","adenoma","adenomatous"))]})
 ),
 interp:"Colonic polyp",
 summary:["Adenoma–carcinoma sequence (APC → KRAS → p53)","Advanced adenoma: ≥1 cm, villous, HGD","Surveillance ตามจำนวน/ชนิด"]}),

/* ===== MEQ 15 ===== */
SA({page:23,orig:"MEQ 15",num:"SA 15",sub:"Imaging film",title:"Spot — urographic study in a patient with hematuria",img:["os77b_m15"],kimg:["os77b_km15"],
 stem:`A patient has had blood in the urine for 6 months. The radiological study is shown.<br>1. Describe all the findings.<br>2. What is the diagnosis?<br>3. What further investigations would you request?`,
 gray:"MEQ 15) ผู้ป่วยมาด้วยปัสสาวะเป็นเลือดมา 6 เดือน (คนละรูปกับที่สอบ รูปจริงดูยากมาก) 15.1 จงบรรยาย finding ทั้งหมดที่พบ 15.2 จงให้การวินิจฉัย 15.3 จงระบุการส่งตรวจเพิ่มเติม",
 flag:"⚠ รูปไม่ตรงกับข้อสอบ และไฟล์คีย์เขียนว่าไม่แน่ใจ (\"ใครเห็นช่วยแก้หน่อย\") — hematuria 6 เดือนในผู้ใหญ่ต้องคิดถึงมะเร็ง urothelial ด้วย ความมั่นใจต่ำ",
 notes:"รูปในไฟล์ (คนละรูปกับที่สอบ): ภาพ IVP/KUB · เฉลยในไฟล์ Key 77B: 1. Hydronephrosis of left kidney, no radiopaque foci seen (ใครเห็นช่วยแก้หน่อย) 2. Ureterolithiasis 3. Spiral CT non contrast, retrograde pyelography",
 opinion:"ตรวจคีย์ (21 พ.ย. 2026): เห็นด้วยกับคีย์ 77B (left hydronephrosis ไม่เห็น radiopaque stone · ureterolithiasis · spiral NCCT + retrograde pyelography) เท่าที่ประเมินได้ — รูปในไฟล์ไม่ใช่รูปข้อสอบ · คงคำตอบ และคง DDx upper tract urothelial carcinoma เพราะ hematuria 6 เดือน: NCCT เป็นมาตรฐานหานิ่ว (EAU Urolithiasis Guidelines 2025) ส่วน gross hematuria ต้องทำ CT urography + cystoscopy ± cytology (AUA/SUFU Microhematuria 2020, EAU UTUC Guidelines 2025) · ความมั่นใจต่ำ (ไม่เห็นรูปจริง)",
 parts:S(
  B("15.1 Findings.",2,{tags:["spot"],key:KF+"Hydronephrosis of left kidney, no radiopaque foci seen",ans:"<b>Left hydronephrosis/hydroureter</b> (delayed excretion, blunted calyces) · ไม่เห็น radiopaque stone ชัด · ระบุ filling defect ถ้ามี",exp:"IVP ปัจจุบันถูกแทนด้วย CT urography",rubric:"ได้ = hydronephrosis",pts:[CR(P("Hydronephrosis","hydroneph")),P("No radiopaque stone / filling defect","radiopaque","filling defect","radiolucent")]}),
  B("15.2 Diagnosis.",2,{tags:["spot"],key:KF+"Ureterolithiasis",ans:"<b>Left ureteric obstruction</b> — ureterolithiasis (radiolucent stone) ตามคีย์ · DDx <b>upper tract urothelial carcinoma</b> (hematuria 6 เดือน)",exp:"Radiolucent stone (uric acid) ไม่เห็นใน KUB แต่เห็นใน CT",rubric:"ได้ = ureteric obstruction + สาเหตุที่สมเหตุผล",pts:[CR(P("Ureteric stone / obstruction","stone","ureterolith","obstruct","นิ่ว")),P("Consider urothelial carcinoma","urothelial","tumor","carcinoma","มะเร็ง")]}),
  B("15.3 Further investigations.",2,{tags:["spot"],key:KF+"Spiral CT non contrast, retrograde pyelography",ans:"<b>Non-contrast CT KUB</b> (นิ่ว) · <b>CT urography</b> + <b>urine cytology</b> + <b>cystoscopy</b> (hematuria workup) · retrograde pyelography/ureteroscopy ถ้ายังไม่ชัด",exp:"Hematuria workup = upper tract imaging (CTU) + lower tract (cystoscopy)",rubric:"ได้ = CT + cystoscopy/RP",pts:[CR(P("CT (non-contrast KUB / urography)","ct","spiral")),P("Retrograde pyelography/ureteroscopy","retrograde","ureteroscop"),P("Cystoscopy + cytology","cystoscop","cytolog")]})
 ),
 interp:"Hematuria with hydronephrosis",
 summary:["Hematuria ผู้ใหญ่: CTU + cystoscopy","Radiolucent: uric acid stone, tumor, clot","Filling defect DDx: stone, tumor, clot, papilla"]})
);
})();
