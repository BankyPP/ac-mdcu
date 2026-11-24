#!/usr/bin/env python3
"""เช็กว่าเฉลย Unit round ครบทุกพาร์ท (ผู้ใช้สั่ง 23 พ.ย. 2026 — ต้นแบบ = Gen Sx L03)

python3 tools/unit_full_check.py data_subspe/unit_L22.js [ไฟล์อื่น ...]
python3 tools/unit_full_check.py --all          # ทุก data*/unit_*.js (รายงานอย่างเดียว)

ต้องได้ "ขาด 0" ทุกไฟล์ที่สร้าง/แก้ในรอบนั้นก่อน push
ทุกข้อต้องมี:
  notes    สไลด์/ลายมือเขียนไว้ว่า (ยกคำจากไฟล์)          ≥ 30 ตัวอักษร
  kimg     รูปหน้าที่อ้าง                                   ≥ 1
  ผู้ใช้สั่ง 24 พ.ย. 2026 15:3x ("มีเกณฑ์มันไม่ใช่เรื่อง … ขอให้ทำแบบ Gen Sx") → ไม่มีขั้นต่ำความยาวแล้ว
  เช็คโครงสร้างเท่านั้น แบบเดียวกับ tools/explain_quality.js GATE (commit 5a2b7ea):
  ทุกช่องไม่ว่าง · ทุกช้อยผิดมี "จะถูก…/จะเป็นคำตอบ…/ไม่มีสถานการณ์…" · ช้อย/bullet ไม่ซ้ำกัน
  ตัวเลขข้างล่าง (MIN เดิม) ใช้แค่ --thin = รายงานข้อเก่าที่บางเพื่อหางานที่เหลือ ไม่ใช่เกณฑ์ push
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


MINL = dict(interp=100, why=350, wrong=100, trap=120, sumN=5, sum=600, bullet=15, varN=3, variants=250)
GATE = dict(interp=1, why=1, wrong=1, trap=1, sumN=1, sum=1, bullet=1, varN=1, variants=1)
THIN = "--thin" in sys.argv


def problems(q):
    M = MINL if THIN else GATE
    bad = []
    if len(TXT(q.get("notes"))) < (30 if THIN else 1): bad.append("notes")
    if not q.get("kimg"): bad.append("kimg")
    if len(TXT(q.get("interp"))) < M["interp"]: bad.append("interp")
    if len(TXT(q.get("why"))) < M["why"]: bad.append("why")
    w = q.get("wrong")
    items = list(w.values()) if isinstance(w, dict) else list(w or [])
    if len(items) < len(q.get("opts") or []) - 1 or any(len(TXT(x)) < M["wrong"] or not re.search("จะถูก|จะเป็นคำตอบ|ไม่มีสถานการณ์", str(x)) or JUNK.search(str(x)) for x in items) or len(set(map(TXT, items))) < len(items):
        bad.append("wrong")
    if len(TXT(q.get("trap"))) < M["trap"]: bad.append("trap")
    s = [TXT(x) for x in (q.get("summary") or [])]
    if len(s) < M["sumN"] or len("".join(s)) < M["sum"] or any(len(x) < M["bullet"] for x in s) or len(set(s)) < len(s): bad.append("summary")
    v = [TXT(x if isinstance(x, str) else json.dumps(x, ensure_ascii=False)) for x in (q.get("variants") or [])]
    if len(v) < M["varN"] or len("".join(v)) < M["variants"] or len(set(v)) < len(v): bad.append("variants")
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
    args = [a for a in sys.argv[1:] if a != "--thin"]
    files = sorted(glob.glob(os.path.join(ROOT, "data*/unit_*.js"))) if args == ["--all"] else args
    total = sum(check(f) for f in files)
    if args != ["--all"] and not THIN: sys.exit(1 if total else 0)
