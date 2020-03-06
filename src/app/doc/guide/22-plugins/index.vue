<template>
  <el-tabs tabPosition="right" style="height: 100%;">
    <el-tab-pane label="Writing a Plugin">
      <ul>
        <li>
          使用 vue 的插件可以实现以下功能：
          <ul>
            <li>添加全局的方法和属性；</li>
            <li>添加全局的指令，过滤器，过渡；</li>
            <li>通过全局的 mixin 添加组件选项；</li>
            <li>通过 Vue.prototype 添加实例方法；</li>
          </ul>
        </li>
        <li>
          插件必须提供一个 install 方法， 方法接收 2
          个参数：'Vue'，'插件配置对象'；
        </li>
      </ul>
    </el-tab-pane>
    <el-tab-pane label="Using a Plugin">
      <ul>
        <li>插件可以通过调用 Vue.use(MyPlugin) 方法来安装；</li>
        <li>
          实际上会调用插件的 install 方法：
          <ul>
            <li>MyPlugin.install(Vue);</li>
          </ul>
          <p><el-button @click="handleClick01">hello</el-button></p>
        </li>
        <li>
          调用 Vue.use() 安装插件时，可以传入额外的配置对象；
          <ul>
            <li>Vue.use(MyPlugin, { size: "small" });</li>
          </ul>
        </li>
        <li>
          使用 Vue.use(MyPlugin) 安装插件， vue 会阻止重复安装同一个插件，
          也就是说， 对同一个插件调用多次 Vue.use(MyPlugin)，
          插件只会被安装一次；
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Vue from "vue";

const MyPlugin = {};
MyPlugin.install = (Vue, options) => {
  Vue.hello = () => {
    console.log("options:", options);
    alert("MyPlugin.hello()");
  };
};

/* 同一个插件，只有第一次调用生效 */
Vue.use(MyPlugin, { size: "small" });
Vue.use(MyPlugin, { size: "large" });

export default {
  data() {
    return {};
  },
  methods: {
    handleClick01() {
      Vue.hello();
    }
  },
  components: {}
};
</script>
