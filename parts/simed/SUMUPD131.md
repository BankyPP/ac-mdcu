# Update existing SI Med MCQ High-yield summaries after adding SI131 (9 Nov 2026)

Same task as `parts/simed/SUMUPD130.md` (read it, and `parts/SUMMARY_HY_BRIEF.md` it points to) — but the new sets are now SI131:
Ro401–404 (data_b14), Ro405–408 (data_b15 = orig 1–69, data_b16 = orig 70–133; the file header says when an item in 1–90 repeats in 91–133 the later recall is preferred), Ro409–412 (data_b17, student key), Ro413–416 (data_b18 + data_b19, orig 1–51, 56, 57, 87–91), Ro417–420 (data_b20).
They are the items `node tools/sumcheck.js si/data_med MCQ "<tag>"` reports as "not in any section".
Repo path: `/home/claude/bankypp/ac-mdcu` (not /home/claude/ac-mdcu). Intro now speaks of SI130/132/133 — mention SI131 where it now applies (incl. themes that recur across SI130–133).
Several agents edit different tag files at the same time: only edit your own `sum_mcq_<slug>.js` files. No build, no git.
