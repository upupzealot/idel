const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin('./bundle.css');

module.exports = {
  entry:'./front-end/build.js',
  output:{
    path: path.resolve(__dirname, './front-end/dist'),
    publicPath: '/', // This is used to generate URLs
    filename:'bundle.js',
  },
  plugins: [
    extractLESS,
  ],
  module:{
    loaders: [{
      test: /\.less$/i,
      loader: extractLESS.extract(['css-loader','less-loader']),
    },{
      test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
      loader: "url-loader"
    }],
  },
  externals: {
    jquery: 'window.$',
    lodash: 'window._',
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
