const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./test/index.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.css$/, loader: "style!css" },  // if end in .css, use css loader
      { test: /\.scss$/, loader: "style!css!sass" },  // if end in .scss, use sass loader
    ]
  },
  resolve: {  // don't have to use file extensions in require
    extensions: ['', '.js', '.json', '.scss', 'css']
  }
}
