<template>
  <div>
    <!------------------------------------------------------------------------------------------------------
        {{}} 用于 text interpolation，
        v-bind 是一个指令（directive），用来绑定 element attribute
    ------------------------------------------------------------------------------------------------------->
    <Button v-bind:title="counter.toString()">{{ counter }}</Button>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/introduction.html#declarative-rendering

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      counter: 1,
    };
  },
  mounted() {
    const timer = setInterval(() => {
      this.counter += 1;
      if (this.counter === 9) {
        clearInterval(timer);
      }
    }, 1000);
  },
};
</script>
