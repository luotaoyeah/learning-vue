<template>
  <div>
    <p>
      组件名称中， 应该把等级最高的（最通用的）单词放在前面，
      描述性的单词放在后面；
    </p>
    <ul>
      <li>
        比如针对用户的添加和删除的两个组件：
        <ul>
          <li>
            不好的命名：
            <ul>
              <li>AddUser.vue</li>
              <li>EditUser.vue</li>
            </ul>
          </li>
          <li>
            好的命名：
            <ul>
              <li>UserAdd.vue</li>
              <li>UserEdit.vue</li>
            </ul>
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
  }
};
</script>
