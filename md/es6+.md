# es6

## 变量声明let const

- 作用域：let  和 const是块级作用域，var是函数作用域
- 变量提升：var声明变量会存在变量提升
- 暂时性死区：let和const声明变量存在暂时性死区（声明之前使用会报错）
- 重复声明：val变量允许重复声明，后覆盖前，let、const不允许
- 全局变量：var在浏览器全局变量下声明的变量会自动加入全局对象属性，不可被delete
- 初始值：var和let不需要设置初始值，const声明的变量必须要有初始值
- 指针指向：const的指针不可变，var和let可变

## 操作符

### 扩展运算符

`...` 可以实现简单的深拷贝

## 指数操作符

`**` 操作符代替 `Math.pow()` 进行指数运算

### 属性访问操作符

`?` 操作符适用于对象属性访问。如果对象是通过 ` ?` 访问的属性为 `null` 或 `undefined` ，立即返回 `undefined` 

```javascript
let a = {
	b:null
}
console.log(a.b?.c.d) //undefined
```

### 缺值合并操作符

`??` 操作符是用于求职。若 `??` 操作符前的值为 `null` 或 `undefined` ，那么求值表达式的结果将为 `??` 操作符后的值，反之为之前的值。如果操作符之前的值不是 `null` 或者 `undefined` ，值只会为操作符前面的值

```javascript
const fn = (val)=> {
	let myVal = val ?? 1
    console.log(val) //当val传入值则myVal的值为val，反之为1
}
```

### 与操作符

 `&&` 操作符可用于求值。

```javascript
console.log( 0 && 12 ) //0
console.log( "dog" && null ) //null
console.log( "my" && 22 ) // 22
```

### 或操作符

 `||` ，当操作符前后都是假值，那么返回后的假值，前真后假反前，前假后真反后，前后真反前

```javascript
console.log( undefined || 'true1' ) // true1
console.log( 'false1' || undefined ) //false1
console.log( undefined || null ) // null
```

## 赋值语句——解构

### 数组结构

按照数组下标提取值

```javascript
let [a, b, c] = [1, 2, 3]
```

### 对象解构

按属性名提取值

```javascript
let obj = {
    name: 'name',
    age: 123
}
let { name, age } = obj
let { name:name1, age:age1 } = obj
```

### 解构应用

- 从深层嵌套的对象中提取数据

```javascript
let obj = {
	a: {
        b: {
            c: 'c'
        }
    }
}
let { a: { b: { c } } } = obj 
console.log(c)// 'c'
```

- 当函数参数过多时

```javascript
const fn = ({ a, b, c })=> {
	//...
}
let [a, b, c] = [1, 2, 3]
fn({ a:a, b:b, c:c })
```

## 数值

### 数值方法

可以通过 `Number` 对象调用  `parseInt()` 和  `parseFloat()`   、 `isNaN()` 

###  `BigInt` 类型

- 数据类型： `BigInt` 也是javascript数据类型
- 数值范围：10的10亿次方
- 使用：在数值后加上 `n` 来表示或者使用 `BigInt` 函数

### Math方法

**

## 字符串

### 模板字符串

模板字符串允许在字符串中插入动态的值，可以是JavaScript语句。这属于模板语法，模板语法不在此过多介绍，面试题总结基本从未涉及。

### 字符串新增方法

- includes()方法：用于判断子串是否存在

```javascript
let s = "123Danny"
console.log(s.includes("Danny")) // true
```

- startsWith()方法：用于判断字符串开头是否是目标子串

```javascript
let s = "123Danny"
console.log(s.startsWith("Danny")) // false
```

- endsWidth()方法：用于判断字符串结尾是否是目标子串

```javascript
let s = "123Danny"
console.log(s.endsWith("Danny")) // true
```

- padStart()方法：用于在字符串左侧填充符号，使字符串长度变成参数指定的长度

```javascript
let s = "123Danny"
console.log(s.padStart(20, " ")) // 
```

- padEnd()方法：用于在字符串右侧填充符号，使字符串长度变成参数指定的长度

```javascript
let s = "123Danny"
console.log(s.padEnd(20, " ") + 1) // 123Danny  
```

- trimStart()方法：用于去除字符串左侧的空格

