<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="Component files"> <C01></C01> </el-tab-pane>
    <el-tab-pane label="Single-file component filename casing">
      <C02></C02>
    </el-tab-pane>
    <el-tab-pane label="Base component names"> <C03></C03> </el-tab-pane>
    <el-tab-pane label="Single instance component names">
      <C04></C04>
    </el-tab-pane>
    <el-tab-pane label="Tightly coupled component names">
      <C05></C05>
    </el-tab-pane>
    <el-tab-pane label="Order of words in component names">
      <C06></C06>
    </el-tab-pane>
    <el-tab-pane label="Self-closing components"> <C07></C07> </el-tab-pane>
    <el-tab-pane label="Component name casing in templates">
      <C08></C08>
    </el-tab-pane>
    <el-tab-pane label="Component name casing in JS/JSX">
      <C09></C09>
    </el-tab-pane>
    <el-tab-pane label="Full-word component names"> <C10></C10> </el-tab-pane>
    <el-tab-pane label="Prop name casing"> <C11></C11> </el-tab-pane>
    <el-tab-pane label="Multi-attribute elements"> <C12></C12> </el-tab-pane>
    <el-tab-pane label="Simple expression in template">
      <C13></C13>
    </el-tab-pane>
    <el-tab-pane label="Simple computed properties"> <C14></C14> </el-tab-pane>
    <el-tab-pane label="Quoted attribute values"> <C15></C15> </el-tab-pane>
    <el-tab-pane label="Directive shorthands"> <C16></C16> </el-tab-pane>
  </el-tabs>
</template>

<script>
import C01 from "./01-component-files";
import C02 from "./02-sfc-filename-casing";
import C03 from "./03-base-component-names";
import C04 from "./04-single-instance-component-names";
import C05 from "./05-tightly-coupled-component-names";
import C06 from "./06-order-of-words-in-component-names";
import C07 from "./07-self-closing-component";
import C08 from "./08-component-name-casing-in-template";
import C09 from "./09-component-name-casing-in-jsx";
import C10 from "./10-full-word-component-names";
import C11 from "./11-prop-name-casing";
import C12 from "./12-multi-attribute-elements";
import C13 from "./13-simple-expression-in-template";
import C14 from "./14-simple-computed-properties";
import C15 from "./15-quoted-attribute-values";
import C16 from "./16-directive-shorthands";

export default {
  data() {
    return {};
  },
  components: {
    C01,
    C02,
    C03,
    C04,
    C05,
    C06,
    C07,
    C08,
    C09,
    C10,
    C11,
    C12,
    C13,
    C14,
    C15,
    C16
  }
};
</script>
