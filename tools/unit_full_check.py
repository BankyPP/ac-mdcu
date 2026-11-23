#!/usr/bin/env python3
"""เช็กว่าเฉลย Unit round ครบทุกพาร์ท (ผู้ใช้สั่ง 23 พ.ย. 2026 — ต้นแบบ = Gen Sx L03)

python3 tools/unit_full_check.py data_subspe/unit_L22.js [ไฟล์อื่น ...]
python3 tools/unit_full_check.py --all          # ทุก data*/unit_*.js (รายงานอย่างเดียว)

ต้องได้ "ขาด 0" ทุกไฟล์ที่สร้าง/แก้ในรอบนั้นก่อน push
ทุกข้อต้องมี:
  notes    สไลด์/ลายมือเขียนไว้ว่า (ยกคำจากไฟล์)          ≥ 30 ตัวอักษร
  kimg     รูปหน้าที่อ้าง                                   ≥ 1
  interp   ตีความโจทย์: คำใบ้ใน stem → โจทย์ถามอะไร         ≥ 25 ตัวอักษร
  why      ทำไมข้อถูกถูก + อ้างไฟล์/หน้า                     ≥ 150 ตัวอักษร (ไม่นับแท็ก HTML)
  wrong    ทุกช้อยผิด: ทำไมผิด + "จะถูกถ้า…"                 ทุกข้อ ≥ 40 ตัวอักษร
  trap     จุดหลอก/จุดที่สับสนบ่อย                          ≥ 25 ตัวอักษร
  summary  สรุปความรู้จากข้อนี้                             ≥ 3 bullet
  src      ที่มา (บท · ไฟล์/หน้า · สัญลักษณ์ · ตัวพิมพ์/ลายมือ)
"""
import glob, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TXT = lambda x: re.sub(r"<[^>]+>", "", str(x or "")).strip()


def problems(q):
    bad = []
    if len(TXT(q.get("notes"))) < 30: bad.append("notes")
    if not q.get("kimg"): bad.append("kimg")
    if len(TXT(q.get("interp"))) < 25: bad.append("interp")
    if len(TXT(q.get("why"))) < 150: bad.append("why")
    w = q.get("wrong")
    items = list(w.values()) if isinstance(w, dict) else list(w or [])
    if len(items) < len(q.get("opts") or []) - 1 or any(len(TXT(x)) < 40 or "จะถูก" not in str(x) for x in items):
        bad.append("wrong")
    if len(TXT(q.get("trap"))) < 25: bad.append("trap")
    if len(q.get("summary") or []) < 3: bad.append("summary")
    if not TXT(q.get("src")): bad.append("src")
    return bad


def check(path):
    out = subprocess.run(["node", os.path.join(ROOT, "tools/unit_dump.js"), path], capture_output=True, text=True)
    d = json.loads(out.stdout or "null") or {}
    Q = d.get("QB") or []
    cnt, worst = {}, []
    for q in Q:
        b = problems(q)
        for x in b: cnt[x] = cnt.get(x, 0) + 1
        if b: worst.append((q.get("n"), b))
    bad = len(worst)
    print(f"{path}: {len(Q)} ข้อ · ครบ {len(Q) - bad} · ขาด {bad}" + (f" · แยกพาร์ท {cnt}" if cnt else ""))
    for n, b in worst[:15]: print(f"   ข้อ {n}: {', '.join(b)}")
    if len(worst) > 15: print(f"   … อีก {len(worst) - 15} ข้อ")
    return bad


if __name__ == "__main__":
    args = sys.argv[1:]
    files = sorted(glob.glob(os.path.join(ROOT, "data*/unit_*.js"))) if args == ["--all"] else args
    total = sum(check(f) for f in files)
    if args != ["--all"]: sys.exit(1 if total else 0)
