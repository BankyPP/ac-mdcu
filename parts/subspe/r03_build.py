# Build R03 doc (Surgical instruments + Suture materials) for data_subspe/io.js — Round I/O, OSCE tab only
import json, sys
UPD = "2026-11-22"
REFS = {
 'SRC': ("R03 — Surgical instruments & Suture materials (รวม 5 ไฟล์ เป็นบทเดียว): A = R03 Surgical Tools & Suture (สรุป A3 8 หน้า: ไหม, เครื่องมือ, tube/drain, wound & ostomy, ฉีดยาชา, หัตถการ, operative note) · B = R03 Surgical instruments (แผ่นสรุป 3 หน้า) · C = R03 Surgical instruments 2025 (สไลด์ 49 หน้า, Kasaya Tantiphlachiva, M.D.) · D = R03 Suture Material 2025 (สไลด์ 26 หน้า) · E = R03 Suture Materials 2026 (สไลด์ 48 หน้า, รศ.พญ.กษยา ตันติผลาชีวะ ภาควิชาศัลยศาสตร์ จุฬาฯ) · pN = หน้า · sN = สไลด์", None),
 'ETH': ("Ethicon (Johnson & Johnson MedTech). Wound Closure Manual และเอกสารกำกับ (IFU) ของ Surgical Gut, VICRYL / VICRYL RAPIDE / VICRYL Plus, MONOCRYL, PDS II, PROLENE, ETHILON, ETHIBOND EXCEL, PERMA-HAND silk — ค่าความแข็งแรงคงเหลือ (BSR) และเวลาดูดซึม", None),
 'BBR': ("B. Braun (Aesculap). Monomax® (poly-4-hydroxybutyrate) product information — คงแรง 50% ที่ราว 90 วัน (USP 0–1: 90–210 วัน), ดูดซึมหมดราว 13 เดือนถึง > 36 เดือน", "https://catalogs.bbraun.com/en-01/p/PRID00005402"),
 'MDT': ("Medtronic (Covidien). Maxon™ (polyglyconate), Polysorb™, V-Loc™ product information", None),
 'EHS': ("Deerenberg EB, et al. Updated guideline for closure of abdominal wall incisions from the European and American Hernia Societies. Br J Surg 2022;109:1239–1250", "https://doi.org/10.1093/bjs/znac302"),
 'WHOSSI': ("World Health Organization. Global guidelines for the prevention of surgical site infection, 2nd ed. Geneva: WHO; 2018", "https://www.who.int/publications/i/item/9789241550475"),
 'WHOHH': ("World Health Organization. WHO Guidelines on Hand Hygiene in Health Care (2009) — Part I.13 Surgical hand preparation", "https://www.who.int/publications/i/item/9789241597906"),
 'LIDO': ("Xylocaine® (lidocaine HCl) และ Xylocaine® with epinephrine — US prescribing information (FDA label): ไม่มี epinephrine ≤ 4.5 mg/kg (ไม่เกิน 300 mg) · มี epinephrine ≤ 7 mg/kg (ไม่เกิน 500 mg)", None),
 'COCH': ("Prabhakar H, et al. Adrenaline with lidocaine for digital nerve blocks. Cochrane Database Syst Rev 2015;(3):CD010645", "https://pmc.ncbi.nlm.nih.gov/articles/PMC7173752"),
 'AAFP': ("Latham JL, Martin SN. Infiltrative anesthesia in office practice. Am Fam Physician 2014;89:956–962", "https://www.aafp.org/pubs/afp/issues/2014/0615/p956.html"),
 'ASPEN': ("Boullata JI, et al. ASPEN Safe Practices for Enteral Nutrition Therapy. JPEN J Parenter Enteral Nutr 2017;41:15–103", "https://doi.org/10.1177/0148607116673053"),
 'CAUTI': ("Gould CV, et al. Guideline for Prevention of Catheter-Associated Urinary Tract Infections 2009. CDC/HICPAC (updated 2019)", "https://www.cdc.gov/infection-control/hcp/cauti/"),
 'BTS': ("Roberts ME, et al. British Thoracic Society Guideline for pleural disease. Thorax 2023;78(Suppl 3):s1–s42", "https://doi.org/10.1136/thorax-2022-219784"),
 'AFPLAC': ("Forsch RT, Little SH, Williams C. Laceration Repair: A Practical Approach. Am Fam Physician 2017;95:628–636 — ตารางเวลาตัดไหมตามตำแหน่ง", "https://www.aafp.org/pubs/afp/issues/2017/0515/p628.html"),
 'USP': ("United States Pharmacopeia (USP) ⟨861⟩ Sutures—Diameter และ ⟨881⟩ Tensile Strength — ระบบขนาดไหม USP / metric", None),
}
class Pg:
    def __init__(s, pid, title, topics):
        s.d = {"id": pid, "title": title, "topics": topics, "rev": 1, "upd": UPD, "html": "", "refs": []}
        s.keys = []
    def R(s, k):
        if k not in s.keys:
            s.keys.append(k); t, u = REFS[k]; r = {"t": t}
            if u: r["u"] = u
            s.d["refs"].append(r)
        return "{{R:%d}}" % (s.keys.index(k) + 1)
    def add(s, h): s.d["html"] += h
PAGES = []
def P(pid, title, topics):
    p = Pg(pid, title, topics); PAGES.append(p); p.R('SRC'); return p
X = '<span class="chip g">📖 อธิบาย</span>'
GL = '<span class="chip gl">📘 Guideline</span>'
D = '<span class="warn">! ต่าง</span>'
S = '<span class="chip s">ซ้ำ</span>'
def ref(t): return '<span class="ref">%s</span>' % t
def fig(k, cap=''): return '<div class="fig">{{IMG:subr03_%s}}%s</div>' % (k, ('<div class="cap">%s</div>' % cap) if cap else '')
def glsec(src, items): return '<div class="glsec"><div class="glh">📘 Guideline <span class="glsrc">%s</span></div><ul>%s</ul></div>' % (src, ''.join('<li>%s %s</li>' % (GL, i) for i in items))
def box(h, body, cls='box'): return '<div class="%s"><h3>%s</h3>%s</div>' % (cls, h, body)
def tbl(head, rows): return '<table class="fx"><tr>%s</tr>%s</table>' % (''.join('<th>%s</th>' % x for x in head), ''.join('<tr>%s</tr>' % ''.join('<td>%s</td>' % c for c in r) for r in rows))
def ul(items): return '<ul>%s</ul>' % ''.join('<li>%s</li>' % i for i in items)

