(function(){
/* Subspecialty Surgery Y4 — OSCE ข้อสอบเก่า AC "AC XXX By MDCU 78" (ไฟล์ OSCE 78B) → MDCU78 RoB (เพิ่ม 20 พ.ย. 2026)
   ไฟล์ SO78BQ = AC_78B_OSCE_78B.pdf (5 หน้า, iOS) · ตาราง ข้อ / โจทย์รวม (อันนี้ meq) / คำถามย่อย · ไม่มีไฟล์เฉลย · text layer ภาษาไทยเพี้ยน — ถอดจากภาพหน้า
   ข้อ 1–15 = พาร์ท meq → sec "Short Answers" (orig "MEQ n", num "SA n", topic spot) · แถว 16 มีป้าย "(OSCE)" → ข้อ 16–27 = พาร์ท OSCE · แถวว่าง (ข้าม): 19, 28, 29, 30
   รูปในไฟล์: MEQ 1 แผนภาพ upper endoscopy (มีหัวเรื่อง \"Upper Endoscopy\" = คำตอบ → ปิดในรูปโจทย์) + ชุดทดสอบ Pronto Dry (มีข้อความบอกว่าตรวจ urease ของ H. pylori → ปิดในรูปโจทย์) · รูปต้นฉบับเป็นรูปเฉลย os78b_k1a/k1b · MEQ 2 AXR · MEQ 3 AXR · MEQ 13 แผลกดทับ · OSCE 17 ก้อนที่แขน
   สถานีที่ไฟล์บอกว่ามีรูป/VDO แต่ไฟล์ไม่มี: MEQ 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, OSCE 16, 22, 24 → flag NOIMG + imgAlt */
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
const Co=o=>Object.assign({set:"MDCU78",ro:"RoB",file:"SO78BQ",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot"},o));
QB.push(

/* ===== MEQ 1 ===== */
SA({page:1,orig:"MEQ 1",num:"SA 1",sub:"Other spot",title:"Spot — an endoscopic procedure and a rapid test kit",img:["os78b_1a","os78b_1b"],kimg:["os78b_k1a","os78b_k1b"],
 stem:`The first picture shows a procedure being performed. The second picture shows a test kit used during this procedure; the gastric biopsy sample turned the well pink-red.<br>1. Name the procedure.<br>2. Give two indications.<br>3. The test in the second picture detects which substance?<br>4. Interpret the result.<br>5. How would you treat this patient?`,
 gray:"(รูป upper endoscopy + รูปชุดทดสอบ Pronto Dry) 1. หัตถการชื่ออะไร 2. Indication 2 ข้อ 3. Test รูปล่างตรวจหาสารใด 4. แปลผล 5. Tx",
 flag:"ผลทดสอบเปลี่ยนสี (บวก) Claude ระบุใน stem — รูปในไฟล์แสดงแถบสีตัวอย่างบวก/ลบ",
 notes:"รูปในไฟล์: แผนภาพ \"Upper Endoscopy\" และชุด \"Pronto Dry detects the urease enzyme of Helicobacter pylori\" — ข้อความเหล่านี้คือคำตอบ จึงปิดในรูปโจทย์ (รูปเต็มเป็นรูปเฉลย) · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("1.1 Name the procedure.",1,{tags:["spot"],ans:"<b>Esophagogastroduodenoscopy (EGD, upper GI endoscopy)</b>",exp:"ส่องกล้องตรวจหลอดอาหาร กระเพาะ duodenum ส่วนที่ 2 · ทำ biopsy, rapid urease test, hemostasis ได้",rubric:"ได้ = EGD/upper endoscopy",
   pts:[CR(P("EGD / upper endoscopy","egd","endoscop","ส่องกล้อง","esophagogastro"))]}),
  B("1.2 Two indications.",2,{tags:["spot"],ans:"<b>Upper GI bleeding</b> (hematemesis/melena) · <b>dyspepsia with alarm features</b> (อายุ &gt;60, น้ำหนักลด, กลืนลำบาก, อาเจียนต่อเนื่อง, IDA, GI bleeding, ก้อน) · dysphagia/odynophagia · สงสัยมะเร็งกระเพาะ · ติดตาม gastric ulcer · surveillance (Barrett, varices) · foreign body/caustic ingestion",exp:"ทำ EGD ภายใน 24 ชม. ใน UGIB (หลัง resuscitate); ภายใน 12 ชม. ถ้าสงสัย variceal bleeding หรือ high risk",rubric:"1 คะแนนต่อข้อบ่งชี้",
   pts:[G("Indications (≥2)",2,P("UGIB","bleed","hematemesis","melena","เลือดออก"),P("Dyspepsia with alarm features","dyspeps","alarm","weight loss","น้ำหนักลด"),P("Dysphagia","dysphagia","กลืน"),P("Suspected cancer/ulcer","cancer","ulcer","มะเร็ง","แผล"),P("Foreign body/caustic","foreign","caustic"))]}),
  B("1.3 The test detects which substance?",1,{tags:["spot"],ans:"<b>Urease enzyme of Helicobacter pylori</b> (rapid urease test, CLO test) — urease เปลี่ยน urea → ammonia → pH สูง → indicator เปลี่ยนสี",exp:"Rapid urease test sensitivity ~90% specificity ~95% · วิธีอื่น: histology, culture, urea breath test, stool antigen",rubric:"ได้ = urease ของ H. pylori",
   pts:[CR(P("Urease of H. pylori","urease","pylori"))]}),
  B("1.4 Interpret the result.",1,{tags:["spot"],ans:"สีเปลี่ยนเป็นชมพู–แดง = <b>positive → มีการติดเชื้อ H. pylori</b> (เหลืองคงเดิม = negative)",exp:"False negative ถ้ากิน PPI (หยุด 2 สัปดาห์), antibiotics/bismuth (หยุด 4 สัปดาห์), active bleeding",rubric:"ได้ = positive H. pylori",
   pts:[CR(P("Positive for H. pylori","positive","บวก","infection","ติดเชื้อ"))]}),
  B("1.5 Treatment.",3,{tags:["spot"],ans:"<b>H. pylori eradication 14 วัน</b>: ในไทย first-line = <b>bismuth quadruple therapy</b> (PPI + bismuth + tetracycline + metronidazole) หรือ clarithromycin-based triple (PPI + amoxicillin + clarithromycin) ถ้า clarithromycin resistance ต่ำ · ตรวจยืนยันการกำจัดเชื้อ (UBT/stool antigen) ≥4 สัปดาห์หลังหยุดยา · รักษาโรคที่พบร่วม (PU: PPI ต่อ)",exp:"Thailand consensus on H. pylori 2022",rubric:"ได้ = eradication regimen + test of cure",
   pts:[CR(P("Eradication therapy (PPI + antibiotics)","ppi","clarithro","amoxicillin","metronidazole","bismuth","quadruple","triple","eradicat")),P("14 days","14"),P("Confirm eradication","ubt","breath","stool antigen","confirm","ยืนยัน")]})
 ),
 interp:"EGD + rapid urease test → H. pylori",
 summary:["EGD indications: UGIB, alarm dyspepsia, dysphagia, ulcer follow-up, surveillance","Rapid urease test: ชมพูแดง = positive","False negative: PPI, ATB, bismuth, bleeding","Eradication 14 วัน → test of cure","H. pylori → PU, gastric cancer, MALT lymphoma"]}),

/* ===== MEQ 2 ===== */
SA({page:2,orig:"MEQ 2",num:"SA 2",sub:"Pediatric surgery",title:"Spot — 3-week-old with sudden bilious vomiting: abdominal radiograph",img:["os78b_2"],
 stem:`A 3-week-old infant presents with sudden bilious vomiting. The abdominal radiograph is shown.<br>1. What is the diagnosis?<br>2. How would you treat this infant?`,
 gray:"เด็ก 3 wk มาด้วย abrupt bilious vomiting film abdomen ดังภาพ · 1. Dx 2. Tx",
 notes:"รูป AXR ในไฟล์: กระเพาะและ duodenum ขยาย แก๊สส่วนปลายน้อย · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง (bilious vomiting เฉียบพลันในทารก = malrotation with volvulus จนกว่าจะพิสูจน์ว่าไม่ใช่)",
 parts:S(
  B("2.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Malrotation with midgut volvulus</b> (AXR: กระเพาะ/duodenum ขยาย แก๊สส่วนปลายน้อย — partial duodenal obstruction)",exp:"ยืนยันด้วย UGI contrast (DJ junction ผิดตำแหน่ง, corkscrew) ถ้า stable; US whirlpool sign",rubric:"ได้ = malrotation with midgut volvulus",
   pts:[CR(P("Malrotation with midgut volvulus","malrotation","volvulus"))]}),
  B("2.2 Treatment.",4,{tags:["spot"],ans:"<b>Resuscitate</b>: NPO, NG decompression, IV fluid bolus, แก้ electrolyte, broad-spectrum ATB · <b>Emergency laparotomy — Ladd procedure</b>: detorsion ทวนเข็มนาฬิกา, แบ่ง Ladd's bands, ขยาย mesenteric base, appendectomy, วาง small bowel ขวา colon ซ้าย · ลำไส้ตาย → resection; ไม่แน่ใจ → second-look 24–48 ชม.",exp:"ไม่ควรรอ imaging ถ้ามี peritonitis/shock",rubric:"ได้ = resuscitation + emergency Ladd",
   pts:[P("Resuscitation: NPO, NG, IV fluid","npo","ng","iv fluid","resusc"),CR(P("Emergency Ladd procedure","ladd","laparotomy","detorsion","ผ่าตัด")),P("Appendectomy / widen mesentery / divide bands","appendectomy","band","mesent")]})
 ),
 interp:"Bilious vomiting ในทารก → malrotation with volvulus → Ladd procedure",
 summary:["Bilious vomiting ทารก = emergency","UGI contrast = gold standard ใน stable","Ladd: detorsion ทวนเข็ม, bands, widen mesentery, appendectomy","Peritonitis/shock → ผ่าตัดเลย"]}),

/* ===== MEQ 3 ===== */
SA({page:3,orig:"MEQ 3",num:"SA 3",sub:"Pediatric surgery",title:"Spot — abdominal radiograph of a child",img:["os78b_3"],
 stem:`A 6-year-old child has had hard, infrequent stools for many months with recent abdominal pain and soiling of underwear. He passed meconium normally after birth. The abdominal radiograph is shown.<br>1. What is the diagnosis?<br>2. Describe the initial management in detail.<br>3. What is the definitive (long-term) treatment?`,
 gray:"(รูป AXR เด็ก) · 1. Dx 2. Initial management แบบละเอียด 3. Definite treatment",
 flag:"ต้นฉบับมีแค่รูปและคำถาม ไม่มีประวัติ — Claude แต่งประวัติเป็น functional constipation with fecal impaction ตามรูป (อุจจาระเต็มลำไส้ใหญ่)",
 notes:"รูป AXR ในไฟล์: เด็ก มีอุจจาระก้อนเต็มลำไส้ใหญ่ทั่วท้อง ไม่เห็นลำไส้เล็กขยายหรือ air-fluid level ชัด · ไม่มีประวัติในไฟล์ ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจต่ำว่าโจทย์จริงคือโรคใด: จากรูปเข้าได้กับ fecal impaction จาก functional constipation; ถ้าประวัติในข้อสอบจริงเป็นท้องผูกตั้งแต่แรกเกิด/ถ่ายขี้เทาช้า ต้องตอบ Hirschsprung disease (definitive = pull-through)",
 parts:S(
  B("3.1 Diagnosis.",2,{tags:["spot"],ans:"<b>Functional constipation with fecal impaction</b> (overflow incontinence/encopresis) · DDx: Hirschsprung disease (ถ้าท้องผูกตั้งแต่แรกเกิด, ขี้เทาช้า &gt;48 ชม., rectum ว่างบน DRE), hypothyroidism, spinal dysraphism",exp:"Functional constipation (Rome IV) พบ &gt;90% ของท้องผูกในเด็ก",rubric:"ได้ = fecal impaction/functional constipation (± DDx Hirschsprung)",
   pts:[CR(P("Fecal impaction / functional constipation","impaction","constipation","ท้องผูก","fecal load")),P("Mentions Hirschsprung as DDx","hirschsprung")]}),
  B("3.2 Initial management in detail.",4,{tags:["spot"],ans:"<b>Disimpaction</b>: oral <b>PEG 3350 1–1.5 g/kg/วัน 3–6 วัน</b> (first-line) หรือ rectal enema (phosphate/saline) วันละครั้ง 3–6 วัน · ยาแก้ปวด ประเมิน red flags · อธิบายผู้ปกครองเรื่อง overflow soiling (ไม่ใช่ความตั้งใจของเด็ก) · ตรวจ DRE/ดู spine, ตรวจ TSH/Ca ถ้าสงสัย",exp:"ESPGHAN/NASPGHAN 2014",rubric:"ได้ = disimpaction ด้วย PEG หรือ enema + education",
   pts:[CR(P("Disimpaction with oral PEG or enemas","peg","polyethylene","enema","disimpact","สวน")),P("Dose/duration 3–6 days","3-6","3–6","1-1.5","1.5 g"),P("Parent education","education","อธิบาย","ผู้ปกครอง")]}),
  B("3.3 Definitive treatment.",3,{tags:["spot"],ans:"<b>Maintenance therapy</b>: PEG 0.4–0.8 g/kg/วัน นาน ≥2 เดือน (ต่อเนื่องจนถ่ายปกติ ≥1 เดือน แล้วค่อยลด) · <b>toilet training</b> นั่งส้วมหลังอาหาร 5–10 นาที วันละ 2–3 ครั้ง, diary · อาหารใย น้ำพอเพียง กิจกรรม · ถ้าเป็น Hirschsprung → <b>pull-through operation</b>",exp:"Hirschsprung ที่ได้รับการวินิจฉัยด้วย rectal suction biopsy รักษา definitive ด้วย transanal endorectal pull-through/Duhamel",rubric:"ได้ = maintenance laxative + behavioral",
   pts:[CR(P("Maintenance laxative","maintenance","peg","laxative","ยาระบาย")),P("Toilet training/behavioral","toilet","behavio","นั่งส้วม","training"),P("Diet/fluids","fiber","fibre","water","ใยอาหาร","น้ำ")]})
 ),
 interp:"เด็กท้องผูก + AXR fecal loading: disimpaction → maintenance",
 summary:["Functional constipation: Rome IV","Disimpaction: PEG 1–1.5 g/kg/วัน 3–6 วัน หรือ enema","Maintenance PEG 0.4–0.8 g/kg/วัน ≥2 เดือน + toilet training","Red flags: เริ่มตั้งแต่แรกเกิด, ขี้เทาช้า, failure to thrive, bloody diarrhea, abnormal spine → Hirschsprung/อื่น","Hirschsprung: rectal suction biopsy → pull-through"]}),

/* ===== MEQ 4 ===== */
SA({page:3,orig:"MEQ 4",num:"SA 4",sub:"Other spot",title:"Spot — elderly patient with outpouchings of the sigmoid colon",
 stem:`A 68-year-old man has intermittent mild left lower abdominal discomfort and bloating. Colonoscopy shows multiple small outpouchings of the sigmoid colon wall with no inflammation or bleeding.<br>1. What is the diagnosis?<br>2. Give two complications of this condition.`,
 gray:"ให้ประวัติ diverticulosis · 1. Dx 2. Complication 2 ข้อ",
 flag:"ประวัติและผลส่องกล้อง Claude แต่ง (ต้นฉบับบอกแค่ว่าให้ประวัติ diverticulosis)",
 notes:"ต้นฉบับ: \"ให้ประวัติ diverticulosis\" คำถาม Dx และ complication 2 ข้อ · ไม่มีรูป ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("4.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Diverticulosis of the sigmoid colon</b> (diverticular disease)",exp:"Pseudodiverticula (mucosa + submucosa ยื่นผ่านจุดอ่อนที่ vasa recta เข้าผนัง) · ตะวันตก: sigmoid; เอเชีย: right-sided บ่อย",rubric:"ได้ = diverticulosis",
   pts:[CR(P("Diverticulosis","diverticul"))]}),
  B("4.2 Two complications.",2,{tags:["spot"],ans:"<b>Diverticular bleeding</b> (painless massive hematochezia, right-sided บ่อย) · <b>Acute diverticulitis</b> → abscess, perforation/peritonitis, <b>fistula</b> (colovesical: pneumaturia/fecaluria), <b>stricture/large bowel obstruction</b>",exp:"Hinchey: I pericolic abscess, II pelvic/distant abscess, III purulent peritonitis, IV fecal peritonitis",rubric:"1 คะแนนต่อข้อ",
   pts:[G("Complications (≥2)",2,P("Bleeding","bleed","เลือดออก","hematochezia"),P("Diverticulitis","diverticulitis","อักเสบ"),P("Abscess/perforation","abscess","perforat","ทะลุ","ฝี"),P("Fistula","fistula"),P("Stricture/obstruction","stricture","obstruct","ตีบ","อุดตัน"))]})
 ),
 interp:"Diverticulosis และภาวะแทรกซ้อน",
 summary:["Diverticulosis: ส่วนใหญ่ไม่มีอาการ","Complications: bleeding, diverticulitis (abscess, perforation, fistula, stricture)","Uncomplicated diverticulitis: อาจไม่ต้อง ATB ในรายเลือก","Abscess &gt;3–4 cm → percutaneous drainage","Hinchey III–IV → surgery (Hartmann หรือ resection + anastomosis ± diversion)"]}),

