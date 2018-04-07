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
import ComponentBaseExample from "./component-registration-component-name";
import ComponentReusingComponent from "./component-registration-global-registration";
import ComponentOrganizingComponent from "./component-registration-local-registration";
import ComponentPassingDataToChildComponent from "./component-registration-module-system";

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
