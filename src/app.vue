<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{name: 'Home'}">Home</router-link>
      </li>
    </ul>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 70%;
  border-radius: 3px;
  display: block;
  margin: 5px 0;
}
</style>
