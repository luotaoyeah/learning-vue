<template>
  <div>
    <ul>
      <li>
        指定了 name 选项， 组件才可以嵌套自己；
        <component :is="id01" :recursive="true" />
        <component :is="id02" :recursive="true" />
      </li>
      <li>
        使用 Vue.component() 注册全局组件时， 会自动设置 name 选项为组件ID；
      </li>
      <li>name 选项不能通过 vm.name 来访问；</li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { uniqueId } from "lodash-es";

const id01 = uniqueId("C_");
const id02 = uniqueId("C_");

Vue.component(id01, {
  template: `<p><ElTag>${id01}</ElTag><component is="${id01}" v-if="recursive"/></p>`,
  props: {
    recursive: {
      type: Boolean,
      default: false
    }
  },
  created() {
    console.log(this.name);
  }
});

export default {
  data() {
    return {
      id01,
      id02
    };
  },
  components: {
    /*
     * 本地注册的组件，默认没有 name 选项，不能嵌套自己；
     */
    [id02]: {
      template: `<p><ElTag>${id02}</ElTag><component is="${id02}" v-if="recursive"/></p>`,
      props: {
        recursive: {
          type: Boolean,
          default: false
        }
      }
    }
  }
};
</script>
