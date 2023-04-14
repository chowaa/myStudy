# 生命周期对比





# ref，toRef，toRefs

使用方法

```typescript
import { defineComponent, ref, reactive, toRefs, toRef } from "vue";
export default defineComponent({
  setup() {
    const ageRef = ref(456);
    console.log('befor',ageRef.value);
    ageRef.value = 654
    console.log('after', ageRef.value);
    
    const state = reactive({
      age: 123,
      name: 'zy'
    })
    const ageRef1 = toRef(state,'age')
    const { age, name } = userFeatuerX()
    return {
      ageRef,
      ageRef1,
      age,
      name,
      selectedKeys: ref<string[]>(["2"]),
    } 
  },
});
function userFeatuerX(){
  const state = reactive({
    age: 1,
    name: 'name'
  })
  return toRefs(state)
}
```





# Vue3对比Vue2的提升

- createApp

![image-20230313142146408](C:\Users\chow\AppData\Roaming\Typora\typora-user-images\image-20230313142146408.png)

- emits属性

```typescript
// 父组件
export default {
    props: {
        msg: String
    },
    emits: [ 'onSayHello' ],
    setup(props, { emit }) {
        emit('onSayHello', 'vue3')
    }
}
```



- 生命周期
- 多事件
- Fragment
- 移除.sync
- 异步组件的写法
- 移除filter
- Teleport
- Suspense
- Composition API





















