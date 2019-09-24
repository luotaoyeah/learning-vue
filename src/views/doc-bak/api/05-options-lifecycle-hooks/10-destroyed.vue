<template>
  <div>
    <ul>
      <li>
        组件实例销毁之后；
        <p>
          <ElButton @click="currentComponent = 'C01'">C01</ElButton>
          <ElButton @click="currentComponent = 'C02'">C02</ElButton>
        </p>
        <p><component :is="currentComponent" /></p>
      </li>
      <li>
        此时：
        <ul>
          <li>指令全部解除绑定；</li>
          <li>事件监听全部移除；</li>
          <li>子组件已经全部销毁；</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: "C01",
    };
  },
  components: {
    C01: {
      template: "<ElTag>C01</ElTag>",
      destroyed() {
        this.$alert("C01.destroyed()", "destroyed", {
          showClose: false,
        });
      },
    },
    C02: {
      template: "<ElTag>C02</ElTag>",
      destroyed() {
        this.$alert("C02.destroyed()", "destroyes", {
          showClose: false,
        });
      },
    },
  },
};
</script>
