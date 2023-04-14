# 1.什么是CSS

## 1.1什么是CSS

CSS中文名叫：层叠样式表

英文全称：Cascading Style Sheets

- CSS的作用：美化网页的语言，让网页的布局更加合理
- CSS的语法： 选择器 { 声明1: 声明2: 声明3: }
- CSS语法的注意事项：
  - 声明最后必须要用英文分号结尾
  - 声明之中属性可以写无数条声明
  - 一个声明块中可以写无数条声明
- 如何规范的书写CSS代码：
  - CSS代码要展开书写
  - CSS代码都是用小写字母书写的
  - 在声明之中冒号之后先写一个空格、选择器后面写一个空格之后再写大括号

## 1.2发展史

CSS1.0

CSS2.0	DIV(块) + CSS，HTMl与CSS结构分离的思想，网页变的简单，SEO

CSS2.1	浮动，定位

CSS3.0	圆角，阴影，动画，浏览器兼容性

## 新特性：

```
新增选择器 p:nth-child（n）{color: rgba（255, 0, 0, 0.75）}
弹性盒模型 display: flex;
多列布局 column-count: 5;
媒体查询 @media （max-width: 480px） {.box: {column-count: 1;}}
个性化字体 @font-face{font-family:BorderWeb;src:url（BORDERW0.eot）；}
颜色透明度 color: rgba（255, 0, 0, 0.75）；
圆角 border-radius: 5px;
渐变 background:linear-gradient（red, green, blue）；
阴影 box-shadow:3px 3px 3px rgba（0, 64, 128, 0.3）；
倒影 box-reflect: below 2px;
文字装饰 text-stroke-color: red;
文字溢出 text-overflow:ellipsis;
背景效果 background-size: 100px 100px;
旋转 transform: rotate（20deg）；
倾斜 transform: skew（150deg, -10deg）；
位移 transform:translate（20px, 20px）；
缩放 transform: scale（。5）；
平滑过渡 transition: all .3s ease-in .1s;
动画 @keyframes anim-1 {50% {border-radius: 50%;}} animation: anim-1 1s;
```



## 1.3快速入门

```js
<style>
    h2{
        color:rgb(20, 20, 228);
    }
</style>
```

连接CSS代码文件

```js
<link rel="stylesheet" href="F:\code\css1\index.css">
```

**CSS的优势**

1、内容和表现分离

2、网页格式表现统一，可以实现复用

3、样式十分的丰富

4、建议使用独立于html文件

5、利用SEO，容易被搜索引擎收录

## 1.4CSS的三种引入方式

优先级：行内样式 > 内部样式 > 外部样式 ；（**就近原则**）

拓展：外部样式的两种写法

- 连接式：

  ```html
  <link rel="stylesheet" href="F:\code\css1\index.css">
  ```

- 导入式：

@import是CSS 2.1 特有的

```html
<style>
    @import url("F:\code\css1\index.css");
</style>
```

实时渲染，会导致大型网页加载过慢！

# 2、选择器

作用：选择页面上的某一个或者某一类元素

## 2.1、基本选择器

1、标签选择器：选择一类标签

2、类选择器 class ：选择所有class属性一致的标签，跨标签   .类名{}

3、ID选择器：全局唯一！  #id名{}

优先级：id > class > 标签

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        /* 类选择器, 可以复用*/
        .style1{
            color: blue;
        }
        /* ID选择器,id必须保证全局唯一 */
        #zhouyi{
            color: burlywood;
        }
        /* 标签选择器 */
        h1{
            color: chocolate;
        }
        /* 优先级: id > class > 标签 */
    </style>
</head>
<body>
    <h1 class="style1">标签1</h1>
    <h1 id="zhouyi">标签2</h1>
    <h1>标签3</h1>
</body>
</html>
```

## 2.2、层次选择器

1、后代选择器：在某个元素的后面

```css
/*DOM树中后代的所有符合要求的标签*/
body p{
    background: cornflowerblue;
}
```

2、子选择器，一代

```css
/*DOM树中子代的所有符合要求的标签*/
body > p{
    background: crimson;
}
```

3、相邻兄弟选择器  同辈（我下面的一个兄弟）

```css
/*只有一个，相邻且向下*/
.active + p{
    background: darkgreen;
}
```

4、通用选择器（所有弟弟的选择器）

```css
/*相邻，向下所有*/
.active ~ p{
    background: darkgreen;
}
```

## 2.3、结构伪类选择器

伪类：条件

```css
<style>
/* ul的第一个子元素 */
ul li:first-child {
    background: #0fb4ca;
}
/* ul的最后一个子元素 */
ul li:last-child{
    background: #310fca;
}
/* 选中p1:定位到父元素，选择当前元素的第一个子元素
选择当前p元素的父级元素，选中父级元素的第一个子元素 (不分类型)
*/
p:nth-child(1){
    background: red;
}
/* 选中父元素下的第二个p元素 (分类型)*/
p:nth-of-type(2){
    background: yellow;
}
</style>
```

```html
<body>
  <!-- <h1>h1</h1> -->
  <p>p1</p>
  <p>p2</p>
  <p>p3</p>
  <ul>
    <li>li1</li>
    <li>li2</li>
    <li>li3</li>
  </ul>
