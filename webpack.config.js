/* eslint-disable linebreak-style */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
