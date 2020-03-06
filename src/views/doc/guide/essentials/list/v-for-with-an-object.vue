<template>
  <section>
    <!------------------------------------------------------------------------------------------------------
        v-for 还可以遍历一个对象的属性，
        使用 (value, key, index) 获取：(属性值，属性名，索引)
    ------------------------------------------------------------------------------------------------------->
    <ul>
      <li v-for="(value, key, index) of person" :key="key">{{ index }}. { {{ key }}: {{ value }} }</li>
    </ul>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#v-for-with-an-object

export default {
  data() {
    return {
      person: {
        name: 'luotao',
        age: 18,
        gender: 'male',
      },
    };
  },
};
</script>
