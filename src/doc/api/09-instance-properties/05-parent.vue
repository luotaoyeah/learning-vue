<template>
  <div>
    <ul>
      <li>
        父组件实例；
        <C01 />
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
        <p style='padding: 10px;border-radius: 3px;border: 1px solid green;'>
          <C02/>
        </p>
      `,
      components: {
        C02: {
          template:
            "<ElButton @click='handleClick'>切换父组件边框样式</ElButton>",
          methods: {
            handleClick() {
              const borderColor = this.$parent.$el.style.borderColor;
              if (borderColor == "green") {
                this.$parent.$el.style.border = "1px dashed red";
              } else {
                this.$parent.$el.style.border = "1px solid green";
              }
            }
          }
        }
      }
    }
  }
};
</script>
