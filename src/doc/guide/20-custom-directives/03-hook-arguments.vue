<template>
  <div>
    <ul>
      <li>
        指令的钩子函数会被传递一下几个参数：
        <ul>
          <li>
            el ：
            指令绑定的 DOM 元素，
            可以通过 el 来直接操作 DOM；
            <p>
              <input
                type="text"
                style="padding: 7px;border-radius: 3px;"
                v-red-border
              >
            </p>
          </li>
          <li>
            binding ：
            指令绑定对象，
            包含以下属性：
            <ul>
              <li>
                name ：
                指令的名称，
                不包含 v- 前缀；
              </li>
              <li>
                value ：
                指令的表达式的值；
              </li>
              <li>
                oldValue ：
                指令的表达式的旧值；
                只在 update 和 componentUpdated 里面有效；
              </li>
              <li>
                expression ：
                指令的表达式（字符串）；
              </li>
              <li>
                arg ：
                指令后边通过冒号（:）指定的参数；
              </li>
              <li>
                modifiers ：
                指令后边通过点（.）指定的修饰符对象；
              </li>
            </ul>
            <p
              style="border: 2px solid #dddddd;border-radius: 3px;padding: 7px;"
              v-demo-directive:foo.ctrl.exact="message"
            ></p>
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
      message: "hello"
    };
  },
  directives: {
    redBorder: {
      bind(el) {
        el.style.borderColor = "#ff0000";
      }
    },
    demoDirective: {
      bind(el, binding) {
        el.innerHTML = `
          name ：${JSON.stringify(binding.name)}<br/>
          value ：${JSON.stringify(binding.value)}<br/>
          oldValue ：${JSON.stringify(binding.oldValue)}<br/>
          expression ：${JSON.stringify(binding.expression)}<br/>
          arg ：${JSON.stringify(binding.arg)}<br/>
          modifiers ：${JSON.stringify(binding.modifiers, null, 4)}
        `;
      }
    }
  },
  components: {}
};
</script>
<style scoped>
</style>
