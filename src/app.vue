<template>
  <Layout id="components-layout-demo-custom-trigger" :style="{ height: '100%' }">
    <Layout.Sider v-model:collapsed="collapsed" :style="{ paddingTop: '50px' }" :width="400" collapsible>
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

            <Menu.SubMenu key="binding-inline-styles">
              <template v-slot:title>
                <span>
                  <span>BINDING INLINE STYLES</span>
                </span>
              </template>

              <Menu.Item key="/guide/class-and-style/binding-inline-styles">
                <router-link to="/guide/class-and-style/binding-inline-styles">
                  <span>OBJECT SYNTAX</span>
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
          margin: '50px 0 0 0',
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

<style lang="less"></style>
