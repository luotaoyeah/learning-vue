<template>
  <div>
    <ul>
      <li>类型：boolean</li>
      <li>
        默认：
        <ul>
          <li>开发环境：true</li>
          <li>生产环境：false</li>
        </ul>
      </li>
      <li>
        描述：是否启用开发工具（
        <span>
          <a href="https://github.com/vuejs/vue-devtools">vue-devtools</a>
        </span>
        ）支持； <img :src="Picture01" />
      </li>
    </ul>
  </div>
</template>
<script>
import Picture01 from "./03-devtools.png";

export default {
  data() {
    return { Picture01 };
  },
  components: {}
};
</script>
