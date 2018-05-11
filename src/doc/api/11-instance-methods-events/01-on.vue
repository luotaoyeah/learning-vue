<template>
  <div>
    <ul>
      <li>
        监听组件触发的事件；
        <p>
          <small>谁调用 $on，就监听谁的事件；</small>
        </p>
        <p>
          <C01
            @foo-click="handleFooClick"
            ref="refC01"
          />
        </p>
      </li>
      <li>
        可以用于：
        在组件中监听组件自己的事件；
      </li>
      <li>
        可以同时监听多个事件，
        并绑定到同一个回调函数；
        <p>
          <C02/>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const vm = this;
    if (vm.$refs.refC01) {
      vm.$refs.refC01.$on("foo-click", (name, age) => {
        console.log("foo-click-01:", name, age);
      });
    }
  },
  methods: {
    handleFooClick(name, age) {
      console.log("foo-click-02:", name, age);
    }
  },
  components: {
    C01: {
      template: '<ElButton @click="handleClick">C01</ElButton>',
      created() {
        const vm = this;
        vm.$on("foo-click", (name, age) => {
          console.log("foo-click-03:", name, age);
        });
      },
      methods: {
        handleClick() {
          const vm = this;
          vm.$emit("foo-click", "tom", 18);
        }
      }
    },
    C02: {
      template: "<ElButton @click='handleClick'>C02</ElButton>",
      created() {
        /* 同时监听多个事件 */
        this.$on(["foo-click", "bar-click"], (name, age) => {
          console.log(name, age);
        });
      },
      methods: {
        handleClick() {
          this.$emit("foo-click", "tom", 18);
          this.$emit("bar-click", "tom", 18);
        }
      }
    }
  }
};
</script>
<style scoped>
</style>
