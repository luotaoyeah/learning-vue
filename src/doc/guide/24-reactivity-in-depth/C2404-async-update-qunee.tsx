import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Button, Divider } from "ant-design-vue";

@Component({})
class C240401 extends Vue {
  public message: string = "not updated";

  /**
   *
   */
  public mounted() {
    setTimeout(() => {
      this.update();
    }, 1000);
  }

  public async update() {
    this.message = "updated";
    console.log(this.$el.textContent);
    await this.$nextTick();
    console.log(this.$el.textContent);
  }

  public render() {
    return (
      <p>
        <Button>{this.message}</Button>
      </p>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
@Component({})
export class C2404 extends Vue {
  public render() {
    return (
      <div>
        <p>
          vue 的 DOM 更新是异步的, 当数据发生改变时, 首先会被添加到更新队列中
        </p>
        <p>
          同一个数据发生多次更改,
          只会被加入更新队列一次这样避免了不必要的重复计算和渲染
        </p>
        <p>
          在下一次事件循环, vue 会将更新队列中所有的数据更改, 一次性渲染到视图中
        </p>
        <p>
          如果某个操作依赖于数据的最新状态, 我们必须在数据的更改操作之后，
          立即调用<code>Vue.nextTick()</code>方法,
          并在该方法的回调函数中执行这个操作, 这样保证了此时拿到的是最新的数据
          <Divider dashed={true} />
          <C240401 />
        </p>
      </div>
    );
  }
}
