<template>
  <div>
    <ul>
      <li>
        数据更改之后，
        DOM 更新之前；
      </li>
      <li>
        此时，
        数据已经更改，
        但尚未重新渲染 DOM；
        <p>
          <ElInput
            v-model="name"
            style="width: 200px;"
          />
          <ElButton>{{name}}</ElButton>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "tom"
    };
  },
  beforeUpdate() {
    const vm = this;
    alert(`name: ${vm.name}`);
  },
  components: {}
};
</script>
<style scoped>
</style>
