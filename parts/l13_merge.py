# L13 Stomach & Duodenum — merge สไลด์ jodx78 (S pN) เข้า Round I/O เดิม (handout H pN) · 15 พ.ย. 2026
# รัน: python3 parts/l13_merge.py  (แก้ data/io.js + data/unit_L13.js) · เนื้อหาเดิมทุกหน้าคงไว้เป็น prefix
import sys, json, re
sys.path.insert(0, 'tools')
from io_gl import load, save, page, doc, ref, gsec, GL

UPD = '2026-11-15'
head, d = load('data/io.js')
L = doc(d, 'L13')
OLD = {p['id']: p['html'] for p in L['pages']}

def hw(t): return f'<span class="hw">{t}</span>'
STAR = '<span class="star">✱</span>'
S = '<span class="chip s">ซ้ำ</span>'
D = '<span class="chip d">! ต่าง</span>'
X = '<span class="chip x">✏ แก้</span>'
N = '<span class="chip n">เฉพาะสไลด์</span>'
E = '<span class="chip e">เสริม</span>'
G = '<span class="chip g">📖 อธิบาย</span>'
W3 = '<span class="chip x">★★★ แดง</span>'
CHK = '<span class="chip d">⚠ ตรวจ</span>'
def fig(k, cap=''): return f'<div class="fig">{{{{IMG:{k}}}}}</div>' + (f'<p class="cap">{cap}</p>' if cap else '')
def box(title, rf, body, chips=''):
    return f'<div class="box"><h3>{title}<span class="ref">{rf}</span>{(" " + chips) if chips else ""}</h3>\n{body}\n</div>'
def ul(*xs): return '<ul>' + ''.join(f'<li>{x}</li>' for x in xs) + '</ul>'
def gls(name, *items): return gsec(name, '<ul>' + ''.join(f'<li>{GL} {x}</li>' for x in items) + '</ul>')

SLIDE = ('L13 Stomach and Duodenum สไลด์บรรยาย', 'L13 Stomach and Duodenum สไลด์บรรยาย — Suthep Udomsawaengsup, MD (Advanced laparoscopic and Bariatric Surgery, CMISC จุฬาฯ) · ไฟล์ L13_Stomach_and_Duodenum_jodx78.pdf 69 หน้า (สไลด์ละหน้า + ลายมือ jod/78)', None)
REF = {
 'SL': SLIDE,
 'H': ('เอกสารคำสอน ผศ.นพ.สุเทพ', "L13 Stomach and Duodenum เอกสารคำสอน ผศ.นพ.สุเทพ อุดมแสวงทรัพย์ (ลงวันที่ 15 มี.ค. 2554) — อ้างอิงในไฟล์: Dempsey DT. Schwartz's Principles of Surgery 8e, 2005", None),
 'THDYS': ('Thailand Dyspepsia Guidelines', 'Pittayanon R, et al. Thailand Dyspepsia Guidelines: 2018. J Neurogastroenterol Motil 2019;25:15–26', 'https://doi.org/10.5056/jnm18081'),
 'ACGDYS': ('ACG and CAG Clinical Guideline: Management of Dyspepsia', 'Moayyedi PM, et al. ACG and CAG Clinical Guideline: Management of Dyspepsia. Am J Gastroenterol 2017;112:988–1013', 'https://doi.org/10.1038/ajg.2017.154'),
 'MAAS6': ('Maastricht VI', 'Malfertheiner P, et al. Management of Helicobacter pylori infection: the Maastricht VI/Florence consensus report. Gut 2022', 'https://doi.org/10.1136/gutjnl-2022-327745'),
 'ACGHP': ('Treatment of Helicobacter pylori Infection', 'Chey WD, et al. ACG Clinical Guideline: Treatment of Helicobacter pylori Infection. Am J Gastroenterol 2024;119(9):1730-1753', 'https://pubmed.ncbi.nlm.nih.gov/39626064/'),
 'ACGUGIB': ('Upper Gastrointestinal and Ulcer Bleeding', 'Laine L, et al. ACG Clinical Guideline: Upper Gastrointestinal and Ulcer Bleeding. Am J Gastroenterol 2021;116(5):899-917', 'https://pubmed.ncbi.nlm.nih.gov/33929377/'),
 'ESGE21': ('ESGE Guideline – Update 2021', 'Gralnek IM, et al. Endoscopic diagnosis and management of nonvariceal upper gastrointestinal hemorrhage (NVUGIH): ESGE Guideline – Update 2021. Endoscopy 2021;53:300–332', 'https://doi.org/10.1055/a-1369-5274'),
 'WSES': ('Perforated and bleeding peptic ulcer: WSES', 'Tarasconi A, et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg 2020;15:3', 'https://doi.org/10.1186/s13017-019-0283-9'),
 'FDA': ('Ranitidine', 'U.S. FDA. FDA Requests Removal of All Ranitidine Products (Zantac) from the Market (1 เม.ย. 2020)', 'https://www.fda.gov/news-events/press-announcements/fda-requests-removal-all-ranitidine-products-zantac-market'),
 'JGCA': ('Japanese Gastric Cancer Treatment Guidelines 2025', 'Japanese Gastric Cancer Association. Japanese Gastric Cancer Treatment Guidelines 2025 (7th edition). Gastric Cancer 2025', 'https://doi.org/10.1007/s10120-025-01698-4'),
 'NCCNG': ('NCCN Clinical Practice Guidelines in Oncology: Gastric', 'NCCN Clinical Practice Guidelines in Oncology: Gastric Cancer, Version 2.2026 (21 ม.ค. 2026)', 'https://www.nccn.org/professionals/physician_gls/pdf/gastric.pdf'),
 'ONO': ('endoscopic submucosal dissection and endoscopic mucosal resection for early gastric', 'Ono H, et al. Guidelines for endoscopic submucosal dissection and endoscopic mucosal resection for early gastric cancer (2nd ed). Dig Endosc 2021;33(1):4-20', 'https://cir.nii.ac.jp/crid/1360002218152346112'),
 'AJCC': ('AJCC Cancer Staging Manual 8th ed. — Stomach', 'AJCC Cancer Staging Manual 8th ed. — Stomach (สรุปโดย PathologyOutlines)', 'https://www.pathologyoutlines.com/topic/stomachstagingcarcinomas.html'),
 'JSCR': ('Japanese Guidelines for Gastric Cancer Screening', 'Hamashima C. Update version of the Japanese Guidelines for Gastric Cancer Screening. Jpn J Clin Oncol 2018;48:673–683', 'https://doi.org/10.1093/jjco/hyy077'),
 'ASTRO': ('Radiation Therapy for Gastric Cancer: An ASTRO', 'Radiation Therapy for Gastric Cancer: An ASTRO Clinical Practice Guideline (พ.ย. 2025)', None),
 'ESMOGIST': ('Gastrointestinal stromal tumours: ESMO', 'Casali PG, et al. Gastrointestinal stromal tumours: ESMO–EURACAN–GENTURIS Clinical Practice Guidelines for diagnosis, treatment and follow-up. Ann Oncol 2022;33:20–33', 'https://doi.org/10.1016/j.annonc.2021.09.005'),
 'NCCNGIST': ('Gastrointestinal Stromal Tumors (GISTs), Version', 'NCCN Clinical Practice Guidelines in Oncology: Gastrointestinal Stromal Tumors (GISTs), Version 1.2026', 'https://www.nccn.org/professionals/physician_gls/pdf/gist.pdf'),
 'ESMOMZL': ('Marginal zone lymphomas: ESMO', 'Zucca E, et al. Marginal zone lymphomas: ESMO Clinical Practice Guidelines for diagnosis, treatment and follow-up. Ann Oncol 2020;31:17–29', 'https://doi.org/10.1016/j.annonc.2019.10.010'),
 'BSHMZL': ('British Society of Haematology guideline', 'Walewska R, et al. Guideline for the diagnosis and management of marginal zone lymphomas: a British Society of Haematology guideline. Br J Haematol 2024;204:86–107', None),
 'ASGEGOO': ('benign and malignant gastroduodenal obstruction', 'Jue TL, et al. ASGE guideline on the role of endoscopy in the management of benign and malignant gastroduodenal obstruction. Gastrointest Endosc 2021;93:309–322', None),
 'DUMP': ('International consensus on the diagnosis and management of dumping', 'Scarpellini E, et al. International consensus on the diagnosis and management of dumping syndrome. Nat Rev Endocrinol 2020;16:448–466', None),
 'ASMBS': ('ASMBS/IFSO', 'ASMBS/IFSO Guidelines on Indications for Metabolic and Bariatric Surgery, 2022 (แทน NIH 1991)', 'https://asmbs.org/articles/after-30-y'),
 'ADA': ('Standards of Care in Diabetes—2026', 'American Diabetes Association Professional Practice Committee. Standards of Care in Diabetes—2026, Section 8: Obesity and Weight Management for the Prevention and Treatment of Diabetes. Diabetes Care 2026;49(Suppl 1)', 'https://diabetesjournals.org/care/issue/49/Supplement_1'),
}
def R(p, k):
    m, t, u = REF[k]; return '{{R:%d}}' % ref(p, m, t, u)

INTRO = ('<div class="iointro"><b>➕ เพิ่ม 15 พ.ย. 2026 — รวมสไลด์บรรยาย L13 (S pN) {t}</b> · กล่องข้างบนเป็นเนื้อหาเดิมจาก handout (ครบ ไม่ได้แก้) · '
         'กล่องข้างล่าง = สไลด์ + ลายมือ เทียบกับ handout (<span class="chip s">ซ้ำ</span> / <span class="chip d">! ต่าง</span>) + 📘 guideline ล่าสุดท้ายกล่อง</div>')

def add(pid, title, html):
    p = page(d, pid)
    assert p['html'] == OLD[pid]
    R(p, 'SL')
    p['html'] = p['html'].rstrip() + '\n' + INTRO.format(t=title) + '\n' + html.strip() + '\n'
    p['rev'] = p.get('rev', 1) + 1; p['upd'] = UPD
    return p

