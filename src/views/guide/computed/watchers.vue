<template>
  <div>
    <section>
      <Button :style="{ marginRight: '12px', marginBottom: '12px' }" @click="increment">{{ counter }}</Button>

      <br />

      <p v-for="item of values" :key="item.currValue">
        <Button :style="{ marginRight: '12px' }">
          <span>
            prevValue：<span :style="{ color: 'red' }">{{ String(item.prevValue) }}</span>
          </span>
        </Button>

        <Button :style="{ marginRight: '12px' }">
          <span>
            currValue：<span :style="{ color: 'blue' }">{{ String(item.currValue) }}</span>
          </span>
        </Button>
      </p>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/computed.html#watchers

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  data() {
    return {
      counter: 1,
      values: [],
    };
  },
  /*----------------------------------------------------------------------------------------------------
   * 使用 watch 来监视某个 data property 的变更
   *----------------------------------------------------------------------------------------------------*/
  watch: {
    counter(currValue, prevValue) {
      this.values = [
        ...this.values,
        {
          prevValue,
          currValue,
        },
      ];
    },
  },
  methods: {
    increment() {
      this.counter += 1;
    },
  },
};
</script>