# ---------------------------------------------------------------- R03-0
p = P("R03-0", "ภาพรวม R03 + สรุปทั้งบท (ไหม + เครื่องมือ) + จุดที่ไฟล์ไม่ตรงกัน", ["Suture materials", "Instruments & devices", "Procedure"])
p.add('<div class="iointro">R03 รวม <b>5 ไฟล์</b> เป็นบทเดียว {R} — <b>A</b> สรุป A3 8 หน้า (ไหม 6 ตัว, เครื่องมือ, tube/drain, wound/ostomy, ยาชา, หัตถการ, op note) · <b>B</b> แผ่นสรุปเครื่องมือ 3 หน้า · <b>C</b> สไลด์ Surgical Instruments 2025 · <b>D</b> สไลด์ Suture Material 2025 · <b>E</b> สไลด์ Suture Materials 2026 (อ.กษยา — C, E อาจารย์ท่านเดียวกัน) · ไฟล์ไหนขัดกัน: เชื่อ<b>ตำรา/guideline/เอกสารผู้ผลิต</b>ก่อน แล้วจึงสไลด์ปีล่าสุด (E 2026 &gt; D 2025) · สถานี OSCE แบบนี้ให้รูป → ตอบ <b>ชื่อ + ใช้ทำอะไร</b> (ไหม: + ชนิด natural/synthetic · mono/multi · absorbable)</div>'.replace('{R}', p.R('SRC')))
p.add(box('หน้าในบทนี้', tbl(['หน้า', 'เนื้อหา'], [
 ['R03-U1', 'ไหม: พื้นฐาน 3 แกน (absorbable? mono/multi? natural/synthetic?) อธิบายละเอียด + ไหม 6 ตัวหลักของไฟล์ A + ตารางจัดชนิดฉบับแก้แล้ว'],
 ['R03-U2', 'ไหมรายตัว + ตาราง tensile strength / absorption (เทียบ D, E, ผู้ผลิต) + Vicryl Plus/Rapide, barbed, mesh, graft, steel, clip, stapler'],
 ['R03-U3', 'ขนาดไหม USP · อ่านซองไหม · เข็ม (รูปร่าง ปลาย ตัว ก้น) · ขนาดไหมตามบริเวณ · เวลาตัดไหม'],
 ['R03-U4', 'เทคนิคเย็บ (simple, mattress, half-buried, subcuticular, continuous, locked, retention) + ปิดหน้าท้องตาม guideline'],
 ['R03-T1', 'Forceps & clamps + needle holder'],
 ['R03-T2', 'Scissors · scalpel/blade · retractors (hand-held, self-retaining) · suction tips'],
 ['R03-T3', 'Staplers & clips · energy device · laparoscopic instruments · อื่น ๆ (leukostrip, staple, hemoclip, proctoscope, graft)'],
 ['R03-T4', 'Tubes, drains, lines + วัสดุทำแผล + อุปกรณ์ ostomy'],
 ['R03-P1', 'ฉีดยาชา · ล้างมือ · ใส่ถุงมือ · ใส่ NG · ใส่ Foley · operation note (open appendectomy)'],
])))
p.add(box('สรุปทั้งบท — ไหม (ตอบในสอบ) ★', tbl(['ไหม', 'ชนิด', 'ใช้ (ไฟล์ A + E)'], [
 ['<b>Nylon</b> (polyamide; Ethilon, Dermalon, Dafilon)', 'synthetic · mono · non-abs.', '<b>skin</b> (nylon 3-0 เย็บ skin) · เย็บ drain ติดผิวหนัง · tendon'],
 ['<b>Prolene</b> (polypropylene)', 'synthetic · mono · non-abs.', '<b>vessels</b> (anastomosis, radial a.) · mesh (hernia) · skin/subcuticular'],
 ['<b>PDS</b> (polydioxanone)', 'synthetic · mono · abs. (นาน)', 'visceral organ · <b>sheath/fascia</b> (ปิดหน้าท้อง)'],
 ['<b>Vicryl</b> (polyglactin 910)', 'synthetic · multi (braided) · abs.', '<b>subcutaneous</b>, fat, breast, fascia, muscle · ห้ามเย็บ tendon (tendon heal ช้า ไหมหายก่อน)'],
 ['<b>Silk</b>', 'natural · multi · non-abs.', '<b>ผูก vessel</b> (vein หลัง clamp) · เย็บ drain (ICD, Penrose) · mark specimen (สีดำเห็นง่าย) · ผูก appendiceal stump'],
 ['<b>Chromic catgut</b>', 'natural · multi (twisted) · abs. (เร็ว)', 'perineum · hemorrhoid · peritoneum · appendectomy · ไม่อยากให้มี foreign body นาน'],
]) + '<p>' + X + ' จำแบบไฟล์ A: <b>ไหมละลายสีม่วง/น้ำตาล · ไหมไม่ละลายสีดำ/ฟ้า</b> (มีข้อยกเว้น ดู R03-U1) · <b>mono = ลื่น ผูกไม่แน่น แต่ติดเชื้อ/รั่วยาก · multi = หยาบ ผูกแน่น แต่ติดเชื้อ/รั่วง่าย</b></p>'))
p.add(box('สรุปทั้งบท — เครื่องมือ (ดูรูปแล้วนึกออก)', tbl(['กลุ่ม', 'ชื่อ → จุดสังเกต → ใช้'], [
 ['Forceps (คีบ)', '<b>Tooth</b> (มีเขี้ยว 1×2) → skin/tissue เหนียว · <b>Adson</b> สั้น ปลายเล็ก → skin หน้า/งานละเอียด · <b>DeBakey</b> ยาว ร่องตามยาว atraumatic → vessel, bowel'],
 ['Clamps จับเนื้อ', '<b>Allis</b> ปลายมีฟันเล็กเรียงแถว (traumatic) → fascia, เนื้อที่จะตัดทิ้ง (breast, lipoma) · <b>Babcock</b> ปลายโค้งเป็นห่วง atraumatic → ท่อ: appendix, bowel, fallopian tube, vas · <b>Kocher</b> ปลายมีเขี้ยว 1×2 → fascia/เนื้อเหนียว, thyroid · <b>Sponge holder</b> ปลายวงรี → ทาน้ำยา (paint), จับ gauze ซับเลือด · <b>Towel clamp</b> (Backhaus) ปลายแหลมโค้ง → หนีบผ้า'],
 ['Hemostats', '<b>Mosquito</b> &lt; <b>Crile</b> &lt; <b>Kelly</b> &lt; <b>Rochester</b> (ใหญ่ขึ้นเรื่อย ๆ) · Crile ร่องฟันตลอดปาก / Kelly ร่องฟันครึ่งปลาย · <b>Tonsil (Schnidt)</b> ด้ามยาว ปลายโค้ง → vessel ลึก · <b>Right angle (Mixter)</b> ปลายหักฉาก → เลาะรอบ/คล้องไหมหลัง vessel, duct'],
 ['Scissors', '<b>Mayo</b> ปากหนา → ของหนา (fascia, tendon, muscle) · Mayo ตรง = ตัดไหม · <b>Metzenbaum</b> ปากบาง ด้ามยาว → ของบาง (bowel, vessel, adhesion) "baum บอบบาง"'],
 ['Retractors', '<b>Senn</b> 2 หัว (ส้อม 3 ซี่/ใบพับ) → แผลเล็ก · <b>Army-Navy</b> 2 หัวแบน → skin/subcut · <b>Langenbeck</b> ใบฉากด้ามยาว · <b>Richardson</b> ใบฉากใหญ่ → ผนังหน้าท้อง · <b>Deaver</b> โค้งรูปเคียว → อวัยวะลึก · <b>Malleable</b> ดัดได้ → กันลำไส้ตอนเย็บปิด · self-retaining: <b>Weitlaner</b> (คราด), <b>Gelpi</b> (ปลายแหลมข้างละ 1), <b>Balfour</b> (หน้าท้อง)'],
 ['Suction', '<b>Poole</b> ปลอกนอกมีรูพรุน → ดูดของเหลวมากในช่องท้อง · <b>Yankauer</b> ปลายกลมหัวโป่ง → ดูดผิว/ช่องปาก · <b>Frazier</b> เล็ก งอ มีรูนิ้วโป้งคุมแรงดูด → ที่แคบ (neuro, ENT)'],
 ['Scalpel', 'handle #3 ใส่ใบ 10–15 · <b>#10</b> แผลใหญ่ (laparotomy) · <b>#11</b> ปลายแหลม → stab/puncture (I&amp;D) · <b>#15</b> เล็ก → แผลละเอียด'],
])))
p.add(box('จุดที่ไฟล์ไม่ตรงกัน / ! ต่าง (รวมทั้งบท)', ul([
 D + ' <b>D s3</b> ตาราง classification: ใส่ <b>Maxon เป็น multifilament</b> (จริง = monofilament) · ใส่ <b>Nylon เป็น multifilament</b> (Ethilon = monofilament; มี braided nylon แต่ไม่ใช่ตัวหลัก) · ใส่ <b>Prolene 2 ช่อง</b> (mono และ multi) — polypropylene เป็น <b>monofilament</b> เท่านั้น → ใช้ตาราง E s4 / A แทน ' + p.R('ETH'),
 D + ' <b>E s4, s21</b> เขียน "Polyethylene (Prolene)" — Prolene = <b>polypropylene</b> (A, D ถูก)',
 D + ' <b>B p2</b> ตาราง suture types ใส่ <b>chromic gut ในช่อง monofilament</b> — A, D, E จัดเป็น multifilament (twisted) → ตอบ <b>multifilament</b> ตามสไลด์คณะ (gut เป็นเส้นบิดเกลียวจาก collagen บางตำราเรียก twisted/monofilament-like)',
 D + ' ค่า tensile strength/absorption ใน <b>D s16 กับ E s16 ไม่เท่ากัน</b> (เช่น plain catgut, Vicryl, PDS) → ตารางเทียบ + ค่าผู้ผลิตอยู่ R03-U2',
 D + ' <b>A</b>: Vicryl ใช้ปิด <b>fascia</b> — guideline EHS/AHS 2022 ให้ปิด midline laparotomy ด้วย <b>slowly absorbable</b> (เช่น PDS) แบบ continuous small bites ' + p.R('EHS') + ' (R03-U4)',
 D + ' <b>A</b>: Thompson retractor "เปิดช่องอก" — Thompson เป็นโครงยึดขอบเตียงใช้กับ<b>ช่องท้อง</b> (B วาดเป็นช่องท้อง) · เปิดช่องอกใช้ rib spreader (Finochietto)',
 D + ' <b>A</b>: electrocautery "ligate tissue" — หน้าที่จริงคือ <b>ตัด (cut) และห้ามเลือด (coagulate)</b> (B ถูก)',
 D + ' <b>A</b>: Kocher "หนีบ vessels เพื่อห้ามเลือด" — Kocher มีเขี้ยว (traumatic) ใช้กับ<b>เนื้อเหนียว/เนื้อที่จะตัดทิ้ง</b> (B) ไม่ใช้หนีบ vessel ที่ต้องเก็บไว้',
 D + ' <b>A</b>: ยาชา lidocaine ไม่มี adrenaline 5 mg/kg — ฉลากยา = <b>4.5 mg/kg (≤ 300 mg)</b> · มี adrenaline 7 mg/kg (≤ 500 mg) ' + p.R('LIDO') + ' · ห้ามใช้ adrenaline ที่นิ้ว/penis — หลักฐานปัจจุบันว่าปลอดภัย แต่ในสอบตอบตามไฟล์ (R03-P1)',
 D + ' <b>A</b>: ยืนยันตำแหน่ง NG ด้วยการฟังเสียงลม — guideline ให้ใช้ <b>X-ray / pH ≤ 5.5</b> ไม่ใช้ auscultation ' + p.R('ASPEN') + ' · Foley: A ใส่ <b>NSS</b> ใน balloon — ผู้ผลิตแนะนำ <b>sterile water</b> (R03-P1)',
])))
p.add(box('📘 Guideline / มาตรฐานที่ใช้ในบทนี้', tbl(['เรื่อง', 'แหล่ง (ล่าสุด)', 'ประเด็นออกสอบ'], [
 ['ปิดแผลหน้าท้อง', 'EHS/AHS 2022 ' + p.R('EHS'), 'continuous small bites + slowly absorbable suture · พิจารณา prophylactic mesh ในคนเสี่ยงสูง'],
 ['ไหมเคลือบ triclosan', 'WHO SSI 2018 ' + p.R('WHOSSI'), 'แนะนำใช้ triclosan-coated suture (เช่น Vicryl Plus) ทุกชนิดผ่าตัด (conditional)'],
 ['ล้างมือผ่าตัด', 'WHO Hand Hygiene 2009 ' + p.R('WHOHH'), 'scrub ด้วยสบู่ antiseptic หรือ alcohol hand rub ตามเวลาที่ผู้ผลิตกำหนด (ทั่วไป 2–5 นาที)'],
 ['ยาชา', 'FDA label lidocaine ' + p.R('LIDO'), '4.5 mg/kg (≤300) · 7 mg/kg with epi (≤500)'],
 ['NG tube', 'ASPEN 2017 ' + p.R('ASPEN'), 'X-ray ยืนยันก่อนให้อาหารครั้งแรก · ไม่ใช้ฟังเสียง'],
 ['Foley', 'CDC/HICPAC CAUTI ' + p.R('CAUTI'), 'มีข้อบ่งชี้เท่านั้น · aseptic · closed drainage · ถุงต่ำกว่า bladder'],
 ['Chest drain', 'BTS 2023 ' + p.R('BTS'), 'ใส่ใน safe triangle · ต่อ underwater seal'],
])))

# ---------------------------------------------------------------- R03-U1
p = P("R03-U1", "Suture 1 · พื้นฐาน: absorbable vs non-absorbable · mono vs multifilament · natural vs synthetic + ไหม 6 ตัวของไฟล์ A", ["Suture materials"])
p.add('<div class="iointro">จัดชนิดไหมด้วย <b>3 แกน</b> (E s3–4): 1) วัสดุ natural/biologic vs synthetic 2) โครงสร้าง monofilament vs multifilament (braided/twisted) 3) absorbable vs non-absorbable · สถานีไหม OSCE: ให้ซอง/เส้นไหม → บอกชื่อ + 3 แกน + ใช้เย็บอะไร {R}</div>'.replace('{R}', p.R('SRC')))
p.add(box('ไหม 6 ตัวหลัก (ไฟล์ A — ตารางพร้อมรูปซอง) ' + ref('A p1'), fig('f1sut1', 'Nylon · Prolene · PDS') + fig('f1sut2', 'Vicryl · Silk · Chromic catgut (ตัวจางในไฟล์ = ใช้น้อย: Prolene–skin, catgut–visceral organ)') +
 tbl(['ไหม', 'natural/synthetic', 'filament', 'absorbability', 'หลักเลือก (A)', 'ใช้'], [
 ['nylon (polyamide)', 'synthetic', 'mono', 'non-abs.', 'อยากได้แน่นระดับหนึ่ง ไม่อยากให้รั่ว', 'skin (<b class="imp">nylon 3-0 ใช้เย็บ skin</b>) · attach Redivac drain to skin · tendon'],
 ['prolene (polypropylene)', 'synthetic', 'mono', 'non-abs.', 'อยากได้แน่นกว่า nylon ไม่อยากให้รั่ว', 'mesh · vessels · <span class="hw">skin (จาง)</span>'],
 ['polydioxanone (PDS)', 'synthetic', 'mono', 'abs.', 'ไม่อยากให้รั่ว', 'visceral organ · sheath'],
 ['vicryl (polyglactin)', 'synthetic', 'multi', 'abs.', 'เย็บอะไรก็ได้ที่ heal ตัวเองได้ เพราะไหมจะหาย', 'fat, subcutaneous tissue, breast · fascia · hernia · muscle · <b class="imp">เย็บ tendon ไม่ได้ เพราะ tendon ไม่มี healing</b>'],
 ['silk', 'natural', 'multi', 'non-abs.', 'อยากได้ความแน่นมาก ๆ ไม่กังวลเรื่องรั่ว', 'drain: chest drain, ICD, Penrose · vessels (vein หลัง clamp เพื่อห้ามเลือด) · specimen mark site (สีดำ เห็นง่าย)'],
 ['chromic catgut', 'natural', 'multi', 'abs.', 'ละลายเร็วกว่า vicryl ไม่อยากได้ foreign body', 'perineum · hemorrhoidal tissue · appendicitis · <span class="hw">visceral organ (จาง)</span>'],
 ]) + '<p>' + X + ' "tendon ไม่มี healing" ในไฟล์ หมายถึง tendon หายช้ามาก (คงแรงต่ำนานหลายสัปดาห์) ไหมที่ละลายเร็วอย่าง Vicryl จึงหมดแรงก่อน tendon ติด → ใช้ไหม non-absorbable (เช่น nylon, polypropylene, braided polyester) ' + p.R('ETH') + '</p>'))
p.add(box('แกนที่ 1 · Absorbable vs Non-absorbable คืออะไร ' + ref('E s5–6'),
 '<p>' + X + ' <b>Absorbable</b> = ไหมที่ร่างกายย่อยสลายได้เอง และ<b>สูญเสียแรงดึงส่วนใหญ่ภายใน ~60 วัน</b> · <b>Non-absorbable</b> = คงแรงดึงนานกว่า 60 วัน (ส่วนใหญ่ถาวร) ร่างกายเอาไปไม่ได้ → ถ้าอยู่ที่ผิวต้องตัดออก ถ้าฝังในต้องอยู่ถาวร (ถูกพังผืดหุ้ม) ' + p.R('ETH') + '</p>' +
 tbl(['', 'Absorbable', 'Non-absorbable'], [
  ['หลักการ (E s5)', 'ค้ำแผลชั่วคราว → หายเองไม่ต้องตัดไหม', 'ค้ำแผลนาน ในที่ที่ healing ช้า/ไม่ดี'],
  ['กลไกสลาย (E s6)', '<b>natural (catgut) = enzyme proteolysis</b> + phagocytosis → อักเสบมาก เวลาไม่แน่นอน · <b>synthetic = hydrolysis</b> (น้ำแทรกเข้าสายพอลิเมอร์) → อักเสบน้อย เวลาคาดเดาได้', 'ไม่สลาย (silk สลายช้ามากในหลายปี, nylon ค่อย ๆ เสื่อม ~15–20%/ปี)'],
  ['เลือกใช้', 'เนื้อที่หายเร็ว/ฝังลึกตัดไม่ได้: subcut, mucosa, bowel, peritoneum, perineum, ผิวหนังเด็ก/ที่ไม่อยากตัดไหม (subcuticular)', 'ต้องการแรงยาว: vascular anastomosis, tendon, hernia (mesh), sternum (steel), ผูก vessel ใหญ่, skin ที่จะตัดไหมออก'],
  ['ข้อเสีย', 'แรงหมดก่อนแผลแข็งแรงถ้าเลือกตัวที่เร็วเกินไป (เช่น Vicryl ปิด fascia)', 'ฝังใต้ผิว → stitch sinus/granuloma (โดยเฉพาะ braided เช่น silk) · ผิวหนังต้องนัดตัดไหม'],
 ]) +
 '<p>' + X + ' ต้องแยก <b>tensile strength retention</b> (ไหมยังรับแรงได้กี่ %) ออกจาก <b>absorption time</b> (เนื้อไหมหายหมดเมื่อไร) — เช่น Vicryl คงแรง ~50% ที่ 3 สัปดาห์ แต่เนื้อไหมหายหมด 56–70 วัน · สิ่งที่ "ค้ำแผล" คือ tensile strength ไม่ใช่เวลาหายของเนื้อไหม ' + p.R('ETH') + '</p>'))
