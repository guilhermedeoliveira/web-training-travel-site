const path = require('path');

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    // path: path.join(__dirname + "./app/temp/scripts"),
    path: '/home/guilhermedeoliveira/web-dev/web-training-travel-site/app/temp/scripts',
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
