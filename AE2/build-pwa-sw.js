const { generateSW } = require('workbox-build');

/** @type { import('workbox-build').GenerateSWOptions } */
const swConfig = {
  additionalManifestEntries: [
    {
      'url': '/.webmanifest', // under the 'www' directory
      'revision': new Date().toISOString(),
    },
  ],
  swDest: './www/pwa-sw.js',
  globDirectory: './www/',
  globPatterns: [
    '**/*',
  ],
};

generateSW(swConfig);