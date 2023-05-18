<script setup lang="ts">
// import { ref } from 'vue'
type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    const obj:ReturnObj = {
      increment: () => {
        let myinit = init + 1
        return myinit
      },
      decrement: () => {
        let myinit = init - 1
        return myinit
      },
      reset: () => {
        let myinit = init
        return myinit
      }
    }
    return obj
};
const counter = createCounter(5);
console.log(counter);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
</script>

<template>
  <h1> msg </h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
