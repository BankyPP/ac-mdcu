# Brief: write the Phase 2 "สรุป High-yield" summary for one or more topic tags

The website (repo root `/home/claude/ac-mdcu`, MDCU site + SI site from the same code) is a past-exam practice bank for
Thai medical students. In Phase 2 (pre-exam review) each ward + exam type (MCQ / MEQ / OSCE, separate content) has a page
"สรุป High-yield" in the exact style of the user's favourite "สรุปแนวข้อสอบ" tab: per topic → groups → themes, every theme
that has ever been examined, how it was asked, and the exam-ready answer pattern. You write the content for the topic
tag(s) named in your task. The page itself is already built (`site/hysum.js`); you only write data files.

## What counts
Only questions in the Service round (the real old-exam bank, including recalls the bank completed with AI) — that is
exactly what `tools/sumdump.js` prints. Never Unit-round / lecture / Admission questions.

## Input
`node tools/sumdump.js <ward dir> <MCQ|MEQ|OSCE> "<tag>"` (run from the repo root) prints every item tagged with that tag:
member key in [brackets], rotation, stem, options with ← ANSWER (MCQ) or sub-question + model answer + explanation +
rubric (MEQ/OSCE), and ⚠ flags. READ ALL OF IT — the user wants every examined issue covered ("นั่งไล่ทีละข้อ").
`--brief` trims long text (use it only if your task says so); `--full` adds per-option notes if you need them.
The bank's answer is the corrected one: where a flag says the source key was wrong, follow the bank's answer.

## Output — one file per tag
Write `<ward dir>/sum_<mcq|meq|osce>_<slug>.js` (slug = the tag lower-cased, non-letters → "-", e.g. tag
"Stomach & duodenum" → `sum_mcq_stomach-duodenum.js`; MEQ tag "gyn" → `sum_meq_gyn.js`). Plain JS, exactly this shape:
```js
SUMM.push({tag:"<tag exactly as printed by sumdump>", title:"<display title, e.g. Stomach & duodenum>",
  intro:"<html: <ul><li>…</li></ul> 2–5 bullets — what this topic looks like in this exam, which question types recur, the top themes>",
  groups:[
    {title:"<group, e.g. Peptic ulcer disease>", sections:[
      {id:"<short-kebab, unique in this file>", title:"<theme, e.g. Perforated peptic ulcer>",
       trend:"<optional Thai, ONE short clause: what tends to be asked / why it is likely again — do NOT list rotations or counts, the page prints them from members>",
       asked:["<question pattern that was asked, Thai + English terms, e.g. 'ให้ CXR free air → ถาม next step'>", "..."],
       pattern:["<html bullet: exam-ready answer pattern / key facts — numbers, doses, cut-offs, criteria, first-line vs alternative, the decision rule>", "..."],
       pearls:["<optional: traps, look-alike distractors that keep appearing, places where the source key was wrong>"],
       members:["<member key exactly as in [brackets]>", "..."]}
    ]}
  ]});
```
- `members` = keys of every item belonging to the theme, copied exactly. EVERY item your dump prints must be in at least
  one section of that tag's file (an item may sit in two sections if it truly spans both). The page computes counts,
  rotations and the 🔥/ออกบ่อย/ออกซ้ำ badges from `members`, and shows each member as a button with the student's status.
- Group related themes (same organ/disease/management family). Order groups and sections from most to least frequently
  examined (count distinct rotations in the dump). Granularity: one theme = one concept/decision that was examined
  (typically 2–8 members; a theme asked only once is still its own section or folded into the closest theme).
- Language: Thai with English medical terms, compact high-yield point form like a strong tutor's revision sheet — someone
  reading only this page should know what is asked and how to answer. Concrete numbers, doses, cut-offs, criteria,
  classifications, first-line choices; current guidelines/newest textbook editions only (name the guideline when it
  decides the answer, e.g. "ATA 2015", "NCCN", "RTCOG", "Tokyo Guidelines 2018"). Do not invent facts; when unsure, leave it out.
- `<b>` for the key word of a bullet is fine; no tables, no images, no mnemonics. Do NOT write "ข้อ" followed by a digit
  (say "เคส", "ข้อย่อย", or name the rotation). Put spaces around "/" between long words.
