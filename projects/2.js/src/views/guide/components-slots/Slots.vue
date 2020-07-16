<template>
  <div>
    <fieldset>
      <legend>Named Slots</legend>

      <p>有多个 slot 时, 每个 slot 都可以声明 name, 然后在用的时候, 通过 v-slot:xxx 来指定要插入到哪个 slot.</p>

      <p>如果 slot 没有声明 name, 则默认为 'default'.</p>

      <p>v-slot: 可以简写为 #.</p>

      <comp-a>
        <template v-slot:legend>LEGEND</template>
        <template v-slot:content>CONTENT</template>

        <template #default>DEFAULT</template>
      </comp-a>
    </fieldset>

    <fieldset>
      <legend>Scoped Slots</legend>

      <p>子组件通过 slot 往父组件传数据, 这种 slot 叫做 scoped slot.</p>

      <comp-b></comp-b>
      <comp-b>
        <template v-slot="{ item }">
          <span style="color: red; font-style: italic">{{ item.name }}</span>
        </template>
      </comp-b>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Slots',
  components: {
    CompA: {
      template: `
        <fieldset>
        <legend>
          <slot name='legend'></slot>
        </legend>

        <p style='border:1px solid red;'>
          <slot></slot>
        </p>

        <p style='border:1px solid blue;'>
          <slot name='content'></slot>
        </p>
        </fieldset>
      `,
      data() {
        return {};
      },
    },
    CompB: {
      template: `
        <ul>
        <li v-for='item in items'>
          <slot name='default' v-bind:item='item'>{{ item.name }}</slot>
        </li>
        </ul>
      `,
      data() {
        return {
          items: [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            { id: 3, name: 'C' },
          ],
        };
      },
    },
  },
};
</script>

<style scoped></style>
