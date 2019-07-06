import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { Component, Vue } from "vue-property-decorator";
// TODO fix the mixin
// import { AppDeviceEnquire } from "@/utils/mixin";

@Component({})
export class App extends Vue {
  public render() {
    return (
      <a-locale-provider locale={zhCN}>
        <div id="app">
          <router-view />
        </div>
      </a-locale-provider>
    );
  }
}
