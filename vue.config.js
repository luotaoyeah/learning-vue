module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    port: 3030,
  },
};
