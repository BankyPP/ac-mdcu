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
  "+kimg":["qyz_42-4orig"],"+kcap":["รูปต้นฉบับในหนังสือ YUZU หน้า 93 (มีชื่อโครงสร้างพิมพ์กำกับ)"]}
})
