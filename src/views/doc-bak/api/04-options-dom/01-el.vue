<template>
  <div>
    <ul>
      <li>类型：string | HTMLElement</li>
      <li>
        描述：指定组件要被挂载到哪个 DOM 元素；
        <ul>
          <li>
            只在使用 new 实例化组件的时候有效；
            <p><span :id="id01"></span></p>
          </li>
          <li>
            属性值可以是字符串， 表示 CSS 选择器； 也可以是 HTMLElement 对象；
            <p><span :id="id02"></span></p>
          </li>
          <li>
            可以通过组件实例对象的 $el 属性， 访问该组件的挂载元素；
            <p><ElButton @click="handleClick01">vm.$el</ElButton></p>
          </li>
          <li>
            如果在 new 一个组件的时候， 指定了 el 组件选项， 则组件会立即进行编译； 否则需要手动调用组件的 vm.$mount()
            方法进行编译；
            <p><span :id="id03"></span></p>
          </li>
          <li>
            如果组件选项既没有指定 render， 也没有指定 template， 则 el 对应的 DOM 元素会被当做组件模板；
            <p>
              <span :id="id04"> <ElButton>C02</ElButton> </span>
            </p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { uniqueId } from "lodash-es";
import Vue from "vue";

const id01 = uniqueId("span_");
const id02 = uniqueId("span_");
const id03 = uniqueId("span_");
const id04 = uniqueId("span_");

const C01 = Vue.extend({
  template: "<ElButton>C01</ElButton>",
});

const C02 = Vue.extend({});

export default {
  data() {
    return {
      id01,
      id02,
      id03,
      id04,
    };
  },
  mounted() {
    const vm = this;

    const c01 = new C01({
      el: `#${id01}`,
    });

    /* 指定了 el 选项，自动进行挂载 */
    const c02 = new C01({
      el: document.querySelector(`#${id02}`),
    });

    /* 未指定 el 选项，手动调用 $mount()  方法进行挂载 */
    const c03 = new C01();
    c03.$mount(`#${id03}`);

    const c04 = new C02({
      el: `#${id04}`,
    });
  },
  methods: {
    handleClick01() {
      const vm = this;
      vm.$alert(vm.$el.tagName, "vm.$el.tagName", {
        showClose: false,
      });
    },
  },
  components: {},
};
</script>
