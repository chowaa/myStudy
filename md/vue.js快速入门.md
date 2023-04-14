# 1、Vue简介

JavaScript框架

简化DOM操作

响应式数据驱动

# 2、Vue基础：第一个Vue程序

引入cdn

```vue
<!-- 开发环境版本，包含了有帮助的命令行警告 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>


<!-- 生产环境版本，优化了尺寸和速度 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
```



创建Vue实例对象，设置el属性和data属性

使用简洁的模板语法把数据渲染到页面上

```vue
<!-- view层 模板 -->
<div id="app">
    {{ message }}
</div>

<!-- 导入Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        //Model层 : 数据
        data: {
            message: 'Hello Worl!'
        }
    })
</script>
```

```js
app.message//获取messsge的值
app.message = 'zhouyi'//修改message的值
```

注意：当data中message值变化时 el 选中的选择器下所有的message都会变化





v-if

```vue
<!-- view层 模板 -->
<div id="app">
    <p v-if="seen">发现我</p>
</div>

<!-- 导入Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        //Model层 : 数据
        data: {
            seen: true
        }
    })
</script>

app.seen = false//修改
```

v-for

```vue

<!-- view层 模板 -->
<div id="app">
    <ol>
        <li v-for= "item in items">
            {{ item.text }}
        </li>
    </ol>
</div>

<!-- 导入Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        //Model层 : 数据
        data: {
            items: [
                { text: 'js'},
                { text: 'css'},
                { text: 'vue'}
            ]
        }
    })

</script>


app.items.push({ text: 'jQuery'})//新增
```



v-on

```vue
<!-- view层 模板 -->
<div id="app">
    <button v-on:click="sayHi">click Me</button>
</div>

<!-- 导入Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    var app = new Vue({
        el: '#app',
        //Model层 : 数据
        data: {
            message: "zhouyi"
        },
        methods: {  //方法必须定义在Vue的Methods对象中， v-on： 事件
            sayHi: function (event) {
                alert(this.message);
            }
        }
    })

</script>
```





自定义组件

```vue
<!-- view层 模板 -->
<div id="app">
    <zhouyi v-for="item in items" v-bind:zhou="item"></zhouyi>
</div>

<!-- 导入Vue.js -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>

    //定义一个Vue组件component
    Vue.component("zhouyi",{
        props: ['zhou'],
        template: '<li>{{zhou}}</li>'
    });

    var app = new Vue({
        el: '#app',
        //Model层 : 数据
        data: {
            items: ["zy","ln","web"]
        },

    })

</script>
```



# 生命周期

Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载DOM、渲染→更新→渲染、卸载等一系列过程，我们称这是Vue的生命周期。通俗说就是Vue实例从创建到销毁的过程，就是生命周期。
在Vue的整个生命周期中，它提供了一系列的事件，可以让我们在事件触发时注册JS方法，可以让我们用自己注册的JS方法控制整个大局，在这些事件响应方法中的this 直接指向的是Vue的实例。

![img](https://upload-images.jianshu.io/upload_images/13119812-5890a846b6efa045.png)

网络通信Axios



