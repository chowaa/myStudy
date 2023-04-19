<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import homeList from '@/api/homeList';

const http = new homeList()
const data = {
  name: 'zhouyi',
  age: '23'
}
http.post(data).then((result) => {
  console.log(result.data);
}).catch((err) => {
  console.log(err);
});

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
