<template>
  <div>
    <h1>2. Array Syntax</h1>
    <h2>2.1.</h2>
    <p>
      <small>
        <i> :class 绑定一个数组的时候，数组元素可以是字符串，表示类名； </i>
      </small>
    </p>
    <p :class="['class01']">:class="['class01']"</p>
    <h2>2.2.</h2>
    <p>
      <small> <i> 数组元素可以是 data 属性，属性值为类名； </i> </small>
    </p>
    <p :class="['class01', class02]">:class="['class01', class02]"</p>
    <h2>2.3.</h2>
    <p>
      <small>
        <i> 数组元素可以是三元表达式，根据计算结果来启用或者禁用类； </i>
      </small>
    </p>
    <p :class="['class01', class02, isActive ? 'class03' : '']">
      :class="['class01', class02, isActive ? 'class03' : '']"
    </p>
    <h2>2.4.</h2>
    <p>
      <small>
        <i> 数组元素可以是对象，对象的格式跟'对象语法'要求的对象格式一样； </i>
      </small>
    </p>
    <p class="class00" :class="['class01', class02, isActive ? 'class03' : '', classObj]">
      :class="['class01', class02, isActive ? 'class03' : '', classObj]"
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      class02: "class02",
      isActive: true,
      classObj: {
        class04: true
      }
    };
  }
};
</script>
