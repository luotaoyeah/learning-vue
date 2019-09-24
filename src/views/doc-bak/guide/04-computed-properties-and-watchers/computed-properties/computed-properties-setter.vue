<template>
  <div>
    <h1>5. Computed Setter</h1>
    <p>
      <small>
        <i> 计算属性默认只有取值函数，可以分别提供取值函数和赋值函数； </i>
      </small>
    </p>
    <p>firstName: {{ firstName }}</p>
    <p>lastName: {{ lastName }}</p>
    <p>fullName: <input v-model="fullName" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "foo",
      lastName: "bar",
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(value) {
        const names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },
};
</script>
