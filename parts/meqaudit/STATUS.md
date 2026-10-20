# OB-GYN MEQ audit — status (ALL 4 GROUPS DONE 20 Oct 2026; started 20 Oct 2026 14:10, user: "เริ่ม MEQ ทั้งหมดต่อเลย")

| Group | Scope | Subs | Summary files | Status |
|---|---|---|---|---|
| 1 | Obstetric complications — case | 66 | sum_meq_case_comp | **done** — 11 model answers changed, 27 keys patched |
| 2 | Gynecology — case | 74 | sum_meq_case_gyn | **done** — 3 model answers changed, 8 keys patched |
| 3 | Obstetric complications — short answer; Antenatal; Labor | 69 | sum_meq_sa_comp, case/sa_ante, case/sa_labor | **done** — 5 model answers changed (+2 accept both cut-offs), 22 keys patched |
| 4 | Medical disease, Postpartum, Gyn onco, Repro — case + SA; Gynecology — SA | 70 | case/sa_med, case/sa_pp, case/sa_onco, case/sa_repro, sa_gyn | **done** — 7 model answers changed, 19 keys patched |

Merge: `node parts/meqaudit/build_fixes.js` → data_obgyn/meq_fixes.js (loaded by build_site.py and tools/sumlib.js after meq_b*.js),
then `node tools/sumcheck.js data_obgyn MEQ`, build, push, republish MDCU artifact (data_obgyn.js + index.html).

## Follow-ups found during the MEQ audit
- **New ACOG documents after the MCQ audit** (both confirmed by web search 20 Oct 2026):
  - ACOG CPG No. 13 "Management of menopause-related vasomotor, sleep, and mood symptoms" (Obstet Gynecol 2026;148(5), online
    15 Oct 2026) replaces PB 141 — MHT strong rec, start <60 y or <10 y from menopause, no fixed duration (individualize);
    SSRI/SNRI, fezolinetant, elinzanetant strong; gabapentin conditional; clonidine not recommended as primary; phytoestrogens/herbs
    not supported.
  - ACOG Clinical Practice Update on postmenopausal bleeding (Apr 2026; Obstet Gynecol 2026;148(1)) updates CO 734 — TVS **and**
    endometrial sampling as initial evaluation for most; sampling may be omitted only with a single episode, fully visualised ET ≤4 mm,
    no strong risk factors, return precautions and follow-up.
  - → Re-check the MCQ bank (groups 5 Menopause, 6 Uterus & endometrium: YUZU 35.12, 37.1, 37.6, MDCU78 RoC Gyn Endometrium 1,
    and any clonidine / "shortest duration" / CO 734 wording) against these two after the MEQ audit.
  - **Done 20 Oct:** MCQ re-checked against both — answers unchanged; added CPG 13 note to Menopause MCQs (MDCU78 RoB 51, RoD
    Menopause 3, YUZU 27.2, 27.5, 44.1 — 44.1 flagged: option E also an MHT candidate under CPG 13) and the PMB update note to
    YUZU 37.1, 37.6, MDCU78 RoC Gyn Endometrium 1. Also aligned MCQ aspirin dose (YUZU 1.4/1.4b) and BP target (MDCU78 RoC Hypertensive 1).
