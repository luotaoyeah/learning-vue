<template>
  <div>
    <fieldset>
      <legend>使用 v-for 遍历一个 object.</legend>

      <ul>
        <li v-for="(value, key, index) in obj01">[{{ index }}] [{{ key }}] [{{ value }}]</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ListRendering',
  data() {
    return {
      obj01: {
        x: 'X',
        y: 'Y',
        z: 'Z',
      },
    };
  },
};
</script>

<style scoped></style>
