self.addEventListener('install', (event) => {
  console.log('I am installed!');
  console.log(caches);
});

self.addEventListener('activate', (event) => {
  console.log('I am activated!');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(new Response('Hello world!'));
});