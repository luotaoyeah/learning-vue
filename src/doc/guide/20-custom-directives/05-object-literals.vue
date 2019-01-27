<template>
  <div>
    <ul>
      <li>
        指令的表达式的值可以是任意合法的 JS 表达式， 所以可以是一个对象字面量；
        <p
          style="border: 2px solid #dddddd;border-radius: 3px;padding: 7px;"
          v-directive200501="{ name: 'tom', age: 18 }"
        ></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  directives: {
    directive200501: {
      bind(el, binding) {
        el.innerHTML = JSON.stringify(binding.value, null, 4);
      }
    }
  },
  components: {}
};
</script>
