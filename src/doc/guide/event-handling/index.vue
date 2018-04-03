<template>
  <div
    style="padding: 10px;"
  >
    <ListeningToEvent></ListeningToEvent>
    <EventHandler></EventHandler>
    <EventInlineHandler></EventInlineHandler>
  </div>
</template>
<script>
import ListeningToEvent from "./listening-to-event";
import EventHandler from "./event-handler";
import EventInlineHandler from "./event-inline-handler";

export default {
  data() {
    return {};
  },
  components: {
    ListeningToEvent,
    EventHandler,
    EventInlineHandler
  }
};
</script>
<style scoped>
</style>
