<template>
  <a-button v-bind:title="title">
    HOVER YOUR MOUSE OVER ME FOR A FEW SECONDS TO SEE MY DYNAMICALLY BOUND TITLE.
  </a-button>
</template>

<script lang="ts">
/*
 * https://vuejs.org/v2/guide/index.html#Declarative-Rendering
 */

import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "C010101",
  data() {
    return {
      title: new Date().toISOString(),
    };
  },
});
</script>