/* ===== MEQ 5 ===== */
SA({page:3,orig:"MEQ 5",num:"SA 5",sub:"Vascular/Ulcer",title:"Spot — toes of a patient with limb-threatening ischemia",
 stem:`A photograph shows the foot of a diabetic patient with black, dry, shrivelled great toe and left little toe. The popliteal pulses are 2+ bilaterally, but the dorsalis pedis and posterior tibial pulses are absent.<br>1. Describe the lesion.<br>2. Where is the arterial lesion?<br>3. Which physical examinations would you perform?`,
 gray:"ให้รูป chronic threatening limb ischemia ที่นิ้วโป้ง + นิ้วก้อยซ้าย - popliteal a. pulse = 2+ ทั้ง 2 ข้าง แต่ pulse ล่างจากนั้น 0 · 1. Describe lesion 2. Location of lesion 3. ตรวจร่างกายอะไร",
 flag:NOIMG+" · ประวัติเบาหวานและการบรรยายภาพ Claude เติม",imgAlt:"นิ้วโป้งและนิ้วก้อยเท้าซ้ายดำ แห้ง เหี่ยว มีขอบเขตชัด",
 notes:"ต้นฉบับ: \"ให้รูป chronic threatening limb ischemia ที่นิ้วโป้ง + นิ้วก้อยซ้าย\" และ \"popliteal a. pulse = 2+ ทั้ง 2 ข้าง แต่ pulse ล่างจากนั้น 0\" · ไม่มีรูปในไฟล์ ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("5.1 Describe the lesion.",2,{tags:["spot"],ans:"<b>Dry gangrene</b> ของนิ้วโป้งและนิ้วก้อยเท้าซ้าย: สีดำ แห้ง เหี่ยว มี line of demarcation ชัด ไม่มีหนอง/บวมแดงรอบ (ไม่ใช่ wet gangrene) · เป็นอาการของ <b>chronic limb-threatening ischemia (CLTI)</b> (Fontaine IV / Rutherford 6 ถ้าเนื้อตายเกิน forefoot... ในที่นี้ Rutherford 5)",exp:"Wet gangrene = ติดเชื้อร่วม บวมแดง หนอง กลิ่น → emergency debridement/amputation",rubric:"ได้ = dry gangrene + demarcation",
   pts:[CR(P("Dry gangrene","dry gangrene","gangrene","เนื้อตาย")),P("Line of demarcation, no infection","demarcat","ขอบเขต","no infection","ไม่มีหนอง")]}),
  B("5.2 Location of the arterial lesion.",2,{tags:["spot"],ans:"Popliteal pulse ปกติ แต่ DP/PT คลำไม่ได้ → <b>infrapopliteal (tibial/peroneal) arterial occlusion</b> — ลักษณะพบบ่อยใน <b>diabetes</b> (และ CKD, Buerger's disease ในคนหนุ่มสูบบุหรี่)",exp:"Pulse ที่คลำได้ระดับสุดท้ายบอกว่ารอยโรคอยู่ต่ำกว่าระดับนั้น: femoral (−) = aortoiliac, popliteal (−) = femoropopliteal, distal (−) = tibial",rubric:"ได้ = below-knee/tibial arteries",
   pts:[CR(P("Infrapopliteal / tibial arteries","infrapopliteal","tibial","below knee","below-knee","peroneal","ใต้เข่า"))]}),
  B("5.3 Physical examinations to perform.",3,{tags:["spot"],ans:"<b>คลำชีพจร</b>ทุกระดับสองข้าง (femoral, popliteal, DP, PT) · <b>ABI</b> (≤0.9 ผิดปกติ; ใน DM อาจสูงเท็จจาก calcification &gt;1.3 → <b>toe–brachial index</b>/toe pressure) · capillary refill, <b>Buerger's test</b> (elevation pallor + dependent rubor), skin temperature, hair loss, ulcer · neurological exam (sensation ด้วย monofilament — diabetic neuropathy) · ตรวจการติดเชื้อ (probe-to-bone)",exp:"Imaging ต่อ: duplex US, CTA/angiography เพื่อ revascularization",rubric:"1 คะแนนต่อการตรวจที่เหมาะสม",
   pts:[G("Examinations (≥3)",3,P("Palpate all pulses","pulse","ชีพจร","palpat"),P("ABI / toe pressure","abi","ankle-brachial","ankle brachial","toe"),P("Buerger's test","buerger"),P("Capillary refill/temperature","capillary","temperature","อุณหภูมิ"),P("Monofilament/neuro","monofilament","sensation","neuro","ประสาท"))]})
 ),
 interp:"CLTI กับ dry gangrene: บรรยาย ระบุตำแหน่งรอยโรค และการตรวจ",
 summary:["CLTI: rest pain, ulcer, gangrene &gt;2 สัปดาห์ + PAD ยืนยัน","Pulse level บอกตำแหน่ง occlusion","DM: tibial disease, ABI สูงเท็จ → TBI","Dry gangrene → รอ demarcation + revascularize ก่อน amputation","Wet gangrene → emergency debridement/guillotine amputation + ATB"]}),

