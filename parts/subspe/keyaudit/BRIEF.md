# Subspe Sx key audit (21 Nov 2026) — brief for one auditor

Repo root: `/home/claude/bankypp/ac-mdcu` (run every command from there). Ward data: `data_subspe/`.
The site is a Thai medical-student past-exam bank (MDCU, Subspecialty Surgery Y4: uro, ped surg, neuro, CVT, plastic, colorectal).
Old exams are recalls with unreliable keys. Each question already carries the source key (`key`), the bank's answer
(`ans` for MCQ / the model answer `points`/`ans` for OSCE), and "ความเห็นของผม" (`opinion`).
Your list holds questions where the bank disagreed with the key, two key files disagree, or confidence is low.

## Your job — every item in your list
1. Print them: `node parts/subspe/keyaudit/show.js <MCQ|OSCE> parts/subspe/keyaudit/<your list>` (read all of it).
   Pictures: `img/<name>.jpg|png` (names in `qimg`/`img`/`kimg` fields) — open with the Read tool when the answer depends on the picture.
2. Decide the correct answer by this reference order (the user's rule):
   1) newest guideline / textbook (Sabiston 21e, Schwartz 11e, Campbell-Walsh-Wein 13e, AJCC 8th, ATLS 10th, EAU 2025, AUA,
      ASCRS, NCCN, WSES, ESMO, AHA/ACC, ABLS, Nelson/ped-surg texts, etc.) → 2) lecture (code L) → 3) resource (code R) → 4) note (code N).
   L/N content of this ward is in `data_subspe/io.js` (Round I/O) — grep it if useful.
   - Higher tier wins over lower tier. Same tier disagreeing → keep the better-supported answer as `ans`, but write every version
     (source name + year) in `opinion`/`why`.
   - Old key vs references → answer follows the references; the old key stays visible (never delete it).
   - Use WebSearch / WebFetch to confirm anything you are not certain of. Never guess. If nothing reliable can be found,
     keep the current answer and say "ยืนยันจากแหล่งอ้างอิงไม่ได้" + low confidence.
   - Recall stems are often incomplete: judge what the exam most likely intended from the stem + options + key.
3. Record the decision.

## Output
### MCQ auditors → `parts/subspe/keyaudit/patch_<listname>.json` (e.g. `patch_m1.json`)
One object; key = `set|ro|orig` exactly as printed after `###` (if `show.js` printed two questions for one key, use
`set|ro|orig@p<page>` with the page shown). Value = only the fields you change, e.g.
```json
{"MDCU77|RoA|Uro 4":{"ans":0,"opinion":"ตรวจคีย์ (21 พ.ย. 2026): ไม่เห็นด้วยกับคีย์ B — ตอบ A ตาม EAU UTUC Guidelines 2025 ... ความมั่นใจสูง","why":"..."}}
```
- `ans` = 0-based option index (A=0). Change it only when the correct answer differs from the current `ans`.
- `opinion` (always write it for every item): start with `ตรวจคีย์ (21 พ.ย. 2026):` then: agree/disagree with the file key
  (name the key letter/answer), the final answer, the deciding source + edition/year, confidence (สูง / ปานกลาง / ต่ำ).
  If two key files disagree, say which one is right and why.
- Rewrite `why` (and `interp`, `wrong`, `summary`, `trap` if they now contradict the answer) so the explanation matches the final answer.
  Keep the existing style: Thai with English medical terms, `<b>` for key words, no line breaks inside strings.
- Never change `stem`, `opts`, `key`, `orig`, `set`, `ro`, `page`. Do not edit any data_b*.js file.
- If an item needs no change at all except the opinion, still write the new `opinion` (so the audit is recorded).

### OSCE auditors → edit the station directly in its `data_subspe/osce_b<N>.js` file (only the files your list touches; the
other OSCE auditor owns the other files — see the file split in your task).
- Fix the model answer of the affected sub-question (`points` / `ans` text / `kw` regexes / `exp` / `title` if it states a
  diagnosis) so it matches the correct answer; keep the station's existing helper style (P(), G(), B(), etc.).
- Keep the source key visible: if the station's `key` / `notes` holds the file's key, leave it; append to `notes`
  `· ตรวจคีย์ 21 พ.ย. 2026: คีย์เดิมตอบ … → แก้เป็น … ตาม <source>` when you change something.
- Update `opinion` of the station the same way as MCQ (`ตรวจคีย์ (21 พ.ย. 2026): …`).
- After editing, run `node -e "const vm=require('vm'),fs=require('fs');vm.runInNewContext(fs.readFileSync('data_subspe/osce_bN.js','utf8'),{QB:[],console})"`
  for each file you touched (must not throw), and `node tools/sumcheck.js data_subspe OSCE >/dev/null` must not crash.

## Do NOT
Run git, builds, or edit files other than your patch file / your OSCE files.

## Final report (short, ≤ 40 lines)
A table-like list: key → kept / changed (old answer → new answer) · deciding source · confidence. Then anything odd
(wrong tag, broken picture, question that should be removed).
