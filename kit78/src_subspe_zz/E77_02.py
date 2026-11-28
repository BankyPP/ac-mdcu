import json
A=json.load(open('/home/claude/h/all.json'))
V=lambda k,s:(A[k].get('variants') or [])[:3]+[s]
P={}
k='MDCU77|RoA|Plastic 6'
P[k]=dict(interp="โจทย์ถามตรง ๆ ว่าข้อใดเป็น<b>ปัจจัยเสี่ยงของมะเร็งช่องปาก</b> (oral cavity SCC ซึ่งเป็นชนิดพบมากกว่า 90%) · ต้องนึกกลุ่มปัจจัยเสี่ยงหลักคือ <b>ยาสูบทุกรูปแบบ (สูบและเคี้ยว) สุรา หมาก</b> ร่วมกับ HPV (เด่นใน oropharynx มากกว่า oral cavity) · ช้อยที่เหลือเป็นปัจจัยเสี่ยงของมะเร็งอวัยวะอื่น (HBV → ตับ, H. pylori → กระเพาะ) หรือเป็นปัจจัยป้องกัน (อาหารใยสูง)",
variants=V(k,"หญิง 50 ปีมีปื้นขาวเป็นร่างแห (Wickham striae) ที่กระพุ้งแก้มสองข้างมาหลายปี ช่วงหลังมีจุดแผลแดงแข็งขึ้นข้างหนึ่ง → oral lichen planus (potentially malignant disorder) ที่เปลี่ยนลักษณะ → biopsy ตำแหน่งที่แข็ง/แผลแดงหา dysplasia หรือ SCC แล้วนัดติดตามสม่ำเสมอ"))
k='MDCU77|RoA|Plastic 7'
P[k]=dict(variants=V(k,"ชาย 35 ปีมี epidermoid cyst หลายก้อนที่หลังและหนังศีรษะ ร่วมกับ osteoma ที่ขากรรไกรและฟันเกิน พ่อเสียชีวิตจากมะเร็งลำไส้ใหญ่อายุน้อย → Gardner syndrome (FAP variant จาก APC) → ส่ง colonoscopy และตรวจยีน APC ไม่ใช่แค่ตัดก้อนผิวหนัง"))
k='MDCU77|RoA|Plastic 8'
P[k]=dict(variants=V(k,"เด็ก 6 ขวบเคยเป็น infantile hemangioma ขนาดใหญ่ที่แก้มซึ่งยุบแล้ว แต่เหลือผิวย่นหย่อน เส้นเลือดฝอย และก้อนไขมันพังผืด (fibrofatty residue) → แก้รอยที่เหลือด้วย pulsed dye laser สำหรับเส้นเลือดฝอย และผ่าตัดตัดเนื้อส่วนเกิน มักวางแผนช่วงก่อนเข้าโรงเรียน"))
k='MDCU77|RoA|Plastic 9'
P[k]=dict(variants=V(k,"หญิง 30 ปีมีก้อนคอด้านหน้า 2 cm เคลื่อนขึ้นลงเวลากลืน ไม่มีอาการไทรอยด์เป็นพิษ → thyroid nodule: ตรวจ TSH และอัลตราซาวนด์ไทรอยด์ แล้วทำ FNA ตามขนาดและลักษณะ (TI-RADS) ส่งผลแปลแบบ Bethesda ไม่ทำ excisional biopsy เป็นขั้นแรก"))
k='MDCU77|RoA|Plastic 10'
P[k]=dict(variants=V(k,"คนงานไฟไหม้ partial/full thickness 40% TBSA หนัก 70 kg มาถึงโรงพยาบาลหลังเกิดเหตุ 1 ชม. → ATLS 10th ให้ Ringer's lactate 2 mL × kg × %TBSA = 5,600 mL ใน 24 ชม. ครึ่งแรก (2,800 mL) ภายใน 8 ชม. นับจากเวลาเกิดเหตุ แล้วปรับตาม urine output 0.5 mL/kg/ชม. (Parkland เดิมใช้ 4 mL)"))
k='MDCU77|RoA|Colo 1'
P[k]=dict(variants=V(k,"มะเร็งกลาง transverse colon มาด้วยลำไส้อุดตันเฉียบพลัน ลำไส้ส่วนต้นพองแต่ผู้ป่วยสัญญาณชีพคงที่ ไม่มีทะลุ → ผ่าตัด extended right hemicolectomy พร้อมต่อ ileum กับ colon (ileocolic anastomosis) ได้ในครั้งเดียว เพราะรอยต่อ ileocolic ปลอดภัยกว่าต่อ colon กับ colon ที่บวม"))
k='MDCU77|RoA|Colo 2'
P[k]=dict(variants=V(k,"หญิงตั้งครรภ์ไตรมาสสามปวดท้องบิด ท้องอืดมาก ไม่ถ่ายไม่ผายลม ภาพรังสีเป็นลำไส้ sigmoid บิดพองชี้ขึ้นบน ไม่มี peritonitis → sigmoid volvulus ระหว่างตั้งครรภ์: ส่องกล้องคลายบิดก่อนได้ ถ้ามีขาดเลือดหรือคลายไม่สำเร็จ ผ่าตัดทันทีโดยไม่รอคลอด"))
k='MDCU77|RoA|Colo 3'
P[k]=dict(interp="ถามวิธี<b>เตรียมลำไส้ก่อน colonoscopy</b> ที่ได้ผลที่สุด — ตัวชี้วัดคือทำความสะอาดได้ทั้งลำไส้ (Boston score ≥ 6 ทุกส่วน ≥ 2) และปลอดภัย · ช้อยต่างกันที่<b>ชนิดยา</b> (PEG แบบ iso-osmotic vs hyperosmolar vs stimulant) <b>ปริมาณ</b> และ<b>เวลาที่ดื่มเสร็จก่อนส่อง</b> · หลักคือ PEG ปริมาณพอ ดื่มใกล้เวลาส่อง (split-dose หรือ same-day) ดีที่สุด",
wrong=dict(A[k]["wrong"],D="สวนน้ำ (tap water enema) อย่างเดียวล้างได้แค่ rectum กับ sigmoid ส่วนปลาย ไม่ถึงลำไส้ส่วนขวา จึงเห็นเยื่อบุไม่ครบและพลาด polyp ใน colonoscopy · จะถูกถ้าเป็นผู้ป่วยถ่ายเป็นเลือดสดที่นัดทำเพียง flexible sigmoidoscopy หรือผู้ป่วยหลัง Hartmann ที่ต้องเตรียมเฉพาะ rectal stump ก่อนส่องดู"),
variants=V(k,"ผู้ป่วยหลัง Hartmann procedure มี end colostomy รอผ่าตัดต่อลำไส้คืน ต้องส่องทั้งลำไส้ส่วนต้นและ rectal stump → ให้ PEG ทางปากเตรียมลำไส้ส่วนต้นที่ระบายทาง stoma ร่วมกับสวนล้าง rectal stump ทางทวาร เพราะยาทางปากไม่ผ่านลงไปถึง stump"))
k='MDCU77|RoA|Colo 4'
P[k]=dict(opinion="ไม่มีคีย์ในไฟล์ Key 77A (ส่วน Colorectal ไม่มีเฉลย) — ตอบ B ความมั่นใจปานกลาง-สูง: thrombosed external hemorrhoid ที่เกิน 72 ชม. และปวดลดลงเองแล้ว รักษาประคับประคองด้วยยาแก้ปวด sitz bath ใยอาหาร ± ยาทา nifedipine/lidocaine ตาม ASCRS Clinical Practice Guidelines for Hemorrhoids (2018) ซึ่งแนะนำ excision เฉพาะรายที่มาเร็วราวภายใน 72 ชม. และปวดมาก · ต้นฉบับเขียน 3 วันซึ่งอยู่รอยต่อพอดี เราจึงปรับเป็น 4 วันและปวดเริ่มดีขึ้นให้คำตอบชัด · การกรีดบีบลิ่มเลือด (A) เป็นซ้ำบ่อย ไม่แนะนำ",
variants=V(k,"ผู้ป่วยตับแข็งมี portal hypertension ถ่ายเป็นเลือดแดงปริมาณมาก ส่องเห็นเส้นเลือดดำโป่งคดเคี้ยวในผนัง rectum เหนือ dentate line ซึ่งไม่ใช่ริดสีดวง → rectal varices: ลดความดัน portal (ยา vasoactive, TIPS) ± ฉีดหรือรัดผ่านกล้อง เลี่ยง hemorrhoidectomy เพราะเลือดออกรุนแรง"))
k='MDCU77|RoA|Colo 5'
P[k]=dict(opinion="ไม่มีคีย์ในไฟล์ Key 77A (ไม่มีส่วน Colorectal) — ตอบ A ความมั่นใจสูง: rectal cancer ลุกอวัยวะข้างเคียง (cT4b) ต้องเริ่มด้วยการรักษาก่อนผ่าตัดเพื่อย่อก้อนให้ตัดได้ขอบปลอดมะเร็ง (R0) · NCCN Rectal Cancer (2025) แนะนำ <b>total neoadjuvant therapy</b> (long-course chemoRT หรือ short-course RT ร่วม chemotherapy) แล้วจึงผ่าตัด en bloc/pelvic exenteration ส่วนที่ยังติด · ถ้าเป็น dMMR/MSI-H ให้ immunotherapy เป็นขั้นแรกแทน · ช้อย E เราเติมเอง",
variants=V(k,"ชาย 55 ปีมะเร็ง rectum ส่วนล่าง T3N1 พบก้อนแพร่กระจายที่ตับ 2 ก้อนซึ่งตัดได้ → systemic chemotherapy ก่อน (± short-course RT ที่ pelvis) แล้วทีมสหสาขาวางแผนตัดทั้ง rectum และตับ แบบพร้อมกันหรือแยกครั้ง (ตับก่อนได้) เพื่อหวังหายขาด"))
k='MDCU77|RoA|Colo 6'
P[k]=dict(variants=V(k,"หญิง 60 ปีหลังฉายรังสีมะเร็งปากมดลูก 8 ปี ถ่ายลำบาก อุจจาระลีบ ท้องอืด ส่องเห็น rectum ตีบเป็นวง → radiation stricture: biopsy แยกมะเร็งกลับเป็นซ้ำหรือมะเร็งทุติยภูมิก่อน แล้วขยายด้วย balloon ถ้าตีบสั้น ถ้าไม่ได้ผลทำ diverting colostomy"))
k='MDCU77|RoA|Colo 7'
P[k]=dict(variants=V(k,"หญิงเป็นฝีรอบทวารซ้ำ ระบายมาแล้วหลายครั้ง ตรวจพบรูเปิดภายนอกทั้งซ้ายและขวาทางด้านหลังที่เชื่อมกัน → horseshoe fistula ผ่าน deep postanal space → MRI pelvis ดูแนวทาง แล้วระบาย deep postanal space (Hanley procedure) ร่วมใส่ loose seton ที่ posterior midline"))
k='MDCU77|RoA|Colo 8'
P[k]=dict(interp="ถามว่าการผ่าตัด fistula-in-ano วิธีใด<b>เสี่ยงบาดเจ็บหูรูด (กลั้นอุจจาระไม่อยู่) มากที่สุด</b> · ต้องแบ่งวิธีเป็นกลุ่มที่<b>ตัดผ่านกล้ามเนื้อหูรูด</b> (fistulotomy, fistulectomy, cutting seton) กับกลุ่ม<b>เก็บหูรูด</b> (LIFT, endorectal advancement flap, fibrin glue/plug) แล้วเลือกวิธีที่ตัดกล้ามเนื้อมากที่สุดในครั้งเดียว — fistulectomy คว้านเนื้อรอบทางเดินออกทั้งแนว แผลกว้างกว่า fistulotomy",
variants=V(k,"ชาย 40 ปีหลัง fistulotomy ของ high transsphincteric fistula 2 เดือน กลั้นลมและอุจจาระเหลวไม่อยู่ endoanal ultrasound เห็นรอยขาดของหูรูดภายนอก → ยาให้อุจจาระเป็นก้อน + biofeedback ก่อน ถ้าไม่ดีขึ้นพิจารณา overlapping sphincteroplasty หรือ sacral nerve stimulation"))
k='MDCU77|RoA|Colo 9'
P[k]=dict(trap="คนเลือก B เพราะเห็นฝีเป็นก้อนหนองใต้ผิวหนังเหมือนฝีทั่วไป หรือเลือก D (pilonidal) และ C (thrombosed hemorrhoid) เพราะเป็นก้อนเจ็บแถวทวารเหมือนกัน · หลักแยก: ฝีรอบทวารราว 90% เริ่มจาก<b>ต่อม anal gland ที่ crypt บน dentate line อุดตันแล้วติดเชื้อ</b> (cryptoglandular) จึงมีรูเชื่อมเข้าทวารและกลายเป็น fistula ได้ราวหนึ่งในสาม · pilonidal อยู่ร่องก้นเหนือก้นกบ ไม่เชื่อมทวาร · thrombosed hemorrhoid เป็นลิ่มเลือดสีม่วง ไม่มีไข้หรือหนอง",
variants=V(k,"ทารกชายอายุ 4 เดือนมีฝีข้างทวารเป็นซ้ำ ระบายเองแล้วกลับมาบวมที่เดิม → perianal abscess/fistula ในทารก (เกือบทั้งหมดเป็นเพศชาย สัมพันธ์กับ crypt ที่ลึกผิดปกติ) → ระบายเมื่อมีฝีและรักษาแบบประคับประคอง ส่วนใหญ่หายเองก่อนอายุราว 1 ปี ทำ fistulotomy เมื่อไม่หาย"))
k='MDCU77|RoA|Colo 10'
P[k]=dict(variants=V(k,"หญิง 40 ปีเป็น ulcerative pancolitis มา 10 ปี ไม่เคยส่องกล้องคัดกรอง → เสี่ยง colitis-associated cancer → surveillance colonoscopy (แนะนำ chromoendoscopy) เริ่มเมื่อเป็นโรคราว 8 ปีแล้วทุก 1–3 ปีตามความเสี่ยง · ถ้ามี primary sclerosing cholangitis ร่วม ส่องทุกปีตั้งแต่วินิจฉัย"))
k='MDCU77|RoA|Colo 11'
P[k]=dict(opinion="ไม่มีคีย์ในไฟล์ Key 77A (ไม่มีส่วน Colorectal) — ตอบ A ความมั่นใจสูง: ก้อนยื่นออกทวารเมื่อเบ่งแล้วกลับเอง และภาพขณะเบ่งเป็นผนังลำไส้ยื่นเป็น<b>วงซ้อนรอบ (concentric rings)</b> = full-thickness rectal prolapse ส่วนริดสีดวงยื่นเป็นกลีบมีร่อง radial · การดูแลต่อสอดคล้อง ASCRS Clinical Practice Guideline for Rectal Prolapse (2017): ผู้แข็งแรงผ่าตัดทางหน้าท้อง ผู้เสี่ยงสูงผ่าทางฝีเย็บ · ต้นฉบับมีช้อย 3 ตัว เราเติม D, E",
variants=V(k,"เด็ก 2 ขวบมีก้อนแดงยื่นออกทวารเวลาเบ่งแล้วกลับเอง ร่วมกับไอเรื้อรัง อุจจาระมันลอยน้ำ น้ำหนักขึ้นน้อย → rectal prolapse ในเด็กที่ต้องหา cystic fibrosis (sweat chloride test) ร่วมรักษาท้องผูกหรือท้องเสีย ส่วนใหญ่หายโดยไม่ต้องผ่าตัด"))
k='MDCU77|RoA|Colo 12'
P[k]=dict(opinion="ไม่มีคีย์ในไฟล์ Key 77A (ไม่มีส่วน Colorectal) — ตอบ B ความมั่นใจสูง: massive painless hematochezia ในผู้สูงอายุ สาเหตุอันดับหนึ่งคือ <b>diverticular bleeding</b> (ราว 30–50% ของ LGIB) จาก vasa recta ที่ถูกยืดบางตรงคอ diverticulum · การดูแลตาม ACG Clinical Guideline: Management of Acute LGIB (2023): resuscitate, CTA ก่อนถ้าเลือดออกต่อเนื่องหรือไม่คงที่ แล้ว colonoscopy หลังเตรียมลำไส้ · ต้นฉบับมีช้อย 2 ตัว เราเติม C–E",
variants=V(k,"ชาย 70 ปีถ่ายเป็นเลือดสดปริมาณมาก 7 วันหลังตัด polyp ขนาด 2 cm ที่ cecum ด้วย hot snare → delayed post-polypectomy bleeding จากสะเก็ดแผลหลุด → resuscitate แล้ว colonoscopy ห้ามเลือดด้วย clip หรือจี้ (ยาต้านเกล็ดเลือดหยุดชั่วคราวตามความเสี่ยงหัวใจ)"))
k='MDCU77|RoA|Colo 13'
P[k]=dict(opinion="ไม่มีคีย์ในไฟล์ Key 77A (ไม่มีส่วน Colorectal) — ตอบ B ความมั่นใจปานกลาง-สูง: acute anal fissure (เป็น 1 วัน) รักษาขั้นแรกด้วยใยอาหาร sitz bath ร่วมยาทาคลายหูรูด · ASCRS Clinical Practice Guidelines for Anal Fissures (2023) แนะนำ nonoperative ก่อน โดย topical CCB (diltiazem/nifedipine) ได้ผลใกล้ NTG แต่ปวดศีรษะน้อยกว่า ส่วน Botox และ LIS ใช้กับ chronic fissure ที่ยาไม่ได้ผล · ในตัวเลือกจึงเหลือ NTG ดีที่สุด (ช้อย E เราเติมเอง)",
variants=V(k,"ทารก 6 เดือนร้องไห้เวลาถ่าย มีเลือดสดเป็นเส้นติดผิวอุจจาระแข็ง ตรวจเห็นแผลเล็กที่ขอบทวาร → anal fissure ในทารก (สาเหตุเลือดออกทางทวารที่พบบ่อยที่สุดในวัยนี้) → แก้ท้องผูกด้วยน้ำ ยาระบายชนิด osmotic และแช่น้ำอุ่น ไม่ต้องผ่าตัด"))
k='MDCU77|RoA|CVT 1'
P[k]=dict(variants=V(k,"หลังเลิก cardiopulmonary bypass ผู้ป่วยได้ cardioplegia ซ้ำหลายรอบ potassium 6.8 mmol/L หัวใจเต้นช้ามี heart block → ผลจาก cardioplegia ปริมาณมาก: ให้ calcium, insulin ร่วม glucose, ultrafiltration หรือขับปัสสาวะ และใช้ epicardial pacing ชั่วคราวจนจังหวะกลับ"))
k='MDCU77|RoA|CVT 2'
P[k]=dict(variants=V(k,"หญิง 30 ปีเหนื่อยง่าย เป็น rheumatic mitral stenosis MVA 1.2 cm² ลิ้นยังยืดหยุ่น หินปูนน้อย ไม่มีลิ่มเลือดใน left atrium และ MR ไม่เกินระดับน้อย → percutaneous mitral balloon commissurotomy (ไม่ต้องเปลี่ยนลิ้น)"))
k='MDCU77|RoA|CVT 3'
P[k]=dict(variants=V(k,"หญิง 45 ปีหนังตาตก เห็นภาพซ้อน เป็นมากตอนเย็น CT พบก้อน anterior mediastinum 4 cm ขอบเรียบ → thymoma ร่วม myasthenia gravis → ปรับ MG ให้คงที่ก่อน (pyridostigmine ± IVIG/plasmapheresis) แล้วทำ thymectomy ตัดทั้งต่อมพร้อมไขมันรอบ"))
k='MDCU77|RoA|CVT 4'
P[k]=dict(variants=V(k,"ชาย 60 ปีมีก้อนที่คอต่อลงไปหลังกระดูกอก หลอดลมถูกดันเบี้ยว หายใจลำบากเวลานอน CXR เห็นเงาก้อนใน superior mediastinum → retrosternal (substernal) goiter → CT คอ-อก แล้ว thyroidectomy ซึ่งส่วนใหญ่ดึงก้อนออกทางแผลที่คอได้โดยไม่ต้องผ่ากระดูกอก"))
k='MDCU77|RoA|CVT 5'
P[k]=dict(trap="คนเลือก C เพราะอายุ 70 ร่วม MR ดูเสี่ยง หรือเลือก B เพราะคิดว่าหัวใจบีบตัวไม่ดีห้ามผ่าตัด — แต่ ischemic LV dysfunction และ MR ที่ต้องซ่อมร่วมเป็น<b>เหตุให้เลือก CABG</b> (STICH: CABG ลดตายระยะยาวเมื่อ EF ≤ 35%) · ช้อย A (proximal LAD เดี่ยว) ทำได้ทั้งสองแบบ · หลักแยก: ดูสองแกนพร้อมกัน — <b>SYNTAX ต่ำ</b> (PCI ได้ผลเท่ากัน) + <b>ความเสี่ยงผ่าตัดสูง</b> (อายุ 80, COPD, CKD → STS score สูง) = เหมาะกับ CABG น้อยที่สุด",
opinion="เห็นด้วยกับคีย์ D ความมั่นใจสูง — ไฟล์ Key 77A เขียน \"แก่ low SYNTAX score น่าจะทำ PCI ได้\" · 2021 ACC/AHA/SCAI Coronary Revascularization Guideline และ 2024 ESC Chronic Coronary Syndromes Guideline ให้ Heart Team ตัดสินจาก SYNTAX ร่วมกับ STS/EuroSCORE II: รอยโรคซับซ้อนน้อยในผู้เสี่ยงผ่าตัดสูงเลือก PCI ขณะที่ left main + 3VD ในเบาหวาน (E) และ ischemic cardiomyopathy (B) ได้ประโยชน์จาก CABG · ข้อสังเกต: guideline ACC/AHA 2021 ลดระดับคำแนะนำ CABG เพื่อเพิ่มอัตรารอดใน 3VD ที่ EF ปกติลงเป็น 2b · ช้อย E เราเติมเอง",
variants=V(k,"ชาย 62 ปี anterior STEMI มาถึงภายใน 2 ชม. ในโรงพยาบาลที่ทำ PCI ได้ angiogram พบ LAD อุดตันร่วมรอยตีบหลอดอื่น → primary PCI ของ culprit lesion ทันที ไม่ทำ emergency CABG (เก็บไว้เมื่อ PCI ล้มเหลว กายวิภาคไม่เหมาะ ช็อกต่อเนื่อง หรือมีภาวะแทรกซ้อนเชิงกล)"))
json.dump(P,open('/home/claude/ac-mdcu/parts/explain/data_subspe/zz77_02.json','w'),ensure_ascii=False,indent=1)
print(len(P))
