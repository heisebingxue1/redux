const path = require('path');
const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    './src/app.js'
  ],
  plugins: [
    new LodashModuleReplacementPlugin
  ],
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  //   // 开启全局的模块热替换（HMR）

  //   new webpack.NamedModulesPlugin(),
  //   // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
  // ],
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  /*
    为什么这样写不行
    {
      path: path.resolve(__dirname, './bin/js'),
      filename: 'bundle.js'
    }
  */
  output: {
    path: __dirname,
    filename: './bin/js/bundle.js'
  },

  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, './')
  },
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'cheap-module-source-map',

  module: {
    rules: [{
      test: /\.js$/,
      use: [
        'babel-loader',
      ],
      exclude: /node_modules/
    }]
  },

};