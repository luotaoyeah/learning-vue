import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Button } from "element-ui";

/**
 *
 */
@Component({})
export class C1001 extends Vue {
  private numCount: number = 0;

  public render() {
    return (
      <div>
        <C01
          count={this.numCount}
          {...{
            on: {
              /*
               * 使用 $emit() 触发一个事件的时候，触发的事件名称必须跟监听时的事件名称完全一致，
               * 如下，触发的事件名称为 update:numCount，而监听的事件名称为 update:num-count，
               * 因此无法正确触发监听事件
               */
              "update:num-count": (count: number) => {
                this.numCount = count;
              }
            }
          }}
        />
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({})
class C01 extends Vue {
  @Prop({})
  public count!: number;

  public render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.$emit("update:numCount", this.count + 1);
          }}
        >
          {this.count}
        </Button>
      </div>
    );
  }
}
