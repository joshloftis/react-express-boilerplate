/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */

const client = {
  entry: {
    client: './src/client/src/index.js',
  },
  target: 'web',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'dist/public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebPackPlugin({
      template: './src/client/public/index.html',
      filename: 'index.html',
      favicon: './src/client/public/icon.ico',
    }),
    new WebpackMd5Hash(),
  ],
};

const server = {
  entry: {
    server: './src/server/index.js',
  },
  target: 'node',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  externals: [nodeExternals()],
};

module.exports = [client, server];
