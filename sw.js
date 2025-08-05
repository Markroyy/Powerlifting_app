const CACHE_NAME = 'powerlifting-v1';
const urlsToCache = [
    './',              // Changed from '/' to './'
    './index.html',    // Made relative
    './manifest.json'  // Made relative
    // Removed 'app.js' since you don't have this file
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
