<template>
  <div>
    <p>
      组件的 data 选项应该定义为一个返回对象的函数，
      而不应该直接定义为一个对象； 否则所有的组件实例都会共享这一个对象；
    </p>
    <p><C01></C01></p>
    <p><C01></C01></p>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {};
  },
  components: {
    C01: {
      template: "<el-button @click='count++'>count: {{count}}</el-button>",
      data() {
        return {
          count: 0
        };
      }
    }
  }
};
</script>