```javascript
let s = "123Danny"
console.log(s = s.padStart(20, " ")) //             123Danny
console.log(s = s.trimStart()) // 123Danny
```

- trimEnd()方法：用于去除字符串右侧的空格

```javascript
let s = "123Danny"
console.log(s = s.padEnd(20, " "), s.length) // 20
console.log(s = s.trimEnd(), s.length) // 8
```

- matchAll()方法：用于正则表达式分组

## 对象

### 对象属性增强写法

- 可以在对象字面量中只使用属性名
- 通过 `[]` 来访问属性

### 支持类

接口，继承。。。

### for in  、for of 、for await

- `for in` 原有的枚举方法
  - 用来枚举对象的可枚举属性
  - 不可以枚举 `Symbol` 属性，可以枚举继承属性

```javascript
let obj = {
    name: 'zy',
    gender: 'man',
    age: 23,
    changeName(name){
	 this.name = name 
    }
}
for(const el in obj){
	console.log(el)
}
```

- `for of` es6新增的枚举方法

**用来按照迭代器协议枚举可迭代对象**

```javascript
function* generator(n) {
    let a = 0, b = 1
    while(a < n) {
        yield a;
        [a, b] = [b, a + b]
    }
}
let fib = generator(100)
for(let el of fib)
    console.log(el)
```

- for await 是ES6以后新增的枚举方法

**是按照迭代器协议枚举可枚举对象，在给循环变量赋值时都会加上一个await**

```javascript

// 实现一个异步迭代器
function asyncIterator(ar) {
    let index = 0, length = ar.length
    return {
       [Symbol.asyncIterator]() { // 返回一个异步迭代器对象
           return this
       },
       next() { // 返回一个Promise对象
           if(index === length) // 如果已经迭代完毕
               return new Promise(resolve => {
                   resolve({done: true, value: undefined}) // 返回一个done为true的Promise对象
               })
           else {
               if (ar[index] instanceof Promise) // 如果当前元素是一个Promise对象
                   return new Promise((resolve, reject) => {
                       ar[index ++].then(res => { // 等待Promise对象resolve
                           resolve({done: false, value: res}) // 返回一个done为false的Promise对象
                       }, error => {
                           reject(error)
                       })
                   })
               else // 如果当前元素不是Promise对象
                   return new Promise(resolve => {
                       resolve({done: false, value: ar[index ++]}) // 返回一个done为false的Promise对象
                   })
           }
       }
   }
}

// 创建测试数据
let p1 = new Promise(res => {
    setTimeout(() => {
        res("p1")
    }, 3000)
}), p2 = new Promise(res => {
    setTimeout(() => {
        res("p2")
    }, 2000)
});

(async function () {
    // 使用for await迭代异步迭代器
    for await(let p of asyncIterator([p1, p2]))
        console.log(p);

    // 手动迭代异步迭代器
    (function autoMaker(asyncIter) {
        let result = asyncIter.next();
        (function next(result) {
            result.then(res => {
                if(res.done !== true) {
                    console.log(res.value)
                    result = asyncIter.next()
                    next(result)
                }
            })
        })(result);
    })(asyncIterator([p1, p2]));
})();
```

### 对象方法

只在ES6的文档中就扩展了不少新的对象方法，这里列举一下常用的。
**注：虽然像Object.freeze和Object.seal这些方法也很有用，但是这里先不总结。Object.freeze可以配合Vue使用提高性能**

- Object.is(value1, value2) 用于判断两个值是否相等。

> 判断规则:
>
> 1. 类型转换不同于=和，不会对value1和value2做强制类型转换。
> 2. null和undefined不同于=和，都为null或都为undefined时为true
> 3. 字符串判断同=和，字面相同即为true
> 4. 数值判断不同于=和，NaN和NaN为true，+0和-0为true
> 5. 对象判断不同于=和，指向同一个堆内存的对象为true

- Object.assign(target, …args) 用于对象合并，效果和扩展操作符一样

> 合并规则：
>
> 1. target是目标对象，args都是来源对象，将来源对象的可枚举属性都复制到target上面，如果出现覆盖现象，那么按顺序覆盖。
> 2. "Object.assign"和"扩展操作符+对象字面量"来合并对象，都是浅复制，不会复制堆内存。

## 数组

