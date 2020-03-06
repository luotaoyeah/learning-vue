<template>
  <div>
    <ul>
      <li>HTML 代码最终会被浏览器渲染成一棵 DOM 节点树；</li>
      <li>
        每一个元素是一个节点， 每一块文本是一个节点， 每一块注释是一个节点；
      </li>
      <li>节点可以有多个子节点；</li>
      <li>
        无论是使用模板， 还是渲染方法， vue 都会自动将数据的更新同步到 HTML 上；
      </li>
    </ul>
    <h2>The Virtual DOM</h2>
    <ul>
      <li>
        vue 通过创建一棵虚拟 DOM 树（Virtual DOM）， 来追踪需要应用到真实 DOM
        树的更改；
      </li>
      <li>
        createElement() 方法返回的就是一个虚拟节点（Virtual Node）， 简称
        VNode， 它包含了对应的真实元素的相关信息， 包括它的子节点的信息；
      </li>
      <li>Virtual DOM 就是由这些 VNode 构成的一个树；</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>