</body>
```

## 2.4、属性选择器（常用）

id + class结合

```html
<style>
    .demo a{
        float: left;/*左浮动*/
        display: block;/*变成块元素*/
        height: 50px;/*高度*/
        width: 50px;/*宽度*/
        border-radius: 10px;/*圆角*/
        background: red;/*背景颜色*/
        text-decoration: none;/*去除下划线*/
        margin-right: 5px;/*右外边距*/
        font: bold 20px/50px Arial;/*字体大小/行高/字体*/
        text-align: center;/*文字居中*/
        color: bisque;/*文字颜色*/
    }
    /* 属性选择器 a[] */
    a[id]{
        background: palegoldenrod;
    }
    /* id为first */
    a[id=first]{
        background: black;
    }
    /* class中有links的元素 */
    a[class*="links"]{
        background: yellow;
    }
    /* href以http开头的元素 */
    a[href^=http]{
        background: yellow;
    }
    /* 以pdf结尾 */
    a[href$=pdf]{
        background: yellow;
    }
</style>

<body>
  <p class="demo">
    <a href="http://www.baidu.com" class="links item first"id="first">1</a>
    <a href=""class="links item active" target="_blank"title="test">2</a>
    <a href="images/123.html"class="links item">3</a>
    <a href="images/123.png"class="links item">4</a><a href="images/123.jpg"class="links item">5</a>
    <a href="abc"class="links item">6</a>
    <a href="/a.pdf"class="links item">7</a>
    <a href="/abc.pdf"class="links item">8</a>
    <a href="abc.doc"class="links item">9</a>
    <a href="abcd.doc"class="links item last">10</a>
  </p>
</body>
```



```
=  绝对等于
*= 包含
^= 开头
$= 结尾
```

# 3、美化网页元素

## 3.1、为什么要美化网页

1、有效传递网页信息

2、美化网页、页面漂亮，才能吸引用户

3、凸显页面主题

4、提高用户体验

span标签：重点突出的字，使用span套起来



```css
/*
	font-family:字体
	font-size:大小
	font-weight:字体粗细
	color:字体颜色
*/
<style>
    body{
        font-family:  楷体;
        font-size: 12px ；
        font-weight:  bold ；
        color: red ；
    }
</style>
```

## 3.3、文本样式

1、颜色

```css
<style>
	h1{
    	color: rgb(0,255,255)
        color: rgba(0,255,255,0.2)/*rgba透明的0-1*/
	}
</style>
```

2、文本对齐方式

```css
text-align：排版，居中center、偏右right、偏左left
```

3、首行缩进

```css
text-indent:2em/*段落首行缩进两个字*/
```

4、行高

  ```css
  background: red;
  height: 300px;
  line-height:300px/*行高，和块的高度一直就可以上下居中*/
  ```

5、装饰

```css
text-decoration: underline;下划线
text-decoration: line-through;中划线
text-decoration: overline;上划线
```

6、图片文本对齐方式

```html
<style>
    img,span{
        vertical-align: middle;
    }
</style>
<p>
    <img src="D:\Desktop\1.png" alt="">
    <span>123123</span>
</p>
```

## 3.4、阴影

```html
<p id="price">
    $12
</p>
<style>
    #price{
        text-shadow: 5px 5px 1px #000;
    }
</style>
```

## 3.5超链接伪类

正常情况下，a，a:hover

```html
<style>
/* 默认的颜色 */
    a{
      text-decoration: none;
      color: aquamarine;
    }
    /* 鼠标悬浮的状态 */
    a:hover{
      color: blue;
      font-size: 20px;
    }
    /* 鼠标按住为释放的状态 */
    a:active{
      color: brown;
    }
</style>
<a href="#">
    <img src="D:\Desktop\1.png" alt="">
</a>
<p>
    <a href="#">本人</a>
</p>
<p>
    <a href="#">周以</a>
