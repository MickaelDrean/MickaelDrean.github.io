'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.js": "6f5aef66cc745774d403c5c012183a4b",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/AssetManifest.bin": "cca2107c581945aa0275acc13f5e0dc6",
"assets/fonts/MaterialIcons-Regular.otf": "21a0890421af7d3eb678640c21ca9300",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/assets/json/sessions/AnimationDefaultSession%2520CIMEB.json": "e144d9ba35c7a6fc29716927769c7077",
"assets/assets/json/sessions/TestSession.json": "96c1e5d916c2271a2ec7e0e599975bb8",
"assets/assets/json/sessions/AnimationDefault.json": "8885b149fe6422ef3a2f3bd8736d0031",
"assets/assets/json/sessions/sample.json": "1df72fe9166a8d20a6b8addf525a0fb0",
"assets/assets/json/sessions/AnimationDefaultSession.json": "757e759a23fa05e1e51f5166adb9e15b",
"assets/assets/json/demoCatalog/DemonstrationsMED-PT-PrototypeDataModel.json": "e478a43a20732decf7e382323f7f9c99",
"assets/assets/json/demoCatalog/DemonstrationsMED-DataBaseDataModel-OnLineFiles.json": "a8d5020dd5cdc83f0752f72a6c0a938a",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel.json": "fa75035e1c29293537a2a8effa84d4fa",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel-ForEBB.json": "041293f357204b6e6a8007f65249999f",
"assets/assets/json/ChangeLog.json": "ff2e23e15ccca3e118badd2663a1f865",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC.json": "983522ce11b07d911d7a060f10310cf3",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel.json": "00a666d007c4999e91086ced9e25b00e",
"assets/assets/json/catalog/CIMEB2012-PT-PrototypeDataModel.json": "c7d7229c2033d63bef1ddeaf437bf033",
"assets/assets/json/catalog/CIMEB2012-PrototypeDataModel.json": "508df9bd5bbe6752db3ab5b92e7edb63",
"assets/assets/json/catalog/EBBA2024-PrototypeDataModel.json": "f910af8c0d7e974bb7bcff1ad94bd820",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-Windows.json": "894862374752ea10ba18bdadbdedc8e3",
"assets/assets/json/catalog/MIN-PrototypeDataModel.json": "ae14edfe6f8e158d4b6b2c44d8f7b360",
"assets/assets/json/catalog/CIMEB2012-DataBaseDataModel-OnLineFiles.json": "3aaa3331923a199f7cafcdbadec5bd06",
"assets/assets/json/catalog/EBB2022-PrototypeDataModel.json": "c4efeb19a141f435a3f089d15e9aafe9",
"assets/assets/french.png": "cb5833b57e88ceec5dd9b577067f8de8",
"assets/assets/english.png": "015a5fdbb9c32f341aac4d2084c462a0",
"assets/assets/portugese.png": "43f2ff9e7759db969836d582ddb124d6",
"assets/assets/spanish.png": "f54a4d62d5f0b70d478170d636ca6f3d",
"assets/assets/cfg/app_settings.json": "19fce4850ccf8550a66c9fb349ade815",
"assets/assets/cfg/hash.txt": "95a75920945c74b9fbf4364f9a8a2abf",
"assets/assets/danse_icon.png": "2a102bd1e4a47de910497ceb623491e0",
"assets/assets/logo.png": "b0842a081da65c324a122a7e1d61deb1",
"assets/NOTICES": "9c5652d53ec5ea2d1ee5d3e11b485e28",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "893d9bbe72ab32d30673e2c47f9788db",
"assets/AssetManifest.bin.json": "897296b4ee095b0350585852ca8b6fc3",
"index.html": "335f88bdb0385c9c43abda72c01bc072",
"/": "335f88bdb0385c9c43abda72c01bc072",
"manifest.json": "ed0e9854775aac57af882d70e0572d11",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"icons/Icon-maskable-192.png": "e9f836ce3e007e44c37633d1a78a7255",
"icons/Icon-192.png": "e48de45a2366b0c4bcff23964df27b21",
"icons/Icon-512.png": "3a0d763411753bc6fb68525e8eba0db3",
"icons/Icon-maskable-512.png": "4c760115bd841a602e441ea349fa37e0",
"favicon.png": "d0239789fe665a20ba5516876aa6dd6d",
"version.json": "af34a2d7b3f0a6a4c310b49d497b5b9c",
"flutter_bootstrap.js": "0c5a2705bd96daa163a228b2dfca13a4"};
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
