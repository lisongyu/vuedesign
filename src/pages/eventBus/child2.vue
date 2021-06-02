<template>
  <div>
    <h3>B页面</h3>
    <router-link to="/eventBus1">
      跳转A页面
    </router-link>
  </div>
</template>

<script>
export default {
  created () {
    console.log('----B页面递交事件----')
    const num = 2
    // 使用Vue原型链引入
    this.$EventBus.$emit('getNum', num)
  }
}
</script>