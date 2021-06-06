let KVue
// 插件
// 1.实现一个install方法
class KVueRouter {
  constructor(options) {
    this.$options = options;
    // 响应式数据
    const ininial = window.location.hash.slice(1)||'/'
    KVue.util.defineReactive(this,'current',ininial)
    // this.current = '/'
    this.routeMap={}
    this.$options.routes.forEach(route=>{
      this.routeMap[route.path]=route
    })

    // 监听事件
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }
  onHashChange() {
    console.log(window.location.hash)
    this.current = window.location.hash.slice(1)
    console.log(this.current);
  }
}
// 形参是Vue构造函数
KVueRouter.install = function (Vue) {
  // 保存构造函数
   KVue = Vue

  // 1.挂载$router
  Vue.mixin({
    beforeCreate() {
      // 全局混入，将来在组件实例化的时候才执行
      // 此时router实例是不是已经存在了
      // this指的是组件实例
      if (this.$options.router) {
        // 挂载
        Vue.prototype.$router = this.$options.router
      }
    }
  })
  // 2.实现两个全局组件
  Vue.component('router-link', {
    // h是createElement
    props: {
      to: {
        type: String,
        require: true
      },
    },
    render(h) {
      // <a></a>
      // h(tag,props,children)
      return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
    }
  })
  // router-view是一个容器
  Vue.component('router-view', {
    render(h) {
      // 1.获取路由器实例
      // const routes = this.$router.$options.routes;
      // const current = this.$router.current
      // console.log(routes)
      // console.log(current)
      // const route = routes.find(route => route.path === current)
      const {routeMap,current} = this.$router
      const comp = routeMap[current] ? routeMap[current].component : null
      // 获取路由表
      return h(comp)
    }
  })

}
export default KVueRouter