//订阅器模型
// 1.容器（存储数据）
// 2.订阅的操作
// 3.发布的动作
let Dep = {
  //创建队列
  list:[],
  //队列中不存在数据就创建空数据
  listen(key ,fn){
    ( this.list[key] || (this.list[key] = [] )).push(fn)
    // console.log(list[key],'list[key]');
  },
  trigger(){
    //将类数组转为真数组
    let key = Array.prototype.shift.call(arguments),
      fns = this.list[key];
    if(!fns || fns.length === 0){
      return
    }
    for (let i = 0, fn; fn = fns[i++]; ) {
      fn.apply(this, arguments)      
    }
  }
}


let dataChange = function({ data, tag, dataKey,selector }){
  let value = '',
    el = document.querySelector(selector);
  //数据劫持
  Object.defineProperty(data, dataKey, {
    get() {
      console.log('取值');
      return value
    },
    set(val){
      console.log(val);
      value = val;
      Dep.trigger(tag,val)
    }
  })

  Dep.listen(tag,function(text){
    // debugger
    el.innerHTML = text;
  })
}