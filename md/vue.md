# 1，创建vue项目

## 1.1，安装：

```vue
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

检查版本

```vue
vue --version
```

升级

```bash
npm update -g @vue/cli

# 或者
yarn global upgrade --latest @vue/cli
```

## 1.2，创建项目

创建一个新项目

```bash
vue create hello-world
```

选择下面三个

![image-20220216003250932](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20220216003250932.png)

# 2、

## 2.1、组成-三部分

- template		视图标签	（template标签不会被渲染 只是包裹作用）**必写**
- script              逻辑代码
- style                样式	<style lang='less/scss' scoped></style>

## 2.2，创建组件

- xxx.vue   后缀 .vue 结尾
- 三部分组件

## 2.3，组件使用

```vue
<script>
// 1.引入组件
import Banner from './components/Banner.vue'

export default {
  name: 'App',
  // 2.注册组件
  components: {
    Banner,
  }
}
</script>

<template>
  <div id="app">
    <h1>APP中的h1标签</h1>
    <!-- 3.使用组件 -->
    <Banner></Banner>
  </div>
</template>
```



# 3、Vue指令

## 3.1声明式渲染   -表达式

1、作用：获取vue数据 显示视图

2、语法：{{ js表达式 }}



# 总结

1.创建vue项目：vue create 项目名称

2.vue常用指令

​	2.1 v-html=' ' 插入HTML元素，渲染元素内容

​	2.2 v-text=' '  渲染元素内容

​	2.3 {{  }} 		模板语法 数据绑定

​	2.4 v-if=' 表达式 '	是否显示

​	2.5 v-else-if=' '

​	2.6 v-else

​	2.7 v-show=' 表达式 '	是否显示

​	2.8 v-bind : 属性=' '	绑定属性 v-bind : class=' '	v-bind : key=' '	简写：:key=' '

​	2.9 v-on: 事件名称=' 函数名 '	绑定事件	简写：@时间名=' 函数名 '

​	2.10 v-for=' （item,index） in arr '	遍历数组和对象

3、Vue绑定事件	this指向	事件对象获取

​	3.1语法

​		`<div v-on:click='demo'></div>`

​	3.2、this指向当前对象

​	3.3、事件对象获取

​		1、无参数传递：第一个参数就是event

​		2、有参数传递：需要手动传递事件对象

​				`  <div v-on:click='demo(1,2,$event)'></div>  `



# Vue事件

## 1、绑定事件：

`<div v-on:事件名='函数名'></div>`

## 2、实现方法：

```vue
methods:{
	函数名(){
	
	}
}
```

## 3、事件对象 event

1、无参数传递：第一个参数就是event

​		2、有参数传递：需要手动传递事件对象

​				`  <div v-on:click='demo(1,2,$event)'></div>  `

## 4、事件修饰符

- `.stop` 	* 等同于JavaScript中的`event.stopPropagation()`，防止事件冒泡
- `.prevent`    *等同于JavaScript中的`event.preventDefault()`，防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播）
- `.capture` 与事件冒泡的方向相反，事件捕获由外到内
- `.self` 只会触发自己范围内的事件，不包含子元素
- `.once `只会触发一次
- `.passive`

```vue
<template>
  <div>
    <p  @click="parent">
    这是父标签
    <button @click.stop="child">这是子标签</button>
    </p>

    <!-- 提交事件不再重载页面 -->
    <!-- <form v-on:submit.prevent="onSubmit"></form> -->

    <!-- 修饰符可以串联 -->
    <!-- <a v-on:click.stop.prevent="doThat"></a> -->
    <input type="text" v-on:keyup.enter='getInput'>
  </div>
</template>

<script>
export default {
  methods:{
    child(){
      console.log('子元素事件');
    },
    parent(){
      console.log('父元素事件');
    },
    getInput(){
      console.log('按了回车');
    }
  }

}
</script>

<style>

</style>
```



## 5、按键修饰符

- `.enter`	*
- `.tab`    *
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

```vue
<template>
  <div>
    <input type="text" v-on:keyup.enter='getInput'>
  </div>
</template>

<script>
export default {
  methods:{
    getInput(){
      console.log('按了回车');
    }
  }
}
</script>

<style>

</style>
```



## 6、系统修饰符

- `.ctrl` 	*
- `.alt`
- `.shift`
- `.meta`

```vue
<template>
  <div>
    <textarea @keyup.ctrl.enter="send" id="" cols="30" rows="10"></textarea>
    <button @click="send">send</button>
  </div>
</template>

<script>
export default {
  methods:{
    send(){
      console.log('发送了信息');
    }
  }
}
</script>

<style>

</style>
```



## 7、鼠标按钮修饰符

- `.left`
- `.right`
- `.middle`



# Vue中key属性的作用：

1、**作用：主要是为了高效的更新虚拟DOM**

2、使用 **diff** 算法

```vue
<template>
  <div>
    <ul>
      <li v-for="item in arr" :key='item'> {{ item }} </li>
    </ul>
    <button @click="addF">点击插入元素F</button>
  </div>
