<template>
  <p><button :style="{ borderRadius: '3px' }" @click="reverse()">reverse</button></p>

  <section>
    <!------------------------------------------------------------------------------------------------------
        如果没有设置 :key，则当数据变更时，整个组件列表会重新渲染，组件的状态会丢失，
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
        如果设置了 :key，则当数据变更时，根据 key 找到对应的组件会被重用，组件的状态得以保持，
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
      this.items = this.items.reverse();
    },
  },
  components: {
    'comp-01': comp01,
  },
};
</script>