# ---------------------------------------------------------------- L13-1
p = page(d, 'L13-1')
h = []
h.append(box('ภาพรวมบท: function · symptom 5 กลุ่ม', 'S p1–2, p5', ul(
  f'ลายมือแดงหน้าแรก (S p1): {STAR} <b>Physiology</b> · {STAR} <b>gut–brain axis</b> {hw("ghrelin ทำให้กินเก่ง, หลั่งจาก fundus · GLP-1, glucagon, GIP")} → รายละเอียดอยู่ L13-4 และ L13-9',
  f'<b>Function ของกระเพาะ</b> (S p2 {hw("☆☆")}): 1) Mechanical function 2) Secretion &amp; absorption {hw("ออกมาเป็น fluid, juice · HCl ถ้า obstruct → เสีย HCl ออก → dehydrate")} 3) Incretins &amp; eating–weight regulation {hw("GLP-1 → ลด wt ได้ 2x% · BMI = เกณฑ์ในการผ่าตัด")} 4) Tumors',
  '<b>Symptom 5 อย่าง</b> (S p2): abdominal pain · vomiting · upper GI bleeding · gastric outlet obstruction · abdominal mass',
  f'<b>Symptomatology</b> (S p5) ที่ใช้เดินเรื่องทั้งบท = Task 1–4: ① abdominal pain ② UGIB ③ abdominal mass ④ GOO {hw("มาด้วย pain/vomiting")} (+ Task 6 morbid obesity)',
  f'{hw("⇒ Pancreatic diseases = อาการไม่ต่างจาก stomach/duodenum เลย ∵ blood supply ต่อ celiac axis → epigastric pain")}',
  f'{G} อวัยวะ <b>foregut</b> (หลอดอาหารส่วนปลาย กระเพาะ duodenum ส่วนต้น ตับ ทางเดินน้ำดี pancreas) รับเลือดจาก celiac trunk และส่ง visceral afferent เข้าไขสันหลังระดับเดียวกัน (~T5–T9) → ปวดตื้อ ๆ กลางท้องส่วนบน (epigastrium) เหมือนกัน แยกด้วยตำแหน่งอย่างเดียวไม่ได้ ต้องใช้ลักษณะอาการร่วม',
  f'รูปผนังกระเพาะหน้าแรก (S p1) เป็นรูปเดียวกับ H p11 {S}')) )
add('L13-1', 'ภาพรวม · อาการ', '\n'.join(h))

# ---------------------------------------------------------------- L13-2
p = page(d, 'L13-2')
h = []
h.append(box('Vagotomy ตามสไลด์: ทำไม TV ต้องมี drainage', 'S p10–11, p30 · H p10, p25', ul(
  f'TV / SV (วงไว้) {hw("ตัดตรงนี้ = pylorus ไม่คลายตัว (โดน nerve ที่ไป antrum) → มีผลต่อ gastric emptying ∴ ต้องทำ drainage procedure: pyloroplasty / gastrojejunostomy")} {S} กับ H p25',
  f'S p11 = หน้าเดียวกับ handout: "Truncal vagotomy ต้องมี drainage procedure" (ไฮไลต์) · Heineke-Mikulicz pyloroplasty และ gastrojejunostomy ขีดเส้นใต้',
  f'<b>Surgical Rx = "Acid reducing procedure"</b> (S p30) {hw("ผ่าตัดเพื่อลดการหลั่งกรดในกระเพาะ")}',
  f'Vagotomy: cut <b>cephalic phase</b> · ↓ gastrin sensitivity ของ parietal cell · <span class="imp">↓BAO 70–80%</span> {hw("basal acid output")} · <span class="imp">↓PAO 50–60%</span> {hw("peak acid output")}',
  f'<b>Truncal vagotomy (TV):</b> denervate <u>whole</u> stomach · delayed gastric emptying (solid) · <span class="imp">needs drainage procedure</span> {hw("โดน pylorus/antrum ด้วย")}',
  f'<b>HSV = PGV</b> (highly selective / proximal gastric vagotomy) {hw("เก็บ pylorus ไว้")}: spare nerve to antrum (Crow\'s foot) → ไม่มีผลต่อ gastric emptying {hw("antrum distend → pylorus เปิด")} {S} กับ H p9',
  f'{G} parietal cell vagotomy = HSV = PGV (ชื่อเรียกต่างกันของหัตถการเดียว) · ข้อเสียของ HSV คือ recurrence สูงสุดในตาราง S p12 เพราะเหลือ antrum (gastrin) และอาจหลงเหลือ criminal nerve of Grassi')
  + gls('WSES 2020 · perforated/bleeding peptic ulcer',
    f'ยุค PPI + H. pylori eradication: ผ่าตัดลดกรดถาวร (vagotomy ± drainage/antrectomy) <b>ไม่ทำเป็นมาตรฐาน</b>แล้ว · ผ่าตัดเฉพาะแก้ภาวะแทรกซ้อน (เย็บรูทะลุ / หยุดเลือด) แล้วให้ PPI + ตรวจและกำจัด H. pylori {R(p,"WSES")} {D} กับแนวคิด "acid reducing procedure" ในสไลด์')))
h.append(box('ผลการผ่าตัด duodenal ulcer 3 แบบ', 'S p12', fig('l13_s12') + '''
<table class="fx"><tr><th></th><th>Parietal cell vagotomy</th><th>Truncal vagotomy + pyloroplasty</th><th>Truncal vagotomy + antrectomy</th></tr>
<tr><td>Operative mortality (%)</td><td>0</td><td>&lt;1</td><td>1</td></tr>
<tr><td>Ulcer recurrence (%)</td><td>5–15</td><td>5–15</td><td><span class="imp">&lt;2</span></td></tr>
<tr><td>Dumping mild / severe (%)</td><td>&lt;5 / 0</td><td>10 / 1</td><td>10–15 / 1–2</td></tr>
<tr><td>Diarrhea mild / severe (%)</td><td>&lt;5 / 0</td><td>25 / 2</td><td>20 / 1–2</td></tr></table>''' + ul(
  f'{hw("pyloroplasty = drainage procedure")} · {hw("antrectomy: antrum มี G-cell = แหล่ง gastrin")} → {hw("recurrence <2% = low recurrent rate")}',
  'สรุป: ตัดมาก → recurrence ต่ำ แต่ mortality, dumping, diarrhea มากขึ้น · PCV ผลข้างเคียงน้อยสุด แต่ recurrence สูง',
  'ที่มา: Mulholland MW, Debas HT. Surg Clin North Am 1987'), N))
h.append(box('Modified Sugiura procedure', 'S p9', fig('l13_s9') + ul(
  'Devascularize รอบ esophagogastric junction (paraesophagogastric devascularization) + <b>esophageal transection &amp; reanastomosis</b> + splenectomy + selective vagotomy + pyloroplasty',
  'หยุดเลือดจาก <b>esophagogastric varices</b> โดย<b>ไม่ต้องทำ portosystemic shunt</b>',
  f'{G} ใช้ใน portal hypertension ที่ varices เลือดออกและรักษาทางกล้องไม่ได้ ทำ shunt/TIPS ไม่ได้ (เช่น portal/splenic vein thrombosis) · เชื่อมกับ H p8: coronary (left gastric) vein เป็นทางไหลย้อนไป esophageal varices · ทำ vagotomy ร่วมจึงต้องมี pyloroplasty เป็น drainage'), N))
h.append(box('Gastric gland: เซลล์ที่ต้องจำ', 'S p17 · H p13', ul(
  f'{hw("Mucosal surface: กัน acid reflux")} (= surface mucous cell หลั่ง mucus + HCO₃⁻)',
  f'วงไว้: <b>parietal cell</b> (HCl + intrinsic factor) · <b>chief cell</b> (pepsinogen) {S} กับ H p13–14',
  'Histology: stomach fundus (mucosa) — pit ตื้น gland ยาว (body/fundus = oxyntic gland)'), S))
add('L13-2', 'Vagotomy · Sugiura · gland', '\n'.join(h))

# ---------------------------------------------------------------- L13-3
p = page(d, 'L13-3')
h = []
h.append(box(f'3 phases ของการหลั่งกรดตามสไลด์ {STAR}', 'S p18–19 · H p12–14', ul(
  f'<b>Cephalic {hw("30%")}</b>: sight, smell, taste, thought {hw("receptor ส่งข้อมูลมาตาม vagus n. · correct by vagotomy")}',
  f'<b>Gastric {hw("60% = สำคัญสุด")}</b>: antral distention · protein content · ↑pH (&gt;4) {hw("correct by gastrectomy")}',
  f'<b>Intestinal {hw("10%")}</b>: intestinal gastrin · absorbed amino acids {hw("feedback: acid ↑ → สั่งไม่ให้หลั่ง")}',
  'วงจร: ↑circulating gastrin → ↑H⁺ secretion → ↓intragastric pH ⊣ gastrin (Wolfe &amp; Soll, NEJM 1988)',
  f'Cephalic phase (S p19): conditioned reflexes · taste · smell · chewing · swallowing · <b>hypoglycemia</b> → vagus nucleus → vagus nerve {hw("correct by vagotomy")} → ACh → parietal cell และ ACh → <b>G cell</b> {hw("= หลั่ง gastrin")} → gastrin → parietal cell → H⁺',
  f'ตัวเลข 30/60/10 และกลไก {S} กับ H p12–14 · ดาวลายมือเขียวที่หัวสไลด์ S p18')))
