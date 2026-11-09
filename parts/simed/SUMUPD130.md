# Update existing SI Med MCQ High-yield summaries after adding SI130 (9 Nov 2026)

Read `/home/claude/ac-mdcu/parts/SUMMARY_HY_BRIEF.md` first — same rules, but here the files **already exist** (`si/data_med/sum_mcq_<slug>.js`) and you only bring them up to date.
New sets just added to SI Med (`si/data_med/`): SI130 Ro401–404 (data_b8, no key — answered by Claude), Ro405–408 (data_b9, handwritten key), Ro409–412 (data_b10, handwritten key), Ro417–420 (data_b11, no key), Pre-MCQ (data_b12–13 = Moodle mock exam SIMD415 with official key). They are the items `node tools/sumcheck.js si/data_med MCQ "<tag>"` reports as "not in any section".

For each of your tags:
1. `node tools/sumcheck.js si/data_med MCQ "<tag>"` → uncovered keys. `node tools/sumdump.js si/data_med MCQ "<tag>"` → read ALL items (old + new) so new items land in the right theme.
2. Edit the existing file in place: put each new item into the existing section whose theme it matches (append to `members`); if it brings a new angle, add an `asked` line / `pattern` fact / `pearls` trap to that section; if it is a new theme, add a new section (or group). Re-order sections/groups only if frequency changed a lot. Update `intro` if the topic's picture changed (it currently speaks of SI132 and SI133 only — mention SI130 where it now applies, incl. themes repeated between SI130 Pre-MCQ and the SI130 recalls).
3. Keep everything already there (never drop existing members or sections, never rewrite good content for style). Where a new item's answer differs from an older answer on the same point, mention it in `pearls` (which rotation, why — the bank's answer is the corrected one).
4. Re-run sumcheck until `bad 0` for each of your tags.
Only edit your own tag files. No build, no git. Final report (short): per tag the check line + sections added; anything odd (mis-tagged item, answer you believe is wrong — key + why + source).
