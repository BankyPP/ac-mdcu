# OB-GYN MEQ audit — status (started 20 Oct 2026 14:10, user: "เริ่ม MEQ ทั้งหมดต่อเลย")

| Group | Scope | Subs | Summary files | Status |
|---|---|---|---|---|
| 1 | Obstetric complications — case | 66 | sum_meq_case_comp | running |
| 2 | Gynecology — case | 74 | sum_meq_case_gyn | running |
| 3 | Obstetric complications — short answer; Antenatal; Labor | 69 | sum_meq_sa_comp, case/sa_ante, case/sa_labor | running |
| 4 | Medical disease, Postpartum, Gyn onco, Repro — case + SA; Gynecology — SA | 70 | case/sa_med, case/sa_pp, case/sa_onco, case/sa_repro, sa_gyn | running |

Merge: `node parts/meqaudit/build_fixes.js` → data_obgyn/meq_fixes.js (loaded by build_site.py and tools/sumlib.js after meq_b*.js),
then `node tools/sumcheck.js data_obgyn MEQ`, build, push, republish MDCU artifact (data_obgyn.js + index.html).
