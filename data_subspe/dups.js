/* related questions across sets (Subspe Sx) — one array per group of set|ro|orig keys */
W.DUP=[];

/* clone จาก Gen Sx (19 พ.ย. 2026): กลุ่มข้อซ้ำของ Gen ที่สมาชิกถูก clone มา ≥2 ข้อ */
W.DUP.push(
  ["MDCU76|RoA|71","MDCU75|RoC|16"],
  ["MDCU78|RoA|Colorectal 3","MDCU78|RoC|Colorectal tumor 3","MDCU74|RoA|28","MDCU71|RoB|ไม่มีเลข 6","MDCU71|RoB|ไม่มีเลข 14"],
  ["MDCU76|RoD|15","MDCU78|RoC|Colorectal tumor 1","MDCU78|RoD|Colorectal tumor 3"],
  ["MDCU76|RoD|54","MDCU78|RoA|Anorectal 4","MDCU70|RoB|96"],
  ["MDCU78|RoC|Surgical Oncology 4","MDCU74|RoC|13"],
  ["MDCU78|RoA|Small bowel 1","MDCU78|RoC|Acute abdomen 3"],
  ["MDCU78|RoA|Anorectal 1","MDCU78|RoD|Anorectal disease 5"],
  ["MDCU78|RoA|Anorectal 2","MDCU78|RoD|Anorectal disease 1"],
  ["MDCU78|RoC|Anorectal 6","MDCU78|RoD|Anorectal disease 3"],
  ["MDCU74|RoA|ไม่มีเลข 9","MDCU78|RoA|Colorectal 5"],
  ["MDCU74|RoD|ไม่มีเลข 29","MDCU78|RoC|Anorectal 3","MDCU73|RoB|24"],
  ["MDCU79|RoC|คิดไม่ออกว่าอยู่บทไหน ไม่มีเลข 6","MDCU72|RoB|13"],
  ["MDCU79|RoD|Acute abdomen 1","MDCU75|RoD|33"],
  ["MDCU73|RoC|37","MDCU78|RoD|Stomach and Duodenum 5"],
  ["MDCU73|RoC|83","MDCU79|RoD|Liver and biliary tract 1&2 ไม่มีเลข 2","MDCU70|RoA|80"],
  ["MDCU72|RoA|86","MDCU79|RoD|Surgical oncology 1"],
  ["MDCU70|RoA|7","MDCU78|RoC|Acute abdomen 4"],
  ["MDCU70|RoA|31","MDCU78|RoD|Colorectal tumor 2"]
);

/* MDCU79 RoD Subspe (20 พ.ย. 2026) — ข้อเรื่องเดียวกับ 79C */
W.DUP.push(
  ["MDCU79|RoC|URO 2","MDCU79|RoC|URO 12","MDCU79|RoD|Uro 4"],
  ["MDCU79|RoC|URO 3","MDCU79|RoD|Uro 7"],
  ["MDCU79|RoC|URO 4","MDCU79|RoD|Uro 13"],
  ["MDCU79|RoC|URO 5","MDCU79|RoC|URO 8","MDCU79|RoD|Uro 5"],
  ["MDCU79|RoC|URO 10","MDCU79|RoD|Uro 15"],
  ["MDCU79|RoC|URO 11","MDCU79|RoD|Uro 9"],
  ["MDCU79|RoC|Plastic 4","MDCU79|RoD|Plastic 4"],
  ["MDCU79|RoC|Plastic 6","MDCU79|RoD|Ped 8"],
  ["MDCU79|RoC|Plastic 8","MDCU79|RoD|Plastic 11"],
  ["MDCU79|RoC|Ped 4","MDCU79|RoD|Ped 13"],
  ["MDCU79|RoC|Ped ไม่มีเลข 1","MDCU79|RoD|Ped 9"],
  ["MDCU79|RoC|neuro 6","MDCU79|RoD|Neuro 4"],
  ["MDCU79|RoC|Colo 2","MDCU79|RoD|Ped 2"],
  ["MDCU79|RoC|CVT 3","MDCU79|RoD|CVT 1","MDCU79|RoD|CVT 9"]
);
