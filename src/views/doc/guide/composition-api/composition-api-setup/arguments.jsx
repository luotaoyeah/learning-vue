// https://v3.vuejs.org/guide/composition-api-setup.html#arguments

import C01 from './arguments.01';

export default {
  data() {
    return { value01: 666 };
  },
  render() {
    return (
      <fieldset>
        <p>
          <button
            style={{ borderRadius: '3px' }}
            onClick={() => {
              this.value01++;
            }}
          >
            increase
          </button>
        </p>

        <C01
          prop01={this.value01}
          prop02={this.value01}
          prop03={this.value01}
          attr01={666}
          v-slots={{
            slot01: () => ['888'],
          }}
        ></C01>
      </fieldset>
    );
  },
};
