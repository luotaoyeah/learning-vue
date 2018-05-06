<template>
  <div>
    <ul>
      <li>
        对于同名的自定义选项，
        会使用默认的合并策略，
        也就是组件的选项会覆盖 mixin 的选项；
        <p>
          <C01></C01>
        </p>
      </li>
      <li>
        如果要自定义合并策略，
        需要在 Vue.config.optionMergeStrategies 对象上添加一个方法，
        方法名就是自定义选项的名称；
        <p>
          <C02></C02>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

Vue.config.optionMergeStrategies.myOption02 = (toVal, fromValue) => {
  if (!toVal) {
    return fromValue;
  }

  return () => {
    toVal();
    fromValue();
  };
};

export default {
  data() {
    return {};
  },
  components: {
    C01: {
      template: "<ElButton @click='$options.myOption01'>C01</ElButton>",
      myOption01() {
        console.log("C01.myOption01()");
      },
      mixins: [
        {
          myOption01() {
            console.log("MyMixin01.myOption01()");
          }
        }
      ]
    },
    C02: {
      template: "<ElButton @click='$options.myOption02'>C02</ElButton>",
      myOption02() {
        console.log("C02.myOption02()");
      },
      mixins: [
        {
          myOption02() {
            console.log("MyMixin02.myOption02()");
          }
        }
      ]
    }
  }
};
</script>
<style scoped>
</style>
