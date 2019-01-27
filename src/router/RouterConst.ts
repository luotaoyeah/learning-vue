const ROUTES_API = {
  GUIDE_INTRODUCTION_DECLARATIVE_RENDERING: {
    NAME: "GUIDE_INTRODUCTION_DECLARATIVE_RENDERING",
    PATH: "/guide/declarative-rendering"
  },
  GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP: {
    NAME: "GUIDE_INTRODUCTION_CONDITIONAL_AND_LOOP",
    PATH: "/guide/conditional-and-loop"
  },
  API_OPTIONS_DATA: {
    NAME: "API_OPTIONS_DATA",
    PATH: "/api/options-data"
  },
  API_OPTIONS_COMPOSITION: {
    NAME: "API_OPTIONS_COMPOSITION",
    PATH: "/api/options-composition"
  },
  API_OPTIONS_MISC: {
    NAME: "API_OPTIONS_MISC",
    PATH: "/api/options-misc"
  },
  API_INSTANCE_PROPERTIES: {
    NAME: "API_INSTANCE_PROPERTIES",
    PATH: "/api/instance_properties"
  },
  API_INSTANCE_METHODS_DATA: {
    NAME: "API_INSTANCE_METHODS_DATA",
    PATH: "/api/instance-methods/data"
  },
  API_INSTANCE_METHODS_EVENTS: {
    NAME: "API_INSTANCE_METHODS_EVENTS",
    PATH: "/api/instance-methods-events"
  },
  API_INSTANCE_METHODS_LIFECYCLE: {
    NAME: "API_INSTANCE_METHODS_LIFECYCLE",
    PATH: "/api/instance-methods-lifecycle"
  },
  API_SPECIAL_ATTRIBUTES: {
    NAME: "API_SPECIAL_ATTRIBUTES",
    PATH: "/api/special-attributes"
  },
  API_BUILTIN_COMPONENTS: {
    NAME: "API_BUILTIN_COMPONENTS",
    PATH: "/api/builtin-components"
  }
};

const ROUTES_WHATS_NEW = {
  WHATS_NEW_2_6_OBSERVABLE: {
    NAME: "WHATS_NEW_2_6_OBSERVABLE",
    PATH: "/whats-new/2-6-observable"
  },
  WHATS_NEW_2_6_BIND_PROP_SHORTCUT: {
    NAME: "WHATS_NEW_2_6_BIND_PROP_SHORTCUT",
    PATH: "/whats-new/2-6-bind-prop-shortcut"
  },
  WHATS_NEW_2_6_CUSTOM_TOSTRING: {
    NAME: "WHATS_NEW_2_6_CUSTOM_TOSTRING",
    PATH: "/whats-new/2-6-custom-tostring"
  },
  WHATS_NEW_2_6_ASYNC_ERROR_HANDLING: {
    NAME: "WHATS_NEW_2_6_ASYNC_ERROR_HANDLING",
    PATH: "/whats-new/2-6-async-error-handling"
  }
};

const ROUTES = {
  ...ROUTES_API,
  ...ROUTES_WHATS_NEW
};

export { ROUTES };
