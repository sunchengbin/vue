<template>
  <div class="loading-box" flex="main:center cross:center">
    <img src="../../assets/image/loading.svg"/>
  </div>
</template>
<script>
export default {
  name: 'loading'
}
</script>
<style lang="scss">
  @import "../../css/base/base";
  html,body,.loading-box{
    height:100%;
  }
  .loading-box{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index: 2017;
    background-color: rgba(0,0,0,.3);
    img{
      @include remCalc(width,100);
    }
  }
</style>
