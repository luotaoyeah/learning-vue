<template>
  <div>
    <fieldset>
      <legend>lifecycle hooks</legend>

      <button v-on:click="onClick">{{ message }}</button>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Instance',
  data() {
    return {
      /**
       * @type { number }
       */
      message: Date.now(),
    };
  },
  methods: {
    /**
     * @returns { void }
     */
    onClick() {
      this.message = Date.now();
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() {
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() {
    console.log('updated()');
  },
  beforeDestroy() {
    console.log('beforeDestroy()');
  },
  destroyed() {
    console.log('destroyed()');
  },
};
</script>

<style scoped></style>
