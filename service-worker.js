/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6c46e0636dade98138be8f1bc367db06"
  },
  {
    "url": "api/index.html",
    "revision": "017ea3ec8d09d612eae0c9c592264e77"
  },
  {
    "url": "assets/css/0.styles.449063e0.css",
    "revision": "f8c87f950ab16efe6ee6b5a552dea90b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a5107c2a.js",
    "revision": "a65d124e7520440b50962810a6a3e286"
  },
  {
    "url": "assets/js/11.1796f2f7.js",
    "revision": "ae2a65f792e60ef16fec7930e1581a3b"
  },
  {
    "url": "assets/js/12.4a2e26fe.js",
    "revision": "64fb5a44e7f716ee410b7dde83e6cb30"
  },
  {
    "url": "assets/js/13.e19d602f.js",
    "revision": "a75e24927b33502b3b0b0a9cc3323613"
  },
  {
    "url": "assets/js/14.0595f94f.js",
    "revision": "d85291946f3cafa30f8c0a84adf6f630"
  },
  {
    "url": "assets/js/15.fe4f32da.js",
    "revision": "7e55e555ee48859a9f91ccd2cff3c391"
  },
  {
    "url": "assets/js/16.5a9268a6.js",
    "revision": "6f03175f59673d711beb772a2ab7e3ce"
  },
  {
    "url": "assets/js/17.6022ccc9.js",
    "revision": "cf9a329c8284e92c8527f778dd0a7203"
  },
  {
    "url": "assets/js/18.0eb70972.js",
    "revision": "243aec28ed91b1da7442f04dea55aa5c"
  },
  {
    "url": "assets/js/19.3f9851af.js",
    "revision": "6f0022c01c1eddcd35abdc68aad7a075"
  },
  {
    "url": "assets/js/20.607d6d00.js",
    "revision": "beb6ea990401711f1cae40c335f0716b"
  },
  {
    "url": "assets/js/21.30df0fcb.js",
    "revision": "9d81a21d2972bdc7c7079458de55e299"
  },
  {
    "url": "assets/js/22.86f82e3a.js",
    "revision": "205191d9daa7baa7bd5881afcd21a8d7"
  },
  {
    "url": "assets/js/23.cbd34424.js",
    "revision": "fbe567705d1add9dddfb044f89de3623"
  },
  {
    "url": "assets/js/24.4b53d970.js",
    "revision": "e3e2d51faba41685682103fa0ff10619"
  },
  {
    "url": "assets/js/25.dfa953ea.js",
    "revision": "93dd4970cf76ca2ee193262208a7d8fd"
  },
  {
    "url": "assets/js/26.9dc7e42d.js",
    "revision": "9aa4aa8689b06f5c3ab67df34efde481"
  },
  {
    "url": "assets/js/27.aebf8bf2.js",
    "revision": "e6709c6950cb416c1938fadd83d2c7e8"
  },
  {
    "url": "assets/js/28.9a946b59.js",
    "revision": "af39d4040b32515fbe8c97b2fd7a1fb1"
  },
  {
    "url": "assets/js/29.bef52ecb.js",
    "revision": "3d1390b16afc0583c2e2abd7d0550645"
  },
  {
    "url": "assets/js/3.6b1ad65e.js",
    "revision": "5991638fbaf55cbda409789b134dedd1"
  },
  {
    "url": "assets/js/30.3159a99d.js",
    "revision": "bba9cdfae2b45968345a5596d8acc521"
  },
  {
    "url": "assets/js/31.9b0d8267.js",
    "revision": "e24726ea903b9d93014d2f2c1e62a34c"
  },
  {
    "url": "assets/js/32.a5b7d4ca.js",
    "revision": "733bcb25e6964d484c23551f96488fdd"
  },
  {
    "url": "assets/js/33.17a0b253.js",
    "revision": "8bca92fbd3df0cd0d789a824e5ee0802"
  },
  {
    "url": "assets/js/34.458cff88.js",
    "revision": "90894bac2a2e0e9b2765440a0d85868b"
  },
  {
    "url": "assets/js/35.d40895d3.js",
    "revision": "c6445b27b5577aff42f36c1f7bd58508"
  },
  {
    "url": "assets/js/36.4af84478.js",
    "revision": "3c7589bba36d9fff663e9049f975c2c4"
  },
  {
    "url": "assets/js/37.16af6658.js",
    "revision": "2d0257bd896cb043f077c0c62b2135da"
  },
  {
    "url": "assets/js/38.354c9e4c.js",
    "revision": "cbfcc73643ea6bc27beed02e87e2d28f"
  },
  {
    "url": "assets/js/39.f995f236.js",
    "revision": "40d451abe846af44457b72d84bdc10f8"
  },
  {
    "url": "assets/js/4.be7d0f5c.js",
    "revision": "acf403303460cf7317d1f057cd42d2c4"
  },
  {
    "url": "assets/js/40.c0971e60.js",
    "revision": "80d7cfe57594701ded8c7e5182eff64f"
  },
  {
    "url": "assets/js/41.c2d5cc02.js",
    "revision": "389cd7946d3cf91f226467889f1d650f"
  },
  {
    "url": "assets/js/42.519fd5bb.js",
    "revision": "d62afdb6d25ad3104b5b46f6e4205441"
  },
  {
    "url": "assets/js/43.83706c22.js",
    "revision": "e5a831325f72adc1254e8ae2811ec18a"
  },
  {
    "url": "assets/js/44.00b58a53.js",
    "revision": "db0155b1cd8c29c413df176a7106a3d7"
  },
  {
    "url": "assets/js/45.bcb2794e.js",
    "revision": "617b9dacd2fa6a6d3a02f54579200455"
  },
  {
    "url": "assets/js/46.33f0fc13.js",
    "revision": "fa64caa7f8007e83d1afffa70b56a8ba"
  },
  {
    "url": "assets/js/47.ed22261a.js",
    "revision": "72f99b7455b1fea7a7bcc6edea612605"
  },
  {
    "url": "assets/js/48.5fc8ecc0.js",
    "revision": "8fe0dc90af78e02edb4f946f5f3a10e7"
  },
  {
    "url": "assets/js/49.6e08411b.js",
    "revision": "553cc642e2b3576ef3449ce1646db1f9"
  },
  {
    "url": "assets/js/5.bdff17c0.js",
    "revision": "089a94a29bc86723370d4b2995ccadeb"
  },
  {
    "url": "assets/js/6.8f8c9760.js",
    "revision": "f6bc5f7488a169a8d0e37a58c72216d8"
  },
  {
    "url": "assets/js/7.de9db245.js",
    "revision": "e11cbf1dfeed1b343290e14d67d42006"
  },
  {
    "url": "assets/js/8.b8d06e04.js",
    "revision": "fc16c23dbcc79a370b43c0ee5946ac1f"
  },
  {
    "url": "assets/js/9.08a3561c.js",
    "revision": "4f7f3b3e9af95760038258d7552bc594"
  },
  {
    "url": "assets/js/app.b895c10f.js",
    "revision": "737c43039b49f2a516af22a5200aebcc"
  },
  {
    "url": "assets/js/vendors~docsearch.1a2f082c.js",
    "revision": "ac59f3ca006aa2b4f041702b130daf48"
  },
  {
    "url": "guide/advanced/cache.html",
    "revision": "bf2bd0dda697662669b405e126bc4038"
  },
  {
    "url": "guide/advanced/dynamic-tab-info.html",
    "revision": "db8100ea5d4fc6522bf959103d66b0d5"
  },
  {
    "url": "guide/advanced/initial-tabs.html",
    "revision": "89a928e235b5cfd1d441c1aef00e8eff"
  },
  {
    "url": "guide/advanced/page-leave.html",
    "revision": "e6836490f2c1b74a541968cba970cf86"
  },
  {
    "url": "guide/advanced/restore.html",
    "revision": "5ed98de0dff44137cbe5b7b8e60791ed"
  },
  {
    "url": "guide/changelog.html",
    "revision": "fec67a96cdfaf5795b4887026fe81027"
  },
  {
    "url": "guide/custom/contextmenu.html",
    "revision": "30042dc44aa4c0efc5d5d986ba685fe6"
  },
  {
    "url": "guide/custom/i18n.html",
    "revision": "bbc76c2e03003eec14c1d2f5040da266"
  },
  {
    "url": "guide/custom/index.html",
    "revision": "d3b313f0c506576e9c580bbb49a9ebe7"
  },
  {
    "url": "guide/custom/slot.html",
    "revision": "f2004c28584c1c30a463f4ddee9b1ee3"
  },
  {
    "url": "guide/custom/transition.html",
    "revision": "a866bb5f6b23a834a438064ddeaf0dbf"
  },
  {
    "url": "guide/essentials/iframe.html",
    "revision": "093244cb5c3a861e2251fc87b91ee78b"
  },
  {
    "url": "guide/essentials/index.html",
    "revision": "c770fa4f6dd7390013fbf34031ed3a2d"
  },
  {
    "url": "guide/essentials/installation.html",
    "revision": "693266111e28091cf611b862c71a91d1"
  },
  {
    "url": "guide/essentials/nuxt.html",
    "revision": "30dfddf1bebb38c13f53fb543b729d0b"
  },
  {
    "url": "guide/essentials/operate.html",
    "revision": "12e82770729adf2cc079f910dbc19272"
  },
  {
    "url": "guide/index.html",
    "revision": "890d9d78ee555d2a3aea6d52b1125371"
  },
  {
    "url": "guide/solutions.html",
    "revision": "585e40a65239099dcd34d53fb3c96520"
  },
  {
    "url": "index.html",
    "revision": "a966ec3a397dacfb9800fa1a7c4eccba"
  },
  {
    "url": "zh/api/index.html",
    "revision": "84b8ac3f3c9b7b17e04e68feec61010c"
  },
  {
    "url": "zh/guide/advanced/cache.html",
    "revision": "39ac7ee538ddc716d776b9d015b013c0"
  },
  {
    "url": "zh/guide/advanced/dynamic-tab-info.html",
    "revision": "97e161e447842f2e9d21db9a8151dc0b"
  },
  {
    "url": "zh/guide/advanced/initial-tabs.html",
    "revision": "c32f0cad1a879d41856a1737e33426f5"
  },
  {
    "url": "zh/guide/advanced/page-leave.html",
    "revision": "664c0e5a6cb7aadf31742d3a12d9af02"
  },
  {
    "url": "zh/guide/advanced/restore.html",
    "revision": "52de34e8be758568362e8cd067843983"
  },
  {
    "url": "zh/guide/changelog.html",
    "revision": "2643ddff5e71b85a826165cd4310e3e5"
  },
  {
    "url": "zh/guide/custom/contextmenu.html",
    "revision": "d5b91a3e01b2051010684a80a1fefc77"
  },
  {
    "url": "zh/guide/custom/i18n.html",
    "revision": "0f037e76f9a7884a857d9eb57ad3bdeb"
  },
  {
    "url": "zh/guide/custom/index.html",
    "revision": "80323605531d5666211e7453b830b349"
  },
  {
    "url": "zh/guide/custom/slot.html",
    "revision": "ca1924d003c8700b4cba2b98dc12ff28"
  },
  {
    "url": "zh/guide/custom/transition.html",
    "revision": "a329e5061c3bbc7c9e9f33b264dd39e7"
  },
  {
    "url": "zh/guide/essentials/iframe.html",
    "revision": "73aee3e3cb5d9606f8917c449c03c7ed"
  },
  {
    "url": "zh/guide/essentials/index.html",
    "revision": "98567834774e5f5bdc7e1236b41fa339"
  },
  {
    "url": "zh/guide/essentials/installation.html",
    "revision": "ee0a7d9909ead8b2e1efe65ffc9b6b2b"
  },
  {
    "url": "zh/guide/essentials/nuxt.html",
    "revision": "a63069979983b985ce75fb7f8fb7b55e"
  },
  {
    "url": "zh/guide/essentials/operate.html",
    "revision": "c6ec9342c374296d8eff159a618d9a04"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "051c5f926051a62f03c88ecc30c86212"
  },
  {
    "url": "zh/guide/solutions.html",
    "revision": "f6783e11166184cfffc6f716dc7179de"
  },
  {
    "url": "zh/index.html",
    "revision": "658045f2f40a6daadcf90f4ac3af562d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
