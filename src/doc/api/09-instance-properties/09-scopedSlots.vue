<template>
  <div>
    <ul>
      <li>
        组件的内容分发对象（scoped）；
        <C01 :items="items">
          <span slot="button">vm.$scopedSlots</span>
          <template slot="li" slot-scope="{ item }"
            >{{ item.id }}. {{ item.text }}
          </template>
        </C01>
      </li>
      <li>
        如果一个元素声明了 slot-scope 属性， 那么这个元素是一个 scopedSlot，
        包含在 vm.$scopedSlots 对象中；
      </li>
      <li>
        如果一个元素没有声明 slot-scope 属性， 那么这个元素是一个普通的 slot，
        包含在 vm.$slots 对象中；
      </li>
    </ul>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          text: "foo"
        },
        {
          id: 2,
          text: "bar"
        }
      ]
    };
  },
  components: {
    C01: {
      render(h) {
        const vm = this;
        return h("div", [
          h(
            "ElButton",
            {
              on: {
                click() {
                  console.log("vm.slots", vm.$slots);
                  console.log("vm.$scopedSlots", vm.$scopedSlots);
                }
              }
            },
            [vm.$slots.button || "C01"]
          ),
          h("ul", [
            _.map(vm.items, item =>
              h("li", [
                vm.$scopedSlots.li ? vm.$scopedSlots.li({ item }) : item.text
              ])
            )
          ])
        ]);
      },
      props: {
        items: {
          type: Array
        }
      }
    }
  }
};
</script>
<style scoped></style>
