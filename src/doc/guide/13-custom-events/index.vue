<template>
  <div>
    <CustomEventEventNames></CustomEventEventNames>
    <CustomEventComponentVModel></CustomEventComponentVModel>
    <CustomEventBindingNativeEvent></CustomEventBindingNativeEvent>
    <CustomEventSyncModifier></CustomEventSyncModifier>
  </div>
</template>
<script>
import CustomEventEventNames from "./custom-events-event-names";
import CustomEventComponentVModel from "./custom-event-customizing-component-v-model";
import CustomEventBindingNativeEvent from "./custom-event-binding-native-event-to-component";
import CustomEventSyncModifier from "./custom-event-sync-modifier";

export default {
  data() {
    return {};
  },
  components: {
    CustomEventEventNames,
    CustomEventComponentVModel,
    CustomEventBindingNativeEvent,
    CustomEventSyncModifier
  }
};
</script>
<style scoped></style>
