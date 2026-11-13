#!/usr/bin/env python3
"""ตรวจ Unit round ตามกติกาข้อ 3 (13 พ.ย. 2026) — kit/กติกาสร้างโจทย์จาก-lecture-resource.md
python3 tools/unit_rule3_check.py data/unit_R23.js [more.js] [-v]
จับ: (ก) ไม่เปิดด้วยเคสคนไข้ (ถามตรง / ฉากหลอก) · (ข) คำอ้างแหล่งในโจทย์/ช้อย · แสดงสถิติความยาว
ผลเป็นตัวกรองหยาบ — ต้องอ่านทวนข้อที่ถูกจับเสมอ"""
import json, re, sys, statistics

def load(f):
    s = open(f, encoding='utf8').read()
    i = s.index('W.UNIT.push(')
    j = s[i+len('W.UNIT.push('):].rstrip().rstrip(';').rstrip()[:-1]
    return s[:i], json.loads(j)

SRC = re.compile(r"\b(lectures?|lecturers?|slides?|handouts?|notes?|handwritten|handwriting|taught|in class|"
                 r"teaching (file|material)s?|course material|reference notes?|corrected notes?|the (file|resource|document|reference)\b|"
                 r"according to the|as (stated|written|listed|described|shown) in|SIMBR|syllabus|tutor)\b", re.I)
# คำที่เป็นคนไข้/เคส ในประโยคแรก
PT = re.compile(r"\b\d+[- ](year|month|week|day)s?[- ]old\b|\b(patient|woman|man|girl|boy|infant|neonate|newborn|"
                r"mother|lady|gentleman|primigravida|multipara|gravida|elderly|teenager|adolescent|child|toddler|baby|"
                r"postmenopausal|premenopausal|nulliparous|pregnant|smoker|carrier|women|men|adults|children)s?\b", re.I)
FAKE = re.compile(r"\b(students?|medical student|resident|intern|extern|tutor|lecturer|teacher|examiner|OSCE|audit|"
                  r"research(er)?|committee|quiz|journal club|attending|consultant|fellow|registrar|surgeon|team|"
                  r"nurse|pharmacist|panel|conference|guideline|policy|protocol|hospital|department|textbook)\b", re.I)
OK_SRC = re.compile(r"\b(operative|nursing|nurse'?s?|progress|discharge|referral|clinic|admission|pathology|op) notes?\b|"
                    r"\b(glass )?slides? (of|from) the (biopsy|specimen)|\bslide (review|of the)\b", re.I)

GL = re.compile(r"\s*(current |latest |full |revised |updated |20\d\d )*(Tokyo|Revised Atlanta|Atlanta|ASGE|ASCO|NCCN|ESMO|AJCC|WHO|ACOG|RTCOG|IAP|APA|SSO|ASTRO|Japanese|joint|European|American|international|\d{4})", re.I)

def first_sentence(s):
    m = re.search(r'[.?!](\s|$)', s)
    return s[:m.end()] if m else s

def check(q):
    flags = []
    st = q['stem']
    fs = first_sentence(st)
    if not PT.search(fs) or fs.rstrip().endswith('?'):
        flags.append('NOCASE')
    else:
        pre = fs[:PT.search(fs).start()]
        if FAKE.search(pre):
            flags.append('SCENE?')
    txt = st + ' || ' + ' | '.join(q['opts'])
    for m in SRC.finditer(txt):
        ctx = txt[max(0, m.start()-25):m.end()+25]
        if OK_SRC.search(ctx):
            continue
        if m.group(0).lower() == 'according to the' and GL.match(txt[m.end():m.end()+40]):
            continue
        flags.append('SRC:' + m.group(0))
    return flags

if __name__ == '__main__':
    files = [a for a in sys.argv[1:] if not a.startswith('-')]
    verbose = '-v' in sys.argv
    total = 0
    for f in files:
        _, d = load(f)
        bad = []
        for q in d['QB']:
            fl = check(q)
            if fl:
                bad.append((q['n'], fl, q['stem']))
        L = [len(q['stem'].split()) for q in d['QB']]
        print(f"== {d['id']} · {len(d['QB'])} ข้อ · ถูกจับ {len(bad)} · ความยาว stem (คำ) min {min(L)} median {statistics.median(L)} max {max(L)} · ≤20 คำ {sum(l<=20 for l in L)} · ≥45 คำ {sum(l>=45 for l in L)}")
        for n, fl, st in bad:
            print(f"  {n:>3} {','.join(fl)}" + (f"\n      {st}" if verbose else ''))
        total += len(bad)
    print('รวมถูกจับ', total)
