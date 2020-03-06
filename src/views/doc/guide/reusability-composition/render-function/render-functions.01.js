import { h } from 'vue';

export default {
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  render() {
    return h(`h${this.level}`, {}, [this.$slots.default()]);
  },
};
