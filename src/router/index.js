import Vue from 'vue'
import Router from 'vue-router'

//组件模块
// import Login from '../pages/admin/login'
import Home from '../pages/home'
import Plugins from '../pages/plugins'
import Toast from '../pages/plugins/toast'
import My from '../pages/my'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/plugins', name: 'Plugins', component: Plugins },
    { path: '/Toast', name: 'Toast', component: Toast },
    { path: '/My', name: 'My', component: My }

  ]
})