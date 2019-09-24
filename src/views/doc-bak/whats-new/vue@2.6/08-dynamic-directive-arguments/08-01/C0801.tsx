import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "ant-design-vue";

/**
 *
 */
@Component({ components: { Button } })
export default class C0801 extends Vue {
  public key01 = "foo";
  public key02 = "click";
}
