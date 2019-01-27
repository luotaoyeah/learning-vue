<template>
  <div>
    <ul>
      <li>描述：安装 vue 插件；</li>
      <li>
        参数：
        <ul>
          <li>
            { Object | Function } plugin
            <ul>
              <li>
                如果是 Object， 则必须暴露一个 install 方法， install
                方法的第一个参数为 Vue；
              </li>
              <li>如果是 Function， 则该函数会当作 install 方法被调用；</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>调用该方法安装同一个插件多次， 实际只会安装一次；</li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";

Vue.use(
  (Vue, options) => {
    console.log("optioins:", options);
  },
  { name: "tom" }
);

Vue.use(
  {
    install(Vue, options) {
      console.log("optioins:", options);
    }
  },
  { age: 18 }
);

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
