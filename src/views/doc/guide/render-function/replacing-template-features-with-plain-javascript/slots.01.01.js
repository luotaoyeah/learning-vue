import { h } from 'vue';

export default {
  props: ['items'],
  render() {
    return h(
      'ul',
      {},
      this.items.map((i, index) =>
        h('li', {}, [
          /*----------------------------------------------------------------------------------------------------
           * <slot name="item" :item="i" :index="index"></slot>
           *----------------------------------------------------------------------------------------------------*/
          this.$slots.item({
            item: i,
            index,
          }),
        ]),
      ),
    );
  },
};
