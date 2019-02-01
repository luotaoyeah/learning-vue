<template>
  <div>
    <ul>
      <li>
        vue 的 DOM 更新是异步的， 当数据发生改变时， 首先会被添加到更新队列中；
      </li>
      <li>
        同一个数据发生多次更改， 只会被加入更新队列一次；
        这样避免了不必要的重复计算和渲染；
      </li>
      <li>
        在下一次事件循环， vue 会将更新队列中所有的数据更改，
        一次性渲染到视图中；
      </li>
      <li>
        如果某个操作依赖于数据的最新状态， 我们必须在数据的更改操作之后，
        立即调用 Vue.nextTick() 方法， 并在该方法的回调函数中， 执行这个操作；
        这样保证了此时拿到的是最新的数据；
        <p><MyComponent240401></MyComponent240401></p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("MyComponent240401", {
  template: "<span>{{message}}</span>",
  data() {
    return {
      message: "not updated"
    };
  },
  mounted() {
    const vm = this;
    setTimeout(() => {
      vm.update();
    }, 1000);
  },
  methods: {
    async update() {
      this.message = "updated";
      console.log(this.$el.textContent);
      await this.$nextTick();
      console.log(this.$el.textContent);
    }
  }
});

export default {
  data() {
    return {};
  }
};
</script>
