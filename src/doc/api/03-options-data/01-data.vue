<template>
  <div>
    <ul>
      <li>类型：Function | Object</li>
      <li>
        描述：数据对象；
        <ul>
          <li>vue 会递归数据对象的属性， 将这些属性转换为 getter / setter；</li>
          <li>
            递归转换过程一旦完成， 就不能再往数据对象添加或者删除顶级属性；
            只能通过 Vue.set() 和 Vue.delete() 来添加和删除子属性；
            所以应该在一开始就将所有需要的属性全部声明；
          </li>
          <li>
            组件创建之后， 可以通过 vm.$data 访问这个数据对象；
            <p><ElButton @click="handleClick01">show vm.$data</ElButton></p>
          </li>
          <li>
            vue 将数据对象的所有属性都代理到了组件实例对象上， 因此 vm.x 和
            vm.$data.x 是完全等价的；
            <p>
              <ElButton @click="handleClick02">vm.x === vm.$data.x</ElButton>
            </p>
          </li>
          <li>
            前缀为 _ 和 $ 的属性不会被代理到组件实例对象上， 因为他们可能会和
            Vue 内置的属性或者方法冲突； 不能通过 vm._x 来访问， 只能通过
            vm.$data._x 来访问；
            <p><ElButton @click="handleClick03">vm._x</ElButton></p>
          </li>
          <li>
            组件中的数据对象必须声明为一个返回数据对象的函数，
            否则所有的组件实例将共享同一个数据对象；
          </li>
          <li>
            如果数据对象声明为一个箭头函数， 则在函数中不能通过 this
            访问组件实例对象， 可以通过第一个参数访问组件实例对象；
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable vue/no-reserved-keys */
export default {
  props: {
    n: {
      type: String,
      default: "tom"
    }
  },
  data: vm => {
    return {
      name: vm.n,
      age: 18,
      x: "x",
      _x: "_x"
    };
  },
  methods: {
    handleClick01() {
      const vm = this;
      vm.$alert(JSON.stringify(this.$data), "vm.$data", {
        showClose: false
      });
    },
    handleClick02() {
      const vm = this;
      vm.$alert(vm.x === vm.$data.x, "vm.x === vm.$data.x", {
        showClose: false
      });
    },
    handleClick03() {
      const vm = this;
      vm.$alert(`vm._x: ${vm._x}, vm.$data._x: ${vm.$data._x}`, "vm._x", {
        showClose: false
      });
    }
  },
  components: {}
};
</script>
<style scoped></style>
