const apply = require("postcss-apply");
const browserSync = require("browser-sync-webpack-plugin");
const colorFunction = require("postcss-color-function");
const cssImport = require("postcss-import");
const cssNano = require("cssnano");
const cssNext = require("postcss-cssnext");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const nested = require("postcss-nested");
const path = require("path");
const styleLint = require("stylelint");
const svgSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  performance: {
    hints: false
  },

  devtool: "eval-source-map",

  entry: "./app/client/app.js",

  output: {
    path: path.join(__dirname, "public/dist/"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(ico|png|jpg|gif)$/,
        exclude: /(node_modules)/,
        loader: "file-loader",
        options: {
          name: "img/[hash].[ext]"
        }
      },

      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        use: ["file-loader"]
      },

      {
        test: /\.(ttf|eot|woff|woff2)$/,
        exclude: /(node_modules)/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]"
        }
      },

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
              sourceMap: "inline",
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
      },

      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              sourceMaps: "inline"
            }
          },
          {
            loader: "eslint-loader",
            options: {
              configFile: "./.eslintrc"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new miniCssExtractPlugin({
      filename: "bundle.css",
      disable: false,
      allChunks: true
    }),

    new browserSync({
      host: "localhost",
      port: 3000,
      proxy: "http://sitename.local",
      notify: false
    }),

    new svgSpritemapPlugin({
      filename: "icons.svg",
      prefix: "",
      src: "./app/client/icons/**/*.svg"
    })
  ]
};
