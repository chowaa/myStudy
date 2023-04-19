<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <div class="aotuWH-box">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="span-box">
    <span class="span1">测试不同视窗大小下的字体大小</span>
    <span class="span2">测试不同视窗大小下的字体大小</span>
  </div>
  <!-- <router-view/> -->
</template>

<style lang="scss">
.aotuWH-box{
  width: 100%;
  display: flex;
  div{
    flex: 0.25;
    margin: 10px;
    background-color: $secondary-color;
    aspect-ratio: 1;
  }
}
.span-box{
  display: flex;
  width: 100%;
  height: 100%;
  span{
    text-align: center;
    flex: 0.5;
  }
  .span1{
    font-size: ( 12px * $compute-width ) / 1920px;
  }
  .span2{
    font-size: clamp(1rem, 0.9rem + 0.5vw, 1.5rem);
  }
}
@media screen {
  
}
</style>
