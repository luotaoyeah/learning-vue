<template>
  <div>
    <h2>v-model</h2>
    <ul>
      <li>
        因为 v-model 实际上是语法糖， 在渲染方法中，
        我们需要自己实现同样的效果；
        <p>
          <MyComponent210403
            :value="message"
            v-on:input="message = $event"
          ></MyComponent210403>
        </p>
        <p>{{ message }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("MyComponent210403", {
  render(h) {
    const vm = this;
    return h("input", {
      style: {
        padding: "7px",
        borderRadius: "3px"
      },
      domProps: {
        value: vm.value
      },
      on: {
        input(event) {
          vm.$emit("input", event.target.value);
        }
      }
    });
  },
  props: ["value"]
});
export default {
  data() {
    return { message: "hello" };
  },
  components: {}
};
</script>
<style scoped></style>