</template>

<script>
export default {
  date(){
    return{
      arr:['A','B','C','D','E']
    }
  },
  methods:{
    addF(){
      this.arr.splice(2,0,'F')
    }
  }
}
</script>

<style>

</style>
```



# 数组更新检测

## 1.说明：

在列表渲染中，如果遍历是数组，当数组数据发生改变时，页面什么时候能自动更新（页面重新渲染）

## 2.实现数组视图同步更新

1.变更方法（修改了原数组）

- push（） 接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度
- pop（）从数组末尾移除最后一项，减少数组的length值，然后返回移除的项
- shift（）移除数组中的第一个项并返回该项，同时数组的长度减1
- unshift（）在数组前端添加任意个项并返回新数组长度
- splice（）删除原数组的一部分成员，并可以在被删除的位置添加入新的数组成员
- sort（）调用每个数组项的toString()方法，然后比较得到的字符串排序，返回经过排序之后的数组
- reverse（) 用于反转数组的顺序，返回经过排序之后的数组

2.替换数组（修改后返回新的数组原数据不修改视图想同步更新覆盖原数组）

​	filter（）、concat（）和slice（）



# 对象更新检测

1、说明：对象修改后 视图同步更新视图 -- 内存：栈内存 堆内存

2、实现对象视图更新

- `Vue.set( target, propertyName/index, value )`

​		参数：

​				{Object | Array} target

​				{string | number} propertyName/index

​				{any} value

​				返回值：设置的值

​		用法：

​				想响应式对象中添加一个 property（属性），并确保这个property同样是响应的，且触发视图更新。他必须用于向响应式对象上添加新 property，因为 Vue 无法探测到普通的新增 property （例：`this.myObj.newProperty = 'hi'`）

```vue
<template>
  <div>
      <h2>对象同步更新</h2>
      <p>对象obj：{{ obj }}</p>
      <button @click="changeUname">修改对象已存在的属性</button>
      <button @click=" obj = {user:'admin'}">修改整个obj</button>
      <button @click="add">修改对象中不存在的属性</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
    data(){
      return {
        obj:{
          uname:'周以',
          age:21
        }
      }
    },
    methods:{
      changeUname(){
        this.obj.uname = '刘洲'  
      },
      add(){
        // this.obj.love='男和女',
        // console.log('obj',this.obj);
        //方法一：...
        // this.obj = {...this.obj};
        //方法二：es6 合并对象  Object.assgin({},{},{})
        // this.obj = Object.assign({},this.obj);

        //方法三。vue官网解决方法：
        //想响应式对象中添加一个 property（属性），并确保这个property同样是响应的，且触发视图更新。
        // this.$set(this.obj,'love','boy & girl');
        //Vue.set(this.obj,'love','boy & girl');
          
        //删除 同步试图 删除对象的property。如果对象是响应式的，确保删除能触发更新视图
        Vue.delete(this.obj,'age')
      }
    }
}
</script>
    
<style>

</style>
```





# Class 与 Style 绑定

1、介绍：动态的提交Class或者是style样式

2、绑定 HTML Class

- 直接绑定变量

  `<div v-bind:class="变量"></div>`

- 对象语法（推荐使用）

​		`<div v-bind:class="{类名：表达式-true显示类名、false隐藏，....}"></div>`

- 数组语法

​		`<div v-bind:class="[变量1，变量2，{类名：Boolean}]"></div>`

3、绑定内联样式

​	`v-bind:style ` 的对象语法直观看着非常像 CSS，但其实是一个 Javascript 对象。CSS property 名可以用驼峰式（nameClass）或短横线分割（name-class，记得用括号括起来）来命名

- 对象语法

​		`<div v-bind:style="{css样式:变量,...}"></div>`

- 数组样式

​		`<div v-bind:style="[baseStyle,overridingStyles]"></div>`

- 直接变量

  `<div v-bind:style="styleObj“></div>`

  ```vue
  data:{
  	styleObj:{
  		color:'red',
  		fontSize:'13px'
  	}
  }
  ```




# 表单输入绑定

1、介绍

​		你可以用 v-model 指令在表单 `<input>、<textarea> 及<select>` 元素上面双向数据绑定

​		通过指令 v-model=' ' 获取表单输入的信息数据 实现双向数据绑定

2、语法

```vue
<input type='text' v-model='变量' />
data(){
	return{
		msg:''
	}
}
```

  3、修饰符

- .lazy：只有挡input失去焦点时才更新数据

- .number：把input标签中输入的内容转换成数字类型，调用的时parseFloat   (Number())//浮点型
- .trim：去除左右空格

4 、 v-model实现原理

