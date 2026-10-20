# python3 parts/asm_u9903.py → assemble data/unit_L99.03.js from parts/u9903_part1–4.js
import re
s72=open('data/unit_L07.2.js',encoding='utf-8').read()
fn=s72[s72.index('(function(){'):s72.index('W.UNIT.push')]
head='''/* Unit round — L99.03 Small intestine & small bowel obstruction (Lecture for 4th year medical student; ผู้สอนไม่ระบุชื่อในไฟล์)
   ต้นฉบับ: _L99_03_Small_Intestine_and_Small_Bowel_Obstruction.pdf (93 หน้า: สไลด์ p1–64 + ลายมือ, เคส 4 เคส p65–93; อ้าง "หน้า N" = หน้า PDF)
   200 ข้อ case-based · รูป img/l9903_*.jpg · เฉลยบอกที่มาทุกข้อ · ข้อที่เกินไฟล์มี outside:"นอกสไลด์: …"
   🔴 ดาวแดงพิมพ์บนสไลด์: หน้า 24, 27, 30, 35, 36 · ✱ ดาวลายมือ: หน้า 46, 61 · ไม่มี 🟡/🟢/❌ */
'''
body=[]
for k in range(1,5):
    t=open(f'parts/u9903_part{k}.js',encoding='utf-8').read()
    t=re.sub(r'^\s*/\*.*?\*/\s*','',t,flags=re.S).strip()
    body.append(t.rstrip().rstrip(','))
out=head+fn+'W.UNIT.push({id:"L99.03",title:"L99.03 Small intestine & small bowel obstruction",short:"L99.03",src:"_L99_03_Small_Intestine_and_Small_Bowel_Obstruction.pdf",topic:"Small bowel & Obstruction",tags:["Small bowel"],QB:[\n'+',\n'.join(body)+'\n]});\n})();\n'
open('data/unit_L99.03.js','w',encoding='utf-8').write(out)
print('ok',len(out))
