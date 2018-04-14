<template>
  <div
    style="padding: 10px;"
  >
    <ComponentBaseExample></ComponentBaseExample>
    <ComponentReusingComponent></ComponentReusingComponent>
    <ComponentOrganizingComponent></ComponentOrganizingComponent>
    <ComponentPassingDataToChildComponent></ComponentPassingDataToChildComponent>
  </div>
</template>
<script>
import ComponentBaseExample from "./01-component-name";
import ComponentReusingComponent from "./02-global-registration";
import ComponentOrganizingComponent from "./03-local-registration";
import ComponentPassingDataToChildComponent from "./04-module-system";

export default {
  data() {
    return {};
  },
  components: {
    ComponentBaseExample,
    ComponentReusingComponent,
    ComponentOrganizingComponent,
    ComponentPassingDataToChildComponent
  }
};
</script>
<style scoped>
</style>
