<template>
  <fieldset>
    <comp-01
      v-for="item of items"
      :key="item.id"
      :color="color"
      :title="item.value"
      @change-color="onChangeColor"
    ></comp-01>
  </fieldset>

  <fieldset>
    <legend>EMITTING A VALUE WITH AN EVENT</legend>
    <comp-02 @event-01="onEvent01"></comp-02>
    <!------------------------------------------------------------------------------------------------------
        监听函数使用 inline function 时，如何获取多个参数？
    ------------------------------------------------------------------------------------------------------->
    <comp-02 @event-01="(x, y, z) => onEvent01(x, y, z)"></comp-02>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-basics.html#listening-to-child-components-events

import comp01 from './listening-to-child-components-events.01';
import comp02 from './listening-to-child-components-events.02';

export default {
  data() {
    return {
      items: [
        { id: 1, value: 'blue' },
        { id: 2, value: 'red' },
        { id: 3, value: 'green' },
      ],
      color: 'red',
    };
  },
  methods: {
    onChangeColor() {
      this.color = 'blue';
    },
    onEvent01(a, b, c) {
      console.assert(a === 1);
      console.assert(b === 2);
      console.assert(c === 3);
    },
  },
  components: {
    'comp-01': comp01,
    'comp-02': comp02,
  },
};
</script>
