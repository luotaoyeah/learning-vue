import Vue from "vue";
import Antd from "ant-design-vue";
import VueStorage from "vue-ls";
import Viser from "viser-vue";
import VueCropper from "vue-cropper";
import "ant-design-vue/dist/antd.less";
import VueClipboard from "vue-clipboard2";
import config from "@/config/defaultSettings";
import PermissionHelper from "@/utils/helper/permission";
import "./directives/action";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

VueClipboard.config.autoSetContainer = true;

Vue.use(ElementUI, { size: "small" });
Vue.use(Antd);
Vue.use(Viser);
Vue.use(VueStorage, config.storageOptions);
Vue.use(VueClipboard);
Vue.use(PermissionHelper);
Vue.use(VueCropper);
