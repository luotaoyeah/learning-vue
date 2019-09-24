<template>
  <el-tabs tabPosition="right" style="height: 100%;">
    <el-tab-pane label="Intro"> <Intro></Intro> </el-tab-pane>
    <el-tab-pane label="Hook Functions">
      <HookFunctions></HookFunctions>
    </el-tab-pane>
    <el-tab-pane label="Directive Hook Arguments">
      <HookArguments></HookArguments>
    </el-tab-pane>
    <el-tab-pane label="Function Shorthand">
      <FunctionShorthand></FunctionShorthand>
    </el-tab-pane>
    <el-tab-pane label="Object Literals">
      <ObjectLiterals></ObjectLiterals>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Intro from "./01-intro";
import HookFunctions from "./02-hook-functions";
import HookArguments from "./03-hook-arguments";
import FunctionShorthand from "./04-function-shorthand";
import ObjectLiterals from "./05-object-literals";

export default {
  data() {
    return {};
  },
  components: {
    Intro,
    HookFunctions,
    HookArguments,
    FunctionShorthand,
    ObjectLiterals,
  },
};
</script>
