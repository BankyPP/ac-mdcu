# R00.C (เดิม R00 — เปลี่ยนชื่อ 16 พ.ย. 2026) Mossy notes — สรุปลายมือ Gen Sx 16 หน้า → Round I/O R00 (Gen Sx MDCU) · 15 พ.ย. 2026
# รัน: python3 parts/r00_mossy.py  (เพิ่ม/แทน doc R00 ใน data/io.js + entry R00 ใน data/resources.js)
import sys, json, re
sys.path.insert(0, 'tools')
from io_gl import load, save, gsec, GL

UPD = '2026-11-15'
def hw(t): return f'<span class="hw">{t}</span>'
def imp(t): return f'<span class="imp">{t}</span>'
E = '<span class="chip e">เสริม</span>'
MK = '<span class="chip r">must know</span>'
def FIX(t='⚠ แก้'): return f'<span class="warn">{t}</span>'
UPD_ = '<span class="warn">⚠ อัปเดต</span>'
def fig(k, cap=''): return f'<div class="fig">{{{{IMG:{k}}}}}' + (f'<div class="cap">{cap}</div>' if cap else '') + '</div>'
def box(title, rf, body):
    return f'<div class="box"><h3>{title}<span class="ref">{rf}</span></h3>\n<p class="mut">จากไฟล์ R00.C {{{{R:1}}}}</p>\n{body}\n</div>'
def ul(*xs): return '<ul>' + ''.join(f'<li>{x}</li>' for x in xs) + '</ul>'
def gl(src, *items): return gsec(src, '<ul>' + ''.join(f'<li>{GL} {x}</li>' for x in items) + '</ul>')
def src(p): return fig(f'r00_p{p:02d}', f'ต้นฉบับ p{p} (ภาพจากไฟล์ — ไว้เทียบลายมือ)')

SRC = 'R00.C Mossy notes — สรุปลายมือ Gen Sx (ไฟล์ Mossy PDF 16 หน้า, ภาพหน้าจอโน้ตจาก iPad 15 พ.ย. 2026) · ไม่ใช่สไลด์อาจารย์'
REFS = {
 'NCCNBR': ('NCCN Clinical Practice Guidelines in Oncology: Breast Cancer — ฉบับปัจจุบัน (2026): surgical axillary staging, BCT, preoperative systemic therapy', 'https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf'),
 'Z11102': ('Boughey JC, et al. Local recurrence after breast-conserving therapy in patients with multiple ipsilateral breast cancer: results from ACOSOG Z11102 (Alliance). J Clin Oncol 2023;41(17):3184–3193', 'https://doi.org/10.1200/JCO.22.02553'),
 'STG': ('Goldhirsch A, et al. Personalizing the treatment of women with early breast cancer: St Gallen International Expert Consensus 2013. Ann Oncol 2013;24:2206–2223 (Luminal A vs B: Ki-67 cut-off 20%)', 'https://doi.org/10.1093/annonc/mdt303'),
 'PRIME': ('Kunkler IH, et al. Breast-conserving surgery with or without irradiation in early breast cancer (PRIME II, 10-year). N Engl J Med 2023;388:585–594 · Hughes KS, et al. CALGB 9343. J Clin Oncol 2013;31:2382–2387', 'https://doi.org/10.1056/NEJMoa2207586'),
 'AJCCBR': ('AJCC Cancer Staging Manual 8th ed. — Breast (anatomic stage: T3N0 = IIB, T3N1 = IIIA)', None),
 'WSESPU': ('Tarasconi A, et al. Perforated and bleeding peptic ulcer: WSES guidelines. World J Emerg Surg 2020;15:3', 'https://doi.org/10.1186/s13017-019-0283-9'),
 'JGCA': ('Japanese Gastric Cancer Association. Japanese Gastric Cancer Treatment Guidelines 2021 (6th edition). Gastric Cancer 2023;26:1–25', 'https://doi.org/10.1007/s10120-022-01331-8'),
 'MATT': ('Janjigian YY, et al. Perioperative durvalumab in gastric and gastroesophageal junction cancer (MATTERHORN). N Engl J Med 2025;393:217–230 · US FDA approval durvalumab + FLOT 25 Nov 2025', 'https://doi.org/10.1056/NEJMoa2503701'),
 'DYSP': ('Moayyedi PM, et al. ACG and CAG Clinical Guideline: Management of Dyspepsia. Am J Gastroenterol 2017;112:988–1013', 'https://doi.org/10.1038/ajg.2017.154'),
 'ACGFLL': ('Frenette C, et al. ACG Clinical Guideline: Focal Liver Lesions. Am J Gastroenterol 2024;119:1235–1271', 'https://doi.org/10.14309/ajg.0000000000002857'),
 'EASLB': ('European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the management of benign liver tumours. J Hepatol 2016;65:386–398', 'https://doi.org/10.1016/j.jhep.2016.04.001'),
 'AASLD': ('Singal AG, et al. AASLD Practice Guidance on prevention, diagnosis, and treatment of hepatocellular carcinoma. Hepatology 2023;78:1922–1965 (+ LI-RADS CT/MRI v2018)', 'https://doi.org/10.1097/HEP.0000000000000466'),
 'ACGAP': ('Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol 2024;119:419–437', 'https://doi.org/10.14309/ajg.0000000000002645'),
 'ATL': ('Banks PA, et al. Classification of acute pancreatitis—2012: revision of the Atlanta classification and definitions by international consensus. Gut 2013;62:102–111', 'https://doi.org/10.1136/gutjnl-2012-302779'),
 'WATER': ('de-Madaria E, et al. Aggressive or moderate fluid resuscitation in acute pancreatitis (WATERFALL). N Engl J Med 2022;387:989–1000', 'https://doi.org/10.1056/NEJMoa2202884'),
 'PONCHO': ('da Costa DW, et al. Same-admission versus interval cholecystectomy for mild gallstone pancreatitis (PONCHO). Lancet 2015;386:1261–1268', 'https://doi.org/10.1016/S0140-6736(15)00274-3'),
 'AGANP': ('Baron TH, et al. American Gastroenterological Association Clinical Practice Update: Management of Pancreatic Necrosis. Gastroenterology 2020;158:67–75', 'https://doi.org/10.1053/j.gastro.2019.07.064'),
 'HAPAN': ('Löhr JM, et al. United European Gastroenterology evidence-based guidelines for the diagnosis and therapy of chronic pancreatitis (HaPanEU). UEG J 2017;5:153–199', 'https://doi.org/10.1177/2050640616684695'),
 'ESCAPE': ('Issa Y, et al. Effect of early surgery vs endoscopy-first approach on pain in patients with chronic pancreatitis: the ESCAPE randomized clinical trial. JAMA 2020;323:237–247', 'https://doi.org/10.1001/jama.2019.20967'),
 'PBD': ('van der Gaag NA, et al. Preoperative biliary drainage for cancer of the head of the pancreas. N Engl J Med 2010;362:129–137', 'https://doi.org/10.1056/NEJMoa0903230'),
 'NCCNPA': ('NCCN Clinical Practice Guidelines in Oncology: Pancreatic Adenocarcinoma — ฉบับปัจจุบัน (2026)', 'https://www.nccn.org/professionals/physician_gls/pdf/pancreatic.pdf'),
 'EUPCN': ('European Study Group on Cystic Tumours of the Pancreas. European evidence-based guidelines on pancreatic cystic neoplasms. Gut 2018;67:789–804', 'https://doi.org/10.1136/gutjnl-2018-316027'),
 'KYOTO': ('Ohtsuka T, et al. International evidence-based Kyoto guidelines for the management of intraductal papillary mucinous neoplasm of the pancreas. Pancreatology 2024;24:255–270', 'https://doi.org/10.1016/j.pan.2023.12.009'),
 'HSURGE': ('HerniaSurge Group. International guidelines for groin hernia management. Hernia 2018;22:1–165 · Stabilini C, et al. Update of the international HerniaSurge guidelines. BJS Open 2023;7:zrad080', 'https://doi.org/10.1093/bjsopen/zrad080'),
 'WSESH': ('Birindelli A, et al. 2017 update of the WSES guidelines for emergency repair of complicated abdominal wall hernias. World J Emerg Surg 2017;12:37', 'https://doi.org/10.1186/s13017-017-0149-y'),
 'ATA15': ('Haugen BR, et al. 2015 American Thyroid Association Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid 2016;26:1–133 (ส่วน thyroid nodule ยังใช้ฉบับนี้)', 'https://doi.org/10.1089/thy.2015.0020'),
 'BETH': ('Ali SZ, et al. The 2023 Bethesda System for Reporting Thyroid Cytopathology. Thyroid 2023;33:1039–1044', 'https://doi.org/10.1089/thy.2023.0141'),
 'ATA25': ('Ringel MD, et al. 2025 American Thyroid Association Management Guidelines for Adult Patients with Differentiated Thyroid Cancer. Thyroid 2025;35(8):841–985', None),
 'TIRADS': ('Tessler FN, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee. J Am Coll Radiol 2017;14:587–595', 'https://doi.org/10.1016/j.jacr.2017.01.046'),
 'CHEST': ('Douketis JD, et al. Perioperative Management of Antithrombotic Therapy: An American College of Chest Physicians Clinical Practice Guideline. Chest 2022;162:e207–e243', 'https://doi.org/10.1016/j.chest.2022.07.025'),
 'TGCC': ('Yokoe M, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholecystitis. J Hepatobiliary Pancreat Sci 2018;25:41–54 · Okamoto K, et al. TG18 flowchart for acute cholecystitis. 2018;25:55–72', 'https://doi.org/10.1002/jhbp.516'),
 'TGAC': ('Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci 2018;25:17–30 · Miura F, et al. TG18 flowchart for acute cholangitis. 2018;25:31–40', 'https://doi.org/10.1002/jhbp.512'),
 'TGAB': ('Gomi H, et al. Tokyo Guidelines 2018: antimicrobial therapy for acute cholangitis and cholecystitis. J Hepatobiliary Pancreat Sci 2018;25:3–16', 'https://doi.org/10.1002/jhbp.518'),
 'LGIB': ('Sengupta N, et al. Management of Patients With Acute Lower Gastrointestinal Bleeding: An Updated ACG Guideline. Am J Gastroenterol 2023;118:208–231', 'https://doi.org/10.14309/ajg.0000000000002130'),
 'ASGED': ('ASGE Standards of Practice Committee; Pasha SF, et al. The role of endoscopy in the evaluation and management of dysphagia. Gastrointest Endosc 2014;79:191–201', 'https://doi.org/10.1016/j.gie.2013.07.042'),
}

