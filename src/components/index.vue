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
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <router-view/>
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
</style>
