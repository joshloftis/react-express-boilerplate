/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
/* eslint-enable import/no-extraneous-dependencies */

const moduleObj = {
  rules: [
    {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: { loader: 'ts-loader' },
    },
  ],
};

const client = {
  entry: {
    client: './src/client/src/index.tsx',
  },
  devtool: 'inline-source-map',
  module: moduleObj,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '..', 'dist/public'),
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
    server: './src/server/index.ts',
  },
  target: 'node',
  module: moduleObj,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  externals: [nodeExternals()],
};

module.exports = [client, server];
