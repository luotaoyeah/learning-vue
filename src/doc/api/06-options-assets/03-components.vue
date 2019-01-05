<template>
  <div>
    <ul>
      <li>
        定义本地组件， 定义当前组件实例可以使用的组件；
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
      render(h) {
        return h(
          "ElTag",
          {
            props: {
              type: "success"
            }
          },
          "C01"
        );
      }
    }
  }
};
</script>
<style scoped></style>
