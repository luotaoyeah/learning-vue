<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>

    <div style="border: 1px solid #000; border-radius: 3px; padding: 12px">
      <div v-bind:title="message">
        {{ message }}
      </div>

      <span>AAA</span>
      <span v-if="false">BBB</span>

      <ul>
        <li v-for="i in items">{{ i }}</li>
      </ul>

      <div>
        <button v-on:click="onClick">click me</button>
      </div>

      <div>
        <input v-model="message" type="text" />
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: Date.now(),
      items: [1, 2, 3],
    };
  },
  methods: {
    onClick() {
      alert('hello');
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: 'simsun', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
