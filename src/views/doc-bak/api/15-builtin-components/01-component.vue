<template>
  <div>
    <ul>
      <li>用于动态渲染组件；</li>
      <li>
        通过 is 属性指定实际渲染的组件；
        <p>
          <ElButton @click="currentComponent = 'C01'">C01</ElButton>
          <ElButton @click="currentComponent = 'C02'">C02</ElButton>
        </p>
        <p><component :is="currentComponent" name="cat" /></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: "C02",
    };
  },
  components: {
    C01: {
      template: "<ElButton>{{name}}</ElButton>",
      props: {
        name: {
          type: String,
        },
      },
    },
    C02: {
      template: "<ElTag>{{name}}</ElTag>",
      props: {
        name: {
          type: String,
          default: "tom",
        },
      },
    },
  },
};
</script>
