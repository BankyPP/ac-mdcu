# SPEC — Unit round L02 Surgical Oncology (200 questions, written in 4 parts of 50)

You write PART k of `data/unit_L02.js` for a Thai medical-student past-exam website (Chulalongkorn, Year-4 General Surgery). Write your 50 questions to `/home/claude/sx-mcq/parts/u02_partK.js` (K = your part number) and run `node /home/claude/sx-mcq/parts/check_u02.js /home/claude/sx-mcq/parts/u02_partK.js` until it prints `OK` with 0 problems.

## Source material (read ALL of it before writing)
- Merged chapter notes (main reference, Thai/English): `/home/claude/sx-mcq/.projdocs/L02_Surgical_Oncology.md`
- Full page-by-page transcriptions (verbatim slide text + handwriting): `/tmp/claude-0/L02/tx_A_01-31.md`, `/tmp/claude-0/L02/tx_A_32-62.md` (file A, 62 pages), `/tmp/claude-0/L02/tx_B_01-36.md`, `/tmp/claude-0/L02/tx_B_37-73.md` (file B, 73 pages)
- Images already cropped from the slides: `/home/claude/sx-mcq/img/l02_*.jpg` — LOOK at every image you use with the Read tool before writing its question.
- File names: file A = `L02_Surgical_Oncology.pdf`; file B = `L02_Surgical_Oncology_78.pdf`. The two files are the SAME lecture (merged, neither is primary).

## Content rules (from the user — follow exactly)
1. Cover EVERY page / topic / word of your assigned section (both printed slide text and handwriting — handwriting counts almost as much as print). High-yield concepts get more questions; the same topic may repeat with a different stem/angle.
2. ~85–90% of questions must be answerable from the slides alone. ~10–15% (5–7 of your 50) may go beyond the slides, but must still require slide knowledge, stay in a topic of this chapter, and use only a little outside knowledge. For those, fill `outside:"นอกสไลด์: <what part is beyond the slides>"`.
3. Importance symbols: almost every page has NO symbol (= important, nearly as much as red). 🔴 only on B p.30 lines "History taking" and "Physical examination". 🟢 on A p.59 (End of life care: relieve symptoms list / pain control / psychological & spiritual support) → do NOT write questions whose point is that page's content. No 🟡 in this lecture.
4. Where the two files disagree (listed at the end of the notes under "ข้อมูลที่ไม่ตรงกัน") avoid making the answer depend on which file; if you touch it, state the year/source in the stem and say in `why` "⚠ ไม่ตรงกัน: ไฟล์ A … · ไฟล์ B …". Do NOT test: colorectal N1/N2/N3 node-count numbers (handwriting conflicts with AJCC), Pancoast↔SVC, EBV→leukemia.
5. Every question must be CASE-BASED (a patient vignette, or a ward/clinic scenario: "A 58-year-old man… / A medical student on the surgical ward is asked… / A surgeon counsels…"). Formal exam English for stem and options. Mixed difficulty; some with traps, some straightforward. Ask anything: diagnosis, next step, investigation, mechanism, gene, staging, treatment aim, prevention level, etc.
6. Exactly 5 options. Options must be homogeneous and plausible. **The correct option must NOT be longer or more detailed than the distractors, and NO option may contain parentheses, " / ", " — ", " - " used as explanation, "e.g." or "เช่น".** Vary the position of the correct answer (roughly even across A–E in your 50).
7. Image questions: at least the number listed for your part. Put the image key in `img:"l02_xxx"`. Do not write in the stem what the image shows if that gives away the answer (the student must interpret it). You may also attach slide figures to the explanation with `kimg:["l02_xxx"]` (shown after answering).
8. No near-duplicate stems inside your part.

