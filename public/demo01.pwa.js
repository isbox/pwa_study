let cacheName = 'helloWorld';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                cache.addAll([
                    '/img/03.jpg',
                    '/test/script.js'
                ])
            })
    )
})

self.addEventListener('fetch', event => {
    
})