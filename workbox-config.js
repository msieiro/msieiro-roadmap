module.exports = {
  globDirectory: "dist/",
  globPatterns: [
    "**/*.{css,ico,html,js,scss,vue,json,txt}{png,xml,ico,svg,webmanifest,css,eot,woff2,woff,ttf,html,js,txt,json,scss}",
  ],
  swDest: "dist/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|json|webp)$/,
      handler: "StaleWhileRevalidate",
    },
  ],
};