1. Array.from(iterator) 工厂方法，可以将一个可迭代对象展开，转换成一个数组

   ```javascript
   // 斐波那契数列迭代器
   function generator(n) {
       let a = 0, b = 1
       return {
           [Symbol.iterator]() {
               return this
           },
           next() {
               let temp = a
               if(temp <= n ) {
                   [a, b] = [b, a + b]
                   return {done: false, value: temp}
               }
               else
                   return { done: true, value: undefined }
           }
       }
   }
   // 得到一个1000以内的斐波那契数列数组
   console.log(Array.from(generator(1000))) 
   1234567891011121314151617181920
   ```

2. Array.isArray(obj) 工厂方法，判断传入的参数是否是数组

3. Array.of(…args) 工厂方法，传入任意多个元素，成为数组的成员。在Array构造函数中，如果只传入一个元素，那么会设定为数组长度，Array.of()解决了这个问题。

4. array.findIndex() 新增了数组元素搜索方法，搜不到返回-1，否则返回满足条件的元素的位置。此方法比indexOf方法更加灵活，这种方法可以说是高阶函数，允许自己编程。

   ```javascript
   // 制造100个位于-50~+50之间的随机数
   let ar = []
   for(let i = 0; i < 100; i ++)
       ar[i] = (Math.random() - 0.5) * 100
   
   // 寻找第一个大于60的数的下标
   let index = ar.findIndex((el, index, array) => {
       return el > 30
   },this)
   console.log(index)
   12345678910
   ```

5. array.find() 新增了数组元素搜索方法，搜不到返回undefined，否则返回满足条件的元素的值。

   ```javascript
   // 制造100个位于-50~+50之间的随机数
   let ar = []
   for(let i = 0; i < 100; i ++)
       ar[i] = (Math.random() - 0.5) * 100
   
   // 寻找第一个大于60的数的值
   let el = ar.find((el, index, array) => {
       return el > 30
   },this)
   console.log(el)
   12345678910
   ```

6. array.flat(depth) 新增了数组扁平化方法。可以设置扁平的层数。这个方法返回一个新数组，不修改原数组。

   ```javascript
   let ar = [1, [2, [3, [4, [5]]]]]
   console.log(ar.flat(1), ar) // [ 1, 2, [ 3, [ 4, [Array] ] ] ] [ 1, [ 2, [ 3, [Array] ] ] ]
   console.log(ar.flat(2), ar) // [ 1, 2, 3, [ 4, [ 5 ] ] ] [ 1, [ 2, [ 3, [Array] ] ] ]
   console.log(ar.flat(3), ar) // [ 1, 2, 3, 4, [ 5 ] ] [ 1, [ 2, [ 3, [Array] ] ] ]
   console.log(ar.flat(4), ar) // [ 1, 2, 3, 4, 5 ] [ 1, [ 2, [ 3, [Array] ] ] ]
   12345
   
   //手写
   var flat = function (arr, n) {
      if(!n) return arr
   
      return arr.reduce((pre, item) => {
          if(Array.isArray(item) && n > 0){
              pre.push(...flat(item, n-1))
          } else {
              pre.push(item)
          }
          return pre
      },[])
   };
   ```

7. array.flatMap() 新增了数组扁平化映射方法。默认扁平化一层。这个方法会先进行map映射，最后再进行数组扁平化。这个方法返回一个新数组，不修改原数组。

   ```javascript
   // 使用flatMap方法比map方法更高效，除了能扁平化，还能实现filter的效果。
   let ar = [1, , , 2, , 3, [], 4, , [], , , 5]
   console.log(ar.flatMap((el, index, array) => {
       return el ? el : []
   }, this)) // [ 1, 2, 3, 4, 5 ]
   12345
   ```

8. array.fill(value, start, end) 新增了数组填充方法。从起始位置到终点位置填充value值(左闭右开的区间)。这个方法不返回一个新数组，会修改原数组。

   ```javascript
   let ar = new Array(10)
   ar.fill(12, 0, 9)
   console.log(ar) // [ 12, 12, 12, 12, 12, 12, 12, 12, 12, <1 empty item> ]
   123
   ```

9. array.includes(el) 新增了数组的元素存在方法。这个方法相比下面“12”中介绍的集合的测试元素是否存在方法低效很多。

   ```javascript
   let ar = new Array(10)
   ar.fill(12, 0, 9)
   console.log(ar.includes(11), ar.includes(12)) // false true
   ```

