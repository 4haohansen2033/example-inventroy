const path = require("path");

const resolve = dir => {
  return path.join(__dirname, "../", dir);
};

module.exports = {
  entry: {
    main: path.join(__dirname, "../src/main.ts")
  },
  // entry: resolve("src/main.ts"),
  output: {
    filename: "[name].[hash:10].js",
    path: resolve("dist")
  },
  resolve: {
    modules: ["node_modules", resolve("src")],
    extensions: [".ts", ".js", ".json", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js/,
        loader: "babel-loader",
        include: [resolve("src")]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|svg)/,
        loader: "file-loader",
        options: {
          limit: 50000,
          outputPath: "image"
        }
      },
      {
        test: /.(ttf|woff2?|eot|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 8192
        }
      }
    ]
  }
};
