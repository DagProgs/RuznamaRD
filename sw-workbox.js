importScripts('workbox-v4.3.1/workbox-sw.js');

// SETTINGS

// Path prefix to load modules locally
workbox.setConfig({
  modulePathPrefix: 'workbox-v4.3.1/'
});

// Turn on logging
workbox.setConfig({
  debug: true
});

// Updating SW lifecycle to update the app after user triggered refresh
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// PRECACHING

// We inject manifest here using "workbox-build" in workbox-build-inject.js
workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.ico",
    "revision": "f8356d20b64d7aeb2ac85873ba76ba37"
  },
  {
    "url": "index.html",
    "revision": "7afbd108586c7a12399aea321a75d1f1"
  },
  {
    "url": "manifest.json",
    "revision": "8c07e85127c047feb9e7adde45bc145b"
  },
  {
    "url": "asset-manifest.json",
    "revision": "8416ce88fa496bb627539023da695827"
  },
  {
    "url": "css/style.css",
    "revision": "5c3e269e6a40f8319045730946d8e42a"
  },
  {
    "url": "main.js",
    "revision": "80846bb3403b82a07c7f84658f186b23"
  },
  {
    "url": "polyfills.js",
    "revision": "56f34b0f4d3a42d45bfdb1782adaa173"
  },
  {
    "url": "pwacompat.min.js",
    "revision": "038770ef3eb91f3e8a50a3916cb7cf28"
  },
  {
    "url": "runtime.js",
    "revision": "cd1ce3e306bf57f272364d1cc0249d6e"
  },
  {
    "url": "update.js",
    "revision": "2e37a1e61c0f6c88bddbb61150536944"
  },
  {
    "url": "logo192.png",
    "revision": "e6ceeaa4fa693a2f5780a59cec580b17"
  },
  {
    "url": "logo512.png",
    "revision": "5df18967879c01caf9a1905a6293ec38"
  },
  {
    "url": "db/cities-areas.json",
    "revision": "f9620a19028043ff7d02496d8ce2c6ef"
  },
  {
    "url": "db/times/1.json",
    "revision": "511a25e66e13739cfa4d278f891c425b"
  },
  {
    "url": "db/times/10.json",
    "revision": "3471fbf72ce7116b6ce0452dde928b14"
  },
  {
    "url": "db/times/11.json",
    "revision": "aa2c44326cad82e5653559400f8bc7ff"
  },
  {
    "url": "db/times/12.json",
    "revision": "b91a114def84e3cf6a369db477fff088"
  },
  {
    "url": "db/times/13.json",
    "revision": "c230939032eb0ff7601e2e6499bef006"
  },
  {
    "url": "db/times/14.json",
    "revision": "2c2b3e583a89cf0ec2d933c4b25f22bb"
  },
  {
    "url": "db/times/15.json",
    "revision": "98df4866740f500cca12939a8089cc41"
  },
  {
    "url": "db/times/16.json",
    "revision": "223b9e5137594a6ca89f313e0584eb9c"
  },
  {
    "url": "db/times/17.json",
    "revision": "a82ba6850175261e59dfdda94e0713d8"
  },
  {
    "url": "db/times/18.json",
    "revision": "c65810d1ab70184f7101c865a0c73854"
  },
  {
    "url": "db/times/19.json",
    "revision": "96aebfa665bc787fc762f713c4cd66b7"
  },
  {
    "url": "db/times/2.json",
    "revision": "a56f3e234806e03388c50fb4cad7fbef"
  },
  {
    "url": "db/times/20.json",
    "revision": "9cb85841242bd6f9195dc0cce3193f59"
  },
  {
    "url": "db/times/21.json",
    "revision": "3535e44774dfe466c288bf103ce87677"
  },
  {
    "url": "db/times/22.json",
    "revision": "813da46fec6424377c55d60aca534f7a"
  },
  {
    "url": "db/times/23.json",
    "revision": "ae175de42e93ff366a6658db8bf7d69f"
  },
  {
    "url": "db/times/24.json",
    "revision": "e394580fda2532428b6dfdeb62745849"
  },
  {
    "url": "db/times/25.json",
    "revision": "36c7345d68079bec99eb7a0e36509884"
  },
  {
    "url": "db/times/26.json",
    "revision": "f1f216a9c11e9c0bd15a37b19531599a"
  },
  {
    "url": "db/times/27.json",
    "revision": "aa9e5d8f3e8c5784f1114d2d855818d3"
  },
  {
    "url": "db/times/28.json",
    "revision": "0afb798ef87569ee7e603413faecaad8"
  },
  {
    "url": "db/times/29.json",
    "revision": "69bed5dea9b03f0f39748f4bc11a570e"
  },
  {
    "url": "db/times/3.json",
    "revision": "e25b3955bf623b9de549e2f67ec453b8"
  },
  {
    "url": "db/times/30.json",
    "revision": "ac0cf4551b174d423ceabd202fc01afc"
  },
  {
    "url": "db/times/31.json",
    "revision": "eb154785d2cdce13974df40eb1c7c8dc"
  },
  {
    "url": "db/times/32.json",
    "revision": "e2b81d43e4d226df790af245d30f0091"
  },
  {
    "url": "db/times/33.json",
    "revision": "a38265dc8dbdefd2268a7ccbe7e9f87a"
  },
  {
    "url": "db/times/34.json",
    "revision": "0205b3c7fe6c1754d33feb3beef6804d"
  },
  {
    "url": "db/times/35.json",
    "revision": "b886f6acfdc32cfe3ac42912fe6128ff"
  },
  {
    "url": "db/times/36.json",
    "revision": "cf3e1cc024e4408aaa09d34bb0e97b24"
  },
  {
    "url": "db/times/37.json",
    "revision": "786ecbba94866cffd017e7c48f9be151"
  },
  {
    "url": "db/times/38.json",
    "revision": "207767acabfedf7776f783f04b9a1530"
  },
  {
    "url": "db/times/39.json",
    "revision": "12331d23ffbf7d263d225f4bd6b7dfc7"
  },
  {
    "url": "db/times/4.json",
    "revision": "a9097ab8c1f640b8cc77fa4dc7525eb8"
  },
  {
    "url": "db/times/40.json",
    "revision": "69bed5dea9b03f0f39748f4bc11a570e"
  },
  {
    "url": "db/times/41.json",
    "revision": "ca1a9e2c86761c013261ef5f47633461"
  },
  {
    "url": "db/times/42.json",
    "revision": "8a578c8f9b7092049456802cd4f62741"
  },
  {
    "url": "db/times/43.json",
    "revision": "45af977e75b5b9a3248d88164063fab3"
  },
  {
    "url": "db/times/44.json",
    "revision": "0835a47e603c1a64259ad3e35016596b"
  },
  {
    "url": "db/times/45.json",
    "revision": "821f8c0f546f701ab37f4213d4718328"
  },
  {
    "url": "db/times/5.json",
    "revision": "3f371dead0b1200099dd65978ee4ad97"
  },
  {
    "url": "db/times/6.json",
    "revision": "121eb0bcd4ada4bfb9bf75422facdf43"
  },
  {
    "url": "db/times/7.json",
    "revision": "1b88fb1cdfed8032599f61cd0be22097"
  },
  {
    "url": "db/times/8.json",
    "revision": "17279f0f03f427306cd91e798042382e"
  },
  {
    "url": "db/times/9.json",
    "revision": "3a6202b7119f3ef22bb1749fd1182dec"
  },
  {
    "url": "static/css/main.092bfef1.css",
    "revision": "c41121cbac94f6519e7b2719d0b89cde"
  },
  {
    "url": "static/css/main.092bfef1.css.map",
    "revision": "78bed488ef175d3bcca7a6f09c068469"
  },
  {
    "url": "static/js/main.b17c2fbc.js",
    "revision": "0920a47001d8d47009f42920d081aae9"
  },
  {
    "url": "static/js/main.b17c2fbc.js.LICENSE.txt",
    "revision": "cccfa45cda3f72c4ebb3fb2f4ba53a71"
  },
  {
    "url": "static/js/main.b17c2fbc.js.map",
    "revision": "383b76bdbf17f1a6c415869f180d21b0"
  },
  {
    "url": "img/icons/icon-128x128.png",
    "revision": "aaaccf4eb884ba2c8d2812bc491b1278"
  },
  {
    "url": "img/icons/icon-144x144.png",
    "revision": "971fe3a36b7f91268a3deacaa293d238"
  },
  {
    "url": "img/icons/icon-152x152.png",
    "revision": "ec1781c62885fee6e48b674fd99fd38c"
  },
  {
    "url": "img/icons/icon-192x192.png",
    "revision": "d34bebd983acf84fbf11ecef805ab991"
  },
  {
    "url": "img/icons/icon-384x384.png",
    "revision": "002d467697dca30022f11bb585a1249f"
  },
  {
    "url": "img/icons/icon-512x512.png",
    "revision": "fa9307a9b8c721888769231d40402ded"
  },
  {
    "url": "img/icons/icon-72x72.png",
    "revision": "84cb421718418b590d98b31184ad9e49"
  },
  {
    "url": "img/icons/icon-96x96.png",
    "revision": "788563e44b4b1d0136dd5687ffcb7a66"
  },
  {
    "url": "img/screen.png",
    "revision": "21909f0bd0f04a0c9873d2abe38a82db"
  }
]);

// RUNTIME CACHING

// Google fonts
workbox.routing.registerRoute(
  new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'googleapis',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30
      })
    ]
  })
);

// API with network-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)timeline/,
  workbox.strategies.networkFirst()
)

// API with cache-first strategy
workbox.routing.registerRoute(
  /(http[s]?:\/\/)?([^\/\s]+\/)favorites/,
  workbox.strategies.cacheFirst()
)

// OTHER EVENTS

// Receive push and show a notification
self.addEventListener('push', function(event) {
  console.log('[Service Worker]: Received push event', event);
});
