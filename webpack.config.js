const path = require("path");

const config = {
  entry: { 
    bundle: "./client/root.js",
    vendors: ["babel-polyfill", "react", "react-dom", "prop-types", "redux", "react-redux", "classnames"]
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
      loaders: "babel-loader",
    }, {
      test: /\.scss|\.css$/,
      loaders: ["style-loader", "css-loader", "sass-loader"
      // , 'postcss-loader'
      ]
    }]
  },
};

module.exports = config;