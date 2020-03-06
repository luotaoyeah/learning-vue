import { toRef, toRefs, watch } from 'vue';

export default {
  props: ['prop01', 'prop02', 'prop03'],
  /*----------------------------------------------------------------------------------------------------
   * 第一个参数 props 是 reactive 对象，
   *----------------------------------------------------------------------------------------------------*/
  setup(props, context) {
    watch(
      () => props.prop01,
      (value, preValue) => {
        console.log(`%cprop01：[${preValue}, ${value}]`, 'color:blue;');
      },
    );

    const { prop02 } = toRefs(props);
    watch(prop02, (value, preValue) => {
      console.log(`%cprop02：[${preValue}, ${value}]`, 'color:green;');
    });

    const prop03 = toRef(props, 'prop03');
    watch(prop03, (value, preValue) => {
      console.log(`%cprop03：[${preValue}, ${value}]`, 'color:red;');
    });
  },
  render() {
    return <p>{this.prop01}</p>;
  },
};
