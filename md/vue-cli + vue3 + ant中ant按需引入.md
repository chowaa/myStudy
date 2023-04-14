# vue-cli + vue3 + ant中ant按需引入

# 一、安装ant

```bash
npm i --save ant-design-vue
```

# 二、在plugins文件夹下创建ant.ts文件

在ant.ts文件中引入需要用到的组件

```tsx
import { Dropdown,Menu, Carousel, Grid, Button, Row, Col   } from 'ant-design-vue'
import { SyncOutlined } from '@ant-design/icons-vue'
import { App } from 'vue' // App是类型

const AntDesign = {
  install: function (Vue: App) {
    Vue.component('a-dropdown', Dropdown)
    Vue.component('a-menu', Menu)
    Vue.component('a-carousel', Carousel)
    Vue.component('a-row', Grid)
    Vue.component('a-col', Grid)
    Vue.component('SyncOutlined', SyncOutlined)
    Vue.component('a-button', Button)
    Vue.component('a-row', Row)
    Vue.component('a-col', Col)

  }
}

export default AntDesign   //在main.ts中引入此文件
```

# 三、注册组件

在main.ts中注册组件

```typescript
...
import AntDesign  from '@/plugins/ant';

createApp(App).use(AntDesign).mount('#app')
```



