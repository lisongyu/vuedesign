import Vue from 'vue'

// main.js
import toast from '@/components/plugins/toast'
import EventBus from '../eventbus'
// 安装toast插件
Vue.use(toast)
Vue.prototype.$EventBus = EventBus