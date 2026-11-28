import json
A=json.load(open('/home/claude/h/all.json'))
V=lambda k,s:(A[k].get('variants') or [])[:3]+[s]
P={}
k='MDCU77|RoB|Plastic 4'
P[k]=dict(variants=V(k,"ชายอายุ 35 ปีน้ำร้อนลวกลำตัวและแขน แผลพองตื้นรวม 15% TBSA สัญญาณชีพปกติ → เกินเกณฑ์ส่งต่อ burn center ของ ABA (partial thickness > 10% TBSA) · ยังไม่ต้องให้สารน้ำตามสูตร resuscitation เพราะต่ำกว่า 20% TBSA ในผู้ใหญ่ ให้ดื่มน้ำหรือสารน้ำตามความต้องการ"))
k='MDCU77|RoB|Plastic 5'
P[k]=dict(variants=V(k,"ช่างไฟถูกไฟฟ้าแรงสูงช็อตที่มือ แผลที่ผิวเล็ก ดำแข็ง แต่กล้ามเนื้อแขนตึงเจ็บมาก ปัสสาวะสีโค้ก → electrical burn ลึกกว่าที่เห็นมาก: ECG, CK, ให้สารน้ำจนปัสสาวะราว 100 mL/ชม.ในผู้ใหญ่จนสีใส และเฝ้าระวัง compartment syndrome → fasciotomy"))
k='MDCU77|RoB|Plastic 6'
P[k]=dict(variants=V(k,"ชายอายุ 45 ปีมีปื้นนูนสีเหลืองบนหนังศีรษะตั้งแต่เกิด ไม่เคยรักษา ช่วงหลังตรงกลางมีตุ่มมันวาวขอบม้วน เป็นแผลเลือดออกง่าย → สงสัย BCC ที่เกิดใน nevus sebaceous: ตัดรอยโรคทั้งหมดพร้อมขอบปลอดภัยเต็มความหนาแล้วส่งพยาธิ"),
 wrong={**A['MDCU77|RoB|Plastic 6']['wrong'],'E':"Topical tretinoin เป็น retinoid ชนิดทาที่ปรับการผลัดเซลล์และลดการอุดตันของรูขุมขน แต่ไม่ทำให้ hamartoma ของต่อมไขมันและรูขุมขนใน nevus sebaceous หายไป และไม่ป้องกันเนื้องอกที่เกิดตามมา เพราะรอยโรคอยู่เต็มความหนาของผิว · จะถูกถ้าวัยรุ่นมีสิวอุดตันหัวขาวหัวดำทั่วหน้า (comedonal acne) ซึ่งใช้ topical retinoid เป็นยาทาหลัก"})
