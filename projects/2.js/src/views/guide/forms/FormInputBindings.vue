<template>
  <div>
    <fieldset>
      <legend>单个 checkbox 绑定到 boolean 类型.</legend>

      <label>
        <input v-model="data01" type="checkbox" />
        [ {{ typeof data01 }} ] {{ data01 }}
      </label>
    </fieldset>

    <fieldset>
      <legend>多个 checkbox 绑定到同一个 string array 类型.</legend>

      <ul>
        <li><input v-model="data02" type="checkbox" value="a" />a</li>
        <li><input v-model="data02" type="checkbox" value="b" />b</li>
        <li><input v-model="data02" type="checkbox" value="c" />c</li>
      </ul>
      [ {{ typeof data02 }} ] {{ data02 }}
    </fieldset>

    <fieldset>
      <legend>radio 绑定到 string 类型.</legend>

      <ul>
        <li><input v-model="data03" type="radio" value="a" />a</li>
        <li><input v-model="data03" type="radio" value="b" />b</li>
        <li><input v-model="data03" type="radio" value="c" />c</li>
      </ul>
      [ {{ typeof data03 }} ] {{ data03 }}
    </fieldset>

    <fieldset>
      <legend>单选的 select 绑定到 string 类型.</legend>

      <select v-model="data04">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
      [ {{ typeof data04 }} ] {{ data04 }}
    </fieldset>

    <fieldset>
      <legend>多选的 select 绑定到 string array 类型.</legend>

      <select v-model="data05" multiple>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
      [ {{ typeof data05 }} ] {{ data05 }}
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'FormInputBindings',
  data() {
    return { data01: true, data02: ['a', 'b', 'c'], data03: 'a', data04: 'a', data05: ['a', 'b', 'c'] };
  },
};
</script>

<style scoped></style>
