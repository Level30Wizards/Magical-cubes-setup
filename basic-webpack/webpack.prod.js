const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.dev.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
});