const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = function (env) {
  return {
    entry: './src/index.jsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        }
      ],
    },
    resolve: {
      modules: [path.resolve(__dirname), 'node_modules'],
      extensions: ['.js', '.jsx', '.css', '.scss'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html'
      }),
      new CleanWebpackPlugin(),
      new Dotenv(),
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'build'),
      port: 5005,
      open: 'Google Chrome', // 'google-chrome' on Linux and 'chrome' on Windows
    },
    devtool: env.development ? 'source-map' : '',
  };
}