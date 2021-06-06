import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './kvuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    add(state){
      //state哪来的
      state.count++
    }
  },
  actions:{
    add({commit}){
      setTimeout(()=>{
        commit('add')
      },1000)
    }

  },
  getters:{
    doubleCount:state=>{
      return state.count*2
    }
  }
})