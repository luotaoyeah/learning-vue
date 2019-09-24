import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { map } from "lodash-es";
import { Button, Divider } from "ant-design-vue";

@Component({})
export default class C0502 extends Vue {
  private items: Array<IItem> = [
    { id: "1", name: "a" },
    { id: "2", name: "b" },
    { id: "3", name: "c" },
  ];

  public render() {
    return (
      <div>
        <p>scoped slot 也可以是一个 named slot</p>
        <Divider dashed={true} />
        <C01
          items={this.items}
          {...{
            scopedSlots: {
              slot02: ({ item }: { item: IItem }) => <Button>{item.name.toUpperCase()}</Button>,
            },
          }}
        />
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({})
class C01 extends Vue {
  @Prop({
    type: Array,
    default() {
      return [];
    },
  })
  public items!: Array<IItem>;

  public render() {
    return (
      <ul>
        {map(this.items, (item: IItem) => (
          <li key={item.id}>{this.$scopedSlots.slot02 ? this.$scopedSlots.slot02({ item }) : item.name}</li>
        ))}
      </ul>
    );
  }
}

interface IItem {
  id: string;
  name: string;
}
