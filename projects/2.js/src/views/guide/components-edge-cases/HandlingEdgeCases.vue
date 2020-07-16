<template>
  <div>
    <fieldset>
      <legend>Accessing the Root Instance</legend>

      <p>通过 vm.$root 访问在 main.js 中通过 new Vue() 创建的实例.</p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'HandlingEdgeCases',
  mounted() {
    console.log(this.$root.foo);
  },
};
</script>

<style scoped></style>
