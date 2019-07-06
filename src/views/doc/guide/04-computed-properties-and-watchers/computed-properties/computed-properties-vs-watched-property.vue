<template>
  <div>
    <h1>4. Computed Property vs Watched Property</h1>
    <p>fullName01: {{ fullName01 }}</p>
    <p>fullName02: {{ fullName02 }}</p>
    <p>
      <small>
        <i>
          当一个属性依赖于2个或以上其他属性， 如果使用 watch property 的方式，则必须同时 watch 所有的其他属性； 如果使用
          computed property 的方式，则只需要在取值函数中依赖其他属性就可以了；
        </i>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName01: "foo",
      lastName01: "bar",
      fullName01: "foo bar",
      firstName02: "foo",
      lastName02: "bar"
    };
  },
  computed: {
    fullName02() {
      return `${this.firstName02} ${this.lastName02}`;
    }
  },
  watch: {
    firstName01: {
      handler(value) {
        this.fullName01 = `${value} ${this.lastName01}`;
      }
    },
    lastName01: {
      hanlder(value) {
        this.fullName01 = `${this.firstName01} ${value}`;
      }
    }
  },
  methods: {}
};
</script>
