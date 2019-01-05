<template>
  <div>
    <h1>2. Basic Example</h1>
    <p>Message: {{ message }}</p>
    <p>Reversed message using computed properties: {{ reversedMessage }}</p>
    <p>
      <small>
        <i>
          计算属性类似 data 对象上定义的属性，同时提供了一个取值函数（getter
          function）；
          在取值函数中，可以依赖其他属性的值；当依赖的属性值改变时，计算属性的值也会跟着改变；
        </i>
      </small>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "hello world"
    };
  },
  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
<style scoped></style>
