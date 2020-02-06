<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          直接赋值方法对象，则会自动传入事件对象
      ------------------------------------------------------------------------------------------------------->
      <Button :style="{ marginRight: '12px' }" @click="onClick01">
        <!------------------------------------------------------------------------------------------------------
            直接在 template 中调用方法，将它当成一个 expression 使用
        ------------------------------------------------------------------------------------------------------->
        {{ getFoo() }}
      </Button>

      <!------------------------------------------------------------------------------------------------------
          调用方法，并传入任意的参数
      ------------------------------------------------------------------------------------------------------->
      <Button :style="{ marginRight: '12px' }" @click="onClick02('bar')">bar</Button>

      <!------------------------------------------------------------------------------------------------------
          调用方法，并手动传入事件对象 $event
      ------------------------------------------------------------------------------------------------------->
      <Button :style="{ marginRight: '12px' }" @click="onClick03($event, 'baz')">baz</Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/data-methods.html#methods

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  methods: {
    onClick01(event) {
      console.assert(event instanceof MouseEvent);

      /*----------------------------------------------------------------------------------------------------
       * 在方法中， this 指向 component instance，
       * vue 会帮我们自动绑定
       * ---------------------------------------------------------------------------------------------------*/
      console.assert(this.onClick03 instanceof Function);
    },
    onClick02(value) {
      console.assert(value === 'bar');
    },
    onClick03(event, value) {
      console.assert(event instanceof MouseEvent);
      console.assert(value === 'baz');
    },
    getFoo() {
      return 'foo';
    },
  },
};
</script>
