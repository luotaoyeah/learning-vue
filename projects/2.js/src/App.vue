<template>
  <div id="app">
    <ul style="display: inline-block; width: 300px">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        Guide
        <ul>
          <li>
            <router-link to="/guide/introduction">Introduction</router-link>
          </li>
        </ul>
      </li>
    </ul>

    <div style="display: inline-block; width: calc(100% - 360px); height: calc(100% - 26px); border: 1px solid #000; border-radius: 3px; padding: 12px">
      <router-view />
    </div>
  </div>
</template>

<script></script>

<style lang="less">
#app {
  display: flex;
  height: 100%;
  align-items: flex-start;
  font-family: 'simsun', sans-serif;
}

.router-link-exact-active {
  color: #1890ff;
}
</style>
