<template>
  <div id="app">
    <div class="toc">
      <TOC></TOC>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TOC from "./components/toc";

export default {
  components: {
    TOC
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

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

<style scoped>
.toc {
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 30%;
  height: 100%;
  border-right: 1px solid #dddddd;
  overflow-wrap: break-word;
}

.content {
  display: inline-block;
  margin-left: 30%;
  width: 70%;
  top: 0;
}
</style>
