import Vue from 'vue'
// import Router from 'vue-router'
import Router from './kvue-router'

//组件模块
// import Login from '../pages/admin/login'
import Home from '../pages/home'
import Plugins from '../pages/plugins'
import Toast from '../pages/plugins/toast'
import My from '../pages/my'
import eventBus1 from '../pages/eventBus/child1'
import eventBus2 from '../pages/eventBus/child2'
import parentuse from '../pages/parent'
import form from '../pages/form'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/plugins', name: 'Plugins', component: Plugins },
    { path: '/Toast', name: 'Toast', component: Toast },
    { path: '/My', name: 'My', component: My },
    { path: '/eventBus1', name: 'eventBus1', component: eventBus1 },
    { path: '/eventBus2', name: 'eventBus2', component: eventBus2 },
    { path: '/parentuse', name: 'parentuse', component: parentuse },
    { path: '/form', name: 'form', component: form }

  ]
})