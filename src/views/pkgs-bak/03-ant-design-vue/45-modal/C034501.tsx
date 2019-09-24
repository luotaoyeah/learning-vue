import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button, Modal } from "ant-design-vue";

@Component({})
export class C034501 extends Vue {
  public handleClick() {
    /*
     * 若 closable 为 true, 则确认对话框右上角会显示一个关闭按钮(X)
     */
    Modal.confirm({
      title: "CONFIRM",
      // @ts-ignore FIXME
      closable: true,
    });
  }

  public render() {
    const vm = this;

    return (
      <div>
        <Button onClick={vm.handleClick}>FOO</Button>
      </div>
    );
  }
}
