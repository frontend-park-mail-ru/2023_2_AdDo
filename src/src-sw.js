// sw.js
importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js');
import {NetworkFirst} from 'workbox-strategies';
import {CacheFirst} from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import {CacheableResponsePlugin} from 'workbox-cacheable-response';
self.__WB_DISABLE_DEV_LOGS = true;

workbox.routing.registerRoute(
	/https:\/\/musicon\.space/,
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
			new CacheableResponsePlugin({
				statuses: [0, 200],
			})
		]
	})
);

self.addEventListener('activate', event => {
	event.waitUntil(
	  self.clients.claim()
	);
});

self.addEventListener('message', event => {
	if (event.data.type === 'playerSync') {
	  self.clients.matchAll().then(clients => {
			clients.forEach(client => {
		  client.postMessage({
					type: 'playerSync',
					currentTime: event.data.currentTime,
					isPlaying: event.data.isPlaying,
		  });
			});
	  });
	}
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);