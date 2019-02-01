<template>
  <el-tabs tab-position="left" style="height: 100%;">
    <el-tab-pane label="Basics"> <Basics></Basics> </el-tab-pane>
    <el-tab-pane label="Nodes，Trees，and the Virtual DOM">
      <NodesTreesAndVirtualDOM></NodesTreesAndVirtualDOM>
    </el-tab-pane>
    <el-tab-pane label="createElement Argumentes">
      <CteateElementArguments></CteateElementArguments>
    </el-tab-pane>
    <el-tab-pane label="Replacing Template Features with Plain JavaScript">
      <ReplacingTemplateWithJs></ReplacingTemplateWithJs>
    </el-tab-pane>
    <el-tab-pane label="JSX"> <JSX></JSX> </el-tab-pane>
    <el-tab-pane label="Functional Components">
      <FunctionalComponents></FunctionalComponents>
    </el-tab-pane>
    <el-tab-pane label="Template Compilation">
      <TemplateCompilation></TemplateCompilation>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Basics from "./01-basics";
import NodesTreesAndVirtualDOM from "./02-nodes-trees-and-virtual-dom";
import CteateElementArguments from "./03-createelement-arguments";
import ReplacingTemplateWithJs from "./04-00-replacing-template-features-with-plain-js";
import JSX from "./05-jsx";
import FunctionalComponents from "./06-00-functional-components";
import TemplateCompilation from "./07-template-compilation";

export default {
  data() {
    return {};
  },
  components: {
    Basics,
    NodesTreesAndVirtualDOM,
    CteateElementArguments,
    ReplacingTemplateWithJs,
    JSX,
    FunctionalComponents,
    TemplateCompilation
  }
};
</script>
