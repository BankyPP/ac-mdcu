import json
from crop import *
MAP=json.load(open('map1.json'))
def add(T,s,r,o,names):
    k=f"{T}|{s}|{r}|{o}";MAP.setdefault(k,[]);[MAP[k].append(n) for n in names if n and n not in MAP[k]]
p=pdf('9e2d5db5');add('MCQ','MDCU76','RoB','11',[crop(p,4,630,2000,'mk76b_11_t')]);add('MCQ','MDCU76','RoB','21',[crop(p,6,606,2000,'mk76b_21_p6')])
# 76C OSCE-table rows 1–3 = misplaced keys of MCQ 76C 1–3
p=pdf('370d1cbc');A=anchors(p,list(range(22,34)),45,60,['1','2','3','4'],(22,170))
ys=[A[k] for k in ['1','2','3','4']]
for i,o in enumerate(['1','2','3']):
    (pg,y0),(pg2,y1)=ys[i],ys[i+1]
    add('MCQ','MDCU76','RoC',o,[crop(p,pg,y0-6,y1-4 if pg2==pg else 2000,f'mk76c_{o}_os')])
# 77A MEQ 1 (only 1.1 has a key) — Key 77A OSCE file p4
p=pdf('a2c8d0a9');add('MEQ','MDCU77','RoA','1',[crop(p,4,130,368,'ek77a_1')])
# 77B MEQ cases (Key 77B ALL p30–44), split at sub-question headings
p=pdf('97024bd8')
def span(a,b,pre):
    out=[];(p0,y0),(p1,y1)=a,b
    for pg in range(p0,p1+1):
        out.append(crop(p,pg,y0-6 if pg==p0 else 0,y1-4 if pg==p1 else 2000,f'{pre}_{pg}'))
    return out
c1=span((30,523),(38,165),'ek77b_1');c2=span((38,165),(44,220),'ek77b_2')
for s,r,o,n in [('MDCU77','RoB','1',c1),('MDCU77','RoB','2',c2),('MDCU78','RoA','2',c1),('MDCU79','RoB','2',c1)]:add('MEQ',s,r,o,n)
for s,r,o in [('MDCU78','RoC','2')]:add('MEQ',s,r,o,MAP['MEQ|MDCU77|RoA|1'])
# 75B MEQ: key gives only the diagnoses + notes (top of p1)
p=pdf('d0598cbd');n=crop(p,1,40,232,'ek75b_1');add('MEQ','MDCU75','RoB','1',[n]);add('MEQ','MDCU75','RoB','2',[n])
json.dump(MAP,open('map2.json','w'),ensure_ascii=False,indent=0);print(len(MAP),sum(len(v) for v in MAP.values()))