​		v-model 只不过是一个语法糖而已，真正的实现还是靠

​		v-bind: 绑定响应式数据

​		出发oninput 事件兵传递数据

```vue
<input v-model="val">
//基本等价于，因为内部还有一些其他的处理
$event是事件对象，$event.target.value表示input框中的输入值
<input type="text" :value="val" @input="val = $event.target.value">
```



```vue
<template>
  <div>
    <h2>表单输入绑定</h2>
    <!-- <input type="text" :value="msg" name="" id=""> -->
    <!-- 1.文本 v-model='' -->
    <input type="text" v-model="data1.msg" @keyup.enter="send" id="">
    <p>msg:{{ data1.msg }}</p>
    
    <!-- 单选按钮 -->
    <input type="radio" v-model="data1.sex" name="aa" value="男">男
    <input type="radio" v-model="data1.sex" name="aa" value="女">女
    <p>性别：{{ data1.sex }}</p>

    爱好(多选框)
    <input type="checkbox" v-model="data1.arr" value="吃">吃
    <input type="checkbox" v-model="data1.arr" value="导">导
    <input type="checkbox" v-model="data1.arr" value="看">看
    <p>选择的:{{ data1.arr }}</p>

    城市
    <select name="" id="" v-model="data1.select">
      <option value="北京">北京</option>
      <option value="上海">上海</option>
      <option value="武汉">武汉</option>
    </select>
    <p>选择的城市:{{ data1.select }}</p>
    <button @click="submit">提交注册</button>

    <hr>
    <input type="text" v-model.lazy="lazy" name="" id="">
    <p>lazy:{{ lazy }}</p>
    <input type="number" v-model="number" name="" id="">
    <p>number:{{ number }}</p>
    <input type="text" v-model="trim">
    <p>trim:{{ trim }}</p>

    <hr>
    <!-- v-model等价于v-bind:value='' @input="函数" -->
    <input type="text" :value="val" @input="changeVal">
    <p>val:{{ val }}</p>

  </div>
</template>

<script>
export default {
  data(){
    return{
      lazy:'',
      number:'',
      trim:'',
      val:'',
      data1:{  
        msg:'',
        sex:'',
        arr:[],
        select:'',
      }
    }
  },
  methods:{
    send(){
      console.log('msg:',this.msg);
    },
    submit(){
      console.log('提交的信息',this.data1);
    },
    changeVal(e){
      console.log(e);
      console.log(e.target.value);
      this.val = e.target.value
    }
  }
}
</script>

<style>

</style>
```

# 计算属性和侦听器

## 1、计算属性

- 介绍：处理数据后把数据缓存起来 使用数据的时候使用缓存的数据，但如果原数据被修改，需重新计算
- 语法

```vue
<template>
  <div>
    <h2>计算属性computed</h2>
    <!-- 如果是字符串 取反操作实现 -->
    <p>字符串:{{ msg }}</p>
    <p>字符串-取反:{{ msg.split('').reverse().join('') }}</p>

    <p>字符串-取反-函数封装:{{ qufan() }}</p>
    <p>字符串-取反-函数封装:{{ qufan() }}</p>
    <p>字符串-取反-函数封装:{{ qufan() }}</p>

    <p>字符取反-计算属性:{{ msg2 }}</p>
    <p>字符取反-计算属性:{{ msg2 }}</p>
    <p>字符取反-计算属性:{{ msg2 }}</p>

    <button @click="msg = 'nihao shijie'">修改msg</button>

    <!-- v-if  v-for  同时使用，采用计算属性的方式 -->
    <ul>
      <li v-for="item in shuigou2" :key="item.id">
        {{ item.fruit }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg:'hello world',
      shuigou:[
        {
          id:1,
          fruit:"苹果",
          flag:false,
        },
        {
          id:2,
          fruit:"香蕉",
          flag:true,
        },
        {
          id:3,
          fruit:"橘子",
          flag:false,
        }
      ]
    }
  },
  methods:{
    qufan(){
      console.log("执行封装函数取反");
      return this.msg.split('').reverse().join('');
    }
  },
  computed:{
    msg2(){
      console.log("执行计算属性取反");
      return this.msg.split('').reverse().join('');

    },
    shuigou2(){
      //过滤方法 返回满足条件的数组  例: 返回大于2的数字 [1,2,3,4] =>[3,4]
      return this.shuigou.filter((item)=>{
        return item.flag
      })
    }
  }

}
</script>

<style>

</style>
```

## 2、侦听器

- 介绍：Vue通过watch现象提供了一个更通用的方法，来响应数据的变化
- 语法：

```vue
<template>
  <div>
    <h2>watch 侦听器</h2>
    <input type="text" v-model="inp">
  </div>
</template>

<script>
export default {
  data(){
    return{
      inp:''
    }
  },
  watch:{
    inp:function(n,o){
      console.log(n,o);
    }
  }
}
</script>

<style>

</style>
```