## Explanation fields (Thai with English medical terms, like the existing site)
- `interp`: 1–2 sentences ตีความโจทย์ (key clues).
- `why`: why the answer is correct — explain fully, quote the slide wording / handwriting when useful (e.g. ลายมือในไฟล์ A: "…").
- `wrong`: array of exactly 4 strings, one per WRONG option in A→E order (skipping the correct one). Each: why wrong + "จะถูกถ้า …" (when that option would be right).
- `trap`: one short sentence on the trap (or "" if none).
- `summary`: 3–6 bullet strings — complete knowledge from this point (self-contained, no "see question X").
- `mnemonic`: optional, only when genuinely helpful (e.g. "3B = Bleed Burst Block", "MEN1 3P, MEN2A 2P1M, MEN2B 1P2M").
- `src`: REQUIRED, exact format: `"L02 Surgical Oncology · ไฟล์ B หน้า 24 + ไฟล์ A หน้า 20 · ไม่มีสัญลักษณ์"` (list the file(s) and page(s) the answer comes from; symbol = `🔴` / `ไม่มีสัญลักษณ์`; add "· ลายมือ" if the key point is handwritten).
- `outside`: only for beyond-slide questions (see rule 2).
- `tags`: 1–4 tags, ONLY from this list: "Onco","Colorectal","Anorectal","Breast","Liver","Esophagus","Stomach & duodenum","Thyroid & parathyroid","Pancreas","Jaundice","Small bowel","Acute abdomen","Nutrition","MIS","Professionalism & ethics","Pre-op & post-op". Almost every question has "Onco" first.

