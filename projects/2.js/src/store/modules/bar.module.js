import { Module } from 'vuex';

/** @type { Module<any,any> } */
const barModule = {
  /**
   *  设置 namespaced: true 之后, state / getters / mutations / actions 前面都会加上命名空间前缀.
   */
  namespaced: true,
  state() {
    return { x: 1 };
  },
  getters: {
    getX(state, getters, rootState, rootGetters) {
      return state.x;
    },
  },
  mutations: {
    setX(state, payload) {
      state.x += 1;
    },
  },
  actions: {
    setX(context, payload) {
      context.commit('setX');
    },
  },
};

export { barModule };