p.add(box('แกนที่ 2 · Monofilament vs Multifilament ต่างกันยังไง ' + ref('E s5 · A p1'),
 fig('f2needle', 'B p2: ตาราง suture types — braided vs monofilament และภาพขยายเส้น (ซ้าย braided, ขวา mono)') +
 tbl(['', 'Monofilament (เส้นเดี่ยว)', 'Multifilament (หลายเส้นถัก braided / บิด twisted)'], [
  ['โครงสร้าง', 'เส้นเดียวเรียบ ไม่มีช่องว่างในเส้น', 'เส้นเล็กหลายเส้นถักกัน มีซอกระหว่างเส้น (มักเคลือบ coating ให้ลื่นขึ้น)'],
  ['ติดเชื้อ', '<b>น้อย</b> — ไม่มีซอกให้เชื้ออยู่ (less lodging of microorganism)', '<b>มากกว่า</b> — เชื้อซ่อนในซอก + capillarity (ดูดของเหลว/เชื้อเข้าตามเส้น) → ไม่ใช้ในแผลติดเชื้อ'],
  ['ผ่านเนื้อ (tissue drag)', 'ลื่น ผ่านง่าย บาดเนื้อน้อย (easier passage)', 'หยาบ มีแรงเสียด "เลื่อยเนื้อ" ได้'],
  ['ผูกปม (knot security)', '<b>ปมหลุดง่าย</b> + เส้นมีความจำรูป (memory) แข็ง → ต้องผูกหลายรอบ (มัก 5–6 throws)', '<b>ปมแน่น</b> จับง่าย นิ่ม → ผูก 3–4 throws ก็พอ'],
  ['แรงดึง', 'น้อยกว่าเล็กน้อยที่ขนาดเท่ากัน · ถ้าโดน needle holder หนีบ/บิดจะเป็นจุดอ่อน ขาดง่าย', '<b>แรงดึงสูงกว่า</b> จับ/ผูกง่าย (greater tensile strength, easy to handle and tie)'],
  ['อื่น ๆ (E s5)', '—', 'ทำให้เกิด tissue reaction ระหว่างถูกย่อยมากกว่า'],
  ['ตัวอย่าง', 'nylon, Prolene, PDS, Monocryl, Maxon, Monosyn, Monomax, steel (mono)', 'silk, Vicryl, Dexon, Polysorb, Ethibond/Dacron (braided) · catgut (twisted)'],
 ]) +
 '<p>' + X + ' ไฟล์ A สรุปว่า "monofilament ลื่น เย็บได้ไม่แน่นแต่รั่วยาก · multifilament หยาบ เย็บได้แน่นแต่รั่วง่าย" — คำว่า <b>"รั่ว"</b> ตรงนี้หมายถึง <b>เชื้อ/ของเหลวซึมผ่านตามเส้นไหม (wicking)</b> และรอยเย็บที่ไม่ติดแน่นในอวัยวะกลวง/หลอดเลือด จึงใช้ mono กับ vessel, bowel anastomosis, fascia ที่ไม่อยากให้ติดเชื้อ และใช้ multi กับงานที่ต้องการปมแน่น เช่น ผูก vessel, เย็บ drain</p>'))
p.add(box('แกนที่ 3 · Natural (biologic) vs Synthetic ' + ref('E s2–5 · D s3'),
 ul(['<b>Natural</b>: catgut (collagen จาก submucosa ลำไส้แกะ/serosa ลำไส้วัว), silk (ใยไหมจากตัวไหม), linen, (stainless steel wire ไฟล์ D จัดไว้ในกลุ่ม biologic multifilament — จริง ๆ เป็นโลหะ ใช้ทั้ง mono/twisted) → <b>tissue reaction/allergy, inflammation มากกว่า</b> (E s5) · ดูดซึมไม่แน่นอน',
     '<b>Synthetic</b>: พอลิเมอร์สังเคราะห์ (polyglactin, polyglycolic acid, polydioxanone, poliglecaprone, polyglyconate, poly-4-hydroxybutyrate, polyamide, polypropylene, polyester, polybutester) → reaction น้อย สลายด้วย hydrolysis คาดเดาได้',
     X + ' catgut เลิกใช้ในยุโรป (ตั้งแต่ 2001 จากความกังวลเรื่องโรควัวบ้า) และญี่ปุ่น · ไทยยังใช้ chromic catgut อยู่ (perineum, hemorrhoid, peritoneum) จึงยังออกสอบ',
     X + ' <b>Plain catgut</b> = ไม่เคลือบ ละลายเร็ว · <b>Chromic catgut</b> = ชุบเกลือโครเมียม → ต้านเอนไซม์ ละลายช้าลง และ reaction น้อยลง'
 ]) + '<p><b>ประวัติ (E s2)</b>: 3000 BC – กลาง 1800s ใช้ของจากสัตว์ (ขากรรไกรมด/ด้วง, ขน, เอ็น, ลำไส้, หลอดเลือด, เส้นประสาท, ขนแกะ, silk) พืช (fiber, hemp, twine, cotton, linen) และโลหะ (เงิน ทอง ทองแดง อะลูมิเนียม ทองเหลือง เหล็ก บรอนซ์)</p>'))
p.add(box('ตารางจัดชนิดไหม (รวม D s3 + E s4 — แก้จุดผิดแล้ว) ★', fig('s5class', 'E s4 ตารางจัดชนิด + E s5 เปรียบเทียบ') + fig('s4class', 'D s3 (มีจุดผิด: Maxon/Nylon อยู่ช่อง multi, Prolene ซ้ำ 2 ช่อง)') +
 tbl(['วัสดุ', 'ดูดซึม', 'Multifilament', 'Monofilament'], [
  ['Natural', 'Absorbable', 'Plain catgut, Chromic catgut', '—'],
  ['Natural', 'Non-absorbable', 'Silk, Linen', '—'],
  ['Synthetic', 'Absorbable', 'Polyglactin 910 (<b>Vicryl</b>, Polysorb*), Polyglycolic acid (<b>Dexon</b>, Safil)', 'Polydioxanone (<b>PDS</b>, MonoPlus), Polyglyconate (<b>Maxon</b>), Glyconate (Monosyn), Poliglecaprone 25 (<b>Monocryl</b>), Poly-4-hydroxybutyrate (<b>Monomax</b>)'],
  ['Synthetic', 'Non-absorbable', 'Polyester (<b>Ethibond</b>, Dacron, Mersilene)', 'Polyamide (<b>Nylon</b>: Ethilon, Dermalon), Polypropylene (<b>Prolene</b>, Surgipro), Polybutester (Novafil), Stainless steel'],
 ]) + '<p>* Polysorb = glycolide/lactide copolymer (ใกล้เคียง Vicryl) · ' + D + ' D s3 ใส่ Maxon, Nylon เป็น multi และ Prolene ซ้ำทั้ง mono/multi · E s4/s21 เขียน Prolene เป็น polyethylene (ถูกคือ polypropylene) ' + p.R('ETH') + p.R('MDT') + '</p>'))
p.add(box('สีไหม (กฎจำของไฟล์ A) ' + ref('A p1'),
 '<p>"ไหมละลายจะมีสี<b>ม่วงหรือน้ำตาล</b> ไหมไม่ละลายจะมีสี<b>ดำหรือฟ้า</b>"</p><p>' + X + ' ใช้ได้กับตัวหลัก: Vicryl/PDS/Monocryl (violet) · catgut (น้ำตาล–เหลือง) · silk/nylon Ethilon (ดำ) · Prolene/Dermalon (ฟ้า) · <b>ข้อยกเว้น</b>: Vicryl/Monocryl/PDS มีแบบ <b>undyed (ขาว/ใส)</b> · Ethibond = <b>เขียว</b> · Maxon = เขียว · Mersilene ขาว/เขียว → ในสอบดูชื่อบนซองประกอบเสมอ ' + p.R('ETH') + '</p>' + fig('s5absorb', 'E s7–14: สีเส้นไหมชนิดต่าง ๆ และซองไหม absorbable')))

# ---------------------------------------------------------------- R03-U2
p = P("R03-U2", "Suture 2 · ไหมรายตัว + tensile strength / absorption (เทียบ D, E, ผู้ผลิต) + Vicryl Plus/Rapide, barbed, mesh, graft, steel, clip, stapler", ["Suture materials", "Instruments & devices"])
p.add('<div class="iointro">E แยกเป็น Absorbable (s8–16) และ Non-absorbable (s17–22) + Mesh & Graft, steel, clip, stapler, tape (s23–29) · สไลด์หลายหน้าเขียน "…is used for ……" ให้เติมเอง → เติมจากไฟล์ A และตำรา/เอกสารผู้ผลิต {R}</div>'.replace('{R}', p.R('SRC')))
p.add(box('Absorbable ทีละตัว ' + ref('E s9–15 · D s4–7'), fig('s4pack1', 'D s4–9: ซอง chromic/plain catgut, Vicryl, Dexon, PDS, Monocryl, Monomax, silk, Ethilon') +
 tbl(['ไหม', 'ชนิด', 'จุดเด่น / ใช้ (… is used for)'], [
  ['<b>Plain catgut</b>', 'natural · twisted · เร็วมาก', X + ' mucosa ในปาก, ผิวหนังเด็ก/ใบหน้าบางกรณี, ผูกเส้นเลือดเล็กผิวตื้น · ซองสีเหลือง'],
  ['<b>Chromic catgut</b>', 'natural · twisted · เร็ว', 'perineum (episiotomy), hemorrhoid, peritoneum, appendix stump/mesoappendix (A) · ' + X + ' urinary/biliary mucosa เพราะไม่เป็นนิ่วเกาะนาน'],
  ['<b>Vicryl</b> (polyglactin 910)', 'synthetic · braided · กลาง', 'subcut, fascia ชั้นตื้น, muscle, bowel (ชั้นใน/ 2 ชั้น), ligate · B: <b>internal anastomosis</b> · ' + X + ' ม่วงหรือ undyed'],
  ['<b>Vicryl Plus</b>', 'Vicryl + <b>triclosan</b>', 'ไหมต้านเชื้อ ลด SSI (E s11) — 📘 ดูท้ายกล่อง'],
  ['<b>Vicryl Rapide</b>', 'polyglactin ฉายรังสี · เร็ว', 'E s11 · ' + X + ' คงแรง ~50% ที่ 5 วัน หมดแรง 10–14 วัน ดูดซึม 42 วัน → ผิวหนัง/mucosa ที่ไม่อยากตัดไหม (หลุดเอง) ' + p.R('ETH')],
  ['<b>Dexon</b> (polyglycolic acid)', 'synthetic · braided · กลาง', 'ใช้แบบเดียวกับ Vicryl (E s10) · Safil'],
  ['<b>Monocryl</b> (poliglecaprone 25)', 'synthetic · mono · เร็ว–กลาง', 'B: <b>subcuticular skin closure</b> (intradermal) — แรงหมดใน ~3 สัปดาห์ แผลผิวหนังไม่ต้องการนานกว่านั้น · ไม่ต้องตัดไหม'],
  ['<b>Maxon</b> (polyglyconate) / <b>Monosyn</b> (glyconate)', 'synthetic · <b>mono</b> · กลาง–นาน', 'B: fascial closure · ' + X + ' คล้าย PDS (Maxon ดูดซึม ~180 วัน) · Monosyn ระยะกลาง ' + p.R('MDT')],
  ['<b>PDS</b> (polydioxanone; MonoPlus)', 'synthetic · mono · <b>นาน</b>', 'A: visceral organ, <b>sheath</b> · B: <b>fascial closure</b> · ปิดหน้าท้องแบบ continuous (guideline) · bowel, biliary, pediatric CVT'],
  ['<b>Monomax</b> (poly-4-hydroxybutyrate)', 'synthetic · mono · <b>นานมาก</b>', 'ปิด abdominal wall (แรงคง ~50% ราว 90 วัน; D: 50% @ 12 wk, ดูดซึม 13–36 เดือน) ยืดหยุ่นกว่า PDS ' + p.R('BBR')],
  ['<b>Knotless (barbed) polyglyconate</b> — V-Loc 90/180', 'mono มีเงี่ยง (barb)', 'E s15 · เย็บต่อเนื่องไม่ต้องผูกปม (ปลายเป็นห่วงคล้อง) — laparoscopic suturing, subcuticular, fascia บางแบบ ' + p.R('MDT')],
 ]) + fig('s5absorb', 'E s9–14: Catgut · Vicryl/Dexon · Vicryl Plus/Rapide · Maxon/Monosyn · Monomax/Monocryl · PDS') + glsec('WHO Global guidelines for the prevention of SSI, 2nd ed. 2018', ['แนะนำใช้ <b>triclosan-coated sutures</b> (เช่น Vicryl Plus, Monocryl Plus, PDS Plus) เพื่อลด SSI ทุกชนิดผ่าตัด (conditional recommendation, moderate quality evidence) ' + p.R('WHOSSI')])))
