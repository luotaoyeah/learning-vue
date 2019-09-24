<template>
  <div>
    <ul>
      <li>
        移除事件监听；
        <ul>
          <li>
            如果同时指定了'事件'和'回调'， 则移除这个事件的这个回调；
            <C01 />
          </li>
          <li>
            如果指定了'事件'，没有指定'回调'， 则移除这个事件的所有回调；
            <C02 />
          </li>
          <li>
            如果没有指定'事件'， 则移除所有事件的所有回调；
            <C03 />
          </li>
        </ul>
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
        <p>
          <ElButton @click='handleEmitA'>触发事件 A</ElButton>
          <ElButton @click='handleRemoveA'>移除事件 A 的第一个回调</ElButton>
        </p>`,
      created() {
        const vm = this;
        vm.$on("a", vm.handleA01);
        vm.$on("a", vm.handleA02);
      },
      methods: {
        handleEmitA() {
          this.$emit("a");
        },
        handleRemoveA() {
          this.$off("a", this.handleA01);
        },
        handleA01() {
          console.log("a01");
        },
        handleA02() {
          console.log("a02");
        },
      },
    },
    C02: {
      template: `
        <p>
          <ElButton @click='handleEmitA'>触发事件 A</ElButton>
          <ElButton @click="handleRemoveA">移除事件 A 的所有回调</ElButton>
        </p>`,
      created() {
        const vm = this;
        vm.$on("a", () => {
          console.log("a01");
        });
        vm.$on("a", () => {
          console.log("a02");
        });
      },
      methods: {
        handleEmitA() {
          this.$emit("a");
        },
        handleRemoveA() {
          this.$off("a");
        },
      },
    },
    C03: {
      template: `
        <p>
          <ElButton @click='handleEmitA'>触发事件 A</ElButton>
          <ElButton @click='handleEmitB'>触发事件 B</ElButton>
          <ElButton @click="handleRemove">移除所有事件的所有回调</ElButton>
        </p>`,
      created() {
        const vm = this;
        vm.$on("a", () => {
          console.log("a");
        });
        vm.$on("b", () => {
          console.log("b");
        });
      },
      methods: {
        handleEmitA() {
          this.$emit("a");
        },
        handleEmitB() {
          this.$emit("b");
        },
        handleRemove() {
          this.$off();
        },
      },
    },
  },
};
</script>
