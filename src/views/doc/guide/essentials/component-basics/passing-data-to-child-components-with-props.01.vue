<template>
  <span :style="{ border: '1px solid red', borderRadius: '3px', padding: '4px 8px', marginRight: '12px' }">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ['title'],
};
</script>
