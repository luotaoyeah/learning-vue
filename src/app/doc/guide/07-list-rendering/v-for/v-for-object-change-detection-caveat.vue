<template>
  <div>
    <h1>6. Object Change Detection Caveats</h1>
    <h2>6.1.</h2>
    <p>
      <small>
        <i>
          由于 JavaScript 的限制，vue 无法直接检测到对象属性的添加和删除； vue
          不允许动态地往已经创建好的实例上添加根级属性； 但是可以通过 Vue.set()
          添加嵌套属性；
        </i>
      </small>
    </p>
    <p>person: {{ JSON.stringify(person, null, 4) }}</p>
    <button @click="handle01">add an 'age' property</button>
    <h2>6.2.</h2>
    <p>
      <small>
        <i>
          如果需要一次性添加多个属性到已有的对象上， 可以使用
          Object.assign()，但是需要创建一个新的对象，
          将其他对象的属性都复制到这个新的对象上，
          然后再将这个新的对象赋值给已有的对象；
        </i>
      </small>
    </p>
    <p>person: {{ JSON.stringify(person, null, 4) }}</p>
    <button @click="handle02">add properties 'age' and 'score'</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "tom"
      }
    };
  },
  mounted() {
    /*
     * 直接往 vue 实例上添加的属性，不会被 vue 检测到；
     */
    this.age = 18;
  },
  methods: {
    handle01() {
      this.$set(this.person, "age", 18);
    },
    handle02() {
      this.person = Object.assign({}, this.person, {
        age: 18,
        score: 100
      });
    }
  }
};
</script>