## 3、区别

相同点：computed 和 watch 都是观察页面的数据变化。

不同点：

- computed：是计算属性，依赖其他属性值
  - 只支持缓存，只有以来数据发生变化，才会重新进行计算
  - 不支持异步，挡computed内有异步操作时无效，无法监听数据变化
- watch：没有缓存性，更多的是**观察**的作用，类似某些数据的监听回调，每当监听的数据变化时都会执行回调进行后续操作；
  - 不支持缓存，数据变化直接会触发相应地操作
  - watch支持异步
  - 监听的函数接受两个参数，第一个参数是最新的值；第二个参数是输入之前的值；当我们需要深度监听对象中的属性时，可以打开deep:true选项，这样便会对对象中的每一项进行监听

# prop传递数据

1、作用：实现组件之间数据传递  ---父传子

2、语法

- 子组件

```vue
<template>
  <div>
    <h2>这是子组件</h2>
    <p>接受父组件传递过来的数据msg:{{ msg }} num:{{ num }} </p>
    <p>接收父组件aa:{{ aa }}</p>
    <!-- 控制台会报错：不允许子组件修改props数据 -->
    <!-- <button @click="aa='修改aa'">修改父组件传递过来的aa:info</button> -->
  </div>
</template>

<script>
export default {
  // 方法一，使用数组接收
  // props:[ 'msg','num','aa' ],
  // 方法二，使用对象接收  对象格式和默认值处理
  props:{
    //基础的类型检查
    msg:String,
    //多个可能的类型
    num:[String,Number],
    //带有默认值的
    aa:{
      type:String,
      default:'默认值'
    },
    //必填字符串，父组件没有传递过来就报错
    propC:{
      type:String,
      required:true
    },
    //特殊的类型：array object
    arr:{
      type:Array,//typr:Object
      //对象或数组默认值必须从一个工厂函数获取
      default:function(){
        return []
      }
    }
  }
}
</script>

<style>

</style>
```

- 父组件

```vue
<template>
  <div>
    <h2>这是父组件</h2>
    <p>info: {{ info }} </p>
    <button  @click="info='修改之后的info'">修改info的值</button>
    <hr>
    <!-- prop数据传递 父传子 -->
    <Son msg='hello parent' :num='100' :aa='info'/>
  </div>
</template>

<script>
import Son from './son.vue'

export default {
  components:{
    Son,
  },
  data(){
    return{
      num:200,
      info:'子组件我是你的父组件'
    }
  }
}
</script>

<style>

</style>
```

- 子组件使用父组件数据  直接当data里面的数据使用{{ msg }}

3、注意：

- prop传递数据时正向传递--父传子	数据是响应式的	父组件数据修改了子组件同步更新
- 子组件不能直接修改prop传递的数据

4、prop验证（见上）

# 自定义事件——子传父

1、作用：把子组件的数据传递给父组件  通过自定义事件

2、语法

- 子组件定义事件

`this.$emit('getData',this.msg)`

- 父组件-调用子组件上面接受自定义事件

`<子组件 @自定义事件名='函数名'>`

3、特殊的prop——传递函数

- prop传递的是一个函数名	`<子组件：fun='函数名'/>`
- 子组件接收props:['fun']
- 子组件调用父组件传递的函数名fun   `this.fun()`  `fun()`

```vue
//子组件
<div>
    <h2>son1子组件</h2>
    <button @click="sendData">向父组件发送数据</button>
    <h2>父组件传递过来的num:{{ num }}</h2>
    <button @click="addNum">自定义事件,让父组件完成对num的运算</button>
    <!-- 接收父组件传递过来的函数实现对父组件中的num的运算 -->
    <button @click="fun()">使用父组件传递过来的函数方式一:直接使用</button>
    <button @click="addNum1()">使用父组件传递过来的函数方式二:自己的函数来调用</button>
  </div>
<script>
export default {
  props:{
    num:Number,
    fun:Function
  },
  data(){
    return {
      Data:'Son1发给父组件'
    }
  },
  methods:{
    sendData(){
      //自定义事件--抛出一个自定义事件
      this.$emit('getData',this.Data)
    },
    addNum(){
      this.$emit('addNum')
    },
    addNum1(){
      this.fun()
    }
  }
}
</script>

//父组件
<div>
    <Son1 @getData='getData' :num='num' @addNum='addNum' :fun='addNum'></Son1>
</div>
<script>
export default {
  components:{
    Son,
    Son1
  },
  data(){
    return{
      num:200,
    }
  },
  methods:{
    getData(val){
      console.log(val);
      this.msg = val
    },
    addNum(){
      this.num ++;
    }
  }
}
</script>
```

# 插槽

1、说明：vue 实现了一套内容分发的API，定义时不知道具体要显示什么，只是留出来显示的位置，在组件调用时写具体内容，能攒现在预留的位置上