/* ===== MEQ 6 ===== */
SA({page:3,orig:"MEQ 6",num:"SA 6",sub:"Breast",title:"Spot — two breast images, A and B",
 stem:`Two images of the same breast are shown, labelled A and B. They show an irregular spiculated mass in the upper outer quadrant with associated fine pleomorphic microcalcifications.<br>1. Name the imaging.<br>2. Which views are A and B?<br>3. Describe the imaging findings.<br>4. What is the diagnosis?<br>5. What is the next investigation?`,
 gray:"ให้ภาพ mammogram มา 2 views (A. mediolateral oblique B. craniocaudal view) · 1. ชื่อ imaging 2. View อะไรบ้าง (A? B?) 3. Describe imaging 4. Dx 5. Next investigation",
 flag:NOIMG+" · ลักษณะรอยโรคใน stem Claude แต่ง (ไฟล์บอกแค่ชื่อ view)",imgAlt:"Mammogram 2 ภาพ: A ท่าเฉียง (เห็น pectoralis เป็นสามเหลี่ยม) B ท่าบน-ล่าง",
 notes:"ต้นฉบับ: \"ให้ภาพ mammogram มา 2 views (A. mediolateral oblique B. craniocaudal view)\" — ผู้จดใส่คำตอบของข้อ 2 ไว้ในวงเล็บ · ไม่มีรูป ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — คำตอบเรื่องชื่อ view ตามที่ผู้จดใส่ไว้ (A = MLO, B = CC) ความมั่นใจสูง; ลักษณะรอยโรคเราแต่งเอง",
 parts:S(
  B("6.1 Name the imaging.",1,{tags:["spot"],ans:"<b>Mammogram (mammography)</b>",exp:"Screening mammography แนะนำเริ่มอายุ 40 ปี",rubric:"ได้ = mammogram",pts:[CR(P("Mammogram","mammo"))]}),
  B("6.2 Which views are A and B?",2,{tags:["spot"],ans:"<b>A = mediolateral oblique (MLO)</b> — เห็น pectoralis major เป็นแถบสามเหลี่ยมมุมบน ครอบคลุม axillary tail · <b>B = craniocaudal (CC)</b>",exp:"Screening mammogram มาตรฐาน = 2 views ต่อข้าง (CC + MLO)",rubric:"1 คะแนนต่อ view",
   pts:[P("A = MLO","mlo","mediolateral","oblique"),P("B = CC","\\bcc\\b","craniocaudal","cranio")]}),
  B("6.3 Describe the imaging.",2,{tags:["spot"],ans:"<b>Irregular, spiculated, high-density mass</b> ที่ upper outer quadrant + <b>fine pleomorphic/linear branching microcalcifications</b> · ± skin thickening, nipple retraction, axillary node",exp:"BI-RADS descriptors: mass shape/margin/density, calcification morphology/distribution, architectural distortion, asymmetry",rubric:"ได้ = mass + margin spiculated + calcification",
   pts:[CR(P("Spiculated irregular mass","spicul","irregular","mass","ก้อน")),P("Microcalcifications","calcif","หินปูน"),P("Location upper outer quadrant","upper outer","uoq")]}),
  B("6.4 Diagnosis.",1,{tags:["spot"],ans:"<b>Breast cancer (BI-RADS 5 — highly suggestive of malignancy)</b>",exp:"BI-RADS 5 = ≥95% มะเร็ง",rubric:"ได้ = breast cancer/BI-RADS 5",
   pts:[CR(P("Breast cancer / BI-RADS 5","cancer","carcinoma","malignan","bi-rads 5","birads 5","มะเร็ง"))]}),
  B("6.5 Next investigation.",2,{tags:["spot"],ans:"<b>Ultrasound-guided core needle biopsy</b> (หรือ stereotactic biopsy สำหรับ calcification) + ER/PR/HER2/Ki-67 · US axilla ± FNA/core ของ node ที่ผิดปกติ",exp:"Triple assessment: clinical + imaging + pathology",rubric:"ได้ = core needle biopsy",
   pts:[CR(P("Core needle biopsy","core","biopsy","ตัดชิ้นเนื้อ"))]})
 ),
 interp:"Mammogram: views, BI-RADS และ next step",
 summary:["MLO: เห็น pectoralis + axillary tail · CC: บน–ล่าง","Malignant features: spiculated mass, fine pleomorphic/linear branching calcifications","BI-RADS 0 incomplete, 1 negative, 2 benign, 3 probably benign (6-mo f/u), 4 suspicious, 5 highly suggestive, 6 proven","BI-RADS 4–5 → core needle biopsy","ผู้หญิงอายุ &lt;30–35 ใช้ US เป็นหลัก"]}),

/* ===== MEQ 7 ===== */
SA({page:3,orig:"MEQ 7",num:"SA 7",sub:"Anorectal",title:"Spot — perianal lesion for 2 days",
 stem:`A photograph shows the anal verge of a 30-year-old woman with severe pain during and after defecation and bright red blood on the toilet paper for 2 days. There is a linear tear in the posterior midline of the anoderm.<br>1. Describe the lesion.<br>2. What is the diagnosis?<br>3. How would you manage it?`,
 gray:"ให้รูป anal fissure บอกเป็นมา 2 วัน · 1. บรรยาย lesion 2. Dx 3. Mx",
 flag:NOIMG+" · อายุ อาการ และการบรรยายภาพ Claude แต่ง",imgAlt:"รอยแยกตามยาวที่ anoderm แนว posterior midline",
 notes:"ต้นฉบับ: \"ให้รูป anal fissure บอกเป็นมา 2 วัน\" · ไม่มีรูปในไฟล์ ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("7.1 Describe the lesion.",2,{tags:["spot"],ans:"รอยแยกตามยาว (longitudinal tear) ของ anoderm ใต้ dentate line ที่ <b>posterior midline</b> ขอบเรียบ ไม่มี sentinel pile/hypertrophied papilla/เห็น internal sphincter = <b>acute</b> (&lt;6 สัปดาห์)",exp:"Chronic fissure: &gt;6–8 สัปดาห์, sentinel tag, hypertrophied anal papilla, เห็นใยกล้ามเนื้อ IAS",rubric:"ได้ = linear tear posterior midline + acute features",
   pts:[CR(P("Longitudinal tear in anoderm","tear","fissure","แยก","linear","longitudinal")),P("Posterior midline","posterior","midline","6 นาฬิกา","6 o"),P("Acute features (no sentinel tag)","acute","sentinel","no skin tag")]}),
  B("7.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Acute anal fissure</b>",exp:"Fissure ไม่อยู่ midline/หลายแผล → นึกถึง Crohn, TB, HIV, syphilis, cancer",rubric:"ได้ = acute anal fissure",
   pts:[CR(P("Acute anal fissure","anal fissure","fissure"))]}),
  B("7.3 Management.",3,{tags:["spot"],ans:"<b>Conservative first-line</b>: high-fiber diet + น้ำ, stool softener/bulk laxative, <b>warm sitz bath</b>, topical anesthetic (lidocaine) · ส่วนใหญ่หายใน 4–6 สัปดาห์ · ถ้าไม่หาย: topical <b>diltiazem 2%</b> หรือ GTN 0.2–0.4% (chemical sphincterotomy) · botulinum toxin · chronic ที่ล้มเหลว → <b>lateral internal sphincterotomy</b>",exp:"Acute fissure ส่วนใหญ่หายภายใน 6 สัปดาห์ด้วยการรักษาแบบอนุรักษ์",rubric:"ได้ = fiber/softener + sitz bath (+ topical CCB/GTN ถ้าไม่หาย)",
   pts:[CR(P("Fiber/stool softener","fiber","fibre","softener","laxative","ใยอาหาร","ยาระบาย")),P("Sitz bath","sitz","แช่ก้น","warm"),P("Topical analgesic/diltiazem/GTN","diltiazem","gtn","nitro","lidocaine","topical"),P("LIS if chronic/failed","sphincterotomy","lis")]})
 ),
 interp:"Acute anal fissure: posterior midline, conservative treatment",
 summary:["Anal fissure 90% posterior midline","Acute: conservative (fiber, sitz bath)","Chronic: topical diltiazem/GTN → Botox → LIS","Lateral (atypical) fissure → หาสาเหตุอื่น","LIS เสี่ยง incontinence เล็กน้อย"]}),

/* ===== MEQ 8 ===== */
SA({page:3,orig:"MEQ 8",num:"SA 8",sub:"Imaging film",title:"Spot — an upright abdominal radiograph",
 stem:`An abdominal radiograph is shown. It shows multiple dilated central bowel loops with valvulae conniventes crossing the full width of the lumen, multiple air–fluid levels in a step-ladder pattern, and little gas in the colon.<br>1. Which view is this?<br>2. Describe the findings.<br>3. What is the diagnosis?`,
 gray:"ให้รูป film abdomen (upright) เป็นลักษณะ bowel obstruction แต่ไม่ชัวว่าเป็น large/ small bowel obstruction · 1. View ไหน 2. บรรยาย finding 3. Dx",
 flag:NOIMG+" · ผู้จดไม่แน่ใจว่า SBO หรือ LBO — Claude บรรยายภาพเป็น small bowel obstruction",imgAlt:"ฟิล์มท้องท่ายืน ลำไส้เล็กขยายหลายห่วงตรงกลาง มี air-fluid level หลายระดับ",
 notes:"ต้นฉบับ: \"ให้รูป film abdomen (upright) เป็นลักษณะ bowel obstruction แต่ไม่ชัวว่าเป็น large/ small bowel obstruction\" · ไม่มีรูป ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจต่ำว่าภาพจริงเป็น SBO หรือ LBO; คำตอบอิงคำบรรยายที่เราแต่ง และใน exp อธิบายวิธีแยก",
 parts:S(
  B("8.1 Which view?",1,{tags:["spot"],ans:"<b>Upright (erect) plain abdominal radiograph</b> (ส่วนหนึ่งของ acute abdomen series ร่วมกับ supine abdomen + upright CXR)",exp:"ท่ายืนเห็น air-fluid level; ท่านอนหงายเห็นการกระจายของแก๊สและขนาดลำไส้ได้ดีกว่า",rubric:"ได้ = upright abdomen",pts:[CR(P("Upright/erect abdomen","upright","erect","ท่ายืน"))]}),
  B("8.2 Describe the findings.",3,{tags:["spot"],ans:"ลำไส้เล็กขยาย (&gt;3 cm) หลายห่วง อยู่ตรงกลางท้อง · <b>valvulae conniventes</b> พาดเต็มความกว้าง (stack of coins) · <b>multiple air–fluid levels แบบ step-ladder</b> · แก๊สใน colon/rectum น้อยหรือไม่มี · ไม่มี free air",exp:"LBO: ลำไส้ขยายรอบนอก (peripheral) &gt;6 cm (cecum &gt;9 cm), haustra ไม่เต็มความกว้าง, มีอุจจาระ",rubric:"ได้ = dilated small bowel + valvulae + air-fluid levels + no colonic gas",
   pts:[CR(P("Dilated small bowel loops","dilat","ขยาย")),P("Valvulae conniventes","valvulae","conniven","plicae","stack of coin"),P("Multiple air-fluid levels","air-fluid","air fluid","step"),P("Little/no colonic gas","no gas","colon","rectum","ไม่มีแก๊ส")]}),
  B("8.3 Diagnosis.",1,{tags:["spot"],ans:"<b>Small bowel obstruction</b> (สาเหตุบ่อย: adhesion, hernia)",exp:"สาเหตุ SBO: adhesion (บ่อยสุดในผู้ที่เคยผ่าตัด), hernia (บ่อยสุดในผู้ไม่เคยผ่าตัด), tumor, Crohn, gallstone ileus",rubric:"ได้ = SBO",pts:[CR(P("Small bowel obstruction","small bowel obstruction","sbo","small bowel"))]})
 ),
 interp:"AXR: แยก SBO กับ LBO",
 summary:["SBO: central, valvulae conniventes เต็มความกว้าง, &gt;3 cm, step-ladder","LBO: peripheral, haustra ไม่เต็ม, &gt;6 cm (cecum &gt;9)","Rule 3-6-9","CT abdomen ยืนยันตำแหน่ง/สาเหตุ/strangulation","Adhesive SBO ไม่มี strangulation → NPO, NG, IV fluid, water-soluble contrast"]}),

