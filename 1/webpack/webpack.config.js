const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),//__dirname:当前目录
    filename: 'bundle.js',
  },
  module:{
    rules: [{
      test:/\.js$/,
      loader: "babel-loader",
      exclude:/node_modules/,
      options:{
        'presets': [[
          '@babel/preset-env',
          {
            "targets": "ie >= 8",
            "useBuiltIns": "entry",
            "corejs": 3
          },
        ]]
      }
    }]
  }
};