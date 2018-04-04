<template>
  <div
    style="padding: 10px;"
  >
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
<style scoped>
</style>
