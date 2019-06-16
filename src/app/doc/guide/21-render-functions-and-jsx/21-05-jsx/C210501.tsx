import { Component, Vue } from "vue-property-decorator";
import { Button } from "ant-design-vue";

@Component({})
export class C210501 extends Vue {
  public render() {
    return (
      <Button
        onClick={() => {
          console.log(`[${C210501.name}]\n CLICKED`);
        }}
      >
        CLICK ME
      </Button>
    );
  }
}
