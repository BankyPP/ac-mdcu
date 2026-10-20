# OB-GYN MCQ audit — status

User (20 Oct 2026 12:45): run only groups 1–3 now; groups 4–10 are **paused** (not cancelled) until the user says to resume.

| Group | Tags | Status |
|---|---|---|
| 1 | Labor, Induction of labor, Operative delivery | **done** 20 Oct — 1 key changed (YUZU 3.1 → E), 20 patched |
| 2 | ANC, Prenatal genetics, Amniotic fluid, Neonate | **done** 20 Oct — 0 key changes, 14 patched |
| 3 | Onco, Cervix, GTD | **done** 20 Oct — 0 key changes, 19 patched |
| 4 | Infection in pregnancy, Vaginitis & STI, PID | **paused** (nothing written) |
| 5 | Reproductive endocrinology, Infertility, Menopause, Contraception | **paused** |
| 6 | Ovary, Uterus & endometrium, Vulva & vagina, Pelvic floor | **paused** |
| 7 | Early pregnancy, Abortion, Medical disease in pregnancy, Anemia & thalassemia | **paused** |
| 8 | Fetal surveillance, Preterm & PROM, Multifetal | **paused** |
| 9 | Puerperium, Lactation, PPH, APH, Hypertension in pregnancy | **paused** |
| 10 | Pelvic pain & endometriosis, Anatomy, Sexual assault, Ethics & epidemiology, Sexual health | **paused** |

To resume: launch one agent per paused group with BRIEF.md + own_<N>.txt (same prompt as groups 1–3), then
`node parts/obaudit/build_fixes.js` (it merges every patch_*.json), sumcheck, build both sites, push, republish MDCU.
Dups owned by a paused group: groups 1–3 list them in their reports — apply the same change when that group runs.
OB-GYN MEQ audit: not started, user will say when (remind him).

## Carry-over notes for paused groups (from groups 1–3 reports)
- **Group 9 — aspirin duration:** ACOG PB 222 (2020) / CO 743 (2018) say low-dose aspirin 81 mg continues until delivery; the bank key
  for MDCU78|RoC|ANC 6 says stop at 36–37 wk (FIGO / Thai practice). Tier 1 overrides → re-check MDCU78|RoC|ANC 6, MDCU78|RoB|57,
  MDCU79|RoB|ANC 1, YUZU||45.2 (if RTCOG says 36 wk → tier-1 conflict, write both). ANC summary already states both versions.
- **Group 8 — polyhydramnios dups** MDCU78|RoB|22, YUZU||13.1, YUZU||13.6 (dups of MDCU78|RoB|39, group 2): use the same wording —
  Williams grades by DVP 8–11 / 12–15 / ≥16 cm; ACOG CO 828 (2021) moderate–severe = DVP ≥12 or AFI ≥30; delivery timing CO 831;
  tocolysis / indomethacin per ACOG PB 171, CO 713, CO 455 (not SMFM).
- **Group 9 — perineal tear dup** YUZU||4.4 (dup of MDCU78|RoB|2): cite ACOG PB 198 (2018) / Williams instead of RCOG; answer unchanged.
- **Group 8 — footling breech dup** YUZU||14.1 (dup of YUZU||3.11): do not cite RCOG as the authority; Williams / ACOG CO 745; answer unchanged.
- **Labor-curve questions anywhere:** group 1 switched to ACOG CPG 8 (2024): active phase from 6 cm; arrest = ≥6 cm + ROM + no change
  ≥4 h adequate contractions (≥6 h if inadequate on oxytocin); second stage >3 h nullip / >2 h multip. YUZU||3.1 key changed D → E.
