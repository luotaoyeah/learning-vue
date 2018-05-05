<template>
  <div>
    <ul>
      <li>
        捕获子孙组件抛出的错误；
        <p>
          <C03/>
        </p>
        <ul>
          <li>
            如果定义了 Vue.config.errorHandler() 函数，
            错误会传递到该函数；
          </li>
          <li>
            如果组件继承链上有多个 errorCaptured() 函数，
            它们会从下到上依次触发；
          </li>
          <li>
            如果在 errorCaptured() 里面抛出了其他的错误，
            该错误会和捕获的错误一起传递到 Vue.config.errorHandler()；
          </li>
          <li>
            如果在 errorCaptured() 返回了 false，
            则错误不会继续往上面的 errorCaptured() 传递，
            也不会往 Vue.config.errorHandler() 传递；
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
  components: {
    C03: {
      template: "<div><C02/></div>",
      components: {
        C02: {
          template: "<div><C01/></div>",
          components: {
            C01: {
              template: "<ElTag>C01</ElTag>",
              mounted() {
                throw new Error("ERROR.C01.mounted()");
              }
            }
          },
          errorCaptured(e, vm, info) {
            console.log("C02.errorCaptured():", e.message);
            return false;
          }
        }
      },
      errorCaptured(e, vm, info) {
        console.log("C03.errorCaptured():", e.message);
        throw new Error("ERROR.C03.errorCaptured()");
      }
    }
  }
};
</script>
<style scoped>
</style>
