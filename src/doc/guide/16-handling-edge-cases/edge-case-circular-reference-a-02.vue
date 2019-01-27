<template>
  <p>
    <span>{{ folder.name }}</span>
    <B02 :children="folder.children"></B02>
  </p>
</template>
<script>
export default {
  name: "a02",
  props: ["folder"],
  data() {
    return {};
  },
  components: {
    B02: () => import("./edge-case-circular-reference-b-02")
  }
};
</script>
