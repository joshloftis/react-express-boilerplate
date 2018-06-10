const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const client = {
  entry: {
    client: "./src/client/src/index.tsx"
  },
  devtool: "inline-source-map",
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
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "..", "dist/public")
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new HtmlWebPackPlugin({
      template: "./src/client/public/index.html",
      filename: "index.html",
      favicon: "./src/client/public/icon.ico"
    }),
    new WebpackMd5Hash()
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
