<template>
  <div>
    <h1>3. Checkbox</h1>
    <h2>3.1.</h2>
    <p>
      <small> <i> 单个勾选框，绑定 boolean 值，表示是否勾选； </i> </small>
    </p>
    <input type="checkbox" id="checkbox01" v-model="checked" />
    <label for="checkbox01">{{ checked }}</label>
    <h2>3.2.</h2>
    <p>
      <small>
        <i>
          多个勾选框（勾选框组），每个勾选框都需要设置 value 属性， 并绑定到同一个数组； 数组的元素为当前勾选的勾选框的
          value 值；
        </i>
      </small>
    </p>
    <p>
      <input type="checkbox" id="checkbox02" value="foo" v-model="checkedNames" />
      <label for="checkbox02">foo</label>
    </p>
    <p>
      <input type="checkbox" id="checkbox03" value="bar" v-model="checkedNames" />
      <label for="checkbox03">bar</label>
    </p>
    <p>
      <input type="checkbox" id="checkbox04" value="zoo" v-model="checkedNames" />
      <label for="checkbox04">zoo</label>
    </p>
    <p>Checked Names: {{ checkedNames }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      checkedNames: ["bar"],
    };
  },
};
</script>