## 函数

### 箭头函数

### 函数支持形参赋默认值

### 尾调用

# 异步编程

### Promise

###  迭代器和生成器

### async和await和异步迭代器

# 代理和反射

### 理解反射对象Reflect

反射对象是Reflect，它类似于Map定义了一些映射关系。Reflect的方法直接映射到操作对象的方法上。举例如下：

1. Reflect.ownKeys(Object) 直接映射到对象属性访问，访问对象所有属性
2. Reflect.has(Object, name) 直接映射到in操作符，相当于name in Object的操作

```typescript
// 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。
Reflect.apply(target, thisArg, args)	
// 对构造函数进行 new 操作，相当于执行 new target(...args)。
Reflect.construct(target, args)
// 获取对象身上某个属性的值，类似于 target[name]。如果没有该属性，则返回undefined。
Reflect.get(target, name, receiver)
// 将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true。
Reflect.set(target, name, value, receiver)
// Reflect.defineProperty方法基本等同于Object.defineProperty，直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，不同的是，Object.defineProperty返回此对象。而Reflect.defineProperty会返回布尔值.
Reflect.defineProperty(target, name, desc)
// 作为函数的delete操作符，相当于执行 delete target[name]。
Reflect.deleteProperty(target, name)
// 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。
Reflect.has(target, name)
// 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受enumerable影响, Object.keys返回所有可枚举属性的字符串数组).
Reflect.ownKeys(target)
// 判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）,类似于 Object.isExtensible()。返回表示给定对象是否可扩展的一个Boolean 。（Object.seal 或 Object.freeze 方法都可以标记一个对象为不可扩展。）
Reflect.isExtensible(target)
// 让一个对象变的不可扩展，也就是永远不能再添加新的属性。
Reflect.preventExtensions(target)
// 如果对象中存在该属性，如果指定的属性存在于对象上，则返回其属性描述符对象（property descriptor），否则返回 undefined。类似于 Object.getOwnPropertyDescriptor()。
Reflect.getOwnPropertyDescriptor(target, name)
// 返回指定对象的原型.类似于 Object.getOwnPropertyDescriptor()。
Reflect.getPrototypeOf(target)
// 设置对象原型的函数. 返回一个 Boolean， 如果更新成功，则返回true。如果 target 不是 Object ，或 prototype 既不是对象也不是 null，抛出一个 TypeError 异常。
Reflect.setPrototypeOf(target, prototype)

```

使用

 ```js
// Reflect.apply
var obj1 = {};
Reflect.apply(Math.floor, obj1, [1.88]) // 1;

// Reflect.construct
const obj2 = Reflect.construct(Date, [2021, 3, 1])

// Reflect.get
var obj3 = { x: 1, y: 2 };
Reflect.get(obj3, "x"); // 1

// Reflect.set
var obj4 = {};
Reflect.set(obj4, "prop", "value"); // true

// Reflect.defineProperty(
const obj5 = {};
Reflect.defineProperty(obj5, 'property', {
  value: 666,
  writable: false
}); // true

// Reflect.deleteProperty
var obj6 = { x: 1, y: 2 };
Reflect.deleteProperty(obj6, "x"); // true
obj; // { y: 2 }

// Reflect.has
const obj7 = {x: 0}
Reflect.has(obj7, "x"); // true

// Reflect.ownKeys
const obj8 = {z: 3, y: 2, x: 1}
Reflect.ownKeys(obj8); // [ "z", "y", "x" ]

// Reflect.isExtensible
var obj9 = {};
Reflect.isExtensible(obj9); // true

// Reflect.preventExtensions
var obj10 = {};
Reflect.isExtensible(obj10); // true
Reflect.preventExtensions(obj10);
Reflect.isExtensible(obj10); // false

// Reflect.getOwnPropertyDescriptor
const obj11 = {x: "hello"}
Reflect.getOwnPropertyDescriptor(obj11, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

// Reflect.getPrototypeOf
var obj12 = {};
Reflect.getPrototypeOf(obj12); // 等同于Object.prototype

// Reflect.setPrototypeOf
var obj13 = {};
Reflect.setPrototypeOf(obj13, null); // true

 ```

### 理解对象代理

```
let p = new Proxy(target, handler)
```

