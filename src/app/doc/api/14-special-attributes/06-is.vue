<template>
  <div>
    <ul>
      <li>
        用来绑定动态组件；
        <p>
          <ElButton @click="currentComponent = 'C01'">c01</ElButton>
          <ElButton @click="currentComponent = 'C02'">c02</ElButton>
        </p>
        <p><component :is="currentComponent" /></p>
      </li>
      <li>
        用来规避 DOM 模板的限制，单文件组件、字符串模板不受此限制；
        <table>
          <Tr01></Tr01>
        </table>
        <table>
          <tr is="Tr01"></tr>
        </table>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentComponent: "C01"
    };
  },
  components: {
    C01: {
      template: "<ElTag>C01</ElTag>"
    },
    C02: {
      template: "<ElTag>C02</ElTag>"
    },
    Tr01: {
      template: "<tr><td>td</td></tr>"
    }
  }
};
</script>
