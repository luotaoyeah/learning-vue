<template>
  <div>
    <h1>6. Sending Messages to Parents with Events</h1>
    <h2>6.1.</h2>
    <small>
      <ul>
        <li>我们可以在子组件中通过 $emit() 方法触发一个事件；</li>
        <li>然后在父组件中，通过 v-on 来监听这个事件；</li>
      </ul>
    </small>
    <post
      :title="title01"
      :font-size="fontSize01"
      @zoom-in="fontSize01++"
    ></post>
    <post
      :title="title02"
      :font-size="fontSize01"
      @zoom-in="fontSize01++"
    ></post>
    <h2>6.2. Emitting a Value with an Event</h2>
    <small>
      <ul>
        <li>
          使用 $emit()
          方法触发事件时，第一个参数为事件名称，从第二个参数开始，为自定义事件参数；
        </li>
        <li>在父组件监听事件的地方，可以通过 $event 获取第一个参数；</li>
        <li>如果有多个参数，则事件监听处理器必须使用方法；</li>
      </ul>
    </small>
    <post02
      :title="title01"
      :font-size="fontSize02"
      @zoom-in="fontSize02 += $event"
    ></post02>
    <post02
      :title="title02"
      :font-size="fontSize02"
      @zoom-in="handleFontSize"
    ></post02>
    <h2>6.3. Using v-model on Components</h2>
    <small>
      <ul>
        <li>
          前面提过，v-model 指令实际上是一个语法糖， 当它用在原生 DOM
          元素上时，它对应了两个操作：
          <ul>
            <li>绑定元素的 value 值；</li>
            <li>在 input 事件中，更新 value 值；</li>
          </ul>
        </li>
      </ul>
    </small>
    <input
      type="text"
      v-model="searchText01"
      style="padding: 7px;border-radius: 3px;"
    />
    <input
      type="text"
      style="padding: 7px;border-radius: 3px;"
      v-bind:value="searchText01"
      v-on:input="searchText01 = $event.target.value"
    />
    <small>
      <ul>
        <li>
          如果 v-model 要在自定义组件上使用，需要满足以下两个条件：
          <ul>
            <li>组件要有一个名叫 value 的 props 属性；</li>
            <li>
              组件要在适当的时候，触发一个名叫 input 的自定义事件， 且将新的
              value 值，作为参数传递给 $emit() 方法；
            </li>
          </ul>
        </li>
      </ul>
    </small>
    <CustomInput v-model="searchText01"></CustomInput>
  </div>
</template>
<script>
import Vue from "vue";

Vue.component("post", {
  template: `
  <div>
    <button @click="$emit('zoom-in')">zoom in</button>
    <i :style="{fontSize: fontSize + 'px' }">{{title}}</i>
</div>
`,
  props: ["title", "fontSize"]
});

Vue.component("post02", {
  template: `
  <div>
    <button @click="$emit('zoom-in', 2, 'tom')">zoom in</button>
    <i :style="{fontSize: fontSize + 'px' }">{{title}}</i>
</div>
`,
  props: ["title", "fontSize"]
});

Vue.component("CustomInput", {
  template: `
  <div>
    CustomInput:
    <input type="text" style="padding: 7px;border-radius: 3px;" :value="value" v-on:input="$emit('input', $event.target.value)">
</div>
`,
  props: ["value"]
});

export default {
  data() {
    return {
      title01: "HELLO WORLD",
      title02: "FOO BAR",
      fontSize01: 10,
      fontSize02: 10,
      searchText01: ""
    };
  },
  methods: {
    handleFontSize(fontSizeOffset, message) {
      this.fontSize02 += fontSizeOffset;
      this.title02 += message;
    }
  }
};
</script>
