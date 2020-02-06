<template>
  <div>
    <section>
      <!------------------------------------------------------------------------------------------------------
          `directive:argument.modifier`
          : 后面指定 directive 的 argument，
          . 后面指定 directive 的 modifier
      ------------------------------------------------------------------------------------------------------->
      <Button
        type="primary"
        v-on:click="onMouseEvent"
        v-on:contextmenu="onMouseEvent"
        v-on:dblclick="onMouseEvent"
        v-on:mouseenter="onMouseEvent"
        v-on:mouseleave="onMouseEvent"
      >
        mouse event trigger
      </Button>

      <Button :style="{ marginLeft: '12px' }">EVENT NAME：{{ eventName01 || '[ NULL ]' }}</Button>
    </section>

    <hr />

    <section>
      <!------------------------------------------------------------------------------------------------------
          .shift 表示必须同时按下 SHIFT 键才会触发 keyup 事件
      ------------------------------------------------------------------------------------------------------->
      <input type="text" v-on:keyup.shift="onKeyboardEvent" />
      <Button :style="{ marginLeft: '12px' }">KEY：{{ key || '[ NULL ]' }}</Button>
    </section>

    <hr />

    <section>
      <p>
        <Radio.Group v-model="event" v-bind:default-value="'click'" v-on:change="onDynamicEventNameChange">
          <Radio.Button value="click">click</Radio.Button>
          <Radio.Button value="dblclick">dblclick</Radio.Button>
          <Radio.Button value="mouseenter">mouseenter</Radio.Button>
          <Radio.Button value="mouseleave">mouseleave</Radio.Button>
        </Radio.Group>
      </p>

      <!------------------------------------------------------------------------------------------------------
          directive argument 可以是动态绑定的
      ------------------------------------------------------------------------------------------------------->
      <Button type="primary" v-on:[event]="onDynamicMouseEvent">mouse event trigger</Button>

      <Button :style="{ marginLeft: '12px' }">EVENT NAME：{{ eventName02 || '[ NULL ]' }}</Button>
    </section>
  </div>
</template>

<script>
// https://v3.vuejs.org/guide/template-syntax.html#directives

import { Button, Radio } from 'ant-design-vue';

export default {
  components: {
    Button,
    'Radio.Group': Radio.Group,
    'Radio.Button': Radio.Button,
  },
  data() {
    return {
      eventName01: '',
      key: '',
      event: 'click',
      eventName02: '',
    };
  },
  methods: {
    onMouseEvent(event) {
      this.eventName01 = event.type;
    },
    onKeyboardEvent(event) {
      this.key = event.key;
    },
    onDynamicMouseEvent(event) {
      this.eventName02 = event.type;
    },
    onDynamicEventNameChange(event) {
      this.event = event.target.value;
    },
  },
};
</script>
