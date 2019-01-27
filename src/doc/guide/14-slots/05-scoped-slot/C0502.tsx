import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import _ from "lodash";
import { Button } from "element-ui";

@Component({})
export default class C0502 extends Vue {
  private items: Array<Item> = [
    { id: "1", name: "a" },
    { id: "2", name: "b" },
    { id: "3", name: "c" }
  ];

  public render() {
    return (
      <div>
        <ul>
          <li>scoped slot 也可以是一个 named slot</li>
        </ul>
        <hr />
        <C01
          items={this.items}
          {...{
            scopedSlots: {
              slot02: ({ item }: { item: Item }) => (
                <Button>{item.name.toUpperCase()}</Button>
              )
            }
          }}
        />
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
            {this.$scopedSlots.slot02
              ? this.$scopedSlots.slot02({ item })
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
