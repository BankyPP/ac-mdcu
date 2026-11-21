import sys,os
d=sys.argv[1]
fonts=''.join(f'<link rel="stylesheet" href="fs/fontsource-{f}/package/{w}.css">' for f in ['kanit','sarabun'] for w in ['400','500','600','700'])+'<link rel="stylesheet" href="fs/fontsource-sarabun/package/400-italic.css">'
body=''.join(open(os.path.join(d,f'p{i}.html'),encoding='utf8').read() for i in range(1,5))
html=f'<!DOCTYPE html><html lang="th"><head><meta charset="utf-8"><title>คู่มือการใช้งานเว็บฝึกทำข้อสอบเก่า</title>{fonts}<link rel="stylesheet" href="style.css"></head><body>{body}</body></html>'
open(os.path.join(d,'manual.html'),'w',encoding='utf8').write(html)
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
  b=p.chromium.launch();pg=b.new_page()
  pg.goto('file://'+os.path.join(d,'manual.html'));pg.wait_for_timeout(800)
  pg.evaluate('document.fonts.ready')
  pg.pdf(path=os.path.join(d,sys.argv[2]),format='A4',print_background=True,prefer_css_page_size=True)
  b.close()
