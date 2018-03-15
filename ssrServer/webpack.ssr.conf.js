const config = require('../config')
const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..', dir)
  }
  module.exports = webpackConf = {
    entry:{
        entryServer: './ssrServer/entry-server.js'
    },
    target: 'node',
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
          ? config.build.assetsPublicPath
          : config.dev.assetsPublicPath,
          chunkFilename: '[name].bundle.js',
          libraryTarget: 'commonjs2'
      },
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src'),
        }
      },
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
          }
        ]
      }
}
// module.exports = new Promise((resolve,reject) => {
//     resolve(webpackConf)
// })