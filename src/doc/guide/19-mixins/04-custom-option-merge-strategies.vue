<template>
  <div>
    <ul>
      <li>
        对于同名的自定义选项，
        会使用默认的合并策略，
        也就是组件的选项会覆盖 mixin 的选项；
        <p>
          <MyComponent190401></MyComponent190401>
        </p>
      </li>
      <li>
        如果要自定义合并策略，
        需要在 Vue.config.optionMergeStrategies 对象上添加一个方法，
        方法名就是自定义选项的名称；
        <p>
          <MyComponent190402></MyComponent190402>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

const MyMixin01 = {
  myOption01() {
    console.log("MyMixin01.myOption01()");
  }
};

Vue.component("MyComponent190401", {
  template:
    "<el-button @click='$options.myOption01'>MyComponent190401</el-button>",
  myOption01() {
    console.log("MyComponent190401.myOption01()");
  },
  mixins: [MyMixin01]
});

Vue.config.optionMergeStrategies.myOption02 = (toVal, fromValue) => {
  console.log("optionMergeStrategies.myOption02:", toVal, fromValue);
  if (!toVal) {
    return fromValue;
  }

  return () => {
    toVal();
    fromValue();
  };
};

const MyMixin02 = {
  myOption02() {
    console.log("MyMixin02.myOption02()");
  }
};

Vue.component("MyComponent190402", {
  template:
    "<el-button @click='$options.myOption02'>MyComponent190402</el-button>",
  myOption02() {
    console.log("MyComponent190402.myOption02()");
  },
  mixins: [MyMixin02]
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
</style>
