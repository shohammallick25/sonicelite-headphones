const cacheName = "sonicelite-cache-v1";
const assets = [
  "./",
  "./index.html",
  "./main.css",
  "./fonts.css",
  "./script.js",
  "./manifest.json",
  "./images/Sony-WH-1000XM4-B.png",
  "./images/Sony-WH-1000XM4-W.png",
  "./images/order-img.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
