# 1、js变量类型

- 原始类型

储存在栈中，每个变量是相互独立的，一个变量改变不会影响其他变量

```js
let a = 10;
let b = a;
a = 20;
console.log(b)//10
```

![image-20220413134621249](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20220413134621249.png)

```js
let a;//undefinded
const string = 'string';//字符串
const number = 1;//数字
const boolen = true;//布尔值
const symbol = Symbol('symbol')//es6新增 表示独一无二的值，最大的用法是用来定义对象的唯一属性名。
```



- 引用类型

数据储存在堆中，并且有唯一的内存地址。将对象 a 赋值给变量 b 只是把内存地址赋值给了 b 。

```js
let a = { age: 20 };
let b = a;
a.age = 21;
console.log(b)//21
```

![image-20220413134725743](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20220413134725743.png)

```js
const object = { name: '周以' }//对象
const array = ['1','二'，'san']//数组
const null = null;//空，指向空地址
function test(){}//方法
```

# 2、typeof 运算符

作用：检查类型

当类型为：object、array、null 时只能检测出是object类型

# 3、深拷贝

- 将原对象转成 json 类型数据，再转回来赋值，实现深拷贝

json没办法序列化函数，会自动忽略 undefined 和 symbol ，无法处理循环引用，但是高效

```javascript
newdata = JSON.parse(JSON.stringify(oldArray))
```

- 使用递归实现多层次的深拷贝

```js
const oldobj = {
  name: '周以',
  age: 21,
  colors: ['ren','black','green'],
  firend: {
    name: 'zhangsan'
  }
}

// const newobj = oldobj;
// newobj.name = 'zhouyi';
// console.log('o',oldobj);
// console.log('n',newobj);

//深拷贝
function deepClone( obj = {} ){
  //判断类型，确保类型只能为对象或者数组
  if(typeof obj !== 'object' || obj == null){
    return obj
  }
  let result;
  //判断类型：两种类型有两种结果
  if(obj instanceof Array){
    return result = [];
  }else{
    result = {};
  }
  //循环赋值
  for(let key in obj){
    //递归循环赋值，深层次对象或者数组
    result[key] = deepClone(obj[key])
  }
  //result = {...obj};无法实现深层次的赋值
  return result;
}

//优化
function deepClone1(obj) {
  let cloneObj = Array.isArray(obj) ? [] : {}
  if (obj instanceof Object) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) { // 只拷贝自身属性，原型上的不拷贝
        cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) :  obj[key]
      }
    }
  } else {
    return obj
  }
  return cloneObj
}

function isObject(obj) {
  return typeof(obj) === 'object' && typeof obj !== 'null'
}

const newobj = deepClone(oldobj);
newobj.firend.name = 'zhouyi';
console.log('o',oldobj);
console.log('n',newobj);
```

# 4、继承extends

子类可以继承父类的属性和方法。本质是使用原型实现的

使用**extends**关键字继承父类

子类继承的属性必须要在构造函数中用 **super** 关键字包裹

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  active(){
    console.log('我在喝水');
  }
}

//子类：student
class Studet extends Person {
  constructor(name, age) {
    //使用父类的name属性
    super(name);
    this.age = age;
  }
  myActive(){
    console.log('周以在学前端');
  }
}

const student = new Studet('zhouyi',21);
console.log(student.age);
student.myActive();
student.active()
```

# 5、原型和原型链

**原型**：

每个对象都有原型（称为隐式原型：`student.__proto__`）指向构建这个实例的类的原型（称为显示原型：`Student.protoytpe`）

当我们在一个对象中查找不到属性或者方法，会在原型中查找

```
> Student.prototype === student.__proto__
< true
> Student.prototype
< Person {constructor: ƒ, myActive: ƒ}
	constructor: class Student
	myActive: ƒ myActive()
	[[Prototype]]: Object
> student.__proto__
< Person {constructor: ƒ, myActive: ƒ}
	constructor: class Student
	myActive: ƒ myActive()
	[[Prototype]]: Object
