const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/variables.scss";`,
      },
    },
  },
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:8888',
          changeOrigin: true,
          ws: false,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      }
    }

  }
})
