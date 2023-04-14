# 一、安装axios

在控制台安装axios

```bash
$ npm install axios
```

# 二、创建env文件

在项目根目录下创建env文件区分环境

`.env.development`

```
# 本地环境
NODE_ENV = 'development'
VUE_APP_BASE_API = /api
VUE_APP_FLAG = 'development'
VUE_APP_API_URL = 'http://127.0.0.1:8888'
```

`.env.production`

```
# 生产环境
NODE_ENV = 'production'
VUE_APP_FLAG = 'production'
VUE_APP_BASE_API = /api
outputDir = dist
# 配置生产环境地址
VUE_APP_API_URL = '地址'
```

`.env.test`

```
# 测试环境
NODE_ENV = 'test'
VUE_APP_FLAG = 'test'
VUE_APP_BASE_API = /api
outputDir = test
VUE_APP_API_URL = '地址'
```

# 二、封装axios

在项目根目录下创建api文件夹，在api文件夹下创建http.ts文件

- 在http.ts文件中配置axios的基本内容

```typescript
import axios, { AxiosRequestConfig } from "axios"


const instance = axios.create({
  timeout: 1000 * 60,//超时时间
  baseURL: process.env.VUE_APP_API_URL,//接口地址，配置在.env文件中
  headers: {
    "Content-Type": "application/json",
  },//配置响应头
})
// 跨域设置
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
```

- 在http.ts文件中添加拦截器和响应器

```typescript
//HTTPrequest拦截
instance.interceptors.request.use(
  config => {
    // 在发送前做什么

    // 设置token
    // let storageHandler = new StorageHandler();
    // config.headers["Authorization"] = storageHandler.getSessionStorage('token');
    return config
  },
  error => {
    // 处理错误请求
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
  // 对响应数据做点什么
  return response;
}, 
  error => {
    // console.log('error', error);
    if(error && error.response) {
      switch (error.response.status) {
        case 400:
          error.massage = '错误请求';
          break;
        case 401:
          error.massage = '未授权，请重新登录';
          break;
        case 403:
          error.massage = '拒绝访问';
          break;
        case 404:
          error.massage = '请求错误,未找到该资源';
          break;
        case 405:
          error.massage = '请求方法未允许';
          break;
        case 408:
          error.massage = '请求超时';
          break;
        case 500:
          error.massage = '服务器端出错';
          break;
        case 501:
          error.massage = '网络未实现';
          break;
        case 502:
          error.massage = '网络错误';
          break;
        case 503:
          error.massage = '服务不可用';
          break;
        case 504:
          error.massage = '网络超时';
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `错误链接${error.response.status}`;
          break;
      }
    } else {
      error.message = "连接到服务器失败";
    }
    //错误逻辑处理，在此可做页面弹窗处理

    return Promise.reject(error.message);
  }
);
```

- 在http.ts文件中封装 Axios 发送 HTTP 请求的过程，让调用方可以更加简单地发送请求并处理响应数据。

```typescript
async function httpProxy<T = any>(config: AxiosRequestConfig): Promise<any> {
  let resData = await instance(config);
  return resData.data
}

export default httpProxy
```

# 三、自定义axios方法

创建`HttpHandler.ts`文件

安装`qs`依赖

```bash
$ npm install qs
```



```typescript
/**
 * @Author zy
 * @Date 2023年3月21日
 * @Title axios自定义方法
 */

import qs from 'qs'
import httpProxy from './http'

export default class HttpHander {
  constructor() {
    
  };

  /**
   * @Title 自定义get请求
   * @param url 接口地址
   * @param params 参数
   * @param config none
   * @returns 返回一个axios的get请求
   */
  async get(url: string, params?: object, config?: any){
    if (!params) {
      params = {}
    }
    return await httpProxy({
      url: url,
      method:"Get"
    })
  };

  /**
   * 
   * @param url 地址
   * @param params 参数
   * @param type 类型
   * @param config 
   * @returns 调用post方法
   */
  async post (url: string, params: object | string, type?: string, config?: any){
    if (!params) {
      params = {};
    }
    if (!config) {
      config = {}
    }
    if (type == 'application/x-www-form-urlencoded') {
      let configTmp = Object.assign({}, config);
      configTmp["Content-Type"] = 'application/x-www-form-urlencoded';
      params = qs.stringify(params);
    }
    return await httpProxy({
      url: url,
      data:params,
      method:'Post',
    })
  }
}
```

# 四、使用

创建`testApi.ts`文件

```typescript
import HttpHandler from "@/api/HttpHandler";

const http: HttpHandler = new HttpHandler();

export default class pendingBillingApi {

  constructor() {
  }


  findSettleList(params?:object){
    let url = '/api/data';
    return http.get(url,params);
  }
  addSettle(params:object){
    let url = '/api/post';
    return http.post(url,params);
  }
}
```

在页面中使用

```vue
<script lang='ts' setup>
    import testApi from '@/api/testApi/testApi'
    const http = new testApi();
    let params = {
      name:'jack',
      sex:'man'
    }
    onMounted(() => {
      http.findSettleList().then((result) => {
        if (result.code == '200') {
          console.log(result.data,'res,get');
        }
      }).catch((err) => {
        console.log(err.message,'err');
      });

      http.addSettle(params).then((result) => {
        if (result.code == '200') {
          console.log(result.data,'res,post');
        }
      }).catch((err) => {

      });
    })
</script>
```

# 五、配置跨域

在`vue.config.js`文件中添加

```javascript
module.exports = defineConfig({
    //.....
    devServer: {
    proxy: {
      // 如果请求地址以/api打头,就出触发代理机制
      // http://localhost:8080/api/login -> http://localhost:3000/api/login
      // '/api': {
      //   target: 'http://127.0.0.1:8888' // 我们要代理的真实接口地址
      // },
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite:(path) => path.replace(/^\/api/, "")
      },
    }
  }
})
```

