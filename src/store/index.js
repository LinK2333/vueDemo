import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })

const state = {
  userInfo: ''
}
const getters = {}
const mutations = {
  ByUserInfo (state, payload) {
    state.userInfo = payload
  }
}
const actions = {
  LoginByUserInfo (state, v) {
    state.commit('ByUserInfo', v)
  }
}

export default store
