<template>
  <div
    style="padding: 10px;"
  >
    <p>
      <small>
        <i>
          指令是以 v- 开头的特殊属性；指令的属性值只能是一个表达式（除了 v-for）；指令的作用是根据其表达式的值，动态的修改 DOM 的属性和行为；
        </i>
      </small>
    </p>
    <DirectiveArgument></DirectiveArgument>
    <DirectiveModifier></DirectiveModifier>
    <DirectiveShorthands></DirectiveShorthands>
  </div>
</template>
<script>
import DirectiveArgument from "./directive-argument";
import DirectiveModifier from "./directive-modifier";
import DirectiveShorthands from "./directive-shorthands";

export default {
  components: {
    DirectiveArgument,
    DirectiveModifier,
    DirectiveShorthands
  }
};
</script>
<style scoped>
</style>
