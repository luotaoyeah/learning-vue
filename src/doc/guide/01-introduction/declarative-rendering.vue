<template>
  <div>
    <span
      v-bind:title="title"
      style="border: 1px solid #DDDDDD;border-radius: 3px;padding: 10px;"
    >
      Hover your mouse over me for a few seconds to see my dynamically bound
      title.
    </span>
  </div>
</template>
<script>
export default {
  name: "DeclarativeRendering",
  data() {
    return {
      title: `You loaded this page on ${new Date().toLocaleString()}`
    };
  }
};
</script>
