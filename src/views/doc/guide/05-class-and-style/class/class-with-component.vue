<template>
  <div>
    <h1>3. With Components</h1>
    <h2>3.1.</h2>
    <p>
      <small>
        <i>
          在自定义组件上通过 :class 绑定的类名，会被附加到组件根元素的 class 上； 注意类的顺序，先是所有普通的
          class，再是所有的绑定的 :class；
        </i>
      </small>
    </p>
    <some-component class="class02" :class="'class03'">class="class00 class02 class01 class03"</some-component>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("some-component", {
  template: '<p class="class00" :class="\'class01\'"><slot></slot></p>'
});

export default {
  data() {
    return {};
  }
};
</script>
