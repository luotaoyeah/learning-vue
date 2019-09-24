<template>
  <div>
    <ul>
      <li>
        等价于 Vue.set()；
        <p>
          <ElInput v-model="x.y" style="width: 200px;"></ElInput>
          <ElTag>{{ x.y }}</ElTag>
        </p>
        <p>
          <ElInput v-model="x.z" style="width: 200px;"></ElInput>
          <ElTag>{{ x.z }}</ElTag>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: {},
    };
  },
  created() {
    const vm = this;
    vm.x.y = "y";
    vm.$set(vm.x, "z", "z");
  },
  components: {},
};
</script>
