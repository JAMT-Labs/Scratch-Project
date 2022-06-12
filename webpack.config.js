const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./client/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    publicPath: "auto",
  },

  mode: process.env.NODE_ENV,
  module: {
    rules: [
      // Add rules
      {
        // React rule (Transpile react files)
        test: /\.jsx?/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },

      {
        // Styles Rule (Filters SASS through sass-loader -> css-loader -> style-loader)
        test: /\.s[ac]ss$/i, //css,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HTMLWebpackPlugin({ template: "./client/index.html" })],
  devServer: {
    static: {
      directory: path.join(__dirname, "/build"),
    },
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};