h.append(box('Receptor ของ parietal cell กับยา/หัตถการที่ไปหยุด', 'S p20–21 · H p12', fig('l13_s21') + '''
<table class="fx"><tr><th>สัญญาณ</th><th>ผ่าน</th><th>หยุดด้วย</th></tr>
<tr><td>Histamine (จาก ECL cell)</td><td>H2 receptor → Gs → cAMP</td><td><b>H2 blocker</b>: famotidine, cimetidine (ranitidine)</td></tr>
<tr><td>Acetylcholine (vagus)</td><td>M receptor → Ca²⁺</td><td><b>vagotomy</b> · pirenzepine (M1 antagonist)</td></tr>
<tr><td>Gastrin (G cell)</td><td>CCK2 receptor → Ca²⁺</td><td><b>antrectomy</b> · proglumide</td></tr>
<tr><td>PGE₂</td><td>Gi → ยับยั้ง</td><td>(misoprostol = PGE₁ analogue ช่วยป้องกัน)</td></tr>
<tr><td>H⁺/K⁺ ATPase (proton pump)</td><td>ทางร่วมสุดท้าย</td><td><span class="imp">PPI = most potent</span> (omeprazole)</td></tr></table>''' + ul(
  f'ลายมือ S p20: {hw("lumen = apical surface · PPI = most potent · Histamine → H2-blocker · ACh → vagotomy · Gastrin → antrectomy")}',
  f'{G} PPI แรงสุดเพราะจับ proton pump ซึ่งเป็น<b>ทางร่วมสุดท้าย</b>ของทุกสัญญาณแบบ irreversible · ต้องกินก่อนอาหาร 30–60 นาที เพราะออกฤทธิ์กับปั๊มที่กำลังทำงาน',
  f'{E} <b>ranitidine ถูกถอนออกจากตลาด</b>ตั้งแต่ 1 เม.ย. 2020 (สาร NDMA) ใช้ famotidine แทน {R(p,"FDA")}',
  f'ข้อความพิมพ์บน S p20 เรื่อง "Paradoxical aciduria" → ดูหน้า L13-11 (GOO)'), N))
add('L13-3', 'phases · receptor + ยา', '\n'.join(h))

# ---------------------------------------------------------------- L13-4
p = page(d, 'L13-4')
h = []
h.append(box('Mucosal barrier ตามสไลด์', 'S p22 · H p15', ul(
  f'{hw("= กัน acid ซึมย้อนเข้า gastric pit")} · ตาราง Components / Mediators ชุดเดียวกับ H p15 {S}',
  f'PUD เกิดจาก<b>เสียสมดุล</b>: acid ↑ กับ mucosal defense ↓ · NSAIDs · H. pylori (S p23) {S}')))
h.append(box('Ghrelin กับ incretin (gut hormone)', 'S p1, p69 · H p16', ul(
  f'{hw("ghrelin ทำให้กินเก่ง, หลั่งจาก fundus")} (S p1) = orexigenic {S} กับ H p16 · ลายมือ S p69: {hw("hormone เพิ่มความหิว เพิ่ม food intake")}',
  f'{hw("GLP-1, glucagon, GIP")} = กลุ่ม incretin/gut hormone ที่เกี่ยวกับ eating–weight regulation',
  f'{G} ghrelin ส่วนใหญ่สร้างจาก X/A-like cell ใน oxyntic gland ของ fundus → <b>sleeve gastrectomy ตัด fundus ออก ghrelin จึงลด</b> · GLP-1 และ PYY มาจาก L cell ใน ileum/colon → เพิ่มมากหลัง RYGB เพราะอาหารถึงลำไส้ส่วนปลายเร็ว · รายละเอียดกลไกอยู่ L13-9'), E))
add('L13-4', 'mucosal barrier · gut hormone', '\n'.join(h))

# ---------------------------------------------------------------- L13-5
p = page(d, 'L13-5')
h = []
h.append(box('Task 1 epigastric pain (chronic): ส่องกล้องเมื่อไร', 'S p14, p27, p36 · H p17', ul(
  f'Key ของ epigastric pain {hw("epigastric pain · related to meal (กินแล้วดีขึ้น/แย่ลง) · chronicity")} · related to meal {hw("→ stomach / gallbladder / pancreas")}',
  'เคส S p27: หญิง 40 ปี ปวดลิ้นปี่ซ้ำ ๆ สัมพันธ์กับอาหาร ให้ H2 antagonist 6 สัปดาห์ยังปวด → <b>next step?</b>',
  f'{hw("ถ้ามี alarm signs e.g. elderly, weight loss → EGD เลย · no alarm signs → try medication 4–6 wk → ไม่ดีขึ้น = EGD ดู CA/HP")}',
  f'เคส S p36 (Task 3 abdominal mass): หญิง 60 ปี + <span class="imp">weight loss</span> {hw("alarm sign = EGD เลย (ไม่ try medication)")} → EGD',
  f'{S} กับ H p17: อาการไม่ตอบสนองต่อยาควรส่องกล้อง')
  + gls('Thailand Dyspepsia Guidelines 2018 · ACG/CAG 2017',
    f'<b>Thailand 2018</b>: EGD เมื่อมีข้อใดข้อหนึ่ง — <span class="imp">เริ่มมีอาการอายุ ≥50 ปี</span> · มี alarm features · ไม่ตอบสนองต่อยาที่เหมาะสม · ทำ EGD แล้วให้ตรวจ H. pylori (rapid urease test และ/หรือ histology) · ไม่มี alarm ให้ PPI 4–8 สัปดาห์เป็นอันดับแรก (ทรัพยากรจำกัด) {R(p,"THDYS")} {S} กับลายมือ',
    f'<b>ACG/CAG 2017</b>: EGD เมื่ออายุ <b>≥60 ปี</b> · อายุ &lt;60 ให้ตรวจ H. pylori แบบ non-invasive แล้วรักษาถ้าบวก · alarm feature เดี่ยว ๆ ไม่ใช่ข้อบ่งชี้อัตโนมัติ {R(p,"ACGDYS")} {D} — ในไทยใช้เกณฑ์ไทย (อายุ ≥50) เพราะความเสี่ยง gastric cancer ต่างกัน')))
h.append(box('H. pylori ตามสไลด์', 'S p24, p28–29 · H p22–23', ul(
  f'ค้นพบโดย Warren and Barry 1983 → {X} <b>Warren &amp; Marshall</b> (Barry คือชื่อต้นของ Marshall) {S} กับ H (แก้ไว้แล้ว)',
  'Gram-negative rod, <b>S shape</b> (H: spiral shape) · สัมพันธ์กับ <span class="imp">gastritis, PUD, CA และ lymphoma</span>',
  f'Urease: urea → NH₄ + HCO₃ {hw("ทำให้ HP อยู่ในกรดได้")} + CO₂ · {X} สมการเต็ม: urea + H₂O → 2NH₃ + CO₂ (NH₃ จับ H⁺ เป็น NH₄⁺ จึงเป็นด่างรอบตัวเชื้อ)',
  f'Urease test → <b>detect CO₂</b> จาก urea metabolism ของ HP {hw("⚠ not detect urea")} = หลักของ <b>urea breath test</b>',
  f'<b>CLO / rapid urease test</b> (S p28): {hw("CLO test → pH ↑ = เปลี่ยนสี indicator")} (phenol red ชมพูเมื่อ pH ≥6.0) · รูปชุด Pronto Dry {S} กับ H p22–23',
  'S p29 = หน้า handout เดียวกับ H p23 (ขีดเส้นใต้ชมพู: urease, <sup>14</sup>C/<sup>13</sup>C, phenol red pH ≥6.0, &lt;15 นาที)')
  + gls('Maastricht VI/Florence 2022 · ACG 2024',
    f'แนะนำ<b>รักษาทุกคนที่ติดเชื้อ</b> · UBT เป็น non-invasive test ที่ดีที่สุด (stool antigen แบบ monoclonal ใช้แทนได้) · <span class="imp">หยุด PPI ≥2 สัปดาห์ และ antibiotic/bismuth ≥4 สัปดาห์ก่อนตรวจ</span> (ผลลบลวง) · ยืนยันการกำจัดเชื้อ ≥4 สัปดาห์หลังจบยา {R(p,"MAAS6")}',
    f'Regimen ปัจจุบัน: bismuth quadruple 14 วันเป็นหลัก (ดู L13-6) {R(p,"ACGHP")}')))
add('L13-5', 'dyspepsia → EGD · H. pylori', '\n'.join(h))

# ---------------------------------------------------------------- L13-6
p = page(d, 'L13-6')
h = []
h.append(box('Gastric ulcer vs duodenal ulcer', 'S p23, p25–26 · H p21–22', '''
<table class="fx"><tr><th></th><th>Gastric ulcer (GU)</th><th>Duodenal ulcer (DU)</th></tr>
<tr><td>กลไกเด่น</td><td>mucosal defense defect · acid variable</td><td><span class="imp">acid hypersecretion</span></td></tr>
<tr><td>ความถี่</td><td>น้อยกว่า · ผู้สูงอายุ (H) → mortality สูงกว่า</td><td><b>พบบ่อยกว่า GU</b> · ชาย:หญิง 2:1</td></tr>
<tr><td>ตำแหน่ง</td><td><span class="imp">lesser curve, posterior surface</span></td><td><span class="imp">95% ที่ 1st part (duodenal bulb)</span> · atypical/หลายแผล → หา ZE</td></tr>
<tr><td>Chronic</td><td>radiating fold, ลึกถึง muscularis propria</td><td>posterior → <b>bleeding</b> · anterior → <b>perforation</b></td></tr></table>
<table class="fx"><tr><th>Modified Johnson</th><th>ตำแหน่ง</th><th>กรด</th></tr>
<tr><td><span class="imp">I (most common)</span></td><td>lesser curvature, incisura angularis</td><td>normal / low</td></tr>
<tr><td>II</td><td>GU + DU</td><td>normal / <b>increased</b></td></tr>
<tr><td>III</td><td>prepyloric</td><td>normal / <b>increased</b></td></tr>
<tr><td>IV</td><td>near EG junction</td><td>normal / low</td></tr>
<tr><td>V <span class="chip g">📖 อธิบาย</span></td><td>ที่ไหนก็ได้ จาก NSAIDs/aspirin</td><td>—</td></tr></table>''' + ul(
  f'{G} type II, III ทำตัวเหมือน DU (กรดสูง) จึงผ่าตัดลดกรดร่วมได้ · type I, IV กรดไม่สูง ปัญหาคือ mucosal defense · DU ด้านหลังติด <b>gastroduodenal artery</b> จึงเลือดออก ส่วนด้านหน้าไม่มีอวัยวะปิดจึงทะลุ',
  f'สาเหตุ: imbalance acid ↑ / mucosal defense ↓ · NSAIDs · H. pylori (S p23) {S} กับ H p21–22'), N))
