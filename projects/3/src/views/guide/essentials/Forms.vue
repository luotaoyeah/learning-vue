<template>
  <fieldset>
    <legend>form-input-bindings</legend>

    <!--对于 text input 和 textarea, v-model 对应的属性和事件为 value/input-->

    <div>
      <p>{{ value01 }}</p>
      <input v-model="value01" type="text" />
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

  <fieldset>
    <legend>value-bindings</legend>

    <!--可以使用 true-value / false-value 来设置单选的 checkbox 的绑定值(默认为 true/false)-->
    <div>
      <p>{{ value08 }}</p>

      <!--<input v-model="value08" :false-value="'no'" :true-value="'yes'" type="checkbox" />-->
    </div>

    <hr />

    <!--多选的 checkbox, 通过 :value 设置绑定值-->
    <div>
      <p>{{ value09 }}</p>
      <ul>
        <li><input v-model="value09" type="checkbox" :value="{ value: 'a' }" /> a</li>
        <li><input v-model="value09" type="checkbox" :value="{ value: 'b' }" /> b</li>
        <li><input v-model="value09" type="checkbox" :value="{ value: 'c' }" /> c</li>
      </ul>
    </div>

    <hr />

    <!--radio 通过 :value 设置绑定值-->
    <div>
      <p>{{ value10 }}</p>
      <ul>
        <li><input v-model="value10" type="radio" :value="{ value: 'a' }" /> a</li>
        <li><input v-model="value10" type="radio" :value="{ value: 'b' }" /> b</li>
        <li><input v-model="value10" type="radio" :value="{ value: 'c' }" /> c</li>
      </ul>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
  // http://localhost:8888/guide/essentials/forms
  import { ref } from 'vue';

  const value01 = ref('foo');
  const value02 = ref('foo');

  const value03 = ref(true);
  const value04 = ref(['a']);

  const value05 = ref('a');

  const value06 = ref('a');
  const value07 = ref(['a']);

  // --------------------------------------------------
  const value08 = ref('yes');
  const value09 = ref([]);
  const value10 = ref({ value: 'b' });
</script>

<style lang="css" scoped></style>
