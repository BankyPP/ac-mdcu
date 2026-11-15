# R00.A ส่วน 3 (หน้า 7–12 + บันทึก) — exec จาก parts/r00a_qa.py
REFS.update({
 'ATA15': ('Haugen BR, et al. 2015 ATA Management Guidelines for Adult Patients with Thyroid Nodules and Differentiated Thyroid Cancer. Thyroid 2016;26:1–133 (ส่วน thyroid nodule/US pattern ยังใช้ฉบับนี้ — ATA 2025 ไม่ได้ปรับเรื่อง nodule)', 'https://doi.org/10.1089/thy.2015.0020'),
 'TIRADS': ('Tessler FN, et al. ACR Thyroid Imaging, Reporting and Data System (TI-RADS): White Paper of the ACR TI-RADS Committee. J Am Coll Radiol 2017;14:587–595', 'https://doi.org/10.1016/j.jacr.2017.01.046'),
 'BETH': ('Ali SZ, et al. The 2023 Bethesda System for Reporting Thyroid Cytopathology (3rd ed.). Thyroid 2023;33:1039–1044', 'https://doi.org/10.1089/thy.2023.0141'),
 'ATA25': ('Ringel MD, et al. 2025 American Thyroid Association Management Guidelines for Adult Patients with Differentiated Thyroid Cancer. Thyroid 2025;35(8):841–985 (Rec 15: ≤2 cm cN0 → lobectomy; 2–4 cm เลือกได้; >4 cm/ETE/cN1/M1 → total)', None),
 'ATAHYP': ('Ross DS, et al. 2016 American Thyroid Association Guidelines for Diagnosis and Management of Hyperthyroidism and Other Causes of Thyrotoxicosis. Thyroid 2016;26:1343–1421', 'https://doi.org/10.1089/thy.2016.0229'),
 'CHICAGO': ('Yadlapati R, et al. Esophageal motility disorders on high-resolution manometry: Chicago Classification version 4.0©. Neurogastroenterol Motil 2021;33:e14058', 'https://doi.org/10.1111/nmo.14058'),
 'ACGACH': ('Vaezi MF, et al. ACG Clinical Guidelines: Diagnosis and Management of Achalasia. Am J Gastroenterol 2020;115:1393–1411', 'https://doi.org/10.14309/ajg.0000000000000731'),
 'AJCCES': ('AJCC Cancer Staging Manual, 8th ed. (2017) — Esophagus and esophagogastric junction (ตาราง AJCC 2026 ยังเป็น 8th)', None),
 'NCCNES': ('NCCN Clinical Practice Guidelines in Oncology: Esophageal and Esophagogastric Junction Cancers, Version 4.2026 (16 ก.ย. 2026)', 'https://www.nccn.org/professionals/physician_gls/pdf/esophageal.pdf'),
 'ESOPEC': ('Hoeppner J, et al. Perioperative chemotherapy or preoperative chemoradiotherapy in esophageal cancer (ESOPEC). N Engl J Med 2025;392:323–335 · van Hagen P, et al. CROSS. N Engl J Med 2012;366:2074–2084 · Kelly RJ, et al. Adjuvant nivolumab (CheckMate 577). N Engl J Med 2021;384:1191–1203', 'https://doi.org/10.1056/NEJMoa2409408'),
 'ESMOGO': ('Al-Batran S-E, et al.; ESMO Guidelines Committee. Gastric and oesophageal cancer: ESMO Clinical Practice Guideline for diagnosis, treatment and follow-up. Ann Oncol 2026 (เผยแพร่ 15 ต.ค. 2026)', None),
 'DYSP': ('Moayyedi PM, et al. ACG and CAG Clinical Guideline: Management of Dyspepsia. Am J Gastroenterol 2017;112:988–1013', 'https://doi.org/10.1038/ajg.2017.154'),
 'THDYSP': ('Pittayanon R, et al. The Thailand Dyspepsia Guidelines: 2018. J Neurogastroenterol Motil 2019;25:15–26 (EGD เมื่ออายุเริ่มอาการ ≥50 ปี, มี alarm features หรือไม่ตอบสนองยา)', 'https://doi.org/10.5056/jnm18081'),
 'MAAS': ('Malfertheiner P, et al. Management of Helicobacter pylori infection: the Maastricht VI/Florence consensus report. Gut 2022;71:1724–1762', 'https://doi.org/10.1136/gutjnl-2022-327745'),
 'JOHN': ('Johnson HD. Gastric ulcer: classification, blood group characteristics, secretion patterns and pathogenesis. Ann Surg 1965;162:996–1004 (type I–III) + modified (Csendes) type IV–V · Graham DY, et al. Gastroenterology 1982;82:228–231 (biopsy ≥7 ชิ้นจากขอบแผล sensitivity ~98%)', None),
 'JGCA7': ('Japanese Gastric Cancer Association. Japanese Gastric Cancer Treatment Guidelines 2025 (7th edition). Gastric Cancer 2025/2026', 'https://doi.org/10.1007/s10120-025-01698-4'),
 'NCCNGA': ('NCCN Clinical Practice Guidelines in Oncology: Gastric Cancer, Version 2.2026 (21 ม.ค. 2026) — staging laparoscopy + peritoneal cytology สำหรับ ≥cT1b ที่จะผ่าตัด; perioperative chemo สำหรับ ≥cT2 หรือ N+', 'https://www.nccn.org/professionals/physician_gls/pdf/gastric.pdf'),
 'MATT': ('Janjigian YY, et al. Perioperative durvalumab in gastric and gastroesophageal junction cancer (MATTERHORN). N Engl J Med 2025;393:217–230 · Al-Batran SE, et al. FLOT4. Lancet 2019;393:1948–1957', 'https://doi.org/10.1056/NEJMoa2503701'),
 'GIST': ('Casali PG, et al. Gastrointestinal stromal tumours: ESMO–EURACAN–GENTURIS Clinical Practice Guidelines. Ann Oncol 2022;33:20–33 · NCCN Gastrointestinal Stromal Tumors (GISTs), Version 1.2026', 'https://doi.org/10.1016/j.annonc.2021.09.005'),
 'NCCNPA': ('NCCN Clinical Practice Guidelines in Oncology: Pancreatic Adenocarcinoma — ฉบับปัจจุบัน (2026): resectability criteria, biliary drainage, adjuvant mFOLFIRINOX', 'https://www.nccn.org/professionals/physician_gls/pdf/pancreatic.pdf'),
 'PBD': ('van der Gaag NA, et al. Preoperative biliary drainage for cancer of the head of the pancreas. N Engl J Med 2010;362:129–137 (serious complication 74% vs 39%)', 'https://doi.org/10.1056/NEJMoa0903230'),
 'USPSTF': ('US Preventive Services Task Force. Screening for Colorectal Cancer: Recommendation Statement. JAMA 2021;325:1965–1977 (อายุ 45–75)', 'https://doi.org/10.1001/jama.2021.6238'),
 'NCCNCRC': ('NCCN Clinical Practice Guidelines in Oncology: Colon Cancer และ Rectal Cancer — ฉบับปัจจุบัน (2026): adjuvant stage III/high-risk II, rectal TNT, watch-and-wait, dMMR', 'https://www.nccn.org/professionals/physician_gls/pdf/rectal.pdf'),
 'DCRCR': ('Habu T, et al. Efficacy and safety of definitive chemoradiotherapy in unresectable locally advanced ESCC (ASCO 2023, NCC East — cCR ในการทดลองก่อนหน้า 11–25%, ในกลุ่มนี้ 24%) · Jeong H, et al. Definitive chemoradiotherapy for oesophageal SCC — CR 40.4% (Cancer Med 2021;10:2216, doi 10.1002/cam4.3783)', 'https://doi.org/10.1002/cam4.3783'),
 'HSURGE': ('HerniaSurge Group. International guidelines for groin hernia management. Hernia 2018;22:1–165 · Stabilini C, et al. Update of the international HerniaSurge guidelines. BJS Open 2023;7:zrad080', 'https://doi.org/10.1093/bjsopen/zrad080'),
 'WSESH': ('Birindelli A, et al. 2017 update of the WSES guidelines for emergency repair of complicated abdominal wall hernias. World J Emerg Surg 2017;12:37', 'https://doi.org/10.1186/s13017-017-0149-y'),
})

