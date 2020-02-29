import { h } from 'vue';

export default {
  props: ['items'],
  render() {
    /*----------------------------------------------------------------------------------------------------
     * if/else 替换 v-if/v-else，
     * map()   替换 v-for，
     *----------------------------------------------------------------------------------------------------*/
    if (this.items.length) {
      return h(
        'ul',
        {},
        this.items.map((i) => h('li', {}, [i])),
      );
    } else {
      return h('div', {}, ['EMPTY']);
    }
  },
};
