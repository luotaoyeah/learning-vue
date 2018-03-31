<template>
  <div>
    <ul>
      <li>
        Guide
        <ul>
          <li>Introduction
            <ul>
              <li>
                <router-link :to="{name: 'DeclarativeRendering'}">Declarative Rendering</router-link>
              </li>
              <li>
                <router-link :to="{name: 'ConditionalAndLoop'}">Conditionals And Loops</router-link>
              </li>
              <li>
                <router-link :to="{name: 'HandingUserInput'}">Handing User Input</router-link>
              </li>
              <li>
                <router-link :to="{name: 'ComposingWithComponents'}">Composing With Components</router-link>
              </li>
            </ul>
          </li>
          <li>The Vue Instance
            <ul>
              <li>
                <router-link :to="{name: 'DataAndMethods'}">Data And Methods</router-link>
              </li>
            </ul>
          </li>
          <li>Template Syntax
            <ul>
              <li>
                <router-link :to="{name: 'template-syntax-interpolation'}">Interpolation</router-link>
              </li>
              <li>
                <router-link :to="{name: 'template-syntax-directive'}">Directive</router-link>
              </li>
            </ul>
          </li>
          <li>Computed Properties and Watchers
            <ul>
              <li>
                <router-link :to="{name: 'guide-computed-properties'}">Computed Properties</router-link>
              </li>
              <li>
                <router-link :to="{name: 'guide-watchers'}">Watchers</router-link>
              </li>
            </ul>
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
