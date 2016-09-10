var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./main.js",
  devServer: {
    inline: true,
    port: 8081
  },
  output: { path: __dirname, filename: "bundle.js" },
  module: {
    loaders: [
      {
	test: /.jsx?$/,
	loader: "babel-loader",
	exclude: /node_modules/,
	query: {
	  presets: ["es2015", "react"]
	}
      }
    ]
  },
};
