#!/usr/bin/env python3
"""Add / replace textbook chapters (code T) in a ward: <dir>/txt_<code>.js  (loaded by build_site.py after io.js)

python3 tools/txt_add.py <ward dir> <code> <meta.json> <imgroot> ch01.json [ch02.json …]

meta.json = {"title": "Chula Surgery 1 (ศัลยศาสตร์ 1)", "src": "…", "legend": "<span>…</span>",
             "chapters": {"01": {"topic": "<ward topic>", "tags": ["<ward tag>", …]}, …}}
chNN.json = one chapter from the summary agents: {chapter,title,titleTh,author,printed,pages:[{title,topics,html,refs}],points,imgs:[{key,src}]}
imgroot   = folder the chapter's imgs[].src paths are relative to (repo กลาง textbook folder — read only)

Each chapter becomes: one W.TXT entry {code,ch,title,topic,tags,type:"Textbook",url,note,points} (resource-style, used by
explanations / Advisor / AI question sources) + its pages inside the Round I/O doc kind "T" (page id <code>-<ch>-<n>,
title "บท <n> · …"). Re-running a chapter replaces it (page rev +1 when its html changed). Images → <ward dir>/../img or img/ as JPEG."""
import json, os, re, sys, datetime
from PIL import Image
wdir, code, metaf, imgroot = sys.argv[1:5]; chs = sys.argv[5:]
meta = json.load(open(metaf, encoding='utf-8'))
fn = os.path.join(wdir, f'txt_{code}.js')
imgdir = 'img'   # MDCU wards share the repo-root img/ (SI: si/img) — build reads J('img')
if wdir.startswith('si/') or wdir.startswith('si' + os.sep): imgdir = 'si/img'
today = datetime.date.today().isoformat()
HEAD = ('/* Textbook (code T) — {t}\n   built by tools/txt_add.py from chapter summaries (source: repo กลาง playerplayrh/surgery-year-4, read-only)\n'
        '   B.txt = W.TXT entries (one per chapter, same shape as W.RES) · B.doc = Round I/O doc kind "T" (pages per chapter) */\n'
        '(function(B){B.txt.forEach(x=>W.TXT.push(x));W.IO.docs.push(B.doc);})(\n')
if os.path.exists(fn):
    s = open(fn, encoding='utf-8').read()
    B = json.loads(s[s.index('(\n', s.index('W.IO.docs.push')) + 2:s.rindex(');')])
else:
    B = {'txt': [], 'doc': {'code': code, 'kind': 'T', 'title': meta['title'], 'src': '', 'upd': today, 'legend': meta.get('legend', ''), 'pages': []}}
doc = B['doc']; doc['title'] = meta['title']; doc['legend'] = meta.get('legend', doc.get('legend', ''))
old = {p['id']: p for p in doc['pages']}
for f in chs:
    c = json.load(open(f, encoding='utf-8')); ch = c['chapter']; n = int(ch); m = meta['chapters'][ch]
    for im in c.get('imgs', []):
        src = os.path.join(imgroot, im['src']); dst = os.path.join(imgdir, im['key'] + '.jpg')
        I = Image.open(src).convert('RGB')
        if I.width > 1100: I = I.resize((1100, round(I.height * 1100 / I.width)), Image.LANCZOS)
        I.save(dst, quality=82, optimize=True, progressive=True)
    for k in re.findall(r'\{\{IMG:([\w-]+)\}\}', ''.join(p['html'] for p in c['pages'])):
        assert os.path.exists(os.path.join(imgdir, k + '.jpg')), 'missing image ' + k
    pages = []
    for i, p in enumerate(c['pages'], 1):
        pid = f'{code}-{ch}-{i}'; o = old.get(pid)
        rev = (o['rev'] + (o['html'] != p['html'])) if o else 1
        pages.append({'id': pid, 'title': f'บท {n} · {p["title"]}', 'topics': p['topics'], 'rev': rev,
                      'upd': today if not o or o['html'] != p['html'] else o['upd'], 'html': p['html'], 'refs': p.get('refs', [])})
    doc['pages'] = [p for p in doc['pages'] if not p['id'].startswith(f'{code}-{ch}-')] + pages
    B['txt'] = [x for x in B['txt'] if x.get('ch') != ch] + [{
        'code': code, 'ch': ch, 'title': f'{meta["short"]} · บท {n} {c["title"]}', 'topic': m['topic'], 'tags': m['tags'],
        'type': 'Textbook', 'url': '', 'note': f'{c["titleTh"]} · {c["author"]} · หน้า {c["printed"]}', 'points': c['points']}]
key = lambda x: tuple(int(v) for v in re.findall(r'\d+', x))
doc['pages'].sort(key=lambda p: key(p['id'])); B['txt'].sort(key=lambda x: int(x['ch']))
done = sorted({int(x['ch']) for x in B['txt']})
doc['src'] = meta['src'] + f' · ใส่แล้ว {len(done)} บท (บท {", ".join(map(str, done))})'
doc['upd'] = max(p['upd'] for p in doc['pages'])
open(fn, 'w', encoding='utf-8').write(HEAD.replace('{t}', meta['title']) + json.dumps(B, ensure_ascii=False, indent=0) + '\n);\n')
print('wrote', fn, len(B['txt']), 'chapters,', len(doc['pages']), 'pages')
