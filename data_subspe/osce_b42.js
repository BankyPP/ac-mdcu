(function(){
/* Subspecialty Surgery Y4 — OSCE/MEQ ข้อสอบเก่า AC จากไฟล์รวมหลายปี → MDCU68 RoD (เพิ่ม 21 พ.ย. 2026)
   ไฟล์ SO22 = 02.2_OSCE (รวม OSCE MDCU68–72) · ไฟล์ SM21 = 02.1_MEQs (รวม MEQ MDCU68–72, มีคีย์ลายมือ) · MEQ → sec "Short Answers"
   68 R4: OSCE 11 สถานี (SO22 หน้า 65–68 ข้อ 7 ไม่มีในไฟล์) · ไม่มี MEQ */
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
const Co=o=>Object.assign({set:"MDCU68",ro:"RoD",file:"SO22",sec:"OSCE",opinion:""},o);
const SA=o=>Co(Object.assign({sec:"Short Answers",topic:"spot",file:"SM21"},o));
QB.push(

/* ===== OSCE 1 ===== */
Co({page:66,orig:"1",topic:"suture",sub:"Vertical mattress",ex:1,proc:1,title:"Local anesthesia then vertical mattress with instrument tie",
 stem:`The wound has been cleaned and draped. Demonstrate local anesthetic injection, then 1 vertical mattress suture tied with instruments. Explain each step to the patient (arm model).`,
 gray:"1. ให้แสดงวิธีการฉีดยาชาก่อนเย็บแผล ทายาฆ่าเชื้อและปูผ้าให้เรียบร้อยแล้วให้เย็บ vertical mattress 1 ปม และผูกด้วยการใช้ instrument Note : เป็นแขนจำลองมีแผลอยู่ให้พูดอธิบายขั้นตอนไปด้วย อย่าลืมบอกคนไข้ว่าจะเจ็บก่อนปักเข็ม อย่าลืมถามก่อนฉีดว่าเคยแพ้ยาชามั้ย",
 notes:"แนวคำตอบในไฟล์: อธิบายขั้นตอนไปด้วย · บอกคนไข้ก่อนปักเข็ม · ถามแพ้ยาชา · หัวไฟล์ AC OSCE Surgery Rotate 4 MDCU 68",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("1.1 Technique.",7,{tags:["suture"],ans:"อธิบายทุกขั้น · <b>ถามแพ้ยาชา</b> · <b>บอกว่าจะเจ็บก่อนปักเข็ม</b> · aspirate ฉีดช้า ทดสอบชา · <b>far-far → near-near</b> · <b>instrument tie</b> square · ปมข้างแผล",rubric:"1/ประเด็น",pts:[P("Explain each step","explain","อธิบาย"),CR(P("Ask allergy","allerg","แพ้")),CR(P("Warn before needle","warn","เจ็บ","บอก")),P("Aspirate","aspirat"),CR(P("Far-far, near-near","far","near")),P("Instrument tie","instrument")]})
 ),
 interp:"LA + VM",
 summary:["Ask allergy, warn","Far-far, near-near","Instrument tie"]}),

/* ===== OSCE 2 ===== */
Co({page:66,orig:"2",topic:"hx",sub:"Breast mass",ex:1,title:"History — right breast lump, present to examiner",
 stem:`A woman has a lump in the right breast (simulated patient). Take a history and present to the examiner.`,
 gray:"2. คนไข้หญิง มาด้วยคลำได้ก้อนในเต้านมข้างขวา (คนไข้จำลอง) ให้ซักประวัติผู้ป่วย แล้ว present อาจารย์",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("2.1 History and presentation.",8,{tags:["hx"],ans:"ก้อน: onset ขนาด โต เจ็บ cyclical · nipple discharge/retraction, ผิว · axillary lump · metastatic symptoms · menarche/menopause/LMP, parity/first child/breastfeeding, OCP/HRT · <b>family history breast/ovarian cancer</b> · previous breast disease/radiation · <b>สรุป present</b>: อายุ CC สำคัญ risk factor และ provisional/ddx (fibroadenoma, cyst, fibrocystic, carcinoma) + แผน triple assessment",rubric:"1/ประเด็น",pts:[CR(P("Lump characteristics","lump","size","ขนาด","onset")),P("Nipple/skin changes","nipple","skin"),P("Axillary/metastatic symptoms","axill","bone","weight"),CR(P("Hormonal history","menarche","menopause","parity","hormone")),CR(P("Family history","family","brca")),CR(P("Concise presentation with DDx and plan","present","ddx","triple","สรุป"))]})
 ),
 interp:"Breast lump hx",
 summary:["Hormonal + family risk","Present with DDx","Triple assessment"]}),

/* ===== OSCE 3 ===== */
Co({page:66,orig:"3",topic:"pe",sub:"Urolithiasis",ex:1,title:"Right flank pain radiating to the groin — examine and answer",
 stem:`A man has right flank pain radiating to the groin (simulated patient on the bed).<br>1. Examine and describe what you find.<br>2. Answer the examiner's questions (e.g. investigations).`,
 gray:"3. คนไข้ชายมาด้วยปวดท้องขวาล่าง ร้าวไปขาหนีบ (คนไข้จำลองนอนรอบนเตียง) 3.1 ให้ตรวจร่างกาย ตอนตรวจให้ตรวจไปบรรยายไปด้วยว่าตรวจเจออะไรบ้าง 3.2 ตรวจเสร็จแล้วให้ตอบคำถามอาจารย์ Note: คนนี้มี CVA tenderness + ตรวจท้องไม่เจออะไร - อาจารย์จะถามว่าจะส่งตรวจอะไรเพิ่มบ้าง จะถามไปเรื่อยๆ ว่าจะส่งอะไรอีกมั้ย จนหมดเวลา",
 notes:"แนวคำตอบในไฟล์: มี CVA tenderness, ตรวจท้องไม่พบอะไร · อาจารย์ถามการส่งตรวจไปเรื่อยๆ",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("3.1 Examination.",4,{tags:["pe"],ans:"V/S (ไข้) · ท้อง: soft, ไม่มี peritoneal sign (แยก appendicitis) · <b>CVA tenderness ขวา</b> · ตรวจ hernia, testis (torsion), AAA",rubric:"1/ประเด็น",pts:[P("Abdomen soft, no peritonism","soft","peritoneal","guard"),CR(P("CVA tenderness","cva","costovertebral")),P("Testis/hernia","testis","hernia"),P("Exclude AAA","aaa","aneurysm","pulsatile")]}),
  BS("3.2 Investigations.",4,{tags:["pe"],ans:"<b>UA</b> (hematuria, infection) · CBC, BUN/Cr · <b>KUB film</b> · <b>non-contrast CT KUB</b> (gold standard) · U/S KUB (hydronephrosis) · IVP (ถ้าไม่มี CT) · urine culture, serum Ca/uric acid · stone analysis",rubric:"1/ประเด็น",pts:[CR(P("Urinalysis","ua","urinalysis")),P("Creatinine","creat","bun"),P("KUB film","kub"),CR(P("Non-contrast CT KUB","ct")),P("Ultrasound or IVP","ultrasound","ivp")]})
 ),
 interp:"Ureteric colic",
 summary:["CVA tenderness, benign abdomen","Non-contrast CT KUB","UA for hematuria/infection"]}),

