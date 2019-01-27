import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";
import { Button } from "element-ui";

@Component({})
export default class C0501 extends Vue {
  public render() {
    return (
      <div>
        <ul>
          <li>
            组件元素之间的内容是属于父组件作用域的，只能访问父组件的数据；
            那如何才能访问子组件的数据呢？
            <ol>
              <li>
                在子组件的 slot 元素上，把要暴露给父组件的数据绑定到一个属性上；
              </li>
              <li>
                在父组件中，组件元素之间的元素上， 通过 slot-scope
                属性拿到子组件暴露出来的作用域对象（scope），通过 scope
                就可以拿到子组件暴露给父组件的数据
              </li>
            </ol>
          </li>
        </ul>
        <hr />
        <C01
          items={[
            { id: "1", name: "a" },
            { id: "2", name: "b" },
            { id: "3", name: "c" }
          ]}
        >
          {({ item }: { item: Item }) => (
            <Button>{item.name.toUpperCase()}</Button>
          )}
        </C01>
      </div>
    );
  }
}

@Component({})
class C01 extends Vue {
  @Prop({
    type: Array,
    default() {
      return [];
    }
  })
  public items!: Array<Item>;

  public render() {
    return (
      <ul>
        {_.map(this.items, (item: Item) => (
          <li key={item.id}>
            {this.$scopedSlots.default
              ? this.$scopedSlots.default({ item })
              : item.name}
          </li>
        ))}
      </ul>
    );
  }
}

interface Item {
  id: string;
  name: string;
}
