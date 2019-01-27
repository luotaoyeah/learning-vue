<template>
  <div>
    <ul>
      <li>类型：Array&lt;Object&gt;</li>
      <li>
        描述：定义组件的 mixin；
        <ul>
          <li>使用跟 Vue.extend() 一样的合并策略；</li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    console.log("created().00");
  },
  components: {},
  mixins: [
    {
      created() {
        console.log("created().01");
      }
    },
    {
      created() {
        console.log("created().02");
      }
    }
  ]
};
</script>
