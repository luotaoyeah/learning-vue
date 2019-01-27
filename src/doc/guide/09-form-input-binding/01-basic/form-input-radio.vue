<template>
  <div>
    <h1>4. Radio</h1>
    <p>
      <small>
        <i> 多个单选框，需要分别设置 value 值， 并绑定到同一个数据属性； </i>
      </small>
    </p>
    <p>
      <input type="radio" id="radio01" value="one" v-model="picked" />
      <label for="radio01">One</label>
    </p>
    <p>
      <input type="radio" id="radio02" value="two" v-model="picked" />
      <label for="radio02">Two</label>
    </p>
    <p>Picked: {{ picked }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      picked: ""
    };
  }
};
</script>
