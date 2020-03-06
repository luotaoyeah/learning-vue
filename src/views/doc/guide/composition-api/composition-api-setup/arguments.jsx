// https://v3.vuejs.org/guide/composition-api-setup.html#arguments

import C01 from './arguments.01';

export default {
  data() {
    return { value01: 666 };
  },
  render() {
    return (
      <fieldset>
        <button
          style={{ borderRadius: '3px' }}
          onClick={() => {
            this.value01++;
          }}
        >
          increase
        </button>

        <C01 prop01={this.value01} prop02={this.value01} prop03={this.value01}></C01>
      </fieldset>
    );
  },
};
