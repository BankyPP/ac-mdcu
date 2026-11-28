# kit78 — ทำให้ "ทุกวอร์ดที่อัพข้อสอบเก่า" ได้เฉลยระดับ Subspe 78 / Gen Sx อัตโนมัติ (ผู้ใช้สั่ง 28 พ.ย. 2026 12:31)
มาตรฐาน: project doc `kit/มาตรฐานเฉลย-แบบ78-GenSx.md` · ด่าน build: `tools/explain_quality.js` (DEPTH78) + `tools/explain_gate.js`

## ด่านที่บังคับเอง (ไม่ต้องจำ)
- `python3 tools/explain_build.py <DIR>` ตรวจ**ทุกข้อในแพตช์ `parts/explain/<DIR>/zq*.json` และ `zz*.json`** ด้วย DEPTH78 — ไม่ผ่านแม้ข้อเดียว = build หยุด ห้าม push
  - DEPTH78: interp ≥120 · why ≥350 · ทุกช้อยผิด ≥110 + มี "จะถูกถ้า/ไม่มีสถานการณ์ใด/ข้อความถูก" · trap ≥130 · summary ≥5 bullet รวม ≥550 · opinion ≥120 · variants ≥4 ข้อ รวม ≥300 · mnemonic + guide ไม่ว่าง · ห้าม "นอกสไลด์" / "จะถูกถ้าคำถาม"
  - ชุดต้นแบบที่ยกเว้น: `parts/explain/<DIR>/_depth_exempt.txt` (Subspe: MDCU78| — ผู้ใช้ห้ามเปลี่ยนรูปแบบ)
- ดังนั้นเฉลยข้อสอบเก่าของวอร์ดใหม่ **ต้องเขียนเป็นแพตช์ zq/zz ใน parts/explain/<DIR>/** (ไม่เขียนลงไฟล์ data ตรง ๆ) — loader (`tools/load.js`, `build_site.py`) โหลด `<DIR>/explain.js` ทุกวอร์ดอยู่แล้ว

## ขั้นตอนเมื่อผู้ใช้อัพข้อสอบเก่าวอร์ดใหม่ / ปีใหม่
1. บอก model + effort (Opus 5.5 High) · อ่าน `kit/มาตรฐานเฉลย-แบบ78-GenSx.md` + kit การลงข้อสอบเก่าของวอร์ดนั้น
2. **ลงโจทย์ตามไฟล์** (ห้ามแก้ถ้อยคำเอง · คำตอบเว็บ ≠ คีย์ ต้องเขียนในข้อ) และ **notes = ถอดหน้าไฟล์ครบ** ตัวพิมพ์ + ลายมือ + ไฮไลต์ + สไลด์/รูปที่แปะ + "ที่ปรับในเว็บ" · kimg = รูปหน้านั้น · ห้ามชื่อนักศึกษา/ผู้โพสต์/ชื่อผู้ป่วย/HN
3. `node kit78/dump.js <DIR> /tmp/all_<DIR>.json` → แบ่ง key เป็น batch ละ 10–12 ข้อ
4. **ตัวอย่างก่อน:** เขียนเอง 1–2 ข้อแรกของปี/วอร์ดใหม่ ทำ PDF (หัวข้อ Kanit · เนื้อหา Sarabun) ส่งผู้ใช้ แล้วทำต่อ (ไม่ต้องรอ เว้นแต่ผู้ใช้ทักว่าไม่ใช่)
5. **subagent ขนาน 5–8 ตัว** (general-purpose · background) แต่ละตัวได้: "อ่าน kit78/BRIEF_WRITE.md แล้วทำตาม · dump /tmp/all_<DIR>.json · key: … · แพตช์ parts/explain/<DIR>/zqNN.json" — ต้องได้ `python3 kit78/gate78.py /tmp/all_<DIR>.json <แพตช์>` OK 0
   - วอร์ดที่มีเฉลยอยู่แล้วแต่บาง → `kit78/BRIEF_DEEPEN.md` แพตช์ `zz*`
   - ตัวหลัก (ไม่ใช่ subagent) เป็นคน build/ship เอง · subagent ห้ามแตะ git
6. `python3 tools/explain_build.py <DIR>` (ด่าน DEPTH78) → `python3 build_site.py` → commit + push → รายงาน **BUILD วันเวลา** ทุกครั้ง
7. ตรวจปิดงาน: `python3 kit78/gate78.py /tmp/all_<DIR>.json parts/explain/<DIR>/z*.json` = OK 0 · บอกผู้ใช้ว่า "งานครบหมดแล้ว" เมื่อครบจริง · อัปเดต project doc สถานะ
## Unit round (โจทย์จาก lecture)
ใช้แบบ Subspe L22/L23: ถอดทุกหน้าสไลด์/ชีทจากรูป (`parts/fill/src_unit/BRIEF_T.md`) → เขียน (`BRIEF_W.md`) → `uchk.py` (เกณฑ์ ≈ p25 ของ L28 ที่ผู้ใช้อนุมัติ) → asm → `tools/unit_full_check.py` ขาด 0
