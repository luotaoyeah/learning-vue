<template>
  <fieldset>
    <legend>I</legend>

    <p>
      <input :value="modelValue" type="text" @input="emit('update:modelValue', $event.target?.value)" />
    </p>

    <p>
      <input :value="tName" type="text" @input="emit('update:tName', $event.target?.value)" />
    </p>

    <p>
      <input v-model="tAgeComputed" type="text" />
    </p>
  </fieldset>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  const props = defineProps({
    modelValue: String,
    modelModifiers: Object,
    tName: String,
    tNameModifiers: Object,
    tAge: Number,
    tAgeModifiers: {
      type: Object,
      default: () => {
        return {};
      },
    },
  });

  const emit = defineEmits(['update:modelValue', 'update:tName', 'update:tAge']);

  const tAgeComputed = computed({
    get: () => {
      console.log('tAgeModifiers:', props.tAgeModifiers);
      return props.tAge;
    },
    set: (value) => {
      console.log('tAgeModifiers:', props.tAgeModifiers);
      emit('update:tAge', Number(value));
    },
  });
</script>

<style scoped></style>