p.add(box('Tensile strength &amp; absorption — เทียบ 2 สไลด์ + ค่าผู้ผลิต ★', fig('s4abs', 'D s16 (2025)') + fig('s5abs', 'E s16 (2026)') +
 tbl(['ไหม', 'D s16 (2025): แรงคง · ดูดซึมหมด', 'E s16 (2026): แรงคง · ดูดซึม', X + ' ผู้ผลิต (IFU)'], [
  ['Plain catgut', '7 วัน · 90 วัน', '2 wk &lt;50%, 3 wk 0% · 40–60 วัน', 'คงแรง ~7–10 วัน · ดูดซึม ~70 วัน'],
  ['Chromic catgut', '18–21 วัน · 90 วัน', '3 wk 50%, 4 wk &lt;50% · 80–120 วัน', 'คงแรง ~21–28 วัน · ~90 วัน'],
  ['Vicryl', '65% @14 d, 40% @21 d, 10% @35 d · 70 วัน', '2 wk 75%, 3 wk 50% · 50–70 วัน', '~75% @2 wk, ~50% @3 wk (≥6-0) · 56–70 วัน'],
  ['Vicryl Rapide', '— · 42 วัน', '—', '~50% @5 วัน, 0% @10–14 วัน · 42 วัน'],
  ['Dexon', '—', '2 wk 65%, 3 wk 35% · 60–90 วัน', '(Dexon II) ~65% @2 wk, ~35% @3 wk · 60–90 วัน'],
  ['Maxon', '—', '2 wk 75%, 3 wk 65%, 4 wk 50% · 180 วัน', '~75–81% @2 wk, ~59% @4 wk, ~30% @6 wk · ~180 วัน'],
  ['Monocryl', '— · 90–120 วัน', '2 wk 30–40%, 4 wk 0% · 90–120 วัน', 'undyed ~50–60% @1 wk, ~20–30% @2 wk, 0 @3 wk · 91–119 วัน'],
  ['PDS', '70% @14 d, 50% @28 d, 14% @56 d · 180–240 วัน', '2 wk 70%, 4 wk 50% · 180 วัน', 'PDS II (≥4-0) ~80% @2 wk, ~70% @4 wk, ~60% @6 wk · 182–238 วัน'],
  ['Monomax', '50% @12 wk · 13–36 เดือน', '—', '50% ราว 90 วัน (USP 0–1: 90–210 วัน) · 13 → &gt;36 เดือน'],
 ]) + '<p>' + D + ' ค่าใน D และ E ไม่ตรงกันหลายช่อง (ตำแหน่งเวลาและ % ต่างกัน) และต่างจาก IFU · ตัวเลขผู้ผลิตแตกต่างตามขนาดไหมและรุ่นสินค้า → <b>จำเป็นลำดับ</b> แทนตัวเลขเป๊ะ ' + p.R('ETH') + p.R('BBR') + p.R('MDT') + '</p>' +
 '<div class="mn"><b>ลำดับคงแรง (เร็ว → นาน)</b>: Vicryl Rapide &lt; plain gut &lt; Monocryl &lt; chromic gut ≈ Vicryl/Dexon &lt; Maxon ≈ PDS &lt; Monomax &lt; (non-absorbable)</div>'))
p.add(box('Non-absorbable ทีละตัว ' + ref('E s17–22 · D s8–11'), fig('s5nonabs', 'E s18–22: Silk · Nylon · Ethibond · Prolene · Novafil/V-Loc PBT · (s15 V-Loc 180)') +
 tbl(['ไหม', 'ชนิด', 'ใช้'], [
  ['<b>Silk</b> (braided, ดำ)', 'natural · multi', 'ผูก vessel/ligate (vein หลัง clamp), เย็บยึด drain/ICD/Penrose, mark specimen (A) · B: <b>vessel ligation</b> · ผูก appendiceal stump (op note) · ' + X + ' จับง่าย ปมแน่นที่สุด แต่ reaction มาก ไม่ใช้ใน vascular anastomosis/แผลติดเชื้อ'],
  ['<b>Nylon</b> (polyamide; Ethilon, Dermalon)', 'synthetic · mono', '<b>skin closure</b>, เย็บ drain กับผิว, tendon (A) · B: skin closure, reapproximate lacerations'],
  ['<b>Polyester</b> (Ethibond, Dacron, Mersilene)', 'synthetic · braided (เคลือบ)', X + ' แข็งแรงมาก ไม่ยืด → cardiac valve, tendon/ligament, ผูก (เช่น Nissen, cerclage)'],
  ['<b>Prolene</b> (polypropylene; Surgipro)', 'synthetic · mono (ฟ้า)', '<b>vascular anastomosis</b> (ไม่ thrombogenic, reaction น้อย), ยึด <b>mesh</b> hernia (A) · B: skin closure · subcuticular pull-out'],
  ['<b>Polybutester</b> (Novafil) / V-Loc PBT', 'synthetic · mono', 'E s22 · ' + X + ' ยืดหยุ่นตามการบวมของแผล · แบบ barbed (V-Loc PBT) ไม่ต้องผูก'],
  ['<b>Stainless steel</b> (wire)', 'โลหะ · mono/twisted', 'E s25 / D s12: <b>ปิด sternum</b> หลัง sternotomy (ภาพ X-ray ลวดที่ sternum) · ' + X + ' แข็งแรงที่สุด reaction น้อย แต่จับยาก'],
 ])))
p.add(box('Mesh, Graft, Clip, Stapler, Tape ' + ref('E s23–29 · D s11–15'), fig('s5misc', 'E s23–29: mesh, Dacron/PTFE graft, steel, Ligaclip, stapler linear/circular, skin stapler, adhesive tape') +
 ul(['<b>Mesh</b>: Prolene mesh (polypropylene, non-absorbable) → ซ่อม hernia ถาวร (Lichtenstein, incisional) · Vicryl mesh (absorbable) → ค้ำชั่วคราว ไม่ป้องกัน hernia ระยะยาว ' + X,
     '<b>Vascular graft</b>: <b>Dacron</b> (polyester, PET) → เส้นใหญ่ เช่น aorta (AAA repair, aortobifemoral) · <b>PTFE</b> (Gore-Tex) → bypass ขนาดกลาง, AV graft สำหรับฟอกเลือด ' + X + ' · ไฟล์ A มีรูป vascular graft แต่ไม่ได้เขียนการใช้',
     '<b>Ligaclip / hemoclip</b> (titanium): หนีบปิด vessel/duct ขนาดเล็ก (เช่น cystic artery/duct ใน LC) · A: intraoperative hemostasis · B: ligation of vessels',
     '<b>Stapler</b>: linear (TA; staple อย่างเดียว ไม่ตัด) · linear cutter (GIA; ตัด + staple ทั้ง 2 ขอบ) · circular (EEA; ต่อ end-to-end เช่น colorectal anastomosis) · skin stapler + ตัวถอด (staple remover) — ดู R03-T3',
     '<b>Adhesive tapes</b> (Leukostrip, Steri-Strip): ปิดแผลตื้นที่ตึงน้อย/ช่วยหลังตัดไหม · A: ปิดแผล clean wound (breast, thyroid)'])))

# ---------------------------------------------------------------- R03-U3
p = P("R03-U3", "Suture 3 · ขนาดไหม USP · อ่านซองไหม · เข็ม (shape, point, body, eye) · ขนาดไหมตามบริเวณ · เวลาตัดไหม", ["Suture materials", "Procedure"])
p.add(box('ขนาดไหม (USP) ' + ref('D s17 · E s35'), fig('s4usp', 'D s17: ตาราง USP — collagen / synthetic absorbable / non-absorbable diameter (mm) + American wire gauge') + fig('s5size', 'E s34–36: ส่วนประกอบชื่อบนซอง · USP suture size · ขนาดไหมตามบริเวณ') +
 ul(['<b>ยิ่ง "0" มาก ยิ่งเล็ก</b>: 2-0 &gt; 3-0 &gt; 4-0 … &gt; 10-0 (เล็กสุด ~0.02 mm ตาจุลศัลยกรรม) · ตัวเลขไม่มี 0 (1, 2, 3 …) ยิ่งมากยิ่งใหญ่ · ขนาด "0" อยู่ตรงกลาง',
     'ขนาด USP เดียวกัน <b>collagen (catgut) เส้นใหญ่กว่า</b> synthetic เล็กน้อย (D s17: 3-0 collagen 0.3 mm vs synthetic 0.2 mm)',
     'E s35 (ตัวอย่างใช้): 5 = tow a car! · 2 = horse abdominal repair · 0 = average size · 3-0, 4-0 = subcutaneous · 5-0 = vein/artery repair · 9-0 = ophthalmic',
     X + ' ใช้จริงโดยประมาณ: fascia หน้าท้อง #1 / 0 (PDS loop) · bowel 3-0/4-0 · subcut 3-0/4-0 Vicryl · vessel ใหญ่ 3-0/4-0, เล็ก 5-0–7-0 Prolene · skin ลำตัว 3-0/4-0 nylon, หน้า 5-0/6-0 ' + p.R('USP')])))
p.add(box('อ่านซองไหม "What is in a name…?" ★ ' + ref('E s30–34 · D s23'), fig('s4pkt', 'D s23: Synthetic coated absorbable suture · undyed braided · 3-0 (2 metric) · 75 cm · 3/8 circle reverse cutting 30 mm') +
 tbl(['บนซองบอกอะไร', 'ตัวอย่าง (E s30–34: POLYDIOXANONE / Coated VICRYL J269)'], [
  ['ชนิดไหม — generic &amp; trade name', 'POLYDIOXANONE · Coated VICRYL (polyglactin 910)'],
  ['Configuration — mono/multi', '"Monofilament" · "Braided"'],
  ['Absorption', '"Absorbable suture"'],
  ['Synthetic/biologic', '"Synthetic absorbable suture"'],
  ['ขนาด + ความยาวเส้น', 'USP 3/0 (metric 2) 75 cm · 2-0 (3.0 metric) 27" (70 cm)'],
  ['เข็ม — รหัส รูปร่าง ชนิดปลาย ความยาว', 'C-14: 3/8 circle reverse cutting 24 mm · CT-2: 1/2 circle taper 26 mm (สัญลักษณ์ ▼ = reverse cutting, ● = taper)'],
 ]) + '<p>' + X + ' metric size = เส้นผ่านศูนย์กลาง (mm) × 10 · สถานีไหมในสอบชอบให้ซองแล้วถาม "ไหมนี้ชื่ออะไร ชนิดอะไร ใช้ทำอะไร" → อ่านชื่อ + คำว่า Monofilament/Braided + Absorbable บนซองได้เลย</p>'))
p.add(box('เข็ม (Needle) ' + ref('D s19–22 · E s37–42 · B p2'), fig('s4needle', 'D s19 รูปร่าง · s21 ชนิดปลาย (สัญลักษณ์) · s22 ก้นเข็ม') + fig('s5needle', 'E s38–43: shape · needle parts · blunt vs sharp tip · needle body (cut) · needle bottom · เวลาตัดไหม') +
 ul(['<b>ส่วนของเข็ม</b> (E s39): <b>point</b> (ปลาย) – <b>body</b> (ตัว) – <b>swage</b> (ก้นที่ยึดไหม) · ค่าที่ระบุ: chord length, needle length, radius, diameter',
     '<b>รูปร่าง</b> (D s19, E s38): 1/4, <b>3/8</b>, <b>1/2</b>, 5/8 circle, J shape, compound curve, 1/2 curved (ski), straight · ' + X + ' 3/8 = ใช้มากสุด เย็บผิวหนัง (หมุนข้อมือน้อย) · 1/2 = ช่องลึก/แคบ เช่นในช่องท้อง (CT, SH) · 5/8 = ที่ลึกมาก (pelvis, urology) · J = port site/ fascia ปิด trocar · straight = เย็บด้วยมือ/ผิวหนังเข้าถึงง่าย',
     '<b>ชนิดปลาย/ตัด</b> (D s21, E s40–41): <b>Taper point / round body</b> (●) → แทงแหวกเนื้อไม่ตัด สำหรับ<b>เนื้อนุ่ม: ลำไส้ (B: intestine), vessel, peritoneum</b> · <b>Conventional cutting</b> (▲) สามเหลี่ยม คมด้านในโค้ง → <b>เนื้อเหนียว: skin</b> (B) · <b>Reverse cutting</b> (▼) คมด้านนอกโค้ง → skin/fascia/tendon ลดการฉีกขาดออกด้านขอบแผล (มาตรฐานเย็บผิวหนัง) · <b>Taper cut</b> (ปลายตัด ตัวกลม) → เนื้อเหนียวมาก/หลอดเลือดแข็ง (calcified) · <b>Blunt point</b> (○) → เนื้อเปราะ (ตับ ไต) และปิด fascia ลด needlestick · <b>Spatula / micropoint</b> → ตา (ophthalmic)',
     '<b>ก้นเข็ม</b> (D s22, E s42): closed eye (round eye) · French eye (spring/bevelled eye) · <b>swaged</b> (atraumatic — ไหมอัดติดในก้น ไม่มีรู) ← ไหมสำเร็จรูปปัจจุบันเกือบทั้งหมด รูเข็มเล็ก บาดเนื้อน้อย · D ยังมี rolled-end, drilled-end, regular eye, spring eye, spring double eyes',
     '<b>ความแหลม</b> (E s40): blunt tip vs sharp tip'])))
p.add(box('ขนาดไหมตามบริเวณ (Wound closure: suture materials) ' + ref('E s36'), tbl(['ชั้น', 'ไหม', 'บริเวณ'], [
  ['Skin', 'Nylon 6-0, 5-0', 'Face, eyelids'], ['Skin', 'Nylon 4-0', 'Hands, forearms'], ['Skin', 'Nylon 3-0', 'Back, scalp'], ['Skin', 'Nylon 2-0', 'Knees'],
  ['Subcutaneous fat', 'Vicryl 4-0', 'Face'], ['Subcutaneous fat', 'Vicryl 4-0, 3-0', 'Others'],
 ]) + '<p>ไฟล์ A: <b>nylon 3-0 ใช้เย็บ skin</b> (ทั่วไป) · op note A: ปิดผิวหนังด้วย <b>Nylon 4-0</b></p>'))
