const http = require("http");

module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  productionSourceMap: false,
  chainWebpack: config => {
    /* 修改入口文件 */
    config
      .entry("app")
      .clear()
      .add("./src/index.ts");

    config.module
      .rule("less")
      .oneOf("vue-modules")
      .use("less-loader")
      .tap(options =>
        Object.assign({}, options, {
          javascriptEnabled: true
        })
      );

    config.module
      .rule("less")
      .oneOf("vue")
      .use("less-loader")
      .tap(options =>
        Object.assign({}, options, {
          javascriptEnabled: true
        })
      );

    config.module
      .rule("less")
      .oneOf("normal-modules")
      .use("less-loader")
      .tap(options =>
        Object.assign({}, options, {
          javascriptEnabled: true
        })
      );

    config.module
      .rule("less")
      .oneOf("normal")
      .use("less-loader")
      .tap(options =>
        Object.assign({}, options, {
          javascriptEnabled: true
        })
      );
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          "border-radius-base": "3px",
          "ease-base-out ": "none",
          "ease-base-in ": "none",
          "ease-out": "none",
          "ease-in ": "none",
          "ease-in-out ": "none",
          "ease-out-back ": "none",
          "ease-in-back": "none",
          "ease-in-out-back": "none",
          "ease-out-circ": "none",
          "ease-in-circ ": "none",
          "ease-in-out-circ ": "none",
          "ease-out-quint": "none",
          "ease-in-quint": "none",
          "ease-in-out-quint ": "none"
        },
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    port: 3000
  }
};
