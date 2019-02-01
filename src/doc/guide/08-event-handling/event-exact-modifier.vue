<template>
  <div>
    <h1>8. .exact Modifier</h1>
    <p>
      <small>
        <i>
          .exact 用来跟系统修饰符（.ctrl，.alt，.shift，.meta）一起使用；
          表示在触发事件的时候，指定的系统按键必须处于按下状态；
          如果没有指定系统修饰符，表明在事件触发的时候，不能有任何的系统按键处于按下状态；
        </i>
      </small>
    </p>
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      placeholder="可以按住任意系统按键"
      @keyup.enter="handleKeyUp01"
    />
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      placeholder="不能按住任何系统按键"
      @keyup.enter.exact="handleKeyUp01"
    />
    <input
      style="padding: 7px;border-radius: 3px;"
      type="text"
      placeholder="只能按住 shift 按键"
      @keyup.enter.shift.exact="handleKeyUp01"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleKeyUp01(e) {
      if (e) {
        alert(e.code);
      }
    }
  }
};
</script>
