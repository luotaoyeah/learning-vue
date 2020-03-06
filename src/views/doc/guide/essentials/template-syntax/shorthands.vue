<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          v-bind:xxx 可以简写为 :xxx
          v-on:yyyyy 可以简写为 @yyyyy
      ------------------------------------------------------------------------------------------------------->
      <Button v-bind:style="{ color: 'red' }" v-on:click="onClick">CLICK</Button>

      <Button :style="{ color: 'red', marginLeft: '12px' }" @click="onClick">CLICK</Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/template-syntax.html#shorthands

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {};
  },
  methods: {
    onClick() {
      alert('CLICK');
    },
  },
};
</script>
