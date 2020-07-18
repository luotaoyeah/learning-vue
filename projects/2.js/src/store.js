import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    foo: 1,
    bar: 1,
    baz: 1,
    /** @type { Array<Number> } */
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  getters: {
    items01(state, getters, rootState, rootGetters) {
      return state.items.filter((i) => i > 5);
    },
    /**
     * getter 可以定义成一个 factory function, 从而可以接收额外的参数.
     *
     * @param state
     * @param getters
     * @param rootState
     * @param rootGetters
     * @return {function(*=): Number[]}
     */
    items02:
      (state, getters, rootState, rootGetters) =>
      (payload = 5) => {
        return state.items.filter((i) => i > payload);
      },
  },
  mutations: {
    INCREMENT(state) {
      state.count += 1;
    },
  },
  actions: {},
});
