
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('airhorner').then(cache => {
           return cache.addAll([
               '/pwa_study/public/demo01.pwa.js',
               '/pwa_study/public/manifest.json'
           ])
       })
    )
});

self.addEventListener('fetch', event => {
    
})