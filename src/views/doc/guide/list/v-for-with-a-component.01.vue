<template>
  <li>
    <span>{{ text }}</span>
    <button :style="{ borderRadius: '3px', marginLeft: '12px' }" @click="$emit('remove')">remove</button>
  </li>
</template>

<script>
export default {
  props: ['text'],
};
</script>
