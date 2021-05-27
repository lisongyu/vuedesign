<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-link to="/">主页</router-link>    
    <router-link to="/Login">登陆页</router-link>

    <router-view/>  //组件显示的地方
     
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>

