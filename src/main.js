import Vue from 'vue'
import router from "./router"
import App from './App.vue'
import store from './kstore'
require('./utils/plugins')

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
