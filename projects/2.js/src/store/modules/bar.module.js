import { Module } from 'vuex';

/** @type { Module<any,any> } */
const barModule = {
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
