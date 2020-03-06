<template>
  <div>
    <ul>
      <li>
        将回调延迟到下一个 DOM 更新周期执行；
        <p>
          <small>
            因为 vue 的异步更新机制，数据更改之后，并不会立即更新
            DOM，如果代码依赖于 DOM 的更新，可以在数据更改之后立即执行
            vm.$nextTick()，并将代码放到其回调函数中执行，这样可以保证在代码执行时，已经完成了
            DOM 的更新；
          </small>
        </p>
        <p>
          <span :id="id01">{{ name }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { uniqueId } from "lodash-es";

const id01 = uniqueId("span_");

export default {
  data() {
    return {
      id01,
      name: "foo"
    };
  },
  async mounted() {
    const vm = this;
    const span = document.getElementById(id01);

    vm.name = "bar";
    console.log("before vm.$nextTick():", span.innerText);
    await vm.$nextTick();
    console.log("after vm.$nextTick():", span.innerText);
  },
  components: {}
};
</script>
