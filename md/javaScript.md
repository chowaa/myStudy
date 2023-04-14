```js
//js代码
console.log('hello world');

//var是全局变量，let  const是es6中新加的，let的值可以被修改，const无法修改,const为常量
let age;

age = 'this is one';
console.log(age);

const i = 12;
console.log(i);

let name = 'age';
console.log(name);

//javaScript几种常见数据类型
//String, Namber, Boolean, Null, Undefinde
const name2 = "zhouyi";
const age2 = 21;
const test = true;
const x = null;
//当数据类型为NULL时使用console.log(typeof name)返回的数据类型名为object,null指针0X00
const y = undefined;
let z;
//输出数据类型
console.log(typeof name2);
console.log(typeof age2);
console.log(typeof test);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


console.log("字符串的连接 ");
//老方法
console.log("My name is " + name2 + " and I am " + age2);
//新方法
console.log(`My nmae is ${name2} and I am ${age2}`);
//还可以将字符串赋值给一个常量
const hello = `My nmae is ${name2} and I am ${age2}`;
console.log(hello);


console.log(" ");
console.log("字符串的内置方法");
const s = 'Hello World!';
console.log(s);
console.log(`字符串长度${s.length}`);
console.log(`全为大写${s.toUpperCase()}`);
console.log(`全小写${s.toLowerCase()}`);
console.log(`分割字符串${s.substring(0,5)}`);
console.log(`分割字符串全换成大写${s.substring(0,5).toUpperCase()}`);
console.log(`将字符串转换成数组${s.split('')}`);
console.log("选择分割点");
const b = '"technology, computers, it, code"';
console.log(b);
console.log(`选择", "分割后:${b.split(', ')}`);
console.log("使用字符串连接会将数组数组中的元素全部拿出,来组成新的字符串");
console.log(" ");
console.log(" ");
console.log(" ");
console.log(" ");

//数组
const numbers = new Array(0,1,2,3,4);
console.log(numbers);

const fruits = ['apples','oranges','pears'];
console.log(fruits);
fruits[3] = 'grapes';
console.log(fruits);
fruits.push("mangos");
console.log(fruits);
fruits.unshift("strawberries");
console.log(fruits);
fruits.pop();
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));
console.log(fruits);
```

http://127.0.0.1:5500/index.html

```js
//es6方法数组去重
arr=[...new Set(arr)];
//es6方法数组去重，第二种方法
function dedupe(array) {
  return Array.from(new Set(array));       //Array.from()能把set结构转换为数组
}
```

# 2、快速入门

## 2.1引入JavaScript

1、内部标签

```html
<script>
	//...
</script>
```

2、外部引用

  asd.js

```javascript
//
```

test.html

```html
<script src="asd.js"></script>
```



## 2.2基本语法入门

JavaScript严格区分大小写

```html
<script>
    //1定义变量 变量类型 变量名 = 变量值；
    var score = 90;
    if (score>60){
        console.log(score);
    } else {
        console.log("bujige")
    }
</script>
```

## 2.3数据类型

**变量**

```javascript
var a = 1;
```



**number**
js不区分小数和整数

```javascript
123//整数
123.1 //浮点数
1.123e3 //科学计数法
-9 //负数
NaN //Not a number
Infinity //表示无限大
```



**字符串**

‘abc’  “abc”



**布尔值**

true，false

**逻辑运算**

```
&& 两个都为真，结果为真

||  一个为真，结果为真

！ 真为假 假为真
```

**比较运算符**

```
= 赋值
== 等于（类型不一样，值一样，也会true）
=== 绝对等于（类型一样，值一样，结果为true）
```

NaN===NaN ，NaN与所有的数值都不相等，包括自己

只能通过isNaN(NaN)来判断这个数是否为NaN



**浮点数问题**

```html
console.log((1/3)===(1-2/3))
```

尽量避免使用浮点数进行运算，存在精度问题

```html
Math.abs(1/3-(1-2/3))<0.0000000001
```



**null和undefined**

- null 空
- undefined 未定义



**数组**

一系列相同类型的对象

```javascript
var arr = [1,2,3,4,'string',true];

new Array(1,2,4,5,'hello');
```

去数组下标：如果越界就会undefined



**对象**

对象是大括号，数组是中括号

```javascript
var person = {
	name: "zhouyi",
    age: 4,
    tags: ['js','java','web','...']
}
```

取对象的值

