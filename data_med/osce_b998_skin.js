/* เฉลย Skin lesion เวอร์ชันหลักของผู้ใช้ (14 พ.ย. 2026) — เติมในสถานี skin ที่มีในคลังแล้ว (ไม่เพิ่มข้อ)
   ตามไฟล์ Skin_OSCE_71-77: 74B (= 74X ข้อ 2), 75A ข้อ 6, 75B, 75D, 76A, 76C, 77A, 77B, 77C + ปี 78 (78B ข้อ 5, 78C ข้อ 9) และ 79 (79A ข้อ 4) โรคเดียวกัน
   คำบรรยายผู้ใช้ = เวอร์ชันหลัก (กล่องเขียวบนสุดของคำตอบ) · ข้อความเดิมในคำตอบ = เวอร์ชันรอง · คะแนนยังตรวจตาม keyword เดิม (ครอบคลุมคำของเวอร์ชันหลักแล้ว)
   Measles: ผู้ใช้รับเพิ่มเฉพาะ vitamin A (WHO) ในการรักษา */
(function(){
const U={
 pv:"Multiple discrete hypopigmented macules and patches over the arm · Tx: topical ketoconazole / selenium sulfide",
 pso:"Multiple well-demarcated erythematous plaques covered with silvery scales · Tx: topical corticosteroid AND topical vitamin D analogue (calcipotriene)",
 nail:"Pitting nail with oil drop sign and onycholysis",
 pr:"Multiple discrete erythematous annular or oval plaques with trailing scale distributed along the skin fold over the back · Tx: oral antihistamine",
 hz:"Groups of multistage vesicular lesions on erythematous base appearing at right unilateral dermatome · Tx: acyclovir 800 mg 1 tab po 5 times daily for 7 days · {ipsilateral facial paralysis, otalgia, painful vesicles on the auricle} (Ramsay Hunt)",
 ms:"Multiple discrete erythematous maculopapules at the face · Tx: no specific treatment + vitamin A · complication: otitis media",
 kop:"Multiple small white dots on erythematous oral mucosa",
 ks:"(ไฟล์) red-purple nonblanching nodular lesions · (Claude ร่าง ท่องง่าย — รอง) multiple violaceous non-blanching macules, plaques and nodules · HHV-8, HIV · skin biopsy + anti-HIV · ART ± chemotherapy"};
const VA=" · <b>Vitamin A</b> (WHO): ให้ทุกรายที่เป็น measles — วันละครั้ง 2 วัน (≥ 12 เดือน 200,000 IU; 6–11 เดือน 100,000 IU; &lt; 6 เดือน 50,000 IU) ลดภาวะแทรกซ้อนและอัตราตาย";
const FIX=[["MDCU74","RoX","2",[[0,"ms"],[1,"kop"],[3,"va"]]],["MDCU75","RoA","6",[[0,"pv"],[3,"pv"]]],["MDCU75","RoB","1",[[0,"pso"],[0,"nail"],[2,"pso"]]],["MDCU75","RoD","3",[[0,"pr"]]],
 ["MDCU76","RoA","3",[[0,"pr"]]],["MDCU76","RoC","14",[[0,"pso"],[1,"nail"],[3,"pso"]]],["MDCU77","RoA","5",[[0,"hz"]]],["MDCU77","RoB","2",[[0,"ks"]]],
 ["MDCU77","RoC","5",[[0,"ms"],[1,"kop"],[2,"va"]]],["MDCU78","RoB","5",[[0,"hz"]]],["MDCU78","RoC","9",[[0,"ms"],[1,"kop"],[2,"va"]]],["MDCU79","RoA","4",[[0,"hz"]]]];
FIX.forEach(([set,ro,orig,L])=>{const q=QB.find(x=>x.set===set&&x.ro===ro&&String(x.orig)===orig&&x.topic==="skin");if(!q||q._skin)return;q._skin=1;
  const subs=q.parts&&q.parts[0]?q.parts[0].subs:q.subs;
  L.forEach(([i,k])=>{const s=subs[i];if(!s)return;
    if(k==="va"){s.exp=(s.exp||"")+VA;return;}
    s.ans=`<div class="iook"><b>✅ เวอร์ชันหลัก (ผู้ใช้)</b>: ${U[k]}</div>`+(s.ans||"");});});
})();
