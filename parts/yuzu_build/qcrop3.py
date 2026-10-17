# crop each question block (both versions) -> crops3/kyz{1,2}_<slug>[p2].jpg ; writes qlist.json with orig/slug/pages
import json,glob
IM={}
for v in ('1','2'):
    D={}
    for f in glob.glob(f'pc/k{v}_*.json'):D.update({int(k):x['imgs'] for k,x in json.load(open(f)).items()})
    IM[v]={p:[i for i in L if (i[2]-i[0])<590 and (i[3]-i[1])<600 and (i[2]-i[0])>20] for p,L in D.items()}
from PIL import Image
d=json.load(open('q_k1.json'));Q=d['Q'];CH=d['CH']
S=150/72;PH=842.677
seen={}
for q in Q:
    k=(q['ch'],q['n']);seen[k]=seen.get(k,0)+1
    q['orig']=f"{q['ch']}.{q['n']}"+('b' if seen[k]>1 else '')
    q['slug']=f"{q['ch']}-{q['n']}"+('b' if seen[k]>1 else '')
out=[]
for i,q in enumerate(Q):
    nx=Q[i+1] if i+1<len(Q) else None
    first_on_page=i==0 or Q[i-1]['page']!=q['page']
    y0=0 if first_on_page else max(Q[i-1]['top'], min(q['top']-45, Q[i-1]['end'][1]+2))
    segs=[]
    if nx and nx['page']==q['page']: segs.append((q['page'],y0,nx['top']-2))
    else:
        segs.append((q['page'],y0,PH-30))
        if nx and nx['page']==q['page']+1 and nx['top']>140: segs.append((q['page']+1,0,nx['top']-6))
        elif not nx: pass
    names={}
    for v in ('1','2'):
        ks=[]
        for j,(p,a,b) in enumerate(segs):
            for i in IM[v].get(p,[]):
                if a<=i[1]<b-10 and i[3]>b: b=min(PH,i[3]+4)
            im=Image.open(f'hr/k{v}-{p:03d}.jpg')
            c=im.crop((0,int(max(0,a)*S),im.width,int(min(PH,b)*S)))
            if c.width>1100: c=c.resize((1100,round(c.height*1100/c.width)),Image.LANCZOS)
            nm=f"kyz{v}_{q['slug']}"+('' if j==0 else 'p2')
            c.save(f'crops3/{nm}.jpg',quality=80,optimize=True);ks.append(nm)
        names[v]=ks
    out.append({'orig':q['orig'],'ch':q['ch'],'chtitle':CH[str(q['ch'])],'n':q['n'],'page':q['page'],'pages':[s[0] for s in segs],'stem':q['stem'],'opts':q['opts'],'k1':names['1'],'k2':names['2']})
json.dump(out,open('qlist_c3.json','w'),ensure_ascii=False,indent=0)
print(len(out))
