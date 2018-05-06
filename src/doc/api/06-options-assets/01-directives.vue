<template>
  <div>
    <ul>
      <li>
        定义本地指令；
        <p>
          <input
            v-red-border02
            type="text"
            style="padding: 7px;border-radius: 3px;"
          >
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
  components: {},
  directives: {
    redBorder02: {
      bind(el, binding, vnode) {
        el.style.borderColor = "red";
      }
    }
  }
};
</script>
<style scoped>
</style>
