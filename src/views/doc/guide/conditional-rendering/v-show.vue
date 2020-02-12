<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          v-show 通过是否应用 `display: none;` 样式，来显示和隐藏组件，组件不会从页面被移除，
      ------------------------------------------------------------------------------------------------------->
      <p><button @click="toggle()">toggle</button></p>
      <p>
        <span v-show="visible">a</span>
        <span v-if="!visible">b</span>
      </p>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/conditional.html#v-show

export default {
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>