/* ===== MEQ 9 ===== */
SA({page:3,orig:"MEQ 9",num:"SA 9",sub:"Plastic/Skin/Burn",title:"Spot — pigmented lesion of the nose",
 stem:`A photograph shows an irregular, variegated dark brown to black lesion with irregular borders on the nose of a 65-year-old woman. It has enlarged over 6 months.<br>1. What is the diagnosis?<br>2. How would you treat it?`,
 gray:"ให้รูป malignant melanoma ที่จมูกมา · 1. Dx 2. Tx",
 flag:NOIMG+" · อายุ และการบรรยายภาพ Claude แต่ง",imgAlt:"รอยโรคสีน้ำตาลเข้มถึงดำ ขอบไม่เรียบ สีไม่สม่ำเสมอ ที่จมูก",
 notes:"ต้นฉบับ: \"ให้รูป malignant melanoma ที่จมูกมา\" · ไม่มีรูป ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูงในหลักการรักษา",
 parts:S(
  B("9.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Malignant melanoma</b> (ABCDE: asymmetry, border irregular, color variegated, diameter &gt;6 mm, evolving) — ที่หน้าในผู้สูงอายุอาจเป็น lentigo maligna melanoma",exp:"DDx: pigmented BCC, seborrheic keratosis",rubric:"ได้ = melanoma",
   pts:[CR(P("Malignant melanoma","melanoma"))]}),
  B("9.2 Treatment.",4,{tags:["spot"],ans:"<b>Excisional biopsy</b> (margin 1–3 mm) เพื่อวัด <b>Breslow thickness</b> — ที่หน้าถ้าก้อนใหญ่ใช้ incisional/punch biopsy ส่วนที่หนาสุด · จากนั้น <b>wide local excision</b> ตาม Breslow (in situ 0.5–1 cm, ≤1 mm 1 cm, 1–2 mm 1–2 cm, &gt;2 mm 2 cm; ที่หน้าอาจลด margin ด้วย Mohs/staged excision) + <b>SLNB</b> ถ้า &gt;0.8 mm · <b>reconstruction</b> ของจมูก (local flap — bilobed, nasolabial, forehead flap หรือ skin graft) · adjuvant systemic therapy ตาม stage",exp:"Mohs/staged excision ใช้ในบริเวณหน้าเพื่อประหยัดเนื้อเยื่อ โดยเฉพาะ lentigo maligna",rubric:"ได้ = biopsy → WLE ตาม Breslow + SLNB + reconstruction",
   pts:[CR(P("Biopsy for Breslow thickness","biopsy","breslow")),CR(P("Wide local excision by thickness","wide","excision","margin")),P("Sentinel node biopsy","sentinel","slnb"),P("Reconstruction (flap/graft)","flap","graft","reconstruct")]})
 ),
 interp:"Melanoma ที่จมูก: biopsy → WLE + SLNB + reconstruction",
 summary:["ABCDE + ugly duckling sign","Excisional biopsy วัด Breslow","WLE margin ตามความหนา; หน้าใช้ Mohs/staged ได้","SLNB &gt;0.8 mm","Nasal reconstruction: graft, local flap, forehead flap"]}),

/* ===== MEQ 10 ===== */
SA({page:3,orig:"MEQ 10",num:"SA 10",sub:"Other spot",title:"Spot — video of hip flexion motor testing",
 stem:`A video shows the examiner testing hip flexion against resistance in both legs. The right leg moves against gravity and some resistance but is weaker than normal; the left leg overcomes full resistance.<br>1. Which muscle is being tested (and its root)?<br>2. What is the motor power of the right leg?<br>3. What is the motor power of the left leg?`,
 gray:"VDO flex hip motor test result Rt leg 4, Lt leg 5 · 1. Test muscle ไหน 2. Motor power Rt leg? 3. Motor power Lt leg?",
 flag:NOIMG+" · การบรรยายคลิป Claude แต่งตามผลที่ผู้จดบอก (ขวา 4 ซ้าย 5)",imgAlt:"คลิปตรวจกำลังกล้ามเนื้องอสะโพกต้านแรงทั้งสองข้าง",
 notes:"ต้นฉบับ: \"VDO flex hip motor test result Rt leg 4, Lt leg 5\" — ผู้จดใส่ผลไว้ · ไม่มีคลิป ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — เห็นด้วยกับผลที่ผู้จดจำได้ ความมั่นใจสูง",
 parts:S(
  B("10.1 Muscle tested.",2,{tags:["spot"],ans:"<b>Iliopsoas</b> (hip flexor) — nerve root <b>L2–L3</b> (femoral nerve/lumbar plexus)",exp:"Myotomes ขา: hip flexion L2(–L3), knee extension L3–L4, ankle dorsiflexion L4(–L5), great toe extension L5, ankle plantarflexion S1",rubric:"ได้ = iliopsoas (+ L2–L3)",
   pts:[CR(P("Iliopsoas","iliopsoas","psoas","hip flexor")),P("L2–L3","l2","l3")]}),
  B("10.2 Right leg power.",1,{tags:["spot"],ans:"<b>Grade 4/5</b> (ต้านแรงโน้มถ่วงและแรงต้านได้บางส่วน)",exp:"MRC: 0 ไม่ขยับ, 1 กล้ามเนื้อกระตุก, 2 ขยับในแนวราบ (ไม่ต้านแรงโน้มถ่วง), 3 ต้านแรงโน้มถ่วง, 4 ต้านแรงได้บางส่วน, 5 ปกติ",rubric:"ได้ = 4",pts:[CR(P("Grade 4","\\b4\\b","four"))]}),
  B("10.3 Left leg power.",1,{tags:["spot"],ans:"<b>Grade 5/5</b> (ปกติ)",exp:"กำลังปกติ = ต้านแรงเต็มที่เท่ากับข้างปกติและเหมาะกับอายุ",rubric:"ได้ = 5",pts:[CR(P("Grade 5","\\b5\\b","five","normal","ปกติ"))]})
 ),
 interp:"Motor power grading ของ hip flexion",
 summary:["MRC grade 0–5","Hip flexion = iliopsoas L2–L3","Knee extension L3–L4 · dorsiflexion L4 · EHL L5 · plantarflexion S1","Reflex: knee L3–L4, ankle S1"]}),

/* ===== MEQ 11 ===== */
SA({page:3,orig:"MEQ 11",num:"SA 11",sub:"Other spot",title:"Spot — video of a deep tendon reflex in the forearm",
 stem:`A video shows the examiner tapping the distal radius about 5 cm above the wrist with the forearm semiprone, producing elbow flexion.<br>1. Which reflex is being tested?<br>2. Which nerve root does it test?`,
 gray:"VDO brachioradialis reflex · 1. ตรวจอะไร 2. Nerve root อะไร",
 flag:NOIMG+" · การบรรยายคลิป Claude แต่ง",imgAlt:"คลิปเคาะบริเวณปลาย radius เหนือข้อมือ ข้อศอกงอ",
 notes:"ต้นฉบับ: \"VDO brachioradialis reflex\" (ผู้จดบอกคำตอบข้อ 1) · ไม่มีคลิป ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("11.1 Reflex tested.",1,{tags:["spot"],ans:"<b>Brachioradialis (supinator) reflex</b>",exp:"Inverted supinator reflex: เคาะแล้วนิ้วงอแทน brachioradialis — บ่งรอยโรค C5–C6 (LMN ที่ระดับนั้น + UMN ต่ำกว่า)",rubric:"ได้ = brachioradialis reflex",pts:[CR(P("Brachioradialis reflex","brachioradialis","supinator"))]}),
  B("11.2 Nerve root.",1,{tags:["spot"],ans:"<b>C5–C6</b> (radial nerve)",exp:"Biceps C5–C6 · brachioradialis C5–C6 (C6 เด่น) · triceps C7 · knee L3–L4 · ankle S1",rubric:"ได้ = C5–C6 (C6)",pts:[CR(P("C5–C6","c5","c6"))]})
 ),
 interp:"Deep tendon reflex: brachioradialis C5–C6",
 summary:["Biceps C5–6, brachioradialis C5–6, triceps C7","Knee L3–4, ankle S1","Grade 0 absent, 1+ ลดลง, 2+ ปกติ, 3+ เพิ่ม, 4+ clonus"]}),

/* ===== MEQ 12 ===== */
SA({page:4,orig:"MEQ 12",num:"SA 12",sub:"Imaging film",title:"Spot — two radiographs of the mandible",
 stem:`Two radiographs of a patient punched on the jaw are shown: a panoramic radiograph and a second skull view. They show a fracture line through the left angle of the mandible.<br>1. Name the two views.<br>2. What is fractured?`,
 gray:"ให้รูป left angle mandible fracture ให้รูป panoramic view &amp; towne view · 1. View อะไรบ้าง 2. อะไรหัก",
 flag:NOIMG+" · ประวัติและการบรรยายภาพ Claude แต่ง",imgAlt:"ภาพรังสี panoramic และ Towne view เห็นรอยหักที่มุมขากรรไกรล่างซ้าย",
 notes:"ต้นฉบับ: \"ให้รูป left angle mandible fracture ให้รูป panoramic view &amp; towne view\" (ผู้จดบอกคำตอบทั้งสองข้อ) · ไม่มีรูป ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ใช้คำตอบตามที่ผู้จดจำได้ ความมั่นใจสูง",
 parts:S(
  B("12.1 Name the views.",2,{tags:["spot"],ans:"<b>Panoramic radiograph (orthopantomogram, OPG)</b> และ <b>Towne view</b> (AP axial — เห็น condyle/ramus)",exp:"Mandible series: OPG, PA mandible, Towne, lateral oblique; CT ดีที่สุด",rubric:"1 คะแนนต่อ view",
   pts:[P("Panoramic / OPG","panoram","opg","orthopantomo"),P("Towne view","towne")]}),
  B("12.2 What is fractured?",2,{tags:["spot"],ans:"<b>Fracture of the left angle of the mandible</b> · มักหักคู่ (ring structure) → ตรวจ contralateral condyle/parasymphysis ด้วย",exp:"ตำแหน่งหักบ่อย: condyle, angle, body, symphysis · angle fracture สัมพันธ์กับฟันกรามซี่ที่ 3 · รักษา: ORIF (miniplate) หรือ maxillomandibular fixation",rubric:"ได้ = left mandibular angle fracture",
   pts:[CR(P("Left mandibular angle fracture","angle","mandib","ขากรรไกร"))]})
 ),
 interp:"Mandible fracture: views และตำแหน่ง",
 summary:["OPG = ภาพรวมขากรรไกรล่าง","Towne = condyle/ramus","Mandible มักหัก 2 ตำแหน่ง","Signs: malocclusion, step-off, trismus, numbness ริมฝีปากล่าง (inferior alveolar n.)","CT maxillofacial = standard"]}),

/* ===== MEQ 13 ===== */
SA({page:4,orig:"MEQ 13",num:"SA 13",sub:"Plastic/Skin/Burn",title:"Spot — a deep ulcer over the lateral hip",img:["os78b_13"],
 stem:`A bedridden patient has the ulcer shown over the lateral aspect of the hip.<br>1. Which bony prominence is under pressure?<br>2. In which position was the patient lying to cause this ulcer?`,
 gray:"(รูปแผลกดทับที่สะโพก) · 1. กดกระดูกอะไร 2. ท่าไหน",
 notes:"รูปในไฟล์: แผลกดทับลึกที่ด้านข้างสะโพก ผู้ป่วยนอนตะแคง มีสายสวนปัสสาวะ · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("13.1 Bony prominence.",2,{tags:["spot"],ans:"<b>Greater trochanter of the femur</b>",exp:"ตำแหน่งแผลกดทับตามท่า: นอนหงาย = sacrum, heel, occiput, scapula · นอนตะแคง = greater trochanter, lateral malleolus, ear, shoulder · นั่ง = ischial tuberosity",rubric:"ได้ = greater trochanter",pts:[CR(P("Greater trochanter","trochanter"))]}),
  B("13.2 Position.",1,{tags:["spot"],ans:"<b>Lateral decubitus (side-lying)</b>",exp:"ป้องกัน: พลิกตัวทุก 2 ชม., 30° tilted side-lying (ไม่ตะแคง 90° ทับ trochanter), ที่นอนลดแรงกด",rubric:"ได้ = lateral/side-lying",pts:[CR(P("Lateral decubitus","lateral","side","ตะแคง"))]})
 ),
 interp:"Pressure ulcer ตามท่านอน",
 summary:["Supine: sacrum, heel, occiput","Lateral: greater trochanter, lateral malleolus","Sitting: ischial tuberosity","Turn q2h, 30° tilt","Stage 3–4 trochanteric → tensor fascia lata flap"]}),

