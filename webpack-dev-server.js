const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}).listen(8081, '127.0.0.1', err => {
  if (err) {
    console.log(err);
  }
  console.log('Webpack Listening at 127.0.0.1:8081');
});
