<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-link to="/plugins">插件类</router-link>
    <router-link to="/My">我的</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

