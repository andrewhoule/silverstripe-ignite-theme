const apply = require("postcss-apply");
const browserSync = require("browser-sync-webpack-plugin");
const colorFunction = require("postcss-color-function");
const cssImport = require("postcss-import");
const cssNano = require("cssnano");
const cssNext = require("postcss-cssnext");
const nested = require("postcss-nested");
const common = require("./webpack.common.js");
const merge = require("webpack-merge");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const styleLint = require("stylelint");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",

  performance: {
    hints: false
  },

  devtool: "cheap-module-eval-source-map",

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
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              plugins: () => [
                cssImport(),
                styleLint,
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
  },

  plugins: [
    new browserSync({
      host: "localhost",
      port: 3000,
      proxy: "http://yourdomain.local",
      notify: false
    }),

    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
      exclude: ["/vendor/"]
    })
  ]
});
