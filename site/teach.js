/* ================= Teaching round tools (all wards) =================
   History taking · Physical examination · CTA · Case library  (+ History taker / Physical examinator on the ward home)
   Templates are shared by every ward: bank "tch|all|hx" · "tch|all|pe" · "tch|all|cta"  {rows:[{id,h,c,k,w,tag,off:{ward:bool}}], procs:[…] (CTA)}
   Real-patient cases: bank "case|<ward>|<id>" {title,hx:{rowId:{h,v}},pe:{…},out:{sum,yellow},opt,del}
   Practice results: bank "tlog|<ward>|<id>" {tool,mode,rows:[{h,pct,…}],pct} */
const TK={hx:{n:"History taking",kc:"Key concept",ico:"🗣️"},pe:{n:"Physical examination",kc:"Key concept",ico:"🩺"},cta:{n:"CTA",kc:"Keyword",ico:"🧤"}};
const tId=()=>now().toString(36)+Math.random().toString(36).slice(2,6);
const tAI=()=>HAS_CLAUDE()||!!aiCfg().key;
function tSan(h){return String(h||"").replace(/<\s*(script|style|iframe|object|embed|link|meta)[\s\S]*?(<\/\s*\1\s*>|$)/gi,"").replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,"").replace(/javascript:/gi,"");}
function tchDef(tool){if(tool==="cta")return [];const D=(typeof TCH_DEF!=="undefined"&&TCH_DEF[tool])||[];return D.map(r=>({id:r.id,h:r.h,c:r.c,k:"",tag:r.tag||""}));}
function tchGet(tool){const o=bank["tch|all|"+tool];if(o&&(Array.isArray(o.rows)||Array.isArray(o.procs)))return {rows:(o.rows||[]).map(r=>Object.assign({},r)),procs:JSON.parse(JSON.stringify(o.procs||[]))};return {rows:tchDef(tool),procs:[]};}
function tchPut(tool,o){bankPut("tch|all|"+tool,{rows:o.rows,procs:o.procs||[]});}
/* a row is on in this ward unless switched off here; pediatric rows start off outside Pediatrics, OB rows outside OB-GYN */
function tOn(r,wid){wid=wid||ward;if(r.off&&Object.prototype.hasOwnProperty.call(r.off,wid))return !r.off[wid];if(r.tag==="ped")return /ped/i.test(wid);if(r.tag==="ob")return /ob/i.test(wid);return true;}
let TV={tab:{},ctaP:"",prac:null};
const tT=()=>$("tPrac")||$("tBody");

/* ---------- Teaching round menu ---------- */
const TEACH=[
  {k:"hx",n:"History taking",d:"ตารางซักประวัติครบทุกหัวข้อ (แก้ได้ทุกช่อง เปิด/ปิดหัวข้อรายวอร์ด) · ใส่ key concept · ฝึกพิมพ์ซักประวัติแล้วให้ AI ตรวจเป็น %"},
  {k:"pe",n:"Physical examination",d:"ทุกการตรวจที่ปี 4 ต้องรู้ พร้อมขั้นตอน (แก้ได้ทุกช่อง) · ใส่ key concept · ฝึกแล้วให้ AI ตรวจเป็น %"},
  {k:"cta",n:"CTA",d:"ฝึกหัตถการ: เนื้อหาตามไฟล์ · keyword ที่ต้องมีเป๊ะ ๆ · wording ของตัวเอง · ฝึกพิมพ์แล้วตรวจ keyword"},
  {k:"case",n:"Case",d:"คลังเคสจริงจาก History taker / Physical examinator · สรุปเคสไว้พรีเซนต์ · ร่างใบเหลือง"},
  {k:"yellow",n:"ใบเหลือง",d:"ร่าง case report with discussion แบบ SOAP จากเคสในคลัง (เลือกเคสในหน้า Case)"},
  {k:"flash",n:"Flashcard",d:"ฝึก keyword และความรู้จำเพาะสั้น ๆ แบบถามตอบเร็ว",soon:1},
  {k:"oral",n:"Oral",d:"ฝึกสอบปากเปล่าจาก flashcard",soon:1}];
function rTeach(){
  const nC=bankItems("case",ward).filter(x=>!x.del).length;
  let h=`<h1 class="h2">Teaching round</h1><p class="sub">${esc(W_().cfg.name)} · เลือกเครื่องมือ · ตาราง History / PE / CTA ใช้ร่วมกันทุกวอร์ด (เปิด/ปิดหัวข้อแยกรายวอร์ด)</p>`;
  h+=`<div class="rounds">${TEACH.map((t,i)=>`<button class="round" data-teach="${t.k}" aria-disabled="${!!t.soon}">${t.soon?'<span class="soon">เร็ว ๆ นี้</span>':t.k==="case"&&nC?`<span class="badge">${nC}</span>`:""}<span class="rn">${String(i+1).padStart(2,"0")}</span><b>${t.n}</b><span class="rd">${t.d}${t.k==="cta"?(()=>{const x=((W_().cfg.teach||{}).cta);return Array.isArray(x)&&x.length?" · "+x.map(esc).join(", "):"";})():""}</span></button>`).join("")}</div>`;
  h+=`<div class="stack" style="margin-top:14px"><button class="btn ghost" id="tBack" type="button">กลับหน้าวอร์ด</button></div>`;
  $("main").innerHTML=h;
  document.querySelectorAll("[data-teach]").forEach(b=>b.onclick=()=>{const k=b.dataset.teach,T=TEACH.find(t=>t.k===k);if(T.soon){toast(`${T.n} จะเพิ่มภายหลัง`);return;}
    if(k==="case"||k==="yellow")return go(ward+"/case");go(ward+"/tch/"+k);});
  $("tBack").onclick=()=>go(ward);
}

