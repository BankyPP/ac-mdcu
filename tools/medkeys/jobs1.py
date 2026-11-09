import json
from crop import *
Q=json.load(open('qs.json'));MAP={}
def add(T,set_,ro,orig,names):
    k=f"{T}|{set_}|{ro}|{orig}";MAP.setdefault(k,[]);[MAP[k].append(n) for n in names if n and n not in MAP[k]]
def run(T,tag,set_,ro,prefix,pages,xlo,xhi,end,labels=None,start=None,lab2orig=None,skip=()):
    p=pdf(tag);origs=[x['o'] for x in Q[T][set_+'|'+ro]] if labels is None else labels
    A=anchors(p,pages,xlo,xhi,origs,start);miss=[o for o in origs if o not in A]
    st=sorted(A.items(),key=lambda kv:(pages.index(kv[1][0]),kv[1][1]))
    R=regions(pages,st,end)
    for lab,segs in R.items():
        if lab in skip:continue
        names=[]
        for i,(pg,y0,y1) in enumerate(segs):
            nm=f"{prefix}{lab}" + (f"_{i+1}" if len(segs)>1 else "")
            names.append(crop(p,pg,y0,y1,nm))
        for o in (lab2orig or {}).get(lab,[lab]):add(T,set_,ro,o,names)
    print(T,set_,ro,'anchors',len(A),'miss',miss,'imgs',sum(len(v) for v in R.values()))
    return R
# 77A MCQ (table, 1 col of numbers x≈83–86)
run('MCQ','3ada0480','MDCU77','RoA','mk77a_',list(range(3,51)),70,100,(50,2000))
# 77B MCQ p1–30 (MEQ heading p30 y490)
run('MCQ','97024bd8','MDCU77','RoB','mk77b_',list(range(1,31)),80,100,(30,486))
# 76A MCQ p4–14 (OSCE table header p14 y429); 4a/4b share row 4
run('MCQ','370d1cbc','MDCU76','RoA','mk76a_',list(range(4,15)),45,60,(14,425),labels=[str(i) for i in range(1,29)],lab2orig={'4':['4a','4b']})
# 76B MCQ annotated pages only
run('MCQ','9e2d5db5','MDCU76','RoB','mk76b_',[2,3,5,7,8,9,11,12],65,95,(12,2000))
# 76C MCQ: 1–4 p2, 5–11 p4 (annotated), 16–20 p6–7 ; 12–15 on p5 handled by hand
run('MCQ','8f0dd522','MDCU76','RoC','mk76c_',[2,4],85,95,(4,2000),labels=[str(i) for i in range(1,12)])
run('MCQ','8f0dd522','MDCU76','RoC','mk76c_',[6,7],85,95,(7,300),labels=[str(i) for i in range(16,21)])
# 75B MCQ p1–3
run('MCQ','d0598cbd','MDCU75','RoB','mk75b_',[1,2,3],40,95,(3,2000))
# 74C (เดิม 75X) (file order, orig numbers)
run('MCQ','28e8df14','MDCU74','RoC','mk75x_',[1,2],70,90,(2,2000))
# 77A OSCE p1–3
run('OSCE','a2c8d0a9','MDCU77','RoA','ok77a_',[1,2,3],0,20,(3,2000))
# 77B OSCE p44–64
run('OSCE','97024bd8','MDCU77','RoB','ok77b_',list(range(44,65)),85,100,(64,2000),start=(44,250))
# 76A OSCE A rows 1–10 (11–12 = MEQ 76A, already cropped) p14–22 ; OSCE C rows 1–14 p22–33
run('OSCE','370d1cbc','MDCU76','RoA','ok76a_',list(range(14,23)),45,60,(22,145),labels=[str(i) for i in range(1,13)],start=(14,445),skip=('11','12'))
R=run('OSCE','370d1cbc','MDCU76','RoC','ok76c_',list(range(22,34)),45,60,(33,2000),labels=[str(i) for i in range(1,15)],start=(22,170),skip=('1','2','3'))
json.dump(MAP,open('map1.json','w'),ensure_ascii=False,indent=0)
