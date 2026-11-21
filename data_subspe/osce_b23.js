(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC OSCE Surgery MDCU75 Rotate C" + "AC MEQ Surgery MDCU75 Rotate C" → MDCU75 RoC (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO75CQ = AC_75C_OSCEMEQ_Surgery_MDCU75_Rotate_C.pdf (6 หน้า) · หน้า 1 รายชื่อสถานี OSCE 12 สถานี + รายละเอียด · พาร์ท MEQ 13 ข้อ (จดได้ 11) → sec "Short Answers"
   ไฟล์เฉลย SO75CK = Key_75C_OSCE_Solution…By_JOB_MDCU76.pdf (เฉลยพิมพ์/ลายมือบนไฟล์โจทย์) — ครอป os75c_ko<n> / os75c_km<n>
   ไม่มีไฟล์ P'Ing สำหรับ OSCE (ไฟล์ P'Ing มีแค่ MCQ) */
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
const KF="ไฟล์ Key 75C (JOB): ";
const Co=o=>Object.assign({set:"MDCU75",ro:"RoC",file:"SO75CQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:1,orig:"1",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — vertical mattress sutures with instrument tie",kimg:["os75c_ko1"],
 stem:`A skin pad with a laceration, needle holder, toothed forceps, scissors and a nylon suture are provided. The examiner is observing.<br>1. Close the wound with two vertical mattress stitches and tie each with a surgeon's knot using the instruments.`,
 gray:"เย็บให้ดูหน่อย — ให้เย็บ vertical mattress 2 stitch + ผูก surgeon knot ด้วยเครื่องมือ (ระวังไม่ทัน)",
 sp:"หุ่นแผล · needle holder · toothed forceps · กรรไกร · nylon 3-0 · ผู้คุมดู: จับ needle holder ถูก, แทงเข็มตั้งฉาก, far-far แล้ว near-near ด้านเดียวกัน, ขอบแผล evert, surgeon's knot (ปมแรกพัน 2 รอบ) + ปมกลับทิศ, ทำเสร็จทัน 4 นาที",
 notes:"ผู้จดเตือนว่าเวลาไม่ค่อยทัน · ไฟล์ Key 75C ไม่มีเฉลยเพิ่ม",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("1.1 Vertical mattress technique.",5,{tags:["proc"],ans:"แทงเข็ม<b>ตั้งฉาก</b> · <b>far–far</b> (ห่างขอบ ~5–8 mm, ลึก) แล้วกลับ <b>near–near</b> (1–2 mm, ตื้น) ด้านเดียวกับที่แทงเข้า · ระยะสองข้างเท่ากัน · ได้ <b>wound edge eversion</b>",exp:"Vertical mattress ใช้เมื่อขอบแผลม้วนเข้า/ผิวหนาหรือหย่อน",rubric:"ได้ = ลำดับถูก + eversion",
   pts:[CR(P("Far-far then near-near","far","near")),P("Perpendicular needle, equal bites","perpendic","90","equal","เท่ากัน"),P("Edge eversion","evert")]}),
  B("1.2 Surgeon's knot by instrument tie.",5,{tags:["proc"],ans:"<b>Instrument tie</b>: ปมแรกพัน <b>2 รอบ</b> (surgeon's knot) → ปมที่ 2 พัน 1 รอบ<b>กลับทิศ</b> → ปมที่ 3 กลับทิศอีก (square) · ปมอยู่ข้างแผล ไม่รัดจนขอบซีด · ตัดไหมเหลือ ~5 mm",exp:"Surgeon's knot ป้องกันปมแรกคลายก่อนผูกปมสอง",rubric:"ได้ = double throw แรก + square ต่อ",
   pts:[CR(P("First throw double (surgeon's knot)","double","2 รอบ","surgeon")),P("Subsequent throws alternate direction","alternat","กลับทิศ","square"),P("Knot to the side, not too tight","side","ข้าง","not too tight")]})
 ),
 interp:"Vertical mattress + surgeon's knot",
 summary:["Vertical mattress: far-far near-near → eversion","Surgeon's knot: double first throw","Square knot ≥3 throws สำหรับ nylon","ตัดไหม: หน้า 5 วัน ลำตัว 7–10 วัน แขนขา 10–14 วัน"]}),

/* ===== OSCE 2 ===== */
Co({page:1,orig:"2",topic:"suture",sub:"Suture material",title:"Suture materials — choose the suture for each tissue",kimg:["os75c_ko2","os75c_ko2t"],
 stem:`Suture packets of catgut, nylon, silk, Vicryl and Prolene are provided. For each task, complete the sentence: "I will suture (this tissue) with (this suture), which in the picture is (size), and has (these properties)."<br>1. Ligating a vein<br>2. Anastomosing an artery<br>3. Suturing muscle<br>4. Closing skin`,
 gray:"ไหมนี้ใช้กับอะไร — ให้ template \"จะเย็บ (สิ่งเหล่านี้) ด้วยไหม (ชนิดนี้) ซึ่งในรูปคือ (เบอร์นี้) ที่มีคุณสมบัติ (ดังนี้)\" · ในข้อสอบจะเย็บ 1. เย็บปิด vein 2. เย็บต่อ artery 3. เย็บกล้ามเนื้อ 4. เย็บผิว · ช้อยส์ไหม = catgut, nylon, silk, vicryl, prolene · ใส่คุณสมบัติไหมเอง",
 notes:"ไฟล์ Key 75C (JOB) ลายมือ: vein → silk, artery → prolene, muscle → vicryl, skin → nylon (+ catgut/nylon/PDS ข้าง ๆ) · ไฟล์โจทย์แปะภาพตัวอย่างกระดาษคำตอบที่กรอกแล้ว (os75c_ko2t)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("2.1 Ligate a vein.",2,{tags:["suture"],key:KF+"silk",ans:"<b>Silk</b> (black braided silk) — natural, <b>multifilament (braided)</b>, <b>non-absorbable</b>, ผูกปมแน่นง่าย",exp:"ใช้ผูก/ligate หลอดเลือด",rubric:"ได้ = silk + คุณสมบัติ",pts:[CR(P("Silk","silk")),P("Braided, non-absorbable","braid","multifil","non-?absorb")]}),
  B("2.2 Anastomose an artery.",2,{tags:["suture"],key:KF+"prolene",ans:"<b>Prolene (polypropylene)</b> — synthetic, <b>monofilament</b>, <b>non-absorbable</b>, ผิวลื่น เนื้อเยื่อตอบสนองน้อย thrombogenic ต่ำ",exp:"Vascular anastomosis ใช้ 5-0 ถึง 7-0",rubric:"ได้ = prolene + คุณสมบัติ",pts:[CR(P("Prolene / polypropylene","prolene","polypropylene")),P("Monofilament, non-absorbable","mono","non-?absorb")]}),
  B("2.3 Suture muscle.",2,{tags:["suture"],key:KF+"vicryl",ans:"<b>Vicryl (polyglactin 910)</b> — synthetic, <b>multifilament braided</b>, <b>absorbable</b> (~60–90 วัน คงแรง ~3 สัปดาห์)",exp:"ใช้กับชั้นใต้ผิวหนัง กล้ามเนื้อ",rubric:"ได้ = vicryl + คุณสมบัติ",pts:[CR(P("Vicryl / polyglactin","vicryl","polyglactin")),P("Braided, absorbable","braid","multifil","absorb")]}),
  B("2.4 Close skin.",2,{tags:["suture"],key:KF+"nylon",ans:"<b>Nylon (Ethilon)</b> — synthetic, <b>monofilament</b>, <b>non-absorbable</b>, reaction น้อย ตัดไหมภายหลัง",exp:"Catgut = natural absorbable (เลิกใช้ในหลายประเทศ)",rubric:"ได้ = nylon + คุณสมบัติ",pts:[CR(P("Nylon","nylon","ethilon")),P("Monofilament, non-absorbable","mono","non-?absorb")]})
 ),
 interp:"Suture selection",
 summary:["Silk: braided non-absorbable — ligature","Prolene: mono non-absorbable — vascular, hernia, fascia","Vicryl: braided absorbable — subcutaneous, muscle, bowel","Nylon: mono non-absorbable — skin","Catgut: natural absorbable (plain/chromic)"]}),

