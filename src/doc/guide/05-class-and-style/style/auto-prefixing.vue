<template>
  <div>
    <h1>4. Auto Prefixing</h1>
    <p>
      <small>
        <i>
          vue 会为使用 :style 绑定的需要前缀的 CSS 属性自动添加合适的前缀；
        </i>
      </small>
    </p>
    <p :style="styleObj01">:style="styleObj01"</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      styleObj01: {
        transform: "rotate(-2deg)"
      }
    };
  }
};
</script>
<style scoped></style>
