<template>
  <div>
    <section>
      <Button v-on:click="onClick">{{ message || 'EMPTY' }}</Button>
    </section>

    <hr />

    <section>
      <input v-model="message" :style="{ borderRadius: '2px' }" type="text" />
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/introduction.html#handling-user-input
//
// 1. v-on 用来绑定事件处理函数
// 2. v-model 用于表单元素的双向绑定
//

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      message: '12345',
    };
  },
  methods: {
    onClick() {
      this.message = this.message.split('').reverse().join('');
    },
  },
};
</script>
