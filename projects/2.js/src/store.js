import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
    foo: 1,
    bar: 1,
    baz: 1,
  },
  mutations: {
    INCREMENT(state) {
      state.count += 1;
    },
  },
  actions: {},
});
