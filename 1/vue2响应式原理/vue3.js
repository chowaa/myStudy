/**
 * @description: vue3.0响应式原理
 */
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      console.log('get', key);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      console.log('set', key, value);
      return Reflect.set(target, key, value);
    }
  })
}