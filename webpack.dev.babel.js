import browserSync from "browser-sync-webpack-plugin";
import common from "./webpack.common.babel.js";
import eslint from "eslint-webpack-plugin";
import { merge } from "webpack-merge";
import stylelint from "stylelint-webpack-plugin";
import webpack from "webpack";

const config = merge(common, {
  mode: "development",

  performance: {
    hints: false
  },

  devtool: 'source-map',

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
    }),

    new eslint(),
    new stylelint(),
  ]
});

export default config;
