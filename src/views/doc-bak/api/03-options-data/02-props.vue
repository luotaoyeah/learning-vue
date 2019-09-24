<template>
  <div>
    <ul>
      <li>
        类型：Array&lt;string&gt; | Object
        <ul>
          <li>如果为字符串数组， 每一个字符串表示一个 prop；</li>
          <li>
            如果为对象， 每一个属性表示一个 prop； 属性名表示 prop 的名称， 属性值为该 prop 的相关设置，
            包括类型，自定义验证，是否必传，默认值；
          </li>
        </ul>
      </li>
      <li>
        描述：声明需要从父组件传递数据的属性；
        <ul>
          <li>
            可以通过 vm.$props 访问属性对象；
            <p><ElButton @click="handleClick01">vm.$props</ElButton></p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "tom",
    },
  },
  data() {
    return {};
  },
  methods: {
    handleClick01() {
      const vm = this;
      vm.$alert(
        JSON.stringify(vm.$props, "vm.$props", {
          showClose: false,
        }),
      );
    },
  },
  components: {},
};
</script>