2、定义：

​	使用 `<slot>`标签预留位置

3、调用组件时

​	写具体的要呈现的内容，要显示在`<slot>`标签中

​	<组件> xxx </组件>

4、匿名组件（常用）

​	定义时：`<slot name='default'></slot>` or `<slot></slot>`

```vue
<div>
    <slot></slot>
    <slot name="default"></slot>
</div>
```

5、具名插槽（常用）

- 定义插槽的时候有名字name属性
- 注意：使用的时候有名字的在具名插槽里面显示，没有名字找匿名插槽

```vue
<slot name="header"></slot>

<template v-slot:header>
	内容
</template>
```

6、作用域插槽

- 作用：让插槽内容能够访问子组件中才有的数据（插槽对外提供数据）

```vue
<slot name="header" v-bind:msg="msg" v-bind:num='num'></slot>

<template v-slot:header="data"> {{ data }} </template>
```

7、动态插槽

- 作用：动态指令参数也可以用在 `v-slot` 上，来定义动态的插槽名：

```vue
<template v-slot:[name]></template>

data(){
    return{
        name:'header'
    }
}
```

# 总结所有的vue指令

指令：v-指令=' 表达式 '	/v-xx=' js环境 '

1、v-text

- 更新元素的 `textContent`。如果要更新部分的 `textContent`，需要使用 `{{ Mustache }}` 插值。

- ```vue
  <span v-text="msg"></span>
  <!-- 和下面的一样 -->
  <span>{{msg}}</span>
  ```

2、v-html=' '

- 插入HTML数据 解析html代码 识别标签
- 不安全

3、v-show=' 表达式 '

- 是否显示	true显示  false隐藏
- 控制css属性：display: block/ none

4、v-if=' '

- 是否显示	true显示  false隐藏
- 控制元素的创建和销毁

5、v-else

6、v-else-if=' '

7、v-for=' '

- 遍历数组和对象
- `<div v-for='(item,index) in arr' :key='id'> {{ item }} </div>`
- `<div v-for='(item,key,index) in obj' :key='id'> {{ item }} </div>`

8、v-on:事件名=' 函数名 '

- 绑定事件 简写： @事件名=' 函数名 '
- `<div v-on:click='demo'>点击</div>`
- 事件-修饰符
  - ​	.stop
  - ​    .prvent
  - 键盘  .enter

9、v-bind:属性='  '

- 动态绑定数据	简写： `:属性=''`
- 语法：`<div v-bind:click='demo'>点击</div>`

10、v-model='  '

- 表单操作 获取数据——双向数据绑定
- 语法：`<input v-model='msg'/>`
- 实现原理
  - `<input :value='val' @input='val=$event.target.value'/>`

11、v-slot='  '

- 显示插槽内容
- 语法：`<template v-slot:插槽名字='数据'></template>`

12、v-pre

13、v-cloak

14、v-once

# 动态组件和异步组件

## 动态组件

1、作用：实现组建的动态切换   选择加载哪个组件

2、语法：

`<component :is='加载的组件名'></component>`

3、特点：

​	通过组件的销毁和重建过程实现组件的切换

4、在动态组件上使用`keep-alive`——使组件失活

```vue
<keep-alive>
	<component :is='加载的组件名称'></component>
</keep-alive>

<!--include and exclude-->
<!-- 逗号分隔字符串 -->
<keep-alive include="a,b">
  <component :is="view"></component>
</keep-alive>

<!-- 正则表达式 (使用 `v-bind`) -->
<keep-alive :include="/a|b/">
  <component :is="view"></component>
</keep-alive>

<!-- 数组 (使用 `v-bind`) -->
<keep-alive :include="['a', 'b']">
  <component :is="view"></component>
</keep-alive>

<!-- max:最多可以缓存多少组件实例。一旦这个数字达到了，在新实例被创建之前，已缓存组件中最久没有被访问的实例会被销毁掉。-->
<keep-alive :max="10">
  <component :is="view"></component>
</keep-alive>
```

## 异步组件

1、说明：使用组件的时候再去加载这个组件，提高代码执行速度

1、默认引入组件：

​	提前加载组件

​	` import ComA from './ComA.vue'`;

3、异步组件写法：——局部

- const ComA = ()=>import'./ComA.vue')

- ```vue
  <script>
  export default{
      components:{
          ComA,
          ComB,
          ComA = ()=>import'./ComA.vue')
          ComB = ()=>import'./ComB.vue')
      }
  }
  </script>
  ```

# 处理边界情况

1、介绍

​	访问元素 &  组件——vue组件之间数据传递  获取数据

2、vue组件之间数据传递

- prop 父传子
- 自定义事件 子传父 `this.$emit('自定义事件名','')`
- 访问根实例    new Vue({ data:{ } })

