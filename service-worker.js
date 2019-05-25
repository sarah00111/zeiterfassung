console.log('Hello from service-worker.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

//Vor den eigenen Routen
workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
    /.*\.(js|html|css|json)/,
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    /.*\.(ico|eot|woff|woff2|ttf|svg)/,
    new workbox.strategies.CacheFirst({
        cacheName: 'icon-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 7 * 24 * 60 * 60
            })
        ]
    })
);