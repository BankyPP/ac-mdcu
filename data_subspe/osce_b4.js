(function(){
/* Subspecialty Surgery OSCE ข้อสอบเก่า AC — MDCU67 RoD (AC SURGERY SUBSPECIALTY 4/2557, recall โดยรุ่นพี่)
   ไฟล์ GSUP4K (01_5_MCQs_Key_4.pdf) · หน้า 186 = หน้าแรกของชุด: สอบหลังศัลย์ 5 สัปดาห์ แบ่ง 3 ส่วน MCQ / OSCE / PowerPoint
     ("ส่วน OSCE จะคล้ายๆเดิมอยู่แล้ว ขาประจำก็เช่นเย็บผูก ซักประวัติ และตรวจร่างกาย gen surgery ชื่อและคุณสมบัติของไหม อุปกรณ์ผ่าตัด")
   พาร์ท OSCE (Part 2, "OSCE 14 ข้อ ฐานละ 3 นาที") หน้า 207 ปก, 208–219 = สถานี 1–12 · สถานี 13–14 ไม่มีในไฟล์ (หน้า 220 = "Good Luck!") → ไม่มีระเบียน
   พาร์ท PowerPoint (Part 3, "PowerPoint 14 ข้อ เปิดไปเรื่อยๆ ข้อละ 3 นาที") หน้า 191 ปก, 192–205 = PPT 1–14 · หน้า 206 = หน้าจบ ("แอคไม่ได้เฉลยละเอียดนะ")
   วิธีอ่านเฉลย: ตัวพิมพ์ดำมุมขวาล่างของสไลด์ = คำตอบ/ชื่อโรคที่ผู้ทำ recall ใส่ · ตัวแดงเล็กข้างคำถาม (ไฮไลต์เหลือง) = ลายมือ/โน้ตคำตอบเพิ่ม
   รูปในสไลด์ส่วนใหญ่เป็นรูปที่ผู้ทำ recall หามาแทน (เช่น PPT 10 เขียนว่า "แต่ภาพที่หยิบๆมาคือ incusion cyst") · PPT 13 กับ 14 ใช้ภาพเดียวกัน
   รูปโจทย์: os67d_p1–p13 (PPT 14 ใช้ os67d_p13) · os67d_4–9 · รูปเฉลย os67d_kp1–kp14, os67d_k2–k12 · สถานี 12 รูปแขนมีเส้นแดงคำตอบ → NOIMG + kimg */
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
const Co=o=>Object.assign({set:"MDCU67",ro:"RoD",file:"GSUP4K",opinion:""},o);
QB.push(

/* ===== OSCE 1 ===== */
Co({page:208,sec:"OSCE",orig:"1",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — skin suturing on a pad with instrument tie, then cutting the suture",
 stem:`On the suture pad provided, place two interrupted skin sutures — one simple interrupted suture and one mattress suture — and tie each with an instrument-tie technique.<br>1.1 Perform the suturing and knot tying.<br>1.2 Demonstrate the correct technique for cutting the suture.`,
 gray:"Part 2 OSCE 14 ข้อ ฐานละ 3 นาที · 1 · 1.1 เย็บ simple mattress 2 ปม ผูกด้วย instrument technique · 1.2 แสดงวิธีตัดไหมอย่างถูกต้อง",
 flag:"ไฟล์เขียน \"simple mattress 2 ปม\" — Claude ตีความเป็น 2 เข็ม: simple interrupted 1 + mattress 1 (vertical หรือ horizontal) · \"ตัดไหม\" ตีความได้ทั้งตัดหางไหมหลังผูก และการตัด (ถอด) ไหม → checklist ให้คะแนนทั้งสองแบบ",
 notes:"ไฟล์ไฮไลต์คำว่า simple mattress 2 ปม และ instrument technique ไม่มีแนวคำตอบ",
 sp:"หุ่นแผ่นฝึกเย็บแผล (suture pad) มีแผลตรงยาวประมาณ 3–4 cm · อุปกรณ์: needle holder, toothed forceps, suture scissors, ไหม nylon 3-0/4-0 ติดเข็ม cutting, ถุงมือ · ผู้คุมดู: จับเครื่องมือถูก (needle holder จับเข็มที่ 1/3–1/2 จากโคน), แทงเข็มตั้งฉาก, ระยะห่างขอบแผลและระหว่างเข็มสม่ำเสมอ, ขอบแผล evert, ผูก instrument tie ปมแบน (square) ≥3 throw ไม่รัดแน่นจนผิวซีด, ตัดหางไหมยาวพอดี",
 parts:S(
  B("1.1 Place one simple interrupted and one mattress suture, each tied with an instrument tie.",6,{tags:["proc"],key:"(ไฟล์ให้แค่โจทย์: เย็บ simple mattress 2 ปม ผูกด้วย instrument technique)",
   ans:"<b>เตรียม:</b> สวมถุงมือ จัดเครื่องมือ · needle holder จับเข็มที่ประมาณ 1/3–1/2 จากโคนเข็ม (ไม่จับปลายแหลม) · ใช้ toothed forceps จับขอบแผลเบา ๆ<br><b>Simple interrupted:</b> แทงเข็มตั้งฉากผิว ห่างขอบแผลประมาณ 3–5 mm หมุนข้อมือตามความโค้งเข็ม ออกอีกฝั่งระยะเท่ากัน ลึกเท่ากันทั้งสองฝั่ง (ให้ขอบแผล evert)<br><b>Mattress:</b> vertical mattress = far-far (ห่างขอบ ~5–8 mm ลึก) แล้วย้อนกลับ near-near (~1–2 mm ตื้น) ฝั่งเดิมของจุดเริ่ม → ขอบแผล evert ดี · หรือ horizontal mattress = เข้า-ออกขนานแผล แล้วย้อนกลับฝั่งเดิมระยะเท่ากัน<br><b>Instrument tie:</b> วาง needle holder ระหว่างเส้นไหม พันไหมฝั่งยาวรอบ needle holder 2 รอบ (surgeon's knot) จับหางสั้นดึงข้ามแผล → พันกลับทิศ 1 รอบ ดึงสลับทิศ → อีก 1 throw · ปมแบน (square) ไม่ granny วางปมไว้ด้านข้างแผล ไม่ทับรอยแผล · รัดพอให้ขอบชิดกัน ไม่รัดแน่นจนผิวซีด",
   exp:"Mattress suture ใช้เมื่อขอบแผลมีแนวโน้มม้วนเข้า (inversion) หรือผิวหนาตึง ช่วยให้ขอบ evert และลดแรงตึง · การสลับทิศการพันในแต่ละ throw ทำให้ได้ square knot ที่ไม่คลาย",
   rubric:"ได้เต็ม = เย็บถูกทั้ง 2 แบบ ระยะสม่ำเสมอ ขอบ evert ผูก instrument tie ถูกและปมแบน · หักคะแนน = จับปลายเข็ม, ปมคลาย/granny knot, รัดแน่นจนผิวซีด, ปมอยู่บนแนวแผล · mattress แบบ vertical หรือ horizontal ได้ทั้งคู่",
   pts:[H("เตรียม",15),P("สวมถุงมือ จับเข็มที่ 1/3–1/2 จากโคน","ถุงมือ","glove","1/3","โคนเข็ม"),H("เย็บ",45),CR(P("แทงเข็มตั้งฉาก หมุนตามความโค้งเข็ม ระยะห่างขอบเท่ากันสองฝั่ง","ตั้งฉาก","perpendicular","ความโค้ง","curve")),P("Simple interrupted ถูกต้อง","simple interrupt"),CR(P("Mattress (far-far near-near หรือ horizontal) ถูกต้อง","far.?far","near.?near","vertical mattress","horizontal mattress")),P("ขอบแผล evert","evert","บานออก"),H("ผูกปม",40),CR(P("Instrument tie: พัน 2 รอบแรก แล้วสลับทิศ","instrument tie","สลับทิศ","surgeon.?s knot","พัน")),P("ปม square ≥3 throw วางข้างแผล ไม่รัดแน่น","square","3 throw","ข้างแผล","ไม่แน่น","ไม่รัด")]}),
  B("1.2 Demonstrate the correct technique for cutting the suture.",4,{tags:["proc"],flag:"Claude ตีความ \"ตัดไหม\" ได้ 2 แบบ ให้คะแนนแบบใดแบบหนึ่ง",
   ans:"<b>ตัดหางไหมหลังผูก:</b> ใช้ปลายกรรไกรตัดไหม (suture scissors) ไถลลงตามเส้นไหมจนชนปม หมุนกรรไกรเล็กน้อย (~45°) แล้วตัด เห็นปลายกรรไกรตลอด (ไม่ตัดโดน tissue) · ไหม nylon ที่ผิวหนังเหลือหาง ~5–10 mm เพื่อให้ตัดออกง่าย (ไหมละลายฝังใต้ผิวเหลือสั้น ~2–3 mm)<br><b>ตัด (ถอด) ไหม:</b> ทำความสะอาดแผล ใช้ forceps ดึงปมขึ้นเล็กน้อย ตัดไหมด้านใดด้านหนึ่ง<b>ชิดผิวหนังใต้ปม</b> แล้วดึงไหมออกไปทางแผล (ไม่ดึงออกห่างจากแผล) เพื่อไม่ให้ส่วนไหมที่อยู่นอกผิวลากผ่านเนื้อเยื่อ และไม่ให้แผลแยก",
   exp:"การตัดใต้ปมชิดผิวทำให้ไหมที่ปนเปื้อนอยู่นอกผิวไม่ถูกลากผ่านรูเข็ม ลดการติดเชื้อ · การดึงไปทางแผลป้องกันแรงดึงให้ขอบแผลแยก",
   rubric:"ได้ = ตัดหางไหมด้วยปลายกรรไกรโดยไถลชนปมแล้วหมุน เหลือหางพอดี หรือ ถอดไหมโดยตัดชิดผิวใต้ปมแล้วดึงเข้าหาแผล",
   pts:[G("วิธีตัดไหมถูกต้อง (แบบใดแบบหนึ่ง)",1,P("ไถลปลายกรรไกรลงชนปม หมุน แล้วตัด เหลือหางพอดี","ไถล","slide","หมุน","rotate","หาง"),P("ถอดไหม: ดึงปมขึ้น ตัดชิดผิวใต้ปม ดึงไปทางแผล","ชิดผิว","ใต้ปม","ดึง.{0,10}(ทาง|เข้า)แผล","toward.{0,10}wound")),P("ใช้ปลายกรรไกร มองเห็นปลายตลอด ไม่ตัดโดนเนื้อเยื่อ","ปลายกรรไกร","tip","มองเห็น")]})
 ),
 interp:"สถานีขาประจำ: เย็บแผลด้วยเทคนิคพื้นฐาน + instrument tie + การตัดไหม",
 summary:["Simple interrupted: แทงตั้งฉาก ระยะเท่ากันสองฝั่ง ขอบ evert","Vertical mattress: far-far แล้ว near-near · ใช้เมื่อขอบแผลม้วนเข้า","Instrument tie: รอบแรกพัน 2 รอบ แล้วสลับทิศทุก throw → square knot ≥3 throw วางข้างแผล","ตัดหาง: ไถลชนปม หมุน ตัด · ถอดไหม: ตัดชิดผิวใต้ปม ดึงเข้าหาแผล"]}),

/* ===== OSCE 2 ===== */
Co({page:209,sec:"OSCE",orig:"2",topic:"hx",sub:"Abdominal pain",ex:1,title:"History — a woman with abdominal pain for 5 hours",kimg:["os67d_k2"],
 stem:`A woman presents with abdominal pain for 5 hours before arriving at the hospital.<br>Take a further history from the patient. (A diagnosis is not required.)`,
 gray:"2 · ผู้หญิงมาด้วยอาการปวดท้อง 5 ชั่วโมงก่อนมาโรงพยาบาล · จงซักประวัติเพิ่มเติม (ไม่ต้องวินิจฉัย) · [มุมขวาล่าง] acute appendicitis",
 flag:"บทผู้ป่วยจำลอง (sp) Claude แต่งตามคีย์ acute appendicitis — อายุ/รายละเอียดอาการแต่งเพิ่ม",
 notes:"ไฟล์ไฮไลต์โจทย์ และพิมพ์คำตอบมุมขวาล่างว่า acute appendicitis",
 sp:"(Claude แต่ง) หญิงไทย 24 ปี · ปวดท้องเริ่มรอบสะดือ 5 ชม.ก่อน ปวดตื้อ ๆ ต่อเนื่อง ต่อมาย้ายมาปวดท้องน้อยขวา ปวดมากขึ้นเวลาเดิน/ไอ/รถกระเทือน ไม่ร้าวไปไหน ปวด 7/10 · เบื่ออาหาร คลื่นไส้ อาเจียน 1 ครั้งหลังเริ่มปวด · ตัวรุม ๆ ไม่ได้วัดไข้ · ไม่มีถ่ายเหลว ถ่ายปกติ ไม่มีถ่ายดำ · ไม่มีปัสสาวะแสบขัด/ปัสสาวะเป็นเลือด · ประจำเดือนมาสม่ำเสมอ LMP 2 สัปดาห์ก่อน มาปกติ · ไม่มีตกขาวผิดปกติ ไม่มีเลือดออกทางช่องคลอด · มีแฟน มีเพศสัมพันธ์ ใช้ถุงยางทุกครั้ง · ไม่มีโรคประจำตัว ไม่เคยผ่าตัด ไม่มียาประจำ ไม่แพ้ยา",
 parts:S(
  B("2.1 Take a focused history from this patient.",10,{tags:["hx"],key:"acute appendicitis (ไฟล์ให้แค่ชื่อโรคที่มุมสไลด์)",
   ans:"<b>แนะนำตัว</b> ยืนยันชื่อผู้ป่วย ขออนุญาตซักประวัติ<br><b>CC/PI ของอาการปวด:</b> onset (ทันที/ค่อยเป็น) · ตำแหน่งเริ่มต้นและ<b>การย้ายตำแหน่ง</b> (รอบสะดือ → RLQ) · ลักษณะ ความรุนแรง ต่อเนื่องหรือเป็นพัก ๆ · ร้าวไปไหน · ปัจจัยที่ทำให้ดีขึ้น/แย่ลง (ขยับ ไอ เดิน) · เคยเป็นมาก่อนไหม<br><b>อาการร่วม GI:</b> เบื่ออาหาร คลื่นไส้ อาเจียน (เกิดก่อนหรือหลังปวด) · ถ่ายเหลว/ท้องผูก/ถ่ายเป็นเลือด<br><b>อาการทั่วไป:</b> ไข้ หนาวสั่น<br><b>ระบบปัสสาวะ:</b> แสบขัด ปัสสาวะบ่อย เป็นเลือด ปวดหลัง/บั้นเอว<br><b>ประวัติทางนรีเวช (สำคัญในหญิงวัยเจริญพันธุ์):</b> LMP, ความสม่ำเสมอของประจำเดือน, โอกาสตั้งครรภ์ (เพศสัมพันธ์ การคุมกำเนิด), เลือดออกทางช่องคลอด, ตกขาวผิดปกติ, ประวัติ PID/ถุงน้ำรังไข่<br><b>อดีต:</b> โรคประจำตัว ประวัติผ่าตัดช่องท้อง ยาที่ใช้ (NSAIDs, ยาแก้ปวด) แพ้ยา<br><b>ปิด:</b> สรุปประวัติให้ผู้ป่วยฟัง ขอบคุณ",
   exp:"หญิงวัยเจริญพันธุ์ปวดท้องเฉียบพลันต้องแยก gynecologic causes (ectopic pregnancy, ruptured/torsion ovarian cyst, PID) และ UTI/ureteric colic จาก appendicitis เสมอ · ลำดับ \"ปวดก่อนแล้วจึงคลื่นไส้อาเจียน\" + migration ไป RLQ + anorexia เข้ากับ appendicitis (เป็นองค์ประกอบใน Alvarado score)",
   rubric:"ได้เต็ม = ครบ PI ของอาการปวด (รวม migration) + อาการร่วม GI + ไข้ + ปัสสาวะ + ประวัตินรีเวชรวมโอกาสตั้งครรภ์ · ขาดประวัติ LMP/ตั้งครรภ์ หักมาก",
   pts:[H("แนะนำตัว",5),P("แนะนำตัว ยืนยันชื่อ ขออนุญาต","แนะนำตัว","introduce","ขออนุญาต"),H("PI ของอาการปวด",35),P("Onset และระยะเวลา","onset","เริ่ม","ทันที","ค่อยๆ"),CR(P("ตำแหน่งเริ่มปวดและการย้ายตำแหน่ง","ย้าย","migrat","รอบสะดือ","periumbilical","ตำแหน่ง")),P("ลักษณะ ความรุนแรง ต่อเนื่อง/เป็นพัก","ลักษณะ","character","รุนแรง","severity","ต่อเนื่อง"),P("ร้าว และสิ่งที่ทำให้มาก/น้อยลง","ร้าว","radiat","มากขึ้น","aggravat","reliev"),H("อาการร่วม",25),P("เบื่ออาหาร คลื่นไส้ อาเจียน","เบื่ออาหาร","anorexia","คลื่นไส้","nausea","อาเจียน","vomit"),P("ไข้","ไข้","fever"),P("ถ่ายอุจจาระ: ถ่ายเหลว ท้องผูก ถ่ายเป็นเลือด","ถ่ายเหลว","diarrh","ท้องผูก","constipat","อุจจาระ"),P("ปัสสาวะแสบขัด บ่อย เป็นเลือด","ปัสสาวะ","dysuria","urinary"),H("นรีเวช",25),CR(P("LMP / โอกาสตั้งครรภ์","lmp","ประจำเดือน","ตั้งครรภ์","pregnan")),P("เลือดออกทางช่องคลอด ตกขาว เพศสัมพันธ์/คุมกำเนิด","ตกขาว","discharge","เพศสัมพันธ์","sexual","คุมกำเนิด","contracept"),H("อดีตและปิด",10),P("โรคประจำตัว ผ่าตัด ยา แพ้ยา","ผ่าตัด","surgery","โรคประจำตัว","แพ้ยา","allerg"),P("สรุปประวัติ ขอบคุณ","สรุป","summar","ขอบคุณ")]})
 ),
 interp:"ซักประวัติ acute abdomen ในหญิงวัยเจริญพันธุ์ — ต้องได้ลักษณะปวดแบบ appendicitis และคัดกรองสาเหตุทางนรีเวช/ปัสสาวะ",
 summary:["Appendicitis: ปวดรอบสะดือ → ย้ายไป RLQ, เบื่ออาหาร, คลื่นไส้อาเจียนหลังปวด, ไข้ต่ำ","หญิงวัยเจริญพันธุ์ต้องถาม LMP + โอกาสตั้งครรภ์ทุกราย (ectopic pregnancy)","ถามระบบปัสสาวะ (UTI/stone) และนรีเวช (PID, ovarian cyst torsion/rupture) เพื่อแยกโรค"]}),

/* ===== OSCE 3 ===== */
Co({page:210,sec:"OSCE",orig:"3",topic:"pe",sub:"Breast",ex:1,title:"Physical examination — breast examination in a woman with breast pain",kimg:["os67d_k3"],
 stem:`A woman presents with breast pain.<br>Demonstrate a breast examination on this patient (model) exactly as you would on a real patient.`,
 gray:"3 · แสดงการตรวจเต้านมผู้ป่วยที่มาด้วยอาการเจ็บเต้านม ตรวจเหมือนคนไข้จริงๆเลยนะจ๊ะ · [มุมขวาล่าง] อย่าลืมขออนุญาต และบอกให้มีพยาบาลมาอยู่ด้วย",
 flag:"ผลตรวจในหุ่น (sp) Claude แต่ง",
 notes:"โน้ตในไฟล์: อย่าลืมขออนุญาต และบอกให้มีพยาบาลมาอยู่ด้วย",
 sp:"หุ่นเต้านม/ผู้ป่วยจำลองหญิง · (Claude แต่ง) ผลตรวจ: เต้านมสองข้างสมมาตร ผิวหนังปกติ ไม่มี skin dimpling/peau d'orange หัวนมไม่บุ๋ม ไม่มี discharge · คลำไม่พบก้อน กดเจ็บเล็กน้อยบริเวณ upper outer quadrant ทั้งสองข้าง · ต่อมน้ำเหลือง axilla/supraclavicular คลำไม่ได้ · ผู้คุมดู: ขออนุญาต + ขอ chaperone, เปิดเฉพาะส่วนที่ตรวจ, ตรวจครบทุก quadrant + tail of Spence + หัวนม + ต่อมน้ำเหลือง, ตรวจข้างไม่เจ็บก่อน",
 parts:S(
  B("3.1 Perform a breast examination.",10,{tags:["pe"],key:"(ไฟล์มีแต่โน้ต: อย่าลืมขออนุญาต และบอกให้มีพยาบาลมาอยู่ด้วย)",
   ans:"<b>เตรียม:</b> แนะนำตัว อธิบายและ<b>ขออนุญาต</b> · ขอให้มี<b>พยาบาล (chaperone)</b> อยู่ด้วย · ล้างมือ · ความเป็นส่วนตัว เปิดเสื้อถึงเอว ตรวจเปรียบเทียบสองข้าง · ถามว่าเจ็บข้างไหน ตรวจข้างที่ไม่เจ็บก่อน<br><b>Inspection (นั่ง):</b> แขนวางข้างลำตัว → มือเท้าเอวกดสะโพก (เกร็ง pectoralis) → ยกแขนเหนือศีรษะ · ดูขนาด รูปร่าง ความสมมาตร ผิวหนัง (redness, dimpling, peau d'orange, ulcer) หัวนม (retraction, inversion, discharge, eczema)<br><b>Palpation (นอนหงาย):</b> ยกแขนข้างที่ตรวจไว้ใต้ศีรษะ ใช้ pad ของนิ้ว 2–4 คลำเป็นวงเล็ก ๆ 3 ระดับแรงกด แบบแนวตั้ง (vertical strip) หรือวงกลมให้ครอบคลุมทั้งเต้า ทุก quadrant + <b>tail of Spence</b> + ใต้ลานนม · ตรวจหัวนม (บีบดู discharge) · ถ้าพบก้อน: ตำแหน่ง ขนาด รูปร่าง ขอบ ความแข็ง การเคลื่อนที่ การยึดติดผิว/กล้ามเนื้อ กดเจ็บ<br><b>ต่อมน้ำเหลือง:</b> axillary (central, anterior, posterior, lateral, apical) โดยพยุงแขนผู้ป่วย · supraclavicular, infraclavicular<br><b>หลังตรวจ:</b> คลุมผ้า/ให้ใส่เสื้อ ขอบคุณ แจ้งผลตรวจ ล้างมือ",
   exp:"การเกร็ง pectoralis และยกแขนช่วยให้เห็น skin tethering/dimpling ของก้อนที่ยึดติด · tail of Spence ยื่นเข้า axilla เป็นตำแหน่งที่มักพลาด · ในผู้ป่วย mastalgia ตรวจเพื่อหา mass, mastitis/abscess และแยก chest wall pain",
   rubric:"ได้เต็ม = ขออนุญาต + chaperone, inspection 3 ท่า, palpation ครอบคลุมทุกบริเวณ + หัวนม, ต่อมน้ำเหลือง axilla + supraclavicular, ปิดท้ายสุภาพ · ไม่ขออนุญาต/ไม่มี chaperone หักมาก",
   pts:[H("เตรียม",20),CR(P("แนะนำตัว อธิบาย ขออนุญาต","ขออนุญาต","consent","permission")),CR(P("ขอให้มีพยาบาล/chaperone อยู่ด้วย","พยาบาล","chaperone")),P("ล้างมือ ความเป็นส่วนตัว เปิดถึงเอว","ล้างมือ","wash","ส่วนตัว","privacy","ถึงเอว"),H("Inspection",20),P("ดู 3 ท่า: แขนข้างตัว มือเท้าเอว ยกแขน","มือเท้าเอว","hands on hip","ยกแขน","arm.{0,10}raise","raise.{0,10}arm"),P("ดูผิวหนัง หัวนม ความสมมาตร","dimpl","peau","retract","หัวนม","nipple","สมมาตร","symmetr"),H("Palpation",35),P("นอนหงาย แขนไว้ใต้ศีรษะ","นอนหงาย","supine","ใต้ศีรษะ","behind.{0,10}head"),P("ใช้ pad ของนิ้ว คลำเป็นแบบแผนครบทุก quadrant","pad","finger","vertical strip","quadrant","ทุกส่วน"),P("Tail of Spence และหัวนม/ลานนม","spence","axillary tail","หัวนม","nipple","areola"),P("ตรวจข้างไม่เจ็บก่อน เปรียบเทียบสองข้าง","ข้างไม่เจ็บ","normal side","เปรียบเทียบ","compare"),H("ต่อมน้ำเหลือง",15),P("Axillary lymph nodes","axilla","รักแร้"),P("Supraclavicular / infraclavicular","supraclavicular","infraclavicular","ไหปลาร้า"),H("ปิด",10),P("คลุมผ้า ขอบคุณ แจ้งผล","ขอบคุณ","thank","แจ้งผล","คลุม")]})
 ),
 interp:"สถานีตรวจร่างกายขาประจำ — ทดสอบการตรวจเต้านมอย่างเป็นระบบพร้อมมารยาท (ขออนุญาต + chaperone)",
 summary:["ขออนุญาต + มีพยาบาล (chaperone) ทุกครั้ง","Inspection 3 ท่า: แขนข้างตัว, มือเท้าเอว, ยกแขน","Palpation นอนหงาย แขนใต้ศีรษะ ใช้ pad นิ้ว ครบทุก quadrant + tail of Spence + หัวนม","ตรวจต่อมน้ำเหลือง axilla, supraclavicular, infraclavicular"]}),

/* ===== OSCE 4 ===== */
Co({page:211,sec:"OSCE",orig:"4",topic:"img",sub:"IVP/KUB",title:"Imaging — intravenous pyelogram of the right kidney",img:["os67d_4"],kimg:["os67d_k4"],
 stem:`An intravenous pyelogram (IVP) film is shown. The arrow marks a point of interest.<br>4.1 Describe the IVP film.<br>4.2 Give the diagnosis.<br>4.3 State the treatment.`,
 gray:"4 · ฟิล์ม IVP จ้า · 4.1 จงบรรยายฟิล์ม IVP · 4.2 จง diagnosis · 4.3 จงบอกวิธี treatment · [ตัวแดง] Ureteroscopic lithotripsy · [มุมขวาล่าง] Right hydronephrosis with right renal stone",
 flag:"⚠ ไฟล์ตอบ right renal stone แต่จุดอุดกั้นตามลูกศรอยู่ที่ท่อไต (และไฟล์เองตอบรักษาด้วย ureteroscopic lithotripsy ซึ่งใช้กับนิ่วท่อไต) → เฉลยเป็น right proximal ureteric stone",
 notes:"ตัวแดง (ไฮไลต์) ใต้คำถาม: Ureteroscopic lithotripsy · ตัวพิมพ์มุมขวาล่าง: Right hydronephrosis with right renal stone (ไฮไลต์ with right renal stone)",
 opinion:"ไฟล์ตอบ \"Right hydronephrosis with right renal stone\" — ในฟิล์มเห็น pelvicalyceal system และท่อไตส่วนต้นข้างขวาโป่ง สารทึบรังสีหยุด/แคบลงที่ตำแหน่งลูกศรซึ่งอยู่ในแนวท่อไต จึงควรเรียกเป็น <b>ureteric stone</b> (ไม่ใช่ renal stone) ซึ่งสอดคล้องกับการรักษาที่ไฟล์ตอบ (URS lithotripsy) · รูปร่างท่อไตส่วนต้นที่โค้งเข้าหากระดูกสันหลังคล้าย reverse-J/fishhook ทำให้ต้องนึกถึง retrocaval ureter เป็น ddx ด้วย",
 parts:S(
  B("4.1 Describe the IVP film.",3,{tags:["img"],
   ans:"ฟิล์ม IVP (excretory phase) แสดงไตขวา: <b>pelvicalyceal system ขยาย</b> calyces ป้าน (blunting) · <b>ท่อไตส่วนต้นขยาย</b> (hydroureter) ลงมาถึงตำแหน่งลูกศร (ประมาณระดับกระดูกสันหลังส่วนเอวช่วงกลาง) แล้วสารทึบรังสีบางลง/หยุด → บ่งชี้จุดอุดกั้นที่ท่อไตส่วนต้น · ส่วนปลายต่อจากนั้นเห็นสารทึบรังสีน้อย",
   exp:"การบรรยาย IVP: บอก phase, ข้าง, ขนาด/รูปร่างไต, nephrogram, pelvicalyceal system, ท่อไต และตำแหน่งที่ผิดปกติ (filling defect, cut-off, deviation)",
   rubric:"ได้ = บอก hydronephrosis + ท่อไตส่วนต้นขยาย + จุดอุดกั้นที่ลูกศร · บอกแค่ hydronephrosis ได้บางส่วน",
   pts:[CR(P("Right hydronephrosis (calyces ป้าน pelvis ขยาย)","hydroneph","calyc","pelvis.{0,10}(dilat|ขยาย)","ไตบวมน้ำ")),P("ท่อไตส่วนต้นขยาย (hydroureter)","hydroureter","ท่อไต.{0,10}ขยาย","ureter.{0,15}dilat","dilat.{0,15}ureter"),P("จุดอุดกั้น/สารทึบรังสีหยุดที่ตำแหน่งลูกศร","ลูกศร","arrow","อุดกั้น","obstruct","cut.?off")]}),
  B("4.2 Give the diagnosis.",3,{tags:["img"],key:"Right hydronephrosis with right renal stone",flag:"⚠ เฉลยต่างจากไฟล์ (renal → ureteric stone)",
   ans:"<b>Right hydroureteronephrosis จาก right proximal ureteric stone</b> (นิ่วท่อไตส่วนต้นข้างขวาที่ตำแหน่งลูกศร) · ddx ของการอุดกั้นท่อไตส่วนต้น: ureteric stricture, urothelial tumor, retrocaval ureter (ท่อไตส่วนต้นขวาโค้งเข้าแนวกลางรูป reverse-J/fishhook), extrinsic compression",
   exp:"นิ่วเป็นสาเหตุที่พบบ่อยที่สุดของการอุดกั้นท่อไตในผู้ใหญ่ · นิ่วกรดยูริกเป็น radiolucent จึงเห็นเป็น filling defect บน IVP/CT",
   rubric:"ได้เต็ม = right ureteric stone with hydronephrosis · ตอบ right renal stone with hydronephrosis (ตามไฟล์) ได้บางส่วน",
   pts:[CR(P("Right ureteric stone / ureteral obstruction","ureter(ic|al)? stone","ureterolith","นิ่ว.{0,6}ท่อไต","ureteral obstruct")),P("ร่วมกับ hydronephrosis ข้างขวา","hydroneph","ไตบวมน้ำ")]}),
  B("4.3 State the treatment.",4,{tags:["img"],key:"Ureteroscopic lithotripsy",
   ans:"<b>ทันที:</b> ยาแก้ปวด (NSAIDs เป็นหลัก) · ประเมินการติดเชื้อและการทำงานของไต · ถ้า<b>มีไข้/ติดเชื้อร่วมกับการอุดกั้น</b> → ให้ antibiotics และ<b>ระบายด่วน</b> ด้วย percutaneous nephrostomy หรือ DJ stent ก่อน ห้ามเอานิ่วออกตอนติดเชื้อ<br><b>Definitive:</b> นิ่วเล็ก (≤10 mm) ไม่มีภาวะแทรกซ้อน → observation + ยาแก้ปวด ± medical expulsive therapy (alpha-blocker เช่น tamsulosin — EAU 2024 แนะนำชัดสุดสำหรับนิ่วท่อไตส่วนปลาย >5 mm; นิ่วท่อไตส่วนต้นมักต้อง URS/ESWL) · นิ่ว >10 mm, ไม่หลุด, ปวดไม่หาย หรืออุดกั้นต่อเนื่อง → <b>ureteroscopic lithotripsy (URS + laser)</b> หรือ ESWL สำหรับนิ่วท่อไตส่วนต้น",
   exp:"Obstructed infected kidney เป็น urologic emergency — decompress ก่อนเสมอ · URS มีอัตรา stone-free สูงสำหรับนิ่วท่อไตทุกระดับ",
   rubric:"ได้เต็ม = URS lithotripsy (หรือ ESWL) + บอกข้อบ่งชี้ระบายด่วนเมื่อติดเชื้อ หรือ MET สำหรับนิ่วเล็ก · ตอบ URS อย่างเดียวได้ส่วนใหญ่",
   pts:[CR(P("Ureteroscopic lithotripsy (URS) หรือ ESWL","ureteroscop","\\burs\\b","lithotrip","eswl","swl")),P("ยาแก้ปวด / medical expulsive therapy (alpha-blocker) ในนิ่วเล็ก","nsaid","แก้ปวด","analges","tamsulosin","alpha","expulsive"),P("มีไข้/ติดเชื้อ: antibiotics + ระบายด่วน (PCN/DJ stent)","nephrostomy","\\bpcn\\b","dj stent","double.?j","stent","ระบาย")]})
 ),
 interp:"อ่าน IVP ที่มี hydronephrosis + จุดอุดกั้นท่อไต และวางแผนรักษานิ่วท่อไต",
 summary:["IVP: บรรยาย phase, ข้าง, pelvicalyceal system, ท่อไต, จุดอุดกั้น","Hydroureteronephrosis เหนือจุดอุดกั้น → นิ่วท่อไตพบบ่อยที่สุด","รักษา: แก้ปวด · นิ่วเล็ก MET · นิ่วใหญ่/ไม่หลุด URS lithotripsy หรือ ESWL","มีไข้ + อุดกั้น → antibiotics + ระบายด่วน (PCN หรือ DJ stent)"]}),

/* ===== OSCE 5 ===== */
Co({page:212,sec:"OSCE",orig:"5",topic:"img",sub:"Acute abdomen series",title:"Imaging — plain abdominal film: name the series, describe and manage",img:["os67d_5"],kimg:["os67d_k5"],
 stem:`A plain abdominal radiograph is shown.<br>5.1 What is this series of films called, and which views (A, B, C) does it include?<br>5.2 Describe the abnormal findings and give the diagnosis.<br>5.3 State the initial management.`,
 gray:"5 · 5.1 ฟิล์มที่เห็นเรียกว่าฟิล์มอะไร ท่าอะไรบ้าง A B C · 5.2 บรรยายลักษณะผิดปกติ และให้การวินิจฉัย · 5.3 บอกการรักษาเบื้องต้น · [มุมขวาล่าง] acute abdomen small bowel obstruct",
 notes:"ตัวพิมพ์มุมขวาล่าง (ไฮไลต์): acute abdomen / small bowel obstruct · ไม่มีแนวคำตอบการรักษา",
 parts:S(
  B("5.1 Name the film series and its views (A, B, C).",3,{tags:["img"],key:"acute abdomen (series)",
   ans:"<b>Acute abdomen series</b> ประกอบด้วย 3 ท่า: <b>A. Supine (AP) abdomen</b> · <b>B. Upright (erect) abdomen</b> · <b>C. Upright PA chest X-ray</b> (ดู free air ใต้กะบังลม) · ถ้าผู้ป่วยยืน/นั่งไม่ได้ ใช้ <b>left lateral decubitus</b> แทนท่า upright · ฟิล์มที่ให้มาเป็นท่า upright abdomen (เห็น air-fluid level)",
   exp:"Supine ดูการกระจายของลมและขนาดลำไส้ · upright ดู air-fluid level · upright CXR ไวที่สุดในการเห็น pneumoperitoneum",
   rubric:"ได้เต็ม = ชื่อ acute abdomen series + ครบ 3 ท่า · บอก left lateral decubitus เป็นท่าทดแทนได้คะแนนเสริม",
   pts:[CR(P("Acute abdomen series","acute abdomen","abdominal series")),P("Supine abdomen","supine"),P("Upright abdomen","upright","erect"),P("Upright CXR (หรือ left lateral decubitus)","chest","cxr","decubitus")]}),
  B("5.2 Describe the abnormal findings and give the diagnosis.",4,{tags:["img"],key:"small bowel obstruct",
   ans:"<b>ลำไส้เล็กโป่งขยายหลายขด</b> (อยู่ส่วนกลางท้อง ขนาด >3 cm) · <b>air-fluid levels หลายระดับ</b> ต่างระดับกันแบบขั้นบันได (step-ladder) ในท่า upright · ลมในลำไส้ใหญ่/rectum น้อย · Dx: <b>mechanical small bowel obstruction</b>",
   exp:"เกณฑ์ลำไส้ขยาย 3-6-9: small bowel >3 cm, colon >6 cm, cecum >9 cm · ลำไส้เล็กมี valvulae conniventes พาดเต็มความกว้าง ลำไส้ใหญ่มี haustra พาดไม่เต็ม",
   rubric:"ได้เต็ม = dilated small bowel + multiple air-fluid levels + dx SBO",
   pts:[P("ลำไส้โป่งขยายหลายขด","dilat","โป่ง","ขยาย","distend"),P("Multiple air-fluid levels (step-ladder)","air.?fluid","step.?ladder","fluid level"),CR(P("Small bowel obstruction","small bowel obstruct","\\bsbo\\b","ลำไส้เล็กอุดตัน"))]}),
  B("5.3 State the initial management.",3,{tags:["img"],
   ans:"<b>NPO</b> · ใส่ <b>NG tube</b> decompression · <b>IV fluid resuscitation</b> (isotonic crystalloid) แก้ electrolyte (โดยเฉพาะ K) · ใส่ Foley ติดตาม urine output · ส่ง CBC, BUN/Cr, electrolytes, lactate · หาสาเหตุ (ตรวจ hernia, ประวัติผ่าตัด → adhesion) · ปรึกษาศัลยแพทย์ · <b>ผ่าตัดเร่งด่วน</b>ถ้ามีสัญญาณ strangulation (ไข้ ชีพจรเร็ว peritonitis WBC/lactate สูง), complete/closed-loop obstruction หรือ incarcerated hernia · adhesive partial SBO ลองรักษาแบบประคับประคอง ± water-soluble contrast",
   exp:"ผู้ป่วย SBO เสียน้ำเข้า third space และจากการอาเจียน → hypovolemia, hypokalemic metabolic alkalosis",
   rubric:"ได้เต็ม = NPO + NG decompression + IV fluid/แก้ electrolyte + บอกเมื่อไรต้องผ่าตัด",
   pts:[P("NPO","npo","งดน้ำงดอาหาร"),CR(P("NG tube decompression","ng tube","nasogastric","\\bng\\b")),CR(P("IV fluid + แก้ electrolyte","iv fluid","สารน้ำ","crystalloid","electrolyte","resuscitat")),P("Foley/ติดตาม urine output และ lab","foley","urine output","lactate","\\blab\\b"),P("ผ่าตัดถ้ามี strangulation/peritonitis/complete obstruction","strangulat","ผ่าตัด","surgery","laparotomy","peritonitis")]})
 ),
 interp:"ทดสอบชื่อและท่าของ acute abdomen series การอ่าน SBO และการรักษาเบื้องต้น",
 summary:["Acute abdomen series = supine abdomen + upright abdomen + upright CXR (ยืนไม่ได้ใช้ left lateral decubitus)","SBO: small bowel >3 cm, multiple air-fluid levels แบบ step-ladder, ลมใน colon น้อย","รักษาเบื้องต้น: NPO, NG decompression, IV fluid + แก้ K, Foley","ผ่าตัดเมื่อสงสัย strangulation/closed loop/incarcerated hernia"]}),

/* ===== OSCE 6 ===== */
Co({page:213,sec:"OSCE",orig:"6",topic:"img",sub:"Contrast GI study",title:"Imaging — contrast study of the colon with counseling",img:["os67d_6"],kimg:["os67d_k6"],
 stem:`A radiological study of the colon is shown.<br>6.1 What is this study called?<br>6.2 Give the diagnosis.<br>6.3 How would you counsel this patient?`,
 gray:"6 · 6.1 ฟิล์มที่เห็นเรียกว่าอะไร · 6.2 บอก diagnosis · 6.3 จงบอกว่าจะ counseling ผู้ป่วยยังไงบ้าง · [มุมขวาล่าง] multiple diverticulosis",
 notes:"ตัวพิมพ์มุมขวาล่าง: multiple diverticulosis · ไม่มีแนวคำตอบชื่อฟิล์มและการ counseling",
 parts:S(
  B("6.1 Name the study.",2,{tags:["img"],
   ans:"<b>Barium enema</b> (double-contrast barium enema) — สารทึบรังสีบรรจุใน colon ทั้งเส้นร่วมกับลม",
   exp:"Double-contrast (barium + air) เห็น mucosa และ outpouching ของ diverticula ได้ชัด · ปัจจุบันมักใช้ colonoscopy/CT แทน",
   rubric:"ได้ = barium enema (double contrast ได้คะแนนเต็ม)",
   pts:[CR(P("Barium enema","barium enema","double.?contrast","contrast enema"))]}),
  B("6.2 Give the diagnosis.",3,{tags:["img"],key:"multiple diverticulosis",
   ans:"<b>Multiple colonic diverticulosis</b> — มี outpouching ทรงกลมเล็ก ๆ จำนวนมากยื่นออกนอกผนัง colon หลายส่วน (transverse/descending/sigmoid และฝั่งขวา)",
   exp:"Diverticulosis = มี diverticula โดยไม่มีการอักเสบ · ส่วนใหญ่ไม่มีอาการ · ภาวะแทรกซ้อน: diverticulitis, diverticular bleeding (พบบ่อยใน right colon ในชาวเอเชีย)",
   rubric:"ได้ = colonic diverticulosis · ตอบ diverticulitis ไม่ได้คะแนน (ภาพไม่บอกการอักเสบ)",
   pts:[CR(P("Colonic diverticulosis","diverticul"))]}),
  B("6.3 Counsel the patient.",5,{tags:["img"],
   ans:"<b>อธิบายโรค:</b> เป็นถุงยื่นของผนังลำไส้ใหญ่ ส่วนใหญ่ไม่มีอาการ ไม่ใช่มะเร็ง ไม่ต้องผ่าตัดถ้าไม่มีภาวะแทรกซ้อน<br><b>ปรับพฤติกรรม:</b> <b>อาหารกากใยสูง</b> (ผัก ผลไม้ ธัญพืช) หรือ fiber supplement · ดื่มน้ำเพียงพอ · ออกกำลังกาย ลดน้ำหนัก เลิกสูบบุหรี่ · เลี่ยง NSAIDs/aspirin ที่ไม่จำเป็น · ไม่ต้องงดถั่ว เมล็ดพืช ข้าวโพดคั่ว<br><b>อาการที่ต้องกลับมาพบแพทย์:</b> <b>ถ่ายเป็นเลือด</b> · ปวดท้องน้อย (ซ้าย) ร่วมกับไข้ (diverticulitis) · ท้องอืด อาเจียน ถ่ายไม่ออก",
   exp:"อาหารกากใยสูงและการออกกำลังกายสัมพันธ์กับความเสี่ยง diverticulitis ที่ลดลง · ความเชื่อเรื่องงดถั่ว/เมล็ดพืชไม่มีหลักฐานสนับสนุน",
   rubric:"ได้เต็ม = อธิบายโรค + อาหารกากใยสูง/น้ำ + warning signs (เลือดออก, ปวด + ไข้)",
   pts:[P("อธิบายโรคว่าส่วนใหญ่ไม่มีอาการ ไม่ใช่มะเร็ง","ไม่มีอาการ","asymptomatic","ไม่ใช่มะเร็ง","benign"),CR(P("อาหารกากใยสูง ดื่มน้ำ","กากใย","fiber","fibre","ดื่มน้ำ")),P("ออกกำลังกาย เลิกบุหรี่ เลี่ยง NSAIDs","ออกกำลัง","exercise","บุหรี่","smok","nsaid"),CR(P("ถ่ายเป็นเลือด → มาพบแพทย์","เลือด","bleed")),P("ปวดท้องร่วมกับไข้ → มาพบแพทย์ (diverticulitis)","ไข้","fever","diverticulitis")]})
 ),
 interp:"อ่าน barium enema ที่มี diverticula และให้คำแนะนำผู้ป่วย diverticulosis",
 summary:["Barium enema (double contrast) เห็น outpouching ทรงกลมจำนวนมาก = colonic diverticulosis","Counseling: อาหารกากใยสูง ดื่มน้ำ ออกกำลังกาย เลิกบุหรี่ เลี่ยง NSAIDs ไม่ต้องงดถั่ว/เมล็ดพืช","กลับมาพบแพทย์เมื่อถ่ายเป็นเลือด หรือปวดท้องร่วมกับไข้"]}),

/* ===== OSCE 7 ===== */
Co({page:214,sec:"OSCE",orig:"7",topic:"inst",sub:"Surgical instrument",title:"Instruments — identify three surgical instruments (A–C) and their uses",img:["os67d_7"],kimg:["os67d_k7"],
 stem:`Three surgical instruments (A, B, C) are shown.<br>7.1 Name each instrument.<br>7.2 State what each instrument is used for.`,
 gray:"7 · 7.1 จงบอกชื่ออุปกรณ์ต่างๆ · 7.2 บอกว่าเอาไปใช้ทำไรได้ · [มุมขวาล่าง] A - allis tissue forceps · B- curved metzenbaum scissors · C- army navy retractor",
 notes:"ตัวพิมพ์มุมขวาล่าง (ไฮไลต์): A - allis tissue forceps, B - curved metzenbaum scissors, C - army navy retractor · ไม่มีแนวคำตอบการใช้งาน",
 parts:S(
  B("7.1 Name instruments A, B and C.",3,{tags:["inst"],key:"A - allis tissue forceps · B - curved metzenbaum scissors · C - army navy retractor",
   ans:"<b>A. Allis tissue forceps</b> (ปลายมีฟันเล็ก ๆ หลายซี่ มี ratchet) · <b>B. Metzenbaum scissors (curved)</b> (ด้ามยาว ปลายกรรไกรสั้นโค้ง) · <b>C. Army-Navy retractor</b> (double-ended hand-held retractor)",
   exp:"แยก Allis (ฟันหลายซี่ จับแน่น traumatic) จาก Babcock (ปลายโค้งกลม ไม่มีฟัน atraumatic) · Metzenbaum ด้ามยาวกว่าใบมีด ต่างจาก Mayo scissors ที่ใบหนาสั้นใช้ตัดไหม/เนื้อเยื่อเหนียว",
   rubric:"ข้อละ 1 คะแนน · ตอบ Babcock หรือ Mayo scissors ไม่ได้คะแนน",
   pts:[CR(P("A: Allis tissue forceps","allis")),CR(P("B: Metzenbaum scissors","metzenbaum","metz")),CR(P("C: Army-Navy retractor","army.?navy"))]}),
  B("7.2 State the use of each instrument.",3,{tags:["inst"],
   ans:"<b>Allis:</b> จับและดึงเนื้อเยื่อที่เหนียว/ที่จะตัดออก เช่น ขอบ fascia, เนื้อเต้านม, ขอบลำไส้ที่จะตัด (เป็น traumatic forceps ไม่ใช้จับเนื้อเยื่อที่ต้องเก็บไว้ที่บอบบาง) · <b>Metzenbaum:</b> ตัดและเลาะ (dissect) เนื้อเยื่อบอบบาง เช่น เยื่อบุ, ไขมัน, adhesion — ไม่ใช้ตัดไหม · <b>Army-Navy:</b> ถ่างดึงผิวหนังและชั้นใต้ผิวหนัง/กล้ามเนื้อตื้น ๆ ในแผลขนาดเล็กถึงกลาง เช่น hernia repair, appendectomy",
   exp:"ใช้กรรไกรให้ตรงงาน: Metzenbaum สำหรับเนื้อเยื่อบอบบาง, Mayo สำหรับเนื้อเยื่อเหนียว, suture scissors สำหรับตัดไหม",
   rubric:"ข้อละ 1 คะแนน",
   pts:[P("Allis: จับ/ดึงเนื้อเยื่อเหนียวหรือที่จะตัดออก","จับ","grasp","ดึง","hold"),P("Metzenbaum: ตัด/เลาะเนื้อเยื่อบอบบาง","dissect","เลาะ","บอบบาง","delicate"),P("Army-Navy: ถ่างแผลชั้นตื้น","retract","ถ่าง","แหวก","ดึงแผล")]})
 ),
 interp:"สถานีขาประจำ: ระบุเครื่องมือผ่าตัดพื้นฐานและการใช้งาน",
 summary:["Allis = ฟันหลายซี่ จับเนื้อเยื่อเหนียว/ที่จะตัดออก (traumatic) ≠ Babcock (atraumatic)","Metzenbaum = กรรไกรด้ามยาวใบสั้น เลาะเนื้อเยื่อบอบบาง ห้ามตัดไหม","Army-Navy = retractor สองปลาย ถ่างแผลชั้นตื้น"]}),

/* ===== OSCE 8 ===== */
Co({page:215,sec:"OSCE",orig:"8",topic:"inst",sub:"Ostomy appliance",title:"Devices — identify two surgical devices (A, B) and their uses",img:["os67d_8"],kimg:["os67d_k8"],
 stem:`Two devices (A, B) are shown.<br>8.1 Name each device.<br>8.2 State what each device is used for.`,
 gray:"8 · 8.1 จงบอกชื่ออุปกรณ์ต่างๆ · 8.2 บอกว่าเอาไปใช้ทำไรได้ · [มุมขวาล่าง] A - ostomy bag · B - chest tube",
 notes:"ตัวพิมพ์มุมขวาล่าง: A - ostomy bag, B - chest tube · ไม่มีแนวคำตอบการใช้งาน · สถานีนี้มี 2 อุปกรณ์ (ostomy appliance + tube) ลง sub ตามอุปกรณ์แรก",
 parts:S(
  B("8.1 Name devices A and B.",2,{tags:["inst"],key:"A - ostomy bag · B - chest tube",
   ans:"<b>A. Ostomy bag</b> (one-piece drainable ostomy pouch มีแป้น/flange ตัดรูให้พอดี stoma และปลายเปิดระบายได้) · <b>B. Chest tube</b> (intercostal drainage tube / thoracostomy tube มีขีดบอกระยะและแถบทึบรังสี)",
   exp:"Drainable pouch เหมาะกับ ileostomy/colostomy ที่อุจจาระเหลว · urostomy pouch มี valve ปล่อยปัสสาวะ",
   rubric:"ข้อละ 1 คะแนน · ตอบ colostomy/ileostomy bag ได้",
   pts:[CR(P("A: Ostomy bag (colostomy/ileostomy pouch)","ostomy","stoma","colostomy","ileostomy","pouch")),CR(P("B: Chest tube (ICD)","chest tube","chest drain","intercostal","\\bicd\\b","thoracostomy"))]}),
  B("8.2 State the use of each device.",3,{tags:["inst"],
   ans:"<b>Ostomy bag:</b> ครอบ stoma รองรับอุจจาระ/ปัสสาวะจาก colostomy, ileostomy, urostomy · ตัดรูแป้นให้ใหญ่กว่า stoma ~2–3 mm เพื่อป้องกันผิวหนังรอบ stoma ระคายเคือง · <b>Chest tube:</b> ระบายลม/ของเหลวออกจาก pleural cavity — pneumothorax, hemothorax, empyema, pleural effusion ปริมาณมาก, หลังผ่าตัดทรวงอก · ใส่ที่ <b>triangle of safety</b> (ช่องซี่โครงที่ 4–5 ระหว่าง anterior–mid axillary line) ต่อกับ <b>underwater seal drainage</b>",
   exp:"Chest tube ใส่ผ่านขอบบนของซี่โครงล่างเพื่อหลบ neurovascular bundle · ขวด underwater seal ต้องอยู่ต่ำกว่าทรวงอกเสมอ",
   rubric:"ได้เต็ม = บอกการใช้ทั้งสองอย่าง + ข้อบ่งชี้ chest tube ≥2 ข้อ",
   pts:[CR(P("Ostomy bag: รองรับของเสียจาก stoma","stoma","อุจจาระ","feces","stool","colostomy","ileostomy")),CR(P("Chest tube: ระบายลม/ของเหลวจาก pleural cavity","pleura","ช่องเยื่อหุ้มปอด","ระบาย","drain")),G("ข้อบ่งชี้ chest tube ≥2",2,P("Pneumothorax","pneumothorax","ลมรั่ว"),P("Hemothorax","hemothorax","haemothorax","เลือด"),P("Empyema","empyema","หนอง"),P("Pleural effusion","effusion","น้ำในช่อง")),P("ต่อ underwater seal / ใส่ที่ triangle of safety","underwater","ขวด","triangle of safety","5th","ics")]})
 ),
 interp:"ระบุอุปกรณ์หลังผ่าตัดที่พบบ่อยในวอร์ดศัลย์และการใช้งาน",
 summary:["Ostomy bag: ครอบ stoma รูแป้นใหญ่กว่า stoma 2–3 mm","Chest tube: ระบาย pneumothorax, hemothorax, empyema, effusion · triangle of safety · ต่อ underwater seal"]}),

/* ===== OSCE 9 ===== */
Co({page:216,sec:"OSCE",orig:"9",topic:"suture",sub:"Suture material",title:"Suture materials — identify three sutures (A–C), their properties and uses",img:["os67d_9"],kimg:["os67d_k9"],
 stem:`Three suture materials (A, B, C) are shown.<br>9.1 Give the generic name of each suture.<br>9.2 State its properties: natural or synthetic; monofilament or multifilament; absorbable or non-absorbable.<br>9.3 State its uses.`,
 gray:"9 · 9.1 จงบอกชื่อสามัญ · 9.2 จงบอกคุณสมบัติคือ natural หรือ synthetic, monofilament หรือ polyfilament, absorbable หรือ non-absorbable · 9.3 จงบอกที่ใช้ · [มุมขวาล่าง] A - vicryl · B - nylon · C - chromic catgut · ที่เหลือเปิดเองนะ 55",
 notes:"ตัวพิมพ์มุมขวาล่าง: A - vicryl, B - nylon, C - chromic catgut, ที่เหลือเปิดเองนะ (ไม่มีคำตอบคุณสมบัติและที่ใช้)",
 parts:S(
  B("9.1 Give the generic name of sutures A, B and C.",3,{tags:["suture"],key:"A - vicryl · B - nylon · C - chromic catgut",
   ans:"<b>A. Polyglactin 910 (Vicryl)</b> — ไหมสีม่วงถัก (ภาพตัดขวางเป็นเส้นถัก) · <b>B. Nylon (polyamide)</b> — ไหมสีน้ำเงินเส้นเดี่ยว · <b>C. Chromic catgut</b> — ไหมสีน้ำตาลขดในน้ำยา",
   exp:"ชื่อสามัญของ Vicryl คือ polyglactin 910 · Catgut ทำจาก submucosa ของลำไส้แกะ/วัว (collagen) · chromic = เคลือบเกลือโครเมียมให้สลายช้าลงกว่า plain catgut",
   rubric:"ข้อละ 1 คะแนน · ตอบ Vicryl (ชื่อการค้า) ได้คะแนน แต่ชื่อสามัญที่ถูกคือ polyglactin 910",
   pts:[CR(P("A: Polyglactin 910 (Vicryl)","polyglactin","vicryl")),CR(P("B: Nylon","nylon","polyamide","ethilon","dermalon")),CR(P("C: Chromic catgut","chromic","catgut"))]}),
  B("9.2 State the properties of each suture.",3,{tags:["suture"],
   ans:"<b>Polyglactin 910:</b> synthetic · multifilament (braided) · absorbable (คงความแข็งแรง ~2–3 สัปดาห์ ดูดซึมหมด ~2–3 เดือน) · <b>Nylon:</b> synthetic · monofilament · non-absorbable · <b>Chromic catgut:</b> natural · (twisted) monofilament · absorbable (ถูกย่อยด้วย enzyme/phagocytosis มี tissue reaction มาก)",
   exp:"Multifilament จับปมแน่นแต่มีช่องให้เชื้อซ่อน (wicking) · monofilament ติดเชื้อน้อยกว่าแต่ปมคลายง่าย ต้องผูกหลาย throw",
   rubric:"ชนิดละ 1 คะแนน ต้องถูกครบ 3 คุณสมบัติ",
   pts:[P("Vicryl: synthetic, braided multifilament, absorbable","braid","multifilament","polyfilament"),P("Nylon: synthetic, monofilament, non-absorbable","non.?absorb","ไม่ละลาย"),P("Chromic catgut: natural, monofilament, absorbable","natural","ธรรมชาติ")]}),
  B("9.3 State the uses of each suture.",3,{tags:["suture"],
   ans:"<b>Polyglactin 910:</b> เย็บชั้นใต้ผิวหนัง (subcutaneous/subcuticular), ผูกหลอดเลือดเล็ก, เย็บ fascia/กล้ามเนื้อที่ไม่ต้องรับแรงนาน, เย็บลำไส้ (anastomosis), เย็บ mucosa · <b>Nylon:</b> เย็บผิวหนัง (skin closure) ที่ต้องตัดไหมออกภายหลัง, เย็บเส้นเลือด/เส้นประสาทขนาดเล็กมาก (microsurgery) · <b>Chromic catgut:</b> เย็บ mucosa ที่หายเร็ว เช่น ในช่องปาก ช่องคลอด (episiotomy) ผูกเส้นเลือดเล็ก เย็บชั้นใต้ผิวหนัง",
   exp:"เลือกไหมตามระยะเวลาที่เนื้อเยื่อต้องการแรงยึด: ผิวหนังใช้ non-absorbable monofilament (ตัดออกได้ ไม่ทิ้งรอยมาก) · ชั้นลึกใช้ absorbable",
   rubric:"ชนิดละ 1 คะแนน",
   pts:[P("Vicryl: subcutaneous, ligate vessels, bowel/mucosa","subcut","ใต้ผิว","ligat","ผูก","anastomos","ลำไส้"),P("Nylon: skin closure","skin","ผิวหนัง"),P("Chromic catgut: mucosa (oral, vaginal)","mucosa","ช่องปาก","oral","ช่องคลอด","vagin","episiotomy")]})
 ),
 interp:"สถานีขาประจำ: ชื่อสามัญและคุณสมบัติของไหมเย็บ",
 summary:["Polyglactin 910 (Vicryl): synthetic, braided, absorbable → ชั้นใต้ผิวหนัง ผูกหลอดเลือด ลำไส้","Nylon: synthetic, monofilament, non-absorbable → เย็บผิวหนัง","Chromic catgut: natural, absorbable → mucosa ช่องปาก/ช่องคลอด"]}),

/* ===== OSCE 10 ===== */
Co({page:217,sec:"OSCE",orig:"10",topic:"proc",sub:"NG tube",ex:1,proc:1,title:"Procedure — nasogastric tube insertion",kimg:["os67d_k10"],
 stem:`Demonstrate the correct insertion of a nasogastric (NG) tube, exactly as you would on a real patient.`,
 gray:"10 · จงแสดงวิธีการใส่ NG tube อย่างถูกต้อง เหมือนคนไข้จริง · [รูปประกอบในสไลด์: Figure 50 Measuring for Nasogastric Tube — insertion depth measured from tip of infant's nose to xiphoid process]",
 flag:"รูปประกอบในสไลด์ (การวัดความยาวสายในทารก) เก็บเป็น kimg เพราะเป็นส่วนหนึ่งของคำตอบ · sp Claude แต่ง",
 notes:"ไฟล์มีเฉพาะโจทย์และรูปลายเส้นการวัดความยาวสาย NG ในทารก (จมูก → xiphoid) ไม่มีแนวคำตอบอื่น",
 sp:"หุ่นใส่ NG tube (หรือผู้ป่วยจำลองรู้สึกตัวดี ให้ความร่วมมือ ไม่มี basal skull fracture/facial fracture) · อุปกรณ์: NG tube 14–16 Fr, KY jelly/xylocaine jelly, syringe 50 mL, stethoscope, pH strip, แก้วน้ำ + หลอด, plaster, ถุงมือ, ชามรูปไต, ผ้ากันเปื้อน · ผู้คุมดู: อธิบาย/ขออนุญาต, จัดท่า, วัดความยาว NEX, ทิศทางการใส่ตามพื้นโพรงจมูก, ให้กลืน, หยุดเมื่อไอ/เขียว, ยืนยันตำแหน่ง, ยึดสาย",
 parts:S(
  B("10.1 Insert a nasogastric tube.",10,{tags:["proc"],
   ans:"<b>เตรียม:</b> ตรวจข้อบ่งชี้/ข้อห้าม (basal skull fracture, facial fracture, esophageal stricture/varices ระวัง) · แนะนำตัว อธิบาย ขออนุญาต ตกลงสัญญาณขอหยุด (ยกมือ) · ล้างมือ สวมถุงมือ · จัดท่า <b>Fowler นั่ง 45–90°</b> · เลือกรูจมูกที่โล่ง<br><b>วัดความยาว:</b> <b>ปลายจมูก → ติ่งหู → xiphoid (NEX)</b> แล้วทำเครื่องหมาย<br><b>ใส่:</b> หล่อลื่นปลายสาย · สอดเข้ารูจมูก<b>ตามพื้นโพรงจมูกตรงไปด้านหลัง</b> (ขนานพื้น ไม่ชี้ขึ้น) · เมื่อถึง oropharynx ให้ผู้ป่วย<b>ก้มคาง</b> และ<b>กลืน</b> (จิบน้ำ) แล้วดันสายตามจังหวะกลืนจนถึงเครื่องหมาย · ถ้าไอ สำลัก เสียงเปลี่ยน เขียว → ดึงสายออกทันที<br><b>ยืนยันตำแหน่ง:</b> ดูดได้ gastric content ตรวจ <b>pH ≤5.5</b> · มาตรฐานคือ <b>CXR</b> (ปลายสายอยู่ใต้กะบังลมซ้าย) โดยเฉพาะถ้าจะให้อาหาร · การฟังเสียงลมด้วย stethoscope (whoosh test) ไม่แนะนำให้ใช้อย่างเดียว<br><b>หลังใส่:</b> ยึดสายกับจมูกด้วย plaster ไม่ให้กดปีกจมูก · ต่อถุงหรือปิดสาย · บันทึกขนาด ความยาวที่ใส่ ลักษณะ content · ถอดถุงมือ ล้างมือ ขอบคุณ",
   exp:"สายเข้าหลอดลมได้ง่ายถ้าแหงนคอ · ก้มคาง + กลืนช่วยปิด epiglottis และนำสายเข้า esophagus · whoosh test ไม่สามารถแยกสายที่อยู่ในหลอดลม/หลอดอาหารได้แน่นอน · ในทารกวัดจากปลายจมูก–ติ่งหู–กึ่งกลางระหว่าง xiphoid กับสะดือ (ตามรูปในไฟล์วัดจากจมูกถึง xiphoid)",
   rubric:"ได้เต็ม = ขออนุญาต + จัดท่า + วัด NEX + ใส่ตามพื้นโพรงจมูกพร้อมให้กลืน + ยืนยันตำแหน่ง + ยึดสาย · ไม่ยืนยันตำแหน่ง หรือดันต่อเมื่อผู้ป่วยไอ/เขียว = ข้อสำคัญ",
   pts:[H("เตรียม",25),P("แนะนำตัว อธิบาย ขออนุญาต ตกลงสัญญาณหยุด","ขออนุญาต","consent","อธิบาย","explain"),P("ตรวจข้อห้าม (basal skull/facial fracture)","skull","basal","facial","ข้อห้าม","contraindic"),P("จัดท่า Fowler นั่ง 45–90°","fowler","45 ?°","นั่ง","semi.?sit","upright"),H("วัดความยาว",15),CR(P("วัดจมูก → ติ่งหู → xiphoid (NEX)","\\bnex\\b","ติ่งหู","earlobe","xiphoid","ลิ้นปี่")),H("ใส่สาย",30),P("หล่อลื่น สอดตามพื้นโพรงจมูกไปด้านหลัง","หล่อลื่น","lubric","jelly","พื้นโพรงจมูก","floor","posterior"),P("ก้มคาง ให้ผู้ป่วยกลืน/จิบน้ำ แล้วดันตามจังหวะกลืน","กลืน","swallow","ก้มคาง","chin","flex"),CR(P("ไอ สำลัก เขียว → ดึงออก","สำลัก","cough","เขียว","cyano","ดึงออก")),H("ยืนยันและยึด",30),CR(P("ยืนยันตำแหน่ง: aspirate pH ≤5.5 หรือ CXR","\\bph\\b","aspirat","ดูด","cxr","x.?ray","เอกซเรย์")),P("ยึดสายด้วย plaster ต่อถุง บันทึก","plaster","tape","ยึด","secure","บันทึก","document")]})
 ),
 interp:"หัตถการพื้นฐาน: ใส่ NG tube ให้ปลอดภัย — วัดความยาว, เทคนิคกลืน, ยืนยันตำแหน่ง",
 summary:["วัดความยาว NEX: ปลายจมูก → ติ่งหู → xiphoid","จัดท่านั่ง สอดตามพื้นโพรงจมูก ก้มคาง ให้กลืน","ไอ/สำลัก/เขียว → ดึงออกทันที","ยืนยันด้วย aspirate pH ≤5.5 หรือ CXR (ไม่ใช้ whoosh test อย่างเดียว) แล้วยึดสาย"]}),

/* ===== OSCE 11 ===== */
Co({page:218,sec:"OSCE",orig:"11",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Physical examination — palpation of a prostate model in an older man with voiding symptoms",kimg:["os67d_k11"],
 stem:`A 65-year-old Thai man presents with difficulty passing urine, a sensation of incomplete emptying and urinary frequency.<br>A prostate model is provided for palpation.<br>11.1 Describe the characteristics of the prostate you palpate.<br>11.2 Give the diagnosis.<br>11.3 State the treatment.`,
 gray:"11 · ผู้ป่วยชายไทยอายุ 65 ปี มาด้วยอาการปัสสาวะลำบาก ปัสสาวะไม่สุด ปัสสาวะบ่อย · มีหุ่น Prostate มาให้คลำ · 11.1 จงบรรยายลักษณะก้อน · 11.2 จงให้การวินิจฉัย · 11.3 จงบอกวิธีการรักษา · [รูปประกอบ: Normal Prostate / Enlarged Prostate]",
 flag:"ลักษณะหุ่น (sp) Claude แต่งตามโจทย์ · รูปประกอบในสไลด์ (Normal vs Enlarged Prostate) บอกคำตอบ → เก็บเป็น kimg",
 notes:"ไฟล์ไม่มีแนวคำตอบ มีรูปประกอบเปรียบเทียบต่อมลูกหมากปกติกับต่อมลูกหมากโต",
 sp:"(Claude แต่ง) หุ่นต่อมลูกหมาก: โตกว่าปกติ (ประมาณ 2–3 เท่าของขนาดปกติ) ผิวเรียบ ขอบชัด ความแข็งแบบยาง (rubbery) สมมาตรสองข้าง median sulcus ตื้น/คลำไม่ชัด ไม่มี nodule แข็ง เยื่อบุ rectum เลื่อนได้ · ผู้คุมดู: บอกขั้นตอน DRE (ขออนุญาต chaperone ท่า left lateral/knee-chest, หล่อลื่น) และบรรยายครบ size, surface, consistency, symmetry, median sulcus, nodule, tenderness",
 parts:S(
  B("11.1 Describe the palpated prostate.",4,{tags:["pe"],
   ans:"บรรยายเป็นระบบ: <b>ขนาด</b> โตกว่าปกติ (ปกติประมาณลูกเกาลัด ~20 g) · <b>ผิว</b> เรียบ · <b>ความแข็ง</b> rubbery (คล้ายปลายจมูก) ไม่แข็งเป็นหิน · <b>สมมาตร</b> สองข้าง · <b>median sulcus</b> ตื้นหรือคลำไม่ได้ · <b>ไม่มี nodule</b> · ไม่กดเจ็บ · rectal mucosa เลื่อนได้ไม่ยึดติด · (ก่อนคลำ: ขออนุญาต มี chaperone ท่า left lateral decubitus หรือ knee-chest หล่อลื่น)",
   exp:"BPH: โต เรียบ rubbery สมมาตร · CA prostate: แข็งเป็นหิน มี nodule ขรุขระ ไม่สมมาตร median sulcus หาย · prostatitis: กดเจ็บมาก อุ่น บวม",
   rubric:"ได้เต็ม = size + surface + consistency + symmetry/median sulcus + nodule/tenderness",
   pts:[CR(P("ขนาดโตกว่าปกติ","โตกว่า","โตขึ้น","enlarg","ขนาด","size")),P("ผิวเรียบ ไม่มี nodule","เรียบ","smooth","nodule"),CR(P("ความแข็งแบบยาง (rubbery)","rubber","ยาง","firm")),P("สมมาตร / median sulcus","สมมาตร","symmetr","median sulcus","sulcus"),P("ไม่กดเจ็บ mucosa เลื่อนได้","กดเจ็บ","tender","mucosa","เลื่อน")]}),
  B("11.2 Give the diagnosis.",2,{tags:["pe"],
   ans:"<b>Benign prostatic hyperplasia (BPH)</b> with lower urinary tract symptoms (LUTS) — voiding (ปัสสาวะลำบาก ไม่สุด) + storage (ปัสสาวะบ่อย)",
   exp:"BPH เกิดที่ transition zone · ขนาดต่อมจาก DRE ไม่สัมพันธ์โดยตรงกับความรุนแรงของอาการ",
   rubric:"ได้ = BPH · ตอบ CA prostate ไม่ได้คะแนน",
   pts:[CR(P("BPH","\\bbph\\b","benign prostatic","ต่อมลูกหมากโต"))]}),
  B("11.3 State the treatment.",4,{tags:["pe"],
   ans:"<b>ประเมินก่อนรักษา:</b> IPSS, UA (หา infection/hematuria), Cr, PSA (หลังให้คำปรึกษา), post-void residual ± uroflowmetry<br><b>อาการน้อย:</b> watchful waiting + ปรับพฤติกรรม (ลดน้ำ/คาเฟอีน/แอลกอฮอล์ก่อนนอน, double voiding)<br><b>ยา:</b> <b>alpha-1 blocker</b> (tamsulosin, doxazosin) ออกฤทธิ์เร็ว · <b>5-alpha reductase inhibitor</b> (finasteride, dutasteride) ในต่อมโต (>30–40 mL) ลดขนาดต่อมและความเสี่ยง retention · ใช้ร่วมกันได้<br><b>ผ่าตัด (TURP เป็นมาตรฐาน):</b> เมื่อยาไม่ได้ผล หรือมีภาวะแทรกซ้อน — urinary retention ซ้ำ, UTI ซ้ำ, bladder stone, hematuria ซ้ำ, ไตเสื่อมจากการอุดกั้น",
   exp:"ข้อบ่งชี้ผ่าตัด BPH ที่ชัดเจนคือภาวะแทรกซ้อนจากการอุดกั้น · 5-ARI ลดขนาดต่อม ~20–30% ใช้เวลาหลายเดือนกว่าจะเห็นผล",
   rubric:"ได้เต็ม = alpha-blocker ± 5-ARI + ข้อบ่งชี้ TURP · บอกแค่ TURP ได้บางส่วน",
   pts:[CR(P("Alpha-blocker (tamsulosin, doxazosin)","alpha","tamsulosin","doxazosin","terazosin","alfuzosin")),P("5-ARI (finasteride, dutasteride)","5.?ari","5.?alpha","finasteride","dutasteride"),P("TURP เมื่อยาไม่ได้ผล/มีภาวะแทรกซ้อน","turp","transurethral","ผ่าตัด"),P("ประเมิน IPSS, UA, Cr, PSA, PVR / watchful waiting","ipss","psa","residual","\\bpvr\\b","watchful")]})
 ),
 interp:"คลำหุ่นต่อมลูกหมาก บรรยายลักษณะ และรักษา BPH",
 summary:["BPH: โต เรียบ rubbery สมมาตร ไม่มี nodule ไม่กดเจ็บ","CA prostate: แข็งเป็นหิน มี nodule ไม่สมมาตร","รักษา: alpha-blocker ± 5-ARI (ต่อมโต) · TURP เมื่อมี retention ซ้ำ UTI ซ้ำ bladder stone hematuria ไตเสื่อม หรือยาไม่ได้ผล"]}),

/* ===== OSCE 12 ===== */
Co({page:219,sec:"OSCE",orig:"12",topic:"pe",sub:"Other PE",ex:1,title:"Case — a small mobile forearm mass: diagnosis, treatment and incision",imgNote:NOIMG,imgAlt:"Line drawing of a right upper limb with a small circle marking the position of the mass on the forearm",kimg:["os67d_k12"],
 stem:`A 54-year-old man presents with a mass on his right arm for 3 months. Physical examination shows a 1-cm circumscribed mass on the right forearm with a rubbery consistency, not fixed to the skin or bone, and not tender.<br>12.1 Give the diagnosis.<br>12.2 State the treatment.<br>12.3 Show the incision you would make (draw it on the diagram).`,
 gray:"12 · ผู้ป่วยชายอายุ 54 ปี มาด้วยมีก้อนที่แขนขวามา 3 เดือน ตรวจร่างกายพบ 1 cm circumscribed mass at right forearm rubbery consistency, not fixed to skin or bone, not tender · 12.1 จงให้การวินิจฉัย · 12.2 จงบอกแนวทางการรักษา · 12.3 จงบอก incision ที่จะทำ (ให้ขีดลงไปในรูป) · [ตัวแดง] Epidermal cyst · Wide excision · [รูปแขนมีวงกลมที่ก้อน และเส้นแดงขีดตามแนวยาวของแขน]",
 flag:"⚠ เฉลยต่างจากไฟล์ (dx และการรักษา) · ไม่มีรูปโจทย์ที่สะอาด เพราะรูปแขนในไฟล์มีเส้นคำตอบสีแดงขีดทับ → NOIMG + kimg · topic ใช้ pe/Other PE เพราะเป็นโจทย์เคสก้อนจากการตรวจร่างกาย (ไม่มีรูปผู้ป่วย) · sp Claude แต่ง",
 notes:"ตัวแดง: 12.1 Epidermal cyst · 12.2 Wide excision · 12.3 ในรูปมีเส้นแดงขีดผ่านวงกลมตามแนวยาวของแขน",
 sp:"สถานีเขียนตอบ/ขีดลงรูป · ผู้คุมดูเส้น incision: อยู่บนก้อน ตามแนวยาวของแขน (longitudinal) ยาวพอเอาก้อนออก",
 opinion:"ไฟล์ตอบ <b>Epidermal cyst</b> และ <b>Wide excision</b> — ไม่เห็นด้วย: epidermoid cyst อยู่ในชั้น dermis จึง<b>ยึดติดผิวหนัง</b> (มักมี punctum) แต่โจทย์ระบุ not fixed to skin · ก้อน circumscribed, rubbery, เคลื่อนที่ได้ ไม่เจ็บ ในชั้นใต้ผิวหนัง เข้าได้กับ <b>lipoma</b> มากที่สุด · ก้อนขนาด 1 cm ที่ลักษณะ benign รักษาด้วย <b>simple (excisional) excision</b> ส่งพยาธิ ไม่ต้อง wide excision (wide excision ใช้กับมะเร็ง เช่น melanoma/sarcoma) · เส้น incision ตามแนวยาวของแขนในไฟล์ถูกต้อง",
 parts:S(
  B("12.1 Give the diagnosis.",3,{tags:["pe"],key:"Epidermal cyst",flag:"⚠ เฉลยต่างจากไฟล์",
   ans:"<b>Lipoma</b> (subcutaneous) — ก้อนขอบชัด นุ่มหยุ่นแบบยาง ไม่ยึดผิวหนังและกระดูก ไม่เจ็บ โตช้า · ddx: epidermoid (sebaceous) cyst (ไฟล์ตอบ แต่จะยึดติดผิวหนัง มี punctum), neurofibroma/schwannoma (เคลื่อนได้ด้านข้างแต่ไม่ขึ้นลงตามแนวเส้นประสาท อาจมี Tinel sign), ganglion cyst (ใกล้ข้อ/เอ็น)",
   exp:"Lipoma: slip sign (ขอบก้อนลื่นหลุดจากนิ้ว) · epidermoid cyst: ยึดติดผิวหนัง มีรูเปิด (punctum) บีบได้ keratin กลิ่นเหม็น",
   rubric:"ได้เต็ม = lipoma · ตอบ epidermal/epidermoid cyst (ตามไฟล์) ได้บางส่วน · ก้อน >5 cm, ลึกใต้ fascia, โตเร็ว, เจ็บ ต้องนึกถึง soft tissue sarcoma",
   pts:[CR(P("Lipoma","lipoma","ก้อนไขมัน")),P("Ddx: epidermoid cyst / neurofibroma / schwannoma","epiderm","sebaceous","neurofibroma","schwannoma","ganglion")]}),
  B("12.2 State the treatment.",3,{tags:["pe"],key:"Wide excision",flag:"⚠ เฉลยต่างจากไฟล์",
   ans:"<b>Excision (excisional biopsy)</b> ภายใต้ local anesthesia — เลาะเอาก้อนออกทั้งก้อนพร้อมแคปซูล ส่งตรวจทางพยาธิวิทยา · ไม่จำเป็นต้อง wide excision สำหรับก้อนเล็กลักษณะ benign · อีกทางเลือก: สังเกตอาการได้ถ้าไม่มีอาการและผู้ป่วยไม่ต้องการผ่าตัด",
   exp:"ถ้าผลพยาธิเป็นมะเร็ง (เช่น sarcoma) จะผ่าตัด wide re-excision ภายหลัง จึงต้องวาง incision ให้ตัดซ้ำได้",
   rubric:"ได้เต็ม = excision/excisional biopsy ส่งพยาธิ · ตอบ wide excision (ตามไฟล์) ได้บางส่วน",
   pts:[CR(P("Excision / excisional biopsy","excision","excisional","ตัดออก","เลาะ")),P("ส่งตรวจทางพยาธิวิทยา","พยาธิ","patho","ชิ้นเนื้อ")]}),
  B("12.3 Show the incision.",2,{tags:["pe"],key:"(ขีดเส้นตามแนวยาวของแขนผ่านก้อน)",
   ans:"<b>Longitudinal incision</b> บนก้อน <b>ตามแนวยาวของแขน</b> ยาวประมาณเท่าเส้นผ่านศูนย์กลางก้อน · เหตุผล: ก้อนที่แขนขาวาง incision ตามแนวยาวเพื่อถ้าเป็นมะเร็งจะตัดซ้ำ (re-excision) ได้โดยไม่ต้องตัดเนื้อเยื่อมาก และไม่ตัดผ่านโครงสร้างที่วิ่งตามยาว (เส้นประสาท หลอดเลือด เอ็น)",
   exp:"หลักการ biopsy ก้อนที่แขนขา (extremity mass): longitudinal incision เสมอ หลีกเลี่ยง transverse incision",
   rubric:"ได้ = เส้นตามยาวของแขนผ่านก้อน · เส้นขวางแขนไม่ได้คะแนน",
   pts:[CR(P("Longitudinal ตามแนวยาวของแขน ผ่านก้อน","longitudinal","แนวยาว","ตามยาว","long axis"))]})
 ),
 interp:"ทดสอบการแยกก้อนใต้ผิวหนังจากลักษณะการตรวจร่างกาย และหลักการวาง incision ของก้อนที่แขนขา",
 summary:["ก้อนใต้ผิวหนังขอบชัด rubbery ไม่ยึดผิวและกระดูก ไม่เจ็บ = lipoma","Epidermoid cyst ยึดติดผิวหนังและมี punctum","ก้อน benign ขนาดเล็ก: excisional biopsy ส่งพยาธิ","ก้อนที่แขนขา: longitudinal incision เสมอ"]}),

/* ===== PowerPoint 1 ===== */
Co({page:192,sec:"PowerPoint",orig:"PPT 1",topic:"spot",sub:"Imaging film",title:"Spot — chest radiograph: name the view and give differential diagnoses",img:["os67d_p1"],kimg:["os67d_kp1"],
 stem:`A radiograph is shown.<br>1.1 Name this imaging study and the position used.<br>1.2 Give two differential diagnoses.`,
 gray:"Part 3 PowerPoint 14 ข้อ เปิดไปเรื่อยๆ ข้อละ 3 นาที · 1 · 1.1 จงบอกชื่อของ imaging อันนี้และท่าที่ใช้ · 1.2 จงบอก 2 differential diagnosis · [ตัวแดง] CXR PA upright · Peptic perforation, appendiceal rupture · [มุมขวาล่าง] free air",
 notes:"ตัวแดง (ไฮไลต์): CXR PA upright · Peptic perforation, appendiceal rupture · ตัวพิมพ์มุมขวาล่าง: free air",
 parts:S(
  B("1.1 Name the imaging study and position.",2,{tags:["spot"],key:"CXR PA upright",
   ans:"<b>Chest X-ray, PA upright (erect)</b> — เห็น<b>ลมอิสระใต้กะบังลม</b> (free air under the diaphragm) เป็นแถบดำรูปจันทร์เสี้ยวใต้โดมกะบังลมขวา = pneumoperitoneum",
   exp:"Upright CXR ไวที่สุดในการเห็น free air (เห็นได้ตั้งแต่ ~1 mL) · ผู้ป่วยต้องนั่ง/ยืนอย่างน้อย ~10 นาทีก่อนถ่าย · ยืนไม่ได้ใช้ left lateral decubitus",
   rubric:"ได้เต็ม = upright CXR PA + บอก free air under diaphragm",
   pts:[CR(P("CXR ท่า PA upright/erect","upright","erect","\\bpa\\b","cxr","chest")),P("Free air under diaphragm (pneumoperitoneum)","free air","pneumoperitoneum","ลมใต้กะบังลม","subdiaphragm")]}),
  B("1.2 Give two differential diagnoses.",3,{tags:["spot"],key:"Peptic perforation, appendiceal rupture",
   ans:"สาเหตุของ pneumoperitoneum (hollow viscus perforation): <b>perforated peptic ulcer</b> (พบบ่อยที่สุด) · perforated colonic diverticulitis/colon cancer · ruptured appendicitis (ตามไฟล์ แต่ไส้ติ่งแตกทำให้เห็น free air ได้น้อย) · traumatic bowel perforation · หลังผ่าตัดช่องท้อง/laparoscopy (ไม่ใช่โรค)",
   exp:"Perforated appendicitis มักมี free air น้อยหรือไม่มี เพราะไส้ติ่งมีลมน้อยและมักถูก omentum ห่อ · free air ปริมาณมากนึกถึง perforated peptic ulcer หรือ colonic perforation",
   rubric:"ได้เต็ม = ≥2 สาเหตุของ hollow viscus perforation โดยมี perforated peptic ulcer",
   pts:[CR(P("Perforated peptic ulcer","peptic","perforated (duodenal|gastric)","\\bppu\\b","กระเพาะทะลุ","แผลในกระเพาะ")),G("สาเหตุอื่น ≥1",1,P("Ruptured appendicitis","append","ไส้ติ่ง"),P("Perforated diverticulitis / colon","diverticul","colon","ลำไส้ใหญ่"),P("Trauma / post-operative","trauma","บาดเจ็บ","post.?op","หลังผ่าตัด"))]})
 ),
 interp:"Spot film: free air under diaphragm → hollow viscus perforation",
 summary:["Upright CXR = ดู free air ได้ไวที่สุด","Free air under diaphragm = pneumoperitoneum → hollow viscus perforation","สาเหตุที่พบบ่อยที่สุด: perforated peptic ulcer"]}),

/* ===== PowerPoint 2 ===== */
Co({page:193,sec:"PowerPoint",orig:"PPT 2",topic:"spot",sub:"Imaging film",title:"Spot — right upper quadrant pain with an ultrasound image",img:["os67d_p2"],kimg:["os67d_kp2"],
 stem:`A 50-year-old woman presents with abdominal pain below the xiphoid for 5 hours. The physician presses below the right costal margin and asks her to take a deep breath; she experiences sudden pain and stops inhaling abruptly. An imaging study is shown.<br>2.1 Name this imaging study.<br>2.2 Name the physical examination performed by the physician.<br>2.3 Describe the management of this condition.`,
 gray:"2 · ผู้ป่วยหญิงอายุ 50 ปี ปวดท้องใต้ลิ้นปี่ 5 ชั่วโมงก่อนมาโรงพยาบาล แพทย์ได้ใช้มือดันใต้ชายโครงขวา และให้ผู้ป่วยหายใจเข้า ผู้ป่วยมีอาการเจ็บสะดุ้งและหยุดหายใจกระทันหัน · 2.1 จงบอกชื่อของ imaging · 2.2 จงบอกชื่อของการตรวจร่างกายที่แพทย์ทำ · 2.3 จงอธิบายแนวทางการรักษาโรคดังกล่าว · [ตัวแดง] Ultrasound abdomen · Murphy test · Laparoscopic Cholecystectomy · [มุมขวาล่าง] acute cholecystitis",
 notes:"ตัวแดง: Ultrasound abdomen · Murphy test · Laparoscopic Cholecystectomy · ตัวพิมพ์มุมขวาล่าง: acute cholecystitis",
 parts:S(
  B("2.1 Name the imaging study.",2,{tags:["spot"],key:"Ultrasound abdomen",
   ans:"<b>Ultrasound of the upper abdomen (RUQ / hepatobiliary)</b> — เห็นถุงน้ำดีมี echogenic stone ที่คอถุงน้ำดีพร้อม posterior acoustic shadow",
   exp:"Ultrasound เป็น first-line imaging ของ acute cholecystitis: gallstone, GB wall thickening >4 mm, pericholecystic fluid, sonographic Murphy sign",
   rubric:"ได้ = ultrasound abdomen/RUQ",
   pts:[CR(P("Ultrasound abdomen (RUQ)","ultrasound","\\bus\\b","usg","อัลตราซาวด์","sonogra")),P("Gallstone with acoustic shadow","stone","นิ่ว","shadow")]}),
  B("2.2 Name the physical examination.",2,{tags:["spot"],key:"Murphy test",
   ans:"<b>Murphy's sign</b> — กดใต้ชายโครงขวา (ตำแหน่งถุงน้ำดี) แล้วให้หายใจเข้าลึก ผู้ป่วยหยุดหายใจกลางคันเพราะเจ็บ (inspiratory arrest)",
   exp:"Murphy's sign ไวสำหรับ acute cholecystitis แต่ความไวลดลงในผู้สูงอายุ · sonographic Murphy sign = กดด้วยหัว probe ตรงถุงน้ำดีแล้วเจ็บที่สุด",
   rubric:"ได้ = Murphy's sign",
   pts:[CR(P("Murphy's sign","murphy"))]}),
  B("2.3 Describe the management.",4,{tags:["spot"],key:"Laparoscopic Cholecystectomy · (dx: acute cholecystitis)",
   ans:"Dx: <b>acute calculous cholecystitis</b> · <b>Supportive:</b> NPO, IV fluid, analgesics (NSAIDs/opioid), <b>IV antibiotics</b> ครอบคลุม gram-negative + anaerobe (เช่น ceftriaxone + metronidazole) · <b>Definitive:</b> <b>early laparoscopic cholecystectomy</b> (ภายใน admission เดียวกัน ดีที่สุดภายใน 72 ชม.) ถ้าผู้ป่วยทนการผ่าตัดได้ · ผู้ป่วยอาการหนัก/เสี่ยงผ่าตัดสูง → percutaneous cholecystostomy แล้วค่อยผ่าตัดภายหลัง",
   exp:"Tokyo Guidelines 2018: early lap chole สำหรับ grade I–II ที่ผู้ป่วยแข็งแรงพอ · ถ้าไม่ผ่าตัด มีโอกาสกลับเป็นซ้ำสูง",
   rubric:"ได้เต็ม = supportive + antibiotics + early lap chole · บอกแค่ lap chole ได้ส่วนใหญ่",
   pts:[P("NPO, IV fluid, analgesics","npo","iv fluid","สารน้ำ","แก้ปวด","analges"),P("IV antibiotics","antibiotic","ยาฆ่าเชื้อ","ceftriaxone","metronidazole"),CR(P("Early laparoscopic cholecystectomy","cholecystectomy","lap chole","ตัดถุงน้ำดี")),P("เสี่ยงผ่าตัดสูง: percutaneous cholecystostomy","cholecystostomy","\\bptgbd\\b","percutaneous")]})
 ),
 interp:"Spot: ultrasound gallstone + Murphy's sign → acute cholecystitis และการรักษา",
 summary:["Murphy's sign = inspiratory arrest เมื่อกดใต้ชายโครงขวา","US: gallstone + shadow, GB wall หนา, pericholecystic fluid","รักษา: NPO, IV fluid, IV antibiotics, early lap chole · เสี่ยงสูงทำ percutaneous cholecystostomy"]}),

/* ===== PowerPoint 3 ===== */
Co({page:194,sec:"PowerPoint",orig:"PPT 3",topic:"spot",sub:"Instrument/Device",title:"Spot — an endoscopic investigation with a test kit result",img:["os67d_p3"],kimg:["os67d_kp3"],
 stem:`An investigation and the result of a test kit are shown.<br>3.1 Name the investigation.<br>3.2 Interpret the test result and outline the further management of the patient.`,
 gray:"3 · 3.1 จงบอกชื่อของ investigation · 2.2 จงแปลผลการทดสอบ และแนวทางการดูแลผู้ป่วยต่อไป · [ตัวแดง] Esophagogastroduodenoscope · Urease test · Urease test: + ve ---> สาเหตุการเกิด GERD มาจาก H.pyroli · Triple therapy : PPI, amoxycillin, clarithromycin · [มุมขวาล่าง] EGD + rapid urease test",
 flag:"⚠ ไฟล์เขียนว่า H. pylori เป็นสาเหตุ GERD — ไม่ถูกต้อง · ไฟล์ใช้เลขคำถามย่อย 2.2 (พิมพ์ผิด) ลงเป็น 3.2",
 notes:"ตัวแดง: Esophagogastroduodenoscope, Urease test · (ไฮไลต์) Urease test: + ve → สาเหตุการเกิด GERD มาจาก H.pyroli · Triple therapy: PPI, amoxycillin, clarithromycin · ตัวพิมพ์มุมขวาล่าง: EGD + rapid urease test",
 opinion:"ไฟล์แปลผลว่า urease test บวก → \"สาเหตุการเกิด GERD มาจาก H. pylori\" — ไม่เห็นด้วย: H. pylori เป็นสาเหตุของ <b>chronic gastritis, peptic ulcer, gastric MALT lymphoma, gastric adenocarcinoma</b> ไม่ใช่สาเหตุของ GERD · ส่วนการรักษา triple therapy ตามไฟล์ยังใช้ได้ แต่แนวทางปัจจุบันให้ 14 วัน และในพื้นที่ที่เชื้อดื้อ clarithromycin สูงแนะนำ bismuth quadruple therapy เป็นทางเลือกแรก",
 parts:S(
  B("3.1 Name the investigation.",2,{tags:["spot"],key:"Esophagogastroduodenoscope · Urease test (EGD + rapid urease test)",
   ans:"<b>Esophagogastroduodenoscopy (EGD)</b> ร่วมกับตัดชิ้นเนื้อกระเพาะทำ <b>rapid urease test (CLO test)</b>",
   exp:"Rapid urease test: ชิ้นเนื้อ antrum ใส่ใน gel ที่มี urea + pH indicator · urease ของ H. pylori เปลี่ยน urea เป็น ammonia → pH สูง → สีเหลืองเปลี่ยนเป็นชมพู/แดง",
   rubric:"ได้เต็ม = EGD + rapid urease (CLO) test",
   pts:[CR(P("EGD / upper GI endoscopy","\\begd\\b","esophagogastroduodeno","endoscop","ส่องกล้อง")),CR(P("Rapid urease test (CLO test)","urease","clo"))]}),
  B("3.2 Interpret the result and outline further management.",4,{tags:["spot"],key:"Urease test: + ve ---> สาเหตุการเกิด GERD มาจาก H.pyroli · Triple therapy : PPI, amoxycillin, clarithromycin",flag:"⚠ เฉลยต่างจากไฟล์ (H. pylori ไม่ใช่สาเหตุ GERD)",
   ans:"<b>แปลผล:</b> เจลเปลี่ยนเป็นสีชมพู/แดง = <b>positive → H. pylori infection</b> (สัมพันธ์กับ gastritis, peptic ulcer)<br><b>ดูแลต่อ:</b> ให้ <b>eradication therapy 14 วัน</b> — clarithromycin-based triple therapy (PPI + amoxicillin + clarithromycin) หรือ <b>bismuth quadruple therapy</b> (PPI + bismuth + tetracycline + metronidazole) ซึ่งแนะนำเป็นทางเลือกแรกในพื้นที่ดื้อ clarithromycin สูง · รักษาโรคที่พบจาก EGD (เช่น PPI ต่อในแผลกระเพาะ) · <b>ยืนยันการกำจัดเชื้อ</b>ด้วย urea breath test หรือ stool antigen ≥4 สัปดาห์หลังหยุดยาฆ่าเชื้อ และหยุด PPI ≥2 สัปดาห์ · แนะนำเลี่ยง NSAIDs ตรวจคนในครอบครัวที่มีความเสี่ยงตามข้อบ่งชี้",
   exp:"PPI, bismuth และยาฆ่าเชื้อลดจำนวนเชื้อ ทำให้ urease test/UBT ลบลวงได้ จึงต้องหยุดยาก่อนตรวจ",
   rubric:"ได้เต็ม = positive H. pylori + eradication regimen 14 วัน + test of cure · ตอบว่าเป็นสาเหตุ GERD ไม่ได้คะแนนส่วนแปลผล",
   pts:[CR(P("Positive → H. pylori infection","pylori","positive","บวก","\\+ ?ve")),CR(P("Eradication: triple (PPI + amoxicillin + clarithromycin) หรือ bismuth quadruple","triple","quadruple","clarithromycin","amoxicillin","amoxycillin","bismuth")),P("14 วัน","14 ?(วัน|day)","2 ?(สัปดาห์|week)"),P("ยืนยันการกำจัดเชื้อ (UBT / stool antigen)","breath test","\\bubt\\b","stool antigen","test of cure","ยืนยัน")]})
 ),
 interp:"Spot: EGD + CLO test positive → H. pylori และ eradication therapy",
 summary:["CLO test สีเหลือง → ชมพู/แดง = H. pylori positive","H. pylori → gastritis, PUD, MALT lymphoma, gastric cancer (ไม่ใช่ GERD)","Eradication 14 วัน: triple therapy หรือ bismuth quadruple","ยืนยันด้วย UBT/stool Ag ≥4 สัปดาห์หลังยาฆ่าเชื้อ หยุด PPI 2 สัปดาห์"]}),

/* ===== PowerPoint 4 ===== */
Co({page:195,sec:"PowerPoint",orig:"PPT 4",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — a pigmented skin lesion",img:["os67d_p4"],kimg:["os67d_kp4"],
 stem:`A skin lesion is shown.<br>4.1 Give one diagnosis.<br>4.2 State the treatment.`,
 gray:"4 · 4.1 จงให้ diagnosis เพียง 1 อย่าง · 4.2 จงบอกแนวทางการรักษา · [ตัวแดง] Melanoma · Wide excision · [มุมขวาล่าง] melanoma",
 notes:"ตัวแดง: Melanoma (ไฮไลต์) · Wide excision · ตัวพิมพ์มุมขวาล่าง: melanoma",
 parts:S(
  B("4.1 Give one diagnosis.",3,{tags:["spot"],key:"Melanoma",
   ans:"<b>Malignant melanoma</b> (superficial spreading type) — pigmented lesion ที่ <b>asymmetry, border ไม่เรียบ, สีหลายสี</b> (น้ำตาล–ดำ–แดง), ขนาดใหญ่กว่า 6 mm",
   exp:"ABCDE: Asymmetry, Border irregularity, Color variation, Diameter >6 mm, Evolving · ในคนไทย acral lentiginous melanoma (ฝ่ามือ ฝ่าเท้า ใต้เล็บ) พบบ่อยกว่า",
   rubric:"ได้ = melanoma",
   pts:[CR(P("Malignant melanoma","melanoma"))]}),
  B("4.2 State the treatment.",3,{tags:["spot"],key:"Wide excision",
   ans:"<b>Excisional biopsy</b> (margin แคบ 1–3 mm, full thickness) เพื่อยืนยันและวัด <b>Breslow thickness</b> → <b>wide local excision</b> ตาม margin ที่กำหนดจากความหนา: in situ 0.5–1 cm · ≤1 mm 1 cm · 1–2 mm 1–2 cm · >2 mm 2 cm · ร่วมกับ <b>sentinel lymph node biopsy</b> เมื่อหนาตั้งแต่ ~0.8 mm (หรือ T1b ขึ้นไป) · ถ้าต่อมน้ำเหลืองบวกทางคลินิก → lymph node dissection ± adjuvant systemic therapy (immunotherapy/targeted)",
   exp:"ไม่ทำ shave biopsy ในก้อนสงสัย melanoma เพราะวัดความหนาไม่ได้ · Breslow thickness เป็นปัจจัยพยากรณ์โรคที่สำคัญที่สุด",
   rubric:"ได้เต็ม = excisional biopsy ก่อน + wide local excision ตาม Breslow + SLNB · ตอบ wide excision อย่างเดียว (ตามไฟล์) ได้ส่วนใหญ่",
   pts:[P("Excisional biopsy ก่อน (ไม่ shave)","excisional biopsy","biopsy","ตัดชิ้นเนื้อ"),CR(P("Wide local excision","wide","\\bwle\\b")),P("Margin ตาม Breslow thickness","breslow","margin","ความหนา"),P("Sentinel lymph node biopsy","sentinel","slnb","lymph node")]})
 ),
 interp:"Spot: pigmented lesion ลักษณะ ABCDE → melanoma และหลักการผ่าตัด",
 summary:["ABCDE ของ melanoma","Excisional biopsy ก่อน วัด Breslow thickness","WLE margin: in situ 0.5–1 cm, ≤1 mm 1 cm, 1–2 mm 1–2 cm, >2 mm 2 cm","SLNB เมื่อหนา ≥0.8 mm หรือ T1b ขึ้นไป"]}),

/* ===== PowerPoint 5 ===== */
Co({page:196,sec:"PowerPoint",orig:"PPT 5",topic:"spot",sub:"Other spot",title:"Spot — an endoscopic view of the colon",img:["os67d_p5"],kimg:["os67d_kp5"],
 stem:`A colonoscopic image is shown.<br>5.1 Give the diagnosis.<br>5.2 How would you counsel this patient?`,
 gray:"5 · 5.1 จงบอก diagnosis · 5.2 จงบอกแนวทางการ counseling ผู้ป่วย · [ตัวแดง] Diverticulum · ถ้ามีเลือดออกให้มาหา · [มุมขวาล่าง] diverticulosis",
 notes:"ตัวแดง: Diverticulum · ถ้ามีเลือดออกให้มาหา · ตัวพิมพ์มุมขวาล่าง: diverticulosis",
 parts:S(
  B("5.1 Give the diagnosis.",2,{tags:["spot"],key:"Diverticulum (diverticulosis)",
   ans:"<b>Colonic diverticulosis</b> — รูเปิดของ diverticula หลายรูบนผนัง colon จากการส่องกล้อง mucosa รอบ ๆ ไม่อักเสบ",
   exp:"Diverticula ของ colon เป็น false (pulsion) diverticula ยื่นผ่านจุดอ่อนที่หลอดเลือด vasa recta ทะลุผ่านกล้ามเนื้อ",
   rubric:"ได้ = diverticulosis/diverticula of colon",
   pts:[CR(P("Colonic diverticulosis","diverticul"))]}),
  B("5.2 Counsel the patient.",3,{tags:["spot"],key:"ถ้ามีเลือดออกให้มาหา",
   ans:"อธิบายว่าส่วนใหญ่ไม่มีอาการ ไม่ใช่มะเร็ง · <b>อาหารกากใยสูง</b> ดื่มน้ำเพียงพอ ออกกำลังกาย คุมน้ำหนัก เลิกบุหรี่ เลี่ยง NSAIDs · ไม่จำเป็นต้องงดถั่ว/เมล็ดพืช · <b>กลับมาพบแพทย์ทันทีถ้า</b> <b>ถ่ายเป็นเลือด</b> หรือปวดท้องร่วมกับไข้ (diverticulitis)",
   exp:"ภาวะแทรกซ้อนหลักคือ diverticular bleeding และ diverticulitis",
   rubric:"ได้เต็ม = อาหารกากใยสูง + warning signs (เลือดออก, ปวด + ไข้)",
   pts:[CR(P("อาหารกากใยสูง ดื่มน้ำ","กากใย","fiber","fibre","ดื่มน้ำ")),CR(P("ถ่ายเป็นเลือด → มาพบแพทย์","เลือด","bleed")),P("ปวดท้องร่วมกับไข้ → มาพบแพทย์","ไข้","fever","diverticulitis"),P("ออกกำลังกาย เลิกบุหรี่ เลี่ยง NSAIDs","ออกกำลัง","exercise","บุหรี่","smok","nsaid")]})
 ),
 interp:"Spot: ภาพส่องกล้องเห็นรูเปิด diverticula → diverticulosis และการให้คำแนะนำ",
 summary:["Colonoscopy เห็นรูเปิดหลายรูบนผนัง colon = diverticulosis","แนะนำอาหารกากใยสูง ดื่มน้ำ ออกกำลังกาย","กลับมาเมื่อถ่ายเป็นเลือด หรือปวดท้อง + ไข้"]}),

/* ===== PowerPoint 6 ===== */
Co({page:197,sec:"PowerPoint",orig:"PPT 6",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — an infant with a congenital facial anomaly: timing of repair",img:["os67d_p6"],kimg:["os67d_kp6"],
 stem:`A photograph of an infant is shown.<br>6.1 State the appropriate age for surgical correction in this patient.<br>6.2 Give the reasons for your answer in 6.1.`,
 gray:"6 · 6.1 จงบอกอายุที่เหมาะสมจะผ่าตัดแก้ไข ในผู้ป่วยรายนี้ · 6.2 จงบอกเหตุผลของข้อ 6.1 · [ตัวแดง] Rear of cleft lip 3 months · อายุเหมาะสมต่อการผ่าตัด · [มุมขวาล่าง] cleft lip",
 notes:"ตัวแดง: \"Rear of cleft lip 3 months\" (น่าจะหมายถึง repair of cleft lip อายุ 3 เดือน) · 6.2: อายุเหมาะสมต่อการผ่าตัด · ตัวพิมพ์มุมขวาล่าง: cleft lip",
 parts:S(
  B("6.1 State the appropriate age for repair.",2,{tags:["spot"],key:"Rear of cleft lip 3 months",
   ans:"ภาพ: <b>unilateral cleft lip</b> (ด้านซ้ายของผู้ป่วย) · <b>Cleft lip repair (cheiloplasty) ที่อายุประมาณ 3 เดือน</b> (ราว 10–12 สัปดาห์) · (cleft palate ถ้ามี ซ่อมที่ประมาณ 9–18 เดือน ก่อนเริ่มพูด)",
   exp:"บางศูนย์ทำ nasoalveolar molding (NAM) ก่อนผ่าตัดเพื่อลดช่องว่างและปรับรูปจมูก",
   rubric:"ได้ = ~3 เดือน (10–12 สัปดาห์)",
   pts:[CR(P("ประมาณ 3 เดือน (10–12 สัปดาห์)","3 ?(เดือน|month|mo)","10 ?(สัปดาห์|week|wk)","12 ?(สัปดาห์|week|wk)"))]}),
  B("6.2 Give the reasons.",3,{tags:["spot"],key:"อายุเหมาะสมต่อการผ่าตัด",
   ans:"<b>Rule of 10s</b>: อายุ ≥10 สัปดาห์, น้ำหนัก ≥10 ปอนด์ (~4.5 kg), Hb ≥10 g/dL → <b>ปลอดภัยต่อการดมยาสลบ</b> · เนื้อเยื่อริมฝีปากโตพอให้ผ่าตัดได้แม่นยำ · ได้ตรวจหาความผิดปกติร่วม (หัวใจ, syndrome) ก่อน · ซ่อมก่อนวัยที่เด็กเริ่มรับรู้รูปลักษณ์และช่วยเรื่องการดูดนม การพัฒนาความสัมพันธ์กับครอบครัว",
   exp:"การผ่าตัดเร็วเกินไปในทารกแรกเกิดเพิ่มความเสี่ยงการดมยาสลบ ส่วนการรอนานเกินไปมีผลต่อจิตใจครอบครัวและการพัฒนา",
   rubric:"ได้เต็ม = rule of 10s (≥2 องค์ประกอบ) + เหตุผลความปลอดภัยการดมยา",
   pts:[CR(P("Rule of 10s","rule of 10","rule of ten","10 ?(ปอนด์|lb|pound)","hemoglobin","\\bhb\\b")),P("ปลอดภัยต่อการดมยาสลบ","ดมยา","anesthe","anaesthe","ปลอดภัย"),P("เนื้อเยื่อใหญ่พอให้ผ่าตัดแม่นยำ","เนื้อเยื่อ","tissue","แม่นยำ")]})
 ),
 interp:"Spot: cleft lip → เวลาผ่าตัดซ่อมและ rule of 10s",
 summary:["Cleft lip repair ~3 เดือน (rule of 10s: 10 สัปดาห์, 10 ปอนด์, Hb 10)","Cleft palate repair ~9–18 เดือน ก่อนเริ่มพูด"]}),

/* ===== PowerPoint 7 ===== */
Co({page:198,sec:"PowerPoint",orig:"PPT 7",topic:"spot",sub:"Other spot",title:"Spot — eye movements in the nine positions of gaze",img:["os67d_p7"],kimg:["os67d_kp7"],
 stem:`A video of eye movements was shown in the examination; photographs of the eyes in the nine positions of gaze are provided here.<br>7.1 Describe the abnormal physical findings.<br>7.2 Give the diagnosis.`,
 gray:"7 · 7.1 จงบรรยายสิ่งผิดปกติจากการตรวจร่างกาย ในวีดีโอ · 7.2 จงให้ diagnosis · [ตัวแดง] Abducens nerve palsy · [มุมขวาล่าง] parinaud syndrome",
 flag:"⚠ ไฟล์ให้คำตอบ 2 แบบขัดกัน (ตัวแดง Abducens nerve palsy / ตัวพิมพ์ parinaud syndrome) · ในข้อสอบจริงเป็นวีดีโอ ภาพที่ใช้เป็นรูป 9 ทิศทางการมองที่ผู้ทำ recall หามา",
 notes:"ตัวแดง: Abducens nerve palsy · ตัวพิมพ์มุมขวาล่าง: parinaud syndrome",
 opinion:"ไฟล์มีคำตอบ 2 แบบ — ลายมือแดงตอบ <b>abducens nerve palsy</b> ส่วนตัวพิมพ์ตอบ <b>Parinaud syndrome</b> · เลือกตามตัวพิมพ์: แถวบนของภาพ (มองขึ้น) ผู้ป่วยย่นหน้าผากพยายามมองขึ้นแต่ลูกตาขึ้นได้น้อยทั้งสองข้าง = <b>upgaze palsy</b> ซึ่งเป็นลักษณะหลักของ dorsal midbrain (Parinaud) syndrome · abducens palsy จะเห็นตาข้างเดียวกลอกออกด้านข้างไม่ได้ในการมองแนวราบ ไม่ใช่ปัญหาการมองขึ้น",
 parts:S(
  B("7.1 Describe the abnormal findings.",3,{tags:["spot"],
   ans:"<b>ลูกตาทั้งสองข้างกลอกขึ้นได้น้อย (vertical upgaze palsy)</b> — ในท่ามองขึ้นตาแทบไม่ขึ้นเหนือแนวกลาง แม้ผู้ป่วยยกคิ้ว/ย่นหน้าผาก · การมองลงและแนวราบยังทำได้ใกล้เคียงปกติ · ลักษณะอื่นของกลุ่มอาการที่ควรตรวจในวีดีโอ: convergence-retraction nystagmus เมื่อพยายามมองขึ้น, light-near dissociation ของรูม่านตา, eyelid retraction (Collier sign)",
   exp:"การตรวจ extraocular movement ให้ดูทั้ง 9 ทิศ (หรือแบบ H) เปรียบเทียบสองตา และสังเกตอาการร่วม (nystagmus, ptosis, รูม่านตา)",
   rubric:"ได้เต็ม = upgaze palsy ทั้งสองข้าง ± อาการร่วมของ Parinaud · ตอบ abduction deficit (ตามลายมือในไฟล์) ไม่ได้คะแนน",
   pts:[CR(P("มองขึ้นไม่ได้ทั้งสองข้าง (upgaze palsy)","upgaze","upward gaze","มองขึ้น","vertical gaze","elevat")),P("Convergence-retraction nystagmus / light-near dissociation / lid retraction","convergence","retraction","light.?near","collier")]}),
  B("7.2 Give the diagnosis.",3,{tags:["spot"],key:"Abducens nerve palsy (ตัวแดง) · parinaud syndrome (ตัวพิมพ์)",
   ans:"<b>Parinaud syndrome (dorsal midbrain syndrome)</b> · สาเหตุที่ต้องนึกถึงในงานศัลยกรรมประสาท: <b>pineal region tumor</b> (เช่น germinoma ในเด็ก/วัยรุ่นชาย), obstructive hydrocephalus (aqueductal stenosis, shunt malfunction), midbrain stroke/hemorrhage",
   exp:"รอยโรคกด/ทำลาย posterior commissure และ rostral interstitial nucleus of MLF บริเวณ dorsal midbrain → vertical (upgaze) palsy",
   rubric:"ได้เต็ม = Parinaud/dorsal midbrain syndrome · บอกสาเหตุได้คะแนนเสริม",
   pts:[CR(P("Parinaud / dorsal midbrain syndrome","parinaud","dorsal midbrain")),P("สาเหตุ: pineal tumor / hydrocephalus","pineal","hydroceph","germinoma")]})
 ),
 interp:"Spot: upgaze palsy → Parinaud (dorsal midbrain) syndrome — ศัลยกรรมประสาท",
 summary:["Parinaud: upgaze palsy, convergence-retraction nystagmus, light-near dissociation, lid retraction","สาเหตุ: pineal tumor, hydrocephalus, midbrain stroke","Abducens palsy = ตาข้างนั้นกลอกออกด้านข้างไม่ได้ (คนละภาพ)"]}),

/* ===== PowerPoint 8 ===== */
Co({page:199,sec:"PowerPoint",orig:"PPT 8",topic:"spot",sub:"Anorectal",title:"Spot — painful buttock swelling with fever in an uncontrolled diabetic",img:["os67d_p8"],kimg:["os67d_kp8"],
 stem:`A 40-year-old man with untreated diabetes mellitus presents with buttock pain and fever. The physical examination finding is shown.<br>8.1 Give the diagnosis.<br>8.2 State the treatment.`,
 gray:"8 · ผู้ป่วยชายอายุ 40 ปี เป็นเบาหวานไม่ได้รักษา มาโรงพยาบาลด้วยปวดแก้มก้นและมีไข้ ตรวจร่างกายพบดังภาพ · 8.1 จงให้ diagnosis · 8.2 จงบอกแนวทางการรักษา · [มุมขวาล่าง] perianal abscess",
 notes:"ตัวพิมพ์มุมขวาล่าง: perianal abscess · ไม่มีแนวคำตอบการรักษา",
 parts:S(
  B("8.1 Give the diagnosis.",2,{tags:["spot"],key:"perianal abscess",
   ans:"<b>Perianal abscess</b> (ก้อนบวมแดงร้อนข้างทวารหนัก — ถ้าบวมกว้างลงแก้มก้นลึกเป็น <b>ischiorectal abscess</b>) ในผู้ป่วยเบาหวานที่คุมไม่ได้",
   exp:"Anorectal abscess เกิดจาก cryptoglandular infection ของ anal gland · แบ่งเป็น perianal, ischiorectal, intersphincteric, supralevator · ผู้ป่วยเบาหวานเสี่ยงลุกลามเป็น necrotizing soft tissue infection (Fournier gangrene)",
   rubric:"ได้ = perianal หรือ ischiorectal abscess",
   pts:[CR(P("Perianal / ischiorectal abscess","perianal abscess","ischiorectal","anorectal abscess","ฝี.{0,10}(ทวาร|ก้น)","abscess"))]}),
  B("8.2 State the treatment.",4,{tags:["spot"],
   ans:"<b>Incision and drainage (I&D) โดยเร็ว</b> — กรีดใกล้ขอบทวารหนัก (เพื่อให้ fistula ที่อาจเกิดสั้น) เปิดแผลให้กว้างพอ ระบายหนอง ไม่ต้องรอให้ fluctuate · ตรวจใต้ยาสลบ (EUA) ถ้าก้อนลึก/ใหญ่ · <b>ให้ antibiotics</b> ร่วมเพราะเป็นเบาหวาน มีไข้ cellulitis รอบ ๆ (ครอบคลุม gram-negative + anaerobe) · <b>คุมระดับน้ำตาล</b> · sitz bath ทำแผล ยาแก้ปวด · ติดตามอาการ fistula-in-ano ซึ่งเกิดตามมาได้ราว 1/3 · เฝ้าระวัง necrotizing infection",
   exp:"Antibiotics อย่างเดียวไม่พอสำหรับฝี ต้องระบาย · ข้อบ่งชี้ให้ antibiotics ร่วม: เบาหวาน ภูมิคุ้มกันต่ำ cellulitis กว้าง sepsis ลิ้นหัวใจเทียม",
   rubric:"ได้เต็ม = I&D + antibiotics ในเบาหวาน + คุมน้ำตาล · ตอบ antibiotics อย่างเดียวไม่ได้คะแนนหลัก",
   pts:[CR(P("Incision and drainage","incision","drainage","i ?& ?d","ระบาย","ผ่าฝี")),P("Antibiotics (DM, cellulitis, ไข้)","antibiotic","ยาฆ่าเชื้อ"),P("คุมระดับน้ำตาล","น้ำตาล","glucose","sugar","insulin","\\bdm\\b","เบาหวาน"),P("Sitz bath, ทำแผล, ติดตาม fistula","sitz","fistula","ทำแผล","wound care")]})
 ),
 interp:"Spot: anorectal abscess ในผู้ป่วยเบาหวาน → I&D + antibiotics",
 summary:["Anorectal abscess รักษาหลักคือ I&D ทันที ไม่รอ fluctuation","ให้ antibiotics ร่วมในเบาหวาน/ภูมิต่ำ/cellulitis/sepsis","ระวัง Fournier gangrene ในเบาหวาน · ~1/3 เกิด fistula-in-ano ตามมา"]}),

/* ===== PowerPoint 9 ===== */
Co({page:200,sec:"PowerPoint",orig:"PPT 9",topic:"spot",sub:"Uro/Genital",title:"Spot — an ulcerated lesion of the penis",img:["os67d_p9"],kimg:["os67d_kp9"],
 stem:`A lesion of the penis is shown (arrow).<br>9.1 Give the diagnosis.<br>9.2 State the treatment.`,
 gray:"9 · 9.1 จงให้ diagnosis · 9.2 จงบอกแนวทางการรักษา · [ตัวแดง] Penile CA · Excision ---> Circumcision penectomy · [มุมขวาล่าง] SCC penis",
 notes:"ตัวแดง: Penile CA (ไฮไลต์) · Excision → Circumcision penectomy · ตัวพิมพ์มุมขวาล่าง: SCC penis",
 parts:S(
  B("9.1 Give the diagnosis.",2,{tags:["spot"],key:"Penile CA · SCC penis",
   ans:"<b>Squamous cell carcinoma of the penis</b> — แผล/ก้อนเนื้อแดงขรุขระที่ glans และ prepuce",
   exp:"ปัจจัยเสี่ยง: ไม่ได้ขลิบ (phimosis), สุขอนามัยไม่ดี (smegma), HPV 16/18, สูบบุหรี่, lichen sclerosus",
   rubric:"ได้ = penile cancer/SCC penis",
   pts:[CR(P("SCC / carcinoma of penis","scc","squamous","penile (ca|cancer|carcinoma)","carcinoma","มะเร็ง.{0,10}องคชาต"))]}),
  B("9.2 State the treatment.",4,{tags:["spot"],key:"Excision ---> Circumcision penectomy",
   ans:"<b>Biopsy ยืนยัน</b>ก่อน · <b>รักษาก้อนหลัก</b>ตามตำแหน่ง/stage: รอยโรคจำกัดที่หนังหุ้ม → <b>circumcision</b> · รอยโรคเล็กที่ glans → wide local excision/glansectomy (penile-sparing) · ลุกลามมากขึ้น → <b>partial penectomy</b> (เหลือ margin ปลอดมะเร็ง) หรือ <b>total penectomy + perineal urethrostomy</b> ถ้าตอเหลือไม่พอให้ยืนปัสสาวะ · <b>ประเมินต่อมน้ำเหลืองขาหนีบ</b>: คลำได้ → FNA/biopsy → inguinal lymphadenectomy · คลำไม่ได้แต่ intermediate/high-risk → dynamic sentinel node biopsy หรือ modified inguinal lymphadenectomy",
   exp:"Inguinal node status เป็นปัจจัยพยากรณ์โรคที่สำคัญที่สุดของมะเร็งองคชาต",
   rubric:"ได้เต็ม = biopsy + circumcision/excision/partial penectomy ตามขนาด + ประเมิน/จัดการต่อมน้ำเหลืองขาหนีบ",
   pts:[P("Biopsy ยืนยัน","biopsy","ชิ้นเนื้อ"),CR(P("ผ่าตัดก้อน: circumcision / excision / partial–total penectomy","circumcision","excision","penectomy","ขลิบ","glansectomy")),P("ประเมินต่อมน้ำเหลืองขาหนีบ / inguinal lymphadenectomy","inguinal","lymph","ต่อมน้ำเหลือง","sentinel")]})
 ),
 interp:"Spot: penile SCC และหลักการรักษาก้อนหลัก + ต่อมน้ำเหลืองขาหนีบ",
 summary:["Penile SCC: ปัจจัยเสี่ยง ไม่ขลิบ/phimosis, HPV, บุหรี่","รักษา: biopsy → circumcision/WLE/partial หรือ total penectomy ตามขอบเขต","ต่อมน้ำเหลืองขาหนีบคือปัจจัยพยากรณ์สำคัญที่สุด"]}),

/* ===== PowerPoint 10 ===== */
Co({page:201,sec:"PowerPoint",orig:"PPT 10",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — a small papule on the ear",img:["os67d_p10"],kimg:["os67d_kp10"],
 stem:`A lesion on the ear of an elderly patient is shown.<br>10.1 Give the diagnosis.<br>10.2 State the treatment.`,
 gray:"10 · 10.1 จงให้ diagnosis · 10.2 จงบอกแนวทางการรักษา · [มุมขวาล่าง] จุดบนหูแดงๆ ไม่รู้เหมือนกันคืออะไร 555+ (แต่ภาพที่หยิบๆมาคือ incusion cyst นะ)",
 flag:"ผู้ทำ recall จำรอยโรคจริงไม่ได้ (\"จุดบนหูแดงๆ\") — ภาพเป็นภาพที่หามาแทน ระบุว่าเป็น inclusion cyst · เฉลยตามภาพที่ให้",
 notes:"ตัวพิมพ์มุมขวาล่าง: จุดบนหูแดงๆ ไม่รู้เหมือนกันคืออะไร (แต่ภาพที่หยิบๆมาคือ incusion cyst) · ไม่มีแนวคำตอบการรักษา",
 parts:S(
  B("10.1 Give the diagnosis.",2,{tags:["spot"],key:"(ไม่ทราบรอยโรคในข้อสอบจริง) ภาพที่ใช้ = inclusion cyst",
   ans:"<b>Epidermal inclusion cyst</b> (epidermoid cyst) — ตุ่มนูนกลมเล็ก ผิวเรียบ สีขาวเหลือง ที่ antihelix · ddx ที่ต้องคิดของตุ่มที่ใบหูผู้สูงอายุ: <b>nodular basal cell carcinoma</b> (ตุ่มมันวาวแบบไข่มุก มี telangiectasia), <b>chondrodermatitis nodularis helicis</b> (ตุ่มเจ็บ มีสะเก็ดตรงกลาง ที่ helix/antihelix), SCC, actinic keratosis",
   exp:"ใบหูเป็นบริเวณโดนแดด — ตุ่มที่โตขึ้น มีแผล/เลือดออก ในผู้สูงอายุต้องตัดชิ้นเนื้อแยก BCC/SCC",
   rubric:"ได้ = epidermal inclusion cyst · ตอบ BCC หรือ chondrodermatitis nodularis helicis พร้อมเหตุผลได้บางส่วน",
   pts:[CR(P("Epidermal inclusion (epidermoid) cyst","inclusion cyst","epiderm","sebaceous cyst","ซีสต์")),P("Ddx: BCC / chondrodermatitis nodularis helicis / SCC","\\bbcc\\b","basal cell","chondrodermatitis","\\bscc\\b")]}),
  B("10.2 State the treatment.",2,{tags:["spot"],
   ans:"<b>Surgical excision</b> เอาออกทั้งก้อน<b>พร้อมผนังซีสต์</b> (ถ้าเหลือผนังจะกลับเป็นซ้ำ) ภายใต้ local anesthesia แล้ว<b>ส่งตรวจพยาธิวิทยา</b> · ถ้าอักเสบติดเชื้อ ระบายหนองก่อน แล้วตัดผนังซีสต์ภายหลังเมื่อยุบ · ถ้าผลเป็น BCC → excision with margin (หรือ Mohs surgery บริเวณใบหู)",
   exp:"การบีบหรือระบายอย่างเดียวไม่หายขาด",
   rubric:"ได้ = complete excision รวมผนังซีสต์ + ส่งพยาธิ",
   pts:[CR(P("Complete excision รวมผนังซีสต์","excision","ตัดออก","ผนัง","wall","capsule")),P("ส่งตรวจพยาธิวิทยา","พยาธิ","patho","ชิ้นเนื้อ","biopsy")]})
 ),
 interp:"Spot: ตุ่มที่ใบหู — inclusion cyst และ ddx มะเร็งผิวหนังบริเวณโดนแดด",
 summary:["Epidermoid cyst: ตุ่มกลม ผิวเรียบ ยึดผิวหนัง อาจมี punctum → excision รวมผนังซีสต์","ตุ่มที่ใบหูผู้สูงอายุ ต้องแยก BCC, SCC, chondrodermatitis nodularis helicis","ส่งพยาธิทุกครั้ง"]}),

/* ===== PowerPoint 11 ===== */
Co({page:202,sec:"PowerPoint",orig:"PPT 11",topic:"spot",sub:"Anorectal",title:"Spot — a perianal lesion",img:["os67d_p11"],kimg:["os67d_kp11"],
 stem:`A perianal lesion is shown.<br>11.1 Give the diagnosis.<br>11.2 State the treatment.`,
 gray:"11 · 11.1 จงให้ diagnosis · 11.2 จงบอกแนวทางการรักษา · [ตัวแดง] Complex · Open hemorrhoidectomy · [มุมขวาล่าง] prolapsed internal hemorrhoid",
 notes:"ตัวแดง: Complex (น่าจะหมายถึง complex/mixed hemorrhoid) · Open hemorrhoidectomy · ตัวพิมพ์มุมขวาล่าง: prolapsed internal hemorrhoid",
 parts:S(
  B("11.1 Give the diagnosis.",2,{tags:["spot"],key:"Complex · prolapsed internal hemorrhoid",
   ans:"<b>Prolapsed internal hemorrhoids</b> (grade III–IV) ร่วมกับ external component = <b>mixed (complex) hemorrhoids</b> — ก้อนเยื่อบุสีแดงคล้ำหลายก้อนยื่นออกนอกทวารหนัก",
   exp:"Grading internal hemorrhoid: I ไม่ยื่น · II ยื่นแล้วกลับเอง · III ยื่นต้องดันกลับ · IV ยื่นค้างดันกลับไม่ได้",
   rubric:"ได้ = prolapsed internal hemorrhoid / mixed hemorrhoid · บอก grade III–IV ได้คะแนนเต็ม",
   pts:[CR(P("Prolapsed internal / mixed hemorrhoids","hemorrhoid","haemorrhoid","ริดสีดวง","piles")),P("Grade III–IV / mixed (complex)","grade ?(3|4|iii|iv)","mixed","complex","prolaps")]}),
  B("11.2 State the treatment.",3,{tags:["spot"],key:"Open hemorrhoidectomy",
   ans:"<b>Excisional (surgical) hemorrhoidectomy</b> — <b>open (Milligan–Morgan)</b> หรือ closed (Ferguson) · ทางเลือก: stapled hemorrhoidopexy (PPH) สำหรับ grade III ที่เป็นวงรอบ · ร่วมกับ conservative: อาหารกากใยสูง ดื่มน้ำ ไม่เบ่ง sitz bath · (RBL ใช้ได้ใน grade I–III ที่ไม่มี external component มาก) · ถ้า prolapse ค้างจน thrombosed/gangrene ต้องผ่าตัดเร่งด่วน",
   exp:"Grade III–IV หรือ mixed hemorrhoid ที่ external component มาก ตอบสนองต่อ office procedure ไม่ดี จึงใช้ excisional hemorrhoidectomy",
   rubric:"ได้เต็ม = excisional hemorrhoidectomy (open/closed) + conservative care",
   pts:[CR(P("Excisional hemorrhoidectomy (open Milligan–Morgan / closed Ferguson)","hemorrhoidectomy","haemorrhoidectomy","milligan","ferguson","ตัดริดสีดวง")),P("Conservative: fiber, น้ำ, sitz bath","fiber","fibre","กากใย","sitz","ดื่มน้ำ"),P("ทางเลือก: stapled hemorrhoidopexy","stapl","\\bpph\\b","hemorrhoidopexy")]})
 ),
 interp:"Spot: prolapsed/mixed hemorrhoids → excisional hemorrhoidectomy",
 summary:["Internal hemorrhoid grade I–IV ตามการยื่นและการกลับเข้า","Grade III–IV หรือ mixed → excisional hemorrhoidectomy (open Milligan–Morgan / closed Ferguson)","Grade I–II (บาง III) → conservative, RBL"]}),

/* ===== PowerPoint 12 ===== */
Co({page:203,sec:"PowerPoint",orig:"PPT 12",topic:"spot",sub:"Pediatric surgery",title:"Spot — scrotal swelling in an infant",img:["os67d_p12"],kimg:["os67d_kp12"],
 stem:`A photograph of an infant with scrotal swelling is shown.<br>12.1 State the key physical examination to differentiate the diagnosis.<br>12.2 State the age at which surgical correction should be performed.`,
 gray:"12 · 12.1 จงการตรวจร่างกายที่สำคัญในการแยกโรค · 12.2 จงบอกอายุที่จะทำการผ่าตัดแก้ไข · [ตัวแดง] Translumination test · [มุมขวาล่าง] hydrocele",
 notes:"ตัวแดง: Translumination test · ตัวพิมพ์มุมขวาล่าง: hydrocele · ไม่มีคำตอบอายุที่ผ่าตัด",
 parts:S(
  B("12.1 State the key physical examination.",3,{tags:["spot"],key:"Translumination test · (dx: hydrocele)",
   ans:"<b>Transillumination test</b> — ส่องไฟฉายผ่านถุงอัณฑะในที่มืด ถุงน้ำใส่จะเรืองแสง (positive) = <b>hydrocele</b> · ร่วมกับ: <b>คลำเหนือก้อนได้</b> (get above the swelling — ถ้าได้ = ก้อนอยู่ในถุงอัณฑะ ไม่ใช่ hernia) · ดันกลับเข้าช่องท้องไม่ได้ ไม่มี cough impulse (ต่างจาก inguinal hernia) · ขนาดเปลี่ยนในวันเดียวบ่งชี้ communicating hydrocele",
   exp:"ในทารก ลำไส้ใน hernia ก็อาจโปร่งแสงได้ จึงต้องใช้การคลำเหนือก้อนและการดันกลับร่วมด้วย",
   rubric:"ได้เต็ม = transillumination + การคลำเหนือก้อน/ดันกลับเพื่อแยก hernia",
   pts:[CR(P("Transillumination test","transillumina","translumina","ส่องไฟ")),P("คลำเหนือก้อนได้ / ดันกลับไม่ได้ / ไม่มี cough impulse","get above","เหนือก้อน","reduc","ดันกลับ","cough impulse")]}),
  B("12.2 State the age for surgical correction.",2,{tags:["spot"],
   ans:"Congenital (non-communicating) hydrocele ส่วนใหญ่<b>หายเองภายในอายุ 1–2 ปี</b> → สังเกตอาการ · <b>ผ่าตัดถ้ายังไม่หายหลังอายุประมาณ 1–2 ปี</b> หรือผ่าเร็วกว่านั้นถ้าเป็น <b>communicating hydrocele</b> (ขนาดเปลี่ยนขึ้นลง) หรือมี inguinal hernia ร่วม · ผ่าตัดแบบ inguinal approach: high ligation of patent processus vaginalis",
   exp:"Hydrocele ในเด็กเกิดจาก processus vaginalis ไม่ปิด จึงผ่าตัดทาง inguinal เหมือน herniotomy ไม่ใช่ทาง scrotum แบบผู้ใหญ่",
   rubric:"ได้ = รอได้จนประมาณ 1–2 ปี ผ่าเมื่อไม่หาย หรือ communicating/มี hernia",
   pts:[CR(P("ผ่าตัดเมื่อไม่หายหลังอายุ 1–2 ปี","1.?2 ?(ปี|year|yr)","2 ?(ปี|year|yr)","1 ?(ปี|year|yr)","12.?24")),P("Communicating / มี hernia → ผ่าเร็ว ทาง inguinal (high ligation)","communicat","high ligation","inguinal","processus")]})
 ),
 interp:"Spot: hydrocele ในทารก — transillumination และเวลาผ่าตัด",
 summary:["Hydrocele: transillumination +, คลำเหนือก้อนได้, ดันกลับไม่ได้","Congenital hydrocele หายเองได้ภายใน 1–2 ปี","ผ่าตัดเมื่อไม่หายหลัง 1–2 ปี หรือ communicating/มี hernia: inguinal high ligation"]}),

/* ===== PowerPoint 13 ===== */
Co({page:204,sec:"PowerPoint",orig:"PPT 13",topic:"spot",sub:"Imaging film",title:"Spot — contrast study of the large bowel: differential diagnosis and investigation",img:["os67d_p13"],kimg:["os67d_kp13"],
 stem:`A radiological study is shown.<br>13.1 Give the differential diagnoses.<br>13.2 State the key investigation to differentiate between them.`,
 gray:"13 · 13.1 จงบอก differential diagnosis · 13.2 จงบอก investigation ที่สำคัญในการแยกโรค · [ตัวแดง] Hirschsprung disease · Large bowel obstruction · Volvulus · Barium enema · [มุมขวาล่าง] hirsprung disease",
 flag:"⚠ ไฟล์ตอบ barium enema แต่ภาพที่ให้เป็น contrast enema อยู่แล้ว · investigation ที่ใช้ยืนยัน/แยกโรค = rectal biopsy · PPT 13 และ 14 ใช้ภาพเดียวกันในไฟล์",
 notes:"ตัวแดง (ไฮไลต์): Hirschsprung disease, Large bowel obstruction, Volvulus · Barium enema · ตัวพิมพ์มุมขวาล่าง: hirsprung disease",
 opinion:"ไฟล์ตอบ investigation ที่สำคัญในการแยกโรคว่า <b>barium enema</b> — ภาพที่ให้เป็น contrast enema แล้ว (เห็น transition zone) · การตรวจที่<b>ยืนยัน/แยก Hirschsprung disease</b> คือ <b>rectal (suction) biopsy</b> พบ absence of ganglion cells + hypertrophied nerve fibers (acetylcholinesterase/calretinin) · contrast enema เป็นการตรวจคัดกรอง/ดู transition zone",
 parts:S(
  B("13.1 Give the differential diagnoses.",3,{tags:["spot"],key:"Hirschsprung disease · Large bowel obstruction · Volvulus",
   ans:"ภาพ: contrast enema เห็น rectum/sigmoid ขนาดเล็กหดเกร็ง แล้วมี transition zone ไปยัง colon ส่วนต้นที่โป่งขยาย · Ddx: <b>Hirschsprung disease</b> (นึกถึงมากที่สุด) · functional constipation/idiopathic megacolon · distal large bowel obstruction อื่น (colonic stricture, tumor ในผู้ใหญ่) · sigmoid volvulus · (ในทารกแรกเกิด: meconium plug/small left colon syndrome, meconium ileus, colonic atresia)",
   exp:"Hirschsprung = aganglionosis ของ distal bowel ต่อเนื่องจาก internal sphincter ขึ้นไป · ส่วนที่ไม่มี ganglion หดเกร็ง ส่วนต้นโป่งขยาย",
   rubric:"ได้เต็ม = Hirschsprung + ddx อื่น ≥1",
   pts:[CR(P("Hirschsprung disease","hirsch","hirsprung","aganglion")),G("Ddx อื่น ≥1",1,P("Functional constipation / megacolon","functional","megacolon","constipat"),P("Large bowel obstruction (stricture/tumor)","large bowel obstruct","\\blbo\\b","stricture","tumor","tumour"),P("Volvulus","volvulus"),P("Meconium plug / meconium ileus / atresia","meconium","atresia","small left colon"))]}),
  B("13.2 State the key investigation.",3,{tags:["spot"],key:"Barium enema",flag:"⚠ เฉลยต่างจากไฟล์",
   ans:"<b>Rectal (suction) biopsy</b> — gold standard: ไม่พบ ganglion cells ใน submucosal plexus + nerve trunk หนา (ย้อม acetylcholinesterase เพิ่ม / calretinin ลบ) · การตรวจประกอบ: <b>contrast (barium) enema</b> ดู transition zone และ rectosigmoid index < 1, delayed evacuation ที่ 24 ชม. · anorectal manometry: ไม่มี rectoanal inhibitory reflex",
   exp:"Contrast enema ไม่สามารถตัดหรือยืนยันโรคได้แน่นอน (โดยเฉพาะทารกแรกเกิดและ total colonic aganglionosis) จึงต้องยืนยันด้วยชิ้นเนื้อ",
   rubric:"ได้เต็ม = rectal biopsy · ตอบ barium/contrast enema (ตามไฟล์) ได้บางส่วน",
   pts:[CR(P("Rectal (suction) biopsy","rectal biopsy","suction biopsy","biopsy","ชิ้นเนื้อ")),P("Contrast enema: transition zone","barium","contrast enema","transition"),P("Anorectal manometry (no RAIR)","manometry","\\brair\\b","inhibitory reflex")]})
 ),
 interp:"Spot film: contrast enema transition zone → Hirschsprung disease และการยืนยันด้วย rectal biopsy",
 summary:["Contrast enema: rectum เล็ก → transition zone → colon โป่ง, rectosigmoid index <1","ยืนยัน Hirschsprung = rectal suction biopsy (ไม่มี ganglion cells)","Manometry: ไม่มี rectoanal inhibitory reflex"]}),

/* ===== PowerPoint 14 ===== */
Co({page:205,sec:"PowerPoint",orig:"PPT 14",topic:"spot",sub:"Imaging film",title:"Spot — contrast study of the large bowel: diagnosis and treatment",img:["os67d_p13"],kimg:["os67d_kp14"],
 stem:`A radiological study is shown.<br>14.1 Give the diagnosis.<br>14.2 Outline the treatment.`,
 gray:"14 · 14.1 จงบอก diagnosis · 14.2 จงบอกแนวทางในการรักษา · [มุมขวาล่าง] hirsprung disease",
 flag:"ไฟล์ใช้ภาพเดียวกับ PPT 13 (โจทย์ต่างกัน จึงแยกสถานี)",
 notes:"ตัวพิมพ์มุมขวาล่าง: hirsprung disease · ไม่มีแนวคำตอบการรักษา · ภาพเหมือน PPT 13",
 parts:S(
  B("14.1 Give the diagnosis.",2,{tags:["spot"],key:"hirsprung disease",
   ans:"<b>Hirschsprung disease</b> (rectosigmoid / short-segment type) — contrast enema เห็น distal colon ตีบเล็ก มี transition zone และ colon ส่วนต้นโป่งขยาย",
   exp:"Short-segment (rectosigmoid) พบ ~75–80% · อาการ: ถ่ายขี้เทาช้ากว่า 24–48 ชม.หลังคลอด ท้องอืด อาเจียน ท้องผูกเรื้อรัง ตรวจ rectum แล้วมีลม/อุจจาระพุ่ง (blast sign)",
   rubric:"ได้ = Hirschsprung disease",
   pts:[CR(P("Hirschsprung disease","hirsch","hirsprung","aganglion"))]}),
  B("14.2 Outline the treatment.",4,{tags:["spot"],
   ans:"<b>เบื้องต้น:</b> ยืนยันด้วย rectal biopsy · แก้ภาวะขาดน้ำ/electrolyte · decompression ด้วย <b>rectal washout/irrigation</b> (สวนล้างด้วย NSS) · ถ้ามี <b>Hirschsprung-associated enterocolitis</b> → NPO, IV fluid, IV antibiotics, rectal irrigation · <b>Definitive:</b> ผ่าตัดตัดลำไส้ส่วนที่ไม่มี ganglion แล้วนำลำไส้ปกติลงมาต่อกับทวารหนัก = <b>pull-through procedure</b> (transanal endorectal pull-through/Soave, Swenson, Duhamel) โดยยืนยัน ganglion cells จาก frozen section · ถ้าลำไส้โป่งมาก enterocolitis รุนแรง หรือผู้ป่วยไม่พร้อม → <b>leveling colostomy</b> ก่อน แล้วค่อย pull-through",
   exp:"Enterocolitis เป็นภาวะแทรกซ้อนที่ทำให้เสียชีวิตได้ ทั้งก่อนและหลังผ่าตัด",
   rubric:"ได้เต็ม = rectal irrigation + pull-through (± colostomy ก่อน) + ระวัง enterocolitis",
   pts:[P("Rectal washout / irrigation","washout","irrigat","สวนล้าง","decompress"),CR(P("Pull-through procedure (Soave/Swenson/Duhamel/TERPT)","pull.?through","soave","swenson","duhamel")),P("Leveling colostomy ก่อนในรายที่ไม่พร้อม","colostomy","leveling","levelling"),P("Enterocolitis: antibiotics + irrigation","enterocolitis","antibiotic")]})
 ),
 interp:"Spot film: Hirschsprung disease และหลักการรักษา",
 summary:["Hirschsprung: rectal irrigation ระหว่างรอผ่าตัด","Definitive = pull-through (TERPT/Soave, Swenson, Duhamel) ยืนยัน ganglion ด้วย frozen section","Leveling colostomy ก่อนถ้าลำไส้โป่งมาก/enterocolitis รุนแรง","Enterocolitis = ภาวะแทรกซ้อนที่อันตรายที่สุด"]}),

);
})();
