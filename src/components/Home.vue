<template>
  <div>
    <ul>
      <li>
        Guide
        <ul>
          <li>
            <router-link :to="{name: 'DeclarativeRendering'}">Declarative Rendering</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
