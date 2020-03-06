<template>
  <fieldset>
    <p>
      <label>
        width：
        <input v-model="width" max="5" min="1" type="number" />
      </label>
    </p>
    <p>
      <label>
        color：
        <select v-model="color" :style="{ height: '28px', lineHeight: '28px' }">
          <option value="blue">blue</option>
          <option value="red">red</option>
          <option value="green">green</option>
        </select>
      </label>
    </p>

    <!------------------------------------------------------------------------------------------------------
        argument 可以动态绑定，通过 binding.arg   获取，
        value    可以动态绑定，通过 binding.value 获取，
        modifier 通过 binding.modifiers.xxx 获取，
    ------------------------------------------------------------------------------------------------------->
    <span v-border:[color].x.y="width" type="text">foo</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/custom-directive.html#dynamic-directive-arguments

export default {
  data() {
    return {
      width: 3,
      color: 'red',
    };
  },
  directives: {
    border: {
      mounted(el, binding) {
        console.assert(binding.modifiers.x === true);
        console.assert(binding.modifiers.y === true);
        el.style.borderColor = binding.arg || 'black';
        el.style.borderWidth = `${binding.value}px`;
      },
      updated(el, binding) {
        console.assert(binding.modifiers.x === true);
        console.assert(binding.modifiers.y === true);
        el.style.borderColor = binding.arg || 'black';
        el.style.borderWidth = `${binding.value}px`;
      },
    },
  },
};
</script>

<style lang="less" scoped>
span,
input,
select {
  border-radius: 3px;
  margin-right: 12px;
}

span {
  border: 1px solid black;
  padding: 4px 8px;
}
</style>