# =====================================================================================  7 Thyroid nodule
def b7(p):
    h = f'<div class="iointro"><b>Approach neck mass</b> = ส่วนใหญ่ข้อสอบคือ {imp("solitary thyroid nodule — เมื่อไหร่เป็น cancer")} (neck mass อื่น ๆ เช่น cystic hygroma อยู่ศัลย์เด็ก) · อาจารย์: "พี่ออกข้อสอบเรื่องนี้เอง" + ให้ไปเปิด US pattern / Bethesda เพิ่ม · อีกเรื่องที่ชอบออก: <b>thyroglossal duct cyst</b></div>\n'
    h += box('Step 1: Thyroid function ก่อน (TSH, FT4, FT3)', '', tb(['Function', 'โรค', 'Tx'],
        'Hyper — มาด้วยก้อน โอกาส CA น้อยมาก',
        ['Toxic adenoma', 'nodule สร้างฮอร์โมนเอง ไม่ใช่มะเร็ง', '<b>lobectomy</b> (ผ่าตัด)'],
        ['Toxic multinodular goiter', 'หลาย nodule', 'ผ่าตัด'],
        ["Graves' disease", 'diffuse enlargement + ตาโปน (ไม่ใช่ nodule)', '<b>ยาก่อน</b> (ไปเมด) — fail สุด ๆ หรือก้อนใหญ่มาก ค่อยผ่า'],
        'Eu / Hypo — ต้องคิดถึง cancer',
        ['nodule', '→ <b>U/S</b> แบ่ง risk', 'ตาม U/S → FNA → Bethesda'])
        + f'<p class="mut">{E} ATA: TSH ต่ำ → <b>radionuclide scan</b> — hot (hyperfunctioning) ไม่ต้อง FNA · toxic adenoma/TMNG รักษาได้ทั้ง <b>RAI หรือ surgery</b> (toxic adenoma = lobectomy, TMNG = total/near-total) · Graves ผ่าตัดเมื่อ goiter ใหญ่กดเบียด, ophthalmopathy ปานกลาง–รุนแรง, สงสัยมะเร็ง, วางแผนตั้งครรภ์, ยา/RAI ไม่ได้ {p.R("ATAHYP")}</p>')
    h += box('Step 2: U/S risk → FNA ' + MK, '', '<p>อาจารย์: {0} = <b>hypoechoic solid nodule</b> + feature ข้อใดข้อหนึ่ง: ① irregular border / <b>extrathyroidal extension</b> ② peripheral calcification ③ <b>taller-than-wide</b> ④ peripheral vascularity / evidence of <b>LN metastasis</b> → <b>&gt;1 cm แนะนำ FNA</b> · high risk = hypoechoic solid ที่ไม่มี feature · intermediate/low = cyst, iso/hyperechoic → ความเสี่ยงน้อย</p>'.format(imp('very high risk'))
        + tb([E + ' ATA 2015', 'ลักษณะ', 'ROM', 'FNA'],
             ['High', '<b>solid hypoechoic</b> + ≥1: irregular (infiltrative, microlobulated) margin · <b>microcalcification</b> · taller-than-wide · rim calcification มี soft tissue ยื่น · ETE', '&gt;70–90%', '<b>≥1 cm</b>'],
             ['Inter&shy;mediate', 'hypoechoic solid ขอบเรียบ ไม่มี feature ข้างบน', '10–20%', '<b>≥1 cm</b>'],
             ['Low', 'iso/hyperechoic solid · partially cystic มี solid ด้านข้าง', '5–10%', '<b>≥1.5 cm</b>'],
             ['Very low', 'spongiform · partially cystic ไม่มี feature', '&lt;3%', '≥2 cm หรือ observe'],
             ['Benign', 'pure cyst', '&lt;1%', 'ไม่ต้อง FNA'])
        + f'<p>{FIX()} {hw("✎ โน้ต: intermediate &gt;1.5 cm, low &gt;2 cm")} → ตาม ATA ที่ถูก: <b>intermediate ≥1 cm · low ≥1.5 cm · very low ≥2 cm</b> {p.R("ATA15")} · "very high risk" ของอาจารย์ = <b>high suspicion</b> ของ ATA · <b>peripheral vascularity ไม่อยู่ในเกณฑ์ ATA</b> และ calcification ที่สำคัญคือ <b>microcalcification</b> (rim/peripheral แบบขาดตอนมี soft tissue ยื่นจึงนับ)</p>'
        + f'<p class="mut">{E} ACR TI-RADS (อีกระบบ): TR3 FNA ≥2.5 cm · TR4 ≥1.5 cm · TR5 ≥1 cm {p.R("TIRADS")}</p>')
    h += box('Step 3: FNA → Bethesda (2023)', '', tb(['Bethesda', 'Category', 'ROM ' + E, 'Mx'],
        ['I', 'Nondiagnostic', '~13%', 'repeat FNA <b>U/S-guided</b>'],
        ['II', 'Benign', '~4%', 'follow-up (ไม่ต้องเจาะซ้ำ)'],
        ['III', '<b>AUS</b> (atypia of undetermined significance)', '~22%', f'{imp("repeat FNA")} / molecular / lobectomy / F/U'],
        ['IV', '<b>Follicular neoplasm</b>', '~30%', 'molecular test / <b>lobectomy</b> (FNA แยก follicular adenoma vs CA ไม่ได้ — ต้องดู capsular/vascular invasion)'],
        ['V', '<b>Suspicious for malignancy</b>', '~74%', 'surgery (lobectomy หรือ total)'],
        ['VI', 'Malignant', '~97%', 'surgery'])
        + f'<p>{FIX()} อาจารย์พูดว่า "Bethesda 4 = follicular neoplasm ถือว่าเป็น suspicious papillary" → <b>IV = follicular neoplasm</b> แต่ <b>"suspicious for malignancy" (รวม suspicious PTC) = V</b> · I–III "ไม่ค่อยซีเรียส" ยกเว้น III → repeat FNA (ตรงกับ guideline) {p.R("BETH")}</p>')
    h += box('Thyroid cancer + extent of surgery', '', tb(['ชนิด', 'จุดเด่น'],
        ['Well-differentiated: <b>papillary</b> (most common, ข้อสอบชอบออก)', 'LN spread · psammoma body · Orphan Annie nuclei'],
        ['Follicular / Oncocytic (Hürthle)', 'hematogenous (bone, lung) · dx ต้องดู capsular/vascular invasion'],
        ['<b>Medullary</b> (แย่)', f'{E} C cell · calcitonin, CEA · RET (MEN2) → total thyroidectomy + central neck dissection · ตรวจ pheochromocytoma ก่อน'],
        ['<b>Anaplastic</b> (แย่สุด)', 'คนแก่ ก้อนโตเร็ว'])
        + f'<p>อาจารย์: {imp("CA = TOTAL THYROIDECTOMY ONLY")}</p><p>{UPD_} ATA 2025 (Rec 15): DTC <b>≤2 cm, intrathyroidal, cN0 → lobectomy</b> · <b>&gt;2–4 cm</b> low-risk → lobectomy หรือ total ได้ · <b>&gt;4 cm, gross ETE, cN1, M1</b> → total thyroidectomy + node dissection · near-total ไม่แนะนำแล้ว {p.R("ATA25")} → ถ้าโจทย์ให้ก้อนใหญ่/มี node/ต้องให้ RAI → total; microcarcinoma low-risk → lobectomy (หรือ active surveillance)</p>')
    h += box('Thyroglossal duct cyst', '', ul('ก้อน <b>midline</b> คอ <b>เคลื่อนขึ้นลงตามการกลืน</b> (และแลบลิ้น) · เจอในเด็ก', f'Tx: {imp("Sistrunk operation")} — ตัด cyst + tract + <b>ส่วนกลางของ hyoid bone</b> {E} (ลด recurrence) · ATA 2025: ถ้าเจอ cancer ใน thyroglossal duct → Sistrunk ± thyroidectomy ตามความเสี่ยง {p.R("ATA25")}'))
    return h
add('R00.A-7', 'Thyroid nodule — function first, U/S pattern & FNA cut-off (ATA), Bethesda 2023, extent of surgery (ATA 2025), toxic adenoma/Graves, thyroglossal duct cyst', ['Thyroid & Endocrine', 'Oncology principles'],
    ['ATAHYP', 'ATA15', 'TIRADS', 'BETH', 'ATA25'], b7)

