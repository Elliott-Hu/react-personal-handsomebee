const path = require('path');
const webpack = require("webpack");

const config = {
  entry: { 
    bundle: "./src/app.js",
    vendors: ["react", "react-dom", "redux", "react-redux"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist"
  },
  module: {
    rules: [{
      test:/\.js$/,
      exclude:/node_modules/,
      loaders: "babel-loader",
      query:{
        presets:["env", "react"],
      }
    }, {
      test: /\.scss|\.css$/,
      exclude:/node_modules/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'
      // , 'postcss-loader'
      ]
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;