import { createStore } from 'vuex'

const moduleA = {
  state: () => {
    return {
      username: '模块A'
    }
  },
  getters: {
    newName (state) {
      return state.username + '!!!'
    }
  }

}

const moduleB = {
  // 带命名空间的
  namespaced: true,
  state: {
    username: 'moduleB'
  },
  // getters: {
  //   newName (state) {
  //     return state.username + '!!!'
  //   }
  // },
  // mutations: {
  //   updateName (state) {
  //     state.username = 'ls'
  //   }
  // },
}

export default createStore({
  modules: {moduleA, moduleB}
  // state: {
  //   username: 'zs'
  // },
  // getters: {
  //   newName (state) {
  //     return state.username + '!!!'
  //   }
  // },
  // mutations: {
  //   updateName (state) {
  //     state.username = 'ls'
  //   }
  // },
  // actions: {
  //   updateName (ctx) {
  //     setTimeout(() => {
  //       ctx.commit('updateName')
  //     }, 1000)
  //   }
  // },
  // modules: {}
})
