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
  },
  devServer: {
    port: 3000
  }
};
