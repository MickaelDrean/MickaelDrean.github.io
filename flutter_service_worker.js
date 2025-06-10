'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-maskable-192.png": "e9f836ce3e007e44c37633d1a78a7255",
"icons/Icon-192.png": "e48de45a2366b0c4bcff23964df27b21",
"icons/Icon-maskable-512.png": "4c760115bd841a602e441ea349fa37e0",
"icons/Icon-512.png": "3a0d763411753bc6fb68525e8eba0db3",
"assets/fonts/MaterialIcons-Regular.otf": "e72ba4fcd4bfc1ebe3c0de0c04aa235a",
"assets/AssetManifest.bin.json": "0fd9335ede5c9dd91b45c3889d92a929",
"assets/AssetManifest.bin": "9477fdf59b59ba3b2b2fc93c442db966",
"assets/AssetManifest.json": "303797dd4a53e6b72f15bc6da104b7b0",
"assets/assets/danse_icon.png": "2a102bd1e4a47de910497ceb623491e0",
"assets/assets/english.png": "015a5fdbb9c32f341aac4d2084c462a0",
"assets/assets/logo.ico": "d78d77f0629f4bbb936daa5de178b2d6",
"assets/assets/json/ChangeLog.json": "429ecd0aa15d00a0b74ceeeb04f975ce",
"assets/assets/json/sessions/Les%2520couleurs%2520de%2520la%2520rencontre.json": "486dfa0bd4babcc8024cb5e42c41965d",
"assets/assets/json/sessions/AnimationDefaultSession.json": "757e759a23fa05e1e51f5166adb9e15b",
"assets/assets/json/sessions/TestSession.json": "96c1e5d916c2271a2ec7e0e599975bb8",
"assets/assets/json/sessions/AnimationDefault.json": "8885b149fe6422ef3a2f3bd8736d0031",
"assets/assets/json/sessions/AnimationDefaultSession%2520CIMEB.json": "e144d9ba35c7a6fc29716927769c7077",
"assets/assets/json/sessions/sample.json": "1df72fe9166a8d20a6b8addf525a0fb0",
"assets/assets/json/catalog/EBBMED-PrototypeDataModel.vab": "f7e648a6a3300696eef7494084432be3",
"assets/assets/json/catalog/CIMEB2012-PT-PrototypeDataModel.json": "1df2197e35e9fcf3f571f2337e9259f0",
"assets/assets/json/catalog/CIMEB2012-PT-PrototypeDataModel.vab": "9bf302b9acf002fd676972b9de51774a",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC.json": "93b10dd5a1eac983d193d5a8bcf5177a",
"assets/assets/json/catalog/MIN-PrototypeDataModel.json": "f6e27e2be1c25f6ae8f6012d0c0d6204",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel.vab": "e9690d7d289f74ab80600a67b9149e93",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-Windows.vab": "160671628809aa2e21958a2037d566fd",
"assets/assets/json/catalog/MIN-PrototypeDataModel.vab": "96362558f285af23c6ee5a43cc2fbe71",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-FLAC.vab": "d166968811579a43cdbdd07c1d5aafa4",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel-Windows.json": "dadb04622eb66aa945c2a3bb70eae167",
"assets/assets/json/catalog/CIMEB2012-ES-PrototypeDataModel.vab": "dc8fa816d7a132fb61e395f9e5ad2cb9",
"assets/assets/json/catalog/CIMEB2012-EN-PrototypeDataModel.vab": "fea2b9a0dbfe8582be66cc55a9184f90",
"assets/assets/json/catalog/MEDMETHODO-PrototypeDataModel.json": "d47936b13ae686d123b61d83069e5041",
"assets/assets/json/catalog/EBBMED-PrototypeDataModel.json": "9147a7f08c71c05a143f1c3d678d1785",
"assets/assets/json/catalog/CIMEB2012-PrototypeDataModel.vab": "e50f1efc049a4d9de614188f65f3dbbb",
"assets/assets/json/catalog/MUSICTEST-PrototypeDataModel.vab": "d108abfeb66802fdb614c3b5d750f46c",
"assets/assets/json/catalog/MUSICTEST-PrototypeDataModel.json": "bb9edbaad308ad1f0c37d2c1e079ec09",
"assets/assets/json/catalog/EBB2022-PrototypeDataModel.vab": "f65b9e1ca17bc577b2840403e34d9775",
"assets/assets/json/catalog/CIMEB2012-PrototypeDataModel.json": "13588393605442162162760252d5b7c7",
"assets/assets/json/catalog/MEDMETHODO-PrototypeDataModel.vab": "7eaf81eb9c7f5426493eeaaa9d167274",
"assets/assets/json/catalog/EBBA2024-PrototypeDataModel.vab": "3761b3339303b585434bbf1c117c9ab5",
"assets/assets/json/catalog/EBBA2024-PrototypeDataModel.json": "1292502765aa5bf877c79cc59b87a033",
"assets/assets/json/catalog/ERTMED-PrototypeDataModel.json": "7bebe005dab67b3f2666e78d26b79a5e",
"assets/assets/json/catalog/EBB2022-PrototypeDataModel.json": "680989125ed055584475b93162d60700",
"assets/assets/json/catalog/CIMEB2012-ES-PrototypeDataModel.json": "37caa7352c1b632653ae8ed16053fed9",
"assets/assets/json/catalog/CIMEB2012-EN-PrototypeDataModel.json": "02c7f0192cb4b05a7ede4087770d796b",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel.json": "c7db571d03b12f4a9f50d67c590af738",
"assets/assets/json/demoCatalog/DemonstrationsMED-PT-PrototypeDataModel.vab": "132b719f6b9b7ad1149a14508bd33645",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel.vab": "4d4e780b48ade3da65a292bf1bfa8d03",
"assets/assets/json/demoCatalog/DemonstrationsMED-EN-PrototypeDataModel.json": "a0f6812472310de980b12a7aadfe01a8",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel-ForEBB.vab": "98c15e339853ddf9154e83eb4fcc20ce",
"assets/assets/json/demoCatalog/DemonstrationsMED-PrototypeDataModel-ForEBB.json": "21344b571d871127b2924a0117249636",
"assets/assets/json/demoCatalog/DemonstrationsMED-ES-PrototypeDataModel.json": "5abd92a8fa9fb56c53064098fa6ef11d",
"assets/assets/json/demoCatalog/DemonstrationsMED-PT-PrototypeDataModel.json": "0c88adb5a384bb81db041e614b61ed44",
"assets/assets/json/demoCatalog/DemonstrationsMED-ES-PrototypeDataModel.vab": "ce60cc0d34c73f132bb0054392b78072",
"assets/assets/json/demoCatalog/DemonstrationsMED-EN-PrototypeDataModel.vab": "4472e5ca2981151a1a6c9ae5332e5880",
"assets/assets/spanish.png": "f54a4d62d5f0b70d478170d636ca6f3d",
"assets/assets/portugese.png": "43f2ff9e7759db969836d582ddb124d6",
"assets/assets/help/pt/troubleshooting.md": "8c0d9c28839f95c1eacc82197bcbc2ac",
"assets/assets/help/pt/license.md": "d686d6b2e2a33398d79ac5282ab9aef3",
"assets/assets/help/pt/images/image_license.png": "54c5e9907d43613e5283c3675ede0133",
"assets/assets/help/pt/features.md": "febad71f85796280832564a896b21cc4",
"assets/assets/help/fr/troubleshooting.md": "a7f66f8c9bc5bd630ff65e9f105cef08",
"assets/assets/help/fr/license.md": "e577d8decf879d9c6f91bc641de3de31",
"assets/assets/help/fr/images/image_license.png": "e1509479283861b7d675a939bb5f69af",
"assets/assets/help/fr/features.md": "bf4a286f6ec4998c32d4e020a6cca52c",
"assets/assets/help/es/troubleshooting.md": "8c0d9c28839f95c1eacc82197bcbc2ac",
"assets/assets/help/es/license.md": "d002bdd984dd7d9b49edcf8807cbfc12",
"assets/assets/help/es/images/image_license.png": "3ce2f96441aa93d63df8ab646c7abbec",
"assets/assets/help/es/features.md": "9f31d073509a62a8972d61b8462e2905",
"assets/assets/help/en/troubleshooting.md": "97fcefb4ca46d8b694235f5242111d7c",
"assets/assets/help/en/license.md": "718585c3c3576424e667fb0b658899b2",
"assets/assets/help/en/images/image_license.png": "161541618cee683d6713120a9f9f2321",
"assets/assets/help/en/features.md": "67c2d065d0496d4df34bfa189a328e4e",
"assets/assets/french.png": "cb5833b57e88ceec5dd9b577067f8de8",
"assets/assets/cfg/hash.txt": "8a1941edf6beaf04dcc6728b4927e3b0",
"assets/assets/cfg/app_settings.json": "cde0ec0c0ea99b148be0122daa3de650",
"assets/assets/cfg/license.dat": "77240a09f9ddacd9d205dab90afaa9c5",
"assets/assets/logo.png": "aa97a13df4ef89389d36d2416475c688",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/NOTICES": "c3069dae67dd56b7c94c4d6d112124e4",
"main.dart.js": "2792b53ecbec57aa57b6adefc614c61b",
"manifest.json": "ed0e9854775aac57af882d70e0572d11",
"version.json": "af34a2d7b3f0a6a4c310b49d497b5b9c",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"flutter_bootstrap.js": "306955413cc9422ba6482afd9f2c6592",
"favicon.png": "d0239789fe665a20ba5516876aa6dd6d",
"index.html": "335f88bdb0385c9c43abda72c01bc072",
"/": "335f88bdb0385c9c43abda72c01bc072",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
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
