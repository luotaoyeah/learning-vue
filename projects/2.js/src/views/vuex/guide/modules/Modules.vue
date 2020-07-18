<template>
  <div>
    <fieldset>
      <legend>Modules</legend>

      <p>{{ x }}</p>
      <p>{{ xFromFooModule }}</p>
      <p>{{ xFromBarModule }}</p>

      <p>
        <button @click="onClick">setX</button>
        <button @click="setX">setX</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Modules',
  computed: {
    ...mapGetters({
      x: 'getX',
      xFromFooModule: 'xFromFooModule',
      xFromBarModule: 'xFromBarModule',
    }),
  },
  mounted() {},
  methods: {
    onClick() {
      this.$store.dispatch('setX');
    },
    ...mapActions({
      setX: 'setX',
    }),
  },
};
</script>

<style scoped></style>