# =====================================================================================  8 Esophagus: dysphagia/achalasia + esophageal CA
def b8(p):
    h = f'<div class="iointro"><b>Esophagus</b> — dysphagia: EGD ก่อนเสมอ (rule out pseudoachalasia) · achalasia dx = HRM · esophageal CA: "อวัยวะรอบ ๆ เป็น vital structure ทั้งนั้น (airway, aorta, spine)" → locally advanced รักษายาก · ไทยแทบไม่มี early (ญี่ปุ่นเจอจาก screening) — ผู้ชาย สูบบุหรี่ ดื่มเหล้า dysphagia 1–2 เดือน = locally advanced</div>\n'
    h += box('Dysphagia (solid + liquid) — EGD ก่อนหรือ barium ก่อน? ' + MK, '', ul(
        f'{imp("EGD first เสมอ")} เพื่อ <b>rule out pseudoachalasia</b> (CA cardia) — ถึงทำ barium ก่อนแล้วเห็น bird-beak ก็ยัง rule out pseudoachalasia ไม่ได้ สุดท้ายต้อง EGD อยู่ดี ("ตอบตามความถูกต้อง: EGD ก่อนแล้วค่อย barium")',
        '<b>Pre-EGD</b> สำคัญ: esophageal obstruction → เสี่ยง <b>aspiration</b> · บางรายต้องใส่ NG ล้างเอา content เน่าค้างออกก่อน',
        f'Gold standard dx achalasia = {imp("high-resolution manometry (HRM)")}: <b>aperistalsis + IRP ที่ LES &gt;15 mmHg</b>',
        'ข้อยกเว้นในไทย (HRM ไม่มีทุกที่): <b>barium = bird-beak</b> + <b>EGD normal</b> (ไม่มี CA/pseudoachalasia) → accept dx achalasia ได้',
        '<b>Achalasia vs CA</b>: CA = <b>short duration</b> (1–2 เดือน ไม่เกิน 3) · achalasia = <b>intermittent นาน ๆ</b>, กิน solid แล้วต้องกระโดด/ทำท่าให้ลง — เป็นมานานแล้วค่อยมาตอนอายุ 50–60 ก็ยังต้อง EGD')
        + tb([E + ' Chicago 4.0 (HRM)', 'เกณฑ์'],
             ['Type I (classic)', 'IRP สูง + 100% failed peristalsis, ไม่มี pressurization'],
             ['Type II', 'IRP สูง + 100% failed peristalsis + panesophageal pressurization ≥20% — <b>ตอบสนองการรักษาดีสุด</b>'],
             ['Type III (spastic)', 'IRP สูง + premature (spastic) contractions ≥20% — ชอบ <b>POEM</b>'])
        + f'<p class="mut">{E} pseudoachalasia สงสัยมากเมื่อ: อายุ &gt;50–60, อาการ &lt;1 ปี, น้ำหนักลดเร็ว · Tx achalasia: pneumatic dilation · <b>Laparoscopic Heller myotomy + Dor fundoplication</b> · <b>POEM</b> · botulinum toxin ในคนไม่ fit · achalasia เพิ่มความเสี่ยง SCC {p.R("ACGACH")} {p.R("CHICAGO")}</p>')
    h += box('Esophageal CA — T staging (AJCC 8th) ' + MK, '', tb(['T', 'ชั้นที่กิน', 'Tx (อาจารย์ + ' + E + ')'],
        ['T1a', '<b>mucosa</b> (lamina propria / muscularis mucosae) — ห้ามทะลุ mucosa', f'{imp("endoscopic resection")} (EMR/ESD)'],
        ['T1b', '<b>submucosa</b>', 'esophagectomy (N0)'],
        ['T2', 'muscularis propria', 'esophagectomy ถ้า N0 (อาจารย์) · ' + E + ' NCCN: T2N0 ความเสี่ยงต่ำ (&lt;3 cm, well-diff) ผ่าได้เลย ไม่งั้น neoadjuvant'],
        ['T3', 'adventitia', 'locally advanced'],
        ['T4a', '<b>resectable</b>: pleura, pericardium, <b>diaphragm</b> ' + E + ' azygos vein, peritoneum', 'locally advanced (ยังตัดได้)'],
        ['T4b', '<b>unresectable</b>: <b>aorta, vertebral body (spine), airway</b>', E + ' definitive CRT'])
        + f'<p>อาจารย์: ให้ไปเสิร์ช "T staging esophageal cancer" แล้ว<b>จำรูป</b>ว่า T1–T3 ถึงชั้นไหน {p.R("AJCCES")}</p>')
    h += box('Esophageal CA — Treatment ' + MK, '', tb(['กลุ่ม', 'Tx'],
        ['<b>Early</b>: T1–T2 <b>N0</b>', f'{imp("upfront esophagectomy")} (transthoracic) · T1a → endoscopic'],
        ['<b>Locally advanced</b>: T3–T4a หรือ <b>N+</b>', f'curative 2 ทาง: ① {imp("pre-op (neoadjuvant) chemoradiation → esophagectomy")} — RT ~<b>41.4 Gy</b> · ② {imp("definitive chemoradiation")} — RT <b>&gt;50 Gy</b> "ฉายให้ตายหมด" · clinical complete response ~30–40%'],
        ['<b>ข้อบ่งชี้ definitive CRT</b>', '① <b>unfit for surgery</b> (severe COPD, heart ไม่ดี — เข้า chest ไม่ไหว) ② <b>lesion สูง (cervical esophagus)</b> — ผ่าได้แต่ morbidity สูงมาก ③ <b>ปฏิเสธผ่าตัด</b>'])
        + f'<p>{FIX("⚠ ตัวเลข")} "cCR ~30–40%" ของ definitive CRT แตกต่างมากตามกลุ่มคนไข้: unresectable (T4b) ในการทดลองญี่ปุ่น <b>11–25%</b> · cohort ESCC ทั่วไปรายงาน CR ~<b>40%</b> → จำว่า "ประมาณ 1/4 ถึง 2/5" และ cCR สัมพันธ์กับ survival ที่ดีกว่า {p.R("DCRCR")}</p>'
        + f'<p>{FIX("⚠ คำจำกัดความทับกัน")} ในเทปพูดทั้ง "early = T1–T2" และ "locally advanced = T2–T4 + N+" → ใช้แบบนี้: <b>T1–T2 N0 = early</b> · <b>T3–T4a หรือ N+ = locally advanced</b> · T4b = unresectable</p>'
        + f'<p class="mut">{E} CROSS = carboplatin + paclitaxel + 41.4 Gy/23 fx → esophagectomy (ได้ผลดีมากใน <b>SCC</b> — ไทยส่วนใหญ่ SCC กลางหลอดอาหาร) · <b>adenocarcinoma</b>: ESOPEC 2025 → <b>perioperative FLOT ดีกว่า CROSS</b> (5-yr OS ~51% vs 39%) · เหลือ residual disease หลัง neoadjuvant CRT + R0 → adjuvant <b>nivolumab 1 ปี</b> (CheckMate 577) · definitive CRT 50–50.4 Gy เป็นมาตรฐานของ cervical SCC {p.R("ESOPEC")}</p>'
        + gl('NCCN Esophageal v4.2026 · ESMO 2026',
             f'SCC ที่ resectable: neoadjuvant CRT → esophagectomy หรือ definitive CRT (โดยเฉพาะ cervical / ตอบสนองดีและติดตามได้) · adenocarcinoma: <b>perioperative FLOT (category 1 preferred)</b> ± durvalumab {p.R("NCCNES")} {p.R("ESMOGO")}'))
    return h
add('R00.A-8', 'Esophagus — dysphagia: EGD first (pseudoachalasia), HRM Chicago 4.0, achalasia vs CA · Esophageal CA: AJCC T staging, early vs LA, CROSS/dCRT/FLOT (ESOPEC)', ['Esophagus', 'Oncology principles'],
    ['ACGACH', 'CHICAGO', 'AJCCES', 'NCCNES', 'ESOPEC', 'ESMOGO', 'DCRCR'], b8)

