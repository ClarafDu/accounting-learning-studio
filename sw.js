const CACHE='xunzhang-v1-20261102-bilingual-r2';
const ROOT=new URL('./',self.location.href);
const FILES=['./','index.html','styles.css','app.js','core.js','labs.js','i18n.js','content/index.js','content/lectures-1-2.js','content/lectures-3-4.js','content/lectures-5-6.js','content/lecture-7.js','icon.svg','manifest.webmanifest'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES.map(f=>new URL(f,ROOT).href))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('xunzhang-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(event.request.method!=='GET'||url.origin!==ROOT.origin||!url.pathname.startsWith(ROOT.pathname))return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok&&FILES.some(f=>new URL(f,ROOT).pathname===url.pathname)){
      const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)));
    }
    return response;
  }).catch(async()=>{const cached=await caches.match(event.request);if(cached)return cached;if(event.request.mode==='navigate')return caches.match(new URL('index.html',ROOT));return Response.error();}));
});
