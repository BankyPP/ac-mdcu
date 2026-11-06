import sys,subprocess,re,json
from xml.etree import ElementTree as ET
def lines(pdf):
    x=subprocess.run(['pdftotext','-bbox-layout',pdf,'-'],capture_output=True,text=True).stdout
    x=re.sub(r'<!DOCTYPE[^>]*>','',x).replace('xmlns="http://www.w3.org/1999/xhtml"','')
    r=ET.fromstring(x);out=[]
    for pi,pg in enumerate(r.iter('page'),1):
        H=float(pg.get('height'));W=float(pg.get('width'))
        for ln in pg.iter('line'):
            ws=[w.text or '' for w in ln.iter('word')]
            out.append(dict(p=pi,y0=float(ln.get('yMin')),y1=float(ln.get('yMax')),x0=float(ln.get('xMin')),x1=float(ln.get('xMax')),t=' '.join(ws),W=W,H=H))
    return out
if __name__=='__main__':
    L=lines(sys.argv[1]);pat=re.compile(sys.argv[2]) if len(sys.argv)>2 else None
    pages=set(map(int,sys.argv[3].split(','))) if len(sys.argv)>3 else None
    for l in L:
        if pages and l['p'] not in pages: continue
        if pat and not pat.search(l['t']): continue
        print(l['p'],int(l['y0']),int(l['x0']),l['t'][:70])