```bash
person.age
> 4
person.name
> 'zhouyi'
person.tags
> (4) ['js', 'java', 'web', '...']
```

## 2.4严格检查模式：

`'user strict'` 预防JavaScript的随意性导致产生的一些问题，必须写在JavaScript的第一行

局部变量建议使用 let 去定义

# 3、数据类型



## 3.1字符串

1、正常字符串使用' ' 或者 "" 包裹

2、注意转义字符 `\` 

```
\'
\n
\t
\u4e2d Unicode字符
\x41  Acsll字符
```

3、多行字符串编写

```javascript
var msg = `
	hello
	world
	你好

`
```

4、模板字符串

```javascript
let name = "zhouyi";
let age = 4;

let msg = `nihao, ${name}`
```

5、字符串长度

```
str.lenght
```

6、字符串不可变

![image-20211212155148717](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211212155148717.png)

7、大小写转换

```javascript
//这里是方法不是属性了
student.toUpperCase()
student.toLowerCase()
```

8、student.indexOf(’t')

9、substring

```javascript
[)
 student.substring(1)//从第一个字符串截取到最后一个字符串
 student.substring(1,3)//[1,3)
```

![image-20211212155834987](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211212155834987.png)

## 3.2、数组

**Array可以包含任意的数据类型**

```javascript
var arr = [1,2,3,4,5,6]
```

1、长度

```javascript
arr.lenght
```

注意：加入给arr.length赋值，数组大小就会发生变化，如果赋值过小，元素就会丢失

2、indexOf，通过元素获得下标索引

3、slice（）截取Array的一部分，返回一个新数组，雷素与String中的substring

4、push，pop

```javascript
push：压入到尾部
pop：弹出尾部的一个元素
```

5、unshift（），shift（）头部

```
unshift:压入到头部
shift：弹出头部的一个元素
```

6、排序sort()

```javascript
(3)["B","c","A"]
arr.sort()
(3)["A","B","c"]
```

7、元素反转reverse()

```
(3)["A","B","c"]
arr.reverse()
(3)["c","B","A"]
```

8、concat()

```javascript
(3)["c","B","A"]
arr.concat([1,2,3])
(6)["c","B","A",1,2,3]
arr
(3)["C","B","A"]
```

注意：concat（）并没有修改数组，只是会返回一个新的数组

9、连接符join

打印拼接数组，是特定的字符串连接

```javascript
(3)["c","B","A"]
arr.join('-)
"C-B-A"
```

10、多维数组

```javascript
arr=[[1,2],[3,4],["5","6"J]; 
arr[1][1]
4
```



数组：存储数据（如何存，如何取，方法都可以自己实现）

## 3.3、对象

若干个键值对

```javascript
var 对象名 = {
    属性名:属性值,
    属性名:属性值,
    属性名:属性值
}
```

JS中的对象，{....}表示一个对象，键值对描述属性xxxx：xxxx，多个属性之间使用逗号隔开，最后一个属性不加逗号

JavaScript中的所有的键都是字符串，值是任意对象

1、对象赋值

```javascript
person.name = "zhouyi"
"zhouyi"
person.name
"zhouyi"
```



2、使用一个不存在的对象赋值，不会报错！只会出现undefined

```javascript
person.haha
undefined
```

3、动态的删减属性，通过delete删除对象的属性

```javascript
delete person.name
true
person
```

4、动态的添加，直接给新的属性添加值即可

```javascript
person.haha="haha"
"haha"
person
```

5、判断属性值是否在对象中

```javascript
'age'in person
true
//继承
’tostring'in person
true
```

6、判断一个属性是否是这个对象自身拥有的 hasOwnProperty()

```javascript
person.hasOwmProperty('tostring')
false 
person.hasOwnProperty('age')
true
```



## 3.4、流程控制

if判断

```javascript
var age=3;
if(age>3){
	alert("haha");
}else if (age<3){
	alert("kuwa～");
}else {
	alert("kuwa~");
}
```

while循环, 避免程序死循环

```javascript
while(age<100){
	age=age+1; 
    console.1og(age)
}

do{
    age=age+1; 
    console.1og(age)
}while(age<100)
```

if循环

```js
for(leti=0;i<100;i++){
	console.log(i)
}
```

forEach循环

```js
var age=[12，3，12，3，12，3，12，31，23，123];
//函数
age.forEach(function(value){
	console.1og(value)
})
```

for...in

```js
//for(var index in object){}}
for(var num in age){
	if(age.hasownProperty(num)){
		console.1og("存在")
		console.1og(age[num])
    }
}
```

## 3.5、Map和Set

ES6的新特性

Map

```js
var map = new Map([['tom',100],['jack',20],['huni',29]]);
var name = map.get('huni');//通过key获得value
map.set('admin',123);//新增或修改
map.delete('admin');
```

Set

```js
var set = new Set([1,1,1,12,2,2,3,3,3]);
set.add(24);//添加
set.delete(1);//删除
console.log(set.has(12));//是否包含某个元素
```

## 3.6、iterator

>  es6新特性

遍历数组

```js
var arr = [3,4,5];
for (var  x of arr) {
    console.log(x)
}
```

遍历Map

```js
var map = new Map([['tom',100],['jack',20],['huni',29]]);
for (let x of map) {
    console.log(x)
}
```

遍历Set

```js
var set = new Set([1,1,1,12,2,2,3,3,3]);
for (let x of set) {
    console.log(x)
}
```



# 4、函数及面向对象



### 4.1、函数定义及变量作用域

> 定义方式一

绝对值函数

```js
function abs(x){
    if (x>=0){
        return x;
    } else {
        return -x;
    }
}
```

一旦执行到return代表函数结束，返回结果

如果没有执行return，函数执行完也会返回结果，结果就是undefined

> 定义方式二

```js
var abs = function(x){
    if (x>=0){
        return x;
    } else {
        return -x;
    }
}
```

function(x){....}这是一个匿名函数。但是可以把结果赋值给abs，通过abs就可以调用函数

方式一和方式二等价

> 调用函数

```js
abs(10) //10
abs(-10) //10
```

参数问题：JavaScript可以传任意个参数，也可以不传入参数

### 4.2、方法

参数进来是否存在问题？ 

假设不存在参数，如何规避？

```js
var abs = function(x){
    if (typeof x == 'number' ) {}
    else {
        throw 'Not a Number';
    }
    if (x>=0){
        return x;
    } else {
        return -x;
    }
}
```



> arguments

`arguments`是一个js免费赠送的关键字；

代表，传递进来的所有的参数，是一个数组

```js
var abs = function(x){
    console.log("x=>"+x);

    for (var i = 0; i<arguments.length; i++){
        console.log(arguments[i]);
    }

    if (x>=0){
        return x;
    } else {
        return -x;
    }
}
```

问题：arguments包含所有的参数，我们有时候想使用多余的参数来进行附加操作。需要排除已有的参数

> rest

以前：

```js
if (arguments.length>2){
    for (var i = 2; i<arguments.length;i++){
        console.log(arguments[i])
    }
}
```

ES6引入的新特性，获取除了已经定义的参数外的所有所有参数

```js
var abs = function(x,b,...rest){
    console.log("x=>"+x);
    console.log("b=>"+b);
    console.log(rest);

    if (x>=0){
        return x;
    } else {
        return -x;
    }
}
```

rest参数只能卸载最后面，必须要用...标识



### 变量的作用域



> 局部 JavaScript 变量

在 JavaScript 函数中声明的变量，会成为函数的*局部变量*。

局部变量的作用域是*局部的*：只能在函数内部访问它们。

```js
// 此处的代码不能使用 carName 变量

function myFunction() {
    var carName = "porsche";

    // 此处的代码能使用 carName 变量

}
```

由于只能在函数内部识别局部变量，因此能够在不同函数中使用同名变量。

在函数开始时会创建局部变量，在函数完成时会删除它们。

>  全局 JavaScript 变量

函数之外声明的变量，会成为*全局变量*。

全局变量的作用域是*全局的*：网页的所有脚本和函数都能够访问它。

```js
var carName = " porsche";


// 此处的代码能够使用 carName 变量

function myFunction() {

    // 此处的代码也能够使用 carName 变量

}
```

> JavaScript 变量

在 JavaScript 中，对象和函数也是变量。

作用域决定了从代码不同部分对变量、对象和函数的可访问性。

自动全局

如果您为尚未声明的变量赋值，此变量会自动成为*全局*变量。

这段代码将声明一个全局变量 carName，即使在函数内进行了赋值。

```js
myFunction();

// 此处的代码能够使用 carName 变量

function myFunction() {
    carName = "porsche";
}
```

> 严格模式

所有现代浏览器都支持以“严格模式”运行 JavaScript。

您将在本教程稍后的章节学习更多如何使用严格模式的知识。

在“严格模式”中不会自动创建全局变量。

HTML 中的全局变量

通过 JavaScript，全局作用域形成了完整的 JavaScript 环境。

在 HTML 中，全局作用域是 window。所有全局变量均属于 window 对象。

```js
var carName = "porsche";

// 此处的代码能够使用 window.carName
```

> 警告

除非有意为之，否则请勿创建全局变量。

您的全局变量（或函数）能够覆盖 window 变量（或函数）。

任何函数，包括 window 对象，能够覆盖您的全局变量和函数。

> JavaScript 变量的有效期

JavaScript 变量的有效期始于其被创建时。

局部变量会在函数完成时被删除。

全局变量会在您关闭页面是被删除。

> 函数参数

函数参数也是函数内的局部变量。



```js
//var是全局变量，let  const是es6中新加的，let的值可以被修改，const无法修改,const为常量
let age;

age = 'this is one';
console.log(age);

const i = 12;
console.log(i);

let name = 'age';
console.log(name);
```



### 4.3、方法

![image-20211213151936049](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213151936049.png)

![image-20211213152001425](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213152001425.png)

![image-20211213152034290](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213152034290.png)

# 5、内部对象



> 标准对象

```js
typeof 123
"number"
typeof '123'
"string"
typeof true
"boolean"
typeof NaN
"number"typeof ]"object"
typeof {}
"object"
typeof Math. abs
"function"
typeof undefined
"undefined"
```

## 5.1、Data

**基本使用**

```js
var now=new pate();//sat Jan 04 2020 10：47：06 GMT+0800（中国标准时间）now.getFu1lYear();；//年
now.getMonth();//月0~11代表月
now.getDate();//日
now.getDay();//星期几now.getHours();；//时
now.getMinutes();//分now.getseconds();；//秒
now.getTime();//时间戳全世界统一19701.10：00：00毫秒数console.1og（new Date（1578106175991））//时间戳转为时间
```

转换

```js
now= new Date(1578106175991)
Sat Jan 04 2020 10：49：35 GMT+0800(中国标准时间)now.toLocalestring//注意，调用是一个方法，不是一个属性！
f toLocalestring(){[native code]}
now.toLocalestring()"2020/1/4上午10：49：35"
now.toGMTString()
"sat，04 Jan 2020 02：49：35 GMT"
```



## 5.2、JSON

> JSON是什么

早期，所有数据传输习惯使用XML文件！

- JSON(JavaScript Object Notation，JS 对象简谱)是一种轻量级的数据交换格式。
- 简洁和清晰的**层次结构**使得JSON成为理想的数据交换语言。
- 易于人阅读和编写，同时也易于机器解析和生成，并有效地**提升网络传输效率**。



再JavaScript中一切都是对象、任何js支持的类型都可以是JSON来表示

格式

- 对象都用{}
- 数组都用[]
- 所有的键值对都是用 key:value

JSON字符串和JS对象的转换

```js
var user={
    name: "qinjiang",
    age： 3,
    sex: '男'
}
//对象转化为json字符串{"name"："qinjiang"，"age"：3，"sex"："男"}
var jsonUser=JSON.stringify(user);
//json 字符串转化为对象参数为json字符串
var obj=JSON.parse('{"name"："qinjiang"，"age"：3，"sex"："男"}');
```

JSON 和JS对象的区别

```js
var obj = {a: 'hello' ,b: 'hello'};
var json = '{"a":"hello","b":"hello"}';
```

## 5.3、Ajax

- 原生的js写法   xhr 异步请求
- jQuey 封装好的方法$(“#name").ajax("")
- axios 请求

# 6、面向对象编程

6.1、什么是面向对象

JavaScript、Java、c#....面向对象；JavaScript有些区别

类： 模板 原型对象

对象： 具体的实例

在JavaScript这个需要大家换一下思维方式

> class继承

`class`关键字，是在ES6引入的

1、定义一个类，属性，方法

```js
//定义一个学生的类
class student{
    constructor(name){

    }
    this. name=name; he11oO{
        alert(' hel1o')
    }
}
var xiaoming=new student("xiaoming"); 
var xiaohong=new student("xiaohong"); 
xiaoming.he1lo()
```

2、继承

```js
//定义一个学生的类
class student{
    constructor(name){

    }
    this. name=name; he11oO{
        alert(' hel1o')
    }
}

class XiaoStudent extends Student{
    constructor(name,grade){
		super(name);
        this.grade = grade;
    }
    myGrade(){
		alert('我是一名小学生')
    
    }
}
var xiaoming=new student("xiaoming"); 
var xiaohong=new XiaoStudent("xiaohong"); 
xiaoming.he1lo()
```

本质：查看对象原型

![image-20211213161349452](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213161349452.png)



> 原型链

 __ proto __:

![image-20211213161448887](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213161448887.png)

# 7、BOM对象（重点）

> 浏览器介绍

JavaScript和浏览器的关系？

JavaScript诞生就是为了能够让他在浏览器中运行！

BOM：浏览器对象模型

- IE 6~11
- Chrome
- Safari
- FierFox

> window

window代表浏览器窗口

![image-20211213162319790](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213162319790.png)

> Navigator

![image-20211213162348414](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213162348414.png)

大多数时候，我们不会使用`navigator`对象，应为会被别人修改

不建议使用这些属性来判断和编写代码

> screen

代表屏幕的尺寸

```js
screen.width
1920
screen.height
1080
```

> **location**

代表当前页面的URL信息

![image-20211213163055116](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213163055116.png)

> document

document代表当前的页面，HTML DOM文档树

![image-20211213163353478](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213163353478.png)

获取cookie



![image-20211213163737500](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211213163737500.png)



> history

history代表浏览器的历史记录

 ```js
 history.back()//后退
 history.forward()//前进
 ```







# 8、操作DOM对象

DOM：文档对象模型

> 核心

浏览器网页就是一个DOM树形结构

- 更新：更新DOM节点
- 遍历DOM节点：得到DEM节点
- 删除：删除一个DOM节点
- 添加：添加一个新的节点

要操作一个DOM节点，就必须要先获得一个DOM节点

> 获得DOm节点

```js
var p1 = document.getElementById('p1');
var h1 = document.getAnimations('h1');
var p2 = document.getElementsByClassName('p2');
var father = document.getElementById('father');
var childrens = father.childern;//获取父节点下面的所有子节点
//father.firstChild
//father.lastChild
```

这是原生代码，之后尽量使用jQuery();

> 更新节点

```js
<div id = "id1">
	    
</div>

<script>
    var di1 = document.getElementById('id1');
</script>
```

操作文本

- `id1.innerText='234' `修改文本的值
- `id1.innerHTML='<strong>123</strong>' `可以解析HTML文本标签

操作CSS

```js
id1.style.color='yellow';//属性使用字符串包裹
id1.style.fontsize='20px';//-转驼峰命名问题
id1.style.padding='2em';
```

> 删除节点

删除节点的步骤，先获取父节点，再通过父节点删除自己

```js
<div id="father">
    <h1>标题</h1>
	<p id="p1">p1</p>
	<p class="p2">p2</p>
</div>
<script>
    var p1 = document.getElementById('p1');
	var father = p1.parentElement;
	father.removeChild(self);


	//删除是一个动态的过程
	father.removeChild(father.children[0]);
	father.removeChild(father.children[1]);
	father.removeChild(father.children[2]);
</script>

//father.children
//HTMLCollection(3) [h1, p#p1, p.p2, p1: p#p1]
//parent.father
//<div id=​"father">​…​</div>​<h1>​标题​</h1>​<p id=​"p1">​p1​</p>​<p //class=​"p2">​p2​</p>​</div>​
//father.children[0]
//<h1>​标题​</h1>​
//father.removeChild(father.children[0])
```

注意：删除多个节点的时候，children实在是可变化的，删除结点的时候一定要注意



> 插入节点

我们获得了某个DOM节点，假设这个DOM节点是空的，我们通过innerHTML就可以增加元素了。但如果这个DOM节点已经存在元素了，我们就不能这么做，会产生覆盖

追加

```js
<body>
    <p id="js">javaScript</p>
	<div id='list'>
    	<p id="se">JavaSE</p>
		<p id="ee">JavaEE</p>
		<p id="me">JavaME</p>
	</div>


<script>

    var js = document.getElementById('js');
	var list = document.getElementById('list');
	list.appendChild(js)//追加到后面

</script>
```

效果：

![image-20211215160602681](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20211215160602681.png)



> 创建一个新标签，实现插入

```js
  <script>

    var js = document.getElementById('js');
    var list = document.getElementById('list');
    // list.appendChild(js)
    //通过js创建一个新节点
    // var nwep = document.createElement('p');
    // newp.id = 'newp';
    // newp.innerText = 'Hellozhouyi';
    //创建一个标签节点
    var myScript = document.createElement('script');
    myScript.setAttribute('type','text/javascript');

    //创建一个Style标签
    var myStyle = document.createElement('style');
    myStyle.setAttribute('type','text/css');
    myStyle.innerHTML = 'body{background-color: chartreuse}';

    document.getElementsByName('head')[0].appendChild(myStyle);
  </script>
```

> insertBefore

```js
var ee = document.getElementById('ee');
var js = document.getElementById('js');
var list = document.getElementById('list');
list.insertBefore(js,ee)
```





# 9、操作表单（验证）

> 表单是什么 from DOM树

- 文本框	text
- 下拉框    < selec t>
- 单选框    radio
- 多选框    checkbox
- 隐藏域    hidden
- 密码框    password
- .......

表单的目的：提交信息



> 获得要提交的信息

```html

<form action="post">
    <p>
        <span>用户名</span> <input type="text" id="username" required>
    </p>
    <p>
        <span>性别:</span>
        <input type="radio" name="sex" value="man" id="boy"> 男
        <input type="radio" name="sex" value="woman" id="girl"> 女
    </p>
</form>

<script>
    var input_text = document.getElementById('username');
    var boy_radio = document.getElementById('boy');
    var girl_radio = document.getElementById('girl');

    //获得输入框的值
    input_text.value
    //修改输入框的值
    input_text.value = 'asdasdasdasd'


    // 对于单选框、多选框等等固定的值，boy_radio.value只能取到当前的值
    boy_radio.checked //查看返回的结果，是否为true
	boy_radio.checked = true //赋值

</script>
```

> 提交表单，md5加密密码，表单优化

md5:https://blog-static.cnblogs.com/files/mofish/md5.js

```html
<form action="#" method="post" onsubmit="return aaa()">
    <p>
        <span>用户名</span> <input type="text" id="username" name="username">
    </p>
    <p>
        <span>密码</span> <input type="password" id="input-password">
    </p>

    <input type="hidden" id="md5-password" name="password">

    <!-- 绑定事件 onclick 被点击 -->
    <button type="submit">提交</button>
</form>



<script>
    function aaa() {
        alert(1);
        var uname = document.getElementById('username');
        var pwd = document.getElementById('input-password');
        var md5pwd = document.getElementById('md5-password');

        md5pwd.value = md5(pwd.value);

        return true;
    }

</script>
```

# 10、jQuery

JavaScript

jQuery库：里面存在大量的JavaScript函数

> 获取jQuery

https://jquery.cuishifeng.cn/

cdn地址：https://www.jq22.com/cdn/

`<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>`

公式：$(选择器).事件(函数)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
</head>
<body>
  <a href="" id="text-jQuery">点击</a>

  <script>

    //公式：$(selector//选择器).action()
    //选择器就是css的选择器
    $('#text-jQuery').click(function(){
      alert('这是用jQuery实现的');
    })


  </script>
</body>
</html>
```



> 选择器

```js
//原生js，选择器少
document.getElementsByTagName();//标签选择器
document.getElementById();//id选择器
document.getElementsByClassName();//class类选择器


//jQuery css 中的选择器他全都能用
$('p').click();//标签选择器
$('#id1').click();//id选择器
$('.class1').click();//calss选择器
```





> 事件

鼠标事件，键盘事件，其他事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
  <style>
    #divMove{
      width: 400px;
      height: 400px;
      border: 1px solid red;
    }
  </style>
</head>
<body>
  <!-- 要求：获取鼠标当前的一个坐标 -->
  mouse : <span id="mouseMove"></span>
  <div id="divMove">
    移动鼠标
  </div>

  <script>
    //当网页元素加载完毕之后，响应事件
    $(function () {
      $('#divMove').mousemove(function (e) {
        $('#mouseMove').text('x:'+e.pageX + 'y:'+e.pageY)
      })
    })


  </script>
</body>
</html>
```

> 操作DOM

```js
$('#text-ul li[name=python]').text();//获得值
$('#text-ul li[name=python]').text('变');//获得值
$('#text-ul li[name=python]').html();//获得值
$('#text-ul li[name=python]').html('<strong>123</strong>');//获得值
```

元素的显示和隐藏：本质`display: none;`


```js
$('#text-ul li[name=python]').hide();
$('#text-ul li[name=python]').show();
```

其他

```js
$(window).width();
$(window).height();
$(document).widht();
$(document).width();
```







Element-ui

Ant Design
