<template>
  <div>
    <!-- 显示label -->
    <label v-if="label">{{label}}</label>
    <!-- 显示内部表单元素 -->
    <slot></slot>
    <!-- 错误提示信息 -->
    <p v-if="error" class="error">{{error}}</p>
    <p>{{form.model}}</p>
  </div>
</template>
<script>
export default {
  props:{
    label:{
      type:String,
      default:''
    }
  },
  inject:['form'],
  data(){
    return {
      error:'some error'
    }
  }
}
</script>
<style lang="scss" scoped>
  .error{
    color:#f00;
  }
</style>