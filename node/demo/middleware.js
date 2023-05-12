/**
 * 实现中间件
 */
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'http://127.0.0.1:8888', // 目标服务器的地址
  changeOrigin: true, // 修改请求头中的 Host 字段为目标服务器的地址
}));

app.listen(8889, () => {
  console.log('Proxy server listening on port 8889');
});
