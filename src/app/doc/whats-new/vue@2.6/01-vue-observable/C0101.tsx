import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "element-ui";

/*
 * 默认情况下, 组件中的 props 和 data 中的属性, 会自动成为 observable 对象,
 * vue@2.6 新增了 Vue.observable() 方法, 可以手动创建一个 observable 对象
 */
const state: { count: number } = Vue.observable({ count: 0 });

@Component({})
export default class C0101 extends Vue {
  public render() {
    return (
      <Button
        onClick={() => {
          state.count++;
        }}
      >
        {state.count}
      </Button>
    );
  }
}
