const express = require('express')
const cors  = require("cors");

const app = express()
app.use(cors())
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: '8880' });

wss.on('connection', function connection(ws) {
  console.log('client connected');

  ws.on('message', function incoming(data) {
    console.log(`received: ${data}`,'data');
    // 处理接收到的数据
    ws.send('nodejs send message')
  });

  ws.on('close', function close() {
    console.log('client disconnected');
  });
});

app.listen(8888, ()=> {
  console.log('Server running at the http://127.0.0.1:8880');
})