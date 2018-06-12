/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
/* eslint-enable import/no-extraneous-dependencies */

const client = {
  entry: {
    client: "./src/client/src/index.js"
  },
  devtool: "cheap-module-source-map",
  target: "web",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "..", "dist/public")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.css$/,
        use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
    new HtmlWebPackPlugin({
      template: "./src/client/public/index.html",
      filename: "index.html",
      favicon: "./src/client/public/icon.ico"
    })
  ]
};

const server = {
  entry: {
    server: "./src/server/index.js"
  },
  target: "node",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "..", "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      }
    ]
  },
  externals: [nodeExternals()]
};

module.exports = [client, server];
