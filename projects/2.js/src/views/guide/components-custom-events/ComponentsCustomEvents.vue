<template>
  <div>
    <fieldset>
      <legend>Customizing Component v-model</legend>

      <p>
        <comp-a v-model="data01"></comp-a>
        {{ data01 }}
      </p>
    </fieldset>

    <fieldset>
      <legend>Binding Native Events to Components</legend>

      <p>.native 表示: 监听组件的根元素上的这个事件, 否则默认就是监听组件本身的这个事件.</p>

      <comp-b @click.native="onClick"></comp-b>
    </fieldset>

    <fieldset>
      <legend>.sync Modifier</legend>

      <p>
        v-model 用来实现双向绑定, 但是一个组件上最多只能用一次 v-model. 如果组件中有多个 props 都需要实现双向绑定, 第一种方式是不要使用 v-model 这个语法糖,
        而是直接绑定属性和事件. 第二种方式是使用 update:xxx 这个语法糖.
      </p>

      <comp-d :prop01="data02" :prop02.sync="data03" @update:prop01="data02 = $event"></comp-d>

      <p>{{ data02 }}</p>
      <p>{{ data03 }}</p>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ComponentsCustomEvents',
  data() {
    return { data01: '1', data02: '2', data03: '3' };
  },
  methods: {
    onClick(event) {
      console.log(event.target);
    },
  },
  components: {
    CompA: {
      template: `
        <input type='text' :value='prop01' @input='onInput'>
      `,
      props: { prop01: { type: String } },
      /*
       * v-model 用在自定义组件上时, 默认使用 value / input,
       * 可以通过 model 选项来设置为其他的 prop / event.
       */
      model: { prop: 'prop01', event: 'event01' },
      methods: {
        onInput(event) {
          this.$emit('event01', event.target.value);
        },
      },
    },
    CompB: {
      template: `
        <comp-c>
        <button @click.stop='$emit("click", $event)'>CompB</button>
        </comp-c>
      `,
      components: {
        CompC: {
          template: `
            <p style="border: 1px solid red; border-radius: 3px; padding: 12px;">
              <slot></slot>
            </p>
          `,
          data() {
            return {};
          },
        },
      },
    },
    CompD: {
      template: `
        <p>
        <input type='text' :value='prop01' @input="$emit('update:prop01', $event.target.value)" />
        <input type='text' :value='prop02' @input="$emit('update:prop02', $event.target.value)" />
        </p>
      `,
      props: ['prop01', 'prop02'],
    },
  },
};
</script>

<style scoped></style>
