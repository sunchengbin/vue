<template>
  <section class="header-box" :class="{ 'go-back' : showBackIcon }" flex="dir:left box:first">
    <div class="back-icon" v-show="showBackIcon">
      <icon-svg :icon-class="backIcon"/>
    </div>
    <div class="title-txt">{{headerTitle}}</div>
  </section>
</template>
<script>
  export default {
    name: 'header-box',
    props: {
      titleTxt: String,
      showBack: Boolean
    },
    computed: {
      headerTitle () {
        return `${this.titleTxt}`
      }
    },
    data () {
      return {
        backIcon: 'back-font',
        showBackIcon: this.showBack
      }
    }
  }
</script>
<style lang="scss">
  @import "../../css/base/base";
  .header-box{
    @include remCalc(height,90);
    @include remCalc(line-height,90);
    background-color: $header-bg-color;
    @include remCalc(padding-left,30);
    .back-icon{
      box-sizing: border-box;
      @include remCalc(width,110);
      font-size:14px;
    }
    .title-txt{
      color:$gray-color;
      @include fontDpr(16px);
    }
  }
  .go-back{
    .back-icon {
      @include remCalc(padding-right,30);
    }
  }
</style>