p.add(box('เวลาตัดไหม (Time of suture removal) ★ ' + ref('E s43'), tbl(['5–6 วัน', '7–10 วัน', '10–14 วัน'], [['Face', 'Ears, Neck, Chest, Arm, Hand', 'Scalp, Back, Shoulder, Arm, Hand, Leg, Foot']]) +
 '<p>' + X + ' หลักคือ เลือดมาเลี้ยงดี + แรงตึงน้อย → ตัดเร็ว (หน้า) · ผิวหนา/แรงตึงมาก/ข้อพับ → ตัดช้า · ตำราอื่น (AAFP 2017) ให้ใกล้เคียงกัน: face 3–5 วัน, scalp 7–10, arms 7–10, trunk 10–14, legs 10–14, hands/feet 10–14, <b>palms/soles 14–21 วัน</b> ' + p.R('AFPLAC') + ' · ' + D + ' E ใส่ "Arm, Hand" ทั้งช่อง 7–10 และ 10–14 (แล้วแต่ตำแหน่ง/แรงตึง) → ในสอบตอบตาม E ช่วงที่ใช้บ่อย: หน้า 5–6, คอ/อก 7–10, หลัง/ขา/เท้า 10–14</p>'))

# ---------------------------------------------------------------- R03-U4
p = P("R03-U4", "Suture 4 · เทคนิคเย็บแผล (simple, mattress, half-buried, subcuticular, continuous, locked, retention) + ปิดหน้าท้องตาม guideline", ["Suture materials", "Procedure"])
p.add('<div class="iointro">D s24: <b>"Type of suture material is less important than the techniques of the closure"</b> {R}</div>'.replace('{R}', p.R('SRC')))
p.add(box('เทคนิคเย็บ ' + ref('D s25 · E s45–47'), fig('s5tech', 'E s44–47: suture set · simple vs vertical mattress · half-buried vs horizontal mattress · intermittent / continuous / blanket continuous / retention') + fig('s4tech', 'D s25: A simple · B vertical mattress · C horizontal mattress / intracuticular running (ป้ายในสไลด์พิมพ์ซ้อนกัน) · D half-buried mattress · E locked simple running · F porous tape') +
 tbl(['เทคนิค', 'ลักษณะ', 'ใช้เมื่อ'], [
  ['<b>Simple interrupted</b>', 'แทงเข้าออกเป็นรูปขวด (กว้างที่ฐานกว่าผิว) ผูกทีละปม', 'มาตรฐาน ผิวหนังทั่วไป · ถ้าปมหนึ่งหลุด/ติดเชื้อ ตัดเฉพาะเข็มนั้นได้'],
  ['<b>Vertical mattress</b>', 'far-far → near-near ในแนวตั้งฉากกับแผล', '<b>eversion</b> ขอบแผลดี (ผิวหนังที่ขอบชอบม้วนเข้า เช่น ข้อพับ, ฝ่ามือ) + เนื้อลึกปิดไปด้วย'],
  ['<b>Horizontal mattress</b>', 'เข้า-ออกขนานแผล 2 จุด เป็นรูปสี่เหลี่ยม', 'แผลตึง (กระจายแรง) · ห้ามเลือด · fascia/ฝ่ามือ'],
  ['<b>Half-buried (corner/tip stitch)</b>', 'ช่วงกลางเดินใน dermis ของมุมแผล', '<b>แผลมุมแหลม/แผลรูปตัว V, Y</b> ไม่ให้ปลายมุมขาดเลือด'],
  ['<b>Intracuticular / subcuticular running</b>', 'เดินใน dermis ขนานผิว ไม่โผล่ผิวหนัง', 'แผลสวย (ไทรอยด์, หน้า, C-section) · Monocryl (ไม่ต้องตัดไหม) หรือ Prolene แบบดึงออก'],
  ['<b>Simple continuous (running)</b>', 'เย็บต่อเนื่อง ผูกหัว-ท้าย', 'เร็ว กระจายแรงเท่า ๆ กัน · แผลยาวที่ตึงน้อย · ปิด fascia/ลำไส้/vessel'],
  ['<b>Locked (blanket) continuous</b>', 'ทุกเข็มคล้องผ่านห่วงเข็มก่อน', 'ห้ามเลือดได้ดี (scalp, mucosa, perineum) แต่ขอบแผลขาดเลือดได้'],
  ['<b>Retention suture</b>', 'ไหมใหญ่ผ่านทุกชั้นหน้าท้อง ร้อยท่อรอง (bolster)', 'กัน <b>wound dehiscence</b> (A p1) — ดูกล่องถัดไป'],
  ['<b>Porous tape</b> (Steri-Strip)', 'แปะกาว', 'แผลตื้นตึงน้อย / หลังตัดไหม'],
 ])))
p.add(box('Retention suture ' + ref('A p1'), fig('f1ret', 'A p1: retention suture tips + รูปบนผนังหน้าท้องจริง') +
 ul(['Indication: <b>prevention of wound dehiscence in abdominal surgeries</b> (คนเสี่ยง: แผลติดเชื้อ, ท้องอืดมาก, ขาดอาหาร, steroid, ไอมาก, เคยแผลแยก)',
     'Tips (ในรูป): <b>loose knot</b> (สอด 3 นิ้วได้) กันปวดและเนื้อตาย · ใช้ <b>No.1 non-absorbable</b> + <b>cushion tube</b> (ท่อรองกันไหมบาดผิว) · ระยะ bite จากขอบแผล = <b>ความหนาของผนังหน้าท้อง</b> · ห่างกัน <b>10 cm</b>',
     X + ' ปัจจุบันหลักฐานสนับสนุน retention suture น้อย (ปวด, แผลกดทับ) — เน้นป้องกันด้วยเทคนิคปิด fascia ที่ดีตาม guideline'])))
p.add(box('ปิดหน้าท้อง (midline laparotomy) — ไฟล์ vs guideline', '<p>ไฟล์ A: PDS → sheath · Vicryl → fascia, hernia · op note A: external oblique fascia ปิดด้วย Vicryl (แผล McBurney ตัด muscle-splitting)</p>' +
 glsec('EHS/AHS updated guideline for closure of abdominal wall incisions 2022', [
  'ปิด elective midline laparotomy แนะนำ <b>continuous small-bites</b> + <b>slowly absorbable suture</b> (เช่น PDS) (weak recommendation) ' + p.R('EHS'),
  'พิจารณา <b>prophylactic mesh</b> (permanent synthetic, onlay หรือ retromuscular) ในคนเสี่ยง incisional hernia สูง ' + p.R('EHS'),
  'แนะนำ laparoscopic หรือแผลที่ไม่อยู่แนวกลางเมื่อทำได้ · port site &gt; 1 cm ปิด fascia ด้วย ' + p.R('EHS'),
  X + ' small bites (จากการศึกษา STITCH): ห่างขอบ ~5 mm, ห่างกัน ~5 mm, ความยาวไหม : ความยาวแผล ≥ 4 : 1',
 ]) + '<p>' + D + ' "Vicryl → fascia/hernia" ในไฟล์ A: ปิด midline fascia ใช้ <b>slowly absorbable (PDS)</b> ตาม guideline · ซ่อม hernia ยึด mesh ด้วย <b>Prolene (non-absorbable)</b> · Vicryl ใช้ได้กับ fascia ชั้นตื้น/แผล muscle-splitting ที่แรงตึงน้อย</p>'))

# ---------------------------------------------------------------- R03-T1
p = P("R03-T1", "Instruments 1 · Forceps & Clamps (tooth/Adson/DeBakey, Allis/Babcock/Kocher, hemostats, right angle, vascular/intestinal clamps) + needle holder", ["Instruments & devices"])
p.add('<div class="iointro">แนวคิดไฟล์ A: <b>"ปลายยาวไว้ห้ามเลือด · ปลายโค้งไว้ลงที่ลึก · ปลายแหลม (มีฟัน) หนีบเนื้อเป็น · ปลายทู่หนีบสิ่งไม่มีชีวิต"</b> · B: clamps = instruments used to hold tissue/objects &amp; provide hemostasis · forceps = grasping tissue, toothed (serrated) หรือ non-toothed {R}</div>'.replace('{R}', p.R('SRC')))
p.add(box('Forceps (ปากคีบ) ' + ref('A p2 · B p2 · C s16–18'), fig('f1fc1', 'A p2: tooth forceps · Adson · sponge holder · towel clamp') + fig('f2forc', 'B p2: Adson tissue forceps · tissue forceps (tooth/non-tooth, fine/long)') + fig('s3forc', 'C s16–23: tooth vs non-tooth forceps · Adson (toothed/non-toothed) · DeBakey · Allis · Babcock · sponge holder') +
 tbl(['ชื่อ', 'จุดสังเกต', 'ใช้'], [
  ['<b>Tooth forceps</b> (tissue forceps)', 'ปลายสั้น มีฟัน (1×2 rat-tooth)', 'หนีบ <b>skin</b>, เนื้อเหนียว (fascia, fat, muscle — B)'],
  ['<b>Non-tooth forceps</b> (dressing forceps)', 'ปลายมีร่องขวาง ไม่มีฟัน', 'จับเนื้อบอบบาง (B) · ทำแผล หยิบ gauze'],
  ['<b>Adson forceps</b>', 'สั้น ด้ามกว้าง ปลายเล็ก ฟันละเอียด · มีทั้ง toothed / non-toothed (C s17)', 'A: ปลายสั้นทู่ → หนีบเนื้อตาย, สำลี gauze · B: งานละเอียด ผิวหนัง หน้า'],
  ['<b>DeBakey forceps</b>', 'ยาว ปลายทู่ ร่องละเอียดตามยาว (atraumatic)', 'หนีบ <b>vessels</b> (A), bowel'],
  ['<b>Sponge holder</b> (sponge forceps)', 'ด้ามยาวมีล็อก ปลายเป็นวงรีมีร่อง', 'A: paint ผู้ป่วย ทายา ปูผ้า · จับ sponge ซับน้ำในท้อง · หนีบ gallbladder (open chole) · B: ซับ fluid, กดห้ามเลือดเบา ๆ'],
  ['<b>Towel clamp</b> (Backhaus towel clip)', 'ปลายแหลมโค้งเข้าหากัน', 'หนีบผ้า (drape) · A: หนีบ dermis (ยกขอบผิว)'],
 ])))
p.add(box('Tissue clamps: Allis · Babcock · Kocher ★ ' + ref('A p2 · B p1 · C s19–22, s32'), fig('f1fc2', 'A p2: Allis · Babcock · DeBakey forceps · Kocher clamp') +
 tbl(['ชื่อ', 'จุดสังเกต (A: วิธีจำ)', 'ใช้'], [
  ['<b>Allis</b> tissue forceps', 'ปลายมีฟันเล็กเรียงแถว · <b>traumatic</b> (B) · A: "หน้าตาเหมือน needle holder มีฟันทู่"', 'A: หนีบ <b>soft tissue ที่จะตัดออก</b> เช่น breast, lipoma · B: จับ firm tissue เช่น fascia'],
  ['<b>Babcock</b> clamp (intestinal forceps)', 'ปลายโค้งงอเป็นห่วง (fenestrated) · <b>atraumatic</b> · A: "Allis ปลายเป็นวง"', 'จับ<b>อวัยวะท่อ</b>: bowel (taenia coli), <b>appendix</b>, visceral organ, fimbriae/fallopian tube, vas deferens'],
  ['<b>Kocher</b> (Ochsner) clamp', 'ปากมีร่อง + <b>ฟัน 1×2 ที่ปลาย</b> (toothed) · traumatic · A: "needle holder มีฟันแหลม"', 'B: จับเนื้อที่จะเอาออก/เหนียว (fascia) · A: หนีบ bowel รอต่อ anastomosis/รอตัด, หนีบ thyroid · ' + D + ' A เขียน "หนีบ vessels ห้ามเลือด" — มีฟันจึงไม่ใช้กับ vessel ที่ต้องเก็บไว้ (ใช้กับ pedicle เหนียวที่จะตัด)'],
 ])))
