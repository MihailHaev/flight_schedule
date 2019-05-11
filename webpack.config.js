const webpack = require(`webpack`);
const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const CopyPlugin = require(`copy-webpack-plugin`);

module.exports = {
  mode: `development`,
  entry: `./src/main.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    hot: true,
    inline: true,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': `react`,
      'propTypes': `prop-types`,
    }),
    new HtmlWebpackPlugin({
      template: `./public/index.html`
    }),
    new CopyPlugin([
      {from: `public/css`, to: `css`},
      {from: `public/img`, to: `img`},
      {from: `public/index.html`, to: `index.html`},
    ]),
  ],
  devtool: `source-map`
};
