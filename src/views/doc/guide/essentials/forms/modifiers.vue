<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        对于 input[type="text"]，v-model 默认绑定 input 事件，可以使用 .lazy 让它绑定 change 事件，
    ------------------------------------------------------------------------------------------------------->
    <legend>.lazy</legend>

    <input v-model="value01" type="text" />
    <span>{{ value01 }}</span>
    <br />
    <input v-model.lazy="value02" type="text" />
    <span>{{ value02 }}</span>
  </fieldset>

  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        input[type="number"] 的值默认为 string 类型，
        可以使用 v-model.number 表示自动使用 Number.parseFloat() 将值转化为 number 类型，
        如果转换失败，则依然返回原始的值，
    ------------------------------------------------------------------------------------------------------->

    <legend>.number</legend>

    <input v-model="value03" type="number" />
    <span :style="{ color: 'red', marginRight: '12px' }">{{ typeof value03 }}</span>
    <span>{{ value03 }}</span>
    <br />
    <input v-model.number="value04" type="number" />
    <span :style="{ color: 'red', marginRight: '12px' }">{{ typeof value04 }}</span>
    <span>{{ value04 }}</span>

    <hr />
    <!------------------------------------------------------------------------------------------------------
        对于 input[type="text"] 也可以使用 v-model.number，
    ------------------------------------------------------------------------------------------------------->
    <input v-model.number="value05" type="text" />
    <span :style="{ color: 'red', marginRight: '12px' }">{{ typeof value05 }}</span>
    <span>{{ value05 }}</span>
  </fieldset>

  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        .trim 表示将首尾的空格去除，
    ------------------------------------------------------------------------------------------------------->

    <legend>.trim</legend>

    <input v-model="value06" type="text" />
    <span>_{{ value06 }}_</span>
    <br />
    <input v-model.trim="value07" type="text" />
    <span>_{{ value07 }}_</span>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/forms.html#modifiers

export default {
  data() {
    return {
      value01: '',
      value02: '',
      value03: 0,
      value04: 0,
      value05: 0,
      value06: '',
      value07: '',
    };
  },
};
</script>

<style lang="less" scoped>
input {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
