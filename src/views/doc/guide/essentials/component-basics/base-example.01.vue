<template>
  <button @click="n++">{{ n }}</button>
</template>

<script>
export default {
  data() {
    return { n: 1 };
  },
};
</script>
<style lang="less" scoped>
button {
  border-radius: 3px;
}
</style>
