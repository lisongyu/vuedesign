<template>
  <div>
    <p @click="$store.commit('add')">count:{{$store.state.count}}</p>
     <p @click="$store.dispatch('add')">async count:{{$store.state.count}}</p>
    <p>doun2:{{$store.getters.doubleCount}}</p>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>