<template>
  <div>
    <ul>
      <li>由于 JS 的限制， vue 不能检测到属性的添加和删除；</li>
      <li>
        由于 vue 是在组件实例化的时候， 将 data 对象的属性转换为 getter /
        setter， 所以在组件实例化之后， 添加到 data 对象上的属性， 是不能够被
        vue 检测到的；
      </li>
      <li>
        但是可以通过 Vue.set() 或者 this.$set()，
        往已经存在的属性上添加或者修改属性；
      </li>
      <li>
        如果想要一次性添加或者修改多个属性的话， 不能够直接使用 Object.assign()
        或者 _.assign()， 将属性指派到原来的对象上， 而应该合成一个新的对象，
        再把新的对象赋值给原来的对象；
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
