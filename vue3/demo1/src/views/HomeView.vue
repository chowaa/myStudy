<template>
  <div class="home">
    <h1>ToDoList</h1>
    <ul>
      <li v-for="(item,index) in lists" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
  },
  setup () {
    const state = reactive({
      lists: [1, 2, 3]
    })

    return toRefs(state)
  }
})
</script>