# =====================================================================================  9 Stomach: dyspepsia/PUD, gastric CA, GOO, GIST
def b9(p):
    h = f'<div class="iointro"><b>Stomach</b> — dyspepsia/PUD (สิ่งสำคัญคือ <b>red flag → EGD</b> ไม่ใช่การแยก GU/DU) · gastric CA (red flag, early vs LA, Western vs Eastern) · GOO metabolic · GIST ("เคยออกสอบ")</div>\n'
    h += box('Dyspepsia, GU vs DU, red flags', '', ul(
        'GU vs DU จากอาการกินข้าว <b>แยกไม่ได้ 100%</b> แค่สงสัย · การรักษาไม่ต่างกันมาก · ถ้าจะเอาจริงต้อง EGD',
        f'สำคัญกว่า = {imp("red flag sign → indication EGD")} · มี red flag → EGD เลย · ไม่มี → try ยา',
        f'"แค่<b>อายุเยอะ</b>ก็เป็น red flag แล้ว"')
        + tb([E + ' Guideline', 'EGD เมื่อ'],
             ['Thailand dyspepsia 2018', '<b>อายุเริ่มอาการ ≥50 ปี</b> · มี alarm features · ไม่ตอบสนองยาที่เหมาะสม → EGD + rapid urease test/histology H. pylori'],
             ['ACG/CAG 2017', '<b>อายุ ≥60 ปี</b> ทุกราย (&lt;60 ไม่ใช้ alarm อย่างเดียวเป็นเกณฑ์)'],
             ['Alarm features', 'dysphagia/odynophagia · น้ำหนักลด · GI bleeding/anemia · <b>persistent vomiting</b> · คลำก้อน/LN · jaundice · family Hx gastric CA'])
        + f'<p class="mut">{E} ไทย: ไม่มี alarm → empirical PPI 4–8 สัปดาห์ (ทรัพยากรตรวจ H. pylori จำกัด) {p.R("THDYSP")} {p.R("DYSP")}</p>')
    h += box('Gastric ulcer — malignant features, Johnson, biopsy', '', ul(
        'GI bleeding: บอกไม่ได้ว่า ulcer หรือ cancer จากประวัติ (เช่น weight loss) → <b>EGD + pathology เสมอ</b>',
        'Location peptic ulcer typical: <b>prepyloric, duodenum</b> · <b>lesser curve (incisura angularis) = Johnson type I</b> → ระวัง cancer ร่วม',
        'Ulcer ลักษณะ cancer: <b>irregular margin</b>, <b>dirty base</b>, <b>contact bleeding</b> มาก, <b>ulcer on mass</b>',
        f'Biopsy {imp("รอบขอบแผล 6–8 ชิ้น")} + ส่ง <b>H. pylori (CLO test)</b> ด้วยเสมอ')
        + tb(['Modified Johnson', 'ตำแหน่ง', 'กรด'],
             ['I (พบบ่อยสุด, เสี่ยง CA มากสุด)', 'lesser curve body — <b>incisura angularis</b>', 'ปกติ/ต่ำ (barrier เสีย)'],
             ['II', '<b>GU (body) + DU</b>', 'สูง'],
             ['III', '<b>prepyloric</b>', 'สูง'],
             ['IV', 'lesser curve สูง ใกล้ <b>GEJ</b> (proximal)', 'ต่ำ (barrier)'],
             ['V', 'ที่ไหนก็ได้ — <b>NSAIDs</b>', '—'])
        + f'<p>{FIX()} ในเทปตอนแรกพูดสลับ "type 2 = prepyloric, type 3 = GU+DU" แล้วแก้ทีหลังเป็น type 2 = DU+GU, type 3 = prepyloric → <b>ที่ถูก: II = GU + DU · III = prepyloric</b> (type I, IV = barrier เสีย · II, III = กรดสูง) {p.R("JOHN")}</p>'
        + f'<p class="mut">{E} biopsy ≥7 ชิ้นจากขอบแผลให้ sensitivity ~98% · <b>EGD ซ้ำ 8–12 สัปดาห์</b> ดูแผลหายทุก GU · หยุด PPI ≥2 สัปดาห์ก่อนตรวจ H. pylori (false negative) · ตรวจ eradication หลังรักษา {p.R("MAAS")}</p>')
    h += box('Gastric cancer ' + MK, '', ul(
        f'Presentation: {imp("red flag")} (most common) · dyspepsia, <b>bleeding</b>, <b>obstruction (GOO)</b> = advanced · หรือ screening EGD ไม่มีอาการ',
        'EGD: ulcer, mass · ส่วนใหญ่ <b>adenocarcinoma</b> → <b>CT</b> staging',
        f'<b>Early</b> (T1 — ถึงแค่ submucosa ไม่ถึง muscle): {imp("resection first")} → endoscopic (<b>T1a เท่านั้น</b>: EMR/ESD — "ไม่ถามระดับเอ็ง") หรือ surgical · T1–T2 N0 → upfront <b>gastrectomy + D2 lymphadenectomy</b> (standard)',
        f'<b>Locally advanced</b> (T3–T4 หรือ N+): 2 ค่าย ตอบอะไรก็ไม่ผิด — <b>Western (NCCN)</b>: {imp("perioperative chemo")} 4 cycles → gastrectomy D2 → 4 cycles ("sandwich") · <b>Eastern (Japan)</b>: {imp("upfront gastrectomy D2 → adjuvant chemo")}',
        f'ชอบกระจาย <b>peritoneum</b> (occult peritoneal mets ใน T3 พบบ่อย) → NCCN: {imp("staging laparoscopy ตั้งแต่ T1b ขึ้นไป")}',
        'ข้อสอบจะถามก้ำกึ่งตรง T3–T4: periop หรือผ่าก่อน → ไม่ผิดทั้งคู่ แล้วแต่ค่าย')
        + f'<p>{FIX("⚠ ขอบเขต")} NCCN v2.2026: perioperative chemo สำหรับ <b>≥cT2 หรือ N+</b> (ไม่ใช่เริ่มที่ T3) · staging laparoscopy + <b>peritoneal cytology</b> สำหรับ ≥cT1b ที่จะผ่า · อาจารย์เอ่ยตัวเลข occult peritoneal mets ~40–50% ใน T3 — แต่ละการศึกษาให้ตัวเลขต่างกันมาก จำหลัก "เจอบ่อยพอที่ต้อง lap ก่อน" ก็พอ {p.R("NCCNGA")}</p>'
        + gl('NCCN Gastric v2.2026 · JGCA 7th ed. (2025) · MATTERHORN',
             f'Western: <b>FLOT</b> 4 + 4 cycles (FLOT4) + <b>durvalumab</b> (MATTERHORN — FDA 2025) {p.R("MATT")}',
             f'Eastern (JGCA 7th ed. 2025): D2 gastrectomy → adjuvant S-1 / CAPOX / docetaxel+S-1 ยังเป็นมาตรฐาน · ESD absolute: differentiated, intramucosal (cT1a), ไม่มี ulcer (UL0) {p.R("JGCA7")}'))
    h += box('Gastric outlet obstruction (GOO) ' + MK, '', ul(
        'ก้อนใหญ่ที่ <b>antrum</b> → กินแล้วอาเจียน <b>เป็นอาหารมื้อก่อน</b> · PE: <b>succussion splash</b>',
        'มา ER: <b>severe dehydration</b>, BUN/Cr ขึ้น')
        + flow('อาเจียนเสียกรด + น้ำ', 'hypochloremic hypokalemic metabolic alkalosis', 'ร่างกายเก็บ Na⁺ (aldosterone)', 'ขับ H⁺ ออก', 'paradoxical aciduria', last_red=True)
        + ul(f'Typical 2 อันที่ออกสอบ: {imp("hypokalemic hypochloremic metabolic alkalosis")} + {imp("paradoxical aciduria")}',
             f'First line = volume resuscitation · fluid of choice = {imp("normal saline")} (ต้องการ Na⁺)',
             f'{imp("ห้ามแก้ K⁺ จนกว่า urine ออก")} และ BUN/Cr ไม่สูง (รอ lab)')
        + f'<p class="mut">{E} เมื่อ urine ออกแล้วเติม KCl ใน NSS · NG decompression · PPI · EGD หาสาเหตุ (ปัจจุบันส่วนใหญ่ malignancy) → benign: balloon dilatation; malignant: gastrojejunostomy / enteral stent / EUS-GE</p>')
    h += box('GIST (gastrointestinal stromal tumor) — "เคยออกสอบ"', '', ul(
        'ไม่ใช่ subtype ของ gastric cancer — เป็น <b>mesenchymal tumor</b> (submucosa/muscle) จาก <b>interstitial cell of Cajal</b> · tyrosine kinase pathway ผิดปกติ',
        'EGD: <b>subepithelial lesion</b> ก้อนกลม <b>mucosa เรียบ</b> · endophytic / exophytic / <b>dumbbell</b>',
        f'Presentation: บังเอิญ หรือ {imp("bleeding")} (ulcer on top) = most common · คลำก้อนต้องใหญ่มาก (&gt;10 cm) — gut obstruction ไม่ค่อยมี',
        '<b>CT</b>: ตำแหน่ง + staging (malignant potential) — mets ไป <b>liver + peritoneum</b>',
        '<b>Metastatic</b> → tissue dx: <b>EUS-FNB</b> → palliative systemic: <b>imatinib (Gleevec)</b> (TKI)',
        '<b>Localized resectable</b> → ผ่าตัด (<b>&gt;2 cm ผ่าได้เลย</b>, ส่วนใหญ่ <b>lap/MIS</b>)',
        '<b>Localized แต่ significant morbidity</b> (ต้องตัดอวัยวะอื่น — pancreas, spleen, colon · ก้อน &gt;10 cm · ที่ <b>EGJ</b>) → <b>imatinib ก่อน 9–12 เดือน</b> / จน maximum response → ผ่า ("ลึกไปสำหรับเอ็ง แต่ให้รู้ไอเดีย")')
        + f'<p class="mut">{E} marker: <b>KIT (CD117)</b> ~95%, <b>DOG1</b>, PDGFRA · stomach ~60%, small bowel ~30% · <b>ไม่ต้อง lymphadenectomy</b> (LN mets น้อยมาก) · ผ่า R0 แบบ wedge/segmental ระวัง<b>ก้อนแตก</b> · gastric GIST &lt;2 cm ไม่มี high-risk EUS feature → surveillance ได้ · <b>adjuvant imatinib 3 ปี</b> ใน high risk (ขนาด, mitotic count, ตำแหน่ง, rupture) · imatinib neoadjuvant ปกติ 6–12 เดือน · PDGFRA D842V ดื้อ imatinib → avapritinib {p.R("GIST")}</p>')
    return h
add('R00.A-9', 'Stomach — dyspepsia red flags (Thai 2018 vs ACG), Johnson & malignant ulcer, gastric CA (early vs LA, Western vs Eastern, staging lap), GOO metabolic, GIST', ['Stomach & Duodenum', 'Oncology principles', 'Fluid, Electrolyte & Nutrition'],
    ['THDYSP', 'DYSP', 'JOHN', 'MAAS', 'NCCNGA', 'MATT', 'JGCA7', 'GIST'], b9)

