const path = require('path');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const client = {
  entry: {
    client: './src/client/src/index.js',
  },
  devtool: 'cheap-module-source-map',
  target: 'web',
  output: {
    path: path.resolve(__dirname, '..', '..', 'build/public'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css',
    }),
    new HtmlWebPackPlugin({
      template: './src/client/public/index.html',
      filename: 'index.html',
      favicon: './src/client/public/sheepy_Fvk_icon.ico',
      alwaysWriteToDisk: true,
    }),
  ],
};

const server = {
  entry: {
    server: ['babel-polyfill', './src/server/index.js'],
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', '..', 'build'),
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
