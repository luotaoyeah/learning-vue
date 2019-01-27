<template>
  <div>
    <p>在 vue@2.6 之前，需要通过 slot='slot01' 的形式来指定某个 slot；</p>
    <hr />
    <C01>
      <template slot="header">
        <p>
          <ElButton>HEADER</ElButton>
        </p>
      </template>
      <template slot="footer">
        <p>
          <ElButton>FOOTER</ElButton>
        </p>
      </template>
    </C01>
    <hr />
    <p>在 vue@2.6 之后，可以通过 v-slot:slot01 的形式来指定某个 slot；</p>
    <hr />
    <C01>
      <template v-slot:header>
        <p>
          <ElButton>HEADER</ElButton>
        </p>
      </template>
      <template v-slot:footer>
        <p>
          <ElButton>FOOTER</ElButton>
        </p>
      </template>
    </C01>
  </div>
</template>

<script lang="ts">
import Vue, { CreateElement, RenderContext, VNode } from "vue";

/*
 * vue@2.6 引入了一个新的指令 v-slot，
 * 用来统一 scoped-slot 和 normal-slot
 */

const C01 = Vue.component("C01", {
  render(this: Vue, h: CreateElement, context: RenderContext<{}>): VNode {
    return h("div", {}, [this.$slots.header, this.$slots.footer]);
  }
});

export default {
  components: {
    C01
  }
};
</script>
