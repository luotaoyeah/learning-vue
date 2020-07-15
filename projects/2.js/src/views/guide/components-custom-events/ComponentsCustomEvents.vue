<template>
  <div>
    <fieldset>
      <legend>Customizing Component v-model</legend>

      <p>
        <comp-a v-model="data01"></comp-a>
        {{ data01 }}
      </p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ComponentsCustomEvents',
  data() {
    return { data01: '1' };
  },
  components: {
    CompA: {
      template: `
        <input type='text' :value='prop01' @input='onInput'>`,
      props: { prop01: { type: String } },
      /*
       * v-model 用在自定义组件上时, 默认使用 value / input,
       * 可以通过 model 选项来设置为其他的 prop / event.
       */
      model: { prop: 'prop01', event: 'event01' },
      methods: {
        onInput(event) {
          this.$emit('event01', event.target.value);
        },
      },
    },
  },
};
</script>

<style scoped></style>
