<template>
  <a-layout id="components-layout-demo-custom-trigger" :style="{ height: '100%' }">
    <a-layout-sider v-model:collapsed="collapsed" :style="{ paddingTop: '64px' }" :width="400" collapsible>
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
        <a-menu-item key="home">
          <router-link to="/">
            <InfoCircleOutlined></InfoCircleOutlined>
            <span>HOME</span>
          </router-link>
        </a-menu-item>

        <a-sub-menu key="introduction">
          <template v-slot:title>
            <span>
              <InfoCircleOutlined></InfoCircleOutlined>
              <span>INTRODUCTION</span>
            </span>
          </template>
          <a-menu-item key="declarative-rendering">
            <router-link to="/introduction/declarative-rendering">
              <span>DECLARATIVE RENDERING</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout :style="{ height: '100%' }">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 24px' }">
        <div :style="{ color: '#ffffff', fontSize: '20px' }">@luotao/learning-vue</div>
      </a-layout-header>

      <a-layout-content
        :style="{
          margin: '64px 0 0 0',
          padding: '12px',
          background: '#ffffff',
          height: '100%',
          overflowY: 'scroll',
          overflowX: 'auto',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    InfoCircleOutlined,
  },
  data() {
    return {
      selectedKeys: ['home'],
      collapsed: false,
    };
  },
})
export default class App extends Vue {}
</script>

<style lang="less">
.ant-layout-sider-children {
  overflow-y: auto;
}

.ant-menu {
  padding: 0px 1px;
}

.ant-menu-vertical.ant-menu-sub {
  padding: 1px 1px 0px;
}

.ant-menu-item {
  border-radius: 1px;

  a {
    color: inherit;
    display: inline-block;
    width: calc(100% - 0px);
  }
}

.ant-menu-vertical .ant-menu-item:not(:last-child),
.ant-menu-vertical-left .ant-menu-item:not(:last-child),
.ant-menu-vertical-right .ant-menu-item:not(:last-child),
.ant-menu-inline .ant-menu-item:not(:last-child) {
  margin-bottom: 1px;
}

.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item,
.ant-menu-vertical .ant-menu-submenu-title,
.ant-menu-vertical-left .ant-menu-submenu-title,
.ant-menu-vertical-right .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-submenu-title {
  margin-top: 0px;
}

.ant-menu-vertical .ant-menu-item,
.ant-menu-vertical-left .ant-menu-item,
.ant-menu-vertical-right .ant-menu-item,
.ant-menu-inline .ant-menu-item,
.ant-menu-vertical .ant-menu-submenu-title,
.ant-menu-vertical-left .ant-menu-submenu-title,
.ant-menu-vertical-right .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-submenu-title {
  margin-bottom: 1px;
  border-radius: 1px;
}

.ant-menu-dark .ant-menu-item:hover {
  background-color: #40a9ff;
}

.ant-menu-dark .ant-menu-item:hover,
.ant-menu-dark .ant-menu-submenu-title:hover {
  background-color: #40a9ff;
}
</style>
