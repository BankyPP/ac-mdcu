#!/usr/bin/env python3
"""ใส่เฉลยที่เขียนใหม่ลงไฟล์ Unit round (เติมเฉลยครบทุกพาร์ท 23 พ.ย. 2026)
python3 tools/unit_patch.py <patch.json> <unit file> [unit file ...]
patch.json = {"<n>": {"interp": "...", "why": "...", "wrong": {"A": "..."}, "trap": "...", "summary": [...]}, ...}
ฟิลด์ที่ใส่ในแพตช์ = แทนของเดิมทั้งฟิลด์ · ฟิลด์ที่ไม่ใส่ = คงเดิม · ใช้ได้กับไฟล์ที่เป็น W.UNIT.push({JSON}); บรรทัดเดียว (ไม่มี const U=)"""
import json, os, subprocess, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
patch = json.load(open(sys.argv[1]))
for f in sys.argv[2:]:
    src = open(f).read()
    assert "const U=" not in src, f + ": มี const U= — ใช้กับไฟล์นี้ไม่ได้"
    d = json.loads(subprocess.run(["node", os.path.join(ROOT, "tools/unit_dump.js"), f], capture_output=True, text=True, check=True).stdout)
    by = {str(q["n"]): q for q in d["QB"]}
    for n, fields in patch.items():
        assert n in by, f"{f}: ไม่มีข้อ {n}"
        by[n].update(fields)
    lines = src.split("\n")
    i = next(k for k, l in enumerate(lines) if l.startswith("W.UNIT.push("))
    lines[i] = "W.UNIT.push(" + json.dumps(d, ensure_ascii=False, separators=(",", ":")) + ");"
    open(f, "w").write("\n".join(lines))
    print(f, "แก้", len(patch), "ข้อ")
