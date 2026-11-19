# TAGS_VOCAB — แท็กเรื่องแบบกว้างระดับบท (Subspecialty Surgery ปี 4)

แท็กกว้างระดับบท ไม่ใช่ชื่อ diagnosis (กติกาเดียวกับ Gen Sx — ผู้ใช้สั่ง 11 ต.ค. 2026) · 1–4 แท็กต่อข้อ ชื่อตรงตามนี้ทุกตัวอักษร · `Onco` ไว้ท้ายและติดทุกข้อที่เป็นมะเร็ง

## topic (ใส่ใน data_subspe/topics.js)
Colorectal & Anorectal · Cardiothoracic surgery · Neurosurgery · Pediatric surgery · Urology · Plastic & Reconstructive surgery · Others

## แท็ก
- **Colorectal** — colon/rectum ทั้งหมด: volvulus, Ogilvie, diverticular, IBD, LGIB, megacolon, polyp/CRC (ข้อ CRC ที่ clone มาจาก Gen Sx ติด `Onco` คู่)
- **Anorectal** — hemorrhoid, fissure, abscess/fistula, pilonidal, incontinence, anal cancer
- **CVT** — cardiac, thoracic, lung, mediastinum, chest trauma
- **Neuro** — head injury, intracranial hemorrhage, brain tumor/abscess, CNS infection, spine, hydrocephalus
- **Pediatric surgery** — neonatal/childhood surgical diseases, congenital anomalies
- **Uro** — kidney, ureter, bladder, prostate, scrotum, urolithiasis, GU trauma
- **Plastic** — wound, scar, flap/graft, craniofacial/cleft, vascular anomalies, skin & soft tissue lesions
- **Burn** — burns, inhalation injury, fluid resuscitation in burns
- **Head & neck** — salivary gland, neck masses, congenital neck cysts
- **Trauma** — trauma initial management
- **Surgical infection** — infection, antibiotics, abscess
- **Onco** — มะเร็งทุกอวัยวะในวอร์ดนี้
- **Misc** — นอกหมวดอื่น

## ข้อที่ clone มาจาก Gen Sx (19 พ.ย. 2026)
- `data_subspe/data_b2.js` = ข้อแท็ก Colorectal/Anorectal ทั้งหมดจาก Gen Sx (78 ข้อ) — ยังอยู่ใน Gen Sx ด้วย · ใช้ set|ro|orig เดิม · แท็ก Gen ที่ไม่มีใน vocab นี้ (Liver, Acute abdomen, Small bowel …) ตัดออก · topic = Colorectal & Anorectal
- ถ้าภายหลังแก้ข้อพวกนี้ใน Gen Sx จะไม่ตามมาอัตโนมัติ (เป็นสำเนา)
