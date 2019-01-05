<template>
  <div>
    <p>
      <small>
        <i>
          默认情况下，v-model 绑定的数据属性只可能是静态的，
          即绑定的是表单元素的 value 值：
          <ul>
            <li>string（radio，select）</li>
            <li>boolean（checkbox）</li>
          </ul>
          举例来说，对于 checkbox 来说，如果勾选则绑定值为 true，
          如果不勾选则绑定值为 false；如何实现勾选时绑定值为 'yes'，
          不勾选时绑定值为 'no' 这样的动态绑定? 很简单，使用 v-bind 对表单元素的
          value 属性设置动态绑定就可以；
        </i>
      </small>
    </p>
    <FormInputCheckbox></FormInputCheckbox>
    <FormInputRadio></FormInputRadio>
    <FormInputSelect></FormInputSelect>
  </div>
</template>
<script>
import FormInputCheckbox from "./form-input-checkbox";
import FormInputRadio from "./form-input-radio";
import FormInputSelect from "./form-input-select";

export default {
  components: {
    FormInputCheckbox,
    FormInputRadio,
    FormInputSelect
  }
};
</script>
<style scoped></style>