| 对象类型   | 意义                               |                             作用                             |
| ---------- | ---------------------------------- | :----------------------------------------------------------: |
| 代理对象   | Proxy构造函数的实例化对象，指的是p | 目标对象的代理人，用户发起的对目标对象的操作都交给代理对象处理。代理对象接收到操作请求后会交给处理器对象。 |
| 目标对象   | 一个普通对象，指的是target         |       目标对象不希望暴露出去，指派代理对象作为代理人。       |
| 处理器对象 | 一个普通对象，指的是handler        | 目标对象的操作人，处理器对象有自己的处理函数命名规范，用来处理对象操作，例如set用于设置对象属性，get用于获取对象属性，也可以调用反射对象方法将操作返回给目标对象执行。 |

### 保护引用

对象代理中可以创建一个可撤销代理，当需要把对象交给第三方库时，可以给对象创建一个透明包装（处理器对象为空对象），并且这个包装是可以撤销的，使用完第三方库就立即撤销代理，第三方库无法访问目标对象

```javascript
// 一个涉及到学生成绩隐私的对象
let stu = {
    name: "Danny",
    grade: [98, 96, 96, 91, 91, 97, 94]
}

// 一个不受信赖的第三方函数
function unSafeFunc(stuInfo) {
    console.log(stuInfo)
}

// 创建可撤销代理
let { proxy, revoke } = Proxy.revocable(stu, {})

// 第三方函数操作，此时第三方函数中可以操作该对象
unSafeFunc(proxy)

// 撤销代理，proxy代理对象不能再代理目标对象stu，就是proxy不能再操作stu
revoke()

// 第三方函数再次尝试操作，发现不能操作该对象，直接报错
unSafeFunc(proxy)
```

### 隐藏属性

当属性不需要被访问时，可以在处理器对象中设置拦截，在has函数和get函数中判断如果出现不能被访问的属性，那么拦截

```javascript
has(target, name) {
    if(name === "grade")
        return false
    return Reflect.has(target, name)
}

get(target, name, receiver) {
    if(name === "grade")
        return undefined
    return Reflect.get(target, name, receiver)
}
```

### 记录操作

对代理对象的操作会先交付给处理器对象，如果在处理器对象中设置监听操作，那么就可以记录这些针对目标对象的操作

```javascript
let stu = {
    name: "Danny",
    grade: [98, 96, 96, 91, 91, 97, 94]
}

let handler = {
    get(target, name, receiver) {
        console.log(`监听到访问对象${name}属性的操作`)
        return Reflect.get(target, name, receiver)
    },
    set(target, name, value, receiver) {
        console.log(`监听到修改对象${name}属性值为${value}的操作`)
        return Reflect.set(target, name, value, receiver)
    },
    has(target, name) {
        console.log(`监听到查询对象是否存在${name}属性的操作`)
        return Reflect.has(target, name)
    }
}

let proxy = new Proxy(stu, handler)

proxy.name = "Lucy" //监听到修改对象name属性值为Lucy的操作
console.log(proxy.name) //监听到访问对象name属性的操作;Lucy
console.log("grade" in proxy)//监听到查询对象是否存在grade属性的操作;true
```

### 类型验证

可以利用拦截机制来提供JavaScript中不具备的自动类型检查功能。类型检查不用写在类中，提高了代码简洁性。

```javascript
class Student {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
}

let StudentProxy = new Proxy(Student, {
    construct(target, args, newTarget) {
        if(typeof args[0] !== "string")
            throw new TypeError("姓名必须是字符串")
        if(typeof args[1] !== "string" || (args[1] !== "男" && args[1] !== "女"))
            throw new TypeError("性别必须是男或女")
        return Reflect.construct(target, args, newTarget)
    }
})

// 由于man不符合处理器对象第二条规范，所以会抛出错误
let stu = new StudentProxy("Danny", "man")
```

### 数据绑定

可以利用拦截机制来进行数据绑定，把两个本来不相关的数据绑定在一起

```javascript
let stuList = []

class Student {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
    }
}

let StudentProxy = new Proxy(Student, {
    construct(target, argArray, newTarget) {
        let stu = Reflect.construct(target, argArray, newTarget)
        stuList.push(stu)
        return stu
    }
})

let stu = new StudentProxy("Danny", "man")
console.log(stuList)
```

