# Brief: audit OB-GYN MEQ model answers + MEQ High-yield summaries against the user's reference order

Repo root `/home/claude/ac-mdcu`. Ward dir `data_obgyn` (MDCU OB-GYN Y4, Thai medical school; this reference order is for the MDCU
site only). The user (20 Oct 2026) set a reference order for everything in the OB-GYN ward. The MCQ bank has already been audited
(see `parts/obaudit/STATUS.md` and `data_obgyn/fixes.js`); now the MEQ bank (148 questions, 279 sub-questions) and its summaries.

## Reference order
1. **RTCOG · ACOG · Williams** (Williams Obstetrics 26th ed. / Williams Gynecology newest ed.; RTCOG and ACOG = newest guideline /
   Practice Bulletin / Clinical Practice Guideline / Committee Opinion / Clinical Consensus). They **override everything**: the
   old-exam key (`key` = what the students' answer file says), the current model answer, lecture notes, any other source. If these
   three disagree with each other, do NOT choose — write every version (which source says what) and say they conflict.
2. Lecture slides (code L) and resources (code R), equal rank — none in the repo for OB-GYN yet, so skip.
3. Everything else (RCOG, NICE, WHO, CDC, FIGO, SMFM, ESHRE, ISUOG, NAMS, UpToDate, websites…) — only where tier 1 says nothing.
Always the newest edition / version; name source + year/edition when it decides an answer.

**ACOG documents that replaced older ones (found in the MCQ audit — use the new ones):** CPG 8 (2024) first/second-stage labor
(active phase from 6 cm; arrest = ≥6 cm + ROM + no change ≥4 h adequate contractions / ≥6 h inadequate on oxytocin; second stage
>3 h nullip, >2 h multip) · CPG 9 (2025) cervical ripening / induction (replaces PB 107) · CPG 10 (2025) intrapartum FHR
interpretation and management (replaces PB 106/116; routine maternal O2 no longer recommended) · CPG 11 (Mar 2026) diagnosis of
endometriosis (clinical diagnosis enough to start treatment; laparoscopy not required first; no CA-125) · CPG 12 cerclage
(replaces PB 142).
**Positions already applied to the MCQ bank — keep MEQ consistent with them:** low-dose aspirin 81 mg from 12–28 wk (ideally <16),
continue until delivery (ACOG PB 222 2020 / CO 743; stop at 36 wk = FIGO, tier 3) · PPROM per ACOG PB 217 (2020; 34 0/7–36 6/7 →
expectant or delivery both reasonable; latency antibiotics 7 days) · antenatal steroids per CO 713 + 2021 advisory (22 wk may be
considered) + offer betamethasone at 34 0/7–36 6/7 (SMFM #58 endorsed) · UTI in pregnancy per ACOG Clinical Consensus 2023
(screen ASB once, treat 5–7 d; pyelonephritis 14 d; first line cephalexin / fosfomycin / amoxicillin-clavulanate) · PMB per ACOG
CO 734 (ET ≤4 mm reassuring; office endometrial sampling first line, D&C/hysteroscopy if inadequate; incidental thick ET without
bleeding needs no routine work-up) · RPL work-up after ≥2 consecutive losses (ACOG PB 200) · severe-range BP treatment per ACOG
CO 767 / PB 222 (IV labetalol, IV hydralazine, oral nifedipine equal first line) · HIV in labor per ACOG CO 751 (VL >1,000 or
unknown → IV zidovudine + scheduled C/S at 38 wk) · perineal tear classification ACOG PB 198 / Williams.
Sites: acog.org and rtcog.or.th are often blocked or return binary PDFs here. Try one other URL, then list the point as
"unverified" and move on — never work around a proxy block, never invent a guideline statement. You may rely on firm, standard
Williams 26th / ACOG knowledge, but if you cannot verify a tier-1 position that would change an answer, do not change it.

## How MEQ data is stored
A question (case) = `{set, ro, orig, page, stem, gray, parts:[{info?, igray?, subs:[…]}], interp, approach?, trap?, summary,
opinion, mnemonic?, sa?, tags?, notes?…}`. A sub-question = `{q, qx, ctx, marks, rubric, key, ans, exp, points, kw, flag?, tags}`.
- `key` = the old answer file (what students wrote / the key file) — **never edit** (it records the source).
- `ans` = the model answer shown to the student; `exp` = explanation; `rubric` = how marks are given; `points` = scoring checklist
  `[{label, any:[…], need}]` (the student must hit `need` items of `any`); `kw` = auto-grading regex groups (array of arrays of
  strings, each a JS regex source; case-insensitive) — if you change what the right answer is, update `points` and `kw` so a
  student who writes the tier-1 answer gets the marks and one who writes the old wrong answer does not.
- Keys: case = `set|ro|orig` (plus `@p<page>` / `~n` when duplicated); sub = `<case key>#k` (k = 1-based over all parts).
- **You own** the subs listed in `parts/meqaudit/own_<N>.txt`, and the case-level fields of every case whose sub `#1` you own.
  Print them with `node parts/meqaudit/show.js parts/meqaudit/own_<N>.txt` (add `--brief` to hide context subs' long fields).
  Subs of the same case owned by another group are shown "(context only)" — do not patch them.

## Your task (two parts)
**Part A — model answers.** For every owned sub decide, by the reference order:
- Is `ans` (and `exp`, `rubric`, `points`, `kw`) what RTCOG / ACOG / Williams support — diagnosis wording, investigations, drug,
  dose, route, interval, timing, thresholds, management sequence? Check with WebSearch / WebFetch when the point is
  guideline-dependent, recently changed, flagged, or currently relies on a tier-3 source.
- **Change the model answer when** tier 1 clearly contradicts it (or the old key it follows). MEQ answers are free text, so fix the
  wrong part and keep the rest. If tier-1 sources conflict with each other, write each version in `ans`/`exp` and say they conflict.
- **Rewrite `exp` etc. when** they cite a tier-3 source for a point tier 1 covers (cite tier 1 instead), or state something tier 1
  contradicts. Leave fields that are fine untouched.
- When a model answer changes or a conflict is noted, put a short Thai note at the start of the sub's `flag`:
  "⚠ ตรวจตาม RTCOG/ACOG/Williams (20 ต.ค. 2026): …" saying what changed vs the old key and which source (year/edition) decided it.
- Case-level fields you own (`interp`, `approach`, `trap`, `summary`, `opinion`, `mnemonic`): keep them consistent with the subs.
Write `parts/meqaudit/patch_<N>.json` = `{ "<key>": { <only the fields you replace> }, … }` — only keys you actually change.
Allowed sub fields: `ans`, `exp`, `rubric`, `points`, `kw`, `flag`. Allowed case fields: `interp`, `approach`, `trap`,
`summary`, `opinion`, `mnemonic`. Never change `stem`, `gray`, `q`, `qx`, `ctx`, `marks`, `key`, `tags`, `kimg`, `notes`, `orig`,
`set`, `ro`, `page`, `parts` structure. Same language/style as now: Thai with English medical terms, `<b>` for key words, HTML
lists where the field already uses them. Do not write "ข้อ"+digit.
Validate: `node parts/meqaudit/check.js <N>` (JSON parses, keys owned, fields allowed, kw regexes compile).

**Part B — summaries you own** (`data_obgyn/sum_meq_<case|sa>_<tag>.js`, listed in your prompt). Edit in place:
- every `asked` / `flow` / `pattern` / `kw` / `ddx` / `pearls` / `trend` / `intro` point that relies on a tier-3 source where tier 1
  has a position → restate per tier 1 and cite it ("ACOG PB 217 (2020)", "RTCOG CPG …(ปี)", "Williams 26th");
- anything tier 1 contradicts → fix; tier-1 conflicts → write all versions and say they conflict; reflect Part A changes.
Keep the structure and every `members` list unchanged. Plain JS, double-quoted strings, escape `"` as `\"`.
Check: `node tools/sumcheck.js data_obgyn MEQ "<tag>"` → `bad 0` (this checks both case and short-answer files of the tag; if
the failure is in a file you don't own, report it rather than editing that file).

Do NOT run build scripts or git, and do not edit any other file (not meq_b*.js, not meq_fixes.js, not other groups' files).
Temp files only in your own scratchpad subfolder (`/tmp/claude-0/-home-claude/826617a5-5552-5588-9818-62c4d7e5f677/scratchpad/m<N>/`).

## Final report (short)
- counts: subs checked / model answers changed / explanations rewritten / case fields rewritten;
- every model-answer change: key · what was wrong → what it says now · tier-1 source (name + year/edition);
- tier-1 conflicts (key · what each source says);
- "unverified": points where tier 1 might change an answer but you could not access it;
- inconsistencies with the MCQ bank you noticed (MCQ key + what differs).