/* ===== OSCE 3 ===== */
Co({page:1,orig:"3",topic:"hx",sub:"Breast",ex:1,title:"History taking — 3-month breast lump",kimg:["os75c_ko3a","os75c_ko3b"],
 stem:`A simulated patient presents with a breast lump for 3 months. The examiner is observing.<br>1. Take a focused history.`,
 gray:"ซักคนไข้ CA breast — ซักประวัติผู้ป่วยมาด้วยก้อนที่เต้านม 3 เดือน / มีผู้ป่วยจำลองให้ซัก",
 sp:"หญิงวัย 45–55 ปี คลำได้ก้อนเต้านมขวา 3 เดือน โตขึ้นเล็กน้อย ไม่เจ็บ ไม่มีน้ำออกจากหัวนม ประจำเดือนครั้งแรกอายุ 11 ยังไม่หมดประจำเดือน ไม่มีบุตร กินยาคุมนาน 10 ปี มารดาเป็นมะเร็งเต้านม",
 notes:"ไฟล์ Key 75C (JOB) สรุปหัวข้อ: character of mass, associated symptoms, past history, risk factors",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("3.1 Focused history.",10,{tags:["hx"],key:KF+"Character of mass: site, size ± โตเร็ว, shape, surface, consistency, mobility, tenderness · Associated: น้ำนมไหล, เจ็บเต้านม, คลำก้อนตรงรักแร้ · Past hx: เคยเป็นมาก่อน, การรักษา, family hx · Risk: early menarche, late menopause, อายุตอนมีบุตรคนแรก, ให้นมบุตร, ยาฮอร์โมน, alcohol, smoking",ans:"<b>ก้อน</b>: ตำแหน่ง, ขนาด, โตเร็ว/ช้า, เจ็บ, สัมพันธ์รอบเดือน · <b>อาการร่วม</b>: nipple discharge (เลือด), หัวนมบุ๋ม, ผิวเปลี่ยน, ก้อนรักแร้ · <b>อาการ metastasis</b>: ปวดกระดูก, ไอ เหนื่อย, น้ำหนักลด · <b>Risk factors</b>: menarche เร็ว, menopause ช้า, nulliparity/บุตรคนแรกอายุมาก, ไม่ให้นม, HRT/OCP, alcohol, radiation, <b>family history</b> (BRCA, ovarian) · ประวัติก้อนเต้านม/biopsy เดิม",exp:"ประวัติที่ดีต้องครอบคลุมก้อน อาการร่วม metastasis และ risk factors",rubric:"สัดส่วนตามหมวด",
   pts:[H("Lump",30),CR(P("Site, size, growth, pain","size","โต","site","pain","เจ็บ")),P("Relation to menstruation","menstru","รอบเดือน"),H("Associated",25),P("Nipple discharge / retraction","nipple","discharge","หัวนม"),P("Axillary lump / skin change","axill","รักแร้","skin"),P("Metastatic symptoms, weight loss","bone","weight","น้ำหนัก","metast"),H("Risk factors",45),CR(P("Family history of breast/ovarian cancer","family","ครอบครัว","brca")),P("Menarche/menopause","menarche","menopause"),P("Parity, breastfeeding","parity","บุตร","breast ?feed","ให้นม"),P("Hormone use","hormone","ocp","hrt","ยาคุม")]})
 ),
 interp:"Breast lump history",
 summary:["Triple assessment: clinical, imaging (mammogram/US), biopsy (core)","Risk: age, family history/BRCA, estrogen exposure","Red flags: hard fixed mass, skin/nipple change, axillary node"]}),

/* ===== OSCE 4 ===== */
Co({page:1,orig:"4",topic:"hx",sub:"Other history",ex:1,title:"History taking — lower urinary tract symptoms (written)",
 stem:`A 65-year-old man presents with a weak urinary stream for 6 months.<br>1. Write the history you would take.`,
 gray:"ซัก BPH เขียนตอบ (ผู้จดจดแค่ชื่อสถานี)",
 flag:"ไฟล์จดแค่ชื่อสถานี \"ซัก BPH เขียนตอบ\" — Claude แต่ง stem",
 notes:"ไม่มีรายละเอียดและไม่มีเฉลยในไฟล์ — Claude เฉลย",
 opinion:"ไฟล์ไม่มีรายละเอียด — Claude แต่งเอง ความมั่นใจปานกลาง",
 parts:S(
  B("4.1 History for suspected BPH.",8,{tags:["hx"],ans:"<b>Voiding (obstructive)</b>: hesitancy, weak stream, intermittency, straining, terminal dribbling, incomplete emptying · <b>Storage (irritative)</b>: frequency, urgency, nocturia, urge incontinence · คะแนน <b>IPSS</b>, quality of life · <b>Complications</b>: AUR, hematuria, UTI, นิ่ว, ไตวาย · <b>แยกโรค</b>: urethral stricture (STD/บาดเจ็บ), neurogenic bladder (DM, stroke, spinal), prostate cancer (ปวดกระดูก น้ำหนักลด), ยา (anticholinergic, decongestant) · ดื่มน้ำ/กาแฟ/แอลกอฮอล์",exp:"IPSS 0–7 mild, 8–19 moderate, 20–35 severe",rubric:"ได้ตามหมวด",
   pts:[CR(P("Voiding symptoms","hesitan","weak","straining","intermitt","incomplete")),P("Storage symptoms","frequen","urgen","nocturia"),P("Complications: retention, hematuria, UTI","retention","hematuria","uti","stone"),P("Differential: stricture, neurogenic, cancer, drugs","strictur","neurogenic","diabet","cancer","drug","ยา")]})
 ),
 interp:"LUTS history",
 summary:["LUTS: voiding vs storage","IPSS","Complications of BPH","Exclude stricture, neurogenic, cancer"]}),

/* ===== OSCE 5 ===== */
Co({page:1,orig:"5",topic:"proc",sub:"Sterile gloving/scrub",ex:1,proc:1,title:"Procedure — alcohol hand rub with explanation, then sterile gloving",kimg:["os75c_ko5"],
 stem:`The examiner is observing.<br>1. Perform hand hygiene with alcohol-based hand rub while explaining each step aloud.<br>2. Put on sterile gloves.`,
 gray:"ล้างมือ + ใส่ถุงมือ — ให้ล้างมือด้วยแอลกอฮอล์โดยให้พูดอธิบายไปด้วย เสร็จแล้วให้ใส่ถุงมือ sterile ให้ดู",
 notes:"ไฟล์ Key 75C ไม่มีเฉลยเพิ่ม",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("5.1 WHO alcohol hand rub.",5,{tags:["proc"],ans:"เทเจลเต็มอุ้งมือ ถู <b>20–30 วินาที</b> ตาม WHO 6 steps: ฝ่ามือถูฝ่ามือ → ฝ่ามือถูหลังมือ (สลับ) → ฝ่ามือถูฝ่ามือนิ้วสอดประสาน → หลังนิ้วถูฝ่ามือ (นิ้วล็อก) → ถูหัวแม่มือหมุน (สลับ) → ปลายนิ้วหมุนในฝ่ามือ (สลับ) · ปล่อยให้แห้งเอง",exp:"ล้างด้วยน้ำและสบู่เมื่อมือเปื้อนชัด/C. difficile",rubric:"ได้ = ครบ 6 ขั้น + เวลา",pts:[CR(P("All 6 WHO steps","6","six","ฝ่ามือ","thumb","fingertip","ปลายนิ้ว")),P("20–30 seconds, air dry","20","30","dry","แห้ง")]}),
  B("5.2 Sterile gloving (open technique).",5,{tags:["proc"],ans:"เปิดซองไม่ให้ปนเปื้อน · หยิบถุงมือข้างแรกที่<b>ขอบพับด้านใน (cuff)</b> ใส่โดยมือเปล่าแตะแค่ด้านใน · ใช้มือที่สวมแล้ว<b>สอดใต้ cuff ด้านนอก</b>ของถุงมืออีกข้างแล้วสวม · ห้ามมือที่สวมแตะผิวหนัง · คลี่ cuff · มืออยู่เหนือเอว",exp:"ถุงมือด้านนอกห้ามแตะผิวหนัง ด้านในห้ามแตะสิ่ง sterile",rubric:"ได้ = ไม่ contaminate",pts:[CR(P("No contamination of glove exterior","contamin","sterile","ไม่ปนเปื้อน")),P("First glove by inner cuff, second under outer cuff","cuff","inner","outer","ใต้")]})
 ),
 interp:"Hand hygiene + sterile gloving",
 summary:["WHO 6 steps, 20–30 s rub","Open gloving: skin-to-skin, glove-to-glove","Hands above waist"]}),

