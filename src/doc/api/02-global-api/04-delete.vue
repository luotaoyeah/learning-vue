<template>
  <div>
    <ul>
      <li>
        描述：从数据对象删除动态属性；
        <small>
          因为 vue 无法检测到对象属性的添加和删除，
          所以无法直接通过 delete 删除数据对象的动态属性；
        </small>
      </li>
      <li>
        参数：
        <ul>
          <li>{ Object | Array} object</li>
          <li>{ string | number} key</li>
        </ul>
      </li>
    </ul>
    <p>
      <ElButton @click="handleClick01">delete this.person.name</ElButton>
      <ElInput v-model="person.name"/>
    </p>
    <p>
      <ElButton @click="handleClick02">Vue.delete(this.person, 'age')</ElButton>
      <ElInput v-model="person.age"/>
    </p>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  data() {
    return {
      person: {
        name: "tom",
        age: 18
      }
    };
  },
  methods: {
    handleClick01() {
      delete this.person.name;
    },
    handleClick02() {
      Vue.delete(this.person, "age");
    }
  },
  components: {}
};
</script>
<style scoped>
</style>
