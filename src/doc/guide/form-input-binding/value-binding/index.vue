<template>
  <div
    style="padding: 10px;"
  >
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
<style scoped>
</style>
