const path = require('path');
const {
  CheckerPlugin
} = require('awesome-typescript-loader')

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
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }, 
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  },
  plugins: [
    new CheckerPlugin()
  ]
}