class Pg:
    def __init__(s, keys):
        s.refs = [{'t': SRC}]; s.idx = {}
        for k in keys:
            t, u = REFS[k]; r = {'t': t}
            if u: r['u'] = u
            s.refs.append(r); s.idx[k] = len(s.refs)
    def R(s, k): return '{{R:%d}}' % s.idx[k]

PAGES = []
def add(pid, title, topics, keys, build):
    p = Pg(keys); html = build(p)
    PAGES.append({'id': pid, 'title': title, 'topics': topics, 'rev': 1, 'upd': UPD, 'html': html, 'refs': p.refs})

# ---------------------------------------------------------------- R00-1 Breast
def b1(p):
    h = f'<div class="iointro"><b>Breast cancer — แนวคิดการรักษา</b> ตามโน้ต: แบ่ง <b>early (T1–2 N0 M0)</b> vs <b>locally advanced</b> → เลือกผ่าตัด <b>ฝั่ง breast</b> (mastectomy vs BCT) และ <b>ฝั่ง axilla</b> (SLNB vs ALND) → systemic tx ตาม subtype {p.R("NCCNBR")} · หน้า p1 (หมึกเหลือง) = p2–p3 (พื้นดำ) เนื้อหาซ้ำกันทั้งหมด</div>\n'
    h += box('แนวคิด Breast mass (กรอบในโน้ต)', 'p1 · p3', ul(
        f'{imp("1st หา Clinical Staging ก่อน")} → T? N? M?',
        '— ดูฝั่ง <b>Breast</b> · — ดูฝั่ง <b>Axilla</b> } เลือกอันไหนดี? ขึ้นกับแต่ละ case',
        f'ถ้า <b>Metast</b> (M1) → {imp("Systemic Tx เลย จบ")} {hw("(ผ่าตัดไม่ใช่การรักษาหลัก)")}')
        + '<div class="mn"><div><b class="k">Note ในโน้ต</b> BCT ตามด้วย RT เสมอ · Cf. <b>T3N1</b> จะเป็น <b>Locally Advanced!</b> → <b>Neoadjuvant!</b> (trend ปัจจุบัน) หรือถ้าไม่มี choice (neoadjuvant) ก็ตอบผ่า</div></div>'
        + f'<p>{FIX()} ในโน้ตเขียน "Locally Advance = <b>T3 T4 M0</b>" — ตาม AJCC 8th {p.R("AJCCBR")} <b>T3N0 = stage IIB</b> (operable/early) ยังไม่ใช่ LABC · <b>LABC = stage III</b> = T3N1–3, T4 any N (รวม inflammatory T4d), หรือ any T N2–3 · ตัวอย่างในโน้ต T3N1 (= IIIA) จึงถูกต้อง</p>'
        + f'<p>{FIX("⚠ เพิ่มเงื่อนไข")} "BCT ตามด้วย RT เสมอ" — ถูกเป็นหลักทั่วไป แต่ <b>ละ RT ได้</b>ในผู้สูงอายุ (≥65–70 ปี) ที่ก้อน ≤2–3 cm, N0, ER+ และรับ endocrine therapy ครบ (CALGB 9343, PRIME II — local recurrence สูงขึ้นเล็กน้อย แต่ OS ไม่ต่าง) {p.R("PRIME")}</p>')
    h += box('Early breast cancer (T1–T2 N0 M0)', 'p1 · p2', ul(
        f'Tx: {imp("1st Local Control — Sx 1st")}',
        '<b>Sx in Breast</b> แบ่ง 2 ฝั่ง: Breast และ Axilla (ดูกล่องถัดไป)')
        + f'<p class="mut">{E} ในทางปฏิบัติ: T1–2 N0 ที่เป็น <b>HER2+ หรือ TNBC</b> ขนาด ≥ cT2 (พิจารณาตั้งแต่ cT1c) มัก<b>ให้ neoadjuvant ก่อน</b> เพื่อดู pCR แล้วเลือก adjuvant ต่อ (residual disease → T-DM1 [KATHERINE] / capecitabine [CREATE-X]) — ER+/HER2− ระยะต้นยัง surgery first {p.R("NCCNBR")}</p>')
    h += box('ผ่าตัดฝั่ง Breast: Mastectomy vs BCT', 'p1 · p2', ul(
        '<b>BCT</b> (WE = wide excision) + RT',
        f'<b>Mastectomy</b> ← ข้อบ่งชี้ (Ix) = <b>ContraIx ของ BCT</b> เช่น:<ul><li><b>Pregnancy</b> — {hw("BCT ต้องฉาย Radio")} (ฉาย RT ขณะตั้งครรภ์ไม่ได้)</li><li>พวก <b>BRCA</b></li><li><b>MultiCentric</b> — {hw("หลายก้อน")}</li></ul>')
        + f'<p>{UPD_} เทียบแนวทางปัจจุบัน:</p>' + ul(
        f'<b>Pregnancy</b>: ห้ามฉาย RT ระหว่างตั้งครรภ์ → ไตรมาส 1 มักเลือก mastectomy · <b>ไตรมาส 2–3 ทำ BCS ได้</b> แล้วเลื่อน RT ไปหลังคลอด (มักให้ chemo ระหว่างรอ) — จึงเป็น relative CI ไม่ใช่ห้ามเด็ดขาด {p.R("NCCNBR")}',
        f'<b>BRCA</b>: <b>ไม่ใช่ข้อห้าม BCT</b> — BCT + RT ให้ survival เท่า mastectomy แต่มีความเสี่ยงมะเร็งใหม่ใน breast เดิม/อีกข้างสูง จึงมักคุยเรื่อง risk-reducing (bilateral) mastectomy เป็นทางเลือก',
        f'<b>Multicentric</b>: เดิมเป็น CI · ปัจจุบัน 2–3 ก้อนในเต้าเดียว ทำ BCT ได้ถ้า margin negative + whole-breast RT (ACOSOG Z11102: 5-yr local recurrence 3.1%) {p.R("Z11102")}',
        f'{E} ข้อห้าม BCT ที่ยังใช้: เคยฉาย RT ที่ทรวงอก/เต้านม · <b>diffuse suspicious microcalcifications</b> · margin positive ซ้ำหลังพยายามแล้ว · <b>inflammatory breast cancer</b> · ก้อนใหญ่เทียบกับเต้าจนความสวยรับไม่ได้ (oncoplastic ช่วยได้) {p.R("NCCNBR")}')
        + gl('NCCN Breast (ฉบับปัจจุบัน) · ACOSOG Z11102', f'Multiple ipsilateral breast cancer (2–3 foci) ไม่ใช่ข้อห้ามเด็ดขาดของ BCS อีกต่อไป เมื่อตัดได้ margin negative และฉาย whole-breast RT {p.R("Z11102")}', f'RT เป็นข้อห้ามเด็ดขาดระหว่างตั้งครรภ์ — BCS ในไตรมาส 2–3 แล้ว RT หลังคลอดได้ {p.R("NCCNBR")}'))
    h += box('ผ่าตัดฝั่ง Axilla: SLNB vs ALND ' + MK, 'p1 · p2', ul(
        f'Axilla – ตัดทิ้ง ต่อมน้ำเหลือง (ALND) → {imp("lymphedema → Cellulitis ง่าย!")}',
        f'∴ ปัจจุบัน เจาะ: <b>SLNB</b> (sentinel lymph node biopsy)')
        + '<table class="dz"><tr><th>Clinical node</th><th>ในโน้ต</th></tr>'
        + '<tr><td><b>Clinical Node Neg (cN0)</b><br><span class="mut">ตรวจร่างกาย Neg. / Imaging Neg.</span></td><td>→ ทำ <b>Sentinel biopsy</b> (1st)</td></tr>'
        + f'<tr><td><b>Clinical N1 (cN+)</b><br><span class="mut">เช่น ตรวจ PE เจอ / Imaging เจอ</span></td><td>→ (ยิง) <b>FNA LNs</b> → <b>Neg.</b> = SLNB · <b>Pos.</b> = {imp("ALND ไปเลย")}</td></tr></table>'
        + ul(f'{E} เจาะ LN ใช้ได้ทั้ง US-guided FNA หรือ core needle biopsy {p.R("NCCNBR")}',
             f'{E} SLN บวกไม่ต้อง ALND ทุกราย: cT1–2 cN0 ที่ทำ <b>BCS + whole-breast RT</b> แล้ว SLN บวก 1–2 ต่อม → <b>ไม่ต้อง ALND</b> (ACOSOG Z0011) · mastectomy + SLN บวก 1–2 ต่อม → axillary RT แทน ALND ได้ (AMAROS) {p.R("NCCNBR")}',
             f'{E} ให้ neoadjuvant ใน cN+ แล้วต่อมยุบเป็น ycN0 → SLNB/targeted axillary dissection ได้ (ใช้ dual tracer, ≥3 SLN, clip ต่อมที่เคยบวก) · ถ้ายังบวก → ALND'))
    h += box('Locally advanced breast cancer', 'p1 · p3', ul(
        f'{imp("Chemo 1st!")} ตาม <b>Subtype</b> (neoadjuvant)',
        'post Chemo ทำ <b>BCT</b> หรือ <b>SLNB</b> ก็ได้ (ถ้าตอบสนองดี)',
        f'แต่ไม่ต้องรีบ <b>MRM</b> ไปเลย หรือ <b>ALND</b> ไปเลย {hw("(ลายมืออ่านได้ประมาณนี้ — คือไม่จำเป็นต้องเลือก MRM/ALND ทันที)")}')
        + f'<p class="mut">{E} ข้อยกเว้นสำคัญ: <b>Inflammatory breast cancer (T4d)</b> → neoadjuvant แล้วต้อง <b>MRM + ALND</b> เสมอ (ห้าม BCS และห้าม SLNB) ตามด้วย post-mastectomy RT {p.R("NCCNBR")}</p>')
    h += box('Subtype of Breast cancer', 'p1 · p3', ul(
        f'<b>ER⊕ เยอะ</b> = prognosis ดี → <b>Hormonal Tx 5 ปี</b>',
        f'<b>Luminal B</b>: Ki-67 > ...? {hw("(โน้ตเว้นตัวเลขไว้)")}',
        f'<b>Triple Neg.</b> → {imp("Prognosis แย่สุด")}')
        + '<table class="dz"><tr><th>' + E + ' Subtype (St Gallen 2013)</th><th>นิยาม</th><th>Systemic tx หลัก</th></tr>'
        + '<tr><td>Luminal A</td><td>ER+ · PR ≥20% · HER2− · <b>Ki-67 &lt;20%</b></td><td>Endocrine ± chemo (ตาม genomic assay)</td></tr>'
        + '<tr><td>Luminal B (HER2−)</td><td>ER+ · HER2− และ <b>Ki-67 ≥20%</b> หรือ PR ต่ำ</td><td>Endocrine + chemo ส่วนใหญ่</td></tr>'
        + '<tr><td>Luminal B (HER2+)</td><td>ER+ · HER2+</td><td>Chemo + anti-HER2 + endocrine</td></tr>'
        + '<tr><td>HER2-enriched</td><td>ER− PR− HER2+</td><td>Chemo + trastuzumab ± pertuzumab</td></tr>'
        + '<tr><td>Triple negative</td><td>ER− PR− HER2−</td><td>Chemo (± pembrolizumab ใน early high-risk) — ไม่มี target แบบ hormone/HER2</td></tr></table>'
        + f'<p class="mut">Ki-67 cut-off 20% ตาม St Gallen 2013 {p.R("STG")} · Endocrine therapy มาตรฐาน 5 ปี และ<b>ขยายเป็น 7–10 ปี</b>ในกลุ่มเสี่ยงสูง {p.R("NCCNBR")}</p>')
    h += src(1)
    return h