/* ---------- History taking / PE / CTA pages ---------- */
function tSeg(){return (location.hash||"").replace(/^#\/?/,"").split("/").slice(2).map(x=>{try{return decodeURIComponent(x);}catch(e){return x;}});}
function rTch(){const a=tSeg(),tool=TK[a[0]]?a[0]:"hx";if(TV.prac&&TV.prac.tool!==tool)TV.prac=null;
  const tabs=tool==="cta"?[["full","เนื้อหา"],["key","Keyword"],["mine","Wording ของฉัน"],["prac","ฝึก"]]:[["full","ฉบับเต็ม"],["key","Key concept"],["prac","ฝึก"]];
  const tab=TV.tab[tool]&&tabs.some(t=>t[0]===TV.tab[tool])?TV.tab[tool]:"full";
  let h=`<div class="tchv"><div class="whead"><h1 class="h2">${TK[tool].ico} ${TK[tool].n}</h1><a href="#/${esc(ward)}/teach">Teaching round</a></div>`;
  h+=`<div class="tabs ttabs" role="tablist">${tabs.map(([k,n])=>`<button class="tab" role="tab" aria-selected="${k===tab}" data-ttab="${k}">${n}</button>`).join("")}</div><div id="tBody"></div></div>`;
  $("main").innerHTML=h;
  document.querySelectorAll("[data-ttab]").forEach(b=>b.onclick=()=>{TV.tab[tool]=b.dataset.ttab;rTch();});
  const O=tchGet(tool);
  if(tool==="cta")return tCta(O,tab);
  if(tab==="prac")return tPrac(tool,O.rows);
  tTable(tool,O,tab);}
function tSaveLater(tool,O){clearTimeout(tSaveLater._t);tSaveLater._t=setTimeout(()=>tchPut(tool,O),500);}
/* editable table: tab "full" = on/off · heading · content ; tab "key" = heading · content (read only) · key concept */
function tTable(tool,O,tab){const R=O.rows,wn=esc(W_().cfg.short||W_().cfg.name);
  let h=tab==="full"?`<p class="hint">แตะช่องเพื่อแก้ (บันทึกเอง) · ☑ = ใช้ในวอร์ด ${wn} (ปิด = สีเทา ไม่ใช้ตอนฝึก / History taker แต่ยังเก็บไว้ครบ) · หัวข้อเด็ก/สูติ ปิดไว้ก่อนในวอร์ดอื่น</p>`
    :`<p class="hint">ใส่ ${TK[tool].kc} ของแต่ละหัวข้อในช่องขวา — ใช้ตรวจตอนฝึก (ถ้าช่องว่าง AI จะตรวจเทียบกับเนื้อหาในช่องกลางแทน)</p>`;
  h+=`<div class="ttable ${tab}">${R.map((r,i)=>{const on=tOn(r);return `<div class="trow${on?"":" off"}" data-i="${i}">${tab==="full"?`<label class="ton" title="ใช้ในวอร์ดนี้"><input type="checkbox" data-on="${i}"${on?" checked":""}></label>`:""}
      <div class="th" ${tab==="full"?`contenteditable="true" data-f="h"`:""}>${esc(r.h)}</div>
      <div class="tc${tab==="key"?" ro":""}" ${tab==="full"?`contenteditable="true" data-f="c"`:""}>${tSan(r.c)}</div>
      ${tab==="key"?`<div class="tk" contenteditable="true" data-f="k" data-ph="พิมพ์ ${TK[tool].kc}…">${tSan(r.k)}</div>`:`<button class="tdel" type="button" data-del="${i}" title="ลบช่องนี้">×</button>`}</div>`;}).join("")}</div>`;
  if(tab==="full")h+=`<div class="stack" style="margin-top:10px"><button class="btn" id="tAdd" type="button">+ เพิ่มช่องใหม่</button>${bank["tch|all|"+tool]?`<button class="link" id="tReset" type="button">คืนค่าตั้งต้นของตาราง</button>`:""}</div>`;
  $("tBody").innerHTML=h;
  document.querySelectorAll("#tBody [contenteditable][data-f]").forEach(el=>el.addEventListener("input",()=>{const i=+el.closest(".trow").dataset.i,f=el.dataset.f;R[i][f]=f==="h"?el.textContent.trim():tSan(el.innerHTML);tSaveLater(tool,O);}));
  document.querySelectorAll("[data-on]").forEach(c=>c.onchange=()=>{const r=R[+c.dataset.on];r.off=r.off||{};r.off[ward]=!c.checked;tchPut(tool,O);c.closest(".trow").classList.toggle("off",!c.checked);});
  document.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{const i=+b.dataset.del;if(!confirm(`ลบช่อง “${R[i].h||"ไม่มีชื่อ"}” ออกจากตาราง? (ทุกวอร์ด)`))return;R.splice(i,1);tchPut(tool,O);rTch();});
  {const b=$("tAdd");if(b)b.onclick=()=>{R.push({id:tId(),h:"หัวข้อใหม่",c:"",k:"",tag:""});tchPut(tool,O);rTch();setTimeout(()=>{const el=document.querySelector(".trow:last-child .th");if(el){el.focus();el.scrollIntoView({block:"center"});}},50);};}
  {const b=$("tReset");if(b)b.onclick=()=>{if(!confirm("คืนตารางเป็นค่าตั้งต้น? ข้อความที่แก้และ key concept ทั้งหมดจะหาย"))return;tchPut(tool,{rows:tchDef(tool)});rTch();};}
}
/* ---------- practice (History / PE: AI grading against key concepts) ---------- */
function tPrac(tool,R){const P=TV.prac;
  if(P&&P.tool===tool&&!P.res)return tPracRun(tool);
  if(P&&P.tool===tool&&P.res)return tPracRes(tool);
  const on=R.filter(r=>tOn(r)),nk=on.filter(r=>String(r.k||"").replace(/<[^>]+>/g,"").trim()).length,opt=st.tprac||{};
  let h=`<div class="card"><h3>ฝึก${tool==="pe"?"ตรวจร่างกาย":"ซักประวัติ"}แบบพิมพ์</h3><span class="rd">ไม่สนเวลา ไม่สนคำพูด — ตรวจว่าที่พิมพ์ครบและสอดคล้องกับ ${TK[tool].kc} ใน tab ที่ 2 แค่ไหน แล้วให้ % รวม และ % ของแต่ละหัวข้อ · ใช้หัวข้อที่เปิดในวอร์ดนี้ ${on.length} หัวข้อ (มี ${TK[tool].kc} แล้ว ${nk})</span>
    <div class="tl-h">แบบฝึก</div><div class="chips"><button class="chip" type="button" data-pm="one" aria-pressed="${opt.mode!=="full"}">สุ่มหัวข้อใหญ่ 1 หัวข้อ (OSCE style)</button><button class="chip" type="button" data-pm="full" aria-pressed="${opt.mode==="full"}">ตารางเปล่า ทำทั้งหมด (full course)</button></div>
    <div class="tl-h">เวลา</div><div class="chips"><button class="chip" type="button" data-pt="0" aria-pressed="${!opt.min}">ไม่จับเวลา</button><button class="chip" type="button" data-pt="1" aria-pressed="${!!opt.min}">จับเวลา</button>${opt.min?`<label class="tmin"><input type="number" id="tMin" min="1" max="180" value="${opt.min}"> นาที</label>`:""}</div>
    ${tAI()?"":`<p class="hint" style="color:var(--wrong)">การตรวจใช้ AI — เปิดหน้านี้ใน Claude หรือใส่ API key ที่ Admission round ก่อน (ฝึกพิมพ์ได้ แต่จะยังไม่ได้คะแนน)</p>`}
    <div class="row2"><span class="spacer"></span><button class="btn primary" id="tGo" type="button" ${on.length?"":"disabled"}>เริ่ม</button></div></div>`;
  h+=tLogHTML(tool);
  $("tBody").innerHTML=h;
  const sv=x=>{st.tprac=Object.assign({},st.tprac||{},x);save();tPrac(tool,R);};
  document.querySelectorAll("[data-pm]").forEach(b=>b.onclick=()=>sv({mode:b.dataset.pm}));
  document.querySelectorAll("[data-pt]").forEach(b=>b.onclick=()=>sv({min:b.dataset.pt==="1"?((st.tprac||{}).min||(opt.mode==="full"?20:7)):0}));
  {const m=$("tMin");if(m)m.onchange=()=>{st.tprac=Object.assign({},st.tprac||{},{min:Math.max(1,+m.value||1)});save();};}
  $("tGo").onclick=()=>{const o=st.tprac||{},rows=o.mode==="full"?on:[on[Math.floor(Math.random()*on.length)]];
    TV.prac={tool,mode:o.mode==="full"?"full":"one",rows:rows.map(r=>({id:r.id,h:r.h,c:r.c,k:r.k})),ans:{},t0:now(),end:o.min?now()+o.min*60000:0};tPracRun(tool);};
  tLogBind(tool);}
function tPracRun(tool){const P=TV.prac;
  let h=`<div class="card tprun"><div class="row2"><b>${P.mode==="full"?"ทำทั้งหมด":"สุ่มได้หัวข้อ"}</b><span class="spacer"></span>${P.end?`<span class="ttimer" id="tTimer"></span>`:""}</div>
    ${P.rows.map((r,i)=>`<div class="tpq"><div class="tpq-h">${P.mode==="full"?`<span class="n">${i+1}</span>`:""}${esc(r.h)}</div><textarea data-pa="${esc(r.id)}" rows="${P.mode==="full"?4:9}" placeholder="พิมพ์สิ่งที่จะ${tool==="pe"?"ตรวจ (และขั้นตอน)":tool==="cta"?"พูด/ทำ":"ซัก"}…">${esc(P.ans[r.id]||"")}</textarea></div>`).join("")}
    <div class="row2"><button class="btn ghost" id="tQuit" type="button">ยกเลิก</button><span class="spacer"></span><button class="btn primary" id="tSub" type="button">ส่งตรวจ</button></div></div>`;
  tT().innerHTML=h;
  document.querySelectorAll("[data-pa]").forEach(t=>t.oninput=()=>{P.ans[t.dataset.pa]=t.value;});
  $("tQuit").onclick=()=>{if(confirm("ยกเลิกการฝึกครั้งนี้?")){TV.prac=null;rTch();}};
  $("tSub").onclick=()=>tGrade(tool);
  if(P.end){const tick=()=>{const el=$("tTimer");if(!el){clearInterval(show._t);return;}const l=P.end-now();el.textContent=l>0?hms(l).replace(/^00:/,""):"หมดเวลา";el.classList.toggle("late",l<=60000);if(l<=0){clearInterval(show._t);if(!P.res&&!P.busy)tGrade(tool);}};tick();clearInterval(show._t);show._t=setInterval(tick,1000);}
  const f=document.querySelector("[data-pa]");if(f)f.focus();}
/* keyword list: one per line or separated by , ; — "คำ (word)" = either form counts */
function tKws(k){return String(k||"").replace(/<br\s*\/?>/gi,"\n").replace(/<(div|p|li)\b[^>]*>/gi,"\n").replace(/<\/(p|div|li)>/gi,"\n").replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ").split(/[\n,;]+/).map(s=>s.trim()).filter(Boolean).map(s=>{const alts=[];const m=s.replace(/\(([^)]*)\)/g,(_,a)=>{alts.push(a.trim());return "";}).trim();return {label:s,alts:[m].concat(alts).filter(Boolean)};});}
const tNorm=s=>String(s||"").toLowerCase().replace(/\s+/g," ").trim();
async function tGrade(tool){const P=TV.prac;if(P.busy)return;clearInterval(show._t);
  if(tool==="cta"){P.res={rows:P.rows.map(r=>{const K=tKws(r.k),a=tNorm(P.ans[r.id]),hit=[],miss=[];K.forEach(x=>(x.alts.some(t=>a.includes(tNorm(t)))?hit:miss).push(x.label));return {id:r.id,h:r.h,pct:K.length?Math.round(hit.length/K.length*100):null,hit,miss,note:K.length?"":"ยังไม่ได้ใส่ keyword ของช่องนี้"};})};}
  else{if(!tAI()){toast("ต้องใช้ AI ตรวจ — เปิดใน Claude หรือใส่ API key ก่อน");return;}
    P.busy=1;tT().innerHTML=`<div class="card"><b>กำลังตรวจ…</b><span class="rd">AI กำลังเทียบคำตอบกับ ${TK[tool].kc}</span></div>`;
    try{const o=await aiJSON(tGradePrompt(tool,P),6000),L_=Array.isArray(o&&o.rows)?o.rows:[];
      P.res={rows:P.rows.map((r,i)=>{const x=L_.find(y=>y&&y.id===r.id)||L_[i]||{};return {id:r.id,h:r.h,pct:Math.max(0,Math.min(100,Math.round(+x.pct||0))),hit:[].concat(x.hit||[]),miss:[].concat(x.miss||[]),wrong:[].concat(x.wrong||[]),note:x.note||""};}),fb:o&&o.overall_feedback||""};}
    catch(e){P.busy=0;toast("ตรวจไม่สำเร็จ "+(admMsg(e)||"ลองใหม่อีกครั้ง"));tPracRun(tool);return;}P.busy=0;}
  const S=P.res.rows.filter(r=>r.pct!=null);P.res.pct=S.length?Math.round(S.reduce((a,r)=>a+r.pct,0)/S.length):null;
  bankPut("tlog|"+ward+"|"+tId(),{tool,mode:P.mode,proc:P.procName||"",rows:P.res.rows.map(r=>({h:r.h,pct:r.pct})),pct:P.res.pct,ans:P.ans,t:now()});
  tPracRes(tool);}
function tGradePrompt(tool,P){const plain=s=>String(s||"").replace(/<br\s*\/?>/gi,"\n").replace(/<\/(li|p|div)>/gi,"\n").replace(/<[^>]+>/g," ").replace(/&nbsp;/g," ").replace(/[ \t]+/g," ").trim();
  return `You are grading a Thai 4th-year medical student's typed ${tool==="pe"?"physical examination (what they would examine and how)":"history taking (what they would ask the patient)"} practice. Grade ONLY by coverage and correctness against the reference key concepts below — ignore time, wording, language (Thai or English both fine), spelling and order. A point counts as covered if the student's text clearly includes that idea in any wording.

For each section give: pct (0–100, share of the reference key concepts covered correctly), hit (key concepts covered, short), miss (key concepts missing, short), wrong (anything stated that is incorrect or unsafe, may be empty), note (one short Thai tip). Write hit/miss/wrong/note in Thai mixed with English medical terms.

Sections:
${P.rows.map(r=>{const k=plain(r.k);return `--- id: ${r.id}
Section: ${r.h}
Reference key concepts${k?"":" (no key concepts written yet — use this full reference content instead)"}:
${k||plain(r.c)}
Student's answer:
${plain(P.ans[r.id])||"(blank)"}`;}).join("\n")}

Reply with only JSON: {"rows":[{"id":"…","pct":0,"hit":["…"],"miss":["…"],"wrong":["…"],"note":"…"}], "overall_feedback":"2–3 Thai sentences"}`;}
function tPracRes(tool){const P=TV.prac,R=P.res,col=p=>p==null?"var(--muted)":p>=80?"var(--right)":p>=50?"#C98A00":"var(--wrong)";
  const O=tchGet(tool),mine=id=>{if(tool!=="cta")return "";const pr=(O.procs||[]).find(x=>x.id===P.proc),r=pr&&pr.rows.find(x=>x.id===id);return r&&r.w?r.w:"";};
  let h=`<div class="card"><div class="tpct" style="color:${col(R.pct)}">${R.pct==null?"–":R.pct+"%"}</div><span class="rd" style="text-align:center">${P.mode==="full"?"รวมทุกหัวข้อ":"หัวข้อ "+esc(P.rows[0].h)}${R.fb?" · "+esc(R.fb):""}</span></div>`;
  h+=R.rows.map(r=>`<div class="card tres"><div class="row2"><b>${esc(r.h)}</b><span class="spacer"></span><b style="color:${col(r.pct)}">${r.pct==null?"–":r.pct+"%"}</b></div>
    ${r.hit&&r.hit.length?`<div class="tl-h">✓ ครบแล้ว</div><ul class="ok">${r.hit.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
    ${r.miss&&r.miss.length?`<div class="tl-h">✗ ยังขาด</div><ul class="no">${r.miss.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
    ${r.wrong&&r.wrong.length?`<div class="tl-h">⚠ ไม่ถูกต้อง</div><ul class="no">${r.wrong.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
    ${r.note?`<p class="hint">${esc(r.note)}</p>`:""}
    <details><summary>คำตอบของฉัน</summary><p class="tans">${esc(P.ans[r.id]||"(ว่าง)")}</p></details>
    ${mine(r.id)?`<details open><summary>Wording ของฉัน (ไว้ทวน)</summary><div class="tans">${tSan(mine(r.id))}</div></details>`:""}</div>`).join("");
  h+=`<div class="stack"><button class="btn primary" id="tAgain" type="button">ฝึกอีกครั้ง</button></div>`+tLogHTML(tool);
  tT().innerHTML=h;$("tAgain").onclick=()=>{TV.prac=null;rTch();};tLogBind(tool);}
function tLogHTML(tool){const L_=bankItems("tlog",ward).filter(x=>x.tool===tool).reverse().slice(0,8);if(!L_.length)return "";
  return `<h2 class="h2" style="font-size:17px;margin-top:18px">ผลฝึกล่าสุด</h2><div class="card" style="padding:6px">${L_.map(x=>`<div class="srow" style="cursor:default"><span class="meta" style="flex:1">${fmtDT(x.t||x.c)} · ${x.mode==="full"?"ทั้งหมด":esc((x.rows[0]||{}).h||"")}${x.proc?" · "+esc(x.proc):""}</span><b>${x.pct==null?"–":x.pct+"%"}</b></div>`).join("")}</div>`;}
function tLogBind(){}

/* ---------- CTA: several procedures, each a one-column table ---------- */
function tCta(O,tab){const PR=O.procs;let cur=PR.find(p=>p.id===TV.ctaP)||PR[0];
  let h=`<div class="chips scroll">${PR.map(p=>`<button class="chip" type="button" data-cp="${esc(p.id)}" aria-pressed="${cur&&p.id===cur.id}">${esc(p.name)}</button>`).join("")}<button class="chip" type="button" id="cpAdd">+ เพิ่มหัตถการ</button></div>`;
  if(!cur){h+=`<div class="empty">ยังไม่มีหัตถการ — กด “+ เพิ่มหัตถการ” หรือส่งไฟล์ CTA ให้ Claude ใส่เนื้อหาให้ตรงตามไฟล์ทุกคำ</div>`;$("tBody").innerHTML=h;tCtaBind(O,null);return;}
  if(tab==="prac"){TV.ctaP=cur.id;h+=`<div id="tPrac"></div>`;$("tBody").innerHTML=h;tCtaBind(O,cur);
    if(TV.prac&&(TV.prac.tool!=="cta"||TV.prac.proc!==cur.id))TV.prac=null;
    if(TV.prac&&!TV.prac.res)return tPracRun("cta");if(TV.prac&&TV.prac.res)return tPracRes("cta");
    return tPracCta(cur,cur.rows.map((r,i)=>({id:r.id,h:"ช่องที่ "+(i+1),c:r.c,k:r.k})));}
  h+=`<div class="row2" style="margin:8px 0"><b style="font-size:17px">${esc(cur.name)}</b><span class="spacer"></span><button class="link" id="cpRen" type="button">เปลี่ยนชื่อ</button><button class="link" id="cpDel" type="button">ลบหัตถการ</button></div>`;
  h+=tab==="full"?`<p class="hint">เนื้อหาตามไฟล์ทุกคำ (ลายมือในไฟล์ = <span class="hw">สีน้ำเงิน</span>) · แตะช่องเพื่อแก้ · บันทึกเอง</p>`:tab==="key"?`<p class="hint">Keyword ที่ต้องมี “เป๊ะ ๆ” จึงได้คะแนน — 1 คำต่อบรรทัด (หรือคั่นด้วย , ) · คำในวงเล็บ = ใช้แทนคำข้างหน้าได้ เช่น <b>ล้างมือ (hand hygiene)</b></p>`:`<p class="hint">เขียนสิ่งที่ตัวเองจะพูดจริง — จะโชว์ให้ทวนตอนเฉลยในแท็บฝึก</p>`;
  h+=`<div class="ttable cta ${tab}">${cur.rows.map((r,i)=>`<div class="trow" data-i="${i}">${tab==="full"?`<div class="tc" contenteditable="true" data-f="c">${tSan(r.c)}</div><button class="tdel" type="button" data-del="${i}" title="ลบช่องนี้">×</button>`
      :`<div class="tc ro">${tSan(r.c)}</div><div class="tk" contenteditable="true" data-f="${tab==="key"?"k":"w"}" data-ph="${tab==="key"?"keyword…":"wording ของฉัน…"}">${tSan(tab==="key"?r.k:r.w)}</div>`}</div>`).join("")}</div>`;
  if(tab==="full")h+=`<div class="stack" style="margin-top:10px"><button class="btn" id="tAdd" type="button">+ เพิ่มช่อง</button></div>`;
  $("tBody").innerHTML=h;tCtaBind(O,cur);
  document.querySelectorAll("#tBody [contenteditable][data-f]").forEach(el=>el.addEventListener("input",()=>{const i=+el.closest(".trow").dataset.i;cur.rows[i][el.dataset.f]=tSan(el.innerHTML);tSaveLater("cta",O);}));
  document.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>{if(!confirm("ลบช่องนี้?"))return;cur.rows.splice(+b.dataset.del,1);tchPut("cta",O);rTch();});
  {const b=$("tAdd");if(b)b.onclick=()=>{cur.rows.push({id:tId(),c:"",k:"",w:""});tchPut("cta",O);rTch();};}
  {const b=$("cpRen");if(b)b.onclick=()=>{const n=prompt("ชื่อหัตถการ",cur.name);if(n&&n.trim()){cur.name=n.trim();tchPut("cta",O);rTch();}};}
  {const b=$("cpDel");if(b)b.onclick=()=>{if(!confirm(`ลบหัตถการ “${cur.name}” ทั้งหมด?`))return;O.procs=PR.filter(p=>p!==cur);TV.ctaP="";tchPut("cta",O);rTch();};}}
function tCtaLabel(r){const t=String(r.c||"").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();return t.length>70?t.slice(0,70)+"…":t||"(ช่องว่าง)";}
function tCtaBind(O,cur){document.querySelectorAll("[data-cp]").forEach(b=>b.onclick=()=>{TV.ctaP=b.dataset.cp;TV.prac=null;rTch();});
  $("cpAdd").onclick=()=>{const n=prompt("ชื่อหัตถการ (เช่น NG tube insertion)");if(!n||!n.trim())return;const p={id:tId(),name:n.trim(),rows:[{id:tId(),c:"",k:"",w:""}]};O.procs.push(p);TV.ctaP=p.id;tchPut("cta",O);rTch();};}
function tPracCta(cur,R){const box=tT();
  const nk=R.filter(r=>tKws(r.k).length).length;
  box.innerHTML=(`<div class="card"><h3>ฝึก ${esc(cur.name)}</h3><span class="rd">พิมพ์ตอบทุกช่อง (หรือสุ่ม 1 ช่อง) แล้วตรวจว่ามี keyword ครบเป๊ะ ๆ ตาม tab Keyword ไหม — ไม่ใช้ AI · มี keyword แล้ว ${nk}/${R.length} ช่อง</span>
    <div class="chips"><button class="chip" type="button" id="cpFull">ทำทุกช่อง</button><button class="chip" type="button" id="cpOne">สุ่ม 1 ช่อง</button></div>
    <div class="tl-h">เวลา</div><div class="chips"><button class="chip" type="button" data-ctm="0" aria-pressed="${!(st.tprac||{}).cmin}">ไม่จับเวลา</button><button class="chip" type="button" data-ctm="1" aria-pressed="${!!(st.tprac||{}).cmin}">จับเวลา</button>${(st.tprac||{}).cmin?`<label class="tmin"><input type="number" id="ctMin" min="1" max="120" value="${st.tprac.cmin}"> นาที</label>`:""}</div></div>`+tLogHTML("cta"));
  const start=mode=>{const on=R.filter(r=>tKws(r.k).length||String(r.c||"").replace(/<[^>]+>/g,"").trim());if(!on.length){toast("หัตถการนี้ยังไม่มีเนื้อหา");return;}const rows=mode==="full"?on:[on[Math.floor(Math.random()*on.length)]],m=(st.tprac||{}).cmin||0;
    TV.prac={tool:"cta",proc:cur.id,procName:cur.name,mode,rows,ans:{},t0:now(),end:m?now()+m*60000:0};rTch();};
  $("cpFull").onclick=()=>start("full");$("cpOne").onclick=()=>start("one");
  document.querySelectorAll("[data-ctm]").forEach(b=>b.onclick=()=>{st.tprac=Object.assign({},st.tprac||{},{cmin:b.dataset.ctm==="1"?((st.tprac||{}).cmin||10):0});save();rTch();});
  {const m=$("ctMin");if(m)m.onchange=()=>{st.tprac=Object.assign({},st.tprac||{},{cmin:Math.max(1,+m.value||1)});save();};}}

/* ---------- ward home: History taker / Physical examinator ---------- */
function tkHomeCard(){const n=bankItems("case",ward).filter(x=>!x.del).length;
  return `<div class="tkcard"><button class="tkb" type="button" data-go="taker/hx"><span class="i">🗣️</span><b>History taker</b><span class="rd">บันทึกประวัติคนไข้จริง</span></button><button class="tkb" type="button" data-go="taker/pe"><span class="i">🩺</span><b>Physical examinator</b><span class="rd">บันทึกการตรวจร่างกายจริง</span></button><button class="tkb sm" type="button" data-go="case"><span class="i">📁</span><b>Case</b><span class="rd">${n?`${n} เคส`:"คลังเคส"}</span></button></div>`;}
const tCases=()=>bankItems("case",ward).filter(x=>!x.del).sort((a,b)=>(b.ts||0)-(a.ts||0));
function rTaker(){const a=tSeg(),tool=a[0]==="pe"?"pe":"hx",cid=a[1]||"",C=cid&&bank[cid]&&!bank[cid].del?bank[cid]:null,R=tchGet(tool).rows.filter(r=>tOn(r)),D=(C&&C[tool])||{},cs=tCases();
  let h=`<div class="tchv"><div class="whead"><h1 class="h2">${tool==="pe"?"🩺 Physical examinator":"🗣️ History taker"}</h1><a href="#/${esc(ward)}">กลับหน้าวอร์ด</a></div>
    <p class="sub">${tool==="pe"?"ใส่สิ่งที่ตรวจพบจากคนไข้จริง":"ใส่ข้อมูลที่ซักจากคนไข้จริง"} ตามหัวข้อในตาราง ${TK[tool].n} (หัวข้อที่เปิดในวอร์ดนี้) · ไม่ต้องใส่ชื่อ-นามสกุลหรือ HN จริงของคนไข้</p>
    <div class="card"><div class="dtrow"><label style="flex:1">เคส<select id="tkCase"><option value="">+ เคสใหม่</option>${cs.map(x=>`<option value="${esc(x.key)}"${x.key===cid?" selected":""}>${esc(x.title||"เคสไม่มีชื่อ")} · ${fmtDT(x.c)}</option>`).join("")}</select></label></div>
    <label class="tkt">ชื่อเคส (สั้น ๆ)<input type="text" id="tkTitle" value="${esc(C?C.title:"")}" placeholder="เช่น ชาย 60 ปี ปวดท้องขวาบน 2 วัน"></label></div>
    <div class="ttable taker">${R.map(r=>`<div class="trow"><div class="th">${esc(r.h)}${String(r.k||"").replace(/<[^>]+>/g,"").trim()?`<details class="tkk"><summary>key concept</summary>${tSan(r.k)}</details>`:""}</div><textarea data-tk="${esc(r.id)}" rows="3" placeholder="…">${esc((D[r.id]||{}).v||"")}</textarea></div>`).join("")}</div>
    <div class="stack" style="margin-top:12px"><button class="btn primary" id="tkSave" type="button">บันทึก</button></div></div>`;
  $("main").innerHTML=h;
  $("tkCase").onchange=e=>go(ward+"/taker/"+tool+(e.target.value?"/"+encodeURIComponent(e.target.value):""));
  $("tkSave").onclick=()=>{const key=C?cid:"case|"+ward+"|"+tId(),o=Object.assign({},C||{});o.title=$("tkTitle").value.trim()||o.title||(tool==="pe"?"เคสตรวจร่างกาย":"เคสใหม่")+" "+fmtDT(now());
    const d={};document.querySelectorAll("[data-tk]").forEach(t=>{const r=R.find(x=>x.id===t.dataset.tk);if(t.value.trim())d[t.dataset.tk]={h:r?r.h:"",v:t.value};});o[tool]=Object.assign({},o[tool]||{},d);
    Object.keys(o[tool]).forEach(k=>{if(!d[k]&&R.some(r=>r.id===k))delete o[tool][k];});
    bankPut(key,o);tAfterSave(key);};}
function tAfterSave(key){const ped=/ped/i.test(ward),dlg=document.createElement("div");dlg.className="mqdlg";
  dlg.innerHTML=`<div class="mqdlg-box"><h3>บันทึกเข้าคลังเคสแล้ว ✓</h3><span class="rd">เปิดดูได้จาก “Case” ใน Teaching round · ทำอะไรต่อ?</span>
    <div class="stack" style="margin-top:10px"><button class="btn" data-ta="sum" type="button">สรุปเคสไว้พรีเซนต์ (AI)</button><button class="btn" data-ta="yellow" type="button">ร่างใบเหลือง (AI)</button></div>
    <label class="ck"><input type="checkbox" id="taHol"> รวม holistic discussion</label><label class="ck"><input type="checkbox" id="taRes"> รวม RES discussion</label>${ped?`<p class="hint">วอร์ดเด็ก: ใบเหลืองมี off-service note / discharge summary ด้วย</p>`:""}
    <div class="stack"><button class="btn ghost" data-ta="none" type="button">เก็บไว้ในคลังอย่างเดียว</button></div></div>`;
  document.body.appendChild(dlg);
  dlg.querySelectorAll("[data-ta]").forEach(b=>b.onclick=()=>{const k=b.dataset.ta,opt={hol:$("taHol").checked,res:$("taRes").checked};dlg.remove();go(ward+"/case/"+encodeURIComponent(key));if(k!=="none")setTimeout(()=>tCaseAI(key,k,opt),80);});}
function rCase(){const a=tSeg(),cid=a[0]||"";
  if(cid&&bank[cid]&&!bank[cid].del)return tCasePage(cid);
  const L_=tCases();
  let h=`<div class="tchv"><div class="whead"><h1 class="h2">📁 Case</h1><a href="#/${esc(ward)}/teach">Teaching round</a></div><p class="sub">เคสจริงจาก History taker / Physical examinator ของวอร์ดนี้ · แตะเพื่อดู สรุปเคส หรือร่างใบเหลือง</p>
    <div class="stack" style="margin-bottom:10px"><button class="btn" data-go2="taker/hx" type="button">🗣️ History taker</button><button class="btn" data-go2="taker/pe" type="button">🩺 Physical examinator</button></div>`;
  h+=L_.length?`<div class="card" style="padding:6px">${L_.map(x=>`<button class="srow" data-case="${esc(x.key)}"><span class="meta" style="flex:1"><b>${esc(x.title||"เคสไม่มีชื่อ")}</b> · ${fmtDT(x.c)}</span><span class="tch-chips">${x.hx&&Object.keys(x.hx).length?"<i>Hx</i>":""}${x.pe&&Object.keys(x.pe).length?"<i>PE</i>":""}${x.out&&x.out.sum?"<i>สรุป</i>":""}${x.out&&x.out.yellow?"<i>ใบเหลือง</i>":""}</span></button>`).join("")}</div>`:`<div class="empty">ยังไม่มีเคส — เริ่มจาก History taker หรือ Physical examinator</div>`;
  $("main").innerHTML=h+`</div>`;
  document.querySelectorAll("[data-case]").forEach(b=>b.onclick=()=>go(ward+"/case/"+encodeURIComponent(b.dataset.case)));
  document.querySelectorAll("[data-go2]").forEach(b=>b.onclick=()=>go(ward+"/"+b.dataset.go2));}
function tCasePage(cid){const C=bank[cid],sec=(tool,n)=>{const d=C[tool]||{},ks=Object.keys(d);return `<div class="card"><div class="row2"><h3 style="margin:0">${n}</h3><span class="spacer"></span><button class="link" data-ed="${tool}" type="button">แก้</button></div>${ks.length?`<div class="ttable view">${ks.map(k=>`<div class="trow"><div class="th">${esc(d[k].h)}</div><div class="tc">${esc(d[k].v).replace(/\n/g,"<br>")}</div></div>`).join("")}</div>`:`<p class="hint">ยังไม่ได้บันทึก</p>`}</div>`;},O=C.out||{},busy=TV.aiBusy===cid;
  let h=`<div class="tchv"><div class="whead"><h1 class="h2">${esc(C.title||"เคส")}</h1><a href="#/${esc(ward)}/case">คลังเคส</a></div><p class="sub">${fmtDT(C.c)}${C.ts&&C.ts!==C.c?" · แก้ล่าสุด "+fmtDT(C.ts):""}</p>`;
  h+=sec("hx","History")+sec("pe","Physical examination");
  h+=`<div class="card"><h3>ประมวลผลด้วย AI</h3>${busy?`<p><b>กำลังเขียน…</b> (อาจใช้เวลา 1–2 นาที)</p>`:""}<div class="stack"><button class="btn" id="cSum" type="button" ${busy?"disabled":""}>${O.sum?"สรุปเคสใหม่":"สรุปเคสไว้พรีเซนต์"}</button><button class="btn" id="cYel" type="button" ${busy?"disabled":""}>${O.yellow?"ร่างใบเหลืองใหม่":"ร่างใบเหลือง (SOAP)"}</button></div>
    <label class="ck"><input type="checkbox" id="cHol"${(C.opt||{}).hol?" checked":""}> รวม holistic discussion</label><label class="ck"><input type="checkbox" id="cRes"${(C.opt||{}).res?" checked":""}> รวม RES discussion</label>${tAI()?"":`<p class="hint" style="color:var(--wrong)">ต้องเปิดใน Claude หรือใส่ API key ที่ Admission round ก่อน</p>`}</div>`;
  if(O.sum)h+=`<div class="card tout"><div class="row2"><h3 style="margin:0">สรุปเคส (พรีเซนต์)</h3><span class="spacer"></span><button class="link" data-cp="sum" type="button">คัดลอก</button></div><div class="tdoc" id="oSum">${tSan(O.sum)}</div></div>`;
  if(O.yellow)h+=`<div class="card tout"><div class="row2"><h3 style="margin:0">ใบเหลือง (ร่าง)</h3><span class="spacer"></span><button class="link" data-cp="yellow" type="button">คัดลอก</button></div><div class="tdoc" id="oYellow">${tSan(O.yellow)}</div></div>`;
  h+=`<div class="stack"><button class="link" id="cDel" type="button" style="color:var(--wrong)">ลบเคสนี้</button></div></div>`;
  $("main").innerHTML=h;
  document.querySelectorAll("[data-ed]").forEach(b=>b.onclick=()=>go(ward+"/taker/"+b.dataset.ed+"/"+encodeURIComponent(cid)));
  const opt=()=>({hol:$("cHol").checked,res:$("cRes").checked});
  $("cSum").onclick=()=>tCaseAI(cid,"sum",opt());$("cYel").onclick=()=>tCaseAI(cid,"yellow",opt());
  document.querySelectorAll("[data-cp]").forEach(b=>b.onclick=()=>{const el=$(b.dataset.cp==="sum"?"oSum":"oYellow");try{navigator.clipboard.writeText(el.innerText);toast("คัดลอกแล้ว");}catch(e){toast("คัดลอกไม่ได้");}});
  $("cDel").onclick=()=>{if(!confirm("ลบเคสนี้?"))return;bankPut(cid,Object.assign({},C,{del:true}));go(ward+"/case");};}
async function tCaseAI(cid,kind,opt){const C=bank[cid];if(!C)return;if(!tAI()){toast("ต้องเปิดใน Claude หรือใส่ API key ก่อน");return;}
  TV.aiBusy=cid;bankPut(cid,Object.assign({},C,{opt}));if(view==="case")tCasePage(cid);
  try{const o=await aiJSON(tCasePrompt(C,kind,opt),9000),html=o&&(o.html||o.text)||"";if(!html)throw {code:"invalid_json"};
    const C2=bank[cid];C2.out=Object.assign({},C2.out||{},{[kind]:tSan(html)});bankPut(cid,C2);toast(kind==="sum"?"สรุปเคสเสร็จแล้ว":"ร่างใบเหลืองเสร็จแล้ว");}
  catch(e){toast("ทำไม่สำเร็จ "+(admMsg(e)||"ลองใหม่อีกครั้ง"));}
  TV.aiBusy=null;if(view==="case"&&(location.hash||"").includes(encodeURIComponent(cid)))tCasePage(cid);}
function tCasePrompt(C,kind,opt){const w=W_().cfg,y=yrN(),ped=/ped/i.test(ward),sec=t=>Object.values(C[t]||{}).map(x=>`${x.h}: ${x.v}`).join("\n")||"(not recorded)";
  const base=`Real patient data typed by a ${y?ord(y)+"-year":"clinical-year"} Thai medical student at Chulalongkorn University on the ${w.name} ward (Thai/English shorthand as typed):

HISTORY
${sec("hx")}

PHYSICAL EXAMINATION
${sec("pe")}

Rules: use ONLY the information given — never invent findings, lab results or history; where something important is missing write "ยังไม่ได้ซัก/ยังไม่ได้ตรวจ — ควรถาม/ตรวจ: …". Write in Thai mixed with English medical terms, the way Thai ward notes are written. Output HTML using only <h3>, <h4>, <p>, <ul>, <ol>, <li>, <b>, <i>, <table>, <tr>, <th>, <td>, <br>.`;
  if(kind==="sum")return base+`

Task: prepare a concise CASE PRESENTATION the student can present on ward rounds: patient profile, chief complaint, present illness (organized timeline), pertinent past/personal/family history, pertinent review of systems, physical examination (pertinent positive and negative), problem list, differential diagnoses with supporting/opposing points, initial investigations and management plan, and 3–5 questions staff are likely to ask with short model answers.
Reply with only JSON: {"html":"…"}`;
  return base+`

Task: draft a CASE REPORT WITH DISCUSSION (ใบเหลือง) in this order: 1) History (full, organized), 2) Physical examination, 3) Problem list, 4) Discussion in SOAP format for each problem (S, O, A with differential diagnosis and reasoning citing current standard guidelines, P with diagnostic, therapeutic and educational plans), 5) Suggested progress notes for the first days of admission — for each day what to document and what to discuss/explain to the patient and family${ped?", 6) Off-service note and discharge summary (pediatric ward)":""}${opt&&opt.hol?`, then a HOLISTIC DISCUSSION (bio-psycho-social: illness experience — feelings, ideas, function, expectation; family and social context; continuity and prevention)`:""}${opt&&opt.res?`, then a RES DISCUSSION (an evidence-based discussion of one focused clinical question arising from this case: question in PICO form, key evidence or guideline with year, appraisal in brief, and how it applies to this patient)`:""}. Mark clearly any part that needs data the student has not recorded.
Reply with only JSON: {"html":"…"}`;}