/* ===== OSCE 6 ===== */
Co({page:1,orig:"6",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and use",kimg:["os75c_ko6"],
 stem:`Five surgical instruments are on the table.<br>1. Name each instrument and describe how it is used: Deaver retractor, curved Mayo or Metzenbaum scissors, Kocher clamp, Volkmann curette, Babcock clamp.`,
 gray:"อุปกรณ์ผ่าตัด — จงบอกชื่อของแต่ละอย่าง + วิธีการใช้ของ: Deaver retractor · curve mayo scissor/ Metzenbaum · Kocher clamp · Volkman curette/ volkman spoon/ bone curette/ double ended curette · Babcock clamp",
 imgAlt:"เครื่องมือ 5 ชิ้นวางบนโต๊ะ: retractor ปากโค้งกว้าง, กรรไกรปลายโค้ง, clamp มีฟันที่ปลาย, ช้อนขูดสองปลาย, clamp ปากกลมไม่มีฟัน",flag:NOIMG,
 notes:"ไฟล์ Key 75C (JOB): Babcock ปากเป็นวงรี delicate จับ tubular structure (bowel, fallopian tube, appendix) · Kocher มีฟัน traumatic จับ fascia/tissue เหนียว · Deaver ปากยาวโค้ง ดึงอวัยวะในช่องท้อง · Mayo curved ตัด tissue หนา (fascia), straight ตัดไหม · Volkmann curette ขูด tissue/debris จากกระดูก",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("6.1 Name and use.",10,{tags:["inst"],key:KF+"Babcock: ปากวงรีไม่มีฟัน จับ bowel/appendix/fallopian tube · Kocher: มีฟัน traumatic จับ fascia · Deaver: ปากยาวโค้ง retract อวัยวะ · Mayo curved: ตัด tissue เหนียว (fascia) · Volkmann curette: ขูด debris จากกระดูก",ans:"<b>Deaver retractor</b>: hand-held retractor ปากโค้งกว้างยาว ดึงรั้งผนังหน้าท้อง/อวัยวะลึก (ตับ) · <b>Curved Mayo scissors</b>: ตัดเนื้อเยื่อหนา เช่น fascia (Metzenbaum = ปลายเรียวยาว ตัด/เลาะ tissue บาง) · <b>Kocher clamp</b>: clamp มี<b>ฟันที่ปลาย</b> + serrated จับเนื้อเยื่อเหนียว (fascia) — traumatic · <b>Volkmann curette</b>: ช้อนขูด เอา granulation/debris/sequestrum ออกจากกระดูก แผล หรือโพรงฝี · <b>Babcock clamp</b>: ปากกลมโปร่งไม่มีฟัน atraumatic จับ tubular structure (bowel, appendix, fallopian tube)",exp:"แยก traumatic (Kocher) vs atraumatic (Babcock)",rubric:"2 คะแนน/ชิ้น",
   pts:[P("Deaver retractor: retract abdominal wall/organs","deaver","retract"),P("Mayo/Metzenbaum scissors: cut tissue","mayo","metzenbaum","cut","ตัด"),P("Kocher: toothed clamp for tough tissue","kocher","tooth","fascia"),P("Volkmann curette: scrape bone/debris","volkman","curett","scrap","ขูด"),CR(P("Babcock: atraumatic, holds bowel/appendix","babcock","bowel","appendix","atraumatic"))]})
 ),
 interp:"Surgical instruments",
 summary:["Babcock atraumatic — bowel","Allis — tissue edges (มีฟันเล็ก)","Kocher — toothed tip","Deaver — deep retraction","Metzenbaum — delicate tissue, Mayo — heavy tissue"]}),

/* ===== OSCE 7 ===== */
Co({page:1,orig:"7",topic:"inst",sub:"Tube/Catheter",title:"Tubes — ICD, NG tube and proctoscope",kimg:["os75c_ko7"],
 stem:`Three devices are provided: an intercostal chest drain, a nasogastric tube and a proctoscope.<br>1. Name each device.<br>2. Give two uses (indications) for each.`,
 gray:"อุปกรณ์ (สายๆ ทั้งหลาย) — ให้ของมา 3 อย่าง ICD tube, NG tube, Proctoscope ถามว่าคืออะไรบ้าง / ตัวอย่างวิธีการใช้อย่างละ 2 วิธี",
 imgAlt:"สาย chest drain พลาสติกใสมีแถบทึบรังสี · สาย NG · กล้อง proctoscope โลหะพร้อม obturator",flag:NOIMG,
 notes:"ไฟล์ Key 75C (JOB): ICD — drain ลม หนอง เลือด (pleural effusion, hemothorax, pneumothorax, empyema) · NG — feeding (malnutrition), ประเมิน UGIB, gastric/intestinal decompression · Proctoscope — ดู lesion ในทวาร (fissure, hemorrhoid), ใช้ระหว่างผ่าตัดหา fistula tract, take tissue biopsy",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("7.1 Names.",3,{tags:["inst"],ans:"Intercostal chest drain (ICD, chest tube) · Nasogastric tube · Proctoscope",rubric:"1/ชิ้น",pts:[P("Chest drain","icd","chest","intercostal"),P("NG tube","ng","nasogastric"),P("Proctoscope","procto")]}),
  B("7.2 Two uses each.",6,{tags:["inst"],key:KF+"ICD: pneumothorax, hemothorax, pleural effusion, empyema · NG: feeding, UGIB evaluation, decompression · Proctoscope: ดู hemorrhoid/fissure, หา fistula, biopsy",ans:"<b>ICD</b>: pneumothorax, hemothorax, empyema, large/symptomatic effusion, หลังผ่าตัดทรวงอก · <b>NG</b>: gastric decompression (bowel obstruction, ileus), feeding/ให้ยา, gastric lavage, ประเมิน upper GI bleeding · <b>Proctoscope</b>: ตรวจ hemorrhoid/fissure/anal canal lesion, biopsy, rubber band ligation/sclerotherapy, หาช่องเปิด fistula",rubric:"1/ข้อ",
   pts:[CR(P("ICD: pneumothorax, hemothorax, empyema","pneumothorax","hemothorax","empyema","effusion")),P("NG: decompression, feeding, UGIB","decompress","feed","bleed","lavage"),P("Proctoscope: hemorrhoid, fissure, biopsy, banding","hemorrhoid","fissure","biopsy","band")]})
 ),
 interp:"Tubes and scopes",
 summary:["ICD: 5th ICS mid-axillary (safe triangle)","NG: ห้ามใน basilar skull fracture","Proctoscopy: hemorrhoid grading, banding"]}),

