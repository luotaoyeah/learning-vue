<template>
  <div>
    <ul>
      <li>v-bind:xxx 的简写形式为 :xxx</li>
      <li>v-on:xxx 的简写形式为 @xxx</li>
      <li>v-slot:xxx 的简写形式为 #xxx</li>
    </ul>
    <!--使用非简写形式-->
    <C01>
      <template v-slot:header>
        <p>
          <ElButton>HEADER</ElButton>
        </p>
      </template>
      <template v-slot="{ msg }">
        <p>
          <ElButton>{{ msg }}</ElButton>
        </p>
      </template>
      <template v-slot:footer>
        <p>
          <ElButton>FOOTER</ElButton>
        </p>
      </template>
    </C01>
    <hr />
    <!--使用简写形式-->
    <C01>
      <template #header>
        <p>
          <ElButton>HEADER</ElButton>
        </p>
      </template>
      <!--
          对于 default slot，要么使用完整形式 v-slot="{msg}"，要么使用 #default="{msg}" 的形式
      -->
      <template #default="{msg}">
        <p>
          <ElButton>{{ msg }}</ElButton>
        </p>
      </template>
      <template #footer>
        <p>
          <ElButton>FOOTER</ElButton>
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
      [this.$scopedSlots.header ? this.$scopedSlots.header({}) : null],
      [this.$scopedSlots.default ? this.$scopedSlots.default({ msg: "BODY" }) : null],
      [this.$scopedSlots.footer ? this.$scopedSlots.footer({}) : null]
    ]);
  }
});

export default Vue.extend({
  components: {
    C01
  }
});
</script>
