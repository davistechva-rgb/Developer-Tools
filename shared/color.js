/* Developer Tools · color helpers (window.DTC) */
(function(){
const cv=document.createElement("canvas").getContext("2d");
const C={};
C.clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
C.parse=str=>{str=String(str).trim();if(!str)return null;
  if(/^[0-9a-f]{3,8}$/i.test(str))str="#"+str;
  cv.fillStyle="#010203";cv.fillStyle=str;const a=cv.fillStyle;cv.fillStyle="#040506";cv.fillStyle=str;if(cv.fillStyle!==a)return null;
  if(a[0]==="#")return{r:parseInt(a.slice(1,3),16),g:parseInt(a.slice(3,5),16),b:parseInt(a.slice(5,7),16),a:1};
  const m=a.match(/[\d.]+/g).map(Number);return{r:m[0],g:m[1],b:m[2],a:m[3]??1}};
C.hex=({r,g,b})=>"#"+[r,g,b].map(x=>Math.round(C.clamp(x,0,255)).toString(16).padStart(2,"0")).join("");
C.hsl=({r,g,b})=>{r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2;let h=0,s=0;
  if(mx!==mn){const d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}
  return{h,s:s*100,l:l*100}};
C.fromHsl=(h,s,l)=>{h=((h%360)+360)%360;s/=100;l/=100;const k=n=>(n+h/30)%12,a=s*Math.min(l,1-l),f=n=>l-a*Math.max(-1,Math.min(k(n)-3,9-k(n),1));
  return{r:Math.round(f(0)*255),g:Math.round(f(8)*255),b:Math.round(f(4)*255),a:1}};
C.hsv=({r,g,b})=>{r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b),d=mx-mn;let h=0;
  if(d){h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h*=60}return{h,s:mx?d/mx*100:0,v:mx*100}};
C.cmyk=({r,g,b})=>{const k=1-Math.max(r,g,b)/255;if(k>=1)return{c:0,m:0,y:0,k:100};const f=x=>(1-x/255-k)/(1-k)*100;return{c:f(r),m:f(g),y:f(b),k:k*100}};
C.lum=({r,g,b})=>{const f=x=>{x/=255;return x<=.03928?x/12.92:Math.pow((x+.055)/1.055,2.4)};return .2126*f(r)+.7152*f(g)+.0722*f(b)};
C.contrast=(a,b)=>{const x=C.lum(a),y=C.lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
C.textOn=c=>C.contrast(c,{r:255,g:255,b:255})>=C.contrast(c,{r:0,g:0,b:0})?"#ffffff":"#000000";
C.mix=(a,b,t)=>({r:a.r+(b.r-a.r)*t,g:a.g+(b.g-a.g)*t,b:a.b+(b.b-a.b)*t,a:1});
const R=Math.round;
C.fmt={hex:c=>C.hex(c),rgb:c=>`rgb(${R(c.r)} ${R(c.g)} ${R(c.b)})`,rgbLegacy:c=>`rgb(${R(c.r)}, ${R(c.g)}, ${R(c.b)})`,
  hsl:c=>{const h=C.hsl(c);return`hsl(${R(h.h)} ${R(h.s)}% ${R(h.l)}%)`},hsv:c=>{const h=C.hsv(c);return`hsv(${R(h.h)}, ${R(h.s)}%, ${R(h.v)}%)`},
  cmyk:c=>{const k=C.cmyk(c);return`cmyk(${R(k.c)}%, ${R(k.m)}%, ${R(k.y)}%, ${R(k.k)}%)`}};
window.DTC=C;
})();