/* ===== OSCE 8 ===== */
Co({page:1,orig:"8",topic:"inst",sub:"Tube/Catheter",title:"Foley catheter — size, insertion and indications",kimg:["os75c_ko8"],
 stem:`A Foley catheter is on the table.<br>1. What is this and what size is it (read from the side of the tube)?<br>2. Explain how to use it.<br>3. Give examples of patients who need this device.`,
 gray:"Foley วางอยู่บนโต๊ะ 1. นี่คืออะไร ขนาดเท่าไหร่ (ดูข้างหลอด) 2. อธิบายวิธีการใช้งาน 3. จงยกตัวอย่างผู้ป่วยที่ต้องใช้งานอุปกรณ์นี้",
 imgAlt:"สาย Foley 2 ทาง ปลายมีบอลลูน ขนาดพิมพ์ข้างสาย (เช่น 16 Fr)",flag:NOIMG,
 notes:"ไฟล์ Key 75C (JOB): drain urine ในเช่น acute urinary retention · วัด urine output ในผู้ป่วย burn",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("8.1 Name and size.",2,{tags:["inst"],ans:"<b>Foley (indwelling urethral) catheter 2-way</b> · ขนาดเป็น <b>French (Fr)</b> = เส้นรอบวง mm (Fr ÷ 3 = เส้นผ่านศูนย์กลาง mm) เช่น 16 Fr · ข้างสายบอก balloon volume (เช่น 10 mL)",rubric:"ได้ = ชื่อ + Fr",pts:[CR(P("Foley catheter","foley")),P("French size","fr","french")]}),
  B("8.2 Insertion technique.",5,{tags:["inst","proc"],ans:"แจ้งผู้ป่วย · sterile technique · ทำความสะอาด (ชาย: retract foreskin) · lubricant/lidocaine gel · ชายจับองคชาตตั้งขึ้น 90° ใส่จนสุด (ถึง Y) · <b>รอปัสสาวะไหลก่อน</b>แล้วจึงเป่า balloon ด้วย <b>sterile water</b> ตามปริมาตร · ดึงกลับเบา ๆ · ต่อถุงปิด · ติดเทปที่ต้นขา/หน้าท้อง · ชาย: ดึง foreskin กลับ (กัน paraphimosis)",exp:"ห้ามเป่า balloon ใน urethra",rubric:"ได้ = sterile + รอ urine ก่อนเป่า",pts:[CR(P("Aseptic technique","steril","aseptic")),CR(P("Inflate balloon only after urine flow","urine","ปัสสาวะไหล","after")),P("Sterile water to balloon","water","น้ำกลั่น"),P("Reposition foreskin","foreskin","หนังหุ้ม","paraphimosis")]}),
  B("8.3 Indications.",3,{tags:["inst"],ans:"Acute urinary retention · วัด urine output (burn, shock, ICU) · perioperative (ผ่าตัดนาน/ pelvic) · ระบายในผู้ป่วย neurogenic/ไม่รู้สึกตัว · hematuria (3-way ใช้ irrigation)",rubric:"1/ข้อ",pts:[P("Urinary retention","retention","ปัสสาวะไม่ออก"),P("Monitor urine output","output","burn","shock"),P("Perioperative / immobile","operat","ผ่าตัด","immobil")]})
 ),
 interp:"Foley catheter",
 summary:["French = circumference mm","Contraindication: suspected urethral injury (blood at meatus)","Inflate after urine flows"]}),