```vue
js: this.$root.xx
template:{{ $root.xx }}
```

- 访问父级组件实例 $parent

```js
this.$parent.xxx
{{ $parent.xxx }}
```

- 获取子组件实例

`this.$children[0]`

- 访问子组件实例或子元素——操作DOM元素

  - 获取DOM元素：

    ```js
    <div ref='xx'></div>
    this.$refs.xx	//获取div-dom元素
    ```

  - 获取子组件实例

    ```js
    <Son ref='xx'/>
    this.$refs.xx
    ```

- 原型链

  `Vue.prototype.$user='admin'`

# 生命周期函数

1、生命周期：vue从创建vue实例到组件销毁的过程	自动创建的函数

​	每个Vue实例在被创建时都要经过一系列的初始化过程——例如：需要设置数据监听、编译模板、将实例挂载到DOM并在数据变化时更新DOM等。同时在这个过程中也会运行一些叫做生命周期钩子的函数

2、生命周期函数：(与`data(){}` 同级)

- beforeCreate	new vue实例后，创建之前 ——获取不到data methods 和数据
- created ***     创建之后，可以实现网络请求
- beforeMount     挂载之前，render首次被调用
- mounted ***   挂载完毕 ——初次获取DOM元素的地方
- beforeUpdate    更新之前，数据更新了，视图未更新
- updated ***    更新之后，数据和视图 同步
- beforeDestroy   销毁之前，什么都可以做
- destroyed        销毁之后，清空数据 或者 计时器 、监听器、子实例等
- activated keep-alive组件激活时调用
- deactivated    keep-alive组件停用时调用

```vue
<template>
  <div id="div">
    <h2>生命周期函数</h2>
    <p>msg:{{ msg }}</p>
    <button @click="msg='更新之后的msg'">更新msg数据</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg:'hello'
    }
  },
  methods:{
    demo(){
    }
  },
  //beforCreate 创建之前
  beforeCreate(){
    console.group('beforCreate--创建之前');
    console.log(this);
    console.log(this.data);
    console.log(this.msg);
  },
  //created 创建之后，最早的网络请求
  created(){
    console.group('created--创建之后-首次获取data-methods');
    console.log(this);
    console.log('el-dom',this.$el);
    console.log('data',this.$data);
    console.log('demo',this.demo);
  },
  //beforeMount
  beforeMount(){
    console.group('beforeMount--挂载之前-获取不到DOM元素');
    console.log('el-dom',this.$el);
    console.log('dom',document.getElementById('div'));
  },
  //mount
  mounted(){
    console.group('mounted--挂载之后-首次获取到DOM元素');
    console.log('el-dom',this.$el);
    console.log('dom',document.getElementById('div'));
  },
  //beforeUpdate
  beforeUpdate(){
    debugger
    console.group('beforeUpdata--更新之前,数据更新,视图未更新');
    console.log('data',this.$data);
    console.log('msg',this.msg);
    debugger
  },
  //updated
  updated(){
    console.group('updated--更新之后,数据、视图更新');
    console.log('data',this.$data);
    console.log('msg',this.msg);
  },
  //beforeDestroy
  beforeDestroy(){
    console.group('beforeDestroy--销毁之前,什么都可以做');
    console.log('data',this.$data);
    console.log('msg',this.msg);
    console.log('el-dom',this.$el);
  },
  //destroyed
  destroyed(){
    console.group('destroyed--销毁之后,什么都可以做--数据初始化-清空计时器');
    console.log('data',this.$data);
    console.log('msg',this.msg);
    console.log('el-dom',this.$el);
  },
    
  //<keep-alive>
  //	<component :is="life"></component>  
  //</keep-alive>
    
  //activated
  activated(){
    console.log('keep-alive-组件激活-显示组件');
  },
  //deactivated
  deactivated(){
    console.log('keep-alive-组件停用-隐藏组件');
  }
}
</script>
  
<style>

</style>
```

![lifecycle](D:\Desktop\md\vue.js\lifecycle.png)

# Provide/ inject 接收、传递数据

1、说明：

​	vue组件之间的数据传递	深层数据传递	顶级向子代传递数据

​	例：父传递子组件 prop	父组件 --> 孙子	父组件 --> 曾孙子	也可以用prop实现

2、语法

​		提供数据：`provide: Object | () => object`

​		接收数据：`inject: Array<string> | { [key:string]: string | object }`

3、基础使用

- 父组件：

```
data(){
},
provide:{
	msg:'顶级数据'
}
```

- 后代

`inject:['msg']`

4、注意：provide 和 inject 绑定并不是可响应的。这是可以为之的

```js
//provied传递数据
//写法一：对象写法
 provide:{
   info:'我是provied传递数据'
 },
//方法二：函数形式 返回对象
provide(){
    return {
        info:'我是provied传递数据'+this.count,
        parent:this.parent
    }
}

//接收数据
//写法一：数组--推荐
inject:['info']
//写法二：对象
inject:{
    aa:{
        from: 'info',//来源--真实的字段名称
            default: '默认值',//设置默认值
    }
}
```

