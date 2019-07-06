<template>
  <div>
    <p>
      组合使用 v-if 和 v-else 的时候， 如果两个元素的类型一样（比如都是 div）， 则最好分别都设置 key 属性；
    </p>
    <p>
      因为 vue 为了高效渲染， 在切换显示同类型的元素时， 会重用现有的元素； 这可能会导致非预期的行为， 此时为元素设置
      key 属性， 就可以阻止 vue 的这种行为；
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
