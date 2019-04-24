const baseConfig = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  entry: {
    example: './example/example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'fiona-ui'
    }),
    new ExtractTextPlugin('[name].css')
  ]
});