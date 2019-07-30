const path = require("path");
const webpack = require("webpack");
const ThemeColorReplacer = require("webpack-theme-color-replacer");
const generate = require("@ant-design/colors/lib/generate").default;

function resolve(dir) {
  return path.join(__dirname, dir);
}

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      // 生成仅包含颜色的替换样式（主题色等）
      // TODO 需要增加根据环境不开启主题需求
      new ThemeColorReplacer({
        fileName: "css/theme-colors-[contenthash:8].css",
        matchColors: getAntdSerials("#1890ff"), // 主色系列
        // 改变样式选择器，解决样式覆盖问题
        changeSelector(selector) {
          switch (selector) {
            case ".ant-calendar-today .ant-calendar-date":
              return ":not(.ant-calendar-selected-date):not(.ant-calendar-selected-day)" + selector;
            case ".ant-btn:focus,.ant-btn:hover":
              return ".ant-btn:focus:not(.ant-btn-primary),.ant-btn:hover:not(.ant-btn-primary)";
            case ".ant-steps-item-process .ant-steps-item-icon > .ant-steps-icon":
              return ":not(.ant-steps-item-process)" + selector;
            case ".ant-btn.active,.ant-btn:active":
              return ".ant-btn.active:not(.ant-btn-primary),.ant-btn:active:not(.ant-btn-primary)";
            case ".ant-menu-horizontal>.ant-menu-item-active,.ant-menu-horizontal>.ant-menu-item-open,.ant-menu-horizontal>.ant-menu-item-selected,.ant-menu-horizontal>.ant-menu-item:hover,.ant-menu-horizontal>.ant-menu-submenu-active,.ant-menu-horizontal>.ant-menu-submenu-open,.ant-menu-horizontal>.ant-menu-submenu-selected,.ant-menu-horizontal>.ant-menu-submenu:hover":
            case ".ant-menu-horizontal > .ant-menu-item-active,.ant-menu-horizontal > .ant-menu-item-open,.ant-menu-horizontal > .ant-menu-item-selected,.ant-menu-horizontal > .ant-menu-item:hover,.ant-menu-horizontal > .ant-menu-submenu-active,.ant-menu-horizontal > .ant-menu-submenu-open,.ant-menu-horizontal > .ant-menu-submenu-selected,.ant-menu-horizontal > .ant-menu-submenu:hover":
              return ".ant-menu-horizontal > .ant-menu-item-active,.ant-menu-horizontal > .ant-menu-item-open,.ant-menu-horizontal > .ant-menu-item-selected,.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-item:hover,.ant-menu-horizontal > .ant-menu-submenu-active,.ant-menu-horizontal > .ant-menu-submenu-open,.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu-selected,.ant-menu-horizontal:not(.ant-menu-dark) > .ant-menu-submenu:hover";
            case ".ant-menu-horizontal > .ant-menu-item-selected > a":
              return ":not(.ant-menu-horizontal)" + selector;
            case ".ant-menu-horizontal > .ant-menu-item > a:hover":
              return ":not(.ant-menu-horizontal)" + selector;
            default:
              return selector;
          }
        }
      })
    ]
  },

  chainWebpack: config => {
    /* 修改入口文件 */
    config
      .entry("app")
      .clear()
      .add("./src/index.ts");

    config.resolve.alias.set("@$", resolve("src"));

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .oneOf("inline")
      .resourceQuery(/inline/)
      .use("vue-svg-icon-loader")
      .loader("vue-svg-icon-loader")
      .end()
      .end()
      .oneOf("external")
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/[name].[hash:8].[ext]"
      });
    /* svgRule.oneOf('inline')
      .resourceQuery(/inline/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
    */
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
    // proxy: {
    //   '/api': {
    //     // target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
    //     target: 'https://mock.ihx.me/mock/5baf3052f7da7e07e04a5116/antd-pro',
    //     ws: false,
    //     changeOrigin: true
    //   }
    // }
  },

  // disable source map in production
  productionSourceMap: false,
  lintOnSave: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: []
};

function getAntdSerials(color) {
  // 淡化（即less的tint）
  const lightens = new Array(9).fill().map((t, i) => {
    return ThemeColorReplacer.varyColor.lighten(color, i / 10);
  });
  const colorPalettes = generate(color);
  return lightens.concat(colorPalettes);
}
