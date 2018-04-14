<template>
  <div
    style="padding: 10px;"
    id="guide-the-vue-instance-data-and-methods"
  >
    <h1>1. data</h1>
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
    <h1>2. frozen object is not reactive</h1>
    <p>{{person.name}}</p>
    <!--
        Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    -->
    <input
      type="text"
      v-model="person.name"
    />
    <h1>3. built-in instance properties and methods</h1>
    <h1>4. instance lifecycle hooks</h1>
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
  destroyed() {
    /* 生命周期函数里面的 this 都指向当前 vue 实例 */
    console.log("destroyed:", this);
  },
  mounted() {
    const vm = this;
    /*
     * 在生命周期 mounted 里面添加的属性不是 reactive 的；
     */
    vm.cat = "cat";
    /* true */
    console.log("data === this.data:", dataObj === this.$data);
    /* true */
    console.log("data.name === this.data.name:", dataObj.name === this.name);
    /* true */
    console.log("vm.$data === dataObj:", vm.$data === dataObj);
    /* true */
    console.log(
      'vm.$el === document.getElementById("guide-the-vue-instance-data-and-methods"):',
      vm.$el ===
        document.getElementById("guide-the-vue-instance-data-and-methods")
    );

    setTimeout(() => {
      this.name = "cat";
    }, 1000);
  },
  watch: {
    name: () => {
      /*
       * 配置属性（options property）不要使用箭头函数，否则 this 将不再指向 vue 实例；
       */
      /* TypeError: _this2.alert is not a function */
      this.alert();
    }
  },
  methods: {
    alert() {
      alert(`name is ${this.name}`);
    }
  }
};
</script>
<style scoped>
</style>
