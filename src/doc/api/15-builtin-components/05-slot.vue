<template>
  <div>
    <ul>
      <li>
        用在组件模板中，声明一个内容分发的出口，slot 元素会被分发的内容所替换；
        <C01> hello </C01>
      </li>
      <li>
        可以指定 name 属性，声明一个 named slot；
        <C01>
          hello
          <ElTag slot="footer">footer</ElTag>
          tom
        </C01>
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
      template: `
        <p>
          a
          <slot></slot>
          b
          <slot name="footer"></slot>
          c
        </p>`
    }
  }
};
</script>
<style scoped></style>