# 自定义指令

1、介绍

vue提供的是内置指令 v-for v-if.....	自定义指令：自己创建指令

2、注册一个全局自定义指令写法：

- 注册一个全局自定义指令

```js
Vue.directive('指令名称',{
  //提供函数方法 可以操作元素
  inserted(el){
  }
})
```

- 使用：v-指令名称
- 代码

```js
Vue.directive('focus',{
  inserted(el){//element当前的指令的元素
    //el：指令所绑定的元素，可以用来直接操作DOM
    el.focus();
  }
})
```

3、注册一个局部自定义指令写法

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。

指令钩子函数会被传入以下参数：

- `el`：指令所绑定的元素，可以用来直接操作 DOM。
-  binding：一个对象，包含以下 property：

  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。

```js
color:{
    bind(el,binding){
        //el:指令绑定的元素，用来操作DOM
        //binding:一个对象  name:指令名,不包括v-前缀/value:指令的绑定值
        console.log(el);
        console.log(binding);
        el.style.color = binding.value
    }
}
```

# 过滤器

Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：**双花括号插值和 `v-bind` 表达式** (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示：

```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```

你可以在一个组件的选项中定义本地的过滤器：

```js
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

或者在创建 Vue 实例之前全局定义过滤器：

```js
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```

可以接收参数

`{{ message | filterA('arg1', arg2) }}`



# 路由

## 1、介绍

vue组件中实现页面的跳转 配置路由——通过路由实现页面的跳转

## 2、安装

1.安装路由

- 安装命令：npm install vue-router -S

- 引入

- ```js
  import Vue from 'vue'
  import VueRoter from 'vue-roter'
  
  Vue.use(VueRoter)
  ```

- 定义（路由）组件

```js
import Hpme from './Home.vue'
import About from './About.vue'
```

- 定义路由——页面走向

```js
const routes =[
    {
        path:'/',//path：地址栏的路径
        component: Home //跳转这个路径显示的组件：页面
    },
    { path:'/about',comonent: About },{},{}...
]
```

- 创建router实例

  ```js
  const router = new VueRouter({
      routes:routes
  })
  ```

- 挂载路径

```js
new Vue({
    router:router,
})
```

- 显示路由出口

`<router-view></router-view>`



## 动态路由匹配

1、介绍

路由传递参数 如何给路由传递参数 如何接收参数

2、语法

```js
const router = new VueRouter({
    routes: [
        //动态路径参数 、以冒号开头
        { path: '/user/:id',component:User }
    ]
})
```

3、获取动态路由传递的参数

this.$route.xxx

4、 $route

- fullPath    路由路径的全地址
- matched  数组格式 包含当前的路由路径 以及 父组件的路由路径
- name        路由名称
- params{} 路由动态参数  定义路由： /user/:uname params={uname:xx}
- path         路由路径走向
- query       地址栏参数 xx?aa=123 





# Vuex

介绍：

Vuex 是一个专为 Vue.js 应用程序开发的**状态管理模式 + 库**。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

## 状态管理模式

单个组件状态变化时：

![单个组件状态变化](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20220419124820220.png)

这个状态自管理应用包含以下几个部分：

- **state**，驱动应用的数据源；
- **view**，以声明方式将 **state** 映射到视图；
- **actions**，响应在 **view** 上的用户输入导致的状态变化。



当需要多个**组件共享状态**时，单向数据流的简洁性容易被破坏（传递的数据过多，太过复杂）；

- 多个视图依赖于统一状态
- 来自不同视图的行为需要变更同一状态

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢？在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性，我们的代码将会变得更结构化且易维护。

![vuex](https://v3.vuex.vuejs.org/vuex.png)



## 安装

`npm install vuex --s --legacy-peer-deps`

## state

1、在main.js中引入，并在/store/index.js创建store仓库

```js
//'main.js'
import store from './store'
new Vue({
  store,
}).$mount('#app')

//'/store/index.js'
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
//创建store仓库   --vuex数据  实现组件共享
const store = new Vuex.Store({
  //共享的数据
  state: {
    name:'admin'
  }
})
//导出
export default store
```

2、在组件中获取state数据

```vue
<template>
<div class="home">
    <h2>home</h2>
    <p>直接使用($store.state.name): {{ $store.state.name }}</p>
    <p>通过辅助函数使用: {{ name }}</p>
    </div>
</template>
import { mapState } from 'vuex'

<script>
    export default {
        name: 'HomeView',
        //计算属性
        computed:{
            ...mapState([
                'name'
            ])
        }
    }
</script>
```

## Mutations:修改state数据

更改 vuex 的 store 中的状态唯一的方法就是提交mutations。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 **事件类型 (type)** 和 一个 **回调函数 (handler)**。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数;

- 直接接收

```js
//创建store仓库   --vuex数据  实现组件共享
const store = new Vuex.Store({
  //共享的数据
  state: {
    name:'admin',
    count:100
  },
  mutations:{
    addCount(state,num){//接收参数：第一个state 第二个：payload 参数
      state.count+=num
    },
    reduceCount(state){
      state.count--
    }
  }
})
```

```vue
<template>
<div class="home">
    <h2>home</h2>
    <p> {{ count }} </p>
    <button @click="addCount">+</button>
    <button @click="reduceCount">-</button>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'HomeView',
        components: {
        },
        data(){
            return {
                num:100
            }
        },
        //方法
        methods:{
            addCount(){
                this.$store.commit('addCount',this.num)
            },
            jianfa(){
                this.$store.commit('reduceCount')
            }
        },
        //计算属性
        computed:{
            ...mapState([
                'name',
                'count'
            ])
        }
    }
