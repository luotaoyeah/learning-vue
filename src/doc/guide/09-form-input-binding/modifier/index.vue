<template>
  <div>
    <FormInputLazy></FormInputLazy>
    <FormInputNumber></FormInputNumber>
    <FormInputTrim></FormInputTrim>
  </div>
</template>
<script>
import FormInputLazy from "./form-input-lazy";
import FormInputNumber from "./form-input-number";
import FormInputTrim from "./form-input-trim";

export default {
  components: {
    FormInputLazy,
    FormInputNumber,
    FormInputTrim
  }
};
</script>
<style scoped>
</style>
