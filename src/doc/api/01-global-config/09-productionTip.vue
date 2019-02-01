<template>
  <div>
    <ul>
      <li>类型：boolean</li>
      <li>默认：true</li>
      <li>
        描述：是否在控制台打印'当前处于开发环境'提示信息；
        <img :src="Picture01" />
      </li>
    </ul>
  </div>
</template>

<script>
import Picture01 from "./09-productionTip.png";

export default {
  data() {
    return { Picture01 };
  },
  components: {}
};
</script>
