<template>
  <div>
    <ul>
      <li>数据更改之后， DOM 更新之前；</li>
      <li>
        此时， 数据已经更改， 但尚未重新渲染 DOM；
        <p>
          <ElInput v-model="name" style="width: 200px;" />
          <span :id="id01">{{ name }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

const id01 = Vue._.uniqueId("span_");

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
    console.log(`name: ${vm.name}, innerHTML: ${innerHTML}`);
  },
  components: {}
};
</script>
<style scoped></style>
