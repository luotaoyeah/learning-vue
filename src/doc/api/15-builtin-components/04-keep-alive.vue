<template>
  <div>
    <ul>
      <li>
        使用 keep-alive 包裹动态组件，可以保持未激活组件的实例不被销毁；
        <p><ElButton @click="handleClick01">toggle</ElButton></p>
        <p>
          <keep-alive> <component :is="currentComponent" /> </keep-alive>
        </p>
      </li>
      <li>
        切换组件时，组件的 activated 和 deactivated 函数会被触发；
        <p><ElButton @click="handleClick01">toggle</ElButton></p>
        <p>
          <keep-alive> <component :is="currentComponent" /> </keep-alive>
        </p>
      </li>
      <li>
        默认情况，所有的组件都会被缓存，可以通过 include
        属性指定需要缓存的组件，或者通过 exclude 属性排除不需要缓存的组件；
        <p><ElButton @click="handleClick01">toggle</ElButton></p>
        <p>
          <keep-alive include="C01">
            <component :is="currentComponent" />
          </keep-alive>
        </p>
        <p>
          <keep-alive exclude="C01">
            <component :is="currentComponent" />
          </keep-alive>
        </p>
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
  methods: {
    handleClick01() {
      const vm = this;
      vm.currentComponent = vm.currentComponent == "C01" ? "C02" : "C01";
    }
  },
  components: {
    C01: {
      template: "<ElInput v-model='name' style='width: 200px'/>",
      data() {
        return { name: "" };
      }
    },
    C02: {
      template: "<ElInput v-model='name' style='width: 200px'/>",
      data() {
        return { name: "" };
      },
      activated() {
        console.log("C02.activated()");
      },
      deactivated() {
        console.log("C02.deactivated()");
      }
    }
  }
};
</script>
<style scoped></style>
