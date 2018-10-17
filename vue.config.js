const http = require("http");

module.exports = {
  runtimeCompiler: true,
  lintOnSave: false,
  chainWebpack: config => {
    /* 修改入口文件 */
    config
      .entry("app")
      .clear()
      .add("./src/index.ts");
  },
  devServer: {
    port: 4000
  }
};