</script>

```

- 使用mapmutations

```vue
<script>
	import { mapState,mapMutations } from 'vuex'
    export default{
        data(){
            return {
                num:100
            }
        }
        methods:{
            ...mapMutations(['addCount','reduceCount']),
            addCount1(){
                this.addCount(num)
            },
            reduceCount1(){
                this.reduceCount()
            },
        }
    }
</script>
```

**mutations必须遵循Vue的响应规则**

既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：

1. 最好提前在你的 store 中初始化好所有所需属性。
2. 当需要在对象上添加新属性时，你应该

- 使用 `Vue.set(obj, 'newProp', 123)`, 或者
- 以新对象替换老对象。例如，利用对象展开运算符，我们可以这样写：

```js
state.obj = { ...state.obj,newProp: 123 }
```

```js
state: {
    student:{
        sname:'周以',
            age:21,
    },
},
mutations:{
    addSname(state,payload){
        //方法一
        // Vue.set(state.student,payload.name,payload.value)
        //方法二：以新对象替换老对象，利用对象绽开符" ... "
        state.student = { ...state.student,payload }
    }
}
```

```vue
<template>
  <div id="about">
    <p>{{ student }}</p>
    <button @click="change">修改</button>
    <button @click="add">添加</button>

  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex'
export default {
  data(){
    return {
    }
  },
  //方法
  methods:{
    ...mapMutations(['changeStudent','addSname']),
    change(){
      this.changeStudent({
        sname:'张三'
      })
    },
    add(){
      this,this.addSname({
        name:'love',
        value:'vue'
      })
    }
  },
  //计算属性
  computed:{
    ...mapState(['student'])
  },
}
</script>
```

## actions

异步版的mutation，通过操作mutation实现

## getters

state的 “ 计算属性 ” 

## 小结

1、vuex仓库数据 state   getters

- state获取：

  - 直接获取：`this.$store.state.xxx`

  - 辅助函数

    ```js
    computed:{
        ...mapState(['','',...])
    }
    ```

- getters获取

  - 直接获取：`this.$store.getters.xxx`

  - 辅助获取

    ```js
    computed:{
        ...mapGetters(['','',...])
    }
    ```

2、操作修改 state - - mutations	actions

- mutations 操作

  - 直接获取：`this.#store.commit('函数名','参数')`

  - 辅助函数

    ```js
    computed:{
        ...mapMutations(['',...])
    }
    ```

- actions

  - 直接获取：`this.$store.dispatch('函数名','参数')`

  - 辅助函数

    ```js
    computed:{
        ...mapActions(['',...])
    }
    ```

## Modules

命名空间：`namespaced: true,`

- state：

  - 直接`this.$store.state.模块名.变量`

  - 辅助函数`...mapState('模块名',['模块变量'])`

- mutations：
  - 直接`this.$store.commit('模块名/函数名'，'参数')`
  - 辅助函数`...mapMutation('模块名',['函数'])`

- actions
  - 直接`this.$store.diapatch('模块名/函数名','参数')`
  - 辅助函数`...mapActions('模块名',['函数'])`
- getters
  - 直接`this.$store.getters['模块名/函数名']`
  - 辅助函数`...mapGetters('模块名',['函数'])`



## 访问全局状态

```js
getters:{
    //geters数据处理的时候获取全局的getters state数据
    //state获取当前模块的状态-state getters获取当前模块的所有的getters
    //rootstate获取根上的state数据可以获取其他模块的数据
    //rootGetters获取根上的所有的getters全局的和所有模块的
    getters getGlobalcity(state，getters，rootstate，rootGetters){     
        console.log('-cityModule-getters',state,getters,rootstate,rootGetters);
    }
}
```

局部模块的`context`对象的 可以访问全局的数据state、getters、mutations、actions、包括其他模块

`context.commit('changeUser','全局的user','{root:true}')`
