<template>
  <div>
    <h1>4. .sync Modifier</h1>
    <small>
      <ul>
        <li>props 属性时单向绑定的，不能在子组件中直接修改 props 属性的值；</li>
        <li>
          vue 提供了一种特殊的事件， 用来通知父组件更新某个 props 属性的值， 即
          update:someProp 事件； 其中 someProp 是某个具体的 props 属性；
        </li>
        <li>
          这样，父组件通过监听子组件的这类事件，
          然后在事件回调中更新该属性的值， 保证了数据绑定的单向性；
        </li>
      </ul>
    </small>
    <MyComponent
      v-bind:date="date"
      v-on:update:date="date = $event"
    ></MyComponent>
    <small>
      <ul>
        <li>vue 提供了 .sync 事件修饰符， 用来简化这种操作；</li>
      </ul>
    </small>
    <MyComponent02 v-bind:date.sync="date02"></MyComponent02>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent", {
  template:
    "<button v-on:click='$emit(\"update:date\", new Date())'>date: {{date}}</button>",
  props: ["date"]
});

Vue.component("MyComponent02", {
  template:
    "<button v-on:click='$emit(\"update:date\", new Date())'>date: {{date}}</button>",
  props: ["date"]
});

export default {
  data() {
    return {
      date: new Date(),
      date02: new Date()
    };
  }
};
</script>
<style scoped></style>
