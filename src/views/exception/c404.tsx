import { Component, Vue } from "vue-property-decorator";
import { ExceptionPage } from "@/components";

@Component({})
export default class C404 extends Vue {
  public render() {
    return <ExceptionPage type="404" />;
  }
}
