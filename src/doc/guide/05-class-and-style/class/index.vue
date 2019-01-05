<template>
  <div>
    <p>
      <small>
        <i>
          class 和 style 都是普通的 HTML 属性，可以使用 v-bind 来绑定；vue
          对它们提供了增强，可以绑定对象和数组；
        </i>
      </small>
    </p>
    <p>
      <small> <i> :class 可以绑定一个 data 属性，属性值就是类名； </i> </small>
    </p>
    <p :class="class00">:class="class00"</p>
    <ClassObject></ClassObject>
    <ClassArray></ClassArray>
    <ClassWithComponent></ClassWithComponent>
  </div>
</template>
<script>
import ClassObject from "./class-object";
import ClassArray from "./class-array";
import ClassWithComponent from "./class-with-component";

export default {
  data() {
    return {
      class00: "class00"
    };
  },
  components: {
    ClassObject,
    ClassArray,
    ClassWithComponent
  }
};
</script>
<style scoped></style>
