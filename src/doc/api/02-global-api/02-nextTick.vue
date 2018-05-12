<template>
  <div>
    <ul>
      <li>
        描述：将代码延迟到下一个 DOM 更新周期执行；
        <p>
          <small>
            因为 vue 的异步更新机制，数据更改之后，并不会立即更新 DOM，如果代码依赖于 DOM 的更新，可以在数据更改之后立即执行
            Vue.nextTick()，并将代码放到其回调函数中执行，这样可以保证在代码执行时，已经完成了 DOM 的更新；
          </small>
        </p>
      </li>
    </ul>
    <p id="p_01">{{message}}</p>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      message: "tom"
    };
  },
  async mounted() {
    const vm = this;
    const p = vm.$el.querySelector("#p_01");

    vm.message = "cat";
    console.log("before Vue.nextTick():", p.innerHTML);
    await Vue.nextTick();
    console.log("after Vue.nextTick():", p.innerHTML);
  },
  components: {}
};
</script>
<style scoped>
</style>
