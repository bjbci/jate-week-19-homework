const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst } = require('workbox-strategies');//??{StaleWhileRevalidate}-do i need this  after CacheFirst???////
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching/////////////////////////////////////
registerRoute();

//MY NOTES ARE EVERYTHING BELOW //MY NOTES ARE EVERYTHING BELOW TO THE BOTTOM1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//MY NOTES ARE EVERYTHING BELOW //MY NOTES ARE EVERYTHING BELOWTO THE BOTTOM!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//SERVICE WORKER  SERVICE WORKER  SERVICE WORKER

// const CACHE_NAME='cache-v1'
// const urlsToCache=[    ]

//glob- an array of file paths goes here of files we want the service worker to download and cache in the background//////////////


// 1 install
// 2 activate
// 3 claim


// const CACHE_NAME = 'cache-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/css/style.css',
//   '/index.js',
//   'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
//   'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
//   '/images/icon.png',
// ];

// The three phases of the service worker's life cycle are:
// 1. install
// 2. activate
// 3. claim

// Install - the service worker is first installed and then activated.

// self.addEventListener('install', (e) =>
//   e.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
//   )
// );

// Activate - the service worker is activated after install.

// self.addEventListener('activate', (e) =>
//   e.waitUntil(
//     caches.keys().then((keyList) =>
//       Promise.all(
//         keyList.map((key) => {
//           if (key !== CACHE_NAME) {
//             return caches.delete(key);
//           }
//         })
//       )
//     )
//   )
// );

// Claim - the service worker is claimed after install.
// When a service worker is initially registered, pages won't use it until the next load.
// The clients.claim() method is used to claim the service worker immediately.

// self.addEventListener('activate', (e) => {
//   e.waitUntil(clients.claim());
// });

// Example of a simple cache-first network-first strategy
// The service worker is checking the cache for a response and if it doesn't find it, it fetches it.

// self.addEventListener('fetch', (e) =>
//   e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)))
// );


self.addEventListener('install', (e) =>
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  )
);

self.addEventListener('activate', (e) =>
  e.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  )
);

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) =>
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)))
);