/* ===== MEQ 14 ===== */
SA({page:4,orig:"MEQ 14",num:"SA 14",sub:"Pediatric surgery",title:"Spot — newborn with bowel outside the abdominal wall",
 stem:`A photograph shows a newborn with loops of thickened, matted bowel protruding through a small defect to the right of an intact umbilical cord, with no covering membrane.<br>1. What is the diagnosis?<br>2. Describe the initial management.`,
 gray:"ให้รูป gastroschisis · 1. Dx 2. Initial management",
 flag:NOIMG+" · การบรรยายภาพ Claude แต่ง",imgAlt:"ทารกแรกเกิดมีลำไส้ออกนอกผนังหน้าท้องด้านขวาของสายสะดือ ไม่มีถุงคลุม",
 notes:"ต้นฉบับ: \"ให้รูป gastroschisis\" · ไม่มีรูปในไฟล์ ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("14.1 Diagnosis.",1,{tags:["spot"],ans:"<b>Gastroschisis</b>",exp:"ต่างจาก omphalocele: ขวาของสายสะดือ, ไม่มี sac, ลำไส้บวมหนา (สัมผัส amniotic fluid), associated anomaly น้อย (ยกเว้น intestinal atresia ~10%)",rubric:"ได้ = gastroschisis",pts:[CR(P("Gastroschisis","gastroschisis"))]}),
  B("14.2 Initial management.",4,{tags:["spot"],ans:"<b>ABC</b>, keep warm (สูญเสียความร้อนและน้ำมาก) · คลุมลำไส้ด้วย <b>sterile plastic bowel bag/clear wrap</b> (ใส่ตัวทารกครึ่งล่างในถุง) จัดลำไส้ไว้กลางไม่ให้บิดขั้ว (นอนตะแคงขวา) · <b>OG/NG decompression</b> · <b>IV fluid</b> (ต้องการมากกว่า maintenance) ผ่าน upper limb · broad-spectrum ATB · ตรวจ blood sugar · ส่งต่อผ่าตัด: primary closure หรือ <b>preformed silo</b> แล้วค่อยปิด · TPN",exp:"Preformed spring-loaded silo ช่วยดันลำไส้กลับทีละน้อยโดยไม่ต้องดมยา แล้วปิดผนังภายใน 3–7 วัน",rubric:"ได้ = cover bowel + NG + IV fluid + warm + ATB",
   pts:[CR(P("Cover bowel with sterile bag/wrap","bag","wrap","cover","คลุม","plastic")),P("Keep warm","warm","อุ่น","hypothermia"),CR(P("NG/OG decompression","ng","og","orogastric","nasogastric")),CR(P("IV fluid","iv fluid","fluid","สารน้ำ")),P("Antibiotics","antibiotic","atb"),P("Silo/primary closure","silo","closure","ปิด")]})
 ),
 interp:"Gastroschisis: initial management",
 summary:["Gastroschisis: ขวาของสายสะดือ ไม่มี sac","Bowel bag, warm, NG, IV fluid มาก, ATB","Silo → staged closure หรือ primary closure","Intestinal atresia ร่วม ~10%","พยากรณ์ดี (&gt;90%) ยกเว้น complex gastroschisis"]}),

/* ===== MEQ 15 ===== */
SA({page:4,orig:"MEQ 15",num:"SA 15",sub:"Imaging film",title:"Spot — plain KUB film",
 stem:`A KUB radiograph of a patient with left colicky flank pain shows a small radiopaque density along the course of the left ureter at the level of the L4 transverse process.<br>1. Describe the finding.<br>2. What is the diagnosis?`,
 gray:"ให้รูป film KUB เห็น left ureter stone · 1. Describe finding 2. Dx",
 flag:NOIMG+" · ประวัติและตำแหน่งนิ่ว Claude แต่ง",imgAlt:"ฟิล์ม KUB เห็นเงาทึบเล็กตามแนวท่อไตซ้าย",
 notes:"ต้นฉบับ: \"ให้รูป film KUB เห็น left ureter stone\" · ไม่มีรูป ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("15.1 Describe the finding.",2,{tags:["spot"],ans:"Plain KUB: <b>radiopaque calcific density</b> ขนาดเล็ก ตามแนวท่อไตซ้าย (ใกล้ปลาย transverse process L4 / ไล่ตามแนว ureter ผ่าน sacroiliac joint ลงไป ischial spine) · ไม่เห็นนิ่วในไตอื่น",exp:"แยก phlebolith (กลม ขอบเรียบ center ใส อยู่ใน pelvis ต่ำ/lateral), calcified node, vascular calcification",rubric:"ได้ = radiopaque density along left ureter",
   pts:[CR(P("Radiopaque density along left ureter","radiopaque","opaque","calcif","ทึบ","ureter"))]}),
  B("15.2 Diagnosis.",1,{tags:["spot"],ans:"<b>Left ureteric stone (ureterolithiasis)</b>",exp:"ยืนยันด้วย NCCT KUB (gold standard) · ≤5 mm ส่วนใหญ่หลุดเอง; 5–10 mm distal → MET (tamsulosin); ใหญ่/ไม่หลุด → URS หรือ SWL",rubric:"ได้ = left ureteric stone",pts:[CR(P("Left ureteric stone","ureter","stone","นิ่ว"))]})
 ),
 interp:"KUB: ureteric stone",
 summary:["KUB เห็นนิ่วทึบรังสี (calcium) ~90%","Uric acid ไม่เห็นใน KUB","Phlebolith vs stone → NCCT","แนว ureter: ปลาย transverse process → SI joint → ischial spine"]}),

/* ===== OSCE 16 ===== */
Co({page:4,orig:"16",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — necrotic infection of the perineum and scrotum",
 stem:`A photograph shows the perineum and scrotum of a 60-year-old diabetic man with fever, severe pain and blackened, necrotic skin with crepitus.<br>1. What is the diagnosis?<br>2. List 3 investigations.<br>3. List 3 treatments.`,
 gray:"ให้รูป fournier gangrene 1. ถาม Diagnosis 2. ถาม Investigate 3 อย่าง 3. ถาม Treatment 3 อย่าง",
 flag:NOIMG+" · ประวัติ (เบาหวาน ไข้) และการบรรยายภาพ Claude แต่ง",imgAlt:"ถุงอัณฑะและ perineum มีผิวหนังดำตาย บวมแดงรอบ ๆ",
 notes:"ต้นฉบับ: \"ให้รูป fournier gangrene\" คำถาม 3 ข้อ (แถวนี้มีป้าย \"(OSCE)\" = เริ่มพาร์ท OSCE) · ไม่มีรูปในไฟล์ ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("16.1 Diagnosis.",1,{tags:["img"],ans:"<b>Fournier gangrene</b> (necrotizing fasciitis of the perineum/genitalia)",exp:"Polymicrobial (aerobe + anaerobe) · ปัจจัยเสี่ยง: DM, alcoholism, immunocompromise, perianal/urethral source",rubric:"ได้ = Fournier gangrene",pts:[CR(P("Fournier gangrene","fournier","necrotizing"))]}),
  B("16.2 Three investigations.",3,{tags:["img"],ans:"CBC, electrolytes, BUN/Cr, glucose, CRP (<b>LRINEC score</b>) · <b>hemoculture</b> + tissue/pus Gram stain &amp; culture · blood lactate, ABG · imaging เมื่อไม่ชะลอการผ่าตัด: <b>CT</b> (หาแก๊สในเนื้อเยื่อ ขอบเขต แหล่ง) หรือ US/plain film (soft-tissue gas) · ตรวจหาแหล่ง: DRE, urethra",exp:"การวินิจฉัยเป็น clinical — ห้ามรอ imaging ถ้าสงสัยชัดเจน",rubric:"1 คะแนนต่อการตรวจ",
   pts:[G("Investigations (≥3)",3,P("CBC/electrolytes/glucose/Cr","cbc","electrolyte","glucose","creatinine","bun"),P("CRP/LRINEC","crp","lrinec"),P("Hemoculture/tissue culture","culture","hemoculture","gram"),P("Lactate/ABG","lactate","abg"),P("CT/imaging for gas","ct","x-ray","ultrasound","imaging","gas"))]}),
  B("16.3 Three treatments.",3,{tags:["img"],ans:"<b>Resuscitation</b> (IV fluid, sepsis bundle, ICU) · <b>broad-spectrum IV antibiotics</b> (เช่น piperacillin-tazobactam/carbapenem + clindamycin ± vancomycin) · <b>emergency radical surgical debridement</b> + second-look ทุก 24–48 ชม. · ± diverting colostomy (perianal involvement), suprapubic cystostomy (urethral source) · ควบคุมน้ำตาล · reconstruction ภายหลัง (skin graft/flap)",exp:"Mortality 20–40%; การ debridement เร็วสำคัญที่สุด",rubric:"ได้ = resuscitation + ATB + emergency debridement",
   pts:[P("Resuscitation","resusc","fluid","sepsis"),CR(P("Broad-spectrum IV antibiotics","antibiotic","atb","clindamycin","carbapenem","piperacillin")),CR(P("Emergency radical debridement","debride","excision","ผ่าตัด")),P("Diversion/cystostomy/reconstruction","colostomy","cystostomy","graft","flap")]})
 ),
 interp:"Fournier gangrene: dx, investigations, treatment",
 summary:["Fournier = necrotizing fasciitis perineum/genitalia","Risk: DM, alcohol, immunosuppression","Clinical diagnosis; LRINEC ช่วย","Treatment: resuscitation + ATB + emergency debridement + second look","Testes มักรอดเพราะเลือดมาจาก testicular artery"]}),

