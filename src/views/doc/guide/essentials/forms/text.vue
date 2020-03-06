<template>
  <!------------------------------------------------------------------------------------------------------
      v-model 用于表单元素的双向绑定，实际上是一个语法糖，
      比如对于 input[type="text"] 标签，v-model 绑定的是 value 属性和 input 事件，
  ------------------------------------------------------------------------------------------------------->
  <fieldset>
    <input v-model="value01" :style="{ borderRadius: '3px', marginRight: '12px' }" type="text" />
    <span>{{ value01 }}</span>

    <br />

    <input
      :style="{ borderRadius: '3px', marginRight: '12px' }"
      type="text"
      v-bind:value="value02"
      v-on:input="value02 = $event.target.value"
    />
    <span>{{ value02 }}</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/forms.html#text

export default {
  data() {
    return {
      value01: '',
      value02: '',
    };
  },
};
</script>
