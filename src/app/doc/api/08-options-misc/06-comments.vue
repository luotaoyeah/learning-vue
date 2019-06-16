<template>
  <div>
    <ul>
      <li>
        是否保留模板中的注释，默认不保留；
        <p>
          <C01 />
          <C02 />
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
  components: {
    C01: {
      template: "<ElButton>C01<!--C01--></ElButton>"
    },
    C02: {
      template: "<ElButton>C01<!--C02--></ElButton>",
      comments: true
    }
  }
};
</script>
