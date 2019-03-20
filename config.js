const _ = require("loadsh");
const base = {
  assetsRoot: path.resolve(__dirname, "./client/src"),
  assetsSubDirectory: "static",
  assetsPublicPath: "/"
};

const development = _.merge(base, {});
const production = _.merge(base, {});

module.exports =
  process.env.NODE_ENV == "production" ? production : development;
