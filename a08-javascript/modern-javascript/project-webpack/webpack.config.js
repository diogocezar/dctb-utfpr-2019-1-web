module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
