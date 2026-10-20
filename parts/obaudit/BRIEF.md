# Brief: audit OB-GYN MCQ answers + High-yield summaries against the user's reference order

Repo root `/home/claude/ac-mdcu`. Ward dir `data_obgyn` (MDCU OB-GYN Y4, Thai medical school). The user (20 Oct 2026) set a
reference order for everything in the OB-GYN ward, and asked to re-check the whole MCQ bank and its summaries against it:

1. **RTCOG · ACOG · Williams** (Williams Obstetrics 26th ed. / Williams Gynecology newest ed.; RTCOG and ACOG = newest
   guideline / Practice Bulletin / Clinical Practice Guideline / Committee Opinion on that topic). These **override everything**:
   the old-exam key, the bank's current answer, lecture notes, any other source. If these three disagree with each other,
   do NOT choose — write every version (which source says what) and state that they conflict.
2. Lecture slides (code L) and resources (code R), equal rank — the OB-GYN ward has none in the repo yet, so skip.
3. Everything else (RCOG, NICE, WHO, CDC, FIGO, ESHRE, NAMS, UpToDate, websites…) — only when tier 1 says nothing on the point.
Always the newest edition / version; name source + year/edition when it decides an answer.

## Your task (two parts)
You get a group of topic tags. **Part A — questions you own:** `parts/obaudit/own_<N>.txt` lists the MCQ keys you own (each
question is owned by exactly one agent). Print them with `node parts/obaudit/show.js parts/obaudit/own_<N>.txt` (all fields,
plus "same/similar question elsewhere" from dups.js). For each question decide, by the reference order:
- Is the bank's answer (`ans`, 0-based index into `opts`) what RTCOG / ACOG / Williams support? Check with WebSearch / WebFetch
  when the point is guideline-dependent, recently changed, flagged ⚠ in `flag`/`opinion`, or the explanation relies on a
  tier-3 source (RCOG, NICE, WHO, CDC, FIGO, ESHRE…). Useful: rtcog.or.th (Thai CPGs / RTCOG Clinical Practice Guideline PDFs),
  acog.org (Practice Bulletins / Committee Opinions / Clinical Practice Guidelines — summaries are public), Williams via
  publisher pages / reputable excerpts. You may rely on firm, standard textbook knowledge of Williams 26th, but never invent a
  guideline statement — if you cannot verify a tier-1 position that would change the answer, do not change the answer; list it
  under "unverified" in your report.
- **Change the answer only when** a tier-1 source clearly contradicts the current answer AND one option clearly matches tier 1.
  If tier-1 sources conflict with each other, keep the answer that at least one tier-1 source supports, and write the conflict
  in the explanation. If the question is flawed (no option fits tier 1), keep the answer and say so in `flag`.
- **Rewrite the explanation fields when** they cite a tier-3 source for a point tier 1 covers (cite tier 1 instead), state
  something tier 1 contradicts, or the answer changes. Keep everything else as it is — do not rewrite fields that are fine.
- Questions that are the same question elsewhere (dups) must end up answered consistently — if you change one, change the
  others you own the same way, and list any you do not own in your report.

Write `parts/obaudit/patch_<N>.json` = `{ "<key>": { <only the fields you replace> }, … }` — only questions you actually change.
Fields you may set: `ans` (number), `interp`, `why`, `wrong` (object with the 4 wrong letters → text, same style as now),
`trap`, `summary` (array), `flag`, `opinion`, `mnemonic`. Never change `stem`, `opts`, `gray`, `key`, `orig`, `set`, `ro`,
`file`, `kimg`, `img`, `notes` (the student's progress is tied to the stem). Same language/style as the existing fields: Thai with
English medical terms, `<b>` for key words. When the answer changes or a conflict is noted, put a short Thai note at the start
of `flag`: "⚠ ตรวจตาม RTCOG/ACOG/Williams (20 ต.ค. 2026): …" saying what changed and which source (with year/edition) decided it,
and keep `opinion` consistent with the new answer. Do not write "ข้อ"+digit.
Validate: `node -e "JSON.parse(require('fs').readFileSync('parts/obaudit/patch_<N>.json','utf8'))"` must succeed.

**Part B — summaries you own:** the files `data_obgyn/sum_mcq_<slug>.js` for your tags (one per tag). Edit them in place:
- every `pattern` / `pearls` / `asked` / `trend` / `intro` point that relies on a tier-3 source where tier 1 has a position →
  restate per tier 1 and cite it (e.g. "ACOG PB 222 (2020)", "RTCOG CPG …(ปี)", "Williams 26th");
- anything tier 1 contradicts → fix; tier-1 conflicts → write all versions and say they conflict;
- reflect the answers you changed in Part A (and drop pearls that defended an old wrong key).
Keep the structure and every `members` list unchanged (do not add/remove members or sections unless a section's content becomes
wrong). Plain JS, double-quoted strings, escape `"` as `\"`. Check: `node tools/sumcheck.js data_obgyn MCQ "<tag>"` → `bad 0`.

Do NOT run build scripts or git, and do not edit any other file (not data_b*.js, not fixes.js, not other agents' patch/summary files).

## Final report (short)
- count of questions checked / answers changed / explanations rewritten;
- table-ish list of every answer change: key · old → new option text · tier-1 source (name + year/edition);
- tier-1 conflicts found (key · what each source says);
- "unverified": points where tier 1 might change an answer but you could not access it;
- dups you did not own that need the same change.