p.add(box('Hemostats (arterial clamps) + right angle ★ ' + ref('A p2 · B p1 · C s25–28'), fig('f1fc3', 'A p2: arterial clamp · mosquito · tonsil · right angle') + fig('f2clamp', 'B p1: Clamps (ลูกศรแดง = แนวร่องฟัน serration; Kelly ร่องลงมาครึ่งเดียว)') +
 tbl(['ชื่อ (เล็ก → ใหญ่)', 'จุดสังเกต', 'ใช้'], [
  ['<b>Mosquito</b>', 'เล็กสุด ปลายเรียว (A: arterial clamp อันเล็ก)', 'curved → หนีบ small vessel · straight → หนีบไหมละเอียด, dressing (B)'],
  ['<b>Crile</b> hemostat', 'ใหญ่กว่า mosquito · <b>ร่องฟันตลอดปาก</b>', 'curved → หนีบ tissue/vessel เล็ก–กลาง · straight → หนีบไหม, dressing'],
  ['<b>Kelly</b> hemostat', 'ใหญ่กว่า Crile · <b>ร่องฟันแค่ครึ่งปลาย</b>', 'จับ tissue ขนาดใหญ่ · หนีบ large vessels'],
  ['<b>Rochester</b>(-Pean)', 'ใหญ่กว่า Kelly', 'หนีบ bleeding large vessels, pedicle หนา'],
  ['<b>Tonsil</b> (Schnidt)', 'ด้ามยาวมาก ปลายโค้ง (A: arterial clamp ก้านยาวมาก)', 'หนีบ vessel <b>ที่อยู่ลึก</b> · จับ artery เล็กระหว่างผ่าทอนซิล (B) · คีบไหมส่งผูกที่ลึก'],
  ['<b>Right angle</b> (Mixter)', 'ปลายหัก 90° (A: needle holder ปลายหัก)', X + ' เลาะ (dissect) รอบหลังโครงสร้างท่อแล้ว<b>คล้องไหมผ่านด้านหลัง</b> vessel/duct (เช่น cystic duct, renal pedicle) · ' + D + ' A เขียน "ใช้ผ่าเข้าแผลเล็ก" (คลาดเคลื่อน)'],
 ]) + '<p>C s25: "Hemostatic forceps — Arterial clamp (Crile clamp, Kelly clamp, small)" · ' + X + ' ทั้งหมดมีล็อก (ratchet) ที่ด้าม · โค้ง = ลงที่ลึก/เห็นปลาย · ตรง = งานผิว/หนีบไหม</p>'))
p.add(box('Vascular / intestinal clamps + needle holders ' + ref('C s29–31, s33–36'), fig('s3clamp1', 'C s25–30: arterial clamp · mosquito · tonsil · right angle · DeBakey vascular clamp · Doyen') + fig('s3clamp2', 'C s31–36: Payr pylorus clamp · Kocher · needle holder · Castro-Viejo · Backhaus towel clip') +
 tbl(['ชื่อ', 'จุดสังเกต', 'ใช้'], [
  ['<b>DeBakey vascular clamp</b>', 'ปากยาวทำมุม มีฟัน atraumatic แถวเล็กตามยาว', X + ' หนีบหลอดเลือดชั่วคราว (partial/total occlusion) ไม่ทำลายผนัง'],
  ['<b>Doyen intestinal clamp</b>', 'ปากยาวบาง ยืดหยุ่น <b>non-crushing</b>', X + ' หนีบลำไส้กันเนื้อหกระหว่างต่อ (เก็บไว้ใช้ต่อ)'],
  ['<b>Payr</b> (pylorus) clamp', 'ใหญ่หนัก มีข้อต่อหลายจุด <b>crushing</b>', X + ' หนีบลำไส้/กระเพาะส่วนที่จะตัดทิ้ง (gastrectomy)'],
  ['<b>Needle holder</b> (Mayo-Hegar)', 'ปากสั้นหนา มีร่องตาข่ายละเอียด (ไม่มีฟัน) + ล็อก', 'จับเข็มเย็บ · ' + X + ' จับเข็มที่ ~1/3–1/2 จากก้นเข็ม ไม่หนีบที่ swage'],
  ['<b>Castro-Viejo</b> needle holder', 'สปริง ไม่มีห่วงนิ้ว จับแบบปากกา', X + ' microsurgery, vascular เล็ก, ตา'],
 ])))

# ---------------------------------------------------------------- R03-T2
p = P("R03-T2", "Instruments 2 · Scissors · Scalpel/blade · Retractors (hand-held, self-retaining) · Suction tips", ["Instruments & devices"])
p.add('<div class="iointro">เครื่องมือตัดและถ่างแผล — A p2–3 · B p1–3 · C s37–48 (C มีแค่ชื่อ + รูป) {R}</div>'.replace('{R}', p.R('SRC')))
p.add(box('Scissors ★ ' + ref('A p2 · B p1 · C s39–44'), fig('f1sc', 'A p2: Mayo vs Metzenbaum') + fig('f2scis', 'B p1: Mayo · Metzenbaum') + fig('s3scis', 'C s38–44: scalpel handles &amp; blades · blunt/sharp, straight/curved · curved Mayo · Mayo (suture scissors) · Metzenbaum · Mayo vs Metzenbaum') +
 '<p>แนวคิด A: <b>ปลายทู่ใช้กับคนไข้ · ปลายแหลมใช้ตัดอุปกรณ์ · ปลายตรงตัดไหม · ปลายโค้งตัดที่ลึก</b> (ปลายโค้งเรียกว่า curved … scissors) · C s39: blunt vs sharp tip · straight vs curved blade</p>' +
 tbl(['', '<b>Mayo</b>', '<b>Metzenbaum</b>'], [
  ['หน้าตา', 'ปากหนา สั้น ใบกว้าง (A) · ปากกับด้ามยาวพอกัน (B)', 'ปากบาง ด้ามยาวกว่าปากมาก "<b>baum บอบบาง</b>" (A) · delicate (B)'],
  ['ใช้', 'ตัด<b>ของหนา</b>: sheath, tendon, aponeurosis, muscle (A) · curved → tissue ใหญ่เหนียว เช่น fascia · <b>straight → ตัดไหม</b> (suture scissors, C s41)', 'ตัด<b>ของบาง</b>/เลาะ: bowel, vessels, lipoma, adhesion band (A) · B: ตัด tissue ชิ้นเล็ก เช่น heart'],
 ]) + '<p>' + X + ' ห้ามใช้ Metzenbaum ตัดไหม/ผ้า (ใบบางเสียง่าย) · ตัดไหมใช้ straight Mayo หรือ suture scissors</p>'))
p.add(box('Scalpel ' + ref('B p2 · C s38'), fig('f2blade', 'B p2: #10 · #11 · #15 blade') +
 tbl(['ใบมีด', 'รูป', 'ใช้'], [
  ['<b>#10</b>', 'ใบโค้งใหญ่', 'large skin incision เช่น laparotomy (B) · ใส่ด้าม #3, 7'],
  ['<b>#11</b>', 'ปลายแหลมสามเหลี่ยม', 'precise incision/puncture — stab, I&amp;D abscess, arteriotomy, แผลใส่ drain (B)'],
  ['<b>#15</b>', 'ใบโค้งเล็กกว่า #10', 'finer incision — หน้า, แผลเล็ก, excision ก้อนเล็ก (B)'],
  ['#12 (C s38)', 'ปลายงอเป็นตะขอ', X + ' ตัดในที่แคบ/ดึงเข้าหาตัว เช่น ตัดไหม, arteriotomy เล็ก'],
  ['#20–23 (C s38)', 'ใบใหญ่', X + ' ใส่ด้าม <b>#4</b> — แผลใหญ่ผิวหนา'],
 ]) + '<p>C s38: handles <b>#3</b> (ใส่ใบ 10–15) และ <b>#4</b> (ใส่ใบ 20–23)</p>'))
p.add(box('Retractors — hand-held ★ ' + ref('A p3 · B p2 · C s4–8'), fig('f1rt', 'A p3: self-retaining (Balfour, Thompson) · Deaver · Senn · Army-Navy · malleable · Richardson') + fig('s3retr1', 'C s4–9: Senn · Langenbeck · Army-Navy (in pairs) · Richardson · Deaver · Weitlaner') +
 tbl(['ชื่อ', 'จุดสังเกต', 'ใช้'], [
  ['<b>Senn</b>', 'เล็ก 2 หัว: ด้านหนึ่งส้อม 3 ซี่งอ อีกด้านใบพับ "<b>Senn ส้อม</b>"', 'เปิดแผลขนาดเล็ก/ตื้น (A)'],
  ['<b>Army-Navy</b>', 'แผ่นแบน 2 หัว มีช่องตรงกลาง (ใช้เป็นคู่)', 'เปิด skin/subcut สำหรับ minor procedure (A) · gain exposure of skin layer (B)'],
  ['<b>Langenbeck</b>', 'ใบฉากเล็ก ด้ามยาวมีร่องจับ', X + ' ดึงผิวหนัง/กล้ามเนื้อแผลขนาดเล็ก–กลาง (hernia, thyroid)'],
  ['<b>Richardson</b>', 'ใบฉากใหญ่ หน้าตัดเว้า ปากสั้น', 'เปิดท้อง/ดึงถ่างผนังหน้าท้อง (B) · เปิด breast (A) · ' + X + ' ไม่ใช่เฉพาะ hepatectomy'],
  ['<b>Deaver</b>', 'โค้งรูปเคียวใหญ่ ปากยาว', 'เกี่ยว<b>อวัยวะลึกในช่องท้อง</b> (ตับ, ลำไส้) ได้เยอะ · แหวกสำหรับ open cholecystectomy (A, B)'],
  ['<b>Malleable</b> (ribbon)', 'แผ่นยาวดัดได้ "ไม้พายที่ดัดได้"', 'รองใต้แผลตอนเย็บปิด กันเข็มโดน bowel (A, B) · ดัดตามรูปช่อง'],
 ])))
p.add(box('Retractors — self-retaining ' + ref('A p3 · B p2 · C s9–14'), fig('s3retr2', 'C s11, 13, 14: Gelpi · St Mark perineal retractor · Balfour') + fig('f2retr', 'B p2: retractors (Army-Navy, Deaver, Richardson, Balfour, Thompson, Malleable)') +
 tbl(['ชื่อ', 'จุดสังเกต', 'ใช้'], [
  ['<b>Weitlaner</b>', 'ด้ามห่วงมีล็อก ปลายเป็นคราด (rake) หลายซี่', X + ' ถ่างแผลตื้น–กลาง (hernia, thyroid, extremity)'],
  ['<b>Gelpi</b>', 'ปลายแหลมข้างละ <b>1 ซี่</b> หันออก', X + ' แผลลึกแคบ (perineum, spine, vascular groin)'],
  ['<b>St Mark’s perineal</b> retractor', 'ใบมีซี่หลายอันปรับได้ 2 ข้าง', X + ' ถ่างแผลบริเวณ perineum/ทวารหนัก (proctology, APR ส่วน perineal)'],
  ['<b>Balfour</b>', 'โครงสี่เหลี่ยม 2 ใบข้าง + ใบกลาง (bladder blade)', 'เปิด<b>ช่องท้อง</b> (A, B)'],
  ['<b>Thompson</b>', 'โครงยึดขอบเตียงต่อแขนหลายใบ', 'B: self-retaining ช่องท้องใหญ่ · ' + D + ' A เขียน "เปิดช่องอก (Thompson)" — ช่องอกใช้ rib spreader (Finochietto)'],
 ])))
p.add(box('Suction tips ' + ref('B p3 · C s45–48'), fig('s3suct', 'C s46–48: Poole · Frazier · Yankauer') + fig('f2suct', 'B p3: Poole · Yankauer') +
 tbl(['ชื่อ', 'จุดสังเกต', 'ใช้'], [
  ['<b>Poole</b>', 'ท่อตรง + ปลอกนอกมีรูพรุนรอบ (sump)', 'remove large amount of fluid · <b>intra-abdominal suction</b> (B) · ' + X + ' ปลอกรูพรุนกัน omentum/ลำไส้ถูกดูดอุดปลาย'],
  ['<b>Yankauer</b>', 'ปลายโค้ง หัวกลมโป่ง ด้ามจับใหญ่', 'surface suction · some intra-abdominal (B) · ' + X + ' ดูดในปาก/คอ (airway)'],
  ['<b>Frazier</b>', 'ท่อเล็กงอ มีรูนิ้วโป้งที่ด้าม', X + ' ที่แคบ ละเอียด (neurosurgery, ENT, plastic) · ปิดรูด้วยนิ้ว = เพิ่มแรงดูด'],
 ])))

# ---------------------------------------------------------------- R03-T3
p = P("R03-T3", "Instruments 3 · Staplers & clips · Energy (electrocautery, harmonic) · Laparoscopic instruments · อื่น ๆ (leukostrip, staple, hemoclip, proctoscope, graft)", ["Instruments & devices"])
p.add('<div class="iointro">A p3 · B p3 · D s13–15 · E s26–28 {R}</div>'.replace('{R}', p.R('SRC')))
p.add(box('Staplers &amp; clips ★ ' + ref('B p3 · D s13–15 · E s26–28'), fig('f2stap', 'B p3: linear stapler · linear cutter · clips') + fig('s4pack2', 'D s10–15: Prolene + mesh · Ethibond, graft · steel + sternal wire X-ray · skin stapler · linear cutter · staplers (linear, circular)') +
 tbl(['ชื่อ', 'ทำอะไร', 'ใช้'], [
  ['<b>Linear stapler</b> (TA)', 'ยิงลวดเป็นแนวเส้นตรง <b>ไม่ตัด</b>', 'ligation &amp; anastomosis · ปิดปลายลำไส้/หลอดลม (B)'],
  ['<b>Linear cutter</b> (GIA)', 'ยิงลวด 2 แนว + <b>ตัดตรงกลาง</b> ปิดทั้ง 2 ขอบพร้อมกัน', 'separation &amp; anastomosis — ตัดลำไส้, side-to-side anastomosis (B)'],
  ['<b>Circular stapler</b> (EEA)', 'ลวดเป็นวงกลม + มีดตัดวงใน (มี anvil หัวเห็ด)', X + ' end-to-end anastomosis เช่น colorectal (low anterior resection), esophagojejunostomy · E s27'],
  ['<b>Endostapler</b>', 'linear cutter แบบส่องกล้อง', 'cutting + stapling ผ่าน trocar (B)'],
  ['<b>Skin stapler</b>', 'ลวดตัวเย็บผิวหนัง + ตัวถอด (remover)', 'ปิดแผลทั่วไป เช่น ผ่าตัดช่องท้อง (A) · เร็ว · ถอดตามเวลาตัดไหม'],
  ['<b>Clips</b> (Ligaclip, hemoclip)', 'คลิปโลหะ (titanium) หนีบปิด', 'ligation of vessels (B) · intraoperative hemostasis (A) · cystic duct/artery'],
 ])))
