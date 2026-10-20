# OB-GYN MCQ audit — status

User (20 Oct 2026 12:45): run only groups 1–3 now; groups 4–10 are **paused** (not cancelled) until the user says to resume.

| Group | Tags | Status |
|---|---|---|
| 1 | Labor, Induction of labor, Operative delivery | running → patch_1.json |
| 2 | ANC, Prenatal genetics, Amniotic fluid, Neonate | running → patch_2.json |
| 3 | Onco, Cervix, GTD | running → patch_3.json |
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
