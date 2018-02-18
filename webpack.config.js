const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  // JavaScript 执行入口文件
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    publicPath: "/dist/",
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [{
      // 用正则去匹配要用该 loader 转换的 CSS 文件
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader'],
      }),
    },
    {
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?name=fonts/[name].[ext]'
    }
  ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name].css`,
    }),
  ]
};