# คู่มือการใช้งานเว็บฝึกทำข้อสอบเก่า (PDF)
- ฉบับล่าสุด: 22 พ.ย. 2026 (19 หน้า) — แทนฉบับ 18 พ.ย. 2026 (14 หน้า ซึ่งไม่มี source เหลือ)
- เนื้อหา: p1 = ปก + บทที่ 1–2 · p2 = บทที่ 3 · p3 = บทที่ 4 (round แบบละเอียด + ที่มาโจทย์/สัดส่วน + ฟีเจอร์เล็ก ๆ) · p4 = บทที่ 5–6 · style.css
- ฟอนต์: Kanit (หัวข้อ) + Sarabun (เนื้อหา) จาก npm `@fontsource/kanit` `@fontsource/sarabun`:
  `cd <dir> && npm pack @fontsource/kanit @fontsource/sarabun && mkdir fs && for t in *.tgz; do tar xzf $t -C fs --one-top-level=${t%%-[0-9]*}; done`
- build: copy ไฟล์ในโฟลเดอร์นี้ไปที่ <dir> แล้ว `python3 build_manual.py <dir> out.pdf` (playwright chromium, หัว/ท้ายกระดาษใช้ @page margin boxes + named pages ต่อบท)
- เมื่อฟีเจอร์/สัดส่วนโจทย์เปลี่ยน ให้แก้คู่มือนี้ด้วย แล้วเช็กเลขหน้าในสารบัญ
