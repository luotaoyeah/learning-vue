const ROUTES_GUIDE = {
  GUIDE_INTRODUCTION_DECLARATIVE_RENDERING: {
    NAME: "GUIDE_INTRODUCTION_DECLARATIVE_RENDERING",
    PATH: "/guide/introduction/declarative-rendering"
  },
  GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP: {
    NAME: "GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP",
    PATH: "/guide/introduction/conditional-and-loop"
  },
  GUIDE_SLOTS_SLOT_CONTENT: {
    NAME: "GUIDE_SLOTS_SLOT_CONTENT",
    PATH: "/guide/slots/slot-content"
  },
  GUIDE_SLOTS_NAMED_SLOT: {
    NAME: "GUIDE_SLOTS_NAMED_SLOT",
    PATH: "/guide/slots/named-slot"
  },
  GUIDE_SLOTS_DEFAULT_SLOT_CONTENT: {
    NAME: "GUIDE_SLOTS_DEFAULT_SLOT_CONTENT",
    PATH: "/guide/slots/default-slot-content"
  },
  GUIDE_SLOTS_COMPILATION_SCOPE: {
    NAME: "GUIDE_SLOTS_COMPILATION_SCOPE",
    PATH: "/guide/slots/compilation-scope"
  },
  GUIDE_SLOTS_SCOPED_SLOT: {
    NAME: "GUIDE_SLOTS_SCOPED_SLOT",
    PATH: "/guide/slots/scoped-slot"
  },
  GUIDE_RENDER_FUNCTIONS_BASIC: {
    NAME: "GUIDE_RENDER_FUNCTIONS_BASIC",
    PATH: "/guide/render-function-and-jsx/basic"
  },
  GUIDE_RENDER_FUNCTIONS_VDOM: {
    NAME: "GUIDE_RENDER_FUNCTIONS_VDOM",
    PATH: "/guide/render-function-and-jsx/vdom"
  },
  GUIDE_RENDER_FUNCTIONS_CREATE_ELEMENT: {
    NAME: "GUIDE_RENDER_FUNCTIONS_CREATE_ELEMENT",
    PATH: "/guide/render-function-and-jsx/create-element"
  },
  GUIDE_RENDER_FUNCTIONS_TEMPLATE: {
    NAME: "GUIDE_RENDER_FUNCTIONS_TEMPLATE",
    PATH: "/guide/render-function-and-jsx/template"
  },
  GUIDE_RENDER_FUNCTIONS_JSX: {
    NAME: "GUIDE_RENDER_FUNCTIONS_JSX",
    PATH: "/guide/render-function-and-jsx/jsx"
  },
  GUIDE_RENDER_FUNCTIONS_FUNCTIONAL_COMPONENT: {
    NAME: "GUIDE_RENDER_FUNCTIONS_FUNCTIONAL_COMPONENT",
    PATH: "/guide/render-function-and-jsx/functional-component"
  },
  GUIDE_RENDER_FUNCTIONS_TEMPLATE_COMPILATION: {
    NAME: "GUIDE_RENDER_FUNCTIONS_TEMPLATE_COMPILATION",
    PATH: "/guide/render-function-and-jsx/template-compilation"
  }
};

const ROUTES_API = {
  _03_03_01: {
    NAME: "03-01-01",
    PATH: "/api/options-data"
  },
  _03_03_05: {
    NAME: "03-03-05",
    PATH: "/api/options-composition"
  },
  _03_03_06: {
    NAME: "03-03-06",
    PATH: "/api/options-misc"
  },
  _03_04: {
    NAME: "03-04",
    PATH: "/api/instance_properties"
  },
  _03_05_01: {
    NAME: "03-05-01",
    PATH: "/api/instance-methods/data"
  },
  _03_05_02: {
    NAME: "03-05-02",
    PATH: "/api/instance-methods-events"
  },
  _03_05_03: {
    NAME: "03-05-03",
    PATH: "/api/instance-methods-lifecycle"
  },
  _03_07: {
    NAME: "03-07",
    PATH: "/api/special-attributes"
  },
  _03_08: {
    NAME: "03-08",
    PATH: "/api/builtin-components"
  }
};

const ROUTES_WHATS_NEW = {
  _04_01_01: {
    NAME: "04-01-01",
    PATH: "/04/2-6/observable"
  },
  _04_01_02: {
    NAME: "WHATS_NEW_2_6_BIND_PROP_SHORTCUT",
    PATH: "/04/2-6/bind-prop-shortcut"
  },
  _04_01_03: {
    NAME: "WHATS_NEW_2_6_CUSTOM_TOSTRING",
    PATH: "/04/2-6/custom-tostring"
  },
  _04_01_04: {
    NAME: "WHATS_NEW_2_6_ASYNC_ERROR_HANDLING",
    PATH: "/04/2-6/async-error-handling"
  },
  _04_01_05: {
    NAME: "WHATS_NEW_2_6_V_FOR_SUPPORT_ITERABLE",
    PATH: "/04/2-6/v-for-support-iterable"
  },
  _04_01_06: {
    NAME: "WHATS_NEW_2_6_V_SLOT",
    PATH: "/04/2-6/v-slot"
  },
  _04_01_07: {
    NAME: "WHATS_NEW_2_6_SCOPED_SLOTS",
    PATH: "/04/2-6/scoped-slots"
  },
  _04_01_08: {
    NAME: "WHATS_NEW_2_6_DYNAMIC_DIRECTIVE_ARGUMENT",
    PATH: "/04/2-6/dynamic-directive-argument"
  },
  _04_01_09: {
    NAME: "WHATS_NEW_2_6_ALL_SLOTS_ON_$SCOPEDSLOTS",
    PATH: "/04/2-6/all-slots-on-$scopedslots"
  },
  _04_01_10: {
    NAME: "WHATS_NEW_2_6_KEBAB_CASE_UPDATE",
    PATH: "/04/2-6/kebab-case-update"
  }
};

const ROUTES = {
  ...ROUTES_GUIDE,
  ...ROUTES_API,
  ...ROUTES_WHATS_NEW
};

export { ROUTES };