/* ===== OSCE 4 ===== */
Co({page:66,orig:"4",topic:"img",sub:"Urolithiasis",img:["mo66_1"],title:"Film — right renal calculi",
 stem:`Many films are given — look quickly.<br>1. Describe the abnormality.<br>2. Diagnosis.<br>3. Treatment.`,
 gray:"4. 4.1 บรรยายความผิดปกติ 4.2 Give the diagnosis 4.3 Treatment Note : จะให้ film มาหลายแผ่นมากๆ ต้องดูเร็วๆ รูปนี้เป็น Rt. Renal canaliculi",
 notes:"แนวคำตอบในไฟล์: Rt. renal calculi · ตรวจคีย์ 22 พ.ย. 2026: เดิม ‘Rx: &lt;2 ซม. ESWL/RIRS; &gt;2 ซม./staghorn PCNL’ เขียนเครื่องหมาย &lt; &gt; แบบดิบ ทำให้หน้าเว็บตัดข้อความ (เครื่องหมาย > หน้า 2 ซม. หาย) → เขียนใหม่ด้วย &lt; &gt; และแยก &lt;1 / 1–2 / &gt;2 ซม. ตาม EAU Guidelines on Urolithiasis 2025 (renal stone: &gt;20 mm PCNL; 10–20 mm SWL or endourology; &lt;10 mm SWL or RIRS)",opinion:"ความมั่นใจสูง · ตรวจคีย์ (22 พ.ย. 2026): การรักษานิ่วไตตามขนาดตาม EAU 2025 · ความมั่นใจสูง",
 parts:S(
  BS("4.1 Answer.",5,{tags:["img"],ans:"<b>Radio-opaque calculi ที่เงาไตขวา</b> · Dx: <b>right renal calculi</b> · Rx (EAU 2025): <b>&lt;1 ซม.</b> → ESWL หรือ RIRS · <b>1–2 ซม.</b> → ESWL หรือ endourology (RIRS/PCNL; lower pole ที่ไม่เอื้อต่อ ESWL → RIRS/PCNL) · <b>&gt;2 ซม. หรือ staghorn</b> → <b>PCNL</b> (first-line); ติดเชื้อ+อุดกั้น → drain ก่อน",rubric:"1/ประเด็น",pts:[CR(P("Opaque calculi right kidney","opaque","calcul","stone")),CR(P("Right renal calculi","renal")),CR(P("ESWL/RIRS/PCNL","eswl","pcnl","rirs"))]})
 ),
 interp:"Renal calculi",
 summary:["Size-based: ESWL/RIRS vs PCNL"]}),

