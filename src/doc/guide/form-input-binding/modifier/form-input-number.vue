<template>
  <div>
    <h1>2. .number</h1>
    <p>
      <small>
        <ul>
          <li>如果用户的输入可以转换为数字，.number 会自动将绑定值转换为数字，并且保证 typeof 运算结果为 'number'；</li>
          <li>如果用户的输入不能转换为数字，则绑定值不会被转换，会保持不变；</li>
          <li>如果 input 的 type="text"，.number 并不能阻止用户输入非数字字符；</li>
        </ul>
      </small>
    </p>
    <p>
      <input
        type="number"
        style="border-radius: 3px;padding: 7px;"
        v-model="number01"
      />
    </p>
    value: {{number01}}, type: {{typeof number01}}
    <p>
      <input
        type="text"
        style="border-radius: 3px;padding: 7px;"
        v-model.number="number02"
      />
    </p>
    value: {{number02}}, type: {{typeof number02}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      number01: 0,
      number02: 0
    };
  }
};
</script>
<style scoped>
</style>
