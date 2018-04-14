<template>
  <div
    style="padding: 10px;"
  >
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
import Transition01 from "./transition-01-overview";
import Transition02 from "./transition-02-single-component";
import Transition03 from "./transition-03-on-initial-render";
import Transition04 from "./transition-04-between-elements";
import Transition05 from "./transition-05-between-components";
import Transition06 from "./transition-06-list-transition";
import Transition07 from "./transition-07-reusable-transition";
import Transition08 from "./transition-08-dynamic-transition";

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
