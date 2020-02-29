import { h } from 'vue';

// https://v3.vuejs.org/guide/render-function.html#v-on
export default {
  render() {
    return h(
      'button',
      {
        style: {
          borderRadius: '3px',
          marginRight: '12px',
        },
        /*----------------------------------------------------------------------------------------------------
         * 用 onxxx 属性替换 @xxx 事件，
         * 通常会将事件名的首字母大写，如将 @click 事件替换为 onClick 属性，
         *----------------------------------------------------------------------------------------------------*/
        onClick: (event) => {
          console.assert(event instanceof MouseEvent);
          console.log(666);
        },
      },
      [this.$slots.default()],
    );
  },
};
