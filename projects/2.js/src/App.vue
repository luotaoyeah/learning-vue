<template>
  <div id="app">
    <ul style="display: inline-block; width: 300px">
      <li>
        <router-link to="/">Home</router-link>
      </li>

      <li>
        Guide
        <ul>
          <li>
            <router-link to="/guide/introduction">Introduction</router-link>
          </li>
          <li>
            <router-link to="/guide/instance">The Vue Instance</router-link>
          </li>
          <li>
            <router-link to="/guide/syntax">Template Syntax</router-link>
          </li>
          <li>
            <router-link to="/guide/computed">Computed Properties and Watchers</router-link>
          </li>
          <li>
            <router-link to="/guide/class-and-style">Class and Style Bindings</router-link>
          </li>
          <li>
            <router-link to="/guide/list">List Rendering</router-link>
          </li>
          <li>
            <router-link to="/guide/events">Event Handling</router-link>
          </li>
          <li>
            <router-link to="/guide/forms">Form Input Bindings</router-link>
          </li>
          <li>
            <router-link to="/guide/components">Component Basics</router-link>
          </li>
          <li>
            <router-link to="/guide/components-registration">Components Registration</router-link>
          </li>
          <li>
            <router-link to="/guide/components-props">Props</router-link>
          </li>
          <li>
            <router-link to="/guide/components-custom-events">Custom Events</router-link>
          </li>
          <li>
            <router-link to="/guide/components-slots">Slots</router-link>
          </li>
          <li>
            <router-link to="/guide/components-dynamic-async">Dynamic & Async Components</router-link>
          </li>
          <li>
            <router-link to="/guide/components-edge-cases">Handling Edge Cases</router-link>
          </li>
          <li>
            <router-link to="/guide/mixins">Mixins</router-link>
          </li>
          <li>
            <router-link to="/guide/custom-directive">Custom Directives</router-link>
          </li>
          <li>
            <router-link to="/guide/plugins">Plugins</router-link>
          </li>
        </ul>
      </li>

      <li>
        API
        <ul>
          <li>
            <router-link to="/api/vm-watch">vm.$watch()</router-link>
          </li>
        </ul>
      </li>

      <li>
        Vuex
        <ul>
          <li>
            Guide
            <ul>
              <li>
                <router-link to="/vuex/guide/introduction">Introduction</router-link>
              </li>
              <li>
                <router-link to="/vuex/guide/state">State</router-link>
              </li>
              <li>
                <router-link to="/vuex/guide/getters">Getters</router-link>
              </li>
              <li>
                <router-link to="/vuex/guide/mutations">Mutations</router-link>
              </li>
              <li>
                <router-link to="/vuex/guide/actions">Actions</router-link>
              </li>
              <li>
                <router-link to="/vuex/guide/modules">Modules</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>

    <div
      style="
        display: inline-block;
        overflow: auto;
        width: calc(100% - 360px);
        height: calc(100% - 26px);
        border: 1px solid #000;
        border-radius: 3px;
        padding: 12px;
      "
    >
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

button {
  font-family: 'simsun', sans-serif;
  margin-right: 12px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  color: #000000d9;
  padding: 6px 12px;
  height: 32px;
  cursor: pointer;
  box-shadow: 0 2px #00000004;
}

input[type='text'] {
  box-sizing: border-box;
  list-style: none;
  position: relative;
  display: inline-block;
  min-width: 0;
  padding: 4px 11px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  margin: 0 12px 0 0;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-family: simsun, serif;
  outline: none;

  &:focus {
    border-color: #40a9ff;
  }
}

fieldset {
  margin-bottom: 24px;
  border-radius: 3px;
}

select {
  min-height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  font-family: simsun, monospace;
}
</style>
