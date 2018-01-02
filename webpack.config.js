const path = require("path");

const config = {
  entry: { 
    bundle: "./client/app.js",
    vendors: ["babel-polyfill", "react", "react-dom", "prop-types", "redux", "react-redux", "classnames"]
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
        presets:["stage-0", "env", "react"],
      }
    }, {
      test: /\.scss|\.css$/,
      // exclude:/node_modules/,
      loaders: ["style-loader", "css-loader", "sass-loader"
      // , 'postcss-loader'
      ]
    }]
  },
};

module.exports = config;