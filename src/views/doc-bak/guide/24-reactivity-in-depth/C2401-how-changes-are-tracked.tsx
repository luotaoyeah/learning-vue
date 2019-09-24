import { Component, Vue } from "vue-property-decorator";

@Component({})
export class C2401 extends Vue {
  public render() {
    return (
      <div>
        <p>
          vue 会遍历 data 对象的所有属性, 并使用
          <code>Object.defineProperty()</code>
          将它们转换为 getter / setter
        </p>
        <p>
          <code>Object.defineProperty()</code>是 ES5 提供的方法, 因此 vue 不支持 IE8 及以下的浏览器
        </p>
        <p>getter / setter 对用户 (开发人员) 来说是不可见的, 但是 vue 通过它们实现了依赖跟踪和更改通知</p>
        <p>
          每一个组件实例都有一个对应的 watcher 实例 在组件渲染的时候, watcher 会记录下所有被组件动过的属性,
          作为自己的依赖 以后当 waatcher 的某个依赖的 setter 触发时, 会通知 watcher, 然后反过来, watcher
          会通知组件进行重新渲染
        </p>
      </div>
    );
  }
}
