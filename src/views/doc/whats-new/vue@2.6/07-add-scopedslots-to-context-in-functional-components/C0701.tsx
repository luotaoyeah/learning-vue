import Vue, { RenderContext } from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "element-ui";

@Component({})
export class C0701 extends Vue {
  public render() {
    return (
      <div>
        {/*
         // @ts-ignore*/}
        <C01
          {...{
            scopedSlots: {
              foo: ({ msg }: { msg: string }) => <Button>{msg}</Button>
            }
          }}
        />
      </div>
    );
  }
}

/**
 *
 * @param ctx
 * @constructor
 */
const C01 = (ctx: RenderContext): JSX.Element => {
  /*
   * 从 vue@2.6 开始，在 functional component 中，
   * 可以直接通过 RenderContext.scopedSlots 属性，获取所有的 scoped slots 数据
   */
  return <div>{ctx.scopedSlots.foo ? ctx.scopedSlots.foo({ msg: "FOO" }) : null}</div>;
};
