const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // extract css to files
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const paths = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'dist'),
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: isDev ? '[name].[chunkhash].js' : '[name].js',
    path: paths.build,
    publicPath: '/'
  },
  devtool: isDev ? 'inline-source-map' : false,
  devServer: {
    contentBase: paths.src
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader"
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/styles/[name].css',
      chunkFilename: '[id].[chunkhash].css'
    }),
    !isDev ? new CleanWebpackPlugin({}) : false,
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/assets`,
          to: 'assets',
          noErrorOnMissing: true
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ].filter(Boolean),
  cache: {
    type: "filesystem",
  }, 
  optimization: {
    minimize: true,
    minimizer: [
      `...`, // syntax to extend existing minimizers (i.e. `terser-webpack-plugin`)
    ],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime'
    }
  },
  performance: {
    hints: false
  }
};
