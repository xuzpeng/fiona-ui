const path = require('path');
const {
  CheckerPlugin
} = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './lib/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'fiona',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'fiona-ui'
    })
  ]
}