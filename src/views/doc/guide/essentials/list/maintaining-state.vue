<template>
  <p><button :style="{ borderRadius: '3px' }" @click="reverse()">reverse</button></p>

  <section>
    <!------------------------------------------------------------------------------------------------------
        当数据发生变更时，如果没有设置 :key，则会尽可能重用对应位置的组件元素，会直接修改组件的状态属性，因此组件的状态会丢失，
        简而言之，组件没有重新排序，但是数据跟组件的对应关系发生了变化，
    ------------------------------------------------------------------------------------------------------->
    <ul>
      <!--eslint-disable-next-line vue/require-v-for-key-->
      <li v-for="item of items">
        <comp-01 :value="item.value"></comp-01>
      </li>
    </ul>
  </section>

  <hr />

  <section>
    <!------------------------------------------------------------------------------------------------------
        当数据发生变更时，如果设置了 :key，则会根据 key 找到对应的组件元素，组件元素可能会被重新排序，
        但是组件元素的状态数据不会被修改，组件的状态得以保持，
        简而言之，组件可能重新排序，但是数据跟组件的对应关系没有变化，

        因此如果 key 发生了变更，则对应的组件一定会重新创建并且渲染，
    ------------------------------------------------------------------------------------------------------->
    <ul>
      <li v-for="item of items" :key="item.id">
        <comp-01 :value="item.value"></comp-01>
      </li>
    </ul>
  </section>
</template>

<script>
// https://v3.vuejs.org/guide/list.html#maintaining-state

import { cloneDeep } from 'lodash-es';
import comp01 from './maintaining-state.01';

export default {
  data() {
    return {
      items: [
        { id: '1', value: 'a' },
        { id: '2', value: 'b' },
        { id: '3', value: 'c' },
      ],
    };
  },
  methods: {
    reverse() {
      this.items = cloneDeep(this.items.reverse());
    },
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
