<template>
  <div>
    <ul>
      <li>
        组件选项对象，只读；
      </li>
      <li>
        可以用来获取自定义的组件选项；
        <p>
          <C01/>
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
      template: "<ElButton @click='handleClick'>C01</ElButton>",
      age: "tom",
      methods: {
        handleClick() {
          console.log(this.$options.age);
        }
      }
    }
  }
};
</script>
<style scoped>
</style>
