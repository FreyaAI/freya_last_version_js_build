'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "e61f3705c58887e4b10d1b08c8fb3f9f",
"index.html": "46b180a7e62de8ec34057547a3041dfc",
"/": "46b180a7e62de8ec34057547a3041dfc",
"css/style.css": "21666d329c666f2ab26205abc59d6bf5",
"js/js-interop.js": "604146364235085fb50048e9202bd40e",
"js/integration.js": "39be0788cfda8b126de89d19fb1eb665",
"main.dart.js": "5c0845ea9f71f444402b7126fd5792d4",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "856eb0b952d5a82f17094bdfd41893c4",
"assets/asset/animation/lottie_loading_circle.json": "feace64617e13982bc1c91b35582eb47",
"assets/asset/image/image_freya_logo_svg.svg": "8c7c5166fcb8a19dbc8f29d9472e1e6a",
"assets/asset/image/image_first_onboard_second_small_combine_png.png": "632a552a0e1c33bc8d2d0626ab834366",
"assets/asset/image/image_third_carousel_container_png.png": "2fd3d94364b3191a87c1567e3c986785",
"assets/asset/image/image_icon_combine_detail_png.png": "15c4183aafbf38650756d3cd0a534ea4",
"assets/asset/image/recom_with_image/image_recom_with_image_4_png.png": "878f52472ad88a759dd317788f76316e",
"assets/asset/image/recom_with_image/image_recom_with_image_3_png.png": "b7b8d372deaf41ac67b26c6d969aa01c",
"assets/asset/image/recom_with_image/image_recom_with_image_2_png.png": "f487947cee624806210f82c83f6e7ac1",
"assets/asset/image/recom_with_image/image_recom_with_image_1_png.png": "8e7183e35c0e941727eb3e3165175538",
"assets/asset/image/image_first_carousel_container_png.png": "00e990e3b59803c91ead7dddeec6941f",
"assets/asset/image/image_chat_loading_png.png": "91f64e5e30e46571e9d750df381fbdd1",
"assets/asset/image/image_first_onboard_third_small_combine_png.png": "353845a206093f16ac746b04b71dc26c",
"assets/asset/image/image_second_onboard_first_small_garment_png.png": "e2bc56a65be3abeb7580d155a9160d60",
"assets/asset/image/image_second_onboard_second_small_garment_png.png": "5b27d50e1b05b139e4efc9d4554ee270",
"assets/asset/image/image_second_onboard_fourth_small_garment_png.png": "f0ad38ce0d606227c7ff921c40aa6615",
"assets/asset/image/recom_without_image/image_recom_without_image_shoe_png.png": "882d3a1d0fc1471f069f5423e16117db",
"assets/asset/image/recom_without_image/image_recom_without_image_straplez_png.png": "c8a613567f2fd054461704952e932b39",
"assets/asset/image/recom_without_image/image_recom_without_image_sweatshirt_png.png": "a0b781770f5f5db39fd16081eaf78e38",
"assets/asset/image/recom_without_image/image_recom_without_image_trouser_png.png": "7d9898487aca41da7d15c42dea54e109",
"assets/asset/image/image_first_onboard_first_small_combine_png.png": "f00135b72d29db6d35796b5522f23a59",
"assets/asset/image/image_icon_smile_svg.svg": "43b17038b5015b846434baab5188b7b9",
"assets/asset/image/image_icon_smile_png.png": "af179cf87b6c19b2e0524f8c328054b1",
"assets/asset/image/image_second_onboard_third_small_garment_png.png": "dc1c119894a33193ead69d2ac7e6cbb6",
"assets/asset/image/combine_detail/image_combine_detail_coat_png.png": "c76ace7aeb8d913e4310ea3ab02a09b2",
"assets/asset/image/combine_detail/image_combine_detail_tshirt_png.png": "276e73a1d979953e9ea8cfdf1cb89b70",
"assets/asset/image/combine_detail/image_combine_detail_full_body_png.png": "6f26437c745686502dfac149dfbf466a",
"assets/asset/image/combine_detail/image_combine_detail_trousers.png": "319933463ec003a6bb3abf4418243c75",
"assets/asset/image/image_first_onboard_fourth_small_combine_png.png": "1dfb5c706094af99c93eaffe46b991d9",
"assets/asset/icons/image_icon_chevron_forward_svg.svg": "0bf0d32e5a77111d7dd1725c534a27d5",
"assets/asset/icons/image_icon_get_similar_svg.svg": "4e67f67138d167c0871f06f513f1915d",
"assets/asset/icons/image_icon_logo_without_text_svg.svg": "e85010cfc3f22b8f33669812c68be108",
"assets/asset/icons/image_icon_message_send_svg.svg": "0e60fb5bf00b5f8e6dacefd20b2ca99f",
"assets/asset/icons/image_icon_textfield_smile_svg.svg": "52684c5c10408bc1741757c6cbfb9fdf",
"assets/asset/icons/image_icon_chevron_down_svg.svg": "9be701a08d1da8d064e7a6b6a9751979",
"assets/asset/icons/image_icon_pause_svg.svg": "deb3b8450d0314f2cd702243e7b281f9",
"assets/asset/icons/image_icon_chevron_back_svg.svg": "ef354052ea421265e83d829b2efcd8d7",
"assets/asset/icons/image_icon_product_create_outfit_svg.svg": "50aa1fee1f8020fea9aeeecc759738d8",
"assets/asset/icons/image_icon_chevron_up_svg.svg": "f3c6930cfc576db1d8412484538b6240",
"assets/AssetManifest.json": "ef26a684514ca587342af6b8702ffd88",
"assets/NOTICES": "b967f5936b0c9564ddc1219961c245b0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "3ec22c0ba17c9dbe594e23ec560b91ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "c2716c0888c37a8398f61cdb972c43e2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9c310f34a3f4dc1b513622997e4e1a5f",
"assets/fonts/MaterialIcons-Regular.otf": "0e6b016990cf441cfe619c31ae763c16",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "3a3f8673782d19b3a5935ae795e1eada",
"canvaskit/canvaskit.js.symbols": "ea38a11e0cd06bd815b83dcb9f9aaa5c",
"canvaskit/skwasm.wasm": "45283f64148328e0aa69abe648db5f2a",
"canvaskit/chromium/canvaskit.js.symbols": "bf65c4152b4e4a2ca4915cbc3ff32678",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.wasm": "12b9d9d6c9b96bd281170b910b21cf67",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.wasm": "e57868eee1d9a50a9b2d0c9d91dd53c6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
