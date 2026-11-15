# R00.A — Q&A อาจารย์ศัลย์ (ถอดเทป voice memo ~3 ชม., 3 วันก่อนสอบ Gen Sx) → Round I/O R00.A (Gen Sx MDCU) · 16 พ.ย. 2026
# รัน: python3 parts/r00a_qa.py   (เพิ่ม/แทน doc R00.A ใน data/io.js + entry R00.A ใน data/resources.js · เปลี่ยน R00 เดิม → R00.C)
# เนื้อหาแบ่ง 3 ไฟล์: r00a_qa.py (หน้า 1–4) · r00a_qa_b.py (5–8) · r00a_qa_c.py (9–13 + บันทึก)
import sys, json, re
sys.path.insert(0, 'tools')
from io_gl import load, save, gsec, GL

UPD = '2026-11-16'
CODE = 'R00.A'
def hw(t): return f'<span class="hw">{t}</span>'
def imp(t): return f'<span class="imp">{t}</span>'
E = '<span class="chip e">เสริม</span>'
MK = '<span class="chip r">ออกสอบ</span>'
def FIX(t='⚠ แก้'): return f'<span class="warn">{t}</span>'
UPD_ = '<span class="warn">⚠ อัปเดต</span>'
def box(title, rf, body, src=True):
    lead = f'<p class="mut">จาก Q&amp;A อาจารย์ {{{{R:1}}}}{(" · " + rf) if rf else ""}</p>\n' if src else ''
    return f'<div class="box"><h3>{title}</h3>\n{lead}{body}\n</div>'
def ul(*xs): return '<ul>' + ''.join(f'<li>{x}</li>' for x in xs if x) + '</ul>'
def ol(*xs): return '<ol>' + ''.join(f'<li>{x}</li>' for x in xs if x) + '</ol>'
def gl(src, *items): return gsec(src, '<ul>' + ''.join(f'<li>{GL} {x}</li>' for x in items) + '</ul>')
def tb(head, *rows, wrap=False):
    h = '<table class="dz"' + (' style="overflow-wrap:anywhere"' if wrap else '') + '><tr>' + ''.join(f'<th>{c}</th>' for c in head) + '</tr>'
    for r in rows:
        if isinstance(r, str): h += f'<tr class="gs"><td colspan="{len(head)}">{r}</td></tr>'
        else: h += '<tr>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>'
    return h + '</table>'
def flow(*xs, last_red=False):
    out = []
    for i, x in enumerate(xs):
        cls = 'n r' if (last_red and i == len(xs) - 1) else 'n'
        out.append(f'<span class="{cls}">{x}</span>')
    return '<div class="flow">' + '<span class="ar">→</span>'.join(out) + '</div>'
def mn(k, t): return f'<div class="mn"><div><b class="k">{k}</b> {t}</div></div>'

