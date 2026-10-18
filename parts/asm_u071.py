# python3 parts/asm_u071.py → assemble data/unit_L07.1.js from parts/u071_part1–4.js
import re
s72=open('data/unit_L07.2.js',encoding='utf-8').read()
fn=s72[s72.index('(function(){'):s72.index('W.UNIT.push')]
head='''/* Unit round — L07.1 Approach to abdominal pain · Supparerk Prichayudh, M.D. (ศ.นพ.ศุภฤกษ์ ปรีชายุทธ)
   ต้นฉบับ: L07.1_Extra_Approach_abdominal_pain.pdf (สไลด์ 51 หน้า + ลายมือเล็กน้อย; อ้าง "หน้า N")
   200 ข้อ case-based · รูปจากสไลด์ img/l071_*.jpg · เฉลยบอกที่มา (หน้า) ทุกข้อ · ข้อที่เกินสไลด์มี outside:"นอกสไลด์: …"
   ไม่มีสัญลักษณ์ความสำคัญของคณะ · ดาว/กรอบแดงในหน้า 14 และ 41 เป็นของนักศึกษา */
'''
body=[]
for k in range(1,5):
    t=open(f'parts/u071_part{k}.js',encoding='utf-8').read()
    t=re.sub(r'^\s*/\*.*?\*/\s*','',t,flags=re.S).strip()
    body.append(t.rstrip().rstrip(','))
out=head+fn+'W.UNIT.push({id:"L07.1",title:"L07.1 Approach to abdominal pain",short:"L07.1",src:"L07.1_Extra_Approach_abdominal_pain.pdf",topic:"Small bowel & Obstruction",tags:["Acute abdomen"],QB:[\n'+',\n'.join(body)+'\n]});\n})();\n'
open('data/unit_L07.1.js','w',encoding='utf-8').write(out)
