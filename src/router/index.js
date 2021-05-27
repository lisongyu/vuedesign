import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Login from '../pages/admin/login'
import Home from '../pages/home'
import My from '../pages/my'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/My', name: 'My', component: My }

  ]
})