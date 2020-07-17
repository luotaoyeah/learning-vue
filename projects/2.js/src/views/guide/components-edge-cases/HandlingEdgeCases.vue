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

    <fieldset>
      <legend>Dependency Injection</legend>

      <p>provide / inject 共同提供了 DI 的功能.</p>

      <comp-b></comp-b>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'HandlingEdgeCases',
  mounted() {
    console.log('this.$root.foo', this.$root.foo);
  },
  methods: {
    focusCompA() {
      this.$refs.compaRef.focus();
    },
  },
  provide() {
    return {
      p01: 1,
      p02: 2,
    };
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
    CompB: {
      template: `
        <p>CompB</p>
      `,
      data() {
        return {};
      },
      inject: {
        p01: 'p01',
        p02: { from: 'p02', default: 2 },
        p03: { default: 3 },
      },
      mounted() {
        console.log('this.p01', this.p01);
        console.log('this.p02', this.p02);
        console.log('this.p03', this.p03);
      },
    },
  },
};
</script>

<style scoped></style>
