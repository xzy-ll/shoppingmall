import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    shopdata: []
  },
  mutations: {
    addgwc(state, payload) {
      // state.shopdata.push(payload)
      let oldshop = null;
      for (let item of state.shopdata) {
        if (item.id === payload.id) {
          oldshop = item
        }
      }
      if (oldshop) {
        oldshop.count += 1
      } else {
        payload.checked = true;
        state.shopdata.push(payload)
      }
    }
  },
  actions: {

  },
  getters: {

  },
  modules: {

  }
})

export default store
