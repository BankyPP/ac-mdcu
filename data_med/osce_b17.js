(function(){
/* Internal Medicine OSCE ข้อสอบเก่า AC — ปี "XX" rotation "RoX" (recall ไม่ทราบปี → ถือเป็นปีเก่าสุด เรียงท้ายสุด: yrNum("XX") = 0)
   ที่มา: R01 = OSCE Med for All (สมุด "Last MED OSCE" MDCU'71) — ผู้ใช้สั่ง 14 พ.ย. 2026 (แชท R01 ชุดที่ 1)
   · p4  = recall ข้อสอบจริง: ASCE (influenza) + OSCE ข้อ 1–11 (พิมพ์ไว้ ไม่มีเฉลย มีแค่ "น่าจะ…" ที่ผู้จดเดา)
   · p5  = recall ต่อ 2 สถานี ติดป้าย "XX." (บรรยาย CT + etiology · เตรียมตัว/วัดความดัน คนไข้นั่งไขว่ห้าง)
   · กล่อง "XX." ที่แปะในหน้าซักประวัติ 4 สถานี: p10 ไข้ 3 วัน · p14 ถ่ายเป็นเลือดดำสลับแดง · p15 ขาบวม · p16 ไอเป็นเลือด
     (สถานีที่สมุดเขียนเป็นเลข 1–12 ในหน้าซักประวัติ = ข้อสอบปีอื่นที่มีในคลังแล้ว → ไม่ใส่ซ้ำ)
   · ชุด 2 (p28–65, 14 พ.ย. 2026): กล่อง "XX." 2 สถานี — p40 thyrotoxicosis DDx 3 โรค · p64 skin lesion ที่ penis (สถานีเลขอื่นในช่วงนี้ = ปีอื่นที่มีในคลังแล้ว → ติด 📝 recall ใน Round I/O)
   เฉลย: ใช้ key ในสมุดถ้ามี (ลายมือในหน้าเนื้อหา R01) · ไม่มี = เฉลยโดย Claude · CXR ใช้เกณฑ์ ABCDEFGHI · Skin ใช้เวอร์ชันหลักของผู้ใช้ (med-osce)
   รูป: p5 CT → img/moxx_ct.jpg · สถานีอื่นไม่มีรูปในสมุด (NOIMG) */
const NK="ไม่มีเฉลยในสมุด (เฉลยโดย Claude)";
const KN=p=>"เฉลยจากลายมือในสมุด R01 p"+p;
const P=(t,...re)=>({t,re});
const G=(label,need,...opts)=>({label,need,opts});
const H=(label,w)=>({h:label,w});
const CR=x=>Object.assign(x,{crit:1});
function B(q,marks,o){const pts=[],kw=[],crit=[],secs=[];(o.pts||[]).forEach(p=>{if(p.h){secs.push([p.h,pts.length,p.w||0]);return;}
  if(p.crit)crit.push(pts.length);
  if(p.opts){pts.push({label:p.label,any:p.opts.map(x=>x.t),need:p.need});kw.push(p.opts.map(x=>x.re));}else{pts.push(p.t);kw.push(p.re);}});
  const s=Object.assign({q,marks,key:NK},o);delete s.pts;s.points=pts;s.kw=kw;if(crit.length)s.crit=crit;if(secs.length)s.secs=secs;return s;}
const S=(...subs)=>[{subs}];
const NOIMG="ไม่มีรูปในสมุด (recall ไม่ได้แนบรูป) — ข้อนี้ฝึกบรรยายสิ่งที่คาดว่าจะเห็น";
const X=o=>Object.assign({set:"XX",ro:"RoX",file:"R01",kfile:"R01",opinion:""},o);
const SK="เวอร์ชันหลักของผู้ใช้ (med-osce, 14 พ.ย. 2026)";
QB.push(

/* ============================ p4 · ASCE ============================ */
X({page:4,orig:"ASCE",topic:"hx",ex:1,title:"ASCE — fever with myalgia in influenza season: history, one investigation and advice",
 stem:`(ASCE) A simulated patient presents with acute fever.<br>1. Take a history.<br>2. Choose one investigation.<br>3. Advise the patient.`,
 gray:"ASCE (influenza)\n1.ซักประวัติผู้ป่วย\n2.เลือกสิ่งส่งตรวจ1อย่าง\n3.adviceผู้ป่วย",
 flag:"⚠ recall บอกแค่หัวข้อ (influenza) — Claude ตั้งโจทย์และบทผู้ป่วยตามโรคที่ผู้จดระบุ",
 sp:"(Claude ร่าง) หญิง 30 ปี ไข้สูงเฉียบพลัน 2 วัน ปวดเมื่อยทั้งตัว ปวดศีรษะ ไอแห้ง เจ็บคอ น้ำมูกเล็กน้อย · เพื่อนร่วมงานป่วยคล้ายกันสัปดาห์ก่อน · ไม่มีเหนื่อยหอบ เจ็บอก ซึม · ไม่มีโรคประจำตัว ไม่ตั้งครรภ์ ยังไม่ได้ฉีดวัคซีนไข้หวัดใหญ่ปีนี้ · ไม่ได้เดินทาง/เข้าป่า",
 parts:S(
  B("ASCE.1 Take a history.",6,{tags:["hx"],
   ans:"<b>อาการ</b>: ไข้ <b>เริ่มเฉียบพลัน</b> สูง, <b>ปวดเมื่อยกล้ามเนื้อ</b> ปวดศีรษะ อ่อนเพลีย, ไอแห้ง เจ็บคอ น้ำมูก · <b>อาการรุนแรง/red flag</b>: เหนื่อยหอบ เจ็บหน้าอก ซึม สับสน ชัก ปัสสาวะออกน้อย ไข้ไม่ลง &gt;3 วันหรือดีขึ้นแล้วกลับเป็นใหม่ · <b>ผู้สัมผัส</b>: คนรอบตัวป่วยคล้ายกัน ช่วงระบาด · <b>กลุ่มเสี่ยงโรครุนแรง</b>: อายุ ≥65 หรือเด็กเล็ก, <b>ตั้งครรภ์</b>, โรคปอด/หัวใจ/ไต/ตับ/เบาหวาน, ภูมิคุ้มกันต่ำ, อ้วนมาก (BMI ≥40) · <b>วัคซีนไข้หวัดใหญ่</b>ปีนี้ · แยกโรคอื่นในไทย: <b>ไข้เลือดออก</b> (ปวดกระบอกตา จุดเลือด), scrub typhus/lepto (เข้าป่า ลุยน้ำ), COVID-19 · ยาที่ใช้ แพ้ยา",
   exp:"ไข้หวัดใหญ่ = ไข้ + อาการทางเดินหายใจ + <b>ปวดเมื่อยมาก เริ่มทันที</b> ต่างจากหวัดธรรมดาที่ไข้ต่ำ น้ำมูกเด่น · ต้องคัดกรองกลุ่มเสี่ยงเพราะเปลี่ยนการรักษา (ได้ยาต้านไวรัสแม้เกิน 48 ชม.)",
   rubric:"ได้ = อาการหลัก + red flag + ผู้สัมผัส + กลุ่มเสี่ยง + วัคซีน · บางส่วน = ขาดกลุ่มเสี่ยงหรือ red flag",
   pts:[H("อาการ",30),P("ไข้เฉียบพลัน ปวดเมื่อย ปวดศีรษะ","เฉียบพลัน","sudden","ปวดเมื่อย","myalg","ปวดหัว","ปวดศีรษะ"),P("ไอ เจ็บคอ น้ำมูก","ไอ","cough","เจ็บคอ","น้ำมูก"),
    H("Red flag",25),CR(P("เหนื่อยหอบ/เจ็บอก/ซึม/ไข้ไม่ลง","เหนื่อย","หอบ","dyspn","เจ็บอก","chest","ซึม","สับสน")),
    H("ผู้สัมผัส + กลุ่มเสี่ยง + วัคซีน",35),P("คนรอบตัวป่วย/ช่วงระบาด","คนรอบ","ที่ทำงาน","contact","ครอบครัว","สัมผัส"),CR(P("กลุ่มเสี่ยง: อายุ ตั้งครรภ์ โรคเรื้อรัง ภูมิต่ำ","ตั้งครรภ์","pregnan","โรคประจำตัว","underlying","เบาหวาน","ภูมิ","อายุ")),P("วัคซีนไข้หวัดใหญ่","วัคซีน","vaccin"),
    H("แยกโรค",10),P("ไข้เลือดออก/เข้าป่า/ลุยน้ำ/COVID","ไข้เลือดออก","dengue","ป่า","ลุยน้ำ","covid")]}),
  B("ASCE.2 Choose one investigation.",2,{tags:["lab"],
   ans:"<b>Nasopharyngeal swab for influenza A/B</b> — เลือก <b>RT-PCR / rapid molecular assay</b> (ไวกว่า rapid antigen test ที่ผลลบลวงได้มาก) · ถ้าในสถานีมีให้เลือกแค่ rapid influenza antigen ก็เลือกได้ แต่บอกข้อจำกัด",
   exp:"ผลตรวจไม่ควรทำให้การให้ยาในกลุ่มเสี่ยง/อาการรุนแรงช้า · rapid antigen ไว ~50–70% ผลลบไม่ได้ตัดโรค",
   pts:[CR(P("Nasopharyngeal swab influenza RT-PCR / rapid test","swab","rt.?pcr","pcr","rapid","influenza","nasopharyn"))]}),
  B("ASCE.3 Advise the patient.",4,{tags:["advice"],
   ans:"อธิบายว่าเป็น<b>ไข้หวัดใหญ่</b>จากไวรัส ส่วนใหญ่หายเองใน 5–7 วัน · <b>ยา</b>: paracetamol ลดไข้ (เลี่ยง aspirin ในเด็ก/วัยรุ่น — Reye), เช็ดตัว ดื่มน้ำ พักผ่อน · <b>ยาต้านไวรัส oseltamivir 75 mg วันละ 2 ครั้ง × 5 วัน</b> ให้ในกลุ่มเสี่ยง อาการรุนแรง หรือเริ่มป่วยไม่เกิน 48 ชม. · <b>ป้องกันการแพร่</b>: ใส่หน้ากาก ล้างมือ แยกของใช้ หยุดงาน/เรียนจนไข้ลงเอง ≥24 ชม. · <b>กลับมาทันที</b> ถ้าเหนื่อยหอบ เจ็บหน้าอก ซึม ไข้ไม่ลงเกิน 3 วัน หรือดีขึ้นแล้วกลับมาไข้ใหม่ (ปอดอักเสบแทรก) · <b>ฉีดวัคซีนไข้หวัดใหญ่ทุกปี</b> · ถามว่ามีอะไรสงสัยไหม",
   exp:"โครง advice ในสมุด (p21 GETPAQ): Greeting · Explain · Treatment · Prevent spreading · Another complication · Question",
   pts:[P("อธิบายโรค + การรักษาตามอาการ (paracetamol, น้ำ, พัก)","ไวรัส","virus","paracetamol","พาราเซตามอล","พัก","น้ำ"),P("Oseltamivir ในกลุ่มเสี่ยง/รุนแรง/≤48 ชม.","oseltamivir","tamiflu","ยาต้านไวรัส","antiviral"),CR(P("ป้องกันการแพร่: หน้ากาก ล้างมือ หยุดงาน","หน้ากาก","mask","ล้างมือ","หยุดงาน","แยก")),CR(P("อาการที่ต้องกลับมา","กลับมา","เหนื่อย","หอบ","red flag","ไข้ไม่ลง")),P("วัคซีนทุกปี","วัคซีน","vaccin")]})),
 interp:"ASCE influenza: ซักให้ครบกลุ่มเสี่ยง → ส่ง swab PCR → advice แบบ GETPAQ + oseltamivir ในกลุ่มเสี่ยง",
 summary:["Influenza: ไข้เฉียบพลัน + ปวดเมื่อยมาก","กลุ่มเสี่ยง (≥65 ปี ตั้งครรภ์ โรคเรื้อรัง ภูมิต่ำ) → oseltamivir แม้เกิน 48 ชม.","หยุดงานจนไข้ลงเอง ≥24 ชม. · วัคซีนทุกปี"]}),

/* ============================ p4 · OSCE 1–11 ============================ */
X({page:4,orig:"1",topic:"hx",ex:1,seen:"สถานีเดียวกับสมุด p10/p13 (ฐานซักประวัติผู้ป่วยจำลองชาย ปวดท้องร้าวทะลุหลัง — อ.สมบัติ)",title:"History — epigastric pain radiating to the back in a man who drinks alcohol: 3 differential diagnoses",
 stem:`A simulated male patient presents with abdominal pain.<br>1.1 Take a relevant history.<br>1.2 Give 3 differential diagnoses.`,
 gray:"1.1 ซักประวัติผู้ป่วยที่เกี่ยวข้อง (acute pancreatitis)\n1.2 differential diagnosis 3อย่าง",
 sp:"(จากสมุด p13) ชายปวดท้องใต้ลิ้นปี่ <b>ร้าวทะลุไปหลัง</b> <b>โน้มตัวไปข้างหน้าแล้วดีขึ้น</b> มีประวัติ<b>ดื่มสุรา</b> → สรุปเป็น acute pancreatitis [อ.สมบัติ] · (Claude เติม) คลื่นไส้อาเจียน ปวดต่อเนื่อง 8 ชม. ไม่มีไข้ ไม่มีตัวเหลือง ไม่เคยเป็นนิ่ว ไม่มีไขมันสูง ไม่ได้ใช้ยาใหม่",
 parts:S(
  B("1.1 Take a relevant history.",6,{tags:["hx"],key:KN(13)+" — a. ซักตาม LODCRAFT + risk factor: สุรา, นิ่ว + complication",
   ans:"<b>LODCRAFT</b>: Location ลิ้นปี่/กลางท้อง · Onset เฉียบพลัน · Duration ต่อเนื่องหลายชั่วโมง · Character ปวดตื้อแน่นรุนแรง · <b>Radiation ทะลุหลัง</b> · Associated คลื่นไส้อาเจียน ไข้ ตัวเหลือง · Factors <b>นั่งโน้มตัวไปหน้าดีขึ้น</b> นอนหงายแย่ลง หลังกินอาหารมัน/ดื่มสุรา · Timing · <b>Risk factor (สมุด)</b>: <b>ดื่มสุรา</b> (ปริมาณ ระยะเวลา ดื่มหนักก่อนปวด), <b>นิ่วในถุงน้ำดี</b> (เคยปวดใต้ชายโครงขวาหลังอาหารมัน) · อื่น ๆ: ไขมัน TG สูง, ยา (azathioprine, 6-MP, valproate, thiazide, estrogen ฯลฯ), เพิ่งส่อง ERCP, แคลเซียมสูง, อุบัติเหตุช่องท้อง · <b>Complication (สมุด)</b>: เหนื่อยหอบ ปัสสาวะออกน้อย หน้ามืด ท้องอืดมาก ไข้สูง (SIRS/organ failure, necrosis) · แยกโรค: เจ็บอก (MI), ปวดท้องเฉียบพลันทั้งท้อง (perforation), ปวดฉีกร้าวหลัง/ชีพจรไม่เท่ากัน (aortic dissection/AAA)",
   exp:"ตับอ่อนเป็น <b>retroperitoneal organ</b> → ปวดทะลุหลัง และโน้มตัวไปหน้าดีขึ้น (สมุด p13) · สาเหตุหลัก alcohol กับ gallstone ~40% เท่ากัน",
   rubric:"ได้ = LODCRAFT ครบ + risk factor สุรา/นิ่ว + ถามภาวะแทรกซ้อน · บางส่วน = ขาด risk factor",
   pts:[H("LODCRAFT",40),P("ตำแหน่ง ลิ้นปี่ + onset/duration","ลิ้นปี่","epigastr","onset","เริ่ม","นาน"),CR(P("ร้าวทะลุหลัง","หลัง","back","radiat","ร้าว")),P("โน้มตัวไปหน้าดีขึ้น / ปัจจัยกระตุ้น","โน้ม","lean","forward","อาหาร","ดีขึ้น"),P("คลื่นไส้ อาเจียน ไข้ ตัวเหลือง","คลื่นไส้","อาเจียน","vomit","ไข้","เหลือง"),
    H("Risk factor",40),CR(P("สุรา (ปริมาณ ระยะเวลา)","สุรา","เหล้า","alcohol","ดื่ม")),CR(P("นิ่วในถุงน้ำดี","นิ่ว","gallstone","ถุงน้ำดี")),P("TG สูง / ยา / ERCP / แคลเซียม","ไขมัน","triglycer","\\btg\\b","ยา","ercp","calcium","แคลเซียม"),
    H("Complication",20),P("เหนื่อย ปัสสาวะน้อย หน้ามืด (organ failure)","เหนื่อย","ปัสสาวะ","หน้ามืด","shock","organ","complication")]}),
  B("1.2 Give 3 differential diagnoses.",4,{tags:["hx"],key:KN(13)+" — b. Acute pancreatitis (Dx) · DDx: aortic dissection, AAA, PU (perforated)",
   ans:"Dx ที่นึกถึง: <b>Acute pancreatitis</b> (alcohol-induced) · DDx 3 ข้อ (สมุด): <b>Aortic dissection</b> · <b>Abdominal aortic aneurysm (rupture)</b> · <b>Peptic ulcer (perforation)</b> · อื่น ๆ ที่สมุดเขียนไว้ใน p10: <b>acute MI (inferior wall)</b>, acute cholecystitis/cholangitis, pneumothorax",
   exp:"DDx ที่ต้องไม่พลาดของปวดลิ้นปี่ร้าวหลัง = vascular (dissection, AAA) + perforation + MI → ต้องตรวจ EKG, troponin, lipase, CT",
   rubric:"ได้ = 3 ข้อสมเหตุสมผล (dissection, AAA, perforated PU, MI, cholecystitis)",
   pts:[G("DDx 3 ข้อ",3,P("Aortic dissection","dissect"),P("AAA","\\baaa\\b","aneurysm"),P("Perforated peptic ulcer","peptic","perforat","\\bpu\\b","ulcer"),P("Acute MI (inferior)","\\bmi\\b","myocard","infarct"),P("Acute cholecystitis/cholangitis","cholecyst","cholang","ถุงน้ำดี"),P("Acute pancreatitis (Dx หลัก)","pancreat"))]})),
 interp:"ปวดลิ้นปี่ทะลุหลัง โน้มตัวไปหน้าดีขึ้น + สุรา → acute pancreatitis · DDx: dissection, AAA, perforated PU",
 summary:["Dx AP: 2 ใน 3 (ปวดเข้าได้ · lipase/amylase >3×UNL · CT/MRI)","สาเหตุ: alcohol, gallstone (ALT >3×UNL ชี้นิ่ว), TG >1,000, post-ERCP, Ca สูง, ยา","รักษา: Ringer's lactate moderately aggressive, กินอาหารไขมันต่ำใน 24–48 ชม. (mild), ไม่ให้ antibiotic ป้องกัน"]}),

X({page:4,orig:"2",topic:"pe",ex:1,seen:"คล้าย MDCU75 RoA ข้อ 8 (ฟังเสียง wheeze ในหุ่น)",title:"Lung auscultation on a manikin — describe the abnormal sound and give differential diagnoses",
 stem:`Auscultate the chest of the manikin.<br>2.1 Describe the abnormal breath sound.<br>2.2 Give 3 differential diagnoses.<br>2.3 What is the most likely diagnosis?`,
 gray:"2. ฟังเสียงหุ่น (น่าจะasthma)\n2.1 อธิบายเสียงที่ผิดปกติ\n2.2 differential diagnosis 3 โรค\n2.3 โรคที่คิดถึงมากที่สุด",
 flag:"⚠ ผู้จดเดาว่า 'น่าจะ asthma' — เฉลยตามเสียง wheeze",
 sp:"หุ่น Harvey/หุ่นปอด: เปิดเสียง <b>expiratory polyphonic wheeze ทั้งสองข้าง</b> + prolonged expiratory phase",
 parts:S(
  B("2.1 Describe the abnormal breath sound.",3,{tags:["pe"],
   ans:"ฟังเป็นระบบ หน้า-หลัง เปรียบเทียบซ้าย-ขวา · รายงาน: <b>Bilateral expiratory polyphonic wheeze</b> (เสียงดนตรีต่อเนื่องหลายระดับเสียง) <b>with prolonged expiratory phase</b> · ไม่มี crepitation, ไม่มี pleural rub",
   exp:"Wheeze = continuous musical sound จากหลอดลมตีบ · polyphonic = หลายหลอดลมพร้อมกัน (asthma/COPD) · monophonic เฉพาะที่ = ก้อน/สิ่งแปลกปลอมอุด",
   pts:[CR(P("Wheeze (continuous musical)","wheez","หวีด","วี้ด")),P("Expiratory / prolonged expiration","expirat","หายใจออก","prolong"),P("Bilateral / polyphonic","bilateral","ทั้งสองข้าง","polyphon","diffuse")]}),
  B("2.2 Give 3 differential diagnoses.",3,{tags:["pe"],
   ans:"<b>Asthma (exacerbation)</b> · <b>COPD (exacerbation)</b> · <b>Acute heart failure (\"cardiac asthma\")</b> · อื่น ๆ: bronchiolitis/acute bronchitis, anaphylaxis, foreign body aspiration (monophonic เฉพาะที่), endobronchial tumor",
   pts:[G("DDx 3 ข้อ",3,P("Asthma","asthma","หอบหืด","หืด"),P("COPD","copd","emphysema","bronchitis"),P("Heart failure (cardiac asthma)","heart failure","\\bhf\\b","cardiac asthma","chf"),P("Anaphylaxis","anaphyla"),P("Foreign body / tumor","foreign","tumor","ก้อน"),P("Bronchiolitis/bronchitis","bronchiolit","bronchitis"))]}),
  B("2.3 What is the most likely diagnosis?",2,{tags:["pe"],
   ans:"<b>Asthma (acute exacerbation)</b> — ถ้ามีประวัติ บอกเป็น exacerbation และ trigger",
   exp:"สถานีเก่า (MDCU78 RoA ข้อ 2) เน้นว่าต้องบอก exacerbation/attack ไม่ใช่ asthma เฉย ๆ",
   pts:[CR(P("Asthma (exacerbation)","asthma","หืด"))]})),
 interp:"Bilateral expiratory polyphonic wheeze + prolonged expiration → asthma",
 summary:["Wheeze polyphonic ทั้งสองข้าง = asthma/COPD/cardiac asthma","Monophonic เฉพาะที่ = ก้อน/สิ่งแปลกปลอม","Silent chest = รุนแรงมาก"]}),

X({page:4,orig:"3",topic:"ekg",seen:"คล้าย MDCU78 RoD ข้อ 4, MDCU79 RoB ข้อ 15 (atrial flutter)",title:"EKG — read the tracing",imgNote:NOIMG+" · คาดว่าเป็น atrial flutter with 2:1 AV block (flutter wave รูปฟันเลื่อยใน II, III, aVF)",
 stem:`Read this EKG systematically and give your interpretation.`,
 gray:"3. อ่าน EKG (น่าจะ atrial flutter)",
 flag:"⚠ ไม่มีรูป EKG — เฉลยตามที่ผู้จดเดา (atrial flutter)",
 parts:S(
  B("3.1 Read the EKG.",6,{tags:["ekg"],
   ans:"อ่านเป็นระบบ: <b>Rate</b> ventricular ~150/min (ถ้า 2:1) · <b>Rhythm</b> regular · <b>P wave</b>: ไม่มี P ปกติ แต่มี <b>flutter (F) waves รูปฟันเลื่อย (sawtooth) ~300/min</b> เห็นชัดใน <b>II, III, aVF</b> (และ V1) · <b>AV conduction 2:1</b> (หรือ variable) · QRS แคบ · axis, interval, ST-T ตามรูป · <b>Interpretation: Atrial flutter with 2:1 AV block</b> (typical counterclockwise: F wave ลบใน inferior leads)",
   exp:"HR 150 ปกติเป๊ะ narrow regular → นึกถึง flutter 2:1 เสมอ · การรักษาเหมือน AF: rate control (BB/non-DHP CCB), anticoagulation ตาม CHA₂DS₂-VA (ESC 2024), unstable → synchronized cardioversion · ablation cavotricuspid isthmus ได้ผลดี",
   rubric:"ได้ = flutter waves + rate/conduction ratio + Dx · บางส่วน = บอก SVT/AF",
   pts:[P("Rate ~150, regular","150","rate","regular"),CR(P("Sawtooth flutter waves ~300/min (II, III, aVF)","sawtooth","ฟันเลื่อย","flutter wave","f wave","300")),P("2:1 AV conduction","2:1","conduction","block"),CR(P("Atrial flutter","flutter"))]})),
 interp:"Regular narrow complex ~150 + sawtooth F wave → atrial flutter 2:1",
 summary:["Atrial flutter: F wave 300/min, 2:1 → HR 150","Typical: sawtooth ลบใน II, III, aVF","Anticoagulation เหมือน AF"]}),

X({page:4,orig:"4",topic:"lab",seen:"คล้าย MDCU75 RoA ข้อ 12 (normal PT, prolonged aPTT)",title:"Coagulation — prolonged aPTT with normal PT: differential diagnosis and 3 investigations",
 stem:`A patient's coagulation tests show a prolonged aPTT and a normal PT.<br>4.1 Give the differential diagnoses.<br>4.2 Name 3 further investigations.`,
 gray:"4. APTT prolong PT ปกติ\n4.1 d/dx โรค\n4.2 ส่งตรวจ 3 อย่าง",
 parts:S(
  B("4.1 Give the differential diagnoses.",5,{tags:["lab"],
   ans:"PT ปกติ + aPTT ยาว = <b>intrinsic pathway</b> (VIII, IX, XI, XII) หรือสารยับยั้ง: <b>Hemophilia A/B</b> (factor VIII/IX deficiency) · <b>von Willebrand disease</b> · <b>Lupus anticoagulant / antiphospholipid</b> · <b>Heparin</b> (UFH หรือปนจากสาย) · acquired hemophilia (inhibitor ต่อ VIII) · factor XI/XII deficiency · <b>ไม่ใช่</b> vitamin K deficiency/warfarin/โรคตับ (PT ต้องยาวด้วย)",
   pts:[G("DDx",3,P("Hemophilia A/B","hemophilia","ฮีโมฟีเลีย","viii","ix"),P("von Willebrand disease","willebrand","vwd"),P("Lupus anticoagulant / APS","lupus","antiphospholipid","\\baps\\b"),P("Heparin","heparin"),P("Acquired inhibitor / factor XI–XII deficiency","inhibitor","acquired","factor xi","xii"))]}),
  B("4.2 Name 3 further investigations.",5,{tags:["lab"],
   ans:"(1) <b>Mixing study</b> (aPTT ผสม normal plasma 1:1 — แก้ได้ = factor deficiency, ไม่แก้ = inhibitor/LA/heparin) · (2) <b>Factor VIII, IX (XI, XII) assay</b> ± <b>vWF antigen / activity</b> · (3) <b>Lupus anticoagulant (dRVVT)</b> หรือ <b>thrombin time</b> (แยก heparin) · ร่วมกับ CBC/platelet",
   pts:[G("Investigation 3 ข้อ",3,P("Mixing study","mixing","1:1"),P("Factor VIII/IX assay","factor","assay","viii","ix"),P("vWF antigen/activity","vwf","ristocetin","willebrand"),P("Lupus anticoagulant / dRVVT","drvvt","lupus"),P("Thrombin time / anti-Xa","thrombin","anti.?xa"),P("CBC/platelet","cbc","platelet"))]})),
 interp:"PT ปกติ aPTT ยาว → mixing study เป็นก้าวแรก แล้วแยก factor deficiency vs inhibitor",
 summary:["PT = extrinsic (VII) · aPTT = intrinsic (VIII, IX, XI, XII)","Mixing แก้ได้ = deficiency · ไม่แก้ = inhibitor/LA/heparin"]}),

X({page:4,orig:"5",topic:"img",seen:"คล้าย MDCU77 RoD ข้อ 6, MDCU74 RoX ข้อ 13 (CXR lung mass)",title:"CXR — left upper lung mass: read systematically",imgNote:NOIMG+" · คาดว่าเป็นก้อนเดี่ยวที่ปอดซ้ายส่วนบน (left upper zone mass)",
 stem:`Read this chest X-ray systematically and give the most likely diagnosis.`,
 gray:"5. อ่าน chest xray (ก้อนปอดซ้ายบน)",
 flag:"⚠ ไม่มีรูป — เฉลยเรียง ABCDEFGHI ตามเกณฑ์ CXR Med MDCU (ผู้ใช้ 14 พ.ย. 2026); finding F ตามที่ผู้จดเล่า",
 parts:S(
  B("5.1 Read the chest X-ray.",8,{tags:["img"],
   ans:"<b>A</b> — PA upright, adequate exposure, no rotation, adequate inspiration (A6/P10), trachea midline · <b>B</b> — bones และ soft tissue: ดู<b>ซี่โครงถูกกัดกร่อน/lytic</b> ใกล้ก้อน (บอกว่าลุกลาม) · <b>C</b> — heart size ปกติ (CTR &lt; 0.5) · <b>D</b> — right hemidiaphragm สูงกว่าซ้าย, CP angles sharp · <b>E</b> — ไม่มี effusion/pneumothorax · <b>F</b> — <b>a solitary (round/lobulated) mass/opacity at the left upper zone</b> ~x cm, บอกขอบ (spiculated/ill-defined), cavitation, calcification · <b>G</b> — gastric bubble ใต้ diaphragm ซ้าย, aortic knob · <b>H</b> — hilum: ดู hilar lymphadenopathy · <b>I</b> — ไม่มีสาย/อุปกรณ์ · <b>Impression</b>: left upper lobe lung mass — <b>bronchogenic carcinoma</b> until proven otherwise (DDx: TB/tuberculoma, lung abscess, metastasis)",
   rubric:"เกณฑ์ ABCDEFGHI (Med Y4 MDCU) — ตรวจตามเนื้อหา ไม่สนลำดับ · F (ก้อนปอดซ้ายบน) ห้ามขาด",
   pts:[H("A — Assessment & Airway",25),P("Position PA/AP, upright","\\bpa\\b","\\bap\\b","upright","erect"),P("Exposure","exposure","penetrat"),P("Rotation","rotat"),P("Lung volume (A6, P9–11)","volume","inspirat","ribs?","ซี่"),P("Trachea midline","trachea","midline"),
    H("B — Bones & soft tissue",3),P("Bones/soft tissue (rib destruction)","bone","rib","soft tissue","กระดูก"),
    H("C — Cardiac",12),P("Heart size / CTR","ctr","heart size","cardiac"),
    H("D — Diaphragm",20),P("Diaphragm Rt > Lt","diaphragm","กระบังลม"),P("CP angles sharp","costophrenic","cp angle"),
    H("E — Effusions",3),P("No effusion/pneumothorax","effusion","pneumothorax","pleura"),
    H("F — Fields of lungs (finding)",33),CR(P("Mass/opacity at left upper zone (size, margin)","mass","nodule","opacity","ก้อน")),P("Location: left upper zone/lobe","left upper","lul","ซ้ายบน","upper zone"),
    H("G/H/I",4),P("Gastric bubble/aorta","gastric","aort"),P("Hila","hil")]}),
  B("5.2 Give the most likely diagnosis.",2,{tags:["img"],
   ans:"<b>Bronchogenic carcinoma (lung cancer), left upper lobe</b> — DDx: pulmonary TB (tuberculoma), lung abscess, metastasis · ต่อด้วย CT chest with contrast + tissue diagnosis",
   pts:[CR(P("Lung cancer / bronchogenic carcinoma","cancer","carcinoma","malignan","มะเร็ง","ca lung")),P("DDx TB / abscess / metastasis","tb","tubercul","abscess","metast")]})),
 interp:"ก้อนเดี่ยวปอดซ้ายบน → มะเร็งปอดจนกว่าจะพิสูจน์ได้ว่าไม่ใช่ · อ่านเรียง ABCDEFGHI",
 summary:["อ่าน CXR: A→I ตามเกณฑ์ Med MDCU","ก้อนปอด: บอกตำแหน่ง ขนาด ขอบ cavity calcification + rib/hilum","Mass > 3 cm = mass (≤ 3 cm = nodule)"]}),

X({page:4,orig:"6",topic:"micro",seen:"คล้าย MDCU78 RoA ข้อ 6, MDCU76 RoA ข้อ 10 (Gram stain หนองฝีในตับ)",title:"Gram stain — pus from an intra-abdominal collection: describe, organism and antibiotic",imgNote:NOIMG+" · คาดว่าเป็น Gram-positive cocci in clusters + PMN จำนวนมาก",
 stem:`A patient with an intra-abdominal abscess had pus aspirated. The Gram stain is shown.<br>6.1 Describe what you see.<br>6.2 What is the most likely organism?<br>6.3 Choose an appropriate antibiotic.`,
 gray:"6. ให้ประวัติหนองในท้องมา แล้วให้ดู Gram stain (น่าจะ S.aureus)\n6.1 อธิบายว่าเห็นอะไร\n6.2 เชื้อที่คิดถึงมากที่สุด\n6.3 เลือก ATB ที่เหมาะสม",
 flag:"⚠ ไม่มีรูป — เฉลยตามที่ผู้จดเดา (S. aureus)",
 parts:S(
  B("6.1 Describe what you see.",3,{tags:["micro"],
   ans:"<b>Numerous polymorphonuclear leukocytes (PMN)</b> with <b>Gram-positive cocci in clusters</b> (ติดสีม่วง กลุ่มเหมือนพวงองุ่น) ทั้งนอกและในเซลล์",
   pts:[CR(P("Gram-positive cocci","gram.?positive","gpc","แกรมบวก")),CR(P("In clusters","cluster","พวง","องุ่น")),P("PMN จำนวนมาก","pmn","neutrophil","wbc","polymorph")]}),
  B("6.2 What is the most likely organism?",2,{tags:["micro"],
   ans:"<b>Staphylococcus aureus</b>",
   pts:[CR(P("Staphylococcus aureus","aureus","staph"))]}),
  B("6.3 Choose an appropriate antibiotic.",3,{tags:["micro"],
   ans:"<b>Drainage</b> (percutaneous/surgical) ร่วมกับ <b>anti-staphylococcal β-lactam</b>: <b>cloxacillin 2 g IV q4h</b> หรือ <b>cefazolin 2 g IV q8h</b> (MSSA) · ถ้าเสี่ยง/ยืนยัน <b>MRSA → vancomycin</b> · ปรับตาม culture · หา bacteremia (hemoculture) และแหล่งที่มา",
   exp:"Liver abscess ในไทยส่วนใหญ่ Klebsiella pneumoniae (GNR) — ถ้ารูปเป็น GPC in clusters จึงตอบ S. aureus · ระยะเวลารวม ~4–6 สัปดาห์ตามการระบาย",
   pts:[CR(P("Cloxacillin / cefazolin (MSSA)","cloxacillin","cefazolin","oxacillin","dicloxacillin")),P("Vancomycin ถ้า MRSA","vancomycin","mrsa"),P("Drainage","drain","ระบาย")]})),
 interp:"GPC in clusters + PMN → S. aureus → drainage + cloxacillin/cefazolin (MRSA: vancomycin)",
 summary:["GPC cluster = Staph · chain/pair = Strep","MSSA: cloxacillin/cefazolin · MRSA: vancomycin","Abscess ต้องระบายเสมอ"]}),

X({page:4,orig:"7",topic:"advice",ex:1,seen:"คล้าย MDCU76 RoA ข้อ 5, MDCU75 RoA ข้อ 4 (advice ลดน้ำหนัก)",title:"Advice — a patient who wants to lose weight",
 stem:`A patient comes to consult you about losing weight. Give appropriate advice.`,
 gray:"7. Advice ผู้ป่วยมาปรึกษาเรื่องลดน้ำหนัก",
 sp:"(Claude ร่าง) ชาย 40 ปี BMI 31 kg/m² รอบเอว 104 cm ทำงานนั่งโต๊ะ ชอบดื่มชานมไข่มุกวันละแก้ว กินข้าวมันไก่บ่อย เคยลดน้ำหนักเองโดยอดข้าวเย็นแล้วกลับมาอ้วน ไม่ได้ออกกำลังกาย · ไม่มีโรคประจำตัว",
 parts:S(
  B("7.1 Give weight-reduction advice.",10,{tags:["advice"],key:KN(22)+" — ไม่พูดว่าอ้วน ใช้ 'ภาวะน้ำหนักตัวเกิน' · ถามว่าเคยลดมาก่อนไหม / ทราบปัญหาไหม / เคยติดปัญหาอะไร → ตั้งเป้าและวางแผนด้วยกัน · เป้าหมายแรกลด 5% · ทำอาหารเอง คำนวณ cal · แอโรบิกปานกลาง 30 นาที/วัน · ทำให้สม่ำเสมอ",
   ans:"<b>เปิด</b>: แนะนำตัว ถามชื่อ · <b>ไม่ใช้คำว่า 'อ้วน'</b> ใช้ <b>'ภาวะน้ำหนักตัวเกิน'</b> (สมุด) · <b>ประเมินความพร้อม</b>: เคยลดน้ำหนักมาก่อนไหม — ถ้าไม่เคย ถามว่าทราบปัญหาของน้ำหนักเกินไหม · ถ้าเคย ให้เล่าว่าติดปัญหาอะไร เพื่อเอาข้อมูลมาตั้งเป้าและวางแผนด้วยกัน · ปกติชอบทานอะไร · <b>อธิบายผลเสีย</b>: เบาหวาน ความดัน ไขมัน ข้อเข่าเสื่อม นอนกรน หัวใจ · <b>ตั้งเป้า</b>: <b>'หมอว่าเป้าหมายแรก ลด 5% ดีไหมครับ'</b> (5–10% ใน 3–6 เดือน ~0.5–1 กก./สัปดาห์) · <b>อาหาร</b>: ลดพลังงาน 500–1,000 kcal/วัน (หญิง ~1,200 ชาย ~1,500 kcal), <b>ทำอาหารเองจะคำนวณ cal ได้ถูก</b>, ลดขนม/เครื่องดื่มหวาน แต่<b>กินให้ครบ 5 หมู่</b>, คุมปริมาณต่อมื้อ ใช้จานเล็ก กินช้า ๆ ไม่กินจุบจิบ · <b>ออกกำลังกาย</b>: <b>แอโรบิกปานกลาง 30 นาที/วัน</b> ≥5 วัน/สัปดาห์ (≥150 นาที/สัปดาห์) เลือกกิจกรรมที่ทำได้จริงและสม่ำเสมอ + เพิ่มการเคลื่อนไหวในชีวิตประจำวัน · <b>พฤติกรรม</b>: <b>จดบันทึกอาหาร/น้ำหนัก</b> ชั่งน้ำหนักสม่ำเสมอ · ระวัง <b>weight regain/yo-yo</b> — ทำต่อเนื่อง ไม่ต้องกลับไปเริ่มใหม่ · นัดติดตาม · ถามมีอะไรสงสัยไหม",
   exp:"สมุด p22 ใช้ handout 'Obesity and overweight counselling' (11 ขั้น) · ADA Standards of Care 2026: ลด ≥5% ได้ประโยชน์ทาง metabolic · คนเอเชียใช้ BMI ≥25 = อ้วน, 23–24.9 = น้ำหนักเกิน · ยา (GLP-1 RA ฯลฯ) พิจารณาเมื่อ lifestyle ไม่พอ",
   rubric:"ได้ = ภาษาไม่ตีตรา + ประเมินประสบการณ์เดิม + เป้า 5–10% + อาหาร + ออกกำลังกาย + ติดตาม · บางส่วน = ให้ข้อมูลทางเดียวไม่ตั้งเป้าร่วมกัน",
   pts:[H("เปิด + ประเมิน",25),CR(P("ใช้คำว่า 'ภาวะน้ำหนักตัวเกิน' ไม่ใช่ 'อ้วน'","น้ำหนักตัวเกิน","น้ำหนักเกิน","overweight")),P("เคยลดน้ำหนักไหม / ติดปัญหาอะไร / ชอบทานอะไร","เคยลด","ปัญหา","ชอบทาน","เคย"),
    H("เป้าหมาย",20),CR(P("เป้าแรก ลด 5–10%","5 ?%","5-10","10 ?%","เป้า")),
    H("อาหาร",25),P("ลดพลังงาน 500–1,000 kcal / คุมปริมาณ","500","1,?000","kcal","แคลอรี","cal","ปริมาณ"),P("ลดหวาน ขนม แต่ครบ 5 หมู่ / ทำอาหารเอง","หวาน","ขนม","5 หมู่","ทำอาหารเอง"),
    H("ออกกำลังกาย + พฤติกรรม",30),CR(P("แอโรบิกปานกลาง 30 นาที/วัน (≥150 นาที/สัปดาห์)","30 ?นาที","150","แอโรบิก","aerobic","ออกกำลัง")),P("จดบันทึก ชั่งน้ำหนัก / weight regain / นัดติดตาม","จด","บันทึก","ชั่ง","regain","โยโย่","นัด","ติดตาม")]})),
 interp:"Advice ลดน้ำหนัก: ภาษาไม่ตีตรา → ประเมินความพร้อม → ตั้งเป้า 5% ร่วมกัน → อาหาร + แอโรบิก 30 นาที/วัน + จดบันทึก + ติดตาม",
 summary:["ไม่พูดว่าอ้วน — 'ภาวะน้ำหนักตัวเกิน'","เป้าแรก 5% · 0.5–1 กก./สัปดาห์","ขาดพลังงาน 500–1,000 kcal/วัน · ≥150 นาที/สัปดาห์"]}),

X({page:4,orig:"8",topic:"skin",seen:"สถานี herpes zoster เหมือน skin ปีอื่น (เช่น MDCU73 RoD)",title:"Skin lesion — rash on the leg with a burning sensation",imgNote:NOIMG+" · ผื่นแห้ง ๆ (น่าจะระยะ crust) เรียงตาม dermatome ข้างเดียวที่ขา",
 stem:`A patient has a rash on the leg with a burning sensation. The lesion is shown.<br>8.1 Name one bedside investigation.<br>8.2 What do you expect to see from that test?<br>8.3 Diagnosis.<br>8.4 Name 3 complications.<br>8.5 Give the treatment in detail.`,
 gray:"8. ผื่นแห้งๆที่ขา มี burning sensation (เพื่อนบอกตอบ HZV)\n8.1 ส่งตรวจ bedside 1 อย่าง\n8.2 คิดว่าจะเห็นอะไรจากที่ส่ง\n8.3 diagnosis\n8.4 complication 3 ข้อ\n8.5 ยาที่ใช้อย่างละเอียด",
 flag:"⚠ ผู้จดไม่แน่ใจ (เพื่อนบอกว่าตอบ HZV) — เฉลยตาม herpes zoster · คำบรรยาย/การรักษาใช้เวอร์ชันหลักของผู้ใช้",
 parts:S(
  B("8.1 Name one bedside investigation.",2,{tags:["skin"],
   ans:"<b>Tzanck smear</b> (ขูดฐานตุ่มน้ำ ย้อม Giemsa/Wright) · (ยืนยันจำเพาะ: VZV PCR/DFA จากตุ่มน้ำ — ไม่ใช่ bedside)",
   pts:[CR(P("Tzanck smear","tzanck","ซาง"))]}),
  B("8.2 What do you expect to see?",2,{tags:["skin"],
   ans:"<b>Multinucleated giant cells</b> (ภาวะ nuclear molding, margination of chromatin) ± intranuclear inclusion — แยก HSV กับ VZV ไม่ได้",
   pts:[CR(P("Multinucleated giant cells","multinucleat","giant cell"))]}),
  B("8.3 Diagnosis.",2,{tags:["skin"],key:SK+" — Herpes zoster: Groups of multistage vesicular lesions on erythematous base appearing at (right) unilateral dermatome",
   ans:"<b>Herpes zoster</b> (shingles) ของ dermatome ที่ขา (lumbosacral) · คำบรรยายเวอร์ชันหลัก: <b>Groups of multistage vesicular lesions on erythematous base appearing at unilateral dermatome</b> (ผื่นแห้ง = ระยะตกสะเก็ด crust)",
   pts:[CR(P("Herpes zoster / shingles","zoster","shingle","งูสวัด","vzv","hzv"))]}),
  B("8.4 Name 3 complications.",3,{tags:["skin"],key:SK+" — {ipsilateral facial paralysis, otalgia, painful vesicles on the auricle} (ใช้กับ zoster บริเวณหน้า/หู)",
   ans:"<b>Postherpetic neuralgia</b> (พบบ่อยสุด โดยเฉพาะอายุมาก) · <b>secondary bacterial infection</b> · <b>disseminated zoster</b> (ภูมิต่ำ) · <b>motor paresis</b> ของ segment นั้น (ขา: อ่อนแรง/ปัสสาวะผิดปกติถ้า sacral) · ถ้าเป็นที่หน้า: <b>HZ ophthalmicus</b>, <b>Ramsay Hunt</b> (ipsilateral facial paralysis, otalgia, painful vesicles on the auricle — เวอร์ชันหลัก)",
   pts:[G("Complications 3 ข้อ",3,P("Postherpetic neuralgia","postherpetic","\\bphn\\b","ปวดหลัง"),P("Secondary bacterial infection","bacteri","secondary","ติดเชื้อแทรก"),P("Disseminated zoster","dissemin","แพร่กระจาย"),P("Motor paresis / bladder dysfunction","motor","paresis","อ่อนแรง","bladder"),P("Ramsay Hunt / facial paralysis / otalgia","ramsay","facial","otalgia","auricle"),P("HZ ophthalmicus","ophthalm","ตา"))]}),
  B("8.5 Give the treatment in detail.",3,{tags:["skin"],key:SK+" — acyclovir 800 mg 1 tab po 5 times daily for 7 days",
   ans:"<b>Acyclovir 800 mg 1 tab po 5 times daily for 7 days</b> (เวอร์ชันหลัก — เริ่มภายใน 72 ชม. หรือยังมีตุ่มใหม่) · ทางเลือก: valacyclovir 1 g po tid × 7 วัน · <b>ปวด</b>: paracetamol/NSAID ± gabapentin/pregabalin · ทำความสะอาดแผล · ไม่ใกล้ชิดคนที่ยังไม่เคยเป็นอีสุกอีใส/หญิงตั้งครรภ์/คนภูมิต่ำจนตกสะเก็ด · ป้องกัน: วัคซีน recombinant zoster (RZV) อายุ ≥50 ปี",
   pts:[CR(P("Acyclovir 800 mg 5 times/day 7 days","acyclovir","800","5 ?times","5 ครั้ง")),P("ทางเลือก valacyclovir","valacyclovir"),P("ยาแก้ปวด / gabapentin","paracetamol","nsaid","gabapentin","pregabalin","แก้ปวด")]})),
 interp:"ผื่นตาม dermatome ข้างเดียว แสบร้อน → herpes zoster · Tzanck: multinucleated giant cell · acyclovir 800 mg 5×/วัน 7 วัน",
 summary:["HZ: grouped multistage vesicles on erythematous base, unilateral dermatome","Tzanck → multinucleated giant cells","Acyclovir 800 mg 5×/วัน × 7 วัน · PHN = complication หลัก"]}),

X({page:4,orig:"9",topic:"micro",seen:"คล้าย MDCU78 RoA ข้อ 7 (urine sediment — patient with a rash), MDCU74 RoX ข้อ 14",title:"Urine sediment — edema, oliguria and a rash on the legs",imgNote:NOIMG+" · คาดว่าเป็น RBC cast",
 stem:`A patient presents with edema, decreased urine output and a rash on the legs. The urine sediment is shown.<br>9.1 What do you see?<br>9.2 Give 2 differential diagnoses.`,
 gray:"9. ให้ประวัติ บวม+ ฉี่ออกน้อย มีผื่นที่ขา + ให้รูป urine มา\n9.1 เห็นอะไรจากรูป (น่าจะ rbc cast)\n9.2 d/dx 2 โรค",
 parts:S(
  B("9.1 What do you see?",3,{tags:["micro"],
   ans:"<b>RBC cast</b> (เม็ดเลือดแดงอัดตัวในแม่พิมพ์ทรงกระบอก) ± dysmorphic RBC → บ่งชี้ <b>glomerulonephritis</b> (nephritic syndrome)",
   pts:[CR(P("RBC cast","rbc cast","red (blood )?cell cast","red cell")),P("บ่งชี้ glomerulonephritis","glomerul","nephritic","\\bgn\\b")]}),
  B("9.2 Give 2 differential diagnoses.",4,{tags:["micro"],
   ans:"Nephritic syndrome ร่วมกับผื่นที่ขา: (1) <b>IgA vasculitis (Henoch–Schönlein purpura) nephritis</b> — palpable purpura ที่ขา/ก้น ปวดท้อง ปวดข้อ (2) <b>Lupus nephritis (SLE)</b> · อื่น ๆ: cryoglobulinemic GN (HCV), ANCA-associated vasculitis, infection-related/post-streptococcal GN (impetigo ที่ขา)",
   pts:[G("DDx 2 ข้อ",2,P("IgA vasculitis / HSP nephritis","iga","henoch","hsp","schonlein","schönlein"),P("Lupus nephritis / SLE","lupus","\\bsle\\b"),P("Cryoglobulinemia (HCV)","cryoglob"),P("ANCA vasculitis","anca","vasculitis","granulomatosis","polyangiitis"),P("Post-infectious / PSGN","post.?strep","psgn","post.?infect","impetigo"))]})),
 interp:"Edema + oliguria + ผื่นขา + RBC cast → GN จาก vasculitis (HSP) หรือ SLE",
 summary:["RBC cast = glomerular bleeding","Nephritic: hematuria, HT, edema, oliguria, ↑Cr","ผื่น palpable purpura ขา = IgA vasculitis"]}),

X({page:4,orig:"10",topic:"lab",seen:"คล้าย MDCU75 RoB ข้อ 7, MDCU77 RoB ข้อ 10 (Hb typing คู่สามีภรรยา)",title:"Hb typing — father and mother: interpret and the risk of thalassemia in the child",
 stem:`Hemoglobin typing of a couple:<br>Father: HbA 96%, HbA2 4%<br>Mother: HbA 75%, HbE 25%<br>10.1 Interpret the Hb typing of each parent.<br>10.2 What is the chance that their child will have thalassemia disease, and of which type?`,
 gray:"10. Thalassemia ให้ผล Hb typing\nพ่อ HBA 96% HBA2 4 %\nแม่ HBA 75% HBE 25%\n10.1 จงแปลผล Hb typing พ่อแม่\n10.2 หาโอกาสลูกเป็น thalassemia และเป็นแบบใด",
 parts:S(
  B("10.1 Interpret the Hb typing of each parent.",4,{tags:["lab"],
   ans:"<b>พ่อ</b>: A2A, <b>HbA2 4% (&gt;3.5%)</b> → <b>β-thalassemia trait</b> (heterozygous β-thal) · <b>แม่</b>: EA, HbE 25% → <b>HbE trait</b> (heterozygous HbE) · ทั้งสองไม่สามารถตัด α-thalassemia 1 trait ได้จาก Hb typing — ต้องตรวจ DNA (α-thal 1, SEA deletion)",
   exp:"HbE trait มัก HbE 25–30% (ถ้า &lt;25% นึกถึง HbE ร่วม α-thal) · HbA2 3.5–8% = β-thal trait",
   pts:[CR(P("พ่อ = β-thalassemia trait (HbA2 > 3.5%)","β.?thal","beta.?thal","b.?thal")),CR(P("แม่ = HbE trait","hbe trait","hb ?e trait","heterozygous hb ?e","e trait"))]}),
  B("10.2 Chance of thalassemia disease in the child and its type.",4,{tags:["lab"],
   ans:"ลูกแต่ละครรภ์: <b>β-thalassemia/HbE disease = 1/4 (25%)</b> · β-thal trait 1/4 · HbE trait 1/4 · ปกติ 1/4 · β-thal/HbE disease = <b>โรคธาลัสซีเมียชนิดรุนแรงปานกลาง–รุนแรง</b> (เป็นคู่เสี่ยงที่ต้องให้คำปรึกษาและเสนอ prenatal diagnosis)",
   pts:[CR(P("25% (1 ใน 4)","25","1/4","1 ใน 4")),CR(P("β-thalassemia/HbE disease","β.?thal.*e","beta.?thal.*e","hbe disease","thal.?/ ?hb ?e","e.?beta"))]})),
 interp:"พ่อ β-thal trait + แม่ HbE trait → ลูก β-thal/HbE disease 25% (คู่เสี่ยง)",
 summary:["HbA2 > 3.5% = β-thal trait","HbE 25–30% = HbE trait","β-thal trait × HbE trait → β-thal/HbE 1/4"]}),

X({page:4,orig:"11",topic:"img",title:"Parathyroid subtraction scan — hypercalcemia with hypophosphatemia",imgNote:NOIMG+" · focal uptake ค้างอยู่ที่ตำแหน่ง left inferior parathyroid",
 stem:`A patient has a high serum calcium and a low serum phosphate. A parathyroid subtraction scan shows increased uptake at the left lower pole.<br>11.1 Describe the image.<br>11.2 Diagnosis.<br>11.3 How would you treat?`,
 gray:"11. Parathyroid subtraction scan\n(มี uptake เยอะที่lobe ล่างซ้าย) Ca สูง Po4 ต่ำ\n11.1 อธิบายภาพที่เห็น\n11.2 diagnosis\n11.3 รักษายังไง",
 parts:S(
  B("11.1 Describe the image.",3,{tags:["img"],
   ans:"Tc-99m sestamibi (subtraction กับ thyroid scan Tc-99m pertechnetate/I-123): <b>focal persistent (retained) uptake at the left inferior pole/below the left thyroid lobe</b> ที่เหลืออยู่หลังลบภาพ thyroid · ต่อมอื่นไม่เห็น",
   pts:[CR(P("Focal increased/persistent uptake","focal","uptake","persist","retain")),CR(P("Left inferior (lower) position","left","ซ้าย","inferior","lower","ล่าง")),P("Sestamibi / subtraction","sestamibi","mibi","subtract")]}),
  B("11.2 Diagnosis.",2,{tags:["img"],
   ans:"<b>Primary hyperparathyroidism from a left inferior parathyroid adenoma</b> (Ca สูง + PO₄ ต่ำ + PTH สูง/ไม่ต่ำ)",
   pts:[CR(P("Primary hyperparathyroidism","primary hyperparathyroid","hyperparathyroid")),P("Parathyroid adenoma (left inferior)","adenoma")]}),
  B("11.3 How would you treat?",3,{tags:["img"],
   ans:"<b>Parathyroidectomy</b> — focused (minimally invasive) excision ของ adenoma ซ้ายล่าง + intraoperative PTH · ข้อบ่งชี้ (Fifth International Workshop 2022): มีอาการ, Ca &gt;1 mg/dL เหนือ ULN, osteoporosis (T ≤ −2.5)/vertebral fracture, eGFR &lt;60, hypercalciuria/นิ่วไต, อายุ &lt;50 · ระหว่างรอ: ดื่มน้ำ, หลีกเลี่ยง thiazide/lithium · ไม่ผ่าตัด: cinacalcet, bisphosphonate · หลังผ่าตัดระวัง <b>hungry bone syndrome</b>/hypocalcemia",
   pts:[CR(P("Parathyroidectomy","parathyroidectom","ผ่าตัด","excision","surgery")),P("ข้อบ่งชี้ผ่าตัด / medical (cinacalcet, bisphosphonate)","cinacalcet","bisphosph","indication","ข้อบ่งชี้")]})),
 interp:"Ca สูง PO₄ ต่ำ + focal sestamibi uptake ซ้ายล่าง → parathyroid adenoma → parathyroidectomy",
 summary:["Primary HPT: Ca ↑ PO₄ ↓ PTH ↑","Sestamibi = localization (ไม่ใช่ diagnosis)","รักษาหายขาด = parathyroidectomy"]}),

/* ============================ p5 · XX ============================ */
X({page:5,orig:"XX-CT",topic:"img",img:"moxx_ct",seen:"คล้ายสถานี CT brain ปีอื่น (เช่น MDCU75 RoB ข้อ 13 — describe, diagnose, most likely cause)",title:"CT brain — describe and give the etiology",
 stem:`Describe this non-contrast CT brain and give the most likely etiology.`,
 gray:"XX.\nบรรยาย CT\nบอก etiology",
 parts:S(
  B("XX.1 Describe the CT.",5,{tags:["img"],
   ans:"Non-contrast CT brain, axial, level ของ basal ganglia/thalamus: <b>a well-defined ovoid hyperdense lesion at the left thalamus</b> (ขนาด ~2 cm) with <b>thin perilesional hypodense rim (edema)</b> · กด third ventricle/ventricle ข้างซ้ายเล็กน้อย · no significant midline shift · ไม่เห็น intraventricular extension ชัด · ไม่มี hydrocephalus · skull ปกติ · <b>Impression: acute left thalamic intracerebral hemorrhage</b>",
   exp:"ข้างซ้ายของภาพ = ข้างขวาของผู้ป่วย (radiological convention) — ก้อนอยู่ฝั่งขวาของภาพ = <b>left thalamus</b> · บรรยาย: ชนิด CT, density, ตำแหน่ง, ขนาด/ปริมาตร (ABC/2), edema, mass effect/shift, IVH, hydrocephalus",
   rubric:"ได้ = hyperdense + ตำแหน่ง left thalamus + mass effect/IVH + Dx ICH",
   pts:[P("Non-contrast CT, axial","non.?contrast","plain","axial"),CR(P("Hyperdense lesion","hyperdens","high density","ขาว")),CR(P("Left thalamus","thalam","left","ซ้าย","deep","basal")),P("Perilesional edema / mass effect / no IVH / no shift","edema","mass effect","shift","ivh","ventric"),CR(P("Intracerebral hemorrhage","hemorrhage","\\bich\\b","bleed","เลือดออก"))]}),
  B("XX.2 Give the etiology.",3,{tags:["img"],
   ans:"<b>Hypertensive intracerebral hemorrhage</b> (hypertensive arteriolosclerosis — ruptured lenticulostriate/thalamoperforating arteries; deep location: putamen > thalamus > pons > cerebellum) · DDx ถ้าผู้ป่วยอายุน้อย/ไม่มี HT: AVM/cavernoma, coagulopathy/anticoagulant, sympathomimetic drugs (amphetamine, cocaine)",
   pts:[CR(P("Hypertension (hypertensive ICH)","hypertens","ความดัน","\\bht\\b")),P("Other: AVM / coagulopathy / anticoagulant / drug","avm","malformation","coagulopath","anticoag","warfarin","amphetamine","cocaine")]})),
 interp:"Hyperdense deep lesion ที่ left thalamus → hypertensive ICH",
 summary:["Deep ICH (putamen, thalamus, pons, cerebellum) = hypertensive","Lobar ICH ในผู้สูงอายุ = cerebral amyloid angiopathy","Volume ≈ ABC/2"]}),

X({page:5,orig:"XX-BP",topic:"proc",ex:1,proc:1,seen:"สถานีเดียวกับ MDCU75 RoA ข้อ 7, MDCU76 RoC ข้อ 1 (วัดความดันผู้ป่วยนั่งไขว่ห้าง)",title:"Procedure — prepare and measure blood pressure (patient sitting with legs crossed, small and large cuffs on the table)",
 stem:`A patient is sitting with the legs crossed. Cuffs of different sizes are on the table.<br>1. How do you prepare the patient before measuring blood pressure?<br>2. Measure the blood pressure and explain each step as you go.`,
 gray:"XX.\n-เตรียมตัวก่อนวัดความดันยังไง\n-วัดความดันและอธิบายแต่ละขั้นตอนไปด้วย\n(คนไข้นั่งยกขาอยู่ตอนเริ่ม, บนโต๊ะมีแบบ cuffใหญ่, เล็ก)",
 sp:"ผู้ป่วยจำลองนั่ง<b>ไขว่ห้าง (ยกขา)</b> · บนโต๊ะมี cuff <b>ขนาดใหญ่และเล็ก</b> ให้เลือก · ค่า BP เมื่อวัดถูกต้อง 132/84 mmHg",
 parts:S(
  B("XX.1 Prepare the patient.",4,{tags:["proc"],key:KN(23)+" — BP↑ = นั่งพัก วัดซ้ำ (ลายมือในหน้า HT advice)",
   ans:"แนะนำตัว ยืนยันตัวผู้ป่วย อธิบายและขออนุญาต · ถาม<b>งดบุหรี่ กาแฟ ออกกำลังกาย ≥30 นาที</b> และ<b>ปัสสาวะ</b>ก่อน · <b>แก้ท่า: เอาขาลง ไม่ไขว่ห้าง เท้าวางราบ</b> (ไขว่ห้างทำให้ SBP สูงขึ้น ~2–8 mmHg) · <b>หลังพิงพนัก</b> · <b>แขนวางบนโต๊ะ ระดับหัวใจ</b> · ถอด/พับแขนเสื้อไม่ให้รัด · <b>นั่งพักเงียบ ๆ 5 นาที</b> ไม่คุยระหว่างวัด",
   pts:[CR(P("แก้ไขว่ห้าง เท้าราบ","ไขว่ห้าง","ยกขา","เท้าราบ","uncross","feet flat","เอาขาลง")),P("หลังพิง แขนระดับหัวใจ","พิง","back","ระดับหัวใจ","heart level"),CR(P("พัก 5 นาที ไม่พูด","พัก","5 ?นาที","rest","ไม่พูด")),P("งดบุหรี่/กาแฟ/ออกกำลัง 30 นาที + ปัสสาวะ","บุหรี่","กาแฟ","caffeine","ปัสสาวะ","30")]}),
  B("XX.2 Measure and explain each step.",6,{tags:["proc"],
   ans:"<b>เลือก cuff ให้พอดี</b>: วัดรอบต้นแขน — bladder ยาว 75–100% และกว้าง ~40% ของรอบแขน (cuff เล็กเกิน → ค่าสูงเกินจริง, ใหญ่เกิน → ต่ำเกินจริง) · พันต้นแขนเปลือย ขอบล่างเหนือข้อพับ 2–3 cm ให้ bladder อยู่บน brachial artery · <b>Palpatory method</b>: คลำ radial pulse บีบลมจนชีพจรหาย = SBP คร่าว ๆ ปล่อยลมหมด · วาง stethoscope บน brachial artery · บีบลมเกิน SBP คร่าว ๆ 20–30 mmHg · <b>ปล่อยลม 2–3 mmHg/วินาที</b> · <b>SBP = Korotkoff I</b> (เสียงแรก) · <b>DBP = Korotkoff V</b> (เสียงหาย) · <b>วัด ≥2 ครั้ง ห่าง 1–2 นาที</b> เฉลี่ย · ครั้งแรกวัดทั้งสองแขน ใช้แขนที่สูงกว่า · <b>บอกค่าให้ผู้ป่วย</b> + แขน + ท่า · อธิบายแต่ละขั้นตอนให้ผู้ป่วยฟังระหว่างทำ",
   exp:"Thai HT guideline 2024 / AHA 2025: วินิจฉัยใช้ค่าเฉลี่ย ≥2 ครั้งใน ≥2 visit และยืนยันด้วย HBPM/ABPM",
   pts:[H("Cuff",25),CR(P("เลือก cuff ตามรอบแขน (เล็กเกิน → สูงเกินจริง)","cuff","รอบแขน","ขนาด","size","bladder")),
    H("วัด",55),CR(P("Palpatory method ก่อน","palpat","คลำ","radial")),P("บีบเกิน 20–30, ปล่อย 2–3 mmHg/s","20.?30","2.?3","ปล่อยลม","deflat"),CR(P("Korotkoff I = SBP, V = DBP","korotkoff","เสียงแรก","เสียงหาย","phase")),
    H("วัดซ้ำ + รายงาน",20),P("วัดซ้ำ ≥2 ครั้ง / สองแขน / บอกค่า","ซ้ำ","repeat","สองแขน","both arm","รายงาน","บอกค่า","mmhg")]})),
 interp:"กับดัก: ผู้ป่วยไขว่ห้าง + ต้องเลือก cuff ให้ถูกขนาด · พูดอธิบายทุกขั้น",
 summary:["ไขว่ห้าง/หลังไม่พิง/พูด/กลั้นปัสสาวะ/cuff เล็ก → ค่าสูงเกินจริง","Palpatory ก่อน · ปล่อยลม 2–3 mmHg/s · Korotkoff I/V","วัด ≥2 ครั้ง เฉลี่ย"]}),

/* ============================ กล่อง XX ในหน้าซักประวัติ ============================ */
X({page:10,orig:"XX-Fever",topic:"hx",ex:1,title:"History — woman with fever for 3 days: 3 differential diagnoses",
 stem:`Take a history from a woman with fever for 3 days and give 3 differential diagnoses.`,
 gray:"XX. จงซักประวัติผู้ป่วยหญิงมีไข้มา 3 วัน + DDx 3 โรค\n>>> ซักได้ไข้ คลื่นไส้ ปวดเมื่อยตามตัว มีคนในบ้านเป็นไข้เลือดออกเมื่ออาทิตย์ก่อน",
 sp:"(จากสมุด p10) ไข้ 3 วัน คลื่นไส้ ปวดเมื่อยตามตัว · <b>มีคนในบ้านเป็นไข้เลือดออกเมื่ออาทิตย์ก่อน</b> · (Claude เติม) ไข้สูงลอย ปวดกระบอกตา ไม่ไอ ไม่มีปัสสาวะแสบขัด ไม่ได้เข้าป่า/ลุยน้ำ ยังไม่มีจุดเลือดออก",
 parts:S(
  B("1. Take a history.",6,{tags:["hx"],key:KN(10)+" — (1) แยก localized vs systemic infection (2) รูปแบบไข้ อาการระบบอื่น สถานที่ไปมาใน 1 เดือน · ถามว่ามีคนในครอบครัวเป็นไหม",
   ans:"<b>(1) แยก localized vs systemic</b> (สมุด): อาการปอด (ไอ เสมหะ หอบ), ทางเดินปัสสาวะ (แสบขัด), ทางเดินอาหาร/ตับ (ปวดใต้ชายโครงขวา) · <b>(2) Systemic</b>: <b>รูปแบบไข้</b> (สูงลอย = dengue; วันเว้นวัน = malaria), ปวดศีรษะ ปวดกระบอกตา ตาแดง เจ็บคอ ผื่น ปวดเมื่อยน่อง จุดเลือดออก เลือดกำเดา ประจำเดือนมากผิดปกติ · <b>สถานที่ไปมาใน 1 เดือน</b> (ป่า เขา ไร่ = scrub typhus/malaria; ลุยน้ำย่ำโคลน = leptospirosis) · <b>มีคนในบ้าน/ชุมชนป่วยคล้ายกันไหม</b> · <b>warning signs ของ dengue</b>: ปวดท้อง อาเจียนมาก ซึม เลือดออก ปัสสาวะน้อย · ยาที่กิน (NSAID/aspirin), โรคประจำตัว, ประจำเดือน/ตั้งครรภ์",
   pts:[H("Localized vs systemic",25),P("อาการปอด/ปัสสาวะ/ท้อง","ไอ","ปัสสาวะ","แสบขัด","ปวดท้อง","ชายโครง"),
    H("ลักษณะไข้ + อาการร่วม",35),P("รูปแบบไข้ (สูงลอย/วันเว้นวัน)","สูงลอย","pattern","รูปแบบ","วันเว้น"),P("ปวดศีรษะ ปวดกระบอกตา ปวดเมื่อย ผื่น ตาแดง","กระบอกตา","ปวดหัว","ศีรษะ","ผื่น","ตาแดง","ปวดเมื่อย"),CR(P("อาการเลือดออก/warning sign","เลือดออก","จุดเลือด","เลือดกำเดา","ซึม","อาเจียน","ปวดท้อง")),
    H("ระบาดวิทยา",40),CR(P("คนในบ้าน/ชุมชนป่วย (ไข้เลือดออก)","คนในบ้าน","ครอบครัว","ข้างบ้าน","ไข้เลือดออก","family")),P("ประวัติเดินทาง/เข้าป่า/ลุยน้ำ ใน 1 เดือน","เดินทาง","ป่า","ลุยน้ำ","travel","สถานที่"),P("ยาที่กิน (NSAID/aspirin)","ยา","nsaid","aspirin","ibuprofen")]}),
  B("2. Give 3 differential diagnoses.",4,{tags:["hx"],key:KN(10)+" — Dengue, Chikungunya, Scrub typhus",
   ans:"(สมุด) <b>Dengue infection</b> (มีผู้ป่วยในบ้าน — most likely) · <b>Chikungunya</b> · <b>Scrub typhus</b> · อื่น ๆ: leptospirosis, influenza, malaria, Zika",
   pts:[CR(P("Dengue","dengue","ไข้เลือดออก","เดงกี")),G("DDx อื่น 2 ข้อ",2,P("Chikungunya","chikungunya","ชิคุน"),P("Scrub typhus","scrub","typhus","rickett"),P("Leptospirosis","lepto"),P("Influenza","influenza","ไข้หวัดใหญ่"),P("Malaria","malaria","มาลาเรีย"),P("Zika","zika"))]})),
 interp:"ไข้ 3 วัน + คนในบ้านเป็นไข้เลือดออก → dengue (DDx chikungunya, scrub typhus)",
 summary:["ซักไข้: localized vs systemic → รูปแบบไข้ → อาการร่วม → สถานที่ใน 1 เดือน → คนรอบตัว","Dengue warning signs: ปวดท้อง อาเจียนมาก ซึม เลือดออก ตับโต","ห้าม NSAID/aspirin ในไข้เลือดออก"]}),

X({page:14,orig:"XX-Stool",topic:"hx",ex:1,title:"History — passing black and red blood per rectum, brother had cancer: 3 differential diagnoses",
 stem:`Take a history from a patient who passes bloody stools and give 3 differential diagnoses.`,
 gray:"XX. ซักประวัติคนถ่ายเป็นเลือด ซักได้แบบนี้ สีดำสลับแดง ไม่ท้องเสีย ไม่ท้องผูก ไม่เจ็บ ไม่ปวดท้อง ไม่อ้วก เป็นเลือด มีประวัติพี่ชายเป็นมะเร็ง ให้ Ddx 3โรค",
 flag:"⚠ คำว่า 'ไม่อ้วก(?) เป็นเลือด' ในสมุดอ่านได้ไม่ชัดเจน (ตีความว่า ไม่อาเจียนเป็นเลือด)",
 sp:"(จากสมุด p14) ถ่ายเป็นเลือด <b>สีดำสลับแดง</b> · ไม่ท้องเสีย ไม่ท้องผูก ไม่เจ็บ ไม่ปวดท้อง ไม่อาเจียนเป็นเลือด · <b>พี่ชายเป็นมะเร็ง</b>",
 parts:S(
  B("1. Take a history.",6,{tags:["hx"],key:KN(14)+" — (1) แยกว่าไม่ใช่ anorectal disease + ยาบำรุงเลือด/bismuth (2) detail เลือด: onset ปริมาณ ความถี่ duration เคยเป็นมาก่อน (3) anemic symptom (4) DDx: PU/gastritis (NSAIDs, ASA, ปวดท้องบ่อย), esophagitis (กลืนเจ็บ กลืนลำบาก), Mallory–Weiss (อาเจียนรุนแรง) · PH โรคตับ · SH สุรา",
   ans:"(สมุด) <b>1. แยกว่าไม่ใช่ anorectal disease</b> (ริดสีดวง แผลปากทวาร — เลือดสดหยดตามอุจจาระ เจ็บ) และ <b>R/O อุจจาระดำจากยาบำรุงเลือด (iron)/bismuth</b> · <b>2. ลักษณะเลือด</b>: onset ปริมาณ ความถี่ duration <b>เคยเป็นมาก่อนไหม</b>, ดำเหนียว (melena) หรือแดง, ปนเนื้อหรือเคลือบผิว · ถามอาเจียนเป็นเลือดร่วม · <b>3. Anemic symptoms</b>: เวียนศีรษะ หน้ามืด ใจสั่น เหนื่อยง่าย · <b>4. หา cause</b>: ยา NSAIDs/ASA/anticoagulant, ปวดท้องบ่อย (PU), กลืนเจ็บ/กลืนลำบาก (esophagitis), อาเจียนรุนแรงก่อน (Mallory–Weiss) · <b>มะเร็ง</b>: <b>นิสัยการขับถ่ายเปลี่ยน, น้ำหนักลด เบื่ออาหาร, อุจจาระลำเล็ก</b>, <b>ประวัติครอบครัวมะเร็ง (พี่ชาย — มะเร็งอะไร อายุเท่าไร)</b>, เคยส่องกล้อง/คัดกรองไหม · <b>PH</b>: โรคตับ (varices) · <b>SH</b>: ดื่มสุรา",
   pts:[H("แยกแหล่ง + R/O",25),P("แยก anorectal / ยาบำรุงเลือด / bismuth","ริดสีดวง","anorectal","ทวาร","ยาบำรุงเลือด","iron","ธาตุเหล็ก","bismuth"),P("ลักษณะเลือด onset ปริมาณ ความถี่ เคยเป็น","ปริมาณ","ความถี่","onset","เคยเป็น","กี่ครั้ง"),
    H("Anemic + cause",35),P("Anemic symptoms","หน้ามืด","เวียน","ใจสั่น","เหนื่อย","ซีด"),P("ยา NSAIDs/ASA/anticoagulant + ปวดท้อง","nsaid","aspirin","asa","anticoag","ปวดท้อง"),
    H("มะเร็ง",40),CR(P("ประวัติครอบครัวมะเร็ง (ชนิด อายุ)","ครอบครัว","พี่ชาย","family","มะเร็งอะไร")),CR(P("ขับถ่ายเปลี่ยน / น้ำหนักลด / เบื่ออาหาร","ขับถ่าย","bowel habit","น้ำหนักลด","weight","เบื่ออาหาร")),P("โรคตับ / สุรา","ตับ","liver","สุรา","alcohol")]}),
  B("2. Give 3 differential diagnoses.",4,{tags:["hx"],key:KN(14)+" — DDx: PU/gastritis, esophagitis, Mallory–Weiss tear (ในสมุดเป็น DDx ของ UGIB)",
   ans:"ถ่ายดำสลับแดง ไม่มีอาการปวด + พี่ชายเป็นมะเร็ง → <b>Colorectal cancer (right-sided)</b> (Claude เติม — ข้อมูลประวัติครอบครัวชี้) · <b>Peptic ulcer/gastritis bleeding</b> (สมุด) · <b>Gastric cancer</b> · อื่น ๆ: angiodysplasia, diverticular bleeding, esophagitis, Mallory–Weiss tear (สมุด — แต่ต้องมีอาเจียน), varices (มีโรคตับ)",
   exp:"สีดำสลับแดง = เลือดจาก upper GI ปริมาณมาก/เร็ว หรือ right colon · โจทย์ใส่ 'พี่ชายเป็นมะเร็ง' เพื่อให้คิด colorectal cancer",
   pts:[CR(P("Colorectal cancer","colorectal","colon","มะเร็งลำไส้","crc")),G("DDx อื่น 2 ข้อ",2,P("Peptic ulcer/gastritis","peptic","ulcer","gastritis","\\bpu\\b","กระเพาะ"),P("Gastric cancer","gastric ca","gastric cancer","มะเร็งกระเพาะ"),P("Angiodysplasia/diverticular","angiodysplas","diverticul"),P("Esophagitis / Mallory–Weiss","esophagitis","mallory"),P("Varices","varice"))]})),
 interp:"ถ่ายดำสลับแดง ไม่ปวด + ครอบครัวมะเร็ง → colorectal cancer (DDx PU, gastric CA)",
 summary:["R/O anorectal, iron/bismuth ก่อน","Anemic symptom + cause + มะเร็ง (FH, bowel habit, น้ำหนักลด)","UGIB: GBS ≤1 = OPD ได้ · ส่องกล้องใน 24 ชม."]}),

X({page:15,orig:"XX-Edema",topic:"hx",ex:1,title:"History — woman with leg swelling: which system is most likely involved",
 stem:`Take a history from a woman with leg swelling and state the system you think is most likely involved.`,
 gray:"XX. จงซักประวัติผู้ป่วยหญิงมาด้วยขาบวม + ให้บอกระบบที่นึกถึงมากที่สุด\n>> บวมขา2ข้าง กดบุ๋มไม่บุ๋มไม่ได้สังเกต ตอนเช้ามีหน้าบวมตาบวม ปัสสาวะน้อยลง ปัสสาวะมีฟอง ไม่เคยปัสสาวะเป็นเลือด ไม่มีประวัติไอเจ็บคอมาก่อน มีประวัติใช้ยาNSAIDS",
 sp:"(จากสมุด p15) บวมขา 2 ข้าง กดบุ๋มไม่ได้สังเกต · <b>ตอนเช้าหน้าบวม ตาบวม</b> · <b>ปัสสาวะน้อยลง มีฟอง</b> · ไม่เคยปัสสาวะเป็นเลือด · ไม่มีไอ/เจ็บคอนำ · <b>ใช้ยา NSAIDs</b>",
 parts:S(
  B("1. Take a history.",6,{tags:["hx"],key:KN(15)+" — บวมกี่วัน เจ็บ/แดง/ร้อน ข้างเดียว/สองข้าง · บวมที่ไหนก่อน (ท้อง/ขา/หนังตาตอนตื่นนอน) → organ: ตับ ไต หัวใจ hypoalbuminemia · nephrotic: หนังตาบวมตอนเช้า ปัสสาวะฟอง · nephritic: ปัสสาวะเป็นเลือด · ซัก PH: โรคประจำตัว ยาที่ใช้ประจำ",
   ans:"(สมุด) บวมมานานเท่าไร · <b>ข้างเดียวหรือสองข้าง</b> · เจ็บ แดง ร้อนไหม · กดบุ๋มไหม · <b>บวมที่ไหนก่อน</b>: ท้องก่อน (ตับ), ขาก่อน/ตามท่า dependent (หัวใจ), <b>หนังตา หน้า ตอนตื่นนอนก่อน</b> (ไต) · <b>ไต</b>: <b>ปัสสาวะมีฟอง</b> (proteinuria), ปัสสาวะน้อย, ปัสสาวะเป็นเลือด, เจ็บคอ/ผื่นนำ (PSGN), ความดัน · <b>หัวใจ</b>: เหนื่อยเวลาออกแรง orthopnea PND · <b>ตับ</b>: ท้องโต ตัวเหลือง ไวรัสตับอักเสบ สุรา เลือดออกง่าย · <b>ขาดอาหาร</b> · <b>ยา</b>: <b>NSAIDs</b>, CCB, steroid · โรคประจำตัว (DM, SLE — ผื่น ปวดข้อ), ประวัติครอบครัว",
   pts:[H("ลักษณะบวม",30),P("ระยะเวลา ข้างเดียว/สองข้าง กดบุ๋ม","กี่วัน","นาน","สองข้าง","ข้างเดียว","บุ๋ม","pitting"),CR(P("บวมที่ไหนก่อน (หนังตาตอนเช้า)","ที่ไหนก่อน","หนังตา","หน้าบวม","ตอนเช้า","ตื่นนอน")),
    H("แยกระบบ",45),CR(P("ไต: ปัสสาวะฟอง น้อย เลือด","ฟอง","foam","ปัสสาวะน้อย","ปัสสาวะเป็นเลือด","hematuria")),P("หัวใจ: เหนื่อย orthopnea PND","เหนื่อย","orthopn","pnd","นอนราบ"),P("ตับ: ท้องโต เหลือง สุรา ตับอักเสบ","ท้องโต","เหลือง","สุรา","hepatitis","ตับ"),
    H("ยา + โรคประจำตัว",25),CR(P("ยา NSAIDs / ยาประจำ","nsaid","ยาแก้ปวด","ยา","ibuprofen")),P("โรคประจำตัว (DM, SLE)","เบาหวาน","\\bdm\\b","sle","โรคประจำตัว")]}),
  B("2. State the system most likely involved.",4,{tags:["hx"],
   ans:"<b>ระบบไต (kidney)</b> — <b>nephrotic syndrome</b> (หนังตา/หน้าบวมตอนเช้า + ปัสสาวะเป็นฟอง + ไม่มีปัสสาวะเลือด) · สาเหตุที่นึกถึงจากประวัติ: <b>NSAID-induced</b> (minimal change disease / membranous nephropathy) หรือ primary glomerular disease (MCD, membranous, FSGS) · ส่ง UA, UPCR/24-h urine protein, serum albumin, lipid, Cr",
   pts:[CR(P("ไต / nephrotic syndrome","ไต","kidney","renal","nephrotic")),P("NSAID-induced / MCD / membranous","nsaid","minimal change","membranous","fsgs")]})),
 interp:"หนังตาบวมตอนเช้า + ปัสสาวะฟอง + NSAIDs → ไต (nephrotic syndrome)",
 summary:["บวม 4 ระบบ: ตับ ไต หัวใจ ขาดอาหาร","ไต: บวมหนังตาก่อน ตอนเช้า · ปัสสาวะฟอง = nephrotic · เลือด = nephritic","NSAIDs → MCD/membranous, AKI"]}),

X({page:16,orig:"XX-Hemoptysis",topic:"hx",ex:1,title:"History — 55-year-old smoker with recurrent hemoptysis for months: 2 differential diagnoses",
 stem:`Take a history from a 55-year-old patient with hemoptysis and give 2 differential diagnoses.`,
 gray:"XX. ซักประวัติผู้ป่วยอายุ 55 ปี ไอเป็นเลือด ประวัติที่ได้ อาการไอเป็นเลือดเป็นมานานหลายเดือน อาการมาเป็นบางครั้ง เป็นๆหายๆ เลือดที่ออกมาแต่ละครั้งมีปริมาณประมาณเหรียญสลึง ไม่มีอาการไข้ ไม่มีเหงื่อออกกลางคืน ไม่เคยมีประวัติโรคประจำตัว หรือประวัติผ่าตัด พ่อเคยเป็นโรคถุงลมโป่งพอง สูบบุหรี่มา 30 ปี วันละซอง ไม่มีแอลกอฮอล์ ยาเสพติด unsafe sex ยาสมุนไพรลูกกลอน ให้ Ddx 2 โรค",
 sp:"(จากสมุด p16) ไอเป็นเลือดหลายเดือน เป็น ๆ หาย ๆ ครั้งละประมาณเหรียญสลึง · ไม่มีไข้ ไม่มีเหงื่อออกกลางคืน · ไม่มีโรคประจำตัว/ผ่าตัด · พ่อเป็นถุงลมโป่งพอง · <b>สูบบุหรี่ 30 ปี วันละซอง</b> (30 pack-years) · ไม่ดื่มสุรา ไม่ใช้ยาเสพติด ไม่มี unsafe sex ไม่กินยาสมุนไพร/ลูกกลอน",
 parts:S(
  B("1. Take a history.",6,{tags:["hx"],key:KN(16)+" — 1st R/O GI bleeding (ไอจากกระตุ้น gag reflex) · ประเมินความรุนแรง (หน้ามืด ใจสั่น เป็นลม) · ตาราง hx: ระยะเวลา ลักษณะเสมหะ อาการร่วม (ไข้ น้ำหนักลด → TB; เจ็บอก → PE) PH โรคปอด/TB/เลือดออก/ยาต้านเลือด · SH บุหรี่ · FH สัมผัส TB",
   ans:"<b>1st R/O pseudohemoptysis</b>: ไอออกมาจริงหรืออาเจียน/เลือดกำเดา (อาเจียนเป็นเลือดทำให้ไอจาก gag reflex) — ไอเลือดสด เป็นฟอง ด่าง vs อาเจียน สีดำ/น้ำตาล เป็นกรด · <b>ปริมาณ/ความรุนแรง</b>: ครั้งละเท่าไร (massive &gt;200 mL/ครั้ง หรือ &gt;600 mL/24 ชม.), หน้ามืด ใจสั่น เหนื่อย · <b>ระยะเวลา ความถี่</b> · <b>เสมหะ</b>: เรื้อรัง ปริมาณมาก เป็นหนอง (bronchiectasis) · <b>อาการร่วม</b>: ไข้ เหงื่อออกกลางคืน น้ำหนักลด (TB/มะเร็ง), เจ็บอกแบบ pleuritic/ขาบวม (PE), เสียงแหบ ปวดกระดูก · <b>PH</b>: TB เดิม, โรคปอด, โรคเลือด/ยาต้านการแข็งตัว · <b>SH</b>: <b>บุหรี่ (pack-years)</b>, อาชีพ (asbestos), สุรา · <b>FH</b>: สัมผัส TB, มะเร็ง",
   pts:[H("R/O + ความรุนแรง",25),CR(P("แยกไอเป็นเลือดจริง vs อาเจียน/เลือดกำเดา","อาเจียน","gag","เลือดกำเดา","pseudo","จริง","ไอออกมา")),P("ปริมาณ/หน้ามืด ใจสั่น","ปริมาณ","เท่าไร","หน้ามืด","ใจสั่น","massive"),
    H("อาการร่วม",35),P("ไข้ เหงื่อกลางคืน น้ำหนักลด","ไข้","เหงื่อ","น้ำหนักลด","weight"),P("เสมหะเรื้อรัง/เป็นหนอง","เสมหะ","sputum","หนอง"),P("เจ็บอก/ขาบวม (PE)","เจ็บอก","chest pain","ขาบวม","pleuritic"),
    H("PH/SH/FH",40),CR(P("บุหรี่ (pack-years)","บุหรี่","smok","pack")),P("TB เดิม / สัมผัส TB","tb","วัณโรค","สัมผัส"),P("ยาต้านเลือด/โรคเลือด/อาชีพ","anticoag","warfarin","ยาต้าน","เลือดออกง่าย","อาชีพ","asbestos")]}),
  B("2. Give 2 differential diagnoses.",4,{tags:["hx"],key:KN(16)+" — Lung cancer ✓, Bronchiectasis ✓ (+ PE, TB)",
   ans:"(สมุด) <b>Lung cancer (bronchogenic carcinoma)</b> — สูบ 30 pack-years อายุ 55 · <b>Bronchiectasis</b> (chronic productive cough with purulent sputum) · อื่นที่สมุดเขียน: <b>pulmonary TB</b>, PE",
   pts:[CR(P("Lung cancer","lung ca","cancer","carcinoma","มะเร็งปอด","bronchogenic")),G("DDx ข้อที่ 2",1,P("Bronchiectasis","bronchiect","หลอดลมพอง"),P("Pulmonary TB","tb","tubercul","วัณโรค"),P("PE","\\bpe\\b","embol"))]})),
 interp:"ไอเป็นเลือดเรื้อรัง + 30 pack-years อายุ 55 → lung cancer (DDx bronchiectasis, TB)",
 summary:["R/O pseudohemoptysis ก่อนเสมอ","Massive: >200 mL/ครั้ง หรือ >600 mL/24 ชม.","สูบบุหรี่ + อายุ >40 + ไอเลือด → CT chest + bronchoscopy"]}),

/* ============================ ชุด 2 (p28–65) · กล่อง "XX." 2 สถานี — เพิ่ม 14 พ.ย. 2026 ============================ */
X({page:40,orig:"XX-Thyro",topic:"lab",seen:"คล้าย MDCU74 RoX ข้อ 5, MDCU76 RoC ข้อ 10 (thyrotoxicosis + diffuse goiter)",title:"Thyrotoxicosis for 2 months with a diffusely enlarged thyroid: 3 differential diagnoses",
 stem:`History, physical examination and laboratory results are summarized: <b>thyrotoxicosis for 2 months</b>, <b>diffusely enlarged thyroid gland</b>, <b>TSH low</b>, <b>FT3 high</b>.<br>1. Give 3 differential diagnoses.<br>2. Name the investigation(s) that best distinguish them.`,
 gray:"XX. ให้ประวัติตรวจร่างกายกับแลปมา สรุปว่าเป็น thyrotoxicosis (2 mo), diffusely enlarged thyroid gland, TSH ต่ำ, FT3 สูง\nให้ Differential diagnosis มา 3 โรค",
 flag:"ข้อ 2 Claude เติม (สมุดหน้า thyroid p42 เขียน further investigation = RAIU)",
 parts:S(
  B("1. Give 3 differential diagnoses.",6,{tags:["lab"],key:KN(40)+" — Grave's, Toxic adenoma, Toxic multinodular goiter (ลายมือ: ถ้าเป็น thyroiditis จะเป็นแค่ few weeks)",
   ans:"(สมุด) <b>Graves' disease</b> (เหมาะสุด — diffuse goiter) · <b>Toxic adenoma</b> · <b>Toxic multinodular goiter</b> — สมุดตัด thyroiditis เพราะอาการ 2 เดือน (thyroiditis มัก few weeks) · Claude เติม: painless (silent) thyroiditis ระยะ thyrotoxic อาจนานถึง 2–3 เดือน จึงยังเป็น DDx ได้ · subacute (de Quervain) thyroiditis (คอเจ็บ ESR สูง) · exogenous thyroid hormone · TSH-secreting adenoma (TSH จะไม่ต่ำ)",
   pts:[CR(P("Graves' disease","grave","basedow","เกรฟส์")),G("DDx อีก 2 โรค",2,P("Toxic adenoma","toxic adenoma","plummer","adenoma"),P("Toxic multinodular goiter","multinodular","\\btmng\\b","mng"),P("Thyroiditis (painless/subacute)","thyroiditis","de quervain","silent","painless"),P("Exogenous thyroid hormone","exogenous","factitia","levothyrox"))]}),
  B("2. Name the investigation(s) that best distinguish them.",4,{tags:["lab"],flag:"Claude เติม",
   ans:"<b>Radioactive iodine uptake (RAIU) ± thyroid scan</b> — Graves = uptake สูง กระจายทั่ว · toxic adenoma = hot nodule เดียว กดส่วนที่เหลือ · TMNG = หลายจุด patchy · thyroiditis/exogenous = uptake ต่ำ · <b>TRAb (TSH receptor antibody)</b> ยืนยัน Graves (ATA 2016 ให้เลือก TRAb/RAIU/thyroid US with Doppler) · thyroglobulin ต่ำใน exogenous",
   pts:[CR(P("RAIU / thyroid scan","raiu","uptake","scan","scint","ไอโอดีนรังสี")),P("TRAb / TSI","trab","tsi","receptor antibod","tsh receptor"),P("Thyroid ultrasound with Doppler","ultrasound","doppler","\\bus\\b")]})),
 interp:"Thyrotoxicosis + diffuse goiter 2 เดือน → Graves มากที่สุด · แยกด้วย RAIU/scan + TRAb",
 summary:["DDx thyrotoxicosis + goiter: Graves, toxic adenoma, TMNG (+ thyroiditis)","RAIU สูง = Graves/TA/TMNG · ต่ำ = thyroiditis/exogenous","TRAb ยืนยัน Graves (ATA 2016)"]}),

X({page:64,orig:"XX-Penis",topic:"skin",seen:"คล้าย MDCU71 RoX Skin1 (condyloma ที่ penis — คำถามย่อยต่างกัน)",title:"Skin lesion on the penis — describe, diagnose and name 2 risk factors for malignancy",imgNote:NOIMG+" · ลายมือในสมุด: multiple discrete well-circumscribed hyperpigmented papules ที่ penis (ผู้จดไม่แน่ใจว่าเป็น penile wart หรือ bowenoid papulosis)",
 stem:`A picture of a skin lesion on the penis is shown.<br>1. Describe the lesion.<br>2. What is the most likely diagnosis?<br>3. What are 2 factors that increase the risk of malignancy?`,
 gray:"XX. มีรูป skin lesion บริเวณ penis มาให้\n1. Describe the lesion (ไม่ชัวร์ว่า penile wart หรือ bowenoid papulosis)\n2. What is the most likely diagnosis?\n3. What are 2 factors that increase the risk of malignancy?",
 flag:"ผู้จดไม่แน่ใจคำตอบ (penile wart vs bowenoid papulosis) — เฉลยตามลายมือ + กล่องคำตอบในสมุด p64 · Condyloma ไม่อยู่ในเวอร์ชันหลักของผู้ใช้ → ไฟล์/สมุดเป็นหลัก Claude ร่างเป็นรอง",
 parts:S(
  B("1. Describe the lesion.",3,{tags:["skin"],key:KN(64)+" — ลายมือ: multiple discrete well-circumscribed hyperpigmented papules @ penis · กล่องคำตอบ: well-circumscribed hyperkeratotic verrucous lesion on genital area",
   ans:"<b>หลัก (สมุด)</b>: <b>Multiple discrete well-circumscribed hyperkeratotic verrucous (hyperpigmented) papules</b> at the penis<br><b>รอง (Claude ร่าง ท่องง่าย)</b>: Multiple skin-colored to hyperpigmented verrucous papules on the penile shaft · ถ้าเป็นตุ่มแบนสีน้ำตาลเข้มขนาด 2–3 mm ผิวเรียบ (ไม่ verrucous) → นึกถึง bowenoid papulosis",
   pts:[P("Multiple discrete well-circumscribed","multiple","discrete","well.?circumscrib"),CR(P("Verrucous / hyperkeratotic papules","verruc","hyperkeratot","papule","wart","cauliflower")),P("Hyperpigmented / location penis","hyperpigment","pigment","penis","penile","genital")]}),
  B("2. What is the most likely diagnosis?",2,{tags:["skin"],key:KN(64)+" — Anogenital wart (HPV 6, 11; สมุดขีดฆ่า 16,18) · DDx bowenoid papulosis (HPV 16)",
   ans:"<b>Anogenital wart (condyloma acuminatum)</b> — HPV 6, 11 (สมุดแก้จาก 16,18 เป็น 6,11 ✓) · DDx: <b>bowenoid papulosis</b> (HPV 16, ตุ่ม hyperpigmented 2–3 mm, histo ~ Bowen's/SCC in situ), pearly penile papules, condyloma lata (syphilis)",
   pts:[CR(G("Diagnosis",1,P("Anogenital wart / condyloma acuminatum","condyloma","genital wart","anogenital","penile wart","หูดหงอนไก่"),P("Bowenoid papulosis","bowenoid")))]}),
  B("3. What are 2 factors that increase the risk of malignancy?",3,{tags:["skin"],key:KN(64)+" — HPV, smegma",
   ans:"(สมุด) <b>HPV (high-risk type 16, 18)</b> · <b>Smegma</b> (phimosis / ไม่ได้ขลิบ / สุขอนามัยไม่ดี — สะสมทำให้อักเสบเรื้อรัง) · Claude เติม: <b>smoking</b>, immunosuppression (HIV), lichen sclerosus, chronic balanitis, PUVA",
   pts:[G("2 factors",2,P("High-risk HPV (16, 18)","hpv","16","18","papilloma"),P("Smegma / phimosis / uncircumcised","smegma","phimosis","circumcis","ขลิบ","hygiene"),P("Smoking","smok","บุหรี่"),P("Immunosuppression / HIV","immuno","hiv","ภูมิ"),P("Lichen sclerosus / chronic inflammation","lichen","balanitis","inflamm"))]})),
 interp:"ตุ่ม verrucous ที่ penis → anogenital wart (HPV 6/11) · ตุ่ม hyperpigmented แบน → bowenoid papulosis (HPV 16) · ความเสี่ยงมะเร็ง: HPV 16/18, smegma/phimosis, smoking",
 summary:["Condyloma = HPV 6, 11 · Bowenoid papulosis = HPV 16","มะเร็งองคชาต: HPV 16/18, smegma/phimosis/ไม่ขลิบ, บุหรี่","ตรวจคัด STI อื่น (HIV, syphilis) ด้วย"]})

);
})();
