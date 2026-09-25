// Nama cache dan daftar file yang akan disimpan
const CACHE_NAME = 'geotalk-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/style.css?v=1',
  '/assets/script.js?v=3',
  '/assets/geotalk.png',
  'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'
  // Anda bisa tambahkan file font atau gambar lain jika ingin bisa diakses offline
];

// Event 'install': Dijalankan saat service worker pertama kali diinstal
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache dibuka');
        return cache.addAll(urlsToCache);
      })
  );
});

// Event 'fetch': Dijalankan setiap kali ada permintaan resource (misal: gambar, css)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Jika resource ada di cache, kembalikan dari cache
        if (response) {
          return response;
        }
        // Jika tidak, ambil dari jaringan (network)
        return fetch(event.request);
      }
    )
  );
});

// Event 'activate': Dijalankan untuk membersihkan cache lama
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
