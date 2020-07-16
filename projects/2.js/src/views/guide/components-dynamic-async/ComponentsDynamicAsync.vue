<template>
  <div>
    <fieldset>
      <legend>keep-alive with Dynamic Components</legend>

      <ul>
        <li>CompA<input v-model="currentComponent" type="radio" value="CompA" /></li>
        <li>CompB<input v-model="currentComponent" type="radio" value="CompB" /></li>
      </ul>

      <keep-alive>
        <component :is="currentComponent"></component>
      </keep-alive>
    </fieldset>

    <fieldset>
      <legend>Async Components</legend>

      <p>异步组件 (Async Component) 在真正渲染的时候才会加载, 加载之后会被缓存.</p>

      <ul>
        <li>CompB<input v-model="currentComponent02" type="radio" value="CompB" /></li>
        <li>CompC<input v-model="currentComponent02" type="radio" value="CompC" /></li>
      </ul>

      <keep-alive>
        <component :is="currentComponent02"></component>
      </keep-alive>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'ComponentsDynamicAsync',
  data() {
    return {
      currentComponent: 'CompA',
      currentComponent02: 'CompB',
    };
  },
  components: {
    CompA: {
      name: 'CompA',
      template: `
        <fieldset>
        <legend>CompA</legend>

        <input type='text'>
        </fieldset>
      `,
      data() {
        return {};
      },
      activated() {
        console.log('CompA.activated()');
      },
      deactivated() {
        console.log('CompA.deactivated()');
      },
    },
    CompB: {
      name: 'CompB',
      template: `
        <fieldset>
        <legend>CompB</legend>

        <input type='text'>
        </fieldset>
      `,
      data() {
        return {};
      },
      activated() {
        console.log('CompB.activated()');
      },
      deactivated() {
        console.log('CompB.deactivated()');
      },
    },
    CompC: () => import('./CompC'),
  },
};
</script>

<style scoped></style>
