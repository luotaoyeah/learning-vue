<template>
  <fieldset>
    <legend>form-input-bindings</legend>

    <!--对于 text input 和 textarea, v-model 对应的属性和事件为 value/input-->

    <div>
      <p>{{ value01 }}</p>
      <input v-model="value01" type="text" />
      <input :value="value01" type="text" @input="value01 = $event.target.value" />
    </div>

    <hr />

    <div>
      <p>{{ value02 }}</p>
      <textarea v-model="value02"></textarea>
    </div>

    <hr />

    <!--单选的 checkbox, 绑定值为 true/false (boolean)-->
    <div>
      <p>{{ value03 }}</p>
      <input v-model="value03" type="checkbox" />
    </div>

    <hr />

    <!--多选的 checkbox, 绑定值为数组 (Array<string>)-->
    <div>
      <p>{{ value04 }}</p>
      <ul>
        <li><input v-model="value04" type="checkbox" value="a" /> a</li>
        <li><input v-model="value04" type="checkbox" value="b" /> b</li>
        <li><input v-model="value04" type="checkbox" value="c" /> c</li>
      </ul>
    </div>

    <hr />

    <!--radio 绑定值为 (string)-->
    <div>
      <p>{{ value05 }}</p>
      <ul>
        <li><input v-model="value05" type="radio" value="a" /> a</li>
        <li><input v-model="value05" type="radio" value="b" /> b</li>
        <li><input v-model="value05" type="radio" value="c" /> c</li>
      </ul>
    </div>

    <!--单选的 select-->
    <div>
      <p>{{ value06 }}</p>
      <select v-model="value06">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
    </div>

    <!--多选的 select-->
    <div>
      <p>{{ value07 }}</p>
      <select v-model="value07" multiple>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  // http://localhost:8888/guide/essentials/forms

  const value01 = ref('foo');
  const value02 = ref('foo');

  const value03 = ref(true);
  const value04 = ref(['a']);

  const value05 = ref('a');

  const value06 = ref('a');
  const value07 = ref(['a']);
</script>

<style lang="css" scoped></style>