# =====================================================================================  10 Periampullary
def b10(p):
    h = f'<div class="iointro"><b>Periampullary cancer</b> — 4 ต้นกำเนิด: <b>head of pancreas</b> (พบมากสุด), <b>distal cholangiocarcinoma</b>, <b>ampulla</b>, <b>duodenum</b> · มาด้วย {imp("painless progressive jaundice")} · curative option เดียว = <b>Whipple</b></div>\n'
    h += box('Clinical + Courvoisier\'s law', '', ul(
        'เหลืองไม่นาน + obstructive symptoms: <b>คัน</b>, ฉี่เข้ม, อุจจาระซีด · อาจมี biliary colic/แน่นท้องหลังกิน · เหลืองได้ถึง 20–30 mg/dL',
        f'{imp("Courvoisier’s law")}: obstructive jaundice + <b>คลำได้ gallbladder</b> → rarely due to stone (stone → chronic inflammation ผนัง GB หนาไม่ยืด) → <b>imply malignancy (periampullary)</b>')
        + tb(['ต้นกำเนิด', 'จุดแยก (อาจารย์)'],
             ['<b>CA pancreas</b> (มากสุด)', '<b>endocrine insufficiency</b>: DM ใหม่ / DM เดิมคุมยากขึ้น + เหลือง · <b>exocrine (PEI)</b>: steatorrhea, bloating, gas pain หลังกินมัน · sign of pancreatitis'],
             ['<b>Ampulla</b>', f'{imp("intermittent jaundice")} (tumor necrosis หลุด → หาย obstruction ชั่วคราว) · <b>occult bleeding/ซีด</b>'],
             ['<b>Distal CBD</b>', 'เหลืองอย่างเดียว'],
             ['<b>Duodenum</b>', 'ก้อนใหญ่ → <b>GOO</b> · GI bleeding / occult bleeding'])
        + f'<p class="mut">{E} ampulla: occult blood + acholic stool = "silver stool" · ampullary CA prognosis ดีสุดในกลุ่มนี้ · pancreas: back pain = มักกิน celiac plexus (unresectable), Trousseau sign (migratory thrombophlebitis) · CA 19-9 แปลผลหลังลดเหลือง</p>')
    h += box('Investigation & treatment ' + MK, '', ul(
        '<b>CT</b> (pancreas protocol, triple phase) staging',
        f'Curative option เดียว = {imp("Whipple (pancreaticoduodenectomy)")}: ตัด head of pancreas, duodenum, bile duct, gallbladder → reconstruction')
        + f'<h4>{imp("Pre-op biliary drainage")} — ต้องลดเหลืองก่อนผ่าไหม? → <b>ไม่จำเป็น</b> · ทำเมื่อ:</h4>' + ol(
        '<b>Cholangitis</b>',
        'ยังตัดไม่ได้ / ต้องให้ <b>neoadjuvant</b> ก่อน (เช่น pancreas ติด <b>portal vein / SMV</b>)',
        '<b>Severe malnutrition</b>',
        '<b>Severe pruritus</b> รบกวนชีวิต')
        + tb(['วิธี drain', ''], ['<b>Internal</b>', 'ERCP + <b>stent</b>'], ['<b>External</b>', 'PTBD (percutaneous transhepatic biliary drainage) — intervention แทงเข้าทางตับ ระบายลงถุง'])
        + f'<p class="mut">{E} RCT (van der Gaag 2010): routine PBD → serious complication 74% vs ผ่าตัดเลย 39% {p.R("PBD")} · ข้อบ่งชี้อื่นที่ใช้กัน: รอผ่าตัดนาน, bilirubin สูงมาก, AKI · เลือก <b>ERCP + short self-expanding metal stent</b> ก่อน PTBD {p.R("NCCNPA")}</p>'
        + gl('NCCN Pancreatic Adenocarcinoma 2026',
             f'Resectable: ไม่มี arterial contact (celiac, SMA, CHA) และ SMV/PV contact ≤180° ไม่บิดรูป · <b>borderline</b>: SMV/PV &gt;180° แต่ reconstruct ได้, SMA ≤180°, CHA สั้น ๆ → <b>neoadjuvant</b> ก่อน · locally advanced: SMA/celiac &gt;180° · หลังผ่าตัด: <b>adjuvant mFOLFIRINOX</b> (fit) หรือ gemcitabine + capecitabine {p.R("NCCNPA")}'))
    return h
add('R00.A-10', 'Periampullary cancer — painless jaundice, Courvoisier, 4 origins (pancreas/ampulla/distal CBD/duodenum), Whipple, pre-op biliary drainage indications', ['Pancreas & Spleen', 'Jaundice', 'Oncology principles'],
    ['PBD', 'NCCNPA'], b10)

# =====================================================================================  11 Colorectal cancer
def b11(p):
    h = f'<div class="iointro"><b>Colorectal cancer</b> — "กว้างจัด ๆ" ถ้าถามน่าจะถาม <b>colonic obstruction</b> (ดูหน้า Bowel) · colon: <b>ผ่าตัดก่อน</b> แล้ว adjuvant · rectum: ปัญหาคือ <b>local recurrence</b> → T3+/N+ ให้ neoadjuvant ก่อน · screening FIT vs colonoscopy</div>\n'
    h += box('Colectomy ตามตำแหน่งก้อน', '', tb(['ตำแหน่ง', 'ผ่าตัด'],
        ['Cecum / ascending', '<b>Right hemicolectomy</b> (ตัด ileocolic, right colic, <b>right branch ของ middle colic</b>)'],
        ['Hepatic flexure / proximal transverse', '<b>Extended right hemicolectomy</b> (ตัดที่ <b>ตอ middle colic</b> = เอา left branch ด้วย)'],
        ['Mid transverse', 'ไม่นิยม transverse colectomy (ต้องดึง hepatic + splenic flexure มาต่อ — เลือดเลี้ยงไม่ดี รั่ว) → extended right'],
        ['Splenic flexure', '<b>Left hemicolectomy</b> หรือ <b>subtotal colectomy</b> (ถ้าดูเลือดเลี้ยงไม่ดี — watershed)'],
        ['Descending', 'Left hemicolectomy'],
        ['Sigmoid', 'Sigmoidectomy / anterior resection'],
        ['Upper–mid rectum', '<b>LAR</b> (low anterior resection)'],
        ['Rectum ติดก้น (sphincter)', '<b>APR</b> (abdominoperineal resection) → เย็บปิดรูทวาร = <b>permanent colostomy</b>'])
        + f'<p class="mut">{E} watershed area แบบคลาสสิก = <b>Griffiths point (splenic flexure</b>, SMA–IMA) และ <b>Sudeck point (rectosigmoid)</b> — hepatic flexure ไม่ใช่ watershed หลัก · rectum ใช้ <b>TME (total mesorectal excision)</b> ลด local recurrence {p.R("NCCNCRC")}</p>')
    h += box('Colon vs Rectum — sequence การรักษา', '', tb(['', 'อาจารย์', E + ' ปัจจุบัน'],
        ['<b>Colon</b>', f'{imp("ผ่าก่อน")} ถ้าผ่าได้ → adjuvant chemo ทีหลังหมด', 'adjuvant: <b>stage III</b> (CAPOX/FOLFOX; low-risk III CAPOX 3 เดือนพอ) + high-risk stage II · <b>cT4b/bulky node</b> อาจ neoadjuvant chemo ก่อน (FOxTROT) · <b>dMMR</b>: neoadjuvant immunotherapy กำลังมา'],
        ['<b>Rectum</b>', f'อยู่ใน pelvis คล้าย esophagus · mets ไม่ค่อยเยอะ แต่ {imp("local recurrence")} → <b>T3 ขึ้นไป หรือ N+</b> → {imp("neoadjuvant CRT → ผ่าตัด")} (ไม่ผ่าก่อน)', f'<b>TNT (total neoadjuvant therapy)</b>: RT (short-course หรือ long-course CRT) + chemo ทั้งหมดก่อนผ่า → TME · clinical complete response → <b>watch-and-wait</b> ได้ · <b>dMMR → dostarlimab/immunotherapy</b> (cCR สูงมาก) · staging ด้วย <b>MRI pelvis</b>'], wrap=True)
        + f'<p class="mut">{E} {p.R("NCCNCRC")}</p>')
    h += box('CRC screening (average risk)', '', ul(
        f'<b>FIT</b>: ใช้ screening <b>กลุ่มใหญ่ (population)</b> — "หว่าน FIT" → FIT + → colonoscopy',
        f'<b>Gold standard = colonoscopy</b> · average risk อายุเข้าได้ → colonoscopy เลยก็ตอบได้',
        'อายุเริ่ม: เมื่อก่อน 50 → ปัจจุบัน <b>45</b>',
        'คนไข้ที่จะ colonoscopy อยู่แล้ว <b>ไม่ต้องทำ FIT</b> ก่อน')
        + gl('USPSTF 2021',
             f'Screening อายุ <b>45–75</b> (45–49 = grade B, 50–75 = grade A) · 76–85 เลือกเป็นราย ๆ · ตัวเลือก: <b>FIT ทุกปี</b>, sDNA-FIT 1–3 ปี, CT colonography 5 ปี, <b>colonoscopy ทุก 10 ปี</b> · ผล non-colonoscopy บวก → colonoscopy {p.R("USPSTF")}'))
    return h
add('R00.A-11', 'Colorectal cancer — colectomy by location (right / extended right / left / LAR / APR), colon vs rectum sequence (TNT, watch-and-wait), screening FIT vs colonoscopy (USPSTF 2021)', ['Colorectal & Anorectal', 'Oncology principles'],
    ['NCCNCRC', 'USPSTF'], b11)

