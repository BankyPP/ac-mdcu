# SPEC — Unit round L03 Liver (200 questions, written in 4 parts of 50)

You write PART k of `data/unit_L03.js` for a Thai medical-student past-exam website (Chulalongkorn, Year-4 General Surgery). Write your 50 questions to `/home/claude/sx-mcq/parts/u03_partK.js` (K = your part number) and run `node /home/claude/sx-mcq/parts/check_u03.js /home/claude/sx-mcq/parts/u03_partK.js` until it prints `OK` with 0 problems.

## Source material (read ALL of it before writing)
- Merged chapter notes (main reference): `/home/claude/sx-mcq/.projdocs/L03_Liver.md` — includes ซ้ำ / ⚠ ต่าง / ⚠ ขัดแย้ง flags and the quiz list.
- Full transcriptions: file A (slides + handwriting + in-class quizzes) `/tmp/claude-0/L03/tx_A_01-15.md`, `/tmp/claude-0/L03/tx_A_16-30.md`; file B (Thai handout) `/tmp/claude-0/L03/tx_B_01-32.md`, `/tmp/claude-0/L03/tx_B_33-63.md`.
- Images already cropped: `/home/claude/sx-mcq/img/l03_*.jpg` (keys listed in notes/transcripts) — LOOK at every image you use with the Read tool before writing its question.
- File names: file A = `L03_Liver Disease (jod).pdf` (slides, lecturer Wipusit Taesombat, MD; refs like "หน้า 10·4" = page 10 slide 4); file B = `L03_Liver (เอกสารประกอบการสอน).pdf` (63-page Thai handout). Same chapter, merged, neither is primary.

