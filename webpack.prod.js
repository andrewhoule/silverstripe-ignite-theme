const apply = require("postcss-apply");
const colorFunction = require("postcss-color-function");
const common = require("./webpack.common.js");
const cssImport = require("postcss-import");
const cssNano = require("cssnano");
const cssNext = require("postcss-cssnext");
const nested = require("postcss-nested");
const merge = require("webpack-merge");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "production",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          miniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: false
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: false,
              plugins: () => [
                cssImport(),
                apply,
                nested,
                colorFunction(),
                cssNext({
                  browsers: ["last 2 versions"]
                }),
                cssNano({
                  autoprefixer: false
                })
              ]
            }
          }
        ]
      }
    ]
  }
});
