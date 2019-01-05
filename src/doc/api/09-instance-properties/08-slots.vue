<template>
  <div>
    <ul>
      <li>
        组件的内容分发对象（非 scoped）；
        <ul>
          <li>
            每一个命名 slot 对应一个属性， 属性名为 slot 名称， 属性值为对应的
            VNode 数组；
          </li>
          <li>
            所有不属于命名 slot 的内容都对应 default 属性， 属性名为 default，
            属性值为 VNode 数组；
          </li>
        </ul>
        <p>
          <C01>
            <span>foo</span> <span slot="header">header</span>
            <span>body</span> <span slot="footer">footer</span> <span>bar</span>
          </C01>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
    C01: {
      render(h) {
        const vm = this;
        return h("p", [
          h(
            "ElButton",
            {
              on: {
                click() {
                  console.log(vm.$slots);
                }
              }
            },
            ["vm.$slots"]
          )
        ]);
      }
    }
  }
};
</script>
<style scoped></style>