# =====================================================================================  12 Groin hernia
def b12(p):
    h = f'<div class="iointro"><b>Groin hernia</b> — อาจารย์: {imp("ออกแน่นอน: incarcerated / obstructed / strangulated — ต้อง manage ให้เป็น")} · inguinal (direct, indirect, pantaloon) พบมากกว่า femoral</div>\n'
    h += box('ศัพท์การผ่าตัด', '', tb(['คำ', 'ความหมาย'],
        ['<b>Herniotomy</b>', 'เปิด/เลาะ sac + <b>high ligation</b> — พอสำหรับ <b>เด็ก</b> (patent processus vaginalis, floor ไม่ weak)'],
        ['<b>Herniorrhaphy</b>', 'ซ่อม floor ด้วย <b>tissue repair</b> (เย็บ) ' + E + ' เช่น Bassini, Shouldice, McVay'],
        ['<b>Hernioplasty</b>', 'ซ่อมด้วย <b>mesh</b> — standard ผู้ใหญ่ = <b>tension-free (Lichtenstein)</b>'])
        + '<p>ผู้ใหญ่ทำแค่ herniotomy + high ligation → recurrent เพราะ floor weak → ต้องซ่อม floor</p>')
    h += box('Elective (ไม่มี complication)', '', ul('อาจารย์: ตรวจเจอ → <b>ต้องผ่าตัด ห้าม conservative</b> (สุดท้ายจะมี complication)')
        + f'<p>{FIX("⚠ เทียบ guideline")} HerniaSurge 2018/2023: ผู้ชายที่ <b>ไม่มีอาการ/อาการน้อย</b> → <b>watchful waiting ได้</b> (emergency ~0.2%/ปี) แต่ส่วนใหญ่สุดท้ายต้องผ่า · <b>ผู้หญิง</b> → ผ่า (แนะนำ laparo-endoscopic, ไม่พลาด femoral) · <b>femoral</b> → ผ่าเร็ว · <b>เด็ก</b> → herniotomy โดยไม่ต้องรอ · ข้อสอบไทยส่วนใหญ่ยังตอบ "elective repair" {p.R("HSURGE")}</p>'
        + f'<p class="mut">{E} mesh repair = first choice (open Lichtenstein หรือ TEP/TAPP) · แก้ปัจจัยเพิ่มแรงดัน (ท้องผูก, BPH, ไอเรื้อรัง)</p>')
    h += box('Complicated groin hernia — 3 condition ' + MK, '', tb(['', 'นิยาม', 'Tx (อาจารย์)'],
        [imp('Incarcerated'), '<b>irreducible</b> — ดันกลับไม่ได้ · content อาจเป็น bowel หรือ omentum (บอกไม่ได้ถ้าไม่มี obstruction)', f'{imp("อันเดียวที่ดันได้ (taxis)")} ถ้ามา <b>&lt;6 ชม.</b> → admit observe → ดีไม่ปวดไม่ recurrent → นัด elective หรือผ่าใน same admission ก็ได้'],
        [imp('Obstructed'), 'incarcerated + <b>bowel obstruction</b> (4 cardinal signs, film SBO: dilate, step-ladder)', f'{imp("ห้ามดันเด็ดขาด")} → <b>emergency surgery ผ่าน groin</b>'],
        [imp('Strangulated'), 'bowel โดนรัดจน <b>ischemia/gangrene</b>/แตก — local: ปวด บวม แดง ร้อน · peritonitis, ไข้สูง, look sick, HR เร็ว, SIRS/sepsis', '<b>Emergency surgery</b>: <b>groin incision ก่อน</b> → ดู bowel → ตัดต่อผ่าน groin → ปิด groin ด้วย <b>tissue repair</b> · <b>ห้ามใส่ mesh</b>'])
        + f'<p>{FIX("⚠ ที่มาตัวเลข")} "ดันได้ถ้า &lt;6 ชม." เป็นตัวเลขที่สอนกันในตำรา/วอร์ด — <b>HerniaSurge และ WSES ไม่ได้กำหนดชั่วโมง</b> ใช้เกณฑ์ว่า <b>ไม่มีอาการแสดงของ strangulation/obstruction</b> จึงลองดันได้ (± sedation) แล้วผ่าตัดเร็ว {p.R("HSURGE")} {p.R("WSESH")} → ข้อสอบไทยยังใช้ "&lt;6 ชม. + ไม่มี sign" ได้</p>'
        + f'<p><b>Reduction en masse</b>: ดัน obstructed hernia → sac ที่มี adhesion เข้าไปทั้งก้อน → bowel ยังติดคอ sac (obstruction/strangulation ต่อในท้อง) → จึงห้ามดัน</p>'
        + f'<p>{FIX("⚠ เทียบ guideline")} WSES 2017: strangulated <b>ไม่มี gross contamination</b> (clean-contaminated แม้ตัดลำไส้) → <b>synthetic mesh ใช้ได้</b> (recurrence ต่ำกว่า, SSI ไม่เพิ่มชัด) · <b>contaminated/dirty</b> (เนื้อตาย, หนอง, ลำไส้แตก) → tissue repair หรือ biologic mesh → ข้อสอบ: เห็นลำไส้เน่า/แตก/หนอง = <b>ไม่ใส่ synthetic mesh</b> {p.R("WSESH")}</p>'
        + gl('HerniaSurge 2018/2023 · WSES 2017',
             f'Incarcerated ไม่มี sign strangulation → manual reduction ได้ (± sedation) แล้วผ่าตัดเร็ว · ประเมิน viability ลำไส้เสมอเมื่อผ่า emergency (diagnostic laparoscopy ช่วยได้หลัง hernia หลุดเข้าไปเอง) {p.R("HSURGE")}',
             f'Emergency repair ให้ ATB prophylaxis · bowel viable → ซ่อมแบบ elective (mesh) ได้ {p.R("WSESH")}'))
    return h
add('R00.A-12', 'Groin hernia — herniotomy vs herniorrhaphy vs hernioplasty, elective (watchful waiting?), incarcerated vs obstructed vs strangulated, reduction en masse, mesh in contamination', ['Hernia & Abdominal wall'],
    ['HSURGE', 'WSESH'], b12)

# =====================================================================================  13 High-yield summary
def b13(p):
    h = '<div class="iointro"><b>High-yield จาก Q&amp;A</b> — สิ่งที่อาจารย์ย้ำว่า "ออกแน่ / ชอบออก" + จุดที่แก้/อัปเดตจาก guideline (รวมไว้ทวนก่อนสอบ)</div>\n'
    h += box('อาจารย์ย้ำว่าออกสอบ', '', tb(['เรื่อง', 'คำตอบที่ต้องได้'],
        ['Breast (3–4 ข้อ/ปี)', 'cTNM → early (surgery first) vs LA (systemic first) vs M1 (no surgery) · breast: ดู contraIx BCT · axilla: cN0 SLNB / cN1 FNA+ → ALND, FNA− → SLNB'],
        ['Gallstone pancreatitis (อาจารย์ออกปี 5)', 'mild → LC same admission · severe → รอ (~6–8 wk) · ERCP เฉพาะ cholangitis / retained stone'],
        ['ERAS', 'ข้อใดไม่ใช่: routine NG, routine drain, NPO after midnight, opioid-based, bed rest, Foley ค้าง'],
        ['Groin hernia', 'incarcerated &lt;6 ชม. ดันได้ · obstructed ห้ามดัน (reduction en masse) · strangulated → emergency, tissue repair'],
        ['Thyroid nodule', 'TSH ก่อน → U/S pattern → FNA (≥1 cm high/intermediate) → Bethesda · ไทรอยด์เป็นพี่ที่ออก'],
        ['GOO', 'hypoK hypoCl metabolic alkalosis + paradoxical aciduria · NSS · ห้ามให้ K ก่อน urine ออก'],
        ['Sigmoid volvulus', 'coffee bean (ไป RUQ) · detorsion → sigmoidectomy same admission'],
        ['Dysphagia / achalasia', 'EGD first (pseudoachalasia) · HRM = gold standard'],
        ['Cellulitis vs NF', 'pain out of proportion · hemorrhagic bleb · crepitus · finger test · NF = debridement + second look']))
    h += box('จุดที่แก้/อัปเดต (เทป ↔ guideline ล่าสุด)', '', tb(['ในเทป/โน้ต', 'ที่ถูก/ล่าสุด'],
        ['Aggressive fluid ใน AP', 'moderate goal-directed LR (WATERFALL, ACG 2024)'],
        ['ALND lymphedema 30–40%', '~20% (SLNB ~6%)'],
        ['Luminal B Ki-67 &gt;14%', 'St Gallen 2011 = 14%; 2013 = 20%; IKWG 2021 ≤5 ต่ำ ≥30 สูง'],
        ['supraclavicular = N2/N3', '<b>cN3c</b>'],
        ['BRCA / multicentric = ห้าม BCT', 'BRCA ไม่ใช่ข้อห้าม · multicentric 2–3 ก้อน BCT ได้ (Z11102)'],
        ['APC / wall of necrosis', 'ANC / walled-off necrosis (WON)'],
        ['SBS มี ICV accept 120–150 cm', '&lt;200 cm ทุกแบบ; PN-dependence: J &lt;115, JC &lt;60–65, JIC &lt;30–35 cm'],
        ['Visible peristalsis = ผ่า', 'Bologna: ผ่าทันทีเมื่อ peritonitis/strangulation/ischemia; อย่างอื่นลอง NOM + Gastrografin'],
        ['Aspirin primary prevention หยุด 7 วัน', 'CHEST 2022 แนะนำให้ต่อ (หยุด ≤7 วันถ้า bleeding risk สูง)'],
        ['Polyester absorbable · PDS multifilament', 'polyester = non-absorbable braided · PDS = absorbable monofilament'],
        ['Thyroid U/S: intermediate &gt;1.5, low &gt;2 (โน้ต)', 'intermediate ≥1 · low ≥1.5 · very low ≥2 cm (ATA)'],
        ['Bethesda IV = suspicious papillary', 'IV = follicular neoplasm · V = suspicious for malignancy'],
        ['CA thyroid = total only', 'ATA 2025: ≤2 cm cN0 lobectomy; 2–4 cm เลือกได้; &gt;4 cm/ETE/N1/M1 total'],
        ['Johnson type 2 = prepyloric', 'II = GU + DU · III = prepyloric'],
        ['Gastric CA periop เริ่มที่ T3', 'NCCN: ≥cT2 หรือ N+'],
        ['Rectal: neoadjuvant CRT', 'TNT ± watch-and-wait · dMMR → immunotherapy'],
        ['Elective groin hernia ห้าม conservative', 'ชายไม่มีอาการ watchful waiting ได้ (HerniaSurge)'],
        ['Strangulated ห้ามใส่ mesh', 'ไม่มี gross contamination ใส่ synthetic mesh ได้ (WSES)'],
        ['Esophageal CA adenocarcinoma → CROSS', 'ESOPEC 2025: periop FLOT ดีกว่า (SCC ยัง CROSS/dCRT)'],
        ['✎ โน้ต: neostigmine = anticholinergic', '<b>anticholinesterase</b> (เพิ่ม ACh) — ตรงข้ามกัน'],
        ['✎ โน้ต: BI-RADS 1 benign', 'BI-RADS 1 = negative · 2 = benign'],
        ['recurrent biliary event ~30% ใน 3 เดือน', 'PONCHO: 16.9% (interval) vs 4.7% (same admission)'],
        ['dCRT cCR ~30–40%', 'แตกต่างมาก: unresectable 11–25%, cohort ทั่วไป ~40%'],
        ['ดัน incarcerated ได้ถ้า &lt;6 ชม.', 'guideline ไม่กำหนดชั่วโมง — ดูว่าไม่มี sign strangulation/obstruction']))
    h += box('Number bank', '', tb(['ตัวเลข', 'เรื่อง'],
        ['IRP &gt;15 mmHg', 'achalasia (HRM)'], ['41.4 Gy vs &gt;50 Gy', 'pre-op CRT (CROSS) vs definitive CRT'],
        ['BI-RADS 3 ≤2% → F/U 6 เดือน', 'BI-RADS 4A 2–10 · 4B 10–50 · 4C 50–95 · 5 ≥95'],
        ['T1 ≤2 · T2 2–5 · T3 &gt;5 cm', 'breast T'], ['≥3 BISAP', 'severe AP'],
        ['&lt;4 wk / &gt;4 wk', 'APFC/ANC vs pseudocyst/WON'], ['ERCP ≤24 ชม. / ≤72 ชม.', 'toxic cholangitis / ไม่รุนแรง'],
        ['&lt;200 cm', 'short bowel'], ['6 เดือน – 2 ปี', 'adaptation phase SBS'],
        ['cecum &gt;12 cm', 'เสี่ยงทะลุ'], ['SB &gt;3 cm', 'SBO film'],
        ['7 วัน / 5 วัน', 'aspirin (ถ้าหยุด) / clopidogrel'], ['DES 6 เดือน (ACS 12)', 'เลื่อน elective surgery'],
        ['10–14 วัน', 'nutrition ก่อนผ่าตัด (ESPEN 2025)'], ['NPO &gt;7 วัน', 'เริ่ม nutrition support'],
        ['≤2–3 cm', 'ablation HCC'], ['Milan 1 ≤5 / ≤3 ก้อน ≤3 cm', 'transplant'], ['4 wk', 'PVE → FLR โต'],
        ['&gt;1 cm', 'FNA thyroid (high/intermediate)'], ['&gt;2 cm', 'ผ่า GIST'], ['9–12 เดือน', 'imatinib neoadjuvant (อาจารย์)'],
        ['6–8 ชิ้น', 'biopsy ขอบ gastric ulcer'], ['45 ปี', 'เริ่ม CRC screening'], ['&lt;6 ชม.', 'ดัน incarcerated hernia ได้'],
        ['24–48 ชม.', 'second look NF']))
    return h