add('R00.C-1', 'Breast cancer — early vs locally advanced, mastectomy vs BCT (ข้อห้าม BCT อัปเดต), axilla: SLNB vs ALND, neoadjuvant, subtype & Ki-67', ['Breast', 'Oncology principles'],
    ['NCCNBR', 'Z11102', 'STG', 'PRIME', 'AJCCBR'], b1)

# ---------------------------------------------------------------- R00-2 Stomach
def b2(p):
    h = f'<div class="iointro"><b>Stomach Dis.</b> (p4) — <b>PUP</b> (perforated peptic ulcer) · <b>Gastric CA</b> (early vs symptomatic, metastasis + signs) · กินแล้วอาเจียน: linitis plastica vs GOO · ต่อด้วย <b>GOO</b> (p5): metabolic derangement + fluid of choice</div>\n'
    h += box('PUP — Perforated peptic ulcer', 'p4', ul(
        f'คนไข้กิน <b>NSAIDs</b> → <b>Sudden</b> ปวดท้อง',
        f'Film: {imp("Air under dome of diaphragm")} (free air)',
        f'Tx: <b>Simple Closure + Omentum patch</b> + PPI ตลอดชีวิต ± H. pylori Tx.')
        + f'<p>{FIX()} "PPI <b>ตลอดชีวิต</b>" — ไม่ใช่มาตรฐาน · หลังเย็บรูให้ PPI ราว <b>8 สัปดาห์</b> (ขนาดสูงช่วงแรก) + <b>ตรวจ H. pylori ทุกราย</b> และกำจัดถ้าบวก + หยุด NSAIDs · ให้ PPI ระยะยาวเฉพาะคนที่ต้องใช้ NSAIDs/antiplatelet ต่อ หรือ H. pylori-negative idiopathic ulcer {p.R("WSESPU")}</p>'
        + gl('WSES 2020 · perforated peptic ulcer', f'Laparoscopic หรือ open <b>simple closure ± omental patch</b> เป็นวิธีหลักสำหรับรูทะลุขนาดเล็ก (&lt;2 cm) · รูใหญ่/สงสัยมะเร็ง → พิจารณา resection; ตัดชิ้นเนื้อขอบ gastric ulcer {p.R("WSESPU")}', f'ต้องให้ broad-spectrum ATB + PPI + ตรวจ/กำจัด H. pylori หลังผ่าตัด · ผ่าตัดลดกรดถาวร (vagotomy) ไม่ทำเป็นมาตรฐานแล้ว {p.R("WSESPU")}'))
    h += box('Gastric CA — คนไข้มาด้วยอาการอะไร?', 'p4', ul(
        f'<b>Early Stage (T1N0)</b>: {hw("บังเอิญเจอจาก EGD")} → Tx: <b>Endoscopic / Sx.</b> : <b>Local Control</b>! · Cf. ส่วนใหญ่ gastrectomy',
        f'{hw("แนวใหม่ฯ")} (หมึกฟ้า) Tx: <b>Upfront Sx.</b> {hw("(ผ่าก่อน)")} <b>or</b> <b>Periop Chemo + Imm. therapy</b> ตามด้วย Sx.',
        f'<b>Symptomatic</b>: คนไข้มีอาการ <b>dyspepsia + Alarm</b> ↔ ({imp("GI bleed, Aging, dysphagia, Wt loss, Ulcer, N/V")}) → ส่ง <b>EGD</b>')
        + '<h4>Spread → ผ่าได้ไหม</h4><table class="dz"><tr><th>การกระจาย</th><th>ในโน้ต</th></tr>'
        + '<tr><td>LNs: <b>Regional Node</b></td><td>→ <b>Sx.</b> (gastrectomy + D2 lymphadenectomy)</td></tr>'
        + '<tr><td>LNs: <b>Distant Node</b> เช่น <b>Paraaortic</b> / <b>Virchow node</b></td><td>→ <span class="imp">Palliative</span></td></tr>'
        + '<tr><td><b>Hematogenous</b> (เช่น liver)</td><td>→ <span class="imp">Palliative</span> (ขีดเขียวในโน้ต)</td></tr></table>'
        + f'<p>{E} ตาม JGCA 2021 {p.R("JGCA")}: endoscopic resection (EMR/<b>ESD</b>) สำหรับ cT1a ที่เข้าเกณฑ์ (absolute: differentiated, intramucosal, ไม่มี ulcer, ≤2 cm → ขยายเป็นทุกขนาดถ้าไม่มี ulcer; differentiated มี ulcer ≤3 cm และ undifferentiated ≤2 cm ไม่มี ulcer) · ไม่เข้าเกณฑ์ → <b>gastrectomy + D1/D1+ (cT1N0) หรือ D2 (≥cT2 หรือ N+)</b></p>'
        + f'<p>{E} Alarm features เรื่องอายุ: ACG/CAG 2017 ใช้ <b>อายุ ≥60 ปี</b> ส่ง EGD ทุกราย {p.R("DYSP")} — ในเอเชีย/ไทยที่อุบัติการณ์ gastric CA สูงกว่า มักใช้ตัดที่ราว 40–50 ปี</p>'
        + gl('JGCA 2021 · NEJM 2025 MATTERHORN · FDA 25 พ.ย. 2025', f'Resectable locally advanced (≥cT2 หรือ N+): <b>perioperative FLOT + durvalumab</b> (neoadjuvant + adjuvant แล้วต่อ durvalumab เดี่ยว) — EFS/OS ดีกว่า FLOT อย่างเดียว · FDA อนุมัติ 25 พ.ย. 2025 → ตรงกับ "Periop Chemo + Imm. therapy" ในโน้ต {p.R("MATT")}', f'แนวเอเชีย (ญี่ปุ่น/เกาหลี): upfront D2 gastrectomy แล้ว <b>adjuvant chemo</b> (S-1, CAPOX, docetaxel + S-1) ยังเป็นมาตรฐาน — "Upfront Sx." ในโน้ตจึงยังถูกในบริบทนี้ {p.R("JGCA")}'))
    h += box('Metastasis ของ Gastric CA + signs ' + MK, 'p4', ul(
        f'Metas: {imp("@ Peritoneum**")}, LNs, Liver',
        '<b>1st</b> Ascites (malignant)',
        f'<b>2nd</b> Nod. @ สะดือ @ Falciform lig. = {imp("Sister Mary Joseph Nod.")}',
        f'<b>3rd</b>: {hw("(เว้นว่างในโน้ต)")} → <b>Krukenberg tumor</b> = Ovarian metast (♀) {hw("— เขียนแยกไว้ทางซ้ายด้วยหมึกเขียว")}',
        f'<b>4th</b>: PR เจอ <b>Rectal shelf</b> {hw("คล้ายๆ ปุ่มแข็งๆ @ ด้านหน้าของ bowel")}')
        + f'<p>{FIX()} ในโน้ตเขียน "<b>Cohenberg tumor</b>" → ที่ถูกคือ <b>Krukenberg tumor</b> · "Rectal Sheath (bumper sheath)" → ที่ถูกคือ <b>Blumer\'s shelf</b> (rectal shelf: drop metastasis ใน rectovesical/rectouterine pouch คลำได้ทาง PR ด้านหน้า rectum)</p>'
        + f'<p class="mut">{E} อื่น ๆ: <b>Virchow node</b> = Lt supraclavicular LN (Troisier sign) · <b>Irish node</b> = Lt axillary LN · Leser–Trélat sign (seborrheic keratosis ผุดทันที) · acanthosis nigricans</p>')
    h += box('กินแล้วอาเจียน — แยก 2 แบบ (กรอบในโน้ต)', 'p4', '<table class="dz"><tr><th>อาการ</th><th>นึกถึง</th></tr>'
        + '<tr><td><b>กินแล้วอ้วกออกมาเลย</b></td><td><b>Non-distended</b> stomach เช่น CA กินไปทั้ง stomach = <b>Linitis plastica</b> (ในโน้ตเขียน "Rhinitis paptica" — sic)</td></tr>'
        + f'<tr><td><b>กินได้สักพักแล้วอ้วก</b></td><td>{hw("(เว้นว่างในโน้ต)")} {E} → <b>Gastric outlet obstruction</b>: กระเพาะขยาย เก็บอาหารไว้ แล้วอาเจียนอาหารไม่ย่อยหลังกินหลายชั่วโมง · ไม่มี bile · succussion splash</td></tr></table>'
        + f'<p class="mut">{E} Linitis plastica = diffuse-type (Lauren) / Borrmann type IV · signet ring cells · กระเพาะแข็งเป็นท่อ ("leather bottle") → อิ่มเร็ว (early satiety) อาเจียนทันที</p>')
    h += box('GOO — Gastric outlet obstruction ' + MK, 'p5', ul(
        '(คนไข้) อาเจียน <b>N/V + dehydrate</b>',
        f'{imp("** HypoK⁺ / HypoCl⁻ / met Alkalosis / ไตวาย")} {hw("— hypoK⁺ → arrhythmia · ไตวายจาก dehydration")}',
        f'(met alkalosis + ไตวาย) → เกิด {imp("Paradoxical Aciduria")} = GOO ที่ <b>Severe</b> ๆ*',
        'สาเหตุ: <b>Benign</b> = Stricture from PU · <b>Malignancy</b>')
        + f'<div class="flow"><span class="n">อาเจียน HCl</span><span class="ar">→</span><span class="n">hypochloremic metabolic alkalosis</span><span class="ar">→</span><span class="n">volume ↓ → aldosterone ↑</span><span class="ar">→</span><span class="n">ไต reabsorb Na⁺ แลก K⁺ (→ hypoK)</span><span class="ar">→</span><span class="n r">K⁺ หมด → แลก H⁺ แทน = paradoxical aciduria</span></div>'
        + f'<p><b>Fluid of Choice*</b> = {imp("Normal Saline (0.9% NaCl)")} {hw("∵ ต้องการ Na⁺ (และ Cl⁻) รอให้ไตกลับมาดี / ฉี่ออกก่อนค่อยแก้ K⁺")}</p>'
        + f'<p class="mut">{E} ปัจจุบันสาเหตุ GOO ในผู้ใหญ่ส่วนใหญ่เป็น <b>malignancy</b> (CA antrum, CA head of pancreas, periampullary) มากกว่า PUD · Mx: NPO, NG decompression, NSS + KCl (หลังมี urine output), PPI, EGD หาสาเหตุ → benign: endoscopic balloon dilatation ± H. pylori; malignant: gastrojejunostomy / enteral stent / EUS-GE</p>')
    h += src(4) + src(5)
    return h
