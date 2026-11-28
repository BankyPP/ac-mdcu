"""helper สร้างข้อ Unit L23 แบบ 78/Gen Sx (ต้นแบบ L28/L05)
from l23_common import mk, save · mk(Q, n, pages, stem=…, opts=[…], interp=…, why=…, wrong={…}, trap=…, summary=[…], opinion=…, mnemonic=…, guide=…, variants=[…])
pages = เลขหน้าสไลด์ (int) หรือ 'sN' = หน้าชีท · คง ans/img/tags จาก parts/L23_orig.json · notes/kimg/src สร้างจาก parts/notes_L23_pages.py"""
import json, os, sys, re
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + '/'
sys.path.insert(0, R + 'parts')
from notes_L23_pages import PG
O = {q['n']: q for q in json.load(open(R + 'parts/L23_orig.json', encoding='utf-8'))['QB']}
FAC = 'สัญลักษณ์คณะ: ไม่มีในหน้าที่อ้าง'

def key(p): return f'l23s_p{p[1:]}' if isinstance(p, str) else f'l23_p{p}'

def notes(pages):
    out = []
    for p in pages:
        t, im, hw = PG[p]
        if isinstance(p, str):
            N = p[1:]; out.append(f'ชีทหน้า {N} — ตัวพิมพ์: {t}')
            if im: out.append(f'รูปในชีทหน้า {N}: {im}')
            out.append(f'ลายมือ/ไฮไลต์ชีทหน้า {N}: {hw}')
        else:
            out.append(f'สไลด์หน้า {p} — ตัวพิมพ์: {t}')
            if im: out.append(f'รูปในสไลด์หน้า {p}: {im}')
            out.append(f'ลายมือ/ไฮไลต์หน้า {p}: {hw}')
    out.append(FAC if not any('สัญลักษณ์คณะ' in (PG[p][2] or '') for p in pages) else 'สัญลักษณ์คณะ: ตามที่ระบุในลายมือ/ไฮไลต์ของหน้าข้างบน')
    return '<br>'.join(out)

def src(pages):
    sl = [str(p) for p in pages if not isinstance(p, str)]
    sh = [p[1:] for p in pages if isinstance(p, str)]
    where = ' + '.join(x for x in [('สไลด์หน้า ' + ', '.join(sl)) if sl else '', ('ชีท อ.อภิชัย หน้า ' + ', '.join(sh)) if sh else ''] if x)
    hw = any(not isinstance(p, str) and not PG[p][2].startswith('ไม่มีลายมือ') for p in pages)
    kinds = 'ตัวพิมพ์' + (' + ลายมือ + ไฮไลต์' if hw else '') + (' + รูป' if any(PG[p][1] for p in pages) else '')
    return f'L23 Burns · {where} · {"มีสัญลักษณ์คณะ (ดู notes)" if any("สัญลักษณ์คณะ" in (PG[p][2] or "") for p in pages) else "ไม่มีสัญลักษณ์คณะ"} · {kinds}'

def mk(Q, n, pages, **f):
    o = O[n]
    assert f.get('ans', o['ans']) == o['ans'], (n, 'ans ต้องคงตำแหน่งเดิม')
    assert len(f['opts']) == 5
    q = {'stem': f['stem'], 'opts': f['opts'], 'ans': o['ans'], 'notes': notes(pages),
         'kimg': [key(p) for p in pages], 'src': src(pages), 'tags': o['tags']}
    if o.get('img'): q['img'] = o['img']
    for k in ('interp', 'why', 'wrong', 'trap', 'summary', 'opinion', 'mnemonic', 'guide', 'variants'):
        q[k] = f[k]
    a = o['ans']; L = [len(x) for x in q['opts']]
    warn = '  ⚠ ช้อยถูกยาวสุด/เท่า' if L[a] >= max(L[i] for i in range(5) if i != a) else ''
    print(f"{n}: {len(q['stem'].split())} คำ · เฉลย {'ABCDE'[a]} · ช้อย {L}{warn}")
    Q[str(n)] = q

def save(Q, path):
    json.dump(Q, open(R + path, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('saved', path, len(Q))
