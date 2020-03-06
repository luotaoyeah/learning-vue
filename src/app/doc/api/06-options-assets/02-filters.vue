<template>
  <div>
    <ul>
      <li>
        定义本地过滤器；
        <p>
          <ElInput v-model="message" style="width: 200px;" />
        </p>
        <p>
          <ElButton>{{ message | upperCaseFilter }}</ElButton>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { isString } from "lodash-es";

export default {
  data() {
    return {
      message: "hello"
    };
  },
  filters: {
    upperCaseFilter(value) {
      if (!value) {
        return "";
      }

      if (!isString(value)) {
        return;
      }

      return value.toUpperCase();
    }
  },
  components: {}
};
</script>