## Content rules (from the user — follow exactly)
1. Cover EVERY page / topic / word of your assigned section (both printed slide text and handwriting — handwriting counts almost as much as print). High-yield concepts get more questions; the same topic may repeat with a different stem/angle.
2. ~85–90% of questions must be answerable from the slides alone. ~10–15% (5–7 of your 50) may go beyond the slides, but must still require slide knowledge, stay in a topic of this chapter, and use only a little outside knowledge. For those, fill `outside:"นอกสไลด์: <what part is beyond the slides>"`.
3. Importance: this lecture has NO lecturer importance symbols (all stars/ticks are the student's = slightly more emphasis). The 9 in-class Kahoot quizzes in file A mark exam-relevant points — make sure each quiz topic gets several questions. Handwriting in file A counts almost as much as print.
4. Where the two files disagree (items marked ⚠ ขัดแย้ง / ⚠ ต่าง in the notes and the final "ข้อมูลที่ไม่ตรงกัน" section) avoid making the answer depend on which file; if you touch it, state the source in the stem or choose an answer true under both, and say in `why` "⚠ ไม่ตรงกัน: ไฟล์ A … · ไฟล์ B …".
5. Every question must be CASE-BASED (a patient vignette, or a ward/clinic scenario: "A 58-year-old man… / A medical student on the surgical ward is asked… / A surgeon counsels…"). Formal exam English for stem and options. Mixed difficulty; some with traps, some straightforward. Ask anything: diagnosis, next step, investigation, mechanism, gene, staging, treatment aim, prevention level, etc.
6. Exactly 5 options. Options must be homogeneous and plausible. **The correct option must NOT be longer or more detailed than the distractors, and NO option may contain parentheses, " / ", " — ", " - " used as explanation, "e.g." or "เช่น".** Vary the position of the correct answer (roughly even across A–E in your 50).
7. Image questions: at least the number listed for your part. Put the image key in `img:"l03_xxx"`. Do not write in the stem what the image shows if that gives away the answer (the student must interpret it). You may also attach slide figures to the explanation with `kimg:["l03_xxx"]` (shown after answering).
8. No near-duplicate stems inside your part.

## Explanation fields (Thai with English medical terms, like the existing site)
- `interp`: 1–2 sentences ตีความโจทย์ (key clues).
- `why`: why the answer is correct — explain fully, quote the slide wording / handwriting when useful (e.g. ลายมือในไฟล์ A: "…").
- `wrong`: array of exactly 4 strings, one per WRONG option in A→E order (skipping the correct one). Each: why wrong + "จะถูกถ้า …" (when that option would be right).
- `trap`: one short sentence on the trap (or "" if none).
- `summary`: 3–6 bullet strings — complete knowledge from this point (self-contained, no "see question X").
- `mnemonic`: optional, only when genuinely helpful (e.g. "3B = Bleed Burst Block", "MEN1 3P, MEN2A 2P1M, MEN2B 1P2M").
- `src`: REQUIRED, exact format: `"L03 Liver · ไฟล์ A หน้า 10·4 + ไฟล์ B หน้า 22 · ไม่มีสัญลักษณ์"` (file(s) and page(s)/slide the answer comes from; add "· ลายมือ" if the key point is handwritten, "· ควิซในห้อง" if it was an in-class quiz).
- `outside`: only for beyond-slide questions (see rule 2).
- `tags`: 1–4 tags, ONLY from: "Liver","Onco","Jaundice","Transplant","Surgical infection","Pre-op & post-op","Colorectal","MIS","Gallstone","Pancreas". Almost every question has "Liver" first; add "Onco" for malignant tumours.

## File format (copy exactly)
```js
/* L03 part K */
U({n:51, img:"l03_a10a", stem:"…", opts:["…","…","…","…","…"], ans:2,
  interp:"…", why:"…", wrong:["…","…","…","…"], trap:"…", summary:["…","…"], mnemonic:"", tags:["Liver"],
  src:"L03 Liver · ไฟล์ A หน้า 10·4 + ไฟล์ B หน้า 22 · ไม่มีสัญลักษณ์"}),
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
  tags:["Onco","Colorectal"], src:"L02 Surgical Oncology · ไฟล์ B หน้า 27–28 · ไม่มีสัญลักษณ์ (example from another chapter — use the L03 format above)"}),
```

## Part allocation (n ranges are global; follow the notes' sections)
- **Part 1 — n 1–50:** §1 anatomy: liver volume/weight, ligaments, blood supply (portal vs arterial share, quiz), embryology, Couinaud segments & hepatic-vein planes, caudate lobe, portal pedicle/bile duct variations, IHPBA Brisbane 2000 resection terminology (orders of division, segments removed), mortality history (~22); §2 liver function (synthetic/excretory/metabolic), LFT patterns (AST/ALT/ALP/GGT/5'NT/bilirubin/albumin/PT/INR/factor V, VII), vitamin K test, ICG-R15, false positive/negative, liver reserve (~16); imaging & biopsy: US/IOUS, CT phases, MRI, scintigraphy, angiography, PET, imaging-factor table, biopsy risks (~12). Image questions ≥8.
- **Part 2 — n 51–100:** §3 pyogenic liver abscess (etiology/routes, organisms, Klebsiella, symptoms, labs, imaging, CT most accurate, treatment antibiotics + drainage, quiz) and amoebic liver abscess (anchovy paste, portal route, sex/age, diarrhoea history, serology, metronidazole, drainage indications), PLA vs ALA table (~26); §4 cystic lesions: classification, simple cyst (symptoms, quiz observation, aspiration/alcohol/deroofing), polycystic liver disease, hydatid cyst (Echinococcus life cycle, layers, imaging signs, PAIR, albendazole, anaphylaxis/rupture, surgery principles), cystadenoma/cystadenocarcinoma, simple vs hydatid differentiating table (~24). Image questions ≥10.
- **Part 3 — n 101–150:** §5 benign solid tumours: hemangioma (most common, quiz; Kasabach-Merritt, imaging peripheral nodular enhancement/fill-in, indications for surgery, enucleation), hepatic adenoma (OCP, glycogen storage, rupture/bleeding, malignant transformation, size cut-offs, Nault molecular subtypes), FNH (central scar, Kupffer cells/sulfur colloid, no rupture?, conservative), benign tumour indications for treatment (quiz) (~25); §6 HCC epidemiology & etiology (HBV, HCV, aflatoxin, alcohol, hemochromatosis), surveillance (who, US q6 mo, AFP, quizzes), diagnosis (AFP cut-offs, arterial enhancement/washout, biopsy debate), symptoms, spread (~25). Image questions ≥8.
- **Part 4 — n 151–200:** HCC staging/scoring and treatment: Child-Pugh, Okuda, CLIP, French, resection vs transplant (Milan criteria — note ⚠ conflicts), TACE, RFA/ablation, PEI, sorafenib/systemic, quiz best treatment (~16); §7 cholangiocarcinoma & ICC (risk factors O. viverrini/PSC/choledochal cyst/stones, macroscopic types & spread, CEA/CA19-9, imaging, surgery, palliation) (~12); §8 metastatic liver tumours & CRLM (precocious/synchronous/metachronous, natural history, resection criteria, margins, two-stage hepatectomy, PVE & FLR, recurrence, RFA/cryo, neuroendocrine mets) (~12); §9 preoperative evaluation & liver reserve: patient/tumour/liver assessment, contraindications to resection, Makuuchi criteria (ascites, bilirubin, ICG-R15), liver volume, HVPG, preoperative preparation (~10). Image questions ≥8.
