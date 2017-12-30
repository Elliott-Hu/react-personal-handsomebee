const path = require('path');

const config = {
  entry: { 
    bundle: "./src/app.js",
    vendors: ["babel-polyfill", "react", "react-dom", "redux", "react-redux"]
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
      exclude:/node_modules/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'
      // , 'postcss-loader'
      ]
    }]
  },
}

module.exports = config;