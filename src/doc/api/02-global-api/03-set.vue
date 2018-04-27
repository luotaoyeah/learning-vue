<template>
  <div>
    <ul>
      <li>
        描述：给数据对象设置属性；
        <p>
          <small>
            因为 vue 无法检测到对象属性的添加和删除，
            所以直接通过点（.）给对象设置的属性，
            是没有双向绑定的；
          </small>
        </p>
      </li>
      <li>
        参数：
        <ul>
          <li>{ Object | Array } object</li>
          <li>{ string | number } key</li>
          <li>{ any } value</li>
        </ul>
      </li>
    </ul>
    <img
      :src="Picture01"
    >
    <p>
      <ElInput
        key="input_1"
        v-model="x.y"
      />
    </p>
    <p>
      <ElAlert
        :title="x.y"
        :closable="false"
      ></ElAlert>
    </p>
    <p>
      <ElInput
        key="input_2"
        v-model="x.z"
      />
    </p>
    <p>
      <ElAlert
        :title="x.z"
        :closable="false"
      ></ElAlert>
    </p>
  </div>
</template>
<script>
import Vue from "vue";
import Picture01 from "./03-set.png";

export default {
  data() {
    return {
      Picture01,
      x: {}
    };
  },
  created() {
    const vm = this;
    vm.x.y = "x.y";
    Vue.set(vm.x, "z", "x.z");
  },
  components: {}
};
</script>
<style scoped>
</style>
