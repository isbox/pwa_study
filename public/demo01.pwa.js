
self.addEventListener('install', event => {
    console.warn('123123123123123');
})

self.addEventListener('fetch', event => {
    if ( event.request.url.includes('.js') ) {
        // console.warn('拦截js文件');
        event.respondWith(new Response('', {status: '417', statusText: 'no js!'}))
    }
})