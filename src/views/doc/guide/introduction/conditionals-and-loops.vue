<template>
  <div>
    <section>
      <Button type="primary" v-on:click="onClick">toggle</Button>
      <!------------------------------------------------------------------------------------------------------
          v-if 实现条件语句
      ------------------------------------------------------------------------------------------------------->
      <Button v-if="!hidden" :style="{ marginLeft: '12px' }">NOW YOU SEE ME</Button>
    </section>

    <hr />

    <section>
      <!------------------------------------------------------------------------------------------------------
          v-for 实现循环
      ------------------------------------------------------------------------------------------------------->
      <Button v-for="item in items" v-bind:key="item.text" :style="{ marginRight: '12px' }">
        {{ item.text }}
      </Button>

      <hr />

      <Button v-for="item of items" v-bind:key="item.text" :style="{ marginRight: '12px' }">
        {{ item.text }}
      </Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/introduction.html#conditionals-and-loops

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      hidden: false,
      items: [{ text: 'a' }, { text: 'b' }, { text: 'c' }],
    };
  },
  methods: {
    onClick() {
      this.hidden = !this.hidden;
    },
  },
};
</script>
