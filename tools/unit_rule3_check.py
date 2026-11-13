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
    try:
        return s[:i], json.loads(j)
    except ValueError:   # ไฟล์แบบ JS literal (U({n:…}) เช่น L12) → ประเมินด้วย node
        import subprocess, os
        out = subprocess.run(['node', os.path.join(os.path.dirname(__file__), 'unit_dump.js'), f],
                             capture_output=True, text=True, check=True).stdout
        return s[:i], json.loads(out)

SRC = re.compile(r"\b(lectures?|lecturers?|slides?|handouts?|notes?|handwritten|handwriting|taught|in class|"
                 r"teaching (file|material)s?|course material|reference notes?|corrected notes?|the (file|resource|document|reference)\b|"
                 r"according to the|as (stated|written|listed|described|shown) in|SIMBR|syllabus|tutor|"
                 r"bedside (pre-?op )?(notes?|orders?)|pre-?op (order )?notes?|the pre-?op order|older (deck|handout|criteria)|jod|deck|"
                 r"(the|this) ([\w-]+ ){0,3}(table|list|page|mnemonic)(?! shown)|listed (in|under|for|among)|(is|are) listed|lists? (for|under))\b", re.I)
# คำที่เป็นคนไข้/เคส ในประโยคแรก
PT = re.compile(r"\b\d+[- ](year|month|week|day)s?[- ]old\b|\b(patient|woman|man|girl|boy|infant|neonate|newborn|"
                r"mother|lady|gentleman|primigravida|multipara|gravida|elderly|teenager|adolescent|child|toddler|baby|"
                r"postmenopausal|premenopausal|nulliparous|pregnant|smoker|carrier|women|men|adults|children)s?\b", re.I)
FAKE = re.compile(r"\b(students?|medical student|resident|intern|extern|tutor|lecturer|teacher|examiner|OSCE|audit|"
                  r"research(er)?|committee|quiz|journal club|attending|consultant|fellow|registrar|surgeon|team|"
                  r"nurse|pharmacist|panel|conference|guideline|policy|protocol|hospital|department|textbook)\b", re.I)
OK_SRC = re.compile(r"(?<!pre-)\b(operative|nursing|nurse'?s?|progress|discharge|referral|clinic|admission|pathology|op) notes?\b|"
                    r"\b(glass )?slides? (of|from) the (biopsy|specimen)|\bslide (review|of the)\b|writes? in the notes?\b|\b(is|are) listed for (?!(this|these|that|the management|management)\b)|listed for (an? |the )?(elective|emergency|urgent|surgery|operation|\w+ectomy|\w+otomy|repair)", re.I)
# "according to the …" ผ่านถ้าตามด้วยชื่อ guideline หรือไม่ได้ตามด้วยคำบ่งแหล่ง/ตาราง
SRCNEXT = re.compile(r"lecture|note|handout|slide|table|list|definition|criteria|handwrit|text|file|older|jod|deck|bedside|pre-?op order|resource|framework", re.I)

GL = re.compile(r"\s*(current |latest |full |revised |updated |restrictive |20\d\d )*(Tokyo|Revised Atlanta|Atlanta|ASGE|ASCO|NCCN|ESMO|AJCC|WHO|ACOG|RTCOG|IAP|APA|SSO|ASTRO|ESC|ACC|AHA|ASA|ERAS|CHEST|AABB|NICE|IDSA|CDC|Japanese|joint|European|American|international|\d{4})", re.I)

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
        if q.get('img') and re.search(r'table|list|figure', m.group(0), re.I):   # มีรูปในโจทย์ → "the table shown" อ้างได้
            continue
        if m.group(0).lower() == 'according to the' and (GL.match(txt[m.end():m.end()+40]) or not SRCNEXT.search(txt[m.end():m.end()+45])):
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
