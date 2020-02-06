<template>
  <div>
    <section>
      <Button :style="{ marginRight: '12px' }">
        value：
        <span :style="{ color: 'red' }">{{ value }}</span>
      </Button>

      <Button :style="{ marginRight: '12px', marginBottom: '12px' }">
        double：
        <span :style="{ color: 'red' }">{{ double }}</span>
      </Button>
      <br />

      <Button :style="{ marginRight: '12px' }" @click="double = 4">set double to 4</Button>
      <Button :style="{ marginRight: '12px' }" @click="double = 8">set double to 8</Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/computed.html#computed-setter

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      value: 1,
    };
  },
  computed: {
    /*----------------------------------------------------------------------------------------------------
     * 可以使用 get/set 的形式来定义一个 computed property
     * ---------------------------------------------------------------------------------------------------*/
    double: {
      get() {
        return this.value * 2;
      },
      set(value) {
        this.value = value / 2;
      },
    },
  },
};
</script>
