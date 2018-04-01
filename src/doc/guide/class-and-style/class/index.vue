<template>
  <div
    style="padding: 10px;"
  >
    <p>
      <small>
        <i>
          class 和 style 都是普通的 HTML 属性，可以使用 v-bind 来绑定；vue 对它们提供了增强，可以绑定对象和数组；
        </i>
      </small>
    </p>
    <ClassObject></ClassObject>
  </div>
</template>
<script>
import ClassObject from "./class-object";

export default {
  components: {
    ClassObject
  }
};
</script>
<style scoped>
</style>
