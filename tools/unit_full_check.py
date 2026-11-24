#!/usr/bin/env python3
"""เช็กว่าเฉลย Unit round ครบทุกพาร์ท (ผู้ใช้สั่ง 23 พ.ย. 2026 — ต้นแบบ = Gen Sx L03)

python3 tools/unit_full_check.py data_subspe/unit_L22.js [ไฟล์อื่น ...]
python3 tools/unit_full_check.py --all          # ทุก data*/unit_*.js (รายงานอย่างเดียว)

ต้องได้ "ขาด 0" ทุกไฟล์ที่สร้าง/แก้ในรอบนั้นก่อน push
ทุกข้อต้องมี:
  notes    สไลด์/ลายมือเขียนไว้ว่า (ยกคำจากไฟล์)          ≥ 30 ตัวอักษร
  kimg     รูปหน้าที่อ้าง                                   ≥ 1
  (ยกเกณฑ์ 24 พ.ย. 2026 ตาม kit/มาตรฐานเฉลย.md — เท่าข้อสอบเก่า Gen Sx)
  interp   ตีความโจทย์: คำใบ้ใน stem → โจทย์ถามอะไร         ≥ 100 ตัวอักษร
  why      ทำไมข้อถูกถูก + อ้างไฟล์/หน้า                     ≥ 350 ตัวอักษร (ไม่นับแท็ก HTML)
  wrong    ทุกช้อยผิด: ทำไมผิด + "จะถูกถ้า…" ไม่ซ้ำกัน       ทุกข้อ ≥ 100 ตัวอักษร
  trap     จุดหลอก/จุดที่สับสนบ่อย + วิธีแยก                 ≥ 120 ตัวอักษร
  summary  สรุปความรู้รอบประเด็น                            ≥ 5 bullet รวม ≥ 600 (bullet ละ ≥ 15)
  variants โจทย์แบบใหม่ที่อาจออก                            ≥ 3 ข้อ รวม ≥ 250
  src      ที่มา (บท · ไฟล์/หน้า · สัญลักษณ์ · ตัวพิมพ์/ลายมือ)
"""
import glob, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JUNK = re.compile(r"จะถูกถ้า\s*…|จะถูกถ้า\.\.\.|ไม่ใช่หลักในบทนี้")  # "จะถูกถ้า…ไม่ถูก" = ยังไม่ได้เขียนจริง
TXT = lambda x: re.sub(r"<[^>]+>", "", str(x or "")).strip()


def problems(q):
    # เกณฑ์กลาง 24 พ.ย. 2026 (kit/มาตรฐานเฉลย.md · เท่าข้อสอบเก่า Gen Sx ยกเว้น opinion ที่ Unit ไม่มีคีย์ให้เห็นแย้ง)
    bad = []
    if len(TXT(q.get("notes"))) < 30: bad.append("notes")
    if not q.get("kimg"): bad.append("kimg")
    if len(TXT(q.get("interp"))) < 100: bad.append("interp")
    if len(TXT(q.get("why"))) < 350: bad.append("why")
    w = q.get("wrong")
    items = list(w.values()) if isinstance(w, dict) else list(w or [])
    if len(items) < len(q.get("opts") or []) - 1 or any(len(TXT(x)) < 100 or not re.search("จะถูก|จะเป็นคำตอบ|ไม่มีสถานการณ์", str(x)) or JUNK.search(str(x)) for x in items) or len(set(map(TXT, items))) < len(items):
        bad.append("wrong")
    if len(TXT(q.get("trap"))) < 120: bad.append("trap")
    s = [TXT(x) for x in (q.get("summary") or [])]
    if len(s) < 5 or len("".join(s)) < 600 or any(len(x) < 15 for x in s): bad.append("summary")
    v = [TXT(x if isinstance(x, str) else json.dumps(x, ensure_ascii=False)) for x in (q.get("variants") or [])]
    if len(v) < 3 or len("".join(v)) < 250: bad.append("variants")
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
