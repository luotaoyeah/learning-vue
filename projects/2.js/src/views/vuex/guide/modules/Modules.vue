<template>
  <div>
    <fieldset>
      <legend>Modules</legend>

      <p>{{ x }}</p>
      <p>{{ xFromFooModule }}</p>

      <p>
        <button @click="onClick">setX</button>
        <button @click="setX">setX</button>
      </p>
    </fieldset>

    <fieldset>
      <legend>Namespacing</legend>

      <p>{{ xFromBarModule }}</p>
      <p>{{ xFromBarModule02 }}</p>

      <p>
        <button @click="setXFromBarModule">setX</button>
        <button @click="setXFromBarModule02">setX</button>
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
      xFromBarModule02: 'barModule/getX',
    }),
  },
  mounted() {},
  methods: {
    onClick() {
      this.$store.dispatch('setX');
    },
    ...mapActions({
      setX: 'setX',
      setXFromBarModule: 'barModule/setX',
    }),
    setXFromBarModule02() {
      this.$store.commit('barModule/setX');
    },
  },
};
</script>

<style scoped></style>