h.append(box('ลักษณะแผล benign vs malignant', 'S p15–16, p40 · H p20–22', fig('l13_s40', 'S p40 ซ้าย gastric ulcer · ขวา gastric cancer (วงตำแหน่ง biopsy)') + ul(
  f'{hw("ดูลักษณะของ ulcer → benign = ก้นแผลสะอาด ขอบเรียบ · malignant = growth เยอะ → central necrosis + ระเบิด (ขอบยก)")}',
  f'S p40: {hw("benign = นุ่ม")} [อ่านไม่ชัด] · {hw("cancer = ภูเขาไฟ → โตขึ้นไปแล้วมี central necrosis")}',
  f'Acute ulcer {hw("= 4–6 wks")} · chronic ulcer {hw("= เป็นมานาน/มี infl tissue")} (รูป Schwartz 7e = รูป H p22) {S}',
  f'{G} ทุก gastric ulcer ต้อง biopsy (handout: สงสัยมะเร็ง ≥6–8 จุด) และส่องซ้ำดูว่าหายสนิทหลังรักษา (มักที่ 8–12 สัปดาห์) เพราะ ulcerated cancer อาจดูเหมือน benign ได้ · duodenal ulcer แทบไม่เป็นมะเร็ง จึงไม่ต้อง biopsy เป็นประจำ')))
h.append(box('Task 1 sudden onset: Peptic ulcer perforation', 'S p3–4, p6–8, p13 · H p19, p25, p27', fig('l13_freeair', 'CXR upright: free air ใต้ diaphragm (H p19 · ตรงกับ S p4)') + ul(
  f'Quiz (S p3): ชาย 45 ปี ปวดลิ้นปี่รุนแรงทันที ดื่มเหล้าหนัก + NSAIDs · BP 100/60 PR 100 ไม่มีไข้ · guarding {hw("= peritonitis")} + board-like rigidity → <span class="imp">ตอบ C: exploratory laparotomy, closure of the perforation</span> (ไม่ใช่ observe / percutaneous drainage / EGD) · {hw("sudden onset = แตก, ตีบ, ตัน")}',
  f'S p4 {hw("free air ใต้ dome of diaphragm = rupture of hollow viscus organ")}',
  'S p6: severe epigastric pain → <b>diffuse abdominal pain</b> · rigidity → <b>lies immobile</b> · บางรายปวด <b>RLQ</b> · ตรวจพบ dehydration, fever, <b>loss of liver dullness</b>, absent bowel sound',
  f'S p7 {hw("PUP: sudden onset severe epigastric pain · content ไหลลงตาม rt paracolic gutter = RLQ pain → อาจ dx appendicitis · chemical peritonitis · loss of liver dullness")} {G} = <b>Valentino\'s appendicitis</b>',
  f'S p13: <span class="imp">most common complication that needs surgery</span> · <span class="imp">2nd most common complication overall</span> (รองจาก bleeding) · <b>DU &gt; GU 7–10 เท่า</b> · GU mortality &gt; DU (อายุมาก, โรคร่วม) · sudden {hw("ปวดทันทีทันใด")} generalized {hw("ปวดทั่วท้อง")} peritonitis, board-like rigidity, loss of liver dullness, absent bowel sound, dehydration',
  f'S p8 Omental (<b>Graham</b>) patch: เย็บ interrupted ข้ามแผล ดึง pedicle ของ greater omentum มาปิด แล้วผูกทับ {S} กับ H p27 · ลายมือหัว S p13 {hw("ต่อไป → & bleeding ที่ต้องผ่า")}')
  + gls('WSES 2020 · perforated peptic ulcer',
    f'CXR upright เห็น free air ~75–85% · ถ้าไม่ชัดให้ <b>CT</b> · ให้ resuscitation + broad-spectrum antibiotic + PPI ทันที {R(p,"WSES")}',
    f'<b>ผ่าตัดเป็นการรักษาหลัก</b> · non-operative ทำได้เฉพาะรายเลือกที่ stable ไม่มี generalized peritonitis และ contrast ไม่รั่ว · <span class="imp">laparoscopic repair</span> ได้ถ้ามีความชำนาญและผู้ป่วย stable {R(p,"WSES")}',
    f'แผลเล็ก (&lt;2 cm) → <b>simple closure ± omental patch</b> · แผลใหญ่ / สงสัยมะเร็ง → พิจารณา resection · biopsy gastric ulcer ทุกราย · หลังผ่าตัดตรวจและกำจัด H. pylori {R(p,"WSES")}')))
h.append(box('Task 2 UGIB · Peptic ulcer bleeding', 'S p31–32 · H p24', ul(
  f'{hw("Upper GI bleeding แยกกับ LGIB ที่ ligament of Treitz")} · {hw("chronic bleed: อาจมีเหนื่อยหอบ/หน้ามืด")}',
  f'อาการ: <b>coffee ground</b> · <b>melena</b> {hw("ถ่ายดำ")} (chronic, inactive bleeding) · severe: <b>hematemesis</b> {hw("อาเจียนเป็นเลือด")}, <b>hematochezia</b> {hw("ถ่ายแดง · DDx LGIB")}',
  f'<span class="imp">Most common complication และ most common cause of ulcer-related death</span> {S} กับ H',
  f'Rx: resuscitation · NG lavage {hw("= decompression")} (Dx, activeness, decompress stomach) · H2 blocker or <b>PPI IV</b> · <b>endoscopic Rx</b> {hw("[ฉีด/หนีบ/จี้ปิด — อ่านไม่ชัด]")}',
  f'<b>Surgery</b>: massive bleeding (<span class="imp">&gt;4–6 u</span>) · unresponsive to non-op Mx · <span class="imp">recurrent bleeding</span> · DU: stop bleeding + acid reducing · GU: gastrectomy ± acid reducing {hw("ต้อง acid reducing หมด (= PPI vs vagotomy)")}')
  + gls('ACG 2021 · ESGE 2021 · WSES 2020 · UGIB/ulcer bleeding',
    f'<b>ไม่แนะนำใส่ NG aspiration/lavage เป็นประจำ</b> (ไม่ช่วยผลการรักษา) {R(p,"ESGE21")} {D} กับสไลด์',
    f'ก่อนส่องให้ <b>PPI ขนาดสูง IV</b> · ไม่ใช้ H2 blocker รักษาเลือดออก · restrictive transfusion (Hb &lt;7 g/dL, โรคหัวใจ 8) · ส่องกล้องภายใน 24 ชม. {R(p,"ACGUGIB")} {R(p,"ESGE21")}',
    f'เลือดออกซ้ำ → <b>ส่องซ้ำ</b> → ล้มเหลว → <b>TAE (angioembolization)</b> → ล้มเหลว/ไม่มี TAE → ผ่าตัด {R(p,"ACGUGIB")} {R(p,"WSES")} {D} กับสไลด์ที่ให้ recurrent bleeding → surgery ทันที')))
h.append(box('Algorithm UGIB (สไลด์)', 'S p33–34', '<div class="two">' + fig('l13_s33') + fig('l13_s34') + '</div>' + ul(
  'Patient presents with UGIB → <b>initial assessment &amp; management</b>: evaluate airway, breathing, circulation · ถามประวัติ hematemesis/melena/hematochezia · เจาะ CBC, chemistry, PT/PTT, type &amp; crossmatch',
  '<b>Stable</b> → workup (ถ้า active bleeding ให้ large-bore IV ก่อน) · <b>Unstable</b> → O₂ mask/ETT + ventilator · large-bore IV + lactated Ringer · Foley วัด urine output · ให้เลือด · แก้ coagulopathy',
  f'Stabilize → workup · <b>remains unstable</b> {hw("→ Sx")} → OR เพื่อวินิจฉัยและรักษาในห้องผ่าตัด → manage specific source',
  '<b>Chronic DU / GU</b> → (Figure 1) · <b>esophageal / gastric varices</b> → (Figure 2)',
  '<b>Mallory-Weiss tear</b>: ส่วนใหญ่หยุดเอง · ไม่หยุด → endoscopic coagulation · ยังไหล → anterior gastrotomy + เย็บผูกตรงรอยฉีก',
  '<b>Gastric neoplasm</b>: benign → wedge excision · malignant → endoscopic control → หยุด: ตัดแบบ elective · ไม่หยุด: resectable ตัดทันที / unresectable รักษาแบบไม่ผ่าตัด',
  f'<b>Acute hemorrhagic gastritis</b>: หยุด NSAIDs · H2RA/omeprazole/sucralfate/antacid · anti-H. pylori (ตัวอย่างในสไลด์: metronidazole + omeprazole + clarithromycin 14 วัน) · ไม่หยุด → IV somatostatin (250 µg bolus แล้ว 250 µg/hr) หรือ intra-arterial vasopressin (10 U/hr) → ไม่ได้ผล → total/near-total gastrectomy · {D} regimen กำจัด H. pylori ปัจจุบันใช้ <b>bismuth quadruple 14 วัน</b>เป็นหลัก {R(p,"ACGHP")}'), N))
h.append(box('Pyloroplasty เพื่อหยุดเลือด DU', 'S p35', fig('l13_s35') + ul(
  '(a) stay sutures แล้วเปิด pylorus ตามยาว · (b) เห็นเส้นเลือดที่ออก เย็บลึกเหนือและใต้จุดเลือดออกเพื่อผูก <b>gastroduodenal artery</b> แล้วปิดรอยเปิดตามขวาง (interrupted) หรือใช้ TA stapler',
  f'ลายมือ {hw("Duodenum มัก perforate ด้านหน้า → เปิดเข้าไปถึง vss เพื่อเย็บปิด")} · {CHK} รูปนี้เป็นการหยุดเลือดจาก <b>posterior DU</b> (กัด GDA) ไม่ใช่ perforation — anterior = perforation, posterior = bleeding (S p26)',
  f'{G} เย็บ 3 จุด (เหนือ ใต้ และ transverse pancreatic branch ด้านใน) เพื่อปิดเลือดที่ไหลมาจากทั้ง 2 ทาง · ปิดตามขวางแบบ Heineke-Mikulicz จึงเป็น drainage ไปในตัว'), N))
add('L13-6', 'GU/DU · perforation · bleeding', '\n'.join(h))

# ---------------------------------------------------------------- L13-7
p = page(d, 'L13-7')
h = []
h.append(box('Malignant neoplasm ของกระเพาะ', 'S p38 · H p26, p30', ul(
  '1) <span class="imp">Adenocarcinoma 95%</span> · 2) <span class="imp">Lymphoma 4%</span> · 3) Malignant GIST 1% ' + hw('targeted therapy = imatinib (tyrosine kinase inhibitor)') + ' · 4) Others',
  f'{S} กับ H p26 (ส่วนใหญ่เป็น adenocarcinoma)'), N))
