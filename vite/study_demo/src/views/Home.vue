<script lang="ts" setup>

</script>

<template>
  <div class="top">
    <nav class="">
      <router-link to="/HelloWorld">HelloWorld</router-link> |
      <router-link to="/ShoppingCart">ShoppingCart</router-link>
    </nav>
  </div>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.top{
  width: 100%;
  background-color: #42b883;
  color: #fff;
  padding: 0.5em;
  text-align: center;
  position: fixed;
  top: 0px;
  // left: 50%;
}
</style>