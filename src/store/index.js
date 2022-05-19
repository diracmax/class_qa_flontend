import { createStore } from 'vuex'

export default createStore({
  state: {
    token: ''
  },
  mutations: {
    add_token(state, token){
      state.token = token
    }
  },
  actions: {
  },
  modules: {
  }
})