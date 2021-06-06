<template>
  <div>
    <ul>
      <li>
        <router-link to="/plugins">插件类</router-link>
      </li>
      <li>
        <router-link to="/EventBus1">EventBus</router-link>
      </li>
      <li>
          <router-link to="/parentuse">parent</router-link>
      </li>
      <li>
          <router-link to="/form">表单</router-link>
      </li>
      <li>
        <router-link to="/vuexDemo">vuex实现demo</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "Home",
};
</script>