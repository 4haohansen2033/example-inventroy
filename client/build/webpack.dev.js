const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");
const base = require("./webpack.base");

module.exports = merge(base, {
  mode: "development",
  devtool: "eval-source-map",
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
      inject: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 9002
  }
});
