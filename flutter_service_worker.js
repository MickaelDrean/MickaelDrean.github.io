'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-512.png": "4c760115bd841a602e441ea349fa37e0",
"icons/Icon-maskable-192.png": "e9f836ce3e007e44c37633d1a78a7255",
"icons/Icon-512.png": "3a0d763411753bc6fb68525e8eba0db3",
"icons/Icon-192.png": "e48de45a2366b0c4bcff23964df27b21",
"manifest.json": "ed0e9854775aac57af882d70e0572d11",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "21857973a782bb07d2a127888b227faa",
"version.json": "af34a2d7b3f0a6a4c310b49d497b5b9c",
"favicon.png": "d0239789fe665a20ba5516876aa6dd6d",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/NOTICES": "e01d1261ee6e4b132113025e987e3c67",
"assets/AssetManifest.bin": "6f52dcf9c5231b07567b9314b31fdf7e",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/AssetManifest.bin.json": "2b9daa030a46bac7c6e1da0e0c053ac4",
"assets/assets/logo.png": "b0842a081da65c324a122a7e1d61deb1",
"assets/assets/danse_icon.png": "86f412b277e052b60e721ba03ddbee13",
"assets/assets/portugese.png": "43f2ff9e7759db969836d582ddb124d6",
"assets/assets/cfg/app_settings.json": "7d68c8a50c19dcf63fbbc8d1b3e18715",
"assets/assets/spanish.png": "f54a4d62d5f0b70d478170d636ca6f3d",
"assets/assets/french.png": "cb5833b57e88ceec5dd9b577067f8de8",
"assets/assets/json/ERTMED-PrototypeDataModel-LocalFiles.json": "bc3ef7c5e3cf2d036032726103d1b8c1",
"assets/assets/json/AnimationDefault.json": "8885b149fe6422ef3a2f3bd8736d0031",
"assets/assets/json/DemonstrationsMED-DataBaseDataModel-OnLineFiles.json": "a8d5020dd5cdc83f0752f72a6c0a938a",
"assets/assets/json/CatalogueMED-230614223321.json": "e7af9e92d05d09b2d475a04755b5e603",
"assets/assets/json/ERTMED-PrototypeDataModel.json": "9ceec377a035eb88e7806609aa80d376",
"assets/assets/json/DemonstrationCatalogueMED-230627064605_old.json": "0e05bbab6fce7c3d62147507bd6c721c",
"assets/assets/json/AnimationDefaultSession%2520CIMEB.json": "e144d9ba35c7a6fc29716927769c7077",
"assets/assets/json/CIMEB2012-PrototypeDataModel-OnLineFIles.json": "a272b29529bf5f30b78d29bde4ec036f",
"assets/assets/json/DemonstrationsMED-PrototypeDataModel-OnLineFiles.json": "2991ee6aca9c15b630576f61ba51d686",
"assets/assets/json/CIMEB2012-PrototypeDataModel-LocalFiles.json": "f3f869df96b8e2a798ff8df505dc4782",
"assets/assets/json/AnimationDefaultSession.json": "757e759a23fa05e1e51f5166adb9e15b",
"assets/assets/json/ChangeLog.json": "21beb5f7f6812e1e6acc5b6e9e9fb353",
"assets/assets/json/TestSession.json": "96c1e5d916c2271a2ec7e0e599975bb8",
"assets/assets/json/CIMEB2012-DataBaseDataModel-OnLineFiles.json": "b4a9401a9636e3b5ea795d7cda0d902a",
"assets/assets/json/DemonstrationsMED-PrototypeDataModel-LocalFiles.json": "d1d10eb31c4a98c4a6cde4d588f073fc",
"assets/assets/json/CatalogueMED-240531161808.json": "85f0aa7fa7fdd4e2f1d67869985c7292",
"assets/assets/json/sample.json": "1df72fe9166a8d20a6b8addf525a0fb0",
"assets/assets/json/ERTMED-PrototypeDataModel-OnLineFiles.json": "b5f4963a2e0fc6b216a82858068fdd3b",
"assets/assets/english.png": "015a5fdbb9c32f341aac4d2084c462a0",
"assets/fonts/MaterialIcons-Regular.otf": "024f54a8fd358965b580ccd21504dfb4",
"assets/AssetManifest.json": "3a5e000ce9a2150ff793e9a9c53dc497",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"index.html": "21c29967ad4a78afbc06baf04c3c2af2",
"/": "21c29967ad4a78afbc06baf04c3c2af2",
"main.dart.js": "df993d5c60827dc8c6f85c8d36b3bf95"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
