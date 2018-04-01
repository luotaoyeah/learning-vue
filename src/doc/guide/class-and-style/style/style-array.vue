<template>
  <div>
    <h1>3. Array Syntax</h1>
    <p>
      <small>
        <i>
          :style 绑定数组的时候，数组中每一个元素都是一个'样式对象'；
        </i>
      </small>
    </p>
    <p :style="[styleObj01, styleObj02]">:style="[styleObj01, styleObj02]"</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      styleObj01: {
        color: "red"
      },
      styleObj02: {
        fontSize: "18px"
      }
    };
  }
};
</script>
<style scoped>
</style>
