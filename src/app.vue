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
              <span>INTRODUCTION</span>
            </template>

            <Menu.Item key="/doc/guide/introduction/declarative-rendering">
              <router-link to="/doc/guide/introduction/declarative-rendering">
                <span>DECLARATIVE RENDERING</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/doc/guide/introduction/handling-user-input">
              <router-link to="/doc/guide/introduction/handling-user-input">
                <span>HANDLING USER INPUT</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/doc/guide/introduction/conditionals-and-loops">
              <router-link to="/doc/guide/introduction/conditionals-and-loops">
                <span>CONDITIONALS AND LOOPS</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="template-syntax">
            <template v-slot:title>
              <span>TEMPLATE SYNTAX</span>
            </template>

            <Menu.Item key="/doc/guide/template-syntax/interpolations">
              <router-link to="/doc/guide/template-syntax/interpolations">
                <span>INTERPOLATIONS</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/doc/guide/template-syntax/directives">
              <router-link to="/doc/guide/template-syntax/directives">
                <span>DIRECTIVES</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/doc/guide/template-syntax/shorthands">
              <router-link to="/doc/guide/template-syntax/shorthands">
                <span>SHORTHANDS</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="data-methods">
            <template v-slot:title>
              <span>DATA PROPERTIES AND METHODS</span>
            </template>

            <Menu.Item key="/doc/guide/data-methods/data-properties">
              <router-link to="/doc/guide/data-methods/data-properties">
                <span>DATA PROPERTIES</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/doc/guide/data-methods/methods">
              <router-link to="/doc/guide/data-methods/methods">
                <span>METHODS</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="computed">
            <template v-slot:title>
              <span>COMPUTED PROPERTIES AND WATCHERS</span>
            </template>

            <Menu.SubMenu key="computed-properties">
              <template v-slot:title>
                <span>COMPUTED PROPERTIES</span>
              </template>

              <Menu.Item key="/doc/guide/computed/basic-example">
                <router-link to="/doc/guide/computed/basic-example">
                  <span>BASIC EXAMPLE</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/doc/guide/computed/computed-caching-vs-methods">
                <router-link to="/doc/guide/computed/computed-caching-vs-methods">
                  <span>COMPUTED CACHING VS METHODS</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/doc/guide/computed/computed-setter">
                <router-link to="/doc/guide/computed/computed-setter">
                  <span>COMPUTED SETTER</span>
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="/doc/guide/computed/watchers">
              <router-link to="/doc/guide/computed/watchers">
                <span>WATCHERS</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="class-and-style">
            <template v-slot:title>
              <span>CLASS AND STYLE BINDINGS</span>
            </template>

            <Menu.SubMenu key="binding-html-classes">
              <template v-slot:title>
                <span>BINDING HTML CLASSES</span>
              </template>

              <Menu.Item key="/doc/guide/class-and-style/object-syntax">
                <router-link to="/doc/guide/class-and-style/object-syntax">
                  <span>OBJECT SYNTAX</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/doc/guide/class-and-style/array-syntax">
                <router-link to="/doc/guide/class-and-style/array-syntax">
                  <span>ARRAY SYNTAX</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/doc/guide/class-and-style/with-components">
                <router-link to="/doc/guide/class-and-style/with-components">
                  <span>WITH COMPONENTS</span>
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.SubMenu key="binding-inline-styles">
              <template v-slot:title>
                <span>BINDING INLINE STYLES</span>
              </template>

              <Menu.Item key="/doc/guide/class-and-style/binding-inline-styles/object-syntax">
                <router-link to="/doc/guide/class-and-style/binding-inline-styles/object-syntax">
                  <span>OBJECT SYNTAX</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/doc/guide/class-and-style/binding-inline-styles/array-syntax">
                <router-link to="/doc/guide/class-and-style/binding-inline-styles/array-syntax">
                  <span>ARRAY SYNTAX</span>
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>

          <Menu.SubMenu key="/doc/guide/conditional">
            <template v-slot:title>
              <span>CONDITIONAL RENDERING</span>
            </template>

            <Menu.SubMenu key="/doc/guide/conditional/v-if">
              <template v-slot:title>
                <span>v-if</span>
              </template>

              <Menu.Item key="/doc/guide/conditional/v-if/conditional-groups-with-v-if-on-template">
                <router-link to="/doc/guide/conditional/v-if/conditional-groups-with-v-if-on-template">
                  <span>CONDITIONAL GROUP WITH v-if ON TEMPLATE</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/doc/guide/conditional/v-if/v-else">
                <router-link to="/doc/guide/conditional/v-if/v-else">
                  <span>v-else</span>
                </router-link>
              </Menu.Item>

              <Menu.Item key="/doc/guide/conditional/v-if/v-else-if">
                <router-link to="/doc/guide/conditional/v-if/v-else-if">
                  <span>v-else-if</span>
                </router-link>
              </Menu.Item>
            </Menu.SubMenu>

            <Menu.Item key="/doc/guide/conditional/v-show">
              <router-link to="/doc/guide/conditional/v-show">
                <span>v-show</span>
              </router-link>
            </Menu.Item>

            <Menu.Item key="/doc/guide/conditional/v-if-with-v-for">
              <router-link to="/doc/guide/conditional/v-if-with-v-for">
                <span>v-if WITH v-for</span>
              </router-link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu key="/doc/guide/list">
            <template v-slot:title>
              <span>LIST RENDERING</span>
            </template>

            <Menu.Item key="/doc/guide/list/mapping-an-array-to-elements-with-v-for">
              <router-link to="/doc/guide/list/mapping-an-array-to-elements-with-v-for">
                <span>MAPPING AN ARRAY TO ELEMENTS WITH v-for</span>
              </router-link>
            </Menu.Item>
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
