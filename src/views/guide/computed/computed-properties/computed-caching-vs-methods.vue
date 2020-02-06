<template>
  <div>
    <section>
      <Button :style="{ marginRight: '12px', marginBottom: '12px' }" @click="push">PUSH</Button>

      <br />

      <Button v-for="item of list" :key="item" :style="{ marginRight: '12px' }">
        <span>{{ sum01 }}</span>
        <span>{{ sum02() }}</span>
        <span>{{ time }}</span>
      </Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/computed.html#computed-caching-vs-methods

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      x: 1,
      y: 2,
      list: [1],
    };
  },
  computed: {
    /*----------------------------------------------------------------------------------------------------
     * computed property 会被缓存，只要它所依赖的 property 没变，每次访问都会返回缓存的值，不会重新计算
     * ---------------------------------------------------------------------------------------------------*/
    sum01() {
      console.log('%c computed property', 'color:green');
      return this.x + this.y;
    },
    /*----------------------------------------------------------------------------------------------------
     * 下面的 computed property 会被永久缓存，因为它没依赖任何的 data property，永远不会被重新计算
     * ---------------------------------------------------------------------------------------------------*/
    time() {
      console.log('%c never re-evaluate', 'color:blue');
      return String(Date.now());
    },
  },
  methods: {
    /*----------------------------------------------------------------------------------------------------
     * method 的执行结果不会缓存，每次都会重新执行
     * ---------------------------------------------------------------------------------------------------*/
    sum02() {
      console.log('%c method', 'color:red');
      return this.x + this.y;
    },
    push() {
      this.list = [...this.list, this.list.length + 1];
    },
  },
};
</script>
