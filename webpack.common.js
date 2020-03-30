const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const svgSpritemapPlugin = require("svg-spritemap-webpack-plugin");

module.exports = {
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
        test: /\.(js)$/,
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

    new svgSpritemapPlugin({
      filename: "icons.svg",
      prefix: "",
      src: "./app/client/icons/**/*.svg"
    })
  ]
};
