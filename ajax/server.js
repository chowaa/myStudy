//1.引入express
// const { response } = require('express');
const express = require('express');
const { stringify } = require('querystring');

//2.创建应用对象
const app = express();

//3。创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //设置响应体
  response.send('这是用express服务器框架创建的node服务器')
});

app.post('/server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //设置响应体
  response.send('这是用express服务器框架创建的node服务器,返回post响应')
});

//all响应所有请求
app.all('/json-server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //设置响应体
  // response.send('这是用express服务器框架创建的node服务器,返回json数据');
  const data = {
    name:"周以一号"
  };
  //对json数据进行转换
  let str = JSON.stringify(data);
  response.send(str);
});

//延时响应
app.get('/delay',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //设置服务器延时响应 3s后
  setTimeout(() => {
    response.send('这是用express服务器框架创建的node服务器')
  }, 3000);
  //设置响应体
});

app.all('/jquery-server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  //设置响应体
  // response.send('这是用express服务器框架创建的node服务器')
  const data = {
    name:"周以一号"
  };
  //对json数据进行转换
  let str = JSON.stringify(data);
  response.send(str);
});
app.all('/axios-server',(request,response)=>{
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  //设置响应体
  // response.send('这是用express服务器框架创建的node服务器')
  const data = {
    name:"周以一号"
  };
  //对json数据进行转换
  response.send(JSON.stringify(data));
});

//JSONP实践
app.all('/JSONP-server',(request,response)=>{
  //设置响应头 设置允许跨域
  // response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    name:"周以一号",
    msg: "用户名已经存在"
  };
  //对json数据进行转换
  let str = JSON.stringify(data)
  response.end(`handle(${str})`);
});

//jquery-JSONP实践
app.all('/jquery-JSONP-server',(request,response)=>{
  //设置响应头 设置允许跨域
  // response.setHeader('Access-Control-Allow-Origin','*');
  response.setHeader('Access-Control-Allow-Headers', '*');

  const data = {
    name:"周以一号",
    city: "武汉"
  };
  //对json数据进行转换
  let str = JSON.stringify(data);

  let ab = request.query.callback;
  response.end(`${ab}(${str})`);
});

//4.监听端口启动服务
app.listen(8000,()=>{
  console.log("服务器创建成功");
})