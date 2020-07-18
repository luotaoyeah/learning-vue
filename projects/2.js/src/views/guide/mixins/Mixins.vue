<template>
  <div>
    <fieldset>
      <legend>Mixins</legend>

      <ol>
        <li>data 会进行深层次的属性合并, 如果有同名属性, 组件的优先.</li>

        <li>lifecycle hook 会放入一个数组, 组件的在后, 依次执行.</li>

        <li>methods / components / directives 等对象类型的, 会合并到一个对象, 如果有冲突, 组件的优先.</li>
      </ol>

      <comp-a></comp-a>
    </fieldset>
  </div>
</template>

<script>
/** @type { typeof Vue } */
const mixin01 = {
  data() {
    return {
      x: '1x',
      y: {
        y1: '1y1',
        y2: '1y2',
      },
    };
  },
  created() {
    console.log('mixin01.created()');
  },
  methods: {
    fn01() {
      console.log('mixin01.fn01()');
    },
    fn02() {
      console.log('mixin01.fn02()');
    },
  },
};

export default {
  name: 'Mixins',
  components: {
    CompA: {
      template: `<p></p>`,
      mixins: [mixin01],
      data() {
        return {
          y: { y2: '2y2', y3: '2y3' },
          z: '2z',
        };
      },
      created() {
        console.assert(JSON.stringify(this.$data) === '{"y":{"y2":"2y2","y3":"2y3","y1":"1y1"},"z":"2z","x":"1x"}');

        console.log('CompA.created()');
        this.fn01();
        this.fn02();
      },
      methods: {
        fn02() {
          console.log('CompA.fn02()');
        },
      },
    },
  },
};
</script>

<style scoped></style>