|    运用方向    | 应用场景 |
| :------------: | :------: |
|  保护目标对象  | 保护引用 |
|  保护目标对象  | 隐藏属性 |
| 提高代码封装性 | 记录操作 |
| 提高代码封装性 | 类型验证 |
| 提高代码封装性 | 数据绑定 |

## 集合和映射

### Map

#### Map和Object的对比

| 情况     | Map                                                          | Object                                                 |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------ |
| 意外的键 | Map默认情况下不包含键                                        | 默认情况下Object包含原型链上的键，可能会被自身的键覆盖 |
| 键的顺序 | 枚举时Map的键的顺序是插入顺序                                | 枚举时Object的键有特殊顺序                             |
| 键的类型 | Map的键可以是任意类型                                        | Object的键只能是Symbol或者String                       |
| 迭代性   | Map可迭代                                                    | Object只有写迭代器才可以迭代                           |
| 性能优化 | 1.可以快速通过size属性获取键值数量 2.对频繁增删查改键值做出优化 | 未作出优化                                             |

#### Map方法介绍

基础方法：

1. set(key, value) 设置键和值
2. get(key) 通过键获取值
3. delete(key) 根据键删除某个键值
4. has(key ) 判断是否有键
5. clear() 清空所有键值

迭代器方法：

1. keys() 返回键构成的数组
2. values() 返回值构成的数组
3. entries() 返回键和值构成的数组
4. forEach() 类似数组的遍历方法
5. size 返回Map键值对的个数

#### WeakMap和Map的对比

| 情况     | Map                                                          | WeakMap                                                 |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| 键的要求 | 原始类型或者引用类型                                         | 必须是引用类型                                          |
| 垃圾回收 | Map中的值如果是引用类型，相当于对该堆内存又添加了一个引用，不管是标记清理还是引用计数都无法释放该堆内存 | WeakMap中的值是引用类型，但是不会影响该堆内存被垃圾回收 |
| 迭代性   | 可迭代                                                       | 由于值随时会被垃圾回收，所以不可迭代                    |

#### WeakMap方法介绍

1. set(key, value) 添加一个键值对
2. has(key) 判断是否有键
3. delete(key) 删除一个键值对
4. get(key) 获取一个键值

### Set

#### Set和Array的对比

| 情况     | Set                                | Array             |
| -------- | ---------------------------------- | ----------------- |
| 顺序性   | 元素插入Set的顺序                  | 有数值索引顺序    |
| 重复性   | 不允许元素重复                     | 允许元素重复      |
| 迭代性   | 可迭代                             | 可迭代            |
| 索引     | 无索引                             | 有索引            |
| 性能优化 | 1.对检查是否存在某一个元素做了优化 | 相比Set没什么优化 |

#### Set方法介绍

基础方法：

1. add(el) 给集合添加一个元素
2. has(el) 判断集合中是否存在一个元素
3. delete(el) 删除集合中的一个元素
4. clear() 清空集合

迭代器方法：

1. forEach 类似数组的遍历方法
2. size 返回集合元素个数

# 模块化

## CommonJS规范

### CommonJS的实现机制

**1. 模块加载器机制：** 为了实现CommonJS，NodeJS或webpack会实现一个模块加载器，用于实现下列两种机制。模块加载器的部分代码如下举例。

**2. 包裹机制：** 实现CommonJS模块化需要在模块被创建时在外面包裹一个闭包

```javascript
// 下面是模拟实现，Module类控制模块，调用Module.wrap方法，传入你的代码后就会自动对你的代码进行包装
Module.wrapper = [
    // 可以看到CommonJS要求为每个模块额外提供5个全局变量
   '(function (exports, require, module, __dirname, __filename) {', '})'
]

Module.wrap = script => {
   return `${Module.wrapper[0]}${script}${Module.wrapper[1]}`
}
123456789
```

**3. 同步加载机制：** 实现CommonJS模块化需要实现重要的模块加载机制。加载机制可以简述为以下几个步骤：
**(1)** 解析路径
**(2)** 调用底层的C++提供的IO模块**同步**读取文件
**(3)** 创建模块对象，创建时会实现上面的包裹机制
**(4)** 将模块对象加入自定义的缓存对象存储，提高多次调用时的效率
**(5)** 返回该模块暴露出来的module.exports对象

