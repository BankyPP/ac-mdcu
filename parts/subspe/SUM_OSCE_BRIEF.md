# Subspe Sx OSCE — High-yield summary (Nov 2026)

Follow `parts/SUMMARY_HY_BRIEF.md` completely, including its `## OSCE` section (`asked`, `flow`, `pattern`, `kw` required on every section; `ddx`, `pearls` when useful).

- Repo root: `/home/claude/ac-mdcu`. Ward dir: `data_subspe`. Exam type: `OSCE`.
- Dump: `node tools/sumdump.js data_subspe OSCE "<tag>"` — read every station.
- Output: `data_subspe/sum_osce_<tag>.js` (tag = topic key: proc, hx, pe, img, inst, suture, path, spot).
- Check: `node tools/sumcheck.js data_subspe OSCE "<tag>"` must end `bad 0`.
- Style model: `data_med/sum_osce_img.js` and `data_med/sum_osce_proc.js` (MDCU Med OSCE). Read 1–2 sections first.
- Data = Subspecialty surgery Y4 OSCE, MDCU65–67 (2555–2557), 11 rotations, from file GSUP4K. Stations with `sec:"PowerPoint"` or `sec:"MEQ"` are picture stations with no examiner (Spot Diagnosis); `sec:"OSCE"` stations may have an examiner (proc/hx/pe).
- Many stations carry ⚠ flags where the bank corrected the source key or made up vignette values: follow the bank's answer; mention recurring source-key errors in `pearls`. Do not present made-up vignette numbers as if they were what the real exam gave.
- Reference standard: newest editions only — Sabiston 21e / Schwartz 11e, AJCC 8th edition for staging, ATLS 10th, current guidelines (name them when they decide an answer).
- Groups: organise by organ system / station type (e.g. for spot: Pediatric surgery · Anorectal · Plastic/Skin/Burn · Head & neck · Breast · Vascular · Uro · Hernia · Imaging film · Instrument · Other). Section titles = the disease / finding / task.
- Write ONLY your own `data_subspe/sum_osce_<tag>.js` file(s). No build, no git, no other files.
- Final report (short): check line per tag; groups → sections with member counts; anything odd (mis-tagged station key + suggested topic; answer you believe is wrong + why).
