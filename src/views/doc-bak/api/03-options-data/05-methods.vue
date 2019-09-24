<template>
  <div>
    <ul>
      <li>类型：{ [ key: string ]: Function }</li>
      <li>
        描述：方法；
        <ul>
          <li>方法中的 this 指向组件实例对象；</li>
          <li>
            方法不能声明为箭头函数， 否则方法中的 this 将不再指向组件实例对象；
            <p>
              <ElButton @click="handleClick01">
                methods cannot be arrow function
              </ElButton>
            </p>
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
      name: "tom",
    };
  },
  methods: {
    /**
     * 方法声明为箭头函数，
     * this 不再指向组件实例对象；
     */
    handleClick01: () => {
      alert(`this.name: ${this.name}`);
    },
  },
  components: {},
};
</script>
