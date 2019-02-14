import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "element-ui";

/**
 *
 */
@Component({})
export class C0901 extends Vue {
  public render() {
    return (
      <div>
        <C01
          {...{
            scopedSlots: {
              body: ({ msg }: { msg: string }) => <Button>{msg}</Button>
            }
          }}
        >
          <template slot="header">
            <Button>HEADER</Button>
          </template>
          <template slot="footer">
            <Button>FOOTER</Button>
          </template>
        </C01>
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({})
class C01 extends Vue {
  /*
   * 从 vue@2.6 开始，无论是 normal slots 还是 scoped slots，
   * 都会作为一个 function 暴露在 this.$scopedSlots 对象上面，
   * 统一了所有 slots 的使用方式，为升级到 vue@3.0 做准备
   */
  public render() {
    return (
      <div>
        <p>{!!this.$scopedSlots.header && this.$scopedSlots.header({})}</p>
        <p>
          {!!this.$scopedSlots.body && this.$scopedSlots.body({ msg: "BODY" })}
        </p>
        <p>{!!this.$scopedSlots.footer && this.$scopedSlots.footer({})}</p>
      </div>
    );
  }
}