/* ===== OSCE 9 ===== */
Co({page:1,orig:"9",topic:"img",sub:"Clinical photograph",title:"Penile mass — diagnosis and treatment",img:["os75c_q9"],kimg:["os75c_ko9"],
 stem:`An elderly man presents with this painless lesion on the penis for 1 month.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"Penile SCC — ผู้ป่วยชายแก่มาด้วยก้อนแบบนี้ที่อวัยวะเพศ เป็นมา 1 เดือน ไม่เจ็บ (รูปเดียวกับในสไลด์เรียน) 1. diagnosis 2. treatment",
 notes:"ไฟล์ Key 75C (JOB): Dx penile cancer (SCC) · Tx: biopsy ด้วย · partial/total penectomy · เคสที่ involve glans เล็กน้อยทำ circumcision ได้ · adjuvant: systemic chemotherapy / inguinal lymph node dissection",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("9.1 Diagnosis.",2,{tags:["img"],key:KF+"penile cancer (squamous cell carcinoma of the penis)",ans:"<b>Squamous cell carcinoma of the penis</b> (exophytic ulcerated mass ที่ glans/prepuce)",rubric:"ได้ = penile SCC",pts:[CR(P("Penile squamous cell carcinoma","scc","squamous","penile ca","carcinoma"))]}),
  B("9.2 Treatment.",5,{tags:["img"],key:KF+"biopsy · partial/total penectomy (เล็ก/prepuce: circumcision) · adjuvant chemo / inguinal LND",ans:"<b>Biopsy</b> ยืนยัน · primary: lesion เล็กที่ prepuce → circumcision/wide excision; glans → glans-sparing/glansectomy; ลุกถึง corpora → <b>partial penectomy</b> (เหลือยาวพอยืนปัสสาวะ) หรือ <b>total penectomy + perineal urethrostomy</b> · <b>inguinal LN</b>: คลำได้ → biopsy/inguinal LND; คลำไม่ได้ intermediate/high risk → DSNB/modified LND · advanced → chemo",rubric:"ได้ = biopsy + penectomy + LN",pts:[P("Biopsy","biopsy"),CR(P("Partial/total penectomy","penectomy")),P("Inguinal lymph node management","inguinal","lymph","lnd"),P("Circumcision for small preputial lesion","circumcis")]})
 ),
 interp:"Penile SCC",
 summary:["Risk: phimosis, HPV, smoking","Margin ปัจจุบันยอมรับ negative margin แคบ","Inguinal LN = prognostic factor"]}),

/* ===== OSCE 10 ===== */
Co({page:1,orig:"10",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — right lower quadrant pain",kimg:["os75c_ko10"],
 stem:`A man presents with right lower quadrant abdominal pain for 6 hours. Vital signs are within normal limits. The examiner is observing.<br>1. Perform a physical examination relevant to this complaint.`,
 gray:"ตรวจร่างกาย — ให้ตรวจร่างกายคนไข้ชาย อายุ … ปี มาด้วยปวดท้องด้านขวาล่าง เป็นเวลา 6 ชั่วโมง BP, BT, PR, RR WNL หมด (จำไม่ได้)",
 sp:"ชายวัยหนุ่ม ปวดท้องขวาล่าง 6 ชม. · tenderness/rebound ที่ McBurney point, Rovsing +, psoas +",
 notes:"ไฟล์ Key 75C ไม่มีเฉลยเพิ่ม",
 opinion:"ความมั่นใจสูง",
 parts:S(
  B("10.1 Abdominal examination for suspected appendicitis.",10,{tags:["pe"],ans:"แนะนำตัว ขออนุญาต ล้างมือ จัดท่านอนหงาย เปิดเผยหน้าท้องเหมาะสม · <b>Inspection</b>: distension, scar, การหายใจ · <b>Auscultation</b> bowel sounds · <b>Percussion</b> (percussion tenderness) · <b>Palpation</b>: เริ่มจากจุดไกลที่ปวด, light → deep, guarding, <b>McBurney point tenderness</b>, <b>rebound</b>, <b>Rovsing sign</b> · special: <b>psoas sign</b>, <b>obturator sign</b> · ตรวจ hernia orifices, ± genitalia (testis), <b>PR</b> (ระบุว่าจะทำ)",exp:"Alvarado score ช่วยประเมิน",rubric:"สัดส่วนตามขั้น",
   pts:[H("General",15),P("Consent, hand hygiene, exposure","consent","อนุญาต","hand","expos"),H("Abdominal exam",55),P("Inspection, auscultation, percussion","inspect","auscult","percuss"),CR(P("Palpate from away to painful area, McBurney tenderness","mcburney","palpat","คลำ")),P("Rebound / guarding","rebound","guard"),H("Special signs",30),P("Rovsing sign","rovsing"),P("Psoas and obturator signs","psoas","obturator"),P("Hernia orifices / genitalia / PR","hernia","testis","pr","rectal")]})
 ),
 interp:"RLQ pain examination",
 summary:["McBurney, rebound, Rovsing, psoas, obturator","Check hernia, testis","Alvarado score"]}),

/* ===== OSCE 11 ===== */
Co({page:1,orig:"11",topic:"img",sub:"CXR",title:"Pneumothorax",
 stem:`A 22-year-old tall, thin man has sudden right-sided chest pain and dyspnea. His chest radiograph shows a visceral pleural line with absent lung markings peripheral to it on the right, without mediastinal shift.<br>1. What is the diagnosis?<br>2. How would you manage him?`,
 gray:"Pneumothorax (ผู้จดจดแค่ชื่อสถานี)",
 flag:"ไฟล์จดแค่ชื่อสถานี \"Pneumothorax\" — Claude แต่ง stem และบรรยายภาพ",imgAlt:"CXR: เส้น visceral pleura ด้านขวา ไม่มี lung marking ด้านนอกเส้น ไม่มี mediastinal shift",
 notes:"ไม่มีรายละเอียด/เฉลยในไฟล์",
 opinion:"ไฟล์ไม่มีรายละเอียด — Claude แต่งเอง ความมั่นใจสูงตามโจทย์ที่แต่ง",
 parts:S(
  B("11.1 Diagnosis.",2,{tags:["img"],ans:"<b>Right primary spontaneous pneumothorax</b> (ไม่มี tension)",rubric:"ได้",pts:[CR(P("Spontaneous pneumothorax","pneumothorax"))]}),
  B("11.2 Management.",4,{tags:["img"],ans:"O₂ · ขนาดเล็ก/ไม่มีอาการ → observe · มีอาการ/ใหญ่ (≥2 cm ที่ hilum) → <b>needle aspiration</b> หรือ <b>chest drain</b> ที่ safe triangle (4th–5th ICS, anterior–mid axillary line) · tension → needle decompression ทันที · เลิกบุหรี่ · recurrent/persistent air leak → VATS bullectomy + pleurodesis",rubric:"ได้",pts:[CR(P("Aspiration or chest drain","aspirat","drain","icd","chest tube")),P("Safe triangle","safe triangle","5th","mid ?axillary"),P("VATS if recurrent / stop smoking","vats","recur","smok")]})
 ),
 interp:"Primary spontaneous pneumothorax",
 summary:["Tall thin young smoker — apical bleb","Tension = clinical diagnosis → decompress","Surgery: recurrence, persistent leak >5 days"]}),

/* ===== OSCE 12 ===== */
Co({page:1,orig:"12",topic:"path",sub:"Pathology/Staging",title:"Rectal cancer — M staging and TNM",kimg:["os75c_ko12"],
 stem:`Rectal cancer is resected with lymph nodes. Pathology shows invasion into the subserosal fibroadipose tissue, and all 27 lymph nodes are free of tumor.<br>1. What investigations would you send to determine the M stage?<br>2. If the M stage is negative, what is the TNM stage?`,
 gray:"TNM CA colon — Rectal cancer is resected with lymph nodes. Pathology results: subserosal fibroadipose tissue invasion, all 27 lymph nodes have no invasion 1. จะส่งอะไรเพื่อตรวจ M stage 2. ถ้า M stage negative จะสรุป TNM staging เป็นอะไร",
 notes:"ไฟล์ Key 75C (JOB): ชอบ metastasis ไป lung, liver, brain → CT brain + contrast, CXR, CT abdomen · T3N0M0 · แปะตาราง T/N",
 opinion:"เห็นด้วยกับ T3N0M0 · M staging ควรเป็น CT chest/abdomen/pelvis (CT brain ไม่ต้องทำ routine) ความมั่นใจสูง",
 parts:S(
  B("12.1 Investigations for M staging.",3,{tags:["path"],key:KF+"CT brain + contrast, CXR, CT abdomen (lung, liver, brain)",ans:"<b>CT chest, abdomen and pelvis with contrast</b> (ตับ ปอด) · <b>CEA</b> baseline · (CXR ถ้าไม่มี CT chest) · ทำ CT brain/bone scan เฉพาะเมื่อมีอาการ · rectal: MRI pelvis สำหรับ local staging",exp:"มะเร็งลำไส้กระจายไปตับ (portal) และปอด (rectum ส่วนล่าง ผ่าน systemic)",rubric:"ได้ = CT chest + abdomen",pts:[CR(P("CT chest/abdomen/pelvis","ct")),P("CEA","cea"),P("Liver and lung","liver","lung","ตับ","ปอด")]}),
  B("12.2 TNM stage.",2,{tags:["path"],key:KF+"T3N0M0",ans:"<b>T3N0M0</b> (stage IIA) — ลุกผ่าน muscularis propria ถึง subserosa/perirectal fat, ไม่มี LN",rubric:"ได้",pts:[CR(P("T3N0M0","t3 ?n0","iia","2a"))]})
 ),
 interp:"CRC staging",
 summary:["T1 submucosa · T2 muscularis propria · T3 subserosa/pericolorectal · T4a visceral peritoneum · T4b organ","N1 1–3 · N2 ≥4","≥12 nodes for adequate staging"]}),

SA({page:2,orig:"MEQ 1",num:"SA 1",sub:"Anorectal",title:"Short answer — perianal warts",kimg:["os75c_km1"],
 stem:`A photograph of perianal lesions is shown.<br>1. What is the diagnosis?<br>2. Name two additional physical examinations.<br>3. Describe treatment and additional investigations.`,
 gray:"[ภาพ anal condyloma acuminata] - Dx - PE อะไรเพิ่มบ้าง บอกมา 2 อย่าง - บอกวิธีรักษาและส่งตรวจเพิ่มเติม",
 flag:NOIMG,imgAlt:"รูปตุ่มเนื้อสีชมพูผิวขรุขระคล้ายกะหล่ำดอกหลายตุ่มรอบทวารหนัก",
 notes:"ไฟล์ Key 75C (JOB): PE เพิ่ม proctoscope, per rectal examination · Rx: TCA >70%, podophyllin, imiquimod (immunomodulator ใช้ในผู้ป่วย HIV, ทาเองได้), excision and coagulation, electrocauterization (รอยโรคหลายแห่ง/กว้าง) · ส่งตรวจเพิ่ม HIV test",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("1.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Condyloma acuminata</b> (anogenital warts, HPV 6/11)",rubric:"ได้",pts:[CR(P("Condyloma acuminata","condyloma","wart","hpv"))]}),
  B("1.2 Two additional examinations.",2,{tags:["spot"],key:KF+"proctoscope, PR",ans:"<b>Anoscopy/proctoscopy</b> (intra-anal warts) · <b>DRE</b> · ตรวจอวัยวะเพศ ± ตรวจภายใน (หญิง)",rubric:"1/ข้อ",pts:[CR(P("Anoscopy / proctoscopy","procto","anoscop")),P("DRE / genital exam","pr","rectal","genital","pv")]}),
  B("1.3 Treatment and investigations.",3,{tags:["spot"],key:KF+"TCA, podophyllin, imiquimod, excision/electrocautery · HIV test",ans:"รักษา: <b>TCA</b> 80–90%, podophyllin/podophyllotoxin, <b>imiquimod</b>, cryotherapy, <b>excision/electrocautery</b> (รอยโรคกว้าง/ใน anal canal) · ส่งตรวจ <b>anti-HIV</b>, VDRL/syphilis, STI อื่น · หญิง: cervical screening",rubric:"ได้ = รักษา + HIV",pts:[P("TCA / podophyllin / imiquimod","tca","trichloro","podophyll","imiquimod"),P("Excision / electrocautery","excis","cauter"),CR(P("HIV and other STI testing","hiv","syphilis","vdrl","sti"))]})
 ),
 interp:"Anogenital warts",
 summary:["HPV 6/11","Examine anal canal","Screen HIV/STI"]}),

SA({page:2,orig:"MEQ 2",num:"SA 2",sub:"Pediatric surgery",title:"Short answer — abdominal wall defect in a newborn",kimg:["os75c_km2"],
 stem:`A photograph of a newborn with bowel protruding through an abdominal wall defect to the right of an intact umbilical cord, without a covering sac, is shown.<br>1. What is the diagnosis?<br>2. What is the initial management?`,
 gray:"[ภาพ gastroschisis] 1. Dx 2. Initial management",
 flag:NOIMG,imgAlt:"รูปทารกแรกเกิดมีลำไส้ทะลักออกจากรูผนังหน้าท้องด้านขวาของสายสะดือ ไม่มีถุงหุ้ม",
 notes:"ไฟล์ Key 75C (JOB): initial = stabilize ผู้ป่วย — peripheral IV access, ใส่ครึ่งล่างของทารกใน bowel bag, OG tube decompression, evaluate/maintain airway",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("2.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Gastroschisis</b>",rubric:"ได้",pts:[CR(P("Gastroschisis","gastroschisis"))]}),
  B("2.2 Initial management.",4,{tags:["spot"],key:KF+"IV access, bowel bag, OG decompression, airway",ans:"ABC · <b>คลุมลำไส้ด้วย bowel bag/plastic wrap</b> (ครึ่งล่างตัว) จัดลำไส้ไม่ให้บิด · ห่มให้อุ่น · <b>OG/NG decompression</b> · <b>IV fluid</b> (ต้องการมาก 2–3 เท่า) · IV antibiotics · NPO · ส่งต่อศัลยแพทย์เด็ก → primary closure หรือ silo",rubric:"ได้ตามข้อ",pts:[CR(P("Cover bowel (bowel bag)","bag","cover","wrap","คลุม")),P("OG decompression","og","ng","decompress"),P("IV fluid, warmth","iv","fluid","warm","อุ่น"),P("Antibiotics / refer","antibio","refer")]})
 ),
 interp:"Gastroschisis",
 summary:["Right of cord, no sac","Bowel bag, fluid, OG","Silo or primary closure"]}),

SA({page:2,orig:"MEQ 3",num:"SA 3",sub:"Mammogram",title:"Short answer — mammogram with a right breast mass",kimg:["os75c_km3"],
 stem:`A mammogram shows a mass in the right upper outer quadrant with several enlarged axillary lymph nodes.<br>1. Name the investigation and its standard views.<br>2. Describe the findings.<br>3. What is the most likely diagnosis?<br>4. Name two further investigations.`,
 gray:"[ภาพ mammogram มีก้อนอยู่ right upper outer quadrant กับมี lymph node โตเป็นกระจุกๆ หลายๆ อันนิดหน่อย] - บอกวิธีการตรวจและบอก view - อ่าน finding - most likely diagnosis - จะส่งตรวจอะไรเพิ่มเติมบ้าง สองอย่าง",
 flag:NOIMG,imgAlt:"Mammogram CC และ MLO ของเต้านมขวา มีก้อนขอบไม่เรียบที่ upper outer quadrant และต่อมน้ำเหลืองรักแร้โตหลายต่อม",
 notes:"ไฟล์ Key 75C (JOB): CC, MLO · finding: well-defined หรือ spiculated mass, size, quadrant, microcalcification, skin/nipple retraction, LN · USG LN: round, loss of fatty hilum, increased cortical thickness · core needle biopsy + axillary lymph node dissection · แปะแผนภูมิ imaging ตามอายุ",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("3.1 Investigation and views.",2,{tags:["spot"],key:KF+"Mammogram: CC, MLO",ans:"<b>Mammogram</b> — <b>craniocaudal (CC)</b> และ <b>mediolateral oblique (MLO)</b>",rubric:"ได้",pts:[CR(P("Mammogram CC and MLO","cc","mlo","craniocaudal","oblique"))]}),
  B("3.2 Findings.",2,{tags:["spot"],ans:"Mass ที่ <b>right upper outer quadrant</b> ขอบไม่เรียบ/spiculated ± microcalcification · <b>axillary lymphadenopathy</b> หลายต่อม",rubric:"ได้",pts:[P("Irregular/spiculated mass RUOQ","spicul","irregular","mass","upper outer"),P("Axillary lymph nodes","axill","lymph")]}),
  B("3.3 Most likely diagnosis.",1,{tags:["spot"],ans:"<b>Carcinoma of the right breast with axillary node metastasis</b> (BI-RADS 5)",rubric:"ได้",pts:[CR(P("Breast cancer","cancer","carcinoma","malignan"))]}),
  B("3.4 Two further investigations.",2,{tags:["spot"],key:KF+"core needle biopsy + ALND",ans:"<b>Core needle biopsy</b> ของก้อน (± ER/PR/HER2) · <b>US axilla + FNA/core biopsy</b> ของ LN · staging (CXR/CT, bone scan, LFT) ตาม stage",rubric:"1/ข้อ",pts:[CR(P("Core needle biopsy","core","biopsy")),P("Axillary US / node biopsy","axill","us","ultrasound","node")]})
 ),
 interp:"Suspicious breast mass",
 summary:["Mammogram views CC + MLO","Suspicious: spiculated, microcalcification","Triple assessment → core biopsy"]}),

SA({page:2,orig:"MEQ 4",num:"SA 4",sub:"Acute abdomen series",title:"Short answer — plain abdominal films after cholecystectomy",kimg:["os75c_km4"],
 stem:`A patient who previously had a cholecystectomy now has abdominal pain. Supine and upright abdominal radiographs are shown.<br>1. What are these films called?<br>2. Describe the findings.<br>3. What is the most common cause?<br>4. Outline the treatment.`,
 gray:"ผู้ป่วยเคยผ่าตัดถุงน้ำดี ครั้งนี้มาด้วยปวดท้อง ให้ภาพ plain film abdomen supine กับ upright มา เป็น dilated bowel มี step ladder pattern 1. ภาพถ่ายเรียกว่าอะไร ท่าอะไร 2. จงบรรยายภาพ 3. Most common cause 4. วางแผนการรักษา",
 flag:NOIMG,imgAlt:"Plain abdomen supine และ upright: ลำไส้เล็กโป่งหลายห่วงตรงกลาง step ladder pattern และ air-fluid level ระดับต่างกัน ไม่มีลมใน colon",
 notes:"ไฟล์ Key 75C (JOB): most common cause adhesion band · ลอง conservative treatment ก่อน เพราะไม่มี sign ของ strangulation/ischemia → NPO + TPN + decompression · crystalloid resuscitation ชดเชย fluid loss + third space",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("4.1 Name of films.",1,{tags:["spot"],ans:"<b>Acute abdomen series</b>: plain abdomen <b>supine</b> และ <b>upright</b> (± upright CXR)",rubric:"ได้",pts:[CR(P("Plain abdomen supine and upright","supine","upright","acute abdomen"))]}),
  B("4.2 Findings.",2,{tags:["spot"],ans:"ลำไส้เล็กโป่ง (&gt;3 cm) ตรงกลางท้อง valvulae conniventes · <b>step-ladder pattern</b> · air-fluid levels ต่างระดับใน loop เดียวกัน · ลมใน colon น้อย/ไม่มี",rubric:"ได้",pts:[CR(P("Dilated small bowel","dilat","small bowel")),P("Step-ladder, air-fluid levels","step","air-?fluid","ladder")]}),
  B("4.3 Most common cause.",1,{tags:["spot"],key:KF+"Adhesion band",ans:"<b>Postoperative adhesion</b> (เคยผ่าตัดท้อง)",rubric:"ได้",pts:[CR(P("Adhesion","adhesion","พังผืด"))]}),
  B("4.4 Treatment.",3,{tags:["spot"],key:KF+"conservative ก่อน (ไม่มี strangulation): NPO, decompression, crystalloid",ans:"ไม่มี strangulation → <b>conservative</b>: NPO, <b>NG decompression</b>, <b>IV crystalloid</b> แก้ electrolyte, Foley วัด urine output, ± water-soluble contrast (Gastrografin) challenge · <b>ผ่าตัด (adhesiolysis)</b> เมื่อมี peritonitis/strangulation หรือไม่ดีขึ้นใน 48–72 ชม.",rubric:"ได้",pts:[CR(P("NPO, NG decompression, IV fluid","npo","ng","decompress","fluid")),P("Surgery if strangulation or failure","strangul","surgery","adhesiolysis","ผ่าตัด"),P("Gastrografin challenge","gastrografin","water-?soluble")]})
 ),
 interp:"Adhesive small bowel obstruction",
 summary:["Adhesion = most common cause of SBO","Conservative if no strangulation","Gastrografin: diagnostic + therapeutic"]}),

SA({page:2,orig:"MEQ 5",num:"SA 5",sub:"Plastic/Skin/Burn",title:"Short answer — sacral pressure ulcer",kimg:["os75c_km5"],
 stem:`A bedridden patient after an accident has a full-thickness ulcer over the buttock.<br>1. What is the diagnosis?<br>2. Prolonged lying in which position causes it, and over which bony structure?`,
 gray:"คนไข้ประสบอุบัติเหตุทำให้กลายเป็น bedridden วันนี้มาด้วยแผลที่ก้น ให้ภาพคนไข้ bedsore grade III ที่ก้นมา 1. วินิจฉัย 2. เกิดจากการอยู่ในท่าอะไรนานๆ และเกิดจาก structure ใด",
 flag:NOIMG,imgAlt:"แผลกดทับลึกถึงชั้นไขมันบริเวณกระดูกก้นกบ",
 notes:"ไฟล์ Key 75C (JOB): bedridden → อยู่ในท่า supine เกิดจาก sacrum · นั่งนาน ๆ = ischial tuberosity",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("5.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Pressure ulcer (pressure injury) stage 3</b> บริเวณ sacrum",rubric:"ได้",pts:[CR(P("Pressure ulcer / bedsore","pressure","bedsore","decubitus"))]}),
  B("5.2 Position and structure.",2,{tags:["spot"],key:KF+"supine → sacrum (นั่งนาน = ischial tuberosity)",ans:"นอนหงาย (<b>supine</b>) นาน → กดทับ <b>sacrum</b> (และ coccyx) · นั่งนาน → ischial tuberosity · นอนตะแคง → greater trochanter",rubric:"ได้",pts:[CR(P("Supine — sacrum","supine","sacrum","sacral","นอนหงาย")),P("Sitting — ischial tuberosity","ischi")]})
 ),
 interp:"Pressure ulcer",
 summary:["Sacrum (supine), ischium (sitting), trochanter (lateral), heel","Stage 3 full thickness to fat","Off-loading q2h"]}),

SA({page:2,orig:"MEQ 6",num:"SA 6",sub:"Plastic/Skin/Burn",title:"Short answer — pigmented lesion on the nose",img:["os75c_qm6"],kimg:["os75c_km6"],
 stem:`A photograph of a lesion on the nose of an elderly man is shown.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"ภาพ malignant melanoma ที่จมูก 1. Dx 2. Tx",
 notes:"ไฟล์ Key 75C (JOB): Surgical treatment of skin cancer — primary wide excision (BCC ขอบ 0.5 cm, SCC 1 cm, MM ตาม depth) หรือ Mohs micrographic surgery (สงวน tissue เช่นหน้า, frozen section, cure rate สูง แต่ใช้เวลาและแพง)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจปานกลาง (วินิจฉัยจากภาพ)",
 parts:S(
  B("6.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Malignant melanoma</b> ที่จมูก",rubric:"ได้",pts:[CR(P("Malignant melanoma","melanoma"))]}),
  B("6.2 Treatment.",3,{tags:["spot"],key:KF+"wide excision ตาม depth หรือ Mohs",ans:"<b>Excisional biopsy</b> (margin 1–3 mm) เพื่อวัด <b>Breslow thickness</b> → <b>wide local excision</b> ตามความลึก (in situ 0.5–1 cm, ≤1 mm 1 cm, 1–2 mm 1–2 cm, &gt;2 mm 2 cm) · ใบหน้าอาจใช้ staged excision/Mohs ใน lentigo maligna · <b>SLNB</b> เมื่อ ≥T1b · ปิดแผลด้วย local flap/graft",rubric:"ได้",pts:[CR(P("Wide local excision by Breslow thickness","wide","excis","breslow")),P("Excisional biopsy first","biopsy"),P("Sentinel lymph node biopsy","sentinel","slnb")]})
 ),
 interp:"Facial melanoma",
 summary:["Breslow thickness guides margin","SLNB ≥0.8 mm or ulcerated","Mohs for lentigo maligna on face"]}),

