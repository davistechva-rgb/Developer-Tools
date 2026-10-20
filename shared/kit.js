/* Developer Tools · shared helpers (window.DT) */
(function(){
"use strict";
const P="dt:";
const ROOT=new URL("..",document.currentScript.src).href;
const DT={ROOT};
DT.all=[];let n=0;
DT_CATS.forEach(c=>c.tools.forEach(t=>{n++;DT.all.push({slug:t[0],emoji:t[1],name:t[2],desc:t[3],ready:!!t[4],num:n,cat:c.name})}));
DT.total=n;
DT.sheet=t=>String(t.num).padStart(2,"0");

DT.get=(k,d)=>{try{const v=localStorage.getItem(P+k);return v==null?d:JSON.parse(v)}catch(e){return d}};
DT.set=(k,v)=>{try{localStorage.setItem(P+k,JSON.stringify(v))}catch(e){}};
DT.esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
DT.attr=s=>DT.esc(s).replace(/"/g,"&quot;");
DT.$=(s,r=document)=>r.querySelector(s);
DT.$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
DT.debounce=(fn,ms=150)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms)}};

/* ---------- theme ---------- */
function themeLabel(b){const dark=document.documentElement.dataset.theme!=="light";b.textContent=dark?"Light theme":"Dark theme";b.setAttribute("aria-label",dark?"Switch to light theme":"Switch to dark theme")}
DT.themeButton=()=>{const b=document.createElement("button");b.type="button";b.className="btn ghost sm theme-btn";themeLabel(b);
  b.onclick=()=>{const t=document.documentElement.dataset.theme==="light"?"dark":"light";document.documentElement.dataset.theme=t;try{localStorage.setItem(P+"theme",t)}catch(e){}themeLabel(b);
    const m=document.querySelector('meta[name="theme-color"]');if(m)m.content=t==="light"?"#F3F7FB":"#0F2A4A"};return b};

/* ---------- chrome ---------- */
DT.titleBlock=(label,sheet)=>{const a=document.createElement("aside");a.className="tblock";a.setAttribute("aria-label","Made by Davis Tech Support");
  a.innerHTML=`<a class="tb-brand" href="https://davis-tech-support.com" target="_blank" rel="noopener"><span class="tb-logo">DTS</span><span class="tb-name">Davis Tech Support</span></a>
  <div class="tb-row"><div><span class="tb-k">Tool</span><span class="tb-v">${DT.esc(label)}</span></div><div><span class="tb-k">Sheet</span><span class="tb-v">${sheet}</span></div></div>`;
  document.body.appendChild(a);return a};
DT.mount=slug=>{const t=DT.all.find(x=>x.slug===slug);DT.tool=t;
  const h=document.createElement("header");h.className="bar";
  h.innerHTML=`<a class="back" href="${ROOT}index.html">All tools</a><div class="bar-title"><h1><span class="emo" aria-hidden="true">${t.emoji}</span>${DT.esc(t.name)}</h1><p>${DT.esc(t.desc)}</p></div>`;
  h.appendChild(DT.themeButton());document.body.prepend(h);
  DT.titleBlock(t.name,DT.sheet(t)+" of "+DT.total)};

/* ---------- feedback ---------- */
let toastEl;
DT.toast=msg=>{if(!toastEl){toastEl=document.createElement("div");toastEl.className="toast";toastEl.setAttribute("role","status");document.body.appendChild(toastEl)}
  toastEl.textContent=msg;toastEl.classList.add("show");clearTimeout(toastEl._t);toastEl._t=setTimeout(()=>toastEl.classList.remove("show"),1600)};
DT.copy=async(text,btn)=>{
  try{await navigator.clipboard.writeText(text)}catch(e){const ta=document.createElement("textarea");ta.value=text;ta.style.cssText="position:fixed;opacity:0";document.body.appendChild(ta);ta.select();try{document.execCommand("copy")}catch(_){}ta.remove()}
  if(btn){if(!btn.dataset.label)btn.dataset.label=btn.textContent;btn.textContent="Copied";btn.classList.add("ok");clearTimeout(btn._t);btn._t=setTimeout(()=>{btn.textContent=btn.dataset.label;btn.classList.remove("ok")},1200)}
  else DT.toast("Copied to clipboard")};
DT.download=(name,data,type="text/plain")=>{const u=URL.createObjectURL(data instanceof Blob?data:new Blob([data],{type}));const a=document.createElement("a");a.href=u;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),2000)};
DT.bytes=n=>{if(n<1024)return n+" bytes";const u=["KB","MB","GB","TB"];let i=-1;do{n/=1024;i++}while(n>=1024&&i<u.length-1);return n.toFixed(n<10?2:1)+" "+u[i]};
DT.fileDrop=(el,onFile)=>{const inp=document.createElement("input");inp.type="file";inp.hidden=true;el.after(inp);
  el.tabIndex=0;el.setAttribute("role","button");
  el.addEventListener("click",()=>inp.click());el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();inp.click()}});
  inp.addEventListener("change",()=>{if(inp.files[0])onFile(inp.files[0]);inp.value=""});
  ["dragenter","dragover"].forEach(v=>el.addEventListener(v,e=>{e.preventDefault();el.classList.add("over")}));
  ["dragleave","drop"].forEach(v=>el.addEventListener(v,e=>{e.preventDefault();el.classList.remove("over")}));
  el.addEventListener("drop",e=>{const f=e.dataTransfer.files[0];if(f)onFile(f)})};

