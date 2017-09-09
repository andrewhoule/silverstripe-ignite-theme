
import apply from 'postcss-apply';
import browserSync from 'browser-sync-webpack-plugin';
import colorFunction from 'postcss-color-function';
import cssImport from 'postcss-import';
import cssNano from 'cssnano';
import cssNext from 'postcss-cssnext';
import extractTextPlugin from 'extract-text-webpack-plugin';
import fontMagician from 'postcss-font-magician';
import nested from 'postcss-nested';
import path from 'path';
import pxToRem from 'postcss-pxtorem';
import styleLint from 'stylelint';
import svgSpritemapPlugin from 'svg-spritemap-webpack-plugin';
import webpack from 'webpack';

module.exports = {

  devtool: 'eval-source-map',

  entry: [
    path.join(__dirname, 'source/app.js')
  ],

  output: {
    path: path.join(__dirname, '/build/'),
    publicPath: './',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[hash].[ext]',
        },
      },

      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },

      {
        test: /\.css$/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader', options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader', options: {
                sourceMap: 'inline',
                plugins: () => [
                  cssImport(),
                  styleLint,
                  apply,
                  nested,
                  pxToRem({
                    replace: false
                  }),
                  colorFunction(),
                  fontMagician({
                    variants: {
                      'Lato': {
                        '300': [],
                        '300 italic': [],
                        '400': [],
                        '400 italic': [],
                        '700': [],
                        '700 italic': [],
                        '900': []
                      },
                      'Lora': {
                        '400': [],
                        '400 italic': [],
                        '700': [],
                        '700 italic': []
                      }
                    },
                    foundries: ['google']
                  }),
                  cssNext({
                    browsers: ['last 2 versions']
                  }),
                  cssNano({
                    autoprefixer: false
                  })
                ]
              }
            },
          ]
        })
      },
      
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader', options: {
              presets: [
                'es2015'
              ],
              sourceMaps: 'inline'
            }
          },
          {
            loader: 'eslint-loader', options: {
              configFile: './.eslintrc'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new extractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),

    new browserSync({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localdomain.local',
      notify: false
    }),

    new svgSpritemapPlugin({
      filename: 'icons.svg',
      prefix: '',
      src: './source/icons/**/*.svg'
    })
  ]
}