/* ===== OSCE 17 ===== */
Co({page:4,orig:"17",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a soft swelling of the forearm",img:["os78b_17"],
 stem:`A photograph of a forearm swelling is shown. The lump is soft, mobile, painless, about 3 cm, and has been slowly enlarging for years.<br>1. What is the diagnosis?<br>2. Give the indications for excision and describe the excision technique.`,
 gray:"ให้รูป lipoma ถาม diagnosis ถาม Indication และแนวการตัด · 1.",
 flag:"ลักษณะการคลำ Claude เติม",
 notes:"รูปในไฟล์: ก้อนนูนเรียบที่แขน · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("17.1 Diagnosis.",1,{tags:["img"],ans:"<b>Lipoma</b> (subcutaneous)",exp:"Soft, mobile, lobulated, slipping sign, ไม่ติดผิวหนัง",rubric:"ได้ = lipoma",pts:[CR(P("Lipoma","lipoma"))]}),
  B("17.2 Indications for excision and technique.",5,{tags:["img"],ans:"<b>Indications</b>: มีอาการ (เจ็บ กดเส้นประสาท จำกัดการเคลื่อนไหว), ความสวยงาม/ผู้ป่วยต้องการ, โตเร็ว, ขนาด &gt;5 cm, อยู่ลึกใต้ fascia หรือแข็ง/ติดแน่น (สงสัย liposarcoma — ต้อง MRI + core biopsy ก่อน) · <b>Technique</b>: local anesthesia · กรีดผิวตามแนว Langer's/skin crease เหนือก้อน (ยาวพอ) · dissect แยกระหว่าง capsule กับเนื้อเยื่อรอบด้วย blunt dissection · <b>enucleate ทั้งก้อนพร้อม capsule</b> · ห้ามเลือด ลด dead space (± drain ถ้าใหญ่) · เย็บปิดเป็นชั้น · ส่งพยาธิ",exp:"เหลือ capsule → recurrence · liposuction เป็นทางเลือกสำหรับก้อนใหญ่ (recurrence สูงกว่า)",rubric:"ได้ = indications + incision ตามแนวผิว + enucleation พร้อม capsule + ส่งพยาธิ",
   pts:[H("Indications",40),G("Indications (≥2)",2,P("Symptomatic","pain","เจ็บ","symptom","nerve"),P("Cosmetic/patient wish","cosmetic","สวยงาม","ต้องการ"),P("Rapid growth/large &gt;5 cm/deep","5 cm","rapid","โตเร็ว","deep","ลึก","sarcoma")),H("Technique",60),P("Local anesthesia, incision along skin lines","local","lidocaine","incision","กรีด","langer"),CR(P("Enucleate with intact capsule","enucleat","capsule","ทั้งก้อน")),P("Hemostasis, closure, send for pathology","hemostasis","pathology","พยาธิ","ห้ามเลือด")]})
 ),
 interp:"Lipoma: indications และวิธีตัด",
 summary:["Lipoma = benign soft tissue tumor ที่พบบ่อยที่สุด","Excision indications: symptomatic, cosmetic, &gt;5 cm, deep, rapid growth","Red flags → MRI + core biopsy (sarcoma)","Enucleation พร้อม capsule","ส่งพยาธิทุกราย"]}),

/* ===== OSCE 18 ===== */
Co({page:4,orig:"18",topic:"hx",sub:"Breast mass",ex:1,title:"History taking — a woman with a breast lump",
 stem:`A 42-year-old woman presents with a lump in her breast that she can feel. The examiner is observing.<br>1. Take a focused history from the patient and give your provisional diagnosis.`,
 gray:"ซักประวัติผู้ป่วยหญิงมาด้วย Breast mass คลำได้ก้อน · 1.",
 sp:"(Claude แต่ง) หญิง 42 ปี คลำพบก้อนเต้านมขวา 2 เดือน ไม่เจ็บ ค่อย ๆ โตขึ้น ไม่สัมพันธ์กับรอบเดือน ไม่มีน้ำ/เลือดออกจากหัวนม หัวนมไม่บุ๋ม ผิวไม่เปลี่ยน · น้ำหนักลด 3 kg ใน 2 เดือน ไม่ปวดกระดูก ไม่ไอ · ประจำเดือนครั้งแรก 11 ปี ยังมีประจำเดือนสม่ำเสมอ มีบุตร 1 คนเมื่ออายุ 33 ปี ให้นมบุตร 3 เดือน ใช้ยาคุมกำเนิด 10 ปี ไม่เคยตรวจ mammogram · มารดาเป็นมะเร็งเต้านมอายุ 50 ปี · ไม่ดื่มสุรา ไม่สูบบุหรี่ ไม่มีโรคประจำตัว · ผู้คุมดู: แนะนำตัว, CC, ลักษณะก้อน, อาการร่วมเฉพาะที่, อาการของการแพร่กระจาย, ปัจจัยเสี่ยง (ฮอร์โมน ครอบครัว), PMH/ยา, สรุปและ DDx",
 flag:"บทผู้ป่วยจำลองทั้งหมด Claude แต่ง",
 notes:"ต้นฉบับ: \"ซักประวัติผู้ป่วยหญิงมาด้วย Breast mass คลำได้ก้อน\" · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — checklist ตามมาตรฐานการซักประวัติก้อนเต้านม ความมั่นใจสูง",
 parts:S(
  B("18.1 Focused history and provisional diagnosis.",10,{tags:["hx"],
   ans:"<b>เริ่ม</b>: แนะนำตัว ยืนยันตัวตน ขออนุญาต · <b>CC/PI</b>: ระยะเวลา ข้างไหน ตำแหน่ง ขนาด/การเปลี่ยนแปลง เจ็บไหม สัมพันธ์กับรอบเดือน · <b>อาการเฉพาะที่</b>: nipple discharge (สี เลือด), nipple retraction, ผิวเปลี่ยน (บุ๋ม peau d'orange แผล), ก้อนรักแร้, ต่อมน้ำเหลือง · <b>อาการแพร่กระจาย/constitutional</b>: น้ำหนักลด เบื่ออาหาร ปวดกระดูก ไอ/เหนื่อย ปวดท้อง/ตัวเหลือง ปวดศีรษะ · <b>ปัจจัยเสี่ยง</b>: อายุ menarche/menopause, parity อายุมีบุตรคนแรก ให้นมบุตร, ยาคุม/HRT, ประวัติครอบครัว (breast/ovary, BRCA), เคยฉายรังสีที่อก, ก้อนเต้านม/biopsy เดิม, alcohol · <b>PMH/ยา/แพ้ยา</b> · <b>สรุป + DDx</b>: carcinoma of breast vs fibroadenoma/fibrocystic change/cyst",
   exp:"Triple assessment หลังซักประวัติ: clinical exam + imaging (US ถ้า &lt;35–40, mammogram + US ถ้า ≥40) + core biopsy",
   rubric:"ได้ตามหมวด",
   pts:[H("Opening",5),P("Introduce, identify, consent","แนะนำ","ขออนุญาต","consent"),H("Lump characteristics",25),CR(P("Duration, site, size change, pain, cyclical","ระยะเวลา","duration","ขนาด","size","เจ็บ","pain","รอบเดือน","cycl")),P("Nipple discharge/retraction, skin change","discharge","หัวนม","nipple","skin","ผิว","dimpl"),P("Axillary lump","รักแร้","axilla"),H("Metastatic symptoms",20),CR(P("Weight loss, bone pain, cough/dyspnea, jaundice, headache","น้ำหนักลด","weight","bone","กระดูก","cough","ไอ","jaundice","เหลือง")),H("Risk factors",35),CR(P("Family history breast/ovarian cancer","ครอบครัว","family","brca","มารดา")),P("Menarche/menopause, parity, breastfeeding","menarche","ประจำเดือน","menopause","parity","บุตร","ให้นม"),P("Hormone use (OCP/HRT)","ยาคุม","ocp","pill","hrt","hormone"),P("Previous breast disease/radiation","radiation","รังสี","biopsy","เคย"),H("Summary",15),CR(P("Summary with provisional diagnosis breast cancer + DDx","สรุป","summary","cancer","มะเร็ง","fibroadenoma"))]})
 ),
 interp:"ซักประวัติก้อนเต้านม",
 summary:["Lump: duration, size change, pain, cyclical, discharge, skin/nipple change, axilla","Metastasis: bone, lung, liver, brain symptoms","Risk: family history/BRCA, early menarche, late menopause, nulliparity/first birth &gt;30, HRT, radiation, alcohol","DDx: carcinoma, fibroadenoma, fibrocystic change, cyst, abscess, phyllodes","Triple assessment"]}),

/* ===== OSCE 20 ===== */
Co({page:4,orig:"20",topic:"pe",sub:"Abdomen",ex:1,title:"Physical examination — a patient with suspected acute appendicitis",
 stem:`A 22-year-old man has periumbilical pain that has moved to the right lower abdomen over 12 hours, with anorexia and low-grade fever. The examiner is observing.<br>1. Perform an abdominal examination, explaining each sign you look for.`,
 gray:"ตรวจร่างกายผู้ป่วยที่มาด้วย acute appendicitis · 1.",
 sp:"(Claude แต่ง) ชาย 22 ปี นอนนิ่ง เจ็บเวลาไอ · T 37.9 °C · ท้องไม่อืด bowel sound ลดลงเล็กน้อย · tenderness + guarding ที่ McBurney point, rebound tenderness (+), Rovsing sign (+), psoas sign (+), obturator sign (−), DRE เจ็บด้านขวา · ผู้คุมดู: เตรียม, inspection, auscultation, percussion tenderness, palpation จากจุดไม่เจ็บ, ตรวจ sign ต่าง ๆ พร้อมอธิบาย, ตรวจ hernia/อัณฑะ, สรุป",
 flag:"บทผู้ป่วยจำลองและผลตรวจ Claude แต่ง",
 notes:"ต้นฉบับ: \"ตรวจร่างกายผู้ป่วยที่มาด้วย acute appendicitis\" · ไม่มีเฉลย · OSCE 78C สถานี 3 เป็นสถานีคล้ายกัน",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("20.1 Abdominal examination for appendicitis.",10,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต ล้างมือ นอนหงาย เปิดหน้าท้องถึงขาหนีบ · <b>Inspection</b>: นอนนิ่ง หายใจท้องน้อยลง ท้องอืดไหม · <b>Auscultation</b>: bowel sound · <b>Percussion tenderness</b> · <b>Palpation</b> เริ่มจาก LLQ (ไกลจุดเจ็บ) → light → deep: <b>McBurney point tenderness</b> (1/3 จาก ASIS ไปสะดือ), <b>guarding</b>, <b>rebound tenderness</b> (หรือ cough test/percussion tenderness แทน) · <b>Rovsing sign</b> (กด LLQ เจ็บ RLQ) · <b>Psoas sign</b> (เหยียดสะโพกขวา — retrocecal) · <b>Obturator sign</b> (งอสะโพก-เข่าแล้วหมุนเข้า — pelvic) · ตรวจ hernia orifices และอัณฑะ · เสนอ DRE (pelvic appendix) · <b>สรุป</b> + Alvarado score",
   exp:"Alvarado (MANTRELS): Migration, Anorexia, Nausea/vomiting, Tenderness RLQ (2), Rebound, Elevated temp, Leukocytosis (2), Shift to left · ≥7 = likely",
   rubric:"ได้ตามหมวด",
   pts:[H("Preparation",10),P("Introduce, consent, hand hygiene, expose","แนะนำ","ขออนุญาต","ล้างมือ"),H("Inspection/auscultation",15),P("Inspection and bowel sounds","inspect","ดู","bowel sound","ฟัง"),H("Palpation",45),P("Start palpation away from pain","ไกล","away","llq","left lower"),CR(P("McBurney point tenderness","mcburney")),CR(P("Guarding and rebound tenderness","guarding","rebound")),H("Special signs",20),P("Rovsing sign","rovsing"),P("Psoas sign","psoas"),P("Obturator sign","obturator"),H("Completion",10),P("Hernia/testes, DRE, summary","hernia","อัณฑะ","testis","dre","สรุป")]})
 ),
 interp:"ตรวจร่างกาย acute appendicitis",
 summary:["McBurney point: 1/3 จาก ASIS ไปสะดือ","Rovsing, psoas (retrocecal), obturator (pelvic)","Rebound — ใช้ cough/percussion tenderness แทนได้ (นุ่มนวลกว่า)","Alvarado score","Imaging: US (เด็ก/หญิงตั้งครรภ์), CT (ผู้ใหญ่ไม่ชัด)"]}),

