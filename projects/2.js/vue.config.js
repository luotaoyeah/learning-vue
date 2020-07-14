module.exports = {
  runtimeCompiler: true,

  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#1890FF',
          'link-color': '#1890FF',
          'border-radius-base': '3px',
        },
        javascriptEnabled: true,
      },
    },
  },

  devServer: {
    port: 3000,
  },

  lintOnSave: false,
};