/* ===== OSCE 5 ===== */
Co({page:67,orig:"5",topic:"img",sub:"Colorectal",img:["mo67_1","mo67_2"],title:"Elderly woman with partial obstruction — barium enema",
 stem:`An elderly woman has mild features of partial gut obstruction.<br>1. What is this technique called?<br>2. Describe the findings.<br>3. Diagnosis.`,
 gray:"5. ผู้หญิง แก่ๆ อาการ gut obstruction มี cardinal signs นิดหน่อย ดู partial obstruction 5.1 การตรวจนี้เรียกว่าเทคนิคอะไร 5.2 บรรยายความผิดปกติที่พบ 5.3 Diagnosis",
 notes:"เฉลยในไฟล์: double-contrast barium enema · multiple globular outpouching of colonic wall · diverticulosis",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("5.1 Answer.",5,{tags:["img"],ans:"<b>Double-contrast barium enema</b> · <b>multiple globular outpouchings of the colonic wall</b> (sigmoid/descending) · Dx: <b>diverticulosis</b> (± stricture ทำให้ partial obstruction; ต้องแยกมะเร็งด้วย colonoscopy)",rubric:"1/ประเด็น",pts:[CR(P("Double-contrast barium enema","double","barium")),CR(P("Multiple outpouchings","outpouch","globular")),CR(P("Diverticulosis","diverticul"))]})
 ),
 interp:"Diverticulosis",
 summary:["Outpouchings on barium enema","Exclude carcinoma with colonoscopy"]}),

/* ===== OSCE 6 ===== */
Co({page:67,orig:"6",topic:"img",sub:"Mammogram",title:"Mammogram — mass in the lower outer left breast",
 stem:`A film shows a mass in the lower outer quadrant of the left breast (multiple masses and multiple axillary nodes).<br>1. Name the investigation and films.<br>2. Describe the lesion.<br>3. Diagnosis and staging.<br>4. Further imaging useful for diagnosis and staging, with what each shows.`,
 gray:"6. Film มี mass ในนมที่ lower outer left breast 6.1 บอกชื่อการตรวจ, ฟิล์มไหนชื่ออะไรบ้าง 6.2 บรรยาย lesion 6.3 Diagnosis and staging 6.4 บอกการตรวจวินิจฉัยทางรังสีวิทยาที่จะส่งเพิ่มเติม เฉพาะที่ส่งแล้วจะมีประโยชน์ต่อการวินิจฉัยชิ้นเนื้อและบอกระยะของโรค Note: มี cancer หลายก้อน และมี axillary lymph node หลายก้อน ระวังไม่ทัน",
 flag:NOIMG,imgAlt:"Mammogram เต้านมซ้าย หลายก้อน + axillary node",
 notes:"แนวคำตอบในไฟล์: มี cancer หลายก้อน และ axillary LN หลายก้อน",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("6.1 Answer.",7,{tags:["img"],ans:"<b>Mammography — CC และ MLO</b> · <b>multiple spiculated/irregular hyperdense masses ที่ lower outer quadrant เต้านมซ้าย</b> ± microcalcification + <b>multiple enlarged axillary nodes</b> · Dx: <b>multifocal/multicentric left breast carcinoma with axillary metastasis</b> (clinical ≥ stage II–III ตามขนาด/node fixation) · imaging: <b>breast + axillary US (guide core biopsy/FNA node)</b>, <b>breast MRI</b> (extent, multicentric), staging <b>CT chest/abdomen + bone scan หรือ PET-CT</b>",rubric:"1/ประเด็น",pts:[CR(P("CC and MLO","cc","mlo")),CR(P("Multiple masses lower outer left","multiple","lower outer","mass")),CR(P("Axillary nodes","axill","node")),P("Carcinoma with staging","carcinoma","stage"),CR(P("US-guided biopsy","ultrasound","biopsy")),P("MRI","mri"),P("CT/bone scan/PET","ct","bone","pet")]})
 ),
 interp:"Multifocal breast cancer",
 summary:["Count masses and nodes","US-guided biopsy; MRI for extent","CT + bone scan for staging"]}),

