<template>
  <ul>
    <li v-for="(child, childIndex) in children" :key="'child_' + childIndex">
      <A02 v-if="child.children" :folder="child"></A02>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import A02 from "./edge-case-circular-reference-a-02";

export default {
  name: "b02",
  props: ["children"],
  data() {
    return {};
  },
  components: { A02 }
};
</script>