## File format (copy exactly)
```js
/* L02 part K */
U({n:51, img:"l02_ctliver", stem:"…", opts:["…","…","…","…","…"], ans:2,
  interp:"…", why:"…", wrong:["…","…","…","…"], trap:"…", summary:["…","…"], mnemonic:"", tags:["Onco","Liver"],
  src:"L02 Surgical Oncology · ไฟล์ B หน้า 24 + ไฟล์ A หน้า 20 · ไม่มีสัญลักษณ์"}),
U({n:52, …}),
```
(`U` is defined by the assembler; omit `img`, `kimg`, `mnemonic`, `outside` when unused. `n` = global question number in your range. Use plain double-quoted strings; escape inner double quotes as \"; HTML <b>…</b> allowed inside explanation strings only, not in stem/options.)

## Example of the expected quality (style only — different topic)
```js
U({n:999, stem:"A 64-year-old man undergoes screening colonoscopy. A 2-cm pedunculated polyp is found in the sigmoid colon and removed with a snare. Histopathology shows a tubulovillous adenoma with clear margins. Which level of cancer prevention does this procedure represent?",
  opts:["Primary prevention","Secondary prevention","Tertiary prevention","Palliative treatment","Curative surgery"], ans:1,
  interp:"ตัด polyp (adenoma) ซึ่งเป็น premalignant lesion ออกก่อนกลายเป็น carcinoma",
  why:"สไลด์ Prevention: <b>Secondary</b> = removal of premalignant lesion + surveillance in high-risk pt; สไลด์ adenoma–carcinoma sequence เขียน \"Secondary prevention : colonoscopic polypectomy\" — ลายมือไฟล์ A: \"Polyp = premalignant lesion\", \"หา polyp ก่อนเป็น CA → polypectomy\"",
  wrong:["Primary prevention = ยังไม่มีรอยโรค: modification of risk factor (no smoking, no red meat) หรือ removal of target organ ใน high-risk — จะถูกถ้าโจทย์เป็นการเลิกบุหรี่/ลดเนื้อแดง หรือ prophylactic mastectomy ใน BRCA carrier", "…", "…", "…"],
  trap:"polyp ยังไม่ใช่มะเร็ง การตัดออกจึงไม่ใช่ curative surgery",
  summary:["Primary prevention: modification of risk factor; removal of target organ in high-risk pt","Secondary prevention: removal of premalignant lesion; surveillance in high-risk pt","Colon: normal → adenoma → carcinoma ใช้เวลา ~5–10 ปี → screening ≥50 ปี ทุก 5 ปี (ลายมือไฟล์ A)"],
  tags:["Onco","Colorectal"], src:"L02 Surgical Oncology · ไฟล์ B หน้า 27–28 + ไฟล์ A หน้า 23–25 · ไม่มีสัญลักษณ์"}),
```

## Part allocation
- **Part 1 — n 1–50:** §1 epidemiology & why surgical oncology (~8), §2 definition & surgeons' roles (~5), §3 carcinogenesis: steps initiation/promotion/progression, normal vs neoplastic cell, cell cycle/checkpoints/G0/extracellular signals (~12), factors affecting cell cycle & carcinogens incl. handwritten associations (~12), genetic abnormality: oncogene/TSG/DNA repair, examples, AD/AR, two-hit car, normal cell regulation genes, p53, Li-Fraumeni (~13). Image questions ≥3 (candidates: l02_cellcycle, l02_car, l02_factors, l02_deaths2019, l02_thmale, l02_thfemale — mask-free so ask things the picture does not label directly, or use them as kimg).
- **Part 2 — n 51–100:** metastatic cascade (~5), adenoma–carcinoma sequence genes/timeline/screening/prevention mapping (~9), cancer effects: mass effect solid vs hollow, functioning effect, MEN 1/2A/2B, paraneoplastic, organ dysfunction (~11), prevention primary/secondary, Barrett, BRCA prophylactic surgery, surveillance vs screening, FAP, ADH quiz (~13), diagnosis: history incl. 🔴 history taking & physical examination, risk factors, PE mass description, LN, Irish node, Virchow's node, proctoscopy/prolapsed rectal mass, lab/tumor markers not for screening, CEA/AFP/PSA/insulin, rectal lymphatic drainage (~12). Image questions ≥8 (l02_ctliver, l02_ctobs, l02_barrettq, l02_polypectomy, l02_proctoscopy, l02_prolapse, l02_axilla, l02_metcascade, l02_vogel, l02_men, l02_mentable).
- **Part 3 — n 101–150:** investigations: imaging (plain film/contrast → hollow, CT/MRI → solid, PET limits), endoscopy list, pathology: FNA vs core needle (thyroid vs breast), endoscopic biopsy, cytology, incisional vs excisional, quiz Q10 (~13); colonic-obstruction case: obstipation vs constipation, plain AXR, limited barium enema (stop when filling defect, perforation risk), most common cause, apple-core lesion, double-contrast, colonoscopy, CT colonography indications & limitation, polypectomy → gross → histopathology confirm (~17); staging: clinical vs pathological (provisional vs definite), prognosis & management, AJCC/NCCN, Japanese system for stomach/esophagus, TNM definitions solid vs hollow, colorectal T1–T4 depth, M-staging sites & modalities, PET/CT, bone scan in breast, colon → liver → lung not bone, PET false +/−, early/locally advanced/metastatic (~20). Image questions ≥10 (l02_distended, l02_axr, l02_limbe, l02_specimen, l02_bafull, l02_applecore, l02_colpolyp, l02_colmass, l02_ctc, l02_ctc3, l02_gross, l02_histo, l02_fna, l02_cnb, l02_ctmets, l02_petctq, l02_stagesimple, l02_tstage, l02_nstage).
- **Part 4 — n 151–200:** surgery: cancer treatment triad, curative (local, stage 1–3) vs palliative (metastatic), R0, en bloc = primary + involved organ + regional LN, metastasis resection liver/lung, colon stage 4 curable vs stomach not, TME/mesorectum, pelvic exenteration, colorectal liver metastasis resection, open vs laparoscopic equal outcome, patient-centered informed consent (~14); adjuvant: aim, locoregional vs systemic, radiation aim/route/AE, IMRT, neoadjuvant RT indications, breast no RT before surgery, chemotherapy aim/route/AE, induction/salvage/neoadjuvant, TACE, HIPEC/intraperitoneal, CA rectum neoadjuvant CRT vs breast chemo only, hormonal/targeted table (focus breast, CRC wild-type EGFR, GIST; NSCLC/CML/lymphoma lightly), biological BCG/IFN, quiz Q11 esophageal neoadjuvant CRT + esophagectomy (~22); advanced cancer definition, palliative aim QoL, palliative surgery 3B + procedures (bypass, feeding, diversion, catheter, PTBD), palliative RT indications, palliative chemo QoL vs toxicity, WHO integrated model & bereavement care, holistic approach (surveillance, family screening, reconstruction, rehabilitation), conclusion (prevention & early detection, earlier stage better prognosis, multidisciplinary + bio-psycho-social), "to cure sometimes…" (~14). Image questions ≥7 (l02_tmeq, l02_tme, l02_rectmass, l02_exent, l02_livermet, l02_advliver, l02_advmass, l02_targeted, l02_who, l02_holistic).
