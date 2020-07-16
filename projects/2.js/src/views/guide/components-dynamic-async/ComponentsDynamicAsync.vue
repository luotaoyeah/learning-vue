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
  </div>
</template>

<script>
export default {
  name: 'ComponentsDynamicAsync',
  data() {
    return {
      currentComponent: 'CompA',
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
  },
};
</script>

<style scoped></style>
