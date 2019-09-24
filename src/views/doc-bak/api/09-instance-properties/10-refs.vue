<template>
  <div>
    <ul>
      <li>
        vm.$refs 对象，包含当前组件中使用 ref 属性注册过的组件和 DOM 元素；
      </li>
      <li>
        属性名为 ref 属性值， 属性值为对应的组件实例或者 DOM 对象；
        <p><C01 /></p>
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
          <ElButton ref='ref01' @click='handleClick'>C01</ElButton>
          <span ref='ref02' class='foo'>foo</span>
        </p>`,
      methods: {
        handleClick() {
          console.log(this.$refs);
        },
      },
    },
  },
};
</script>