```

`student.hanOwnProperty('name')`用来检验**当前属性**是否是**此对象本身的属性**，如果是返回`true`

![原型链](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20220413163955587.png)

# 6、this

 this 的值是在函数**执行时**确定的，不是在函数定义时决定

this指向调用者。

settimeout是window对象调用，故指向window，使用箭头函数时遵循上一级指向

bind函数：改变this指向、第一个参数是this的值，后面的参数是函数接收的参数的值、返回值不变

# 7、Promise

**Promise**的三种状态：**pending**（创建前）、**fulfilled**（创建成功）、**rejected**（创建失败）；

```js
//promise三种状态：pending、fulfilled、rejected
const promise1 = new Promise((resolve, reject) => {

});

console.log('promise1',promise1);

const promise2 = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log('promise2 resolve前',promise2);
    resolve();
    console.log('promise2 resolve后',promise2);
  })
});

const promise3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log('promise3 reject前',promise3);
    reject();
    console.log('promise3 reject后',promise3);
  })
})
//promise1 Promise {<pending>}
//promise2 resolve前 Promise {<pending>}
//promise2 resolve后 Promise {<fulfilled>: undefined}
//promise3 reject前 Promise {<pending>}
//promise3 reject后 Promise {<rejected>: undefined}
```

**promise现象**

当此时**promise**状态为**fulfilled**时执行回调函数**then**,反之执行回调函数**catch**

```js
const promise4 = Promise.resolve('promise4 data');
console.log('promise4',promise4);
//当此时promise状态为fulfilled时执行回调函数then
promise4.then(data => {
  console.log('data',data);
}).catch(err => {
  console.log('err',err);
});

const promise5 = Promise.reject('promise5 err');
console.log('promise5',promise5);
//当此时promise状态为rejected时执行回调函数catch抛出错误
promise5.then(data => {
  console.log('data',data);
}).catch(err => {
  console.log('err',err);
});
```





**Promise加载图片**

```js
//promise加载图片
function loadImage(src) {
  //创建promise实例
  const promise = new Promise((resolve, reject) => {
    //创建 img 标签
    const img = document.createElement('img');
    //当img创建成功
    img.onload = function(){
      resolve(img);
    }
    //当img创建失败
    img.onerror = function(){
      //抛出error
      const error = new Error(`图片加载失败`);
      reject(error);
    }
    img.src = src;
    console.log(img);
  })
  return promise
}

const url = './1.png';
loadImage(url).then(img => {
  console.log('img',img);
}).catch((err) => {
  console.log('err',err);
});
```

**async、await 和promise的关系**

```js
//async、await 和promise的关系
//执行 async 函数，返回的都是promise对象
async function test1(){
  return 1;
}
async function test2(){
  return Promise.resolve(2); 
}
const result1 = test1();
const result2 = test2();
console.log('result1',result1);//result1 Promise {<fulfilled>: 1}
console.log('result2',result2);//result2 Promise {<pending>}

