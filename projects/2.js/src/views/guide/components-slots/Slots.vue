<template>
  <div>
    <fieldset>
      <legend>Named Slots</legend>

      <p>有多个 slot 时, 每个 slot 都可以声明 name, 然后在用的时候, 通过 v-slot:xxx 来指定要插入到哪个 slot.</p>

      <p>如果 slot 没有声明 name, 则默认为 'default'.</p>

      <comp-a>
        <template v-slot:legend>LEGEND</template>
        <template v-slot:content>CONTENT</template>

        <template v-slot:default>DEFAULT</template>
      </comp-a>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Slots',
  components: {
    CompA: {
      template: `
        <fieldset>
        <legend>
          <slot name='legend'></slot>
        </legend>

        <p style='border:1px solid red;'>
          <slot></slot>
        </p>

        <p style='border:1px solid blue;'>
          <slot name='content'></slot>
        </p>
        </fieldset>
      `,
      data() {
        return {};
      },
    },
  },
};
</script>

<style scoped></style>
