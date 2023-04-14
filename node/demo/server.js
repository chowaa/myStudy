const express = require('express')
const cors  = require("cors");

const app = express()
app.use(cors())

// get接口
app.get('/api/data', (req, res) => {
  const data = {
    code :200,
    data:{
      name: 'zhouyi',
      age: 23
    }
  };
  res.json(data);
})

//post接口
// 创建中间件
const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/api/post', (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(data);
});

app.post('/api/login', (req, res)=> {
  const data = req.body
  const mes = {
    code: 200,
    token: 'this is token'
  }
  console.log(mes);
  res.send(mes)
})
app.post('/api/sendData', (req, res)=> {
  const data = req.body;
  const resData = {
    code :200,
    data:{
      name: 'zhouyi',
      id: 23
    }
  };
  const mes = {
    code: 200,
    data: resData
  }
  console.log(mes);
  res.send(mes)
})
// webScoket


app.listen(8888, ()=> {
  console.log('Server running at the http://127.0.0.1:8888');
})