add('R00.A-13', 'สรุป High-yield — สิ่งที่อาจารย์ย้ำว่าออกสอบ, จุดแก้/อัปเดตจาก guideline, number bank', ['Oncology principles', 'Perioperative care & Surgical infection'],
    [], b13)

# =====================================================================================  save
if __name__ == '__main__' or True:
    import os
    head, d = load('data/io.js')
    # 1) R00 เดิม (Mossy) → R00.C
    for doc in d['docs']:
        if doc['code'] == 'R00':
            doc['code'] = 'R00.C'
            doc['src'] = doc['src'].replace('R00 Mossy', 'R00.C Mossy', 1)
            for pg in doc['pages']:
                pg['id'] = pg['id'].replace('R00-', 'R00.C-', 1)
                pg['html'] = pg['html'].replace('จากไฟล์ R00 {{R:1}}', 'จากไฟล์ R00.C {{R:1}}')
                if pg.get('refs'): pg['refs'][0]['t'] = pg['refs'][0]['t'].replace('R00 Mossy', 'R00.C Mossy', 1)
                pg['rev'] = pg.get('rev', 1) + 1; pg['upd'] = UPD
    # 2) R00.A ใหม่ (แทนถ้ามีอยู่แล้ว)
    d['docs'] = [x for x in d['docs'] if x['code'] != CODE]
    LEG = ('<span>ไม่มีป้าย = <b>อาจารย์พูดใน Q&amp;A</b></span><span><span class="imp">ตัวแดง</span> = อาจารย์เน้น / ออกสอบ</span>'
           '<span><span class="hw">ตัวม่วงเอียง</span> = ✎ โน้ตที่พิมพ์ระหว่างฟัง / คำพูดอาจารย์ตรง ๆ</span>'
           '<span><span class="chip e">เสริม</span> = <b>Claude หาเพิ่มจากแหล่งภายนอก</b> (มีเลขอ้างอิง [n])</span>'
           '<span><span class="warn">⚠ แก้</span> / <span class="warn">⚠ อัปเดต</span> = เทป/โน้ตไม่ตรงกับ guideline ล่าสุด (มีทั้งของเดิมและที่ถูก)</span>'
           '<span><span class="chip gl">📘 Guideline</span> = guideline ฉบับล่าสุด (ท้ายกล่อง)</span>')
    newdoc = {'code': CODE, 'kind': 'R', 'title': 'Q&A อาจารย์ศัลย์ 3 ชม. ก่อนสอบ — NF, breast, pancreatitis, bowel, peri-op, liver, thyroid, esophagus, stomach, periampullary, CRC, hernia',
              'src': '✓ ตรวจทุก DOI (48) + ตัวเลขที่เติมกับแหล่งจริงแล้ว 16 พ.ย. 2026 · R00.A — ถอดเทป voice memo Q&A กับอาจารย์ศัลย์ ~3 ชม. (3 วันก่อนสอบ Gen Sx Y4) 3 ไฟล์ + โน้ตที่พิมพ์ระหว่างฟัง 1 ไฟล์ · จัดเป็น 12 เรื่อง + หน้าสรุป High-yield · เติมเนื้อหาส่วนที่อาจารย์พูดสั้น/ให้ไปอ่านเอง จาก guideline ฉบับล่าสุด (ระบุแหล่งทุกจุด)',
              'upd': UPD, 'legend': LEG, 'pages': PAGES}
    d['docs'].append(newdoc)
    save('data/io.js', head, d)
    # 3) resources.js: R00 → R00.C · เพิ่ม R00.A
    rs = open('data/resources.js', encoding='utf8').read()
    i0 = rs.index('\nW.RES=') + 7
    lst = json.loads(rs[i0:].rstrip().rstrip(';'))
    for r in lst:
        if r.get('code') == 'R00':
            r['code'] = 'R00.C'; r['note'] = r['note'].replace('Round I/O R00-', 'Round I/O R00.C-')
    lst = [r for r in lst if r.get('code') != CODE]
    RES = [
     ('Cellulitis vs NF', ['Surgical infection'], 'necroti[sz]ing|fasciitis|cellulitis|crepitus|finger test|LRINEC|vibrio|aeromonas|fournier|gas gangrene|debridement', 'R00.A-1', [
      'แยก NF: pain out of proportion · hemorrhagic bleb (dishwater) · crepitus = NF 100% · worsening เร็ว/sepsis · host แย่ (cirrhosis Child B/C, DM, ESRD, CA)',
      'Vibrio vulnificus = น้ำทะเล/หอย (cirrhosis เสี่ยงตาย) · Aeromonas = น้ำจืด/น้ำท่วม',
      'Finger test positive = เซาะ subcut ลอยจาก fascia ได้ · LRINEC ≥6 สงสัย (Sn ~68% ใช้ rule out ไม่ได้)',
      'NF: resuscitate + vanco + pip-tazo/carbapenem + clindamycin + debridement → second look 24–48 ชม. → plastic coverage']),
     ('Breast', ['Breast', 'Onco'], 'breast|mastectom|lumpectom|\\bBCT\\b|\\bBCS\\b|sentinel|axillary|\\bALND\\b|\\bSLNB\\b|BI-?RADS|luminal|triple.negative|HER2|peau', 'R00.A-2', [
      'Triple assessment · BI-RADS 3 ≤2% F/U 6 เดือน, ≥4 biopsy (CNB ไม่ใช่ FNA — IHC/invasive)',
      'Early (T1–2 N0) surgery first · LA (T4/N+) systemic first · M1 no surgery · HER2+/TNBC ≥cT2 หรือ N+ → neoadjuvant',
      'BCT + RT เสมอ · CI: pregnancy (RT), diffuse calcification, margin + ซ้ำ, IBC · BRCA ไม่ใช่ข้อห้าม',
      'cN0 SLNB · cN1 FNA + → ALND, − → SLNB · Z0011 SLN + 1–2 ไม่ต้อง ALND · supraclavicular = cN3c']),
     ('Pancreas', ['Pancreas', 'Gallstone'], 'pancreatitis|BISAP|ranson|atlanta|pseudocyst|walled.off|necros(is|ectomy)|step.up|same.admission|cholecystectomy', 'R00.A-3', [
      'Dx 2/3 (enzyme >3×ULN) · BISAP ≥3 · severe = persistent organ failure >48 ชม.',
      'Moderate goal-directed LR · pain control · early enteral/oral · ไม่ให้ prophylactic ATB',
      'Gallstone mild → LC same admission · severe → รอ ≥6 wk · ERCP: cholangitis (<24 ชม.) / retained CBD stone',
      '<4 wk APFC/ANC · >4 wk pseudocyst/WON · infected necrosis → step-up']),
     ('Small bowel & Colon', ['Small bowel', 'Colorectal', 'Acute abdomen'], 'short bowel|ileocecal valve|jejunostomy|teduglutide|ogilvie|pseudo.obstruction|neostigmine|megacolon|volvulus|coffee bean|closed.loop|adhesi|gastrografin|feculent', 'R00.A-4', [
      'SBS <200 cm · type: end-jejunostomy แย่สุด, jejunoileocolic ดีสุด · adaptation 6 เดือน–2 ปี',
      'LBO = CA จนพิสูจน์ได้ → CT · competent ICV = closed loop → cecum ทะลุ (>12 cm)',
      'Ogilvie: แก้ cause → neostigmine 2 mg IV → colonoscopic decompression',
      'ASBO: ผ่าเมื่อ peritonitis/strangulation · อื่นลอง NOM + Gastrografin ≤72 ชม.',
      'Sigmoid volvulus: coffee bean → detorsion → sigmoidectomy same admission · cecal → right hemicolectomy']),
     ('Perioperative care', ['Pre-op & post-op', 'Nutrition', 'Plastic'], 'aspirin|clopidogrel|antiplatelet|stent|\\bERAS\\b|enhanced recovery|chewing gum|carbohydrate load|preoperative nutrition|malnutrition|drain|penrose|jackson|suture|vicryl|\\bPDS\\b|prolene|nylon|silk|catgut|monocryl', 'R00.A-5', [
      'Aspirin: CHEST 2022 ให้ต่อ (หยุด ≤7 วันถ้า bleeding risk สูง) · clopidogrel 5 วัน · DES เลื่อน elective 6 เดือน',
      'ERAS: clear fluid 2 ชม., carb loading, no NG/drain routine, opioid-sparing, early feeding/mobilization, Foley ≤24 ชม., chewing gum',
      'Severe malnutrition → nutrition 10–14 วันก่อนผ่า (ESPEN 2025) · NPO >7 วัน → nutrition support',
      'Suture: Vicryl braided absorbable · PDS monofilament absorbable (fascia) · Prolene vascular · nylon/silk skin · polyester non-absorbable']),
     ('Liver', ['Liver', 'Jaundice', 'Onco'], 'hepatocellular|\\bHCC\\b|\\bTACE\\b|ablation|milan|bridging|portal vein embolization|\\bPVE\\b|cholangiocarcinoma|BCLC', 'R00.A-6', [
      'HCC curative: resection (Child A, no CSPH, FLR พอ) · transplant (Milan) · ablation ≤3 cm',
      'TACE = palliative (BCLC-B) / bridging รอ transplant / TACE + PVE รอ FLR โต ~4 wk',
      'iCCA: delayed enhancement + capsular retraction + bile duct dilatation · resection รวม bile duct · transplant ยังไม่ standard']),
     ('Thyroid', ['Thyroid & parathyroid', 'Onco'], 'thyroid nodule|bethesda|\\bFNA\\b|TI-?RADS|toxic adenoma|graves|thyroglossal|sistrunk|lobectomy|thyroidectomy', 'R00.A-7', [
      'TSH ก่อน: hyper → toxic adenoma (lobectomy/RAI), Graves (ยาก่อน) · eu/hypo → U/S',
      'ATA FNA: high/intermediate ≥1 cm · low ≥1.5 · very low ≥2',
      'Bethesda III repeat FNA · IV follicular neoplasm · V suspicious · VI malignant',
      'ATA 2025: ≤2 cm cN0 lobectomy · >4 cm/ETE/N1 total · thyroglossal duct cyst → Sistrunk']),
     ('Esophagus', ['Esophagus', 'Onco'], 'dysphagia|achalasia|manometry|bird.?s? beak|pseudoachalasia|esophagectomy|esophageal (cancer|carcinoma)|CROSS|chemoradiation', 'R00.A-8', [
      'Dysphagia → EGD first (pseudoachalasia) · HRM IRP >15 + aperistalsis = achalasia',
      'T1a endoscopic · T1–2 N0 esophagectomy · T3–4a/N+ neoadjuvant CRT (41.4 Gy) → surgery หรือ definitive CRT (>50 Gy: unfit, cervical, ปฏิเสธ)',
      'T4a pleura/pericardium/diaphragm (ตัดได้) · T4b aorta/spine/airway · adenoCA: periop FLOT (ESOPEC)']),
     ('Stomach & Duodenum', ['Stomach & duodenum', 'Onco'], 'dyspepsia|alarm|red flag|gastric ulcer|johnson|gastric (ca|cancer|adeno)|gastrectomy|\\bD2\\b|staging laparoscopy|outlet obstruction|\\bGOO\\b|paradoxical aciduria|\\bGIST\\b|imatinib|cajal', 'R00.A-9', [
      'Red flag → EGD (ไทย: อายุ ≥50) · GU biopsy ขอบ 6–8 ชิ้น + CLO · Johnson I incisura เสี่ยง CA',
      'Gastric CA early → resection (T1a ESD) · ≥cT2/N+ periop FLOT (West) หรือ D2 + adjuvant (East) · staging lap ≥T1b',
      'GOO: hypoK hypoCl metabolic alkalosis + paradoxical aciduria → NSS, K หลัง urine ออก',
      'GIST: ICC, KIT/DOG1, bleeding, mets liver/peritoneum, >2 cm ผ่า, imatinib']),
     ('Periampullary', ['Jaundice', 'Pancreas', 'Onco'], 'periampullary|ampulla|courvoisier|whipple|pancreaticoduodenectomy|biliary drainage|\\bPTBD\\b|painless jaundice', 'R00.A-10', [
      'Painless progressive jaundice + คลำได้ GB (Courvoisier) → malignancy',
      'Pancreas: new/worsening DM, steatorrhea · ampulla: intermittent jaundice, occult bleed · duodenum: GOO',
      'Whipple = curative เดียว · pre-op biliary drainage เฉพาะ cholangitis, neoadjuvant, malnutrition, คันมาก']),
     ('Colorectal', ['Colorectal', 'Onco'], 'hemicolectomy|anterior resection|\\bLAR\\b|\\bAPR\\b|abdominoperineal|rectal cancer|colon cancer|\\bFIT\\b|colonoscopy screening|total neoadjuvant', 'R00.A-11', [
      'Right / extended right (middle colic) / left / sigmoid / LAR / APR (permanent colostomy)',
      'Colon: ผ่าก่อน → adjuvant stage III · Rectum T3+/N+ → neoadjuvant (TNT) → TME',
      'Screening 45–75: FIT ทุกปี หรือ colonoscopy ทุก 10 ปี']),
     ('Hernia', ['Hernia', 'Acute abdomen'], 'hernia|incarcerat|strangulat|reduction en masse|lichtenstein|herniotomy|herniorrhaphy|hernioplasty|taxis', 'R00.A-12', [
      'Herniotomy (เด็ก) · herniorrhaphy (tissue) · hernioplasty (mesh, Lichtenstein)',
      'Incarcerated <6 ชม. ดันได้ · obstructed ห้ามดัน (reduction en masse) · strangulated → emergency groin approach',
      'Mesh ใน clean-contaminated ได้ (WSES) · contaminated → tissue repair']),
    ]
    new = [{'code': CODE, 'title': 'Q&A อาจารย์ศัลย์ — ' + t, 'kw': kw, 'topic': t, 'tags': tags, 'type': 'Q&A อาจารย์ (ถอดเทป)', 'url': '',
            'note': f'ถอดเทป Q&A อาจารย์ศัลย์ 3 ชม. ก่อนสอบ · {t} · Round I/O {pid}', 'points': pts} for t, tags, kw, pid, pts in RES]
    # เรียง: R00.A ก่อน R00.C
    k = next((i for i, r in enumerate(lst) if r.get('code') == 'R00.C'), 0)
    lst = lst[:k] + new + lst[k:]
    open('data/resources.js', 'w', encoding='utf8').write(rs[:i0] + json.dumps(lst, ensure_ascii=False, indent=0) + ';\n')
    os.makedirs('/home/claude/work', exist_ok=True)
    json.dump({'doc': {k2: v for k2, v in newdoc.items() if k2 != 'pages'}, 'pages': PAGES}, open('/home/claude/work/r00a_pages.json', 'w', encoding='utf8'), ensure_ascii=False)
    print('ok R00.A', len(PAGES), 'pages', sum(len(x['html']) for x in PAGES), 'chars; resources', len(new))
