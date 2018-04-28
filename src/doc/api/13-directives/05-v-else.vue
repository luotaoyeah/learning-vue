<template>
  <div>
    <ul>
      <li>
        描述：条件分支；
        跟 v-if 或者 v-else-if 一起使用；
        <p>
          <ElSwitch v-model="show01"/>
        </p>
        <p>
          <ElTag v-if="show01">YES</ElTag>
          <ElTag v-else>NO</ElTag>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show01: true
    };
  },
  components: {}
};
</script>
<style scoped>
</style>
