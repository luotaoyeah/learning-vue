<template>
  <div>
    <ul>
      <li>类型：boolean</li>
      <li>默认：false</li>
      <li>
        描述：是否启用性能监控；
        <ul>
          <li>
            如果启用，
            在支持 performance.mark 的浏览器的开发工具的性能面板，
            可以查看组件相关的性能追踪；
            <img
              :src="Picture01"
              alt=""
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import Picture01 from "./08-performance.png";

export default {
  data() {
    return { Picture01 };
  },
  components: {}
};
</script>
<style scoped>
</style>
