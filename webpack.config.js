const path = require('path')
const webpack = require('webpack')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

const env = process.env.NODE_ENV

const config = {
  devtool: env === 'dev' && 'source-map',
  entry: {
    main: [
      'babel-polyfill',
      './src/main'
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, './dist/'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css?-minimize', 'sass', 'postcss-loader']
    }]
  },
  postcss: function postcss() {
    return [precss, autoprefixer]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
    })
  ]
}

if (env === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      test: /\.js($|\?)/i
    })
  )
  Object.assign(config.resolve, {
    alias: {
      react: 'react-lite',
      'react-dom': 'react-lite'
    }
  })
}

module.exports = config

