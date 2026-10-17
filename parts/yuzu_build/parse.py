import json,glob,re,sys
from collections import Counter
PUA={'':'ฐ','':'ิ','':'ี','':'ึ','':'ื','':'่','':'้','':'๊','':'๋','':'์','':'่','':'้','':'๊','':'๋','':'์','':'ญ','':'ั','':'ํ','':'็','':'่','':'้','':'๊','':'๋','':'์','':'ุ','':'ู','':'ฺ'}
fix=lambda s:''.join(PUA.get(c,c) for c in s)
F=sys.argv[1];D={}
for f in glob.glob(f'pc/{F}_*.json'):D.update({int(k):v for k,v in json.load(open(f)).items()})
Q=[];ch=None;CH={};cur=None;LINES={}
for pi in sorted(D):
    lines={}
    for t,fn,x0,x1,top in D[pi]['chars']:
        lines.setdefault(round(top/4),[]).append((x0,x1,t,fn,top))
    out=[]
    for k in sorted(lines):
        L=sorted(lines[k]);txt='';px=None
        for x0,x1,t,fn,top in L:
            if px is not None and x0-px>1.2 and not txt.endswith(' '):txt+=' '
            txt+=t;px=x1
        out.append((fix(txt).strip(),any('Bold' in c[3] for c in L),next((c[0] for c in L if c[2].strip()),L[0][0]),min(c[4] for c in L),max(c[1] for c in L)))
    LINES[pi]=out
    for txt,bold,x0,top,xr in out:
        if not txt:continue
        m=re.match(r'Chapter\s+(\d+)\s*(.*)',txt)
        if bold and m: ch=int(m.group(1));CH[ch]=m.group(2).strip();cur=None;continue
        if re.fullmatch(r'\d{1,3}',txt) and top>780: continue
        m=re.match(r'(\d{1,2})\.\s*(.*)',txt)
        if m and ch and x0<100:
            cur={'ch':ch,'n':int(m.group(1)),'page':pi,'top':top,'stem':m.group(2),'opts':[],'end':(pi,top)};Q.append(cur);continue
        if cur is None:continue
        cur['end']=(pi,top+12)
        m=re.match(r'([A-E])\.\s*(.*)',txt)
        if m and x0<140: cur['opts'].append([m.group(1),m.group(2)])
        elif cur['opts']: cur['opts'][-1][1]+=' '+txt
        else: cur['stem']+=' '+txt
json.dump({'CH':CH,'Q':Q},open(f'q_{F}.json','w'),ensure_ascii=False,indent=0)
print(F,len(Q),'q',len(CH),'ch');print(sorted(Counter(q['ch'] for q in Q).items()))
print('non5',[(q['ch'],q['n'],len(q['opts'])) for q in Q if len(q['opts'])!=5])
seq=[(q['ch'],q['n']) for q in Q];print('seqgaps',[ (a,b) for a,b in zip(seq,seq[1:]) if not (b[0]==a[0] and b[1]==a[1]+1 or b[0]!=a[0] and b[1]==1)])
