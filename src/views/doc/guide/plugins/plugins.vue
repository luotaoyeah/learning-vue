<template>
  <fieldset>
    <span>{{ $i18n('hello') }}</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/plugins.html#plugins

export default {};
</script>

<style lang="less" scoped>
span {
  border: 1px solid red;
  border-radius: 3px;
  margin-right: 12px;
  padding: 4px 8px;
}
</style>
