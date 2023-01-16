const assets = [
  "/",
  "index.html",
  "js/registro.js",
  "json/manifest.json",
  "img/logo.png",
  "img/test.jpg"
];
var cacheName = "GabbDev";

/* El código anterior está instalando el trabajador de servicio. */
self.addEventListener("install", function (event) {
  console.log("El servicio de trabajo está instalando");
  event.waitUntil(
    caches.open("mi-cache").then(function (cache) {
      return cache.addAll(assets);
    })
  );
  self.skipWaiting();
});

/* Este es el código que está manejando la solicitud. */
self.addEventListener("fetch", (fetchEvent) => {
  console.log(
    "El servicio de trabajo esta manejando la solicitud de:",
    fetchEvent.request.url
  );
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});


/* Borrando el caché antiguo. */
self.addEventListener('activate', event => {
  console.log("Borrando Cache");
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.filter(cacheName => {
        return cacheName !== "mi-cache"
      }).map(cacheName => caches.delete(cacheName))
    ))
  );
});