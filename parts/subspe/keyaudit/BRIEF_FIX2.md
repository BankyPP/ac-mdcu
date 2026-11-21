# Subspe bank-answer fixes round 2 (22 Nov 2026) — from the High-yield writers/fact-checkers

Repo root `/home/claude/bankypp/ac-mdcu`. The user will answer the REAL exam from this bank, so every answer must be the one
best supported by the newest references (order: guideline/textbook > lecture L > resource R > note N). Old keys stay visible.

Input list: `/home/claude/work/datafix.md` (every line = one finding by a writer or independent fact-checker). For each line:
1. Look at the question: MCQ → `node parts/subspe/keyaudit/show.js MCQ <file with keys>`; OSCE → grep the station in
   `data_subspe/osce_b*.js` (set "MDCUxx", ro "RoX", orig "...", sub-question #k = k-th sub of the station).
2. Verify the finding against the newest reference (WebSearch/WebFetch when not certain). If the finding is wrong, skip it and report.
3. Fix:
   - **MCQ** → `parts/subspe/keyaudit/patch_fix2.json` (same format as patch_m*.json: `{"set|ro|orig[@p<page>]":{fields}}`).
     If the key ALREADY exists in any `patch_m*.json`, edit that entry in place instead (build_fixes.js refuses duplicates).
     Fields you may set: `ans` (0-based), `opinion` (start `ตรวจคีย์ (22 พ.ย. 2026):` — say old key, new answer, source+year, confidence),
     `why`/`interp`/`wrong`/`trap`/`summary` (make them agree with the answer), `stem` only to fix a clear recall/translation error
     (then say so in opinion; the original recall stays in `gray`). Flawed item with no defensible answer: keep `ans`, add to opinion
     `⚠ โจทย์กำกวม: …` explaining what to answer in the real exam.
   - **OSCE** → edit the sub-question in its `osce_b*.js` (model answer / kw / exp / rubric) and append to the station `notes`
     `· ตรวจคีย์ 22 พ.ย. 2026: เดิม … → แก้เป็น … ตาม <source>`; update the station `opinion`. File must still load:
     `node -e "require('vm').runInNewContext(require('fs').readFileSync('data_subspe/osce_bN.js','utf8'),{QB:[],console})"`.
4. After all: `node parts/subspe/keyaudit/build_fixes.js` (must print no warning) and `node tools/sumcheck.js data_subspe MCQ` /
   `... OSCE` (both `bad 0`). Then check the summaries still agree: for every MCQ answer you changed, grep its key in
   `data_subspe/sum_mcq_*.js` and make the section text say the same answer (edit the summary bullet if needed).
Do not run builds or git.

## Final report (≤ 40 lines)
key → old → new (source) · flagged-ambiguous items · findings you rejected and why.
