let KVue
// 实现Store类
class Store {
  constructor(options){
   

    // 保存mutations
    this._mutations=options.mutations
    this._actions=options.actions
    this._wrapedGetters=options.getters

    let computed={}
    this.getters= {}

    const store=this
    Object.keys(this._wrapedGetters).forEach(key=>{
      // 获取用户定义的getter
      const fn=store._wrapedGetters[key]
      // 转化为computed可以使用无参数形式
      computed[key]=function(){
       return fn(store.state)
      }

      // 为getters定义只读属性
      Object.defineProperty(store.getters,key,{
        get(){
          return store._vm[key]
        }
      })
    })
     // 响应式的state
     this._vm=new KVue({
      data:{
        $$state:options.state
      },
      computed
     
    })

    // 绑定this到store实例

    const {commit,action} =store

    this.commit =function boundCommit(type,payload){
      commit.call(store,type,payload)
    }

    this.action =function boundAction(type,payload){
      return action.call(store,type,payload)
    }
    //getters
    // 1.遍历用户传入的getters所有key,动态赋值，其值应该是函数执行结果
    // 2.确保它是响应式的，Object.defineProperty(this.getters,key,{get(){}})
    // 3.缓存结果，可以利用computed
  
    // this.getters.doubleCount=options.getters.doubleCount(store.state)
  }
  get state(){
    return this._vm._data.$$state
  }
  set state(v){
    console.error('please use replaceState to reset state')
  }

  //commit(type,payload):修改状态
  commit(type,payload){
    // 根据type获取对应的mutation
    const entry=this._mutations[type]
    if(!entry){
      console.error('unknown mutation type')
      return
    }
    entry(this.state,payload)

  }

  // dispatch(type,payload)
  dispatch(type,payload){
    const entry=this._actions[type]
    if(!entry){
      console.error('unknown actions type')
      return
    }

    return entry(this,payload)

  }
}

// 实现插件

function install(Vue){
  KVue=Vue

  //混入
  Vue.mixin({
    beforeCreate(){
      if(this.$options.store){
        Vue.prototype.$store=this.$options.store
      }
    }
  })
}

// 此处到处的对象理解为VueX
export default {
  Store,
  install
}