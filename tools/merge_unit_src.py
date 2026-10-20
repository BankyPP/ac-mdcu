#!/usr/bin/env python3
"""Merge slide/handwriting quotes into a Unit round bank.
python3 tools/merge_unit_src.py data/unit_<L>.js <src.json>
src.json = {"<n>": {"notes": "<html>", "kimg": ["img key", ...]}}
- notes: written as the question's `notes` field (shown after answering as "สไลด์/ลายมือใน lecture เขียนไว้ว่า"); replaces an existing notes field
- kimg: appended to the question's kimg (no duplicates, never the question's own img)
Fields that build the uid (lecture id + n) are not touched."""
import json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path, srcp = sys.argv[1], sys.argv[2]
s = open(path, encoding='utf-8').read()
src = json.load(open(srcp, encoding='utf-8'))
starts = [m.start() for m in re.finditer(r'U\(\{n:\s*(\d+)\s*,', s)]
nums = [int(re.match(r'U\(\{n:\s*(\d+)', s[i:]).group(1)) for i in starts]
bounds = starts + [len(s)]
out, last, done, imgs = [], 0, 0, 0
missing = set(src) - {str(n) for n in nums}
for k, (a, b) in enumerate(zip(bounds, bounds[1:])):
    out.append(s[last:a]); seg = s[a:b]; last = b
    e = src.get(str(nums[k]))
    if e:
        own = re.search(r'\bimg:"([^"]+)"', seg)
        own = own.group(1) if own else None
        add = [x for x in (e.get('kimg') or []) if x != own and os.path.exists(os.path.join(ROOT, 'img', x + '.jpg'))]
        if add:
            m = re.search(r'\bkimg:\[([^\]]*)\]', seg)
            if m:
                have = re.findall(r'"([^"]+)"', m.group(1))
                new = have + [x for x in add if x not in have]
                if new != have:
                    seg = seg[:m.start()] + 'kimg:' + json.dumps(new, ensure_ascii=False) + seg[m.end():]; imgs += 1
            else:
                m = re.search(r'\btags:\[', seg)
                if m:
                    seg = seg[:m.start()] + 'kimg:' + json.dumps(add, ensure_ascii=False) + ', ' + seg[m.start():]; imgs += 1
        if e.get('notes'):
            seg = re.sub(r',\s*notes:"(?:[^"\\]|\\.)*"', '', seg, count=1)
            head = re.match(r'U\(\{n:\s*\d+\s*,', seg).group(0)
            seg = head + ' notes:' + json.dumps(e['notes'], ensure_ascii=False) + ',' + seg[len(head):]
            done += 1
    out.append(seg)
out.append(s[last:])
open(path, 'w', encoding='utf-8').write(''.join(out))
print(f'{os.path.basename(path)}: notes {done} · kimg updated {imgs} · keys not found {sorted(missing)}')
