// Offline support. Pages load network-first (so updates arrive), everything else cache-first with a background refresh.
const CACHE = 'skillbuilder-v15';
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const html = await (await fetch('index.html', { cache: 'reload' })).text();
    const urls = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg'];
    for (const m of html.matchAll(/(?:src|href)="([^"]+\.(?:js|css)[^"]*)"/g)) urls.push(m[1]);
    await Promise.all(urls.map(u => cache.add(u).catch(() => {})));
    self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => { for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k); await self.clients.claim(); })());
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put('index.html', c)); return r; }).catch(() => caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; }).catch(() => hit);
    return hit || net;
  }));
});
