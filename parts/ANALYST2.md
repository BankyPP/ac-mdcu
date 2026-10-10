# ส่วนเพิ่มของงานวิเคราะห์ (ใช้คู่กับ ANALYST.md) — รอบ 10 ต.ค. 2026

อ่านก่อน: `/home/claude/sx-mcq/parts/ANALYST.md` (ขั้นตอน 1–11) และแบบฟอร์ม SPEC ล่าสุด `/home/claude/sx-mcq/parts/SPEC77D.md` (ชุดที่เฉลยมีรูป/สไลด์ ครอป kimg) กับ `/home/claude/sx-mcq/parts/SPEC77B.md` (เฉลยเป็นตารางข้อความ) — ลอกโครงสร้าง ส่วนหัว รูปแบบเอาต์พุต กติกาเขียน 1–10 + 5b และรูปแบบตาราง; checker ตัวอย่าง `/home/claude/sx-mcq/parts/check_77d.js`; สคริปต์ครอปตัวอย่าง `/tmp/claude-0/k77d_crop.py`, `/tmp/claude-0/q77d_crop.py`

## ผู้ใช้ขอ (สำคัญ)
1. **อ่านทุกหน้า** ทั้งไฟล์โจทย์และไฟล์เฉลย (render เป็นรูปแล้วดูด้วย Read — ลายมือ/วง/ติ๊ก/ไฮไลต์/สี/สไลด์)
2. **แคปรูปทุกรูป ทั้งโจทย์และเฉลย**: รูปในโจทย์ทุกรูป → `img/q<prefix>_<rid>.jpg` (หลายรูป `..._<rid>b`) + imgNote ที่ไม่บอกคำตอบ; ถ้าช้อยเป็นรูป ครอปรวมเป็นรูปโจทย์ติดป้าย A–E; ไฟล์เฉลยที่มีรูป/สไลด์/screenshot/ลายมือ → kimg `img/k<prefix>_<rid>.jpg` (กว้าง 760px JPEG q~64) ครบทุกรูป (ตรวจกับจำนวนรูปใน pdfimages; ยกเว้นปก/ตกแต่ง); ข้อความพิมพ์ล้วนไม่ต้องครอป ถอดลง notes ให้ครบทุกบรรทัด
3. **บอกให้ครบเหมือนดูไฟล์จริง**: notes ถอดคำอธิบาย/โน้ตในไฟล์เฉลยครบ (รวมชื่อคนที่อ้าง, "อ.บอก", ?, สี) + โน้ตของผู้จดในไฟล์โจทย์
4. ข้อซ้ำภายในชุด/ข้ามชุดต้องตอบให้สอดคล้อง — ค้นคลังด้วย `cd /home/claude/sx-mcq && DIR=data node tools/find.js "<regex>"` (คลังตอนนี้: MDCU76 RoA/RoC/RoD, MDCU77 RoA/RoB/RoC/RoD = data_b1–b7.js, 514 ข้อ) ถ้าคำตอบในคลังเดิมดูผิดจริง ให้รายงานแยก (อย่าแก้ไฟล์ data เอง)
5. ข้ามตาราง colorectal แยกที่ไม่มีโจทย์ในไฟล์โจทย์ (colorectal อยู่ Subspe) และข้ามสิ่งที่ไม่ใช่ MCQ (OSCE/MEQ) — ระบุในคำตอบ; ข้อ colorectal ที่อยู่ในชุดโจทย์ Gen Sx ใส่ตามปกติ

## ตารางต้องมีเพิ่ม 2 คอลัมน์ (และใส่ในคำตอบเป็น JSON ด้วย)
- **topic** 1 ค่าจาก: Breast, Thyroid & Endocrine, Liver, Gallbladder & Biliary, Pancreas & Spleen, Esophagus, Stomach & Duodenum, Small bowel & Obstruction, Appendix, Colorectal & Anorectal, Hernia & Abdominal wall, Vascular & Venous, Trauma & Critical care, Fluid, Electrolyte & Nutrition, Perioperative care & Surgical infection, Transplantation, Oncology principles, Ethics & Professionalism, Skin & Soft tissue, Others
- **tags** 1–3 ค่า ตามคำศัพท์ใน `/home/claude/sx-mcq/parts/TAGS.md` (สะกดตรงตัว)
- **ข้อซ้ำ/ข้อคล้ายในคลังเดิม**: ข้อที่เป็นข้อเดียวกัน คำถาม+ช้อยเดียวกัน หรือประเด็นเดียวกันที่ออกซ้ำ (ไม่ใช่แค่หัวข้อกว้างเดียวกัน) → ระบุ key `<set>|<ro>|<orig>` ของข้อในคลัง (ดูค่า set/ro/orig จากผล find.js หรือไฟล์ data)

## ตอบกลับ (สั้น กระชับ แต่ครบ)
จำนวนข้อ, จำนวน Part, ข้อที่เราตอบต่างจากคีย์ (rid/orig: คีย์ → เรา + เหตุผล 1 บรรทัด), ข้อที่คีย์ให้หลายคำตอบ/มี ?, ข้อที่ไม่มีคีย์, ช้อยที่แต่งเพิ่ม/ข้อมูลที่เติม (สั้น), รายการรูปที่ครอป (q/k), ข้อที่ข้าม + เหตุผล, คำตอบในคลังเดิมที่ดูผิด/ไม่สอดคล้อง (ถ้ามี), แล้วปิดท้ายด้วย JSON 2 บรรทัด (key = ค่า orig ที่จะใช้ในข้อสอบ ตรงตัว):
TOPICS_TAGS {"<orig>":{"t":"<topic>","g":["<tag>",…]},…}
DUPS {"<orig>":["<set>|<ro>|<orig>",…],…}   (เฉพาะข้อที่มี)
