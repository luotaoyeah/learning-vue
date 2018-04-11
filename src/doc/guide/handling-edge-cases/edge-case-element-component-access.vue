<template>
  <div>
    <h1>1. Element & Component Access</h1>
    <small>
      <ul>
        <li>
          大部分情况下，应该避免手动操作 DOM 元素；
        </li>
      </ul>
    </small>
    <h2>1.1. Accessing the Root Instance</h2>
    <small>
      <ul>
        <li>
          在子组件中，可以通过 $root 访问根组件实例；
          <ul>
            <li>
              $root.message: {{$root.message}}
            </li>
          </ul>
        </li>
      </ul>
    </small>
    <h2>1.2. Accessing the Parent Component Instance</h2>
    <small>
      <ul>
        <li>
          在子组件中，可以通过 $parent 访问父组件（直接父组件）实例；
        </li>
        <li>
          通常情况下，不要使用 $parent 来直接修改父组件的数据；
        </li>
      </ul>
    </small>
    <h2>1.3. Accessing Child Component Instance</h2>
    <h2>1.4. Dependency Injection</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
</style>
