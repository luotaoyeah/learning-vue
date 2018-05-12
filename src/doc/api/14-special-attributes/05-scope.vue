<template>
  <div>
    <ul>
      <li>
        已弃用，使用 slot-scope 代替；
      </li>
      <li>
        用法跟 slot-scope 一样，但是只能用在 template 元素上面；
        <C01 :items="items">
          <template scope="{ item }">
            <p>
              <ElButton>{{item.id}}. {{item.text}}</ElButton>
            </p>
          </template>
        </C01>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          text: "foo"
        },
        {
          id: 2,
          text: "bar"
        }
      ]
    };
  },
  components: {
    C01: {
      template: `
        <ul>
          <li v-for="item in items" :key="item.id">
            <slot :item="item">{{item.text}}</slot>
          </li>
        </ul>`,
      props: {
        items: {
          type: Array
        }
      }
    }
  }
};
</script>
<style scoped>
</style>