k='MDCU77|RoB|Plastic 7'
P[k]=dict(variants=V(k,"ชายอายุ 55 ปีปลูกถ่ายไตและได้ยากดภูมิมา 10 ปี มีตุ่มแผลเป็นสะเก็ดหลายจุดที่หน้าและหลังมือ → SCC ผิวหนังในผู้กดภูมิ (เสี่ยงสูงกว่าคนทั่วไปหลายสิบเท่า): ตัดออก ตรวจผิวทั้งตัวทุก 3–6 เดือน กันแดดเข้มงวด และปรึกษาเปลี่ยนยากดภูมิเป็น mTOR inhibitor"))
k='MDCU77|RoB|Plastic 8'
P[k]=dict(variants=V(k,"ชายถูกสุนัขกัดหลังมือ แผลลึกถึงเส้นเอ็น มาโรงพยาบาลหลังเกิดเหตุ 6 ชม. → แผลกัดเสี่ยงติดเชื้อสูง: ล้างแผลมาก ๆ debride ไม่เย็บปิดแน่น ให้ amoxicillin-clavulanate ป้องกัน ร่วมกับวัคซีนพิษสุนัขบ้า ± RIG และ tetanus ตามประวัติ"))
k='MDCU77|RoB|Plastic 9'
P[k]=dict(variants=V(k,"ผู้ป่วยโรคภูมิแพ้ตัวเองได้ prednisolone ขนาดสูงมานาน แผลผ่าตัดหายช้า พื้นแผลมี granulation น้อย → steroid กดการอักเสบและการสร้าง collagen: ให้ vitamin A ชนิดกินช่วงสั้น (ราว 10,000–25,000 IU/วัน) ช่วยต้านผลของ steroid ต่อการหายของแผล"),
 opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง (ไฟล์ Key 77B ตอบ A) · เป็นนิยามพื้นฐานตรงกับ Sabiston 21st ed. (2022) และตำราพยาธิวิทยา: granulation tissue = fibroblast + หลอดเลือดฝอยใหม่ + เซลล์อักเสบเรื้อรัง (macrophage) ใน matrix หลวม ๆ · ไม่มี guideline ปัจจุบันที่ต่างจากคีย์ · ต้นฉบับจดช้อยเดียว เราแต่ง B–E เป็นตัวลวงที่สับสนบ่อย (granuloma, fibrin clot, keratin, แผลเป็นที่ remodel แล้ว)")
k='MDCU77|RoB|Plastic 10'
P[k]=dict(interp="เด็กหนัก 40 kg จะตัด lipoma ใต้ยาชาเฉพาะที่ด้วย <b>1% lidocaine ไม่ผสม adrenaline</b> → ถามปริมาตรสูงสุดที่ฉีดได้: ขนาดสูงสุดราว 5 mg/kg × 40 kg = 200 mg แล้วแปลง 1% = 10 mg/mL → <b>20 mL</b> (คีย์ใช้สูตรลัด 0.5 mL/kg)",
 trap="ลืมแปลง % เป็น mg/mL (1% = 10 mg/mL — คิดผิดเป็น 1 mg/mL ตัวเลขจะเพี้ยนสิบเท่า) หรือใช้ขนาดของ lidocaine ผสม adrenaline 7 mg/kg ได้ 280 mg = 28 mL (ช้อย D) ทั้งที่โจทย์ระบุ without · วิธีแยก: ดูคำว่า with/without ก่อนเสมอ แล้วคิด mg/kg × น้ำหนัก ÷ (% × 10)",
 variants=V(k,"ผู้ใหญ่ 70 kg ทำ tumescent liposuction ด้วย lidocaine เจือจางมากผสม adrenaline ปริมาณหลายลิตร → ยอมรับขนาดได้สูงถึงราว 35–55 mg/kg เพราะดูดซึมช้าและถูกดูดออกบางส่วน · ห้ามนำตัวเลขนี้ไปใช้กับการฉีดยาชาเฉพาะที่ทั่วไป"))
k='MDCU77|RoB|Plastic 11'
P[k]=dict(variants=V(k,"หญิงโกนขนรักแร้เป็นประจำ มีตุ่มหนองเล็กกระจายหลายสิบตุ่มลามกว้าง ร่วมกับไข้ต่ำ ทายามา 1 สัปดาห์ไม่ดีขึ้น → folliculitis แบบกว้างหรือดื้อยาทา: ยากินครอบคลุม S. aureus (cephalexin หรือ dicloxacillin; สงสัย MRSA ใช้ doxycycline หรือ TMP-SMX) และงดโกนขนชั่วคราว"))
k='MDCU77|RoB|Plastic 12'
P[k]=dict(variants=V(k,"ทารก syndromic craniosynostosis หนังตายังปิดได้ แต่นอนหงายแล้วหายใจเสียงดัง อกบุ๋ม SpO2 ตกต่ำกว่า 90% → ทางเดินหายใจอุดกั้นจาก midface hypoplasia/choanal stenosis มาก่อนเรื่องตา: จัดท่า ใส่ nasopharyngeal airway ถ้าไม่พอใส่ท่อช่วยหายใจหรือ tracheostomy"))
k='MDCU77|RoB|Plastic 13'
P[k]=dict(variants=V(k,"ชายอายุ 60 ปีสูบบุหรี่ คลำได้ต่อมน้ำเหลืองคอแข็ง 2 cm ตรวจช่องปาก หู คอ จมูกไม่พบรอยโรค → FNA ต่อมน้ำเหลือง (ไม่ตัดต่อมทั้งก้อนก่อน) ส่ง p16/HPV และ EBV แล้ว PET-CT และ panendoscopy หา primary"))
k='MDCU77|RoB|Plastic 14'
P[k]=dict(variants=V(k,"ชายอัมพาตครึ่งล่างมีแผลกดทับที่ก้นกบมา 10 ปี ขอบแผลนูนแข็ง กลิ่นเหม็น เลือดออกง่าย ต่อมน้ำเหลืองขาหนีบโต → Marjolin ulcer บนแผลกดทับ (มักรุนแรงและแพร่กระจายมากกว่าบนแผลไฟไหม้): biopsy หลายจุด + CT/MRI ดูการลุกลามกระดูกและต่อมน้ำเหลือง"))
k='MDCU77|RoB|Plastic 15'
P[k]=dict(interp="ภาพในข้อ (ตามที่บันทึกไว้) เป็นทารกปากแหว่ง (± เพดานโหว่) ก่อนและหลังผ่าตัด → ถามการผ่าตัด<b>ครั้งแรก</b>ในลำดับการรักษา cleft และอายุที่ทำ — ต้องรู้ทั้งชนิดการผ่าตัด (ซ่อมปาก ซ่อมเพดาน ปลูกกระดูกสันเหงือก ตกแต่งจมูก) และจังหวะเวลาของแต่ละขั้น",
 variants=V(k,"ทารกมีเพดานโหว่รูปตัว U ร่วมกับคางเล็กมาก ลิ้นตกไปด้านหลัง หายใจลำบากและดูดนมไม่ได้เวลานอนหงาย → Pierre Robin sequence: จัดท่านอนคว่ำหรือตะแคง ไม่ดีขึ้นใส่ nasopharyngeal airway ถ้ายังอุดกั้นรุนแรงทำ mandibular distraction osteogenesis"))
k='MDCU77|RoB|CVT 1'
P[k]=dict(variants=V(k,"ผู้ป่วยบาดเจ็บทรวงอกซ้าย ใส่ ICD แล้วเลือดออกทันที 1,600 mL → massive hemothorax: ข้อบ่งชี้ thoracotomy ด่วนตาม ATLS 10th ed. (เลือดออกทันที ≥ 1,500 mL หรือออกต่อเนื่อง > 200 mL/ชม. นาน 2–4 ชม. หรือต้องให้เลือดต่อเนื่อง)"))
k='MDCU77|RoB|CVT 2'
P[k]=dict(variants=V(k,"ผู้ป่วยตกจากที่สูง ความดันที่แขนสูงแต่ชีพจรที่ขาหนีบเบา ขาเย็นทั้งสองข้าง CXR aortic knob เลือน → pseudocoarctation จาก blunt aortic injury (flap หรือ hematoma อุด lumen): CTA chest ด่วน คุม HR/BP และเตรียม TEVAR"))
k='MDCU77|RoB|CVT 3'
P[k]=dict(variants=V(k,"ชายอายุ 55 ปี end-stage heart failure อยู่ในรายชื่อรอปลูกถ่ายหัวใจ ช็อกจากหัวใจแม้ได้ inotrope 2 ชนิดและ IABP → VA-ECMO เป็น bridge to transplant หรือ bridge to decision ไปใส่ LVAD (ต่างจากผู้ที่ไม่มีทางไปต่อซึ่งไม่ควรเริ่ม ECMO)"))
k='MDCU77|RoB|CVT 4'
P[k]=dict(variants=V(k,"ผู้ป่วยเจ็บหน้าอกฉับพลันร้าวทะลุหลัง ความดันแขนสองข้างต่างกัน 30 mmHg ECG ไม่มี ST elevation ยังไม่ทราบชนิด dissection → ห้ามให้ยาละลายลิ่มเลือดหรือยาต้านการแข็งตัว เริ่ม IV beta-blocker และยาแก้ปวด แล้ว CTA ทั้ง aorta เพื่อแยก type A กับ B"))
k='MDCU77|RoB|CVT 5'
P[k]=dict(variants=V(k,"ผู้ป่วย type A dissection ความดันตก 70/40 echo พบน้ำรอบหัวใจและ tamponade → ไปห้องผ่าตัดทันที · ไม่เจาะระบายเต็มที่ก่อนเพราะความดันที่กลับขึ้นทำให้เลือดออกเพิ่ม ถ้ารอไม่ได้ระบายแบบควบคุมทีละน้อยพอให้ความดันพอเลี้ยงอวัยวะ (ESC 2014, ACC/AHA 2022)"))
k='MDCU77|RoB|CVT 6'
P[k]=dict(interp="ผู้ป่วย <b>Marfan syndrome</b> (fibrillin-1 ผิดปกติ → aortic root และ annulus ขยาย) ตรวจพบ <b>diastolic blowing murmur</b> (เสียงฟู่เป่าลมช่วงต้น diastole ฟังชัดขอบซ้ายกระดูกอก) → ถามลิ้นที่ผิดปกติ = aortic regurgitation จาก annuloaortic ectasia (ต่างจาก mitral valve prolapse ใน Marfan ที่ให้ systolic murmur)",
 variants=V(k,"วัยรุ่น Marfan สายตาสั้นมากและเห็นภาพซ้อนข้างเดียว ตรวจพบเลนส์ตาเคลื่อนขึ้นด้านบนนอก → ectopia lentis: ส่งจักษุแพทย์ · เป็นเกณฑ์หลักคู่กับ aortic root ขยายใน revised Ghent criteria (2010) ที่วินิจฉัย Marfan ได้แม้ไม่มีประวัติครอบครัว"))
k='MDCU77|RoB|CVT 7'
P[k]=dict(trap="ส่องกล้องหลอดลม เจาะชิ้นเนื้อ หรือผ่าตัดทันทีเพราะก้อนขอบหนามดูเป็นมะเร็ง — แต่ก้อนส่วนปลาย 1 cm ส่องกล้องธรรมดามักเข้าไม่ถึง และทุกการตัดสินใจ (วิธีเจาะ ระยะโรค ผ่าตัดได้ไหม) ต้องอาศัย CT ก่อน · อีกกับดักคือ CXR ซ้ำ 3 เดือน ซึ่งใช้ไม่ได้กับก้อนที่มีลักษณะมะเร็งเพราะเสียเวลาและ CXR ไวไม่พอ",
 opinion="เห็นด้วยกับคีย์ B ความมั่นใจสูง (ไฟล์ Key 77B: lung CA → CT) · ACCP lung cancer guideline (2013) และ NCCN NSCLC ฉบับปัจจุบันให้ CT chest ที่มีสารทึบรังสีครอบคลุมตับและต่อมหมวกไตเป็นขั้นแรกเมื่อ CXR พบก้อน แล้วจึงตัดสินใจ biopsy, PET-CT หรือผ่าตัด · ไม่มีแนวทางใดให้ผ่าตัดหรือส่องกล้องก่อน CT · ต้นฉบับมีช้อย 2 ตัว เราเติม C–E",
 variants=V(k,"CT พบก้อน ground-glass ล้วน 8 mm ก้อนเดียวในหญิงไม่สูบบุหรี่ → CT ซ้ำที่ 6–12 เดือนเพื่อยืนยันว่ายังอยู่ แล้วติดตามทุก 2 ปีจนครบ 5 ปี (Fleischner 2017) · ถ้าเกิดส่วน solid ใหม่หรือโตขึ้น → biopsy หรือผ่าตัด"))
k='MDCU77|RoB|CVT 8'
P[k]=dict(variants=V(k,"หญิงอายุ 45 ปีไม่สูบบุหรี่ ก้อนส่วนปลายปอด biopsy เป็น adenocarcinoma แพร่กระจายไปกระดูก → ส่งตรวจ molecular (EGFR, ALK, ROS1 ฯลฯ) และ PD-L1 ก่อนเลือกยา · พบ EGFR exon 19 deletion → osimertinib เป็นยาแรก"))
k='MDCU77|RoB|CVT 9'
P[k]=dict(variants=V(k,"ผู้ป่วย SLE น้ำรอบหัวใจมาก ความดัน 80/50 ชีพจร 130 pulsus paradoxus 20 mmHg echo พบ RV collapse ช่วง diastole → tamponade: pericardiocentesis ภายใต้ echo ทันที ให้สารน้ำระหว่างรอ เลี่ยงยาขับปัสสาวะและการช่วยหายใจแรงดันบวกถ้าเลี่ยงได้"))
k='MDCU77|RoB|CVT 10'
P[k]=dict(interp="ผู้สูงอายุมี <b>stridor</b> + CXR (ภาพในข้อตามที่บันทึกไว้) เป็นก้อนใน mediastinum + I-131 scan จับรังสีที่ก้อนในอกแต่<b>ไม่จับที่คอ</b> = เนื้อไทรอยด์ในอกที่ไม่ต่อกับต่อมที่คอ (primary/ectopic intrathoracic goiter) ขนาดใหญ่กดหลอดลม → ถามการรักษาที่เหมาะสม = ผ่าตัดเอาออกทางกระดูกอก",
 variants=V(k,"หญิงอายุ 50 ปี CT พบก้อนใน anterior mediastinum ไม่จับ I-131 ร่วมกับหนังตาตกตอนเย็น กลืนลำบาก anti-AChR บวก → thymoma ร่วม myasthenia gravis: ปรับยาให้อาการคงที่ก่อน (pyridostigmine ± IVIG/plasmapheresis) แล้ว thymectomy"))
k='MDCU77|RoC|Colo 1'
P[k]=dict(variants=V(k,"หญิงอายุ 75 ปีมีไข้ต่ำ ปวดและคลำได้ก้อนท้องขวาล่าง CT เป็น appendiceal phlegmon รักษาด้วยยาจนดีขึ้น → ในผู้สูงอายุต้องส่อง colonoscopy หรือ CT ติดตามหลังหาย เพื่อหามะเร็ง cecum หรือ appendix ที่ซ่อนอยู่ใต้การอักเสบ"))
L=json.load(open('/home/claude/h/u/e/77_05.json'))
assert set(P)==set(L),set(L)^set(P)
json.dump(P,open('/home/claude/ac-mdcu/parts/explain/data_subspe/zz77_05.json','w'),ensure_ascii=False,indent=1)
