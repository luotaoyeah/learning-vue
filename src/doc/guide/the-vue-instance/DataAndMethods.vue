<template>
  <div style="padding: 10px;">
    <h1>data</h1>
    <p>name: {{name}}</p>
    <p>foo: {{foo}}</p>
    <p>bar: {{bar}}</p>
    <p>cat: {{cat}}</p>
  </div>
</template>
<script>
const dataObj = {
  name: "tom"
};

export default {
  name: "DataAndMethods",
  data() {
    return dataObj;
  },
  beforeCreate() {
    /* OK */
    this.foo = "foo";
  },
  created() {
    /* OK */
    this.bar = "bar";
  },
  mounted() {
    /* NOT OK */
    this.cat = "cat";
    /* true */
    console.log("data === this.data", dataObj === this.$data);
    /* true */
    console.log("data.name === this.data.name", dataObj.name === this.name);
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>
<style scoped>
</style>
