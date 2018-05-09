<template>
  <div id="app">
    <el-container style="height: 100%;">
      <el-aside
        width="400px"
        style="border-right: 1px solid #eeeeee;"
      >
        <el-menu
          :collapse-transition="false"
          unique-opened
          :default-active="defaultActive"
          style="border:none;"
        >
          <el-submenu index="1">
            <template slot="title">
              Guide
            </template>
            <el-submenu index="1-1">
              <template slot="title">Introduction</template>
              <el-menu-item :index="ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME">
                <router-link :to="{name: ROUTES.GUIDE_INTRODUCTION_DECLARATIVE_RENDERING.NAME}">Declarative Rendering</router-link>
              </el-menu-item>
              <el-menu-item :index="ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME">
                <router-link :to="{name: ROUTES.GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP.NAME}">Conditionals And Loops</router-link>
              </el-menu-item>
              <el-menu-item index="1-1-3">
                <router-link :to="{name: 'HandingUserInput'}">Handing User Input</router-link>
              </el-menu-item>
              <el-menu-item index="1-1-4">
                <router-link :to="{name: 'ComposingWithComponents'}">Composing With Components</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">The Vue Instance</template>
              <el-menu-item index="1-2-1">
                <router-link :to="{name: 'DataAndMethods'}">Data And Methods</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title">Template Syntax</template>
              <el-menu-item index="1-3-1">
                <router-link :to="{name: 'template-syntax-interpolation'}">Interpolation</router-link>
              </el-menu-item>
              <el-menu-item index="1-3-2">
                <router-link :to="{name: 'template-syntax-directive'}">Directive</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title">Computed Properties and Watchers</template>
              <el-menu-item index="1-4-1">
                <router-link :to="{name: 'guide-computed-properties'}">Computed Properties</router-link>
              </el-menu-item>
              <el-menu-item index="1-4-2">
                <router-link :to="{name: 'guide-watchers'}">Watchers</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-5">
              <template slot="title">Classes and Styles</template>
              <el-menu-item index="1-5-1">
                <router-link :to="{name: 'guide-class'}">Classes</router-link>
              </el-menu-item>
              <el-menu-item index="1-5-2">
                <router-link :to="{name: 'guide-style'}">Styles</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="1-6">
              <template slot="title">Conditional Rendering</template>
              <el-menu-item index="1-6-1">
                <router-link :to="{name: 'guide-conditional-rendering-v-if'}">v-if</router-link>
              </el-menu-item>
              <el-menu-item index="1-6-2">
                <router-link :to="{name: 'guide-conditional-rendering-v-show'}">v-show</router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="1-7">
              <router-link :to="{name: 'guide-list-rendering'}">List Rendering</router-link>
            </el-menu-item>
            <el-menu-item index="1-8">
              <router-link :to="{name: 'guide-event-handling'}">Event Handling</router-link>
            </el-menu-item>
            <el-submenu index="1-9">
              <template slot="title">Form Input Binding</template>
              <el-menu-item index="1-9-1">
                <router-link :to="{name: 'guide-form-input-basic'}">Basic</router-link>
              </el-menu-item>
              <el-menu-item index="1-9-2">
                <router-link :to="{name: 'guide-form-input-value-binding'}">Value Binding</router-link>
              </el-menu-item>
              <el-menu-item index="1-9-3">
                <router-link :to="{name: 'guide-form-input-modifier'}">Modifiers</router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="1-10">
              <router-link :to="{name: 'guide-component-basic'}">Component Basic</router-link>
            </el-menu-item>
            <el-menu-item index="1-11">
              <router-link :to="{name: 'guide-component-registration'}">Component Registration</router-link>
            </el-menu-item>
            <el-menu-item index="1-12">
              <router-link :to="{name: 'guide-props'}">Props</router-link>
            </el-menu-item>
            <el-menu-item index="1-13">
              <router-link :to="{name: 'guide-custom-events'}">Custom Events</router-link>
            </el-menu-item>
            <el-menu-item index="1-14">
              <router-link :to="{name: 'guide-slots'}">Slots</router-link>
            </el-menu-item>
            <el-menu-item index="1-15">
              <router-link :to="{name: 'guide-dynamic-async-component'}">Dynamic & Async Components</router-link>
            </el-menu-item>
            <el-menu-item index="1-16">
              <router-link :to="{name: 'guide-handling-edge-cases'}">Handling Edge Cases</router-link>
            </el-menu-item>
            <el-menu-item index="1-17">
              <router-link :to="{name: 'guide-transition-and-animation'}">Transitions and Animations</router-link>
            </el-menu-item>
            <el-menu-item index="1-18">
              <router-link :to="{name: 'guide-state-transition'}">State Transitions</router-link>
            </el-menu-item>
            <el-menu-item index="1-19">
              <router-link :to="{name: 'guide-mixins'}">Mixins</router-link>
            </el-menu-item>
            <el-menu-item index="1-20">
              <router-link :to="{name: 'guide-custom-directives'}">Custom Directives</router-link>
            </el-menu-item>
            <el-menu-item index="1-21">
              <router-link :to="{name: 'guide-render-function-and-jsx'}">Render Functions & JSX</router-link>
            </el-menu-item>
            <el-menu-item index="1-22">
              <router-link :to="{name: 'guide-plugins'}">Plugins</router-link>
            </el-menu-item>
            <el-menu-item index="1-23">
              <router-link :to="{name: 'guide-filters'}">Filters</router-link>
            </el-menu-item>
            <el-menu-item index="1-23">
              <router-link :to="{name: 'guide-reactivity-in-depth'}">Reactivity in Depth</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              Style Guide
            </template>
            <el-menu-item index="2-1">
              <router-link :to="{name: 'style-guide-essential'}">Essential</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link :to="{name: 'style-guide-strongly-recommend'}">Strongly Recommended</router-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <router-link :to="{name: 'style-guide-recommend'}">Recommended</router-link>
            </el-menu-item>
            <el-menu-item index="2-4">
              <router-link :to="{name: 'style-guide-use-with-caution'}">Use with Caution</router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              API
            </template>
            <el-menu-item index="3-1">
              <router-link :to="{name: 'api-global-config'}">Global Config</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link :to="{name: 'api-global-api'}">Global API</router-link>
            </el-menu-item>
            <el-submenu index="3-3">
              <template slot="title">Options</template>
              <el-menu-item index="3-3-1">
                <router-link :to="{name: 'api-options-data'}">Data</router-link>
              </el-menu-item>
              <el-menu-item index="3-3-2">
                <router-link :to="{name: 'api-options-dom'}">DOM</router-link>
              </el-menu-item>
              <el-menu-item index="3-3-3">
                <router-link :to="{name: 'api-options-lifecycle-hooks'}">Lifecycle Hooks</router-link>
              </el-menu-item>
              <el-menu-item index="3-3-4">
                <router-link :to="{name: 'api-options-assets'}">Assets</router-link>
              </el-menu-item>
              <el-menu-item :index="ROUTES.API_OPTIONS_COMPOSITION.NAME">
                <router-link :to="{name: ROUTES.API_OPTIONS_COMPOSITION.NAME}">Composition</router-link>
              </el-menu-item>
              <el-menu-item :index="ROUTES.API_OPTIONS_MISC.NAME">
                <router-link :to="{name: ROUTES.API_OPTIONS_MISC.NAME}">Misc</router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item :index="ROUTES.API_INSTANCE_PROPERTIES.NAME">
              <router-link :to="{name: ROUTES.API_INSTANCE_PROPERTIES.NAME}">Instance Properties</router-link>
            </el-menu-item>
            <el-submenu index="3-5">
              <template slot="title">Instance Methods</template>
              <el-menu-item index="3-5-1">
                <router-link :to="{name: 'api-instance-methods-data'}">Data</router-link>
              </el-menu-item>
              <el-menu-item index="3-5-2">
                <router-link :to="{name: 'api-instance-methods-events'}">Events</router-link>
              </el-menu-item>
              <el-menu-item index="3-5-3">
                <router-link :to="{name: 'api-instance-methods-lifecycle'}">Lifecycle</router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="3-6">
              <router-link :to="{name: 'api-directives'}">Directives</router-link>
            </el-menu-item>
            <el-menu-item index="3-7">
              <router-link :to="{name: 'api-special-attributes'}">Special Attributes</router-link>
            </el-menu-item>
            <el-menu-item index="3-8">
              <router-link :to="{name: 'api-builtin-components'}">Built-in Components</router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <small>
            <router-view/>
          </small>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { ROUTES } from "../router/RouterConst";

export default {
  data() {
    return { ROUTES };
  },
  computed: {
    defaultActive() {
      const vm = this;
      return (
        vm._.find(ROUTES, item => item.NAME === vm.$route.name) || {
          NAME: ""
        }
      ).NAME;
    }
  },
  components: {}
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

img {
  width: 70%;
  border-radius: 3px;
  display: block;
  margin: 5px 0;
  border: 1px solid #f0f0f0;
}

.el-icon-arrow-down:before {
  content: "\E60B";
}

.el-submenu__title {
  height: 30px;
  line-height: 30px;
}

.el-submenu .el-menu-item {
  height: 30px;
  line-height: 30px;
  padding-right: 5px;
}

.el-menu-item.is-active {
  background-color: #ecf5ff;
}

.el-menu-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  color: #303133;
}

.el-main {
  padding: 15px;
}

.el-tabs__item {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
}

.el-tabs--left,
.el-tabs--right {
  overflow: auto;
}
</style>
