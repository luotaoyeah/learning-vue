<template>
  <div>
    <!--
       当使用 {{}} 解析一个对象时，默认是调用 JSON.stringify() 方法，将对象转换为字符串形式
    -->
    <ElButton>{{ a }}</ElButton>
    <hr />
    <ElButton>{{ b }}</ElButton>
    <ElButton>{{ b.toString() }}</ElButton>
    <ElButton>{{ String(b) }}</ElButton>
    <ElButton>{{ b + "" }}</ElButton>
    <ElButton>{{ `${b}` }}</ElButton>
  </div>
</template>

<script lang="ts">
class A {
  x: string = "A";
}

class B {
  x: string = "B";

  /*
   * vue@2.6 新增的一个特性：
   *     如果对象实现了自己的 toString() 方法，
   *     则在使用 {{}} 解析该对象时，
   *         会使用 toString() 方法返回的字符串，
   *         而不是使用 JSON.stringify() 方法返回的字符串
   */
  toString() {
    return this.x;
  }
}

export default {
  data() {
    return {
      a: new A(),
      b: new B()
    };
  }
};
</script>
