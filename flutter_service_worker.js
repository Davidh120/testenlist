'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7be67647b307611c1c0f4a07bfd52d19",
"index.html": "5fbba72dc2ef458ac3bfa06698ce43f5",
"/": "5fbba72dc2ef458ac3bfa06698ce43f5",
"main.dart.js": "08a311a88dcc6db522d60b29a67748b7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e48cb346b0d6edcafb307c44eca28fda",
".git/config": "c40f6a5c83c962e58e9c17d4b55726e0",
".git/objects/0d/156a651cfe4e3004289ef23f6c5b7d4d36b350": "fb0abddd81c1bf861974f1787268a4c1",
".git/objects/04/79b919ba97bfe913e2ebb6e5c871cde12966ac": "871cb8f44e34988c781b8e0a1529c79c",
".git/objects/04/51a9aa9336c735c992213409f61d4879e8209a": "80970692b56e43f398dd8530a33aacf6",
".git/objects/6a/8641fa2c8713945261759891b11926e4c77709": "0f0eeb975e735c8a8ed631b518587ae3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/67/842f894b8680efedf9e187bb29541ca5701e3c": "5e517e56c847a7d7b8192ef702493d9a",
".git/objects/93/7f8c360f5dac8e0a053dc2e0853dd7959776f6": "b64016326f4d0f2d18faa0b8f8a2f2af",
".git/objects/94/4a2eba33bcba3122e88ef1629ebbf248697882": "ad6fa8af256b1db9dc1f215ea844924d",
".git/objects/60/16e9215af5c3f8cad799246d2708e1567fc9cc": "fbc0543e1b7cc133333459130726d8ff",
".git/objects/5a/b808a706e205e1a53f8da525c39a2d751d4976": "890e8e666543e0e49abeb718ee5c20d7",
".git/objects/5a/1e60948e33c1f86f41c59b411113d4de1ffbbb": "adbf5c519842107fb2ff56511dde929b",
".git/objects/9c/ae8cc4a6878c0eb7ececf5de7c953f11b4e498": "08f5c2b86f6c2ea42bb6eb8000abe8b3",
".git/objects/a4/ab8ac233e0479e40aed738013826896e6bdf2b": "5729454f05495447e2d24fa832a2bb35",
".git/objects/b2/b0382c9300c0cbb8aeeef70cedcfeeb69b559e": "f108d0af69b973b1bef109fd19bf70e3",
".git/objects/da/8bba31cc9e89eb25b3675713c504a721574592": "b0d0504d5de8f9379eb7120c7f9f181a",
".git/objects/a2/45026b04075fd35d5b9a53549bc4d492187a8d": "d0181551f723c508841dcb2299c51220",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d3591ee28da5c5b7c8341222b7cd502b713f5a": "42517f22fd42b18d8ee4d9693d2db01d",
".git/objects/ae/340b18e09e2e858aa49837904bdf54e8255887": "cd447534df8950741ddb1a7a8034d873",
".git/objects/f4/df3271e0de2a272e52f420da6965b78b8f1a03": "a9c3ec430915a898020af5678709a80b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/8972042b2983737fffd402b8faf75514f91e8c": "042a527982a172deb53271ef22e8177f",
".git/objects/ca/df4bf37857ed0112f080e1b3bb2d47a1509eb6": "316b89f2c42f78febb07d653a70ee406",
".git/objects/c1/b288557bad77818208b2404583032f121b4f00": "d760f48cd5039411d4e643f3b757d376",
".git/objects/4e/0ec4ce9f65a799729ea18a82a64166190d9c1e": "ad934ad180c8eedd3389348e0745614f",
".git/objects/18/8ae95ec306e091cbec436c92d5b5e5cd965f5a": "ea63c2588460ed2bcf9f659ca585fb74",
".git/objects/87/649d530ba7725b6ae1d7cc53adcbea8351f043": "4f1003ae062a708c001c0712d3941f41",
".git/objects/80/81cb57991054f00fef359138d6caace715d6fe": "7839751e735a3325d17f203e3bea5c82",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/c378752945da68d4eca8d4ff1b86e553313b00": "d428046377d635ae227c01d85b6672e7",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4d/6fc9adea7cdb69b65acb761c361058012f9898": "65315d31c88bd059605ff60be7a2d609",
".git/objects/75/b94d57952e57dc66a5d11b24db731bf9555541": "fedb4ff21da1ceb870d1315399d115b4",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/43/dd8f42bec90404439cdd5fe49f4acf8de920d7": "3a07b0e7314c67c43390e7bd61a6930e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/07/e2911ecaeb1cadf7f6e6d5c43de38ceaf9b080": "32f62522d9014fb49f071795ee94694a",
".git/objects/6e/06f851ffd2c81f58ad2ec2d091ea9d6051b817": "7d3e4bedc0748066252e21b88fb77a4e",
".git/objects/5d/a2d66aa16ac070301c1bbe53408b8543cddc47": "7f0f51d4ea6938deb96c146c2689ee2a",
".git/objects/65/2dfc0b3a865493b14ee52632cf8a1f7e21f9ed": "f290a2e66881c82b1a33e8f66c47fe80",
".git/objects/62/a1c78cdc0b18149ed16fa115221cc817ea1ddf": "b06807fed43d43a0c7144f48150bdefa",
".git/objects/62/dd61e5d0033f726c86fd74b00c7a1eb4a715c5": "b09ccd2e4879a9e9c3b859c34db42d2a",
".git/objects/08/a7a4316c35872fea809fc007592df2d08539ba": "4451f40a18d320174790f6a39436d8a8",
".git/objects/6c/cfa9a78b3394531d71963baa0876862a94e0f3": "b76c61bb0c6d57e4bd42c978b19b30b5",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/99/e374d8f2d22ede813053bb02d6ca4a4acdbde2": "1c20b38ea97fef87b65066174a59aaf3",
".git/objects/99/d491b9810d692f4e04a3a7db88e2bb5f956e92": "19d4ddca02c14ecbf44452a5a57e7734",
".git/objects/99/0e1308e3ebe704afbea91114525c48e41a568d": "2f4e5e73f0f1aa4e464ed41e7b5c7486",
".git/objects/52/ef6f37aa6ca1398d27aeea012ac649b7423844": "e6c36f4c3048789d0693bb21be88e2d1",
".git/objects/55/69cafcb6d90506392a63c39e198f2a1076b430": "3c57425745a13cf6325e36d3931b84b3",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/63/c12cd35101ddd1e917728774e90f725eec71ae": "94e34fdee694e5a62ae6d2ba9fb3456d",
".git/objects/63/bf4d19f0e5d095c08b114f460f0eba3bd6ebad": "884fe2b91ea53406783d4347b8f8f30a",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/aa/e4ff4db6711c84eae381ace7622d4c3185a3a2": "1b01099d406273c4f33f2116e32398e5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/d78c70cf7953e416f385013b6febc2da1d0059": "d320a2da355669895bd50dda234f2261",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/e34a7d3f9450c2baccd4aacf3b10f3f4dac792": "e34933c080b03e460c2a66c70312e8c5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/76753bc8046da085b1313c955982826f62c0c9": "6b2e952c83e14240a710ec2706c77bd3",
".git/objects/ea/cc0940e05e38fc03a5253d168d2ae5867d6c47": "6fbe56734bba7a78c0acb0bd6014767a",
".git/objects/f7/5ade3f6ab923ce0dd0ab537bd380e7fff490af": "51caa479b530986328fdc40524864a0f",
".git/objects/e8/cec260f46e11b814bb20f35046a2d32f181fcf": "b8abb9de6aa380d8495cfe76c2bdb3f5",
".git/objects/c5/2293f9d2910b3a49db094e8859471ff7859ea6": "59dc6c6b06921a836f92e835b48620b3",
".git/objects/79/a0de0f867f8d2f685c916fe1e6a02b0b619a64": "9a2ca5ba11d1bf4ee7a187b3326e7e8f",
".git/objects/83/8bccae8713a95835f564cce1f20aeccd4801e8": "325baec7d5df79acbbd7f649b279c7ff",
".git/objects/83/20a6030f72c6ce98d778d89b65f5f7eac9ba2c": "823cd4552ef0af7b77697a8f76537f5f",
".git/objects/70/1b829d13efd9aae013e558b9fcc398005a200a": "77fb51037acb0b9bed5bafa45609a64c",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2b/c57e94e1b7ec477ca83ef7b5c27fc411b01d3a": "f113b5e26ef52d4a46203d1bb5f38734",
".git/objects/2b/9b905c4d6e3f32e82f65a9738fb62f04357393": "6e19dcb4258b5425d47f0054d9141b79",
".git/objects/7f/e31289ce91cbc8e94d23e5b01413dce22f682d": "95fdec51b9cb1ed62ede0a2e7ab23cce",
".git/objects/7a/dacd5a76bd9f5112b91159fcfc94997bc6b5ec": "2dd94d21cfa827a3b6dea5d37f6fb2ab",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c22017ed019bf4a69fdbefa5cf54bdd3",
".git/logs/refs/heads/master": "c22017ed019bf4a69fdbefa5cf54bdd3",
".git/logs/refs/remotes/origin/HEAD": "c0f15d4be38e1795cdea210134c79509",
".git/logs/refs/remotes/origin/master": "ee893785f0c17bfaebaec28a5112eec8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "0296f7549f2ba88055847ad75d22b847",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "0296f7549f2ba88055847ad75d22b847",
".git/index": "4629747dcc1decf2146b2dca80de3ef4",
".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
".git/FETCH_HEAD": "1af0b3b8232a4ff1d62fde055269f11e",
"assets/web/index.html": "5fbba72dc2ef458ac3bfa06698ce43f5",
"assets/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/web/manifest.json": "e48cb346b0d6edcafb307c44eca28fda",
"assets/AssetManifest.json": "a0ad233819814e6e037de3701a91f831",
"assets/NOTICES": "8d1e574f08375742ff563cdb7caf2ee5",
"assets/FontManifest.json": "ed95ae27e358cc32acca804b6ca29cc5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flat_icons_flutter/lib/fonts/FlaticonArrows.ttf": "92dcd169306f1506375b54ed45f6c0e8",
"assets/packages/flat_icons_flutter/lib/fonts/Flaticon.ttf": "90bc8831ccc880209459e741dc3ad6e2",
"assets/packages/flat_icons_flutter/lib/fonts/FlaticonSocial.ttf": "bfd49182b9ca024d5a0348652126c9e5",
"assets/packages/flutter_login/assets/images/ecorp.png": "24e80e9441acf073076893cebbe60ac0",
"assets/lib/fonts/EnlistCustom.ttf": "3d4c48fb585e641f0a16215dd12cc821",
"assets/lib/fonts/EnlistCovidIcon.ttf": "aeaf352a43d89c1747813e11924b5a23",
"assets/lib/fonts/EnlistAppIcon.ttf": "971102b530325ccec618ca448e2c3f61",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/hotel/hotel_booking.png": "48440fcfa4d01e0abfca7066cdb1a97c",
"assets/assets/images/userImage.png": "829625c63fcbfd79957896ec62f8392d",
"assets/assets/images/feedbackImage.png": "5f8e9064f54cf51a70fee2da78a5b014",
"assets/assets/images/inviteImage.png": "4d337cf829c67258aa3aae385f5ec31c",
"assets/assets/images/loading.gif": "fa848e8e6e83e03e5c6d455d4a3bf273",
"assets/assets/images/whatsappIcon.png": "7e52dd7dec23eebb19ff016d56ad1b11",
"assets/assets/images/supportIcon.png": "2eb21b9823a538c996ec667e17388322",
"assets/assets/images/foody.png": "e49a8096506066ebbd51dd23d0729fa3",
"assets/assets/images/helpImage.png": "2bff0fc93675d32f89db50f2d3e2a5b1",
"assets/assets/images/enlistcontrol_app-icon_512x512.png": "d30c9ffc09525f698d443ffb5ec88066",
"assets/assets/fitness_app/fitness_app.png": "9f885add76398906e01281406867644b",
"assets/assets/logo3.png": "c405c2021d56e3b3a9312b2b60e8a617",
"assets/assets/logo2.png": "9bc3daeaea089bcafecf87b1d7096650",
"assets/assets/icon/favicon2.png": "b1b993052a6e8a0f8a3bfbb4bdf4fbde",
"assets/assets/icon/footer_logo.png": "168455c6476336fc968ec5abf55e76c4",
"assets/assets/icon/favicon1.png": "e04ba31b18e12634edf38862d2ced667",
"assets/assets/icon/splash.png": "d065eb2c22f29ef1ccb99f4934d16a9d",
"assets/assets/icon/logo.png": "6818bfbe26c5a07557d54d76c0ac1f06",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "885e5558c90864ddb72ad486f36470cc",
"assets/assets/fonts/RobotoCondensed-BoldItalic.ttf": "c783051f11a8f369e8acc7adfcb5478d",
"assets/assets/fonts/RobotoCondensed-LightItalic.ttf": "f0177f3fd234ac8664509f19aef620fb",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"assets/assets/design_course/design_course.png": "f183f2ab6eddcb04570bb2e157881b66"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
