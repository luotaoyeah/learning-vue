<template>
  <div>
    <h1>2. Customizing Component v-model</h1>
    <small>
      <ul>
        <li>
          默认情况下，v-model 使用的 props 属性是 value，
          使用的事件是 input；
        </li>
        <li>可以使用组件配置项 model 来自定义这两个配置；</li>
      </ul>
    </small>
    <MyCheckbox v-model="checked"></MyCheckbox>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyCheckbox", {
  template: `
<label for="my-checkbox">
  MyCheckbox:
  <input id="my-checkbox" type="checkbox" v-bind:checked="checked02" v-on:change="$emit('change02', $event.target.checked)">
</label>
  `,
  props: {
    checked02: {
      type: Boolean,
      required: true
    }
  },
  model: {
    prop: "checked02",
    event: "change02"
  }
});

export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>
<style scoped>
</style>
