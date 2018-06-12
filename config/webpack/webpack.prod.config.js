const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const client = {
  entry: {
    client: "./src/client/src/index.tsx"
  },
  devtool: "cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: { loader: "ts-loader" }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "..", "dist/public")
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new HtmlWebPackPlugin({
      template: "./src/client/public/index.html",
      filename: "index.html",
      favicon: "./src/client/public/icon.ico"
    })
  ]
};

const server = {
  entry: {
    server: "./src/server/index.ts"
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: { loader: "ts-loader" }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "..", "dist")
  },
  externals: [nodeExternals()]
};

module.exports = [client, server];
