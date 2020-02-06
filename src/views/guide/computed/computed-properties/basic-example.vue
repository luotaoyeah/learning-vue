<template>
  <div>
    <section>
      <Button :style="{ marginRight: '12px' }">{{ firstName }}</Button>
      <Button :style="{ marginRight: '12px' }">{{ lastName }}</Button>
      <Button :style="{ marginRight: '12px' }" @click="changeFullName">{{ fullName }}</Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/computed.html#basic-example

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      firstName: 'luo',
      lastName: 'tao',
    };
  },
  computed: {
    /*----------------------------------------------------------------------------------------------------
     * computed property 依赖于其他的 data property，
     * 当它依赖的 data property 发生变更时，vue 会自动更新该 computed property
     * ---------------------------------------------------------------------------------------------------*/
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  methods: {
    /*----------------------------------------------------------------------------------------------------
     * computed property 默认是 readonly，对它赋值会有警告
     * ---------------------------------------------------------------------------------------------------*/
    changeFullName() {
      this.fullName = 'tom cat';
    },
  },
};
</script>
