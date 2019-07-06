import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { Component } from "vue-property-decorator";
import { LocaleProvider } from "ant-design-vue";
import { mixins } from "vue-class-component";
import { AppDeviceEnquire } from "@/utils/mixin";

@Component({})
export class App extends mixins(AppDeviceEnquire) {
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
