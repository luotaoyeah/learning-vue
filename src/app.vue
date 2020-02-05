<template>
  <a-layout id="components-layout-demo-custom-trigger" :style="{ height: '100%' }">
    <a-layout-sider v-model:collapsed="collapsed" :style="{ paddingTop: '64px' }" :width="400" collapsible>
      <a-menu v-model:selectedKeys="selectedKeys" mode="inline" theme="dark">
        <a-menu-item key="1">
          <InfoCircleOutlined></InfoCircleOutlined>
          <span>FOO</span>
        </a-menu-item>

        <a-menu-item key="2">
          <InfoCircleOutlined></InfoCircleOutlined>
          <span> BAR </span>
        </a-menu-item>

        <a-sub-menu key="sub1">
          <template v-slot:title>
            <span>
              <InfoCircleOutlined></InfoCircleOutlined>
              <span>BAZ</span>
            </span>
          </template>
          <a-menu-item key="4">A</a-menu-item>
          <a-menu-item key="5">B</a-menu-item>
          <a-menu-item key="6">C</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout :style="{ height: '100%' }">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%', padding: '0 24px' }">
        <div :style="{ color: '#fff', fontSize: '20px' }">@luotao/learning-vue</div>
      </a-layout-header>

      <a-layout-content
        :style="{
          margin: '64px 0 0 0',
          padding: '12px',
          background: '#fff',
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
      selectedKeys: ['1'],
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
</style>
