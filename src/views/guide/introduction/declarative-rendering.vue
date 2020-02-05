<template>
  <div>
    <Button v-bind:title="this.counter.toString()">{{ counter }}</Button>
  </div>
</template>

<script lang="ts">
// https://v3.vuejs.org/guide/introduction.html#declarative-rendering

import { Button } from 'ant-design-vue';
import { Options, Vue } from 'vue-class-component';

@Options({
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
})
export default class DeclarativeRendering extends Vue {}
</script>
