<template>
  <input :style="{ borderRadius: '3px' }" :value="value" />
</template>

<script>
export default {
  props: {
    value: String,
  },
  watch: {
    value(curr, prev) {
      console.log(`%c${prev} %c-> %c${curr}`, 'color:red;', 'color:black;', 'color:green;');
    },
  },
};
</script>
