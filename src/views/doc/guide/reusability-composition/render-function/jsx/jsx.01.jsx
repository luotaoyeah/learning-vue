export default {
  props: ['title'],
  emits: ['update:title'],
  render() {
    return (
      <input
        style={{ borderRadius: '3px', marginRight: '12px' }}
        value={this.title}
        onInput={(event) => {
          this.$emit('update:title', event.target.value);
        }}
      />
    );
  },
};