h.append(box("Borrmann's classification (advanced gastric cancer)", 'S p39', fig('l13_s39') + ul(
  f'<b>Type 1</b> protruded (polypoid) {hw("= asymptomatic")} → {hw("develop ↓")}',
  f'<b>Type 2</b> ulcerated ขอบชัด {hw("= m/c: ulcer + central necrosis → เริ่มแสดงอาการ e.g. UGIB, pain")}',
  '<b>Type 3</b> ulcerated + infiltrative ขอบไม่ชัด',
  f'<b>Type 4</b> diffuse infiltrative {hw("= linitis plastica: [แข็ง]ไปหมด")} · type 2–4 = depressed type',
  f'{CHK} "type 2 = most common" มาจากลายมือ · ข้อมูลญี่ปุ่นหลายชุดรายงาน <b>type 3</b> พบบ่อยที่สุดใน advanced cancer',
  f'{G} Borrmann ใช้กับ <b>advanced</b> cancer · ส่วน early gastric cancer ใช้ Japanese type 0 (I, IIa, IIb, IIc, III) ตาม H p26 · JGCA นับ Borrmann type 0 = superficial, type 5 = จัดกลุ่มไม่ได้'), N))
h.append(box(f'Pattern of spreading {STAR}', 'S p41, p44', ul(
  f'<b>Direct spread</b> {hw("= T")}',
  f'<b>Lymphatic spread</b> {hw("= N")}: perigastric LN → paraaortic LN → thoracic duct → <span class="imp">Lt. supraclavicular LN (Virchow\'s node)</span>',
  f'<b>Transcoelomic spread</b> {hw("= spread ตาม peritoneal cavity")} → ascites · cul-de-sac → <span class="imp">Blumer\'s shelf</span> {hw("= rectal shelf → คลำได้จาก PR")} · ovary → <span class="imp">Krukenberg\'s tumor</span>',
  f'<b>Blood-borne metastasis</b> {hw("= M")}: portal v. → <b>liver</b>',
  f'Sister Mary Joseph\'s nodule (S p44) {hw("malignant metastatic umbilical nodule")} · {G} Irish node = Lt axillary LN · ทั้งหมดบอกว่าเป็นระยะลุกลาม'), N))
h.append(box(f'Staging ตามสไลด์ {W3}', 'S p42–43 · H p28, p30', ul(
  f'ดาวแดง 3 ดวงมุมขวาบน = must know ทั้งหน้า · {hw("☆☆ clinical staging: บอก management · pathological staging: บอก prognosis")} · {hw("*EUS บอกได้ว่าติดลึกแค่ไหน")}',
  f'ตาราง TNM (Table 25-21) และ stage group ในสไลด์เป็น<b>ฉบับเก่าชุดเดียวกับ handout</b> {S} → ใช้ <b>AJCC 8</b> ตามตารางเทียบด้านบนของหน้านี้ {X}',
  f'รูปผนัง (Fig 24-13): {hw("lymphatic อยู่ใต้ MM → ใช้ MM แบ่ง superficial–deep")} · {hw("⇒ Tis → in mucosa = intraepithelial tumor (ไม่ถึง lamina propria) → ไม่ถึง lymphatic channel = ไม่ไป LN")}',
  f'Stage 0 / IA (Tis, T1 N0) วงไว้ {hw("= early gastric cancer (local tx พอ)")} · {CHK} early gastric cancer = T1 <b>ไม่ว่า N</b> (H p26) และ local/endoscopic treatment ใช้ได้เฉพาะรายที่เข้าเกณฑ์ (ดูกล่อง early gastric cancer)'), N))
h.append(box('Manifestation', 'S p44 · H p16–17', ul(
  f'{hw("อาการอาจคล้าย PU")}',
  'อายุ 40–70 ปี · low socioeconomic · ชาย &gt; หญิง · <span class="imp">FH of CA stomach, colon</span>',
  'Early → asymptomatic · ประเทศอุบัติการณ์สูง (ญี่ปุ่น) → screening endoscopy ใน<b>อายุ &gt;35</b>',
  f'Late: <span class="imp">dyspepsia with alarm symptoms, bleeding, obstruction, perforation</span> · metastasis → Virchow\'s node, Blumer\'s shelf, Sister Mary Joseph\'s nodule {hw("late มาก → มี LN ต่างๆ")}',
  f'{S} กับ H p17 (อายุ &gt;50, น้ำหนักลดเร็ว)')
  + gls('Japanese Guidelines for Gastric Cancer Screening (update 2018)',
    f'ญี่ปุ่นแนะนำ screening ด้วย endoscopy หรือ radiography ใน<b>อายุ ≥50 ปี</b> ทุก 2–3 ปี {R(p,"JSCR")} {D} กับ "อายุ &gt;35" ในสไลด์')))
h.append(box('Early gastric cancer · EMR', 'S p45–46 · H p26', ul(
  f'Adenocarcinoma จำกัดที่ mucosa + submucosa (Tis, T1) {hw("→ อาจ asymptomatic ∴ surveillance จึงสำคัญ")}',
  f'<span class="imp">LN metastasis &lt;10%</span> → limited excision ในบางกลุ่ม (<b>endoscopic mucosal resection</b>) {S} กับ H p26',
  'Standard Rx → <b>gastrectomy + limited LN dissection</b>',
  'S p46 EMR (injection and snare): ฉีด saline ยก submucosa → biopsy forceps จับยก → snare ตัด → เอาก้อนออก (รูปเดียวกับ H p26)')
  + gls('JGCA 7th ed. 2025 · Ono 2021 (ESD/EMR)',
    f'<b>ESD เป็นวิธีหลัก</b> (ตัดได้ชิ้นเดียว en bloc แม้ก้อนใหญ่) · EMR ใช้กับก้อนเล็ก {R(p,"ONO")} {D} กับสไลด์ที่เขียนแค่ EMR',
    f'<b>Absolute indication</b> ของ endoscopic resection: cT1a differentiated-type ไม่มีแผล (UL0) ทุกขนาด · differentiated-type มีแผล (UL1) ≤3 cm · undifferentiated-type UL0 ≤2 cm {R(p,"ONO")} {R(p,"JGCA")}',
    f'ไม่เข้าเกณฑ์ (เช่น cT1b, ขนาดเกิน, ตัดแล้วไม่ curative) → gastrectomy + D1/D1+ lymphadenectomy {R(p,"JGCA")}')))
h.append(box('Treatment · prognosis ตามสไลด์', 'S p47–48 · H p28, p30', ul(
  '<b>Surgery = main Rx</b> · localized, resectable → aim for cure → <span class="imp">radical subtotal or total gastrectomy + LN dissection</span>',
  'Advanced, metastasis → <b>palliative resection</b> (↓ อาการ ป้องกันภาวะแทรกซ้อน)',
  'Chemo → stage II, III → 5-FU, LV · Radiation → palliation',
  f'Prognosis ขึ้นกับ <b>staging</b>, cell type · early gastric CA (T1N0M0) → <span class="imp">5-yr survival ~80%</span> · LN metastasis → survival ↓ {S} กับ H p28–30')
  + gls('NCCN Gastric v2.2026 · JGCA 7th ed. 2025 · ASTRO 2025',
    f'Resectable ≥cT2 หรือ N+ → <b>perioperative systemic therapy</b> (FLOT เป็นหลัก · NCCN เพิ่ม durvalumab + FLOT ตาม MATTERHORN) ร่วมกับ gastrectomy + <b>D2 lymphadenectomy</b> {R(p,"NCCNG")} {D} กับ "5-FU, LV" ในสไลด์',
    f'ญี่ปุ่น: D2 สำหรับ cT2 ขึ้นไปหรือ cN+ · adjuvant chemotherapy (เช่น S-1, CAPOX) หลังผ่าตัดใน pStage II–III · ไม่ทำ reduction gastrectomy ใน stage IV ที่ไม่มีอาการ (REGATTA) {R(p,"JGCA")} {D} กับ "advanced → palliative resection" ทุกราย',
    f'Radiation: ใช้ palliation (เลือดออก อุดตัน ปวด) · chemoradiation หลังผ่าตัดพิจารณาเมื่อเลาะต่อมน้ำเหลืองน้อยกว่า D2 {R(p,"ASTRO")}',
    f'Early gastric cancer ที่รักษาตามมาตรฐานมี 5-yr survival &gt;90% ในข้อมูลญี่ปุ่น {R(p,"JGCA")} {D} กับ ~80%')))
