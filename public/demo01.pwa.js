
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('airhorner').then(cache => {
            return cache.addAll([
                '/pwa_study/public/demo01.html',
               '/pwa_study/public/demo01.pwa.js',
               '/pwa_study/public/manifest.json'
            ])
       })
    )
});

self.addEventListener('fetch', event => {
    console.log(222)
})

self.addEventListener('notificationclick', function (e) {
    console.log(11111)
})