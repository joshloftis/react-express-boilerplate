const path = require("path");
const webpack = require("webpack");
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
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist/public")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist/public"),
    clientLogLevel: "none",
    compress: true,
    hot: true,
    inline: true,
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:4000",
        secure: false,
        changeOrigin: true
      }
    },
    stats: "errors-only"
  },
  stats: "errors-only",
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new webpack.HotModuleReplacementPlugin({
      multiStep: false
    }),
    new HtmlWebPackPlugin({
      template: "./src/client/public/index.html",
      filename: "index.html",
      favicon: "./src/client/public/icon.ico"
    }),
    new WebpackMd5Hash()
  ]
};

module.exports = client;