```javascript
// 模拟实现的核心代码
// 实现模块加载的函数
function req (filename) {
    //1.我们需要一个绝对路径来，缓存是根据绝对路径的来的
    filename =  Module.resolvePathName(filename)
    if(!filename) return new Error('not find file')
    
    //判断是否有缓存，有的话返回缓存对象
    let cacheModule = Module._cache[filename]
    if(cacheModule) return cacheModule

    // 2,没有模块 创建模块
    let module = new Module(filename) //创建模块

    //3.加载这个模块{filename: 'c:xx', exports: 'hello world'}
    module.load(filename) // 这里不过多列举load方法，感兴趣可以再到网上了解
    
    //4.把加载好的模块加入缓存
    Module._cache[filename] = module
    return module.exports
}

// 实现路径解析的函数
Module.resolvePathName = filename => {
   // 1.拿到路径,进行解析绝对路径
   let p = path.resolve(__dirname, filename)
   //2.判断路径里是路径还是文件名,如果是文件名的话查找文件
   if(!path.extname(p)) {
      //4.如果有文件名,则确定是一个文件,开始
      for(var i =0, arr = Module._extentions, len = arr.length; i < len; i++) {
         let newPath = `${p}${arr[i]}`
         //如果访问的文件不存在， 就会发生异常
         try {
            fs.accessSync(newPath)
            return newPath
         } catch(e) {}
      }
   } else {
      // 3.如果没有文件名,则进行模块化加载:查找同名文件夹下的package.json || index.js
      // 这里没有做处理,只是做了防止报错
      try {
         fs.accessSync(p)
         return p
      } catch(e) {}
   }
}
```

### CommonJS全局对象介绍

1. require(filename) 表示加载某一个模块，加载规则如下

   - 路径规则：自定义模块必须使用相对路径或者绝对路径。如果只写文件名，表示是内置模块
   - 文件名规则：文件名的js可以省略

2. exports 表示一个对module.exports的引用，即module.exports === exports为true。模块在导出时导出的是module.exports的栈内存地址，而不是exports的栈内存地址。**这就让人想到了在“原型链”中总结到的原型的动态性，实例化对象的__proto__指针和构造函数的prototype指针与这里的module.exports指针和exports指针的情况有些相似的地方。** 这里也可以举出很多例子来。

   **举例一： 修改module.exports的堆内存**

   ```javascript
   // A.js
   console.log(require("./B.js")) // msg，name，gender都会输出
   
   // B.js
   module.exports.msg = "hello"
   exports.name = "Danny"
   exports.gender = "man"
   1234567
   ```

   **举例二：重写module.exports的堆内存**

   ```javascript
   // A.js
   console.log(require("./B.js")) // 只会输出msg
   
   // B.js
   // module.exports的堆内存被重写了，即新开辟了堆内存。下面exports仍然在旧的堆内存上修改，这些修改不会作用到最后的结果上去。
   module.exports = {
       msg: "hello"
   }
   exports.name = "Danny"
   exports.gender = "man"
   12345678910
   ```

3. module 该对象主要使用module.exports进行模块内容导出，使用module.exports导出的内容会被其它引用它的模块接收(可以参考13.1.1中提到的模块加载机制)

4. __dirname 表示当前文件所在的文件夹的绝对路径

5. __filename 表示当前文件所在的绝对路径，包含文件名

### CommonJS的使用

NodeJS实现了CommonJS规范，可以直接使用上述提到的所有机制。在客户端中不能直接使用CommonJS规范，需要借助webpack等打包工具实现上述机制。

## 13.2 AMD规范

### AMD的实现机制

AMD的实现机制和CommonJS的实现机制大同小异，也分为以下三点。

**1. 模块加载器机制：** 与CommonJS类似，可以在github中找到对应的实现(require.js)

**2. 包裹机制：** moduleName表示当前模块的名称，不写moduleName会成为匿名模块，文件名为模块名。requireModules表示要异步引入的模块的名称，这些模块的工厂函数返回值将会作为当前模块的全局变量。function是一个工厂函数，工厂函数是需要返回内容，这个返回的内容将会被引用该模块的模块接收到，在下面例子中提到工厂函数也可以模仿CommonJS的动态加载机制。