//Promise.then 成功的情况对应 await
//对象
async function test3(){
  const p3 = Promise.resolve(3);
  p3.then(data3 => {
    console.log('data3',data3);
  })
}
test3();
//普通值
async function test4(){
  //await 会把普通值封装成 Promise对象 让后它有相当于then( )方法 接着去解析 拿到结果。
  const data4 = await 4;//此时 4 等同于Promise.resolve(4);
  console.log('data4',data4);
}
test4();
//函数
async function test5(){
  //await 会把普通值封装成 Promise对象 让后它有相当于then( )方法 接着去解析 拿到结果。
  const data5 = await test1();//此时 4 等同于Promise.resolve(4);
  console.log('data5',data5);
}
test5();
//Promise.catch 异常的情况 对应try...catch
async function test6(){
  const p6 = Promise.reject(6);
  try {
    const data6 = await p6;
    console.log('data6',data6);
  } catch (error) {
    console.error('error',error);
  }
}
test6();
```

async异步函数执行顺序的问题

```js
//async异步函数执行顺序的问题
async function test1(){
  console.log('test1 begin');//2
  const result = await test2();
  console.log('result',result);//5
  console.log('test1 end');//6
  //5、6可认为
  // setTimeout(() => {
  // 	console.log('result',result);//5
  // 	console.log('test1 end');//6
  // }，0)
}
async function test2(){
  console.log('test2');//3
}
console.log('script begin');//1
test1();
console.log('script end');//4
```

```
根据js顺序先执行	console.log('script begin');
然后执行 text1();
text1();中按顺序先执行	console.log('test1 begin');
执行到const result = await test2();时
先执行test2();中的	console.log('test2');
然后执行await （test2()返回的结果，async 函数，返回的都是promise对象，此时test2()中没有返回值，故为undefined），所以result的值为undefined；
awaitawait后面都是回调里的内容，后两行代码存入Callback Queue中，test1()结束
执行console.log('script end');
所有任务执行完毕后，通过Event Loop循环来执行微任务
console.log('result',result);
console.log('test1 end');

故代码执行结果为：
script begin;
test1 begin;
test2;
script end;
result undefined;
test1 end
```

### Promise.all()用法以及与Promise.race()区别

Promise.all()会在多个promise全部resolve之后执行.then，而Promise.race()会在任何一个promise resolve后就会执行.then，两者都是promise并行执行代码。

# 8、微任务和宏任务

结论：**微任务**  执行时机比  **宏任务**  **早**

宏任务：setTimeout，setInterval，DOM事件，AJAX网络请求

微任务：Promise，async/await

执行顺序：微任务 => DOM渲染 => 宏任务

```js
//微任务和宏任务
const $content = $('<p>内容</p>');
$('#box').append($content)

console.log(1);

Promise.resolve().then(() => {
  console.log('2 promise');
  alert('promise then')
})

setTimeout(() => {
  console.log('3 setTimeout');
  alert('setTimeout')
},0)

console.log(4);
//结果：
//1、4、2 promise、3 setTimeout
```

# 9、使用文档碎片减少DOM操作

可优化性能

```js
//使用文档碎片减少DOM操作
const list = document.getElementById('list');
//创建文档碎片
const fragment = document.createDocumentFragment();
//循环创建 li ，并放入fragment文档碎片中
for (let i = 0; i < 5; i++) {
  //创建li
  const item = document.createElement('li');
  //设置 li 中的内容
  item.innerHTML = `数字${i}`;
  //设置插入位置
  fragment.appendChild(item);
}
//将文档碎片放入所需位置
list.appendChild(fragment);
```

# 10、事件冒泡

原理：在页面中对元素进行操作时，元素执行本身的响应事件后会向父级冒泡，继续响应父级的事件。

解决方法：

使用`el.stopPropagation()` 阻止事件冒泡机制

IE单独使用`cancelBubble()`

## 事件委托、代理

通过事件冒泡机制可以完成事件代理、事件委托，降低事件绑定次数提高性能

```js
//事件委托、事件代理
const list = document.getElementById('list');
const lis = document.getElementsByTagName('li');
const btn = document.getElementById('btn');
//将类数组 lis 转换成数组
lisArray = Array.prototype.slice.call(lis);
//绑定事件处理函数
function addEvent(elem, type ,fn){
  elem.addEventListener(type, fn);
}
addEvent(list,'click',(e) => {
  const target = e.target;
  if(target.nodeName === 'LI'){
    alert(target.innerHTML);
  }
})

btn.addEventListener('click',() => {
  const li = document.createElement('li');
  li.innerHTML = '新增';
  list.insertBefore(li,btn);
})
```

# 11、防抖和节流

- 防抖

防止多次发送http请求，造成浏览器负担过大

```js
//防抖
const input = document.getElementById('input');

