<script setup lang="ts">
import { createApp, ref, reactive, nextTick } from 'vue'
import Cat from './Cat.vue'

const app = createApp( {} )
app.component(
  "Cat"
)
const state = reactive({
  count: 0
})
function countAdd() {
  state.count++
  nextTick(()=>{
  })
}
</script>

<template>
  <div>
    <h1>{{ state.count }}</h1>
    <button @click="countAdd()">++</button>
    <hr>
    <Cat :count="state.count"></Cat>
  </div>
</template>

<style scoped>
</style>
