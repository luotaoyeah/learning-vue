<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        对于 checkbox，v-model 绑定的是 checked 属性和 change 事件，绑定的数据是 boolean 类型，
    ------------------------------------------------------------------------------------------------------->
    <label>
      <input v-model="value01" type="checkbox" />
      {{ value01 }}
    </label>

    <br />

    <label>
      <input :checked="value01" type="checkbox" @change="value01 = $event.target.checked" />
      {{ value01 }}
    </label>
  </fieldset>

  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        如果一个数据同时绑定多个 checkbox，则绑定的数据是 Array<any> 类型，
        即绑定的数据的值为每个 checkbox 的 value 值组成的数组，
    ------------------------------------------------------------------------------------------------------->
    <label><input v-model="value02" :value="0" type="checkbox" /> 0</label>
    <br />
    <label><input v-model="value02" :value="false" type="checkbox" /> false</label>
    <br />
    <label><input v-model="value02" :value="null" type="checkbox" /> null</label>
    <br />
    <label><input v-model="value02" :value="{ x: 1 }" type="checkbox" /> {x:1}</label>
    <br />

    {{ value02 }}
  </fieldset>

  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        默认情况，v-model 绑定的值为 true 或者 false，即勾选时的值为 true，未勾选时的值为 false，
        可以通过 true-value 和 false-value 指定为其他的值，
        即勾选时的值为 true-value 绑定的值，未勾选时的值为 false-value 绑定的值，

        如果绑定的数据的初始值跟 true-false 的值相同，默认不会勾选，需要设置 checked 来默认勾选（是 bug 还是 feature ？）
    ------------------------------------------------------------------------------------------------------->
    <label>
      <input v-model="value03" :checked="value03 === 'foo'" :false-value="'bar'" :true-value="'foo'" type="checkbox" />
      {{ value03 }}
    </label>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/forms.html#checkbox

export default {
  data() {
    return {
      value01: true,
      value02: [0],
      value03: 'bar',
    };
  },
};
</script>

<style lang="less">
input[type='checkbox'] {
  vertical-align: text-bottom;
}
</style>
