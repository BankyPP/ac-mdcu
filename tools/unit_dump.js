// dump Unit round file (any literal format) → JSON {id,..,QB:[raw objects]} · U() stubbed as identity (ไม่แปลง wrong/outside)
// node tools/unit_dump.js data/unit_L12.js > out.json
const fs=require("fs");
const s=fs.readFileSync(process.argv[2],"utf8");
let got=null;const W={UNIT:{push:o=>{got=o;}}};
const src=s.replace(/const U=o=>\{[\s\S]*?return o;\};/,"const U=o=>o;");
new Function("W",src)(W);
process.stdout.write(JSON.stringify(got));
