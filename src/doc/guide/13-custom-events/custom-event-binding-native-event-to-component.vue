<template>
  <div>
    <h1>3. Binding Native Events to Components</h1>
    <small>
      <ul>
        <li>可以使用事件修饰符 .native 来监听组件根元素上的原生事件；</li>
      </ul>
    </small>
    <MyInput v-on:focus.native.once="handleFocus01"></MyInput>
    <small>
      <ul>
        <li>
          但是这样有一个风险： 如果监听的原生事件是针对某个特定的元素类型， 比如
          input， 当修改组件使得根元素不再是 input 时，
          原来的事件监听将不再生效， 不会触发， 也不会报错；
        </li>
        <li>
          为了解决这个问题， vue 提供了一个实例属性 $listeners， 它是一个对象，
          包含组件上所有的事件监听； 属性名是事件名， 属性值为事件回调函数；
        </li>
        <li>
          可以使用类似 v-bind="$attrs" 的形式使用 v-on="$listeners"，
          手动将事件监听绑定到指定的元素上；
        </li>
      </ul>
    </small>
    <MyInput02 v-model="message02" v-on:focus.once="handleFocus01"></MyInput02>
    <p><MyComponent130102 @click01="handleClick01"></MyComponent130102></p>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyInput", {
  template: "<input style='padding: 7px;border-radius: 3px;'/>"
});

Vue.component("MyInput02", {
  template: `
  <div>
    {{label}}
    <input
      style='padding: 7px;border-radius: 3px;'
      v-bind="$attrs"
      v-bind:value="value"
      v-on="listeners"
    />
  </div>
  `,
  props: ["label", "value"],
  inheritAttrs: false,
  computed: {
    listeners() {
      const vm = this;
      return Object.assign({}, vm.$listeners, {
        input(e) {
          vm.$emit("input", e.target.value);
        }
      });
    }
  },
  mounted() {
    console.log("this.$listeners", this.$listeners);
  }
});

Vue.component("MyComponent130101", {
  template: `
    <div>
      <el-button @click="$emit('click01','tom')">click me</el-button>
    </div>`
});

Vue.component("MyComponent130102", {
  template: `
    <div>
      <p>head.</p>
        <MyComponent130101 @click01="$listeners.click01"></MyComponent130101>
      <p>foot.</p>
    </div>`
});

export default {
  data() {
    return {
      message02: ""
    };
  },
  methods: {
    handleFocus01() {
      alert("focus");
    },
    handleClick01(name) {
      alert(`MyComponent130102.click01()，name = ${name}`);
    }
  }
};
</script>
