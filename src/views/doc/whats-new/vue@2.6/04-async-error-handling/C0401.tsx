import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button } from "element-ui";

@Component({})
export default class C0401 extends Vue {
  /*
   * 在 vue@2.6 之前，在 Vue.config.errorHandler 全局处理函数中，
   * 只能够捕获 sync 同步方法抛出的异常，
   * 在 vue@2.6 之后，可以捕获 async 异步方法抛出的异常
   */
  public async mounted() {
    throw new Error("MOUNTED");
  }

  private async handleClick() {
    throw new Error("EVENT HANDLER");
  }

  // tslint:disable-next-line:member-ordering
  public render() {
    return <Button onClick={this.handleClick}>FOO</Button>;
  }
}
