<template>
  <div>
    <fieldset>
      <legend>Getters</legend>

      <ul>
        <li v-for="item in items01" :key="item">{{ item }}</li>
      </ul>

      <ul>
        <li v-for="item in items01_02" :key="item">{{ item }}</li>
      </ul>

      <ul>
        <li v-for="item in items02(7)" :key="item">{{ item }}</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Getters',
  computed: {
    items01() {
      return this.$store.getters.items01;
    },
    ...mapGetters({
      items01_02: 'items01',
      items02: 'items02',
    }),
  },
};
</script>

<style scoped></style>
