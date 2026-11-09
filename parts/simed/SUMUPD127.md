# Update existing SI Med High-yield summaries after adding SI127 (9 Nov 2026)

Same task as `parts/simed/SUMUPD130.md` (read it, and `parts/SUMMARY_HY_BRIEF.md` it points to) — but the new sets are now SI127 (all five rotations):
- MCQ: Ro401–404 (data_b21), Ro405–408 (data_b22 = orig 1–30, data_b23 = orig 31–60), Ro409–412 (data_b24), Ro413–416 (data_b25), Ro417–420 (data_b26). Keys come from the recall files themselves.
- OSCE: Ro401–404 (osce_b12), Ro405–408 CRQ (osce_b13, `sec:"CRQ"` — CRQ is SI's written OSCE-style station), Ro409–412 (osce_b14), Ro413–416 (osce_b15), Ro417–420 (osce_b16). **The OSCE files have no key — every OSCE answer was written by Claude.**
They are the items `node tools/sumcheck.js si/data_med <MCQ|OSCE> "<tag>"` reports as "not in any section".
Repo path: `/home/claude/ac-mdcu`. Intro now speaks of SI130–133 — mention SI127 where it now applies (incl. themes that recur across years; SI127 is the oldest year in the bank).
Several agents edit different tag files at the same time: only edit your own `sum_<mcq|osce>_<slug>.js` files. No build, no git.
