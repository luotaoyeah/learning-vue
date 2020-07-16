<template>
  <div>
    <fieldset>
      <legend>Accessing the Root Instance</legend>

      <p>通过 vm.$root 访问在 main.js 中通过 new Vue() 创建的实例.</p>
    </fieldset>

    <fieldset>
      <legend>Accessing Child Component Instances & Child Elements</legend>

      <p>
        <comp-a ref="compaRef"></comp-a>
        <button @click="focusCompA">focus comp-a</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'HandlingEdgeCases',
  mounted() {
    console.log(this.$root.foo);
  },
  methods: {
    focusCompA() {
      this.$refs.compaRef.focus();
    },
  },
  components: {
    CompA: {
      template: `
        <input type='text' ref='inputRef'>
      `,
      data() {
        return {};
      },
      methods: {
        focus() {
          this.$refs.inputRef.focus();
        },
      },
    },
  },
};
</script>

<style scoped></style>
