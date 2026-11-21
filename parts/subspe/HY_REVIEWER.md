# Subspe Sx High-yield — independent fact-check brief (21 Nov 2026)

Repo root: `/home/claude/bankypp/ac-mdcu`. You did NOT write the summary you check. Your job: check EVERY bullet of the file(s)
in your task against real references, then fix the file in place.

## Steps
1. Read the whole summary file `data_subspe/sum_<mcq|osce>_<slug>.js` (all `intro`, `asked`, `flow`, `pattern`, `kw`, `ddx`, `pearls`).
2. For every factual claim (numbers, cut-offs, doses, criteria, classifications, staging, first-line vs alternative, named
   signs, eponyms, guideline names/years): confirm it against the reference order
   1) newest guideline / textbook (Sabiston 21e, Schwartz 11e, Campbell-Walsh-Wein 13e, AJCC 8th, ATLS 10th, EAU 2025/AUA, NCCN, ASCRS,
   WSES, AHA/ESC, ABLS …) → 2) lecture L → 3) resource R → 4) note N (L/N of this ward: `data_subspe/io.js`).
   Use WebSearch / WebFetch for anything you are not certain is current and correct. Same-tier sources disagreeing → the bullet must
   show every version with source name + year. Old exam key vs references → the references win (pearls may say what the old key answered).
3. Spot-check that each section's answer agrees with its member questions: `node parts/subspe/hydump.js <MCQ|OSCE> "<tag>"`
   (`--from/--to` to page). If a section states an answer that contradicts the bank's `← ANSWER` of a member, decide by the references
   and report it (do not edit question data).
4. Fix in place with Edit: wrong → correct it (with source); unverifiable → delete that claim; outdated → update to the newest edition.
   Keep the style, structure, member lists and ids unchanged (do not move members between sections, do not drop members).
5. `node tools/sumcheck.js data_subspe <MCQ|OSCE> "<tag>"` must still end `bad 0` with full coverage.

Do not run builds or git, and edit only the file(s) in your task.

## Final report (short, ≤ 30 lines)
check line · number of bullets checked · list of corrections (section id: before → after · source) · deletions (unverifiable) ·
questions whose bank answer you believe is wrong (key + why + source).
