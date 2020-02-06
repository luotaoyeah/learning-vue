<template>
  <div>
    <section>
      <Button>person.age：{{ person.age }}</Button>
      <Button :style="{ marginLeft: '12px' }">foo：{{ foo }}</Button>
      <Button :style="{ marginLeft: '12px' }">baz：{{ baz }}</Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/data-methods.html#data-properties

import { Button } from 'ant-design-vue';

export default {
  components: {
    Button,
  },
  /*----------------------------------------------------------------------------------------------------
   * data 是一个 function，返回一个 object，
   * object 的属性会被 vue 在创建 component instance 的时候处理成 reactive，使用 proxy 实现，
   * object 的属性名不能以 $ 和 _ 开头，它们被 vue 使用了，
   *----------------------------------------------------------------------------------------------------*/
  data() {
    return {
      person: {
        name: 'luotao',
        age: 18,
      },
      baz: undefined,
    };
  },
  beforeCreate() {
    /*----------------------------------------------------------------------------------------------------
     * 在 component instance 创建之后，data property 才可用，
     *----------------------------------------------------------------------------------------------------*/
    console.assert(this.$data.person === undefined);
  },
  created() {
    /*----------------------------------------------------------------------------------------------------
     * 既可以通过 this.xxx 来访问某个 data property，
     * 也可以通过 this.$data.xxx 来访问某个 data property，
     *----------------------------------------------------------------------------------------------------*/
    console.assert(this.person === this.$data.person);

    /*----------------------------------------------------------------------------------------------------
     * 直接往 component instance 上面添加的属性，不具有 reactive 特性
     *----------------------------------------------------------------------------------------------------*/
    this.foo = 18;

    this.baz = 18;

    const timer = setInterval(() => {
      if (this.person.age === 200) {
        clearInterval(timer);
      } else {
        this.person.age += 1;
        this.foo += 1;
        this.baz += 1;
      }
    }, 1000);
  },
};
</script>
