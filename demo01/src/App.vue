<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
    </nav>
    <router-view/> -->
    <HomeView></HomeView>
  </div>
</template>

<script>

import HomeView from './views/HomeView.vue';
export default {
  components: {
    HomeView
  }
}
</script>

<style lang="less">

</style>
