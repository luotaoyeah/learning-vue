<template>
  <div>
    <p>
      在 vue@2.6 之前，需要使用 slot-scope="{ data }" 的形式来使用 scoped-slot
    </p>
    <C01>
      <template slot="item" slot-scope="{ msg }">
        <p>
          <ElButton>{{ msg }}</ElButton>
        </p>
      </template>
    </C01>
    <hr />
    <p>
      在 vue@2.6 之后，可以通过 v-slot="{ data }" 的形式来使用 scoped-slot
    </p>
    <C01>
      <template v-slot:item="{ msg }">
        <p>
          <ElButton>{{ msg }}</ElButton>
        </p>
      </template>
    </C01>
  </div>
</template>

<script lang="ts">
import Vue, { CreateElement, RenderContext, VNode } from "vue";

/*
 * v-slot 指令统一了 normal-slot 和 scoped-slot 的语法
 */

const C01 = Vue.component("C01", {
  render(this: Vue, h: CreateElement, context: RenderContext<{}>): VNode {
    return h("div", {}, [
      this.$scopedSlots.item ? this.$scopedSlots.item({ msg: "FOO" }) : ""
    ]);
  }
});

export default Vue.extend({
  components: {
    C01
  }
});
</script>
