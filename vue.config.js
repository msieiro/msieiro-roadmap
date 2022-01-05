module.exports = {
  configureWebpack: {
    performance: {
      hints: false,
    },
    optimization: {
      nodeEnv: "production",
      chunkIds: "total-size",
      concatenateModules: true,
      flagIncludedChunks: true,
      mangleWasmImports: true,
      mergeDuplicateChunks: true,
      minimize: true,
      moduleIds: "size",
      removeAvailableModules: true,
      removeEmptyChunks: true,
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
