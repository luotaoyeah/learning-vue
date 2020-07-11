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
export default {
  name: 'ComputedPropertiesWatchers',
  data() {
    return {
      firstName01: 'luo',
      lastName01: 'tao',
      firstName02: 'luo',
      lastName02: 'tao',
    };
  },
  computed: {
    /**
     * 只有 getter
     */
    fullName01() {
      return `${this.firstName01} ${this.lastName01}`;
    },
    /**
     * 有 getter/setter
     */
    fullName02: {
      get() {
        return `${this.firstName02} ${this.lastName02}`;
      },
      set(value) {
        const values = value.split(' ');
        this.firstName02 = values[0];
        this.lastName02 = values[1];
      },
    },
  },
};
</script>

<style scoped></style>
