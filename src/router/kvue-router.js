let KVue
// 插件
// 1.实现一个install方法
class KVueRouter {
  constructor() {
    KVue
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
        Vue.prototype.$router=this.$options.router
      }
    }
  })
  // 2.实现两个全局组件
  Vue.component('router-link', {
    // h是createElement
    props: {
      to: {
        type: String,
        require:true
      },
    },
    render(h) {
      // <a></a>
      return h('a', {attrs:{href:'#'+this.to}},this.$slots.default)
    }
  })
  // router-view是一个容器
  Vue.component('router-view', {
    render(h) {
      // <a></a>
      return h('div','view')
    }
  })
  
}
export default KVueRouter