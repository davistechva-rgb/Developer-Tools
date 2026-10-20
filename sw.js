/* Offline support. Bump VERSION after changing any file so devices pick up the update. */
const VERSION="dt-v6";
const CORE=["./","index.html","shared/kit.css","shared/kit.js","shared/tools.js","icon.svg","manifest.webmanifest"];
const FONT_HOSTS=["fonts.googleapis.com","fonts.gstatic.com"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);
  const mine=u.origin===location.origin,font=FONT_HOSTS.includes(u.hostname);if(!mine&&!font)return;
  e.respondWith(caches.open(VERSION).then(async c=>{const hit=await c.match(r,{ignoreSearch:mine});
    const net=fetch(r).then(res=>{if(res&&(res.ok||res.type==="opaque"))c.put(r,res.clone());return res}).catch(()=>hit);
    return hit||net}))});
