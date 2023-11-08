// sw.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');

workbox.routing.registerRoute(
    /https:\/\/musicon\.space/,
    workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    /https:\/\/api\.s3\.musicon\.space/,
    workbox.strategies.NetworkFirst()
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