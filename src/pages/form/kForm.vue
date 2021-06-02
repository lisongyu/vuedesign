<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// 1.props:model,rules
// 2.validate()
  export default {
    provide(){
      return {
        form:this // 这里传递的是表单组件实例
      }
    },
    props: {
      model: {
        type: Object,
        require:true
      },
      rules:Object
    },
  }
</script>

<style lang="scss" scoped>

</style>