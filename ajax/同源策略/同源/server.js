const express = require('express');

const app = express();

app.get('/home',(request,response)=>{
  response.sendFile(__dirname + '/index.html');
});

app.get('/data',(request,response)=>{
  response.send('shuju')
});

app.listen(9000,()=>{
  console.log("服务启动");
})