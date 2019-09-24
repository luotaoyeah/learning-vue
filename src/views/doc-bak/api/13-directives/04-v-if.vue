<template>
  <div>
    <ul>
      <li>类型：any</li>
      <li>
        描述：条件渲染；根据表达式的真假条件渲染元素，当表达式为假时，元素会被销毁；当表达式为真时，元素会被重新创建；
        <ul>
          <li>
            可以用在 template 元素上；
            <p><ElSwitch v-model="show01" /></p>
            <p>
              <template v-if="show01">
                <C01 />
              </template>
            </p>
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
      show01: true,
    };
  },
  components: {
    C01: {
      template: "<ElTag>C01</ElTag>",
      destroyed() {
        console.log("C01.destroyed()");
      },
      created() {
        console.log("C01.created()");
      },
    },
  },
};
</script>
