const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
          changeOrigin: true,
          ws:false,
          rewrite:(path) => path.replace(/^\/api/, ""),
        },
      }
    }

  }
})
