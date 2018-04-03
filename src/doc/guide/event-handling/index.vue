<template>
  <div
    style="padding: 10px;"
  >
    <ListeningToEvent></ListeningToEvent>
    <EventHandler></EventHandler>
    <EventInlineHandler></EventInlineHandler>
    <EventModifier></EventModifier>
    <EventKeyModifier></EventKeyModifier>
    <EventAutomaticKeyModifier></EventAutomaticKeyModifier>
    <EventSystemModifierKeys></EventSystemModifierKeys>
    <EventExactModifier></EventExactModifier>
    <EventMouseButtonModifier></EventMouseButtonModifier>
  </div>
</template>
<script>
import ListeningToEvent from "./listening-to-event";
import EventHandler from "./event-handler";
import EventInlineHandler from "./event-inline-handler";
import EventModifier from "./event-modifier";
import EventKeyModifier from "./event-key-modifier";
import EventAutomaticKeyModifier from "./event-automatic-key-modifier";
import EventSystemModifierKeys from "./event-system-modifier-key";
import EventExactModifier from "./event-exact-modifier";
import EventMouseButtonModifier from "./event-mouse-button-modifier";

export default {
  data() {
    return {};
  },
  components: {
    ListeningToEvent,
    EventHandler,
    EventInlineHandler,
    EventModifier,
    EventKeyModifier,
    EventAutomaticKeyModifier,
    EventSystemModifierKeys,
    EventExactModifier,
    EventMouseButtonModifier
  }
};
</script>
<style scoped>
</style>
