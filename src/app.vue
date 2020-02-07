<template>
  <Layout id="components-layout-demo-custom-trigger" :style="{ height: '100%' }">
    <Layout.Sider v-model:collapsed="collapsed" :style="{ paddingTop: '64px' }" :width="400" collapsible>
      <Menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
        <Menu.Item key="home">
          <router-link to="/">
            <InfoCircleOutlined></InfoCircleOutlined>
            <span>HOME</span>
          </router-link>
        </Menu.Item>

        <Menu.SubMenu key="guide">
          <template v-slot:title>
            <span>
              <InfoCircleOutlined></InfoCircleOutlined>
              <span>GUIDE</span>
            </span>
          </template>

          <Menu.SubMenu key="introduction">
            <template v-slot:title>
              <span>
                <span>INTRODUCTION</span>
              </span>
            </template>

            <Menu.Item key="/guide/introduction/declarative-rendering">
              <router-link to="/guide/introduction/declarative-rendering">
                <span>DECLARATIVE RENDERING</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/guide/introduction/handling-user-input">
              <router-link to="/guide/introduction/handling-user-input">
                <span>HANDLING USER INPUT</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/guide/introduction/conditionals-and-loops">
              <router-link to="/guide/introduction/conditionals-and-loops">
                <span>CONDITIONALS AND LOOPS</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="template-syntax">
            <template v-slot:title>
              <span>
                <span>TEMPLATE SYNTAX</span>
              </span>
            </template>

            <Menu.Item key="/guide/template-syntax/interpolations">
              <router-link to="/guide/template-syntax/interpolations">
                <span>INTERPOLATIONS</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/guide/template-syntax/directives">
              <router-link to="/guide/template-syntax/directives">
                <span>DIRECTIVES</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/guide/template-syntax/shorthands">
              <router-link to="/guide/template-syntax/shorthands">
                <span>SHORTHANDS</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="data-methods">
            <template v-slot:title>
              <span>
                <span>DATA PROPERTIES AND METHODS</span>
              </span>
            </template>

            <Menu.Item key="/guide/data-methods/data-properties">
              <router-link to="/guide/data-methods/data-properties">
                <span>DATA PROPERTIES</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/guide/data-methods/methods">
              <router-link to="/guide/data-methods/methods">
                <span>METHODS</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="computed">
            <template v-slot:title>
              <span>
                <span>COMPUTED PROPERTIES AND WATCHERS</span>
              </span>
            </template>

            <Menu.SubMenu key="computed-properties">
              <template v-slot:title>
                <span>
                  <span>COMPUTED PROPERTIES</span>
                </span>
              </template>

              <Menu.Item key="/guide/computed/basic-example">
                <router-link to="/guide/computed/basic-example">
                  <span>BASIC EXAMPLE</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/guide/computed/computed-caching-vs-methods">
                <router-link to="/guide/computed/computed-caching-vs-methods">
                  <span>COMPUTED CACHING VS METHODS</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/guide/computed/computed-setter">
                <router-link to="/guide/computed/computed-setter">
                  <span>COMPUTED SETTER</span>
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="/guide/computed/watchers">
              <router-link to="/guide/computed/watchers">
                <span>WATCHERS</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="class-and-style">
            <template v-slot:title>
              <span>
                <span>CLASS AND STYLE BINDINGS</span>
              </span>
            </template>

            <Menu.SubMenu key="binding-html-classes">
              <template v-slot:title>
                <span>
                  <span>BINDING HTML CLASSES</span>
                </span>
              </template>

              <Menu.Item key="/guide/class-and-style/object-syntax">
                <router-link to="/guide/class-and-style/object-syntax">
                  <span>OBJECT SYNTAX</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/guide/class-and-style/array-syntax">
                <router-link to="/guide/class-and-style/array-syntax">
                  <span>ARRAY SYNTAX</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/guide/class-and-style/with-components">
                <router-link to="/guide/class-and-style/with-components">
                  <span>WITH COMPONENTS</span>
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu>
    </Layout.Sider>

    <Layout :style="{ height: '100%' }">
      <Layout.Header :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 24px' }">
        <div :style="{ color: '#ffffff', fontSize: '20px' }">@luotao/learning-vue</div>
      </Layout.Header>

      <Layout.Content
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
      </Layout.Content>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { InfoCircleOutlined } from '@ant-design/icons-vue';
import { Layout, Menu } from 'ant-design-vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    InfoCircleOutlined,
    Layout,
    'Layout.Content': Layout.Content,
    'Layout.Sider': Layout.Sider,
    'Layout.Header': Layout.Header,
    Menu,
    'Menu.Item': Menu.Item,
    'Menu.SubMenu': Menu.SubMenu,
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
