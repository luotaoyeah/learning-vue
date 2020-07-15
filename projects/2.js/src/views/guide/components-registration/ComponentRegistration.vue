<template>
  <div>
    <fieldset>
      <legend>Component Names</legend>

      <p>组件注册的名称为 kebab-case, 则使用时只能使用 kebab-case.</p>
      <comp-a></comp-a>

      <p>组件注册的名称为 PascalCase, 则使用时既能使用 PascalCase, 也能使用 kebab-case.</p>
      <comp-b></comp-b>
      <CompB></CompB>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ComponentRegistration',
  components: {
    'comp-a': { template: '<div>comp-a</div>' },
    CompB: { template: '<div>CompB</div>' },
  },
};
</script>

<style scoped></style>
