const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  productionSourceMap:false,
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  outputDir: 'dist', // 输出文件目录
  assetsDir: 'static', // 放置静态资源
  css: { // css相关配置
    extract: true,
    sourceMap: false,
    loaderOptions: {
      // 启用 CSS modules for all css / pre-processor files.(预加载)
      css: {
        // modules: {
        //   auto: () => true
        // }
      },
      sass: {   
        // prependData: `@import "@/assets/scss/index.scss";`
      }
    }
  },
  // 修改title
  chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = '硕博宝典'
			return args
		})
    config.module
      .rule('svg')
      .end()
	},
  configureWebpack:{
    devServer: {
      proxy: {
        '/api': {
          target: 'http://kangfu-api-test.shuoboys.net',
          changeOrigin: true,
          ws:false,
          rewrite:(path) => path.replace(/^\/api/, ""),
        },
      }
    }

  }
})
