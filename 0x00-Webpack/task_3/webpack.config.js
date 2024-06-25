const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    header: {
      import: './modules/header/header.js',
      dependOn: 'shared',
    },
    body: {
      import: './modules/body/body.js',
      dependOn: 'shared',
    },
    footer: {
      import: './modules/footer/footer.js',
      dependOn: 'shared',
    },
    shared: 'jquery',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devServer: {
    contentBase: './public',
    port: 8564,
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, './public'),
    open: true,
    port: 8564,
  },
  performance: {
    maxAssetSize: 1000000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // Add other loaders for images, fonts, etc.
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
