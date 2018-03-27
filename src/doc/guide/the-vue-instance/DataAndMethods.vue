<template>
  <div style="padding: 10px;">
    <h1>data</h1>
    <p>name: {{name}}</p>
    <p>foo: {{foo}}</p>
    <p>bar: {{bar}}</p>
    <!--
      Property or method "cat" is not defined on the instance but referenced during render.
      Make sure that this property is reactive,
      either in the data option,
      or for class-based components, by initializing the property.
    -->
    <p>cat: {{cat}}</p>
    <h1>Frozen object is not reactive</h1>
    <p>{{person.name}}</p>
    <!--
        Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    -->
    <input
      type="text"
      v-model="person.name"
    />
  </div>
</template>
<script>
const dataObj = {
  name: "tom",
  /* 冻结的对象不再是 reactive 的 */
  person: Object.freeze({
    name: "tom",
    age: 18
  })
};

export default {
  name: "DataAndMethods",
  data() {
    return dataObj;
  },
  beforeCreate() {
    /*
     * 在生命周期 beforeCreate 里面添加的属性是 reactive 的；
     */
    this.foo = "foo";
  },
  created() {
    /*
     * 在生命周期 created 里面添加的属性是 reactive 的；
     */
    this.bar = "bar";
  },
  mounted() {
    /*
     * 在生命周期 mounted 里面添加的属性不是 reactive 的；
     */
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
