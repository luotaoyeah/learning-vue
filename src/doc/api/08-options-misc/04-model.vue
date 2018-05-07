<template>
  <div>
    <ul>
      <li>
        定义 v-model 语法糖所使用的 props 和 event；
      </li>
      <li>
        默认情况下，
        v-model 使用的 props 是 value，
        使用的 event 是 input；
        <p>
          <C01 v-model="checked"/>
          <C01
            :value="checked"
            @input="checked = $event"
          />
        </p>
      </li>
      <li>
        可以通过 model 定义其他的 props 和 event；
        <p>
          <C02 v-model="checked"></C02>
          <C02
            :my-value="checked"
            @my-input="checked = $event"
          ></C02>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: "checked"
    };
  },
  components: {
    C01: {
      render(h) {
        const vm = this;
        return h(
          "ElButton",
          {
            on: {
              click() {
                if (vm.value === "checked") {
                  vm.$emit("input", "unchecked");
                } else {
                  vm.$emit("input", "checked");
                }
              }
            }
          },
          [vm.value === "checked" ? "CHECKED" : "UNCHECKED"]
        );
      },
      props: {
        value: {
          type: String,
          default: "checked"
        }
      }
    },
    C02: {
      render(h) {
        const vm = this;
        return h(
          "ElButton",
          {
            on: {
              click() {
                if (vm.myValue === "checked") {
                  vm.$emit("myInput", "unchecked");
                } else {
                  vm.$emit("myInput", "checked");
                }
              }
            }
          },
          [vm.myValue === "checked" ? "CHECKED" : "UNCHECKED"]
        );
      },
      props: {
        myValue: {
          type: String,
          default: "checked"
        }
      },
      model: {
        prop: "myValue",
        event: "myInput"
      }
    }
  }
};
</script>
<style scoped>
</style>
