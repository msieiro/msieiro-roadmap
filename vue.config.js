module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      splitChunks: {
        minSize: 20000,
        maxSize: 25000,
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
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .end()
      .use("vue")
      .loader("vuetify-loader")
      .end();
  },
};
