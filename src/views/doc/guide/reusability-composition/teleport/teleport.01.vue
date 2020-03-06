<template>
  <button @click="value = true">open</button>

  <!------------------------------------------------------------------------------------------------------
      通过 to 指定父元素，
  ------------------------------------------------------------------------------------------------------->
  <teleport to="body">
    <div
      v-if="value"
      :style="{
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        background: 'rgba(0,0,0,0.5)',
      }"
    >
      <div
        :style="{
          position: 'absolute',
          display: 'inline-block',
          width: '400px',
          height: '200px',
          borderRadius: '3px',
          background: '#fff',
          top: 'calc(50% - 100px)',
          left: 'calc(50% - 200px)',
          border: '2px solid #333',
        }"
      >
        <button
          :style="{
            position: 'absolute',
            bottom: '12px',
            right: '0px',
          }"
          @click="value = false"
        >
          close
        </button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ['modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<style lang="less" scoped>
button {
  border-radius: 3px;
  margin-right: 12px;
}
</style>