- Strings: use double-quoted JS strings; escape any `"` inside as `\"`; no line breaks inside a string.

## OB-GYN reference order (user, 20 Oct 2026 — overrides every other OB-GYN instruction in task prompts)
1. **RTCOG, ACOG, Williams** (Williams Obstetrics / Williams Gynecology) — newest edition / latest guideline only. They override
   everything else: old-exam keys, lecture L / R / N notes, other rounds. If these three disagree with each other, write every
   version, say which source says what, and mark it as a conflict — never pick one silently.
2. Lecture slides (code L) — when tier 1 has nothing or more detail is needed.
3. Everything else (other codes, other guidelines such as RCOG / NICE / WHO / CDC / ESHRE, websites) — only after tiers 1–2.
Name the source + edition/year whenever a source decides an answer. If tier-1 content cannot be accessed, say so; never guess it.

## Check (must pass)
`node tools/sumcheck.js <ward dir> <MCQ|MEQ|OSCE> "<tag>"` → must end with `bad 0` (structure, member keys, coverage,
text rules). Fix and re-run until it does. Do NOT run build scripts, git, or edit any other file.

## Final report (short)
Per tag: the check line; groups → sections with member counts; anything odd in the data (an item that seems mis-tagged —
key + suggested tag; an answer you believe is wrong — key + why + source).

## Extra fields (all types, optional unless stated)
- `flow:["…"]` — how the case / station unfolds, in order: what information is given → what is asked next
  (e.g. "Part 1: หญิง 32 wk น้ำเดิน → ซักประวัติเพิ่ม", "Part 2: ให้ผล SSE + NST → Dx + DDx", "Part 3: → management").
- `kw:["…"]` — the exact words / phrases a marker looks for (each short, e.g. "G2P1 GA 32 wk with PPROM", "MgSO4 4 g IV loading").
- `ddx:["…"]` — differentials that must be named / ruled out.
The page shows: 📈 rotations + trend → แนวคำถาม (asked) → flow → ต้องตอบอะไร (pattern) → คำสำคัญ (kw) → DDx → กับดัก (pearls) → buttons.
It also lists every section title under each topic as "เรื่อง / โรคที่เคยออก", so section titles should name the disease / problem.

## MEQ: Case and Short answer are separate summaries (user, 20 Oct 2026)
Each MEQ tag gets TWO files (one may be omitted if the tag has no items of that style):
- `sum_meq_case_<slug>.js` with `style:"case"` — only case-style items (`node tools/sumdump.js <dir> MEQ "<tag>" --style case`).
  One section = one disease / clinical problem that was examined as a case. For each, cover:
  `asked` = every kind of question the case asked (ซักประวัติเพิ่ม, PE, Dx format, DDx, investigation, management step by step,
  counselling, complication, follow-up…), `flow` (REQUIRED) = how the case unfolded part by part, `pattern` = what to write for each
  part to get full marks (lists, Dx wording, drug + dose + route, timing), `kw` (REQUIRED) = marker keywords, `ddx`, `pearls` =
  rubric traps / where the old key was wrong. The topic `intro` = which diseases appear as cases and the usual question sequence.
- `sum_meq_sa_<slug>.js` with `style:"sa"` — only short-answer items (`--style sa`), written like the normal brief (asked + pattern,
  kw/ddx when useful). Group by concept; sections = what was asked.
Members must match the file's style (sumcheck rejects a case item in an sa file and vice versa) and every item of that style
tagged with the tag must be covered.

## OSCE
One file per station-type tag as before, but `flow` and `kw` are REQUIRED for every section:
`asked` = what the station asked (find / describe / diagnose / next step / treat / history / examine / procedure / advise),
`flow` = the station's tasks in order (for examiner stations: the checklist in order from greeting/identification/consent to
closing), `pattern` = exactly what to say or write for each task, `kw` = the words the examiner ticks, `ddx` when the station asks
for differentials, `pearls` = common reasons to lose marks. Section titles = the disease / finding / task examined, so the topic
overview lists "what topics this station type has examined".
