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
   ans:"<b>PDS</b> = <b>polydioxanone</b>: <b>synthetic, monofilament, absorbable</b> (ดูดซึมช้า: คงแรงดึง ~50–60% ที่ 4 สัปดาห์, ดูดซึมหมด ~6 เดือน) → ใช้ <b>ปิด fascia หน้าท้อง</b> (continuous, small bites), เย็บลำไส้/ทางเดินน้ำดี, ศัลยกรรมเด็ก, subcuticular · <b>Silk</b>: <b>natural (โปรตีนจากไหม), braided multifilament, non-absorbable</b> (ทางเทคนิคถูกย่อยช้ามาก) → ผูกหลอดเลือด, <b>เย็บยึด drain/tube กับผิวหนัง</b> · ปฏิกิริยาเนื้อเยื่อมาก เสี่ยงติดเชื้อ (wicking) ไม่เหมาะกับแผลติดเชื้อ",
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
   pts:[CR(P("Hard (stony) nodule ที่ right lobe ส่วนบน","hard","แข็ง","nodule","ก้อน","right","ขวา")),P("Size, surface, median sulcus, tenderness, mucosa mobile","size","ขนาด","sulcus","tender","กดเจ็บ","mucosa","surface","ผิว"),CR(P("Carcinoma of prostate","carcinoma","cancer","มะเร็ง","adenocarcinoma","ca prostate"))]}),
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
    H("Nipple discharge",35),CR(P("กดรอบ areola ทีละจุดหา trigger point","trigger","รอบ areola","around the areola","areola","เข็มนาฬิกา","clockwise")),CR(P("ลักษณะ: single/multiple duct, ข้าง, ออกเอง, สี","single","ท่อเดียว","multiple","spontaneous","ออกเอง","unilateral","ข้างเดียว","สี","color","colour")),
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
   pts:[P("แนะนำตัว อธิบาย ขออนุญาต","แนะนำตัว","ขออนุญาต","consent","อธิบาย"),CR(P("นอน ยกขา ลูบเลือดดำออก (empty veins)","ยกขา","elevat","empty","ลูบ","drain")),CR(P("รัด tourniquet ใต้ SFJ (ต้นขาบน)","tourniquet","รัด","sfj","saphenofemoral","ต้นขา")),P("ยืนขณะยังรัด สังเกต 30 วินาที","ยืน","stand","30"),P("คลาย tourniquet แล้วสังเกต / ย้ายระดับรัด","คลาย","release","ย้าย","ระดับ","level")]}),
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
   pts:[H("แนะนำตัว + CC/PI",25),P("แนะนำตัว ขออนุญาต","แนะนำตัว","ขออนุญาต","introduc"),P("ตำแหน่ง ข้าง ระยะเวลา ความก้าวหน้า","ข้าง","side","กี่ปี","นานเท่าไร","duration","onset","เริ่ม"),CR(P("อาการ: หนัก ปวด บวม คัน — แย่ลงเมื่อยืน ดีขึ้นเมื่อยกขา","หนัก","heavy","ปวด","บวม","swell","คัน","itch","ยืน","stand","ยกขา","elevat")),
    H("ภาวะแทรกซ้อน",25),CR(P("แผล / ผิวเปลี่ยนสี / eczema","แผล","ulcer","คล้ำ","pigment","eczema","ผื่น")),P("เลือดออก / thrombophlebitis","เลือดออก","bleed","thrombophleb","อักเสบ"),
    H("สาเหตุ + ปัจจัยเสี่ยง",40),CR(P("ประวัติ DVT / ผ่าตัด / กระดูกหัก / นอนนาน","dvt","ลิ่มเลือด","deep vein","thrombos","กระดูกหัก","fracture","ผ่าตัด","immobil")),P("อาชีพยืนนาน / ตั้งครรภ์ / อ้วน / ครอบครัว / ฮอร์โมน","อาชีพ","occupation","ยืนนาน","ตั้งครรภ์","pregnan","คลอด","อ้วน","obes","ครอบครัว","family","ยาคุม","hormone"),P("Claudication (แยก arterial)","claudica","ปวดน่อง","เดินแล้วปวด","arterial"),P("โรคประจำตัว / ยา","โรคประจำตัว","underlying","หัวใจ","heart","ยาที่","medication"),
    H("สรุป",10),P("สรุป","สรุป","summar","ceap")]})
 ),
 interp:"ซักประวัติเส้นเลือดขอด: อาการ venous insufficiency, ภาวะแทรกซ้อน, สาเหตุ secondary (DVT) และแยก arterial disease ก่อนวางแผนรักษา",
 summary:["อาการ: หนัก ปวดตื้อ บวม คัน — แย่ตอนยืน ดีขึ้นเมื่อยกขา","ภาวะแทรกซ้อน: ผิวเปลี่ยน, แผล, เลือดออก, thrombophlebitis","ต้องถาม: DVT (secondary) และ claudication (ก่อนให้ถุงน่อง)","CEAP C0–C6"]})

);
})();
