<template>
  <div>
    <h2>v-if and v-for</h2>
    <ul>
      <li>
        v-if 和 v-for 可以使用 if 语句和 map 方法来实现；
        <p><el-button v-on:click="toggleItems">toggle items</el-button></p>
        <p><MyComponent210401 :items="items"></MyComponent210401></p>
        <p><MyComponent210402 :items="items"></MyComponent210402></p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("MyComponent210401", {
  props: ["items"],
  template: `
    <div>
      <ul v-if="items.length">
        <li v-for="(item, itemIndex) in items" :key="'item_' + itemIndex">{{item.name}}</li>
      </ul>
      <p v-else>no items.</p>
    </div>`
});

Vue.component("MyComponent210402", {
  props: ["items"],
  render(h) {
    const vm = this;
    if (vm.items.length) {
      return h(
        "ul",
        vm.items.map((item, itemIndex) => {
          return h(
            "li",
            {
              key: `item_${itemIndex}`
            },
            [item.name]
          );
        })
      );
    } else {
      return h("p", "no items.");
    }
  }
});

export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    toggleItems() {
      const vm = this;
      if (vm.items.length) {
        vm.items = [];
      } else {
        vm.items = [{ name: "foo" }, { name: "bar" }];
      }
    }
  },
  components: {}
};
</script>