/* ===== OSCE 7 ===== */
Co({page:67,orig:"8",topic:"spot",sub:"Corrosive ingestion",img:["mo67_3"],title:"Woman swallowed this — ER orders",
 stem:`A woman swallowed this product. You are the ER doctor. Write the orders.`,
 gray:"8. คนไข้หญิง มาด้วยการกลืนสิ่งนี้ลงท้อง ท่านเป็นแพทย์ที่ห้องฉุกเฉิน จงเขียนคำสั่งการรักษา",
 notes:"เฉลยในไฟล์: NPO, IV fluid, IV PPI, steroid with ATB · ⚠ steroid ไม่แนะนำเป็น routine ในแนวทางปัจจุบัน",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  BS("7.1 Orders.",6,{tags:["spot"],ans:"น้ำยาล้างห้องน้ำ (acid) · airway · <b>NPO</b> · <b>IV fluid</b> · <b>IV PPI</b> · ห้ามกระตุ้นอาเจียน/ล้างท้อง/neutralize · CXR/AAS, CT ถ้าสงสัย perforation · <b>EGD 12–24 ชม.</b> · คีย์ในไฟล์: <b>steroid with antibiotic</b> (ปัจจุบันไม่แนะนำ steroid เป็น routine)",rubric:"1/ประเด็น",pts:[CR(P("NPO","npo")),CR(P("IV fluid","fluid")),CR(P("IV PPI","ppi")),P("No emesis/lavage","emesis","lavage","neutral"),P("Imaging for perforation","cxr","ct"),P("EGD","egd","endoscop"),P("Steroid/antibiotic per key","steroid","antibiot")]})
 ),
 interp:"Corrosive",
 summary:["NPO, IV fluid, IV PPI","No emesis/lavage","EGD; steroid not routine now"]}),

/* ===== OSCE 8 ===== */
Co({page:68,orig:"9",topic:"img",sub:"Bowel obstruction",img:["mo68_1"],title:"Plain film abdomen upright",
 stem:`1. What film is this?<br>2. Describe the abnormality.<br>3. Diagnosis and most common cause.`,
 gray:"9. 9.1 Film แบบนี้เรียกว่าอะไร 9.2 บรรยายความผิดปกติ 9.3 Diagnosis and Most common cause",
 notes:"เฉลยในไฟล์: plain film abdomen upright · different height in the same loop · small bowel obstruction from adhesion band",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("8.1 Answer.",5,{tags:["img"],ans:"<b>Plain film abdomen upright</b> · <b>air-fluid levels ต่างระดับใน loop เดียวกัน</b>, dilated small bowel · <b>small bowel obstruction from adhesion band</b>",rubric:"1/ประเด็น",pts:[CR(P("Plain abdomen upright","upright","erect")),CR(P("Different-height air-fluid levels","different","air-fluid","air fluid")),CR(P("SBO from adhesion","adhesion"))]})
 ),
 interp:"SBO",
 summary:["Upright film","Different heights","Adhesion"]}),

