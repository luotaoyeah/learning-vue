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
          style="border:none;"
        >
          <el-submenu index="1">
            <template slot="title">
              Guide
            </template>
            <el-submenu index="1-1">
              <template slot="title">Introduction</template>
              <el-menu-item index="1-1-1">
                <router-link :to="{name: 'DeclarativeRendering'}">Declarative Rendering</router-link>
              </el-menu-item>
              <el-menu-item index="1-1-2">
                <router-link :to="{name: 'ConditionalAndLoop'}">Conditionals And Loops</router-link>
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
import TOC from "./toc";

export default {
  components: {
    TOC
  }
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

.el-menu-item a {
  text-decoration: none;
  display: block;
  width: 100%;
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
