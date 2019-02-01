<template>
  <div>
    <ul>
      <li>
        监听组件触发的事件一次， 监听函数触发一次之后会被移除；
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
      template: "<ElButton @click='handleClick'>vm.$once</ElButton>",
      created() {
        this.$on("foo-click", () => {
          console.log("foo-click");
        });
        this.$once("bar-click", () => {
          console.log("bar-click");
        });
      },
      methods: {
        handleClick() {
          this.$emit("foo-click");
          this.$emit("bar-click");
        }
      }
    }
  }
};
</script>