SRC = 'R00.A — ถอดเทป Q&A อาจารย์ศัลย์ (voice memo ~3 ชม., 3 วันก่อนสอบ Gen Sx Y4) + โน้ตที่พิมพ์ระหว่างฟัง · ไม่ใช่สไลด์อาจารย์ · ส่วนที่ไม่มีป้าย = อาจารย์พูด'
REFS = {
 # --- soft tissue infection
 'WSESSSTI': ('Sartelli M, et al. 2018 WSES/SIS-E consensus conference: recommendations for the management of skin and soft-tissue infections. World J Emerg Surg 2018;13:58 · และ WSES/GAIS/WSIS/SIS-E/AAST global clinical pathways for SSTI. World J Emerg Surg 2022;17:3 (ฉบับล่าสุด)', 'https://doi.org/10.1186/s13017-022-00406-2'),
 'IDSA': ('Stevens DL, et al. Practice guidelines for the diagnosis and management of skin and soft tissue infections: 2014 update by the IDSA. Clin Infect Dis 2014;59:e10–e52 (ตารางยาตามเชื้อ NSTI รวม Vibrio, Aeromonas)', 'https://doi.org/10.1093/cid/ciu296'),
 'LRINEC': ('Wong CH, et al. The LRINEC score: a tool for distinguishing necrotizing fasciitis from other soft tissue infections. Crit Care Med 2004;32:1535–1541 · Fernando SM, et al. Necrotizing soft tissue infection: diagnostic accuracy of physical examination, imaging, and LRINEC score — systematic review and meta-analysis. Ann Surg 2019;269:58–65', 'https://doi.org/10.1097/SLA.0000000000002774'),
 # --- breast
 'NCCNBR': ('NCCN Clinical Practice Guidelines in Oncology: Breast Cancer, Version 5.2026 (ฉบับล่าสุดที่พบ พ.ย. 2026) — workup, clinical staging, BCT, axillary staging, preoperative systemic therapy', 'https://www.nccn.org/professionals/physician_gls/pdf/breast.pdf'),
 'AJCCBR': ('AJCC Cancer Staging Manual 8th ed. — Breast (ยังเป็นฉบับปัจจุบันในตาราง AJCC 2026): cT4a–d, cN1–N3c', None),
 'BIRADS': ('ACR BI-RADS® Atlas 5th ed. (2013) และ BI-RADS v2025 (คงหมวด 0–6 และช่วง likelihood of malignancy เดิม; 4A/B/C ใช้ได้ทั้ง mammography/US และ MRI)', 'https://www.acr.org/Clinical-Resources/Clinical-Tools-and-Reference/Reporting-and-Data-Systems/BI-RADS'),
 'STG': ('Goldhirsch A, et al. St Gallen 2011 (Ann Oncol 2011;22:1736 — Luminal B Ki-67 ≥14%) และ St Gallen 2013 (Ann Oncol 2013;24:2206 — Ki-67 ≥20%) · Nielsen TO, et al. Assessment of Ki67 in Breast Cancer: Updated Recommendations from the International Ki67 in Breast Cancer Working Group. J Natl Cancer Inst 2021;113:808–819', 'https://doi.org/10.1093/jnci/djaa201'),
 'LYMPH': ('DiSipio T, et al. Incidence of unilateral arm lymphoedema after breast cancer: a systematic review and meta-analysis. Lancet Oncol 2013;14:500–515 (ALND ~20% vs SLNB ~6%) · Krag DN, et al. NSABP B-32: SLN identification 97.2%, false-negative 9.8%. Lancet Oncol 2007;8:881–888', 'https://doi.org/10.1016/S1470-2045(13)70076-7'),
 'Z0011': ('Giuliano AE, et al. Effect of axillary dissection vs no axillary dissection on 10-year overall survival among women with invasive breast cancer and sentinel node metastasis: ACOSOG Z0011. JAMA 2017;318:918–926', 'https://doi.org/10.1001/jama.2017.11470'),
 'ESMOBR': ('Loibl S, et al. Early breast cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2024;35:159–182', 'https://doi.org/10.1016/j.annonc.2023.11.016'),
 # --- pancreas
 'ATL': ('Banks PA, et al. Classification of acute pancreatitis—2012: revision of the Atlanta classification. Gut 2013;62:102–111', 'https://doi.org/10.1136/gutjnl-2012-302779'),
 'ACGAP': ('Tenner S, et al. American College of Gastroenterology Guidelines: Management of Acute Pancreatitis. Am J Gastroenterol 2024;119:419–437', 'https://doi.org/10.14309/ajg.0000000000002645'),
 'IAP25': ('IAP/APA/EPC/IPC/JPS Working Group. International Association of Pancreatology Revised Guidelines on Acute Pancreatitis 2025. Pancreatology 2025;25:770–814 (แทนฉบับ IAP/APA 2013)', 'https://doi.org/10.1016/j.pan.2025.04.020'),
 'WATER': ('de-Madaria E, et al. Aggressive or moderate fluid resuscitation in acute pancreatitis (WATERFALL). N Engl J Med 2022;387:989–1000', 'https://doi.org/10.1056/NEJMoa2202884'),
 'PONCHO': ('da Costa DW, et al. Same-admission versus interval cholecystectomy for mild gallstone pancreatitis (PONCHO). Lancet 2015;386:1261–1268', 'https://doi.org/10.1016/S0140-6736(15)00274-3'),
 'PANTER': ('van Santvoort HC, et al. A step-up approach or open necrosectomy for necrotizing pancreatitis (PANTER). N Engl J Med 2010;362:1491–1502 · Baron TH, et al. AGA Clinical Practice Update: Management of Pancreatic Necrosis. Gastroenterology 2020;158:67–75', 'https://doi.org/10.1056/NEJMoa0908821'),
 'ASGECBD': ('Buxbaum JL, et al. ASGE guideline on the role of endoscopy in the evaluation and management of choledocholithiasis. Gastrointest Endosc 2019;89:1075–1105 (high likelihood: CBD stone on imaging, ascending cholangitis, หรือ TB >4 mg/dL ร่วมกับ CBD dilated)', 'https://doi.org/10.1016/j.gie.2018.10.001'),
 'TGAC': ('Kiriyama S, et al. Tokyo Guidelines 2018: diagnostic criteria and severity grading of acute cholangitis. J Hepatobiliary Pancreat Sci 2018;25:17–30 · Miura F, et al. TG18 flowchart for acute cholangitis. 2018;25:31–40', 'https://doi.org/10.1002/jhbp.512'),
 # --- bowel
 'ESPENCIF': ('Pironi L, et al. ESPEN guideline on chronic intestinal failure in adults – Update 2023. Clin Nutr 2023;42:1940–2021 (SBS = small bowel ในความต่อเนื่อง <200 cm; 3 anatomical types)', 'https://doi.org/10.1016/j.clnu.2023.07.019'),
 'MESSING': ('Messing B, et al. Long-term survival and parenteral nutrition dependence in adult patients with the short bowel syndrome. Gastroenterology 1999;117:1043–1050 (ความยาวที่ทำนาย PN dependence: end-jejunostomy <115 cm · jejunocolic <60–65 cm · jejunoileocolic <30–35 cm)', 'https://doi.org/10.1016/S0016-5085(99)70388-4'),
 'ASCRSV': ('Alavi K, et al. The American Society of Colon and Rectal Surgeons Clinical Practice Guidelines for the Management of Colonic Volvulus and Acute Colonic Pseudo-Obstruction. Dis Colon Rectum 2021;64:1046–1057 (ฉบับล่าสุด)', 'https://doi.org/10.1097/DCR.0000000000002159'),
 'PONEC': ('Ponec RJ, Saunders MD, Kimmey MB. Neostigmine for the treatment of acute colonic pseudo-obstruction. N Engl J Med 1999;341:137–141', 'https://doi.org/10.1056/NEJM199907153410301'),
 'BOLOGNA': ('ten Broek RPG, et al. Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (ASBO): 2017 update of the evidence-based guidelines from the WSES ASBO working group. World J Emerg Surg 2018;13:24', 'https://doi.org/10.1186/s13017-018-0185-2'),
 'WSESCRC': ('Pisano M, et al. 2017 WSES guidelines on colon and rectal cancer emergencies: obstruction and perforation. World J Emerg Surg 2018;13:36', 'https://doi.org/10.1186/s13017-018-0192-3'),
 # --- peri-op
 'CHEST': ('Douketis JD, et al. Perioperative Management of Antithrombotic Therapy: An American College of Chest Physicians Clinical Practice Guideline. Chest 2022;162:e207–e243 (ฉบับล่าสุด)', 'https://doi.org/10.1016/j.chest.2022.07.025'),
 'ACCAHA': ('Thompson A, et al. 2024 AHA/ACC/ACS/ASNC/HRS/SCA/SCCT/SCMR/SVM Guideline for Perioperative Cardiovascular Management for Noncardiac Surgery. JACC 2024;84:1869–1969', 'https://doi.org/10.1016/j.jacc.2024.06.013'),
 'ERAS25': ('Gustafsson UO, et al. Guidelines for perioperative care in elective colorectal surgery: Enhanced Recovery After Surgery (ERAS®) Society recommendations 2025. Surgery 2025;184:109397 (แทนฉบับ 2018)', 'https://doi.org/10.1016/j.surg.2025.109397'),
 'ESPENS': ('Weimann A, et al. ESPEN guideline on clinical nutrition in surgery – Update 2025. Clin Nutr 2025;53:222–261', 'https://doi.org/10.1016/j.clnu.2025.08.029'),
 'ETHICON': ('Ethicon Wound Closure Manual + เอกสารกำกับผลิตภัณฑ์ (Vicryl, Monocryl, PDS II, Prolene, Ethilon, Mersilk, Ethibond, surgical gut) — ระยะคงแรงดึง/ระยะดูดซึม', 'https://www.jnjmedtech.com/en-US/specialty/wound-closure'),
 'EHSAHS': ('Deerenberg EB, et al. Updated guideline for closure of abdominal wall incisions from the European and American Hernia Societies. Br J Surg 2022;109:1239–1250 (small-bite, slowly absorbable monofilament, SL:WL ≥4:1)', 'https://doi.org/10.1093/bjs/znac302'),
 'DRAINAPP': ('Li Z, et al. Abdominal drainage to prevent intra-peritoneal abscess after appendectomy for complicated appendicitis. Cochrane Database Syst Rev 2021;8:CD010168', 'https://doi.org/10.1002/14651858.CD010168.pub4'),
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
    PAGES.append({'id': pid, 'title': title, 'topics': topics, 'rev': 2, 'upd': UPD, 'html': html, 'refs': p.refs})

# =====================================================================================  1 Cellulitis vs NF
def b1(p):
    h = f'<div class="iointro"><b>Cellulitis vs Necrotizing fasciitis (NF)</b> — อาจารย์สอนก่อนเริ่ม Q&amp;A (~15 นาที): การรักษาต่างกันชัดเจน · <b>Cellulitis = IV ATB alone</b> + นอนยกขาสูง · <b>NF = surgical debridement</b> · แยกด้วย {imp("clinical diagnosis")} (Hx + PE) เป็นหลัก — delay/รักษาผิดทาง = morbidity สูง</div>\n'
    h += box('ชั้นที่ติดเชื้อ + 5 จุดแยก NF จาก Cellulitis ' + MK, '', tb(['', 'Cellulitis', 'NF'],
        ['ชั้น', 'dermis + epidermis (ตื้น)', '<b>fascia</b> (ลึกกว่า) — บางเคส fascia ตายเยอะกว่าที่เห็นที่ skin'],
        ['① ปวด', 'ปวดเท่าที่เห็นอักเสบ', f'{imp("Pain out of proportion")} — บวมแดงร้อนแค่ขา แต่กด/บ่นปวดถึง thigh'],
        ['② Skin sign', 'บวม แดง ร้อน', f'{imp("Hemorrhagic bleb")} = skin ตาย มีเลือด/หนองช้ำข้างใน · เจาะได้น้ำ "สีน้ำล้างเนื้อ" (dishwater) ดำ ๆ เลือดเก่า กลิ่นเหม็น'],
        ['③ Crepitus', '—', f'{imp("Crepitus / subcutaneous emphysema")} คลำกรอบแกรบ = <b>NF 100%</b> (gas-forming เช่น <i>C. perfringens</i> → gas gangrene)'],
        ['④ Course', 'progress ช้า ๆ', '<b>worsening เร็ว</b> · severe sepsis · end-organ failure (BP drop, HR เร็ว, ซึม, respiratory failure)'],
        ['⑤ Host (ข้อสังเกตอาจารย์)', '—', 'cirrhosis (โดยเฉพาะ <b>Child B/C</b>), DM poor control, ESRD/CKD, โรคเลือด, มะเร็งที่ได้ยา (immunocompromised) → skin infection มัก turn เป็น NF เร็ว']),
        ) + f'<p>{hw("✎ โน้ต: pathophysiology — fascia ตาย → vessel เล็กระหว่าง fascia กับ subcut thrombosis → skin ตาย = hemorrhagic bleb")}</p>'
    h += box('เชื้อก่อโรค + เชื้อรุนแรงที่ต้องจำ', '', ul(
        'Cellulitis: ส่วนใหญ่ <b>gram-positive</b> (Strep, Staph)',
        'NF ที่พบบ่อย: <b>mixed organism</b> (aerobe + anaerobe) · อีกแบบ = <b>gram-positive เดี่ยว</b> (Strep group A) — "บางคนเรียก type 2" ก็ severe',
        f'{imp("Vibrio vulnificus")} — สัมพันธ์ <b>อาหารทะเล หอย น้ำทะเล</b> (เหยียบหอยที่ทะเล) · progress เร็วมาก: ติดที่นิ้วก้อย → ขึ้นถึง thigh ใน 3–4 ชม. (โดยเฉพาะ cirrhosis/HCC) บางรายตัดขาแล้วยังไม่รอด',
        f'{imp("Aeromonas")} — <b>น้ำจืด</b> (น้ำท่วม/น้ำขัง เดินลุยน้ำ) เป็น NF ได้บ่อย')
        + tb([E + ' Classification (ที่ใช้บ่อย)', 'เชื้อ', 'จุดเด่น'],
             ['Type I (polymicrobial) — พบบ่อยสุด', 'aerobe + anaerobe (Bacteroides, Clostridium, Enterobacterales, Strep)', 'DM, หลังผ่าตัด, perineum (<b>Fournier gangrene</b>)'],
             ['Type II (monomicrobial)', 'GAS (<i>S. pyogenes</i>) ± <i>S. aureus</i>/MRSA', 'คนสุขภาพดีได้ · toxic shock'],
             ['Type III (บางตำรา)', '<i>Vibrio vulnificus</i>, <i>Aeromonas</i>, Clostridium', 'สัมผัสน้ำทะเล/น้ำจืด · แผลบาดเจ็บ · progress เร็วสุด'])
        + f'<p class="mut">{E} ยาเฉพาะเชื้อตาม IDSA {p.R("IDSA")}: <b>Vibrio</b> → doxycycline + ceftriaxone/cefotaxime · <b>Aeromonas</b> → doxycycline + ciprofloxacin หรือ ceftriaxone · <b>GAS</b> → penicillin + <b>clindamycin</b> (ยับยั้ง toxin) · <b>Clostridium</b> → penicillin + clindamycin</p>')
    h += box('ถ้าแยก severe cellulitis vs NF ไม่ออก — investigation', '', ul(
        f'<b>Scoring</b>: มีหลายอันใน Google แต่ <b>ไม่มีอันไหนเป็น standard</b> ไม่ค่อยใช้จริง → ส่วนใหญ่ clinical diagnosis',
        '<b>U/S</b>: เจอน้ำ → แยกไม่ได้ · เจอลม → แยกได้ (ลมใน soft tissue = NF)',
        '<b>X-ray / CT</b>: เหมือนกัน — น้ำแยกไม่ได้ · ลมแยกได้',
        '<b>MRI</b>: ไม่มีใครทำใน emergency setting',
        f'{imp("Finger test")} (bedside ที่ ER): ฉีด LA → กรีดถึง subcut → เอานิ้วเซาะ → <b>skin + subcut ลอยแยกจาก fascia ได้ = positive (NF)</b> · cellulitis มีแค่น้ำฉ่ำ ๆ แต่ <b>แยก plane ไม่ได้</b> = negative')
        + tb([E + ' LRINEC score (Wong 2004)', 'ค่า', 'คะแนน'],
             ['CRP', '≥150 mg/L', '4'], ['WBC', '15–25 / >25 ×10³', '1 / 2'], ['Hb', '11–13.5 / <11 g/dL', '1 / 2'],
             ['Na', '<135 mmol/L', '2'], ['Creatinine', '>1.6 mg/dL', '2'], ['Glucose', '>180 mg/dL', '1'])
        + f'<p class="mut">{E} LRINEC ≥6 = สงสัย, ≥8 = เสี่ยงสูง · meta-analysis: LRINEC ≥6 Sn 68.2% Sp 84.8% · ≥8 Sn 40.8% Sp 94.9% → <b>ใช้ rule out ไม่ได้</b> ตรงกับที่อาจารย์บอกว่า score ไม่ใช่ standard {p.R("LRINEC")} · finger test positive ร่วมกับ: ไม่มีเลือดออก, "dishwater pus", fascia ซีดเทาบวม</p>')
    h += box('Management ' + MK, '', '<h4>NF = รักษาเหมือน sepsis + ผ่าตัด</h4>' + ol(
        '<b>Aggressive volume resuscitation</b> · retain Foley · H/C',
        '<b>ATB</b>: คลุม gram-positive + anaerobe (± gram-negative)',
        f'{imp("Set OR debridement")}: รอบแรกตัดเนื้อตายให้มากที่สุด (as much as possible) → <b>second look ~24–48 ชม.</b> → third/fourth look ไปเรื่อย ๆ จนเนื้อตายหมด · ไม่ต้องกลัวแผลใหญ่ — สุดท้าย <b>plastic coverage</b> (skin graft / flap)')
        + f'<p class="mut">{E} Empiric ATB ตาม IDSA/WSES {p.R("IDSA")} {p.R("WSESSSTI")}: <b>vancomycin (หรือ linezolid)</b> + <b>piperacillin-tazobactam</b> (หรือ carbapenem) <b>+ clindamycin</b> · หลายแนวทางนัด second look ภายใน ~24 ชม. หรือเร็วกว่าถ้าแย่ลง · amputation ถ้าคุมไม่ได้/เนื้อตายทั้งรยางค์ · HBO = adjunct เท่านั้น</p>'
        + '<h4>แยกไม่ได้จริง (severe cellulitis?)</h4>' + flow('finger test', 'negative → admit close observe (ดูซ้ำ 2–4 ชม.)', 'clinical progress / ปวดมาก', 'OR debridement — เปิดแล้วรู้เองว่า cellulitis หรือ NF', last_red=True)
        + ul('ถ้าเปิดแล้ว skin/subcut ยังติด fascia เซาะไม่ไป → severe cellulitis (การกรีดช่วยระบายน้ำ แต่คนไข้ได้แผลโดยไม่จำเป็น — จริง ๆ แค่ IV ATB + ยกขาสูงก็พอ)',
             '<b>Cellulitis</b>: IV ATB + นอนยกขาสูง + observe')
        + gl('WSES/SIS-E 2018 + global pathways 2022 · IDSA 2014',
             f'Soft tissue infection ที่ <b>progress เร็ว</b> ให้รักษาแบบ NSTI ไว้ก่อน · ห้าม delay debridement เพื่อรอ imaging เมื่อสงสัยมาก {p.R("WSESSSTI")}',
             f'NSTI: early aggressive debridement + broad-spectrum ATB + resuscitation; re-explore จนไม่มีเนื้อตาย {p.R("IDSA")}'))
    return h
add('R00.A-1', 'Cellulitis vs Necrotizing fasciitis — 5 จุดแยก, Vibrio vulnificus / Aeromonas, finger test & LRINEC, debridement + second look', ['Skin & Soft tissue', 'Perioperative care & Surgical infection'],
    ['IDSA', 'WSESSSTI', 'LRINEC'], b1)

# =====================================================================================  2 Breast
def b2(p):
    h = f'<div class="iointro"><b>Breast cancer</b> — อาจารย์: {imp("ออกข้อสอบแน่นอน 100% ทุกปี ปีละ 3–4 ข้อ")} · approach ผิด = "ลมปราณแตกซ่าน" · ลำดับคิด: triple assessment → clinical TNM → แยก metastatic ออกก่อน → early vs locally advanced → <b>คิด breast กับ axilla แยกกัน</b></div>\n'
    h += box('Triple assessment', '', ol(
        '<b>Hx</b>: ก้อนเป็นยังไง ขนาด นานเท่าไร เจ็บไหม <b>nipple discharge</b> (ก้อนที่ involve duct) · risk: menarche, menopause, เคย breast biopsy, family Hx (breast, ovary, prostate, pancreas), breastfeeding',
        '<b>PE</b>: ตรวจ <b>2 ข้างเทียบกัน</b> · ก้อนอยู่ไหน, fix ไหม, ขอบเขต, skin/nipple involvement, retraction, ขนาด, บวมแดงร้อนรอบก้อน · LN: <b>axilla, supraclavicular</b> (internal mammary คลำไม่ได้)',
        '<b>Imaging</b>: mammogram ± U/S → <b>BI-RADS</b>',
        '<b>Tissue</b>: อย่างน้อย <b>core needle biopsy (CNB)</b>')
        + f'<p class="mut">{E} risk เพิ่ม: <b>BRCA1/2</b>, เคยฉาย RT ทรวงอกตอนอายุน้อย (เช่น Hodgkin), atypical hyperplasia/LCIS, nulliparity / ตั้งครรภ์แรกอายุ &gt;30, HRT, obesity หลังหมดประจำเดือน, alcohol {p.R("NCCNBR")}</p>')
    h += box('BI-RADS — ตั้งแต่ 4 ขึ้นไป = tissue biopsy', '', tb(['BI-RADS', 'ความหมาย / โอกาสมะเร็ง', 'ทำอะไร'],
        ['0', f'{E} incomplete — ต้องตรวจเพิ่ม/เทียบฟิล์มเก่า', 'additional imaging'],
        ['1', 'negative', 'routine screening'],
        ['2', 'benign', 'routine screening'],
        ['3', 'probably benign <b>≤2%</b>', f'{imp("short-interval F/U 6 เดือน")}'],
        ['4A', 'low suspicion <b>&gt;2–10%</b>', 'biopsy'], ['4B', 'moderate <b>&gt;10–50%</b>', 'biopsy'], ['4C', 'high <b>&gt;50–&lt;95%</b>', 'biopsy'],
        ['5', 'highly suggestive <b>≥95%</b>', 'biopsy'],
        ['6', 'biopsy-proven malignancy', 'รักษา'])
        + f'<p>{FIX()} {hw("✎ โน้ต: “BI-RADS 1 benign”")} → <b>BI-RADS 1 = negative</b> (ไม่เจออะไรเลย) · <b>BI-RADS 2 = benign</b> (เจอ แต่เป็นของ benign แน่นอน) — ทั้งคู่ routine screening {p.R("BIRADS")}</p>'
        + f'<p class="mut">{E} BI-RADS v2025 คงหมวดและช่วงเปอร์เซ็นต์เดิม; เพิ่มการใช้ 4A/4B/4C ใน MRI · หมวด 6 ใช้กับมะเร็งที่ biopsy แล้วก่อนรักษา local (รวมคนที่ได้ neoadjuvant แม้ภาพยุบหมด) {p.R("BIRADS")}</p>')
    h += box('CNB vs FNA — ทำไม standard = CNB', '', tb(['', 'CNB (histology)', 'FNA (cytology)'],
        ['บอกชนิดมะเร็ง', '✓', '✗ บอกได้แค่ malignant/atypical cell'],
        ['invasive vs in situ', '✓ (ดู basement membrane)', '✗'],
        ['IHC: ER, PR, HER2, Ki-67 → subtype', '✓', '✗'])
        + '<p>subtype สำคัญเพราะกำหนด <b>systemic treatment, prognosis, recurrence</b></p>')
    h += box('Clinical staging (TNM)', '', tb(['T', 'นิยาม'],
        ['T1', '≤2 cm'], ['T2', '&gt;2–5 cm'], ['T3', '&gt;5 cm'],
        ['T4a', '<b>chest wall</b> invasion (ไม่นับ pectoralis muscle อย่างเดียว)'],
        ['T4b', f'<b>skin</b>: ulcer, satellite nodules, edema รวม <b>peau d\'orange</b> {E} (dimpling/retraction อย่างเดียวไม่นับ)'],
        ['T4c', 'T4a + T4b'],
        ['T4d', '<b>Inflammatory BC</b>: erythema + edema ≥ <b>1/3</b> ของผิวเต้านม'])
        + tb(['N (clinical) ' + E, 'นิยาม (AJCC 8th)'],
        ['cN1', '<b>axillary level I–II ข้างเดียวกัน คลำได้ movable</b>'],
        ['cN2a', 'axillary I–II <b>fixed / matted</b> (แข็งปึ๊ก ติดกันเป็นก้อน)'],
        ['cN2b', 'internal mammary อย่างเดียว (ไม่มี axillary)'],
        ['cN3a / 3b / 3c', '<b>infraclavicular</b> (level III) / IMN + axillary / <b>supraclavicular</b>'])
        + f'<p>{FIX("✎ ตอบโน้ต")} {hw("“N1 คลำได้ axilla????”")} → ใช่ cN1 = คลำได้ axillary node ข้างเดียวกัน level I–II ที่ <b>ยังขยับได้</b> · อาจารย์พูดแบบเร็ว "supraclav N2 หรือ N3 ก็ว่าไป" → ตาม AJCC 8th <b>supraclavicular = cN3c</b> {p.R("AJCCBR")}</p>'
        + f'<p><b>M</b>: ที่กระจายบ่อย = <b>bone, lung/pleura, liver</b> · brain น้อยกว่า (พบใน <b>triple negative</b> {E}และ HER2+)</p>')
    h += box('3 กลุ่มคนไข้ — principle การรักษา ' + MK, '', tb(['กลุ่ม', 'นิยาม (ตามอาจารย์)', 'เริ่มรักษาด้วย'],
        ['Early', 'T1–T2 (บางที่รวม T3) <b>N0</b> · NCCN อาจ extend ถึง T3N1 (ไม่ชัด) — อาจารย์: node + ปุ๊บ = locally advanced', f'{imp("Surgery first")}'],
        ['Locally advanced', 'ก้อนใหญ่ / <b>T4</b> / <b>node positive</b> (เช่น T2N+)', f'{imp("Systemic first")} (chemo ± targeted ตาม subtype) → surgery'],
        ['Metastatic (M1)', 'แยกออกก่อนเลย', f'{imp("Systemic — NO surgery")} · ยกเว้นเป็นแผล → ยาแล้วยุบ → ตัดเพื่อ QoL (palliative)'])
        + f'<p class="mut">{E} ตามระยะ AJCC: T3N0 = IIB (ยัง operable) · <b>stage III (T3N1, T4 any N, any T N2–3) = LABC</b> {p.R("AJCCBR")} · ปัจจุบัน <b>HER2+ และ TNBC ที่ ≥cT2 หรือ cN+ ให้ neoadjuvant ก่อน</b> (อาจารย์พูดตรงกัน: "T2N1 HER2/TNBC shift ไปให้ยาก่อน") เพื่อดู pCR — ถ้าเหลือโรค → T-DM1 (HER2+) / capecitabine หรือ olaparib (TNBC, BRCA) {p.R("NCCNBR")}</p>'
        + '<h4>Treatment types</h4>' + tb(['Local', 'Systemic'], ['surgery, radiation', 'chemo, targeted (anti-HER2: trastuzumab, pertuzumab), endocrine, immuno']))
    h += box('Subtype', '', tb(['Subtype', 'นิยาม', 'Prognosis / ยา'],
        ['Luminal A', 'ER/PR+, HER2−, Ki-67 ต่ำ', 'ดีสุด · endocrine (± chemo ตาม genomic)'],
        ['Luminal B HER2−', 'ER/PR+, HER2−, <b>Ki-67 สูง</b>', 'endocrine + chemo'],
        ['Luminal B HER2+', 'ER/PR+, HER2+', 'chemo + anti-HER2 + endocrine'],
        ['HER2-enriched', 'ER−PR−, HER2+', 'chemo + trastuzumab ± pertuzumab'],
        ['Triple negative', 'ER−PR−HER2−', f'{imp("prognosis แย่สุด")} · chemo (± pembrolizumab)'])
        + f'<p>{FIX("⚠ ตัวเลขขัดกัน")} อาจารย์: Luminal B = Ki-67 <b>&gt;14%</b> (St Gallen 2011) · St Gallen 2013 ใช้ <b>≥20%</b> (Mossy notes R00.C ใช้ 20%) · ปัจจุบัน International Ki67 Working Group 2021: Ki-67 ≤5% = ต่ำ, ≥30% = สูง ตรงกลางไม่ใช้ตัดสินเดี่ยว ๆ {p.R("STG")} → ข้อสอบถ้าให้ตัวเลขมา ให้ดูว่าเขาใช้ cut-off ไหน</p>')
    h += box('Early BC: Breast surgery — Mastectomy vs BCT', '', ul(
        '2 วิธี: <b>mastectomy</b> · <b>BCT</b> (wide excision / lumpectomy) — <b>oncologic outcome ไม่ต่างกัน</b>',
        f'{imp("BCT ต้องตามด้วย RT เสมอ")} · mastectomy ไม่จำเป็น (ขึ้นกับ final patho)',
        'ContraIx BCT (อาจารย์): <b>RT ไม่ได้</b> (previous RT, pregnancy), <b>gene mutation</b> (BRCA1/2), <b>multicentric</b> (หลายก้อนคนละ quadrant — ตัดแล้วไม่เหลือเต้าที่สวย) → mastectomy',
        'skin-sparing / nipple-sparing = mastectomy แบบหนึ่ง (เรื่อง reconstruction) ไม่ต้องสนใจ')
        + f'<p>{FIX("⚠ อัปเดต")} ตาม NCCN/ESMO ปัจจุบัน {p.R("NCCNBR")} {p.R("ESMOBR")}:</p>' + ul(
        '<b>Absolute CI</b>: RT ระหว่าง <b>ตั้งครรภ์</b> · diffuse suspicious microcalcifications · margin บวกซ้ำหลังพยายามแล้ว · <b>inflammatory BC</b>',
        '<b>Relative</b>: เคยฉาย RT ที่เต้า/ทรวงอก · active connective tissue disease (scleroderma, SLE) · ก้อนใหญ่เทียบขนาดเต้า',
        '<b>BRCA</b> ไม่ใช่ข้อห้าม BCT (survival เท่ากัน แต่มะเร็งใหม่สูงกว่า → มักเลือก bilateral risk-reducing mastectomy)',
        '<b>Multicentric 2–3 ก้อน</b> ทำ BCT ได้ถ้า margin ลบ + whole-breast RT (ACOSOG Z11102)',
        '<b>Pregnancy</b>: ไตรมาส 2–3 ทำ BCS ได้ แล้ว RT หลังคลอด')
        + f'<p><b>ข้อสอบ</b>: ดูว่าโจทย์ให้ contraIx BCT มาไหม → ถ้ามีตอบ mastectomy · {hw("อาจารย์บางคนเห็นก้อน 1 cm BI-RADS 4C ก็ wide excision เลยโดยไม่เจาะ — แต่ข้อสอบตอบตาม principle")}</p>')
    h += box('Axilla staging: SLNB vs ALND ' + MK, '', ul(
        'อาจารย์: ~98% ของ lymph ไป axilla ผ่าน <b>sentinel node (ด่านหน้า)</b> ก่อน',
        f'ALND ทุกเคส → <b>lymphedema 30–40%</b> → ทำ SLNB เพื่อลด ALND')
        + f'<p>{FIX()} lymphedema หลัง ALND จาก meta-analysis (DiSipio 2013) = <b>19.9%</b> vs SLNB <b>5.6%</b> (ต่างกัน ~4 เท่า) · ตัวเลข 98% ใกล้กับ <b>อัตราหา SLN เจอ</b> (NSABP B-32: <b>97.2%</b>, false-negative <b>9.8%</b>) {p.R("LYMPH")}</p>'
        + flow('clinical N (PE + U/S)', 'cN0', imp('SLNB'))
        + flow('cN1 (คลำได้ / U/S เห็น pathologic node)', 'FNA node', 'positive → <b>ALND</b>', last_red=True)
        + flow('cN1 แต่ FNA negative', imp('SLNB'), 'frozen intra-op → บวกค่อยว่ากัน')
        + ul('<b>ตัวอย่าง</b>: ก้อน 1 cm ไม่มี contraIx BCT, cT1N0 → <b>BCT (wide excision) + SLNB</b>',
             'Locally advanced (node + ตั้งแต่แรก): อดีต = MRM + ALND ทั้งหมด · ปัจจุบันยาดีมาก → หลังยา node + กลายเป็น N0 → <b>SLNB ได้</b>',
             'ก่อนให้ยา: <b>วาง clip</b> ที่ก้อน (และ node ที่บวก) เพราะอาจ clinical/pathologic complete response จนหาไม่เจอ')
        + gl('NCCN Breast v5.2026 · ACOSOG Z0011',
             f'cT1–2 cN0 ทำ <b>BCS + whole-breast RT</b> แล้ว SLN บวก <b>1–2 ต่อม</b> → <b>ไม่ต้อง ALND</b> (Z0011: survival 10 ปีไม่ต่าง) · mastectomy + SLN บวก 1–2 → axillary RT แทน ALND ได้ (AMAROS) {p.R("Z0011")}',
             f'หลัง neoadjuvant ใน cN+ ที่กลายเป็น ycN0: SLNB ด้วย dual tracer ≥3 nodes + เอา clipped node ออก (targeted axillary dissection) · ยังบวก → ALND {p.R("NCCNBR")}',
             f'ผู้สูงอายุ ≥70 ปี HR+ HER2− cT1N0 อาจ<b>ละ SLNB</b>ได้ (NCCN ขยายเกณฑ์งด SLNB ใน v2.2026) {p.R("NCCNBR")}'))
    return h
add('R00.A-2', 'Breast cancer — triple assessment, BI-RADS, CNB vs FNA, cTNM, 3 กลุ่ม, subtype & Ki-67, BCT vs mastectomy, SLNB vs ALND', ['Breast', 'Oncology principles'],
    ['NCCNBR', 'AJCCBR', 'BIRADS', 'STG', 'LYMPH', 'Z0011', 'ESMOBR'], b2)

exec(open('parts/r00a_qa_b.py', encoding='utf8').read())
