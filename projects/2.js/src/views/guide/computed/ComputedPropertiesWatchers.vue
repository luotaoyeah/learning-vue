<template>
  <div>
    <fieldset>
      <legend>Computed Properties</legend>

      <p>
        <input v-model="firstName01" type="text" />
        <input v-model="lastName01" type="text" />
        <input v-model="fullName01" readonly type="text" />
      </p>
      <p>
        <input v-model="firstName02" type="text" />
        <input v-model="lastName02" type="text" />
        <input v-model="fullName02" type="text" />
      </p>
    </fieldset>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'ComputedPropertiesWatchers',
  data() {
    return {
      /**
       * 姓.
       * @type { string }
       */
      firstName01: 'luo',
      /**
       * 名.
       * @type { string }
       */
      lastName01: 'tao',
      /** @type { string } */
      firstName02: 'luo',
      /** @type { string } */
      lastName02: 'tao',
    };
  },
  computed: {
    /**
     * 只有 getter.
     *
     * @returns { string }
     */
    fullName01() {
      return `${this.firstName01} ${this.lastName01}`;
    },
    /**
     * 有 getter/setter.
     */
    fullName02: {
      /**
       *
       * @returns { string }
       */
      get() {
        return `${this.firstName02} ${this.lastName02}`;
      },
      /**
       *
       * @param { string } value
       * @returns { void }
       */
      set(value) {
        const values = value.split(' ');
        this.firstName02 = values[0];
        this.lastName02 = values[1];
      },
    },
  },
});
</script>

<style scoped></style>