SA({page:3,orig:"MEQ 7",num:"SA 7",sub:"Ultrasound",title:"Short answer — gallbladder ultrasound",kimg:["os75c_km7"],
 stem:`An ultrasound image of the gallbladder with a single stone is shown.<br>1. Describe the findings.<br>2. What is the diagnosis?<br>3. What is the treatment?`,
 gray:"ภาพ ultrasound gall stone โง่ๆ อันนึง 1. จงบรรยาย 2. Dx 3. Tx",
 flag:NOIMG,imgAlt:"US: hyperechoic ก้อนในถุงน้ำดี มี posterior acoustic shadow",
 notes:"ไฟล์ Key 75C (JOB): distended GB, thickened wall, pericholecystic fluid, hyperechoic mass with posterior acoustic shadow · Rx: asymptomatic ไม่ผ่า (ยกเว้น >2 cm, cirrhosis, DM, porcelain GB, risk CA, จะไปอยู่ที่ห่างไกล) · symptomatic → cholecystectomy",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("7.1 Findings.",2,{tags:["spot"],ans:"<b>Hyperechoic</b> structure ในถุงน้ำดี มี <b>posterior acoustic shadow</b> เคลื่อนตามท่า (± ผนังหนา, pericholecystic fluid ถ้าอักเสบ)",rubric:"ได้",pts:[CR(P("Hyperechoic with posterior shadow","hyperecho","shadow")),P("Wall thickening / pericholecystic fluid","wall","pericholecyst")]}),
  B("7.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Cholelithiasis</b> (± acute cholecystitis ถ้ามีผนังหนา/น้ำรอบ)",rubric:"ได้",pts:[CR(P("Gallstone","gallstone","cholelith"))]}),
  B("7.3 Treatment.",2,{tags:["spot"],key:KF+"asymptomatic: observe (ยกเว้นข้อบ่งชี้) · symptomatic: cholecystectomy",ans:"<b>Symptomatic → laparoscopic cholecystectomy</b> · asymptomatic → observe ยกเว้น stone &gt;2–3 cm, porcelain GB, polyp ≥1 cm, sickle cell ฯลฯ",rubric:"ได้",pts:[CR(P("Laparoscopic cholecystectomy if symptomatic","cholecystectomy")),P("Observe if asymptomatic","asymptom","observe")]})
 ),
 interp:"Gallstone",
 summary:["Echogenic focus + shadow + mobility","Symptomatic → LC","Asymptomatic → expectant"]}),

