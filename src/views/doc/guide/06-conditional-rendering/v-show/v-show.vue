<template>
  <div>
    <h2>1.1.</h2>
    <p>
      <small>
        <i>
          v-show 类似于 v-if，区别在于使用 v-show 的元素始终都会渲染到最终的 DOM 中去， 只是会根据绑定的值，动态更改 CSS
          属性 display 的值；
        </i>
      </small>
    </p>
    <p v-show="show">I'm always existing in the DOM.</p>
    <h2>1.2.</h2>
    <p>
      <small>
        <i>
          v-show 不能用在 template 元素上面，因为 template 不会渲染到最终的 DOM 中去；
        </i>
      </small>
    </p>
    <h2>1.3. v-if vs v-show</h2>
    <ul>
      <li>
        通过 v-if 切换元素的渲染，元素的子组件以及绑定的事件都会销毁和重新创建；
      </li>
      <li>
        如果 v-if 绑定的属性的初始值为 false，那么元素在一开始不会被创建， 直到绑定的属性的值为 true
        时，元素才会第一次被创建； 而 v-show 绑定的元素一开始就会被创建，后面则是通过控制 display
        属性的值来控制元素的显示和隐藏；
      </li>
      <li>
        如果一个元素切换的次数比较多，初始化消耗的资源比较少，那么适用于 v-show；
        如果一个元素切换的次数比较少，初始化消耗的资源比较多，那么适用于 v-if；
      </li>
    </ul>
    <h2>1.4. v-if with v-for</h2>
    <p>
      <small>
        <i>
          当 v-if 和 v-for 一起使用（绑定到同一个元素上）时，v-for 的优先级要高于 v-if；
        </i>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  }
};
</script>
