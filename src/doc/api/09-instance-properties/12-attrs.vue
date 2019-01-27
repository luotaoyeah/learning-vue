<template>
  <div>
    <ul>
      <li>
        组件元素上没有被识别为 props， 且不是 class 或 style 的属性；
        <p>
          <C01 class="c01" style="color: red;" x="foo" :id="id01" y="bar" />
        </p>
      </li>
      <li>只读；</li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

const id01 = Vue._.uniqueId("id_");

export default {
  data() {
    return { id01 };
  },
  components: {
    C01: {
      template: '<ElButton @click="handleClick">vm.$attrs</ElButton>',
      props: {
        x: {
          type: String
        }
      },
      methods: {
        handleClick() {
          /* {id: "id_1", y: "bar"} */
          console.log(this.$attrs);
        }
      }
    }
  }
};
</script>
