import C01 from './jsx.01.jsx';

// https://v3.vuejs.org/guide/render-function.html#jsx

export default {
  data() {
    return { value01: '' };
  },
  render() {
    return (
      <fieldset>
        <C01 v-model={[this.value01, 'title']}></C01>
        <span>{this.value01}</span>
      </fieldset>
    );
  },
};