/* ===== OSCE 21 ===== */
Co({page:4,orig:"21",topic:"inst",sub:"Surgical instrument",title:"Instruments — patient with right upper quadrant pain",
 stem:`A 45-year-old woman has right upper quadrant pain, fever and a positive Murphy sign; ultrasound shows gallstones with a thickened gallbladder wall. Five instruments labelled A–E are laid out: a laparoscopic trocar, a laparoscope, a laparoscopic grasper, a clip applier and an L-hook electrode.<br>1. What is the diagnosis?<br>2. Name the operation.<br>3. Name each instrument A–E and its use.`,
 gray:"ผู้ป่วยเจ็บชายโครงขวา ถาม Diagnosis และถามอุปกรณ์ที่จะใช้ ถามอักษร ชื่ออุปกรณ์ ชื่อหัตถการ (มีอุปกรณ์วางอยู่ประมาณ 4-5 ชิ้น) · 1.",
 flag:"ประวัติและชุดเครื่องมือ Claude แต่ง (ไฟล์ไม่ได้บอกว่ามีเครื่องมืออะไร)",
 notes:"ต้นฉบับ: \"ผู้ป่วยเจ็บชายโครงขวา ถาม Diagnosis และถามอุปกรณ์ที่จะใช้ ถามอักษร ชื่ออุปกรณ์ ชื่อหัตถการ (มีอุปกรณ์วางอยู่ประมาณ 4-5 ชิ้น)\" · ไม่มีรูป ไม่มีเฉลย · Stem ในสถานีนี้บอกชื่อเครื่องมือให้เห็นว่ามีอะไร (ข้อสอบจริงให้ของจริงไม่มีชื่อ)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจต่ำว่าเครื่องมือจริงในข้อสอบคืออะไร; เราแต่งเป็นชุด laparoscopic cholecystectomy",
 imgAlt:"เครื่องมือ 5 ชิ้นวางบนโต๊ะ ติดป้าย A–E",
 parts:S(
  B("21.1 Diagnosis.",1,{tags:["inst"],ans:"<b>Acute calculous cholecystitis</b>",exp:"Tokyo Guidelines 2018: local inflammation (Murphy, RUQ mass/pain) + systemic (fever, CRP, WBC) + imaging",rubric:"ได้ = acute cholecystitis",pts:[CR(P("Acute cholecystitis","cholecystitis"))]}),
  B("21.2 Operation.",1,{tags:["inst"],ans:"<b>Laparoscopic cholecystectomy</b> (early, ภายใน 72 ชม.–7 วันตาม TG18 grade I–II)",exp:"Critical view of safety ก่อน clip/cut cystic duct และ artery",rubric:"ได้ = laparoscopic cholecystectomy",pts:[CR(P("Laparoscopic cholecystectomy","laparoscopic chole","lap chole","cholecystectomy"))]}),
  B("21.3 Name and use of each instrument.",5,{tags:["inst"],ans:"<b>A Trocar (port)</b> — ช่องทางใส่เครื่องมือผ่านผนังหน้าท้อง · <b>B Laparoscope</b> (กล้อง 0°/30°) — ดูภาพในช่องท้อง · <b>C Laparoscopic grasper</b> — จับดึง gallbladder (fundus ขึ้นเหนือตับ, Hartmann pouch ไปด้านข้าง) · <b>D Clip applier</b> — หนีบ cystic duct และ cystic artery ก่อนตัด · <b>E L-hook electrocautery</b> — เลาะ (dissect) gallbladder ออกจาก liver bed และ Calot triangle",exp:"Critical view of safety: เลาะ Calot triangle ให้เห็นโครงสร้าง 2 อย่างเข้า gallbladder, แยก lower 1/3 ของ gallbladder ออกจาก liver bed",rubric:"1 คะแนนต่อชิ้น",
   pts:[P("A Trocar","trocar","port"),P("B Laparoscope","laparoscope","camera","กล้อง"),P("C Grasper","grasper","forceps"),P("D Clip applier","clip"),P("E Hook electrode","hook","electro","cautery","diathermy")]})
 ),
 interp:"Acute cholecystitis + laparoscopic cholecystectomy instruments",
 summary:["TG18 diagnosis: local + systemic + imaging","Grade I–II: early lap chole","Grade III: support organ + early lap chole ในศูนย์พร้อม หรือ PTGBD","Critical view of safety ป้องกัน CBD injury","Instruments: trocar, laparoscope, grasper, clip applier, hook"]}),

/* ===== OSCE 22 ===== */
Co({page:5,orig:"22",topic:"suture",sub:"Suture material",title:"Suture materials — laparotomy with bowel resection and anastomosis",
 stem:`A picture shows an operation in which the abdomen is opened through a midline incision, a segment of small bowel is resected and the ends are joined.<br>1. Name the operation.<br>2. Which suture would you use to (a) anastomose the bowel, (b) ligate mesenteric vessels, (c) close the rectus sheath, (d) close the skin?`,
 gray:"ให้รูปตัดเปิดท้องตัดและเชื่อมลำไส้ ถาม Operation, ไหมที่ใช้ต่อลำไส้, ไหมที่ติด vss, ไหมที่ใช้เย็บ sheat, ไหมที่ใช้เย็บ skin · 1.",
 flag:NOIMG+" · ชนิดลำไส้ (small bowel) Claude เติม",imgAlt:"ภาพผ่าตัดเปิดหน้าท้อง ตัดลำไส้และต่อปลายลำไส้เข้าหากัน",
 notes:"ต้นฉบับ: ให้รูปตัดเปิดท้องตัดและเชื่อมลำไส้ ถาม operation และไหม 4 ชนิด (\"sheat\" สะกดตามต้นฉบับ = sheath) · ไม่มีรูปในไฟล์ ไม่มีเฉลย · OSCE 78C สถานี 6 คล้ายกัน (เฉลยไฟล์ 78C: exploratory laparotomy with bowel anastomosis, PDS for bowel anastomosis)",
 opinion:"ไม่มีเฉลยในไฟล์ — ไหมแต่ละงานมีหลายตัวเลือกที่ถูก ความมั่นใจปานกลาง-สูง",
 parts:S(
  B("22.1 Name the operation.",2,{tags:["suture"],ans:"<b>Exploratory laparotomy with segmental small bowel resection and anastomosis</b> (end-to-end, hand-sewn หรือ stapled)",exp:"ลำไส้ส่วนที่ตายจาก strangulation/volvulus/tumor ต้องตัดออกให้ขอบมีเลือดเลี้ยงดี แล้วต่อโดยไม่ตึง",rubric:"ได้ = laparotomy + bowel resection with anastomosis",pts:[CR(P("Laparotomy with bowel resection and anastomosis","laparotomy","resection","anastomosis"))]}),
  B("22.2 Choose sutures.",8,{tags:["suture"],ans:"(a) <b>Bowel anastomosis</b>: absorbable — <b>Vicryl (polyglactin) 3-0</b> หรือ PDS 3-0/4-0 (two-layer: inner absorbable full thickness + outer seromuscular silk/Vicryl; หรือ single-layer continuous PDS) · (b) <b>Ligate mesenteric vessels</b>: <b>silk 2-0/3-0</b> หรือ Vicryl · (c) <b>Rectus sheath (fascia) closure</b>: slowly absorbable monofilament <b>loop PDS 1</b> (หรือ nylon/Prolene 1) แบบ continuous small-bites (suture length:wound length ≥4:1) · (d) <b>Skin</b>: <b>nylon 3-0</b> interrupted หรือ skin staples",
   exp:"Small-bites technique (STITCH trial) ลด incisional hernia",
   rubric:"2 คะแนนต่องาน",
   pts:[CR(P("Anastomosis: Vicryl/PDS absorbable","vicryl","pds","polyglactin","absorbable")),P("Vessels: silk/Vicryl","silk","vicryl"),CR(P("Sheath: loop PDS/nylon/Prolene 1","loop","pds","nylon","prolene")),P("Skin: nylon or staples","nylon","staple")]})
 ),
 interp:"เลือกไหมใน laparotomy + bowel anastomosis",
 summary:["Bowel anastomosis: absorbable (Vicryl/PDS) ± silk seromuscular","Vessel ligation: silk/Vicryl","Fascia: loop PDS 1, small bites 4:1","Skin: nylon/staples","Monofilament ติดเชื้อน้อยกว่า braided"]}),

/* ===== OSCE 23 ===== */
Co({page:5,orig:"23",topic:"inst",sub:"Tube/Catheter",title:"Devices — a double-J stent and a two-way Foley catheter",
 stem:`Two devices are provided: a double-J ureteric stent and a two-way Foley catheter.<br>1. Name each device.<br>2. Give one indication for each.`,
 gray:"ให้ DJ stent 2 way foley มา ถามชื่อ ถาม indication · 1.",
 notes:"ไม่มีรูป ไม่มีเฉลย · Stem บอกชื่ออุปกรณ์ตามที่ผู้จดจำ (ข้อสอบให้ของจริง)",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 imgAlt:"สาย DJ stent ปลายม้วนสองด้าน และสาย Foley 2 ทาง",
 parts:S(
  B("23.1 Name each device.",2,{tags:["inst"],ans:"<b>Double-J (JJ) ureteric stent</b> — สายปลายม้วนรูปตัว J ทั้งสองด้าน (ปลายหนึ่งในกรวยไต อีกปลายในกระเพาะปัสสาวะ) · <b>Two-way Foley (urethral) catheter</b>",exp:"Foley 2-way vs 3-way: 3-way มีช่องสำหรับ continuous bladder irrigation ใช้หลัง TURP หรือ clot retention",rubric:"1 คะแนนต่อชื่อ",pts:[P("Double-J stent","double","dj","jj","ureteric stent"),P("Two-way Foley catheter","foley")]}),
  B("23.2 One indication for each.",4,{tags:["inst"],ans:"<b>DJ stent</b>: ระบาย <b>obstructed (infected) kidney</b> จากนิ่วท่อไต (urosepsis), หลัง ureteroscopy/URS, ureteric stricture/injury, malignant extrinsic compression, หลังผ่าตัด pyeloplasty/ureteric reimplantation · <b>Foley</b>: acute urinary retention, monitor urine output, perioperative",exp:"DJ stent ต้องนัดถอด/เปลี่ยน (ปกติ ≤3–6 เดือน) — ลืมถอด → encrustation · อาการข้างเคียง: stent symptoms (frequency, hematuria, flank pain ขณะปัสสาวะจาก reflux)",rubric:"2 คะแนนต่ออุปกรณ์",
   pts:[CR(P("DJ: relieve ureteric obstruction/after URS","obstruct","stone","นิ่ว","ureteroscopy","urs","stricture","sepsis","injury")),CR(P("Foley: retention/monitor urine output","retention","urine output","monitor","ปัสสาวะไม่ออก"))]})
 ),
 interp:"อุปกรณ์ทางเดินปัสสาวะ: DJ stent และ Foley",
 summary:["DJ stent: ระบาย upper tract","Obstructed infected kidney → DJ stent หรือ PCN ฉุกเฉิน","ต้องนัดถอด DJ (stent card/registry)","Foley 2-way: drain + balloon; 3-way: + irrigation"]}),

