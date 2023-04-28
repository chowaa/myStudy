const express = require('express')
const cors  = require("cors");

const app = express()
app.use(cors())
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: '8880' });

wss.on('connection', function connection(ws) {
  console.log('client connected');
  
  // 在接收到数据后调用sendData方法发送数据
  ws.on('message', function incoming(data) {
    const thisData = JSON.parse(data)
    console.log(`received: ${thisData.data}`,'data');
    sendData(thisData.data);
  });
  ws.on('close', function close() {
    console.log('client disconnected');
  });
});
function sendData(data) {
  const sd = data
  console.log(sd,'sd');
  // 向所有连接的客户端发送数据
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(sd);
    }
  });
}

app.listen(8888, ()=> {
  console.log('Server running at the http://127.0.0.1:8880');
})