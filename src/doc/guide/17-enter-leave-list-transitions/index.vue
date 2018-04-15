<template>
  <div>
    <Transition01></Transition01>
    <transition02></transition02>
    <Transition03></Transition03>
    <Transition04></Transition04>
    <Transition05></Transition05>
    <Transition06></Transition06>
    <Transition07></Transition07>
    <Transition08></Transition08>
  </div>
</template>
<script>
import Transition01 from "./01-overview";
import Transition02 from "./02-single-component";
import Transition03 from "./03-on-initial-render";
import Transition04 from "./04-between-elements";
import Transition05 from "./05-between-components";
import Transition06 from "./06-list-transition";
import Transition07 from "./07-reusable-transition";
import Transition08 from "./08-dynamic-transition";

export default {
  data() {
    return {};
  },
  components: {
    Transition01,
    Transition02,
    Transition03,
    Transition04,
    Transition05,
    Transition06,
    Transition07,
    Transition08
  }
};
</script>
<style scoped>
</style>
