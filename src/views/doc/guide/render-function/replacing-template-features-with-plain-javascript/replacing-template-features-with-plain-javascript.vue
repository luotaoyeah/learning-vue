<template>
  <fieldset>
    <legend>v-if AND v-for</legend>

    <v-if-and-v-for-01 :items="items"></v-if-and-v-for-01>
    <v-if-and-v-for-02 :items="items"></v-if-and-v-for-02>
  </fieldset>

  <fieldset>
    <legend>v-model</legend>

    <p>
      <v-model-01 v-model="value01"></v-model-01>
      <span>{{ value01 }}</span>
    </p>
    <p>
      <v-model-02 v-model="value02"></v-model-02>
      <span>{{ value02 }}</span>
    </p>
  </fieldset>

  <fieldset>
    <legend>v-on</legend>

    <v-on-01>666</v-on-01>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/render-function.html#replacing-template-features-with-plain-javascript

import comp01 from './v-if-and-v-for.01';
import comp02 from './v-if-and-v-for.02.vue';
import comp03 from './v-model.01';
import comp04 from './v-model.02.vue';
import comp05 from './v-on.01';

export default {
  data() {
    return { items: ['a', 'b', 'c'], value01: '', value02: '' };
  },
  components: {
    'v-if-and-v-for-01': comp01,
    'v-if-and-v-for-02': comp02,
    'v-model-01': comp03,
    'v-model-02': comp04,
    'v-on-01': comp05,
  },
};
</script>