h.append(box('GIST ตามสไลด์', 'S p49–53 · H p30', fig('l13_s49', 'S p49 (ลายมือหลายสี)') + ul(
  f'GIST {hw("= Gastrointestinal stromal tumor (submucosa) · มาจาก stromal cell (mesenchymal tumor)")} · <b>most common spindle cell tumor ของกระเพาะ</b> &gt; leiomyoma, lipoma',
  f'จาก <span class="imp">interstitial cell of Cajal</span> ใน muscularis propria (intestinal pacemaker) · {STAR} <span class="imp">CD117 (c-kit) +</span> {hw("→ มี targeted therapy ทำงานจำเพาะ → imatinib")} {S} กับ H p30',
  f'Submucosal tumor {hw("ผิวยังดูดี")} (S p51 {hw("ก้อนดันขึ้นมา → ผิวยังดูปกติอยู่")}) · small → asymptomatic {hw("incidental finding · มาด้วยปวดท้องเป็นๆ หายๆ · ถ้ากินยาไม่หาย ต้อง scope ดู")}',
  f'Large → {STAR} <b>bleeding</b>, obstruction {hw("ถ้าไม่ Tx 30% แตก @ central necrosis → bleed → ถ่ายดำ อ้วกเลือด")} · gross photo {hw("cervix sign · ก้อนบน mucosa ปกติ · central necrosis → แตก → เลือดออก")}',
  f'Malignant → metastasis {hw("ไม่ค่อยไป LN")} · slow growing · malignant potential ขึ้นกับ size + nuclear grade (สไลด์) / size + mitotic figure (H p30)',
  f'Dx → endoscope + Bx (submucosal mass) · {hw("EUS → CT scan")}',
  f'Rx → gastrectomy {hw("en-bloc")} → chemo: {STAR} <b>imatinib</b> {hw("เป็น tyrosine kinase inhibitor")} ใน unresectable หรือ recurrent malignant GIST {hw("→ targeted therapy")}',
  f'Histology spindle cell (S p52) {hw("~ leiomyosarcoma")} · {hw("เป็น spindle cell ~ leiomyoma ⇒ แยกด้วย immunochem")} · {G} ย้อม CD117 (KIT) และ DOG1 บวก · leiomyoma/leiomyosarcoma ย้อม desmin/SMA บวก แต่ KIT ลบ')
  + gls('ESMO–EURACAN–GENTURIS 2022 · NCCN GIST v1.2026',
    f'Gastric GIST ≥2 cm → ตัดออก · &lt;2 cm อาจติดตามด้วย EUS · ผ่าตัด <b>R0 en bloc ระวังก้อนแตก</b> · <b>ไม่ต้องเลาะต่อมน้ำเหลือง</b>เป็นประจำ (ยกเว้น SDH-deficient) {R(p,"ESMOGIST")} {S} กับลายมือ "ไม่ค่อยไป LN"',
    f'ประเมิน risk จาก <b>ขนาด + mitotic rate + ตำแหน่ง</b> (gastric ดีกว่า small bowel) และก้อนแตก {R(p,"ESMOGIST")} {D} กับสไลด์ที่เขียน nuclear grade',
    f'<span class="imp">Adjuvant imatinib 3 ปี</span> ในรายเสี่ยงกลับเป็นซ้ำสูง · ดูชนิดการกลายพันธุ์ก่อน (PDGFRA D842V ไม่ตอบ imatinib · KIT exon 9 ใช้ขนาด 800 mg ในโรคระยะลุกลาม) {R(p,"ESMOGIST")} {R(p,"NCCNGIST")}',
    f'Unresectable/metastatic → imatinib เป็น first-line · ก้อนใหญ่ตัดยาก → neoadjuvant imatinib ให้ยุบก่อนผ่าตัด {R(p,"NCCNGIST")}')))
h.append(box('Gastric lymphoma', 'S p54–55', ul(
  f'<b>2°</b> → systemic disease, more common {hw("พบบ่อย")} · <b>1°</b> → เกิดในกระเพาะ (<span class="imp">most common 1° GI lymphoma</span>)',
  'กระเพาะปกติ<b>ไม่มี lymphatic tissue ใน mucosa</b> (ต่างจาก small bowel) → <span class="imp">chronic gastritis, H. pylori → MALT → MALT lymphoma</span> (NHL, B cell, low–high grade)',
  'Clinical ~ CA stomach ± systemic symptoms ของ lymphoma (fever, lymphadenopathy)',
  'Dx: endoscope + Bx (submucosal mass) · <span class="imp">R/O 2° gastric lymphoma (CT chest, abdomen, BM Bx)</span> ก่อนวินิจฉัย 1°',
  f'Rx: systemic chemo ใน 2° · gastrectomy → 1° · {hw("surgery → complication (bleeding, perforation)")}')
  + gls('ESMO MZL 2020 · BSH 2024',
    f'Gastric MALT lymphoma: <span class="imp">กำจัด H. pylori ให้ทุกราย</span>เป็นการรักษาแรก · ระยะต้นหายสมบูรณ์ได้เกินครึ่ง · t(11;18) ตอบสนองน้อย {R(p,"ESMOMZL")} {R(p,"BSHMZL")}',
    f'ไม่หายหลังกำจัดเชื้อ / H. pylori ลบ → <b>involved-site radiotherapy</b> · ระยะลุกลาม → rituximab ± chemo · <b>ไม่ผ่าตัด</b>เป็นการรักษาหลักแล้ว ผ่าตัดเฉพาะภาวะแทรกซ้อน {R(p,"ESMOMZL")} {D} กับ "gastrectomy → 1°" ในสไลด์'), N))
add('L13-7', 'Borrmann · spread · Rx · GIST · lymphoma', '\n'.join(h))

# ---------------------------------------------------------------- L13-8 / L13-9 bariatric
p = page(d, 'L13-8')
h = []
h.append('<div class="warn">ลายมือที่หัวข้อ <b>Task 6 (Morbid Obesity)</b> S p62 เขียนว่า <b>"(ไม่ออกสอบ)"</b> · เก็บเนื้อหาไว้ครบตามกติกา (รูปผู้ป่วย S p62 ไม่ได้ใช้)</div>')
h.append(box(f'Candidates for bariatric surgery {STAR}', 'S p63–64 · H p29, p31', ul(
  'Global status (S p63): % obesity (BMI ≥30) เพิ่มต่อเนื่อง 1975–2010 · USA สูงสุด ~35% · England, Australia ~25%',
  'BMI ≥40 หรือ ≥35 + significant obesity-related comorbidities · acceptable operative risk · documented failure of non-surgical weight loss · psychologically stable, realistic expectations · well-informed and motivated · supportive family/social environment · ไม่มี uncontrolled psychotic/depressive disorder · ไม่มี active alcohol/substance abuse',
  f'{hw("★★ *ของไทย*")} <span class="imp">Asia: BMI ≥37.5 หรือ BMI ≥32.5 + co-morbidity</span> {hw("e.g. DM, HTN, DLP, sleep apnea · ∵ fat ในช่องท้อง Asia เยอะกว่า Europe")} · ตะวันตก {hw("BMI ≥40 หรือ ≥35 + co-morbidity")}',
  f'{S} กับ NIH 1991 ใน H p29, p31 (ตะวันตก) · เกณฑ์เอเชียมีเฉพาะสไลด์')
  + gls('ASMBS/IFSO 2022 · ADA Standards of Care 2026',
    f'ASMBS/IFSO 2022: BMI ≥35 แนะนำผ่าตัดไม่ว่ามีโรคร่วมหรือไม่ · 30–34.9 + metabolic disease พิจารณา · <b>คนเอเชีย: BMI ≥25 ถือเป็น clinical obesity และ BMI ≥27.5 ควรได้รับการเสนอผ่าตัด</b> {R(p,"ASMBS")} {D} กับเกณฑ์ไทย 37.5/32.5 ในสไลด์',
    f'ADA 2026: metabolic surgery เป็นทางเลือกรักษา T2D ที่ BMI ≥30 (<b>≥27.5 ในคนเอเชีย</b>) {R(p,"ADA")}')))
h.append(box('Obesity Clinic Protocol โรงพยาบาลจุฬาลงกรณ์ (CHULA BMI)', 'S p65 · H p31–32', fig('l13_s65') + ul(
  '1st visit → coordinating nurse → medical registration → body composition analysis → obesity group activity (แลกประสบการณ์ ความรู้โภชนาการ) + dietitian, psychologist, sport scientist',
  'พบ metabolic surgeon (Hx/PE, ประเมินข้อบ่งชี้) · obesity internist (คุมโรคร่วม, medical Rx) · nutritional internist · GI internist (LFT, U/S upper abdomen, Fibroscan) · pulmonologist (OSA, sleep clinic, PFT)',
  'Multidisciplinary team ตัดสิน: No → conservative · Yes → preoperative preparation',
  'Preop: <span class="imp">EGD + H. pylori evaluation</span> → ผิดปกติ: pH monitoring, upper GI study, esophageal manometry · ปกติ: เลือกหัตถการ อธิบาย risk/benefit ดู BMI/โรคร่วม/ความต้องการผู้ป่วย',
  f'<span class="imp">BMI ≥50 → admit ก่อนผ่าตัด 1–2 สัปดาห์</span> ลดน้ำหนักเร็ว 5–10% ด้วย very low calorie diet 800 kcal/วัน · BMI &lt;50 → ผ่าตัดได้เลย · {D} handout H p32: low carbohydrate 6 สัปดาห์ (ตับเล็กลง 20%) หรือ acute weight loss 2 สัปดาห์'), N))
add('L13-8', 'candidates · CHULA protocol', '\n'.join(h))

p = page(d, 'L13-9')
h = []
h.append(box('Operations for morbid obesity (สไลด์)', 'S p66–68 · H p32–34', '<div class="two">' + fig('l13_s66') + fig('l13_s68') + '</div>' + ul(
  f'<b>Gastric restriction</b>: sleeve gastrectomy · gastric banding {hw("→ ไม่ทำแล้ว")}',
  '<b>Combination</b>: Roux-en-Y gastric bypass · <b>Malabsorption</b>: jejunoileal (J-I) bypass · biliopancreatic diversion (BPD)',
  f'S p67 gastric banding ทางกล้อง (retrogastric tunnel) · S p68 sleeve: ตัดตามแนว lesser curve ด้วย stapler เหลือกระเพาะเป็นท่อ {S} กับ H p33–34',
  f'{D} handout ปี 2554 ยังให้ banding เป็นหัตถการหลัก · ปัจจุบันเลิกทำเพราะน้ำหนักกลับและต้องผ่าตัดซ้ำบ่อย — sleeve และ RYGB เป็นหัตถการหลัก {R(p,"ASMBS")}'), N))
