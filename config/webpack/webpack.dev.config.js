/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

/* eslint-enable import/no-extraneous-dependencies */

const client = {
  entry: {
    client: './src/client/src/index.js',
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['url-loader'],
      },
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', '..', 'build/public'),
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '..', '..', 'build/public'),
    historyApiFallback: true,
    clientLogLevel: 'none',
    compress: true,
    hot: true,
    inline: true,
    port: 4000,
    proxy: {
      '**': {
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true,
      },
    },
    stats: 'errors-only',
  },
  stats: 'errors-only',
  plugins: [
    new CleanWebpackPlugin('build', {}),
    new webpack.HotModuleReplacementPlugin({
      multiStep: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebPackPlugin({
      template: './src/client/public/index.html',
      filename: 'index.html',
      favicon: './src/client/public/sheepy_Fvk_icon.ico',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new WebpackMd5Hash(),
  ],
};

module.exports = client;
