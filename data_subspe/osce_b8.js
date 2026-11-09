(function(){
/* Surgery OSCE ข้อสอบเก่า AC — MDCU66 RoD · ไฟล์ GSUP4K (01_5_MCQs_Key_4.pdf) หน้า 258 "OSCE & MEQ Surgery rotate 4/2557"
   ปี/rotation: หัวหน้าเขียน 4/2557 แต่หน้านี้อยู่ในบล็อกหน้า 250–258 ที่เปิดด้วย "AC General Surgery Rotate 4/2556" และรายการสถานีไม่ตรงกับ OSCE 4/2557
     อีกฉบับในไฟล์ (หน้า 207–219) → Claude หลักตัดสินให้เป็น MDCU66 (พ.ศ. 2556) RoD — ถ้าภายหลังพบหลักฐานว่าเป็น 4/2557 จริงให้ย้ายชุด
   รูปแบบที่ไฟล์บอก: OSCE 12 สถานี ข้อละ 3 นาที (มีทั้งสถานีเขียนและสถานีมีอาจารย์) + พาร์ท Powerpoint 11 ข้อ (สไลด์เปิดไปเรื่อย ๆ → sec:"PowerPoint" orig:"PPT n")
   หน้าเป็นข้อความพิมพ์ (recall) ไม่มีรูปประกอบเลย → ทุกสถานี NOIMG + imgAlt · ไม่มีลายมือเฉลย มีแต่ไฮไลต์เหลือง (ชื่อเครื่องมือ OSCE 1, "มีฟิล์ม IVP"/"(Staghorn)" OSCE 9, ทั้งบรรทัด OSCE 12) → ไม่มี kimg
   คำตอบที่ผู้จดเขียนไว้ในโจทย์ (เช่น Staghorn, mastitis) ถือเป็น key · ผลตรวจ/ขนาด/ผลพยาธิที่ไม่ได้จด Claude แต่งเพื่อให้สถานีสมบูรณ์ (บอกใน flag) · ไม่มีสถานีที่ข้าม */
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
const Co=o=>Object.assign({set:"MDCU66",ro:"RoD",file:"GSUP4K",opinion:""},o);
QB.push(

/* ===== OSCE 1 ===== */
Co({page:258,sec:"OSCE",orig:"1",topic:"inst",sub:"Surgical instrument",title:"Instruments — identify three instruments and state their uses",
 stem:`Three surgical instruments are displayed on the table.<br>For each instrument: 1. Name the instrument. 2. State its use.`,
 gray:"1. มีเครื่องมือสามอย่าง senn retractor towel clip metzenbaum ถามว่าชื่ออะไร ใช้ทำอะไร",
 flag:NOIMG,imgAlt:"เครื่องมือผ่าตัดโลหะ 3 ชิ้นวางเรียงบนผ้าปูโต๊ะ (ชิ้นหนึ่งเป็นตะขอสองปลาย ชิ้นหนึ่งปลายแหลมโค้งปิดล็อกได้ อีกชิ้นเป็นกรรไกรด้ามยาว)",
 notes:"ผู้จดไฮไลต์เหลืองชื่อเครื่องมือทั้ง 3 (senn retractor, towel clip, metzenbaum) — ชื่อเครื่องมือมาจากไฟล์ คำอธิบายการใช้ Claude เขียน",
 parts:S(
  B("1.1 Name each instrument and state its use.",6,{tags:["inst"],key:"ไฟล์ระบุชื่อ: Senn retractor, towel clip, Metzenbaum (ไม่มีคำอธิบายการใช้)",
   ans:"<b>Senn retractor</b> (Senn-Miller): retractor มือถือ 2 ปลาย — ปลายหนึ่งเป็นตะขอ 3 ซี่ (rake) อีกปลายเป็นแผ่นงอรูปตัว L → ใช้ <b>ดึงรั้งผิวหนัง/ชั้นใต้ผิวหนังของแผลตื้น ๆ เล็ก ๆ</b> (เช่น excision ก้อนที่ผิว, hand surgery, thyroid ช่วงแรก) · <b>Towel clip</b> (Backhaus): ปลายแหลมโค้งเข้าหากัน มีล็อก → ใช้ <b>ยึดผ้าคลุมผ่าตัด (drape) ให้อยู่กับที่</b>, ยึดสายต่าง ๆ (suction, cautery) กับผ้า, บางครั้งใช้จับกระดูก/ผิวหนังดึงรั้ง · <b>Metzenbaum scissors</b>: กรรไกรด้ามยาว ใบมีดสั้น ปลายมน (โค้งหรือตรง) → ใช้ <b>เลาะ/ตัดเนื้อเยื่อบอบบาง (fine dissection)</b> ในช่องท้อง/ช่องอก — <b>ห้ามใช้ตัดไหมหรือเนื้อเยื่อแข็ง</b> (ใช้ Mayo scissors แทน)",
   exp:"เทียบคู่ที่ออกบ่อย: Metzenbaum (ใบสั้นด้ามยาว เนื้อเยื่อบาง) vs Mayo (ใบหนา ตัดพังผืด/fascia/ไหม) · Senn vs Army-Navy (แผ่นงอ 2 ปลาย ขนาดใหญ่กว่า) · Towel clip ชนิดแหลมทำให้ผ้ามีรู ใช้ชนิดไม่แหลม (non-penetrating) ถ้าไม่อยากให้ผ้าเสียความ sterile",
   rubric:"ได้ = ชื่อถูกทั้ง 3 + การใช้ถูก · บางส่วน = ตอบ 'กรรไกร' โดยไม่ระบุ Metzenbaum หรือบอกว่าใช้ตัดไหม (ผิด)",
   pts:[H("Senn retractor",33),CR(P("Senn retractor","senn")),P("ดึงรั้งผิวหนัง/แผลตื้นเล็ก","retract","ดึงรั้ง","รั้ง","superficial","แผลตื้น"),
    H("Towel clip",33),CR(P("Towel clip (Backhaus)","towel","backhaus")),P("ยึดผ้าคลุม (drape) / ยึดสาย","drape","ผ้า","ยึด"),
    H("Metzenbaum scissors",34),CR(P("Metzenbaum scissors","metzenbaum","metz")),P("เลาะ/ตัดเนื้อเยื่อบอบบาง ไม่ใช้ตัดไหม","dissect","เลาะ","delicate","บอบบาง","fine","ไม่.*ตัดไหม")]})
 ),
 interp:"จำรูปร่างและหน้าที่ของเครื่องมือพื้นฐาน: retractor มือถือ, towel clip, กรรไกรเลาะเนื้อเยื่อ",
 summary:["Senn retractor = retractor มือถือ 2 ปลาย (rake 3 ซี่ / แผ่นงอ) สำหรับแผลตื้น","Towel clip (Backhaus) = ยึดผ้าคลุมผ่าตัด/สาย","Metzenbaum = กรรไกรเลาะเนื้อเยื่อบอบบาง · Mayo = ตัดเนื้อเยื่อหนา/ไหม"]}),

/* ===== OSCE 2 ===== */
Co({page:258,sec:"OSCE",orig:"2",topic:"suture",sub:"Suture material",title:"Suture materials — three packets: properties and uses",
 stem:`Three suture packets are shown (labelled with brand names only).<br>For each: 1. Give the generic name. 2. Monofilament or multifilament? 3. Absorbable or non-absorbable? 4. Give an example of its use.<br>5. Which of these is suitable for suturing muscle?`,
 gray:"2. มีไหมสามแบบ silk prolene vicryl ถามชื่อgeneric multi/monofilamnet absorb/nonabsorb ใช้ในไหน อะไรใช้เย็บ muscle ได้",
 flag:NOIMG,imgAlt:"ซองไหมเย็บแผล 3 ซอง (ซองสีดำ ซองสีน้ำเงิน ซองสีม่วง) วางเรียงกัน",
 notes:"ไฟล์ให้ชื่อไหม 3 ชนิด (silk, prolene, vicryl) และหัวข้อคำถาม · ไม่มีเฉลย",
 parts:S(
  B("2.1 Generic name, filament type, absorbability and use of each suture.",6,{tags:["suture"],key:"ไฟล์ระบุไหม: silk, prolene, vicryl (ไม่มีเฉลยคุณสมบัติ)",
   ans:"<b>Silk</b>: natural (โปรตีนไหม) · <b>braided multifilament</b> · <b>non-absorbable</b> (ถูกย่อยช้ามากเป็นปี) · ใช้ ligate หลอดเลือด, เย็บยึด drain/tube กับผิวหนัง · <b>Prolene</b> = <b>polypropylene</b>: synthetic <b>monofilament</b> · <b>non-absorbable</b> · ปฏิกิริยาเนื้อเยื่อน้อย ลื่น ผ่านเนื้อเยื่อง่าย แต่ knot security ต่ำ (ต้องผูกหลายปม) · ใช้ vascular anastomosis, hernia repair, เย็บ fascia, เย็บผิวหนัง (subcuticular) · <b>Vicryl</b> = <b>polyglactin 910</b>: synthetic <b>braided multifilament</b> · <b>absorbable</b> (คงแรงดึง ~50% ที่ 3 สัปดาห์ ดูดซึมหมด ~56–70 วัน) · ใช้เย็บชั้นใต้ผิวหนัง, กล้ามเนื้อ, ผูกหลอดเลือด, bowel anastomosis",
   exp:"หลักเลือกไหม: monofilament ติดเชื้อน้อยกว่า (ไม่มีซอกให้เชื้อซ่อน) แต่ผูกยาก · multifilament ผูกง่าย knot แน่น แต่เสี่ยงติดเชื้อ (wicking) · absorbable สำหรับเนื้อเยื่อที่หายเร็ว/ใต้ผิว · non-absorbable สำหรับเนื้อเยื่อที่ต้องรับแรงนาน (fascia, หลอดเลือด, tendon)",
   rubric:"ได้ = generic name ถูก (polypropylene, polyglactin 910) + mono/multi + absorbable ถูกทั้ง 3 · บางส่วน = สลับคุณสมบัติ 1 ชนิด",
   pts:[H("Silk",30),P("Silk: natural braided multifilament","silk","multi","braid","ถัก"),CR(P("Silk: non-absorbable","non.?absorb","ไม่ละลาย","ไม่ดูดซึม")),
    H("Prolene",35),CR(P("Prolene = polypropylene","polypropylene")),P("Prolene: monofilament, non-absorbable","mono","non.?absorb","ไม่ละลาย"),P("ใช้: vascular anastomosis / hernia / fascia / skin","vascular","หลอดเลือด","hernia","ไส้เลื่อน","fascia","anastomos"),
    H("Vicryl",35),CR(P("Vicryl = polyglactin 910","polyglactin","910")),P("Vicryl: braided multifilament, absorbable","absorb","ละลาย","ดูดซึม","multi","braid"),P("ใช้: subcutaneous / muscle / ligation / bowel","subcut","ใต้ผิว","muscle","กล้ามเนื้อ","ligat","bowel","ลำไส้")]}),
  B("2.2 Which suture is suitable for suturing muscle?",2,{tags:["suture"],
   ans:"<b>Vicryl (polyglactin 910)</b> — กล้ามเนื้อหายภายในไม่กี่สัปดาห์ ใช้ไหม absorbable เพื่อไม่ให้เหลือสิ่งแปลกปลอม · ในทางปฏิบัติมักเย็บแค่ชั้น fascia/epimysium (กล้ามเนื้อเองยึดไหมไม่อยู่) · Silk ใช้ได้แต่ไม่นิยม (non-absorbable, เสี่ยงติดเชื้อ) · Prolene ใช้กับ fascia ที่ต้องรับแรงนาน (abdominal wall) มากกว่ากล้ามเนื้อ",
   exp:"เย็บกล้ามเนื้อ/ชั้นลึกใช้ absorbable braided (Vicryl) ขนาด 2-0 ถึง 3-0 · ปิดหน้าท้อง (fascia) ใช้ไหมละลายช้า (PDS) หรือ non-absorbable (Prolene/nylon) แบบ continuous",
   rubric:"ได้ = Vicryl พร้อมเหตุผล (absorbable) · บางส่วน = ตอบ Vicryl ไม่บอกเหตุผล",
   pts:[CR(P("Vicryl / polyglactin","vicryl","polyglactin")),P("เหตุผล: absorbable เนื้อเยื่อหายเร็ว","absorb","ละลาย","ดูดซึม")]})
 ),
 interp:"แยกไหมตาม 3 แกน: วัสดุ (natural/synthetic) · โครงสร้าง (mono/multi) · การดูดซึม แล้วเลือกให้เหมาะกับเนื้อเยื่อ",
 summary:["Silk = natural braided non-absorbable","Prolene = polypropylene mono non-absorbable (vascular, hernia, fascia)","Vicryl = polyglactin 910 braided absorbable (subcut, muscle, ligation)","Mono ติดเชื้อน้อยแต่ผูกยาก · multi ผูกง่ายแต่ wicking"]}),

/* ===== OSCE 3 ===== */
Co({page:258,sec:"OSCE",orig:"3",topic:"inst",sub:"Ostomy appliance",title:"Device — a pouch system: name, purpose and related operations",
 stem:`A device consisting of an adhesive flange and an attached plastic pouch is shown.<br>1. What is this device called?<br>2. What is it used for?<br>3. After which operations is it used?`,
 gray:"3. มีถุง colostomy ถามว่าเรียกว่าอะไร ใช้ทำอะไร ใช้หลังผ่าตัดอะไร",
 flag:NOIMG,imgAlt:"ถุงพลาสติกขุ่นติดแผ่นกาวรูปวงกลมที่มีรูตรงกลาง",
 notes:"ไฟล์ระบุว่าเป็นถุง colostomy และหัวข้อคำถาม 3 อย่าง",
 parts:S(
  B("3.1 Name, purpose and operations after which it is used.",6,{tags:["inst"],key:"ไฟล์ระบุ: ถุง colostomy (ไม่มีเฉลยการใช้/ชนิดผ่าตัด)",
   ans:"<b>Colostomy bag (ostomy appliance / stoma pouch)</b> — ส่วนประกอบ: <b>skin barrier/flange (wafer)</b> ติดผิวรอบ stoma + <b>pouch</b> (one-piece หรือ two-piece; drainable หรือ closed-end) · <b>ใช้</b>: เก็บอุจจาระ/ลมที่ออกจาก stoma และป้องกันผิวหนังรอบ stoma จากการระคายเคือง (ตัดรูให้ใหญ่กว่า stoma ~2–3 mm) · <b>ใช้หลังผ่าตัด</b>: <b>Abdominoperineal resection (APR)</b> → permanent end colostomy · <b>Hartmann's procedure</b> (perforated diverticulitis, obstructing/perforated sigmoid cancer) → end colostomy · <b>Loop/diverting colostomy</b>: obstructing rectal cancer, rectovaginal fistula, Fournier's gangrene/perineal trauma, anorectal malformation ในเด็ก · (ileostomy ใช้ถุงแบบเดียวกัน: total colectomy, protective loop ileostomy หลัง low anterior resection)",
   exp:"ลักษณะ stoma ที่ดี: สีแดงชมพู ชุ่มชื้น ยื่นจากผิว (colostomy ~1 cm, ileostomy ~2–3 cm เพราะ effluent กัดผิว) · ภาวะแทรกซ้อน: ischemia/necrosis, retraction, prolapse, parastomal hernia, stenosis, peristomal dermatitis",
   rubric:"ได้ = ชื่อ + หน้าที่ + ผ่าตัดอย่างน้อย 2 ชนิด (APR, Hartmann's, diverting) · บางส่วน = บอกแค่ 'ผ่าตัดลำไส้'",
   pts:[CR(P("Colostomy bag / ostomy appliance","colostomy","ostomy","stoma","ถุง")),P("เก็บอุจจาระจาก stoma + ป้องกันผิว","อุจจาระ","stool","feces","faec","ผิว","skin"),
    G("ผ่าตัดที่ต้องใช้ (≥2)",2,P("Abdominoperineal resection","abdominoperineal","\\bapr\\b","miles"),P("Hartmann's procedure","hartmann"),P("Diverting/loop colostomy (obstruction, fistula, Fournier, ARM)","divert","loop","fournier","fistula","anorectal malform","obstruct"),P("Ileostomy (total colectomy / protective loop)","ileostomy","colectomy","protect"))]})
 ),
 interp:"รู้จักอุปกรณ์ stoma และข้อบ่งชี้ของ colostomy ชนิดถาวร/ชั่วคราว",
 summary:["Ostomy appliance = flange (skin barrier) + pouch · ตัดรูใหญ่กว่า stoma 2–3 mm","End colostomy ถาวร: APR · ชั่วคราว: Hartmann's","Diverting loop colostomy: obstructing rectal CA, fistula, Fournier, ARM"]}),

/* ===== OSCE 4 ===== */
Co({page:258,sec:"OSCE",orig:"4",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — digital rectal examination in a man with hematuria",
 stem:`A 68-year-old man presents with painless gross hematuria. A rectal examination manikin is provided and the examiner is observing.<br>1. Perform a digital rectal examination including the prostate.<br>2. Describe your findings.<br>3. What further investigations would you request?`,
 gray:"4. ตรวจ prostate โดยผู้ป่วยฉี่เป็นเลือด ให้อธิบายผลตรวจ + investigation เพิ่มเติม",
 sp:"(Claude แต่ง — ไฟล์ไม่ได้จดผลตรวจ) หุ่นตรวจทางทวารหนัก ชาย 68 ปี ปัสสาวะเป็นเลือดไม่เจ็บ · ผลที่หุ่น: anal tone ปกติ ไม่มีก้อนใน rectum · prostate โตประมาณ 40 g ผิวเรียบ คล้ายยางลบ (rubbery) ไม่เจ็บ median sulcus ตื้นลง ไม่มีก้อนแข็ง rectal mucosa เลื่อนได้ · ถุงมือไม่มีเลือด · อาจารย์ดูขั้นตอนและถามผลตรวจ/การส่งตรวจเพิ่ม",
 flag:"อายุ/ลักษณะปัสสาวะเป็นเลือดและผลตรวจที่หุ่น Claude แต่ง (ไฟล์จดแค่ 'ผู้ป่วยฉี่เป็นเลือด')",
 notes:"สถานีมีหุ่นตรวจ prostate · ไฟล์ไม่ได้จดผลตรวจที่หุ่น",
 parts:S(
  B("4.1 Perform the digital rectal examination.",6,{tags:["pe"],
   ans:"<b>ก่อนตรวจ</b>: แนะนำตัว อธิบาย ขออนุญาต ขอ chaperone · จัดท่า <b>left lateral decubitus (Sims)</b> เข่างอชิดอก · ล้างมือ สวมถุงมือ · <b>ตรวจ</b>: ดู perianal (hemorrhoid, fissure, fistula, skin tag) → หล่อลื่นนิ้วชี้ วางนิ้วที่ anal verge ให้ผู้ป่วยเบ่งเบา ๆ แล้วสอดเข้าช้า ๆ → ประเมิน <b>anal sphincter tone</b> (ให้ขมิบ) → คลำผนัง rectum รอบ 360° หาก้อน → คลำ <b>prostate</b> ทางด้านหน้า: ขนาด, ผิว, ความแข็ง, <b>median sulcus</b>, ก้อน/nodule, กดเจ็บ, mucosa เลื่อนได้หรือไม่ · seminal vesicle · <b>หลังตรวจ</b>: ถอนนิ้วดูถุงมือ (เลือด มูก สีอุจจาระ) · เช็ดทำความสะอาดให้ผู้ป่วย คลุมผ้า ขอบคุณ ล้างมือ",
   exp:"DRE ในชายที่ปัสสาวะเป็นเลือดใช้แยก BPH (โตเรียบ rubbery) vs มะเร็งต่อมลูกหมาก (ก้อนแข็งขรุขระ sulcus หาย) และหาก้อนใน rectum · ต้องมี chaperone และอธิบายทุกขั้นตอน",
   rubric:"ได้ = ขออนุญาต + chaperone + ท่าถูก + ดู perianal + tone + 360° + ประเมิน prostate ครบ + ดูถุงมือ · ตก = ไม่ขออนุญาต",
   pts:[H("ก่อนตรวจ",25),CR(P("แนะนำตัว อธิบาย ขออนุญาต + chaperone","แนะนำตัว","ขออนุญาต","consent","chaperone","อธิบาย")),P("ท่า left lateral (Sims) เข่างอ","left lateral","sims","ตะแคงซ้าย","lateral"),
    H("ตรวจ",60),P("ดู perianal ก่อน","inspect","perianal","ดูรอบ","hemorrhoid","fissure"),P("หล่อลื่น สอดนิ้วช้า ๆ ประเมิน anal tone","lubric","หล่อลื่น","tone","ขมิบ","sphincter"),P("คลำผนัง rectum รอบ 360°","360","รอบ","rectal wall","ผนัง"),CR(P("Prostate: size, surface, consistency, median sulcus, nodule, tenderness","size","ขนาด","sulcus","consisten","nodule","ก้อน","surface","ผิว")),
    H("หลังตรวจ",15),P("ดูถุงมือ (เลือด/มูก) ทำความสะอาดผู้ป่วย","ถุงมือ","glove","เลือด","มูก","ทำความสะอาด","เช็ด")]}),
  B("4.2 Describe your findings.",2,{tags:["pe"],
   ans:"(ตามหุ่นที่แต่ง) Normal anal tone, no rectal mass · <b>Prostate enlarged (~40 g), smooth surface, firm-rubbery consistency, median sulcus shallow, no hard nodule, non-tender</b>, rectal mucosa mobile · glove: no blood → เข้าได้กับ <b>benign prostatic hyperplasia</b> · แต่ BPH <b>ไม่ใช่คำอธิบายเพียงพอสำหรับ gross hematuria</b> ต้องหาสาเหตุอื่น (โดยเฉพาะ bladder cancer)",
   exp:"Prostate ปกติ ~20 g ขนาดเท่าเกาลัด · มะเร็ง: ก้อนแข็งเหมือนหิน ขรุขระ ไม่สมมาตร sulcus หาย อาจยึดติด · prostatitis: กดเจ็บมาก บวม อุ่น",
   rubric:"ได้ = บรรยายครบ size/surface/consistency/sulcus/nodule + สรุป BPH และบอกว่ายังต้องหาสาเหตุ hematuria",
   pts:[CR(P("บรรยาย prostate โต เรียบ rubbery sulcus ตื้น ไม่มี nodule","enlarg","โต","smooth","เรียบ","rubber","sulcus")),P("สรุป BPH แต่ต้องหาสาเหตุ hematuria อื่น","bph","benign","hyperplas","ต่อมลูกหมากโต")]}),
  B("4.3 What further investigations would you request?",4,{tags:["pe"],
   ans:"<b>ยืนยัน/ประเมินเบื้องต้น</b>: <b>UA + urine microscopy</b> (RBC morphology, casts, infection), urine culture, <b>CBC, BUN/Cr</b>, coagulation ถ้าใช้ยาต้านเลือดแข็ง · <b>ภาพทางเดินปัสสาวะส่วนบน</b>: <b>CT urography</b> (ทางเลือก: US KUB ถ้าไตเสื่อม) · <b>ส่วนล่าง</b>: <b>cystoscopy</b> (gold standard หา bladder tumor) ± <b>urine cytology</b> · <b>PSA</b> (หลังอธิบายผู้ป่วย; คัดกรองมะเร็งต่อมลูกหมากในชาย 50–70 ปี) · ประเมิน BPH: uroflowmetry, post-void residual (US)",
   exp:"Gross hematuria ในผู้สูงอายุ/สูบบุหรี่ = ความเสี่ยงมะเร็งทางเดินปัสสาวะสูง (bladder CA พบบ่อยสุด) → ต้องทำ CT urography + cystoscopy ทุกราย (AUA microhematuria 2020/EAU) แม้จะมี BPH",
   rubric:"ได้ = UA + CT urography (หรือ upper tract imaging) + cystoscopy + PSA · บางส่วน = ไม่มี cystoscopy",
   pts:[P("UA / urine microscopy / culture","\\bua\\b","urinalysis","urine","ปัสสาวะ","microscop"),P("BUN/Cr, CBC, coagulation","bun","creat","\\bcr\\b","cbc","coag"),CR(P("CT urography (upper tract)","ct uro","urograph","\\bctu\\b","ct kub","ultrasound","\\bus\\b")),CR(P("Cystoscopy ± urine cytology","cystoscop","cytolog","ส่องกล้อง")),P("PSA","psa")]})
 ),
 interp:"ทำ DRE ครบขั้นตอนพร้อมบรรยาย prostate และรู้ว่า gross hematuria ต้อง work-up มะเร็งทางเดินปัสสาวะเสมอ",
 summary:["DRE: ขออนุญาต + chaperone · ท่า Sims · ดู perianal → tone → 360° → prostate → ดูถุงมือ","Prostate: size, surface, consistency, median sulcus, nodule, tenderness","BPH = โตเรียบ rubbery · CA = แข็งขรุขระ sulcus หาย","Gross hematuria: UA, CT urography, cystoscopy ± cytology (+ PSA)"]}),

/* ===== OSCE 5 ===== */
Co({page:258,sec:"OSCE",orig:"5",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — local anesthesia and wound closure, then advise the patient",seen:"คล้าย MDCU65 RoB OSCE 10 (vertical mattress 2 stitches) และ MDCU65 RoA OSCE 12",
 stem:`A laceration on a skin pad/manikin needs to be closed. The examiner is observing.<br>1. Infiltrate local anesthesia.<br>2. Close the wound with vertical mattress sutures.<br>3. Give the patient advice on wound care.`,
 gray:"5. ฉีดยาชา + เย็บ vertical mattress แล้วก้ให้คำแนะนำคนไข้",
 sp:"(Claude เติม) หุ่นแผ่นหนังมีแผลฉีกขาดตรงยาว ~3 cm · อุปกรณ์: ถุงมือ sterile, ชุดเย็บแผล (needle holder, toothed forceps, scissors), 1% lidocaine, syringe + เข็ม 25–27G, ไหม nylon 4-0, น้ำยาทำความสะอาด, gauze · อาจารย์เล่นเป็นผู้ป่วยเมื่อให้คำแนะนำ (ถามว่าตัดไหมเมื่อไร อาบน้ำได้ไหม)",
 flag:"รายละเอียดแผล/อุปกรณ์ Claude เติม (ไฟล์จดแค่ 'ฉีดยาชา + เย็บ vertical mattress + ให้คำแนะนำ')",
 parts:S(
  B("5.1 Infiltrate local anesthesia and close the wound with vertical mattress sutures.",7,{tags:["proc"],
   ans:"<b>เตรียม</b>: แนะนำตัว ยืนยันผู้ป่วย อธิบาย ขออนุญาต · ถาม<b>ประวัติแพ้ยาชา</b> · ล้างมือ สวมถุงมือ sterile · ทำความสะอาดแผล/ปูผ้า · <b>ฉีดยาชา</b>: 1% lidocaine (ขนาดสูงสุด ~4.5 mg/kg; ผสม adrenaline ~7 mg/kg) ใช้เข็มเล็ก แทงผ่าน<b>ขอบแผลด้านใน (wound edge)</b> เจ็บน้อยกว่าผิวที่ไม่มีแผล · <b>aspirate ก่อนฉีดทุกครั้ง</b> · ฉีดช้า ๆ รอ 2–5 นาที ทดสอบชาก่อนเย็บ · <b>Vertical mattress</b>: <b>far–far, near–near</b> — แทงเข็มห่างขอบแผล ~5–8 mm ลึก ข้ามไปออกฝั่งตรงข้ามระยะเท่ากัน แล้วย้อนกลับแทงใกล้ขอบ ~1–2 mm ตื้น ๆ ออกฝั่งเดิม → ผูก instrument tie (square knot 3 throws) ปมอยู่ข้างแผล · ได้ขอบแผล<b>ปลิ้นออก (eversion)</b> · ตัดไหมเหลือ ~5 mm · <b>หลังทำ</b>: ทิ้งเข็มในภาชนะมีคม ปิดแผล",
   exp:"Vertical mattress ใช้เมื่อขอบแผลมีแนวโน้มม้วนเข้า (ผิวหย่อน หลังมือ คอ) หรือแผลตึง · ข้อเสีย: ใช้เวลานาน รอยไหม (cross-hatch) ชัดถ้าผูกแน่น/ตัดช้า · Lidocaine ผสม adrenaline: เดิมห้ามที่นิ้ว/ปลายอวัยวะ แต่หลักฐานปัจจุบันพบว่าใช้ที่นิ้วได้ปลอดภัยในคนที่ไม่มีโรคหลอดเลือด",
   rubric:"ได้ = ขออนุญาต/ถามแพ้ยา + aspirate ก่อนฉีด + far-far near-near ถูกลำดับ + ขอบแผลปลิ้น + ทิ้ง sharps · ตก = ไม่ aspirate หรือเย็บผิดแบบ",
   pts:[H("เตรียม",20),CR(P("แนะนำตัว อธิบาย ขออนุญาต ถามประวัติแพ้ยาชา","ขออนุญาต","consent","แพ้","allerg","อธิบาย")),P("Aseptic: ล้างมือ ถุงมือ sterile ทำความสะอาด ปูผ้า","sterile","aseptic","ปลอดเชื้อ","ถุงมือ","glove","ผ้า"),
    H("ฉีดยาชา",30),P("1% lidocaine ขนาดไม่เกินขนาดสูงสุด","lidocaine","xylocaine","ยาชา","4\\.5","mg/kg"),CR(P("Aspirate ก่อนฉีด","aspirat","ดูดกลับ","ดึงกลับ")),P("ฉีดผ่านขอบแผล รอชา ทดสอบ","ขอบแผล","wound edge","ทดสอบ"),
    H("Vertical mattress",40),CR(P("Far-far then near-near","far","near","ไกล","ใกล้")),P("ขอบแผลปลิ้นออก (eversion) ปมข้างแผล","evert","ปลิ้น","ปม","knot"),P("Square knot 3 throws ไม่แน่นเกิน","square","3 throw","สามปม","แน่น"),
    H("หลังทำ",10),P("ทิ้งเข็มใน sharps container","sharp","ภาชนะ","ทิ้งเข็ม")]}),
  B("5.2 Give the patient advice on wound care.",3,{tags:["proc"],
   ans:"<b>ดูแลแผล</b>: ให้แผลแห้ง 24–48 ชม. หลังจากนั้นอาบน้ำได้ ซับให้แห้ง (ไม่แช่น้ำ) · ทำแผลวันละครั้ง/เมื่อเปียก · <b>อาการต้องกลับมาก่อนนัด</b>: ปวดมากขึ้น บวมแดงร้อน มีหนอง มีไข้ แผลแยก เลือดออก · <b>นัดตัดไหม</b>: หน้า 3–5 วัน, หนังศีรษะ 7–10 วัน, ลำตัว/แขน 7–10 วัน, ขา 10–14 วัน, ข้อต่อ/ฝ่ามือฝ่าเท้า 14 วัน · ยาแก้ปวด (paracetamol) · ประเมิน <b>tetanus prophylaxis</b> ตามประวัติวัคซีน · หลีกเลี่ยงการใช้แรง/ยืดบริเวณแผล",
   exp:"Tetanus: แผลสะอาดเล็กให้ Td ถ้าได้วัคซีนเข็มสุดท้าย >10 ปีหรือไม่ครบ 3 เข็ม · แผลสกปรก: >5 ปีให้ Td และถ้าไม่ครบ 3 เข็มให้ TIG ด้วย",
   rubric:"ได้ = ดูแลแผล + อาการติดเชื้อที่ต้องกลับมา + นัดตัดไหมตามตำแหน่ง + tetanus",
   pts:[P("ให้แผลแห้ง 24–48 ชม. ทำแผล","แห้ง","dry","24","48","ทำแผล"),CR(P("อาการติดเชื้อที่ต้องกลับมา (บวมแดง หนอง ไข้)","ติดเชื้อ","infect","หนอง","pus","ไข้","fever","บวม","แดง")),P("นัดตัดไหมตามตำแหน่ง","ตัดไหม","suture removal","remove"),P("Tetanus prophylaxis","tetanus","บาดทะยัก","\\btd\\b")]})
 ),
 interp:"หัตถการฉีดยาชา + เย็บ vertical mattress ครบขั้นตอน และให้คำแนะนำหลังเย็บแผลที่ผู้ป่วยนำไปใช้ได้",
 summary:["Lidocaine 1% max ~4.5 mg/kg (+adrenaline ~7) · aspirate ก่อนฉีด · ฉีดผ่านขอบแผล","Vertical mattress = far-far near-near → eversion","คำแนะนำ: แห้ง 24–48 ชม., อาการติดเชื้อ, นัดตัดไหม, tetanus","ตัดไหม: หน้า 3–5 · หัว/ลำตัว/แขน 7–10 · ขา 10–14 · ข้อต่อ 14 วัน"]}),

/* ===== OSCE 6 ===== */
Co({page:258,sec:"OSCE",orig:"6",topic:"hx",sub:"Jaundice",ex:1,title:"History taking — a patient presenting with yellow skin",
 stem:`A simulated patient presents with yellow discoloration of the skin and eyes. The examiner is observing.<br>1. Take a focused history.<br>2. Give your provisional diagnosis and differential diagnoses.`,
 gray:"6. ซักประวัติคนไข้มาด้วยตัวเหลือง ตัวเหลือง",
 sp:"(Claude แต่ง — ไฟล์จดแค่ 'ตัวเหลือง') ชาย 62 ปี ชาวนาจากขอนแก่น · ตาเหลืองตัวเหลืองค่อย ๆ มากขึ้น 1 เดือน ไม่ปวดท้อง · คันทั้งตัว ปัสสาวะสีชาเข้ม อุจจาระสีซีดเหมือนดินน้ำมัน · เบื่ออาหาร น้ำหนักลด 6 kg ใน 2 เดือน · ไม่มีไข้หนาวสั่น ไม่มีอาเจียนเป็นเลือด · ชอบกินก้อยปลา/ปลาร้าดิบตั้งแต่เด็ก · ดื่มสุราเป็นครั้งคราว ไม่เคยรับเลือด ไม่ใช้ยาสมุนไพร · ไม่เคยเป็นนิ่วหรือผ่าตัดท้อง · ถ้าถูกถาม: ตรวจพบคลำได้ถุงน้ำดีโตไม่เจ็บ",
 flag:"บทผู้ป่วยจำลอง Claude แต่ง (เลือกภาพ painless obstructive jaundice ในพื้นที่ระบาดพยาธิใบไม้ตับ)",
 notes:"ไฟล์เขียน 'ตัวเหลือง' ซ้ำสองครั้ง ไม่มีรายละเอียดอื่น",
 parts:S(
  B("6.1 Take a focused history.",7,{tags:["hx"],
   ans:"<b>แนะนำตัว</b> ขออนุญาต ยืนยันชื่อ อายุ อาชีพ ภูมิลำเนา · <b>CC/PI</b>: ตาเหลือง/ตัวเหลืองเริ่มเมื่อไร เป็นเร็วหรือค่อยเป็น เป็นมากขึ้นเรื่อย ๆ หรือขึ้นลง · <b>ปวดท้อง</b> (ตำแหน่ง ลักษณะ biliary colic) · <b>ไข้หนาวสั่น</b> (Charcot triad) · <b>สีปัสสาวะ (ชาเข้ม) และสีอุจจาระ (ซีด)</b> · <b>คัน</b> · เบื่ออาหาร <b>น้ำหนักลด</b> · คลื่นไส้อาเจียน ถ่ายดำ/อาเจียนเลือด · ท้องโต ขาบวม · <b>ปัจจัยเสี่ยง</b>: <b>กินปลาน้ำจืดดิบ (ก้อยปลา ปลาร้า)</b>, สุรา, ยา/สมุนไพร, การรับเลือด/ใช้เข็มร่วม/เพศสัมพันธ์เสี่ยง (ไวรัสตับอักเสบ), ประวัติตับอักเสบ B/C · <b>อดีต</b>: นิ่วถุงน้ำดี ผ่าตัดทางเดินน้ำดี โรคตับ โรคเลือด (hemolysis) · <b>ครอบครัว</b>: มะเร็งตับ/ทางเดินอาหาร · <b>สรุป</b> ปัญหาให้อาจารย์",
   exp:"แยก jaundice 3 กลุ่ม: pre-hepatic (hemolysis — ปัสสาวะไม่เข้ม ไม่คัน), hepatic (ไวรัส/สุรา/ยา), post-hepatic/obstructive (ปัสสาวะเข้ม อุจจาระซีด คัน) · obstructive แบบไม่ปวด + น้ำหนักลด = มะเร็งจนกว่าจะพิสูจน์ได้ว่าไม่ใช่ · ในอีสาน Opisthorchis viverrini → cholangiocarcinoma",
   rubric:"ได้ = onset/progression + ปวด/ไข้ + สีปัสสาวะ/อุจจาระ + คัน + น้ำหนักลด + ปัจจัยเสี่ยง (ปลาดิบ สุรา ยา ไวรัส) + อดีตนิ่ว/ผ่าตัด · บางส่วน = ขาดกลุ่มปัจจัยเสี่ยง",
   pts:[H("แนะนำตัว",5),P("แนะนำตัว ขออนุญาต ยืนยันผู้ป่วย","แนะนำตัว","ขออนุญาต","สวัสดี","introduc"),
    H("CC/PI",45),P("Onset / ระยะเวลา / ค่อย ๆ มากขึ้น","onset","เริ่ม","กี่วัน","นานเท่าไร","ค่อย","progress"),P("ปวดท้อง / biliary colic","ปวด","pain","colic"),P("ไข้ หนาวสั่น","ไข้","fever","หนาวสั่น","chill"),CR(P("สีปัสสาวะ + สีอุจจาระ","ปัสสาวะ","urine","อุจจาระ","stool","ซีด","pale","สีชา")),P("คัน","คัน","prurit","itch"),CR(P("น้ำหนักลด เบื่ออาหาร","น้ำหนัก","weight","เบื่ออาหาร","anorex")),
    H("ปัจจัยเสี่ยง + อดีต",40),CR(P("กินปลาน้ำจืดดิบ (ก้อยปลา ปลาร้า)","ปลาดิบ","ก้อย","ปลาร้า","raw fish","พยาธิ","fluke")),P("สุรา / ยา / สมุนไพร","สุรา","เหล้า","alcohol","ยาที่","drug","สมุนไพร","herb"),P("ไวรัสตับอักเสบ: รับเลือด เข็ม เพศสัมพันธ์","ตับอักเสบ","hepatitis","รับเลือด","transfus","เข็ม","needle","เพศสัมพันธ์"),P("ประวัตินิ่ว/ผ่าตัดทางเดินน้ำดี","นิ่ว","stone","gallstone","ผ่าตัด","surgery"),
    H("สรุป",10),P("สรุปปัญหา","สรุป","summar")]}),
  B("6.2 Provisional diagnosis and differential diagnoses (examiner asks).",3,{tags:["hx"],
   ans:"<b>Painless progressive obstructive (post-hepatic) jaundice</b> + น้ำหนักลด + ถุงน้ำดีโตคลำได้ (Courvoisier's law) → <b>malignant obstruction ต่ำกว่าระดับ cystic duct</b> · <b>Provisional dx</b>: <b>distal cholangiocarcinoma</b> (ปัจจัยเสี่ยงพยาธิใบไม้ตับ) หรือ <b>periampullary tumor</b> · <b>DDx</b>: carcinoma of head of pancreas, ampullary carcinoma, duodenal carcinoma, (hilar cholangiocarcinoma — ถุงน้ำดีจะไม่โต), CBD stone (มักปวด/มีไข้), benign stricture · investigation ต่อ: LFT (direct bilirubin, ALP, GGT), CA 19-9, US → CT/MRCP",
   exp:"Courvoisier's law: ถุงน้ำดีโตคลำได้ไม่เจ็บร่วมกับตัวเหลือง มักไม่ใช่นิ่ว (นิ่วทำให้ถุงน้ำดีเป็นพังผืดหดตัว) → คิดถึงมะเร็ง",
   rubric:"ได้ = obstructive jaundice + malignant (cholangiocarcinoma/periampullary/pancreatic head) + DDx ≥2 · บางส่วน = ตอบ hepatitis เป็นอันดับแรก",
   pts:[CR(P("Obstructive jaundice จากมะเร็ง (cholangiocarcinoma / periampullary)","cholangio","periampull","malignan","มะเร็ง","obstruct")),G("DDx (≥2)",2,P("CA head of pancreas","pancrea","ตับอ่อน"),P("Ampullary / duodenal CA","ampull","duoden"),P("CBD stone","cbd","choledocholith","stone","นิ่ว"),P("Benign stricture","stricture","ตีบ"),P("Hepatitis / hepatocellular","hepatitis","ตับอักเสบ","hepatocell"))]})
 ),
 interp:"ซักประวัติ jaundice ให้แยก pre-hepatic/hepatic/post-hepatic และหาสัญญาณมะเร็ง (painless, น้ำหนักลด) และปัจจัยเสี่ยงในไทย (ปลาดิบ)",
 summary:["Obstructive jaundice: ปัสสาวะเข้ม อุจจาระซีด คัน","Painless + น้ำหนักลด + Courvoisier = มะเร็งต่ำกว่า cystic duct","Charcot triad (ไข้ ปวด เหลือง) = cholangitis","ไทย: Opisthorchis viverrini → cholangiocarcinoma"]}),

/* ===== OSCE 7 ===== */
Co({page:258,sec:"OSCE",orig:"7",topic:"pe",sub:"Breast",ex:1,title:"Physical examination — breast examination, then TNM staging from a pathology report",
 stem:`A breast examination manikin is provided and the examiner is observing.<br>1. Perform a breast examination.<br>2. A pathology report is then given: modified radical mastectomy, left breast — invasive carcinoma of no special type (invasive ductal carcinoma), tumor size 2.5 cm, margins free, metastatic carcinoma in 3 of 15 axillary lymph nodes. Give the TNM stage.<br>3. What further investigations are needed?`,
 gray:"7. ตรวจเต้านม โดยมีเต้านมจำลองให้ตรวจ แล้วก็มีผลพาโธให้ ให้บอก staging TNM แล้วก็การตรวจเพิ่มเติม",
 sp:"(Claude แต่ง) หุ่นเต้านมจำลอง: ก้อนแข็ง ขอบไม่เรียบ ขนาด ~2.5 cm ที่ upper outer quadrant ซ้าย เคลื่อนได้ ไม่ติดผิว · คลำได้ต่อมน้ำเหลืองรักแร้ซ้ายโต 1–2 ต่อม เคลื่อนได้ · หลังตรวจ อาจารย์ยื่นผลพยาธิ (ตามโจทย์) แล้วถาม TNM + ตรวจเพิ่ม",
 flag:"ผลพยาธิ (ขนาด 2.5 cm, LN 3/15) และผลที่หุ่น Claude แต่ง — ไฟล์จดแค่ว่า 'มีผลพาโธให้บอก staging TNM'",
 parts:S(
  B("7.1 Perform a breast examination.",5,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว อธิบาย ขออนุญาต ขอ chaperone · เปิดเผยถึงเอว · <b>ดู (inspection)</b> ท่านั่ง 4 ท่า: แขนข้างลำตัว → ยกแขนเหนือศีรษะ → มือเท้าเอวเกร็ง pectoralis → ก้มตัวไปข้างหน้า · ดูขนาด/รูปร่างสมมาตร ผิวหนัง (peau d'orange, dimpling, แผล, แดง) หัวนม (retraction, discharge, eczema) · <b>คลำ</b> ท่านอน มือข้างที่ตรวจไว้ใต้ศีรษะ · ใช้ปลายนิ้วด้านแบน 3 นิ้ว กดตื้น-กลาง-ลึก แบบ <b>vertical strip</b> (หรือ spiral/wedge) ให้ครอบคลุมทั้งเต้ารวม <b>axillary tail</b> และใต้หัวนม · กดรอบ areola ดู discharge · ตรวจข้างปกติก่อนหรือเทียบทั้งสองข้าง · <b>ต่อมน้ำเหลือง</b>: axillary (central, anterior, posterior, lateral, apical) ท่านั่งพยุงแขนผู้ป่วย, supraclavicular, infraclavicular · <b>บรรยายก้อน</b>: ตำแหน่ง (quadrant/นาฬิกา ห่างหัวนม) ขนาด รูปร่าง ขอบ ผิว ความแข็ง การเคลื่อน ติดผิว/ติดกล้ามเนื้อ กดเจ็บ · ขอบคุณ คลุมผ้า",
   exp:"การทดสอบติด pectoralis: ให้ผู้ป่วยเท้าเอวเกร็ง แล้วลองขยับก้อนในแนวใยกล้ามเนื้อ · ติดผนังทรวงอก (ซี่โครง/serratus) = T4a",
   rubric:"ได้ = ขออนุญาต/chaperone + ดู 4 ท่า + คลำครบรวม axillary tail + หัวนม + LN ครบกลุ่ม + บรรยายก้อน · ตก = ไม่ขออนุญาต",
   pts:[H("เตรียม",10),CR(P("แนะนำตัว ขออนุญาต chaperone","ขออนุญาต","consent","chaperone","แนะนำตัว")),H("ดู",25),P("ดูหลายท่า (แขนข้างตัว ยกแขน เท้าเอว ก้ม)","ยกแขน","raise","เท้าเอว","hip","ก้ม","lean","4 ท่า","หลายท่า"),P("ดูผิวหนัง/หัวนม (dimpling, peau d'orange, retraction)","dimpl","peau","retract","บุ๋ม","หัวนม","nipple","ผิวหนัง"),
    H("คลำ",40),CR(P("คลำครบทั้งเต้า + axillary tail (vertical strip/spiral)","strip","spiral","quadrant","ทั้งเต้า","axillary tail","tail")),P("กดรอบ areola ดู discharge","areola","discharge","หัวนม"),
    H("ต่อมน้ำเหลือง + บรรยาย",25),CR(P("Axillary + supraclavicular/infraclavicular LN","axill","รักแร้","supraclav","infraclav","ต่อมน้ำเหลือง","lymph")),P("บรรยายก้อน: ตำแหน่ง ขนาด ขอบ แข็ง เคลื่อน ติดผิว","ขนาด","size","ขอบ","margin","แข็ง","consist","เคลื่อน","mobil","ติดผิว")]}),
  B("7.2 Give the TNM stage from the pathology report.",3,{tags:["pe","path"],
   ans:"<b>pT2</b> (ก้อน >2 ถึง ≤5 cm: 2.5 cm) · <b>pN1a</b> (axillary LN บวก 1–3 ต่อม: 3/15) · <b>cM0</b> (ยังไม่มีหลักฐานแพร่กระจาย ต้อง workup) → <b>Anatomic stage IIB</b> (T2N1M0; AJCC 8th) · Prognostic stage ต้องใช้ grade + ER/PR/HER2 เพิ่ม",
   exp:"AJCC 8 breast: T1 ≤2 cm · T2 >2–5 · T3 >5 · T4 = ติดผนังอก (a) / ผิวหนัง (b) / ทั้งคู่ (c) / inflammatory (d) · pN1 = 1–3 LN · pN2 = 4–9 · pN3 = ≥10 หรือ infraclavicular · Stage IIA = T0-1N1 / T2N0 · IIB = T2N1 / T3N0 · IIIA = T0-2N2 / T3N1-2",
   rubric:"ได้ = pT2 pN1a M0 + stage IIB · บางส่วน = TNM ถูกแต่ stage ผิด",
   pts:[CR(P("pT2","t2")),CR(P("pN1(a)","n1")),P("M0 (ต้อง workup)","m0","mx"),P("Stage IIB","iib","2b","stage ii")]}),
  B("7.3 What further investigations are needed?",2,{tags:["pe","path"],
   ans:"<b>Receptor status</b> จากชิ้นเนื้อ: <b>ER, PR, HER2</b> (IHC ± ISH) และ <b>Ki-67</b> · <b>Staging workup</b> (node positive/stage II–III): <b>CT chest/abdomen</b> (หรือ CXR + US ตับ), <b>bone scan</b> (หรือ PET-CT ใน stage III) · CBC, LFT (ALP), Ca · <b>Mammogram ข้างตรงข้าม</b> · พิจารณา germline <b>BRCA</b> testing ถ้ามีข้อบ่งชี้ (อายุน้อย, ประวัติครอบครัว, triple-negative)",
   exp:"Receptor status กำหนด prognostic stage และการรักษาเสริม (endocrine therapy, anti-HER2, chemotherapy) · NCCN: stage I–IIB ที่ไม่มีอาการไม่ต้อง systemic imaging เป็น routine แต่หลายสถาบันทำเมื่อ node positive",
   rubric:"ได้ = ER/PR/HER2 + systemic staging (CT/bone scan หรือ CXR/US ตับ) · บางส่วน = ตอบแค่ CXR",
   pts:[CR(P("ER / PR / HER2 (+Ki-67)","\\ber\\b","\\bpr\\b","her2","her-2","receptor","ki.?67","hormone")),P("Systemic staging: CT chest/abdomen หรือ CXR + US ตับ","\\bct\\b","cxr","chest x","ultrasound","\\bus\\b","ตับ","liver"),P("Bone scan / PET-CT","bone scan","bone","\\bpet\\b"),P("Mammogram ข้างตรงข้าม / BRCA","mammo","contralat","brca","อีกข้าง")]})
 ),
 interp:"ตรวจเต้านมครบ (ดู 4 ท่า คลำทั้งเต้า + LN) แล้วอ่านผลพยาธิเป็น TNM และรู้ workup ต่อ",
 summary:["ดู 4 ท่า → คลำ vertical strip รวม axillary tail → LN axillary/supra/infraclavicular","T: ≤2 / >2–5 / >5 cm / T4 ติดผนังอก-ผิว · N: 1–3 / 4–9 / ≥10","T2N1M0 = IIB · T2N2 = IIIA","ตรวจเพิ่ม: ER/PR/HER2/Ki-67 + systemic staging"]}),

/* ===== OSCE 8 ===== */
Co({page:258,sec:"OSCE",orig:"8",topic:"path",sub:"Colorectal cancer staging",title:"Pathology report — colon specimen: stage and treatment",
 stem:`Pathology report of a sigmoid colectomy specimen: adenocarcinoma, moderately differentiated, invading through the muscularis propria into the pericolorectal tissue, not involving the visceral peritoneum. Metastatic carcinoma in 2 of 14 regional lymph nodes. Proximal, distal and radial margins free. Preoperative CT: no distant metastasis.<br>1. Give the TNM stage.<br>2. Outline further treatment and follow-up.`,
 gray:"8. มีผลพาโธ ให้บอก staging CA colon แลวก็การรักษา",
 flag:"ผลพยาธิทั้งหมด (T3, LN 2/14, ไม่มี metastasis) Claude แต่ง — ไฟล์จดแค่ 'มีผลพาโธ ให้บอก staging CA colon และการรักษา'",
 parts:S(
  B("8.1 Give the TNM stage.",3,{tags:["path"],
   ans:"<b>pT3</b> (ผ่าน muscularis propria เข้าเนื้อเยื่อรอบลำไส้) · <b>pN1b</b> (LN บวก 2–3 ต่อม) · <b>M0</b> → <b>Stage IIIB</b> (AJCC 8th)",
   exp:"AJCC 8 colorectal: T1 submucosa · T2 muscularis propria · T3 ผ่าน muscularis propria · T4a ทะลุ visceral peritoneum · T4b ลุกลามอวัยวะข้างเคียง · N1a 1 · N1b 2–3 · N1c tumor deposit · N2a 4–6 · N2b ≥7 · Stage I = T1-2N0 · II = T3-4N0 · III = N+ (IIIA T1-2N1/T1N2a, IIIB T3-4aN1/T2-3N2a/T1-2N2b, IIIC อื่น ๆ) · IV = M1 · ต้องตรวจ LN ≥12 ต่อม",
   rubric:"ได้ = pT3 pN1b M0 + stage IIIB · บางส่วน = บอก stage III ไม่ระบุ IIIB",
   pts:[CR(P("pT3","t3")),CR(P("pN1b","n1")),P("M0","m0"),P("Stage IIIB","iiib","3b","stage iii")]}),
  B("8.2 Outline further treatment and follow-up.",4,{tags:["path"],
   ans:"ผ่าตัด curative แล้ว → <b>Adjuvant chemotherapy</b> เพราะ node positive (stage III): <b>CAPOX</b> (capecitabine + oxaliplatin) <b>3 เดือน</b> สำหรับ low-risk (T1–3 N1) หรือ <b>FOLFOX 6 เดือน</b> (IDEA trial) · ผู้สูงอายุ/ไม่เหมาะ oxaliplatin → capecitabine หรือ 5-FU/LV เดี่ยว · เริ่มภายใน 6–8 สัปดาห์หลังผ่าตัด · <b>Surveillance</b>: ประวัติ/ตรวจร่างกาย + <b>CEA</b> ทุก 3–6 เดือน 2 ปี แล้วทุก 6 เดือนจนครบ 5 ปี · <b>CT chest/abdomen/pelvis</b> ทุก 6–12 เดือน 5 ปี · <b>Colonoscopy</b> ที่ 1 ปีหลังผ่าตัด (ถ้าก่อนผ่าตัดส่องไม่ครบ ทำภายใน 3–6 เดือน) แล้วทุก 3–5 ปี",
   exp:"Colon cancer (ต่างจาก rectal) ไม่ใช้ radiotherapy เป็น routine · Stage II ให้ chemo เฉพาะ high-risk (T4, LN <12, poorly diff, LVI/PNI, obstruction/perforation) และ MSS",
   rubric:"ได้ = adjuvant oxaliplatin-based chemo + CEA + CT + colonoscopy · บางส่วน = ไม่มี follow-up",
   pts:[CR(P("Adjuvant chemotherapy (FOLFOX/CAPOX)","adjuvant","chemo","folfox","capox","xelox","oxaliplatin","เคมี")),P("ระยะเวลา 3–6 เดือน","3 เดือน","6 เดือน","3 month","6 month","idea"),P("CEA ติดตาม","cea"),P("CT ติดตาม","\\bct\\b"),P("Colonoscopy ที่ 1 ปี","colonoscop","ส่องกล้อง")]})
 ),
 interp:"แปลผลพยาธิมะเร็งลำไส้ใหญ่เป็น TNM และรู้ว่า stage III ต้องได้ adjuvant chemotherapy + surveillance",
 summary:["T3 = ผ่าน muscularis propria · T4a = ทะลุ visceral peritoneum","N1a 1 · N1b 2–3 · N2a 4–6 · N2b ≥7 (ต้องได้ LN ≥12)","Stage III colon → FOLFOX/CAPOX (CAPOX 3 เดือนใน low-risk)","ติดตาม: CEA, CT 5 ปี, colonoscopy ที่ 1 ปี"]}),

/* ===== OSCE 9 ===== */
Co({page:258,sec:"OSCE",orig:"9",topic:"img",sub:"IVP/KUB",title:"Intravenous pyelogram — describe the findings and outline management",
 stem:`A plain KUB film and intravenous pyelogram (IVP) series of a 52-year-old woman with recurrent urinary tract infections and right flank discomfort are shown.<br>1. Describe the findings.<br>2. What is the diagnosis?<br>3. Outline the management.`,
 gray:"9. มีฟิล์ม IVP ถามว่าเจออะไร ให้บรรยาย เหมือนจะเจอนิ่ว แล้วถามการรักษา (Staghorn)",
 flag:NOIMG+" · อายุ/เพศ/อาการ/ข้างของนิ่ว Claude เติม",imgAlt:"ฟิล์ม KUB และฟิล์ม IVP หลายช่วงเวลาของช่องท้องผู้ป่วยหญิงวัยกลางคน",
 notes:"ผู้จดไฮไลต์ 'มีฟิล์ม IVP' และ '(Staghorn)' — คำว่า Staghorn ที่ผู้จดเขียนในวงเล็บถือเป็นคำตอบของไฟล์",
 parts:S(
  B("9.1 Describe the findings and give the diagnosis.",4,{tags:["img"],key:"ไฟล์: 'เหมือนจะเจอนิ่ว … (Staghorn)'",
   ans:"<b>KUB</b>: ก้อน <b>radiopaque ขนาดใหญ่ แตกแขนง</b> อยู่ในตำแหน่งไตขวา รูปร่างตาม <b>renal pelvis และ calyces หลายกลีบ</b> (กิ่งเขากวาง) · <b>IVP</b>: nephrogram ฝั่งขวาช้า/จาง, contrast ล้อมรอบก้อนเป็น filling defect, calyces ขยาย (hydrocalycosis) ± renal parenchyma บางลง · ไตซ้ายทำงานปกติ · <b>Dx: Right staghorn calculus</b> (complete/partial) — มักเป็น <b>struvite (magnesium ammonium phosphate)</b> จากเชื้อที่สร้าง urease (Proteus, Klebsiella)",
   exp:"Staghorn = นิ่วที่อยู่ใน renal pelvis และแตกแขนงเข้า calyx ≥2 กลีบ · Struvite เกิดในปัสสาวะด่าง (pH >7) จากเชื้อ urease-producing · พบในผู้หญิงที่ติดเชื้อทางเดินปัสสาวะบ่อย",
   rubric:"ได้ = บรรยาย radiopaque branching ตาม pelvicalyceal system + ผลต่อการทำงานไตบน IVP + staghorn calculus · บางส่วน = ตอบแค่ 'นิ่วในไต'",
   pts:[CR(P("Radiopaque branching opacity ตาม pelvicalyceal system","radiopaque","branch","แตกแขนง","calyc","pelvi","ทึบแสง")),P("IVP: delayed/poor function, hydrocalycosis, filling defect","delay","nephrogram","hydro","filling defect","dilat"),CR(P("Staghorn calculus","staghorn","เขากวาง")),P("Struvite / infection stone","struvite","infection","proteus","urease","magnesium ammonium")]}),
  B("9.2 Outline the management.",4,{tags:["img"],
   ans:"<b>เป้าหมาย: เอานิ่วออกให้หมด (stone-free)</b> เพราะนิ่วที่เหลือเป็นแหล่งเชื้อ ทำให้ไตเสียและ sepsis · <b>ก่อนผ่าตัด</b>: urine culture → <b>ให้ยาปฏิชีวนะตามเชื้อ</b> ให้ปัสสาวะไม่มีเชื้อ · CT (non-contrast) วางแผน · ประเมินการทำงานไต (DTPA/MAG3 split function) · <b>หัตถการ first-line</b>: <b>Percutaneous nephrolithotomy (PCNL)</b> (± ร่วมกับ ESWL/RIRS สำหรับเศษนิ่ว) · ทางเลือก: open/laparoscopic anatrophic nephrolithotomy (ไม่นิยมแล้ว) · <b>Nephrectomy</b> ถ้าไตข้างนั้นแทบไม่ทำงาน (split function &lt; ~10–15%) · ESWL เดี่ยว ๆ ไม่แนะนำสำหรับ staghorn · <b>ป้องกันซ้ำ</b>: รักษา UTI, ดื่มน้ำ, stone analysis, (acetohydroxamic acid ในบางราย)",
   exp:"AUA 2016/EAU guideline: PCNL เป็น first-line สำหรับ staghorn stone · ถ้าปล่อยไว้ (conservative) อัตราการเสียไต/เสียชีวิตสูง",
   rubric:"ได้ = รักษาการติดเชื้อ + PCNL เป็น first-line + nephrectomy ถ้าไตไม่ทำงาน · บางส่วน = ตอบ ESWL อย่างเดียว",
   pts:[P("Urine culture + antibiotics ก่อนผ่าตัด","culture","antibiot","ยาปฏิชีวนะ","ฆ่าเชื้อ"),CR(P("PCNL (first-line)","pcnl","percutaneous","nephrolithot")),P("เป้าหมาย stone-free / ร่วม ESWL-RIRS","stone.?free","หมด","eswl","rirs","ureteroscop"),P("Nephrectomy ถ้าไตไม่ทำงาน / ประเมิน split function","nephrectomy","ตัดไต","split","dtpa","mag3","function"),P("ป้องกันซ้ำ: stone analysis, ดื่มน้ำ","stone analysis","วิเคราะห์นิ่ว","ดื่มน้ำ","fluid","ป้องกัน")]})
 ),
 interp:"อ่าน KUB/IVP: นิ่วแตกแขนงตาม pelvicalyceal system = staghorn และรู้ว่ามาตรฐานคือ PCNL ให้ stone-free",
 summary:["Staghorn = นิ่วใน pelvis แตกแขนงเข้า calyces · มักเป็น struvite (Proteus, urease)","IVP: ไตข้างนั้นทำงานช้า hydrocalycosis","รักษา: ฆ่าเชื้อ → PCNL first-line · ไตไม่ทำงาน → nephrectomy","ESWL เดี่ยวไม่เหมาะกับ staghorn"]}),

/* ===== OSCE 10 ===== */
Co({page:258,sec:"OSCE",orig:"10",topic:"img",sub:"Acute abdomen series",title:"Abdominal films — views, findings and causes",
 stem:`A series of radiographs of a 65-year-old man with colicky abdominal pain, vomiting and abdominal distension for 2 days is shown.<br>1. Name the radiographic views in this series.<br>2. Describe the findings.<br>3. What is your diagnosis?<br>4. List possible causes.`,
 gray:"10. มีฟิล์มเหมือน gut obstruct ถามว่าถ่ายท่าไหนบ้าง(acute abdomen series) บรรยายว่าเจออะไร คิดว่าเป็นอะไร เกิดจากอะไรได้บ้าง",
 flag:NOIMG+" · ผู้จดไม่แน่ใจ ('เหมือน gut obstruct') — Claude เลือกภาพ small bowel obstruction · อายุ/อาการ Claude เติม",imgAlt:"ฟิล์มช่องท้องท่านอน ท่ายืน และฟิล์มทรวงอกท่ายืน ของผู้ป่วยชายสูงอายุ",
 parts:S(
  B("10.1 Name the views of this series.",2,{tags:["img"],key:"ไฟล์: acute abdomen series",
   ans:"<b>Acute abdomen series</b> = (1) <b>Supine AP abdomen</b> (2) <b>Upright AP abdomen</b> — ถ้ายืนไม่ได้ใช้ <b>left lateral decubitus</b> (3) <b>Upright PA chest</b> (ดู free air ใต้กระบังลมและโรคในปอด)",
   exp:"ให้ผู้ป่วยอยู่ในท่ายืน/ตะแคงอย่างน้อย 5–10 นาทีก่อนถ่าย เพื่อให้ลมลอยขึ้น · CXR upright ไวต่อ free air ที่สุดในบรรดาฟิล์มธรรมดา",
   rubric:"ได้ = ครบ 3 ท่า + left lateral decubitus เป็นทางเลือก",
   pts:[CR(P("Supine abdomen","supine","นอนหงาย")),CR(P("Upright abdomen / left lateral decubitus","upright","erect","ยืน","decubitus")),P("Upright chest X-ray","chest","cxr","ทรวงอก")]}),
  B("10.2 Describe the findings, give the diagnosis and list possible causes.",5,{tags:["img"],
   ans:"<b>Findings</b>: <b>dilated small bowel loops (&gt;3 cm)</b> อยู่กลางท้อง เห็น <b>valvulae conniventes</b> พาดเต็มความกว้างลำไส้ (stack of coins) · ท่ายืน: <b>multiple air-fluid levels แบบขั้นบันได (step-ladder)</b> ระดับต่างกันในลูปเดียวกัน · <b>ลมในลำไส้ใหญ่/rectum น้อยหรือไม่มี</b> · ไม่มี free air ใต้กระบังลม · <b>Dx: Mechanical small bowel obstruction</b> · <b>Causes</b>: (ภายนอกผนัง) <b>adhesion</b> (สาเหตุอันดับ 1 ในคนที่เคยผ่าตัดท้อง), <b>hernia</b> (อันดับ 1 ถ้าไม่เคยผ่าตัด — ต้องตรวจขาหนีบ), volvulus · (ที่ผนัง) tumor, Crohn's stricture, intussusception, radiation · (ในลำไส้) gallstone ileus, bezoar, foreign body, พยาธิ (Ascaris)",
   exp:"SBO vs LBO: ลำไส้ใหญ่โต (&gt;6 cm, cecum &gt;9 cm) อยู่รอบนอก มี haustra (ไม่พาดเต็มความกว้าง) · paralytic ileus: ลมทั้ง small และ large bowel รวม rectum",
   rubric:"ได้ = dilated SB + valvulae + air-fluid levels + ไม่มีลมใน colon + SBO + สาเหตุ ≥3 รวม adhesion และ hernia · บางส่วน = ไม่แยก SB/LB",
   pts:[H("Findings",45),CR(P("Dilated small bowel loops (>3 cm) กลางท้อง","dilat","โป่ง","ขยาย","small bowel","3 cm")),P("Valvulae conniventes","valvulae","conniven","plicae","stack of coin"),P("Multiple air-fluid levels (step-ladder)","air.?fluid","step","ระดับ","fluid level"),P("ลมใน colon/rectum น้อย","colon","rectum","ลำไส้ใหญ่","paucity","absent"),
    H("Diagnosis",20),CR(P("Small bowel obstruction","small bowel obstruct","\\bsbo\\b","ลำไส้เล็กอุดตัน","obstruct")),
    H("Causes",35),G("สาเหตุ (≥3 รวม adhesion/hernia)",3,P("Adhesion","adhesion","พังผืด"),P("Hernia","hernia","ไส้เลื่อน"),P("Tumor","tumor","tumour","มะเร็ง","neoplas"),P("Volvulus / intussusception","volvulus","intussuscep"),P("Gallstone ileus / bezoar / foreign body","gallstone ileus","bezoar","foreign","ascaris","พยาธิ"),P("Crohn / stricture","crohn","stricture"))]})
 ),
 interp:"ต้องรู้ท่าถ่ายของ acute abdomen series และแยก SBO จาก LBO/ileus บนฟิล์ม รวมทั้งสาเหตุตามประวัติผ่าตัด",
 summary:["Acute abdomen series: supine abd + upright abd (หรือ L lat decubitus) + upright CXR","SBO: ลูป >3 cm กลางท้อง valvulae conniventes + step-ladder air-fluid levels + colon ไม่มีลม","สาเหตุ: adhesion (เคยผ่าตัด) > hernia (ไม่เคยผ่าตัด) > tumor"]}),

/* ===== OSCE 11 ===== */
Co({page:258,sec:"OSCE",orig:"11",topic:"img",sub:"Acute abdomen series",title:"Radiograph in acute abdominal pain — findings, causes and management",
 stem:`An upright radiograph of a 58-year-old man with sudden severe epigastric pain for 6 hours is shown. He takes NSAIDs regularly for knee pain.<br>1. Describe the findings.<br>2. List possible causes of this finding.<br>3. Outline the management.`,
 gray:"11. ฟิล์มเหมือนมีลมในท้อง พวก perforate มั้งครั้บ ให้บรรยายว่าเจออะไร ถามว่าเกิดจากอะไรได้บ้าง บอกวิธีรักษา",
 flag:NOIMG+" · ผู้จดไม่แน่ใจ ('พวก perforate มั้ง') · ประวัติผู้ป่วย (NSAIDs, อาการ) Claude เติม",imgAlt:"ฟิล์มทรวงอกท่ายืนของผู้ป่วยชาย มองเห็นบริเวณใต้กระบังลมทั้งสองข้าง",
 parts:S(
  B("11.1 Describe the findings and list possible causes.",4,{tags:["img"],
   ans:"<b>Free subdiaphragmatic air (pneumoperitoneum)</b>: แถบลมรูปจันทร์เสี้ยว (crescent) ใต้กระบังลม (ขวาเห็นชัดเพราะตับรองด้านล่าง) · อาจเห็น Rigler's sign (เห็นผนังลำไส้ทั้งสองด้าน), football sign ในฟิล์มท่านอน · <b>Causes</b>: <b>perforated peptic ulcer</b> (พบบ่อยที่สุด; NSAIDs, H. pylori), perforated colonic diverticulitis/colon cancer, perforated small bowel (trauma, typhoid, ischemia), ruptured appendix (มีลมน้อย), <b>iatrogenic: หลังผ่าตัดช่องท้อง/laparoscopy</b> (ปกติได้ถึง ~1 สัปดาห์), peritoneal dialysis, endoscopic perforation · (non-surgical: pneumatosis, ลมจากทรวงอก/ช่องคลอด)",
   exp:"ต้องแยก pseudo-pneumoperitoneum: Chilaiditi sign (ลำไส้ใหญ่แทรกระหว่างตับกับกระบังลม — เห็น haustra), ลมในกระเพาะใต้กระบังลมซ้าย",
   rubric:"ได้ = free air ใต้กระบังลม + perforated peptic ulcer + สาเหตุอื่น ≥2 รวม post-operative · บางส่วน = ไม่บอกตำแหน่งลม",
   pts:[CR(P("Free air ใต้กระบังลม (pneumoperitoneum)","free air","subdiaphrag","pneumoperiton","ลมใต้กระบังลม","ใต้กระบังลม")),CR(P("Perforated peptic ulcer","peptic","\\bppu\\b","ulcer","แผลในกระเพาะ","กระเพาะทะลุ")),G("สาเหตุอื่น (≥2)",2,P("Colonic perforation (diverticulitis, cancer)","colon","diverticul","ลำไส้ใหญ่"),P("Post-operative / laparoscopy (iatrogenic)","post.?op","หลังผ่าตัด","laparoscop","iatrogen"),P("Small bowel perforation (trauma, typhoid)","small bowel","typhoid","trauma","ลำไส้เล็ก"),P("Peritoneal dialysis","dialysis","\\bpd\\b","ล้างไต"))]}),
  B("11.2 Outline the management.",4,{tags:["img"],
   ans:"<b>Resuscitation</b>: NPO, <b>IV crystalloid</b>, NG tube decompression, Foley วัด urine output · <b>IV broad-spectrum antibiotics</b> (เช่น ceftriaxone + metronidazole) · <b>IV PPI</b> · analgesia · lab: CBC, electrolytes, BUN/Cr, lactate, G/M · <b>Emergency surgery</b> (laparotomy หรือ laparoscopy): perforated peptic ulcer → <b>Graham omental patch</b> + peritoneal lavage (gastric ulcer ให้ biopsy ขอบแผล/พิจารณา resection) · <b>หลังผ่าตัด</b>: ตรวจและกำจัด <b>H. pylori</b>, หยุด NSAIDs, PPI ต่อเนื่อง · conservative (Taylor method) เฉพาะรายเลือกที่ปิดเองแล้ว (water-soluble contrast ไม่รั่ว) และอาการคงที่",
   exp:"Peritonitis จาก perforation: ทุกชั่วโมงที่ผ่าตัดช้าเพิ่มอัตราตาย · Boey score ใช้ประเมินความเสี่ยง (shock, ASA ≥3, อาการ &gt;24 ชม.)",
   rubric:"ได้ = resuscitation + antibiotic + PPI + ผ่าตัดด่วน (omental patch) + H. pylori · บางส่วน = ไม่มีการผ่าตัด",
   pts:[CR(P("Resuscitation: NPO, IV fluid, NG","resusc","iv fluid","สารน้ำ","npo","งดน้ำ","\\bng\\b","nasogastric")),P("IV antibiotics","antibiot","ยาปฏิชีวนะ","ceftriaxone","metronidazole"),P("IV PPI","ppi","omeprazole","pantoprazole","proton"),CR(P("Emergency surgery — Graham omental patch","graham","omental","patch","laparotom","ผ่าตัด","explor")),P("H. pylori eradication / หยุด NSAIDs","pylori","nsaid")]})
 ),
 interp:"ลมใต้กระบังลม = hollow viscus perforation จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ (ยกเว้นหลังผ่าตัด) → resuscitate + ผ่าตัดด่วน",
 summary:["Pneumoperitoneum เห็นดีสุดใน upright CXR (crescent ใต้กระบังลมขวา)","สาเหตุบ่อย: perforated peptic ulcer · ปกติได้หลังผ่าตัด ~1 สัปดาห์","แยก Chilaiditi sign","PPU: resuscitate, ATB, PPI → Graham patch → H. pylori"]}),

/* ===== OSCE 12 ===== */
Co({page:258,sec:"OSCE",orig:"12",topic:"inst",sub:"Tube/Catheter",title:"Device — a flexible tube: name, uses and contraindications",seen:"คล้าย MDCU65 RoB OSCE 3 (NG tube: ข้อบ่งชี้ + ภาวะแทรกซ้อน)",
 stem:`A long flexible plastic tube with graduated markings and side holes near its tip is shown.<br>1. What is this device?<br>2. What is it used for?<br>3. What are the contraindications to its insertion?`,
 gray:"12. NG tube ถามว่าคืออะไร ใช้ทำอะไร contraindication",
 flag:NOIMG,imgAlt:"สายพลาสติกใสยาวมีขีดบอกระยะ ปลายมีรูด้านข้างหลายรู",
 notes:"ผู้จดไฮไลต์เหลืองทั้งบรรทัด",
 parts:S(
  B("12.1 Name, uses and contraindications.",6,{tags:["inst"],key:"ไฟล์ระบุ: NG tube (ไม่มีเฉลยข้อบ่งชี้/ข้อห้าม)",
   ans:"<b>Nasogastric (NG) tube</b> — ชนิด Levin (lumen เดียว) หรือ <b>Salem sump</b> (2 lumen มี vent กันดูดติดผนัง) · <b>ข้อบ่งชี้</b>: <b>decompression</b> (bowel obstruction, ileus, gastric outlet obstruction, หลังผ่าตัด) · <b>feeding/ให้ยา</b> ในผู้ที่กลืนไม่ได้ · <b>gastric lavage</b> (สารพิษบางชนิด) · <b>วินิจฉัย</b>: ดูเลือดใน UGIB, เก็บ gastric content · ลดการสำลักในผู้ป่วยท้องอืดมาก/ก่อนดมยา · <b>ข้อห้าม</b>: <b>Absolute</b>: <b>basal skull fracture / severe midface trauma</b> (เสี่ยงสายเข้า cranial cavity → ใช้ orogastric tube แทน), esophageal obstruction/atresia, esophageal/gastric perforation · <b>Relative</b>: esophageal varices (โดยเฉพาะเพิ่งทำ banding), recent upper GI/nasal surgery (esophagectomy, gastric bypass), caustic ingestion, coagulopathy รุนแรง, esophageal stricture/diverticulum (Zenker), ผู้ป่วยไม่รู้สึกตัวที่ยังไม่ protect airway",
   exp:"ยืนยันตำแหน่ง: ดูด gastric aspirate วัด <b>pH ≤5.5</b> หรือ <b>CXR</b> (มาตรฐานก่อนให้อาหาร) — การเป่าลมฟังเสียง (whoosh test) ไม่น่าเชื่อถือ · วัดความยาว NEX: ปลายจมูก → ติ่งหู → xiphoid",
   rubric:"ได้ = ชื่อ + ข้อบ่งชี้ ≥3 + basal skull fracture/midface trauma เป็นข้อห้ามสำคัญ · บางส่วน = ไม่รู้ข้อห้ามหลัก",
   pts:[CR(P("Nasogastric (NG) tube","nasogastric","\\bng\\b","salem","levin")),
    G("ข้อบ่งชี้ (≥3)",3,P("Decompression (obstruction/ileus)","decompress","obstruct","ileus","ระบาย","อุดตัน"),P("Feeding / ให้ยา","feed","อาหาร","ให้ยา","medicat"),P("Gastric lavage","lavage","ล้างท้อง","poison","สารพิษ"),P("Diagnosis: UGIB aspirate","ugib","เลือด","bleed","diagnos","aspirat")),
    CR(P("ข้อห้าม: basal skull fracture / midface trauma","skull","basal","กะโหลก","midface","facial fracture","cribriform","ใบหน้า")),G("ข้อห้ามอื่น (≥1)",1,P("Esophageal obstruction / stricture / atresia","esophag","หลอดอาหาร","stricture","atresia"),P("Esophageal varices","varice"),P("Recent upper GI / nasal surgery","recent","surgery","ผ่าตัด"),P("Caustic ingestion","caustic","กรด","ด่าง","corrosive"),P("Coagulopathy","coagulop","เลือดออกง่าย"))]})
 ),
 interp:"รู้จัก NG tube: ชนิด ข้อบ่งชี้ และข้อห้ามสำคัญ (basal skull fracture → orogastric)",
 summary:["NG tube: Levin (1 lumen) / Salem sump (2 lumen)","ใช้: decompression, feeding, lavage, ดูเลือด UGIB","ห้าม: basal skull/midface fracture → OG tube · ระวัง varices, หลังผ่าตัดหลอดอาหาร, caustic","ยืนยันตำแหน่ง: pH ≤5.5 หรือ CXR"]}),

/* ===== PowerPoint 1 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 1",topic:"spot",sub:"Breast",title:"Spot — breast photograph: diagnosis and treatment",seen:"คล้าย MDCU65 RoA PPT 7 (รูป mastitis)",
 stem:`A photograph of the breast of a 27-year-old woman who is breastfeeding her 4-week-old baby is shown. She has had fever and breast pain for 2 days.<br>1. What is the diagnosis?<br>2. How would you treat her?`,
 gray:"1. รูป mastitis ถามว่าเป็นอะไร รักษายังไง",
 flag:NOIMG+" · อายุ/ประวัติให้นมบุตร Claude เติม",imgAlt:"รูปเต้านมข้างหนึ่งของหญิงวัยเจริญพันธุ์",
 parts:S(
  B("PPT 1.1 Diagnosis and treatment.",4,{tags:["spot"],key:"ไฟล์ระบุ: mastitis (ไม่มีเฉลยการรักษา)",
   ans:"<b>Lactational (puerperal) mastitis</b> — บริเวณเต้านมแดง บวม ร้อน กดเจ็บเป็นรูปลิ่ม (wedge) ร่วมกับไข้ · เชื้อหลัก <b>Staphylococcus aureus</b> · <b>รักษา</b>: <b>ให้นมต่อ/ปั๊มนมออกสม่ำเสมอ</b> (ไม่ต้องหยุดให้นม) · ประคบเย็น/อุ่น พักผ่อน ดื่มน้ำ · ยาแก้ปวดลดไข้ (paracetamol, ibuprofen) · <b>ยาปฏิชีวนะ</b> ครอบคลุม S. aureus 10–14 วัน: <b>dicloxacillin/cloxacillin</b> หรือ <b>cephalexin</b> (แพ้ penicillin/MRSA: clindamycin) · ถ้าไม่ดีขึ้นใน 48–72 ชม. หรือคลำได้ก้อน fluctuant → <b>ultrasound</b> หา <b>breast abscess</b> → needle aspiration ซ้ำ หรือ incision & drainage · ไม่ให้นมหรืออาการไม่ตอบสนอง → คิด inflammatory breast cancer (biopsy)",
   exp:"Academy of Breastfeeding Medicine 2022: เน้นลดการอักเสบ (ประคบเย็น NSAIDs) ไม่ปั๊มเกินความต้องการของลูก · น้ำนมจากข้างที่อักเสบปลอดภัยสำหรับทารกครบกำหนด",
   rubric:"ได้ = lactational mastitis + ให้นมต่อ + antibiotic anti-staph + ระวัง abscess · บางส่วน = ให้หยุดให้นม (ผิด)",
   pts:[CR(P("Lactational mastitis","mastitis","เต้านมอักเสบ")),CR(P("ให้นม/ปั๊มนมต่อ","ให้นมต่อ","continue","breastfeed","ปั๊ม","pump","empty")),P("Antibiotic anti-staph (dicloxacillin/cephalexin)","cloxacillin","dicloxacillin","cephalexin","antibiot","ยาปฏิชีวนะ","clindamycin"),P("Analgesic / ประคบ","paracetamol","ibuprofen","nsaid","ประคบ","compress","ยาแก้ปวด"),P("ไม่ดีขึ้น → US หา abscess → aspirate/I&D","abscess","ฝี","ultrasound","aspirat","drain")]})
 ),
 interp:"Mastitis ระหว่างให้นม: ให้นมต่อ + ยาครอบคลุม S. aureus และเฝ้าระวัง abscess",
 summary:["Lactational mastitis: S. aureus · แดงร้อนกดเจ็บ + ไข้","ให้นมต่อ + NSAIDs + dicloxacillin/cephalexin 10–14 วัน","ไม่ดีขึ้น 48–72 ชม. → US หา abscess → aspirate/I&D","ไม่ให้นม/ไม่ตอบสนอง → คิด inflammatory breast cancer"]}),

/* ===== PowerPoint 2 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 2",topic:"spot",sub:"Hernia/Abdominal wall",title:"Spot — groin swellings in an infant: diagnosis, treatment and timing",
 stem:`A photograph of the groin of a 3-month-old boy (born at term) shows swellings on both sides that appear when he cries and disappear when he is calm.<br>1. What is the diagnosis?<br>2. How should it be treated, and when?`,
 gray:"2. รูป bilateral inguinal hernia ถามว่าเป็นอะไร รักษายังไง เมื่อไหร่",
 flag:NOIMG+" · ไฟล์ไม่ได้บอกอายุผู้ป่วย — Claude เลือกเป็นทารก (เข้ากับคำถาม 'เมื่อไหร่') และใส่หลักการในผู้ใหญ่ไว้ในเฉลยด้วย",imgAlt:"รูปบริเวณขาหนีบทั้งสองข้างของทารกเพศชาย",
 parts:S(
  B("PPT 2.1 Diagnosis, treatment and timing.",4,{tags:["spot"],key:"ไฟล์ระบุ: bilateral inguinal hernia (ไม่มีเฉลยการรักษา)",
   ans:"<b>Bilateral (indirect) inguinal hernia</b> — ในเด็กเกิดจาก <b>patent processus vaginalis</b> · <b>รักษา</b>: ผ่าตัด <b>herniotomy (high ligation of the hernia sac)</b> ทั้งสองข้าง (open หรือ laparoscopic) — ในเด็กไม่ต้องซ่อมผนังหน้าท้อง/ไม่ใช้ mesh · <b>เมื่อไร</b>: <b>นัดผ่าตัดโดยเร็วหลังวินิจฉัย (elective แต่ไม่รอ)</b> เพราะทารกเสี่ยง <b>incarceration</b> สูง (โดยเฉพาะ &lt;1 ปี/คลอดก่อนกำหนด) · ไส้เลื่อนไม่หายเอง (ต่างจาก umbilical hernia) · ถ้า <b>incarcerated</b> แต่ไม่มี strangulation → manual reduction (sedation) แล้วผ่าตัดภายใน 24–48 ชม. (รอบวมยุบ) · strangulated/ดันไม่เข้า → ผ่าตัดฉุกเฉิน · (ผู้ใหญ่ bilateral: laparoscopic TEP/TAPP + mesh เป็นทางเลือกแรก)",
   exp:"แยกจาก hydrocele: hydrocele ส่องไฟผ่าน คลำขอบบนได้ ไม่ยุบตามการร้อง (ยกเว้น communicating) · ทารกคลอดก่อนกำหนดมักผ่าตัดก่อนกลับบ้านจาก NICU",
   rubric:"ได้ = bilateral indirect inguinal hernia + herniotomy + ผ่าตัดเร็วเพราะเสี่ยง incarceration · บางส่วน = ตอบรอดูจนโต (ผิด)",
   pts:[CR(P("Bilateral (indirect) inguinal hernia","inguinal hernia","ไส้เลื่อนขาหนีบ","indirect","hernia")),P("Patent processus vaginalis","processus","vaginalis"),CR(P("Herniotomy / high ligation","herniotom","high ligation","ligat","ผูกถุง","sac")),CR(P("ผ่าตัดเร็วหลังวินิจฉัย (เสี่ยง incarceration)","เร็ว","early","soon","asap","ทันที","incarcerat","ติดคา")),P("Incarcerated → reduce แล้วผ่าตัดใน 24–48 ชม.","reduc","24","48","ดันกลับ")]})
 ),
 interp:"ไส้เลื่อนขาหนีบในทารกไม่หายเอง ต้องผ่าตัดเร็ว (herniotomy) เพราะเสี่ยง incarceration",
 summary:["เด็ก: indirect inguinal hernia จาก patent processus vaginalis","Herniotomy (high ligation) ไม่ต้องใช้ mesh","ผ่าตัดเร็วหลังวินิจฉัย · incarcerated → reduce → ผ่าตัด 24–48 ชม.","ผู้ใหญ่ bilateral → laparoscopic TEP/TAPP"]}),

/* ===== PowerPoint 3 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 3",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — facial anomaly in a newborn: timing of repair and rationale",
 stem:`A photograph of a newborn's face showing a congenital anomaly of the upper lip on both sides is shown.<br>1. What is the diagnosis?<br>2. When should it be repaired, and why?`,
 gray:"3. รูป bilateral complete cleft lip ถามว่ารักษาเมื่อไหร่ เพราะอะไร",
 flag:NOIMG,imgAlt:"รูปใบหน้าทารกแรกเกิด เห็นริมฝีปากบนชัดเจน",
 parts:S(
  B("PPT 3.1 Diagnosis, timing of repair and rationale.",4,{tags:["spot"],key:"ไฟล์ระบุ: bilateral complete cleft lip (ไม่มีเฉลยเวลาผ่าตัด)",
   ans:"<b>Bilateral complete cleft lip</b> (มักร่วมกับ cleft palate/alveolus; premaxilla ยื่น) · <b>เวลาผ่าตัด cleft lip</b>: อายุ <b>~3 เดือน</b> ตาม <b>rule of 10s</b> (อายุ ≥10 สัปดาห์, น้ำหนัก ≥10 ปอนด์ (~4.5 kg), Hb ≥10 g/dL) · <b>เหตุผล</b>: <b>ความปลอดภัยในการดมยา</b>, เนื้อเยื่อโตพอให้ซ่อมได้แม่นยำ, ตรวจหา anomaly อื่นก่อน · bilateral มักทำ <b>presurgical nasoalveolar molding (NAM)</b>/lip adhesion ก่อน · <b>Cleft palate</b>: <b>9–18 เดือน (~12 เดือน)</b> — <b>ก่อนพัฒนาการพูด</b> เพื่อให้พูดได้ปกติ แต่ไม่เร็วเกินจนรบกวนการเจริญของ maxilla · <b>Alveolar bone graft</b>: 9–11 ปี (ก่อน canine ขึ้น) · ดูแลแบบ <b>multidisciplinary team</b>: การให้นม (ขวด/จุกพิเศษ), หู (otitis media with effusion → ใส่ท่อ), ฝึกพูด, ทันตกรรมจัดฟัน, พันธุกรรม",
   exp:"Cleft lip ± palate เกิดจาก maxillary prominence ไม่เชื่อมกับ medial nasal prominence (สัปดาห์ที่ 4–7) · cleft palate แยกเดี่ยวสัมพันธ์กับ syndrome มากกว่า (Pierre Robin, 22q11)",
   rubric:"ได้ = ซ่อม lip ~3 เดือน (rule of 10s) + เหตุผล (ดมยาปลอดภัย/เนื้อเยื่อพอ) + palate ~9–18 เดือนก่อนพูด · บางส่วน = บอกเวลาแต่ไม่มีเหตุผล",
   pts:[CR(P("Bilateral complete cleft lip","cleft lip","ปากแหว่ง","cleft")),CR(P("ซ่อม lip ~3 เดือน (rule of 10s)","rule of 10","10 สัปดาห์","10 week","3 เดือน","3 month","10 lb","10 ปอนด์")),P("เหตุผล: ดมยาปลอดภัย เนื้อเยื่อโตพอ","anesth","ดมยา","ปลอดภัย","safe","เนื้อเยื่อ","tissue"),P("Cleft palate 9–18 เดือน ก่อนพัฒนาการพูด","palate","เพดาน","speech","พูด","12 เดือน","18"),P("Multidisciplinary / NAM","multidisc","team","\\bnam\\b","molding","feeding","หูชั้นกลาง","otitis")]})
 ),
 interp:"เวลาผ่าตัดปากแหว่งเพดานโหว่และเหตุผล: lip ~3 เดือน (rule of 10s), palate ก่อนพูด",
 summary:["Cleft lip: ~3 เดือน — rule of 10s (10 wk, 10 lb, Hb 10)","Cleft palate: 9–18 เดือน ก่อนเริ่มพูด","Alveolar bone graft 9–11 ปี","ทีมสหวิชาชีพ: feeding, หู, พูด, ฟัน"]}),

/* ===== PowerPoint 4 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 4",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — red lesions over the nasal dorsum: diagnosis and treatment",
 stem:`A photograph shows red, raised lesions over the dorsum of the nose.<br>1. What is the most likely diagnosis?<br>2. How would you treat it?`,
 gray:"4. รูปเป็นตุ่มๆแดงแถวสันจมูกอะครับ ผมไม่รู้เหมือนกันว่าคืออะไร ถามว่าเป็นอะไร รักษายังไง",
 flag:"⚠ "+NOIMG+" · ผู้จดเองไม่รู้ว่ารอยโรคคืออะไร — เฉลยเป็นแนวคิดวินิจฉัยแยกโรคของ Claude ไม่ใช่คำตอบที่ยืนยันได้",imgAlt:"รูปใบหน้าเห็นจมูกส่วนสันจมูกที่มีรอยโรคสีแดงนูน",
 notes:"ไฟล์ไม่มีข้อมูลอายุ/ลักษณะรอยโรคเพิ่ม ผู้จดเขียนว่าไม่รู้ว่าคืออะไร",
 opinion:"ไม่มีข้อมูลพอจะสรุปโรคเดียว · ในข้อสอบศัลย์ที่ให้รูปรอยโรคแดงบนจมูก โรคที่น่าจะออกมากที่สุดคือ infantile hemangioma (ถ้าเป็นเด็ก) หรือ rhinophyma/BCC (ถ้าเป็นผู้ใหญ่) — Claude จึงให้เฉลยเป็นการแยกโรคตามอายุ",
 parts:S(
  B("PPT 4.1 Diagnosis and treatment.",4,{tags:["spot"],
   ans:"ต้องดูอายุและลักษณะรอยโรค · <b>ทารก/เด็กเล็ก</b> — ก้อน/ตุ่มสีแดงสดนุ่ม โตเร็วช่วงขวบปีแรก = <b>infantile hemangioma</b> (ที่ปลาย/สันจมูก 'Cyrano nose') → รักษาด้วย <b>oral propranolol</b> (เริ่มเร็วเพราะตำแหน่งจมูกเสี่ยงผิดรูป) · ระยะเหลือรอยหลังยุบ → ผ่าตัดแก้ไข · <b>ผู้ใหญ่</b>: ตุ่มแดง/ผิวหนาขรุขระที่จมูก รูขุมขนกว้าง = <b>rhinophyma</b> (rosacea ระยะท้าย) → doxycycline/isotretinoin ระยะต้น, รอยหนาใช้ <b>surgical shave/dermabrasion/CO2 laser</b> · ตุ่มมันวาวขอบนูน มี telangiectasia = <b>basal cell carcinoma</b> → biopsy + excision (margin 4 mm) หรือ Mohs (H-zone) · ตุ่มแดงเป็นกลุ่มตามแนวเส้นประสาท = herpes zoster (V1; Hutchinson sign) → acyclovir + ตรวจตา",
   exp:"รอยโรคใบหน้าบริเวณกลาง (H-zone) ต้องให้ความสำคัญเรื่องผลทางความงามและอัตราเป็นซ้ำของมะเร็งผิวหนัง",
   rubric:"ให้คะแนนตามความสมเหตุสมผลของการวินิจฉัยแยกโรค (≥2 โรค) และการรักษาที่ตรงกับโรคที่เลือก",
   pts:[G("Diagnosis/DDx ที่สมเหตุผล (≥2)",2,P("Infantile hemangioma","hemangioma","ฮีแมงจิโอมา","ปานแดง"),P("Rhinophyma / rosacea","rhinophyma","rosacea"),P("Basal cell carcinoma","basal cell","\\bbcc\\b"),P("Herpes zoster (V1)","zoster","งูสวัด","herpes")),G("การรักษาตรงโรค (≥1)",1,P("Propranolol (hemangioma)","propranolol","beta.?block"),P("Shave/dermabrasion/laser (rhinophyma)","shave","dermabras","laser","isotretinoin","doxycycline"),P("Biopsy + excision / Mohs (BCC)","biopsy","excision","mohs"),P("Acyclovir + ตรวจตา (zoster)","acyclovir","antiviral","ตรวจตา","ophthalm"))]})
 ),
 interp:"รอยโรคแดงบนจมูก: แยกตามอายุ — เด็กคิด hemangioma, ผู้ใหญ่คิด rhinophyma/BCC",
 summary:["เด็ก: infantile hemangioma → propranolol","ผู้ใหญ่: rhinophyma → shave/laser · BCC → excision/Mohs","ตุ่มน้ำแดงตามเส้นประสาท V1 → herpes zoster ophthalmicus"]}),

/* ===== PowerPoint 5 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 5",topic:"spot",sub:"Uro/Genital",title:"Spot — swollen glans with a tight ring of foreskin: diagnosis and treatment",
 stem:`A photograph of the penis of a 6-year-old boy shows a markedly swollen glans with a tight band of edematous foreskin behind it. His foreskin was retracted by a parent while bathing a few hours ago.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"5. รูป paraphimosis ถามว่าคืออะไร รักษายังไง",
 flag:NOIMG+" · อายุ/ประวัติ Claude เติม",imgAlt:"รูปอวัยวะเพศชายของเด็ก บริเวณหัวองคชาตบวม",
 parts:S(
  B("PPT 5.1 Diagnosis and treatment.",4,{tags:["spot"],key:"ไฟล์ระบุ: paraphimosis (ไม่มีเฉลยการรักษา)",
   ans:"<b>Paraphimosis</b> — หนังหุ้มปลายที่ถูกรูดลงไปค้างหลัง glans แล้วไม่สามารถดึงกลับ ทำให้เกิด<b>วงรัด (constriction ring)</b> → venous/lymphatic congestion → glans บวม → ถ้านานเกิด arterial compromise/necrosis = <b>urological emergency</b> · <b>รักษา</b>: ยาแก้ปวด/<b>dorsal penile block</b> (ยาชาไม่มี adrenaline) หรือ sedation ในเด็ก → <b>ลดบวม</b> (บีบ glans ต่อเนื่อง 5–10 นาที, ประคบเย็น, granulated sugar, puncture technique ด้วยเข็มเล็ก) → <b>manual reduction</b>: ใช้นิ้วโป้งดัน glans เข้าขณะที่นิ้วชี้-กลางดึงหนังหุ้มปลายมาด้านหน้า · ไม่สำเร็จ → <b>dorsal slit</b> (ฉุกเฉิน) · หลังหาย → <b>circumcision</b> แบบ elective เพื่อป้องกันซ้ำ · สอนผู้ปกครอง: <b>ทุกครั้งที่รูดหนังหุ้มปลายต้องรูดกลับเสมอ</b> (รวมหลังใส่สายสวนปัสสาวะ)",
   exp:"Paraphimosis ≠ phimosis: phimosis = รูดเปิดไม่ได้ (ไม่ฉุกเฉิน) · paraphimosis = รูดกลับไม่ได้ (ฉุกเฉิน) · สาเหตุ iatrogenic ที่พบบ่อย: ใส่ Foley แล้วลืมรูดหนังกลับ",
   rubric:"ได้ = paraphimosis + เป็นภาวะฉุกเฉิน + ลดบวม/manual reduction + dorsal slit ถ้าไม่สำเร็จ + circumcision ภายหลัง · บางส่วน = ไม่มีขั้นตอนเมื่อ reduction ล้มเหลว",
   pts:[CR(P("Paraphimosis","paraphimosis")),P("ภาวะฉุกเฉิน (constriction → ischemia)","emergen","ฉุกเฉิน","ischemi","necrosis","รัด","constrict"),P("Analgesia / penile block","block","ยาชา","analges","sedat"),CR(P("ลดบวมแล้ว manual reduction","manual","reduc","ดันกลับ","บีบ","compress","ice","น้ำตาล","sugar")),P("ไม่สำเร็จ → dorsal slit","dorsal slit","slit"),P("Circumcision ภายหลัง","circumcis","ขลิบ")]})
 ),
 interp:"Paraphimosis เป็นภาวะฉุกเฉิน: ลดบวม → ดันกลับ → dorsal slit → circumcision ภายหลัง",
 summary:["Paraphimosis = หนังหุ้มค้างหลัง glans รูดกลับไม่ได้ → ฉุกเฉิน","Penile block → ลดบวม (บีบ/เย็น/น้ำตาล/puncture) → manual reduction","ล้มเหลว → dorsal slit · ต่อมา circumcision","ใส่ Foley เสร็จต้องรูดหนังหุ้มกลับทุกครั้ง"]}),

/* ===== PowerPoint 6 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 6",topic:"spot",sub:"Head & neck",title:"Spot — penetrating cheek wound: expected deficit and examination",seen:"คล้าย MDCU65 RoA PPT 10 (แผลแทงที่ใบหน้าแนว facial nerve)",
 stem:`A photograph shows a stab wound on the mid-cheek, anterior to the ear, along a line from the tragus to the corner of the mouth. The buccal branch of the facial nerve is suspected to be injured.<br>1. What symptoms and signs would you expect?<br>2. How would you examine this patient?`,
 gray:"6. คนโดนแทงที่หน้า โดน buccal branch ถามว่าจะมีอาการยังไง ตรวจยังไง",
 flag:NOIMG,imgAlt:"รูปใบหน้าด้านข้างมีแผลถูกแทงบริเวณแก้ม",
 parts:S(
  B("PPT 6.1 Expected deficit and examination.",4,{tags:["spot"],key:"ไฟล์ระบุ: buccal branch (ไม่มีเฉลยอาการ/การตรวจ)",
   ans:"<b>Buccal branch</b> เลี้ยง buccinator, orbicularis oris (ส่วนบน), zygomaticus/levator labii superioris, nasalis · <b>อาการ</b>: <b>ยิ้มไม่ได้/มุมปากด้านนั้นไม่ยก</b>, <b>nasolabial fold แบน</b>, <b>เป่าแก้มลมรั่ว</b>, ผิวปากไม่ได้, <b>อาหารค้างในกระพุ้งแก้ม</b>, น้ำลายไหลมุมปาก · <b>ตรวจ</b>: ให้ยิ้มยิงฟัน, ย่นจมูก, เป่าแก้ม (กดแก้มดูลมรั่ว), ผิวปาก/ทำปากจู๋ — เทียบสองข้าง · ตรวจแขนงอื่นด้วย (เลิกคิ้ว = temporal, หลับตาแน่น = zygomatic, ยื่นริมฝีปากล่าง = marginal mandibular) · <b>ต้องตรวจ parotid (Stensen's) duct</b> ซึ่งวิ่งแนวเดียวกัน (กลางเส้น tragus → กึ่งกลางริมฝีปากบน): น้ำลายรั่วจากแผล, ใส่ probe/สายผ่านรูเปิดตรงฟันกรามบนซี่ที่ 2 ดูว่าโผล่ที่แผลไหม · <b>ควรตรวจก่อนฉีดยาชา</b> · การรักษา: แผลที่ <b>อยู่ด้านหลังเส้นดิ่งผ่าน lateral canthus</b> ควร explore + microsurgical repair ภายใน 72 ชม. (ยังกระตุ้นปลายประสาทหาได้) · ด้านหน้าเส้นนี้มักฟื้นเองจากแขนงที่ต่อกัน",
   exp:"Buccal branch มีแขนงเชื่อมกับ zygomatic branch มาก จึงฟื้นตัวได้ดีกว่า marginal mandibular/temporal branch ที่มักเป็นแขนงเดี่ยว",
   rubric:"ได้ = อาการ (ยิ้ม/เป่าแก้ม/อาหารค้าง/nasolabial fold แบน) + วิธีตรวจกล้ามเนื้อ + ตรวจ parotid duct · บางส่วน = ไม่พูดถึง parotid duct",
   pts:[CR(P("ยิ้ม/ยกมุมปากไม่ได้, nasolabial fold แบน","ยิ้ม","smile","มุมปาก","nasolabial","upper lip","ริมฝีปากบน")),P("เป่าแก้มลมรั่ว / อาหารค้างกระพุ้งแก้ม","เป่า","puff","แก้ม","buccinator","อาหารค้าง","food"),CR(P("ตรวจ: ยิ้มยิงฟัน เป่าแก้ม ผิวปาก เทียบสองข้าง","ยิงฟัน","show teeth","เป่าแก้ม","ผิวปาก","whistle","เทียบ","compare")),CR(P("ตรวจ parotid (Stensen's) duct","parotid","stensen","น้ำลาย","saliva","duct")),P("Explore/repair ภายใน 72 ชม. ถ้าอยู่หลัง lateral canthus","72","lateral canthus","microsurg","repair","ต่อเส้นประสาท")]})
 ),
 interp:"แผลที่แก้มแนว tragus–มุมปาก: ตรวจ buccal branch ของ CN VII และ parotid duct เสมอ ก่อนฉีดยาชา",
 summary:["Buccal branch: ยิ้ม เป่าแก้ม (buccinator) — อาหารค้างกระพุ้งแก้ม","ตรวจทุกแขนง CN VII เทียบสองข้าง ก่อนฉีดยาชา","Parotid duct วิ่งกลางเส้น tragus → กลางริมฝีปากบน","หลังเส้น lateral canthus → explore/repair ภายใน 72 ชม."]}),

/* ===== PowerPoint 7 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 7",topic:"spot",sub:"Instrument/Device",title:"Spot — instrument with an obturator in place: name and uses",
 stem:`A photograph of a short tubular metal instrument with a removable obturator inserted is shown.<br>1. What is this instrument?<br>2. What is it used for?`,
 gray:"7. รูป proctoscope ใส ถามว่าคืออะไร ใช้ทำอะไร",
 flag:NOIMG,imgAlt:"รูปเครื่องมือโลหะรูปท่อสั้นมีด้ามจับ และแกนปลายมนสอดอยู่ภายใน",
 notes:"ไฟล์เขียน 'รูป proctoscope ใส' (ผู้จดน่าจะหมายถึงมีแกน obturator ใส่อยู่ หรือเป็นชนิดพลาสติกใส) — คงตามต้นฉบับใน gray",
 parts:S(
  B("PPT 7.1 Name and uses.",4,{tags:["spot"],key:"ไฟล์ระบุ: proctoscope (ไม่มีเฉลยการใช้)",
   ans:"<b>Proctoscope</b> (เครื่องส่องตรวจ anal canal/ส่วนปลาย rectum, ยาว ~7–10 cm) ประกอบด้วยท่อ + <b>obturator</b> (แกนปลายมนช่วยให้สอดได้ไม่บาดเจ็บ ดึงออกหลังสอดแล้วเพื่อมองผ่านท่อ) ใช้กับแหล่งแสง · <b>ใช้ทำ</b>: <b>วินิจฉัย</b> hemorrhoids (บอก grade), anal fissure, fistula opening ภายใน, polyp/มะเร็งส่วนปลาย, proctitis · หาสาเหตุเลือดออกทางทวารสีแดงสด · <b>หัตถการ</b>: <b>rubber band ligation</b>, <b>injection sclerotherapy</b> ของ hemorrhoids, biopsy · ทำต่อจาก DRE เสมอ",
   exp:"Proctoscope (anoscope) ดูได้เฉพาะ anal canal และ rectum ส่วนล่าง · rigid sigmoidoscope ยาว ~25 cm ดู rectum ทั้งหมด · flexible sigmoidoscope ~60 cm",
   rubric:"ได้ = ชื่อ + วินิจฉัยโรคทวารหนัก + หัตถการ (banding/sclerotherapy) · บางส่วน = ตอบชื่อ 'speculum'",
   pts:[CR(P("Proctoscope (anoscope)","proctoscop","anoscop","protoscop")),P("มี obturator ช่วยสอด","obturator","แกน"),CR(P("ตรวจ hemorrhoid/fissure/anal canal/rectum ส่วนปลาย","hemorrhoid","ริดสีดวง","fissure","anal canal","rectum","ทวาร")),P("Banding / sclerotherapy / biopsy","band","ligation","sclero","inject","biopsy")]})
 ),
 interp:"รู้จัก proctoscope และบทบาทในการวินิจฉัย/รักษาโรคริดสีดวงทวาร",
 summary:["Proctoscope ~7–10 cm + obturator → ดู anal canal/rectum ส่วนปลาย","ใช้: grade hemorrhoid, fissure, internal opening ของ fistula, biopsy","หัตถการ: rubber band ligation, sclerotherapy","Rigid sigmoidoscope ~25 cm"]}),

/* ===== PowerPoint 8 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 8",topic:"spot",sub:"Head & neck",title:"Spot — anterior neck swelling: diagnosis and treatment",
 stem:`A photograph of a 30-year-old woman shows a diffuse anterior neck swelling and prominent eyes. She complains of palpitations, heat intolerance and weight loss.<br>1. What is the diagnosis?<br>2. Outline the treatment options.`,
 gray:"8. รูปก้อนที่คอโต เป็น grave disease มั้งครับ ถามว่าเป็นอะไร รักษายังไง",
 flag:NOIMG+" · ผู้จดไม่แน่ใจ ('มั้งครับ') · อาการ/ตาโปน Claude เติมให้เข้ากับ Graves",imgAlt:"รูปหญิงวัยผู้ใหญ่ ถ่ายบริเวณใบหน้าและลำคอด้านหน้า",
 parts:S(
  B("PPT 8.1 Diagnosis and treatment options.",4,{tags:["spot"],key:"ไฟล์: 'เป็น grave disease มั้งครับ'",
   ans:"<b>Graves' disease</b> (diffuse toxic goiter + ophthalmopathy) · ยืนยัน: TSH ต่ำ, free T4/T3 สูง, <b>TRAb (TSI)</b> · <b>รักษา</b>: <b>β-blocker</b> (propranolol) คุมอาการ · ทางเลือกหลัก 3 อย่าง: (1) <b>Antithyroid drugs</b> — <b>methimazole</b> 12–18 เดือน (PTU ในไตรมาสแรกของการตั้งครรภ์/thyroid storm) ระวัง agranulocytosis, hepatotoxicity (2) <b>Radioactive iodine (I-131)</b> — ห้ามในตั้งครรภ์/ให้นม, ระวังทำให้ ophthalmopathy แย่ลง (ให้ steroid ป้องกัน) (3) <b>Surgery: total thyroidectomy</b> — ข้อบ่งชี้: goiter ใหญ่มีอาการกด, สงสัยมะเร็งร่วม, ophthalmopathy รุนแรง, ตั้งครรภ์ที่ใช้ยาไม่ได้ (ทำไตรมาสสอง), ผู้ป่วยต้องการ, ยาไม่ได้ผล · ก่อนผ่าตัดต้อง <b>euthyroid</b> (ATD + β-blocker) + <b>Lugol's iodine 7–10 วัน</b> ลด vascularity · หลังผ่าตัดให้ levothyroxine ตลอดชีวิต · ภาวะแทรกซ้อน: recurrent laryngeal nerve injury, hypoparathyroidism (hypocalcemia), เลือดออกกดทางเดินหายใจ",
   exp:"ATA 2016: ผ่าตัดเลือก total thyroidectomy (ไม่ใช่ subtotal) เพราะอัตราเป็นซ้ำต่ำ · ผ่าตัดในภาวะ thyrotoxicosis เสี่ยง thyroid storm",
   rubric:"ได้ = Graves + 3 ทางเลือก (ATD, RAI, surgery) + เตรียม euthyroid/Lugol ก่อนผ่าตัด · บางส่วน = บอกแค่ยา",
   pts:[CR(P("Graves' disease","grave","diffuse toxic")),P("β-blocker คุมอาการ","propranolol","beta","block"),CR(P("Antithyroid drug (methimazole/PTU)","methimazole","\\bmmi\\b","ptu","propylthiouracil","antithyroid","carbimazole")),P("Radioactive iodine (I-131)","radioactive","i.?131","\\brai\\b","ไอโอดีนรังสี"),CR(P("Total thyroidectomy (หลังเตรียม euthyroid + Lugol)","thyroidectom","ผ่าตัด","lugol","euthyroid"))]})
 ),
 interp:"Graves' disease: ยืนยันด้วย TFT/TRAb และรู้ข้อบ่งชี้/การเตรียมก่อนผ่าตัด thyroidectomy",
 summary:["Graves: diffuse goiter + ophthalmopathy + TRAb","ATD (methimazole; PTU ไตรมาสแรก) · RAI (ห้ามตั้งครรภ์) · total thyroidectomy","ก่อนผ่าตัด: euthyroid + Lugol 7–10 วัน","ภาวะแทรกซ้อน: RLN injury, hypocalcemia, hematoma"]}),

/* ===== PowerPoint 9 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 9",topic:"spot",sub:"Imaging film",title:"Spot — contrast study in an infant with vomiting: diagnosis",seen:"คล้าย MDCU65 RoA PPT 8 และ MDCU65 RoB PPT 5 (ฟิล์ม midgut volvulus)",
 stem:`A 3-week-old infant presents with sudden onset of bile-stained vomiting. An upper gastrointestinal contrast study is shown.<br>1. What is the diagnosis?<br>2. How do you distinguish this from the main differential diagnosis of vomiting at this age?`,
 gray:"9. รูปฟิล์มเหมือนเป็น pyrolic stenosis แต่อาการเหมือน midgut volvulus ถามว่าเป็นอะไร",
 flag:"⚠ "+NOIMG+" · ผู้จดลังเลระหว่าง pyloric stenosis (ตามฟิล์ม) และ midgut volvulus (ตามอาการ) · อายุ/อาการ Claude เติมโดยเลือกตามอาการ (bilious vomiting) · คำถามย่อยการแยกโรค Claude เติม",imgAlt:"ฟิล์ม upper GI study ของทารก เห็นกระเพาะอาหารและลำไส้เล็กส่วนต้นที่มีสารทึบรังสี",
 opinion:"ไฟล์ไม่มีคำตอบสุดท้าย · Claude ยึดอาการ (อาเจียนน้ำดี) เป็นหลัก เพราะ bilious vomiting ในทารก = malrotation with midgut volvulus จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ และฟิล์ม UGI ของ volvulus (duodenum อุดตันเป็นรูปจะงอยปาก) อาจดูคล้าย gastric outlet obstruction ได้",
 parts:S(
  B("PPT 9.1 Diagnosis.",3,{tags:["spot"],
   ans:"<b>Malrotation with midgut volvulus</b> · UGI study: <b>duodenojejunal (DJ) junction อยู่ขวาต่อแนวกลาง/ต่ำกว่า pylorus</b>, duodenum ไม่ข้ามแนวกลาง, <b>corkscrew sign</b> (jejunum บิดเป็นเกลียว) หรือ <b>beak sign</b>/อุดตันสมบูรณ์ที่ duodenum ส่วนสอง-สาม · เป็น <b>surgical emergency</b> → resuscitate, NG decompression, antibiotics → <b>emergency Ladd's procedure</b> (คลายบิดทวนเข็มนาฬิกา, ตัด Ladd's bands, ขยายฐาน mesentery, appendectomy, วางลำไส้เล็กด้านขวา ลำไส้ใหญ่ด้านซ้าย)",
   exp:"Ladd's bands = พังผืดจาก cecum ที่อยู่ผิดตำแหน่งพาดผ่าน duodenum ทำให้อุดตัน · ฐาน mesentery แคบ → บิดรอบ SMA → ลำไส้ขาดเลือดทั้งแถบใน 'ไม่กี่ชั่วโมง'",
   rubric:"ได้ = malrotation with midgut volvulus + ลักษณะ UGI + emergency Ladd's · บางส่วน = ตอบ pyloric stenosis",
   pts:[CR(P("Malrotation with midgut volvulus","volvulus","malrotation")),P("UGI: DJ junction ผิดตำแหน่ง, corkscrew / beak","dj","duodenojejunal","corkscrew","beak","midline","แนวกลาง"),P("Emergency Ladd's procedure","ladd","emergen","ฉุกเฉิน")]}),
  B("PPT 9.2 How do you distinguish this from hypertrophic pyloric stenosis?",3,{tags:["spot"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"<b>Hypertrophic pyloric stenosis</b>: อายุ 2–8 สัปดาห์ · <b>อาเจียนพุ่ง ไม่มีน้ำดี</b> หลังกินนม หิวตลอด · คลำได้ <b>olive mass</b> ใต้ชายโครงขวา, เห็น gastric peristalsis · lab: <b>hypochloremic hypokalemic metabolic alkalosis</b> · <b>US</b>: pyloric muscle thickness ≥3–4 mm, length ≥15–17 mm · UGI: <b>string sign</b>, shoulder sign · รักษา: แก้น้ำ/เกลือแร่ก่อน แล้วทำ <b>Ramstedt pyloromyotomy</b> (ไม่ฉุกเฉิน) · ส่วน <b>midgut volvulus</b>: <b>อาเจียนมีน้ำดี</b>, เกิดได้ทุกอายุ (ส่วนใหญ่ขวบปีแรก), อาจถ่ายเป็นเลือด/ท้องอืด/shock เมื่อลำไส้ขาดเลือด → ผ่าตัดฉุกเฉิน",
   exp:"หลักสำคัญ: น้ำดีในอาเจียนบอกว่าอุดตันต่ำกว่า ampulla of Vater → ไม่ใช่ pyloric stenosis",
   rubric:"ได้ = แยกด้วยอาเจียนมี/ไม่มีน้ำดี + olive/US criteria + metabolic alkalosis ของ HPS",
   pts:[CR(P("Bilious (volvulus) vs non-bilious (HPS) vomiting","น้ำดี","bilious","bile","non.?bilious")),P("HPS: olive mass, US ≥3–4 mm/≥15 mm, string sign","olive","string","\\bus\\b","ultrasound","thickness","3 mm","4 mm"),P("HPS: hypochloremic hypokalemic metabolic alkalosis","alkalosis","hypochlor","hypokal"),P("HPS → แก้ electrolyte ก่อน แล้ว pyloromyotomy (ไม่ฉุกเฉิน)","pyloromyotomy","ramstedt")]})
 ),
 interp:"อาเจียนมีน้ำดีในทารก = malrotation with midgut volvulus จนกว่าจะพิสูจน์ได้ว่าไม่ใช่ → UGI study ด่วน/ผ่าตัด",
 summary:["Bilious vomiting ในทารก = volvulus จนกว่าจะพิสูจน์ได้ว่าไม่ใช่","UGI: DJ junction ผิดตำแหน่ง, corkscrew, beak","Ladd's procedure: detorsion ทวนเข็ม, ตัด bands, ขยาย mesentery, appendectomy","HPS: non-bilious projectile, olive, alkalosis, US ≥3–4 mm, pyloromyotomy"]}),

/* ===== PowerPoint 10 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 10",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — painful swelling beside a fingernail: diagnosis and treatment",
 stem:`A photograph shows a red, swollen and tender nail fold of the index finger with a small collection of pus. Symptoms began 3 days after the patient trimmed a hangnail.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"10. รูป paronychia ถามว่าเป็นอะไร รักษายังไง",
 flag:NOIMG+" · ประวัติ/ลักษณะหนอง Claude เติม",imgAlt:"รูปนิ้วมือ เห็นบริเวณรอบเล็บ",
 parts:S(
  B("PPT 10.1 Diagnosis and treatment.",4,{tags:["spot"],key:"ไฟล์ระบุ: paronychia (ไม่มีเฉลยการรักษา)",
   ans:"<b>Acute paronychia</b> — การติดเชื้อของ nail fold (lateral/proximal) เชื้อ <b>S. aureus</b>, Streptococcus (และ anaerobe ในคนที่ดูดนิ้ว/กัดเล็บ) · <b>รักษา</b>: <b>ระยะยังไม่มีหนอง</b>: แช่น้ำอุ่น 3–4 ครั้ง/วัน ± ยาปฏิชีวนะ (cloxacillin/dicloxacillin, cephalexin; กัดเล็บ → amoxicillin-clavulanate) · <b>มีหนอง (abscess)</b>: <b>incision & drainage</b> ภายใต้ <b>digital block</b> — ยก/กรีด nail fold ตามแนวขนานเล็บ (ไม่ตัดเข้า nail matrix) · ถ้าหนองลามใต้เล็บ (subungual) → <b>ถอดเล็บบางส่วน (partial nail removal)</b> · ทำแผล แช่น้ำอุ่นต่อ · <b>Chronic paronychia</b> (&gt;6 สัปดาห์, มือเปียกบ่อย, Candida): หลีกเลี่ยงความชื้น, topical steroid ± antifungal",
   exp:"แยก felon (ติดเชื้อ pulp ปลายนิ้ว — ปวดตุบ ๆ ตึง ต้องกรีดระบายด้านข้างนิ้ว) และ herpetic whitlow (ตุ่มน้ำใส — ห้ามกรีด ให้ acyclovir)",
   rubric:"ได้ = acute paronychia + แช่น้ำอุ่น/ยาระยะแรก + I&D ใต้ digital block เมื่อมีหนอง + partial nail removal ถ้าหนองใต้เล็บ",
   pts:[CR(P("Acute paronychia","paronychia","เล็บขบ","ขอบเล็บอักเสบ")),P("ระยะแรก: แช่น้ำอุ่น ± antibiotic","แช่","warm","soak","antibiot","cloxacillin","cephalexin"),CR(P("มีหนอง → incision & drainage (digital block)","incision","drain","i&d","กรีด","ระบาย","digital block")),P("หนองใต้เล็บ → partial nail removal","nail removal","ถอดเล็บ","ตัดเล็บ","subungual")]})
 ),
 interp:"Paronychia: แยกระยะเซลลูไลติส (ยา/แช่น้ำอุ่น) กับระยะมีหนอง (กรีดระบาย) และแยก felon/herpetic whitlow",
 summary:["Acute paronychia: S. aureus/Strep","ไม่มีหนอง: แช่น้ำอุ่น ± anti-staph","มีหนอง: I&D ใต้ digital block · ใต้เล็บ → partial nail removal","Herpetic whitlow ห้ามกรีด · chronic → Candida/ความชื้น"]}),

/* ===== PowerPoint 11 ===== */
Co({page:258,sec:"PowerPoint",orig:"PPT 11",topic:"spot",sub:"Vascular/Ulcer",title:"Spot — discolored foot: describe the findings and key physical examination",seen:"คล้าย MDCU65 RoA PPT 9 (ให้อาการ → chronic arterial occlusion, PE?)",
 stem:`A photograph of the right foot of a 72-year-old man with atrial fibrillation is shown. The foot became painful and cold 6 hours ago.<br>1. Describe the findings.<br>2. What are the important physical examination findings to look for?`,
 gray:"11. รูปเหมือนเป็น arterial occulsion ให้บรรยายสิ่งที่พบแล้วก็การตรวจร่างกายที่สำคัญ",
 flag:NOIMG+" · ไฟล์ไม่ได้บอกว่าเป็น acute หรือ chronic — Claude เลือก acute arterial occlusion (ประวัติ AF, 6 ชม.) และใส่ลักษณะ chronic ไว้ในคำอธิบาย",imgAlt:"รูปเท้าขวาของชายสูงอายุ เทียบกับเท้าซ้าย",
 notes:"ผู้จดใช้คำว่า 'เหมือนเป็น' (ไม่แน่ใจ)",
 parts:S(
  B("PPT 11.1 Describe the findings.",3,{tags:["spot"],
   ans:"เท้าขวา<b>ซีด (pallor) หรือเป็นจ้ำเขียวม่วง (mottling/marbling)</b> เมื่อเทียบกับข้างซ้าย · ปลายนิ้วเขียวคล้ำ (cyanosis) · ไม่มีแผล/gangrene ชัด (ถ้าเป็นนาน: dry gangrene ปลายนิ้วสีดำขอบชัด) · ภาวะที่เข้าได้: <b>acute limb ischemia</b> จาก <b>arterial embolism</b> (AF) · (ลักษณะ <b>chronic</b> arterial insufficiency: ผิวมันบาง ขนร่วง เล็บหนา กล้ามเนื้อลีบ แผลที่ปลายนิ้ว/จุดกดทับ ขอบเรียบ (punched-out) ฐานซีด เจ็บมาก)",
   exp:"Mottling ที่กดแล้วจางลง (blanching) ยังกู้ได้ · fixed mottling (กดไม่จาง) = irreversible ischemia",
   rubric:"ได้ = บรรยายสี (pallor/mottling/cyanosis) เทียบข้างปกติ + สรุป arterial ischemia · บางส่วน = บรรยายไม่เทียบข้าง",
   pts:[CR(P("Pallor / mottling / cyanosis เทียบข้างปกติ","pallor","ซีด","mottl","marbl","จ้ำ","cyanos","เขียว","คล้ำ")),P("สรุป acute limb ischemia (embolism)","acute limb","ischemi","ขาดเลือด","embol"),P("ลักษณะ chronic: ขนร่วง ผิวมัน แผลขอบเรียบ gangrene","hair","ขนร่วง","shiny","ผิวมัน","punched","gangrene","เนื้อตาย")]}),
  B("PPT 11.2 Important physical examination.",4,{tags:["spot"],
   ans:"<b>6 P</b>: Pain, Pallor, Pulselessness, Poikilothermia (เย็น), Paresthesia, Paralysis · <b>คลำชีพจรทุกระดับเทียบสองข้าง</b>: femoral, popliteal, dorsalis pedis, posterior tibial (± handheld <b>Doppler</b> ฟังเสียง arterial/venous) · <b>อุณหภูมิ</b> และ <b>capillary refill</b> · <b>Sensory</b> (เสียความรู้สึกเริ่มที่ใต้ฝ่าเท้า/ระหว่างนิ้ว) และ <b>motor</b> (กระดกนิ้วเท้า) → จัด <b>Rutherford class</b> (I viable, IIa marginally threatened, IIb immediately threatened, III irreversible) · กล้ามเนื้อน่องกดเจ็บ/แข็ง (compartment) · <b>หัวใจ</b>: ชีพจรไม่สม่ำเสมอ (AF), murmur · ฟัง bruit, คลำ AAA · <b>ABI</b> · (chronic: Buerger's test — ยกขาซีด ห้อยขาแดงคล้ำ)",
   exp:"Rutherford IIb (sensory loss เกินปลายนิ้ว + motor อ่อนแรงเล็กน้อย) ต้อง revascularize ทันที · III (อัมพาต ชาสนิท ไม่มี Doppler signal ทั้ง arterial/venous) → amputation · ให้ heparin ทันทีเมื่อวินิจฉัย",
   rubric:"ได้ = 6P + ชีพจรทุกระดับเทียบสองข้าง + sensory/motor (Rutherford) + Doppler + หาต้นเหตุ (AF) · บางส่วน = คลำชีพจรอย่างเดียว",
   pts:[CR(P("คลำชีพจร femoral/popliteal/DP/PT เทียบสองข้าง","pulse","ชีพจร","femoral","poplit","dorsalis","tibial")),P("6 P / อุณหภูมิ / capillary refill","6 ?p","pallor","poikilo","เย็น","capillary","refill","อุณหภูมิ"),CR(P("Sensory + motor (Rutherford classification)","sensory","sensation","ความรู้สึก","motor","กำลัง","rutherford","paralys","paresthes")),P("Doppler / ABI","doppler","\\babi\\b","ankle.?brachial"),P("หาต้นเหตุ: AF, murmur, AAA","\\baf\\b","atrial fib","irregular","ไม่สม่ำเสมอ","murmur","aaa","aneurysm")]})
 ),
 interp:"ขาขาดเลือด: บรรยายสี/การเปลี่ยนแปลงเทียบข้างปกติ และตรวจชีพจรทุกระดับ + sensory/motor เพื่อจัดระดับความรุนแรง",
 summary:["6P: pain, pallor, pulseless, poikilothermia, paresthesia, paralysis","คลำชีพจรทุกระดับ + Doppler + ABI","Sensory/motor → Rutherford I / IIa / IIb / III","Embolism: หา AF/murmur · ให้ heparin ทันที"]})

);
})();
