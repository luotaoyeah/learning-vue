<template>
  <div>
    <ul>
      <li>
        类型：string
      </li>
      <li>
        描述：字符串模板；
        <ul>
          <li>
            模板会替换掉组件的挂载元素中的内容；
            <p>
              <span :id="id01">
                <span>mount element content</span>
              </span>
            </p>
          </li>
          <li>
            <!--TODO 待验证-->
            如果模板中声明了 slot，
            则组件的挂载元素中的内容，
            会被作为分发内容（？待验证）；
            <p>
              <span
                :id="id02"
              >
                <span>mount element content</span>
              </span>
            </p>
          </li>
          <li>
            如果属性值以 # 开头，
            表示元素选择器；
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

const id01 = Vue._.uniqueId("span");
const id02 = Vue._.uniqueId("span");

const C01 = Vue.extend({
  template: "<ElButton>C01</ElButton>"
});

const C02 = Vue.extend({
  template: "<ElButton>C02<br/><slot></slot></ElButton>"
});

export default {
  data() {
    return {
      id01,
      id02
    };
  },
  mounted() {
    const vm = this;

    new C01({
      el: `#${id01}`
    });

    const c02 = new C02();
    c02.$mount(`#${id02}`);
  },
  components: {}
};
</script>
<style scoped>
</style>
