// node parts/check_ob.js <b|c|d> parts/ob78x_pN.js  → evaluates the part with the real helpers and checks each question
const fs=require("fs");const R=process.argv[2],f=process.argv[3];const src=fs.readFileSync(f,"utf8");
const LT="ABCDE",NK="ไม่มีเฉลยในไฟล์ (เฉลยโดย Claude)",RC=x=>NK+" — ผู้จดใส่คำตอบไว้: "+x;
const KS={b:" (คีย์ในไฟล์ Key 78B)",c:" (คีย์ในไฟล์ KEY 78C)",d:" (เฉลย AI ท้ายไฟล์ 78D)"}[R],KI=(...n)=>n.map(i=>"kob78"+R+"_"+i),QI=n=>"qob78"+R+"_"+n;
const IM=new Set(fs.readdirSync(__dirname+"/../img").map(f=>f.replace(/\.(jpg|png)$/,"")));
const TP=new Set(["Antenatal care & prenatal diagnosis","Normal & abnormal labor","Preterm labor & PROM","Postterm & induction of labor","Fetal surveillance & FGR","Anemia & thalassemia in pregnancy","Puerperium & postpartum hemorrhage","Antepartum hemorrhage","Hypertensive disorders in pregnancy","Medical diseases in pregnancy","Multifetal gestation & amniotic fluid","Infections in pregnancy","Early pregnancy loss & ectopic pregnancy","Gestational trophoblastic disease","Gynecologic anatomy","Puberty, amenorrhea & menopause","Dysmenorrhea, endometriosis & pelvic pain","Infertility","Contraception & abortion","Sexual assault & sexual health","Vaginitis, STI & PID","Pelvic organ prolapse & incontinence","Ovarian & adnexal mass","Cervical neoplasia & screening","Uterine & endometrial disease","Vulvar & vaginal disease","Neonate & lactation","Ethics, epidemiology & others"]);
const TG=new Set(["ANC","Prenatal genetics","Labor","Operative delivery","Preterm & PROM","Induction of labor","Fetal surveillance","Anemia & thalassemia","Puerperium","PPH","APH","Hypertension in pregnancy","Medical disease in pregnancy","Multifetal","Amniotic fluid","Infection in pregnancy","Early pregnancy","GTD","Anatomy","Reproductive endocrinology","Menopause","Pelvic pain & endometriosis","Infertility","Contraception","Abortion","Sexual assault","Sexual health","Vaginitis & STI","PID","Pelvic floor","Ovary","Cervix","Uterus & endometrium","Vulva & vagina","Neonate","Lactation","Ethics & epidemiology","Onco"]);
const A=o=>{const q=Object.assign({set:"MDCU78",ro:"Ro"+R.toUpperCase()},o);if(Array.isArray(q.wrong)){const w={};let j=0;for(let i=0;i<5;i++){if(i!==q.ans)w[LT[i]]=q.wrong[j++];}q.wrong=w;}return q;};
let QB;try{QB=eval("["+src+"]");}catch(e){console.log("SYNTAX ERROR:",e.message);process.exit(1);}
const strip=s=>String(s).replace(/<[^>]+>/g,"");const extra=s=>/[()]| \/ | — | - |\be\.g\.|เช่น/.test(s);let bad=0;const seen={};
QB.forEach(q=>{const e=[];["page","page2","orig","stem","gray","opts","key","interp","why","wrong","trap","summary","guide","variants","notes","tp","tg"].forEach(k=>{if(q[k]===undefined||q[k]==="")e.push("missing "+k);});
 if(seen[q.orig])e.push("duplicate orig");seen[q.orig]=1;
 if(!Array.isArray(q.opts)||q.opts.length!==5)e.push("opts!=5");if(!(q.ans>=0&&q.ans<5))e.push("ans");
 [].concat(q.img||[],q.kimg||[]).forEach(k=>{if(!IM.has(k))e.push("image not found "+k);});
 if(q.tp&&!TP.has(q.tp))e.push("tp not in list: "+q.tp);(q.tg||[]).forEach(t=>{if(!TG.has(t))e.push("tg not in list: "+t);});if(q.tg&&(q.tg.length<1||q.tg.length>4))e.push("tg count");
 const w=Object.keys(q.wrong||{});if(w.length!==4)e.push("wrong!=4");
 if(Array.isArray(q.summary)&&q.summary.length<3)e.push("summary too short");
 if(Array.isArray(q.summary)&&/^\s*(ดู|ไปดู)ข้อ/.test(strip(q.summary[0])))e.push("summary starts with ดูข้อ");
 if(/[`]/.test(JSON.stringify(q)))e.push("backtick");
 const o=(q.opts||[]).map(strip),c=o[q.ans]||"",ot=o.filter((_,j)=>j!==q.ans),mx=Math.max(...ot.map(x=>x.length));
 if(c.length>mx*1.35&&c.length-mx>8)e.push("correct option LONG: "+c);if(o.some(extra))e.push("option has ()/ — / e.g.: "+o.filter(extra).join(" | "));
 if(e.length){bad++;console.log("orig",q.orig,"→",e.join("; "));}});
console.log("questions",QB.length,"bad",bad);