/* ===== OSCE 24 ===== */
Co({page:5,orig:"24",topic:"img",sub:"Clinical photograph",title:"Clinical photograph — a fungating lesion of the glans penis",
 stem:`A photograph shows an ulcerated, fungating mass on the glans penis of a 65-year-old uncircumcised man. Bilateral inguinal lymph nodes are not palpable.<br>1. What is the diagnosis?<br>2. Outline the management.`,
 gray:"Penile cancer ถาม diag และ management · 1.",
 flag:NOIMG+" · ประวัติและการบรรยายภาพ Claude แต่ง",imgAlt:"ก้อนแผลยื่นนูนเหมือนดอกกะหล่ำที่ glans penis",
 notes:"ต้นฉบับ: \"Penile cancer ถาม diag และ management\" · ไม่มีรูปในไฟล์ ไม่มีเฉลย · OSCE 78C สถานี 2 เรื่องเดียวกัน (ไฟล์เฉลย 78C: SCC of penis; incisional biopsy, penectomy margin 2 cm และ inguinal LND)",
 opinion:"ไม่มีเฉลยในไฟล์ — ใช้แนวเดียวกับเฉลย OSCE 78C เรื่องเดียวกัน ความมั่นใจสูง",
 parts:S(
  B("24.1 Diagnosis.",1,{tags:["img"],ans:"<b>Squamous cell carcinoma of the penis</b>",exp:"Risk: uncircumcised/phimosis, poor hygiene, HPV 16/18, smoking, lichen sclerosus",rubric:"ได้ = SCC penis",pts:[CR(P("Penile SCC","squamous","scc","carcinoma","cancer","มะเร็ง"))]}),
  B("24.2 Management.",5,{tags:["img"],ans:"<b>Biopsy</b> (incisional/excisional) ยืนยัน histology และ grade · ตรวจ/ประเมิน inguinal nodes (US ± FNA) · Staging: CT/MRI ตาม T stage · <b>Primary tumor</b>: organ-sparing (laser, glansectomy, wide local excision) สำหรับรอยโรคเล็ก ระดับ Tis–T1; <b>partial/total penectomy</b> ให้ margin ปลอด (ดั้งเดิม 2 cm; ปัจจุบันยอมรับ margin เล็กกว่าถ้า frozen section ปลอด) · <b>Inguinal nodes</b>: cN0 + intermediate/high risk (≥pT1b, G3) → <b>dynamic sentinel node biopsy หรือ modified inguinal lymph node dissection</b>; cN+ → radical ILND ± pelvic LND · advanced → chemotherapy (TIP)",exp:"ต่อมน้ำเหลืองขาหนีบโตตอนแรกครึ่งหนึ่งเป็น reactive",rubric:"ได้ = biopsy + penectomy/organ-sparing + inguinal node management",
   pts:[CR(P("Biopsy","biopsy","ชิ้นเนื้อ")),CR(P("Penectomy/organ-sparing excision with clear margin","penectomy","margin","excision","glansectomy")),CR(P("Inguinal node staging/dissection","inguinal","lymph node","lnd","sentinel"))]})
 ),
 interp:"Penile SCC: biopsy, primary surgery, inguinal nodes",
 summary:["Penile cancer: SCC 95%","Risk: phimosis/uncircumcised, HPV, smoking","Primary: organ-sparing vs partial/total penectomy","Nodes: cN0 high-risk → DSNB/modified ILND; cN+ → radical ILND","Prognosis ขึ้นกับ nodal status มากที่สุด"]}),

/* ===== OSCE 25 ===== */
Co({page:5,orig:"25",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — simple interrupted and vertical mattress sutures",
 stem:`A skin-suturing pad with a laceration and suturing instruments are provided. The examiner is observing.<br>1. Place one simple interrupted suture and one vertical mattress suture.`,
 gray:"เย็บ simple และ vertical suture · 1.",
 sp:"(Claude แต่ง) หุ่นผิวหนังมีแผลตรง · nylon 3-0, needle holder, toothed forceps, scissors · ผู้คุมดู: จับเครื่องมือ/เข็มถูก, simple interrupted: แทงตั้งฉาก ระยะเท่ากัน evert, vertical mattress: far–far แล้ว near–near ด้านเดียวกัน ปมด้านเดียว ขอบแผล evert, square knot",
 flag:"รายละเอียดอุปกรณ์ Claude แต่ง",
 notes:"ต้นฉบับ: \"เย็บ simple และ vertical suture\" · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("25.1 Simple interrupted and vertical mattress sutures.",10,{tags:["proc"],
   ans:"<b>Simple interrupted</b>: จับเข็ม 2/3 จากปลาย แทงตั้งฉาก ห่างขอบ ~3–5 mm ออกฝั่งตรงข้ามระยะ/ความลึกเท่ากัน · instrument tie square knot · ตัดไหม ~5 mm · <b>Vertical mattress</b>: <b>far–far</b> (ห่างขอบ ~5–8 mm ลึก) จากฝั่ง A ไป B แล้วกลับ <b>near–near</b> (ห่างขอบ ~1–2 mm ตื้น) จาก B กลับ A · ผูกปมฝั่ง A · ได้ <b>eversion</b> ดีมาก ลด dead space · ปมไม่ตึงเกิน",
   exp:"Vertical mattress: ใช้กับผิวที่มีแนวโน้มพับเข้า (คอ ข้อพับ), แผลลึก · ข้อเสีย: เส้นเย็บเป็นรอยมากกว่า (railroad) ถ้าตึง/นาน",
   rubric:"ได้ = เทคนิค simple ถูก + vertical mattress far-far/near-near + eversion + square knot",
   pts:[H("Simple interrupted",40),CR(P("Correct needle handling, perpendicular equal bites","2/3","needle holder","ตั้งฉาก","perpendicular","เท่ากัน")),P("Square knot, cut ~5 mm","square","5 mm","ตัดไหม"),H("Vertical mattress",60),CR(P("Far–far then near–near on same plane","far","near","ไกล","ใกล้")),P("Knot on one side, edge eversion","evert","ปลิ้น","one side","ด้านเดียว")]})
 ),
 interp:"เย็บ simple interrupted และ vertical mattress",
 summary:["Simple: ระยะ = ความลึก, evert","Vertical mattress: far-far → near-near, eversion ดี","Horizontal mattress: กระจายแรงตึง, hemostasis","ตัดไหมตามตำแหน่ง"]}),

/* ===== OSCE 26 ===== */
Co({page:5,orig:"26",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — hand hygiene and removal of simple and vertical mattress sutures",
 stem:`A healed sutured wound containing one simple interrupted and one vertical mattress suture is provided, with suture-removal instruments. The examiner is observing.<br>1. Perform hand hygiene.<br>2. Remove both sutures.`,
 gray:"ล้างมือ และตัดไหม simple กับ vertical · 1.",
 sp:"(Claude แต่ง) หุ่นแผลหายดีมีไหม 2 แบบ · ชุดตัดไหม (forceps, กรรไกรตัดไหม/stitch cutter), สำลี antiseptic, gauze · ผู้คุมดู: ล้างมือ 7 ขั้นตอน, ทำความสะอาดแผล, ดึงปมขึ้น ตัดไหมชิดผิวใต้ปมฝั่งตรงข้าม ไม่ให้ส่วนที่อยู่นอกผิวลากผ่านเนื้อเยื่อ, vertical mattress ตัดส่วน near loop แล้วดึงออกทางฝั่งปม, ตรวจไหมออกครบ",
 flag:"รายละเอียดอุปกรณ์ Claude แต่ง",
 notes:"ต้นฉบับ: \"ล้างมือ และตัดไหม simple กับ vertical\" · ไม่มีเฉลย",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 parts:S(
  B("26.1 Hand hygiene.",3,{tags:["proc"],ans:"ล้างมือ <b>WHO 7 ขั้นตอน</b> 40–60 วินาที (หรือ alcohol hand rub 20–30 วินาที) · เช็ดแห้ง ปิดก๊อกด้วยกระดาษ",exp:"ล้างมือทุกครั้งก่อนและหลังสัมผัสผู้ป่วยตาม WHO 5 moments",rubric:"ได้ = 7 ขั้นตอนครบ",pts:[CR(P("WHO 7-step hand hygiene","7 ขั้น","ฝ่ามือ","palm","thumb","นิ้วโป้ง","who"))]}),
  B("26.2 Remove both sutures.",7,{tags:["proc"],ans:"อธิบาย ขออนุญาต · ทำความสะอาดแผลด้วย antiseptic · <b>Simple interrupted</b>: ใช้ forceps ดึงปมขึ้นเล็กน้อย ตัดไหม<b>ชิดผิวหนังฝั่งตรงข้ามกับปม (หรือใต้ปม)</b> แล้วดึงออกทางฝั่งปม — ไม่ให้ไหมส่วนที่อยู่นอกผิว (ปนเปื้อน) ลากผ่านเนื้อเยื่อ · <b>Vertical mattress</b>: ตัด <b>near loop ฝั่งตรงข้ามปม</b> (ส่วนที่มองเห็นเล็ก ๆ) แล้วดึงไหมทั้งเส้นออกทางฝั่งปม · ตรวจว่าเอาออกครบ · ปิดแผล/steri-strip ถ้าจำเป็น · แนะนำผู้ป่วย",exp:"ถ้าแผลแยกระหว่างตัด → หยุด ปิด steri-strip",rubric:"ได้ = ตัดชิดผิว ไม่ลากไหมด้านนอกผ่านแผล + vertical mattress ถูกวิธี",
   pts:[P("Clean wound, explain","clean","ทำความสะอาด","antiseptic","อธิบาย"),CR(P("Simple: lift knot, cut close to skin, pull toward knot side","ชิดผิว","close to skin","ใต้ปม","pull","ดึง")),CR(P("Vertical mattress: cut near loop opposite knot, pull out","near loop","loop","vertical")),P("Check complete removal, steri-strip if needed","ครบ","complete","steri")]})
 ),
 interp:"ล้างมือและตัดไหม simple + vertical mattress",
 summary:["ตัดไหมชิดผิว ไม่ลากไหมส่วนนอกผ่านผิว","Vertical mattress: ตัด near loop ด้านตรงข้ามปม","ระยะตัดไหม: หน้า 3–5 วัน, ศีรษะ 7–10, ลำตัว 10–14, แขนขา/ข้อต่อ 14"]}),

/* ===== OSCE 27 ===== */
Co({page:5,orig:"27",topic:"inst",sub:"Surgical instrument",title:"Instruments — name and use four items",
 stem:`Four items are provided: curved Mayo scissors, a colostomy bag, a Richardson retractor and a polypropylene (Prolene) mesh.<br>1. Name each item and state what it is used for.`,
 gray:"ให้อุปกรณ์มา 4 อย่าง ถามว่าคืออะไร ใช้ทำอะไร 1. Curved major scissor 2. Colostomy bag ? 3. Richardson retractor 4. Prolene mesh",
 notes:"ต้นฉบับจด \"Curved major scissor\" (= curved Mayo scissors) และ \"Colostomy bag ?\" (ผู้จดไม่แน่ใจ) · ไม่มีรูป ไม่มีเฉลย · Stem บอกชื่ออุปกรณ์ตามที่ผู้จดจำ",
 opinion:"ไม่มีเฉลยในไฟล์ — ความมั่นใจสูง",
 imgAlt:"อุปกรณ์ 4 ชิ้นบนโต๊ะ",
 parts:S(
  B("27.1 Name and use.",8,{tags:["inst"],ans:"<b>Curved Mayo scissors</b> — ตัดเนื้อเยื่อหนา (fascia, กล้ามเนื้อ) · <b>Colostomy bag (ostomy pouch)</b> — รองรับอุจจาระจาก colostomy (ถุงปิดปลาย) · <b>Richardson retractor</b> — retractor มือถือใบใหญ่ แหวกผนังหน้าท้อง/แผลลึก (laparotomy) · <b>Prolene (polypropylene) mesh</b> — เสริมผนังหน้าท้องใน hernia repair (Lichtenstein, ventral)",exp:"Retractors อื่น: Army–Navy (ตื้น), Deaver (ลึก โค้ง), Balfour/Gosset (self-retaining abdominal), Weitlaner (self-retaining เล็ก)",rubric:"1 คะแนนต่อชื่อ + 1 ต่อการใช้",
   pts:[P("Curved Mayo scissors: cut thick tissue","mayo"),P("Colostomy bag: collect stool","colostomy","bag","pouch"),P("Richardson retractor: retract abdominal wall","richardson","retract"),P("Prolene mesh: hernia repair","mesh","prolene","polypropylene","hernio")]})
 ),
 interp:"Spot เครื่องมือ 4 ชิ้น",
 summary:["Mayo: เนื้อหนา · Metzenbaum: เนื้อบาง","Richardson: retractor มือถือ laparotomy","Mesh: tension-free hernioplasty","Colostomy bag: ปิดปลาย; ileostomy bag: เปิดปลาย"]})
);
})();
