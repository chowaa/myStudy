/**
 * 观察对象的某个值
 */

function observe(obj, onChange) {
  Object.keys(obj).forEach((key) => {
    let value = obj[key];
    // 定义一个不会重复的集合，来存放收集到的依赖
    let funcs = new Set();
    Object.defineProperty(obj, key, {
      get(){
        // 收集依赖
        funcs.add(window.__fun)
        return value;
      },
      set(newValue) {
        if (value !== newValue) {
          value = newValue;
          // 触发依赖
          funcs.forEach((func) => {
            console.log('执行了func', func);
            func && func();
          })
        }
      },
      enumerable: true,// 可枚举
      configurable: true// 可配置
    });
    // 使用递归进行深层次的观察
    if (typeof value === 'object') {
      observe(value, onChange);
    }
  });
  return obj;
}

function autoRun (fun) {
  window.__fun = fun
  fun()
  window.__fun = null
}