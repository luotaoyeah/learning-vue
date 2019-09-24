<template>
  <div>
    <h1>4. Event Modifier</h1>
    <p>
      <small>
        <i>
          我们经常需要在事件处理函数里面调用 event.preventDefault() 和 event.stopPropagatation()， vue 给 v-on
          指令提供了几个修饰符，可以很方便地实现类似的需求；
          <ul>
            <li>.stop</li>
            <li>.prevent</li>
            <li>.capture</li>
            <li>.self</li>
            <li>.once</li>
          </ul>
        </i>
      </small>
    </p>
    <h2>4.1. .prevent</h2>
    <p>
      <small>
        <i>
          .prevent 对应于 event.preventDefault()，直接使用 v-on:click.prevent 阻止超链接跳转；
        </i>
      </small>
    </p>
    <p>
      <a href="http://www.github.com" target="_blank">www.github.com（without prevent） </a>
    </p>
    <p>
      <a href="http://www.github.com" v-on:click.prevent>www.github.com（with prevent） </a>
    </p>
    <h2>4.2. .self</h2>
    <p>
      <small>
        <i> .self 修饰符一般用在父元素上，阻止子元素的事件在父元素上触发； </i>
      </small>
    </p>
    <h3>4.2.1.</h3>
    <p>
      <small>
        <i> 没有使用 .self 修饰符，点击子元素和父元素都会触发事件； </i>
      </small>
    </p>
    <div style="border: 2px solid red;padding: 10px;" v-on:click="handleClickParent01">
      parent（DIV）
      <span style="border: 2px solid green;padding: 10px;">child（SPAN）</span>
    </div>
    <h3>4.2.2.</h3>
    <p>
      <small>
        <i>
          使用 .self 修饰符，只有点击父元素才会触发事件，点击子元素不会触发事件；
        </i>
      </small>
    </p>
    <div style="border: 2px solid red;padding: 10px;" v-on:click.self="handleClickParent01">
      parent（DIV）
      <span style="border: 2px solid green;padding: 10px;">child（SPAN）</span>
    </div>
    <h2>4.3. .stop</h2>
    <p>
      <small>
        <i> .stop 修饰符一般用在子元素上，阻止事件继续往上冒泡； </i>
      </small>
    </p>
    <h3>4.3.1.</h3>
    <p>
      <small>
        <i>
          没有使用 .stop 修饰符，在子元素触发事件后，在父元素也会触发事件；
        </i>
      </small>
    </p>
    <div style="border: 2px solid red;padding: 10px;" v-on:click="handleClickParent02">
      parent（DIV）
      <span style="border: 2px solid green;padding: 10px;" v-on:click="handleClickChild02">child（SPAN） </span>
    </div>
    <h3>4.3.2.</h3>
    <p>
      <small>
        <i> 使用 .stop 修饰符，在子元素触发事件后，在父元素不会触发事件； </i>
      </small>
    </p>
    <div style="border: 2px solid red;padding: 10px;" v-on:click="handleClickParent02">
      parent（DIV）
      <span style="border: 2px solid green;padding: 10px;" v-on:click.stop="handleClickChild02">child（SPAN） </span>
    </div>
    <h2>4.4. .capture</h2>
    <p>
      <small>
        <i> .capture 修饰符一般用在父元素上，捕获子元素的事件； </i>
      </small>
    </p>
    <h3>4.4.1.</h3>
    <p>
      <small>
        <i>
          没有使用 .capture 修饰符，先在子元素触发事件，再在父元素触发事件；
        </i>
      </small>
    </p>
    <div style="border: 2px solid red;padding: 10px;" v-on:click="handleClickParent03">
      parent（DIV）
      <span style="border: 2px solid green;padding: 10px;" v-on:click="handleClickChild03">child（SPAN） </span>
    </div>
    <h3>4.4.2.</h3>
    <p>
      <small>
        <i> 使用 .capture 修饰符，先在父元素触发事件，再在子元素触发事件； </i>
      </small>
    </p>
    <div style="border: 2px solid red;padding: 10px;" v-on:click.capture="handleClickParent03">
      parent（DIV）
      <span style="border: 2px solid green;padding: 10px;" v-on:click="handleClickChild03">child（SPAN） </span>
    </div>
    <h2>4.5. .once</h2>
    <h3>4.5.1.</h3>
    <p>
      <small> <i> .once 表示最多触发一次事件； </i> </small>
    </p>
    <div style="border: 2px solid red;padding: 10px;" v-on:click.once="handleClickParent04">
      parent（DIV）
    </div>
    <h3>4.5.2.</h3>
    <p>
      <small>
        <i>
          与其他的修饰符不同，.once 不仅可以用在原生 DOM 事件上，也可以用在组件的自定义事件上；
        </i>
      </small>
    </p>
    <my-component v-on:my-click.once="handleMyClick"></my-component>
    <h2>4.6. .passive</h2>
    <p>
      <small>
        <i>
          .passive 表明在事件回调里面不会调用 event.preventDefault()，
          如果调用了，浏览器会忽略，并在控制台打印一条警告； 所以 .passive 和 .prevent 不要一起使用；
        </i>
      </small>
    </p>
  </div>
</template>

<script>
import Vue from "vue";

Vue.component("my-component", {
  template:
    '<div style="border: 2px solid red;padding: 10px;" v-on:click=\'$emit("my-click", $event)\'>my-component</div>',
});

export default {
  data() {
    return {};
  },
  methods: {
    handleClickParent01(e) {
      if (e) {
        alert(`parent: ${e.target.tagName}`);
      }
    },
    handleClickChild02(e) {
      if (e) {
        alert(`child: ${e.target.tagName}`);
      }
    },
    handleClickParent02(e) {
      if (e) {
        alert(`parent: ${e.target.tagName}`);
      }
    },
    handleClickChild03(e) {
      if (e) {
        alert(`child: ${e.target.tagName}`);
      }
    },
    handleClickParent03(e) {
      if (e) {
        alert(`parent: ${e.target.tagName}`);
      }
    },
    handleClickParent04(e) {
      if (e) {
        alert(`parent: ${e.target.tagName}`);
      }
    },
    handleMyClick(e) {
      if (e) {
        alert(`my-component: ${e.target.tagName}`);
      }
    },
  },
};
</script>
