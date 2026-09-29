const CACHE='sawit-patra-100-final-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.json','./icon.svg']))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{let c=res.clone();caches.open(CACHE).then(x=>x.put(e.request,c));return res}).catch(()=>caches.match('./index.html')))));
