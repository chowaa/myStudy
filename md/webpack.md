# webpack（专业的打包工具）

批量引入、自动刷新浏览器、自动打包、自动压缩、自动语法检测等等

## 安装

在工程中安装：

 ```bash
 npm init //初始化
 npm install webpack webpack-cli --save-dev
 ```

即可在工程中使用webpack命令

## 基础配置

1、创建webpack.config.js文件

```js
const path = require('path');

module.exports = {
  // mode: 'development',
  entry: './js/index.js',//打包入口
  output: {
    path: path.resolve(__dirname, 'dist'),//__dirname:当前目录
    filename: 'bundle.js',
  },//打包出口
};
```

2、在package.json的scripts中添加webpack执行命令

```js
"scripts": {
    "build": "webpack --config webpack.config.js"
  },
```

3、运行命令

```bash
npm run build
```

## webpack编译es6以上的js代码

1、引入依赖

```bash
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/runtime @babel/runtime-corejs3 -D
```

2、在webpack.config.js的module中添加rules

```js
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
```

