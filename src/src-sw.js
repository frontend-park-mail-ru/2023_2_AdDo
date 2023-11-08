// sw.js


workbox.routing.registerRoute(
    /https:\/\/musicon\.space/,
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    /https:\/\/api\.s3\.musicon\.space/,
    workbox.strategies.networkFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30,
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            })
        ]
    })
);

workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);