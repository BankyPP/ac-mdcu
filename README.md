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
- เว็บ: https://bankypp.github.io/ac-mdcu/  (GitHub Pages → branch `main`, โฟลเดอร์ `/docs`)
- build: `python3 build_site.py` → `docs/index.html` (โครงหน้าอย่างเดียว) + `docs/site.css` + `docs/core_site.js` + `docs/data_<ward>*.js` + `docs/app_site.js` (+ `docs/img/`) — โค้ดและข้อสอบแยกไฟล์ ไม่ฝังในหน้า เพราะข้อความ 44 MB ในหน้าทำให้ส่วนขยาย Chrome ที่สแกนหน้าค้าง 10–20 วินาทีทุกครั้งที่เปลี่ยนหน้า (4 พ.ย. 2026) · ถ้าระบุ outdir เองโดยไม่มี `--pack` ยังได้ไฟล์เดียวเหมือนเดิม
- โหลดข้อสอบทีละวอร์ด (9 พ.ย. 2026): หน้าเว็บโหลดแค่ `core_site.js` + `app_site.js` (~300 KB) แล้วแสดงรายชื่อวอร์ดทันที · build รันข้อมูลแต่ละวอร์ดใน node (`tools/ward_split.js`) แล้วแยกเป็น 2 ไฟล์: `data_<ward>.json` = สิ่งที่หน้าวอร์ดต้องใช้ (โจทย์ไม่มีเฉลย, Unit/MEQ/OSCE, tags…) และ `data_<ward>_x.json` = เฉลยของทุกข้อ MCQ/Unit (เรียงตามตำแหน่ง) + Round I/O, textbook, สรุป High-yield, OSCE ref · กดเข้าวอร์ด → โหลดไฟล์แรก → หน้าวอร์ดขึ้น แล้วโหลดไฟล์ _x ต่อเบื้องหลัง · **ทุกหน้าของวอร์ดยกเว้นหน้าแรกของวอร์ดจะรอ _x ก่อน** (`WSRC` ในหน้า → `loadWard()`/`loadWardX()` ใน site/app.js) · จำนวนข้อบนการ์ดวอร์ดมาจาก `WCOUNT` · ฟังก์ชันที่ใช้ข้อสอบ**ข้ามวอร์ด** (ส่ง/นำเข้าความคืบหน้า, Legendary หมดเวลา, รับผลตรวจ MEQ) ต้อง `await loadWard(id)` / `loadAll()` ก่อนเสมอ และโค้ดบนหน้าแรกของวอร์ดต้องไม่พึ่งข้อมูลใน _x (ถ้ามี field ใหม่ที่ใช้แค่หลังตอบ เพิ่มชื่อใน `HQ` ของ ward_split.js ได้) · ไม่มี node → build กลับไปทำ `data_<ward>*.js` แบบโหลดทั้งก้อน
- `site/sw.js` (service worker) ถูกคัดลอกไปข้างหน้าเว็บแต่ละเว็บ: ไฟล์ที่มี `?v=` เก็บในเครื่องหลังโหลดครั้งแรก (เปิดครั้งต่อไปเร็ว/ใช้ออฟไลน์ได้) · index.html ถามเน็ตก่อนเสมอ อัปเดตจึงขึ้นทันที
- กันหน้าเก่าค้างในมือถือ (11 พ.ย. 2026, `site/app.js` stCheck): แท็บ/เว็บแอปบน iPhone เปิดค้างได้หลายวันโดยไม่โหลดใหม่ พอ deploy ใหม่ลบ/เปลี่ยนรูป (เช่นตอนเปลี่ยนเป็น sprite 10 พ.ย.) หน้าเก่าจะขอรูปที่ไม่มีแล้ว → รูปเฉลยขึ้น "?" มีแต่ข้อความ · ตอนนี้เมื่อกลับมาที่หน้า / ทุก 15 นาที / รูปโหลดไม่ขึ้น เว็บจะถาม index.html ล่าสุดแล้วเทียบ hash ของ core_site/app_site ถ้าเก่ากว่า: อยู่หน้ารายชื่อวอร์ด/หน้า home → โหลดใหม่เอง · กำลังทำข้อ → ขึ้นแถบ "เว็บมีเวอร์ชันใหม่ — แตะเพื่อโหลดใหม่"
- **commit ไฟล์จาก build ให้ครบเสมอ**: `git add docs/index.html docs/*.js docs/*.json docs/*.css docs/si/index.html docs/si/*.js docs/si/*.json docs/si/*.css` (ข้อมูลวอร์ดเป็น `data_<ward>*.json` แล้ว — ลืม .json = เว็บยังใช้ข้อมูลเก่า) — หน้าอ้างไฟล์ข้อมูลด้วย hash ถ้าส่ง index.html ไปอย่างเดียว เว็บจะขึ้นแถบแดง "โหลดข้อสอบไม่ครบ" · ถ้า rebase ชนที่ไฟล์ใน `docs/` เหล่านี้ ให้เอาของ origin แล้ว build ใหม่ทั้งคู่ (ไม่ต้องแก้มือ)
- หน้าตาหน้าโจทย์มาจาก CSS ของ `template.html` (เหมือน platform เดิม) + `site/extra.css`; ตัวแอปอยู่ที่ `site/app.js`, โครงหน้าอยู่ที่ `site/body.html`
- `config.json` → `wards`: วอร์ดแต่ละอัน (`dir` = โฟลเดอร์ข้อสอบ data_bN.js และ `highyield.js` ถ้ามี)
- `config.json` → `firebase`: ใส่ firebaseConfig เพื่อเปิดระบบบัญชี (ไม่ใส่ = บันทึกในเบราว์เซอร์อย่างเดียว)
- ความคืบหน้าในเว็บ: Phase 1 / Phase 2 แยกกัน, เก็บประวัติการตอบทุกครั้ง (ใช้กับ Ward staff round), โน้ตพิมพ์/เขียนต่อข้อ, ⚑ ไม่มั่นใจ · ข้อที่มีโน้ตหลังเฉลยขึ้น 📝 ในกระดาษคำตอบทุกแบบ และกรอง “📝 มีโน้ต” ได้ทุกที่ที่กรอง ⚑ / ★ ได้ (`noted(u)` ใน site/app.js, 13 พ.ย. 2026)
- `template.html` + `build.py` ยังใช้ build เวอร์ชัน artifact ใน Claude ได้ตามเดิม
- artifact MDCU (https://claude.ai/artifact/5KGcnr6yKsqvXGNh73mmfE) — **ตั้งแต่ 19 พ.ย. 2026 เป็นเวอร์ชันเบาไว้แต่งโจทย์ด้วย AI อย่างเดียว** (ทำข้อสอบเก่าพร้อมเฉลยใช้เว็บ GitHub Pages): `python3 build_site.py <dir> --ai` → index.html + data_<ward>*.js 6 ไฟล์ รวม ~42 MB (`tools/ai_pack.js`): ไม่มีรูป · MCQ เก็บครบพร้อมคำอธิบาย (Legendary ผสมข้อสอบเก่ากับข้อ AI) · ตัด Unit bank และสรุป High-yield · เก็บ MEQ/OSCE, Round I/O, textbook, resources, tags, topics, OSCE ref · publish ด้วย mode "replace" · **อัปเดต artifact เฉพาะตอน Round I/O, L/R/T/N หรือฟีเจอร์เปลี่ยน** ไม่ต้องอัปเดตทุกครั้งที่ลงข้อสอบเก่า · publish ล่าสุด: 19 พ.ย. 2026 08:58 version 1795053494-e434 (เดิม 253.5 MB → 18 MB) · (`--pack` แบบเต็มพร้อมรูปยังใช้ได้ แต่เกิน 256 MiB แล้ว)

## กติกาหน้าเว็บ
- **กล่อง "ความเห็นของผม" ต้องมีทุกข้อ** (17 พ.ย. 2026, ทวทว — MCQ / MEQ / OSCE): ข้อสอบเก่าใช้ `opinion` ในไฟล์ข้อมูล — ของเดิมที่ยังว่างเขียนเพิ่มไว้ใน `<dir>/opinions.js` · `meq_opinions.js` · `osce_opinions.js` (key `set|ro|orig[#n]`, ใส่เฉพาะข้อที่ยังว่าง; build_site.py + tools/load.js โหลดหลังไฟล์ข้อมูล) · **ชุดใหม่ต้องเขียน opinion ทุกข้อตั้งแต่ตอนใส่** · ข้อที่ AI แต่ง (Unit, Morning MEQ, Unit OSCE, Admission / Specialty / Legendary AI) ถ้าว่าง แอปใส่ข้อความมาตรฐานให้ (`opinionOf()` ใน site/app.js)
- **ฟีเจอร์ที่ใช้ร่วมกันทุกหน้า และไม่ขึ้นกับความรู้หรือรูปแบบสอบของวอร์ดนั้น ต้องแก้ให้ครบในครั้งเดียว** — ทั้งแท็บ MCQ / MEQ / OSCE ทุกวอร์ด ทุกเว็บ (MDCU, SI, NL/Compre ในโพยหมอ) ห้ามรอให้ผู้ใช้บอกทีละหน้า · ก่อนส่งให้ค้นที่อื่นที่มีของแบบเดียวกันก่อนเสมอ (ผู้ใช้สั่ง 4 พ.ย. 2026)
- กล่องชมพู "ทำต่อ / กำลังทำ" บนหน้า home ของ MCQ, MEQ, OSCE มีปุ่ม × เหมือนกัน (`rsBox`, `rsHidden`, `rsVisit`): กดแล้วซ่อนจนกว่าจะกลับไปทำรอบนั้น · การซ่อนซิงก์ข้ามเครื่อง · **กล่องชมพู "ทำต่อ / กำลังทำ" ทุกกล่องในหน้าของรอบเองก็มี × ด้วย** (17 พ.ย. 2026, ทวทว — Quality, Legendary, Legendary/Quality OSCE, "ไปข้อแรกที่ยังไม่ได้ทำ" ของ Service MEQ/OSCE): ใช้ `rsPage(key,t,btn,back)` — key ของหน้า `pg:…` แยกจากของหน้า home (ซ่อนในหน้ารอบไม่ซ่อนกล่อง home) · ขึ้นใหม่เมื่อกลับเข้าไปทำรอบนั้น (`rsVisit` รับหลาย key) · ถ้ากล่องเป็นทางเดียวที่กลับเข้ารอบที่จับเวลาอยู่ จะเหลือลิงก์บรรทัดเดียวแทน (`back`) · **กล่องแบบนี้ที่เพิ่มใหม่ต้องใช้ rsPage เสมอ**
- **กระดาษคำตอบของทุก round เลือกได้เหมือน Service** (18 พ.ย. 2026, ทวทว): MCQ รอบแบบ session (Quality, Ward staff, Advisor ฯลฯ) มีชิปชุด (ปี·Ro, เฉพาะชุดที่อยู่ในรอบ, ทำ/ทั้งหมด) + ชิปบท (ชุดที่มีบท) + สถานะเพิ่ม "ตอบถูก" และ "ไม่เคยทำใน P1" (Phase 2) + ป้าย P1✓/✗ — กรองแค่สิ่งที่แสดงในกระดาษคำตอบ ลำดับ/ข้อในรอบไม่เปลี่ยน · เก็บใน `P.sess.shf` (รอบใหม่เริ่มที่ทั้งหมด) · MEQ/OSCE รอบที่ไม่ใช่ Service/Unit มีชิปชุด/พาร์ท/สถานะ เก็บใน `v.shf[รอบ]`
- **ชิป Ro ในตัวเลือกปีทุกที่ที่โชว์ ทำแล้ว/ทั้งหมด มีแถบเขียวตามสัดส่วนเหมือน Service round** (17 พ.ย. 2026, ทวทว): `pcChip(d,n)` → class `svchip` (+ `done` = ✓ ครบ) และ `--pc` · ใช้ใน Service/Quality/Advisor MCQ, Quality OSCE, Service (และ Unit) MEQ/OSCE · ตัวเลือกชุดใหม่ที่นับความคืบหน้าให้ใช้ pcChip
- หน้าทำข้อ Quality: กล่องจับเวลาไม่ฟิตขนาด/ไม่ตั้ง padding ของหน้าใหม่ทุกวินาทีแล้ว (`paintQR` เทียบข้อความโดยไม่นับตัวเลข, `qPad` ไม่ล้าง padding ก่อนวัด) — ของเดิมทำให้หน้าเด้งขึ้นตอนเลื่อนลงใกล้ท้ายหน้า (17 พ.ย. 2026)
- **แตะชื่อปี = เลือก/ยกเลิกทุก Ro ในปีนั้น** (13 พ.ย. 2026, ทุกวอร์ดทุกเว็บ): ใช้ได้กับกลุ่มปี `<div class="yr"><div class="yh">` ทุกที่ (`yrToggle`/`yrPaint` ใน site/app.js — กดชิปของหน้าเองทีละอัน) · ตัวเลือกชุดแบบใหม่ที่มีหลาย Ro ต่อปีให้ใช้ `yrGroupHTML()` จะได้ฟีเจอร์นี้เอง (MEQ/OSCE ใช้แล้ว)
- **ตอบซ้ำในข้อเดิม = ไม่นับ** (16 พ.ย. 2026, ทวทว: MCQ ทุก round + MEQ/OSCE): นับถูก/ผิดเฉพาะคำตอบแรกของ "การเข้าข้อ 1 ครั้ง" — กด "ทำข้อนี้ใหม่" แล้วตอบใหม่โดยยังไม่ออกจากข้อ = บันทึกเป็นคำตอบล่าสุดที่โชว์ (`P.disp[phase][uid]`, `P.unit.disp`, bank item `.dsp`; MEQ/OSCE คะแนนที่นับเก็บใน `rec.cg[i]`) แต่ไม่เข้า Ward staff / สถิติ / คะแนนของรอบ (`s.cn`, `m.cn`) · การเข้าข้อจบเมื่อขึ้นข้ออื่น (ถัดไป/ก่อนหน้า/กดเลขข้ออื่นในกระดาษคำตอบ) ออกจากหน้าทำข้อสอบ หรือโหลดหน้าใหม่ (`VIS`/`visTouch` ใน site/app.js, `MQVIS` ใน site/meq.js) · ข้อที่โชว์คำตอบที่ไม่นับมีกล่อง `.ncnote`
- **กล่อง "ทบทวนก่อนสอบ" (Phase 2) พับ/กางได้** (17 พ.ย. 2026, ทวทว — MCQ / MEQ / OSCE): แตะหัวกล่องเพื่อพับเมนูทั้งหมด ค่าเริ่มต้น = กาง · จำแยกตามแท็บใน `st.p2fold` (ซิงก์ข้ามเครื่อง) · `p2Head()` / `p2Fold()` / `bindP2Fold()` ใน site/app.js
- **เลือกหัวข้อตาม Tag ใน Ward staff / Advisor round** (17 พ.ย. 2026, ทวทว — MCQ / MEQ / OSCE): แผง Tag + Minimum/Maximum ตัวเดียวกับ Service round (`tgPanel`/`tgWire`) · MCQ: Ward staff เก็บใน `st.staffTg`, Advisor ใน `st.adv.tg` · Tag ของโจทย์ใช้ `tgOf()` (โจทย์ AI Legendary ที่ไม่มี Tag เดาจาก topic/stem) · กระดาษคำตอบของ session ขึ้นแถบ Tag (`sessTgLine` — "เอาออก" = เติมข้อที่เหลือเข้า session เดิม) · MEQ/OSCE: `v.tgs` (staff) / `v.tga` (advisor) แยกจาก `v.tg` ของ Service, กรองใน `mqList()`, Tag ใช้ `mqQTagsX()` (สถานี AI ไม่มี Tag → ใช้ topic)
- **หน้าเลือกชุดของ Service round (MCQ) บอกจำนวนข้อที่กำลังจะเริ่ม** (17 พ.ย. 2026): "จะได้ทำ n ข้อ · ทำแล้ว · ยังไม่ทำ" อัปเดตตามชุดและ Tag ที่เลือก เหมือน Ward staff / Advisor (MEQ/OSCE แสดงจำนวนในรายการข้ออยู่แล้ว)
- รายการยาว ๆ ให้ทำเป็น toggle พับ/กางได้เสมอ ปิดไว้เป็นค่าเริ่มต้น เว้นแต่ผู้ใช้บอกเป็นอย่างอื่น (ผู้ใช้สั่ง 3 พ.ย. 2026)

## วอร์ดศัลย์ (Gen Sx + Subspe Sx)
| วอร์ด | id | สอบ | โฟลเดอร์ข้อสอบ |
|---|---|---|---|
| General Surgery Y4 (Gen Sx) | `sx` | MCQ | `data/` |
| Subspecialty Surgery Y4 (Subspe Sx) | `subspe` | MCQ + OSCE | `data_subspe/` |

- ตอนนี้วน **Gen Sx**: ข้อสอบเก่า/AC ของ Gen → `data/` เท่านั้น
- Lecture / ไฟล์เนื้อหา / สรุป (แม้ส่งช่วง Gen) → คลัง lecture ของ Subspe (เก็บใน claude.ai Project "Bank AC Compilation" → `subspe-sx/lectures/` เพราะ repo นี้เป็นสาธารณะ) — ไม่ใส่ใน Gen
- อะไรที่ใส่ใน Subspe แล้วไม่ต้องใส่ใน Gen; หลังเปลี่ยนเป็นช่วง Subspe ทุกอย่าง → Subspe
- กติกาเต็มอยู่ใน Project: `sx-mcq/กติกาการจัดไฟล์ศัลย์.md`

## Kit สำหรับวอร์ด/บัญชีอื่น
`kit/ac-site-kit.zip` (+ `kit/PROMPT.md`, `kit/FEATURES.md`) — โครงเว็บนี้แบบเปล่า ใช้สร้าง artifact ใน Claude บัญชีอื่น (ซิงก์บัญชี Claude ในตัว) สร้างใหม่ทุกครั้งที่แก้ฟีเจอร์

## สรุป High-yield (Phase 2) — แบบแท็บ "สรุปแนวข้อสอบ" ของคลัง Prevent Med
- ทุกวอร์ด ทุกชนิดข้อสอบ (MCQ / MEQ / OSCE เนื้อหาแยกกัน) ทั้งเว็บ MDCU และ SI · หน้า: `site/hysum.js` (ปุ่ม 📘 สรุป High-yield ในการ์ดทบทวนก่อนสอบ)
- ข้อมูล: `<dir>/sum_<mcq|meq|osce>_<slug>.js` — 1 ไฟล์ต่อ 1 แท็กหัวข้อ (`SUMM.push({tag,title,intro,groups:[{title,sections:[{id,title,trend,asked,pattern,pearls,members}]}]})`)
- members: MCQ `set|ro|orig` · MEQ/OSCE `set|ro|orig#k` (ข้อย่อยที่ k) — ถ้า set|ro|orig ซ้ำกันจะต่อ `@p<page>`
- นับเฉพาะข้อใน Service round · ป้าย ≥5 rotation 🔥 ออกบ่อยมาก · 3–4 ออกบ่อย · 2 ออกซ้ำ · 1 ออก 1 rotation · ตัวเลข/rotation คำนวณตอนเปิดหน้า
- ข้อใหม่ที่ยังไม่อยู่ในเรื่องไหน ขึ้นเองในกลุ่ม "ข้อใหม่ที่ยังไม่ได้สรุป" — **ทุกครั้งที่เพิ่มข้อสอบเก่า ให้อัปเดตไฟล์สรุปของวอร์ด/ชนิดนั้นด้วย** (ผู้ใช้สั่ง 20 ต.ค. 2026: อัปเดต real time)
- เครื่องมือ: `node tools/sumdump.js <dir> <MCQ|MEQ|OSCE> [tag]` (ดูแท็ก / พิมพ์ข้อของแท็ก) · `node tools/sumcheck.js <dir> <type> [tag]` → ต้องได้ `bad 0` · brief สำหรับ agent: `parts/SUMMARY_HY_BRIEF.md`

## เว็บที่สอง: คลังข้อสอบเก่า SI (ศิริราช) — โค้ดชุดเดียวกัน
- เว็บ: https://bankypp.github.io/ac-mdcu/si/ · artifact: https://claude.ai/artifact/V6A3RJvEnKQL1qhidGAbMx (publish ล่าสุด 17 พ.ย. 2026 version 1794873244-3eae = index.html จาก cae2cf7 · ก่อนหน้า 1794850674-e3c4 = build จาก 7ba2431 ครบทั้งข้อมูลและรูป 91 sprite)
- build: `python3 build_site.py --inst si` → `docs/si/` · artifact: `python3 build_site.py --inst si --pack <dir>`
- ข้อมูล SI อยู่ใน `si/` (`si/config.json` + โฟลเดอร์วอร์ด เช่น `si/data_prevmed/`) — เว็บ MDCU ไม่เห็นข้อมูลนี้
- ฟีเจอร์ใหม่ใส่ที่ `site/` ครั้งเดียว ได้ทั้งสองเว็บ → build ทั้งสองคำสั่งทุกครั้ง
- ความคืบหน้าในบัญชี: MDCU = `users/{uid}` · SI = `users/{uid}/inst/si` (config `fbPath`) · localStorage แยกด้วย `storageKey`
- ปุ่มเปลี่ยนสถาบันอยู่หน้า "บัญชีของฉัน" ของทั้งสองเว็บ ต้องใส่รหัสเข้าเว็บปลายทาง (hash จาก `gate` ของ config ปลายทาง)
- วอร์ด SI (ตามลำดับที่เรียน): Surgery Y4 (`sx`, วอร์ดเดียว ไม่แบ่ง Gen/Subspe) · Pediatrics Y4 (`ped`) · Preventive Medicine Y4 (`prevmed`, MEQ อย่างเดียว) · Internal Medicine Y4 (`med`, MCQ + MEQ + OSCE) — ยังไม่มีข้อสอบ (Sx, Ped ตั้งไว้บันทึกเกรด)
- คลังรวม (shared) ของ SI ใช้ `shared/si_<ward>` (config `sharedPrefix`) แยกจากของ MDCU

## OSCE: จัดชุดข้อสอบและแต่งโจทย์ AI (ผู้ใช้สั่ง 3 พ.ย. 2026 — ทุกวอร์ด ทุกเว็บ รวม NL/Compre ในโพยหมอที่ sync engine ไป)
- **หัวข้อใหญ่** (`osceTopics`) ในหน้า Legendary: "สุ่มกระจายให้" (`osQuotaAuto` — น้ำหนักครึ่งหนึ่งจากสัดส่วนในข้อสอบเก่า ครึ่งหนึ่งเฉลี่ยเท่ากัน คูณสุ่ม ±25% · ออกครบทุกหัวข้อถ้าจำนวนข้อพอ) หรือ "กำหนดเองว่าหัวข้อละกี่ข้อ" (ส่วนที่เหลือสุ่มกระจาย)
- **หัวข้อเล็ก** เรื่องเดียวกัน (PBS, CXR ฯลฯ — `q.sub` หรือเดาด้วย `OS_SUBT`) ไม่เกิน `OS_SUBLIM`=2 ข้อต่อชุด แม้ต่างโรค: Legendary, ข้อ AI, Quality แบบสุ่มจากทั้งคลัง · ชุดตามปีไม่จำกัด · ออกแบบเองแค่เตือนสีแดง · **เว็บ SI ปิดกติกานี้ไว้ก่อน** (`si/config.json → osceSubLim:0`; ผู้ใช้สั่ง 3 พ.ย. 2026: จำนวนข้อเยอะ ยังไงก็ต้องซ้ำ ไว้ได้ข้อมูลเพิ่มจะมาแก้) · ข้อสอบเก่าลงตามไฟล์จริงเสมอ ไม่ใช้กติกานี้ตัดข้อ
- **โจทย์ AI** (`osGenPrompt`): ใช้ข้อสอบเก่าเป็นตัวอย่างว่าออกประมาณไหน แต่ห้ามซ้ำ (เปลี่ยนโรค/ค่า) · เฉลยในไฟล์เป็นแนวทาง ถ้า AI ไม่เห็นด้วยให้เขียนใน `keyNote` → แสดงเป็น "ความเห็นของผม" · แหล่งอ้างอิงวอร์ด `<dir>/osce_ref.js` (`OSREF`) ส่งเข้า prompt แต่งและตรวจเมื่อ topic/sub ตรง

## Service round: เลือกหัวข้อตาม Tag (ผู้ใช้สั่ง 3 พ.ย. 2026 — ทุกวอร์ด ทุกเว็บ ทั้ง MCQ / MEQ / OSCE)
- ใต้การเลือกปี/ชุด มีช่องติ้ก "เลือกหัวข้อด้วย" · ไม่ติ้ก = แค่ช่อง + คำอธิบายสั้น ๆ · ติ้กแล้วขึ้นกล่อง Tag เรียง A–Z เลือกได้หลายอัน + Mode (`tgPanel`, `tgWire` ใน `site/app.js`)
- **Minimum** = ข้อมี Tag ที่เลือกอย่างน้อย 1 อัน · **Maximum** = ข้อห้ามมี Tag นอกที่เลือก (`tgPass`) · ติ้กแต่ยังไม่เลือก Tag = ทุกข้อ
- เก็บที่ `P.svc[phase].tg` (MCQ) · `mqS().v.tg` (MEQ/OSCE) = `{on,tags,mode}` · MEQ/OSCE นับ Tag ของทุก Part รวมกันเป็นของข้อนั้น เพราะ Service round เปิดทั้งข้อ
- ลิงก์ที่พาไปเปิดข้อใน Service round (`openQ`, สรุป High-yield, ผล OSCE) ปิดตัวกรอง Tag เหมือนที่ล้างชุด/สถานะ
