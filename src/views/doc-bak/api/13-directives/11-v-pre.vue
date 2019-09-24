<template>
  <div>
    <ul>
      <li>
        跳过对该元素及其子元素的编译；
        <p v-pre>{{ name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
