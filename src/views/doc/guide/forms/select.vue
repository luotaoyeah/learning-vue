<template>
  <fieldset>
    <legend>SINGLE</legend>

    <select v-model="value01">
      <option v-for="item of items" :key="item.id" :value="item.value">{{ item.value }}</option>
    </select>

    <hr />
    {{ value01 }}
  </fieldset>

  <fieldset>
    <legend>MULTIPLE</legend>

    <select v-model="value02" :style="{ height: 'auto' }" multiple>
      <option v-for="item of items" :key="item.id" :value="item.value">{{ item.value }}</option>
    </select>

    <hr />
    {{ value02 }}
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/forms.html#select

export default {
  data() {
    return {
      value01: 'b',
      value02: ['b'],
      items: [
        { id: 1, value: 'a' },
        { id: 2, value: 'b' },
        { id: 3, value: 'c' },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
select {
  border-radius: 3px;
  height: 32px;
  line-height: 32px;
  width: 200px;
}
</style>
