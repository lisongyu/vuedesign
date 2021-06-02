<template>
  <div>
    <h3>页面A</h3>
    <router-link to="/eventBus2"> 跳转B页面 </router-link>
  </div>
</template>

<script>
export default {
  created() {
    console.log("----A页面监听事件----");
    // 使用Vue原型链引入
    this.$EventBus.$on("getNum", (num) => {
      console.log("num", num);
    });
  },
};
</script>