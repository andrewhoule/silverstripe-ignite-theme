import miniCssExtract from "mini-css-extract-plugin";
import postCssApply from "postcss-apply";
import postCssCustomMedia from "postcss-custom-media";
import postCssNested from "postcss-nested";
import postCssImport from "postcss-import";
import path from "path";
import svgSpritemap from "svg-spritemap-webpack-plugin";

const __dirname = path.resolve();

const config = {
  entry: "./app/client/index.js",

  output: {
    path: path.join(__dirname, "public/dist/"),
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /vendor/,
        use: [
          miniCssExtract.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  postCssImport,
                  postCssNested,
                  postCssApply,
                  postCssCustomMedia,
                ]
              }
            }
          }
        ]
      },

      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              sourceMaps: "inline"
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new miniCssExtract({
      filename: "index.css",
    }),

    new svgSpritemap("./app/client/icons/**/*.svg", {
      output: {
        filename: "icons.svg"
      },
      sprite: {
        prefix: ""
      }
    }),
  ]
};

export default config;