add('R00.C-2', 'Stomach — PUP (simple closure + omental patch, PPI ไม่ใช่ตลอดชีวิต) · Gastric CA (early/ESD, upfront Sx vs periop FLOT + durvalumab, alarm, metastasis signs) · linitis plastica vs GOO · GOO metabolic & NSS', ['Stomach & Duodenum', 'Oncology principles', 'Fluid, Electrolyte & Nutrition'],
    ['WSESPU', 'JGCA', 'MATT', 'DYSP'], b2)

# ---------------------------------------------------------------- R00-3 Liver mass
def b3(p):
    h = f'<div class="iointro"><b>Liver Mass</b> (p7–8): {imp("ปัจจุบันแยกด้วย Imaging* — Triple phase* (Arterial → Venous/portal → Delayed)")} · Benign: hemangioma, FNH, hepatic adenoma · Malignant: HCC, intrahepatic cholangiocarcinoma, metastasis {p.R("ACGFLL")}</div>\n'
    h += box('Benign liver mass', 'p7', '<table class="dz"><tr><th>โรค</th><th>ในโน้ต</th><th>' + E + ' จุดสำคัญ</th></tr>'
        + f'<tr><td><b>Hemangioma</b></td><td><b>Centripetal fill in</b> (hyper-enhance @ <b>ขอบก้อน</b> [A-phase] และค่อย ๆ fill เข้ามาใน V-phase) · Sx ↔ มีอาการ</td><td>peripheral <b>nodular discontinuous</b> enhancement → fill-in, delayed เท่า blood pool · ผ่าเฉพาะมีอาการ/โตเร็ว/ Kasabach–Merritt · <b>ห้าม biopsy</b> (เลือดออก)</td></tr>'
        + f'<tr><td><b>FNH</b></td><td>A phase: <b>enhance</b> / V phase: <b>Hypo to Isodense</b> {hw("(Img. same กับ adenoma — คล้าย HCC*)")}</td><td><b>central scar</b> (enhance ใน delayed) · ไม่ washout · ไม่ใช่ premalignant → <b>No Sx</b></td></tr>'
        + f'<tr><td><b>Hepatic Adenoma</b></td><td>Related w/ <b>Oral Contraceptive</b> {hw("(เขียนที่ FNH แล้วลากเส้นย้ายมา adenoma)")}</td><td>หญิงวัยเจริญพันธุ์ + OCP / anabolic steroid · เสี่ยง <b>rupture/hemorrhage</b> และ malignant transformation (β-catenin)</td></tr></table>'
        + f'<h4>แยก FNH vs Adenoma {imp("by MRI: hepatocyte-specific contrast")}</h4><div class="flow"><span class="n">Delayed (hepatobiliary phase) @ ~20 min <b>จับ</b></span><span class="ar">→</span><span class="n">= <b>FNH</b> → No Sx</span></div><div class="flow"><span class="n">Delayed <b>ไม่จับ</b></span><span class="ar">→</span><span class="n r">= Hepatic Adenoma → Sx!</span></div>'
        + f'<p class="mut">{E} contrast ที่ใช้ = <b>gadoxetic acid</b> (Gd-EOB-DTPA, Primovist/Eovist) — hepatocyte ปกติ/FNH มี OATP ดูดเข้า จึง iso–hyper ใน hepatobiliary phase (~20 นาที) ส่วน adenoma ส่วนใหญ่ (ยกเว้นบาง β-catenin subtype) และ HCC มัก hypo</p>'
        + f'<p>{FIX("⚠ เพิ่มเงื่อนไข")} FNH ใน portal/delayed phase มักเป็น <b>iso</b> (ไม่ washout) — การเห็น "hypo" ใน V-phase ให้นึก HCC/adenoma มากกว่า {p.R("ACGFLL")}</p>'
        + f'<p>{FIX()} "Hepatic adenoma → Sx! ทุกก้อน" — ตาม EASL 2016 / ACG 2024 {p.R("EASLB")}: <b>หยุด OCP + ลดน้ำหนัก</b> แล้วตรวจซ้ำ 6 เดือน · ผ่าตัดเมื่อ <b>≥5 cm</b> หลังหยุด OCP 6 เดือน หรือโตขึ้น · <b>ผู้ชายผ่าทุกขนาด</b> · β-catenin-mutated ผ่าทุกขนาด · เลือดออก → embolization ก่อน</p>'
        + gl('ACG 2024 Focal Liver Lesions · EASL 2016 benign liver tumours', f'Hemangioma และ FNH ที่ไม่มีอาการ <b>ไม่ต้องติดตาม/ไม่ต้องผ่า</b> เมื่อภาพจำเพาะชัดเจน {p.R("ACGFLL")}', f'Hepatic adenoma: ≥5 cm, ผู้ชาย, β-catenin activation → resection · &lt;5 cm ในหญิง → หยุด OCP, ลดน้ำหนัก, MRI ซ้ำ · ก้อน ≥5 cm ควรรักษาก่อนตั้งครรภ์ · &lt;5 cm ตั้งครรภ์ได้แต่ติดตาม US ระหว่างตั้งครรภ์ {p.R("EASLB")}'))
    h += box('Malignant liver mass', 'p7–8', f'<p>{imp("ไม่แยก Hepatic adenoma/FNH")} ถ้าคนไข้มี <b>Cirrhotic BG</b> เช่น <b>Hep B / Hep C**</b> → นึก <b>HCC</b> ก่อน</p>'
        + '<table class="dz"><tr><th>โรค</th><th>ในโน้ต</th><th>' + E + ' จุดสำคัญ</th></tr>'
        + f'<tr><td><b>HCC</b></td><td><b>Rapid enhance in A</b> and <b>Rapid Wash (out) in V phase</b></td><td>LI-RADS 5: ≥1 cm + APHE (non-rim) + washout ± capsule → <b>วินิจฉัยได้โดยไม่ต้อง biopsy</b> ในกลุ่มเสี่ยง (cirrhosis, chronic HBV) {p.R("AASLD")}</td></tr>'
        + f'<tr><td><b>Cholangio. (Intrahepatic)</b></td><td>{imp("Delayed enhancement*")} + <b>Focal bile duct dilatation @ รอบก้อน</b> + <b>Peripheral constriction</b> (contract liver parenchyma)</td><td>ชื่อทางรังสี = <b>capsular retraction</b> · enhance แบบ rim ใน arterial แล้ว progressive/delayed ตรงกลาง (fibrous stroma)</td></tr>'
        + f'<tr><td><b>Metast liver</b></td><td>M/C* = {imp("Colorectal CA*")} · enhancement in <b>V phase</b> (ไม่ใช่ A) · {hw("or enhance in A-phase ก็เจอได้ แต่ 1° CA เฉพาะ")} เช่น PNET, "Renal Fail CA", Prost. CA, GIST</td><td>hypovascular mets (colorectal, stomach, pancreas, lung, breast ส่วนใหญ่) → เห็นชัดใน <b>portal venous phase</b> เป็นก้อน hypo ± rim</td></tr></table>'
        + f'<p>{FIX()} hypervascular mets: "Renal Fail CA" → <b>Renal cell carcinoma</b> · "<b>Prost. CA</b>" ไม่ใช่ตัวอย่างที่ดี (prostate CA กระจายไปตับน้อย และมักไม่ hypervascular) · ตัวอย่างมาตรฐาน: <b>NET (PNET, carcinoid), RCC, melanoma, thyroid CA, choriocarcinoma, GIST/sarcoma</b> (บาง breast CA)</p>'
        + f'<p><b>Work-up metast</b>: ต้องทำ {imp("Colono* + EGD*")} ± <b>liver biopsy</b> หา 1° CA {hw("(หา CA colon)")} {E} + CT chest/abdomen/pelvis, CEA, mammogram (หญิง)</p>'
        + gl('AASLD 2023 HCC · LI-RADS v2018', f'HCC surveillance: <b>US ± AFP ทุก 6 เดือน</b> ในตับแข็งทุกสาเหตุ และ chronic HBV กลุ่มเสี่ยง (แม้ไม่มีตับแข็ง) {p.R("AASLD")}', f'ก้อน ≥1 cm ในกลุ่มเสี่ยง → multiphasic CT/MRI · APHE + washout = LR-5 → รักษาเป็น HCC ได้เลย {p.R("AASLD")}'))
    h += src(7) + src(8)
    return h