/* ===== OSCE 9 ===== */
Co({page:68,orig:"10",topic:"inst",sub:"Surgical instruments",img:["mo68_2","mo68_3","mo68_4","mo68_5"],title:"Name instruments and one use each",
 stem:`Name each item (pictures 1–4) and give one use.`,
 gray:"10. ให้บอกชื่ออุปกรณ์ และตัวอย่างการใช้งานที่จำเพาะมาชิ้นละ 1 อย่าง",
 notes:"ไม่มีเฉลยในไฟล์ · Claude อ่านรูป: 1 Allis, 2 Babcock, 3 สายยางใสหัวเขียว (NG/suction tube), 4 Metzenbaum",opinion:"ความมั่นใจปานกลาง",
 parts:S(
  B("9.1 Answer.",4,{tags:["inst"],ans:"1 <b>Allis forceps</b> — จับ fascia/เนื้อเยื่อที่จะตัดออก · 2 <b>Babcock forceps</b> — จับลำไส้/ไส้ติ่งแบบ atraumatic · 3 <b>Nasogastric/suction tube</b> — decompression · 4 <b>Metzenbaum scissors</b> — ตัดเนื้อเยื่อบอบบาง",rubric:"1/ชิ้น",pts:[P("Allis","allis"),CR(P("Babcock","babcock")),P("NG/suction tube","ng","nasogastric","suction"),P("Metzenbaum","metzenbaum")]})
 ),
 interp:"Instruments",
 summary:["Allis toothed, Babcock atraumatic"]}),

/* ===== OSCE 10 ===== */
Co({page:68,orig:"11",topic:"inst",sub:"Suture materials",title:"Catgut, PDS, silk, nylon — properties and use",
 stem:`For 4 sutures (catgut, PDS, silk, nylon): generic name, natural/synthetic, mono/multifilament, and at least 1 use each.`,
 gray:"11. ให้บอกชื่อสามัญไหม 4 เส้น ผลิตจากวัตถุดิบอะไร (natural/synthetic) เป็นไหม mono/multifilament และบอกตัวอย่างการนำแต่ละเส้นไปใช้อย่างน้อย 1 อย่าง ( Catgut PDS Silk Nylon )",
 flag:NOIMG,imgAlt:"ไหม 4 ชนิด",
 notes:"ไม่มีเฉลยในไฟล์",opinion:"ความมั่นใจสูง",
 parts:S(
  B("10.1 Answer.",8,{tags:["inst"],ans:"<b>Catgut</b> — natural (collagen), multifilament, absorbable → perineum/mucosa · <b>PDS = polydioxanone</b> — synthetic, monofilament, absorbable (ช้า) → fascia, bowel · <b>Silk</b> — natural, multifilament (braided), non-absorbable → ligation, ยึด drain · <b>Nylon = polyamide</b> — synthetic, monofilament, non-absorbable → skin",rubric:"1/ประเด็น",pts:[CR(P("Catgut natural multi absorbable","catgut")),P("Catgut use","perineum","mucosa"),CR(P("PDS polydioxanone synthetic mono","polydioxanone","pds")),P("PDS use","fascia","bowel"),CR(P("Silk natural multi non-absorbable","silk")),P("Silk use","ligat","tie"),CR(P("Nylon polyamide synthetic mono","nylon","polyamide")),P("Nylon use: skin","skin")]})
 ),
 interp:"Sutures",
 summary:["Catgut natural absorbable","PDS synthetic mono absorbable","Silk natural braided permanent; nylon skin"]}),

/* ===== OSCE 11 ===== */
Co({page:68,orig:"12",topic:"pe",sub:"Prostate",ex:1,proc:1,title:"LUTS — PR on model: hard nodular prostate",
 stem:`A man with LUTS. Examine the prostate on the model and write a description (it is a hard, fixed nodular lesion in one lobe).`,
 gray:"12. ผู้ชายมาด้วย LUTS แล้วตูดตรวจต่อมลูกหมาก บรรยายแค่เรื่องต่อมลูกหมาก เขียนตอบ (เป็น hard fixed nodular lesion อยู่มุมหนึ่ง)",
 notes:"แนวคำตอบในไฟล์: hard fixed nodular lesion อยู่มุมหนึ่ง",opinion:"ความมั่นใจสูง",
 parts:S(
  BS("11.1 Description and diagnosis.",5,{tags:["pe"],ans:"Prostate: <b>hard, fixed, nodular lesion ที่ lobe หนึ่ง</b>, ผิวขรุขระ, <b>median sulcus หาย/ไม่ชัด</b>, ไม่เจ็บ · Dx: <b>suspected carcinoma of prostate</b> → <b>PSA, MRI prostate, TRUS/MRI-guided biopsy</b>",rubric:"1/ประเด็น",pts:[CR(P("Hard nodular","hard","nodul")),P("Fixed","fixed"),P("Sulcus obliterated","sulcus"),CR(P("Carcinoma of prostate","carcinoma","cancer","ca prostate")),CR(P("PSA and biopsy","psa","biopsy"))]})
 ),
 interp:"CA prostate DRE",
 summary:["Hard nodule = CA until proven otherwise","PSA, MRI, biopsy"]})

);
})();
