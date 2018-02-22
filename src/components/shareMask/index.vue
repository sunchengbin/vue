<template>
  <div class="share-guide-box" v-show="showShareGuide">
    <div><img src="../../view/retest/img/share@3x.png"/></div>
    <p>{{shareMaskMessage}}</p>
    <img @click="closeShareGuide" src="../../view/retest/img/zhidaol@3x.png"/>
  </div>
</template>
<script>
export default {
  props: ['shareMaskMessage'],
  data () {
    return {
      showShareGuide: this.$store.state.shareMask
    }
  },
  methods: {
    closeShareGuide () {
      this.$store.commit('shareMaskClose')
      this.showShareGuide = this.$store.state.shareMask
    }
  }
}
</script>
<style lang="scss">
@import '../../css/base/base';
.share-guide-box{
  position: absolute;
  z-index: 2017;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0,0,0,.6);
  text-align: center;
  color: #fff;
  font-weight: lighter;
  @include fontDpr(18px);
  div{
    text-align: right;
    @include remCalc(padding-right,40);
    img:first-child{
      @include remCalc(width,108);
      @include remCalc(height,102);
      @include remCalc(margin,10 0 20);
    }
  }
  > img{
      @include remCalc(margin-top,30);
      @include remCalc(width,140);
  }
}
</style>
