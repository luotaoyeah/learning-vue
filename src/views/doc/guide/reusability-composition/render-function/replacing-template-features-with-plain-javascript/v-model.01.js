import { h } from 'vue';

// https://v3.vuejs.org/guide/render-function.html#v-model
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  render() {
    return h(
      'input',
      {
        style: {
          borderRadius: '3px',
          marginRight: '12px',
        },
        value: this.modelValue,
        /*----------------------------------------------------------------------------------------------------
         * 用 onxxx 属性替换 @xxx 事件，
         * 通常会将事件名的首字母大写，如将 @input 事件替换为 onInput 属性，
         *----------------------------------------------------------------------------------------------------*/
        onInput: (event) => {
          this.$emit('update:modelValue', event.target.value);
        },
      },
      [],
    );
  },
};