add('R00.C-3', 'Liver mass by triple-phase imaging — hemangioma (centripetal fill-in), FNH vs hepatic adenoma (hepatobiliary-phase MRI), HCC (APHE + washout), iCCA (delayed enhancement), liver metastasis', ['Liver'],
    ['ACGFLL', 'EASLB', 'AASLD'], b3)

# ---------------------------------------------------------------- R00-4 Acute pancreatitis
def b4(p):
    h = f'<div class="iointro"><b>Pancreatitis</b> (p9 + p6): Acute vs Chronic · Acute: <b>1st Dx (2/3)</b> → <b>2nd Severity</b> → <b>Cause</b> → <b>Tx</b> · local complications แบ่งที่ 4 สัปดาห์ {p.R("ATL")}</div>\n'
    h += box('Acute pancreatitis — Dx & Severity ' + MK, 'p9', ul(
        f'{imp("1st* Dx (2/3 Crit.)")}: ① Pain แบบ <b>Typical</b> ② <b>Lipase/Amylase &gt; 2–3 UNL</b> ③ <b>Imaging</b> ช่วย',
        f'{imp("2nd Severity*")} — แบ่งได้หลาย score · score standard depends on ... {hw("(ลายมืออ่านไม่ชัด)")} เช่น {imp("BISAP*")} / Ranson',
        '<b>Mild</b>: ทั่วไป',
        f'<b>Severe</b>: {imp("ICU*")} — C &amp; A line └ Monitor V/S · <b>Necrotizing pancreatitis</b>: Sterile / Infected }} แยก from <b>CT</b> (gas = necrosis ติดเชื้อ) / <b>EUS</b> (→ FNA)')
        + f'<p>{FIX()} เกณฑ์ enzyme คือ <b>lipase หรือ amylase ≥ 3 เท่าของ upper limit of normal</b> (ไม่ใช่ 2–3) {p.R("ATL")}</p>'
        + '<table class="dz"><tr><th colspan="2">BISAP (ในโน้ต: ≥ 3 จะ Severe)</th></tr>'
        + '<tr><td><b>B</b>UN</td><td>&gt; 25 mg/dL</td></tr><tr><td><b>I</b>mpaired mental status</td><td>GCS &lt;15 / confusion</td></tr><tr><td><b>S</b>IRS</td><td>≥2 criteria</td></tr><tr><td><b>A</b>ge</td><td>&gt; 60</td></tr><tr><td><b>P</b>leural effusion</td><td>บน imaging</td></tr></table>'
        + f'<p class="mut">{E} BISAP ≥3 = เสี่ยงตาย/ severe สูง (predictor) · ความรุนแรงจริงจัดตาม <b>Revised Atlanta 2012</b>: <b>mild</b> = ไม่มี organ failure และไม่มี complication · <b>moderately severe</b> = organ failure ชั่วคราว (&lt;48 h) หรือมี local/systemic complication · <b>severe</b> = <b>persistent organ failure &gt;48 h</b> (modified Marshall ≥2) {p.R("ATL")}</p>'
        + f'<p class="mut">{E} Infected necrosis: สงสัยเมื่อแย่ลงหลังสัปดาห์ที่ 1–2 · gas ใน collection บน CT · FNA ไม่จำเป็นต้องทำทุกราย (ACG 2024) · รักษา: ATB ที่เข้าเนื้อตายได้ (<b>carbapenem</b>, quinolone + metronidazole) และ <b>delay</b> intervention แบบ <b>step-up</b> (drain → necrosectomy) ให้ถึง ~4 สัปดาห์ (walled-off) {p.R("AGANP")}</p>')
    h += box('Local complications — แบ่งตาม Timing (4 wk)', 'p6', '<table class="dz"><tr><th></th><th>&lt; 4 wk</th><th>&gt; 4 wk (มี wall)</th></tr>'
        + f'<tr><td><b>น้ำออกจาก tissue ที่ inflame</b> (interstitial edematous)</td><td>Peripancreatic fluid = <b>APFC</b> (acute peripancreatic fluid collection)</td><td><b>Pancreatic Pseudocyst</b></td></tr>'
        + f'<tr><td><b>Pancreatic Necrosis</b></td><td><b>Acute Necrotic Collection (ANC)</b></td><td>{imp("Walled-off necrosis (WON)")}</td></tr></table>'
        + f'<p>{FIX()} ในโน้ตเขียน "Wall of Necrosis" → ชื่อที่ถูกคือ <b>Walled-Off Necrosis</b> (WON) {p.R("ATL")}</p>')
    h += box('Cause & Gallstone pancreatitis', 'p9', ul(
        f'M/C = {imp("Gallstone pancreatitis**")} → {imp("ต้องตัด Gall bladder**")}',
        f'<b>Mild</b>: ตัดทันที* (<b>LC</b>) └ ใน <b>same admission</b> (same OPX)',
        f'<b>Severe</b>: รอ pancreas subside (<b>delayed LC after 3–6 wks</b>)',
        f'{hw("(หมึกฟ้า)")} ถ้า <b>Infected</b> → ต้องให้ Abx: <b>Carbapenem</b> · Cf. ถ้าไม่ infected ไม่ต้องให้ · หรือมี <b>Cholangitis ontop</b> ต้องให้ Abx',
        'สาเหตุอื่น: <b>Alcohol</b> · <b>Auto Imm</b> · Miscell.')
        + f'<p>{FIX("⚠ ปรับ")} severe/necrotizing: เลื่อน cholecystectomy จน collection ยุบหรือ ≥ <b>6 สัปดาห์</b> (ไม่ใช่ 3) {p.R("ACGAP")} · mild → same-admission LC ลด recurrent biliary events (PONCHO) {p.R("PONCHO")}</p>'
        + f'<p class="mut">{E} สาเหตุอื่นที่ต้องรู้: <b>hypertriglyceridemia</b> (TG &gt;1,000 mg/dL), hypercalcemia, ยา (azathioprine, valproate, didanosine),<b>post-ERCP</b>, trauma, pancreas divisum, tumor/IPMN · Prophylactic ATB <b>ไม่ให้</b>แม้ severe/sterile necrosis · ERCP ภายใน 24 h เฉพาะมี <b>cholangitis</b> ร่วม</p>')
    h += box('Tx of acute pancreatitis', 'p9', '<ol>'
        + f'<li><b>1st Aggressive* Volume Resusc*</b> จน urine &gt; 0.5 cc/kg/hr {hw("— ให้ blood ไปเลี้ยง pancreas ได้")}</li>'
        + f'<li><b>2nd Adequate Pain Control*</b></li>'
        + f'<li><b>3rd Early enteral Nut.*</b> เช่น NG/NJ {hw("ลด Bact. Translocation")}</li></ol>'
        + f'<p>{UPD_} "Aggressive" → ปัจจุบันเป็น <b>moderately aggressive / goal-directed</b>: WATERFALL 2022 พบว่า aggressive (LR 20 mL/kg bolus + 3 mL/kg/h) ทำให้ <b>fluid overload มากขึ้น</b> โดยไม่ได้ผลดีขึ้น {p.R("WATER")} · ใช้ <b>Lactated Ringer</b> มากกว่า NSS {p.R("ACGAP")}</p>'
        + f'<p class="mut">{E} Nutrition: mild → <b>เริ่มกินทางปากเร็ว</b> (ภายใน 24–48 h, ไม่ต้องรอ lipase ลง/ไม่ต้องเริ่ม clear liquid) · severe → enteral (NG ใช้ได้เท่า NJ) ดีกว่า TPN</p>'
        + gl('ACG 2024 Acute Pancreatitis', f'Moderately aggressive fluid resuscitation (เติม bolus ถ้ามี hypovolemia) + ประเมินซ้ำบ่อยใน 6 ชั่วโมงแรกและ 24–48 ชั่วโมง โดยมีเป้าลด BUN · LR แนะนำมากกว่า NSS {p.R("ACGAP")}', f'Acute biliary pancreatitis ไม่มี cholangitis → medical therapy ดีกว่า early ERCP (ภายใน 72 h) · mild biliary pancreatitis → cholecystectomy ก่อนกลับบ้าน {p.R("ACGAP")}'))
    h += src(9) + src(6)
    return h
add('R00.C-4', 'Acute pancreatitis — Dx 2/3 (enzyme ≥3×ULN), BISAP vs Revised Atlanta, local complications (APFC/ANC/pseudocyst/WON), gallstone pancreatitis & timing of LC, fluid (WATERFALL/ACG 2024), nutrition', ['Pancreas & Spleen', 'Gallbladder & Biliary'],
    ['ATL', 'ACGAP', 'WATER', 'PONCHO', 'AGANP'], b4)

exec(open('parts/r00_mossy_b.py', encoding='utf8').read())
