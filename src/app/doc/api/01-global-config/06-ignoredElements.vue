<template>
  <div>
    <my-ignored-element></my-ignored-element>
    <ul>
      <li>类型：Array&lt;string | RegExp&gt;</li>
      <li>默认：[]</li>
      <li>
        描述：定义需要被 vue 忽略的自定义元素；
        <ul>
          <li>
            默认情况下， 如果一个自定义元素未在 vue 中定义， vue 会报错；
            <img :src="Picture01" />
          </li>
          <li>通过该配置声明后， vue 会忽略该自定义元素；</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { Vue } from "vue-property-decorator";
import Picture01 from "./06-ignoredElements.png";

export default Vue.extend({
  data() {
    return { Picture01 };
  },
  components: {}
});
</script>