/* ---------- bytes and encoding ---------- */
DT.utf8=s=>new TextEncoder().encode(s);
DT.hex=b=>Array.from(b,x=>x.toString(16).padStart(2,"0")).join("");
DT.b64=b=>{let s="";for(let i=0;i<b.length;i+=0x8000)s+=String.fromCharCode.apply(null,b.subarray(i,i+0x8000));return btoa(s)};
DT.unb64=str=>{const s=atob(str);const b=new Uint8Array(s.length);for(let i=0;i<s.length;i++)b[i]=s.charCodeAt(i);return b};
DT.concat=(a,b)=>{const c=new Uint8Array(a.length+b.length);c.set(a);c.set(b,a.length);return c};
DT.randInt=n=>{const max=Math.floor(4294967296/n)*n;const a=new Uint32Array(1);do{crypto.getRandomValues(a)}while(a[0]>=max);return a[0]%n};

/* ---------- hashing ---------- */
DT.md5=function(bytes){
  const S=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21];
  const K=new Int32Array(64);for(let i=0;i<64;i++)K[i]=Math.floor(Math.abs(Math.sin(i+1))*4294967296)|0;
  const len=bytes.length,total=(((len+8)>>>6)+1)*64;
  const buf=new Uint8Array(total);buf.set(bytes);buf[len]=0x80;
  const dv=new DataView(buf.buffer);dv.setUint32(total-8,(len*8)>>>0,true);dv.setUint32(total-4,Math.floor(len/0x20000000),true);
  let a0=0x67452301|0,b0=0xefcdab89|0,c0=0x98badcfe|0,d0=0x10325476|0;const M=new Int32Array(16);
  for(let off=0;off<total;off+=64){
    for(let j=0;j<16;j++)M[j]=dv.getInt32(off+j*4,true);
    let A=a0,B=b0,C=c0,D=d0;
    for(let i=0;i<64;i++){let F,g;
      if(i<16){F=(B&C)|(~B&D);g=i}else if(i<32){F=(D&B)|(~D&C);g=(5*i+1)&15}else if(i<48){F=B^C^D;g=(3*i+5)&15}else{F=C^(B|~D);g=(7*i)&15}
      F=(F+A+K[i]+M[g])|0;A=D;D=C;C=B;B=(B+((F<<S[i])|(F>>>(32-S[i]))))|0}
    a0=(a0+A)|0;b0=(b0+B)|0;c0=(c0+C)|0;d0=(d0+D)|0}
  const out=new Uint8Array(16),o=new DataView(out.buffer);o.setInt32(0,a0,true);o.setInt32(4,b0,true);o.setInt32(8,c0,true);o.setInt32(12,d0,true);return out};
DT.ALGOS=["MD5","SHA-1","SHA-256","SHA-384","SHA-512"];
DT.hashLen={32:"MD5",40:"SHA-1",64:"SHA-256",96:"SHA-384",128:"SHA-512"};
DT.canHash=()=>!!(window.crypto&&crypto.subtle);
DT.digest=async(algo,bytes)=>algo==="MD5"?DT.md5(bytes):new Uint8Array(await crypto.subtle.digest(algo,bytes));
DT.hmac=async(algo,key,msg)=>{const bs=(algo==="SHA-384"||algo==="SHA-512")?128:64;let k=key;if(k.length>bs)k=await DT.digest(algo,k);
  const kp=new Uint8Array(bs);kp.set(k);const ip=kp.map(x=>x^0x36),op=kp.map(x=>x^0x5c);
  return DT.digest(algo,DT.concat(op,await DT.digest(algo,DT.concat(ip,msg))))};
/* pull a hex hash out of "abc123  file.iso", "SHA256 (x) = abc", or "ab:cd:ef" */
DT.cleanHash=s=>{s=String(s).trim();const m=s.match(/(?:^|[^0-9a-f])([0-9a-f]{32,128})(?![0-9a-f])/i);if(m)return m[1].toLowerCase();
  const t=s.replace(/[\s:-]/g,"");return /^[0-9a-f]+$/i.test(t)?t.toLowerCase():s.toLowerCase()};

/* ---------- JSON ---------- */
DT.jsonError=(text,e)=>{const m=String(e&&e.message||e);let pos=null,line=null,col=null,mm;
  if((mm=m.match(/line (\d+) column (\d+)/))){line=+mm[1];col=+mm[2]}
  else if((mm=m.match(/position (\d+)/)))pos=+mm[1];
  else if(/end of (JSON )?(data|input)/i.test(m))pos=text.length;
  if(pos!=null&&line==null){const b=text.slice(0,pos);line=b.split("\n").length;col=pos-b.lastIndexOf("\n")}
  if(pos==null&&line!=null){const ls=text.split("\n");pos=ls.slice(0,line-1).reduce((s,l)=>s+l.length+1,0)+col-1}
  let msg=m.replace(/^JSON\.parse:\s*/,"").replace(/\s*(in JSON )?at position \d+.*$/,"").replace(/\s*at line \d+ column \d+ of the JSON data/,"").replace(/\s*\(line \d+ column \d+\)/,"").trim();
  msg=msg.charAt(0).toUpperCase()+msg.slice(1);
  return {msg,line,col,pos}};
DT.hlJSON=json=>DT.esc(json).replace(/("(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+\-]?\d+)?)/g,m=>{
  let c="num";if(m[0]==='"')c=/:$/.test(m)?"key":"str";else if(m==="true"||m==="false")c="bool";else if(m==="null")c="null";return `<span class="j-${c}">${m}</span>`});
DT.sortKeys=v=>Array.isArray(v)?v.map(DT.sortKeys):(v&&typeof v==="object")?Object.keys(v).sort((a,b)=>a.localeCompare(b)).reduce((o,k)=>(o[k]=DT.sortKeys(v[k]),o),{}):v;

/* ---------- offline ---------- */
if("serviceWorker" in navigator&&location.protocol.startsWith("http"))window.addEventListener("load",()=>navigator.serviceWorker.register(ROOT+"sw.js").catch(()=>{}));
window.DT=DT;
})();
