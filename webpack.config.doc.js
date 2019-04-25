const baseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  entry: {
    example: './example/example.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'doc'),
    publicPath: './',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'fiona-ui',
      filename: 'example.html'
    })
  ]
});