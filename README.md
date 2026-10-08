# MCQ Platform Kit (สำเนาโครง platform "AC Peds MCQ" แบบเปล่า)

โครงนี้คือ platform เดิมทุกอย่าง (หน้าตา, กระดาษคำตอบ, การบันทึก, การเรียงข้อ, การเลือกหลายชุด ฯลฯ) แต่ **ไม่มีข้อสอบ** — ใส่ข้อสอบวอร์ดไหนก็ได้

```
template.html        หน้าเว็บทั้งหมด (CSS + JS) — มีช่อง /*DATA*/ /*TITLE*/ /*BRAND*/ /*SUB*/ ให้ build.py เติม
config.json          ชื่อ platform, ชื่อย่อ, storageKey, ป้ายฟิลด์, ตารางชื่อไฟล์ต้นฉบับ (โค้ด → ชื่อไฟล์)
core.js              const IMGS={}; const QB=[];
data/data_bN.js      ข้อสอบ 1 ไฟล์ต่อ 1 ชุด (ปี + rotation) — build เรียงตามเลข N (N = ลำดับที่สร้าง → rid)
img/*.jpg            รูปโจทย์ (q…) และรูปเฉลย/สไลด์ (k…) — ชื่อไฟล์ (ไม่รวมนามสกุล) = image key
fixes.js (ไม่บังคับ)  แพตช์ทับข้อมูลภายหลังแบบอ้าง rid (ถ้าต้องแก้ทีละมาก ๆ)
build.py             python3 build.py [outdir]  → out/index.html + out/img/
tools/validate.js    node tools/validate.js      → ต้องได้ "bad 0"
tools/optcheck.js    node tools/optcheck.js [fromRid] → หาช้อยที่ "ใบ้คำตอบ" (ช้อยถูกยาว/มีวงเล็บ)
tools/find.js        node tools/find.js "<regex>" → ค้นข้อเดิมในคลังเพื่ออ้างอิง/ตอบให้สอดคล้อง
tools/smoke.py       python3 tools/smoke.py      → เปิดหน้าใน Chromium ขนาดมือถือ ทดสอบตอบ/รูป/error
examples/            ตัวอย่างรูปแบบไฟล์ข้อมูล (อย่า build ตรง ๆ)
```

Publish: ไฟล์หน้า = out/index.html ; รูปทุกไฟล์ส่งเป็น supporting files `img/<ชื่อ>.jpg` (ไม่ฝัง base64 เพราะหน้าจะเกิน 16 MB) ; ประกาศ capabilities `db` + `user` เพื่อให้ความคืบหน้าซิงก์ตามบัญชี

## เว็บไซต์ (GitHub Pages)
- เว็บ: https://bankypp.github.io/sx-mcq/  (GitHub Pages → branch `main`, โฟลเดอร์ `/docs`)
- build: `python3 build_site.py` → `docs/index.html` (+ `docs/img/`)
- หน้าตาหน้าโจทย์มาจาก CSS ของ `template.html` (เหมือน platform เดิม) + `site/extra.css`; ตัวแอปอยู่ที่ `site/app.js`, โครงหน้าอยู่ที่ `site/body.html`
- `config.json` → `wards`: วอร์ดแต่ละอัน (`dir` = โฟลเดอร์ข้อสอบ data_bN.js และ `highyield.js` ถ้ามี)
- `config.json` → `firebase`: ใส่ firebaseConfig เพื่อเปิดระบบบัญชี (ไม่ใส่ = บันทึกในเบราว์เซอร์อย่างเดียว)
- ความคืบหน้าในเว็บ: Phase 1 / Phase 2 แยกกัน, เก็บประวัติการตอบทุกครั้ง (ใช้กับ Ward staff round), โน้ตพิมพ์/เขียนต่อข้อ, ⚑ ไม่มั่นใจ
- `template.html` + `build.py` ยังใช้ build เวอร์ชัน artifact ใน Claude ได้ตามเดิม

## วอร์ดศัลย์ (Gen Sx + Subspe Sx)
| วอร์ด | id | สอบ | โฟลเดอร์ข้อสอบ |
|---|---|---|---|
| General Surgery Y4 (Gen Sx) | `sx` | MCQ | `data/` |
| Subspecialty Surgery Y4 (Subspe Sx) | `subspe` | MCQ + OSCE | `data_subspe/` |

- ตอนนี้วน **Gen Sx**: ข้อสอบเก่า/AC ของ Gen → `data/` เท่านั้น
- Lecture / ไฟล์เนื้อหา / สรุป (แม้ส่งช่วง Gen) → คลัง lecture ของ Subspe (เก็บใน claude.ai Project "Bank AC Compilation" → `subspe-sx/lectures/` เพราะ repo นี้เป็นสาธารณะ) — ไม่ใส่ใน Gen
- อะไรที่ใส่ใน Subspe แล้วไม่ต้องใส่ใน Gen; หลังเปลี่ยนเป็นช่วง Subspe ทุกอย่าง → Subspe
- กติกาเต็มอยู่ใน Project: `sx-mcq/กติกาการจัดไฟล์ศัลย์.md`
