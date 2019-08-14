const path = require("path");
const isProduction = process.env.NODE_ENV !== "production";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlGenerate = require("html-webpack-plugin");
const cssExtract = require("mini-css-extract-plugin");
module.exports = {
  mode: isProduction ? "development" : "production",
  entry: path.resolve(__dirname, "./client/components/app.js"),
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  devServer: {
    port: 2020,
    open: "chrome"
  },
  optimization: {},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: cssExtract.loader,
            options: {
              publicPath: "../"
            }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlGenerate({
      filename: "index.html",
      template: path.resolve(__dirname, "./client/index.html")
    }),
    new cssExtract({
      filename: "css/style.css"
    }),
    new CleanWebpackPlugin()
  ]
};
