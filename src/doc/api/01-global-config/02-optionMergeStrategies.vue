<template>
  <div>
    <ul>
      <li>类型：{ [ key: string ]: Function }</li>
      <li>
        默认：{}
        <img
          :src="Picture01"
        >
      </li>
      <li>描述：定义'自定义组件选项'的合并策略；</li>
    </ul>
  </div>
</template>
<script>
import Picture01 from "./02-optionMergeStrategies.png";

export default {
  data() {
    return { Picture01 };
  },
  components: {},
  "my-option-01": "a",
  mixins: [{ "my-option-01": "b" }]
};
</script>
<style scoped>
</style>
