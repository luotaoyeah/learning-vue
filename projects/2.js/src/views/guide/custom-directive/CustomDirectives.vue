<template>
  <fieldset>
    <legend></legend>

    <p v-directive01:foo.x.y="data01">sss</p>
  </fieldset>
</template>

<script>
export default {
  name: 'CustomDirectives',
  data() {
    return { data01: 1, timer: -1 };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.data01 = Date.now();
    }, 1000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
  directives: {
    directive01: {
      bind(el, binding, vnode) {
        console.assert(binding.name === 'directive01');
        console.assert(binding.value === 1);
        console.assert(binding.expression === 'data01');
        console.assert(binding.arg === 'foo');
        console.assert(binding.modifiers.x === true);
        console.assert(binding.modifiers.y === true);
      },
      update(el, binding, vnode) {
        console.log(binding.value);
      },
    },
  },
};
</script>

<style scoped></style>