h.append(box(f'Metabolic &amp; bariatric surgery: how it works — gut–brain axis {W3}', 'S p69 · S p1–2', fig('l13_s69') + '''
<table class="fx"><tr><th>หลังผ่าตัด</th><th>Ghrelin</th><th>CCK</th><th>GLP-1</th><th>PYY</th><th>NF-1</th></tr>
<tr><td>Sleeve gastrectomy</td><td><span class="imp">↓</span></td><td>↑</td><td>↑</td><td>↑</td><td>↓?</td></tr>
<tr><td>Roux-en-Y gastric bypass</td><td>?</td><td>↑</td><td>↑</td><td>↑</td><td>↓</td></tr></table>''' + ul(
  '<b>Anorexigenic pathway (food intake ↓)</b>: GIT ปล่อย PYY, GLP-1, CCK (ผ่าน blood–brain barrier และ vagal afferent → NTS) → arcuate nucleus (ARC) <b>POMC/CART ↑, NPY/AgRP ↓</b> → PVN/LHA <b>MC3/4R ↑</b>',
  f'<b>Orexigenic pathway (food intake ↑)</b>: <span class="imp">ghrelin</span> → ARC POMC/CART ↓, NPY/AgRP ↑ → PVN/LHA Y1 ↑, MC3/4R ↓ · {hw("ghrelin = hormone เพิ่มความหิว เพิ่ม food intake ∴ ถ้าจะลดน้ำหนักอย่างถาวร [แค่อดอาหาร] → yoyo effect")}',
  f'GLP-1 ไฮไลต์ไว้ · S p2 {hw("GLP-1 → ลด wt ได้ 2x%")}',
  f'{G} ลดอาหารอย่างเดียว ร่างกายเพิ่ม ghrelin และลด PYY/GLP-1 จึงหิวและน้ำหนักกลับ (yoyo) · หลังผ่าตัดสัญญาณเปลี่ยนไปทางอิ่ม (ghrelin ↓ จากตัด fundus ใน sleeve, GLP-1/PYY ↑ เพราะอาหารถึงลำไส้ส่วนปลายเร็ว) น้ำหนักจึงลดได้นาน และน้ำตาลดีขึ้นก่อนน้ำหนักลด · ยากลุ่ม GLP-1 RA (semaglutide ลด ~15%) และ GIP/GLP-1 RA (tirzepatide ลด ~20%) เลียนแบบกลไกนี้'), N))
h.append(box('ภาวะแทรกซ้อนที่ลายมือเน้น: dumping · marginal ulcer', 'S p69 (ลายมือ)', ul(
  f'{hw("* dumping syndrome: เจอเมื่อตัด e.g. gastric bypass surgery · LES ป้องกัน reflux · pylorus ทำหน้าที่ควบคุมขนาด particle ก่อนลงต่อ (ถ้ามี pylorus → ไม่เกิด dumping) · เลี่ยง carbo")}',
  f'ภาพแปะในลายมือ: เหตุผลที่ควรลดคาร์โบไฮเดรตใน dumping — ลดอาการ early dumping · ลดอาการ late dumping (hypoglycemia) · ลดความเสี่ยงน้ำตาลต่ำ',
  f'{G} <b>Early dumping</b> (15–30 นาที): อาหาร hyperosmolar ลงลำไส้เร็ว ดึงน้ำเข้าลำไส้ → ปวดท้อง ท้องเสีย ใจสั่น หน้ามืด · <b>Late dumping</b> (1–3 ชม.): น้ำตาลดูดซึมเร็ว → insulin สูงเกิน → hypoglycemia',
  f'{hw("* marginal ulcer")} {G} = แผลที่รอยต่อ gastrojejunostomy (ด้าน jejunum) หลัง RYGB · ปัจจัยเสี่ยง: สูบบุหรี่ NSAIDs · ป้องกัน/รักษาด้วย PPI และงดปัจจัยเสี่ยง')
  + gls('International consensus on dumping syndrome 2020',
    f'รักษาแรก = <b>ปรับอาหาร</b>: กินมื้อเล็กบ่อย เลี่ยงน้ำตาลเชิงเดี่ยว เพิ่มใยอาหาร/โปรตีน แยกน้ำออกจากมื้ออาหาร · late dumping ไม่ดีขึ้นใช้ <b>acarbose</b> · ดื้อต่อการรักษาใช้ somatostatin analogue {R(p,"DUMP")}')))
add('L13-9', 'operations · gut–brain axis · dumping', '\n'.join(h))

# ---------------------------------------------------------------- new page L13-11 GOO
np_ = {'id': 'L13-11', 'title': 'Gastric outlet obstruction · SMA syndrome · Billroth I/II', 'topics': ['Stomach & Duodenum'], 'rev': 1, 'upd': UPD, 'html': '', 'refs': []}
p = np_
R(p, 'SL')
h = []
h.append(f'<div class="iointro"><b>หน้าใหม่ 15 พ.ย. 2026 — มีเฉพาะในสไลด์ (S p56–61)</b> · GOO = vomiting หลังอาหาร ไม่มี bile · <span class="imp">hypokalemic hypochloremic metabolic alkalosis + paradoxical aciduria</span> · Rx: <span class="imp">0.9% NaCl</span> + NG decompression</div>')
h.append(box(f'Task 4 Gastric outlet obstruction {STAR}', 'S p59–61 · S p2, p20, p69 (ลายมือ)', ul(
  f'<span class="imp">Vomiting after meal</span> {hw("content ไม่มี bile")} (<b>usually after dinner</b> {hw("∵ food สะสมมาตั้งแต่เช้า")})',
  f'สาเหตุจาก PUD: <b>chronic DU, pyloric/prepyloric ulcer</b> → fibrosis + deformity {hw("→ stricture")} · <b>acute PU</b>: edema, pyloric spasm',
  '<b>Non-bilious vomiting + food particle</b> (หลังกระเพาะเต็ม) · อาเจียนแล้ว<b>แน่นท้องดีขึ้น</b>',
  f'ตรวจ: visible stomach + peristalsis · <span class="imp">splashing sound</span> {hw("= succussion splash +ve")}',
  f'<span class="imp">Dehydration, hypokalemic, hypochloremic alkalosis</span> {hw("∵ เสีย HCl, K จาก stomach")}',
  f'{STAR} Dehydration ↑ → <b>aldosterone ↑</b> → Na⁺ reabsorption ↑ → <b>K⁺ &amp; H⁺ excretion</b> → <span class="imp">"Paradoxical aciduria"</span> {hw("= alkalosis + aciduria → uncompensated[?] dehydration")} · ข้อความพิมพ์ S p20: {hw("Paradoxical aciduria ที่ไต ขับกรดเพื่อ preserve Na")}',
  f'Rx → <span class="imp">IV resuscitation (0.9% NaCl)</span> {STAR} · NG decompression · antacid · ลายมือ S p69 {hw("paradoxical aciduria ให้ NaCl 0.9% (คนไข้อ้วกเยอะ, ฉี่เป็น acid)")}',
  f'{G} ลำดับกลไก: เสีย HCl → metabolic alkalosis + hypochloremia · เสียน้ำ → aldosterone ↑ ดูด Na⁺ กลับโดยแลก K⁺ (hypokalemia) · พอ K⁺ หมด ไตต้องแลก H⁺ แทน → ปัสสาวะเป็นกรดทั้งที่เลือดเป็นด่าง · แก้ด้วย <b>NaCl 0.9% (ให้ Cl⁻ และน้ำ)</b> แล้วเติม <b>KCl เมื่อปัสสาวะออก</b> · ส่อง EGD หาสาเหตุเมื่อ resuscitate แล้ว',
  f'{G} ผู้ใหญ่ปัจจุบัน GOO จาก<b>มะเร็ง</b> (กระเพาะ, ตับอ่อน) พบบ่อยกว่าจาก PUD จึงต้อง EGD + biopsy เสมอ · S p2 {hw("HCl ถ้า obstruct → เสีย HCl ออก → dehydrate")}')
  + gls('ASGE 2021 · gastroduodenal obstruction',
    f'Benign (PUD) → ตรวจและกำจัด H. pylori + PPI · หยุด NSAIDs · <b>endoscopic balloon dilation</b> ก่อน · ไม่ได้ผล → ผ่าตัด {R(p,"ASGEGOO")}',
    f'Malignant → enteral stent (คาดว่ามีชีวิตสั้น) หรือ gastrojejunostomy ผ่าตัด/ผ่าน EUS (คาดว่ามีชีวิตนานกว่า) {R(p,"ASGEGOO")}')))
h.append(box('SMA syndrome', 'S p56', fig('l13_s56') + ul(
  f'{hw("duodenum โดนบีบโดย SMA กับ abdominal aorta → obstruction")} · GOO จาก <b>SMA compress duodenum</b> {hw("duodenal obstruction")}',
  'ปัจจัย: <b>malnutrition</b>, body cast patient (↓ angle ของ SMA–aorta)',
  'Rx → correct cause → surgery → <b>bypass</b>',
  f'{G} บีบ <b>duodenum ส่วนที่ 3</b> · ไขมันรอบ SMA หายจากน้ำหนักลดเร็ว / ใส่เฝือกตัว / หลังผ่าตัดกระดูกสันหลัง → มุม SMA–aorta แคบ (&lt;22–25° จากปกติ ~38–65°) · อาการ: อาเจียนมี bile, อิ่มเร็ว, นอนคว่ำหรือนอนตะแคงซ้ายดีขึ้น · Dx: CT angiography · Rx: ให้อาหาร (NJ tube/TPN) ให้ไขมันกลับมาก่อน ไม่ได้ผล → <b>duodenojejunostomy</b> (หรือ Strong procedure ตัด ligament of Treitz)'), N))
h.append(box('Gastrectomy reconstruction: Billroth I / II', 'S p57–58', '<div class="two">' + fig('l13_s57') + fig('l13_s58') + '</div>' + ul(
  f'<b>Billroth I</b> {hw("= gastroduodenostomy")} · triangular stitch ตรงมุมรอยต่อ',
  f'<b>Billroth II</b> {hw("= gastrojejunostomy")} (ปิด duodenal stump แล้วต่อกระเพาะกับ jejunum)',
  f'{G} B-I ใกล้สรีระปกติ แต่ทำได้เมื่อ duodenum ยืดมาถึงโดยไม่ตึง · B-II ใช้เมื่อ duodenum ทำไม่ได้ (แผล/ก้อนที่ duodenum) — ภาวะแทรกซ้อนเฉพาะ: duodenal stump leak, afferent loop syndrome, bile reflux gastritis · ทั้งคู่ตัด pylorus จึงเกิด dumping ได้ (ดู L13-9) · Roux-en-Y ลด bile reflux · <b>retained gastric antrum</b> หลัง B-II ทำให้ gastrin สูง (H p15)'), N))
p['html'] = '\n'.join(h) + '\n'
pages = L['pages']
idx = [i for i, x in enumerate(pages) if x['id'] == 'L13-8'][0]
if not any(x['id'] == 'L13-11' for x in pages):
    pages.insert(idx, np_)

