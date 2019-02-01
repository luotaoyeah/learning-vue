<template>
  <div>
    <ul>
      <li>
        类型：{ [ key: string ]: Function | { get: Function, set: Function } }
      </li>
      <li>
        描述：计算属性；
        <ul>
          <li>
            在 geteter / setter 中， this 指向组件实例对象；
            <p>
              <ElForm :model="formObj" label-width="80px">
                <ElFormItem label="x：">
                  <ElInputNumber v-model="x" />
                </ElFormItem>
                <ElFormItem label="x + 1：">
                  <ElInputNumber v-model="x01" />
                </ElFormItem>
              </ElForm>
            </p>
          </li>
          <li>
            如果属性声明为箭头函数， 在函数中 this 不再指向组件实例对象，
            函数的第一个参数指向组件实例对象；
            <p>
              <ElForm :model="formObj" label-width="80px">
                <ElFormItem label="x：">
                  <ElInputNumber v-model="x" />
                </ElFormItem>
                <ElFormItem label="x + 2："> {{ x02 }} </ElFormItem>
              </ElForm>
            </p>
          </li>
          <li>
            计算属性的值会被缓存， 只有当它依赖的其他属性的值改变时，
            才会重新计算它的值；
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 1,
      formObj: {}
    };
  },
  computed: {
    x01: {
      get() {
        return this.x + 1;
      },
      set(value) {
        this.x = value - 1;
      }
    },
    x02: vm => {
      return vm.x + 2;
    }
  },
  components: {}
};
</script>
