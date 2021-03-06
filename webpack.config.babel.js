import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader/url', 'file-loader'],
      },
    ],
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'template.html',
      favicon: 'favicon.ico',
      minify: {
        collapseWhitespace: true,
        removeScriptTypeAttributes: true,
      },
    }),
  ],
  devtool: process.env.NODE_ENV ? '' : 'source-map',
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
};
