
self.addEventListener('install', e => {
    e.waitUntil(
       caches.open('airhorner').then(cache => {
           return cache.addAll([
               '/',
               '/public/demo01.pwa.js',
               '/public/manifest.json'
           ])
       })
    )
});

self.addEventListener('fetch', event => {
    
})