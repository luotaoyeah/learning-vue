<template>
  <div>
    <ul>
      <li>类型：{ [ key: string ]: string | Function | Object | Array }</li>
      <li>
        描述：监听数据变更；
        <p>
          <small>
            在组件实例化的时候， vue 会使用 vm.$watch() 方法， 对 watch 选项的所有属性进行监听；
          </small>
        </p>
        <ul>
          <li>
            监听函数第一个参数为新值， 第二个参数为旧值；
            <p><ElInputNumber v-model="a"></ElInputNumber></p>
          </li>
          <li>
            如果属性值为字符串， 表示监听函数的名称；
            <p><ElInputNumber v-model="b"></ElInputNumber></p>
          </li>
          <li>
            如果属性值为对象， 则该对象的 handler 方法表示监听函数， 其他属性为配置属性；
            <p><ElInputNumber v-model="e"></ElInputNumber></p>
          </li>
          <li>
            如果属性值数组， 每个元素代表一个监听函数；
            <p><ElInputNumber v-model="c"></ElInputNumber></p>
          </li>
          <li>
            属性名可以是一个属性路径字符串， 表示监听某个属性的子属性；
            <p><ElInputNumber v-model="f.g"></ElInputNumber></p>
          </li>
          <li>
            属性不要声明为箭头函数， 否则函数中 this 将不再指向组件实例对象；
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: {
        g: 6
      }
    };
  },
  watch: {
    a(newVal, oldVal) {
      this.$alert(`newValue: ${newVal}, oldVal: ${oldVal}`, {
        showClose: false
      });
    },
    b: "handleBChanged",
    c: [
      function(newVal, oldVal) {
        alert(`newValue: ${newVal}, oldVal: ${oldVal}`);
      },
      "handleCChanged"
    ],
    e: {
      handler(newVal, oldVal) {
        this.$alert(`newValue: ${newVal}, oldVal: ${oldVal}`, "e", {
          showClose: false
        });
      },
      immediate: true
    },
    "f.g": {
      handler(newVal, oldVal) {
        this.$alert(`newValue: ${newVal}, oldVal: ${oldVal}`, "f.g", {
          showClose: false
        });
      }
    }
  },
  methods: {
    handleBChanged() {
      this.$alert("this.b is changed", {
        showClose: false
      });
    },
    handleCChanged() {
      this.$alert("this.c is changed", {
        showClose: false
      });
    }
  },
  components: {}
};
</script>
