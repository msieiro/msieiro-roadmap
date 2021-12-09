module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 5000,
        maxSize: 10000,
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: "es",
      fallbackLocale: "es",
      localeDir: "locales",
      enableInSFC: true,
      enableBridge: false,
    },
  },
};