</p>
```



https://www.grabient.com/

# 4、盒子模型

## 4.1、什么是盒子模型

![image-20220310114107071](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20220310114107071.png)

margin：外边框

padding：内边框

border：边框

## 4.2、边框

1、边框的粗细

2、边框的样式

3、边框的颜色

# 5、浮动

## 5.1标准文档流

## 5.2display

```html
<style>
	/* 
    	block 块元素
    	inline 行内元素
    	inline-block 是块元素，但是可以内联，在一行
    	none 消失
    */
    div{
        width: 120px;
        height: 120px;
        border: 1px solid red;
        display: inline-block;
    }
    span{
        width: 120px;
        height: 120px;
        border: 1px solid red;
        display: inline-block;
    }
</style
```

1、这个也是一种实现行内元素排列的方式，但是很多情况都使用**float**

## 5.3、float

浮动的盒子可以向左浮动，也可以向右浮动，知道它的外边缘碰到包含框或者另一个浮动盒子为止

```css
float:right;/*右浮动*/
float:left;/*左浮动*/
```

## 5.4、父级边框塌陷问题

clear

```css
clear:both/right/left/none;/*清除浮动*/
```

解决方法

1、增加父级元素的高度

简单，假设元素设有了固定的高度，就会被限制

```css
#father{
    border: 1px #000 solid;
    height: 800px;
}
```

2、增加一个空的div标签，清除浮动

简单，但是代码中尽量避免空div

```css
.clear{
    clear: both;
    margin: 0;
    padding: 0;
}
```

3、overflow

简单，下拉的一些场景 避免使用

```
在父级元素中增加一个 overflow: hidden;
```

4、父类添加一个伪类	:after

没有副作用，建议使用

```css
#father:after{
    content: '';/*添加一个空标签*/
    display: block;/*将空标签变成块级元素*/
    clear: both;/*设置清除浮动*/
}
```

## 5.5、对比、

- display

​		方向不可控

- float

​		浮动起来或脱离标准文档流，要解决父级边框塌陷的问题

# 6、定位position

## 6.1、相对定位position:relative

```html
<style>
    body{
        padding: 20px;
    }
    #father{
        border: 1px solid #567;
        padding: 0;
    }
    .first{
        background-color: aquamarine;
        border: 1px solid #567;
        position: relative;/*相对定位：上下左右*/
        top:-20px;
        left: 20px;
    }
    .second{
        background-color: rgb(64, 156, 21);
        border: 1px solid rgb(14, 77, 141);
        position: relative;
        bottom: -10px;
        right: 20px;
    }
</style>
<div id="father">
    <div class="first">第一个盒子</div>
    <div class="second">第二个盒子</div>
</div>
```

相对定位：position: relative

相对原来的位置，进行指定的偏移，仍然在文档流中，原来的位置会被保留

```
top:-20px
left: 20px;
bottom: -10px;
right: 20px;
上左下右
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>小练习</title>
  <style>
    #father{
      height: 300px;
      width: 300px;
      padding: 10px;
      border: 1px solid red;
    }
    a{
      width: 100px;
      height: 100px;
      text-decoration: none;
      background: pink;
      line-height: 100px;
      text-align: center;
      color: aliceblue;
      display: block;
    }
    a:hover{
      background-color: blue;
    }
    .a2,.a4{
      position: relative;
      right: -200px;
      top: -100px;
    }
    .a5{
      position: relative;
      top: -300px;
      left: 100px;
    }
    
  </style>
</head>
<body>
  <div id="father">
    <a class="a1" href="#">1</a>
    <a class="a2" href="#">2</a>
    <a class="a3" href="#">3</a>
    <a class="a4" href="#">4</a>
    <a class="a5" href="#">5</a>
  </div>
</body>
</html>
```

![image-20220310145634506](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20220310145634506.png)

## 6.2、绝对定位( position: absolute;)和固定定位(position: fixed;)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
      height: 1000px;
    }
    div:nth-of-type(1){
      width: 100px;
      height: 100px;
      background: red;
      position: absolute;
      right: 0px;
      text-align: center;
      line-height: 100px;
      bottom: 0px;
    }
    div:nth-of-type(2){
      width: 50px;
      height: 50px;
      background: green;
      position: fixed;
      text-align: center;
      line-height: 50px;
      right: 0px;
      bottom: 0px;
    }
  </style>
</head>
<body>
  <div>div1</div>
  <div>div2</div>
</body>
</html>
```

![image-20220310151420684](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20220310151420684.png)

## 6.3、层级

`z-index:0-999` 层级越高显示优先级越高

## 6.4、透明度

`opacity:0.5`	背景透明度

# 7、动画

