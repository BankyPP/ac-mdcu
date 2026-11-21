# Subspe Sx High-yield — writer brief (21 Nov 2026, all years MDCU65–79)

Repo root: `/home/claude/bankypp/ac-mdcu` (NOT /home/claude/ac-mdcu as older briefs say). Ward dir `data_subspe`.
You are the ONLY writer of the tag(s) in your task, and you must personally read EVERY item of your tag (helpers may only
fact-check). The user wants the same quality as the Gen Sx summaries (`data/sum_mcq_*.js`), which he likes most.

## Read first
1. `parts/SUMMARY_HY_BRIEF.md` — file format, fields, rules (OSCE: also its `## OSCE` section and `parts/subspe/SUM_OSCE_BRIEF.md`).
2. Style model — open and read 2–3 full sections of `data/sum_mcq_gallstone.js` and `data/sum_mcq_onco.js` (Gen Sx). Match their
   depth: intro = which themes recur and which years asked what; each section = trend + every way it was asked + an exam-ready
   pattern with concrete numbers / cut-offs / criteria / doses / first-line vs alternative + pearls with traps and old-key notes.
3. The old file of your tag (`data_subspe/sum_<mcq|osce>_<slug>.js`, if it exists) — it covers only some years: use it as raw
   material, but WRITE THE WHOLE FILE AGAIN (groups/order must reflect all years) unless your task says "continue".

## Read every item — in chunks, keep notes on disk
`node parts/subspe/hydump.js <MCQ|OSCE> "<tag>" --from 1 --to 80` then 81–160 … until the end (the header prints the total).
It shows stem, options + ← ANSWER, the file key (`Key(file)`), the bank's opinion and explanation. The bank's `← ANSWER` is the
audited answer (key audit done 21 Nov 2026); where `Key(file)`/`Opinion` show the old key disagreed, say in `pearls` what the old key
answered (e.g. "คีย์เก่า MDCU73 RoB ตอบ … แต่ตาม AJCC 8th …").
After each chunk append to your notes file `/home/claude/work/notes_<type>_<slug>.md`: one line per item
`key → theme · asked what · answer · key facts`. Build groups/sections from the notes file, not from memory.

## Organise like Gen Sx
- Groups = disease families (e.g. Uro: Stone · BPH/LUTS · Urologic oncology (kidney/bladder/prostate/testis/UTUC) · Scrotal emergencies ·
  GU trauma · Infection · Pediatric uro · Congenital …). Order groups and sections from most to least examined = number of DISTINCT
  rotations (set+ro). Check with `node parts/subspe/hystat.js <MCQ|OSCE> data_subspe/sum_<…>.js` and reorder.
- One section = one disease / one decision. A theme asked again in several years = ONE section that covers every angle ever asked
  (`asked` lists each angle). Typical 2–10 members; a theme asked once is its own section or folded into the closest theme.
- Section titles name the disease / problem (they are listed as "เรื่อง / โรคที่เคยออก").
- `pattern`: what to answer — numbers, cut-offs, criteria, classifications, doses, first-line vs alternative, and the source name when the
  source decides the answer (e.g. "EAU 2025", "AJCC 8th", "ATLS 10th", "ASCRS 2022", "AHA 2023", "Parkland (ABLS 2018)").
- Never write "ข้อ" followed by a digit; do not list rotations/counts in text (the page prints them).

## Reference rules (the user's, strict)
Order: 1) newest guideline / textbook (Sabiston 21e, Schwartz 11e, Campbell-Walsh-Wein 13e, Greenberg Neurosurgery, Holcomb & Murphy
Ashcraft's, Grabb & Smith, ASCRS textbook, AJCC 8th, ATLS 10th, EAU/AUA, NCCN, WSES, ESC/AHA …) → 2) lecture L → 3) resource R → 4) note N
(this ward's L/N are in `data_subspe/io.js`).
- Higher tier wins. Same tier disagreeing → write every version with source name + year.
- Old exam key vs references → the answer follows the references; write in pearls what the old key answered.
- Anything you cannot confirm from a real source → leave it out. Never guess. Use WebSearch/WebFetch whenever a number, criterion or
  first-line choice is not something you are certain is current.
- Content = only what the old exams asked (no extra topics). References only make the answers and numbers correct.

## Output & check
Write `data_subspe/sum_<mcq|osce>_<slug>.js` (slug rule in SUMMARY_HY_BRIEF.md). For a big tag, write it in pieces if you like
(e.g. build the groups in several Write/Edit steps) but the final file must be one valid `SUMM.push({...})`.
`node tools/sumcheck.js data_subspe <MCQ|OSCE> "<tag>"` must end `bad 0` and show `covers N/N`. Do not run builds/git or edit other files.

## Final report (short)
check line · groups → sections (member count, rotation count) · mis-tagged items (key → suggested tag + why) · answers you believe
are still wrong (key + why + source) · anything odd.
