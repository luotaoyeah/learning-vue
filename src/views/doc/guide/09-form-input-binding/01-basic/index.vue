<template>
  <div>
    <h1>0. Basic Usage</h1>
    <p>
      <small>
        <i>
          vue 提供了 v-model 指令用于表单元素的双向数据绑定； v-model 会根据表单元素的类型选择正确的方式更新数据，
          实际上 v-model 是'响应表单事件，并更新表单数据'这一操作的语法糖；
        </i>
      </small>
    </p>
    <p>
      <small>
        <i>
          v-model 会忽略表单元素的初始属性（value，selected，checked）， 而是根据绑定的属性的值来设置初始值；
          所以如果需要设置表单元素的初始值，需要设置绑定属性的初始值，
          而不是在元素上通过（value，selected，checked）属性来设置；
        </i>
      </small>
    </p>
    <FormInputText></FormInputText>
    <FormInputMultilineText></FormInputMultilineText>
    <FormInputCheckbox></FormInputCheckbox>
    <FormInputRadio></FormInputRadio>
    <FormInputSelect></FormInputSelect>
  </div>
</template>

<script>
import FormInputText from "./form-input-text";
import FormInputMultilineText from "./form-input-multiline-text";
import FormInputCheckbox from "./form-input-checkbox";
import FormInputRadio from "./form-input-radio";
import FormInputSelect from "./form-input-select";

export default {
  components: {
    FormInputText,
    FormInputMultilineText,
    FormInputCheckbox,
    FormInputRadio,
    FormInputSelect
  }
};
</script>
