<template>
  <div>
    <ul>
      <li>类型：Function</li>
      <li>默认：undefined</li>
      <li>
        描述：错误处理函数；
        <ul>
          <li>
            如果未定义错误处理器， 则组件中未被捕获的错误默认会使用
            console.error 打印到控制台；
          </li>
          <li>
            如果定义了错误处理器， 则组件中未被捕获的错误会被该处理器拦截；
          </li>
          <li>
            处理器函数接收 3 个参数：
            <ul>
              <li>err：错误对象；</li>
              <li>vm：组件实例；</li>
              <li>info：环境信息；</li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    /* 未处理的错误会被处理器拦截 */
    const a01 = a++;
    console.log(a01);

    /* 已处理的错误 不 会被处理器拦截 */
    try {
      const b01 = b++;
      console.log(b01);
    } catch (e) {
      /*  */
    }
  },
  components: {}
};
</script>
<style scoped></style>
