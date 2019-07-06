<template>
  <div>
    <ul>
      <li>
        如果一个 mixin 和一个组件包含相同的选项， 这些选项会使用合适的策略进行合并；
      </li>
      <li>
        data 选项会进行浅层合并， 如果有同名属性， 组件的属性会覆盖 mixin 的属性；
        <p><MyComponent190201></MyComponent190201></p>
      </li>
      <li>
        同名的生命周期函数会被合并到一个数组中， 都会被执行， mixin 的函数在组件的函数前面执行；
        <p><MyComponent190202></MyComponent190202></p>
      </li>
      <li>
        类似 methods，components，directives 这些类型为对象的选项， 会被合并到一个对象， 如果有同名属性，
        组件的属性会覆盖 mixin 的属性；
        <p><MyComponent190203></MyComponent190203></p>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";

const MyMixin01 = {
  data() {
    return {
      message: "tom",
      bar: "bar"
    };
  }
};

Vue.component("MyComponent190201", {
  template: "<el-button @click='handleClick01'>show this.$data</el-button>",
  data() {
    return {
      message: "cat",
      foo: "foo"
    };
  },
  methods: {
    handleClick01() {
      console.log(JSON.stringify(this.$data, null, 4));
    }
  },
  mixins: [MyMixin01]
});

const MyMixin02 = {
  created() {
    console.log("MyMixin02.created()");
  },
  mounted() {
    console.log("MyMixin02.mounted()");
  }
};

Vue.component("MyComponent190202", {
  template: "<el-button>MyComponent190202</el-button>",
  created() {
    console.log("MyComponent190202.created()");
  },
  mounted() {
    console.log("MyComponent190202.mounted()");
  },
  mixins: [MyMixin02]
});

const MyMixin03 = {
  methods: {
    hello() {
      console.log("MyMixin03.hello()");
    },
    foo() {
      console.log("MyMixin03.foo()");
    }
  }
};

Vue.component("MyComponent190203", {
  template: "<el-button @click='test'>MyComponent190203</el-button>",
  methods: {
    hello() {
      console.log("MyComponent190203.hello()");
    },
    bar() {
      console.log("MyComponent190203.bar()");
    },
    test() {
      this.hello();
      this.foo();
      this.bar();
    }
  },
  mixins: [MyMixin03]
});

export default {
  data() {
    return {};
  },
  components: {}
};
</script>
