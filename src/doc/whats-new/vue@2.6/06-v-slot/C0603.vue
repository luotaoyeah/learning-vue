<template>
  <div>
    <p>
      如果 default slot 是一个 scoped-slot，在 vue@2.6 之后，可以直接将 v-slot
      放在组件标签上
    </p>
    <C01>
      <p slot-scope="{ msg }">
        <ElButton>{{ msg }}</ElButton>
      </p>
    </C01>
    <hr />
    <!--
        如果 default slot 是一个 scoped slot，可以将 v-slot="{data}" 直接放在组件标签上
    -->
    <C01 v-slot="{ msg }">
      <p>
        <ElButton>{{ msg }}</ElButton>
      </p>
    </C01>
    <hr />
    <!--
        也可以将 v-slot="{data}" 放在 <template> 标签上
    -->
    <C01>
      <template v-slot="{ msg }">
        <p>
          <ElButton>{{ msg }}</ElButton>
        </p>
      </template>
    </C01>
  </div>
</template>

<script lang="ts">
import Vue, { CreateElement, RenderContext, VNode } from "vue";

const C01 = Vue.component("C01", {
  render(this: Vue, h: CreateElement, context: RenderContext<{}>): VNode {
    return h("div", {}, [
      this.$scopedSlots.default ? this.$scopedSlots.default({ msg: "FOO" }) : ""
    ]);
  }
});

export default Vue.extend({
  components: {
    C01
  }
});
</script>
