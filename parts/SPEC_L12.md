# SPEC — Unit round L12 Preoperative & postoperative care (200 questions, 4 parts of 50)

You write PART K of `data/unit_L12.js` for a Thai medical-student past-exam website (Chulalongkorn, Year-4 General Surgery). Write your 50 questions to `/home/claude/bankypp/ac-mdcu/parts/u12_partK.js` and run `node /home/claude/bankypp/ac-mdcu/parts/check_u12.js /home/claude/bankypp/ac-mdcu/parts/u12_partK.js` until it prints `OK` with 0 problems. Do NOT touch any other repo file, do NOT run git.

## Source material (read ALL of your section, and skim the rest, before writing)
- **Main reference = the finished Round I/O of this lecture**: `/home/claude/work/out/L12/doc.json` (12 pages L12-1 … L12-12, html; complete merge of both files: printed text, every handwriting `[78]`/`[jod]`, labels ซ้ำ/ต่าง/ขัด, ⚠ ตรวจ, เสริม, page refs `78 pN · jod pN`). Read it with python (`json.load`) and strip tags if easier.
- Raw page notes: `/home/claude/work/out/L12/work/notes.md` · page → topic map: `/home/claude/work/out/L12/work/coverage.md`.
- Full-page renders (= the kimg images): `/home/claude/fp12/l12_p<N>.jpg` = file 78 page N (48 pp) · `/home/claude/fp12/l12b_p<N>.jpg` = file jod page N (44 pp). Open a page (Read tool) whenever you need to check wording or make a question image.
- Existing labelled crops in `/home/claude/bankypp/ac-mdcu/img/`: l12_acc2014_algo, l12_esc2022_algo, l12_accaha_old, l12_mallampati, l12_triflow, l12_bedside_hw (handwriting/answers visible → kimg only, unless clearly clean).
- Files: **78** = `L12_Preop_-_Postop_care_78.pdf` (48 pp, slides + MDCU78 handwriting) · **jod** = `L12_Pre_and_Post-Operative_Care_jod.pdf` (44 pp, older slide version + jod handwriting; jod p2 = student's own bedside pre-op note). Lecturer: Punthita Aimsupanimitr, MD. The two decks are DIFFERENT versions → page numbers differ; map by topic (coverage.md).
- Merge rule: the two files complement each other — no main file. Handwriting of both counts.

## Importance (faculty symbols — user's standing rules)
- 🔴 red star = must know · 🟡 yellow triangle = should know · 🟢 green circle / ❌ red X in a top corner = nice to know → **NEVER examined**.
- In this lecture the ONLY faculty symbol is **78 p39 (Caprini assessment form: ❌ top-left + 🟢 top-right)** → do not ask the individual Caprini point values/risk-factor scoring from that form (jod p36 is the same form → also not examined). Caprini risk CATEGORIES and the prophylaxis for each category (78 p40 / jod p37) and VTE topics on other pages ARE examinable.
- All other pages: no symbol = important. Student stars/circles/highlights = slightly more weight.

## Content rules (follow exactly)
1. Cover EVERY page / topic / word of your assigned section (print + handwriting + figures/tables). High-yield points (ASA, RCRI, METs ≥4, ESC 2022 algorithm, which tests are/aren't routine, drug-stopping times, pulmonary risk & prevention, post-op fever timing/causes, MH) get more questions; repeat a topic with a different patient/angle only once everything is covered.
2. ~85–90% (≥43 of 50) answerable from the files alone. 5–7 of your 50 may go a little beyond (must still need file knowledge, stay in the chapter, little outside knowledge) → fill `outside:"นอกสไลด์: <which part is beyond>"`.
3. Of the file-based questions, ≈80% should rest on printed slide text/figures and ≈20% on handwriting (more handwriting is fine where a page has little print).
4. Every question CASE-BASED (patient vignette or ward/OPD/OR/PACU/ER scenario), formal exam-style English for stem and options. Mixed difficulty, some traps. Ask risk class, next step, which test, interpretation, drug to stop/continue and timing, mechanism, most likely cause, prevention, numbers. Calculation items where natural (e.g. RCRI count, ASA, METs, Caprini category from a described patient only if the category table is used — not the point form).
5. Exactly 5 options, homogeneous and plausible. **Correct option must NOT be longer/more detailed than the distractors; NO option may contain parentheses, " / ", " — ", " - " as explanation, "e.g." or "เช่น".** Vary answer position (about 10 per letter per part).
6. No added hints in stems (do not name the diagnosis/class the student must infer; give findings, not interpretations; no normal ranges unless the source gives them).
7. If two options could both be right from the source, pick the intended one, add just enough info, explain the other in `why`/`trap`.
8. Where the files DISAGREE or the Round I/O marks `! ขัด` / `⚠ ตรวจ` (e.g. EKG age criteria jod older rule vs 78 ESC 2022; jod p2 bedside "อายุ >40 ทำ EKG/CXR ทุกคน" = local practice; jod handwriting "aspirin หยุด 7 วัน" vs current guidance to continue aspirin in most; NPO after midnight vs modern fasting; CAUTI rate), never make the answer depend on the disputed point; answer per the CURRENT guideline the Round I/O names (2022 ESC non-cardiac surgery, 2024 AHA/ACC perioperative, CHEST 2022 perioperative antithrombotic, ASA PS latest) and say in `why` which file says what (⚠ ไม่ตรงกัน).
9. Image questions: at least the number listed for your part, `img:"l12_q<n>"`. A question image must NOT show handwriting/labels that give the answer: make a clean crop yourself from the full-page renders (PIL; crop only the picture/table area, width ≤ 900 px, JPEG quality 82), save as `/home/claude/bankypp/ac-mdcu/img/l12_q<n>.jpg`, and LOOK at it (Read) before writing the question. Never use a full page `l12_p<N>`/`l12b_p<N>` as `img`.
10. No near-duplicate stems in your part (checker compares first 70 chars). Other parts cover other pages, so stay inside your allocation.

## Explanation fields (Thai with English medical terms)
- `notes` (REQUIRED, shown under "สไลด์/ลายมือใน lecture เขียนไว้ว่า"): quote ONLY the lines relevant to this question from every page it needs (2–6 lines, `<br>` between lines), e.g. `สไลด์ไฟล์ 78 หน้า 24 พิมพ์ว่า <b>\"ASA III: severe systemic disease\"</b><br>ลายมือไฟล์ jod หน้า 22 เขียนว่า <b>\"…\"</b>`. Balanced: "too much is unreadable, too little won't pass".
- `kimg` (REQUIRED): array of the FULL-PAGE capture of EVERY page cited in `src` — `l12_p<N>` (78) / `l12b_p<N>` (jod) — optionally plus a labelled crop. They exist in /home/claude/fp12 (don't copy; the assembler copies). Never put the question's own `img` in kimg. Usually ≤4 images.
- `interp`: 1–2 sentences ตีความโจทย์ (key clues).
- `why`: why correct — quote slide wording / handwriting; name the guideline when used.
- `wrong`: array of exactly 4 strings, one per WRONG option in A→E order: why wrong + "จะถูกถ้า …".
- `trap`: one short sentence ("" if none).
- `summary`: 3–6 bullets, complete self-contained knowledge (never "see question X").
- `mnemonic`: optional.
- `src`: REQUIRED, format: `"L12 Preoperative & postoperative care · ไฟล์ 78 หน้า 24 (= jod หน้า 22) · ไม่มีสัญลักษณ์ · ลายมือ 78"` · `"L12 Preoperative & postoperative care · ไฟล์ jod หน้า 2 (โน้ต bedside) · ไม่มีสัญลักษณ์ · ลายมือ jod"` · combined pages with " + ".
- `outside`: only for beyond-file questions (must start with "นอกสไลด์").
- `tags`: 1–4 from: "Pre-op & post-op","Hemostasis & transfusion","Fluid & electrolyte","Metabolic response","Nutrition","Surgical infection","Surgical safety","Vascular","Liver","Thyroid & parathyroid","Professionalism & ethics","MIS","Onco" — usually "Pre-op & post-op" first.

## File format (copy exactly)
```js
/* PART K */
U({n:51, img:"l12_q51", stem:"…", opts:["…","…","…","…","…"], ans:2,
  notes:"…", kimg:["l12_p24","l12b_p22"],
  interp:"…", why:"…", wrong:["…","…","…","…"], trap:"…", summary:["…","…","…"], mnemonic:"", tags:["Pre-op & post-op"],
  src:"…"}),
U({n:52, …}),
```
(`U` defined by the assembler; omit `img`,`mnemonic`,`outside` when unused. `n` = global number in your range. Double-quoted strings, escape inner " as \". `<b>…</b>` allowed in explanation strings only — not in stem/options.)

## Part allocation (n global) — Round I/O pages / file pages
- **Part 1 — n 1–50:** L12-1, L12-2, L12-3 = 78 p1–11, p20 · jod p1–13, p17 (not-routine part). Aims of pre-op evaluation, framework, general risk; history & ROS (each system, functional capacity question), medications (what to stop/continue and when — antiplatelet, anticoagulant, antihypertensive, ACEI/ARB, diabetic drugs/SGLT2i, steroid cover, herbal, OCP…), nutritional status (weight loss, albumin, screening), physical examination, airway/Mallampati, jod p2 bedside pre-op note (basic labs, HIV/anti-HIV window period, universal precaution, pre-admission center), pre-op order (NPO, bowel prep, IV fluid, consent, mark site…), principles of pre-op testing (test only when it changes management, not routine). Image questions ≥ 2 (e.g. clean Mallampati crop).
- **Part 2 — n 51–100:** L12-4, L12-5 = 78 p12–25, p28 · jod p14–23. CBC (Hb, transfusion threshold), coagulation & ESRD/dialysis, renal function, electrolytes, glucose/HbA1c, LFT, UA — each: who needs it; EKG and CXR indications (both files' criteria — ⚠ disagreement), ESC 2022 Table 5 surgical-risk categories (low <1% / intermediate 1–5% / high >5% with example operations), ASA physical status I–VI (+E, examples, mortality), ACS NSQIP calculator. Image questions ≥ 2 (clean table crops without handwriting).
- **Part 3 — n 101–150:** L12-6, L12-7, L12-8, L12-9 = 78 p26–37, p14 (coag) · jod p24–34. Perioperative MI (mechanism, silent, troponin), RCRI items and risk, exercise capacity / METs (≥4 METs examples, DASI), 2014 ACC/AHA algorithm, older ACC/AHA stepwise algorithm (jod), ESC 2022 algorithm (biomarkers, when to proceed/stress test/delay), pulmonary complications & risk factors (patient vs procedure), risk table, PFT not routine, prevention (stop smoking timing, lung expansion, incentive spirometry/Triflow, early ambulation), bleeding risk evaluation, platelet thresholds, UFH/LMWH timing, antithrombotic management. Image questions ≥ 2 (clean algorithm crops; you may ask the next step from a described patient).
- **Part 4 — n 151–200:** L12-10, L12-11, L12-12 = 78 p38, p40–48 · jod p35, p37–44 (NOT the Caprini point form 78 p39 / jod p36). VTE risk & Caprini categories with recommended prophylaxis (mechanical GCS/IPC, pharmacologic), post-op fever: definition, timing (immediate / acute / subacute / delayed), the W mnemonic (wind, water, wound, walking, wonder drugs, womb…), immediate fever causes incl. malignant hyperthermia (trigger, signs, lab, dantrolene) and transfusion reaction, acute (atelectasis controversy, aspiration, necrotizing SSI, anastomotic leak…), subacute (SSI, UTI/CAUTI, CLABSI, DVT, C. difficile, drug fever…), delayed fever, other causes, conclusion. Image questions ≥ 2.
