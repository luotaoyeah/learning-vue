<template>
  <div
    style="padding: 10px;"
  >
    <ComponentBaseExample></ComponentBaseExample>
    <ComponentReusingComponent></ComponentReusingComponent>
    <ComponentOrganizingComponent></ComponentOrganizingComponent>
    <ComponentPassingDataToChildComponent></ComponentPassingDataToChildComponent>
    <ComponentSingleRootElement></ComponentSingleRootElement>
    <ComponentSendingDataToParent></ComponentSendingDataToParent>
    <ComponentDistributionWithSlot></ComponentDistributionWithSlot>
    <ComponentDynamicComponent></ComponentDynamicComponent>
    <ComponentDomTemplateParsingCaveat></ComponentDomTemplateParsingCaveat>
  </div>
</template>
<script>
import ComponentBaseExample from "./component-base-example";
import ComponentReusingComponent from "./component-reusing-component";
import ComponentOrganizingComponent from "./component-organizing-component";
import ComponentPassingDataToChildComponent from "./component-passing-data-to-child-component";
import ComponentSingleRootElement from "./component-a-single-root-element";
import ComponentSendingDataToParent from "./component-sending-message-to-parent";
import ComponentDistributionWithSlot from "./component-content-distribution-with-slot";
import ComponentDynamicComponent from "./component-dynamic-component";
import ComponentDomTemplateParsingCaveat from "./component-dom-template-parsing-caveat";

export default {
  data() {
    return {};
  },
  components: {
    ComponentBaseExample,
    ComponentReusingComponent,
    ComponentOrganizingComponent,
    ComponentPassingDataToChildComponent,
    ComponentSingleRootElement,
    ComponentSendingDataToParent,
    ComponentDistributionWithSlot,
    ComponentDynamicComponent,
    ComponentDomTemplateParsingCaveat
  }
};
</script>
<style scoped>
</style>
