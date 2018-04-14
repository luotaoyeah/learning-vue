<template>
  <div>
    <h1>3. Select Options</h1>
    <p>
      <small>
        <i>
          下拉列表绑定到对象；
        </i>
      </small>
    </p>
    <select
      v-model="selected"
    >
      <option
        value=""
        disabled
      >请选择：
      </option>
      <option :value="tom">tom</option>
      <option :value="cat">cat</option>
    </select>
    <p>Selected: {{selected}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: "",
      tom: {
        name: "tom",
        age: 18
      },
      cat: {
        name: "cat",
        age: 20
      }
    };
  }
};
</script>
<style scoped>
</style>
