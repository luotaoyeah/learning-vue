<template>
  <div>
    <ul>
      <li>
        描述：获取或者注册全局过滤器；
      </li>
      <li>
        参数：
        <ul>
          <li>{ string } id</li>
          <li>{ Function } [definition]</li>
        </ul>
      </li>
    </ul>
    <p>
      <ElButton>{{message | filter-upper | filter-join }}</ElButton>
    </p>
  </div>
</template>
<script>
import Vue from "vue";

/* 注册全局指令 */
Vue.filter("filter-upper", value => {
  return value.toUpperCase();
});

Vue.filter("filter-join", value => {
  return value.split("").join("，");
});

export default {
  data() {
    return {
      message: "click me"
    };
  },
  mounted() {
    /* 获取全局指令 */
    const filterUpper = Vue.filter("filter-upper");
    const filterJoin = Vue.filter("filter-join");
    if (filterUpper) {
      console.log(filterJoin(filterUpper(this.message)));
    }
  },
  components: {}
};
</script>
<style scoped>
</style>
