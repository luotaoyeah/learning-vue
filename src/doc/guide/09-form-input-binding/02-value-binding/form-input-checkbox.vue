<template>
  <div>
    <h1>1. Checkbox</h1>
    <p>
      <small>
        <i>
          checkbox 很特别，因为 v-model 绑定的不是 checkbox 的 value 属性， 而是
          selected 属性； 我们需要通过 true-value 和 false-value
          来设置动态绑定的值；
        </i>
      </small>
    </p>
    <input
      id="checkbox01"
      type="checkbox"
      v-model="selected"
      :true-value="y"
      :false-value="n"
    />
    <label for="checkbox01">yes or no</label>
    <p>Selected: {{ selected }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "yes",
      y: "yes",
      n: "no"
    };
  }
};
</script>
