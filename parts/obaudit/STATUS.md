# OB-GYN MCQ audit — status (ALL 10 GROUPS DONE 20 Oct 2026)

User (20 Oct 2026 12:45): run only groups 1–3 now; groups 4–10 are **paused** (not cancelled) until the user says to resume.

| Group | Tags | Status |
|---|---|---|
| 1 | Labor, Induction of labor, Operative delivery | **done** 20 Oct — 1 key changed (YUZU 3.1 → E), 20 patched |
| 2 | ANC, Prenatal genetics, Amniotic fluid, Neonate | **done** 20 Oct — 0 key changes, 14 patched |
| 3 | Onco, Cervix, GTD | **done** 20 Oct — 0 key changes, 19 patched |
| 4 | Infection in pregnancy, Vaginitis & STI, PID | **done** 20 Oct — 1 key changed (YUZU 25.1 B → D), 28 patched |
| 5 | Reproductive endocrinology, Infertility, Menopause, Contraception | **done** 20 Oct — 0 key changes, 11 patched |
| 6 | Ovary, Uterus & endometrium, Vulva & vagina, Pelvic floor | **done** 20 Oct — 2 keys changed (YUZU 37.1 A → B, 37.6 B → E), 13 patched |
| 7 | Early pregnancy, Abortion, Medical disease in pregnancy, Anemia & thalassemia | **done** 20 Oct — 0 key changes, 36 patched |
| 8 | Fetal surveillance, Preterm & PROM, Multifetal | **done** 20 Oct — 0 key changes, 39 patched |
| 9 | Puerperium, Lactation, PPH, APH, Hypertension in pregnancy | **done** 20 Oct — 0 key changes, 9 patched (+1 dup aligned in patch_1) |
| 10 | Pelvic pain & endometriosis, Anatomy, Sexual assault, Ethics & epidemiology, Sexual health | **done** 20 Oct — 0 key changes, 14 patched |

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
- **Group 7 — UTI in pregnancy dup** MDCU78|RoB|33 (dup of MDCU78|RoC|Medical disease 2/5, YUZU||25.2): use ACOG Clinical Consensus
  (2023, Obstet Gynecol 142:435) wording — screen ASB once at first visit, treat 5–7 d, pyelonephritis 14 d total, first line
  cephalexin / fosfomycin / amoxicillin-clavulanate (nitrofurantoin, TMP-SMX only if no alternative); answer unchanged.
- **PCOS / POI wording (groups 7–10 dups):** ACOG PB 194 (2018) ultrasound ≥12 follicles 2–9 mm or volume >10 mL (Intl PCOS
  Guideline ≥20 = tier 3); POI per ACOG CO 605 FSH >30–40 IU/L twice ≥1 month apart (ESHRE >25 = tier 3); letrozole first line is the
  Intl PCOS Guideline 2023, not ACOG.

## Leftovers after all groups (not patchable by the brief / low priority)
- `variants` and `guide` fields were out of scope: some still mention maternal O2 for category II (ACOG CPG 10, 2025 no longer
  recommends routine O2) — MDCU79|RoB|FS 1, YUZU||14.3, 14.8, 43.3; late-preterm steroid variant YUZU||13.5; RCOG/NICE in the guide
  of MDCU79|RoB|Multifetal 1.
- ACOG supersessions met in this audit: CPG 8 (2024) labor; CPG 9 (2025) ripening/induction ← PB 107; CPG 10 (2025) intrapartum FHR
  ← PB 106/116; CPG 11 (Mar 2026) endometriosis diagnosis ← PB 114/CO 760 (diagnosis part); CPG 12 cerclage ← PB 142.
- Candidates for a second look (tier 1 not readable, key kept + ⚠): YUZU 12.13 septic abortion with viable fetus (Williams → evacuate,
  key = continue pregnancy); YUZU 45.5 misoprostol (no option fits ACOG PB 200); MDCU79 RoB Multifetal 1 twin B larger breech;
  MDCU78 RoC ANC 6 aspirin (no option = continue to delivery); YUZU 37.1 / 37.6 if RTCOG endorses FC for PMB.
