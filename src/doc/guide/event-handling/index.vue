<template>
  <div
    style="padding: 10px;"
  >
    <ListeningToEvent></ListeningToEvent>
    <EventHandler></EventHandler>
  </div>
</template>
<script>
import ListeningToEvent from "./listening-to-event";
import EventHandler from "./event-handler";

export default {
  data() {
    return {};
  },
  components: {
    ListeningToEvent,
    EventHandler
  }
};
</script>
<style scoped>
</style>
