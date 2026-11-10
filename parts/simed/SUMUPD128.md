# Update existing SI Med High-yield summaries after adding SI128 + SI129 and keying SI127 (10 Nov 2026)

Same task as `parts/simed/SUMUPD130.md` (read it, and `parts/SUMMARY_HY_BRIEF.md` it points to). Repo `/home/claude/ac-mdcu`.

New sets (the items `node tools/sumcheck.js si/data_med <MCQ|OSCE> "<tag>"` reports as "not in any section"):
- SI128 MCQ: Ro401–404 (data_b27, key file), Ro405–408 (data_b28 + data_b29, **no key** — answered by Claude), Ro409–412 (data_b30, key file), Ro413–416 (data_b31, key file)
- SI129 MCQ: Ro405–408 (data_b32; orig "n (ชุดที่ 2)" = second numbering in the same paper), Ro409–412 (data_b33)
- SI128 OSCE: Ro401–404 incl. CRQ (osce_b17), Ro405–408 (osce_b18), Ro409–412 (osce_b19), Ro413–416 (osce_b20) — note-taker answers only, keys not 100%
- SI129 OSCE: Ro405–408 SEQ (osce_b21, `sec:"SEQ"` — SEQ is SI's written short-answer station, treated like CRQ), Ro417–420 (osce_b22)

Also **SI127 MCQ now has keys** (late key file "Key 127"): some answers changed to follow the key — Ro401–404 GI 5 (→ anti-HBc IgM), Ro409–412 "ไม่มีเลข 9" (→ TTE), "ไม่มีเลข 39" (→ lupus nephritis), "ไม่มีเลข 40" (→ O2 cannula), Ro413–416 17 (→ hypokalemic PP), 20 (→ adult-onset Still), Ro417–420 RS 2 (→ thymoma), Rheumato 2 (→ meropenem), Rheumato 3 (→ OA). If your summary states the old answer for these items, correct it. Where the bank still answers against a key, the item's `flag`/`opinion` says so — the bank's answer stands.

Intro now speaks of SI127, SI130–133 — mention SI128/SI129 where it now applies (incl. themes that recur across years). Year order newest→oldest: 133, 132, 131, 130, 129, 128, 127.
Several agents edit different tag files at the same time: only edit your own `sum_<mcq|osce>_<slug>.js` files. No build, no git.