SA({page:3,orig:"MEQ 8",num:"SA 8",sub:"Vascular/Ulcer",title:"Short answer — gangrene of the right foot with Doppler table",kimg:["os75c_km8"],
 stem:`A photograph shows dry gangrene of the right little toe and the medial side of the right foot, with a table of arterial Doppler flow in the leg.<br>1. Describe the lesion.<br>2. What is the diagnosis and the likely level of arterial disease?`,
 gray:"ภาพ gangrene ที่นิ้วก้อยกับด้านในเท้าข้างขวา แล้วให้ตาราง blood flow ของเส้นเลือดที่เท้ามา 1. จงบรรยาย 2. Dx และ location (น่าจะหมายถึงเส้นเลือดไหน) 3. -",
 flag:NOIMG+" · ไม่มีตาราง Doppler ในไฟล์",imgAlt:"นิ้วก้อยเท้าขวาและด้านในเท้าดำแห้ง ขอบเขตชัด",
 notes:"ไม่มีเฉลยในไฟล์ Key 75C สำหรับข้อนี้ · ผู้จดจำข้อ 3 ไม่ได้",
 opinion:"ไฟล์ไม่มีเฉลยและไม่มีตาราง — Claude เฉลย ความมั่นใจต่ำเรื่องระดับหลอดเลือด",
 parts:S(
  B("8.1 Describe.",2,{tags:["spot"],ans:"<b>Dry gangrene</b>: เนื้อเยื่อดำ แห้ง ขอบเขต (line of demarcation) ชัด ที่นิ้วก้อยและด้านในเท้าขวา",rubric:"ได้",pts:[CR(P("Dry gangrene with demarcation","dry","gangrene","demarcat"))]}),
  B("8.2 Diagnosis and level.",3,{tags:["spot"],ans:"<b>Chronic limb-threatening ischemia (Rutherford 6)</b> จาก peripheral arterial disease · ระดับโรคอ่านจากตาราง Doppler — จุดที่สัญญาณเปลี่ยนจาก triphasic เป็น monophasic/ไม่มี เช่น <b>femoropopliteal หรือ infrapopliteal (tibial) disease</b> (พบบ่อยในเบาหวาน)",rubric:"ได้ = CLTI + บอกระดับตามตาราง",pts:[CR(P("Critical limb ischemia / PAD","ischemi","pad","peripheral arter","clti")),P("Level from Doppler (femoropopliteal / tibial)","femor","poplit","tibial","infrapop")]})
 ),
 interp:"CLTI with dry gangrene",
 summary:["Rutherford 5–6 = tissue loss","ABI, toe pressure, duplex","Revascularization then minor amputation"]}),

