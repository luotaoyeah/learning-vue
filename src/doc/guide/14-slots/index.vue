<template>
  <div>
    <SlotsSlotContent></SlotsSlotContent>
    <SlotsNamedSlots></SlotsNamedSlots>
    <SlotsDefaultSlotContent></SlotsDefaultSlotContent>
    <SlotsCompilationScope></SlotsCompilationScope>
    <SlotsScopedSlots></SlotsScopedSlots>
  </div>
</template>
<script>
import SlotsSlotContent from "./slots-slot-content";
import SlotsNamedSlots from "./slots-named-slots";
import SlotsDefaultSlotContent from "./slots-default-slot-content";
import SlotsCompilationScope from "./slots-compilation-scope";
import SlotsScopedSlots from "./slots-scoped-slots";

export default {
  data() {
    return {};
  },
  components: {
    SlotsSlotContent,
    SlotsNamedSlots,
    SlotsDefaultSlotContent,
    SlotsCompilationScope,
    SlotsScopedSlots
  }
};
</script>
<style scoped></style>
