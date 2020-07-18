<template>
  <div>
    <fieldset>
      <legend>Actions</legend>

      <p>{{ count }}</p>

      <p>
        <button @click="onClick">increment</button>
        <button @click="incrementAccount02({ offset: 2 })">incrementAccount02</button>
      </p>
    </fieldset>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Actions',
  computed: {
    ...mapState({
      count: 'count',
    }),
  },
  methods: {
    onClick() {
      this.$store.dispatch('incrementAccount', { offset: 3 });
    },
    ...mapActions({
      incrementAccount02: 'incrementAccount',
    }),
  },
};
</script>

<style scoped></style>