SA({page:3,orig:"MEQ 9",num:"SA 9",sub:"Imaging film",title:"Short answer — mandible fracture on three views",kimg:["os75c_km9"],
 stem:`Three radiographs (PA, Waters and panoramic views) show a fracture of the mandibular ramus.<br>1. Name each view.<br>2. What is the diagnosis?<br>3. What is the treatment?`,
 gray:"ให้ภาพมาสาม view PA, Water, Panoramic เห็น mandible ramus หัก 1. แต่ละภาพชื่อ view อะไร 2. Dx 3. Tx",
 flag:NOIMG,imgAlt:"ภาพ PA mandible, Waters view และ panoramic เห็นรอยหักที่ ramus ของ mandible",
 notes:"ไฟล์ Key 75C (JOB): PA mandible, Water's view, Panoramic · Tx ORIF (plate and screws) + MMF (maxillomandibular fixation)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("9.1 Views.",2,{tags:["spot"],ans:"<b>PA mandible</b>, <b>Waters (occipitomental)</b> view, <b>Panoramic (orthopantomogram)</b>",rubric:"ได้",pts:[CR(P("PA, Waters, panoramic","pa","water","panoram"))]}),
  B("9.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Fracture of the mandibular ramus</b>",rubric:"ได้",pts:[CR(P("Mandible ramus fracture","mandib","ramus"))]}),
  B("9.3 Treatment.",2,{tags:["spot"],key:KF+"ORIF + MMF",ans:"<b>ORIF</b> (miniplates and screws) และ/หรือ <b>maxillomandibular fixation (MMF)</b> เพื่อคืน occlusion · ATB ถ้า open fracture",rubric:"ได้",pts:[CR(P("ORIF and/or MMF","orif","mmf","maxillomandibular","plate"))]})
 ),
 interp:"Mandible fracture",
 summary:["OPG best plain film","Restore occlusion","ORIF/MMF"]}),

SA({page:3,orig:"MEQ 10",num:"SA 10",sub:"Neuro motor/reflex",title:"Short answer — hip flexion strength testing",kimg:["os75c_km10","os75c_km10r"],
 stem:`A video shows an elderly woman with back pain sitting on a chair and flexing each hip against resistance. She can lift the left knee against full resistance; she can lift the right knee against gravity but not against resistance.<br>1. Which muscle is being tested?<br>2. Grade the power on each side.`,
 gray:"คุณป้ามาด้วยปวดหลัง ให้คลิปตรวจร่างกายมาเป็นคุณป้านั่งอยู่บนเก้าอี้แล้วงอเข่าขึ้น ยกเข่าซ้ายได้ ต้านได้ ยกเข่าขวาได้แต่ต้านแรงไม่ได้ 1. ตรวจกล้ามเนื้ออะไร 2. ให้ grade ทั้งสองข้าง",
 flag:"เดิมเป็นคลิปวิดีโอ — ไม่มีในไฟล์ บรรยายใน stem",
 notes:"ไฟล์ Key 75C (JOB): Iliopsoas muscle · ซ้าย grade V / ขวา grade III · ไฟล์โจทย์แปะตาราง root values (os75c_km10r)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("10.1 Muscle.",1,{tags:["spot"],ans:"<b>Iliopsoas</b> (hip flexion; L1–L3, หลัก L2)",rubric:"ได้",pts:[CR(P("Iliopsoas","iliopsoas","psoas","hip flex"))]}),
  B("10.2 Grade.",2,{tags:["spot"],key:KF+"ซ้าย V / ขวา III",ans:"ซ้าย <b>grade 5</b> (ต้านแรงได้เต็ม) · ขวา <b>grade 3</b> (ยกต้านแรงโน้มถ่วงได้ แต่ต้านแรงผู้ตรวจไม่ได้)",rubric:"ได้",pts:[CR(P("Left 5, right 3","5","3","v","iii"))]})
 ),
 interp:"MRC power grading",
 summary:["MRC 0 none · 1 flicker · 2 gravity eliminated · 3 against gravity · 4 some resistance · 5 normal","Hip flexion L2–3","Knee extension L3–4"]}),

SA({page:3,orig:"MEQ 11",num:"SA 11",sub:"Neuro motor/reflex",title:"Short answer — brachioradialis reflex",kimg:["os75c_km11","os75c_km11r"],
 stem:`A picture shows the examiner tapping the distal radius to elicit a reflex.<br>1. Which muscle is involved?<br>2. Which nerve root is tested?`,
 gray:"ให้ภาพเคาะ brachioradialis reflex 1. ถาม muscle 2. ถาม nerve root",
 flag:NOIMG,imgAlt:"ภาพเคาะเหนือ distal radius ขณะแขนวางพักงอศอก",
 notes:"ไฟล์ Key 75C (JOB): Brachioradialis muscle · C6 · ไฟล์โจทย์แปะตารางระดับ root (os75c_km11r)",
 opinion:"เห็นด้วยกับเฉลยในไฟล์ ความมั่นใจสูง",
 parts:S(
  B("11.1 Muscle.",1,{tags:["spot"],ans:"<b>Brachioradialis</b>",rubric:"ได้",pts:[CR(P("Brachioradialis","brachioradialis"))]}),
  B("11.2 Root.",1,{tags:["spot"],ans:"<b>C6</b> (C5–C6)",rubric:"ได้",pts:[CR(P("C6","c6","c5"))]})
 ),
 interp:"Brachioradialis reflex",
 summary:["Biceps C5 · brachioradialis C6 · triceps C7","Knee L4 · ankle S1"]})
);
})();
