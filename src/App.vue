<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
  @import './css/base/base';
  html,body{
    height: 100%;
  }
  #app{
    height:100%;
    @include remCalc(width, 750);
    margin: 0 auto;
  }
</style>