p.add(box('Energy system ' + ref('A p3 · B p3'), fig('f2energy', 'B p3: electrosurgical unit · ultrasonic (Harmonic) scalpel') +
 ul(['<b>Electrosurgical unit (electrocautery, Bovie)</b>: ปล่อยไฟฟ้าเข้าเนื้อ → <b>vaporize (cut)</b> / <b>coagulate</b> (B) · ' + X + ' monopolar ต้องติดแผ่น grounding pad · bipolar กระแสวิ่งระหว่าง 2 ปลาย (ปลอดภัยใกล้เส้นประสาท/คนมี pacemaker) · ' + D + ' A เขียนว่าใช้ "ligate tissue"',
     '<b>Ultrasonic (Harmonic) scalpel</b>: สั่นด้วยคลื่นเหนือเสียง → friction → heat → <b>cut &amp; coagulate</b> พร้อมกัน (B) · ' + X + ' ไม่มีกระแสผ่านตัว ความร้อนกระจายข้างเคียงน้อย ปิด vessel ได้ถึง ~5 mm · LigaSure = bipolar vessel sealer (≤ 7 mm)'])))
p.add(box('Laparoscopic instruments ' + ref('A p3 · B p3'), fig('f1lap', 'A p3: camera · lens · Veress needle · trocars · laparoscopic instruments') + fig('f2lap', 'B p3: optics · insufflator · light source · trocars · laparoscopic instruments · endostapler') +
 ul(['<b>Camera</b>: ส่วนมือถือต่อกับเลนส์ ตั้ง focus/white balance · <b>Lens (laparoscope)</b>: มีหลายมุม (0°, 30°) อาจต้องไล่ฝ้า (defogging)',
     '<b>Light source</b>: fiber optic cable ต่อเข้ากล้อง ส่องสว่าง · <b>Insufflator</b>: เป่า <b>CO₂</b> เข้าช่องท้อง สร้าง pneumoperitoneum (' + X + ' ตั้งความดันทั่วไป 12–15 mmHg)',
     '<b>Veress needle</b>: เข็มปลายทู่มีสปริง แทงแบบ blind เข้าช่องท้องเพื่อเป่าลม (closed technique) · ' + X + ' อีกวิธี = open (Hasson) technique',
     '<b>Trocars</b>: ช่องทาง (port) ผ่านผนังหน้าท้องให้ใส่เครื่องมือ · insufflation · เอาชิ้นเนื้อออก · ขนาด 5, 10, 12 mm',
     '<b>Laparoscopic instruments</b>: ด้ามยาวผ่าน trocar — grasping, retracting, cutting, cauterizing (grasper, Maryland dissector, scissors, hook)'])))
p.add(box('Others (ไฟล์ A) ' + ref('A p3'), fig('f1oth', 'A p3: leukostrip · staple · hemoclip · electrocautery · proctoscope · vascular graft') +
 tbl(['ชื่อ', 'ใช้ (A)', X], [
  ['<b>Leukostrip</b> (skin closure strip)', 'ปิดแผล clean wound (breast, thyroid)', 'แผลตื้นตึงน้อย/เสริมหลังตัดไหม'],
  ['<b>Staple</b> (skin stapler)', 'ปิดแผลทั่วไป (ผ่าตัดช่องท้อง)', 'เร็ว ติดเชื้อน้อย แต่ต้องถอด'],
  ['<b>Hemoclip</b>', 'intraoperative hemostasis', 'คลิป vessel/duct'],
  ['<b>Electrocautery</b>', 'ligate tissue', D + ' ตัด + ห้ามเลือด'],
  ['<b>Proctoscope</b>', 'investigation of anal canal · intraoperative investigation of anal fistula tract', 'ส่องดู hemorrhoid, fissure, fistula opening, biopsy'],
  ['<b>Vascular graft</b>', '(ไม่ได้เขียน)', 'Dacron/PTFE ใช้ bypass, aneurysm repair, AV graft (R03-U2)'],
 ])))

# ---------------------------------------------------------------- R03-T4
p = P("R03-T4", "Instruments 4 · Tubes, drains & lines (NG, ICD, PICC, JP, Redivac, Penrose, Foley, DJ stent, ostomy) + วัสดุทำแผล + อุปกรณ์ ostomy", ["Instruments & devices", "Procedure"])
p.add(box('Tubes, drains &amp; lines ★ ' + ref('A p4'), fig('f1tube', 'A p4: NG · chest tube · PICC · Jackson-Pratt · Redivac · Penrose · Foley · double J · ostomy bag') +
 tbl(['ชื่อ', 'ใช้ (A)', X + ' จุดสังเกต/เพิ่ม'], [
  ['<b>Nasogastric (NG) tube</b>', 'feeding · gastric decompression · UGIB evaluation', 'รูปใน A = Salem sump: lumen ใหญ่ดูด + air vent (pigtail สีฟ้า) กันดูดติดผนัง · Levin = lumen เดียว'],
  ['<b>Chest tube</b> (ICD)', 'pus drainage for empyema thoracis · hemothorax · pneumothorax', 'มีเส้นทึบรังสี + เครื่องหมายความยาว · ต่อ underwater seal · 📘 ดูท้ายกล่อง'],
  ['<b>PICC line</b>', 'TPN · chemotherapy · venous sampling', 'ใส่ทางแขน ปลายอยู่ SVC · ใช้ยาว (สัปดาห์–เดือน) · ยาระคายเคืองหลอดเลือด'],
  ['<b>Jackson-Pratt (JP)</b>', 'post-operative drainage of other Sx', 'closed suction แบบลูกยางบีบ (bulb) แรงดันลบต่ำ'],
  ['<b>Redivac</b> (Redon)', 'post-op drainage thyroid Sx, breast Sx', 'closed suction ขวดสุญญากาศแรงดันลบสูง · ไหม nylon ยึดสายกับผิว (A p1)'],
  ['<b>Penrose</b>', 'appendectomy drainage', 'ท่อยางแบนนิ่ม <b>open passive drain</b> (ไหลตามแรงโน้มถ่วง/capillary) · ยึดด้วย silk'],
  ['<b>Foley catheter</b>', 'one-way: intermittent catheterization · <b>two-way</b>: collect urine, monitor urine output, acute urinary retention · <b>three-way</b>: continuous bladder irrigation for massive urinary tract bleeding', '2-way = ช่องปัสสาวะ + ช่อง balloon · 3-way เพิ่มช่อง irrigation (clot retention, hematuria)'],
  ['<b>Double J stent</b> (ureteral stent)', 'urinary diversion', 'ปลายขดเป็นรูป J ทั้ง 2 ข้าง (ไต–bladder) · หลังส่องนิ่ว/ureter อุดตัน · ต้องนัดถอด'],
  ['<b>Ostomy bag &amp; baseplate</b>', 'CA left colon s/p Hartmann’s procedure · CA rectum s/p abdominoperineal resection', 'end colostomy ถาวร (APR) / อาจต่อคืน (Hartmann)'],
 ]) + glsec('BTS Guideline for pleural disease 2023', ['chest drain ใส่ใน <b>safe triangle</b> (ขอบ lateral ของ pectoralis major · ขอบ anterior ของ latissimus dorsi · แนวระดับ nipple/ICS 5 — ฐานสามเหลี่ยม) และใช้ ultrasound นำเมื่อเป็นน้ำในเยื่อหุ้มปอด ' + p.R('BTS')])))
p.add(box('วัสดุทำแผล (Wound materials) ' + ref('A p5'), fig('f1wound', 'A p5: Duoderm · Tegaderm · Bactigras · foam dressing · Fixomull · Ioban · Transpore · conforming bandage · Terramycin · Innotape') +
 tbl(['ชื่อ', X + ' คืออะไร / ใช้'], [
  ['<b>Duoderm</b>®', 'hydrocolloid — แผลตื้น–ปานกลาง exudate น้อย, pressure ulcer ระยะต้น · คงความชื้น'],
  ['<b>Tegaderm</b>', 'transparent film — ปิด IV/central line, แผลตื้นแห้ง · มองเห็นแผล'],
  ['<b>Bactigras</b>®', 'tulle gras ชุบ paraffin + chlorhexidine — แผลถลอก, burn, skin graft ไม่ติดแผล'],
  ['<b>Foam dressing</b>', 'ซับ exudate ปานกลาง–มาก กันแรงกด'],
  ['<b>Fixomull</b>® (stretch)', 'แผ่นผ้ากาวยืด ยึด dressing/สาย'],
  ['<b>Ioban</b>®', 'incise drape ชุบ iodophor ปิดผิวก่อนลงมีด'],
  ['<b>Transpore</b>®', 'เทปพลาสติกใส ยึดสาย/ผ้าก๊อซ'],
  ['<b>Conforming bandage</b>', 'ผ้าพันยืดแนบรูปร่าง ยึด dressing'],
  ['<b>Terramycin</b> ointment', 'oxytetracycline + polymyxin B (ขี้ผึ้งตา) — ไฟล์จัดเป็นวัสดุแผล ใช้ทาแผลเล็ก/ตา'],
  ['<b>Innotape</b>®', 'เทปยึด/ปิดแผล (ตามรูปในไฟล์)'],
 ]) + glsec('WHO Global guidelines for the prevention of SSI 2018', ['แผลผ่าตัดปิดสนิท (primary closure) <b>ไม่แนะนำ advanced dressing</b> แทน dressing มาตรฐานเพื่อลด SSI (conditional) ' + p.R('WHOSSI')])))
p.add(box('อุปกรณ์ Ostomy ★ ' + ref('A p5'), fig('f1ost', 'A p5: ostomy bag 1 ชิ้น vs 2 ชิ้น · skin barrier powder · paste · film') +
 tbl(['ชนิด', 'ลักษณะ', 'ข้อดี'], [
  ['ถุง <b>1 ชิ้น</b>', 'แป้นติดผิวหนังติดกับตัวถุงเป็นชิ้นเดียว', 'แป้นมีส่วนประกอบช่วยปกป้องผิวหนัง · ใช้แล้วทิ้ง · สะดวก ใช้ง่ายโดยเฉพาะ<b>ผู้สูงอายุ</b>'],
  ['ถุง <b>2 ชิ้น</b>', 'แป้นรอง (baseplate) + ถุง ปลายเปิด/ปิด', 'ถอดถุงไปล้างใช้ซ้ำได้ · <b>แป้นติดอยู่ได้นาน</b>กว่าชนิดชิ้นเดียว'],
  ['<b>Skin barrier powder</b>', 'แป้งโรยรอบ stoma', 'ดูดซับความชื้นผิวหนังรอบ stoma ที่แฉะ/ถลอก'],
  ['<b>Skin barrier paste</b>', '"ยาสีฟัน" ทารอบ stoma', 'อุดร่อง/ทำให้ผิวรอบ stoma เรียบเสมอกัน กันรั่วใต้แป้น'],
  ['<b>Skin barrier film</b>', 'สเปรย์/แผ่นเช็ดเคลือบผิว', X + ' เคลือบป้องกันผิวจากกาวและสิ่งขับถ่าย'],
 ])))

