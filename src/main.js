// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

const state = {
  count: 9
}
const store = new Vuex.Store({
  state,
  getters: {
      evenOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  },
  actions: {
      increment: ({commit})=> commit('increment'),
      decrement ({commit}){
        commit('decrement')
      },
      incrementIfOdd({commit, state}) {
        if (state.count % 2 != 0)
          commit('increment')
      }
  },
  mutations: {
    increment(state){
        state.count++
    },
    decrement(state){
      state.count--
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
