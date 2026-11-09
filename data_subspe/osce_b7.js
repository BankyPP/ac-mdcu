(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC ศัลย์ → MDCU66 RoC (Rotate 3/2556)
   ไฟล์ GSUP4K (01_5_MCQs_Key_4.pdf) หน้า 247–249 หัว "OSCE ข้อละ 4 นาที ไม่มีข้อพัก" · อยู่ในบล็อกหน้า 241–249 (ปก SURGERY → General Surgery MCQ → Subspecialty MCQ → OSCE) ที่ไม่มีหัวปี
     เรียงหลัง Rotate 2/2556 และก่อน "AC General Surgery Rotate 4/2556" (หน้า 250) จึงถือเป็น Rotate 3/2556 · ไม่พบหลักฐานปี/rotation อื่นในหน้า 241–249 (หน้า 240 เป็นหน้าข้อความอีเมล "Sent from my iPad" ไม่มีปี)
   รูปแบบไฟล์ = recall พิมพ์ 13 ข้อ คำตอบอยู่ในวงเล็บท้ายคำถาม/รายการใต้ข้อ + ไฮไลต์เหลืองและเส้นปากกาแดงหน้า 249 · สถานี 1, 5, 10, 13 ไม่มีเฉลย
   รูปในไฟล์: ฟิล์ม IVP ข้อ 6 (มีป้าย "Tumour" ชี้รอยโรค → เก็บเป็นรูปเฉลย os66c_k6 โจทย์ใช้ NOIMG), KUB ข้อ 7 (os66c_7), esophagogram ข้อ 8 (os66c_8) · ข้อ 4, 9, 11, 12 ไม่มีรูป (NOIMG) — ข้อ 9, 11, 12 ไฟล์ระบุชื่อเครื่องมือ/ไหมไว้ในคำถาม ซึ่งคือคำตอบ จึงไม่ใส่ชื่อในโจทย์
   ข้อ 12 ไฟล์พิมพ์ข้อย่อยเป็น 14.1–14.4 (พิมพ์ผิด) → ใช้ 12.1–12.4 */
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
const Co=o=>Object.assign({set:"MDCU66",ro:"RoC",file:"GSUP4K",sec:"OSCE",opinion:""},o);
QB.push(

/* ===== สถานี 1 ===== */
Co({page:247,orig:"1",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — two skin stitches with two knot techniques",seen:"คล้าย MDCU67 RoC OSCE 1 (vertical mattress + one-hand tie)",
 stem:`A suture pad and a pre-threaded needle are provided. Place <b>two vertical mattress stitches</b>.<br>1.1 Tie the first stitch with a <b>surgeon's knot using instruments</b>.<br>1.2 Tie the second stitch with a <b>square knot using a one-handed technique</b>.`,
 gray:"ข้อละ 4 นาที ไม่มีข้อพัก · 1. เย็บ vertical mattress 2 stitches (หมอนเหลือง ร้อยไหมไว้ให้แล้ว) 1.1 stitch แรกผูก surgical knot ด้วยเครื่องมือ 1.2 stitch ที่สอง square knot ด้วย one hand technique",
 sp:"สถานีหุ่น มีอาจารย์ดู 4 นาที · หมอนฝึกเย็บสีเหลือง เข็มร้อยไหมไว้แล้ว needle holder, forceps, กรรไกร · ผู้คุมดู: การจับเครื่องมือ, ระยะ far–far/near–near ทั้ง 2 เข็ม, stitch แรก surgeon's knot ด้วยเครื่องมือ (throw แรกพัน 2 รอบ), stitch ที่สอง square knot ด้วยมือเดียว, ปมไม่หลวม ขอบแผล evert",
 notes:"ไม่มีเฉลยในไฟล์ (มีเฉพาะคำสั่ง)",
 parts:S(
  B("1.1 First stitch: vertical mattress, tied with an instrument surgeon's knot.",5,{tags:["proc"],
   ans:"จับ needle holder แบบ thumb–ring, จับเข็มที่ 1/3–1/2 จากโคน · <b>Vertical mattress</b>: <b>far–far</b> (ห่างขอบ 5–10 mm, ลึก) แล้วย้อน <b>near–near</b> (1–2 mm, ตื้น) แทงเข็มตั้งฉาก หมุนตามความโค้ง · <b>Surgeon's knot ด้วยเครื่องมือ</b>: throw แรก<b>พันไหมรอบ needle holder 2 รอบ</b> (double throw กันปมคลาย) → throw ที่สองพัน 1 รอบ<b>สลับทิศ</b> → throw ที่สามสลับทิศอีกครั้ง (square) · ปมวางข้างแผล ขอบแผล evert ไม่รัดแน่น · ตัดหาง ~5 mm",
   exp:"Surgeon's knot = double throw แรก เพิ่มแรงเสียดทานให้ปมแรกไม่คลายระหว่างผูก throw ต่อไป",
   rubric:"ได้เต็ม = far–far/near–near ถูก + double throw แรก + throw ต่อไปสลับทิศ",
   pts:[H("เย็บ",50),CR(P("Far–far แล้ว near–near","far","near","ไกล","ใกล้")),P("เข็มตั้งฉาก หมุนตามความโค้ง ขอบแผล evert","ตั้งฉาก","perpendicular","evert","curve","ความโค้ง"),
    H("ผูก",50),CR(P("Throw แรกพัน 2 รอบ (surgeon's knot)","2 รอบ","double","surgeon","สองรอบ","two loop")),P("Throw ต่อไปสลับทิศ ≥3 throw","สลับ","square","alternat","3 throw"),P("ปมข้างแผล ไม่รัดแน่น ตัดหาง","ข้างแผล","ไม่รัด","ตัดหาง","strangulat")]}),
  B("1.2 Second stitch: vertical mattress, tied with a one-handed square knot.",5,{tags:["proc"],
   ans:"เย็บ vertical mattress อีก 1 เข็มห่างจากเข็มแรก ~5–10 mm ระยะเท่ากัน · <b>One-hand tie</b>: throw แรกใช้<b>นิ้วชี้</b> throw ที่สองใช้<b>นิ้วกลาง</b> สลับทิศการดึงทุกครั้ง → ปมวางแบน = <b>square knot</b> · ดันปมลงด้วยปลายนิ้ว ดึงปลายไหมในแนวตรงข้ามขนานผิว ไม่ยกขึ้น ไม่มี air knot · ≥3 throw",
   exp:"ถ้ามือ/ทิศดึงไม่สลับจะได้ granny knot ที่ลื่น",
   rubric:"ได้เต็ม = ระยะเข็มที่สองเหมาะสม + square ≥3 throw + ไม่มี air knot",
   pts:[P("ระยะห่างจากเข็มแรกเหมาะสม เท่ากัน","ระยะ","ห่าง","เท่ากัน","spacing"),CR(P("สลับนิ้วชี้/นิ้วกลาง สลับทิศ → square","square","นิ้วชี้","นิ้วกลาง","index","middle","สลับ")),P("ดันปมลง ดึงขนานผิว ไม่มี air knot","air knot","ดันปม","ขนาน","แนบ","ปมลอย")]})
 ),
 interp:"เย็บ vertical mattress และผูกปมสองวิธี: instrument surgeon's knot และ one-hand square knot",
 summary:["Vertical mattress = far–far (ลึก) → near–near (ตื้น)","Surgeon's knot = throw แรกพัน 2 รอบ แล้ว throw สลับทิศ","One-hand: สลับนิ้วชี้/นิ้วกลาง → square knot","ดึงปลายขนานผิว ไม่มี air knot"]}),

/* ===== สถานี 2 ===== */
Co({page:247,orig:"2",topic:"hx",sub:"Abdominal pain",ex:1,title:"History taking — abdominal pain for one day",kimg:["os66c_k2"],
 stem:`A patient presents with <b>abdominal pain for 1 day</b>. Take a history from the simulated patient, then give your diagnosis and one differential diagnosis.`,
 gray:"2. ซักประวัติผู้ป่วยที่มาด้วยอาการปวดท้องมา 1 วัน ให้การวินิจฉัยและ Ddx มา 1 โรค - Acute cholecystitis (มีอาการมีไข้ ปวด RUQ ร้าวไปสะบักขวา ไม่เหลือง)",
 sp:"<b>บทผู้ป่วยจำลอง</b> (ตามไฟล์: มีไข้ ปวด RUQ ร้าวไปสะบักขวา ไม่เหลือง; รายละเอียดอื่น Claude แต่ง): หญิง 45 ปี · ปวดท้องใต้ชายโครงขวา 1 วัน เริ่มหลังกินอาหารมันมื้อเย็น ปวดตื้อแน่นต่อเนื่องไม่หาย <b>ร้าวไปสะบักขวา</b> ปวดมากขึ้นเวลาหายใจลึก · <b>มีไข้</b> หนาวสั่นเล็กน้อย คลื่นไส้ อาเจียน 2 ครั้งเป็นอาหาร · <b>ไม่ตัวเหลือง</b> ปัสสาวะสีปกติ อุจจาระสีปกติ · เคยปวดแบบนี้หลังกินมันแต่หายเองใน 2–3 ชม. หลายครั้งในปีที่ผ่านมา · ไม่มีถ่ายเหลว ไม่มีปัสสาวะแสบขัด ประจำเดือนปกติ ไม่ได้ตั้งครรภ์ · ไม่ดื่มสุรา ไม่มีโรคประจำตัว ไม่ได้กินยา",
 flag:"บทผู้ป่วยจำลองนอกเหนือจาก 'มีไข้ ปวด RUQ ร้าวไปสะบักขวา ไม่เหลือง' Claude แต่ง",
 notes:"ไฟล์: 'Acute cholecystitis (มีอาการมีไข้ ปวด RUQ ร้าวไปสะบักขวา ไม่เหลือง)'",
 parts:S(
  B("2.1 Take a history from the patient.",7,{tags:["hx"],
   ans:"<b>เริ่ม</b>: แนะนำตัว ยืนยันผู้ป่วย ขออนุญาต · <b>CC</b>: ปวดท้อง 1 วัน · <b>PI (OPQRST)</b>: onset (หลังอาหารมัน), ตำแหน่ง (<b>RUQ</b>), ลักษณะ (ต่อเนื่อง), <b>ร้าวไปสะบักขวา</b>, ปัจจัยกระตุ้น/บรรเทา (หายใจลึก, อาหาร), ความรุนแรง, ระยะเวลา · <b>อาการร่วม</b>: <b>ไข้/หนาวสั่น</b>, คลื่นไส้อาเจียน, <b>ตัวเหลือง ตาเหลือง ปัสสาวะเข้ม อุจจาระซีด</b> (แยก cholangitis/CBD stone), คัน · แยกโรคอื่น: ปวดร้าวทะลุหลัง (pancreatitis), ถ่ายเหลว, ปัสสาวะแสบขัด/ปวดหลัง (pyelonephritis), ไอ หายใจเหนื่อย (RLL pneumonia), <b>ประจำเดือน/โอกาสตั้งครรภ์</b> · <b>ประวัติเดิม</b>: <b>เคยปวดแบบนี้ (biliary colic)</b>, นิ่วถุงน้ำดี, ผ่าตัด · ยา (OCP, NSAIDs), สุรา, โรคประจำตัว (DM) · สรุปให้ผู้ป่วยฟัง",
   exp:"Murphy's sign และ US (ผนังหนา, pericholecystic fluid, impacted stone) ช่วยยืนยัน · Tokyo Guidelines 2018 ใช้ local inflammation + systemic inflammation + imaging",
   rubric:"ได้เต็ม = OPQRST + ร้าวสะบัก + ไข้ + ถามดีซ่าน + biliary colic เดิม + แยก pancreatitis/pyelonephritis/ตั้งครรภ์",
   pts:[H("เริ่มต้น",10),P("แนะนำตัว ยืนยันตัวผู้ป่วย","แนะนำตัว","introduc","ยืนยัน","ขออนุญาต"),
    H("CC/PI",40),CR(P("OPQRST: ตำแหน่ง ลักษณะ ระยะเวลา ความรุนแรง","ตำแหน่ง","ลักษณะ","opqrst","onset","ระยะเวลา","ความรุนแรง","ruq")),P("ร้าวไปสะบักขวา","ร้าว","radiat","สะบัก","shoulder"),P("สัมพันธ์กับอาหารมัน","อาหารมัน","fatty","มัน","อาหาร"),
    H("อาการร่วม",35),CR(P("ไข้ หนาวสั่น","ไข้","fever","หนาวสั่น","chill")),CR(P("ตัวเหลือง ปัสสาวะเข้ม อุจจาระซีด","เหลือง","jaundice","ปัสสาวะเข้ม","อุจจาระซีด","dark urine","pale stool")),P("แยกโรค: ปวดทะลุหลัง, ปัสสาวะแสบ, ไอ, ประจำเดือน/ตั้งครรภ์","ทะลุหลัง","ปัสสาวะ","ไอ","ประจำเดือน","ตั้งครรภ์","pregnan","lmp"),
    H("ประวัติอดีต/สรุป",15),P("เคยปวดแบบนี้ / นิ่วถุงน้ำดี / ยา สุรา","เคยปวด","biliary colic","นิ่ว","gallstone","สุรา","alcohol","ยา")]}),
  B("2.2 State your diagnosis and one differential diagnosis.",3,{tags:["hx"],key:"Acute cholecystitis",
   ans:"<b>Acute calculous cholecystitis</b> — ปวด RUQ ต่อเนื่อง >6 ชม. ร้าวสะบักขวา + ไข้ + ไม่เหลือง + เคยมี biliary colic · <b>DDx (1 โรค)</b>: <b>acute cholangitis/CBD stone</b> (แต่ไม่มีดีซ่าน), acute pancreatitis, acute hepatitis/liver abscess, right pyelonephritis, perforated peptic ulcer, right lower lobe pneumonia, acute appendicitis (retrocecal/ตั้งครรภ์)",
   exp:"Biliary colic ปวด <6 ชม. ไม่มีไข้ · cholecystitis ปวดนานกว่าและมีไข้ · cholangitis มี Charcot's triad (ไข้ ปวด RUQ ดีซ่าน)",
   rubric:"ได้ = acute cholecystitis + DDx 1 โรคที่สมเหตุสมผล",
   pts:[CR(P("Acute cholecystitis","cholecystitis","ถุงน้ำดีอักเสบ")),G("DDx ≥1",1,P("Cholangitis/CBD stone","cholangitis","cbd","choledocho","ท่อน้ำดี"),P("Pancreatitis","pancreatit","ตับอ่อน"),P("Liver abscess/hepatitis","abscess","hepatitis","ตับ"),P("Pyelonephritis","pyelonephr","กรวยไต"),P("Perforated PU / pneumonia / appendicitis","peptic","perforat","pneumonia","appendicitis","ไส้ติ่ง"))]})
 ),
 interp:"ซักประวัติปวดท้อง RUQ เฉียบพลันและแยก acute cholecystitis จาก biliary colic/cholangitis",
 summary:["RUQ ต่อเนื่อง >6 ชม. + ไข้ + Murphy's sign = acute cholecystitis","ต้องถามดีซ่าน/ปัสสาวะเข้ม/อุจจาระซีด เพื่อแยก cholangitis","แยก pancreatitis, pyelonephritis, pneumonia, ตั้งครรภ์","เคยมี biliary colic หลังอาหารมัน → นิ่วถุงน้ำดี"]}),

/* ===== สถานี 3 ===== */
Co({page:247,orig:"3",topic:"pe",sub:"Neuro motor/reflex",ex:1,title:"Physical examination — motor system of the limbs with myotomes",kimg:["os66c_k3"],seen:"คล้าย MDCU67 RoC OSCE 3 (motor exam + muscle + nerve root)",
 stem:`Examine the <b>motor system of the upper and lower extremities</b>. While performing each test, state the <b>muscle</b> being examined and the <b>nerve root</b> that supplies it.`,
 gray:"3. ตรวจร่างกายทางระบบประสาท ให้ตรวจ motor ของ upper and lower extremities, บอก muscle ที่ตรวจ และ nerve root ที่เลี้ยง (ให้ทำท่าการตรวจพร้อมพูดว่ากำลังตรวจ muscle ใด ซึ่งเลี้ยงด้วย nerve root ใด ทีละมัด) C4 Rhomboid, C5 Deltoid, C6 Biceps, Wrist extensor, C7 Tricep, wrist extensor, C8 Hand grip, T1 Abductor digiti minimi, L2 Ileopsoas, L3 Quadricoes femolis, L4 Tibialis anterior, L5 Extensor hallucis longus, S1 Gastrocnemius, S2,3,4 PR ดู Spnicter tone",
 sp:"ผู้ป่วยจำลองนั่ง/นอน ตรวจปกติทั้งหมด power 5/5 ทุกมัดเท่ากันสองข้าง tone ปกติ ไม่มีกล้ามเนื้อลีบ · ผู้คุมดู: ทำท่าตรวจทีละมัดพร้อมพูดชื่อมัดและราก, ยึด proximal ต้านแรง, เทียบซ้าย-ขวา · S2–4 ให้บอกว่าจะตรวจ PR ดู sphincter tone (ไม่ต้องทำจริงกับผู้ป่วยจำลอง)",
 flag:"⚠ C4 rhomboid และ T1 ADM ในไฟล์ต่างจากเฉลยเล็กน้อย · บทผู้ป่วยจำลอง Claude แต่ง",
 opinion:"ไฟล์ให้ C4 = rhomboid — rhomboid เลี้ยงโดย dorsal scapular nerve <b>C5</b> (±C4) จึงยอมรับเป็นเพิ่มเติม แต่ myotome ที่ใช้ตรวจ C4 ทั่วไปคือ shoulder shrug (trapezius/levator scapulae C3–4) · ไฟล์ให้ T1 = abductor digiti minimi (ulnar C8–T1) — ที่ใช้บ่อยคือ finger abduction (dorsal interossei) หรือ abductor pollicis brevis ซึ่งยอมรับทั้งคู่ · ไฟล์ใส่ wrist extensor ทั้ง C6 และ C7 — C7 นิยมใช้ wrist flexion/finger extension",
 notes:"รายการในไฟล์ (ตามตัว): C4 Rhomboid · C5 Deltoid · C6 Biceps, Wrist extensor · C7 Tricep, wrist extensor · C8 Hand grip · T1 Abductor digiti minimi · L2 Ileopsoas · L3 Quadricoes femolis · L4 Tibialis anterior · L5 Extensor hallucis longus · S1 Gastrocnemius · S2,3,4 PR ดู Spnicter tone",
 parts:S(
  B("3.1 Examine each myotome, naming the muscle and nerve root.",10,{tags:["pe"],key:"C4 Rhomboid · C5 Deltoid · C6 Biceps, Wrist extensor · C7 Tricep, wrist extensor · C8 Hand grip · T1 Abductor digiti minimi · L2 Ileopsoas · L3 Quadriceps femoris · L4 Tibialis anterior · L5 Extensor hallucis longus · S1 Gastrocnemius · S2,3,4 PR ดู sphincter tone",
   ans:"แนะนำตัว ขออนุญาต ดู bulk/fasciculation ตรวจ tone แล้วตรวจ power (MRC 0–5) เทียบซ้าย-ขวา:<ul><li>(<b>C4</b> shoulder shrug — trapezius/levator scapulae; rhomboid C4–5)</li><li><b>C5</b> shoulder abduction — <b>deltoid</b></li><li><b>C6</b> elbow flexion — <b>biceps</b> (C5–6) · wrist extension — <b>ECRL/ECRB</b></li><li><b>C7</b> elbow extension — <b>triceps</b> · wrist flexion/finger extension</li><li><b>C8</b> finger flexion/<b>hand grip</b> — FDP</li><li><b>T1</b> finger abduction — <b>dorsal interossei/abductor digiti minimi</b></li><li><b>L2</b> hip flexion — <b>iliopsoas</b></li><li><b>L3</b> knee extension — <b>quadriceps femoris</b></li><li><b>L4</b> ankle dorsiflexion — <b>tibialis anterior</b></li><li><b>L5</b> great toe extension — <b>extensor hallucis longus</b></li><li><b>S1</b> plantarflexion — <b>gastrocnemius/soleus</b></li><li><b>S2–4</b> — <b>anal sphincter tone (PR)</b></li></ul>",
   exp:"ตรวจโดยยึดส่วน proximal ของข้อ ให้ผู้ป่วยออกแรงต้านที่ distal · ให้เกรดตาม MRC",
   rubric:"ได้เต็ม = ครบ C5–T1, L2–S1 พร้อมชื่อมัด/ราก ทำท่าถูก + เทียบสองข้าง + บอก S2–4 sphincter · รากผิดแต่ละตำแหน่งหักคะแนน",
   pts:[H("เตรียม/ดู/tone",10),P("ดู bulk/fasciculation ตรวจ tone","atroph","fascicul","bulk","tone","ลีบ"),
    H("Upper limb",40),CR(P("C5 deltoid","c5","deltoid")),P("C6 biceps / wrist extensor","c6","biceps","wrist ext","extensor carpi"),P("C7 triceps","c7","tricep"),P("C8 hand grip / finger flexor","c8","grip","finger flex","flexor digitorum"),P("T1 finger abduction (interossei/ADM)","t1","inteross","abductor digiti","finger abduct"),
    H("Lower limb",40),CR(P("L2 iliopsoas","l2","iliopsoas","ileopsoas","hip flex")),P("L3 quadriceps","l3","quadricep"),P("L4 tibialis anterior","l4","tibialis"),P("L5 EHL","l5","hallucis","ehl","toe ext"),P("S1 gastrocnemius","s1","gastrocnem","plantarflex"),
    H("อื่น ๆ",10),P("S2–4 sphincter tone (PR) / เทียบสองข้าง MRC","s2","sphincter","pr ","rectal","mrc","เทียบ","compare")]})
 ),
 interp:"ตรวจ motor ทีละมัดพร้อมระบุ myotome ให้ถูก",
 summary:["C5 deltoid · C6 biceps/wrist ext · C7 triceps · C8 grip · T1 finger abduction","L2 iliopsoas · L3 quadriceps · L4 tibialis anterior · L5 EHL · S1 gastrocnemius","S2–4 anal sphincter tone (PR)","ยึด proximal ต้านแรง distal เทียบสองข้าง MRC 0–5"]}),

/* ===== สถานี 4 ===== */
Co({page:247,orig:"4",topic:"img",sub:"Mammogram",title:"Breast imaging — name, views, abnormality and further investigation",kimg:["os66c_k4"],seen:"คล้าย MDCU67 RoC OSCE 4 (mammogram 4 คำถามเดียวกัน)",
 imgAlt:"ภาพ X-ray เต้านมสองท่าของผู้ป่วยหญิง (ไฟล์ไม่มีรูป)",
 stem:`Breast radiographs in two projections are shown.<br>4.1 What is this investigation called?<br>4.2 Which views are shown?<br>4.3 Describe the abnormality and state its location.<br>4.4 What further investigation would you request?`,
 gray:"4. mammogram 4.1 การตรวจนี้เรียกว่าอะไร 4.2 เป็นการตรวจในท่าใดบ้าง (mediolateralobligue view, craniocaudal view) 4.3 จงบรรยายลักษณะความผิดปกติที่ตรวจพบ และระบุตำแหน่งของความผิดปกติ (clusters of microcalcification, hyperdensity lesion) 4.4 จะส่งตรวจอะไรเพิ่มเติม",
 flag:NOIMG+" · ไฟล์ไม่มีรูป ตำแหน่งรอยโรคไม่ทราบ",
 notes:"ไฟล์ตอบในวงเล็บ: 4.2 'mediolateral oblique view, craniocaudal view' · 4.3 'clusters of microcalcification, hyperdensity lesion' · 4.1, 4.4 ไม่มีเฉลย (หัวข้อสถานีเขียนว่า mammogram)",
 parts:S(
  B("4.1 What is this investigation called?",1,{tags:["img"],key:"mammogram (หัวข้อของสถานี)",
   ans:"<b>Mammography (mammogram)</b>",
   exp:"Mammogram ใช้ทั้ง screening (ผู้หญิงอายุ ≥40) และ diagnostic (มีอาการ/ก้อน)",
   rubric:"ได้ = mammogram",
   pts:[CR(P("Mammogram","mammogra","แมมโม"))]}),
  B("4.2 Which views are shown?",2,{tags:["img"],key:"mediolateral oblique view, craniocaudal view",
   ans:"<b>Mediolateral oblique (MLO)</b> และ <b>craniocaudal (CC)</b> views",
   exp:"MLO: เห็น pectoralis major และ axillary tail · CC: เห็นด้าน medial ชัด",
   rubric:"1 คะแนนต่อท่า",
   pts:[CR(P("MLO","mlo","mediolateral","medio-lateral","oblique")),CR(P("CC","\\bcc\\b","craniocaudal","cranio-caudal"))]}),
  B("4.3 Describe the abnormality and state its location.",4,{tags:["img"],key:"clusters of microcalcification, hyperdensity lesion",
   ans:"<b>Hyperdense lesion (mass) ร่วมกับ clustered microcalcifications</b> — บรรยาย mass ตาม BI-RADS: shape (irregular), margin (spiculated/indistinct), density (high) และ calcification: morphology (fine pleomorphic/linear branching = suspicious), distribution (grouped/segmental) · <b>ระบุตำแหน่ง</b>: ข้าง (ซ้าย/ขวา), quadrant หรือหน้าปัดนาฬิกา, ระยะห่างจาก nipple — ใช้ MLO บอกบน/ล่าง และ CC บอก medial/lateral · สรุป <b>BI-RADS 4–5</b>",
   exp:"Mass ร่วมกับ microcalcification แบบ pleomorphic น่าสงสัยมะเร็งมาก (BI-RADS 4C–5)",
   rubric:"ได้เต็ม = hyperdense mass + clustered microcalcification + บอกวิธีระบุตำแหน่งจาก MLO/CC · ไม่มีรูปจึงไม่ตัดคะแนนข้าง/quadrant ที่ระบุ",
   pts:[CR(P("Clustered microcalcifications","microcalcif","calcif","หินปูน","cluster")),CR(P("Hyperdense lesion/mass","hyperdens","mass","ก้อน","density","opacity")),P("ระบุตำแหน่งจาก MLO (บน/ล่าง) + CC (ใน/นอก) / quadrant","quadrant","o.?clock","นาฬิกา","upper","lower","medial","lateral","ตำแหน่ง"),P("BI-RADS 4–5","bi-?rads","suspicious","น่าสงสัย")]}),
  B("4.4 What further investigation would you request?",3,{tags:["img"],
   ans:"<b>Ultrasound เต้านมและรักแร้</b> (ลักษณะ mass, ต่อมน้ำเหลือง) · <b>spot compression/magnification view</b> สำหรับ calcification · <b>Tissue diagnosis: image-guided core needle biopsy</b> (US-guided สำหรับ mass; stereotactic vacuum-assisted สำหรับ calcification) พร้อมส่ง ER, PR, HER2, Ki-67 ถ้าเป็นมะเร็ง",
   exp:"Triple assessment = clinical + imaging + pathology (core needle biopsy)",
   rubric:"ได้เต็ม = US + core needle biopsy · ตอบ FNA ได้คะแนนน้อย",
   pts:[P("Ultrasound เต้านม/รักแร้","ultrasound","us ","อัลตรา","sonogra"),CR(P("Core needle biopsy (US-guided/stereotactic)","core needle","biopsy","ตัดชิ้นเนื้อ","stereotac","cnb")),P("Magnification view","magnif","spot","ขยาย")]})
 ),
 interp:"Mammogram: ท่า MLO/CC, บรรยาย mass + microcalcification ตาม BI-RADS และส่ง biopsy",
 summary:["MLO + CC = 2 ท่ามาตรฐาน","Hyperdense mass + clustered microcalcification → BI-RADS 4–5","ระบุตำแหน่งจากสองท่า","ต่อไป: US + image-guided core needle biopsy"]}),

/* ===== สถานี 5 ===== */
Co({page:247,orig:"5",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — prostate examination on a model",
 stem:`Examine the prostate gland on the model provided.<br>5.1 Write a report of your findings.<br>5.2 Give your diagnosis.`,
 gray:"5. ตรวจ Prostate gland จากหุ่น 5.1 เขียนรายงานผล 5.2 จงให้การวินิจฉัย",
 sp:"<b>หุ่นตรวจทางทวารหนัก</b> (ไฟล์ไม่ระบุว่าหุ่นเป็นแบบไหน — Claude กำหนด): ต่อมลูกหมาก<b>โตประมาณ 2 เท่า</b> (ประมาณ 40–50 g) ผิวเรียบ ขอบชัด สมมาตร เนื้อยืดหยุ่นแบบยาง (rubbery) <b>median sulcus คลำไม่ได้</b> ไม่มี nodule ไม่กดเจ็บ ขยับได้ · anal tone ปกติ ไม่มีก้อนในทวาร · ผู้คุมดู: บอกผู้ป่วย/ขออนุญาต, ท่า (left lateral/lithotomy), ใส่ถุงมือ หล่อลื่น, ดู perianal ก่อน, สอดนิ้วถูกวิธี, คลำ prostate ครบ (ขนาด ผิว ความแข็ง sulcus nodule กดเจ็บ), ดูถุงมือ (เลือด/มูก), เช็ดทำความสะอาด",
 flag:"ไฟล์มีแค่หัวข้อ ไม่บอกลักษณะหุ่น — ผลตรวจในหุ่น (BPH) Claude กำหนด; ถ้าหุ่นเป็นแบบอื่นให้ใช้กรอบการรายงานเดียวกัน",
 notes:"ไม่มีเฉลยในไฟล์",
 parts:S(
  B("5.1 Perform the examination and write a report of your findings.",6,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว อธิบาย ขออนุญาต มี chaperone · จัดท่า <b>left lateral (Sims')</b> เข่างอชิดอก · ใส่ถุงมือ หล่อลื่น · <b>ดู perianal</b> (hemorrhoid, fissure, fistula) · สอดนิ้วชี้ช้า ๆ ให้ผู้ป่วยเบ่งเล็กน้อย · ประเมิน <b>anal sphincter tone</b> · คลำ rectal wall รอบทิศ · <b>คลำ prostate</b> ทางผนังหน้า · ดูถุงมือ (เลือด มูก อุจจาระ) · เช็ดทำความสะอาดให้ผู้ป่วย · <b>รายงาน</b>: 'Perianal: normal. Anal tone: normal. Rectal mucosa: smooth, no mass. <b>Prostate: enlarged (~2× normal, ~40–50 g), smooth surface, rubbery consistency, symmetrical, median sulcus obliterated, no nodule, non-tender, mobile rectal mucosa over the gland.</b> Glove: brown stool, no blood/mucus.'",
   exp:"ต่อมลูกหมากปกติ ~20 g (ขนาดลูกเกาลัด) แบ่ง 2 lobe มี median sulcus · มะเร็ง: แข็งเป็นหิน nodule ขอบไม่ชัด sulcus หาย/ไม่สมมาตร · prostatitis: กดเจ็บมาก นุ่มบวม (ห้ามนวด)",
   rubric:"ได้เต็ม = ท่า/การเตรียมถูก + รายงานครบ size/surface/consistency/sulcus/nodule/tenderness + anal tone + ถุงมือ",
   pts:[H("เตรียม",25),P("แนะนำตัว ขออนุญาต chaperone","แนะนำตัว","ขออนุญาต","chaperone","consent"),P("ท่า left lateral/Sims' ใส่ถุงมือ หล่อลื่น","left lateral","sims","ตะแคง","หล่อลื่น","lubric","ถุงมือ"),
    H("ตรวจ",25),P("ดู perianal ก่อน","perianal","รอบทวาร","inspect","ดู"),P("Anal sphincter tone","sphincter","tone","anal tone"),
    H("รายงาน prostate",50),CR(P("ขนาด (โต ~40–50 g)","size","ขนาด","enlarg","โต","gram")),CR(P("ผิวเรียบ / ความแข็ง rubbery","smooth","เรียบ","rubbery","ยาง","consistency","firm","แข็ง")),P("Median sulcus / nodule / tenderness","sulcus","nodule","ก้อน","tender","กดเจ็บ"),P("ดูถุงมือ เลือด มูก","ถุงมือ","glove","เลือด","blood","mucus")]}),
  B("5.2 Give your diagnosis.",2,{tags:["pe"],
   ans:"<b>Benign prostatic hyperplasia (BPH)</b> — โตเรียบ สมมาตร rubbery sulcus หาย ไม่มี nodule · ถ้าหุ่นแข็งเป็นหิน มี nodule ขอบไม่เรียบ → <b>carcinoma of prostate</b> (ส่ง PSA + MRI prostate + TRUS/MRI-targeted biopsy) · กดเจ็บมาก นุ่มบวม → acute prostatitis",
   exp:"DRE ประเมินขนาดได้ไม่แม่นยำ ใช้ TRUS วัดปริมาตร",
   rubric:"ได้ = วินิจฉัยตรงกับผลที่รายงาน (BPH ในหุ่นนี้)",
   pts:[CR(P("BPH","bph","benign prostatic","ต่อมลูกหมากโต")),P("แยก CA prostate (แข็ง nodule) → PSA, biopsy","carcinoma","cancer","มะเร็ง","psa","biopsy","nodule")]})
 ),
 interp:"ตรวจ DRE ให้ถูกขั้นตอนและรายงานลักษณะต่อมลูกหมากที่แยก BPH จากมะเร็ง",
 summary:["ท่า left lateral, ดู perianal ก่อน, ประเมิน anal tone","Prostate: size, surface, consistency, median sulcus, nodule, tenderness","BPH: โตเรียบ rubbery sulcus หาย","CA: แข็ง nodule ไม่สมมาตร → PSA, MRI, biopsy"]}),

/* ===== สถานี 6 ===== */
Co({page:248,orig:"6",topic:"img",sub:"IVP/KUB",title:"Contrast urography — name, describe, diagnose, treat",kimg:["os66c_k6"],
 imgAlt:"ชุดฟิล์ม IVP ของผู้ป่วยผู้ใหญ่ ให้เรียงลำดับเอง ฟิล์มท้ายมีสารทึบรังสีเต็มกระเพาะปัสสาวะ (ภาพในไฟล์มีป้ายคำตอบกำกับ จึงเก็บไว้ในเฉลย)",
 stem:`A series of urographic films is provided; arrange them in order.<br>6.1 What is this investigation called?<br>6.2 Describe the abnormality.<br>6.3 What is the diagnosis?<br>6.4 Outline the treatment.`,
 gray:"6. IVP (ให้ฟิล์ม IVP series มา ต้องเรียงดูเอง) 6.1 การตรวจนี้มีชื่อว่าอะไร 6.2 จงบรรยายความผิดปกติที่ตรวจพบ 6.3 จงให้การวินิจฉัย (CA urinary bladder) 6.4 วิธีการรักษา",
 flag:NOIMG+" · รูปในไฟล์มีป้าย 'Tumour' ชี้รอยโรค → เก็บเป็นรูปเฉลย os66c_k6 โจทย์ใช้ NOIMG · ไฟล์มีฟิล์มเดียว ไม่ใช่ทั้ง series",
 notes:"ไฟล์ตอบในวงเล็บ: 6.3 'CA urinary bladder' · ภาพ IVP 1 ฟิล์ม มีป้าย 'Tumour' ชี้ filling defect ในกระเพาะปัสสาวะ · 6.1 หัวข้อ 'IVP' · 6.2, 6.4 ไม่มีเฉลย",
 parts:S(
  B("6.1 What is this investigation called?",1,{tags:["img"],key:"IVP (หัวข้อของสถานี)",
   ans:"<b>Intravenous pyelography (IVP) / intravenous urography (IVU)</b> — เรียง: scout (KUB ก่อนฉีด) → nephrogram (~1 นาที) → pyelogram (5, 10–15 นาที) → full bladder → post-void",
   exp:"ปัจจุบัน CT urography แทน IVP ในการตรวจ hematuria",
   rubric:"ได้ = IVP/IVU",
   pts:[CR(P("IVP / IVU","ivp","ivu","intravenous pyelo","intravenous urogra","excretory"))]}),
  B("6.2 Describe the abnormality.",3,{tags:["img"],
   ans:"ในฟิล์มระยะ bladder phase: <b>irregular filling defect</b> ที่ผนังกระเพาะปัสสาวะ (ในภาพเฉลยอยู่ด้านข้างของกระเพาะปัสสาวะ) ขอบไม่เรียบ ยื่นเข้าไปในลำ contrast · ไตทั้งสองข้างขับสารทึบรังสีได้ · ประเมินว่ามี hydroureteronephrosis ข้างเดียวกัน (บ่งว่า tumor ลุกลามอุดรูท่อไต) และ filling defect ใน upper tract (synchronous urothelial tumor) หรือไม่",
   exp:"DDx ของ filling defect ในกระเพาะปัสสาวะ: tumor, blood clot (เปลี่ยนตำแหน่งได้), radiolucent stone (uric acid), enlarged prostate (median lobe ยกฐาน), ureterocele, fungus ball",
   rubric:"ได้เต็ม = irregular filling defect ในกระเพาะปัสสาวะ + ประเมิน upper tract/hydronephrosis",
   pts:[CR(P("Irregular filling defect ในกระเพาะปัสสาวะ","filling defect","ขรุขระ","irregular","bladder","กระเพาะปัสสาวะ")),P("ประเมิน hydronephrosis / upper tract","hydro","upper tract","ไต","kidney","ureter","ท่อไต")]}),
  B("6.3 What is the diagnosis?",2,{tags:["img"],key:"CA urinary bladder",
   ans:"<b>Carcinoma of the urinary bladder</b> (urothelial carcinoma) · ผู้ป่วยมักมา painless gross hematuria · ปัจจัยเสี่ยง: บุหรี่, สารเคมีอุตสาหกรรม (aromatic amines), cyclophosphamide · ยืนยันด้วย <b>cystoscopy + biopsy/TURBT</b> และ urine cytology",
   exp:"Urothelial carcinoma >90% ของมะเร็งกระเพาะปัสสาวะ · SCC สัมพันธ์กับ schistosomiasis/สายสวนคาเรื้อรัง",
   rubric:"ได้ = CA bladder",
   pts:[CR(P("Carcinoma of bladder","ca urinary bladder","ca bladder","bladder ca","bladder cancer","มะเร็งกระเพาะปัสสาวะ","urothelial","transitional cell","carcinoma"))]}),
  B("6.4 Outline the treatment.",3,{tags:["img"],
   ans:"<b>TURBT</b> (วินิจฉัย + staging ต้องได้ detrusor muscle) + <b>CT urography</b> (upper tract) / CT chest-abdomen staging · <b>Non-muscle-invasive (Ta, T1, CIS)</b>: complete TURBT + <b>single immediate intravesical chemotherapy</b> (mitomycin C) · intermediate/high risk → <b>intravesical BCG</b> induction + maintenance · re-TURBT สำหรับ T1/high grade · ติดตาม cystoscopy · <b>Muscle-invasive (≥T2)</b>: <b>neoadjuvant cisplatin-based chemotherapy → radical cystectomy + pelvic lymphadenectomy + urinary diversion</b> (ileal conduit/neobladder) หรือ trimodality bladder preservation (maximal TURBT + chemoradiation) · metastatic → systemic therapy",
   exp:"การแยก NMIBC vs MIBC จาก TURBT เป็นตัวกำหนดการรักษาทั้งหมด",
   rubric:"ได้เต็ม = TURBT + แยก NMIBC (intravesical BCG/chemo) vs MIBC (radical cystectomy ± neoadjuvant chemo)",
   pts:[CR(P("TURBT (diagnosis + staging)","turbt","transurethral resection","tur-?bt")),P("NMIBC: intravesical mitomycin/BCG","bcg","intravesical","mitomycin","nmibc"),CR(P("MIBC: radical cystectomy + urinary diversion ± neoadjuvant chemo","cystectomy","radical","diversion","ileal conduit","neobladder","neoadjuvant")),P("Staging: CT urography/CT chest-abdomen","ct","staging","urography")]})
 ),
 interp:"IVP: filling defect ในกระเพาะปัสสาวะ = มะเร็งกระเพาะปัสสาวะ และรักษาตาม depth of invasion",
 summary:["IVP ลำดับ: scout → nephrogram → pyelogram → bladder → post-void","Filling defect ในกระเพาะปัสสาวะ: tumor, clot, uric acid stone, prostate","TURBT ทั้งวินิจฉัยและ staging","NMIBC → intravesical BCG/MMC · MIBC → neoadjuvant chemo + radical cystectomy"]}),

/* ===== สถานี 7 ===== */
Co({page:248,orig:"7",topic:"img",sub:"IVP/KUB",title:"Plain abdominal film — name, describe the abnormality, treat",img:["os66c_7"],kimg:["os66c_k7"],
 stem:`A radiograph is shown.<br>7.1 What is this film called?<br>7.2 Describe the abnormality.<br>7.3 Outline the treatment.`,
 gray:"7. [ฟิล์ม] 7.1 ฟิล์มนี้มีชื่อเรียกว่าอะไร (Scout film) 7.2 จงบรรยายความผิดปกติที่ตรวจพบ (Right staghorn stone) 7.3 วิธีการรักษา",
 notes:"ไฟล์ตอบในวงเล็บ: 7.1 'Scout film' · 7.2 'Right staghorn stone' · 7.3 ไม่มีเฉลย",
 parts:S(
  B("7.1 What is this film called?",1,{tags:["img"],key:"Scout film",
   ans:"<b>Scout film</b> (plain KUB ก่อนฉีดสารทึบรังสีของ IVP)",
   exp:"Scout film ใช้ดูนิ่วทึบรังสีและเป็นฐานเปรียบเทียบกับฟิล์มหลังฉีดสี",
   rubric:"ได้ = scout film / plain KUB",
   pts:[CR(P("Scout film / plain KUB","scout","kub","plain"))]}),
  B("7.2 Describe the abnormality.",3,{tags:["img"],key:"Right staghorn stone",
   ans:"<b>Large branched radiopaque opacity</b> ที่ตำแหน่ง<b>ไตขวา</b> (marker R) เป็นรูปตามแนว renal pelvis และแตกแขนงเข้าหลาย calyces = <b>right staghorn calculus</b> (complete/partial) · ด้านซ้ายไม่เห็นนิ่วชัด",
   exp:"Staghorn stone ส่วนใหญ่เป็น <b>struvite</b> (magnesium ammonium phosphate) จากการติดเชื้อแบคทีเรียสร้าง urease (Proteus, Klebsiella) หรือ cystine/uric acid",
   rubric:"ได้เต็ม = radiopaque แตกแขนงตาม pelvicalyceal system + ไตขวา",
   pts:[CR(P("Branched radiopaque opacity ตาม pelvicalyceal system / staghorn","staghorn","เขากวาง","branch","แตกแขนง","calyc","radiopaque","opacity")),CR(P("ไตขวา","right","ขวา","\\brt\\b"))]}),
  B("7.3 Outline the treatment.",3,{tags:["img"],
   ans:"ประเมิน: urine culture รักษาการติดเชื้อก่อนผ่าตัด, Cr, CT KUB (ขนาด/กายวิภาค), DTPA/MAG3 renal scan ถ้าสงสัยไตไม่ทำงาน · <b>Percutaneous nephrolithotomy (PCNL)</b> เป็นการรักษาหลัก (EAU/AUA) ± ร่วมกับ RIRS/ESWL สำหรับนิ่วที่เหลือ · เป้าหมาย <b>stone-free</b> สมบูรณ์ (นิ่วที่เหลือเป็นแหล่งติดเชื้อ/โตซ้ำ) · open/laparoscopic anatrophic nephrolithotomy หรือ pyelolithotomy เมื่อทำ PCNL ไม่ได้ · ไตไม่ทำงาน (split function &lt;10–15%) → <b>nephrectomy</b> · หลังรักษา: วิเคราะห์นิ่ว, ATB ตาม culture, ดื่มน้ำมาก",
   exp:"ปล่อย staghorn ไว้โดยไม่รักษา → ไตเสื่อม, urosepsis, xanthogranulomatous pyelonephritis",
   rubric:"ได้เต็ม = PCNL + รักษาการติดเชื้อ + stone-free + nephrectomy ถ้าไตไม่ทำงาน",
   pts:[CR(P("PCNL","pcnl","percutaneous nephrolith","nephrolithotomy")),P("รักษาการติดเชื้อ / urine culture","culture","infection","ติดเชื้อ","antibiotic","atb","struvite"),P("Stone-free / ร่วมกับ RIRS/ESWL","stone.?free","rirs","eswl","combination"),P("ไตไม่ทำงาน → nephrectomy / open surgery","nephrectomy","ตัดไต","anatrophic","open","pyelolith")]})
 ),
 interp:"Scout film: staghorn calculus ไตขวา และการรักษาด้วย PCNL เพื่อให้ stone-free",
 summary:["Scout film = plain KUB ก่อนฉีดสี","Staghorn = นิ่วแตกแขนงตาม pelvis + calyces ส่วนใหญ่ struvite (Proteus)","รักษา: PCNL เป้าหมาย stone-free + รักษาการติดเชื้อ","ไตไม่ทำงาน → nephrectomy"]}),

/* ===== สถานี 8 ===== */
Co({page:249,orig:"8",topic:"img",sub:"Contrast GI study",title:"Contrast study of the oesophagus — name, diagnosis, treatment",img:["os66c_8"],kimg:["os66c_k8"],
 stem:`A contrast radiograph is shown.<br>8.1 What is this investigation called?<br>8.2 What is the diagnosis?<br>8.3 How would you treat this patient?`,
 gray:"8. [ฟิล์ม] 8.1 การตรวจนี้มีชื่อว่าอะไร (Esophagography) 8.2 จงให้การวินิจฉัย (Achalasia cardia) 8.3 จะให้การรักษาอย่างไร",
 notes:"ไฟล์ตอบในวงเล็บ: 8.1 'Esophagography' · 8.2 'Achalasia cardia' · 8.3 ไม่มีเฉลย",
 parts:S(
  B("8.1 What is this investigation called?",1,{tags:["img"],key:"Esophagography",
   ans:"<b>Esophagography (barium swallow / esophagogram)</b>",
   exp:"Timed barium esophagogram ใช้ประเมินการระบาย barium ใน achalasia ก่อน-หลังรักษา",
   rubric:"ได้ = esophagography/barium swallow",
   pts:[CR(P("Esophagography / barium swallow","esophagogra","oesophagogra","barium","กลืนแป้ง"))]}),
  B("8.2 What is the diagnosis?",3,{tags:["img"],key:"Achalasia cardia",
   ans:"<b>Achalasia (cardia)</b> — หลอดอาหาร<b>ขยาย</b> มี barium ค้าง ปลายหลอดอาหารที่ GE junction <b>เรียวเรียบแบบจะงอยปากนก (bird's beak)</b> ขอบเรียบไม่มี mucosal destruction · ยืนยันด้วย <b>high-resolution manometry</b> (incomplete LES relaxation, aperistalsis; Chicago type I–III) และ <b>EGD</b> เพื่อแยก pseudoachalasia จากมะเร็งที่ cardia",
   exp:"แยกจากมะเร็ง: มะเร็งตีบขรุขระ shouldering, อายุมาก น้ำหนักลดเร็ว อาการสั้น",
   rubric:"ได้เต็ม = achalasia + บอกลักษณะ dilated esophagus/bird's beak · ตอบ achalasia อย่างเดียวได้เกือบเต็ม",
   pts:[CR(P("Achalasia","achalasia")),P("Dilated esophagus + bird's beak","bird","beak","จะงอย","dilat","ขยาย","taper"),P("ยืนยัน manometry + EGD","manometr","egd","endoscop","ส่องกล้อง")]}),
  B("8.3 How would you treat this patient?",3,{tags:["img"],
   ans:"เป้าหมายลดความดัน LES ให้กลืนได้ (ไม่สามารถคืน peristalsis): <b>Laparoscopic Heller myotomy + partial fundoplication (Dor/Toupet)</b> หรือ <b>POEM (peroral endoscopic myotomy)</b> — ได้ผลดีที่สุด/ทนนาน (POEM เหมาะกับ type III) · <b>Pneumatic (balloon) dilatation</b> — ได้ผลดี อาจต้องทำซ้ำ เสี่ยง perforation · ผู้ป่วยเสี่ยงผ่าตัดสูง: <b>botulinum toxin injection</b> ที่ LES (ชั่วคราว 6–12 เดือน) หรือยา nitrates/CCB ก่อนอาหาร (ได้ผลน้อย) · end-stage megaesophagus → esophagectomy · ติดตามเฝ้าระวัง SCC (ความเสี่ยงเพิ่ม)",
   exp:"Fundoplication ร่วมกับ Heller myotomy เพื่อลด GERD หลังผ่าตัด",
   rubric:"ได้เต็ม = Heller myotomy + fundoplication หรือ POEM + ทางเลือก pneumatic dilatation/botox",
   pts:[CR(P("Heller myotomy + fundoplication / POEM","heller","myotomy","poem","peroral")),P("Pneumatic dilatation","pneumatic","balloon","dilat","ขยาย"),P("Botox / CCB / nitrate สำหรับเสี่ยงผ่าตัดสูง","botulinum","botox","nifedipine","nitrate","ccb","calcium channel")]})
 ),
 interp:"Esophagogram ของ achalasia: dilated esophagus + bird's beak และทางเลือกรักษา",
 summary:["Achalasia: dilated esophagus + bird's beak เรียบที่ GEJ","ยืนยัน HRM (Chicago type) + EGD แยก pseudoachalasia","Laparoscopic Heller myotomy + Dor/Toupet หรือ POEM","Pneumatic dilatation · botox สำหรับเสี่ยงผ่าตัดสูง"]}),

/* ===== สถานี 9 ===== */
Co({page:249,orig:"9",topic:"inst",sub:"Surgical instrument",title:"Four surgical instruments — name and function",kimg:["os66c_k9"],seen:"คล้าย MDCU67 RoC OSCE 7 (Richardson retractor, Babcock forceps)",
 imgAlt:"เครื่องมือผ่าตัด 4 ชิ้น (9.1–9.4) วางให้ดูทีละชิ้น — ไฟล์ไม่มีรูป",
 stem:`Four surgical instruments (9.1–9.4) are presented. Name each instrument and state its function.`,
 gray:"9. จงบอกชื่อเครื่องมือดังต่อไปนี้ และบอกหน้าที่ 9.1 Richardson retractor 9.2 Allis tissue forcep 9.3 Babcock forcep 9.4 Backhaus towel clip",
 flag:NOIMG+" · ไฟล์บอกชื่อเครื่องมือ (= คำตอบ) ไว้ในคำถาม ไม่มีรูป",
 notes:"ไฟล์ระบุชื่อ: 9.1 Richardson retractor · 9.2 Allis tissue forcep · 9.3 Babcock forcep · 9.4 Backhaus towel clip · ไม่มีเฉลยหน้าที่",
 parts:S(
  B("9.1–9.4 Name each instrument and state its function.",8,{tags:["inst"],key:"9.1 Richardson retractor · 9.2 Allis tissue forcep · 9.3 Babcock forcep · 9.4 Backhaus towel clip (ไม่มีเฉลยหน้าที่)",
   ans:"<ul><li><b>9.1 Richardson retractor</b> — hand-held retractor ใบโค้งลึก ใช้<b>ดึงรั้งผนังหน้าท้อง/ขอบแผลชั้นลึก</b>ระหว่าง laparotomy</li><li><b>9.2 Allis tissue forceps</b> — ปากมีฟันเล็กละเอียดหลายซี่ ล็อกได้ ใช้<b>จับเนื้อเยื่อที่ค่อนข้างเหนียว</b> เช่น fascia, ขอบ aponeurosis, หรือเนื้อเยื่อที่จะตัดออก (ทำให้เนื้อเยื่อช้ำ ไม่ใช้กับลำไส้ที่จะเก็บไว้)</li><li><b>9.3 Babcock forceps</b> — ปากเป็นห่วงกลมไม่มีฟัน (atraumatic) ใช้<b>จับอวัยวะกลวง/บอบบาง</b> เช่น ลำไส้, appendix, fallopian tube, ureter</li><li><b>9.4 Backhaus towel clip</b> — ปลายแหลมโค้งเข้าหากัน ล็อกได้ ใช้<b>ยึดผ้าปูผ่าตัด (drapes) ให้อยู่กับที่</b> (และยึดสาย suction/สายจี้ไว้กับ drape)</li></ul>",
   exp:"Allis vs Babcock: Allis มีฟัน (traumatic) · Babcock ห่วงเรียบ (atraumatic)",
   rubric:"ชิ้นละ 2 คะแนน (ชื่อ 1 + หน้าที่ 1)",
   pts:[H("Richardson",25),CR(P("Richardson retractor","richardson")),P("รั้งผนังหน้าท้อง/ชั้นลึก","abdominal wall","ผนังหน้าท้อง","retract","รั้ง","laparotomy"),
    H("Allis",25),CR(P("Allis forceps","allis")),P("จับ fascia/เนื้อเยื่อเหนียว/ที่จะตัดออก","fascia","เหนียว","ตัดออก","aponeuro","tough","grasp"),
    H("Babcock",25),CR(P("Babcock forceps","babcock")),P("จับลำไส้/appendix/hollow viscus แบบ atraumatic","bowel","ลำไส้","appendix","ไส้ติ่ง","hollow","atraumatic","fallopian","ureter"),
    H("Backhaus",25),CR(P("Backhaus towel clip","backhaus","towel clip")),P("ยึดผ้าปูผ่าตัด","drape","ผ้าปู","ผ้า","towel")]})
 ),
 interp:"ชื่อและหน้าที่เครื่องมือผ่าตัดพื้นฐาน 4 ชนิด",
 summary:["Richardson: รั้งผนังหน้าท้องใน laparotomy","Allis: มีฟัน → จับ fascia/เนื้อเยื่อที่จะตัดออก","Babcock: ห่วงเรียบ → จับลำไส้/appendix/fallopian tube","Backhaus: ยึดผ้าปูผ่าตัด"]}),

/* ===== สถานี 10 ===== */
Co({page:249,orig:"10",topic:"path",sub:"Breast cancer staging",title:"Breast cancer — clinical and pathological TNM staging",
 stem:`A 52-year-old woman has a 3.5-cm hard mass in the upper outer quadrant of the left breast with a single mobile, firm left axillary lymph node. Staging investigations show no distant metastasis. She undergoes modified radical mastectomy.<br><b>Pathology report:</b> invasive carcinoma of no special type, grade 2, tumour 3.2 × 2.8 × 2.5 cm; margins clear; skin and nipple free of tumour; metastatic carcinoma in 3 of 16 axillary lymph nodes (largest deposit 8 mm, no extranodal extension); ER positive, PR positive, HER2 negative.<br>10.1 Give the clinical TNM and stage.<br>10.2 Give the pathological TNM and stage.`,
 gray:"10. TMN staging both clinical and pathological of breast cancer (ให้ Pathological report มาให้อ่านผล)",
 flag:"ไฟล์ให้แค่หัวข้อ — ข้อมูลผู้ป่วยและ pathology report ทั้งหมด (อายุ ขนาดก้อน จำนวนต่อมน้ำเหลือง receptor) Claude แต่ง · stage ใช้ AJCC 8th anatomic stage",
 notes:"ไฮไลต์ 'TMN staging both clinical and pathological' และ 'Pathological report มา' · ไม่มีเฉลย",
 parts:S(
  B("10.1 Give the clinical TNM and stage.",4,{tags:["path"],
   ans:"<b>cT2 N1 M0</b> → <b>Anatomic stage IIB</b> · cT2 = ก้อน &gt;2 ถึง ≤5 cm (3.5 cm) ไม่มีผิวหนัง/ผนังอกถูกลุกลาม · cN1 = ต่อมน้ำเหลืองรักแร้ข้างเดียวกัน level I–II ที่<b>ขยับได้</b> (ถ้าติดกันเป็นกลุ่ม/ติดแน่น = cN2a) · M0 = ไม่มีการแพร่กระจาย",
   exp:"Clinical staging ใช้ข้อมูลก่อนการรักษา: ตรวจร่างกาย + imaging (± biopsy) · AJCC 8 ยังมี prognostic stage ที่รวม grade, ER, PR, HER2",
   rubric:"ได้เต็ม = cT2 + cN1 + M0 + IIB",
   pts:[CR(P("cT2","t2")),CR(P("cN1","n1")),P("M0","m0"),CR(P("Stage IIB","iib","2b","ii b"))]}),
  B("10.2 Give the pathological TNM and stage.",4,{tags:["path"],
   ans:"<b>pT2 pN1a M0</b> → <b>Anatomic stage IIB</b> · pT2 = ขนาดที่ใหญ่ที่สุดของ invasive component 3.2 cm (&gt;2–≤5 cm) · <b>pN1a</b> = metastasis ใน <b>1–3 axillary lymph nodes</b> อย่างน้อย 1 ต่อม &gt;2 mm (3/16, ใหญ่สุด 8 mm) · (pN2a = 4–9 ต่อม, pN3a ≥10 ต่อม) · M0",
   exp:"pN แยก micrometastasis (&gt;0.2–2 mm = pN1mi) และ ITC (≤0.2 mm = pN0(i+)) · ขนาด T วัดจากส่วน invasive เท่านั้น",
   rubric:"ได้เต็ม = pT2 + pN1a + M0 + IIB · ตอบ pN1 ไม่ระบุ a ได้เกือบเต็ม",
   pts:[CR(P("pT2","t2")),CR(P("pN1a (1–3 nodes)","n1a","n1")),P("M0","m0"),CR(P("Stage IIB","iib","2b","ii b"))]})
 ),
 interp:"แยก clinical vs pathological TNM ของมะเร็งเต้านม และจัด anatomic stage",
 summary:["T: T1 ≤2 cm, T2 >2–5 cm, T3 >5 cm, T4 ลามผิวหนัง/ผนังอก/inflammatory","cN1 = ต่อมรักแร้ขยับได้ · cN2a = ติดแน่น/ติดกัน","pN1a 1–3 · pN2a 4–9 · pN3a ≥10 ต่อม","T2N1M0 = stage IIB"]}),

/* ===== สถานี 11 ===== */
Co({page:249,orig:"11",topic:"inst",sub:"Drain",title:"Two surgical drains — name and operations in which they are used",kimg:["os66c_k11"],seen:"คล้าย MDCU67 RoC OSCE 10 (Redivac, Penrose drain)",
 imgAlt:"อุปกรณ์ระบายในการผ่าตัด 2 ชนิด (11.1, 11.2) — ไฟล์ไม่มีรูป",
 stem:`Two surgical drains (11.1 and 11.2) are presented. Name each device and give two operations in which it is used.`,
 gray:"11. บอกชื่ออุปกรณ์ต่อไปนี้ และบอกการผ่าตัดที่ใช้อุปกรณ์ดังกล่าวมา 2 ชื่อ 11.1 Jackson-Pratt drain 11.2 Penrose drain",
 flag:NOIMG+" · ไฟล์บอกชื่ออุปกรณ์ (= คำตอบ) ไว้ในคำถาม ไม่มีรูป",
 notes:"ไฟล์ระบุชื่อ: 11.1 Jackson-Pratt drain · 11.2 Penrose drain · ไม่มีเฉลยการผ่าตัด",
 parts:S(
  B("11.1 Name the first drain and give two operations in which it is used.",3,{tags:["inst"],key:"Jackson-Pratt drain (ไม่มีเฉลยการผ่าตัด)",
   ans:"<b>Jackson-Pratt (JP) drain</b> — closed suction drain แบบ<b>ลูกยางบีบ (bulb)</b> สร้างแรงดูดต่ำ สายแบนซิลิโคนมีรู · ใช้ใน: <b>mastectomy/axillary dissection</b>, <b>thyroidectomy/neck dissection</b>, hepatobiliary/pancreatic surgery (เช่น cholecystectomy ยาก, Whipple, liver resection), abdominal abscess/cavity, low anterior resection",
   exp:"Closed suction ลดการติดเชื้อย้อนกลับ ดู content (bile, chyle, pancreatic juice) และปริมาณได้",
   rubric:"ชื่อ 1 + การผ่าตัด 2",
   pts:[CR(P("Jackson-Pratt drain","jackson","\\bjp\\b","bulb")),G("การผ่าตัด ≥2",2,P("Mastectomy/axillary dissection","mastectomy","axill","เต้านม"),P("Thyroidectomy/neck dissection","thyroid","neck","ไทรอยด์"),P("Hepatobiliary/pancreatic surgery","whipple","pancrea","liver","hepat","cholecyst","biliary"),P("Abdominal/colorectal surgery","abscess","colorectal","anterior resection","laparotomy","ช่องท้อง"))]}),
  B("11.2 Name the second drain and give two operations in which it is used.",3,{tags:["inst"],key:"Penrose drain (ไม่มีเฉลยการผ่าตัด)",
   ans:"<b>Penrose drain</b> — ท่อยางแบนนิ่ม <b>open passive drain</b> (gravity/capillary action) · ใช้ใน: <b>incision and drainage ของ abscess</b> (ฝีใต้ผิวหนัง, perianal abscess), แผลปนเปื้อน/ติดเชื้อตื้น ๆ, เป็น <b>sling คล้อง spermatic cord ใน inguinal hernia repair</b> หรือคล้องหลอดเลือด/ท่อ, tourniquet นิ้วมือ",
   exp:"Open drain ต้องเปลี่ยนผ้าก๊อซบ่อย และเสี่ยงติดเชื้อย้อนกลับมากกว่า closed drain",
   rubric:"ชื่อ 1 + การผ่าตัด 2",
   pts:[CR(P("Penrose drain","penrose")),G("การใช้ ≥2",2,P("I&D abscess","abscess","ฝี","หนอง","i&d"),P("แผลปนเปื้อน/ติดเชื้อ","contaminat","ติดเชื้อ","ปนเปื้อน","wound"),P("Sling คล้อง spermatic cord (hernia)","sling","hernia","ไส้เลื่อน","spermatic","คล้อง"),P("Tourniquet นิ้ว","tourniquet"))]})
 ),
 interp:"แยก closed suction (JP) กับ open passive (Penrose) drain และข้อบ่งใช้",
 summary:["JP = closed bulb suction → mastectomy, thyroidectomy, HPB surgery","Penrose = open passive → abscess I&D, แผลปนเปื้อน","Penrose ใช้เป็น sling คล้อง spermatic cord ได้","Closed drain ลดการติดเชื้อย้อนกลับ"]}),

/* ===== สถานี 12 ===== */
Co({page:249,orig:"12",topic:"suture",sub:"Suture material",title:"Three suture materials — name, classify, uses, skin closure",kimg:["os66c_k12"],seen:"คล้าย MDCU67 RoC OSCE 12 (nylon/catgut/silk)",
 imgAlt:"ไหมเย็บแผล 3 ชนิด ชนิดแรกอยู่ในซอง (ไฟล์ไม่มีรูป)",
 stem:`Three suture materials are presented (one in its packet).<br>12.1 Give the generic name of each suture.<br>12.2 Classify each: natural/synthetic, multifilament/monofilament, absorbable/non-absorbable.<br>12.3 What can each be used for?<br>12.4 Which can be used to suture skin? (more than one answer is possible)`,
 gray:"12. ให้ suture มา 3 ชนิดคือ Prolene มาพร้อมซอง, Chromic catgut, และ silk 14.1 บอก Generic name ของไหมที่ให้ 14.2 ทำจากวัสดุอะไร natural/synthetic, multi/monofilament, absorb/non-absorbable 14.3 ใช้เย็บอะไรได้บ้าง 14.4 ชนิดไหนใช้เย็บผิวหนังได้ (อาจมีคำตอบได้มากกว่า 1 ชนิด)",
 flag:NOIMG+" · ไฟล์บอกชื่อไหม (= คำตอบ) ไว้ในคำถาม · ⚠ 12.4 เส้นปากกาแดงในไฟล์ไม่ชัด",
 opinion:"ในไฟล์มีเส้นปากกาแดง 2 เส้นลากจากคำว่า 'catgut' และ 'silk' ลงมาที่ข้อย่อยสุดท้าย (ชนิดไหนเย็บผิวหนังได้) — ถ้าหมายถึงว่า catgut และ silk เย็บผิวหนังได้ ไม่เห็นด้วยกับ catgut: ไหมที่เหมาะเย็บผิวหนังคือ <b>Prolene (polypropylene)</b> และ <b>silk</b> ส่วน chromic catgut ไม่ใช้เย็บผิวหนังทั่วไป (reaction มาก)",
 notes:"ไฟล์ระบุชื่อ: Prolene มาพร้อมซอง, Chromic catgut, silk · ข้อย่อยพิมพ์เป็น 14.1–14.4 · ไฮไลต์: Generic name, natural/synthetic, multi/monofilament, absorb/non-absorbable, (อาจมีคำตอบได้มากกว่า 1 ชนิด) · เส้นปากกาแดงจาก 'catgut' และ 'silk' ลงไปที่ 14.4",
 parts:S(
  B("12.1 Give the generic name of each suture.",3,{tags:["suture"],key:"Prolene, Chromic catgut, silk (ชื่อที่ไฟล์ให้)",
   ans:"<b>Polypropylene</b> (Prolene เป็นชื่อการค้า — ไหมสีฟ้า monofilament) · <b>Chromic catgut</b> · <b>Silk</b>",
   exp:"Prolene = ชื่อการค้าของ Ethicon · generic name = polypropylene",
   rubric:"1 คะแนนต่อชนิด · ตอบ 'Prolene' แทน polypropylene ได้ครึ่งคะแนน",
   pts:[CR(P("Polypropylene","polypropylene")),P("Chromic catgut","catgut","chromic"),P("Silk","silk","ไหมดำ")]}),
  B("12.2 Classify each suture.",3,{tags:["suture"],key:"ไม่มีเฉลย (ไฮไลต์หัวข้อ natural/synthetic, multi/monofilament, absorb/non-absorbable)",
   ans:"<b>Polypropylene</b>: synthetic, monofilament, non-absorbable · <b>Chromic catgut</b>: natural (collagen จากลำไส้แกะ/วัว ชุบเกลือโครเมียมให้สลายช้าลง), twisted (ขัดจนคล้าย monofilament), absorbable (~90 วัน) · <b>Silk</b>: natural (โปรตีนรังไหม), braided multifilament, non-absorbable",
   exp:"Synthetic monofilament มี tissue reaction ต่ำสุด และเชื้อเกาะน้อย",
   rubric:"1 คะแนนต่อชนิดเมื่อถูกครบ 3 มิติ",
   pts:[CR(P("Polypropylene: synthetic monofilament non-absorbable","synthetic","monofilament","non.?absorb")),P("Catgut: natural absorbable","natural","ธรรมชาติ","absorb","ละลาย","collagen"),P("Silk: natural braided non-absorbable","braid","ถัก","multifilament","natural")]}),
  B("12.3 What can each be used for?",3,{tags:["suture"],key:NK,
   ans:"<b>Polypropylene</b>: เย็บผิวหนัง (โดยเฉพาะ subcuticular ที่ดึงออกได้), <b>vascular anastomosis</b>, ปิด fascia/abdominal wall, ยึด mesh ไส้เลื่อน · <b>Chromic catgut</b>: เย็บ <b>mucosa</b> (ช่องปาก, ลำไส้ชั้นใน), ผูกหลอดเลือดเล็ก/subcutaneous, perineum/episiotomy, circumcision · <b>Silk</b>: <b>ligature ผูกหลอดเลือด</b>, ยึด drain/สายต่าง ๆ กับผิวหนัง, เย็บ seromuscular ของลำไส้, ผิวหนัง",
   exp:"Polypropylene เรียบลื่นผ่านเนื้อเยื่อดี แต่ปมลื่น ต้องผูกหลายปม",
   rubric:"1 คะแนนต่อชนิด",
   pts:[P("Polypropylene: skin, vascular, fascia, mesh","skin","ผิวหนัง","vascular","หลอดเลือด","fascia","mesh","anastomo"),P("Catgut: mucosa / subcutaneous / perineum","mucosa","เยื่อบุ","subcutaneous","perine","episiotomy","circumcis","ช่องปาก"),P("Silk: ligature / ยึด drain / bowel","ligat","ผูก","drain","seromuscular","ลำไส้")]}),
  B("12.4 Which can be used to suture skin?",1,{tags:["suture"],key:"เส้นปากกาแดงลากจาก 'catgut' และ 'silk' มาที่ข้อนี้ (ความหมายไม่ชัด)",
   ans:"<b>Polypropylene (Prolene) และ silk</b> — polypropylene ดีที่สุด (monofilament reaction น้อย) · silk ใช้ได้ (หนังศีรษะ, ยึดท่อ) แต่ reaction มากกว่า · chromic catgut ไม่ใช้เย็บผิวหนังทั่วไป",
   exp:"Non-absorbable monofilament (nylon, polypropylene) เป็นมาตรฐานสำหรับผิวหนังที่จะตัดไหมออก",
   rubric:"ได้เต็ม = polypropylene + silk · ตอบ catgut หักคะแนน",
   pts:[CR(P("Polypropylene / Prolene","polypropylene","prolene")),P("Silk","silk")]})
 ),
 interp:"ไหม 3 ชนิด: generic name, การจำแนก, การใช้ และไหมที่เย็บผิวหนัง",
 summary:["Prolene = polypropylene: synthetic monofilament non-absorbable","Chromic catgut: natural absorbable → mucosa","Silk: natural braided non-absorbable → ligature, ยึด drain","ผิวหนัง: polypropylene/nylon (± silk) — ไม่ใช้ catgut"]}),

/* ===== สถานี 13 ===== */
Co({page:249,orig:"13",topic:"proc",sub:"Sterile gloving/scrub",ex:1,proc:1,title:"Procedure — drying hands after scrub and gloving in the operating room",seen:"คล้าย MDCU67 RoC OSCE 13 (ใส่ถุงมือ sterile)",
 stem:`In the operating room, after completing your surgical hand scrub, demonstrate how to <b>dry your hands</b> and put on sterile gloves using the <b>open technique</b>.`,
 gray:"13. เช็ดมือ และใส่ถุงมือใน OR ด้วย open technique",
 sp:"สถานีจำลองห้องผ่าตัด มีอาจารย์ดู · มีผ้าเช็ดมือ sterile วางบนชุดผ้า, ซองถุงมือ sterile ขนาดของนักศึกษา · สมมติว่าล้างมือ (surgical scrub) เสร็จแล้ว มือยกสูงเหนือข้อศอก · ผู้คุมดู: มืออยู่เหนือเอวและสูงกว่าข้อศอกตลอด, ใช้ผ้าเช็ดมือถูกวิธี (ด้านละข้าง จากปลายนิ้วไปข้อศอก ไม่ย้อน), ไม่ให้ผ้าแตะชุด, เปิดซองถุงมือถูก, open technique ถูก ไม่ปนเปื้อน",
 flag:"ไฟล์มีแค่หัวข้อ — รายละเอียดอุปกรณ์ Claude แต่ง",
 notes:"ไฮไลต์ 'มือใน OR ด้วย open technique' · ไม่มีเฉลย",
 parts:S(
  B("13.1 Dry your hands after scrubbing and put on sterile gloves by the open technique.",8,{tags:["proc"],
   ans:"<b>หลัง scrub</b>: ถือมือ<b>สูงกว่าข้อศอก</b> ให้น้ำไหลลงข้อศอก เดินเข้าห้องโดยใช้หลังดันประตู · <b>เช็ดมือ</b>: หยิบผ้า sterile จากชุด ก้มตัวเล็กน้อยไม่ให้น้ำหยดใส่ชุด · คลี่ผ้า ใช้ครึ่งหนึ่ง (หรือปลายข้างหนึ่ง) เช็ดมือข้างแรก <b>จากปลายนิ้ว → ฝ่ามือ/หลังมือ → แขน → ข้อศอก</b> หมุนผ้าไปเรื่อย ๆ <b>ไม่ย้อนกลับ</b> · เปลี่ยนไปใช้อีกด้าน/อีกครึ่งของผ้าเช็ดมือข้างที่สองในลักษณะเดียวกัน · ผ้าไม่แตะชุด ทิ้งผ้าในที่ทิ้ง (ไม่ข้าม field) · <b>Open gloving</b>: (ซองถุงมือเปิดวางบนพื้นที่ sterile) จับ<b>ด้านในของ cuff</b> ที่พับไว้ของถุงมือข้างแรกด้วยมือเปล่า สอดมือเข้า (ไม่ต้องดึง cuff ลง) → ใช้นิ้วมือที่ใส่ถุงมือแล้ว<b>สอดเข้าใต้ cuff (ด้านนอก)</b> ของถุงมืออีกข้าง สวม แล้วพลิก cuff ขึ้นโดยนิ้วไม่แตะผิวหนัง → ใช้นิ้วมือที่สองสอดใต้ cuff ข้างแรกพลิกขึ้น · มืออยู่<b>เหนือเอว ต่ำกว่าไหล่</b> ไม่แตะสิ่งไม่ sterile · ถ้าปนเปื้อนเปลี่ยนถุงมือ",
   exp:"หลัก: ผิวหนังเปล่าแตะได้แค่ผิวด้านในของถุงมือ (ผิวที่จะสัมผัสผิวหนัง) · มือที่ใส่ถุงมือแล้วแตะได้แค่ผิวนอก (sterile) · ใน OR ที่ใส่ gown แล้วนิยม closed technique",
   rubric:"ได้เต็ม = มือสูงกว่าศอก + เช็ดจากปลายนิ้วไปศอกไม่ย้อน ใช้คนละส่วนของผ้า + open technique ถูก ไม่ปนเปื้อน · ปนเปื้อนแล้วไม่แก้ไขได้คะแนนน้อย",
   pts:[H("หลัง scrub / เช็ดมือ",45),CR(P("มือสูงกว่าข้อศอก น้ำไหลลงศอก","ข้อศอก","elbow","สูงกว่า","ยกมือ")),CR(P("เช็ดจากปลายนิ้ว → ข้อศอก ไม่ย้อน","ปลายนิ้ว","fingertip","ไม่ย้อน","ทิศทางเดียว","distal to proximal")),P("ใช้คนละส่วน/ด้านของผ้าแต่ละมือ ผ้าไม่แตะชุด","อีกด้าน","คนละ","อีกครึ่ง","other side","ไม่แตะชุด"),
    H("Open gloving",45),CR(P("มือเปล่าจับด้านในของ cuff ถุงมือข้างแรก","ด้านใน","inside","inner","cuff","ขอบพับ")),CR(P("มือที่ใส่ถุงมือสอดใต้ cuff ด้านนอกของข้างที่สอง","สอดใต้","under the cuff","ด้านนอก","outside","outer")),P("พลิก cuff โดยไม่แตะผิวหนัง","พลิก","roll","ไม่แตะผิว"),
    H("Sterility",10),P("มือเหนือเอวต่ำกว่าไหล่ ปนเปื้อนแล้วเปลี่ยน","เหนือเอว","waist","ไหล่","shoulder","เปลี่ยน","contamin","ปนเปื้อน")]})
 ),
 interp:"หลัก aseptic หลัง surgical scrub: เช็ดมือด้วยผ้า sterile และใส่ถุงมือแบบ open technique",
 summary:["หลัง scrub มือสูงกว่าศอกตลอด","เช็ดมือ: ปลายนิ้ว → ศอก ไม่ย้อน ใช้คนละส่วนของผ้าแต่ละข้าง","Open gloving: มือเปล่าจับด้านใน cuff · มือที่ใส่ถุงมือสอดใต้ cuff ด้านนอก","มือเหนือเอวต่ำกว่าไหล่ ปนเปื้อน → เปลี่ยน"]})
);
})();
