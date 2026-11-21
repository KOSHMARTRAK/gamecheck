// GameCheck : marche hors connexion, et va toujours chercher la version la plus récente en premier.
const CACHE = 'gamecheck-v24';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'img/icon-192.png', 'img/icon-512.png', 'img/chien-buste.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  const fresh = e.request.mode === 'navigate' || url.pathname.endsWith('.json') || url.pathname.endsWith('/') ||
    url.pathname.endsWith('.html') || url.pathname.endsWith('.webmanifest');
  if (fresh) {
    // réseau d'abord, sans passer par la mémoire du navigateur (sinon le téléphone garde l'ancienne page jusqu'à 10 min)
    e.respondWith(fetch(e.request.url, { cache: 'no-store', credentials: 'same-origin' })
      .then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); } return r; })
      .catch(() => caches.match(e.request).then(m => m || caches.match('./'))));
  } else {
    // images : cache d'abord
    e.respondWith(caches.match(e.request).then(m => m || fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); return r; })));
  }
});
