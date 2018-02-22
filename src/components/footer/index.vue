<template>
  <footer class="footer-box" v-if="showFooter" flex="dir:left box:mean">
    <div flex="main:center cross:center">
      <div>
        <router-link to="/"><icon-svg :icon-class="iconArr.home"/></router-link>
        <p>首页</p>
      </div>
    </div>
    <div flex="main:center cross:center">
      <div>
        <router-link to="/cart"><icon-svg :icon-class="iconArr.cart"/></router-link>
        <p>购物车</p>
      </div>
    </div>
    <div flex="main:center cross:center">
      <div >
        <router-link to="/order"><icon-svg :icon-class="iconArr.order"/></router-link>
        <p>订单管理</p>
      </div>
    </div>
  </footer>
  <footer class="footer-box" v-else="showFooter" flex="dir:left box:mean">
  </footer>
</template>
<script>
  export default {
    name: 'footer-box',
    props: {
      routerFooter: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        iconArr: {
          home: 'newhome',
          cart: 'cart-font',
          order: 'shopinfo'
        },
        showFooter: this.routerFooter
      }
    },
    methods: {
      goHome () {

      }
    }
  }
</script>
<style lang="scss">
  @import "../../css/base/base";
  .footer-box{
    border-top:1px solid $border-color;
    background-color: $header-bg-color;
  }
  .footer-box > div{
    @include remCalc(height,90);
    text-align:center;
  }
  .footer-box a{
    display: block;
    @include fontDpr(16px);
  }
</style>
