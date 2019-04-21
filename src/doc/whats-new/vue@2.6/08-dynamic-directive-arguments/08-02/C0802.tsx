import Vue, { RenderContext } from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "ant-design-vue";

/**
 *
 * @param ctx
 * @constructor
 */
const C01 = (ctx: RenderContext): JSX.Element => {
  return (
    <div>
      {ctx.scopedSlots.foo ? ctx.scopedSlots.foo({ msg: "FOO" }) : null}
    </div>
  );
};

/**
 *
 */
@Component({
  // @ts-ignore
  components: { C01, Button }
})
export default class C0802 extends Vue {
  public key01: string = "foo";
}
