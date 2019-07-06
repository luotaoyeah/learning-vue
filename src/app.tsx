import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { Component, Vue } from "vue-property-decorator";
import { LocaleProvider } from "ant-design-vue";
// TODO fix the mixin
// import { AppDeviceEnquire } from "@/utils/mixin";

@Component({})
export class App extends Vue {
  public render() {
    return (
      <LocaleProvider locale={zhCN}>
        <div id="app">
          <router-view />
        </div>
      </LocaleProvider>
    );
  }
}
