# ตัวพิมพ์ครบทั้งหน้า + รูปในสไลด์ + ลายมือ ของ L28 (ไฟล์ main ไม่มีลายมือ/ไฮไลต์)
PG={
4:("<b>Abdominal wall defect</b> · ป้าย <b>Omphalocele</b> · ป้าย <b>Gastroschisis</b>",
   "รูปซ้าย omphalocele: ถุงใสขนาดใหญ่ เห็นลำไส้และตับข้างใน ลูกศรชี้สายสะดือที่ฐานถุง · รูปขวา gastroschisis: ลำไส้แดงบวมอยู่นอกผนังท้องไม่มีถุง สายสะดือแยกอยู่ข้าง ๆ มีคำในรูป \"กระเพาะอาหาร\" ลูกศรชี้กระเพาะที่ออกมาด้วย"),
5:("<b>Abdominal wall defect</b> — ตาราง <b>Characteristics | Omphalocele | Gastroschisis</b>: <b>Herniated viscera | Bowel Liver | Bowel only</b> · <b>Sac | Present | Absent</b> · <b>Associated anomalies | Common (50%) | Uncommon (&lt;10%)</b> · <b>Location of defect | Umbilicus | Right of umbilicus</b> (หน้า 5–6 เผยตารางทีละแถว หน้า 7 ครบทั้งตาราง)",None),
6:("ตารางเดิมเพิ่มแถว <b>Mode of delivery | Vaginal/ cesarean | Vaginal</b> · <b>Surgical management | Nonurgent | Urgent</b>",None),
7:("ตารางเต็ม: <b>Herniated viscera | Bowel Liver | Bowel only · Sac | Present | Absent · Associated anomalies | Common (50%) | Uncommon (&lt;10%) · Location of defect | Umbilicus | Right of umbilicus · Mode of delivery | Vaginal/ cesarean | Vaginal · Surgical management | Nonurgent | Urgent · Prognostic factors | Associated anomalies (e.g. cardiac anomalies, chromosomal abnormalities) | Condition of bowel</b>",None),
8:("<b>Pathophysiology</b> · <b>Omphalocele: Failure of viscera to return to the abdominal cavity</b> · <b>Gastroschisis: Ventral body fold theory: failure of migration of the lateral folds (more on the right side)</b>",
   "รูป omphalocele ถุงใหญ่ (ลูกศรชี้สายสะดือ) · รูป gastroschisis ลำไส้แดงนอกท้อง มีคำในรูป \"กระเพาะอาหาร\""),
9:("<b>Prenatal diagnosis</b> · หัวข้อ <b>Omphalocele</b> · <b>Gastroschisis</b> (หน้านี้มีแต่รูป ข้อความอยู่หน้า 10)",
   "ภาพ USG ครรภ์: omphalocele 2 ภาพ (ก้อนมีเยื่อหุ้มหน้าท้องทารก) · gastroschisis 1 ภาพ (ขดลำไส้ลอยในน้ำคร่ำ)"),
10:("<b>Prenatal diagnosis</b> · <b>Omphalocele: • USG by GA 18 weeks • Increased maternal AFP • Multiple bowel loops (and on occasion liver) herniate into a membrane-covered defect (i.e. not free-flowing) with insertion of cord directly into omphalocele</b> · <b>Gastroschisis: • USG by GA 20 weeks or sooner • Increased maternal AFP • Bowel loops freely floating in the amniotic fluid and a defect in the abdominal wall to the right of a normal umbilical cord • IUGR</b>",
   "ภาพ USG เดียวกับหน้า 9"),
11:("<b>Initial management</b> · <b>• IV access and fluid resuscitation • OG decompression • Wrap bowel in warm saline-soaked gauze with non-evaporating wrap (plastic bag) • Empirical ATB • Thorough examinations to find out intestinal atresia/ associated anomalies</b>",None),
12:("<b>Surgical management</b> · <b>Gastroschisis: • Immediate closure/ primary repair • Silo assisted/delayed closure with serial reduction over a few days</b>",
   "ภาพวาดขั้นตอน primary repair + ภาพหลังปิดแผลที่สะดือ · ภาพ silo ลำไส้ในถุงพลาสติก ค่อย ๆ บีบลงจนปิดได้"),
13:("<b>Surgical management</b> · <b>Omphalocele: • Immediate closure/ primary repair • Staged Closure • Escharification (\"Paint and Wait\")</b>",
   "ภาพ primary repair 3 ขั้น · ภาพ giant omphalocele ที่ถุงกลายเป็นสะเก็ด (eschar) และภาพเด็กโตที่มี ventral hernia หลังรักษา"),
}
def notes(pages):
    out=[]
    for p in pages:
        t,img=PG[p]
        s=f"สไลด์หน้า {p} — ตัวพิมพ์: {t}"
        if img: s+=f"<br>รูปในสไลด์หน้า {p}: {img}"
        out.append(s)
    out.append("ลายมือ: ไม่มี (ไฟล์ L28 main ของปีนี้ไม่มีลายมือ/ไฮไลต์ · ไม่มีสัญลักษณ์คณะ)")
    return "<br>".join(out)
