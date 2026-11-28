import json
A=json.load(open('/home/claude/h/all.json'))
V=lambda k,s:(A[k].get('variants') or [])[:3]+[s]
P={}
k='MDCU77|RoB|6'
P[k]=dict(variants=V(k,"ระหว่างผ่าตัด appendectomy ในชาย 30 ปี พบ Meckel's diverticulum โดยบังเอิญ ไม่มีอาการมาก่อน → ผู้ใหญ่ส่วนใหญ่ไม่ต้องตัด พิจารณาตัดเมื่อคลำได้เนื้อแข็ง (ectopic tissue) ฐานแคบ ยาว &gt; 2 cm เป็นเพศชายหรืออายุน้อยกว่า 50 ปี"))
k='MDCU77|RoC|55'
P[k]=dict(variants=V(k,"ชาย 46 ปีไม่มีประวัติครอบครัว เลือกคัดกรองด้วย FIT แล้วผลบวก → ต้องส่องกล้อง colonoscopy เพื่อหาสาเหตุ (ไม่ทำ FIT ซ้ำแล้วรอ และไม่เปลี่ยนเป็นตรวจอุจจาระวิธีอื่น)"))
k='MDCU77|RoA|Neuro 2'
P[k]=dict(opinion="เห็นด้วยกับคีย์ B ความมั่นใจปานกลาง — คีย์ในไฟล์ Key 77A เขียน \"B→D\" คือเห็นทั้ง basal ganglia hematoma และ secondary IVH แต่สุดท้ายเลือก B เพราะตำแหน่งต้นเหตุคือคำวินิจฉัยที่ตรงที่สุด · ถ้าผู้ออกข้อสอบตั้งใจถามองค์ประกอบในโพรงสมองจะเป็น D · แนวทางปัจจุบัน (AHA/ASA Spontaneous ICH Guideline 2022) ใช้ EVD เมื่อ IVH ทำให้ hydrocephalus/ซึมลง และการให้ alteplase ผ่าน EVD (CLEAR III) ลดอัตราตายได้แต่ไม่เพิ่มผลลัพธ์การทำงาน")
k='MDCU77|RoA|Neuro 5'
P[k]=dict(variants=V(k,"เด็ก 4 ขวบเป็น tetralogy of Fallot ยังไม่ได้ผ่าตัด มีไข้ ปวดศีรษะ อ่อนแรงซีกหนึ่ง → brain abscess จาก right-to-left shunt (เลือดดำไม่ผ่านการกรองที่ปอด) → MRI สมอง + ยาคลุม Streptococcus และ anaerobe ± ระบายตามขนาด"))
k='MDCU77|RoA|Neuro 9'
P[k]=dict(opinion="ตอบ C ความมั่นใจปานกลาง — คีย์ในไฟล์ Key 77A ตอบ C ก่อนแล้วเขียนแนวที่สอง (A) ว่ารูปเป็น right temporal ICH ซึ่งเข้ากับ AVM มากกว่า · เห็นด้วยกับ C เพราะโจทย์จงใจให้ OCP และ left hemiparesis จากรอยโรคสมองซีกขวาอธิบายได้ด้วย mass effect · ในชีวิตจริงต้องยืนยันด้วย CTV/MRV ก่อนสรุป · แนวทางปัจจุบัน (ESO Guideline 2017 และ AHA Scientific Statement on CVT 2024) ให้ LMWH แม้มี venous hemorrhage และใช้ DOAC (dabigatran) แทน warfarin ได้ในระยะต่อเนื่อง")
k='MDCU77|RoA|Neuro 12'
P[k]=dict(variants=V(k,"Complete C5 SCI 3 เดือน ปัสสาวะเล็ดสลับคั่ง urodynamics พบ detrusor overactivity ร่วม detrusor-sphincter dyssynergia → clean intermittent catheterization + antimuscarinic เพื่อลดแรงดันในกระเพาะปัสสาวะ ป้องกันไตเสื่อม"))
k='MDCU77|RoA|Uro 1'
P[k]=dict(interp="ผู้ป่วย <b>ESRD ล้างไตมาหลายปี</b> → ไตเดิมเกิด <b>acquired cystic kidney disease (ACKD)</b> เป็นถุงน้ำหลายใบ ซึ่งเพิ่มความเสี่ยง RCC สูงกว่าคนทั่วไปหลายเท่าและเพิ่มตามระยะเวลาล้างไต · คำถามจริงคือชนิดทางพยาธิที่สัมพันธ์กับ ESRD/ACKD ได้แก่ <b>papillary (chromophilic)</b> ไม่ใช่ clear cell ซึ่งเป็นชนิดที่พบบ่อยที่สุดในคนทั่วไป",
variants=V(k,"หญิง 32 ปีมี uterine leiomyoma หลายก้อนตั้งแต่อายุน้อย ร่วม cutaneous leiomyoma และก้อนไตข้างเดียว → HLRCC (FH mutation) → fumarate hydratase-deficient RCC ดุมาก ผ่าตัดเร็ว ไม่ใช้การเฝ้าดูแบบก้อนเล็กทั่วไป"))
k='MDCU77|RoA|Uro 2'
P[k]=dict(variants=V(k,"ผู้ป่วย Crohn disease หลังตัดลำไส้เล็กส่วน ileum มีนิ่วไตซ้ำ → enteric hyperoxaluria (ไขมันที่ไม่ถูกดูดซึมจับแคลเซียม ทำให้ oxalate ถูกดูดซึมมาก) → นิ่ว calcium oxalate: ให้แคลเซียมพร้อมมื้ออาหาร ลดไขมันและ oxalate ดื่มน้ำมาก"))
k='MDCU77|RoA|Uro 3'
P[k]=dict(opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง — คีย์ในไฟล์ Key 77A ตอบ A ตรงกัน: urothelial carcinoma ลุกถึง muscularis propria คือ T2 MIBC และยังไม่แพร่กระจาย การรักษาที่หวังหายขาดคือ radical cystectomy + pelvic lymph node dissection · แนวทางปัจจุบัน (EAU MIBC Guidelines 2025) ให้ neoadjuvant cisplatin-based chemotherapy ก่อนผ่าตัดในรายที่ใช้ cisplatin ได้ และงาน NIAGARA (2024) เพิ่ม durvalumab ช่วงก่อนและหลังผ่าตัด · ต้นฉบับจดช้อยไว้ตัวเดียว เราแต่ง B–E",
variants=V(k,"ชาย 74 ปี MIBC cT2N0 แต่ GFR 40 mL/min และหัวใจล้มเหลว (ใช้ cisplatin ไม่ได้) → ทำ radical cystectomy ได้เลย ไม่ใช้ carboplatin เป็น neoadjuvant แทนเพราะไม่มีหลักฐานว่าช่วยรอดชีวิต"))
k='MDCU77|RoA|Uro 4'
P[k]=dict(interp="CT urography พบ<b>ก้อน 1 cm ที่ distal ureter</b> ร่วม mild hydronephrosis = สงสัย <b>upper tract urothelial carcinoma (UTUC)</b> แต่ยังไม่มีผลชิ้นเนื้อหรือ cytology · hydronephrosis เป็น high-risk feature ตาม EAU แต่การเลือกระหว่าง RNU กับ kidney-sparing ต้องรู้ grade ก่อน · คำถามจริงคือขั้นถัดไปเพื่อยืนยันการวินิจฉัยและแบ่งความเสี่ยง → <b>ureteroscopy + biopsy</b> (± selective cytology) ส่วนคีย์ในไฟล์ตอบ RNU",
variants=V(k,"ชาย 65 ปีทำ RNU + bladder cuff จาก high-grade UTUC เมื่อ 6 เดือนก่อน มาตามนัด → cystoscopy เป็นระยะเพราะกลับเป็นซ้ำในกระเพาะปัสสาวะได้บ่อย (ราว 22–47%) ร่วม CT urography ติดตามไตอีกข้าง"))
k='MDCU77|RoA|Uro 5'
P[k]=dict(variants=V(k,"ชาย 75 ปี AUR ใส่สายแล้วได้ปัสสาวะ 1,500 mL หลังจากนั้นปัสสาวะออกต่อเนื่องราว 300 mL/ชม. → post-obstructive diuresis: ตรวจ electrolyte และ creatinine ซ้ำ ให้สารน้ำทดแทนบางส่วน เฝ้า vital signs และน้ำหนัก"))
k='MDCU77|RoA|Uro 6'
P[k]=dict(interp="ภาพ<b>ตุ่มน้ำ (vesicles) ที่อวัยวะเพศและเจ็บ</b> → ภาพของ <b>genital herpes (HSV-2 หรือ HSV-1)</b>: ตุ่มน้ำเป็นกลุ่มบนฐานแดง แตกเป็นแผลตื้นหลายแผล · คำถามจริงคือแยก STI ที่อวัยวะเพศจากลักษณะรอยโรค — syphilis แผลเดี่ยวไม่เจ็บขอบแข็ง · HPV เป็นหูดไม่เจ็บ · chancroid แผลหนองเจ็บแต่ไม่ใช่ตุ่มน้ำ · molluscum ตุ่มบุ๋มกลางไม่เจ็บ",
variants=V(k,"หญิง 30 ปีมีแผลเจ็บที่อวัยวะเพศเป็นซ้ำ ร่วมแผลร้อนในในปากบ่อยและตาอักเสบ (uveitis) ไม่มีเพศสัมพันธ์เสี่ยง PCR HSV ลบ → Behçet disease (ไม่ใช่ STI) → ส่งตรวจ pathergy test และปรึกษาอายุรแพทย์โรคข้อ"))
k='MDCU77|RoA|Uro 7'
P[k]=dict(variants=V(k,"ชาย 25 ปีนิ่วหลุดเองหลังให้ MET เก็บนิ่วได้ เป็นนิ่วครั้งแรกไม่มีปัจจัยเสี่ยง → ส่งวิเคราะห์องค์ประกอบนิ่ว + ตรวจพื้นฐาน (Ca, uric acid, creatinine ในเลือด และ urinalysis) ยังไม่ต้องเก็บปัสสาวะ 24 ชม. เว้นแต่นิ่วซ้ำหรือกลุ่มเสี่ยงสูง"))
k='MDCU77|RoA|Uro 8'
P[k]=dict(variants=V(k,"เด็ก 3 ปีเป็น balanoposthitis ครั้งแรก หัวองคชาตและหนังหุ้มบวมแดง มีหนองใต้หนังหุ้ม → ทำความสะอาด แช่น้ำอุ่น ยาทาปฏิชีวนะ ± ยากินถ้ามีเซลลูไลติส ยังไม่ต้องขลิบเพราะเป็นครั้งเดียว"))
k='MDCU77|RoA|Uro 9'
P[k]=dict(interp="รูเปิดท่อปัสสาวะผิดตำแหน่ง (อยู่ด้านล่าง ventral) + หนังหุ้มปลายเป็นฮูดด้านบน (<b>dorsal hooded prepuce</b> เพราะหนังหุ้มด้านล่างไม่เจริญ) ± องคชาตโค้งลง (chordee) = <b>hypospadias</b> · คำถามจริงคือการรักษา → ผ่าตัดซ่อม (hypospadias repair) ช่วงอายุ 6–18 เดือน และห้ามขลิบก่อนเพราะต้องเก็บหนังหุ้มไว้ใช้สร้างท่อปัสสาวะ",
opinion="เห็นด้วยกับคีย์ A ความมั่นใจสูง — คีย์ในไฟล์ Key 77A เขียนสั้น ๆ ว่า \"อาการ hypospadias\" ซึ่งรูเปิดท่อปัสสาวะผิดตำแหน่ง + dorsal hood เป็นภาพคลาสสิก การรักษาคือผ่าตัดซ่อมทั้งเรื่องท่อปัสสาวะ ความโค้ง และหนังหุ้ม · แนวทางปัจจุบัน (EAU/ESPU Paediatric Urology Guidelines 2024) แนะนำผ่าตัดช่วง 6–18 เดือน และห้ามขลิบก่อนซ่อม · ช้อย D, E เติมจากต้นฉบับที่มี 3 ตัว",
variants=V(k,"เด็กชาย distal hypospadias ที่ถูกขลิบไปแล้วตั้งแต่แรกเกิดก่อนได้รับการวินิจฉัย → ยังซ่อมได้ แต่ขาดหนังหุ้มไว้ทำ flap อาจต้องใช้ graft จาก buccal mucosa ทำให้ผ่าตัดยากขึ้น"))
k='MDCU77|RoA|Uro 10'
P[k]=dict(variants=V(k,"ชาย 70 ปี BPH อาการหลักคือปัสสาวะกลางคืน 4 ครั้ง บันทึกปัสสาวะพบปริมาณกลางคืนเกิน 33% ของทั้งวัน → nocturnal polyuria (ไม่ใช่ต่อมโตอย่างเดียว) → จำกัดน้ำช่วงเย็น ± desmopressin โดยระวัง Na ต่ำในผู้สูงอายุ"))
k='MDCU77|RoA|Uro 12'
P[k]=dict(variants=V(k,"หญิง 55 ปีมีนิ่ว staghorn เรื้อรัง ไข้ ปวดสีข้าง น้ำหนักลด CT เห็นไตโตไม่ทำงานร่วมก้อนเนื้อหลายช่อง → xanthogranulomatous pyelonephritis → ยาปฏิชีวนะแล้วตัดไต (nephrectomy)"))
k='MDCU77|RoA|Uro 13'
P[k]=dict(variants=V(k,"ชาย 82 ปีหัวใจล้มเหลวรุนแรง คาดว่าชีวิตเหลือไม่ถึง 10 ปี PSA 9 ไม่มีอาการ DRE ไม่มีก้อน → ร่วมตัดสินใจกับผู้ป่วย อาจไม่ biopsy เพราะมะเร็งความเสี่ยงต่ำ–กลางไม่น่าทำให้เสียชีวิตในช่วงชีวิตที่เหลือ (watchful waiting)"))
k='MDCU77|RoA|Plastic 1'
P[k]=dict(trap="คิดว่าแผลเล็ก (7%) ไม่ต้องส่งต่อ หรือเลือก C เพราะจำได้ว่าเด็กทุกรายต้องส่งต่อ — ช้อย A เข้าเกณฑ์ปรึกษาด่วนและพิจารณาส่งต่อของ ABA สองข้อพร้อมกัน คือ <b>full-thickness ทุกขนาด</b> และแผลลึกที่ <b>ใบหน้า/คอ</b> (เสี่ยงทางเดินหายใจและผลด้านความสวยงาม) ส่วน C เป็นแผลพองตื้นในเด็กโตซึ่งอยู่ในกลุ่มแนะนำให้ปรึกษา · และอย่านับ superficial burn เข้า TBSA",
variants=V(k,"ผู้ใหญ่ไฟไหม้ partial-thickness 8% ร่วมกระดูก femur หักและความดันต่ำจากเสียเลือด → ถ้า trauma เป็นภัยต่อชีวิตมากกว่าให้ stabilize ที่ trauma center ก่อน แล้วจึงส่งต่อ burn center"))
k='MDCU77|RoA|Plastic 2'
P[k]=dict(variants=V(k,"ผู้ป่วยไฟไหม้ลึกที่ข้อพับเข่าเมื่อ 10 ปีก่อน ปล่อยหายเอง แผลเป็นแตกเป็นแผลซ้ำบ่อย (unstable scar) แต่ยังไม่มีก้อน → ตัดแผลเป็นออกทั้งหมดแล้วปิดด้วย skin graft/flap เพื่อป้องกัน Marjolin ulcer (ไม่ปลูกผิวทับแผลเป็นเดิม)"))
k='MDCU77|RoA|Plastic 3'
P[k]=dict(variants=V(k,"ชาวประมงอายุ 60 ปี ริมฝีปากล่างแห้งซีดเป็นสะเก็ดหยาบมานาน ขอบริมฝีปากไม่ชัด → actinic cheilitis (premalignant ของ SCC ริมฝีปาก) → biopsy จุดที่แข็งหรือเป็นแผล แล้วรักษาด้วย 5-FU, cryotherapy หรือ vermilionectomy"))
k='MDCU77|RoA|Plastic 4'
P[k]=dict(interp="ผู้ใหญ่ไฟไหม้<b>รอบวงแขน 1 ข้างทั้งแขน</b> + <b>รอบวงขา 1 ข้างทั้งขา</b> + <b>ลำตัวด้านหน้า</b> → คำนวณ TBSA ด้วย <b>rule of nines</b>: แขน 9% + ขา 18% + ลำตัวด้านหน้า (อกและท้อง) 18% = <b>45%</b> · คำว่า circumferential บอกว่าใช้ค่าเต็มของรยางค์ (ไม่ใช่ครึ่งหน้าหลัง) และเตือนว่าแผลลึกรอบวงเสี่ยงต้องทำ escharotomy",
variants=V(k,"ผู้ใหญ่ไฟไหม้ศีรษะและคอทั้งหมด แขนสองข้างทั้งแขน และ perineum → 9 + 18 + 1 = 28% TBSA (เกินเกณฑ์ต้องให้สารน้ำทางหลอดเลือดและส่ง burn center)"))
k='MDCU77|RoA|Plastic 5'
P[k]=dict(interp="ข้อแบบ <b>NOT</b>: ถามตัวเลือกที่ไม่อยู่ในเกณฑ์ <b>ABCDE</b> สำหรับประเมินรอยโรคสีเข้มว่าน่าสงสัย melanoma — A = Asymmetry · B = Border irregularity · C = Color variation · <b>D = Diameter &gt; 6 mm</b> · E = Evolving · ช้อยหลอก \"Density\" ใช้คำขึ้นต้นตัว D เหมือนกันแต่ไม่ใช่เกณฑ์",
opinion="เห็นด้วยกับคีย์ D ความมั่นใจสูง — คีย์ในไฟล์ Key 77A เขียน \"D = diameter &gt; 6 mm\" ตรงกับเกณฑ์มาตรฐาน · ชีท L22 บางหน้าใช้ diameter &gt; 8 mm ส่วนสไลด์ใช้ &gt; 6 mm ให้ตอบ 6 mm ในข้อสอบ · ABCDE มีจุดอ่อนกับ nodular และ amelanotic melanoma จึงใช้ร่วมกับ ugly duckling sign และ dermoscopy (แนวทาง AAD Guidelines of Care for Primary Cutaneous Melanoma 2019 และ NCCN Melanoma 2025) · ช้อยครบ 5 ตัวตามต้นฉบับ",
variants=V(k,"ผู้ป่วยมีตุ่มสีดำนูนแข็งโตเร็วภายใน 2 เดือน รูปร่างสมมาตร ขอบเรียบ ขนาด 5 mm → ไม่เข้า ABCD แต่เข้าเกณฑ์ EFG (Elevated, Firm, Growing) ของ nodular melanoma → excisional biopsy ทันที"))
json.dump(P,open('/home/claude/ac-mdcu/parts/explain/data_subspe/zz77_01.json','w'),ensure_ascii=False,indent=1)
print(len(P))
