<template>
  <div>
    <ul>
      <li>
        默认情况下，
        组件元素上的 attributes 如果没有被识别为 props，
        则会被当做普通的 HTML attributes，
        设置到组件根元素上，
        通过 inheritAttrs 属性可以禁用这一行为；
      </li>
      <li>
        禁用之后，
        依然可以通过 vm.$attrs 访问这些属性，
        并且可以通过 v-bind 将这些属性绑定到任意其他元素上；
      </li>
    </ul>
    <p>
      <C01
        name="tom"
        :age="18"
      ></C01>
      <C02
        name="tom"
        :age="18"
      ></C02>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {
    C01: {
      template: "<ElButton><span>{{name}}</span></ElButton>",
      props: {
        name: {
          type: String
        }
      }
    },
    C02: {
      template: "<ElButton><span :age='$attrs.age'>{{name}}</span></ElButton>",
      props: {
        name: {
          type: String
        }
      },
      inheritAttrs: false
    }
  }
};
</script>
<style scoped>
</style>
