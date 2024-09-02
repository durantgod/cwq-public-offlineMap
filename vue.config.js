// Vue.config.js
module.exports = {
  // 基本路径
  publicPath: "./",
  // 构建时的输出目录
  outputDir: "dist",
  // 放置静态资源的目录
  assetsDir: "static",
  // html 的输出路径
  indexPath: "index.html",
  //文件名哈希
  filenameHashing: true,
  // 是否在保存的时候使用 `eslint-loader` 进行检查。
  lintOnSave: false,
  // 是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  // babel-loader 默认会跳过 node_modules 依赖。
  transpileDependencies: [ /* string or regex */],
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  crossorigin: "",
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  integrity: false,
  css: { // css 配置
    extract: {
      // 修改打包后css文件名   
      filename: `css/[name].css`,
      chunkFilename: `css/[name].css`,
      allChunks: true
    }
  },
  // 调整内部的 webpack 配置
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
    config.externals={
      "BMap": "BMap",
      'BMapLib': 'BMapLib'
    };
  }, 
  //(Object | Function)4
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: false,
    port: 8080,
    host: '0.0.0.0',
    liveReload: true,
    inline: true, // 实时刷新
    hot: true,
    overlay: {
      warning: false,
      errors: false
    }
  }
}