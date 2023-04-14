<template>
  <div>{{ count }}
    <button @click="countAdd">++</button>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

export default {
  setup() {
    // const count = ref(0)
    // const url = ref
    const state = reactive({
      count: 0,
      url: 'https://api.thecatapi.com/v1/images/search'
    })
    return toRefs(state)
    // return toRefs( state)
  },
  function countAdd() {

  }
  // onMounted() {
  //   console.log('url')
  // }
}
</script>

<style>

</style>