//用户输入完毕后，才发送一次http请求
function debounce(fn) {
  //设定表示，表示是否有正在执行的setTimeout，如果有，就清除旧的setTimeout，然后再建立新的
  let timer = null;
  return function(e){
    //判断是否存在
    if (timer) {
      clearTimeout(timer)
    }
    //建立新的setTimeout
    timer = setTimeout(() => {
      //传入this和event元素
      fn.apply(this, arguments);
    }, 1000)
  }
}
//事件监听
input.addEventListener('input',debounce(function(e) {
  console.log(this);
  console.log(e);
  console.log('发送搜索请求');
}))
```

- 节流

```js
//节流
//一段时间内只执行一次某个操作;过了这段时间,还有操作的话,就继续执行新的操作
const box = document.querySelector('.box');

function throttle(fn){
  let timer = null;
  return function(){
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn();
      timer = null;
    },200)
  }
}
box.addEventListener('drag',throttle(function(e){
  console.log('a');
}))
```

# 12、map、set

1.Map是键值对，Set是值的集合，**当然键和值可以是任何的值**；

2.Map可以通过get方法获取值，而set不能因为它只有值；

3.都能通过迭代器进行for…of遍历；

4.Set的值是唯一的可以做数组去重，Map由于没有格式限制，可以做数据存储

5.map和set都是stl中的关联容器，map以键值对的形式存储，key=value组成pair，是一组映射关系。set只有值，可以认为只有一个数据，并且set中元素不可以重复且自动排序。





# 13、字符串方法

## 字符串操作方法 slice()、substr()、substring()

```js
let str = "hello world"

log(str.slice(3))//"lo world"
log(str.substring(3))//"lo world"
log(str.substr(3))//"lo world"

log(str.slice(3,7))//"lo w"
log(str.substring(3,7))//"lo w"
log(str.substr(3,7))//"lo worl"

log(str.slice(-3))//"rld"
log(str.substring(-3))//"hello world"
log(str.substr(-3))//"rld"

log(str.slice(3,-4))//"lo w"
log(str.substring(3,-4))//"hel"
log(str.substr(3,-4))//""(empty string)空的
```

## 字符串位置方法 indexOf()、lastIndexOf()

```js
let str = "hello world"

log(str.indexOf("o"))//4	从前往后查找
log(str.lastIndexOf("o"))//7	从后往前查找

log(str.indeOf("o",6))//7
log(str.lastIndeOf("o",6))//4
```

## 字符串包含方法 startsWith()、endsWith()、includes()

```js
let msg = "foobarbaz";

log(msg.startsWith("foo"))//true
log(msg.startsWith("bar"))//false

log(msg.endsWith("foo"))//f
log(msg.endsWith("bar"))//t

log(msg.includes("bar"))//t
log(msg.includes("qar"))//f

log(msg.startsWith("foo"))//true
log(msg.startsWith("foo",1))//f

log(msg.includes("bar"))//t
log(msg.includes("bar",4))//f

log(msg.endsWith("bar"))//f
log(msg.endsWith("bar",6))//t
```

## trim()删除前后空格

```js
let str = "   hello world   ";
log(str)//"   hello world   "
log(str.trim)//"hello world"
```

## repeat()复制字符串

```js
let str = "na ";
log(str.repeat(3) + "batman");//"na na na batman"
```

## padStart()、padEnd()

```js
let str = "foo";

log(str.padStart(6))//'   foo'
log(str.padStart(6,"."))//'...foo'

log(str.padEnd(6))//'foo   '
log(str.padEnd(6,"."))//'foo...'

log(str.padStart(8, "bar"))//'barbafoo'
log(str.padEnd(8, "bar"))//'foobarba'
```

## 大小写转换toUppercase()、toLowerCase()

```js
let stringvalue = "hello worla";

console.log(stringvalue.toLocaleUpperCase());// "HELLO WORLD"
console.1og (stringValue.toUppercase());// "HELLO WORLD"
console.1og (stringValue.toLocaleLowerCase());//"hello world"
console.log (stringValue.toLowerCase());// "hello world"
```

