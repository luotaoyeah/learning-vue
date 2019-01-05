<template>
  <div>
    <h1>1. Object Syntax</h1>
    <h2>1.1.</h2>
    <p>
      <small>
        <i>
          class
          绑定一个对象的时候，对象的属性名表示类名，属性值是一个布尔表达式，表示是否启用该类；
        </i>
      </small>
    </p>
    <p :class="{ active: isActive, disabled: disabled }">
      :class="{active: isActive, disabled: disabled}"
    </p>
    <h2>1.2.</h2>
    <p>
      <small> <i> :class 绑定可以和普通的 class 共存； </i> </small>
    </p>
    <p class="class01" :class="{ class02: true }">
      class="class01" :class="{class02: true}"
    </p>
    <h2>1.3.</h2>
    <p>
      <small>
        <i> :class 绑定的对象不一定是常量对象，可以是对象类型的 data 属性； </i>
      </small>
    </p>
    <p :class="classObj">:class="classObj"</p>
    <h2>1.4.</h2>
    <p>
      <small>
        <i> :class 绑定的对象可以是返回对象的 computed property； </i>
      </small>
    </p>
    <p :class="classObj02">:class="classObj02"</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: true,
      disabled: true,
      classObj: {
        class03: true,
        class04: false
      }
    };
  },
  computed: {
    classObj02() {
      return this.classObj;
    }
  }
};
</script>
<style scoped></style>
