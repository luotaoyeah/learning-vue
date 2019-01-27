<template>
  <div>
    <ul>
      <li v-for="item of obj">{{ item }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
/*
 * v-for 现在支持 iterable 对象
 */

export default {
  data() {
    return {
      obj: {
        [Symbol.iterator]() {
          return {
            index: 0,
            next() {
              const value = ++this.index;
              const done = this.index > 3;
              return { done, value };
            }
          };
        }
      }
    };
  }
};
</script>
