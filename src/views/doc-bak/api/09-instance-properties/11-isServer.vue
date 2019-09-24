<template>
  <div>
    <ul>
      <li>
        标识当前 vue 实例是否是服务端渲染的；
        <p>
          <ElTag>$isServer: {{ $isServer }}</ElTag>
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
  components: {},
};
</script>
