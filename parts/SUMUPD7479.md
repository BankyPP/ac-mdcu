# Update existing Gen Sx MCQ High-yield summaries after adding 5 new sets (20 Oct 2026)

Read `/home/claude/ac-mdcu/parts/SUMMARY_HY_BRIEF.md` first — same rules, but here the files **already exist** (`data/sum_mcq_<slug>.js`) and you only bring them up to date.
New sets just added to Gen Sx (`data/`): MDCU74 RoA/RoC/RoD (data_b14–16, handwritten keys), MDCU79 RoC (data_b17), MDCU79 RoD (data_b18, no key — answered by Claude). They are the items `node tools/sumcheck.js data MCQ "<tag>"` reports as "not in any section".

For each of your tags:
1. `node tools/sumcheck.js data MCQ "<tag>"` → list of uncovered keys. `node tools/sumdump.js data MCQ "<tag>"` → read ALL items (old + new) so new items land in the right theme.
2. Edit the existing file in place: put each new item into the existing section whose theme it matches (append to `members`); if it brings a new angle, add an `asked` line / `pattern` fact / `pearls` trap to that section; if it is a new theme, add a new section (or group). Re-order sections/groups only if frequency changed a lot. Update `intro` if the topic's picture changed (e.g. a theme that is now examined across many more rotations).
3. Keep everything already there (never drop existing members or sections, never rewrite good content for style). Where a new item's answer differs from an older answer on the same point, mention it in `pearls` (which rotation, why — the bank's answer is the corrected one).
4. Re-run sumcheck until `bad 0`.
Only edit your own tag files. No build, no git. Final report: per tag the check line + sections added; anything odd (mis-tagged item, answer you believe is wrong — key + why + source).
