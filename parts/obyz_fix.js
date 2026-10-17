// Opus review overrides for YUZU entries — applied by asm_obyz.js after reading obyz_p*.js (orig → fields to replace; "+kimg"/"+kcap" = append)
({
"42.4":{
  flag:"⚠ รูปในหนังสือพิมพ์ชื่อโครงสร้างกำกับไว้ทุกป้าย (เฉลยตัวเอง) และไม่มีตัวอักษร A–E — Claude จึงแทนชื่อ 5 ป้ายด้วยตัวอักษร: <b>A = Caput, B = Subgaleal hemorrhage, C = Cephalhematoma, D = Extradural hemorrhage, E = Galea (epicranial) aponeurosis</b> (คงป้าย Skin, Periosteum, Skull, Dura ไว้เป็นจุดอ้างอิงชั้น) · ทั้ง 2 เวอร์ชันไม่ได้ระบุตัวอักษร (ver.2 ติดเลข 2 ที่ป้าย Subgaleal hemorrhage) — คำตอบเชิงเนื้อหามั่นใจสูงมาก",
  imgNote:"รูปจากหนังสือ YUZU หน้า 93 — ตัวอักษร A–E ใส่แทนชื่อที่พิมพ์กำกับไว้ในหนังสือ (รูปต้นฉบับที่มีชื่อกำกับอยู่ท้ายเฉลย)",
  wrong:[
    "A = <b>Caput succedaneum</b> — บวมน้ำ (serosanguineous) ในชั้น subcutaneous เหนือ galea, ข้าม suture, กดบุ๋ม, มีตั้งแต่แรกเกิดและหายใน 2–3 วัน ไม่ใช่เลือดใต้ galea",
    "C = <b>Cephalhematoma</b> — เลือดใต้ periosteum (ระหว่าง periosteum กับกะโหลก) ขอบเขตจำกัดด้วย suture ไม่ข้าม suture เกิดหลังคลอดหลายชั่วโมง–วัน หายใน 2 สัปดาห์–3 เดือน",
    "D = <b>Extradural (epidural) hemorrhage</b> — เลือดระหว่างกะโหลกกับ dura เป็นเลือดออกในช่องกะโหลก ไม่ใช่หนังศีรษะ",
    "E = <b>Galea (epicranial) aponeurosis</b> — เป็นชั้นเนื้อเยื่อปกติ (เพดานของ subgaleal space) ไม่ใช่ตำแหน่งเลือดคั่ง; subgaleal hemorrhage อยู่ <b>ใต้</b> ชั้นนี้"],
  trap:"รูปเดิมในหนังสือมีชื่อพิมพ์กำกับทุกป้าย (เราเปลี่ยนเป็นตัวอักษรเพื่อให้ทำได้จริง) — หลักคือหา <b>ชั้นใต้ galea แต่เหนือ periosteum</b> ที่ลามข้าม suture ได้; อย่าสับสนกับ cephalhematoma (ใต้ periosteum, ไม่ข้าม suture) หรือ caput (ตื้นกว่า galea)",
  opinion:"ทั้ง 2 เวอร์ชันไม่ได้วงตัวอักษร (หนังสือไม่มีตัวอักษรในรูป) แต่ทั้งคู่ไฮไลต์/ติดเลขที่ป้าย Subgaleal hemorrhage — ในรูปที่เราใส่ตัวอักษรใหม่ ป้ายนั้นคือ B ความมั่นใจสูงมาก",
  "+kimg":["qyz_42-4orig"],"+kcap":["รูปต้นฉบับในหนังสือ YUZU หน้า 93 (มีชื่อโครงสร้างพิมพ์กำกับ)"]},
"42.7":{
  ans:0,
  alert:"⚠ YUZU &amp; MDCU78 เฉลยไม่ตรง — ไฟล์ YUZU ทั้ง ver.1 และ ver.2 วงตอบ <b>B. Suprapubic pressure</b> แต่ MDCU78 RoB ข้อ 34 (คำถามเดียวกัน) ตอบ <b>McRoberts maneuver</b> · ข้อนี้ตอบตาม MDCU78 = <b>A. McRoberts</b> เพราะ RCOG Green-top No.42 / ACOG / StatPearls ให้ McRoberts เป็นท่าแรก (กด suprapubic ทำพร้อมกันหรือตามทันที)",
  flag:"⚠ YUZU ทั้ง 2 เวอร์ชันตอบ B (suprapubic pressure ตาม flowchart ในชีทที่ผู้จดคัดมา) แต่แนวทางสากลและ MDCU78 RoB 34 ตอบ McRoberts — ผู้ใช้สั่งให้ตอบตาม MDCU78/แหล่งที่น่าเชื่อถือ",
  why:"แนวทาง RCOG Green-top Guideline No.42 (2012) และ ACOG Practice Bulletin (Shoulder dystocia) รวมทั้ง StatPearls: เมื่อพบ shoulder dystocia ให้<b>เรียกขอความช่วยเหลือ</b> (ไม่มีในช้อย) แล้ว <b>McRoberts maneuver เป็นท่าแรก (first-line)</b> — งอสะโพกแม่เข้าหาท้องเต็มที่ ทำให้ lumbosacral lordosis ตรงขึ้นและ symphysis หมุนขึ้นด้านบน ทำง่าย ไม่ invasive แก้ได้เองราว 40% และเมื่อทำร่วมกับ <b>suprapubic pressure</b> (ทำพร้อมกันหรือทำต่อทันที) แก้ได้ราว 50–60% ก่อนเลื่อนไป internal maneuver (Rubin II/ Woods screw) และ posterior arm delivery",
  wrong:[
    "B. Suprapubic pressure — เป็นท่าที่ทำ<b>ร่วม/ต่อจาก</b> McRoberts (Pressure ใน HELPERR มาหลัง Legs) ไม่ใช่ท่าแรกตามแนวทางสากล; flowchart ในชีท YUZU ใส่ไว้ก่อน จึงเป็นเหตุที่ทั้ง 2 เวอร์ชันตอบข้อนี้ — จะถูกถ้าโจทย์ถาม ‘ท่าที่ทำร่วมกับ McRoberts’ หรือ ‘ทำต่อเมื่อ McRoberts อย่างเดียวไม่สำเร็จ’",
    "C. Wood corkscrew maneuver — internal rotational maneuver (หมุนไหล่หลัง 180°) ใช้เมื่อ McRoberts + suprapubic pressure ไม่สำเร็จ",
    "D. Posterior shoulder delivery — การทำคลอดแขนหลัง มีอัตราสำเร็จสูงสุดในบรรดา maneuver แต่ invasive กว่า ใช้หลัง maneuver แรก ๆ ไม่สำเร็จ",
    "E. Rubin’s maneuver — Rubin I = suprapubic pressure ด้านหลังไหล่หน้า, Rubin II = ดันไหล่หน้าทางช่องคลอดให้ adduct — เป็น internal maneuver ลำดับถัดไป"],
  trap:"‘ขั้นแรกสุด’ ของ shoulder dystocia คือเรียกคนช่วย (ดู YUZU 16.5) แต่ถ้าช้อยไม่มี ให้ตอบ <b>McRoberts</b> — อย่าตาม flowchart ที่เอา suprapubic pressure ขึ้นก่อน และอย่าสับสนกับ <b>fundal pressure</b> (ห้ามทำ)",
  opinion:"ตอบ A (McRoberts) ตามแนวทาง RCOG/ACOG และให้ตรงกับ MDCU78 RoB 34 ความมั่นใจสูง — ไฟล์ YUZU ทั้ง 2 เวอร์ชันตอบ B ตาม flowchart ในชีท (ดูกล่องแดงด้านบน)",
  mnemonic:"HELPERR: Help → Evaluate episiotomy → <b>Legs (McRoberts)</b> → Pressure (suprapubic) → Enter (Rubin II / Woods) → Remove posterior arm → Roll (Gaskin)"},
"19.13":{
  ans:1,
  alert:"⚠ YUZU &amp; MDCU78 เฉลยไม่ตรง — ไฟล์ YUZU ทั้ง ver.1 และ ver.2 วงตอบ <b>C. 3–4 minute</b> แต่ MDCU78 RoC (Labor &amp; dystocia 11) ซึ่งผู้จดเขียนว่า ‘ตรง yuzu’ เฉลย <b>60–120 sec</b> · ข้อนี้ตอบตาม MDCU78 = <b>B. 30–120 second</b> (ผู้ใช้สั่ง) — <b>ยังไม่แน่ใจ</b>: ไม่พบตำรา/แนวทาง (รวม RTCOG) ที่ระบุตัวเลขนี้ตรง ๆ",
  flag:"⚠ ไม่แน่ใจ — YUZU ทั้ง 2 เวอร์ชันตอบ 3–4 นาที, MDCU78 RoC Labor &amp; dystocia 11 (‘ตรง yuzu’) ตอบ 60–120 วินาที; ตอบตาม MDCU78 ตามที่ผู้ใช้สั่ง; ไม่พบแหล่งอ้างอิงที่ให้ตัวเลขตรง",
  why:"ออกซิเจนสำรองในรก/ทารก (placental–fetal oxygen reserve) เพียงพอให้ทารกทนการหยุดไหลเวียนของเลือดใน intervillous space ได้ <b>ชั่วคราว</b> — ตัวเลขที่สอนกันในเนื้อหา CTG/สรีรวิทยารกในไทยคือราว <b>1–2 นาที (60–120 วินาที)</b> ซึ่งสอดคล้องกับที่ contraction ปกติ (หยุดการไหลราว 60–90 วินาที) ไม่ทำให้ทารกขาดออกซิเจน และเป็นเหตุผลที่ uterine contraction ที่นานเกิน 2 นาที (hypertonus) ทำให้ทารกเริ่มขาดออกซิเจน; ช้อย B (30–120 วินาที) ครอบช่วงนี้ — ตอบตามเฉลย MDCU78 ข้อเดียวกัน",
  wrong:[
    "A. &lt; 30 second — สั้นเกินไป; contraction ปกติหยุดการไหลนานกว่านี้โดยทารกยังปกติ",
    "C. 3–4 minute — คำตอบที่ผู้จด YUZU ทั้ง 2 เวอร์ชันวง; ยาวกว่าตัวเลขที่สอนกัน (ทารกเริ่มขาดออกซิเจนถ้าการไหลหยุดเกิน ~2 นาที) — ไม่พบแหล่งยืนยันตัวเลขนี้เช่นกัน",
    "D. 5–6 minute — ยาวเกินไป; ภาวะขาดเลือดไปรกนานขนาดนี้ทำให้ทารกเสี่ยง hypoxic injury",
    "E. 7–8 minute — ยาวเกินไปมาก"],
  trap:"ข้อสอบไทยใช้ตัวเลขเฉพาะที่สอนในคาบ (ไม่มีในตำราสากลตรง ๆ) — ไฟล์ YUZU กับ MDCU78 ให้ตัวเลขต่างกัน ดูกล่องแดง",
  summary:["Oxygen reserve ของรก/ทารกพอสำหรับการหยุดไหลเวียนชั่วคราวเท่านั้น — ตัวเลขที่สอน ~60–120 วินาที (MDCU78) ส่วนไฟล์ YUZU จด 3–4 นาที","Contraction ปกติหยุดการไหลเข้าช่อง intervillous ~60–90 วินาที แล้วไหลกลับมาเติม reserve ระหว่าง contraction","Hypertonus (contraction นาน &gt;2 นาที) หรือ tachysystole (&gt;5 ครั้ง/10 นาที) → reserve หมด → late deceleration/ fetal acidosis","Placental abruption: การไหลลดฉับพลัน → fetal distress เร็ว; FHR ผิดปกติ → คลอดด่วน (มักผ่าตัดคลอด)","Uteroplacental insufficiency → late deceleration; cord compression → variable; head compression → early","ดู MDCU78 RoC Labor &amp; dystocia 11 (ข้อเดียวกัน)"],
  mnemonic:"‘Reserve 1–2 นาที — หดรัดนานเกิน 2 นาทีเริ่มอันตราย’",
  opinion:"ตอบ B ตาม MDCU78 (ผู้ใช้สั่ง) ความมั่นใจต่ำ–ปานกลาง: ไม่พบแหล่งอ้างอิงที่ระบุตัวเลขตรง; ทั้งคีย์ YUZU (3–4 นาที) และ MDCU78 (60–120 วินาที) มาจากการสอน/ชีท"},
"10.1":{
  ans:1,
  alert:"⚠ YUZU &amp; MDCU78 เฉลยไม่ตรง — ไฟล์ YUZU ver.1 ตอบ <b>A. Vagina</b> (ver.2 ตอบ Endocervix) แต่ MDCU78 RoC (Gyn Leukorrhea &amp; STD 3) เฉลย <b>Endocervical canal</b> · ข้อนี้ตอบตาม MDCU78 = <b>B. Endocervix</b> (ผู้ใช้สั่ง) — <b>ยังไม่แน่ใจ</b>: CDC STI Treatment Guidelines 2021 ระบุว่า vaginal swab เป็น specimen ที่ดีที่สุด (optimal) สำหรับ NAAT ในผู้หญิง; ไม่พบแนวทาง RTCOG/ไทยที่ระบุตรง ๆ",
  flag:"⚠ ไม่แน่ใจ — ตอบ Endocervix ตาม MDCU78 และ ver.2 (ผู้ใช้สั่ง) แต่ CDC 2021 ให้ vaginal swab เป็น optimal specimen (ver.1 ตอบ Vagina)",
  why:"ตำราเดิมและการสอนในไทย: <b>Chlamydia trachomatis ติดเชื้อที่ columnar epithelium ของ endocervix</b> สิ่งส่งตรวจมาตรฐานในผู้หญิงจึงเป็น <b>endocervical swab</b> (เช็ดมูกออกก่อน แล้วสอด swab เข้า endocervical canal 1–2 ซม. หมุน 10–30 วินาที) ซึ่งเป็นคำตอบของ MDCU78 ข้อเดียวกัน — <b>แต่</b> เมื่อใช้ NAAT, CDC STI Treatment Guidelines 2021 ระบุว่า <b>vaginal swab (เก็บเองหรือแพทย์เก็บ) เป็น optimal specimen</b> ไวเท่าหรือดีกว่า endocervical swab; first-catch urine ไวน้อยกว่าเล็กน้อย",
  wrong:[
    "A. Vagina — คำตอบของ ver.1; ตาม CDC 2021 vaginal swab สำหรับ NAAT เป็น optimal specimen (ไวเท่าหรือดีกว่า endocervix) — ถ้าข้อสอบยึดแนวทาง CDC ปัจจุบันจะตอบข้อนี้ (ดูกล่องแดง)",
    "C. Anus — ใช้เฉพาะ extragenital testing ตามประวัติเพศสัมพันธ์ทางทวารหนัก ไม่ใช่ตำแหน่ง sensitivity สูงสุดสำหรับการติดเชื้อที่อวัยวะสืบพันธุ์หญิง",
    "D. Urethra — urethral swab ในหญิงไม่ใช้เป็นหลัก; ผู้ชายใช้ first-catch urine หรือ urethral swab",
    "E. Ureter — ไม่ใช่ตำแหน่งเก็บสิ่งส่งตรวจ"],
  trap:"‘เชื้ออยู่ที่ไหน’ (endocervix) กับ ‘เก็บที่ไหนไวที่สุดด้วย NAAT’ (vaginal swab ตาม CDC 2021) ให้คำตอบต่างกัน — เฉลยไทยรุ่นเก่า (MDCU78) ตอบ endocervix",
  mnemonic:"เชื้ออยู่ endocervix (columnar) — ข้อสอบไทยตอบ endocervix; CDC ใหม่: vaginal swab ดีที่สุดสำหรับ NAAT",
  opinion:"ตอบ B ตาม MDCU78 และ ver.2 (ผู้ใช้สั่ง) ความมั่นใจปานกลาง: ถ้าข้อสอบอิงแนวทาง CDC 2021 คำตอบคือ A (vagina) — ไม่พบแนวทาง RTCOG/ไทยที่ระบุตรง"}
})
