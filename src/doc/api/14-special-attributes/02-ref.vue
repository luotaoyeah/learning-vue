<template>
  <div>
    <ul>
      <li>
        用来注册对子元素或子组件的引用；
      </li>
      <li>
        注册之后，可以通过 vm.$refs 来访问这些子元素或子组件；
        <p>
          <span
            ref="refSpan"
            class="el-button el-button--small"
          >子元素
          </span>
          <ElButton
            ref="refButton"
            @click="handleClick01"
          >子组件
          </ElButton>
        </p>
      </li>
      <li>
        跟 v-for 一起使用时，所有引用包含在一个数组中；
        <p>
          <ElButton
            ref="refItems"
            v-for="item in 3"
            :key="item"
          >{{item}}
          </ElButton>
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
  methods: {
    handleClick01() {
      console.log(this.$refs);
    }
  },
  components: {}
};
</script>
<style scoped>
</style>
