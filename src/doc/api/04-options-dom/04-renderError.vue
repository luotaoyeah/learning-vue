<template>
  <div>
    <ul>
      <li>类型：(h: () => VNode, error: Error) => VNode</li>
      <li>
        描述：如果渲染函数报错， 则该函数会被作为替代的渲染函数，
        同时将渲染函数报的错作为第二个参数传入；
        <ul>
          <li>只在开发环境有效；</li>
          <li>
            <p><span :id="id01"></span></p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

const id01 = Vue._.uniqueId("span");

const C01 = Vue.extend({
  render(h) {
    if (Vue._.random() > 0.5) {
      throw new Error("error within render()");
    }

    return h();
  },
  renderError(h, error) {
    return h(
      "ElAlert",
      {
        props: {
          title: "",
          closable: false
        }
      },
      [
        h(
          "pre",
          {
            style: {
              color: "red"
            }
          },
          [error.stack]
        )
      ]
    );
  }
});

export default {
  data() {
    return {
      id01
    };
  },
  mounted() {
    const vm = this;

    new C01({
      el: `#${id01}`
    });
  },
  components: {}
};
</script>
