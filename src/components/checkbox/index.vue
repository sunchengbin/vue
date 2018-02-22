<template>
    <div class="check-box-tpl">
      <div flex="dir:left box:last">
          <label :for="checkObj.labelId">{{labelName}}</label>
          <div class="checkbox" :class="{checked:checkboxChecked}">
              <input type="checkbox" :id="checkObj.labelId" @change="showChecked" v-model="checkboxChecked"/>
          </div>
      </div>
      <div class="explanation" v-show="checkObj.explanation">
        {{checkObj.explanation}}
      </div>
    </div>

</template>
<script>
export default {
  name: 'checkbox',
  props: {
    checkedVal: Object,
    checkedCount: Object,
    value: String
  },
  data () {
    return {
      checkObj: this.checkedVal,
      labelName: this.checkedVal.labelName,
      checkboxChecked: this.checkedVal.checked
    }
  },
  methods: {
    showChecked () {
      if (!this.checkedVal.checked) {
        if (this.checkedCount.count === 3) {
          this.$toast('最多选三个', 2000)
          this.checkboxChecked = false
          return
        }
        this.checkedCount.count++
      } else {
        this.checkedCount.count--
      }
      if (this.checkedCount.count > 0) {
        this.checkedCount.isCommit = false
      } else {
        this.checkedCount.isCommit = true
      }
      this.checkedVal.checked = this.checkboxChecked
    }
  }
}
</script>
<style lang="scss">
    @import '../../css/base/base';
    .check-box-tpl{
      .checkbox{
          width: 20px!important;
          height: 20px!important;
          box-sizing: border-box;
          vertical-align: middle;
          border:1px solid #f23030;
          position: relative;
          input{
            width: 20px!important;
            height: 20px!important;
            position: absolute;
            left:0;
            top:0;
          }
      }
      .checked{
        ::after{
          display: inline-block;
          content: ' ';
          width: 13px;
          height: 7px;
          position: absolute;
          top: 2px;
          left: 2px;
          border-top: 1px solid #f23030;
          border-right: 1px solid #f23030;
          transform: rotate(135deg);
          -webkit-transform: rotate(135deg);
          -moz-transform: rotate(135deg);
          -ms-transform: rotate(135deg);
          -o-transform: rotate(135deg);
        }
      }
      .explanation{
        @include remCalc(padding-top,30);
        @include fontDpr(12px);
        color: $gray-color;
      }
      label{
      }
    }
</style>