```javascript
// requireModules也可以是require和modules等等，这样就可以在AMD规范中实现一个CommonJS规范的风格
define(moduleName, [...requireModules], function(...requireModules) {
    return {
        msg: "hello"
    }
})
123456
```

**3. 异步加载机制：** 与CommonJS类似，只不过换成了异步加载

### AMD与CommonJS的相同与不同

**1. 不同点：** AMD是“异步加载机制”更关注于客户端JavaScript，CommonJS在上面提到是“同步加载机制”更关注于服务端JavaScript。

**2. 相同点：** CommonJS是NodeJS的默认模块机制，如果想在NodeJS使用AMD需要通过npm或yarn安装。CommonJS和AMD都是使用了“模块加载器”机制。

## CMD规范

### CMD规范的实现机制

CMD的实现机制和AMD和CommonJS实现大同小异，也分为以下三点。

**1. 模块加载器机制：** 与CommonJS类似，可以在github中找到对应的实现(sea.js)

**2. 包裹机制：** 包裹机制和AMD太相似了，但是CMD默认为你提供了一个CommonJS风格的模块。CMD虽然可以像AMD一样在模块创建时在第二个参数写依赖模块，但是提供的CommonJS风格的模块还是希望你使用动态模块加载机制，使用require在用到模块时再加载。

```javascript
define(moduleName, [...requireModules], function(require, exports, module) {
    return {
        msg: "hello"
    }
})
12345
```

**3. 加载机制：** 可以在第二个参数中写依赖的模块，就像模仿AMD规范一样，也可以使用CommonJS风格，动态加载模块。

## UMD规范

### UMD规范的实现

UMD规范主要是为了整合上述规范。实现思路是，模块创建时会自动检测define，module的类型情况，以此来判断该使用哪一种模块。

## ES6模块规范

### ES6模块机制的使用

注：起始ES6的模块机制的export和import有很多种有意思的用法，这里仅列举出常用的，不涉及一些组合用法。

1. 导出export：
   - export 后跟{}，大括号中写要一次性导出的多个已声明的变量。这很像ES6增强的对象写法，实际上这不是对象。
   - export 后跟变量声明语句，表示一次导出一个变量。
   - export default 后跟变量。export default一个模块中只能有一个，export可以有多个。
2. 导入import：
   - import {} from ‘filename’。大括号中填写export导出的变量名，要保持一致。filename必须带上js，必须使用绝对路径或者相对路径，否则会被当做内置模块。
   - import 自定义名称 from ‘filename’。如果是接收export default的导出，需要自定义一个名称。
   - import ‘filename’。仅将文件执行一遍。
   - import(‘filename’).then(module => {})。异步加载模块，加载完成后模块将作为promise的兑现值。可以通过module.default或者module.xxx访问模块导出的内容。

### ES6模块机制和CommonJS模块机制的区别

**CommonJS模块输出的是值的拷贝，ES6模块输出的是值的引用，是只读的。** 当被引用的模块中的变量发生变化时，CommonJS规范下导出的该变量不会变化，ES6规范下导出的该变量会变化。因为只读的特性，ES6模块输出值的栈内存不可更改，堆内存可以更改，CommonJS则是都可以修改。

> CommonJS模块输出测试
>
> ```javascript
> // test.js
> let {a} = require("./server.js")
> console.log(a)      // 1
> setTimeout(() => {
>     console.log(a)  // 1
> }, 3000)
> 
> // server.js
> let a = 1
> setTimeout(() => {
>    a = 3
> }, 2000)
> exports.a = a
> 12345678910111213					
> ```
>
> ES6模块测试
>
> ```javascript
> // test.js
> import {a} from "./server.js"
> console.log(a)
> setTimeout(() => {
>     console.log(a)
> }, 3000)
> 
> // server.js
> let a = 1
> setTimeout(() => {
>    a = 3
> }, 2000)
> export { a }
> 12345678910111213
> ```

**CommonJS是运行时加载，ES6是编译时加载。**

> **CommonJS：** CommonJS模块是对象。在遇到require时，会加载整个模块。模块导出值集中到module.exports暴露出去。
>
> **ES6：** ES6模块不是对象。在遇到import时会去找导出的变量，而不是加载整个模块。export+{}表示显示输出代码，而不是将变量集中到某个变量中去。























