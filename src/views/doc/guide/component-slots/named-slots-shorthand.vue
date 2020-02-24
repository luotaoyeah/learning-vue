<template>
  <fieldset>
    <!------------------------------------------------------------------------------------------------------
        v-slot:xxx 可以简写为 #xxx，
    ------------------------------------------------------------------------------------------------------->
    <my-button>
      <template v-slot:default>CLICK</template>
    </my-button>
    <my-button>
      <template #default>CLICK</template>
    </my-button>
  </fieldset>
</template>

<script>
// https://v3.vuejs.org/guide/component-slots.html#named-slots-shorthand

import comp01 from './named-slots-shorthand.01.vue';

export default {
  components: {
    'my-button': comp01,
  },
};
</script>
