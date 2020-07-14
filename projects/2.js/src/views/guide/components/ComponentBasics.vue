<template>
  <div>
    <fieldset>
      <legend>Using v-model on Components</legend>

      <p>v-model 用在自定义的组件上时, 默认的 props 是 'value', 默认的 event 是 'input'.</p>
      <p>
        <custom-input v-model="data01"></custom-input>

        {{ data01 }}
      </p>
    </fieldset>

    <fieldset>
      <legend>Content Distribution with Slots</legend>

      <alert-box>出错啦.</alert-box>
    </fieldset>
  </div>
</template>

<script>
import AlertBox from '@/views/guide/components/AlertBox';
import CustomInput from '@/views/guide/components/CustomInput';

export default {
  name: 'ComponentBasics',
  data() {
    return {
      data01: '1',
    };
  },
  components: {
    CustomInput,
    AlertBox,
  },
};
</script>

<style scoped></style>
