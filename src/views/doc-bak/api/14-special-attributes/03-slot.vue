<template>
  <div>
    <ul>
      <li>
        指定将内容分发到哪一个 slot 上；
        <C01>
          <ElButton slot="header">header</ElButton>
          <ElButton slot="footer">footer</ElButton>
        </C01>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {
    C01: {
      template: `
        <div>
          <p class="header"><slot name="header"></slot></p>
          <p class="footer"><slot name="footer"></slot></p>
        </div>`,
    },
  },
};
</script>
