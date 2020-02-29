import { h, resolveComponent } from 'vue';
import comp01 from './slots.01.01';

// https://v3.vuejs.org/guide/render-function.html#slots
export default {
  data() {
    return {
      items: ['a', 'b', 'c'],
    };
  },
  render() {
    return h(
      resolveComponent('my-ul'),
      {
        items: this.items,
      },
      {
        /*----------------------------------------------------------------------------------------------------
         * <template v-slot:item="props"></template>
         *----------------------------------------------------------------------------------------------------*/
        item: (props) => [
          h('span', { style: { color: 'red' } }, [props.index]),
          '.',
          h('span', { style: { color: 'blue' } }, [props.item]),
        ],
      },
    );
  },
  components: {
    'my-ul': comp01,
  },
};
