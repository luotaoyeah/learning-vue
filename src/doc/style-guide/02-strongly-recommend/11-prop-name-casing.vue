<template>
  <div>
    <p>
      props 属性名称， 在定义的时候应该使用 camelCase， 在模板和 JSX
      中使用的时候应该使用 kebab-case；
    </p>
    <p><C01 :user-name="'tom'"></C01></p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
    C01: {
      template: "<ElButton>username: {{userName}}</ElButton>",
      props: ["userName"]
    }
  }
};
</script>
