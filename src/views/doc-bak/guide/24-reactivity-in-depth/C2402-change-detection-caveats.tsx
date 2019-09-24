import { Component, Vue } from "vue-property-decorator";

@Component({})
export class C2402 extends Vue {
  public render() {
    return (
      <div>
        <p>由于 JS 的限制, vue 不能检测到属性的添加和删除</p>
        <p>
          由于 vue 是在组件实例化的时候, 将 data 对象的属性转换为 getter / setter, 所以在组件实例化之后, 添加到 data
          对象上的属性, 是不能够被 vue 检测到的
        </p>
        <p>
          但是可以通过<code>Vue.set()</code>或者<code>this.$set()</code>, 往已经存在的属性上添加或者修改属性
        </p>
        <p>
          如果想要一次性添加或者修改多个属性的话, 不能够直接使用
          <code>Object.assign()</code> 或者<code>_.assign()</code>, 将属性指派到原来的对象上, 而应该合成一个新的对象,
          再把新的对象赋值给原来的对象
        </p>
      </div>
    );
  }
}
