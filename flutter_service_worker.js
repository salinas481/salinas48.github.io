'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1702252a1138ca45a49c2b0910c686aa",
".git/config": "474c206fca9abb85b8ab7285867caf1e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "faad0cba9ab880e27a8eefd2dffa4acb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "43163fcdeb6d6742d74f5270ab2082d6",
".git/logs/refs/heads/main": "bd476675f4abc7bfd6dba659371cc1c9",
".git/logs/refs/remotes/origin/main": "354f73a995f0a64535372184459ae2d1",
".git/logs/refs/remotes/sebas/main": "9ad96da8de38fb14cb14821269920cc2",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/002fcec44defb97c38269862df030111819ee3": "d5e8336f1262e6a455bd51e76a67396c",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/e473947b5452468e564a359ee73ad419a6d73b": "e5d12ee9350a903bfd9b67595e3c7228",
".git/objects/19/e4e3b7651d3db05969648cc0dd53d6708df503": "f4bcdab4deb8c3d96f2d231c30b919c2",
".git/objects/1a/8a8c6f98da19390214a96b66fe3378e5db5548": "d137d2b1174fa44f4eda0d3a38850405",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/7ca094efafe07cae007fc335093cb15b0fd7c3": "95c6bb08f528520e29112172e19c5374",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/45dc25eb700063933aed6ebb8ec0d6b05f4fac": "03945ceea49eeaec1027b998ff241cc2",
".git/objects/22/b0047039ac857a2626a89fc0c18858c6c1e65e": "6c5399e3ed061d3bbba66cd52020d389",
".git/objects/23/c68972a539b5ce436487ba08b6f051ce8008db": "e1abe4fe0558e75a455b5cb7a3f465ae",
".git/objects/26/7530918e1f2f8b7b32944ed6bc1898b51b6717": "940bdc613a94b004b3114f3c48b0b55b",
".git/objects/27/fed0f4c4d2703fb2ea80719797a5dd26cf7b27": "82aeeef853a16849b716d8f7fc60d9a3",
".git/objects/28/c358698aa8e4675b69bc78d89b75cef532a90b": "dd9a6ce3d02f43f3c232ab147183248c",
".git/objects/2d/b97dd82b37c4c0b94e193684fabdceb6c73f50": "0424dc08c505326cf2447287b8706faa",
".git/objects/2d/c3e7bff652bb0d579f1130c168444fae703a58": "a2e534e6bc4041ddd962e546e0a133ef",
".git/objects/30/7ef5c8758a49c02a9a302eb2a820b8005b49f0": "de476689dab5c977a7bbc47a08af276d",
".git/objects/32/a0930901acc15da04d4f0c71561abe460922c4": "7f04012900790709886ee4c39fc2fd1e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/29f2ddd00f909a09d172bcd8802d4298182381": "d455c730c7101eff3bfc28cb7cf65dd2",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/6a3258d1c22f00e434e0f41cfdbd623761c093": "9f40c2fda5ed72431e9a2010c47ce934",
".git/objects/3c/a0a28a20ea206cd3b7ed35d293a4ea4c1f5e9e": "a6fd24d2b9d6df57801d8c94f275347a",
".git/objects/3d/adcacb2781f16c39591c9b7600bdc66c465c9b": "5663e3a7b62d25d2de456daaeb6d8985",
".git/objects/3e/bed4ab86684d9d746101c1dca579d2273f8a83": "eb86b3f0a7b45ca435417ac6aeae53c8",
".git/objects/40/928ff4a7c1f46a78f05857d93c83352dabb930": "3e337fa7787a04019a6bcf9e2c6114d8",
".git/objects/41/2cd9336b89b0ee6d618947ee7315b4472ed00d": "b3e7850435e8a64eb091e26fe603e218",
".git/objects/45/75bd6e97d653e3c01498db97790fc8c2c25071": "bf2cb8eba08a9c201c99844de110b1e3",
".git/objects/46/6a352e964938cf068e1122cd8fd0f99231a2af": "47b8a02ce88ff0ed99c64bd870f55b94",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/5b/90a5c2cd65757d6f0b3156252fbb063463c39c": "e2d75f5d685128b59bdbfcfc4dab40e7",
".git/objects/5e/6fb715a5515f7d29279acdf8829da98d5ef872": "b64eb255a4820a295479e296524ee6ba",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/68/10f35793ee62b3312cf9b96158f5ddad9b7151": "5d2562e503afc8a8df61910fcd681335",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/e7d257757eadca923e690c2eb124426230935c": "4fd550d6fa0d5a816af95e1a48a79f73",
".git/objects/7a/58a85997e98ffbe3334f33a10653b47307603d": "57bb26d0dffeef99c82ebdb8aa347bd9",
".git/objects/7b/5ee1454bf42bd754e69cedaf4e2313ff6b6b30": "c0ab25b2256723018bd3cc7e5105f771",
".git/objects/7e/743cbb18b4c864b0aa7f8a1cbf7cc9e99cf7e4": "0b36df78f7f8fe5a1c3df949dffce755",
".git/objects/7e/ee34a804d8dfa3f4efa9b0abcf8a0fd436321e": "f7448db7850cc4d4faab323b7ab5e06f",
".git/objects/83/aedc294f7cbb1d21874e0505982c52666e3b15": "43774556c82af41ff914ddb27c5430d9",
".git/objects/87/3fd5078972a337c1a046160e1bd03cf948176d": "7b5bb4f0411be48de0ff3c646beefd68",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/6eda8fa314b4ec1f5f560d8c1b11a12178c79a": "7b9a98f3e2f2b8c529695ade6e3333a3",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/e74ba28a87488e5680af5f34ca5f6ed491bab4": "87a0d9b5f907034e2e617e812111c092",
".git/objects/98/0816b2557c0f55bd4bc2c9be32de4bfc68d4ac": "35f8b14ebd1786c2e6053cb20cc7eb81",
".git/objects/9a/e754c14d1747b4e5e04f35040cafd9827f0d91": "0a7d0900596f63f27af3d675abaeb731",
".git/objects/a0/6180316fdc56f5bbfbde9a22cc9dd9e410771a": "1c10f649319c7f86fff178fd718b46ff",
".git/objects/a0/bd5735f86c841e8433af2e48257f13defdfa6c": "b626c8e3e8209058971a84fa3f9dfdd9",
".git/objects/a1/4e5adf0ad8e7d7b8f3d704f3af53d785c36dde": "84e11230f414a6174dcfd7ea16f5c119",
".git/objects/a4/07b1dbf1e71f849da5fed14a754c7a7d41c27d": "01627cd468a90f3b35bed589cc5a8caa",
".git/objects/a6/661a3a1c1894fe4a04e0f6ef4cefd93946837c": "971c6e208d504a61d3f401c027e20af8",
".git/objects/a9/2fb23d89ba7ca0437516010281b394f9216141": "2d9ab3ac52263ca6352335d632c70845",
".git/objects/a9/cc8615e967eb94eecb770d44584d84883ab49e": "e784147720060d63fe8f4ae98dff272a",
".git/objects/aa/456612494733836376f59d5a03be7947e4af41": "0f60c43c64be36c6ebeadcfb8ef2894a",
".git/objects/aa/8e017b151e015ec55606a3b14aa7f910e1ffd9": "1e2e37c64cc5cfce348074fe3d4d61c8",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/7eab0dc092ec4958b5a1c251e5f542f0fc8286": "514c2f958ca1b34e0ad1d8868a293985",
".git/objects/b5/fabef2c301a74f884d9cbe1850316af40b4366": "d7baace98090ed8d3011a3339af53f5d",
".git/objects/b6/ac9f59b8167de5c341151270fe45a37d21393c": "e9aa156a3430b916b2d4c682cd92c329",
".git/objects/b7/038838c0776b48b26aa6ce70f24269186a9119": "e8dea0834c69794226b7d887fb7330e0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/83bb00d3a0f5cb7fc5f8a40a2633b474827f74": "d47e4ee443fe3ddda87437e227eca5ac",
".git/objects/b8/326b1b22dc825bf85786c715f41efc4c15f095": "cef8ff2ad8beffa5a9249036682ee246",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/122e576f916a33c87254075fb4501486275ace": "f0e2c27104d01a3be6420890d9c8b4ad",
".git/objects/c4/09d169b3f79741a954025e7c65a114232be2db": "06a72ba0e158f980a90ce877290c7c20",
".git/objects/c5/e5a27952f04981e205850b5e00b102939e143e": "7722644a3a142df5c4a4e9e7505bc109",
".git/objects/ca/b21cde5008c7b298c4aace777e599b7bd0c0fa": "9065e264e7b2259df94a1e2d8f3eca1a",
".git/objects/cd/24c7ea495af4d8e2269df3866abbd07d99096e": "1b93f7888cbfdbcd9da13f85f315a5fb",
".git/objects/cd/57847751280c9148f4dac815ce1f370fd85398": "fc9fe727b968702ccda4984c2c50c063",
".git/objects/d0/e5f91904c2cd8d8d7952c3871ddb546aa2e4c1": "108de7f8503c2a440a4143c1ddecab64",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/03f6bff50f0b08310ad0a686e692d95825f60f": "dbfe18cfc8b926a1ed0c12c612f61a65",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/50d6b3833a6a142060825fee4d327daeeb2e9a": "261c3d4795d5dd9b0f17202fdff99395",
".git/objects/d7/e6a54552bdc3fc9323964e10ad7c808c97ea2b": "74608b00fd56cde87267fbcfcd1183b1",
".git/objects/da/8d12617c47dbff26bb9a601838f76d949808db": "adbc96f8ea9918b8d17a68fd6c45979e",
".git/objects/da/eec51fdb252c28ceadd7352544374ae9a23f80": "98e56aa0d2817cb378ac4c846b65d9db",
".git/objects/e9/789295734269d9d35071793707bc858f816668": "179751874b7d03eb3586e7ec904320cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/7504bb0c2a8dcbeee79373e97babd0bf1ccaaa": "0dd9be34091dc18337e7bdd14b7020dd",
".git/objects/f0/b2cb32ec3b2d43f19840b4ac108d5c36f3261e": "837fa75c464b05e21855d725ee3a47cb",
".git/objects/f7/6eae46923b64704917781629164acaaca24dee": "5a358138ac3a51ff71cff3ec69b73b07",
".git/objects/f9/11bce4f9f65b0f8e7c4fffb63a4082f3eb1086": "3af5b089b5ea5b70c1f093fb43d0a076",
".git/refs/heads/main": "c1f378da8ef11cc51bba68d79a6b0a99",
".git/refs/remotes/origin/main": "c1f378da8ef11cc51bba68d79a6b0a99",
".git/refs/remotes/sebas/main": "61199a001abb0893e464fca7f658b819",
"assets/AssetManifest.bin": "e96ad86b5f1f2cb647d7acc02ab9e6c1",
"assets/AssetManifest.json": "21e9f07409c5b9129d969e59d57fa719",
"assets/assets/fonts/Montserrat-Italic-VariableFont_wght.ttf": "c7ef29737ac0c81becc51ffbd2d6feed",
"assets/assets/fonts/Montserrat-VariableFont_wght.ttf": "a3fcdff002f26cdf718968593b0d9e47",
"assets/assets/logo.png": "86159a222839399f61cc5c6bf3e15baa",
"assets/assets/mderecho.png": "eb8e9fa599664f5202f33554645a8d69",
"assets/assets/mizquierdo.png": "3cdcad26237d3cc65028333c4cdff1f4",
"assets/assets/mundo.png": "e5c31d08b22910b977dabfa9d3e7111c",
"assets/assets/music.mp4": "5a3e22147b564fd61783190e51fa3437",
"assets/assets/publico.png": "c90f27b00a70fe4f289c68a7be153b84",
"assets/assets/qatar.png": "a51f779b9b9446ee9d3d1df3bcc96e00",
"assets/assets/torre.png": "54da338a12523645f6984e4b21a80155",
"assets/FontManifest.json": "58a126ea2e67ec29d292b34a58fccbcb",
"assets/fonts/MaterialIcons-Regular.otf": "9bca78b5a2e641a53e09d9ff95edae55",
"assets/NOTICES": "f4bd953dc50e5955edcdf96ce4badce4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c6ac80bdc5b2896345377c9439f91d54",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2f141ffd94f3ef0ed716615fd537e708",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "0ebc4e7ca5e040da671730a59b181135",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "70b7d1e167a403d1bf0751e56f42ef9d",
"/": "70b7d1e167a403d1bf0751e56f42ef9d",
"main.dart.js": "f173c2c9bbbed4fac65abc5519e5bdb0",
"manifest.json": "8ecfde111e84e7e9c3624c396187e562",
"version.json": "743cba0e451458b664a428c6ede9cc55"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
