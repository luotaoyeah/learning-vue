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

    <fieldset>
      <legend>Programmatic Event Listeners</legend>

      <p>通过 xxx.$on('event01', () => {}) 手动监听 xxx 的 event01 事件.</p>

      <p>
        <button @click="$emit('event-01')">$emit("event-01")</button>
      </p>
    </fieldset>

    <fieldset>
      <legend>Forcing an Update</legend>

      <p>调用 $forceUpdate() 强制渲染.</p>

      <p>
        {{ foo }}
        <button @click="$forceUpdate()">force update</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'HandlingEdgeCases',
  data() {
    return {
      timer: -1,
    };
  },
  created() {
    this.timer = setInterval(() => {
      // 在组件实例创建之后再添加的数据, 不是响应式的, 需要调用 $forceUpdate() 来触发渲染.
      this.fooModule = Date.now();
    }, 1000);
  },
  mounted() {
    console.log('this.$root.foo', this.$root.foo);

    this.$on('event-01', () => {
      console.log('listen event-01 by $on()');
    });
  },
  destroyed() {
    // 退订对 event-01 事件的监听
    this.$off('event-01');

    clearInterval(this.timer);
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
