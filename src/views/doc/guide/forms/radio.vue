<template>
  <fieldset>
    <label><input v-model="value01" :value="'a'" type="radio" /> a</label>
    <br />
    <label><input v-model="value01" :value="'b'" type="radio" /> b</label>
    <br />
    <label><input v-model="value01" :value="'c'" type="radio" /> c</label>
    <hr />
    {{ value01 }}
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/forms.html#radio

export default {
  data() {
    return {
      value01: 'b',
    };
  },
};
</script>

<style lang="less" scoped>
input[type='radio'] {
  vertical-align: text-bottom;
}
</style>
