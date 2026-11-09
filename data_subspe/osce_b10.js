(function(){
/* Surgery OSCE ข้อสอบเก่า AC — MDCU65 RoB (Sx 2/55) · ไฟล์ GSUP4K (01_5_MCQs_Key_4.pdf) หน้า 281–282
   หน้า 280–281 ส่วนบน = MCQ (ไม่ทำ) · OSCE 15 สถานีเริ่มกลางหน้า 281 (ข้อ 15 ต่อบรรทัดแรกหน้า 282) · "Part : Power point 14 ข้อ (ให้เวลาข้อละแปปเดียว)" หน้า 282
   รูปแบบที่ไฟล์บอก: แต่ละสถานี OSCE ผู้จดระบุ "เขียน" (สถานีเขียนตอบ ไม่มีอาจารย์) หรือ "อาจารย์คุม" (มีอาจารย์) · PowerPoint = สไลด์เปิดไปเรื่อย ๆ → sec:"PowerPoint" topic spot
   OSCE 5 (คลำต่อมลูกหมากหุ่นแล้วเขียนตอบ) ผู้จดระบุว่า "เขียน" แต่เนื้อหาเป็นการตรวจร่างกาย → topic pe (ex:1 ตามกติกา topic; sp บอกว่าไม่มีอาจารย์ถาม)
   PPT 2–4 เป็นเคสเดียวกัน (ปวดท้อง → pancreatitis) แยกสไลด์ตามเลขในไฟล์ · PPT 11–12 ก็เช่นกัน (venous ulcer) · PPT 10 มีคำถามย่อย ก/ข
   OSCE 6: ผู้จดใส่ชื่อดาราเป็นชื่อผู้ป่วยในโจทย์ → ไม่คัดลอกชื่อ (gray ใช้ [ชื่อผู้ป่วยในโจทย์])
   หน้าเป็นข้อความพิมพ์ (recall) ไม่มีรูป/ลายมือ/ไฮไลต์ในส่วน OSCE/PowerPoint → NOIMG ทุกสถานีที่อ้างรูป, ไม่มี kimg · ไม่มีสถานีที่ข้าม */
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
const Co=o=>Object.assign({set:"MDCU65",ro:"RoB",file:"GSUP4K",opinion:""},o);
QB.push(

/* ===== OSCE 1 ===== */
Co({page:281,sec:"OSCE",orig:"1",topic:"suture",sub:"Suture material",title:"Suture materials — two packets: name and type",
 stem:`Two suture packets are shown (brand names only).<br>For each: 1. Give the generic name. 2. Classify it (natural/synthetic, monofilament/multifilament, absorbable/non-absorbable). 3. Give an example of its use.`,
 gray:"1. เขียน ถามชื่อ PDS and Silk บอกว่าเป็น ชนิดไหน",
 flag:NOIMG+" · คำถามย่อยการใช้ Claude เติม",imgAlt:"ซองไหมเย็บแผล 2 ซอง",
 notes:"สถานีเขียน (ไม่มีอาจารย์)",
 parts:S(
  B("1.1 Generic name, classification and use of each suture.",5,{tags:["suture"],key:"ไฟล์ระบุไหม: PDS และ Silk (ไม่มีเฉลยชนิด)",
   ans:"<b>PDS</b> = <b>polydioxanone</b>: <b>synthetic, monofilament, absorbable</b> (ดูดซึมช้า: คงแรงดึง ~70% ที่ 4 สัปดาห์ และ ~60% ที่ 6 สัปดาห์, ดูดซึมหมด ~6 เดือน) → ใช้ <b>ปิด fascia หน้าท้อง</b> (continuous, small bites), เย็บลำไส้/ทางเดินน้ำดี, ศัลยกรรมเด็ก, subcuticular · <b>Silk</b>: <b>natural (โปรตีนจากไหม), braided multifilament, non-absorbable</b> (ทางเทคนิคถูกย่อยช้ามาก) → ผูกหลอดเลือด, <b>เย็บยึด drain/tube กับผิวหนัง</b> · ปฏิกิริยาเนื้อเยื่อมาก เสี่ยงติดเชื้อ (wicking) ไม่เหมาะกับแผลติดเชื้อ",
   exp:"เปรียบเทียบไหม absorbable: Vicryl (braided, ~3 สัปดาห์) · Monocryl (poliglecaprone, mono, เร็ว ~1–2 สัปดาห์ — subcuticular) · PDS (mono, ช้า ~6 สัปดาห์ — fascia)",
   rubric:"ได้ = polydioxanone mono absorbable + silk natural braided non-absorbable + การใช้ · บางส่วน = สลับ absorbable",
   pts:[H("PDS",50),CR(P("PDS = polydioxanone","polydioxanone","polydiox")),CR(P("PDS: monofilament, absorbable (ช้า)","mono","absorb","ละลาย","ดูดซึม")),P("PDS: ปิด fascia หน้าท้อง","fascia","abdominal wall","ผนังหน้าท้อง","closure"),
    H("Silk",50),CR(P("Silk: natural braided multifilament","natural","ธรรมชาติ","braid","multi","ถัก")),CR(P("Silk: non-absorbable","non.?absorb","ไม่ละลาย","ไม่ดูดซึม")),P("Silk: ผูกหลอดเลือด / ยึด drain","ligat","ผูก","drain","tube","ยึด")]})
 ),
 interp:"จำชื่อ generic และคุณสมบัติของไหมที่ใช้บ่อย",
 summary:["PDS = polydioxanone · mono · absorbable ช้า (~6 เดือน) · ปิด fascia","Silk = natural · braided · non-absorbable · ผูกหลอดเลือด/ยึด drain","Monofilament ติดเชื้อน้อย · braided ผูกง่ายแต่ wicking"]}),

/* ===== OSCE 2 ===== */
Co({page:281,sec:"OSCE",orig:"2",topic:"img",sub:"Mammogram",title:"Mammogram — name the study, describe the findings",seen:"คล้าย MDCU65 RoA OSCE 14 (อ่าน mammogram)",
 stem:`Radiographs of the right breast of a 56-year-old woman are shown.<br>1. What type of radiograph is this, and which views are shown?<br>2. Describe the findings.<br>3. Give the BI-RADS category and the next step.`,
 gray:"2. เขียน มี Mammogram ให้บรรยาย แล้วบอกว่าเปนฟิล์มอะไร",
 flag:"⚠ "+NOIMG+" · ไฟล์ไม่ได้บอกความผิดปกติ — Claude เลือกภาพก้อนขอบ spiculated · อายุ/คำถาม BI-RADS Claude เติม",imgAlt:"ภาพ mammogram ของเต้านมขวา 2 ท่า",
 notes:"สถานีเขียน",
 parts:S(
  B("2.1 Name the study and views.",2,{tags:["img"],
   ans:"<b>Mammogram</b> (ภาพรังสีเต้านมพลังงานต่ำ) ท่า <b>craniocaudal (CC)</b> และ <b>mediolateral oblique (MLO)</b> · บอกข้างจาก marker (R) และดูว่า MLO เห็น pectoralis major ลงมาถึงระดับหัวนม (คุณภาพดี)",
   exp:"Screening mammogram = 2 ท่าต่อข้าง (CC + MLO) · diagnostic อาจเพิ่ม spot compression/magnification views",
   rubric:"ได้ = mammogram + CC + MLO",
   pts:[CR(P("Mammogram","mammogra","แมมโม")),P("CC + MLO views","craniocaudal","\\bcc\\b","mediolateral","\\bmlo\\b")]}),
  B("2.2 Describe the findings, give the BI-RADS category and next step.",4,{tags:["img"],
   ans:"Heterogeneously dense breast (category c) · <b>ก้อนความทึบสูง (high-density mass) รูปร่างไม่สม่ำเสมอ (irregular) ขอบเป็นแฉก (spiculated margin)</b> ขนาด ~2 cm ที่ upper outer quadrant เต้านมขวา ลึกระดับกลาง · ± กลุ่มหินปูน pleomorphic ในก้อน · ± skin thickening/nipple retraction · <b>BI-RADS 5</b> (highly suggestive of malignancy) · <b>Next</b>: <b>US-guided core needle biopsy</b> + US ประเมิน axillary LN (FNA/core ถ้าผิดปกติ)",
   exp:"ลักษณะ mass ที่สงสัยมะเร็ง: irregular shape, spiculated/indistinct margin, high density · benign: oval/round, circumscribed, fat-containing",
   rubric:"ได้ = บรรยาย shape/margin/density/ตำแหน่ง + BI-RADS 5 (หรือ 4C) + core biopsy",
   pts:[P("Breast density","density","dense","ความหนาแน่น","composition"),CR(P("Mass: irregular, spiculated margin, high density","spicul","irregular","ขอบแฉก","ขอบไม่เรียบ","mass","ก้อน")),P("ตำแหน่ง (quadrant)","quadrant","upper outer","\\buoq\\b","ตำแหน่ง"),CR(P("BI-RADS 5 / 4C","bi.?rads ?5","bi.?rads ?4","4c")),P("Core needle biopsy","core","biopsy","ชิ้นเนื้อ")]})
 ),
 interp:"อ่าน mammogram: บอกชนิดภาพ/ท่า บรรยายก้อนตาม BI-RADS lexicon (shape, margin, density) และจัดการตาม category",
 summary:["Mammogram: CC + MLO","Mass suspicious: irregular + spiculated + high density","BI-RADS 4–5 → core needle biopsy","ประเมิน axillary LN ด้วย US"]}),

/* ===== OSCE 3 ===== */
Co({page:281,sec:"OSCE",orig:"3",topic:"inst",sub:"Tube/Catheter",title:"Device — a flexible tube: name, indications and complications",seen:"คล้าย MDCU66 RoD OSCE 12 (NG tube: ใช้ทำอะไร + contraindication)",
 stem:`A long flexible plastic tube with distance markings and side holes near the tip is shown.<br>1. Name this device.<br>2. List its indications.<br>3. List the complications of its use.`,
 gray:"3. เขียน ถามชื่อ NG tube ถามข้อบ่งชี้ในการใช้ ภาวะแทรกซ้อน",
 flag:NOIMG,imgAlt:"สายพลาสติกใสยาวมีขีดบอกระยะ ปลายมีรูด้านข้าง",
 notes:"สถานีเขียน",
 parts:S(
  B("3.1 Name, indications and complications.",6,{tags:["inst"],key:"ไฟล์ระบุ: NG tube (ไม่มีเฉลยข้อบ่งชี้/ภาวะแทรกซ้อน)",
   ans:"<b>Nasogastric (NG) tube</b> (Levin / Salem sump) · <b>ข้อบ่งชี้</b>: decompression (bowel obstruction, paralytic ileus, gastric outlet obstruction, หลังผ่าตัดช่องท้อง), ให้อาหาร/ยา (enteral feeding), gastric lavage, วินิจฉัย UGIB, ลดการสำลัก · <b>ภาวะแทรกซ้อน</b>: <b>ใส่ผิดตำแหน่งเข้าหลอดลม/ปอด</b> (aspiration pneumonia, pneumothorax เมื่อให้อาหารผ่านสายในปอด), <b>เข้ากะโหลกศีรษะ</b> ใน basal skull fracture, เลือดกำเดาไหล, <b>sinusitis/otitis media</b>, แผลกดทับที่ปีกจมูก (alar necrosis), esophagitis/stricture, esophageal/gastric perforation, aspiration (GERD เพิ่ม), <b>เสียน้ำและเกลือแร่จากการดูด</b> (hypokalemic hypochloremic metabolic alkalosis), สายอุดตัน/หลุด, ไม่สบาย",
   exp:"ยืนยันตำแหน่งก่อนใช้: pH aspirate ≤5.5 หรือ CXR (ปลายสายใต้กระบังลมซ้าย ผ่าน carina ตรงกลาง) · การฟังเสียงลมไม่พอยืนยัน",
   rubric:"ได้ = ชื่อ + ข้อบ่งชี้ ≥3 + ภาวะแทรกซ้อน ≥4 รวมผิดตำแหน่งเข้าหลอดลม · บางส่วน = ภาวะแทรกซ้อนไม่ครอบคลุม",
   pts:[CR(P("Nasogastric tube","nasogastric","\\bng\\b","salem","levin")),G("ข้อบ่งชี้ (≥3)",3,P("Decompression","decompress","obstruct","ileus","ระบาย"),P("Feeding / ให้ยา","feed","อาหาร","ให้ยา"),P("Lavage","lavage","ล้างท้อง"),P("UGIB diagnosis","ugib","เลือด","bleed")),
    G("ภาวะแทรกซ้อน (≥4)",4,P("ผิดตำแหน่งเข้าหลอดลม/ปอด, pneumothorax","trache","หลอดลม","bronch","lung","ปอด","pneumothorax","malposition","ผิดตำแหน่ง"),P("เข้ากะโหลกใน basal skull fracture","intracran","skull","กะโหลก"),P("Epistaxis","epistaxis","เลือดกำเดา"),P("Sinusitis / otitis media","sinusitis","otitis","ไซนัส"),P("Alar necrosis / pressure ulcer","alar","necrosis","แผลกดทับ","pressure"),P("Aspiration","aspirat","สำลัก"),P("Electrolyte: metabolic alkalosis, hypokalemia","alkalosis","hypokal","electrolyte","เกลือแร่"),P("Perforation / esophagitis","perforat","ทะลุ","esophagitis"))]})
 ),
 interp:"NG tube: ข้อบ่งชี้ และภาวะแทรกซ้อนสำคัญโดยเฉพาะการใส่ผิดตำแหน่งและความผิดปกติของเกลือแร่",
 summary:["ข้อบ่งชี้: decompression, feeding, lavage, UGIB","ภาวะแทรกซ้อนอันตราย: เข้าหลอดลม/ปอด, เข้ากะโหลก (basal skull fx)","อื่น ๆ: epistaxis, sinusitis, alar necrosis, metabolic alkalosis","ยืนยันตำแหน่ง: pH ≤5.5 หรือ CXR"]}),

/* ===== OSCE 4 ===== */
Co({page:281,sec:"OSCE",orig:"4",topic:"inst",sub:"Surgical instrument",title:"Instruments — name two instruments and state their uses",
 stem:`Two surgical instruments are displayed.<br>For each instrument: 1. Name it. 2. State its use.`,
 gray:"4. เขียน ถามชื่อ เครื่องมือ Babcock กับ towel clip ถามว่าใช้ทำไร",
 flag:NOIMG,imgAlt:"เครื่องมือผ่าตัด 2 ชิ้น ชิ้นหนึ่งปลายกว้างโค้งมีรู อีกชิ้นปลายแหลมโค้งเข้าหากัน",
 notes:"สถานีเขียน",
 parts:S(
  B("4.1 Name each instrument and state its use.",4,{tags:["inst"],key:"ไฟล์ระบุชื่อ: Babcock, towel clip (ไม่มีเฉลยการใช้)",
   ans:"<b>Babcock forceps</b>: ด้ามห่วงมีล็อก ปลายกว้างโค้งมนมีรู (fenestrated) <b>ไม่มีฟัน</b> → จับ<b>อวัยวะรูปท่อ/เนื้อเยื่อบอบบางแบบ atraumatic</b>: ลำไส้, appendix (appendectomy), ท่อนำไข่ (tubal resection), ureter, lymph node · <b>Towel clip (Backhaus)</b>: ปลายแหลมโค้งเข้าหากันมีล็อก → <b>ยึดผ้าคลุมผ่าตัด (drapes)</b> ให้อยู่กับที่, ยึดสาย suction/cautery กับผ้า, (orthopedic: จับยึดกระดูก/ผิวหนังขณะดึง)",
   exp:"เทียบกับ Allis (มีฟัน — traumatic) · towel clip ชนิด non-perforating ไม่ทะลุผ้าคลุม",
   rubric:"ได้ = ชื่อ + การใช้ถูกทั้งสอง (Babcock atraumatic)",
   pts:[CR(P("Babcock forceps","babcock")),P("Babcock: atraumatic จับลำไส้/appendix/ท่อนำไข่","atraumatic","bowel","ลำไส้","append","ไส้ติ่ง","fallopian","ท่อนำไข่","tubular"),CR(P("Towel clip (Backhaus)","towel","backhaus")),P("Towel clip: ยึดผ้าคลุม/สาย","drape","ผ้า","ยึด")]})
 ),
 interp:"เครื่องมือพื้นฐาน: Babcock (atraumatic grasper สำหรับท่อ) และ towel clip (ยึดผ้า)",
 summary:["Babcock = ไม่มีฟัน ปลายมนมีรู — ลำไส้/appendix/ท่อนำไข่","Towel clip (Backhaus) = ยึดผ้าคลุมผ่าตัด/สาย"]}),

/* ===== OSCE 5 ===== */
Co({page:281,sec:"OSCE",orig:"5",topic:"pe",sub:"DRE/Prostate",ex:1,title:"Prostate examination on a manikin — describe the finding and give the diagnosis",
 stem:`A rectal examination manikin of a 70-year-old man is provided. Palpate the prostate.<br>1. Describe what you feel.<br>2. Give the most likely diagnosis.<br>3. What investigations would you request next?`,
 gray:"5. เขียน มีให้คลำต่อมลูกหมาก ได้ก้อนแข็งๆ ขวาบน ให้บรรยาย แล้วบอก Dx",
 sp:"สถานีเขียน (ไม่มีอาจารย์ถาม) — หุ่นตรวจทางทวารหนัก: ต่อมลูกหมากขนาดประมาณปกติ ผิวไม่เรียบ มี<b>ก้อนแข็งเหมือนหิน (hard nodule) ~1 cm ที่ lobe ขวาส่วนบน (base)</b> median sulcus ยังคลำได้ ไม่กดเจ็บ rectal mucosa เลื่อนได้ · อายุผู้ป่วย Claude เติม",
 flag:"อายุ, ขนาดก้อน, คำถามย่อยการส่งตรวจ Claude เติม · ผู้จดระบุว่าเป็นสถานีเขียน แต่จัด topic pe ตามเนื้อหา (คลำหุ่น)",
 notes:"สถานีเขียนที่ต้องคลำหุ่นก่อนเขียนตอบ",
 parts:S(
  B("5.1 Describe the finding and give the diagnosis.",4,{tags:["pe"],key:"ไฟล์: ได้ก้อนแข็ง ๆ ขวาบน (ไม่ได้จด Dx ที่ตอบ)",
   ans:"<b>บรรยาย</b>: prostate size ~normal (~20–25 g), <b>ผิวไม่เรียบ มี hard (stony) nodule ~1 cm ที่ right lobe ส่วนบน (base)</b>, median sulcus ยังคลำได้, ไม่กดเจ็บ, rectal mucosa เลื่อนได้ (ไม่ fixed) · <b>Dx</b>: <b>Carcinoma of the prostate</b> (clinical T2a — คลำได้ในครึ่งของ lobe เดียว) · DDx: prostatic calculi, granulomatous prostatitis (เช่น หลัง BCG/TB), nodular BPH",
   exp:"มะเร็งต่อมลูกหมากส่วนใหญ่เกิดที่ peripheral zone (ด้านหลัง) จึงคลำได้ทาง DRE · BPH เกิดที่ transition zone · cT: T1 คลำไม่ได้ · T2a ≤ครึ่ง lobe · T2b >ครึ่ง lobe เดียว · T2c ทั้งสอง lobe · T3 ทะลุ capsule/seminal vesicle · T4 ติดอวัยวะข้างเคียง",
   rubric:"ได้ = บรรยาย hard nodule ตำแหน่งชัด + sulcus + mobility + CA prostate · บางส่วน = ตอบ BPH",
   pts:[CR(P("Hard (stony) nodule ที่ right lobe ส่วนบน","hard","แข็ง","nodule","stony")),P("Size, surface, median sulcus, tenderness, mucosa mobile","size","ขนาด","sulcus","tender","กดเจ็บ","mucosa","surface","ผิวไม่เรียบ"),CR(P("Carcinoma of prostate","carcinoma","cancer","มะเร็ง","adenocarcinoma","ca prostate"))]}),
  B("5.2 What investigations would you request next?",2,{tags:["pe"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"<b>Serum PSA</b> · <b>multiparametric MRI prostate</b> (PI-RADS) → <b>prostate biopsy</b> (MRI-targeted + systematic; ทาง transperineal หรือ TRUS) → Gleason/ISUP grade group · staging ตามความเสี่ยง: bone scan, CT/MRI pelvis หรือ PSMA PET-CT (high risk) · Cr, UA",
   exp:"EAU 2024: ทำ mpMRI ก่อน biopsy · คลำก้อนผิดปกติจาก DRE เป็นข้อบ่งชี้ biopsy แม้ PSA ปกติ",
   rubric:"ได้ = PSA + MRI + biopsy",
   pts:[CR(P("PSA","psa")),P("mpMRI prostate","mri","pi.?rads"),CR(P("Prostate biopsy (TRUS/transperineal, targeted)","biopsy","ชิ้นเนื้อ","trus","transperineal")),P("Staging: bone scan / PSMA PET","bone scan","psma","\\bpet\\b","staging")]})
 ),
 interp:"คลำต่อมลูกหมากแล้วบรรยายให้ครบ และรู้ว่า hard nodule = มะเร็งจนกว่าจะพิสูจน์ได้ว่าไม่ใช่",
 summary:["บรรยาย: size, surface, consistency, nodule (ตำแหน่ง), sulcus, tenderness, mucosa","Hard nodule ใน peripheral zone = CA prostate","ตรวจต่อ: PSA → mpMRI → biopsy (Gleason/ISUP)","cT2a ≤ครึ่ง lobe · T2b >ครึ่ง · T2c สอง lobe"]}),

/* ===== OSCE 6 ===== */
Co({page:281,sec:"OSCE",orig:"6",topic:"pe",sub:"Breast",ex:1,title:"Physical examination — breast examination in a woman with bloody nipple discharge",
 stem:`A woman presents with bloody discharge from the right nipple. A breast examination manikin is provided and the examiner is observing.<br>1. Perform a breast examination, including examination of the nipple discharge.<br>2. Give the most likely diagnosis and outline the investigations.`,
 gray:"6. อาจารย์คุม ตรวจเต้านม [ชื่อผู้ป่วยในโจทย์] มาด้วยมีเลือดออกมาจากหัวนม",
 sp:"(Claude แต่ง) หุ่นเต้านม/ผู้ป่วยจำลองหญิง 45 ปี · ไม่มีก้อนคลำได้ · กดบริเวณขอบ areola ตำแหน่ง 10 นาฬิกาของเต้านมขวาแล้วมี<b>เลือดออกจากรูท่อน้ำนมรูเดียว (single duct)</b> · ผิวหนังและหัวนมปกติ ไม่มี retraction · ต่อมน้ำเหลืองไม่โต · ถ้าถาม: มีน้ำออกเองโดยไม่ต้องบีบ ข้างเดียว 1 เดือน · มารดาเป็นมะเร็งเต้านม",
 flag:"ผลตรวจ/ประวัติ Claude แต่ง · คำถาม Dx/investigation Claude เติม",
 notes:"สถานีมีอาจารย์คุม · ผู้จดใส่ชื่อดาราที่มีชื่อเสียงเรื่องยีน BRCA เป็นชื่อผู้ป่วยในโจทย์ — ไม่คัดลอกชื่อ แต่ชี้ว่าโจทย์อาจต้องการให้นึกถึงประวัติครอบครัว/พันธุกรรม",
 parts:S(
  B("6.1 Perform the breast examination including the nipple discharge.",7,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว ขออนุญาต chaperone เปิดเผยถึงเอว · <b>ดู</b> 4 ท่า: สมมาตร ผิวหนัง (dimpling, peau d'orange) หัวนม (retraction, eczema/Paget's, คราบเลือด) · <b>คลำ</b> ท่านอนแขนไว้ใต้ศีรษะ ทั้งเต้าแบบ vertical strip รวม axillary tail · <b>ตรวจ nipple discharge</b>: <b>กดเป็นวงรอบ areola ทีละตำแหน่ง (ตามเข็มนาฬิกา) เพื่อหา trigger point</b> → บอก <b>single vs multiple duct</b>, <b>ข้างเดียว vs สองข้าง</b>, <b>ออกเอง vs ต้องบีบ</b>, สี/ลักษณะ (เลือด serous น้ำนม เขียว) · ทดสอบเลือดแฝง (ถ้าไม่ชัด) · คลำก้อนใต้ areola · <b>LN</b>: axillary, supraclavicular, infraclavicular · เทียบอีกข้าง · ขอบคุณ คลุมผ้า",
   exp:"Pathologic nipple discharge = <b>ออกเอง, ข้างเดียว, ท่อเดียว, เป็นเลือดหรือใส (serous)</b> หรือมีก้อนร่วม → ต้องตรวจเพิ่ม · physiologic = สองข้าง หลายท่อ ต้องบีบ สีขาวขุ่น/เขียว",
   rubric:"ได้ = ขออนุญาต/chaperone + ดู + คลำครบ + หา trigger point รอบ areola + บอกลักษณะ discharge (single/multiple, ข้าง, spontaneous, สี) + LN · ตก = ไม่ขออนุญาต",
   pts:[H("เตรียม + ดู",20),CR(P("แนะนำตัว ขออนุญาต chaperone","ขออนุญาต","consent","chaperone","แนะนำตัว")),P("ดูหลายท่า + หัวนม/ผิวหนัง","ยกแขน","raise","เท้าเอว","หลายท่า","4 ท่า","retract","หัวนม","nipple","dimpl"),
    H("คลำ",30),P("คลำทั้งเต้า + axillary tail อย่างเป็นระบบ","strip","spiral","เป็นระบบ","systematic","axillary tail","ทั้งเต้า"),
    H("Nipple discharge",35),CR(P("กดรอบ areola ทีละจุดหา trigger point","trigger","รอบ areola","around the areola","areola","เข็มนาฬิกา","clockwise")),CR(P("ลักษณะ: single/multiple duct, ข้าง, ออกเอง, สี","single","ท่อเดียว","multiple","spontaneous","ออกเอง","unilateral","ข้างเดียว","สีของ","สีเลือด","bloody","color","colour")),
    H("LN",15),P("Axillary + supraclavicular LN","axill","รักแร้","supraclav","ต่อมน้ำเหลือง")]}),
  B("6.2 Most likely diagnosis and investigations.",3,{tags:["pe"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"Pathologic nipple discharge (bloody, spontaneous, single duct, unilateral) · <b>สาเหตุที่พบบ่อยที่สุด: intraductal papilloma</b> · ต้องแยก <b>malignancy (DCIS/invasive papillary carcinoma)</b> (~5–15%) · DDx: duct ectasia, fibrocystic change · <b>Investigations</b>: <b>diagnostic mammogram + ultrasound (retroareolar)</b> · ถ้ายังไม่พบ: <b>MRI</b> หรือ ductography (galactography) · cytology ของ discharge ไม่ช่วยตัดมะเร็ง · พบรอยโรค → <b>core needle biopsy</b> · ไม่พบแต่ยังออกต่อเนื่อง → <b>microdochectomy (single duct excision)</b> / major duct excision เพื่อวินิจฉัยและรักษา · ประวัติครอบครัวมะเร็งเต้านม → ประเมินความเสี่ยงทางพันธุกรรม (BRCA)",
   exp:"ACR appropriateness: pathologic discharge อายุ ≥40 → mammogram + US · &lt;30 → US ก่อน",
   rubric:"ได้ = intraductal papilloma + ต้องแยกมะเร็ง + mammogram/US + biopsy/duct excision",
   pts:[CR(P("Intraductal papilloma","papilloma")),P("ต้องแยก malignancy (DCIS)","dcis","malignan","มะเร็ง","carcinoma"),CR(P("Mammogram + ultrasound","mammo","ultrasound","\\bus\\b")),P("MRI / ductography","mri","ductogra","galactogra"),P("Core biopsy / microdochectomy (duct excision)","biopsy","microdochect","duct excision","ตัดท่อ")]})
 ),
 interp:"ตรวจ nipple discharge: หา trigger point และแยก pathologic vs physiologic · bloody single-duct = intraductal papilloma แต่ต้องแยกมะเร็ง",
 summary:["Pathologic: ออกเอง ข้างเดียว ท่อเดียว เลือด/ใส ± ก้อน","กดรอบ areola ทีละจุดหา trigger point","สาเหตุบ่อยสุด: intraductal papilloma · แยก DCIS","Mammogram + US → MRI/ductography → biopsy/microdochectomy"]}),

/* ===== OSCE 7 ===== */
Co({page:281,sec:"OSCE",orig:"7",topic:"pe",sub:"Other PE",ex:1,title:"Physical examination — tourniquet test of the leg veins and interpretation",
 stem:`A simulated patient with visible dilated tortuous veins of the right leg is lying on the couch. The examiner is observing.<br>1. Perform the Trendelenburg (tourniquet) test.<br>2. Explain how to interpret the results.`,
 gray:"7. อาจารย์คุม ให้ทำ tredenlenberg แล้วอธิบายการแปลผล",
 sp:"(Claude เติม) ผู้ป่วยจำลองมีเส้นเลือดขอดขาขวาตามแนว great saphenous vein · tourniquet/สายยางรัด · ผลที่อาจารย์บอก (ถ้าทำถูก): ยืนโดยยังรัดไว้ เส้นเลือดไม่โป่งใน 30 วินาที · คลาย tourniquet แล้วเส้นเลือดโป่งเร็วจากบนลงล่าง",
 flag:"ผลการทดสอบ Claude แต่ง",
 parts:S(
  B("7.1 Perform the Trendelenburg test.",6,{tags:["pe"],
   ans:"<b>เตรียม</b>: แนะนำตัว อธิบาย ขออนุญาต เปิดขาทั้งสองข้าง · (ดูเส้นเลือดขอดในท่ายืนก่อน) · <b>ทำ</b>: ผู้ป่วยนอนหงาย → <b>ยกขาขึ้น ~45° และลูบเส้นเลือดจากล่างขึ้นบนให้เลือดดำไหลออก</b> (empty the veins) → <b>รัด tourniquet ที่ต้นขาส่วนบนใต้ saphenofemoral junction</b> (SFJ อยู่ 2–3 cm ต่ำกว่าและด้านในต่อ pubic tubercle — หรือใช้นิ้วกด SFJ) แน่นพอกด superficial vein → <b>ให้ผู้ป่วยยืนขึ้น</b> ขณะยังรัดอยู่ → สังเกตเส้นเลือด <b>30 วินาที</b> → แล้ว<b>คลาย tourniquet</b> สังเกตการโป่งต่อ · ทำซ้ำโดยย้ายตำแหน่งรัด (กลางต้นขา, ใต้เข่า) เพื่อหาระดับของ perforator ที่รั่ว · ขอบคุณ",
   exp:"การตรวจทางคลินิก (Trendelenburg, Perthes) ใช้หาตำแหน่งรั่วคร่าว ๆ · มาตรฐานปัจจุบัน = <b>duplex ultrasound</b> (reflux &gt;0.5 s ใน superficial vein) ก่อนรักษาทุกราย",
   rubric:"ได้ = empty veins ด้วยการยกขา + รัดใต้ SFJ + ยืนขึ้นขณะรัด + สังเกตก่อนและหลังคลาย · บางส่วน = ไม่ empty veins ก่อนรัด",
   pts:[P("แนะนำตัว อธิบาย ขออนุญาต","แนะนำตัว","ขออนุญาต","consent","อธิบาย"),CR(P("นอน ยกขา ลูบเลือดดำออก (empty veins)","ยกขา","elevat","empty","ลูบ","drain")),CR(P("รัด tourniquet ใต้ SFJ (ต้นขาบน)","tourniquet","รัด","sfj","saphenofemoral","ต้นขา")),P("ยืนขณะยังรัด สังเกต 30 วินาที","ยืน","stand","30 วินาที","30 s"),P("คลาย tourniquet แล้วสังเกต / ย้ายระดับรัด","คลาย","release","ย้าย")]}),
  B("7.2 Explain how to interpret the results.",4,{tags:["pe"],
   ans:"(1) <b>ขณะรัด เส้นเลือดไม่โป่ง → คลายแล้วโป่งเร็วจากบนลงล่าง</b> = <b>saphenofemoral junction incompetence</b> (รั่วที่ SFJ) · (2) <b>ขณะรัด เส้นเลือดโป่งเร็ว (&lt;30 วินาที)</b> = รั่วที่ระดับ<b>ต่ำกว่าจุดรัด</b> (incompetent perforators/SPJ) · (3) โป่งขณะรัดและโป่งมากขึ้นเมื่อคลาย = รั่วทั้ง SFJ และ perforator · (4) เติมช้า (&gt;30 วินาที) ทั้งก่อนและหลังคลาย = ไม่มี reflux สำคัญ (เติมจาก arterial inflow ปกติ) · การแปลผลนี้ใช้วางแผนเบื้องต้น ต้องยืนยันด้วย <b>duplex ultrasound</b>",
   exp:"Perthes test: รัดแล้วให้เดิน/เขย่งเท้า ถ้าเส้นเลือดโป่งมากขึ้น/ปวด = deep vein obstruction (ห้ามผ่าตัด superficial vein)",
   rubric:"ได้ = แปลผลทั้งกรณีโป่งเมื่อคลาย (SFJ) และโป่งขณะรัด (perforator ต่ำกว่า) + ยืนยัน duplex",
   pts:[CR(P("ไม่โป่งขณะรัด โป่งเมื่อคลาย = SFJ incompetence","sfj","saphenofemoral","คลาย","release")),CR(P("โป่งขณะรัด = perforator/รั่วต่ำกว่าจุดรัด","perforator","ต่ำกว่า","below","spj","saphenopopliteal")),P("ยืนยันด้วย duplex ultrasound","duplex","ultrasound","doppler")]})
 ),
 interp:"ทำและแปลผล Trendelenburg test เพื่อหาตำแหน่ง venous reflux (SFJ vs perforator)",
 summary:["ยกขา empty veins → รัดใต้ SFJ → ยืน → ดู 30 วินาที → คลาย","ไม่โป่งขณะรัด + โป่งเมื่อคลาย = SFJ incompetence","โป่งขณะรัด = perforator/SPJ ต่ำกว่าจุดรัด","ยืนยันด้วย duplex US · Perthes test = deep vein patency"]}),

/* ===== OSCE 8 ===== */
Co({page:281,sec:"OSCE",orig:"8",topic:"hx",sub:"Other history",ex:1,title:"History taking — a patient with dilated leg veins",
 stem:`A simulated patient presents with dilated, tortuous veins on the leg. The examiner is observing.<br>Take a focused history.`,
 gray:"8. อาจารย์คุม ซักประวัติ varicose vein",
 sp:"(Claude แต่ง) หญิง 48 ปี พนักงานขายในห้าง ยืนวันละ 8–10 ชม. · เส้นเลือดขาขวาโป่งขดมา 5 ปี ค่อย ๆ มากขึ้น · ขาหนัก ปวดตื้อ ๆ ตอนเย็น บวมข้อเท้าเล็กน้อย ยกขาสูงแล้วดีขึ้น · คันผิวบริเวณข้อเท้า ไม่มีแผล ไม่เคยเลือดออก ไม่เคยเส้นเลือดอักเสบ · คลอดบุตร 3 คน · ไม่เคยเป็นลิ่มเลือดอุดตันที่ขา ไม่เคยกระดูกหัก/ผ่าตัดขา · ไม่มีปวดน่องเวลาเดิน · แม่มีเส้นเลือดขอด · ไม่ใช้ยาคุม BMI 28",
 flag:"บทผู้ป่วยจำลอง Claude แต่ง",
 parts:S(
  B("8.1 Take a focused history.",8,{tags:["hx"],key:"ไฟล์จดแค่หัวข้อ ซักประวัติ varicose vein",
   ans:"<b>แนะนำตัว</b> ขออนุญาต · <b>CC/PI</b>: เส้นเลือดโป่งตำแหน่งไหน ข้างเดียว/สองข้าง เป็นนานเท่าไร มากขึ้นไหม · <b>อาการ</b>: ขาหนัก ปวดตื้อ ๆ ตะคริว คัน ขาบวม — <b>แย่ลงเมื่อยืนนาน/ตอนเย็น ดีขึ้นเมื่อยกขาสูง</b> · <b>ภาวะแทรกซ้อน</b>: ผิวคล้ำ/แข็ง ผื่น eczema, <b>แผล (venous ulcer)</b>, <b>เลือดออกจากเส้นเลือดขอด</b>, superficial thrombophlebitis (ก้อนแดงเจ็บตามเส้น) · <b>สาเหตุ secondary/ข้อห้ามการรักษา</b>: <b>ประวัติ DVT</b>, กระดูกหัก/ผ่าตัด/นอนติดเตียง, ขาบวมทั้งขาเฉียบพลัน · <b>ปัจจัยเสี่ยง</b>: อาชีพยืนนาน, ตั้งครรภ์หลายครั้ง, อ้วน, ประวัติครอบครัว, อายุ, เพศหญิง, ยาฮอร์โมน · <b>แยก arterial disease</b>: ปวดน่องเวลาเดิน (claudication) — สำคัญก่อนให้ใส่ถุงน่องรัด · โรคประจำตัว (หัวใจล้มเหลว ไต ตับ — สาเหตุขาบวมอื่น) ยา แพ้ยา · ผลกระทบต่อชีวิต/ความกังวลด้านความงาม · <b>สรุป</b> (CEAP class)",
   exp:"CEAP: C0 ไม่มีอาการ · C1 telangiectasia/reticular · C2 varicose veins · C3 edema · C4 ผิวเปลี่ยน (pigmentation, eczema, lipodermatosclerosis) · C5 แผลหายแล้ว · C6 แผลยังไม่หาย",
   rubric:"ได้ = อาการและปัจจัยที่ทำให้ดีขึ้น/แย่ลง + ภาวะแทรกซ้อน (แผล เลือดออก thrombophlebitis) + ประวัติ DVT + ปัจจัยเสี่ยง + claudication + สรุป · บางส่วน = ไม่ถาม DVT",
   pts:[H("แนะนำตัว + CC/PI",25),P("แนะนำตัว ขออนุญาต","แนะนำตัว","ขออนุญาต","introduc"),P("ตำแหน่ง ข้าง ระยะเวลา ความก้าวหน้า","ข้างเดียว","สองข้าง","bilateral","unilateral","กี่ปี","นานเท่าไร","duration","onset","เริ่ม"),CR(P("อาการ: หนัก ปวด บวม คัน — แย่ลงเมื่อยืน ดีขึ้นเมื่อยกขา","หนัก","heavy","ปวด","บวม","swell","คัน","itch","ยืน","stand","ยกขา","elevat")),
    H("ภาวะแทรกซ้อน",25),CR(P("แผล / ผิวเปลี่ยนสี / eczema","แผล","ulcer","คล้ำ","pigment","eczema","ผื่น")),P("เลือดออก / thrombophlebitis","เลือดออก","bleed","thrombophleb","อักเสบ"),
    H("สาเหตุ + ปัจจัยเสี่ยง",40),CR(P("ประวัติ DVT / ผ่าตัด / กระดูกหัก / นอนนาน","dvt","ลิ่มเลือด","deep vein","thrombos","กระดูกหัก","fracture","ผ่าตัด","immobil")),P("อาชีพยืนนาน / ตั้งครรภ์ / อ้วน / ครอบครัว / ฮอร์โมน","อาชีพ","occupation","ยืนนาน","ตั้งครรภ์","pregnan","คลอด","อ้วน","obes","ครอบครัว","family","ยาคุม","hormone"),P("Claudication (แยก arterial)","claudica","ปวดน่อง","เดินแล้วปวด","arterial"),P("โรคประจำตัว / ยา","โรคประจำตัว","underlying","หัวใจ","heart","ยาที่","medication"),
    H("สรุป",10),P("สรุป","สรุป","summar","ceap")]})
 ),
 interp:"ซักประวัติเส้นเลือดขอด: อาการ venous insufficiency, ภาวะแทรกซ้อน, สาเหตุ secondary (DVT) และแยก arterial disease ก่อนวางแผนรักษา",
 summary:["อาการ: หนัก ปวดตื้อ บวม คัน — แย่ตอนยืน ดีขึ้นเมื่อยกขา","ภาวะแทรกซ้อน: ผิวเปลี่ยน, แผล, เลือดออก, thrombophlebitis","ต้องถาม: DVT (secondary) และ claudication (ก่อนให้ถุงน่อง)","CEAP C0–C6"]}),

/* ===== OSCE 9 ===== */
Co({page:281,sec:"OSCE",orig:"9",topic:"hx",sub:"Abdominal pain",ex:1,title:"History taking — abdominal pain and associated symptoms",seen:"คล้าย MDCU65 RoA OSCE 7 (ซักประวัติปวดท้อง → acute cholangitis)",
 stem:`A simulated patient presents with abdominal pain. The examiner is observing.<br>1. Take a history of the abdominal pain and associated symptoms.<br>2. Give your provisional diagnosis and initial management.`,
 gray:"9. อาจารย์คุม ถามประวัติอาการปวดท้องและอาการอื่นๆ แล้ว Dxรู้สึกจะ acute cholangitis",
 sp:"(Claude แต่ง) ชาย 72 ปี · ปวดท้องใต้ลิ้นปี่ร้าวไปชายโครงขวา 3 วัน ปวดบีบเป็นพัก ๆ · ไข้สูงหนาวสั่นตั้งแต่เมื่อวาน · ลูกสาวสังเกตว่าตาเหลือง ปัสสาวะสีเข้ม · คลื่นไส้ อาเจียน 1 ครั้ง · วันนี้ซึมลงเล็กน้อย (ถ้าถาม) · 2 ปีก่อนเคยทำ ERCP เอานิ่วในท่อน้ำดีออก ยังไม่ได้ตัดถุงน้ำดี · โรคประจำตัว HT · ไม่ดื่มสุรา",
 flag:"บทผู้ป่วยจำลอง Claude แต่ง · ผู้จดไม่แน่ใจ dx ('รู้สึกจะ')",
 parts:S(
  B("9.1 Take a history of the abdominal pain and associated symptoms.",7,{tags:["hx"],
   ans:"<b>แนะนำตัว</b> ขออนุญาต · <b>ปวดท้อง (SOCRATES)</b>: ตำแหน่ง, onset (ทันที/ค่อยเป็น), ลักษณะ (บีบ/แน่น/แสบ), ร้าว (สะบักขวา/หลัง), ระยะเวลา/เป็นพัก ๆ, ปัจจัยที่ทำให้ดีขึ้น/แย่ลง (อาหารมัน), ความรุนแรง · <b>อาการร่วม</b>: <b>ไข้หนาวสั่น</b>, <b>ตาเหลือง ปัสสาวะเข้ม อุจจาระซีด คัน</b>, คลื่นไส้อาเจียน, เบื่ออาหาร, ท้องอืด ถ่ายเหลว/ไม่ถ่าย, ถ่ายดำ, <b>ซึม สับสน หน้ามืด</b> · <b>แยกระบบอื่น</b>: เจ็บหน้าอก (MI), ปัสสาวะแสบ/ปวดเอว (pyelonephritis), ไอ (pneumonia ฐานปอดขวา) · <b>อดีต</b>: <b>นิ่วถุงน้ำดี/ท่อน้ำดี, ERCP/ผ่าตัดท่อน้ำดี/stent</b>, โรคตับ ตับอ่อน · ปัจจัยเสี่ยง: สุรา กินปลาดิบ น้ำหนักลด · ยา แพ้ยา · <b>สรุป</b>",
   exp:"ผู้สูงอายุอาจมีอาการไม่ครบ Charcot triad (~50–70%) · ซึม/สับสน/ความดันต่ำ = Reynolds pentad (severe, Grade III)",
   rubric:"ได้ = SOCRATES + ไข้ + jaundice + สับสน/ช็อก + แยกระบบอื่น + ประวัตินิ่ว/ERCP + สรุป",
   pts:[H("แนะนำตัว",5),P("แนะนำตัว ขออนุญาต","แนะนำตัว","ขออนุญาต","introduc"),
    H("ปวดท้อง",30),CR(P("ตำแหน่ง onset ลักษณะ ร้าว ระยะเวลา ความรุนแรง","ตำแหน่ง","site","onset","เริ่ม","ลักษณะ","character","ร้าว","radiat","รุนแรง","sever")),P("ปัจจัยกระตุ้น/บรรเทา (อาหารมัน)","อาหาร","food","fatty","อาหารมัน","กระตุ้น","บรรเทา","aggravat","reliev"),
    H("อาการร่วม",40),CR(P("ไข้ หนาวสั่น","ไข้","fever","หนาวสั่น","chill")),CR(P("ตาเหลือง ปัสสาวะเข้ม อุจจาระซีด","ตาเหลือง","ตัวเหลือง","jaundice","ปัสสาวะ","urine","อุจจาระ","stool")),P("คลื่นไส้อาเจียน / ถ่าย","คลื่นไส้","อาเจียน","vomit","nausea","ถ่าย","bowel"),P("ซึม สับสน หน้ามืด","ซึม","สับสน","confus","หน้ามืด","drowsy"),P("แยกระบบอื่น: เจ็บอก ปัสสาวะแสบ ไอ","เจ็บหน้าอก","chest","ปัสสาวะแสบ","dysuria","ไอ","cough"),
    H("อดีต + สรุป",25),CR(P("ประวัตินิ่ว / ERCP / ผ่าตัดท่อน้ำดี","นิ่ว","stone","gallstone","ercp","stent","ผ่าตัด")),P("สุรา / ปลาดิบ / น้ำหนักลด / ยา","สุรา","alcohol","ปลาดิบ","raw fish","น้ำหนัก","weight","ยาที่"),P("สรุป","สรุป","summar")]}),
  B("9.2 Provisional diagnosis and initial management (examiner asks).",3,{tags:["hx"],key:"ไฟล์: 'Dx รู้สึกจะ acute cholangitis'",
   ans:"<b>Acute cholangitis</b> (Charcot triad + ซึม = อาจ severe/Grade III ตาม TG18) จาก <b>recurrent choledocholithiasis</b> · <b>Initial management</b>: ABC, <b>IV fluid resuscitation</b>, <b>blood culture แล้วให้ IV antibiotics</b> (เช่น ceftriaxone + metronidazole, หรือ piperacillin-tazobactam ใน severe), NPO, ยาแก้ปวด · lab: CBC, LFT, BUN/Cr, coagulation, lactate · <b>US abdomen</b> ดูท่อน้ำดีขยาย · <b>Biliary drainage</b>: <b>ERCP</b> (sphincterotomy + stone extraction/stent) — <b>ด่วนที่สุด</b>ใน severe (เมื่อ resuscitate แล้ว), ภายใน 24–48 ชม. ใน moderate · ทางเลือก PTBD ถ้า ERCP ทำไม่ได้ · ภายหลัง: <b>cholecystectomy</b> ป้องกันซ้ำ",
   exp:"TG18 Grade III (severe): ความดันต่ำต้องใช้ vasopressor, สับสน, PaO2/FiO2 &lt;300, oliguria/Cr &gt;2, INR &gt;1.5, platelet &lt;100k",
   rubric:"ได้ = acute cholangitis + fluid + culture + antibiotics + ERCP drainage ตามความรุนแรง",
   pts:[CR(P("Acute cholangitis","cholangitis","ท่อน้ำดีอักเสบ")),P("IV fluid + blood culture + IV antibiotics","fluid","สารน้ำ","culture","antibiot","ceftriaxone","piperacillin"),CR(P("Biliary drainage: ERCP (ด่วนตามความรุนแรง)","ercp","drain","ระบาย","ptbd")),P("Cholecystectomy ภายหลัง","cholecystectom","ตัดถุงน้ำดี")]})
 ),
 interp:"ซักประวัติปวดท้องแบบ SOCRATES ร่วมกับอาการ systemic/jaundice เพื่อวินิจฉัย acute cholangitis และประเมินความรุนแรง",
 summary:["SOCRATES + ไข้ + เหลือง + สับสน/ช็อก","ประวัติสำคัญ: นิ่ว, ERCP, ผ่าตัดทางเดินน้ำดี","Cholangitis: fluid + culture + ATB → ERCP (severe = ด่วน)","ภายหลัง: cholecystectomy"]}),

/* ===== OSCE 10 ===== */
Co({page:281,sec:"OSCE",orig:"10",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — place two vertical mattress sutures",seen:"คล้าย MDCU66 RoD OSCE 5 และ MDCU65 RoA OSCE 12 (vertical mattress)",
 stem:`A skin pad with a linear laceration is provided with an instrument set and suture. The examiner is observing.<br>Close the wound with two vertical mattress sutures.`,
 gray:"10. อาจารย์คุม ให้ทำ vertical mattress 2 stiches",
 sp:"แผ่นหนังจำลองมีแผลตรง ~3 cm · needle holder, toothed (Adson) forceps, กรรไกรตัดไหม, ไหม nylon 3-0/4-0 · อาจารย์ดูเทคนิคการจับเครื่องมือ ระยะเข็ม ลำดับ far-near และปม",
 flag:"รายละเอียดอุปกรณ์ Claude เติม",
 parts:S(
  B("10.1 Place two vertical mattress sutures.",8,{tags:["proc"],
   ans:"<b>เตรียม</b>: (บอกอาจารย์ว่าจะ) ล้างมือ สวมถุงมือ ทำความสะอาด ปูผ้า · <b>จับเครื่องมือ</b>: needle holder จับเข็มที่ <b>ประมาณ 2/3 จากปลาย (1/3 จากโคน)</b> ปลายคีม ตั้งฉากกับเข็ม · ใช้ toothed forceps จับขอบแผลเบา ๆ (หรือ dermis) ไม่บีบผิวหนัง · <b>เย็บ</b>: <b>Far</b>: แทงเข็มตั้งฉากผิวห่างขอบ ~5–8 mm ลงลึกถึงชั้นใต้ผิว หมุนข้อมือตามความโค้ง ออกฝั่งตรงข้ามระยะเท่ากัน · <b>Near</b>: กลับทิศเข็ม แทงจากฝั่งที่ออก ห่างขอบ ~1–2 mm ชั้นตื้น (dermis) ออกฝั่งเริ่มต้นระยะเท่ากัน · <b>Instrument tie</b>: square knot 3 throws (สลับทิศ) ตึงพอให้ขอบชิด<b>ปลิ้นออก</b> ไม่รัดจนซีด · ปมไว้ข้างแผล · ตัดไหมเหลือ ~5 mm · <b>เข็มที่ 2</b> ห่างจากเข็มแรก ~5–10 mm (ระยะห่างระหว่างเข็มประมาณเท่ากับระยะจากขอบ) · <b>หลังทำ</b>: เก็บเข็มลง sharps container",
   exp:"Mattress sutures ตัดไหมเร็วกว่ากำหนดเล็กน้อยหรือใช้ร่วมกับ simple interrupted เพื่อลดรอยไหม (track marks)",
   rubric:"ได้ = จับเข็มถูก + far-far near-near ถูกลำดับและระยะ + eversion + square knot + ระยะห่าง 2 เข็มเหมาะสม + ทิ้ง sharps · ตก = เย็บผิดแบบ (simple/horizontal)",
   pts:[H("เตรียม + จับเครื่องมือ",20),P("Aseptic: ล้างมือ ถุงมือ ทำความสะอาด","ล้างมือ","ถุงมือ","glove","aseptic","sterile","ทำความสะอาด"),P("จับเข็มที่ 1/3 จากโคน ตั้งฉาก / forceps จับขอบเบา ๆ","1/3","2/3","ตั้งฉาก","perpendic","forceps"),
    H("Vertical mattress",60),CR(P("Far-far (5–8 mm ลึก) แล้ว near-near (1–2 mm ตื้น)","far","near","ไกล","ใกล้")),P("ระยะเท่ากันสองฝั่ง หมุนตามความโค้งเข็ม","เท่ากัน","symmetr","curve","โค้ง","หมุน"),CR(P("Square knot 3 throws ตึงพอดี ขอบปลิ้น","square","3 throw","evert","ปลิ้น","ตึงพอดี")),P("ปมไว้ข้างแผล ตัดไหม ~5 mm","ข้างแผล","ปม","ตัดไหม","5 mm"),P("2 เข็มห่างกันเหมาะสม (~5–10 mm)","spacing","ระยะห่าง","2 เข็ม","5.?10 mm"),
    H("หลังทำ",20),P("ทิ้งเข็มใน sharps container","sharp","ภาชนะ","ทิ้งเข็ม")]})
 ),
 interp:"เย็บ vertical mattress 2 เข็มด้วยเทคนิคที่ถูกต้อง (จับเข็ม, ลำดับ far-near, ปม, ระยะห่าง)",
 summary:["จับเข็มที่ 1/3 จากโคน","Far-far 5–8 mm ลึก → near-near 1–2 mm ตื้น","Square knot ปมข้างแผล ขอบแผลปลิ้น","ระยะห่างระหว่างเข็ม ≈ ระยะจากขอบ"]}),

/* ===== OSCE 11 ===== */
Co({page:281,sec:"OSCE",orig:"11",topic:"proc",sub:"Suture & knot",ex:1,proc:1,title:"Procedure — two-hand knot tying",
 stem:`A knot-tying board is provided. The examiner is observing.<br>Tie a two-hand knot with three throws so that the knot lies flat against the board.`,
 gray:"11. อาจารย์คุม ผูก two hand 3 throw ให้เชือกติดกัน",
 sp:"บอร์ดฝึกผูกปม (ตะขอ/ห่วง 2 จุด) + เชือก/ไหม · อาจารย์ดูว่า throws สลับทิศเป็น square knot ปมแนบชิด (\"ให้เชือกติดกัน\") ไม่ลอย ไม่เป็น slip knot",
 flag:"รายละเอียดบอร์ด Claude เติม · 'ให้เชือกติดกัน' ตีความว่าปมต้องแนบชิดกับฐาน",
 parts:S(
  B("11.1 Tie a two-hand knot with three throws.",6,{tags:["proc"],
   ans:"<b>Two-hand tie</b>: ถือปลายไหมสองข้าง · <b>Throw 1</b>: ไขว้ไหมเป็นห่วงรอบนิ้วชี้ (หรือนิ้วโป้ง) ดึงปลายไหมผ่านห่วง · ดึงไหม<b>ในแนวราบ</b> มือไปคนละทิศ ใช้นิ้วชี้<b>ดันปมลงถึงฐาน</b> (ไม่ยก/กระชากขึ้น) · <b>Throw 2</b>: ทำทิศ<b>ตรงข้าม</b>กับ throw แรก (สลับมือที่นำ/สลับด้าน) → ได้ <b>square knot</b> ปมนอนราบ · <b>Throw 3</b>: สลับทิศอีกครั้งเพื่อความมั่นคง · <b>รักษาแรงตึงต่อเนื่อง</b> ระหว่าง throw ไม่ให้ปมแรกคลาย · มือต้องข้ามมาด้านตรงข้ามเมื่อจำเป็นเพื่อให้ปมนอนราบ · ตัดไหมเหลือ ~3 mm",
   exp:"Granny knot = throw ทิศเดียวกันสองครั้ง (ลื่นหลุด) · slip knot = ดึงไหมไม่สมดุล (ดึงข้างเดียวแรง) ทำให้ปมเลื่อน — ใช้ได้ตั้งใจเพื่อปรับความตึงแล้วค่อย lock",
   rubric:"ได้ = 3 throws สลับทิศ (square) + ดันปมลงในแนวราบ + ตึงต่อเนื่อง ปมแนบชิด · ตก = granny/slip knot หรือปมลอย",
   pts:[CR(P("Throws สลับทิศ → square knot","square","reef","สลับ","alternat","ตรงข้าม","opposite")),CR(P("ดันปมลงถึงฐานในแนวราบ (ปมแนบชิด)","ดันปม","push","แนวราบ","flat","horizontal","แนบ","ชิด")),P("ตึงต่อเนื่อง ไม่ให้ปมแรกคลาย","ตึง","tension","ไม่คลาย","คลาย"),P("3 throws ครบ","3 throw","three","สามครั้ง","3 ครั้ง")]})
 ),
 interp:"ผูก two-hand square knot ให้ปมนอนราบ แนบชิด และมั่นคง",
 summary:["Throws สลับทิศ = square · ทิศเดียวกัน = granny","ดึงไหมแนวราบคนละทิศ ใช้นิ้วดันปมลง","ตึงต่อเนื่อง · ดึงไม่สมดุล = slip knot"]}),

/* ===== OSCE 12 ===== */
Co({page:281,sec:"OSCE",orig:"12",topic:"proc",sub:"Wound dressing",ex:1,proc:1,title:"Procedure — dressing a sutured wound on an arm model",
 stem:`An arm model has a laceration that was sutured yesterday. Clean the wound and apply a new dressing. All equipment is on the trolley; you must open the dressing set yourself. The examiner is observing.`,
 gray:"12. อาจารย์คุม ให้ล้างแผลทำความสะอาดแผลบนหุ่นแขนจำลอง แล้วอาจารย์จะบอกว่าแผลพึ่งเย็บมาหนึ่งวัน โดยที่อาจารย์จะบอกตอนแรกสุดแล้วว่าไม่มีถุงมือ อย่าไปพูดเริ่มต้นใส่ถุงมืออีกล่ะ!! จะให้คลอเฮ็กซ์ ซาไลน์ กอซ แล้วก็สำลีมา ต้องเปิดเซ็ทเองทำเองหมด",
 sp:"หุ่นแขนมีแผลเย็บ (simple interrupted) อายุ 1 วัน ปิดก๊อซเก่า · อุปกรณ์: dressing set sterile (ปากคีบ 2 อัน ถ้วย), chlorhexidine, NSS, ก๊อซ, สำลี, พลาสเตอร์, ถุงขยะ · <b>อาจารย์บอกตั้งแต่ต้นว่าไม่มีถุงมือ</b> → ต้องใช้เทคนิค no-touch ด้วยปากคีบ (ผู้จดเตือนว่าอย่าพูดว่าจะใส่ถุงมือ) · แผลที่หุ่น: แห้ง ไม่บวมแดง ไม่มีหนอง (ถ้าผู้สอบตรวจ)",
 flag:"ลักษณะแผล/ชนิดการเย็บ Claude เติม",
 notes:"ผู้จดเตือน: อาจารย์บอกตั้งแต่แรกว่าไม่มีถุงมือ อย่าพูดว่าเริ่มด้วยการใส่ถุงมือ · ต้องเปิดเซ็ตเองทำเองทั้งหมด",
 parts:S(
  B("12.1 Clean the wound and apply a new dressing.",8,{tags:["proc"],key:"ไฟล์: ไม่มีถุงมือ — ให้ chlorhexidine, saline, gauze, สำลี — เปิดเซ็ตเองทำเองหมด",
   ans:"<b>เตรียม</b>: แนะนำตัว ยืนยันผู้ป่วย อธิบาย ขออนุญาต · ล้างมือ (alcohol hand rub) · จัดท่า เปิดแผล วางถุงขยะใกล้มือ · <b>เปิด dressing set แบบ aseptic</b>: วางบนโต๊ะสะอาด แกะเทปโดยไม่แตะด้านใน <b>เปิดผ้าชั้นนอกมุมแรกออกห่างตัว → มุมข้าง → มุมสุดท้ายเข้าหาตัว</b> ไม่เอื้อมข้ามพื้นที่ sterile · <b>เทน้ำยา</b> NSS และ chlorhexidine ลงถ้วยโดยไม่ให้ปากขวดแตะเซ็ต/เทน้ำทิ้งเล็กน้อยก่อน · เทก๊อซ/สำลีลงเซ็ตโดยไม่สัมผัส · <b>No-touch technique (ไม่มีถุงมือ)</b>: หยิบปากคีบจากด้ามโดยไม่แตะปลาย · <b>ปากคีบอันหนึ่ง (ไม่ sterile/สกปรก)</b> ใช้ลอกก๊อซเก่าทิ้งถุงขยะ แล้วทิ้งปากคีบนั้นแยก · <b>ประเมินแผล</b>: บวม แดง ร้อน หนอง เลือดซึม แผลแยก · <b>ทำความสะอาด</b> ด้วยปากคีบ sterile ส่งสำลีเปียกระหว่างปากคีบ 2 อัน (ปากคีบที่จับสำลีไม่แตะแผลโดยตรงด้วยปลายที่หยิบจากเซ็ต): <b>เช็ดบนแนวแผลก่อนด้วย NSS ปาดครั้งเดียวต่อสำลีหนึ่งก้อน จากบนลงล่าง</b> → แล้วเช็ด<b>ผิวรอบแผลจากใกล้ออกไกล (clean → dirty)</b> ด้วย chlorhexidine ห่างขอบ ~2–3 cm ไม่เช็ดย้อน · ซับให้แห้งด้วยก๊อซ · <b>ปิดแผล</b> ก๊อซ sterile คลุมแผลเลยขอบ ~2–3 cm ติดพลาสเตอร์ · <b>หลังทำ</b>: ทิ้งขยะติดเชื้อ ล้างมือ แนะนำการดูแลแผล (ให้แห้ง อาการติดเชื้อ นัดตัดไหม) · บันทึก",
   exp:"แผลเย็บปิดสะอาด เยื่อบุผิวปิดภายใน ~48 ชม. — ทั่วไปไม่ต้องเปิดทำแผลใน 48 ชม. แรกยกเว้นก๊อซเปียก/สงสัยติดเชื้อ แต่สถานีนี้ประเมินเทคนิค aseptic · หลักการเช็ด: สะอาดไปสกปรก, ปาดครั้งเดียวต่อก้อน, ไม่ย้อนกลับ",
   rubric:"ได้ = ขออนุญาต + เปิดเซ็ตถูกลำดับ + เทน้ำยาไม่ปนเปื้อน + no-touch ด้วยปากคีบ (แยกปากคีบลอกก๊อซเก่า) + ประเมินแผล + เช็ดแนวแผลก่อนแล้วรอบแผลจากในออกนอก ครั้งเดียวต่อก้อน + ปิดแผล + แนะนำ · ตก = ปนเปื้อนพื้นที่ sterile แล้วไม่แก้ไข หรือพูดว่าจะใส่ถุงมือหลังอาจารย์บอกว่าไม่มี",
   pts:[H("เตรียม",15),CR(P("แนะนำตัว ยืนยันผู้ป่วย ขออนุญาต","แนะนำตัว","ยืนยัน","ขออนุญาต","consent","อธิบาย")),P("ล้างมือ เตรียมถุงขยะ","ล้างมือ","hand","alcohol rub","ถุงขยะ","waste"),
    H("เปิดเซ็ต + เทน้ำยา",25),CR(P("เปิดชุด aseptic: มุมแรกออกห่างตัว มุมสุดท้ายเข้าหาตัว","ห่างตัว","away","เข้าหาตัว","toward","มุม","flap","aseptic")),P("เทน้ำยา/ก๊อซลงเซ็ตโดยไม่สัมผัส","เทน้ำยา","pour","ไม่แตะ","ไม่สัมผัส","without touch"),
    H("ทำแผล",45),CR(P("No-touch ด้วยปากคีบ; ลอกก๊อซเก่าด้วยปากคีบแยกแล้วทิ้ง","ปากคีบ","forceps","no.?touch","ลอก","ก๊อซเก่า","old dressing")),P("ประเมินแผล (บวมแดง หนอง แผลแยก)","ประเมิน","assess","บวม","แดง","หนอง","pus","discharge","inspect"),CR(P("เช็ดแนวแผลก่อน แล้วรอบแผลจากในออกนอก ครั้งเดียวต่อก้อน","ในออกนอก","inside out","inner to outer","clean to dirty","สะอาดไปสกปรก","ครั้งเดียว","one stroke","single")),P("NSS บนแผล / chlorhexidine รอบแผล","nss","saline","น้ำเกลือ","chlorhex","คลอเฮ็กซ์"),P("ซับแห้ง ปิดก๊อซ ติดพลาสเตอร์","ซับ","dry","ปิดแผล","ปิดก๊อซ","cover","plaster","พลาสเตอร์","tape"),
    H("หลังทำ",15),P("ทิ้งขยะติดเชื้อ ล้างมือ แนะนำ/บันทึก","ทิ้ง","dispos","ล้างมือ","แนะนำ","advice","บันทึก","record")]})
 ),
 interp:"ทำแผลแผลเย็บแบบ aseptic no-touch ด้วยปากคีบ เปิดเซ็ตเองอย่างถูกต้อง และเช็ดจากสะอาดไปสกปรก",
 summary:["เปิดเซ็ต: มุมแรกออกห่างตัว → ข้าง → มุมสุดท้ายเข้าหาตัว","ไม่มีถุงมือ → no-touch ด้วยปากคีบ · ปากคีบลอกก๊อซเก่าแยกทิ้ง","เช็ดแนวแผลก่อน แล้วรอบแผลในออกนอก ครั้งเดียวต่อก้อน","ประเมินแผล → ซับแห้ง → ปิด → แนะนำ"]}),

/* ===== OSCE 13 ===== */
Co({page:281,sec:"OSCE",orig:"13",topic:"proc",sub:"Sterile gloving/scrub",ex:1,proc:1,title:"Procedure — drying hands, gowning and gloving to enter theatre",seen:"คล้าย MDCU65 RoA OSCE 11 (ล้างมือ เช็ดมือ เข้าห้องผ่าตัด)",
 stem:`You have just completed your surgical hand scrub. Demonstrate drying your hands with a sterile towel, then put on a sterile gown and gloves ready to enter the operating room. The examiner is observing.`,
 gray:"13. อาจารย์คุม เช็ดผ้าใส่ถุงมือเข้า OR",
 sp:"(Claude เติม) ผู้สอบสวมหมวก mask แล้ว ล้างมือ (scrub) เสร็จ มือยังเปียก · บนโต๊ะ: ห่อผ้าเช็ดมือ sterile, เสื้อกาวน์ sterile, ถุงมือ sterile ตามไซซ์ · อาจารย์/ผู้ช่วยผูกเชือกด้านหลังให้เมื่อขอ",
 flag:"ขอบเขตสถานี (เริ่มหลัง scrub) Claude ตีความจาก 'เช็ดผ้าใส่ถุงมือ'",
 parts:S(
  B("13.1 Dry hands, gown and glove.",8,{tags:["proc"],
   ans:"<b>ท่าทาง</b>: มือยกสูงกว่าศอก ห่างตัว น้ำหยดจากศอก · <b>เช็ดมือ</b>: หยิบผ้าจากห่อ sterile โดยไม่ให้น้ำหยดลงห่อ ก้มตัวเล็กน้อยไม่ให้ผ้าแตะชุด · คลี่ผ้าตามยาว ใช้ <b>ปลายด้านหนึ่งเช็ดมือข้างแรก</b>: นิ้ว → ฝ่ามือ หลังมือ → <b>หมุนเช็ดจากข้อมือไปศอกทางเดียว ไม่ย้อน</b> · <b>เปลี่ยนด้าน/ปลายผ้า</b>ที่ยังไม่ใช้เช็ดมืออีกข้างแบบเดียวกัน · ทิ้งผ้าโดยไม่ลดมือต่ำกว่าเอว · <b>ใส่เสื้อกาวน์</b>: หยิบกาวน์ที่ด้านในคอเสื้อ ยกขึ้นถอยห่างโต๊ะ ปล่อยให้คลี่ (ไม่แตะด้านนอก) สอดแขนทั้งสองพร้อมกัน <b>มือไม่โผล่พ้นปลายแขนเสื้อ</b> (สำหรับ closed gloving) · ผู้ช่วย (non-sterile) ดึงไหล่และผูกเชือกด้านหลัง · <b>Closed gloving</b>: ผ่านแขนเสื้อ วางถุงมือฝ่ามือแนบฝ่ามือ นิ้วชี้ไปทางศอก จับขอบ cuff พลิกคลุมปลายแขนเสื้อ ดึงขึ้นให้มือสอดเข้า · ทำอีกข้าง · <b>ผูกเชือกเอว</b>: ส่งป้ายกระดาษให้ผู้ช่วย หมุนตัว แล้วดึงเชือกจากป้ายมาผูก (wrap-around gown) · <b>หลังสวม</b>: มืออยู่ในพื้นที่ sterile (ระดับอก–เอว ด้านหน้า) ไม่ไขว้ไว้ใต้รักแร้ ไม่หันหลังให้พื้นที่ sterile",
   exp:"ถ้าปนเปื้อนระหว่างขั้นตอน → แจ้งและเปลี่ยนชิ้นนั้นทันที (ถุงมือ/กาวน์) · open gloving ใช้เมื่อไม่ได้ใส่กาวน์ (เช่น หัตถการข้างเตียง)",
   rubric:"ได้ = มือสูงกว่าศอก + เช็ดมือ → ศอกทางเดียว คนละด้านผ้า + ใส่กาวน์ไม่แตะด้านนอก + closed gloving ถูกวิธี + ผูกเอวด้วยป้าย + มืออยู่ในพื้นที่ sterile · ตก = ปนเปื้อนแล้วไม่แก้ไข",
   pts:[H("เช็ดมือ",35),P("มือสูงกว่าศอก ห่างตัว","สูงกว่าศอก","above.*elbow","ยกมือ","มือสูง"),CR(P("เช็ดจากมือไปศอกทางเดียว ไม่ย้อน","ทางเดียว","ไม่ย้อน","one direction","มือไปศอก","hand to elbow","ศอก")),CR(P("ใช้คนละด้าน/ปลายผ้าต่อแขน","คนละด้าน","อีกด้าน","other side","other end","เปลี่ยนด้าน")),
    H("กาวน์",30),P("จับด้านในคอเสื้อ ปล่อยคลี่ ไม่แตะด้านนอก","ด้านใน","inside","คอเสื้อ","คลี่","unfold"),P("มือไม่โผล่พ้นแขนเสื้อ / ผู้ช่วยผูกหลัง","แขนเสื้อ","sleeve","cuff","ผูก","tie"),
    H("ถุงมือ + หลังสวม",35),CR(P("Closed gloving technique","closed","ถุงมือ","glov")),P("ผูกเชือกเอวด้วยป้ายกระดาษ หมุนตัว","ป้าย","card","tag","หมุนตัว","turn"),P("มืออยู่ระดับอก–เอว ด้านหน้า","ระดับอก","waist","เอว","chest level","ด้านหน้า")]})
 ),
 interp:"เช็ดมือ สวมกาวน์ และใส่ถุงมือแบบ closed technique โดยไม่ปนเปื้อน",
 summary:["เช็ดมือ: นิ้ว → ศอกทางเดียว คนละด้านผ้า มือสูงกว่าศอก","กาวน์: จับด้านในคอ ปล่อยคลี่ มือไม่โผล่พ้นแขนเสื้อ","Closed gloving · ผูกเอวด้วยป้ายแล้วหมุนตัว","มืออยู่ระดับอก–เอวด้านหน้าเสมอ"]}),

/* ===== OSCE 14 ===== */
Co({page:281,sec:"OSCE",orig:"14",topic:"inst",sub:"Drain",title:"Drains — name two drainage devices and give examples of their use",
 stem:`Two drainage devices are shown: one with a rigid vacuum bottle and one with a soft squeezable bulb, both attached to perforated tubing.<br>1. Name each device.<br>2. Give examples of operations in which each is used.`,
 gray:"14. เขียน ถามชื่อ radivac กับ Jackson ยกตัวอย่าง ใช้ในการผ่าตัดอะไร",
 flag:NOIMG,imgAlt:"อุปกรณ์ระบายสารเหลว 2 ชนิด ชนิดหนึ่งเป็นขวดสุญญากาศ อีกชนิดเป็นลูกยางบีบได้ ต่อกับสายที่มีรูด้านข้าง",
 notes:"สถานีเขียน · 'Jackson' = Jackson-Pratt drain",
 parts:S(
  B("14.1 Name each drain and give examples of its use.",5,{tags:["inst"],key:"ไฟล์ระบุ: radivac กับ Jackson (ไม่มีเฉลยการใช้)",
   ans:"ทั้งสองเป็น <b>closed suction (active) drain</b> · <b>Redivac drain</b> (Redon-type): สายมีรูหลายรูต่อกับ<b>ขวดสุญญากาศแรงดูดสูง (high-vacuum bottle)</b> · ใช้ระบายเลือด/น้ำเหลืองใต้ flap/ช่องว่างใต้ผิวหนังขนาดใหญ่: <b>mastectomy/axillary dissection</b>, <b>thyroidectomy/neck dissection</b>, ผ่าตัดกระดูกและข้อ (hip/knee arthroplasty), flap ศัลยกรรมตกแต่ง, ไส้เลื่อนผนังหน้าท้องขนาดใหญ่ · <b>Jackson-Pratt (JP) drain</b>: สาย silicone แบน/กลมมีร่อง ต่อกับ<b>ลูกยางบีบ (bulb/grenade) แรงดูดต่ำ</b> นุ่ม ทำอันตรายต่ออวัยวะน้อย → ใช้ใน<b>ช่องท้อง</b>: Whipple (pancreatic leak), hepatectomy, cholecystectomy ที่ยาก, colorectal/LAR (pelvis), ผ่าตัดไต · และ breast, neck, plastic surgery · ดูแล: บันทึกปริมาณ/ลักษณะ, ดูดสุญญากาศใหม่เมื่อเต็ม, ถอดเมื่อปริมาณน้อย (เช่น &lt;30–50 mL/วัน)",
   exp:"Drain แบ่ง: open (Penrose, corrugated) vs closed · passive vs active (suction) · closed suction ลดการติดเชื้อย้อนกลับ",
   rubric:"ได้ = closed suction drain + ชนิด vacuum bottle vs bulb + ตัวอย่างผ่าตัด ≥2 ต่อชนิด",
   pts:[CR(P("Redivac: closed suction drain ขวดสุญญากาศ","radivac","redivac","redon","vacuum","สุญญากาศ","closed suction")),G("Redivac ใช้ใน (≥2)",2,P("Mastectomy / axillary dissection","mastectom","axill","เต้านม"),P("Thyroidectomy / neck dissection","thyroid","neck","คอ"),P("Orthopedic (arthroplasty)","arthroplast","ortho","hip","knee","กระดูก"),P("Flap / abdominal wall","flap","abdominal wall","hernia")),
    CR(P("Jackson-Pratt: closed suction bulb drain","jackson","\\bjp\\b","bulb","ลูกยาง","grenade")),G("JP ใช้ใน (≥2)",2,P("Whipple / pancreas","whipple","pancrea","ตับอ่อน"),P("Liver / biliary","hepatectom","liver","ตับ","biliary","cholecyst"),P("Colorectal / pelvis","colorectal","pelvi","lar","rectal"),P("Breast / neck / plastic","breast","neck","plastic","เต้านม"))]})
 ),
 interp:"รู้จัก closed suction drains สองชนิดหลัก และเลือกใช้ตามแรงดูด/ตำแหน่ง",
 summary:["Redivac (Redon): ขวดสุญญากาศแรงดูดสูง — mastectomy, thyroid/neck, ortho, flap","Jackson-Pratt: bulb แรงดูดต่ำ สาย silicone — ช่องท้อง (Whipple, liver, pelvis)","Closed suction ลดการติดเชื้อ · ถอดเมื่อออกน้อย"]}),

/* ===== OSCE 15 ===== */
Co({page:281,sec:"OSCE",orig:"15",topic:"path",sub:"Breast cancer staging",title:"Pathology report — breast cancer: TNM and important features",seen:"คล้าย MDCU65 RoA OSCE 13 (ผลพาโธ stage CA breast TNM)",
 stem:`Pathology report, right modified radical mastectomy: invasive ductal carcinoma (invasive carcinoma of no special type), histologic grade 2; tumor size 2.8 cm; lymphovascular invasion present; margins free; metastatic carcinoma in 2 of 6 axillary lymph nodes. Staging investigations show no distant metastasis.<br>1. Give the TNM classification and stage.<br>2. Which features in the report are important for prognosis and further treatment, and what additional information is needed?`,
 gray:"15. เขียน อ่านผลแลบ บอก TNM น้องนม มีใบpathoมาให้ด้วย มีไฮไลท์ที่สำคัญให้แล้วด้วย 555 คำตอบรู้สึกจะมีlympho/vasoinvasive mammary ductal carcinoma invasive type grade 2 axillary lymph node 2/6",
 flag:"ขนาดก้อน (2.8 cm) Claude แต่ง — ไฟล์จดไม่ได้ · ข้อมูลอื่นจากไฟล์: IDC grade 2, lympho/vasoinvasive, axillary LN 2/6 · คำถามย่อยปัจจัยพยากรณ์ Claude เติม",
 notes:"สถานีเขียน · ผู้จดบอกว่าใบ patho มีไฮไลต์ข้อมูลสำคัญให้แล้ว",
 parts:S(
  B("15.1 TNM classification and stage.",3,{tags:["path"],key:"ไฟล์: lympho/vasoinvasive mammary ductal carcinoma invasive type grade 2, axillary LN 2/6",
   ans:"<b>pT2</b> (2.8 cm: &gt;2–5 cm) · <b>pN1a</b> (axillary LN บวก 2 ต่อม = 1–3) · <b>cM0</b> → <b>Anatomic stage IIB</b> (T2N1M0, AJCC 8th) · LVI <b>ไม่เปลี่ยน TNM</b> แต่เป็นปัจจัยพยากรณ์",
   exp:"จำนวน LN ที่ตรวจได้ 6 ต่อมถือว่าน้อย (axillary dissection มาตรฐานควรได้ ≥10) แต่การจัด N ใช้จำนวนที่บวก",
   rubric:"ได้ = pT2 pN1a M0 + IIB · บางส่วน = ใส่ LVI เป็นส่วนของ T (ผิด)",
   pts:[CR(P("pT2","t2")),CR(P("pN1(a)","n1")),P("M0","m0"),P("Stage IIB","iib","2b")]}),
  B("15.2 Important prognostic features and additional information needed.",3,{tags:["path"],flag:"ข้อย่อยนี้ Claude เติม",
   ans:"<b>ปัจจัยพยากรณ์ในรายงาน</b>: ขนาดก้อน, <b>จำนวน axillary LN ที่บวก</b> (สำคัญที่สุด), <b>histologic grade</b> (Nottingham: tubule formation + nuclear pleomorphism + mitotic count), <b>lymphovascular invasion</b> (เพิ่มความเสี่ยงกลับเป็นซ้ำ), margin status · <b>ข้อมูลที่ต้องการเพิ่ม</b>: <b>ER, PR, HER2</b> (IHC ± ISH) และ <b>Ki-67</b> → กำหนด <b>prognostic stage</b> และ systemic therapy (endocrine, anti-HER2, chemotherapy) ± genomic assay (เช่น Oncotype DX ใน HR+/HER2− N1 วัยหมดประจำเดือน) · ผลต่อการรักษา: N+ หลัง mastectomy → พิจารณา <b>post-mastectomy radiotherapy</b>",
   exp:"AJCC 8th prognostic stage รวม grade + ER/PR/HER2 (± Oncotype) เข้าไปกับ TNM",
   rubric:"ได้ = LN, grade, LVI, size + ต้องการ ER/PR/HER2/Ki-67",
   pts:[G("ปัจจัยพยากรณ์ในรายงาน (≥3)",3,P("จำนวน LN บวก","lymph node","\\bln\\b","ต่อมน้ำเหลือง","node"),P("Histologic grade","grade","nottingham"),P("Lymphovascular invasion","lymphovascular","\\blvi\\b","vascular invasion","vasoinvas"),P("Tumor size","size","ขนาด"),P("Margin","margin","ขอบ")),CR(P("ต้องการ ER/PR/HER2 + Ki-67","\\ber\\b","\\bpr\\b","her2","her-2","receptor","ki.?67","hormone"))]})
 ),
 interp:"อ่านผลพยาธิมะเร็งเต้านม: TNM จากขนาดและจำนวน LN, แยกปัจจัยพยากรณ์ (grade, LVI) และรู้ว่าต้องมี receptor status",
 summary:["T2 (>2–5 cm) · N1a (1–3 LN) · M0 → IIB","LVI/grade ไม่เปลี่ยน TNM แต่เป็นปัจจัยพยากรณ์","ต้องมี ER/PR/HER2/Ki-67 → prognostic stage + systemic therapy","N+ หลัง mastectomy → พิจารณา PMRT"]}),

/* ===== PowerPoint 1 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 1",topic:"spot",sub:"Imaging film",title:"Spot — abdominal radiograph: list the signs",
 stem:`An abdominal radiograph of a patient with colicky abdominal pain, vomiting and distension is shown.<br>1. What is the diagnosis?<br>2. List the radiographic signs present.`,
 gray:"Part : Power point 14 ข้อ (ให้เวลาข้อละแปปเดียวนะครับ) 1.ภาพ x ray มี small bowel obstruction ให้เขียน sign ที่พบ",
 flag:NOIMG,imgAlt:"ฟิล์มเอกซเรย์ช่องท้อง",
 parts:S(
  B("PPT 1.1 Diagnosis and radiographic signs.",4,{tags:["spot"],key:"ไฟล์ระบุ: small bowel obstruction (ไม่มีเฉลย sign)",
   ans:"<b>Small bowel obstruction</b> · <b>Signs</b>: (1) <b>dilated small bowel loops &gt;3 cm</b> อยู่ส่วนกลางท้อง จำนวนมาก (2) <b>valvulae conniventes</b> พาดเต็มความกว้างลำไส้ — <b>stack of coins</b> (3) <b>multiple air-fluid levels แบบขั้นบันได (step-ladder)</b> ในท่ายืน/decubitus (4) <b>string of beads sign</b> (ฟองลมเล็กเรียงใต้ valvulae ในลูปที่เต็มน้ำ) (5) <b>ลมใน colon/rectum น้อยหรือไม่มี</b> (gasless distal) (6) (complicated: pneumatosis, portal venous gas, free air)",
   exp:"Closed-loop/strangulation ฟิล์มธรรมดาบอกได้ไม่ดี → CT with contrast (whirl sign, ผนังลำไส้ไม่ enhance, mesenteric edema)",
   rubric:"ได้ = SBO + signs ≥3 (dilated SB, valvulae, air-fluid levels, colon ไม่มีลม)",
   pts:[CR(P("Small bowel obstruction","small bowel obstruct","\\bsbo\\b","ลำไส้เล็กอุดตัน")),G("Signs (≥3)",3,P("Dilated SB loops >3 cm กลางท้อง","dilat","ขยาย","3 cm","central"),P("Valvulae conniventes / stack of coins","valvulae","conniven","stack","coin"),P("Step-ladder air-fluid levels","air.?fluid","step","ladder"),P("String of beads","string of bead","bead"),P("Colon/rectum ไม่มีลม","colon","rectum","ลำไส้ใหญ่","gasless","paucity"))]})
 ),
 interp:"บอก signs ของ SBO บนฟิล์มธรรมดาได้ครบ",
 summary:["SBO: SB >3 cm กลางท้อง + valvulae conniventes (stack of coins)","Step-ladder air-fluid levels · string of beads","Colon/rectum ไม่มีลม","สงสัย strangulation → CT"]}),

/* ===== PowerPoint 2 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 2",topic:"spot",sub:"Other spot",title:"Spot — acute epigastric pain: diagnosis",
 stem:`A 45-year-old man who drinks alcohol heavily presents with sudden severe epigastric pain radiating to the back for 12 hours, with repeated vomiting. He leans forward to ease the pain. Epigastric tenderness and guarding are present.<br>What is the most likely diagnosis? Give the diagnostic criteria.`,
 gray:"2.ให้อาการปวดท้องมา ถามว่าเปนไร อาการค่อนข้างชัดคิดว่าเปน pancreatitis",
 flag:"ประวัติผู้ป่วย Claude แต่ง (ไฟล์จดแค่ 'อาการค่อนข้างชัด') · สไลด์เป็นโจทย์ข้อความ → sub Other spot · คำถามเกณฑ์วินิจฉัย Claude เติม",
 notes:"สไลด์ 2–4 เป็นเคสต่อเนื่อง (ตามเลขในไฟล์ แยกเป็นคนละสถานี)",
 parts:S(
  B("PPT 2.1 Diagnosis and diagnostic criteria.",3,{tags:["spot"],key:"ไฟล์: 'คิดว่าเป็น pancreatitis'",
   ans:"<b>Acute pancreatitis</b> (alcohol-induced) · <b>Revised Atlanta 2012</b>: วินิจฉัยเมื่อมี <b>≥2 ใน 3</b>: (1) ปวดท้องเข้าได้ (epigastric เฉียบพลัน รุนแรง ร้าวไปหลัง) (2) <b>serum lipase (หรือ amylase) ≥3 เท่าของค่าปกติสูงสุด</b> (3) ภาพ (CT/MRI/US) เข้าได้กับ pancreatitis · สาเหตุบ่อย: <b>นิ่วถุงน้ำดี</b> และ <b>สุรา</b> (อื่น ๆ: hypertriglyceridemia, hypercalcemia, หลัง ERCP, ยา, trauma)",
   exp:"Lipase จำเพาะกว่าและสูงนานกว่า amylase · ไม่ต้องทำ CT ถ้าครบ 2 เกณฑ์แรก",
   rubric:"ได้ = acute pancreatitis + เกณฑ์ 2 ใน 3",
   pts:[CR(P("Acute pancreatitis","pancreatitis","ตับอ่อนอักเสบ")),P("Lipase/amylase ≥3× ULN","lipase","amylase","3 เท่า","3x","3×"),P("Criteria ≥2 ใน 3 (pain, enzyme, imaging)","2 ใน 3","2 of 3","atlanta","imaging","ภาพ")]})
 ),
 interp:"ปวดใต้ลิ้นปี่ร้าวหลัง + ดื่มสุรา = acute pancreatitis · วินิจฉัยด้วยเกณฑ์ 2 ใน 3",
 summary:["Acute pancreatitis: ≥2 ใน 3 — pain, lipase/amylase ≥3× ULN, imaging","สาเหตุบ่อย: gallstone, alcohol","อื่น: TG สูง, Ca สูง, post-ERCP, ยา"]}),

/* ===== PowerPoint 3 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 3",topic:"spot",sub:"Other spot",title:"Spot — acute epigastric pain: differential diagnoses and investigations",
 stem:`(Continued from the previous slide: a 45-year-old man who drinks heavily with sudden severe epigastric pain radiating to the back.)<br>1. Give the differential diagnoses.<br>2. What investigations would you send?`,
 gray:"3.ถามต่อว่าให้ diff dx กับอะไร!!! จะส่งอะไรเพิ่มเติม",
 flag:"เคสต่อจาก PPT 2 (ประวัติ Claude แต่ง)",
 parts:S(
  B("PPT 3.1 Differential diagnoses and investigations.",4,{tags:["spot"],
   ans:"<b>DDx</b>: <b>perforated peptic ulcer</b>, <b>acute cholecystitis/cholangitis</b>/biliary colic, <b>acute inferior MI</b>, <b>ruptured/dissecting AAA</b>, <b>acute mesenteric ischemia</b>, bowel obstruction/volvulus, (DKA, lower lobe pneumonia) · <b>Investigations</b>: <b>serum lipase</b> (± amylase) · CBC, BUN/Cr, electrolytes, <b>calcium</b>, <b>glucose</b>, <b>LFT</b> (ALT &gt;150 → นึกถึงนิ่ว), <b>triglyceride</b>, LDH, CRP, ABG/lactate, coagulation · <b>ECG</b> (แยก MI) · <b>upright CXR/acute abdomen series</b> (แยก free air, ดู pleural effusion) · <b>US abdomen</b> (หานิ่วถุงน้ำดี — ทำทุกราย) · <b>CECT abdomen</b> เมื่อวินิจฉัยไม่ชัด หรือหลัง 72–96 ชม. ถ้าไม่ดีขึ้น (หา necrosis/ภาวะแทรกซ้อน) — ไม่จำเป็นต้องทำทันทีทุกราย",
   exp:"ประเมินความรุนแรง: SIRS, BUN, Hct, BISAP, Ranson (48 ชม.), APACHE II, organ failure (modified Marshall) · Revised Atlanta: mild / moderately severe (transient organ failure &lt;48 ชม. หรือ local complication) / severe (persistent organ failure &gt;48 ชม.)",
   rubric:"ได้ = DDx ≥3 รวม PPU และ MI + lipase + US + ECG/CXR + lab ประเมินสาเหตุ/ความรุนแรง",
   pts:[G("DDx (≥3)",3,P("Perforated peptic ulcer","peptic","perforat","ppu","กระเพาะทะลุ"),P("Biliary: cholecystitis / cholangitis","cholecyst","cholangitis","biliary","ถุงน้ำดี"),P("Inferior MI","myocard","\\bmi\\b","stemi","หัวใจขาดเลือด"),P("AAA rupture/dissection","aaa","aneurysm","dissect"),P("Mesenteric ischemia","mesenteric","ischemi"),P("Bowel obstruction","obstruct","อุดตัน","volvulus")),
    CR(P("Serum lipase (± amylase)","lipase","amylase")),P("Lab สาเหตุ/ความรุนแรง: LFT, Ca, TG, glucose, BUN/Cr, CBC","lft","calcium","\\bca\\b","triglycer","\\btg\\b","glucose","bun","cbc"),P("ECG + upright CXR","ecg","ekg","cxr","chest","upright"),CR(P("US abdomen (หานิ่ว) ± CT เมื่อจำเป็น","ultrasound","\\bus\\b","\\bct\\b","cect"))]})
 ),
 interp:"ปวดใต้ลิ้นปี่รุนแรง: แยก PPU, biliary, MI, AAA, mesenteric ischemia และส่งตรวจหาสาเหตุ/ความรุนแรงของ pancreatitis",
 summary:["DDx: PPU, cholecystitis/cholangitis, inferior MI, AAA, mesenteric ischemia","Lipase + LFT, Ca, TG, BUN, glucose","ECG + upright CXR + US ทุกราย","CT เมื่อวินิจฉัยไม่ชัดหรือ 72–96 ชม. ไม่ดีขึ้น"]}),

/* ===== PowerPoint 4 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 4",topic:"spot",sub:"Other spot",title:"Spot — acute pancreatitis: treatment",
 stem:`(Continued: the patient is diagnosed with acute pancreatitis from alcohol.)<br>Outline the treatment.`,
 gray:"4.ถามต่อว่าจะให้รักษายังไง",
 flag:"เคสต่อจาก PPT 2–3 (ข้อมูลผู้ป่วย Claude แต่ง)",
 parts:S(
  B("PPT 4.1 Outline the treatment.",4,{tags:["spot"],
   ans:"<b>Supportive care</b> ใน ward (ICU ถ้า severe/organ failure) · <b>IV fluid</b>: crystalloid (<b>Ringer's lactate</b> ดีกว่า NSS) แบบ <b>goal-directed ปริมาณปานกลาง</b> (เช่น bolus 10 mL/kg ถ้า hypovolemic แล้ว ~1.5 mL/kg/ชม.) ปรับตาม urine output ≥0.5 mL/kg/ชม., HR, BUN, Hct — หลีกเลี่ยงให้มากเกิน (WATERFALL 2022) · <b>ยาแก้ปวด</b> (opioid ใช้ได้) · antiemetic · O2 · <b>เริ่มอาหารทางปากเร็ว</b> (ภายใน 24–72 ชม. เมื่อทนได้) ไม่ต้อง NPO นาน — ถ้ากินไม่ได้ใช้ <b>enteral (NG/NJ) ก่อน TPN</b> · <b>ไม่ให้ antibiotic ป้องกัน</b> (ให้เมื่อมี infected necrosis/การติดเชื้ออื่น) · ติดตาม organ failure, glucose, Ca · <b>รักษาสาเหตุ</b>: หยุดสุรา (+ ป้องกัน alcohol withdrawal: thiamine, benzodiazepine) · ถ้าจากนิ่ว → cholecystectomy ใน admission เดียวกัน (mild), ERCP เฉพาะมี cholangitis/ท่อน้ำดีอุดตันต่อเนื่อง · <b>ภาวะแทรกซ้อน</b>: acute peripancreatic fluid collection/pseudocyst/walled-off necrosis → step-up approach (percutaneous/endoscopic drainage → necrosectomy) เมื่อมีข้อบ่งชี้ ช้ากว่า 4 สัปดาห์ถ้าทำได้",
   exp:"AGA 2018/ACG 2024: aggressive fluid ไม่ดีกว่าและเพิ่ม fluid overload · ไม่ให้ prophylactic antibiotics · early oral feeding ปลอดภัย",
   rubric:"ได้ = IV fluid (LR, goal-directed) + analgesia + early feeding + ไม่ให้ ATB ป้องกัน + รักษาสาเหตุ (หยุดสุรา) · บางส่วน = ให้ NPO นาน/ATB ทุกราย",
   pts:[CR(P("IV fluid (Ringer's lactate) goal-directed","fluid","สารน้ำ","ringer","\\blr\\b","lactate","crystalloid")),P("Analgesia (opioid)","analges","ยาแก้ปวด","opioid","morphine","fentanyl"),CR(P("Early oral/enteral feeding (ไม่ NPO นาน)","early","enteral","feed","oral","กินทางปาก","กินเร็ว","เริ่มอาหาร")),P("ไม่ให้ prophylactic antibiotics","ไม่ให้ยาปฏิชีวนะ","no prophylactic","not.*antibiot","ไม่.*antibiot","without antibiot"),P("รักษาสาเหตุ: หยุดสุรา/thiamine; นิ่ว → cholecystectomy","หยุดสุรา","alcohol","สุรา","thiamine","cholecystectom","withdrawal")]})
 ),
 interp:"Acute pancreatitis: supportive (fluid, analgesia, early feeding), ไม่ให้ ATB ป้องกัน, รักษาสาเหตุ และจัดการภาวะแทรกซ้อนแบบ step-up",
 summary:["Ringer's lactate goal-directed ปานกลาง ไม่มากเกิน","Opioid ใช้ได้ · กินเร็วเมื่อทนได้ · enteral ก่อน TPN","ไม่ให้ prophylactic antibiotics","หยุดสุรา · นิ่ว → cholecystectomy admission เดียวกัน","Necrosis ติดเชื้อ → step-up (drain → necrosectomy)"]}),

/* ===== PowerPoint 5 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 5",topic:"spot",sub:"Imaging film",title:"Spot — infant radiograph: diagnosis",seen:"คล้าย MDCU65 RoA PPT 8 และ MDCU66 RoD PPT 9 (ฟิล์ม midgut volvulus)",
 stem:`A radiograph of a 2-week-old infant with bilious vomiting is shown.<br>1. What is the most likely diagnosis?<br>2. What is the underlying anatomical abnormality, and what is the treatment?`,
 gray:"5.ภาพ xray น่าจะ midgut volvulus บางคนบอกว่าเปน ladd's band",
 flag:NOIMG+" · ผู้จดไม่แน่ใจ (midgut volvulus หรือ Ladd's band) · อายุ/อาการ และคำถามย่อยที่สอง Claude เติม",imgAlt:"ฟิล์มเอกซเรย์ช่องท้องของทารก",
 opinion:"คำตอบทั้งสองที่ผู้จดได้ยินมาเกี่ยวกันจริง: malrotation ทำให้เกิดทั้ง Ladd's bands (กด duodenum → อุดตัน) และ midgut volvulus (บิดรอบ SMA) — ในเด็กที่อาเจียนน้ำดี diagnosis ที่ต้องตอบคือ malrotation with midgut volvulus (ภาวะฉุกเฉิน) โดยกล่าวถึง Ladd's bands เป็นส่วนของพยาธิสภาพ",
 parts:S(
  B("PPT 5.1 Diagnosis, underlying abnormality and treatment.",4,{tags:["spot"],key:"ไฟล์: 'น่าจะ midgut volvulus บางคนบอกว่าเป็น Ladd's band'",
   ans:"<b>Malrotation with midgut volvulus</b> (± duodenal obstruction จาก <b>Ladd's bands</b>) · ฟิล์มธรรมดา: อาจเห็น <b>double bubble</b> ที่มีลมปลายน้อย/ไม่มี หรือลำไส้กระจายผิดตำแหน่ง/gasless abdomen · UGI: DJ junction ขวาต่อแนวกลาง, corkscrew, beak · <b>พยาธิสภาพ</b>: ลำไส้หมุนไม่ครบ 270° → cecum อยู่ผิดตำแหน่ง (RUQ) มี <b>Ladd's bands</b> พาดจาก cecum ผ่าน duodenum ไปผนังด้านขวา + <b>ฐาน mesentery แคบ</b> → บิดรอบ SMA ง่าย · <b>รักษา</b>: resuscitation (NG, IV fluid, antibiotics) → <b>emergency Ladd's procedure</b> (detorsion ทวนเข็มนาฬิกา, ตัด Ladd's bands, ขยาย mesentery, appendectomy, วาง SB ขวา colon ซ้าย)",
   exp:"Double bubble + ไม่มีลมปลายเลย = duodenal atresia (มักไม่ฉุกเฉินเท่า) · double bubble + มีลมปลาย = ต้องคิด malrotation/volvulus (ฉุกเฉิน) หรือ duodenal stenosis/web",
   rubric:"ได้ = malrotation with midgut volvulus + อธิบาย Ladd's bands/mesentery แคบ + Ladd's procedure ฉุกเฉิน",
   pts:[CR(P("Malrotation with midgut volvulus","volvulus","malrotation")),P("Ladd's bands + ฐาน mesentery แคบ","ladd","band","mesenter","narrow","แคบ"),CR(P("Emergency Ladd's procedure","ladd's procedure","ladd procedure","emergen","ฉุกเฉิน","laparotom")),P("Detorsion ทวนเข็ม, appendectomy","counterclock","anticlock","ทวนเข็ม","appendectom")]})
 ),
 interp:"Malrotation: Ladd's bands และ midgut volvulus มาจากความผิดปกติเดียวกัน — อาเจียนน้ำดี = ผ่าตัดฉุกเฉิน",
 summary:["Malrotation → Ladd's bands (กด duodenum) + mesentery แคบ (volvulus)","Bilious vomiting ในทารก = ฉุกเฉิน","Double bubble + ลมปลาย → คิด volvulus","Ladd's procedure"]}),

/* ===== PowerPoint 6 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 6",topic:"spot",sub:"Imaging film",title:"Spot — intravenous pyelogram: describe the abnormality",seen:"คล้าย MDCU65 RoA PPT 3 (IVP อ่านความผิดปกติ)",
 stem:`An intravenous pyelogram of a 20-year-old man with intermittent right flank pain, worse after drinking large volumes of fluid, is shown.<br>1. Describe the abnormality.<br>2. What is the diagnosis?`,
 gray:"6.ภาพ IVP ถามความผิดปกติให้บรรยาย",
 flag:"⚠ "+NOIMG+" · ไฟล์ไม่ได้บอกความผิดปกติ — Claude เลือก UPJ obstruction (ไม่ซ้ำกับนิ่วในท่อไตของ MDCU65 RoA) และแต่งประวัติ",imgAlt:"ฟิล์ม IVP ของผู้ป่วยชายวัยหนุ่ม",
 parts:S(
  B("PPT 6.1 Describe the abnormality and give the diagnosis.",4,{tags:["spot"],
   ans:"<b>บรรยาย</b>: KUB ไม่มีก้อน radiopaque · IVP: ไตขวา nephrogram ช้า, <b>renal pelvis โป่งขยายมาก (ballooned pelvis) และ calyces ป้าน (hydronephrosis)</b> · <b>ureter ขวาขนาดปกติหรือมองไม่เห็นใต้ระดับ UPJ</b> (ไม่มี hydroureter) · ไตซ้ายปกติ · <b>Dx: Right ureteropelvic junction (UPJ) obstruction</b> · สาเหตุ: intrinsic stenosis (aperistaltic segment), crossing lower-pole vessel · ยืนยัน/ประเมิน: <b>diuretic renogram (MAG3 + furosemide)</b> ดู obstruction และ split function · รักษา: <b>pyeloplasty (Anderson-Hynes dismembered)</b> แบบ open/laparoscopic/robotic เมื่อมีอาการ, split function ลด, ติดเชื้อ/นิ่ว",
   exp:"Dietl's crisis = ปวดเอวเป็นพัก ๆ หลังดื่มน้ำมาก/เบียร์ ใน UPJ obstruction · hydronephrosis + hydroureter = อุดตันที่ ureter ส่วนล่าง/VUJ/VUR",
   rubric:"ได้ = hydronephrosis + ureter ปกติ (ไม่มี hydroureter) + UPJ obstruction · บางส่วน = บอกแค่ hydronephrosis",
   pts:[CR(P("Hydronephrosis: pelvis โป่ง calyces ป้าน","hydroneph","ไตบวม","pelvis","calyc","blunt","club","balloon")),P("Ureter ขนาดปกติ (ไม่มี hydroureter)","ureter ปกติ","normal ureter","ไม่มี hydroureter","no hydroureter","non.?dilated"),P("Delayed nephrogram / ไม่มีนิ่ว","delay","no stone","ไม่มีนิ่ว","radiolucent"),CR(P("UPJ obstruction","upj","ureteropelvic","pelviureteric","puj")),P("Diuretic renogram / pyeloplasty","renogra","mag3","dtpa","pyeloplast")]})
 ),
 interp:"แยกระดับการอุดตันบน IVP: hydronephrosis อย่างเดียว (UPJ) vs hydroureteronephrosis (ต่ำกว่า)",
 summary:["UPJ obstruction: pelvis โป่ง + calyces ป้าน + ureter ปกติ","Dietl's crisis: ปวดหลังดื่มน้ำมาก","ยืนยัน: diuretic renogram (MAG3)","รักษา: dismembered pyeloplasty"]}),

/* ===== PowerPoint 7 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 7",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — lesion beside the nasal ala: diagnosis and management",
 stem:`A photograph shows a well-defined, raised skin lesion beside the ala of the nose of a 68-year-old farmer.<br>1. What is the most likely diagnosis? Give the main differential diagnosis.<br>2. Outline the management.`,
 gray:"7.ภาพ basal cell หรือ squamous cell ca ก็ไม่รู้ เถียงๆกัน แต่ขึ้นข้างปีกจมูก ไม่เห็นวาวๆ แต่ก็ขอบเขตก็ชัดเจนดี",
 flag:"⚠ "+NOIMG+" · ผู้จดไม่แน่ใจระหว่าง BCC กับ SCC · อายุ/อาชีพ Claude เติม",imgAlt:"รูปใบหน้าด้านข้างจมูก มีรอยโรคที่ผิวหนังข้างปีกจมูก",
 opinion:"ไฟล์ไม่มีคำตอบ (ผู้จดเถียงกันระหว่าง BCC/SCC) · Claude ตอบ BCC เป็นอันดับแรก เพราะตำแหน่งใบหน้าส่วนกลาง (H-zone/ข้างปีกจมูก) และขอบเขตชัดเป็นลักษณะของ BCC ซึ่งพบบ่อยที่สุด แม้ไม่เห็น pearly appearance · ต้องยืนยันด้วย biopsy",
 parts:S(
  B("PPT 7.1 Diagnosis, differential and management.",4,{tags:["spot"],key:"ผู้จด: BCC หรือ SCC ไม่แน่ใจ — ขึ้นข้างปีกจมูก ไม่เห็นวาว ๆ แต่ขอบเขตชัด",
   ans:"<b>Most likely: Basal cell carcinoma (nodular type)</b> — มะเร็งผิวหนังที่พบบ่อยที่สุด ชอบใบหน้าส่วนกลาง (ข้างจมูก, nasolabial fold, เปลือกตา), <b>ขอบเขตชัด ขอบนูนม้วน (rolled border)</b>, ผิวมันวาว (pearly) มี telangiectasia, อาจมีแผลตรงกลาง (rodent ulcer) — ไม่จำเป็นต้องเห็นมันวาวทุกราย · <b>DDx: Squamous cell carcinoma</b> — ขอบเขตไม่ชัดเท่า แข็ง มีสะเก็ด keratin/แผล โตเร็วกว่า เกิดบน actinic keratosis, ริมฝีปากล่าง, หลังมือ · อื่น ๆ: keratoacanthoma, amelanotic melanoma, sebaceous hyperplasia · <b>Management</b>: <b>biopsy</b> (punch/shave/incisional) ยืนยัน · BCC: <b>surgical excision margin ~4 mm</b> (low-risk) · ใบหน้าส่วนกลาง (H-zone) = <b>high-risk</b> → <b>Mohs micrographic surgery</b> หรือ excision with margin control/frozen section · ปิดแผลด้วย local flap/graft · ทางเลือกในผู้ที่ผ่าตัดไม่ได้: radiotherapy · BCC แพร่กระจายน้อยมาก ไม่ต้องตรวจ LN routine (SCC ต้องตรวจ) · ป้องกันแดด ติดตามผิวหนัง",
   exp:"NCCN: H-zone (central face, eyelids, nose, lips, chin, ear, periauricular) จัดเป็นตำแหน่ง high-risk ทั้ง BCC และ SCC",
   rubric:"ได้ = BCC (ให้เหตุผลตำแหน่ง/ขอบเขต) + DDx SCC + biopsy + excision margin/Mohs · บางส่วน = ตอบ SCC โดยให้เหตุผลและการรักษาถูกต้อง",
   pts:[CR(P("Basal cell carcinoma","basal cell","\\bbcc\\b")),P("เหตุผล: H-zone, ขอบเขตชัด, rolled border","h.?zone","central face","ขอบเขตชัด","well.?defined","rolled","pearly","telangiect"),P("DDx: SCC","squamous","\\bscc\\b"),CR(P("Biopsy ยืนยัน","biopsy","ชิ้นเนื้อ")),P("Excision margin 4 mm / Mohs","excision","4 mm","mohs","margin")]})
 ),
 interp:"รอยโรคขอบเขตชัดบนใบหน้าส่วนกลางในผู้สูงอายุ: นึกถึง BCC ก่อน ยืนยันด้วย biopsy และผ่าตัดโดยควบคุมขอบ",
 summary:["BCC: H-zone, rolled pearly border, telangiectasia, rodent ulcer","SCC: ขอบไม่ชัด keratin แผล บน actinic keratosis","Biopsy → excision 4 mm (low risk) / Mohs (H-zone)","BCC แพร่กระจายน้อยมาก"]}),

/* ===== PowerPoint 8 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 8",topic:"spot",sub:"Breast",title:"Spot — breast lump: further history",
 stem:`A photograph of a woman's breast with a visible lump is shown. She presents with a breast lump.<br>What further history would you take?`,
 gray:"8.รูปนมมาด้วยก้อน ให้ซักประวัติเพิ่มเติม",
 flag:NOIMG,imgAlt:"รูปเต้านมของหญิงวัยผู้ใหญ่ที่มีก้อนนูน",
 parts:S(
  B("PPT 8.1 What further history would you take?",4,{tags:["spot"],
   ans:"<b>เกี่ยวกับก้อน</b>: พบเมื่อไร อย่างไร, <b>โตเร็ว/ช้า</b>, เจ็บไหม, <b>เปลี่ยนตามรอบเดือน</b>ไหม, ก้อนอื่น/อีกข้าง · <b>อาการร่วมเฉพาะที่</b>: <b>nipple discharge</b> (เลือด), หัวนมบุ๋ม/เปลี่ยน, ผิวหนังบุ๋ม/เปลือกส้ม/แดง/แผล, ก้อนที่รักแร้ · <b>อาการแพร่กระจาย</b>: น้ำหนักลด เบื่ออาหาร, <b>ปวดกระดูก</b>, ไอ/หอบ, ปวดท้องขวาบน/ตัวเหลือง, ปวดศีรษะ/อ่อนแรง · <b>ปัจจัยเสี่ยง</b>: อายุ, <b>ประวัติครอบครัว</b> มะเร็งเต้านม/รังไข่ (อายุที่เป็น, ญาติสายตรง, BRCA), <b>ประวัติประจำเดือน</b> (มีประจำเดือนเร็ว &lt;12 ปี, หมดช้า &gt;55 ปี), <b>ไม่มีบุตร/มีบุตรคนแรกอายุ &gt;30 ปี</b>, ไม่ได้ให้นมบุตร, <b>ฮอร์โมน</b> (HRT, ยาคุม), เคยฉายรังสีทรวงอก (เช่น Hodgkin), เคยตัดชิ้นเนื้อเต้านม (atypical hyperplasia/LCIS), มะเร็งเต้านมข้างตรงข้าม, สุรา อ้วน · <b>อื่น ๆ</b>: ตั้งครรภ์/ให้นม (แยก galactocele/abscess), ประวัติอุบัติเหตุ (fat necrosis), ผล mammogram เดิม, โรคประจำตัว ยา",
   exp:"Gail model ใช้อายุ, อายุมีประจำเดือนครั้งแรก, อายุมีบุตรคนแรก, ญาติสายตรงเป็นมะเร็ง, จำนวนครั้งที่ biopsy, atypical hyperplasia, เชื้อชาติ",
   rubric:"ได้ = ลักษณะก้อน + อาการเฉพาะที่ (discharge/ผิว/หัวนม) + อาการแพร่กระจาย + ปัจจัยเสี่ยง ≥4 (ครอบครัว, ประจำเดือน, บุตร, ฮอร์โมน)",
   pts:[P("ลักษณะก้อน: เวลา โตเร็ว เจ็บ รอบเดือน","โตเร็ว","โตขึ้น","grow","เจ็บ","pain","รอบเดือน","cyclic","menstrua","ระยะเวลา","duration"),P("Nipple discharge / หัวนม / ผิวหนัง / รักแร้","discharge","หัวนม","nipple","ผิวหนัง","skin","รักแร้","axill"),P("อาการแพร่กระจาย: น้ำหนักลด ปวดกระดูก หอบ","น้ำหนัก","weight","กระดูก","bone","หอบ","ไอ","dyspn","metasta"),
    CR(P("ประวัติครอบครัวมะเร็งเต้านม/รังไข่ (BRCA)","ครอบครัว","family","brca","ญาติ")),G("ปัจจัยเสี่ยงอื่น (≥3)",3,P("ประจำเดือนเร็ว/หมดช้า","menarche","menopaus","ประจำเดือนครั้งแรก","หมดประจำเดือน"),P("ไม่มีบุตร/บุตรคนแรก >30 ปี/ไม่ให้นม","บุตร","nullipar","parity","first birth","ให้นม","breastfe"),P("HRT / ยาคุม","hrt","hormone","ฮอร์โมน","ยาคุม","contracept"),P("ฉายรังสีทรวงอก","radiat","รังสี"),P("เคย biopsy / atypia / LCIS","biopsy","atypi","lcis","ชิ้นเนื้อ"),P("สุรา / อ้วน","alcohol","สุรา","obes","อ้วน"))]})
 ),
 interp:"ซักประวัติก้อนเต้านม: ลักษณะก้อน, อาการเฉพาะที่, อาการแพร่กระจาย และปัจจัยเสี่ยงมะเร็งเต้านม",
 summary:["ก้อน: เวลา โตเร็ว เจ็บ สัมพันธ์รอบเดือน","เฉพาะที่: discharge หัวนม ผิวหนัง รักแร้","แพร่กระจาย: กระดูก ปอด ตับ สมอง น้ำหนักลด","เสี่ยง: ครอบครัว/BRCA, menarche/menopause, parity, HRT, รังสี, atypia"]}),

/* ===== PowerPoint 9 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 9",topic:"spot",sub:"Pathology/Staging",title:"Spot — breast cancer clinical data: give the clinical stage",
 stem:`A woman has a breast mass 4.5 cm in diameter that is fixed (to the underlying pectoralis fascia), with no skin changes. There are fixed, matted ipsilateral axillary lymph nodes. Chest X-ray and blood tests show no evidence of metastasis.<br>Give the clinical TNM classification and stage.`,
 gray:"9. มีข้อมูลให้มาหมด ก้อน 4.5 cm fixed no skin lesion. Lymph node fixed matted node at axilla ตรวจ CXR และผลเลือด ไม่พบ metastasis ให้ตอบ clinical staging",
 flag:"⚠ ไฟล์เขียนแค่ 'fixed' ไม่ได้บอกว่าติดกับอะไร — Claude ระบุในโจทย์ว่าติด pectoralis fascia (ไม่ใช่ผนังทรวงอก) และอธิบายทั้งสองกรณีในเฉลย",
 opinion:"คำว่า 'fixed' ในโจทย์กำกวม: ถ้าติดเฉพาะกล้ามเนื้อ pectoralis = ยังเป็น T2 · ถ้าติดผนังทรวงอก (ซี่โครง/intercostal/serratus anterior) = T4a → stage IIIB · ข้อสอบส่วนใหญ่ต้องการคำตอบ T2N2aM0 = IIIA",
 parts:S(
  B("PPT 9.1 Clinical TNM and stage.",4,{tags:["spot"],
   ans:"<b>cT2</b> (4.5 cm: &gt;2–5 cm; การติด <b>pectoralis muscle/fascia ไม่นับเป็น T4</b>) · <b>cN2a</b> (ipsilateral axillary LN ที่ <b>fixed/matted</b> ติดกันหรือติดโครงสร้างอื่น) · <b>cM0</b> → <b>Clinical stage IIIA</b> (T2N2M0; locally advanced breast cancer) · ถ้า 'fixed' หมายถึง<b>ติดผนังทรวงอก</b> (ซี่โครง, intercostal, serratus anterior) = <b>T4a</b> → stage <b>IIIB</b> · แนวรักษา: core biopsy + receptor status → <b>neoadjuvant systemic therapy</b> → surgery (mastectomy + axillary dissection) → radiotherapy",
   exp:"cN1 = axillary LN เคลื่อนได้ · cN2a = axillary LN fixed/matted · cN2b = internal mammary LN อย่างเดียว · cN3 = infraclavicular / internal mammary + axillary / supraclavicular · T4b = ผิวหนังบวมเปลือกส้ม แผล satellite nodules · T4d = inflammatory",
   rubric:"ได้ = T2 + N2a (fixed/matted) + M0 + IIIA (หรือ T4a/IIIB พร้อมเหตุผลว่าติดผนังอก) · บางส่วน = ตอบ N1",
   pts:[CR(P("cT2 (4.5 cm; ติด pectoralis ไม่นับ T4)","t2")),CR(P("cN2a (fixed/matted axillary LN)","n2")),P("M0","m0"),CR(P("Stage IIIA","iiia","3a","stage iii")),P("ถ้าติดผนังอก = T4a → IIIB","t4a","iiib","chest wall","ผนังอก")]})
 ),
 interp:"จัด clinical stage มะเร็งเต้านม: LN fixed/matted = N2a, ติด pectoralis ≠ T4, ติดผนังอก = T4a",
 summary:["cN1 เคลื่อนได้ · cN2a fixed/matted · cN3 infra/supraclavicular","ติด pectoralis ≠ T4 · ติดผนังอก (ซี่โครง/serratus) = T4a","T2N2M0 = IIIA (locally advanced)","LABC → neoadjuvant systemic therapy ก่อนผ่าตัด"]}),

/* ===== PowerPoint 10 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 10",topic:"spot",sub:"Plastic/Skin/Burn",title:"Spot — enlarging scar after a small abrasion",
 stem:`A patient had a small abrasion about 2 months ago. It has now become a large, raised, firm scar extending beyond the original wound.<br>A. What is this lesion called?<br>B. How can it be distinguished from a hypertrophic scar?`,
 gray:"10. เคยมีแผล abrasion ขนาดเล็กๆ เมื่อไม่นานมานี้ ( 2 เดือนปะ?) ปัจจุบันมีแผลขนาดใหญ่น่าจะเป็น keloid ก. จง dx ว่า lesion เรียกว่า? ข. Lesion ดังกล่าวจะแยกกับ hypertrophic scar ได้อย่างไร?",
 flag:NOIMG+" · ผู้จดไม่แน่ใจระยะเวลา ('2 เดือนปะ?')",imgAlt:"รูปแผลเป็นนูนบนผิวหนัง",
 parts:S(
  B("PPT 10.1 (A) What is this lesion called?",2,{tags:["spot"],key:"ไฟล์: 'น่าจะเป็น keloid'",
   ans:"<b>Keloid</b> — แผลเป็นนูนจากการสร้าง collagen มากผิดปกติ <b>ลุกลามเกินขอบเขตแผลเดิม</b> แม้แผลเริ่มต้นเล็กมาก (abrasion, สิว, เจาะหู)",
   exp:"ตำแหน่งที่พบบ่อย: ติ่งหู, กลางอก (presternal), ไหล่, หลังส่วนบน · พบมากในผิวสีเข้ม และมีประวัติครอบครัว",
   rubric:"ได้ = keloid",
   pts:[CR(P("Keloid","keloid","คีลอยด์"))]}),
  B("PPT 10.2 (B) How do you distinguish it from a hypertrophic scar?",4,{tags:["spot"],
   ans:"<b>Keloid</b>: <b>ลามเกินขอบแผลเดิม</b> · เกิดช้า (หลายเดือนหลังแผลหาย) · <b>ไม่ยุบเอง</b> โตต่อเนื่อง · ตำแหน่งจำเพาะ (ติ่งหู กลางอก ไหล่ หลังส่วนบน) · ผิวสีเข้ม/ครอบครัว · <b>เป็นซ้ำสูงมากหลังผ่าตัดตัดออกอย่างเดียว</b> (45–100%) · พยาธิ: <b>collagen มัดหนาแบบ hyalinized (keloidal collagen) เรียงไม่เป็นระเบียบ</b>, ไม่มี nodule, myofibroblast น้อย · <b>Hypertrophic scar</b>: <b>อยู่ภายในขอบแผลเดิม</b> · เกิดเร็ว (ภายในสัปดาห์–1 เดือน) · <b>ยุบลงเองได้</b>ใน 12–18 เดือน · เกิดบริเวณที่มีแรงตึง/ข้อพับ/แผลไฟไหม้ · ตอบสนองต่อการแก้แรงตึง (Z-plasty) ดี เป็นซ้ำน้อยกว่า · พยาธิ: collagen เส้นเล็กเรียงขนานผิว, มี <b>nodule ของ myofibroblast (α-SMA บวก)</b> · <b>การรักษา keloid</b>: intralesional triamcinolone, silicone gel sheet, pressure garment; ผ่าตัด + adjuvant (steroid injection/radiotherapy)",
   exp:"ทั้งสองเป็น fibroproliferative disorder ของการหายของแผล · ป้องกันใน keloid-prone: หลีกเลี่ยงการผ่าตัด/เจาะที่ไม่จำเป็น, ลดแรงตึงแผล",
   rubric:"ได้ = ขอบเขตเกินแผลเดิม vs อยู่ในขอบ + การยุบเอง + เวลาเกิด + เป็นซ้ำ ± พยาธิวิทยา · บางส่วน = บอกได้ข้อเดียว",
   pts:[CR(P("Keloid เกินขอบแผลเดิม vs hypertrophic อยู่ในขอบ","เกินขอบ","beyond","ขอบแผลเดิม","original","within","ภายในขอบ","border","boundar")),P("Hypertrophic ยุบเองได้ใน 12–18 เดือน / keloid ไม่ยุบ","ยุบ","regress","หายเอง","12.?18"),P("เวลาเกิด: hypertrophic เร็ว / keloid ช้า","เกิดเร็ว","เกิดช้า","early","late","months later","within weeks"),P("Keloid เป็นซ้ำสูงหลังตัด","เป็นซ้ำ","recur"),P("พยาธิ: keloidal collagen vs myofibroblast nodules","collagen","myofibroblast","hyalin","α-sma","sma","nodule")]})
 ),
 interp:"แยก keloid กับ hypertrophic scar: ขอบเขตเทียบแผลเดิม การยุบเอง เวลาเกิด และการเป็นซ้ำ",
 summary:["Keloid: เกินขอบแผลเดิม ไม่ยุบ เกิดช้า เป็นซ้ำสูง ติ่งหู/อก/ไหล่","Hypertrophic: อยู่ในขอบ ยุบเอง 12–18 เดือน เกิดเร็ว บริเวณตึง/ข้อ","พยาธิ: keloidal collagen vs myofibroblast nodules","Keloid: triamcinolone ฉีด, silicone, pressure; ผ่าตัดต้องมี adjuvant"]}),

/* ===== PowerPoint 11 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 11",topic:"spot",sub:"Vascular/Ulcer",title:"Spot — chronic leg ulcer: describe the lesion",
 stem:`A photograph of a chronic ulcer on the lower leg of a 60-year-old woman is shown.<br>Describe the lesion.`,
 gray:"11. มี chronic venous ulcer ให้บรรยาย lesion",
 flag:NOIMG+" · อายุ/เพศ Claude เติม",imgAlt:"รูปแผลเรื้อรังบริเวณขาส่วนล่าง",
 notes:"สไลด์ 11–12 เป็นเคสเดียวกัน (แยกเป็นคนละสถานีตามเลขในไฟล์)",
 parts:S(
  B("PPT 11.1 Describe the lesion.",4,{tags:["spot"],key:"ไฟล์ระบุ: chronic venous ulcer (ไม่มีเฉลยการบรรยาย)",
   ans:"แผลเดี่ยวขนาดใหญ่ ~6×4 cm ที่ <b>gaiter area เหนือ medial malleolus</b> · รูปร่างไม่สม่ำเสมอ · <b>ขอบลาดเอียง (sloping edge)</b> ไม่นูน · <b>ตื้น</b> · <b>ฐานเป็น granulation tissue สีแดงปนคราบ fibrin สีเหลือง</b> · <b>มีสารคัดหลั่ง (exudate) มาก</b> · ไม่ค่อยเจ็บ · <b>ผิวรอบแผล</b>: <b>สีน้ำตาลคล้ำ (hemosiderin pigmentation)</b>, <b>lipodermatosclerosis</b> (ผิวแข็งตึง ขาเป็นรูปขวดแชมเปญคว่ำ), venous eczema, atrophie blanche, <b>เส้นเลือดขอด</b>, ขาบวม · ชีพจรเท้าคลำได้ (ต้องตรวจ ABI ก่อนใช้ compression) · <b>Dx: Chronic venous ulcer (CEAP C6)</b>",
   exp:"เทียบ arterial ulcer: ปลายนิ้ว/จุดกดทับ ขอบเรียบ punched-out ฐานซีด เจ็บมาก ชีพจรเบา · neuropathic ulcer: ฝ่าเท้าจุดรับน้ำหนัก มี callus ไม่เจ็บ",
   rubric:"ได้ = ตำแหน่ง gaiter/medial malleolus + ขอบลาด + ตื้น + ฐาน granulation/fibrin + exudate + ผิวรอบ (pigmentation, lipodermatosclerosis, varicose) · บางส่วน = บรรยายแผลไม่ครบองค์ประกอบ",
   pts:[CR(P("ตำแหน่ง: gaiter area / medial malleolus","gaiter","medial malleol","ตาตุ่มด้านใน","ข้อเท้าด้านใน")),CR(P("ขอบลาด (sloping) แผลตื้น","slop","ลาด","shallow","ตื้น")),P("ฐาน granulation + fibrin, exudate มาก","granulation","fibrin","slough","exudat","สารคัดหลั่ง"),CR(P("ผิวรอบ: hemosiderin pigmentation, lipodermatosclerosis, eczema, varicose veins","pigment","hemosiderin","คล้ำ","lipodermato","eczema","varicose","เส้นเลือดขอด","atrophie")),P("ขนาด / ความเจ็บน้อย / ชีพจรคลำได้","ขนาด","size","cm","เจ็บน้อย","painless","pulse","ชีพจร")]})
 ),
 interp:"บรรยายแผลเรื้อรังที่ขาเป็นระบบ — ตำแหน่ง ขอบ ฐาน สารคัดหลั่ง ผิวรอบแผล — ให้เห็นลักษณะของ venous ulcer",
 summary:["Venous ulcer: gaiter area เหนือ medial malleolus","ขอบลาด ตื้น ฐาน granulation/fibrin exudate มาก ไม่ค่อยเจ็บ","ผิวรอบ: hemosiderin, lipodermatosclerosis, eczema, varicose veins","Arterial: ปลายนิ้ว punched-out ซีด เจ็บมาก"]}),

/* ===== PowerPoint 12 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 12",topic:"spot",sub:"Vascular/Ulcer",title:"Spot — chronic venous ulcer: cause and risk factors",
 stem:`(Continued from the previous slide: chronic venous ulcer of the lower leg.)<br>1. What causes this ulcer?<br>2. What are the risk factors?`,
 gray:"12.ข้อต่อมาให้ถามว่าเกิดจากอะไร และถามว่าอะไรเป็น risk",
 flag:"เคสต่อจาก PPT 11",
 parts:S(
  B("PPT 12.1 Cause and risk factors.",4,{tags:["spot"],
   ans:"<b>สาเหตุ (pathophysiology)</b>: <b>chronic venous insufficiency → ambulatory venous hypertension</b> ที่ขาส่วนล่าง จาก (1) <b>valvular reflux</b> ของ superficial (GSV/SSV), perforator หรือ deep veins (2) <b>venous obstruction</b> — ส่วนใหญ่ <b>post-thrombotic syndrome</b> หลัง DVT (3) <b>calf muscle pump ล้มเหลว</b> (ข้อเท้ายึด, อัมพาต, อ้วน) → ความดันสูงในหลอดเลือดฝอย → เม็ดเลือดขาวติดค้าง/fibrin cuff/hemosiderin → การอักเสบเรื้อรัง ผิวขาดออกซิเจน → แผล · <b>Risk factors</b>: <b>ประวัติ DVT</b>/กระดูกหักที่ขา, <b>varicose veins</b>, อายุมาก, เพศหญิง, <b>ตั้งครรภ์หลายครั้ง</b>, <b>อ้วน</b>, <b>ยืนนาน</b>/ไม่ค่อยเคลื่อนไหว, ประวัติครอบครัว, thrombophilia, การเคลื่อนไหวข้อเท้าน้อย · รักษาหลัก: <b>compression therapy</b> (หลังตรวจ ABI ≥0.8) + ยกขา + ดูแลแผล ± แก้ superficial reflux (EVLA/RFA/ผ่าตัด) ลดการกลับเป็นซ้ำ",
   exp:"ESCHAR/EVRA trial: แก้ superficial venous reflux ร่วมกับ compression ช่วยให้แผลหายเร็วขึ้นและลดการกลับเป็นซ้ำ",
   rubric:"ได้ = venous hypertension จาก reflux/obstruction (post-thrombotic)/calf pump failure + risk factors ≥4 รวม DVT",
   pts:[CR(P("Chronic venous insufficiency → venous hypertension","venous hypertens","venous insuffic","\\bcvi\\b","ความดันในหลอดเลือดดำ")),P("Valvular reflux (superficial/perforator/deep)","reflux","valv","incompeten","ลิ้น"),P("Post-thrombotic / obstruction / calf pump failure","post.?thromb","obstruct","calf","muscle pump","อุดตัน"),
    G("Risk factors (≥4)",4,P("ประวัติ DVT","dvt","deep vein","thrombos","ลิ่มเลือด"),P("Varicose veins","varicose","เส้นเลือดขอด"),P("อายุมาก / หญิง","อายุ","elder","อายุมาก","หญิง","female"),P("ตั้งครรภ์หลายครั้ง","pregnan","ตั้งครรภ์","multipar"),P("อ้วน","obes","อ้วน","bmi"),P("ยืนนาน / ไม่เคลื่อนไหว","ยืนนาน","prolonged stand","immobil","standing"),P("ประวัติครอบครัว / thrombophilia","family","ครอบครัว","thrombophil"),P("ขาบาดเจ็บ/กระดูกหัก","fracture","trauma","กระดูกหัก"))]})
 ),
 interp:"Venous ulcer เกิดจาก ambulatory venous hypertension (reflux, obstruction, calf pump failure) — risk สำคัญคือ DVT และ varicose veins",
 summary:["Venous hypertension: reflux + obstruction (post-thrombotic) + calf pump failure","Risk: DVT, varicose veins, อายุ, หญิง, ครรภ์หลายครั้ง, อ้วน, ยืนนาน","รักษา: compression (ABI ≥0.8) + ยกขา + แก้ superficial reflux"]}),

/* ===== PowerPoint 13 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 13",topic:"spot",sub:"Imaging film",title:"Spot — newborn radiograph with a history of polyhydramnios",
 stem:`A newborn whose mother had polyhydramnios develops bilious vomiting within the first day of life. An abdominal radiograph is shown.<br>1. What is the diagnosis?<br>2. Explain the pathogenesis.`,
 gray:"13. เด็กมี polyhydraminos ให้รูป double bubble signมา ให้ Dx และบอกพยาธิกำเนิดของโรค",
 flag:NOIMG+" · อาการอาเจียนน้ำดี Claude เติม",imgAlt:"ฟิล์มเอกซเรย์ช่องท้องของทารกแรกเกิด",
 notes:"ไฟล์ระบุว่าในรูปมี double bubble sign (ไม่ใส่ในโจทย์เพื่อไม่ใบ้)",
 parts:S(
  B("PPT 13.1 Diagnosis and pathogenesis.",4,{tags:["spot"],key:"ไฟล์: ให้รูป double bubble sign + polyhydramnios (ไม่มีเฉลย)",
   ans:"<b>ฟิล์ม</b>: <b>double bubble sign</b> (ลมในกระเพาะ + duodenal bulb) <b>ไม่มีลมในลำไส้ส่วนปลาย</b> · <b>Dx: Duodenal atresia</b> (อุดตันมักอยู่ <b>distal ต่อ ampulla of Vater</b> → อาเจียนมีน้ำดี) · <b>พยาธิกำเนิด</b>: <b>failure of recanalization</b> ของลำไส้เล็กส่วน duodenum — ช่วงสัปดาห์ที่ 5–6 เยื่อบุเจริญจนอุดลำไส้ (solid cord stage) แล้วต้องเกิด vacuolization กลับเป็นท่อในสัปดาห์ที่ 8–10 ถ้าไม่เกิด → atresia/stenosis/web (ต่างจาก jejunoileal atresia ที่เกิดจาก vascular accident ในครรภ์) · <b>Polyhydramnios</b>: ทารกกลืนน้ำคร่ำแล้วผ่านลำไส้ไม่ได้ · <b>ความผิดปกติร่วม</b>: <b>Down syndrome (~30%)</b>, annular pancreas, malrotation, congenital heart disease, VACTERL · <b>รักษา</b>: NG decompression, IV fluid/electrolyte, echo → <b>duodenoduodenostomy (diamond-shaped)</b>",
   exp:"Double bubble + มีลมปลาย = incomplete obstruction (stenosis/web) หรือ malrotation with volvulus — ต้องรีบ UGI study",
   rubric:"ได้ = duodenal atresia + failure of recanalization + สัมพันธ์ Down syndrome ± polyhydramnios mechanism",
   pts:[CR(P("Duodenal atresia","duodenal atresia","duodenal obstruct","atresia")),P("Double bubble ไม่มีลมปลาย","double bubble","ไม่มีลม","no distal gas","gasless"),CR(P("Failure of recanalization","recanaliz","vacuoliz","solid cord","solid core")),P("Polyhydramnios: กลืนน้ำคร่ำผ่านไม่ได้","polyhydramnios","น้ำคร่ำ","amniotic","swallow"),P("Associated: Down syndrome, annular pancreas, malrotation, CHD","down","trisomy 21","annular","malrotation","heart","หัวใจ")]})
 ),
 interp:"Polyhydramnios + double bubble ไม่มีลมปลาย = duodenal atresia จาก failure of recanalization · หา Down syndrome/หัวใจร่วม",
 summary:["Double bubble ไม่มีลมปลาย = duodenal atresia","Failure of recanalization (สัปดาห์ 8–10)","ร่วม: Down ~30%, annular pancreas, malrotation, CHD","รักษา: NG + fluid → duodenoduodenostomy"]}),

/* ===== PowerPoint 14 ===== */
Co({page:282,sec:"PowerPoint",orig:"PPT 14",topic:"spot",sub:"Uro/Genital",title:"Spot — scrotal swelling: diagnosis and management",
 stem:`A photograph of a scrotal swelling in a child is shown. The swelling is cystic, transilluminates brightly, and the examiner can get above it.<br>1. What is this?<br>2. Outline the management.`,
 gray:"14.ภาพ hydrocele ถามว่าคืออะไร และก็ management ยังไง",
 flag:NOIMG+" · ผลตรวจ (ส่องไฟผ่าน, คลำขอบบนได้) และอายุเด็ก Claude เติม — เฉลยใส่หลักการในผู้ใหญ่ด้วย",imgAlt:"รูปถุงอัณฑะข้างหนึ่งบวมโต",
 parts:S(
  B("PPT 14.1 Diagnosis and management.",4,{tags:["spot"],key:"ไฟล์ระบุ: hydrocele (ไม่มีเฉลย management)",
   ans:"<b>Hydrocele</b> — สารน้ำสะสมใน tunica vaginalis รอบอัณฑะ (ส่องไฟผ่าน, คลำขอบบนได้, คลำอัณฑะแยกไม่ได้ชัด) · <b>เด็ก</b>: ส่วนใหญ่เป็น <b>communicating hydrocele</b> จาก <b>patent processus vaginalis</b> (ขนาดเปลี่ยนตามวัน — เล็กตอนเช้า โตตอนเย็น) · <b>ทารก</b>: <b>สังเกตอาการ</b> — ส่วนใหญ่หายเองภายใน <b>1–2 ปี</b> · <b>ผ่าตัด</b> เมื่อไม่หายหลังอายุ ~1–2 ปี, ขนาดเปลี่ยนชัด (communicating) หรือมีไส้เลื่อนร่วม → <b>ผ่าตัดผ่านทางขาหนีบ (inguinal approach) — high ligation of patent processus vaginalis</b> (เหมือน herniotomy) ระบายน้ำ ไม่ต้องตัดถุง · <b>ผู้ใหญ่</b> (non-communicating): <b>US</b> แยกสาเหตุ secondary (testicular tumor, epididymo-orchitis, torsion, trauma) · ไม่มีอาการ → สังเกต · มีอาการ/ใหญ่ → <b>ผ่าตัดทาง scrotum</b> (Jaboulay — พลิก tunica กลับ, Lord's plication) · ไม่แนะนำเจาะดูด (เป็นซ้ำ/ติดเชื้อ) ยกเว้นผู้ที่ผ่าตัดไม่ได้ (± sclerotherapy)",
   exp:"แยกจาก inguinal hernia: hernia คลำขอบบนไม่ได้ (ต่อเนื่องเข้า inguinal canal), ไอแล้วมีแรงกระแทก, ส่องไฟไม่ผ่าน (ยกเว้นทารกที่ลำไส้บาง) · ในเด็ก ห้ามเจาะดูด",
   rubric:"ได้ = hydrocele + กลไก patent processus vaginalis ในเด็ก + สังเกตถึง 1–2 ปี + ผ่าตัดทางขาหนีบ (high ligation) · บางส่วน = ตอบผ่าตัดทาง scrotum ในเด็ก",
   pts:[CR(P("Hydrocele","hydrocele","ถุงน้ำอัณฑะ","น้ำในถุงอัณฑะ")),P("เด็ก: communicating — patent processus vaginalis","processus","vaginalis","communicat"),CR(P("ทารก: สังเกตอาการจนอายุ 1–2 ปี","สังเกต","observ","1.?2 ปี","1–2 ปี","2 ปี","1.?2 year","หายเอง","spontaneous")),CR(P("ผ่าตัดทางขาหนีบ high ligation (เด็ก)","inguinal","ขาหนีบ","high ligation","ligat","herniotom")),P("ผู้ใหญ่: US แยกสาเหตุ / Jaboulay / Lord","ultrasound","\\bus\\b","jaboulay","lord","tumor","มะเร็ง")]})
 ),
 interp:"Hydrocele ในเด็ก: patent processus vaginalis — สังเกตถึง 1–2 ปี แล้วผ่าตัดทางขาหนีบ · ผู้ใหญ่: US หาสาเหตุ แล้วผ่าตัดทาง scrotum ถ้ามีอาการ",
 summary:["Hydrocele: ส่องไฟผ่าน คลำขอบบนได้","เด็ก: communicating (patent processus vaginalis) → สังเกต 1–2 ปี → inguinal high ligation","ผู้ใหญ่: US หา tumor/infection → Jaboulay/Lord ถ้ามีอาการ","ไม่เจาะดูดในเด็ก"]})

);
})();
