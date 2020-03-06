<template>
  <div></div>
</template>

<script>
export default {
  props: ['prop01'],
  emits: ['event01'],
  created() {
    console.assert(this.$attrs.prop01 === undefined);
    console.assert(this.$attrs.onEvent01 === undefined);

    console.assert(this.$attrs.prop02 === 'bar');
    console.assert(this.$attrs.onEvent02() === 'bar');
  },
};
</script>
