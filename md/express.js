//1.引入express
// const { response } = require('express');
const express = require('express');

//2.创建应用对象
const app = express();

//3。创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/',(request,response)=>{
  //设置响应
  response.send('这是用express服务器框架创建的node服务器')
});

//4.监听端口启动服务
app.listen(8000,()=>{
  console.log("服务器创建成功");
})