const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');


const config = merge(baseConfig, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({sourceMap: true})
  ]
});

module.exports = config;
