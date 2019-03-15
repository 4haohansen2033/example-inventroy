const path = require("path");

const resolve = dir => {
  return path.join(__dirname, "../", dir);
};

module.exports = {
  entry: resolve("./src/main.ts"),
  output: {
    fileName: "[name].[hash:10].js",
    path: resolve("dist")
  },
  resolve: {
    module: ["node_modules"],
    extends: ["ts", "js", "json"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "typescript-loader"
      }
    ]
  }
};