# ---------------------------------------------------------------- R03-P1
p = P("R03-P1", "Procedure · ฉีดยาชา (dose) · ล้างมือผ่าตัด · ใส่ถุงมือ (open/closed) · ใส่ NG · ใส่ Foley (ชาย/หญิง) · Operation note open appendectomy", ["Procedure"])
p.add(box('Local anesthesia ★ ' + ref('A p5'),
 ul(['<b>Dose</b> (A): 1% lidocaine <b>with</b> adrenaline <b>7 mg/kg = 0.7 mL/kg</b> · 1% lidocaine <b>without</b> adrenaline <b>5 mg/kg = 0.5 mL/kg</b> (1% = 10 mg/mL)',
     '<b>Contraindication ของ lidocaine with adrenaline</b> (A): ปลายนิ้ว ปลายเท้า ปลาย penis ปลายจมูก',
     'ขั้นตอน (A): 1) แนะนำตัว ล้างมือ แจ้งหัตถการ 2) <b>ถามแพ้ยาชา</b> ถ้าไม่แพ้แจ้งว่าจะฉีดยาชา 3) สวมถุงมือ <b>ดูดยาด้วยเข็มเบอร์ 18</b> 4) <b>ใช้เข็มเบอร์ 24 ฉีดรอบแผล โดยฉีดเข้าในตัวแผล</b> 5) ทดสอบความรู้สึกด้วย <b>tooth forceps</b> กระตุ้น pain',
     X + ' ฉีดผ่านขอบแผลด้านใน (wound edge) เจ็บน้อยกว่าแทงผ่านผิวที่ปกติ · <b>aspirate ก่อนฉีด</b>กันเข้าเส้นเลือด · ฉีดช้า ๆ อุ่นยา/ผสม bicarbonate ลดปวด · พิษยาชา (LAST): ชารอบปาก หูอื้อ ชัก หัวใจเต้นผิดจังหวะ → หยุดยา, airway, <b>20% lipid emulsion</b>']) +
 glsec('FDA label lidocaine · หลักฐาน adrenaline ที่นิ้ว', [
  'ขนาดสูงสุด: ไม่มี epinephrine <b>4.5 mg/kg (ไม่เกิน 300 mg)</b> · มี epinephrine <b>7 mg/kg (ไม่เกิน 500 mg)</b> ' + p.R('LIDO'),
  'Cochrane 2015: adrenaline + lidocaine ใน digital block ช่วยยืดเวลาชาและลดเลือดออก ไม่พบรายงาน digital ischemia (หลักฐานคุณภาพต่ำ) ' + p.R('COCH') + ' · AAFP 2014: ใช้กับจมูก หู นิ้ว penis ดูปลอดภัย ' + p.R('AAFP'),
 ]) + '<p>' + D + ' ไฟล์ A: ไม่มี adrenaline 5 mg/kg (ฉลาก 4.5) และห้ามใช้ adrenaline ที่ปลายอวัยวะ (หลักฐานใหม่ว่าปลอดภัยในคนสุขภาพดี; ยังระวังใน Raynaud, PAD) → <b>ในสอบ OSCE ตอบตามไฟล์คณะ</b> และรู้ว่าหลักฐานใหม่ต่างกัน</p>'))
p.add(box('ล้างมือผ่าตัด (surgical scrub) ' + ref('A p6'),
 '<ol><li>ทำมือและแขนให้เปียกทั่ว น้ำถึงข้อศอก ใช้ข้อศอกเปิด-ปิดน้ำและกด chlorhexidine</li><li>ฟอกสบู่ <b>3 รอบ</b>: รอบแรกปลายมือ → ข้อศอก · รอบสอง ปลายมือ → ครึ่งแขน · รอบสุดท้ายเฉพาะมือ</li><li>ทุกรอบเริ่มที่มือ: ฝ่ามือ → หลังมือและง่ามนิ้วด้านหลัง → ง่ามนิ้วด้านหน้า → หลังนิ้ว → รอบนิ้วโป้ง → จบด้วยปลายนิ้วถูฝ่ามือ</li><li>ฟอกแขนต่อตามรอบในข้อ 2</li></ol>' +
 '<p>' + X + ' ถือมือสูงกว่าข้อศอกตลอด (น้ำไหลจากมือ → ศอก) · ไม่แตะอะไรหลังล้าง เช็ดด้วยผ้า sterile</p>' +
 glsec('WHO Guidelines on Hand Hygiene in Health Care 2009', ['surgical hand preparation ใช้ได้ทั้ง <b>antimicrobial soap scrub</b> หรือ <b>alcohol-based hand rub</b> · ถอดเครื่องประดับ · ใช้เวลาตามที่ผู้ผลิตกำหนด (ทั่วไป 2–5 นาที ไม่ต้องนานกว่านั้น) · ไม่ใช้แปรงขัดผิว ' + p.R('WHOHH')])))
p.add(box('ใส่ถุงมือ sterile ' + ref('A p6'),
 '<p><b>Open technique</b>: 1) เปิดซองโดยจับที่ขอบล่าง 2) ใส่มือข้างถนัดก่อน — มือข้างไม่ถนัดจับ<b>ด้านใน</b>ของถุงมือ (ส่วนพับข้อมือ) สวมถึงข้อมือ จัดนิ้ว 3) มือที่ใส่แล้วหยิบถุงมืออีกข้าง<b>จับแต่ด้านนอก</b> (สอดใต้พับ) สวมเลยข้อมือ — ระวังมือ 2 ข้างไม่สัมผัสกัน</p><p><b>Closed technique</b> (A เขียนแค่หัวข้อ) ' + X + ': ใช้หลังใส่เสื้อกาวน์ sterile โดย<b>มือยังอยู่ในแขนเสื้อ</b> หยิบและพลิกถุงมือผ่านปลายแขนเสื้อ แล้วดันมือออกเข้าถุงมือ → ผิวมือไม่แตะด้านนอกถุงมือเลย (ใช้ในห้องผ่าตัด)</p>'))
p.add(box('ใส่สาย NG ' + ref('A p6'),
 ul(['<b>Indication</b>: diagnostic — UGIB evaluation, gastric content aspiration, radiocontrast administration, identification of esophagus/stomach for CXR · therapeutic — gastric decompression, aspiration for toxic ingestion, medication, feeding',
     '<b>Contraindication</b>: absolute — severe midface trauma, suspected base of skull fracture, recent nasal surgery · relative — coagulopathy, esophageal varices or stricture, alkaline or acid ingestion']) +
 '<ol><li>วัดความยาว: <b>ท้องซ้ายบน → หู → จมูก</b></li><li>ทาปลายสายด้วยยาชาชนิดเจล</li><li>ตรวจรูจมูกไม่มีรอยโรค ไม่ตันทั้ง 2 ข้าง</li><li>ใส่สายช้า ๆ <b>ขนานพื้นโพรงจมูก</b></li><li>สายถึงหลัง pharynx ผู้ป่วยอาจไอจาก gag reflex → ชะลอ ให้กลืน ใส่ตามจังหวะกลืน</li><li>ใส่จนถึงจุดที่วัด</li><li>ทดสอบ: ดูดด้วย syringe ใหญ่ ได้ gastric content = อยู่ในกระเพาะ</li><li>ดูดไม่ได้ → ฟังท้องซ้ายบน ให้ผู้ช่วยดันลม 30–50 mL ได้ยินเสียงลม = อยู่ในกระเพาะ</li><li>ติดสายกับสันจมูก ไม่กดผนังจมูกแน่นเกิน</li></ol>' +
 glsec('ASPEN Safe Practices for Enteral Nutrition Therapy 2017', ['ก่อนให้อาหาร/ยาครั้งแรกต้องยืนยันด้วย <b>X-ray</b> · <b>ห้ามใช้ auscultation (whoosh test)</b> · pH ของ aspirate ≤ 5.5 ใช้ช่วยข้างเตียง ' + p.R('ASPEN')]) +
 '<p>' + D + ' ขั้นที่ 8 ของไฟล์ (ฟังเสียงลม) ไม่ใช่วิธียืนยันที่เชื่อถือได้ — สายในหลอดลม/หลอดอาหารก็ได้ยินเสียงได้ (R01-P4 ' + S + ')</p>'))
p.add(box('ใส่ Foley catheter ' + ref('A p7'),
 ul(['<b>Indication</b>: diagnostic — urine output monitoring, collect uncontaminated urine · therapeutic — acute urinary retention, urologic &amp; pelvic surgery, anticipated prolonged surgery, neurogenic bladder, chronically bedridden',
     '<b>Contraindication</b>: traumatic urethral injury (<b>high-riding prostate, bleeding per meatus</b>), urethral stricture, resistance to passage, acute prostatitis']) +
 '<p><b>ชาย</b>: 1) เลือกขนาด 2) ทดสอบ balloon ฉีดน้ำ 10 mL ไม่รั่ว เก็บในถาด sterile 3) ทำความสะอาดฝีเย็บด้วย forceps/มือข้างไม่ถนัดจับสำลี antiseptic เช็ด<b>จากรูเปิดวนออกนอก</b> กว้างกว่าบริเวณปูผ้า 2–3 ครั้ง 4) ปูผ้า sterile 5) จับ shaft of penis มือซ้าย รูด prepuce ด้วยนิ้วโป้ง-ชี้ เช็ด meatus อีกครั้ง 6) หล่อลื่นปลายสาย ใส่ช้า ๆ <b>จนสุดความยาว</b> เห็นปัสสาวะ 7) เติม balloon NSS 10 mL 8) ดึงสายถอยจนรู้สึกตึง 9) ต่อถุง ยึดเทปที่ขา 10) <b>รูด prepuce กลับคืน</b></p><p><b>หญิง</b>: เหมือนกัน ยกเว้นข้อ 5 = เปิด labia majora/minora ด้วยมือข้างไม่ถนัด ใช้นิ้วโป้ง-ชี้เปิดให้เห็นรูเปิด เช็ด meatus อีกครั้ง (ไม่มีข้อ 10)</p>' +
 '<p>' + D + ' ไฟล์ A เติม balloon ด้วย <b>NSS</b> — ผู้ผลิตส่วนใหญ่แนะนำ <b>sterile water</b> (NSS ตกผลึกอุดช่อง balloon ทำให้ปล่อยลมไม่ได้) · R01-P4 ใช้ sterile water ' + X + ' · ห้ามพอง balloon ถ้ายังไม่เห็นปัสสาวะ (อาจอยู่ใน urethra)</p>' +
 glsec('CDC/HICPAC CAUTI guideline 2009 (updated 2019)', ['ใส่เมื่อมีข้อบ่งชี้ ถอดเร็วที่สุด · aseptic technique + sterile equipment · <b>closed drainage</b> · ถุงต่ำกว่า bladder เสมอ ' + p.R('CAUTI')])))
p.add(box('Operation note: open appendectomy ★ ' + ref('A p8'),
 '<p><b>Diagnosis</b>: acute appendicitis · <b>Operation</b>: open appendectomy</p><p><b>Findings / procedure</b>:</p><ol><li>Supine position · GA → scrub and paint</li><li>Identify <b>midpoint between umbilicus and right ASIS</b> (McBurney) → skin incision</li><li>External oblique fascia incised along its fibers → blunt dissection separating internal oblique and transversus abdominis (muscle-splitting)</li><li>Peritoneal incision → small intestine retracted medially, cecum identified</li><li><b>Taenia coli</b> traced to base of appendix</li><li>Ligation of <b>mesoappendiceal artery</b></li><li>Appendectomy by <b>double ligation at the stump with Silk 2-0</b> · stump mucosa obliterated with electrocautery</li><li>Check bleeding</li><li>Peritoneum closed with <b>Chromic catgut 2-0</b></li><li>IO + TA closed by loose <b>figure of eight</b></li><li>External oblique fascia closed with <b>Vicryl</b></li><li>Skin irrigated with NSS, closed with <b>Nylon 4-0</b></li><li>Estimated blood loss …… mL · Complications: none</li></ol>' +
 '<p>' + X + ' โจทย์ OSCE ชอบถาม "ใช้ไหมอะไรเย็บแต่ละชั้น" → ผูก stump/ligate = <b>silk</b> · peritoneum = <b>chromic catgut</b> · fascia = <b>Vicryl</b> (แผล McBurney) · skin = <b>nylon</b> · op note ต้องมี: diagnosis (pre/post-op), operation, surgeon/anesthesia, findings (appendix ลักษณะ, perforation, pus), procedure, EBL, specimen, complication</p>'))

doc = {"code": "R03", "kind": "R", "title": "Surgical instruments & Suture materials", "types": ["OSCE"],
 "src": "รวม 5 ไฟล์: A R03__Surgical_Tools__Suture.pdf (สรุป A3 8 หน้า) · B R03_Surgical_instruments.pdf (3 หน้า) · C R03_Surgical_instruments_2025.pdf (สไลด์ 49) · D R03_Suture_Material_2025.pdf (สไลด์ 26) · E R03_Suture_Materials_2026.pdf (สไลด์ 48, รศ.พญ.กษยา ตันติผลาชีวะ) · ทำครบ 22 พ.ย. 2026 · รูป img/subr03_*",
 "upd": UPD,
 "legend": '<span>เนื้อหาปกติ = จากไฟล์ (A–E)</span><span><span class="chip g">📖 อธิบาย</span> = Claude อธิบายเพิ่ม (นอกไฟล์ จากตำรา/เอกสารผู้ผลิต)</span><span><span class="chip gl">📘 Guideline</span> = เนื้อหาจาก guideline ฉบับล่าสุด</span><span><span class="warn">! ต่าง</span> = ไฟล์ขัดกันเอง หรือขัดกับ guideline/ตำรา/ผู้ผลิต (แหล่งที่น่าเชื่อถือกว่าขึ้นก่อน)</span><span><span class="chip s">ซ้ำ</span> = ตรงกับที่อื่น</span><span><span class="hw">ตัวเอียง</span> = ตัวจางในไฟล์</span><span>A pN = หน้า · C/D/E sN = สไลด์</span>',
 "pages": [x.d for x in PAGES]}
if __name__ == '__main__':
    json.dump(doc, open(sys.argv[1], 'w', encoding='utf8'), ensure_ascii=False, indent=0)
    import re
    for x in PAGES:
        imgs = re.findall(r'\{\{IMG:([^}]+)\}\}', x.d['html']); rs = re.findall(r'\{\{R:(\d+)\}\}', x.d['html'])
        print(x.d['id'], len(x.d['html']), 'imgs', len(imgs), 'refs', len(x.d['refs']), 'maxR', max(map(int, rs)) if rs else 0)
