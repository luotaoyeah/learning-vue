<template>
  <div>
    <h1>1. String Syntax</h1>
    <p>
      <small>
        <i>
          :style 绑定的 data 属性的属性值是字符串，表示普通的 style 字符串形式；
        </i>
      </small>
    </p>
    <p :style="style01">:style="style01"</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      style01: "color: red;"
    };
  }
};
</script>
