<template>
  <div>
    <ul>
      <li>
        等价于 Vue.delete()；
        <p>
          <ElTag>{{ person.name }}</ElTag>
          <ElButton @click="handleClick01">delete this.person.name</ElButton>
        </p>
        <p>
          <ElTag>{{ person.age }}</ElTag>
          <ElButton @click="handleCLick02">this.$delete(this.person, 'age')</ElButton>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        name: "tom",
        age: 18,
      },
    };
  },
  methods: {
    handleClick01() {
      delete this.person.name;
    },
    handleCLick02() {
      this.$delete(this.person, "age");
    },
  },
  components: {},
};
</script>
