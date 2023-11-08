// sw.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');
import {NetworkFirst} from 'workbox-strategies';
import {CacheFirst} from 'workbox-strategies';
import {Plugin as ExpirationPlugin} from 'workbox-expiration';

workbox.routing.registerRoute(
    /https:\/\/musicon\.space/,
    new NetworkFirst()
);

workbox.routing.registerRoute(
    /https:\/\/api\.s3\.musicon\.space/,
    new NetworkFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    new CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 30,
            }),
            new workbox.CacheableResponse.Plugin({
                statuses: [0, 200],
            })
        ]
    })
);

workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);