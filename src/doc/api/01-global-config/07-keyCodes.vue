<template>
  <div>
    <ul>
      <li>类型：{ [key: string]: number | Array&lt;number&gt; }</li>
      <li>默认：{}</li>
      <li>
        描述：定义键码别名；
        <!--eslint-disable vue/valid-v-on-->
        <p>
          <input
            type="text"
            placeholder="8 is your lucky number"
            style="border-radius: 3px;padding: 7px;"
            v-on:keyup.lucky-eight="handleKeyup01"
          />
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleKeyup01(e) {
      alert("you pressed number 8.");
    }
  },
  components: {}
};
</script>
