# TAGS_VOCAB — แท็กเรื่องแบบกว้างระดับบท (General Surgery ปี 4)

ผู้ใช้สั่ง 11 ต.ค. 2026: แท็กต้องเป็นหัวข้อกว้าง ๆ ระดับบท (เช่น vascular, onco, fluid and electrolyte, liver, spleen, pancreas, jaundice) **ไม่ใช่ชื่อ diagnosis** และติดได้มากกว่า 1 แท็ก

- `data/tags.js` (`W.TAGS`): 1–4 แท็กต่อข้อ เรียงอวัยวะ/บทก่อน `Onco` ไว้ท้าย; ชื่อต้องตรงกับรายการนี้ทุกตัวอักษร
- ข้อของชุด MDCU78 ที่ไฟล์ recall แบ่ง section ชัด (Hemostasis, Plastic, Nutrition ฯลฯ) ติดแท็กของ section นั้นเพิ่มด้วย
- แท็กละเอียดชุดเดิม (129 แท็ก) สำรองไว้ที่ `parts/tags_fine_backup.js`
- อนาคต: ผูกรหัส lecture กับแท็กผ่าน `W.TAGLEC = {"<แท็ก>": "<รหัส lecture>"}`

รวม 31 แท็ก · ตัวเลข = จำนวนข้อ (คลัง 860 ข้อ)

- **Pre-op & post-op** (59) — ประเมินและเตรียมก่อนผ่าตัด ASA, โรคร่วม, ยาต้านเกล็ดเลือด/ยาละลายลิ่มเลือดก่อนผ่าตัด, ยาชา, ERAS, ไข้และภาวะแทรกซ้อนหลังผ่าตัด, drain, CVC, VTE prophylaxis
- **MIS** (24) — minimally invasive surgery, laparoscopy, pneumoperitoneum, laparoscopic cholecystectomy
- **Hemostasis & transfusion** (41) — hemostasis, coagulation disorder, anticoagulant reversal, blood transfusion, massive transfusion
- **Fluid & electrolyte** (51) — body fluid, IV fluid, Na/K, acid-base, shock resuscitation
- **Metabolic response** (20) — metabolic response to injury & starvation
- **Nutrition** (33) — nutrition assessment, EN/PN, enterocutaneous fistula, short bowel syndrome
- **Surgical infection** (55) — SSI, wound class, antibiotic prophylaxis, hospital-acquired infection, soft tissue infection, tetanus, infection control, peritonitis
- **Onco** (188) — หลักมะเร็งทั่วไป + ติดคู่กับอวัยวะทุกข้อที่เป็นมะเร็ง (เต้านม ไทรอยด์ หลอดอาหาร กระเพาะ ลำไส้ ตับ ทางเดินน้ำดี ตับอ่อน) และ palliative care
- **Professionalism & ethics** (38) — ethics principles, informed consent, professionalism, patient rights, palliative/end-of-life
- **Surgical safety** (14) — WHO surgical safety checklist, infection control/bloodborne pathogen ในบุคลากร
- **Trauma** (16) — trauma initial management, head injury, shock
- **Burn** (4) — burns
- **Plastic** (15) — wound healing, sutures, scar/flap/reconstruction, skin lesion
- **Transplant** (49) — organ donation, brain death, transplant immunology, immunosuppression, kidney/liver/pancreas transplant
- **Breast** (53) — ทุกเรื่องของเต้านม
- **Thyroid & parathyroid** (45) — thyroid nodule/cancer, hyperthyroidism, goiter, thyroidectomy, parathyroid, MEN
- **Esophagus** (43) — GERD, achalasia, perforation, caustic, esophageal cancer
- **Stomach & duodenum** (73) — PUD, perforation, UGIB, GOO, gastric cancer, GIST, post-gastrectomy, bariatric
- **Small bowel** (49) — SBO, mesenteric ischemia, Meckel, small bowel tumor, ECF/SBS
- **Appendix** (24) — appendicitis
- **Acute abdomen** (73) — approach acute abdomen, peritonitis, SBO, perforation, volvulus, incarcerated hernia, appendicitis
- **Hernia** (53) — inguinal/femoral, incisional, umbilical, incarcerated, scrotal swelling
- **Liver** (77) — liver mass, HCC, metastasis, abscess, portal hypertension, cirrhosis, liver transplant
- **Jaundice** (38) — obstructive jaundice workup, CBD stone/cholangitis, cholangiocarcinoma, choledochal cyst, periampullary tumor
- **Gallstone** (34) — gallstone, cholecystitis, cholecystectomy & bile duct injury, gallbladder cancer/polyp
- **Pancreas** (47) — acute/chronic pancreatitis, pseudocyst/cystic neoplasm, pancreatic cancer, PNET, pancreas transplant
- **Spleen** (11) — spleen & splenectomy
- **Colorectal** (33) — CRC & polyps, diverticular disease, IBD, volvulus/LBO, LGIB
- **Anorectal** (17) — hemorrhoid, fissure, abscess/fistula, anal cancer
- **Vascular** (54) — PAD, acute limb ischemia, aneurysm, VTE, venous disease, mesenteric ischemia
- **Misc** (2) — นอกขอบเขต Gen Sx
