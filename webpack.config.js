const path = require("path");
const webpack = require("webpack");

const config = {
  entry: { 
    bundle: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", 
      "./client/root.js"
    ],
    vendors: [
      "babel-polyfill", 
      "react", 
      "react-dom", 
      "prop-types", 
      "redux", 
      "react-redux", 
      "classnames"
    ]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/dist"),
    publicPath: "/dist"
  },
  module: {
    rules: [{
      test:/\.js$/,
      exclude:/node_modules/,
      loaders: ["babel-loader"],
    }, {
      test: /\.scss|\.css$/,
      loaders: ["style-loader", "css-loader", "sass-loader"
      // , 'postcss-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;