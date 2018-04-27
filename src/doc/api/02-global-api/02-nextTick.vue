<template>
  <div>
    <ul>
      <li>
        描述：将代码延迟到下一个 DOM 更新周期执行；
        <p>
          <small>
            因为 vue 的异步更新策略，
            数据更改之后，
            并不会立刻执行 DOM 更新；
            如果某个逻辑依赖于某个数据对应的 DOM 更新，
            则需要在更改数据的代码行之后，
            立刻调用 Vue.nextTick() 方法，
            并将这个逻辑放到其回调函数中；
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
