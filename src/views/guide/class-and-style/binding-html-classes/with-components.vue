<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          如果 component 只有一个 root element，
          则 class/:class 的结果会被拼接到 root element 的 class 上面
      ------------------------------------------------------------------------------------------------------->
      <component-01 :class="['b', { c: true }]" class="a"></component-01>

      <hr />

      <component-02 class="y"></component-02>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/class-and-style.html#with-components

import component01 from './with-components.01';
import component02 from './with-components.02';

export default {
  data() {
    return {};
  },
  components: {
    'component-01': component01,
    'component-02': component02,
  },
};
</script>
