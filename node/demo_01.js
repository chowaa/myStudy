// // 导入fs模块
// const fs = require('fs')

// // 读取文件
// fs.readFile('./1.txt','utf8',(err,data) => {
//   if(err) throw err

//   console.log(data.toString(),'data');
// })

// // 写入文件
// fs.writeFile('./1.txt','这是写入的内容',(err) => {
//   console.log(err,'err');
// })

const express = require('express');
const cors = require('cors')

const app = express()

app.use(cors());


// req 存放客户端的一些信息， req.query 是一个空对象，里面用来存放用户传递的信息
app.get('/api/data', (req, res) => {
  const data = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
  };
  res.json(data);
});
// 配置静态文件
// app.use(express.static(__dirname + '/dist'))


// 3.监听端口启动服务器
app.listen(8888, () => {
  console.log('Server running at the http://127.0.0.1:8888')
})