# ---------------------------------------------------------------- L13-10 high-yield
p = page(d, 'L13-10')
h = []
h.append(box('High-yield จากสไลด์', 'S p1–69', '<div class="mn">' + ''.join(f'<div>{x}</div>' for x in [
  '<b>Must know (ดาวแดง):</b> ★★★ Staging (S p42) · ★★★ gut–brain axis (S p69) · ลายมือ ★ physiology, gut–brain axis · ✱ phases กรด, spreading, GOO, candidates, CD117/imatinib',
  '<b>Perforation:</b> DU &gt; GU 7–10× · ต้องผ่าตัดบ่อยสุด · ตอบ ex-lap closure (Graham patch) · free air · RLQ pain จาก paracolic gutter',
  '<b>Bleeding:</b> พบบ่อยสุด + ตายบ่อยสุด · posterior DU (GDA) · surgery: &gt;4–6 u / ไม่ตอบ / ซ้ำ (guideline: ส่องซ้ำ → TAE ก่อน)',
  '<b>GU Johnson:</b> I lesser curve (บ่อยสุด) · II GU+DU · III prepyloric · IV ใกล้ EGJ · II/III กรดสูง',
  '<b>DU:</b> acid hypersecretion · ชาย 2:1 · 95% bulb · หลายแผล → ZE',
  '<b>Vagotomy:</b> ↓BAO 70–80% ↓PAO 50–60% · TV ต้อง drainage · HSV spare antrum · TV + antrectomy recurrence &lt;2%',
  '<b>Receptor → ยา:</b> histamine → H2RA · ACh → vagotomy · gastrin → antrectomy · proton pump → PPI (แรงสุด)',
  '<b>Dyspepsia → EGD (ไทย 2018):</b> อายุ ≥50 · alarm · ไม่ตอบยา',
  '<b>Spread:</b> Virchow (Lt supraclavicular) · Blumer\'s shelf (PR) · Krukenberg (ovary) · Sister Mary Joseph (umbilicus) · portal → liver',
  '<b>Borrmann:</b> 1 polypoid · 2 ulcerated · 3 ulcer-infiltrative · 4 linitis plastica',
  '<b>EGC:</b> mucosa + submucosa ไม่ว่า N · LN &lt;10% · ESD ตามเกณฑ์ · 5-yr ~80% (สไลด์) / &gt;90%',
  '<b>GIST:</b> Cajal · CD117/DOG1 · submucosal · ไม่ไป LN · imatinib (adjuvant 3 ปีในรายเสี่ยงสูง)',
  '<b>Gastric lymphoma:</b> 1° GI lymphoma บ่อยสุด · MALT ← H. pylori → กำจัดเชื้อก่อน · R/O 2° ด้วย CT + BM',
  '<b>GOO:</b> อาเจียนไม่มี bile หลังมื้อเย็น · succussion splash · hypoK hypoCl alkalosis + paradoxical aciduria → NaCl 0.9%',
  '<b>SMA syndrome:</b> D3 ถูกบีบ · น้ำหนักลด/body cast · bypass',
  '<b>Bariatric (ไม่ออกสอบตามลายมือ):</b> ไทยเดิม 37.5 / 32.5 + comorbidity · ปัจจุบันเอเชีย ≥27.5 · BMI ≥50 admit VLCD ก่อน · sleeve ghrelin ↓ · GLP-1/PYY ↑'
]) + '</div>'))
h.append(box('จุดที่สไลด์ ↔ handout ↔ guideline ไม่ตรงกัน', 'สรุป', ul(
  f'{D} NG lavage เป็นประจำ (สไลด์) ↔ ESGE 2021 ไม่แนะนำ',
  f'{D} recurrent bleeding → ผ่าตัด (สไลด์, H) ↔ ACG 2021/WSES: ส่องซ้ำ → TAE → ผ่าตัด',
  f'{D} acid reducing surgery (vagotomy) ↔ ยุค PPI + กำจัด H. pylori ทำเฉพาะแก้ภาวะแทรกซ้อน',
  f'{D} ยากำจัด H. pylori ในสไลด์ (metronidazole + omeprazole + clarithromycin) ↔ ACG 2024 bismuth quadruple 14 วัน',
  f'{D} dyspepsia: ไทย ≥50 ปี (ตรงลายมือ) ↔ ACG/CAG ≥60 ปี',
  f'{D} screening ญี่ปุ่น &gt;35 ปี (สไลด์) ↔ แนวทางญี่ปุ่น ≥50 ปี',
  f'{D} EMR (สไลด์, H) ↔ ESD เป็นหลัก',
  f'{D} chemo 5-FU/LV (สไลด์) ↔ perioperative FLOT ± durvalumab, D2',
  f'{D} gastric lymphoma 1° → gastrectomy (สไลด์) ↔ กำจัด H. pylori / RT · ผ่าตัดเฉพาะภาวะแทรกซ้อน',
  f'{D} GIST malignant potential: nuclear grade (สไลด์) ↔ mitotic figure (H) · guideline ใช้ size + mitosis + site',
  f'{D} bariatric: ไทย 37.5/32.5 (สไลด์) · NIH 1991 (H) ↔ ASMBS/IFSO 2022 เอเชีย ≥27.5 · banding ไม่ทำแล้ว',
  f'{D} preop weight loss: VLCD 800 kcal 1–2 สัปดาห์ใน BMI ≥50 (สไลด์ CHULA) ↔ low carb 6 สัปดาห์ (H)',
  f'{X} Warren and Barry → Warren &amp; Marshall (ทั้งสองไฟล์) · TNM ฉบับเก่า → AJCC 8 (ทั้งสองไฟล์)',
  f'{CHK} ลายมือ S p35 "duodenum perforate ด้านหน้า" กับรูปที่เป็นการหยุดเลือด posterior DU · ลายมือ "Borrmann type 2 พบบ่อยสุด"')))
h.append(box('ข้อควรรู้เกี่ยวกับไฟล์สไลด์', 'S', ul(
  'ไฟล์ <b>L13_Stomach_and_Duodenum_jodx78.pdf</b> 69 หน้า สไลด์ละหน้า (รูปถ่ายจอ + ลายมือน้ำเงิน, แดง และ S p49 ลายมือหลายสีอีกคน) · <span class="cr">S pN</span> = หน้า PDF',
  'สัญลักษณ์: ★★★ แดงมุมขวาบน S p42 (Staging) และ S p69 (gut–brain axis) · ดาวลายมือ S p1, p2, p18, p41, p42, p49–50, p61, p64 · <b>ไม่พบ ❌/🟢 ลูกศรลง</b> (ไม่มีส่วนที่ข้าม)',
  'ลายมือ S p62 "(ไม่ออกสอบ)" ที่ Task 6 Morbid Obesity',
  'S p11, p29 = หน้าเดียวกับ handout · ไม่มี Task 5 ในไฟล์ (ข้ามจาก Task 4 ไป Task 6)',
  'รูปไม่ได้ใช้: ภาพผ่าตัด S p7, รูปผู้ป่วย S p62 · ลายมือที่อ่านไม่ชัดติด [อ่านไม่ชัด] ไว้')))
p['html'] = p['html'].rstrip() + '\n' + INTRO.format(t='สรุปรวม') + '\n' + '\n'.join(h) + '\n'
p['rev'] = p.get('rev', 1) + 1; p['upd'] = UPD
R(p, 'SL')

# ---------------------------------------------------------------- doc meta
L['src'] = ('L13 Stomach and Duodenum ผศ.นพ.สุเทพ อุดมแสวงทรัพย์ — H = handout สแกน 37 หน้า (เอกสารคำสอน 15 มี.ค. 2554, ไม่มีลายมือ) '
            '+ S = สไลด์บรรยาย L13_Stomach_and_Duodenum_jodx78.pdf 69 หน้า (สไลด์ละหน้า + ลายมือ, merge 15 พ.ย. 2026)')
L['upd'] = UPD
L['legend'] = ('<span><span class="imp">ตัวแดง</span> = สำคัญ/ไฮไลต์</span>'
  '<span><span class="chip x">★★★ แดง</span> = ดาวแดง 3 ดวงมุมขวาบนสไลด์ (must know ทั้งหน้า)</span>'
  '<span><span class="star">✱</span> = ดาวลายมือ</span><span><span class="hw">ตัวเอียงม่วง</span> = ลายมือบนสไลด์</span>'
  '<span><span class="chip s">ซ้ำ</span> = สไลด์กับ handout ตรงกัน</span><span><span class="chip n">เฉพาะสไลด์</span> = มีแต่ในสไลด์</span>'
  '<span><span class="chip d">! ต่าง</span> = ต้นฉบับต่างกัน หรือต่างจากแนวทางปัจจุบัน</span><span><span class="chip d">⚠ ตรวจ</span> = ลายมือ/ข้อความที่ควรตรวจซ้ำ</span>'
  '<span><span class="chip x">✏ แก้</span> = แก้ข้อมูลที่ผิดหรือเก่าจากต้นฉบับ</span><span><span class="chip e">เสริม</span> = เพิ่มจากแหล่งอ้างอิง</span>'
  '<span><span class="chip g">📖 อธิบาย</span> = อธิบายเพิ่มจากตำรา/guideline</span><span><span class="chip gl">📘 Guideline</span> = เนื้อหาจาก guideline ล่าสุด (ท้ายกล่อง)</span>'
  '<span><span class="cr">H p4</span> = หน้า PDF ของ handout · <span class="cr">S p12</span> = หน้า PDF ของสไลด์</span>'
  '<span>➕ = เนื้อหาเพิ่ม 15 พ.ย. 2026 (ต่อท้ายเนื้อหาเดิมทุกหน้า + หน้าใหม่ L13-11)</span>')

save('data/io.js', head, d)

# unit heading src
u = open('data/unit_L13.js', encoding='utf8').read()
u = u.replace('"src": "handout Stomach and Duodenum (ผศ.นพ.สุเทพ อุดมแสวงทรัพย์) — ยังไม่มีสไลด์"',
              '"src": "handout Stomach and Duodenum (ผศ.นพ.สุเทพ อุดมแสวงทรัพย์) + สไลด์ L13_Stomach_and_Duodenum_jodx78 (69 หน้า)"')
open('data/unit_L13.js', 'w', encoding='utf8').write(u)
print('ok', [(x['id'], x['rev'], len(x['html']), len(x.get('refs', []))) for x in L['pages']])
