const path = require('path')
const resolve = file => path.resolve(__dirname, file)

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: resolve('./dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolveLoader: {
    root: resolve('../node_modules'),
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.vue'],
    alias: {
      semantic: resolve('../src/index')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        // make sure to exclude 3rd party code in node_modules
        exclude: /node_modules/
      }
    ]
  }
  // vue-loader config:
  // lint all JavaScript inside *.vue files with ESLint
  // make sure to adjust your .eslintrc
}
