<template>
  <div>
    <ul>
      <li>数据更改之后， DOM 渲染完成；</li>
      <li>
        此时， 不能保证所有的子组件都重新渲染完成， 可以在 updated 中 使用
        vm.$nextTick() 来保证；
        <p>
          <ElInput v-model="name" style="width: 200px;" />
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
      name: "tom"
    };
  },
  beforeUpdate() {
    const vm = this;
    const innerHTML = document.querySelector(`#${id01}`).innerHTML;
    console.log(`beforeUpdate(): name: ${vm.name}, innerHTML: ${innerHTML}`);
  },
  async updated() {
    const vm = this;
    const innerHTML = document.querySelector(`#${id01}`).innerHTML;
    console.log(`updated(): name: ${vm.name}, innerHTML: ${innerHTML}`);
  },
  components: {}
};
</script>
