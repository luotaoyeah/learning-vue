<template>
  <div>
    <h1>5. Select</h1>
    <h2>5.1.</h2>
    <p>
      <small> <i> 单选，绑定到数据属性； </i> </small>
    </p>
    <select v-model="selected">
      <option value="" disabled>请选择 </option>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
    <p>Selected: {{ selected }}</p>
    <h2>5.2.</h2>
    <p>
      <small> <i> 多选，绑定到数组； </i> </small>
    </p>
    <select multiple v-model="selectedNames">
      <option value="" disabled>可多选： </option>
      <option value="a">A</option>
      <option value="b">B</option>
      <option value="c">C</option>
    </select>
    <p>Selected: {{ selectedNames }}</p>
    <h2>5.3.</h2>
    <p>
      <small> <i> 使用 v-for 动态渲染下拉列表； </i> </small>
    </p>
    <select v-model="selected02">
      <option value="" disabled>请选择： </option>
      <option v-for="(item, itemIndex) in options" :key="item.value" :value="item.value"
        >{{ itemIndex + 1 }}. {{ item.text }}
      </option>
    </select>
    <p>Selected: {{ selected02 }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
      selectedNames: [],
      selected02: "",
      options: [
        {
          text: "A",
          value: "a",
        },
        {
          text: "B",
          value: "b",
        },
        {
          text: "C",
          value: "c",
        },
      ],
    };
  },
};
</script>
